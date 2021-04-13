var idComponent;
var idComponent2;
var idImpressora;
var idImpressora2;

function ListPrinter($)
{
	this.AttachControl;
	this.PrinterControl;
	this.AttachControl2;
	this.PrinterControl2;
	this.Url;
	this.Caminho;
	
	this.show = function()
	{
		///UserCodeRegionStart:[show] (do not remove this comment.)
		idComponent = this.AttachControl;
		idComponent2 = this.AttachControl2;
		idImpressora = this.PrinterControl;
		idImpressora2 = this.PrinterControl2;
		
		var html = '';
		html += '<applet code="ListApplet"  archive="'+this.Url + this.Caminho + 'PrintApplet.jar" width="1" height="1">';
		html += 'Seu navegador não está devidamente configurado. <br />';
		html += 'Entre em contato com seu suporte técnico.';
		html += '</applet>';
		
		this.setHtml(html);

		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)
	///UserCodeRegionEnd: (do not remove this comment.):
}

function ValorCombo(texto) {	
     var arr = texto.split(";");
	 var tmpform = document.forms[0];
	 var impde = tmpform.querySelector('#'+idImpressora);
	 
	 var obj = document.getElementById(idComponent);
	 obj = obj==null ? tmpform.querySelector('#'+idComponent): obj ;
	 while(obj.length > 0) obj[0] = null;
	 for (var i = 0;i<arr.length;i++){
		 var sel = false;        
		 if (impde.value == arr[i]){     
			 sel = true;}     
		 obj.options.add(new Option(arr[i],arr[i],sel,sel));           
	 }	
	 
	 if (idImpressora2 != "") {
		var impde2 = tmpform.querySelector('#'+idImpressora2);
		obj = document.getElementById(idComponent2);
		obj = obj==null ? tmpform.querySelector('#'+idComponent2): obj ;
		while(obj.length > 0) obj[0] = null;
		for (var i = 0;i<arr.length;i++){
			var sel = false;        
			if (impde2.value == arr[i]){     
				sel = true;}     
			obj.options.add(new Option(arr[i],arr[i],sel,sel));           
		}
	} 
}
	 