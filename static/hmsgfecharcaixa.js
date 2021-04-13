/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:29:39.75
*/
gx.evt.autoSkip = false;
gx.define('hmsgfecharcaixa', false, function () {
   this.ServerClass =  "hmsgfecharcaixa" ;
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
   this.e1211m2_client=function()
   {
      this.executeServerEvent("'FECHARMODAL'", false, null, false, false);
   };
   this.e1311m2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1511m2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6];
   this.GXLastCtrlId =6;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TXTMSG", format:0,grid:0};
   this.Events = {"e1211m2_client": ["'FECHARMODAL'", true] ,"e1311m2_client": ["ENTER", true] ,"e1511m2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHARMODAL'"] = [[{av:'AV22SnOk',fld:'vSNOK'}],[{av:'AV22SnOk',fld:'vSNOK'}]];
   this.EvtParms["ENTER"] = [[{av:'AV22SnOk',fld:'vSNOK'}],[{av:'AV22SnOk',fld:'vSNOK'}]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmsgfecharcaixa());
