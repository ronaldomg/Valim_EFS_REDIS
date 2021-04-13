/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 16:33:6.78
*/
gx.evt.autoSkip = false;
gx.define('hgnfesemresposta', false, function () {
   this.ServerClass =  "hgnfesemresposta" ;
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
      this.AV7Acao=gx.fn.getControlValue("vACAO") ;
      this.AV8SnModal=gx.fn.getControlValue("vSNMODAL") ;
      this.AV9SessaoNFe=gx.fn.getControlValue("vSESSAONFE") ;
   };
   this.e1212g2_client=function()
   {
      this.executeServerEvent("'NãO'", false, null, false, false);
   };
   this.e1312g2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1412g2_client=function()
   {
      this.executeServerEvent("'ERRO'", false, null, false, false);
   };
   this.e1612g2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"MSGEXC", format:0,grid:0};
   this.AV7Acao = "" ;
   this.AV8SnModal = "" ;
   this.AV9SessaoNFe = "" ;
   this.Events = {"e1212g2_client": ["'NãO'", true] ,"e1312g2_client": ["ENTER", true] ,"e1412g2_client": ["'ERRO'", true] ,"e1612g2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'NãO'"] = [[{av:'AV6SnOk',fld:'vSNOK'}],[{av:'AV6SnOk',fld:'vSNOK'}]];
   this.EvtParms["ENTER"] = [[{av:'AV6SnOk',fld:'vSNOK'}],[{av:'AV6SnOk',fld:'vSNOK'}]];
   this.EvtParms["'ERRO'"] = [[{av:'AV9SessaoNFe',fld:'vSESSAONFE',hsh:true}],[{av:'AV9SessaoNFe',fld:'vSESSAONFE',hsh:true}]];
   this.EnterCtrl = ["SIM"];
   this.setVCMap("AV7Acao", "vACAO", 0, "char");
   this.setVCMap("AV8SnModal", "vSNMODAL", 0, "char");
   this.setVCMap("AV9SessaoNFe", "vSESSAONFE", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hgnfesemresposta());
