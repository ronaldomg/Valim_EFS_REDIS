/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:1:5.79
*/
gx.evt.autoSkip = false;
gx.define('himpressaoautomatica', false, function () {
   this.ServerClass =  "himpressaoautomatica" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV8NomeArquivoImp=gx.fn.getControlValue("vNOMEARQUIVOIMP") ;
      this.AV5ImpressoraNome=gx.fn.getControlValue("vIMPRESSORANOME") ;
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
   this.e1328k2_client=function()
   {
      this.executeServerEvent("'FECHARIMPRESSAO'", false, null, false, false);
   };
   this.e1428k2_client=function()
   {
      this.executeServerEvent("'ERROIMPRESSAO'", false, null, false, false);
   };
   this.e1628k2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1728k2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,6,8,11];
   this.GXLastCtrlId =11;
   this.JSHANDLER1Container = gx.uc.getNew(this, 7, 0, "JSHandler", "JSHANDLER1Container", "Jshandler1");
   var JSHANDLER1Container = this.JSHANDLER1Container;
   JSHANDLER1Container.setDynProp("js", "Js", "", "str");
   JSHANDLER1Container.setProp("Visible", "Visible", true, "bool");
   JSHANDLER1Container.setProp("Enabled", "Enabled", true, "boolean");
   JSHANDLER1Container.setProp("Class", "Class", "", "char");
   JSHANDLER1Container.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(JSHANDLER1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"IMGPROC1",grid:0};
   GXValidFnc[6]={fld:"MSGTXT", format:0,grid:0};
   GXValidFnc[8]={fld:"JAVASCRIPT", format:2,grid:0};
   GXValidFnc[11]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Integradorurl,isvalid:null,rgrid:[],fld:"vINTEGRADORURL",gxz:"ZV12IntegradorURL",gxold:"OV12IntegradorURL",gxvar:"AV12IntegradorURL",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12IntegradorURL=Value},v2z:function(Value){gx.O.ZV12IntegradorURL=Value},v2c:function(){gx.fn.setControlValue("vINTEGRADORURL",gx.O.AV12IntegradorURL,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV12IntegradorURL=this.val()},val:function(){return gx.fn.getControlValue("vINTEGRADORURL")},nac:gx.falseFn};
   this.declareDomainHdlr( 11 , function() {
   });
   this.AV12IntegradorURL = "" ;
   this.AV8NomeArquivoImp = "" ;
   this.AV5ImpressoraNome = "" ;
   this.Events = {"e1328k2_client": ["'FECHARIMPRESSAO'", true] ,"e1428k2_client": ["'ERROIMPRESSAO'", true] ,"e1628k2_client": ["ENTER", true] ,"e1728k2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV8NomeArquivoImp',fld:'vNOMEARQUIVOIMP',hsh:true},{av:'AV5ImpressoraNome',fld:'vIMPRESSORANOME',hsh:true},{av:'AV12IntegradorURL',fld:'vINTEGRADORURL'}],[{av:'AV6XmlApplet',fld:'vXMLAPPLET'},{av:'AV7Data',fld:'vDATA'},{av:'this.JSHANDLER1Container.js',ctrl:'JSHANDLER1',prop:'js'}]];
   this.EvtParms["'FECHARIMPRESSAO'"] = [[],[{av:'AV10i',fld:'vI'}]];
   this.EvtParms["'ERROIMPRESSAO'"] = [[],[{av:'AV10i',fld:'vI'}]];
   this.setVCMap("AV8NomeArquivoImp", "vNOMEARQUIVOIMP", 0, "svchar");
   this.setVCMap("AV5ImpressoraNome", "vIMPRESSORANOME", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new himpressaoautomatica());
