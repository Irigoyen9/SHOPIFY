import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { TheBoldFont } from "../load-font";

export const Caption: React.FC<{
  readonly text: string;
  readonly position?: "center" | "bottom";
  readonly fontSize?: number;
}> = ({ text, position = "bottom", fontSize = 64 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({
    frame,
    fps,
    config: { damping: 200 },
    durationInFrames: 12,
  });

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        top: position === "center" ? "42%" : undefined,
        bottom: position === "bottom" ? 220 : undefined,
        transform: `translateY(${(1 - enter) * 30}px)`,
        opacity: enter,
      }}
    >
      <div
        style={{
          fontFamily: TheBoldFont,
          fontSize,
          color: "white",
          textAlign: "center",
          textTransform: "uppercase",
          WebkitTextStroke: "12px black",
          paintOrder: "stroke",
          lineHeight: 1.15,
          width: "86%",
        }}
      >
        {text}
      </div>
    </div>
  );
};
