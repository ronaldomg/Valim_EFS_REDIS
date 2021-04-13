/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:50:46.67
*/
gx.evt.autoSkip = false;
gx.define('hconfigurarelatorio', false, function () {
   this.ServerClass =  "hconfigurarelatorio" ;
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
      this.AV5Url=gx.fn.getControlValue("vURL") ;
      this.AV6NomeTela=gx.fn.getControlValue("vNOMETELA") ;
      this.AV14GerarCVS=gx.fn.getControlValue("vGERARCVS") ;
   };
   this.e121yq2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e131yq2_client=function()
   {
      this.executeServerEvent("'EMAIL'", false, null, false, false);
   };
   this.e141yq2_client=function()
   {
      this.executeServerEvent("'SALVARCSV'", false, null, false, false);
   };
   this.e161yq2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e171yq2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2];
   this.GXLastCtrlId =2;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   this.AV5Url = "" ;
   this.AV6NomeTela = "" ;
   this.AV14GerarCVS = "" ;
   this.Events = {"e121yq2_client": ["'CANCELAR'", true] ,"e131yq2_client": ["'EMAIL'", true] ,"e141yq2_client": ["'SALVARCSV'", true] ,"e161yq2_client": ["ENTER", true] ,"e171yq2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'CANCELAR'"] = [[],[]];
   this.EvtParms["'EMAIL'"] = [[{av:'AV6NomeTela',fld:'vNOMETELA',hsh:true},{av:'AV5Url',fld:'vURL',hsh:true},{av:'AV12SdtParmEmail',fld:'vSDTPARMEMAIL'}],[{av:'AV11NomeArquivo',fld:'vNOMEARQUIVO'},{av:'AV12SdtParmEmail',fld:'vSDTPARMEMAIL'}]];
   this.EvtParms["'SALVARCSV'"] = [[{av:'AV14GerarCVS',fld:'vGERARCVS',hsh:true},{av:'AV5Url',fld:'vURL',hsh:true}],[]];
   this.setVCMap("AV5Url", "vURL", 0, "svchar");
   this.setVCMap("AV6NomeTela", "vNOMETELA", 0, "svchar");
   this.setVCMap("AV14GerarCVS", "vGERARCVS", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconfigurarelatorio());
