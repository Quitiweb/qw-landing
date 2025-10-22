import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	base: process.env.VITE_BASE_PATH ?? '/',
	build: {
		target: 'esnext',
	},
	define: {
		'process.env.NODE_ENV': JSON.stringify(mode),
	},
}));
