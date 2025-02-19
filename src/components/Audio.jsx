import React, { useEffect } from "react";
import bgAudio from "../assets/audio/Young Kid (Sped Up Remix).mp3";
import styled, { keyframes } from "styled-components";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const rotateText = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const Wrapper = styled.div`
  position: fixed;
  z-index: 98;
  top: 80%;
  right: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: none;

  @media only screen and (max-width: 480px) {
    right: 2rem;
    top: 83%;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    right: 3rem;
    top: 81%;
  }
`;

const Circle = styled.div`
  position: relative;
  width: 10vh;
  height: 10vh;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 170px;
  background-size: cover;
  border-radius: 50%;
  transform: scale(0.5);

  @media only screen and (max-width: 480px) {
    width: 120px;
    height: 120px;
    transform: scale(0.4);
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 150px;
    height: 150px;
    transform: scale(0.45);
  }
`;

const Text = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  animation: ${rotateText} 10s linear infinite;

  span {
    position: absolute;
    left: 49%;
    top: -8%;
    transform-origin: 0 100px;
    display: inline-block;
    white-space: nowrap;
  }

  @media only screen and (max-width: 480px) {
    font-size: 0.8rem;
    height: 142%;
    font-weight: bold;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 1rem;
    height: 114%;
    font-weight: bold;
  }
