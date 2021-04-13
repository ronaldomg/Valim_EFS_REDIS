/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:50:59.68
*/
gx.evt.autoSkip = false;
gx.define('hcadastraicmspadrao', false, function () {
   this.ServerClass =  "hcadastraicmspadrao" ;
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
      this.AV14SituacaoTributariaTipo=gx.fn.getControlValue("vSITUACAOTRIBUTARIATIPO") ;
      this.AV15SituacaoTributariaCodigo=gx.fn.getControlValue("vSITUACAOTRIBUTARIACODIGO") ;
   };
   this.e12me2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13me2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15me2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11];
   this.GXLastCtrlId =11;
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE1",grid:0};
   GXValidFnc[9]={fld:"IMAGE2",grid:0};
   GXValidFnc[11]={fld:"TXTCONFIRMA", format:0,grid:0};
   this.AV14SituacaoTributariaTipo = "" ;
   this.AV15SituacaoTributariaCodigo = "" ;
   this.Events = {"e12me2_client": ["ENTER", true] ,"e13me2_client": ["'FECHAR'", true] ,"e15me2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV14SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO',hsh:true},{av:'AV15SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO',hsh:true}],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV14SituacaoTributariaTipo", "vSITUACAOTRIBUTARIATIPO", 0, "char");
   this.setVCMap("AV15SituacaoTributariaCodigo", "vSITUACAOTRIBUTARIACODIGO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcadastraicmspadrao());
