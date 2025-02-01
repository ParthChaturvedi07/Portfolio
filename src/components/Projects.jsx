import React, { useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import bg from "../assets/images/yellowCircle.png";
import OMask from "../assets/images/O.png";
import { useGSAP } from "@gsap/react";
import portfolioIMG from "../assets/images/Portfolio.png";
import appleSiteIMG from "../assets/images/Applewsbst.png";
import LazarevIMG from "../assets/images/Lazarevwbst.png";
import MMILImg from "../assets/images/MMIL.png";
import EcommmerceIMG from "../assets/images/Ecommercewbst.png";
import E_equilibriumIMG from "../assets/images/EmpheralEquilibrium.png";
import Chat_App_IMG from "../assets/images/ChatApp.png";
import Linkedin_IMG from "../assets/images/Linkedin.png";
import Backend1 from "../assets/images/backend1.webp";
import Backend2 from "../assets/images/Backend2.webp";
import Model_1 from "../assets/images/ProjectModel(1).png";
import Model_2 from "../assets/images/ProjectModel(2).png";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Main = styled.main`
  overflow: hidden;
  min-height: 240vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: black;
  color: #fff;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50px 50px 0 0;
  position: relative;

  @media only screen and (min-width : 480px) {
  
  }

`;

const Section = styled.section``;

const Img_Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    -webkit-mask-image: url(${(props) => props.maskImage});
    -webkit-mask-size: cover;
    -webkit-mask-position: center;
    -webkit-mask-repeat: no-repeat;
    width: 88vh;
    height: 88vh;
    mask-image: url(${(props) => props.maskImage});
    mask-size: cover;
    mask-repeat: no-repeat;
    mask-position: center;
  }
`;

const Text_Content = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 6.2rem;

    span {
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-color: #ffd700;
      -webkit-text-stroke-width: 1px;
    }
  }

  p {
    opacity: 0.6;
    font-size: 0.75rem;
    width: 17vw;
    text-align: center;
    letter-spacing: 4px;
  }
`;

const Project_Container_1 = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
`;

const Project_Container_2 = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const Slider = styled.div`
  position: absolute;
  width: 70vh;
  height: 40vh;
  top: 5%;
  left: calc(50% - 34vh);
  transform: translate(-50%, -50%) rotateY(0deg);
  transform-style: preserve-3d;
  transform: perspective(2000px);
  perspective-origin: center;
  animation: autoRun 20s linear infinite;
  z-index: 2;

  @keyframes autoRun {
    from {
      transform: perspective(2000px) rotateX(-16deg) rotateY(0deg);
    }
    to {
      transform: perspective(2000px) rotateX(-16deg) rotateY(360deg);
    }
  }
`;

const Card = styled.div`
  position: absolute;
  inset: 0 0 0 0;
  transform: rotateY(
      calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)
    )
    translateZ(500px);
  width: 70vh;
  height: 40vh;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px #ffffff80;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    box-shadow: 0 0 20px 5px rgba(255, 215, 0, 0.8),
      0 8px 16px rgba(255, 255, 255, 0.2);
    filter: brightness(1.2);
  }

  .link {
    height: 100%;
    width: 100%;
  }
`;

const Card_2 = styled.div`
  position: absolute;
  inset: 0 0 0 0;
  transform: rotateY(
      calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)
    )
    translateZ(400px);
  width: 70vh;
  height: 40vh;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px #ffffff80;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    box-shadow: 0 0 20px 5px rgba(255, 215, 0, 0.8),
      0 8px 16px rgba(255, 255, 255, 0.2);
    filter: brightness(1.2);
  }

  .link {
    height: 100%;
    width: 100%;
  }
`;

const Project_Cover = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  ${Card}:hover & {
    transform: rotateX(0deg);
  }

  ${Card_2}:hover & {
    transform: rotateX(0deg);
  }
`;

const CardTitle = styled.p`
  margin: 0;
  font-size: 24px;
  color: #ff8c00;
  font-weight: 700;
`;

const CardDescription = styled.p`
  margin: 10px 0 0;
  font-size: 14px;
  color: #fff;
  line-height: 1.4;
  font-weight: 500;
`;

