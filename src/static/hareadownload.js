/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:32:40.69
*/
gx.evt.autoSkip = false;
gx.define('hareadownload', false, function () {
   this.ServerClass =  "hareadownload" ;
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
      this.AV6TpConsultas=gx.fn.getControlValue("vTPCONSULTAS") ;
   };
   this.e132362_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e142362_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXLastCtrlId =0;
   this.AV6TpConsultas = "" ;
   this.Events = {"e132362_client": ["ENTER", true] ,"e142362_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.setVCMap("AV6TpConsultas", "vTPCONSULTAS", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hareadownload());
