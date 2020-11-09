yodasws.page('aeneid/book9').setRoute({
	template: 'pages/aeneid/book9/book9.html',
	canonicalRoute: '/aeneid/book9/',
	route: '/aeneid/book9/?',
}).on('load', () => {
	console.log('Page loaded!');
});
