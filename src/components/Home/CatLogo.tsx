import { useGLTF, useAnimations } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Suspense, useMemo } from "react";
import { useMouse } from "react-use";
import { SkeletonUtils } from "three-stdlib";
import modelSrc from "../../assets/cat.glb?url";

function Model({ pose, ...props }: any) {
  const { scene, animations } = useGLTF(modelSrc);
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { ref } = useAnimations(animations);
  const { gl } = useThree();

  const { elX, elY, elW, elH } = useMouse({ current: gl.domElement });
  const x = elX - elW / 2;
  const y = -(elY - elH / 2);

  useFrame((state) => {
    const vec = new THREE.Vector3(-x * 0.01, -y * 0.01, 5);
    state.camera.position.lerp(vec, 0.075);
    state.camera.lookAt(0, 0, 0);
    state.camera.updateProjectionMatrix();
  });

  return (
    <group ref={ref} {...props} dispose={null}>
      <primitive object={clone} />
    </group>
  );
}

export const CatLogo = () => {
  return (
    <div className="h-[360px] w-[360px] shrink-0">
      <Suspense fallback={null}>
        <Canvas camera={{ fov: 45 }}>
          <Model />
        </Canvas>
      </Suspense>
    </div>
  );
};
