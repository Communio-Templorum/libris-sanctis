/* app.json */
yodasws.page('home').setRoute({
	template: 'pages/home.html',
	route: '/',
}).on('load', () => {
	const nav = document.querySelector('body > nav');
	if (nav instanceof Element) {
		nav.setAttribute('hidden', '');
	}
}).on('unload', () => {
	const nav = document.querySelector('body > nav');
	if (nav instanceof Element) {
		nav.removeAttribute('hidden');
	}
});
