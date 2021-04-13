/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:59:48.22
*/
gx.evt.autoSkip = false;
gx.define('hsuspenderclienteatraso', false, function () {
   this.ServerClass =  "hsuspenderclienteatraso" ;
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
      this.AV14EmpresaClassificacaoEmpresaId=gx.fn.getControlValue("vEMPRESACLASSIFICACAOEMPRESAID") ;
      this.AV16EmpresaPadraoCod=gx.fn.getControlValue("vEMPRESAPADRAOCOD") ;
   };
   this.Validv_Filialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e1220k2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1320k2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1520k2_client=function()
   {
      this.executeServerEvent("VFILIALID.ISVALID", true, null, false, true);
   };
   this.e1620k2_client=function()
   {
      this.executeServerEvent("VCLASSIFICACAOID.CLICK", true, null, false, true);
   };
   this.e1720k2_client=function()
   {
      this.executeServerEvent("VCLASSIFICACAOIDDESP.CLICK", true, null, false, true);
   };
   this.e1820k2_client=function()
   {
      this.executeServerEvent("'PARAMETROS'", true, null, false, false);
   };
   this.e2020k2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,6,9,13,16,20,22,25,27,31,37,41,43,46,48,52,55,58,60,61,64,66,69,71,73,76,78,81,83,85,88,90,93,95,97,100,102,105,107,109,112,114,117,119,121,124,126,129,131,134,136,138,141,143,146,148,151,153,155,158,160,163,165,168,170,172,175,177,180,182,185,187,189,219,225,226,227,229,230,231,232,233,234,235,236,237,238,239,240,241];
   this.GXLastCtrlId =241;
   this.TABCSSContainer = gx.uc.getNew(this, 5, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV42Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV42Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV42Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "hrelacaocontas_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TAB1",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVOLTARNORMAL",gxz:"ZV41SnVoltarNormal",gxold:"OV41SnVoltarNormal",gxvar:"AV41SnVoltarNormal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV41SnVoltarNormal=Value},v2z:function(Value){gx.O.ZV41SnVoltarNormal=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNVOLTARNORMAL",gx.O.AV41SnVoltarNormal,"S")},c2v:function(){gx.O.AV41SnVoltarNormal=this.val()},val:function(){return gx.fn.getControlValue("vSNVOLTARNORMAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[16]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTVENCANTERIOR",gxz:"ZV13DtVencAnterior",gxold:"OV13DtVencAnterior",gxvar:"AV13DtVencAnterior",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13DtVencAnterior=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV13DtVencAnterior=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTVENCANTERIOR",gx.O.AV13DtVencAnterior,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV13DtVencAnterior=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTVENCANTERIOR")},nac:gx.falseFn};
   this.declareDomainHdlr( 22 , function() {
   });
   GXValidFnc[25]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEMINCONTASABE",gxz:"ZV36QtdeMinContasAbe",gxold:"OV36QtdeMinContasAbe",gxvar:"AV36QtdeMinContasAbe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36QtdeMinContasAbe=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36QtdeMinContasAbe=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEMINCONTASABE",gx.O.AV36QtdeMinContasAbe,0)},c2v:function(){gx.O.AV36QtdeMinContasAbe=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEMINCONTASABE",'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNDESCONSIDERARPARTEPAGTO",gxz:"ZV40SnDesconsiderarPartePagto",gxold:"OV40SnDesconsiderarPartePagto",gxvar:"AV40SnDesconsiderarPartePagto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV40SnDesconsiderarPartePagto=Value},v2z:function(Value){gx.O.ZV40SnDesconsiderarPartePagto=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNDESCONSIDERARPARTEPAGTO",gx.O.AV40SnDesconsiderarPartePagto,"S")},c2v:function(){gx.O.AV40SnDesconsiderarPartePagto=this.val()},val:function(){return gx.fn.getControlValue("vSNDESCONSIDERARPARTEPAGTO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[37]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[41]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEDIASATRASOQUITACAO",gxz:"ZV35QtdeDiasAtrasoQuitacao",gxold:"OV35QtdeDiasAtrasoQuitacao",gxvar:"AV35QtdeDiasAtrasoQuitacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35QtdeDiasAtrasoQuitacao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35QtdeDiasAtrasoQuitacao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEDIASATRASOQUITACAO",gx.O.AV35QtdeDiasAtrasoQuitacao,0)},c2v:function(){gx.O.AV35QtdeDiasAtrasoQuitacao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEDIASATRASOQUITACAO",'.')},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEMINCONTASQUI",gxz:"ZV37QtdeMinContasQui",gxold:"OV37QtdeMinContasQui",gxvar:"AV37QtdeMinContasQui",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37QtdeMinContasQui=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37QtdeMinContasQui=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEMINCONTASQUI",gx.O.AV37QtdeMinContasQui,0)},c2v:function(){gx.O.AV37QtdeMinContasQui=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEMINCONTASQUI",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TAB2",grid:0};
   GXValidFnc[55]={fld:"TABLE4",grid:0};
   GXValidFnc[58]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:'e1520k2_client',rgrid:[],fld:"vFILIALID",gxz:"ZV20FilialId",gxold:"OV20FilialId",gxvar:"AV20FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV20FilialId,0)},c2v:function(){gx.O.AV20FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALDESCRICAO",gxz:"ZV19FilialDescricao",gxold:"OV19FilialDescricao",gxvar:"AV19FilialDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19FilialDescricao=Value},v2z:function(Value){gx.O.ZV19FilialDescricao=Value},v2c:function(){gx.fn.setControlValue("vFILIALDESCRICAO",gx.O.AV19FilialDescricao,0)},c2v:function(){gx.O.AV19FilialDescricao=this.val()},val:function(){return gx.fn.getControlValue("vFILIALDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[66]={fld:"TABLE8",grid:0};
   GXValidFnc[69]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAIDINI",gxz:"ZV33PessoaIdIni",gxold:"OV33PessoaIdIni",gxvar:"AV33PessoaIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33PessoaIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33PessoaIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAIDINI",gx.O.AV33PessoaIdIni,0)},c2v:function(){gx.O.AV33PessoaIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[71]={fld:"TEXTBLOCK41", format:0,grid:0};
   GXValidFnc[73]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAIDFIM",gxz:"ZV32PessoaIdFim",gxold:"OV32PessoaIdFim",gxvar:"AV32PessoaIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32PessoaIdFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32PessoaIdFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAIDFIM",gx.O.AV32PessoaIdFim,0)},c2v:function(){gx.O.AV32PessoaIdFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAIDFIM",'.')},nac:gx.falseFn};
   GXValidFnc[76]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[78]={fld:"TABLE34",grid:0};
   GXValidFnc[81]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEIDINI",gxz:"ZV18EspecieIdIni",gxold:"OV18EspecieIdIni",gxvar:"AV18EspecieIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18EspecieIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18EspecieIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEIDINI",gx.O.AV18EspecieIdIni,0)},c2v:function(){gx.O.AV18EspecieIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[83]={fld:"TEXTBLOCK74", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEIDFIN",gxz:"ZV17EspecieIdFin",gxold:"OV17EspecieIdFin",gxvar:"AV17EspecieIdFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EspecieIdFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17EspecieIdFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEIDFIN",gx.O.AV17EspecieIdFin,0)},c2v:function(){gx.O.AV17EspecieIdFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEIDFIN",'.')},nac:gx.falseFn};
   GXValidFnc[88]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[90]={fld:"TABLE25",grid:0};
   GXValidFnc[93]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAIDINI",gxz:"ZV47TipoContaIdIni",gxold:"OV47TipoContaIdIni",gxvar:"AV47TipoContaIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47TipoContaIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47TipoContaIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTAIDINI",gx.O.AV47TipoContaIdIni,0)},c2v:function(){gx.O.AV47TipoContaIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTAIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[95]={fld:"TEXTBLOCK65", format:0,grid:0};
   GXValidFnc[97]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAIDFIN",gxz:"ZV46TipoContaIdFin",gxold:"OV46TipoContaIdFin",gxvar:"AV46TipoContaIdFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46TipoContaIdFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV46TipoContaIdFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTAIDFIN",gx.O.AV46TipoContaIdFin,0)},c2v:function(){gx.O.AV46TipoContaIdFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTAIDFIN",'.')},nac:gx.falseFn};
   GXValidFnc[100]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[102]={fld:"TABLE26",grid:0};
   GXValidFnc[105]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAIDINI",gxz:"ZV45TipoCobrancaIdIni",gxold:"OV45TipoCobrancaIdIni",gxvar:"AV45TipoCobrancaIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45TipoCobrancaIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45TipoCobrancaIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAIDINI",gx.O.AV45TipoCobrancaIdIni,0)},c2v:function(){gx.O.AV45TipoCobrancaIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBRANCAIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[107]={fld:"TEXTBLOCK66", format:0,grid:0};
   GXValidFnc[109]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAIDFIN",gxz:"ZV44TipoCobrancaIdFin",gxold:"OV44TipoCobrancaIdFin",gxvar:"AV44TipoCobrancaIdFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44TipoCobrancaIdFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44TipoCobrancaIdFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAIDFIN",gx.O.AV44TipoCobrancaIdFin,0)},c2v:function(){gx.O.AV44TipoCobrancaIdFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBRANCAIDFIN",'.')},nac:gx.falseFn};
   GXValidFnc[112]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[114]={fld:"TABLE46",grid:0};
   GXValidFnc[117]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTOIDINI",gxz:"ZV7CentroCustoIdIni",gxold:"OV7CentroCustoIdIni",gxvar:"AV7CentroCustoIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7CentroCustoIdIni=Value},v2z:function(Value){gx.O.ZV7CentroCustoIdIni=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOIDINI",gx.O.AV7CentroCustoIdIni,0)},c2v:function(){gx.O.AV7CentroCustoIdIni=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOIDINI")},nac:gx.falseFn};
   GXValidFnc[119]={fld:"TEXTBLOCK51", format:0,grid:0};
   GXValidFnc[121]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTOIDFIM",gxz:"ZV6CentroCustoIdFim",gxold:"OV6CentroCustoIdFim",gxvar:"AV6CentroCustoIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6CentroCustoIdFim=Value},v2z:function(Value){gx.O.ZV6CentroCustoIdFim=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOIDFIM",gx.O.AV6CentroCustoIdFim,0)},c2v:function(){gx.O.AV6CentroCustoIdFim=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOIDFIM")},nac:gx.falseFn};
   GXValidFnc[124]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[126]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOID",gxz:"ZV8ClassificacaoId",gxold:"OV8ClassificacaoId",gxvar:"AV8ClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV8ClassificacaoId=Value},v2z:function(Value){gx.O.ZV8ClassificacaoId=Value},v2c:function(){gx.fn.setComboBoxValue("vCLASSIFICACAOID",gx.O.AV8ClassificacaoId)},c2v:function(){gx.O.AV8ClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[129]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[131]={fld:"TABLE9",grid:0};
   GXValidFnc[134]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCCLASSIFICINI",gxz:"ZV31OpcClassificIni",gxold:"OV31OpcClassificIni",gxvar:"AV31OpcClassificIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV31OpcClassificIni=Value},v2z:function(Value){gx.O.ZV31OpcClassificIni=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCCLASSIFICINI",gx.O.AV31OpcClassificIni)},c2v:function(){gx.O.AV31OpcClassificIni=this.val()},val:function(){return gx.fn.getControlValue("vOPCCLASSIFICINI")},nac:gx.falseFn};
   GXValidFnc[136]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[138]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCCLASSIFICFIN",gxz:"ZV30OpcClassificFin",gxold:"OV30OpcClassificFin",gxvar:"AV30OpcClassificFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV30OpcClassificFin=Value},v2z:function(Value){gx.O.ZV30OpcClassificFin=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCCLASSIFICFIN",gx.O.AV30OpcClassificFin)},c2v:function(){gx.O.AV30OpcClassificFin=this.val()},val:function(){return gx.fn.getControlValue("vOPCCLASSIFICFIN")},nac:gx.falseFn};
   GXValidFnc[141]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[143]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIFICACAOID",gxz:"ZV11CodificacaoId",gxold:"OV11CodificacaoId",gxvar:"AV11CodificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV11CodificacaoId=Value},v2z:function(Value){gx.O.ZV11CodificacaoId=Value},v2c:function(){gx.fn.setComboBoxValue("vCODIFICACAOID",gx.O.AV11CodificacaoId)},c2v:function(){gx.O.AV11CodificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vCODIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[146]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[148]={fld:"TABLE10",grid:0};
   GXValidFnc[151]={lvl:0,type:"char",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCODIFICINIT",gxz:"ZV53ValorCodificInit",gxold:"OV53ValorCodificInit",gxvar:"AV53ValorCodificInit",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53ValorCodificInit=Value},v2z:function(Value){gx.O.ZV53ValorCodificInit=Value},v2c:function(){gx.fn.setControlValue("vVALORCODIFICINIT",gx.O.AV53ValorCodificInit,0)},c2v:function(){gx.O.AV53ValorCodificInit=this.val()},val:function(){return gx.fn.getControlValue("vVALORCODIFICINIT")},nac:gx.falseFn};
   GXValidFnc[153]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[155]={lvl:0,type:"char",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCODIFICFIN",gxz:"ZV52ValorCodificFin",gxold:"OV52ValorCodificFin",gxvar:"AV52ValorCodificFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52ValorCodificFin=Value},v2z:function(Value){gx.O.ZV52ValorCodificFin=Value},v2c:function(){gx.fn.setControlValue("vVALORCODIFICFIN",gx.O.AV52ValorCodificFin,0)},c2v:function(){gx.O.AV52ValorCodificFin=this.val()},val:function(){return gx.fn.getControlValue("vVALORCODIFICFIN")},nac:gx.falseFn};
   GXValidFnc[158]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[160]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOIDDESP",gxz:"ZV9ClassificacaoIdDesp",gxold:"OV9ClassificacaoIdDesp",gxvar:"AV9ClassificacaoIdDesp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV9ClassificacaoIdDesp=Value},v2z:function(Value){gx.O.ZV9ClassificacaoIdDesp=Value},v2c:function(){gx.fn.setComboBoxValue("vCLASSIFICACAOIDDESP",gx.O.AV9ClassificacaoIdDesp)},c2v:function(){gx.O.AV9ClassificacaoIdDesp=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOIDDESP")},nac:gx.falseFn};
   GXValidFnc[163]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[165]={fld:"TABLE12",grid:0};
   GXValidFnc[168]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCCLASSDESPINI",gxz:"ZV29OpcClassDespIni",gxold:"OV29OpcClassDespIni",gxvar:"AV29OpcClassDespIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV29OpcClassDespIni=Value},v2z:function(Value){gx.O.ZV29OpcClassDespIni=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCCLASSDESPINI",gx.O.AV29OpcClassDespIni)},c2v:function(){gx.O.AV29OpcClassDespIni=this.val()},val:function(){return gx.fn.getControlValue("vOPCCLASSDESPINI")},nac:gx.falseFn};
   GXValidFnc[170]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[172]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCCLASSDESPFIN",gxz:"ZV28OpcClassDespFin",gxold:"OV28OpcClassDespFin",gxvar:"AV28OpcClassDespFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28OpcClassDespFin=Value},v2z:function(Value){gx.O.ZV28OpcClassDespFin=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCCLASSDESPFIN",gx.O.AV28OpcClassDespFin)},c2v:function(){gx.O.AV28OpcClassDespFin=this.val()},val:function(){return gx.fn.getControlValue("vOPCCLASSDESPFIN")},nac:gx.falseFn};
   GXValidFnc[175]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[177]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIFICACAODESPID",gxz:"ZV10CodificacaoDespId",gxold:"OV10CodificacaoDespId",gxvar:"AV10CodificacaoDespId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV10CodificacaoDespId=Value},v2z:function(Value){gx.O.ZV10CodificacaoDespId=Value},v2c:function(){gx.fn.setComboBoxValue("vCODIFICACAODESPID",gx.O.AV10CodificacaoDespId)},c2v:function(){gx.O.AV10CodificacaoDespId=this.val()},val:function(){return gx.fn.getControlValue("vCODIFICACAODESPID")},nac:gx.falseFn};
   GXValidFnc[180]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[182]={fld:"TABLE11",grid:0};
   GXValidFnc[185]={lvl:0,type:"char",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCODIFDESPINI",gxz:"ZV51ValorCodifDespIni",gxold:"OV51ValorCodifDespIni",gxvar:"AV51ValorCodifDespIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51ValorCodifDespIni=Value},v2z:function(Value){gx.O.ZV51ValorCodifDespIni=Value},v2c:function(){gx.fn.setControlValue("vVALORCODIFDESPINI",gx.O.AV51ValorCodifDespIni,0)},c2v:function(){gx.O.AV51ValorCodifDespIni=this.val()},val:function(){return gx.fn.getControlValue("vVALORCODIFDESPINI")},nac:gx.falseFn};
   GXValidFnc[187]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[189]={lvl:0,type:"char",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCODIFDESPFIN",gxz:"ZV50ValorCodifDespFin",gxold:"OV50ValorCodifDespFin",gxvar:"AV50ValorCodifDespFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50ValorCodifDespFin=Value},v2z:function(Value){gx.O.ZV50ValorCodifDespFin=Value},v2c:function(){gx.fn.setControlValue("vVALORCODIFDESPFIN",gx.O.AV50ValorCodifDespFin,0)},c2v:function(){gx.O.AV50ValorCodifDespFin=this.val()},val:function(){return gx.fn.getControlValue("vVALORCODIFDESPFIN")},nac:gx.falseFn};
   GXValidFnc[219]={fld:"TABLE2",grid:0};
   GXValidFnc[225]={fld:"JS", format:2,grid:0};
   GXValidFnc[226]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV38Sim",gxold:"OV38Sim",gxvar:"AV38Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38Sim=Value},v2z:function(Value){gx.O.ZV38Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV38Sim,0)},c2v:function(){gx.O.AV38Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[227]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV27Nao",gxold:"OV27Nao",gxvar:"AV27Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27Nao=Value},v2z:function(Value){gx.O.ZV27Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV27Nao,0)},c2v:function(){gx.O.AV27Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[229]={fld:"BTNPARAMETROS",grid:0};
   GXValidFnc[230]={fld:"BTNHELP",grid:0};
   GXValidFnc[231]={fld:"PROMPT_FILIALID",grid:0};
   GXValidFnc[232]={fld:"PROMPT_PESSOAIDINI",grid:0};
   GXValidFnc[233]={fld:"PROMPT_PESSOAIDFIM",grid:0};
   GXValidFnc[234]={fld:"PROMPT_ESPECIEIDINI",grid:0};
   GXValidFnc[235]={fld:"PROMPT_ESPECIEIDFIN",grid:0};
   GXValidFnc[236]={fld:"PROMPT_TIPOCONTAIDINI",grid:0};
   GXValidFnc[237]={fld:"PROMPT_TIPOCONTAIDFIN",grid:0};
   GXValidFnc[238]={fld:"PROMPT_TIPOCOBRANCAIDINI",grid:0};
   GXValidFnc[239]={fld:"PROMPT_TIPOCOBRANCAIDFIN",grid:0};
   GXValidFnc[240]={fld:"PROMPT_CENTROCUSTOIDINI",grid:0};
   GXValidFnc[241]={fld:"PROMPT_CENTROCUSTOIDFIM",grid:0};
   this.AV41SnVoltarNormal = "" ;
   this.ZV41SnVoltarNormal = "" ;
   this.OV41SnVoltarNormal = "" ;
   this.AV13DtVencAnterior = gx.date.nullDate() ;
   this.ZV13DtVencAnterior = gx.date.nullDate() ;
   this.OV13DtVencAnterior = gx.date.nullDate() ;
   this.AV36QtdeMinContasAbe = 0 ;
   this.ZV36QtdeMinContasAbe = 0 ;
   this.OV36QtdeMinContasAbe = 0 ;
   this.AV40SnDesconsiderarPartePagto = "" ;
   this.ZV40SnDesconsiderarPartePagto = "" ;
   this.OV40SnDesconsiderarPartePagto = "" ;
   this.AV35QtdeDiasAtrasoQuitacao = 0 ;
   this.ZV35QtdeDiasAtrasoQuitacao = 0 ;
   this.OV35QtdeDiasAtrasoQuitacao = 0 ;
   this.AV37QtdeMinContasQui = 0 ;
   this.ZV37QtdeMinContasQui = 0 ;
   this.OV37QtdeMinContasQui = 0 ;
   this.AV20FilialId = 0 ;
   this.ZV20FilialId = 0 ;
   this.OV20FilialId = 0 ;
   this.AV19FilialDescricao = "" ;
   this.ZV19FilialDescricao = "" ;
   this.OV19FilialDescricao = "" ;
   this.AV33PessoaIdIni = 0 ;
   this.ZV33PessoaIdIni = 0 ;
   this.OV33PessoaIdIni = 0 ;
   this.AV32PessoaIdFim = 0 ;
   this.ZV32PessoaIdFim = 0 ;
   this.OV32PessoaIdFim = 0 ;
   this.AV18EspecieIdIni = 0 ;
   this.ZV18EspecieIdIni = 0 ;
   this.OV18EspecieIdIni = 0 ;
   this.AV17EspecieIdFin = 0 ;
   this.ZV17EspecieIdFin = 0 ;
   this.OV17EspecieIdFin = 0 ;
   this.AV47TipoContaIdIni = 0 ;
   this.ZV47TipoContaIdIni = 0 ;
   this.OV47TipoContaIdIni = 0 ;
   this.AV46TipoContaIdFin = 0 ;
   this.ZV46TipoContaIdFin = 0 ;
   this.OV46TipoContaIdFin = 0 ;
   this.AV45TipoCobrancaIdIni = 0 ;
   this.ZV45TipoCobrancaIdIni = 0 ;
   this.OV45TipoCobrancaIdIni = 0 ;
   this.AV44TipoCobrancaIdFin = 0 ;
   this.ZV44TipoCobrancaIdFin = 0 ;
   this.OV44TipoCobrancaIdFin = 0 ;
   this.AV7CentroCustoIdIni = "" ;
   this.ZV7CentroCustoIdIni = "" ;
   this.OV7CentroCustoIdIni = "" ;
   this.AV6CentroCustoIdFim = "" ;
   this.ZV6CentroCustoIdFim = "" ;
   this.OV6CentroCustoIdFim = "" ;
   this.AV8ClassificacaoId = "" ;
   this.ZV8ClassificacaoId = "" ;
   this.OV8ClassificacaoId = "" ;
   this.AV31OpcClassificIni = "" ;
   this.ZV31OpcClassificIni = "" ;
   this.OV31OpcClassificIni = "" ;
   this.AV30OpcClassificFin = "" ;
   this.ZV30OpcClassificFin = "" ;
   this.OV30OpcClassificFin = "" ;
   this.AV11CodificacaoId = "" ;
   this.ZV11CodificacaoId = "" ;
   this.OV11CodificacaoId = "" ;
   this.AV53ValorCodificInit = "" ;
   this.ZV53ValorCodificInit = "" ;
   this.OV53ValorCodificInit = "" ;
   this.AV52ValorCodificFin = "" ;
   this.ZV52ValorCodificFin = "" ;
   this.OV52ValorCodificFin = "" ;
   this.AV9ClassificacaoIdDesp = "" ;
   this.ZV9ClassificacaoIdDesp = "" ;
   this.OV9ClassificacaoIdDesp = "" ;
   this.AV29OpcClassDespIni = "" ;
   this.ZV29OpcClassDespIni = "" ;
   this.OV29OpcClassDespIni = "" ;
   this.AV28OpcClassDespFin = "" ;
   this.ZV28OpcClassDespFin = "" ;
   this.OV28OpcClassDespFin = "" ;
   this.AV10CodificacaoDespId = "" ;
   this.ZV10CodificacaoDespId = "" ;
   this.OV10CodificacaoDespId = "" ;
   this.AV51ValorCodifDespIni = "" ;
   this.ZV51ValorCodifDespIni = "" ;
   this.OV51ValorCodifDespIni = "" ;
   this.AV50ValorCodifDespFin = "" ;
   this.ZV50ValorCodifDespFin = "" ;
   this.OV50ValorCodifDespFin = "" ;
   this.AV38Sim = "" ;
   this.ZV38Sim = "" ;
   this.OV38Sim = "" ;
   this.AV27Nao = "" ;
   this.ZV27Nao = "" ;
   this.OV27Nao = "" ;
   this.AV42Tab = [ ] ;
   this.AV41SnVoltarNormal = "" ;
   this.AV13DtVencAnterior = gx.date.nullDate() ;
   this.AV36QtdeMinContasAbe = 0 ;
   this.AV40SnDesconsiderarPartePagto = "" ;
   this.AV35QtdeDiasAtrasoQuitacao = 0 ;
   this.AV37QtdeMinContasQui = 0 ;
   this.AV20FilialId = 0 ;
   this.AV19FilialDescricao = "" ;
   this.AV33PessoaIdIni = 0 ;
   this.AV32PessoaIdFim = 0 ;
   this.AV18EspecieIdIni = 0 ;
   this.AV17EspecieIdFin = 0 ;
   this.AV47TipoContaIdIni = 0 ;
   this.AV46TipoContaIdFin = 0 ;
   this.AV45TipoCobrancaIdIni = 0 ;
   this.AV44TipoCobrancaIdFin = 0 ;
   this.AV7CentroCustoIdIni = "" ;
   this.AV6CentroCustoIdFim = "" ;
   this.AV8ClassificacaoId = "" ;
   this.AV31OpcClassificIni = "" ;
   this.AV30OpcClassificFin = "" ;
   this.AV11CodificacaoId = "" ;
   this.AV53ValorCodificInit = "" ;
   this.AV52ValorCodificFin = "" ;
   this.AV9ClassificacaoIdDesp = "" ;
   this.AV29OpcClassDespIni = "" ;
   this.AV28OpcClassDespFin = "" ;
   this.AV10CodificacaoDespId = "" ;
   this.AV51ValorCodifDespIni = "" ;
   this.AV50ValorCodifDespFin = "" ;
   this.AV38Sim = "" ;
   this.AV27Nao = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.A162EmpresaClassificacaoEmpresaId = "" ;
   this.A54ClassificacaoId = "" ;
   this.A56OpcaoClassificacaoId = "" ;
   this.A57OpcaoClassificacaoDescricao = "" ;
   this.Events = {"e1220k2_client": ["ENTER", true] ,"e1320k2_client": ["'FECHAR'", true] ,"e1520k2_client": ["VFILIALID.ISVALID", true] ,"e1620k2_client": ["VCLASSIFICACAOID.CLICK", true] ,"e1720k2_client": ["VCLASSIFICACAOIDDESP.CLICK", true] ,"e1820k2_client": ["'PARAMETROS'", true] ,"e2020k2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV36QtdeMinContasAbe',fld:'vQTDEMINCONTASABE'},{av:'AV35QtdeDiasAtrasoQuitacao',fld:'vQTDEDIASATRASOQUITACAO'},{av:'AV37QtdeMinContasQui',fld:'vQTDEMINCONTASQUI'},{av:'AV13DtVencAnterior',fld:'vDTVENCANTERIOR'},{av:'AV21FilialUnica',fld:'vFILIALUNICA'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV5FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV8ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV9ClassificacaoIdDesp',fld:'vCLASSIFICACAOIDDESP'},{av:'AV41SnVoltarNormal',fld:'vSNVOLTARNORMAL'},{av:'AV40SnDesconsiderarPartePagto',fld:'vSNDESCONSIDERARPARTEPAGTO'},{av:'AV20FilialId',fld:'vFILIALID'},{av:'AV33PessoaIdIni',fld:'vPESSOAIDINI'},{av:'AV32PessoaIdFim',fld:'vPESSOAIDFIM'},{av:'AV18EspecieIdIni',fld:'vESPECIEIDINI'},{av:'AV17EspecieIdFin',fld:'vESPECIEIDFIN'},{av:'AV47TipoContaIdIni',fld:'vTIPOCONTAIDINI'},{av:'AV46TipoContaIdFin',fld:'vTIPOCONTAIDFIN'},{av:'AV45TipoCobrancaIdIni',fld:'vTIPOCOBRANCAIDINI'},{av:'AV44TipoCobrancaIdFin',fld:'vTIPOCOBRANCAIDFIN'},{av:'AV7CentroCustoIdIni',fld:'vCENTROCUSTOIDINI'},{av:'AV6CentroCustoIdFim',fld:'vCENTROCUSTOIDFIM'},{av:'AV31OpcClassificIni',fld:'vOPCCLASSIFICINI'},{av:'AV30OpcClassificFin',fld:'vOPCCLASSIFICFIN'},{av:'AV11CodificacaoId',fld:'vCODIFICACAOID'},{av:'AV53ValorCodificInit',fld:'vVALORCODIFICINIT'},{av:'AV52ValorCodificFin',fld:'vVALORCODIFICFIN'},{av:'AV29OpcClassDespIni',fld:'vOPCCLASSDESPINI'},{av:'AV28OpcClassDespFin',fld:'vOPCCLASSDESPFIN'},{av:'AV10CodificacaoDespId',fld:'vCODIFICACAODESPID'},{av:'AV51ValorCodifDespIni',fld:'vVALORCODIFDESPINI'},{av:'AV50ValorCodifDespFin',fld:'vVALORCODIFDESPFIN'},{av:'AV61Pgmname',fld:'vPGMNAME'},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV14EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'}],[{av:'AV36QtdeMinContasAbe',fld:'vQTDEMINCONTASABE'},{av:'AV35QtdeDiasAtrasoQuitacao',fld:'vQTDEDIASATRASOQUITACAO'},{av:'AV37QtdeMinContasQui',fld:'vQTDEMINCONTASQUI'},{av:'gx.fn.getCtrlProperty("vFILIALID","Enabled")',ctrl:'vFILIALID',prop:'Enabled'},{av:'AV20FilialId',fld:'vFILIALID'},{av:'AV19FilialDescricao',fld:'vFILIALDESCRICAO'},{av:'AV55OpcoesTxtTela',fld:'vOPCOESTXTTELA'},{av:'AV31OpcClassificIni',fld:'vOPCCLASSIFICINI'},{av:'AV30OpcClassificFin',fld:'vOPCCLASSIFICFIN'},{av:'AV29OpcClassDespIni',fld:'vOPCCLASSDESPINI'},{av:'AV28OpcClassDespFin',fld:'vOPCCLASSDESPFIN'}]];
   this.EvtParms["ENTER"] = [[{av:'AV48TpErro',fld:'vTPERRO'},{av:'AV13DtVencAnterior',fld:'vDTVENCANTERIOR'},{av:'AV37QtdeMinContasQui',fld:'vQTDEMINCONTASQUI'},{av:'AV35QtdeDiasAtrasoQuitacao',fld:'vQTDEDIASATRASOQUITACAO'},{av:'AV20FilialId',fld:'vFILIALID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV5FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV33PessoaIdIni',fld:'vPESSOAIDINI'},{av:'AV32PessoaIdFim',fld:'vPESSOAIDFIM'},{av:'AV18EspecieIdIni',fld:'vESPECIEIDINI'},{av:'AV17EspecieIdFin',fld:'vESPECIEIDFIN'},{av:'AV47TipoContaIdIni',fld:'vTIPOCONTAIDINI'},{av:'AV46TipoContaIdFin',fld:'vTIPOCONTAIDFIN'},{av:'AV45TipoCobrancaIdIni',fld:'vTIPOCOBRANCAIDINI'},{av:'AV44TipoCobrancaIdFin',fld:'vTIPOCOBRANCAIDFIN'},{av:'AV7CentroCustoIdIni',fld:'vCENTROCUSTOIDINI'},{av:'AV6CentroCustoIdFim',fld:'vCENTROCUSTOIDFIM'},{av:'AV8ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV31OpcClassificIni',fld:'vOPCCLASSIFICINI'},{av:'AV30OpcClassificFin',fld:'vOPCCLASSIFICFIN'},{av:'AV11CodificacaoId',fld:'vCODIFICACAOID'},{av:'AV53ValorCodificInit',fld:'vVALORCODIFICINIT'},{av:'AV52ValorCodificFin',fld:'vVALORCODIFICFIN'},{av:'AV9ClassificacaoIdDesp',fld:'vCLASSIFICACAOIDDESP'},{av:'AV29OpcClassDespIni',fld:'vOPCCLASSDESPINI'},{av:'AV28OpcClassDespFin',fld:'vOPCCLASSDESPFIN'},{av:'AV10CodificacaoDespId',fld:'vCODIFICACAODESPID'},{av:'AV51ValorCodifDespIni',fld:'vVALORCODIFDESPINI'},{av:'AV50ValorCodifDespFin',fld:'vVALORCODIFDESPFIN'}],[{av:'AV48TpErro',fld:'vTPERRO'},{av:'AV63GXLvl110',fld:'vGXLVL110'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["VFILIALID.ISVALID"] = [[{av:'AV20FilialId',fld:'vFILIALID'}],[{av:'AV19FilialDescricao',fld:'vFILIALDESCRICAO'}]];
   this.EvtParms["VCLASSIFICACAOID.CLICK"] = [[{av:'AV8ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV14EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV9ClassificacaoIdDesp',fld:'vCLASSIFICACAOIDDESP'}],[{av:'AV31OpcClassificIni',fld:'vOPCCLASSIFICINI'},{av:'AV30OpcClassificFin',fld:'vOPCCLASSIFICFIN'},{av:'AV29OpcClassDespIni',fld:'vOPCCLASSDESPINI'},{av:'AV28OpcClassDespFin',fld:'vOPCCLASSDESPFIN'}]];
   this.EvtParms["VCLASSIFICACAOIDDESP.CLICK"] = [[{av:'AV8ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV14EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV9ClassificacaoIdDesp',fld:'vCLASSIFICACAOIDDESP'}],[{av:'AV31OpcClassificIni',fld:'vOPCCLASSIFICINI'},{av:'AV30OpcClassificFin',fld:'vOPCCLASSIFICFIN'},{av:'AV29OpcClassDespIni',fld:'vOPCCLASSDESPINI'},{av:'AV28OpcClassDespFin',fld:'vOPCCLASSDESPFIN'}]];
   this.EvtParms["'PARAMETROS'"] = [[],[]];
   this.setPrompt("PROMPT_FILIALID", [60]);
   this.setPrompt("PROMPT_PESSOAIDINI", [69]);
   this.setPrompt("PROMPT_PESSOAIDFIM", [73]);
   this.setPrompt("PROMPT_ESPECIEIDINI", [81]);
   this.setPrompt("PROMPT_ESPECIEIDFIN", [85]);
   this.setPrompt("PROMPT_TIPOCONTAIDINI", [93]);
   this.setPrompt("PROMPT_TIPOCONTAIDFIN", [97]);
   this.setPrompt("PROMPT_TIPOCOBRANCAIDINI", [105]);
   this.setPrompt("PROMPT_TIPOCOBRANCAIDFIN", [109]);
   this.setPrompt("PROMPT_CENTROCUSTOIDINI", [117]);
   this.setPrompt("PROMPT_CENTROCUSTOIDFIM", [121]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV14EmpresaClassificacaoEmpresaId", "vEMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("AV16EmpresaPadraoCod", "vEMPRESAPADRAOCOD", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hsuspenderclienteatraso());