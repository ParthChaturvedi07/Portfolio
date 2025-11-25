import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import JavaScriptLogo from "../assets/images/javascript.png";
import cppLogo from "../assets/images/c-language.png";
import htmlLogo from "../assets/images/html.png";
import cssLogo from "../assets/images/css.png";
import NextJsLogo from "../assets/images/Nextjs.webp";
import ReactjsLogo from "../assets/images/reactjs.webp";
import ReduxLogo from "../assets/images/redux2.png";
import gsapLogo from "../assets/images/gsap.svg";
import MongoDbLogo from "../assets/images/mongoDB.webp";
import NodejsLogo from "../assets/images/nodejs.webp";
import expressLogo from "../assets/images/express.png";
import tailwindLogo from "../assets/images/tailwind.png";
import vscodeLogo from "../assets/images/vscode.webp";
import gitLogo from "../assets/images/git.webp";
import githubLogo from "../assets/images/github.webp";
import postmanLogo from "../assets/images/postman.svg";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  width: 100%;
  background-color: #000;
  padding: 4rem 2rem;
  color: #fff;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50px 50px 0 0;
  overflow: hidden;
  position: relative;

  @media only screen and (max-width: 768px) {
    padding: 2rem 1rem;
    border-radius: 30px 30px 0 0;
  }
`;

const Boxes_container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  max-width: 1400px;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    gap: 6rem;
  }

  @media only screen and (max-width: 768px) {
    gap: 4rem;
  }
`;

const Columns = styled.div`
  z-index: 10;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 2rem;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  &.box1 {
    .col-1 {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: center;
      justify-content: center;

      img:first-child {
        transform: rotate(-15deg);
        transition: transform 0.3s ease;
      }

      img:nth-child(2) {
        transform: rotate(15deg);
        transition: transform 0.3s ease;
      }

      &:hover img:first-child {
        transform: rotate(-5deg) scale(1.05);
      }

      &:hover img:nth-child(2) {
        transform: rotate(5deg) scale(1.05);
      }

      @media only screen and (max-width: 768px) {
        flex-direction: row;
        gap: 1.5rem;
        
        img:first-child {
          transform: rotate(-10deg);
        }
        img:nth-child(2) {
          transform: rotate(10deg);
        }
      }
    }

    .col-2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      
      h1 {
        font-size: clamp(2rem, 5vw, 4rem);
        text-transform: capitalize;
        text-align: center;
        margin-bottom: 1.5rem;
        font-weight: 700;
      }
      
      .text-box {
        max-width: 600px;
        
        ul {
          list-style: none;
          padding: 0;
          margin: 0 0 1rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          
          li {
            font-size: clamp(0.9rem, 1.5vw, 1.1rem);
            opacity: 0.9;
            position: relative;
            padding-left: 1.5rem;
            
            &::before {
              content: "▸";
              position: absolute;
              left: 0;
              color: #ffd700;
            }
          }
        }
        
        p {
          font-size: clamp(0.9rem, 1.5vw, 1.1rem);
          line-height: 1.8;
          opacity: 0.8;
          text-align: center;
        }
      }
    }

    .col-3 {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: center;
      justify-content: center;

      img:nth-child(1) {
        transform: rotate(15deg);
        transition: transform 0.3s ease;
      }
      img:nth-child(2) {
        transform: rotate(-15deg);
        transition: transform 0.3s ease;
      }

      &:hover img:nth-child(1) {
        transform: rotate(5deg) scale(1.05);
      }

      &:hover img:nth-child(2) {
        transform: rotate(-5deg) scale(1.05);
      }

      @media only screen and (max-width: 768px) {
        flex-direction: row;
        gap: 1.5rem;
        
        img:nth-child(1) {
          transform: rotate(10deg);
        }
        img:nth-child(2) {
          transform: rotate(-10deg);
        }
      }
    }
  }

  &.box2 {
    .col-1 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
      justify-items: center;
      align-items: center;

      img {
        transition: transform 0.3s ease;
      }

      img:first-child {
        transform: rotate(-15deg);
      }
      img:nth-child(2) {
        transform: rotate(15deg);
      }
      img:nth-child(3) {
        transform: rotate(10deg);
      }
      img:nth-child(4) {
        transform: rotate(-10deg);
      }

      &:hover img {
        transform: rotate(0deg) scale(1.05);
      }

      @media only screen and (max-width: 768px) {
        gap: 1rem;
      }
    }

    .col-2 {
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        font-size: clamp(1.8rem, 4vw, 3rem);
        text-transform: capitalize;
        text-align: center;
        margin-bottom: 1.5rem;
        font-weight: 700;
      }
      
      .text-box {
        max-width: 600px;
        
        ul {
          list-style: none;
          padding: 0;
          margin: 0 0 1rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          
          li {
            font-size: clamp(0.9rem, 1.5vw, 1.1rem);
            opacity: 0.9;
            position: relative;
            padding-left: 1.5rem;
            
            &::before {
              content: "▸";
              position: absolute;
              left: 0;
              color: #ffd700;
            }
          }
        }
        
        p {
          font-size: clamp(0.9rem, 1.5vw, 1.1rem);
          line-height: 1.8;
          opacity: 0.8;
          text-align: center;
        }
      }
    }

    .col-3 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
      justify-items: center;
      align-items: center;

      img {
        transition: transform 0.3s ease;
      }

      img:first-child {
        transform: rotate(10deg);
      }
      img:nth-child(2) {
        transform: rotate(-15deg);
      }
      img:nth-child(3) {
        transform: rotate(15deg);
      }
      img:nth-child(4) {
        transform: rotate(-10deg);
      }

      &:hover img {
        transform: rotate(0deg) scale(1.05);
      }

      @media only screen and (max-width: 768px) {
        gap: 1rem;
      }
    }
  }

  &.box3 {
    .col-1 {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: center;
      justify-content: center;
      position: relative;
      min-height: 300px;

      img {
        transition: transform 0.3s ease;
      }

      img:first-child {
        transform: rotate(-15deg);
      }

      img:nth-child(2) {
        transform: rotate(15deg);
      }

      &:hover img:first-child {
        transform: rotate(-5deg) scale(1.05);
      }

      &:hover img:nth-child(2) {
        transform: rotate(5deg) scale(1.05);
      }

      @media only screen and (max-width: 768px) {
        flex-direction: row;
        gap: 1.5rem;
        min-height: auto;
        
        img:first-child {
          transform: rotate(-10deg);
        }

        img:nth-child(2) {
          transform: rotate(10deg);
        }
      }
    }

    .col-2 {
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        font-size: clamp(1.8rem, 4vw, 3rem);
        text-transform: capitalize;
        text-align: center;
        margin-bottom: 1.5rem;
        font-weight: 700;
      }

      .text-box {
        max-width: 600px;
        
        ul {
          list-style: none;
          padding: 0;
          margin: 0 0 1rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          
           li {
            font-size: clamp(0.9rem, 1.5vw, 1.1rem);
            opacity: 0.9;
            position: relative;
            padding-left: 1.5rem;
            
            &::before {
              content: "▸";
              position: absolute;
              left: 0;
              color: #ffd700;
            }
          }
        }
        
        p {
          font-size: clamp(0.9rem, 1.5vw, 1.1rem);
          line-height: 1.8;
          opacity: 0.8;
          text-align: center;
        }
      }
    }

    .col-3 {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: center;
      justify-content: center;
      position: relative;
      min-height: 300px;

      img {
        transition: transform 0.3s ease;
      }

      img:first-child {
        transform: rotate(15deg);
      }

      img:nth-child(2) {
        transform: rotate(-25deg);
      }

      &:hover img:first-child {
        transform: rotate(5deg) scale(1.05);
      }

      &:hover img:nth-child(2) {
        transform: rotate(-15deg) scale(1.05);
      }

      @media only screen and (max-width: 768px) {
        flex-direction: row;
        gap: 1.5rem;
        min-height: auto;
        
        img:first-child {
          transform: rotate(10deg);
        }

        img:nth-child(2) {
          transform: rotate(-10deg);
        }
      }
    }
  }
`;

