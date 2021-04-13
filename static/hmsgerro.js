/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:29:39.55
*/
gx.evt.autoSkip = false;
gx.define('hmsgerro', false, function () {
   this.ServerClass =  "hmsgerro" ;
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
      this.AV7MsgErro=gx.fn.getControlValue("vMSGERRO") ;
   };
   this.e1211l2_client=function()
   {
      this.executeServerEvent("'FECHARMODAL'", false, null, false, false);
   };
   this.e1411l2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1511l2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6];
   this.GXLastCtrlId =6;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TXTMSG", format:2,grid:0};
   this.AV7MsgErro = "" ;
   this.Events = {"e1211l2_client": ["'FECHARMODAL'", true] ,"e1411l2_client": ["ENTER", true] ,"e1511l2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHARMODAL'"] = [[],[]];
   this.setVCMap("AV7MsgErro", "vMSGERRO", 0, "vchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmsgerro());
