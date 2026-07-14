import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import './pointCloudMaterial'; // Imports and extends the material

interface PointCloudProps {
  reducedMotion: boolean;
  isDark: boolean;
}

// Allow typescript to recognize the custom material
declare module '@react-three/fiber' {
  interface ThreeElements {
    pointCloudMaterial: any;
  }
}

const PointCloud: React.FC<PointCloudProps> = ({ reducedMotion, isDark }) => {
  const materialRef = useRef<any>(null);
  
  const scrollHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  
  // 1. Generate Fibonacci Sphere Points
  const { positions, numPoints } = useMemo(() => {
    const numPoints = 4096; // Exactly 4096 as requested in the labels
    const radius = 2.2;
    const positions = new Float32Array(numPoints * 3);
    
    const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle
    
    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y); // radius at y
      
      const theta = phi * i;
      
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;
      
      positions[i * 3] = x * radius;
      positions[i * 3 + 1] = y * radius;
      positions[i * 3 + 2] = z * radius;
    }
    
    return { positions, numPoints };
  }, []);

  // Set colors based on theme. 
  // Light theme needs dark points for visibility. Dark theme needs light points.
  const colorWarm = useMemo(() => isDark ? new THREE.Color('#D1D5DB') : new THREE.Color('#3c547aff'), [isDark]);
  const colorCool = useMemo(() => isDark ? new THREE.Color('#F3F4F6') : new THREE.Color('#111827'), [isDark]);

  // 2. Update Uniforms per frame
  useFrame((state, delta) => {
    if (materialRef.current) {
      // If reduced motion is active, freeze time
      if (!reducedMotion) {
        materialRef.current.uTime += delta;
      }
      
      // Update mouse (normalized coordinates, smoothed for elegance)
      // state.pointer is [-1, 1]
      // We want the interaction to be gentle, so we ease towards the pointer
      const targetMouse = reducedMotion ? new THREE.Vector2(0, 0) : state.pointer;
      materialRef.current.uMouse.lerp(targetMouse, 0.05);
      
      // Calculate scroll directly from window to avoid React re-renders
      const currentScrollY = typeof window !== 'undefined' ? window.scrollY : 0;
      const scrollNorm = Math.min(currentScrollY / scrollHeight, 1.0);
      materialRef.current.uScrollNorm = scrollNorm;

      // Update colors
      materialRef.current.uColorWarm = colorWarm;
      materialRef.current.uColorCool = colorCool;
    }
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={numPoints}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointCloudMaterial 
        ref={materialRef} 
        transparent 
        depthWrite={false}
      />
    </points>
  );
};

export default PointCloud;
