/**
 * Sam Grundman's Super Awesome Gulp Web Development Toolset
 *
 * @version 1.0.4.3
 */
'use strict';

const fs = require('fs')
const packageJson = JSON.parse(fs.readFileSync('./package.json'))

function camelCase(name) {
	name = name.split('-')
	if (name.length > 1) {
		for (let i=1; i<name.length; i++) {
			name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1)
		}
	}
	return name.join('')
}

const argv = require('yargs')
	.usage("\n\x1b[1mUsage:\x1b[0m gulp \x1b[36m<command>\x1b[0m \x1b[34m[options]\x1b[0m")
	.command('init', 'Initialize app', {
		name: {
			describe: 'Name for your app',
			required: true,
			alias: 'n',
		},
	})
	.command(['serve', '*'], 'Compile files and start server', {
		port: {
			describe: 'The server port to listen to',
			type: 'number',
			default: 3000,
			alias: 'p'
		}
	})
	.command('compile', 'Compile all files and output to docs folder')
	.command('generate:component', 'Generate a new component', {
		name: {
			describe: 'Name for your new component',
			required: true,
			alias: 'n',
		},
	})
	.command('generate:page', 'Generate a new page', {
		name: {
			describe: 'Name for your new page',
			required: true,
			alias: 'n',
		},
		section: {
			describe: 'Section under which to add page',
			default: '',
			alias: 's',
		},
	})
	.command('lint', 'Lint all JavaScript and Sass/SCSS files')
	.command('transfer-files', 'Transfer all static assets and resources to docs folder')
	.command('watch', 'Watch files for changes to recompile')
	.help('?')
	.epilog(' ©2017 Samuel B Grundman')
	.argv

const gulp = require('gulp'),
	path = require('path'),
	fileExists = require('file-exists'),

plugins = require('gulp-load-plugins')({
	rename:{
		'gulp-autoprefixer': 'prefixCSS',
		'gulp-run-command': 'cli',
		'gulp-html-lint': 'lintHTML',
		'gulp-sass-lint': 'lintSass',
		'gulp-htmlmin': 'compileHTML',
		'gulp-eslint': 'lintES',
		'gulp-babel': 'compileJS',
		'gulp-order': 'sort',
		'gulp-sass': 'compileSass',
		'gulp-file': 'newFile',
	},
	postRequireTransforms:{
		cli(cli) {
			return cli.default
		},
	},
}),

