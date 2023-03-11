import {
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
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
      <Vignette eskil={false} offset={0.1} darkness={0.4} />
    </EffectComposer>
  );
};

export default Effects;
