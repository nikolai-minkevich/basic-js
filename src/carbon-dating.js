const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  
  if (typeof sampleActivity !== 'string') return false
  if (!(/^[.0-9]$/.test(sampleActivity))) return false
  if (typeof parseFloat(sampleActivity) !== 'number') return false
  if (isNaN(sampleActivity)) return false
  if (parseFloat(sampleActivity) <= 0) return false
  if (parseFloat(sampleActivity) > 15) return false

  const t = (Math.log(MODERN_ACTIVITY / sampleActivity)) / (0.693 / HALF_LIFE_PERIOD)
  return Math.ceil(t)
};
