var Stack = function() {
  this.storage = {};
  this.counter = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

Stack.prototype.pop = function() {
  var value = this.storage[this.counter - 1];
  if (this.counter > 0) {
    delete this.storage[this.counter - 1];
    this.counter--;
  }
  return value;
};

Stack.prototype.size = function() {
  return this.counter;
};
