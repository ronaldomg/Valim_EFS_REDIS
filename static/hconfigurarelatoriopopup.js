/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:51:40.85
*/
gx.evt.autoSkip = false;
gx.define('hconfigurarelatoriopopup', false, function () {
   this.ServerClass =  "hconfigurarelatoriopopup" ;
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
      this.AV5Url=gx.fn.getControlValue("vURL") ;
      this.AV6NomeTela=gx.fn.getControlValue("vNOMETELA") ;
   };
   this.e121z62_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e141z62_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e151z62_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2];
   this.GXLastCtrlId =2;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   this.AV5Url = "" ;
   this.AV6NomeTela = "" ;
   this.Events = {"e121z62_client": ["'CANCELAR'", true] ,"e141z62_client": ["ENTER", true] ,"e151z62_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'CANCELAR'"] = [[],[]];
   this.setVCMap("AV5Url", "vURL", 0, "svchar");
   this.setVCMap("AV6NomeTela", "vNOMETELA", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconfigurarelatoriopopup());
