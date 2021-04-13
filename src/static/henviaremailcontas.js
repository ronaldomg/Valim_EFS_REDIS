/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:20:19.30
*/
gx.evt.autoSkip = false;
gx.define('henviaremailcontas', false, function () {
   this.ServerClass =  "henviaremailcontas" ;
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
      this.AV74Ordenacao=gx.fn.getIntegerValue("vORDENACAO",'.') ;
      this.AV75DescricaoOrdenacao=gx.fn.getControlValue("vDESCRICAOORDENACAO") ;
      this.AV76NomeRelatorio=gx.fn.getControlValue("vNOMERELATORIO") ;
      this.AV77QtdPagGeradas=gx.fn.getIntegerValue("vQTDPAGGERADAS",'.') ;
      this.AV78ContaPagRecDocumento=gx.fn.getControlValue("vCONTAPAGRECDOCUMENTO") ;
      this.AV79ContaPagRecSeqDocume=gx.fn.getControlValue("vCONTAPAGRECSEQDOCUME") ;
      this.AV80ContaPagRecCliForId=gx.fn.getIntegerValue("vCONTAPAGRECCLIFORID",'.') ;
      this.AV81ContaPagRecCliForFantasia=gx.fn.getControlValue("vCONTAPAGRECCLIFORFANTASIA") ;
      this.AV82ContaPagRecDtEmissaoFim=gx.fn.getDateValue("vCONTAPAGRECDTEMISSAOFIM") ;
      this.AV83ContaPagRecDtEmissaoIni=gx.fn.getDateValue("vCONTAPAGRECDTEMISSAOINI") ;
      this.AV84ContaPagRecDtPagamentoFim=gx.fn.getDateValue("vCONTAPAGRECDTPAGAMENTOFIM") ;
      this.AV85ContaPagRecDtPagamentoIni=gx.fn.getDateValue("vCONTAPAGRECDTPAGAMENTOINI") ;
      this.AV86ContaPagRecDtVencimentoFim=gx.fn.getDateValue("vCONTAPAGRECDTVENCIMENTOFIM") ;
      this.AV87ContaPagRecDtVencimentoIni=gx.fn.getDateValue("vCONTAPAGRECDTVENCIMENTOINI") ;
      this.AV88ContaPagRecFatura=gx.fn.getControlValue("vCONTAPAGRECFATURA") ;
      this.AV89ContaPagRecFilialId=gx.fn.getIntegerValue("vCONTAPAGRECFILIALID",'.') ;
      this.AV90ContaPagRecFilialDescricao=gx.fn.getControlValue("vCONTAPAGRECFILIALDESCRICAO") ;
      this.AV73ContaPagRecSituacao=gx.fn.getControlValue("vCONTAPAGRECSITUACAO") ;
      this.AV91ContaPagRecTipCobId=gx.fn.getIntegerValue("vCONTAPAGRECTIPCOBID",'.') ;
      this.AV92ContaPagRecTipCobDescricao=gx.fn.getControlValue("vCONTAPAGRECTIPCOBDESCRICAO") ;
      this.AV93DataReferencia=gx.fn.getDateValue("vDATAREFERENCIA") ;
      this.AV94ContaPagRecPagRec=gx.fn.getControlValue("vCONTAPAGRECPAGREC") ;
      this.AV95CnpjBase=gx.fn.getControlValue("vCNPJBASE") ;
      this.AV96SnDtCredito=gx.fn.getControlValue("vSNDTCREDITO") ;
      this.AV97SnComRemessa=gx.fn.getControlValue("vSNCOMREMESSA") ;
   };
   this.e192h11_client=function()
   {
      this.clearMessages();
      this.AV10Assunto =  ""  ;
      this.AV57Texto =  ""  ;
      this.refreshOutputs([{av:'AV10Assunto',fld:'vASSUNTO'},{av:'AV57Texto',fld:'vTEXTO'}]);
   };
   this.e122h12_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e132h12_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e152h12_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e162h12_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e172h12_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e202h12_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,20,23,26,28,30,32,35];
   this.GXLastCtrlId =35;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TXTPARA1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMAILREMETENTE",gxz:"ZV20EmailRemetente",gxold:"OV20EmailRemetente",gxvar:"AV20EmailRemetente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20EmailRemetente=Value},v2z:function(Value){gx.O.ZV20EmailRemetente=Value},v2c:function(){gx.fn.setControlValue("vEMAILREMETENTE",gx.O.AV20EmailRemetente,0)},c2v:function(){gx.O.AV20EmailRemetente=this.val()},val:function(){return gx.fn.getControlValue("vEMAILREMETENTE")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TXTPARA2", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vASSUNTO",gxz:"ZV10Assunto",gxold:"OV10Assunto",gxvar:"AV10Assunto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10Assunto=Value},v2z:function(Value){gx.O.ZV10Assunto=Value},v2c:function(){gx.fn.setControlValue("vASSUNTO",gx.O.AV10Assunto,0)},c2v:function(){gx.O.AV10Assunto=this.val()},val:function(){return gx.fn.getControlValue("vASSUNTO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TABLE3",grid:0};
   GXValidFnc[23]={fld:"TABTXT",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK39", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV59TxtTela",gxold:"OV59TxtTela",gxvar:"AV59TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV59TxtTela=Value},v2z:function(Value){gx.O.ZV59TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV59TxtTela)},c2v:function(){gx.O.AV59TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"IMAGE3",grid:0};
   GXValidFnc[32]={fld:"IMGEXCTXTTELA",grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:2000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTEXTO",gxz:"ZV57Texto",gxold:"OV57Texto",gxvar:"AV57Texto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57Texto=Value},v2z:function(Value){gx.O.ZV57Texto=Value},v2c:function(){gx.fn.setControlValue("vTEXTO",gx.O.AV57Texto,0)},c2v:function(){gx.O.AV57Texto=this.val()},val:function(){return gx.fn.getControlValue("vTEXTO")},nac:gx.falseFn};
   this.AV20EmailRemetente = "" ;
   this.ZV20EmailRemetente = "" ;
   this.OV20EmailRemetente = "" ;
   this.AV10Assunto = "" ;
   this.ZV10Assunto = "" ;
   this.OV10Assunto = "" ;
   this.AV59TxtTela = "" ;
   this.ZV59TxtTela = "" ;
   this.OV59TxtTela = "" ;
   this.AV57Texto = "" ;
   this.ZV57Texto = "" ;
   this.OV57Texto = "" ;
   this.AV20EmailRemetente = "" ;
   this.AV10Assunto = "" ;
   this.AV59TxtTela = "" ;
   this.AV57Texto = "" ;
   this.AV74Ordenacao = 0 ;
   this.AV75DescricaoOrdenacao = "" ;
   this.AV76NomeRelatorio = "" ;
   this.AV77QtdPagGeradas = 0 ;
   this.AV78ContaPagRecDocumento = "" ;
   this.AV79ContaPagRecSeqDocume = "" ;
   this.AV80ContaPagRecCliForId = 0 ;
   this.AV81ContaPagRecCliForFantasia = "" ;
   this.AV82ContaPagRecDtEmissaoFim = gx.date.nullDate() ;
   this.AV83ContaPagRecDtEmissaoIni = gx.date.nullDate() ;
   this.AV84ContaPagRecDtPagamentoFim = gx.date.nullDate() ;
   this.AV85ContaPagRecDtPagamentoIni = gx.date.nullDate() ;
   this.AV86ContaPagRecDtVencimentoFim = gx.date.nullDate() ;
   this.AV87ContaPagRecDtVencimentoIni = gx.date.nullDate() ;
   this.AV88ContaPagRecFatura = "" ;
   this.AV89ContaPagRecFilialId = 0 ;
   this.AV90ContaPagRecFilialDescricao = "" ;
   this.AV73ContaPagRecSituacao = "" ;
   this.AV91ContaPagRecTipCobId = 0 ;
   this.AV92ContaPagRecTipCobDescricao = "" ;
   this.AV93DataReferencia = gx.date.nullDate() ;
   this.AV94ContaPagRecPagRec = "" ;
   this.AV95CnpjBase = "" ;
   this.AV96SnDtCredito = "" ;
   this.AV97SnComRemessa = "" ;
   this.A75UsuarioId = "" ;
   this.A615UsuarioEmail = "" ;
   this.Events = {"e122h12_client": ["ENTER", true] ,"e132h12_client": ["'CANCELAR'", true] ,"e152h12_client": ["'SALVARTXT'", true] ,"e162h12_client": ["VTXTTELA.CLICK", true] ,"e172h12_client": ["'EXCLUIRTXT'", true] ,"e202h12_client": ["CANCEL", true] ,"e192h11_client": ["'LIMPARCAMPOS'", false]};
   this.EvtParms["REFRESH"] = [[{av:'AV107Pgmname',fld:'vPGMNAME'},{av:'AV108Pgmdesc',fld:'vPGMDESC'},{av:'AV50SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV23EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV29hasEmail',fld:'vHASEMAIL'},{av:'AV59TxtTela',fld:'vTXTTELA'}],[{av:'AV104EmailContasErro',fld:'vEMAILCONTASERRO'},{av:'AV100NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV99NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV77QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV59TxtTela',fld:'vTXTTELA'},{av:'AV111GXV2',fld:'vGXV2'},{av:'AV51SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV110GXV1',fld:'vGXV1'},{av:'AV57Texto',fld:'vTEXTO'},{av:'AV10Assunto',fld:'vASSUNTO'}]];
   this.EvtParms["ENTER"] = [[{av:'AV59TxtTela',fld:'vTXTTELA'},{av:'AV23EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV107Pgmname',fld:'vPGMNAME'},{av:'AV57Texto',fld:'vTEXTO'},{av:'AV10Assunto',fld:'vASSUNTO'},{av:'AV20EmailRemetente',fld:'vEMAILREMETENTE'},{av:'AV74Ordenacao',fld:'vORDENACAO',hsh:true},{av:'AV75DescricaoOrdenacao',fld:'vDESCRICAOORDENACAO'},{av:'AV76NomeRelatorio',fld:'vNOMERELATORIO'},{av:'AV77QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV78ContaPagRecDocumento',fld:'vCONTAPAGRECDOCUMENTO'},{av:'AV79ContaPagRecSeqDocume',fld:'vCONTAPAGRECSEQDOCUME'},{av:'AV80ContaPagRecCliForId',fld:'vCONTAPAGRECCLIFORID'},{av:'AV81ContaPagRecCliForFantasia',fld:'vCONTAPAGRECCLIFORFANTASIA'},{av:'AV82ContaPagRecDtEmissaoFim',fld:'vCONTAPAGRECDTEMISSAOFIM'},{av:'AV83ContaPagRecDtEmissaoIni',fld:'vCONTAPAGRECDTEMISSAOINI'},{av:'AV84ContaPagRecDtPagamentoFim',fld:'vCONTAPAGRECDTPAGAMENTOFIM'},{av:'AV85ContaPagRecDtPagamentoIni',fld:'vCONTAPAGRECDTPAGAMENTOINI'},{av:'AV86ContaPagRecDtVencimentoFim',fld:'vCONTAPAGRECDTVENCIMENTOFIM'},{av:'AV87ContaPagRecDtVencimentoIni',fld:'vCONTAPAGRECDTVENCIMENTOINI'},{av:'AV88ContaPagRecFatura',fld:'vCONTAPAGRECFATURA'},{av:'AV89ContaPagRecFilialId',fld:'vCONTAPAGRECFILIALID'},{av:'AV90ContaPagRecFilialDescricao',fld:'vCONTAPAGRECFILIALDESCRICAO'},{av:'AV73ContaPagRecSituacao',fld:'vCONTAPAGRECSITUACAO'},{av:'AV91ContaPagRecTipCobId',fld:'vCONTAPAGRECTIPCOBID'},{av:'AV92ContaPagRecTipCobDescricao',fld:'vCONTAPAGRECTIPCOBDESCRICAO'},{av:'AV93DataReferencia',fld:'vDATAREFERENCIA'},{av:'AV94ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC'},{av:'AV95CnpjBase',fld:'vCNPJBASE'},{av:'AV96SnDtCredito',fld:'vSNDTCREDITO'},{av:'AV97SnComRemessa',fld:'vSNCOMREMESSA'}],[{av:'AV7OpcoesTxtTela',fld:'vOPCOESTXTTELA'},{av:'AV98SdtPessoa',fld:'vSDTPESSOA'},{av:'AV13Chr',fld:'vCHR'},{av:'AV55Split',fld:'vSPLIT'},{av:'AV15CorpoTexto',fld:'vCORPOTEXTO'},{av:'AV112GXV3',fld:'vGXV3'},{av:'AV58textoEmail',fld:'vTEXTOEMAIL'},{av:'AV10Assunto',fld:'vASSUNTO'},{av:'AV97SnComRemessa',fld:'vSNCOMREMESSA'},{av:'AV96SnDtCredito',fld:'vSNDTCREDITO'},{av:'AV95CnpjBase',fld:'vCNPJBASE'},{av:'AV94ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC'},{av:'AV93DataReferencia',fld:'vDATAREFERENCIA'},{av:'AV92ContaPagRecTipCobDescricao',fld:'vCONTAPAGRECTIPCOBDESCRICAO'},{av:'AV91ContaPagRecTipCobId',fld:'vCONTAPAGRECTIPCOBID'},{av:'AV73ContaPagRecSituacao',fld:'vCONTAPAGRECSITUACAO'},{av:'AV90ContaPagRecFilialDescricao',fld:'vCONTAPAGRECFILIALDESCRICAO'},{av:'AV89ContaPagRecFilialId',fld:'vCONTAPAGRECFILIALID'},{av:'AV88ContaPagRecFatura',fld:'vCONTAPAGRECFATURA'},{av:'AV87ContaPagRecDtVencimentoIni',fld:'vCONTAPAGRECDTVENCIMENTOINI'},{av:'AV86ContaPagRecDtVencimentoFim',fld:'vCONTAPAGRECDTVENCIMENTOFIM'},{av:'AV85ContaPagRecDtPagamentoIni',fld:'vCONTAPAGRECDTPAGAMENTOINI'},{av:'AV84ContaPagRecDtPagamentoFim',fld:'vCONTAPAGRECDTPAGAMENTOFIM'},{av:'AV83ContaPagRecDtEmissaoIni',fld:'vCONTAPAGRECDTEMISSAOINI'},{av:'AV82ContaPagRecDtEmissaoFim',fld:'vCONTAPAGRECDTEMISSAOFIM'},{av:'AV81ContaPagRecCliForFantasia',fld:'vCONTAPAGRECCLIFORFANTASIA'},{av:'AV80ContaPagRecCliForId',fld:'vCONTAPAGRECCLIFORID'},{av:'AV79ContaPagRecSeqDocume',fld:'vCONTAPAGRECSEQDOCUME'},{av:'AV78ContaPagRecDocumento',fld:'vCONTAPAGRECDOCUMENTO'},{av:'AV77QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV76NomeRelatorio',fld:'vNOMERELATORIO'},{av:'AV75DescricaoOrdenacao',fld:'vDESCRICAOORDENACAO'}]];
   this.EvtParms["'LIMPARCAMPOS'"] = [[],[{av:'AV10Assunto',fld:'vASSUNTO'},{av:'AV57Texto',fld:'vTEXTO'}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV97SnComRemessa',fld:'vSNCOMREMESSA'},{av:'AV96SnDtCredito',fld:'vSNDTCREDITO'},{av:'AV95CnpjBase',fld:'vCNPJBASE'},{av:'AV94ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC'},{av:'AV93DataReferencia',fld:'vDATAREFERENCIA'},{av:'AV92ContaPagRecTipCobDescricao',fld:'vCONTAPAGRECTIPCOBDESCRICAO'},{av:'AV91ContaPagRecTipCobId',fld:'vCONTAPAGRECTIPCOBID'},{av:'AV73ContaPagRecSituacao',fld:'vCONTAPAGRECSITUACAO'},{av:'AV90ContaPagRecFilialDescricao',fld:'vCONTAPAGRECFILIALDESCRICAO'},{av:'AV89ContaPagRecFilialId',fld:'vCONTAPAGRECFILIALID'},{av:'AV88ContaPagRecFatura',fld:'vCONTAPAGRECFATURA'},{av:'AV87ContaPagRecDtVencimentoIni',fld:'vCONTAPAGRECDTVENCIMENTOINI'},{av:'AV86ContaPagRecDtVencimentoFim',fld:'vCONTAPAGRECDTVENCIMENTOFIM'},{av:'AV85ContaPagRecDtPagamentoIni',fld:'vCONTAPAGRECDTPAGAMENTOINI'},{av:'AV84ContaPagRecDtPagamentoFim',fld:'vCONTAPAGRECDTPAGAMENTOFIM'},{av:'AV83ContaPagRecDtEmissaoIni',fld:'vCONTAPAGRECDTEMISSAOINI'},{av:'AV82ContaPagRecDtEmissaoFim',fld:'vCONTAPAGRECDTEMISSAOFIM'},{av:'AV81ContaPagRecCliForFantasia',fld:'vCONTAPAGRECCLIFORFANTASIA'},{av:'AV80ContaPagRecCliForId',fld:'vCONTAPAGRECCLIFORID'},{av:'AV79ContaPagRecSeqDocume',fld:'vCONTAPAGRECSEQDOCUME'},{av:'AV78ContaPagRecDocumento',fld:'vCONTAPAGRECDOCUMENTO'},{av:'AV77QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV76NomeRelatorio',fld:'vNOMERELATORIO'},{av:'AV75DescricaoOrdenacao',fld:'vDESCRICAOORDENACAO'}],[]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV23EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV59TxtTela',fld:'vTXTTELA'},{av:'AV107Pgmname',fld:'vPGMNAME'},{av:'AV57Texto',fld:'vTEXTO'},{av:'AV10Assunto',fld:'vASSUNTO'}],[{av:'AV7OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV107Pgmname',fld:'vPGMNAME'},{av:'AV50SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV59TxtTela',fld:'vTXTTELA'},{av:'AV23EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV110GXV1',fld:'vGXV1'},{av:'AV51SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV57Texto',fld:'vTEXTO'},{av:'AV10Assunto',fld:'vASSUNTO'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV23EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV107Pgmname',fld:'vPGMNAME'},{av:'AV59TxtTela',fld:'vTXTTELA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV74Ordenacao", "vORDENACAO", 0, "int");
   this.setVCMap("AV75DescricaoOrdenacao", "vDESCRICAOORDENACAO", 0, "svchar");
   this.setVCMap("AV76NomeRelatorio", "vNOMERELATORIO", 0, "svchar");
   this.setVCMap("AV77QtdPagGeradas", "vQTDPAGGERADAS", 0, "int");
   this.setVCMap("AV78ContaPagRecDocumento", "vCONTAPAGRECDOCUMENTO", 0, "svchar");
   this.setVCMap("AV79ContaPagRecSeqDocume", "vCONTAPAGRECSEQDOCUME", 0, "char");
   this.setVCMap("AV80ContaPagRecCliForId", "vCONTAPAGRECCLIFORID", 0, "int");
   this.setVCMap("AV81ContaPagRecCliForFantasia", "vCONTAPAGRECCLIFORFANTASIA", 0, "svchar");
   this.setVCMap("AV82ContaPagRecDtEmissaoFim", "vCONTAPAGRECDTEMISSAOFIM", 0, "date");
   this.setVCMap("AV83ContaPagRecDtEmissaoIni", "vCONTAPAGRECDTEMISSAOINI", 0, "date");
   this.setVCMap("AV84ContaPagRecDtPagamentoFim", "vCONTAPAGRECDTPAGAMENTOFIM", 0, "date");
   this.setVCMap("AV85ContaPagRecDtPagamentoIni", "vCONTAPAGRECDTPAGAMENTOINI", 0, "date");
   this.setVCMap("AV86ContaPagRecDtVencimentoFim", "vCONTAPAGRECDTVENCIMENTOFIM", 0, "date");
   this.setVCMap("AV87ContaPagRecDtVencimentoIni", "vCONTAPAGRECDTVENCIMENTOINI", 0, "date");
   this.setVCMap("AV88ContaPagRecFatura", "vCONTAPAGRECFATURA", 0, "char");
   this.setVCMap("AV89ContaPagRecFilialId", "vCONTAPAGRECFILIALID", 0, "int");
   this.setVCMap("AV90ContaPagRecFilialDescricao", "vCONTAPAGRECFILIALDESCRICAO", 0, "svchar");
   this.setVCMap("AV73ContaPagRecSituacao", "vCONTAPAGRECSITUACAO", 0, "char");
   this.setVCMap("AV91ContaPagRecTipCobId", "vCONTAPAGRECTIPCOBID", 0, "int");
   this.setVCMap("AV92ContaPagRecTipCobDescricao", "vCONTAPAGRECTIPCOBDESCRICAO", 0, "svchar");
   this.setVCMap("AV93DataReferencia", "vDATAREFERENCIA", 0, "date");
   this.setVCMap("AV94ContaPagRecPagRec", "vCONTAPAGRECPAGREC", 0, "char");
   this.setVCMap("AV95CnpjBase", "vCNPJBASE", 0, "svchar");
   this.setVCMap("AV96SnDtCredito", "vSNDTCREDITO", 0, "char");
   this.setVCMap("AV97SnComRemessa", "vSNCOMREMESSA", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new henviaremailcontas());
