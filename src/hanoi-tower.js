import { NotImplementedError } from '../extensions/index.js';

export default function calculateHanoi(disksNumber, turnsSpeed) {
  let result = new Object();

  result.turns = Math.pow(2, disksNumber) - 1;
  result.seconds = Math.trunc(result.turns / turnsSpeed * 3600);

  return result;
}
