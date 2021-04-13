/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 0:47:23.82
*/
gx.evt.autoSkip = false;
gx.define('hpagefooter', true, function (CmpContext) {
   this.ServerClass =  "hpagefooter" ;
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
   this.SetStandaloneVars=function()
   {
   };
   this.e13332_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14332_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,7,9,11];
   this.GXLastCtrlId =11;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"NOMETABELA", format:0,grid:0};
   GXValidFnc[7]={fld:"TXTVER", format:0,grid:0};
   GXValidFnc[9]={fld:"NOMEMODULO", format:0,grid:0};
   GXValidFnc[11]={fld:"BTNHELP",grid:0};
   this.Events = {"e13332_client": ["ENTER", true] ,"e14332_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.InitStandaloneVars( );
});
