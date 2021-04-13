/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:8:50.11
*/
gx.evt.autoSkip = false;
gx.define('hforcavenda', false, function () {
   this.ServerClass =  "hforcavenda" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV34EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Validv_Fvid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFVID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Fvuf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFVUF");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Fvufentrega=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFVUFENTREGA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e112bh2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132bh2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e162bh2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,10,13,16,19,21,24,26,29,31,33,36,38,41,43,46,48,51,54,57,59,62,64,67,69,72,74,77,79,82,84,87,89,91,94,96,99,101,104,106,109,111,112,115,118,120,123,125,128,130,133,135,138,140,142,145,147,150,152,155,157,160,162,163,166,169,171,183];
   this.GXLastCtrlId =183;
   this.TABCSSContainer = gx.uc.getNew(this, 9, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV41Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV41Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV41Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "tabcss_1", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[10]={fld:"TAB1",grid:0};
   GXValidFnc[13]={fld:"TABLE6",grid:0};
   GXValidFnc[16]={fld:"TABLE3",grid:0};
   GXValidFnc[19]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFVNUMEROPREVENDARET",gxz:"ZV33FVNumeroPreVendaRet",gxold:"OV33FVNumeroPreVendaRet",gxvar:"AV33FVNumeroPreVendaRet",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33FVNumeroPreVendaRet=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33FVNumeroPreVendaRet=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFVNUMEROPREVENDARET",gx.O.AV33FVNumeroPreVendaRet,0)},c2v:function(){gx.O.AV33FVNumeroPreVendaRet=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFVNUMEROPREVENDARET",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Fvid,isvalid:null,rgrid:[],fld:"vFVID",gxz:"ZV7FVId",gxold:"OV7FVId",gxvar:"AV7FVId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7FVId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7FVId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFVID",gx.O.AV7FVId,0)},c2v:function(){gx.O.AV7FVId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFVID",'.')},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFVUSUARIO",gxz:"ZV8FVUsuario",gxold:"OV8FVUsuario",gxvar:"AV8FVUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8FVUsuario=Value},v2z:function(Value){gx.O.ZV8FVUsuario=Value},v2c:function(){gx.fn.setControlValue("vFVUSUARIO",gx.O.AV8FVUsuario,0)},c2v:function(){gx.O.AV8FVUsuario=this.val()},val:function(){return gx.fn.getControlValue("vFVUSUARIO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TABLE7",grid:0};
   GXValidFnc[36]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDANODOCUMENTO",gxz:"ZV6SaidaNoDocumento",gxold:"OV6SaidaNoDocumento",gxvar:"AV6SaidaNoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6SaidaNoDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6SaidaNoDocumento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDANODOCUMENTO",gx.O.AV6SaidaNoDocumento,0)},c2v:function(){gx.O.AV6SaidaNoDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDANODOCUMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFVDATAVENDA",gxz:"ZV9FVDataVenda",gxold:"OV9FVDataVenda",gxvar:"AV9FVDataVenda",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9FVDataVenda=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9FVDataVenda=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vFVDATAVENDA",gx.O.AV9FVDataVenda,0)},c2v:function(){gx.O.AV9FVDataVenda=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vFVDATAVENDA")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFVSITUACAO",gxz:"ZV22FVSituacao",gxold:"OV22FVSituacao",gxvar:"AV22FVSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22FVSituacao=Value},v2z:function(Value){gx.O.ZV22FVSituacao=Value},v2c:function(){gx.fn.setComboBoxValue("vFVSITUACAO",gx.O.AV22FVSituacao)},c2v:function(){gx.O.AV22FVSituacao=this.val()},val:function(){return gx.fn.getControlValue("vFVSITUACAO")},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[54]={fld:"TABLE5",grid:0};
   GXValidFnc[57]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFVCLIENTECODIGO",gxz:"ZV10FVClienteCodigo",gxold:"OV10FVClienteCodigo",gxvar:"AV10FVClienteCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10FVClienteCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10FVClienteCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFVCLIENTECODIGO",gx.O.AV10FVClienteCodigo,0)},c2v:function(){gx.O.AV10FVClienteCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFVCLIENTECODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFVCLIENTENOME",gxz:"ZV13FVClienteNome",gxold:"OV13FVClienteNome",gxvar:"AV13FVClienteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13FVClienteNome=Value},v2z:function(Value){gx.O.ZV13FVClienteNome=Value},v2c:function(){gx.fn.setControlValue("vFVCLIENTENOME",gx.O.AV13FVClienteNome,0)},c2v:function(){gx.O.AV13FVClienteNome=this.val()},val:function(){return gx.fn.getControlValue("vFVCLIENTENOME")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCPFCNPJ",gxz:"ZV5CPFCNPJ",gxold:"OV5CPFCNPJ",gxvar:"AV5CPFCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5CPFCNPJ=Value},v2z:function(Value){gx.O.ZV5CPFCNPJ=Value},v2c:function(){gx.fn.setControlValue("vCPFCNPJ",gx.O.AV5CPFCNPJ,0)},c2v:function(){gx.O.AV5CPFCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vCPFCNPJ")},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"svchar",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFVINSCESTADUAL",gxz:"ZV14FVInscEstadual",gxold:"OV14FVInscEstadual",gxvar:"AV14FVInscEstadual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14FVInscEstadual=Value},v2z:function(Value){gx.O.ZV14FVInscEstadual=Value},v2c:function(){gx.fn.setControlValue("vFVINSCESTADUAL",gx.O.AV14FVInscEstadual,0)},c2v:function(){gx.O.AV14FVInscEstadual=this.val()},val:function(){return gx.fn.getControlValue("vFVINSCESTADUAL")},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFVCEP",gxz:"ZV21FVCep",gxold:"OV21FVCep",gxvar:"AV21FVCep",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21FVCep=Value},v2z:function(Value){gx.O.ZV21FVCep=Value},v2c:function(){gx.fn.setControlValue("vFVCEP",gx.O.AV21FVCep,0)},c2v:function(){gx.O.AV21FVCep=this.val()},val:function(){return gx.fn.getControlValue("vFVCEP")},nac:gx.falseFn};
   GXValidFnc[82]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[84]={fld:"TABLE9",grid:0};
   GXValidFnc[87]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFVENDERECO",gxz:"ZV15FVEndereco",gxold:"OV15FVEndereco",gxvar:"AV15FVEndereco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15FVEndereco=Value},v2z:function(Value){gx.O.ZV15FVEndereco=Value},v2c:function(){gx.fn.setControlValue("vFVENDERECO",gx.O.AV15FVEndereco,0)},c2v:function(){gx.O.AV15FVEndereco=this.val()},val:function(){return gx.fn.getControlValue("vFVENDERECO")},nac:gx.falseFn};
   GXValidFnc[89]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[91]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFVNUMERO",gxz:"ZV16FVNumero",gxold:"OV16FVNumero",gxvar:"AV16FVNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16FVNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16FVNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFVNUMERO",gx.O.AV16FVNumero,0)},c2v:function(){gx.O.AV16FVNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFVNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[94]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[96]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFVCOMPLEMENTO",gxz:"ZV18FVComplemento",gxold:"OV18FVComplemento",gxvar:"AV18FVComplemento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18FVComplemento=Value},v2z:function(Value){gx.O.ZV18FVComplemento=Value},v2c:function(){gx.fn.setControlValue("vFVCOMPLEMENTO",gx.O.AV18FVComplemento,0)},c2v:function(){gx.O.AV18FVComplemento=this.val()},val:function(){return gx.fn.getControlValue("vFVCOMPLEMENTO")},nac:gx.falseFn};
   GXValidFnc[99]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[101]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFVBAIRRO",gxz:"ZV17FVBairro",gxold:"OV17FVBairro",gxvar:"AV17FVBairro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17FVBairro=Value},v2z:function(Value){gx.O.ZV17FVBairro=Value},v2c:function(){gx.fn.setControlValue("vFVBAIRRO",gx.O.AV17FVBairro,0)},c2v:function(){gx.O.AV17FVBairro=this.val()},val:function(){return gx.fn.getControlValue("vFVBAIRRO")},nac:gx.falseFn};
   GXValidFnc[104]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[106]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFVCIDADE",gxz:"ZV19FVCidade",gxold:"OV19FVCidade",gxvar:"AV19FVCidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19FVCidade=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19FVCidade=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFVCIDADE",gx.O.AV19FVCidade,0)},c2v:function(){gx.O.AV19FVCidade=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFVCIDADE",'.')},nac:gx.falseFn};
   GXValidFnc[109]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[111]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Fvuf,isvalid:null,rgrid:[],fld:"vFVUF",gxz:"ZV20FVUF",gxold:"OV20FVUF",gxvar:"AV20FVUF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20FVUF=Value},v2z:function(Value){gx.O.ZV20FVUF=Value},v2c:function(){gx.fn.setComboBoxValue("vFVUF",gx.O.AV20FVUF)},c2v:function(){gx.O.AV20FVUF=this.val()},val:function(){return gx.fn.getControlValue("vFVUF")},nac:gx.falseFn};
   GXValidFnc[112]={fld:"TAB2",grid:0};
   GXValidFnc[115]={fld:"TABLE8",grid:0};
   GXValidFnc[118]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[120]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFVPRAZOENTREGA",gxz:"ZV24FVPrazoEntrega",gxold:"OV24FVPrazoEntrega",gxvar:"AV24FVPrazoEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24FVPrazoEntrega=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24FVPrazoEntrega=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFVPRAZOENTREGA",gx.O.AV24FVPrazoEntrega,0)},c2v:function(){gx.O.AV24FVPrazoEntrega=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFVPRAZOENTREGA",'.')},nac:gx.falseFn};
   GXValidFnc[123]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[125]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFVTIPOENTREGA",gxz:"ZV25FVTipoEntrega",gxold:"OV25FVTipoEntrega",gxvar:"AV25FVTipoEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV25FVTipoEntrega=Value},v2z:function(Value){gx.O.ZV25FVTipoEntrega=Value},v2c:function(){gx.fn.setComboBoxValue("vFVTIPOENTREGA",gx.O.AV25FVTipoEntrega)},c2v:function(){gx.O.AV25FVTipoEntrega=this.val()},val:function(){return gx.fn.getControlValue("vFVTIPOENTREGA")},nac:gx.falseFn};
   GXValidFnc[128]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[130]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFVCEPENTREGA",gxz:"ZV32FVCepEntrega",gxold:"OV32FVCepEntrega",gxvar:"AV32FVCepEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32FVCepEntrega=Value},v2z:function(Value){gx.O.ZV32FVCepEntrega=Value},v2c:function(){gx.fn.setControlValue("vFVCEPENTREGA",gx.O.AV32FVCepEntrega,0)},c2v:function(){gx.O.AV32FVCepEntrega=this.val()},val:function(){return gx.fn.getControlValue("vFVCEPENTREGA")},nac:gx.falseFn};
   GXValidFnc[133]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[135]={fld:"TABLE10",grid:0};
   GXValidFnc[138]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFVENDERECOENTREGA",gxz:"ZV26FVEnderecoEntrega",gxold:"OV26FVEnderecoEntrega",gxvar:"AV26FVEnderecoEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26FVEnderecoEntrega=Value},v2z:function(Value){gx.O.ZV26FVEnderecoEntrega=Value},v2c:function(){gx.fn.setControlValue("vFVENDERECOENTREGA",gx.O.AV26FVEnderecoEntrega,0)},c2v:function(){gx.O.AV26FVEnderecoEntrega=this.val()},val:function(){return gx.fn.getControlValue("vFVENDERECOENTREGA")},nac:gx.falseFn};
   GXValidFnc[140]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[142]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFVNUMEROENTREGA",gxz:"ZV27FVNumeroEntrega",gxold:"OV27FVNumeroEntrega",gxvar:"AV27FVNumeroEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27FVNumeroEntrega=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27FVNumeroEntrega=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFVNUMEROENTREGA",gx.O.AV27FVNumeroEntrega,0)},c2v:function(){gx.O.AV27FVNumeroEntrega=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFVNUMEROENTREGA",'.')},nac:gx.falseFn};
   GXValidFnc[145]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[147]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFVCOMPLEMENTOENTREGA",gxz:"ZV29FVComplementoEntrega",gxold:"OV29FVComplementoEntrega",gxvar:"AV29FVComplementoEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29FVComplementoEntrega=Value},v2z:function(Value){gx.O.ZV29FVComplementoEntrega=Value},v2c:function(){gx.fn.setControlValue("vFVCOMPLEMENTOENTREGA",gx.O.AV29FVComplementoEntrega,0)},c2v:function(){gx.O.AV29FVComplementoEntrega=this.val()},val:function(){return gx.fn.getControlValue("vFVCOMPLEMENTOENTREGA")},nac:gx.falseFn};
   GXValidFnc[150]={fld:"TEXTBLOCK34", format:0,grid:0};
   GXValidFnc[152]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFVBAIRROENTREGA",gxz:"ZV28FVBairroEntrega",gxold:"OV28FVBairroEntrega",gxvar:"AV28FVBairroEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28FVBairroEntrega=Value},v2z:function(Value){gx.O.ZV28FVBairroEntrega=Value},v2c:function(){gx.fn.setControlValue("vFVBAIRROENTREGA",gx.O.AV28FVBairroEntrega,0)},c2v:function(){gx.O.AV28FVBairroEntrega=this.val()},val:function(){return gx.fn.getControlValue("vFVBAIRROENTREGA")},nac:gx.falseFn};
   GXValidFnc[155]={fld:"TEXTBLOCK35", format:0,grid:0};
   GXValidFnc[157]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFVCIDADEENTREGA",gxz:"ZV30FVCidadeEntrega",gxold:"OV30FVCidadeEntrega",gxvar:"AV30FVCidadeEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30FVCidadeEntrega=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30FVCidadeEntrega=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFVCIDADEENTREGA",gx.O.AV30FVCidadeEntrega,0)},c2v:function(){gx.O.AV30FVCidadeEntrega=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFVCIDADEENTREGA",'.')},nac:gx.falseFn};
   GXValidFnc[160]={fld:"TEXTBLOCK36", format:0,grid:0};
   GXValidFnc[162]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Fvufentrega,isvalid:null,rgrid:[],fld:"vFVUFENTREGA",gxz:"ZV31FVUFEntrega",gxold:"OV31FVUFEntrega",gxvar:"AV31FVUFEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV31FVUFEntrega=Value},v2z:function(Value){gx.O.ZV31FVUFEntrega=Value},v2c:function(){gx.fn.setComboBoxValue("vFVUFENTREGA",gx.O.AV31FVUFEntrega)},c2v:function(){gx.O.AV31FVUFEntrega=this.val()},val:function(){return gx.fn.getControlValue("vFVUFENTREGA")},nac:gx.falseFn};
   GXValidFnc[163]={fld:"TAB3",grid:0};
   GXValidFnc[166]={fld:"TABLE23",grid:0};
   GXValidFnc[169]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[171]={lvl:0,type:"vchar",len:9000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFVOBSERVACAO",gxz:"ZV23FVObservacao",gxold:"OV23FVObservacao",gxvar:"AV23FVObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23FVObservacao=Value},v2z:function(Value){gx.O.ZV23FVObservacao=Value},v2c:function(){gx.fn.setControlValue("vFVOBSERVACAO",gx.O.AV23FVObservacao,0)},c2v:function(){gx.O.AV23FVObservacao=this.val()},val:function(){return gx.fn.getControlValue("vFVOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[183]={fld:"BTNHELP",grid:0};
   this.AV33FVNumeroPreVendaRet = 0 ;
   this.ZV33FVNumeroPreVendaRet = 0 ;
   this.OV33FVNumeroPreVendaRet = 0 ;
   this.AV7FVId = 0 ;
   this.ZV7FVId = 0 ;
   this.OV7FVId = 0 ;
   this.AV8FVUsuario = "" ;
   this.ZV8FVUsuario = "" ;
   this.OV8FVUsuario = "" ;
   this.AV6SaidaNoDocumento = 0 ;
   this.ZV6SaidaNoDocumento = 0 ;
   this.OV6SaidaNoDocumento = 0 ;
   this.AV9FVDataVenda = gx.date.nullDate() ;
   this.ZV9FVDataVenda = gx.date.nullDate() ;
   this.OV9FVDataVenda = gx.date.nullDate() ;
   this.AV22FVSituacao = "" ;
   this.ZV22FVSituacao = "" ;
   this.OV22FVSituacao = "" ;
   this.AV10FVClienteCodigo = 0 ;
   this.ZV10FVClienteCodigo = 0 ;
   this.OV10FVClienteCodigo = 0 ;
   this.AV13FVClienteNome = "" ;
   this.ZV13FVClienteNome = "" ;
   this.OV13FVClienteNome = "" ;
   this.AV5CPFCNPJ = "" ;
   this.ZV5CPFCNPJ = "" ;
   this.OV5CPFCNPJ = "" ;
   this.AV14FVInscEstadual = "" ;
   this.ZV14FVInscEstadual = "" ;
   this.OV14FVInscEstadual = "" ;
   this.AV21FVCep = "" ;
   this.ZV21FVCep = "" ;
   this.OV21FVCep = "" ;
   this.AV15FVEndereco = "" ;
   this.ZV15FVEndereco = "" ;
   this.OV15FVEndereco = "" ;
   this.AV16FVNumero = 0 ;
   this.ZV16FVNumero = 0 ;
   this.OV16FVNumero = 0 ;
   this.AV18FVComplemento = "" ;
   this.ZV18FVComplemento = "" ;
   this.OV18FVComplemento = "" ;
   this.AV17FVBairro = "" ;
   this.ZV17FVBairro = "" ;
   this.OV17FVBairro = "" ;
   this.AV19FVCidade = 0 ;
   this.ZV19FVCidade = 0 ;
   this.OV19FVCidade = 0 ;
   this.AV20FVUF = "" ;
   this.ZV20FVUF = "" ;
   this.OV20FVUF = "" ;
   this.AV24FVPrazoEntrega = 0 ;
   this.ZV24FVPrazoEntrega = 0 ;
   this.OV24FVPrazoEntrega = 0 ;
   this.AV25FVTipoEntrega = "" ;
   this.ZV25FVTipoEntrega = "" ;
   this.OV25FVTipoEntrega = "" ;
   this.AV32FVCepEntrega = "" ;
   this.ZV32FVCepEntrega = "" ;
   this.OV32FVCepEntrega = "" ;
   this.AV26FVEnderecoEntrega = "" ;
   this.ZV26FVEnderecoEntrega = "" ;
   this.OV26FVEnderecoEntrega = "" ;
   this.AV27FVNumeroEntrega = 0 ;
   this.ZV27FVNumeroEntrega = 0 ;
   this.OV27FVNumeroEntrega = 0 ;
   this.AV29FVComplementoEntrega = "" ;
   this.ZV29FVComplementoEntrega = "" ;
   this.OV29FVComplementoEntrega = "" ;
   this.AV28FVBairroEntrega = "" ;
   this.ZV28FVBairroEntrega = "" ;
   this.OV28FVBairroEntrega = "" ;
   this.AV30FVCidadeEntrega = 0 ;
   this.ZV30FVCidadeEntrega = 0 ;
   this.OV30FVCidadeEntrega = 0 ;
   this.AV31FVUFEntrega = "" ;
   this.ZV31FVUFEntrega = "" ;
   this.OV31FVUFEntrega = "" ;
   this.AV23FVObservacao = "" ;
   this.ZV23FVObservacao = "" ;
   this.OV23FVObservacao = "" ;
   this.AV41Tab = [ ] ;
   this.AV33FVNumeroPreVendaRet = 0 ;
   this.AV7FVId = 0 ;
   this.AV8FVUsuario = "" ;
   this.AV6SaidaNoDocumento = 0 ;
   this.AV9FVDataVenda = gx.date.nullDate() ;
   this.AV22FVSituacao = "" ;
   this.AV10FVClienteCodigo = 0 ;
   this.AV13FVClienteNome = "" ;
   this.AV5CPFCNPJ = "" ;
   this.AV14FVInscEstadual = "" ;
   this.AV21FVCep = "" ;
   this.AV15FVEndereco = "" ;
   this.AV16FVNumero = 0 ;
   this.AV18FVComplemento = "" ;
   this.AV17FVBairro = "" ;
   this.AV19FVCidade = 0 ;
   this.AV20FVUF = "" ;
   this.AV24FVPrazoEntrega = 0 ;
   this.AV25FVTipoEntrega = "" ;
   this.AV32FVCepEntrega = "" ;
   this.AV26FVEnderecoEntrega = "" ;
   this.AV27FVNumeroEntrega = 0 ;
   this.AV29FVComplementoEntrega = "" ;
   this.AV28FVBairroEntrega = "" ;
   this.AV30FVCidadeEntrega = 0 ;
   this.AV31FVUFEntrega = "" ;
   this.AV23FVObservacao = "" ;
   this.AV34EmpresaLogadaId = "" ;
   this.A10618FVId = 0 ;
   this.A10617FVEmpresa = "" ;
   this.A10623FVUsuario = "" ;
   this.A10624FVDataVenda = gx.date.nullDate() ;
   this.A10622FVClienteCodigo = 0 ;
   this.A10648FVClienteCnpj = "" ;
   this.A10647FVClienteCpf = "" ;
   this.A10646FVClienteNome = "" ;
   this.A10625FVInscEstadual = "" ;
   this.A10626FVEndereco = "" ;
   this.A10627FVNumero = 0 ;
   this.A10628FVBairro = "" ;
   this.A10629FVComplemento = "" ;
   this.A10630FVCidade = 0 ;
   this.A10631FVUF = "" ;
   this.A10632FVCep = "" ;
   this.A10633FVSituacao = "" ;
   this.A10634FVObservacao = "" ;
   this.A10636FVPrazoEntrega = 0 ;
   this.A10637FVTipoEntrega = "" ;
   this.A10638FVEnderecoEntrega = "" ;
   this.A10639FVNumeroEntrega = 0 ;
   this.A10640FVBairroEntrega = "" ;
   this.A10641FVComplementoEntrega = "" ;
   this.A10642FVCidadeEntrega = 0 ;
   this.A10643FVUFEntrega = "" ;
   this.A10644FVCepEntrega = "" ;
   this.A10645FVNumeroPreVendaRet = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e112bh2_client": ["'FECHAR'", true] ,"e132bh2_client": ["ENTER", true] ,"e162bh2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV7FVId',fld:'vFVID'},{av:'AV34EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV34EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV7FVId',fld:'vFVID'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV34EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hforcavenda());
