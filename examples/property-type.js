// @flow

type Props = {
  optional?: string | null,
};

type OptionalProp = $PropertyType<Props, 'optional'>;

('': OptionalProp);
(null: OptionalProp);
// OK: オプショナルには undefined が含まれる
(undefined: OptionalProp);
// NG
//(false: OptionalProp);


type Props2 = {
  optional?: string,
};

// NG: undefined はダメって言われる
//const foo = (a: string | undefined) => a;

// OK: a? になってるようである
const foo2 = (a: $PropertyType<Props2, 'optional'>) => a;
foo2();
foo2('str');
foo2(undefined);

// OK: これもいいのか..
const props2: Props2 = {};
foo2(props2.optional);

// NG:
//foo2(1);
