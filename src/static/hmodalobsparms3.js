/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:1:6.63
*/
gx.evt.autoSkip = false;
gx.define('hmodalobsparms3', false, function () {
   this.ServerClass =  "hmodalobsparms3" ;
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
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV19SistemaId=gx.fn.getControlValue("vSISTEMAID") ;
      this.AV5Campo=gx.fn.getControlValue("vCAMPO") ;
      this.AV6Campo2=gx.fn.getControlValue("vCAMPO2") ;
      this.AV7Campo3=gx.fn.getControlValue("vCAMPO3") ;
   };
   this.e1228l2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1428l2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1528l2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,12,15,17,18,19,22,24,25,26];
   this.GXLastCtrlId =26;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO",gxz:"ZV8Descricao",gxold:"OV8Descricao",gxvar:"AV8Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8Descricao=Value},v2z:function(Value){gx.O.ZV8Descricao=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO",gx.O.AV8Descricao,0)},c2v:function(){gx.O.AV8Descricao=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[10]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[11]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO",gxz:"ZV16Observacao",gxold:"OV16Observacao",gxvar:"AV16Observacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16Observacao=Value},v2z:function(Value){gx.O.ZV16Observacao=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO",gx.O.AV16Observacao,0)},c2v:function(){gx.O.AV16Observacao=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[12]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO2",gxz:"ZV9Descricao2",gxold:"OV9Descricao2",gxvar:"AV9Descricao2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9Descricao2=Value},v2z:function(Value){gx.O.ZV9Descricao2=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO2",gx.O.AV9Descricao2,0)},c2v:function(){gx.O.AV9Descricao2=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO2")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"DIV3", format:2,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO2",gxz:"ZV17Observacao2",gxold:"OV17Observacao2",gxvar:"AV17Observacao2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17Observacao2=Value},v2z:function(Value){gx.O.ZV17Observacao2=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO2",gx.O.AV17Observacao2,0)},c2v:function(){gx.O.AV17Observacao2=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO2")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"DIV4", format:2,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO3",gxz:"ZV10Descricao3",gxold:"OV10Descricao3",gxvar:"AV10Descricao3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10Descricao3=Value},v2z:function(Value){gx.O.ZV10Descricao3=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO3",gx.O.AV10Descricao3,0)},c2v:function(){gx.O.AV10Descricao3=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO3")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"DIV5", format:2,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO3",gxz:"ZV18Observacao3",gxold:"OV18Observacao3",gxvar:"AV18Observacao3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18Observacao3=Value},v2z:function(Value){gx.O.ZV18Observacao3=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO3",gx.O.AV18Observacao3,0)},c2v:function(){gx.O.AV18Observacao3=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO3")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"DIV6", format:2,grid:0};
   this.AV8Descricao = "" ;
   this.ZV8Descricao = "" ;
   this.OV8Descricao = "" ;
   this.AV16Observacao = "" ;
   this.ZV16Observacao = "" ;
   this.OV16Observacao = "" ;
   this.AV9Descricao2 = "" ;
   this.ZV9Descricao2 = "" ;
   this.OV9Descricao2 = "" ;
   this.AV17Observacao2 = "" ;
   this.ZV17Observacao2 = "" ;
   this.OV17Observacao2 = "" ;
   this.AV10Descricao3 = "" ;
   this.ZV10Descricao3 = "" ;
   this.OV10Descricao3 = "" ;
   this.AV18Observacao3 = "" ;
   this.ZV18Observacao3 = "" ;
   this.OV18Observacao3 = "" ;
   this.AV8Descricao = "" ;
   this.AV16Observacao = "" ;
   this.AV9Descricao2 = "" ;
   this.AV17Observacao2 = "" ;
   this.AV10Descricao3 = "" ;
   this.AV18Observacao3 = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV19SistemaId = "" ;
   this.AV5Campo = "" ;
   this.AV6Campo2 = "" ;
   this.AV7Campo3 = "" ;
   this.A138EmpresaId = "" ;
   this.A419ParametroSistemaCampo = "" ;
   this.A140SistemaId = "" ;
   this.A416ParametroSistemaDescricao = "" ;
   this.A418ParametroSistemaObservacao = "" ;
   this.Events = {"e1228l2_client": ["'FECHAR'", true] ,"e1428l2_client": ["ENTER", true] ,"e1528l2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV19SistemaId", "vSISTEMAID", 0, "char");
   this.setVCMap("AV5Campo", "vCAMPO", 0, "char");
   this.setVCMap("AV6Campo2", "vCAMPO2", 0, "char");
   this.setVCMap("AV7Campo3", "vCAMPO3", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalobsparms3());
