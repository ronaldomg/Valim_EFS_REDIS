/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 16:44:1.51
*/
gx.evt.autoSkip = false;
gx.define('hgnfedanfe', false, function () {
   this.ServerClass =  "hgnfedanfe" ;
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
      this.AV5SessaoNfe=gx.fn.getControlValue("vSESSAONFE") ;
      this.AV8SnFechar=gx.fn.getControlValue("vSNFECHAR") ;
   };
   this.e121382_client=function()
   {
      this.executeServerEvent("'NãO'", false, null, false, false);
   };
   this.e131382_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e161382_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,13];
   this.GXLastCtrlId =13;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={fld:"JSABR", format:2,grid:0};
   this.AV5SessaoNfe = "" ;
   this.AV8SnFechar = "" ;
   this.Events = {"e121382_client": ["'NãO'", true] ,"e131382_client": ["ENTER", true] ,"e161382_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV8SnFechar',fld:'vSNFECHAR'}],[]];
   this.EvtParms["'NãO'"] = [[{av:'AV8SnFechar',fld:'vSNFECHAR'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV5SessaoNfe',fld:'vSESSAONFE',hsh:true},{av:'AV6Nf',fld:'vNF'}],[{av:'AV9Tempo',fld:'vTEMPO'},{av:'AV10Link',fld:'vLINK'},{ctrl:'FORM',prop:'Headerrawhtml'},{av:'gx.fn.getCtrlProperty("JSABR","Caption")',ctrl:'JSABR',prop:'Caption'}]];
   this.EnterCtrl = ["SIM"];
   this.setVCMap("AV5SessaoNfe", "vSESSAONFE", 0, "svchar");
   this.setVCMap("AV8SnFechar", "vSNFECHAR", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hgnfedanfe());
