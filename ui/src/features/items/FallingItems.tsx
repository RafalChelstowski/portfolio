import React from 'react';
import ItemPrimitive from './ItemPrimitive';
import { Item } from '../pool/PoolView';
// import { blueColorArr, sortingVelocityArr } from '../helpers';

// interface TweetToRender extends Tweet {
//   customColor: string;
//   sortingVelocity: number[];
// }

interface Props {
  items: Item[];
  isSortingActive: boolean;
}

function FallingItems({ items, isSortingActive }: Props): JSX.Element {
  // const [flattenedTweets, setFlattenedTweets] = React.useState<TweetToRender[]>(
  //   []
  // );

  // React.useEffect(() => {
  //   if (tweets.length > 0) {
  //     setFlattenedTweets(
  //       tweets
  //         .map((el: Item, index: number) => {
  //           const tweetsSets: Item[] = Object.values(el)[0];
  //           return tweetsSets.map((tweetSet) => {
  //             return {
  //               ...tweetSet,
  //               customColor: blueColorArr[index],
  //               sortingVelocity: sortingVelocityArr[index],
  //             };
  //           });
  //         })
  //         .flat(2)
  //     );
  //   }
  // }, [tweets]);

  return (
    <>
      {items.map((item, idx) => (
        <ItemPrimitive
          isSortingActive={isSortingActive}
          key={item.id}
          item={item}
          posmodifier={idx}
        />
      ))}
    </>
  );
}

export default FallingItems;
