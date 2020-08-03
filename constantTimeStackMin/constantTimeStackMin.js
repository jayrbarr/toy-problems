/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
<<<<<<< HEAD
 * that returns the minimum value of all the elements in the stack in constant time.stack.
=======
 * that returns the minimum value of all the elements in the stack in constant time.stack.  
>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
<<<<<<< HEAD
 class Stack {
  constructor() {
    this._size = 0;
    this._storage = [];
    this._minimum = new Tree();
  }

// add an item to the top of the stack

  _nodePush(node, value) {
    if (node) {
      if (!node.value) node.value = value;
      else if (value === node.value) {
        node.count++;
      } else if (value > node.value) {
        this._nodePush(node.right, value);
      } else if ( value < node.value) {
        this._nodePush(node.left, value)
      }
    } else {
      node = new Tree();
      node.value = value;
    }
  }

  _nodePop(node, value) {
    if (node) {
      if ( value === node.value ) {
        if (node.count > 0) node.count--;
        else if (node.left) node.value = node.left;
        else if (node.right) node.value = node.right;
        else node.value = undefined;
      } else if (value > node.value) {
        if (node.right) this._nodePop(node.right, value);
      } else if ( value < node.value) {
        if (node.left) this._nodePop(node.left, value)
      }
    }
  }

  _nodeMin(node) {
    var check = (node.left) ? node.left.value : node.left;
    return (check) ? this._nodeMin(node.left) : node.value;
  }

  push(value) {
    this._storage.push(value);
    this._size++;
    this._checkMinPush(value);
  };

// remove an item from the top of the stack
  pop() {
    this._size--;
    let value = this._storage.pop();
    this._checkMinPop(value);
    return value;
  };

// return the number of items in the stack
  size() {
    return this._size;
  };

// return the minimum value in the stack
  min() {
    return this._getMinimum();
  };

  _getMinimum() {
    var minimum = this._minimum.value;
    return this._nodeMin(this._minimum);
  }

  _checkMinPush(value) {
    if (!this._minimum.value) {
      this._minimum.value = value;
    } else {
      if (value === this._minimum.value) this._minimum.count++;
      else if (value > this._minimum.value) {
        if (!this._minimum.right) this._minimum.right = new Tree();
        this._nodePush(this._minimum.right, value)
      } else if (value < this._minimum.value) {
        if (!this._minimum.left) this._minimum.left = new Tree();
        this._nodePush(this._minimum.left, value)
      }
    }
  }

  _checkMinPop(value) {
    if (!this._minimum.value) {
      return;
    } else {
      if (value === this._minimum.value) {
        this._minimum.value = undefined;
      }
      if (value > this._minimum.value) {
        this._nodePop(this._minimum.right, value)
      } else if (value < this._minimum.value) {
        this._nodePop(this._minimum.left, value)
      }
    }
  }
};

class Tree {
  constructor() {
    this.value;
    this.left;
    this.right;
    this.count = 0;
  }
}
=======
  var Stack = function() {

    var storage = [];
    var minValueStorage = [];
    
  // add an item to the top of the stack
    this.push = function(value) {

      if (!minValueStorage.length ||
          value <= minValueStorage[minValueStorage.length - 1]) {
        minValueStorage.push(value);
      }
      storage.push(value);
        };

  // remove an item from the top of the stack
    this.pop = function() {


      var value = storage.pop();
      if (value === minValueStorage[minValueStorage.length - 1]) {
        minValueStorage.pop();
      }
      return value;
        };

  // return the number of items in the stack
    this.size = function() {

      return storage.length;
        };
  
  // return the minimum value in the stack
    this.min = function() {

      return minValueStorage[minValueStorage.length - 1];
    
    };

  };

>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a
