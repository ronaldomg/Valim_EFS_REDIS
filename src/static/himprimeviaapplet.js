/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:5:42.0
*/
gx.evt.autoSkip = false;
gx.define('himprimeviaapplet', false, function () {
   this.ServerClass =  "himprimeviaapplet" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("8", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV17NomeArquivo=gx.fn.getControlValue("vNOMEARQUIVO") ;
      this.AV22NomeSessao=gx.fn.getControlValue("vNOMESESSAO") ;
      this.AV23NomeProc=gx.fn.getControlValue("vNOMEPROC") ;
   };
   this.Validv_Integradorurl=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vINTEGRADORURL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e13642_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e11642_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14642_client=function()
   {
      this.executeServerEvent("'EMAIL'", false, null, false, false);
   };
   this.e15642_client=function()
   {
      this.executeServerEvent("'INSTALADORINTEGRADOR'", false, null, false, false);
   };
   this.e16642_client=function()
   {
      this.executeServerEvent("'RECARREGAR'", false, null, false, false);
   };
   this.e19642_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,18,20,31,32,33,35];
   this.GXLastCtrlId =35;
   this.JSHANDLER1Container = gx.uc.getNew(this, 34, 10, "JSHandler", "JSHANDLER1Container", "Jshandler1");
   var JSHANDLER1Container = this.JSHANDLER1Container;
   JSHANDLER1Container.setDynProp("js", "Js", "", "str");
   JSHANDLER1Container.setProp("Visible", "Visible", true, "bool");
   JSHANDLER1Container.setProp("Enabled", "Enabled", true, "boolean");
   JSHANDLER1Container.setProp("Class", "Class", "", "char");
   JSHANDLER1Container.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(JSHANDLER1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vARQUIVO",gxz:"ZV8Arquivo",gxold:"OV8Arquivo",gxvar:"AV8Arquivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8Arquivo=Value},v2z:function(Value){gx.O.ZV8Arquivo=Value},v2c:function(){gx.fn.setControlValue("vARQUIVO",gx.O.AV8Arquivo,0)},c2v:function(){gx.O.AV8Arquivo=this.val()},val:function(){return gx.fn.getControlValue("vARQUIVO")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPORTA",gxz:"ZV10porta",gxold:"OV10porta",gxvar:"AV10porta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10porta=Value},v2z:function(Value){gx.O.ZV10porta=Value},v2c:function(){gx.fn.setComboBoxValue("vPORTA",gx.O.AV10porta)},c2v:function(){gx.O.AV10porta=this.val()},val:function(){return gx.fn.getControlValue("vPORTA")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOCOPIAS",gxz:"ZV9NoCopias",gxold:"OV9NoCopias",gxvar:"AV9NoCopias",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9NoCopias=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9NoCopias=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNOCOPIAS",gx.O.AV9NoCopias,0)},c2v:function(){gx.O.AV9NoCopias=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNOCOPIAS",'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"svchar",len:128,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRESSORADEFAULT",gxz:"ZV21ImpressoraDefault",gxold:"OV21ImpressoraDefault",gxvar:"AV21ImpressoraDefault",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21ImpressoraDefault=Value},v2z:function(Value){gx.O.ZV21ImpressoraDefault=Value},v2c:function(){gx.fn.setControlValue("vIMPRESSORADEFAULT",gx.O.AV21ImpressoraDefault,0)},c2v:function(){gx.O.AV21ImpressoraDefault=this.val()},val:function(){return gx.fn.getControlValue("vIMPRESSORADEFAULT")},nac:gx.falseFn};
   GXValidFnc[32]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNFECHAR",gxz:"ZV18SnFechar",gxold:"OV18SnFechar",gxvar:"AV18SnFechar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18SnFechar=Value},v2z:function(Value){gx.O.ZV18SnFechar=Value},v2c:function(){gx.fn.setControlValue("vSNFECHAR",gx.O.AV18SnFechar,0)},c2v:function(){gx.O.AV18SnFechar=this.val()},val:function(){return gx.fn.getControlValue("vSNFECHAR")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"JAVASCRIPT", format:2,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Integradorurl,isvalid:null,rgrid:[],fld:"vINTEGRADORURL",gxz:"ZV37IntegradorURL",gxold:"OV37IntegradorURL",gxvar:"AV37IntegradorURL",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37IntegradorURL=Value},v2z:function(Value){gx.O.ZV37IntegradorURL=Value},v2c:function(){gx.fn.setControlValue("vINTEGRADORURL",gx.O.AV37IntegradorURL,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV37IntegradorURL=this.val()},val:function(){return gx.fn.getControlValue("vINTEGRADORURL")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   this.AV8Arquivo = "" ;
   this.ZV8Arquivo = "" ;
   this.OV8Arquivo = "" ;
   this.AV10porta = "" ;
   this.ZV10porta = "" ;
   this.OV10porta = "" ;
   this.AV9NoCopias = 0 ;
   this.ZV9NoCopias = 0 ;
   this.OV9NoCopias = 0 ;
   this.AV21ImpressoraDefault = "" ;
   this.ZV21ImpressoraDefault = "" ;
   this.OV21ImpressoraDefault = "" ;
   this.AV18SnFechar = "" ;
   this.ZV18SnFechar = "" ;
   this.OV18SnFechar = "" ;
   this.AV37IntegradorURL = "" ;
   this.ZV37IntegradorURL = "" ;
   this.OV37IntegradorURL = "" ;
   this.AV8Arquivo = "" ;
   this.AV10porta = "" ;
   this.AV9NoCopias = 0 ;
   this.AV21ImpressoraDefault = "" ;
   this.AV18SnFechar = "" ;
   this.AV37IntegradorURL = "" ;
   this.AV17NomeArquivo = "" ;
   this.AV22NomeSessao = "" ;
   this.AV23NomeProc = "" ;
   this.A285ImpressoraNome = "" ;
   this.A198ImpressoraId = 0 ;
   this.A75UsuarioId = "" ;
   this.A2858UsuarioImpressoraNome = "" ;
   this.A1567UsuarioImpressoraId = 0 ;
   this.Events = {"e13642_client": ["ENTER", true] ,"e11642_client": ["'FECHAR'", true] ,"e14642_client": ["'EMAIL'", true] ,"e15642_client": ["'INSTALADORINTEGRADOR'", true] ,"e16642_client": ["'RECARREGAR'", true] ,"e19642_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[{ctrl:'BTNRECARREGAR',prop:'Visible'}]];
   this.EvtParms["ENTER"] = [[{av:'AV22NomeSessao',fld:'vNOMESESSAO'},{av:'AV10porta',fld:'vPORTA'},{av:'AV23NomeProc',fld:'vNOMEPROC'},{av:'AV8Arquivo',fld:'vARQUIVO',hsh:true},{av:'AV17NomeArquivo',fld:'vNOMEARQUIVO'},{av:'this.AV11http.Serverhost',ctrl:'vHTTP',prop:'Serverhost'},{av:'this.AV11http.Serverport',ctrl:'vHTTP',prop:'Serverport'},{av:'AV9NoCopias',fld:'vNOCOPIAS'},{av:'AV37IntegradorURL',fld:'vINTEGRADORURL'}],[{av:'AV24ParmRelat',fld:'vPARMRELAT'},{av:'AV25ImpressoraId',fld:'vIMPRESSORAID'},{av:'AV17NomeArquivo',fld:'vNOMEARQUIVO'},{av:'AV18SnFechar',fld:'vSNFECHAR'},{av:'AV36XmlApplet',fld:'vXMLAPPLET'},{av:'AV34Data',fld:'vDATA'},{av:'this.JSHANDLER1Container.js',ctrl:'JSHANDLER1',prop:'js'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV22NomeSessao',fld:'vNOMESESSAO'},{av:'AV18SnFechar',fld:'vSNFECHAR'},{av:'AV23NomeProc',fld:'vNOMEPROC'},{av:'AV17NomeArquivo',fld:'vNOMEARQUIVO'}],[{av:'AV18SnFechar',fld:'vSNFECHAR'}]];
   this.EvtParms["'EMAIL'"] = [[{av:'AV22NomeSessao',fld:'vNOMESESSAO'},{av:'AV10porta',fld:'vPORTA'},{av:'AV23NomeProc',fld:'vNOMEPROC'},{av:'AV8Arquivo',fld:'vARQUIVO',hsh:true},{av:'AV30SdtParmEmail',fld:'vSDTPARMEMAIL'}],[{av:'AV24ParmRelat',fld:'vPARMRELAT'},{av:'AV25ImpressoraId',fld:'vIMPRESSORAID'},{av:'AV17NomeArquivo',fld:'vNOMEARQUIVO'},{av:'AV18SnFechar',fld:'vSNFECHAR'},{av:'AV30SdtParmEmail',fld:'vSDTPARMEMAIL'}]];
   this.EvtParms["'INSTALADORINTEGRADOR'"] = [[],[{av:'this.JSHANDLER1Container.js',ctrl:'JSHANDLER1',prop:'js'},{av:'AV33ArquivoInst',fld:'vARQUIVOINST'}]];
   this.EvtParms["'RECARREGAR'"] = [[{av:'AV37IntegradorURL',fld:'vINTEGRADORURL'}],[{av:'AV34Data',fld:'vDATA'},{av:'this.JSHANDLER1Container.js',ctrl:'JSHANDLER1',prop:'js'}]];
   this.EnterCtrl = ["BTNIMPRIMIR"];
   this.setVCMap("AV17NomeArquivo", "vNOMEARQUIVO", 0, "char");
   this.setVCMap("AV22NomeSessao", "vNOMESESSAO", 0, "svchar");
   this.setVCMap("AV23NomeProc", "vNOMEPROC", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new himprimeviaapplet());
