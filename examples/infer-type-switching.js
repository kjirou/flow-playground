// @flow

type Foo = {
  p1: number,
  p2: string,
}

function updateFoo(foo: Foo, key: 'p1' | 'p2', rawValue: string) {
  // `==` だと判定してくれない
  if (key === 'p1') {
    foo[key] = parseInt(rawValue, 10);
  } else if (key === 'p2') {
    foo[key] = rawValue;
  }
}
