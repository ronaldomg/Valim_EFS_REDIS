/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:58:58.18
*/
gx.evt.autoSkip = false;
gx.define('hmsgatualizamapa', false, function () {
   this.ServerClass =  "hmsgatualizamapa" ;
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
   this.e122802_client=function()
   {
      this.executeServerEvent("'FECHARMODAL'", false, null, false, false);
   };
   this.e132802_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152802_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8];
   this.GXLastCtrlId =8;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TXTMSG", format:0,grid:0};
   this.Events = {"e122802_client": ["'FECHARMODAL'", true] ,"e132802_client": ["ENTER", true] ,"e152802_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHARMODAL'"] = [[{av:'AV22SnOk',fld:'vSNOK'}],[{av:'AV22SnOk',fld:'vSNOK'}]];
   this.EvtParms["ENTER"] = [[{av:'AV22SnOk',fld:'vSNOK'}],[{av:'AV22SnOk',fld:'vSNOK'}]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmsgatualizamapa());
