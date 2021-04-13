/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:54:22.12
*/
gx.evt.autoSkip = false;
gx.define('hconsisteautorizacao', false, function () {
   this.ServerClass =  "hconsisteautorizacao" ;
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
   this.e12mr2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14mr2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15mr2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,12,15,18];
   this.GXLastCtrlId =18;
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE3",grid:0};
   GXValidFnc[9]={fld:"IMAGE1",grid:0};
   GXValidFnc[11]={fld:"TABLE1",grid:0};
   GXValidFnc[12]={fld:"TABLE4",grid:0};
   GXValidFnc[15]={fld:"TXTCONFIRMA", format:0,grid:0};
   GXValidFnc[18]={fld:"TXTCONFIRMA2", format:0,grid:0};
   this.Events = {"e12mr2_client": ["'FECHAR'", true] ,"e14mr2_client": ["ENTER", true] ,"e15mr2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsisteautorizacao());
