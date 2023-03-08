import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import * as THREE from "three";
import Effects from "./effect/effect";
import Ground from "./ground/ground";
import Ring from "./thetaRing/ring";
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
      style={{ width: "100%", height: "100vh" }}
    >
      <color attach="background" args={["#3b082c"]} />
      <fog color="#3b082c" attach="fog" near={8} far={30} />
      <ambientLight intensity={0.5} />
      <spotLight position={[0, 10, 0]} intensity={0.3} />
      <Suspense fallback={null}>
        <Ring id={1} i={1} />
        <Ring id={2} i={2} />
        <Ring id={3} i={3} />
        <Ring id={4} i={4} />
        <Ring id={1} i={5} />
        <Ring id={2} i={6} />
        <Ring id={3} i={7} />
        <Ring id={4} i={8} />
      </Suspense>
      {/* <Ground /> */}
      <OrbitControls maxDistance={100} minDistance={5} />
    </Canvas>
  );
};

export default Container;
