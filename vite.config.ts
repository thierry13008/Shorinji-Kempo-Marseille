import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || ''),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      target: 'esnext',
      minify: 'esbuild',
      rollupOptions: {
        treeshake: {
          moduleSideEffects: false,
          propertyReadSideEffects: false,
          tryCatchDeoptimization: false,
        },
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              // React core
              if (
                id.includes('react/') || 
                id.includes('react-dom/') || 
                id.includes('react-router-dom/') || 
                id.includes('scheduler/') ||
                id.includes('react-helmet-async/')
              ) {
                return 'vendor-react';
              }
              // Framer Motion / Motion
              if (id.includes('framer-motion') || id.includes('motion')) {
                return 'vendor-motion';
              }
              // Icons - isolate them to support better tree shaking per chunk
              if (id.includes('lucide-react')) {
                return 'vendor-icons';
              }
              // AI logic
              if (id.includes('@google/genai')) {
                return 'vendor-ai';
              }
              // Other vendors
              return 'vendor-utils';
            }
          },
        },
      },
      chunkSizeWarningLimit: 1000,
    },
    esbuild: {
      drop: ['console', 'debugger'],
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
