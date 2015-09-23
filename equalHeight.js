(function($){
	$.fn.equalHeight = function(){
		var init = 0;
		this.each(function() {
    		$(this).height("")
			if(init <= $(this).height())
				init = $(this).height();
		})

		return this.height(init);
	}
})(jQuery);