const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let resArr = []
  
  members.filter((elem, index) => {
    if (typeof elem == 'string') {
      resArr.push(elem.toUpperCase().trim());
    }
  });
  
  return resArr.map((elem, index) => members[index] = elem.charAt(0)).sort().join('');
};
