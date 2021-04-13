/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:0:39.18
*/
gx.evt.autoSkip = false;
gx.define('hmovimentacaocaixabanco', false, function () {
   this.ServerClass =  "hmovimentacaocaixabanco" ;
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
   this.e11aj2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e13aj2_client=function()
   {
      this.executeServerEvent("'CONSULTALANC'", true, null, false, false);
   };
   this.e15aj2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16aj2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2];
   this.GXLastCtrlId =2;
   GXValidFnc[2]={fld:"MENU", format:2,grid:0};
   this.Events = {"e11aj2_client": ["'FECHAR'", true] ,"e13aj2_client": ["'CONSULTALANC'", true] ,"e15aj2_client": ["ENTER", true] ,"e16aj2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'CONSULTALANC'"] = [[],[]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmovimentacaocaixabanco());
