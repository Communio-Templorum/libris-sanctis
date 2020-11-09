yodasws.page('aeneid/book3').setRoute({
	template: 'pages/aeneid/book3/book3.html',
	canonicalRoute: '/aeneid/book3/',
	route: '/aeneid/book3/?',
}).on('load', () => {
	console.log('Page loaded!');
});
