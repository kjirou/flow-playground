// @flow

//
// (変数: 型) による型変換
//

const add = (a: number, b: number) => {
  return a + b;
};

// OK
add(1, 2);

// NG
//add('1', 2);

// OK: 騙せる
//     複雑なオブジェクトを要する関数のテストなどに有用
add(('1': any), 2);

// NG: 正常に動いていることを確認
//add(('1': boolean), 2);

// NG: これは無理。any 以外では騙せない？
//add(('1': number), 2);
