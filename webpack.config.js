const path = require('path');

module.exports = {
	entry: {
		components: './Content/expose-components.js',
	},
	output: {
		filename: '[name].bundle.js',
		globalObject: 'this',
		path: path.resolve(__dirname, 'wwwroot/dist'),
	},
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	optimization: {
		runtimeChunk: {
			name: 'runtime', // necessary when using multiple entrypoints on the same page
		},
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'all',
				},
			},
		},
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            }
  
		],
	},
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    }
};