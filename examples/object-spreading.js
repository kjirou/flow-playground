// @flow

//
// プロパティを足す場合は
//
// type X = {
//   a: number,
// };
//
// type Y = {
//   ...X,
//   b: number,
// };
//
// ...X の下に足したいプロパティを付与しないと足せない
//

type Unit = {
  hp: number,
};

type AllyUnit = {
  ...Unit,
  type: 'ALLY',
  mp: number,
};

// Good
const ally: AllyUnit = {
  type: 'ALLY',
  hp: 1,
  mp: 2,
};

// Bad
//const ally2: AllyUnit = {
//  type: 'ALLY',
//  hp: 'a',
//  mp: 2,
//};

// Bad
//const ally3: AllyUnit = {
//  type: 'ALLY',
//  hp: 1,
//  mp: 2,
//};

// Good! なんで!?
const ally4: AllyUnit = {
  type: 'ALLY',
  mp: 2,
};
