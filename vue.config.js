module.exports = {
  // publicPath: './',
  // assetsDir: './',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/_variables.scss";
        `
      }
    }
  }
};
