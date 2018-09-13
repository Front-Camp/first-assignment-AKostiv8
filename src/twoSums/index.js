/**
 * This function should return values of first two elements which sum equals to "base" parameter
 *
 * @param {Array<number>} arr - the an array of numbers
 * @param {number} base - the sum of two elements of array
 * @return {Array<number>} - should return an array of values
 * @example
 * twoSums([1, 2, 4], 3); // [1, 2]
 * twoSums([5, 9, 3], 12); // [9, 3]
 */
const twoSums = (arr, base) => {
  var a = arr[0];
  var b = arr[1];
  var c = arr[2];
  var result = [];
  if((a+b) == base){
	  result.push(a);
	  result.push(b);
  }else{
	  if((b+c) == base){
		  result.push(b);
		  result.push(c);
	  }else{
		  if((a+c) == base){
			 result.push(a);
		  result.push(c); 
		  }
	  }
  }

	return result;
};

export default twoSums;
