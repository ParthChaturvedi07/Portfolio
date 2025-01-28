import React from "react";
import "./styles.css";
import parthLogo from "../assets/images/logo.png";
import styled from "styled-components";

const Nav = styled.nav`
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
`;

const MyLogo = styled.img`
  width: 15vh;
  height: auto;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10vh;
  margin-left: 13vh;
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
      transform: translate(0px,-10px);
    }
  
    10% {
      clip-path: var(--move2);
      transform: translate(-10px,10px);
    }
  
    20% {
      clip-path: var(--move3);
      transform: translate(10px,0px);
    }
  
    30% {
      clip-path: var(--move4);
      transform: translate(-10px,10px);
    }
  
    40% {
      clip-path: var(--move5);
      transform: translate(10px,-10px);
    }
  
    50% {
      clip-path: var(--move6);
      transform: translate(-10px,10px);
    }
  
    60% {
      clip-path: var(--move1);
      transform: translate(10px,-10px);
    }
  
    70% {
      clip-path: var(--move3);
      transform: translate(-10px,10px);
    }
  
    80% {
      clip-path: var(--move2);
      transform: translate(10px,-10px);
    }
  
    90% {
      clip-path: var(--move4);
      transform: translate(-10px,10px);
    }
  
    100% {
      clip-path: var(--move1);
      transform: translate(0);
    }
  
`;

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export const Header = () => {
  return (
    <Nav className="nav">
      <MyLogo src={parthLogo} alt="" />
      <NavItems>
        <NavLink to="#" onClick={() => scrollToSection('home')}>Home</NavLink>
        <NavLink to="#" onClick={() => scrollToSection('about')}>About</NavLink>
        <NavLink to="#" onClick={() => scrollToSection('skills')}>Skills</NavLink>
        <NavLink to="#" onClick={() => scrollToSection('projects')}>Projects</NavLink>
        <NavLink to="#" onClick={() => scrollToSection('contact')}>Contact</NavLink>
      </NavItems>
      <Resume_Button>RESUME</Resume_Button>
    </Nav>
  );
};
