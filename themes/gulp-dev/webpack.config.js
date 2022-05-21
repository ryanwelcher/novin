const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const cssnano = require("cssnano");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WatchMatchWebpackPlugin = require("watch-match-webpack-plugin");

module.exports = {
	resolve: {
		alias: {
			theme_src$: path.resolve(__dirname, "../novin/src"),
			theme_dist$: path.resolve(__dirname, "../novin/dist"),
			//jquery$: path.resolve(__dirname,'node_modules/jquery'),
			theme_patterns$: path.resolve(__dirname, "../novin/patterns/"),
		},
	},
	externals: {
		jquery: "jQuery",
	},
	entry: path.resolve(__dirname, "../novin/src/src.js"),
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "../novin/dist"),
	},
	watch: true,
	watchOptions: {
		aggregateTimeout: 0,
		ignored: /node_modules/,
	},
	//devtool: "source-map", //if you want a source-map file next to your main.js, turn it off for production, leave it on for developement
	mode: "production", //or 'production or development'
	optimization: {
		splitChunks: {
			cacheGroups: {
				styles: {
					name: "main",
					test: /\.css$/,
					chunks: "all",
					enforce: true,
				},
			},
		},
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
		}),
		new MiniCssExtractPlugin({
			name: "[name].css",
			chunkName: "[name.css]",
		}),
		new CleanWebpackPlugin(),
		new WatchMatchWebpackPlugin({
			includes: { theme_patterns: "**/*.js" },
			callback(matchedFiles) {
				console.log("Hey look here, webpack watch these files have changed:\n", matchedFiles.join("\n"));
			},
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{
				test: /\.(css|s[ac]ss)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: "css-loader",
						options: {
							importLoaders: 2,
							sourceMap: true,
							url: true,
						},
					},
					{
						loader: "postcss-loader",
						options: {
							plugins: () => [
								require("autoprefixer"),
								require("cssnano")({
									preset: "default",
								}),
							],
							sourceMap: true,
							url: true,
						},
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "fonts/",
						},
					},
				],
			},
		],
	},
};
