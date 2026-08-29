import { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { AdaptiveDpr, AdaptiveEvents, Environment, Preload } from '@react-three/drei';
import { AICoreGroup } from './AICoreGroup';
import { ParticleField } from './ParticleField';
import { useMousePosition } from '../../hooks/useMousePosition';

interface HeroSceneProps {
  className?: string;
}

function SceneContents() {
  const mouse = useMousePosition();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY / window.innerHeight);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#00d4ff" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#7c3aed" />
      <pointLight position={[0, 0, 3]} intensity={0.3} color="#0066ff" />

      <Suspense fallback={null}>
        <AICoreGroup
          mouseX={mouse.normalizedX}
          mouseY={mouse.normalizedY}
          scrollY={scrollY}
        />
        <ParticleField count={250} spread={18} size={0.025} color="#00d4ff" />
        <Environment preset="night" />
      </Suspense>
    </>
  );
}

export function HeroScene({ className }: HeroSceneProps) {
  const canvasRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={canvasRef} className={className}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        <SceneContents />
        <Preload all />
      </Canvas>
    </div>
  );
}
