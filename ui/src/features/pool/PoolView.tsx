import React, { Suspense, useState, useCallback } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from 'drei';
// eslint-disable-next-line import/no-unresolved
import { Physics } from 'use-cannon';
import Lights from '../scene/Lights';
import Camera from '../scene/Camera';
import UserInterface from '../ui/UserInterface';
import Enviroment from './Enviroment';
import FallingItems from '../items/FallingItems';
import { Item3d } from '../../types';
import { useStore } from '../../store/store';

export function PoolView(): JSX.Element {
  const content: Item3d | null = useStore((state) => state.content);
  const isContentActive = content !== null;
  const [isSortingActive, setIsSortingActive] = useState(false);

  const toggleIsSortingActive = useCallback(() => {
    setIsSortingActive(!isSortingActive);
  }, [isSortingActive]);

  return (
    <>
      <UserInterface {...{ isSortingActive, toggleIsSortingActive }} />
      <Canvas
        sRGB
        concurrent
        shadowMap
        style={{ width: '100vw', height: '100vh' }}
      >
        <Camera />
        <OrbitControls
          autoRotate={!isContentActive}
          autoRotateSpeed={isContentActive ? 0 : 0.5}
          enablePan={isContentActive}
          enableZoom={false}
          enableRotate={false}
          maxPolarAngle={Math.PI / 3}
          minPolarAngle={Math.PI / 3}
        />
        <Lights />
        <Suspense fallback={null}>
          <Physics>
            <Enviroment />
            <FallingItems {...{ isSortingActive }} />
          </Physics>
        </Suspense>
      </Canvas>
    </>
  );
}

export default PoolView;
