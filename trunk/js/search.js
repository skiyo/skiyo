if (!searchbox)	var searchbox = {};
searchbox.init = function (){
	if (!$.browser.safari){
		$('#webkit').attr('href', 'css/search.css');
	}
};
searchbox.onChange = function (e){
	if ($('#srch_fld').val().length > 0){
		var btn = $('#srch_clear');
		btn.css('background', 'url(images/search/srch_r_f2.gif) no-repeat top left');
		btn.bind('click', searchbox.clearFld) ;
	}
};
searchbox.clearFld = function (){
	$('#srch_fld').val('');
	var btn = $('#srch_clear');
	btn.css('background', 'url(images/search/srch_r.gif) no-repeat top left');
	btn.unbind();
};