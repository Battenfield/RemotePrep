var myEach = function (collection, callback) { 
  if (Array.isArray(collection)) {
    for (var index = 0; index < collection.length; index++) {
      callback(collection[index], index, collection);
    }
  } else {
    for (var key in collection) {
      callback(collection[key], key, collection);
    }
  }
};
