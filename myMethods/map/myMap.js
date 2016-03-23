var myMap = function(arr, callback){
  var newArray = [];
    for(var i = 0; i < arr.length; i++){
        newArray.push(callback(arr[i]));
    }
  return newArray;
};
