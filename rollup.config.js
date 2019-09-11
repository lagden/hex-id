'use strict'

export default [
	{
		input: 'src/browser.js',
		output: {
			file: 'dist/browser.js',
			format: 'es',
			name: 'hexID',
			sourcemap: true,
			strict: false
		}
	}, {
		input: 'src/index.js',
		output: {
			file: 'dist/index.js',
			format: 'umd',
			name: 'hexID',
			sourcemap: true,
			strict: false
		}
	}
]
