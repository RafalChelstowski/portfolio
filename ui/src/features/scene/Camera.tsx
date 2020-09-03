import React, { useEffect, useRef } from 'react';
import { useThree } from 'react-three-fiber';
import { useStore } from '../../store/store';

function Camera(): JSX.Element {
  const content = useStore((state) => state.content);
  const ref = useRef<null | THREE.PerspectiveCamera>(null);
  const { setDefaultCamera } = useThree();

  useEffect(() => {
    if (ref.current) {
      setDefaultCamera(ref.current);
    }
  }, [setDefaultCamera]);

  useEffect(() => {
    if (ref.current && content !== null) {
      ref.current.position.x = 5.7;
      ref.current.position.y = 10;
      ref.current.position.z = -7;
    } else if (ref.current && content === null) {
      ref.current.position.y = 25;
    }
  }, [content]);

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
