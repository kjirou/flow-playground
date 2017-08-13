// @flow

type Props = {
  optional?: string,
};

function foo(strOrUndefined?: string) {
  return strOrUndefined;
};


foo('abc');
foo();
foo(undefined);

const props1: Props = {
};
foo(props1.optional);

const props2: Props = {
  optional: 'abc',
};
foo(props2.optional);

const props3: Props = {
  optional: undefined,
};
foo(props3.optional);
