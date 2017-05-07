export default {
  invalid: [
    {
      code: [
        'const a = 100;',
        'const b = 101;',
        'const aa = {name: "name"};',
        'function a(){',
        '  const a=100;',
        '  const b=a;',
        '}',
        'function b(){',
        '  const a=20;',
        '  const b=a;',
        '}',
      ].join('\n'),
      options: [],
      errors: [{ message: '100 is already assigned to another variable, in 2 times.' }],
    },
    {
      code: 'const a="200",b=200,c=200;',
      errors: [{ message: '200 is already assigned to another variable, in 2 times.' }],
    },
  ],
  valid: [
    {
      code: 'const a="150",b=150,c=155;',
    },
    {
      code: 'const a="250",b=250,\nc=350;\nlet al=250,bl=350;',
    },
  ],
};
