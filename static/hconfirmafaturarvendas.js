/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:42:33.14
*/
gx.evt.autoSkip = false;
gx.define('hconfirmafaturarvendas', false, function () {
   this.ServerClass =  "hconfirmafaturarvendas" ;
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
   this.e121ff2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e131ff2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151ff2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TEXTBLOCK1", format:0,grid:0};
   this.Events = {"e121ff2_client": ["ENTER", true] ,"e131ff2_client": ["'FECHAR'", true] ,"e151ff2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV13SNConfirmar',fld:'vSNCONFIRMAR'}],[{av:'AV13SNConfirmar',fld:'vSNCONFIRMAR'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV13SNConfirmar',fld:'vSNCONFIRMAR'}],[{av:'AV13SNConfirmar',fld:'vSNCONFIRMAR'}]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconfirmafaturarvendas());
