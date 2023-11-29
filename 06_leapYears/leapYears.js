// > Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)
const leapYears = function (year) {
	let check1 = false;
	let check2 = false;
	let check3 = false;

	//divisible by 4
	if (year % 4 === 0) {
		check1 = true;
	}
	//not divisible by 100
	if (year % 100 !== 0) {
		check2 = true;
	}

	//unless divisible by 400
	if (year % 400 === 0) {
		check3 = true;
	}

	if (check1 === true && check2 === true) {
		return true;
	} else if (check1 === true && check2 === false && check3 === true) {
		return true;
	} else {
		return false;
	}
};

// Do not edit below this line
module.exports = leapYears;
