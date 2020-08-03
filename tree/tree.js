/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function(value) {
  //tree code goes here!
<<<<<<< HEAD
  let obj = Object.create(treeMaker.methods);
  obj.value = value;
  obj.children = [];
  return obj;
};
=======

  var newTree = Object.create(treeMaker.methods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
  };
>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a

//methods go here!
treeMaker.methods = {};

<<<<<<< HEAD
treeMaker.methods.addChild = function(value) {
  this.children.push(treeMaker(value));
};

treeMaker.methods.contains = function(value) {
  return this.value === value || this.children.reduce((found, child) => child.contains(value) || found, false);
};
=======
treeMaker.methods.addChild = function( value ) {

  var node = treeMaker(value);
  this.children.push(node);
  };

treeMaker.methods.contains = function( value ) {

  if (this.value === value) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(value)) {
      return true;
    }
  }
  return false;
  };
>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a
