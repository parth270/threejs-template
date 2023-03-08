import React, { Suspense, useRef, useState } from "react";
import { useVideoTexture } from "@react-three/drei";
import * as THREE from "three";

const Cylinder = (props) => {
  const texture = useVideoTexture(`/video (${props.id}).mp4`);
  texture.name = `video-${props.i}`;
  texture.encoding = THREE.sRGBEncoding;
  const totalRadius = 6.283185307179586;
  const geometry1 = new THREE.CylinderGeometry(
    4,
    4,
    2,
    180,
    true,
    0,
    0,
    totalRadius / (8*1.003)
  );
  console.log(texture);
  return (
    <mesh
    castShadow
      position={[0, 0.009, 0]}
      geometry={geometry1}
      rotation={[
        0 * THREE.MathUtils.DEG2RAD,
        Number(props.i) * 45 * THREE.MathUtils.DEG2RAD,
        0 * THREE.MathUtils.DEG2RAD,
      ]}
    >
      <Suspense fallback={null}>
        <meshBasicMaterial
          map={texture}
          side={THREE.DoubleSide}
          toneMapped={false}
        />
      </Suspense>
    </mesh>
  );
};

export default Cylinder;
