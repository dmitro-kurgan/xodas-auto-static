const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');

const PATHS = {
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
};

const common = merge([
	{
		entry: {
			'index': PATHS.source + '/pages/index/index.js',
			'cleaning': PATHS.source + '/pages/cleaning/cleaning.js',
			'company': PATHS.source + '/pages/company/company.js',
			'contacts': PATHS.source + '/pages/contacts/contacts.js',
			'blog-page': PATHS.source + '/pages/blog-page/blog-page.js',
			'article': PATHS.source + '/pages/article/article.js',
			'restoring': PATHS.source + '/pages/restoring/restoring.js',
			'washing': PATHS.source + '/pages/washing/washing.js',
			'restyling': PATHS.source + '/pages/restyling/restyling.js',
			'armor': PATHS.source + '/pages/armor/armor.js',
			'nanoceramics': PATHS.source + '/pages/nanoceramics/nanoceramics.js',
			'equipment': PATHS.source + '/pages/equipment/equipment.js',
			'polishing': PATHS.source + '/pages/polishing/polishing.js',
		},

		output: {
			path: PATHS.build,
			filename: 'js/[name].js'
		},

		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				chunks: ['index'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pages/index/index.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'cleaning.html',
				chunks: ['cleaning'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pages/cleaning/cleaning.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'company.html',
				chunks: ['company'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pages/company/company.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'contacts.html',
				chunks: ['contacts'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pages/contacts/contacts.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'blog-page.html',
				chunks: ['blog-page'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pages/blog-page/blog-page.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'article.html',
				chunks: ['article'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pages/article/article.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'polishing.html',
				chunks: ['polishing'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pages/polishing/polishing.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'armor.html',
				chunks: ['armor'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pages/armor/armor.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'restyling.html',
				chunks: ['restyling'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pages/restyling/restyling.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'washing.html',
				chunks: ['washing'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pages/washing/washing.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'nanoceramics.html',
				chunks: ['nanoceramics'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pages/nanoceramics/nanoceramics.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'equipment.html',
				chunks: ['equipment'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pages/equipment/equipment.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'restoring.html',
				chunks: ['restoring'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pages/restoring/restoring.pug'
			}),
			// new webpack.optimize.CommonsChunkPlugin({
			// 	name: 'common'
			// }),
			new webpack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery",
				"window.jQuery": "jquery",
				"window.$": "jquery"
			}),
			new webpack.ProvidePlugin({
				GoogleMapsLoader: 'google-maps'
			}),
			new webpack.ProvidePlugin({
				wow: 'wowjs',
				WOW: 'wowjs'
			})
		]
	},
	pug(),
	images(),
	fonts()
]);

module.exports = function(env) {
	if (env === 'production') {
		return merge([
			common,
			extractCSS(),
			uglifyJS()
		]);
	}
	if (env === 'development') {
		return merge([
			common,
			devserver(),
			sass(),
			css()
		])
	}
};