/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:50:47.35
*/
gx.evt.autoSkip = false;
gx.define('hconsultaentradamensagem', false, function () {
   this.ServerClass =  "hconsultaentradamensagem" ;
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
      this.AV6MsgAlert=gx.fn.getControlValue("vMSGALERT") ;
      this.AV5Link=gx.fn.getControlValue("vLINK") ;
   };
   this.e111yu2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e141yu2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e151yu2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TEXTBLOCK1", format:0,grid:0};
   this.AV6MsgAlert = "" ;
   this.AV5Link = "" ;
   this.Events = {"e111yu2_client": ["'FECHAR'", true] ,"e141yu2_client": ["ENTER", true] ,"e151yu2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV5Link',fld:'vLINK',hsh:true}],[]];
   this.setVCMap("AV6MsgAlert", "vMSGALERT", 0, "char");
   this.setVCMap("AV5Link", "vLINK", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaentradamensagem());
