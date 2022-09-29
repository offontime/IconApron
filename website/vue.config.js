module.exports = {
  // 修改默认的入口
  devServer: {
    port: 9000
  },
  chainWebpack: config => {
    // 用于解析 md 文件
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('md-loader')
      .loader('./md-loader/index.js')
      .end()
  }
}
