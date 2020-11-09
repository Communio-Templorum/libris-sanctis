yodasws.page('aeneid/book7').setRoute({
	template: 'pages/aeneid/book7/book7.html',
	canonicalRoute: '/aeneid/book7/',
	route: '/aeneid/book7/?',
}).on('load', () => {
	console.log('Page loaded!');
});
