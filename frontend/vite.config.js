// import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite';

export default defineConfig({
 base:'/',
plugins: [React()],
    server: {
        proxy: {
            '/api': {
                target:'https://kuhuecom.vercel.app/',
                changeOrigin: true,
                secure: false,
            },
        },
    },
});



