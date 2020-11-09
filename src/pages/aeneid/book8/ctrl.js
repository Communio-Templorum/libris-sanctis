yodasws.page('aeneid/book8').setRoute({
	template: 'pages/aeneid/book8/book8.html',
	canonicalRoute: '/aeneid/book8/',
	route: '/aeneid/book8/?',
}).on('load', () => {
	console.log('Page loaded!');
});
