var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: {
    // admin: './src/components/admin-controller.js'
    main: "./src/components/main.js"
    //  board: './src/components/board.js',
    //  index: './src/components/router/index.js',
    //  proj: './src/project.js',
    //  stat: './src/stat.js',
    //  scmngt: './src/schedulemngt.js',
    //  orzchart: './src/organizationchart.js',

    //erp: './src/erp.js',
  },
  devServer: {
    port: 2000,
    // proxy: {
    //     '/question': {
    //         "target": 'http://localhost:8081',
    //         "ws": true,
    //         "secure": false,
    //         "changeOrigin": true
    //     }
    // }
    proxy: {
      "/question": {
        target: "http://localhost:8090",
        secure: false
      },
      "/answer": {
        target: "http://localhost:8090",
        secure: false
      },
      "/map": {
        target: "http://localhost:8090",
        secure: false
      }
    }
  },
  // chainWebpack: config => {
  // config.module.rules.delete('eslint');
  // },

  output: {
    path: path.resolve(__dirname, "./dist/"),
    publicPath: "/vue-controller/",
    filename: "[name]-controller.min.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.sass$/,
        use: ["vue-style-loader", "css-loader", "sass-loader?indentedSyntax"]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            scss: ["vue-style-loader", "css-loader", "sass-loader"],
            sass: [
              "vue-style-loader",
              "css-loader",
              "sass-loader?indentedSyntax"
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]"
        }
      }
    ]
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    },
    extensions: ["*", ".js", ".vue", ".json"]
  },
  // devServer: {
  //   historyApiFallback: true,
  //   noInfo: true,
  //   overlay: true
  // },
  performance: {
    hints: false
  },
  devtool: "#eval-source-map"
};

if (process.env.NODE_ENV === "production") {
  module.exports.devtool = "#source-map";
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: false
    })
  ]);
}
