function JSHandler()
{
	this.js;

	this.show = function()
	{
		///UserCodeRegionStart:[show] (do not remove this comment.)


		try {
			eval(this.js);
		} catch(e){}
		
		this.js = '';
		
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)


	
	
	
	
	
	///UserCodeRegionEnd: (do not remove this comment.):
}
