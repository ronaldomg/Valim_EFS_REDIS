/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:1:13.98
*/
gx.evt.autoSkip = false;
gx.define('hmodalobsparmsfaturarvendas', false, function () {
   this.ServerClass =  "hmodalobsparmsfaturarvendas" ;
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
      this.AV22EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV34SistemaId=gx.fn.getControlValue("vSISTEMAID") ;
      this.AV39SistemaId2=gx.fn.getControlValue("vSISTEMAID2") ;
      this.AV5Campo=gx.fn.getControlValue("vCAMPO") ;
      this.AV6Campo2=gx.fn.getControlValue("vCAMPO2") ;
      this.AV7Campo3=gx.fn.getControlValue("vCAMPO3") ;
      this.AV8Campo4=gx.fn.getControlValue("vCAMPO4") ;
      this.AV9Campo5=gx.fn.getControlValue("vCAMPO5") ;
      this.AV10Campo6=gx.fn.getControlValue("vCAMPO6") ;
      this.AV11Campo7=gx.fn.getControlValue("vCAMPO7") ;
      this.AV12Campo8=gx.fn.getControlValue("vCAMPO8") ;
      this.AV38Campo9=gx.fn.getControlValue("vCAMPO9") ;
      this.AV40Campo10=gx.fn.getControlValue("vCAMPO10") ;
      this.AV43Campo11=gx.fn.getControlValue("vCAMPO11") ;
      this.AV44Campo12=gx.fn.getControlValue("vCAMPO12") ;
      this.AV45Campo13=gx.fn.getControlValue("vCAMPO13") ;
      this.AV52Campo14=gx.fn.getControlValue("vCAMPO14") ;
      this.AV53Campo15=gx.fn.getControlValue("vCAMPO15") ;
      this.AV58Campo16=gx.fn.getControlValue("vCAMPO16") ;
      this.AV61Campo17=gx.fn.getControlValue("vCAMPO17") ;
   };
   this.e1228m2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1428m2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1528m2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,12,13,16,19,20,21,24,27,28,29,32,35,36,37,40,43,44,45,48,51,52,53,56,59,60,61,64,67,68,69,72,75,76,77,80,83,84,85,88,91,92,93,96,99,100,101,104,107,108,109,112,115,116,117,120,123,124,125,128,131,132,133,136,139,140,141];
   this.GXLastCtrlId =141;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO",gxz:"ZV13Descricao",gxold:"OV13Descricao",gxvar:"AV13Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13Descricao=Value},v2z:function(Value){gx.O.ZV13Descricao=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO",gx.O.AV13Descricao,0)},c2v:function(){gx.O.AV13Descricao=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[11]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[12]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO",gxz:"ZV26Observacao",gxold:"OV26Observacao",gxvar:"AV26Observacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26Observacao=Value},v2z:function(Value){gx.O.ZV26Observacao=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO",gx.O.AV26Observacao,0)},c2v:function(){gx.O.AV26Observacao=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[16]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO2",gxz:"ZV14Descricao2",gxold:"OV14Descricao2",gxvar:"AV14Descricao2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14Descricao2=Value},v2z:function(Value){gx.O.ZV14Descricao2=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO2",gx.O.AV14Descricao2,0)},c2v:function(){gx.O.AV14Descricao2=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO2")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"DIV3", format:2,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO2",gxz:"ZV27Observacao2",gxold:"OV27Observacao2",gxvar:"AV27Observacao2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27Observacao2=Value},v2z:function(Value){gx.O.ZV27Observacao2=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO2",gx.O.AV27Observacao2,0)},c2v:function(){gx.O.AV27Observacao2=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO2")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"DIV4", format:2,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO11",gxz:"ZV46Descricao11",gxold:"OV46Descricao11",gxvar:"AV46Descricao11",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46Descricao11=Value},v2z:function(Value){gx.O.ZV46Descricao11=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO11",gx.O.AV46Descricao11,0)},c2v:function(){gx.O.AV46Descricao11=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO11")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"DIV21", format:2,grid:0};
   GXValidFnc[28]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO11",gxz:"ZV49Observacao11",gxold:"OV49Observacao11",gxvar:"AV49Observacao11",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49Observacao11=Value},v2z:function(Value){gx.O.ZV49Observacao11=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO11",gx.O.AV49Observacao11,0)},c2v:function(){gx.O.AV49Observacao11=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO11")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"DIV22", format:2,grid:0};
   GXValidFnc[32]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO12",gxz:"ZV47Descricao12",gxold:"OV47Descricao12",gxvar:"AV47Descricao12",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47Descricao12=Value},v2z:function(Value){gx.O.ZV47Descricao12=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO12",gx.O.AV47Descricao12,0)},c2v:function(){gx.O.AV47Descricao12=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO12")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"DIV23", format:2,grid:0};
   GXValidFnc[36]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO12",gxz:"ZV50Observacao12",gxold:"OV50Observacao12",gxvar:"AV50Observacao12",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50Observacao12=Value},v2z:function(Value){gx.O.ZV50Observacao12=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO12",gx.O.AV50Observacao12,0)},c2v:function(){gx.O.AV50Observacao12=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO12")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"DIV24", format:2,grid:0};
   GXValidFnc[40]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO13",gxz:"ZV48Descricao13",gxold:"OV48Descricao13",gxvar:"AV48Descricao13",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48Descricao13=Value},v2z:function(Value){gx.O.ZV48Descricao13=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO13",gx.O.AV48Descricao13,0)},c2v:function(){gx.O.AV48Descricao13=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO13")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"DIV25", format:2,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO13",gxz:"ZV51Observacao13",gxold:"OV51Observacao13",gxvar:"AV51Observacao13",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51Observacao13=Value},v2z:function(Value){gx.O.ZV51Observacao13=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO13",gx.O.AV51Observacao13,0)},c2v:function(){gx.O.AV51Observacao13=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO13")},nac:gx.falseFn};
   GXValidFnc[45]={fld:"DIV26", format:2,grid:0};
   GXValidFnc[48]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO3",gxz:"ZV15Descricao3",gxold:"OV15Descricao3",gxvar:"AV15Descricao3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15Descricao3=Value},v2z:function(Value){gx.O.ZV15Descricao3=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO3",gx.O.AV15Descricao3,0)},c2v:function(){gx.O.AV15Descricao3=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO3")},nac:gx.falseFn};
   GXValidFnc[51]={fld:"DIV5", format:2,grid:0};
   GXValidFnc[52]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO3",gxz:"ZV28Observacao3",gxold:"OV28Observacao3",gxvar:"AV28Observacao3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28Observacao3=Value},v2z:function(Value){gx.O.ZV28Observacao3=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO3",gx.O.AV28Observacao3,0)},c2v:function(){gx.O.AV28Observacao3=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO3")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"DIV6", format:2,grid:0};
   GXValidFnc[56]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO4",gxz:"ZV16Descricao4",gxold:"OV16Descricao4",gxvar:"AV16Descricao4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16Descricao4=Value},v2z:function(Value){gx.O.ZV16Descricao4=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO4",gx.O.AV16Descricao4,0)},c2v:function(){gx.O.AV16Descricao4=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO4")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"DIV7", format:2,grid:0};
   GXValidFnc[60]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO4",gxz:"ZV29Observacao4",gxold:"OV29Observacao4",gxvar:"AV29Observacao4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29Observacao4=Value},v2z:function(Value){gx.O.ZV29Observacao4=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO4",gx.O.AV29Observacao4,0)},c2v:function(){gx.O.AV29Observacao4=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO4")},nac:gx.falseFn};
   GXValidFnc[61]={fld:"DIV8", format:2,grid:0};
   GXValidFnc[64]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO5",gxz:"ZV17Descricao5",gxold:"OV17Descricao5",gxvar:"AV17Descricao5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17Descricao5=Value},v2z:function(Value){gx.O.ZV17Descricao5=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO5",gx.O.AV17Descricao5,0)},c2v:function(){gx.O.AV17Descricao5=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO5")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"DIV9", format:2,grid:0};
   GXValidFnc[68]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO5",gxz:"ZV30Observacao5",gxold:"OV30Observacao5",gxvar:"AV30Observacao5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30Observacao5=Value},v2z:function(Value){gx.O.ZV30Observacao5=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO5",gx.O.AV30Observacao5,0)},c2v:function(){gx.O.AV30Observacao5=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO5")},nac:gx.falseFn};
   GXValidFnc[69]={fld:"DIV10", format:2,grid:0};
   GXValidFnc[72]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO14",gxz:"ZV54Descricao14",gxold:"OV54Descricao14",gxvar:"AV54Descricao14",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54Descricao14=Value},v2z:function(Value){gx.O.ZV54Descricao14=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO14",gx.O.AV54Descricao14,0)},c2v:function(){gx.O.AV54Descricao14=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO14")},nac:gx.falseFn};
   GXValidFnc[75]={fld:"DIV27", format:2,grid:0};
   GXValidFnc[76]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO14",gxz:"ZV56Observacao14",gxold:"OV56Observacao14",gxvar:"AV56Observacao14",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56Observacao14=Value},v2z:function(Value){gx.O.ZV56Observacao14=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO14",gx.O.AV56Observacao14,0)},c2v:function(){gx.O.AV56Observacao14=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO14")},nac:gx.falseFn};
   GXValidFnc[77]={fld:"DIV28", format:2,grid:0};
   GXValidFnc[80]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO6",gxz:"ZV18Descricao6",gxold:"OV18Descricao6",gxvar:"AV18Descricao6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18Descricao6=Value},v2z:function(Value){gx.O.ZV18Descricao6=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO6",gx.O.AV18Descricao6,0)},c2v:function(){gx.O.AV18Descricao6=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO6")},nac:gx.falseFn};
   GXValidFnc[83]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO6",gxz:"ZV31Observacao6",gxold:"OV31Observacao6",gxvar:"AV31Observacao6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31Observacao6=Value},v2z:function(Value){gx.O.ZV31Observacao6=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO6",gx.O.AV31Observacao6,0)},c2v:function(){gx.O.AV31Observacao6=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO6")},nac:gx.falseFn};
   GXValidFnc[84]={fld:"DIV12", format:2,grid:0};
   GXValidFnc[85]={fld:"DIV11", format:2,grid:0};
   GXValidFnc[88]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO7",gxz:"ZV19Descricao7",gxold:"OV19Descricao7",gxvar:"AV19Descricao7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19Descricao7=Value},v2z:function(Value){gx.O.ZV19Descricao7=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO7",gx.O.AV19Descricao7,0)},c2v:function(){gx.O.AV19Descricao7=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO7")},nac:gx.falseFn};
   GXValidFnc[91]={fld:"DIV13", format:2,grid:0};
   GXValidFnc[92]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO7",gxz:"ZV32Observacao7",gxold:"OV32Observacao7",gxvar:"AV32Observacao7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32Observacao7=Value},v2z:function(Value){gx.O.ZV32Observacao7=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO7",gx.O.AV32Observacao7,0)},c2v:function(){gx.O.AV32Observacao7=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO7")},nac:gx.falseFn};
   GXValidFnc[93]={fld:"DIV14", format:2,grid:0};
   GXValidFnc[96]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO8",gxz:"ZV20Descricao8",gxold:"OV20Descricao8",gxvar:"AV20Descricao8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20Descricao8=Value},v2z:function(Value){gx.O.ZV20Descricao8=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO8",gx.O.AV20Descricao8,0)},c2v:function(){gx.O.AV20Descricao8=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO8")},nac:gx.falseFn};
   GXValidFnc[99]={fld:"DIV15", format:2,grid:0};
   GXValidFnc[100]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO8",gxz:"ZV33Observacao8",gxold:"OV33Observacao8",gxvar:"AV33Observacao8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33Observacao8=Value},v2z:function(Value){gx.O.ZV33Observacao8=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO8",gx.O.AV33Observacao8,0)},c2v:function(){gx.O.AV33Observacao8=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO8")},nac:gx.falseFn};
   GXValidFnc[101]={fld:"DIV16", format:2,grid:0};
   GXValidFnc[104]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO9",gxz:"ZV36Descricao9",gxold:"OV36Descricao9",gxvar:"AV36Descricao9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36Descricao9=Value},v2z:function(Value){gx.O.ZV36Descricao9=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO9",gx.O.AV36Descricao9,0)},c2v:function(){gx.O.AV36Descricao9=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO9")},nac:gx.falseFn};
   GXValidFnc[107]={fld:"DIV17", format:2,grid:0};
   GXValidFnc[108]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO9",gxz:"ZV37Observacao9",gxold:"OV37Observacao9",gxvar:"AV37Observacao9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37Observacao9=Value},v2z:function(Value){gx.O.ZV37Observacao9=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO9",gx.O.AV37Observacao9,0)},c2v:function(){gx.O.AV37Observacao9=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO9")},nac:gx.falseFn};
   GXValidFnc[109]={fld:"DIV18", format:2,grid:0};
   GXValidFnc[112]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO10",gxz:"ZV41Descricao10",gxold:"OV41Descricao10",gxvar:"AV41Descricao10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41Descricao10=Value},v2z:function(Value){gx.O.ZV41Descricao10=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO10",gx.O.AV41Descricao10,0)},c2v:function(){gx.O.AV41Descricao10=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO10")},nac:gx.falseFn};
   GXValidFnc[115]={fld:"DIV19", format:2,grid:0};
   GXValidFnc[116]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO10",gxz:"ZV42Observacao10",gxold:"OV42Observacao10",gxvar:"AV42Observacao10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42Observacao10=Value},v2z:function(Value){gx.O.ZV42Observacao10=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO10",gx.O.AV42Observacao10,0)},c2v:function(){gx.O.AV42Observacao10=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO10")},nac:gx.falseFn};
   GXValidFnc[117]={fld:"DIV20", format:2,grid:0};
   GXValidFnc[120]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO15",gxz:"ZV55Descricao15",gxold:"OV55Descricao15",gxvar:"AV55Descricao15",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55Descricao15=Value},v2z:function(Value){gx.O.ZV55Descricao15=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO15",gx.O.AV55Descricao15,0)},c2v:function(){gx.O.AV55Descricao15=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO15")},nac:gx.falseFn};
   GXValidFnc[123]={fld:"DIV29", format:2,grid:0};
   GXValidFnc[124]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO15",gxz:"ZV57Observacao15",gxold:"OV57Observacao15",gxvar:"AV57Observacao15",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57Observacao15=Value},v2z:function(Value){gx.O.ZV57Observacao15=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO15",gx.O.AV57Observacao15,0)},c2v:function(){gx.O.AV57Observacao15=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO15")},nac:gx.falseFn};
   GXValidFnc[125]={fld:"DIV30", format:2,grid:0};
   GXValidFnc[128]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO16",gxz:"ZV59Descricao16",gxold:"OV59Descricao16",gxvar:"AV59Descricao16",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59Descricao16=Value},v2z:function(Value){gx.O.ZV59Descricao16=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO16",gx.O.AV59Descricao16,0)},c2v:function(){gx.O.AV59Descricao16=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO16")},nac:gx.falseFn};
   GXValidFnc[131]={fld:"DIV31", format:2,grid:0};
   GXValidFnc[132]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO16",gxz:"ZV60Observacao16",gxold:"OV60Observacao16",gxvar:"AV60Observacao16",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60Observacao16=Value},v2z:function(Value){gx.O.ZV60Observacao16=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO16",gx.O.AV60Observacao16,0)},c2v:function(){gx.O.AV60Observacao16=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO16")},nac:gx.falseFn};
   GXValidFnc[133]={fld:"DIV32", format:2,grid:0};
   GXValidFnc[136]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO17",gxz:"ZV62Descricao17",gxold:"OV62Descricao17",gxvar:"AV62Descricao17",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV62Descricao17=Value},v2z:function(Value){gx.O.ZV62Descricao17=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAO17",gx.O.AV62Descricao17,0)},c2v:function(){gx.O.AV62Descricao17=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAO17")},nac:gx.falseFn};
   GXValidFnc[139]={fld:"DIV33", format:2,grid:0};
   GXValidFnc[140]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO17",gxz:"ZV63Observacao17",gxold:"OV63Observacao17",gxvar:"AV63Observacao17",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63Observacao17=Value},v2z:function(Value){gx.O.ZV63Observacao17=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO17",gx.O.AV63Observacao17,0)},c2v:function(){gx.O.AV63Observacao17=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO17")},nac:gx.falseFn};
   GXValidFnc[141]={fld:"DIV34", format:2,grid:0};
   this.AV13Descricao = "" ;
   this.ZV13Descricao = "" ;
   this.OV13Descricao = "" ;
   this.AV26Observacao = "" ;
   this.ZV26Observacao = "" ;
   this.OV26Observacao = "" ;
   this.AV14Descricao2 = "" ;
   this.ZV14Descricao2 = "" ;
   this.OV14Descricao2 = "" ;
   this.AV27Observacao2 = "" ;
   this.ZV27Observacao2 = "" ;
   this.OV27Observacao2 = "" ;
   this.AV46Descricao11 = "" ;
   this.ZV46Descricao11 = "" ;
   this.OV46Descricao11 = "" ;
   this.AV49Observacao11 = "" ;
   this.ZV49Observacao11 = "" ;
   this.OV49Observacao11 = "" ;
   this.AV47Descricao12 = "" ;
   this.ZV47Descricao12 = "" ;
   this.OV47Descricao12 = "" ;
   this.AV50Observacao12 = "" ;
   this.ZV50Observacao12 = "" ;
   this.OV50Observacao12 = "" ;
   this.AV48Descricao13 = "" ;
   this.ZV48Descricao13 = "" ;
   this.OV48Descricao13 = "" ;
   this.AV51Observacao13 = "" ;
   this.ZV51Observacao13 = "" ;
   this.OV51Observacao13 = "" ;
   this.AV15Descricao3 = "" ;
   this.ZV15Descricao3 = "" ;
   this.OV15Descricao3 = "" ;
   this.AV28Observacao3 = "" ;
   this.ZV28Observacao3 = "" ;
   this.OV28Observacao3 = "" ;
   this.AV16Descricao4 = "" ;
   this.ZV16Descricao4 = "" ;
   this.OV16Descricao4 = "" ;
   this.AV29Observacao4 = "" ;
   this.ZV29Observacao4 = "" ;
   this.OV29Observacao4 = "" ;
   this.AV17Descricao5 = "" ;
   this.ZV17Descricao5 = "" ;
   this.OV17Descricao5 = "" ;
   this.AV30Observacao5 = "" ;
   this.ZV30Observacao5 = "" ;
   this.OV30Observacao5 = "" ;
   this.AV54Descricao14 = "" ;
   this.ZV54Descricao14 = "" ;
   this.OV54Descricao14 = "" ;
   this.AV56Observacao14 = "" ;
   this.ZV56Observacao14 = "" ;
   this.OV56Observacao14 = "" ;
   this.AV18Descricao6 = "" ;
   this.ZV18Descricao6 = "" ;
   this.OV18Descricao6 = "" ;
   this.AV31Observacao6 = "" ;
   this.ZV31Observacao6 = "" ;
   this.OV31Observacao6 = "" ;
   this.AV19Descricao7 = "" ;
   this.ZV19Descricao7 = "" ;
   this.OV19Descricao7 = "" ;
   this.AV32Observacao7 = "" ;
   this.ZV32Observacao7 = "" ;
   this.OV32Observacao7 = "" ;
   this.AV20Descricao8 = "" ;
   this.ZV20Descricao8 = "" ;
   this.OV20Descricao8 = "" ;
   this.AV33Observacao8 = "" ;
   this.ZV33Observacao8 = "" ;
   this.OV33Observacao8 = "" ;
   this.AV36Descricao9 = "" ;
   this.ZV36Descricao9 = "" ;
   this.OV36Descricao9 = "" ;
   this.AV37Observacao9 = "" ;
   this.ZV37Observacao9 = "" ;
   this.OV37Observacao9 = "" ;
   this.AV41Descricao10 = "" ;
   this.ZV41Descricao10 = "" ;
   this.OV41Descricao10 = "" ;
   this.AV42Observacao10 = "" ;
   this.ZV42Observacao10 = "" ;
   this.OV42Observacao10 = "" ;
   this.AV55Descricao15 = "" ;
   this.ZV55Descricao15 = "" ;
   this.OV55Descricao15 = "" ;
   this.AV57Observacao15 = "" ;
   this.ZV57Observacao15 = "" ;
   this.OV57Observacao15 = "" ;
   this.AV59Descricao16 = "" ;
   this.ZV59Descricao16 = "" ;
   this.OV59Descricao16 = "" ;
   this.AV60Observacao16 = "" ;
   this.ZV60Observacao16 = "" ;
   this.OV60Observacao16 = "" ;
   this.AV62Descricao17 = "" ;
   this.ZV62Descricao17 = "" ;
   this.OV62Descricao17 = "" ;
   this.AV63Observacao17 = "" ;
   this.ZV63Observacao17 = "" ;
   this.OV63Observacao17 = "" ;
   this.AV13Descricao = "" ;
   this.AV26Observacao = "" ;
   this.AV14Descricao2 = "" ;
   this.AV27Observacao2 = "" ;
   this.AV46Descricao11 = "" ;
   this.AV49Observacao11 = "" ;
   this.AV47Descricao12 = "" ;
   this.AV50Observacao12 = "" ;
   this.AV48Descricao13 = "" ;
   this.AV51Observacao13 = "" ;
   this.AV15Descricao3 = "" ;
   this.AV28Observacao3 = "" ;
   this.AV16Descricao4 = "" ;
   this.AV29Observacao4 = "" ;
   this.AV17Descricao5 = "" ;
   this.AV30Observacao5 = "" ;
   this.AV54Descricao14 = "" ;
   this.AV56Observacao14 = "" ;
   this.AV18Descricao6 = "" ;
   this.AV31Observacao6 = "" ;
   this.AV19Descricao7 = "" ;
   this.AV32Observacao7 = "" ;
   this.AV20Descricao8 = "" ;
   this.AV33Observacao8 = "" ;
   this.AV36Descricao9 = "" ;
   this.AV37Observacao9 = "" ;
   this.AV41Descricao10 = "" ;
   this.AV42Observacao10 = "" ;
   this.AV55Descricao15 = "" ;
   this.AV57Observacao15 = "" ;
   this.AV59Descricao16 = "" ;
   this.AV60Observacao16 = "" ;
   this.AV62Descricao17 = "" ;
   this.AV63Observacao17 = "" ;
   this.AV22EmpresaPadrao = "" ;
   this.AV34SistemaId = "" ;
   this.AV39SistemaId2 = "" ;
   this.AV5Campo = "" ;
   this.AV6Campo2 = "" ;
   this.AV7Campo3 = "" ;
   this.AV8Campo4 = "" ;
   this.AV9Campo5 = "" ;
   this.AV10Campo6 = "" ;
   this.AV11Campo7 = "" ;
   this.AV12Campo8 = "" ;
   this.AV38Campo9 = "" ;
   this.AV40Campo10 = "" ;
   this.AV43Campo11 = "" ;
   this.AV44Campo12 = "" ;
   this.AV45Campo13 = "" ;
   this.AV52Campo14 = "" ;
   this.AV53Campo15 = "" ;
   this.AV58Campo16 = "" ;
   this.AV61Campo17 = "" ;
   this.A138EmpresaId = "" ;
   this.A419ParametroSistemaCampo = "" ;
   this.A140SistemaId = "" ;
   this.A416ParametroSistemaDescricao = "" ;
   this.A418ParametroSistemaObservacao = "" ;
   this.Events = {"e1228m2_client": ["'FECHAR'", true] ,"e1428m2_client": ["ENTER", true] ,"e1528m2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setVCMap("AV22EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV34SistemaId", "vSISTEMAID", 0, "char");
   this.setVCMap("AV39SistemaId2", "vSISTEMAID2", 0, "char");
   this.setVCMap("AV5Campo", "vCAMPO", 0, "char");
   this.setVCMap("AV6Campo2", "vCAMPO2", 0, "char");
   this.setVCMap("AV7Campo3", "vCAMPO3", 0, "char");
   this.setVCMap("AV8Campo4", "vCAMPO4", 0, "char");
   this.setVCMap("AV9Campo5", "vCAMPO5", 0, "char");
   this.setVCMap("AV10Campo6", "vCAMPO6", 0, "char");
   this.setVCMap("AV11Campo7", "vCAMPO7", 0, "char");
   this.setVCMap("AV12Campo8", "vCAMPO8", 0, "char");
   this.setVCMap("AV38Campo9", "vCAMPO9", 0, "char");
   this.setVCMap("AV40Campo10", "vCAMPO10", 0, "char");
   this.setVCMap("AV43Campo11", "vCAMPO11", 0, "char");
   this.setVCMap("AV44Campo12", "vCAMPO12", 0, "char");
   this.setVCMap("AV45Campo13", "vCAMPO13", 0, "char");
   this.setVCMap("AV52Campo14", "vCAMPO14", 0, "char");
   this.setVCMap("AV53Campo15", "vCAMPO15", 0, "char");
   this.setVCMap("AV58Campo16", "vCAMPO16", 0, "char");
   this.setVCMap("AV61Campo17", "vCAMPO17", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalobsparmsfaturarvendas());