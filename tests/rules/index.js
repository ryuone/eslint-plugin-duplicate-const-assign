import { RuleTester } from 'eslint';
import plugin from '../../src';

const ruleTester = new RuleTester();
const reportingRules = [
  'duplicate-const-assign',
];

const parser = require.resolve('babel-eslint');

for (const ruleName of reportingRules) {
  /* eslint-disable global-require, import/no-dynamic-require */
  const assertions = require('./assertions/' + ruleName).default;
  /* eslint-enable global-require, import/no-dynamic-require */

  assertions.invalid = assertions.invalid.map((assertion) => {
    assertion.parser = parser;

    return assertion;
  });

  assertions.valid = assertions.valid.map((assertion) => {
    assertion.parser = parser;

    return assertion;
  });

  ruleTester.run(ruleName, plugin.rules[ruleName], assertions);
}
