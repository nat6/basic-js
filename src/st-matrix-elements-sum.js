import { NotImplementedError } from '../extensions/index.js';

export default function getMatrixElementsSum(matrix) {
  const result = [];

  for (let k = 0; k < matrix[0].length; k++) {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][k] !== 0) {
        result.push(matrix[i][k]);
      } else break;
    }
  }

  return result.reduce((sum, current) => sum + current, 0);
}
