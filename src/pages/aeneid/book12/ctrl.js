yodasws.page('aeneid/book12').setRoute({
	template: 'pages/aeneid/book12/book12.html',
	canonicalRoute: '/aeneid/book12/',
	route: '/aeneid/book12/?',
}).on('load', () => {
	console.log('Page loaded!');
});
