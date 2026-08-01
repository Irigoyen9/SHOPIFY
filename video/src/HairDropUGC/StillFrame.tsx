import React from "react";
import { AbsoluteFill, Img, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { Caption } from "./Caption";

export const StillFrame: React.FC<{
  readonly src: string;
  readonly caption: string;
  readonly capPosition?: "center" | "bottom";
  readonly capFontSize?: number;
  readonly zoomDirection?: "in" | "out";
  readonly focusOrigin?: string;
}> = ({
  src,
  caption,
  capPosition = "bottom",
  capFontSize = 64,
  zoomDirection = "in",
  focusOrigin = "center",
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const kenBurns = interpolate(frame, [0, durationInFrames], [1, 1.12]);
  const scale = zoomDirection === "in" ? kenBurns : 2.12 - kenBurns;

  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      <AbsoluteFill>
        <Img
          src={src}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: focusOrigin,
            transform: `scale(${scale})`,
          }}
        />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.45) 100%)",
        }}
      />
      <Caption text={caption} position={capPosition} fontSize={capFontSize} />
    </AbsoluteFill>
  );
};
