import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import Loader from "../../components/Loader";

const Cube = () => {
  const cube = useGLTF("./primary_ion/scene.gltf");
  const [rotationY, setRotationY] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRotationY((rotationY) => rotationY + 0.01);
    }, 10);
    return () => clearInterval(timer);
  }, []);

  return (
    <mesh position={[0, 0, 0]}>
      <hemisphereLight intensity={1} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={cube.scene}
        material={cube.animations}
        scale={0.4}
        position={[-0.2, -0.1, -1]}
        rotation={[0, rotationY, 0]}
      />
    </mesh>
  );
};

const CubeCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [1, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Cube />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default CubeCanvas;
