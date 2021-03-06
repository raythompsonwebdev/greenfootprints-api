
module.exports = {
  "root": true,
  "env": {
      "browser": true,
      "es6": true,
      "node": true,
      "mocha": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "rules": {
    "no-console": 1
  }
};

