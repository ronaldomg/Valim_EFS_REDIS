/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:2:23.71
*/
gx.evt.autoSkip = false;
gx.define('hexcluioutrospagamentos', false, function () {
   this.ServerClass =  "hexcluioutrospagamentos" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Convenioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVENIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Convenioempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVENIOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11wq2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13wq2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15wq2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,18,20,23,25,27,33,37,40,42,44];
   this.GXLastCtrlId =44;
   GXValidFnc[3]={fld:"TABLE5",grid:0};
   GXValidFnc[6]={fld:"TABLE8",grid:0};
   GXValidFnc[9]={fld:"TABLE9",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Convenioid,isvalid:null,rgrid:[],fld:"vCONVENIOID",gxz:"ZV6ConvenioId",gxold:"OV6ConvenioId",gxvar:"AV6ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOID",gx.O.AV6ConvenioId,0)},c2v:function(){gx.O.AV6ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIONOME",gxz:"ZV7ConvenioNome",gxold:"OV7ConvenioNome",gxvar:"AV7ConvenioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7ConvenioNome=Value},v2z:function(Value){gx.O.ZV7ConvenioNome=Value},v2c:function(){gx.fn.setControlValue("vCONVENIONOME",gx.O.AV7ConvenioNome,0)},c2v:function(){gx.O.AV7ConvenioNome=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIONOME")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={fld:"TABLE10",grid:0};
   GXValidFnc[23]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINICIAL",gxz:"ZV8DataInicial",gxold:"OV8DataInicial",gxvar:"AV8DataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8DataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV8DataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINICIAL",gx.O.AV8DataInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV8DataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 23 , function() {
   });
   GXValidFnc[25]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFINAL",gxz:"ZV9DataFinal",gxold:"OV9DataFinal",gxvar:"AV9DataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9DataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9DataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFINAL",gx.O.AV9DataFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV9DataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 27 , function() {
   });
   GXValidFnc[33]={fld:"TABLE6",grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Convenioempresaid,isvalid:null,rgrid:[],fld:"vCONVENIOEMPRESAID",gxz:"ZV17ConvenioEmpresaId",gxold:"OV17ConvenioEmpresaId",gxvar:"AV17ConvenioEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17ConvenioEmpresaId=Value},v2z:function(Value){gx.O.ZV17ConvenioEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCONVENIOEMPRESAID",gx.O.AV17ConvenioEmpresaId,0)},c2v:function(){gx.O.AV17ConvenioEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"JAVASCRIPT", format:2,grid:0};
   GXValidFnc[42]={fld:"BTNHELP",grid:0};
   GXValidFnc[44]={fld:"PROMPT_CONVENIOID",grid:0};
   this.AV6ConvenioId = 0 ;
   this.ZV6ConvenioId = 0 ;
   this.OV6ConvenioId = 0 ;
   this.AV7ConvenioNome = "" ;
   this.ZV7ConvenioNome = "" ;
   this.OV7ConvenioNome = "" ;
   this.AV8DataInicial = gx.date.nullDate() ;
   this.ZV8DataInicial = gx.date.nullDate() ;
   this.OV8DataInicial = gx.date.nullDate() ;
   this.AV9DataFinal = gx.date.nullDate() ;
   this.ZV9DataFinal = gx.date.nullDate() ;
   this.OV9DataFinal = gx.date.nullDate() ;
   this.AV17ConvenioEmpresaId = "" ;
   this.ZV17ConvenioEmpresaId = "" ;
   this.OV17ConvenioEmpresaId = "" ;
   this.AV6ConvenioId = 0 ;
   this.AV7ConvenioNome = "" ;
   this.AV8DataInicial = gx.date.nullDate() ;
   this.AV9DataFinal = gx.date.nullDate() ;
   this.AV17ConvenioEmpresaId = "" ;
   this.A1681ConvenioId = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A2082ConvenioDescricao = "" ;
   this.Events = {"e11wq2_client": ["'FECHAR'", true] ,"e13wq2_client": ["ENTER", true] ,"e15wq2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV6ConvenioId',fld:'vCONVENIOID'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'AV17ConvenioEmpresaId',fld:'vCONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'},{av:'AV8DataInicial',fld:'vDATAINICIAL'},{av:'AV9DataFinal',fld:'vDATAFINAL'}],[{av:'AV16SnErro',fld:'vSNERRO'},{av:'AV24GXLvl43',fld:'vGXLVL43'},{av:'AV7ConvenioNome',fld:'vCONVENIONOME'},{av:'AV9DataFinal',fld:'vDATAFINAL'},{av:'AV8DataInicial',fld:'vDATAINICIAL'}]];
   this.setPrompt("PROMPT_CONVENIOID", [14]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hexcluioutrospagamentos());
