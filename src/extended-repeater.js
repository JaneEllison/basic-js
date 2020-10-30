const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const {
    repeatTimes,   // устанавливает число повторений str
    separator = '+',  //строка, разделяющая повторения str
    addition = '',  //дополнительная строка, которая будет добавлена после каждого повторения str
    additionRepeatTimes,  //число повторений addition
    additionSeparator = '|' //строка, разделяющая повторения addition
  } = options;

  let sep = addition;
  let res = '';

  for(let i=1; i<additionRepeatTimes; i++) {
    sep += `${additionSeparator}${addition}`
  }

  for(let i=1; i<repeatTimes; i++) {
    res += `${separator}${str}${sep}`
  }

  return `${str}${sep}${res}`
};
  