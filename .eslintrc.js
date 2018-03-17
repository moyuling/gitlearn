module.exports = {
  "root": true,
  "extends": [
    "plugin:prettier/recommended", "airbnb-base"
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
    "es6": true
  },
  "rules": {

  }
};
