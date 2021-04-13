/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:54:30.5
*/
gx.evt.autoSkip = false;
gx.define('hregistrartelevendamensagem', false, function () {
   this.ServerClass =  "hregistrartelevendamensagem" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV5SaidaEmpresaId=gx.fn.getControlValue("vSAIDAEMPRESAID") ;
      this.AV6SaidaId=gx.fn.getIntegerValue("vSAIDAID",'.') ;
      this.AV11TpMsg=gx.fn.getIntegerValue("vTPMSG",'.') ;
   };
   this.e1225n2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1325n2_client=function()
   {
      this.executeServerEvent("'NAO'", false, null, false, false);
   };
   this.e1525n2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10];
   this.GXLastCtrlId =10;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"IMAGE2",grid:0};
   GXValidFnc[10]={fld:"MSGEXCL", format:0,grid:0};
   this.AV5SaidaEmpresaId = "" ;
   this.AV6SaidaId = 0 ;
   this.AV11TpMsg = 0 ;
   this.Events = {"e1225n2_client": ["ENTER", true] ,"e1325n2_client": ["'NAO'", true] ,"e1525n2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV10EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV9NotaSaida',fld:'vNOTASAIDA'},{av:'AV5SaidaEmpresaId',fld:'vSAIDAEMPRESAID',hsh:true},{av:'AV6SaidaId',fld:'vSAIDAID',hsh:true},{av:'AV7UsrCod',fld:'vUSRCOD'}],[{av:'AV6SaidaId',fld:'vSAIDAID',hsh:true},{av:'AV5SaidaEmpresaId',fld:'vSAIDAEMPRESAID',hsh:true}]];
   this.EvtParms["'NAO'"] = [[],[]];
   this.EnterCtrl = ["BTNSIM"];
   this.setVCMap("AV5SaidaEmpresaId", "vSAIDAEMPRESAID", 0, "char");
   this.setVCMap("AV6SaidaId", "vSAIDAID", 0, "int");
   this.setVCMap("AV11TpMsg", "vTPMSG", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrartelevendamensagem());
