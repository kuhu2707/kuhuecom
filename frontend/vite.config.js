// import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite';

export default defineConfig({
  root:'./src',
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



