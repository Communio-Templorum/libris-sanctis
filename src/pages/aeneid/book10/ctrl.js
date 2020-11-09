yodasws.page('aeneid/book10').setRoute({
	template: 'pages/aeneid/book10/book10.html',
	canonicalRoute: '/aeneid/book10/',
	route: '/aeneid/book10/?',
}).on('load', () => {
	console.log('Page loaded!');
});
