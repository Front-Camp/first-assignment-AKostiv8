/**
 * This function should return "true" only for "Object" type
 * @param {any} data - this can be any value: string, number, array, object, etc.
 * @return {boolean} result of the "isObject" function
 * @example
 * isObject({});   // true
 * isObject([]);   // false
 * isObject(null); // false
 */
const isObject = data => {
	if(typeof data == 'object'){
		return true;
	}else{
		if(data == null){
			return false;
		} else {
			if(Array.isArray(data) == true){
				return false;
				
			}else{
				return false;
			}
		}
		
	}
};

export default isObject;
