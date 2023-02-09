class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counter = 0;
  }

  push(value) {
    this.storage[this.counter] = value;
    this.counter++;
  }

  pop() {
    var value = this.storage[this.counter - 1];
    if (this.size() > 0) {
      delete this.storage[this.counter - 1];
      this.counter--;
    }
    return value;
  }

  size() {
    return this.counter;
  }

}