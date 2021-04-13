/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:0:14.98
*/
gx.evt.autoSkip = false;
gx.define('hrelacaoprodutos', false, function () {
   this.ServerClass =  "hrelacaoprodutos" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV121EsquemaUnico=gx.fn.getControlValue("vESQUEMAUNICO") ;
      this.AV150SNLoteUnico=gx.fn.getControlValue("vSNLOTEUNICO") ;
      this.A2915EsquemaCodigo=gx.fn.getIntegerValue("ESQUEMACODIGO",'.') ;
      this.A2912EsquemaDescricao=gx.fn.getControlValue("ESQUEMADESCRICAO") ;
      this.AV186FilialIdParm=gx.fn.getControlValue("vFILIALIDPARM") ;
      this.A1228FilialEmpresaId=gx.fn.getControlValue("FILIALEMPRESAID") ;
      this.A1156FilialId=gx.fn.getIntegerValue("FILIALID",'.') ;
      this.A1136FilialNome=gx.fn.getControlValue("FILIALNOME") ;
      this.AV202Mensagem=gx.fn.getControlValue("vMENSAGEM") ;
      this.AV218Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV209SdtTxtTela=gx.fn.getControlValue("vSDTTXTTELA") ;
      this.AV8EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
      this.AV116SNNovaLinhaProduto=gx.fn.getControlValue("vSNNOVALINHAPRODUTO") ;
      this.AV23snErro=gx.fn.getControlValue("vSNERRO") ;
      this.AV82snExcluiProduto=gx.fn.getControlValue("vSNEXCLUIPRODUTO") ;
      this.AV182SNNovaLinhaFamilia=gx.fn.getControlValue("vSNNOVALINHAFAMILIA") ;
      this.AV84snExcluiFamilia=gx.fn.getControlValue("vSNEXCLUIFAMILIA") ;
      this.AV183SNNovaLinhaFabricante=gx.fn.getControlValue("vSNNOVALINHAFABRICANTE") ;
      this.AV101snExcluiFabricante=gx.fn.getControlValue("vSNEXCLUIFABRICANTE") ;
      this.AV184SNNovaLinhaClassificacao=gx.fn.getControlValue("vSNNOVALINHACLASSIFICACAO") ;
      this.AV108snExcluiClassificacao=gx.fn.getControlValue("vSNEXCLUICLASSIFICACAO") ;
      this.AV185SNNovaLinhaCodificacao=gx.fn.getControlValue("vSNNOVALINHACODIFICACAO") ;
      this.AV115snExcluiCodificacao=gx.fn.getControlValue("vSNEXCLUICODIFICACAO") ;
      this.AV33SNClassificacaoCompleta=gx.fn.getControlValue("vSNCLASSIFICACAOCOMPLETA") ;
      this.AV34SNCodificacaoCompleta=gx.fn.getControlValue("vSNCODIFICACAOCOMPLETA") ;
      this.AV144SNSimilares=gx.fn.getControlValue("vSNSIMILARES") ;
      this.AV136OrdenacaoDescricaoAux=gx.fn.getControlValue("vORDENACAODESCRICAOAUX") ;
      this.AV198OrdenacaoDescricao2=gx.fn.getControlValue("vORDENACAODESCRICAO2") ;
      this.AV17QtdPagGeradas=gx.fn.getIntegerValue("vQTDPAGGERADAS",'.') ;
      this.AV38FilialId=gx.fn.getIntegerValue("vFILIALID",'.') ;
      this.AV71SdtProdutoRelProduto=gx.fn.getControlValue("vSDTPRODUTORELPRODUTO") ;
      this.AV57SdtFamiliaRelProduto=gx.fn.getControlValue("vSDTFAMILIARELPRODUTO") ;
      this.AV99SdtFabricanteRelProduto=gx.fn.getControlValue("vSDTFABRICANTERELPRODUTO") ;
      this.AV106SdtClassificacaoRelProduto=gx.fn.getControlValue("vSDTCLASSIFICACAORELPRODUTO") ;
      this.AV113SdtCodificacaoRelProduto=gx.fn.getControlValue("vSDTCODIFICACAORELPRODUTO") ;
      this.AV196SdtFiliais=gx.fn.getControlValue("vSDTFILIAIS") ;
      this.AV195SNAgruparQtFilial=gx.fn.getControlValue("vSNAGRUPARQTFILIAL") ;
      this.AV219Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV137OdenacaoAux=gx.fn.getControlValue("vODENACAOAUX") ;
      this.A3227ParametroConsultaEmpresaId=gx.fn.getControlValue("PARAMETROCONSULTAEMPRESAID") ;
      this.A3228ParametroConsultaCodigo=gx.fn.getIntegerValue("PARAMETROCONSULTACODIGO",'.') ;
      this.A3215ParametroConsultaDescricao=gx.fn.getControlValue("PARAMETROCONSULTADESCRICAO") ;
   };
   this.Validv_Parametroconsultacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPARAMETROCONSULTACODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtosncontrolaestoque=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOSNCONTROLAESTOQUE");
         this.AnyError  = 0;
         if ( ! ( this.AV46ProdutoSNControlaEstoque == "N" || this.AV46ProdutoSNControlaEstoque == "S" ) )
         {
            try {
               gxballoon.setError("Campo ProdutoSNControlaEstoque fora do intervalo");
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
   this.Validv_Esquemacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vESQUEMACODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtofamiliaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOFAMILIAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtofabricanteid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOFABRICANTEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Classificacaoestidgrid=function()
   {
      gx.ajax.validSrvEvt("dyncall","validv_Classificacaoestidgrid",["gx.O.AV102ClassificacaoEstIdGrid", "gx.O.AV105ProdutoClassificacaoValor"],["AV105ProdutoClassificacaoValor"]);
      return true;
   }
   this.Validv_Codificacaoestidgrid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCODIFICACAOESTIDGRID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Codificacaoestempresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","validv_Codificacaoestempresaid",["gx.O.AV43CodificacaoEstEmpresaId", "gx.O.AV109CodificacaoEstIdGrid"],["AV109CodificacaoEstIdGrid"]);
      return true;
   }
   this.Validv_Pessoaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Gx_date=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTODAY");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Familiaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFAMILIAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Classificacaoestempresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","validv_Classificacaoestempresaid",["gx.O.AV42ClassificacaoEstEmpresaId", "gx.O.AV102ClassificacaoEstIdGrid"],["AV102ClassificacaoEstIdGrid"]);
      return true;
   }
   this.Validv_Parametroconsultaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPARAMETROCONSULTAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Filialempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Codificacaoestidgrid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCODIFICACAOESTIDGRID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Classificacaoestidgrid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCLASSIFICACAOESTIDGRID");
         this.AnyError  = 0;
         gxajaxCallCrl(["AV102ClassificacaoEstIdGrid"],"vPRODUTOCLASSIFICACAOVALOR");
      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtofabricanteid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOFABRICANTEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtofamiliaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOFAMILIAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s182_client=function()
   {
      this.AV23snErro =  "N"  ;
      /* Start For Each Line in Gridclassificacao */
      var rowIdx253 = 1 ;
      var currentRowIdx253 = gx.fn.currentGridRowImpl(253) ;
      var rowIdxS253 ;
      var gridObj253 = gx.O.getGridById(253,0) ;
      while ( rowIdx253 <= gridObj253.grid.rows.length )
      {
         rowIdxS253 =  gx.text.padl( gx.text.tostring( rowIdx253), 4, "0")  ;
         gridObj253.instanciateRow(gridObj253.grid.getRowById(rowIdx253 - 1));
         if ( (""==this.AV102ClassificacaoEstIdGrid) && this.AV184SNNovaLinhaClassificacao == "S" || ( (""==this.AV102ClassificacaoEstIdGrid) && ! (""==this.AV105ProdutoClassificacaoValor) ) )
         {
            this.addMessage("Informe a Classificação");
            this.AV23snErro =  "S"  ;
         }
         if ( ! (""==this.AV102ClassificacaoEstIdGrid) && (""==this.AV105ProdutoClassificacaoValor) )
         {
            this.addMessage("Informe o Valor da Classificação");
            this.AV23snErro =  "S"  ;
         }
         if ( this.AV23snErro == "S" )
         {
            this.TABCSSContainer.setPosition(4) ;
         }
         rowIdx253 = gx.num.trunc( rowIdx253 + 1 ,0) ;
      }
      if ( currentRowIdx253 )
      {
         gridObj253.instanciateRow(currentRowIdx253);
      }
   };
   this.s206_client=function()
   {
      if ( this.AV134ParametroConsultaCampoCod == "classificacaoabc" )
      {
         if ( gx.text.length( this.AV138ParametroConsultaCampoTitulo) <= 1 )
         {
            this.AV135QtdeCaracterRelatorio = gx.num.trunc( this.AV135QtdeCaracterRelatorio + 3 ,0) ;
         }
         else
         {
            this.AV135QtdeCaracterRelatorio = gx.num.trunc( this.AV135QtdeCaracterRelatorio + ( gx.text.length( this.AV138ParametroConsultaCampoTitulo) + 2 ) ,0) ;
         }
      }
      else if ( this.AV134ParametroConsultaCampoCod == "produtotipo" )
      {
         if ( gx.text.length( this.AV138ParametroConsultaCampoTitulo) <= 2 )
         {
            this.AV135QtdeCaracterRelatorio = gx.num.trunc( this.AV135QtdeCaracterRelatorio + 4 ,0) ;
         }
         else
         {
            this.AV135QtdeCaracterRelatorio = gx.num.trunc( this.AV135QtdeCaracterRelatorio + ( gx.text.length( this.AV138ParametroConsultaCampoTitulo) + 2 ) ,0) ;
         }
      }
      else if ( this.AV134ParametroConsultaCampoCod == "grupoprodutoid" || this.AV134ParametroConsultaCampoCod == "subgrupoprodutoid" || this.AV134ParametroConsultaCampoCod == "produtomesesgarantia" || this.AV134ParametroConsultaCampoCod == "produtounidadecompraid" || this.AV134ParametroConsultaCampoCod == "produtounidadevendaid" || this.AV134ParametroConsultaCampoCod == "csticmsentdentroestado" || this.AV134ParametroConsultaCampoCod == "csticmsentforaestado" || this.AV134ParametroConsultaCampoCod == "csticmssaidadentroestado" || this.AV134ParametroConsultaCampoCod == "csticmssaidaforaestado" || this.AV134ParametroConsultaCampoCod == "cstipientrada" || this.AV134ParametroConsultaCampoCod == "cstipisaida" || this.AV134ParametroConsultaCampoCod == "cstpisentrada" || this.AV134ParametroConsultaCampoCod == "cstpissaida" || this.AV134ParametroConsultaCampoCod == "cstpisexterior" || this.AV134ParametroConsultaCampoCod == "cstcofinsentrada" || this.AV134ParametroConsultaCampoCod == "cstcofinssaida" || this.AV134ParametroConsultaCampoCod == "cstcofinsexterior" )
      {
         if ( gx.text.length( this.AV138ParametroConsultaCampoTitulo) <= 3 )
         {
            this.AV135QtdeCaracterRelatorio = gx.num.trunc( this.AV135QtdeCaracterRelatorio + 5 ,0) ;
         }
         else
         {
            this.AV135QtdeCaracterRelatorio = gx.num.trunc( this.AV135QtdeCaracterRelatorio + ( gx.text.length( this.AV138ParametroConsultaCampoTitulo) + 2 ) ,0) ;
         }
      }
      else if ( this.AV134ParametroConsultaCampoCod == "produtodiasvalidade" )
      {
         if ( gx.text.length( this.AV138ParametroConsultaCampoTitulo) <= 4 )
         {
            this.AV135QtdeCaracterRelatorio = gx.num.trunc( this.AV135QtdeCaracterRelatorio + 6 ,0) ;
         }
         else
         {
            this.AV135QtdeCaracterRelatorio = gx.num.trunc( this.AV135QtdeCaracterRelatorio + ( gx.text.length( this.AV138ParametroConsultaCampoTitulo) + 2 ) ,0) ;
         }
      }
      else if ( this.AV134ParametroConsultaCampoCod == "produtocodigoid" )
      {
         if ( gx.text.length( this.AV138ParametroConsultaCampoTitulo) <= 5 )
         {
            this.AV135QtdeCaracterRelatorio = gx.num.trunc( this.AV135QtdeCaracterRelatorio + 7 ,0) ;
         }
         else
         {
            this.AV135QtdeCaracterRelatorio = gx.num.trunc( this.AV135QtdeCaracterRelatorio + ( gx.text.length( this.AV138ParametroConsultaCampoTitulo) + 2 ) ,0) ;
         }
      }
      else if ( this.AV134ParametroConsultaCampoCod == "produtoaliquota" || this.AV134ParametroConsultaCampoCod == "percentualcomissao" || this.AV134ParametroConsultaCampoCod == "aliquotaipientrada" || this.AV134ParametroConsultaCampoCod == "aliquotaipisaida" || this.AV134ParametroConsultaCampoCod == "reducaobasepis" || this.AV134ParametroConsultaCampoCod == "reducaobasecofins" || this.AV134ParametroConsultaCampoCod == "ProdutoMargemMarkupCodigo" )
      {
         if ( gx.text.length( this.AV138ParametroConsultaCampoTitulo) <= 6 )
         {
            this.AV135QtdeCaracterRelatorio = gx.num.trunc( this.AV135QtdeCaracterRelatorio + 8 ,0) ;
         }
         else
         {
            this.AV135QtdeCaracterRelatorio = gx.num.trunc( this.AV135QtdeCaracterRelatorio + ( gx.text.length( this.AV138ParametroConsultaCampoTitulo) + 2 ) ,0) ;
         }
      }
      else if ( this.AV134ParametroConsultaCampoCod == "produtofabricanteid" )
      {
         if ( gx.text.length( this.AV138ParametroConsultaCampoTitulo) <= 7 )
         {
            this.AV135QtdeCaracterRelatorio = gx.num.trunc( this.AV135QtdeCaracterRelatorio + 9 ,0) ;
         }
         else
         {
            this.AV135QtdeCaracterRelatorio = gx.num.trunc( this.AV135QtdeCaracterRelatorio + ( gx.text.length( this.AV138ParametroConsultaCampoTitulo) + 2 ) ,0) ;
         }
      }
      else if ( this.AV134ParametroConsultaCampoCod == "ncmcodigo" || this.AV134ParametroConsultaCampoCod == "aliquotapisentrada" || this.AV134ParametroConsultaCampoCod == "aliquotapissaida" || this.AV134ParametroConsultaCampoCod == "aliquotapisexterior" || this.AV134ParametroConsultaCampoCod == "aliquotacofinsentrada" || this.AV134ParametroConsultaCampoCod == "aliquotacofinssaida" || this.AV134ParametroConsultaCampoCod == "aliquotacofinsexterior" )
      {
         if ( gx.text.length( this.AV138ParametroConsultaCampoTitulo) <= 8 )
         {
            this.AV135QtdeCaracterRelatorio = gx.num.trunc( this.AV135QtdeCaracterRelatorio + 10 ,0) ;
         }
         else
         {
            this.AV135QtdeCaracterRelatorio = gx.num.trunc( this.AV135QtdeCaracterRelatorio + ( gx.text.length( this.AV138ParametroConsultaCampoTitulo) + 2 ) ,0) ;
         }
      }
      else if ( this.AV134ParametroConsultaCampoCod == "produtoid" || this.AV134ParametroConsultaCampoCod == "produtodatafabricacao" || this.AV134ParametroConsultaCampoCod == "produtopartida" || this.AV134ParametroConsultaCampoCod == "dataultimacompra" || this.AV134ParametroConsultaCampoCod == "traco10" )
      {
         if ( gx.text.length( this.AV138ParametroConsultaCampoTitulo) <= 10 )
         {
            this.AV135QtdeCaracterRelatorio = gx.num.trunc( this.AV135QtdeCaracterRelatorio + 12 ,0) ;
         }
         else
         {
            this.AV135QtdeCaracterRelatorio = gx.num.trunc( this.AV135QtdeCaracterRelatorio + ( gx.text.length( this.AV138ParametroConsultaCampoTitulo) + 2 ) ,0) ;
         }
      }
      else if ( this.AV134ParametroConsultaCampoCod == "produtotipotributacao" || this.AV134ParametroConsultaCampoCod == "ProdutoMargemLucro" )
      {
         if ( gx.text.length( this.AV138ParametroConsultaCampoTitulo) <= 13 )
         {
            this.AV135QtdeCaracterRelatorio = gx.num.trunc( this.AV135QtdeCaracterRelatorio + 15 ,0) ;
         }
         else
         {
            this.AV135QtdeCaracterRelatorio = gx.num.trunc( this.AV135QtdeCaracterRelatorio + ( gx.text.length( this.AV138ParametroConsultaCampoTitulo) + 2 ) ,0) ;
         }
      }
      else if ( this.AV134ParametroConsultaCampoCod == "codigobarras" )
      {
         if ( gx.text.length( this.AV138ParametroConsultaCampoTitulo) <= 14 )
         {
            this.AV135QtdeCaracterRelatorio = gx.num.trunc( this.AV135QtdeCaracterRelatorio + 16 ,0) ;
         }
         else
         {
            this.AV135QtdeCaracterRelatorio = gx.num.trunc( this.AV135QtdeCaracterRelatorio + ( gx.text.length( this.AV138ParametroConsultaCampoTitulo) + 2 ) ,0) ;
         }
      }
      else if ( this.AV134ParametroConsultaCampoCod == "produtofamiliaid" || this.AV134ParametroConsultaCampoCod == "local" )
      {
         this.AV135QtdeCaracterRelatorio = gx.num.trunc( this.AV135QtdeCaracterRelatorio + 17 ,0) ;
      }
      else if ( this.AV134ParametroConsultaCampoCod == "embalagem" )
      {
         this.AV135QtdeCaracterRelatorio = gx.num.trunc( this.AV135QtdeCaracterRelatorio + 19 ,0) ;
      }
      else if ( this.AV134ParametroConsultaCampoCod == "quantidadeatual" || this.AV134ParametroConsultaCampoCod == "quantidadeatualpreco" || this.AV134ParametroConsultaCampoCod == "pesobruto" || this.AV134ParametroConsultaCampoCod == "pesoliquido" || this.AV134ParametroConsultaCampoCod == "estoquemaximo" || this.AV134ParametroConsultaCampoCod == "estoqueminimo" )
      {
         this.AV135QtdeCaracterRelatorio = gx.num.trunc( this.AV135QtdeCaracterRelatorio + 20 ,0) ;
      }
      else if ( this.AV134ParametroConsultaCampoCod == "produtocodificacaoprincipal" || this.AV134ParametroConsultaCampoCod == "produtolotefabricacao" || this.AV134ParametroConsultaCampoCod == "produtoreferencia" || this.AV134ParametroConsultaCampoCod == "traco20" )
      {
         this.AV135QtdeCaracterRelatorio = gx.num.trunc( this.AV135QtdeCaracterRelatorio + 22 ,0) ;
      }
      else if ( this.AV134ParametroConsultaCampoCod == "preco" || this.AV134ParametroConsultaCampoCod == "precopromocao" )
      {
         this.AV135QtdeCaracterRelatorio = gx.num.trunc( this.AV135QtdeCaracterRelatorio + 23 ,0) ;
      }
      else if ( this.AV134ParametroConsultaCampoCod == "qtdeultimacompra" || this.AV134ParametroConsultaCampoCod == "valorultimacompra" )
      {
         this.AV135QtdeCaracterRelatorio = gx.num.trunc( this.AV135QtdeCaracterRelatorio + 24 ,0) ;
      }
      else if ( this.AV134ParametroConsultaCampoCod == "produtocategoria" )
      {
         this.AV135QtdeCaracterRelatorio = gx.num.trunc( this.AV135QtdeCaracterRelatorio + 27 ,0) ;
      }
      else if ( this.AV134ParametroConsultaCampoCod == "produtofamiliadescricao" || this.AV134ParametroConsultaCampoCod == "grupoprodutodescricao" || this.AV134ParametroConsultaCampoCod == "subgrupoprodutodescricao" || this.AV134ParametroConsultaCampoCod == "traco30" || this.AV134ParametroConsultaCampoCod == "produtoclassificacaoprincipal" )
      {
         this.AV135QtdeCaracterRelatorio = gx.num.trunc( this.AV135QtdeCaracterRelatorio + 32 ,0) ;
      }
      else if ( this.AV134ParametroConsultaCampoCod == "produtodescricaoresumida" || this.AV134ParametroConsultaCampoCod == "filial" )
      {
         this.AV135QtdeCaracterRelatorio = gx.num.trunc( this.AV135QtdeCaracterRelatorio + 42 ,0) ;
      }
      else if ( this.AV134ParametroConsultaCampoCod == "produtofabricantefantasia" || this.AV134ParametroConsultaCampoCod == "produtofabricanterazao" || this.AV134ParametroConsultaCampoCod == "genero" || this.AV134ParametroConsultaCampoCod == "nomecompleto" )
      {
         this.AV135QtdeCaracterRelatorio = gx.num.trunc( this.AV135QtdeCaracterRelatorio + 52 ,0) ;
      }
   };
   this.s362_client=function()
   {
      if ( this.AV137OdenacaoAux == "ProdutoPCAliquota" )
      {
         this.AV136OrdenacaoDescricaoAux =  "Alíquota"  ;
      }
      else if ( this.AV137OdenacaoAux == "ProdutoCategoriaDesc" )
      {
         this.AV136OrdenacaoDescricaoAux =  "Categoria"  ;
      }
      else if ( this.AV137OdenacaoAux == "ProdutoClassificacaoPrincipal" )
      {
         this.AV136OrdenacaoDescricaoAux =  "Classificação Principal"  ;
      }
      else if ( this.AV137OdenacaoAux == "ProdutoCodificacaoPrincipal" )
      {
         this.AV136OrdenacaoDescricaoAux =  "Codificação Principal"  ;
      }
      else if ( this.AV137OdenacaoAux == "ProdutoId" )
      {
         this.AV136OrdenacaoDescricaoAux =  "Código"  ;
      }
      else if ( this.AV137OdenacaoAux == "LoteProdutoCodigoBarras" )
      {
         this.AV136OrdenacaoDescricaoAux =  "Código de Barras"  ;
      }
      else if ( this.AV137OdenacaoAux == "ProdutoFabricanteId" )
      {
         this.AV136OrdenacaoDescricaoAux =  "Código do Fabricante"  ;
      }
      else if ( this.AV137OdenacaoAux == "ProdutoFamiliaId" )
      {
         this.AV136OrdenacaoDescricaoAux =  "Código da Família"  ;
      }
      else if ( this.AV137OdenacaoAux == "ProdutoDataFabricacao" )
      {
         this.AV136OrdenacaoDescricaoAux =  "Data de Fabricação"  ;
      }
      else if ( this.AV137OdenacaoAux == "ProdutoFamiliaDescricao" )
      {
         this.AV136OrdenacaoDescricaoAux =  "Descrição da Família"  ;
      }
      else if ( this.AV137OdenacaoAux == "ProdutoDescricaoResumida" )
      {
         this.AV136OrdenacaoDescricaoAux =  "Descricao Resumida"  ;
      }
      else if ( this.AV137OdenacaoAux == "ProdutoFabricanteFantasia" )
      {
         this.AV136OrdenacaoDescricaoAux =  "Fantasia Fabricante"  ;
      }
      else if ( this.AV137OdenacaoAux == "FilialId" )
      {
         this.AV136OrdenacaoDescricaoAux =  "Filial"  ;
      }
      else if ( this.AV137OdenacaoAux == "ProdutoMesesGarantia" )
      {
         this.AV136OrdenacaoDescricaoAux =  "Garantia"  ;
      }
      else if ( this.AV137OdenacaoAux == "LoteProdutoLocal" )
      {
         this.AV136OrdenacaoDescricaoAux =  "Local"  ;
      }
      else if ( this.AV137OdenacaoAux == "LoteProdutoCombinacao" )
      {
         this.AV136OrdenacaoDescricaoAux =  "Lote"  ;
      }
      else if ( this.AV137OdenacaoAux == "ProdutoLoteFabricacao" )
      {
         this.AV136OrdenacaoDescricaoAux =  "Lote de Fabricação"  ;
      }
      else if ( this.AV137OdenacaoAux == "NCMCodigo" )
      {
         this.AV136OrdenacaoDescricaoAux =  "NCM"  ;
      }
      else if ( this.AV137OdenacaoAux == "ProdutoPartida" )
      {
         this.AV136OrdenacaoDescricaoAux =  "Partida"  ;
      }
      else if ( this.AV137OdenacaoAux == "ProdutoPreco" )
      {
         this.AV136OrdenacaoDescricaoAux =  "Preço"  ;
      }
      else if ( this.AV137OdenacaoAux == "LoteProdutoQtdeAtual" )
      {
         this.AV136OrdenacaoDescricaoAux =  "Quantidade Atual"  ;
      }
      else if ( this.AV137OdenacaoAux == "ProdutoFabricanteRazao" )
      {
         this.AV136OrdenacaoDescricaoAux =  "Razão Social Fabricante"  ;
      }
      else if ( this.AV137OdenacaoAux == "ProdutoReferencia" )
      {
         this.AV136OrdenacaoDescricaoAux =  "Referência"  ;
      }
      else if ( this.AV137OdenacaoAux == "ProdutoTipo" )
      {
         this.AV136OrdenacaoDescricaoAux =  "Tipo"  ;
      }
      else if ( this.AV137OdenacaoAux == "ProdutoTipoTributacaoDesc" )
      {
         this.AV136OrdenacaoDescricaoAux =  "Tipo Tributação"  ;
      }
      else if ( this.AV137OdenacaoAux == "ProdutoUnidadeCompraId" )
      {
         this.AV136OrdenacaoDescricaoAux =  "Unidade de Compra"  ;
      }
      else if ( this.AV137OdenacaoAux == "ProdutoUnidadeVendaId" )
      {
         this.AV136OrdenacaoDescricaoAux =  "Unidade de Venda"  ;
      }
      else if ( this.AV137OdenacaoAux == "ProdutoDiasValidade" )
      {
         this.AV136OrdenacaoDescricaoAux =  "Validade"  ;
      }
   };
   this.s312_client=function()
   {
      gx.fn.setCtrlProperty("BTNIMPRIMIR","Enabled", 1 );
      gx.fn.setCtrlProperty("vPARAMETROCONSULTACODIGO","Enabled", 1 );
      gx.fn.setCtrlProperty("vDATAREFERENCIA","Enabled", 1 );
      gx.fn.setCtrlProperty("vPARAMETROCONSULTAPRIORDENACAO","Enabled", 1 );
      gx.fn.setCtrlProperty("vPARAMETROCONSULTASEGORDENACAO","Enabled", 1 );
      gx.fn.setCtrlProperty("vPRODUTODATAINCLUSAOINI","Enabled", 1 );
      gx.fn.setCtrlProperty("vPRODUTODATAINCLUSAOFIM","Enabled", 1 );
      gx.fn.setCtrlProperty("vPRECOPRODUTOPRECOIDINI","Enabled", 1 );
      gx.fn.setCtrlProperty("vPRECOPRODUTODATAINI","Enabled", 1 );
      gx.fn.setCtrlProperty("vPRECOPRODUTOPRECOIDFIM","Enabled", 1 );
      gx.fn.setCtrlProperty("vPRECOPRODUTODATAFIM","Enabled", 1 );
      gx.fn.setCtrlProperty("vUNIDADECOMPRAIDINI","Enabled", 1 );
      gx.fn.setCtrlProperty("vUNIDADECOMPRAIDFIM","Enabled", 1 );
      gx.fn.setCtrlProperty("vUNIDADEVENDAIDINI","Enabled", 1 );
      gx.fn.setCtrlProperty("vUNIDADEVENDAIDFIM","Enabled", 1 );
      gx.fn.setCtrlProperty("vPRODUTOREFERENCIAINI","Enabled", 1 );
      gx.fn.setCtrlProperty("vPRODUTOREFERENCIAFIM","Enabled", 1 );
      gx.fn.setCtrlProperty("vLOTEPRODUTOLOCALINI","Enabled", 1 );
      gx.fn.setCtrlProperty("vLOTEPRODUTOLOCALFIM","Enabled", 1 );
      gx.fn.setCtrlProperty("vPRODUTOTIPO","Enabled", 1 );
      gx.fn.setCtrlProperty("vPRODUTOTIPOTRIBUTACAO","Enabled", 1 );
      gx.fn.setCtrlProperty("vPRODUTOSITUACAO","Enabled", 1 );
      gx.fn.setCtrlProperty("vESQUEMACODIGO","Enabled", 1 );
      gx.fn.setCtrlProperty("FILTRARLOTE","Enabled", 1 );
      gx.fn.setCtrlProperty("FILTRARFILIAL","Enabled", 1 );
      gx.fn.setCtrlProperty("vSNGERARCSV","Enabled", 1 );
      gx.fn.setCtrlProperty("vSNSALTAPAGPRIORDENACAO","Enabled", 1 );
      gx.fn.setCtrlProperty("vSNSALTAPAGSEGORDENACAO","Enabled", 1 );
      gx.fn.setCtrlProperty("vPRODUTOSNCONTROLAESTOQUE","Enabled", 1 );
      gx.fn.setCtrlProperty("vIMPSNSALDOESTOQUE","Enabled", 1 );
      gx.fn.setCtrlProperty("vIMPSNSALDOZERADO","Enabled", 1 );
      gx.fn.setCtrlProperty("vIMPSNSALDONEGATIVO","Enabled", 1 );
      gx.fn.setCtrlProperty("vSNPRODUTOPROMOCAO","Enabled", 1 );
      gx.fn.setCtrlProperty("vPRODUTOBALANCA","Enabled", 1 );
      gx.fn.setCtrlProperty("INCLUIPRODUTO","Enabled", 1 );
      gx.fn.setCtrlProperty("vPRODUTOID","Enabled", 1 );
      gx.fn.setCtrlProperty("vPROMPTPRODUTO","Enabled", 1 );
      gx.fn.setCtrlProperty("vEXCLINHAPRODUTO","Enabled", 1 );
      gx.fn.setCtrlProperty("INCLUIFAMILIA","Enabled", 1 );
      gx.fn.setCtrlProperty("vPRODUTOFAMILIAID","Enabled", 1 );
      gx.fn.setCtrlProperty("vPROMPTFAMILIA","Enabled", 1 );
      gx.fn.setCtrlProperty("vEXCLINHAFAMILIA","Enabled", 1 );
      gx.fn.setCtrlProperty("INCLUIFABRICANTE","Enabled", 1 );
      gx.fn.setCtrlProperty("vPRODUTOFABRICANTEID","Enabled", 1 );
      gx.fn.setCtrlProperty("vPROMPTFABRICANTE","Enabled", 1 );
      gx.fn.setCtrlProperty("vEXCLINHAFABRICANTE","Enabled", 1 );
      gx.fn.setCtrlProperty("INCLUICLASSIFICACAO","Enabled", 1 );
      gx.fn.setCtrlProperty("vCLASSIFICACAOESTIDGRID","Enabled", 1 );
      gx.fn.setCtrlProperty("vPRODUTOCLASSIFICACAOVALOR","Enabled", 1 );
      gx.fn.setCtrlProperty("vEXCLINHACLASSIFICACAO","Enabled", 1 );
      gx.fn.setCtrlProperty("INCLUICODIFICACAO","Enabled", 1 );
      gx.fn.setCtrlProperty("vCODIFICACAOESTIDGRID","Enabled", 1 );
      gx.fn.setCtrlProperty("vPRODUTOCODIFICACAOVALOR","Enabled", 1 );
      gx.fn.setCtrlProperty("vEXCLINHACODIFICACAO","Enabled", 1 );
   };
   this.e38vr1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalselecionafilial",["RelProduto"]), []);
      this.refreshOutputs([]);
   };
   this.e12vr2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13vr2_client=function()
   {
      this.executeServerEvent("FILTRARLOTE.CLICK", true, null, false, true);
   };
   this.e11vr2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14vr2_client=function()
   {
      this.executeServerEvent("'LINHAGRIDPRODUTO'", true, null, false, false);
   };
   this.e25vr2_client=function()
   {
      this.executeServerEvent("'EXCLUILINHAGRIDPRODUTO'", true, arguments[0], false, false);
   };
   this.e15vr2_client=function()
   {
      this.executeServerEvent("'LINHAGRIDFAMILIA'", true, null, false, false);
   };
   this.e36vr2_client=function()
   {
      this.executeServerEvent("'EXCLUILINHAGRIDFAMILIA'", true, arguments[0], false, false);
   };
   this.e16vr2_client=function()
   {
      this.executeServerEvent("'LINHAGRIDFABRICANTE'", true, null, false, false);
   };
   this.e33vr2_client=function()
   {
      this.executeServerEvent("'EXCLUILINHAGRIDFABRICANTE'", true, arguments[0], false, false);
   };
   this.e17vr2_client=function()
   {
      this.executeServerEvent("'LINHAGRIDCLASSIFICACAO'", true, null, false, false);
   };
   this.e30vr2_client=function()
   {
      this.executeServerEvent("'EXCLUILINHAGRIDCLASSIFICACAO'", true, arguments[0], false, false);
   };
   this.e18vr2_client=function()
   {
      this.executeServerEvent("'LINHAGRIDCODIFICACAO'", true, null, false, false);
   };
   this.e28vr2_client=function()
   {
      this.executeServerEvent("'EXCLUILINHAGRIDCODIFICACAO'", true, arguments[0], false, false);
   };
   this.e19vr2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e20vr2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e21vr2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e26vr2_client=function()
   {
      this.executeServerEvent("VPRODUTOID.ISVALID", true, arguments[0], false, false);
   };
   this.e37vr2_client=function()
   {
      this.executeServerEvent("VPRODUTOFAMILIAID.ISVALID", true, arguments[0], false, false);
   };
   this.e34vr2_client=function()
   {
      this.executeServerEvent("VPRODUTOFABRICANTEID.ISVALID", true, arguments[0], false, false);
   };
   this.e31vr2_client=function()
   {
      this.executeServerEvent("VCLASSIFICACAOESTIDGRID.CLICK", true, arguments[0], false, false);
   };
   this.e39vr2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,16,18,22,25,28,31,33,34,37,39,42,44,47,49,51,56,59,62,65,68,71,73,75,77,80,82,85,87,89,91,94,96,99,101,103,105,108,110,112,114,117,119,121,123,126,128,130,132,135,137,140,142,145,147,149,154,157,160,163,166,169,171,174,176,177,180,183,184,185,188,191,194,196,198,199,200,201,202,203,204,207,210,213,215,217,218,219,220,221,222,225,228,231,233,235,236,237,238,239,240,241,244,247,250,252,254,255,256,257,258,261,264,267,269,271,272,273,274,275,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,321,323,324,325,326,327,328,329,330];
   this.GXLastCtrlId =330;
   this.GridprodutoContainer = new gx.grid.grid(this, 2,"WbpLvl2",197,"Gridproduto","Gridproduto","GridprodutoContainer",this.CmpContext,this.IsMasterPage,"hrelacaoprodutos",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridprodutoContainer = this.GridprodutoContainer;
   GridprodutoContainer.addSingleLineEdit("Produtoid",198,"vPRODUTOID","Produto","","ProdutoId","int",0,"px",10,10,"right",null,[],"Produtoid","ProdutoId",true,0,false,false,"Attribute",1,"");
   GridprodutoContainer.addBitmap("&Promptproduto","vPROMPTPRODUTO",199,0,"px",17,"px",null,"","","GridColumnImage","");
   GridprodutoContainer.addSingleLineEdit("Produtodescricaoresumida",200,"vPRODUTODESCRICAORESUMIDA","Descrição","","ProdutoDescricaoResumida","svchar",0,"px",40,40,"left",null,[],"Produtodescricaoresumida","ProdutoDescricaoResumida",true,0,false,false,"SemQuebraGrid",1,"");
   GridprodutoContainer.addBitmap("&Exclinhaproduto","vEXCLINHAPRODUTO",201,0,"px",17,"px","e25vr2_client","","Exc","GridColumnImage","");
   GridprodutoContainer.addSingleLineEdit("Controlalinhaproduto",202,"vCONTROLALINHAPRODUTO","Controla Linha Produto","","ControlaLinhaProduto","int",0,"px",10,10,"right",null,[],"Controlalinhaproduto","ControlaLinhaProduto",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridprodutoContainer);
   this.GridfamiliaContainer = new gx.grid.grid(this, 11,"WbpLvl11",216,"Gridfamilia","Gridfamilia","GridfamiliaContainer",this.CmpContext,this.IsMasterPage,"hrelacaoprodutos",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridfamiliaContainer = this.GridfamiliaContainer;
   GridfamiliaContainer.addSingleLineEdit("Produtofamiliaid",217,"vPRODUTOFAMILIAID","Família","","ProdutoFamiliaId","char",0,"px",15,15,"left",null,[],"Produtofamiliaid","ProdutoFamiliaId",true,0,false,false,"Attribute",1,"");
   GridfamiliaContainer.addBitmap("&Promptfamilia","vPROMPTFAMILIA",218,0,"px",17,"px",null,"","","GridColumnImage","");
   GridfamiliaContainer.addSingleLineEdit("Produtofamiliadescricao",219,"vPRODUTOFAMILIADESCRICAO","Descrição","","ProdutoFamiliaDescricao","svchar",0,"px",30,30,"left",null,[],"Produtofamiliadescricao","ProdutoFamiliaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridfamiliaContainer.addBitmap("&Exclinhafamilia","vEXCLINHAFAMILIA",220,0,"px",17,"px","e36vr2_client","","Exc","GridColumnImage","");
   GridfamiliaContainer.addSingleLineEdit("Controlalinhafamilia",221,"vCONTROLALINHAFAMILIA","Controla Linha Familia","","ControlaLinhaFamilia","int",0,"px",10,10,"right",null,[],"Controlalinhafamilia","ControlaLinhaFamilia",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridfamiliaContainer);
   this.GridfabricanteContainer = new gx.grid.grid(this, 13,"WbpLvl13",234,"Gridfabricante","Gridfabricante","GridfabricanteContainer",this.CmpContext,this.IsMasterPage,"hrelacaoprodutos",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridfabricanteContainer = this.GridfabricanteContainer;
   GridfabricanteContainer.addSingleLineEdit("Produtofabricanteid",235,"vPRODUTOFABRICANTEID","Fabricante","","ProdutoFabricanteId","int",0,"px",7,7,"right",null,[],"Produtofabricanteid","ProdutoFabricanteId",true,0,false,false,"Attribute",1,"");
   GridfabricanteContainer.addBitmap("&Promptfabricante","vPROMPTFABRICANTE",236,0,"px",17,"px",null,"","","GridColumnImage","");
   GridfabricanteContainer.addSingleLineEdit("Produtofabricantefantasia",237,"vPRODUTOFABRICANTEFANTASIA","Nome","","ProdutoFabricanteFantasia","svchar",0,"px",60,60,"left",null,[],"Produtofabricantefantasia","ProdutoFabricanteFantasia",true,0,false,false,"SemQuebraGrid",1,"");
   GridfabricanteContainer.addBitmap("&Exclinhafabricante","vEXCLINHAFABRICANTE",238,0,"px",17,"px","e33vr2_client","","Exc","GridColumnImage","");
   GridfabricanteContainer.addSingleLineEdit("Controlalinhafabricante",239,"vCONTROLALINHAFABRICANTE","Controla Linha Fabricante","","ControlaLinhaFabricante","int",0,"px",10,10,"right",null,[],"Controlalinhafabricante","ControlaLinhaFabricante",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridfabricanteContainer);
   this.GridclassificacaoContainer = new gx.grid.grid(this, 15,"WbpLvl15",253,"Gridclassificacao","Gridclassificacao","GridclassificacaoContainer",this.CmpContext,this.IsMasterPage,"hrelacaoprodutos",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridclassificacaoContainer = this.GridclassificacaoContainer;
   GridclassificacaoContainer.addComboBox("Classificacaoestidgrid",254,"vCLASSIFICACAOESTIDGRID","Classificação","ClassificacaoEstIdGrid","char","e31vr2_client",1,true,false,0,"px","");
   GridclassificacaoContainer.addComboBox("Produtoclassificacaovalor",255,"vPRODUTOCLASSIFICACAOVALOR","Valor","ProdutoClassificacaoValor","char",null,1,true,false,0,"px","");
   GridclassificacaoContainer.addBitmap("&Exclinhaclassificacao","vEXCLINHACLASSIFICACAO",256,0,"px",17,"px","e30vr2_client","","Exc","GridColumnImage","");
   GridclassificacaoContainer.addSingleLineEdit("Controlalinhaclassificacao",257,"vCONTROLALINHACLASSIFICACAO","Controla Linha Classificacao","","ControlaLinhaClassificacao","int",0,"px",10,10,"right",null,[],"Controlalinhaclassificacao","ControlaLinhaClassificacao",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridclassificacaoContainer);
   this.GridcodificacaoContainer = new gx.grid.grid(this, 16,"WbpLvl16",270,"Gridcodificacao","Gridcodificacao","GridcodificacaoContainer",this.CmpContext,this.IsMasterPage,"hrelacaoprodutos",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridcodificacaoContainer = this.GridcodificacaoContainer;
   GridcodificacaoContainer.addComboBox("Codificacaoestidgrid",271,"vCODIFICACAOESTIDGRID","Codificação","CodificacaoEstIdGrid","char",null,1,true,false,0,"px","");
   GridcodificacaoContainer.addSingleLineEdit("Produtocodificacaovalor",272,"vPRODUTOCODIFICACAOVALOR","Valor","","ProdutoCodificacaoValor","char",0,"px",20,20,"left",null,[],"Produtocodificacaovalor","ProdutoCodificacaoValor",true,0,false,false,"Attribute",1,"");
   GridcodificacaoContainer.addBitmap("&Exclinhacodificacao","vEXCLINHACODIFICACAO",273,0,"px",17,"px","e28vr2_client","","Exc","GridColumnImage","");
   GridcodificacaoContainer.addSingleLineEdit("Controlalinhacodificacao",274,"vCONTROLALINHACODIFICACAO","Controla Linha Codificacao","","ControlaLinhaCodificacao","int",0,"px",10,10,"right",null,[],"Controlalinhacodificacao","ControlaLinhaCodificacao",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridcodificacaoContainer);
   this.TABCSSContainer = gx.uc.getNew(this, 21, 14, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV212Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV212Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV212Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "hrelacaoprodutos_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABTXT",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV153TxtTela",gxold:"OV153TxtTela",gxvar:"AV153TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV153TxtTela=Value},v2z:function(Value){gx.O.ZV153TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV153TxtTela)},c2v:function(){gx.O.AV153TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"IMAGE2",grid:0};
   GXValidFnc[18]={fld:"IMAGE1",grid:0};
   GXValidFnc[22]={fld:"TAB1",grid:0};
   GXValidFnc[25]={fld:"TABLE9",grid:0};
   GXValidFnc[28]={fld:"OPCOESLAYOUT", format:0,grid:0};
   GXValidFnc[31]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Parametroconsultacodigo,isvalid:null,rgrid:[],fld:"vPARAMETROCONSULTACODIGO",gxz:"ZV22ParametroConsultaCodigo",gxold:"OV22ParametroConsultaCodigo",gxvar:"AV22ParametroConsultaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22ParametroConsultaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22ParametroConsultaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPARAMETROCONSULTACODIGO",gx.O.AV22ParametroConsultaCodigo,0)},c2v:function(){gx.O.AV22ParametroConsultaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPARAMETROCONSULTACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPARAMETROCONSULTADESCRICAO",gxz:"ZV26ParametroConsultaDescricao",gxold:"OV26ParametroConsultaDescricao",gxvar:"AV26ParametroConsultaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26ParametroConsultaDescricao=Value},v2z:function(Value){gx.O.ZV26ParametroConsultaDescricao=Value},v2c:function(){gx.fn.setControlValue("vPARAMETROCONSULTADESCRICAO",gx.O.AV26ParametroConsultaDescricao,0)},c2v:function(){gx.O.AV26ParametroConsultaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPARAMETROCONSULTADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAREFERENCIA",gxz:"ZV37DataReferencia",gxold:"OV37DataReferencia",gxvar:"AV37DataReferencia",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37DataReferencia=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV37DataReferencia=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAREFERENCIA",gx.O.AV37DataReferencia,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV37DataReferencia=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAREFERENCIA")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPARAMETROCONSULTAPRIORDENACAO",gxz:"ZV29ParametroConsultaPriOrdenacao",gxold:"OV29ParametroConsultaPriOrdenacao",gxvar:"AV29ParametroConsultaPriOrdenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV29ParametroConsultaPriOrdenacao=Value},v2z:function(Value){gx.O.ZV29ParametroConsultaPriOrdenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vPARAMETROCONSULTAPRIORDENACAO",gx.O.AV29ParametroConsultaPriOrdenacao)},c2v:function(){gx.O.AV29ParametroConsultaPriOrdenacao=this.val()},val:function(){return gx.fn.getControlValue("vPARAMETROCONSULTAPRIORDENACAO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPARAMETROCONSULTASEGORDENACAO",gxz:"ZV30ParametroConsultaSegOrdenacao",gxold:"OV30ParametroConsultaSegOrdenacao",gxvar:"AV30ParametroConsultaSegOrdenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV30ParametroConsultaSegOrdenacao=Value},v2z:function(Value){gx.O.ZV30ParametroConsultaSegOrdenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vPARAMETROCONSULTASEGORDENACAO",gx.O.AV30ParametroConsultaSegOrdenacao)},c2v:function(){gx.O.AV30ParametroConsultaSegOrdenacao=this.val()},val:function(){return gx.fn.getControlValue("vPARAMETROCONSULTASEGORDENACAO")},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TABLE10",grid:0};
   GXValidFnc[56]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNGERARCSV",gxz:"ZV19SNGerarCSV",gxold:"OV19SNGerarCSV",gxvar:"AV19SNGerarCSV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV19SNGerarCSV=Value},v2z:function(Value){gx.O.ZV19SNGerarCSV=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNGERARCSV",gx.O.AV19SNGerarCSV,"S")},c2v:function(){gx.O.AV19SNGerarCSV=this.val()},val:function(){return gx.fn.getControlValue("vSNGERARCSV")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[59]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNSALTAPAGPRIORDENACAO",gxz:"ZV31SNSaltaPagPriOrdenacao",gxold:"OV31SNSaltaPagPriOrdenacao",gxvar:"AV31SNSaltaPagPriOrdenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV31SNSaltaPagPriOrdenacao=Value},v2z:function(Value){gx.O.ZV31SNSaltaPagPriOrdenacao=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNSALTAPAGPRIORDENACAO",gx.O.AV31SNSaltaPagPriOrdenacao,"S")},c2v:function(){gx.O.AV31SNSaltaPagPriOrdenacao=this.val()},val:function(){return gx.fn.getControlValue("vSNSALTAPAGPRIORDENACAO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[62]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNSALTAPAGSEGORDENACAO",gxz:"ZV32SNSaltaPagSegOrdenacao",gxold:"OV32SNSaltaPagSegOrdenacao",gxvar:"AV32SNSaltaPagSegOrdenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV32SNSaltaPagSegOrdenacao=Value},v2z:function(Value){gx.O.ZV32SNSaltaPagSegOrdenacao=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNSALTAPAGSEGORDENACAO",gx.O.AV32SNSaltaPagSegOrdenacao,"S")},c2v:function(){gx.O.AV32SNSaltaPagSegOrdenacao=this.val()},val:function(){return gx.fn.getControlValue("vSNSALTAPAGSEGORDENACAO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[65]={fld:"TABLE3",grid:0};
   GXValidFnc[68]={fld:"OPCOESSELECAO", format:0,grid:0};
   GXValidFnc[71]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[73]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODATAINCLUSAOINI",gxz:"ZV50ProdutoDataInclusaoIni",gxold:"OV50ProdutoDataInclusaoIni",gxvar:"AV50ProdutoDataInclusaoIni",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50ProdutoDataInclusaoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV50ProdutoDataInclusaoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTODATAINCLUSAOINI",gx.O.AV50ProdutoDataInclusaoIni,0)},c2v:function(){gx.O.AV50ProdutoDataInclusaoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vPRODUTODATAINCLUSAOINI")},nac:gx.falseFn};
   GXValidFnc[75]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[77]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODATAINCLUSAOFIM",gxz:"ZV51ProdutoDataInclusaoFim",gxold:"OV51ProdutoDataInclusaoFim",gxvar:"AV51ProdutoDataInclusaoFim",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51ProdutoDataInclusaoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV51ProdutoDataInclusaoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTODATAINCLUSAOFIM",gx.O.AV51ProdutoDataInclusaoFim,0)},c2v:function(){gx.O.AV51ProdutoDataInclusaoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vPRODUTODATAINCLUSAOFIM")},nac:gx.falseFn};
   GXValidFnc[80]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[82]={fld:"TABLE4",grid:0};
   GXValidFnc[85]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECOPRODUTOPRECOIDINI",gxz:"ZV117PrecoProdutoPrecoIdIni",gxold:"OV117PrecoProdutoPrecoIdIni",gxvar:"AV117PrecoProdutoPrecoIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV117PrecoProdutoPrecoIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV117PrecoProdutoPrecoIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECOPRODUTOPRECOIDINI",gx.O.AV117PrecoProdutoPrecoIdIni,0)},c2v:function(){gx.O.AV117PrecoProdutoPrecoIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOPRODUTOPRECOIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[87]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECOPRODUTODATAINI",gxz:"ZV119PrecoProdutoDataIni",gxold:"OV119PrecoProdutoDataIni",gxvar:"AV119PrecoProdutoDataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV119PrecoProdutoDataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV119PrecoProdutoDataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPRECOPRODUTODATAINI",gx.O.AV119PrecoProdutoDataIni,0)},c2v:function(){gx.O.AV119PrecoProdutoDataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPRECOPRODUTODATAINI")},nac:gx.falseFn};
   GXValidFnc[89]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[91]={fld:"TABLE5",grid:0};
   GXValidFnc[94]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECOPRODUTOPRECOIDFIM",gxz:"ZV118PrecoProdutoPrecoIdFim",gxold:"OV118PrecoProdutoPrecoIdFim",gxvar:"AV118PrecoProdutoPrecoIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV118PrecoProdutoPrecoIdFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV118PrecoProdutoPrecoIdFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECOPRODUTOPRECOIDFIM",gx.O.AV118PrecoProdutoPrecoIdFim,0)},c2v:function(){gx.O.AV118PrecoProdutoPrecoIdFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOPRODUTOPRECOIDFIM",'.')},nac:gx.falseFn};
   GXValidFnc[96]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECOPRODUTODATAFIM",gxz:"ZV120PrecoProdutoDataFim",gxold:"OV120PrecoProdutoDataFim",gxvar:"AV120PrecoProdutoDataFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV120PrecoProdutoDataFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV120PrecoProdutoDataFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPRECOPRODUTODATAFIM",gx.O.AV120PrecoProdutoDataFim,0)},c2v:function(){gx.O.AV120PrecoProdutoDataFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPRECOPRODUTODATAFIM")},nac:gx.falseFn};
   GXValidFnc[99]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[101]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUNIDADECOMPRAIDINI",gxz:"ZV48UnidadeCompraIdIni",gxold:"OV48UnidadeCompraIdIni",gxvar:"AV48UnidadeCompraIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48UnidadeCompraIdIni=Value},v2z:function(Value){gx.O.ZV48UnidadeCompraIdIni=Value},v2c:function(){gx.fn.setControlValue("vUNIDADECOMPRAIDINI",gx.O.AV48UnidadeCompraIdIni,0)},c2v:function(){gx.O.AV48UnidadeCompraIdIni=this.val()},val:function(){return gx.fn.getControlValue("vUNIDADECOMPRAIDINI")},nac:gx.falseFn};
   GXValidFnc[103]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[105]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUNIDADECOMPRAIDFIM",gxz:"ZV187UnidadeCompraIdFim",gxold:"OV187UnidadeCompraIdFim",gxvar:"AV187UnidadeCompraIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV187UnidadeCompraIdFim=Value},v2z:function(Value){gx.O.ZV187UnidadeCompraIdFim=Value},v2c:function(){gx.fn.setControlValue("vUNIDADECOMPRAIDFIM",gx.O.AV187UnidadeCompraIdFim,0)},c2v:function(){gx.O.AV187UnidadeCompraIdFim=this.val()},val:function(){return gx.fn.getControlValue("vUNIDADECOMPRAIDFIM")},nac:gx.falseFn};
   GXValidFnc[108]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[110]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUNIDADEVENDAIDINI",gxz:"ZV188UnidadeVendaIdIni",gxold:"OV188UnidadeVendaIdIni",gxvar:"AV188UnidadeVendaIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV188UnidadeVendaIdIni=Value},v2z:function(Value){gx.O.ZV188UnidadeVendaIdIni=Value},v2c:function(){gx.fn.setControlValue("vUNIDADEVENDAIDINI",gx.O.AV188UnidadeVendaIdIni,0)},c2v:function(){gx.O.AV188UnidadeVendaIdIni=this.val()},val:function(){return gx.fn.getControlValue("vUNIDADEVENDAIDINI")},nac:gx.falseFn};
   GXValidFnc[112]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUNIDADEVENDAIDFIM",gxz:"ZV189UnidadeVendaIdFim",gxold:"OV189UnidadeVendaIdFim",gxvar:"AV189UnidadeVendaIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV189UnidadeVendaIdFim=Value},v2z:function(Value){gx.O.ZV189UnidadeVendaIdFim=Value},v2c:function(){gx.fn.setControlValue("vUNIDADEVENDAIDFIM",gx.O.AV189UnidadeVendaIdFim,0)},c2v:function(){gx.O.AV189UnidadeVendaIdFim=this.val()},val:function(){return gx.fn.getControlValue("vUNIDADEVENDAIDFIM")},nac:gx.falseFn};
   GXValidFnc[117]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[119]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIAINI",gxz:"ZV47ProdutoReferenciaIni",gxold:"OV47ProdutoReferenciaIni",gxvar:"AV47ProdutoReferenciaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47ProdutoReferenciaIni=Value},v2z:function(Value){gx.O.ZV47ProdutoReferenciaIni=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIAINI",gx.O.AV47ProdutoReferenciaIni,0)},c2v:function(){gx.O.AV47ProdutoReferenciaIni=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIAINI")},nac:gx.falseFn};
   GXValidFnc[121]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[123]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIAFIM",gxz:"ZV190ProdutoReferenciaFim",gxold:"OV190ProdutoReferenciaFim",gxvar:"AV190ProdutoReferenciaFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV190ProdutoReferenciaFim=Value},v2z:function(Value){gx.O.ZV190ProdutoReferenciaFim=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIAFIM",gx.O.AV190ProdutoReferenciaFim,0)},c2v:function(){gx.O.AV190ProdutoReferenciaFim=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIAFIM")},nac:gx.falseFn};
   GXValidFnc[126]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[128]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOLOCALINI",gxz:"ZV40LoteProdutoLocalIni",gxold:"OV40LoteProdutoLocalIni",gxvar:"AV40LoteProdutoLocalIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40LoteProdutoLocalIni=Value},v2z:function(Value){gx.O.ZV40LoteProdutoLocalIni=Value},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOLOCALINI",gx.O.AV40LoteProdutoLocalIni,0)},c2v:function(){gx.O.AV40LoteProdutoLocalIni=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOLOCALINI")},nac:gx.falseFn};
   GXValidFnc[130]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[132]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOLOCALFIM",gxz:"ZV191LoteProdutoLocalFim",gxold:"OV191LoteProdutoLocalFim",gxvar:"AV191LoteProdutoLocalFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV191LoteProdutoLocalFim=Value},v2z:function(Value){gx.O.ZV191LoteProdutoLocalFim=Value},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOLOCALFIM",gx.O.AV191LoteProdutoLocalFim,0)},c2v:function(){gx.O.AV191LoteProdutoLocalFim=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOLOCALFIM")},nac:gx.falseFn};
   GXValidFnc[135]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[137]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOTIPO",gxz:"ZV52ProdutoTipo",gxold:"OV52ProdutoTipo",gxvar:"AV52ProdutoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52ProdutoTipo=Value},v2z:function(Value){gx.O.ZV52ProdutoTipo=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOTIPO",gx.O.AV52ProdutoTipo,0)},c2v:function(){gx.O.AV52ProdutoTipo=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOTIPO")},nac:gx.falseFn};
   GXValidFnc[140]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[142]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOTIPOTRIBUTACAO",gxz:"ZV53ProdutoTipoTributacao",gxold:"OV53ProdutoTipoTributacao",gxvar:"AV53ProdutoTipoTributacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV53ProdutoTipoTributacao=Value},v2z:function(Value){gx.O.ZV53ProdutoTipoTributacao=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOTIPOTRIBUTACAO",gx.O.AV53ProdutoTipoTributacao)},c2v:function(){gx.O.AV53ProdutoTipoTributacao=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOTIPOTRIBUTACAO")},nac:gx.falseFn};
   GXValidFnc[145]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[147]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOBALANCA",gxz:"ZV56ProdutoBalanca",gxold:"OV56ProdutoBalanca",gxvar:"AV56ProdutoBalanca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV56ProdutoBalanca=Value},v2z:function(Value){gx.O.ZV56ProdutoBalanca=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOBALANCA",gx.O.AV56ProdutoBalanca)},c2v:function(){gx.O.AV56ProdutoBalanca=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOBALANCA")},nac:gx.falseFn};
   GXValidFnc[149]={fld:"TABLE11",grid:0};
   GXValidFnc[154]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtosncontrolaestoque,isvalid:null,rgrid:[],fld:"vPRODUTOSNCONTROLAESTOQUE",gxz:"ZV46ProdutoSNControlaEstoque",gxold:"OV46ProdutoSNControlaEstoque",gxvar:"AV46ProdutoSNControlaEstoque",ucs:[],op:[154],ip:[154],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV46ProdutoSNControlaEstoque=Value},v2z:function(Value){gx.O.ZV46ProdutoSNControlaEstoque=Value},v2c:function(){gx.fn.setCheckBoxValue("vPRODUTOSNCONTROLAESTOQUE",gx.O.AV46ProdutoSNControlaEstoque,"S")},c2v:function(){gx.O.AV46ProdutoSNControlaEstoque=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSNCONTROLAESTOQUE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[157]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPSNSALDOESTOQUE",gxz:"ZV54ImpSNSaldoEstoque",gxold:"OV54ImpSNSaldoEstoque",gxvar:"AV54ImpSNSaldoEstoque",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV54ImpSNSaldoEstoque=Value},v2z:function(Value){gx.O.ZV54ImpSNSaldoEstoque=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPSNSALDOESTOQUE",gx.O.AV54ImpSNSaldoEstoque,"S")},c2v:function(){gx.O.AV54ImpSNSaldoEstoque=this.val()},val:function(){return gx.fn.getControlValue("vIMPSNSALDOESTOQUE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[160]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPSNSALDOZERADO",gxz:"ZV145ImpSNSaldoZerado",gxold:"OV145ImpSNSaldoZerado",gxvar:"AV145ImpSNSaldoZerado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV145ImpSNSaldoZerado=Value},v2z:function(Value){gx.O.ZV145ImpSNSaldoZerado=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPSNSALDOZERADO",gx.O.AV145ImpSNSaldoZerado,"S")},c2v:function(){gx.O.AV145ImpSNSaldoZerado=this.val()},val:function(){return gx.fn.getControlValue("vIMPSNSALDOZERADO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[163]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPSNSALDONEGATIVO",gxz:"ZV55ImpSNSaldoNegativo",gxold:"OV55ImpSNSaldoNegativo",gxvar:"AV55ImpSNSaldoNegativo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV55ImpSNSaldoNegativo=Value},v2z:function(Value){gx.O.ZV55ImpSNSaldoNegativo=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPSNSALDONEGATIVO",gx.O.AV55ImpSNSaldoNegativo,"S")},c2v:function(){gx.O.AV55ImpSNSaldoNegativo=this.val()},val:function(){return gx.fn.getControlValue("vIMPSNSALDONEGATIVO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[166]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNPRODUTOPROMOCAO",gxz:"ZV205SNProdutoPromocao",gxold:"OV205SNProdutoPromocao",gxvar:"AV205SNProdutoPromocao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV205SNProdutoPromocao=Value},v2z:function(Value){gx.O.ZV205SNProdutoPromocao=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNPRODUTOPROMOCAO",gx.O.AV205SNProdutoPromocao,"S")},c2v:function(){gx.O.AV205SNProdutoPromocao=this.val()},val:function(){return gx.fn.getControlValue("vSNPRODUTOPROMOCAO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[169]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[171]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOSITUACAO",gxz:"ZV181ProdutoSituacao",gxold:"OV181ProdutoSituacao",gxvar:"AV181ProdutoSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV181ProdutoSituacao=Value},v2z:function(Value){gx.O.ZV181ProdutoSituacao=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOSITUACAO",gx.O.AV181ProdutoSituacao)},c2v:function(){gx.O.AV181ProdutoSituacao=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITUACAO")},nac:gx.falseFn};
   GXValidFnc[174]={fld:"TXTESQUEMA", format:0,grid:0};
   GXValidFnc[176]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Esquemacodigo,isvalid:null,rgrid:[],fld:"vESQUEMACODIGO",gxz:"ZV122EsquemaCodigo",gxold:"OV122EsquemaCodigo",gxvar:"AV122EsquemaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV122EsquemaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV122EsquemaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESQUEMACODIGO",gx.O.AV122EsquemaCodigo,0)},c2v:function(){gx.O.AV122EsquemaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESQUEMACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[177]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESQUEMADESCRICAO",gxz:"ZV140EsquemaDescricao",gxold:"OV140EsquemaDescricao",gxvar:"AV140EsquemaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV140EsquemaDescricao=Value},v2z:function(Value){gx.O.ZV140EsquemaDescricao=Value},v2c:function(){gx.fn.setControlValue("vESQUEMADESCRICAO",gx.O.AV140EsquemaDescricao,0)},c2v:function(){gx.O.AV140EsquemaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vESQUEMADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[180]={fld:"FILTRARLOTE", format:0,grid:0};
   GXValidFnc[183]={fld:"FILTRARFILIAL", format:0,grid:0};
   GXValidFnc[184]={lvl:0,type:"char",len:57,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALUNICA",gxz:"ZV194FilialUnica",gxold:"OV194FilialUnica",gxvar:"AV194FilialUnica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV194FilialUnica=Value},v2z:function(Value){gx.O.ZV194FilialUnica=Value},v2c:function(){gx.fn.setControlValue("vFILIALUNICA",gx.O.AV194FilialUnica,0)},c2v:function(){gx.O.AV194FilialUnica=this.val()},val:function(){return gx.fn.getControlValue("vFILIALUNICA")},nac:gx.falseFn};
   GXValidFnc[185]={fld:"TAB2",grid:0};
   GXValidFnc[188]={fld:"TABLE12",grid:0};
   GXValidFnc[191]={fld:"OPCOESSELECAO3", format:0,grid:0};
   GXValidFnc[194]={fld:"INCLUIPRODUTO",grid:0};
   GXValidFnc[196]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[198]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:197,gxgrid:this.GridprodutoContainer,fnc:this.Validv_Produtoid,isvalid:'e26vr2_client',rgrid:[],fld:"vPRODUTOID",gxz:"ZV73ProdutoId",gxold:"OV73ProdutoId",gxvar:"AV73ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV73ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV73ProdutoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vPRODUTOID",row || gx.fn.currentGridRowImpl(197),gx.O.AV73ProdutoId,0)},c2v:function(){gx.O.AV73ProdutoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vPRODUTOID",row || gx.fn.currentGridRowImpl(197),'.')},nac:gx.falseFn};
   GXValidFnc[199]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:197,gxgrid:this.GridprodutoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPROMPTPRODUTO",gxz:"ZV74promptProduto",gxold:"OV74promptProduto",gxvar:"AV74promptProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV74promptProduto=Value},v2z:function(Value){gx.O.ZV74promptProduto=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vPROMPTPRODUTO",row || gx.fn.currentGridRowImpl(197),gx.O.AV74promptProduto,gx.O.AV227Promptproduto_GXI)},c2v:function(){gx.O.AV227Promptproduto_GXI=this.val_GXI();gx.O.AV74promptProduto=this.val()},val:function(row){return gx.fn.getGridControlValue("vPROMPTPRODUTO",row || gx.fn.currentGridRowImpl(197))},val_GXI:function(row){return gx.fn.getGridControlValue("vPROMPTPRODUTO_GXI",row || gx.fn.currentGridRowImpl(197))}, gxvar_GXI:'AV227Promptproduto_GXI',nac:gx.falseFn};
   GXValidFnc[200]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:197,gxgrid:this.GridprodutoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDA",gxz:"ZV75ProdutoDescricaoResumida",gxold:"OV75ProdutoDescricaoResumida",gxvar:"AV75ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV75ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.ZV75ProdutoDescricaoResumida=Value},v2c:function(row){gx.fn.setGridControlValue("vPRODUTODESCRICAORESUMIDA",row || gx.fn.currentGridRowImpl(197),gx.O.AV75ProdutoDescricaoResumida,0)},c2v:function(){gx.O.AV75ProdutoDescricaoResumida=this.val()},val:function(row){return gx.fn.getGridControlValue("vPRODUTODESCRICAORESUMIDA",row || gx.fn.currentGridRowImpl(197))},nac:gx.falseFn};
   GXValidFnc[201]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:197,gxgrid:this.GridprodutoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vEXCLINHAPRODUTO",gxz:"ZV78excLinhaProduto",gxold:"OV78excLinhaProduto",gxvar:"AV78excLinhaProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV78excLinhaProduto=Value},v2z:function(Value){gx.O.ZV78excLinhaProduto=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vEXCLINHAPRODUTO",row || gx.fn.currentGridRowImpl(197),gx.O.AV78excLinhaProduto,gx.O.AV228Exclinhaproduto_GXI)},c2v:function(){gx.O.AV228Exclinhaproduto_GXI=this.val_GXI();gx.O.AV78excLinhaProduto=this.val()},val:function(row){return gx.fn.getGridControlValue("vEXCLINHAPRODUTO",row || gx.fn.currentGridRowImpl(197))},val_GXI:function(row){return gx.fn.getGridControlValue("vEXCLINHAPRODUTO_GXI",row || gx.fn.currentGridRowImpl(197))}, gxvar_GXI:'AV228Exclinhaproduto_GXI',nac:gx.falseFn};
   GXValidFnc[202]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:197,gxgrid:this.GridprodutoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTROLALINHAPRODUTO",gxz:"ZV79ControlaLinhaProduto",gxold:"OV79ControlaLinhaProduto",gxvar:"AV79ControlaLinhaProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV79ControlaLinhaProduto=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV79ControlaLinhaProduto=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vCONTROLALINHAPRODUTO",row || gx.fn.currentGridRowImpl(197),gx.O.AV79ControlaLinhaProduto,0)},c2v:function(){gx.O.AV79ControlaLinhaProduto=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vCONTROLALINHAPRODUTO",row || gx.fn.currentGridRowImpl(197),'.')},nac:gx.falseFn};
   GXValidFnc[203]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[204]={fld:"TAB3",grid:0};
   GXValidFnc[207]={fld:"TABLE13",grid:0};
   GXValidFnc[210]={fld:"OPCOESSELECAO1", format:0,grid:0};
   GXValidFnc[213]={fld:"INCLUIFAMILIA",grid:0};
   GXValidFnc[215]={fld:"DIV3", format:2,grid:0};
   GXValidFnc[217]={lvl:11,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:216,gxgrid:this.GridfamiliaContainer,fnc:this.Validv_Produtofamiliaid,isvalid:'e37vr2_client',rgrid:[],fld:"vPRODUTOFAMILIAID",gxz:"ZV59ProdutoFamiliaId",gxold:"OV59ProdutoFamiliaId",gxvar:"AV59ProdutoFamiliaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV59ProdutoFamiliaId=Value},v2z:function(Value){gx.O.ZV59ProdutoFamiliaId=Value},v2c:function(row){gx.fn.setGridControlValue("vPRODUTOFAMILIAID",row || gx.fn.currentGridRowImpl(216),gx.O.AV59ProdutoFamiliaId,0)},c2v:function(){gx.O.AV59ProdutoFamiliaId=this.val()},val:function(row){return gx.fn.getGridControlValue("vPRODUTOFAMILIAID",row || gx.fn.currentGridRowImpl(216))},nac:gx.falseFn};
   GXValidFnc[218]={lvl:11,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:216,gxgrid:this.GridfamiliaContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPROMPTFAMILIA",gxz:"ZV61promptFamilia",gxold:"OV61promptFamilia",gxvar:"AV61promptFamilia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV61promptFamilia=Value},v2z:function(Value){gx.O.ZV61promptFamilia=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vPROMPTFAMILIA",row || gx.fn.currentGridRowImpl(216),gx.O.AV61promptFamilia,gx.O.AV229Promptfamilia_GXI)},c2v:function(){gx.O.AV229Promptfamilia_GXI=this.val_GXI();gx.O.AV61promptFamilia=this.val()},val:function(row){return gx.fn.getGridControlValue("vPROMPTFAMILIA",row || gx.fn.currentGridRowImpl(216))},val_GXI:function(row){return gx.fn.getGridControlValue("vPROMPTFAMILIA_GXI",row || gx.fn.currentGridRowImpl(216))}, gxvar_GXI:'AV229Promptfamilia_GXI',nac:gx.falseFn};
   GXValidFnc[219]={lvl:11,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:216,gxgrid:this.GridfamiliaContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOFAMILIADESCRICAO",gxz:"ZV60ProdutoFamiliaDescricao",gxold:"OV60ProdutoFamiliaDescricao",gxvar:"AV60ProdutoFamiliaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV60ProdutoFamiliaDescricao=Value},v2z:function(Value){gx.O.ZV60ProdutoFamiliaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vPRODUTOFAMILIADESCRICAO",row || gx.fn.currentGridRowImpl(216),gx.O.AV60ProdutoFamiliaDescricao,0)},c2v:function(){gx.O.AV60ProdutoFamiliaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vPRODUTOFAMILIADESCRICAO",row || gx.fn.currentGridRowImpl(216))},nac:gx.falseFn};
   GXValidFnc[220]={lvl:11,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:216,gxgrid:this.GridfamiliaContainer,fnc:null,isvalid:null,rgrid:[],fld:"vEXCLINHAFAMILIA",gxz:"ZV80excLinhaFamilia",gxold:"OV80excLinhaFamilia",gxvar:"AV80excLinhaFamilia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV80excLinhaFamilia=Value},v2z:function(Value){gx.O.ZV80excLinhaFamilia=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vEXCLINHAFAMILIA",row || gx.fn.currentGridRowImpl(216),gx.O.AV80excLinhaFamilia,gx.O.AV230Exclinhafamilia_GXI)},c2v:function(){gx.O.AV230Exclinhafamilia_GXI=this.val_GXI();gx.O.AV80excLinhaFamilia=this.val()},val:function(row){return gx.fn.getGridControlValue("vEXCLINHAFAMILIA",row || gx.fn.currentGridRowImpl(216))},val_GXI:function(row){return gx.fn.getGridControlValue("vEXCLINHAFAMILIA_GXI",row || gx.fn.currentGridRowImpl(216))}, gxvar_GXI:'AV230Exclinhafamilia_GXI',nac:gx.falseFn};
   GXValidFnc[221]={lvl:11,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:216,gxgrid:this.GridfamiliaContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTROLALINHAFAMILIA",gxz:"ZV81ControlaLinhaFamilia",gxold:"OV81ControlaLinhaFamilia",gxvar:"AV81ControlaLinhaFamilia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV81ControlaLinhaFamilia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV81ControlaLinhaFamilia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vCONTROLALINHAFAMILIA",row || gx.fn.currentGridRowImpl(216),gx.O.AV81ControlaLinhaFamilia,0)},c2v:function(){gx.O.AV81ControlaLinhaFamilia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vCONTROLALINHAFAMILIA",row || gx.fn.currentGridRowImpl(216),'.')},nac:gx.falseFn};
   GXValidFnc[222]={fld:"DIV4", format:2,grid:0};
   GXValidFnc[225]={fld:"TABLE6",grid:0};
   GXValidFnc[228]={fld:"OPCOESSELECAO2", format:0,grid:0};
   GXValidFnc[231]={fld:"INCLUIFABRICANTE",grid:0};
   GXValidFnc[233]={fld:"DIV5", format:2,grid:0};
   GXValidFnc[235]={lvl:13,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:234,gxgrid:this.GridfabricanteContainer,fnc:this.Validv_Produtofabricanteid,isvalid:'e34vr2_client',rgrid:[],fld:"vPRODUTOFABRICANTEID",gxz:"ZV92ProdutoFabricanteId",gxold:"OV92ProdutoFabricanteId",gxvar:"AV92ProdutoFabricanteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV92ProdutoFabricanteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV92ProdutoFabricanteId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vPRODUTOFABRICANTEID",row || gx.fn.currentGridRowImpl(234),gx.O.AV92ProdutoFabricanteId,0)},c2v:function(){gx.O.AV92ProdutoFabricanteId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vPRODUTOFABRICANTEID",row || gx.fn.currentGridRowImpl(234),'.')},nac:gx.falseFn};
   GXValidFnc[236]={lvl:13,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:234,gxgrid:this.GridfabricanteContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPROMPTFABRICANTE",gxz:"ZV77promptFabricante",gxold:"OV77promptFabricante",gxvar:"AV77promptFabricante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV77promptFabricante=Value},v2z:function(Value){gx.O.ZV77promptFabricante=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vPROMPTFABRICANTE",row || gx.fn.currentGridRowImpl(234),gx.O.AV77promptFabricante,gx.O.AV231Promptfabricante_GXI)},c2v:function(){gx.O.AV231Promptfabricante_GXI=this.val_GXI();gx.O.AV77promptFabricante=this.val()},val:function(row){return gx.fn.getGridControlValue("vPROMPTFABRICANTE",row || gx.fn.currentGridRowImpl(234))},val_GXI:function(row){return gx.fn.getGridControlValue("vPROMPTFABRICANTE_GXI",row || gx.fn.currentGridRowImpl(234))}, gxvar_GXI:'AV231Promptfabricante_GXI',nac:gx.falseFn};
   GXValidFnc[237]={lvl:13,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:234,gxgrid:this.GridfabricanteContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOFABRICANTEFANTASIA",gxz:"ZV96ProdutoFabricanteFantasia",gxold:"OV96ProdutoFabricanteFantasia",gxvar:"AV96ProdutoFabricanteFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV96ProdutoFabricanteFantasia=Value},v2z:function(Value){gx.O.ZV96ProdutoFabricanteFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("vPRODUTOFABRICANTEFANTASIA",row || gx.fn.currentGridRowImpl(234),gx.O.AV96ProdutoFabricanteFantasia,0)},c2v:function(){gx.O.AV96ProdutoFabricanteFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("vPRODUTOFABRICANTEFANTASIA",row || gx.fn.currentGridRowImpl(234))},nac:gx.falseFn};
   GXValidFnc[238]={lvl:13,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:234,gxgrid:this.GridfabricanteContainer,fnc:null,isvalid:null,rgrid:[],fld:"vEXCLINHAFABRICANTE",gxz:"ZV95excLinhaFabricante",gxold:"OV95excLinhaFabricante",gxvar:"AV95excLinhaFabricante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV95excLinhaFabricante=Value},v2z:function(Value){gx.O.ZV95excLinhaFabricante=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vEXCLINHAFABRICANTE",row || gx.fn.currentGridRowImpl(234),gx.O.AV95excLinhaFabricante,gx.O.AV232Exclinhafabricante_GXI)},c2v:function(){gx.O.AV232Exclinhafabricante_GXI=this.val_GXI();gx.O.AV95excLinhaFabricante=this.val()},val:function(row){return gx.fn.getGridControlValue("vEXCLINHAFABRICANTE",row || gx.fn.currentGridRowImpl(234))},val_GXI:function(row){return gx.fn.getGridControlValue("vEXCLINHAFABRICANTE_GXI",row || gx.fn.currentGridRowImpl(234))}, gxvar_GXI:'AV232Exclinhafabricante_GXI',nac:gx.falseFn};
   GXValidFnc[239]={lvl:13,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:234,gxgrid:this.GridfabricanteContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTROLALINHAFABRICANTE",gxz:"ZV97ControlaLinhaFabricante",gxold:"OV97ControlaLinhaFabricante",gxvar:"AV97ControlaLinhaFabricante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV97ControlaLinhaFabricante=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV97ControlaLinhaFabricante=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vCONTROLALINHAFABRICANTE",row || gx.fn.currentGridRowImpl(234),gx.O.AV97ControlaLinhaFabricante,0)},c2v:function(){gx.O.AV97ControlaLinhaFabricante=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vCONTROLALINHAFABRICANTE",row || gx.fn.currentGridRowImpl(234),'.')},nac:gx.falseFn};
   GXValidFnc[240]={fld:"DIV6", format:2,grid:0};
   GXValidFnc[241]={fld:"TAB4",grid:0};
   GXValidFnc[244]={fld:"TABLE8",grid:0};
   GXValidFnc[247]={fld:"OPCOESSELECAO4", format:0,grid:0};
   GXValidFnc[250]={fld:"INCLUICLASSIFICACAO",grid:0};
   GXValidFnc[252]={fld:"DIV7", format:2,grid:0};
   GXValidFnc[254]={lvl:15,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:253,gxgrid:this.GridclassificacaoContainer,fnc:this.Validv_Classificacaoestidgrid,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOESTIDGRID",gxz:"ZV102ClassificacaoEstIdGrid",gxold:"OV102ClassificacaoEstIdGrid",gxvar:"AV102ClassificacaoEstIdGrid",ucs:[],op:[255],ip:[255,254],nacdep:[],ctrltype:"dyncombo",inputType:'text',v2v:function(Value){gx.O.AV102ClassificacaoEstIdGrid=Value},v2z:function(Value){gx.O.ZV102ClassificacaoEstIdGrid=Value},v2c:function(row){gx.fn.setGridComboBoxValue("vCLASSIFICACAOESTIDGRID",row || gx.fn.currentGridRowImpl(253),gx.O.AV102ClassificacaoEstIdGrid)},c2v:function(){gx.O.AV102ClassificacaoEstIdGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vCLASSIFICACAOESTIDGRID",row || gx.fn.currentGridRowImpl(253))},nac:gx.falseFn};
   GXValidFnc[255]={lvl:15,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:253,gxgrid:this.GridclassificacaoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCLASSIFICACAOVALOR",gxz:"ZV105ProdutoClassificacaoValor",gxold:"OV105ProdutoClassificacaoValor",gxvar:"AV105ProdutoClassificacaoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",inputType:'text',v2v:function(Value){gx.O.AV105ProdutoClassificacaoValor=Value},v2z:function(Value){gx.O.ZV105ProdutoClassificacaoValor=Value},v2c:function(row){gx.fn.setGridComboBoxValue("vPRODUTOCLASSIFICACAOVALOR",row || gx.fn.currentGridRowImpl(253),gx.O.AV105ProdutoClassificacaoValor)},c2v:function(){gx.O.AV105ProdutoClassificacaoValor=this.val()},val:function(row){return gx.fn.getGridControlValue("vPRODUTOCLASSIFICACAOVALOR",row || gx.fn.currentGridRowImpl(253))},nac:gx.falseFn};
   GXValidFnc[256]={lvl:15,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:253,gxgrid:this.GridclassificacaoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vEXCLINHACLASSIFICACAO",gxz:"ZV103excLinhaClassificacao",gxold:"OV103excLinhaClassificacao",gxvar:"AV103excLinhaClassificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV103excLinhaClassificacao=Value},v2z:function(Value){gx.O.ZV103excLinhaClassificacao=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vEXCLINHACLASSIFICACAO",row || gx.fn.currentGridRowImpl(253),gx.O.AV103excLinhaClassificacao,gx.O.AV233Exclinhaclassificacao_GXI)},c2v:function(){gx.O.AV233Exclinhaclassificacao_GXI=this.val_GXI();gx.O.AV103excLinhaClassificacao=this.val()},val:function(row){return gx.fn.getGridControlValue("vEXCLINHACLASSIFICACAO",row || gx.fn.currentGridRowImpl(253))},val_GXI:function(row){return gx.fn.getGridControlValue("vEXCLINHACLASSIFICACAO_GXI",row || gx.fn.currentGridRowImpl(253))}, gxvar_GXI:'AV233Exclinhaclassificacao_GXI',nac:gx.falseFn};
   GXValidFnc[257]={lvl:15,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:253,gxgrid:this.GridclassificacaoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTROLALINHACLASSIFICACAO",gxz:"ZV104ControlaLinhaClassificacao",gxold:"OV104ControlaLinhaClassificacao",gxvar:"AV104ControlaLinhaClassificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV104ControlaLinhaClassificacao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV104ControlaLinhaClassificacao=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vCONTROLALINHACLASSIFICACAO",row || gx.fn.currentGridRowImpl(253),gx.O.AV104ControlaLinhaClassificacao,0)},c2v:function(){gx.O.AV104ControlaLinhaClassificacao=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vCONTROLALINHACLASSIFICACAO",row || gx.fn.currentGridRowImpl(253),'.')},nac:gx.falseFn};
   GXValidFnc[258]={fld:"DIV8", format:2,grid:0};
   GXValidFnc[261]={fld:"TABLE7",grid:0};
   GXValidFnc[264]={fld:"OPCOESSELECAO5", format:0,grid:0};
   GXValidFnc[267]={fld:"INCLUICODIFICACAO",grid:0};
   GXValidFnc[269]={fld:"DIV9", format:2,grid:0};
   GXValidFnc[271]={lvl:16,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:270,gxgrid:this.GridcodificacaoContainer,fnc:this.Validv_Codificacaoestidgrid,isvalid:null,rgrid:[],fld:"vCODIFICACAOESTIDGRID",gxz:"ZV109CodificacaoEstIdGrid",gxold:"OV109CodificacaoEstIdGrid",gxvar:"AV109CodificacaoEstIdGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",inputType:'text',v2v:function(Value){gx.O.AV109CodificacaoEstIdGrid=Value},v2z:function(Value){gx.O.ZV109CodificacaoEstIdGrid=Value},v2c:function(row){gx.fn.setGridComboBoxValue("vCODIFICACAOESTIDGRID",row || gx.fn.currentGridRowImpl(270),gx.O.AV109CodificacaoEstIdGrid)},c2v:function(){gx.O.AV109CodificacaoEstIdGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vCODIFICACAOESTIDGRID",row || gx.fn.currentGridRowImpl(270))},nac:gx.falseFn};
   GXValidFnc[272]={lvl:16,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:270,gxgrid:this.GridcodificacaoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIFICACAOVALOR",gxz:"ZV110ProdutoCodificacaoValor",gxold:"OV110ProdutoCodificacaoValor",gxvar:"AV110ProdutoCodificacaoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV110ProdutoCodificacaoValor=Value},v2z:function(Value){gx.O.ZV110ProdutoCodificacaoValor=Value},v2c:function(row){gx.fn.setGridControlValue("vPRODUTOCODIFICACAOVALOR",row || gx.fn.currentGridRowImpl(270),gx.O.AV110ProdutoCodificacaoValor,0)},c2v:function(){gx.O.AV110ProdutoCodificacaoValor=this.val()},val:function(row){return gx.fn.getGridControlValue("vPRODUTOCODIFICACAOVALOR",row || gx.fn.currentGridRowImpl(270))},nac:gx.falseFn};
   GXValidFnc[273]={lvl:16,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:270,gxgrid:this.GridcodificacaoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vEXCLINHACODIFICACAO",gxz:"ZV111excLinhaCodificacao",gxold:"OV111excLinhaCodificacao",gxvar:"AV111excLinhaCodificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV111excLinhaCodificacao=Value},v2z:function(Value){gx.O.ZV111excLinhaCodificacao=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vEXCLINHACODIFICACAO",row || gx.fn.currentGridRowImpl(270),gx.O.AV111excLinhaCodificacao,gx.O.AV234Exclinhacodificacao_GXI)},c2v:function(){gx.O.AV234Exclinhacodificacao_GXI=this.val_GXI();gx.O.AV111excLinhaCodificacao=this.val()},val:function(row){return gx.fn.getGridControlValue("vEXCLINHACODIFICACAO",row || gx.fn.currentGridRowImpl(270))},val_GXI:function(row){return gx.fn.getGridControlValue("vEXCLINHACODIFICACAO_GXI",row || gx.fn.currentGridRowImpl(270))}, gxvar_GXI:'AV234Exclinhacodificacao_GXI',nac:gx.falseFn};
   GXValidFnc[274]={lvl:16,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:270,gxgrid:this.GridcodificacaoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTROLALINHACODIFICACAO",gxz:"ZV112ControlaLinhaCodificacao",gxold:"OV112ControlaLinhaCodificacao",gxvar:"AV112ControlaLinhaCodificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV112ControlaLinhaCodificacao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV112ControlaLinhaCodificacao=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vCONTROLALINHACODIFICACAO",row || gx.fn.currentGridRowImpl(270),gx.O.AV112ControlaLinhaCodificacao,0)},c2v:function(){gx.O.AV112ControlaLinhaCodificacao=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vCONTROLALINHACODIFICACAO",row || gx.fn.currentGridRowImpl(270),'.')},nac:gx.falseFn};
   GXValidFnc[275]={fld:"DIV10", format:2,grid:0};
   GXValidFnc[284]={fld:"JS", format:2,grid:0};
   GXValidFnc[285]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV93Sim",gxold:"OV93Sim",gxvar:"AV93Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV93Sim=Value},v2z:function(Value){gx.O.ZV93Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV93Sim,0)},c2v:function(){gx.O.AV93Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[286]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORATRIBUTO1",gxz:"ZV124ValorAtributo1",gxold:"OV124ValorAtributo1",gxvar:"AV124ValorAtributo1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV124ValorAtributo1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV124ValorAtributo1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVALORATRIBUTO1",gx.O.AV124ValorAtributo1,0)},c2v:function(){gx.O.AV124ValorAtributo1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVALORATRIBUTO1",'.')},nac:gx.falseFn};
   GXValidFnc[287]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV94Nao",gxold:"OV94Nao",gxvar:"AV94Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV94Nao=Value},v2z:function(Value){gx.O.ZV94Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV94Nao,0)},c2v:function(){gx.O.AV94Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[288]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORATRIBUTOCOMBO1",gxz:"ZV129ValorAtributoCombo1",gxold:"OV129ValorAtributoCombo1",gxvar:"AV129ValorAtributoCombo1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV129ValorAtributoCombo1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV129ValorAtributoCombo1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVALORATRIBUTOCOMBO1",gx.O.AV129ValorAtributoCombo1,0)},c2v:function(){gx.O.AV129ValorAtributoCombo1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVALORATRIBUTOCOMBO1",'.')},nac:gx.falseFn};
   GXValidFnc[289]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORATRIBUTO2",gxz:"ZV125ValorAtributo2",gxold:"OV125ValorAtributo2",gxvar:"AV125ValorAtributo2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV125ValorAtributo2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV125ValorAtributo2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVALORATRIBUTO2",gx.O.AV125ValorAtributo2,0)},c2v:function(){gx.O.AV125ValorAtributo2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVALORATRIBUTO2",'.')},nac:gx.falseFn};
   GXValidFnc[290]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORATRIBUTOCOMBO2",gxz:"ZV130ValorAtributoCombo2",gxold:"OV130ValorAtributoCombo2",gxvar:"AV130ValorAtributoCombo2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV130ValorAtributoCombo2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV130ValorAtributoCombo2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVALORATRIBUTOCOMBO2",gx.O.AV130ValorAtributoCombo2,0)},c2v:function(){gx.O.AV130ValorAtributoCombo2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVALORATRIBUTOCOMBO2",'.')},nac:gx.falseFn};
   GXValidFnc[291]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORATRIBUTO3",gxz:"ZV126ValorAtributo3",gxold:"OV126ValorAtributo3",gxvar:"AV126ValorAtributo3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV126ValorAtributo3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV126ValorAtributo3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVALORATRIBUTO3",gx.O.AV126ValorAtributo3,0)},c2v:function(){gx.O.AV126ValorAtributo3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVALORATRIBUTO3",'.')},nac:gx.falseFn};
   GXValidFnc[292]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORATRIBUTOCOMBO3",gxz:"ZV131ValorAtributoCombo3",gxold:"OV131ValorAtributoCombo3",gxvar:"AV131ValorAtributoCombo3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV131ValorAtributoCombo3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV131ValorAtributoCombo3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVALORATRIBUTOCOMBO3",gx.O.AV131ValorAtributoCombo3,0)},c2v:function(){gx.O.AV131ValorAtributoCombo3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVALORATRIBUTOCOMBO3",'.')},nac:gx.falseFn};
   GXValidFnc[293]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORATRIBUTO4",gxz:"ZV127ValorAtributo4",gxold:"OV127ValorAtributo4",gxvar:"AV127ValorAtributo4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV127ValorAtributo4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV127ValorAtributo4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVALORATRIBUTO4",gx.O.AV127ValorAtributo4,0)},c2v:function(){gx.O.AV127ValorAtributo4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVALORATRIBUTO4",'.')},nac:gx.falseFn};
   GXValidFnc[294]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORATRIBUTOCOMBO4",gxz:"ZV132ValorAtributoCombo4",gxold:"OV132ValorAtributoCombo4",gxvar:"AV132ValorAtributoCombo4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV132ValorAtributoCombo4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV132ValorAtributoCombo4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVALORATRIBUTOCOMBO4",gx.O.AV132ValorAtributoCombo4,0)},c2v:function(){gx.O.AV132ValorAtributoCombo4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVALORATRIBUTOCOMBO4",'.')},nac:gx.falseFn};
   GXValidFnc[295]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORATRIBUTO5",gxz:"ZV128ValorAtributo5",gxold:"OV128ValorAtributo5",gxvar:"AV128ValorAtributo5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV128ValorAtributo5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV128ValorAtributo5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVALORATRIBUTO5",gx.O.AV128ValorAtributo5,0)},c2v:function(){gx.O.AV128ValorAtributo5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVALORATRIBUTO5",'.')},nac:gx.falseFn};
   GXValidFnc[296]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORATRIBUTOCOMBO5",gxz:"ZV133ValorAtributoCombo5",gxold:"OV133ValorAtributoCombo5",gxvar:"AV133ValorAtributoCombo5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV133ValorAtributoCombo5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV133ValorAtributoCombo5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVALORATRIBUTOCOMBO5",gx.O.AV133ValorAtributoCombo5,0)},c2v:function(){gx.O.AV133ValorAtributoCombo5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVALORATRIBUTOCOMBO5",'.')},nac:gx.falseFn};
   GXValidFnc[297]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Codificacaoestempresaid,isvalid:null,rgrid:[],fld:"vCODIFICACAOESTEMPRESAID",gxz:"ZV43CodificacaoEstEmpresaId",gxold:"OV43CodificacaoEstEmpresaId",gxvar:"AV43CodificacaoEstEmpresaId",ucs:[],op:[271],ip:[271,297],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43CodificacaoEstEmpresaId=Value},v2z:function(Value){gx.O.ZV43CodificacaoEstEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCODIFICACAOESTEMPRESAID",gx.O.AV43CodificacaoEstEmpresaId,0)},c2v:function(){gx.O.AV43CodificacaoEstEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCODIFICACAOESTEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[298]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaempresaid,isvalid:null,rgrid:[],fld:"vPESSOAEMPRESAID",gxz:"ZV100PessoaEmpresaId",gxold:"OV100PessoaEmpresaId",gxvar:"AV100PessoaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV100PessoaEmpresaId=Value},v2z:function(Value){gx.O.ZV100PessoaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMPRESAID",gx.O.AV100PessoaEmpresaId,0)},c2v:function(){gx.O.AV100PessoaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[299]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoempresaid,isvalid:null,rgrid:[],fld:"vPRODUTOEMPRESAID",gxz:"ZV24ProdutoEmpresaId",gxold:"OV24ProdutoEmpresaId",gxvar:"AV24ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24ProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV24ProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOEMPRESAID",gx.O.AV24ProdutoEmpresaId,0)},c2v:function(){gx.O.AV24ProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[300]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPFILIALID",gxz:"ZV85PFilialId",gxold:"OV85PFilialId",gxvar:"AV85PFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV85PFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV85PFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPFILIALID",gx.O.AV85PFilialId,0)},c2v:function(){gx.O.AV85PFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[301]={lvl:0,type:"date",len:8,dec:0,sign:true,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Gx_date,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};
   GXValidFnc[302]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECONULO",gxz:"ZV86PrecoNulo",gxold:"OV86PrecoNulo",gxvar:"AV86PrecoNulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV86PrecoNulo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV86PrecoNulo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECONULO",gx.O.AV86PrecoNulo,0)},c2v:function(){gx.O.AV86PrecoNulo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECONULO",'.')},nac:gx.falseFn};
   GXValidFnc[303]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCATEGORIA",gxz:"ZV87ProdutoCategoria",gxold:"OV87ProdutoCategoria",gxvar:"AV87ProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV87ProdutoCategoria=Value},v2z:function(Value){gx.O.ZV87ProdutoCategoria=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOCATEGORIA",gx.O.AV87ProdutoCategoria)},c2v:function(){gx.O.AV87ProdutoCategoria=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCATEGORIA")},nac:gx.falseFn};
   GXValidFnc[304]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTOID",gxz:"ZV88GrupoProdutoId",gxold:"OV88GrupoProdutoId",gxvar:"AV88GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV88GrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV88GrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOID",gx.O.AV88GrupoProdutoId,0)},c2v:function(){gx.O.AV88GrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[305]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOID",gxz:"ZV89SubGrupoProdutoId",gxold:"OV89SubGrupoProdutoId",gxvar:"AV89SubGrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV89SubGrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV89SubGrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOID",gx.O.AV89SubGrupoProdutoId,0)},c2v:function(){gx.O.AV89SubGrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[306]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOID",gxz:"ZV90ProdutoCodigoId",gxold:"OV90ProdutoCodigoId",gxvar:"AV90ProdutoCodigoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV90ProdutoCodigoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV90ProdutoCodigoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOID",gx.O.AV90ProdutoCodigoId,0)},c2v:function(){gx.O.AV90ProdutoCodigoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOID",'.')},nac:gx.falseFn};
   GXValidFnc[307]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAO",gxz:"ZV91LoteProdutoCombinacao",gxold:"OV91LoteProdutoCombinacao",gxvar:"AV91LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV91LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.ZV91LoteProdutoCombinacao=Value},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAO",gx.O.AV91LoteProdutoCombinacao,0)},c2v:function(){gx.O.AV91LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[308]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAUXNUM",gxz:"ZV177AuxNum",gxold:"OV177AuxNum",gxvar:"AV177AuxNum",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV177AuxNum=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV177AuxNum=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vAUXNUM",gx.O.AV177AuxNum,0)},c2v:function(){gx.O.AV177AuxNum=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vAUXNUM",'.')},nac:gx.falseFn};
   GXValidFnc[309]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV176SNVenda",gxold:"OV176SNVenda",gxvar:"AV176SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV176SNVenda=Value},v2z:function(Value){gx.O.ZV176SNVenda=Value},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV176SNVenda,0)},c2v:function(){gx.O.AV176SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};
   GXValidFnc[310]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIAPROMPT",gxz:"ZV178ProdutoReferenciaPrompt",gxold:"OV178ProdutoReferenciaPrompt",gxvar:"AV178ProdutoReferenciaPrompt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV178ProdutoReferenciaPrompt=Value},v2z:function(Value){gx.O.ZV178ProdutoReferenciaPrompt=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIAPROMPT",gx.O.AV178ProdutoReferenciaPrompt,0)},c2v:function(){gx.O.AV178ProdutoReferenciaPrompt=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIAPROMPT")},nac:gx.falseFn};
   GXValidFnc[311]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOBARRASPROMPT",gxz:"ZV179ProdutoCodigoBarrasPrompt",gxold:"OV179ProdutoCodigoBarrasPrompt",gxvar:"AV179ProdutoCodigoBarrasPrompt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV179ProdutoCodigoBarrasPrompt=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV179ProdutoCodigoBarrasPrompt=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOBARRASPROMPT",gx.O.AV179ProdutoCodigoBarrasPrompt,0)},c2v:function(){gx.O.AV179ProdutoCodigoBarrasPrompt=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOBARRASPROMPT",'.')},nac:gx.falseFn};
   GXValidFnc[312]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Familiaempresaid,isvalid:null,rgrid:[],fld:"vFAMILIAEMPRESAID",gxz:"ZV63FamiliaEmpresaId",gxold:"OV63FamiliaEmpresaId",gxvar:"AV63FamiliaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63FamiliaEmpresaId=Value},v2z:function(Value){gx.O.ZV63FamiliaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAEMPRESAID",gx.O.AV63FamiliaEmpresaId,0)},c2v:function(){gx.O.AV63FamiliaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[313]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Classificacaoestempresaid,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOESTEMPRESAID",gxz:"ZV42ClassificacaoEstEmpresaId",gxold:"OV42ClassificacaoEstEmpresaId",gxvar:"AV42ClassificacaoEstEmpresaId",ucs:[],op:[254],ip:[254,313],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42ClassificacaoEstEmpresaId=Value},v2z:function(Value){gx.O.ZV42ClassificacaoEstEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCLASSIFICACAOESTEMPRESAID",gx.O.AV42ClassificacaoEstEmpresaId,0)},c2v:function(){gx.O.AV42ClassificacaoEstEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOESTEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[314]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Parametroconsultaempresaid,isvalid:null,rgrid:[],fld:"vPARAMETROCONSULTAEMPRESAID",gxz:"ZV25ParametroConsultaEmpresaId",gxold:"OV25ParametroConsultaEmpresaId",gxvar:"AV25ParametroConsultaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25ParametroConsultaEmpresaId=Value},v2z:function(Value){gx.O.ZV25ParametroConsultaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPARAMETROCONSULTAEMPRESAID",gx.O.AV25ParametroConsultaEmpresaId,0)},c2v:function(){gx.O.AV25ParametroConsultaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPARAMETROCONSULTAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[315]={lvl:0,type:"int",len:10,dec:0,sign:true,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARACTERRELATORIO",gxz:"ZV135QtdeCaracterRelatorio",gxold:"OV135QtdeCaracterRelatorio",gxvar:"AV135QtdeCaracterRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV135QtdeCaracterRelatorio=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV135QtdeCaracterRelatorio=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARACTERRELATORIO",gx.O.AV135QtdeCaracterRelatorio,0)},c2v:function(){gx.O.AV135QtdeCaracterRelatorio=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARACTERRELATORIO",'.')},nac:gx.falseFn};
   GXValidFnc[316]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNIMPRIMIR",gxz:"ZV139SNImprimir",gxold:"OV139SNImprimir",gxvar:"AV139SNImprimir",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV139SNImprimir=Value},v2z:function(Value){gx.O.ZV139SNImprimir=Value},v2c:function(){gx.fn.setControlValue("vSNIMPRIMIR",gx.O.AV139SNImprimir,0)},c2v:function(){gx.O.AV139SNImprimir=this.val()},val:function(){return gx.fn.getControlValue("vSNIMPRIMIR")},nac:gx.falseFn};
   GXValidFnc[317]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUNIDADEEMPRESAID",gxz:"ZV49UnidadeEmpresaId",gxold:"OV49UnidadeEmpresaId",gxvar:"AV49UnidadeEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49UnidadeEmpresaId=Value},v2z:function(Value){gx.O.ZV49UnidadeEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vUNIDADEEMPRESAID",gx.O.AV49UnidadeEmpresaId,0)},c2v:function(){gx.O.AV49UnidadeEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vUNIDADEEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[318]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV39FilialEmpresaId",gxold:"OV39FilialEmpresaId",gxvar:"AV39FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV39FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV39FilialEmpresaId,0)},c2v:function(){gx.O.AV39FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[319]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNBLOQUEIATELA",gxz:"ZV201SNBloqueiaTela",gxold:"OV201SNBloqueiaTela",gxvar:"AV201SNBloqueiaTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV201SNBloqueiaTela=Value},v2z:function(Value){gx.O.ZV201SNBloqueiaTela=Value},v2c:function(){gx.fn.setControlValue("vSNBLOQUEIATELA",gx.O.AV201SNBloqueiaTela,0)},c2v:function(){gx.O.AV201SNBloqueiaTela=this.val()},val:function(){return gx.fn.getControlValue("vSNBLOQUEIATELA")},nac:gx.falseFn};
   GXValidFnc[321]={fld:"BTNHELP",grid:0};
   GXValidFnc[323]={fld:"PROMPT_PARAMETROCONSULTACODIGO",grid:0};
   GXValidFnc[324]={fld:"PROMPT_PRECOPRODUTOPRECOIDINI",grid:0};
   GXValidFnc[325]={fld:"PROMPT_PRECOPRODUTOPRECOIDFIM",grid:0};
   GXValidFnc[326]={fld:"PROMPT_UNIDADECOMPRAIDINI",grid:0};
   GXValidFnc[327]={fld:"PROMPT_UNIDADECOMPRAIDFIM",grid:0};
   GXValidFnc[328]={fld:"PROMPT_UNIDADEVENDAIDINI",grid:0};
   GXValidFnc[329]={fld:"PROMPT_UNIDADEVENDAIDFIM",grid:0};
   GXValidFnc[330]={fld:"PROMPT_ESQUEMACODIGO",grid:0};
   this.AV153TxtTela = "" ;
   this.ZV153TxtTela = "" ;
   this.OV153TxtTela = "" ;
   this.AV22ParametroConsultaCodigo = 0 ;
   this.ZV22ParametroConsultaCodigo = 0 ;
   this.OV22ParametroConsultaCodigo = 0 ;
   this.AV26ParametroConsultaDescricao = "" ;
   this.ZV26ParametroConsultaDescricao = "" ;
   this.OV26ParametroConsultaDescricao = "" ;
   this.AV37DataReferencia = gx.date.nullDate() ;
   this.ZV37DataReferencia = gx.date.nullDate() ;
   this.OV37DataReferencia = gx.date.nullDate() ;
   this.AV29ParametroConsultaPriOrdenacao = "" ;
   this.ZV29ParametroConsultaPriOrdenacao = "" ;
   this.OV29ParametroConsultaPriOrdenacao = "" ;
   this.AV30ParametroConsultaSegOrdenacao = "" ;
   this.ZV30ParametroConsultaSegOrdenacao = "" ;
   this.OV30ParametroConsultaSegOrdenacao = "" ;
   this.AV19SNGerarCSV = "" ;
   this.ZV19SNGerarCSV = "" ;
   this.OV19SNGerarCSV = "" ;
   this.AV31SNSaltaPagPriOrdenacao = "" ;
   this.ZV31SNSaltaPagPriOrdenacao = "" ;
   this.OV31SNSaltaPagPriOrdenacao = "" ;
   this.AV32SNSaltaPagSegOrdenacao = "" ;
   this.ZV32SNSaltaPagSegOrdenacao = "" ;
   this.OV32SNSaltaPagSegOrdenacao = "" ;
   this.AV50ProdutoDataInclusaoIni = gx.date.nullDate() ;
   this.ZV50ProdutoDataInclusaoIni = gx.date.nullDate() ;
   this.OV50ProdutoDataInclusaoIni = gx.date.nullDate() ;
   this.AV51ProdutoDataInclusaoFim = gx.date.nullDate() ;
   this.ZV51ProdutoDataInclusaoFim = gx.date.nullDate() ;
   this.OV51ProdutoDataInclusaoFim = gx.date.nullDate() ;
   this.AV117PrecoProdutoPrecoIdIni = 0 ;
   this.ZV117PrecoProdutoPrecoIdIni = 0 ;
   this.OV117PrecoProdutoPrecoIdIni = 0 ;
   this.AV119PrecoProdutoDataIni = gx.date.nullDate() ;
   this.ZV119PrecoProdutoDataIni = gx.date.nullDate() ;
   this.OV119PrecoProdutoDataIni = gx.date.nullDate() ;
   this.AV118PrecoProdutoPrecoIdFim = 0 ;
   this.ZV118PrecoProdutoPrecoIdFim = 0 ;
   this.OV118PrecoProdutoPrecoIdFim = 0 ;
   this.AV120PrecoProdutoDataFim = gx.date.nullDate() ;
   this.ZV120PrecoProdutoDataFim = gx.date.nullDate() ;
   this.OV120PrecoProdutoDataFim = gx.date.nullDate() ;
   this.AV48UnidadeCompraIdIni = "" ;
   this.ZV48UnidadeCompraIdIni = "" ;
   this.OV48UnidadeCompraIdIni = "" ;
   this.AV187UnidadeCompraIdFim = "" ;
   this.ZV187UnidadeCompraIdFim = "" ;
   this.OV187UnidadeCompraIdFim = "" ;
   this.AV188UnidadeVendaIdIni = "" ;
   this.ZV188UnidadeVendaIdIni = "" ;
   this.OV188UnidadeVendaIdIni = "" ;
   this.AV189UnidadeVendaIdFim = "" ;
   this.ZV189UnidadeVendaIdFim = "" ;
   this.OV189UnidadeVendaIdFim = "" ;
   this.AV47ProdutoReferenciaIni = "" ;
   this.ZV47ProdutoReferenciaIni = "" ;
   this.OV47ProdutoReferenciaIni = "" ;
   this.AV190ProdutoReferenciaFim = "" ;
   this.ZV190ProdutoReferenciaFim = "" ;
   this.OV190ProdutoReferenciaFim = "" ;
   this.AV40LoteProdutoLocalIni = "" ;
   this.ZV40LoteProdutoLocalIni = "" ;
   this.OV40LoteProdutoLocalIni = "" ;
   this.AV191LoteProdutoLocalFim = "" ;
   this.ZV191LoteProdutoLocalFim = "" ;
   this.OV191LoteProdutoLocalFim = "" ;
   this.AV52ProdutoTipo = "" ;
   this.ZV52ProdutoTipo = "" ;
   this.OV52ProdutoTipo = "" ;
   this.AV53ProdutoTipoTributacao = "" ;
   this.ZV53ProdutoTipoTributacao = "" ;
   this.OV53ProdutoTipoTributacao = "" ;
   this.AV56ProdutoBalanca = "" ;
   this.ZV56ProdutoBalanca = "" ;
   this.OV56ProdutoBalanca = "" ;
   this.AV46ProdutoSNControlaEstoque = "" ;
   this.ZV46ProdutoSNControlaEstoque = "" ;
   this.OV46ProdutoSNControlaEstoque = "" ;
   this.AV54ImpSNSaldoEstoque = "" ;
   this.ZV54ImpSNSaldoEstoque = "" ;
   this.OV54ImpSNSaldoEstoque = "" ;
   this.AV145ImpSNSaldoZerado = "" ;
   this.ZV145ImpSNSaldoZerado = "" ;
   this.OV145ImpSNSaldoZerado = "" ;
   this.AV55ImpSNSaldoNegativo = "" ;
   this.ZV55ImpSNSaldoNegativo = "" ;
   this.OV55ImpSNSaldoNegativo = "" ;
   this.AV205SNProdutoPromocao = "" ;
   this.ZV205SNProdutoPromocao = "" ;
   this.OV205SNProdutoPromocao = "" ;
   this.AV181ProdutoSituacao = "" ;
   this.ZV181ProdutoSituacao = "" ;
   this.OV181ProdutoSituacao = "" ;
   this.AV122EsquemaCodigo = 0 ;
   this.ZV122EsquemaCodigo = 0 ;
   this.OV122EsquemaCodigo = 0 ;
   this.AV140EsquemaDescricao = "" ;
   this.ZV140EsquemaDescricao = "" ;
   this.OV140EsquemaDescricao = "" ;
   this.AV194FilialUnica = "" ;
   this.ZV194FilialUnica = "" ;
   this.OV194FilialUnica = "" ;
   this.ZV73ProdutoId = 0 ;
   this.OV73ProdutoId = 0 ;
   this.ZV74promptProduto = "" ;
   this.OV74promptProduto = "" ;
   this.ZV75ProdutoDescricaoResumida = "" ;
   this.OV75ProdutoDescricaoResumida = "" ;
   this.ZV78excLinhaProduto = "" ;
   this.OV78excLinhaProduto = "" ;
   this.ZV79ControlaLinhaProduto = 0 ;
   this.OV79ControlaLinhaProduto = 0 ;
   this.ZV59ProdutoFamiliaId = "" ;
   this.OV59ProdutoFamiliaId = "" ;
   this.ZV61promptFamilia = "" ;
   this.OV61promptFamilia = "" ;
   this.ZV60ProdutoFamiliaDescricao = "" ;
   this.OV60ProdutoFamiliaDescricao = "" ;
   this.ZV80excLinhaFamilia = "" ;
   this.OV80excLinhaFamilia = "" ;
   this.ZV81ControlaLinhaFamilia = 0 ;
   this.OV81ControlaLinhaFamilia = 0 ;
   this.ZV92ProdutoFabricanteId = 0 ;
   this.OV92ProdutoFabricanteId = 0 ;
   this.ZV77promptFabricante = "" ;
   this.OV77promptFabricante = "" ;
   this.ZV96ProdutoFabricanteFantasia = "" ;
   this.OV96ProdutoFabricanteFantasia = "" ;
   this.ZV95excLinhaFabricante = "" ;
   this.OV95excLinhaFabricante = "" ;
   this.ZV97ControlaLinhaFabricante = 0 ;
   this.OV97ControlaLinhaFabricante = 0 ;
   this.ZV102ClassificacaoEstIdGrid = "" ;
   this.OV102ClassificacaoEstIdGrid = "" ;
   this.ZV105ProdutoClassificacaoValor = "" ;
   this.OV105ProdutoClassificacaoValor = "" ;
   this.ZV103excLinhaClassificacao = "" ;
   this.OV103excLinhaClassificacao = "" ;
   this.ZV104ControlaLinhaClassificacao = 0 ;
   this.OV104ControlaLinhaClassificacao = 0 ;
   this.ZV109CodificacaoEstIdGrid = "" ;
   this.OV109CodificacaoEstIdGrid = "" ;
   this.ZV110ProdutoCodificacaoValor = "" ;
   this.OV110ProdutoCodificacaoValor = "" ;
   this.ZV111excLinhaCodificacao = "" ;
   this.OV111excLinhaCodificacao = "" ;
   this.ZV112ControlaLinhaCodificacao = 0 ;
   this.OV112ControlaLinhaCodificacao = 0 ;
   this.AV93Sim = "" ;
   this.ZV93Sim = "" ;
   this.OV93Sim = "" ;
   this.AV124ValorAtributo1 = 0 ;
   this.ZV124ValorAtributo1 = 0 ;
   this.OV124ValorAtributo1 = 0 ;
   this.AV94Nao = "" ;
   this.ZV94Nao = "" ;
   this.OV94Nao = "" ;
   this.AV129ValorAtributoCombo1 = 0 ;
   this.ZV129ValorAtributoCombo1 = 0 ;
   this.OV129ValorAtributoCombo1 = 0 ;
   this.AV125ValorAtributo2 = 0 ;
   this.ZV125ValorAtributo2 = 0 ;
   this.OV125ValorAtributo2 = 0 ;
   this.AV130ValorAtributoCombo2 = 0 ;
   this.ZV130ValorAtributoCombo2 = 0 ;
   this.OV130ValorAtributoCombo2 = 0 ;
   this.AV126ValorAtributo3 = 0 ;
   this.ZV126ValorAtributo3 = 0 ;
   this.OV126ValorAtributo3 = 0 ;
   this.AV131ValorAtributoCombo3 = 0 ;
   this.ZV131ValorAtributoCombo3 = 0 ;
   this.OV131ValorAtributoCombo3 = 0 ;
   this.AV127ValorAtributo4 = 0 ;
   this.ZV127ValorAtributo4 = 0 ;
   this.OV127ValorAtributo4 = 0 ;
   this.AV132ValorAtributoCombo4 = 0 ;
   this.ZV132ValorAtributoCombo4 = 0 ;
   this.OV132ValorAtributoCombo4 = 0 ;
   this.AV128ValorAtributo5 = 0 ;
   this.ZV128ValorAtributo5 = 0 ;
   this.OV128ValorAtributo5 = 0 ;
   this.AV133ValorAtributoCombo5 = 0 ;
   this.ZV133ValorAtributoCombo5 = 0 ;
   this.OV133ValorAtributoCombo5 = 0 ;
   this.AV43CodificacaoEstEmpresaId = "" ;
   this.ZV43CodificacaoEstEmpresaId = "" ;
   this.OV43CodificacaoEstEmpresaId = "" ;
   this.AV100PessoaEmpresaId = "" ;
   this.ZV100PessoaEmpresaId = "" ;
   this.OV100PessoaEmpresaId = "" ;
   this.AV24ProdutoEmpresaId = "" ;
   this.ZV24ProdutoEmpresaId = "" ;
   this.OV24ProdutoEmpresaId = "" ;
   this.AV85PFilialId = 0 ;
   this.ZV85PFilialId = 0 ;
   this.OV85PFilialId = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV86PrecoNulo = 0 ;
   this.ZV86PrecoNulo = 0 ;
   this.OV86PrecoNulo = 0 ;
   this.AV87ProdutoCategoria = "" ;
   this.ZV87ProdutoCategoria = "" ;
   this.OV87ProdutoCategoria = "" ;
   this.AV88GrupoProdutoId = 0 ;
   this.ZV88GrupoProdutoId = 0 ;
   this.OV88GrupoProdutoId = 0 ;
   this.AV89SubGrupoProdutoId = 0 ;
   this.ZV89SubGrupoProdutoId = 0 ;
   this.OV89SubGrupoProdutoId = 0 ;
   this.AV90ProdutoCodigoId = 0 ;
   this.ZV90ProdutoCodigoId = 0 ;
   this.OV90ProdutoCodigoId = 0 ;
   this.AV91LoteProdutoCombinacao = "" ;
   this.ZV91LoteProdutoCombinacao = "" ;
   this.OV91LoteProdutoCombinacao = "" ;
   this.AV177AuxNum = 0 ;
   this.ZV177AuxNum = 0 ;
   this.OV177AuxNum = 0 ;
   this.AV176SNVenda = "" ;
   this.ZV176SNVenda = "" ;
   this.OV176SNVenda = "" ;
   this.AV178ProdutoReferenciaPrompt = "" ;
   this.ZV178ProdutoReferenciaPrompt = "" ;
   this.OV178ProdutoReferenciaPrompt = "" ;
   this.AV179ProdutoCodigoBarrasPrompt = 0 ;
   this.ZV179ProdutoCodigoBarrasPrompt = 0 ;
   this.OV179ProdutoCodigoBarrasPrompt = 0 ;
   this.AV63FamiliaEmpresaId = "" ;
   this.ZV63FamiliaEmpresaId = "" ;
   this.OV63FamiliaEmpresaId = "" ;
   this.AV42ClassificacaoEstEmpresaId = "" ;
   this.ZV42ClassificacaoEstEmpresaId = "" ;
   this.OV42ClassificacaoEstEmpresaId = "" ;
   this.AV25ParametroConsultaEmpresaId = "" ;
   this.ZV25ParametroConsultaEmpresaId = "" ;
   this.OV25ParametroConsultaEmpresaId = "" ;
   this.AV135QtdeCaracterRelatorio = 0 ;
   this.ZV135QtdeCaracterRelatorio = 0 ;
   this.OV135QtdeCaracterRelatorio = 0 ;
   this.AV139SNImprimir = "" ;
   this.ZV139SNImprimir = "" ;
   this.OV139SNImprimir = "" ;
   this.AV49UnidadeEmpresaId = "" ;
   this.ZV49UnidadeEmpresaId = "" ;
   this.OV49UnidadeEmpresaId = "" ;
   this.AV39FilialEmpresaId = "" ;
   this.ZV39FilialEmpresaId = "" ;
   this.OV39FilialEmpresaId = "" ;
   this.AV201SNBloqueiaTela = "" ;
   this.ZV201SNBloqueiaTela = "" ;
   this.OV201SNBloqueiaTela = "" ;
   this.AV153TxtTela = "" ;
   this.AV212Tab = [ ] ;
   this.AV22ParametroConsultaCodigo = 0 ;
   this.AV26ParametroConsultaDescricao = "" ;
   this.AV37DataReferencia = gx.date.nullDate() ;
   this.AV29ParametroConsultaPriOrdenacao = "" ;
   this.AV30ParametroConsultaSegOrdenacao = "" ;
   this.AV19SNGerarCSV = "" ;
   this.AV31SNSaltaPagPriOrdenacao = "" ;
   this.AV32SNSaltaPagSegOrdenacao = "" ;
   this.AV50ProdutoDataInclusaoIni = gx.date.nullDate() ;
   this.AV51ProdutoDataInclusaoFim = gx.date.nullDate() ;
   this.AV117PrecoProdutoPrecoIdIni = 0 ;
   this.AV119PrecoProdutoDataIni = gx.date.nullDate() ;
   this.AV118PrecoProdutoPrecoIdFim = 0 ;
   this.AV120PrecoProdutoDataFim = gx.date.nullDate() ;
   this.AV48UnidadeCompraIdIni = "" ;
   this.AV187UnidadeCompraIdFim = "" ;
   this.AV188UnidadeVendaIdIni = "" ;
   this.AV189UnidadeVendaIdFim = "" ;
   this.AV47ProdutoReferenciaIni = "" ;
   this.AV190ProdutoReferenciaFim = "" ;
   this.AV40LoteProdutoLocalIni = "" ;
   this.AV191LoteProdutoLocalFim = "" ;
   this.AV52ProdutoTipo = "" ;
   this.AV53ProdutoTipoTributacao = "" ;
   this.AV56ProdutoBalanca = "" ;
   this.AV46ProdutoSNControlaEstoque = "" ;
   this.AV54ImpSNSaldoEstoque = "" ;
   this.AV145ImpSNSaldoZerado = "" ;
   this.AV55ImpSNSaldoNegativo = "" ;
   this.AV205SNProdutoPromocao = "" ;
   this.AV181ProdutoSituacao = "" ;
   this.AV122EsquemaCodigo = 0 ;
   this.AV140EsquemaDescricao = "" ;
   this.AV194FilialUnica = "" ;
   this.AV93Sim = "" ;
   this.AV124ValorAtributo1 = 0 ;
   this.AV94Nao = "" ;
   this.AV129ValorAtributoCombo1 = 0 ;
   this.AV125ValorAtributo2 = 0 ;
   this.AV130ValorAtributoCombo2 = 0 ;
   this.AV126ValorAtributo3 = 0 ;
   this.AV131ValorAtributoCombo3 = 0 ;
   this.AV127ValorAtributo4 = 0 ;
   this.AV132ValorAtributoCombo4 = 0 ;
   this.AV128ValorAtributo5 = 0 ;
   this.AV133ValorAtributoCombo5 = 0 ;
   this.AV43CodificacaoEstEmpresaId = "" ;
   this.AV100PessoaEmpresaId = "" ;
   this.AV24ProdutoEmpresaId = "" ;
   this.AV85PFilialId = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV86PrecoNulo = 0 ;
   this.AV87ProdutoCategoria = "" ;
   this.AV88GrupoProdutoId = 0 ;
   this.AV89SubGrupoProdutoId = 0 ;
   this.AV90ProdutoCodigoId = 0 ;
   this.AV91LoteProdutoCombinacao = "" ;
   this.AV177AuxNum = 0 ;
   this.AV176SNVenda = "" ;
   this.AV178ProdutoReferenciaPrompt = "" ;
   this.AV179ProdutoCodigoBarrasPrompt = 0 ;
   this.AV63FamiliaEmpresaId = "" ;
   this.AV42ClassificacaoEstEmpresaId = "" ;
   this.AV25ParametroConsultaEmpresaId = "" ;
   this.AV135QtdeCaracterRelatorio = 0 ;
   this.AV139SNImprimir = "" ;
   this.AV49UnidadeEmpresaId = "" ;
   this.AV39FilialEmpresaId = "" ;
   this.AV201SNBloqueiaTela = "" ;
   this.AV73ProdutoId = 0 ;
   this.AV74promptProduto = "" ;
   this.AV75ProdutoDescricaoResumida = "" ;
   this.AV78excLinhaProduto = "" ;
   this.AV79ControlaLinhaProduto = 0 ;
   this.A3228ParametroConsultaCodigo = 0 ;
   this.A3227ParametroConsultaEmpresaId = "" ;
   this.A3215ParametroConsultaDescricao = "" ;
   this.AV59ProdutoFamiliaId = "" ;
   this.AV61promptFamilia = "" ;
   this.AV60ProdutoFamiliaDescricao = "" ;
   this.AV80excLinhaFamilia = "" ;
   this.AV81ControlaLinhaFamilia = 0 ;
   this.AV92ProdutoFabricanteId = 0 ;
   this.AV77promptFabricante = "" ;
   this.AV96ProdutoFabricanteFantasia = "" ;
   this.AV95excLinhaFabricante = "" ;
   this.AV97ControlaLinhaFabricante = 0 ;
   this.AV102ClassificacaoEstIdGrid = "" ;
   this.AV105ProdutoClassificacaoValor = "" ;
   this.AV103excLinhaClassificacao = "" ;
   this.AV104ControlaLinhaClassificacao = 0 ;
   this.AV109CodificacaoEstIdGrid = "" ;
   this.AV110ProdutoCodificacaoValor = "" ;
   this.AV111excLinhaCodificacao = "" ;
   this.AV112ControlaLinhaCodificacao = 0 ;
   this.A2915EsquemaCodigo = 0 ;
   this.A2919AtributoEsquemaUsuarioAlt = "" ;
   this.A2917AtributoEsquemaSnCadastrado = "" ;
   this.A2916AtributoEsquemaDescricao = "" ;
   this.A2921AtributoEsquemaCodigo = 0 ;
   this.A3402ProdutoCodificacaoValor = "" ;
   this.A2937CodificacaoEstId = "" ;
   this.A2936CodificacaoEstEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A2957FamiliaId = "" ;
   this.A2956FamiliaEmpresaId = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.A2912EsquemaDescricao = "" ;
   this.A3230ParametroConsultaCampoCod = "" ;
   this.A3233ParametroConsultaCampoTitulo = "" ;
   this.A6523ParametroConsultaCampoTamanho = 0 ;
   this.A3229ParametroConsultaCampoOrd = 0 ;
   this.A3224ParametroConsultaSNPadraoVenda = "" ;
   this.A3223ParametroConsultaSNCon = "" ;
   this.A3234ParametroConsultaCampoUsuAlt = "" ;
   this.AV121EsquemaUnico = "" ;
   this.AV150SNLoteUnico = "" ;
   this.AV186FilialIdParm = "" ;
   this.AV202Mensagem = "" ;
   this.AV218Pgmname = "" ;
   this.AV209SdtTxtTela = [ ] ;
   this.AV8EmpresaLogadaId = "" ;
   this.AV116SNNovaLinhaProduto = "" ;
   this.AV23snErro = "" ;
   this.AV82snExcluiProduto = "" ;
   this.AV182SNNovaLinhaFamilia = "" ;
   this.AV84snExcluiFamilia = "" ;
   this.AV183SNNovaLinhaFabricante = "" ;
   this.AV101snExcluiFabricante = "" ;
   this.AV184SNNovaLinhaClassificacao = "" ;
   this.AV108snExcluiClassificacao = "" ;
   this.AV185SNNovaLinhaCodificacao = "" ;
   this.AV115snExcluiCodificacao = "" ;
   this.AV33SNClassificacaoCompleta = "" ;
   this.AV34SNCodificacaoCompleta = "" ;
   this.AV144SNSimilares = "" ;
   this.AV136OrdenacaoDescricaoAux = "" ;
   this.AV198OrdenacaoDescricao2 = "" ;
   this.AV17QtdPagGeradas = 0 ;
   this.AV38FilialId = 0 ;
   this.AV71SdtProdutoRelProduto = [ ] ;
   this.AV57SdtFamiliaRelProduto = [ ] ;
   this.AV99SdtFabricanteRelProduto = [ ] ;
   this.AV106SdtClassificacaoRelProduto = [ ] ;
   this.AV113SdtCodificacaoRelProduto = [ ] ;
   this.AV196SdtFiliais = [ ] ;
   this.AV195SNAgruparQtFilial = "" ;
   this.AV219Pgmdesc = "" ;
   this.AV137OdenacaoAux = "" ;
   this.AV138ParametroConsultaCampoTitulo = "" ;
   this.AV134ParametroConsultaCampoCod = "" ;
   this.Events = {"e12vr2_client": ["ENTER", true] ,"e13vr2_client": ["FILTRARLOTE.CLICK", true] ,"e11vr2_client": ["'FECHAR'", true] ,"e14vr2_client": ["'LINHAGRIDPRODUTO'", true] ,"e25vr2_client": ["'EXCLUILINHAGRIDPRODUTO'", true] ,"e15vr2_client": ["'LINHAGRIDFAMILIA'", true] ,"e36vr2_client": ["'EXCLUILINHAGRIDFAMILIA'", true] ,"e16vr2_client": ["'LINHAGRIDFABRICANTE'", true] ,"e33vr2_client": ["'EXCLUILINHAGRIDFABRICANTE'", true] ,"e17vr2_client": ["'LINHAGRIDCLASSIFICACAO'", true] ,"e30vr2_client": ["'EXCLUILINHAGRIDCLASSIFICACAO'", true] ,"e18vr2_client": ["'LINHAGRIDCODIFICACAO'", true] ,"e28vr2_client": ["'EXCLUILINHAGRIDCODIFICACAO'", true] ,"e19vr2_client": ["'SALVARTXT'", true] ,"e20vr2_client": ["VTXTTELA.CLICK", true] ,"e21vr2_client": ["'EXCLUIRTXT'", true] ,"e26vr2_client": ["VPRODUTOID.ISVALID", true] ,"e37vr2_client": ["VPRODUTOFAMILIAID.ISVALID", true] ,"e34vr2_client": ["VPRODUTOFABRICANTEID.ISVALID", true] ,"e31vr2_client": ["VCLASSIFICACAOESTIDGRID.CLICK", true] ,"e39vr2_client": ["CANCEL", true] ,"e38vr1_client": ["FILTRARFILIAL.CLICK", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDPRODUTO_nFirstRecordOnPage'},{av:'GRIDPRODUTO_nEOF'},{av:'AV74promptProduto',fld:'vPROMPTPRODUTO',grid:197},{av:'AV78excLinhaProduto',fld:'vEXCLINHAPRODUTO',grid:197},{av:'GRIDFAMILIA_nFirstRecordOnPage'},{av:'GRIDFAMILIA_nEOF'},{av:'AV61promptFamilia',fld:'vPROMPTFAMILIA',grid:216},{av:'AV80excLinhaFamilia',fld:'vEXCLINHAFAMILIA',grid:216},{av:'GRIDFABRICANTE_nFirstRecordOnPage'},{av:'GRIDFABRICANTE_nEOF'},{av:'AV77promptFabricante',fld:'vPROMPTFABRICANTE',grid:234},{av:'AV95excLinhaFabricante',fld:'vEXCLINHAFABRICANTE',grid:234},{av:'GRIDCLASSIFICACAO_nFirstRecordOnPage'},{av:'GRIDCLASSIFICACAO_nEOF'},{av:'AV103excLinhaClassificacao',fld:'vEXCLINHACLASSIFICACAO',grid:253},{av:'AV42ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'GRIDCODIFICACAO_nFirstRecordOnPage'},{av:'GRIDCODIFICACAO_nEOF'},{av:'AV111excLinhaCodificacao',fld:'vEXCLINHACODIFICACAO',grid:270},{av:'AV43CodificacaoEstEmpresaId',fld:'vCODIFICACAOESTEMPRESAID'},{av:'AV121EsquemaUnico',fld:'vESQUEMAUNICO'},{av:'AV150SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV122EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A2912EsquemaDescricao',fld:'ESQUEMADESCRICAO'},{av:'AV186FilialIdParm',fld:'vFILIALIDPARM'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV39FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV124ValorAtributo1',fld:'vVALORATRIBUTO1'},{av:'AV125ValorAtributo2',fld:'vVALORATRIBUTO2'},{av:'AV126ValorAtributo3',fld:'vVALORATRIBUTO3'},{av:'AV127ValorAtributo4',fld:'vVALORATRIBUTO4'},{av:'AV128ValorAtributo5',fld:'vVALORATRIBUTO5'},{av:'AV129ValorAtributoCombo1',fld:'vVALORATRIBUTOCOMBO1'},{av:'AV130ValorAtributoCombo2',fld:'vVALORATRIBUTOCOMBO2'},{av:'AV131ValorAtributoCombo3',fld:'vVALORATRIBUTOCOMBO3'},{av:'AV132ValorAtributoCombo4',fld:'vVALORATRIBUTOCOMBO4'},{av:'AV133ValorAtributoCombo5',fld:'vVALORATRIBUTOCOMBO5'},{av:'AV201SNBloqueiaTela',fld:'vSNBLOQUEIATELA'},{av:'AV139SNImprimir',fld:'vSNIMPRIMIR'},{av:'AV202Mensagem',fld:'vMENSAGEM',hsh:true},{av:'AV218Pgmname',fld:'vPGMNAME'},{av:'AV209SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV116SNNovaLinhaProduto',fld:'vSNNOVALINHAPRODUTO'},{av:'AV23snErro',fld:'vSNERRO'},{av:'AV82snExcluiProduto',fld:'vSNEXCLUIPRODUTO'},{av:'AV73ProdutoId',fld:'vPRODUTOID',grid:197},{av:'AV75ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA',grid:197},{av:'AV182SNNovaLinhaFamilia',fld:'vSNNOVALINHAFAMILIA'},{av:'AV84snExcluiFamilia',fld:'vSNEXCLUIFAMILIA'},{av:'AV59ProdutoFamiliaId',fld:'vPRODUTOFAMILIAID',grid:216},{av:'AV60ProdutoFamiliaDescricao',fld:'vPRODUTOFAMILIADESCRICAO',grid:216},{av:'AV183SNNovaLinhaFabricante',fld:'vSNNOVALINHAFABRICANTE'},{av:'AV101snExcluiFabricante',fld:'vSNEXCLUIFABRICANTE'},{av:'AV92ProdutoFabricanteId',fld:'vPRODUTOFABRICANTEID',grid:234},{av:'AV96ProdutoFabricanteFantasia',fld:'vPRODUTOFABRICANTEFANTASIA',grid:234},{av:'AV184SNNovaLinhaClassificacao',fld:'vSNNOVALINHACLASSIFICACAO'},{av:'AV108snExcluiClassificacao',fld:'vSNEXCLUICLASSIFICACAO'},{av:'AV102ClassificacaoEstIdGrid',fld:'vCLASSIFICACAOESTIDGRID',grid:253},{av:'AV105ProdutoClassificacaoValor',fld:'vPRODUTOCLASSIFICACAOVALOR',grid:253},{av:'AV185SNNovaLinhaCodificacao',fld:'vSNNOVALINHACODIFICACAO'},{av:'AV115snExcluiCodificacao',fld:'vSNEXCLUICODIFICACAO'},{av:'AV109CodificacaoEstIdGrid',fld:'vCODIFICACAOESTIDGRID',grid:270},{av:'AV110ProdutoCodificacaoValor',fld:'vPRODUTOCODIFICACAOVALOR',grid:270},{av:'AV135QtdeCaracterRelatorio',fld:'vQTDECARACTERRELATORIO'},{av:'AV33SNClassificacaoCompleta',fld:'vSNCLASSIFICACAOCOMPLETA'},{av:'AV34SNCodificacaoCompleta',fld:'vSNCODIFICACAOCOMPLETA'},{av:'AV144SNSimilares',fld:'vSNSIMILARES'},{av:'AV19SNGerarCSV',fld:'vSNGERARCSV'},{av:'AV29ParametroConsultaPriOrdenacao',fld:'vPARAMETROCONSULTAPRIORDENACAO'},{av:'AV136OrdenacaoDescricaoAux',fld:'vORDENACAODESCRICAOAUX'},{av:'AV30ParametroConsultaSegOrdenacao',fld:'vPARAMETROCONSULTASEGORDENACAO'},{av:'AV194FilialUnica',fld:'vFILIALUNICA'},{av:'AV198OrdenacaoDescricao2',fld:'vORDENACAODESCRICAO2'},{av:'AV17QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV22ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO'},{av:'AV37DataReferencia',fld:'vDATAREFERENCIA'},{av:'AV31SNSaltaPagPriOrdenacao',fld:'vSNSALTAPAGPRIORDENACAO'},{av:'AV32SNSaltaPagSegOrdenacao',fld:'vSNSALTAPAGSEGORDENACAO'},{av:'AV50ProdutoDataInclusaoIni',fld:'vPRODUTODATAINCLUSAOINI'},{av:'AV51ProdutoDataInclusaoFim',fld:'vPRODUTODATAINCLUSAOFIM'},{av:'AV117PrecoProdutoPrecoIdIni',fld:'vPRECOPRODUTOPRECOIDINI'},{av:'AV119PrecoProdutoDataIni',fld:'vPRECOPRODUTODATAINI'},{av:'AV118PrecoProdutoPrecoIdFim',fld:'vPRECOPRODUTOPRECOIDFIM'},{av:'AV120PrecoProdutoDataFim',fld:'vPRECOPRODUTODATAFIM'},{av:'AV48UnidadeCompraIdIni',fld:'vUNIDADECOMPRAIDINI'},{av:'AV187UnidadeCompraIdFim',fld:'vUNIDADECOMPRAIDFIM'},{av:'AV188UnidadeVendaIdIni',fld:'vUNIDADEVENDAIDINI'},{av:'AV189UnidadeVendaIdFim',fld:'vUNIDADEVENDAIDFIM'},{av:'AV38FilialId',fld:'vFILIALID'},{av:'AV47ProdutoReferenciaIni',fld:'vPRODUTOREFERENCIAINI'},{av:'AV190ProdutoReferenciaFim',fld:'vPRODUTOREFERENCIAFIM'},{av:'AV40LoteProdutoLocalIni',fld:'vLOTEPRODUTOLOCALINI'},{av:'AV191LoteProdutoLocalFim',fld:'vLOTEPRODUTOLOCALFIM'},{av:'AV181ProdutoSituacao',fld:'vPRODUTOSITUACAO'},{av:'AV46ProdutoSNControlaEstoque',fld:'vPRODUTOSNCONTROLAESTOQUE'},{av:'AV56ProdutoBalanca',fld:'vPRODUTOBALANCA'},{av:'AV54ImpSNSaldoEstoque',fld:'vIMPSNSALDOESTOQUE'},{av:'AV145ImpSNSaldoZerado',fld:'vIMPSNSALDOZERADO'},{av:'AV55ImpSNSaldoNegativo',fld:'vIMPSNSALDONEGATIVO'},{av:'AV52ProdutoTipo',fld:'vPRODUTOTIPO'},{av:'AV53ProdutoTipoTributacao',fld:'vPRODUTOTIPOTRIBUTACAO'},{av:'AV71SdtProdutoRelProduto',fld:'vSDTPRODUTORELPRODUTO'},{av:'AV57SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'AV99SdtFabricanteRelProduto',fld:'vSDTFABRICANTERELPRODUTO'},{av:'AV106SdtClassificacaoRelProduto',fld:'vSDTCLASSIFICACAORELPRODUTO'},{av:'AV113SdtCodificacaoRelProduto',fld:'vSDTCODIFICACAORELPRODUTO'},{av:'AV196SdtFiliais',fld:'vSDTFILIAIS'},{av:'AV195SNAgruparQtFilial',fld:'vSNAGRUPARQTFILIAL'},{av:'AV205SNProdutoPromocao',fld:'vSNPRODUTOPROMOCAO'},{av:'AV153TxtTela',fld:'vTXTTELA'},{av:'AV219Pgmdesc',fld:'vPGMDESC'},{av:'AV81ControlaLinhaFamilia',fld:'vCONTROLALINHAFAMILIA',grid:216},{av:'AV137OdenacaoAux',fld:'vODENACAOAUX'},{av:'A3227ParametroConsultaEmpresaId',fld:'PARAMETROCONSULTAEMPRESAID'},{av:'AV25ParametroConsultaEmpresaId',fld:'vPARAMETROCONSULTAEMPRESAID'},{av:'A3228ParametroConsultaCodigo',fld:'PARAMETROCONSULTACODIGO'},{av:'A3215ParametroConsultaDescricao',fld:'PARAMETROCONSULTADESCRICAO'}],[{av:'gx.fn.getCtrlProperty("vESQUEMACODIGO","Enabled")',ctrl:'vESQUEMACODIGO',prop:'Enabled'},{av:'AV122EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV224GXLvl415',fld:'vGXLVL415'},{av:'AV140EsquemaDescricao',fld:'vESQUEMADESCRICAO'},{av:'AV38FilialId',fld:'vFILIALID'},{av:'AV193FilialNome',fld:'vFILIALNOME'},{av:'AV225GXLvl434',fld:'vGXLVL434'},{av:'gx.fn.getCtrlProperty("FILTRARFILIAL","Visible")',ctrl:'FILTRARFILIAL',prop:'Visible'},{av:'AV194FilialUnica',fld:'vFILIALUNICA'},{av:'AV139SNImprimir',fld:'vSNIMPRIMIR'},{av:'AV202Mensagem',fld:'vMENSAGEM',hsh:true},{av:'AV135QtdeCaracterRelatorio',fld:'vQTDECARACTERRELATORIO'},{av:'AV153TxtTela',fld:'vTXTTELA'},{av:'AV268GXV18',fld:'vGXV18'},{av:'AV210SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV71SdtProdutoRelProduto',fld:'vSDTPRODUTORELPRODUTO'},{av:'AV62x',fld:'vX'},{av:'AV27Entrada',fld:'vENTRADA'},{av:'AV28Saida',fld:'vSAIDA'},{av:'AV64Aux',fld:'vAUX'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV57SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'AV67TemMascara',fld:'vTEMMASCARA'},{av:'AV99SdtFabricanteRelProduto',fld:'vSDTFABRICANTERELPRODUTO'},{av:'AV211Cont',fld:'vCONT'},{av:'AV239GXV2',fld:'vGXV2'},{av:'AV72SdtProdutoRelProdutoItem',fld:'vSDTPRODUTORELPRODUTOITEM'},{av:'AV240GXV3',fld:'vGXV3'},{av:'AV245GXV5',fld:'vGXV5'},{av:'AV58SdtFamiliaRelProdutoItem',fld:'vSDTFAMILIARELPRODUTOITEM'},{av:'AV246GXV6',fld:'vGXV6'},{av:'AV251GXV8',fld:'vGXV8'},{av:'AV98SdtFabricanteRelProdutoItem',fld:'vSDTFABRICANTERELPRODUTOITEM'},{av:'AV252GXV9',fld:'vGXV9'},{av:'AV106SdtClassificacaoRelProduto',fld:'vSDTCLASSIFICACAORELPRODUTO'},{av:'AV256GXV11',fld:'vGXV11'},{av:'AV107SdtClassificacaoRelProdutoItem',fld:'vSDTCLASSIFICACAORELPRODUTOITEM'},{av:'AV257GXV12',fld:'vGXV12'},{av:'AV113SdtCodificacaoRelProduto',fld:'vSDTCODIFICACAORELPRODUTO'},{av:'AV262GXV14',fld:'vGXV14'},{av:'AV114SdtCodificacaoRelProdutoItem',fld:'vSDTCODIFICACAORELPRODUTOITEM'},{av:'AV263GXV15',fld:'vGXV15'},{av:'AV19SNGerarCSV',fld:'vSNGERARCSV'},{av:'AV31SNSaltaPagPriOrdenacao',fld:'vSNSALTAPAGPRIORDENACAO'},{av:'AV32SNSaltaPagSegOrdenacao',fld:'vSNSALTAPAGSEGORDENACAO'},{av:'AV46ProdutoSNControlaEstoque',fld:'vPRODUTOSNCONTROLAESTOQUE'},{av:'AV54ImpSNSaldoEstoque',fld:'vIMPSNSALDOESTOQUE'},{av:'AV145ImpSNSaldoZerado',fld:'vIMPSNSALDOZERADO'},{av:'AV55ImpSNSaldoNegativo',fld:'vIMPSNSALDONEGATIVO'},{av:'AV205SNProdutoPromocao',fld:'vSNPRODUTOPROMOCAO'},{ctrl:'BTNIMPRIMIR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPARAMETROCONSULTACODIGO","Enabled")',ctrl:'vPARAMETROCONSULTACODIGO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAREFERENCIA","Enabled")',ctrl:'vDATAREFERENCIA',prop:'Enabled'},{ctrl:'vPARAMETROCONSULTAPRIORDENACAO'},{ctrl:'vPARAMETROCONSULTASEGORDENACAO'},{av:'gx.fn.getCtrlProperty("vPRODUTODATAINCLUSAOINI","Enabled")',ctrl:'vPRODUTODATAINCLUSAOINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTODATAINCLUSAOFIM","Enabled")',ctrl:'vPRODUTODATAINCLUSAOFIM',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRECOPRODUTOPRECOIDINI","Enabled")',ctrl:'vPRECOPRODUTOPRECOIDINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRECOPRODUTODATAINI","Enabled")',ctrl:'vPRECOPRODUTODATAINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRECOPRODUTOPRECOIDFIM","Enabled")',ctrl:'vPRECOPRODUTOPRECOIDFIM',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRECOPRODUTODATAFIM","Enabled")',ctrl:'vPRECOPRODUTODATAFIM',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUNIDADECOMPRAIDINI","Enabled")',ctrl:'vUNIDADECOMPRAIDINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUNIDADECOMPRAIDFIM","Enabled")',ctrl:'vUNIDADECOMPRAIDFIM',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUNIDADEVENDAIDINI","Enabled")',ctrl:'vUNIDADEVENDAIDINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUNIDADEVENDAIDFIM","Enabled")',ctrl:'vUNIDADEVENDAIDFIM',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOREFERENCIAINI","Enabled")',ctrl:'vPRODUTOREFERENCIAINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOREFERENCIAFIM","Enabled")',ctrl:'vPRODUTOREFERENCIAFIM',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vLOTEPRODUTOLOCALINI","Enabled")',ctrl:'vLOTEPRODUTOLOCALINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vLOTEPRODUTOLOCALFIM","Enabled")',ctrl:'vLOTEPRODUTOLOCALFIM',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOTIPO","Enabled")',ctrl:'vPRODUTOTIPO',prop:'Enabled'},{ctrl:'vPRODUTOTIPOTRIBUTACAO'},{ctrl:'vPRODUTOSITUACAO'},{av:'gx.fn.getCtrlProperty("FILTRARLOTE","Enabled")',ctrl:'FILTRARLOTE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("FILTRARFILIAL","Enabled")',ctrl:'FILTRARFILIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNGERARCSV","Enabled")',ctrl:'vSNGERARCSV',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNSALTAPAGPRIORDENACAO","Enabled")',ctrl:'vSNSALTAPAGPRIORDENACAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNSALTAPAGSEGORDENACAO","Enabled")',ctrl:'vSNSALTAPAGSEGORDENACAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOSNCONTROLAESTOQUE","Enabled")',ctrl:'vPRODUTOSNCONTROLAESTOQUE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPSNSALDOESTOQUE","Enabled")',ctrl:'vIMPSNSALDOESTOQUE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPSNSALDOZERADO","Enabled")',ctrl:'vIMPSNSALDOZERADO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPSNSALDONEGATIVO","Enabled")',ctrl:'vIMPSNSALDONEGATIVO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNPRODUTOPROMOCAO","Enabled")',ctrl:'vSNPRODUTOPROMOCAO',prop:'Enabled'},{ctrl:'vPRODUTOBALANCA'},{av:'gx.fn.getCtrlProperty("INCLUIPRODUTO","Enabled")',ctrl:'INCLUIPRODUTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOID","Enabled")',ctrl:'vPRODUTOID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPROMPTPRODUTO","Enabled")',ctrl:'vPROMPTPRODUTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vEXCLINHAPRODUTO","Enabled")',ctrl:'vEXCLINHAPRODUTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("INCLUIFAMILIA","Enabled")',ctrl:'INCLUIFAMILIA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOFAMILIAID","Enabled")',ctrl:'vPRODUTOFAMILIAID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPROMPTFAMILIA","Enabled")',ctrl:'vPROMPTFAMILIA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vEXCLINHAFAMILIA","Enabled")',ctrl:'vEXCLINHAFAMILIA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("INCLUIFABRICANTE","Enabled")',ctrl:'INCLUIFABRICANTE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOFABRICANTEID","Enabled")',ctrl:'vPRODUTOFABRICANTEID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPROMPTFABRICANTE","Enabled")',ctrl:'vPROMPTFABRICANTE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vEXCLINHAFABRICANTE","Enabled")',ctrl:'vEXCLINHAFABRICANTE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("INCLUICLASSIFICACAO","Enabled")',ctrl:'INCLUICLASSIFICACAO',prop:'Enabled'},{ctrl:'vCLASSIFICACAOESTIDGRID'},{ctrl:'vPRODUTOCLASSIFICACAOVALOR'},{av:'gx.fn.getCtrlProperty("vEXCLINHACLASSIFICACAO","Enabled")',ctrl:'vEXCLINHACLASSIFICACAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("INCLUICODIFICACAO","Enabled")',ctrl:'INCLUICODIFICACAO',prop:'Enabled'},{ctrl:'vCODIFICACAOESTIDGRID'},{av:'gx.fn.getCtrlProperty("vPRODUTOCODIFICACAOVALOR","Enabled")',ctrl:'vPRODUTOCODIFICACAOVALOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vEXCLINHACODIFICACAO","Enabled")',ctrl:'vEXCLINHACODIFICACAO',prop:'Enabled'},{av:'AV201SNBloqueiaTela',fld:'vSNBLOQUEIATELA'},{av:'AV144SNSimilares',fld:'vSNSIMILARES'},{av:'AV34SNCodificacaoCompleta',fld:'vSNCODIFICACAOCOMPLETA'},{av:'AV33SNClassificacaoCompleta',fld:'vSNCLASSIFICACAOCOMPLETA'},{av:'AV142OrdenacaoSDT',fld:'vORDENACAOSDT'},{av:'AV137OdenacaoAux',fld:'vODENACAOAUX'},{av:'AV197OrdenacaoDescricao1',fld:'vORDENACAODESCRICAO1'},{av:'AV198OrdenacaoDescricao2',fld:'vORDENACAODESCRICAO2'},{av:'AV196SdtFiliais',fld:'vSDTFILIAIS'},{av:'AV195SNAgruparQtFilial',fld:'vSNAGRUPARQTFILIAL'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV17QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV214Orientacao',fld:'vORIENTACAO'},{av:'AV180SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV266GXV16',fld:'vGXV16'},{av:'AV22ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO'},{av:'AV29ParametroConsultaPriOrdenacao',fld:'vPARAMETROCONSULTAPRIORDENACAO'},{av:'AV30ParametroConsultaSegOrdenacao',fld:'vPARAMETROCONSULTASEGORDENACAO'},{av:'AV181ProdutoSituacao',fld:'vPRODUTOSITUACAO'},{av:'AV56ProdutoBalanca',fld:'vPRODUTOBALANCA'},{av:'AV267GXV17',fld:'vGXV17'},{av:'AV81ControlaLinhaFamilia',fld:'vCONTROLALINHAFAMILIA'},{av:'AV59ProdutoFamiliaId',fld:'vPRODUTOFAMILIAID'},{av:'AV60ProdutoFamiliaDescricao',fld:'vPRODUTOFAMILIADESCRICAO'},{av:'AV136OrdenacaoDescricaoAux',fld:'vORDENACAODESCRICAOAUX'},{av:'AV26ParametroConsultaDescricao',fld:'vPARAMETROCONSULTADESCRICAO'},{av:'AV208OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["ENTER"] = [[{av:'AV22ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO'},{av:'A3227ParametroConsultaEmpresaId',fld:'PARAMETROCONSULTAEMPRESAID'},{av:'AV25ParametroConsultaEmpresaId',fld:'vPARAMETROCONSULTAEMPRESAID'},{av:'A3228ParametroConsultaCodigo',fld:'PARAMETROCONSULTACODIGO'},{av:'A3223ParametroConsultaSNCon',fld:'PARAMETROCONSULTASNCON'},{av:'A3224ParametroConsultaSNPadraoVenda',fld:'PARAMETROCONSULTASNPADRAOVENDA'},{av:'A3234ParametroConsultaCampoUsuAlt',fld:'PARAMETROCONSULTACAMPOUSUALT'},{av:'A3230ParametroConsultaCampoCod',fld:'PARAMETROCONSULTACAMPOCOD'},{av:'AV148SNQdtDigitada',fld:'vSNQDTDIGITADA'},{av:'AV203SNQdtDigitadaPr',fld:'vSNQDTDIGITADAPR'},{av:'AV149SNQtdSaldo',fld:'vSNQTDSALDO'},{av:'AV204SNQtdSaldoPr',fld:'vSNQTDSALDOPR'},{av:'AV33SNClassificacaoCompleta',fld:'vSNCLASSIFICACAOCOMPLETA'},{av:'AV34SNCodificacaoCompleta',fld:'vSNCODIFICACAOCOMPLETA'},{av:'AV144SNSimilares',fld:'vSNSIMILARES'},{av:'AV192SNPreco',fld:'vSNPRECO'},{av:'AV200SNFilial',fld:'vSNFILIAL'},{av:'AV141SNPossuiLote',fld:'vSNPOSSUILOTE'},{av:'A6523ParametroConsultaCampoTamanho',fld:'PARAMETROCONSULTACAMPOTAMANHO'},{av:'AV150SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV199SNCamposLote',fld:'vSNCAMPOSLOTE'},{av:'AV37DataReferencia',fld:'vDATAREFERENCIA'},{av:'AV29ParametroConsultaPriOrdenacao',fld:'vPARAMETROCONSULTAPRIORDENACAO'},{av:'AV30ParametroConsultaSegOrdenacao',fld:'vPARAMETROCONSULTASEGORDENACAO'},{av:'AV31SNSaltaPagPriOrdenacao',fld:'vSNSALTAPAGPRIORDENACAO'},{av:'AV32SNSaltaPagSegOrdenacao',fld:'vSNSALTAPAGSEGORDENACAO'},{av:'AV19SNGerarCSV',fld:'vSNGERARCSV'},{av:'AV50ProdutoDataInclusaoIni',fld:'vPRODUTODATAINCLUSAOINI'},{av:'AV51ProdutoDataInclusaoFim',fld:'vPRODUTODATAINCLUSAOFIM'},{av:'AV117PrecoProdutoPrecoIdIni',fld:'vPRECOPRODUTOPRECOIDINI'},{av:'AV118PrecoProdutoPrecoIdFim',fld:'vPRECOPRODUTOPRECOIDFIM'},{av:'AV119PrecoProdutoDataIni',fld:'vPRECOPRODUTODATAINI'},{av:'AV120PrecoProdutoDataFim',fld:'vPRECOPRODUTODATAFIM'},{av:'AV48UnidadeCompraIdIni',fld:'vUNIDADECOMPRAIDINI'},{av:'AV187UnidadeCompraIdFim',fld:'vUNIDADECOMPRAIDFIM'},{av:'AV188UnidadeVendaIdIni',fld:'vUNIDADEVENDAIDINI'},{av:'AV189UnidadeVendaIdFim',fld:'vUNIDADEVENDAIDFIM'},{av:'AV47ProdutoReferenciaIni',fld:'vPRODUTOREFERENCIAINI'},{av:'AV190ProdutoReferenciaFim',fld:'vPRODUTOREFERENCIAFIM'},{av:'AV40LoteProdutoLocalIni',fld:'vLOTEPRODUTOLOCALINI'},{av:'AV191LoteProdutoLocalFim',fld:'vLOTEPRODUTOLOCALFIM'},{av:'AV122EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A3229ParametroConsultaCampoOrd',fld:'PARAMETROCONSULTACAMPOORD'},{av:'A3233ParametroConsultaCampoTitulo',fld:'PARAMETROCONSULTACAMPOTITULO'},{av:'AV135QtdeCaracterRelatorio',fld:'vQTDECARACTERRELATORIO'},{av:'AV73ProdutoId',fld:'vPRODUTOID',grid:197},{av:'AV116SNNovaLinhaProduto',fld:'vSNNOVALINHAPRODUTO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV24ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV59ProdutoFamiliaId',fld:'vPRODUTOFAMILIAID',grid:216},{av:'AV182SNNovaLinhaFamilia',fld:'vSNNOVALINHAFAMILIA'},{av:'A2956FamiliaEmpresaId',fld:'FAMILIAEMPRESAID'},{av:'AV63FamiliaEmpresaId',fld:'vFAMILIAEMPRESAID'},{av:'A2957FamiliaId',fld:'FAMILIAID'},{av:'AV92ProdutoFabricanteId',fld:'vPRODUTOFABRICANTEID',grid:234},{av:'AV183SNNovaLinhaFabricante',fld:'vSNNOVALINHAFABRICANTE'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV100PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV184SNNovaLinhaClassificacao',fld:'vSNNOVALINHACLASSIFICACAO'},{av:'AV102ClassificacaoEstIdGrid',fld:'vCLASSIFICACAOESTIDGRID',grid:253},{av:'AV105ProdutoClassificacaoValor',fld:'vPRODUTOCLASSIFICACAOVALOR',grid:253},{av:'AV185SNNovaLinhaCodificacao',fld:'vSNNOVALINHACODIFICACAO'},{av:'AV109CodificacaoEstIdGrid',fld:'vCODIFICACAOESTIDGRID',grid:270},{av:'AV110ProdutoCodificacaoValor',fld:'vPRODUTOCODIFICACAOVALOR',grid:270},{av:'A2936CodificacaoEstEmpresaId',fld:'CODIFICACAOESTEMPRESAID'},{av:'AV43CodificacaoEstEmpresaId',fld:'vCODIFICACAOESTEMPRESAID'},{av:'A2937CodificacaoEstId',fld:'CODIFICACAOESTID'},{av:'A3402ProdutoCodificacaoValor',fld:'PRODUTOCODIFICACAOVALOR'},{av:'AV138ParametroConsultaCampoTitulo',fld:'vPARAMETROCONSULTACAMPOTITULO'},{av:'AV134ParametroConsultaCampoCod',fld:'vPARAMETROCONSULTACAMPOCOD'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2919AtributoEsquemaUsuarioAlt',fld:'ATRIBUTOESQUEMAUSUARIOALT'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'AV147ParametroConsultaCampoTamanhoAux',fld:'vPARAMETROCONSULTACAMPOTAMANHOAUX'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'GRIDPRODUTO_nFirstRecordOnPage'},{av:'GRIDPRODUTO_nEOF'},{av:'AV74promptProduto',fld:'vPROMPTPRODUTO',grid:197},{av:'AV78excLinhaProduto',fld:'vEXCLINHAPRODUTO',grid:197},{av:'AV121EsquemaUnico',fld:'vESQUEMAUNICO'},{av:'A2912EsquemaDescricao',fld:'ESQUEMADESCRICAO'},{av:'AV186FilialIdParm',fld:'vFILIALIDPARM'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV39FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV124ValorAtributo1',fld:'vVALORATRIBUTO1'},{av:'AV125ValorAtributo2',fld:'vVALORATRIBUTO2'},{av:'AV126ValorAtributo3',fld:'vVALORATRIBUTO3'},{av:'AV127ValorAtributo4',fld:'vVALORATRIBUTO4'},{av:'AV128ValorAtributo5',fld:'vVALORATRIBUTO5'},{av:'AV129ValorAtributoCombo1',fld:'vVALORATRIBUTOCOMBO1'},{av:'AV130ValorAtributoCombo2',fld:'vVALORATRIBUTOCOMBO2'},{av:'AV131ValorAtributoCombo3',fld:'vVALORATRIBUTOCOMBO3'},{av:'AV132ValorAtributoCombo4',fld:'vVALORATRIBUTOCOMBO4'},{av:'AV133ValorAtributoCombo5',fld:'vVALORATRIBUTOCOMBO5'},{av:'AV201SNBloqueiaTela',fld:'vSNBLOQUEIATELA'},{av:'AV139SNImprimir',fld:'vSNIMPRIMIR'},{av:'AV202Mensagem',fld:'vMENSAGEM',hsh:true},{av:'AV218Pgmname',fld:'vPGMNAME'},{av:'AV209SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV23snErro',fld:'vSNERRO'},{av:'AV82snExcluiProduto',fld:'vSNEXCLUIPRODUTO'},{av:'AV75ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA',grid:197},{av:'AV84snExcluiFamilia',fld:'vSNEXCLUIFAMILIA'},{av:'AV60ProdutoFamiliaDescricao',fld:'vPRODUTOFAMILIADESCRICAO',grid:216},{av:'AV101snExcluiFabricante',fld:'vSNEXCLUIFABRICANTE'},{av:'AV96ProdutoFabricanteFantasia',fld:'vPRODUTOFABRICANTEFANTASIA',grid:234},{av:'AV108snExcluiClassificacao',fld:'vSNEXCLUICLASSIFICACAO'},{av:'AV115snExcluiCodificacao',fld:'vSNEXCLUICODIFICACAO'},{av:'AV136OrdenacaoDescricaoAux',fld:'vORDENACAODESCRICAOAUX'},{av:'AV194FilialUnica',fld:'vFILIALUNICA'},{av:'AV198OrdenacaoDescricao2',fld:'vORDENACAODESCRICAO2'},{av:'AV17QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV38FilialId',fld:'vFILIALID'},{av:'AV181ProdutoSituacao',fld:'vPRODUTOSITUACAO'},{av:'AV46ProdutoSNControlaEstoque',fld:'vPRODUTOSNCONTROLAESTOQUE'},{av:'AV56ProdutoBalanca',fld:'vPRODUTOBALANCA'},{av:'AV54ImpSNSaldoEstoque',fld:'vIMPSNSALDOESTOQUE'},{av:'AV145ImpSNSaldoZerado',fld:'vIMPSNSALDOZERADO'},{av:'AV55ImpSNSaldoNegativo',fld:'vIMPSNSALDONEGATIVO'},{av:'AV52ProdutoTipo',fld:'vPRODUTOTIPO'},{av:'AV53ProdutoTipoTributacao',fld:'vPRODUTOTIPOTRIBUTACAO'},{av:'AV71SdtProdutoRelProduto',fld:'vSDTPRODUTORELPRODUTO'},{av:'AV57SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'AV99SdtFabricanteRelProduto',fld:'vSDTFABRICANTERELPRODUTO'},{av:'AV106SdtClassificacaoRelProduto',fld:'vSDTCLASSIFICACAORELPRODUTO'},{av:'AV113SdtCodificacaoRelProduto',fld:'vSDTCODIFICACAORELPRODUTO'},{av:'AV196SdtFiliais',fld:'vSDTFILIAIS'},{av:'AV195SNAgruparQtFilial',fld:'vSNAGRUPARQTFILIAL'},{av:'AV205SNProdutoPromocao',fld:'vSNPRODUTOPROMOCAO'},{av:'AV153TxtTela',fld:'vTXTTELA'},{av:'AV219Pgmdesc',fld:'vPGMDESC'},{av:'AV81ControlaLinhaFamilia',fld:'vCONTROLALINHAFAMILIA',grid:216},{av:'AV137OdenacaoAux',fld:'vODENACAOAUX'},{av:'A3215ParametroConsultaDescricao',fld:'PARAMETROCONSULTADESCRICAO'}],[{av:'AV23snErro',fld:'vSNERRO'},{av:'AV220GXLvl43',fld:'vGXLVL43'},{av:'AV148SNQdtDigitada',fld:'vSNQDTDIGITADA'},{av:'AV203SNQdtDigitadaPr',fld:'vSNQDTDIGITADAPR'},{av:'AV149SNQtdSaldo',fld:'vSNQTDSALDO'},{av:'AV204SNQtdSaldoPr',fld:'vSNQTDSALDOPR'},{av:'AV33SNClassificacaoCompleta',fld:'vSNCLASSIFICACAOCOMPLETA'},{av:'AV34SNCodificacaoCompleta',fld:'vSNCODIFICACAOCOMPLETA'},{av:'AV144SNSimilares',fld:'vSNSIMILARES'},{av:'AV192SNPreco',fld:'vSNPRECO'},{av:'AV200SNFilial',fld:'vSNFILIAL'},{av:'AV147ParametroConsultaCampoTamanhoAux',fld:'vPARAMETROCONSULTACAMPOTAMANHOAUX'},{av:'AV141SNPossuiLote',fld:'vSNPOSSUILOTE'},{av:'AV199SNCamposLote',fld:'vSNCAMPOSLOTE'},{av:'AV222GXLvl314',fld:'vGXLVL314'},{av:'AV71SdtProdutoRelProduto',fld:'vSDTPRODUTORELPRODUTO'},{av:'AV57SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'AV99SdtFabricanteRelProduto',fld:'vSDTFABRICANTERELPRODUTO'},{av:'AV106SdtClassificacaoRelProduto',fld:'vSDTCLASSIFICACAORELPRODUTO'},{av:'AV113SdtCodificacaoRelProduto',fld:'vSDTCODIFICACAORELPRODUTO'},{av:'AV134ParametroConsultaCampoCod',fld:'vPARAMETROCONSULTACAMPOCOD'},{av:'AV138ParametroConsultaCampoTitulo',fld:'vPARAMETROCONSULTACAMPOTITULO'},{av:'AV146ParametroConsultaCampoTamanho',fld:'vPARAMETROCONSULTACAMPOTAMANHO'},{av:'AV135QtdeCaracterRelatorio',fld:'vQTDECARACTERRELATORIO'},{av:'AV237GXLvl900',fld:'vGXLVL900'},{av:'AV243GXLvl1049',fld:'vGXLVL1049'},{av:'AV249GXLvl1185',fld:'vGXLVL1185'},{av:'AV260GXLvl1436',fld:'vGXLVL1436'},{av:'AV143ContAux',fld:'vCONTAUX'},{av:'AV139SNImprimir',fld:'vSNIMPRIMIR'},{av:'AV201SNBloqueiaTela',fld:'vSNBLOQUEIATELA'},{av:'AV142OrdenacaoSDT',fld:'vORDENACAOSDT'},{av:'AV137OdenacaoAux',fld:'vODENACAOAUX'},{av:'AV197OrdenacaoDescricao1',fld:'vORDENACAODESCRICAO1'},{av:'AV198OrdenacaoDescricao2',fld:'vORDENACAODESCRICAO2'},{av:'AV38FilialId',fld:'vFILIALID'},{av:'AV196SdtFiliais',fld:'vSDTFILIAIS'},{av:'AV195SNAgruparQtFilial',fld:'vSNAGRUPARQTFILIAL'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV17QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV214Orientacao',fld:'vORIENTACAO'},{av:'AV180SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{ctrl:'BTNIMPRIMIR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPARAMETROCONSULTACODIGO","Enabled")',ctrl:'vPARAMETROCONSULTACODIGO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAREFERENCIA","Enabled")',ctrl:'vDATAREFERENCIA',prop:'Enabled'},{ctrl:'vPARAMETROCONSULTAPRIORDENACAO'},{ctrl:'vPARAMETROCONSULTASEGORDENACAO'},{av:'gx.fn.getCtrlProperty("vPRODUTODATAINCLUSAOINI","Enabled")',ctrl:'vPRODUTODATAINCLUSAOINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTODATAINCLUSAOFIM","Enabled")',ctrl:'vPRODUTODATAINCLUSAOFIM',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRECOPRODUTOPRECOIDINI","Enabled")',ctrl:'vPRECOPRODUTOPRECOIDINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRECOPRODUTODATAINI","Enabled")',ctrl:'vPRECOPRODUTODATAINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRECOPRODUTOPRECOIDFIM","Enabled")',ctrl:'vPRECOPRODUTOPRECOIDFIM',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRECOPRODUTODATAFIM","Enabled")',ctrl:'vPRECOPRODUTODATAFIM',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUNIDADECOMPRAIDINI","Enabled")',ctrl:'vUNIDADECOMPRAIDINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUNIDADECOMPRAIDFIM","Enabled")',ctrl:'vUNIDADECOMPRAIDFIM',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUNIDADEVENDAIDINI","Enabled")',ctrl:'vUNIDADEVENDAIDINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUNIDADEVENDAIDFIM","Enabled")',ctrl:'vUNIDADEVENDAIDFIM',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOREFERENCIAINI","Enabled")',ctrl:'vPRODUTOREFERENCIAINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOREFERENCIAFIM","Enabled")',ctrl:'vPRODUTOREFERENCIAFIM',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vLOTEPRODUTOLOCALINI","Enabled")',ctrl:'vLOTEPRODUTOLOCALINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vLOTEPRODUTOLOCALFIM","Enabled")',ctrl:'vLOTEPRODUTOLOCALFIM',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOTIPO","Enabled")',ctrl:'vPRODUTOTIPO',prop:'Enabled'},{ctrl:'vPRODUTOTIPOTRIBUTACAO'},{ctrl:'vPRODUTOSITUACAO'},{av:'gx.fn.getCtrlProperty("vESQUEMACODIGO","Enabled")',ctrl:'vESQUEMACODIGO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("FILTRARLOTE","Enabled")',ctrl:'FILTRARLOTE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("FILTRARFILIAL","Enabled")',ctrl:'FILTRARFILIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNGERARCSV","Enabled")',ctrl:'vSNGERARCSV',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNSALTAPAGPRIORDENACAO","Enabled")',ctrl:'vSNSALTAPAGPRIORDENACAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNSALTAPAGSEGORDENACAO","Enabled")',ctrl:'vSNSALTAPAGSEGORDENACAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOSNCONTROLAESTOQUE","Enabled")',ctrl:'vPRODUTOSNCONTROLAESTOQUE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPSNSALDOESTOQUE","Enabled")',ctrl:'vIMPSNSALDOESTOQUE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPSNSALDOZERADO","Enabled")',ctrl:'vIMPSNSALDOZERADO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPSNSALDONEGATIVO","Enabled")',ctrl:'vIMPSNSALDONEGATIVO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNPRODUTOPROMOCAO","Enabled")',ctrl:'vSNPRODUTOPROMOCAO',prop:'Enabled'},{ctrl:'vPRODUTOBALANCA'},{av:'gx.fn.getCtrlProperty("INCLUIPRODUTO","Enabled")',ctrl:'INCLUIPRODUTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOID","Enabled")',ctrl:'vPRODUTOID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPROMPTPRODUTO","Enabled")',ctrl:'vPROMPTPRODUTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vEXCLINHAPRODUTO","Enabled")',ctrl:'vEXCLINHAPRODUTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("INCLUIFAMILIA","Enabled")',ctrl:'INCLUIFAMILIA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOFAMILIAID","Enabled")',ctrl:'vPRODUTOFAMILIAID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPROMPTFAMILIA","Enabled")',ctrl:'vPROMPTFAMILIA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vEXCLINHAFAMILIA","Enabled")',ctrl:'vEXCLINHAFAMILIA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("INCLUIFABRICANTE","Enabled")',ctrl:'INCLUIFABRICANTE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOFABRICANTEID","Enabled")',ctrl:'vPRODUTOFABRICANTEID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPROMPTFABRICANTE","Enabled")',ctrl:'vPROMPTFABRICANTE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vEXCLINHAFABRICANTE","Enabled")',ctrl:'vEXCLINHAFABRICANTE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("INCLUICLASSIFICACAO","Enabled")',ctrl:'INCLUICLASSIFICACAO',prop:'Enabled'},{ctrl:'vCLASSIFICACAOESTIDGRID'},{ctrl:'vPRODUTOCLASSIFICACAOVALOR'},{av:'gx.fn.getCtrlProperty("vEXCLINHACLASSIFICACAO","Enabled")',ctrl:'vEXCLINHACLASSIFICACAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("INCLUICODIFICACAO","Enabled")',ctrl:'INCLUICODIFICACAO',prop:'Enabled'},{ctrl:'vCODIFICACAOESTIDGRID'},{av:'gx.fn.getCtrlProperty("vPRODUTOCODIFICACAOVALOR","Enabled")',ctrl:'vPRODUTOCODIFICACAOVALOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vEXCLINHACODIFICACAO","Enabled")',ctrl:'vEXCLINHACODIFICACAO',prop:'Enabled'},{av:'AV136OrdenacaoDescricaoAux',fld:'vORDENACAODESCRICAOAUX'},{av:'AV211Cont',fld:'vCONT'},{av:'AV239GXV2',fld:'vGXV2'},{av:'AV72SdtProdutoRelProdutoItem',fld:'vSDTPRODUTORELPRODUTOITEM'},{av:'AV240GXV3',fld:'vGXV3'},{av:'AV245GXV5',fld:'vGXV5'},{av:'AV58SdtFamiliaRelProdutoItem',fld:'vSDTFAMILIARELPRODUTOITEM'},{av:'AV246GXV6',fld:'vGXV6'},{av:'AV251GXV8',fld:'vGXV8'},{av:'AV98SdtFabricanteRelProdutoItem',fld:'vSDTFABRICANTERELPRODUTOITEM'},{av:'AV252GXV9',fld:'vGXV9'},{av:'AV256GXV11',fld:'vGXV11'},{av:'AV107SdtClassificacaoRelProdutoItem',fld:'vSDTCLASSIFICACAORELPRODUTOITEM'},{av:'AV257GXV12',fld:'vGXV12'},{av:'AV262GXV14',fld:'vGXV14'},{av:'AV114SdtCodificacaoRelProdutoItem',fld:'vSDTCODIFICACAORELPRODUTOITEM'},{av:'AV263GXV15',fld:'vGXV15'},{av:'AV208OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["FILTRARLOTE.CLICK"] = [[{av:'GRIDPRODUTO_nFirstRecordOnPage'},{av:'GRIDPRODUTO_nEOF'},{av:'AV74promptProduto',fld:'vPROMPTPRODUTO'},{av:'AV78excLinhaProduto',fld:'vEXCLINHAPRODUTO'},{av:'AV121EsquemaUnico',fld:'vESQUEMAUNICO'},{av:'AV150SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV122EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A2912EsquemaDescricao',fld:'ESQUEMADESCRICAO'},{av:'AV186FilialIdParm',fld:'vFILIALIDPARM'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV39FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV124ValorAtributo1',fld:'vVALORATRIBUTO1'},{av:'AV125ValorAtributo2',fld:'vVALORATRIBUTO2'},{av:'AV126ValorAtributo3',fld:'vVALORATRIBUTO3'},{av:'AV127ValorAtributo4',fld:'vVALORATRIBUTO4'},{av:'AV128ValorAtributo5',fld:'vVALORATRIBUTO5'},{av:'AV129ValorAtributoCombo1',fld:'vVALORATRIBUTOCOMBO1'},{av:'AV130ValorAtributoCombo2',fld:'vVALORATRIBUTOCOMBO2'},{av:'AV131ValorAtributoCombo3',fld:'vVALORATRIBUTOCOMBO3'},{av:'AV132ValorAtributoCombo4',fld:'vVALORATRIBUTOCOMBO4'},{av:'AV133ValorAtributoCombo5',fld:'vVALORATRIBUTOCOMBO5'},{av:'AV201SNBloqueiaTela',fld:'vSNBLOQUEIATELA'},{av:'AV139SNImprimir',fld:'vSNIMPRIMIR'},{av:'AV202Mensagem',fld:'vMENSAGEM',hsh:true},{av:'AV218Pgmname',fld:'vPGMNAME'},{av:'AV209SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV116SNNovaLinhaProduto',fld:'vSNNOVALINHAPRODUTO'},{av:'AV23snErro',fld:'vSNERRO'},{av:'AV82snExcluiProduto',fld:'vSNEXCLUIPRODUTO'},{av:'AV73ProdutoId',fld:'vPRODUTOID'},{av:'AV75ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'},{av:'AV182SNNovaLinhaFamilia',fld:'vSNNOVALINHAFAMILIA'},{av:'AV84snExcluiFamilia',fld:'vSNEXCLUIFAMILIA'},{av:'AV59ProdutoFamiliaId',fld:'vPRODUTOFAMILIAID'},{av:'AV60ProdutoFamiliaDescricao',fld:'vPRODUTOFAMILIADESCRICAO'},{av:'AV183SNNovaLinhaFabricante',fld:'vSNNOVALINHAFABRICANTE'},{av:'AV101snExcluiFabricante',fld:'vSNEXCLUIFABRICANTE'},{av:'AV92ProdutoFabricanteId',fld:'vPRODUTOFABRICANTEID'},{av:'AV96ProdutoFabricanteFantasia',fld:'vPRODUTOFABRICANTEFANTASIA'},{av:'AV184SNNovaLinhaClassificacao',fld:'vSNNOVALINHACLASSIFICACAO'},{av:'AV108snExcluiClassificacao',fld:'vSNEXCLUICLASSIFICACAO'},{av:'AV102ClassificacaoEstIdGrid',fld:'vCLASSIFICACAOESTIDGRID'},{av:'AV105ProdutoClassificacaoValor',fld:'vPRODUTOCLASSIFICACAOVALOR'},{av:'AV185SNNovaLinhaCodificacao',fld:'vSNNOVALINHACODIFICACAO'},{av:'AV115snExcluiCodificacao',fld:'vSNEXCLUICODIFICACAO'},{av:'AV109CodificacaoEstIdGrid',fld:'vCODIFICACAOESTIDGRID'},{av:'AV110ProdutoCodificacaoValor',fld:'vPRODUTOCODIFICACAOVALOR'},{av:'AV135QtdeCaracterRelatorio',fld:'vQTDECARACTERRELATORIO'},{av:'AV33SNClassificacaoCompleta',fld:'vSNCLASSIFICACAOCOMPLETA'},{av:'AV34SNCodificacaoCompleta',fld:'vSNCODIFICACAOCOMPLETA'},{av:'AV144SNSimilares',fld:'vSNSIMILARES'},{av:'AV19SNGerarCSV',fld:'vSNGERARCSV'},{av:'AV29ParametroConsultaPriOrdenacao',fld:'vPARAMETROCONSULTAPRIORDENACAO'},{av:'AV136OrdenacaoDescricaoAux',fld:'vORDENACAODESCRICAOAUX'},{av:'AV30ParametroConsultaSegOrdenacao',fld:'vPARAMETROCONSULTASEGORDENACAO'},{av:'AV194FilialUnica',fld:'vFILIALUNICA'},{av:'AV198OrdenacaoDescricao2',fld:'vORDENACAODESCRICAO2'},{av:'AV17QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV22ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO'},{av:'AV37DataReferencia',fld:'vDATAREFERENCIA'},{av:'AV31SNSaltaPagPriOrdenacao',fld:'vSNSALTAPAGPRIORDENACAO'},{av:'AV32SNSaltaPagSegOrdenacao',fld:'vSNSALTAPAGSEGORDENACAO'},{av:'AV50ProdutoDataInclusaoIni',fld:'vPRODUTODATAINCLUSAOINI'},{av:'AV51ProdutoDataInclusaoFim',fld:'vPRODUTODATAINCLUSAOFIM'},{av:'AV117PrecoProdutoPrecoIdIni',fld:'vPRECOPRODUTOPRECOIDINI'},{av:'AV119PrecoProdutoDataIni',fld:'vPRECOPRODUTODATAINI'},{av:'AV118PrecoProdutoPrecoIdFim',fld:'vPRECOPRODUTOPRECOIDFIM'},{av:'AV120PrecoProdutoDataFim',fld:'vPRECOPRODUTODATAFIM'},{av:'AV48UnidadeCompraIdIni',fld:'vUNIDADECOMPRAIDINI'},{av:'AV187UnidadeCompraIdFim',fld:'vUNIDADECOMPRAIDFIM'},{av:'AV188UnidadeVendaIdIni',fld:'vUNIDADEVENDAIDINI'},{av:'AV189UnidadeVendaIdFim',fld:'vUNIDADEVENDAIDFIM'},{av:'AV38FilialId',fld:'vFILIALID'},{av:'AV47ProdutoReferenciaIni',fld:'vPRODUTOREFERENCIAINI'},{av:'AV190ProdutoReferenciaFim',fld:'vPRODUTOREFERENCIAFIM'},{av:'AV40LoteProdutoLocalIni',fld:'vLOTEPRODUTOLOCALINI'},{av:'AV191LoteProdutoLocalFim',fld:'vLOTEPRODUTOLOCALFIM'},{av:'AV181ProdutoSituacao',fld:'vPRODUTOSITUACAO'},{av:'AV46ProdutoSNControlaEstoque',fld:'vPRODUTOSNCONTROLAESTOQUE'},{av:'AV56ProdutoBalanca',fld:'vPRODUTOBALANCA'},{av:'AV54ImpSNSaldoEstoque',fld:'vIMPSNSALDOESTOQUE'},{av:'AV145ImpSNSaldoZerado',fld:'vIMPSNSALDOZERADO'},{av:'AV55ImpSNSaldoNegativo',fld:'vIMPSNSALDONEGATIVO'},{av:'AV52ProdutoTipo',fld:'vPRODUTOTIPO'},{av:'AV53ProdutoTipoTributacao',fld:'vPRODUTOTIPOTRIBUTACAO'},{av:'AV71SdtProdutoRelProduto',fld:'vSDTPRODUTORELPRODUTO'},{av:'AV57SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'AV99SdtFabricanteRelProduto',fld:'vSDTFABRICANTERELPRODUTO'},{av:'AV106SdtClassificacaoRelProduto',fld:'vSDTCLASSIFICACAORELPRODUTO'},{av:'AV113SdtCodificacaoRelProduto',fld:'vSDTCODIFICACAORELPRODUTO'},{av:'AV196SdtFiliais',fld:'vSDTFILIAIS'},{av:'AV195SNAgruparQtFilial',fld:'vSNAGRUPARQTFILIAL'},{av:'AV205SNProdutoPromocao',fld:'vSNPRODUTOPROMOCAO'},{av:'AV153TxtTela',fld:'vTXTTELA'},{av:'AV219Pgmdesc',fld:'vPGMDESC'},{av:'AV81ControlaLinhaFamilia',fld:'vCONTROLALINHAFAMILIA'},{av:'AV137OdenacaoAux',fld:'vODENACAOAUX'},{av:'A3227ParametroConsultaEmpresaId',fld:'PARAMETROCONSULTAEMPRESAID'},{av:'AV25ParametroConsultaEmpresaId',fld:'vPARAMETROCONSULTAEMPRESAID'},{av:'A3228ParametroConsultaCodigo',fld:'PARAMETROCONSULTACODIGO'},{av:'A3215ParametroConsultaDescricao',fld:'PARAMETROCONSULTADESCRICAO'}],[{av:'AV23snErro',fld:'vSNERRO'},{av:'AV226GXLvl511',fld:'vGXLVL511'},{av:'AV133ValorAtributoCombo5',fld:'vVALORATRIBUTOCOMBO5'},{av:'AV132ValorAtributoCombo4',fld:'vVALORATRIBUTOCOMBO4'},{av:'AV131ValorAtributoCombo3',fld:'vVALORATRIBUTOCOMBO3'},{av:'AV130ValorAtributoCombo2',fld:'vVALORATRIBUTOCOMBO2'},{av:'AV129ValorAtributoCombo1',fld:'vVALORATRIBUTOCOMBO1'},{av:'AV128ValorAtributo5',fld:'vVALORATRIBUTO5'},{av:'AV127ValorAtributo4',fld:'vVALORATRIBUTO4'},{av:'AV126ValorAtributo3',fld:'vVALORATRIBUTO3'},{av:'AV125ValorAtributo2',fld:'vVALORATRIBUTO2'},{av:'AV124ValorAtributo1',fld:'vVALORATRIBUTO1'},{av:'AV122EsquemaCodigo',fld:'vESQUEMACODIGO'}]];
   this.EvtParms["FILTRARFILIAL.CLICK"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["GRIDPRODUTO.LOAD"] = [[{av:'AV71SdtProdutoRelProduto',fld:'vSDTPRODUTORELPRODUTO'},{av:'AV116SNNovaLinhaProduto',fld:'vSNNOVALINHAPRODUTO'},{av:'AV23snErro',fld:'vSNERRO'}],[{av:'AV79ControlaLinhaProduto',fld:'vCONTROLALINHAPRODUTO'},{av:'AV235GXV1',fld:'vGXV1'},{av:'AV72SdtProdutoRelProdutoItem',fld:'vSDTPRODUTORELPRODUTOITEM'},{av:'AV73ProdutoId',fld:'vPRODUTOID'},{av:'AV75ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'}]];
   this.EvtParms["'LINHAGRIDPRODUTO'"] = [[{av:'AV23snErro',fld:'vSNERRO'},{av:'AV73ProdutoId',fld:'vPRODUTOID',grid:197},{av:'AV75ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA',grid:197},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV116SNNovaLinhaProduto',fld:'vSNNOVALINHAPRODUTO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV24ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'}],[{av:'AV71SdtProdutoRelProduto',fld:'vSDTPRODUTORELPRODUTO'},{av:'AV116SNNovaLinhaProduto',fld:'vSNNOVALINHAPRODUTO'},{av:'AV72SdtProdutoRelProdutoItem',fld:'vSDTPRODUTORELPRODUTOITEM'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV62x',fld:'vX'},{av:'AV27Entrada',fld:'vENTRADA'},{av:'AV28Saida',fld:'vSAIDA'},{av:'AV64Aux',fld:'vAUX'},{av:'AV23snErro',fld:'vSNERRO'},{av:'AV237GXLvl900',fld:'vGXLVL900'}]];
   this.EvtParms["'EXCLUILINHAGRIDPRODUTO'"] = [[{av:'AV79ControlaLinhaProduto',fld:'vCONTROLALINHAPRODUTO'}],[{av:'AV71SdtProdutoRelProduto',fld:'vSDTPRODUTORELPRODUTO'},{av:'AV82snExcluiProduto',fld:'vSNEXCLUIPRODUTO'}]];
   this.EvtParms["GRIDFAMILIA.LOAD"] = [[{av:'AV57SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'AV182SNNovaLinhaFamilia',fld:'vSNNOVALINHAFAMILIA'},{av:'AV23snErro',fld:'vSNERRO'}],[{av:'AV81ControlaLinhaFamilia',fld:'vCONTROLALINHAFAMILIA'},{av:'AV241GXV4',fld:'vGXV4'},{av:'AV58SdtFamiliaRelProdutoItem',fld:'vSDTFAMILIARELPRODUTOITEM'},{av:'AV59ProdutoFamiliaId',fld:'vPRODUTOFAMILIAID'},{av:'AV60ProdutoFamiliaDescricao',fld:'vPRODUTOFAMILIADESCRICAO'}]];
   this.EvtParms["'LINHAGRIDFAMILIA'"] = [[{av:'AV23snErro',fld:'vSNERRO'},{av:'AV59ProdutoFamiliaId',fld:'vPRODUTOFAMILIAID',grid:216},{av:'AV60ProdutoFamiliaDescricao',fld:'vPRODUTOFAMILIADESCRICAO',grid:216},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV182SNNovaLinhaFamilia',fld:'vSNNOVALINHAFAMILIA'},{av:'A2956FamiliaEmpresaId',fld:'FAMILIAEMPRESAID'},{av:'AV63FamiliaEmpresaId',fld:'vFAMILIAEMPRESAID'},{av:'A2957FamiliaId',fld:'FAMILIAID'}],[{av:'AV57SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'AV182SNNovaLinhaFamilia',fld:'vSNNOVALINHAFAMILIA'},{av:'AV58SdtFamiliaRelProdutoItem',fld:'vSDTFAMILIARELPRODUTOITEM'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV67TemMascara',fld:'vTEMMASCARA'},{av:'AV62x',fld:'vX'},{av:'AV27Entrada',fld:'vENTRADA'},{av:'AV28Saida',fld:'vSAIDA'},{av:'AV64Aux',fld:'vAUX'},{av:'AV23snErro',fld:'vSNERRO'},{av:'AV243GXLvl1049',fld:'vGXLVL1049'}]];
   this.EvtParms["'EXCLUILINHAGRIDFAMILIA'"] = [[{av:'AV81ControlaLinhaFamilia',fld:'vCONTROLALINHAFAMILIA'}],[{av:'AV57SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'AV84snExcluiFamilia',fld:'vSNEXCLUIFAMILIA'}]];
   this.EvtParms["GRIDFABRICANTE.LOAD"] = [[{av:'AV99SdtFabricanteRelProduto',fld:'vSDTFABRICANTERELPRODUTO'},{av:'AV183SNNovaLinhaFabricante',fld:'vSNNOVALINHAFABRICANTE'},{av:'AV23snErro',fld:'vSNERRO'}],[{av:'AV97ControlaLinhaFabricante',fld:'vCONTROLALINHAFABRICANTE'},{av:'AV247GXV7',fld:'vGXV7'},{av:'AV98SdtFabricanteRelProdutoItem',fld:'vSDTFABRICANTERELPRODUTOITEM'},{av:'AV92ProdutoFabricanteId',fld:'vPRODUTOFABRICANTEID'},{av:'AV96ProdutoFabricanteFantasia',fld:'vPRODUTOFABRICANTEFANTASIA'}]];
   this.EvtParms["'LINHAGRIDFABRICANTE'"] = [[{av:'AV23snErro',fld:'vSNERRO'},{av:'AV92ProdutoFabricanteId',fld:'vPRODUTOFABRICANTEID',grid:234},{av:'AV96ProdutoFabricanteFantasia',fld:'vPRODUTOFABRICANTEFANTASIA',grid:234},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV183SNNovaLinhaFabricante',fld:'vSNNOVALINHAFABRICANTE'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV100PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'}],[{av:'AV99SdtFabricanteRelProduto',fld:'vSDTFABRICANTERELPRODUTO'},{av:'AV183SNNovaLinhaFabricante',fld:'vSNNOVALINHAFABRICANTE'},{av:'AV98SdtFabricanteRelProdutoItem',fld:'vSDTFABRICANTERELPRODUTOITEM'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV62x',fld:'vX'},{av:'AV27Entrada',fld:'vENTRADA'},{av:'AV28Saida',fld:'vSAIDA'},{av:'AV64Aux',fld:'vAUX'},{av:'AV23snErro',fld:'vSNERRO'},{av:'AV249GXLvl1185',fld:'vGXLVL1185'}]];
   this.EvtParms["'EXCLUILINHAGRIDFABRICANTE'"] = [[{av:'AV97ControlaLinhaFabricante',fld:'vCONTROLALINHAFABRICANTE'}],[{av:'AV99SdtFabricanteRelProduto',fld:'vSDTFABRICANTERELPRODUTO'},{av:'AV101snExcluiFabricante',fld:'vSNEXCLUIFABRICANTE'}]];
   this.EvtParms["GRIDCLASSIFICACAO.LOAD"] = [[{av:'AV106SdtClassificacaoRelProduto',fld:'vSDTCLASSIFICACAORELPRODUTO'},{av:'AV184SNNovaLinhaClassificacao',fld:'vSNNOVALINHACLASSIFICACAO'},{av:'AV23snErro',fld:'vSNERRO'}],[{av:'AV104ControlaLinhaClassificacao',fld:'vCONTROLALINHACLASSIFICACAO'},{av:'AV253GXV10',fld:'vGXV10'},{av:'AV107SdtClassificacaoRelProdutoItem',fld:'vSDTCLASSIFICACAORELPRODUTOITEM'},{av:'AV102ClassificacaoEstIdGrid',fld:'vCLASSIFICACAOESTIDGRID'},{av:'AV105ProdutoClassificacaoValor',fld:'vPRODUTOCLASSIFICACAOVALOR'}]];
   this.EvtParms["VCLASSIFICACAOESTIDGRID.CLICK"] = [[{av:'AV105ProdutoClassificacaoValor',fld:'vPRODUTOCLASSIFICACAOVALOR'}],[]];
   this.EvtParms["'LINHAGRIDCLASSIFICACAO'"] = [[{av:'AV23snErro',fld:'vSNERRO'},{av:'AV102ClassificacaoEstIdGrid',fld:'vCLASSIFICACAOESTIDGRID',grid:253},{av:'AV105ProdutoClassificacaoValor',fld:'vPRODUTOCLASSIFICACAOVALOR',grid:253},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV184SNNovaLinhaClassificacao',fld:'vSNNOVALINHACLASSIFICACAO'}],[{av:'AV106SdtClassificacaoRelProduto',fld:'vSDTCLASSIFICACAORELPRODUTO'},{av:'AV184SNNovaLinhaClassificacao',fld:'vSNNOVALINHACLASSIFICACAO'},{av:'AV107SdtClassificacaoRelProdutoItem',fld:'vSDTCLASSIFICACAORELPRODUTOITEM'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV23snErro',fld:'vSNERRO'}]];
   this.EvtParms["'EXCLUILINHAGRIDCLASSIFICACAO'"] = [[{av:'AV104ControlaLinhaClassificacao',fld:'vCONTROLALINHACLASSIFICACAO'}],[{av:'AV106SdtClassificacaoRelProduto',fld:'vSDTCLASSIFICACAORELPRODUTO'},{av:'AV108snExcluiClassificacao',fld:'vSNEXCLUICLASSIFICACAO'}]];
   this.EvtParms["GRIDCODIFICACAO.LOAD"] = [[{av:'AV113SdtCodificacaoRelProduto',fld:'vSDTCODIFICACAORELPRODUTO'},{av:'AV185SNNovaLinhaCodificacao',fld:'vSNNOVALINHACODIFICACAO'},{av:'AV23snErro',fld:'vSNERRO'}],[{av:'AV112ControlaLinhaCodificacao',fld:'vCONTROLALINHACODIFICACAO'},{av:'AV258GXV13',fld:'vGXV13'},{av:'AV114SdtCodificacaoRelProdutoItem',fld:'vSDTCODIFICACAORELPRODUTOITEM'},{av:'AV109CodificacaoEstIdGrid',fld:'vCODIFICACAOESTIDGRID'},{av:'AV110ProdutoCodificacaoValor',fld:'vPRODUTOCODIFICACAOVALOR'}]];
   this.EvtParms["'LINHAGRIDCODIFICACAO'"] = [[{av:'AV23snErro',fld:'vSNERRO'},{av:'AV109CodificacaoEstIdGrid',fld:'vCODIFICACAOESTIDGRID',grid:270},{av:'AV110ProdutoCodificacaoValor',fld:'vPRODUTOCODIFICACAOVALOR',grid:270},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV185SNNovaLinhaCodificacao',fld:'vSNNOVALINHACODIFICACAO'},{av:'A2936CodificacaoEstEmpresaId',fld:'CODIFICACAOESTEMPRESAID'},{av:'AV43CodificacaoEstEmpresaId',fld:'vCODIFICACAOESTEMPRESAID'},{av:'A2937CodificacaoEstId',fld:'CODIFICACAOESTID'},{av:'A3402ProdutoCodificacaoValor',fld:'PRODUTOCODIFICACAOVALOR'}],[{av:'AV113SdtCodificacaoRelProduto',fld:'vSDTCODIFICACAORELPRODUTO'},{av:'AV185SNNovaLinhaCodificacao',fld:'vSNNOVALINHACODIFICACAO'},{av:'AV114SdtCodificacaoRelProdutoItem',fld:'vSDTCODIFICACAORELPRODUTOITEM'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV23snErro',fld:'vSNERRO'},{av:'AV260GXLvl1436',fld:'vGXLVL1436'}]];
   this.EvtParms["'EXCLUILINHAGRIDCODIFICACAO'"] = [[{av:'AV112ControlaLinhaCodificacao',fld:'vCONTROLALINHACODIFICACAO'}],[{av:'AV113SdtCodificacaoRelProduto',fld:'vSDTCODIFICACAORELPRODUTO'},{av:'AV115snExcluiCodificacao',fld:'vSNEXCLUICODIFICACAO'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'GRIDPRODUTO_nFirstRecordOnPage'},{av:'GRIDPRODUTO_nEOF'},{av:'AV74promptProduto',fld:'vPROMPTPRODUTO'},{av:'AV78excLinhaProduto',fld:'vEXCLINHAPRODUTO'},{av:'AV121EsquemaUnico',fld:'vESQUEMAUNICO'},{av:'AV150SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV122EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A2912EsquemaDescricao',fld:'ESQUEMADESCRICAO'},{av:'AV186FilialIdParm',fld:'vFILIALIDPARM'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV39FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV124ValorAtributo1',fld:'vVALORATRIBUTO1'},{av:'AV125ValorAtributo2',fld:'vVALORATRIBUTO2'},{av:'AV126ValorAtributo3',fld:'vVALORATRIBUTO3'},{av:'AV127ValorAtributo4',fld:'vVALORATRIBUTO4'},{av:'AV128ValorAtributo5',fld:'vVALORATRIBUTO5'},{av:'AV129ValorAtributoCombo1',fld:'vVALORATRIBUTOCOMBO1'},{av:'AV130ValorAtributoCombo2',fld:'vVALORATRIBUTOCOMBO2'},{av:'AV131ValorAtributoCombo3',fld:'vVALORATRIBUTOCOMBO3'},{av:'AV132ValorAtributoCombo4',fld:'vVALORATRIBUTOCOMBO4'},{av:'AV133ValorAtributoCombo5',fld:'vVALORATRIBUTOCOMBO5'},{av:'AV201SNBloqueiaTela',fld:'vSNBLOQUEIATELA'},{av:'AV139SNImprimir',fld:'vSNIMPRIMIR'},{av:'AV202Mensagem',fld:'vMENSAGEM',hsh:true},{av:'AV218Pgmname',fld:'vPGMNAME'},{av:'AV209SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV116SNNovaLinhaProduto',fld:'vSNNOVALINHAPRODUTO'},{av:'AV23snErro',fld:'vSNERRO'},{av:'AV82snExcluiProduto',fld:'vSNEXCLUIPRODUTO'},{av:'AV73ProdutoId',fld:'vPRODUTOID'},{av:'AV75ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'},{av:'AV182SNNovaLinhaFamilia',fld:'vSNNOVALINHAFAMILIA'},{av:'AV84snExcluiFamilia',fld:'vSNEXCLUIFAMILIA'},{av:'AV59ProdutoFamiliaId',fld:'vPRODUTOFAMILIAID'},{av:'AV60ProdutoFamiliaDescricao',fld:'vPRODUTOFAMILIADESCRICAO'},{av:'AV183SNNovaLinhaFabricante',fld:'vSNNOVALINHAFABRICANTE'},{av:'AV101snExcluiFabricante',fld:'vSNEXCLUIFABRICANTE'},{av:'AV92ProdutoFabricanteId',fld:'vPRODUTOFABRICANTEID'},{av:'AV96ProdutoFabricanteFantasia',fld:'vPRODUTOFABRICANTEFANTASIA'},{av:'AV184SNNovaLinhaClassificacao',fld:'vSNNOVALINHACLASSIFICACAO'},{av:'AV108snExcluiClassificacao',fld:'vSNEXCLUICLASSIFICACAO'},{av:'AV102ClassificacaoEstIdGrid',fld:'vCLASSIFICACAOESTIDGRID'},{av:'AV105ProdutoClassificacaoValor',fld:'vPRODUTOCLASSIFICACAOVALOR'},{av:'AV185SNNovaLinhaCodificacao',fld:'vSNNOVALINHACODIFICACAO'},{av:'AV115snExcluiCodificacao',fld:'vSNEXCLUICODIFICACAO'},{av:'AV109CodificacaoEstIdGrid',fld:'vCODIFICACAOESTIDGRID'},{av:'AV110ProdutoCodificacaoValor',fld:'vPRODUTOCODIFICACAOVALOR'},{av:'AV135QtdeCaracterRelatorio',fld:'vQTDECARACTERRELATORIO'},{av:'AV33SNClassificacaoCompleta',fld:'vSNCLASSIFICACAOCOMPLETA'},{av:'AV34SNCodificacaoCompleta',fld:'vSNCODIFICACAOCOMPLETA'},{av:'AV144SNSimilares',fld:'vSNSIMILARES'},{av:'AV19SNGerarCSV',fld:'vSNGERARCSV'},{av:'AV29ParametroConsultaPriOrdenacao',fld:'vPARAMETROCONSULTAPRIORDENACAO'},{av:'AV136OrdenacaoDescricaoAux',fld:'vORDENACAODESCRICAOAUX'},{av:'AV30ParametroConsultaSegOrdenacao',fld:'vPARAMETROCONSULTASEGORDENACAO'},{av:'AV194FilialUnica',fld:'vFILIALUNICA'},{av:'AV198OrdenacaoDescricao2',fld:'vORDENACAODESCRICAO2'},{av:'AV17QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV22ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO'},{av:'AV37DataReferencia',fld:'vDATAREFERENCIA'},{av:'AV31SNSaltaPagPriOrdenacao',fld:'vSNSALTAPAGPRIORDENACAO'},{av:'AV32SNSaltaPagSegOrdenacao',fld:'vSNSALTAPAGSEGORDENACAO'},{av:'AV50ProdutoDataInclusaoIni',fld:'vPRODUTODATAINCLUSAOINI'},{av:'AV51ProdutoDataInclusaoFim',fld:'vPRODUTODATAINCLUSAOFIM'},{av:'AV117PrecoProdutoPrecoIdIni',fld:'vPRECOPRODUTOPRECOIDINI'},{av:'AV119PrecoProdutoDataIni',fld:'vPRECOPRODUTODATAINI'},{av:'AV118PrecoProdutoPrecoIdFim',fld:'vPRECOPRODUTOPRECOIDFIM'},{av:'AV120PrecoProdutoDataFim',fld:'vPRECOPRODUTODATAFIM'},{av:'AV48UnidadeCompraIdIni',fld:'vUNIDADECOMPRAIDINI'},{av:'AV187UnidadeCompraIdFim',fld:'vUNIDADECOMPRAIDFIM'},{av:'AV188UnidadeVendaIdIni',fld:'vUNIDADEVENDAIDINI'},{av:'AV189UnidadeVendaIdFim',fld:'vUNIDADEVENDAIDFIM'},{av:'AV38FilialId',fld:'vFILIALID'},{av:'AV47ProdutoReferenciaIni',fld:'vPRODUTOREFERENCIAINI'},{av:'AV190ProdutoReferenciaFim',fld:'vPRODUTOREFERENCIAFIM'},{av:'AV40LoteProdutoLocalIni',fld:'vLOTEPRODUTOLOCALINI'},{av:'AV191LoteProdutoLocalFim',fld:'vLOTEPRODUTOLOCALFIM'},{av:'AV181ProdutoSituacao',fld:'vPRODUTOSITUACAO'},{av:'AV46ProdutoSNControlaEstoque',fld:'vPRODUTOSNCONTROLAESTOQUE'},{av:'AV56ProdutoBalanca',fld:'vPRODUTOBALANCA'},{av:'AV54ImpSNSaldoEstoque',fld:'vIMPSNSALDOESTOQUE'},{av:'AV145ImpSNSaldoZerado',fld:'vIMPSNSALDOZERADO'},{av:'AV55ImpSNSaldoNegativo',fld:'vIMPSNSALDONEGATIVO'},{av:'AV52ProdutoTipo',fld:'vPRODUTOTIPO'},{av:'AV53ProdutoTipoTributacao',fld:'vPRODUTOTIPOTRIBUTACAO'},{av:'AV71SdtProdutoRelProduto',fld:'vSDTPRODUTORELPRODUTO'},{av:'AV57SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'AV99SdtFabricanteRelProduto',fld:'vSDTFABRICANTERELPRODUTO'},{av:'AV106SdtClassificacaoRelProduto',fld:'vSDTCLASSIFICACAORELPRODUTO'},{av:'AV113SdtCodificacaoRelProduto',fld:'vSDTCODIFICACAORELPRODUTO'},{av:'AV196SdtFiliais',fld:'vSDTFILIAIS'},{av:'AV195SNAgruparQtFilial',fld:'vSNAGRUPARQTFILIAL'},{av:'AV205SNProdutoPromocao',fld:'vSNPRODUTOPROMOCAO'},{av:'AV153TxtTela',fld:'vTXTTELA'},{av:'AV219Pgmdesc',fld:'vPGMDESC'},{av:'AV81ControlaLinhaFamilia',fld:'vCONTROLALINHAFAMILIA'},{av:'AV137OdenacaoAux',fld:'vODENACAOAUX'},{av:'A3227ParametroConsultaEmpresaId',fld:'PARAMETROCONSULTAEMPRESAID'},{av:'AV25ParametroConsultaEmpresaId',fld:'vPARAMETROCONSULTAEMPRESAID'},{av:'A3228ParametroConsultaCodigo',fld:'PARAMETROCONSULTACODIGO'},{av:'A3215ParametroConsultaDescricao',fld:'PARAMETROCONSULTADESCRICAO'}],[{av:'AV208OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV218Pgmname',fld:'vPGMNAME'},{av:'AV209SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV153TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV57SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'AV81ControlaLinhaFamilia',fld:'vCONTROLALINHAFAMILIA'},{av:'A3227ParametroConsultaEmpresaId',fld:'PARAMETROCONSULTAEMPRESAID'},{av:'AV25ParametroConsultaEmpresaId',fld:'vPARAMETROCONSULTAEMPRESAID'},{av:'A3228ParametroConsultaCodigo',fld:'PARAMETROCONSULTACODIGO'},{av:'AV22ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO'},{av:'A3215ParametroConsultaDescricao',fld:'PARAMETROCONSULTADESCRICAO'}],[{av:'AV266GXV16',fld:'vGXV16'},{av:'AV210SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV22ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO'},{av:'AV29ParametroConsultaPriOrdenacao',fld:'vPARAMETROCONSULTAPRIORDENACAO'},{av:'AV30ParametroConsultaSegOrdenacao',fld:'vPARAMETROCONSULTASEGORDENACAO'},{av:'AV19SNGerarCSV',fld:'vSNGERARCSV'},{av:'AV31SNSaltaPagPriOrdenacao',fld:'vSNSALTAPAGPRIORDENACAO'},{av:'AV32SNSaltaPagSegOrdenacao',fld:'vSNSALTAPAGSEGORDENACAO'},{av:'AV181ProdutoSituacao',fld:'vPRODUTOSITUACAO'},{av:'AV46ProdutoSNControlaEstoque',fld:'vPRODUTOSNCONTROLAESTOQUE'},{av:'AV56ProdutoBalanca',fld:'vPRODUTOBALANCA'},{av:'AV54ImpSNSaldoEstoque',fld:'vIMPSNSALDOESTOQUE'},{av:'AV145ImpSNSaldoZerado',fld:'vIMPSNSALDOZERADO'},{av:'AV55ImpSNSaldoNegativo',fld:'vIMPSNSALDONEGATIVO'},{av:'AV57SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'AV267GXV17',fld:'vGXV17'},{av:'AV58SdtFamiliaRelProdutoItem',fld:'vSDTFAMILIARELPRODUTOITEM'},{av:'AV81ControlaLinhaFamilia',fld:'vCONTROLALINHAFAMILIA'},{av:'AV59ProdutoFamiliaId',fld:'vPRODUTOFAMILIAID'},{av:'AV60ProdutoFamiliaDescricao',fld:'vPRODUTOFAMILIADESCRICAO'},{av:'AV26ParametroConsultaDescricao',fld:'vPARAMETROCONSULTADESCRICAO'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV218Pgmname',fld:'vPGMNAME'},{av:'AV153TxtTela',fld:'vTXTTELA'}],[]];
   this.EvtParms["VPRODUTOID.ISVALID"] = [[{av:'AV24ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV73ProdutoId',fld:'vPRODUTOID'}],[{av:'AV75ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'}]];
   this.EvtParms["VPRODUTOFAMILIAID.ISVALID"] = [[{av:'AV63FamiliaEmpresaId',fld:'vFAMILIAEMPRESAID'},{av:'AV59ProdutoFamiliaId',fld:'vPRODUTOFAMILIAID'}],[{av:'AV60ProdutoFamiliaDescricao',fld:'vPRODUTOFAMILIADESCRICAO'}]];
   this.EvtParms["VPRODUTOFABRICANTEID.ISVALID"] = [[{av:'AV100PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV92ProdutoFabricanteId',fld:'vPRODUTOFABRICANTEID'}],[{av:'AV96ProdutoFabricanteFantasia',fld:'vPRODUTOFABRICANTEFANTASIA'}]];
   this.setPrompt("PROMPT_PARAMETROCONSULTACODIGO", [33]);
   this.setPrompt("PROMPT_PRECOPRODUTOPRECOIDINI", [85]);
   this.setPrompt("PROMPT_PRECOPRODUTOPRECOIDFIM", [94]);
   this.setPrompt("PROMPT_UNIDADECOMPRAIDINI", [101]);
   this.setPrompt("PROMPT_UNIDADECOMPRAIDFIM", [105]);
   this.setPrompt("PROMPT_UNIDADEVENDAIDINI", [110]);
   this.setPrompt("PROMPT_UNIDADEVENDAIDFIM", [114]);
   this.setPrompt("PROMPT_ESQUEMACODIGO", [176]);
   this.setPrompt("&PROMPTPRODUTO", [198,304,305,306,307,310,311]);
   this.setPrompt("&PROMPTFAMILIA", [217]);
   this.setPrompt("&PROMPTFABRICANTE", [235]);
   this.EnterCtrl = ["BTNIMPRIMIR"];
   this.setVCMap("AV121EsquemaUnico", "vESQUEMAUNICO", 0, "svchar");
   this.setVCMap("AV150SNLoteUnico", "vSNLOTEUNICO", 0, "svchar");
   this.setVCMap("A2915EsquemaCodigo", "ESQUEMACODIGO", 0, "int");
   this.setVCMap("A2912EsquemaDescricao", "ESQUEMADESCRICAO", 0, "svchar");
   this.setVCMap("AV186FilialIdParm", "vFILIALIDPARM", 0, "char");
   this.setVCMap("A1228FilialEmpresaId", "FILIALEMPRESAID", 0, "char");
   this.setVCMap("A1156FilialId", "FILIALID", 0, "int");
   this.setVCMap("A1136FilialNome", "FILIALNOME", 0, "svchar");
   this.setVCMap("AV202Mensagem", "vMENSAGEM", 0, "svchar");
   this.setVCMap("AV218Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV209SdtTxtTela", "vSDTTXTTELA", 0, "CollSdtTxtTela.SdtTxtTelaItem");
   this.setVCMap("AV8EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("AV116SNNovaLinhaProduto", "vSNNOVALINHAPRODUTO", 0, "char");
   this.setVCMap("AV23snErro", "vSNERRO", 0, "char");
   this.setVCMap("AV82snExcluiProduto", "vSNEXCLUIPRODUTO", 0, "char");
   this.setVCMap("AV182SNNovaLinhaFamilia", "vSNNOVALINHAFAMILIA", 0, "char");
   this.setVCMap("AV84snExcluiFamilia", "vSNEXCLUIFAMILIA", 0, "char");
   this.setVCMap("AV183SNNovaLinhaFabricante", "vSNNOVALINHAFABRICANTE", 0, "char");
   this.setVCMap("AV101snExcluiFabricante", "vSNEXCLUIFABRICANTE", 0, "char");
   this.setVCMap("AV184SNNovaLinhaClassificacao", "vSNNOVALINHACLASSIFICACAO", 0, "char");
   this.setVCMap("AV108snExcluiClassificacao", "vSNEXCLUICLASSIFICACAO", 0, "char");
   this.setVCMap("AV185SNNovaLinhaCodificacao", "vSNNOVALINHACODIFICACAO", 0, "char");
   this.setVCMap("AV115snExcluiCodificacao", "vSNEXCLUICODIFICACAO", 0, "char");
   this.setVCMap("AV33SNClassificacaoCompleta", "vSNCLASSIFICACAOCOMPLETA", 0, "char");
   this.setVCMap("AV34SNCodificacaoCompleta", "vSNCODIFICACAOCOMPLETA", 0, "char");
   this.setVCMap("AV144SNSimilares", "vSNSIMILARES", 0, "char");
   this.setVCMap("AV136OrdenacaoDescricaoAux", "vORDENACAODESCRICAOAUX", 0, "svchar");
   this.setVCMap("AV198OrdenacaoDescricao2", "vORDENACAODESCRICAO2", 0, "svchar");
   this.setVCMap("AV17QtdPagGeradas", "vQTDPAGGERADAS", 0, "int");
   this.setVCMap("AV38FilialId", "vFILIALID", 0, "int");
   this.setVCMap("AV71SdtProdutoRelProduto", "vSDTPRODUTORELPRODUTO", 0, "CollSdtProdutoRelProduto.SdtProdutoRelProdutoItem");
   this.setVCMap("AV57SdtFamiliaRelProduto", "vSDTFAMILIARELPRODUTO", 0, "CollSdtFamiliaRelProduto.SdtFamiliaRelProdutoItem");
   this.setVCMap("AV99SdtFabricanteRelProduto", "vSDTFABRICANTERELPRODUTO", 0, "CollSdtFabricanteRelProduto.SdtFabricanteRelProdutoItem");
   this.setVCMap("AV106SdtClassificacaoRelProduto", "vSDTCLASSIFICACAORELPRODUTO", 0, "CollSdtClassificacaoRelProduto.SdtClassificacaoRelProdutoItem");
   this.setVCMap("AV113SdtCodificacaoRelProduto", "vSDTCODIFICACAORELPRODUTO", 0, "CollSdtCodificacaoRelProduto.SdtCodificacaoRelProdutoItem");
   this.setVCMap("AV196SdtFiliais", "vSDTFILIAIS", 0, "CollSdtFiliais.SdtFiliaisItem");
   this.setVCMap("AV195SNAgruparQtFilial", "vSNAGRUPARQTFILIAL", 0, "char");
   this.setVCMap("AV219Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV137OdenacaoAux", "vODENACAOAUX", 0, "char");
   this.setVCMap("A3227ParametroConsultaEmpresaId", "PARAMETROCONSULTAEMPRESAID", 0, "char");
   this.setVCMap("A3228ParametroConsultaCodigo", "PARAMETROCONSULTACODIGO", 0, "int");
   this.setVCMap("A3215ParametroConsultaDescricao", "PARAMETROCONSULTADESCRICAO", 0, "svchar");
   this.setVCMap("AV121EsquemaUnico", "vESQUEMAUNICO", 0, "svchar");
   this.setVCMap("AV150SNLoteUnico", "vSNLOTEUNICO", 0, "svchar");
   this.setVCMap("A2915EsquemaCodigo", "ESQUEMACODIGO", 0, "int");
   this.setVCMap("A2912EsquemaDescricao", "ESQUEMADESCRICAO", 0, "svchar");
   this.setVCMap("AV186FilialIdParm", "vFILIALIDPARM", 0, "char");
   this.setVCMap("A1228FilialEmpresaId", "FILIALEMPRESAID", 0, "char");
   this.setVCMap("A1156FilialId", "FILIALID", 0, "int");
   this.setVCMap("A1136FilialNome", "FILIALNOME", 0, "svchar");
   this.setVCMap("AV202Mensagem", "vMENSAGEM", 0, "svchar");
   this.setVCMap("AV218Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV209SdtTxtTela", "vSDTTXTTELA", 0, "CollSdtTxtTela.SdtTxtTelaItem");
   this.setVCMap("AV8EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("AV116SNNovaLinhaProduto", "vSNNOVALINHAPRODUTO", 0, "char");
   this.setVCMap("AV23snErro", "vSNERRO", 0, "char");
   this.setVCMap("AV82snExcluiProduto", "vSNEXCLUIPRODUTO", 0, "char");
   this.setVCMap("AV182SNNovaLinhaFamilia", "vSNNOVALINHAFAMILIA", 0, "char");
   this.setVCMap("AV84snExcluiFamilia", "vSNEXCLUIFAMILIA", 0, "char");
   this.setVCMap("AV183SNNovaLinhaFabricante", "vSNNOVALINHAFABRICANTE", 0, "char");
   this.setVCMap("AV101snExcluiFabricante", "vSNEXCLUIFABRICANTE", 0, "char");
   this.setVCMap("AV184SNNovaLinhaClassificacao", "vSNNOVALINHACLASSIFICACAO", 0, "char");
   this.setVCMap("AV108snExcluiClassificacao", "vSNEXCLUICLASSIFICACAO", 0, "char");
   this.setVCMap("AV185SNNovaLinhaCodificacao", "vSNNOVALINHACODIFICACAO", 0, "char");
   this.setVCMap("AV115snExcluiCodificacao", "vSNEXCLUICODIFICACAO", 0, "char");
   this.setVCMap("AV33SNClassificacaoCompleta", "vSNCLASSIFICACAOCOMPLETA", 0, "char");
   this.setVCMap("AV34SNCodificacaoCompleta", "vSNCODIFICACAOCOMPLETA", 0, "char");
   this.setVCMap("AV144SNSimilares", "vSNSIMILARES", 0, "char");
   this.setVCMap("AV136OrdenacaoDescricaoAux", "vORDENACAODESCRICAOAUX", 0, "svchar");
   this.setVCMap("AV198OrdenacaoDescricao2", "vORDENACAODESCRICAO2", 0, "svchar");
   this.setVCMap("AV17QtdPagGeradas", "vQTDPAGGERADAS", 0, "int");
   this.setVCMap("AV38FilialId", "vFILIALID", 0, "int");
   this.setVCMap("AV71SdtProdutoRelProduto", "vSDTPRODUTORELPRODUTO", 0, "CollSdtProdutoRelProduto.SdtProdutoRelProdutoItem");
   this.setVCMap("AV57SdtFamiliaRelProduto", "vSDTFAMILIARELPRODUTO", 0, "CollSdtFamiliaRelProduto.SdtFamiliaRelProdutoItem");
   this.setVCMap("AV99SdtFabricanteRelProduto", "vSDTFABRICANTERELPRODUTO", 0, "CollSdtFabricanteRelProduto.SdtFabricanteRelProdutoItem");
   this.setVCMap("AV106SdtClassificacaoRelProduto", "vSDTCLASSIFICACAORELPRODUTO", 0, "CollSdtClassificacaoRelProduto.SdtClassificacaoRelProdutoItem");
   this.setVCMap("AV113SdtCodificacaoRelProduto", "vSDTCODIFICACAORELPRODUTO", 0, "CollSdtCodificacaoRelProduto.SdtCodificacaoRelProdutoItem");
   this.setVCMap("AV196SdtFiliais", "vSDTFILIAIS", 0, "CollSdtFiliais.SdtFiliaisItem");
   this.setVCMap("AV195SNAgruparQtFilial", "vSNAGRUPARQTFILIAL", 0, "char");
   this.setVCMap("AV219Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV137OdenacaoAux", "vODENACAOAUX", 0, "char");
   this.setVCMap("A3227ParametroConsultaEmpresaId", "PARAMETROCONSULTAEMPRESAID", 0, "char");
   this.setVCMap("A3228ParametroConsultaCodigo", "PARAMETROCONSULTACODIGO", 0, "int");
   this.setVCMap("A3215ParametroConsultaDescricao", "PARAMETROCONSULTADESCRICAO", 0, "svchar");
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV74promptProduto", rfrProp:"Value", gxAttId:"Promptproduto"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV78excLinhaProduto", rfrProp:"Value", gxAttId:"Exclinhaproduto"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV121EsquemaUnico"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV150SNLoteUnico"});
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[176]);
   GridprodutoContainer.addRefreshingVar({rfrVar:"A2915EsquemaCodigo"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"A2912EsquemaDescricao"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV186FilialIdParm"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"A1228FilialEmpresaId"});
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[318]);
   GridprodutoContainer.addRefreshingVar({rfrVar:"A1156FilialId"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"A1136FilialNome"});
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[286]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[289]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[291]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[293]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[295]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[288]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[290]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[292]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[294]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[296]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[319]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[316]);
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV202Mensagem"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV218Pgmname"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV209SdtTxtTela"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV8EmpresaLogadaId"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV116SNNovaLinhaProduto"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV23snErro"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV82snExcluiProduto"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV73ProdutoId", rfrProp:"Value", gxAttId:"Produtoid"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV75ProdutoDescricaoResumida", rfrProp:"Value", gxAttId:"Produtodescricaoresumida"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV182SNNovaLinhaFamilia"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV84snExcluiFamilia"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV59ProdutoFamiliaId", rfrProp:"Value", gxAttId:"Produtofamiliaid"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV60ProdutoFamiliaDescricao", rfrProp:"Value", gxAttId:"Produtofamiliadescricao"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV183SNNovaLinhaFabricante"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV101snExcluiFabricante"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV92ProdutoFabricanteId", rfrProp:"Value", gxAttId:"Produtofabricanteid"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV96ProdutoFabricanteFantasia", rfrProp:"Value", gxAttId:"Produtofabricantefantasia"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV184SNNovaLinhaClassificacao"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV108snExcluiClassificacao"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV102ClassificacaoEstIdGrid", rfrProp:"Value", gxAttId:"Classificacaoestidgrid"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV105ProdutoClassificacaoValor", rfrProp:"Value", gxAttId:"Produtoclassificacaovalor"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV185SNNovaLinhaCodificacao"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV115snExcluiCodificacao"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV109CodificacaoEstIdGrid", rfrProp:"Value", gxAttId:"Codificacaoestidgrid"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV110ProdutoCodificacaoValor", rfrProp:"Value", gxAttId:"Produtocodificacaovalor"});
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[315]);
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV33SNClassificacaoCompleta"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV34SNCodificacaoCompleta"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV144SNSimilares"});
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[56]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[44]);
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV136OrdenacaoDescricaoAux"});
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[49]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[184]);
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV198OrdenacaoDescricao2"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV17QtdPagGeradas"});
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[33]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[39]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[59]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[62]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[73]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[77]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[85]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[87]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[94]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[96]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[101]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[105]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[110]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[114]);
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV38FilialId"});
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[119]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[123]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[128]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[132]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[171]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[154]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[147]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[157]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[160]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[163]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[137]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[142]);
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV71SdtProdutoRelProduto"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV57SdtFamiliaRelProduto"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV99SdtFabricanteRelProduto"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV106SdtClassificacaoRelProduto"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV113SdtCodificacaoRelProduto"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV196SdtFiliais"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV195SNAgruparQtFilial"});
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[166]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[14]);
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV219Pgmdesc"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV81ControlaLinhaFamilia", rfrProp:"Value", gxAttId:"Controlalinhafamilia"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV137OdenacaoAux"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"A3227ParametroConsultaEmpresaId"});
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[314]);
   GridprodutoContainer.addRefreshingVar({rfrVar:"A3228ParametroConsultaCodigo"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"A3215ParametroConsultaDescricao"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV61promptFamilia", rfrProp:"Value", gxAttId:"Promptfamilia"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV80excLinhaFamilia", rfrProp:"Value", gxAttId:"Exclinhafamilia"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV121EsquemaUnico"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV150SNLoteUnico"});
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[176]);
   GridfamiliaContainer.addRefreshingVar({rfrVar:"A2915EsquemaCodigo"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"A2912EsquemaDescricao"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV186FilialIdParm"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"A1228FilialEmpresaId"});
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[318]);
   GridfamiliaContainer.addRefreshingVar({rfrVar:"A1156FilialId"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"A1136FilialNome"});
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[286]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[289]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[291]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[293]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[295]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[288]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[290]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[292]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[294]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[296]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[319]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[316]);
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV202Mensagem"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV218Pgmname"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV209SdtTxtTela"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV8EmpresaLogadaId"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV116SNNovaLinhaProduto"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV23snErro"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV82snExcluiProduto"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV73ProdutoId", rfrProp:"Value", gxAttId:"Produtoid"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV75ProdutoDescricaoResumida", rfrProp:"Value", gxAttId:"Produtodescricaoresumida"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV182SNNovaLinhaFamilia"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV84snExcluiFamilia"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV59ProdutoFamiliaId", rfrProp:"Value", gxAttId:"Produtofamiliaid"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV60ProdutoFamiliaDescricao", rfrProp:"Value", gxAttId:"Produtofamiliadescricao"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV183SNNovaLinhaFabricante"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV101snExcluiFabricante"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV92ProdutoFabricanteId", rfrProp:"Value", gxAttId:"Produtofabricanteid"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV96ProdutoFabricanteFantasia", rfrProp:"Value", gxAttId:"Produtofabricantefantasia"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV184SNNovaLinhaClassificacao"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV108snExcluiClassificacao"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV102ClassificacaoEstIdGrid", rfrProp:"Value", gxAttId:"Classificacaoestidgrid"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV105ProdutoClassificacaoValor", rfrProp:"Value", gxAttId:"Produtoclassificacaovalor"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV185SNNovaLinhaCodificacao"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV115snExcluiCodificacao"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV109CodificacaoEstIdGrid", rfrProp:"Value", gxAttId:"Codificacaoestidgrid"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV110ProdutoCodificacaoValor", rfrProp:"Value", gxAttId:"Produtocodificacaovalor"});
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[315]);
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV33SNClassificacaoCompleta"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV34SNCodificacaoCompleta"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV144SNSimilares"});
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[56]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[44]);
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV136OrdenacaoDescricaoAux"});
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[49]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[184]);
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV198OrdenacaoDescricao2"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV17QtdPagGeradas"});
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[33]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[39]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[59]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[62]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[73]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[77]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[85]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[87]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[94]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[96]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[101]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[105]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[110]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[114]);
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV38FilialId"});
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[119]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[123]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[128]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[132]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[171]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[154]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[147]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[157]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[160]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[163]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[137]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[142]);
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV71SdtProdutoRelProduto"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV57SdtFamiliaRelProduto"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV99SdtFabricanteRelProduto"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV106SdtClassificacaoRelProduto"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV113SdtCodificacaoRelProduto"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV196SdtFiliais"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV195SNAgruparQtFilial"});
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[166]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[14]);
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV219Pgmdesc"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV81ControlaLinhaFamilia", rfrProp:"Value", gxAttId:"Controlalinhafamilia"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV137OdenacaoAux"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"A3227ParametroConsultaEmpresaId"});
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[314]);
   GridfamiliaContainer.addRefreshingVar({rfrVar:"A3228ParametroConsultaCodigo"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"A3215ParametroConsultaDescricao"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV77promptFabricante", rfrProp:"Value", gxAttId:"Promptfabricante"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV95excLinhaFabricante", rfrProp:"Value", gxAttId:"Exclinhafabricante"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV121EsquemaUnico"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV150SNLoteUnico"});
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[176]);
   GridfabricanteContainer.addRefreshingVar({rfrVar:"A2915EsquemaCodigo"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"A2912EsquemaDescricao"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV186FilialIdParm"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"A1228FilialEmpresaId"});
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[318]);
   GridfabricanteContainer.addRefreshingVar({rfrVar:"A1156FilialId"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"A1136FilialNome"});
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[286]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[289]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[291]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[293]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[295]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[288]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[290]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[292]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[294]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[296]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[319]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[316]);
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV202Mensagem"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV218Pgmname"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV209SdtTxtTela"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV8EmpresaLogadaId"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV116SNNovaLinhaProduto"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV23snErro"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV82snExcluiProduto"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV73ProdutoId", rfrProp:"Value", gxAttId:"Produtoid"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV75ProdutoDescricaoResumida", rfrProp:"Value", gxAttId:"Produtodescricaoresumida"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV182SNNovaLinhaFamilia"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV84snExcluiFamilia"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV59ProdutoFamiliaId", rfrProp:"Value", gxAttId:"Produtofamiliaid"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV60ProdutoFamiliaDescricao", rfrProp:"Value", gxAttId:"Produtofamiliadescricao"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV183SNNovaLinhaFabricante"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV101snExcluiFabricante"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV92ProdutoFabricanteId", rfrProp:"Value", gxAttId:"Produtofabricanteid"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV96ProdutoFabricanteFantasia", rfrProp:"Value", gxAttId:"Produtofabricantefantasia"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV184SNNovaLinhaClassificacao"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV108snExcluiClassificacao"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV102ClassificacaoEstIdGrid", rfrProp:"Value", gxAttId:"Classificacaoestidgrid"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV105ProdutoClassificacaoValor", rfrProp:"Value", gxAttId:"Produtoclassificacaovalor"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV185SNNovaLinhaCodificacao"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV115snExcluiCodificacao"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV109CodificacaoEstIdGrid", rfrProp:"Value", gxAttId:"Codificacaoestidgrid"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV110ProdutoCodificacaoValor", rfrProp:"Value", gxAttId:"Produtocodificacaovalor"});
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[315]);
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV33SNClassificacaoCompleta"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV34SNCodificacaoCompleta"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV144SNSimilares"});
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[56]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[44]);
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV136OrdenacaoDescricaoAux"});
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[49]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[184]);
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV198OrdenacaoDescricao2"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV17QtdPagGeradas"});
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[33]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[39]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[59]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[62]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[73]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[77]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[85]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[87]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[94]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[96]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[101]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[105]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[110]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[114]);
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV38FilialId"});
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[119]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[123]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[128]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[132]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[171]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[154]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[147]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[157]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[160]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[163]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[137]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[142]);
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV71SdtProdutoRelProduto"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV57SdtFamiliaRelProduto"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV99SdtFabricanteRelProduto"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV106SdtClassificacaoRelProduto"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV113SdtCodificacaoRelProduto"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV196SdtFiliais"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV195SNAgruparQtFilial"});
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[166]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[14]);
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV219Pgmdesc"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV81ControlaLinhaFamilia", rfrProp:"Value", gxAttId:"Controlalinhafamilia"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV137OdenacaoAux"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"A3227ParametroConsultaEmpresaId"});
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[314]);
   GridfabricanteContainer.addRefreshingVar({rfrVar:"A3228ParametroConsultaCodigo"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"A3215ParametroConsultaDescricao"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV103excLinhaClassificacao", rfrProp:"Value", gxAttId:"Exclinhaclassificacao"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV121EsquemaUnico"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV150SNLoteUnico"});
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[176]);
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"A2915EsquemaCodigo"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"A2912EsquemaDescricao"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV186FilialIdParm"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"A1228FilialEmpresaId"});
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[318]);
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"A1156FilialId"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"A1136FilialNome"});
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[286]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[289]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[291]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[293]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[295]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[288]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[290]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[292]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[294]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[296]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[319]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[316]);
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV202Mensagem"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV218Pgmname"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV209SdtTxtTela"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV8EmpresaLogadaId"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV116SNNovaLinhaProduto"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV23snErro"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV82snExcluiProduto"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV73ProdutoId", rfrProp:"Value", gxAttId:"Produtoid"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV75ProdutoDescricaoResumida", rfrProp:"Value", gxAttId:"Produtodescricaoresumida"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV182SNNovaLinhaFamilia"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV84snExcluiFamilia"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV59ProdutoFamiliaId", rfrProp:"Value", gxAttId:"Produtofamiliaid"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV60ProdutoFamiliaDescricao", rfrProp:"Value", gxAttId:"Produtofamiliadescricao"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV183SNNovaLinhaFabricante"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV101snExcluiFabricante"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV92ProdutoFabricanteId", rfrProp:"Value", gxAttId:"Produtofabricanteid"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV96ProdutoFabricanteFantasia", rfrProp:"Value", gxAttId:"Produtofabricantefantasia"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV184SNNovaLinhaClassificacao"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV108snExcluiClassificacao"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV102ClassificacaoEstIdGrid", rfrProp:"Value", gxAttId:"Classificacaoestidgrid"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV105ProdutoClassificacaoValor", rfrProp:"Value", gxAttId:"Produtoclassificacaovalor"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV185SNNovaLinhaCodificacao"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV115snExcluiCodificacao"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV109CodificacaoEstIdGrid", rfrProp:"Value", gxAttId:"Codificacaoestidgrid"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV110ProdutoCodificacaoValor", rfrProp:"Value", gxAttId:"Produtocodificacaovalor"});
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[315]);
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV33SNClassificacaoCompleta"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV34SNCodificacaoCompleta"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV144SNSimilares"});
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[56]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[44]);
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV136OrdenacaoDescricaoAux"});
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[49]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[184]);
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV198OrdenacaoDescricao2"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV17QtdPagGeradas"});
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[33]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[39]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[59]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[62]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[73]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[77]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[85]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[87]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[94]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[96]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[101]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[105]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[110]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[114]);
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV38FilialId"});
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[119]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[123]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[128]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[132]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[171]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[154]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[147]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[157]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[160]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[163]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[137]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[142]);
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV71SdtProdutoRelProduto"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV57SdtFamiliaRelProduto"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV99SdtFabricanteRelProduto"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV106SdtClassificacaoRelProduto"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV113SdtCodificacaoRelProduto"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV196SdtFiliais"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV195SNAgruparQtFilial"});
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[166]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[14]);
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV219Pgmdesc"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV81ControlaLinhaFamilia", rfrProp:"Value", gxAttId:"Controlalinhafamilia"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV137OdenacaoAux"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"A3227ParametroConsultaEmpresaId"});
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[314]);
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"A3228ParametroConsultaCodigo"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"A3215ParametroConsultaDescricao"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV111excLinhaCodificacao", rfrProp:"Value", gxAttId:"Exclinhacodificacao"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV121EsquemaUnico"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV150SNLoteUnico"});
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[176]);
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"A2915EsquemaCodigo"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"A2912EsquemaDescricao"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV186FilialIdParm"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"A1228FilialEmpresaId"});
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[318]);
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"A1156FilialId"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"A1136FilialNome"});
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[286]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[289]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[291]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[293]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[295]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[288]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[290]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[292]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[294]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[296]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[319]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[316]);
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV202Mensagem"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV218Pgmname"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV209SdtTxtTela"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV8EmpresaLogadaId"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV116SNNovaLinhaProduto"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV23snErro"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV82snExcluiProduto"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV73ProdutoId", rfrProp:"Value", gxAttId:"Produtoid"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV75ProdutoDescricaoResumida", rfrProp:"Value", gxAttId:"Produtodescricaoresumida"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV182SNNovaLinhaFamilia"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV84snExcluiFamilia"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV59ProdutoFamiliaId", rfrProp:"Value", gxAttId:"Produtofamiliaid"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV60ProdutoFamiliaDescricao", rfrProp:"Value", gxAttId:"Produtofamiliadescricao"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV183SNNovaLinhaFabricante"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV101snExcluiFabricante"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV92ProdutoFabricanteId", rfrProp:"Value", gxAttId:"Produtofabricanteid"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV96ProdutoFabricanteFantasia", rfrProp:"Value", gxAttId:"Produtofabricantefantasia"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV184SNNovaLinhaClassificacao"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV108snExcluiClassificacao"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV102ClassificacaoEstIdGrid", rfrProp:"Value", gxAttId:"Classificacaoestidgrid"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV105ProdutoClassificacaoValor", rfrProp:"Value", gxAttId:"Produtoclassificacaovalor"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV185SNNovaLinhaCodificacao"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV115snExcluiCodificacao"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV109CodificacaoEstIdGrid", rfrProp:"Value", gxAttId:"Codificacaoestidgrid"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV110ProdutoCodificacaoValor", rfrProp:"Value", gxAttId:"Produtocodificacaovalor"});
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[315]);
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV33SNClassificacaoCompleta"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV34SNCodificacaoCompleta"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV144SNSimilares"});
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[56]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[44]);
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV136OrdenacaoDescricaoAux"});
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[49]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[184]);
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV198OrdenacaoDescricao2"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV17QtdPagGeradas"});
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[33]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[39]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[59]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[62]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[73]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[77]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[85]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[87]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[94]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[96]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[101]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[105]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[110]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[114]);
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV38FilialId"});
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[119]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[123]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[128]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[132]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[171]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[154]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[147]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[157]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[160]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[163]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[137]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[142]);
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV71SdtProdutoRelProduto"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV57SdtFamiliaRelProduto"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV99SdtFabricanteRelProduto"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV106SdtClassificacaoRelProduto"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV113SdtCodificacaoRelProduto"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV196SdtFiliais"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV195SNAgruparQtFilial"});
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[166]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[14]);
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV219Pgmdesc"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV81ControlaLinhaFamilia", rfrProp:"Value", gxAttId:"Controlalinhafamilia"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV137OdenacaoAux"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"A3227ParametroConsultaEmpresaId"});
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[314]);
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"A3228ParametroConsultaCodigo"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"A3215ParametroConsultaDescricao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaoprodutos());
