import React, { Suspense, useRef } from "react";
import { useSelector } from "react-redux";
import * as THREE from "three";
import gsap, { Power4 } from "gsap";
import { useVideoTexture } from "@react-three/drei";
const Tv = () => {
  const state = useSelector((state) => state.three);
  const ref = useRef();
  const texture = useVideoTexture(`/video (${2}).mp4`);
  texture.encoding = THREE.sRGBEncoding;
  React.useEffect(() => {
    const tl = gsap.timeline();
    if (state.page !== null) {
        tl.to(ref.current.position, {
          y: -0.1,
          duration: 3,
          delay: 1.25,
          onUpdate: () => {
            const pro = tl.progress();
            // ref.current.lookAt(0, 1.125*pro, 5.5*pro)
          },
          ease: Power4.easeOut,
        });
    }else{
        tl.to(ref.current.position, {
          y: -3,
          duration: 3,
          delay: 0,
          onUpdate: () => {
            const pro = tl.progress();
            // ref.current.lookAt(0, 1.125*pro, 5.5*pro)
          },
          ease: Power4.easeOut,
        });

    }
  }, [state.page]);

  return (
    <>
      <group
        ref={ref}
        position={[0, -3, 0]}
        rotation={[-Math.PI*0.08,0, 0]}
      >
        <mesh 
            position={[0,0,0.7]}
        >
          <boxGeometry args={[4,  1.6, 4]}
            
          />
          <meshPhongMaterial color={"#000"}

            side={THREE.DoubleSide}
          />
        </mesh>
        <mesh position={[-1.2, 0, -0.8]} rotation={[-Math.PI*0.3/12,Math.PI/12,0]} >
          <boxGeometry args={[1.55, 0.95, 0.5]} />
          <meshBasicMaterial color={"#fff"}
            map={texture}
            toneMapped={false}
          />
        </mesh>
      </group>
    </>
  );
};

export default Tv;
