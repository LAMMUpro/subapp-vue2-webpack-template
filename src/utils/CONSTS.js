/**
 * 静态常量，node环境下也可使用
 */
/** vue2中需要用module.exports的写法（兼容vue.config.js使用require导入） */
module.exports = {
  /** 路由前缀，用于router/打包路径/判断url是否为本应用页面 */
  PREFIX_URL: 'vue2',
  /** 必须以micro-app-开头，不允许大写字母 */
  microAppTagName: 'micro-app-vue2',
  /** 文档标题前缀 */
  PREFIX_DOCUMENT_TITLE: '管理后台',
  /** 启动端口号 */
  PORT: 1330,
  /** 子应用路由name前缀, 子应用路由name统一为`${前缀}${子应用name}` */
  subAppRouteNamePrefix: 'subApp_',
};
