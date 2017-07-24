// @flow

/**
 * ['A' | 'B'] じゃなくて ['A'] | ['B'] で表現するとバグるらしい説を聞いたので検証してみた
 */

type A = ['A'];
type B = ['B'];
type T = A | B;

const arrayOfAorB: Array<T> = [['A'], ['B']];

// NG: もちろんエラー
//const arrayOfAorC: Array<T> = [['A'], ['C']];

// あれ・・・通るな
const method = (val: T) => val;
arrayOfAorB.map(type => method(type));
