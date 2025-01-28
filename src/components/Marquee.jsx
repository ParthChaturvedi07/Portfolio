import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Main = styled.div`
  width: 100%;
  padding: 2.5rem 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  color: white;
  border-top: 2px solid rgba(255, 255, 255, 0.5);
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  white-space: nowrap;
  display: flex;
  overflow: hidden;

  h1 {
    font-size: 15vw;
    line-height: 1;
    font-weight: 700;
    text-transform: uppercase;
    padding-right: 6vh;
  }
`;

export const Marquee = () => {
  return (
    <Main className="marquee" data-scroll data-scroll-section data-scroll-speed=".1">
      <Text>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
        >
          Web Developer
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
        >
          Web Developer
        </motion.h1>
      </Text>
    </Main>
  );
};
