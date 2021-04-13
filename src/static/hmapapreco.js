/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:1:18.6
*/
gx.evt.autoSkip = false;
gx.define('hmapapreco', false, function () {
   this.ServerClass =  "hmapapreco" ;
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
   this.Validv_Solicitacaonumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSOLICITACAONUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e19oq1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalparmmapapreco",[]), []);
      this.refreshOutputs([]);
   };
   this.e11oq2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13oq2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15oq2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e16oq2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e17oq2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e20oq2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,23,26,28,31,33,34,37,39,40,43,45,47,50,53,56,65,67,68,69,70];
   this.GXLastCtrlId =70;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABTXT",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV40TxtTela",gxold:"OV40TxtTela",gxvar:"AV40TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV40TxtTela=Value},v2z:function(Value){gx.O.ZV40TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV40TxtTela)},c2v:function(){gx.O.AV40TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"IMAGE2",grid:0};
   GXValidFnc[17]={fld:"IMAGE1",grid:0};
   GXValidFnc[20]={fld:"TABLE7",grid:0};
   GXValidFnc[23]={fld:"TABPRINC",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Solicitacaonumero,isvalid:null,rgrid:[],fld:"vSOLICITACAONUMERO",gxz:"ZV22SolicitacaoNumero",gxold:"OV22SolicitacaoNumero",gxvar:"AV22SolicitacaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22SolicitacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22SolicitacaoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAONUMERO",gx.O.AV22SolicitacaoNumero,0)},c2v:function(){gx.O.AV22SolicitacaoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMAPAPRECONUMERO",gxz:"ZV23MapaPrecoNumero",gxold:"OV23MapaPrecoNumero",gxvar:"AV23MapaPrecoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23MapaPrecoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23MapaPrecoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMAPAPRECONUMERO",gx.O.AV23MapaPrecoNumero,0)},c2v:function(){gx.O.AV23MapaPrecoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMAPAPRECONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TABTPPRECO",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOPRECO",gxz:"ZV21TipoPreco",gxold:"OV21TipoPreco",gxvar:"AV21TipoPreco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21TipoPreco=Value},v2z:function(Value){gx.O.ZV21TipoPreco=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOPRECO",gx.O.AV21TipoPreco)},c2v:function(){gx.O.AV21TipoPreco=this.val()},val:function(){return gx.fn.getControlValue("vTIPOPRECO")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TABATU",grid:0};
   GXValidFnc[43]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNATUALIZARMAPA",gxz:"ZV29SnAtualizarMapa",gxold:"OV29SnAtualizarMapa",gxvar:"AV29SnAtualizarMapa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV29SnAtualizarMapa=Value},v2z:function(Value){gx.O.ZV29SnAtualizarMapa=Value},v2c:function(){gx.fn.setComboBoxValue("vSNATUALIZARMAPA",gx.O.AV29SnAtualizarMapa)},c2v:function(){gx.O.AV29SnAtualizarMapa=this.val()},val:function(){return gx.fn.getControlValue("vSNATUALIZARMAPA")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TABCHECK",grid:0};
   GXValidFnc[50]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNIMPRIMENAOCOTADOS",gxz:"ZV26SnImprimeNaoCotados",gxold:"OV26SnImprimeNaoCotados",gxvar:"AV26SnImprimeNaoCotados",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV26SnImprimeNaoCotados=Value},v2z:function(Value){gx.O.ZV26SnImprimeNaoCotados=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNIMPRIMENAOCOTADOS",gx.O.AV26SnImprimeNaoCotados,"S")},c2v:function(){gx.O.AV26SnImprimeNaoCotados=this.val()},val:function(){return gx.fn.getControlValue("vSNIMPRIMENAOCOTADOS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[53]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNIMPRIMEITEMEMPATADO",gxz:"ZV27SnImprimeItemEmpatado",gxold:"OV27SnImprimeItemEmpatado",gxvar:"AV27SnImprimeItemEmpatado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV27SnImprimeItemEmpatado=Value},v2z:function(Value){gx.O.ZV27SnImprimeItemEmpatado=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNIMPRIMEITEMEMPATADO",gx.O.AV27SnImprimeItemEmpatado,"S")},c2v:function(){gx.O.AV27SnImprimeItemEmpatado=this.val()},val:function(){return gx.fn.getControlValue("vSNIMPRIMEITEMEMPATADO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[56]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGERACSV",gxz:"ZV30GeraCSV",gxold:"OV30GeraCSV",gxvar:"AV30GeraCSV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV30GeraCSV=Value},v2z:function(Value){gx.O.ZV30GeraCSV=Value},v2c:function(){gx.fn.setCheckBoxValue("vGERACSV",gx.O.AV30GeraCSV,"S")},c2v:function(){gx.O.AV30GeraCSV=this.val()},val:function(){return gx.fn.getControlValue("vGERACSV")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[65]={fld:"JS", format:2,grid:0};
   GXValidFnc[67]={fld:"BTNPARM",grid:0};
   GXValidFnc[68]={fld:"BTNHELP",grid:0};
   GXValidFnc[69]={fld:"PROMPT_SOLICITACAONUMERO",grid:0};
   GXValidFnc[70]={fld:"PROMPT_MAPAPRECONUMERO",grid:0};
   this.AV40TxtTela = "" ;
   this.ZV40TxtTela = "" ;
   this.OV40TxtTela = "" ;
   this.AV22SolicitacaoNumero = 0 ;
   this.ZV22SolicitacaoNumero = 0 ;
   this.OV22SolicitacaoNumero = 0 ;
   this.AV23MapaPrecoNumero = 0 ;
   this.ZV23MapaPrecoNumero = 0 ;
   this.OV23MapaPrecoNumero = 0 ;
   this.AV21TipoPreco = "" ;
   this.ZV21TipoPreco = "" ;
   this.OV21TipoPreco = "" ;
   this.AV29SnAtualizarMapa = "" ;
   this.ZV29SnAtualizarMapa = "" ;
   this.OV29SnAtualizarMapa = "" ;
   this.AV26SnImprimeNaoCotados = "" ;
   this.ZV26SnImprimeNaoCotados = "" ;
   this.OV26SnImprimeNaoCotados = "" ;
   this.AV27SnImprimeItemEmpatado = "" ;
   this.ZV27SnImprimeItemEmpatado = "" ;
   this.OV27SnImprimeItemEmpatado = "" ;
   this.AV30GeraCSV = "" ;
   this.ZV30GeraCSV = "" ;
   this.OV30GeraCSV = "" ;
   this.AV40TxtTela = "" ;
   this.AV22SolicitacaoNumero = 0 ;
   this.AV23MapaPrecoNumero = 0 ;
   this.AV21TipoPreco = "" ;
   this.AV29SnAtualizarMapa = "" ;
   this.AV26SnImprimeNaoCotados = "" ;
   this.AV27SnImprimeItemEmpatado = "" ;
   this.AV30GeraCSV = "" ;
   this.A10566SolicitacaoFornecedorDtHrFinal = gx.date.nullDate() ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A3675MapaPrecoUsuarioAlt = "" ;
   this.A3405MapaPrecoNumero = 0 ;
   this.A3481CotacaoUsuarioAlt = "" ;
   this.Events = {"e11oq2_client": ["'FECHAR'", true] ,"e13oq2_client": ["ENTER", true] ,"e15oq2_client": ["'SALVARTXT'", true] ,"e16oq2_client": ["VTXTTELA.CLICK", true] ,"e17oq2_client": ["'EXCLUIRTXT'", true] ,"e20oq2_client": ["CANCEL", true] ,"e19oq1_client": ["'PARAMETROS'", false]};
   this.EvtParms["REFRESH"] = [[{av:'AV40TxtTela',fld:'vTXTTELA'},{av:'AV60Pgmname',fld:'vPGMNAME'},{av:'AV22SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV23MapaPrecoNumero',fld:'vMAPAPRECONUMERO'},{av:'AV21TipoPreco',fld:'vTIPOPRECO'},{av:'AV29SnAtualizarMapa',fld:'vSNATUALIZARMAPA'},{av:'AV26SnImprimeNaoCotados',fld:'vSNIMPRIMENAOCOTADOS'},{av:'AV27SnImprimeItemEmpatado',fld:'vSNIMPRIMEITEMEMPATADO'},{av:'AV30GeraCSV',fld:'vGERACSV'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV56SdtTxtTela',fld:'vSDTTXTTELA'}],[{av:'AV52SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV30GeraCSV',fld:'vGERACSV'},{av:'AV27SnImprimeItemEmpatado',fld:'vSNIMPRIMEITEMEMPATADO'},{av:'AV26SnImprimeNaoCotados',fld:'vSNIMPRIMENAOCOTADOS'},{av:'AV29SnAtualizarMapa',fld:'vSNATUALIZARMAPA'},{av:'AV21TipoPreco',fld:'vTIPOPRECO'},{av:'AV23MapaPrecoNumero',fld:'vMAPAPRECONUMERO'},{av:'AV22SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV40TxtTela',fld:'vTXTTELA'},{av:'AV68GXV2',fld:'vGXV2'},{av:'AV57SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV55OpcoesTxtTela',fld:'vOPCOESTXTTELA'},{av:'AV67GXV1',fld:'vGXV1'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV22SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV20DescSolicitacao',fld:'vDESCSOLICITACAO'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV25SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'A3481CotacaoUsuarioAlt',fld:'COTACAOUSUARIOALT'},{av:'AV23MapaPrecoNumero',fld:'vMAPAPRECONUMERO'},{av:'A3405MapaPrecoNumero',fld:'MAPAPRECONUMERO'},{av:'AV29SnAtualizarMapa',fld:'vSNATUALIZARMAPA'},{av:'A3675MapaPrecoUsuarioAlt',fld:'MAPAPRECOUSUARIOALT'},{av:'A10566SolicitacaoFornecedorDtHrFinal',fld:'SOLICITACAOFORNECEDORDTHRFINAL'},{av:'AV40TxtTela',fld:'vTXTTELA'},{av:'AV60Pgmname',fld:'vPGMNAME'},{av:'AV21TipoPreco',fld:'vTIPOPRECO'},{av:'AV26SnImprimeNaoCotados',fld:'vSNIMPRIMENAOCOTADOS'},{av:'AV27SnImprimeItemEmpatado',fld:'vSNIMPRIMEITEMEMPATADO'},{av:'AV30GeraCSV',fld:'vGERACSV'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV24tpErro',fld:'vTPERRO'},{av:'AV62GXLvl70',fld:'vGXLVL70'},{av:'AV63GXLvl75',fld:'vGXLVL75'},{av:'AV64GXLvl93',fld:'vGXLVL93'},{av:'AV52SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV30GeraCSV',fld:'vGERACSV'},{av:'AV27SnImprimeItemEmpatado',fld:'vSNIMPRIMEITEMEMPATADO'},{av:'AV26SnImprimeNaoCotados',fld:'vSNIMPRIMENAOCOTADOS'},{av:'AV29SnAtualizarMapa',fld:'vSNATUALIZARMAPA'},{av:'AV21TipoPreco',fld:'vTIPOPRECO'},{av:'AV23MapaPrecoNumero',fld:'vMAPAPRECONUMERO'},{av:'AV22SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV55OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'PARAMETROS'"] = [[],[]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV40TxtTela',fld:'vTXTTELA'},{av:'AV60Pgmname',fld:'vPGMNAME'},{av:'AV21TipoPreco',fld:'vTIPOPRECO'},{av:'AV26SnImprimeNaoCotados',fld:'vSNIMPRIMENAOCOTADOS'},{av:'AV27SnImprimeItemEmpatado',fld:'vSNIMPRIMEITEMEMPATADO'}],[{av:'AV55OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV60Pgmname',fld:'vPGMNAME'},{av:'AV56SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV40TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV67GXV1',fld:'vGXV1'},{av:'AV57SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV21TipoPreco',fld:'vTIPOPRECO'},{av:'AV26SnImprimeNaoCotados',fld:'vSNIMPRIMENAOCOTADOS'},{av:'AV27SnImprimeItemEmpatado',fld:'vSNIMPRIMEITEMEMPATADO'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV60Pgmname',fld:'vPGMNAME'},{av:'AV40TxtTela',fld:'vTXTTELA'}],[]];
   this.setPrompt("PROMPT_SOLICITACAONUMERO", [28]);
   this.setPrompt("PROMPT_MAPAPRECONUMERO", [33]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmapapreco());
