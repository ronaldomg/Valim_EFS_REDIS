/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:2:53.1
*/
gx.evt.autoSkip = false;
gx.define('hmodalmonitorapdv', false, function () {
   this.ServerClass =  "hmodalmonitorapdv" ;
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
   this.e12wz2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14wz2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15wz2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6];
   this.GXLastCtrlId =6;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"MSG", format:0,grid:0};
   this.Events = {"e12wz2_client": ["'FECHAR'", true] ,"e14wz2_client": ["ENTER", true] ,"e15wz2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalmonitorapdv());
