// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // add your custom rules here
  'rules': {
    // warn about unused variables, rather than erroring
    'no-unused-vars': 1
  }
}
