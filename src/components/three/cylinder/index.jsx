import { useVideoTexture } from '@react-three/drei';
import React, { useState } from 'react';
import * as THREE from 'three'

const Cylinder=()=>{

    const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/video (1).mp4', crossOrigin: 'Anonymous', loop: true, muted: true }))
    const texture = useVideoTexture("/video (1).mp4")
    return(
        <mesh position={[0,0,0]} >
            <meshPhongMaterial color={"#ccc"} map={texture} />
            <cylinderGeometry args={[10,10,5,128]}  />
            <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
        </mesh> 
    )
}

export default Cylinder;