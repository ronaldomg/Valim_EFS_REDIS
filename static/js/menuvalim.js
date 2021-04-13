function create_menu(id,arr,parr){
	var html;
	html = "<div id='menu'>";
	html +="<div class='main'>"
	var nivel;
	var tipo;
	var titulo;
	var link;
	var target;
	var ordem;
	var recalcula;
	var proximo;
	var nivelAnterior = 1;
	var retorno = [0,''];
	while (retorno[0]<arr.length){
		retorno = recursaoMenu(arr, retorno[0], '');
		html+=retorno[1];
	}
	html+="</div></div>"
	document.getElementsByClassName('gx-content-placeholder')[0].innerHTML+=html;
}

document.onreadystatechange = function () {
	console.log(document.readyState);
	gx.fx.obs.addObserver('gx.onload', this, doneloading);
}
function doneloading(){
	var container = document.getElementsByClassName('gx-content-placeholder')[0];
	container.style.maxHeight = '100%';
	if(container.parentNode.offsetHeight<400){
		container.style.minHeight = '530px';
	}else{
		container.style.minHeight = container.parentNode.offsetHeight+'px';
	}
	gx.fx.obs.deleteObserver('gx.onload',this,doneloading);
}
function recursaoMenu(arr, pos, html){
	var i = pos;
	while(i<arr.length){
		nivel = arr[i][0]-1;
		tipo = arr[i][1];
		titulo = arr[i][2];
		link = arr[i][3];
		target = arr[i][4];
		ordem = arr[i][5];
		recalcula = arr[i][6];
		if(i<arr.length-1){
			proximo = arr[i+1][0]-1;
		}
		if(link != null){
			if(recalcula == "S"){
				html+="<span><a href=\"javascript:recalculoCustoMedio('"+ link +"');\">"+titulo+"</a>";
			}else{
				html+="<span><a href=\""+ link +"\"target=\""+target+"\">"+titulo+"</a>";
			}
		}else{
			if(nivel > 0){
				html+="<span class='hasChild' id='parentdiv"+nivel+"-"+ordem+"' onclick='javascript:toggleVisibility(\"div"+nivel+"-"+ordem+"\", "+nivel+", this);' >"+titulo;
			}else{
				html+="<span class='root' onclick='javascript:toggleVisibility(\"div"+nivel+"-"+ordem+"\", "+nivel+", this);'>"+titulo;
			}
		}
		if (nivel < proximo){
			html+="</span><div id='div"+nivel+"-"+ordem+"'  class='gone'>";
			return recursaoMenu(arr, i+1, html);
		}
		if(nivel > proximo){
			for (var j=0;j<nivel-proximo;j++){
				html+="</span></div>";
			}
		}
		if(nivel == proximo){
			html+="</span>"
		}
		i++;
	}
	return [i,html];
}

function toggleVisibility(quem, lvl, fireEl){
	console.log("-------------------------->");
	console.log('quem'+quem);
	console.log('lvl'+lvl);
	console.log('element'+fireEl);
	console.log("<--------------------------");
	if(fireEl === undefined){
		fireEl = document.getElementById(quem);
		if(fireEl != undefined){
			for(var l=0;l<=lvl;l++){
				fireEl = fireEl.previousSibling;
				console.log(fireEl)
				if(fireEl !== null){
					fireEl.classList.toggle('open');
				}
			}
		}
	}else{
		fireEl.classList.toggle('open');
	}
	if(lvl > 0){
		document.getElementById('parent'+quem).classList.toggle('parentActive');
		document.getElementById(quem).classList.toggle('showDiv');
		if (document.getElementById(quem).classList.contains('showDiv')){
			document.getElementById(quem).classList.remove('gone');
		}else{
			document.getElementById(quem).classList.add('gone');
		}
		for(var i=0;i<document.getElementById(quem).childNodes.length;i++){
			if (document.getElementById(quem).childNodes[i].nodeType === 1){
				document.getElementById(quem).childNodes[i].classList.toggle('showSpan');
			}
		}
	}else{
		if (document.getElementById(quem) != null)
		{
			if(document.getElementById(quem).classList.contains('showDiv')){
			var children = document.getElementById(quem).childNodes;
			for(var i=0; i<children.length; i++){
				if(children[i].nodeType === 1){
					if((children[i].tagName === 'DIV')&&(children[i].classList.contains('showDiv'))){
						for(var j=0;j<children[i].childNodes.length;j++){
							children[i].childNodes[j].classList.remove('showDiv');
							children[i].childNodes[j].classList.remove('showSpan');
							children[i].childNodes[j].classList.remove('parentActive');
						}
					}
					children[i].classList.remove('showDiv')
					children[i].classList.remove('showSpan')
					children[i].classList.remove('parentActive');
				}
			}
			document.getElementById(quem).classList.remove('showDiv');
			document.getElementById(quem).classList.add('gone');
		}else{
			document.getElementById(quem).classList.add('showDiv');
			document.getElementById(quem).classList.remove('gone');
			for(var i=0;i<document.getElementById(quem).childNodes.length;i++){
				if (document.getElementById(quem).childNodes[i].nodeType === 1){
					document.getElementById(quem).childNodes[i].classList.add('showSpan');
				}
			}
		}
		}
	}
	
	Set_Cookie( 'menuvalim', quem, '', '/', '', '' );
	Set_Cookie( 'nvmenuvalim',lvl, '', '/', '', '' );
}

function change(quem,lvl){
	if (lvl > 0){
		toggleVisibility(document.getElementById(quem).parentNode.id, 0);
		document.getElementById(document.getElementById(quem).parentNode.id).previousSibling.scrollIntoView()
	}else{
		if(document.getElementById(quem) != undefined){
			if(document.getElementById(quem).previousSibling != undefined){
				document.getElementById(quem).previousSibling.scrollIntoView();
			}
		}
	}
	console.log(quem);
	console.log(lvl);
	toggleVisibility(quem,lvl);
}

function recalculoCustoMedio(prog)
{
    document.getElementById("vLINKPROGRAMA").value = prog;
    gx.O.executeServerEvent("'RECALCULOCUSTOMEDIO'",false);
}

function Get_Cookie( name ) 
{	
	var start = document.cookie.indexOf( name + "=" );
	var len = start + name.length + 1;
	
	if ( ( !start ) && ( name != document.cookie.substring( 0, name.length ) ) )	
	{
		return null;
	}
	
	if ( start == -1 ) 
		return null;
		
	var end = document.cookie.indexOf( ";", len );
	
	if ( end == -1 ) 
		end = document.cookie.length;
		
	return unescape( document.cookie.substring( len, end ) );
}

function Set_Cookie( name, value, expires, path, domain, secure ) 
{
	// seta o tempo em milisegundos
	var today = new Date();
	today.setTime( today.getTime() );

//	/*
	//	Define expiração do Cookie
	//	delete * 24, for minutes, delete * 60 * 24
	//* /
	if ( expires )
	{
		expires = expires * 1000 * 60 * 60 * 24;
	}
	
	var expires_date = new Date( today.getTime() + (expires) );

	document.cookie = name + "=" +escape( value ) + 
					  ( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) + 
					  ( ( path ) ? ";path=" + path : "" ) + 
                      ( ( domain ) ? ";domain=" + domain : "" ) +
                      ( ( secure ) ? ";secure" : "" );
}
