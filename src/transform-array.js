const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw Error;
  if (arr == []) return [];

  let output = [];
  for (let i = 0; i < arr.length; i++) {
    //     --discard-next excludes the next element of the array from the transformed array.
    // --discard-prev excludes the previous element of the array from the transformed array.
    // --double-next doubles the next element of the array in the transformed array.
    // --double-prev doubles the previous element of the array in the transformed array.
    // if ((typeof parseFloat(arr[i]) !== 'number') && (arr[i] == NaN)) {
    //   continue
    // }


    if ((arr[i] == '--discard-next' && arr[i + 2] == '--discard-prev')) {
      i += 2
      continue
    }
    if ((arr[i] == '--discard-next' && arr[i + 2] == '--double-prev')) {
      i += 2
      continue
    }
    if (arr[i] == '--discard-next') {
      i++
      continue
    }
    if (arr[i] == '--discard-prev') {
      if (arr[i - 1] !== undefined) output.pop()

      continue
    }
    if (arr[i] == '--double-next') {
      if (arr[i + 1] !== undefined) output.push(arr[i + 1])
      continue
    }
    if (arr[i] == '--double-prev') {
      if (arr[i - 1] !== undefined) output.push(output[output.length - 1])
      continue
    }
    output.push(arr[i])
  }
  return output
};
