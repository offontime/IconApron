/**
 * TODO: 区分环境 —— REACT_APP_ENV
 * - whenDev ☞ process.env.REACT_APP_ENV === 'development'
 * - whenTest ☞ process.env.REACT_APP_ENV === 'test'
 * - whenProd ☞ process.env.REACT_APP_ENV === 'production'
 */
const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require('@craco/craco')
const { HotModuleReplacementPlugin, IgnorePlugin } = require('webpack')
const path = require('path')

// 开发环境
const WebpackBar = require('webpackbar') // 打包进度条 (下载量最多)
const CircularDependencyPlugin = require('circular-dependency-plugin') // 检查循环依赖
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin') // react 热刷新 (还依赖 react-refresh )

// 打包
const TerserPlugin = require('terser-webpack-plugin') // 压缩
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer') // 打包分析
const CompressionWebpackPlugin = require('compression-webpack-plugin') // 压缩为 zip
const DashboardPlugin = require('webpack-dashboard/plugin') // 美化打包分析界面

// 判断编译环境是否为生产
const isDev = process.env.REACT_APP_ENV === 'development'
const isProd = process.env.REACT_APP_ENV === 'production' || 'testing'
const resolve = (url) => path.join(__dirname, url)

// 获取自定义变量
// console.log(process.env.CUSTOM)

const webpackVariable = {
  port: 3000,
  host: '0.0.0.0',
  local: '127.0.0.1',
  protocol: 'http',
}

const isReactRefresh = isDev && true
const isNeedBundleAnalyzer = isProd && false

const devServerConfig = (devServerConfig, { env, paths, proxy, allowedHost }) => {
  const config = {
    port: webpackVariable.port,
    host: webpackVariable.host, // 域名
    server: webpackVariable.protocol,
    // open: `${webpackVariable.protocol}://${webpackVariable.local}:${webpackVariable.port}`, // ip:http://127.0.0.1:3000 或者 bool
    compress: true, // 启动gzip压缩
    https: false, // 允许访问开发服务器的服务列入白名单
    allowedHosts: 'all',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
    },

    // 开启支持vue的history模式,需要publicPath设置对（不能不设置，路径不能错误）
    // 对于history来说 返回的index.html但是是基于请求路径返回的内容,那么publicPath就基于当前请求过来的路径进行js文件请求，所以publicPath要设置为'/'
    historyApiFallback: true,
    static: {
      // 该配置项允许配置从目录提供静态文展示的选项
      directory: resolve('dist'),
      publicPath: ['/'],
      watch: {
        ignored: /^(?!D:\/soft\x2ddev\/code\/davinci\/camp\/src\/).+\/node_modules\//g,
      },
    },
    // 在浏览器中
    client: {
      progress: true, // 以百分比显示编译进度。
      logging: 'none',
      // 当出现编译错误或警告时，在浏览器中显示全屏覆盖。
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    //端口连接时执行函数
    onListening: (devServer) => {
      if (!devServer) throw new Error(`webpack-dev-server is not defined ${devServer.server.address().port}`)
    },
    proxy: {
      '/api': {
        target: 'https://placeholder.com/',
        changeOrigin: true,
        secure: false,
        xfwd: false,
      },
    },
  }

  return {
    ...devServerConfig,
    ...config,
    ...when(isReactRefresh, () => ({
      hot: true, //开启HMR功能，只重新打包更改的文件,没有 false
      // 监听文件
      watchFiles: {
        paths: ['src/**/*', 'public/**/*'],
        options: {
          usePolling: false, // 是否轮询
          ignored: '/node_modules/', // 忽略监视的文件
        },
      },
    })),
  }
}

