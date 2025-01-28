import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import styled from "styled-components";

const BlurBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1000vh;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px); 
  z-index: 0.1;
`;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BlurBackground></BlurBackground>
    <App />
  </StrictMode>
);
