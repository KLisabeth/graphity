const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/graphity/'
    : '/',
  outputDir: 'docs',
  transpileDependencies: [] // Set to true if you want to transpile all dependencies
});
