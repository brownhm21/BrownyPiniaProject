require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
		'@vue/eslint-config-airbnb',
	],
	rules: {
		indent: [2, 'tab'],
		'no-tabs': 0,
		'vue/max-len': ['error', {
			code: 120,
			template: 200,
			tabWidth: 2,
			comments: 80,
			ignorePattern: '',
			ignoreComments: true,
			ignoreTrailingComments: true,
			ignoreUrls: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: false,
			ignoreRegExpLiterals: true,
			ignoreHTMLAttributeValues: false,
			ignoreHTMLTextContents: false,
		}],
	},
};
