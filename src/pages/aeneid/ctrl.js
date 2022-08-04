yodasws.page('aeneid').setRoute({
	title: 'The Aeneid, table of contents',
	canonicalRoute: '/aeneid/',
	template(match, ...p) {
		const path = p.join('/').split('/').filter(p => p != '');
		if (path.length === 0) {
			return 'pages/aeneid/index.html';
		}
		const book = path.join('/').match(/^book(\d+)/)[1];
		return {
			title: `The Aeneid, Book ${book}`,
			canonicalRoute: `/aeneid/book${book}/`,
			template: `pages/aeneid/book${book}.html`,
		};
	},
	route: '/aeneid(/book\\d+)?/?',
});
