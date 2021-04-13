/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:55:10.19
*/
gx.evt.autoSkip = false;
gx.define('htradutoresdisponiveis', false, function () {
   this.ServerClass =  "htradutoresdisponiveis" ;
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
   this.e114b2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e134b2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e154b2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,20,22,24,34];
   this.GXLastCtrlId =34;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE4",grid:0};
   GXValidFnc[15]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[17]={fld:"TABLETTRADUTORES",grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORINICIAL",gxz:"ZV14TradutorInicial",gxold:"OV14TradutorInicial",gxvar:"AV14TradutorInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14TradutorInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14TradutorInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTORINICIAL",gx.O.AV14TradutorInicial,0)},c2v:function(){gx.O.AV14TradutorInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTORINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORFINAL",gxz:"ZV15TradutorFinal",gxold:"OV15TradutorFinal",gxvar:"AV15TradutorFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15TradutorFinal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15TradutorFinal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTORFINAL",gx.O.AV15TradutorFinal,0)},c2v:function(){gx.O.AV15TradutorFinal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTORFINAL",'.')},nac:gx.falseFn};
   GXValidFnc[34]={fld:"BTNHELP",grid:0};
   this.AV14TradutorInicial = 0 ;
   this.ZV14TradutorInicial = 0 ;
   this.OV14TradutorInicial = 0 ;
   this.AV15TradutorFinal = 0 ;
   this.ZV15TradutorFinal = 0 ;
   this.OV15TradutorFinal = 0 ;
   this.AV14TradutorInicial = 0 ;
   this.AV15TradutorFinal = 0 ;
   this.Events = {"e114b2_client": ["'FECHAR'", true] ,"e134b2_client": ["ENTER", true] ,"e154b2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV14TradutorInicial',fld:'vTRADUTORINICIAL'},{av:'AV15TradutorFinal',fld:'vTRADUTORFINAL'},{av:'AV49Pgmdesc',fld:'vPGMDESC'}],[{av:'AV15TradutorFinal',fld:'vTRADUTORFINAL'},{av:'AV14TradutorInicial',fld:'vTRADUTORINICIAL'},{av:'AV11OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV13NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV12NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV22QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new htradutoresdisponiveis());
