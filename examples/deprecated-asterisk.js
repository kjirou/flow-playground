// @flow

/**
 * これを .flowconfig に設定したら、
 * https://github.com/facebook/flow/blob/39968bcd1f5badccfd4303b2245a88203fa49377/tests/deprecated_type/.flowconfig
 *
 *
 * こういう風に * をエラーにしてくれるのかと思ったら、
 * https://github.com/facebook/flow/blob/39968bcd1f5badccfd4303b2245a88203fa49377/tests/deprecated_type/deprecated_type.exp
 *
 * 理由不明だけど No errors になっちゃう。
 * 未解決だけどいいやで放置
 */

let s1: string = 'a';
let s2: * = 'b';

function foo(a: *) {
  return a;
}

foo(1);
