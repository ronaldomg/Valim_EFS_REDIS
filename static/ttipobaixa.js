/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:27:34.40
*/
gx.evt.autoSkip = false;
gx.define('ttipobaixa', false, function () {
   this.ServerClass =  "ttipobaixa" ;
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
      this.AV70TipoBaixaPagRecParm=gx.fn.getControlValue("vTIPOBAIXAPAGRECPARM") ;
      this.AV19TipoBaixaSigla=gx.fn.getControlValue("vTIPOBAIXASIGLA") ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A1052TipoBaixaEmpresaId=gx.fn.getControlValue("TIPOBAIXAEMPRESAID") ;
      this.AV24EmpresaPadraoTpConta=gx.fn.getControlValue("vEMPRESAPADRAOTPCONTA") ;
      this.A941TipoContaEmpresaId=gx.fn.getControlValue("TIPOCONTAEMPRESAID") ;
      this.AV20EmpresaPadraoTpCobranca=gx.fn.getControlValue("vEMPRESAPADRAOTPCOBRANCA") ;
      this.A1063TpCobrancaTpBaixaEmpresaId=gx.fn.getControlValue("TPCOBRANCATPBAIXAEMPRESAID") ;
      this.A1060NovoTipoCobrancaEmpresaId=gx.fn.getControlValue("NOVOTIPOCOBRANCAEMPRESAID") ;
      this.AV23EmpresaPadraoTpLanc=gx.fn.getControlValue("vEMPRESAPADRAOTPLANC") ;
      this.A1070LancamentoAcrescimoEmpresaId=gx.fn.getControlValue("LANCAMENTOACRESCIMOEMPRESAID") ;
      this.A1073LancamentoDescontoEmpresaId=gx.fn.getControlValue("LANCAMENTODESCONTOEMPRESAID") ;
      this.A1067LancamentoBaixaEmpresaId=gx.fn.getControlValue("LANCAMENTOBAIXAEMPRESAID") ;
      this.A9392LancamentoAdiJurosEmpId=gx.fn.getControlValue("LANCAMENTOADIJUROSEMPID") ;
      this.AV25EmpresaPadraoHistCxaBanco=gx.fn.getControlValue("vEMPRESAPADRAOHISTCXABANCO") ;
      this.A10129TipoBaixaHistoricoEmpId=gx.fn.getControlValue("TIPOBAIXAHISTORICOEMPID") ;
      this.A10127TipoBaixaHistoricoDebEmpId=gx.fn.getControlValue("TIPOBAIXAHISTORICODEBEMPID") ;
      this.AV26EmpresaPadraoCxaBanco=gx.fn.getControlValue("vEMPRESAPADRAOCXABANCO") ;
      this.A1014CaixaBancoEmpresaId=gx.fn.getControlValue("CAIXABANCOEMPRESAID") ;
      this.AV37EmpresaPadraoTransPagRec=gx.fn.getControlValue("vEMPRESAPADRAOTRANSPAGREC") ;
      this.A1364TipoBaixaTransacaoPagRecEmpres=gx.fn.getControlValue("TIPOBAIXATRANSACAOPAGRECEMPRES") ;
      this.AV40TrabCaixasBancos=gx.fn.getControlValue("vTRABCAIXASBANCOS") ;
      this.AV66TipoBaixaTipoCaixaBanco=gx.fn.getControlValue("vTIPOBAIXATIPOCAIXABANCO") ;
      this.AV67TipoBaixaTipoEmissaoDoc=gx.fn.getControlValue("vTIPOBAIXATIPOEMISSAODOC") ;
      this.AV18TipoBaixaPagRec=gx.fn.getControlValue("vTIPOBAIXAPAGREC") ;
      this.A9614LancamentoAcrescimoPagRec=gx.fn.getControlValue("LANCAMENTOACRESCIMOPAGREC") ;
      this.A9615LancamentoAcrescimoTipo=gx.fn.getControlValue("LANCAMENTOACRESCIMOTIPO") ;
      this.A9616LancamentoAcrescimoEstorno=gx.fn.getControlValue("LANCAMENTOACRESCIMOESTORNO") ;
      this.A9617LancamentoDescontoPagRec=gx.fn.getControlValue("LANCAMENTODESCONTOPAGREC") ;
      this.A9618LancamentoDescontoTipo=gx.fn.getControlValue("LANCAMENTODESCONTOTIPO") ;
      this.A9619LancamentoDescontoEstorno=gx.fn.getControlValue("LANCAMENTODESCONTOESTORNO") ;
      this.A9620LancamentoBaixaPagRec=gx.fn.getControlValue("LANCAMENTOBAIXAPAGREC") ;
      this.A9621LancamentoBaixaTipo=gx.fn.getControlValue("LANCAMENTOBAIXATIPO") ;
      this.A9622LancamentoBaixaEstorno=gx.fn.getControlValue("LANCAMENTOBAIXAESTORNO") ;
      this.AV68LancamentoAdiJurosId=gx.fn.getIntegerValue("vLANCAMENTOADIJUROSID",'.') ;
      this.AV71TipoBaixaPercAdiJuros=gx.fn.getDecimalValue("vTIPOBAIXAPERCADIJUROS",'.',',') ;
      this.A9623LancamentoAdiJurosPagRec=gx.fn.getControlValue("LANCAMENTOADIJUROSPAGREC") ;
      this.A9624LancamentoAdiJurosEstorno=gx.fn.getControlValue("LANCAMENTOADIJUROSESTORNO") ;
      this.A9625LancamentoAdiJurosTipo=gx.fn.getControlValue("LANCAMENTOADIJUROSTIPO") ;
      this.AV69TipoBaixaTransacaoPagRecTipo=gx.fn.getControlValue("vTIPOBAIXATRANSACAOPAGRECTIPO") ;
      this.A10135TipoBaixaHistoricoTipo=gx.fn.getControlValue("TIPOBAIXAHISTORICOTIPO") ;
      this.A10133TipoBaixaHistoricoDebTipo=gx.fn.getControlValue("TIPOBAIXAHISTORICODEBTIPO") ;
      this.AV22ret=gx.fn.getIntegerValue("vRET",'.') ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV44CampDefaultTrabCxBco=gx.fn.getControlValue("vCAMPDEFAULTTRABCXBCO") ;
      this.A2199NovoTipoCobrancaFormaCob=gx.fn.getControlValue("NOVOTIPOCOBRANCAFORMACOB") ;
      this.AV74Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV73Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV62Nao=gx.fn.getControlValue("vNAO") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV17TipoBaixaEmpresaId=gx.fn.getControlValue("vTIPOBAIXAEMPRESAID") ;
   };
   this.Valid_Tipobaixapagrec=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipobaixapagrec",["gx.O.A1049TipoBaixaPagRec", "gx.O.AV18TipoBaixaPagRec"],["AV18TipoBaixaPagRec"]);
      return true;
   }
   this.Valid_Tipobaixasigla=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOBAIXASIGLA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipobaixasncopiaobs=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOBAIXASNCOPIAOBS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipobaixasnpartepagto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOBAIXASNPARTEPAGTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipobaixazerarccusto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOBAIXAZERARCCUSTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipobaixasnfaturado=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOBAIXASNFATURADO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipobaixadescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOBAIXADESCRICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipobaixapcdescpagdia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOBAIXAPCDESCPAGDIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipobaixatipocaixabanco=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipobaixatipocaixabanco",["gx.O.A1050TipoBaixaTipoCaixaBanco", "gx.O.AV66TipoBaixaTipoCaixaBanco"],["AV66TipoBaixaTipoCaixaBanco"]);
      return true;
   }
   this.Valid_Tipobaixatipoemissaodoc=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipobaixatipoemissaodoc",["gx.O.A1066TipoBaixaTipoEmissaoDoc", "gx.O.AV67TipoBaixaTipoEmissaoDoc"],["AV67TipoBaixaTipoEmissaoDoc"]);
      return true;
   }
   this.Valid_Tipobaixasnagrupa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOBAIXASNAGRUPA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipocontaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipocontaid",["gx.O.AV24EmpresaPadraoTpConta", "gx.O.A942TipoContaId", "gx.O.A941TipoContaEmpresaId", "gx.O.A943TipoContaDescricao"],["A941TipoContaEmpresaId", "A943TipoContaDescricao"]);
      return true;
   }
   this.Valid_Tpcobrancatpbaixaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tpcobrancatpbaixaid",["gx.O.AV20EmpresaPadraoTpCobranca", "gx.O.A1064TpCobrancaTpBaixaId", "gx.O.A1063TpCobrancaTpBaixaEmpresaId", "gx.O.A1065TpCobrancaTpBaixaDescricao"],["A1063TpCobrancaTpBaixaEmpresaId", "A1065TpCobrancaTpBaixaDescricao"]);
      return true;
   }
   this.Valid_Novotipocobrancaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Novotipocobrancaid",["gx.O.AV20EmpresaPadraoTpCobranca", "gx.O.A1061NovoTipoCobrancaId", "gx.O.A1060NovoTipoCobrancaEmpresaId", "gx.O.A1062NovoTipoCobrancaDescricao", "gx.O.A2199NovoTipoCobrancaFormaCob"],["A1060NovoTipoCobrancaEmpresaId", "A1062NovoTipoCobrancaDescricao", "A2199NovoTipoCobrancaFormaCob"]);
      return true;
   }
   this.Valid_Lancamentoacrescimoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Lancamentoacrescimoid",["gx.O.AV23EmpresaPadraoTpLanc", "gx.O.A1071LancamentoAcrescimoId", "gx.O.A1070LancamentoAcrescimoEmpresaId", "gx.O.A1072LancamentoAcrescimoDescricao", "gx.O.A9614LancamentoAcrescimoPagRec", "gx.O.A9615LancamentoAcrescimoTipo", "gx.O.A9616LancamentoAcrescimoEstorno"],["A1070LancamentoAcrescimoEmpresaId", "A1072LancamentoAcrescimoDescricao", "A9614LancamentoAcrescimoPagRec", "A9615LancamentoAcrescimoTipo", "A9616LancamentoAcrescimoEstorno"]);
      return true;
   }
   this.Valid_Lancamentodescontoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Lancamentodescontoid",["gx.O.AV23EmpresaPadraoTpLanc", "gx.O.A1074LancamentoDescontoId", "gx.O.A1073LancamentoDescontoEmpresaId", "gx.O.A1075LancamentoDescontoDescricao", "gx.O.A9617LancamentoDescontoPagRec", "gx.O.A9618LancamentoDescontoTipo", "gx.O.A9619LancamentoDescontoEstorno"],["A1073LancamentoDescontoEmpresaId", "A1075LancamentoDescontoDescricao", "A9617LancamentoDescontoPagRec", "A9618LancamentoDescontoTipo", "A9619LancamentoDescontoEstorno"]);
      return true;
   }
   this.Valid_Lancamentobaixaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Lancamentobaixaid",["gx.O.AV23EmpresaPadraoTpLanc", "gx.O.A1068LancamentoBaixaId", "gx.O.A1067LancamentoBaixaEmpresaId", "gx.O.A1069LancamentoBaixaDescricao", "gx.O.A9620LancamentoBaixaPagRec", "gx.O.A9621LancamentoBaixaTipo", "gx.O.A9622LancamentoBaixaEstorno"],["A1067LancamentoBaixaEmpresaId", "A1069LancamentoBaixaDescricao", "A9620LancamentoBaixaPagRec", "A9621LancamentoBaixaTipo", "A9622LancamentoBaixaEstorno"]);
      return true;
   }
   this.Valid_Tipobaixapercadijuros=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipobaixapercadijuros",["gx.num.urlDecimal(gx.O.A9395TipoBaixaPercAdiJuros,\'.\',\',\')", "gx.num.urlDecimal(gx.O.AV71TipoBaixaPercAdiJuros,\'.\',\',\')"],["AV71TipoBaixaPercAdiJuros"]);
      return true;
   }
   this.Valid_Lancamentoadijurosid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Lancamentoadijurosid",["gx.O.AV23EmpresaPadraoTpLanc", "gx.O.A9393LancamentoAdiJurosId", "gx.O.A9392LancamentoAdiJurosEmpId", "gx.O.A9394LancamentoAdiJurosDescricao", "gx.O.A9623LancamentoAdiJurosPagRec", "gx.O.A9624LancamentoAdiJurosEstorno", "gx.O.A9625LancamentoAdiJurosTipo", "gx.O.AV68LancamentoAdiJurosId"],["A9392LancamentoAdiJurosEmpId", "A9394LancamentoAdiJurosDescricao", "A9623LancamentoAdiJurosPagRec", "A9624LancamentoAdiJurosEstorno", "A9625LancamentoAdiJurosTipo", "AV68LancamentoAdiJurosId"]);
      return true;
   }
   this.Valid_Tipobaixatransacaopagrectipo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipobaixatransacaopagrectipo",["gx.O.A1365TipoBaixaTransacaoPagRecTipo", "gx.O.AV69TipoBaixaTransacaoPagRecTipo"],["AV69TipoBaixaTransacaoPagRecTipo"]);
      return true;
   }
   this.Valid_Tipobaixatransacaopagrecid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipobaixatransacaopagrecid",["gx.O.A1366TipoBaixaTransacaoPagRecId", "gx.O.AV37EmpresaPadraoTransPagRec", "gx.O.A1364TipoBaixaTransacaoPagRecEmpres", "gx.O.A1365TipoBaixaTransacaoPagRecTipo"],["A1366TipoBaixaTransacaoPagRecId", "A1364TipoBaixaTransacaoPagRecEmpres"]);
      return true;
   }
   this.Valid_Caixabancoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Caixabancoid",["gx.O.AV26EmpresaPadraoCxaBanco", "gx.O.A1015CaixaBancoId", "gx.O.A1014CaixaBancoEmpresaId", "gx.O.A1017CaixaBancoDescricao"],["A1014CaixaBancoEmpresaId", "A1017CaixaBancoDescricao"]);
      return true;
   }
   this.Valid_Tipobaixahistoricoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipobaixahistoricoid",["gx.O.O1015CaixaBancoId", "gx.O.O2208TipoBaixaZerarCCusto", "gx.O.O1366TipoBaixaTransacaoPagRecId", "gx.O.O1365TipoBaixaTransacaoPagRecTipo", "gx.O.O1064TpCobrancaTpBaixaId", "gx.O.O942TipoContaId", "gx.O.O10130TipoBaixaHistoricoId", "gx.O.O1068LancamentoBaixaId", "gx.O.O1074LancamentoDescontoId", "gx.O.O1071LancamentoAcrescimoId", "gx.O.O1061NovoTipoCobrancaId", "gx.O.O1066TipoBaixaTipoEmissaoDoc", "gx.O.O1050TipoBaixaTipoCaixaBanco", "gx.O.O1059TipoBaixaSnFaturado", "gx.O.O1058TipoBaixaSnAgrupa", "gx.O.O1057TipoBaixaSnPartePagto", "gx.O.O1056TipoBaixaSnCopiaObs", "gx.num.urlDecimal(gx.O.O1055TipoBaixaPcDescPagDia,\'.\',\',\')", "gx.O.O1054TipoBaixaDescricao", "gx.O.O1053TipoBaixaSigla", "gx.O.O1049TipoBaixaPagRec", "gx.O.AV25EmpresaPadraoHistCxaBanco", "gx.O.A10130TipoBaixaHistoricoId", "gx.O.A10129TipoBaixaHistoricoEmpId", "gx.O.AV7UsrCod", "gx.O.A1049TipoBaixaPagRec", "gx.O.A1053TipoBaixaSigla", "gx.O.A1054TipoBaixaDescricao", "gx.num.urlDecimal(gx.O.A1055TipoBaixaPcDescPagDia,\'.\',\',\')", "gx.O.A1056TipoBaixaSnCopiaObs", "gx.O.A1057TipoBaixaSnPartePagto", "gx.O.A1058TipoBaixaSnAgrupa", "gx.O.A1059TipoBaixaSnFaturado", "gx.O.A1050TipoBaixaTipoCaixaBanco", "gx.O.A1066TipoBaixaTipoEmissaoDoc", "gx.O.A1061NovoTipoCobrancaId", "gx.O.A1071LancamentoAcrescimoId", "gx.O.A1074LancamentoDescontoId", "gx.O.A1068LancamentoBaixaId", "gx.O.A942TipoContaId", "gx.O.A1064TpCobrancaTpBaixaId", "gx.O.A1365TipoBaixaTransacaoPagRecTipo", "gx.O.A1366TipoBaixaTransacaoPagRecId", "gx.O.A2208TipoBaixaZerarCCusto", "gx.O.A1015CaixaBancoId", "gx.O.A10134TipoBaixaHistoricoDesc", "gx.O.A10135TipoBaixaHistoricoTipo", "gx.O.A1093TipoBaixaUsuarioAlt", 'gx.date.urlDateTime(gx.O.A1094TipoBaixaDataHoraAlt,"DMY4")'],["A10129TipoBaixaHistoricoEmpId", "A10134TipoBaixaHistoricoDesc", "A10135TipoBaixaHistoricoTipo", "A1093TipoBaixaUsuarioAlt", "A1094TipoBaixaDataHoraAlt"]);
      return true;
   }
   this.Valid_Tipobaixahistoricodebid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipobaixahistoricodebid",["gx.O.AV25EmpresaPadraoHistCxaBanco", "gx.O.A10128TipoBaixaHistoricoDebId", "gx.O.A10127TipoBaixaHistoricoDebEmpId", "gx.O.A1049TipoBaixaPagRec", "gx.O.A1053TipoBaixaSigla", "gx.O.A1054TipoBaixaDescricao", "gx.O.AV40TrabCaixasBancos", "gx.O.A1050TipoBaixaTipoCaixaBanco", "gx.O.A1066TipoBaixaTipoEmissaoDoc", "gx.O.AV66TipoBaixaTipoCaixaBanco", "gx.O.A1058TipoBaixaSnAgrupa", "gx.O.AV67TipoBaixaTipoEmissaoDoc", "gx.O.A1071LancamentoAcrescimoId", "gx.O.AV18TipoBaixaPagRec", "gx.O.A9614LancamentoAcrescimoPagRec", "gx.O.A9615LancamentoAcrescimoTipo", "gx.O.A9616LancamentoAcrescimoEstorno", "gx.O.A1074LancamentoDescontoId", "gx.O.A9617LancamentoDescontoPagRec", "gx.O.A9618LancamentoDescontoTipo", "gx.O.A9619LancamentoDescontoEstorno", "gx.O.A1068LancamentoBaixaId", "gx.O.A9620LancamentoBaixaPagRec", "gx.O.A9621LancamentoBaixaTipo", "gx.O.A9622LancamentoBaixaEstorno", "gx.num.urlDecimal(gx.O.A9395TipoBaixaPercAdiJuros,\'.\',\',\')", "gx.O.AV68LancamentoAdiJurosId", "gx.O.A9393LancamentoAdiJurosId", "gx.num.urlDecimal(gx.O.AV71TipoBaixaPercAdiJuros,\'.\',\',\')", "gx.O.A9623LancamentoAdiJurosPagRec", "gx.O.A9624LancamentoAdiJurosEstorno", "gx.O.A9625LancamentoAdiJurosTipo", "gx.O.A1365TipoBaixaTransacaoPagRecTipo", "gx.O.A1366TipoBaixaTransacaoPagRecId", "gx.O.AV69TipoBaixaTransacaoPagRecTipo", "gx.O.A10130TipoBaixaHistoricoId", "gx.O.A10135TipoBaixaHistoricoTipo", "gx.O.A10133TipoBaixaHistoricoDebTipo", "gx.O.A10132TipoBaixaHistoricoDebDesc", "gx.O.AV22ret"],["A10127TipoBaixaHistoricoDebEmpId", "A10132TipoBaixaHistoricoDebDesc", "A10133TipoBaixaHistoricoDebTipo", "AV22ret"]);
      return true;
   }
   this.e122j2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132j2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e142j140_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152j140_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,7,10,13,15,17,20,23,24,27,28,31,32,35,38,40,43,45,48,50,51,54,56,59,61,64,66,69,71,76,81,83,84,87,89,90,91,94,97,103,105,106,109,111,112,115,117,118,121,123,124,127,129,132,134,135,138,140,141,147,153,155,156,159,161,162,165,167,168,171,174,176,178,187,189,191,193,194,195,196,197,198,199,200,201,202,203];
   this.GXLastCtrlId =203;
   this.TABCSSContainer = gx.uc.getNew(this, 6, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV63Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV63Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV63Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "ttipobaixa_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TAB1",grid:0};
   GXValidFnc[10]={fld:"TABLE9",grid:0};
   GXValidFnc[13]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobaixapagrec,isvalid:null,rgrid:[],fld:"TIPOBAIXAPAGREC",gxz:"Z1049TipoBaixaPagRec",gxold:"O1049TipoBaixaPagRec",gxvar:"A1049TipoBaixaPagRec",ucs:[],op:[],ip:[15],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A1049TipoBaixaPagRec=Value},v2z:function(Value){gx.O.Z1049TipoBaixaPagRec=Value},v2c:function(){gx.fn.setComboBoxValue("TIPOBAIXAPAGREC",gx.O.A1049TipoBaixaPagRec)},c2v:function(){gx.O.A1049TipoBaixaPagRec=this.val()},val:function(){return gx.fn.getControlValue("TIPOBAIXAPAGREC")},nac:function(){return !(""==this.AV70TipoBaixaPagRecParm)}};
   GXValidFnc[17]={fld:"TABLE10",grid:0};
   GXValidFnc[20]={fld:"TABLE11",grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobaixasncopiaobs,isvalid:null,rgrid:[],fld:"TIPOBAIXASNCOPIAOBS",gxz:"Z1056TipoBaixaSnCopiaObs",gxold:"O1056TipoBaixaSnCopiaObs",gxvar:"A1056TipoBaixaSnCopiaObs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1056TipoBaixaSnCopiaObs=Value},v2z:function(Value){gx.O.Z1056TipoBaixaSnCopiaObs=Value},v2c:function(){gx.fn.setCheckBoxValue("TIPOBAIXASNCOPIAOBS",gx.O.A1056TipoBaixaSnCopiaObs,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1056TipoBaixaSnCopiaObs=this.val()},val:function(){return gx.fn.getControlValue("TIPOBAIXASNCOPIAOBS")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 23 , function() {
   });
   GXValidFnc[24]={fld:"TABLE12",grid:0};
   GXValidFnc[27]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobaixasnpartepagto,isvalid:null,rgrid:[],fld:"TIPOBAIXASNPARTEPAGTO",gxz:"Z1057TipoBaixaSnPartePagto",gxold:"O1057TipoBaixaSnPartePagto",gxvar:"A1057TipoBaixaSnPartePagto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1057TipoBaixaSnPartePagto=Value},v2z:function(Value){gx.O.Z1057TipoBaixaSnPartePagto=Value},v2c:function(){gx.fn.setCheckBoxValue("TIPOBAIXASNPARTEPAGTO",gx.O.A1057TipoBaixaSnPartePagto,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1057TipoBaixaSnPartePagto=this.val()},val:function(){return gx.fn.getControlValue("TIPOBAIXASNPARTEPAGTO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 27 , function() {
   });
   GXValidFnc[28]={fld:"TABLE13",grid:0};
   GXValidFnc[31]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobaixazerarccusto,isvalid:null,rgrid:[],fld:"TIPOBAIXAZERARCCUSTO",gxz:"Z2208TipoBaixaZerarCCusto",gxold:"O2208TipoBaixaZerarCCusto",gxvar:"A2208TipoBaixaZerarCCusto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2208TipoBaixaZerarCCusto=Value},v2z:function(Value){gx.O.Z2208TipoBaixaZerarCCusto=Value},v2c:function(){gx.fn.setCheckBoxValue("TIPOBAIXAZERARCCUSTO",gx.O.A2208TipoBaixaZerarCCusto,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2208TipoBaixaZerarCCusto=this.val()},val:function(){return gx.fn.getControlValue("TIPOBAIXAZERARCCUSTO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 31 , function() {
   });
   GXValidFnc[32]={fld:"TABLE14",grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobaixasnfaturado,isvalid:null,rgrid:[],fld:"TIPOBAIXASNFATURADO",gxz:"Z1059TipoBaixaSnFaturado",gxold:"O1059TipoBaixaSnFaturado",gxvar:"A1059TipoBaixaSnFaturado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1059TipoBaixaSnFaturado=Value},v2z:function(Value){gx.O.Z1059TipoBaixaSnFaturado=Value},v2c:function(){gx.fn.setCheckBoxValue("TIPOBAIXASNFATURADO",gx.O.A1059TipoBaixaSnFaturado,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1059TipoBaixaSnFaturado=this.val()},val:function(){return gx.fn.getControlValue("TIPOBAIXASNFATURADO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[38]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobaixasigla,isvalid:null,rgrid:[],fld:"TIPOBAIXASIGLA",gxz:"Z1053TipoBaixaSigla",gxold:"O1053TipoBaixaSigla",gxvar:"A1053TipoBaixaSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1053TipoBaixaSigla=Value},v2z:function(Value){gx.O.Z1053TipoBaixaSigla=Value},v2c:function(){gx.fn.setControlValue("TIPOBAIXASIGLA",gx.O.A1053TipoBaixaSigla,0)},c2v:function(){gx.O.A1053TipoBaixaSigla=this.val()},val:function(){return gx.fn.getControlValue("TIPOBAIXASIGLA")},nac:function(){return !(""==this.AV19TipoBaixaSigla)}};
   GXValidFnc[43]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobaixadescricao,isvalid:null,rgrid:[],fld:"TIPOBAIXADESCRICAO",gxz:"Z1054TipoBaixaDescricao",gxold:"O1054TipoBaixaDescricao",gxvar:"A1054TipoBaixaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1054TipoBaixaDescricao=Value},v2z:function(Value){gx.O.Z1054TipoBaixaDescricao=Value},v2c:function(){gx.fn.setControlValue("TIPOBAIXADESCRICAO",gx.O.A1054TipoBaixaDescricao,0)},c2v:function(){gx.O.A1054TipoBaixaDescricao=this.val()},val:function(){return gx.fn.getControlValue("TIPOBAIXADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobaixapcdescpagdia,isvalid:null,rgrid:[],fld:"TIPOBAIXAPCDESCPAGDIA",gxz:"Z1055TipoBaixaPcDescPagDia",gxold:"O1055TipoBaixaPcDescPagDia",gxvar:"A1055TipoBaixaPcDescPagDia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1055TipoBaixaPcDescPagDia=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z1055TipoBaixaPcDescPagDia=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("TIPOBAIXAPCDESCPAGDIA",gx.O.A1055TipoBaixaPcDescPagDia,2,',')},c2v:function(){gx.O.A1055TipoBaixaPcDescPagDia=this.val()},val:function(){return gx.fn.getDecimalValue("TIPOBAIXAPCDESCPAGDIA",'.',',')},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[54]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobaixatipocaixabanco,isvalid:null,rgrid:[],fld:"TIPOBAIXATIPOCAIXABANCO",gxz:"Z1050TipoBaixaTipoCaixaBanco",gxold:"O1050TipoBaixaTipoCaixaBanco",gxvar:"A1050TipoBaixaTipoCaixaBanco",ucs:[],op:[],ip:[56],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A1050TipoBaixaTipoCaixaBanco=Value},v2z:function(Value){gx.O.Z1050TipoBaixaTipoCaixaBanco=Value},v2c:function(){gx.fn.setComboBoxValue("TIPOBAIXATIPOCAIXABANCO",gx.O.A1050TipoBaixaTipoCaixaBanco)},c2v:function(){gx.O.A1050TipoBaixaTipoCaixaBanco=this.val()},val:function(){return gx.fn.getControlValue("TIPOBAIXATIPOCAIXABANCO")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobaixatipoemissaodoc,isvalid:null,rgrid:[],fld:"TIPOBAIXATIPOEMISSAODOC",gxz:"Z1066TipoBaixaTipoEmissaoDoc",gxold:"O1066TipoBaixaTipoEmissaoDoc",gxvar:"A1066TipoBaixaTipoEmissaoDoc",ucs:[],op:[],ip:[61],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A1066TipoBaixaTipoEmissaoDoc=Value},v2z:function(Value){gx.O.Z1066TipoBaixaTipoEmissaoDoc=Value},v2c:function(){gx.fn.setComboBoxValue("TIPOBAIXATIPOEMISSAODOC",gx.O.A1066TipoBaixaTipoEmissaoDoc)},c2v:function(){gx.O.A1066TipoBaixaTipoEmissaoDoc=this.val()},val:function(){return gx.fn.getControlValue("TIPOBAIXATIPOEMISSAODOC")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobaixasnagrupa,isvalid:null,rgrid:[],fld:"TIPOBAIXASNAGRUPA",gxz:"Z1058TipoBaixaSnAgrupa",gxold:"O1058TipoBaixaSnAgrupa",gxvar:"A1058TipoBaixaSnAgrupa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A1058TipoBaixaSnAgrupa=Value},v2z:function(Value){gx.O.Z1058TipoBaixaSnAgrupa=Value},v2c:function(){gx.fn.setComboBoxValue("TIPOBAIXASNAGRUPA",gx.O.A1058TipoBaixaSnAgrupa)},c2v:function(){gx.O.A1058TipoBaixaSnAgrupa=this.val()},val:function(){return gx.fn.getControlValue("TIPOBAIXASNAGRUPA")},nac:gx.falseFn};
   GXValidFnc[69]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBAIXAQTDECONTAS",gxz:"Z2901TipoBaixaQtdeContas",gxold:"O2901TipoBaixaQtdeContas",gxvar:"A2901TipoBaixaQtdeContas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2901TipoBaixaQtdeContas=Value},v2z:function(Value){gx.O.Z2901TipoBaixaQtdeContas=Value},v2c:function(){gx.fn.setComboBoxValue("TIPOBAIXAQTDECONTAS",gx.O.A2901TipoBaixaQtdeContas)},c2v:function(){gx.O.A2901TipoBaixaQtdeContas=this.val()},val:function(){return gx.fn.getControlValue("TIPOBAIXAQTDECONTAS")},nac:gx.falseFn};
   GXValidFnc[76]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[81]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[83]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipocontaid,isvalid:null,rgrid:[],fld:"TIPOCONTAID",gxz:"Z942TipoContaId",gxold:"O942TipoContaId",gxvar:"A942TipoContaId",ucs:[],op:[84],ip:[84,83],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A942TipoContaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z942TipoContaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPOCONTAID",gx.O.A942TipoContaId,0)},c2v:function(){gx.O.A942TipoContaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPOCONTAID",'.')},nac:gx.falseFn};
   GXValidFnc[84]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONTADESCRICAO",gxz:"Z943TipoContaDescricao",gxold:"O943TipoContaDescricao",gxvar:"A943TipoContaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A943TipoContaDescricao=Value},v2z:function(Value){gx.O.Z943TipoContaDescricao=Value},v2c:function(){gx.fn.setControlValue("TIPOCONTADESCRICAO",gx.O.A943TipoContaDescricao,0)},c2v:function(){gx.O.A943TipoContaDescricao=this.val()},val:function(){return gx.fn.getControlValue("TIPOCONTADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tpcobrancatpbaixaid,isvalid:null,rgrid:[],fld:"TPCOBRANCATPBAIXAID",gxz:"Z1064TpCobrancaTpBaixaId",gxold:"O1064TpCobrancaTpBaixaId",gxvar:"A1064TpCobrancaTpBaixaId",ucs:[],op:[90],ip:[90,89],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1064TpCobrancaTpBaixaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1064TpCobrancaTpBaixaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TPCOBRANCATPBAIXAID",gx.O.A1064TpCobrancaTpBaixaId,0)},c2v:function(){gx.O.A1064TpCobrancaTpBaixaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TPCOBRANCATPBAIXAID",'.')},nac:gx.falseFn};
   GXValidFnc[90]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TPCOBRANCATPBAIXADESCRICAO",gxz:"Z1065TpCobrancaTpBaixaDescricao",gxold:"O1065TpCobrancaTpBaixaDescricao",gxvar:"A1065TpCobrancaTpBaixaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1065TpCobrancaTpBaixaDescricao=Value},v2z:function(Value){gx.O.Z1065TpCobrancaTpBaixaDescricao=Value},v2c:function(){gx.fn.setControlValue("TPCOBRANCATPBAIXADESCRICAO",gx.O.A1065TpCobrancaTpBaixaDescricao,0)},c2v:function(){gx.O.A1065TpCobrancaTpBaixaDescricao=this.val()},val:function(){return gx.fn.getControlValue("TPCOBRANCATPBAIXADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[91]={fld:"TAB2",grid:0};
   GXValidFnc[94]={fld:"TABLE3",grid:0};
   GXValidFnc[97]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[103]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[105]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Novotipocobrancaid,isvalid:null,rgrid:[],fld:"NOVOTIPOCOBRANCAID",gxz:"Z1061NovoTipoCobrancaId",gxold:"O1061NovoTipoCobrancaId",gxvar:"A1061NovoTipoCobrancaId",ucs:[],op:[106],ip:[106,105],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1061NovoTipoCobrancaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1061NovoTipoCobrancaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NOVOTIPOCOBRANCAID",gx.O.A1061NovoTipoCobrancaId,0)},c2v:function(){gx.O.A1061NovoTipoCobrancaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NOVOTIPOCOBRANCAID",'.')},nac:gx.falseFn};
   GXValidFnc[106]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NOVOTIPOCOBRANCADESCRICAO",gxz:"Z1062NovoTipoCobrancaDescricao",gxold:"O1062NovoTipoCobrancaDescricao",gxvar:"A1062NovoTipoCobrancaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1062NovoTipoCobrancaDescricao=Value},v2z:function(Value){gx.O.Z1062NovoTipoCobrancaDescricao=Value},v2c:function(){gx.fn.setControlValue("NOVOTIPOCOBRANCADESCRICAO",gx.O.A1062NovoTipoCobrancaDescricao,0)},c2v:function(){gx.O.A1062NovoTipoCobrancaDescricao=this.val()},val:function(){return gx.fn.getControlValue("NOVOTIPOCOBRANCADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[109]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[111]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentoacrescimoid,isvalid:null,rgrid:[],fld:"LANCAMENTOACRESCIMOID",gxz:"Z1071LancamentoAcrescimoId",gxold:"O1071LancamentoAcrescimoId",gxvar:"A1071LancamentoAcrescimoId",ucs:[],op:[112],ip:[112,111],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1071LancamentoAcrescimoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1071LancamentoAcrescimoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LANCAMENTOACRESCIMOID",gx.O.A1071LancamentoAcrescimoId,0)},c2v:function(){gx.O.A1071LancamentoAcrescimoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LANCAMENTOACRESCIMOID",'.')},nac:gx.falseFn};
   GXValidFnc[112]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOACRESCIMODESCRICAO",gxz:"Z1072LancamentoAcrescimoDescricao",gxold:"O1072LancamentoAcrescimoDescricao",gxvar:"A1072LancamentoAcrescimoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1072LancamentoAcrescimoDescricao=Value},v2z:function(Value){gx.O.Z1072LancamentoAcrescimoDescricao=Value},v2c:function(){gx.fn.setControlValue("LANCAMENTOACRESCIMODESCRICAO",gx.O.A1072LancamentoAcrescimoDescricao,0)},c2v:function(){gx.O.A1072LancamentoAcrescimoDescricao=this.val()},val:function(){return gx.fn.getControlValue("LANCAMENTOACRESCIMODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[115]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[117]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentodescontoid,isvalid:null,rgrid:[],fld:"LANCAMENTODESCONTOID",gxz:"Z1074LancamentoDescontoId",gxold:"O1074LancamentoDescontoId",gxvar:"A1074LancamentoDescontoId",ucs:[],op:[118],ip:[118,117],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1074LancamentoDescontoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1074LancamentoDescontoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LANCAMENTODESCONTOID",gx.O.A1074LancamentoDescontoId,0)},c2v:function(){gx.O.A1074LancamentoDescontoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LANCAMENTODESCONTOID",'.')},nac:gx.falseFn};
   GXValidFnc[118]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTODESCONTODESCRICAO",gxz:"Z1075LancamentoDescontoDescricao",gxold:"O1075LancamentoDescontoDescricao",gxvar:"A1075LancamentoDescontoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1075LancamentoDescontoDescricao=Value},v2z:function(Value){gx.O.Z1075LancamentoDescontoDescricao=Value},v2c:function(){gx.fn.setControlValue("LANCAMENTODESCONTODESCRICAO",gx.O.A1075LancamentoDescontoDescricao,0)},c2v:function(){gx.O.A1075LancamentoDescontoDescricao=this.val()},val:function(){return gx.fn.getControlValue("LANCAMENTODESCONTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[121]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[123]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentobaixaid,isvalid:null,rgrid:[],fld:"LANCAMENTOBAIXAID",gxz:"Z1068LancamentoBaixaId",gxold:"O1068LancamentoBaixaId",gxvar:"A1068LancamentoBaixaId",ucs:[],op:[124],ip:[124,123],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1068LancamentoBaixaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1068LancamentoBaixaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LANCAMENTOBAIXAID",gx.O.A1068LancamentoBaixaId,0)},c2v:function(){gx.O.A1068LancamentoBaixaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LANCAMENTOBAIXAID",'.')},nac:gx.falseFn};
   GXValidFnc[124]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOBAIXADESCRICAO",gxz:"Z1069LancamentoBaixaDescricao",gxold:"O1069LancamentoBaixaDescricao",gxvar:"A1069LancamentoBaixaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1069LancamentoBaixaDescricao=Value},v2z:function(Value){gx.O.Z1069LancamentoBaixaDescricao=Value},v2c:function(){gx.fn.setControlValue("LANCAMENTOBAIXADESCRICAO",gx.O.A1069LancamentoBaixaDescricao,0)},c2v:function(){gx.O.A1069LancamentoBaixaDescricao=this.val()},val:function(){return gx.fn.getControlValue("LANCAMENTOBAIXADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[127]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[129]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobaixapercadijuros,isvalid:null,rgrid:[],fld:"TIPOBAIXAPERCADIJUROS",gxz:"Z9395TipoBaixaPercAdiJuros",gxold:"O9395TipoBaixaPercAdiJuros",gxvar:"A9395TipoBaixaPercAdiJuros",ucs:[],op:[],ip:[129],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9395TipoBaixaPercAdiJuros=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9395TipoBaixaPercAdiJuros=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("TIPOBAIXAPERCADIJUROS",gx.O.A9395TipoBaixaPercAdiJuros,2,',')},c2v:function(){gx.O.A9395TipoBaixaPercAdiJuros=this.val()},val:function(){return gx.fn.getDecimalValue("TIPOBAIXAPERCADIJUROS",'.',',')},nac:gx.falseFn};
   GXValidFnc[132]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[134]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentoadijurosid,isvalid:null,rgrid:[],fld:"LANCAMENTOADIJUROSID",gxz:"Z9393LancamentoAdiJurosId",gxold:"O9393LancamentoAdiJurosId",gxvar:"A9393LancamentoAdiJurosId",ucs:[],op:[135],ip:[135,134],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9393LancamentoAdiJurosId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9393LancamentoAdiJurosId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LANCAMENTOADIJUROSID",gx.O.A9393LancamentoAdiJurosId,0)},c2v:function(){gx.O.A9393LancamentoAdiJurosId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LANCAMENTOADIJUROSID",'.')},nac:gx.falseFn};
   GXValidFnc[135]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOADIJUROSDESCRICAO",gxz:"Z9394LancamentoAdiJurosDescricao",gxold:"O9394LancamentoAdiJurosDescricao",gxvar:"A9394LancamentoAdiJurosDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9394LancamentoAdiJurosDescricao=Value},v2z:function(Value){gx.O.Z9394LancamentoAdiJurosDescricao=Value},v2c:function(){gx.fn.setControlValue("LANCAMENTOADIJUROSDESCRICAO",gx.O.A9394LancamentoAdiJurosDescricao,0)},c2v:function(){gx.O.A9394LancamentoAdiJurosDescricao=this.val()},val:function(){return gx.fn.getControlValue("LANCAMENTOADIJUROSDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[138]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[140]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobaixatransacaopagrectipo,isvalid:null,rgrid:[],fld:"TIPOBAIXATRANSACAOPAGRECTIPO",gxz:"Z1365TipoBaixaTransacaoPagRecTipo",gxold:"O1365TipoBaixaTransacaoPagRecTipo",gxvar:"A1365TipoBaixaTransacaoPagRecTipo",ucs:[],op:[140],ip:[140],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A1365TipoBaixaTransacaoPagRecTipo=Value},v2z:function(Value){gx.O.Z1365TipoBaixaTransacaoPagRecTipo=Value},v2c:function(){gx.fn.setComboBoxValue("TIPOBAIXATRANSACAOPAGRECTIPO",gx.O.A1365TipoBaixaTransacaoPagRecTipo);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1365TipoBaixaTransacaoPagRecTipo=this.val()},val:function(){return gx.fn.getControlValue("TIPOBAIXATRANSACAOPAGRECTIPO")},nac:gx.falseFn};
   this.declareDomainHdlr( 140 , function() {
   });
   GXValidFnc[141]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobaixatransacaopagrecid,isvalid:null,rgrid:[],fld:"TIPOBAIXATRANSACAOPAGRECID",gxz:"Z1366TipoBaixaTransacaoPagRecId",gxold:"O1366TipoBaixaTransacaoPagRecId",gxvar:"A1366TipoBaixaTransacaoPagRecId",ucs:[],op:[141],ip:[140,141],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1366TipoBaixaTransacaoPagRecId=Value},v2z:function(Value){gx.O.Z1366TipoBaixaTransacaoPagRecId=Value},v2c:function(){gx.fn.setControlValue("TIPOBAIXATRANSACAOPAGRECID",gx.O.A1366TipoBaixaTransacaoPagRecId,0)},c2v:function(){gx.O.A1366TipoBaixaTransacaoPagRecId=this.val()},val:function(){return gx.fn.getControlValue("TIPOBAIXATRANSACAOPAGRECID")},nac:gx.falseFn};
   GXValidFnc[147]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[153]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[155]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Caixabancoid,isvalid:null,rgrid:[],fld:"CAIXABANCOID",gxz:"Z1015CaixaBancoId",gxold:"O1015CaixaBancoId",gxvar:"A1015CaixaBancoId",ucs:[],op:[156],ip:[156,155],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1015CaixaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1015CaixaBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CAIXABANCOID",gx.O.A1015CaixaBancoId,0)},c2v:function(){gx.O.A1015CaixaBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CAIXABANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[156]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CAIXABANCODESCRICAO",gxz:"Z1017CaixaBancoDescricao",gxold:"O1017CaixaBancoDescricao",gxvar:"A1017CaixaBancoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1017CaixaBancoDescricao=Value},v2z:function(Value){gx.O.Z1017CaixaBancoDescricao=Value},v2c:function(){gx.fn.setControlValue("CAIXABANCODESCRICAO",gx.O.A1017CaixaBancoDescricao,0)},c2v:function(){gx.O.A1017CaixaBancoDescricao=this.val()},val:function(){return gx.fn.getControlValue("CAIXABANCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[159]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[161]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobaixahistoricoid,isvalid:null,rgrid:[],fld:"TIPOBAIXAHISTORICOID",gxz:"Z10130TipoBaixaHistoricoId",gxold:"O10130TipoBaixaHistoricoId",gxvar:"A10130TipoBaixaHistoricoId",ucs:[],op:[178,176,162],ip:[178,176,162,155,31,141,140,89,83,123,117,111,105,61,56,35,66,27,23,50,45,40,15,161],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10130TipoBaixaHistoricoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10130TipoBaixaHistoricoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPOBAIXAHISTORICOID",gx.O.A10130TipoBaixaHistoricoId,0)},c2v:function(){gx.O.A10130TipoBaixaHistoricoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPOBAIXAHISTORICOID",'.')},nac:gx.falseFn};
   GXValidFnc[162]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBAIXAHISTORICODESC",gxz:"Z10134TipoBaixaHistoricoDesc",gxold:"O10134TipoBaixaHistoricoDesc",gxvar:"A10134TipoBaixaHistoricoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10134TipoBaixaHistoricoDesc=Value},v2z:function(Value){gx.O.Z10134TipoBaixaHistoricoDesc=Value},v2c:function(){gx.fn.setControlValue("TIPOBAIXAHISTORICODESC",gx.O.A10134TipoBaixaHistoricoDesc,0)},c2v:function(){gx.O.A10134TipoBaixaHistoricoDesc=this.val()},val:function(){return gx.fn.getControlValue("TIPOBAIXAHISTORICODESC")},nac:gx.falseFn};
   GXValidFnc[165]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[167]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobaixahistoricodebid,isvalid:null,rgrid:[],fld:"TIPOBAIXAHISTORICODEBID",gxz:"Z10128TipoBaixaHistoricoDebId",gxold:"O10128TipoBaixaHistoricoDebId",gxvar:"A10128TipoBaixaHistoricoDebId",ucs:[],op:[168],ip:[168,161,141,140,134,129,123,117,111,66,61,56,45,40,15,167],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10128TipoBaixaHistoricoDebId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10128TipoBaixaHistoricoDebId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPOBAIXAHISTORICODEBID",gx.O.A10128TipoBaixaHistoricoDebId,0)},c2v:function(){gx.O.A10128TipoBaixaHistoricoDebId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPOBAIXAHISTORICODEBID",'.')},nac:gx.falseFn};
   GXValidFnc[168]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBAIXAHISTORICODEBDESC",gxz:"Z10132TipoBaixaHistoricoDebDesc",gxold:"O10132TipoBaixaHistoricoDebDesc",gxvar:"A10132TipoBaixaHistoricoDebDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10132TipoBaixaHistoricoDebDesc=Value},v2z:function(Value){gx.O.Z10132TipoBaixaHistoricoDebDesc=Value},v2c:function(){gx.fn.setControlValue("TIPOBAIXAHISTORICODEBDESC",gx.O.A10132TipoBaixaHistoricoDebDesc,0)},c2v:function(){gx.O.A10132TipoBaixaHistoricoDebDesc=this.val()},val:function(){return gx.fn.getControlValue("TIPOBAIXAHISTORICODEBDESC")},nac:gx.falseFn};
   GXValidFnc[171]={fld:"TABLE2",grid:0};
   GXValidFnc[174]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[176]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBAIXAUSUARIOALT",gxz:"Z1093TipoBaixaUsuarioAlt",gxold:"O1093TipoBaixaUsuarioAlt",gxvar:"A1093TipoBaixaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1093TipoBaixaUsuarioAlt=Value},v2z:function(Value){gx.O.Z1093TipoBaixaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("TIPOBAIXAUSUARIOALT",gx.O.A1093TipoBaixaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1093TipoBaixaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("TIPOBAIXAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 176 , function() {
   });
   GXValidFnc[178]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBAIXADATAHORAALT",gxz:"Z1094TipoBaixaDataHoraAlt",gxold:"O1094TipoBaixaDataHoraAlt",gxvar:"A1094TipoBaixaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1094TipoBaixaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1094TipoBaixaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TIPOBAIXADATAHORAALT",gx.O.A1094TipoBaixaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1094TipoBaixaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("TIPOBAIXADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 178 , function() {
   });
   GXValidFnc[187]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV53AcessoSistemaSequencia",gxold:"OV53AcessoSistemaSequencia",gxvar:"AV53AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV53AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV53AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV53AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[189]={fld:"JS", format:2,grid:0};
   GXValidFnc[191]={fld:"BTNHELP",grid:0};
   GXValidFnc[193]={fld:"PROMPT_942",grid:140};
   GXValidFnc[194]={fld:"PROMPT_1064",grid:140};
   GXValidFnc[195]={fld:"PROMPT_1061",grid:140};
   GXValidFnc[196]={fld:"PROMPT_1071",grid:140};
   GXValidFnc[197]={fld:"PROMPT_1074",grid:140};
   GXValidFnc[198]={fld:"PROMPT_1068",grid:140};
   GXValidFnc[199]={fld:"PROMPT_9393",grid:140};
   GXValidFnc[200]={fld:"PROMPT_1365_1366",grid:140};
   GXValidFnc[201]={fld:"PROMPT_1015",grid:140};
   GXValidFnc[202]={fld:"PROMPT_10130",grid:140};
   GXValidFnc[203]={fld:"PROMPT_10128",grid:140};
   this.A1049TipoBaixaPagRec = "" ;
   this.Z1049TipoBaixaPagRec = "" ;
   this.O1049TipoBaixaPagRec = "" ;
   this.A1056TipoBaixaSnCopiaObs = "" ;
   this.Z1056TipoBaixaSnCopiaObs = "" ;
   this.O1056TipoBaixaSnCopiaObs = "" ;
   this.A1057TipoBaixaSnPartePagto = "" ;
   this.Z1057TipoBaixaSnPartePagto = "" ;
   this.O1057TipoBaixaSnPartePagto = "" ;
   this.A2208TipoBaixaZerarCCusto = "" ;
   this.Z2208TipoBaixaZerarCCusto = "" ;
   this.O2208TipoBaixaZerarCCusto = "" ;
   this.A1059TipoBaixaSnFaturado = "" ;
   this.Z1059TipoBaixaSnFaturado = "" ;
   this.O1059TipoBaixaSnFaturado = "" ;
   this.A1053TipoBaixaSigla = "" ;
   this.Z1053TipoBaixaSigla = "" ;
   this.O1053TipoBaixaSigla = "" ;
   this.A1054TipoBaixaDescricao = "" ;
   this.Z1054TipoBaixaDescricao = "" ;
   this.O1054TipoBaixaDescricao = "" ;
   this.A1055TipoBaixaPcDescPagDia = 0 ;
   this.Z1055TipoBaixaPcDescPagDia = 0 ;
   this.O1055TipoBaixaPcDescPagDia = 0 ;
   this.A1050TipoBaixaTipoCaixaBanco = "" ;
   this.Z1050TipoBaixaTipoCaixaBanco = "" ;
   this.O1050TipoBaixaTipoCaixaBanco = "" ;
   this.A1066TipoBaixaTipoEmissaoDoc = "" ;
   this.Z1066TipoBaixaTipoEmissaoDoc = "" ;
   this.O1066TipoBaixaTipoEmissaoDoc = "" ;
   this.A1058TipoBaixaSnAgrupa = "" ;
   this.Z1058TipoBaixaSnAgrupa = "" ;
   this.O1058TipoBaixaSnAgrupa = "" ;
   this.A2901TipoBaixaQtdeContas = "" ;
   this.Z2901TipoBaixaQtdeContas = "" ;
   this.O2901TipoBaixaQtdeContas = "" ;
   this.A942TipoContaId = 0 ;
   this.Z942TipoContaId = 0 ;
   this.O942TipoContaId = 0 ;
   this.A943TipoContaDescricao = "" ;
   this.Z943TipoContaDescricao = "" ;
   this.O943TipoContaDescricao = "" ;
   this.A1064TpCobrancaTpBaixaId = 0 ;
   this.Z1064TpCobrancaTpBaixaId = 0 ;
   this.O1064TpCobrancaTpBaixaId = 0 ;
   this.A1065TpCobrancaTpBaixaDescricao = "" ;
   this.Z1065TpCobrancaTpBaixaDescricao = "" ;
   this.O1065TpCobrancaTpBaixaDescricao = "" ;
   this.A1061NovoTipoCobrancaId = 0 ;
   this.Z1061NovoTipoCobrancaId = 0 ;
   this.O1061NovoTipoCobrancaId = 0 ;
   this.A1062NovoTipoCobrancaDescricao = "" ;
   this.Z1062NovoTipoCobrancaDescricao = "" ;
   this.O1062NovoTipoCobrancaDescricao = "" ;
   this.A1071LancamentoAcrescimoId = 0 ;
   this.Z1071LancamentoAcrescimoId = 0 ;
   this.O1071LancamentoAcrescimoId = 0 ;
   this.A1072LancamentoAcrescimoDescricao = "" ;
   this.Z1072LancamentoAcrescimoDescricao = "" ;
   this.O1072LancamentoAcrescimoDescricao = "" ;
   this.A1074LancamentoDescontoId = 0 ;
   this.Z1074LancamentoDescontoId = 0 ;
   this.O1074LancamentoDescontoId = 0 ;
   this.A1075LancamentoDescontoDescricao = "" ;
   this.Z1075LancamentoDescontoDescricao = "" ;
   this.O1075LancamentoDescontoDescricao = "" ;
   this.A1068LancamentoBaixaId = 0 ;
   this.Z1068LancamentoBaixaId = 0 ;
   this.O1068LancamentoBaixaId = 0 ;
   this.A1069LancamentoBaixaDescricao = "" ;
   this.Z1069LancamentoBaixaDescricao = "" ;
   this.O1069LancamentoBaixaDescricao = "" ;
   this.A9395TipoBaixaPercAdiJuros = 0 ;
   this.Z9395TipoBaixaPercAdiJuros = 0 ;
   this.O9395TipoBaixaPercAdiJuros = 0 ;
   this.A9393LancamentoAdiJurosId = 0 ;
   this.Z9393LancamentoAdiJurosId = 0 ;
   this.O9393LancamentoAdiJurosId = 0 ;
   this.A9394LancamentoAdiJurosDescricao = "" ;
   this.Z9394LancamentoAdiJurosDescricao = "" ;
   this.O9394LancamentoAdiJurosDescricao = "" ;
   this.A1365TipoBaixaTransacaoPagRecTipo = "" ;
   this.Z1365TipoBaixaTransacaoPagRecTipo = "" ;
   this.O1365TipoBaixaTransacaoPagRecTipo = "" ;
   this.A1366TipoBaixaTransacaoPagRecId = "" ;
   this.Z1366TipoBaixaTransacaoPagRecId = "" ;
   this.O1366TipoBaixaTransacaoPagRecId = "" ;
   this.A1015CaixaBancoId = 0 ;
   this.Z1015CaixaBancoId = 0 ;
   this.O1015CaixaBancoId = 0 ;
   this.A1017CaixaBancoDescricao = "" ;
   this.Z1017CaixaBancoDescricao = "" ;
   this.O1017CaixaBancoDescricao = "" ;
   this.A10130TipoBaixaHistoricoId = 0 ;
   this.Z10130TipoBaixaHistoricoId = 0 ;
   this.O10130TipoBaixaHistoricoId = 0 ;
   this.A10134TipoBaixaHistoricoDesc = "" ;
   this.Z10134TipoBaixaHistoricoDesc = "" ;
   this.O10134TipoBaixaHistoricoDesc = "" ;
   this.A10128TipoBaixaHistoricoDebId = 0 ;
   this.Z10128TipoBaixaHistoricoDebId = 0 ;
   this.O10128TipoBaixaHistoricoDebId = 0 ;
   this.A10132TipoBaixaHistoricoDebDesc = "" ;
   this.Z10132TipoBaixaHistoricoDebDesc = "" ;
   this.O10132TipoBaixaHistoricoDebDesc = "" ;
   this.A1093TipoBaixaUsuarioAlt = "" ;
   this.Z1093TipoBaixaUsuarioAlt = "" ;
   this.O1093TipoBaixaUsuarioAlt = "" ;
   this.A1094TipoBaixaDataHoraAlt = gx.date.nullDate() ;
   this.Z1094TipoBaixaDataHoraAlt = gx.date.nullDate() ;
   this.O1094TipoBaixaDataHoraAlt = gx.date.nullDate() ;
   this.AV53AcessoSistemaSequencia = 0 ;
   this.ZV53AcessoSistemaSequencia = 0 ;
   this.OV53AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV73Pgmname = "" ;
   this.AV74Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV53AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV20EmpresaPadraoTpCobranca = "" ;
   this.AV23EmpresaPadraoTpLanc = "" ;
   this.AV24EmpresaPadraoTpConta = "" ;
   this.AV25EmpresaPadraoHistCxaBanco = "" ;
   this.AV26EmpresaPadraoCxaBanco = "" ;
   this.AV37EmpresaPadraoTransPagRec = "" ;
   this.AV40TrabCaixasBancos = "" ;
   this.AV44CampDefaultTrabCxBco = "" ;
   this.AV27ErroLancAcrescimo = "" ;
   this.AV39ErroLancBaixa = "" ;
   this.AV38ErroLancDesconto = "" ;
   this.AV42QtdeHistCxaBco = 0 ;
   this.AV62Nao = "" ;
   this.AV22ret = 0 ;
   this.AV17TipoBaixaEmpresaId = "" ;
   this.AV70TipoBaixaPagRecParm = "" ;
   this.AV19TipoBaixaSigla = "" ;
   this.A1052TipoBaixaEmpresaId = "" ;
   this.A1049TipoBaixaPagRec = "" ;
   this.A1053TipoBaixaSigla = "" ;
   this.A1366TipoBaixaTransacaoPagRecId = "" ;
   this.A941TipoContaEmpresaId = "" ;
   this.A1063TpCobrancaTpBaixaEmpresaId = "" ;
   this.A1060NovoTipoCobrancaEmpresaId = "" ;
   this.A1070LancamentoAcrescimoEmpresaId = "" ;
   this.A1073LancamentoDescontoEmpresaId = "" ;
   this.A1067LancamentoBaixaEmpresaId = "" ;
   this.A9392LancamentoAdiJurosEmpId = "" ;
   this.A10129TipoBaixaHistoricoEmpId = "" ;
   this.A10127TipoBaixaHistoricoDebEmpId = "" ;
   this.A1014CaixaBancoEmpresaId = "" ;
   this.A1364TipoBaixaTransacaoPagRecEmpres = "" ;
   this.AV66TipoBaixaTipoCaixaBanco = "" ;
   this.AV67TipoBaixaTipoEmissaoDoc = "" ;
   this.AV18TipoBaixaPagRec = "" ;
   this.AV68LancamentoAdiJurosId = 0 ;
   this.AV71TipoBaixaPercAdiJuros = 0 ;
   this.AV69TipoBaixaTransacaoPagRecTipo = "" ;
   this.A1093TipoBaixaUsuarioAlt = "" ;
   this.A1094TipoBaixaDataHoraAlt = gx.date.nullDate() ;
   this.Gx_BScreen = 0 ;
   this.A1054TipoBaixaDescricao = "" ;
   this.A1055TipoBaixaPcDescPagDia = 0 ;
   this.A1056TipoBaixaSnCopiaObs = "" ;
   this.A1057TipoBaixaSnPartePagto = "" ;
   this.A2208TipoBaixaZerarCCusto = "" ;
   this.A1059TipoBaixaSnFaturado = "" ;
   this.A1050TipoBaixaTipoCaixaBanco = "" ;
   this.A1066TipoBaixaTipoEmissaoDoc = "" ;
   this.A1058TipoBaixaSnAgrupa = "" ;
   this.A2901TipoBaixaQtdeContas = "" ;
   this.A942TipoContaId = 0 ;
   this.A943TipoContaDescricao = "" ;
   this.A1064TpCobrancaTpBaixaId = 0 ;
   this.A1065TpCobrancaTpBaixaDescricao = "" ;
   this.A1061NovoTipoCobrancaId = 0 ;
   this.A1062NovoTipoCobrancaDescricao = "" ;
   this.A2199NovoTipoCobrancaFormaCob = "" ;
   this.A1071LancamentoAcrescimoId = 0 ;
   this.A1072LancamentoAcrescimoDescricao = "" ;
   this.A9614LancamentoAcrescimoPagRec = "" ;
   this.A9615LancamentoAcrescimoTipo = "" ;
   this.A9616LancamentoAcrescimoEstorno = "" ;
   this.A1074LancamentoDescontoId = 0 ;
   this.A1075LancamentoDescontoDescricao = "" ;
   this.A9617LancamentoDescontoPagRec = "" ;
   this.A9618LancamentoDescontoTipo = "" ;
   this.A9619LancamentoDescontoEstorno = "" ;
   this.A1068LancamentoBaixaId = 0 ;
   this.A1069LancamentoBaixaDescricao = "" ;
   this.A9620LancamentoBaixaPagRec = "" ;
   this.A9621LancamentoBaixaTipo = "" ;
   this.A9622LancamentoBaixaEstorno = "" ;
   this.A9395TipoBaixaPercAdiJuros = 0 ;
   this.A9393LancamentoAdiJurosId = 0 ;
   this.A9394LancamentoAdiJurosDescricao = "" ;
   this.A9623LancamentoAdiJurosPagRec = "" ;
   this.A9624LancamentoAdiJurosEstorno = "" ;
   this.A9625LancamentoAdiJurosTipo = "" ;
   this.A1365TipoBaixaTransacaoPagRecTipo = "" ;
   this.A1015CaixaBancoId = 0 ;
   this.A1017CaixaBancoDescricao = "" ;
   this.A10130TipoBaixaHistoricoId = 0 ;
   this.A10134TipoBaixaHistoricoDesc = "" ;
   this.A10135TipoBaixaHistoricoTipo = "" ;
   this.A10128TipoBaixaHistoricoDebId = 0 ;
   this.A10132TipoBaixaHistoricoDebDesc = "" ;
   this.A10133TipoBaixaHistoricoDebTipo = "" ;
   this.AV63Tab = [ ] ;
   this.Gx_mode = "" ;
   this.Events = {"e122j2_client": ["'FECHAR'", true] ,"e132j2_client": ["AFTER TRN", true] ,"e142j140_client": ["ENTER", true] ,"e152j140_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17TipoBaixaEmpresaId',fld:'vTIPOBAIXAEMPRESAID'},{av:'AV70TipoBaixaPagRecParm',fld:'vTIPOBAIXAPAGRECPARM'},{av:'AV19TipoBaixaSigla',fld:'vTIPOBAIXASIGLA'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV53AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'A1052TipoBaixaEmpresaId',fld:'TIPOBAIXAEMPRESAID'},{av:'A1049TipoBaixaPagRec',fld:'TIPOBAIXAPAGREC'},{av:'A1053TipoBaixaSigla',fld:'TIPOBAIXASIGLA'},{av:'AV53AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_942", [83]);
   this.setPrompt("PROMPT_1064", [89]);
   this.setPrompt("PROMPT_1061", [105]);
   this.setPrompt("PROMPT_1071", [111]);
   this.setPrompt("PROMPT_1074", [117]);
   this.setPrompt("PROMPT_1068", [123]);
   this.setPrompt("PROMPT_9393", [134]);
   this.setPrompt("PROMPT_1365_1366", [140,141]);
   this.setPrompt("PROMPT_1015", [155]);
   this.setPrompt("PROMPT_10130", [161]);
   this.setPrompt("PROMPT_10128", [167]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV70TipoBaixaPagRecParm", "vTIPOBAIXAPAGRECPARM", 0, "char");
   this.setVCMap("AV19TipoBaixaSigla", "vTIPOBAIXASIGLA", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A1052TipoBaixaEmpresaId", "TIPOBAIXAEMPRESAID", 0, "char");
   this.setVCMap("AV24EmpresaPadraoTpConta", "vEMPRESAPADRAOTPCONTA", 0, "char");
   this.setVCMap("A941TipoContaEmpresaId", "TIPOCONTAEMPRESAID", 0, "char");
   this.setVCMap("AV20EmpresaPadraoTpCobranca", "vEMPRESAPADRAOTPCOBRANCA", 0, "char");
   this.setVCMap("A1063TpCobrancaTpBaixaEmpresaId", "TPCOBRANCATPBAIXAEMPRESAID", 0, "char");
   this.setVCMap("A1060NovoTipoCobrancaEmpresaId", "NOVOTIPOCOBRANCAEMPRESAID", 0, "char");
   this.setVCMap("AV23EmpresaPadraoTpLanc", "vEMPRESAPADRAOTPLANC", 0, "char");
   this.setVCMap("A1070LancamentoAcrescimoEmpresaId", "LANCAMENTOACRESCIMOEMPRESAID", 0, "char");
   this.setVCMap("A1073LancamentoDescontoEmpresaId", "LANCAMENTODESCONTOEMPRESAID", 0, "char");
   this.setVCMap("A1067LancamentoBaixaEmpresaId", "LANCAMENTOBAIXAEMPRESAID", 0, "char");
   this.setVCMap("A9392LancamentoAdiJurosEmpId", "LANCAMENTOADIJUROSEMPID", 0, "char");
   this.setVCMap("AV25EmpresaPadraoHistCxaBanco", "vEMPRESAPADRAOHISTCXABANCO", 0, "char");
   this.setVCMap("A10129TipoBaixaHistoricoEmpId", "TIPOBAIXAHISTORICOEMPID", 0, "char");
   this.setVCMap("A10127TipoBaixaHistoricoDebEmpId", "TIPOBAIXAHISTORICODEBEMPID", 0, "char");
   this.setVCMap("AV26EmpresaPadraoCxaBanco", "vEMPRESAPADRAOCXABANCO", 0, "char");
   this.setVCMap("A1014CaixaBancoEmpresaId", "CAIXABANCOEMPRESAID", 0, "char");
   this.setVCMap("AV37EmpresaPadraoTransPagRec", "vEMPRESAPADRAOTRANSPAGREC", 0, "char");
   this.setVCMap("A1364TipoBaixaTransacaoPagRecEmpres", "TIPOBAIXATRANSACAOPAGRECEMPRES", 0, "char");
   this.setVCMap("AV40TrabCaixasBancos", "vTRABCAIXASBANCOS", 0, "svchar");
   this.setVCMap("AV66TipoBaixaTipoCaixaBanco", "vTIPOBAIXATIPOCAIXABANCO", 0, "char");
   this.setVCMap("AV67TipoBaixaTipoEmissaoDoc", "vTIPOBAIXATIPOEMISSAODOC", 0, "char");
   this.setVCMap("AV18TipoBaixaPagRec", "vTIPOBAIXAPAGREC", 0, "char");
   this.setVCMap("A9614LancamentoAcrescimoPagRec", "LANCAMENTOACRESCIMOPAGREC", 0, "char");
   this.setVCMap("A9615LancamentoAcrescimoTipo", "LANCAMENTOACRESCIMOTIPO", 0, "char");
   this.setVCMap("A9616LancamentoAcrescimoEstorno", "LANCAMENTOACRESCIMOESTORNO", 0, "char");
   this.setVCMap("A9617LancamentoDescontoPagRec", "LANCAMENTODESCONTOPAGREC", 0, "char");
   this.setVCMap("A9618LancamentoDescontoTipo", "LANCAMENTODESCONTOTIPO", 0, "char");
   this.setVCMap("A9619LancamentoDescontoEstorno", "LANCAMENTODESCONTOESTORNO", 0, "char");
   this.setVCMap("A9620LancamentoBaixaPagRec", "LANCAMENTOBAIXAPAGREC", 0, "char");
   this.setVCMap("A9621LancamentoBaixaTipo", "LANCAMENTOBAIXATIPO", 0, "char");
   this.setVCMap("A9622LancamentoBaixaEstorno", "LANCAMENTOBAIXAESTORNO", 0, "char");
   this.setVCMap("AV68LancamentoAdiJurosId", "vLANCAMENTOADIJUROSID", 0, "int");
   this.setVCMap("AV71TipoBaixaPercAdiJuros", "vTIPOBAIXAPERCADIJUROS", 0, "decimal");
   this.setVCMap("A9623LancamentoAdiJurosPagRec", "LANCAMENTOADIJUROSPAGREC", 0, "char");
   this.setVCMap("A9624LancamentoAdiJurosEstorno", "LANCAMENTOADIJUROSESTORNO", 0, "char");
   this.setVCMap("A9625LancamentoAdiJurosTipo", "LANCAMENTOADIJUROSTIPO", 0, "char");
   this.setVCMap("AV69TipoBaixaTransacaoPagRecTipo", "vTIPOBAIXATRANSACAOPAGRECTIPO", 0, "char");
   this.setVCMap("A10135TipoBaixaHistoricoTipo", "TIPOBAIXAHISTORICOTIPO", 0, "char");
   this.setVCMap("A10133TipoBaixaHistoricoDebTipo", "TIPOBAIXAHISTORICODEBTIPO", 0, "char");
   this.setVCMap("AV22ret", "vRET", 0, "int");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV44CampDefaultTrabCxBco", "vCAMPDEFAULTTRABCXBCO", 0, "char");
   this.setVCMap("A2199NovoTipoCobrancaFormaCob", "NOVOTIPOCOBRANCAFORMACOB", 0, "char");
   this.setVCMap("AV74Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV73Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV62Nao", "vNAO", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV17TipoBaixaEmpresaId", "vTIPOBAIXAEMPRESAID", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 140 ]= ["O1015CaixaBancoId","O2208TipoBaixaZerarCCusto","O1366TipoBaixaTransacaoPagRecId","O1365TipoBaixaTransacaoPagRecTipo","O1064TpCobrancaTpBaixaId","O942TipoContaId","O10130TipoBaixaHistoricoId","O1068LancamentoBaixaId","O1074LancamentoDescontoId","O1071LancamentoAcrescimoId","O1061NovoTipoCobrancaId","O1066TipoBaixaTipoEmissaoDoc","O1050TipoBaixaTipoCaixaBanco","O1059TipoBaixaSnFaturado","O1058TipoBaixaSnAgrupa","O1057TipoBaixaSnPartePagto","O1056TipoBaixaSnCopiaObs","O1055TipoBaixaPcDescPagDia","O1054TipoBaixaDescricao","O1053TipoBaixaSigla","O1049TipoBaixaPagRec"] ;
});
gx.setParentObj(new ttipobaixa());
