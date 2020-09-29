const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {


  calculateDepth(arr) {

    if (!Array.isArray(arr)) {
      return 1
    }

    let depth = 1
    let maxdepth = 1

    arr.forEach(element => {
      if (Array.isArray(element)) {
        depth = 1
        depth += this.calculateDepth(element)
        if (depth > maxdepth) {
          maxdepth = depth
          depth = 0
        }
        return depth
      } else {

        return depth
      }
    });

    return maxdepth
  }
}