"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { useGLTF } from "@react-three/drei";
import HeroLights from "./HeroLights";

function Model() {
  const { scene } = useGLTF("/models/optimized-room.glb");

  return <primitive object={scene} />;
}

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 124px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <HeroLights/>
      <group
        scale={isMobile ? 0.7 : 1}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <Model />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
