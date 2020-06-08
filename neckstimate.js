const withBreasts = require('./with-breasts');
const withoutBreasts = require('./without-breasts')
const ratio = require('./ratio');

// This estimates a measurement based on the neck circumference
const neckstimate = (neckCircumference = false, measurement = false, breasts = false) => {
  let data = breasts ? withBreasts : withoutBreasts

  if (!neckCircumference)
    throw new Error('neckstimate() requires a neck circumference in mm as first parameter')
  if (!measurement) {
    // No measurement passed
    throw new Error(
      'new neckstimate() requires a valid measurement name as second parameter. (received ' +
        JSON.stringify(measurement) +
        ')'
    )
  }
  if (typeof data[measurement] === 'undefined') {
    if (typeof withBreasts[measurement] === 'undefined') {
      throw new Error(`neckstimate() called with an invalid measurement name (${measurement})`)
    } else {
      console.log(
        `WARNING: neckstimate() called for a breasts-only measurement (${measurement}) on a no-breasts person`
      )
      // Return something anyway, rather than fall over
      data = withBreasts
    }
  }

  // This is what should happen
  let delta = (neckCircumference / data.neckCircumference) * data[measurement] - data[measurement]

  return Math.round(data[measurement] + delta * ratio[measurement])
}

module.exports = neckstimate;