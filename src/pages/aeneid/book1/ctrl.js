yodasws.page('aeneid/book1').setRoute({
	template: 'pages/aeneid/book1/book1.html',
	canonicalRoute: '/aeneid/book1/',
	route: '/aeneid/book1/?',
}).on('load', () => {
	console.log('Page loaded!');
});
