import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from 'three';

const AnimatedBox = () => {
  const boxRef = useRef();
  
  useFrame((state) => {
    boxRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
    boxRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
  });
  
  return (
    <mesh ref={boxRef} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color={new THREE.Color(0xD8BFD8)} 
        metalness={0.3}
        roughness={0.2}
      />
    </mesh>
  );
};

const Experience = () => {
  return (
    <Canvas shadows>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls enableZoom={false} />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} castShadow />
      
      <Suspense fallback={null}>
        <AnimatedBox />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      </Suspense>
    </Canvas>
  );
};

export default Experience;