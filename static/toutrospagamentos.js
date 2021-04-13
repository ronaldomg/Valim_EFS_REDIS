/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:9:18.40
*/
gx.evt.autoSkip = false;
gx.define('toutrospagamentos', false, function () {
   this.ServerClass =  "toutrospagamentos" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("20", "LAST");
   this.addKeyListener("19", "FIRST");
   this.addKeyListener("16", "SELECT");
   this.addKeyListener("13", "DELETE");
   this.addKeyListener("9", "GET");
   this.addKeyListener("2", "PROMPT");
   this.addKeyListener("8", "NEXT");
   this.addKeyListener("7", "PREVIOUS");
   this.addKeyListener("4", "CHECK");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV17ConvenioId=gx.fn.getIntegerValue("vCONVENIOID",'.') ;
      this.AV21OutrosPagamentosSequencia=gx.fn.getIntegerValue("vOUTROSPAGAMENTOSSEQUENCIA",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A1680ConvenioEmpresaId=gx.fn.getControlValue("CONVENIOEMPRESAID") ;
      this.AV18EmpresaPessoa=gx.fn.getControlValue("vEMPRESAPESSOA") ;
      this.A2172OutrosPagamentosPessoaEmpId=gx.fn.getControlValue("OUTROSPAGAMENTOSPESSOAEMPID") ;
      this.AV23TipoLicitacaoEmpresaId=gx.fn.getControlValue("vTIPOLICITACAOEMPRESAID") ;
      this.A2471TipoLicitacaoEmpresaId=gx.fn.getControlValue("TIPOLICITACAOEMPRESAID") ;
      this.AV25CaixaBancoEmpresaId=gx.fn.getControlValue("vCAIXABANCOEMPRESAID") ;
      this.A1014CaixaBancoEmpresaId=gx.fn.getControlValue("CAIXABANCOEMPRESAID") ;
      this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A2312OutrosPagamentosPessoaForneced=gx.fn.getControlValue("OUTROSPAGAMENTOSPESSOAFORNECED") ;
      this.A2476TipoLicitacaoSnExigeNumero=gx.fn.getControlValue("TIPOLICITACAOSNEXIGENUMERO") ;
      this.A8353OutrosPagamentosContaPagRecNum=gx.fn.getIntegerValue("OUTROSPAGAMENTOSCONTAPAGRECNUM",'.') ;
      this.A8350OutrosPagamentosNaturezaEmpId=gx.fn.getControlValue("OUTROSPAGAMENTOSNATUREZAEMPID") ;
      this.A8351OutrosPagamentosNaturezaId=gx.fn.getIntegerValue("OUTROSPAGAMENTOSNATUREZAID",'.') ;
      this.A2473TipoLicitacaoDescricao=gx.fn.getControlValue("TIPOLICITACAODESCRICAO") ;
      this.A2175OutrosPagamentosPessoaRazao=gx.fn.getControlValue("OUTROSPAGAMENTOSPESSOARAZAO") ;
      this.A2176OutrosPagamentosPessoaTipo=gx.fn.getControlValue("OUTROSPAGAMENTOSPESSOATIPO") ;
      this.A2177OutrosPagamentosPessoaCPF=gx.fn.getControlValue("OUTROSPAGAMENTOSPESSOACPF") ;
      this.A2178OutrosPagamentosPessoaCNPJ=gx.fn.getControlValue("OUTROSPAGAMENTOSPESSOACNPJ") ;
      this.A8352OutrosPagamentosNaturezaDesc=gx.fn.getControlValue("OUTROSPAGAMENTOSNATUREZADESC") ;
      this.AV33Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV32Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV19snPessoas=gx.fn.getControlValue("vSNPESSOAS") ;
      this.AV24SnAtivos=gx.fn.getControlValue("vSNATIVOS") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Convenioid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Convenioid",["gx.O.A1680ConvenioEmpresaId", "gx.O.A1681ConvenioId", "gx.O.A2082ConvenioDescricao"],["A2082ConvenioDescricao"]);
      return true;
   }
   this.Valid_Outrospagamentossequencia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OUTROSPAGAMENTOSSEQUENCIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Outrospagamentospessoaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Outrospagamentospessoaid",["gx.O.AV18EmpresaPessoa", "gx.O.A2173OutrosPagamentosPessoaId", "gx.O.A2172OutrosPagamentosPessoaEmpId", "gx.O.A2312OutrosPagamentosPessoaForneced", "gx.O.A2174OutrosPagamentosPessoaFantasia", "gx.O.A2175OutrosPagamentosPessoaRazao", "gx.O.A2176OutrosPagamentosPessoaTipo", "gx.O.A2177OutrosPagamentosPessoaCPF", "gx.O.A2178OutrosPagamentosPessoaCNPJ"],["A2172OutrosPagamentosPessoaEmpId", "A2174OutrosPagamentosPessoaFantasia", "A2175OutrosPagamentosPessoaRazao", "A2176OutrosPagamentosPessoaTipo", "A2177OutrosPagamentosPessoaCPF", "A2178OutrosPagamentosPessoaCNPJ", "A2312OutrosPagamentosPessoaForneced"]);
      return true;
   }
   this.Valid_Outrospagamentosfavorecido=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OUTROSPAGAMENTOSFAVORECIDO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipolicitacaoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipolicitacaoid",["gx.O.AV23TipoLicitacaoEmpresaId", "gx.O.A2472TipoLicitacaoId", "gx.O.A2471TipoLicitacaoEmpresaId", "gx.O.A2473TipoLicitacaoDescricao", "gx.O.A2476TipoLicitacaoSnExigeNumero"],["A2471TipoLicitacaoEmpresaId", "A2473TipoLicitacaoDescricao", "A2476TipoLicitacaoSnExigeNumero"]);
      return true;
   }
   this.Valid_Outrospagamentosnolicitacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OUTROSPAGAMENTOSNOLICITACAO");
         this.AnyError  = 0;
         if ( (0==this.A2184OutrosPagamentosNoLicitacao) && this.A2476TipoLicitacaoSnExigeNumero == "S" )
         {
            try {
               gxballoon.setError("Informe o Número");
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
   this.Valid_Outrospagamentosanolicitacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OUTROSPAGAMENTOSANOLICITACAO");
         this.AnyError  = 0;
         if ( (0==this.A2185OutrosPagamentosAnoLicitacao) && this.A2476TipoLicitacaoSnExigeNumero == "S" )
         {
            try {
               gxballoon.setError("Informe o Ano de Licitação");
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
   this.Valid_Outrospagamentosespecie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OUTROSPAGAMENTOSESPECIE");
         this.AnyError  = 0;
         if ( (""==this.A2164OutrosPagamentosEspecie) )
         {
            try {
               gxballoon.setError("Informe a Espécie");
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
   this.Valid_Outrospagamentosdocumento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OUTROSPAGAMENTOSDOCUMENTO");
         this.AnyError  = 0;
         if ( (""==this.A2165OutrosPagamentosDocumento) )
         {
            try {
               gxballoon.setError("Informe o Documento");
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
   this.Valid_Outrospagamentosdataemissao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OUTROSPAGAMENTOSDATAEMISSAO");
         this.AnyError  = 0;
         if ( (new gx.date.gxdate("").compare(this.A2166OutrosPagamentosDataEmissao)==0) )
         {
            try {
               gxballoon.setError("Informe a Data de Emissão");
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
   this.Valid_Outrospagamentosdatapagto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OUTROSPAGAMENTOSDATAPAGTO");
         this.AnyError  = 0;
         if ( (new gx.date.gxdate("").compare(this.A2168OutrosPagamentosDataPagto)==0) )
         {
            try {
               gxballoon.setError("Informe a Data de Pagamento");
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
   this.Valid_Outrospagamentosnocheque=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OUTROSPAGAMENTOSNOCHEQUE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Outrospagamentosnatureza=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OUTROSPAGAMENTOSNATUREZA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Outrospagamentosvalorpago=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OUTROSPAGAMENTOSVALORPAGO");
         this.AnyError  = 0;
         if ( (0.0==this.A2170OutrosPagamentosValorPago) )
         {
            try {
               gxballoon.setError("Informe o Valor Pago");
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
   this.Valid_Caixabancoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Caixabancoid",["gx.O.AV25CaixaBancoEmpresaId", "gx.O.A1015CaixaBancoId", "gx.O.A1014CaixaBancoEmpresaId", "gx.O.A1017CaixaBancoDescricao"],["A1014CaixaBancoEmpresaId", "A1017CaixaBancoDescricao"]);
      return true;
   }
   this.e12422_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13422_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1442226_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1542226_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,18,20,24,26,27,30,32,35,37,40,42,44,46,48,51,53,56,58,60,63,65,68,70,73,75,77,80,82,85,87,90,92,93,96,98,101,103,105,108,110,113,115,117,120,122,125,128,130,132,141,142,144,146,147];
   this.GXLastCtrlId =147;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Convenioid,isvalid:null,rgrid:[],fld:"CONVENIOID",gxz:"Z1681ConvenioId",gxold:"O1681ConvenioId",gxvar:"A1681ConvenioId",ucs:[],op:[15],ip:[15,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1681ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1681ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONVENIOID",gx.O.A1681ConvenioId,0)},c2v:function(){gx.O.A1681ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIODESCRICAO",gxz:"Z2082ConvenioDescricao",gxold:"O2082ConvenioDescricao",gxvar:"A2082ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2082ConvenioDescricao=Value},v2z:function(Value){gx.O.Z2082ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("CONVENIODESCRICAO",gx.O.A2082ConvenioDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2082ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("CONVENIODESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 15 , function() {
   });
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Outrospagamentossequencia,isvalid:null,rgrid:[],fld:"OUTROSPAGAMENTOSSEQUENCIA",gxz:"Z2163OutrosPagamentosSequencia",gxold:"O2163OutrosPagamentosSequencia",gxvar:"A2163OutrosPagamentosSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2163OutrosPagamentosSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2163OutrosPagamentosSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OUTROSPAGAMENTOSSEQUENCIA",gx.O.A2163OutrosPagamentosSequencia,0)},c2v:function(){gx.O.A2163OutrosPagamentosSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OUTROSPAGAMENTOSSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Outrospagamentospessoaid,isvalid:null,rgrid:[],fld:"OUTROSPAGAMENTOSPESSOAID",gxz:"Z2173OutrosPagamentosPessoaId",gxold:"O2173OutrosPagamentosPessoaId",gxvar:"A2173OutrosPagamentosPessoaId",ucs:[],op:[26,27],ip:[27,26],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2173OutrosPagamentosPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2173OutrosPagamentosPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OUTROSPAGAMENTOSPESSOAID",gx.O.A2173OutrosPagamentosPessoaId,0)},c2v:function(){gx.O.A2173OutrosPagamentosPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OUTROSPAGAMENTOSPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OUTROSPAGAMENTOSPESSOAFANTASIA",gxz:"Z2174OutrosPagamentosPessoaFantasia",gxold:"O2174OutrosPagamentosPessoaFantasia",gxvar:"A2174OutrosPagamentosPessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2174OutrosPagamentosPessoaFantasia=Value},v2z:function(Value){gx.O.Z2174OutrosPagamentosPessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("OUTROSPAGAMENTOSPESSOAFANTASIA",gx.O.A2174OutrosPagamentosPessoaFantasia,0)},c2v:function(){gx.O.A2174OutrosPagamentosPessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("OUTROSPAGAMENTOSPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Outrospagamentosfavorecido,isvalid:null,rgrid:[],fld:"OUTROSPAGAMENTOSFAVORECIDO",gxz:"Z2293OutrosPagamentosFavorecido",gxold:"O2293OutrosPagamentosFavorecido",gxvar:"A2293OutrosPagamentosFavorecido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2293OutrosPagamentosFavorecido=Value},v2z:function(Value){gx.O.Z2293OutrosPagamentosFavorecido=Value},v2c:function(){gx.fn.setControlValue("OUTROSPAGAMENTOSFAVORECIDO",gx.O.A2293OutrosPagamentosFavorecido,0)},c2v:function(){gx.O.A2293OutrosPagamentosFavorecido=this.val()},val:function(){return gx.fn.getControlValue("OUTROSPAGAMENTOSFAVORECIDO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[37]={fld:"TABLE6",grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipolicitacaoid,isvalid:null,rgrid:[],fld:"TIPOLICITACAOID",gxz:"Z2472TipoLicitacaoId",gxold:"O2472TipoLicitacaoId",gxvar:"A2472TipoLicitacaoId",ucs:[],op:[40],ip:[40],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.A2472TipoLicitacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2472TipoLicitacaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("TIPOLICITACAOID",gx.O.A2472TipoLicitacaoId)},c2v:function(){gx.O.A2472TipoLicitacaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPOLICITACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Outrospagamentosnolicitacao,isvalid:null,rgrid:[],fld:"OUTROSPAGAMENTOSNOLICITACAO",gxz:"Z2184OutrosPagamentosNoLicitacao",gxold:"O2184OutrosPagamentosNoLicitacao",gxvar:"A2184OutrosPagamentosNoLicitacao",ucs:[],op:[44],ip:[44],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2184OutrosPagamentosNoLicitacao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2184OutrosPagamentosNoLicitacao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OUTROSPAGAMENTOSNOLICITACAO",gx.O.A2184OutrosPagamentosNoLicitacao,0)},c2v:function(){gx.O.A2184OutrosPagamentosNoLicitacao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OUTROSPAGAMENTOSNOLICITACAO",'.')},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Outrospagamentosanolicitacao,isvalid:null,rgrid:[],fld:"OUTROSPAGAMENTOSANOLICITACAO",gxz:"Z2185OutrosPagamentosAnoLicitacao",gxold:"O2185OutrosPagamentosAnoLicitacao",gxvar:"A2185OutrosPagamentosAnoLicitacao",ucs:[],op:[48],ip:[48],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2185OutrosPagamentosAnoLicitacao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2185OutrosPagamentosAnoLicitacao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OUTROSPAGAMENTOSANOLICITACAO",gx.O.A2185OutrosPagamentosAnoLicitacao,0)},c2v:function(){gx.O.A2185OutrosPagamentosAnoLicitacao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OUTROSPAGAMENTOSANOLICITACAO",'.')},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[53]={fld:"TABLE7",grid:0};
   GXValidFnc[56]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Outrospagamentosespecie,isvalid:null,rgrid:[],fld:"OUTROSPAGAMENTOSESPECIE",gxz:"Z2164OutrosPagamentosEspecie",gxold:"O2164OutrosPagamentosEspecie",gxvar:"A2164OutrosPagamentosEspecie",ucs:[],op:[56],ip:[56],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2164OutrosPagamentosEspecie=Value},v2z:function(Value){gx.O.Z2164OutrosPagamentosEspecie=Value},v2c:function(){gx.fn.setControlValue("OUTROSPAGAMENTOSESPECIE",gx.O.A2164OutrosPagamentosEspecie,0)},c2v:function(){gx.O.A2164OutrosPagamentosEspecie=this.val()},val:function(){return gx.fn.getControlValue("OUTROSPAGAMENTOSESPECIE")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Outrospagamentosdocumento,isvalid:null,rgrid:[],fld:"OUTROSPAGAMENTOSDOCUMENTO",gxz:"Z2165OutrosPagamentosDocumento",gxold:"O2165OutrosPagamentosDocumento",gxvar:"A2165OutrosPagamentosDocumento",ucs:[],op:[60],ip:[60],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2165OutrosPagamentosDocumento=Value},v2z:function(Value){gx.O.Z2165OutrosPagamentosDocumento=Value},v2c:function(){gx.fn.setControlValue("OUTROSPAGAMENTOSDOCUMENTO",gx.O.A2165OutrosPagamentosDocumento,0)},c2v:function(){gx.O.A2165OutrosPagamentosDocumento=this.val()},val:function(){return gx.fn.getControlValue("OUTROSPAGAMENTOSDOCUMENTO")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Outrospagamentosdataemissao,isvalid:null,rgrid:[],fld:"OUTROSPAGAMENTOSDATAEMISSAO",gxz:"Z2166OutrosPagamentosDataEmissao",gxold:"O2166OutrosPagamentosDataEmissao",gxvar:"A2166OutrosPagamentosDataEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[65],ip:[65],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2166OutrosPagamentosDataEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2166OutrosPagamentosDataEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("OUTROSPAGAMENTOSDATAEMISSAO",gx.O.A2166OutrosPagamentosDataEmissao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2166OutrosPagamentosDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("OUTROSPAGAMENTOSDATAEMISSAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[68]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[70]={fld:"TABLE8",grid:0};
   GXValidFnc[73]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Outrospagamentosdatapagto,isvalid:null,rgrid:[],fld:"OUTROSPAGAMENTOSDATAPAGTO",gxz:"Z2168OutrosPagamentosDataPagto",gxold:"O2168OutrosPagamentosDataPagto",gxvar:"A2168OutrosPagamentosDataPagto",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[73],ip:[73],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2168OutrosPagamentosDataPagto=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2168OutrosPagamentosDataPagto=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("OUTROSPAGAMENTOSDATAPAGTO",gx.O.A2168OutrosPagamentosDataPagto,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2168OutrosPagamentosDataPagto=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("OUTROSPAGAMENTOSDATAPAGTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 73 , function() {
   });
   GXValidFnc[75]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[77]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Outrospagamentosnocheque,isvalid:null,rgrid:[],fld:"OUTROSPAGAMENTOSNOCHEQUE",gxz:"Z2167OutrosPagamentosNoCheque",gxold:"O2167OutrosPagamentosNoCheque",gxvar:"A2167OutrosPagamentosNoCheque",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2167OutrosPagamentosNoCheque=Value},v2z:function(Value){gx.O.Z2167OutrosPagamentosNoCheque=Value},v2c:function(){gx.fn.setControlValue("OUTROSPAGAMENTOSNOCHEQUE",gx.O.A2167OutrosPagamentosNoCheque,0)},c2v:function(){gx.O.A2167OutrosPagamentosNoCheque=this.val()},val:function(){return gx.fn.getControlValue("OUTROSPAGAMENTOSNOCHEQUE")},nac:gx.falseFn};
   GXValidFnc[80]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[82]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Outrospagamentosnatureza,isvalid:null,rgrid:[],fld:"OUTROSPAGAMENTOSNATUREZA",gxz:"Z2169OutrosPagamentosNatureza",gxold:"O2169OutrosPagamentosNatureza",gxvar:"A2169OutrosPagamentosNatureza",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2169OutrosPagamentosNatureza=Value},v2z:function(Value){gx.O.Z2169OutrosPagamentosNatureza=Value},v2c:function(){gx.fn.setControlValue("OUTROSPAGAMENTOSNATUREZA",gx.O.A2169OutrosPagamentosNatureza,0)},c2v:function(){gx.O.A2169OutrosPagamentosNatureza=this.val()},val:function(){return gx.fn.getControlValue("OUTROSPAGAMENTOSNATUREZA")},nac:gx.falseFn};
   GXValidFnc[85]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[87]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Outrospagamentosvalorpago,isvalid:null,rgrid:[],fld:"OUTROSPAGAMENTOSVALORPAGO",gxz:"Z2170OutrosPagamentosValorPago",gxold:"O2170OutrosPagamentosValorPago",gxvar:"A2170OutrosPagamentosValorPago",ucs:[],op:[87],ip:[87],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2170OutrosPagamentosValorPago=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2170OutrosPagamentosValorPago=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("OUTROSPAGAMENTOSVALORPAGO",gx.O.A2170OutrosPagamentosValorPago,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2170OutrosPagamentosValorPago=this.val()},val:function(){return gx.fn.getDecimalValue("OUTROSPAGAMENTOSVALORPAGO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 87 , function() {
   });
   GXValidFnc[90]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[92]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Caixabancoid,isvalid:null,rgrid:[],fld:"CAIXABANCOID",gxz:"Z1015CaixaBancoId",gxold:"O1015CaixaBancoId",gxvar:"A1015CaixaBancoId",ucs:[],op:[93],ip:[93,92],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1015CaixaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1015CaixaBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CAIXABANCOID",gx.O.A1015CaixaBancoId,0)},c2v:function(){gx.O.A1015CaixaBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CAIXABANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[93]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CAIXABANCODESCRICAO",gxz:"Z1017CaixaBancoDescricao",gxold:"O1017CaixaBancoDescricao",gxvar:"A1017CaixaBancoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1017CaixaBancoDescricao=Value},v2z:function(Value){gx.O.Z1017CaixaBancoDescricao=Value},v2c:function(){gx.fn.setControlValue("CAIXABANCODESCRICAO",gx.O.A1017CaixaBancoDescricao,0)},c2v:function(){gx.O.A1017CaixaBancoDescricao=this.val()},val:function(){return gx.fn.getControlValue("CAIXABANCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[96]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[98]={fld:"TABLE4",grid:0};
   GXValidFnc[101]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OUTROSPAGAMENTOSPROCANO",gxz:"Z5564OutrosPagamentosProcAno",gxold:"O5564OutrosPagamentosProcAno",gxvar:"A5564OutrosPagamentosProcAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5564OutrosPagamentosProcAno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5564OutrosPagamentosProcAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OUTROSPAGAMENTOSPROCANO",gx.O.A5564OutrosPagamentosProcAno,0)},c2v:function(){gx.O.A5564OutrosPagamentosProcAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OUTROSPAGAMENTOSPROCANO",'.')},nac:gx.falseFn};
   GXValidFnc[103]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[105]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OUTROSPAGAMENTOSPROCNUMERO",gxz:"Z5565OutrosPagamentosProcNumero",gxold:"O5565OutrosPagamentosProcNumero",gxvar:"A5565OutrosPagamentosProcNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5565OutrosPagamentosProcNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5565OutrosPagamentosProcNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OUTROSPAGAMENTOSPROCNUMERO",gx.O.A5565OutrosPagamentosProcNumero,0)},c2v:function(){gx.O.A5565OutrosPagamentosProcNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OUTROSPAGAMENTOSPROCNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[108]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[110]={fld:"TABLE5",grid:0};
   GXValidFnc[113]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OUTROSPAGAMENTOSPEDCOMANO",gxz:"Z5566OutrosPagamentosPedComAno",gxold:"O5566OutrosPagamentosPedComAno",gxvar:"A5566OutrosPagamentosPedComAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5566OutrosPagamentosPedComAno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5566OutrosPagamentosPedComAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OUTROSPAGAMENTOSPEDCOMANO",gx.O.A5566OutrosPagamentosPedComAno,0)},c2v:function(){gx.O.A5566OutrosPagamentosPedComAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OUTROSPAGAMENTOSPEDCOMANO",'.')},nac:gx.falseFn};
   GXValidFnc[115]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[117]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OUTROSPAGAMENTOSPEDCOMNUMERO",gxz:"Z5567OutrosPagamentosPedComNumero",gxold:"O5567OutrosPagamentosPedComNumero",gxvar:"A5567OutrosPagamentosPedComNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5567OutrosPagamentosPedComNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5567OutrosPagamentosPedComNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OUTROSPAGAMENTOSPEDCOMNUMERO",gx.O.A5567OutrosPagamentosPedComNumero,0)},c2v:function(){gx.O.A5567OutrosPagamentosPedComNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OUTROSPAGAMENTOSPEDCOMNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[120]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[122]={lvl:0,type:"svchar",len:500,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OUTROSPAGAMENTOSOBJETOCONTRATO",gxz:"Z5563OutrosPagamentosObjetoContrato",gxold:"O5563OutrosPagamentosObjetoContrato",gxvar:"A5563OutrosPagamentosObjetoContrato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5563OutrosPagamentosObjetoContrato=Value},v2z:function(Value){gx.O.Z5563OutrosPagamentosObjetoContrato=Value},v2c:function(){gx.fn.setControlValue("OUTROSPAGAMENTOSOBJETOCONTRATO",gx.O.A5563OutrosPagamentosObjetoContrato,0)},c2v:function(){gx.O.A5563OutrosPagamentosObjetoContrato=this.val()},val:function(){return gx.fn.getControlValue("OUTROSPAGAMENTOSOBJETOCONTRATO")},nac:gx.falseFn};
   GXValidFnc[125]={fld:"TABLE9",grid:0};
   GXValidFnc[128]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[130]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OUTROSPAGAMENTOSUSUARIOALT",gxz:"Z2179OutrosPagamentosUsuarioAlt",gxold:"O2179OutrosPagamentosUsuarioAlt",gxvar:"A2179OutrosPagamentosUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2179OutrosPagamentosUsuarioAlt=Value},v2z:function(Value){gx.O.Z2179OutrosPagamentosUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("OUTROSPAGAMENTOSUSUARIOALT",gx.O.A2179OutrosPagamentosUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2179OutrosPagamentosUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("OUTROSPAGAMENTOSUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 130 , function() {
   });
   GXValidFnc[132]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OUTROSPAGAMENTOSDATAHORAALT",gxz:"Z2180OutrosPagamentosDataHoraAlt",gxold:"O2180OutrosPagamentosDataHoraAlt",gxvar:"A2180OutrosPagamentosDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2180OutrosPagamentosDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2180OutrosPagamentosDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("OUTROSPAGAMENTOSDATAHORAALT",gx.O.A2180OutrosPagamentosDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2180OutrosPagamentosDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("OUTROSPAGAMENTOSDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 132 , function() {
   });
   GXValidFnc[141]={fld:"JS", format:2,grid:0};
   GXValidFnc[142]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV27AcessoSistemaSequencia",gxold:"OV27AcessoSistemaSequencia",gxvar:"AV27AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV27AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV27AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[144]={fld:"BTNHELP",grid:0};
   GXValidFnc[146]={fld:"PROMPT_2173",grid:226};
   GXValidFnc[147]={fld:"PROMPT_1015",grid:226};
   this.A1681ConvenioId = 0 ;
   this.Z1681ConvenioId = 0 ;
   this.O1681ConvenioId = 0 ;
   this.A2082ConvenioDescricao = "" ;
   this.Z2082ConvenioDescricao = "" ;
   this.O2082ConvenioDescricao = "" ;
   this.A2163OutrosPagamentosSequencia = 0 ;
   this.Z2163OutrosPagamentosSequencia = 0 ;
   this.O2163OutrosPagamentosSequencia = 0 ;
   this.A2173OutrosPagamentosPessoaId = 0 ;
   this.Z2173OutrosPagamentosPessoaId = 0 ;
   this.O2173OutrosPagamentosPessoaId = 0 ;
   this.A2174OutrosPagamentosPessoaFantasia = "" ;
   this.Z2174OutrosPagamentosPessoaFantasia = "" ;
   this.O2174OutrosPagamentosPessoaFantasia = "" ;
   this.A2293OutrosPagamentosFavorecido = "" ;
   this.Z2293OutrosPagamentosFavorecido = "" ;
   this.O2293OutrosPagamentosFavorecido = "" ;
   this.A2472TipoLicitacaoId = 0 ;
   this.Z2472TipoLicitacaoId = 0 ;
   this.O2472TipoLicitacaoId = 0 ;
   this.A2184OutrosPagamentosNoLicitacao = 0 ;
   this.Z2184OutrosPagamentosNoLicitacao = 0 ;
   this.O2184OutrosPagamentosNoLicitacao = 0 ;
   this.A2185OutrosPagamentosAnoLicitacao = 0 ;
   this.Z2185OutrosPagamentosAnoLicitacao = 0 ;
   this.O2185OutrosPagamentosAnoLicitacao = 0 ;
   this.A2164OutrosPagamentosEspecie = "" ;
   this.Z2164OutrosPagamentosEspecie = "" ;
   this.O2164OutrosPagamentosEspecie = "" ;
   this.A2165OutrosPagamentosDocumento = "" ;
   this.Z2165OutrosPagamentosDocumento = "" ;
   this.O2165OutrosPagamentosDocumento = "" ;
   this.A2166OutrosPagamentosDataEmissao = gx.date.nullDate() ;
   this.Z2166OutrosPagamentosDataEmissao = gx.date.nullDate() ;
   this.O2166OutrosPagamentosDataEmissao = gx.date.nullDate() ;
   this.A2168OutrosPagamentosDataPagto = gx.date.nullDate() ;
   this.Z2168OutrosPagamentosDataPagto = gx.date.nullDate() ;
   this.O2168OutrosPagamentosDataPagto = gx.date.nullDate() ;
   this.A2167OutrosPagamentosNoCheque = "" ;
   this.Z2167OutrosPagamentosNoCheque = "" ;
   this.O2167OutrosPagamentosNoCheque = "" ;
   this.A2169OutrosPagamentosNatureza = "" ;
   this.Z2169OutrosPagamentosNatureza = "" ;
   this.O2169OutrosPagamentosNatureza = "" ;
   this.A2170OutrosPagamentosValorPago = 0 ;
   this.Z2170OutrosPagamentosValorPago = 0 ;
   this.O2170OutrosPagamentosValorPago = 0 ;
   this.A1015CaixaBancoId = 0 ;
   this.Z1015CaixaBancoId = 0 ;
   this.O1015CaixaBancoId = 0 ;
   this.A1017CaixaBancoDescricao = "" ;
   this.Z1017CaixaBancoDescricao = "" ;
   this.O1017CaixaBancoDescricao = "" ;
   this.A5564OutrosPagamentosProcAno = 0 ;
   this.Z5564OutrosPagamentosProcAno = 0 ;
   this.O5564OutrosPagamentosProcAno = 0 ;
   this.A5565OutrosPagamentosProcNumero = 0 ;
   this.Z5565OutrosPagamentosProcNumero = 0 ;
   this.O5565OutrosPagamentosProcNumero = 0 ;
   this.A5566OutrosPagamentosPedComAno = 0 ;
   this.Z5566OutrosPagamentosPedComAno = 0 ;
   this.O5566OutrosPagamentosPedComAno = 0 ;
   this.A5567OutrosPagamentosPedComNumero = 0 ;
   this.Z5567OutrosPagamentosPedComNumero = 0 ;
   this.O5567OutrosPagamentosPedComNumero = 0 ;
   this.A5563OutrosPagamentosObjetoContrato = "" ;
   this.Z5563OutrosPagamentosObjetoContrato = "" ;
   this.O5563OutrosPagamentosObjetoContrato = "" ;
   this.A2179OutrosPagamentosUsuarioAlt = "" ;
   this.Z2179OutrosPagamentosUsuarioAlt = "" ;
   this.O2179OutrosPagamentosUsuarioAlt = "" ;
   this.A2180OutrosPagamentosDataHoraAlt = gx.date.nullDate() ;
   this.Z2180OutrosPagamentosDataHoraAlt = gx.date.nullDate() ;
   this.O2180OutrosPagamentosDataHoraAlt = gx.date.nullDate() ;
   this.AV27AcessoSistemaSequencia = 0 ;
   this.ZV27AcessoSistemaSequencia = 0 ;
   this.OV27AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV19snPessoas = "" ;
   this.AV24SnAtivos = "" ;
   this.AV32Pgmname = "" ;
   this.AV33Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV27AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV18EmpresaPessoa = "" ;
   this.AV23TipoLicitacaoEmpresaId = "" ;
   this.AV25CaixaBancoEmpresaId = "" ;
   this.AV20SnAlterou = "" ;
   this.AV17ConvenioId = 0 ;
   this.AV21OutrosPagamentosSequencia = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A1681ConvenioId = 0 ;
   this.A2163OutrosPagamentosSequencia = 0 ;
   this.A2172OutrosPagamentosPessoaEmpId = "" ;
   this.A2471TipoLicitacaoEmpresaId = "" ;
   this.A1014CaixaBancoEmpresaId = "" ;
   this.A2179OutrosPagamentosUsuarioAlt = "" ;
   this.A2180OutrosPagamentosDataHoraAlt = gx.date.nullDate() ;
   this.A2082ConvenioDescricao = "" ;
   this.A2164OutrosPagamentosEspecie = "" ;
   this.A2165OutrosPagamentosDocumento = "" ;
   this.A2166OutrosPagamentosDataEmissao = gx.date.nullDate() ;
   this.A2167OutrosPagamentosNoCheque = "" ;
   this.A2168OutrosPagamentosDataPagto = gx.date.nullDate() ;
   this.A8350OutrosPagamentosNaturezaEmpId = "" ;
   this.A8351OutrosPagamentosNaturezaId = 0 ;
   this.A8352OutrosPagamentosNaturezaDesc = "" ;
   this.A2169OutrosPagamentosNatureza = "" ;
   this.A2170OutrosPagamentosValorPago = 0 ;
   this.A2472TipoLicitacaoId = 0 ;
   this.A2473TipoLicitacaoDescricao = "" ;
   this.A2476TipoLicitacaoSnExigeNumero = "" ;
   this.A2184OutrosPagamentosNoLicitacao = 0 ;
   this.A2185OutrosPagamentosAnoLicitacao = 0 ;
   this.A2173OutrosPagamentosPessoaId = 0 ;
   this.A2174OutrosPagamentosPessoaFantasia = "" ;
   this.A2175OutrosPagamentosPessoaRazao = "" ;
   this.A2176OutrosPagamentosPessoaTipo = "" ;
   this.A2177OutrosPagamentosPessoaCPF = "" ;
   this.A2178OutrosPagamentosPessoaCNPJ = "" ;
   this.A2312OutrosPagamentosPessoaForneced = "" ;
   this.A2293OutrosPagamentosFavorecido = "" ;
   this.A1015CaixaBancoId = 0 ;
   this.A1017CaixaBancoDescricao = "" ;
   this.A5563OutrosPagamentosObjetoContrato = "" ;
   this.A5564OutrosPagamentosProcAno = 0 ;
   this.A5565OutrosPagamentosProcNumero = 0 ;
   this.A5566OutrosPagamentosPedComAno = 0 ;
   this.A5567OutrosPagamentosPedComNumero = 0 ;
   this.A8353OutrosPagamentosContaPagRecNum = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e12422_client": ["'FECHAR'", true] ,"e13422_client": ["AFTER TRN", true] ,"e1442226_client": ["ENTER", true] ,"e1542226_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17ConvenioId',fld:'vCONVENIOID'},{av:'AV21OutrosPagamentosSequencia',fld:'vOUTROSPAGAMENTOSSEQUENCIA'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV27AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV27AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_2173", [26]);
   this.setPrompt("PROMPT_1015", [92]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17ConvenioId", "vCONVENIOID", 0, "int");
   this.setVCMap("AV21OutrosPagamentosSequencia", "vOUTROSPAGAMENTOSSEQUENCIA", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A1680ConvenioEmpresaId", "CONVENIOEMPRESAID", 0, "char");
   this.setVCMap("AV18EmpresaPessoa", "vEMPRESAPESSOA", 0, "char");
   this.setVCMap("A2172OutrosPagamentosPessoaEmpId", "OUTROSPAGAMENTOSPESSOAEMPID", 0, "char");
   this.setVCMap("AV23TipoLicitacaoEmpresaId", "vTIPOLICITACAOEMPRESAID", 0, "char");
   this.setVCMap("A2471TipoLicitacaoEmpresaId", "TIPOLICITACAOEMPRESAID", 0, "char");
   this.setVCMap("AV25CaixaBancoEmpresaId", "vCAIXABANCOEMPRESAID", 0, "char");
   this.setVCMap("A1014CaixaBancoEmpresaId", "CAIXABANCOEMPRESAID", 0, "char");
   this.setVCMap("AV20SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A2312OutrosPagamentosPessoaForneced", "OUTROSPAGAMENTOSPESSOAFORNECED", 0, "char");
   this.setVCMap("A2476TipoLicitacaoSnExigeNumero", "TIPOLICITACAOSNEXIGENUMERO", 0, "char");
   this.setVCMap("A8353OutrosPagamentosContaPagRecNum", "OUTROSPAGAMENTOSCONTAPAGRECNUM", 0, "int");
   this.setVCMap("A8350OutrosPagamentosNaturezaEmpId", "OUTROSPAGAMENTOSNATUREZAEMPID", 0, "char");
   this.setVCMap("A8351OutrosPagamentosNaturezaId", "OUTROSPAGAMENTOSNATUREZAID", 0, "int");
   this.setVCMap("A2473TipoLicitacaoDescricao", "TIPOLICITACAODESCRICAO", 0, "svchar");
   this.setVCMap("A2175OutrosPagamentosPessoaRazao", "OUTROSPAGAMENTOSPESSOARAZAO", 0, "svchar");
   this.setVCMap("A2176OutrosPagamentosPessoaTipo", "OUTROSPAGAMENTOSPESSOATIPO", 0, "char");
   this.setVCMap("A2177OutrosPagamentosPessoaCPF", "OUTROSPAGAMENTOSPESSOACPF", 0, "char");
   this.setVCMap("A2178OutrosPagamentosPessoaCNPJ", "OUTROSPAGAMENTOSPESSOACNPJ", 0, "char");
   this.setVCMap("A8352OutrosPagamentosNaturezaDesc", "OUTROSPAGAMENTOSNATUREZADESC", 0, "svchar");
   this.setVCMap("AV33Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV32Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV19snPessoas", "vSNPESSOAS", 0, "char");
   this.setVCMap("AV24SnAtivos", "vSNATIVOS", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 226 ]= ["O2170OutrosPagamentosValorPago","O1015CaixaBancoId","O2169OutrosPagamentosNatureza","O2168OutrosPagamentosDataPagto","O2167OutrosPagamentosNoCheque","O2166OutrosPagamentosDataEmissao","O2165OutrosPagamentosDocumento","O2164OutrosPagamentosEspecie","O2185OutrosPagamentosAnoLicitacao","O2184OutrosPagamentosNoLicitacao","O2472TipoLicitacaoId","O2293OutrosPagamentosFavorecido","O2173OutrosPagamentosPessoaId"] ;
});
gx.setParentObj(new toutrospagamentos());
