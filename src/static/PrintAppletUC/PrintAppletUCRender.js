function PrintAppletUC($)
{
	this.Url;
	this.Caminho;
	this.Arquivo;
	this.Copias;
	this.Printer;
	
	this.show = function()
	{
		///UserCodeRegionStart:[show] (do not remove this comment.)
		

		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)
	
	this.Executa = function()
	{
		var html = '';   
        html += '<applet code="printZipApplet" archive="'+this.Url + this.Caminho + 'PrintApplet.jar" width="1" height="1">';
        html += '<param name="URL" value=" ' + this.Url + this.Arquivo + '.zip">';
        html += '<param name="CHARSET" value="ISO-8859-1">';
        html += '<param name="COPIES" value="' + this.Copias + '">';
        html += '<param name="PRINTER" value="' + this.Printer + '">';
        html += 'Seu navegador não está devidamente configurado. <br />';
        html += 'Entre em contato com seu suporte técnico.';
        html += '</applet>';
		
		this.setHtml(html);
//		console.log('executou');
//		console.log(html);
	}
	///UserCodeRegionEnd: (do not remove this comment.):
}