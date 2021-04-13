/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:46:19.56
*/
gx.evt.autoSkip = false;
gx.define('hregistrarentradadecimportacao', false, function () {
   this.ServerClass =  "hregistrarentradadecimportacao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV18EntradaEmpresaId=gx.fn.getControlValue("vENTRADAEMPRESAID") ;
      this.AV19EntradaId=gx.fn.getIntegerValue("vENTRADAID",'.') ;
      this.AV20EntradaItemSequencia=gx.fn.getIntegerValue("vENTRADAITEMSEQUENCIA",'.') ;
      this.AV8DecImportacaoSequencia=gx.fn.getIntegerValue("vDECIMPORTACAOSEQUENCIA",'.') ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Validv_Decimportacaoufdesembaraco=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDECIMPORTACAOUFDESEMBARACO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Decimportacaoufterceiro=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDECIMPORTACAOUFTERCEIRO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11u32_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13u32_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16u32_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,14,16,19,21,24,26,29,31,34,36,39,41,44,46,49,51,54,56,59,61,69];
   this.GXLastCtrlId =69;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TEXTBLOCK206", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"char",len:12,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDECIMPORTACAONODI",gxz:"ZV10DecImportacaoNoDI",gxold:"OV10DecImportacaoNoDI",gxvar:"AV10DecImportacaoNoDI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10DecImportacaoNoDI=Value},v2z:function(Value){gx.O.ZV10DecImportacaoNoDI=Value},v2c:function(){gx.fn.setControlValue("vDECIMPORTACAONODI",gx.O.AV10DecImportacaoNoDI,0)},c2v:function(){gx.O.AV10DecImportacaoNoDI=this.val()},val:function(){return gx.fn.getControlValue("vDECIMPORTACAONODI")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCK207", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDECIMPORTACAODATAREGISTRO",gxz:"ZV11DecImportacaoDataRegistro",gxold:"OV11DecImportacaoDataRegistro",gxvar:"AV11DecImportacaoDataRegistro",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11DecImportacaoDataRegistro=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV11DecImportacaoDataRegistro=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDECIMPORTACAODATAREGISTRO",gx.O.AV11DecImportacaoDataRegistro,0)},c2v:function(){gx.O.AV11DecImportacaoDataRegistro=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDECIMPORTACAODATAREGISTRO")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK208", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDECIMPORTACAOEXPORTADOR",gxz:"ZV12DecImportacaoExportador",gxold:"OV12DecImportacaoExportador",gxvar:"AV12DecImportacaoExportador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12DecImportacaoExportador=Value},v2z:function(Value){gx.O.ZV12DecImportacaoExportador=Value},v2c:function(){gx.fn.setControlValue("vDECIMPORTACAOEXPORTADOR",gx.O.AV12DecImportacaoExportador,0)},c2v:function(){gx.O.AV12DecImportacaoExportador=this.val()},val:function(){return gx.fn.getControlValue("vDECIMPORTACAOEXPORTADOR")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK209", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Decimportacaoufdesembaraco,isvalid:null,rgrid:[],fld:"vDECIMPORTACAOUFDESEMBARACO",gxz:"ZV13DecImportacaoUFDesembaraco",gxold:"OV13DecImportacaoUFDesembaraco",gxvar:"AV13DecImportacaoUFDesembaraco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV13DecImportacaoUFDesembaraco=Value},v2z:function(Value){gx.O.ZV13DecImportacaoUFDesembaraco=Value},v2c:function(){gx.fn.setComboBoxValue("vDECIMPORTACAOUFDESEMBARACO",gx.O.AV13DecImportacaoUFDesembaraco)},c2v:function(){gx.O.AV13DecImportacaoUFDesembaraco=this.val()},val:function(){return gx.fn.getControlValue("vDECIMPORTACAOUFDESEMBARACO")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK210", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDECIMPORTACAOLOCALDESEMBARACO",gxz:"ZV14DecImportacaoLocalDesembaraco",gxold:"OV14DecImportacaoLocalDesembaraco",gxvar:"AV14DecImportacaoLocalDesembaraco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14DecImportacaoLocalDesembaraco=Value},v2z:function(Value){gx.O.ZV14DecImportacaoLocalDesembaraco=Value},v2c:function(){gx.fn.setControlValue("vDECIMPORTACAOLOCALDESEMBARACO",gx.O.AV14DecImportacaoLocalDesembaraco,0)},c2v:function(){gx.O.AV14DecImportacaoLocalDesembaraco=this.val()},val:function(){return gx.fn.getControlValue("vDECIMPORTACAOLOCALDESEMBARACO")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK211", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDECIMPORTACAODATADESEMBARACO",gxz:"ZV15DecImportacaoDataDesembaraco",gxold:"OV15DecImportacaoDataDesembaraco",gxvar:"AV15DecImportacaoDataDesembaraco",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15DecImportacaoDataDesembaraco=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV15DecImportacaoDataDesembaraco=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDECIMPORTACAODATADESEMBARACO",gx.O.AV15DecImportacaoDataDesembaraco,0)},c2v:function(){gx.O.AV15DecImportacaoDataDesembaraco=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDECIMPORTACAODATADESEMBARACO")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK212", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDECIMPORTACAOTPVIATRANSP",gxz:"ZV25DecImportacaoTpViaTransp",gxold:"OV25DecImportacaoTpViaTransp",gxvar:"AV25DecImportacaoTpViaTransp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV25DecImportacaoTpViaTransp=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25DecImportacaoTpViaTransp=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDECIMPORTACAOTPVIATRANSP",gx.O.AV25DecImportacaoTpViaTransp)},c2v:function(){gx.O.AV25DecImportacaoTpViaTransp=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDECIMPORTACAOTPVIATRANSP",'.')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK213", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDECIMPORTACAOVAFRMM",gxz:"ZV24DecImportacaovAFRMM",gxold:"OV24DecImportacaovAFRMM",gxvar:"AV24DecImportacaovAFRMM",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24DecImportacaovAFRMM=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV24DecImportacaovAFRMM=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDECIMPORTACAOVAFRMM",gx.O.AV24DecImportacaovAFRMM,2,',')},c2v:function(){gx.O.AV24DecImportacaovAFRMM=this.val()},val:function(){return gx.fn.getDecimalValue("vDECIMPORTACAOVAFRMM",'.',',')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDECIMPORTACAOTPINTERMEDIO",gxz:"ZV22DecImportacaoTpIntermedio",gxold:"OV22DecImportacaoTpIntermedio",gxvar:"AV22DecImportacaoTpIntermedio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22DecImportacaoTpIntermedio=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22DecImportacaoTpIntermedio=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDECIMPORTACAOTPINTERMEDIO",gx.O.AV22DecImportacaoTpIntermedio)},c2v:function(){gx.O.AV22DecImportacaoTpIntermedio=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDECIMPORTACAOTPINTERMEDIO",'.')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDECIMPORTACAOCNPJADQ",gxz:"ZV21DecImportacaoCNPJAdq",gxold:"OV21DecImportacaoCNPJAdq",gxvar:"AV21DecImportacaoCNPJAdq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21DecImportacaoCNPJAdq=Value},v2z:function(Value){gx.O.ZV21DecImportacaoCNPJAdq=Value},v2c:function(){gx.fn.setControlValue("vDECIMPORTACAOCNPJADQ",gx.O.AV21DecImportacaoCNPJAdq,0)},c2v:function(){gx.O.AV21DecImportacaoCNPJAdq=this.val()},val:function(){return gx.fn.getControlValue("vDECIMPORTACAOCNPJADQ")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Decimportacaoufterceiro,isvalid:null,rgrid:[],fld:"vDECIMPORTACAOUFTERCEIRO",gxz:"ZV23DecImportacaoUfTerceiro",gxold:"OV23DecImportacaoUfTerceiro",gxvar:"AV23DecImportacaoUfTerceiro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23DecImportacaoUfTerceiro=Value},v2z:function(Value){gx.O.ZV23DecImportacaoUfTerceiro=Value},v2c:function(){gx.fn.setComboBoxValue("vDECIMPORTACAOUFTERCEIRO",gx.O.AV23DecImportacaoUfTerceiro)},c2v:function(){gx.O.AV23DecImportacaoUfTerceiro=this.val()},val:function(){return gx.fn.getControlValue("vDECIMPORTACAOUFTERCEIRO")},nac:gx.falseFn};
   GXValidFnc[69]={fld:"JS", format:2,grid:0};
   this.AV10DecImportacaoNoDI = "" ;
   this.ZV10DecImportacaoNoDI = "" ;
   this.OV10DecImportacaoNoDI = "" ;
   this.AV11DecImportacaoDataRegistro = gx.date.nullDate() ;
   this.ZV11DecImportacaoDataRegistro = gx.date.nullDate() ;
   this.OV11DecImportacaoDataRegistro = gx.date.nullDate() ;
   this.AV12DecImportacaoExportador = "" ;
   this.ZV12DecImportacaoExportador = "" ;
   this.OV12DecImportacaoExportador = "" ;
   this.AV13DecImportacaoUFDesembaraco = "" ;
   this.ZV13DecImportacaoUFDesembaraco = "" ;
   this.OV13DecImportacaoUFDesembaraco = "" ;
   this.AV14DecImportacaoLocalDesembaraco = "" ;
   this.ZV14DecImportacaoLocalDesembaraco = "" ;
   this.OV14DecImportacaoLocalDesembaraco = "" ;
   this.AV15DecImportacaoDataDesembaraco = gx.date.nullDate() ;
   this.ZV15DecImportacaoDataDesembaraco = gx.date.nullDate() ;
   this.OV15DecImportacaoDataDesembaraco = gx.date.nullDate() ;
   this.AV25DecImportacaoTpViaTransp = 0 ;
   this.ZV25DecImportacaoTpViaTransp = 0 ;
   this.OV25DecImportacaoTpViaTransp = 0 ;
   this.AV24DecImportacaovAFRMM = 0 ;
   this.ZV24DecImportacaovAFRMM = 0 ;
   this.OV24DecImportacaovAFRMM = 0 ;
   this.AV22DecImportacaoTpIntermedio = 0 ;
   this.ZV22DecImportacaoTpIntermedio = 0 ;
   this.OV22DecImportacaoTpIntermedio = 0 ;
   this.AV21DecImportacaoCNPJAdq = "" ;
   this.ZV21DecImportacaoCNPJAdq = "" ;
   this.OV21DecImportacaoCNPJAdq = "" ;
   this.AV23DecImportacaoUfTerceiro = "" ;
   this.ZV23DecImportacaoUfTerceiro = "" ;
   this.OV23DecImportacaoUfTerceiro = "" ;
   this.AV10DecImportacaoNoDI = "" ;
   this.AV11DecImportacaoDataRegistro = gx.date.nullDate() ;
   this.AV12DecImportacaoExportador = "" ;
   this.AV13DecImportacaoUFDesembaraco = "" ;
   this.AV14DecImportacaoLocalDesembaraco = "" ;
   this.AV15DecImportacaoDataDesembaraco = gx.date.nullDate() ;
   this.AV25DecImportacaoTpViaTransp = 0 ;
   this.AV24DecImportacaovAFRMM = 0 ;
   this.AV22DecImportacaoTpIntermedio = 0 ;
   this.AV21DecImportacaoCNPJAdq = "" ;
   this.AV23DecImportacaoUfTerceiro = "" ;
   this.AV18EntradaEmpresaId = "" ;
   this.AV19EntradaId = 0 ;
   this.AV20EntradaItemSequencia = 0 ;
   this.AV8DecImportacaoSequencia = 0 ;
   this.A4822EntradaItemSequencia = 0 ;
   this.A4638EntradaId = 0 ;
   this.A4637EntradaEmpresaId = "" ;
   this.A5167DecImportacaoNoDI = "" ;
   this.A5168DecImportacaoDataRegistro = gx.date.nullDate() ;
   this.A5169DecImportacaoExportador = "" ;
   this.A5170DecImportacaoUFDesembaraco = "" ;
   this.A5171DecImportacaoLocalDesembaraco = "" ;
   this.A5172DecImportacaoDataDesembaraco = gx.date.nullDate() ;
   this.A10398DecImportacaoTpViaTransp = 0 ;
   this.A10400DecImportacaovAFRMM = 0 ;
   this.A10397DecImportacaoTpIntermedio = 0 ;
   this.A10396DecImportacaoCNPJAdq = "" ;
   this.A10399DecImportacaoUfTerceiro = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e11u32_client": ["'FECHAR'", true] ,"e13u32_client": ["ENTER", true] ,"e16u32_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'Gx_mode',fld:'vMODE'}],[{av:'gx.fn.getCtrlProperty("vDECIMPORTACAODATADESEMBARACO","Enabled")',ctrl:'vDECIMPORTACAODATADESEMBARACO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDECIMPORTACAODATAREGISTRO","Enabled")',ctrl:'vDECIMPORTACAODATAREGISTRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDECIMPORTACAOEXPORTADOR","Enabled")',ctrl:'vDECIMPORTACAOEXPORTADOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDECIMPORTACAOLOCALDESEMBARACO","Enabled")',ctrl:'vDECIMPORTACAOLOCALDESEMBARACO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDECIMPORTACAONODI","Enabled")',ctrl:'vDECIMPORTACAONODI',prop:'Enabled'},{ctrl:'vDECIMPORTACAOUFDESEMBARACO'},{ctrl:'vDECIMPORTACAOTPVIATRANSP'},{av:'gx.fn.getCtrlProperty("vDECIMPORTACAOVAFRMM","Enabled")',ctrl:'vDECIMPORTACAOVAFRMM',prop:'Enabled'},{ctrl:'vDECIMPORTACAOTPINTERMEDIO'},{av:'gx.fn.getCtrlProperty("vDECIMPORTACAOCNPJADQ","Enabled")',ctrl:'vDECIMPORTACAOCNPJADQ',prop:'Enabled'},{ctrl:'vDECIMPORTACAOUFTERCEIRO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17SnOk',fld:'vSNOK'},{av:'Gx_mode',fld:'vMODE'}],[{av:'AV17SnOk',fld:'vSNOK'}]];
   this.EvtParms["ENTER"] = [[{av:'AV16SnErro',fld:'vSNERRO'},{av:'AV18EntradaEmpresaId',fld:'vENTRADAEMPRESAID',hsh:true},{av:'AV19EntradaId',fld:'vENTRADAID',hsh:true},{av:'AV20EntradaItemSequencia',fld:'vENTRADAITEMSEQUENCIA',hsh:true},{av:'AV8DecImportacaoSequencia',fld:'vDECIMPORTACAOSEQUENCIA',hsh:true},{av:'AV10DecImportacaoNoDI',fld:'vDECIMPORTACAONODI'},{av:'AV11DecImportacaoDataRegistro',fld:'vDECIMPORTACAODATAREGISTRO'},{av:'AV12DecImportacaoExportador',fld:'vDECIMPORTACAOEXPORTADOR'},{av:'AV13DecImportacaoUFDesembaraco',fld:'vDECIMPORTACAOUFDESEMBARACO'},{av:'AV14DecImportacaoLocalDesembaraco',fld:'vDECIMPORTACAOLOCALDESEMBARACO'},{av:'AV15DecImportacaoDataDesembaraco',fld:'vDECIMPORTACAODATADESEMBARACO'},{av:'AV25DecImportacaoTpViaTransp',fld:'vDECIMPORTACAOTPVIATRANSP'},{av:'AV24DecImportacaovAFRMM',fld:'vDECIMPORTACAOVAFRMM'},{av:'AV22DecImportacaoTpIntermedio',fld:'vDECIMPORTACAOTPINTERMEDIO'},{av:'AV21DecImportacaoCNPJAdq',fld:'vDECIMPORTACAOCNPJADQ'},{av:'AV23DecImportacaoUfTerceiro',fld:'vDECIMPORTACAOUFTERCEIRO'},{av:'Gx_mode',fld:'vMODE'},{av:'AV17SnOk',fld:'vSNOK'}],[{av:'AV8DecImportacaoSequencia',fld:'vDECIMPORTACAOSEQUENCIA',hsh:true},{av:'AV17SnOk',fld:'vSNOK'},{av:'AV16SnErro',fld:'vSNERRO'},{av:'AV26ErroCNPJ',fld:'vERROCNPJ'}]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV18EntradaEmpresaId", "vENTRADAEMPRESAID", 0, "char");
   this.setVCMap("AV19EntradaId", "vENTRADAID", 0, "int");
   this.setVCMap("AV20EntradaItemSequencia", "vENTRADAITEMSEQUENCIA", 0, "int");
   this.setVCMap("AV8DecImportacaoSequencia", "vDECIMPORTACAOSEQUENCIA", 0, "int");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarentradadecimportacao());
