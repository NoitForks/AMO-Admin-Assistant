require('sdk/page-mod').PageMod({
	include: [
		"https://addons.mozilla.org/*",
		"https://addons.allizom.org/*",
		"https://addons-dev.allizom.org/*",
		"https://dxr.mozilla.org/addons/*"
	],
	contentScriptFile: require('sdk/self').data.url('aaa.js'),
	attachTo: ['existing', 'top']
});
