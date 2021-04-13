/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:58:45.93
*/
gx.evt.autoSkip = false;
gx.define('hbloqueiotelevenda', false, function () {
   this.ServerClass =  "hbloqueiotelevenda" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
   };
   this.e1127v2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1427v2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1527v2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13];
   this.GXLastCtrlId =13;
   GXValidFnc[2]={fld:"TABLE5",grid:0};
   GXValidFnc[5]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[8]={fld:"TABLE4",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[13]={fld:"TXTMSG", format:0,grid:0};
   this.Events = {"e1127v2_client": ["'FECHAR'", true] ,"e1427v2_client": ["ENTER", true] ,"e1527v2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hbloqueiotelevenda());
