/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:25:0.14
*/
gx.evt.autoSkip = false;
gx.define('hdadosbluefocus', false, function () {
   this.ServerClass =  "hdadosbluefocus" ;
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
   this.e1321o2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1421o2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11];
   this.GXLastCtrlId =11;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TXTSIS", format:0,grid:0};
   GXValidFnc[11]={fld:"TXTPLA", format:0,grid:0};
   this.Events = {"e1321o2_client": ["ENTER", true] ,"e1421o2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hdadosbluefocus());
