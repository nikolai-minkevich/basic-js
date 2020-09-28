const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  //2^n-1
  return {turns: Math.pow(2,disksNumber)-1, seconds: Math.floor((Math.pow(2,disksNumber)-1)*3600/turnsSpeed)}
};
