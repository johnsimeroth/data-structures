var Queue = function() {
  this.storage = {};
  this.frontCounter = 0;
  this.backCounter = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.backCounter] = value;
  this.backCounter++;
};

Queue.prototype.dequeue = function() {
  var value = this.storage[this.frontCounter];
  if (this.size() > 0) {
    delete this.storage[this.frontCounter];
    this.frontCounter++;
  }
  return value;
};

Queue.prototype.size = function() {
  return this.backCounter - this.frontCounter;
};
