/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:16:10.1
*/
gx.evt.autoSkip = false;
gx.define('hmodalobsparms8', false, function () {
   this.ServerClass =  "hmodalobsparms8" ;
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
      this.AV20Campo5=gx.fn.getControlValue("vCAMPO5") ;
      this.AV22Campo6=gx.fn.getControlValue("vCAMPO6") ;
      this.AV24Campo7=gx.fn.getControlValue("vCAMPO7") ;
      this.AV26Campo8=gx.fn.getControlValue("vCAMPO8") ;
   };
   this.e12t42_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14t42_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15t42_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,12,13,16,19,20,21,24,27,28,29,32,35,36,37,40,43,44,45,48,51,52,53,56,59,60,61,64,67,68,69];
   this.GXLastCtrlId =69;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO",gxz:"ZV28Descricao",gxold:"OV28Descricao",gxvar:"AV28Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28Descricao=Value},v2z:function(Value){gx.O.ZV28Descricao=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO",gx.O.AV28Descricao,0)},c2v:function(){gx.O.AV28Descricao=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[11]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[12]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO",gxz:"ZV13Observacao",gxold:"OV13Observacao",gxvar:"AV13Observacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13Observacao=Value},v2z:function(Value){gx.O.ZV13Observacao=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO",gx.O.AV13Observacao,0)},c2v:function(){gx.O.AV13Observacao=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[16]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO2",gxz:"ZV29Descricao2",gxold:"OV29Descricao2",gxvar:"AV29Descricao2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29Descricao2=Value},v2z:function(Value){gx.O.ZV29Descricao2=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO2",gx.O.AV29Descricao2,0)},c2v:function(){gx.O.AV29Descricao2=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO2")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"DIV3", format:2,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO2",gxz:"ZV15Observacao2",gxold:"OV15Observacao2",gxvar:"AV15Observacao2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15Observacao2=Value},v2z:function(Value){gx.O.ZV15Observacao2=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO2",gx.O.AV15Observacao2,0)},c2v:function(){gx.O.AV15Observacao2=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO2")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"DIV4", format:2,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO3",gxz:"ZV30Descricao3",gxold:"OV30Descricao3",gxvar:"AV30Descricao3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30Descricao3=Value},v2z:function(Value){gx.O.ZV30Descricao3=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO3",gx.O.AV30Descricao3,0)},c2v:function(){gx.O.AV30Descricao3=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO3")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"DIV5", format:2,grid:0};
   GXValidFnc[28]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO3",gxz:"ZV17Observacao3",gxold:"OV17Observacao3",gxvar:"AV17Observacao3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17Observacao3=Value},v2z:function(Value){gx.O.ZV17Observacao3=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO3",gx.O.AV17Observacao3,0)},c2v:function(){gx.O.AV17Observacao3=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO3")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"DIV6", format:2,grid:0};
   GXValidFnc[32]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO4",gxz:"ZV31Descricao4",gxold:"OV31Descricao4",gxvar:"AV31Descricao4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31Descricao4=Value},v2z:function(Value){gx.O.ZV31Descricao4=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO4",gx.O.AV31Descricao4,0)},c2v:function(){gx.O.AV31Descricao4=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO4")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"DIV7", format:2,grid:0};
   GXValidFnc[36]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO4",gxz:"ZV19Observacao4",gxold:"OV19Observacao4",gxvar:"AV19Observacao4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19Observacao4=Value},v2z:function(Value){gx.O.ZV19Observacao4=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO4",gx.O.AV19Observacao4,0)},c2v:function(){gx.O.AV19Observacao4=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO4")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"DIV8", format:2,grid:0};
   GXValidFnc[40]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO5",gxz:"ZV32Descricao5",gxold:"OV32Descricao5",gxvar:"AV32Descricao5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32Descricao5=Value},v2z:function(Value){gx.O.ZV32Descricao5=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO5",gx.O.AV32Descricao5,0)},c2v:function(){gx.O.AV32Descricao5=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO5")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"DIV9", format:2,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO5",gxz:"ZV21Observacao5",gxold:"OV21Observacao5",gxvar:"AV21Observacao5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21Observacao5=Value},v2z:function(Value){gx.O.ZV21Observacao5=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO5",gx.O.AV21Observacao5,0)},c2v:function(){gx.O.AV21Observacao5=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO5")},nac:gx.falseFn};
   GXValidFnc[45]={fld:"DIV10", format:2,grid:0};
   GXValidFnc[48]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO6",gxz:"ZV33Descricao6",gxold:"OV33Descricao6",gxvar:"AV33Descricao6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33Descricao6=Value},v2z:function(Value){gx.O.ZV33Descricao6=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO6",gx.O.AV33Descricao6,0)},c2v:function(){gx.O.AV33Descricao6=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO6")},nac:gx.falseFn};
   GXValidFnc[51]={fld:"DIV11", format:2,grid:0};
   GXValidFnc[52]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO6",gxz:"ZV23Observacao6",gxold:"OV23Observacao6",gxvar:"AV23Observacao6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23Observacao6=Value},v2z:function(Value){gx.O.ZV23Observacao6=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO6",gx.O.AV23Observacao6,0)},c2v:function(){gx.O.AV23Observacao6=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO6")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"DIV12", format:2,grid:0};
   GXValidFnc[56]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO7",gxz:"ZV34Descricao7",gxold:"OV34Descricao7",gxvar:"AV34Descricao7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34Descricao7=Value},v2z:function(Value){gx.O.ZV34Descricao7=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO7",gx.O.AV34Descricao7,0)},c2v:function(){gx.O.AV34Descricao7=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO7")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"DIV13", format:2,grid:0};
   GXValidFnc[60]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO7",gxz:"ZV25Observacao7",gxold:"OV25Observacao7",gxvar:"AV25Observacao7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25Observacao7=Value},v2z:function(Value){gx.O.ZV25Observacao7=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO7",gx.O.AV25Observacao7,0)},c2v:function(){gx.O.AV25Observacao7=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO7")},nac:gx.falseFn};
   GXValidFnc[61]={fld:"DIV14", format:2,grid:0};
   GXValidFnc[64]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO8",gxz:"ZV35Descricao8",gxold:"OV35Descricao8",gxvar:"AV35Descricao8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35Descricao8=Value},v2z:function(Value){gx.O.ZV35Descricao8=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO8",gx.O.AV35Descricao8,0)},c2v:function(){gx.O.AV35Descricao8=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO8")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"DIV15", format:2,grid:0};
   GXValidFnc[68]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO8",gxz:"ZV27Observacao8",gxold:"OV27Observacao8",gxvar:"AV27Observacao8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27Observacao8=Value},v2z:function(Value){gx.O.ZV27Observacao8=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO8",gx.O.AV27Observacao8,0)},c2v:function(){gx.O.AV27Observacao8=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO8")},nac:gx.falseFn};
   GXValidFnc[69]={fld:"DIV16", format:2,grid:0};
   this.AV28Descricao = "" ;
   this.ZV28Descricao = "" ;
   this.OV28Descricao = "" ;
   this.AV13Observacao = "" ;
   this.ZV13Observacao = "" ;
   this.OV13Observacao = "" ;
   this.AV29Descricao2 = "" ;
   this.ZV29Descricao2 = "" ;
   this.OV29Descricao2 = "" ;
   this.AV15Observacao2 = "" ;
   this.ZV15Observacao2 = "" ;
   this.OV15Observacao2 = "" ;
   this.AV30Descricao3 = "" ;
   this.ZV30Descricao3 = "" ;
   this.OV30Descricao3 = "" ;
   this.AV17Observacao3 = "" ;
   this.ZV17Observacao3 = "" ;
   this.OV17Observacao3 = "" ;
   this.AV31Descricao4 = "" ;
   this.ZV31Descricao4 = "" ;
   this.OV31Descricao4 = "" ;
   this.AV19Observacao4 = "" ;
   this.ZV19Observacao4 = "" ;
   this.OV19Observacao4 = "" ;
   this.AV32Descricao5 = "" ;
   this.ZV32Descricao5 = "" ;
   this.OV32Descricao5 = "" ;
   this.AV21Observacao5 = "" ;
   this.ZV21Observacao5 = "" ;
   this.OV21Observacao5 = "" ;
   this.AV33Descricao6 = "" ;
   this.ZV33Descricao6 = "" ;
   this.OV33Descricao6 = "" ;
   this.AV23Observacao6 = "" ;
   this.ZV23Observacao6 = "" ;
   this.OV23Observacao6 = "" ;
   this.AV34Descricao7 = "" ;
   this.ZV34Descricao7 = "" ;
   this.OV34Descricao7 = "" ;
   this.AV25Observacao7 = "" ;
   this.ZV25Observacao7 = "" ;
   this.OV25Observacao7 = "" ;
   this.AV35Descricao8 = "" ;
   this.ZV35Descricao8 = "" ;
   this.OV35Descricao8 = "" ;
   this.AV27Observacao8 = "" ;
   this.ZV27Observacao8 = "" ;
   this.OV27Observacao8 = "" ;
   this.AV28Descricao = "" ;
   this.AV13Observacao = "" ;
   this.AV29Descricao2 = "" ;
   this.AV15Observacao2 = "" ;
   this.AV30Descricao3 = "" ;
   this.AV17Observacao3 = "" ;
   this.AV31Descricao4 = "" ;
   this.AV19Observacao4 = "" ;
   this.AV32Descricao5 = "" ;
   this.AV21Observacao5 = "" ;
   this.AV33Descricao6 = "" ;
   this.AV23Observacao6 = "" ;
   this.AV34Descricao7 = "" ;
   this.AV25Observacao7 = "" ;
   this.AV35Descricao8 = "" ;
   this.AV27Observacao8 = "" ;
   this.AV10EmpresaPadrao = "" ;
   this.AV12SistemaId = "" ;
   this.AV11Campo = "" ;
   this.AV14Campo2 = "" ;
   this.AV16Campo3 = "" ;
   this.AV18Campo4 = "" ;
   this.AV20Campo5 = "" ;
   this.AV22Campo6 = "" ;
   this.AV24Campo7 = "" ;
   this.AV26Campo8 = "" ;
   this.A138EmpresaId = "" ;
   this.A419ParametroSistemaCampo = "" ;
   this.A140SistemaId = "" ;
   this.A416ParametroSistemaDescricao = "" ;
   this.A418ParametroSistemaObservacao = "" ;
   this.Events = {"e12t42_client": ["'FECHAR'", true] ,"e14t42_client": ["ENTER", true] ,"e15t42_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setVCMap("AV10EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV12SistemaId", "vSISTEMAID", 0, "char");
   this.setVCMap("AV11Campo", "vCAMPO", 0, "char");
   this.setVCMap("AV14Campo2", "vCAMPO2", 0, "char");
   this.setVCMap("AV16Campo3", "vCAMPO3", 0, "char");
   this.setVCMap("AV18Campo4", "vCAMPO4", 0, "char");
   this.setVCMap("AV20Campo5", "vCAMPO5", 0, "char");
   this.setVCMap("AV22Campo6", "vCAMPO6", 0, "char");
   this.setVCMap("AV24Campo7", "vCAMPO7", 0, "char");
   this.setVCMap("AV26Campo8", "vCAMPO8", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalobsparms8());
