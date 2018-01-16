// @flow

declare var compose: $Compose;

// Copied from https://github.com/reactjs/redux/blob/master/src/compose.js
function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

const double = (value: number) => value * 2;
const increment = (value: number) => value + 1;
const toString = (value: number) => value.toString();

// OK
const composed1 = compose(double, increment);
// NG
//const composed2 = compose(double, increment, toString);
