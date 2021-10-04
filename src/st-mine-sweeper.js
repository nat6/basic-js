import { NotImplementedError } from '../extensions/index.js';

export default function minesweeper(matrix) {
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    const tempRes = [];

    for (let k = 0; k < matrix[i].length; k++) {
      let count = 0;

      if (matrix[i - 1] !== undefined) {
        if (matrix[i - 1][k - 1] === true) {
          count++;
        }
        if (matrix[i - 1][k] === true) {
          count++;
        }
        if (matrix[i - 1][k + 1] === true) {
          count++;
        }
      }

      if (matrix[i][k - 1] === true) {
        count++;
      }
      if (matrix[i][k + 1] === true) {
        count++;
      }

      if (matrix[i + 1] !== undefined) {
        if (matrix[i + 1][k - 1] === true) {
          count++;
        }
        if (matrix[i + 1][k] === true) {
          count++;
        }
        if (matrix[i + 1][k + 1] === true) {
          count++;
        }
      }

      tempRes.push(count);
    }

    result.push(tempRes);
  }
  return result;
}
