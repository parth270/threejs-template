import {
  OrbitControls,
  PresentationControls,
  useHelper,
} from "@react-three/drei";
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
  React.useEffect(() => {
    const camera = three.camera;
    camera.lookAt(3, 0, 0);
  });
  return (
    <>
      <color attach="background" args={["#2b0032"]} />
      <fog color="#2b0032" attach="fog" near={1} far={30} />
      <Effects />
      <hemisphereLight intensity={0.1} />
      <pointLight position={[0, 0.5, 0]} intensity={0.7} color={"#fff"} castShadow />
      <Suspense fallback={null}>
        <group position={[0, 0, 0]} rotation={[0,Math.PI*0.12/2,0]} >
          <Ring id={1} i={1} />
          <Ring id={2} i={2} />
          <Ring id={3} i={3} />
          <Ring id={4} i={4} />
          <Ring id={1} i={5} />
          <Ring id={2} i={6} />
          <Ring id={3} i={7} />
          <Ring id={4} i={8} />
          <Cylinder />
          <Ground />
        </group>
      </Suspense>
      <OrbitControls
        maxDistance={10}
        minDistance={6}
        target={new THREE.Vector3(3, 0, 0)}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        enabled={false}
      />
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
    <div className="absolute w-[100%] h-[100vh]" >

    <Canvas
      camera={{ position: [5, 2.2, 7.5], fov: 65 }}
      dpr={devicePixelRatio}
      gl={{ antialias: false, powerPreference: "high-performance" }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.outputEncoding = THREE.sRGBEncoding;
      }}
      style={{ width: "100%", height: "100vh" }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
      </div>
  );
};

export default Container;
