/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
		var maxnum = arr[0];
  for (var i = 0; i < arr.length; i++) { 
		if(maxnum > arr[i]){
			maxnum = arr[i];
		}
	}
	return maxnum;
};

export default max;
