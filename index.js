const neckstimate = require('./neckstimate');
const measurements = require('./measurements');
const sizes = require('./sizes');

const withBreasts = {}
const withoutBreasts = {}

for (let s of sizes.womenswear) {
  withBreasts['size' + s] = {}
  for (let m of measurements.womenswear) {
    withBreasts['size' + s][m] = neckstimate(s * 10, m, true)
  }
}

for (let s of sizes.menswear) {
  withoutBreasts['size' + s] = {}
  for (let m of measurements.menswear) {
    withoutBreasts['size' + s][m] = neckstimate(s * 10, m, false)
  }
}

// Just for testing purpose
withoutBreasts.size34 = {
  ankleCircumference: 199,
  bicepsCircumference: 299,
  chestCircumference: 899,
  headCircumference: 499,
  hipsCircumference: 799,
  hipsToUpperLeg: 199,
  hpsToBust: 299,
  hpsToHipsBack: 599,
  inseam: 699,
  kneeCircumference: 399,
  naturalWaist: 699,
  naturalWaistToFloor: 1099,
  naturalWaistToHip: 99,
  naturalWaistToKnee: 599,
  naturalWaistToSeat: 299,
  neckCircumference: 299,
  seatCircumference: 899,
  seatDepth: 199,
  shoulderSlope: 599,
  shoulderToElbow: 399,
  shoulderToShoulder: 399,
  shoulderToWrist: 599,
  upperLegCircumference: 599,
  wristCircumference: 199
}

module.exports = {
  measurements,
  sizes,
  withoutBreasts,
  withBreasts
}
