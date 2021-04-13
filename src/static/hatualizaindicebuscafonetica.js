/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:49:37.68
*/
gx.evt.autoSkip = false;
gx.define('hatualizaindicebuscafonetica', false, function () {
   this.ServerClass =  "hatualizaindicebuscafonetica" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.e11lk2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13lk2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15lk2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,18];
   this.GXLastCtrlId =18;
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE7",grid:0};
   GXValidFnc[18]={fld:"BTNHELP",grid:0};
   this.Events = {"e11lk2_client": ["'FECHAR'", true] ,"e13lk2_client": ["ENTER", true] ,"e15lk2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hatualizaindicebuscafonetica());