module.exports = function ({ env }) {
  return {
    reactScriptsVersion: 'react-scripts',
    // 报错信息：Module not found: You attempted to import ... which falls outside of the project src/ directory. Relative imports outside of src/ are not supported.
    // 解决办法：禁用 ModuleScopePlugin 插件
    // style: {
    //   postcss: {
    //     mode: 'extends',
    //     loaderOptions: {
    //       postcssOptions: {
    //         ident: 'postcss',
    //         plugins: [
    //           [
    //             'postcss-pxtorem',
    //             {
    //               rootValue: 16, // 根元素字体大小
    //               // propList: ['width', 'height']
    //               propList: ['*'],
    //               exclude: /node_modules/i, //这里表示不处理node_modules文件夹下的内容
    //             },
    //           ],
    //         ],
    //       },
    //     },
    //   },
    // },
    plugins: [
      {
        plugin: {
          overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }) => {
            webpackConfig.resolve.plugins = webpackConfig.resolve.plugins.filter(
              (p) => p.constructor.name !== 'ModuleScopePlugin'
            )
            return webpackConfig
          },
        },
      },
    ],
    devServer: devServerConfig,
    webpack: {
      // 别名配置
      alias: {
        '@': resolve('src'),
        // 此处是一个示例，实际可根据各自需求配置
      },
      plugins: [
        // webpack构建进度条
        new WebpackBar({
          profile: true,
        }),

        // 新增模块循环依赖检测插件
        ...whenDev(
          () => [
            new CircularDependencyPlugin({
              exclude: /node_modules/,
              include: /src/,
              failOnError: true,
              allowAsyncCycles: false,
              cwd: process.cwd(),
            }),
            // webpack-dev-server 强化插件
            // new HotModuleReplacementPlugin(),
            new ReactRefreshWebpackPlugin(),

            new DashboardPlugin(),
          ],
          []
        ),
        ...when(isReactRefresh, () => [new HotModuleReplacementPlugin()], []),

        // 编译产物分析 : https://www.npmjs.com/package/webpack-bundle-analyzer
        ...when(
          isNeedBundleAnalyzer,
          () => [
            new BundleAnalyzerPlugin({
              analyzerMode: 'server',
              analyzerHost: '127.0.0.1',
              analyzerPort: 8888,
              openAnalyzer: true,
              reportFilename: path.resolve(__dirname, `analyzer/index.html`),
            }),
          ],
          []
        ),

        ...whenProd(
          () => [
            // 代码压缩
            new TerserPlugin({
              test: /\.js(\?.*)?$/i,
              parallel: true, //使用多进程并发运行以提高构建速度。 并发运行的默认数量： os.cpus().length - 1 。
              terserOptions: {
                ecma: undefined,
                sourceMap: false,
                parse: {},
                compress: {
                  arrows: false,
                  collapse_vars: false,
                  comparisons: false,
                  computed_props: false,
                  hoist_funs: false,
                  hoist_props: false,
                  hoist_vars: false,
                  inline: false,
                  loops: false,
                  negate_iife: false,
                  properties: false,
                  reduce_funcs: false,
                  reduce_vars: false,
                  switches: false,
                  toplevel: false,
                  typeofs: false,
                  booleans: true,
                  if_return: true,
                  sequences: true,
                  unused: true,
                  conditionals: true,
                  dead_code: true,
                  evaluate: true,
                  drop_console: true, // 生产环境下移除控制台所有的内容
                  drop_debugger: true, // 移除断点
                  pure_funcs: ['console.log'], // 生产环境下移除console
                },
                mangle: {
                  safari10: true,
                },
              },
            }),

            // 打压缩包
            new CompressionWebpackPlugin({
              algorithm: 'gzip',
              test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')/div>'),
              threshold: 1024,
              minRatio: 0.8,
            }),
          ],
          []
        ),

        new IgnorePlugin({
          resourceRegExp: /^\.\/locale$/,
          contextRegExp: /moment$/,
        }),
      ],

      // 重写 webpack 任意配置
      // - configure 能够重写 webpack 相关的所有配置，但是，仍然推荐你优先阅读 craco 提供的快捷配置，把解决不了的配置放到 configure 里解决；
      // - 这里选择配置为函数，与直接定义 configure 对象方式互斥；
      configure: (webpackConfig, { env, paths }) => {
        paths.appBuild = 'dist' // public 打包目录

        whenDev(() => {
          webpackConfig.devtool = 'source-map'
        }) // source-map

        // 文件输出配置
        webpackConfig.output = {
          ...webpackConfig.output,
          ...{
            filename: whenDev(() => 'static/js/bundle.js', 'static/js/bundle-[name].js'),
            chunkFilename: 'static/js/bundle-[name].js',
          },
          path: path.resolve(__dirname, 'dist'), // 修改输出文件目录
          publicPath: '/',
        }

        // 配置扩展扩展名
        webpackConfig.resolve.extensions = [...webpackConfig.resolve.extensions, ...['.scss', '.less']]

        webpackConfig.module.rules = [
          ...webpackConfig.module.rules,
          {
            // 相当于file-loader
            // asset 是自动在 asset/resource 和 asset/inline 中选择一个
            // asset/resource 是 文件
            // asset/inline 是 base 64 地址
            test: /\.json$/i, //字体文件
            type: 'asset/resource',
            generator: {
              // 输出文件位置以及文件名 contenthash:8
              filename: 'static/json/[name][ext]',
            },
          },
        ]

        whenProd(() => {
          // 打包缓存
          webpackConfig.cache = {
            ...webpackConfig.cache,
            type: 'filesystem', //保存位置，开发环境下默认为memory类型，生产环境 cache 配置默认是关闭的。
            // 生产环境下默认的缓存存放目录在 node_modules/.cache/webpack/default-production 中，如果想要修改，可通过配置 name，来实现分类存放。如设置 name: 'production-cache' 时生成的缓存
            name: 'production-cache',
            compression: 'gzip',
            cacheDirectory: resolve('node_modules/.cache/webpack'),
            buildDependencies: {
              config: [__filename], // webpack 和 loader是否失效来决定之前构建是否失效
            },
            version: '1.0',
          }

          // 代码分割
          // 一个ts文件、图片、less、pug等都是一个module，而打包后的产物，总的称呼就是bundle。
          // 对于打包产物bundle， 有些情况下，我们觉得太大了。 为了优化性能，比如快速打开首屏，利用缓存等，我们需要对bundle进行以下拆分，对于拆分出来的东西，我们叫它chunk。
          webpackConfig.optimization.splitChunks = {
            ...webpackConfig.optimization.splitChunks,
            chunks: 'all', //将什么类型的代码块用于分割，三选一： "initial"：入口代码块 | "all"：全部 | "async"：按需加载的代码块
            minSize: 20000, //大小超过30kb的模块才会被提取
            maxSize: 20000, //只是提示，可以被违反，会尽量将chunk分的比maxSize小，当设为0代表能分则分，分不了不会强制
            minChunks: 1, //某个模块至少被多少代码块引用，才会被提取成新的chunk
            maxAsyncRequests: 30, //分割后，按需加载的代码块最多允许的并行请求数
            maxInitialRequests: 30, //分割后，入口代码块最多允许的并行请求数
            automaticNameDelimiter: '~', //代码块命名分割符
            cacheGroups: {
              ...webpackConfig.optimization.cacheGroups,
              base: {
                // 基本框架
                name: 'react-core',
                chunks: 'all',
                test: /(react|react-dom|react-dom-router)/,
                priority: 2,
              },
              // 匹配node_modules中的三方库，将其打包成一个chunk(vendor第三方库的意思)
              libs: {
                name: 'chunk-vendor-libs',
                test: /[\\/]node_modules[\\/]/,
                priority: 1,
                chunks: 'all', // 只打包初始时依赖的第三方
                minSize: 10000,
                minChunks: 1, //重复引入了几次
              },
              commons: {
                test: resolve('src/components'), // 可以自定义您的规则
                chunks: 'all',
                minChunks: 2, // 将两个以上的chunk所共享的模块打包至commons组。
                name: 'commons',
                priority: 3,
                reuseExistingChunk: true, //是否复用已经从原代码块中分割出来的模块
              },
              default: {
                minChunks: 2, //覆盖外层的全局属性
                priority: 3,
                reuseExistingChunk: true, //是否复用已经从原代码块中分割出来的模块
              },
              styles: {
                name: 'styles',
                test: /\.css$/,
                chunks: 'all',
                enforce: true,
              },
            },
          }
        })

        // 返回重写后的新配置
        return webpackConfig
      },
    },
    babel: {
      presets: [],
      plugins: [],
      loaderOptions: (babelLoaderOptions, { env, paths }) => {
        return babelLoaderOptions
      },
    },
    eslint: {
      enable: isDev,
    },
  }
}
