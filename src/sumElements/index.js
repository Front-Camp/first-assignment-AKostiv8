/**
 *  This function should return sum of
 *  all numbers and strings which can be converted to numbers
 *  in passed array
 *
 * @param {Array<number|string>} arr - this is an array of numbers or strings
 * @return {number} - sum of all numbers of array
 * @example
 * sumElements([1, 2, 3]);          // 6
 * sumElements(['1', 'hi', 3]);     // 4
 * sumElements([Infinity, NaN, 1]); // 1
 */
const sumElements = arr => {
	var sum = 0;
	var parseintonum;
	for (var i = 0; i < arr.length; i++) {

	/*	if(typeof arr[i] == "string"){
				var strlgth;
				strlgth = arr[i].length;
				sum = sum + strlgth;
		}
	*/
		if(typeof arr[i] === "string"){
			parseintonum = Number(arr[i]);
			if(isNaN(parseintonum)){
				sum = sum + 0;
			} else {
				sum = parseintonum + sum;
			}
		}


		if(arr[i] === Infinity || arr[i] === -Infinity){
			arr[i] = 0;
		}

		if(isNaN(arr[i])){
			arr[i] = 0
		}

		if(typeof arr[i] === 'number'){
			sum = sum + arr[i];
		}

	}

	return sum;
};

export default sumElements;
