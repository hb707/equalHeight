(function($){
	$.fn.equalHeight = function(options){
		var init = 0;

		var default_settings = {
			max_width : 0,
			min_width : 0,
			dimension : "none"
		}

		var settings = $.extend(default_settings,options);

		if((settings.min_width && settings.max_width && $(window).innerWidth()>=settings.min_width && $(window).innerWidth()<=settings.max_width) || (settings.min_width && !settings.max_width && $(window).innerWidth()>=settings.min_width) || (!settings.min_width && settings.max_width && $(window).innerWidth()<=settings.max_width) || (!settings.min_width && !settings.max_width)){
			this.each(function() {
	    		$(this).height("")
				if(init <= $(this).height())
					init = $(this).height();
			})

			if(settings.dimension=="outer")
				return this.outerHeight(init);
			else if(settings.dimension=="inner")
				return this.innerHeight(init);
			else
				return this.height(init);

		}else{
			return this.height("");
		}
	}
})(jQuery);
