import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, OrbitControls, RoundedBox } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function CoreShape() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, state.pointer.y * 0.18, 0.04);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.pointer.x * 0.28 + state.clock.elapsedTime * 0.08, 0.04);
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.18} floatIntensity={0.45}>
        <RoundedBox args={[2.6, 2.6, 2.6]} radius={0.28} smoothness={5}>
          <MeshTransmissionMaterial
            backside
            thickness={0.7}
            roughness={0.18}
            transmission={0.92}
            ior={1.35}
            chromaticAberration={0.04}
            anisotropy={0.12}
            color="#2fbf71"
            attenuationColor="#0d4228"
            attenuationDistance={2.4}
          />
        </RoundedBox>
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -0.18]}>
          <torusGeometry args={[1.75, 0.015, 16, 96]} />
          <meshBasicMaterial color="#8be7ad" transparent opacity={0.48} />
        </mesh>
        <mesh rotation={[0, Math.PI / 2, 0]} position={[0.18, 0, 0]}>
          <torusGeometry args={[1.55, 0.012, 16, 96]} />
          <meshBasicMaterial color="#65d995" transparent opacity={0.38} />
        </mesh>
      </Float>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[4, 5, 5]} intensity={18} color="#8be7ad" distance={12} />
      <pointLight position={[-4, -2, 3]} intensity={12} color="#167342" distance={10} />
      <CoreShape />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6.8], fov: 34 }}>
        <Scene />
      </Canvas>
      <div className="hero-scene-label">
        <span className="hero-scene-dot" />
        Systems in motion
      </div>
    </div>
  );
}
