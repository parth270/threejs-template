// import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { Suspense, useRef, useState } from "react";
import * as THREE from "three";
import Effects from "./effect/effect";
import Ground from "./ground/ground";
import Cylinder from "./thetaRing/outerRing";
import Ring from "./thetaRing/ring";
// import Ring1 from "./thetaRing/Image";
import useMouse from "../../hooks/useMouse";
import { useDispatch, useSelector } from "react-redux";
import gsap, { Power4 } from "gsap";
// import { Clock } from "three";
// import { initiateRef } from "../../services/three";
// import { useLocation } from "react-router-dom";
import ImageContainer from "./thetaRing/imagesContainer";
import { OrbitControls } from "@react-three/drei";
import { currentVid, isDragging } from "../../services/three";
const pages = [
  {
    id: 0,
    theme: "#e376e2",
    back: "#2b0032",
  },
  {
    id: 1,
    theme: "#e376e2",
    back: "#e376e2",
  },
  {
    id: 2,
    theme: "#ee913e",
    back: "#ee913e",
  },
  {
    id: 3,
    theme: "#ee913e",
    back: "#ee913e",
  },
  {
    id: 4,
    theme: "#dacf20",
    back: "#dacf20",
  },
  {
    id: 5,
    theme: "#568694",
    back: "#568694",
  },
  {
    id: 6,
    theme: "#429ae8",
    back: "#429ae8",
  },
  {
    id: 7,
    theme: "#e24c4a",
    back: "#e24c4a",
  },
];

const Rig = (props) => {
  const ref = useRef();
  const mouse = useMouse();

  const menu = useSelector((state) => state.three);
  const [starting, setStarting] = React.useState(false);
  const three = useThree();
  const startingPos = new THREE.Vector3(0, 4, 21.5);
  const midPos = new THREE.Vector3(0, 1.6, 13);
  const endPos = new THREE.Vector3(0, 2.125, 11.5);
  const topPos = new THREE.Vector3(6, 30, 0);
  const dispatch = useDispatch();
  const camera = three.camera;
  const tl = gsap.timeline();
  const [paagess, setPages] = React.useState(false);
  React.useEffect(() => {
    if (menu.route === "Slider") {
      tl.to(camera.position, {
        x: endPos.x,
        y: endPos.y,
        z: endPos.z,
        duration: 2,
        onUpdate: (e) => {
          console.log(tl.progress());
        },
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
        x: -Math.PI / 18,
        y: -Math.PI / 8,
        z: 0,
        duration: 1,
        delay: 0.25,
        ease: Power4.easeInOut,
      });
    } else if (menu.route === "Home") {
      if (starting) {
        if (menu.page === null) {
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
            duration: 1.5,
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
    }
    setStarting(true);
  }, [menu.route]);

  const [check, setCheck] = React.useState(false);

  React.useEffect(() => {
    const tl = gsap.timeline();
    if (menu.page !== null) {
      setPages(false);
      if (paagess) {
        tl.to(camera.position, {
          x: topPos.x,
          y: topPos.y,
          z: topPos.z,
          onUpdate: () => {
            const pro = tl.progress();
            const i = tl.progress().toFixed(2) * 100;
            console.log(i);
            const y = camera.rotation.y;
            const z = camera.rotation.z;
            camera.lookAt(pro * 6, -0.12, -0.5);
            camera.rotation.y = y;
            camera.rotation.z = z;
          },
          duration: 2,
          ease: Power4.easeInOut,
        });
        gsap.to(ref.current.rotation, {
          x: -Math.PI / 18,
          y: -Math.PI / 8,
          z: (-Math.PI * 0.8) / 8,
          duration: 1,
          delay: 0.5,
          ease: Power4.easeInOut,
        });
      }
    } else {
      setPages(true);
      setCheck(true);
      if (check) {
        tl.to(camera.position, {
          x: endPos.x,
          y: endPos.y,
          z: endPos.z,
          duration: 2,
          onUpdate: () => {
            const pro = 1 - tl.progress();
            const y = camera.rotation.y;
            const z = camera.rotation.z;
            camera.lookAt(pro * 6, -0.125, -0.5);
            camera.rotation.y = y * pro;
            camera.rotation.z = z * pro;
          },
          ease: Power4.easeInOut,
        });
        gsap.to(ref.current.rotation, {
          x: -Math.PI / 18,
          y: -(menu.current * (Math.PI / 4) + Math.PI / 8),
          z: 0,
          duration: 1,
          delay: 0.5,
          ease: Power4.easeInOut,
        });
      }
    }
  }, [menu.page]);
  const parentRef = useRef();
  const mostParent = useRef();
  React.useEffect(() => {
    if (menu.route === "Slider") {
      if (paagess) {
        gsap.to(ref.current.rotation, {
          x: -Math.PI / 18,
          y: menu.rotation,
          z: 0,
          duration: 1,
          ease: Power4.easeIn,
        });
      }
    }
  }, [menu.rotation]);
  const [check11, setCheck11] = useState();
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
    } else {
      if (menu.page === null) {
        if (menu.route === "Slider") {
          if (menu.dragging) {
            console.log(menu.drag);
            // gsap.to(parentRef.current.rotation, {
            //   z: 0.0001 * menu.drag.x,
            //   duration: 0.1,
            // });
            gsap.to(mostParent.current.rotation, {
              y: 0.01 * menu.drag.x,
              duration: 0.3,
            });
            if (menu.drag.x > 20) {
              if (menu.current === 0) {
                dispatch(currentVid(7));
                dispatch(isDragging(false));
              } else {
                dispatch(currentVid(menu.current - 1));
                dispatch(isDragging(false));
              }
            } else if (menu.drag.x<-20) {
              if (menu.current === 7) {
                dispatch(currentVid(0));
                dispatch(isDragging(false));
              } else {
                dispatch(currentVid(menu.current + 1));
                dispatch(isDragging(false));
              }
            }
            setCheck11(true);
            // ref.current.rotation.z = 0.1*menu.drag.x;
            // ref.current.rotation.y = 0.1*menu.drag.x;
          } else {
            if (check11) {
              gsap.to(parentRef.current.rotation, {
                z: 0,
                duration: 0.6,
                delay:0.3,
                ease:Power4.easeInOut
              });
              gsap.to(mostParent.current.rotation, {
                y: 0,
                duration: 0.6,
                delay:0.3,
                ease:Power4.easeInOut
              });
              setCheck11(false);
            }
          }
        }
      }
    }
  });

  return (
    <>
      <group ref={mostParent}>
        <group ref={parentRef}>
          <group {...props} ref={ref} />
        </group>
      </group>
      <color
        attach="background"
        // args={[pages[0].back]}
        args={["#c06b82"]}
      />
      <fog color={"#c06b82"} attach="fog" near={20} far={100} />
    </>
  );
};

