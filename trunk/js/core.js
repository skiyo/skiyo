$(document).ready(function (){
	if($.browser.msie && parseInt($.browser.version) == 6){try {document.execCommand("BackgroundImageCache", false, true);}catch(e){}} 
	$('#menu li').hover(
		function() {
			var a = $(this).find('a');
			a.hide();
			a.css("background-image", "url(images/"+a.context.id+"_on.gif)");
			a.fadeIn("slow");
		},
		function() {
			var a = $(this).find('a');
			a.fadeOut("slow");
			a.show();
		}
	);
	$('.right_box_center ul li a').hover(
		function(e) {
			$(this).animate({ left: 6 }, 'fast');
		},
		function(e) {
			$(this).animate({ left: 0 }, 'fast');
		}
	);
	$('#srch_fld').bind('keyup', searchbox.onChange);
	$('#search_form').submit(function() {
		if($('#srch_fld').val().length == 0) {
			return false;	
		}
		return true;
	});
	$("img").fullsize();
});