// @flow

//
// Manual: https://flowtype.org/docs/union-intersection-types.html
//

type X = { x: number };

type XOrY = X | { y: number };

type XAndY = X & { y: number };

// Invalid
//type XAndYOverrided = XAndY & { y: string };
//const objXAndYOverrided/*:XAndYOverrided*/ = { x: 1, y: '1' };

// Good
const objX/*:X*/ = { x: 1 };
