var Queue = function() {
  var someInstance = {};
  var storage = {};
  var frontCounter = 0;
  var backCounter = 0;

  someInstance.enqueue = function(value) {
    var index = backCounter;
    storage[index] = value;
    backCounter++;
    return index;
  };

  someInstance.dequeue = function() {
    var value = storage[frontCounter];
    delete storage[frontCounter];
    // for (var i = 0; i < someInstance.size(); i++) {
    //   storage[i] = storage[i + 1];
    //   delete storage[i + 1];
    // }

    return value;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
