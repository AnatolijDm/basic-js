const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(str) {
  if (typeof str === 'string') {
    if (+str > 0 && +str < 15) {
      return Math.round((((MODERN_ACTIVITY / (0.7405*Number(str))) - 1.358) ** 0.5) * HALF_LIFE_PERIOD);
    } else return false;
  } else return false;
};
