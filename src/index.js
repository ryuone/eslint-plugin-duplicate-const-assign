import duplicateConstAssign from './rules/duplicate-const-assign';

const configs = {
  recommended: {
    rules: {
      'duplicate-const-assign': 2,
    },
  },
};

const rules = {
  'duplicate-const-assign': duplicateConstAssign,
};

export default {
  rules,
  configs,
};
