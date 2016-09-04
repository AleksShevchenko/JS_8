
// Hover

$('.label').hover(
	function(){
		$(this).next('.help').stop().fadeIn();
	},
    function(){
    	$('.help').stop().fadeOut();
    });

// focus with Tab

$('.label').focusin(function(){
	$(this).next('.help').stop().fadeIn();
});
$('.label').focusout(function(){
	$('.help').stop().fadeOut();
});

//click 'Show-Help' 

$('.show-help').on('click', function(){
  $('.help').css('display', 'inline-block');
});
