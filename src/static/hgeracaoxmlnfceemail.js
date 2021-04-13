/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:23:38.90
*/
gx.evt.autoSkip = false;
gx.define('hgeracaoxmlnfceemail', false, function () {
   this.ServerClass =  "hgeracaoxmlnfceemail" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
   };
   this.e122hk2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e132hk2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e152hk2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8];
   this.GXLastCtrlId =8;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   this.Events = {"e122hk2_client": ["ENTER", true] ,"e132hk2_client": ["'CANCELAR'", true] ,"e152hk2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[],[]];
   this.EvtParms["'CANCELAR'"] = [[],[]];
   this.EnterCtrl = ["BTNSIM"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hgeracaoxmlnfceemail());
