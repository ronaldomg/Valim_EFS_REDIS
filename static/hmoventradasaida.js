/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:18:6.7
*/
gx.evt.autoSkip = false;
gx.define('hmoventradasaida', false, function () {
   this.ServerClass =  "hmoventradasaida" ;
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
   this.e11u12_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e13u12_client=function()
   {
      this.executeServerEvent("'CONSULTAENTRADA'", true, null, false, false);
   };
   this.e14u12_client=function()
   {
      this.executeServerEvent("'CONSULTASAIDA'", true, null, false, false);
   };
   this.e16u12_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e17u12_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2];
   this.GXLastCtrlId =2;
   GXValidFnc[2]={fld:"MENU", format:2,grid:0};
   this.Events = {"e11u12_client": ["'FECHAR'", true] ,"e13u12_client": ["'CONSULTAENTRADA'", true] ,"e14u12_client": ["'CONSULTASAIDA'", true] ,"e16u12_client": ["ENTER", true] ,"e17u12_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[{av:'AV27i',fld:'vI'}]];
   this.EvtParms["'CONSULTAENTRADA'"] = [[],[]];
   this.EvtParms["'CONSULTASAIDA'"] = [[],[]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmoventradasaida());
