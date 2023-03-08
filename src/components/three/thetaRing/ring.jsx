import { useVideoTexture } from "@react-three/drei";
import React, { useRef, useState } from "react";
import * as THREE from "three";

const Cylinder = (props) => {
  const texture = useVideoTexture(`/video (${props.id}).mp4`);
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
  console.log(geometry.attributes)
  return (
    <mesh
      position={[0, 1, 0]}
      geometry={geometry}
      rotation={[
        90 * THREE.MathUtils.DEG2RAD,
        0 * THREE.MathUtils.DEG2RAD,
        (Number(props.i)*45)* THREE.MathUtils.DEG2RAD,
      ]}
    >
      <meshPhongMaterial
        color={"#ccc"}
        map={texture}
        side={THREE.DoubleSide}
        toneMapped={false}
      />
      {/* <extrudeGeometry addShape={shape,extrudeSettings}   /> */}
    </mesh>
  );
};

export default Cylinder;
