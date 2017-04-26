// @flow

//
// このコードの目的:
//
//   Flow ドキュメントを読むと随所に出てくる
//
//   - "sealed" / "unsealed"
//   - "exact"  / "non-exact"(= "Width Subtyping" ?)
//   - "Width Subtyping"
//
//   という概念がある。
//   それらがそれぞれどういう概念なのかを抑えたい。
//
// 関連資料:
//
// - Object Types
//   - https://flow.org/en/docs/types/objects/
// - A = { a: number }; { b: number, ...A }; で { a?: number, b: mixed } になるのはなんで？という Issue
//     - https://github.com/facebook/flow/issues/3534
// - Width Subtyping
//   - https://flow.org/en/docs/lang/width-subtyping/
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
  // この ObjType の型定義は "non-exact" である
  type ObjType = {
    num: number,
  };

  // Works!
  const obj: ObjType = {
    num: 1,
    otherProp: 2,
  };
})();


(() => {
  // この ObjType の型定義は "exact" である
  type ObjType = {|
    num: number,
  |};

  // Error!
  //const obj: ObjType = {
  //  num: 1,
  //  otherProp: 2,
  //};
})();


(() => {
  // この ObjType の型定義は "non-exact" である
  type ObjType = {
    num: number,
  };

  // そうなると、この obj は "unsealed" になるのではと思ったが..
  const obj: ObjType = {
    num: 1,
    otherProp: 2,
  };

  // Error!
  // 新しくプロパティを足すのは NG
  //obj.otherProp2 = 3;

  // Error!
  // ObjType に存在しないプロパティの更新ができない
  //obj.otherProp = 3;

  // Error!
  // ObjType に存在しないプロパティの参照もできない
  //const x = obj.otherProp;

  // Works!
  // これは可能だ。
  obj.num = 2;

// ..何か理解が間違っている！
})();


//
// 1) 型の定義
// 2) 変数の型の決定(=変数を型と結びつける)
//
// をごっちゃにしているのが問題を複雑にしている。
//
// まずは、両者の整理をしてみる。
//
(() => {
  // これは「型の定義」である
  type ObjType = {
    num: number,
  };

  // これは
  // 1) 推論システムが、無名の { num: number } という型定義を行い
  // 2) obj1 変数の型をそれに決定している
  const obj1 = {
    num: 10,
  };

  // これは
  // 1) なし
  // 2) obj2 変数の型を ObjType に決定している
  const obj2: ObjType = {
    num: 10,
  };

  // これも
  // 1) なし
  // 2) obj2 変数の型を ObjType に決定している
  const obj3: ObjType = {
    num: 10,
    otherProp: 1,
  };

  //
  // 変数の型が決定された時点で、Flow はその情報しか参照しない
  // 決定された型が後で変わることもない
  //
  // 変数の型が決定している状態は、すべからく "sealed" であった。

  //
  //
  // "unsealed" だけ特殊なので、これは分けて考えた方が良さそう。
  //
  // const obj = Object.assign({}, x: XType, y: YType);
  //
  // 上記の場合に、obj が何に推論されているのか？とかの点
  //
})();
