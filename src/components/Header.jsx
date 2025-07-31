import React, { useRef } from "react";
import "./styles.css";
import parthLogo from "../assets/images/logo.png";
import styled from "styled-components";
import "remixicon/fonts/remixicon.css";
import { useState } from "react";

const Nav = styled.nav`
  &.nav1 {
    position: fixed;
    width: 100%;
    height: 10vh;
    background-color: rgba(255, 255, 255, 0.1);
    top: 0;
    left: 0;
    z-index: 20;
    backdrop-filter: blur(10px);
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    padding: 3px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: none;

    i {
      display: none;
    }

    @media only screen and (max-width: 820px) {
      background-color: transparent;
      backdrop-filter: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      -webkit-backdrop-filter: none;
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    }
  }

  @media only screen and (max-width: 820px) {
    &.nav1 i {
      display: block;
    }
  }

  &.nav2 {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 180px;
    z-index: 30;
    backdrop-filter: blur(10px);
    border-left: 2px solid rgba(255, 255, 255, 0.1);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: -10px 0 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 4vh;

    img {
      display: none;
    }

    i {
      margin-top: 4vh;
    }
  }
`;

const MyLogo = styled.img`
  width: 15vh;
  height: auto;
`;

const NavItems = styled.div`
  &.nav-items1 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10vh;
    margin-left: 13vh;

    @media only screen and (max-width: 480px) {
      display: none;
    }

    @media only screen and (min-width: 481px) and (max-width: 820px) {
      display: none;
    }
  }

  &.nav-items2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 3vh;
    gap: 4vh;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  transition: color 0.3s ease, text-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #ffd700;
    text-shadow: 0 0 8px #ffd700, 0 0 16px #ffae00, 0 0 24px #ff8c00;
    transform: scale(1.1);
  }
`;

const Resume_Button = styled.button`
  padding: 5px 20px;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: transparent;
  position: relative;
  cursor: none;
  text-decoration: none;

  &:after {
    padding: 5px 20px;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: transparent;
    position: relative;
    --move1: inset(50% 50% 50% 50%);
    --move2: inset(31% 0 40% 0);
    --move3: inset(39% 0 15% 0);
    --move4: inset(45% 0 40% 0);
    --move5: inset(45% 0 6% 0);
    --move6: inset(14% 0 61% 0);
    clip-path: var(--move1);
    content: "RESUME";
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

  @media only screen and (max-width: 820px) {
    display: none;
  }

  @media only screen and (min-width: 681px) and (max-width: 768px) {
    transform: scale(0.8);
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 180px;
  z-index: 30;
  backdrop-filter: blur(10px);
  border-left: 2px solid rgba(255, 255, 255, 0.1);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: -10px 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4vh;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transform: ${(props) =>
    props.visible ? "translateX(0)" : "translateX(100%)"};
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: ${(props) => (props.visible ? "all" : "none")};
  z-index: 31;

  .button {
    @media only screen and (max-width: 820px) {
      display: block;
    }
  }
`;

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export const Header = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState();

  return (
    <>
      <div>
        <Nav className="nav1">
          <MyLogo src={parthLogo} alt="" />
          <NavItems className="nav-items1">
            <NavLink to="#" onClick={() => scrollToSection("home")}>
              Home
            </NavLink>
            <NavLink to="#" onClick={() => scrollToSection("about")}>
              About
            </NavLink>
            <NavLink to="#" onClick={() => scrollToSection("skills")}>
              Skills
            </NavLink>
            <NavLink to="#" onClick={() => scrollToSection("projects")}>
              Projects
            </NavLink>
            <NavLink to="#" onClick={() => scrollToSection("contact")}>
              Contact
            </NavLink>
          </NavItems>
          <Resume_Button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1j7p69yvD7NqU3yzuy8at3vLej7KT5eT9/view?usp=sharing",
                "_blank"
              )
            }
          >
            RESUME
          </Resume_Button>
          <i
            onClick={() => setIsSidebarVisible(true)}
            className="ri-menu-3-line"
            style={{ color: "white", transform: "scale(1.6)" }}
          ></i>
        </Nav>
      </div>
      <Sidebar visible={isSidebarVisible}>
        <Nav className="nav2">
          <i
            className="ri-close-large-line"
            style={{
              color: "white",
              transform: "scale(1.6)",
              marginLeft: "3vh",
            }}
            onClick={() => setIsSidebarVisible(false)}
          ></i>
          <MyLogo src={parthLogo} alt="" />
          <NavItems className="nav-items2">
            <NavLink to="#" onClick={() => scrollToSection("home")}>
              Home
            </NavLink>
            <NavLink to="#" onClick={() => scrollToSection("about")}>
              About
            </NavLink>
            <NavLink to="#" onClick={() => scrollToSection("skills")}>
              Skills
            </NavLink>
            <NavLink to="#" onClick={() => scrollToSection("projects")}>
              Projects
            </NavLink>
            <NavLink to="#" onClick={() => scrollToSection("contact")}>
              Contact
            </NavLink>
          </NavItems>
          <Resume_Button
            className="button"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1j7p69yvD7NqU3yzuy8at3vLej7KT5eT9/view?usp=sharing",
                "_blank"
              )
            }
          >
            RESUME
          </Resume_Button>
        </Nav>
      </Sidebar>
    </>
  );
};
