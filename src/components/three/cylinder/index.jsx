import { useVideoTexture } from "@react-three/drei";
import React, { useRef, useState } from "react";
import * as THREE from "three";

const Cylinder = () => {
  const texture = useVideoTexture("/video (1).mp4");

  return (
    <mesh position={[0, 0, 0]} >
      <meshPhongMaterial color={"#ccc"} map={texture} toneMapped={false} />
      <cylinderGeometry args={[10, 10, 5, 128]} />
    </mesh>
  );
};

export default Cylinder;
