import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import * as THREE from "three";
import Effects from "./effect/effect";
import Ground from "./ground/ground";
import Cylinder from "./thetaRing/outerRing";
import Ring from "./thetaRing/ring";
import useMouse from "../../hooks/useMouse";
import { useDispatch, useSelector } from "react-redux";
import gsap, { Power4 } from "gsap";
import { Clock } from "three";
import { initiateRef } from "../../services/three";
const Rig = (props) => {
  const ref = useRef();
  const mouse = useMouse();

  const menu = useSelector((state) => state.three);
  const [starting, setStarting] = React.useState(false);
  const three = useThree();
  const startingPos = new THREE.Vector3(0, 1.8, 7.5);
  const midPos = new THREE.Vector3(0, 1.6, 6);
  const endPos = new THREE.Vector3(0, 1.25, 6);
  const dispatch = useDispatch();
  const camera = three.camera;
  React.useEffect(() => {
    if (menu.route==="Slider") {
      gsap.to(camera.position, {
        x: endPos.x,
        y: endPos.y,
        z: endPos.z,
        duration: 2,
        ease: Power4.easeInOut,
      });
      gsap.to(ref.current.position, {
        x: 0,
        y: 0,
        z: 0,
        duration: 2,
        ease: Power4.easeInOut,
      });
      gsap.to(ref.current.rotation, {
        x: -Math.PI/18,
        y: 0,
        z: 0,
        duration: 2,
        ease: Power4.easeInOut,
      });
    } else if(menu.route==="Home"){
      if (starting) {
        gsap.to(camera.position, {
          x: startingPos.x,
          y: startingPos.y,
          z: startingPos.z,
          duration: 2,
          ease: Power4.easeInOut,
        });
        gsap.to(ref.current.position, {
          x: -3,
          y: 0,
          z: -1,
          duration: 2,
          ease: Power4.easeInOut,
        });
        gsap.to(ref.current.rotation, {
          x: 0,
          y: 0,
          z: 0,
          duration: 2,
          ease: Power4.easeInOut,
        });
      }
    }
    setStarting(true);
  }, [menu.route]);
  console.log(menu.route,"please check hhere!")
  
  React.useEffect(()=>{
    if(menu.route==="Slider"){
      gsap.to(ref.current.rotation, {
        x: -Math.PI/18,
        y: (menu.rotation+1)*(Math.PI/16),
        z: 0,
        duration: 2,
        ease: Power4.easeInOut,
      });
      console.log((menu.rotation+1)*(Math.PI/8));
    }
  },[menu.rotation])

  useFrame(() => {
    if (!menu.menuOpen) {
      ref.current.rotation.x = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        -(mouse.y * Math.PI) / 20,
        0.01
      );
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        (mouse.x * Math.PI) / 20,
        0.01
      );
    }
  });

  React.useEffect(()=>{

  })

  return <group {...props} ref={ref} />;
};

const Scene = () => {
  return (
    <>
      <color attach="background" args={["#2b0032"]} />
      <fog color="#2b0032" attach="fog" near={1} far={30} />
      <Effects />
      <hemisphereLight intensity={0.1} />
      <pointLight
        position={[0, 0.5, 0]}
        intensity={0.7}
        color={"#fff"}
        castShadow
      />
      <Suspense fallback={null}>
        <Rig position={[-3, 0, -1]} rotation={[0, (Math.PI * 0.12) / 2, 0]}>
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
        </Rig>
      </Suspense>
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
    <div className="absolute w-[100%] h-[100vh]">
      <Canvas
        camera={{ position: [0, 1.8, 7.5], fov: 65 }}
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
