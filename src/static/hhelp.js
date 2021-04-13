/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:59:45.29
*/
gx.evt.autoSkip = false;
gx.define('hhelp', false, function () {
   this.ServerClass =  "hhelp" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV5obj=gx.fn.getControlValue("vOBJ") ;
   };
   this.e139v2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e149v2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXLastCtrlId =0;
   this.AV5obj = "" ;
   this.Events = {"e139v2_client": ["ENTER", true] ,"e149v2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.setVCMap("AV5obj", "vOBJ", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hhelp());
