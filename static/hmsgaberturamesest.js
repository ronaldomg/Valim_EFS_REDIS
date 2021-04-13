/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:33:40.81
*/
gx.evt.autoSkip = false;
gx.define('hmsgaberturamesest', false, function () {
   this.ServerClass =  "hmsgaberturamesest" ;
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
   };
   this.e12z22_client=function()
   {
      this.executeServerEvent("'CONFIRMAR'", false, null, false, false);
   };
   this.e14z22_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15z22_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TXTMSG", format:0,grid:0};
   this.Events = {"e12z22_client": ["'CONFIRMAR'", true] ,"e14z22_client": ["ENTER", true] ,"e15z22_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'CONFIRMAR'"] = [[],[]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmsgaberturamesest());
