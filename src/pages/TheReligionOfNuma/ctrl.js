yodasws.page('pageTheReligionOfNuma').setRoute({
	title: 'The Religion of Numa',
	canonicalRoute: '/TheReligionOfNuma/',
	template(match, ...p) {
		const path = p.join('/').replace(/\/+/g, '/').replace(/^\/|\/$/g, '').split('/').filter(p => p != '');
		if (path.length === 0) {
			return 'pages/TheReligionOfNuma/index.html';
		}
		return {
			canonicalRoute: '/TheReligionOfNuma/' + path.join('/') + '/',
			template: 'pages/TheReligionOfNuma/' + path.join('.') + '.html',
		};
	},
	route: '/TheReligionOfNuma(/.*)*',
}).on('load', () => {
	console.log('Page loaded!');
});
