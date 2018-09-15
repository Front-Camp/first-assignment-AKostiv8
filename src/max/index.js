/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
	
	for (var i = 0; i < arr.length; i++) { 
		if((arr[i] === Infinity) || (arr[i] === -Infinity)){
			arr[i] = 1;
			
		if(isNaN(arr[i])){
			arr[i] = 2;	
		}
	}
	
		var maxnum = arr[0];
    for (var j = 0; j < arr.length; j++) { 
		if(maxnum < arr[j]){
			maxnum = arr[j];
		}
	}
	
	return maxnum;
};

export default max;
