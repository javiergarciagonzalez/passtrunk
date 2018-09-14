const autoPrefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoPrefixer({
      browsers: ['> 1%', 'last 2 versions', 'Android 4', 'ios >= 8']
    })
  ]
};
