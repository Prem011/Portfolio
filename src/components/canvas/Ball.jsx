import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';

// The Ball component with decal applied
const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]); // Load the texture

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronBufferGeometry args={[1, 1]} /> {/* Sphere shape */}
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* Decal for the texture */}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]} // Adjust rotation if needed
          flatShading
          map={decal} // Use loaded icon texture
        />
      </mesh>
    </Float>
  );
};

// The Canvas component that renders the Ball
const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      {/* Render a loader while the 3D element is being loaded */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} /> {/* Render the 3D ball with the icon */}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
