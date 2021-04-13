/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:15:44.61
*/
gx.evt.autoSkip = false;
gx.define('hlogprefeitura', false, function () {
   this.ServerClass =  "hlogprefeitura" ;
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
      this.AV7NotaServicoSeq=gx.fn.getIntegerValue("vNOTASERVICOSEQ",'.') ;
      this.AV13Titulo=gx.fn.getControlValue("vTITULO") ;
   };
   this.e122ff2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e142ff2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152ff2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={lvl:0,type:"char",len:9999,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTEXTO",gxz:"ZV10Texto",gxold:"OV10Texto",gxvar:"AV10Texto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10Texto=Value},v2z:function(Value){gx.O.ZV10Texto=Value},v2c:function(){gx.fn.setControlValue("vTEXTO",gx.O.AV10Texto,0)},c2v:function(){gx.O.AV10Texto=this.val()},val:function(){return gx.fn.getControlValue("vTEXTO")},nac:gx.falseFn};
   this.AV10Texto = "" ;
   this.ZV10Texto = "" ;
   this.OV10Texto = "" ;
   this.AV10Texto = "" ;
   this.AV7NotaServicoSeq = 0 ;
   this.AV13Titulo = "" ;
   this.A9348NotaServicoSeq = 0 ;
   this.A9347NotaServicoOutrasInformacoes = "" ;
   this.A11121NfseNotaServicoSeq = 0 ;
   this.A9737NfseOrdemServicoEmpresaId = "" ;
   this.A9748NfseRPS = "" ;
   this.Events = {"e122ff2_client": ["'FECHAR'", true] ,"e142ff2_client": ["ENTER", true] ,"e152ff2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV13Titulo',fld:'vTITULO'},{av:'AV7NotaServicoSeq',fld:'vNOTASERVICOSEQ'}],[]];
   this.setVCMap("AV7NotaServicoSeq", "vNOTASERVICOSEQ", 0, "int");
   this.setVCMap("AV13Titulo", "vTITULO", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hlogprefeitura());
