module.exports = ({ file, options, env }) => ({
  parser: file.extname === '.sss' ? 'sugarss' : false,
  plugins: {
    'postcss-import': {
        root: file.dirname,
        plugins: [require("stylelint")()]
    },
    'postcss-cssnext': options.cssnext ? options.cssnext : false,
    'postcss-reporter': {
      clearReportedMessages: true
    },
  }
});
