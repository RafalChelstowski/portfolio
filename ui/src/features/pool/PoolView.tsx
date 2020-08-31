import React, { Suspense, useState } from 'react';
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

export function PoolView(): JSX.Element {
  const [isSortingActive, setIsSortingActive] = useState(false);
  const [content, setContent] = useState<Item3d | null>(null);

  function toggleIsSortingActive(): void {
    setIsSortingActive(!isSortingActive);
  }

  function closeContent() {
    setContent(null);
  }

  function toggleContent(item: Item3d) {
    if (item.id === content?.id) {
      setContent(null);
    } else {
      setContent(item);
    }
  }

  return (
    <>
      <UserInterface
        isSortingActive={isSortingActive}
        toggleIsSortingActive={toggleIsSortingActive}
        closeContent={closeContent}
        content={content}
      />
      <Canvas
        sRGB
        concurrent
        shadowMap
        style={{ width: '100vw', height: '100vh' }}
      >
        <Camera />
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5}
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
          maxPolarAngle={Math.PI / 3}
          minPolarAngle={Math.PI / 3}
        />
        <Lights />
        <Suspense fallback={null}>
          <Physics>
            <Enviroment />
            <FallingItems
              isSortingActive={isSortingActive}
              toggleContent={toggleContent}
            />
          </Physics>
        </Suspense>
      </Canvas>
    </>
  );
}

export default PoolView;
