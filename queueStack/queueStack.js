/**
 * Write a stack using your preferred instantiation pattern. 
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
<<<<<<< HEAD
class Stack {

  constructor() {
    this._heap = [];
    this._top = -1;
  }

  // add an item to the top of the stack
  push(item) {
    this._top++;
    this._heap[this._top] = item;
  }

  // remove an item from the top of the stack
  pop() {
    if (this._top > -1) {
      this._top--;
      return this._heap[this._top + 1];
    }
  }

  // return the number of items in the stack
  size() {
    return this._top + 1;
  }
=======
var Stack = function() {

  var storage = [];
  var length = 0;
  
  // add an item to the top of the stack
  this.push = function() {

    storage[length++] = arguments[0];
      };

  // remove an item from the top of the stack
  this.pop = function() {

    if (length) {
      var value = storage[--length];
      delete storage[length];
      return value;
    }
      };

  // return the number of items in the stack
  this.size = function() {

    return length;
      };
>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a
};

/**
  * Queue Class
  */
<<<<<<< HEAD
class Queue {
  // Use two `stack` instances to implement your `queue` Class
  constructor() {
    this.inbox = new Stack();
    this.outbox = new Stack();
  }


  // called to add an item to the `queue`
  enqueue(item) {
    // TODO: implement `enqueue`
    this.inbox.push(item);
  }

  // called to remove an item from the `queue`
  dequeue() {
    // TODO: implement `dequeue`
    if (this.outbox.size() === 0) {
      while (this.inbox.size() > 0) {
        this.outbox.push(this.inbox.pop());
      }
    }
    return this.outbox.pop();
  }

  // should return the number of items in the queue
  size() {
    // TODO: implement `size`
    return this.inbox.size() + this.outbox.size();
  }

=======
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function() {

    inbox.push.apply(inbox, arguments);
        // TODO: implement `enqueue`
  };

  // called to remove an item from the `queue`
  this.dequeue = function() {

    if (outbox.size() === 0) {
      while (inbox.size() !== 0) {
        outbox.push(inbox.pop());
      }
    }
    return outbox.pop();
        // TODO: implement `dequeue`
  };

  // should return the number of items in the queue
  this.size = function() {

    return inbox.size() + outbox.size();
        // TODO: implement `size`
  };
>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a
};
