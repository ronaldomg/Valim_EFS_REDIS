/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:14:34.91
*/
gx.evt.autoSkip = false;
gx.define('hmovordemservico', false, function () {
   this.ServerClass =  "hmovordemservico" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.e111cn2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e131cn2_client=function()
   {
      this.executeServerEvent("'CONSULTAOS'", true, null, false, false);
   };
   this.e151cn2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e161cn2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2];
   this.GXLastCtrlId =2;
   GXValidFnc[2]={fld:"MENU", format:2,grid:0};
   this.Events = {"e111cn2_client": ["'FECHAR'", true] ,"e131cn2_client": ["'CONSULTAOS'", true] ,"e151cn2_client": ["ENTER", true] ,"e161cn2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'CONSULTAOS'"] = [[],[]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmovordemservico());
