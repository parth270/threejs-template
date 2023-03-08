import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import * as THREE from 'three';
import Cylinder from "./cylinder/index";

const Container = () => {
  const [devicePixelRatio, setDevicePixelRatio] = React.useState();

  React.useEffect(() => {
    const pixel = window.devicePixelRatio;
    setDevicePixelRatio(pixel);
  }, []);
  return (
    <Canvas
      camera={{ position: [10, 0, 0], fov: 65 }}
      dpr={devicePixelRatio}
      gl={{ antialias: false }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.outputEncoding = THREE.sRGBEncoding;
      }}
      style={{width:"100%",height:"100vh"}}
    >
      <pointLight position={[0, 4, 0]} intensity={0.4} color="white" />
      <ambientLight intensity={0.7} />
    <Cylinder/>
      <OrbitControls maxDistance={100} minDistance={20} />
    </Canvas>
  );
};

export default Container;
