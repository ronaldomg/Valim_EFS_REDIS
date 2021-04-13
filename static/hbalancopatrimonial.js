/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:48:23.3
*/
gx.evt.autoSkip = false;
gx.define('hbalancopatrimonial', false, function () {
   this.ServerClass =  "hbalancopatrimonial" ;
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
   this.e190i1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalparmgrpordenacao",["S", "Parâmetros do Balanço Patrimonial"]), ["", ""]);
      this.refreshOutputs([]);
   };
   this.e110i2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e130i2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e150i2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e160i2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e170i2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e200i2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,23,26,29,31,33,34,37,39,44,46,50,52,56,58,63,66,68,71,73,75,79,81,84,86,88,92,94,98,100,103,104,106,108,109,114,117,119,123,125,130,138,141,142,143,145,146];
   this.GXLastCtrlId =146;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TABTXT",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV70TxtTela",gxold:"OV70TxtTela",gxvar:"AV70TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV70TxtTela=Value},v2z:function(Value){gx.O.ZV70TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV70TxtTela)},c2v:function(){gx.O.AV70TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"IMAGE2",grid:0};
   GXValidFnc[17]={fld:"IMAGE1",grid:0};
   GXValidFnc[20]={fld:"TABLE7",grid:0};
   GXValidFnc[23]={fld:"TABLE8",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[29]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPO",gxz:"ZV15Tipo",gxold:"OV15Tipo",gxvar:"AV15Tipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV15Tipo=Value},v2z:function(Value){gx.O.ZV15Tipo=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPO",gx.O.AV15Tipo)},c2v:function(){gx.O.AV15Tipo=this.val()},val:function(){return gx.fn.getControlValue("vTIPO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDELINHASMARGSUP",gxz:"ZV29QtdeLinhasMargSup",gxold:"OV29QtdeLinhasMargSup",gxvar:"AV29QtdeLinhasMargSup",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29QtdeLinhasMargSup=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29QtdeLinhasMargSup=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDELINHASMARGSUP",gx.O.AV29QtdeLinhasMargSup,0)},c2v:function(){gx.O.AV29QtdeLinhasMargSup=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDELINHASMARGSUP",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODELO",gxz:"ZV16Modelo",gxold:"OV16Modelo",gxvar:"AV16Modelo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV16Modelo=Value},v2z:function(Value){gx.O.ZV16Modelo=Value},v2c:function(){gx.fn.setComboBoxValue("vMODELO",gx.O.AV16Modelo)},c2v:function(){gx.O.AV16Modelo=this.val()},val:function(){return gx.fn.getControlValue("vMODELO")},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBALANCOABERTURA",gxz:"ZV25BalancoAbertura",gxold:"OV25BalancoAbertura",gxvar:"AV25BalancoAbertura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV25BalancoAbertura=Value},v2z:function(Value){gx.O.ZV25BalancoAbertura=Value},v2c:function(){gx.fn.setCheckBoxValue("vBALANCOABERTURA",gx.O.AV25BalancoAbertura,"S")},c2v:function(){gx.O.AV25BalancoAbertura=this.val()},val:function(){return gx.fn.getControlValue("vBALANCOABERTURA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[46]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMIRTERMORECONHECIMENTO",gxz:"ZV17ImprimirTermoReconhecimento",gxold:"OV17ImprimirTermoReconhecimento",gxvar:"AV17ImprimirTermoReconhecimento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV17ImprimirTermoReconhecimento=Value},v2z:function(Value){gx.O.ZV17ImprimirTermoReconhecimento=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPRIMIRTERMORECONHECIMENTO",gx.O.AV17ImprimirTermoReconhecimento,"S")},c2v:function(){gx.O.AV17ImprimirTermoReconhecimento=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMIRTERMORECONHECIMENTO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[50]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBALANCOCOMPARATIVO",gxz:"ZV26BalancoComparativo",gxold:"OV26BalancoComparativo",gxvar:"AV26BalancoComparativo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV26BalancoComparativo=Value},v2z:function(Value){gx.O.ZV26BalancoComparativo=Value},v2c:function(){gx.fn.setCheckBoxValue("vBALANCOCOMPARATIVO",gx.O.AV26BalancoComparativo,"S")},c2v:function(){gx.O.AV26BalancoComparativo=this.val()},val:function(){return gx.fn.getControlValue("vBALANCOCOMPARATIVO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[52]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMIRESPACOASSINATURA",gxz:"ZV18ImprimirEspacoAssinatura",gxold:"OV18ImprimirEspacoAssinatura",gxvar:"AV18ImprimirEspacoAssinatura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV18ImprimirEspacoAssinatura=Value},v2z:function(Value){gx.O.ZV18ImprimirEspacoAssinatura=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPRIMIRESPACOASSINATURA",gx.O.AV18ImprimirEspacoAssinatura,"S")},c2v:function(){gx.O.AV18ImprimirEspacoAssinatura=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMIRESPACOASSINATURA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[56]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMEVARIACAO",gxz:"ZV27ImprimeVariacao",gxold:"OV27ImprimeVariacao",gxvar:"AV27ImprimeVariacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV27ImprimeVariacao=Value},v2z:function(Value){gx.O.ZV27ImprimeVariacao=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPRIMEVARIACAO",gx.O.AV27ImprimeVariacao,"S")},c2v:function(){gx.O.AV27ImprimeVariacao=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMEVARIACAO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[58]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMECLASSIFICACAOCORRENTISTA",gxz:"ZV28ImprimeClassificacaoCorrentista",gxold:"OV28ImprimeClassificacaoCorrentista",gxvar:"AV28ImprimeClassificacaoCorrentista",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV28ImprimeClassificacaoCorrentista=Value},v2z:function(Value){gx.O.ZV28ImprimeClassificacaoCorrentista=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPRIMECLASSIFICACAOCORRENTISTA",gx.O.AV28ImprimeClassificacaoCorrentista,"S")},c2v:function(){gx.O.AV28ImprimeClassificacaoCorrentista=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMECLASSIFICACAOCORRENTISTA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[63]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[66]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[68]={fld:"TABLE9",grid:0};
   GXValidFnc[71]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESREF",gxz:"ZV30MesRef",gxold:"OV30MesRef",gxvar:"AV30MesRef",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30MesRef=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30MesRef=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESREF",gx.O.AV30MesRef,0)},c2v:function(){gx.O.AV30MesRef=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESREF",'.')},nac:gx.falseFn};
   GXValidFnc[73]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOREF",gxz:"ZV31AnoRef",gxold:"OV31AnoRef",gxvar:"AV31AnoRef",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31AnoRef=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31AnoRef=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOREF",gx.O.AV31AnoRef,0)},c2v:function(){gx.O.AV31AnoRef=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOREF",'.')},nac:gx.falseFn};
   GXValidFnc[79]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[81]={fld:"TABLE10",grid:0};
   GXValidFnc[84]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESSEGCOL",gxz:"ZV32MesSegCol",gxold:"OV32MesSegCol",gxvar:"AV32MesSegCol",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32MesSegCol=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32MesSegCol=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESSEGCOL",gx.O.AV32MesSegCol,0)},c2v:function(){gx.O.AV32MesSegCol=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESSEGCOL",'.')},nac:gx.falseFn};
   GXValidFnc[86]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[88]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOSEGCOL",gxz:"ZV33AnoSegCol",gxold:"OV33AnoSegCol",gxvar:"AV33AnoSegCol",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33AnoSegCol=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33AnoSegCol=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOSEGCOL",gx.O.AV33AnoSegCol,0)},c2v:function(){gx.O.AV33AnoSegCol=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOSEGCOL",'.')},nac:gx.falseFn};
   GXValidFnc[92]={fld:"NIVEL", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNIVEL",gxz:"ZV23Nivel",gxold:"OV23Nivel",gxvar:"AV23Nivel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23Nivel=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23Nivel=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNIVEL",gx.O.AV23Nivel,0)},c2v:function(){gx.O.AV23Nivel=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNIVEL",'.')},nac:gx.falseFn};
   GXValidFnc[98]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[100]={fld:"TABLE11",grid:0};
   GXValidFnc[103]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILINICIAL",gxz:"ZV19ContaContabilInicial",gxold:"OV19ContaContabilInicial",gxvar:"AV19ContaContabilInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19ContaContabilInicial=Value},v2z:function(Value){gx.O.ZV19ContaContabilInicial=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILINICIAL",gx.O.AV19ContaContabilInicial,0)},c2v:function(){gx.O.AV19ContaContabilInicial=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILINICIAL")},nac:gx.falseFn};
   GXValidFnc[104]={fld:"PROMPT1",grid:0};
   GXValidFnc[106]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[108]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILFINAL",gxz:"ZV20ContaContabilFinal",gxold:"OV20ContaContabilFinal",gxvar:"AV20ContaContabilFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ContaContabilFinal=Value},v2z:function(Value){gx.O.ZV20ContaContabilFinal=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILFINAL",gx.O.AV20ContaContabilFinal,0)},c2v:function(){gx.O.AV20ContaContabilFinal=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILFINAL")},nac:gx.falseFn};
   GXValidFnc[109]={fld:"PROMPT2",grid:0};
   GXValidFnc[114]={fld:"TITULOPAGINACAO", format:0,grid:0};
   GXValidFnc[117]={fld:"PAGINAATUAL", format:0,grid:0};
   GXValidFnc[119]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINACAONUMEROBALANCO",gxz:"ZV54PaginacaoNumeroBalanco",gxold:"OV54PaginacaoNumeroBalanco",gxvar:"AV54PaginacaoNumeroBalanco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54PaginacaoNumeroBalanco=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV54PaginacaoNumeroBalanco=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINACAONUMEROBALANCO",gx.O.AV54PaginacaoNumeroBalanco,0)},c2v:function(){gx.O.AV54PaginacaoNumeroBalanco=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINACAONUMEROBALANCO",'.')},nac:gx.falseFn};
   GXValidFnc[123]={fld:"QTDEPAGINAS", format:0,grid:0};
   GXValidFnc[125]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINACAOQUANTIDADEBALANCO",gxz:"ZV53PaginacaoQuantidadeBalanco",gxold:"OV53PaginacaoQuantidadeBalanco",gxvar:"AV53PaginacaoQuantidadeBalanco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53PaginacaoQuantidadeBalanco=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV53PaginacaoQuantidadeBalanco=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINACAOQUANTIDADEBALANCO",gx.O.AV53PaginacaoQuantidadeBalanco,0)},c2v:function(){gx.O.AV53PaginacaoQuantidadeBalanco=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINACAOQUANTIDADEBALANCO",'.')},nac:gx.falseFn};
   GXValidFnc[130]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vATUALIZARPAGINA",gxz:"ZV24AtualizarPagina",gxold:"OV24AtualizarPagina",gxvar:"AV24AtualizarPagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV24AtualizarPagina=Value},v2z:function(Value){gx.O.ZV24AtualizarPagina=Value},v2c:function(){gx.fn.setCheckBoxValue("vATUALIZARPAGINA",gx.O.AV24AtualizarPagina,"S")},c2v:function(){gx.O.AV24AtualizarPagina=this.val()},val:function(){return gx.fn.getControlValue("vATUALIZARPAGINA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[138]={fld:"JS", format:2,grid:0};
   GXValidFnc[141]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV46ChamaOnBlurMascara",gxold:"OV46ChamaOnBlurMascara",gxvar:"AV46ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV46ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV46ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV46ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[142]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADFIM",gxz:"ZV41TradFim",gxold:"OV41TradFim",gxvar:"AV41TradFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41TradFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41TradFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADFIM",gx.O.AV41TradFim,0)},c2v:function(){gx.O.AV41TradFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADFIM",'.')},nac:gx.falseFn};
   GXValidFnc[143]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADINI",gxz:"ZV40TradIni",gxold:"OV40TradIni",gxvar:"AV40TradIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40TradIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40TradIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADINI",gx.O.AV40TradIni,0)},c2v:function(){gx.O.AV40TradIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADINI",'.')},nac:gx.falseFn};
   GXValidFnc[145]={fld:"BTNPARM",grid:0};
   GXValidFnc[146]={fld:"BTNHELP",grid:0};
   this.AV70TxtTela = "" ;
   this.ZV70TxtTela = "" ;
   this.OV70TxtTela = "" ;
   this.AV15Tipo = "" ;
   this.ZV15Tipo = "" ;
   this.OV15Tipo = "" ;
   this.AV29QtdeLinhasMargSup = 0 ;
   this.ZV29QtdeLinhasMargSup = 0 ;
   this.OV29QtdeLinhasMargSup = 0 ;
   this.AV16Modelo = "" ;
   this.ZV16Modelo = "" ;
   this.OV16Modelo = "" ;
   this.AV25BalancoAbertura = "" ;
   this.ZV25BalancoAbertura = "" ;
   this.OV25BalancoAbertura = "" ;
   this.AV17ImprimirTermoReconhecimento = "" ;
   this.ZV17ImprimirTermoReconhecimento = "" ;
   this.OV17ImprimirTermoReconhecimento = "" ;
   this.AV26BalancoComparativo = "" ;
   this.ZV26BalancoComparativo = "" ;
   this.OV26BalancoComparativo = "" ;
   this.AV18ImprimirEspacoAssinatura = "" ;
   this.ZV18ImprimirEspacoAssinatura = "" ;
   this.OV18ImprimirEspacoAssinatura = "" ;
   this.AV27ImprimeVariacao = "" ;
   this.ZV27ImprimeVariacao = "" ;
   this.OV27ImprimeVariacao = "" ;
   this.AV28ImprimeClassificacaoCorrentista = "" ;
   this.ZV28ImprimeClassificacaoCorrentista = "" ;
   this.OV28ImprimeClassificacaoCorrentista = "" ;
   this.AV30MesRef = 0 ;
   this.ZV30MesRef = 0 ;
   this.OV30MesRef = 0 ;
   this.AV31AnoRef = 0 ;
   this.ZV31AnoRef = 0 ;
   this.OV31AnoRef = 0 ;
   this.AV32MesSegCol = 0 ;
   this.ZV32MesSegCol = 0 ;
   this.OV32MesSegCol = 0 ;
   this.AV33AnoSegCol = 0 ;
   this.ZV33AnoSegCol = 0 ;
   this.OV33AnoSegCol = 0 ;
   this.AV23Nivel = 0 ;
   this.ZV23Nivel = 0 ;
   this.OV23Nivel = 0 ;
   this.AV19ContaContabilInicial = "" ;
   this.ZV19ContaContabilInicial = "" ;
   this.OV19ContaContabilInicial = "" ;
   this.AV20ContaContabilFinal = "" ;
   this.ZV20ContaContabilFinal = "" ;
   this.OV20ContaContabilFinal = "" ;
   this.AV54PaginacaoNumeroBalanco = 0 ;
   this.ZV54PaginacaoNumeroBalanco = 0 ;
   this.OV54PaginacaoNumeroBalanco = 0 ;
   this.AV53PaginacaoQuantidadeBalanco = 0 ;
   this.ZV53PaginacaoQuantidadeBalanco = 0 ;
   this.OV53PaginacaoQuantidadeBalanco = 0 ;
   this.AV24AtualizarPagina = "" ;
   this.ZV24AtualizarPagina = "" ;
   this.OV24AtualizarPagina = "" ;
   this.AV46ChamaOnBlurMascara = "" ;
   this.ZV46ChamaOnBlurMascara = "" ;
   this.OV46ChamaOnBlurMascara = "" ;
   this.AV41TradFim = 0 ;
   this.ZV41TradFim = 0 ;
   this.OV41TradFim = 0 ;
   this.AV40TradIni = 0 ;
   this.ZV40TradIni = 0 ;
   this.OV40TradIni = 0 ;
   this.AV70TxtTela = "" ;
   this.AV15Tipo = "" ;
   this.AV29QtdeLinhasMargSup = 0 ;
   this.AV16Modelo = "" ;
   this.AV25BalancoAbertura = "" ;
   this.AV17ImprimirTermoReconhecimento = "" ;
   this.AV26BalancoComparativo = "" ;
   this.AV18ImprimirEspacoAssinatura = "" ;
   this.AV27ImprimeVariacao = "" ;
   this.AV28ImprimeClassificacaoCorrentista = "" ;
   this.AV30MesRef = 0 ;
   this.AV31AnoRef = 0 ;
   this.AV32MesSegCol = 0 ;
   this.AV33AnoSegCol = 0 ;
   this.AV23Nivel = 0 ;
   this.AV19ContaContabilInicial = "" ;
   this.AV20ContaContabilFinal = "" ;
   this.AV54PaginacaoNumeroBalanco = 0 ;
   this.AV53PaginacaoQuantidadeBalanco = 0 ;
   this.AV24AtualizarPagina = "" ;
   this.AV46ChamaOnBlurMascara = "" ;
   this.AV41TradFim = 0 ;
   this.AV40TradIni = 0 ;
   this.A82EmpresaPaginacaoEmpresaId = "" ;
   this.A89PaginacaoNumeroBalanco = 0 ;
   this.A88PaginacaoQuantidadeBalanco = 0 ;
   this.Events = {"e110i2_client": ["'FECHAR'", true] ,"e130i2_client": ["ENTER", true] ,"e150i2_client": ["'SALVARTXT'", true] ,"e160i2_client": ["VTXTTELA.CLICK", true] ,"e170i2_client": ["'EXCLUIRTXT'", true] ,"e200i2_client": ["CANCEL", true] ,"e190i1_client": ["'PARAMETROS'", false]};
   this.EvtParms["REFRESH"] = [[{av:'AV89Pgmname',fld:'vPGMNAME'},{av:'AV85SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A82EmpresaPaginacaoEmpresaId',fld:'EMPRESAPAGINACAOEMPRESAID'},{av:'AV55EmpresaPadraoPag',fld:'vEMPRESAPADRAOPAG'},{av:'A89PaginacaoNumeroBalanco',fld:'PAGINACAONUMEROBALANCO'},{av:'A88PaginacaoQuantidadeBalanco',fld:'PAGINACAOQUANTIDADEBALANCO'},{av:'AV70TxtTela',fld:'vTXTTELA'}],[{av:'AV70TxtTela',fld:'vTXTTELA'},{av:'AV93GXV2',fld:'vGXV2'},{av:'AV86SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV54PaginacaoNumeroBalanco',fld:'vPAGINACAONUMEROBALANCO'},{av:'AV53PaginacaoQuantidadeBalanco',fld:'vPAGINACAOQUANTIDADEBALANCO'},{av:'AV92GXV1',fld:'vGXV1'},{av:'AV15Tipo',fld:'vTIPO'},{av:'AV16Modelo',fld:'vMODELO'},{av:'AV29QtdeLinhasMargSup',fld:'vQTDELINHASMARGSUP'},{av:'AV23Nivel',fld:'vNIVEL'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV30MesRef',fld:'vMESREF'},{av:'AV31AnoRef',fld:'vANOREF'},{av:'AV32MesSegCol',fld:'vMESSEGCOL'},{av:'AV33AnoSegCol',fld:'vANOSEGCOL'},{av:'AV26BalancoComparativo',fld:'vBALANCOCOMPARATIVO'},{av:'AV19ContaContabilInicial',fld:'vCONTACONTABILINICIAL'},{av:'AV20ContaContabilFinal',fld:'vCONTACONTABILFINAL'},{av:'AV25BalancoAbertura',fld:'vBALANCOABERTURA'},{av:'AV90Pgmdesc',fld:'vPGMDESC'},{av:'AV58QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV18ImprimirEspacoAssinatura',fld:'vIMPRIMIRESPACOASSINATURA'},{av:'AV17ImprimirTermoReconhecimento',fld:'vIMPRIMIRTERMORECONHECIMENTO'},{av:'AV29QtdeLinhasMargSup',fld:'vQTDELINHASMARGSUP'},{av:'AV23Nivel',fld:'vNIVEL'},{av:'AV39DataSegCol',fld:'vDATASEGCOL'},{av:'AV28ImprimeClassificacaoCorrentista',fld:'vIMPRIMECLASSIFICACAOCORRENTISTA'},{av:'AV27ImprimeVariacao',fld:'vIMPRIMEVARIACAO'},{av:'AV16Modelo',fld:'vMODELO'},{av:'AV15Tipo',fld:'vTIPO'},{av:'AV11OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV89Pgmname',fld:'vPGMNAME'},{av:'AV70TxtTela',fld:'vTXTTELA'},{av:'AV53PaginacaoQuantidadeBalanco',fld:'vPAGINACAOQUANTIDADEBALANCO'},{av:'AV54PaginacaoNumeroBalanco',fld:'vPAGINACAONUMEROBALANCO'},{av:'AV24AtualizarPagina',fld:'vATUALIZARPAGINA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV34ConsisteDataRef',fld:'vCONSISTEDATAREF'},{av:'AV36DataRefStr',fld:'vDATAREFSTR'},{av:'AV37DataRef',fld:'vDATAREF'},{av:'AV35ConsisteDataSegCol',fld:'vCONSISTEDATASEGCOL'},{av:'AV38DataSegColStr',fld:'vDATASEGCOLSTR'},{av:'AV39DataSegCol',fld:'vDATASEGCOL'},{av:'AV44ErroDataRef',fld:'vERRODATAREF'},{av:'AV45ErroDataSegCol',fld:'vERRODATASEGCOL'},{av:'AV51ExisteContaIni',fld:'vEXISTECONTAINI'},{av:'AV52ExisteContaFim',fld:'vEXISTECONTAFIM'},{av:'AV81SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV33AnoSegCol',fld:'vANOSEGCOL'},{av:'AV32MesSegCol',fld:'vMESSEGCOL'},{av:'AV11OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV25BalancoAbertura',fld:'vBALANCOABERTURA'},{av:'AV13NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV12NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV58QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV26BalancoComparativo',fld:'vBALANCOCOMPARATIVO'},{av:'AV18ImprimirEspacoAssinatura',fld:'vIMPRIMIRESPACOASSINATURA'},{av:'AV17ImprimirTermoReconhecimento',fld:'vIMPRIMIRTERMORECONHECIMENTO'},{av:'AV29QtdeLinhasMargSup',fld:'vQTDELINHASMARGSUP'},{av:'AV24AtualizarPagina',fld:'vATUALIZARPAGINA'},{av:'AV53PaginacaoQuantidadeBalanco',fld:'vPAGINACAOQUANTIDADEBALANCO'},{av:'AV54PaginacaoNumeroBalanco',fld:'vPAGINACAONUMEROBALANCO'},{av:'AV20ContaContabilFinal',fld:'vCONTACONTABILFINAL'},{av:'AV19ContaContabilInicial',fld:'vCONTACONTABILINICIAL'},{av:'AV23Nivel',fld:'vNIVEL'},{av:'AV31AnoRef',fld:'vANOREF'},{av:'AV30MesRef',fld:'vMESREF'},{av:'AV28ImprimeClassificacaoCorrentista',fld:'vIMPRIMECLASSIFICACAOCORRENTISTA'},{av:'AV27ImprimeVariacao',fld:'vIMPRIMEVARIACAO'},{av:'AV16Modelo',fld:'vMODELO'},{av:'AV15Tipo',fld:'vTIPO'},{av:'AV84OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'PARAMETROS'"] = [[],[]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV70TxtTela',fld:'vTXTTELA'},{av:'AV89Pgmname',fld:'vPGMNAME'},{av:'AV15Tipo',fld:'vTIPO'},{av:'AV16Modelo',fld:'vMODELO'},{av:'AV29QtdeLinhasMargSup',fld:'vQTDELINHASMARGSUP'},{av:'AV23Nivel',fld:'vNIVEL'}],[{av:'AV84OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV89Pgmname',fld:'vPGMNAME'},{av:'AV85SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV70TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV92GXV1',fld:'vGXV1'},{av:'AV86SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV15Tipo',fld:'vTIPO'},{av:'AV16Modelo',fld:'vMODELO'},{av:'AV29QtdeLinhasMargSup',fld:'vQTDELINHASMARGSUP'},{av:'AV23Nivel',fld:'vNIVEL'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV89Pgmname',fld:'vPGMNAME'},{av:'AV70TxtTela',fld:'vTXTTELA'}],[]];
   this.setPrompt("PROMPT1", [103,143]);
   this.setPrompt("PROMPT2", [108,142]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hbalancopatrimonial());
