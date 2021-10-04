import { NotImplementedError } from '../extensions/index.js';

export default function deleteDigit(n) {
  let arr = n.toString().split('');
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    arr.splice(i, 1);
    if (+arr.join('') > result) {
      result = +arr.join('');
    }
    arr = n.toString().split('');
  }

  return result;
}
