/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:24:59.85
*/
gx.evt.autoSkip = false;
gx.define('hatualizacaobancodadosconfirmac', false, function () {
   this.ServerClass =  "hatualizacaobancodadosconfirmac" ;
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
   };
   this.e1121n2_client=function()
   {
      this.executeServerEvent("'SIM'", false, null, false, false);
   };
   this.e1221n2_client=function()
   {
      this.executeServerEvent("'NAO'", false, null, false, false);
   };
   this.e1521n2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1621n2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,18];
   this.GXLastCtrlId =18;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"IMAGE1",grid:0};
   GXValidFnc[10]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   this.Events = {"e1121n2_client": ["'SIM'", true] ,"e1221n2_client": ["'NAO'", true] ,"e1521n2_client": ["ENTER", true] ,"e1621n2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'SIM'"] = [[],[]];
   this.EvtParms["'NAO'"] = [[],[]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hatualizacaobancodadosconfirmac());
