import { NotImplementedError } from '../extensions/index.js';

export default function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("\'arr\' parameter must be an instance of the Array!");
  let resultArr = arr.slice(0);

  // iterate over elements and handle control sequences
  function iterateAndTransform(num) {

    for (let i = 0; i < resultArr.length; i++) {
      // skip numbers
      if (typeof resultArr[i] === 'number') continue;

      // control sequences cases
      switch (resultArr[i]) {

        case '--discard-prev':
          (resultArr[i - 1] === undefined) ? resultArr.splice([i], 1) : resultArr.splice([i - 1], 2);
          iterateAndTransform(i);
          break;

        case '--double-prev':
          (resultArr[i - 1] === undefined) ? resultArr.splice([i], 1) : resultArr[i] = resultArr[i - 1];
          break;

        case '--discard-next':
          if (resultArr[i + 1] === undefined) resultArr.splice([i], 1)
          else {
            resultArr.splice([i + 1], 1);
            resultArr[i] = undefined;
          }

          iterateAndTransform(i);
          break;

        case '--double-next':
          (resultArr[i + 1] === undefined) ? resultArr.splice([i], 1) : resultArr[i] = resultArr[i + 1];
          break;
      }
    }

    // delete undefined elements
    resultArr.forEach((elem, index) => {
      if (elem === undefined) resultArr.splice(index, 1);
    })
  }

  iterateAndTransform(0);
  return resultArr;
}
