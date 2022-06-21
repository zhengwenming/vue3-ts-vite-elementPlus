
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require("path");
interface ENV_PATH {
  env:string,
  baseUrl: string;
  baseUrl_hms: string;
  baseLink_hms: string;
}


let ENV_PATH: ENV_PATH | null = null;
switch (process.env.VUE_APP_API_ENV) {
  case "dev":
    ENV_PATH = {
      env:'dev',
      baseUrl: "/gateway",
      baseUrl_hms: "http://api.aixinhealthmanage.com:8080/api/aijkang/v2",
      baseLink_hms: "https://medical-dev.aixin-ins.net/hm",
    };
    break;
  case "uat":
    ENV_PATH = {
      env:'uat',
      baseUrl: "/gateway",
      baseUrl_hms: "http://api.aixinhealthmanage.com:8080/api/aijkang/v2",
      baseLink_hms: "https://medical-uat.aixin-ins.net/hm",
    };
    break;
  case "prd":
    ENV_PATH = {
      env:'prd',
      baseUrl: "/gateway",
      baseUrl_hms: "/hm/api/aijkang/v2",
      baseLink_hms: "https://medical.aixin-life.net/health",
    };
    break;
  default:
    ENV_PATH = {
      env:'uat',
      baseUrl: "/gateway",
      baseUrl_hms: "http://api.aixinhealthmanage.com:8080/api/aijkang/v2",
      baseLink_hms: "https://medical-uat.aixin-ins.net/hm",
    };
}

// https://vitejs.dev/config/
export default defineConfig({
  // 打包配置
  build: {
    target: 'modules', // 设置最终构建的浏览器兼容目标。modules:支持原生 ES 模块的浏览器
    outDir: 'manager', // 指定输出路径
    assetsDir: 'assets', // 指定生成静态资源的存放路径
    sourcemap: false, // 构建后是否生成 source map 文件
    minify: 'terser', // 混淆器，terser构建后文件体积更小
    // lib:{
    //   entry: './src/main.ts',
    //   formats: ['es'],
    //   fileName: 'index'
    // }
},
// 本地运行配置，及反向代理配置
server: {
    host: '0.0.0.0', // 指定服务器主机名
    port: 8080, // 指定服务器端口
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    strictPort: false, // 设为 false 时，若端口已被占用则会尝试下一个可用端口,而不是直接退出
    https: false, // 是否开启 https
    cors: true, // 为开发服务器配置 CORS。默认启用并允许任何源
    proxy: { // 为开发服务器配置自定义代理规则
        '/api': {
            target: 'http://192.168.1.122:3000', //代理接口
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, '')
        }
    }
},
define: {
  'process.env': ENV_PATH
},
// define: {
//   'process.env': process.env
// },
  // 添加 @, @/代表src目录
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData: '@import "@/assets/css/variables.scss";'
      }
    }
  },
  plugins: [vue()]
})
