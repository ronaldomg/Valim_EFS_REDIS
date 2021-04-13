/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:14:2.16
*/
gx.evt.autoSkip = false;
gx.define('hmsgexclusao', false, function () {
   this.ServerClass =  "hmsgexclusao" ;
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
      this.AV11msgs=gx.fn.getControlValue("vMSGS") ;
   };
   this.e1210a2_client=function()
   {
      this.executeServerEvent("'CONFIRMAR'", false, null, false, false);
   };
   this.e1410a2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1510a2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10];
   this.GXLastCtrlId =10;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"IMAGE2",grid:0};
   GXValidFnc[10]={fld:"TXTMSG", format:0,grid:0};
   this.AV11msgs = "" ;
   this.Events = {"e1210a2_client": ["'CONFIRMAR'", true] ,"e1410a2_client": ["ENTER", true] ,"e1510a2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'CONFIRMAR'"] = [[],[]];
   this.setVCMap("AV11msgs", "vMSGS", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmsgexclusao());
