import { createMatrixNumberFromFile } from "../utils";

export const adventOfCodePart2 = () => {
  const matrix = createMatrixNumberFromFile("/aoc-1/input.txt");

  const findSimilarityScoreBetweenTwoLists = (
    firstList: number[],
    secondList: number[]
  ): number => {
    let sum = 0;

    for (let i = 0; i < firstList.length; i++) {
      const sameElementOnSecondList = secondList.filter(
        (element) => element === firstList[i]
      );

      sum += Math.abs(firstList[i] * sameElementOnSecondList.length);
    }

    return sum;
  };

  console.log(findSimilarityScoreBetweenTwoLists(matrix[0], matrix[1]));
};
