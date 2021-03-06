/* eslint-disable no-useless-escape */
const webpack = require('webpack')
const { name, version } = require('./package')

// 增加环境变量
const moment = require('moment')
process.env.VUE_APP_NAME = name
process.env.VUE_APP_VERSION = version
process.env.VUE_APP_BUILD_TIME = moment().format('YYYY-M-D HH:mm:ss')

const { tag, branch, sha } = require('git-repo-info')()
process.env.VUE_APP_GIT_INFO = JSON.stringify({
  tag,
  branch,
  sha: sha && sha.slice(0, 7)
})

module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  productionSourceMap: false,
  css: {
    loaderOptions: {
      // 给 less-loader 传递选项
      less: {
        globalVars: require('./src/assets/less/variable')
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/)
    ],
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`
    }
  },
  devServer: {
    // historyApiFallback: true,
    disableHostCheck: true,
    compress: true, // 服务器返回浏览器的时候是否启动gzip压缩
    host: '0.0.0.0',
    hot: true, // 热加载
    open: true,
    inline: true, // 打包后加入一个websocket客户端
    overlay: true,
    proxy: {
      '^/api': {
        target: 'http://uat-api.jiahui.com',
        pathRewrite: { '^/api': '' },
        changeOrigin: true
      }
    }
  }
}
