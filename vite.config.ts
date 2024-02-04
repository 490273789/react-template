import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, normalizePath } from "vite";
import stylelint from "vite-plugin-stylelint";

const variablePath = normalizePath(path.resolve("./src/style/variable.scss"));
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), stylelint({ fix: true })],
  css: {
    modules: {
      // name 表示当前文件名，local 表示类名
      generateScopedName: "[name]__[local]__[hash:base64:5]"
    },
    preprocessorOptions: {
      scss: {
        // additionalData的内容会在每个scss文件的开头自动注入
        additionalData: `@import "${variablePath}";`
      }
    }
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "src")
    }
  },
  server: {
    host: "0.0.0.0"
    // proxy: {
    //   '/api': {
    //     target: env.VITE_PROXY_URL,
    //     changeOrigin: true
    //     // rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  }
});
