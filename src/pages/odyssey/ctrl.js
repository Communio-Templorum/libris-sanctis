yodasws.page('odyssey').setRoute({
	title: 'The Odyssey, table of contents',
	canonicalRoute: '/odyssey/',
	template(match, ...p) {
		const path = p.join('/').split('/').filter(p => p != '');
		if (path.length === 0) {
			return 'pages/odyssey/index.html';
		}
		const book = path.join('/').match(/^book(\d+)/)[1];
		return {
			title: `The Odyssey, Book ${book}`,
			canonicalRoute: `/odyssey/book${book}/`,
			template: `pages/odyssey/book${book}.html`,
		};
	},
	route: '/odyssey(/book\\d+)?/?',
});
