import React, { createContext, useContext, useState, useEffect } from "react";

// Create Context
const CursorContext = createContext();

// Cursor Provider Component
export const CursorProvider = ({ children }) => {
  const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.x, y: e.y });
    };

    document.addEventListener("mousemove", handleMouseMove);

  }, []);

  return (
    <CursorContext.Provider value={cursorPosition}>
      {children}
    </CursorContext.Provider>
  );
};

// Custom Hook for Using Cursor Context
export const useCursor = () => useContext(CursorContext);
