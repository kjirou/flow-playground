// @flow

//
// Manual: https://flowtype.org/docs/functions.html#variadics
//

const add = (a, b/*:number*/ = 0) => {
  return a + b;
};

// Good
add(1, 2);
add(1);

// Bad
// add(1, '2');


const clone = (a, b/*:{}*/ = {}) => {
  return Object.assign({}, a, b);
};

// Good
clone({ x: 1 }, { y: 2 });
clone({ x: 1 });

// Bad
//clone({ x: 1 }, []);
