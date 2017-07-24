// @flow

/**
 * 配列の destructing による宣言に union で宣言するとバグのような挙動になる
 *
 * やや関係のあるIssue: https://github.com/facebook/flow/issues/3067
 */


// OK
const [value1]: ['A'] = ['A'];
const [value2_1]: ['A' | 'B'] = ['A'];
const [value2_2]: ['A' | 'B'] = ['B'];
//const [value2_3]: ['A' | 'B'] = ['C'];  // 期待通り NG
const value3_1: ['A'] | ['B'] = ['A'];
const value3_2: ['A'] | ['B'] = ['B'];
//const value3_3: ['A'] | ['B'] = ['C'];  // 期待通り NG

// NG
//const [value4]: ['A'] | ['B'] = ['A'];
/*
v0.51.0 でのエラーメッセージ

```bash
$flow
Error: examples/destructing-array-with-union-type-bug.js:61
 61: const [value4]: ['A'] | ['B'] = ['A'];
            ^^^^^^ string literal `A`. Expected string literal `B`, got `A` instead
 61: const [value4]: ['A'] | ['B'] = ['A'];
            ^^^^^^ string literal `B`

Error: examples/destructing-array-with-union-type-bug.js:61
 61: const [value4]: ['A'] | ['B'] = ['A'];
            ^^^^^^ string literal `B`. Expected string literal `A`, got `B` instead
 61: const [value4]: ['A'] | ['B'] = ['A'];
            ^^^^^^ string literal `A`


Found 2 errors
```
*/


//
// 関数の引数でも検証
// ・・・元のユースケースがそうだったので、読まなくて良い
//

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
