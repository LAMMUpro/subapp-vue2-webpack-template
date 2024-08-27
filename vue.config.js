const { defineConfig } = require('@vue/cli-service');
const CONSTS = require('./src/utils/CONSTS');

module.exports = defineConfig({
  /** 打包构建后的资源路径 */
  publicPath: `/${CONSTS.PREFIX_URL}/`,
  devServer: {
    port: CONSTS.PORT,
    host: '0.0.0.0',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    /** 解决webpack项目本地调试 使用自定义域名:1330打开项目报：Invalid Host header✔ */
    // disableHostCheck: true,
  },
  transpileDependencies: true,
  productionSourceMap: false,
  outputDir: './build'
});
