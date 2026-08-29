import { Line, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import type { Group } from 'three'

type Point = [number, number, number]

const nodeCount = 22

function NeuralGraph() {
  const graphRef = useRef<Group>(null)

  const nodes = useMemo<Point[]>(() => {
    return Array.from({ length: nodeCount }, (_, index) => {
      const angle = (index / nodeCount) * Math.PI * 2
      const radius = 1.2 + Math.sin(index * 1.17) * 0.55
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle * 1.35) * 0.9
      const z = Math.sin(angle * 2.1) * 1.1
      return [x, y, z]
    })
  }, [])

  const links = useMemo(() => {
    return nodes.flatMap((_, index) => {
      const next = (index + 1) % nodeCount
      const skip = (index + 5) % nodeCount
      return [
        [nodes[index], nodes[next]],
        [nodes[index], nodes[skip]],
      ] as Point[][]
    })
  }, [nodes])

  useFrame((_, delta) => {
    if (!graphRef.current) {
      return
    }

    graphRef.current.rotation.y += delta * 0.2
    graphRef.current.rotation.x = Math.sin(performance.now() * 0.0002) * 0.15
  })

  return (
    <group ref={graphRef}>
      {links.map(([start, end], index) => (
        <Line key={`${start.join('-')}-${index}`} points={[start, end]} color="#38bdf8" transparent opacity={0.35} lineWidth={0.8} />
      ))}
      {nodes.map((position, index) => (
        <mesh key={`node-${index}`} position={position}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color={index % 2 === 0 ? '#22d3ee' : '#a78bfa'} emissive={index % 2 === 0 ? '#155e75' : '#6d28d9'} emissiveIntensity={0.8} />
        </mesh>
      ))}
    </group>
  )
}

export function HeroCanvas() {
  return (
    <div className="h-[360px] w-full overflow-hidden rounded-2xl border border-cyan-400/30 bg-slate-950/80 shadow-[0_0_40px_rgba(34,211,238,0.15)]">
      <Canvas camera={{ position: [0, 0, 4.2], fov: 45 }}>
        <color attach="background" args={['#020617']} />
        <ambientLight intensity={0.6} />
        <pointLight position={[4, 5, 4]} intensity={16} color="#67e8f9" />
        <pointLight position={[-4, -3, 3]} intensity={10} color="#a78bfa" />
        <NeuralGraph />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.35} />
      </Canvas>
    </div>
  )
}
