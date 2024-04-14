// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                cart_page: resolve(__dirname, 'pages/car_page/index.html'),
                catalog_page: resolve(__dirname, 'pages/catalog_page/index.html')
            },
        },
    },
})