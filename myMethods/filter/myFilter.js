var myFilter = function(arr, callback){
  var results = [];
  for(var i = 0; i < arr.length; i++){
    if (callback(arr[i])) {
     results.push(arr[i]);
    }
  }
  return results;
};
