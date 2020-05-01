jQuery(function($) {'use strict',
	
	//Initiat WOW JS
	new WOW().init();

	// portfolio filter
	$(window).load(function(){'use strict';
		var $portfolio_selectors = $('.recipe-filters>li>a');
		var $recipe_sections = $('.recipe-section');
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$recipe_sections.hide();
			$(selector).show();
			return false;
		});
	});


	
});