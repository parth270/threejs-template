import React from "react";
import { MeshReflectorMaterial, Reflector, useTexture } from "@react-three/drei";
import * as THREE from 'three'

const Ground = () => {
  const [floor, normal] = useTexture([
    "/SurfaceImperfections003_1K_var1.jpg",
    "/SurfaceImperfections003_1K_Normal.jpg",
  ]);
  return (
    <mesh rotation={[-Math.PI / 2, 0, Math.PI / 2]} position={[0,-1,0]} >
    <planeGeometry args={[100,100]}  />
    <MeshReflectorMaterial
      blur={[400, 100]}
      resolution={512}
      args={[100, 100]}
      mirror={0.5}
      mixStrength={1.5}
      minDepthThreshold={0.25}
      maxDepthThreshold={1}
      depthScale={50}
      />
      </mesh>
  );
};

export default Ground;