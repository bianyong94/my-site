const merge = require('webpack-merge')

module.exports= {
  baseUrl: '',
  // config 参数为已经解析好的 webpack 配置
  chainWebpack: config => {
    config.module
        .rule('images')
        .use('url-loader')
        .tap(options =>
            merge(options, {
              limit: 5120,
            })
        )
  },
  devServer: {
    open: true,// 是否自动打开
    host: '0.0.0.0', // 指定使用一个host，默认localhost
    port: 8080, // 端口地址
    https: false, // https提供服务
    // string | Object 代理设置
    proxy: {
      '/filmSearch': {
        target: 'https://api.mlwei.com/tv/api/',
        changeOrigin: true,
        pathRewrite: {'^/filmSearch': ''}
    }
    } 
  }
}