const Col = styled.div`
  img {
    height: clamp(120px, 15vw, 180px);
    width: clamp(110px, 14vw, 160px);
    object-fit: contain;
    filter: drop-shadow(0 4px 8px rgba(255, 215, 0, 0.2));
  }

  @media only screen and (max-width: 768px) {
    img {
      height: clamp(80px, 20vw, 120px);
      width: clamp(75px, 19vw, 110px);
    }
  }
`;

const SVG_Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  pointer-events: none;

  svg {
    height: 100%;
    width: auto;
    max-width: 100%;
    filter: drop-shadow(0 0 20px #ffd700) brightness(1.2);
    animation: pulseGlow 3s infinite;
  }

  @keyframes pulseGlow {
    0%, 100% {
      filter: drop-shadow(0 0 10px #ffd700) brightness(1);
    }
    50% {
      filter: drop-shadow(0 0 25px #ffd700) brightness(1.3);
    }
  }

  @media only screen and (max-width: 1024px) {
    opacity: 0.4;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Skills = () => {
  const SVG = useRef(null);
  const Path = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section",
        start: "top 40%",
        end: "top -120%",
        scrub: 3,
      },
    });

    tl.from(
      ".box1 .col-1",
      {
        opacity: 0,
        x: -150,
        duration: 2,
      },
      "move"
    );
    tl.from(
      ".box1 .col-2",
      {
        opacity: 0,
        y: 150,
        duration: 2,
      },
      "move"
    );
    tl.from(
      ".box1 .col-3",
      {
        opacity: 0,
        x: 150,
        duration: 2,
      },
      "move"
    );
    tl.from(
      ".box2 .col-1",
      {
        opacity: 0,
        x: -150,
        duration: 2,
      },
      "move1"
    );
    tl.from(
      ".box2 .col-2",
      {
        opacity: 0,
        y: 150,
        duration: 2,
      },
      "move1"
    );
    tl.from(
      ".box2 .col-3",
      {
        opacity: 0,
        x: 150,
        duration: 2,
      },
      "move1"
    );
    tl.from(
      ".box3 .col-1",
      {
        opacity: 0,
        x: -150,
        duration: 2,
      },
      "move2"
    );
    tl.from(
      ".box3 .col-2",
      {
        opacity: 0,
        y: 150,
        duration: 2,
      },
      "move2"
    );
    tl.from(
      ".box3 .col-3",
      {
        opacity: 0,
        x: 150,
        duration: 2,
      },
      "move2"
    );
    
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    if (Path.current) {
      const pathLength = Path.current.getTotalLength();

      gsap.set(Path.current, { strokeDasharray: pathLength });

      gsap.fromTo(
        Path.current,
        {
          strokeDashoffset: pathLength,
        },
        {
          strokeDashoffset: 0,
          duration: 10,
          ease: "none",
          scrollTrigger: {
            trigger: ".svg-container",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );
    }

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Section id="skills" className="section">
        <SVG_Container className="svg-container">
          <svg
            width="1097"
            height="1684"
            viewBox="0 0 1097 1756"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ref={SVG}
          >
            <path
              d="M575.395 1C575.395 1 241.895 131.235 188.131 320.537C93.9368 652.195 1135.55 675.299 1046.11 504.208C956.663 333.118 255.59 1168.44 188.131 836.326C120.672 504.208 1219 1319.91 1084.58 1020C950.167 720.085 1046.11 1681.21 217.114 1319.91C-611.88 958.606 1223.88 1309.57 1046.11 1603.72C913.313 1823.45 405.999 1739.08 405.999 1739.08"
              stroke="#ffd700"
              strokeWidth={3}
              ref={Path}
            />
          </svg>
        </SVG_Container>
        <Boxes_container>
          <Columns className="box1">
            <Col className="col-1">
              <img src={cppLogo} alt="C++ Logo" />
              <img src={JavaScriptLogo} alt="JavaScript Logo" />
            </Col>
            <Col className="col-2">
              <h1>
                <strong>Languages</strong>
              </h1>
              <div className="text-box">
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>C++</li>
                  <li>C</li>
                </ul>
                <p>
                  Proficient in developing and styling websites with fundamental
                  programming and scripting knowledge.
                </p>
              </div>
            </Col>
            <Col className="col-3">
              <img src={htmlLogo} alt="HTML Logo" />
              <img src={cssLogo} alt="CSS Logo" />
            </Col>
          </Columns>
          <Columns className="box2">
            <Col className="col-1">
              <img src={NextJsLogo} alt="Next.js Logo" />
              <img src={ReactjsLogo} alt="React Logo" />
              <img src={ReduxLogo} alt="Redux Logo" />
              <img src={gsapLogo} alt="GSAP Logo" />
            </Col>
            <Col className="col-2">
              <h1>
                <strong>Frameworks & Libraries</strong>
              </h1>
              <div className="text-box">
                <ul>
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>Redux</li>
                  <li>Ejs</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>Tailwind</li>
                  <li>GSAP</li>
                  <li>Framer Motion</li>
                  <li>3js (Beginner)</li>
                </ul>
                <p>
                  Experienced in building dynamic and responsive web
                  applications using modern frameworks and libraries.
                </p>
              </div>
            </Col>
            <Col className="col-3">
              <img src={NodejsLogo} alt="Node.js Logo" />
              <img src={tailwindLogo} alt="Tailwind Logo" />
              <img src={MongoDbLogo} alt="MongoDB Logo" />
              <img src={expressLogo} alt="Express Logo" />
            </Col>
          </Columns>
          <Columns className="box3">
            <Col className="col-1">
              <img src={vscodeLogo} alt="VSCode Logo" />
              <img src={gitLogo} alt="Git Logo" />
            </Col>
            <Col className="col-2">
              <h1>
                <strong>Tools & Platforms</strong>
              </h1>

              <div className="text-box">
                <ul>
                  <li>Gen AI</li>
                  <li>LLM</li>
                  <li>RAG</li>
                  <li>Langchain.js</li>
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>Postman</li>
                </ul>
                <p>
                  Skilled in using essential development tools and platforms to
                  ensure smooth project management and debugging.
                </p>
              </div>
            </Col>
            <Col className="col-3">
              <img src={githubLogo} alt="GitHub Logo" />
              <img src={postmanLogo} alt="Postman Logo" />
            </Col>
          </Columns>
        </Boxes_container>
      </Section>
    </>
  );
};