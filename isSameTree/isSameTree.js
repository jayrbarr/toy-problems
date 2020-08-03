/*
Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

var TreeNode = function (val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}


// HELPER FUNCTIONS TO BUILD TREE FROM ARRAY
var buildBranch = function (arr, node, index) {
  if (typeof arr[index * 2 + 1] !== 'undefined') {
    node.left = new TreeNode(arr[index * 2 + 1]);
    buildBranch(arr, node.left, index * 2 + 1);
  }
  if (typeof arr[index * 2 + 2] !== 'undefined') {
    node.right = new TreeNode(arr[index * 2 + 2]);
    buildBranch(arr, node.right, index * 2 + 2);
  }
}

var constructTree = function (arr) {
  let root;
  if (arr.length > 0) {
    root = new TreeNode(arr[0]);
  }
  buildBranch(arr, root, 0);
  return root;
}

// TEST AND CONSOLE OUTPUTS. TO TEST, CHANGE CONTENTS OF ARRAYS
let arr1 = [0];
let arr2 = [];

let tree1 = constructTree(arr1);
let tree2 = constructTree(arr2);

console.log(isSameTree(tree1, tree2));
