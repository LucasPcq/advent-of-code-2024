import * as fs from "fs";

export const createMatrixNumberFromFile = (
  path: string
): Array<Array<number>> => {
  const data = fs.readFileSync(__dirname + path, "utf-8");
  const rows = data.split("\n");
  const matrix: number[][] = [];

  rows.forEach((row) => {
    const valeurs = row.split(/\s+/).map(Number);
    matrix.push(valeurs);
  });

  return matrix;
};
