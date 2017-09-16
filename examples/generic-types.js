// @flow

(() => {
  function identity<T>(value: T): T {
    return value;
  }

  const num = identity(1);
  num.toFixed();
  // NG
  //num.toUpperCase();

  const str = identity('a');
  str.toUpperCase();
  // NG
  //str.toFixed();
}).call();
