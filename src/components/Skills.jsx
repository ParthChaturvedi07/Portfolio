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
  padding: 3.1rem;
  color: #fff;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50px 50px 0 0;
  overflow: hidden;
  position: relative;
`;

const Boxes_container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

const Columns = styled.div`
  z-index: 10;
  display: flex;
  gap: 1.5rem;

  &.box1 {
    .col-1 {
      display: flex;
      gap: 1.5rem;
      flex: 5;

      img:first-child {
        transform: rotate(-45deg);
      }

      img:nth-child(2) {
        align-self: center;
        transform: rotate(20deg);
      }
    }

    .col-2 {
      margin: auto;
      h1 {
        font-size: 100px;
        text-transform: capitalize;
        text-align: center;
      }
      .text-box ul li,
      .text-box p {
        justify-self: center;
        font-size: 1rem;
        line-height: 1.9;
        padding-bottom: 0.5rem;
        opacity: 0.8;
        text-align: center;
      }
    }

    .col-3 {
      display: flex;
      gap: 2.5rem;
      // flex-direction: column;
      flex: 4;

      img:nth-child(1) {
        transform: rotate(20deg);
      }
      img:nth-child(2) {
        transform: rotate(-20deg);
        align-self: center;
      }
    }
  }

  &.box2 {
    .col-1 {
      display: flex;
      flex-wrap: wrap;

      img:first-child {
        transform: rotate(-20deg);
      }
      img:nth-child(2) {
        transform: rotate(20deg);
      }
      img:nth-child(3) {
        transform: rotate(10deg);
      }
    }

    .col-2 {
      margin: auto;

      h1 {
        font-size: 50px;
        text-transform: capitalize;
        text-align: center;
      }
      .text-box ul li,
      .text-box p {
        justify-self: center;
        font-size: 1rem;
        line-height: 1.9;
        padding-bottom: 0.5rem;
        opacity: 0.8;
        text-align: center;
      }
    }

    .col-3 {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;

      img:first-child {
        transform: rotate(10deg);
      }
      img:nth-child(2) {
        transform: rotate(-20deg);
      }
      img:nth-child(3) {
        transform: rotate(10deg);
      }
      img:nth-child(4) {
        transform: rotate(-20deg);
      }
    }
  }

  &.box3 {
    .col-1 {
      display: flex;
      gap: 1.5rem;
      flex-direction: column;
      width: 50vh;
      position: relative;

      img:first-child {
        position: absolute;
        right: 0;
        transform: rotate(-10deg);
      }

      img:nth-child(2) {
        position: absolute;
        left: 0;
        bottom: 0;
        transform: rotate(10deg);
      }
    }

    .col-2 {
      margin: auto;
      h1 {
        font-size: 50px;
        text-transform: capitalize;
        text-align: center;
      }
      .text-box ul li,
      .text-box p {
        justify-self: center;
        font-size: 1rem;
        line-height: 1.9;
        padding-bottom: 0.5rem;
        opacity: 0.8;
        text-align: center;
      }
    }

    .col-3 {
      display: flex;
      gap: 1.5rem;
      flex-direction: column;
      width: 50vh;
      height: 65vh;
      position: relative;

      img:first-child {
        position: absolute;
        left: 0;
        transform: rotate(10deg);
      }

      img:nth-child(2) {
        position: absolute;
        right: 0;
        bottom: 0;
        transform: rotate(-50deg);
      }
    }
  }
`;

const Col = styled.div`
  img {
    height: 190px;
    width: 170px;
    object-fit: cover;
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
  height: 1684px;
  opacity: 0.8;

  svg {
    height: 100%;
    filter: drop-shadow(0 0 20px #ffd700) brightness(1.2);
    animation: pulseGlow 3s infinite;
  }

  @keyframes pulseGlow {
    0% {
      filter: drop-shadow(0 0 10px #ffd700);
    }
    50% {
      filter: drop-shadow(0 0 20px #ffd700);
    }
    100% {
      filter: drop-shadow(0 0 10px #ffd700);
    }
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
        // markers: true,
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
        x: 150,
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
    const pathLength = Path.current.getTotalLength();

    console.log(pathLength);

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
          // markers: true,
          scrub: 1,
        },
      }
    );

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);
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
              <img src={cppLogo} alt="" />
              <img src={JavaScriptLogo} alt="" />
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
              <img src={htmlLogo} alt="" />
              <img src={cssLogo} alt="" />
            </Col>
          </Columns>
          <Columns className="box2">
            <Col className="col-1">
              <img src={NextJsLogo} alt="" />
              <img src={ReactjsLogo} alt="" />
              <img src={ReduxLogo} alt="" />
              <img src={gsapLogo} alt="" />
            </Col>
            <Col className="col-2">
              <h1>
                <strong>Frameworks and Libraries</strong>
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
              <img src={NodejsLogo} alt="" />
              <img src={tailwindLogo} alt="" />
              <img src={MongoDbLogo} alt="" />
              <img src={expressLogo} alt="" />
            </Col>
          </Columns>
          <Columns className="box3">
            <Col className="col-1">
              <img src={vscodeLogo} alt="" />
              <img src={gitLogo} alt="" />
            </Col>
            <Col className="col-2">
              <h1>
                <strong>Tools & Platforms:</strong>
              </h1>

              <div className="text-box">
                <ul>
                  <li>VS Code</li>
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
              <img src={githubLogo} alt="" />
              <img src={postmanLogo} alt="" />
            </Col>
          </Columns>
        </Boxes_container>
      </Section>
    </>
  );
};
