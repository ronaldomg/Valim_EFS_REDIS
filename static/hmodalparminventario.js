/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:31:11.46
*/
gx.evt.autoSkip = false;
gx.define('hmodalparminventario', false, function () {
   this.ServerClass =  "hmodalparminventario" ;
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
      this.AV12Modo=gx.fn.getControlValue("vMODO") ;
   };
   this.e15y31_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalparminventario",["OBS"]), []);
      this.refreshOutputs([]);
   };
   this.e12y32_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13y32_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e16y32_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,16,19,21,22,23,26,28,29,30,36,43];
   this.GXLastCtrlId =43;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABPAR",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTELAINVENTARIO",gxz:"ZV10TelaInventario",gxold:"OV10TelaInventario",gxvar:"AV10TelaInventario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10TelaInventario=Value},v2z:function(Value){gx.O.ZV10TelaInventario=Value},v2c:function(){gx.fn.setComboBoxValue("vTELAINVENTARIO",gx.O.AV10TelaInventario)},c2v:function(){gx.O.AV10TelaInventario=this.val()},val:function(){return gx.fn.getControlValue("vTELAINVENTARIO")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPIDENTPRODINV",gxz:"ZV11TpIdEntProdInv",gxold:"OV11TpIdEntProdInv",gxvar:"AV11TpIdEntProdInv",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV11TpIdEntProdInv=Value},v2z:function(Value){gx.O.ZV11TpIdEntProdInv=Value},v2c:function(){gx.fn.setComboBoxValue("vTPIDENTPRODINV",gx.O.AV11TpIdEntProdInv)},c2v:function(){gx.O.AV11TpIdEntProdInv=this.val()},val:function(){return gx.fn.getControlValue("vTPIDENTPRODINV")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TABOBS",grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO1",gxz:"ZV13Descricao1",gxold:"OV13Descricao1",gxvar:"AV13Descricao1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13Descricao1=Value},v2z:function(Value){gx.O.ZV13Descricao1=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO1",gx.O.AV13Descricao1,0)},c2v:function(){gx.O.AV13Descricao1=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO1")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO1",gxz:"ZV15Observacao1",gxold:"OV15Observacao1",gxvar:"AV15Observacao1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15Observacao1=Value},v2z:function(Value){gx.O.ZV15Observacao1=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO1",gx.O.AV15Observacao1,0)},c2v:function(){gx.O.AV15Observacao1=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO1")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[26]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO2",gxz:"ZV14Descricao2",gxold:"OV14Descricao2",gxvar:"AV14Descricao2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14Descricao2=Value},v2z:function(Value){gx.O.ZV14Descricao2=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO2",gx.O.AV14Descricao2,0)},c2v:function(){gx.O.AV14Descricao2=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO2")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"DIV3", format:2,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO2",gxz:"ZV16Observacao2",gxold:"OV16Observacao2",gxvar:"AV16Observacao2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16Observacao2=Value},v2z:function(Value){gx.O.ZV16Observacao2=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO2",gx.O.AV16Observacao2,0)},c2v:function(){gx.O.AV16Observacao2=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO2")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"DIV4", format:2,grid:0};
   GXValidFnc[36]={fld:"TABLE3",grid:0};
   GXValidFnc[43]={fld:"BTNOBS",grid:0};
   this.AV10TelaInventario = "" ;
   this.ZV10TelaInventario = "" ;
   this.OV10TelaInventario = "" ;
   this.AV11TpIdEntProdInv = "" ;
   this.ZV11TpIdEntProdInv = "" ;
   this.OV11TpIdEntProdInv = "" ;
   this.AV13Descricao1 = "" ;
   this.ZV13Descricao1 = "" ;
   this.OV13Descricao1 = "" ;
   this.AV15Observacao1 = "" ;
   this.ZV15Observacao1 = "" ;
   this.OV15Observacao1 = "" ;
   this.AV14Descricao2 = "" ;
   this.ZV14Descricao2 = "" ;
   this.OV14Descricao2 = "" ;
   this.AV16Observacao2 = "" ;
   this.ZV16Observacao2 = "" ;
   this.OV16Observacao2 = "" ;
   this.AV10TelaInventario = "" ;
   this.AV11TpIdEntProdInv = "" ;
   this.AV13Descricao1 = "" ;
   this.AV15Observacao1 = "" ;
   this.AV14Descricao2 = "" ;
   this.AV16Observacao2 = "" ;
   this.AV12Modo = "" ;
   this.A138EmpresaId = "" ;
   this.A419ParametroSistemaCampo = "" ;
   this.A140SistemaId = "" ;
   this.A416ParametroSistemaDescricao = "" ;
   this.A418ParametroSistemaObservacao = "" ;
   this.Events = {"e12y32_client": ["ENTER", true] ,"e13y32_client": ["'FECHAR'", true] ,"e16y32_client": ["CANCEL", true] ,"e15y31_client": ["'OBSERVACAO'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV10TelaInventario',fld:'vTELAINVENTARIO'},{av:'AV11TpIdEntProdInv',fld:'vTPIDENTPRODINV'}],[{av:'AV10TelaInventario',fld:'vTELAINVENTARIO'},{av:'AV11TpIdEntProdInv',fld:'vTPIDENTPRODINV'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'OBSERVACAO'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV12Modo", "vMODO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalparminventario());
