import { OrbitControls, PerspectiveCamera, Stars, Float } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import * as THREE from 'three';
import { useLocation } from "react-router-dom";

// Floating cube that responds to hover
const InteractiveCube = ({ position, color, size = 1, onClick }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    
    // Scale up slightly when hovered
    meshRef.current.scale.x = THREE.MathUtils.lerp(
      meshRef.current.scale.x,
      hovered ? 1.2 : 1,
      0.1
    );
    meshRef.current.scale.y = meshRef.current.scale.x;
    meshRef.current.scale.z = meshRef.current.scale.x;
  });
  
  return (
    <mesh 
      ref={meshRef} 
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={onClick}
    >
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial 
        color={new THREE.Color(color)} 
        metalness={0.3}
        roughness={0.2}
        emissive={new THREE.Color(color)}
        emissiveIntensity={hovered ? 0.5 : 0}
      />
    </mesh>
  );
};

// Background particles
const Particles = () => {
  const points = useRef();
  
  useFrame((state) => {
    points.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });
  
  // Generate random particles
  const particleCount = 2000;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 30;
    positions[i3 + 1] = (Math.random() - 0.5) * 30;
    positions[i3 + 2] = (Math.random() - 0.5) * 30;
  }
  
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.05} 
        color="#B0E0E6" 
        sizeAttenuation={true} 
        transparent={true} 
        opacity={0.6}
      />
    </points>
  );
};

// Main scene component
const Scene = () => {
    const { camera: _camera } = useThree();
    const location = useLocation();
  
  // Different scenes based on route
  const renderSceneContent = () => {
    switch (location.pathname) {
      case '/':
        return (
          <>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
              <InteractiveCube position={[-2, 0, 0]} color="#D8BFD8" size={1.2} />
            </Float>
            <Float speed={1.5} rotationIntensity={0.7} floatIntensity={0.7}>
              <InteractiveCube position={[2, 0, 0]} color="#C1E1C1" size={0.8} />
            </Float>
            <Float speed={1} rotationIntensity={0.3} floatIntensity={0.5}>
              <InteractiveCube position={[0, 1.5, 0]} color="#B0E0E6" size={1} />
            </Float>
          </>
        );
      case '/projects':
        return (
          <>
            <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
              <InteractiveCube position={[-3, 1, 0]} color="#D8BFD8" size={0.7} />
              <InteractiveCube position={[-1.5, -1, 0]} color="#C1E1C1" size={0.7} />
              <InteractiveCube position={[0, 1, 0]} color="#B0E0E6" size={0.7} />
              <InteractiveCube position={[1.5, -1, 0]} color="#D8BFD8" size={0.7} />
              <InteractiveCube position={[3, 1, 0]} color="#C1E1C1" size={0.7} />
            </Float>
          </>
        );
      case '/about':
        return (
          <>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
              <InteractiveCube position={[0, 0, 0]} color="#D8BFD8" size={1.5} />
            </Float>
          </>
        );
      case '/contact':
        return (
          <>
            <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
              <InteractiveCube position={[-2, 1, 0]} color="#D8BFD8" size={0.6} />
              <InteractiveCube position={[2, 1, 0]} color="#C1E1C1" size={0.6} />
              <InteractiveCube position={[0, -1, 0]} color="#B0E0E6" size={0.6} />
            </Float>
          </>
        );
      default:
        return null;
    }
  };
  
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} castShadow />
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Particles />
      
      {renderSceneContent()}
    </>
  );
};

const Experience = () => {
  return (
    <Canvas shadows>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
};

export default Experience;