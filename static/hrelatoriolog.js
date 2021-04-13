/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:49:13.13
*/
gx.evt.autoSkip = false;
gx.define('hrelatoriolog', false, function () {
   this.ServerClass =  "hrelatoriolog" ;
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
   this.e11l52_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13l52_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15l52_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,20,22,24,27,29,32,34,43,45];
   this.GXLastCtrlId =45;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE4",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[17]={fld:"TABLERPERIODO",grid:0};
   GXValidFnc[20]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINICIAL",gxz:"ZV20DataInicial",gxold:"OV20DataInicial",gxvar:"AV20DataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20DataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV20DataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINICIAL",gx.O.AV20DataInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV20DataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[22]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFINAL",gxz:"ZV21DataFinal",gxold:"OV21DataFinal",gxvar:"AV21DataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21DataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV21DataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFINAL",gx.O.AV21DataFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV21DataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[27]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPERACAOLOG",gxz:"ZV23OperacaoLog",gxold:"OV23OperacaoLog",gxvar:"AV23OperacaoLog",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23OperacaoLog=Value},v2z:function(Value){gx.O.ZV23OperacaoLog=Value},v2c:function(){gx.fn.setComboBoxValue("vOPERACAOLOG",gx.O.AV23OperacaoLog)},c2v:function(){gx.O.AV23OperacaoLog=this.val()},val:function(){return gx.fn.getControlValue("vOPERACAOLOG")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODELORELATORIO",gxz:"ZV46ModeloRelatorio",gxold:"OV46ModeloRelatorio",gxvar:"AV46ModeloRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV46ModeloRelatorio=Value},v2z:function(Value){gx.O.ZV46ModeloRelatorio=Value},v2c:function(){gx.fn.setComboBoxValue("vMODELORELATORIO",gx.O.AV46ModeloRelatorio)},c2v:function(){gx.O.AV46ModeloRelatorio=this.val()},val:function(){return gx.fn.getControlValue("vMODELORELATORIO")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"JS", format:2,grid:0};
   GXValidFnc[45]={fld:"BTNHELP",grid:0};
   this.AV20DataInicial = gx.date.nullDate() ;
   this.ZV20DataInicial = gx.date.nullDate() ;
   this.OV20DataInicial = gx.date.nullDate() ;
   this.AV21DataFinal = gx.date.nullDate() ;
   this.ZV21DataFinal = gx.date.nullDate() ;
   this.OV21DataFinal = gx.date.nullDate() ;
   this.AV23OperacaoLog = "" ;
   this.ZV23OperacaoLog = "" ;
   this.OV23OperacaoLog = "" ;
   this.AV46ModeloRelatorio = "" ;
   this.ZV46ModeloRelatorio = "" ;
   this.OV46ModeloRelatorio = "" ;
   this.AV20DataInicial = gx.date.nullDate() ;
   this.AV21DataFinal = gx.date.nullDate() ;
   this.AV23OperacaoLog = "" ;
   this.AV46ModeloRelatorio = "" ;
   this.Events = {"e11l52_client": ["'FECHAR'", true] ,"e13l52_client": ["ENTER", true] ,"e15l52_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20DataInicial',fld:'vDATAINICIAL'},{av:'AV21DataFinal',fld:'vDATAFINAL'},{av:'AV51Pgmname',fld:'vPGMNAME'},{av:'AV46ModeloRelatorio',fld:'vMODELORELATORIO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV23OperacaoLog',fld:'vOPERACAOLOG'},{av:'AV52Pgmdesc',fld:'vPGMDESC'}],[{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV23OperacaoLog',fld:'vOPERACAOLOG'},{av:'AV21DataFinal',fld:'vDATAFINAL'},{av:'AV20DataInicial',fld:'vDATAINICIAL'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV48Orientacao',fld:'vORIENTACAO'}]];
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelatoriolog());
