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
const x1/*:X*/ = { x: 1 };
// Bad
//const x2/*:X*/ = { y: 2 };


// Good
const xOrY1/*:XOrY*/ = { x: 1, z: 1 };
const xOrY2/*:XOrY*/ = { y: 2, z: 1 };
// Bad
//const xOrY3/*:XOrY*/ = { z: 1 };


// Good
const xAndY1/*:XAndY*/ = { x: 1, y: 2 };
const xAndY2/*:XAndY*/ = { x: 1, y: 2, z: 3 };
// Bad
//const xAndY3/*:XAndY*/ = { x: 1, z: 3 };


type Unit = { hp: number };
type CreatureUnit = { job: string|null } & Unit;
type FighterUnit = { job: 'fighter' } & Unit;
type MageUnit = { job: 'mage' } & Unit;

// Good
({ hp: 1, job: null }: CreatureUnit);
({ hp: 1, job: 'none' }: CreatureUnit);
// Bad
//({ hp: 1, job: 2 }: CreatureUnit);

// Good
({ hp: 1, job: 'fighter' }: FighterUnit);
({ hp: 1, job: 'fighter' }: CreatureUnit);
// Bad
//({ hp: 1, job: 'fighter' }: MageUnit);
