// @flow

//
// 引数の型に合わない引数を渡してもエラーにさせない方法
//
// 複雑なオブジェクトの定義をしている関数のテストなどに使える
//

const add = (a: number, b: number) => {
  return a + b;
};

// OK
add(1, 2);

// NG
//add('1', 2);

// OK: 騙している
add(('1': any), 2);

// NG: 正常に動いていることを確認
//add(('1': boolean), 2);

// NG: これは無理。any 以外では騙せない？
//add(('1': number), 2);
