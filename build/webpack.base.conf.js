"use strict";
const path = require("path");
const utils = require("./utils");
const config = require("../config");
const vueLoaderConfig = require("./vue-loader.conf");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: "eslint-loader",
  enforce: "pre",
  include: [resolve("src"), resolve("test")],
  options: {
    formatter: require("eslint-friendly-formatter"),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
});

module.exports = {
  context: path.resolve(__dirname, "../"),
  entry: {
    app: "./src/main.js" //打包入口
  },
  output: {
    // bundle 文件路径
    path: config.build.assetsRoot,
    // bundle 文件名称 【只有这里和开发环境不一样】
    filename: "[name].js",
    // 部署到服务器
    // https://juejin.cn/post/6844903939402383373
    publicPath:
      process.env.NODE_ENV === "production"
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath
  },
  resolve: {
    //用户引入模块时不带扩展名,
    // 那么 webpack 就会按照 extensions 配置的数组从左到右的顺序去尝试解析模块
    extensions: [".js", ".vue", ".json", ".scss", "..."],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": resolve("src"),
      api: resolve("src/api"),
      mixins: resolve("src/assets"),
      utils: resolve("src/assets/utils")
    }
  },
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: vueLoaderConfig
      },
      /**
       * babel-loader 使用 Babel 加载 ES2015+ 代码并将其转换为 ES5
       */
      {
        test: /\.js$/,
        loader: "babel-loader",
        /**
         * include：符合条件的模块进行解析
         * exclude：排除符合条件的模块，不解析
         * exclude 优先级更高
         */
        include: [
          resolve("src"),
          resolve("test"),
          resolve("node_modules/webpack-dev-server/client")
        ]
      },
      /**
       * url-loader当图片小于 limit 值的时候，会将图片转为 base64 编码
       * 大于 limit 值的时候依然是使用 file-loader 进行拷贝
       */
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("img/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("media/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("fonts/[name].[hash:7].[ext]")
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty"
  }
};
