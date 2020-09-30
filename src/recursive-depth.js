const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {


  calculateDepth(arr) {
    let depth = 1
    let maxdepth = 1
    arr.forEach(element => {
      if (Array.isArray(element)) {
        depth = 1
        depth += this.calculateDepth(element)
        if (depth > maxdepth) {
          maxdepth = depth
        }
      } 
    });

    return maxdepth
  }
}