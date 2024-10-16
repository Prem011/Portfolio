import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  // Use the useProgress hook to track the loading progress
  const { progress } = useProgress();

  return (
    <Html center>
      <span className='canvas-load' />
      <p
        style={{
          fontSize: 14,
          color: '#f1f1f1',
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
