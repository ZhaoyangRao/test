(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{149:function(n,e,s){"use strict";s.r(e);var i=s(0),a=Object(i.a)({},(function(){var n=this,e=n.$createElement,s=n._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h2",{attrs:{id:"vuecli4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuecli4"}},[n._v("#")]),n._v(" vuecli4")]),n._v(" "),s("h4",{attrs:{id:"之前项目一直还在用vuecli-2的，最近听说vuecli-4发布了，今天上午就去官网看了一遍，顺便写了一下，封装了一下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#之前项目一直还在用vuecli-2的，最近听说vuecli-4发布了，今天上午就去官网看了一遍，顺便写了一下，封装了一下"}},[n._v("#")]),n._v(" 之前项目一直还在用vuecli-2的，最近听说vuecli-4发布了，今天上午就去官网看了一遍，顺便写了一下，封装了一下")]),n._v(" "),s("h4",{attrs:{id:"cli4把config以及webpack的那些文件干掉了，有自定义的配置，就在外目录新建一个vue-config-js，我这里把以前在项目中常用到的一些webpack插件（压缩gzip-压缩图片，显示文件体积分布等等），以及打包文件进行版本控制等，反正以前基本会用到的我都大致简单的进行了封装迁移到了vue-config-js，基本可以直接拿去用了（其中不排除也有可能在cli4有更简单的实现，或者不需要再另外装插件能解决的，也欢迎指出）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli4把config以及webpack的那些文件干掉了，有自定义的配置，就在外目录新建一个vue-config-js，我这里把以前在项目中常用到的一些webpack插件（压缩gzip-压缩图片，显示文件体积分布等等），以及打包文件进行版本控制等，反正以前基本会用到的我都大致简单的进行了封装迁移到了vue-config-js，基本可以直接拿去用了（其中不排除也有可能在cli4有更简单的实现，或者不需要再另外装插件能解决的，也欢迎指出）"}},[n._v("#")]),n._v(" cli4把config以及webpack的那些文件干掉了，有自定义的配置，就在外目录新建一个vue.config.js，我这里把以前在项目中常用到的一些webpack插件（压缩gzip,压缩图片，显示文件体积分布等等），以及打包文件进行版本控制等，反正以前基本会用到的我都大致简单的进行了封装迁移到了vue.config.js，基本可以直接拿去用了（其中不排除也有可能在cli4有更简单的实现，或者不需要再另外装插件能解决的，也欢迎指出）")]),n._v(" "),s("h4",{attrs:{id:"下面就是vue-config-js文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下面就是vue-config-js文件"}},[n._v("#")]),n._v(" 下面就是vue.config.js文件")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("const CompressionPlugin = require('compression-webpack-plugin')\nconst BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin\nconst webpack = require('webpack')\n//打包的版本号\nprocess.env.VUE_APP_Version = '0.0.0'\n//时间戳\nconst Timestamp = new Date().getTime();\n//API_ROOT,用来打包\nif (process.env.NODE_ENV === 'development') {\n    process.env.VUE_APP_API_ROOT = '/api'\n} else {\n    process.env.VUE_APP_API_ROOT = '/api'\n}\n\n//自定义常用的meta处理一些webpack插件是否开启的变量\nconst META = {\n    //是否开启生产环境压缩js css代码,默认关闭\n    productionGzip: false,\n    //是否开启端口可视化文件占比显示 默认端口8082，默认开启\n    bundleAnalyzerReport: true,\n    //是否开启webpack 的性能提示，默认关闭\n    webpackWarn: false,\n    //是否开启 preload 插件，默认关闭\n    preloadOpen: false,\n    //是否开启 prefetch 插件，默认关闭\n    prefetchOpen: false\n}\n\nmodule.exports = {\n    // 基本路径,部署应用包时的基本 URL。用法和 webpack 本身的 output.publicPath 一致,如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/。\n    publicPath: '/',\n    // 输出文件目录 build 时生成的生产环境构建文件的目录\n    outputDir: 'dist',\n    //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。\n    assetsDir: '',\n    //指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。\n    indexPath: 'index.html',\n    //生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存\n    filenameHashing: true,\n    // eslint-loader 是否在保存的时候检查 ，\n    lintOnSave: false,\n    //是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。\n    runtimeCompiler: true,\n    //默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来\n    transpileDependencies: [],\n    // 生产环境是否生成 sourceMap 文件\n    productionSourceMap: false,\n    //在生成的 HTML 中的 <link rel=\"stylesheet\"> 和 <script> 标签上启用 Subresource Integrity (SRI)。如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。\n    integrity: false,\n    // webpack配置\n    chainWebpack: config => {\n        // 解决ie9兼容ES6\n        config.entry('main').add('babel-polyfill')\n        // url-loader 文件大小低于指定的限制时，可返回 DataURL，即base64\n        const imagesRule = config.module.rule(\"images\")\n        imagesRule\n            .use('url-loader')\n            .loader('url-loader')\n            .tap(options => Object.assign(options, {\n                limit: 6144\n            }))\n\n        // 开启js、css压缩\n        if (process.env.NODE_ENV === 'production') {\n            if (META.productionGzip) {\n                config.plugin('compressionPlugin')\n                    .use(new CompressionPlugin({\n                        filename: '[path].gz[query]',\n                        algorithm: 'gzip',\n                        test: /\\.js$|\\.html$|.\\css/, // 匹配文件名\n                        threshold: 10240, // 对超过10k的数据压缩\n                        deleteOriginalAssets: false // 不删除源文件\n                    }))\n            }\n            // 移除 prefetch 插件\n            if (!META.prefetchOpen) {\n                config.plugins.delete('prefetch')\n            }\n            // 移除 preload 插件\n            if (!META.preloadOpen) {\n                config.plugins.delete('preload');\n            }\n        }\n\n    },\n    configureWebpack: config => {\n        config.plugins.push(new webpack.ProvidePlugin({\n            $: \"jquery\",\n            jQuery: \"jquery\",\n            \"window.jQuery\": \"jquery\",\n        }))\n        //        config.plugins.push(new MiniCssExtractPlugin({\n        //            // 修改打包后css文件名\n        //            filename: `css/[name].${process.env.VUE_APP_Version}.${Timestamp}.css`,\n        //            chunkFilename: `css/[name].${process.env.VUE_APP_Version}.${Timestamp}.css`\n        //        }))\n        //关闭 webpack 的性能提示\n        if (!META.webpackWarn) {\n            config.performance = {\n                hints: false\n            }\n        }\n\n        if (META.bundleAnalyzerReport) {\n            config.plugins.push(new BundleAnalyzerPlugin({\n                analyzerHost: '127.0.0.1',\n                analyzerPort: 8082,\n            }))\n        }\n\n        if (process.env.NODE_ENV === 'production') {\n            // 为生产环境修改配置...\n            // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】\n            config.output.filename = `js/[name].${process.env.VUE_APP_Version}.${Timestamp}.js`;\n            config.output.chunkFilename = `js/[name].${process.env.VUE_APP_Version}.${Timestamp}.js`\n            //console.log/info/debug,在生产环境需要去掉这些console\n            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true\n        } else {\n            // 为开发环境修改配置...\n        }\n    },\n\n    // css相关配置\n    css: {\n        // 是否使用css分离插件 ExtractTextPlugin,同时加上版本号呀\n        extract: {\n            filename: `css/[name].${process.env.VUE_APP_Version}.${Timestamp}.css`,\n            chunkFilename: `css/[name].${process.env.VUE_APP_Version}.${Timestamp}.css`\n        },\n        // 开启 CSS source maps?设置为 true 之后可能会影响构建的性能\n        sourceMap: false,\n        // css预设器配置项\n        loaderOptions: {\n            css: {\n                // 这里的选项会传递给 css-loader\n            },\n            postcss: {\n                // 这里的选项会传递给 postcss-loader\n            }\n        },\n        // 启用 CSS modules for all css / pre-processor files.\n        requireModuleExtension: true\n    },\n    //是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建\n    parallel: require('os').cpus().length > 1,\n    pwa: {},\n    // webpack-dev-server 相关配置\n\n    devServer: {\n        open: true, //配置自动启动浏览器\n        host: 'localhost',\n        port: 8080, // 端口号\n        https: false,\n        hotOnly: false, // https:{type:Boolean}\n        proxy: { // 配置跨域\n            '/api': {\n                target: 'http://imge.kugou.com/',\n                changeOrigin: true, //改变源\n                ws: true, //是否代理websockets\n                pathRewrite: {\n                    '^/api': ''\n                }\n            },\n            //            '/foo': {\n            //                target: '<other_url>'\n            //            }\n        }, // 配置跨域处理,只有一个代理\n        before: app => {}\n    },\n    // 第三方插件配置\n    pluginOptions: {}\n}\n\n")])])]),s("h4",{attrs:{id:"这是完整的包github地址，其中也引入了其它的ui库，由于这个以前是移动端h5的一个框架，所以里面也做了rem-fastclick-以及进入或者刷新空白界面的loadingcss特效效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#这是完整的包github地址，其中也引入了其它的ui库，由于这个以前是移动端h5的一个框架，所以里面也做了rem-fastclick-以及进入或者刷新空白界面的loadingcss特效效果"}},[n._v("#")]),n._v(" 这是完整的包github地址，其中也引入了其它的ui库，由于这个以前是移动端h5的一个框架，所以里面也做了rem,fastclick,以及进入或者刷新空白界面的loadingcss特效效果")]),n._v(" "),s("p",[n._v("https://github.com/ZhaoyangRao/vuecli4-webapp.git")])])}),[],!1,null,null,null);e.default=a.exports}}]);