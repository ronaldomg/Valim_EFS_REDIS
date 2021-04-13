/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:20:47.44
*/
gx.evt.autoSkip = false;
gx.define('hmovimentacaocontasreceber', false, function () {
   this.ServerClass =  "hmovimentacaocontasreceber" ;
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
   this.e11d92_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e13d92_client=function()
   {
      this.executeServerEvent("'REGISTRAR'", true, null, false, false);
   };
   this.e14d92_client=function()
   {
      this.executeServerEvent("'REGISTRARDESCONTO'", true, null, false, false);
   };
   this.e15d92_client=function()
   {
      this.executeServerEvent("'BAIXARRECEBER'", true, null, false, false);
   };
   this.e17d92_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e18d92_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2];
   this.GXLastCtrlId =2;
   GXValidFnc[2]={fld:"MENU", format:2,grid:0};
   this.Events = {"e11d92_client": ["'FECHAR'", true] ,"e13d92_client": ["'REGISTRAR'", true] ,"e14d92_client": ["'REGISTRARDESCONTO'", true] ,"e15d92_client": ["'BAIXARRECEBER'", true] ,"e17d92_client": ["ENTER", true] ,"e18d92_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[{av:'AV16i',fld:'vI'}]];
   this.EvtParms["'REGISTRAR'"] = [[],[{av:'AV16i',fld:'vI'}]];
   this.EvtParms["'REGISTRARDESCONTO'"] = [[],[{av:'AV16i',fld:'vI'}]];
   this.EvtParms["'BAIXARRECEBER'"] = [[],[]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmovimentacaocontasreceber());
