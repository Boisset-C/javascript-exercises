const reverseString = function (string) {
	let stringArray = string.split("");
	let arrayLength = stringArray.length;
	let reversedArray = [];
	let answer;

	for (let i = arrayLength - 1; i >= 0; i--) {
		reversedArray.push(stringArray[i]);
		console.log(stringArray);
	}

	answer = reversedArray.join("");
	return answer;
};

// Do not edit below this line
module.exports = reverseString;
