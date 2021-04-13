/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:43:32.63
*/
gx.evt.autoSkip = false;
gx.define('hmovimentacaoportaria', false, function () {
   this.ServerClass =  "hmovimentacaoportaria" ;
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
   this.e11io2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e14io2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15io2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2];
   this.GXLastCtrlId =2;
   GXValidFnc[2]={fld:"MENU", format:2,grid:0};
   this.A54ClassificacaoId = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.Events = {"e11io2_client": ["'FECHAR'", true] ,"e14io2_client": ["ENTER", true] ,"e15io2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmovimentacaoportaria());
