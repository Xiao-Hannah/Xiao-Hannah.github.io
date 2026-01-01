const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
  const isProd = argv.mode === "production";

  return {
  entry: "./src/index.js",
  mode: isProd ? "production" : "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/images/[name].[ext]",
              publicPath: isProd ? "/" : "/dist/",
            },
          },
        ],
      },
      {
        test: /\.(pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/files/[name].[ext]",
              publicPath: isProd ? "/" : "/dist/",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext][query]",
        },
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx", ".ts", ".tsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: isProd ? "/" : "/dist/",
    filename: "bundle.js",
  },
  devServer: {
    static: path.join(__dirname, "public/"),
    devMiddleware: {
      publicPath: "/dist/",
    },
    port: 3000,
    hot: "only",
    historyApiFallback: {
      index: "/index.html",
      rewrites: [
        { from: /./, to: "/index.html" }
      ]
    },
  },
  watch: process.env.NODE_ENV === "development" && true,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: "public/index.html",
          to: "index.html",
          transform(content) {
            // In production, change bundle path from /dist/bundle.js to ./bundle.js
            const contentStr = content.toString();
            // Use webpack mode to determine if production
            const mode = process.argv.includes('--mode')
              ? process.argv[process.argv.indexOf('--mode') + 1]
              : 'development';
            if (mode === 'production') {
              return contentStr.replace('/dist/bundle.js', './bundle.js');
            }
            return contentStr;
          },
        },
        {
          from: "public",
          to: "",
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
  ],
  };
};