const Content_Type = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: max-content;
  padding: 0 6vh 10vh 6vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 8em;
    line-height: 1em;
    color: #ffd700;

    &::after {
      position: absolute;
      inset: 0 0 0 0;
      content: attr(data-content);
      padding: 0 6vh 10vh 6vh;
      z-index: 2;
      -webkit-text-stroke: 2px #ffd700;
      color: transparent;
    }
  }

  p {
    text-align: right;
    max-width: 40vh;
  }
`;

const Model = styled.div`
  width: 100%;
  height: 75vh;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

export const Projects = () => {
  const Circle = useRef(null);
  const Proj_Con_1 = useRef(null);
  const Proj_Con_2 = useRef(null);

  useGSAP(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        // scroller: "body",
        start: "top 10%",
        end: "top -40%",
        // markers: true,
        pin: true,
        scrub: 1,
      },
    });
    tl.to(
      Circle.current,
      {
        scale: 52,
        duration: 1,
      },
      "enlarge"
    );
    tl.to(
      ".mask-container .text-content",
      {
        y: -200,
        opacity: 0,
        duration: 0.5,
      },
      "enlarge"
    );
    tl.from(Proj_Con_1.current, {
      opacity: 0,
      scale: 0.7,
      ease: "ease-in-out",
    });

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Main Content */}
      <Main id="projects" className="main">
        <Section className="mask-section">
          <Img_Container className="mask-container" maskImage={OMask}>
            <img ref={Circle} src={bg} alt="Yellow Circle" />
            <Text_Content className="text-content">
              <h1>
                <span>Projects</span>Showcase
              </h1>
              <p>Showcasing innovative and impactful projects.</p>
            </Text_Content>
          </Img_Container>
        </Section>
        <Project_Container_1 ref={Proj_Con_1}>
          <Slider style={{ "--quantity": 6 }}>
            <Card style={{ "--position": 1 }}>
              <Link
                to="https://parthchaturvedi07.github.io/lazarev/"
                className="link"
              >
                <Project_Cover>
                  <img src={LazarevIMG} alt="Lazarev" />
                </Project_Cover>
                <CardContent>
                  <CardTitle>Lazarev</CardTitle>
                  <CardDescription>
                    Revamped As a leading digital product design agency, Lazarev
                    which offers custom-tailored solutions focused on your
                    business growth. Discover how we can bring your digital
                    product to life.
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>
            <Card style={{ "--position": 2 }}>
              <Link to="https://iphonecentral15.netlify.app/" className="link">
                <Project_Cover>
                  <img src={appleSiteIMG} alt="Apple" />
                </Project_Cover>
                <CardContent>
                  <CardTitle>I Clone 15</CardTitle>
                  <CardDescription>
                    a fully interactive iPhone 15 clone built using React,
                    Three.js, GSAP, and Tailwind CSS! <br /> For this project, I
                    focused on creating a modern, interactive UI inspired by the
                    iPhone 15’s sleek design. The goal was to deliver a smooth,
                    engaging user experience with advanced animations, 3D
                    effects, and responsive styling.
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>
            <Card style={{ "--position": 3 }}>
              <Link
                to="https://mmil-website-2k24-frontend.onrender.com/"
                className="link"
              >
                <Project_Cover>
                  <img src={MMILImg} alt="MMIL website" />
                </Project_Cover>
                <CardContent>
                  <CardTitle>MMIL Website</CardTitle>
                  <CardDescription>
                    Worked in a team developing my College's tech society,
                    Microsoft Mobile Innovation Lab's website fully based on
                    React and a bit of backend with Node.js and Express.js
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>
            <Card style={{ "--position": 4 }}>
              <Link
                to="https://parthchaturvedi07.github.io/GSAP-proj.2-/"
                className="link"
              >
                <Project_Cover>
                  <img src={E_equilibriumIMG} alt="Empheral Eqilibrium" />
                </Project_Cover>
                <CardContent>
                  <CardTitle>Empheral Equilibrium</CardTitle>
                  <CardDescription style={{ color: "black" }}>
                    Dynamic Sustainability Web i.e Empheral Equilibrium with
                    GSAP & Locomotive Scroll" is a web development project
                    showcasing modern design techniques and a sustainability
                    theme. It features advanced animations, smooth scrolling,
                    and interactive elements, created using HTML, CSS,
                    JavaScript, GSAP, and Locomotive Scroll. The project aims to
                    promote eco-friendly practices through engaging web
                    experiences.
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>
            <Card style={{ "--position": 5 }}>
              <Link
                to="https://parthchaturvedi07.github.io/e-commerce-website/#"
                className="link"
              >
                <Project_Cover>
                  <img src={EcommmerceIMG} alt="E-commmerce" />
                </Project_Cover>
                <CardContent>
                  <CardTitle>StyleHub 🛍️: Ecommerce website 💻</CardTitle>
                  <CardDescription>
                    I developed an eCommerce website as a part of my learning
                    journey in web development. This project aimed to create a
                    platform where users can browse, select, and purchase
                    products online. The website features a user-friendly
                    interface with various functionalities to enhance the
                    shopping experience.
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>

            <Card style={{ "--position": 6 }}>
              <Link to="" className="link">
                <Project_Cover>
                  <img src={portfolioIMG} alt="Portfolio" />
                </Project_Cover>
                <CardContent>
                  <CardTitle>Lazarev</CardTitle>
                  <CardDescription>
                    My portfolio highlights a diverse range of frontend
                    development skills, showcasing innovative animations,
                    creative problem-solving, and advanced 3D rendering
                    techniques. It reflects a seamless blend of functional and
                    creative development, emphasizing versatility and attention
                    to detail in building dynamic and visually captivating user
                    experiences
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>
          </Slider>
          <Content_Type>
            <h1 data-content="FRONTEND">FRONTEND</h1>
            <p>
              Crafting engaging user interfaces with clean code and seamless
              animations
            </p>
            <Model>
              <img src={Model_1} alt="Model" />
            </Model>
          </Content_Type>
        </Project_Container_1>
        <Project_Container_2 ref={Proj_Con_2}>
          <Slider style={{ "--quantity": 4 }}>
            <Card_2 style={{ "--position": 1 }}>
              <Link
                to="https://www.linkedin.com/feed/update/urn:li:activity:7278450445436514305/"
                className="link"
              >
                <Project_Cover>
                  <img src={Linkedin_IMG} alt="Linkedin" />
                </Project_Cover>
                <CardContent>
                  <CardTitle>Linkedin</CardTitle>
                  <CardDescription style={{ color: "black" }}>
                    a LinkedIn clone built using the 𝐌𝐄𝐑𝐍 stack! This was a
                    challenging yet rewarding journey that allowed me to deepen
                    my skills in full-stack development while integrating
                    advanced tools and features to simulate the LinkedIn
                    experience.
                  </CardDescription>
                </CardContent>
              </Link>
            </Card_2>
            <Card_2 style={{ "--position": 2 }}>
              <Link
                to="https://chat-application-ar98.onrender.com/"
                className="link"
              >
                <Project_Cover>
                  <img src={Chat_App_IMG} alt="ChatApp" />
                </Project_Cover>
                <CardContent>
                  <CardTitle>Chat Application</CardTitle>
                  <CardDescription style={{ color: "black" }}>
                    A real-time chat application built using the MERN stack and
                    Socket.IO, enabling seamless communication with live
                    messaging and intuitive UI.
                  </CardDescription>
                </CardContent>
              </Link>
            </Card_2>
            <Card_2 style={{ "--position": 3 }}>
              <Project_Cover>
                <img src={Backend2} alt="" />
              </Project_Cover>
              <CardContent>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>
                  Sample_Desc_.....................................
                </CardDescription>
              </CardContent>
            </Card_2>
            <Card_2 style={{ "--position": 4 }}>
              <Project_Cover>
                <img src={Backend1} alt="" />
              </Project_Cover>
              <CardContent>
                <CardTitle>Card Title</CardTitle>
                <CardDescription style={{ color: "black" }}>
                  Sample_Desc_..................
                </CardDescription>
              </CardContent>
            </Card_2>
          </Slider>
          <Content_Type>
            <h1 data-content="FULL-STACK">FULL-STACK</h1>
            <p>
              Building dynamic web applications with a focus on functionality,
              performance, and user experience.
            </p>
            <Model>
              <img src={Model_2} alt="Model" />
            </Model>
          </Content_Type>
        </Project_Container_2>
      </Main>
    </>
  );
};
