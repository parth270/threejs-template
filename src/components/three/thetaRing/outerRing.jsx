import React from "react";
import * as THREE from "three";

const Cylinder = (props) => {
  //   const texture = useVideoTexture(`/video (${props.id}).mp4`);
  //   texture.name = `video-${props.i}`;
  const totalRadius = 6.283185307179586;
  const geometry1 = new THREE.CylinderGeometry(
    3.99,
    3.99,
    2.03,
    180,
    true,
    0,
    0,
    totalRadius
  );
  const geometry2 = new THREE.CylinderGeometry(
    4.01,
    4.01,
    2.03    ,
    180,
    true,
    0,
    0,
    totalRadius
  );
  return (
    <>
      <mesh position={[0, 0.003, 0]} geometry={geometry1}>
        <meshStandardMaterial color={"#000"} toneMapped={false}  />
      </mesh>
      <>
      <mesh position={[0, 0.003, 0]} geometry={geometry2}>
        <meshPhongMaterial color={"#000"} toneMapped={false} side={THREE.BackSide}  />
      </mesh>
      </>
    </>
  );
};

export default Cylinder;
