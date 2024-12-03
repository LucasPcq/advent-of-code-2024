import { createMatrixNumberFromFile } from "../utils";

export const AdventOfCode2Part2 = () => {
  const matrix: Array<Array<number>> =
    createMatrixNumberFromFile("/aoc-2/input.txt");

  // const matrix: Array<Array<number>> = [
  //   [7, 6, 4, 2, 1],
  //   [1, 2, 7, 8, 9],
  //   [9, 7, 6, 2, 1],
  //   [1, 3, 2, 4, 5],
  //   [8, 6, 4, 4, 1],
  //   [1, 3, 6, 7, 9],
  // ];

  /**
   * Utils Functions
   */

  const isIncreasing = (levels: Array<number>) =>
    levels.every((currentLevel, i) => {
      const lastLevel = levels[i - 1];

      return (
        i === 0 ||
        (currentLevel - lastLevel >= 1 && currentLevel - lastLevel <= 3)
      );
    });

  const isDecreasing = (levels: Array<number>) =>
    levels.every((currentLevel, i) => {
      const lastLevel = levels[i - 1];

      return (
        i === 0 ||
        (lastLevel - currentLevel >= 1 && lastLevel - currentLevel <= 3)
      );
    });

  const isSafe = (levels: Array<number>) => {
    return isIncreasing(levels) || isDecreasing(levels);
  };

  function isSafeWithOneElementRemove(levels: Array<number>) {
    for (let i = 0; i < levels.length; i++) {
      const modifiedLevels = levels.filter((_, index) => index !== i);
      if (isSafe(modifiedLevels)) {
        return true;
      }
    }
    return false;
  }

  /**
   *  Loop
   */

  let safeReports = 0;

  for (
    let reportRowIndex = 0;
    reportRowIndex < matrix.length;
    reportRowIndex++
  ) {
    const currentReportRow = matrix[reportRowIndex];

    if (
      isSafe(currentReportRow) ||
      isSafeWithOneElementRemove(currentReportRow)
    ) {
      safeReports++;
    }
  }

  console.log(safeReports);
};
