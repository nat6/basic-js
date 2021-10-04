import { NotImplementedError } from '../extensions/index.js';

export default function repeater(str, options) {
  if (!options.hasOwnProperty('separator')) {
    options.separator = '+';
  }
  if (!options.hasOwnProperty('additionSeparator') && options.hasOwnProperty('additionRepeatTimes')) {
    options.additionSeparator = '|';
  }
  if (options.hasOwnProperty('addition') && options.addition === null) {
    options.addition = 'null';
  }

  let partOfString = str + new Array(options.additionRepeatTimes).fill(options.addition).join(options.additionSeparator);

  return new Array(options.repeatTimes).fill(partOfString).join(options.separator);
}
