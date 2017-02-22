// @flow


// Good
Object.assign({}, { a: null }, { a: 1 });
// Bad
//Object.assign({ a: null }, { a: 1 });

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
