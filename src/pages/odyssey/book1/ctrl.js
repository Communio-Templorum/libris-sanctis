yodasws.page('odyssey/book1').setRoute({
	template: 'pages/odyssey/book1/book1.html',
	route: '/odyssey/book1/',
}).on('load', () => {
	console.log('Page loaded!');
});
