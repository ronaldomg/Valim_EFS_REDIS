/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:27:12.41
*/
gx.evt.autoSkip = false;
gx.define('hdespesasbancariasindevidas', false, function () {
   this.ServerClass =  "hdespesasbancariasindevidas" ;
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
   this.e11e42_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13e42_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15e42_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,18,19,22,24,27,29,31,40,42,44];
   this.GXLastCtrlId =44;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE4",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Convenioid,isvalid:null,rgrid:[],fld:"vCONVENIOID",gxz:"ZV20ConvenioId",gxold:"OV20ConvenioId",gxvar:"AV20ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOID",gx.O.AV20ConvenioId,0)},c2v:function(){gx.O.AV20ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIODESCRICAO",gxz:"ZV25ConvenioDescricao",gxold:"OV25ConvenioDescricao",gxvar:"AV25ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25ConvenioDescricao=Value},v2z:function(Value){gx.O.ZV25ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONVENIODESCRICAO",gx.O.AV25ConvenioDescricao,0)},c2v:function(){gx.O.AV25ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[19]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Convenioempresaid,isvalid:null,rgrid:[],fld:"vCONVENIOEMPRESAID",gxz:"ZV24ConvenioEmpresaId",gxold:"OV24ConvenioEmpresaId",gxvar:"AV24ConvenioEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24ConvenioEmpresaId=Value},v2z:function(Value){gx.O.ZV24ConvenioEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCONVENIOEMPRESAID",gx.O.AV24ConvenioEmpresaId,0)},c2v:function(){gx.O.AV24ConvenioEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[24]={fld:"TABLERANGEDATA",grid:0};
   GXValidFnc[27]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINI",gxz:"ZV21DataIni",gxold:"OV21DataIni",gxvar:"AV21DataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21DataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV21DataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINI",gx.O.AV21DataIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV21DataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 27 , function() {
   });
   GXValidFnc[29]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFIM",gxz:"ZV22DataFim",gxold:"OV22DataFim",gxvar:"AV22DataFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22DataFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV22DataFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFIM",gx.O.AV22DataFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV22DataFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 31 , function() {
   });
   GXValidFnc[40]={fld:"JS", format:2,grid:0};
   GXValidFnc[42]={fld:"BTNHELP",grid:0};
   GXValidFnc[44]={fld:"PROMPT_CONVENIOID",grid:0};
   this.AV20ConvenioId = 0 ;
   this.ZV20ConvenioId = 0 ;
   this.OV20ConvenioId = 0 ;
   this.AV25ConvenioDescricao = "" ;
   this.ZV25ConvenioDescricao = "" ;
   this.OV25ConvenioDescricao = "" ;
   this.AV24ConvenioEmpresaId = "" ;
   this.ZV24ConvenioEmpresaId = "" ;
   this.OV24ConvenioEmpresaId = "" ;
   this.AV21DataIni = gx.date.nullDate() ;
   this.ZV21DataIni = gx.date.nullDate() ;
   this.OV21DataIni = gx.date.nullDate() ;
   this.AV22DataFim = gx.date.nullDate() ;
   this.ZV22DataFim = gx.date.nullDate() ;
   this.OV22DataFim = gx.date.nullDate() ;
   this.AV20ConvenioId = 0 ;
   this.AV25ConvenioDescricao = "" ;
   this.AV24ConvenioEmpresaId = "" ;
   this.AV21DataIni = gx.date.nullDate() ;
   this.AV22DataFim = gx.date.nullDate() ;
   this.A1681ConvenioId = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.Events = {"e11e42_client": ["'FECHAR'", true] ,"e13e42_client": ["ENTER", true] ,"e15e42_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20ConvenioId',fld:'vCONVENIOID'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'AV24ConvenioEmpresaId',fld:'vCONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'AV21DataIni',fld:'vDATAINI'},{av:'AV22DataFim',fld:'vDATAFIM'},{av:'AV52Pgmname',fld:'vPGMNAME'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV25ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV53Pgmdesc',fld:'vPGMDESC'}],[{av:'AV23tpErro',fld:'vTPERRO'},{av:'AV54GXLvl65',fld:'vGXLVL65'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV22DataFim',fld:'vDATAFIM'},{av:'AV21DataIni',fld:'vDATAINI'},{av:'AV25ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV20ConvenioId',fld:'vCONVENIOID'},{av:'AV24ConvenioEmpresaId',fld:'vCONVENIOEMPRESAID'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.setPrompt("PROMPT_CONVENIOID", [17]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hdespesasbancariasindevidas());
