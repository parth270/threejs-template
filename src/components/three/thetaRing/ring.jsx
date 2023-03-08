import { useVideoTexture } from "@react-three/drei";
import React, { Suspense, useRef, useState } from "react";
import * as THREE from "three";
import Loader from "../../loader";

const Cylinder = (props) => {
  const texture = useVideoTexture(`/video (${props.id}).mp4`);
  //   texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  //   texture.repeat.set( 1, 1 );
  //   texture.anisotropy = 16;
  //   texture.repeat.set(5, 5);
  texture.needsUpdate = true;
  const totalRadius = 6.283185307179586;
  const points = [];
  const check = 54;
  const findRadius = (radius) => {
    for (let i = check; i <= check + 16; i++) {
      const theta = (i / 128) * Math.PI * 2;
      points.push(
        new THREE.Vector2(Math.cos(theta) * radius, Math.sin(theta) * radius, 0)
      );
    }
  };
  const findReverseRadius = (radius) => {
    for (let i = check + 16; i >= check; i--) {
      const theta = (i / 128) * Math.PI * 2;
      points.push(
        new THREE.Vector2(Math.cos(theta) * radius, Math.sin(theta) * radius, 0)
      );
    }
  };
  const extrudeSettings = {
    steps: 2,
    depth: 1.8,
    bevelEnabled: false,
    bevelThickness: 0,
    bevelSize: 0,
    bevelOffset: 0,
    bevelSegments: 1,
  };
  findRadius(4);
  console.log("got it!");
  findReverseRadius(4.1);
  const shape = new THREE.Shape(points);
  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  //   console.log(geometry.attributes);
  //   const uv=geometry.attributes.uv;
  //   for(let i =0;i<uv.array.length;i+=8){
  //     uv[i]=0;
  //     uv[i+1]=0;
  //     uv[i+2]=0;
  //     uv[i+3]=1;
  //     uv[i+4]=1;
  //     uv[i+5]=1;
  //     uv[i+6]=1;
  //     uv[i+7]=0;
  //   }
  //   geometry.attributes.uv.needsUpdate=true;
  const geometry1 = new THREE.CylinderGeometry(
    4,
    4,
    2,
    30,
    true,
    0,
    0,
    totalRadius / 8
  );
  return (
    <mesh
      position={[0, 0, 0]}
      geometry={geometry1}
      rotation={[
        0 * THREE.MathUtils.DEG2RAD,
        // 0 * THREE.MathUtils.DEG2RAD,
        Number(props.i) * 45 * THREE.MathUtils.DEG2RAD,
        0 * THREE.MathUtils.DEG2RAD,
      ]}
    >
      <meshPhongMaterial
        color={"#ccc"}
        map={texture}
        side={THREE.DoubleSide}
        toneMapped={false}
      />
      {/* <cylinderGeometry args={[]} /> */}
      {/* <extrudeGeometry addShape={shape,extrudeSettings}   /> */}
    </mesh>
  );
};

export default Cylinder;
