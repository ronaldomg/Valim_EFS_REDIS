function AjaxCaller()
{
	this.Width;
	this.Height;

	this.show = function()
	{
		///UserCodeRegionStart:[show] (do not remove this comment.)


		
		
		
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)


	this.Execute = function(procedure,Parametros)
	{
		var DatosEntrada =this.createDictionary(Parametros) 
		var mythis = this
		var res  = jQuery.ajax
		({
			url:procedure,
			data:DatosEntrada,
			async:false,
			type:"POST"
		 }
		).responseText;
		return res 
	}
	
	this.createDictionary = function(Parametros)
	{
		var DatosEntrada = {}
		for (j in Parametros)
		{
			DatosEntrada[Parametros[j].Key] = Parametros[j].Value
 		}
		return DatosEntrada
	}
	
	
	///UserCodeRegionEnd: (do not remove this comment.):
}
