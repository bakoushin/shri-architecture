module.exports = {
  "extends": "yandex",
  "env": {
      "browser": true,
      "commonjs": true,
      "es6": true
  },
  "parserOptions": {
      "sourceType": "module"
  },
  "rules": {
      "indent": [
          "error",
          2,
          { "SwitchCase": 1 }
      ]
  }
};