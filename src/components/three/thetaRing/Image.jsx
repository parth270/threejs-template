import { useTexture, useVideoTexture } from "@react-three/drei";
import { useLoader, useThree } from "@react-three/fiber";
import gsap, { Power4 } from "gsap";
import React, { Suspense, useRef } from "react";
import { useSelector } from "react-redux";
import * as THREE from "three";
import { TextureLoader } from "three";

const Cylinder = (props) => {
  //   const texture = useVideoTexture(`/video (${props.id}).mp4`);
  //   texture.name = `video-${props.i}`;
  const totalRadius = 6.283185307179586;
  const geometry1 = new THREE.CylinderGeometry(4.01,4.01, 2.03, 180);

  const texture = useVideoTexture(`/video (${1}).mp4`);
  texture.name = `video-${1}`;
  texture.encoding = THREE.sRGBEncoding;
  const color = useTexture("/test (1).jpg");
  const state = useSelector((state) => state.three);
  const ref = useRef();
  const [opacity, setOpacity] = React.useState(0);
  const [check, setCheck] = React.useState(false);
  const [check1, setCheck1] = React.useState(true);
  const three = useThree();
  React.useEffect(() => {
    const tl = gsap.timeline();
    if (state.page !== null) {
        setCheck1(false);
        if(check1){
            tl.to(ref.current.position, {
                y: 0,
                duration: 0.75,
                delay: 0.75,
                onUpdate: () => {
                    const pro = tl.progress();
                    setOpacity(pro);
                    // ref.current.lookAt(0, 1.125*pro, 5.5*pro)
                },
                ease: Power4.easeOut,
            });
        }
    } else {
      setCheck(true);
      setCheck1(true);
      if (check) {
        tl.to(ref.current.position, {
          y: 0,
          duration: 0.75,
          delay: 0,
          onUpdate: () => {
            const pro = 1 - tl.progress();
            ref.current.material.opacity = pro * 1;
            // ref.current.lookAt(0, 1.125*pro, 5.5*pro)
          },
          ease: Power4.easeOut,
        });
      }
    }
  }, [state.page]);

  return (
    <>
      <Suspense fallback={null}>
        <mesh
          position={[0, 0.003, 0]}
          rotation={[0, (Math.PI * 1.28) / 2, 0]}
          geometry={geometry1}
          ref={ref}
        >
          <meshBasicMaterial
            map={color}
            transparent={true}
            // aoMapIntensity={0.8}
            opacity={opacity}
            toneMapped={false}
            side={THREE.DoubleSide}
          />
        </mesh>
      </Suspense>
    </>
  );
};

export default Cylinder;