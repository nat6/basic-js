import { NotImplementedError } from '../extensions/index.js';

export default function getEmailDomain(email) {
  const domainExp = /@[A-Za-z\d-]+\.[A-Za-z]+$/g;
  const result = email.match(domainExp).join('').split('');
  result.splice(0, 1);
  return result.join('');
}
