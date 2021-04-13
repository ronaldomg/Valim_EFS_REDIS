/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:15:0.48
*/
gx.evt.autoSkip = false;
gx.define('hconfirmaexclanccxabco', false, function () {
   this.ServerClass =  "hconfirmaexclanccxabco" ;
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
      this.AV13Ordenacao=gx.fn.getControlValue("vORDENACAO") ;
      this.AV14OrdenacaoDescricao=gx.fn.getControlValue("vORDENACAODESCRICAO") ;
      this.AV12NomeAbsoluto=gx.fn.getControlValue("vNOMEABSOLUTO") ;
      this.AV29CaixaBancoIdStr=gx.fn.getControlValue("vCAIXABANCOIDSTR") ;
      this.AV23LancamentoCxaBcoDataIniStr=gx.fn.getControlValue("vLANCAMENTOCXABCODATAINISTR") ;
      this.AV24LancamentoCxaBcoDataFimStr=gx.fn.getControlValue("vLANCAMENTOCXABCODATAFIMSTR") ;
      this.AV26LancamentoCxaBcoNumeroIniStr=gx.fn.getControlValue("vLANCAMENTOCXABCONUMEROINISTR") ;
      this.AV27LancamentoCxaBcoNumeroFimStr=gx.fn.getControlValue("vLANCAMENTOCXABCONUMEROFIMSTR") ;
      this.AV25LancamentoCxaBcoHisIdIniStr=gx.fn.getControlValue("vLANCAMENTOCXABCOHISIDINISTR") ;
      this.AV28LancamentoCxaBcoHisIdFimStr=gx.fn.getControlValue("vLANCAMENTOCXABCOHISIDFIMSTR") ;
   };
   this.e12c42_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13c42_client=function()
   {
      this.executeServerEvent("'NAO'", false, null, false, false);
   };
   this.e15c42_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8];
   this.GXLastCtrlId =8;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TXTMENSAGEM", format:0,grid:0};
   this.AV13Ordenacao = "" ;
   this.AV14OrdenacaoDescricao = "" ;
   this.AV12NomeAbsoluto = "" ;
   this.AV29CaixaBancoIdStr = "" ;
   this.AV23LancamentoCxaBcoDataIniStr = "" ;
   this.AV24LancamentoCxaBcoDataFimStr = "" ;
   this.AV26LancamentoCxaBcoNumeroIniStr = "" ;
   this.AV27LancamentoCxaBcoNumeroFimStr = "" ;
   this.AV25LancamentoCxaBcoHisIdIniStr = "" ;
   this.AV28LancamentoCxaBcoHisIdFimStr = "" ;
   this.Events = {"e12c42_client": ["ENTER", true] ,"e13c42_client": ["'NAO'", true] ,"e15c42_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'AV13Ordenacao',fld:'vORDENACAO'},{av:'AV14OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV30QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV15CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV16LancamentoCxaBcoDataIni',fld:'vLANCAMENTOCXABCODATAINI'},{av:'AV17LancamentoCxaBcoDataFim',fld:'vLANCAMENTOCXABCODATAFIM'},{av:'AV18LancamentoCxaBcoNumeroIni',fld:'vLANCAMENTOCXABCONUMEROINI'},{av:'AV19LancamentoCxaBcoNumeroFim',fld:'vLANCAMENTOCXABCONUMEROFIM'},{av:'AV20LancamentoCxaBcoHisIdIni',fld:'vLANCAMENTOCXABCOHISIDINI'},{av:'AV21LancamentoCxaBcoHisIdFim',fld:'vLANCAMENTOCXABCOHISIDFIM'},{av:'AV28LancamentoCxaBcoHisIdFimStr',fld:'vLANCAMENTOCXABCOHISIDFIMSTR'},{av:'AV25LancamentoCxaBcoHisIdIniStr',fld:'vLANCAMENTOCXABCOHISIDINISTR'},{av:'AV27LancamentoCxaBcoNumeroFimStr',fld:'vLANCAMENTOCXABCONUMEROFIMSTR'},{av:'AV26LancamentoCxaBcoNumeroIniStr',fld:'vLANCAMENTOCXABCONUMEROINISTR'},{av:'AV24LancamentoCxaBcoDataFimStr',fld:'vLANCAMENTOCXABCODATAFIMSTR'},{av:'AV23LancamentoCxaBcoDataIniStr',fld:'vLANCAMENTOCXABCODATAINISTR'},{av:'AV29CaixaBancoIdStr',fld:'vCAIXABANCOIDSTR'}],[{av:'AV11NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV12NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV21LancamentoCxaBcoHisIdFim',fld:'vLANCAMENTOCXABCOHISIDFIM'},{av:'AV20LancamentoCxaBcoHisIdIni',fld:'vLANCAMENTOCXABCOHISIDINI'},{av:'AV19LancamentoCxaBcoNumeroFim',fld:'vLANCAMENTOCXABCONUMEROFIM'},{av:'AV18LancamentoCxaBcoNumeroIni',fld:'vLANCAMENTOCXABCONUMEROINI'},{av:'AV17LancamentoCxaBcoDataFim',fld:'vLANCAMENTOCXABCODATAFIM'},{av:'AV16LancamentoCxaBcoDataIni',fld:'vLANCAMENTOCXABCODATAINI'},{av:'AV15CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV30QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV14OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'}]];
   this.EvtParms["'NAO'"] = [[{av:'AV28LancamentoCxaBcoHisIdFimStr',fld:'vLANCAMENTOCXABCOHISIDFIMSTR'},{av:'AV25LancamentoCxaBcoHisIdIniStr',fld:'vLANCAMENTOCXABCOHISIDINISTR'},{av:'AV27LancamentoCxaBcoNumeroFimStr',fld:'vLANCAMENTOCXABCONUMEROFIMSTR'},{av:'AV26LancamentoCxaBcoNumeroIniStr',fld:'vLANCAMENTOCXABCONUMEROINISTR'},{av:'AV24LancamentoCxaBcoDataFimStr',fld:'vLANCAMENTOCXABCODATAFIMSTR'},{av:'AV23LancamentoCxaBcoDataIniStr',fld:'vLANCAMENTOCXABCODATAINISTR'},{av:'AV29CaixaBancoIdStr',fld:'vCAIXABANCOIDSTR'},{av:'AV12NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV14OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV13Ordenacao',fld:'vORDENACAO'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV13Ordenacao", "vORDENACAO", 0, "char");
   this.setVCMap("AV14OrdenacaoDescricao", "vORDENACAODESCRICAO", 0, "svchar");
   this.setVCMap("AV12NomeAbsoluto", "vNOMEABSOLUTO", 0, "svchar");
   this.setVCMap("AV29CaixaBancoIdStr", "vCAIXABANCOIDSTR", 0, "svchar");
   this.setVCMap("AV23LancamentoCxaBcoDataIniStr", "vLANCAMENTOCXABCODATAINISTR", 0, "char");
   this.setVCMap("AV24LancamentoCxaBcoDataFimStr", "vLANCAMENTOCXABCODATAFIMSTR", 0, "char");
   this.setVCMap("AV26LancamentoCxaBcoNumeroIniStr", "vLANCAMENTOCXABCONUMEROINISTR", 0, "svchar");
   this.setVCMap("AV27LancamentoCxaBcoNumeroFimStr", "vLANCAMENTOCXABCONUMEROFIMSTR", 0, "svchar");
   this.setVCMap("AV25LancamentoCxaBcoHisIdIniStr", "vLANCAMENTOCXABCOHISIDINISTR", 0, "svchar");
   this.setVCMap("AV28LancamentoCxaBcoHisIdFimStr", "vLANCAMENTOCXABCOHISIDFIMSTR", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconfirmaexclanccxabco());
