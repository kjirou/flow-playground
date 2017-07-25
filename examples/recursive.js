// @flow

/**
 * 再帰的な型の定義は可能かで可能だった
 */

(() => {
  type Choices = {
    choices?: Choices | null,
    value: string,
  }[];

  // OK
  const choices: Choices = [
    {
      value: '1',
      choices: null,
    },
    {
      value: '2',
    },
    {
      value: '3',
      choices: [
        {
          value: '3-1',
          choices: [
            {
              value: '3-1-1',
            },
            {
              value: '3-1-2',
              choices: null,
              //choices: 1,
            },
          ],
        },
        {
          value: '3-2',
        },
      ]
    },
  ];
}).call();
