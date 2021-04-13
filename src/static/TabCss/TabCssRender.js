function TabCss($)
{
	this.Data;
	this.Width;
	this.Height;	
	this.Position;
	this.CookieId;
	var mthis = this;
	
	// Databinding for property Data
	this.SetData = function(data)
	{
		///UserCodeRegionStart:[SetData] (do not remove this comment.)
		this.Data = data;
		///UserCodeRegionEnd: (do not remove this comment.)
	}
	// Databinding for property Data
	this.GetData = function()
	{
		///UserCodeRegionStart:[GetData] (do not remove this comment.)
		return this.Data;
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	this.show = function()
	{	
		///UserCodeRegionStart:[show] (do not remove this comment.)

		var currentTabCss = document.querySelector("."+mthis.ContainerName);
		if (!currentTabCss) {
			var html  = '<div class="tabs-container '+mthis.ContainerName+'">';
				for (var i=0;i<this.Data.length;i++) {
					html += '<div class="tabs-block-'+mthis.ContainerName+'">';
					html += '<input type="radio" class="tabs action-'+this.ContainerName+'" id="tab'+mthis.ContainerName+'_'+i+'" checked>';
					html += '<label for="tab'+mthis.ContainerName+'_'+i+'">'+mthis.Data[i].name+'</label>';
					html += '<div class="tabs-dest"></div>';
					html += '</div>';
				}				
				html += '</div>';
			this.setHtml(html);						
		}
		currentTabCss = document.querySelector("."+mthis.ContainerName);
		
		var action = currentTabCss.querySelectorAll(".tabs-block-"+mthis.ContainerName);
		var dest  = currentTabCss.querySelectorAll(".tabs-dest");
		var nodesArray = Array.prototype.slice.call(action);
	
		var _width = 0;
		var _height = 0;
	
		for (var i = 0; i < this.Data.length; i++) {
			var tab = document.getElementById(this.Data[i].content);
			
			_width = (_width < tab.offsetWidth) ? tab.offsetWidth : _width;
			_height = (_height < tab.offsetHeight) ? tab.offsetHeight : _height;
			
			//checa se já moveu o conteudo não faz nada
			if (!tab.parentNode.classList.contains('tabs-dest')) {
				dest[i].appendChild(tab);		
				
			}
			
			if (this.Data[i] && !this.Data[i].enable) {	
				action[i].firstChild.disabled=true;
				
			} else{
				action[i].addEventListener("click", function (e) {											
							    if (e.target.classList.contains('action-'+mthis.ContainerName)) {
									mthis.setCookie(mthis.ContainerName,  nodesArray.indexOf(this) + 1, 1);
								//localStorage.setItem(mthis.ContainerName, nodesArray.indexOf(this) + 1);
								mthis.loadPosition();
							    }
				})
				action[i].firstChild.disabled=false;
			}
			
		}
		
		//Configura o tamanho
		if (_height > 0)
			currentTabCss.style.height  = _height+30+'px';
		if (_width > 0)
			currentTabCss.style.width  = _width+'px';
		
		this.loadPosition();		
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)
	
	//Recarrega a posição
	this.loadPosition = function () {
		var currentPosition = mthis.getCookie(mthis.ContainerName);//localStorage.getItem(mthis.ContainerName);
		var tabs = document.querySelectorAll(".action-"+mthis.ContainerName);
		
		if (!currentPosition || currentPosition < 1) {
			currentPosition = 1;			
		} else if (currentPosition > tabs.length){
			currentPosition = tabs.length;
		}
		mthis.setCookie(mthis.ContainerName, currentPosition, 1);
		//localStorage.setItem(mthis.ContainerName, currentPosition);

		for (var i = 0; i < tabs.length; i++) {
			if (i == currentPosition - 1) {
				tabs[i].checked = true;
			} else {
				tabs[i].checked = false;
			}
		}		
		mthis.Position = parseInt(currentPosition);
		if (mthis.change) {
			mthis.change();
		}
	}
	
	//Marca a posição
	this.setPosition = function(position) {
		mthis.setCookie(mthis.ContainerName, position, 1);
		//localStorage.setItem(mthis.ContainerName, position);
		mthis.loadPosition();
	}
	
	this.getCookie = function(cname) {
		cname = mthis.getObjectId();
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i = 0; i <ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length,c.length);
			}
		}
		return 1;
	}
	
	this.setCookie = function(cname, cvalue, exdays) {
		cname = mthis.getObjectId();
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+d.toUTCString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	}

	this.getObjectId = function () {		
		/*var objeto = document.MAINFORM.action;
		var name = mthis.ControlName;
		name = name.toLowerCase();
		if (objeto.indexOf("?") >=0) {
			objeto = objeto.substr(0,objeto.indexOf("?"));
		}
	
		objeto = objeto.substr(document.MAINFORM.action.lastIndexOf("/")+1,objeto.length-document.MAINFORM.action.lastIndexOf("/"));
		while ((/([:]|[/]|[.]|[-])/).exec(objeto)!=null) {
			objeto = objeto.replace(/([:]|[/]|[.]|[-])/,"_");
		}
		
		return objeto + '_' + name;
		*/
		return mthis.CookieId;
	}
	///UserCodeRegionEnd: (do not remove this comment.):
}
