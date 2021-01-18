'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    proxyTable: {
      "/api": {
        target: "https://pikbest.com",
        changeOrigin: true,
        ws: true,
        onProxyReq: function(proxyReq) {
          proxyReq.setHeader(
            "Cookie",
            "_ga=GA1.2.2001666479.1603188516; __gads=ID=0f488abd42c4e82d-222860644fc400a1:T=1603188543:RT=1603188543:S=ALNI_MaEdoGwiahamGXI0iRs-a0xbfAT8w; head_375144=https%3A%2F%2Flh3.googleusercontent.com%2F-XdUIqdMkCWA%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2F4252rscbv5M%2Fphoto.jpg; bind_account_375144=EMAIL; head_3828628=https%3A%2F%2Flh3.googleusercontent.com%2F-gWsJZwv-EeE%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2FAMZuucnPB68b1Jf465AyOyFk-qQ4styp3Q%2Fs96-c%2Fphoto.jpg; bind_account_3828628=GOOGLE; head_2938201=https%3A%2F%2Flh3.googleusercontent.com%2F-XdUIqdMkCWA%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2F4252rscbv5M%2Fphoto.jpg; bind_account_2938201=EMAIL; head_4710230=https%3A%2F%2Flh3.googleusercontent.com%2F-XdUIqdMkCWA%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2F4252rscbv5M%2Fphoto.jpg; bind_account_4710230=EMAIL; head_3881921=https%3A%2F%2Flh3.googleusercontent.com%2F-XdUIqdMkCWA%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2F4252rscbv5M%2Fphoto.jpg; bind_account_3881921=EMAIL; head_5363569=https%3A%2F%2Flh3.googleusercontent.com%2F-XdUIqdMkCWA%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2F4252rscbv5M%2Fphoto.jpg; bind_account_5363569=EMAIL; head_5355458=https%3A%2F%2Flh3.googleusercontent.com%2F-XdUIqdMkCWA%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2F4252rscbv5M%2Fphoto.jpg; bind_account_5355458=EMAIL; bind_account_4967943=FACEBOOK; head_3019289=https%3A%2F%2Flh3.googleusercontent.com%2F-XdUIqdMkCWA%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2F4252rscbv5M%2Fphoto.jpg; bind_account_3019289=EMAIL; head_4967943=https%3A%2F%2Fplatform-lookaside.fbsbx.com%2Fplatform%2Fprofilepic%2F%3Fasid%3D809354099492977%26height%3D50%26width%3D50%26ext%3D1607740146%26hash%3DAeR26CasoDHXofRtq_k; head_5063317=https%3A%2F%2Flh3.googleusercontent.com%2F-XdUIqdMkCWA%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2F4252rscbv5M%2Fphoto.jpg; bind_account_5063317=EMAIL; last_login_channel=email; head_6167760=https%3A%2F%2Flh3.googleusercontent.com%2F-XdUIqdMkCWA%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2F4252rscbv5M%2Fphoto.jpg; bind_account_6167760=EMAIL; head_5121066=https%3A%2F%2Flh3.googleusercontent.com%2F-XdUIqdMkCWA%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2F4252rscbv5M%2Fphoto.jpg; bind_account_5121066=EMAIL; best_id=44; best_name=%E8%B0%AD%E4%BA%8E%E7%A3%8A; head_6345209=https%3A%2F%2Flh3.googleusercontent.com%2F-XdUIqdMkCWA%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2F4252rscbv5M%2Fphoto.jpg; bind_account_6345209=EMAIL; head_6345417=https%3A%2F%2Flh3.googleusercontent.com%2F-XdUIqdMkCWA%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2F4252rscbv5M%2Fphoto.jpg; bind_account_6345417=EMAIL; head_6345653=https%3A%2F%2Flh3.googleusercontent.com%2F-XdUIqdMkCWA%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2F4252rscbv5M%2Fphoto.jpg; bind_account_6345653=EMAIL; access_token=best_5fd199588b80c; _gid=GA1.2.1270169229.1607911313; bt_guid=3316331c1af69636121e4a4baec7b684; free-design-sp=5; country=0f0756d4534c2aade93b99db0f04ea91; affiliate_id_2938201=0; affiliate_id_3019289=6; auth_id=375144%7C%E7%AD%89%E9%A3%8E%E4%B9%9F%E7%AD%89%E4%BD%A0%7C1616736845%7Ce19e5a838365ddb7fda3d73711292c43; sns=think%3A%7B%22type%22%3A%22email%22%2C%22token%22%3A%221002353363%2540qq.com%22%7D; affiliate_id_375144=2; ga_375144=null; sign=null"
          );
        },
        pathRewrite: {
          "^/api": ""
        }
      }
    },

    // Various Dev Server settings
    host: "localhost", // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: "cheap-module-eval-source-map",

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, "../dist/index.html"),

    // Paths
    assetsRoot: path.resolve(__dirname, "../dist"),
    assetsSubDirectory: "",
    assetsPublicPath: "https://js.pikbest.com/best/spa/",

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: "#source-map",

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ["js", "css"],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
};
