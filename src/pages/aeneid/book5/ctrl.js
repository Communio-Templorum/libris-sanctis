yodasws.page('aeneid/book5').setRoute({
	template: 'pages/aeneid/book5/book5.html',
	canonicalRoute: '/aeneid/book5/',
	route: '/aeneid/book5/?',
}).on('load', () => {
	console.log('Page loaded!');
});
