/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:57:22.97
*/
gx.evt.autoSkip = false;
gx.define('hcomparativovaloresconta', false, function () {
   this.ServerClass =  "hcomparativovaloresconta" ;
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
   this.e196q1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalparmgrpordenacao",["N", "Parâmetros do Comparativo dos Valores das Contas"]), ["", ""]);
      this.refreshOutputs([]);
   };
   this.e116q2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e136q2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e156q2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e166q2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e176q2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e206q2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,23,26,29,31,33,35,39,46,52,54,57,59,61,63,65,67,69,74,76,81,83,86,87,89,91,92,102,103,104,105,107,108];
   this.GXLastCtrlId =108;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABTXT",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV63TxtTela",gxold:"OV63TxtTela",gxvar:"AV63TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV63TxtTela=Value},v2z:function(Value){gx.O.ZV63TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV63TxtTela)},c2v:function(){gx.O.AV63TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"IMAGE3",grid:0};
   GXValidFnc[17]={fld:"IMAGE4",grid:0};
   GXValidFnc[20]={fld:"TABLE7",grid:0};
   GXValidFnc[23]={fld:"TABLE9",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[29]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPORELATORIO",gxz:"ZV26TipoRelatorio",gxold:"OV26TipoRelatorio",gxvar:"AV26TipoRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV26TipoRelatorio=Value},v2z:function(Value){gx.O.ZV26TipoRelatorio=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPORELATORIO",gx.O.AV26TipoRelatorio)},c2v:function(){gx.O.AV26TipoRelatorio=this.val()},val:function(){return gx.fn.getControlValue("vTIPORELATORIO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOVALOR",gxz:"ZV27TipoValor",gxold:"OV27TipoValor",gxvar:"AV27TipoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV27TipoValor=Value},v2z:function(Value){gx.O.ZV27TipoValor=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOVALOR",gx.O.AV27TipoValor)},c2v:function(){gx.O.AV27TipoValor=this.val()},val:function(){return gx.fn.getControlValue("vTIPOVALOR")},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDETALHECORRENTISTA",gxz:"ZV16DetalheCorrentista",gxold:"OV16DetalheCorrentista",gxvar:"AV16DetalheCorrentista",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV16DetalheCorrentista=Value},v2z:function(Value){gx.O.ZV16DetalheCorrentista=Value},v2c:function(){gx.fn.setCheckBoxValue("vDETALHECORRENTISTA",gx.O.AV16DetalheCorrentista,"S")},c2v:function(){gx.O.AV16DetalheCorrentista=this.val()},val:function(){return gx.fn.getControlValue("vDETALHECORRENTISTA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[46]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[52]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[54]={fld:"TABLEREF",grid:0};
   GXValidFnc[57]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESINI",gxz:"ZV17MesIni",gxold:"OV17MesIni",gxvar:"AV17MesIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17MesIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17MesIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESINI",gx.O.AV17MesIni,0)},c2v:function(){gx.O.AV17MesIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESINI",'.')},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOINI",gxz:"ZV18AnoIni",gxold:"OV18AnoIni",gxvar:"AV18AnoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18AnoIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18AnoIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOINI",gx.O.AV18AnoIni,0)},c2v:function(){gx.O.AV18AnoIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOINI",'.')},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESFIN",gxz:"ZV19MesFin",gxold:"OV19MesFin",gxvar:"AV19MesFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19MesFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19MesFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESFIN",gx.O.AV19MesFin,0)},c2v:function(){gx.O.AV19MesFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESFIN",'.')},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOFIN",gxz:"ZV20AnoFin",gxold:"OV20AnoFin",gxvar:"AV20AnoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20AnoFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20AnoFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOFIN",gx.O.AV20AnoFin,0)},c2v:function(){gx.O.AV20AnoFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOFIN",'.')},nac:gx.falseFn};
   GXValidFnc[74]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[76]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNIVEL",gxz:"ZV28Nivel",gxold:"OV28Nivel",gxvar:"AV28Nivel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28Nivel=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28Nivel=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNIVEL",gx.O.AV28Nivel,0)},c2v:function(){gx.O.AV28Nivel=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNIVEL",'.')},nac:gx.falseFn};
   GXValidFnc[81]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[83]={fld:"TABLECC",grid:0};
   GXValidFnc[86]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAINICIAL",gxz:"ZV29ContaInicial",gxold:"OV29ContaInicial",gxvar:"AV29ContaInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ContaInicial=Value},v2z:function(Value){gx.O.ZV29ContaInicial=Value},v2c:function(){gx.fn.setControlValue("vCONTAINICIAL",gx.O.AV29ContaInicial,0)},c2v:function(){gx.O.AV29ContaInicial=this.val()},val:function(){return gx.fn.getControlValue("vCONTAINICIAL")},nac:gx.falseFn};
   GXValidFnc[87]={fld:"IMAGE10",grid:0};
   GXValidFnc[89]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[91]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAFINAL",gxz:"ZV30ContaFinal",gxold:"OV30ContaFinal",gxvar:"AV30ContaFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ContaFinal=Value},v2z:function(Value){gx.O.ZV30ContaFinal=Value},v2c:function(){gx.fn.setControlValue("vCONTAFINAL",gx.O.AV30ContaFinal,0)},c2v:function(){gx.O.AV30ContaFinal=this.val()},val:function(){return gx.fn.getControlValue("vCONTAFINAL")},nac:gx.falseFn};
   GXValidFnc[92]={fld:"IMAGE11",grid:0};
   GXValidFnc[102]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVAR",gxz:"ZV23var",gxold:"OV23var",gxvar:"AV23var",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23var=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23var=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVAR",gx.O.AV23var,0)},c2v:function(){gx.O.AV23var=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVAR",'.')},nac:gx.falseFn};
   GXValidFnc[103]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVAR2",gxz:"ZV31var2",gxold:"OV31var2",gxvar:"AV31var2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31var2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31var2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVAR2",gx.O.AV31var2,0)},c2v:function(){gx.O.AV31var2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVAR2",'.')},nac:gx.falseFn};
   GXValidFnc[104]={fld:"JS", format:2,grid:0};
   GXValidFnc[105]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV41ChamaOnBlurMascara",gxold:"OV41ChamaOnBlurMascara",gxvar:"AV41ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV41ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV41ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV41ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[107]={fld:"BTNPARM",grid:0};
   GXValidFnc[108]={fld:"BTNHELP",grid:0};
   this.AV63TxtTela = "" ;
   this.ZV63TxtTela = "" ;
   this.OV63TxtTela = "" ;
   this.AV26TipoRelatorio = "" ;
   this.ZV26TipoRelatorio = "" ;
   this.OV26TipoRelatorio = "" ;
   this.AV27TipoValor = "" ;
   this.ZV27TipoValor = "" ;
   this.OV27TipoValor = "" ;
   this.AV16DetalheCorrentista = "" ;
   this.ZV16DetalheCorrentista = "" ;
   this.OV16DetalheCorrentista = "" ;
   this.AV17MesIni = 0 ;
   this.ZV17MesIni = 0 ;
   this.OV17MesIni = 0 ;
   this.AV18AnoIni = 0 ;
   this.ZV18AnoIni = 0 ;
   this.OV18AnoIni = 0 ;
   this.AV19MesFin = 0 ;
   this.ZV19MesFin = 0 ;
   this.OV19MesFin = 0 ;
   this.AV20AnoFin = 0 ;
   this.ZV20AnoFin = 0 ;
   this.OV20AnoFin = 0 ;
   this.AV28Nivel = 0 ;
   this.ZV28Nivel = 0 ;
   this.OV28Nivel = 0 ;
   this.AV29ContaInicial = "" ;
   this.ZV29ContaInicial = "" ;
   this.OV29ContaInicial = "" ;
   this.AV30ContaFinal = "" ;
   this.ZV30ContaFinal = "" ;
   this.OV30ContaFinal = "" ;
   this.AV23var = 0 ;
   this.ZV23var = 0 ;
   this.OV23var = 0 ;
   this.AV31var2 = 0 ;
   this.ZV31var2 = 0 ;
   this.OV31var2 = 0 ;
   this.AV41ChamaOnBlurMascara = "" ;
   this.ZV41ChamaOnBlurMascara = "" ;
   this.OV41ChamaOnBlurMascara = "" ;
   this.AV63TxtTela = "" ;
   this.AV26TipoRelatorio = "" ;
   this.AV27TipoValor = "" ;
   this.AV16DetalheCorrentista = "" ;
   this.AV17MesIni = 0 ;
   this.AV18AnoIni = 0 ;
   this.AV19MesFin = 0 ;
   this.AV20AnoFin = 0 ;
   this.AV28Nivel = 0 ;
   this.AV29ContaInicial = "" ;
   this.AV30ContaFinal = "" ;
   this.AV23var = 0 ;
   this.AV31var2 = 0 ;
   this.AV41ChamaOnBlurMascara = "" ;
   this.Events = {"e116q2_client": ["'FECHAR'", true] ,"e136q2_client": ["ENTER", true] ,"e156q2_client": ["'SALVARTXT'", true] ,"e166q2_client": ["VTXTTELA.CLICK", true] ,"e176q2_client": ["'EXCLUIRTXT'", true] ,"e206q2_client": ["CANCEL", true] ,"e196q1_client": ["'PARAMETROS'", false]};
   this.EvtParms["REFRESH"] = [[{av:'AV82Pgmname',fld:'vPGMNAME'},{av:'AV78SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV63TxtTela',fld:'vTXTTELA'}],[{av:'AV63TxtTela',fld:'vTXTTELA'},{av:'AV85GXV2',fld:'vGXV2'},{av:'AV79SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV84GXV1',fld:'vGXV1'},{av:'AV26TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV27TipoValor',fld:'vTIPOVALOR'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV29ContaInicial',fld:'vCONTAINICIAL'},{av:'AV30ContaFinal',fld:'vCONTAFINAL'},{av:'AV17MesIni',fld:'vMESINI'},{av:'AV18AnoIni',fld:'vANOINI'},{av:'AV19MesFin',fld:'vMESFIN'},{av:'AV20AnoFin',fld:'vANOFIN'},{av:'AV83Pgmdesc',fld:'vPGMDESC'},{av:'AV51QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV16DetalheCorrentista',fld:'vDETALHECORRENTISTA'},{av:'AV27TipoValor',fld:'vTIPOVALOR'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV82Pgmname',fld:'vPGMNAME'},{av:'AV63TxtTela',fld:'vTXTTELA'},{av:'AV28Nivel',fld:'vNIVEL'},{av:'AV26TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV42ErrDsc',fld:'vERRDSC'},{av:'AV43ErrDscF',fld:'vERRDSCF'},{av:'AV29ContaInicial',fld:'vCONTAINICIAL'},{av:'AV30ContaFinal',fld:'vCONTAFINAL'},{av:'AV34DataRefIni',fld:'vDATAREFINI'},{av:'AV35DataRefFin',fld:'vDATAREFFIN'},{av:'AV36DataInicial',fld:'vDATAINICIAL'},{av:'AV37DataFinal',fld:'vDATAFINAL'},{av:'AV32ErroDataInicial',fld:'vERRODATAINICIAL'},{av:'AV33ErroDataFinal',fld:'vERRODATAFINAL'},{av:'AV48QuantAno',fld:'vQUANTANO'},{av:'AV38QuantMes',fld:'vQUANTMES'},{av:'AV74SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV51QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV28Nivel',fld:'vNIVEL'},{av:'AV20AnoFin',fld:'vANOFIN'},{av:'AV19MesFin',fld:'vMESFIN'},{av:'AV18AnoIni',fld:'vANOINI'},{av:'AV17MesIni',fld:'vMESINI'},{av:'AV16DetalheCorrentista',fld:'vDETALHECORRENTISTA'},{av:'AV27TipoValor',fld:'vTIPOVALOR'},{av:'AV26TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV77OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'PARAMETROS'"] = [[],[]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV63TxtTela',fld:'vTXTTELA'},{av:'AV82Pgmname',fld:'vPGMNAME'},{av:'AV26TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV27TipoValor',fld:'vTIPOVALOR'}],[{av:'AV77OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV82Pgmname',fld:'vPGMNAME'},{av:'AV78SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV63TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV84GXV1',fld:'vGXV1'},{av:'AV79SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV26TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV27TipoValor',fld:'vTIPOVALOR'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV82Pgmname',fld:'vPGMNAME'},{av:'AV63TxtTela',fld:'vTXTTELA'}],[]];
   this.setPrompt("IMAGE10", [86,102]);
   this.setPrompt("IMAGE11", [91,103]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcomparativovaloresconta());
