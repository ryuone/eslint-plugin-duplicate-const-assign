module.exports = {
  extends: ['canonical', 'plugin:flowtype/recommended'],
  "globals": {
    "console": true,
  },
  'rules': {
    'babel/object-curly-spacing': ["error", "always"],
    'comma-dangle': ["error", "always-multiline"],
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "ignore",
      "asyncArrow": "always"
    }],
    "filenames/match-regex": [2, "^[a-z_-]+$", false],
    "sort-keys": "off",
    "no-console": "off",
    "no-duplicate-imports": "off",
    "lines-around-comment": "off",
    "newline-after-var": "off"
  },
  "plugins": [
    "flowtype"
  ],
};