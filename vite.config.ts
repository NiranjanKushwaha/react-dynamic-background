import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build:{
    lib:{
      entry:"src/index.tsx",
      name:"react-dynamic-background",
      formats: ['es'], // Adjust according to your needs
      fileName: (format) => `index.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // Specify external dependencies here
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
      },
    },
  }
})
