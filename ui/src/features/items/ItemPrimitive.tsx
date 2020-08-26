import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line import/no-unresolved
import { useBox } from 'use-cannon';
import { useFrame } from 'react-three-fiber';
import { Html } from 'drei';
import { Item } from '../pool/PoolView';

interface Props {
  item: Item;
  posmodifier: number;
  isSortingActive: boolean;
}

function ItemPrimitive({
  item,
  posmodifier,
  isSortingActive,
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
    let isMounted = true;

    if (isMounted) {
      api.velocity.subscribe((v) => {
        velocityRef.current = v;
      });
    }

    return () => {
      isMounted = false;
    };
  }, []);

  useFrame(() => {
    if (isSortingActive && velocityRef.current) {
      api.velocity.set(
        item.sortingVelocity[0],
        velocityRef.current[1],
        item.sortingVelocity[2]
      );
    }
  });

  return (
    <mesh
      ref={ref}
      castShadow
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      dispose={null}
    >
      <boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? '#b252a1' : item.customColor}
      />
      {hovered ? (
        <Html scaleFactor={35}>
          <div className="item__content">
            <p>{item.title}</p>
          </div>
        </Html>
      ) : null}
    </mesh>
  );
}

export default ItemPrimitive;
