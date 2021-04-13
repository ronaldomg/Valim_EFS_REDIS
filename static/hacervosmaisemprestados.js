/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:47:54.70
*/
gx.evt.autoSkip = false;
gx.define('hacervosmaisemprestados', false, function () {
   this.ServerClass =  "hacervosmaisemprestados" ;
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
   this.e11092_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13092_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15092_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,28];
   this.GXLastCtrlId =28;
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TABLE6",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE8",grid:0};
   GXValidFnc[16]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINICIAL",gxz:"ZV13DataInicial",gxold:"OV13DataInicial",gxvar:"AV13DataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13DataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV13DataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINICIAL",gx.O.AV13DataInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV13DataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 16 , function() {
   });
   GXValidFnc[18]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFINAL",gxz:"ZV14DataFinal",gxold:"OV14DataFinal",gxvar:"AV14DataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14DataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV14DataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFINAL",gx.O.AV14DataFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV14DataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[28]={fld:"JS", format:2,grid:0};
   this.AV13DataInicial = gx.date.nullDate() ;
   this.ZV13DataInicial = gx.date.nullDate() ;
   this.OV13DataInicial = gx.date.nullDate() ;
   this.AV14DataFinal = gx.date.nullDate() ;
   this.ZV14DataFinal = gx.date.nullDate() ;
   this.OV14DataFinal = gx.date.nullDate() ;
   this.AV13DataInicial = gx.date.nullDate() ;
   this.AV14DataFinal = gx.date.nullDate() ;
   this.Events = {"e11092_client": ["'FECHAR'", true] ,"e13092_client": ["ENTER", true] ,"e15092_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV13DataInicial',fld:'vDATAINICIAL'},{av:'AV14DataFinal',fld:'vDATAFINAL'},{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV40QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV44Pgmdesc',fld:'vPGMDESC'}],[{av:'AV14DataFinal',fld:'vDATAFINAL'},{av:'AV13DataInicial',fld:'vDATAINICIAL'},{av:'AV11OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV16NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV15NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV40QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hacervosmaisemprestados());