const Scene = () => {
  const three = useThree();

  // React.useEffect(()=>{
  //   const horizontalFov=90;
  //   const hfov=(Math.atan(Math.tan(((horizontalFov / 2) * Math.PI) / 180) / three.camera.aspect) * 2 * 180) / Math.PI;
  //   three.camera.fov=hfov;
  // })

  return (
    <>
      <Effects />
      <hemisphereLight intensity={0.1} />
      <pointLight
        position={[0, 0.5, 0]}
        intensity={0.7}
        color={"#c06b82"}
        castShadow
      />
      <Suspense fallback={null}>
        <Rig position={[-3, 0, -1]} rotation={[0, (Math.PI * 0.12) / 2, 0]}>
          <ImageContainer />
          <Ring id={1} i={1} src={"/Vids/INTRODUCTION.mp4"} />
          <Ring id={2} i={2} src={"/Vids/HISTORY.mp4"} />
          <Ring id={3} i={3} src={"/Vids/VALUEPROPOSITION.mp4"} />
          <Ring id={4} i={4} src={"/Vids/CULTURE.mp4"} />
          <Ring id={1} i={5} src={"/Vids/ONESTORE.mp4"} />
          <Ring id={2} i={6} src={"/Vids/GROWING PAINS.mp4"} />
          <Ring id={3} i={7} src={"/Vids/FINAL THOUGHTS.mp4"} />
          <Ring id={4} i={8} src={"/Vids/NEXT CASE.mp4"} />
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
  var horizontalFov = 90;
  return (
    <div className="absolute w-[100%] h-[100vh]">
      <Canvas
        camera={{ position: [0, 4, 21.5], fov: 18 }}
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
