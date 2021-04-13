/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:59:3.1
*/
gx.evt.autoSkip = false;
gx.define('hmodalrelacaoprodutos', false, function () {
   this.ServerClass =  "hmodalrelacaoprodutos" ;
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
      this.AV12QtdeCaracterRelatorio=gx.fn.getIntegerValue("vQTDECARACTERRELATORIO",'.') ;
      this.AV13SNClassificacaoCompleta=gx.fn.getControlValue("vSNCLASSIFICACAOCOMPLETA") ;
      this.AV14SNCodificacaoCompleta=gx.fn.getControlValue("vSNCODIFICACAOCOMPLETA") ;
      this.AV15SNSimilares=gx.fn.getControlValue("vSNSIMILARES") ;
   };
   this.e12vp2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13vp2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e16vp2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"MSGM", format:0,grid:0};
   this.AV12QtdeCaracterRelatorio = 0 ;
   this.AV13SNClassificacaoCompleta = "" ;
   this.AV14SNCodificacaoCompleta = "" ;
   this.AV15SNSimilares = "" ;
   this.Events = {"e12vp2_client": ["ENTER", true] ,"e13vp2_client": ["'FECHAR'", true] ,"e16vp2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV11SNConfirmar',fld:'vSNCONFIRMAR'},{av:'AV18Mensagem',fld:'vMENSAGEM'},{av:'AV12QtdeCaracterRelatorio',fld:'vQTDECARACTERRELATORIO'},{av:'AV15SNSimilares',fld:'vSNSIMILARES'},{av:'AV14SNCodificacaoCompleta',fld:'vSNCODIFICACAOCOMPLETA'},{av:'AV13SNClassificacaoCompleta',fld:'vSNCLASSIFICACAOCOMPLETA'}],[{av:'AV11SNConfirmar',fld:'vSNCONFIRMAR'},{av:'AV18Mensagem',fld:'vMENSAGEM'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV11SNConfirmar',fld:'vSNCONFIRMAR'},{av:'AV18Mensagem',fld:'vMENSAGEM'},{av:'AV12QtdeCaracterRelatorio',fld:'vQTDECARACTERRELATORIO'},{av:'AV15SNSimilares',fld:'vSNSIMILARES'},{av:'AV14SNCodificacaoCompleta',fld:'vSNCODIFICACAOCOMPLETA'},{av:'AV13SNClassificacaoCompleta',fld:'vSNCLASSIFICACAOCOMPLETA'}],[{av:'AV11SNConfirmar',fld:'vSNCONFIRMAR'},{av:'AV18Mensagem',fld:'vMENSAGEM'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV12QtdeCaracterRelatorio", "vQTDECARACTERRELATORIO", 0, "int");
   this.setVCMap("AV13SNClassificacaoCompleta", "vSNCLASSIFICACAOCOMPLETA", 0, "char");
   this.setVCMap("AV14SNCodificacaoCompleta", "vSNCODIFICACAOCOMPLETA", 0, "char");
   this.setVCMap("AV15SNSimilares", "vSNSIMILARES", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalrelacaoprodutos());
