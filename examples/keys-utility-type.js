// @flow

//
// https://flowtype.org/docs/utility-types.html#keyst
//

const JOBS = {
  FIGHTER: 'f',
  HEALER: 'h',
  MAGE: 'm',
};

/*::
type Job = $Keys<typeof JOBS>;
 */

// Good
const a/*:Job*/ = 'FIGHTER';
const b/*:Job*/ = 'HEALER';
const c/*:Job*/ = 'MAGE';

// Bad
//const ax/*:Job*/ = 'NONE';
//const av/*:Job*/ = 'f';
