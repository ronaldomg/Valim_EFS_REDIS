/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:1:29.80
*/
gx.evt.autoSkip = false;
gx.define('hconsultamovimentacaopatordenac', false, function () {
   this.ServerClass =  "hconsultamovimentacaopatordenac" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.e11wd2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12wd2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e14wd2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15];
   this.GXLastCtrlId =15;
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDENACAO",gxz:"ZV6Ordenacao",gxold:"OV6Ordenacao",gxvar:"AV6Ordenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV6Ordenacao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6Ordenacao=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vORDENACAO",gx.O.AV6Ordenacao)},c2v:function(){gx.O.AV6Ordenacao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDENACAO",'.')},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGERARCSV",gxz:"ZV28GerarCsv",gxold:"OV28GerarCsv",gxvar:"AV28GerarCsv",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28GerarCsv=Value},v2z:function(Value){gx.O.ZV28GerarCsv=Value},v2c:function(){gx.fn.setComboBoxValue("vGERARCSV",gx.O.AV28GerarCsv)},c2v:function(){gx.O.AV28GerarCsv=this.val()},val:function(){return gx.fn.getControlValue("vGERARCSV")},nac:gx.falseFn};
   this.AV6Ordenacao = 0 ;
   this.ZV6Ordenacao = 0 ;
   this.OV6Ordenacao = 0 ;
   this.AV28GerarCsv = "" ;
   this.ZV28GerarCsv = "" ;
   this.OV28GerarCsv = "" ;
   this.AV6Ordenacao = 0 ;
   this.AV28GerarCsv = "" ;
   this.Events = {"e11wd2_client": ["ENTER", true] ,"e12wd2_client": ["'CANCELAR'", true] ,"e14wd2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV6Ordenacao',fld:'vORDENACAO'},{av:'AV27DescricaoOrdenacao',fld:'vDESCRICAOORDENACAO'},{av:'AV9QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV28GerarCsv',fld:'vGERARCSV'}],[{av:'AV12FiltroRelatorio',fld:'vFILTRORELATORIO'},{av:'AV10LancamentoBemDataIni',fld:'vLANCAMENTOBEMDATAINI'},{av:'AV11LancamentoBemDataFim',fld:'vLANCAMENTOBEMDATAFIM'},{av:'AV13BemDtAquisicaoIni',fld:'vBEMDTAQUISICAOINI'},{av:'AV14BemDtAquisicaoFim',fld:'vBEMDTAQUISICAOFIM'},{av:'AV15BemCodigoIni',fld:'vBEMCODIGOINI'},{av:'AV16BemCodigoFim',fld:'vBEMCODIGOFIM'},{av:'AV17BemSubGrupoIni',fld:'vBEMSUBGRUPOINI'},{av:'AV18BemSubGrupoFim',fld:'vBEMSUBGRUPOFIM'},{av:'AV19TipoBemIdIni',fld:'vTIPOBEMIDINI'},{av:'AV20TipoBemIdFim',fld:'vTIPOBEMIDFIM'},{av:'AV21BemSituacao',fld:'vBEMSITUACAO'},{av:'AV22BemDepartamentoCodigo',fld:'vBEMDEPARTAMENTOCODIGO'},{av:'AV25PessoaIdFor',fld:'vPESSOAIDFOR'},{av:'AV24OrigemRecursoId',fld:'vORIGEMRECURSOID'},{av:'AV23BemNotaFiscal',fld:'vBEMNOTAFISCAL'},{av:'AV26ApenasBemTotDepre',fld:'vAPENASBEMTOTDEPRE'},{av:'AV7NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV8NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV27DescricaoOrdenacao',fld:'vDESCRICAOORDENACAO'},{av:'AV9QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'CANCELAR'"] = [[],[{av:'AV6Ordenacao',fld:'vORDENACAO'}]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultamovimentacaopatordenac());
