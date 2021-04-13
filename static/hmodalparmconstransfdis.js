/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:10:31.38
*/
gx.evt.autoSkip = false;
gx.define('hmodalparmconstransfdis', false, function () {
   this.ServerClass =  "hmodalparmconstransfdis" ;
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
      this.AV5EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
   };
   this.Validv_Trnentrada=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRNENTRADA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Trnsaida=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRNSAIDA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e152c41_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalobsparms2",[this.AV5EmpresaLogadaId, "DIS", "TRNTRANSFENT", "TRNTRANSFSAI"]), []);
      this.refreshOutputs([]);
   };
   this.e122c42_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e132c42_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e162c42_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,30,32,33,34];
   this.GXLastCtrlId =34;
   GXValidFnc[2]={fld:"TABLE8",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE5",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Trnentrada,isvalid:null,rgrid:[],fld:"vTRNENTRADA",gxz:"ZV14TrnEntrada",gxold:"OV14TrnEntrada",gxvar:"AV14TrnEntrada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14TrnEntrada=Value},v2z:function(Value){gx.O.ZV14TrnEntrada=Value},v2c:function(){gx.fn.setControlValue("vTRNENTRADA",gx.O.AV14TrnEntrada,0)},c2v:function(){gx.O.AV14TrnEntrada=this.val()},val:function(){return gx.fn.getControlValue("vTRNENTRADA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Trnsaida,isvalid:null,rgrid:[],fld:"vTRNSAIDA",gxz:"ZV15TrnSaida",gxold:"OV15TrnSaida",gxvar:"AV15TrnSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15TrnSaida=Value},v2z:function(Value){gx.O.ZV15TrnSaida=Value},v2c:function(){gx.fn.setControlValue("vTRNSAIDA",gx.O.AV15TrnSaida,0)},c2v:function(){gx.O.AV15TrnSaida=this.val()},val:function(){return gx.fn.getControlValue("vTRNSAIDA")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TABLE1",grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV10Nao",gxold:"OV10Nao",gxvar:"AV10Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10Nao=Value},v2z:function(Value){gx.O.ZV10Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV10Nao,0)},c2v:function(){gx.O.AV10Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"BTNOBS",grid:0};
   GXValidFnc[33]={fld:"PROMPT_TRNENTRADA",grid:0};
   GXValidFnc[34]={fld:"PROMPT_TRNSAIDA",grid:0};
   this.AV14TrnEntrada = "" ;
   this.ZV14TrnEntrada = "" ;
   this.OV14TrnEntrada = "" ;
   this.AV15TrnSaida = "" ;
   this.ZV15TrnSaida = "" ;
   this.OV15TrnSaida = "" ;
   this.AV10Nao = "" ;
   this.ZV10Nao = "" ;
   this.OV10Nao = "" ;
   this.AV14TrnEntrada = "" ;
   this.AV15TrnSaida = "" ;
   this.AV10Nao = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A445PessoaCliente = "" ;
   this.A830PessoaUsuarioId = "" ;
   this.A446PessoaFornecedor = "" ;
   this.A5695TransacaoSaidaCodigo = "" ;
   this.A5694TransacaoSaidaEmpresaId = "" ;
   this.A5577TransacaoSaidaAtivo = "" ;
   this.A5569TransacaoSaidaTipo = "" ;
   this.A5573TransacaoSaidaSnLancaFinanc = "" ;
   this.A5572TransacaoSaidaSnAlteraSaldo = "" ;
   this.A5608TransacaoSaidaPrecoId = 0 ;
   this.A5586TransacaoSaidaClienteId = 0 ;
   this.A5578TransacaoSaidaCFOPDenEstadoCod = 0 ;
   this.A5580TransacaoSaidaCFOPForEstadoCod = 0 ;
   this.A5595TransacaoSaidaCSTTipo = "" ;
   this.A5597TransacaoSaidaCSTCodigo = "" ;
   this.A3566SituacaoTributariaCodigo = "" ;
   this.A3564SituacaoTributariaTipo = "" ;
   this.A3430CFOPCodigo = 0 ;
   this.A4481TransacaoEntradaCodigo = "" ;
   this.A4480TransacaoEntradaEmpresaId = "" ;
   this.A4490TransacaoEntradaAtivo = "" ;
   this.A5489TransacaoEntradaTipo = "" ;
   this.A4488TransacaoEntradaSnLancaFinanc = "" ;
   this.A4485TransacaoEntradaSnAlteraCusto = "" ;
   this.A4487TransacaoEntradaSnAlteraSaldo = "" ;
   this.A4586TransacaoEntradaPessoaId = 0 ;
   this.A4494TransacaoEntradaFilialId = 0 ;
   this.A4603TransacaoEntradaCFOPDenEstadoC = 0 ;
   this.A4604TransacaoEntradaCFOPForEstadoC = 0 ;
   this.A4500TransacaoEntradaCSTTipo = "" ;
   this.A4502TransacaoEntradaCSTCodigo = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.AV5EmpresaLogadaId = "" ;
   this.Events = {"e122c42_client": ["ENTER", true] ,"e132c42_client": ["'FECHAR'", true] ,"e162c42_client": ["CANCEL", true] ,"e152c41_client": ["'OBSERVACAO'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV11TpErro',fld:'vTPERRO'},{av:'AV5EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV14TrnEntrada',fld:'vTRNENTRADA'},{av:'AV15TrnSaida',fld:'vTRNSAIDA'},{av:'A4480TransacaoEntradaEmpresaId',fld:'TRANSACAOENTRADAEMPRESAID'},{av:'AV12TransacaoEntradaEmpresaId',fld:'vTRANSACAOENTRADAEMPRESAID'},{av:'A4481TransacaoEntradaCodigo',fld:'TRANSACAOENTRADACODIGO'},{av:'A4490TransacaoEntradaAtivo',fld:'TRANSACAOENTRADAATIVO'},{av:'A5489TransacaoEntradaTipo',fld:'TRANSACAOENTRADATIPO'},{av:'A4488TransacaoEntradaSnLancaFinanc',fld:'TRANSACAOENTRADASNLANCAFINANC'},{av:'A4485TransacaoEntradaSnAlteraCusto',fld:'TRANSACAOENTRADASNALTERACUSTO'},{av:'A4487TransacaoEntradaSnAlteraSaldo',fld:'TRANSACAOENTRADASNALTERASALDO'},{av:'A4586TransacaoEntradaPessoaId',fld:'TRANSACAOENTRADAPESSOAID'},{av:'A4494TransacaoEntradaFilialId',fld:'TRANSACAOENTRADAFILIALID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV24FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A4603TransacaoEntradaCFOPDenEstadoC',fld:'TRANSACAOENTRADACFOPDENESTADOC'},{av:'A3430CFOPCodigo',fld:'CFOPCODIGO'},{av:'A4604TransacaoEntradaCFOPForEstadoC',fld:'TRANSACAOENTRADACFOPFORESTADOC'},{av:'A4500TransacaoEntradaCSTTipo',fld:'TRANSACAOENTRADACSTTIPO'},{av:'A4502TransacaoEntradaCSTCodigo',fld:'TRANSACAOENTRADACSTCODIGO'},{av:'A3564SituacaoTributariaTipo',fld:'SITUACAOTRIBUTARIATIPO'},{av:'A3566SituacaoTributariaCodigo',fld:'SITUACAOTRIBUTARIACODIGO'},{av:'A5694TransacaoSaidaEmpresaId',fld:'TRANSACAOSAIDAEMPRESAID'},{av:'AV13TransacaoSaidaEmpresaId',fld:'vTRANSACAOSAIDAEMPRESAID'},{av:'A5695TransacaoSaidaCodigo',fld:'TRANSACAOSAIDACODIGO'},{av:'A5577TransacaoSaidaAtivo',fld:'TRANSACAOSAIDAATIVO'},{av:'A5569TransacaoSaidaTipo',fld:'TRANSACAOSAIDATIPO'},{av:'A5573TransacaoSaidaSnLancaFinanc',fld:'TRANSACAOSAIDASNLANCAFINANC'},{av:'A5572TransacaoSaidaSnAlteraSaldo',fld:'TRANSACAOSAIDASNALTERASALDO'},{av:'A5608TransacaoSaidaPrecoId',fld:'TRANSACAOSAIDAPRECOID'},{av:'A5586TransacaoSaidaClienteId',fld:'TRANSACAOSAIDACLIENTEID'},{av:'A5578TransacaoSaidaCFOPDenEstadoCod',fld:'TRANSACAOSAIDACFOPDENESTADOCOD'},{av:'A5580TransacaoSaidaCFOPForEstadoCod',fld:'TRANSACAOSAIDACFOPFORESTADOCOD'},{av:'A5595TransacaoSaidaCSTTipo',fld:'TRANSACAOSAIDACSTTIPO'},{av:'A5597TransacaoSaidaCSTCodigo',fld:'TRANSACAOSAIDACSTCODIGO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV23PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV22TransacaoEntradaPessoaId',fld:'vTRANSACAOENTRADAPESSOAID'},{av:'A830PessoaUsuarioId',fld:'PESSOAUSUARIOID'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'AV25TransacaoSaidaClienteId',fld:'vTRANSACAOSAIDACLIENTEID'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'}],[{av:'AV14TrnEntrada',fld:'vTRNENTRADA'},{av:'AV15TrnSaida',fld:'vTRNSAIDA'},{av:'AV11TpErro',fld:'vTPERRO'},{av:'AV34GXLvl52',fld:'vGXLVL52'},{av:'AV22TransacaoEntradaPessoaId',fld:'vTRANSACAOENTRADAPESSOAID'},{av:'AV21TransacaoEntradaFilialId',fld:'vTRANSACAOENTRADAFILIALID'},{av:'AV35GXLvl104',fld:'vGXLVL104'},{av:'AV20TransacaoEntradaCFOPDenEstadoCodigo',fld:'vTRANSACAOENTRADACFOPDENESTADOCODIGO'},{av:'AV36GXLvl122',fld:'vGXLVL122'},{av:'AV19TransacaoEntradaCFOPforEstadoCodigo',fld:'vTRANSACAOENTRADACFOPFORESTADOCODIGO'},{av:'AV37GXLvl139',fld:'vGXLVL139'},{av:'AV17TransacaoEntradaCSTTipo',fld:'vTRANSACAOENTRADACSTTIPO'},{av:'AV18TransacaoEntradaCSTCodigo',fld:'vTRANSACAOENTRADACSTCODIGO'},{av:'AV38GXLvl157',fld:'vGXLVL157'},{av:'AV39GXLvl180',fld:'vGXLVL180'},{av:'AV25TransacaoSaidaClienteId',fld:'vTRANSACAOSAIDACLIENTEID'},{av:'AV26TransacaoSaidaCFOPDenEstadoCodigo',fld:'vTRANSACAOSAIDACFOPDENESTADOCODIGO'},{av:'AV40GXLvl231',fld:'vGXLVL231'},{av:'AV27TransacaoSaidaCFOPforEstadoCodigo',fld:'vTRANSACAOSAIDACFOPFORESTADOCODIGO'},{av:'AV41GXLvl248',fld:'vGXLVL248'},{av:'AV28TransacaoSaidaCSTTipo',fld:'vTRANSACAOSAIDACSTTIPO'},{av:'AV29TransacaoSaidaCSTCodigo',fld:'vTRANSACAOSAIDACSTCODIGO'},{av:'AV42GXLvl266',fld:'vGXLVL266'},{av:'AV43GXLvl286',fld:'vGXLVL286'},{av:'AV44GXLvl302',fld:'vGXLVL302'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'OBSERVACAO'"] = [[{av:'AV5EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[]];
   this.setPrompt("PROMPT_TRNENTRADA", [13]);
   this.setPrompt("PROMPT_TRNSAIDA", [18]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV5EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalparmconstransfdis());
