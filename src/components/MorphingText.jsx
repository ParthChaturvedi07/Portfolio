import { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

const morphTime = 1.5;
const cooldownTime = 0.5;

const Container = styled.div`
  position: relative;
  margin: auto;
  height: 120px;
  width: 100%;
  max-width: 900px;
  text-align: center;
  font-family: sans-serif;
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: bold;
  line-height: 1;
  color: #ffd700;
  text-transform: uppercase;
  filter: url(#threshold) blur(0.6px);
`;

const TextSpan = styled.span`
  position: absolute;
  inset: 0;
  margin: auto;
  display: inline-block;
  width: 100%;
`;

const ReadyButton = styled.button`
  padding: 16px 48px;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0.1em;
  border: none;
  border-radius: 5px;
  color: #ffd700;
  background-color: transparent;
  position: relative;
  text-decoration: none;
  cursor: pointer;

  &:after {
    padding: 16px 48px;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0.1em;
    border: none;
    border-radius: 5px;
    color: #ffd700;
    background-color: transparent;
    position: relative;
    --move1: inset(50% 50% 50% 50%);
    --move2: inset(31% 0 40% 0);
    --move3: inset(39% 0 15% 0);
    --move4: inset(45% 0 40% 0);
    --move5: inset(45% 0 6% 0);
    --move6: inset(14% 0 61% 0);
    clip-path: var(--move1);
    content: "READY";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
  }

  &:hover:after {
    animation: glitch_4011 1s;
    text-shadow: -3px -3px 0px #ffae00, 3px 3px 0px #b7ff00;
    animation-timing-function: steps(2, end);
    background-color: transparent;
    border: 3px solid #ffae00;
  }

  &:hover {
    text-shadow: -1px -1px 0px #ffae00, 1px 1px 0px #b7ff00;
    background-color: transparent;
    border: 1px solid #ffae00;
    box-shadow: 0 0px 10px -2px #ffd700;
  }

  @keyframes glitch_4011 {
    0% {
      clip-path: var(--move1);
      transform: translate(0px, -10px);
    }
    10% {
      clip-path: var(--move2);
      transform: translate(-10px, 10px);
    }
    20% {
      clip-path: var(--move3);
      transform: translate(10px, 0px);
    }
    30% {
      clip-path: var(--move4);
      transform: translate(-10px, 10px);
    }
    40% {
      clip-path: var(--move5);
      transform: translate(10px, -10px);
    }
    50% {
      clip-path: var(--move6);
      transform: translate(-10px, 10px);
    }
    60% {
      clip-path: var(--move1);
      transform: translate(10px, -10px);
    }
    70% {
      clip-path: var(--move3);
      transform: translate(-10px, 10px);
    }
    80% {
      clip-path: var(--move2);
      transform: translate(10px, -10px);
    }
    90% {
      clip-path: var(--move4);
      transform: translate(-10px, 10px);
    }
    100% {
      clip-path: var(--move1);
      transform: translate(0);
    }
  }
`;

const useMorphingText = (texts, onFinish) => {
  const textIndexRef = useRef(0);
  const morphRef = useRef(0);
  const cooldownRef = useRef(0);
  const timeRef = useRef(new Date());
  const finishedRef = useRef(false);

  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  const setStyles = useCallback(
    (fraction) => {
      const current1 = text1Ref.current;
      const current2 = text2Ref.current;
      if (!current1 || !current2) return;

      current2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      current2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      const invertedFraction = 1 - fraction;
      current1.style.filter = `blur(${Math.min(8 / invertedFraction - 8, 100)}px)`;
      current1.style.opacity = `${Math.pow(invertedFraction, 0.4) * 100}%`;

      current1.textContent = texts[textIndexRef.current % texts.length];
      current2.textContent = texts[(textIndexRef.current + 1) % texts.length];
    },
    [texts]
  );

  const doMorph = useCallback(() => {
    morphRef.current -= cooldownRef.current;
    cooldownRef.current = 0;

    let fraction = morphRef.current / morphTime;

    if (fraction > 1) {
      cooldownRef.current = cooldownTime;
      fraction = 1;
    }

    setStyles(fraction);

    if (fraction === 1) {
      textIndexRef.current++;

      if (textIndexRef.current >= texts.length - 1) {
        finishedRef.current = true;
        if (onFinish) {
          onFinish();    
        }
      }
    }
  }, [setStyles, texts, onFinish]);

  const doCooldown = useCallback(() => {
    morphRef.current = 0;

    const current1 = text1Ref.current;
    const current2 = text2Ref.current;

    if (current1 && current2) {
      current2.style.filter = "none";
      current2.style.opacity = "100%";
      current1.style.filter = "none";
      current1.style.opacity = "0%";
    }
  }, []);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      if (finishedRef.current) return;
      
      animationFrameId = requestAnimationFrame(animate);

      const newTime = new Date();
      const dt = (newTime - timeRef.current) / 1000;
      timeRef.current = newTime;

      cooldownRef.current -= dt;

      if (cooldownRef.current <= 0) doMorph();
      else doCooldown();
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [doMorph, doCooldown]);

  return { text1Ref, text2Ref };
};

export default function MorphingText({ texts, onFinish }) {
  const { text1Ref, text2Ref } = useMorphingText(texts, onFinish);

  return (
    <Container>
      <TextSpan ref={text1Ref} />
      <TextSpan ref={text2Ref} />

      <svg id="filters" style={{ display: "none" }}>
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
    </Container>
  );
}

export { ReadyButton };