/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:45:39.66
*/
gx.evt.autoSkip = false;
gx.define('hatualizarintegracaocbl', false, function () {
   this.ServerClass =  "hatualizarintegracaocbl" ;
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
   this.Validv_Contacontabilid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTACONTABILID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipocontaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOCONTAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipolancamentoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLANCAMENTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Stcontabil=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSTCONTABIL");
         this.AnyError  = 0;
         if ( ! ( this.AV37StContabil == "0" || this.AV37StContabil == "1" || this.AV37StContabil == "2" || this.AV37StContabil == "3" ) )
         {
            try {
               gxballoon.setError("Campo StContabil fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipolancamentoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLANCAMENTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipocontaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOCONTAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresaccontabilid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESACCONTABILID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e111g62_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e131g62_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e151g62_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,18,22,24,27,29,32,34,36,39,41,44,46,48,51,53,56,58,60,63,65,68,70,72,77,81,83,84,85,86,89,91,92,95,97,98,101,103,109,115,116,117,118,119,120,121,123,124,125,126,127,128,129];
   this.GXLastCtrlId =129;
   GXValidFnc[2]={fld:"TABLE8",grid:0};
   GXValidFnc[5]={fld:"TABLE10",grid:0};
   GXValidFnc[8]={fld:"TABLE11",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPEXECUCAO",gxz:"ZV33TpExecucao",gxold:"OV33TpExecucao",gxvar:"AV33TpExecucao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV33TpExecucao=Value},v2z:function(Value){gx.O.ZV33TpExecucao=Value},v2c:function(){gx.fn.setComboBoxValue("vTPEXECUCAO",gx.O.AV33TpExecucao)},c2v:function(){gx.O.AV33TpExecucao=this.val()},val:function(){return gx.fn.getControlValue("vTPEXECUCAO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[22]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGARRECEBER",gxz:"ZV21PagarReceber",gxold:"OV21PagarReceber",gxvar:"AV21PagarReceber",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21PagarReceber=Value},v2z:function(Value){gx.O.ZV21PagarReceber=Value},v2c:function(){gx.fn.setComboBoxValue("vPAGARRECEBER",gx.O.AV21PagarReceber)},c2v:function(){gx.O.AV21PagarReceber=this.val()},val:function(){return gx.fn.getControlValue("vPAGARRECEBER")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={fld:"TABLE12",grid:0};
   GXValidFnc[32]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTOINI",gxz:"ZV22CentroCustoIni",gxold:"OV22CentroCustoIni",gxvar:"AV22CentroCustoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22CentroCustoIni=Value},v2z:function(Value){gx.O.ZV22CentroCustoIni=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOINI",gx.O.AV22CentroCustoIni,0)},c2v:function(){gx.O.AV22CentroCustoIni=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOINI")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTOFIN",gxz:"ZV23CentroCustoFin",gxold:"OV23CentroCustoFin",gxvar:"AV23CentroCustoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23CentroCustoFin=Value},v2z:function(Value){gx.O.ZV23CentroCustoFin=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOFIN",gx.O.AV23CentroCustoFin,0)},c2v:function(){gx.O.AV23CentroCustoFin=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOFIN")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[41]={fld:"TABLE13",grid:0};
   GXValidFnc[44]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTEMISSAOINI",gxz:"ZV24DtEmissaoIni",gxold:"OV24DtEmissaoIni",gxvar:"AV24DtEmissaoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24DtEmissaoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV24DtEmissaoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTEMISSAOINI",gx.O.AV24DtEmissaoIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV24DtEmissaoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTEMISSAOINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[46]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTEMISSAOFIN",gxz:"ZV25DtEmissaoFin",gxold:"OV25DtEmissaoFin",gxvar:"AV25DtEmissaoFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25DtEmissaoFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV25DtEmissaoFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTEMISSAOFIN",gx.O.AV25DtEmissaoFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV25DtEmissaoFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTEMISSAOFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 48 , function() {
   });
   GXValidFnc[51]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[53]={fld:"TABLE14",grid:0};
   GXValidFnc[56]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTVENCIMENTOINI",gxz:"ZV26DtVencimentoIni",gxold:"OV26DtVencimentoIni",gxvar:"AV26DtVencimentoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26DtVencimentoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV26DtVencimentoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTVENCIMENTOINI",gx.O.AV26DtVencimentoIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV26DtVencimentoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTVENCIMENTOINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTVENCIMENTOFIN",gxz:"ZV27DtVencimentoFin",gxold:"OV27DtVencimentoFin",gxvar:"AV27DtVencimentoFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27DtVencimentoFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV27DtVencimentoFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTVENCIMENTOFIN",gx.O.AV27DtVencimentoFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV27DtVencimentoFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTVENCIMENTOFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[63]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[65]={fld:"TABLE15",grid:0};
   GXValidFnc[68]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAINI",gxz:"ZV28PessoaIni",gxold:"OV28PessoaIni",gxvar:"AV28PessoaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28PessoaIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28PessoaIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAINI",gx.O.AV28PessoaIni,0)},c2v:function(){gx.O.AV28PessoaIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAINI",'.')},nac:gx.falseFn};
   GXValidFnc[70]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[72]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFIN",gxz:"ZV29PessoaFin",gxold:"OV29PessoaFin",gxvar:"AV29PessoaFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29PessoaFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29PessoaFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAFIN",gx.O.AV29PessoaFin,0)},c2v:function(){gx.O.AV29PessoaFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAFIN",'.')},nac:gx.falseFn};
   GXValidFnc[77]={fld:"EXEMPLO", format:0,grid:0};
   GXValidFnc[81]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[83]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contacontabilid,isvalid:null,rgrid:[],fld:"vCONTACONTABILID",gxz:"ZV34ContaContabilId",gxold:"OV34ContaContabilId",gxvar:"AV34ContaContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34ContaContabilId=Value},v2z:function(Value){gx.O.ZV34ContaContabilId=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILID",gx.O.AV34ContaContabilId,0)},c2v:function(){gx.O.AV34ContaContabilId=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILID")},nac:gx.falseFn};
   GXValidFnc[84]={fld:"IMGCCONT",grid:0};
   GXValidFnc[85]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORID",gxz:"ZV40TradutorId",gxold:"OV40TradutorId",gxvar:"AV40TradutorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40TradutorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40TradutorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTORID",gx.O.AV40TradutorId,0)},c2v:function(){gx.O.AV40TradutorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTORID",'.')},nac:gx.falseFn};
   GXValidFnc[86]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOME",gxz:"ZV47ContaContabilNome",gxold:"OV47ContaContabilNome",gxvar:"AV47ContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47ContaContabilNome=Value},v2z:function(Value){gx.O.ZV47ContaContabilNome=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILNOME",gx.O.AV47ContaContabilNome,0)},c2v:function(){gx.O.AV47ContaContabilNome=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNOME")},nac:gx.falseFn};
   GXValidFnc[89]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[91]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipocontaid,isvalid:null,rgrid:[],fld:"vTIPOCONTAID",gxz:"ZV35TipoContaId",gxold:"OV35TipoContaId",gxvar:"AV35TipoContaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35TipoContaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35TipoContaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTAID",gx.O.AV35TipoContaId,0)},c2v:function(){gx.O.AV35TipoContaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTAID",'.')},nac:gx.falseFn};
   GXValidFnc[92]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTADESCRICAO",gxz:"ZV45TipoContaDescricao",gxold:"OV45TipoContaDescricao",gxvar:"AV45TipoContaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45TipoContaDescricao=Value},v2z:function(Value){gx.O.ZV45TipoContaDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOCONTADESCRICAO",gx.O.AV45TipoContaDescricao,0)},c2v:function(){gx.O.AV45TipoContaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONTADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[95]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[97]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipolancamentoid,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOID",gxz:"ZV36TipoLancamentoId",gxold:"OV36TipoLancamentoId",gxvar:"AV36TipoLancamentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36TipoLancamentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36TipoLancamentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOID",gx.O.AV36TipoLancamentoId,0)},c2v:function(){gx.O.AV36TipoLancamentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[98]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTODESCRICAO",gxz:"ZV46TipoLancamentoDescricao",gxold:"OV46TipoLancamentoDescricao",gxvar:"AV46TipoLancamentoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46TipoLancamentoDescricao=Value},v2z:function(Value){gx.O.ZV46TipoLancamentoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTODESCRICAO",gx.O.AV46TipoLancamentoDescricao,0)},c2v:function(){gx.O.AV46TipoLancamentoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOLANCAMENTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[101]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[103]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Stcontabil,isvalid:null,rgrid:[],fld:"vSTCONTABIL",gxz:"ZV37StContabil",gxold:"OV37StContabil",gxvar:"AV37StContabil",ucs:[],op:[103],ip:[103],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV37StContabil=Value},v2z:function(Value){gx.O.ZV37StContabil=Value},v2c:function(){gx.fn.setComboBoxValue("vSTCONTABIL",gx.O.AV37StContabil);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV37StContabil=this.val()},val:function(){return gx.fn.getControlValue("vSTCONTABIL")},nac:gx.falseFn};
   this.declareDomainHdlr( 103 , function() {
   });
   GXValidFnc[109]={fld:"TABLE9",grid:0};
   GXValidFnc[115]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV38ChamaOnBlurMascara",gxold:"OV38ChamaOnBlurMascara",gxvar:"AV38ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV38ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV38ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV38ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[116]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV31Sim",gxold:"OV31Sim",gxvar:"AV31Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31Sim=Value},v2z:function(Value){gx.O.ZV31Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV31Sim,0)},c2v:function(){gx.O.AV31Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[117]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV32Nao",gxold:"OV32Nao",gxvar:"AV32Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32Nao=Value},v2z:function(Value){gx.O.ZV32Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV32Nao,0)},c2v:function(){gx.O.AV32Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[118]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipolancamentoempresaid,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOEMPRESAID",gxz:"ZV42TipoLancamentoEmpresaid",gxold:"OV42TipoLancamentoEmpresaid",gxvar:"AV42TipoLancamentoEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42TipoLancamentoEmpresaid=Value},v2z:function(Value){gx.O.ZV42TipoLancamentoEmpresaid=Value},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOEMPRESAID",gx.O.AV42TipoLancamentoEmpresaid,0)},c2v:function(){gx.O.AV42TipoLancamentoEmpresaid=this.val()},val:function(){return gx.fn.getControlValue("vTIPOLANCAMENTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[119]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipocontaempresaid,isvalid:null,rgrid:[],fld:"vTIPOCONTAEMPRESAID",gxz:"ZV43TipoContaEmpresaId",gxold:"OV43TipoContaEmpresaId",gxvar:"AV43TipoContaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43TipoContaEmpresaId=Value},v2z:function(Value){gx.O.ZV43TipoContaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTIPOCONTAEMPRESAID",gx.O.AV43TipoContaEmpresaId,0)},c2v:function(){gx.O.AV43TipoContaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONTAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[120]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresaccontabilid,isvalid:null,rgrid:[],fld:"vEMPRESACCONTABILID",gxz:"ZV44EmpresaCContabilId",gxold:"OV44EmpresaCContabilId",gxvar:"AV44EmpresaCContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44EmpresaCContabilId=Value},v2z:function(Value){gx.O.ZV44EmpresaCContabilId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESACCONTABILID",gx.O.AV44EmpresaCContabilId,0)},c2v:function(){gx.O.AV44EmpresaCContabilId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESACCONTABILID")},nac:gx.falseFn};
   GXValidFnc[121]={fld:"JS", format:2,grid:0};
   GXValidFnc[123]={fld:"BTNHELP",grid:0};
   GXValidFnc[124]={fld:"PROMPT_CENTROCUSTOINI",grid:0};
   GXValidFnc[125]={fld:"PROMPT_CENTROCUSTOFIN",grid:0};
   GXValidFnc[126]={fld:"PROMPT_PESSOAINI",grid:0};
   GXValidFnc[127]={fld:"PROMPT_PESSOAFIN",grid:0};
   GXValidFnc[128]={fld:"PROMPT_TIPOCONTAID",grid:0};
   GXValidFnc[129]={fld:"PROMPT_TIPOLANCAMENTOID",grid:0};
   this.AV33TpExecucao = "" ;
   this.ZV33TpExecucao = "" ;
   this.OV33TpExecucao = "" ;
   this.AV21PagarReceber = "" ;
   this.ZV21PagarReceber = "" ;
   this.OV21PagarReceber = "" ;
   this.AV22CentroCustoIni = "" ;
   this.ZV22CentroCustoIni = "" ;
   this.OV22CentroCustoIni = "" ;
   this.AV23CentroCustoFin = "" ;
   this.ZV23CentroCustoFin = "" ;
   this.OV23CentroCustoFin = "" ;
   this.AV24DtEmissaoIni = gx.date.nullDate() ;
   this.ZV24DtEmissaoIni = gx.date.nullDate() ;
   this.OV24DtEmissaoIni = gx.date.nullDate() ;
   this.AV25DtEmissaoFin = gx.date.nullDate() ;
   this.ZV25DtEmissaoFin = gx.date.nullDate() ;
   this.OV25DtEmissaoFin = gx.date.nullDate() ;
   this.AV26DtVencimentoIni = gx.date.nullDate() ;
   this.ZV26DtVencimentoIni = gx.date.nullDate() ;
   this.OV26DtVencimentoIni = gx.date.nullDate() ;
   this.AV27DtVencimentoFin = gx.date.nullDate() ;
   this.ZV27DtVencimentoFin = gx.date.nullDate() ;
   this.OV27DtVencimentoFin = gx.date.nullDate() ;
   this.AV28PessoaIni = 0 ;
   this.ZV28PessoaIni = 0 ;
   this.OV28PessoaIni = 0 ;
   this.AV29PessoaFin = 0 ;
   this.ZV29PessoaFin = 0 ;
   this.OV29PessoaFin = 0 ;
   this.AV34ContaContabilId = "" ;
   this.ZV34ContaContabilId = "" ;
   this.OV34ContaContabilId = "" ;
   this.AV40TradutorId = 0 ;
   this.ZV40TradutorId = 0 ;
   this.OV40TradutorId = 0 ;
   this.AV47ContaContabilNome = "" ;
   this.ZV47ContaContabilNome = "" ;
   this.OV47ContaContabilNome = "" ;
   this.AV35TipoContaId = 0 ;
   this.ZV35TipoContaId = 0 ;
   this.OV35TipoContaId = 0 ;
   this.AV45TipoContaDescricao = "" ;
   this.ZV45TipoContaDescricao = "" ;
   this.OV45TipoContaDescricao = "" ;
   this.AV36TipoLancamentoId = 0 ;
   this.ZV36TipoLancamentoId = 0 ;
   this.OV36TipoLancamentoId = 0 ;
   this.AV46TipoLancamentoDescricao = "" ;
   this.ZV46TipoLancamentoDescricao = "" ;
   this.OV46TipoLancamentoDescricao = "" ;
   this.AV37StContabil = "" ;
   this.ZV37StContabil = "" ;
   this.OV37StContabil = "" ;
   this.AV38ChamaOnBlurMascara = "" ;
   this.ZV38ChamaOnBlurMascara = "" ;
   this.OV38ChamaOnBlurMascara = "" ;
   this.AV31Sim = "" ;
   this.ZV31Sim = "" ;
   this.OV31Sim = "" ;
   this.AV32Nao = "" ;
   this.ZV32Nao = "" ;
   this.OV32Nao = "" ;
   this.AV42TipoLancamentoEmpresaid = "" ;
   this.ZV42TipoLancamentoEmpresaid = "" ;
   this.OV42TipoLancamentoEmpresaid = "" ;
   this.AV43TipoContaEmpresaId = "" ;
   this.ZV43TipoContaEmpresaId = "" ;
   this.OV43TipoContaEmpresaId = "" ;
   this.AV44EmpresaCContabilId = "" ;
   this.ZV44EmpresaCContabilId = "" ;
   this.OV44EmpresaCContabilId = "" ;
   this.AV33TpExecucao = "" ;
   this.AV21PagarReceber = "" ;
   this.AV22CentroCustoIni = "" ;
   this.AV23CentroCustoFin = "" ;
   this.AV24DtEmissaoIni = gx.date.nullDate() ;
   this.AV25DtEmissaoFin = gx.date.nullDate() ;
   this.AV26DtVencimentoIni = gx.date.nullDate() ;
   this.AV27DtVencimentoFin = gx.date.nullDate() ;
   this.AV28PessoaIni = 0 ;
   this.AV29PessoaFin = 0 ;
   this.AV34ContaContabilId = "" ;
   this.AV40TradutorId = 0 ;
   this.AV47ContaContabilNome = "" ;
   this.AV35TipoContaId = 0 ;
   this.AV45TipoContaDescricao = "" ;
   this.AV36TipoLancamentoId = 0 ;
   this.AV46TipoLancamentoDescricao = "" ;
   this.AV37StContabil = "" ;
   this.AV38ChamaOnBlurMascara = "" ;
   this.AV31Sim = "" ;
   this.AV32Nao = "" ;
   this.AV42TipoLancamentoEmpresaid = "" ;
   this.AV43TipoContaEmpresaId = "" ;
   this.AV44EmpresaCContabilId = "" ;
   this.A962TipoLancamentoId = 0 ;
   this.A1046TipoLancamentoEmpresaid = "" ;
   this.A964TipoLancamentoPagRec = "" ;
   this.A965TipoLancamentoTipo = "" ;
   this.A942TipoContaId = 0 ;
   this.A941TipoContaEmpresaId = "" ;
   this.A62ContaContabilId = "" ;
   this.A176EmpresaContaContabilEmpresaId = "" ;
   this.A64ContaContabilTradutor = 0 ;
   this.Events = {"e111g62_client": ["'FECHAR'", true] ,"e131g62_client": ["ENTER", true] ,"e151g62_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV41TpErro',fld:'vTPERRO'},{av:'AV53Pgmname',fld:'vPGMNAME'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV33TpExecucao',fld:'vTPEXECUCAO'},{av:'AV21PagarReceber',fld:'vPAGARRECEBER'},{av:'AV22CentroCustoIni',fld:'vCENTROCUSTOINI'},{av:'AV23CentroCustoFin',fld:'vCENTROCUSTOFIN'},{av:'AV24DtEmissaoIni',fld:'vDTEMISSAOINI'},{av:'AV25DtEmissaoFin',fld:'vDTEMISSAOFIN'},{av:'AV26DtVencimentoIni',fld:'vDTVENCIMENTOINI'},{av:'AV27DtVencimentoFin',fld:'vDTVENCIMENTOFIN'},{av:'AV28PessoaIni',fld:'vPESSOAINI'},{av:'AV29PessoaFin',fld:'vPESSOAFIN'},{av:'AV34ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV47ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV40TradutorId',fld:'vTRADUTORID'},{av:'AV35TipoContaId',fld:'vTIPOCONTAID'},{av:'AV45TipoContaDescricao',fld:'vTIPOCONTADESCRICAO'},{av:'AV36TipoLancamentoId',fld:'vTIPOLANCAMENTOID'},{av:'AV46TipoLancamentoDescricao',fld:'vTIPOLANCAMENTODESCRICAO'},{av:'AV37StContabil',fld:'vSTCONTABIL'},{av:'AV54Pgmdesc',fld:'vPGMDESC'},{av:'A176EmpresaContaContabilEmpresaId',fld:'EMPRESACONTACONTABILEMPRESAID'},{av:'AV44EmpresaCContabilId',fld:'vEMPRESACCONTABILID'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A64ContaContabilTradutor',fld:'CONTACONTABILTRADUTOR'},{av:'A941TipoContaEmpresaId',fld:'TIPOCONTAEMPRESAID'},{av:'AV43TipoContaEmpresaId',fld:'vTIPOCONTAEMPRESAID'},{av:'A942TipoContaId',fld:'TIPOCONTAID'},{av:'A1046TipoLancamentoEmpresaid',fld:'TIPOLANCAMENTOEMPRESAID'},{av:'AV42TipoLancamentoEmpresaid',fld:'vTIPOLANCAMENTOEMPRESAID'},{av:'A962TipoLancamentoId',fld:'TIPOLANCAMENTOID'},{av:'A964TipoLancamentoPagRec',fld:'TIPOLANCAMENTOPAGREC'},{av:'A965TipoLancamentoTipo',fld:'TIPOLANCAMENTOTIPO'}],[{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV37StContabil',fld:'vSTCONTABIL'},{av:'AV46TipoLancamentoDescricao',fld:'vTIPOLANCAMENTODESCRICAO'},{av:'AV36TipoLancamentoId',fld:'vTIPOLANCAMENTOID'},{av:'AV45TipoContaDescricao',fld:'vTIPOCONTADESCRICAO'},{av:'AV35TipoContaId',fld:'vTIPOCONTAID'},{av:'AV40TradutorId',fld:'vTRADUTORID'},{av:'AV47ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV34ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV29PessoaFin',fld:'vPESSOAFIN'},{av:'AV28PessoaIni',fld:'vPESSOAINI'},{av:'AV27DtVencimentoFin',fld:'vDTVENCIMENTOFIN'},{av:'AV26DtVencimentoIni',fld:'vDTVENCIMENTOINI'},{av:'AV25DtEmissaoFin',fld:'vDTEMISSAOFIN'},{av:'AV24DtEmissaoIni',fld:'vDTEMISSAOINI'},{av:'AV23CentroCustoFin',fld:'vCENTROCUSTOFIN'},{av:'AV22CentroCustoIni',fld:'vCENTROCUSTOINI'},{av:'AV21PagarReceber',fld:'vPAGARRECEBER'},{av:'AV33TpExecucao',fld:'vTPEXECUCAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV41TpErro',fld:'vTPERRO'},{av:'AV55GXLvl181',fld:'vGXLVL181'},{av:'AV56GXLvl197',fld:'vGXLVL197'},{av:'AV57GXLvl208',fld:'vGXLVL208'}]];
   this.setPrompt("IMGCCONT", [83,85]);
   this.setPrompt("PROMPT_CENTROCUSTOINI", [32]);
   this.setPrompt("PROMPT_CENTROCUSTOFIN", [36]);
   this.setPrompt("PROMPT_PESSOAINI", [68]);
   this.setPrompt("PROMPT_PESSOAFIN", [72]);
   this.setPrompt("PROMPT_TIPOCONTAID", [91]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOID", [97]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hatualizarintegracaocbl());
