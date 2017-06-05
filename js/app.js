$(document).ready(function() {
	$('#toc').fixedTOC({
		menuOpens: 'click', // or 'mouseenter'
		scrollSpeed: 1000,
		menuSpeed: 300,
		useSubMenus: false,
		resetSubMenus: false,
		topLinkWorks: true
	});
	$('#message-btn').click(function() {
		$('#faded-background').css('display','block');
		$('.contact-popup').css('display','block');
	})
	$('#close-popup').click(function() {
		$('#faded-background').css('display','none');
		$('.contact-popup').css('display','none');
	})
});