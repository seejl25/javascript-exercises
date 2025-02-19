const convertToCelsius = function(tempInF) {
  let newTempInC = (tempInF-32) * (5/9);
  newTempInC = Math.round(newTempInC*10)/10;
  return newTempInC;
};

const convertToFahrenheit = function(tempInC) {
  let newTempInF = tempInC*(9/5)+32;
  newTempInF = Math.round(newTempInF*10)/10;
  return newTempInF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
