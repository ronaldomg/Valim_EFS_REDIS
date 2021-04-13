/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:53:32.17
*/
gx.evt.autoSkip = false;
gx.define('hrelacaocontacontabil', false, function () {
   this.ServerClass =  "hrelacaocontacontabil" ;
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
   this.e193q1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalparmgrpordenacao",["N", "Parâmetros Relação Conta Contábil"]), ["", ""]);
      this.refreshOutputs([]);
   };
   this.e113q2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e133q2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e153q2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e163q2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e173q2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e203q2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,23,26,29,31,34,36,40,44,49,52,54,57,59,62,63,65,67,68,71,73,76,78,80,83,85,90,93,95,98,100,104,113,114,115,116,118,119,120,121];
   this.GXLastCtrlId =121;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABTXT",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK54", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV59TxtTela",gxold:"OV59TxtTela",gxvar:"AV59TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV59TxtTela=Value},v2z:function(Value){gx.O.ZV59TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV59TxtTela)},c2v:function(){gx.O.AV59TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"IMAGE9",grid:0};
   GXValidFnc[17]={fld:"IMAGE10",grid:0};
   GXValidFnc[20]={fld:"TABLE7",grid:0};
   GXValidFnc[23]={fld:"TABLE3",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[29]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODELO",gxz:"ZV15Modelo",gxold:"OV15Modelo",gxvar:"AV15Modelo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV15Modelo=Value},v2z:function(Value){gx.O.ZV15Modelo=Value},v2c:function(){gx.fn.setComboBoxValue("vMODELO",gx.O.AV15Modelo)},c2v:function(){gx.O.AV15Modelo=this.val()},val:function(){return gx.fn.getControlValue("vMODELO")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPO",gxz:"ZV16Tipo",gxold:"OV16Tipo",gxvar:"AV16Tipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV16Tipo=Value},v2z:function(Value){gx.O.ZV16Tipo=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPO",gx.O.AV16Tipo)},c2v:function(){gx.O.AV16Tipo=this.val()},val:function(){return gx.fn.getControlValue("vTIPO")},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEDENTARDESCRICAO",gxz:"ZV17EdentarDescricao",gxold:"OV17EdentarDescricao",gxvar:"AV17EdentarDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV17EdentarDescricao=Value},v2z:function(Value){gx.O.ZV17EdentarDescricao=Value},v2c:function(){gx.fn.setCheckBoxValue("vEDENTARDESCRICAO",gx.O.AV17EdentarDescricao,"S")},c2v:function(){gx.O.AV17EdentarDescricao=this.val()},val:function(){return gx.fn.getControlValue("vEDENTARDESCRICAO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGERARCSV",gxz:"ZV48GerarCsv",gxold:"OV48GerarCsv",gxvar:"AV48GerarCsv",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV48GerarCsv=Value},v2z:function(Value){gx.O.ZV48GerarCsv=Value},v2c:function(){gx.fn.setCheckBoxValue("vGERARCSV",gx.O.AV48GerarCsv,"S")},c2v:function(){gx.O.AV48GerarCsv=this.val()},val:function(){return gx.fn.getControlValue("vGERARCSV")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[49]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[52]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITUACAOCONTAS",gxz:"ZV18SituacaoContas",gxold:"OV18SituacaoContas",gxvar:"AV18SituacaoContas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV18SituacaoContas=Value},v2z:function(Value){gx.O.ZV18SituacaoContas=Value},v2c:function(){gx.fn.setComboBoxValue("vSITUACAOCONTAS",gx.O.AV18SituacaoContas)},c2v:function(){gx.O.AV18SituacaoContas=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAOCONTAS")},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[59]={fld:"TABLE5",grid:0};
   GXValidFnc[62]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILINICIAL",gxz:"ZV19ContaContabilInicial",gxold:"OV19ContaContabilInicial",gxvar:"AV19ContaContabilInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19ContaContabilInicial=Value},v2z:function(Value){gx.O.ZV19ContaContabilInicial=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILINICIAL",gx.O.AV19ContaContabilInicial,0)},c2v:function(){gx.O.AV19ContaContabilInicial=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILINICIAL")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"IMAGE1",grid:0};
   GXValidFnc[65]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[67]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILFINAL",gxz:"ZV20ContaContabilFinal",gxold:"OV20ContaContabilFinal",gxvar:"AV20ContaContabilFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ContaContabilFinal=Value},v2z:function(Value){gx.O.ZV20ContaContabilFinal=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILFINAL",gx.O.AV20ContaContabilFinal,0)},c2v:function(){gx.O.AV20ContaContabilFinal=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILFINAL")},nac:gx.falseFn};
   GXValidFnc[68]={fld:"IMAGE2",grid:0};
   GXValidFnc[71]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[73]={fld:"TABLE4",grid:0};
   GXValidFnc[76]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZAINICIAL",gxz:"ZV22NaturezaInicial",gxold:"OV22NaturezaInicial",gxvar:"AV22NaturezaInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22NaturezaInicial=Value},v2z:function(Value){gx.O.ZV22NaturezaInicial=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAINICIAL",gx.O.AV22NaturezaInicial,0)},c2v:function(){gx.O.AV22NaturezaInicial=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAINICIAL")},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZAFINAL",gxz:"ZV23NaturezaFinal",gxold:"OV23NaturezaFinal",gxvar:"AV23NaturezaFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23NaturezaFinal=Value},v2z:function(Value){gx.O.ZV23NaturezaFinal=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAFINAL",gx.O.AV23NaturezaFinal,0)},c2v:function(){gx.O.AV23NaturezaFinal=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAFINAL")},nac:gx.falseFn};
   GXValidFnc[83]={fld:"NIVEL", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNIVEL",gxz:"ZV24Nivel",gxold:"OV24Nivel",gxvar:"AV24Nivel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24Nivel=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24Nivel=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNIVEL",gx.O.AV24Nivel,0)},c2v:function(){gx.O.AV24Nivel=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNIVEL",'.')},nac:gx.falseFn};
   GXValidFnc[90]={fld:"TITULOPAGINACAO", format:0,grid:0};
   GXValidFnc[93]={fld:"PAGINAATUAL", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINACAONUMEROPLANOCONTAS",gxz:"ZV27PaginacaoNumeroPlanoContas",gxold:"OV27PaginacaoNumeroPlanoContas",gxvar:"AV27PaginacaoNumeroPlanoContas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27PaginacaoNumeroPlanoContas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27PaginacaoNumeroPlanoContas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINACAONUMEROPLANOCONTAS",gx.O.AV27PaginacaoNumeroPlanoContas,0)},c2v:function(){gx.O.AV27PaginacaoNumeroPlanoContas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINACAONUMEROPLANOCONTAS",'.')},nac:gx.falseFn};
   GXValidFnc[98]={fld:"QTDEPAGINAS", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINACAOQUANTIDADEPLANOCONTAS",gxz:"ZV26PaginacaoQuantidadePlanoContas",gxold:"OV26PaginacaoQuantidadePlanoContas",gxvar:"AV26PaginacaoQuantidadePlanoContas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26PaginacaoQuantidadePlanoContas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26PaginacaoQuantidadePlanoContas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINACAOQUANTIDADEPLANOCONTAS",gx.O.AV26PaginacaoQuantidadePlanoContas,0)},c2v:function(){gx.O.AV26PaginacaoQuantidadePlanoContas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINACAOQUANTIDADEPLANOCONTAS",'.')},nac:gx.falseFn};
   GXValidFnc[104]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vATUALIZARPAGINA",gxz:"ZV32AtualizarPagina",gxold:"OV32AtualizarPagina",gxvar:"AV32AtualizarPagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV32AtualizarPagina=Value},v2z:function(Value){gx.O.ZV32AtualizarPagina=Value},v2c:function(){gx.fn.setCheckBoxValue("vATUALIZARPAGINA",gx.O.AV32AtualizarPagina,"S")},c2v:function(){gx.O.AV32AtualizarPagina=this.val()},val:function(){return gx.fn.getControlValue("vATUALIZARPAGINA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[113]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV39ChamaOnBlurMascara",gxold:"OV39ChamaOnBlurMascara",gxvar:"AV39ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV39ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV39ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV39ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[114]={fld:"JS", format:2,grid:0};
   GXValidFnc[115]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORINI",gxz:"ZV37TradutorIni",gxold:"OV37TradutorIni",gxvar:"AV37TradutorIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37TradutorIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37TradutorIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTORINI",gx.O.AV37TradutorIni,0)},c2v:function(){gx.O.AV37TradutorIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTORINI",'.')},nac:gx.falseFn};
   GXValidFnc[116]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORFIM",gxz:"ZV36TradutorFim",gxold:"OV36TradutorFim",gxvar:"AV36TradutorFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36TradutorFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36TradutorFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTORFIM",gx.O.AV36TradutorFim,0)},c2v:function(){gx.O.AV36TradutorFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTORFIM",'.')},nac:gx.falseFn};
   GXValidFnc[118]={fld:"BTNPARM",grid:0};
   GXValidFnc[119]={fld:"BTNHELP",grid:0};
   GXValidFnc[120]={fld:"PROMPT_NATUREZAINICIAL",grid:0};
   GXValidFnc[121]={fld:"PROMPT_NATUREZAFINAL",grid:0};
   this.AV59TxtTela = "" ;
   this.ZV59TxtTela = "" ;
   this.OV59TxtTela = "" ;
   this.AV15Modelo = "" ;
   this.ZV15Modelo = "" ;
   this.OV15Modelo = "" ;
   this.AV16Tipo = "" ;
   this.ZV16Tipo = "" ;
   this.OV16Tipo = "" ;
   this.AV17EdentarDescricao = "" ;
   this.ZV17EdentarDescricao = "" ;
   this.OV17EdentarDescricao = "" ;
   this.AV48GerarCsv = "" ;
   this.ZV48GerarCsv = "" ;
   this.OV48GerarCsv = "" ;
   this.AV18SituacaoContas = "" ;
   this.ZV18SituacaoContas = "" ;
   this.OV18SituacaoContas = "" ;
   this.AV19ContaContabilInicial = "" ;
   this.ZV19ContaContabilInicial = "" ;
   this.OV19ContaContabilInicial = "" ;
   this.AV20ContaContabilFinal = "" ;
   this.ZV20ContaContabilFinal = "" ;
   this.OV20ContaContabilFinal = "" ;
   this.AV22NaturezaInicial = "" ;
   this.ZV22NaturezaInicial = "" ;
   this.OV22NaturezaInicial = "" ;
   this.AV23NaturezaFinal = "" ;
   this.ZV23NaturezaFinal = "" ;
   this.OV23NaturezaFinal = "" ;
   this.AV24Nivel = 0 ;
   this.ZV24Nivel = 0 ;
   this.OV24Nivel = 0 ;
   this.AV27PaginacaoNumeroPlanoContas = 0 ;
   this.ZV27PaginacaoNumeroPlanoContas = 0 ;
   this.OV27PaginacaoNumeroPlanoContas = 0 ;
   this.AV26PaginacaoQuantidadePlanoContas = 0 ;
   this.ZV26PaginacaoQuantidadePlanoContas = 0 ;
   this.OV26PaginacaoQuantidadePlanoContas = 0 ;
   this.AV32AtualizarPagina = "" ;
   this.ZV32AtualizarPagina = "" ;
   this.OV32AtualizarPagina = "" ;
   this.AV39ChamaOnBlurMascara = "" ;
   this.ZV39ChamaOnBlurMascara = "" ;
   this.OV39ChamaOnBlurMascara = "" ;
   this.AV37TradutorIni = 0 ;
   this.ZV37TradutorIni = 0 ;
   this.OV37TradutorIni = 0 ;
   this.AV36TradutorFim = 0 ;
   this.ZV36TradutorFim = 0 ;
   this.OV36TradutorFim = 0 ;
   this.AV59TxtTela = "" ;
   this.AV15Modelo = "" ;
   this.AV16Tipo = "" ;
   this.AV17EdentarDescricao = "" ;
   this.AV48GerarCsv = "" ;
   this.AV18SituacaoContas = "" ;
   this.AV19ContaContabilInicial = "" ;
   this.AV20ContaContabilFinal = "" ;
   this.AV22NaturezaInicial = "" ;
   this.AV23NaturezaFinal = "" ;
   this.AV24Nivel = 0 ;
   this.AV27PaginacaoNumeroPlanoContas = 0 ;
   this.AV26PaginacaoQuantidadePlanoContas = 0 ;
   this.AV32AtualizarPagina = "" ;
   this.AV39ChamaOnBlurMascara = "" ;
   this.AV37TradutorIni = 0 ;
   this.AV36TradutorFim = 0 ;
   this.A82EmpresaPaginacaoEmpresaId = "" ;
   this.A91PaginacaoNumeroPlanoContas = 0 ;
   this.A90PaginacaoQuantidadePlanoContas = 0 ;
   this.Events = {"e113q2_client": ["'FECHAR'", true] ,"e133q2_client": ["ENTER", true] ,"e153q2_client": ["'SALVARTXT'", true] ,"e163q2_client": ["VTXTTELA.CLICK", true] ,"e173q2_client": ["'EXCLUIRTXT'", true] ,"e203q2_client": ["CANCEL", true] ,"e193q1_client": ["'PARAMETROS'", false]};
   this.EvtParms["REFRESH"] = [[{av:'AV80Pgmname',fld:'vPGMNAME'},{av:'AV75SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A82EmpresaPaginacaoEmpresaId',fld:'EMPRESAPAGINACAOEMPRESAID'},{av:'AV28EmpresaPadraoPag',fld:'vEMPRESAPADRAOPAG'},{av:'A91PaginacaoNumeroPlanoContas',fld:'PAGINACAONUMEROPLANOCONTAS'},{av:'A90PaginacaoQuantidadePlanoContas',fld:'PAGINACAOQUANTIDADEPLANOCONTAS'},{av:'AV59TxtTela',fld:'vTXTTELA'}],[{av:'AV59TxtTela',fld:'vTXTTELA'},{av:'AV84GXV2',fld:'vGXV2'},{av:'AV76SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV27PaginacaoNumeroPlanoContas',fld:'vPAGINACAONUMEROPLANOCONTAS'},{av:'AV26PaginacaoQuantidadePlanoContas',fld:'vPAGINACAOQUANTIDADEPLANOCONTAS'},{av:'AV83GXV1',fld:'vGXV1'},{av:'AV17EdentarDescricao',fld:'vEDENTARDESCRICAO'},{av:'AV15Modelo',fld:'vMODELO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV31ClassifNatureza',fld:'vCLASSIFNATUREZA'},{av:'AV81Pgmdesc',fld:'vPGMDESC'},{av:'AV48GerarCsv',fld:'vGERARCSV'},{av:'AV17EdentarDescricao',fld:'vEDENTARDESCRICAO'},{av:'AV16Tipo',fld:'vTIPO'},{av:'AV24Nivel',fld:'vNIVEL'},{av:'AV23NaturezaFinal',fld:'vNATUREZAFINAL'},{av:'AV22NaturezaInicial',fld:'vNATUREZAINICIAL'},{av:'AV20ContaContabilFinal',fld:'vCONTACONTABILFINAL'},{av:'AV19ContaContabilInicial',fld:'vCONTACONTABILINICIAL'},{av:'AV18SituacaoContas',fld:'vSITUACAOCONTAS'},{av:'AV80Pgmname',fld:'vPGMNAME'},{av:'AV15Modelo',fld:'vMODELO'},{av:'AV59TxtTela',fld:'vTXTTELA'},{av:'AV26PaginacaoQuantidadePlanoContas',fld:'vPAGINACAOQUANTIDADEPLANOCONTAS'},{av:'AV27PaginacaoNumeroPlanoContas',fld:'vPAGINACAONUMEROPLANOCONTAS'},{av:'AV32AtualizarPagina',fld:'vATUALIZARPAGINA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV70SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV13NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV12NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV46QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV48GerarCsv',fld:'vGERARCSV'},{av:'AV26PaginacaoQuantidadePlanoContas',fld:'vPAGINACAOQUANTIDADEPLANOCONTAS'},{av:'AV27PaginacaoNumeroPlanoContas',fld:'vPAGINACAONUMEROPLANOCONTAS'},{av:'AV32AtualizarPagina',fld:'vATUALIZARPAGINA'},{av:'AV17EdentarDescricao',fld:'vEDENTARDESCRICAO'},{av:'AV16Tipo',fld:'vTIPO'},{av:'AV24Nivel',fld:'vNIVEL'},{av:'AV23NaturezaFinal',fld:'vNATUREZAFINAL'},{av:'AV22NaturezaInicial',fld:'vNATUREZAINICIAL'},{av:'AV20ContaContabilFinal',fld:'vCONTACONTABILFINAL'},{av:'AV19ContaContabilInicial',fld:'vCONTACONTABILINICIAL'},{av:'AV18SituacaoContas',fld:'vSITUACAOCONTAS'},{av:'AV77Orientacao',fld:'vORIENTACAO'},{av:'AV74OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'PARAMETROS'"] = [[],[]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV59TxtTela',fld:'vTXTTELA'},{av:'AV80Pgmname',fld:'vPGMNAME'},{av:'AV17EdentarDescricao',fld:'vEDENTARDESCRICAO'},{av:'AV15Modelo',fld:'vMODELO'}],[{av:'AV74OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV80Pgmname',fld:'vPGMNAME'},{av:'AV75SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV59TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV83GXV1',fld:'vGXV1'},{av:'AV76SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV17EdentarDescricao',fld:'vEDENTARDESCRICAO'},{av:'AV15Modelo',fld:'vMODELO'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV80Pgmname',fld:'vPGMNAME'},{av:'AV59TxtTela',fld:'vTXTTELA'}],[]];
   this.setPrompt("IMAGE1", [62,115]);
   this.setPrompt("IMAGE2", [67,116]);
   this.setPrompt("PROMPT_NATUREZAINICIAL", [76]);
   this.setPrompt("PROMPT_NATUREZAFINAL", [80]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaocontacontabil());
