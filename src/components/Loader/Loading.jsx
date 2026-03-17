// Loading.js
import React from "react";
import styled, { keyframes } from "styled-components";

const moveH = keyframes`
  0% { top: 0; opacity: 0; }
  25% { opacity: 1; }
  50% { top: 30%; opacity: 1; }
  75% { opacity: 1; }
  100% { top: 100%; opacity: 0; }
`;

const moveV = keyframes`
  0% { left: 0; opacity: 0; }
  25% { opacity: 1; }
  50% { left: 45%; opacity: 1; }
  75% { opacity: 1; }
  100% { left: 100%; opacity: 0; }
`;

const effect = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

const rot = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(180deg); }
  100% { transform: rotate(360deg); }
`;

const scale = keyframes`
  0% { scale: 1; }
  50% { scale: 1.9; }
  100% { scale: 1; }
`;

const heightAnim = keyframes`
  0% { bottom: 0%; left: 0%; height: 0px; }
  25% { height: 90px; }
  50% { bottom: 100%; left: 100%; height: 90px; }
  75% { height: 0px; }
  100% { bottom: 0%; left: 0%; height: 0px; }
`;

const widthAnim = keyframes`
  0% { left: 0%; width: 0px; }
  50% { left: 100%; width: 90px; }
  100% { left: 0%; width: 0px; }
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: black; /* optional */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  opacity: 1;
  transition: opacity 0.8s ease;

  ${({ fadeOut }) =>
    fadeOut &&
    css`
      opacity: 0;
    `}
`;

const LoadingWide = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Base = styled.div`
  background-color: #ffd700;
`;

const L1 = styled(Base)`
  width: 15px;
  height: 65px;
  position: absolute;
  animation: ${moveH} 1.2s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
`;

const L2 = styled(Base)`
  width: 15px;
  height: 60px;
  position: absolute;
  transform: rotate(90deg);
  animation: ${moveV} 1.2s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
`;

const E1 = styled(Base)`
  width: 1px;
  height: 40px;
  opacity: 0.3;
  position: absolute;
  top: 0;
  left: 8%;
  animation: ${effect} 0.2s 0.1s infinite linear;
`;

const E2 = styled(Base)`
  width: 60px;
  height: 1px;
  opacity: 0.8;
  position: absolute;
  top: 8%;
  left: 0;
  animation: ${effect} 0.3s 0.2s infinite linear;
`;

const E3 = styled.div`
  position: absolute;
  top: 10%;
  left: 12%;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 900;
  font-size: 18px;
  color: #ffd700;
  animation: ${rot} 0.8s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
`;

const E4 = styled(Base)`
  width: 1px;
  height: 40px;
  opacity: 0.3;
  position: absolute;
  top: 90%;
  right: 10%;
  animation: ${effect} 0.2s infinite linear;
`;

const E5 = styled(Base)`
  width: 40px;
  height: 1px;
  opacity: 0.3;
  position: absolute;
  top: 100%;
  right: 0;
  animation: ${effect} 0.3s infinite linear;
`;

const E6 = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 32px;
  color: #ffd700;
  animation: ${scale} 0.8s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
`;

const E7 = styled(Base)`
  width: 1px;
  height: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: rotate(45deg);
  animation: ${heightAnim} 1s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
`;

const E8 = styled(Base)`
  width: 20px;
  height: 1px;
  position: absolute;
  bottom: 50%;
  left: 0;
  animation: ${widthAnim} 1.5s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
`;

export const Loading = () => {
  return (
    <LoadingWrapper>
      <LoadingWide>
        <L1 />
        <L2 />
        <E1 />
        <E2 />
        <E3>X</E3>
        <E4 />
        <E5 />
        <E6>*</E6>
        <E7 />
        <E8 />
      </LoadingWide>
    </LoadingWrapper>
  );
};
