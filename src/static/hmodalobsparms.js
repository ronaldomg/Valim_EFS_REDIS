/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:16:6.31
*/
gx.evt.autoSkip = false;
gx.define('hmodalobsparms', false, function () {
   this.ServerClass =  "hmodalobsparms" ;
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
      this.AV10EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV12SistemaId=gx.fn.getControlValue("vSISTEMAID") ;
      this.AV11Campo=gx.fn.getControlValue("vCAMPO") ;
   };
   this.e12t22_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14t22_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15t22_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11];
   this.GXLastCtrlId =11;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO",gxz:"ZV14Descricao",gxold:"OV14Descricao",gxvar:"AV14Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14Descricao=Value},v2z:function(Value){gx.O.ZV14Descricao=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO",gx.O.AV14Descricao,0)},c2v:function(){gx.O.AV14Descricao=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO",gxz:"ZV13Observacao",gxold:"OV13Observacao",gxvar:"AV13Observacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13Observacao=Value},v2z:function(Value){gx.O.ZV13Observacao=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO",gx.O.AV13Observacao,0)},c2v:function(){gx.O.AV13Observacao=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO")},nac:gx.falseFn};
   this.AV14Descricao = "" ;
   this.ZV14Descricao = "" ;
   this.OV14Descricao = "" ;
   this.AV13Observacao = "" ;
   this.ZV13Observacao = "" ;
   this.OV13Observacao = "" ;
   this.AV14Descricao = "" ;
   this.AV13Observacao = "" ;
   this.AV10EmpresaPadrao = "" ;
   this.AV12SistemaId = "" ;
   this.AV11Campo = "" ;
   this.A138EmpresaId = "" ;
   this.A419ParametroSistemaCampo = "" ;
   this.A140SistemaId = "" ;
   this.A416ParametroSistemaDescricao = "" ;
   this.A418ParametroSistemaObservacao = "" ;
   this.Events = {"e12t22_client": ["'FECHAR'", true] ,"e14t22_client": ["ENTER", true] ,"e15t22_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setVCMap("AV10EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV12SistemaId", "vSISTEMAID", 0, "char");
   this.setVCMap("AV11Campo", "vCAMPO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalobsparms());
