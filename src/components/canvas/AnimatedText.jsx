import { Text3D, Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const AnimatedText = ({ text, position = [0, 0, 0], size = 0.5, color = "#D8BFD8" }) => {
  const textRef = useRef();
  
  useFrame((state) => {
    textRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.1;
    // Subtle rotation
    textRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
  });
  
  return (
    <Center position={position}>
      <Text3D
        ref={textRef}
        font="/fonts/inter_regular.json" // We'll add this font file later
        size={size}
        height={0.1}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.01}
        bevelSize={0.01}
        bevelOffset={0}
        bevelSegments={5}
      >
        {text}
        <meshStandardMaterial 
          color={new THREE.Color(color)} 
          metalness={0.3}
          roughness={0.4}
        />
      </Text3D>
    </Center>
  );
};

export default AnimatedText;