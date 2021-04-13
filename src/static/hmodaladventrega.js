/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:3:4.88
*/
gx.evt.autoSkip = false;
gx.define('hmodaladventrega', false, function () {
   this.ServerClass =  "hmodaladventrega" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV7MsgAdv=gx.fn.getControlValue("vMSGADV") ;
   };
   this.e1229f2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1329f2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e1529f2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TXTMSGADV", format:0,grid:0};
   this.AV7MsgAdv = "" ;
   this.Events = {"e1229f2_client": ["ENTER", true] ,"e1329f2_client": ["'CANCELAR'", true] ,"e1529f2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[],[]];
   this.EvtParms["'CANCELAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV7MsgAdv", "vMSGADV", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodaladventrega());
