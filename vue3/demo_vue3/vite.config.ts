import path from 'path'
import vue from "@vitejs/plugin-vue"
export default {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'components': path.resolve(__dirname, './src/components'),
    },
  },
  plugins: [
    vue(),
  ]
};
