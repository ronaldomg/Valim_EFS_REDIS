/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:46:23.10
*/
gx.evt.autoSkip = false;
gx.define('hpagamentosconvenio', false, function () {
   this.ServerClass =  "hpagamentosconvenio" ;
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
   this.e131gf2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e111gf2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151gf2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,13,16,18,21,23,25,28,30,31,34,36,45,46,48,50];
   this.GXLastCtrlId =50;
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE7",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV24Diretorio",gxold:"OV24Diretorio",gxvar:"AV24Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24Diretorio=Value},v2z:function(Value){gx.O.ZV24Diretorio=Value},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV24Diretorio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV24Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 13 , function() {
   });
   GXValidFnc[16]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[18]={fld:"TABLE4",grid:0};
   GXValidFnc[21]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINICIAL",gxz:"ZV25DataInicial",gxold:"OV25DataInicial",gxvar:"AV25DataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25DataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV25DataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINICIAL",gx.O.AV25DataInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV25DataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 21 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFINAL",gxz:"ZV26DataFinal",gxold:"OV26DataFinal",gxvar:"AV26DataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26DataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV26DataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFINAL",gx.O.AV26DataFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV26DataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Convenioid,isvalid:null,rgrid:[],fld:"vCONVENIOID",gxz:"ZV27ConvenioId",gxold:"OV27ConvenioId",gxvar:"AV27ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOID",gx.O.AV27ConvenioId,0)},c2v:function(){gx.O.AV27ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIODESCRICAO",gxz:"ZV30ConvenioDescricao",gxold:"OV30ConvenioDescricao",gxvar:"AV30ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ConvenioDescricao=Value},v2z:function(Value){gx.O.ZV30ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONVENIODESCRICAO",gx.O.AV30ConvenioDescricao,0)},c2v:function(){gx.O.AV30ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONVENIO",gxz:"ZV28TipoConvenio",gxold:"OV28TipoConvenio",gxvar:"AV28TipoConvenio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28TipoConvenio=Value},v2z:function(Value){gx.O.ZV28TipoConvenio=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOCONVENIO",gx.O.AV28TipoConvenio)},c2v:function(){gx.O.AV28TipoConvenio=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONVENIO")},nac:gx.falseFn};
   GXValidFnc[45]={fld:"JS", format:2,grid:0};
   GXValidFnc[46]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Convenioempresaid,isvalid:null,rgrid:[],fld:"vCONVENIOEMPRESAID",gxz:"ZV29ConvenioEmpresaId",gxold:"OV29ConvenioEmpresaId",gxvar:"AV29ConvenioEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ConvenioEmpresaId=Value},v2z:function(Value){gx.O.ZV29ConvenioEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCONVENIOEMPRESAID",gx.O.AV29ConvenioEmpresaId,0)},c2v:function(){gx.O.AV29ConvenioEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"BTNHELP",grid:0};
   GXValidFnc[50]={fld:"PROMPT_CONVENIOID",grid:0};
   this.AV24Diretorio = "" ;
   this.ZV24Diretorio = "" ;
   this.OV24Diretorio = "" ;
   this.AV25DataInicial = gx.date.nullDate() ;
   this.ZV25DataInicial = gx.date.nullDate() ;
   this.OV25DataInicial = gx.date.nullDate() ;
   this.AV26DataFinal = gx.date.nullDate() ;
   this.ZV26DataFinal = gx.date.nullDate() ;
   this.OV26DataFinal = gx.date.nullDate() ;
   this.AV27ConvenioId = 0 ;
   this.ZV27ConvenioId = 0 ;
   this.OV27ConvenioId = 0 ;
   this.AV30ConvenioDescricao = "" ;
   this.ZV30ConvenioDescricao = "" ;
   this.OV30ConvenioDescricao = "" ;
   this.AV28TipoConvenio = "" ;
   this.ZV28TipoConvenio = "" ;
   this.OV28TipoConvenio = "" ;
   this.AV29ConvenioEmpresaId = "" ;
   this.ZV29ConvenioEmpresaId = "" ;
   this.OV29ConvenioEmpresaId = "" ;
   this.AV24Diretorio = "" ;
   this.AV25DataInicial = gx.date.nullDate() ;
   this.AV26DataFinal = gx.date.nullDate() ;
   this.AV27ConvenioId = 0 ;
   this.AV30ConvenioDescricao = "" ;
   this.AV28TipoConvenio = "" ;
   this.AV29ConvenioEmpresaId = "" ;
   this.A1681ConvenioId = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A2082ConvenioDescricao = "" ;
   this.A2867ContribuinteEmpresaId = "" ;
   this.A2868ContribuinteId = 0 ;
   this.A2869ContribuinteNome = "" ;
   this.Events = {"e131gf2_client": ["ENTER", true] ,"e111gf2_client": ["'FECHAR'", true] ,"e151gf2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV21SNErro',fld:'vSNERRO'},{av:'AV24Diretorio',fld:'vDIRETORIO'},{av:'AV25DataInicial',fld:'vDATAINICIAL'},{av:'AV26DataFinal',fld:'vDATAFINAL'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28TipoConvenio',fld:'vTIPOCONVENIO'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'AV29ConvenioEmpresaId',fld:'vCONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'}],[{av:'AV21SNErro',fld:'vSNERRO'},{av:'AV47GXLvl140',fld:'vGXLVL140'},{av:'AV30ConvenioDescricao',fld:'vCONVENIODESCRICAO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_CONVENIOID", [30]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hpagamentosconvenio());
