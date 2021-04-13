/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:13:32.80
*/
gx.evt.autoSkip = false;
gx.define('hchequeemitido', false, function () {
   this.ServerClass =  "hchequeemitido" ;
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
   };
   this.e11bf2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13bf2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15bf2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e16bf2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e17bf2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e19bf2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,23,26,30,34,38,42,46,51,54,56,59,61,63,66,68,71,73,75,78,80,83,85,87,90,92,95,97,99,102,104,107,109,111,120,121,123,124,125];
   this.GXLastCtrlId =125;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABTXT",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV48TxtTela",gxold:"OV48TxtTela",gxvar:"AV48TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV48TxtTela=Value},v2z:function(Value){gx.O.ZV48TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV48TxtTela)},c2v:function(){gx.O.AV48TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"IMAGE2",grid:0};
   GXValidFnc[17]={fld:"IMAGE1",grid:0};
   GXValidFnc[20]={fld:"TABLE7",grid:0};
   GXValidFnc[23]={fld:"TABLE11",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCHEQUEDTCOBRANCA",gxz:"ZV31SnChequeDtCobranca",gxold:"OV31SnChequeDtCobranca",gxvar:"AV31SnChequeDtCobranca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV31SnChequeDtCobranca=Value},v2z:function(Value){gx.O.ZV31SnChequeDtCobranca=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNCHEQUEDTCOBRANCA",gx.O.AV31SnChequeDtCobranca,"S")},c2v:function(){gx.O.AV31SnChequeDtCobranca=this.val()},val:function(){return gx.fn.getControlValue("vSNCHEQUEDTCOBRANCA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCHEQUENAOCOBRADO",gxz:"ZV32SnChequeNaoCobrado",gxold:"OV32SnChequeNaoCobrado",gxvar:"AV32SnChequeNaoCobrado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV32SnChequeNaoCobrado=Value},v2z:function(Value){gx.O.ZV32SnChequeNaoCobrado=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNCHEQUENAOCOBRADO",gx.O.AV32SnChequeNaoCobrado,"S")},c2v:function(){gx.O.AV32SnChequeNaoCobrado=this.val()},val:function(){return gx.fn.getControlValue("vSNCHEQUENAOCOBRADO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[38]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPOBSER",gxz:"ZV20ImpObser",gxold:"OV20ImpObser",gxvar:"AV20ImpObser",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV20ImpObser=Value},v2z:function(Value){gx.O.ZV20ImpObser=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPOBSER",gx.O.AV20ImpObser,"S")},c2v:function(){gx.O.AV20ImpObser=this.val()},val:function(){return gx.fn.getControlValue("vIMPOBSER")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[42]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNIMPRIMIRESPECIE",gxz:"ZV37SnImprimirEspecie",gxold:"OV37SnImprimirEspecie",gxvar:"AV37SnImprimirEspecie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV37SnImprimirEspecie=Value},v2z:function(Value){gx.O.ZV37SnImprimirEspecie=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNIMPRIMIRESPECIE",gx.O.AV37SnImprimirEspecie,"S")},c2v:function(){gx.O.AV37SnImprimirEspecie=this.val()},val:function(){return gx.fn.getControlValue("vSNIMPRIMIRESPECIE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[46]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNGERARCSV",gxz:"ZV38SnGerarCSV",gxold:"OV38SnGerarCSV",gxvar:"AV38SnGerarCSV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV38SnGerarCSV=Value},v2z:function(Value){gx.O.ZV38SnGerarCSV=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNGERARCSV",gx.O.AV38SnGerarCSV,"S")},c2v:function(){gx.O.AV38SnGerarCSV=this.val()},val:function(){return gx.fn.getControlValue("vSNGERARCSV")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[51]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[54]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[56]={fld:"TABLE3",grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXABANCOINI",gxz:"ZV21CaixaBancoIni",gxold:"OV21CaixaBancoIni",gxvar:"AV21CaixaBancoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21CaixaBancoIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21CaixaBancoIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXABANCOINI",gx.O.AV21CaixaBancoIni,0)},c2v:function(){gx.O.AV21CaixaBancoIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXABANCOINI",'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[63]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXABANCOFIN",gxz:"ZV22CaixaBancoFin",gxold:"OV22CaixaBancoFin",gxvar:"AV22CaixaBancoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22CaixaBancoFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22CaixaBancoFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXABANCOFIN",gx.O.AV22CaixaBancoFin,0)},c2v:function(){gx.O.AV22CaixaBancoFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXABANCOFIN",'.')},nac:gx.falseFn};
   GXValidFnc[66]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[68]={fld:"TABLE12",grid:0};
   GXValidFnc[71]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTAEMISSAOINI",gxz:"ZV23DtaEmissaoIni",gxold:"OV23DtaEmissaoIni",gxvar:"AV23DtaEmissaoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23DtaEmissaoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV23DtaEmissaoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTAEMISSAOINI",gx.O.AV23DtaEmissaoIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV23DtaEmissaoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTAEMISSAOINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 71 , function() {
   });
   GXValidFnc[73]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTAEMISSAOFIN",gxz:"ZV24DtaEmissaoFin",gxold:"OV24DtaEmissaoFin",gxvar:"AV24DtaEmissaoFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24DtaEmissaoFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV24DtaEmissaoFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTAEMISSAOFIN",gx.O.AV24DtaEmissaoFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV24DtaEmissaoFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTAEMISSAOFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 75 , function() {
   });
   GXValidFnc[78]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[80]={fld:"TABLE13",grid:0};
   GXValidFnc[83]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTACOBINI",gxz:"ZV26DtaCobIni",gxold:"OV26DtaCobIni",gxvar:"AV26DtaCobIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26DtaCobIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV26DtaCobIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTACOBINI",gx.O.AV26DtaCobIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV26DtaCobIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTACOBINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 83 , function() {
   });
   GXValidFnc[85]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[87]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTACOBFIN",gxz:"ZV27DtaCobFin",gxold:"OV27DtaCobFin",gxvar:"AV27DtaCobFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27DtaCobFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV27DtaCobFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTACOBFIN",gx.O.AV27DtaCobFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV27DtaCobFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTACOBFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 87 , function() {
   });
   GXValidFnc[90]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[92]={fld:"TABLE14",grid:0};
   GXValidFnc[95]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNUMCHEQUEINI",gxz:"ZV29NumChequeIni",gxold:"OV29NumChequeIni",gxvar:"AV29NumChequeIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29NumChequeIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29NumChequeIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNUMCHEQUEINI",gx.O.AV29NumChequeIni,0)},c2v:function(){gx.O.AV29NumChequeIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMCHEQUEINI",'.')},nac:gx.falseFn};
   GXValidFnc[97]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNUMCHEQUEFIN",gxz:"ZV28NumChequeFin",gxold:"OV28NumChequeFin",gxvar:"AV28NumChequeFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28NumChequeFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28NumChequeFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNUMCHEQUEFIN",gx.O.AV28NumChequeFin,0)},c2v:function(){gx.O.AV28NumChequeFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMCHEQUEFIN",'.')},nac:gx.falseFn};
   GXValidFnc[102]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[104]={fld:"TABLE15",grid:0};
   GXValidFnc[107]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESCHEQUE",gxz:"ZV33MesCheque",gxold:"OV33MesCheque",gxvar:"AV33MesCheque",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33MesCheque=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33MesCheque=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESCHEQUE",gx.O.AV33MesCheque,0)},c2v:function(){gx.O.AV33MesCheque=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESCHEQUE",'.')},nac:gx.falseFn};
   GXValidFnc[109]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[111]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOCHEQUE",gxz:"ZV34AnoCheque",gxold:"OV34AnoCheque",gxvar:"AV34AnoCheque",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34AnoCheque=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34AnoCheque=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOCHEQUE",gx.O.AV34AnoCheque,0)},c2v:function(){gx.O.AV34AnoCheque=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOCHEQUE",'.')},nac:gx.falseFn};
   GXValidFnc[120]={fld:"JS", format:2,grid:0};
   GXValidFnc[121]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV66Nao",gxold:"OV66Nao",gxvar:"AV66Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66Nao=Value},v2z:function(Value){gx.O.ZV66Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV66Nao,0)},c2v:function(){gx.O.AV66Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[123]={fld:"BTNHELP",grid:0};
   GXValidFnc[124]={fld:"PROMPT_CAIXABANCOINI",grid:0};
   GXValidFnc[125]={fld:"PROMPT_CAIXABANCOFIN",grid:0};
   this.AV48TxtTela = "" ;
   this.ZV48TxtTela = "" ;
   this.OV48TxtTela = "" ;
   this.AV31SnChequeDtCobranca = "" ;
   this.ZV31SnChequeDtCobranca = "" ;
   this.OV31SnChequeDtCobranca = "" ;
   this.AV32SnChequeNaoCobrado = "" ;
   this.ZV32SnChequeNaoCobrado = "" ;
   this.OV32SnChequeNaoCobrado = "" ;
   this.AV20ImpObser = "" ;
   this.ZV20ImpObser = "" ;
   this.OV20ImpObser = "" ;
   this.AV37SnImprimirEspecie = "" ;
   this.ZV37SnImprimirEspecie = "" ;
   this.OV37SnImprimirEspecie = "" ;
   this.AV38SnGerarCSV = "" ;
   this.ZV38SnGerarCSV = "" ;
   this.OV38SnGerarCSV = "" ;
   this.AV21CaixaBancoIni = 0 ;
   this.ZV21CaixaBancoIni = 0 ;
   this.OV21CaixaBancoIni = 0 ;
   this.AV22CaixaBancoFin = 0 ;
   this.ZV22CaixaBancoFin = 0 ;
   this.OV22CaixaBancoFin = 0 ;
   this.AV23DtaEmissaoIni = gx.date.nullDate() ;
   this.ZV23DtaEmissaoIni = gx.date.nullDate() ;
   this.OV23DtaEmissaoIni = gx.date.nullDate() ;
   this.AV24DtaEmissaoFin = gx.date.nullDate() ;
   this.ZV24DtaEmissaoFin = gx.date.nullDate() ;
   this.OV24DtaEmissaoFin = gx.date.nullDate() ;
   this.AV26DtaCobIni = gx.date.nullDate() ;
   this.ZV26DtaCobIni = gx.date.nullDate() ;
   this.OV26DtaCobIni = gx.date.nullDate() ;
   this.AV27DtaCobFin = gx.date.nullDate() ;
   this.ZV27DtaCobFin = gx.date.nullDate() ;
   this.OV27DtaCobFin = gx.date.nullDate() ;
   this.AV29NumChequeIni = 0 ;
   this.ZV29NumChequeIni = 0 ;
   this.OV29NumChequeIni = 0 ;
   this.AV28NumChequeFin = 0 ;
   this.ZV28NumChequeFin = 0 ;
   this.OV28NumChequeFin = 0 ;
   this.AV33MesCheque = 0 ;
   this.ZV33MesCheque = 0 ;
   this.OV33MesCheque = 0 ;
   this.AV34AnoCheque = 0 ;
   this.ZV34AnoCheque = 0 ;
   this.OV34AnoCheque = 0 ;
   this.AV66Nao = "" ;
   this.ZV66Nao = "" ;
   this.OV66Nao = "" ;
   this.AV48TxtTela = "" ;
   this.AV31SnChequeDtCobranca = "" ;
   this.AV32SnChequeNaoCobrado = "" ;
   this.AV20ImpObser = "" ;
   this.AV37SnImprimirEspecie = "" ;
   this.AV38SnGerarCSV = "" ;
   this.AV21CaixaBancoIni = 0 ;
   this.AV22CaixaBancoFin = 0 ;
   this.AV23DtaEmissaoIni = gx.date.nullDate() ;
   this.AV24DtaEmissaoFin = gx.date.nullDate() ;
   this.AV26DtaCobIni = gx.date.nullDate() ;
   this.AV27DtaCobFin = gx.date.nullDate() ;
   this.AV29NumChequeIni = 0 ;
   this.AV28NumChequeFin = 0 ;
   this.AV33MesCheque = 0 ;
   this.AV34AnoCheque = 0 ;
   this.AV66Nao = "" ;
   this.Events = {"e11bf2_client": ["'FECHAR'", true] ,"e13bf2_client": ["ENTER", true] ,"e15bf2_client": ["'SALVARTXT'", true] ,"e16bf2_client": ["VTXTTELA.CLICK", true] ,"e17bf2_client": ["'EXCLUIRTXT'", true] ,"e19bf2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV69Pgmname',fld:'vPGMNAME'},{av:'AV63SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV48TxtTela',fld:'vTXTTELA'}],[{av:'AV48TxtTela',fld:'vTXTTELA'},{av:'AV72GXV2',fld:'vGXV2'},{av:'AV64SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV71GXV1',fld:'vGXV1'},{av:'AV65SNPadrao',fld:'vSNPADRAO'},{av:'AV31SnChequeDtCobranca',fld:'vSNCHEQUEDTCOBRANCA'},{av:'AV32SnChequeNaoCobrado',fld:'vSNCHEQUENAOCOBRADO'},{av:'AV20ImpObser',fld:'vIMPOBSER'},{av:'AV37SnImprimirEspecie',fld:'vSNIMPRIMIRESPECIE'},{av:'AV38SnGerarCSV',fld:'vSNGERARCSV'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV70Pgmdesc',fld:'vPGMDESC'},{av:'AV38SnGerarCSV',fld:'vSNGERARCSV'},{av:'AV34AnoCheque',fld:'vANOCHEQUE'},{av:'AV28NumChequeFin',fld:'vNUMCHEQUEFIN'},{av:'AV29NumChequeIni',fld:'vNUMCHEQUEINI'},{av:'AV27DtaCobFin',fld:'vDTACOBFIN'},{av:'AV26DtaCobIni',fld:'vDTACOBINI'},{av:'AV24DtaEmissaoFin',fld:'vDTAEMISSAOFIN'},{av:'AV23DtaEmissaoIni',fld:'vDTAEMISSAOINI'},{av:'AV22CaixaBancoFin',fld:'vCAIXABANCOFIN'},{av:'AV21CaixaBancoIni',fld:'vCAIXABANCOINI'},{av:'AV37SnImprimirEspecie',fld:'vSNIMPRIMIRESPECIE'},{av:'AV20ImpObser',fld:'vIMPOBSER'},{av:'AV31SnChequeDtCobranca',fld:'vSNCHEQUEDTCOBRANCA'},{av:'AV19ModoLayout',fld:'vMODOLAYOUT'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV69Pgmname',fld:'vPGMNAME'},{av:'AV59SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV48TxtTela',fld:'vTXTTELA'},{av:'AV33MesCheque',fld:'vMESCHEQUE'},{av:'AV32SnChequeNaoCobrado',fld:'vSNCHEQUENAOCOBRADO'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV65SNPadrao',fld:'vSNPADRAO'}],[{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV38SnGerarCSV',fld:'vSNGERARCSV'},{av:'AV34AnoCheque',fld:'vANOCHEQUE'},{av:'AV33MesCheque',fld:'vMESCHEQUE'},{av:'AV28NumChequeFin',fld:'vNUMCHEQUEFIN'},{av:'AV29NumChequeIni',fld:'vNUMCHEQUEINI'},{av:'AV27DtaCobFin',fld:'vDTACOBFIN'},{av:'AV26DtaCobIni',fld:'vDTACOBINI'},{av:'AV24DtaEmissaoFin',fld:'vDTAEMISSAOFIN'},{av:'AV23DtaEmissaoIni',fld:'vDTAEMISSAOINI'},{av:'AV22CaixaBancoFin',fld:'vCAIXABANCOFIN'},{av:'AV21CaixaBancoIni',fld:'vCAIXABANCOINI'},{av:'AV37SnImprimirEspecie',fld:'vSNIMPRIMIRESPECIE'},{av:'AV20ImpObser',fld:'vIMPOBSER'},{av:'AV32SnChequeNaoCobrado',fld:'vSNCHEQUENAOCOBRADO'},{av:'AV31SnChequeDtCobranca',fld:'vSNCHEQUEDTCOBRANCA'},{av:'AV19ModoLayout',fld:'vMODOLAYOUT'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV62OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV48TxtTela',fld:'vTXTTELA'},{av:'AV69Pgmname',fld:'vPGMNAME'},{av:'AV65SNPadrao',fld:'vSNPADRAO'},{av:'AV31SnChequeDtCobranca',fld:'vSNCHEQUEDTCOBRANCA'},{av:'AV32SnChequeNaoCobrado',fld:'vSNCHEQUENAOCOBRADO'},{av:'AV20ImpObser',fld:'vIMPOBSER'},{av:'AV37SnImprimirEspecie',fld:'vSNIMPRIMIRESPECIE'},{av:'AV38SnGerarCSV',fld:'vSNGERARCSV'}],[{av:'AV62OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV69Pgmname',fld:'vPGMNAME'},{av:'AV63SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV48TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV71GXV1',fld:'vGXV1'},{av:'AV64SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV65SNPadrao',fld:'vSNPADRAO'},{av:'AV31SnChequeDtCobranca',fld:'vSNCHEQUEDTCOBRANCA'},{av:'AV32SnChequeNaoCobrado',fld:'vSNCHEQUENAOCOBRADO'},{av:'AV20ImpObser',fld:'vIMPOBSER'},{av:'AV37SnImprimirEspecie',fld:'vSNIMPRIMIRESPECIE'},{av:'AV38SnGerarCSV',fld:'vSNGERARCSV'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV69Pgmname',fld:'vPGMNAME'},{av:'AV48TxtTela',fld:'vTXTTELA'}],[]];
   this.setPrompt("PROMPT_CAIXABANCOINI", [59]);
   this.setPrompt("PROMPT_CAIXABANCOFIN", [63]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hchequeemitido());
