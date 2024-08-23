const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  devServer: {
    port: 1330,
    host: '0.0.0.0',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    /** 解决webpack项目本地调试 使用自定义域名:1330打开项目报：Invalid Host header✔ */
    // disableHostCheck: true,
  },
  transpileDependencies: true
})
