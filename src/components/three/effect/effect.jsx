import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing';
import React from 'react';

const Effects=()=>{
    return(
        <EffectComposer multisampling={0} >
            <Vignette offset={0.3} darkness={0.8} />
      </EffectComposer>
    )
}

export default Effects;