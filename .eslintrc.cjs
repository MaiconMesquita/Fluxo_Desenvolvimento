module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['airbnb-base'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'import/extensions': 0,
		'prefer-destructuring': 0,
		'no-underscore-dangle': 0,
		'no-tabs': 'off',
		indent: ['error', 'tab'],
		'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 3 }],
		'linebreak-style': 'off',
	},
	overrides: [
		{
			files: ['*.test.js'],
			env: {
				jest: true,
			},
		},
	],
};
