import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { TheBoldFont } from "../load-font";

export const Slide: React.FC<{
  readonly src: string;
  readonly caption: string;
  readonly zoomDirection: "in" | "out";
}> = ({ src, caption, zoomDirection }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const kenBurns = interpolate(frame, [0, durationInFrames], [1, 1.15]);
  const scale = zoomDirection === "in" ? kenBurns : 2.15 - kenBurns;

  const textEnter = spring({
    frame: frame - 10,
    fps,
    config: { damping: 200 },
    durationInFrames: 15,
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      <AbsoluteFill>
        <Img
          src={src}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: `scale(${scale})`,
          }}
        />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: 260,
        }}
      >
        <div
          style={{
            fontFamily: TheBoldFont,
            fontSize: 78,
            color: "white",
            textAlign: "center",
            textTransform: "uppercase",
            WebkitTextStroke: "14px black",
            paintOrder: "stroke",
            lineHeight: 1.1,
            width: "88%",
            opacity: interpolate(textEnter, [0, 1], [0, 1]),
            transform: `translateY(${interpolate(textEnter, [0, 1], [40, 0])}px)`,
          }}
        >
          {caption}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
