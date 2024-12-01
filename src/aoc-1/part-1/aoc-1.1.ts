import { getLists } from "../aoc-1-utils";

export const adventOfCodePart1 = () => {
  const { firstList, secondList } = getLists();

  const reorganizeList = (list: number[]): number[] => {
    return list.sort((a, b) => a - b);
  };

  const findTotalDistanceBetweenTwoLists = (
    firstList: number[],
    secondList: number[]
  ): number => {
    const firstListSorted = reorganizeList(firstList);
    const secondListSorted = reorganizeList(secondList);

    let sum = 0;

    for (let i = 0; i < firstListSorted.length; i++) {
      sum += Math.abs(firstListSorted[i] - secondListSorted[i]);
    }

    return sum;
  };

  console.log(findTotalDistanceBetweenTwoLists(firstList, secondList));
};
