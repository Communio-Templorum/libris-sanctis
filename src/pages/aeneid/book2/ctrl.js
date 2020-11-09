yodasws.page('aeneid/book2').setRoute({
	template: 'pages/aeneid/book2/book2.html',
	canonicalRoute: '/aeneid/book2/',
	route: '/aeneid/book2/?',
}).on('load', () => {
	console.log('Page loaded!');
});
