/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
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
<<<<<<< HEAD
  result.storage = [];
  result.storageLimit = 4;
  result.size = 0;

  result.insert = function(k, v) {
    // TODO: implement `insert`
    var index = getIndexBelowMaxForKey(k, this.storageLimit);
    if (this.storage[index]) {
      var tupleIndex = this.storage[index].findIndex((tuple) => tuple[0] = k);
      if (tupleIndex > -1) {
        this.storage[index][tupleIndex][1] = v;
      }
      this.storage[index].push([k, v]);
    } else {
      this.storage[index] = [[k, v]];
    }
    this.size++;
    if (this.size > (this.storageLimit * .75)) {
      this.storageLimit *= 2;
      this._resize();
    }
  };

  result.retrieve = function(k) {
    // TODO: implement `retrieve`
    var index = getIndexBelowMaxForKey(k, this.storageLimit);
    if (this.storage[index]) {
      var tupleIndex = this.storage[index].findIndex((tuple) => tuple[0] = k);
      if (tupleIndex > -1) {
        return this.storage[index][tupleIndex][1];
      }
    }
  };

  result.remove = function(k) {
    // TODO: implement `remove`
    var index = getIndexBelowMaxForKey(k, this.storageLimit);
    if (this.storage[index]) {
      if (this.storage[index].length > 1) {
        var tupleIndex = this.storage[index].find((tuple) => tuple[0] = k);
        this.storage[index].splice(tupleIndex, 1);
      } else {
        this.storage[index] = undefined;
      }
    }
    this.size--;
    if (this.size < (this.storageLimit * .25) && this.size > 2) {
      this.storageLimit /= 2;
      this._resize();
    }
  };

  result._resize = function() {
        // TODO: implement `_resize`
        var oldStorage = this.storage;
        this.storage = [];
        oldStorage.forEach((node) => node.forEach((tuple) => this.insert(tuple[0], tuple[1])));
      };
=======
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  var resize = function(newSize) {
    // collect all the pairs
    var pairs = [];
    for (var i = 0; i < storage.length; i++) {
      if (!storage[i]) { continue; }
      for (var j = 0; j < storage[i].length; j++) {
        if (!storage[i][j]) { continue; }
        pairs.push(storage[i][j]);
      }
    }
    storageLimit = newSize;
    storage = [];
    size = 0;
    for (var i = 0; i < pairs.length; i++) {
      result.insert(pairs[i][0], pairs[i][1]);
    }
  };
    
  result.insert = function(/*...*/  key, value ) {
    // TODO: implement `insert`

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
    size++;

    if (size >= storageLimit * 0.75) {
      // increase the size of the hash table
      resize(storageLimit * 2);
    }
      };

  result.retrieve = function(/*...*/  key ) {
    // TODO: implement `retrieve`

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
    // TODO: implement `remove`

    var index = getIndexBelowMaxForKey(key, storageLimit);
    var pairs = storage[index];
    var pair;

    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair[0] === key) {
        var value = pair[1];
        pairs.splice(i, 1);
        size--;
        if (size <= storageLimit * 0.25) {
          // decrease the size of the hash table
          resize(storageLimit / 2);
        }
        return value;
      }
    }
      };

>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a
  return result;
};
