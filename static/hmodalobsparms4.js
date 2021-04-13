/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:16:13.60
*/
gx.evt.autoSkip = false;
gx.define('hmodalobsparms4', false, function () {
   this.ServerClass =  "hmodalobsparms4" ;
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
      this.AV16Campo3=gx.fn.getControlValue("vCAMPO3") ;
      this.AV18Campo4=gx.fn.getControlValue("vCAMPO4") ;
   };
   this.e12t62_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14t62_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15t62_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,12,15,17,18,19,22,24,25,26,29,31,32,33];
   this.GXLastCtrlId =33;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO",gxz:"ZV20Descricao",gxold:"OV20Descricao",gxvar:"AV20Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20Descricao=Value},v2z:function(Value){gx.O.ZV20Descricao=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO",gx.O.AV20Descricao,0)},c2v:function(){gx.O.AV20Descricao=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[10]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[11]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO",gxz:"ZV13Observacao",gxold:"OV13Observacao",gxvar:"AV13Observacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13Observacao=Value},v2z:function(Value){gx.O.ZV13Observacao=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO",gx.O.AV13Observacao,0)},c2v:function(){gx.O.AV13Observacao=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[12]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO2",gxz:"ZV21Descricao2",gxold:"OV21Descricao2",gxvar:"AV21Descricao2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21Descricao2=Value},v2z:function(Value){gx.O.ZV21Descricao2=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO2",gx.O.AV21Descricao2,0)},c2v:function(){gx.O.AV21Descricao2=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO2")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"DIV3", format:2,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO2",gxz:"ZV15Observacao2",gxold:"OV15Observacao2",gxvar:"AV15Observacao2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15Observacao2=Value},v2z:function(Value){gx.O.ZV15Observacao2=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO2",gx.O.AV15Observacao2,0)},c2v:function(){gx.O.AV15Observacao2=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO2")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"DIV4", format:2,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO3",gxz:"ZV22Descricao3",gxold:"OV22Descricao3",gxvar:"AV22Descricao3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22Descricao3=Value},v2z:function(Value){gx.O.ZV22Descricao3=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO3",gx.O.AV22Descricao3,0)},c2v:function(){gx.O.AV22Descricao3=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO3")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"DIV5", format:2,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO3",gxz:"ZV17Observacao3",gxold:"OV17Observacao3",gxvar:"AV17Observacao3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17Observacao3=Value},v2z:function(Value){gx.O.ZV17Observacao3=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO3",gx.O.AV17Observacao3,0)},c2v:function(){gx.O.AV17Observacao3=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO3")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"DIV6", format:2,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO4",gxz:"ZV23Descricao4",gxold:"OV23Descricao4",gxvar:"AV23Descricao4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23Descricao4=Value},v2z:function(Value){gx.O.ZV23Descricao4=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO4",gx.O.AV23Descricao4,0)},c2v:function(){gx.O.AV23Descricao4=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO4")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"DIV7", format:2,grid:0};
   GXValidFnc[32]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO4",gxz:"ZV19Observacao4",gxold:"OV19Observacao4",gxvar:"AV19Observacao4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19Observacao4=Value},v2z:function(Value){gx.O.ZV19Observacao4=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO4",gx.O.AV19Observacao4,0)},c2v:function(){gx.O.AV19Observacao4=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO4")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"DIV8", format:2,grid:0};
   this.AV20Descricao = "" ;
   this.ZV20Descricao = "" ;
   this.OV20Descricao = "" ;
   this.AV13Observacao = "" ;
   this.ZV13Observacao = "" ;
   this.OV13Observacao = "" ;
   this.AV21Descricao2 = "" ;
   this.ZV21Descricao2 = "" ;
   this.OV21Descricao2 = "" ;
   this.AV15Observacao2 = "" ;
   this.ZV15Observacao2 = "" ;
   this.OV15Observacao2 = "" ;
   this.AV22Descricao3 = "" ;
   this.ZV22Descricao3 = "" ;
   this.OV22Descricao3 = "" ;
   this.AV17Observacao3 = "" ;
   this.ZV17Observacao3 = "" ;
   this.OV17Observacao3 = "" ;
   this.AV23Descricao4 = "" ;
   this.ZV23Descricao4 = "" ;
   this.OV23Descricao4 = "" ;
   this.AV19Observacao4 = "" ;
   this.ZV19Observacao4 = "" ;
   this.OV19Observacao4 = "" ;
   this.AV20Descricao = "" ;
   this.AV13Observacao = "" ;
   this.AV21Descricao2 = "" ;
   this.AV15Observacao2 = "" ;
   this.AV22Descricao3 = "" ;
   this.AV17Observacao3 = "" ;
   this.AV23Descricao4 = "" ;
   this.AV19Observacao4 = "" ;
   this.AV10EmpresaPadrao = "" ;
   this.AV12SistemaId = "" ;
   this.AV11Campo = "" ;
   this.AV14Campo2 = "" ;
   this.AV16Campo3 = "" ;
   this.AV18Campo4 = "" ;
   this.A138EmpresaId = "" ;
   this.A419ParametroSistemaCampo = "" ;
   this.A140SistemaId = "" ;
   this.A416ParametroSistemaDescricao = "" ;
   this.A418ParametroSistemaObservacao = "" ;
   this.Events = {"e12t62_client": ["'FECHAR'", true] ,"e14t62_client": ["ENTER", true] ,"e15t62_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setVCMap("AV10EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV12SistemaId", "vSISTEMAID", 0, "char");
   this.setVCMap("AV11Campo", "vCAMPO", 0, "char");
   this.setVCMap("AV14Campo2", "vCAMPO2", 0, "char");
   this.setVCMap("AV16Campo3", "vCAMPO3", 0, "char");
   this.setVCMap("AV18Campo4", "vCAMPO4", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalobsparms4());
