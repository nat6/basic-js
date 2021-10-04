import { NotImplementedError } from '../extensions/index.js';

export default function getSumOfDigits(n) {
  const res = n.toString().split('').reduce((sum, current) => sum + (+current), 0);
  return (res > 9 || res < -9) ? res.toString().split('').reduce((sum, current) => sum + (+current), 0) : res;
}
