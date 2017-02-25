// @flow


// Good
Object.assign({}, { a: null }, { a: 1 });
// Bad
//Object.assign({ a: null }, { a: 1 });

// ----

//
// Sealed | Unsealed Object Types
//
// https://flowtype.org/docs/objects.html#sealed-object-types
//

// Good
const obj = {};
obj.x;
obj.x = 1;
// Bad
//   It is considered to be a sealed object
//const obj: {} = {};
//obj.x;
//obj.x = 1;
// Bad
//   Non-empty object is also considered as such
//const obj = { y: 2 };
//obj.x = 1;

// ----

// Good
(Object.assign({}, { a: 1 }, { b: 2 }): { a: 1, b: 2 });
// Bad
//(Object.assign({ a: 1 }, { b: 2 }): { a: 1, b: 2 });
//(Object.assign({ a: 3, b: 2 }, { a: 1 }): { a: 1, b: 2 });
//(Object.assign({}, { a: 3, b: 2 }, { a: 1 }): { a: 1, b: 2 });

// ----

const createState = (): { a: 1 | 3, b: 2 } => {
  return {
    a: 1,
    b: 2,
  };
};
// Good
(Object.assign(createState(), { a: 3 }): { a: 1 | 3, b: 2 });
// Bad
//(Object.assign(createState(), { a: 3 }): { a: 3, b: 2 });
//(Object.assign({}, createState(), { a: 3 }): { a: 3, b: 2 });

// ----

//
// Questions
//
//   I do not know why these are cases
//

// Good
(Object.assign({ a: 1 }, { a: 2 }): { a: 1 });
// Bad
//(Object.assign({ a: 2 }, { a: 1 }): { a: 1 });
