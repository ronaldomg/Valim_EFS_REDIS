/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:53:13.93
*/
gx.evt.autoSkip = false;
gx.define('hmodaladv', false, function () {
   this.ServerClass =  "hmodaladv" ;
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
      this.AV9MsgAdv=gx.fn.getControlValue("vMSGADV") ;
   };
   this.e121zu2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e141zu2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TXTMSGADV", format:0,grid:0};
   this.AV9MsgAdv = "" ;
   this.Events = {"e121zu2_client": ["ENTER", true] ,"e141zu2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[],[]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV9MsgAdv", "vMSGADV", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodaladv());
