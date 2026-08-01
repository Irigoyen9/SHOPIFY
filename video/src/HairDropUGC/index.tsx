import React, { useEffect, useState } from "react";
import {
  AbsoluteFill,
  continueRender,
  delayRender,
  Sequence,
  staticFile,
} from "remotion";
import { loadFont } from "../load-font";
import { StillFrame } from "./StillFrame";

const AVATAR = staticFile("ugc/avatar.jpg");

const HOOK_DURATION = 45; // 1.5s
const PROBLEM_DURATION = 135; // 4.5s
const DEMO_CUT_DURATION = 48; // 1.6s per cut
const DEMO_CUTS = 5;
const DEMO_DURATION = DEMO_CUT_DURATION * DEMO_CUTS; // 8s
const RESULT_DURATION = 180; // 6s
const CTA_DURATION = 150; // 5s

export const HAIRDROP_UGC_TOTAL_DURATION =
  HOOK_DURATION +
  PROBLEM_DURATION +
  DEMO_DURATION +
  RESULT_DURATION +
  CTA_DURATION; // 25s @ 30fps = 750 frames

const demoShots: {
  src: string;
  caption: string;
  zoomDirection: "in" | "out";
}[] = [
  {
    src: staticFile("hairdrop/photo1.jpg"),
    caption: "Esto es lo que empecé a usar",
    zoomDirection: "in",
  },
  {
    src: staticFile("hairdrop/photo4.webp"),
    caption: "Dosificación de precisión",
    zoomDirection: "out",
  },
  {
    src: staticFile("hairdrop/photo2.webp"),
    caption: "Se adapta directo al cuero cabelludo",
    zoomDirection: "in",
  },
  {
    src: staticFile("hairdrop/photo3.webp"),
    caption: "Se aplica en la raíz, sin manchar nada",
    zoomDirection: "out",
  },
  {
    src: staticFile("hairdrop/photo5.webp"),
    caption: "Qué gustito, no gotea nada",
    zoomDirection: "in",
  },
];

const hookFrom = 0;
const problemFrom = hookFrom + HOOK_DURATION;
const demoFrom = problemFrom + PROBLEM_DURATION;
const resultFrom = demoFrom + DEMO_DURATION;
const ctaFrom = resultFrom + RESULT_DURATION;

export const HairDropUGC: React.FC = () => {
  const [handle] = useState(() => delayRender());

  useEffect(() => {
    loadFont().then(() => continueRender(handle));
  }, [handle]);

  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      {/* HOOK */}
      <Sequence from={hookFrom} durationInFrames={HOOK_DURATION} layout="none">
        <StillFrame
          src={AVATAR}
          caption="Llevo 3 meses perdiendo pelo y nadie me lo dijo antes"
          capPosition="center"
          capFontSize={58}
          zoomDirection="in"
          focusOrigin="50% 30%"
        />
      </Sequence>

      {/* PROBLEMA */}
      <Sequence
        from={problemFrom}
        durationInFrames={PROBLEM_DURATION}
        layout="none"
      >
        <StillFrame
          src={AVATAR}
          caption="Probé de todo: aceites que manchan la almohada, ampollas carísimas que no notaba..."
          capPosition="bottom"
          capFontSize={48}
          zoomDirection="out"
          focusOrigin="50% 20%"
        />
      </Sequence>

      {/* DEMO — cortes duros, ritmo TikTok */}
      {demoShots.map((shot, i) => (
        <Sequence
          key={i}
          from={demoFrom + i * DEMO_CUT_DURATION}
          durationInFrames={DEMO_CUT_DURATION}
          layout="none"
        >
          <StillFrame
            src={shot.src}
            caption={shot.caption}
            capPosition="bottom"
            capFontSize={54}
            zoomDirection={shot.zoomDirection}
          />
        </Sequence>
      ))}

      {/* RESULTADO */}
      <Sequence
        from={resultFrom}
        durationInFrames={RESULT_DURATION}
        layout="none"
      >
        <StillFrame
          src={AVATAR}
          caption="3 semanas después, esto es lo que noté"
          capPosition="bottom"
          capFontSize={58}
          zoomDirection="in"
          focusOrigin="50% 25%"
        />
      </Sequence>

      {/* CTA */}
      <Sequence from={ctaFrom} durationInFrames={CTA_DURATION} layout="none">
        <StillFrame
          src={AVATAR}
          caption="Lo dejo linkado si os pasa lo mismo que a mí, a mí me está funcionando"
          capPosition="center"
          capFontSize={48}
          zoomDirection="out"
          focusOrigin="50% 30%"
        />
      </Sequence>
    </AbsoluteFill>
  );
};
