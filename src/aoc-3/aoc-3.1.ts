import { createStringFromFile } from "../utils";

export const AdventOfCode3Part1 = () => {
  const corruptedMemory = createStringFromFile("/aoc-3/input.txt");

  // const corruptedMemory =
  //   "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";

  const validMulRegex = /mul\(\d{1,3},\d{1,3}\)/g;
  const validMulMatches = corruptedMemory.match(validMulRegex);

  let sum = 0;

  if (validMulMatches) {
    validMulMatches.forEach((match) => {
      const numbers = match.match(/\d{1,3}/g);
      if (numbers) {
        sum += parseInt(numbers[0]) * parseInt(numbers[1]);
      }
    });
  }

  console.log(sum);
};
