// rollup.config.js
import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'

export default {
	input: 'src/index.js',
	output: {
		file: 'dist/index.js',
		format: 'umd',
		name: 'ironjs'
	},
	plugins: [
		resolve(),
		babel({
			exclude: 'node_modules/**', // only transpile our source code
		}),
	],
}
