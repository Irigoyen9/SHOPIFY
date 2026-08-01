import React, { useEffect, useState } from "react";
import {
  AbsoluteFill,
  continueRender,
  delayRender,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { loadFont } from "../load-font";
import { Slide } from "./Slide";

const SLIDE_DURATION = 90; // 3s at 30fps
const CROSSFADE_DURATION = 15;

const slides: {
  src: string;
  caption: string;
  zoomDirection: "in" | "out";
}[] = [
  {
    src: staticFile("hairdrop/photo1.jpg"),
    caption: "HairDrop Pro",
    zoomDirection: "in",
  },
  {
    src: staticFile("hairdrop/photo2.webp"),
    caption: "Aplicación de precisión",
    zoomDirection: "out",
  },
  {
    src: staticFile("hairdrop/photo3.webp"),
    caption: "Dosificación gota a gota",
    zoomDirection: "in",
  },
  {
    src: staticFile("hairdrop/photo4.webp"),
    caption: "Tecnología avanzada",
    zoomDirection: "out",
  },
  {
    src: staticFile("hairdrop/photo5.webp"),
    caption: "Cuida tu cuero cabelludo",
    zoomDirection: "in",
  },
];

export const HAIRDROP_TOTAL_DURATION =
  slides.length * SLIDE_DURATION - (slides.length - 1) * CROSSFADE_DURATION;

const FadingSlide: React.FC<{
  readonly index: number;
}> = ({ index }) => {
  // Relative to the enclosing <Sequence>, thanks to Remotion's frame offsetting.
  const frame = useCurrentFrame();
  const isFirst = index === 0;
  const isLast = index === slides.length - 1;

  const fadeIn = isFirst
    ? 1
    : interpolate(frame, [0, CROSSFADE_DURATION], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });

  const fadeOutStart = SLIDE_DURATION - CROSSFADE_DURATION;
  const fadeOut = isLast
    ? 1
    : interpolate(frame, [fadeOutStart, SLIDE_DURATION], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });

  return (
    <AbsoluteFill style={{ opacity: Math.min(fadeIn, fadeOut) }}>
      <Slide {...slides[index]} />
    </AbsoluteFill>
  );
};

const Crossfade: React.FC<{
  readonly index: number;
  readonly from: number;
}> = ({ index, from }) => {
  return (
    <Sequence from={from} durationInFrames={SLIDE_DURATION} layout="none">
      <FadingSlide index={index} />
    </Sequence>
  );
};

export const HairDropPro: React.FC = () => {
  const [handle] = useState(() => delayRender());

  useEffect(() => {
    loadFont().then(() => continueRender(handle));
  }, [handle]);

  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      {slides.map((_, index) => (
        <Crossfade
          key={index}
          index={index}
          from={index * (SLIDE_DURATION - CROSSFADE_DURATION)}
        />
      ))}
    </AbsoluteFill>
  );
};
