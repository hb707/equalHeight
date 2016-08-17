# equalHeight v1.2
It supports the window resize, dont need to trigger it in your main script.

# equalHeight v1.1.1
an easy jQuery Plugin to equal elements height.

==========================================================
For more suggestions you can contact me at :

- facebook : https://www.facebook.com/hosny707
- gmail : housnibenabid@gmail.com
- LinkedIn : https://ma.linkedin.com/in/housnibenabid
==========================================================

Plugin details :

-> Default settings : 
$(element).equalHeight({
	dimension : "none",
	max_width : 0,
	min_width : 0,
	referer : max
})

-> Description : 
	dimension : set if you want the equalHeight works for innerHeight outerHeight or only height
				none : height
				outer : outerHeight
				inner : innerHeight

	max_width : set the max window width to run this plugin (0: disable option)

	min_width : set the min window width to run this plugin (0: disable option)

	referer : Set what height should concider (min, max).
