import React from 'react';

function Lights(): JSX.Element {
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight
        position={[20, 20, 0]}
        castShadow
        intensity={1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
    </>
  );
}

export default Lights;
