import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import styled from "styled-components";
import Orflax from "../assets/videos/orflax.mp4";
import CareerSthan from "../assets/videos/careersthan.mp4";
import Orflax_Img from "../assets/images/Orflax.png";
import CareerSthan_Img from "../assets/images/CareerSthan.png";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Hackathons_Container = styled.section`
  min-height: 100vh;
  width: 100%;
  color: #fff;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50px 50px 0 0;
  padding: 0 10vh;
  position: relative;
  overflow: hidden;
`;

const Yellow_Abstract = styled.div`
  position: absolute;
  right: 2%;
  top: 40%;
  height: 12vw;
  width: 12vw;
  opacity: 0.9;
  overflow: hidden;
  transform: rotate(90deg);
  animation: rotate 10s linear infinite;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Heading = styled.div`
  display: inline-block;
  transform: rotate(90deg);
  position: absolute;
  left: -14%;
  h1 {
    font-size: 4.5rem;
  }
`;

const Bento_Grid = styled.div`
  position: absolute;
  width: 65vw;
  height: 85vh;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "a11 a11 a12"
    "b11 b22 b22";
  gap: 0.625rem;

  .grid-item {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    border: none;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
  }

  .a11 {
    grid-area: a11;
  }

  .a12 {
    grid-area: a12;
    font-weight: 500;
  }

  .b11 {
    grid-area: b11;
    font-weight: 500;
  }

  .b22 {
    grid-area: b22;
  }
`;

const Video = styled.div`
  overflow: hidden;
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  video {
    z-index: 1;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    opacity: 0;
    transition: opacity 0.1s ease;
  }
`;

const About = styled.div`
  text-align: center;
  p {
    font-size: 0.8rem;
    line-height: 1.9;
    letter-spacing: 1.2px;
    max-width: 90%;
    margin: 10px auto;
  }

  button {
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 12px 32px;
    border: 4px solid;
    border-color: transparent;
    font-size: 16px;
    background-color: inherit;
    border-radius: 100px;
    font-weight: 600;
    color: #ffd700;
    box-shadow: 0 0 0 2px #ff8c00;
    cursor: none;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    transform: scale(0.78);

    svg {
      position: absolute;
      width: 24px;
      fill: #ffd700;
      z-index: 9;
      transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .arr-1 {
      right: 16px;
    }

    .arr-2 {
      left: -25%;
    }

    .circle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 20px;
      height: 20px;
      background-color: #ffd700;
      border-radius: 50%;
      opacity: 0;
      transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .text {
      position: relative;
      z-index: 1;
      transform: translateX(-12px);
      transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
    }

    &:hover {
      box-shadow: 0 0 0 12px transparent;
      color: #212121;
      border-radius: 12px;
    }

    &:hover .arr-1 {
      right: -25%;
    }

    &:hover .arr-2 {
      left: 16px;
    }

    &:hover .text {
      transform: translateX(12px);
    }

    &:hover svg {
      fill: #212121;
    }

    &:active {
      scale: 0.95;
      box-shadow: 0 0 0 4px #ffd700;
    }

    &:hover .circle {
      width: 220px;
      height: 220px;
      opacity: 1;
    }
  }
`;

export const Hackathons = () => {
  const Hack_Cont = useRef(null);
  const orflaxVideoRef = useRef(null);
  const careerSthanVideoRef = useRef(null);

  const videoPlay = (videoRef) => {
    const video = videoRef.current;
    if (video) {
      video.style.opacity = 1;
      video.play();
    }
  };
  const videoLoad = (videoRef) => {
    const video = videoRef.current;
    if (video) {
      video.style.opacity = 0;
      video.load();
    }
  };

  useGSAP(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: Hack_Cont.current,
        start: "top 50%",
        end: "top 0",
        // markers: true,
        scrub: true,
      },
    });
    tl.from(
      ".heading span",
      {
        opacity: 0,
        y: -40,
        ease: "power4.inOut",
        stagger: 0.1,
      },
      "down"
    );
    tl.from(
      ".Bento_Grid",
      {
        opacity: 0,
        duration: 2.5,
        y: -150,
        ease: "back.out(5)",
      },
      "down"
    );

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Hackathons_Container ref={Hack_Cont}>
      <Yellow_Abstract>
        <img
          src="https://static.vecteezy.com/system/resources/previews/029/460/724/non_2x/hud-futuristic-element-abstract-optical-neon-aim-circle-geometric-shape-for-virtual-interface-and-games-camera-viewfinder-for-sniper-weapon-png.png"
          alt=""
        />
      </Yellow_Abstract>
      <Heading className="heading">
        <h1>
          <span>H</span>
          <span>A</span>
          <span>C</span>
          <span>K</span>
          <span>A</span>
          <span>T</span>
          <span>H</span>
          <span>O</span>
          <span>N</span>
        </h1>
      </Heading>
      <Bento_Grid className="Bento_Grid">
        <Video className="grid-item a11">
          <img src={Orflax_Img} alt="" />
          <video
            ref={orflaxVideoRef}
            onMouseEnter={() => videoPlay(orflaxVideoRef)}
            onMouseLeave={() => videoLoad(orflaxVideoRef)}
            src={Orflax}
            muted
          ></video>
        </Video>
        <About className="grid-item a12">
          <p>
            My team 'DEVXINERS' and I secured the Runner-up position at the
            final round of the Reimagine Hackathon, Orflax Track of Innovortex
            2.0 , organized by TechNeeds IGDTUW at Microsoft office Gurgaon.
          </p>
          <button>
            <svg
              viewBox="0 0 24 24"
              class="arr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span class="text">View More</span>
            <span class="circle"></span>
            <svg
              viewBox="0 0 24 24"
              class="arr-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
        </About>
        <About className="grid-item b11">
          <p>
            AI-driven platform revolutionizing career development with
            skill-based job matchmaking, AI mock interviews, resume analysis,
            and blockchain-verified certifications, offering internships, job
            simulations, and mental health support for holistic growth.
          </p>
          <button>
            <svg
              viewBox="0 0 24 24"
              class="arr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span class="text">View More</span>
            <span class="circle"></span>
            <svg
              viewBox="0 0 24 24"
              class="arr-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
        </About>
        <Video className="grid-item b22">
          <img src={CareerSthan_Img} alt="" />
          <video
            ref={careerSthanVideoRef}
            onMouseEnter={() => videoPlay(careerSthanVideoRef)}
            onMouseLeave={() => videoLoad(careerSthanVideoRef)}
            src={CareerSthan}
            muted
          ></video>
        </Video>
      </Bento_Grid>
    </Hackathons_Container>
  );
};
