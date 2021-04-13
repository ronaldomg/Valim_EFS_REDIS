/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:47:42.77
*/
gx.evt.autoSkip = false;
gx.define('hemitirtermotransferencia', false, function () {
   this.ServerClass =  "hemitirtermotransferencia" ;
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
      this.AV17BemNotaFiscal=gx.fn.getControlValue("vBEMNOTAFISCAL") ;
      this.AV18BemVlrVenda=gx.fn.getDecimalValue("vBEMVLRVENDA",'.',',') ;
      this.AV22BemAnoProcesso=gx.fn.getIntegerValue("vBEMANOPROCESSO",'.') ;
      this.AV19BemNoProcessoBaixa=gx.fn.getIntegerValue("vBEMNOPROCESSOBAIXA",'.') ;
      this.AV20ConvenioId=gx.fn.getIntegerValue("vCONVENIOID",'.') ;
      this.AV21Data=gx.fn.getDateValue("vDATA") ;
   };
   this.e12ke2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13ke2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15ke2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TEXTBLOCK9", format:0,grid:0};
   this.AV17BemNotaFiscal = "" ;
   this.AV18BemVlrVenda = 0 ;
   this.AV22BemAnoProcesso = 0 ;
   this.AV19BemNoProcessoBaixa = 0 ;
   this.AV20ConvenioId = 0 ;
   this.AV21Data = gx.date.nullDate() ;
   this.Events = {"e12ke2_client": ["ENTER", true] ,"e13ke2_client": ["'FECHAR'", true] ,"e15ke2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV28Pgmname',fld:'vPGMNAME'},{av:'AV17BemNotaFiscal',fld:'vBEMNOTAFISCAL'},{av:'AV18BemVlrVenda',fld:'vBEMVLRVENDA'},{av:'AV22BemAnoProcesso',fld:'vBEMANOPROCESSO'},{av:'AV19BemNoProcessoBaixa',fld:'vBEMNOPROCESSOBAIXA'},{av:'AV20ConvenioId',fld:'vCONVENIOID'},{av:'AV21Data',fld:'vDATA'},{av:'AV15QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV29Pgmdesc',fld:'vPGMDESC'}],[{av:'AV14NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV13NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV15QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV21Data',fld:'vDATA'},{av:'AV20ConvenioId',fld:'vCONVENIOID'},{av:'AV19BemNoProcessoBaixa',fld:'vBEMNOPROCESSOBAIXA'},{av:'AV22BemAnoProcesso',fld:'vBEMANOPROCESSO'},{av:'AV18BemVlrVenda',fld:'vBEMVLRVENDA'},{av:'AV17BemNotaFiscal',fld:'vBEMNOTAFISCAL'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV21Data',fld:'vDATA'},{av:'AV20ConvenioId',fld:'vCONVENIOID'},{av:'AV19BemNoProcessoBaixa',fld:'vBEMNOPROCESSOBAIXA'},{av:'AV22BemAnoProcesso',fld:'vBEMANOPROCESSO'},{av:'AV18BemVlrVenda',fld:'vBEMVLRVENDA'},{av:'AV17BemNotaFiscal',fld:'vBEMNOTAFISCAL'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17BemNotaFiscal", "vBEMNOTAFISCAL", 0, "svchar");
   this.setVCMap("AV18BemVlrVenda", "vBEMVLRVENDA", 0, "decimal");
   this.setVCMap("AV22BemAnoProcesso", "vBEMANOPROCESSO", 0, "int");
   this.setVCMap("AV19BemNoProcessoBaixa", "vBEMNOPROCESSOBAIXA", 0, "int");
   this.setVCMap("AV20ConvenioId", "vCONVENIOID", 0, "int");
   this.setVCMap("AV21Data", "vDATA", 0, "date");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hemitirtermotransferencia());
