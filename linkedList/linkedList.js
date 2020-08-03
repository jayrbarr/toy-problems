/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';


var LinkedList = function() {
  //fill me in!
<<<<<<< HEAD
  this.head = null;
  this.tail = null;
};
=======

  this.head = null;
  this.tail = null;
  };
>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a

//write methods here!

LinkedList.prototype.addToTail = function(value) {
<<<<<<< HEAD
  let newNode = this.makeNode(value);
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    let pointer = this.head;
    while (pointer.tail !== null) {
      pointer = pointer.tail;
    }
    pointer.tail = this.makeNode(value);
    this.tail = pointer.tail;
  }
};

LinkedList.prototype.removeHead = function() {
  let value = this.head ? this.head.value : null;
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else this.head = this.head.tail;
  return value;
};

LinkedList.prototype.contains = function(value) {
  let found = false;
  let pointer = this.head;
  do {
    found = pointer.value === value || found;
    pointer = pointer.tail;
  } while (pointer !== null);
  return found;
};

LinkedList.prototype.makeNode = function(value) {
  return {
    value,
    tail: null
  }
};
=======

  var newTail = this.makeNode(value);
  if ( !this.head ) { this.head = newTail; }
  if ( this.tail ) { this.tail.next = newTail; }
  this.tail = newTail;
  };

LinkedList.prototype.removeHead = function() {

  var currentHead = this.head;
  if (!this.head) {
    return null;
  }
  if (this.head === this.tail) {
    this.head = this.tail = null;
  } else {
    this.head = this.head.next;
  }
  return currentHead ? currentHead.value : null;
  };

LinkedList.prototype.contains = function(target) {

  var node = this.head;
  while ( node ) {
    if ( node.value === target ) { return true; }
    node = node.next;
  }
  return false;
  };

LinkedList.prototype.makeNode = function(value) {

  var node = {};
  node.value = value;
  node.next = null;
  return node;
  };
>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a
