/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:16:7.29
*/
gx.evt.autoSkip = false;
gx.define('hmodalobsparms2', false, function () {
   this.ServerClass =  "hmodalobsparms2" ;
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
      this.AV14Campo2=gx.fn.getControlValue("vCAMPO2") ;
   };
   this.e12t32_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14t32_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15t32_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,12,15,17,18,19];
   this.GXLastCtrlId =19;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO",gxz:"ZV16Descricao",gxold:"OV16Descricao",gxvar:"AV16Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16Descricao=Value},v2z:function(Value){gx.O.ZV16Descricao=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO",gx.O.AV16Descricao,0)},c2v:function(){gx.O.AV16Descricao=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[10]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[11]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO",gxz:"ZV13Observacao",gxold:"OV13Observacao",gxvar:"AV13Observacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13Observacao=Value},v2z:function(Value){gx.O.ZV13Observacao=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO",gx.O.AV13Observacao,0)},c2v:function(){gx.O.AV13Observacao=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[12]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO2",gxz:"ZV17Descricao2",gxold:"OV17Descricao2",gxvar:"AV17Descricao2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17Descricao2=Value},v2z:function(Value){gx.O.ZV17Descricao2=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO2",gx.O.AV17Descricao2,0)},c2v:function(){gx.O.AV17Descricao2=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO2")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"DIV3", format:2,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO2",gxz:"ZV15Observacao2",gxold:"OV15Observacao2",gxvar:"AV15Observacao2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15Observacao2=Value},v2z:function(Value){gx.O.ZV15Observacao2=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO2",gx.O.AV15Observacao2,0)},c2v:function(){gx.O.AV15Observacao2=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO2")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"DIV4", format:2,grid:0};
   this.AV16Descricao = "" ;
   this.ZV16Descricao = "" ;
   this.OV16Descricao = "" ;
   this.AV13Observacao = "" ;
   this.ZV13Observacao = "" ;
   this.OV13Observacao = "" ;
   this.AV17Descricao2 = "" ;
   this.ZV17Descricao2 = "" ;
   this.OV17Descricao2 = "" ;
   this.AV15Observacao2 = "" ;
   this.ZV15Observacao2 = "" ;
   this.OV15Observacao2 = "" ;
   this.AV16Descricao = "" ;
   this.AV13Observacao = "" ;
   this.AV17Descricao2 = "" ;
   this.AV15Observacao2 = "" ;
   this.AV10EmpresaPadrao = "" ;
   this.AV12SistemaId = "" ;
   this.AV11Campo = "" ;
   this.AV14Campo2 = "" ;
   this.A138EmpresaId = "" ;
   this.A419ParametroSistemaCampo = "" ;
   this.A140SistemaId = "" ;
   this.A416ParametroSistemaDescricao = "" ;
   this.A418ParametroSistemaObservacao = "" ;
   this.Events = {"e12t32_client": ["'FECHAR'", true] ,"e14t32_client": ["ENTER", true] ,"e15t32_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setVCMap("AV10EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV12SistemaId", "vSISTEMAID", 0, "char");
   this.setVCMap("AV11Campo", "vCAMPO", 0, "char");
   this.setVCMap("AV14Campo2", "vCAMPO2", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalobsparms2());
