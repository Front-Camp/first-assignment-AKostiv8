/**
 * @param {Array<Object>} arr - this is an array of objects
 * @return {Array} result of the sum value.
 * @example
 * const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}];
 * getFlags(arr); // [1, 2, 3, 4, 5, 6]
 */
const getFlags = arr => {
	var result = [];
	var a, b, c, d, e, f;
	var one;
	one = Object.values(arr[0]);
	var two = Object.values(arr[1]);
	
	one.push(two[0]);
	one.push(two[1]);
	one.push(two[2]);

  return one;
};

export default getFlags;
