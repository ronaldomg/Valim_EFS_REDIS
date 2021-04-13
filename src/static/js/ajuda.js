//document.onkeyup    = keyHitIE;
document.onkeydown = keyHitFX;

if (document.layers) {
	document.captureEvents(Event.KEYDOWN); 
}

function keyHitIE(event)
{
	if (event) {
		thisKey = event.which;
	} else {
		thisKey = window.event.keyCode;
	}
	
	// IE
	if (thisKey == 112) {
		doAjuda(2);
	}
} 

function keyHitFX(event)
{
	
	// FireFox
	try {
		if (event.key == "F1") {
			event.stopPropagation(); 
			event.preventDefault();	
			doAjuda(1);
		}	
	} catch(e) {}		
	
} 

function doAjuda(tipo) {
	var imgs = document.images;
	for(var i = 0; i < imgs.length; i++) {
		obj = imgs[i];
		if (obj.id == "BTNHELP") {	
			if (tipo==2) {
				obj.click();
			} else {
				window.open(obj.parentNode,"","");	
			}
			return;
		}
	}
}

function AbreHelp() {
	window.open(linkHelp, 'Help');
	return false;
}