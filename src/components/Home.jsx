import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import styled from "styled-components";
import { gsap } from "gsap";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { RGBShiftShader } from "three/examples/jsm/shaders/RGBShiftShader";
import parthLogo from "../assets/images/logo.png";
import Typed from "typed.js";

// Styled components
const Main = styled.div`
  cursor: none;
  width: 100%;
  height: 100vh;
`;

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

const Back_Glow = styled.div`
  position: absolute;
  width: 28rem;
  height: 29rem;
  border-radius: 50%;
  background-color: #ffae00;
  filter: blur(50px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;

  @media only screen and (max-width: 480px) {
    width: 20rem;
    height: 20rem;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 25rem;
    height: 25rem;
  }
`;

const CanvasElement = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const MyLogo = styled.img`
  position: absolute;
  height: auto;
  width: 48rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  mix-blend-mode: screen;
  filter: saturate(150), contrast(150);
  opacity: 0;
  z-index: 2;

  @media only screen and (max-width: 480px) {
    width: 20rem;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 34rem;
  }
`;

const QuoteContainer = styled.div`
  position: absolute;
  left: 1rem;
  top: 80%;
  width: 42vh;
  font-size: 1.3rem;
  padding: 1rem;

  p {
    overflow: hidden;
    transition: color 0.2s ease;
    color: #fff;

    &:hover {
      color: #ffd700;
    }
  }

  @media only screen and (max-width: 480px) {
    font-size: 0.9rem;
    width: 28vh;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 1.1rem;
    width: 36vh;
  }
`;

export const Home = () => {
  const canvasRef = useRef(null);
  const logoRef = useRef(null);
  const glowRef = useRef(null);
  const quoteTextRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 3.25;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current, // Use the canvas element
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio, 2);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.outputEncoding = THREE.sRGBEncoding;

    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const rgbShiftPass = new ShaderPass(RGBShiftShader);
    rgbShiftPass.uniforms.amount.value = 0.0015;
    composer.addPass(rgbShiftPass);

    // Environment map setup
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    new RGBELoader().load(
      "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/christmas_photo_studio_04_1k.hdr",
      function (texture) {
        const envMap = pmremGenerator.fromEquirectangular(texture).texture;
        scene.environment = envMap;
        // Dispose of resources
        texture.dispose();
        pmremGenerator.dispose();
      }
    );

    const getResponsiveScale = () => {
      const width = window.innerWidth;

      if (width < 480) return { x: 0.65, y: 0.65, z: 0.65 };
      if (width < 768) return { x: 0.75, y: 0.75, z: 0.75 };
      if (width < 1024) return { x: 0.9, y: 0.9, z: 0.9 };

      return { x: 1, y: 1, z: 1 };
    };

    let model;

    const loader = new GLTFLoader();
    loader.load(
      "/3d_Model/DamagedHelmet.gltf",
      (gltf) => {
        model = gltf.scene;
        scene.add(model);
        const initialScale = getResponsiveScale();
        model.scale.set(initialScale.x, initialScale.y, initialScale.z);

        // Create a GSAP timeline
        const tl = gsap.timeline();

        tl.fromTo(
          gltf.scene.scale,
          { x: 2, y: 2, z: 2 },
          {
            x: initialScale.x,
            y: initialScale.y,
            z: initialScale.z,
            duration: 2,
            ease: "power3.out",
          },
          "anim"
        );

        tl.fromTo(
          glowRef.current,
          { scale: 2, opacity: 0 },
          { scale: 1, opacity: 1, duration: 2, ease: "power1.out" },
          "anim"
        );

        tl.fromTo(
          logoRef.current,
          { scale: 4, opacity: 0 },
          { opacity: 1, scale: 1, delay: 0.5, duration: 2, ease: "power3.out" },
          "anim"
        );

        tl.fromTo(
          quoteTextRef.current,
          { opacity: 0 },
          { opacity: 1, scale: 1, delay: 0.5, duration: 2, ease: "power1.out" },
          "anim"
        );
      },

      undefined,
      (error) => {
        console.log("An error occurred while loading GLTF model:", error);
      }
    );

    // Animation loop
    const animate = () => {
      window.requestAnimationFrame(animate);
      composer.render();
    };
    animate();

    window.addEventListener("mousemove", (e) => {
      if (model) {
        const rotationX = (e.clientX / window.innerWidth - 0.5) * Math.PI * 0.3;
        const rotationY =
          (e.clientY / window.innerHeight - 0.5) * Math.PI * 0.3;
        gsap.to(model.rotation, {
          x: rotationY,
          y: rotationX,
          duration: 0.9,
          ease: "power2.Out",
        });
      }
    });

    window.addEventListener("resize", () => {
      const newScale = getResponsiveScale();
      if (model) model.scale.set(newScale.x, newScale.y, newScale.z);

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    });
  }, []);

  useEffect(() => {
    const options = {
      strings: [
        "Code never lies, but AI might twist the truth. Debug carefully!",
      ],
      typeSpeed: 30,
      backSpeed: 20,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(quoteTextRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Main id="home" data-scroll data-scroll-section data-scroll-speed="-.3">
        <CanvasContainer>
          <Back_Glow ref={glowRef}></Back_Glow>
          <CanvasElement ref={canvasRef} id="canvas"></CanvasElement>
          <MyLogo ref={logoRef} src={parthLogo} alt="Logo" />
          <QuoteContainer>
            <p>
              <span ref={quoteTextRef} />
            </p>
          </QuoteContainer>
        </CanvasContainer>
      </Main>
    </>
  );
};
