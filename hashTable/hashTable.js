/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 1000;
<<<<<<< HEAD

  result.insert = function(key, value) {
    // TODO: implement `insert()`
    let idx = getIndexBelowMaxForKey(key,storageLimit);
    if (typeof storage[idx] === 'undefined') {
      storage[idx] = [[key, value]];
    } else {
      if (this.retrieve(key)) this.remove(key);
      storage[idx].push([key, value]);
    }
  };

  result.retrieve = function(key) {
    // TODO: implement `retrieve()`
    let idx = getIndexBelowMaxForKey(key,storageLimit);
    let arr = storage[idx] && storage[idx].filter(item => item[0] === key);
    return arr && arr.length > 0 ? arr[0][1] : undefined;
  };

  result.remove = function(key) {
    // TODO: implement `remove()`
    let idx = getIndexBelowMaxForKey(key,storageLimit);
    let subIdx = storage[idx].reduce((sub, item, i) => item[0] === key ? i : sub || undefined);
    if (subIdx) storage[idx].splice(subIdx, 1);
  };
=======
  result.insert = function(/*...*/  key, value ) {
    // TODO: implement `insert()`


    var index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index] = storage[index] || [];
    var pairs = storage[index];
    var pair;
    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    pairs.push([key, value]);

      };

  result.retrieve = function(/*...*/  key ) {
    // TODO: implement `retrieve()`

    var index = getIndexBelowMaxForKey(key, storageLimit);
    var pairs = storage[index];
    if (!pairs) { return; }
    var pair;
    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair && pair[0] === key) {
        return pair[1];
      }
    }
      };

  result.remove = function(/*...*/  key ) {
    // TODO: implement `remove()`

    var index = getIndexBelowMaxForKey(key, storageLimit);
    var pairs = storage[index];
    var pair;
    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair[0] === key) {
        var value = pair[1];
        pairs.splice(i, 1);
        return value;
      }
    }
      };
>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a

  return result;
};
