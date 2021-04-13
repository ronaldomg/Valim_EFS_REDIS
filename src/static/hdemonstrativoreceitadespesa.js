/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:57:41.66
*/
gx.evt.autoSkip = false;
gx.define('hdemonstrativoreceitadespesa', false, function () {
   this.ServerClass =  "hdemonstrativoreceitadespesa" ;
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
   this.e19711_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalparmgrpordenacao",["N", "Parâmetros do Demonstrativo Receita e Despesa"]), ["", ""]);
      this.refreshOutputs([]);
   };
   this.e11712_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13712_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15712_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e16712_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e17712_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e20712_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,16,18,21,24,27,30,32,35,37,41,46,49,51,54,56,58,61,63,66,68,71,72,74,76,77,80,82,85,87,89,98,99,100,101,103,104,106,107];
   this.GXLastCtrlId =107;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABTXT",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK54", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV57TxtTela",gxold:"OV57TxtTela",gxvar:"AV57TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV57TxtTela=Value},v2z:function(Value){gx.O.ZV57TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV57TxtTela)},c2v:function(){gx.O.AV57TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"IMAGE3",grid:0};
   GXValidFnc[18]={fld:"IMAGE4",grid:0};
   GXValidFnc[21]={fld:"TABLE7",grid:0};
   GXValidFnc[24]={fld:"TABLE8",grid:0};
   GXValidFnc[27]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPCOMPARATIVO",gxz:"ZV16TpComparativo",gxold:"OV16TpComparativo",gxvar:"AV16TpComparativo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",v2v:function(Value){gx.O.AV16TpComparativo=Value},v2z:function(Value){gx.O.ZV16TpComparativo=Value},v2c:function(){gx.fn.setRadioValue("vTPCOMPARATIVO",gx.O.AV16TpComparativo)},c2v:function(){gx.O.AV16TpComparativo=this.val()},val:function(){return gx.fn.getControlValue("vTPCOMPARATIVO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPANALISE",gxz:"ZV17TpAnalise",gxold:"OV17TpAnalise",gxvar:"AV17TpAnalise",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",v2v:function(Value){gx.O.AV17TpAnalise=Value},v2z:function(Value){gx.O.ZV17TpAnalise=Value},v2c:function(){gx.fn.setRadioValue("vTPANALISE",gx.O.AV17TpAnalise)},c2v:function(){gx.O.AV17TpAnalise=this.val()},val:function(){return gx.fn.getControlValue("vTPANALISE")},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESLANCAPURACAO",gxz:"ZV18DesLancApuracao",gxold:"OV18DesLancApuracao",gxvar:"AV18DesLancApuracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV18DesLancApuracao=Value},v2z:function(Value){gx.O.ZV18DesLancApuracao=Value},v2c:function(){gx.fn.setCheckBoxValue("vDESLANCAPURACAO",gx.O.AV18DesLancApuracao,"S")},c2v:function(){gx.O.AV18DesLancApuracao=this.val()},val:function(){return gx.fn.getControlValue("vDESLANCAPURACAO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[46]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[49]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[51]={fld:"TABLE10",grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMES",gxz:"ZV19Mes",gxold:"OV19Mes",gxvar:"AV19Mes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19Mes=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19Mes=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMES",gx.O.AV19Mes,0)},c2v:function(){gx.O.AV19Mes=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMES",'.')},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANO",gxz:"ZV20Ano",gxold:"OV20Ano",gxvar:"AV20Ano",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20Ano=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20Ano=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANO",gx.O.AV20Ano,0)},c2v:function(){gx.O.AV20Ano=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANO",'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[63]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNIVEL",gxz:"ZV21Nivel",gxold:"OV21Nivel",gxvar:"AV21Nivel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21Nivel=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21Nivel=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNIVEL",gx.O.AV21Nivel,0)},c2v:function(){gx.O.AV21Nivel=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNIVEL",'.')},nac:gx.falseFn};
   GXValidFnc[66]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[68]={fld:"TABLE12",grid:0};
   GXValidFnc[71]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILIDINICIAL",gxz:"ZV22ContaContabilIdInicial",gxold:"OV22ContaContabilIdInicial",gxvar:"AV22ContaContabilIdInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22ContaContabilIdInicial=Value},v2z:function(Value){gx.O.ZV22ContaContabilIdInicial=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILIDINICIAL",gx.O.AV22ContaContabilIdInicial,0)},c2v:function(){gx.O.AV22ContaContabilIdInicial=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILIDINICIAL")},nac:gx.falseFn};
   GXValidFnc[72]={fld:"IMAGE1",grid:0};
   GXValidFnc[74]={fld:"A4", format:0,grid:0};
   GXValidFnc[76]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILIDFINAL",gxz:"ZV23ContaContabilIdFinal",gxold:"OV23ContaContabilIdFinal",gxvar:"AV23ContaContabilIdFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23ContaContabilIdFinal=Value},v2z:function(Value){gx.O.ZV23ContaContabilIdFinal=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILIDFINAL",gx.O.AV23ContaContabilIdFinal,0)},c2v:function(){gx.O.AV23ContaContabilIdFinal=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILIDFINAL")},nac:gx.falseFn};
   GXValidFnc[77]={fld:"IMAGE2",grid:0};
   GXValidFnc[80]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[82]={fld:"TABLE13",grid:0};
   GXValidFnc[85]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTOIDINICIAL",gxz:"ZV26CentroCustoIdInicial",gxold:"OV26CentroCustoIdInicial",gxvar:"AV26CentroCustoIdInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26CentroCustoIdInicial=Value},v2z:function(Value){gx.O.ZV26CentroCustoIdInicial=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOIDINICIAL",gx.O.AV26CentroCustoIdInicial,0)},c2v:function(){gx.O.AV26CentroCustoIdInicial=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOIDINICIAL")},nac:gx.falseFn};
   GXValidFnc[87]={fld:"A5", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTOIDFINAL",gxz:"ZV27CentroCustoIdFinal",gxold:"OV27CentroCustoIdFinal",gxvar:"AV27CentroCustoIdFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27CentroCustoIdFinal=Value},v2z:function(Value){gx.O.ZV27CentroCustoIdFinal=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOIDFINAL",gx.O.AV27CentroCustoIdFinal,0)},c2v:function(){gx.O.AV27CentroCustoIdFinal=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOIDFINAL")},nac:gx.falseFn};
   GXValidFnc[98]={fld:"JS", format:2,grid:0};
   GXValidFnc[99]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV28ChamaOnBlurMascara",gxold:"OV28ChamaOnBlurMascara",gxvar:"AV28ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV28ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV28ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV28ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[100]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADINI",gxz:"ZV25TradIni",gxold:"OV25TradIni",gxvar:"AV25TradIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25TradIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25TradIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADINI",gx.O.AV25TradIni,0)},c2v:function(){gx.O.AV25TradIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADINI",'.')},nac:gx.falseFn};
   GXValidFnc[101]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADFIM",gxz:"ZV24TradFim",gxold:"OV24TradFim",gxvar:"AV24TradFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24TradFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24TradFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADFIM",gx.O.AV24TradFim,0)},c2v:function(){gx.O.AV24TradFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADFIM",'.')},nac:gx.falseFn};
   GXValidFnc[103]={fld:"BTNPARM",grid:0};
   GXValidFnc[104]={fld:"BTNHELP",grid:0};
   GXValidFnc[106]={fld:"PROMPT_CENTROCUSTOIDINICIAL",grid:0};
   GXValidFnc[107]={fld:"PROMPT_CENTROCUSTOIDFINAL",grid:0};
   this.AV57TxtTela = "" ;
   this.ZV57TxtTela = "" ;
   this.OV57TxtTela = "" ;
   this.AV16TpComparativo = "" ;
   this.ZV16TpComparativo = "" ;
   this.OV16TpComparativo = "" ;
   this.AV17TpAnalise = "" ;
   this.ZV17TpAnalise = "" ;
   this.OV17TpAnalise = "" ;
   this.AV18DesLancApuracao = "" ;
   this.ZV18DesLancApuracao = "" ;
   this.OV18DesLancApuracao = "" ;
   this.AV19Mes = 0 ;
   this.ZV19Mes = 0 ;
   this.OV19Mes = 0 ;
   this.AV20Ano = 0 ;
   this.ZV20Ano = 0 ;
   this.OV20Ano = 0 ;
   this.AV21Nivel = 0 ;
   this.ZV21Nivel = 0 ;
   this.OV21Nivel = 0 ;
   this.AV22ContaContabilIdInicial = "" ;
   this.ZV22ContaContabilIdInicial = "" ;
   this.OV22ContaContabilIdInicial = "" ;
   this.AV23ContaContabilIdFinal = "" ;
   this.ZV23ContaContabilIdFinal = "" ;
   this.OV23ContaContabilIdFinal = "" ;
   this.AV26CentroCustoIdInicial = "" ;
   this.ZV26CentroCustoIdInicial = "" ;
   this.OV26CentroCustoIdInicial = "" ;
   this.AV27CentroCustoIdFinal = "" ;
   this.ZV27CentroCustoIdFinal = "" ;
   this.OV27CentroCustoIdFinal = "" ;
   this.AV28ChamaOnBlurMascara = "" ;
   this.ZV28ChamaOnBlurMascara = "" ;
   this.OV28ChamaOnBlurMascara = "" ;
   this.AV25TradIni = 0 ;
   this.ZV25TradIni = 0 ;
   this.OV25TradIni = 0 ;
   this.AV24TradFim = 0 ;
   this.ZV24TradFim = 0 ;
   this.OV24TradFim = 0 ;
   this.AV57TxtTela = "" ;
   this.AV16TpComparativo = "" ;
   this.AV17TpAnalise = "" ;
   this.AV18DesLancApuracao = "" ;
   this.AV19Mes = 0 ;
   this.AV20Ano = 0 ;
   this.AV21Nivel = 0 ;
   this.AV22ContaContabilIdInicial = "" ;
   this.AV23ContaContabilIdFinal = "" ;
   this.AV26CentroCustoIdInicial = "" ;
   this.AV27CentroCustoIdFinal = "" ;
   this.AV28ChamaOnBlurMascara = "" ;
   this.AV25TradIni = 0 ;
   this.AV24TradFim = 0 ;
   this.A64ContaContabilTradutor = 0 ;
   this.A62ContaContabilId = "" ;
   this.A168ContaContabilTipoConta = "" ;
   this.Events = {"e11712_client": ["'FECHAR'", true] ,"e13712_client": ["ENTER", true] ,"e15712_client": ["'SALVARTXT'", true] ,"e16712_client": ["VTXTTELA.CLICK", true] ,"e17712_client": ["'EXCLUIRTXT'", true] ,"e20712_client": ["CANCEL", true] ,"e19711_client": ["'PARAMETROS'", false]};
   this.EvtParms["REFRESH"] = [[{av:'AV76Pgmname',fld:'vPGMNAME'},{av:'AV72SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV57TxtTela',fld:'vTXTTELA'}],[{av:'AV57TxtTela',fld:'vTXTTELA'},{av:'AV81GXV2',fld:'vGXV2'},{av:'AV73SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV80GXV1',fld:'vGXV1'},{av:'AV16TpComparativo',fld:'vTPCOMPARATIVO'},{av:'AV17TpAnalise',fld:'vTPANALISE'},{av:'AV18DesLancApuracao',fld:'vDESLANCAPURACAO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV22ContaContabilIdInicial',fld:'vCONTACONTABILIDINICIAL'},{av:'AV37EstrutContaInicial',fld:'vESTRUTCONTAINICIAL'},{av:'AV23ContaContabilIdFinal',fld:'vCONTACONTABILIDFINAL'},{av:'AV39EstrutContaFinal',fld:'vESTRUTCONTAFINAL'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A168ContaContabilTipoConta',fld:'CONTACONTABILTIPOCONTA'},{av:'A64ContaContabilTradutor',fld:'CONTACONTABILTRADUTOR'},{av:'AV41QuantContaComTradutor',fld:'vQUANTCONTACOMTRADUTOR'},{av:'AV19Mes',fld:'vMES'},{av:'AV20Ano',fld:'vANO'},{av:'AV42ErroData1Ini',fld:'vERRODATA1INI'},{av:'AV36QuantEstrContaIni',fld:'vQUANTESTRCONTAINI'},{av:'AV38QuantEstrContaFim',fld:'vQUANTESTRCONTAFIM'},{av:'AV40QuantContaTipoRC',fld:'vQUANTCONTATIPORC'},{av:'AV77Pgmdesc',fld:'vPGMDESC'},{av:'AV45QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV18DesLancApuracao',fld:'vDESLANCAPURACAO'},{av:'AV17TpAnalise',fld:'vTPANALISE'},{av:'AV27CentroCustoIdFinal',fld:'vCENTROCUSTOIDFINAL'},{av:'AV26CentroCustoIdInicial',fld:'vCENTROCUSTOIDINICIAL'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV76Pgmname',fld:'vPGMNAME'},{av:'AV57TxtTela',fld:'vTXTTELA'},{av:'AV16TpComparativo',fld:'vTPCOMPARATIVO'},{av:'AV21Nivel',fld:'vNIVEL'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV37EstrutContaInicial',fld:'vESTRUTCONTAINICIAL'},{av:'AV36QuantEstrContaIni',fld:'vQUANTESTRCONTAINI'},{av:'AV39EstrutContaFinal',fld:'vESTRUTCONTAFINAL'},{av:'AV38QuantEstrContaFim',fld:'vQUANTESTRCONTAFIM'},{av:'AV40QuantContaTipoRC',fld:'vQUANTCONTATIPORC'},{av:'AV41QuantContaComTradutor',fld:'vQUANTCONTACOMTRADUTOR'},{av:'AV42ErroData1Ini',fld:'vERRODATA1INI'},{av:'AV43DataString',fld:'vDATASTRING'},{av:'AV44Data',fld:'vDATA'},{av:'AV68SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV45QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV18DesLancApuracao',fld:'vDESLANCAPURACAO'},{av:'AV17TpAnalise',fld:'vTPANALISE'},{av:'AV16TpComparativo',fld:'vTPCOMPARATIVO'},{av:'AV27CentroCustoIdFinal',fld:'vCENTROCUSTOIDFINAL'},{av:'AV26CentroCustoIdInicial',fld:'vCENTROCUSTOIDINICIAL'},{av:'AV23ContaContabilIdFinal',fld:'vCONTACONTABILIDFINAL'},{av:'AV22ContaContabilIdInicial',fld:'vCONTACONTABILIDINICIAL'},{av:'AV21Nivel',fld:'vNIVEL'},{av:'AV20Ano',fld:'vANO'},{av:'AV19Mes',fld:'vMES'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV71OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'PARAMETROS'"] = [[],[]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV57TxtTela',fld:'vTXTTELA'},{av:'AV76Pgmname',fld:'vPGMNAME'},{av:'AV16TpComparativo',fld:'vTPCOMPARATIVO'},{av:'AV17TpAnalise',fld:'vTPANALISE'},{av:'AV18DesLancApuracao',fld:'vDESLANCAPURACAO'}],[{av:'AV71OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV76Pgmname',fld:'vPGMNAME'},{av:'AV72SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV57TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV80GXV1',fld:'vGXV1'},{av:'AV73SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV16TpComparativo',fld:'vTPCOMPARATIVO'},{av:'AV17TpAnalise',fld:'vTPANALISE'},{av:'AV18DesLancApuracao',fld:'vDESLANCAPURACAO'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV76Pgmname',fld:'vPGMNAME'},{av:'AV57TxtTela',fld:'vTXTTELA'}],[]];
   this.setPrompt("IMAGE1", [71,100]);
   this.setPrompt("IMAGE2", [76,101]);
   this.setPrompt("PROMPT_CENTROCUSTOIDINICIAL", [85]);
   this.setPrompt("PROMPT_CENTROCUSTOIDFINAL", [89]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hdemonstrativoreceitadespesa());
