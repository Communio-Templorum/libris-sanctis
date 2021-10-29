yodasws.page('pageMetamorphoses').setRoute({
	title: 'Metamorphoses',
	canonicalRoute: '/metamorphoses/',
	template(match, ...p) {
		const path = p.join('/').replace(/\/+/g, '/').replace(/^\/|\/$/g, '').split('/').filter(p => p != '');
		if (path.length === 0) {
			return 'pages/metamorphoses/metamorphoses.html';
		}
		return {
			canonicalRoute: '/metamorphoses/' + path.join('/') + '/',
			template: 'pages/metamorphoses/' + path.join('.') + '.html',
		};
	},
	route: '/metamorphoses(/.*)*',
});
