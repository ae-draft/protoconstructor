var webpack = require('webpack');

module.exports = {
	entry: {
		app: ['./source/scripts/app/entry.tsx'],
	},
	output: {
		path: './public/built',
		filename: 'bundle.js',
		publicPath: 'http://localhost:8080/built/'
	},
	devServer: {
		contentBase: './public',
		publicPath: 'http://localhost:8080/built/'
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.css', '.ts', '.tsx']
	},
	module: {

		loaders: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{ test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
			{ test: /\.ts(x?)$/, loader: 'ts-loader' },
			{
				test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
				loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
			}
		]
	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.ProvidePlugin({
			React: "react",
			"window.React": "react",
			ReactDOM: "react-dom",
			"window.ReactDOM": "react-dom"
		})
	],
	stats: {
		colors: true
	},
	devtool: 'source-map'
};