`;

const Button = styled.button`
  transform: scale(1.8);
  padding: 5px;
  border-radius: 100%;
  box-shadow: 0px 0px 5px 7px #ffd700;
  background-color: #ffc107;
  color: white;
  font-size: 17px;
  border: none;
  display: flex;
  align-items: center;
  z-index: 1;
  cursor: none;

  &:before {
    content: "";
    background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNTQ4Ljg2IDM4Mi4xNmMwIDM1LjUyLTMuMzE2NCA3MC4wOS05LjQ3MjcgMTAzLjI0LTAuOTQ1MzEgNC43MzQ0LTQuNzM0NCA3LjU3ODEtOS40NzI3IDcuNTc4MWgtMS44OTQ1Yy01LjIxMDktMC45NDUzMS04LjUyMzQtNi4xNTYyLTcuNTc4MS0xMC44OTEgNi4xNTYyLTMyLjIwMyA5LjQ3MjctNjUuODI4IDkuNDcyNy05OS45MjZzLTMuMzE2NC02OC42NjgtOS40NzI3LTEwMi43N2MtMC45NDUzMS01LjIxMDkgMi4zNjcyLTkuOTQ1MyA3LjU3ODEtMTAuODkxIDUuMjEwOS0wLjk0NTMxIDkuOTQ1MyAyLjM2NzIgMTAuODkxIDcuNTc4MSA2LjYzMjggMzUuMDM5IDkuOTQ5MiA3MC41NTkgOS45NDkyIDEwNi4wN3ptLTE0NC45Mi0xMzguNzZjMTAuODkxIDQ1LjkzOCAxNi41NzQgOTIuMzQ4IDE2LjU3NCAxMzguMjkgMCA0NS40NjUtNS4yMTA5IDg5Ljk4LTE2LjEwMiAxMzIuMTMtMC45NDUzMSAzLjMxNjQtMi4zNjcyIDYuMTU2Mi00LjI2MTcgOC41MjM0LTMuNzg5MSA1LjIxMDktOS40NzI3IDguMDUwOC0xNS42MjkgOC45OTYxaC0yLjgzOThjLTUuMjEwOSAwLTEwLjQxOC0xLjg5NDUtMTQuMjA3LTQuNzM0NGwtNzIuOTMtNTUuNDA2Yy0wLjk0NTMxLTAuNDcyNjYtMS44OTQ1LTAuOTQ1MzEtMi44Mzk4LTAuOTQ1MzFoLTUyLjA5NGMtOC41MjM0IDAtMTYuMTAyLTQuNzM0NC0yMC4zNjMtMTEuODQtMTIuMzEyLTIwLjgzNi0xOC40NjktNDYuODgzLTE4LjQ2OS03Ni4yNDYgMC0yOS44MzYgNi4xNTYyLTU3LjMwNSAxOC40NjktODEuOTMgMy43ODkxLTguMDUwOCAxMi4zMTItMTMuMjYyIDIxLjMxMi0xMy4yNjJoNTEuNjIxYzAuOTQ1MzEgMCAxLjg5NDUtMC40NzI2NiAyLjgzOTgtMC45NDUzMWw3MS41MDgtNTUuODg3YzIuODM5OC0xLjg5NDUgNS42ODM2LTMuMzE2NCA4Ljk5NjEtNC4yNjE3IDYuMTU2Mi0xLjQyMTkgMTIuMzEyLTAuNDcyNjYgMTcuOTk2IDIuODM5OCA1LjIxMDkgMy4zMTY0IDkgOC41MjczIDEwLjQxOCAxNC42ODR6bS0yLjgzOTggMTM4Ljc2YzAtNDQuNTE2LTUuMjEwOS04OS41MDgtMTUuNjI5LTEzNC4wMi0wLjQ3MjY2LTEuODk0NS0xLjQyMTktMi4zNjcyLTEuODk0NS0yLjgzOTgtMC40NzI2Ni0wLjQ3MjY2LTEuODk0NS0wLjk0NTMxLTMuNzg5MS0wLjQ3MjY2LTAuNDcyNjYgMC0xLjQyMTkgMC40NzI2Ni0xLjg5NDUgMC45NDUzMWwtNzEuNTA4IDU0LjkzOGMtNC4yNjE3IDMuMzE2NC05LjQ3MjcgNC43MzQ0LTE0LjY4IDQuNzM0NGgtNTEuMTQ4Yy0xLjg5NDUgMC0zLjMxNjQgMC45NDUzMS00LjI2MTcgMi44Mzk4LTEwLjg5MSAyMi4yNTgtMTYuNTc0IDQ2Ljg4My0xNi41NzQgNzMuODc5IDAgMjYuMDQ3IDUuMjEwOSA0OC43NzcgMTUuNjI5IDY2Ljc3MyAwLjk0NTMxIDEuNDIxOSAyLjM2NzIgMi4zNjcyIDQuMjYxNyAyLjM2NzJoNTIuMDk0YzUuMjEwOSAwIDEwLjQxOCAxLjg5NDUgMTQuNjggNC43MzQ0bDcxLjk4NCA1NS44ODNjMS40MjE5IDAuOTQ1MzEgMi44Mzk4IDAuOTQ1MzEgMy4zMTY0IDAuOTQ1MzEgMC45NDUzMSAwIDEuODk0NS0wLjQ3MjY2IDMuMzE2NC0xLjg5NDUgMC40NzI2Ni0wLjQ3MjY2IDAuNDcyNjYtMC45NDUzMSAwLjk0NTMxLTEuODk0NSA5Ljk0MTQtNDAuMjQ2IDE1LjE1Mi04My4zNDQgMTUuMTUyLTEyNi45MXptODIuODc1LTc5LjA4NmMtNS4yMTA5IDAuNDcyNjYtOC45OTYxIDUuMjEwOS04LjA1MDggMTAuNDE4IDIuODM5OCAyMi43MyA0LjI2MTcgNDUuOTM4IDQuMjYxNyA2OC42NjhzLTEuNDIxOSA0NS40NjUtNC4yNjE3IDY3LjI1Yy0wLjQ3MjY2IDUuMjEwOSAyLjgzOTggOS45NDUzIDguMDUwOCAxMC40MThoMS40MjE5YzQuNzM0NCAwIDguOTk2MS0zLjMxNjQgOS40NzI3LTguNTIzNCAyLjgzOTgtMjIuNzMgNC4yNjE3LTQ1LjkzOCA0LjI2MTctNjkuNjE3IDAtMjMuNjgtMS40MjE5LTQ3LjM1OS00LjI2MTctNzAuNTYyLTAuOTQ5MjItNS4yMTA5LTUuNjgzNi05LTEwLjg5NS04LjA1MDh6IiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo=");
    background-size: 100%;
    background-repeat: no-repeat;
    position: relative;
    width: 50px;
    height: 50px;
    display: block;
  }

  &:active {
    border-radius: 100%;
    box-shadow: inset 0px 0px 10px 0px rgb(240, 237, 237);
  }

  @media only screen and (max-width: 480px) {
    transform: scale(1.4);
    font-size: 14px;
    box-shadow: 0px 0px 3px 5px #ffd700;
  }
`;

const Music = styled.audio`
  display: none;
`;

export const Audio = () => {
  const text = "Tap to START/STOP the Audio";

  const toggleAudio = () => {
    const audioElement = document.querySelector("audio");
    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  };

  useGSAP(() => {
    gsap.from(".wrapper", {
      opacity: 0,
      scale: 2,
      delay: 1.4,
    });
  });

  return (
    <Wrapper className="wrapper">
      <Circle>
        <Logo>
          <Button onClick={toggleAudio} />
          <Text>
            {text.split("").map((char, i) => (
              <span
                key={i}
                style={{
                  transform: `rotate(${i * 12.8}deg)`,
                }}
              >
                {char}
              </span>
            ))}
          </Text>
          <Music controls autoPlay loop>
            <source src={bgAudio} type="audio/mp3" />
          </Music>
        </Logo>
      </Circle>
    </Wrapper>
  );
};
