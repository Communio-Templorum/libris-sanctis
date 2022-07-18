yodasws.page('pageProverbs').setRoute({
	title: 'Proverbs',
	canonicalRoute: '/proverbs/',
	template(match, ...p) {
		const path = p.join('/').replace(/\/+/g, '/').replace(/^\/|\/$/g, '').split('/').filter(p => p != '');
		if (path.length === 0) {
			return 'pages/proverbs/index.html';
		}
		return {
			canonicalRoute: '/proverbs/' + path.join('/') + '/',
			template: 'pages/proverbs/' + path.join('.') + '.html',
		};
	},
	route: '/proverbs(/.*)*',
});
