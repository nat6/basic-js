import { NotImplementedError } from '../extensions/index.js';

export default {
  chainLinks: [],
  result: '',

  // returns the current chain length as a number;
  getLength() {
    return this.chainLinks.length;
  },

  // adds a link containing a string representation of the value to the chain;
  addLink(value) {
    if (value === undefined) {
      value = '';
    }
    else if (!value) {
      value = String(value);
    }
    this.chainLinks.push('( ' + value + ' )');
    return this;
  },

  //removes a chain link in the specified position;
  removeLink(position) {
    if (typeof position !== 'number' || position <= 0 || position >= this.chainLinks.length) {
      this.chainLinks = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chainLinks.splice(position - 1, 1);
    return this;
  },

  //  reverses the chain;
  reverseChain() {
    this.chainLinks.reverse();
    return this;
  },

  // ends the chain and returns it
  finishChain() {
    this.result = this.chainLinks.join('~~');
    this.chainLinks = [];
    return this.result;
  }
};
