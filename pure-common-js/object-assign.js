// @flow


// Good
Object.assign({}, { a: null }, { a: 1 });
// Bad
//Object.assign({ a: null }, { a: 1 });
