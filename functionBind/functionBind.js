/*
 * function bind():
 *
 * example 1:
<<<<<<< HEAD
 */


var bind = function() {
  let [func, context, ...remaining] = arguments;
  let contextToBind = arguments[1];
  return (...newArgs) => func.call(context, ...remaining, ...newArgs);
};
/*
 * function bind():
 *
 * example 1:
 */

// var alice = {
//   name: 'alice',
//   shout: function(){
//     alert(this.name);
//   }
// }
// var boundShout = bind(alice.shout, alice);
// boundShout(); // alerts 'alice'
// boundShout = bind(alice.shout, {name: 'bob'});
// boundShout(); // alerts 'bob'

// example 2:

// var func = function(a, b){ return a + b };
// var boundFunc = bind(func, null, 'foo');
// var result = boundFunc('bar');
// console.log(result === 'foobar'); // true

Function.prototype.bind = function() {
  let contextToBind = arguments[0];
  let remaining = [...arguments].slice(1);
  if (contextToBind) {
    contextToBind.boundFunction = this;
  }
  return contextToBind ?
    (...otherArgs) => contextToBind.boundFunction(...remaining, ...otherArgs) :
    (...otherArgs) => this(...remaining, ...otherArgs);
};

//  var alice = {
//      name: 'alice',
//      shout: function(){
//        alert(this.name);
//      }
//    }
   
//    var boundShout = alice.shout.bind(alice);
//    boundShout(); // alerts 'alice'
//    boundShout = alice.shout.bind({name: 'bob'});
//    boundShout(); // alerts 'bob'
  
  
//    var func = function(a, b){ return a + b };
//    var boundFunc = func.bind(null, 'foo');
//    var result = boundFunc('bar');
//    result === 'foobar'; // true

=======
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

var bind = function(func, context) {
  // TODO: Your code here

  var previousArgs = Array.prototype.slice.call(arguments, 2);

  return function() {
    var args = Array.prototype.slice.call(arguments);
    args = previousArgs.concat(args);

    return func.apply(context, args);
  };
  };

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

Function.prototype.bind = function( context ) {
  // TODO: Your code here

  var previousArgs = Array.prototype.slice.call(arguments, 1);
  var func = this;

  return function() {
    var args = Array.prototype.slice.call(arguments);
    args = previousArgs.concat(args);

    return func.apply(context, args);
  };
  };
>>>>>>> 680dfcb8e74c6b045a5b9bc7652f82d4bbb9cb1a
