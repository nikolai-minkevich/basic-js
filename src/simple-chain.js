const CustomError = require("../extensions/custom-error");

let chain = []

function formatChain(chain) {
  let s = ''
  for (let i = 0; i < chain.length; i++) {
    if (chain[i] !== ' ') chain[i] += ' '
    s += '( ' + chain[i] + ')'
    if (chain[i + 1] !== undefined)
      s += '~~'
  }
  return s
}

const chainMaker = {
  getLength() {
    return chain.length
  },
  addLink(value) {
    if (value==null) value='null'
      if (value==0) value=='0'
    chain.push(value.toString())

    return this
  },
  removeLink(position) {
    if (chain[position - 1] == undefined) {
      chain = []
      throw Error
    }
    if (typeof parseFloat(position) !== 'number') {
      chain = []
      throw Error
    }
    chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    chain.reverse()
    return this
  },
  finishChain() {
    output=formatChain(chain) 
    chain=[]

    return output
  }
};

module.exports = chainMaker;
