import { NotImplementedError } from '../extensions/index.js';

export default class VigenereCipheringMachine {
  constructor(type) {
    this.type = (type === true || type === undefined) ? 'direct' : 'reverse';
  }

  encrypt(message, key) {
    // checking all arguments
    if (!message || !key) throw new Error('Incorrect arguments!');

    // create alphabet array
    let alphabet = [];
    for (let i = 65; i < 91; i++) {
      alphabet.push(String.fromCharCode(i));
    }

    // create arguments arrays
    let messageArr = message.toUpperCase().split('');
    let keyArr = key.toUpperCase().split('');
    let result = '';
    let k = 0;
    // find cipher letters
    for (let i = 0; i < messageArr.length; i++) {
      // if it's latin letter
      if (alphabet.indexOf(messageArr[i]) !== -1) {
        let sumIndex = alphabet.indexOf(messageArr[i]) + alphabet.indexOf(keyArr[k]);
        let cipherIndex = ((alphabet.length - 1 - sumIndex) < 0) ? (Math.abs(alphabet.length - 1 - sumIndex) - 1) : sumIndex;
        result += alphabet[cipherIndex];
      }
      else {
        result += messageArr[i];
        continue;
      }
      // next key symbol
      k++;
      if (k === key.length) k = 0;
    }
    return (this.type === 'direct') ? result : result.split('').reverse().join('')
  }

  decrypt(message, key) {
    // checking all arguments
    if (!message || !key) throw new Error('Incorrect arguments!');

    // create alphabet array
    let alphabet = [];
    for (let i = 65; i < 91; i++) {
      alphabet.push(String.fromCharCode(i));
    }

    // create arguments arrays
    let messageArr = message.toUpperCase().split('');
    let keyArr = key.toUpperCase().split('');
    let result = '';
    let k = 0;
    // find original letters
    for (let i = 0; i < messageArr.length; i++) {

      // if it's latin letter
      if (alphabet.indexOf(messageArr[i]) !== -1) {
        let sumIndex = 1 + (alphabet.indexOf(messageArr[i]) > alphabet.indexOf(keyArr[k])) ? (alphabet.indexOf(messageArr[i]) - alphabet.indexOf(keyArr[k])) : (alphabet.indexOf(keyArr[k]) - alphabet.indexOf(messageArr[i]));
        let cipherIndex = (sumIndex < 0) ? alphabet.length + sumIndex : sumIndex;

        result += alphabet[cipherIndex];
      }
      else {
        result += messageArr[i];
        continue;
      }
      // next key symbol
      k++;
      if (k === key.length) k = 0;
    }
    return (this.type === 'direct') ? result : result.split('').reverse().join('')
  }
}
