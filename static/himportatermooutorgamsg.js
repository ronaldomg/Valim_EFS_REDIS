/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 17:48:56.93
*/
gx.evt.autoSkip = false;
gx.define('himportatermooutorgamsg', false, function () {
   this.ServerClass =  "himportatermooutorgamsg" ;
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
   this.e1113t2_client=function()
   {
      this.executeServerEvent("'NAO'", false, null, false, false);
   };
   this.e1213t2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1513t2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14];
   this.GXLastCtrlId =14;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={fld:"TABLE3",grid:0};
   this.Events = {"e1113t2_client": ["'NAO'", true] ,"e1213t2_client": ["ENTER", true] ,"e1513t2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'NAO'"] = [[{av:'AV6SimNao',fld:'vSIMNAO'}],[{av:'AV6SimNao',fld:'vSIMNAO'}]];
   this.EvtParms["ENTER"] = [[{av:'AV6SimNao',fld:'vSIMNAO'}],[{av:'AV6SimNao',fld:'vSIMNAO'}]];
   this.EnterCtrl = ["SIM"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new himportatermooutorgamsg());
