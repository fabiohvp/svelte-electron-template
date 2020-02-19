const autoPreprocess = require("svelte-preprocess");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = (env, argv) => {
  const prod = argv.mode === "production";

  return {
    devServer: {
      writeToDisk: true
    },
    node: {
      __dirname: false,
      __filename: false
    },
    entry: {
      bundle: ["./src/main.js"]
    },
    output: {
      path: __dirname + "/public",
      filename: "[name].js",
      chunkFilename: "[name].[id].js"
    },
    resolve: {
      alias: {
        svelte: path.resolve("node_modules", "svelte")
      },
      extensions: [".mjs", ".js", ".svelte", ".html"],
      mainFields: ["svelte", "browser", "module", "main"]
    },
    module: {
      rules: [
        {
          test: /\.svelte$/,
          use: {
            loader: "svelte-loader",
            options: {
              dev: !prod,
              hotReload: !prod,
              immutable: true,
              emitCss: true,
              preprocess: autoPreprocess({
                postcss: true
              })
            }
          }
        },
        {
          test: /\.(ttf|eot|svg|gif|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [
            {
              loader: "file-loader"
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            { loader: "css-loader", options: { importLoaders: 1 } },
            "postcss-loader"
          ]
        }
      ]
    },
    mode: argv.mode,
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css"
      })
    ],
    devtool: prod ? false : "source-map"
  };
};
