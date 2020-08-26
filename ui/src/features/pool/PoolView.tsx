import React, { useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from 'drei';
// eslint-disable-next-line import/no-unresolved
import { Physics } from 'use-cannon';
import Lights from '../scene/Lights';
import Camera from '../scene/Camera';
import UserInterface from '../ui/UserInterface';
import Enviroment from './Enviroment';
import FallingItems from '../items/FallingItems';

const items = [
  {
    id: 1,
    title: '1',
    sortingVelocity: [4, 0, 0],
    customColor: '#87bdcf',
  },
  {
    id: 2,
    title: '2',
    sortingVelocity: [-4, 0, 0],
    customColor: '#17829b',
  },
];

export interface Item {
  id: number;
  title: string;
  sortingVelocity: number[];
  customColor: string;
}

export function PoolView(): JSX.Element {
  const [isSortingActive, setIsSortingActive] = useState(false);

  function toggleIsSortingActive(): void {
    setIsSortingActive(!isSortingActive);
  }

  // React.useEffect(() => {
  //   if (isInitialTweetsLoaded === false) {
  //     getBatchTweetsAsync([
  //       { id_str: '935242771765526528' },
  //       { id_str: '4673193433' },
  //     ]);
  //     setInitialTweetsLoaded();
  //   }
  // }, []);

  return (
    <>
      <UserInterface
        isSortingActive={isSortingActive}
        toggleIsSortingActive={toggleIsSortingActive}
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
        <React.Suspense fallback={null}>
          <Physics>
            <Enviroment />
            <FallingItems items={items} isSortingActive={isSortingActive} />
          </Physics>
        </React.Suspense>
      </Canvas>
    </>
  );
}

export default PoolView;
