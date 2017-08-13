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
