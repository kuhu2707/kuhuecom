// import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server:{port:5173}
// })
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 5173,
//     proxy:{
//       '/api': {
//         target: 'https://ecommerce-webiste-939r.vercel.app',
//         changeOrigin: true,
//     }, // Port for development server
//   },
//   build: {
//     sourcemap: false, // Disable source maps in production
//     minify: 'esbuild', // Use esbuild for minification
//   },
// }});
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: 'https://ecommerce-webiste-939r.vercel.app',
                changeOrigin: true,
                secure: false,
            },
        },
    },
});



