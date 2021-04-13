/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:2:16.25
*/
gx.evt.autoSkip = false;
gx.define('hmodalpessoa', false, function () {
   this.ServerClass =  "hmodalpessoa" ;
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
      this.AV11PessoaId=gx.fn.getIntegerValue("vPESSOAID",'.') ;
      this.AV12Mod=gx.fn.getControlValue("vMOD") ;
      this.AV13TipoTela=gx.fn.getControlValue("vTIPOTELA") ;
   };
   this.e14p42_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15p42_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXLastCtrlId =0;
   this.AV11PessoaId = 0 ;
   this.AV12Mod = "" ;
   this.AV13TipoTela = "" ;
   this.Events = {"e14p42_client": ["ENTER", true] ,"e15p42_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV13TipoTela',fld:'vTIPOTELA',hsh:true},{av:'AV11PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV12Mod',fld:'vMOD',hsh:true}],[{av:'AV12Mod',fld:'vMOD',hsh:true},{av:'AV11PessoaId',fld:'vPESSOAID',hsh:true}]];
   this.setVCMap("AV11PessoaId", "vPESSOAID", 0, "int");
   this.setVCMap("AV12Mod", "vMOD", 0, "char");
   this.setVCMap("AV13TipoTela", "vTIPOTELA", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalpessoa());
