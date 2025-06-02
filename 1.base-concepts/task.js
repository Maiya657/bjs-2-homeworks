"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	const discr = b ** 2 - 4 * a * c;
	if (discr === 0) {
		arr.push(-b / (2 * a));
	} else if (discr > 0) {
		arr.push((-b + Math.sqrt(discr)) / (2 * a));
		arr.push((-b - Math.sqrt(discr)) / (2 * a));
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthPercentCoefficient = percent / 100 / 12;
  const creditBody = amount - contribution;
  const payment = creditBody * (monthPercentCoefficient + (monthPercentCoefficient / (((1 + monthPercentCoefficient)**countMonths) - 1)));
  return parseFloat((payment * countMonths).toFixed(2));
}
