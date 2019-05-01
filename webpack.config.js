const path = require('path');

module.exports = {
    devtool: 'inline-source-map ',
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
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            }

		],
	},
};