// @flow

//
// $Shape と $Exact の違いの参考資料
// https://qiita.com/kinzal/items/e1898c89af5618e18334
//

type MyExact<T> = T & $Shape<T>;

type Obj = {
  b: boolean,
  n: number,
  s: string,
};

({b: true, n: 1, s: 'a'}: MyExact<Obj>);

// プロパティが余分な場合
// NG: "property `x` of object literal. Property not found in ..."
//({b: true, n: 1, s: 'a', x: 1}: MyExact<Obj>);

// プロパティが足りないな場合
// NG: "property `s`. Property not found in ..."
//({b: true, n: 1}: MyExact<Obj>);
