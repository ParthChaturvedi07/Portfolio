import styled from "styled-components";
import { GrainGradient } from "@paper-design/shaders-react";

const BackgroundWrapper = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: -9;
  background: rgba(0, 0, 0, 0.2);
`;

export function GradientBackground() {
    return (
        <BackgroundWrapper>
            <GrainGradient
                style={{ height: "100%", width: "100%" }}
                colorBack="hsl(0, 0%, 5%)"
                softness={0.76}
                intensity={0.45}
                noise={0}
                shape="corners"
                offsetX={0}
                offsetY={0}
                scale={1}
                rotation={0}
                speed={1}
                colors={["hsl(51, 100%, 50%)", "hsl(41, 100%, 50%)", "hsl(33, 100%, 50%)"]}
            />
        </BackgroundWrapper>
    );
}