import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface AICoreMeshProps {
  mouseX: number;
  mouseY: number;
  scrollY: number;
}

function OrbitRing({ radius, speed, tilt, color }: { radius: number; speed: number; tilt: number; color: string }) {
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame((_, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * speed;
    }
  });

  return (
    <mesh ref={ringRef} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.008, 8, 80]} />
      <meshBasicMaterial color={color} transparent opacity={0.5} />
    </mesh>
  );
}

function NeuralNodes({ count = 12, radius = 1.8 }: { count?: number; radius?: number }) {
  const positions = useMemo(() => {
    const pos: [number, number, number][] = [];
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      pos.push([
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi),
      ]);
    }
    return pos;
  }, [count, radius]);

  return (
    <>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshBasicMaterial color={i % 2 === 0 ? '#00d4ff' : '#7c3aed'} transparent opacity={0.8} />
        </mesh>
      ))}
    </>
  );
}

export function AICoreGroup({ mouseX, mouseY, scrollY }: AICoreMeshProps) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    // Smooth mouse follow
    groupRef.current.rotation.x += (mouseY * 0.3 - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.y += (mouseX * 0.5 - groupRef.current.rotation.y) * 0.05;

    // Scroll-based movement
    groupRef.current.position.y = -scrollY * 2;

    // Auto-rotation
    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.2;
      coreRef.current.rotation.y += delta * 0.3;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x -= delta * 0.3;
      innerRef.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer glow sphere */}
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.04} />
      </mesh>

      {/* Core icosahedron */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#0a1628"
          emissive="#00d4ff"
          emissiveIntensity={0.3}
          wireframe={false}
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>

      {/* Inner wireframe */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[0.7, 0]} />
        <meshBasicMaterial color="#7c3aed" wireframe transparent opacity={0.7} />
      </mesh>

      {/* Orbit rings */}
      <OrbitRing radius={1.6} speed={0.8} tilt={Math.PI / 6} color="#00d4ff" />
      <OrbitRing radius={1.4} speed={-0.6} tilt={Math.PI / 3} color="#7c3aed" />
      <OrbitRing radius={1.8} speed={0.4} tilt={-Math.PI / 4} color="#0066ff" />

      {/* Neural nodes */}
      <NeuralNodes count={10} radius={1.9} />
    </group>
  );
}
