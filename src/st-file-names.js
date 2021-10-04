import { NotImplementedError } from '../extensions/index.js';

export default function renameFiles(names) {
  const result = names;

  result.forEach((item, index) => {
    let count = 0;
    for (let i = index + 1; i < result.length; i++) {
      if (item === result[i]) {
        count++;
        result[i] = `${item}(${count})`;
      }
    }
  });

  return result;
}
