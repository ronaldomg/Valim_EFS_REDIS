/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:26:21.82
*/
gx.evt.autoSkip = false;
gx.define('hregistrarprevendamensagem', false, function () {
   this.ServerClass =  "hregistrarprevendamensagem" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV6NomeSessao=gx.fn.getControlValue("vNOMESESSAO") ;
      this.AV9TipoMensagem=gx.fn.getControlValue("vTIPOMENSAGEM") ;
   };
   this.e1111b2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1511b2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1611b2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10];
   this.GXLastCtrlId =10;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"IMAGE1",grid:0};
   GXValidFnc[10]={fld:"MSGEXCL", format:0,grid:0};
   this.AV6NomeSessao = "" ;
   this.AV9TipoMensagem = "" ;
   this.Events = {"e1111b2_client": ["'FECHAR'", true] ,"e1511b2_client": ["ENTER", true] ,"e1611b2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV6NomeSessao',fld:'vNOMESESSAO',hsh:true}],[{av:'gx.fn.getCtrlProperty("MSGEXCL","Caption")',ctrl:'MSGEXCL',prop:'Caption'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV9TipoMensagem',fld:'vTIPOMENSAGEM',hsh:true},{av:'AV6NomeSessao',fld:'vNOMESESSAO',hsh:true}],[]];
   this.setVCMap("AV6NomeSessao", "vNOMESESSAO", 0, "svchar");
   this.setVCMap("AV9TipoMensagem", "vTIPOMENSAGEM", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarprevendamensagem());
