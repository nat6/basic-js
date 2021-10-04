import { NotImplementedError } from '../extensions/index.js';

export default function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';

  if (date instanceof Date == false || isNaN(Date.parse(date)) || Object.getOwnPropertyNames(date).length > 0) {
    throw new Error('Invalid date!');
  }

  let month = date.getMonth();

  if (month >= 2 && month <= 4) return 'spring';
  else if (month >= 5 && month <= 7) return 'summer';
  else if (month >= 8 && month <= 10) return 'autumn';
  else return 'winter';
}
