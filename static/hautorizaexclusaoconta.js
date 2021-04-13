/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:14:59.95
*/
gx.evt.autoSkip = false;
gx.define('hautorizaexclusaoconta', false, function () {
   this.ServerClass =  "hautorizaexclusaoconta" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV15Mensagem=gx.fn.getControlValue("vMENSAGEM") ;
      this.AV13ContaPagRecEmpresaId=gx.fn.getControlValue("vCONTAPAGRECEMPRESAID") ;
      this.AV16ContaPagRecNumeroStr=gx.fn.getControlValue("vCONTAPAGRECNUMEROSTR") ;
   };
   this.Validv_Contapagrecnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTAPAGRECNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12c32_client=function()
   {
      this.executeServerEvent("'SIM'", false, null, false, false);
   };
   this.e13c32_client=function()
   {
      this.executeServerEvent("'NAO'", false, null, false, false);
   };
   this.e15c32_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16c32_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,6,11,14,16,19,21,24,26,28,31,33,36,38,40,41,44,46];
   this.GXLastCtrlId =46;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={lvl:0,type:"svchar",len:400,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMSGEXCL",gxz:"ZV23MsgExcl",gxold:"OV23MsgExcl",gxvar:"AV23MsgExcl",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23MsgExcl=Value},v2z:function(Value){gx.O.ZV23MsgExcl=Value},v2c:function(){gx.fn.setControlValue("vMSGEXCL",gx.O.AV23MsgExcl,0)},c2v:function(){gx.O.AV23MsgExcl=this.val()},val:function(){return gx.fn.getControlValue("vMSGEXCL")},nac:gx.falseFn};
   GXValidFnc[11]={fld:"TABLE3",grid:0};
   GXValidFnc[14]={fld:"TXTMENSAGEM1", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contapagrecnumero,isvalid:null,rgrid:[],fld:"vCONTAPAGRECNUMERO",gxz:"ZV14ContaPagRecNumero",gxold:"OV14ContaPagRecNumero",gxvar:"AV14ContaPagRecNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14ContaPagRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14ContaPagRecNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECNUMERO",gx.O.AV14ContaPagRecNumero,0)},c2v:function(){gx.O.AV14ContaPagRecNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TXTMENSAGEM2", format:0,grid:0};
   GXValidFnc[21]={fld:"TABLE5",grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCLIFORID",gxz:"ZV20ContaPagRecCliForId",gxold:"OV20ContaPagRecCliForId",gxvar:"AV20ContaPagRecCliForId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ContaPagRecCliForId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20ContaPagRecCliForId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCLIFORID",gx.O.AV20ContaPagRecCliForId,0)},c2v:function(){gx.O.AV20ContaPagRecCliForId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECCLIFORID",'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TXTMENSAGEM5", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCLIFORFANTASIA",gxz:"ZV19ContaPagRecCliForFantasia",gxold:"OV19ContaPagRecCliForFantasia",gxvar:"AV19ContaPagRecCliForFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19ContaPagRecCliForFantasia=Value},v2z:function(Value){gx.O.ZV19ContaPagRecCliForFantasia=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCLIFORFANTASIA",gx.O.AV19ContaPagRecCliForFantasia,0)},c2v:function(){gx.O.AV19ContaPagRecCliForFantasia=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECCLIFORFANTASIA")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TXTMENSAGEM3", format:0,grid:0};
   GXValidFnc[33]={fld:"TABLE4",grid:0};
   GXValidFnc[36]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTEMISSAO",gxz:"ZV22ContaPagRecDtEmissao",gxold:"OV22ContaPagRecDtEmissao",gxvar:"AV22ContaPagRecDtEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22ContaPagRecDtEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV22ContaPagRecDtEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTEMISSAO",gx.O.AV22ContaPagRecDtEmissao,0)},c2v:function(){gx.O.AV22ContaPagRecDtEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTEMISSAO")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TXTMENSAGEM4", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECVLRCONTA",gxz:"ZV21ContaPagRecVlrConta",gxold:"OV21ContaPagRecVlrConta",gxvar:"AV21ContaPagRecVlrConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21ContaPagRecVlrConta=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV21ContaPagRecVlrConta=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCONTAPAGRECVLRCONTA",gx.O.AV21ContaPagRecVlrConta,2,',')},c2v:function(){gx.O.AV21ContaPagRecVlrConta=this.val()},val:function(){return gx.fn.getDecimalValue("vCONTAPAGRECVLRCONTA",'.',',')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TABNOTA",grid:0};
   GXValidFnc[44]={fld:"TXTMENSAGEM6", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNUMERONOTA",gxz:"ZV25NumeroNota",gxold:"OV25NumeroNota",gxvar:"AV25NumeroNota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25NumeroNota=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25NumeroNota=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNUMERONOTA",gx.O.AV25NumeroNota,0)},c2v:function(){gx.O.AV25NumeroNota=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMERONOTA",'.')},nac:gx.falseFn};
   this.AV23MsgExcl = "" ;
   this.ZV23MsgExcl = "" ;
   this.OV23MsgExcl = "" ;
   this.AV14ContaPagRecNumero = 0 ;
   this.ZV14ContaPagRecNumero = 0 ;
   this.OV14ContaPagRecNumero = 0 ;
   this.AV20ContaPagRecCliForId = 0 ;
   this.ZV20ContaPagRecCliForId = 0 ;
   this.OV20ContaPagRecCliForId = 0 ;
   this.AV19ContaPagRecCliForFantasia = "" ;
   this.ZV19ContaPagRecCliForFantasia = "" ;
   this.OV19ContaPagRecCliForFantasia = "" ;
   this.AV22ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.ZV22ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.OV22ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.AV21ContaPagRecVlrConta = 0 ;
   this.ZV21ContaPagRecVlrConta = 0 ;
   this.OV21ContaPagRecVlrConta = 0 ;
   this.AV25NumeroNota = 0 ;
   this.ZV25NumeroNota = 0 ;
   this.OV25NumeroNota = 0 ;
   this.AV23MsgExcl = "" ;
   this.AV14ContaPagRecNumero = 0 ;
   this.AV20ContaPagRecCliForId = 0 ;
   this.AV19ContaPagRecCliForFantasia = "" ;
   this.AV22ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.AV21ContaPagRecVlrConta = 0 ;
   this.AV25NumeroNota = 0 ;
   this.AV15Mensagem = "" ;
   this.AV13ContaPagRecEmpresaId = "" ;
   this.AV16ContaPagRecNumeroStr = "" ;
   this.A2030ContaLancamTpLancamTipo = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1782ContaLancamTpLancamEmpId = "" ;
   this.A1783ContaLancamTpLancamId = 0 ;
   this.A2744ItensLancamentoContabilFinancS = 0 ;
   this.A9149OSPagtoParContaPRecNum = 0 ;
   this.A9148OSPagtoParContaPRecEmpId = "" ;
   this.A8791OrdemServicoEmpresaId = "" ;
   this.A8792OrdemServicoId = 0 ;
   this.A6259SaidaPagtoParcelaContaPRecNo = 0 ;
   this.A6258SaidaPagtoParcelaContaPRecEp = "" ;
   this.A4306SaidaEmpresaId = "" ;
   this.A5960SaidaNoDocumento = 0 ;
   this.A4307SaidaId = 0 ;
   this.A4839EntradaPagtoParcelaContaPRNume = 0 ;
   this.A4838EntradaPagtoParcelaContaPREmpI = "" ;
   this.A4637EntradaEmpresaId = "" ;
   this.A4646EntradaNumeroDocumento = 0 ;
   this.A4638EntradaId = 0 ;
   this.A1693ContaPagRecPagRec = "" ;
   this.A1699ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.A1713ContaPagRecVlrConta = 0 ;
   this.A1637ContaPagRecCliForId = 0 ;
   this.A1638ContaPagRecCliForFantasia = "" ;
   this.A1636ContaPagRecCliForEmpId = "" ;
   this.Events = {"e12c32_client": ["'SIM'", true] ,"e13c32_client": ["'NAO'", true] ,"e15c32_client": ["ENTER", true] ,"e16c32_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'SIM'"] = [[{av:'AV13ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID',hsh:true},{av:'AV14ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'AV11DataNula',fld:'vDATANULA'},{av:'AV12SDTContaVazia',fld:'vSDTCONTAVAZIA'},{av:'AV28EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[{av:'AV12SDTContaVazia',fld:'vSDTCONTAVAZIA'},{av:'AV11DataNula',fld:'vDATANULA'},{av:'AV14ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'}]];
   this.EvtParms["'NAO'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setVCMap("AV15Mensagem", "vMENSAGEM", 0, "svchar");
   this.setVCMap("AV13ContaPagRecEmpresaId", "vCONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("AV16ContaPagRecNumeroStr", "vCONTAPAGRECNUMEROSTR", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hautorizaexclusaoconta());
