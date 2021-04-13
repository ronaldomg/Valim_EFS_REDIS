/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 0:47:18.27
*/
gx.evt.autoSkip = false;
gx.define('gamlogout', true, function (CmpContext) {
   this.ServerClass =  "gamlogout" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setCmpContext(CmpContext);
   this.ReadonlyForm = true;
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
   this.e1221r2_client=function()
   {
      this.executeServerEvent("'LOGOUT'", false, null, false, false);
   };
   this.e1421r2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1521r2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,10];
   this.GXLastCtrlId =10;
   GXValidFnc[2]={fld:"TBLLOGOUT",grid:0};
   GXValidFnc[10]={fld:"TBWELCOME", format:0,grid:0};
   this.Events = {"e1221r2_client": ["'LOGOUT'", true] ,"e1421r2_client": ["ENTER", true] ,"e1521r2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'LOGOUT'"] = [[],[{av:'AV10Isok',fld:'vISOK'}]];
   this.InitStandaloneVars( );
});
