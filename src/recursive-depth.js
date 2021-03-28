const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, counter = [], depth = 1) {
    counter.push(depth);
    for (let elem of arr) {
      if (Array.isArray(elem)) {
        this.calculateDepth(elem, counter, depth + 1);
      }
    }  
    return Math.max(...counter);
   }
};