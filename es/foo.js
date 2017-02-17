// @flow

import { add, subtract } from './bar';

const added = add(1 ,2);
const subtracted = subtract(2 ,1);

export const x = added + subtracted;

export const calculate = (type: string, a: number, b: number) => {
  switch (type) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
  }

  throw new Error('Invalid type');
};
