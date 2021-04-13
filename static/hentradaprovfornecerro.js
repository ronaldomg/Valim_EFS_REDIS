/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:55:42.93
*/
gx.evt.autoSkip = false;
gx.define('hentradaprovfornecerro', false, function () {
   this.ServerClass =  "hentradaprovfornecerro" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.e12v42_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14v42_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15v42_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,12,15,18];
   this.GXLastCtrlId =18;
   GXValidFnc[3]={fld:"TABLE8",grid:0};
   GXValidFnc[6]={fld:"TABLE3",grid:0};
   GXValidFnc[9]={fld:"IMAGE1",grid:0};
   GXValidFnc[11]={fld:"TABLE1",grid:0};
   GXValidFnc[12]={fld:"TABLE7",grid:0};
   GXValidFnc[15]={fld:"TXTERRO", format:0,grid:0};
   GXValidFnc[18]={fld:"TXTERRO2", format:0,grid:0};
   this.Events = {"e12v42_client": ["'FECHAR'", true] ,"e14v42_client": ["ENTER", true] ,"e15v42_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hentradaprovfornecerro());
