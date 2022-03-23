$(document).ready(function(){
	$('#countdown').countdown({ date: '26 March 2022 15:10'}, function(){
		$('#countdown').text('We are live');
	});
})