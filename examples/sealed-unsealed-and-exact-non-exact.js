// @flow

//
// このコードの目的:
//
//   Flow ドキュメントを読むと随所に出てくる
//
//   - "sealed" / "unsealed"
//   - "exact"  / "non-exact"(= "Width Subtyping" ?)
//
//   という定義がある。
//   それらがそれぞれどういう概念なのかを抑えたい。
//
// 関連資料:
//
//   - Object Types
//     - https://flow.org/en/docs/types/objects/
//   - A = { a: number }; { b: number, ...A }; で { a?: number, b: mixed } になるのはなんで？という Issue
//     - https://github.com/facebook/flow/issues/3534
//

(() => {
  // この obj は "sealed" である
  const obj = {
    num: 1,
  };

  // Error!
  //obj.otherProp = 1;
})();


(() => {
  // この obj は "unsealed" である
  // "When you create an object without any properties" の場合は unsealed になる
  const obj = {};

  // Works!
  obj.otherProp = 1;
})();


(() => {
  // この obj の型定義は "non-exact" である
  type ObjType = {
    num: number,
  };
})();
