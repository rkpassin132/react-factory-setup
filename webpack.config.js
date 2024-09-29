module.exports = {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true, // Use source maps to map styles back to original SCSS files
                implementation: require('sass'), // Use Dart Sass implementation
              },
            },
          ],
        },
      ],
    },
  };
  