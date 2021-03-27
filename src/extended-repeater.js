const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	if (!options.hasOwnProperty('separator')) {
		options.separator = '+';
	 }
	 if (!options.hasOwnProperty('additionSeparator') && options.hasOwnProperty('additionRepeatTimes')) {
		options.additionSeparator = '|';
	 }
	 if (options.hasOwnProperty('addition') && options.addition === null) {
			options.addition = 'null';
	 }

	 // заполняем массив нужным количеством дополнительных элементов
	 let additionArray = new Array(options.additionRepeatTimes).fill(options.addition);

	 // соединяем элементы в строку с additionSeparator
	 let additionString = additionArray.join(options.additionSeparator);

	 // соединяем начало строки с готовыми доп элементами
	 let partOfString = str + additionString;

	 // дублируем строку нужное кол-во раз в массиве
	 let resultArray = new Array(options.repeatTimes).fill(partOfString);

	 // соединяем готовую строку с помощью сепараторов
	 let result = resultArray.join(options.separator);

  return result;
};