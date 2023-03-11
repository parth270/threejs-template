import React from "react";
import {
  MeshReflectorMaterial,
  useTexture,
} from "@react-three/drei";

const Ground = () => {
  const [floor, normal] = useTexture([
    "/SurfaceImperfections003_1K_var1.jpg",
    "/SurfaceImperfections003_1K_Normal.jpg",
  ]);
  return (
    <mesh rotation={[-Math.PI / 2, 0, Math.PI / 2]} position={[0, -1, 0]}>
      <planeGeometry args={[100, 100]} />
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={512}
        args={[100, 100]}
        mirror={0.5}
        mixStrength={0.5}
        minDepthThreshold={0.25}
        maxDepthThreshold={1}
        depthScale={50}
        // color={"#2b0032"}
        // color={"#a55fb1"}
        // color={"#d6b1dc"}
        color={"#b30030"}
      />
    </mesh>
  );
};

export default Ground;
