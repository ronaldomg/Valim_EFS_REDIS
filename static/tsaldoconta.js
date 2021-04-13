/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 2:54:11.37
*/
gx.evt.autoSkip = false;
gx.define('tsaldoconta', false, function () {
   this.ServerClass =  "tsaldoconta" ;
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
      this.AV16ContaContabilId=gx.fn.getControlValue("vCONTACONTABILID") ;
      this.AV17SaldoContaDataReferencia=gx.fn.getDateValue("vSALDOCONTADATAREFERENCIA") ;
      this.AV27EmpresaPadraoSaldo=gx.fn.getControlValue("vEMPRESAPADRAOSALDO") ;
      this.A879SaldoContaEmpresaId=gx.fn.getControlValue("SALDOCONTAEMPRESAID") ;
      this.AV14EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A176EmpresaContaContabilEmpresaId=gx.fn.getControlValue("EMPRESACONTACONTABILEMPRESAID") ;
      this.AV23diaref=gx.fn.getIntegerValue("vDIAREF",'.') ;
      this.AV28diare2=gx.fn.getIntegerValue("vDIARE2",'.') ;
      this.AV13MsgErro=gx.fn.getControlValue("vMSGERRO") ;
      this.AV10ret=gx.fn.getIntegerValue("vRET",'.') ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV37SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV39LogSaldoContaEmpresaId=gx.fn.getControlValue("vLOGSALDOCONTAEMPRESAID") ;
      this.AV40LogEmpresaContaContabilEmpresaId=gx.fn.getControlValue("vLOGEMPRESACONTACONTABILEMPRESAID") ;
      this.AV41LogContaContabilId=gx.fn.getControlValue("vLOGCONTACONTABILID") ;
      this.AV42LogSaldoContaDataReferencia=gx.fn.getDateValue("vLOGSALDOCONTADATAREFERENCIA") ;
      this.AV29ErroCaracteres=gx.fn.getControlValue("vERROCARACTERES") ;
      this.AV38lSaldoContas=gx.fn.getControlValue("vLSALDOCONTAS") ;
      this.AV43LogUsuario=gx.fn.getControlValue("vLOGUSUARIO") ;
      this.AV56Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV55Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV19EmpresaPadraoCenCusto=gx.fn.getControlValue("vEMPRESAPADRAOCENCUSTO") ;
      this.A537CentroCustoSaldoEmpresaId=gx.fn.getControlValue("CENTROCUSTOSALDOEMPRESAID") ;
      this.AV45LogCentroCustoSaldoEmpresaId=gx.fn.getControlValue("vLOGCENTROCUSTOSALDOEMPRESAID") ;
      this.AV46LogCentroCustoSaldoId=gx.fn.getControlValue("vLOGCENTROCUSTOSALDOID") ;
      this.AV44lSaldoContaCentroCustos=gx.fn.getControlValue("vLSALDOCONTACENTROCUSTOS") ;
      this.AV18EmpresaPadraoCorrentista=gx.fn.getControlValue("vEMPRESAPADRAOCORRENTISTA") ;
      this.A227EmpresaPessoasEmpresaId=gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID") ;
      this.AV48LogEmpresaPessoasEmpresaId=gx.fn.getControlValue("vLOGEMPRESAPESSOASEMPRESAID") ;
      this.AV49LogPessoaId=gx.fn.getIntegerValue("vLOGPESSOAID",'.') ;
      this.AV47lSaldoContaCorrentistas=gx.fn.getControlValue("vLSALDOCONTACORRENTISTAS") ;
      this.AV21Sim=gx.fn.getControlValue("vSIM") ;
   };
   this.Valid_Contacontabilid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contacontabilid",["gx.O.Gx_mode", "gx.O.O63ContaContabilNome", "gx.O.A176EmpresaContaContabilEmpresaId", "gx.O.A62ContaContabilId", "gx.O.A63ContaContabilNome"],["O63ContaContabilNome", "A63ContaContabilNome", ["AV38lSaldoContas","Acontacontabilnome"]]);
      return true;
   }
   this.Valid_Saldocontadatareferencia=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Saldocontadatareferencia",['gx.date.urlDate(gx.O.A536SaldoContaDataReferencia,"DMY4")', "gx.O.AV23diaref", "gx.O.AV28diare2", "gx.O.AV13MsgErro", "gx.O.AV10ret"],["AV23diaref", "AV28diare2", "AV10ret", "AV13MsgErro"]);
      return true;
   }
   this.Valid_Contacontabilnome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTACONTABILNOME");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saldocontatotaldebito=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SALDOCONTATOTALDEBITO");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saldocontatotalcredito=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SALDOCONTATOTALCREDITO");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saldocontasaldoatual=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SALDOCONTASALDOATUAL");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saldocontacreditoapuracao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SALDOCONTACREDITOAPURACAO");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saldocontadebitoapuracao=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Saldocontadebitoapuracao",["gx.O.Gx_mode", "gx.num.urlDecimal(gx.O.O529SaldoContaDebitoApuracao,\'.\',\',\')", "gx.num.urlDecimal(gx.O.O528SaldoContaCreditoApuracao,\'.\',\',\')", "gx.num.urlDecimal(gx.O.O527SaldoContaSaldoAtual,\'.\',\',\')", "gx.num.urlDecimal(gx.O.O526SaldoContaTotalCredito,\'.\',\',\')", "gx.num.urlDecimal(gx.O.O525SaldoContaTotalDebito,\'.\',\',\')", "gx.O.AV7UsrCod", "gx.num.urlDecimal(gx.O.A525SaldoContaTotalDebito,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A526SaldoContaTotalCredito,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A527SaldoContaSaldoAtual,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A528SaldoContaCreditoApuracao,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A529SaldoContaDebitoApuracao,\'.\',\',\')", "gx.O.A783SaldoContaUsuarioId", 'gx.date.urlDateTime(gx.O.A777SaldoContaDataHora,"DMY4")'],["A783SaldoContaUsuarioId", "A777SaldoContaDataHora", ["AV38lSaldoContas","Asaldocontadebitoapuracao"]]);
      return true;
   }
   this.Validv_Chamaonblurmascara=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCHAMAONBLURMASCARA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Centrocustosaldoid=function()
   {
      this.sMode110 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(110,58)  ;
      this.standaloneModal18110( );
      this.standaloneNotModal18110( );
      if(  gx.fn.currentGridRowImpl(58) ===0) {
         this.Gx_mode =  this.sMode110  ;
         return true;
      }
      var gxballoon = gx.util.balloon.getNew("CENTROCUSTOSALDOID", gx.fn.currentGridRowImpl(58));
      if ( gx.fn.gridDuplicateKey(60) )
      {
         gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Centro Custo", "", "", "", "", "", "", "", ""));
         this.AnyError = gx.num.trunc( 1 ,0) ;
         this.Gx_mode =  this.sMode110  ;
         return gxballoon.show();
      }
      gx.ajax.validSrvEvt("dyncall","valid_Centrocustosaldoid",["gx.O.Gx_mode", "gx.O.O530CentroCustoSaldoDescricao", "gx.O.A537CentroCustoSaldoEmpresaId", "gx.O.A538CentroCustoSaldoId", "gx.O.A530CentroCustoSaldoDescricao"],["O530CentroCustoSaldoDescricao", "A530CentroCustoSaldoDescricao", ["AV44lSaldoContaCentroCustos","Acentrocustosaldodescricao"]]);
      this.Gx_mode =  this.sMode110  ;
      return true;
   }
   this.Valid_Centrocustosaldodescricao=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(58) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CENTROCUSTOSALDODESCRICAO", gx.fn.currentGridRowImpl(58));
         this.AnyError  = 0;
         this.sMode110 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(110,58)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode110  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saldocentrocustototaldebito=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(58) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SALDOCENTROCUSTOTOTALDEBITO", gx.fn.currentGridRowImpl(58));
         this.AnyError  = 0;
         this.sMode110 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(110,58)  ;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode110  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saldocentrocustototalcredito=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(58) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SALDOCENTROCUSTOTOTALCREDITO", gx.fn.currentGridRowImpl(58));
         this.AnyError  = 0;
         this.sMode110 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(110,58)  ;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode110  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saldocentrocustosaldoatual=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(58) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SALDOCENTROCUSTOSALDOATUAL", gx.fn.currentGridRowImpl(58));
         this.AnyError  = 0;
         this.sMode110 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(110,58)  ;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode110  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saldocentrocustodebitoapuracao=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(58) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SALDOCENTROCUSTODEBITOAPURACAO", gx.fn.currentGridRowImpl(58));
         this.AnyError  = 0;
         this.sMode110 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(110,58)  ;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode110  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saldocentrocustocreditoapuraca=function()
   {
      this.sMode110 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(110,58)  ;
      gx.ajax.validSrvEvt("dyncall","valid_Saldocentrocustocreditoapuraca",["gx.O.Gx_mode", "gx.num.urlDecimal(gx.O.O535SaldoCentroCustoDebitoApuracao,\'.\',\',\')", "gx.num.urlDecimal(gx.O.O534SaldoCentroCustoCreditoApuraca,\'.\',\',\')", "gx.num.urlDecimal(gx.O.O533SaldoCentroCustoSaldoAtual,\'.\',\',\')", "gx.num.urlDecimal(gx.O.O532SaldoCentroCustoTotalDebito,\'.\',\',\')", "gx.num.urlDecimal(gx.O.O531SaldoCentroCustoTotalCredito,\'.\',\',\')", "gx.O.AV7UsrCod", "gx.num.urlDecimal(gx.O.A531SaldoCentroCustoTotalCredito,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A532SaldoCentroCustoTotalDebito,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A533SaldoCentroCustoSaldoAtual,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A534SaldoCentroCustoCreditoApuraca,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A535SaldoCentroCustoDebitoApuracao,\'.\',\',\')", "gx.O.A784CentroCustoNivelUsuarioId", 'gx.date.urlDateTime(gx.O.A779CentroCustoNivelDataHoraAlt,"DMY4")'],["A784CentroCustoNivelUsuarioId", "A779CentroCustoNivelDataHoraAlt", ["AV44lSaldoContaCentroCustos","Asaldocentrocustocreditoapuracao"]]);
      this.Gx_mode =  this.sMode110  ;
      return true;
   }
   this.standaloneModal18110=function()
   {
      try {
         if ( (this.Gx_mode == 'INS') && (""==this.A537CentroCustoSaldoEmpresaId) && this.Gx_BScreen == 0 )
         {
            this.A537CentroCustoSaldoEmpresaId =  this.AV19EmpresaPadraoCenCusto  ;
         }
      }
      catch(e){}
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("CENTROCUSTOSALDOID","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("CENTROCUSTOSALDOID","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal18110=function()
   {
      try {
         gx.fn.setCtrlProperty("CENTROCUSTONIVELUSUARIOID","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("CENTROCUSTONIVELDATAHORAALT","Enabled", 0 );
      }
      catch(e){}
      return true;
   }
   this.Valid_Pessoaid=function()
   {
      this.sMode111 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(111,74)  ;
      this.standaloneModal18111( );
      this.standaloneNotModal18111( );
      if(  gx.fn.currentGridRowImpl(74) ===0) {
         this.Gx_mode =  this.sMode111  ;
         return true;
      }
      var gxballoon = gx.util.balloon.getNew("PESSOAID", gx.fn.currentGridRowImpl(74));
      if ( gx.fn.gridDuplicateKey(76) )
      {
         gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Correntista", "", "", "", "", "", "", "", ""));
         this.AnyError = gx.num.trunc( 1 ,0) ;
         this.Gx_mode =  this.sMode111  ;
         return gxballoon.show();
      }
      gx.ajax.validSrvEvt("dyncall","valid_Pessoaid",["gx.O.Gx_mode", "gx.O.O71PessoaFantasia", "gx.O.A227EmpresaPessoasEmpresaId", "gx.O.A69PessoaId", "gx.O.A71PessoaFantasia"],["O71PessoaFantasia", "A71PessoaFantasia", ["AV47lSaldoContaCorrentistas","Apessoafantasia"]]);
      this.Gx_mode =  this.sMode111  ;
      return true;
   }
   this.Valid_Pessoafantasia=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(74) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PESSOAFANTASIA", gx.fn.currentGridRowImpl(74));
         this.AnyError  = 0;
         this.sMode111 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(111,74)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode111  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saldocorrentistatotaldebito=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(74) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SALDOCORRENTISTATOTALDEBITO", gx.fn.currentGridRowImpl(74));
         this.AnyError  = 0;
         this.sMode111 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(111,74)  ;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode111  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saldocorrentistatotalcredito=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(74) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SALDOCORRENTISTATOTALCREDITO", gx.fn.currentGridRowImpl(74));
         this.AnyError  = 0;
         this.sMode111 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(111,74)  ;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode111  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saldocorrentistasaldoatual=function()
   {
      this.sMode111 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(111,74)  ;
      gx.ajax.validSrvEvt("dyncall","valid_Saldocorrentistasaldoatual",["gx.O.Gx_mode", "gx.num.urlDecimal(gx.O.O111SaldoCorrentistaSaldoAtual,\'.\',\',\')", "gx.num.urlDecimal(gx.O.O110SaldoCorrentistaTotalDebito,\'.\',\',\')", "gx.num.urlDecimal(gx.O.O109SaldoCorrentistaTotalCredito,\'.\',\',\')", "gx.O.AV7UsrCod", "gx.num.urlDecimal(gx.O.A109SaldoCorrentistaTotalCredito,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A110SaldoCorrentistaTotalDebito,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A111SaldoCorrentistaSaldoAtual,\'.\',\',\')", "gx.O.A785CorrentistaNivelUsuarioId", 'gx.date.urlDateTime(gx.O.A786CorrentistaNivelDataHoraAlt,"DMY4")'],["A785CorrentistaNivelUsuarioId", "A786CorrentistaNivelDataHoraAlt", ["AV47lSaldoContaCorrentistas","Asaldocorrentistasaldoatual"]]);
      this.Gx_mode =  this.sMode111  ;
      return true;
   }
   this.standaloneModal18111=function()
   {
      try {
         if ( (this.Gx_mode == 'INS') && (""==this.A227EmpresaPessoasEmpresaId) && this.Gx_BScreen == 0 )
         {
            this.A227EmpresaPessoasEmpresaId =  this.AV18EmpresaPadraoCorrentista  ;
         }
      }
      catch(e){}
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("PESSOAID","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("PESSOAID","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal18111=function()
   {
      try {
         gx.fn.setCtrlProperty("CORRENTISTANIVELUSUARIOID","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("CORRENTISTANIVELDATAHORAALT","Enabled", 0 );
      }
      catch(e){}
      return true;
   }
   this.e12182_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13182_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1418109_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1518109_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,7,10,13,15,16,17,20,22,26,28,31,33,36,38,41,43,46,48,52,53,54,57,59,60,61,62,63,64,65,66,67,68,69,70,73,75,76,77,78,79,80,81,82,83,86,89,91,93,100,103,104,115];
   this.GXLastCtrlId =115;
   this.Grid1Container = new gx.grid.grid(this, 110,"CentroCusto",58,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"tsaldoconta",[538],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("nRcdDeleted_110",59,"vNRCDDELETED_110","","","nRcdDeleted_110","int",0,"px",4,1,"right",null,[],"nRcdDeleted_110","nRcdDeleted_110",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(538,60,"CENTROCUSTOSALDOID","Centro de Custo","","CentroCustoSaldoId","svchar",0,"px",30,30,"left",null,[],538,"CentroCustoSaldoId",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addBitmap("prompt_538","PROMPT_538",117,0,"",0,"",null,"","","gx-prompt Image","");
   Grid1Container.addSingleLineEdit(530,61,"CENTROCUSTOSALDODESCRICAO","Descrição do Centro de Custo","","CentroCustoSaldoDescricao","svchar",0,"px",35,35,"left",null,[],530,"CentroCustoSaldoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(532,62,"SALDOCENTROCUSTOTOTALDEBITO","Total Débito","","SaldoCentroCustoTotalDebito","decimal",0,"px",18,18,"right",null,[],532,"SaldoCentroCustoTotalDebito",true,2,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(531,63,"SALDOCENTROCUSTOTOTALCREDITO","Total Crédito","","SaldoCentroCustoTotalCredito","decimal",0,"px",18,18,"right",null,[],531,"SaldoCentroCustoTotalCredito",true,2,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(533,64,"SALDOCENTROCUSTOSALDOATUAL","Saldo Atual","","SaldoCentroCustoSaldoAtual","decimal",0,"px",18,18,"right",null,[],533,"SaldoCentroCustoSaldoAtual",true,2,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(535,65,"SALDOCENTROCUSTODEBITOAPURACAO","Débito Apuração","","SaldoCentroCustoDebitoApuracao","decimal",0,"px",18,18,"right",null,[],535,"SaldoCentroCustoDebitoApuracao",true,2,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(534,66,"SALDOCENTROCUSTOCREDITOAPURACA","Crédito Apuração","","SaldoCentroCustoCreditoApuraca","decimal",0,"px",18,18,"right",null,[],534,"SaldoCentroCustoCreditoApuraca",true,2,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(784,67,"CENTROCUSTONIVELUSUARIOID","Usuário","","CentroCustoNivelUsuarioId","char",0,"px",12,12,"left",null,[],784,"CentroCustoNivelUsuarioId",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(779,68,"CENTROCUSTONIVELDATAHORAALT","Última alteração","","CentroCustoNivelDataHoraAlt","dtime",0,"px",16,16,"right",null,[],779,"CentroCustoNivelDataHoraAlt",true,5,false,false,"SemQuebraGrid",1,"");
   this.setGrid(Grid1Container);
   this.Grid2Container = new gx.grid.grid(this, 111,"Correntista",74,"Grid2","Grid2","Grid2Container",this.CmpContext,this.IsMasterPage,"tsaldoconta",[69],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid2Container = this.Grid2Container;
   Grid2Container.addSingleLineEdit("nRcdDeleted_111",75,"vNRCDDELETED_111","","","nRcdDeleted_111","int",0,"px",4,1,"right",null,[],"nRcdDeleted_111","nRcdDeleted_111",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(69,76,"PESSOAID","Código","","PessoaId","int",0,"px",7,7,"right",null,[],69,"PessoaId",true,0,false,false,"SemQuebraGrid",1,"");
   Grid2Container.addBitmap("prompt_69","PROMPT_69",118,0,"",0,"",null,"","","gx-prompt Image","");
   Grid2Container.addSingleLineEdit(71,77,"PESSOAFANTASIA","Nome","","PessoaFantasia","svchar",0,"px",60,60,"left",null,[],71,"PessoaFantasia",true,0,false,false,"SemQuebraGrid",1,"");
   Grid2Container.addSingleLineEdit(110,78,"SALDOCORRENTISTATOTALDEBITO","Total Débito","","SaldoCorrentistaTotalDebito","decimal",0,"px",18,18,"right",null,[],110,"SaldoCorrentistaTotalDebito",true,2,false,false,"SemQuebraGrid",1,"");
   Grid2Container.addSingleLineEdit(109,79,"SALDOCORRENTISTATOTALCREDITO","Total Crédito","","SaldoCorrentistaTotalCredito","decimal",0,"px",18,18,"right",null,[],109,"SaldoCorrentistaTotalCredito",true,2,false,false,"SemQuebraGrid",1,"");
   Grid2Container.addSingleLineEdit(111,80,"SALDOCORRENTISTASALDOATUAL","Saldo Atual","","SaldoCorrentistaSaldoAtual","decimal",0,"px",18,18,"right",null,[],111,"SaldoCorrentistaSaldoAtual",true,2,false,false,"SemQuebraGrid",1,"");
   Grid2Container.addSingleLineEdit(785,81,"CORRENTISTANIVELUSUARIOID","Usuário","","CorrentistaNivelUsuarioId","char",0,"px",12,12,"left",null,[],785,"CorrentistaNivelUsuarioId",true,0,false,false,"SemQuebraGrid",1,"");
   Grid2Container.addSingleLineEdit(786,82,"CORRENTISTANIVELDATAHORAALT","Última alteração","","CorrentistaNivelDataHoraAlt","dtime",0,"px",16,16,"right",null,[],786,"CorrentistaNivelDataHoraAlt",true,5,false,false,"SemQuebraGrid",1,"");
   this.setGrid(Grid2Container);
   this.TABCSSContainer = gx.uc.getNew(this, 6, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV50Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV50Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV50Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "tsaldoconta_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   this.HDMASKVLDEBContainer = gx.uc.getNew(this, 105, 15, "HDMask", "HDMASKVLDEBContainer", "Hdmaskvldeb");
   var HDMASKVLDEBContainer = this.HDMASKVLDEBContainer;
   HDMASKVLDEBContainer.setProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKVLDEBContainer.setProp("Picture", "Picture", "", "str");
   HDMASKVLDEBContainer.setProp("Default", "Default", "", "str");
   HDMASKVLDEBContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKVLDEBContainer.setProp("Reverse", "Reverse", true, "bool");
   HDMASKVLDEBContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKVLDEBContainer.setProp("UnmaskedChars", "Unmaskedchars", "", "str");
   HDMASKVLDEBContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKVLDEBContainer.setProp("FixedChars", "Fixedchars", "", "str");
   HDMASKVLDEBContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKVLDEBContainer.setProp("ControlType", "Controltype", "TransactionGrid", "str");
   HDMASKVLDEBContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKVLDEBContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKVLDEBContainer.setProp("Class", "Class", "", "char");
   HDMASKVLDEBContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKVLDEBContainer);
   this.HDMASKVLCREContainer = gx.uc.getNew(this, 106, 15, "HDMask", "HDMASKVLCREContainer", "Hdmaskvlcre");
   var HDMASKVLCREContainer = this.HDMASKVLCREContainer;
   HDMASKVLCREContainer.setProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKVLCREContainer.setProp("Picture", "Picture", "", "str");
   HDMASKVLCREContainer.setProp("Default", "Default", "", "str");
   HDMASKVLCREContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKVLCREContainer.setProp("Reverse", "Reverse", true, "bool");
   HDMASKVLCREContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKVLCREContainer.setProp("UnmaskedChars", "Unmaskedchars", "", "str");
   HDMASKVLCREContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKVLCREContainer.setProp("FixedChars", "Fixedchars", "", "str");
   HDMASKVLCREContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKVLCREContainer.setProp("ControlType", "Controltype", "TransactionGrid", "str");
   HDMASKVLCREContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKVLCREContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKVLCREContainer.setProp("Class", "Class", "", "char");
   HDMASKVLCREContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKVLCREContainer);
   this.HDMASKVLDEBAPUContainer = gx.uc.getNew(this, 107, 15, "HDMask", "HDMASKVLDEBAPUContainer", "Hdmaskvldebapu");
   var HDMASKVLDEBAPUContainer = this.HDMASKVLDEBAPUContainer;
   HDMASKVLDEBAPUContainer.setProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKVLDEBAPUContainer.setProp("Picture", "Picture", "", "str");
   HDMASKVLDEBAPUContainer.setProp("Default", "Default", "", "str");
   HDMASKVLDEBAPUContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKVLDEBAPUContainer.setProp("Reverse", "Reverse", true, "bool");
   HDMASKVLDEBAPUContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKVLDEBAPUContainer.setProp("UnmaskedChars", "Unmaskedchars", "", "str");
   HDMASKVLDEBAPUContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKVLDEBAPUContainer.setProp("FixedChars", "Fixedchars", "", "str");
   HDMASKVLDEBAPUContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKVLDEBAPUContainer.setProp("ControlType", "Controltype", "TransactionGrid", "str");
   HDMASKVLDEBAPUContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKVLDEBAPUContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKVLDEBAPUContainer.setProp("Class", "Class", "", "char");
   HDMASKVLDEBAPUContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKVLDEBAPUContainer);
   this.HDMASKVLCREAPUContainer = gx.uc.getNew(this, 108, 15, "HDMask", "HDMASKVLCREAPUContainer", "Hdmaskvlcreapu");
   var HDMASKVLCREAPUContainer = this.HDMASKVLCREAPUContainer;
   HDMASKVLCREAPUContainer.setProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKVLCREAPUContainer.setProp("Picture", "Picture", "", "str");
   HDMASKVLCREAPUContainer.setProp("Default", "Default", "", "str");
   HDMASKVLCREAPUContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKVLCREAPUContainer.setProp("Reverse", "Reverse", true, "bool");
   HDMASKVLCREAPUContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKVLCREAPUContainer.setProp("UnmaskedChars", "Unmaskedchars", "", "str");
   HDMASKVLCREAPUContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKVLCREAPUContainer.setProp("FixedChars", "Fixedchars", "", "str");
   HDMASKVLCREAPUContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKVLCREAPUContainer.setProp("ControlType", "Controltype", "TransactionGrid", "str");
   HDMASKVLCREAPUContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKVLCREAPUContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKVLCREAPUContainer.setProp("Class", "Class", "", "char");
   HDMASKVLCREAPUContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKVLCREAPUContainer);
   this.HDMASKCORRDEBContainer = gx.uc.getNew(this, 109, 15, "HDMask", "HDMASKCORRDEBContainer", "Hdmaskcorrdeb");
   var HDMASKCORRDEBContainer = this.HDMASKCORRDEBContainer;
   HDMASKCORRDEBContainer.setProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKCORRDEBContainer.setProp("Picture", "Picture", "", "str");
   HDMASKCORRDEBContainer.setProp("Default", "Default", "", "str");
   HDMASKCORRDEBContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKCORRDEBContainer.setProp("Reverse", "Reverse", true, "bool");
   HDMASKCORRDEBContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKCORRDEBContainer.setProp("UnmaskedChars", "Unmaskedchars", "", "str");
   HDMASKCORRDEBContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKCORRDEBContainer.setProp("FixedChars", "Fixedchars", "", "str");
   HDMASKCORRDEBContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKCORRDEBContainer.setProp("ControlType", "Controltype", "TransactionGrid", "str");
   HDMASKCORRDEBContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKCORRDEBContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKCORRDEBContainer.setProp("Class", "Class", "", "char");
   HDMASKCORRDEBContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKCORRDEBContainer);
   this.HDMASKCORRCREContainer = gx.uc.getNew(this, 110, 15, "HDMask", "HDMASKCORRCREContainer", "Hdmaskcorrcre");
   var HDMASKCORRCREContainer = this.HDMASKCORRCREContainer;
   HDMASKCORRCREContainer.setProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKCORRCREContainer.setProp("Picture", "Picture", "", "str");
   HDMASKCORRCREContainer.setProp("Default", "Default", "", "str");
   HDMASKCORRCREContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKCORRCREContainer.setProp("Reverse", "Reverse", true, "bool");
   HDMASKCORRCREContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKCORRCREContainer.setProp("UnmaskedChars", "Unmaskedchars", "", "str");
   HDMASKCORRCREContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKCORRCREContainer.setProp("FixedChars", "Fixedchars", "", "str");
   HDMASKCORRCREContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKCORRCREContainer.setProp("ControlType", "Controltype", "TransactionGrid", "str");
   HDMASKCORRCREContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKCORRCREContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKCORRCREContainer.setProp("Class", "Class", "", "char");
   HDMASKCORRCREContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKCORRCREContainer);
   this.HDMASKCORRATUALContainer = gx.uc.getNew(this, 111, 15, "HDMask", "HDMASKCORRATUALContainer", "Hdmaskcorratual");
   var HDMASKCORRATUALContainer = this.HDMASKCORRATUALContainer;
   HDMASKCORRATUALContainer.setProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKCORRATUALContainer.setProp("Picture", "Picture", "", "str");
   HDMASKCORRATUALContainer.setProp("Default", "Default", "", "str");
   HDMASKCORRATUALContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKCORRATUALContainer.setProp("Reverse", "Reverse", true, "bool");
   HDMASKCORRATUALContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKCORRATUALContainer.setProp("UnmaskedChars", "Unmaskedchars", "", "str");
   HDMASKCORRATUALContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKCORRATUALContainer.setProp("FixedChars", "Fixedchars", "", "str");
   HDMASKCORRATUALContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKCORRATUALContainer.setProp("ControlType", "Controltype", "TransactionGrid", "str");
   HDMASKCORRATUALContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKCORRATUALContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKCORRATUALContainer.setProp("Class", "Class", "", "char");
   HDMASKCORRATUALContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKCORRATUALContainer);
   this.HDMASKCENTROCUSTOContainer = gx.uc.getNew(this, 112, 15, "HDMask", "HDMASKCENTROCUSTOContainer", "Hdmaskcentrocusto");
   var HDMASKCENTROCUSTOContainer = this.HDMASKCENTROCUSTOContainer;
   HDMASKCENTROCUSTOContainer.setDynProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKCENTROCUSTOContainer.setDynProp("Picture", "Picture", "", "str");
   HDMASKCENTROCUSTOContainer.setProp("Default", "Default", "", "str");
   HDMASKCENTROCUSTOContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKCENTROCUSTOContainer.setProp("Reverse", "Reverse", false, "bool");
   HDMASKCENTROCUSTOContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKCENTROCUSTOContainer.setProp("UnmaskedChars", "Unmaskedchars", "[(),.:/ -]", "str");
   HDMASKCENTROCUSTOContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKCENTROCUSTOContainer.setProp("FixedChars", "Fixedchars", "[(),.:/ -]", "str");
   HDMASKCENTROCUSTOContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKCENTROCUSTOContainer.setProp("ControlType", "Controltype", "TransactionGrid", "str");
   HDMASKCENTROCUSTOContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKCENTROCUSTOContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKCENTROCUSTOContainer.setProp("Class", "Class", "", "char");
   HDMASKCENTROCUSTOContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKCENTROCUSTOContainer);
   this.HDMASKVLATUALContainer = gx.uc.getNew(this, 113, 15, "HDMask", "HDMASKVLATUALContainer", "Hdmaskvlatual");
   var HDMASKVLATUALContainer = this.HDMASKVLATUALContainer;
   HDMASKVLATUALContainer.setProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKVLATUALContainer.setProp("Picture", "Picture", "", "str");
   HDMASKVLATUALContainer.setProp("Default", "Default", "", "str");
   HDMASKVLATUALContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKVLATUALContainer.setProp("Reverse", "Reverse", true, "bool");
   HDMASKVLATUALContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKVLATUALContainer.setProp("UnmaskedChars", "Unmaskedchars", "", "str");
   HDMASKVLATUALContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKVLATUALContainer.setProp("FixedChars", "Fixedchars", "", "str");
   HDMASKVLATUALContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKVLATUALContainer.setProp("ControlType", "Controltype", "TransactionGrid", "str");
   HDMASKVLATUALContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKVLATUALContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKVLATUALContainer.setProp("Class", "Class", "", "char");
   HDMASKVLATUALContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKVLATUALContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TAB1",grid:0};
   GXValidFnc[10]={fld:"TABLE2",grid:0};
   GXValidFnc[13]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contacontabilid,isvalid:null,rgrid:[this.Grid1Container,this.Grid2Container],fld:"CONTACONTABILID",gxz:"Z62ContaContabilId",gxold:"O62ContaContabilId",gxvar:"A62ContaContabilId",ucs:[],op:[17],ip:[17,15],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A62ContaContabilId=Value},v2z:function(Value){gx.O.Z62ContaContabilId=Value},v2c:function(){gx.fn.setControlValue("CONTACONTABILID",gx.O.A62ContaContabilId,0)},c2v:function(){gx.O.A62ContaContabilId=this.val()},val:function(){return gx.fn.getControlValue("CONTACONTABILID")},nac:function(){return (!(""==this.AV16ContaContabilId))&&(!(new gx.date.gxdate("").compare(this.AV17SaldoContaDataReferencia)==0))}};
   GXValidFnc[16]={fld:"PROMPTCCONTABIL",grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contacontabilnome,isvalid:null,rgrid:[],fld:"CONTACONTABILNOME",gxz:"Z63ContaContabilNome",gxold:"O63ContaContabilNome",gxvar:"A63ContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A63ContaContabilNome=Value},v2z:function(Value){gx.O.Z63ContaContabilNome=Value},v2c:function(){gx.fn.setControlValue("CONTACONTABILNOME",gx.O.A63ContaContabilNome,0)},c2v:function(){gx.O.A63ContaContabilNome=this.val()},val:function(){return gx.fn.getControlValue("CONTACONTABILNOME")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saldocontadatareferencia,isvalid:null,rgrid:[this.Grid1Container,this.Grid2Container],fld:"SALDOCONTADATAREFERENCIA",gxz:"Z536SaldoContaDataReferencia",gxold:"O536SaldoContaDataReferencia",gxvar:"A536SaldoContaDataReferencia",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[22],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A536SaldoContaDataReferencia=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z536SaldoContaDataReferencia=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SALDOCONTADATAREFERENCIA",gx.O.A536SaldoContaDataReferencia,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A536SaldoContaDataReferencia=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("SALDOCONTADATAREFERENCIA")},nac:function(){return (!(""==this.AV16ContaContabilId))&&(!(new gx.date.gxdate("").compare(this.AV17SaldoContaDataReferencia)==0))}};
   this.declareDomainHdlr( 22 , function() {
   });
   GXValidFnc[26]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saldocontatotaldebito,isvalid:null,rgrid:[],fld:"SALDOCONTATOTALDEBITO",gxz:"Z525SaldoContaTotalDebito",gxold:"O525SaldoContaTotalDebito",gxvar:"A525SaldoContaTotalDebito",ucs:[],op:[],ip:[28],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A525SaldoContaTotalDebito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z525SaldoContaTotalDebito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SALDOCONTATOTALDEBITO",gx.O.A525SaldoContaTotalDebito,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A525SaldoContaTotalDebito=this.val()},val:function(){return gx.fn.getDecimalValue("SALDOCONTATOTALDEBITO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[31]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saldocontatotalcredito,isvalid:null,rgrid:[],fld:"SALDOCONTATOTALCREDITO",gxz:"Z526SaldoContaTotalCredito",gxold:"O526SaldoContaTotalCredito",gxvar:"A526SaldoContaTotalCredito",ucs:[],op:[],ip:[33],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A526SaldoContaTotalCredito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z526SaldoContaTotalCredito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SALDOCONTATOTALCREDITO",gx.O.A526SaldoContaTotalCredito,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A526SaldoContaTotalCredito=this.val()},val:function(){return gx.fn.getDecimalValue("SALDOCONTATOTALCREDITO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[36]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saldocontasaldoatual,isvalid:null,rgrid:[],fld:"SALDOCONTASALDOATUAL",gxz:"Z527SaldoContaSaldoAtual",gxold:"O527SaldoContaSaldoAtual",gxvar:"A527SaldoContaSaldoAtual",ucs:[],op:[],ip:[38],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A527SaldoContaSaldoAtual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z527SaldoContaSaldoAtual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SALDOCONTASALDOATUAL",gx.O.A527SaldoContaSaldoAtual,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A527SaldoContaSaldoAtual=this.val()},val:function(){return gx.fn.getDecimalValue("SALDOCONTASALDOATUAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 38 , function() {
   });
   GXValidFnc[41]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saldocontacreditoapuracao,isvalid:null,rgrid:[],fld:"SALDOCONTACREDITOAPURACAO",gxz:"Z528SaldoContaCreditoApuracao",gxold:"O528SaldoContaCreditoApuracao",gxvar:"A528SaldoContaCreditoApuracao",ucs:[],op:[],ip:[43],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A528SaldoContaCreditoApuracao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z528SaldoContaCreditoApuracao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SALDOCONTACREDITOAPURACAO",gx.O.A528SaldoContaCreditoApuracao,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A528SaldoContaCreditoApuracao=this.val()},val:function(){return gx.fn.getDecimalValue("SALDOCONTACREDITOAPURACAO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[46]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saldocontadebitoapuracao,isvalid:null,rgrid:[],fld:"SALDOCONTADEBITOAPURACAO",gxz:"Z529SaldoContaDebitoApuracao",gxold:"O529SaldoContaDebitoApuracao",gxvar:"A529SaldoContaDebitoApuracao",ucs:[],op:[93,91],ip:[93,91,48,43,38,33,28],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A529SaldoContaDebitoApuracao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z529SaldoContaDebitoApuracao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SALDOCONTADEBITOAPURACAO",gx.O.A529SaldoContaDebitoApuracao,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A529SaldoContaDebitoApuracao=this.val()},val:function(){return gx.fn.getDecimalValue("SALDOCONTADEBITOAPURACAO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 48 , function() {
   });
   GXValidFnc[52]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORINI",gxz:"ZV25TradutorIni",gxold:"OV25TradutorIni",gxvar:"AV25TradutorIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25TradutorIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25TradutorIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTORINI",gx.O.AV25TradutorIni,0)},c2v:function(){gx.O.AV25TradutorIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTORINI",'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORFIN",gxz:"ZV26TradutorFin",gxold:"OV26TradutorFin",gxvar:"AV26TradutorFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26TradutorFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26TradutorFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTORFIN",gx.O.AV26TradutorFin,0)},c2v:function(){gx.O.AV26TradutorFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTORFIN",'.')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TAB2",grid:0};
   GXValidFnc[57]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[59]={lvl:110,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:58,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_110",gxz:"ZnRcdDeleted_110",gxold:"OnRcdDeleted_110",gxvar:"nRcdDeleted_110",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_110=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_110=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_110",row || gx.fn.currentGridRowImpl(58),gx.O.nRcdDeleted_110,0)},c2v:function(){gx.O.nRcdDeleted_110=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_110",row || gx.fn.currentGridRowImpl(58),'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:110,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:1,grid:58,gxgrid:this.Grid1Container,fnc:this.Valid_Centrocustosaldoid,isvalid:null,rgrid:[],fld:"CENTROCUSTOSALDOID",gxz:"Z538CentroCustoSaldoId",gxold:"O538CentroCustoSaldoId",gxvar:"A538CentroCustoSaldoId",ucs:[],op:[61],ip:[61,60],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A538CentroCustoSaldoId=Value},v2z:function(Value){gx.O.Z538CentroCustoSaldoId=Value},v2c:function(row){gx.fn.setGridControlValue("CENTROCUSTOSALDOID",row || gx.fn.currentGridRowImpl(58),gx.O.A538CentroCustoSaldoId,0)},c2v:function(){gx.O.A538CentroCustoSaldoId=this.val()},val:function(row){return gx.fn.getGridControlValue("CENTROCUSTOSALDOID",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:110,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:1,grid:58,gxgrid:this.Grid1Container,fnc:this.Valid_Centrocustosaldodescricao,isvalid:null,rgrid:[],fld:"CENTROCUSTOSALDODESCRICAO",gxz:"Z530CentroCustoSaldoDescricao",gxold:"O530CentroCustoSaldoDescricao",gxvar:"A530CentroCustoSaldoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A530CentroCustoSaldoDescricao=Value},v2z:function(Value){gx.O.Z530CentroCustoSaldoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CENTROCUSTOSALDODESCRICAO",row || gx.fn.currentGridRowImpl(58),gx.O.A530CentroCustoSaldoDescricao,0)},c2v:function(){gx.O.A530CentroCustoSaldoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CENTROCUSTOSALDODESCRICAO",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:110,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:58,gxgrid:this.Grid1Container,fnc:this.Valid_Saldocentrocustototaldebito,isvalid:null,rgrid:[],fld:"SALDOCENTROCUSTOTOTALDEBITO",gxz:"Z532SaldoCentroCustoTotalDebito",gxold:"O532SaldoCentroCustoTotalDebito",gxvar:"A532SaldoCentroCustoTotalDebito",ucs:[],op:[],ip:[62],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A532SaldoCentroCustoTotalDebito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z532SaldoCentroCustoTotalDebito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("SALDOCENTROCUSTOTOTALDEBITO",row || gx.fn.currentGridRowImpl(58),gx.O.A532SaldoCentroCustoTotalDebito,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A532SaldoCentroCustoTotalDebito=this.val()},val:function(row){return gx.fn.getGridDecimalValue("SALDOCENTROCUSTOTOTALDEBITO",row || gx.fn.currentGridRowImpl(58),'.',',')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:110,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:58,gxgrid:this.Grid1Container,fnc:this.Valid_Saldocentrocustototalcredito,isvalid:null,rgrid:[],fld:"SALDOCENTROCUSTOTOTALCREDITO",gxz:"Z531SaldoCentroCustoTotalCredito",gxold:"O531SaldoCentroCustoTotalCredito",gxvar:"A531SaldoCentroCustoTotalCredito",ucs:[],op:[],ip:[63],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A531SaldoCentroCustoTotalCredito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z531SaldoCentroCustoTotalCredito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("SALDOCENTROCUSTOTOTALCREDITO",row || gx.fn.currentGridRowImpl(58),gx.O.A531SaldoCentroCustoTotalCredito,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A531SaldoCentroCustoTotalCredito=this.val()},val:function(row){return gx.fn.getGridDecimalValue("SALDOCENTROCUSTOTOTALCREDITO",row || gx.fn.currentGridRowImpl(58),'.',',')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:110,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:58,gxgrid:this.Grid1Container,fnc:this.Valid_Saldocentrocustosaldoatual,isvalid:null,rgrid:[],fld:"SALDOCENTROCUSTOSALDOATUAL",gxz:"Z533SaldoCentroCustoSaldoAtual",gxold:"O533SaldoCentroCustoSaldoAtual",gxvar:"A533SaldoCentroCustoSaldoAtual",ucs:[],op:[],ip:[64],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A533SaldoCentroCustoSaldoAtual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z533SaldoCentroCustoSaldoAtual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("SALDOCENTROCUSTOSALDOATUAL",row || gx.fn.currentGridRowImpl(58),gx.O.A533SaldoCentroCustoSaldoAtual,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A533SaldoCentroCustoSaldoAtual=this.val()},val:function(row){return gx.fn.getGridDecimalValue("SALDOCENTROCUSTOSALDOATUAL",row || gx.fn.currentGridRowImpl(58),'.',',')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:110,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:58,gxgrid:this.Grid1Container,fnc:this.Valid_Saldocentrocustodebitoapuracao,isvalid:null,rgrid:[],fld:"SALDOCENTROCUSTODEBITOAPURACAO",gxz:"Z535SaldoCentroCustoDebitoApuracao",gxold:"O535SaldoCentroCustoDebitoApuracao",gxvar:"A535SaldoCentroCustoDebitoApuracao",ucs:[],op:[],ip:[65],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A535SaldoCentroCustoDebitoApuracao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z535SaldoCentroCustoDebitoApuracao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("SALDOCENTROCUSTODEBITOAPURACAO",row || gx.fn.currentGridRowImpl(58),gx.O.A535SaldoCentroCustoDebitoApuracao,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A535SaldoCentroCustoDebitoApuracao=this.val()},val:function(row){return gx.fn.getGridDecimalValue("SALDOCENTROCUSTODEBITOAPURACAO",row || gx.fn.currentGridRowImpl(58),'.',',')},nac:gx.falseFn};
   GXValidFnc[66]={lvl:110,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:58,gxgrid:this.Grid1Container,fnc:this.Valid_Saldocentrocustocreditoapuraca,isvalid:null,rgrid:[],fld:"SALDOCENTROCUSTOCREDITOAPURACA",gxz:"Z534SaldoCentroCustoCreditoApuraca",gxold:"O534SaldoCentroCustoCreditoApuraca",gxvar:"A534SaldoCentroCustoCreditoApuraca",ucs:[],op:[68,67],ip:[68,67,65,66,64,62,63],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A534SaldoCentroCustoCreditoApuraca=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z534SaldoCentroCustoCreditoApuraca=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("SALDOCENTROCUSTOCREDITOAPURACA",row || gx.fn.currentGridRowImpl(58),gx.O.A534SaldoCentroCustoCreditoApuraca,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A534SaldoCentroCustoCreditoApuraca=this.val()},val:function(row){return gx.fn.getGridDecimalValue("SALDOCENTROCUSTOCREDITOAPURACA",row || gx.fn.currentGridRowImpl(58),'.',',')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:110,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:1,grid:58,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CENTROCUSTONIVELUSUARIOID",gxz:"Z784CentroCustoNivelUsuarioId",gxold:"O784CentroCustoNivelUsuarioId",gxvar:"A784CentroCustoNivelUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A784CentroCustoNivelUsuarioId=Value},v2z:function(Value){gx.O.Z784CentroCustoNivelUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("CENTROCUSTONIVELUSUARIOID",row || gx.fn.currentGridRowImpl(58),gx.O.A784CentroCustoNivelUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A784CentroCustoNivelUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("CENTROCUSTONIVELUSUARIOID",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:110,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:1,grid:58,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CENTROCUSTONIVELDATAHORAALT",gxz:"Z779CentroCustoNivelDataHoraAlt",gxold:"O779CentroCustoNivelDataHoraAlt",gxvar:"A779CentroCustoNivelDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A779CentroCustoNivelDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z779CentroCustoNivelDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CENTROCUSTONIVELDATAHORAALT",row || gx.fn.currentGridRowImpl(58),gx.O.A779CentroCustoNivelDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A779CentroCustoNivelDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CENTROCUSTONIVELDATAHORAALT",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[69]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[70]={fld:"TAB3",grid:0};
   GXValidFnc[73]={fld:"DIV3", format:2,grid:0};
   GXValidFnc[75]={lvl:111,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:74,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_111",gxz:"ZnRcdDeleted_111",gxold:"OnRcdDeleted_111",gxvar:"nRcdDeleted_111",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_111=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_111=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_111",row || gx.fn.currentGridRowImpl(74),gx.O.nRcdDeleted_111,0)},c2v:function(){gx.O.nRcdDeleted_111=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_111",row || gx.fn.currentGridRowImpl(74),'.')},nac:gx.falseFn};
   GXValidFnc[76]={lvl:111,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:1,grid:74,gxgrid:this.Grid2Container,fnc:this.Valid_Pessoaid,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[77],ip:[77,76],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PESSOAID",row || gx.fn.currentGridRowImpl(74),gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PESSOAID",row || gx.fn.currentGridRowImpl(74),'.')},nac:gx.falseFn};
   GXValidFnc[77]={lvl:111,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:1,grid:74,gxgrid:this.Grid2Container,fnc:this.Valid_Pessoafantasia,isvalid:null,rgrid:[],fld:"PESSOAFANTASIA",gxz:"Z71PessoaFantasia",gxold:"O71PessoaFantasia",gxvar:"A71PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A71PessoaFantasia=Value},v2z:function(Value){gx.O.Z71PessoaFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOAFANTASIA",row || gx.fn.currentGridRowImpl(74),gx.O.A71PessoaFantasia,0)},c2v:function(){gx.O.A71PessoaFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOAFANTASIA",row || gx.fn.currentGridRowImpl(74))},nac:gx.falseFn};
   GXValidFnc[78]={lvl:111,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:74,gxgrid:this.Grid2Container,fnc:this.Valid_Saldocorrentistatotaldebito,isvalid:null,rgrid:[],fld:"SALDOCORRENTISTATOTALDEBITO",gxz:"Z110SaldoCorrentistaTotalDebito",gxold:"O110SaldoCorrentistaTotalDebito",gxvar:"A110SaldoCorrentistaTotalDebito",ucs:[],op:[],ip:[78],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A110SaldoCorrentistaTotalDebito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z110SaldoCorrentistaTotalDebito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("SALDOCORRENTISTATOTALDEBITO",row || gx.fn.currentGridRowImpl(74),gx.O.A110SaldoCorrentistaTotalDebito,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A110SaldoCorrentistaTotalDebito=this.val()},val:function(row){return gx.fn.getGridDecimalValue("SALDOCORRENTISTATOTALDEBITO",row || gx.fn.currentGridRowImpl(74),'.',',')},nac:gx.falseFn};
   GXValidFnc[79]={lvl:111,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:74,gxgrid:this.Grid2Container,fnc:this.Valid_Saldocorrentistatotalcredito,isvalid:null,rgrid:[],fld:"SALDOCORRENTISTATOTALCREDITO",gxz:"Z109SaldoCorrentistaTotalCredito",gxold:"O109SaldoCorrentistaTotalCredito",gxvar:"A109SaldoCorrentistaTotalCredito",ucs:[],op:[],ip:[79],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A109SaldoCorrentistaTotalCredito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z109SaldoCorrentistaTotalCredito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("SALDOCORRENTISTATOTALCREDITO",row || gx.fn.currentGridRowImpl(74),gx.O.A109SaldoCorrentistaTotalCredito,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A109SaldoCorrentistaTotalCredito=this.val()},val:function(row){return gx.fn.getGridDecimalValue("SALDOCORRENTISTATOTALCREDITO",row || gx.fn.currentGridRowImpl(74),'.',',')},nac:gx.falseFn};
   GXValidFnc[80]={lvl:111,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:74,gxgrid:this.Grid2Container,fnc:this.Valid_Saldocorrentistasaldoatual,isvalid:null,rgrid:[],fld:"SALDOCORRENTISTASALDOATUAL",gxz:"Z111SaldoCorrentistaSaldoAtual",gxold:"O111SaldoCorrentistaSaldoAtual",gxvar:"A111SaldoCorrentistaSaldoAtual",ucs:[],op:[82,81],ip:[82,81,80,78,79],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A111SaldoCorrentistaSaldoAtual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z111SaldoCorrentistaSaldoAtual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("SALDOCORRENTISTASALDOATUAL",row || gx.fn.currentGridRowImpl(74),gx.O.A111SaldoCorrentistaSaldoAtual,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A111SaldoCorrentistaSaldoAtual=this.val()},val:function(row){return gx.fn.getGridDecimalValue("SALDOCORRENTISTASALDOATUAL",row || gx.fn.currentGridRowImpl(74),'.',',')},nac:gx.falseFn};
   GXValidFnc[81]={lvl:111,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:1,grid:74,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CORRENTISTANIVELUSUARIOID",gxz:"Z785CorrentistaNivelUsuarioId",gxold:"O785CorrentistaNivelUsuarioId",gxvar:"A785CorrentistaNivelUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A785CorrentistaNivelUsuarioId=Value},v2z:function(Value){gx.O.Z785CorrentistaNivelUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("CORRENTISTANIVELUSUARIOID",row || gx.fn.currentGridRowImpl(74),gx.O.A785CorrentistaNivelUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A785CorrentistaNivelUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("CORRENTISTANIVELUSUARIOID",row || gx.fn.currentGridRowImpl(74))},nac:gx.falseFn};
   GXValidFnc[82]={lvl:111,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:1,grid:74,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CORRENTISTANIVELDATAHORAALT",gxz:"Z786CorrentistaNivelDataHoraAlt",gxold:"O786CorrentistaNivelDataHoraAlt",gxvar:"A786CorrentistaNivelDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A786CorrentistaNivelDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z786CorrentistaNivelDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CORRENTISTANIVELDATAHORAALT",row || gx.fn.currentGridRowImpl(74),gx.O.A786CorrentistaNivelDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A786CorrentistaNivelDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CORRENTISTANIVELDATAHORAALT",row || gx.fn.currentGridRowImpl(74))},nac:gx.falseFn};
   GXValidFnc[83]={fld:"DIV4", format:2,grid:0};
   GXValidFnc[86]={fld:"TABLE3",grid:0};
   GXValidFnc[89]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[91]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SALDOCONTAUSUARIOID",gxz:"Z783SaldoContaUsuarioId",gxold:"O783SaldoContaUsuarioId",gxvar:"A783SaldoContaUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A783SaldoContaUsuarioId=Value},v2z:function(Value){gx.O.Z783SaldoContaUsuarioId=Value},v2c:function(){gx.fn.setControlValue("SALDOCONTAUSUARIOID",gx.O.A783SaldoContaUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A783SaldoContaUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("SALDOCONTAUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 91 , function() {
   });
   GXValidFnc[93]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SALDOCONTADATAHORA",gxz:"Z777SaldoContaDataHora",gxold:"O777SaldoContaDataHora",gxvar:"A777SaldoContaDataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A777SaldoContaDataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z777SaldoContaDataHora=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SALDOCONTADATAHORA",gx.O.A777SaldoContaDataHora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A777SaldoContaDataHora=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SALDOCONTADATAHORA")},nac:gx.falseFn};
   this.declareDomainHdlr( 93 , function() {
   });
   GXValidFnc[100]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Chamaonblurmascara,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV30ChamaOnBlurMascara",gxold:"OV30ChamaOnBlurMascara",gxvar:"AV30ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV30ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV30ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV30ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[103]={fld:"JS", format:2,grid:0};
   GXValidFnc[104]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV36AcessoSistemaSequencia",gxold:"OV36AcessoSistemaSequencia",gxvar:"AV36AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV36AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV36AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[115]={fld:"BTNHELP",grid:0};
   this.A62ContaContabilId = "" ;
   this.Z62ContaContabilId = "" ;
   this.O62ContaContabilId = "" ;
   this.A63ContaContabilNome = "" ;
   this.Z63ContaContabilNome = "" ;
   this.O63ContaContabilNome = "" ;
   this.A536SaldoContaDataReferencia = gx.date.nullDate() ;
   this.Z536SaldoContaDataReferencia = gx.date.nullDate() ;
   this.O536SaldoContaDataReferencia = gx.date.nullDate() ;
   this.A525SaldoContaTotalDebito = 0 ;
   this.Z525SaldoContaTotalDebito = 0 ;
   this.O525SaldoContaTotalDebito = 0 ;
   this.A526SaldoContaTotalCredito = 0 ;
   this.Z526SaldoContaTotalCredito = 0 ;
   this.O526SaldoContaTotalCredito = 0 ;
   this.A527SaldoContaSaldoAtual = 0 ;
   this.Z527SaldoContaSaldoAtual = 0 ;
   this.O527SaldoContaSaldoAtual = 0 ;
   this.A528SaldoContaCreditoApuracao = 0 ;
   this.Z528SaldoContaCreditoApuracao = 0 ;
   this.O528SaldoContaCreditoApuracao = 0 ;
   this.A529SaldoContaDebitoApuracao = 0 ;
   this.Z529SaldoContaDebitoApuracao = 0 ;
   this.O529SaldoContaDebitoApuracao = 0 ;
   this.AV25TradutorIni = 0 ;
   this.ZV25TradutorIni = 0 ;
   this.OV25TradutorIni = 0 ;
   this.AV26TradutorFin = 0 ;
   this.ZV26TradutorFin = 0 ;
   this.OV26TradutorFin = 0 ;
   this.ZnRcdDeleted_110 = 0 ;
   this.OnRcdDeleted_110 = 0 ;
   this.Z538CentroCustoSaldoId = "" ;
   this.O538CentroCustoSaldoId = "" ;
   this.Z530CentroCustoSaldoDescricao = "" ;
   this.O530CentroCustoSaldoDescricao = "" ;
   this.Z532SaldoCentroCustoTotalDebito = 0 ;
   this.O532SaldoCentroCustoTotalDebito = 0 ;
   this.Z531SaldoCentroCustoTotalCredito = 0 ;
   this.O531SaldoCentroCustoTotalCredito = 0 ;
   this.Z533SaldoCentroCustoSaldoAtual = 0 ;
   this.O533SaldoCentroCustoSaldoAtual = 0 ;
   this.Z535SaldoCentroCustoDebitoApuracao = 0 ;
   this.O535SaldoCentroCustoDebitoApuracao = 0 ;
   this.Z534SaldoCentroCustoCreditoApuraca = 0 ;
   this.O534SaldoCentroCustoCreditoApuraca = 0 ;
   this.Z784CentroCustoNivelUsuarioId = "" ;
   this.O784CentroCustoNivelUsuarioId = "" ;
   this.Z779CentroCustoNivelDataHoraAlt = gx.date.nullDate() ;
   this.O779CentroCustoNivelDataHoraAlt = gx.date.nullDate() ;
   this.ZnRcdDeleted_111 = 0 ;
   this.OnRcdDeleted_111 = 0 ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.Z71PessoaFantasia = "" ;
   this.O71PessoaFantasia = "" ;
   this.Z110SaldoCorrentistaTotalDebito = 0 ;
   this.O110SaldoCorrentistaTotalDebito = 0 ;
   this.Z109SaldoCorrentistaTotalCredito = 0 ;
   this.O109SaldoCorrentistaTotalCredito = 0 ;
   this.Z111SaldoCorrentistaSaldoAtual = 0 ;
   this.O111SaldoCorrentistaSaldoAtual = 0 ;
   this.Z785CorrentistaNivelUsuarioId = "" ;
   this.O785CorrentistaNivelUsuarioId = "" ;
   this.Z786CorrentistaNivelDataHoraAlt = gx.date.nullDate() ;
   this.O786CorrentistaNivelDataHoraAlt = gx.date.nullDate() ;
   this.A783SaldoContaUsuarioId = "" ;
   this.Z783SaldoContaUsuarioId = "" ;
   this.O783SaldoContaUsuarioId = "" ;
   this.A777SaldoContaDataHora = gx.date.nullDate() ;
   this.Z777SaldoContaDataHora = gx.date.nullDate() ;
   this.O777SaldoContaDataHora = gx.date.nullDate() ;
   this.AV30ChamaOnBlurMascara = "" ;
   this.ZV30ChamaOnBlurMascara = "" ;
   this.OV30ChamaOnBlurMascara = "" ;
   this.AV36AcessoSistemaSequencia = 0 ;
   this.ZV36AcessoSistemaSequencia = 0 ;
   this.OV36AcessoSistemaSequencia = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A785CorrentistaNivelUsuarioId = "" ;
   this.A786CorrentistaNivelDataHoraAlt = gx.date.nullDate() ;
   this.AV48LogEmpresaPessoasEmpresaId = "" ;
   this.AV49LogPessoaId = 0 ;
   this.A71PessoaFantasia = "" ;
   this.A109SaldoCorrentistaTotalCredito = 0 ;
   this.A110SaldoCorrentistaTotalDebito = 0 ;
   this.A111SaldoCorrentistaSaldoAtual = 0 ;
   this.AV47lSaldoContaCorrentistas = {} ;
   this.A537CentroCustoSaldoEmpresaId = "" ;
   this.A538CentroCustoSaldoId = "" ;
   this.A784CentroCustoNivelUsuarioId = "" ;
   this.A779CentroCustoNivelDataHoraAlt = gx.date.nullDate() ;
   this.AV45LogCentroCustoSaldoEmpresaId = "" ;
   this.AV46LogCentroCustoSaldoId = "" ;
   this.A530CentroCustoSaldoDescricao = "" ;
   this.A531SaldoCentroCustoTotalCredito = 0 ;
   this.A532SaldoCentroCustoTotalDebito = 0 ;
   this.A533SaldoCentroCustoSaldoAtual = 0 ;
   this.A534SaldoCentroCustoCreditoApuraca = 0 ;
   this.A535SaldoCentroCustoDebitoApuracao = 0 ;
   this.AV44lSaldoContaCentroCustos = {} ;
   this.AV7UsrCod = "" ;
   this.AV12EmpresaLogadaID = "" ;
   this.AV21Sim = "" ;
   this.AV22Nao = "" ;
   this.AV55Pgmname = "" ;
   this.AV56Pgmdesc = "" ;
   this.AV13MsgErro = "" ;
   this.AV36AcessoSistemaSequencia = 0 ;
   this.AV20Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV15Tabela = "" ;
   this.AV27EmpresaPadraoSaldo = "" ;
   this.AV14EmpresaPadrao = "" ;
   this.AV19EmpresaPadraoCenCusto = "" ;
   this.AV18EmpresaPadraoCorrentista = "" ;
   this.AV29ErroCaracteres = "" ;
   this.AV30ChamaOnBlurMascara = "" ;
   this.AV31TemMascara = "" ;
   this.AV32EstruturaContaInicial = "" ;
   this.AV33Entrada1 = [ ] ;
   this.AV34Saida1 = [ ] ;
   this.AV57Sistema = 0 ;
   this.AV52MascaraValores = {} ;
   this.AV37SnAlterou = "" ;
   this.AV10ret = 0 ;
   this.AV16ContaContabilId = "" ;
   this.AV17SaldoContaDataReferencia = gx.date.nullDate() ;
   this.A879SaldoContaEmpresaId = "" ;
   this.A176EmpresaContaContabilEmpresaId = "" ;
   this.A62ContaContabilId = "" ;
   this.A536SaldoContaDataReferencia = gx.date.nullDate() ;
   this.AV23diaref = 0 ;
   this.AV28diare2 = 0 ;
   this.A783SaldoContaUsuarioId = "" ;
   this.A777SaldoContaDataHora = gx.date.nullDate() ;
   this.AV39LogSaldoContaEmpresaId = "" ;
   this.AV40LogEmpresaContaContabilEmpresaId = "" ;
   this.AV41LogContaContabilId = "" ;
   this.AV42LogSaldoContaDataReferencia = gx.date.nullDate() ;
   this.Gx_BScreen = 0 ;
   this.A63ContaContabilNome = "" ;
   this.A525SaldoContaTotalDebito = 0 ;
   this.A526SaldoContaTotalCredito = 0 ;
   this.A527SaldoContaSaldoAtual = 0 ;
   this.A528SaldoContaCreditoApuracao = 0 ;
   this.A529SaldoContaDebitoApuracao = 0 ;
   this.AV38lSaldoContas = {} ;
   this.AV43LogUsuario = "" ;
   this.AV50Tab = [ ] ;
   this.Gx_mode = "" ;
   this.Events = {"e12182_client": ["'FECHAR'", true] ,"e13182_client": ["AFTER TRN", true] ,"e1418109_client": ["ENTER", true] ,"e1518109_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV16ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV17SaldoContaDataReferencia',fld:'vSALDOCONTADATAREFERENCIA'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV36AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV36AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPTCCONTABIL", [15]);
   this.setPrompt("PROMPT_538", [60]);
   this.setPrompt("PROMPT_69", [76]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV16ContaContabilId", "vCONTACONTABILID", 0, "svchar");
   this.setVCMap("AV17SaldoContaDataReferencia", "vSALDOCONTADATAREFERENCIA", 0, "date");
   this.setVCMap("AV27EmpresaPadraoSaldo", "vEMPRESAPADRAOSALDO", 0, "char");
   this.setVCMap("A879SaldoContaEmpresaId", "SALDOCONTAEMPRESAID", 0, "char");
   this.setVCMap("AV14EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A176EmpresaContaContabilEmpresaId", "EMPRESACONTACONTABILEMPRESAID", 0, "char");
   this.setVCMap("AV23diaref", "vDIAREF", 0, "int");
   this.setVCMap("AV28diare2", "vDIARE2", 0, "int");
   this.setVCMap("AV13MsgErro", "vMSGERRO", 0, "svchar");
   this.setVCMap("AV10ret", "vRET", 0, "int");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV37SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV39LogSaldoContaEmpresaId", "vLOGSALDOCONTAEMPRESAID", 0, "char");
   this.setVCMap("AV40LogEmpresaContaContabilEmpresaId", "vLOGEMPRESACONTACONTABILEMPRESAID", 0, "char");
   this.setVCMap("AV41LogContaContabilId", "vLOGCONTACONTABILID", 0, "svchar");
   this.setVCMap("AV42LogSaldoContaDataReferencia", "vLOGSALDOCONTADATAREFERENCIA", 0, "date");
   this.setVCMap("AV29ErroCaracteres", "vERROCARACTERES", 0, "svchar");
   this.setVCMap("AV38lSaldoContas", "vLSALDOCONTAS", 0, "lSaldoContas");
   this.setVCMap("AV43LogUsuario", "vLOGUSUARIO", 0, "svchar");
   this.setVCMap("AV56Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV55Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV19EmpresaPadraoCenCusto", "vEMPRESAPADRAOCENCUSTO", 0, "char");
   this.setVCMap("A537CentroCustoSaldoEmpresaId", "CENTROCUSTOSALDOEMPRESAID", 58, "char");
   this.setVCMap("AV45LogCentroCustoSaldoEmpresaId", "vLOGCENTROCUSTOSALDOEMPRESAID", 0, "char");
   this.setVCMap("AV46LogCentroCustoSaldoId", "vLOGCENTROCUSTOSALDOID", 0, "svchar");
   this.setVCMap("AV44lSaldoContaCentroCustos", "vLSALDOCONTACENTROCUSTOS", 0, "lSaldoContaCentroCustos");
   this.setVCMap("AV18EmpresaPadraoCorrentista", "vEMPRESAPADRAOCORRENTISTA", 0, "char");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 74, "char");
   this.setVCMap("AV48LogEmpresaPessoasEmpresaId", "vLOGEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV49LogPessoaId", "vLOGPESSOAID", 0, "int");
   this.setVCMap("AV47lSaldoContaCorrentistas", "vLSALDOCONTACORRENTISTAS", 0, "lSaldoContaCorrentistas");
   this.setVCMap("AV21Sim", "vSIM", 0, "svchar");
   this.InitStandaloneVars( );
   this.LvlOlds[ 109 ]= ["O529SaldoContaDebitoApuracao","O528SaldoContaCreditoApuracao","O527SaldoContaSaldoAtual","O526SaldoContaTotalCredito","O525SaldoContaTotalDebito","O536SaldoContaDataReferencia","O63ContaContabilNome"] ;
   this.LvlOlds[ 110 ]= ["O535SaldoCentroCustoDebitoApuracao","O534SaldoCentroCustoCreditoApuraca","O533SaldoCentroCustoSaldoAtual","O532SaldoCentroCustoTotalDebito","O531SaldoCentroCustoTotalCredito","O538CentroCustoSaldoId","O530CentroCustoSaldoDescricao"] ;
   this.LvlOlds[ 111 ]= ["O111SaldoCorrentistaSaldoAtual","O110SaldoCorrentistaTotalDebito","O109SaldoCorrentistaTotalCredito","O69PessoaId","O71PessoaFantasia"] ;
});
gx.setParentObj(new tsaldoconta());
