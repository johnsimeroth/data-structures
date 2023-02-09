var Queue = function() {
  var newQueue = {};
  newQueue.storage = {};
  newQueue.frontCounter = 0;
  newQueue.backCounter = 0;
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.backCounter] = value;
  this.backCounter++;
};

queueMethods.dequeue = function() {
  var value = this.storage[this.frontCounter];
  if (this.size() > 0) {
    delete this.storage[this.frontCounter];
    this.frontCounter++;
  }
  return value;
};

queueMethods.size = function() {
  return this.backCounter - this.frontCounter;
};
