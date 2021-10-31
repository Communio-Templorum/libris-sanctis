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

yodasws.on('page-loaded', () => {
	function activateLink(link, elemSelector) {
		const elem = document.querySelector(elemSelector);
		if (elem instanceof Element) {
			if (!elem.hasAttribute('tabindex')) elem.setAttribute('tabindex', '0');
			link.addEventListener('click', (evt) => {
				evt.preventDefault();
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
	}

	const olToc = document.querySelector('[role="doc-toc"] [role="directory"]');
	const regexId = /^(?:ch|note|ref)((?:-\d+)+)/;

	// Add links to Chapters in Table of Contents
	[...document.querySelectorAll('[itemtype="https://schema.org/Chapter"] [itemprop="name"]')].forEach((chapter) => {
		const idElement = chapter.closest('[id]');
		if (!(idElement instanceof Element)) {
			return;
		}
		const link = document.createElement('a');
		link.innerHTML = chapter.innerHTML;
		const id = regexId.exec(idElement.getAttribute('id'))[1];
		link.setAttribute('href', `#ch${id}`);
		const li = document.createElement('li');
		li.appendChild(link);
		olToc.appendChild(li);
		activateLink(link, `h3#ch${id}, #ch${id} h3`);
	});

	// Add a11y interactivity to links to footnotes
	[...document.querySelectorAll('[role="doc-noteref"]')].forEach((link) => {
		// link.setAttribute('tabindex', '0');
		const id = regexId.exec(link.closest('[id]').getAttribute('id'))[1];
		activateLink(link, `#note${id}[role="doc-backlink"], #note${id} [role="doc-backlink"]`);
	});

	// Add a11y interactivity to backlinks
	[...document.querySelectorAll('[role="doc-backlink"]')].forEach((link) => {
		// link.setAttribute('tabindex', '0');
		const id = regexId.exec(link.closest('[id]').getAttribute('id'))[1];
		activateLink(link, `#ref${id}[role="doc-noteref"], #ref${id} [role="doc-noteref"]`);
	});
});
