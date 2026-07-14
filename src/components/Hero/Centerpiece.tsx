import React from 'react';
import { Canvas } from '@react-three/fiber';
import PointCloud from './PointCloud';

interface CenterpieceProps {
  reducedMotion: boolean;
  isDark: boolean;
}

const Centerpiece: React.FC<CenterpieceProps> = ({ reducedMotion, isDark }) => {
  return (
    <div className="w-full h-full cursor-default">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={Math.min(window.devicePixelRatio, 2)}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#f0f0f0" />

        <PointCloud reducedMotion={reducedMotion} isDark={isDark} />
      </Canvas>
    </div>
  );
};

export default Centerpiece;
