import React, { useRef } from "react";
import styled from "styled-components";
import { useCursor } from "../context/CursorContext"; // Import the shared context
import gsap from "gsap";

const Cursor_div = styled.div`
  height: 15px;
  width: 15px;
  background-color: #ffd700;
  border-radius: 50%;
  position: fixed;
  z-index: 99;
  pointer-events: none;
`;

const Cursor_blur = styled.div`
  height: 130px;
  width: 130px;
  background-color: #ffae00;
  border-radius: 50%;
  position: fixed;
  filter: blur(45px);
  pointer-events: none;
  z-index: 98;
`;

export const Cursor = () => {
  const cursorPosition = useCursor();
  const crsr = useRef(null);
  const blur = useRef(null);

  React.useEffect(() => {
    gsap.to(crsr.current, {
      x: cursorPosition.x,
      y: cursorPosition.y,
      duration: 0.2,
    });

    gsap.to(blur.current, {
      x: cursorPosition.x - 75,
      y: cursorPosition.y - 75,
      duration: 0.5,
    });
  }, [cursorPosition]);

  return (
    <>
      <Cursor_div ref={crsr}></Cursor_div>
      <Cursor_blur ref={blur}></Cursor_blur>
    </>
  );
};
