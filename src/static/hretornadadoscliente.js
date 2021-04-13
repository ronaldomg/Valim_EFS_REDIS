/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:58:26.90
*/
gx.evt.autoSkip = false;
gx.define('hretornadadoscliente', false, function () {
   this.ServerClass =  "hretornadadoscliente" ;
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
      this.AV5Retorno=gx.fn.getControlValue("vRETORNO") ;
   };
   this.e1327h2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1427h2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXLastCtrlId =0;
   this.AV5Retorno = "" ;
   this.Events = {"e1327h2_client": ["ENTER", true] ,"e1427h2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.setVCMap("AV5Retorno", "vRETORNO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hretornadadoscliente());
