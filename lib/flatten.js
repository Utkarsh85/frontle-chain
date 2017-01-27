"use strict";

/////////////////////////////////
// Array Flatten from http://stackoverflow.com/a/39000004/3853934 thanks to Gothdo 
// Used babel to convert es6 to es5
/////////////////////////////////

var flatten = function flatten(arr) {
	var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];


	for (var i = 0, length = arr.length; i < length; i++) {
		var value = arr[i];
		if (Array.isArray(value)) {
			for (var _i = 0, _length = value.length; _i < _length; _i++) {
				var value2 = value[_i];
				if (Array.isArray(value2)) {
					flatten(value2, result);
				} else {
					result.push(value2);
				}
			}
		} else {
			result.push(value);
		}
	}
	return result;
};

/////////////////////////////////
// End
/////////////////////////////////

module.exports = flatten;























// /////////////////////////////////
// // Array Flatten from http://stackoverflow.com/a/39000004/3853934 thanks to Gothdo
// /////////////////////////////////

// var flatten=function(arr, result = []) {

// 	for (let i = 0, length = arr.length; i < length; i++) {
// 		var value = arr[i]
// 		if (Array.isArray(value)) {
// 		  for (let i = 0, length = value.length; i < length; i++) {
// 		    var value2 = value[i]
// 		    if (Array.isArray(value2)) {
// 		      flatten(value2, result)
// 		    } else {
// 		      result.push(value2)
// 		    }
// 		  }
// 		} else {
// 		  result.push(value)
// 		}
// 	}
// 	return result
// }

// /////////////////////////////////
// // End
// /////////////////////////////////

// module.exports= flatten;