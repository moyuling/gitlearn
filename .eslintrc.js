module.exports = {
  "root": true,
  "parser": "babel-eslint",
  "extends": [
    "airbnb-base"
  ],
  "plugins": ["html"],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "node": true,
    "browser": true,
    "es6": true
  },
  "rules": {}
};
