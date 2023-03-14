import React, { Suspense, useRef } from "react";
import { useVideoTexture } from "@react-three/drei";
import * as THREE from "three";
import gsap, { Power4 } from "gsap";
import { useDispatch, useSelector } from "react-redux";
import { initiateRef } from "../../../services/three";

const Cylinder = (props) => {
  const texture = useVideoTexture(props.src);
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
  // const menuOpen = useSelector((state) => state.three);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (!ref.current) return;
    gsap.to(ref.current.rotation, {
      y: ref.current.rotation.y + (Math.PI * 2),
      ease: Power4.easeInOut,
      duration: 4,
      delay: 0.5,
    });
  });
  // const state = useSelector(state=>state.three);
  // React.useEffect(()=>{
  //   if(state.route==="Slider"){
  //     gsap.to(ref.current.rotation, {
  //       y:ref.current.rotation.y+(-Math.PI*2.2/18),
  //       ease: Power4.easeInOut,
  //       duration: 4,
  //       delay: 0.5,
  //     });
  //   }
  // },[state.route]);
  // React.useEffect(() => {
  //   if (menuOpen) {
  //     clearTimeout(intervals);
  //   } else {
  //     intervals = setInterval(() => {
  //       gsap.to(ref.current.rotation, {
  //         y: ref.current.rotation.y + 45 * THREE.MathUtils.DEG2RAD,
  //         ease: Power4.easeInOut,
  //         duration: 4,
  //       });
  //     }, 10000);
  //   }
  // }, [menuOpen]);

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
