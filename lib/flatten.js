/////////////////////////////////
// Array Flatten from http://stackoverflow.com/a/39000004/3853934 thanks to Gothdo
/////////////////////////////////

var flatten=function(arr, result = []) {
  for (let i = 0, length = arr.length; i < length; i++) {
    var value = arr[i]
    if (Array.isArray(value)) {
      for (let i = 0, length = value.length; i < length; i++) {
        var value2 = value[i]
        if (Array.isArray(value2)) {
          flatten(value2, result)
        } else {
          result.push(value2)
        }
      }
    } else {
      result.push(value)
    }
  }
  return result
}

/////////////////////////////////
// End
/////////////////////////////////

module.exports= flatten;