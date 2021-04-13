/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:34:22.68
*/
gx.evt.autoSkip = false;
gx.define('hmodaladvsuspenderclicond', false, function () {
   this.ServerClass =  "hmodaladvsuspenderclicond" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.e12z72_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13z72_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15z72_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,6,9,12];
   this.GXLastCtrlId =12;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[6]={fld:"TABLE6",grid:0};
   GXValidFnc[9]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   this.Events = {"e12z72_client": ["ENTER", true] ,"e13z72_client": ["'FECHAR'", true] ,"e15z72_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodaladvsuspenderclicond());
