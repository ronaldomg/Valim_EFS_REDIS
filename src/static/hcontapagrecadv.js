/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:4:37.70
*/
gx.evt.autoSkip = false;
gx.define('hcontapagrecadv', false, function () {
   this.ServerClass =  "hcontapagrecadv" ;
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
   };
   this.e122a32_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e142a32_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TXTMSGADV", format:0,grid:0};
   this.Events = {"e122a32_client": ["ENTER", true] ,"e142a32_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[],[]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcontapagrecadv());
