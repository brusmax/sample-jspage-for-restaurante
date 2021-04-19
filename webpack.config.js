const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Inyecta CSS al DOM con la etiqueta <style>
            loader: 'style-loader'
          },
          {
            // Interpreta @import y url() como import/require()
            loader: 'css-loader'
          },
          {
            // Loader de Webpack para procesar CSS con PostCSS
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                    {
                      // Options
                    },
                  ],
                ]
              },
            }
          },
          {
            // Carga un archivo Sass/Scss y lo compila a CSS
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
        },
      }
    ]
  }
};