/**
  *
  * Implement a `DFSelect` method on this Tree class.
  *
  * DFSelect accepts a filter function, calls that function on each of the nodes
  * in Depth First order, and returns a flat array of node values of the tree
  * for which the filter returns true.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);
  *   root1.DFSelect(function (value, depth) {
  *     return value % 2;
  *   })
  *   // [1, 5, 3, 7]
  *
  *   root1.DFSelect(function (value, depth) {
  *     return depth === 1;
  *   })
  *   // [2, 3]
  *
  */

/*
 * Basic tree that stores a value.
 */

var Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.DFSelect = function(filter) {
<<<<<<< HEAD
  let nodes = [];

  function checkNode(node, filter, curDepth) {
    if (filter(node.value, curDepth)) {
      nodes.push(node.value)
    }
    if (node.children) {
      curDepth++;
      for (let child of node.children) {
        checkNode(child, filter, curDepth);
      }
    }
  }
  checkNode(this, filter, 0);
  return nodes;
};


=======

  var results = [];
  var subroutine = function(node, depth) {
    if (filter(node.value, depth)) {
      array.push(node.value);
    }
    for (var i = 0; i < node.children.length; i++) {
      var child = node.children[i];
      subroutine(child, depth + 1);
    }
  };
  subroutine(this, 0);
  return array;
  };


// solution without a subroutine, for the badasses among us
Tree.prototype.DFSelect = function(filter, depth, results) {
  results = results || [];
  depth = depth || 0;

  if (filter(this.value, depth)) {
    results.push(this.value);
  }

  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    child.DFSelect(filter, depth + 1, results);
  }
  return results;
};
>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a

/**
 * You shouldn't need to change anything below here, but feel free to look.
  */

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }

  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};
