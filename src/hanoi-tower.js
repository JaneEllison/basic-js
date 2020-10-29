const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // 2n − 1
  //disksNumber = n

  let turns = 2 ** disksNumber - 1;
  let hours = turns / turnsSpeed;
  let seconds = Math.floor(hours * 60 * 60);
 
  return {turns, seconds}
};
