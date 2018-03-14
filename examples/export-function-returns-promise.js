// @flow

//
// 0.67.1 で
// exprot function が Promise インスタンスを返す時に推論が効かない問題
//

// OK: Promise インスタンスを返すが export していない
function foo() {
  return Promise.resolve();
};

// OK: export しているが Promise インスタンスを返していない
export function bar() {
  return 1;
};

// OK: 推論させない
export function baz2(): Promise<any> {
  return Promise.resolve();
};

// NG: export していて Promise インスタンスを返しているのを推論できない
//export function baz1() {
//  return Promise.resolve();
//};

// NG: わざと異なる型を指定すると、ちゃんと怒られる
//
// Cannot return Promise.resolve() because Promise [1] is incompatible with String [2].
//
//export function baz3(): String {
//  return Promise.resolve();
//};
