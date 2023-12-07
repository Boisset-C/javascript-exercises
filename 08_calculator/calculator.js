const add = function (number1, number2) {
  return number1 + number2;
};

const subtract = function (number1, number2) {
  return number1 - number2;
};

const sum = function (numbers) {
  return numbers.reduce((acc, number) => acc + number, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((acc, number) => acc * number);
};

const power = function (base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function (n) {
  if (n === 0 || n === 1) return 1;

  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
