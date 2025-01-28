import React from "react";
import styled from "styled-components";
import myPhoto from "../assets/images/MyPhoto2.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import GlowingBorder from "../assets/images/yellowGlow.png";

gsap.registerPlugin(ScrollTrigger);

const Main = styled.div`
  background-color: #000;
  color: #fff;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  width: 100%;
  min-height: 110vh;
  position: relative;
`;

const Yellow_Glow = styled.div`
  position: absolute;
  bottom: 0;
  height: 30vh;
  width: 30vh;
  opacity: 0.9;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
const Yellow_Glow2 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 30vh;
  width: 30vh;
  transform: rotate(180deg);
  opacity: 0.9;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Heading = styled.h1`
  text-align: center;
  margin-top: 10vh;
  // background-color: green;
`;

const Contact = styled.div`
  width: 100%;
  height: 79vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Background_Text = styled.div`
  text-align: center;
  h1 {
    font-size: 15rem;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-color: rgba(255, 255, 255, 0.2);
    -webkit-text-stroke-width: 2px;
  }
`;

const Contact_container = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 60vh;
  width: 60vw;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;

const Social_Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 8%;
  height: 100%;
  width: 35%;
  z-index: 1;
`;

const Icons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2em;

  .icon {
    width: 8.5vw;
    height: 8.5vw;
    padding: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.5em;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    svg {
      width: 50%;
      height: 50%;
    }

    h2 {
      font-size: 2.7vh;
      color: #ffd700;
    }

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
    }
  }
`;

const My_Photo = styled.div`
  width: 55%;
  height: 90%;
  position: absolute;
  right: -20%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transform: scale(1.8) translateY(4vh);
  }
`;

const Footer = styled.div`
  padding: 10px;
  p {
    text-align: center;
    font-size: 0.7rem;
    letter-spacing: 2px;
  }
`;
export const Contacts = () => {
  useGSAP(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        scroller: "body",
        start: "top 50%",
        end: "top 0",
        // markers: true,
        scrub: 3,
      },
    });
    tl.from(".backtxt h1 span", {
      opacity: 0,
      duration: 2.5,
      ease: "power2.inOut",
      stagger: 0.1,
    });
    tl.from(".contact_container", {
      opacity: 0,
      duration: 2,
      ease: "power2.inOut",
    });
    tl.from(
      ".icons",
      {
        opacity: 0,
        duration: 1,
        x: -150,
        ease: "power2.inOut",
        stagger: 0.1,
      },
      "slide"
    );
    tl.from(
      ".my_photo",
      {
        opacity: 0,
        duration: 1,
        x: 150,
        ease: "power2.inOut",
      },
      "slide"
    );

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Main id="contact">
      <Yellow_Glow>
        <img src={GlowingBorder} alt="" />
      </Yellow_Glow>{" "}
      <Yellow_Glow2>
        <img src={GlowingBorder} alt="" />
      </Yellow_Glow2>
      <Heading className="heading">
        <h1>Reach Out</h1>
      </Heading>
      {/* Contacts-part */}
      <Contact>
        <Background_Text className="backtxt">
          <h1>
            <span>C</span>
            <span>O</span>
            <span>N</span>
            <span>T</span>
            <span>A</span>
            <span>C</span>
            <span>T</span>
          </h1>
        </Background_Text>
        <Contact_container className="contact_container">
          {/* Social Media Icons */}
          <Social_Icons>
            <Icons className="icons">
              <div className="icon linkedin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
                <h2>Linkedin</h2>
              </div>
              {/* Github */}
              <div className="icon github">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                  height="1em"
                  viewBox="0 0 496 512"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                </svg>
                <h2>Github</h2>
              </div>
              {/* Email */}
              <div className="icon email">
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  class="socialSvg whatsappSvg"
                >
                  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"></path>
                  <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"></path>
                </svg>
                <h2>Email</h2>
              </div>
              {/* Instagram */}
              <div className="icon instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
                <h2>Instagram</h2>
              </div>
              {/* Linkedin */}
            </Icons>
          </Social_Icons>
          {/* Photo */}
          <My_Photo className="my_photo">
            <img src={myPhoto} alt="" />
          </My_Photo>
        </Contact_container>
      </Contact>
      {/* Footer */}
      <Footer>
        <p>
          &copy; 2025 Parth Chaturevdi. All "copywrites" reserved. "Any
          unauthorized stealing of code will be met with excessive debugging."
          <br />
          😐
        </p>
      </Footer>
    </Main>
  );
};
