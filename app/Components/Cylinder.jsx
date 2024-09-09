"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Cyl from "../cyl";
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";

const Cylinder = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 30 }}
      dpr={[1, 1.5]} // Adjust device pixel ratio to optimize performance
      shadows
    >
      <ambientLight />
      <Suspense fallback={null}> {/* Lazy loading Cyl component */}
        <Cyl />
      </Suspense>

      {/* Moved OrbitControls outside of the EffectComposer */}
      <OrbitControls />

      {/* Post-processing effects */}
      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={1.5} // Lowered bloom intensity to reduce workload
          luminanceThreshold={0}
          luminanceSmoothing={0.34}
        />
        <ToneMapping adaptive={false} /> {/* Consider removing if not needed */}
      </EffectComposer>
    </Canvas>
  );
};

export default Cylinder;
