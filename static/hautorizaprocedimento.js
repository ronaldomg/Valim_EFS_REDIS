/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:14:57.81
*/
gx.evt.autoSkip = false;
gx.define('hautorizaprocedimento', false, function () {
   this.ServerClass =  "hautorizaprocedimento" ;
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
      this.AV13CodMsg=gx.fn.getIntegerValue("vCODMSG",'.') ;
   };
   this.e11c22_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13c22_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15c22_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TEXTBLOCK1", format:0,grid:0};
   this.AV13CodMsg = 0 ;
   this.Events = {"e11c22_client": ["ENTER", true] ,"e13c22_client": ["'FECHAR'", true] ,"e15c22_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV12SnOk',fld:'vSNOK'}],[{av:'AV12SnOk',fld:'vSNOK'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV12SnOk',fld:'vSNOK'}],[{av:'AV12SnOk',fld:'vSNOK'}]];
   this.EnterCtrl = ["BTNSIM"];
   this.setVCMap("AV13CodMsg", "vCODMSG", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hautorizaprocedimento());
