/**@preserve  GeneXus Java 10_3_12-110051 on March 15, 2021 17:56:29.62
*/
gx.evt.autoSkip=!1;gx.define("hexcluirlancamentocoletivo",!1,function(){this.ServerClass="hexcluirlancamentocoletivo";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("12","'FECHAR'");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){};this.s112_client=function(){new gx.date.gxdate("").compare(this.AV15DataLancamentoI)==0||new gx.date.gxdate("").compare(this.AV16DataLancamentoF)==0?(this.addMessage("Informe data inicial e final."),gx.fn.usrSetFocus("vDATALANCAMENTOI"),this.AV49Erro=gx.num.trunc(1,0)):new gx.date.gxdate(this.AV15DataLancamentoI).compare(this.AV16DataLancamentoF)>0?(this.addMessage("Data inicial tem que ser menor ou igual a final."),gx.fn.usrSetFocus("vDATALANCAMENTOI"),this.AV49Erro=gx.num.trunc(1,0)):this.AV17CentroCustoIdIni>this.AV18CentroCustoIdFin&&(this.addMessage("Centro custo inicial tem que ser menor ou igual a final."),gx.fn.usrSetFocus("vCENTROCUSTOIDINI"),this.AV49Erro=gx.num.trunc(1,0));this.AV49Erro==0&&this.AV81SnExigirNumLanc=="S"&&0==this.AV27LancamentoContabilIni&&0==this.AV28LancamentoContabilFin&&(this.addMessage("Informe o intervalo de número de lançamento."),gx.fn.usrSetFocus("vLANCAMENTOCONTABILINI"),this.AV49Erro=gx.num.trunc(1,0));this.AV49Erro==0&&(0==this.AV27LancamentoContabilIni||0!=this.AV28LancamentoContabilFin?0!=this.AV27LancamentoContabilIni||0==this.AV28LancamentoContabilFin?this.AV27LancamentoContabilIni>this.AV28LancamentoContabilFin&&(this.addMessage("Lançamento contábil inicial tem que ser menor ou igual a final"),gx.fn.usrSetFocus("vLANCAMENTOCONTABILINI"),this.AV49Erro=gx.num.trunc(1,0)):(this.addMessage("Informe lançamento contábil inicial."),gx.fn.usrSetFocus("vLANCAMENTOCONTABILINI"),this.AV49Erro=gx.num.trunc(1,0)):(this.addMessage("Informe lançamento contábil final."),gx.fn.usrSetFocus("vLANCAMENTOCONTABILFIN"),this.AV49Erro=gx.num.trunc(1,0)));this.AV49Erro==0&&(this.AV21PessoaIdIni>this.AV22PessoaIdFin?(this.addMessage("Pessoa inicial deve dser menor ou igual a final"),gx.fn.usrSetFocus("vPESSOAIDINI"),this.AV49Erro=gx.num.trunc(1,0)):this.AV23ContaContabilIdIni>this.AV24ContaContabilIdFin&&(this.addMessage("Conta contábil inicial tem que ser menor ou igual a final."),gx.fn.usrSetFocus("vCONTACONTABILIDINI"),this.AV49Erro=gx.num.trunc(1,0)))};this.e11242_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e13242_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e15242_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[3,6,9,12,16,18,21,23,25,28,30,33,35,37,40,42,45,47,49,52,54,57,59,61,64,66,69,70,71,73,75,76,77,81,85,89,93,97,103,109,110,111,113,115,116,117,118];this.GXLastCtrlId=118;n[3]={fld:"TABLE13",grid:0};n[6]={fld:"TABLE11",grid:0};n[9]={fld:"TABLE14",grid:0};n[12]={fld:"TEXTBLOCK4",format:0,grid:0};n[16]={fld:"TEXTBLOCK22",format:0,grid:0};n[18]={fld:"TABLE19",grid:0};n[21]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATALANCAMENTOI",gxz:"ZV15DataLancamentoI",gxold:"OV15DataLancamentoI",gxvar:"AV15DataLancamentoI",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV15DataLancamentoI=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV15DataLancamentoI=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vDATALANCAMENTOI",gx.O.AV15DataLancamentoI,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV15DataLancamentoI=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATALANCAMENTOI")},nac:gx.falseFn};this.declareDomainHdlr(21,function(){});n[23]={fld:"TEXTBLOCK23",format:0,grid:0};n[25]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATALANCAMENTOF",gxz:"ZV16DataLancamentoF",gxold:"OV16DataLancamentoF",gxvar:"AV16DataLancamentoF",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV16DataLancamentoF=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV16DataLancamentoF=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vDATALANCAMENTOF",gx.O.AV16DataLancamentoF,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV16DataLancamentoF=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATALANCAMENTOF")},nac:gx.falseFn};this.declareDomainHdlr(25,function(){});n[28]={fld:"TEXTBLOCK21",format:0,grid:0};n[30]={fld:"TABLE18",grid:0};n[33]={lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTOIDINI",gxz:"ZV17CentroCustoIdIni",gxold:"OV17CentroCustoIdIni",gxvar:"AV17CentroCustoIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV17CentroCustoIdIni=n},v2z:function(n){gx.O.ZV17CentroCustoIdIni=n},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOIDINI",gx.O.AV17CentroCustoIdIni,0)},c2v:function(){gx.O.AV17CentroCustoIdIni=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOIDINI")},nac:gx.falseFn};n[35]={fld:"TEXTBLOCK24",format:0,grid:0};n[37]={lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTOIDFIN",gxz:"ZV18CentroCustoIdFin",gxold:"OV18CentroCustoIdFin",gxvar:"AV18CentroCustoIdFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV18CentroCustoIdFin=n},v2z:function(n){gx.O.ZV18CentroCustoIdFin=n},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOIDFIN",gx.O.AV18CentroCustoIdFin,0)},c2v:function(){gx.O.AV18CentroCustoIdFin=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOIDFIN")},nac:gx.falseFn};n[40]={fld:"TEXTBLOCK33",format:0,grid:0};n[42]={fld:"TABLE17",grid:0};n[45]={lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCONTABILINI",gxz:"ZV27LancamentoContabilIni",gxold:"OV27LancamentoContabilIni",gxvar:"AV27LancamentoContabilIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV27LancamentoContabilIni=gx.num.intval(n)},v2z:function(n){gx.O.ZV27LancamentoContabilIni=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCONTABILINI",gx.O.AV27LancamentoContabilIni,0)},c2v:function(){gx.O.AV27LancamentoContabilIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOCONTABILINI",".")},nac:gx.falseFn};n[47]={fld:"TEXTBLOCK35",format:0,grid:0};n[49]={lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCONTABILFIN",gxz:"ZV28LancamentoContabilFin",gxold:"OV28LancamentoContabilFin",gxvar:"AV28LancamentoContabilFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV28LancamentoContabilFin=gx.num.intval(n)},v2z:function(n){gx.O.ZV28LancamentoContabilFin=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCONTABILFIN",gx.O.AV28LancamentoContabilFin,0)},c2v:function(){gx.O.AV28LancamentoContabilFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOCONTABILFIN",".")},nac:gx.falseFn};n[52]={fld:"TEXTBLOCK7",format:0,grid:0};n[54]={fld:"TABLE16",grid:0};n[57]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAIDINI",gxz:"ZV21PessoaIdIni",gxold:"OV21PessoaIdIni",gxvar:"AV21PessoaIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV21PessoaIdIni=gx.num.intval(n)},v2z:function(n){gx.O.ZV21PessoaIdIni=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPESSOAIDINI",gx.O.AV21PessoaIdIni,0)},c2v:function(){gx.O.AV21PessoaIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAIDINI",".")},nac:gx.falseFn};n[59]={fld:"TEXTBLOCK9",format:0,grid:0};n[61]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAIDFIN",gxz:"ZV22PessoaIdFin",gxold:"OV22PessoaIdFin",gxvar:"AV22PessoaIdFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV22PessoaIdFin=gx.num.intval(n)},v2z:function(n){gx.O.ZV22PessoaIdFin=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPESSOAIDFIN",gx.O.AV22PessoaIdFin,0)},c2v:function(){gx.O.AV22PessoaIdFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAIDFIN",".")},nac:gx.falseFn};n[64]={fld:"TEXTBLOCK36",format:0,grid:0};n[66]={fld:"TABLE15",grid:0};n[69]={lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILIDINI",gxz:"ZV23ContaContabilIdIni",gxold:"OV23ContaContabilIdIni",gxvar:"AV23ContaContabilIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV23ContaContabilIdIni=n},v2z:function(n){gx.O.ZV23ContaContabilIdIni=n},v2c:function(){gx.fn.setControlValue("vCONTACONTABILIDINI",gx.O.AV23ContaContabilIdIni,0)},c2v:function(){gx.O.AV23ContaContabilIdIni=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILIDINI")},nac:gx.falseFn};n[70]={fld:"IMGCCONTINI",grid:0};n[71]={lvl:0,type:"int",len:5,dec:0,sign:!1,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADINI",gxz:"ZV65TradIni",gxold:"OV65TradIni",gxvar:"AV65TradIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV65TradIni=gx.num.intval(n)},v2z:function(n){gx.O.ZV65TradIni=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vTRADINI",gx.O.AV65TradIni,0)},c2v:function(){gx.O.AV65TradIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADINI",".")},nac:gx.falseFn};n[73]={fld:"TEXTBLOCK38",format:0,grid:0};n[75]={lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILIDFIN",gxz:"ZV24ContaContabilIdFin",gxold:"OV24ContaContabilIdFin",gxvar:"AV24ContaContabilIdFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV24ContaContabilIdFin=n},v2z:function(n){gx.O.ZV24ContaContabilIdFin=n},v2c:function(){gx.fn.setControlValue("vCONTACONTABILIDFIN",gx.O.AV24ContaContabilIdFin,0)},c2v:function(){gx.O.AV24ContaContabilIdFin=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILIDFIN")},nac:gx.falseFn};n[76]={fld:"IMGCCONTFIN",grid:0};n[77]={lvl:0,type:"int",len:5,dec:0,sign:!1,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADFIN",gxz:"ZV66TradFin",gxold:"OV66TradFin",gxvar:"AV66TradFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV66TradFin=gx.num.intval(n)},v2z:function(n){gx.O.ZV66TradFin=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vTRADFIN",gx.O.AV66TradFin,0)},c2v:function(){gx.O.AV66TradFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADFIN",".")},nac:gx.falseFn};n[81]={lvl:0,type:"char",len:1,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPURACAO",gxz:"ZV25Apuracao",gxold:"OV25Apuracao",gxvar:"AV25Apuracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.AV25Apuracao=n},v2z:function(n){gx.O.ZV25Apuracao=n},v2c:function(){gx.fn.setCheckBoxValue("vAPURACAO",gx.O.AV25Apuracao,"S")},c2v:function(){gx.O.AV25Apuracao=this.val()},val:function(){return gx.fn.getControlValue("vAPURACAO")},nac:gx.falseFn,values:["S","N"]};n[85]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNINTEGRACAO",gxz:"ZV73SnIntegracao",gxold:"OV73SnIntegracao",gxvar:"AV73SnIntegracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.AV73SnIntegracao=n},v2z:function(n){gx.O.ZV73SnIntegracao=n},v2c:function(){gx.fn.setCheckBoxValue("vSNINTEGRACAO",gx.O.AV73SnIntegracao,"S")},c2v:function(){gx.O.AV73SnIntegracao=this.val()},val:function(){return gx.fn.getControlValue("vSNINTEGRACAO")},nac:gx.falseFn,values:["S","N"]};n[89]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNSITUACAO",gxz:"ZV74SnSituacao",gxold:"OV74SnSituacao",gxvar:"AV74SnSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.AV74SnSituacao=n},v2z:function(n){gx.O.ZV74SnSituacao=n},v2c:function(){gx.fn.setCheckBoxValue("vSNSITUACAO",gx.O.AV74SnSituacao,"S")},c2v:function(){gx.O.AV74SnSituacao=this.val()},val:function(){return gx.fn.getControlValue("vSNSITUACAO")},nac:gx.falseFn,values:["S","N"]};n[93]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNINTEGRACAOSAIDA",gxz:"ZV82SnIntegracaoSaida",gxold:"OV82SnIntegracaoSaida",gxvar:"AV82SnIntegracaoSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.AV82SnIntegracaoSaida=n},v2z:function(n){gx.O.ZV82SnIntegracaoSaida=n},v2c:function(){gx.fn.setCheckBoxValue("vSNINTEGRACAOSAIDA",gx.O.AV82SnIntegracaoSaida,"S")},c2v:function(){gx.O.AV82SnIntegracaoSaida=this.val()},val:function(){return gx.fn.getControlValue("vSNINTEGRACAOSAIDA")},nac:gx.falseFn,values:["S","N"]};n[97]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNINTEGRACAOENTRADA",gxz:"ZV83SnIntegracaoEntrada",gxold:"OV83SnIntegracaoEntrada",gxvar:"AV83SnIntegracaoEntrada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.AV83SnIntegracaoEntrada=n},v2z:function(n){gx.O.ZV83SnIntegracaoEntrada=n},v2c:function(){gx.fn.setCheckBoxValue("vSNINTEGRACAOENTRADA",gx.O.AV83SnIntegracaoEntrada,"S")},c2v:function(){gx.O.AV83SnIntegracaoEntrada=this.val()},val:function(){return gx.fn.getControlValue("vSNINTEGRACAOENTRADA")},nac:gx.falseFn,values:["S","N"]};n[103]={fld:"TABLE12",grid:0};n[109]={lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV80AcessoSistemaSequencia",gxold:"OV80AcessoSistemaSequencia",gxvar:"AV80AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV80AcessoSistemaSequencia=gx.num.intval(n)},v2z:function(n){gx.O.ZV80AcessoSistemaSequencia=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV80AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV80AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",".")},nac:gx.falseFn};n[110]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV34ChamaOnBlurMascara",gxold:"OV34ChamaOnBlurMascara",gxvar:"AV34ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV34ChamaOnBlurMascara=n},v2z:function(n){gx.O.ZV34ChamaOnBlurMascara=n},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV34ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV34ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};n[111]={fld:"JS",format:2,grid:0};n[113]={fld:"BTNHELP",grid:0};n[115]={fld:"PROMPT_CENTROCUSTOIDINI",grid:0};n[116]={fld:"PROMPT_CENTROCUSTOIDFIN",grid:0};n[117]={fld:"PROMPT_PESSOAIDINI",grid:0};n[118]={fld:"PROMPT_PESSOAIDFIN",grid:0};this.AV15DataLancamentoI=gx.date.nullDate();this.ZV15DataLancamentoI=gx.date.nullDate();this.OV15DataLancamentoI=gx.date.nullDate();this.AV16DataLancamentoF=gx.date.nullDate();this.ZV16DataLancamentoF=gx.date.nullDate();this.OV16DataLancamentoF=gx.date.nullDate();this.AV17CentroCustoIdIni="";this.ZV17CentroCustoIdIni="";this.OV17CentroCustoIdIni="";this.AV18CentroCustoIdFin="";this.ZV18CentroCustoIdFin="";this.OV18CentroCustoIdFin="";this.AV27LancamentoContabilIni=0;this.ZV27LancamentoContabilIni=0;this.OV27LancamentoContabilIni=0;this.AV28LancamentoContabilFin=0;this.ZV28LancamentoContabilFin=0;this.OV28LancamentoContabilFin=0;this.AV21PessoaIdIni=0;this.ZV21PessoaIdIni=0;this.OV21PessoaIdIni=0;this.AV22PessoaIdFin=0;this.ZV22PessoaIdFin=0;this.OV22PessoaIdFin=0;this.AV23ContaContabilIdIni="";this.ZV23ContaContabilIdIni="";this.OV23ContaContabilIdIni="";this.AV65TradIni=0;this.ZV65TradIni=0;this.OV65TradIni=0;this.AV24ContaContabilIdFin="";this.ZV24ContaContabilIdFin="";this.OV24ContaContabilIdFin="";this.AV66TradFin=0;this.ZV66TradFin=0;this.OV66TradFin=0;this.AV25Apuracao="";this.ZV25Apuracao="";this.OV25Apuracao="";this.AV73SnIntegracao="";this.ZV73SnIntegracao="";this.OV73SnIntegracao="";this.AV74SnSituacao="";this.ZV74SnSituacao="";this.OV74SnSituacao="";this.AV82SnIntegracaoSaida="";this.ZV82SnIntegracaoSaida="";this.OV82SnIntegracaoSaida="";this.AV83SnIntegracaoEntrada="";this.ZV83SnIntegracaoEntrada="";this.OV83SnIntegracaoEntrada="";this.AV80AcessoSistemaSequencia=0;this.ZV80AcessoSistemaSequencia=0;this.OV80AcessoSistemaSequencia=0;this.AV34ChamaOnBlurMascara="";this.ZV34ChamaOnBlurMascara="";this.OV34ChamaOnBlurMascara="";this.AV15DataLancamentoI=gx.date.nullDate();this.AV16DataLancamentoF=gx.date.nullDate();this.AV17CentroCustoIdIni="";this.AV18CentroCustoIdFin="";this.AV27LancamentoContabilIni=0;this.AV28LancamentoContabilFin=0;this.AV21PessoaIdIni=0;this.AV22PessoaIdFin=0;this.AV23ContaContabilIdIni="";this.AV65TradIni=0;this.AV24ContaContabilIdFin="";this.AV66TradFin=0;this.AV25Apuracao="";this.AV73SnIntegracao="";this.AV74SnSituacao="";this.AV82SnIntegracaoSaida="";this.AV83SnIntegracaoEntrada="";this.AV80AcessoSistemaSequencia=0;this.AV34ChamaOnBlurMascara="";this.A11896ItensLancContabNotaEntId=0;this.A67ItensLancamentoContabilSequenc=0;this.A61LancamentoContabilId=0;this.A341LancamentoContabilEmpresaid="";this.A11894ItensLancContabNotaSequencia=0;this.A11900ItensLancContabNotaSaiId=0;this.A2744ItensLancamentoContabilFinancS=0;this.A345ItemLancamentoCCusId="";this.A60LancamentoContabilData=gx.date.nullDate();this.A346EmpresaTransacaoContabilEmpres="";this.A347TransacaoContabilId="";this.A342LancamentoContabilEstorno=0;this.A62ContaContabilId="";this.A69PessoaId=0;this.A68ItensLancamentoContabilDebCre="";this.A337ItensLancamentoContabilParDob=0;this.A335ItensLancamentoContabilApuraca="";this.A66ItensLancamentoContabilValor=0;this.A1969LancContaCxaBcoEmpresaId="";this.A1970LancContaCxaBcoId=0;this.A1982LancContaPagRegEmpresaId="";this.A1983LancContaPagRegId=0;this.A1984LancContaPagRegSeq=0;this.AV81SnExigirNumLanc="";this.AV49Erro=0;this.Events={e11242_client:["'FECHAR'",!0],e13242_client:["ENTER",!0],e15242_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[],[]];this.EvtParms["'FECHAR'"]=[[{av:"AV80AcessoSistemaSequencia",fld:"vACESSOSISTEMASEQUENCIA"}],[]];this.EvtParms.ENTER=[[{av:"AV23ContaContabilIdIni",fld:"vCONTACONTABILIDINI"},{av:"AV24ContaContabilIdFin",fld:"vCONTACONTABILIDFIN"},{av:"AV49Erro",fld:"vERRO"},{av:"AV58QtExcluido",fld:"vQTEXCLUIDO"},{av:"AV15DataLancamentoI",fld:"vDATALANCAMENTOI"},{av:"AV16DataLancamentoF",fld:"vDATALANCAMENTOF"},{av:"AV17CentroCustoIdIni",fld:"vCENTROCUSTOIDINI"},{av:"AV18CentroCustoIdFin",fld:"vCENTROCUSTOIDFIN"},{av:"AV81SnExigirNumLanc",fld:"vSNEXIGIRNUMLANC"},{av:"AV27LancamentoContabilIni",fld:"vLANCAMENTOCONTABILINI"},{av:"AV28LancamentoContabilFin",fld:"vLANCAMENTOCONTABILFIN"},{av:"AV21PessoaIdIni",fld:"vPESSOAIDINI"},{av:"AV22PessoaIdFin",fld:"vPESSOAIDFIN"},{av:"A341LancamentoContabilEmpresaid",fld:"LANCAMENTOCONTABILEMPRESAID"},{av:"AV9EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"A60LancamentoContabilData",fld:"LANCAMENTOCONTABILDATA"},{av:"A61LancamentoContabilId",fld:"LANCAMENTOCONTABILID"},{av:"A66ItensLancamentoContabilValor",fld:"ITENSLANCAMENTOCONTABILVALOR"},{av:"A346EmpresaTransacaoContabilEmpres",fld:"EMPRESATRANSACAOCONTABILEMPRES"},{av:"A347TransacaoContabilId",fld:"TRANSACAOCONTABILID"},{av:"A342LancamentoContabilEstorno",fld:"LANCAMENTOCONTABILESTORNO"},{av:"A62ContaContabilId",fld:"CONTACONTABILID"},{av:"A69PessoaId",fld:"PESSOAID"},{av:"A68ItensLancamentoContabilDebCre",fld:"ITENSLANCAMENTOCONTABILDEBCRE"},{av:"A67ItensLancamentoContabilSequenc",fld:"ITENSLANCAMENTOCONTABILSEQUENC"},{av:"A337ItensLancamentoContabilParDob",fld:"ITENSLANCAMENTOCONTABILPARDOB"},{av:"A335ItensLancamentoContabilApuraca",fld:"ITENSLANCAMENTOCONTABILAPURACA"},{av:"A1969LancContaCxaBcoEmpresaId",fld:"LANCCONTACXABCOEMPRESAID"},{av:"A1970LancContaCxaBcoId",fld:"LANCCONTACXABCOID"},{av:"A1982LancContaPagRegEmpresaId",fld:"LANCCONTAPAGREGEMPRESAID"},{av:"A1983LancContaPagRegId",fld:"LANCCONTAPAGREGID"},{av:"A1984LancContaPagRegSeq",fld:"LANCCONTAPAGREGSEQ"},{av:"AV57SnSeleciona",fld:"vSNSELECIONA"},{av:"AV45PessoaId",fld:"vPESSOAID"},{av:"AV67PessoaIDCont",fld:"vPESSOAIDCONT"},{av:"AV44ContaContabilId",fld:"vCONTACONTABILID"},{av:"AV68ContaContabilCont",fld:"vCONTACONTABILCONT"},{av:"AV25Apuracao",fld:"vAPURACAO"},{av:"AV61ItensLancamentoContabilApuracao",fld:"vITENSLANCAMENTOCONTABILAPURACAO"},{av:"AV72ApuracaoContParam",fld:"vAPURACAOCONTPARAM"},{av:"AV40LancamentoContabilId",fld:"vLANCAMENTOCONTABILID"},{av:"AV59ItensLancamentoContabilSequencia",fld:"vITENSLANCAMENTOCONTABILSEQUENCIA"},{av:"AV60ItensLancamentoContabilParDob",fld:"vITENSLANCAMENTOCONTABILPARDOB"},{av:"A345ItemLancamentoCCusId",fld:"ITEMLANCAMENTOCCUSID"},{av:"AV73SnIntegracao",fld:"vSNINTEGRACAO"},{av:"AV75lanccontacxabcoid",fld:"vLANCCONTACXABCOID"},{av:"AV76lanccontapagregseq",fld:"vLANCCONTAPAGREGSEQ"},{av:"A2744ItensLancamentoContabilFinancS",fld:"ITENSLANCAMENTOCONTABILFINANCS"},{av:"AV82SnIntegracaoSaida",fld:"vSNINTEGRACAOSAIDA"},{av:"AV83SnIntegracaoEntrada",fld:"vSNINTEGRACAOENTRADA"},{av:"A11900ItensLancContabNotaSaiId",fld:"ITENSLANCCONTABNOTASAIID"},{av:"A11894ItensLancContabNotaSequencia",fld:"ITENSLANCCONTABNOTASEQUENCIA"},{av:"A11896ItensLancContabNotaEntId",fld:"ITENSLANCCONTABNOTAENTID"},{av:"AV77lanccontacxabcoempresaid",fld:"vLANCCONTACXABCOEMPRESAID"},{av:"AV78lanccontapagregempresaid",fld:"vLANCCONTAPAGREGEMPRESAID"},{av:"AV79lanccontapagregid",fld:"vLANCCONTAPAGREGID"},{av:"AV5UsrCod",fld:"vUSRCOD"},{av:"AV51ItensLancamentoContabilDebCre",fld:"vITENSLANCAMENTOCONTABILDEBCRE"},{av:"AV41LancamentoContabilData",fld:"vLANCAMENTOCONTABILDATA"},{av:"AV56EmpresaTransacao",fld:"vEMPRESATRANSACAO"},{av:"AV42TransacaoContabilId",fld:"vTRANSACAOCONTABILID"},{av:"AV43LancamentoContabilEstorno",fld:"vLANCAMENTOCONTABILESTORNO"},{av:"AV55EmpresaPadraoCContabil",fld:"vEMPRESAPADRAOCCONTABIL"},{av:"AV54EmpresaPadraoPessoa",fld:"vEMPRESAPADRAOPESSOA"},{av:"AV70EmpresaPessoaCont",fld:"vEMPRESAPESSOACONT"},{av:"AV62ItensLancamentoContabilValor",fld:"vITENSLANCAMENTOCONTABILVALOR"},{av:"AV48ValorBrancoChar",fld:"vVALORBRANCOCHAR"},{av:"AV46ValorNulo",fld:"vVALORNULO"},{av:"AV47ValorBranco",fld:"vVALORBRANCO"}],[{av:"AV39ErrDsc",fld:"vERRDSC"},{av:"AV23ContaContabilIdIni",fld:"vCONTACONTABILIDINI"},{av:"AV24ContaContabilIdFin",fld:"vCONTACONTABILIDFIN"},{av:"AV49Erro",fld:"vERRO"},{av:"AV58QtExcluido",fld:"vQTEXCLUIDO"},{av:"AV40LancamentoContabilId",fld:"vLANCAMENTOCONTABILID"},{av:"AV41LancamentoContabilData",fld:"vLANCAMENTOCONTABILDATA"},{av:"AV56EmpresaTransacao",fld:"vEMPRESATRANSACAO"},{av:"AV42TransacaoContabilId",fld:"vTRANSACAOCONTABILID"},{av:"AV43LancamentoContabilEstorno",fld:"vLANCAMENTOCONTABILESTORNO"},{av:"AV44ContaContabilId",fld:"vCONTACONTABILID"},{av:"AV45PessoaId",fld:"vPESSOAID"},{av:"AV51ItensLancamentoContabilDebCre",fld:"vITENSLANCAMENTOCONTABILDEBCRE"},{av:"AV59ItensLancamentoContabilSequencia",fld:"vITENSLANCAMENTOCONTABILSEQUENCIA"},{av:"AV60ItensLancamentoContabilParDob",fld:"vITENSLANCAMENTOCONTABILPARDOB"},{av:"AV61ItensLancamentoContabilApuracao",fld:"vITENSLANCAMENTOCONTABILAPURACAO"},{av:"AV62ItensLancamentoContabilValor",fld:"vITENSLANCAMENTOCONTABILVALOR"},{av:"AV77lanccontacxabcoempresaid",fld:"vLANCCONTACXABCOEMPRESAID"},{av:"AV75lanccontacxabcoid",fld:"vLANCCONTACXABCOID"},{av:"AV78lanccontapagregempresaid",fld:"vLANCCONTAPAGREGEMPRESAID"},{av:"AV79lanccontapagregid",fld:"vLANCCONTAPAGREGID"},{av:"AV76lanccontapagregseq",fld:"vLANCCONTAPAGREGSEQ"},{av:"AV70EmpresaPessoaCont",fld:"vEMPRESAPESSOACONT"},{av:"AV67PessoaIDCont",fld:"vPESSOAIDCONT"},{av:"AV68ContaContabilCont",fld:"vCONTACONTABILCONT"},{av:"AV69ApuracaoCont",fld:"vAPURACAOCONT"},{av:"AV72ApuracaoContParam",fld:"vAPURACAOCONTPARAM"},{av:"AV71TraAux",fld:"vTRAAUX"},{av:"AV57SnSeleciona",fld:"vSNSELECIONA"},{av:"AV90GXLvl326",fld:"vGXLVL326"}]];this.setPrompt("IMGCCONTINI",[69,71]);this.setPrompt("PROMPT_CENTROCUSTOIDINI",[33]);this.setPrompt("PROMPT_CENTROCUSTOIDFIN",[37]);this.setPrompt("PROMPT_PESSOAIDINI",[57]);this.setPrompt("PROMPT_PESSOAIDFIN",[61]);this.setPrompt("IMGCCONTFIN",[75,77]);this.EnterCtrl=["BUTTON1"];this.InitStandaloneVars()});gx.setParentObj(new hexcluirlancamentocoletivo)