// @flow

type U1 = {x: 1} | {x: 2, y: 2};
type U2 = {x: 1} | {x: 2, y: 2} | {y: 1};


function foo(x: $PropertyType<U1, 'x'>) {
}

// OK
foo(1);
foo(2);
// NG
//foo(3);
//foo(undefined);


function bar(x: $PropertyType<U2, 'x'>) {
}

// OK
bar(1);
bar(2);
// NG
//bar(3);
//bar(undefined);
