import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Outline,
  SSR,
  Vignette,
} from "@react-three/postprocessing";
import { useControls } from "leva";
import React from "react";

const Effects = () => {
  return (
    <EffectComposer multisampling={0} disableNormalPass={true}>
      <DepthOfField
        focusDistance={0}
        focalLength={0.02}
        bokehScale={2}
        height={480}
      />
      <Noise opacity={0.025} />
      <Vignette eskil={false} offset={0.1} darkness={1.2} />
    </EffectComposer>
  );
};

export default Effects;
