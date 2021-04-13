/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:38:11.62
*/
gx.evt.autoSkip = false;
gx.define('hregistrartrocadevsair', false, function () {
   this.ServerClass =  "hregistrartrocadevsair" ;
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
      this.AV18Tipo=gx.fn.getIntegerValue("vTIPO",'.') ;
      this.AV19ModeTela=gx.fn.getControlValue("vMODETELA") ;
   };
   this.e1211q2_client=function()
   {
      this.executeServerEvent("'FECHARMODAL'", false, null, false, false);
   };
   this.e1311q2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1511q2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"MSGADV", format:0,grid:0};
   this.AV18Tipo = 0 ;
   this.AV19ModeTela = "" ;
   this.Events = {"e1211q2_client": ["'FECHARMODAL'", true] ,"e1311q2_client": ["ENTER", true] ,"e1511q2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHARMODAL'"] = [[],[]];
   this.EvtParms["ENTER"] = [[],[]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV18Tipo", "vTIPO", 0, "int");
   this.setVCMap("AV19ModeTela", "vMODETELA", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrartrocadevsair());
