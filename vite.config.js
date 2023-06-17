import { defineConfig } from 'vite'
import inject from "@rollup/plugin-inject";
import { qrcode } from 'vite-plugin-qrcode';

export default defineConfig({
  plugins: [
       inject({   // inject 這個必須加入在第一行
         $: 'jquery',
         jQuery: 'jquery',
       }),
       qrcode()
  ],
  base: '/magazine-site/'
})