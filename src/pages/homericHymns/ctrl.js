yodasws.page('pageHomericHymns').setRoute({
	title: 'Homeric Hymns',
	template: 'pages/homericHymns/homericHymns.html',
	canonicalRoute: '/homericHymns/',
	route: '/homeric-?[Hh]ymns/?',
}).on('load', () => {
	const regexNoteId = /-\d+-\d+/;
	[...document.querySelectorAll('[role="doc-backlink"]')].forEach((link) => {
		link.setAttribute('tabindex', '0');
		const id = regexNoteId.exec(link.closest('[id]').getAttribute('id'))[0];
		const elem = document.querySelector(`#ref${id}[role="doc-noteref"], #ref${id} [role="doc-noteref"]`);
		if (elem instanceof Element) {
			link.addEventListener('click', () => {
				elem.focus();
			});
			link.addEventListener('keypress', (evt) => {
				if ([
					'Spacebar',
					'Enter',
					' ',
				].includes(evt.key)) {
					evt.preventDefault();
					elem.focus();
				}
			});
		}
	});
	[...document.querySelectorAll('[role="doc-noteref"]')].forEach((link) => {
		link.setAttribute('tabindex', '0');
		const id = regexNoteId.exec(link.closest('[id]').getAttribute('id'))[0];
		const elem = document.querySelector(`#note${id}[role="doc-backlink"], #note${id} [role="doc-backlink"]`);
		if (elem instanceof Element) {
			link.addEventListener('click', () => {
				console.log('Sam, click', `ref${id}`, elem);
				elem.focus();
			});
			link.addEventListener('keypress', (evt) => {
				if ([
					'Spacebar',
					'Enter',
					' ',
				].includes(evt.key)) {
					evt.preventDefault();
					elem.focus();
				}
			});
		}
	});
});
