import { NotImplementedError } from '../extensions/index.js';

export default function getDNSStats(domains) {
  let res = {};
  if (domains.length === 0) return res;

  let tempArr = [];

  domains.forEach(elem => {
    if (elem.match(/\.\w+$/)) tempArr.push(elem.match(/\.\w+$/)[0]);
  });

  res[tempArr[0]] = tempArr.length;
  tempArr = [];

  domains.forEach(elem => {
    if (elem.match(/\.\w+\.\w+$/)) tempArr.push(elem.match(/\.\w+\.\w+$/)[0]);
    else if (elem.match(/^\w+\.\w+$/)) tempArr.push(elem.match(/^\w+\.\w+$/)[0]);
  });

  res['.' + tempArr[0].split(".").reverse().join(".")] = tempArr.length;
  tempArr = [];


  domains.forEach(elem => {
    if (elem.match(/\w+\.\w+\.\w+$/)) tempArr.push(elem.match(/\w+\.\w+\.\w+$/)[0]);
  });

  if (tempArr.length > 0) res['.' + tempArr[0].split(".").reverse().join(".")] = 1;
  tempArr = [];

  return res;
}