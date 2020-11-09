yodasws.page('aeneid/book4').setRoute({
	template: 'pages/aeneid/book4/book4.html',
	canonicalRoute: '/aeneid/book4/',
	route: '/aeneid/book4/?',
}).on('load', () => {
	console.log('Page loaded!');
});
