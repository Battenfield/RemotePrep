var myEvery = function(array, callback) {
  var results = true;
  for(var i = 0; i < array.length; i++){
    if (callback(array[i])) {
      results = true;
    }
    else {
      return false;
    }
  }
    return true;
};

var isBigEnough = function(element, index, array) {
  return element >= 10;
};

console.log([12, 5, 8, 130, 44].every(isBigEnough));   // false
console.log(myEvery([12, 5, 8, 130, 44], isBigEnough));
console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true
console.log(myEvery([12, 54, 18, 130, 44], isBigEnough));
