$(document).ready(function(){
$(".form").hide()
$("img").click(function(){
 	$(".form").show();
	$(this).fadeTo("fast", 0.3);
});
});
