/**
 * @param {Array<Object>} arr - this is an array of objects
 * @return {Array} result of the sum value.
 * @example
 * const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}];
 * getFlags(arr); // [1, 2, 3, 4, 5, 6]
 */
const getFlags = arr => {
	var one;
	one = Object.values(arr[0]);
	var two = [];
	var result = [];
	for(var z = 0; z<one.length; z++){
		two.push(one[z]);
	}
	console.log(two);

	for(var j = 1; j<arr.length; j++){
		arr[j] = Object.values(arr[j]);
		for(var i = 0; i < arr[j].length; i++){
			two.push(arr[j][i]);
		}
	}

	for(var a=0; a<two.length; a++){
		for(var b=0; b<two[a].length; b++){
			result.push(two[a][b]);
		}
	}

  return result;
};

export default getFlags;
