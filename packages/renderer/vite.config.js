/* eslint-env node */

import {chrome} from '../../.electron-vendors.config.json';
import {join} from 'path';
import {builtinModules} from 'module';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';

const PACKAGE_ROOT = __dirname;

const config = {
  mode: process.env.MODE,
  root: PACKAGE_ROOT,
  resolve: {
    alias: {
      '/@/': join(PACKAGE_ROOT, 'src') + '/',
    },
  },
  plugins: [
    vue(),
    WindiCSS()],
  base: '',
  server: {
    fs: {
      strict: true,
    },
  },
  build: {
    sourcemap: true,
    target: `chrome${chrome}`,
    outDir: 'dist',
    assetsDir: '.',
    rollupOptions: {
      external: [
        ...builtinModules,
      ],
    },
    emptyOutDir: true,
    brotliSize: false,
  },
};

export default config;
