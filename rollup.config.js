'use strict'

import commonjs from 'rollup-plugin-commonjs'

export default {
	input: 'index.js',
	output: {
		file: 'dist/index.js',
		format: 'umd',
		name: 'hexID',
		sourcemap: true,
		strict: false
	},
	plugins: [
		commonjs()
	]
}
