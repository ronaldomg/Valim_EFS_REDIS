/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:27:51.62
*/
gx.evt.autoSkip = false;
gx.define('hshowmessage', false, function () {
   this.ServerClass =  "hshowmessage" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV11mensagem=gx.fn.getControlValue("vMENSAGEM") ;
      this.AV12tipo=gx.fn.getControlValue("vTIPO") ;
   };
   this.s112_client=function()
   {
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&Aacute;", "Á")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&aacute;", "á")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&Acirc;", "Â")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&acirc;", "â")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&Agrave;", "À")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&agrave;", "à")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&Aring;", "Å")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&aring;", "å")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&Atilde;", "Ã")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&atilde;", "ã")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&Auml;", "Ä")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&auml;", "ä")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&AElig;", "Æ")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&aelig;", "æ")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&Eacute;", "É")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&eacute;", "é")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&Ecirc;", "Ê")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&ecirc;", "ê")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&Egrave;", "È")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&egrave;", "è")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&Euml;", "Ë")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&euml;", "ë")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&ETH;", "Ð")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&eth;", "ð")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&Iacute;", "Í")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&iacute;", "í")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&Icirc;", "Î")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&icirc;", "î")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&Igrave;", "Ì")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&igrave;", "ì")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&Iuml;", "Ï")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&iuml;", "ï")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&Oacute;", "Ó")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&oacute;", "ó")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&Ocirc;", "Ô")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&ocirc;", "ô")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&Ograve;", "Ò")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&ograve;", "ò")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&Oslash;", "Ø")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&oslash;", "ø")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&Otilde;", "Õ")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&otilde;", "õ")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&Ouml;", "Ö")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&ouml;", "ö")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&Uacute;", "Ú")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&uacute;", "ú")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&Ucirc;", "Û")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&ucirc;", "û")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&Ugrave", "Ù")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&ugrave;", "ù")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&Uuml;", "Ü")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&uuml;", "ü")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&Ccedil;", "Ç")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&ccedil;", "ç")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&Ntilde;", "Ñ")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&ntilde;", "ñ")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&Yacute;", "Ý")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&yacute;", "ý")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&quot;", "\"")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&lt;", "<")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&gt;", ">")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&amp;", "&")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&reg;", "®")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&copy;", "©")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&THORN;", "Þ")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&thorn;", "þ")  ;
      this.AV13MensagemAux =  gx.text.replaceAll( this.AV13MensagemAux, "&szlig;", "ß")  ;
   };
   this.e12ec2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14ec2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TXTMENSAGEM", format:0,grid:0};
   this.AV11mensagem = "" ;
   this.AV12tipo = "" ;
   this.AV13MensagemAux = "" ;
   this.Events = {"e12ec2_client": ["ENTER", true] ,"e14ec2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[],[]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV11mensagem", "vMENSAGEM", 0, "svchar");
   this.setVCMap("AV12tipo", "vTIPO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hshowmessage());
