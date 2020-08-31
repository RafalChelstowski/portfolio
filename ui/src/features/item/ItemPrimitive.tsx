import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line import/no-unresolved
import { useBox } from 'use-cannon';
import { useFrame } from 'react-three-fiber';
import { Item3d } from '../../types';

interface Props {
  item: Item3d;
  posmodifier: number;
  isSortingActive: boolean;
  toggleContent: (item: Item3d) => void;
}

function ItemPrimitive({
  item,
  posmodifier,
  isSortingActive,
  toggleContent,
}: Props): JSX.Element {
  const [hovered, setHover] = React.useState(false);
  const velocityRef = useRef<null | number[]>(null);
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [
      Math.random() * 3,
      20 + posmodifier + Math.random() * 2,
      Math.random() * 3,
    ],
    args: [0.5, 0.5, 0.5],
    rotation: [Math.random(), Math.random(), Math.random()],
    allowSleep: false,
  }));

  useEffect(() => {
    api.velocity.subscribe((v) => {
      velocityRef.current = v;
    });
  }, []);

  useFrame(() => {
    if (isSortingActive && velocityRef.current) {
      const [vx, , vz] = item.sortingVelocity;
      const [, nvy] = velocityRef.current;
      api.velocity.set(vx, nvy, vz);
    }
  });

  return (
    <mesh
      ref={ref}
      receiveShadow
      castShadow
      onPointerOver={() => {
        setHover(true);
      }}
      onPointerOut={() => {
        setHover(false);
      }}
      onClick={() => toggleContent(item)}
      dispose={null}
    >
      <boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? '#b252a1' : item.customColor}
      />
    </mesh>
  );
}

export default ItemPrimitive;
