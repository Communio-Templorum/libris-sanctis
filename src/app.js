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

// Follow link to target element
function activateLink(link, elemSelector, context=document) {
	if (!(context instanceof Element || context === document)) {
		return;
	}
	const elem = context.querySelector(elemSelector);
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

yodasws.on('page-loaded', () => {
	const olToc = document.querySelector('[role="doc-toc"] > ol');
	if (olToc instanceof Element && !olToc.hasAttribute('id')) {
		olToc.setAttribute('id', 'doc-toc');
	}

	const regexId = /^(?:ch|note|ref)((?:-[a-z0-9]+)+)/;

	const linkToTop = document.createElement('a');
	linkToTop.innerHTML = 'Return';
	linkToTop.href = `#${olToc.getAttribute('id')}`;
	linkToTop.setAttribute('aria-label', 'Return to table of contents');

	// Add links between Chapters and Table of Contents
	// Requires the Chapter or its Name be given [id="ch-N"] attribute
	[...document.querySelectorAll('[itemtype="https://schema.org/Chapter"] [itemprop="name"]')].forEach((chapterName) => {
		const idElement = chapterName.closest('[id]');
		if (!(idElement instanceof Element)) {
			return;
		}
		const id = regexId.exec(idElement.getAttribute('id'))[1];
		const href = `#ch${id}`;

		// Add links to Chapters in Table of Contents
		{
			const link = document.createElement('a');
			link.innerHTML = chapterName.innerHTML;
			// Remove HTML from titles for use in ToC links
			[...link.querySelectorAll('a, rtc')].forEach(a => a.remove());
			link.href = href;
			const li = document.createElement('li');
			li.appendChild(link);
			olToc.appendChild(li);
			activateLink(link, `h3${href}, h4${href}, ${href} [itemprop="name"]`);
		}

		// Add links to Table of Contents
		{
			const link = linkToTop.cloneNode(true);
			const div = document.createElement('div');
			div.classList.add('toc-return');
			div.append(link);
			chapterName.closest('[itemtype="https://schema.org/Chapter"]').appendChild(div);
			activateLink(link, `a[href="${href}"]`, olToc);
		}
	});

	// Add a11y interactivity to links to footnotes
	[...document.querySelectorAll('[role="doc-noteref"]')].forEach((link) => {
		const id = regexId.exec(link.closest('[id]').getAttribute('id'))[1];
		activateLink(link, `#note${id}[role="doc-backlink"], #note${id} [role="doc-backlink"]`);
	});

	// Add a11y interactivity to backlinks from footnotes
	[...document.querySelectorAll('[role="doc-backlink"]')].forEach((link) => {
		const id = regexId.exec(link.closest('[id]').getAttribute('id'))[1];
		activateLink(link, `#ref${id}[role="doc-noteref"], #ref${id} [role="doc-noteref"]`);
	});
});
