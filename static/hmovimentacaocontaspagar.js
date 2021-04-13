/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:14:19.3
*/
gx.evt.autoSkip = false;
gx.define('hmovimentacaocontaspagar', false, function () {
   this.ServerClass =  "hmovimentacaocontaspagar" ;
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
   this.e11bt2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e13bt2_client=function()
   {
      this.executeServerEvent("'REGISTRAR'", true, null, false, false);
   };
   this.e14bt2_client=function()
   {
      this.executeServerEvent("'BAIXARPAGAR'", true, null, false, false);
   };
   this.e16bt2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e17bt2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2];
   this.GXLastCtrlId =2;
   GXValidFnc[2]={fld:"MENU", format:2,grid:0};
   this.Events = {"e11bt2_client": ["'FECHAR'", true] ,"e13bt2_client": ["'REGISTRAR'", true] ,"e14bt2_client": ["'BAIXARPAGAR'", true] ,"e16bt2_client": ["ENTER", true] ,"e17bt2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[{av:'AV16i',fld:'vI'}]];
   this.EvtParms["'REGISTRAR'"] = [[],[{av:'AV16i',fld:'vI'}]];
   this.EvtParms["'BAIXARPAGAR'"] = [[],[]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmovimentacaocontaspagar());
