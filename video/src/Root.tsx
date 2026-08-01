import "./index.css";
import { Composition, staticFile } from "remotion";
import {
  CaptionedVideo,
  calculateCaptionedVideoMetadata,
  captionedVideoSchema,
} from "./CaptionedVideo";
import { HairDropPro, HAIRDROP_TOTAL_DURATION } from "./HairDropPro";
import { HairDropUGC, HAIRDROP_UGC_TOTAL_DURATION } from "./HairDropUGC";

// Cada <Composition> es una entrada en la barra lateral

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HairDropUGC"
        component={HairDropUGC}
        width={1080}
        height={1920}
        fps={30}
        durationInFrames={HAIRDROP_UGC_TOTAL_DURATION}
      />
      <Composition
        id="HairDropPro"
        component={HairDropPro}
        width={1080}
        height={1920}
        fps={30}
        durationInFrames={HAIRDROP_TOTAL_DURATION}
      />
      <Composition
        id="CaptionedVideo"
        component={CaptionedVideo}
        calculateMetadata={calculateCaptionedVideoMetadata}
        schema={captionedVideoSchema}
        width={1080}
        height={1920}
        defaultProps={{
          src: staticFile("sample-video.mp4"),
        }}
      />
    </>
  );
};
