module.exports = {
	globDirectory: './src/',
	globPatterns: [
		'**/*.{css,js}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: './src/sw.js'
};