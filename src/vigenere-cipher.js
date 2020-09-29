const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode = true) {        
    this.mode = mode;
  }
  spreadKey(message, key) {
    let spreadedKey = ''
    if (key.length >= message.length) return key

    for (let i = 0; i < Math.ceil(message.length / key.length); i++) {
      spreadedKey += key
    }
    spreadedKey = spreadedKey.slice(0, message.length)
    return spreadedKey
  }

  getAlphabetPosition(letter) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    return alphabet.indexOf(letter)
  }

  getLetterFromPosition(pos) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    return alphabet[pos]
  }

  encrypt(message, key) {
    if (!message || !key) throw Error
    key = this.spreadKey(message, key).toUpperCase();
    message = message.toUpperCase();
    let output = ''
    let iKey = 0;
    for (let i = 0; i < message.length; i++) {

      if (!/^[A-Z]$/.test(message[i])) {
        output += message[i]
      } else {            
        let t = this.getAlphabetPosition(message[i]) + this.getAlphabetPosition(key[iKey])
        if (t >= 26) t = t % 26
        output += this.getLetterFromPosition(t)
        iKey++;
      }

    }

    if (!this.mode) output= output.split('').reverse().join('')
    return output

  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw Error
    key = this.spreadKey(encryptedMessage, key).toUpperCase();
    encryptedMessage = encryptedMessage.toUpperCase();
    let output = ''
    let iKey = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {

      if (!/^[A-Z]$/.test(encryptedMessage[i])) {
        output += encryptedMessage[i]
      } else {
        let t = this.getAlphabetPosition(encryptedMessage[i]) - this.getAlphabetPosition(key[iKey]) + 26
        if (t >= 26) t = t % 26 
      //  console.log(this.getLetterFromPosition(t));
        output += this.getLetterFromPosition(t)
        iKey++;
      }

    }

    if (!this.mode) output= output.split('').reverse().join('')
    return output
  }
}

module.exports = VigenereCipheringMachine;
