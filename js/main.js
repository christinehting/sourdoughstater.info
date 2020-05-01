jQuery(function($) {'use strict',
	
	//Initiat WOW JS
	new WOW().init();

	// recipe filter
	$(window).load(function(){'use strict';
		var $recipe_selectors = $('.recipe-filters>li>a');
		var $recipe_sections = $('.recipe-section');
		$recipe_selectors.on('click', function(){
			$recipe_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$recipe_sections.hide();
			$(selector).show();
			return false;
		});
	});


	
});