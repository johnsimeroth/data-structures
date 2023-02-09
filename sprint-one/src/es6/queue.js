class Queue {

  constructor() {
    this.storage = {};
    this.frontCounter = 0;
    this.backCounter = 0;
  }

  enqueue(value) {
    this.storage[this.backCounter] = value;
    this.backCounter++;
  }

  dequeue() {
    var value = this.storage[this.frontCounter];
    if (this.size() > 0) {
      delete this.storage[this.frontCounter];
      this.frontCounter++;
    }
    return value;
  }

  size() {
    return this.backCounter - this.frontCounter;
  }
}
