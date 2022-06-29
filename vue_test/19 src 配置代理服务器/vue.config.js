const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, /*关闭语法检查*/

  //开启代理服务器（方式一）
  /*  devServer: {
      //内部书写需要真实请求的服务器的url
      proxy: 'http://localhost:5000'
    }*/

  //开启代理服务器（方式二）
  devServer: {
    proxy: {
      //根据请求前缀决定是否通过代理服务器
      '/hit': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/hit':''},
        ws: true,//支持websocket技术
        changeOrigin: true//代理服务器是否告知服务器真实的端口名
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/demo':''},
        ws: true,//支持websocket技术
        changeOrigin: true//代理服务器是否告知服务器真实的端口名
      }
    }
  }
})
