/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:56:53.99
*/
gx.evt.autoSkip = false;
gx.define('hvalidadecertificado', false, function () {
   this.ServerClass =  "hvalidadecertificado" ;
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
      this.AV7TxtValidade=gx.fn.getControlValue("vTXTVALIDADE") ;
   };
   this.e1126s2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1426s2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1526s2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10];
   this.GXLastCtrlId =10;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"IMAGE1",grid:0};
   GXValidFnc[10]={fld:"TXTVALIDADE", format:2,grid:0};
   this.AV7TxtValidade = "" ;
   this.Events = {"e1126s2_client": ["'FECHAR'", true] ,"e1426s2_client": ["ENTER", true] ,"e1526s2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setVCMap("AV7TxtValidade", "TXTVALIDADE", 0, "vchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hvalidadecertificado());
