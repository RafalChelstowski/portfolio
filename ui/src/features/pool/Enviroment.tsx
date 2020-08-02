import React, { useRef } from 'react';
import { Color } from 'three';
import { useLoader } from 'react-three-fiber';
// eslint-disable-next-line import/no-unresolved
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
// eslint-disable-next-line import/no-unresolved
import { usePlane, useBox } from 'use-cannon';

interface GltfImport extends GLTF {
  nodes: any;
  materials: any;
}

function Enviroment(): JSX.Element {
  const { nodes, materials } = useLoader<GltfImport>(GLTFLoader, '/pool.gltf');
  const color = new Color(0xd89ea6).toArray();
  const group = useRef();
  const [bottomref] = usePlane(() => ({
    position: [0, -2, 0],
    rotation: [-Math.PI / 2, 0, 0],
  }));

  const [leftbank] = useBox(() => ({
    position: [-15.5, -1, 0],
    args: [9, 2, 26],
    type: 'Static',
  }));

  const [rightbank] = useBox(() => ({
    position: [15.5, -1, 0],
    args: [9, 2, 26],
    type: 'Static',
  }));

  const [upbank] = useBox(() => ({
    position: [0, -1, 15.5],
    args: [26, 2, 5],
    type: 'Static',
  }));

  const [downbank] = useBox(() => ({
    position: [0, -1, -15.5],
    args: [26, 2, 5],
    type: 'Static',
  }));

  return (
    <>
      <fog attach="fog" args={['#d89ea6', 10, 100]} />
      <color attach="background" args={[color[0], color[1], color[2]]} />
      <mesh ref={bottomref} />
      <mesh ref={leftbank} />
      <mesh ref={rightbank} />
      <mesh ref={upbank} />
      <mesh ref={downbank} />

      <group ref={group} dispose={null}>
        <mesh
          material={materials['Material.002']}
          geometry={nodes.Plane001.geometry}
          position={[50, 0, 0]}
          receiveShadow
          castShadow
        />
        <mesh
          material={materials['Material.002']}
          geometry={nodes.Plane002.geometry}
          position={[-50, 0, 0]}
          receiveShadow
          castShadow
        />
        <mesh
          material={materials['Material.002']}
          geometry={nodes.Plane006.geometry}
          position={[0, 0, -100]}
          receiveShadow
          castShadow
        />
        <mesh
          material={materials['Material.001']}
          geometry={nodes.Plane_0.geometry}
          receiveShadow
          castShadow
        />
        <mesh
          material={materials['Material.002']}
          geometry={nodes.Plane_1.geometry}
          receiveShadow
          castShadow
        />
        <mesh
          material={materials['Material.003']}
          geometry={nodes.Plane_2.geometry}
          receiveShadow
          castShadow
        />
        <mesh
          material={materials['Material.004']}
          geometry={nodes.Plane003.geometry}
          position={[0, 0, 50]}
          receiveShadow
          castShadow
        />
        <mesh
          material={materials['Material.005']}
          geometry={nodes.Object_10.geometry}
          position={[-12.98, 1.23, 14.51]}
          rotation={[0, -0.91, 0]}
          scale={[1.23, 1.23, 1.23]}
          receiveShadow
          castShadow
        />
      </group>
    </>
  );
}

export default Enviroment;
