
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  build:{
    outDir:'dist',
  }
})

// export default defineConfig({
//   plugins: [react()],
//     server: {
//         proxy: {
//             '/api': {
//                 target: 'https://kuhuecom.vercel.app/',
//                 changeOrigin: true,
//                 secure: false,
//             },
//         },
//     },
// });




