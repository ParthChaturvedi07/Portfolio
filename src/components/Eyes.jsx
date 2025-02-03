import React, { useEffect, useState } from "react";
import styled from "styled-components";
import EyesImg from "../assets/images/Eyes.jpg";

const Eyes_Section = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(28, 28, 27);
  position: relative;

  @media only screen and (max-width: 480px) {
    height: 70vh;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px){
    height: 85vh;
  }
`;
const Vector = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 82.3vh;
    width: 67vw;
    box-shadow: -20px 20px 40px rgba(0, 0, 0, 1);
    position: relative;

    @media only screen and (max-width: 480px) {
      height: 30vh;
      width: 80vw;
      box-shadow: -10px 10px 20px rgba(0, 0, 0, 0.8);
    }

    @media only screen and (min-width: 481px) and (max-width: 768px) {
      height: 55vh;
      width: 80vw;
      box-shadow: -15px 15px 30px rgba(0, 0, 0, 0.9);
    }
  }
`;

const Eye_Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 10px;

  .eye {
    width: 13vw;
    height: 13vw;
    border-radius: 50%;
    background-color: #f4f4f5;
    display: flex;
    justify-content: center;
    align-items: center;

    .eye-ball {
      width: 8vw;
      height: 8vw;
      background-color: #000;
      border-radius: 50%;
      position: relative;

      .line {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
      }

      .pupil {
        width: 2vw;
        height: 2vw;
        background-color: #fff;
        border-radius: 50%;
      }
    }
  }
`;

export const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  }, []);

  return (
    <Eyes_Section>
      <Vector data-scroll data-scroll-speed="-.7">
        <img src={EyesImg} alt="Eyes"></img>
        <Eye_Container>
          <div className="eye eye-left">
            <div className="eye-ball">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line"
              >
                <div className="pupil"></div>
              </div>
            </div>
          </div>
          <div className="eye eye-right">
            <div className="eye-ball">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line"
              >
                <div className="pupil"></div>
              </div>
            </div>
          </div>
        </Eye_Container>
      </Vector>
    </Eyes_Section>
  );
};
