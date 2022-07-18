yodasws.page('iliad').setRoute({
	title: 'The Iliad',
	canonicalRoute: '/iliad/',
	template(match, ...p) {
		const path = p.join('/').split('/').filter(p => p != '');
		if (path.length === 0) {
			return 'pages/iliad/index.html';
		}
		const book = path.join('/').match(/^book(\d+)/)[1];
		return {
			title: `The Iliad, Book ${book}`,
			canonicalRoute: `/iliad/book${book}/`,
			template: `pages/iliad/book${book}.html`,
		};
	},
	route: '/iliad(/book\\d+)?/?',
});
