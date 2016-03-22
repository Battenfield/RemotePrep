var myIndexOf = function(array, value, startIndex) {
  if (startIndex === undefined) {
    for(var i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return i;
      }
    }
    return -1;
  }
  else if (startIndex < 0) {
    for(var j = (startIndex + array.length); j < array.length; j++) {
      if (array[j] === value) {
        return j;
      }
    }
    return -1;
  }
  else if (startIndex < array.length) {
    for (var k = startIndex; k < array.length; k++) {
      if (array[k] === value) {
        return k;
      }
    }
    return -1;
  }
};
