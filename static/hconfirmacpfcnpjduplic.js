/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:48:1.82
*/
gx.evt.autoSkip = false;
gx.define('hconfirmacpfcnpjduplic', false, function () {
   this.ServerClass =  "hconfirmacpfcnpjduplic" ;
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
      this.AV12msgs=gx.fn.getControlValue("vMSGS") ;
   };
   this.e12ks2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13ks2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15ks2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TXTMSG", format:0,grid:0};
   this.AV12msgs = "" ;
   this.Events = {"e12ks2_client": ["ENTER", true] ,"e13ks2_client": ["'FECHAR'", true] ,"e15ks2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV13SnConfirmar',fld:'vSNCONFIRMAR'},{av:'AV12msgs',fld:'vMSGS'}],[{av:'AV13SnConfirmar',fld:'vSNCONFIRMAR'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV13SnConfirmar',fld:'vSNCONFIRMAR'},{av:'AV12msgs',fld:'vMSGS'}],[{av:'AV13SnConfirmar',fld:'vSNCONFIRMAR'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV12msgs", "vMSGS", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconfirmacpfcnpjduplic());
