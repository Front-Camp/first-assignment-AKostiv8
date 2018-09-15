/**
* This function should return sum of two numbers
*
* @param {number} a - this is a number value
* @param {number} b - this is a number value
* @return {number} result of the sum values
* @example
* sum(1, 2);   // 3
* sum(0, 5);   // 5
* sum(-1, 13); // 12
*/
const sum = (a, b) => {
	
	if(a == Infinity || a == -Infinity || isNaN(a) || b == Infinity || b == -Infinity || isNaN(b)){
		throw new Error;
	}else{
	 if(typeof a == 'number' && typeof b == 'number'){
		 var number = a+b;
		return number;
	}else{
		throw new Error;
	}
	}
	
};

export default sum;
