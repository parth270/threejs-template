import { Bloom, DepthOfField, EffectComposer, Noise, SSR, Vignette } from '@react-three/postprocessing';
import { useControls } from 'leva';
import React from 'react';

const Effects=()=>{

    return(
        <EffectComposer disableNormalPass>
            {/* <Vignette offset={0.3} darkness={0.8} /> */}
            {/* <Bloom  /> */}
            {/* <Bloom luminanceThreshold={1} /> */}
            {/* <SSR {...props} /> */}
      </EffectComposer>
    )
}

export default Effects;