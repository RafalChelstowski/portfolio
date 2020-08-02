import React, { useEffect, useRef } from 'react';
import { useThree } from 'react-three-fiber';

function Camera(): JSX.Element {
  const ref = useRef();
  const { setDefaultCamera } = useThree();

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  useEffect(() => setDefaultCamera(ref.current!), [setDefaultCamera]);

  return (
    <perspectiveCamera
      ref={ref}
      near={0.01}
      fov={65}
      far={2000}
      position={[10, 25, 10]}
    />
  );
}

export default Camera;
