/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:1:18.42
*/
gx.evt.autoSkip = false;
gx.define('hretornowebservice', false, function () {
   this.ServerClass =  "hretornowebservice" ;
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
   this.e1228q2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1428q2_client=function()
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
   this.Events = {"e1228q2_client": ["ENTER", true] ,"e1428q2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[],[]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV7MsgAdv", "vMSGADV", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hretornowebservice());
