import React, { useState, useEffect } from "react";
import "./index.css";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { Audio } from "./components/Audio";
import { Cursor } from "./components/Cursor";
import { CursorProvider } from "./context/CursorContext";
import { Marquee } from "./components/Marquee";
import LocomotiveScroll from "locomotive-scroll";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Hackathons } from "./components/Hackathons";
import { Eyes } from "./components/Eyes";
import { Contacts } from "./components/Contacts";
import Loader from "./components/loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();

    setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => locomotiveScroll.destroy();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Audio />
          <Header />
          <CursorProvider>
            <Cursor />
          </CursorProvider>
          <Home />
          <Marquee />
          <About />
          <Skills />
          <Projects />
          <Hackathons />
          <Eyes />
          <Contacts />
        </>
      )}
    </>
  );
}

export default App;
