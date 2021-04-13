/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:51:40.86
*/
gx.evt.autoSkip = false;
gx.define('hlivrosdisponiveis', false, function () {
   this.ServerClass =  "hlivrosdisponiveis" ;
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
   this.e112l2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132l2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152l2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,19,21,30];
   this.GXLastCtrlId =30;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE3",grid:0};
   GXValidFnc[15]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDENACAO",gxz:"ZV10Ordenacao",gxold:"OV10Ordenacao",gxvar:"AV10Ordenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10Ordenacao=Value},v2z:function(Value){gx.O.ZV10Ordenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vORDENACAO",gx.O.AV10Ordenacao)},c2v:function(){gx.O.AV10Ordenacao=this.val()},val:function(){return gx.fn.getControlValue("vORDENACAO")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOITEM",gxz:"ZV13TipoItem",gxold:"OV13TipoItem",gxvar:"AV13TipoItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV13TipoItem=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13TipoItem=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vTIPOITEM",gx.O.AV13TipoItem)},c2v:function(){gx.O.AV13TipoItem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOITEM",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"JS", format:2,grid:0};
   this.AV10Ordenacao = "" ;
   this.ZV10Ordenacao = "" ;
   this.OV10Ordenacao = "" ;
   this.AV13TipoItem = 0 ;
   this.ZV13TipoItem = 0 ;
   this.OV13TipoItem = 0 ;
   this.AV10Ordenacao = "" ;
   this.AV13TipoItem = 0 ;
   this.Events = {"e112l2_client": ["'FECHAR'", true] ,"e132l2_client": ["ENTER", true] ,"e152l2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV13TipoItem',fld:'vTIPOITEM'}],[{av:'AV11OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV16NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV15NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV46Qtdpaggeradas',fld:'vQTDPAGGERADAS'},{av:'AV13TipoItem',fld:'vTIPOITEM'}]];
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hlivrosdisponiveis());
