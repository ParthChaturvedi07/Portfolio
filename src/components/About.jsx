import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownLong,
  faHandPointDown,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Video from "../assets/videos/176963-856267342.mp4";
import WindowImage from "../assets/images/window.png";

gsap.registerPlugin(ScrollTrigger);

const Triggerer_Div = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 1px;
`;
const Main = styled.div`
  color: white;
  height: 100vh;
  width: 100%;
  position: relative;
  border-top: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px 50px 0 0;
  overflow: hidden;
`;

const VideoContainer = styled.div`
  video {
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }
`;

const ImgContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const TextContent = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    height: auto;
    justify-content: flex-start;
  }
`;

const ImgText = styled.div``;

const Title = styled.div`
  width: 450px;
  position: relative;
  overflow: hidden;

  &:nth-child(1) {
    font-size: 3.125rem;
    left: -72%;
    height: 18vh;
    margin-bottom: 5vh;
  }

  &:nth-child(2) {
    left: -72%;
    height: 25vh;

    span {
      font-size: 1.2rem;
      line-height: 1.3;
    }
  }

  &:nth-child(3) {
    font-size: 3.125rem;
    left: 85%;
    height: 10vh;
  }

  &:nth-child(4) {
    left: 85%;
    height: 21vh;

    span {
      font-size: 1.2rem;
      line-height: 1.3;
    }
  }

  span {
    position: absolute;
  }

  @media only screen and (max-width: 480px) {
    &:nth-child(1) {
      font-size: 1.5rem;
      font-weight: bold;
      left: 18%;
      top: 15vh;
    }

    &:nth-child(2) {
      left: 18%;
      height: 25vh;
      width: 60%;

      span {
        font-size: 0.8rem;
        line-height: 1.3;
      }
    }

    &:nth-child(3) {
      font-size: 1.5rem;
      left: 18%;
      height: 10vh;
    }

    &:nth-child(4) {
      left: 18%;
      height: 21vh;
      width: 60%;
      span {
        font-size: 0.8rem;
        line-height: 1.3;
      }
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    &:nth-child(1) {
      font-size: 2rem;
      font-weight: bold;
      left: -13vh;
      top: 15vh;
    }

    &:nth-child(2) {
      left: -13vh;
      height: 28vh;
      width: 60%;

      span {
        font-size: 0.9rem;
        line-height: 1.3;
      }
    }

    &:nth-child(3) {
      font-size: 1.5rem;
      left: 78%;
      height: 10vh;
    }

    &:nth-child(4) {
      left: 78%;
      height: 21vh;
      width: 55%;
      span {
        font-size: 0.9rem;
        line-height: 1.3;
      }
    }
  }
`;

const TextBottom = styled.p`
  transform: translateY(5vh);
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 12px;
  font-weight: 300;

  @media only screen and (max-width: 480px) {
    font-size: 0.5rem;
    text-align: center;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 0.7rem;
    text-align: center;
  }
`;

const V_container = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media only screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const TV = styled.div`
  display: flex;
  text-transform: capitalize;
  div {
    &:nth-child(1) {
      font-size: 3.125rem;
      font-weight: bold;
    }
    &:nth-child(2) {
      font-size: 1.2rem;
      color: #ffd700;
    }
    &:nth-child(3) {
      font-size: 3.125rem;
      transform: translateY(5vh);
      font-weight: bold;
    }
  }

  @media only screen and (max-width: 480px) {
    div {
      &:nth-child(1) {
        font-size: 2.125rem;
      }
      &:nth-child(2) {
        font-size: 1rem;
      }
      &:nth-child(3) {
        font-size: 2.125rem;
      }
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    div {
      &:nth-child(1) {
        font-size: 2.8rem;
      }
      &:nth-child(2) {
        font-size: 1rem;
      }
      &:nth-child(3) {
        font-size: 2.8rem;
      }
    }
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 4rem;
  gap: 5rem;
`;

