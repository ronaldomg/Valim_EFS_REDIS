/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:26:5.24
*/
gx.evt.autoSkip = false;
gx.define('gammasterpagepopup', false, function () {
   this.ServerClass =  "gammasterpagepopup" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.IsMasterPage=true;
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
   };
   this.e1321x2_client=function()
   {
      this.executeServerEvent("ENTER_MPAGE", true, null, false, false);
   };
   this.e1421x2_client=function()
   {
      this.executeServerEvent("CANCEL_MPAGE", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXLastCtrlId =0;
   this.Events = {"e1321x2_client": ["ENTER_MPAGE", true] ,"e1421x2_client": ["CANCEL_MPAGE", true]};
   this.EvtParms["REFRESH_MPAGE"] = [[],[]];
   this.InitStandaloneVars( );
});
gx.setMasterPage(new gammasterpagepopup());
