/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:24:55.23
*/
gx.evt.autoSkip = false;
gx.define('hatualizacaobancodadosespera', false, function () {
   this.ServerClass =  "hatualizacaobancodadosespera" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
   };
   this.e1121k2_client=function()
   {
      this.executeServerEvent("TIMER.ELAPSED", false, null, true, true);
   };
   this.e1421k2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1521k2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10];
   this.GXLastCtrlId =10;
   this.TIMERContainer = gx.uc.getNew(this, 11, 0, "Timer", "TIMERContainer", "Timer");
   var TIMERContainer = this.TIMERContainer;
   TIMERContainer.setProp("Interval", "Interval", 5000, "num");
   TIMERContainer.setDynProp("Enabled", "Enabled", true, "boolean");
   TIMERContainer.setProp("Visible", "Visible", true, "bool");
   TIMERContainer.setProp("Class", "Class", "", "char");
   TIMERContainer.setC2ShowFunction(function(UC) { UC.start(); });
   TIMERContainer.addEventHandler("Elapsed", this.e1121k2_client);
   this.setUserControl(TIMERContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"IMAGE1",grid:0};
   GXValidFnc[10]={fld:"TEXTBLOCK1", format:0,grid:0};
   this.Events = {"e1121k2_client": ["TIMER.ELAPSED", true] ,"e1421k2_client": ["ENTER", true] ,"e1521k2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["TIMER.ELAPSED"] = [[],[{av:'AV9varchar',fld:'vVARCHAR'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK1","Caption")',ctrl:'TEXTBLOCK1',prop:'Caption'}]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hatualizacaobancodadosespera());
