/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:14:2.59
*/
gx.evt.autoSkip = false;
gx.define('hrelacaobem', false, function () {
   this.ServerClass =  "hrelacaobem" ;
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
      this.AV22BemCodigo=gx.fn.getIntegerValue("vBEMCODIGO",'.') ;
      this.AV23BemSubgrupo=gx.fn.getIntegerValue("vBEMSUBGRUPO",'.') ;
      this.AV24BemDescricaoResumida=gx.fn.getControlValue("vBEMDESCRICAORESUMIDA") ;
      this.AV25TipoBemId=gx.fn.getIntegerValue("vTIPOBEMID",'.') ;
      this.AV26PessoaBemId=gx.fn.getIntegerValue("vPESSOABEMID",'.') ;
      this.AV27BemSituacao=gx.fn.getControlValue("vBEMSITUACAO") ;
      this.AV28BemDtAquisicaoIni=gx.fn.getDateValue("vBEMDTAQUISICAOINI") ;
      this.AV29BemDtAquisicaoFim=gx.fn.getDateValue("vBEMDTAQUISICAOFIM") ;
      this.AV30OrigemRecursoIni=gx.fn.getIntegerValue("vORIGEMRECURSOINI",'.') ;
      this.AV31OrigemRecursoFin=gx.fn.getIntegerValue("vORIGEMRECURSOFIN",'.') ;
      this.AV32BemDepartamentoCodigo=gx.fn.getControlValue("vBEMDEPARTAMENTOCODIGO") ;
      this.AV33SnOrigemRecurso=gx.fn.getControlValue("vSNORIGEMRECURSO") ;
   };
   this.e1110b2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1310b2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1510b2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,18,20,22];
   this.GXLastCtrlId =22;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPRELATORIO",gxz:"ZV35TpRelatorio",gxold:"OV35TpRelatorio",gxvar:"AV35TpRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV35TpRelatorio=Value},v2z:function(Value){gx.O.ZV35TpRelatorio=Value},v2c:function(){gx.fn.setComboBoxValue("vTPRELATORIO",gx.O.AV35TpRelatorio)},c2v:function(){gx.O.AV35TpRelatorio=this.val()},val:function(){return gx.fn.getControlValue("vTPRELATORIO")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[15]={fld:"TABLE4",grid:0};
   GXValidFnc[18]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESSALDO",gxz:"ZV39MesSaldo",gxold:"OV39MesSaldo",gxvar:"AV39MesSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39MesSaldo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39MesSaldo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESSALDO",gx.O.AV39MesSaldo,0)},c2v:function(){gx.O.AV39MesSaldo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESSALDO",'.')},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOSALDO",gxz:"ZV40AnoSaldo",gxold:"OV40AnoSaldo",gxvar:"AV40AnoSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40AnoSaldo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40AnoSaldo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOSALDO",gx.O.AV40AnoSaldo,0)},c2v:function(){gx.O.AV40AnoSaldo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOSALDO",'.')},nac:gx.falseFn};
   this.AV35TpRelatorio = "" ;
   this.ZV35TpRelatorio = "" ;
   this.OV35TpRelatorio = "" ;
   this.AV39MesSaldo = 0 ;
   this.ZV39MesSaldo = 0 ;
   this.OV39MesSaldo = 0 ;
   this.AV40AnoSaldo = 0 ;
   this.ZV40AnoSaldo = 0 ;
   this.OV40AnoSaldo = 0 ;
   this.AV35TpRelatorio = "" ;
   this.AV39MesSaldo = 0 ;
   this.AV40AnoSaldo = 0 ;
   this.AV22BemCodigo = 0 ;
   this.AV23BemSubgrupo = 0 ;
   this.AV24BemDescricaoResumida = "" ;
   this.AV25TipoBemId = 0 ;
   this.AV26PessoaBemId = 0 ;
   this.AV27BemSituacao = "" ;
   this.AV28BemDtAquisicaoIni = gx.date.nullDate() ;
   this.AV29BemDtAquisicaoFim = gx.date.nullDate() ;
   this.AV30OrigemRecursoIni = 0 ;
   this.AV31OrigemRecursoFin = 0 ;
   this.AV32BemDepartamentoCodigo = "" ;
   this.AV33SnOrigemRecurso = "" ;
   this.Events = {"e1110b2_client": ["'FECHAR'", true] ,"e1310b2_client": ["ENTER", true] ,"e1510b2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV33SnOrigemRecurso',fld:'vSNORIGEMRECURSO'},{av:'AV32BemDepartamentoCodigo',fld:'vBEMDEPARTAMENTOCODIGO'},{av:'AV31OrigemRecursoFin',fld:'vORIGEMRECURSOFIN'},{av:'AV30OrigemRecursoIni',fld:'vORIGEMRECURSOINI'},{av:'AV29BemDtAquisicaoFim',fld:'vBEMDTAQUISICAOFIM'},{av:'AV28BemDtAquisicaoIni',fld:'vBEMDTAQUISICAOINI'},{av:'AV27BemSituacao',fld:'vBEMSITUACAO'},{av:'AV26PessoaBemId',fld:'vPESSOABEMID'},{av:'AV25TipoBemId',fld:'vTIPOBEMID'},{av:'AV24BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV23BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV22BemCodigo',fld:'vBEMCODIGO'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV35TpRelatorio',fld:'vTPRELATORIO'},{av:'AV39MesSaldo',fld:'vMESSALDO'},{av:'AV40AnoSaldo',fld:'vANOSALDO'},{av:'AV44Pgmname',fld:'vPGMNAME'},{av:'AV17QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV22BemCodigo',fld:'vBEMCODIGO'},{av:'AV23BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV24BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV25TipoBemId',fld:'vTIPOBEMID'},{av:'AV26PessoaBemId',fld:'vPESSOABEMID'},{av:'AV27BemSituacao',fld:'vBEMSITUACAO'},{av:'AV28BemDtAquisicaoIni',fld:'vBEMDTAQUISICAOINI'},{av:'AV29BemDtAquisicaoFim',fld:'vBEMDTAQUISICAOFIM'},{av:'AV30OrigemRecursoIni',fld:'vORIGEMRECURSOINI'},{av:'AV31OrigemRecursoFin',fld:'vORIGEMRECURSOFIN'},{av:'AV32BemDepartamentoCodigo',fld:'vBEMDEPARTAMENTOCODIGO'},{av:'AV33SnOrigemRecurso',fld:'vSNORIGEMRECURSO'}],[{av:'AV36TpErro',fld:'vTPERRO'},{av:'AV11NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV10NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV12OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV35TpRelatorio',fld:'vTPRELATORIO'},{av:'AV40AnoSaldo',fld:'vANOSALDO'},{av:'AV39MesSaldo',fld:'vMESSALDO'},{av:'AV33SnOrigemRecurso',fld:'vSNORIGEMRECURSO'},{av:'AV32BemDepartamentoCodigo',fld:'vBEMDEPARTAMENTOCODIGO'},{av:'AV31OrigemRecursoFin',fld:'vORIGEMRECURSOFIN'},{av:'AV30OrigemRecursoIni',fld:'vORIGEMRECURSOINI'},{av:'AV29BemDtAquisicaoFim',fld:'vBEMDTAQUISICAOFIM'},{av:'AV28BemDtAquisicaoIni',fld:'vBEMDTAQUISICAOINI'},{av:'AV27BemSituacao',fld:'vBEMSITUACAO'},{av:'AV26PessoaBemId',fld:'vPESSOABEMID'},{av:'AV25TipoBemId',fld:'vTIPOBEMID'},{av:'AV24BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV23BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV22BemCodigo',fld:'vBEMCODIGO'},{av:'AV17QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV22BemCodigo", "vBEMCODIGO", 0, "int");
   this.setVCMap("AV23BemSubgrupo", "vBEMSUBGRUPO", 0, "int");
   this.setVCMap("AV24BemDescricaoResumida", "vBEMDESCRICAORESUMIDA", 0, "svchar");
   this.setVCMap("AV25TipoBemId", "vTIPOBEMID", 0, "int");
   this.setVCMap("AV26PessoaBemId", "vPESSOABEMID", 0, "int");
   this.setVCMap("AV27BemSituacao", "vBEMSITUACAO", 0, "char");
   this.setVCMap("AV28BemDtAquisicaoIni", "vBEMDTAQUISICAOINI", 0, "date");
   this.setVCMap("AV29BemDtAquisicaoFim", "vBEMDTAQUISICAOFIM", 0, "date");
   this.setVCMap("AV30OrigemRecursoIni", "vORIGEMRECURSOINI", 0, "int");
   this.setVCMap("AV31OrigemRecursoFin", "vORIGEMRECURSOFIN", 0, "int");
   this.setVCMap("AV32BemDepartamentoCodigo", "vBEMDEPARTAMENTOCODIGO", 0, "svchar");
   this.setVCMap("AV33SnOrigemRecurso", "vSNORIGEMRECURSO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaobem());
