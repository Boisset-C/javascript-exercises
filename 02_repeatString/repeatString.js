const repeatString = function (string, times) {
	let repeatString = "";
	let howManyTimes = times;

	if (times < 0) return "ERROR";

	for (let i = 0; i < howManyTimes; i++) {
		repeatString += string;
	}

	return repeatString;
};

// Do not edit below this line
module.exports = repeatString;
