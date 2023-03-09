import React, { Suspense, useEffect, useRef, useState } from "react";
import { useVideoTexture } from "@react-three/drei";
import * as THREE from "three";
import gsap, { Back, Power4 } from "gsap";

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
    totalRadius / (8 * 1.003)
  );
  const ref = useRef();

  React.useEffect(() => {
    if (!ref.current) return;
    setTimeout(() => {
      gsap.to(ref.current.rotation, {
        y: ref.current.rotation.y + Math.PI*4/3,
        ease: Power4.easeInOut,
        duration: 4,
      });
    }, 500);
    setInterval(() => {
      gsap.to(ref.current.rotation, {
        y: ref.current.rotation.y + (45 * THREE.MathUtils.DEG2RAD),
        ease: Power4.easeInOut,
        duration: 4,
      });
    }, 10000);
  });

  return (
    <mesh
      ref={ref}
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
