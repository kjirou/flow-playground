// @flow

(() => {
  function identity<T>(value: T): T {
    return value;
  }
  const num = identity(1);
  num.toFixed();
  // NG
  //num.toUpperCase();

  // Comment TYpe だと定義できない
  // ```
  //  Error: examples/static-method-with-generics.js:12
  //   12:   function identity2/*:<T>*/(value/*: T*/)/*: T*/ {
  //                            ^^^ Unexpected token /*:
  // ```
  //function identity2/*:<T>*/(value/*: T*/)/*: T*/ {
  //  return value;
  //}
}).call();
