// @flow

type Unit = {
  hp: number,
  mp: number,
};

type AllyUnit = {
  ...Unit,
  type: 'ALLY',
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
//  type: 'ENEMY',
//  hp: 1,
//  mp: 2,
//};

// Bad
//const ally4: AllyUnit = {
//  hp: 1,
//  mp: 2,
//};

// Good
const ally5: AllyUnit = {
  type: 'ALLY',
  mp: 2,
};
