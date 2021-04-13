/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:25:43.0
*/
gx.evt.autoSkip = false;
gx.define('gamhome', false, function () {
   this.ServerClass =  "gamhome" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
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
   this.e1221t2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1321t2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXLastCtrlId =0;
   this.Events = {"e1221t2_client": ["ENTER", true] ,"e1321t2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamhome());
