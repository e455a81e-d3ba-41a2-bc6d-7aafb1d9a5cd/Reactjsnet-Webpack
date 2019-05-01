const path = require('path');

module.exports = {
    entry: {
        components: './Content/expose-components.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'wwwroot/dist')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
	module: {
		rules: [
			{
                test: /\.(js|jsx|tsx|ts)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
		],
	},
};