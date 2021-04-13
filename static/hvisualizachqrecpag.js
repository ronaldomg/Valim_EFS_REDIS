/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:58:45.75
*/
gx.evt.autoSkip = false;
gx.define('hvisualizachqrecpag', false, function () {
   this.ServerClass =  "hvisualizachqrecpag" ;
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
      this.AV8Paginas=gx.fn.getIntegerValue("vPAGINAS",'.') ;
      this.AV9Sessao=gx.fn.getControlValue("vSESSAO") ;
   };
   this.e1327t2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1427t2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2];
   this.GXLastCtrlId =2;
   GXValidFnc[2]={fld:"TEXTBLOCK1", format:2,grid:0};
   this.AV8Paginas = 0 ;
   this.AV9Sessao = "" ;
   this.Events = {"e1327t2_client": ["ENTER", true] ,"e1427t2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.setVCMap("AV8Paginas", "vPAGINAS", 0, "int");
   this.setVCMap("AV9Sessao", "vSESSAO", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hvisualizachqrecpag());
