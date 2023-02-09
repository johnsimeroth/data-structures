var Queue = function() {
  var newQueue = {};
  newQueue.storage = {};
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var index = this.size();
  this.storage[index] = value;
  return index;
};

queueMethods.dequeue = function() {
  var result = this.storage[0];
  for (var i = 0; i < this.size(); i++) {
    this.storage[i] = this.storage[i + 1];
    delete this.storage[i + 1];
  }
  return result;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};
