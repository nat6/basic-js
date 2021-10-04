import { NotImplementedError } from '../extensions/index.js';

export default function sortByHeight(arr) {
  const result = arr;
  const numbers = arr.filter(item => (item !== -1)).sort((a, b) => a - b);
  let i = 0;

  result.forEach((item, index) => {
    if (item !== -1) {
      result[index] = numbers[i];
      i++;
    }
  });

  return result;
}
