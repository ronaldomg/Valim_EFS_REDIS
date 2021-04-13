/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:53:16.65
*/
gx.evt.autoSkip = false;
gx.define('hrelatoriosemconteudo', false, function () {
   this.ServerClass =  "hrelatoriosemconteudo" ;
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
   this.e111zw2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e141zw2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,7];
   this.GXLastCtrlId =7;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TEXTBLOCK1", format:0,grid:0};
   this.Events = {"e111zw2_client": ["ENTER", true] ,"e141zw2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[],[]];
   this.EnterCtrl = ["BTNFECHAR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelatoriosemconteudo());
