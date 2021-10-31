yodasws.page('pageMetamorphoses').setRoute({
	title: 'Metamorphoses',
	canonicalRoute: '/metamorphoses/',
	template(match, ...p) {
		const path = p.join('/').split('/').filter(p => p != '');
		if (path.length === 0) {
			return 'pages/metamorphoses/metamorphoses.html';
		}
		const book = path.join('/').match(/^book(\d+)/)[1];
		return {
			title: `Metamorphoses, Book ${book}`,
			canonicalRoute: `/metamorphoses/book${book}/`,
			template: `pages/metamorphoses/book${book}.html`,
		};
	},
	route: '/metamorphoses(/book\\d+)?/?',
});
