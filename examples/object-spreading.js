// @flow

//
// このコードの目的:
//
//   { ...T } (Object spreading) の構文のドキュメントが v0.44.1 現在存在しないので、
//   サンプルを書いて挙動を確認する。
//
//   なお、結果として挙動はわかったが、大元の原理は下記の Issue を読んでもよくわからなかった。
//
// 関連資料:
//
//   挙動に疑問を投げかけている Issue 、コメントで解決方法が提示されている
//     https://github.com/facebook/flow/issues/3534#issuecomment-287580240
//


//
// 基本的な挙動
//
(() => {
  type T1 = {
    x: number,
    y: number,
    z: number,
  };

  type T2 = {
    y: number,
    z: string,
    a: number,
    ...T1,
    b: number,
  };

  // x = 拡張する側にあり、拡張される側にはない
  // y = 拡張する側にあり、拡張される側に同じ型がある
  // z = 拡張する側にあり、拡張される側に違う型がある
  //
  // a = 拡張される側にあり、拡張される前に宣言されている
  // b = 拡張される側にあり、拡張される後に宣言されている

  // 結果、以下の定義と同じになる
  type T2_ = {
    // x は拡張する側の型定義になり、オプショナルになる
    x?: number,
    // y は拡張する側の型定義になる
    y: number,
    // z は拡張する側と拡張される側の型の union になる
    z: number | string,
    // a は mixed になる
    a: mixed,
    // b には影響がない
    b: number,
  };


  ({ x: 0, y: 0, z: '', a: [], b: 0 }: T2);
  ({ x: 0, y: 0, z: '', a: [], b: 0 }: T2_);

  ({ x: 0, y: 0, z: 0, a: [], b: 0 }: T2);
  ({ x: 0, y: 0, z: 0, a: [], b: 0 }: T2_);

  ({ y: 0, z: '', a: [], b: 0 }: T2);
  ({ y: 0, z: '', a: [], b: 0 }: T2_);

  ({ x: 0, y: 0, z: '', a: [], b: 0, newProp: 0 }: T2);
  ({ x: 0, y: 0, z: '', a: [], b: 0, newProp: 0 }: T2_);
})();


//
// 拡張した場合なる、以下の現象を抑えたい
//
// - 拡張したプロパティがオプショナルにならない
// - 既存で拡張されなかったプロパティが mixed になる
//
(() => {
  type T1 = {
    additional: number,
  };

  type T2 = {
    existing: number,
    ...T1,
  };

  // 以下と同じになる
  type T2_ = {
    existing: mixed,
    additional?: number,
  };


  ({ existing: [], additional: 0 }: T2);
  ({ existing: [], additional: 0 }: T2_);

  ({ existing: [] }: T2);
  ({ existing: [] }: T2_);

  ({ existing: [], additional: 0, more: 0 }: T2);
  ({ existing: [], additional: 0, more: 0 }: T2_);


  //
  // しかし、これは期待と違う。
  // 自分が期待している結果はこれと同じになることである。
  //
  type T4_ = {
    existing: number,
    additional: number,
  };

  //
  // ということで $Exact を使うと解決するとのこと。
  // Ref) https://github.com/facebook/flow/issues/3534#issuecomment-287580240
  //

  type T3 = {
    additional: number,
  };

  type T4 = {
    existing: number,
    ...$Exact<T1>,
  };

  ({ existing: 0, additional: 0 }: T4);
  ({ existing: 0, additional: 0 }: T4_);

  ({ existing: 0, additional: 0, more: 0 }: T4);
  ({ existing: 0, additional: 0, more: 0 }: T4_);

  // Error
  //({ existing: 0 }: T4);
  //({ existing: 0 }: T4_);

  // Error
  //({ existing: [], additional: 0 }: T4);
  //({ existing: [], additional: 0 }: T4_);
})();
