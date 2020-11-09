yodasws.page('aeneid/book6').setRoute({
	template: 'pages/aeneid/book6/book6.html',
	canonicalRoute: '/aeneid/book6/',
	route: '/aeneid/book6/?',
}).on('load', () => {
	console.log('Page loaded!');
});
