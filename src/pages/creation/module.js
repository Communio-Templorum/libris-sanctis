yodasws.page('pageCreation').setRoute({
	title: 'History of the Creation of the World',
	template: 'pages/creation/creation.html',
	canonicalRoute: '/creation/',
	route: '/creation/?',
}).on('load.page', () => {
	const name = document.querySelector('[name="collapse"]');
	if (name instanceof Element) {
		name.addEventListener('input', (evt) => {
			[...document.querySelectorAll('details')].forEach((el) => {
				if (name.checked) el.setAttribute('open', 'open');
				else el.removeAttribute('open');
			});
		});
	}
});
