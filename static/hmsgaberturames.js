/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:57:39.37
*/
gx.evt.autoSkip = false;
gx.define('hmsgaberturames', false, function () {
   this.ServerClass =  "hmsgaberturames" ;
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
   };
   this.e116z2_client=function()
   {
      this.executeServerEvent("'CONFIRMAR'", false, null, false, false);
   };
   this.e136z2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e146z2_client=function()
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
   GXValidFnc[10]={fld:"TEXTBLOCK1", format:0,grid:0};
   this.Events = {"e116z2_client": ["'CONFIRMAR'", true] ,"e136z2_client": ["ENTER", true] ,"e146z2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'CONFIRMAR'"] = [[],[]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmsgaberturames());
