import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

export default function dateSample(sampleActivity) {

  if (typeof sampleActivity !== 'string' || Number.isNaN(+sampleActivity) || +sampleActivity < 0) {
    return false;
  }

  let t = (((Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity))) / (0.693 / HALF_LIFE_PERIOD)));
  return (Number.isNaN(t) || t < 0 || !isFinite(t)) ? false : Math.ceil(t);
}
