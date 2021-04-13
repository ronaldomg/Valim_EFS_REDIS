/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:4:44.67
*/
gx.evt.autoSkip = false;
gx.define('hlivroreceituariootico', false, function () {
   this.ServerClass =  "hlivroreceituariootico" ;
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
   this.e112a72_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132a72_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152a72_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e162a72_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e172a72_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e192a72_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,12,14,17,20,23,26,29,31,34,36,39,41,44,46,51,54,57,59,60,63,65,68,70,72,78,84,85,86,88,89];
   this.GXLastCtrlId =89;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABTXT",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK54", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV32TxtTela",gxold:"OV32TxtTela",gxvar:"AV32TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV32TxtTela=Value},v2z:function(Value){gx.O.ZV32TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV32TxtTela)},c2v:function(){gx.O.AV32TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[12]={fld:"IMAGE9",grid:0};
   GXValidFnc[14]={fld:"IMGEXCTXTTELA",grid:0};
   GXValidFnc[17]={fld:"TABLE2",grid:0};
   GXValidFnc[20]={fld:"TABLE4",grid:0};
   GXValidFnc[23]={fld:"TXTSELECAO2", format:0,grid:0};
   GXValidFnc[26]={fld:"TABLE7",grid:0};
   GXValidFnc[29]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAREFERENCIA",gxz:"ZV10DataReferencia",gxold:"OV10DataReferencia",gxvar:"AV10DataReferencia",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10DataReferencia=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10DataReferencia=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAREFERENCIA",gx.O.AV10DataReferencia,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV10DataReferencia=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAREFERENCIA")},nac:gx.falseFn};
   this.declareDomainHdlr( 31 , function() {
   });
   GXValidFnc[34]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vJUNTACOMERCIAL",gxz:"ZV39JuntaComercial",gxold:"OV39JuntaComercial",gxvar:"AV39JuntaComercial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39JuntaComercial=Value},v2z:function(Value){gx.O.ZV39JuntaComercial=Value},v2c:function(){gx.fn.setControlValue("vJUNTACOMERCIAL",gx.O.AV39JuntaComercial,0)},c2v:function(){gx.O.AV39JuntaComercial=this.val()},val:function(){return gx.fn.getControlValue("vJUNTACOMERCIAL")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTERMOABERTURA",gxz:"ZV30TermoAbertura",gxold:"OV30TermoAbertura",gxvar:"AV30TermoAbertura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30TermoAbertura=Value},v2z:function(Value){gx.O.ZV30TermoAbertura=Value},v2c:function(){gx.fn.setControlValue("vTERMOABERTURA",gx.O.AV30TermoAbertura,0)},c2v:function(){gx.O.AV30TermoAbertura=this.val()},val:function(){return gx.fn.getControlValue("vTERMOABERTURA")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTERMOFECHAMENTO",gxz:"ZV31TermoFechamento",gxold:"OV31TermoFechamento",gxvar:"AV31TermoFechamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31TermoFechamento=Value},v2z:function(Value){gx.O.ZV31TermoFechamento=Value},v2c:function(){gx.fn.setControlValue("vTERMOFECHAMENTO",gx.O.AV31TermoFechamento,0)},c2v:function(){gx.O.AV31TermoFechamento=this.val()},val:function(){return gx.fn.getControlValue("vTERMOFECHAMENTO")},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TXTSELECAO", format:0,grid:0};
   GXValidFnc[54]={fld:"TABLE5",grid:0};
   GXValidFnc[57]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV16FilialId",gxold:"OV16FilialId",gxvar:"AV16FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV16FilialId,0)},c2v:function(){gx.O.AV16FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV17FilialNome",gxold:"OV17FilialNome",gxvar:"AV17FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17FilialNome=Value},v2z:function(Value){gx.O.ZV17FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV17FilialNome,0)},c2v:function(){gx.O.AV17FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[65]={fld:"TABLE6",grid:0};
   GXValidFnc[68]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINICIAL",gxz:"ZV9DataInicial",gxold:"OV9DataInicial",gxvar:"AV9DataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9DataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9DataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINICIAL",gx.O.AV9DataInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV9DataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 68 , function() {
   });
   GXValidFnc[70]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[72]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFINAL",gxz:"ZV8DataFinal",gxold:"OV8DataFinal",gxvar:"AV8DataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8DataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV8DataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFINAL",gx.O.AV8DataFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV8DataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 72 , function() {
   });
   GXValidFnc[78]={fld:"TABLE3",grid:0};
   GXValidFnc[84]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV7AcessoSistemaSequencia",gxold:"OV7AcessoSistemaSequencia",gxvar:"AV7AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV7AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[85]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALPADRAO",gxz:"ZV42FilialPadrao",gxold:"OV42FilialPadrao",gxvar:"AV42FilialPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42FilialPadrao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42FilialPadrao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALPADRAO",gx.O.AV42FilialPadrao,0)},c2v:function(){gx.O.AV42FilialPadrao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALPADRAO",'.')},nac:gx.falseFn};
   GXValidFnc[86]={fld:"JAVASCRIPT", format:2,grid:0};
   GXValidFnc[88]={fld:"BTNHELP",grid:0};
   GXValidFnc[89]={fld:"PROMPT_FILIALID",grid:0};
   this.AV32TxtTela = "" ;
   this.ZV32TxtTela = "" ;
   this.OV32TxtTela = "" ;
   this.AV10DataReferencia = gx.date.nullDate() ;
   this.ZV10DataReferencia = gx.date.nullDate() ;
   this.OV10DataReferencia = gx.date.nullDate() ;
   this.AV39JuntaComercial = "" ;
   this.ZV39JuntaComercial = "" ;
   this.OV39JuntaComercial = "" ;
   this.AV30TermoAbertura = "" ;
   this.ZV30TermoAbertura = "" ;
   this.OV30TermoAbertura = "" ;
   this.AV31TermoFechamento = "" ;
   this.ZV31TermoFechamento = "" ;
   this.OV31TermoFechamento = "" ;
   this.AV16FilialId = 0 ;
   this.ZV16FilialId = 0 ;
   this.OV16FilialId = 0 ;
   this.AV17FilialNome = "" ;
   this.ZV17FilialNome = "" ;
   this.OV17FilialNome = "" ;
   this.AV9DataInicial = gx.date.nullDate() ;
   this.ZV9DataInicial = gx.date.nullDate() ;
   this.OV9DataInicial = gx.date.nullDate() ;
   this.AV8DataFinal = gx.date.nullDate() ;
   this.ZV8DataFinal = gx.date.nullDate() ;
   this.OV8DataFinal = gx.date.nullDate() ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.ZV7AcessoSistemaSequencia = 0 ;
   this.OV7AcessoSistemaSequencia = 0 ;
   this.AV42FilialPadrao = 0 ;
   this.ZV42FilialPadrao = 0 ;
   this.OV42FilialPadrao = 0 ;
   this.AV32TxtTela = "" ;
   this.AV10DataReferencia = gx.date.nullDate() ;
   this.AV39JuntaComercial = "" ;
   this.AV30TermoAbertura = "" ;
   this.AV31TermoFechamento = "" ;
   this.AV16FilialId = 0 ;
   this.AV17FilialNome = "" ;
   this.AV9DataInicial = gx.date.nullDate() ;
   this.AV8DataFinal = gx.date.nullDate() ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.AV42FilialPadrao = 0 ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.A75UsuarioId = "" ;
   this.A1564UsuarioFilialId = 0 ;
   this.Events = {"e112a72_client": ["'FECHAR'", true] ,"e132a72_client": ["ENTER", true] ,"e152a72_client": ["'SALVARTXT'", true] ,"e162a72_client": ["VTXTTELA.CLICK", true] ,"e172a72_client": ["'EXCLUIRTXT'", true] ,"e192a72_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV42FilialPadrao',fld:'vFILIALPADRAO'},{av:'AV47Pgmname',fld:'vPGMNAME'},{av:'AV25SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV11EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV32TxtTela',fld:'vTXTTELA'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV15FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV16FilialId',fld:'vFILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'}],[{av:'gx.fn.getCtrlProperty("vFILIALID","Enabled")',ctrl:'vFILIALID',prop:'Enabled'},{av:'AV32TxtTela',fld:'vTXTTELA'},{av:'AV55GXV3',fld:'vGXV3'},{av:'AV26SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV56GXV4',fld:'vGXV4'},{av:'AV10DataReferencia',fld:'vDATAREFERENCIA'},{av:'AV30TermoAbertura',fld:'vTERMOABERTURA'},{av:'AV31TermoFechamento',fld:'vTERMOFECHAMENTO'},{av:'AV16FilialId',fld:'vFILIALID'},{av:'AV9DataInicial',fld:'vDATAINICIAL'},{av:'AV8DataFinal',fld:'vDATAFINAL'},{av:'AV39JuntaComercial',fld:'vJUNTACOMERCIAL'},{av:'AV17FilialNome',fld:'vFILIALNOME'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV32TxtTela',fld:'vTXTTELA'},{av:'AV11EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV47Pgmname',fld:'vPGMNAME'},{av:'AV30TermoAbertura',fld:'vTERMOABERTURA'},{av:'AV31TermoFechamento',fld:'vTERMOFECHAMENTO'},{av:'AV16FilialId',fld:'vFILIALID'},{av:'AV9DataInicial',fld:'vDATAINICIAL'},{av:'AV8DataFinal',fld:'vDATAFINAL'},{av:'AV10DataReferencia',fld:'vDATAREFERENCIA'},{av:'AV39JuntaComercial',fld:'vJUNTACOMERCIAL'},{av:'AV28SnErro',fld:'vSNERRO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV54Udparg3',fld:'vUDPARG3'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'}],[{av:'AV28SnErro',fld:'vSNERRO'},{av:'AV22NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV21NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV37Chr',fld:'vCHR'},{av:'AV35Split',fld:'vSPLIT'},{av:'AV34TermoAberturaAux',fld:'vTERMOABERTURAAUX'},{av:'AV51GXV1',fld:'vGXV1'},{av:'AV36textoTermo',fld:'vTEXTOTERMO'},{av:'AV43tamanho',fld:'vTAMANHO'},{av:'AV44paragrafo',fld:'vPARAGRAFO'},{av:'AV38TermoFechamentoAux',fld:'vTERMOFECHAMENTOAUX'},{av:'AV52GXV2',fld:'vGXV2'},{av:'AV23QtdePaginasGeradas',fld:'vQTDEPAGINASGERADAS'},{av:'AV53GXLvl159',fld:'vGXLVL159'},{av:'AV17FilialNome',fld:'vFILIALNOME'},{av:'AV8DataFinal',fld:'vDATAFINAL'},{av:'AV6OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV11EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV32TxtTela',fld:'vTXTTELA'},{av:'AV47Pgmname',fld:'vPGMNAME'},{av:'AV10DataReferencia',fld:'vDATAREFERENCIA'},{av:'AV30TermoAbertura',fld:'vTERMOABERTURA'},{av:'AV31TermoFechamento',fld:'vTERMOFECHAMENTO'},{av:'AV16FilialId',fld:'vFILIALID'},{av:'AV9DataInicial',fld:'vDATAINICIAL'},{av:'AV8DataFinal',fld:'vDATAFINAL'},{av:'AV39JuntaComercial',fld:'vJUNTACOMERCIAL'}],[{av:'AV6OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV47Pgmname',fld:'vPGMNAME'},{av:'AV25SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV32TxtTela',fld:'vTXTTELA'},{av:'AV11EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV15FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV16FilialId',fld:'vFILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'}],[{av:'AV56GXV4',fld:'vGXV4'},{av:'AV26SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV10DataReferencia',fld:'vDATAREFERENCIA'},{av:'AV30TermoAbertura',fld:'vTERMOABERTURA'},{av:'AV31TermoFechamento',fld:'vTERMOFECHAMENTO'},{av:'AV16FilialId',fld:'vFILIALID'},{av:'AV9DataInicial',fld:'vDATAINICIAL'},{av:'AV8DataFinal',fld:'vDATAFINAL'},{av:'AV39JuntaComercial',fld:'vJUNTACOMERCIAL'},{av:'AV17FilialNome',fld:'vFILIALNOME'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV11EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV47Pgmname',fld:'vPGMNAME'},{av:'AV32TxtTela',fld:'vTXTTELA'}],[]];
   this.setPrompt("PROMPT_FILIALID", [59]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hlivroreceituariootico());
