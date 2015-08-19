module.exports = {
	output: {
		filename: 'bundle.js',
	},
	resolve: {
		alias: {'is': 'is_js'},
		extensions: ['', '.js','.config.js']
	},
	module: {
		loaders: [{
			test: /\.js$/,
			// node_modules 変換を阻止
			exclude: /node_modules/,
			// es6構文に対応
			loader: 'babel-loader'
		}]
	}
};