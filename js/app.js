$(document).ready(function() {
	$('#toc').fixedTOC({
		menuOpens: 'click', // or 'mouseenter'
		scrollSpeed: 1000,
		menuSpeed: 300,
		useSubMenus: false,
		resetSubMenus: false,
		topLinkWorks: true
	});
});