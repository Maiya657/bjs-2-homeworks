function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		let element = arr[i];
		if (element > max) {
			max = element;
		}
		if (element < min) {
			min = element;
		}
		sum += element;
	}
	return {
		min: min,
		max: max,
		avg: parseFloat((sum / arr.length).toFixed(2))
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const funcResult = func(...arrOfArr[i]);
		if (funcResult > maxWorkerResult) {
			maxWorkerResult = funcResult;
		}
	}
	return maxWorkerResult;
}