const RightSide = styled.div`
  margin: auto;
  width: 120px;
  height: 120px;
  border-top: 2px solid;
  border-bottom: 2px solid;
  border-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  position: relative;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.4rem;
    position: absolute;
    text-transform: uppercase;
    font-size: 0.8rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;

    .downarrow {
      animation: bounce 1.5s ease-in-out infinite;
    }

    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(5px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }

  @media only screen and (max-width: 480px) {
    width: 90px;
    height: 90px;

    p {
      font-size: 0.75rem;
      gap: 0.2rem;
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 100px;
    height: 100px;

    p{
      font-size: 0.7rem;
      gap: 0.4rem;
    }
  }
`;

const Text_Container = styled.div`
  max-width: 560px;

  p {
    padding-bottom: 1rem;
    line-height: 1.4;
    opacity: 0.9;
  }

  @media only screen and (max-width: 480px) {
    p {
      font-size: 1.1rem;
    }
  }
`;

export const About = () => {
  useGSAP(() => {
    var tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".triggerer",
        scroller: "body",
        start: "top 35%",
        end: "top 0",
        scrub: 3,
      },
    });
    tl1.from(
      ".title span",
      {
        y: 150,
        skewY: 7,
      },
      "anim"
    );

    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".video-section",
        scroller: "body",
        start: "top top",
        end: "bottom 40%",
        // markers: true,
        scrub: 3,
        pin: true,
      },
    });
    tl2.to(
      ".img-container",
      {
        scale: 26,
        ease: "ease-out",
        duration: 2,
        delay: 3,
      },
      "zoom"
    );

    tl2.to(
      ".right",
      {
        autoAlpha: 0,
        x: 500,
        delay: 3,
      },
      "zoom"
    );

    tl2.to(
      ".left",
      {
        autoAlpha: 0,
        x: -500,
        delay: 3,
      },
      "zoom"
    );

    tl2.to(
      ".txt-bottom",
      {
        autoAlpha: 0,
        letterSpacing: -10,
        duration: 2,
        delay: 2,
      },
      "zoom"
    );

    tl2.from(
      ".left-side",
      {
        y: 150,
        opacity: 0,
        stagger: {
          amount: 0.4,
        },
      },
      "move"
    );
    tl2.from(
      ".right-side",
      {
        y: -150,
        opacity: 0,
        stagger: {
          amount: 0.4,
        },
      },
      "move"
    );
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Triggerer_Div className="triggerer"></Triggerer_Div>
      <Main id="about" className="video-section">
        <VideoContainer>
          <video src="https://res.cloudinary.com/drtyehnro/video/upload/v1755363432/176963-856267342_zfosia.mp4" autoPlay loop muted></video>
        </VideoContainer>
        <ImgContainer className="img-container">
          <img src={WindowImage} alt="" />
        </ImgContainer>
        <TextContent>
          <ImgText>
            <Title className="title left">
              <span>I’m a Web Developer</span>
            </Title>
            <Title className="title left">
              <span>
                and a B.Tech student in Data Science Engineering at JSS Academy
                of Technical Education, Noida. With a unique blend of full-stack
                web development expertise, data-driven problem-solving, and a
                knack for bringing ideas to life, I thrive on turning concepts
                into impactful realities.
              </span>
            </Title>
            <Title className="title right">
              <span>&</span>
            </Title>
            <Title className="title right">
              <span>
                Beyond coding, I’m an all-rounder who balances tech with
                creativity—be it building dynamic web experiences or tackling
                real-world challenges, I bring passion, innovation, and
                versatility to everything I do.
              </span>
            </Title>
          </ImgText>
          <TextBottom className="txt-bottom">Code, Drama, 3D, Spin</TextBottom>
        </TextContent>
        <V_container>
          <LeftSide className="left-side">
            <TV>
              <div>Fueled</div>
              <div>by</div>
              <div>Growth</div>
            </TV>
            <Text_Container>
              <p>
                I am always exploring new technologies and honing my skills to
                stay ahead in the ever-evolving tech landscape
              </p>
              <p>
                With a strong focus on both personal and professional growth, I
                am committed to building innovative solutions that make a
                difference.
              </p>
            </Text_Container>
          </LeftSide>
          <RightSide className="right-side">
            <p>
              Skill Sets
              <FontAwesomeIcon className="downarrow" icon={faArrowDownLong} />
            </p>
          </RightSide>
        </V_container>
      </Main>
    </>
  );
};
