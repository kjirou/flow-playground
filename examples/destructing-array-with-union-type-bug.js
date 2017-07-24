// @flow

/**
 * 配列の destructing による宣言に union で宣言するとバグのような挙動になる
 *
 * やや関係のあるIssue: https://github.com/facebook/flow/issues/3067
 */

// OK
const fn1 = ([v]: ['A']): 'A' => v;
fn1(['A']);

// OK
const fn2 = ([v]: ['A' | 'B']): 'A' | 'B' => v;
fn2(['A']);
fn2(['B']);

// OK
const fn3 = (v: ['A'] | ['B']): 'A' | 'B' => v[0];
fn3(['A']);
fn3(['B']);

// NG: 宣言だけでエラーになる
//const fnNg = ([v]: ['A'] | ['B']): 'A' | 'B' => v;
/*
0.51.0 でのエラー出力

```
Error: examples/union-two-literal-arrays.js:24
 24: const fnNg = ([v]: ['A'] | ['B']): 'A' | 'B' => v;
                    ^ string literal `A`. Expected string literal `B`, got `A` instead
 24: const fnNg = ([v]: ['A'] | ['B']): 'A' | 'B' => v;
                    ^ string literal `B`

Error: examples/union-two-literal-arrays.js:24
 24: const fnNg = ([v]: ['A'] | ['B']): 'A' | 'B' => v;
                    ^ string literal `B`. Expected string literal `A`, got `B` instead
 24: const fnNg = ([v]: ['A'] | ['B']): 'A' | 'B' => v;
                    ^ string literal `A`


Found 2 errors
```
*/
