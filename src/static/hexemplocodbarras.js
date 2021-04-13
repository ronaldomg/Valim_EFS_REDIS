/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:47:26.24
*/
gx.evt.autoSkip = false;
gx.define('hexemplocodbarras', false, function () {
   this.ServerClass =  "hexemplocodbarras" ;
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
   this.e111gr2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e131gr2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e141gr2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8];
   this.GXLastCtrlId =8;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"IMAGE1",grid:0};
   this.Events = {"e111gr2_client": ["'FECHAR'", true] ,"e131gr2_client": ["ENTER", true] ,"e141gr2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hexemplocodbarras());
