import { NotImplementedError } from '../extensions/index.js';

export default function countCats(backyard) {
  let count = 0;

  for (let i = 0; i <= backyard.length - 1; i++) {
    backyard[i].forEach(elem => (elem == '^^') ? count++ : count);
  }

  return count;
}