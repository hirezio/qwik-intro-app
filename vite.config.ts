import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import jsonServer from 'vite-plugin-simple-json-server';



export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths(), jsonServer({ delay: 500, mockDir: 'mock-server' })],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    }
  };
});
