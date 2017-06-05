// @flow

const React = require('react');


/**
 * https://flow.org/en/docs/frameworks/react/#toc-adding-types-for-react-component-state
 *
 * を見たら、"state = {}" という謎のクラスプロパティ記法があったので、これ正しいのかと
 *
 * 実行してみたら、両方通るので、flow 上では正しいとされてそう。
 * 一方で、当然だけど node だと落ちる。
 */

class MyComponent extends React.Component {
  state = {
    foo: 1,
    bar: true,
    baz: 'three',
  };
}

class MyComponent2 extends React.Component {
  static state = {
    foo: 1,
    bar: true,
    baz: 'three',
  };
}
