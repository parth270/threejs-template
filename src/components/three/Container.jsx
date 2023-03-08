import { OrbitControls, PresentationControls, useHelper } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import React, { Suspense } from "react";
import * as THREE from "three";
import { CameraHelper, DirectionalLightHelper } from "three";
import Effects from "./effect/effect";
import Ground from "./ground/ground";
import Cylinder from "./thetaRing/outerRing";
import Ring from "./thetaRing/ring";
import { Environment } from "@react-three/drei";

const Scene = () => {
    const three = useThree();

  return (
    <>
    <Perf position="top-left"/>
      <Effects/>
      <color attach="background" args={["#2b0032"]} />
      <fog color="#2b0032" attach="fog" near={8} far={30} />
       {/* <ambientLight intensity={0.2} />  */}
       <directionalLight position={[0,4,-4]} castShadow intensity={0.9}  />
       <directionalLight position={[4,4,4]} castShadow intensity={0.9} />
       <directionalLight position={[-4,4,4]} castShadow intensity={0.9} />
      <Suspense fallback={null}>
        <Ring id={1} i={1} />
        <Ring id={2} i={2} />
        <Ring id={3} i={3} />
        <Ring id={4} i={4} />
        <Ring id={1} i={5} />
        <Ring id={2} i={6} />
        <Ring id={3} i={7} />
        <Ring id={4} i={8} />
        <Cylinder/>
      </Suspense>
      <Ground />
      <OrbitControls maxDistance={10} minDistance={6} minPolarAngle={0} maxPolarAngle={Math.PI/2} />
    </>
  );
};

const Container = () => {
  const [devicePixelRatio, setDevicePixelRatio] = React.useState();

  React.useEffect(() => {
    const pixel = window.devicePixelRatio;
    setDevicePixelRatio(pixel);
  }, []);
  return (
    <Canvas
      camera={{ position: [0, 3, 10], fov: 65 }}
      dpr={devicePixelRatio}
      gl={{ antialias: false,powerPreference:"high-performance"}}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.outputEncoding = THREE.sRGBEncoding;
      }}
      style={{ width: "100%", height: "100vh" }}
    ><Suspense fallback={null} >
        <Scene/>
    </Suspense>
    </Canvas>
  );
};

export default Container;
