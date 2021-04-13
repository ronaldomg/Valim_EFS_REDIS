/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:2:23.8
*/
gx.evt.autoSkip = false;
gx.define('hmovimentacaoestoquecompras', false, function () {
   this.ServerClass =  "hmovimentacaoestoquecompras" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.e11pb2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e14pb2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15pb2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2];
   this.GXLastCtrlId =2;
   GXValidFnc[2]={fld:"MENU", format:2,grid:0};
   this.A138EmpresaId = "" ;
   this.A140SistemaId = "" ;
   this.Events = {"e11pb2_client": ["'FECHAR'", true] ,"e14pb2_client": ["ENTER", true] ,"e15pb2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[{av:'AV29i',fld:'vI'}]];
   this.setVCMap("A138EmpresaId", "EMPRESAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmovimentacaoestoquecompras());
