var Stack = function() {
  var newStack = {};
  // debugger;
  newStack.storage = {};
  newStack.counter = 0;
  _.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

stackMethods.pop = function() {
  var value = this.storage[this.counter - 1];
  if (this.counter > 0) {
    delete this.storage[this.counter - 1];
    this.counter--;
  }
  return value;
};

stackMethods.size = function() {
  return this.counter;
};