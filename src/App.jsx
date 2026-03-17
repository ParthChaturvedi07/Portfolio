import React, { useState, useEffect } from "react";
import "./index.css";
import { GradientBackground } from "./components/GradientBackground";
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
import { Loading } from "./components/Loader/Loading";
import IntroScreen from "./components/Loader/IntroScreen";
import { CircularTestimonials } from "./components/CircularTestimonials";

function App() {
  // Check if this is the first time loading in this session
  const hasVisited = sessionStorage.getItem("hasVisited");

  const [loading, setLoading] = useState(hasVisited ? false : true);
  const [showIntro, setShowIntro] = useState(hasVisited ? false : true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Only initialized locomotive scroll when main content is actually visible
    if (!loading && !showIntro) {
      new LocomotiveScroll();
    }

    // disable scroll when loader OR intro is active
    if (loading || showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading, showIntro]);

  useEffect(() => {
    // Skip completely if we've already visited
    if (hasVisited) return;

    const handleLoad = () => {
      setFadeOut(true);

      setTimeout(() => {
        setLoading(false);
      }, 800);
    };

    // If document is already loaded before React mounts, just execute 
    // (though load event is usually safer)
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, [hasVisited]);

  const handleStart = () => {
    setShowIntro(false);
    sessionStorage.setItem("hasVisited", "true");
  };

  if (loading) {
    return (
      <>
        <GradientBackground />
        <Loading fadeOut={fadeOut} />
      </>
    );
  }

  if (showIntro) {
    return (
      <>
        <GradientBackground />
        <IntroScreen onStart={handleStart} />
      </>
    );
  }

  return (
    <>
      <GradientBackground />
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
      {/* <CircularTestimonials
        testimonials={[
          {
            name: "Aanshik Sharma",
            designation: "Full Stack Developer",
            quote: "Working with Parth has been outstanding. He delivered responsive, high-performance sites with polished animations and a clean, well-structured backend. Communication was clear, deadlines were met, and the results consistently exceeded expectations. I strongly recommend his services for anyone seeking reliable, modern web development.",
            src: "https://images.unsplash.com/photo-1764588037085-a78240016f8b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            name: "Jane Smith",
            designation: "UX Designer",
            quote: "A talented developer who delivers clean, efficient code and great results.",
            src: "https://plus.unsplash.com/premium_photo-1764501818547-52daac608a44?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            name: "Mike Johnson",
            designation: "CEO",
            quote: "Professional, reliable, and always goes the extra mile to ensure satisfaction.",
            src: "https://images.unsplash.com/photo-1764069210389-780c91741bc5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        ]}
      /> */}
      <Contacts />
    </>
  );
}

export default App;
