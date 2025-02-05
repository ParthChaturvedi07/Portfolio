import React from "react";
import styled from "styled-components";

const Loader = () => {

  return (
    <StyledWrapper>
      <div className="container">
        {[...Array(21)].map((_, i) => (
          <div key={i} className="item" style={{ "--i": i }} />
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  .container {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item {
    position: absolute;
    background-color: transparent;
    width: calc(var(--i) * 2.5vmin);
    aspect-ratio: 1;
    border-radius: 50%;
    border: 0.9vmin solid rgb(0, 200, 255);
    transform-style: preserve-3d;
    transform: rotateX(70deg) translateZ(50px);
    animation: my-move 3s ease-in-out calc(var(--i) * 0.08s) infinite;
    box-shadow: 0px 0px 15px rgb(124, 124, 124),
      inset 0px 0px 15px rgb(124, 124, 124);
  }

  @keyframes my-move {
    0%,
    100% {
      transform: rotateX(70deg) translateZ(50px) translateY(0px);
      filter: hue-rotate(0deg);
    }

    50% {
      transform: rotateX(70deg) translateZ(50px) translateY(-50vmin);
      filter: hue-rotate(180deg);
    }
  }
`;

export default Loader;
