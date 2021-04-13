/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:50:38.52
*/
gx.evt.autoSkip = false;
gx.define('hmovimentacaopedidocompra', false, function () {
   this.ServerClass =  "hmovimentacaopedidocompra" ;
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
   this.e111xk2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e141xk2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e151xk2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2];
   this.GXLastCtrlId =2;
   GXValidFnc[2]={fld:"MENU", format:2,grid:0};
   this.Events = {"e111xk2_client": ["'FECHAR'", true] ,"e141xk2_client": ["ENTER", true] ,"e151xk2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[{av:'AV17i',fld:'vI'}]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmovimentacaopedidocompra());
