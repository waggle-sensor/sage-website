module.exports = function () {
    return {
      name: 'ignore-html-loader',
      configureWebpack() {
        return {
          module: {
            rules: [
              {
                test: /\/static\/.*\.html$/,
                use: 'ignore-loader',
              },
            ],
          },
        }
      },
    }
  }
  