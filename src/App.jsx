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
import { Loading } from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();

    // disable scroll when loader is active
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  useEffect(() => {
    const handleLoad = () => {
      setFadeOut(true); // trigger fade
      setTimeout(() => {
        setLoading(false); // unmount loader
      }, 800); // matches fade transition
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (loading) {
    return <Loading fadeOut={fadeOut} />;
  }

  return (
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
  );
}

export default App;
