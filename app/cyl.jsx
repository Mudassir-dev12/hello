"use client";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as Three from "three";

const Cyl = () => {
  let tex = useTexture("./uimg.png");
  let cl = useRef(null);
  const rotationSpeed = 0.0090;

  useFrame(() => {
    if (cl.current) {
      cl.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <group rotation={[0, 2, 0.4]}>
      <mesh ref={cl}>
        <cylinderGeometry
          args={[
            2.5,        // radiusTop
            2.5,        // radiusBottom
            2.5,        // height
            64,         // radialSegments
            64,         // heightSegments
            true,       // openEnded
            0,          // thetaStart
            6.1261056745001,  // thetaLength (half circle)
          ]}
        />
        <meshStandardMaterial map={tex} transparent side={Three.DoubleSide} />
      </mesh>
    </group>
  );
};

export default Cyl;
