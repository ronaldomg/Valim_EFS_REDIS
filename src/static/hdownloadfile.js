/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:32:37.27
*/
gx.evt.autoSkip = false;
gx.define('hdownloadfile', false, function () {
   this.ServerClass =  "hdownloadfile" ;
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
      this.AV5Diretorio=gx.fn.getControlValue("vDIRETORIO") ;
   };
   this.e112312_client=function()
   {
      this.executeServerEvent("'SAIR'", false, null, false, false);
   };
   this.e122312_client=function()
   {
      this.executeServerEvent("'BAIXARARQUIVO'", false, null, false, false);
   };
   this.e142312_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152312_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2];
   this.GXLastCtrlId =2;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   this.AV5Diretorio = "" ;
   this.Events = {"e112312_client": ["'SAIR'", true] ,"e122312_client": ["'BAIXARARQUIVO'", true] ,"e142312_client": ["ENTER", true] ,"e152312_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'SAIR'"] = [[],[]];
   this.EvtParms["'BAIXARARQUIVO'"] = [[{av:'AV5Diretorio',fld:'vDIRETORIO',hsh:true}],[]];
   this.setVCMap("AV5Diretorio", "vDIRETORIO", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hdownloadfile());
