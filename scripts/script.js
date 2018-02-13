"use strict";

//Task 1
function factorial(n) {
	if (n == 0 || n == 1) {
		return 1;
	} else if (n > 1) {
		var fact = 1;
		while (n != 0) {
			fact *= n;
			n--;
		}
		return fact;
	} else {
		throw "No negative numbers!";
	}
}

console.log(factorial(-6));


//Task 2
var numbers = [-1, -2, -3, -9, -2, -1, -3];

function getMinSub(arr) {
	var isPositive = arr.every(number => number >= 0);
	if (isPositive) return [];

	var minSum = arr[0];
	var leftBound = 0;
	var rightBound = 0;
	var sum = 0;
	var minusPosition = -1;

	for(var i = 0; i < arr.length; i++) {
		sum += arr[i];

		if (sum <= minSum) {
			minSum = sum;
			leftBound = minusPosition + 1;
			rightBound = i;
		}

		if (sum > 0) {
			sum = 0;
			minusPosition = i;
		}
	}
	var minSub = arr.slice(leftBound, ++rightBound);
	return minSub;
}

console.log(getMinSub(numbers));