options = {
	compileJS:{
		comments: false,
		minified: true,
		babelrc: false,
		compact: true,
		plugins: [
			'transform-exponentiation-operator',
//			'transform-remove-console'
		],
		presets: [
			'es2015',
		]
	},
	compileSass:{
		importer: require('@mightyplow/sass-dedup-importer'),
		outputStyle: 'compressed',
		includePaths: [
			'node_modules',
			'src/scss',
		],
	},
	stripCssComments:{
		preserve: false,
	},
	compileHTML:{
		collapseWhitespace: true,
		decodeEntities: true,
		keepClosingSlash: true,
		removeComments: true,
		removeRedundantAttributes: true,
		removeScriptTypeAttributes: true,
		removeStyleLinkTypeAttributes: true,
		useShortDoctype: true,
	},
	lintES:{
		parserOptions: {
			ecmaVersion: 2015,
		},
		env: {
			browser: true,
			es6: true
		},
		rules: {

'strict': [
	2, 'global'
],
'indent': [
	2, 'tab'
],
'space-before-function-paren': 0,
'comma-dangle': 0,
'no-console': 0,
'no-undef': 0,
'no-tabs': 0,
'no-var': 2,
'semi': 0,

		}
	},
	lintSass:{
		files: {
			ignore: '**/*.min.css'
		},
		rules: {

'extends-before-mixins': 1,
'extends-before-declarations': 1,
'placeholder-in-extend': 1,
'mixins-before-declarations': 1,
'one-declaration-per-line': 1,
'empty-line-between-blocks': 1,
'single-line-per-selector': 1,
'no-attribute-selectors': 0,
'no-color-hex': 0,
'no-color-keywords': 0,
'no-color-literals': 1,
'no-combinators': 0,
'no-css-comments': 1,
'no-debug': 1,
'no-disallowed-properties': 1,
'no-duplicate-properties': [
	1, { exclude: [
		'display',
	]}
],
'no-empty-rulesets': 1,
'no-extends': 0,
'no-ids': 1,
'no-important': 1,
'no-invalid-hex': 1,
'no-mergeable-selectors': 1,
'no-misspelled-properties': 1,
'no-qualifying-elements': 0,
'no-trailing-whitespace': 1,
'no-trailing-zero': 1,
'no-transition-all': 0,
'no-universal-selectors': 0,
'no-url-domains': 1,
'no-url-protocols': 1,
'no-vendor-prefixes': 1,
'no-warn': 1,
'property-units': 1,
'declarations-before-nesting': 1,
'force-attribute-nesting': 0,
'force-element-nesting': 0,
'force-pseudo-nesting': 0,
'class-name-format': 1,
'function-name-format': 1,
'id-name-format': 1,
'mixin-name-format': 1,
'placeholder-name-format': 1,
'variable-name-format': 1,
'attribute-quotes': 1,
'bem-depth': 1,
'border-zero': 1,
'brace-style': 1,
'clean-import-paths': 1,
'empty-args': 1,
'hex-length': [
	2, { style: 'long' }
],
'hex-notation': [
	1, { style: 'uppercase' }
],
'indentation': [
	2, { size: 'tab' }
],
'leading-zero': [
	2, { include: true }
],
'max-line-length': 0,
'max-file-line-count': 0,
'nesting-depth': [
	1, { "max-depth": 4 }
],
'property-sort-order': 0,
'pseudo-element': 1,
'quotes': [
	1, { style: 'single' }
],
'shorthand-values': 1,
'url-quotes': 1,
'variable-for-property': 1,
'zero-unit': 1,
'space-after-comma': 1,
'space-before-colon': 1,
'space-after-colon': 1,
'space-before-brace': 1,
'space-before-bang': 1,
'space-after-bang': 1,
'space-between-parens': 1,
'space-around-operator': 1,
'trailing-semicolon': 2,
'final-newline': 2

		}
	},
	lintHTML:{
		useHtmllintrc: false,
		rules: {

'attr-name-style': 'dash',
'attr-no-dup': true,
'attr-req-value': false,
'class-no-dup': true,
'class-style': 'dash',
'doctype-html5': true,
'fig-req-figcaption': false,
'head-req-title': true,
'head-valid-content-model': true,
'html-req-lang': true,
'id-class-style': 'dash',
'id-no-dup': true,
'img-req-alt': true,
'img-req-src': true,
'indent-style': 'tabs',
'indent-width-cont': true,
'input-radio-req-name': true,
'input-req-label': true,
'label-req-for': true,
'line-end-style': 'lf',
'table-req-caption': false,
'table-req-header': false, // this is buggy in htmllint (https://github.com/htmllint/htmllint/issues/197)
'tag-bans': [
	'acronym','applet','basefont','big','blink','center','font','frame','frameset','isindex','noframes','marquee',
	'style',
],
'tag-close': true,
'tag-name-lowercase': true,
'tag-name-match': true,
'tag-self-close': 'always',
'title-no-dup': true,

		}
	},
	prefixCSS:{
		// more options at https://github.com/postcss/autoprefixer#options
		browsers: [
			// browser strings detailed at https://github.com/ai/browserslist#queries
			'last 2 Firefox versions',
			'last 2 Chrome versions',
			'Safari >= 10',
			'ie_mob >= 11',
			'ie >= 11'
		],
		cascade: false
	},
	dest: 'docs/',
	rmLines:{
		css:{
			filters:[
				/^\s*$/,
			]
		},
		js:{
			filters:[
				/^[\'"]use strict[\'"];$/,
				/^\s*$/,
			]
		},
	},
	concat:{
		css:{
			path: 'min.css'
		},
		js:{
			path: 'min.js'
		}
	},
	webserver:{
		path: `/${packageJson.name}/`,
		directoryListing: false,
		defaultFile: 'index.html',
		fallback: 'index.html',
		livereload: true,
		port: argv.port,
	},
	sort:{
		css:[
			'scss/**/*.{sa,sc,c}ss',
			'main.scss',
			'components/**/*.{sa,sc,c}ss',
			'**/*.{sa,sc,c}ss',
		],
		js:[
			'js/**/*.js',
			'**/module.js',
			'{components,pages}/**/*.js',
			'app.js',
		]
	},
	ssi:{
		root: 'src'
	}
}

function runTasks(task) {
	const fileType = task.fileType || 'static'
	let stream = gulp.src(task.src)
	const tasks = task.tasks

	// Output Linting Results
	;[
		'lintHTML',
		'lintSass',
		'lintES'
	].forEach((task) => {
		if (tasks.indexOf(task) != -1) {
			let option = options[task] || {}
			if (option[fileType]) option = option[fileType]
			stream = stream.pipe(plugins[task](option))
			stream = stream.pipe(plugins[task].format())
		}
	})

	// Init Sourcemaps
	stream = stream.pipe(plugins.sourcemaps.init())

	// Run each task
	if (tasks.length) for (let i=0, k=tasks.length; i<k; i++) {
		if (['lintHTML', 'lintSass', 'lintES'].indexOf(tasks[i]) !== -1) continue;
		let option = options[tasks[i]] || {}
		if (option[fileType]) option = option[fileType]
		stream = stream.pipe(plugins[tasks[i]](option))
	}

	// Write Sourcemap
	stream = stream.pipe(plugins.sourcemaps.write())

	// Output Files
	return stream.pipe(gulp.dest(options.dest))
}

;[
	{
		name: 'compile:sass',
		src: [
			'src/**/*.{sa,sc,c}ss',
			'!src/scss/*.{sa,sc,c}ss',
			'!**/*.min.css',
			'!**/min.css'
		],
		tasks: [
			'lintSass',
			'sort',
			'concat',
			'compileSass',
			'stripCssComments',
			'rmLines',
			'prefixCSS',
		],
		fileType: 'css'
	},
	{
		name: 'compile:js',
		src: [
			'src/**/*.js',
			'!**/*.min.js',
			'!**/min.js'
		],
		tasks: [
			'lintES',
			'sort',
			'concat',
			'compileJS',
			'rmLines',
		],
		fileType: 'js'
	},
	{
		name: 'compile:html',
		src: [
			'./src/**/*.html',
			'!**/includes/**/*.html'
		],
		tasks: [
			'lintHTML',
			'ssi',
			'compileHTML',
		],
		fileType: 'html'
	},
	{
		name: 'transfer:assets',
		src: [
			'./src/**/*.jp{,e}g',
			'./src/**/*.json',
			'./src/**/*.gif',
			'./src/**/*.png',
			'./src/**/*.ttf',
		],
		tasks: []
	}
].forEach((task) => {
	gulp.task(task.name, () => {
		return runTasks(task)
	})
})

gulp.task('lint:html', () => {
	return gulp.src([
		'src/**/*.html',
	])
		.pipe(plugins.lintHTML(options.lintHTML))
		.pipe(plugins.lintHTML.failOnError())
		.pipe(plugins.lintHTML.format())
})

gulp.task('lint:sass', () => {
	return gulp.src([
		'src/**/*.{sa,sc,c}ss',
		'!**/*.min.css',
		'!**/min.css'
	])
		.pipe(plugins.lintSass(options.lintSass))
		.pipe(plugins.lintSass.failOnError())
		.pipe(plugins.lintSass.format())
})

gulp.task('lint:js', () => {
	return gulp.src([
		'src/**/*.js',
		'!**/*.min.js',
		'!**/min.js'
	])
		.pipe(plugins.lintES(options.lintES))
		.pipe(plugins.lintES.failOnError())
		.pipe(plugins.lintES.format())
})

gulp.task('lint', gulp.parallel('lint:sass', 'lint:js', 'lint:html'))

gulp.task('transfer:res', (done) => {
	gulp.src([
		'./node_modules/angular/angular.min.js{,.map}',
		'./node_modules/angular-route/angular-route.min.js{,.map}',
		'./node_modules/jquery/dist/jquery.min.{js,map}',
	])
		.pipe(gulp.dest(path.join(options.dest, 'res')))
	gulp.src([
		'./node_modules/font-awesome/fonts/fontawesome-webfont.*',
	])
		.pipe(gulp.dest(path.join(options.dest, 'fonts')))
	done()
})

gulp.task('transfer-files', gulp.parallel('transfer:assets', 'transfer:res'))

gulp.task('compile', gulp.parallel('compile:html', 'compile:js', 'compile:sass', 'transfer-files'))

gulp.task('watch', () => {
	gulp.watch('./src/**/*.{sa,sc,c}ss', gulp.series('compile:sass'))
	gulp.watch('./src/**/*.html', gulp.series('compile:html'))
	gulp.watch('./src/**/*.js', gulp.series('compile:js'))
})

gulp.task('serve', () => {
	return gulp.src('./docs/')
		.pipe(plugins.webserver(options.webserver))
})

gulp.task('generate:page', gulp.series(
	(done) => {
		if (argv.section) {
			argv.section += '/'
		}
		done()
	},
	plugins.cli([
		`mkdir -pv ./src/pages/${argv.section}/${argv.name}`,
		`touch -a ./src/pages/${argv.section}/${argv.name}/${argv.name}.scss`,
	]),
	() => {
		const str = `<h2>${argv.name}</h2>\n`
		return plugins.newFile(`${argv.name}.html`, str, { src: true })
			.pipe(gulp.dest(`./src/pages/${argv.section}${argv.name}`))
	},
	() => {
		const str = `'use strict';\n\nangular.module('${camelCase('page-'+argv.name)}', [\n\t'ngRoute',\n])\n`
		return plugins.newFile('module.js', str, { src: true })
			.pipe(gulp.dest(`./src/pages/${argv.section}${argv.name}`))
	},
	() => {
		const str = `'use strict';\n
angular.module('${camelCase('page-'+argv.name)}')
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
\t$routeProvider.when('/${argv.section}${argv.name}/', {
\t\ttemplateUrl: 'pages/${argv.section}${argv.name}/${argv.name}.html',
\t\tcontrollerAs: '$ctrl',
\t\tcontroller() {\n\t\t},
\t})
}])\n`
		return plugins.newFile(`routes.js`, str, { src: true })
			.pipe(gulp.dest(`./src/pages/${argv.section}${argv.name}`))
	},
	// TODO: Add to app.js
	plugins.cli([
		`git status`,
	])
))

gulp.task('generate:component', gulp.series(
	plugins.cli([
		`mkdir -pv src/components/${argv.name}`,
		`touch -a src/components/${argv.name}/${argv.name}.html`,
		`touch -a src/components/${argv.name}/${argv.name}.scss`,
	]),
	() => {
		const str = `'use strict';\n\nangular.module('${camelCase('comp-'+argv.name)}', [])\n`
		return plugins.newFile('module.js', str, { src: true })
			.pipe(gulp.dest(`./src/components/${argv.name}`))
	},
	() => {
		const str = `'use strict';\n
angular.module('${camelCase('comp-'+argv.name)}')
.component('${camelCase(argv.name)}', {
\ttemplateUrl: 'components/${argv.name}/${argv.name}.html',
\tcontrollerAs: '$ctrl',
\tcontroller() {\n\t}
})\n`
		return plugins.newFile(`${argv.name}.js`, str, { src: true })
			.pipe(gulp.dest(`./src/components/${argv.name}`))
	},
	// TODO: Add to app.js
	plugins.cli([
		`git status`,
	])
))

gulp.task('init:win', () => {
})

gulp.task('init', gulp.series(
	plugins.cli([
		`mkdir -pv ./src`,
		`mkdir -pv ./docs`,
		`mkdir -pv ./src/pages`,
		`mkdir -pv ./src/includes`,
		`mkdir -pv ./src/includes/header`,
	]),

	(done) => {
		if (fileExists.sync('src/index.html')) {
			done()
			return
		}
		const str = `<!DOCTYPE html>
<html lang="en-US" ng-app="${argv.name}">
<head>
<!--#include file="includes/head-includes.html" -->
<title>${argv.name}</title>
</head>
<body ng-cloak>
<!--#include file="includes/header/header.html" -->
<main ng-view></main>
</body>
</html>\n`
		return plugins.newFile(`index.html`, str, { src: true })
			.pipe(gulp.dest(`./src`))
	},

	(done) => {
		if (fileExists.sync('src/main.scss')) {
			done()
			return
		}
		const str = `* { box-sizing: border-box; }\n
:root { font-family: 'Trebuchet MS', 'Open Sans', 'Helvetica Neue', sans-serif; }\n
html {\n\theight: 100%;\n\twidth: 100%;\n\tbackground: whitesmoke;\n}\n
body {\n\tmargin: 0 auto;\n\twidth: 100%;\n\tmax-width: 1200px;\n\tborder: solid black;\n\tborder-width: 0 1px;\n\tmin-height: 100%;\n\tbackground: white;\n
\t> * {\n\t\tpadding: 5px calc(5px * 2.5);\n\t}\n}\n
h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n\tmargin: 0;\n}\n
a:link,\na:visited {\n\tcolor: dodgerblue;\n}\n`
		return plugins.newFile(`main.scss`, str, { src: true })
			.pipe(gulp.dest(`./src`))
	},

	(done) => {
		if (fileExists.sync('src/app.js')) {
			done()
			return
		}
		const str = `'use strict';\n
angular.module('${argv.name}', [\n\t'ngRoute',\n])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true)
	$routeProvider.when('/', {\n\t\ttemplateUrl: 'pages/home.html',\n\t})
	.otherwise({redirectTo: '/'})
}])\n`
		return plugins.newFile(`app.js`, str, { src: true })
			.pipe(gulp.dest(`./src`))
	},

	(done) => {
		if (fileExists.sync('src/includes/hdeader/header.html')) {
			done()
			return
		}
		const str = `<header>\n\t<h1>${argv.name}</h1>\n</header>\n<nav hidden>\n\t<a href=".">Home</a>\n</nav>\n`
		return plugins.newFile(`header.html`, str, { src: true })
			.pipe(gulp.dest(`./src/includes/header`))
	},

	(done) => {
		if (fileExists.sync('src/includes/header/header.scss')) {
			done()
			return
		}
		const str = `body > header {\n\tcolor: $header-color;\n\tbackground: $header-bg;\n
\th1 {\n\t\tmargin: 0;\n\t}\n\n\th2 {\n\t\tcolor: $header-second-color;\n\t}\n}\n
body > nav {\n\tdisplay: flex;\n\tflex-flow: row wrap;\n\tjustify-content: space-between;
\talign-content: flex-start;\n\talign-items: flex-start;\n
\t> * {\n\t\tdisplay: block;\n\t}\n\n\t&[hidden] {\n\t\tdisplay: none;\n\t}\n}\n`
		return plugins.newFile(`header.scss`, str, { src: true })
			.pipe(gulp.dest(`./src/includes/header`))
	},

	(done) => {
		if (fileExists.sync('src/includes/head-includes.html')) {
			done()
			return
		}
		const str = `<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<base href="/${packageJson.name}/"/>
<link rel="stylesheet" href="min.css"/>
<script src="res/jquery.min.js"></script>
<script src="res/angular.min.js"></script>
<script src="res/angular-route.min.js"></script>
<script src="min.js"></script>\n`
		return plugins.newFile(`head-includes.html`, str, { src: true })
			.pipe(gulp.dest(`./src/includes`))
	},

	(done) => {
		if (fileExists.sync('src/pages/home.html')) {
			done()
			return
		}
		const str = `<h1>Home</h1>\n`
		return plugins.newFile(`home.html`, str, { src: true })
			.pipe(gulp.dest(`./src/pages`))
	},

	plugins.cli([
		`git status`,
	])
))

gulp.task('default', gulp.series(
	'lint',
	'compile',
	'serve'
	// Bash on Windows can't do watch=>compile and livereload at the same time >_<
//	,'watch'
))
