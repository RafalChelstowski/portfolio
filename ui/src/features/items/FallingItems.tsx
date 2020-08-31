import React from 'react';
import ItemPrimitive from '../item/ItemPrimitive';
import { useStore } from '../../store/store';
import { Item3d } from '../../types';

interface Props {
  isSortingActive: boolean;
  toggleContent: (item: Item3d) => void;
}

function FallingItems({ isSortingActive, toggleContent }: Props): JSX.Element {
  const experience = useStore((state) => state.experience);
  const education = useStore((state) => state.education);
  const projects = useStore((state) => state.projects);

  const items: Item3d[] = [...experience, ...education, ...projects].map(
    (el, idx) => {
      return {
        ...el,
        id: `${el.type}-${idx}`,
      };
    }
  );

  return (
    <>
      {items.map((item, idx) => {
        const { id } = item;
        return (
          <ItemPrimitive
            isSortingActive={isSortingActive}
            toggleContent={toggleContent}
            key={id}
            item={item}
            posmodifier={idx}
          />
        );
      })}
    </>
  );
}

export default FallingItems;
