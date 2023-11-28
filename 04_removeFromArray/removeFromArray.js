const removeFromArray = function (array, ...targets) {
	let answer = [];
	targets = Array.isArray(targets) ? [...targets] : [...targets];

	for (let i = 0; i < array.length; i++) {
		if (!targets.includes(array[i])) {
			answer.push(array[i]);
		}
	}
	return answer;
};

// Do not edit below this line
module.exports = removeFromArray;
