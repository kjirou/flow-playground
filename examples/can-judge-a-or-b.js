// @flow

type A = {
  type: 'a',
  value: string,
};
type B = {
  type: 'b',
  value: null,
};
type AOrB = A | B;

const foo: AOrB = {
  type: 'a',
  value: 'text',
};
const bar: AOrB = {
  type: 'b',
  value: null,
};

// NG
//foo.type = 'c';
//foo.type = 'a';

// NG: B には null が入るのに、これは A であることが判別できているからか、エラーになる
//foo.value = null;

// NG:
// ```
// Cannot assign 'text2' to foo.value because string [1] is incompatible with null [2].
// ```
//foo.value = 'text2';

// NG
//bar.type = 'c';

// NG: A には string が入るのに、これは B であることが判別できているからか、エラーになる
//bar.value = 'text';


//
// 以下は蛇足
//
const extendedByA = Object.assign({}, foo);
const extendedByB = Object.assign({}, bar);

// 型は吹っ飛ぶ
extendedByA.type = 'c';
extendedByA.value = null;
extendedByA.value = 123;
extendedByB.type = 'd';
extendedByB.value = 'text';
extendedByB.value = 123;
