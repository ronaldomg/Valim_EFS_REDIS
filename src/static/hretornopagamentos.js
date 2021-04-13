/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:32:20.88
*/
gx.evt.autoSkip = false;
gx.define('hretornopagamentos', false, function () {
   this.ServerClass =  "hretornopagamentos" ;
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
   this.e11yl2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13yl2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14yl2_client=function()
   {
      this.executeServerEvent("'DIALOG'", false, null, false, false);
   };
   this.e17yl2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,22,32];
   this.GXLastCtrlId =32;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE4",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPEXECUCAO",gxz:"ZV22TpExecucao",gxold:"OV22TpExecucao",gxvar:"AV22TpExecucao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22TpExecucao=Value},v2z:function(Value){gx.O.ZV22TpExecucao=Value},v2c:function(){gx.fn.setComboBoxValue("vTPEXECUCAO",gx.O.AV22TpExecucao)},c2v:function(){gx.O.AV22TpExecucao=this.val()},val:function(){return gx.fn.getControlValue("vTPEXECUCAO")},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV21Diretorio",gxold:"OV21Diretorio",gxvar:"AV21Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21Diretorio=Value},v2z:function(Value){gx.O.ZV21Diretorio=Value},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV21Diretorio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV21Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 22 , function() {
   });
   GXValidFnc[32]={fld:"BTNHELP",grid:0};
   this.AV22TpExecucao = "" ;
   this.ZV22TpExecucao = "" ;
   this.OV22TpExecucao = "" ;
   this.AV21Diretorio = "" ;
   this.ZV21Diretorio = "" ;
   this.OV21Diretorio = "" ;
   this.AV22TpExecucao = "" ;
   this.AV21Diretorio = "" ;
   this.Events = {"e11yl2_client": ["'FECHAR'", true] ,"e13yl2_client": ["ENTER", true] ,"e14yl2_client": ["'DIALOG'", true] ,"e17yl2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[{av:'AV21Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV23TpErro',fld:'vTPERRO'},{av:'AV22TpExecucao',fld:'vTPEXECUCAO'},{av:'AV21Diretorio',fld:'vDIRETORIO'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'}],[{av:'AV27NomeBanco',fld:'vNOMEBANCO'},{av:'AV26ErroBaixaPag',fld:'vERROBAIXAPAG'},{av:'AV25BaixaPagmtos',fld:'vBAIXAPAGMTOS'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV22TpExecucao',fld:'vTPEXECUCAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV23TpErro',fld:'vTPERRO'},{av:'AV19i',fld:'vI'}]];
   this.EvtParms["'DIALOG'"] = [[],[{av:'AV36isCloud',fld:'vISCLOUD'},{av:'AV35DirUpload',fld:'vDIRUPLOAD'},{av:'AV21Diretorio',fld:'vDIRETORIO'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hretornopagamentos());
