import { useState } from "react";
import MorphingText, { ReadyButton } from "../MorphingText";

export default function IntroScreen({ onStart }) {
    const [showButton, setShowButton] = useState(false);

    const texts = ["Are", "You", "Ready"];

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                width: "100vw",
                backgroundColor: "transparent",
                overflow: "hidden",
                cursor: "default",
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 9999,
            }}
        >
            {!showButton ? (
                <MorphingText texts={texts} onFinish={() => setShowButton(true)} />
            ) : (
                <div style={{ animation: "fadeInUp 0.6s ease-out" }}>
                    <ReadyButton onClick={onStart}>Ready</ReadyButton>
                </div>
            )}

            <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
}