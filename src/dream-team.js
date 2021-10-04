import { NotImplementedError } from '../extensions/index.js';

export default function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let resArr = []

  members.filter(elem => {
    if (typeof elem === 'string') {
      resArr.push(elem.toUpperCase().trim());
    }
  });

  return resArr.map((elem, index) => members[index] = elem.charAt(0)).sort().join('');
}
