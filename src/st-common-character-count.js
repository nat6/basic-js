import { NotImplementedError } from '../extensions/index.js';

export default function getCommonCharacterCount(s1, s2) {
  const s1Arr = s1.split('');
  const s2Arr = s2.split('');
  let result = 0;

  s1Arr.forEach((symbol) => {
    for (let i = 0; i < s2Arr.length; i++) {
      if (symbol === s2Arr[i]) {
        result++;
        s2Arr.splice(i, 1);
        break;
      }
    }
  });

  return result;
}
