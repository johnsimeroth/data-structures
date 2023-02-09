var Queue = function() {
  var someInstance = {};
  var storage = {};
  var frontCounter = 0;
  var backCounter = 0;

  someInstance.enqueue = function(value) {
    storage[backCounter] = value;
    backCounter++;
  };

  someInstance.dequeue = function() {
    var value = storage[frontCounter];
    if (someInstance.size() > 0) {
      delete storage[frontCounter];
      frontCounter++;
    }
    return value;
  };

  someInstance.size = function() {
    return backCounter - frontCounter;
  };

  return someInstance;
};
