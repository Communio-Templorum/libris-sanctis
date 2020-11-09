yodasws.page('aeneid/book11').setRoute({
	template: 'pages/aeneid/book11/book11.html',
	canonicalRoute: '/aeneid/book11/',
	route: '/aeneid/book11/?',
}).on('load', () => {
	console.log('Page loaded!');
});
