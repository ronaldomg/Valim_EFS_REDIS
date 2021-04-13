/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:20:46.86
*/
gx.evt.autoSkip = false;
gx.define('hrelacaosaldoprocesso', false, function () {
   this.ServerClass =  "hrelacaosaldoprocesso" ;
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
   this.Validv_Saldoprocessoanoprocesso=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSALDOPROCESSOANOPROCESSO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Saldoprocessonoprocesso=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSALDOPROCESSONOPROCESSO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11d82_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13d82_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15d82_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,18,20,23,25,27,28,31,33,36,38,40,44,48,57,59];
   this.GXLastCtrlId =59;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE5",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={fld:"TABLE4",grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Saldoprocessoanoprocesso,isvalid:null,rgrid:[],fld:"vSALDOPROCESSOANOPROCESSO",gxz:"ZV20SaldoProcessoAnoProcesso",gxold:"OV20SaldoProcessoAnoProcesso",gxvar:"AV20SaldoProcessoAnoProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20SaldoProcessoAnoProcesso=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20SaldoProcessoAnoProcesso=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSALDOPROCESSOANOPROCESSO",gx.O.AV20SaldoProcessoAnoProcesso,0)},c2v:function(){gx.O.AV20SaldoProcessoAnoProcesso=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSALDOPROCESSOANOPROCESSO",'.')},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Saldoprocessonoprocesso,isvalid:null,rgrid:[],fld:"vSALDOPROCESSONOPROCESSO",gxz:"ZV19SaldoProcessoNoProcesso",gxold:"OV19SaldoProcessoNoProcesso",gxvar:"AV19SaldoProcessoNoProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19SaldoProcessoNoProcesso=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19SaldoProcessoNoProcesso=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSALDOPROCESSONOPROCESSO",gx.O.AV19SaldoProcessoNoProcesso,0)},c2v:function(){gx.O.AV19SaldoProcessoNoProcesso=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSALDOPROCESSONOPROCESSO",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"PROMPTPROCESSO",grid:0};
   GXValidFnc[31]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[33]={fld:"TABLERPERIODO",grid:0};
   GXValidFnc[36]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINICIAL",gxz:"ZV25DataInicial",gxold:"OV25DataInicial",gxvar:"AV25DataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25DataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV25DataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINICIAL",gx.O.AV25DataInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV25DataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[38]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFINAL",gxz:"ZV26DataFinal",gxold:"OV26DataFinal",gxvar:"AV26DataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26DataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV26DataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFINAL",gx.O.AV26DataFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV26DataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNAFSEMCONTA",gxz:"ZV48SnAFSemConta",gxold:"OV48SnAFSemConta",gxvar:"AV48SnAFSemConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV48SnAFSemConta=Value},v2z:function(Value){gx.O.ZV48SnAFSemConta=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNAFSEMCONTA",gx.O.AV48SnAFSemConta,"S")},c2v:function(){gx.O.AV48SnAFSemConta=this.val()},val:function(){return gx.fn.getControlValue("vSNAFSEMCONTA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[48]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNGERARCSV",gxz:"ZV24SnGerarCsv",gxold:"OV24SnGerarCsv",gxvar:"AV24SnGerarCsv",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV24SnGerarCsv=Value},v2z:function(Value){gx.O.ZV24SnGerarCsv=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNGERARCSV",gx.O.AV24SnGerarCsv,"S")},c2v:function(){gx.O.AV24SnGerarCsv=this.val()},val:function(){return gx.fn.getControlValue("vSNGERARCSV")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[57]={fld:"JS", format:2,grid:0};
   GXValidFnc[59]={fld:"BTNHELP",grid:0};
   this.AV20SaldoProcessoAnoProcesso = 0 ;
   this.ZV20SaldoProcessoAnoProcesso = 0 ;
   this.OV20SaldoProcessoAnoProcesso = 0 ;
   this.AV19SaldoProcessoNoProcesso = 0 ;
   this.ZV19SaldoProcessoNoProcesso = 0 ;
   this.OV19SaldoProcessoNoProcesso = 0 ;
   this.AV25DataInicial = gx.date.nullDate() ;
   this.ZV25DataInicial = gx.date.nullDate() ;
   this.OV25DataInicial = gx.date.nullDate() ;
   this.AV26DataFinal = gx.date.nullDate() ;
   this.ZV26DataFinal = gx.date.nullDate() ;
   this.OV26DataFinal = gx.date.nullDate() ;
   this.AV48SnAFSemConta = "" ;
   this.ZV48SnAFSemConta = "" ;
   this.OV48SnAFSemConta = "" ;
   this.AV24SnGerarCsv = "" ;
   this.ZV24SnGerarCsv = "" ;
   this.OV24SnGerarCsv = "" ;
   this.AV20SaldoProcessoAnoProcesso = 0 ;
   this.AV19SaldoProcessoNoProcesso = 0 ;
   this.AV25DataInicial = gx.date.nullDate() ;
   this.AV26DataFinal = gx.date.nullDate() ;
   this.AV48SnAFSemConta = "" ;
   this.AV24SnGerarCsv = "" ;
   this.A1695ContaPagRecDocumento = "" ;
   this.A4203PedidoCompraPagRecNumero = 0 ;
   this.A4202PedidoCompraPagRecAno = 0 ;
   this.A1693ContaPagRecPagRec = "" ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A8430LOGEntregaDocumento = "" ;
   this.A3337PedidoCompraNumero = 0 ;
   this.A3336PedidoCompraAno = 0 ;
   this.A3360PedidoCompraData = gx.date.nullDate() ;
   this.A3426PedidoCompraEmpresaId = "" ;
   this.A4287LOGEntregaSeq = 0 ;
   this.A3374ProcessoConvNumero = 0 ;
   this.A3373ProcessoConvAno = 0 ;
   this.A3372ProcessoConvEmpresaId = "" ;
   this.Events = {"e11d82_client": ["'FECHAR'", true] ,"e13d82_client": ["ENTER", true] ,"e15d82_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV58Pgmname',fld:'vPGMNAME'},{av:'AV20SaldoProcessoAnoProcesso',fld:'vSALDOPROCESSOANOPROCESSO'},{av:'AV19SaldoProcessoNoProcesso',fld:'vSALDOPROCESSONOPROCESSO'},{av:'A3372ProcessoConvEmpresaId',fld:'PROCESSOCONVEMPRESAID'},{av:'AV54ProcessoConvEmpresaId',fld:'vPROCESSOCONVEMPRESAID'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'AV25DataInicial',fld:'vDATAINICIAL'},{av:'AV26DataFinal',fld:'vDATAFINAL'},{av:'AV48SnAFSemConta',fld:'vSNAFSEMCONTA'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV49PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'A3360PedidoCompraData',fld:'PEDIDOCOMPRADATA'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A8430LOGEntregaDocumento',fld:'LOGENTREGADOCUMENTO'},{av:'A4287LOGEntregaSeq',fld:'LOGENTREGASEQ'},{av:'AV53SnExiste',fld:'vSNEXISTE'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV24SnGerarCsv',fld:'vSNGERARCSV'},{av:'AV59Pgmdesc',fld:'vPGMDESC'},{av:'AV23GerarCsv',fld:'vGERARCSV'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'A1693ContaPagRecPagRec',fld:'CONTAPAGRECPAGREC'},{av:'A4202PedidoCompraPagRecAno',fld:'PEDIDOCOMPRAPAGRECANO'},{av:'AV50PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'A4203PedidoCompraPagRecNumero',fld:'PEDIDOCOMPRAPAGRECNUMERO'},{av:'AV51PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'A1695ContaPagRecDocumento',fld:'CONTAPAGRECDOCUMENTO'},{av:'AV52LOGEntregaDocumento',fld:'vLOGENTREGADOCUMENTO'}],[{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV21tpErro',fld:'vTPERRO'},{av:'AV60GXLvl65',fld:'vGXLVL65'},{av:'AV26DataFinal',fld:'vDATAFINAL'},{av:'AV25DataInicial',fld:'vDATAINICIAL'},{av:'AV50PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV51PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV52LOGEntregaDocumento',fld:'vLOGENTREGADOCUMENTO'},{av:'AV24SnGerarCsv',fld:'vSNGERARCSV'},{av:'AV48SnAFSemConta',fld:'vSNAFSEMCONTA'},{av:'AV20SaldoProcessoAnoProcesso',fld:'vSALDOPROCESSOANOPROCESSO'},{av:'AV19SaldoProcessoNoProcesso',fld:'vSALDOPROCESSONOPROCESSO'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV53SnExiste',fld:'vSNEXISTE'}]];
   this.setPrompt("PROMPTPROCESSO", [23]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaosaldoprocesso());
