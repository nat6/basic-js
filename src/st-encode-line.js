import { NotImplementedError } from '../extensions/index.js';

export default function encodeLine(str) {
  const letters = str.split('');
  const res = [];
  let i = 1;

  letters.forEach((item, index) => {
    if (item === letters[index + 1]) i++;
    else {
      if (i === 1) {
        res.push(item);
      } else {
        res.push(i + item);
      }
      i = 1;
    }
  });

  return res.join('');
}
