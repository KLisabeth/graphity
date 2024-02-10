import { defineConfig } from '@vue/cli-service'
export default defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/graphity/'
    : '/',
  transpileDependencies: true
})
