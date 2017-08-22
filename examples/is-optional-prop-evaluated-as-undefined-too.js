// @flow

//
// オプショナルな値が undefined の代入も許可するのかをチェック
//
// 当然なんだけど、なんかこう書かないでもよかった気がしてたので確認した
//

type T = {
  strs?: string[],
};


// OK
({strs: ['', 'a']}: T);

// OK: 代入を許可している
({strs: undefined}: T);

// NG
//({strs: [1]}: T);

const foo = (strs: string[]) => {
  return strs.join('');
};

const obj: T = {strs:['a']};

// NG: 正しく落ちる
//
// Error: examples/is-optional-array-evaluated-as-undefined-too.js:21
//  21: foo(obj.strs);
//          ^^^^^^^^ undefined. This type is incompatible with the expected param type of
//  15: const foo = (strs: string[]) => {
//                         ^^^^^^^^ array type
//
//
// Found 1 error
//
//foo(obj.strs);
