const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let count = 0;
  for (i = 0; i <= backyard.length - 1; i++) {
    backyard[i].forEach(elem => (elem == '^^') ? (count += 1) : count);
    } 
  return count;
};
