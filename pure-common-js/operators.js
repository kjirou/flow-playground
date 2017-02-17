// @flow

//
// There is no way to define them all together.
//
// For example, there is no method as below)
//
//   /*:: (a: number, b: number) => number; */
//   /*:: subtract: (a: number, b: number) => number; */
//   /*:: declare function (a: number, b: number): number; */
//
// Ref) https://github.com/facebook/flow/issues/358
//

const add = (a /*:number*/, b /*:number*/ = 1) => {
  return a + b;
};
const subtract = (a /*:number */, b /*:number*/) => {
  return a - b;
};


module.exports = {
  add,
  subtract,
};
