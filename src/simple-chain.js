const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainLinks: [],
  result: '',

  // returns the current chain length as a number;
  getLength() {
    let length = this.chainLinks.length;
    return this.length;
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
    if (typeof position !== 'number') {
      this.chainLinks = [];
      throw new Error('I can`t remove');
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

module.exports = chainMaker;
