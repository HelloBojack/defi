import { useGLTF, useCursor, useAnimations } from "@react-three/drei";
import { Canvas, useFrame, useGraph } from "@react-three/fiber";
import * as THREE from "three";
import { Suspense, useMemo, useState } from "react";
import { SkeletonUtils } from "three-stdlib";
import modelSrc from "../../assets/cat.glb?url";

function Model({ pose, ...props }: any) {
  const { scene, animations } = useGLTF(modelSrc);
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { ref, actions, names } = useAnimations(animations);

  return (
    <group ref={ref} {...props} dispose={null}>
      <group>
        <primitive object={clone} />
      </group>
    </group>
  );
}
function Rig() {
  return useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      1.5 + state.mouse.x / 4,
      0.075
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      1.5 + state.mouse.y / 4,
      0.075
    );
  });
}

export const CatLogo = () => {
  return (
    <Canvas shadows camera={{ position: [1, 1.5, 2.5], fov: 50 }}>
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <group position={[0, -1, 0]}>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </group>
      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeBufferGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
      <Rig />
    </Canvas>
  );
};
