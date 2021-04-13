/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:43:56.96
*/
gx.evt.autoSkip = false;
gx.define('hremessaretornoitemconteudo', false, function () {
   this.ServerClass =  "hremessaretornoitemconteudo" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV50ChamouTipoCampo=gx.fn.getControlValue("vCHAMOUTIPOCAMPO") ;
      this.AV29Linha=gx.fn.getControlValue("vLINHA") ;
      this.AV11EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV25RemessaRetornoId=gx.fn.getIntegerValue("vREMESSARETORNOID",'.') ;
      this.AV26RemessaRetornoItemSequencia=gx.fn.getIntegerValue("vREMESSARETORNOITEMSEQUENCIA",'.') ;
      this.AV75RemessaRetornoItemTipo=gx.fn.getControlValue("vREMESSARETORNOITEMTIPO") ;
      this.AV76RemessaRetornoTipo=gx.fn.getControlValue("vREMESSARETORNOTIPO") ;
   };
   this.Validv_Sequenciaitem01=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSEQUENCIAITEM01");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Sequenciaitem02=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSEQUENCIAITEM02");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Sequenciaitem03=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSEQUENCIAITEM03");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Sequenciaitem04=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSEQUENCIAITEM04");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Sequenciaitem05=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSEQUENCIAITEM05");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Sequenciaitem06=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSEQUENCIAITEM06");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Sequenciaitem07=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSEQUENCIAITEM07");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Sequenciaitem08=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSEQUENCIAITEM08");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Sequenciaitem09=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSEQUENCIAITEM09");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Sequenciaitem10=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSEQUENCIAITEM10");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s112_client=function()
   {
      if ( gx.text.substring( this.AV35Conteudo.Valor, 1, 3) == "Bol" )
      {
         this.AV35Conteudo.Tabela =  "B"  ;
      }
      else
      {
         if ( ( gx.text.substring( this.AV35Conteudo.Valor, 1, 3) == "Ban" ) || ( gx.text.substring( this.AV35Conteudo.Valor, 1, 3) == "Ced" ) || ( gx.text.substring( this.AV35Conteudo.Valor, 1, 3) == "Ger" ) || ( gx.text.substring( this.AV35Conteudo.Valor, 1, 3) == "Tip" ) )
         {
            this.AV35Conteudo.Tabela =  "C"  ;
         }
         else
         {
            if ( gx.text.substring( this.AV35Conteudo.Valor, 1, 3) != "Ret" )
            {
               this.AV35Conteudo.Tabela =  "E"  ;
            }
         }
      }
   };
   this.s132_client=function()
   {
      if ( this.AV50ChamouTipoCampo == "S" )
      {
         this.AV50ChamouTipoCampo =  "N"  ;
         this.AV21TipoNumCar =  ""  ;
      }
      if ( this.AV12TipoCampo == "F" )
      {
         gx.fn.setCtrlProperty("TABLEFIXO","Visible", 1 );
         gx.fn.setCtrlProperty("TABLETABELA","Visible", 0 );
         gx.fn.setCtrlProperty("TABLECAMPO","Visible", 0 );
         gx.fn.setCtrlProperty("TABLECONTADOR","Visible", 0 );
         gx.fn.setCtrlProperty("TABLESISTEMA","Visible", 0 );
         gx.fn.setCtrlProperty("TABLETAMANHO","Visible", 1 );
         gx.fn.setCtrlProperty("TABLESOMAT","Visible", 0 );
         gx.fn.setCtrlProperty("TABLEMULTA","Visible", 1 );
         gx.fn.setCtrlProperty("TABLEDESCONTO","Visible", 1 );
         gx.fn.usrSetFocus("vTEXTOFIXO") ;
      }
      else if ( this.AV12TipoCampo == "T" )
      {
         gx.fn.setCtrlProperty("TABLETABELA","Visible", 1 );
         gx.fn.setCtrlProperty("TABLECAMPO","Visible", 1 );
         gx.fn.setCtrlProperty("TABLEFIXO","Visible", 0 );
         gx.fn.setCtrlProperty("TABLECONTADOR","Visible", 0 );
         gx.fn.setCtrlProperty("TABLESISTEMA","Visible", 0 );
         gx.fn.setCtrlProperty("TABLETAMANHO","Visible", 1 );
         gx.fn.usrSetFocus("vTABELA") ;
         this.s152_client();
      }
      else if ( this.AV12TipoCampo == "C" )
      {
         gx.fn.setCtrlProperty("TABLECONTADOR","Visible", 1 );
         gx.fn.setCtrlProperty("TABLETABELA","Visible", 0 );
         gx.fn.setCtrlProperty("TABLECAMPO","Visible", 0 );
         gx.fn.setCtrlProperty("TABLEFIXO","Visible", 0 );
         gx.fn.setCtrlProperty("TABLESISTEMA","Visible", 0 );
         gx.fn.setCtrlProperty("TABLETAMANHO","Visible", 1 );
         this.AV21TipoNumCar =  "N"  ;
         gx.fn.setCtrlProperty("vTIPONUMCAR","Enabled", 0 );
         gx.fn.setCtrlProperty("TABLESOMAT","Visible", 0 );
         gx.fn.setCtrlProperty("TABLEMULTA","Visible", 0 );
         gx.fn.setCtrlProperty("TABLEDESCONTO","Visible", 0 );
         gx.fn.usrSetFocus("vSEQUENCIAITEM01") ;
      }
      else if ( this.AV12TipoCampo == "S" )
      {
         gx.fn.setCtrlProperty("TABLESISTEMA","Visible", 1 );
         gx.fn.setCtrlProperty("TABLECONTADOR","Visible", 0 );
         gx.fn.setCtrlProperty("TABLETABELA","Visible", 0 );
         gx.fn.setCtrlProperty("TABLECAMPO","Visible", 0 );
         gx.fn.setCtrlProperty("TABLEFIXO","Visible", 0 );
         gx.fn.setCtrlProperty("TABLETAMANHO","Visible", 1 );
         gx.fn.setCtrlProperty("TABLESOMAT","Visible", 0 );
         gx.fn.setCtrlProperty("TABLEMULTA","Visible", 0 );
         gx.fn.setCtrlProperty("TABLEDESCONTO","Visible", 0 );
         gx.fn.usrSetFocus("vOPCOESSISTEMA") ;
      }
      else if ( this.AV12TipoCampo == "R" )
      {
         gx.fn.setCtrlProperty("TABLETABELA","Visible", 0 );
         gx.fn.setCtrlProperty("TABLECAMPO","Visible", 1 );
         gx.fn.setCtrlProperty("TABLEFIXO","Visible", 0 );
         gx.fn.setCtrlProperty("TABLECONTADOR","Visible", 0 );
         gx.fn.setCtrlProperty("TABLESISTEMA","Visible", 0 );
         gx.fn.setCtrlProperty("TABLETAMANHO","Visible", 1 );
         gx.fn.setCtrlProperty("TABLESOMAT","Visible", 0 );
         gx.fn.setCtrlProperty("TABLEMULTA","Visible", 0 );
         gx.fn.setCtrlProperty("TABLEDESCONTO","Visible", 0 );
         gx.fn.usrSetFocus("vNOMECAMPO") ;
      }
      else
      {
         gx.fn.setCtrlProperty("TABLEFIXO","Visible", 0 );
         gx.fn.setCtrlProperty("TABLETABELA","Visible", 0 );
         gx.fn.setCtrlProperty("TABLECAMPO","Visible", 0 );
         gx.fn.setCtrlProperty("TABLECONTADOR","Visible", 0 );
         gx.fn.setCtrlProperty("TABLESISTEMA","Visible", 0 );
         gx.fn.setCtrlProperty("TABLETAMANHO","Visible", 0 );
         gx.fn.setCtrlProperty("TABLESOMAT","Visible", 0 );
         gx.fn.setCtrlProperty("TABLEMULTA","Visible", 0 );
         gx.fn.setCtrlProperty("TABLEDESCONTO","Visible", 0 );
      }
      if ( this.AV16NomeCampo == "BoletoTextoFichaComp" || this.AV16NomeCampo == "BoletoTextoSacado" || this.AV16NomeCampo == "BoletoMensagemCabec" )
      {
         gx.fn.setCtrlProperty("TABLINHA","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("TABLINHA","Visible", 0 );
      }
   };
   this.s152_client=function()
   {
      if ( ( this.AV16NomeCampo == "BoletoId" ) || ( this.AV16NomeCampo == "BoletoCedenteBanco" ) || ( this.AV16NomeCampo == "BoletoCedenteAgencia" ) || ( this.AV16NomeCampo == "BoletoNumero" ) || ( this.AV16NomeCampo == "BoletoDigito" ) || ( this.AV16NomeCampo == "BoletoValor" ) || ( this.AV16NomeCampo == "BoletoValorOriginal" ) || ( this.AV16NomeCampo == "BoletoValorJuros" ) || ( this.AV16NomeCampo == "BoletoValorMulta" ) || ( this.AV16NomeCampo == "BoletoValorTarifa" ) || ( this.AV16NomeCampo == "BoletoSacadoId" ) || ( this.AV16NomeCampo == "BoletoCedenteSequencia" ) || ( this.AV16NomeCampo == "BancoId" ) || ( this.AV16NomeCampo == "BancoAgenciaId" ) || ( this.AV16NomeCampo == "CedenteSequencia" ) || ( this.AV16NomeCampo == "CedenteVlrMinimoSemTarifa" ) || ( this.AV16NomeCampo == "CedenteValorTarifa" ) || ( this.AV16NomeCampo == "CedenteNoPrimeiroBoleto" ) || ( this.AV16NomeCampo == "CedentePercDesconto" ) || ( this.AV16NomeCampo == "CedentePercJurosMes" ) || ( this.AV16NomeCampo == "CedentePercMulta" ) || ( this.AV16NomeCampo == "CedenteQtdeDiasJuros" ) || ( this.AV16NomeCampo == "CedenteQtdeDiasDesconto" ) || ( this.AV16NomeCampo == "CedenteNoConta" ) || ( this.AV16NomeCampo == "CedenteSeqRemessa" ) || ( this.AV16NomeCampo == "CedenteQtdeDiasProtesto" ) || ( this.AV16NomeCampo == "CedenteNumeroContrato" ) || ( this.AV16NomeCampo == "CedenteQtdeDiasBaixa" ) || ( this.AV16NomeCampo == "TipoLancamentoId" ) || ( this.AV16NomeCampo == "BancoQtdeDigitoBoleto" ) || ( this.AV16NomeCampo == "CedenteRemessaId" ) || ( this.AV16NomeCampo == "CedenteRetornoId" ) || ( this.AV16NomeCampo == "EmpresaVersaoSistema" ) || ( this.AV16NomeCampo == "EmpresaLinhaGrid" ) || ( this.AV16NomeCampo == "EmpresaLinhaPrompt" ) || ( this.AV16NomeCampo == "EmpresaNumeroEndereco" ) || ( this.AV16NomeCampo == "BoletoValorDesconto" ) )
      {
         gx.fn.setCtrlProperty("TABLESOMAT","Visible", 1 );
      }
      else
      {
         this.AV18Somatorio =  "N"  ;
         gx.fn.setCtrlProperty("TABLESOMAT","Visible", 0 );
      }
   };
   this.s162_client=function()
   {
      this.AV36Cont = gx.num.trunc( 0 ,0) ;
      this.AV12TipoCampo =  ""  ;
      this.AV14TextoFixo =  ""  ;
      this.AV15Tabela =  ""  ;
      this.AV16NomeCampo =  ""  ;
      this.AV18Somatorio =  "N"  ;
      this.AV39SequenciaItem01 = gx.num.trunc( 0 ,0) ;
      this.AV40SequenciaItem02 = gx.num.trunc( 0 ,0) ;
      this.AV41SequenciaItem03 = gx.num.trunc( 0 ,0) ;
      this.AV42SequenciaItem04 = gx.num.trunc( 0 ,0) ;
      this.AV43SequenciaItem05 = gx.num.trunc( 0 ,0) ;
      this.AV44SequenciaItem06 = gx.num.trunc( 0 ,0) ;
      this.AV45SequenciaItem07 = gx.num.trunc( 0 ,0) ;
      this.AV46SequenciaItem08 = gx.num.trunc( 0 ,0) ;
      this.AV47SequenciaItem09 = gx.num.trunc( 0 ,0) ;
      this.AV48SequenciaItem10 = gx.num.trunc( 0 ,0) ;
      this.AV19OpcoesSistema =  ""  ;
      this.AV20TamanhoCampo = gx.num.trunc( 0 ,0) ;
      this.AV21TipoNumCar =  ""  ;
   };
   this.s182_client=function()
   {
      if ( this.AV12TipoCampo == "F" )
      {
         this.AV35Conteudo.Valor =  this.AV14TextoFixo  ;
         this.AV35Conteudo.Tipo =  "F"  ;
         this.AV35Conteudo.Tamanho = gx.num.trunc( this.AV20TamanhoCampo ,0) ;
         this.AV35Conteudo.NumCarac =  this.AV21TipoNumCar  ;
         this.AV35Conteudo.SnMulta =  (this.AV80SnMulta!="S" ? "N" : this.AV80SnMulta)  ;
         this.AV35Conteudo.SnDesconto =  (this.AV83SnDesconto!="S" ? "N" : this.AV83SnDesconto)  ;
         this.AV35Conteudo.NumLinha = gx.num.trunc( 0 ,0) ;
      }
      else if ( this.AV12TipoCampo == "T" )
      {
         this.AV35Conteudo.Valor =  this.AV16NomeCampo  ;
         this.AV35Conteudo.Tipo =  "T"  ;
         this.AV35Conteudo.Tabela =  this.AV15Tabela  ;
         this.AV35Conteudo.Tamanho = gx.num.trunc( this.AV20TamanhoCampo ,0) ;
         this.AV35Conteudo.SnSomatorio =  this.AV18Somatorio  ;
         this.AV35Conteudo.NumCarac =  this.AV21TipoNumCar  ;
         this.AV35Conteudo.SnMulta =  (this.AV80SnMulta!="S" ? "N" : this.AV80SnMulta)  ;
         this.AV35Conteudo.SnDesconto =  (this.AV83SnDesconto!="S" ? "N" : this.AV83SnDesconto)  ;
         this.AV35Conteudo.NumLinha = gx.num.trunc( this.AV77LinhaMsg ,0) ;
      }
      else if ( this.AV12TipoCampo == "C" )
      {
         this.AV49ValorAuxiliar =  ""  ;
         if ( ! (0==this.AV39SequenciaItem01) )
         {
            this.AV49ValorAuxiliar =  gx.text.trim( gx.num.str( this.AV39SequenciaItem01, 4, 0)) + " "  ;
         }
         if ( ! (0==this.AV40SequenciaItem02) )
         {
            this.AV49ValorAuxiliar =  this.AV49ValorAuxiliar + gx.text.trim( gx.num.str( this.AV40SequenciaItem02, 4, 0)) + " "  ;
         }
         if ( ! (0==this.AV41SequenciaItem03) )
         {
            this.AV49ValorAuxiliar =  this.AV49ValorAuxiliar + gx.text.trim( gx.num.str( this.AV41SequenciaItem03, 4, 0)) + " "  ;
         }
         if ( ! (0==this.AV42SequenciaItem04) )
         {
            this.AV49ValorAuxiliar =  this.AV49ValorAuxiliar + gx.text.trim( gx.num.str( this.AV42SequenciaItem04, 4, 0)) + " "  ;
         }
         if ( ! (0==this.AV43SequenciaItem05) )
         {
            this.AV49ValorAuxiliar =  this.AV49ValorAuxiliar + gx.text.trim( gx.num.str( this.AV43SequenciaItem05, 4, 0)) + " "  ;
         }
         if ( ! (0==this.AV44SequenciaItem06) )
         {
            this.AV49ValorAuxiliar =  this.AV49ValorAuxiliar + gx.text.trim( gx.num.str( this.AV44SequenciaItem06, 4, 0)) + " "  ;
         }
         if ( ! (0==this.AV45SequenciaItem07) )
         {
            this.AV49ValorAuxiliar =  this.AV49ValorAuxiliar + gx.text.trim( gx.num.str( this.AV45SequenciaItem07, 4, 0)) + " "  ;
         }
         if ( ! (0==this.AV46SequenciaItem08) )
         {
            this.AV49ValorAuxiliar =  this.AV49ValorAuxiliar + gx.text.trim( gx.num.str( this.AV46SequenciaItem08, 4, 0)) + " "  ;
         }
         if ( ! (0==this.AV47SequenciaItem09) )
         {
            this.AV49ValorAuxiliar =  this.AV49ValorAuxiliar + gx.text.trim( gx.num.str( this.AV47SequenciaItem09, 4, 0)) + " "  ;
         }
         if ( ! (0==this.AV48SequenciaItem10) )
         {
            this.AV49ValorAuxiliar =  this.AV49ValorAuxiliar + gx.text.trim( gx.num.str( this.AV48SequenciaItem10, 4, 0))  ;
         }
         this.AV49ValorAuxiliar =  gx.text.rtrim( this.AV49ValorAuxiliar)  ;
         this.AV35Conteudo.Valor =  this.AV49ValorAuxiliar  ;
         this.AV35Conteudo.Tipo =  "C"  ;
         this.AV35Conteudo.Tamanho = gx.num.trunc( this.AV20TamanhoCampo ,0) ;
         this.AV35Conteudo.NumCarac =  this.AV21TipoNumCar  ;
      }
      else if ( this.AV12TipoCampo == "S" )
      {
         if ( this.AV19OpcoesSistema == "1" )
         {
            this.AV35Conteudo.Valor =  "Data"  ;
         }
         if ( this.AV19OpcoesSistema == "2" )
         {
            this.AV35Conteudo.Valor =  "Hora"  ;
         }
         if ( this.AV19OpcoesSistema == "3" )
         {
            this.AV35Conteudo.Valor =  "Sequência Lote"  ;
         }
         if ( this.AV19OpcoesSistema == "4" )
         {
            this.AV35Conteudo.Valor =  "Sequência Detalhe"  ;
         }
         if ( this.AV19OpcoesSistema == "5" )
         {
            this.AV35Conteudo.Valor =  "Sequência Registro"  ;
         }
         this.AV35Conteudo.Tipo =  "S"  ;
         this.AV35Conteudo.Tamanho = gx.num.trunc( this.AV20TamanhoCampo ,0) ;
         this.AV35Conteudo.NumCarac =  this.AV21TipoNumCar  ;
      }
      else
      {
         this.AV35Conteudo.Valor =  this.AV16NomeCampo  ;
         this.AV35Conteudo.Tipo =  "R"  ;
         this.AV35Conteudo.Tamanho = gx.num.trunc( this.AV20TamanhoCampo ,0) ;
         this.AV35Conteudo.NumCarac =  this.AV21TipoNumCar  ;
         this.AV35Conteudo.NumLinha = gx.num.trunc( this.AV77LinhaMsg ,0) ;
      }
   };
   this.e11j22_client=function()
   {
      this.executeServerEvent("VTIPOCAMPO.CLICK", true, null, false, true);
   };
   this.e12j22_client=function()
   {
      this.executeServerEvent("VTABELA.CLICK", true, null, false, true);
   };
   this.e13j22_client=function()
   {
      this.executeServerEvent("'SALVAR'", false, null, false, false);
   };
   this.e21j22_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e22j22_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e14j22_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15j22_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e23j22_client=function()
   {
      this.executeServerEvent("'SUBIR'", true, arguments[0], false, false);
   };
   this.e24j22_client=function()
   {
      this.executeServerEvent("'DESCER'", true, arguments[0], false, false);
   };
   this.e16j22_client=function()
   {
      this.executeServerEvent("VNOMECAMPO.CLICK", true, null, false, true);
   };
   this.e17j22_client=function()
   {
      this.executeServerEvent("'NOVOITEM'", false, null, false, false);
   };
   this.e25j22_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,12,13,14,15,18,20,21,24,26,27,30,32,33,36,37,40,42,43,44,45,46,47,48,49,50,51,52,55,57,58,61,63,64,67,69,72,74,75,78,79,82,85,95,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,118];
   this.GXLastCtrlId =118;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",96,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hremessaretornoitemconteudo",[],false,1,true,true,0,true,false,false,"SdtRemessaRetorno.Linha",0,"px","Novo registro",true,false,false,null,null,false,"AV29Linha",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("GXV12P",97,"CTLVALOR","Valor","","GXV12P","char",0,"px",200,80,"left",null,[],"GXV12P","GXV12P",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("Tipocampogrid",98,"vTIPOCAMPOGRID","Tipo","","TipoCampoGrid","char",0,"px",16,16,"left",null,[],"Tipocampogrid","TipoCampoGrid",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV12R",99,"CTLINICIO","De","","GXV12R","int",0,"px",4,4,"right",null,[],"GXV12R","GXV12R",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV12S",100,"CTLFIM","Até","","GXV12S","int",0,"px",4,4,"right",null,[],"GXV12S","GXV12S",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV12T",101,"CTLTAMANHO","Tamanho","","GXV12T","int",0,"px",4,4,"right",null,[],"GXV12T","GXV12T",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV12U",102,"CTLCONTADOR","Contador","","GXV12U","int",0,"px",4,4,"right",null,[],"GXV12U","GXV12U",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV12V",103,"CTLTIPO","Tipo","","GXV12V","char",0,"px",1,1,"left",null,[],"GXV12V","GXV12V",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV12W",104,"CTLTABELA","Tabela","","GXV12W","char",0,"px",1,1,"left",null,[],"GXV12W","GXV12W",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV12X",105,"CTLSNSOMATORIO","Sn Somatorio","","GXV12X","char",0,"px",1,1,"left",null,[],"GXV12X","GXV12X",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV12Y",106,"CTLNUMCARAC","Num Carac","","GXV12Y","char",0,"px",1,1,"left",null,[],"GXV12Y","GXV12Y",false,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmpalt","vBMPALT",107,0,"px",17,"px","e21j22_client","","Alterar","Image","GridColumnImage");
   Grid1Container.addBitmap("&Bmpexc","vBMPEXC",108,0,"px",17,"px","e22j22_client","","Excluir","Image","GridColumnImage");
   Grid1Container.addBitmap("&Bmpsobe","vBMPSOBE",109,0,"px",17,"px","e23j22_client","","Sobe","Image","GridColumnImage");
   Grid1Container.addBitmap("&Bmpdesc","vBMPDESC",110,0,"px",17,"px","e24j22_client","","Desce","Image","GridColumnImage");
   this.setGrid(Grid1Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLETIPOCAMPO",grid:0};
   GXValidFnc[9]={fld:"TXTTIPOCAMPO", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCAMPO",gxz:"ZV12TipoCampo",gxold:"OV12TipoCampo",gxvar:"AV12TipoCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV12TipoCampo=Value},v2z:function(Value){gx.O.ZV12TipoCampo=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOCAMPO",gx.O.AV12TipoCampo)},c2v:function(){gx.O.AV12TipoCampo=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCAMPO")},nac:gx.falseFn};
   GXValidFnc[12]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTADOR",gxz:"ZV32Contador",gxold:"OV32Contador",gxvar:"AV32Contador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32Contador=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32Contador=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTADOR",gx.O.AV32Contador,0)},c2v:function(){gx.O.AV32Contador=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTADOR",'.')},nac:gx.falseFn};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONT",gxz:"ZV36Cont",gxold:"OV36Cont",gxvar:"AV36Cont",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36Cont=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36Cont=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONT",gx.O.AV36Cont,0)},c2v:function(){gx.O.AV36Cont=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONT",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vARMAZENATAMANHO",gxz:"ZV57ArmazenaTamanho",gxold:"OV57ArmazenaTamanho",gxvar:"AV57ArmazenaTamanho",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57ArmazenaTamanho=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV57ArmazenaTamanho=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vARMAZENATAMANHO",gx.O.AV57ArmazenaTamanho,0)},c2v:function(){gx.O.AV57ArmazenaTamanho=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vARMAZENATAMANHO",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TABLEFIXO",grid:0};
   GXValidFnc[18]={fld:"TXTFIXO", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTEXTOFIXO",gxz:"ZV14TextoFixo",gxold:"OV14TextoFixo",gxvar:"AV14TextoFixo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14TextoFixo=Value},v2z:function(Value){gx.O.ZV14TextoFixo=Value},v2c:function(){gx.fn.setControlValue("vTEXTOFIXO",gx.O.AV14TextoFixo,0)},c2v:function(){gx.O.AV14TextoFixo=this.val()},val:function(){return gx.fn.getControlValue("vTEXTOFIXO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TABLETABELA",grid:0};
   GXValidFnc[24]={fld:"TXTTABELA", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTABELA",gxz:"ZV15Tabela",gxold:"OV15Tabela",gxvar:"AV15Tabela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV15Tabela=Value},v2z:function(Value){gx.O.ZV15Tabela=Value},v2c:function(){gx.fn.setComboBoxValue("vTABELA",gx.O.AV15Tabela)},c2v:function(){gx.O.AV15Tabela=this.val()},val:function(){return gx.fn.getControlValue("vTABELA")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TABLECAMPO",grid:0};
   GXValidFnc[30]={fld:"TXTCAMPO", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO",gxz:"ZV16NomeCampo",gxold:"OV16NomeCampo",gxvar:"AV16NomeCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"listbx",v2v:function(Value){gx.O.AV16NomeCampo=Value},v2z:function(Value){gx.O.ZV16NomeCampo=Value},v2c:function(){gx.fn.setComboBoxValue("vNOMECAMPO",gx.O.AV16NomeCampo)},c2v:function(){gx.O.AV16NomeCampo=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TABLESOMAT",grid:0};
   GXValidFnc[36]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSOMATORIO",gxz:"ZV18Somatorio",gxold:"OV18Somatorio",gxvar:"AV18Somatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV18Somatorio=Value},v2z:function(Value){gx.O.ZV18Somatorio=Value},v2c:function(){gx.fn.setCheckBoxValue("vSOMATORIO",gx.O.AV18Somatorio,"S")},c2v:function(){gx.O.AV18Somatorio=this.val()},val:function(){return gx.fn.getControlValue("vSOMATORIO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[37]={fld:"TABLECONTADOR",grid:0};
   GXValidFnc[40]={fld:"TXTSEQUENCIA", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Sequenciaitem01,isvalid:null,rgrid:[],fld:"vSEQUENCIAITEM01",gxz:"ZV39SequenciaItem01",gxold:"OV39SequenciaItem01",gxvar:"AV39SequenciaItem01",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39SequenciaItem01=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39SequenciaItem01=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSEQUENCIAITEM01",gx.O.AV39SequenciaItem01,0)},c2v:function(){gx.O.AV39SequenciaItem01=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSEQUENCIAITEM01",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Sequenciaitem02,isvalid:null,rgrid:[],fld:"vSEQUENCIAITEM02",gxz:"ZV40SequenciaItem02",gxold:"OV40SequenciaItem02",gxvar:"AV40SequenciaItem02",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40SequenciaItem02=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40SequenciaItem02=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSEQUENCIAITEM02",gx.O.AV40SequenciaItem02,0)},c2v:function(){gx.O.AV40SequenciaItem02=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSEQUENCIAITEM02",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Sequenciaitem03,isvalid:null,rgrid:[],fld:"vSEQUENCIAITEM03",gxz:"ZV41SequenciaItem03",gxold:"OV41SequenciaItem03",gxvar:"AV41SequenciaItem03",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41SequenciaItem03=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41SequenciaItem03=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSEQUENCIAITEM03",gx.O.AV41SequenciaItem03,0)},c2v:function(){gx.O.AV41SequenciaItem03=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSEQUENCIAITEM03",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Sequenciaitem04,isvalid:null,rgrid:[],fld:"vSEQUENCIAITEM04",gxz:"ZV42SequenciaItem04",gxold:"OV42SequenciaItem04",gxvar:"AV42SequenciaItem04",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42SequenciaItem04=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42SequenciaItem04=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSEQUENCIAITEM04",gx.O.AV42SequenciaItem04,0)},c2v:function(){gx.O.AV42SequenciaItem04=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSEQUENCIAITEM04",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Sequenciaitem05,isvalid:null,rgrid:[],fld:"vSEQUENCIAITEM05",gxz:"ZV43SequenciaItem05",gxold:"OV43SequenciaItem05",gxvar:"AV43SequenciaItem05",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43SequenciaItem05=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43SequenciaItem05=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSEQUENCIAITEM05",gx.O.AV43SequenciaItem05,0)},c2v:function(){gx.O.AV43SequenciaItem05=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSEQUENCIAITEM05",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Sequenciaitem06,isvalid:null,rgrid:[],fld:"vSEQUENCIAITEM06",gxz:"ZV44SequenciaItem06",gxold:"OV44SequenciaItem06",gxvar:"AV44SequenciaItem06",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44SequenciaItem06=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44SequenciaItem06=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSEQUENCIAITEM06",gx.O.AV44SequenciaItem06,0)},c2v:function(){gx.O.AV44SequenciaItem06=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSEQUENCIAITEM06",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Sequenciaitem07,isvalid:null,rgrid:[],fld:"vSEQUENCIAITEM07",gxz:"ZV45SequenciaItem07",gxold:"OV45SequenciaItem07",gxvar:"AV45SequenciaItem07",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45SequenciaItem07=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45SequenciaItem07=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSEQUENCIAITEM07",gx.O.AV45SequenciaItem07,0)},c2v:function(){gx.O.AV45SequenciaItem07=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSEQUENCIAITEM07",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Sequenciaitem08,isvalid:null,rgrid:[],fld:"vSEQUENCIAITEM08",gxz:"ZV46SequenciaItem08",gxold:"OV46SequenciaItem08",gxvar:"AV46SequenciaItem08",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46SequenciaItem08=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV46SequenciaItem08=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSEQUENCIAITEM08",gx.O.AV46SequenciaItem08,0)},c2v:function(){gx.O.AV46SequenciaItem08=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSEQUENCIAITEM08",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Sequenciaitem09,isvalid:null,rgrid:[],fld:"vSEQUENCIAITEM09",gxz:"ZV47SequenciaItem09",gxold:"OV47SequenciaItem09",gxvar:"AV47SequenciaItem09",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47SequenciaItem09=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47SequenciaItem09=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSEQUENCIAITEM09",gx.O.AV47SequenciaItem09,0)},c2v:function(){gx.O.AV47SequenciaItem09=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSEQUENCIAITEM09",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Sequenciaitem10,isvalid:null,rgrid:[],fld:"vSEQUENCIAITEM10",gxz:"ZV48SequenciaItem10",gxold:"OV48SequenciaItem10",gxvar:"AV48SequenciaItem10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48SequenciaItem10=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV48SequenciaItem10=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSEQUENCIAITEM10",gx.O.AV48SequenciaItem10,0)},c2v:function(){gx.O.AV48SequenciaItem10=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSEQUENCIAITEM10",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TABLESISTEMA",grid:0};
   GXValidFnc[55]={fld:"TXTOPSISTEMA", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCOESSISTEMA",gxz:"ZV19OpcoesSistema",gxold:"OV19OpcoesSistema",gxvar:"AV19OpcoesSistema",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV19OpcoesSistema=Value},v2z:function(Value){gx.O.ZV19OpcoesSistema=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCOESSISTEMA",gx.O.AV19OpcoesSistema)},c2v:function(){gx.O.AV19OpcoesSistema=this.val()},val:function(){return gx.fn.getControlValue("vOPCOESSISTEMA")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TABLINHA",grid:0};
   GXValidFnc[61]={fld:"TXTLINHA", format:0,grid:0};
   GXValidFnc[63]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLINHAMSG",gxz:"ZV77LinhaMsg",gxold:"OV77LinhaMsg",gxvar:"AV77LinhaMsg",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77LinhaMsg=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV77LinhaMsg=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLINHAMSG",gx.O.AV77LinhaMsg,0)},c2v:function(){gx.O.AV77LinhaMsg=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLINHAMSG",'.')},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TABLETAMANHO",grid:0};
   GXValidFnc[67]={fld:"TXTTAMANHO", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTAMANHOCAMPO",gxz:"ZV20TamanhoCampo",gxold:"OV20TamanhoCampo",gxvar:"AV20TamanhoCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20TamanhoCampo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20TamanhoCampo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTAMANHOCAMPO",gx.O.AV20TamanhoCampo,0)},c2v:function(){gx.O.AV20TamanhoCampo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTAMANHOCAMPO",'.')},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TXTTIPO", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPONUMCAR",gxz:"ZV21TipoNumCar",gxold:"OV21TipoNumCar",gxvar:"AV21TipoNumCar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21TipoNumCar=Value},v2z:function(Value){gx.O.ZV21TipoNumCar=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPONUMCAR",gx.O.AV21TipoNumCar)},c2v:function(){gx.O.AV21TipoNumCar=this.val()},val:function(){return gx.fn.getControlValue("vTIPONUMCAR")},nac:gx.falseFn};
   GXValidFnc[75]={fld:"TABLEMULTA",grid:0};
   GXValidFnc[78]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNMULTA",gxz:"ZV80SnMulta",gxold:"OV80SnMulta",gxvar:"AV80SnMulta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV80SnMulta=Value},v2z:function(Value){gx.O.ZV80SnMulta=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNMULTA",gx.O.AV80SnMulta,"S")},c2v:function(){gx.O.AV80SnMulta=this.val()},val:function(){return gx.fn.getControlValue("vSNMULTA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[79]={fld:"TABLEDESCONTO",grid:0};
   GXValidFnc[82]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNDESCONTO",gxz:"ZV83SnDesconto",gxold:"OV83SnDesconto",gxvar:"AV83SnDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV83SnDesconto=Value},v2z:function(Value){gx.O.ZV83SnDesconto=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNDESCONTO",gx.O.AV83SnDesconto,"S")},c2v:function(){gx.O.AV83SnDesconto=this.val()},val:function(){return gx.fn.getControlValue("vSNDESCONTO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[85]={fld:"TABLE2",grid:0};
   GXValidFnc[95]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[97]={lvl:2,type:"char",len:200,dec:0,sign:false,ro:0,isacc:0,grid:96,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALOR",gxz:"ZV91GXV12P",gxold:"OV91GXV12P",gxvar:"GXV12P",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12P=Value},v2z:function(Value){gx.O.ZV91GXV12P=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVALOR",row || gx.fn.currentGridRowImpl(96),gx.O.GXV12P,0)},c2v:function(){gx.O.GXV12P=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVALOR",row || gx.fn.currentGridRowImpl(96))},nac:gx.falseFn};
   GXValidFnc[98]={lvl:2,type:"char",len:16,dec:0,sign:false,ro:0,isacc:0,grid:96,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCAMPOGRID",gxz:"ZV30TipoCampoGrid",gxold:"OV30TipoCampoGrid",gxvar:"AV30TipoCampoGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV30TipoCampoGrid=Value},v2z:function(Value){gx.O.ZV30TipoCampoGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPOCAMPOGRID",row || gx.fn.currentGridRowImpl(96),gx.O.AV30TipoCampoGrid,0)},c2v:function(){gx.O.AV30TipoCampoGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPOCAMPOGRID",row || gx.fn.currentGridRowImpl(96))},nac:gx.falseFn};
   GXValidFnc[99]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:96,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLINICIO",gxz:"ZV92GXV12R",gxold:"OV92GXV12R",gxvar:"GXV12R",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12R=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV92GXV12R=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLINICIO",row || gx.fn.currentGridRowImpl(96),gx.O.GXV12R,0)},c2v:function(){gx.O.GXV12R=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLINICIO",row || gx.fn.currentGridRowImpl(96),'.')},nac:gx.falseFn};
   GXValidFnc[100]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:96,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLFIM",gxz:"ZV93GXV12S",gxold:"OV93GXV12S",gxvar:"GXV12S",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12S=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV93GXV12S=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLFIM",row || gx.fn.currentGridRowImpl(96),gx.O.GXV12S,0)},c2v:function(){gx.O.GXV12S=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLFIM",row || gx.fn.currentGridRowImpl(96),'.')},nac:gx.falseFn};
   GXValidFnc[101]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:96,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLTAMANHO",gxz:"ZV94GXV12T",gxold:"OV94GXV12T",gxvar:"GXV12T",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12T=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV94GXV12T=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLTAMANHO",row || gx.fn.currentGridRowImpl(96),gx.O.GXV12T,0)},c2v:function(){gx.O.GXV12T=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLTAMANHO",row || gx.fn.currentGridRowImpl(96),'.')},nac:gx.falseFn};
   GXValidFnc[102]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:96,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTADOR",gxz:"ZV95GXV12U",gxold:"OV95GXV12U",gxvar:"GXV12U",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12U=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV95GXV12U=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLCONTADOR",row || gx.fn.currentGridRowImpl(96),gx.O.GXV12U,0)},c2v:function(){gx.O.GXV12U=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLCONTADOR",row || gx.fn.currentGridRowImpl(96),'.')},nac:gx.falseFn};
   GXValidFnc[103]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:96,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLTIPO",gxz:"ZV96GXV12V",gxold:"OV96GXV12V",gxvar:"GXV12V",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12V=Value},v2z:function(Value){gx.O.ZV96GXV12V=Value},v2c:function(row){gx.fn.setGridControlValue("CTLTIPO",row || gx.fn.currentGridRowImpl(96),gx.O.GXV12V,0)},c2v:function(){gx.O.GXV12V=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLTIPO",row || gx.fn.currentGridRowImpl(96))},nac:gx.falseFn};
   GXValidFnc[104]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:96,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLTABELA",gxz:"ZV97GXV12W",gxold:"OV97GXV12W",gxvar:"GXV12W",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12W=Value},v2z:function(Value){gx.O.ZV97GXV12W=Value},v2c:function(row){gx.fn.setGridControlValue("CTLTABELA",row || gx.fn.currentGridRowImpl(96),gx.O.GXV12W,0)},c2v:function(){gx.O.GXV12W=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLTABELA",row || gx.fn.currentGridRowImpl(96))},nac:gx.falseFn};
   GXValidFnc[105]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:96,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNSOMATORIO",gxz:"ZV98GXV12X",gxold:"OV98GXV12X",gxvar:"GXV12X",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12X=Value},v2z:function(Value){gx.O.ZV98GXV12X=Value},v2c:function(row){gx.fn.setGridControlValue("CTLSNSOMATORIO",row || gx.fn.currentGridRowImpl(96),gx.O.GXV12X,0)},c2v:function(){gx.O.GXV12X=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSNSOMATORIO",row || gx.fn.currentGridRowImpl(96))},nac:gx.falseFn};
   GXValidFnc[106]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:96,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLNUMCARAC",gxz:"ZV99GXV12Y",gxold:"OV99GXV12Y",gxvar:"GXV12Y",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12Y=Value},v2z:function(Value){gx.O.ZV99GXV12Y=Value},v2c:function(row){gx.fn.setGridControlValue("CTLNUMCARAC",row || gx.fn.currentGridRowImpl(96),gx.O.GXV12Y,0)},c2v:function(){gx.O.GXV12Y=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLNUMCARAC",row || gx.fn.currentGridRowImpl(96))},nac:gx.falseFn};
   GXValidFnc[107]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:96,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV24bmpAlt",gxold:"OV24bmpAlt",gxvar:"AV24bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV24bmpAlt=Value},v2z:function(Value){gx.O.ZV24bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(96),gx.O.AV24bmpAlt,gx.O.AV104Bmpalt_GXI)},c2v:function(){gx.O.AV104Bmpalt_GXI=this.val_GXI();gx.O.AV24bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(96))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(96))}, gxvar_GXI:'AV104Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[108]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:96,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV22bmpExc",gxold:"OV22bmpExc",gxvar:"AV22bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV22bmpExc=Value},v2z:function(Value){gx.O.ZV22bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(96),gx.O.AV22bmpExc,gx.O.AV105Bmpexc_GXI)},c2v:function(){gx.O.AV105Bmpexc_GXI=this.val_GXI();gx.O.AV22bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(96))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(96))}, gxvar_GXI:'AV105Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[109]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:96,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSOBE",gxz:"ZV58bmpSobe",gxold:"OV58bmpSobe",gxvar:"AV58bmpSobe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV58bmpSobe=Value},v2z:function(Value){gx.O.ZV58bmpSobe=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSOBE",row || gx.fn.currentGridRowImpl(96),gx.O.AV58bmpSobe,gx.O.AV106Bmpsobe_GXI)},c2v:function(){gx.O.AV106Bmpsobe_GXI=this.val_GXI();gx.O.AV58bmpSobe=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSOBE",row || gx.fn.currentGridRowImpl(96))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSOBE_GXI",row || gx.fn.currentGridRowImpl(96))}, gxvar_GXI:'AV106Bmpsobe_GXI',nac:gx.falseFn};
   GXValidFnc[110]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:96,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDESC",gxz:"ZV59bmpDesc",gxold:"OV59bmpDesc",gxvar:"AV59bmpDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV59bmpDesc=Value},v2z:function(Value){gx.O.ZV59bmpDesc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDESC",row || gx.fn.currentGridRowImpl(96),gx.O.AV59bmpDesc,gx.O.AV107Bmpdesc_GXI)},c2v:function(){gx.O.AV107Bmpdesc_GXI=this.val_GXI();gx.O.AV59bmpDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDESC",row || gx.fn.currentGridRowImpl(96))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDESC_GXI",row || gx.fn.currentGridRowImpl(96))}, gxvar_GXI:'AV107Bmpdesc_GXI',nac:gx.falseFn};
   GXValidFnc[111]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[112]={lvl:0,type:"svchar",len:2000,dec:0,sign:false,ro:1,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREMESSARETORNOITEMCONTEUDO",gxz:"ZV28RemessaRetornoItemConteudo",gxold:"OV28RemessaRetornoItemConteudo",gxvar:"AV28RemessaRetornoItemConteudo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28RemessaRetornoItemConteudo=Value},v2z:function(Value){gx.O.ZV28RemessaRetornoItemConteudo=Value},v2c:function(){gx.fn.setControlValue("vREMESSARETORNOITEMCONTEUDO",gx.O.AV28RemessaRetornoItemConteudo,0)},c2v:function(){gx.O.AV28RemessaRetornoItemConteudo=this.val()},val:function(){return gx.fn.getControlValue("vREMESSARETORNOITEMCONTEUDO")},nac:gx.falseFn};
   GXValidFnc[118]={fld:"TABLE3",grid:0};
   this.AV12TipoCampo = "" ;
   this.ZV12TipoCampo = "" ;
   this.OV12TipoCampo = "" ;
   this.AV32Contador = 0 ;
   this.ZV32Contador = 0 ;
   this.OV32Contador = 0 ;
   this.AV36Cont = 0 ;
   this.ZV36Cont = 0 ;
   this.OV36Cont = 0 ;
   this.AV57ArmazenaTamanho = 0 ;
   this.ZV57ArmazenaTamanho = 0 ;
   this.OV57ArmazenaTamanho = 0 ;
   this.AV14TextoFixo = "" ;
   this.ZV14TextoFixo = "" ;
   this.OV14TextoFixo = "" ;
   this.AV15Tabela = "" ;
   this.ZV15Tabela = "" ;
   this.OV15Tabela = "" ;
   this.AV16NomeCampo = "" ;
   this.ZV16NomeCampo = "" ;
   this.OV16NomeCampo = "" ;
   this.AV18Somatorio = "" ;
   this.ZV18Somatorio = "" ;
   this.OV18Somatorio = "" ;
   this.AV39SequenciaItem01 = 0 ;
   this.ZV39SequenciaItem01 = 0 ;
   this.OV39SequenciaItem01 = 0 ;
   this.AV40SequenciaItem02 = 0 ;
   this.ZV40SequenciaItem02 = 0 ;
   this.OV40SequenciaItem02 = 0 ;
   this.AV41SequenciaItem03 = 0 ;
   this.ZV41SequenciaItem03 = 0 ;
   this.OV41SequenciaItem03 = 0 ;
   this.AV42SequenciaItem04 = 0 ;
   this.ZV42SequenciaItem04 = 0 ;
   this.OV42SequenciaItem04 = 0 ;
   this.AV43SequenciaItem05 = 0 ;
   this.ZV43SequenciaItem05 = 0 ;
   this.OV43SequenciaItem05 = 0 ;
   this.AV44SequenciaItem06 = 0 ;
   this.ZV44SequenciaItem06 = 0 ;
   this.OV44SequenciaItem06 = 0 ;
   this.AV45SequenciaItem07 = 0 ;
   this.ZV45SequenciaItem07 = 0 ;
   this.OV45SequenciaItem07 = 0 ;
   this.AV46SequenciaItem08 = 0 ;
   this.ZV46SequenciaItem08 = 0 ;
   this.OV46SequenciaItem08 = 0 ;
   this.AV47SequenciaItem09 = 0 ;
   this.ZV47SequenciaItem09 = 0 ;
   this.OV47SequenciaItem09 = 0 ;
   this.AV48SequenciaItem10 = 0 ;
   this.ZV48SequenciaItem10 = 0 ;
   this.OV48SequenciaItem10 = 0 ;
   this.AV19OpcoesSistema = "" ;
   this.ZV19OpcoesSistema = "" ;
   this.OV19OpcoesSistema = "" ;
   this.AV77LinhaMsg = 0 ;
   this.ZV77LinhaMsg = 0 ;
   this.OV77LinhaMsg = 0 ;
   this.AV20TamanhoCampo = 0 ;
   this.ZV20TamanhoCampo = 0 ;
   this.OV20TamanhoCampo = 0 ;
   this.AV21TipoNumCar = "" ;
   this.ZV21TipoNumCar = "" ;
   this.OV21TipoNumCar = "" ;
   this.AV80SnMulta = "" ;
   this.ZV80SnMulta = "" ;
   this.OV80SnMulta = "" ;
   this.AV83SnDesconto = "" ;
   this.ZV83SnDesconto = "" ;
   this.OV83SnDesconto = "" ;
   this.ZV91GXV12P = "" ;
   this.OV91GXV12P = "" ;
   this.ZV30TipoCampoGrid = "" ;
   this.OV30TipoCampoGrid = "" ;
   this.ZV92GXV12R = 0 ;
   this.OV92GXV12R = 0 ;
   this.ZV93GXV12S = 0 ;
   this.OV93GXV12S = 0 ;
   this.ZV94GXV12T = 0 ;
   this.OV94GXV12T = 0 ;
   this.ZV95GXV12U = 0 ;
   this.OV95GXV12U = 0 ;
   this.ZV96GXV12V = "" ;
   this.OV96GXV12V = "" ;
   this.ZV97GXV12W = "" ;
   this.OV97GXV12W = "" ;
   this.ZV98GXV12X = "" ;
   this.OV98GXV12X = "" ;
   this.ZV99GXV12Y = "" ;
   this.OV99GXV12Y = "" ;
   this.ZV24bmpAlt = "" ;
   this.OV24bmpAlt = "" ;
   this.ZV22bmpExc = "" ;
   this.OV22bmpExc = "" ;
   this.ZV58bmpSobe = "" ;
   this.OV58bmpSobe = "" ;
   this.ZV59bmpDesc = "" ;
   this.OV59bmpDesc = "" ;
   this.AV28RemessaRetornoItemConteudo = "" ;
   this.ZV28RemessaRetornoItemConteudo = "" ;
   this.OV28RemessaRetornoItemConteudo = "" ;
   this.AV12TipoCampo = "" ;
   this.AV32Contador = 0 ;
   this.AV36Cont = 0 ;
   this.AV57ArmazenaTamanho = 0 ;
   this.AV14TextoFixo = "" ;
   this.AV15Tabela = "" ;
   this.AV16NomeCampo = "" ;
   this.AV18Somatorio = "" ;
   this.AV39SequenciaItem01 = 0 ;
   this.AV40SequenciaItem02 = 0 ;
   this.AV41SequenciaItem03 = 0 ;
   this.AV42SequenciaItem04 = 0 ;
   this.AV43SequenciaItem05 = 0 ;
   this.AV44SequenciaItem06 = 0 ;
   this.AV45SequenciaItem07 = 0 ;
   this.AV46SequenciaItem08 = 0 ;
   this.AV47SequenciaItem09 = 0 ;
   this.AV48SequenciaItem10 = 0 ;
   this.AV19OpcoesSistema = "" ;
   this.AV77LinhaMsg = 0 ;
   this.AV20TamanhoCampo = 0 ;
   this.AV21TipoNumCar = "" ;
   this.AV80SnMulta = "" ;
   this.AV83SnDesconto = "" ;
   this.AV28RemessaRetornoItemConteudo = "" ;
   this.AV11EmpresaPadrao = "" ;
   this.AV25RemessaRetornoId = 0 ;
   this.AV26RemessaRetornoItemSequencia = 0 ;
   this.AV75RemessaRetornoItemTipo = "" ;
   this.AV76RemessaRetornoTipo = "" ;
   this.GXV12P = "" ;
   this.AV30TipoCampoGrid = "" ;
   this.GXV12R = 0 ;
   this.GXV12S = 0 ;
   this.GXV12T = 0 ;
   this.GXV12U = 0 ;
   this.GXV12V = "" ;
   this.GXV12W = "" ;
   this.GXV12X = "" ;
   this.GXV12Y = "" ;
   this.AV24bmpAlt = "" ;
   this.AV22bmpExc = "" ;
   this.AV58bmpSobe = "" ;
   this.AV59bmpDesc = "" ;
   this.A2798RemessaRetornoItemSequencia = 0 ;
   this.A2785RemessaRetornoId = 0 ;
   this.A2784RemessaRetornoEmpresaId = "" ;
   this.AV50ChamouTipoCampo = "" ;
   this.AV29Linha = {} ;
   this.AV35Conteudo = {} ;
   this.AV49ValorAuxiliar = "" ;
   this.Events = {"e11j22_client": ["VTIPOCAMPO.CLICK", true] ,"e12j22_client": ["VTABELA.CLICK", true] ,"e13j22_client": ["'SALVAR'", true] ,"e21j22_client": ["'ALTERAR'", true] ,"e22j22_client": ["'EXCLUIR'", true] ,"e14j22_client": ["ENTER", true] ,"e15j22_client": ["'FECHAR'", true] ,"e23j22_client": ["'SUBIR'", true] ,"e24j22_client": ["'DESCER'", true] ,"e16j22_client": ["VNOMECAMPO.CLICK", true] ,"e17j22_client": ["'NOVOITEM'", true] ,"e25j22_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV29Linha',fld:'vLINHA',grid:96},{av:'AV50ChamouTipoCampo',fld:'vCHAMOUTIPOCAMPO'},{av:'AV12TipoCampo',fld:'vTIPOCAMPO'},{av:'AV14TextoFixo',fld:'vTEXTOFIXO'},{av:'AV15Tabela',fld:'vTABELA'},{av:'AV39SequenciaItem01',fld:'vSEQUENCIAITEM01'},{av:'AV19OpcoesSistema',fld:'vOPCOESSISTEMA'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'}],[{av:'AV50ChamouTipoCampo',fld:'vCHAMOUTIPOCAMPO'},{av:'AV21TipoNumCar',fld:'vTIPONUMCAR'},{av:'gx.fn.getCtrlProperty("TABLESOMAT","Visible")',ctrl:'TABLESOMAT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLEMULTA","Visible")',ctrl:'TABLEMULTA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLEDESCONTO","Visible")',ctrl:'TABLEDESCONTO',prop:'Visible'},{ctrl:'vTIPONUMCAR'},{av:'gx.fn.getCtrlProperty("TABLEFIXO","Visible")',ctrl:'TABLEFIXO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLETABELA","Visible")',ctrl:'TABLETABELA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECAMPO","Visible")',ctrl:'TABLECAMPO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECONTADOR","Visible")',ctrl:'TABLECONTADOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLESISTEMA","Visible")',ctrl:'TABLESISTEMA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLETAMANHO","Visible")',ctrl:'TABLETAMANHO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLINHA","Visible")',ctrl:'TABLINHA',prop:'Visible'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'},{av:'AV18Somatorio',fld:'vSOMATORIO'}]];
   this.EvtParms["VTIPOCAMPO.CLICK"] = [[{av:'AV12TipoCampo',fld:'vTIPOCAMPO'},{av:'AV50ChamouTipoCampo',fld:'vCHAMOUTIPOCAMPO'},{av:'AV14TextoFixo',fld:'vTEXTOFIXO'},{av:'AV15Tabela',fld:'vTABELA'},{av:'AV39SequenciaItem01',fld:'vSEQUENCIAITEM01'},{av:'AV19OpcoesSistema',fld:'vOPCOESSISTEMA'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'}],[{av:'AV50ChamouTipoCampo',fld:'vCHAMOUTIPOCAMPO'},{av:'AV21TipoNumCar',fld:'vTIPONUMCAR'},{av:'gx.fn.getCtrlProperty("TABLESOMAT","Visible")',ctrl:'TABLESOMAT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLEMULTA","Visible")',ctrl:'TABLEMULTA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLEDESCONTO","Visible")',ctrl:'TABLEDESCONTO',prop:'Visible'},{ctrl:'vTIPONUMCAR'},{av:'gx.fn.getCtrlProperty("TABLEFIXO","Visible")',ctrl:'TABLEFIXO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLETABELA","Visible")',ctrl:'TABLETABELA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECAMPO","Visible")',ctrl:'TABLECAMPO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECONTADOR","Visible")',ctrl:'TABLECONTADOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLESISTEMA","Visible")',ctrl:'TABLESISTEMA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLETAMANHO","Visible")',ctrl:'TABLETAMANHO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLINHA","Visible")',ctrl:'TABLINHA',prop:'Visible'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'},{av:'AV18Somatorio',fld:'vSOMATORIO'}]];
   this.EvtParms["VTABELA.CLICK"] = [[{av:'AV15Tabela',fld:'vTABELA'},{av:'AV12TipoCampo',fld:'vTIPOCAMPO'}],[{av:'AV16NomeCampo',fld:'vNOMECAMPO'}]];
   this.EvtParms["VNOMECAMPO.CLICK"] = [[{av:'AV16NomeCampo',fld:'vNOMECAMPO'}],[{av:'gx.fn.getCtrlProperty("TABLINHA","Visible")',ctrl:'TABLINHA',prop:'Visible'},{av:'AV18Somatorio',fld:'vSOMATORIO'},{av:'gx.fn.getCtrlProperty("TABLESOMAT","Visible")',ctrl:'TABLESOMAT',prop:'Visible'}]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'AV29Linha',fld:'vLINHA',grid:96}],[{av:'AV24bmpAlt',fld:'vBMPALT'},{av:'AV22bmpExc',fld:'vBMPEXC'},{av:'AV58bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV59bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV35Conteudo',fld:'vCONTEUDO'},{av:'AV30TipoCampoGrid',fld:'vTIPOCAMPOGRID'}]];
   this.EvtParms["'NOVOITEM'"] = [[],[{av:'AV36Cont',fld:'vCONT'},{av:'AV12TipoCampo',fld:'vTIPOCAMPO'},{av:'AV14TextoFixo',fld:'vTEXTOFIXO'},{av:'AV15Tabela',fld:'vTABELA'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'},{av:'AV18Somatorio',fld:'vSOMATORIO'},{av:'AV39SequenciaItem01',fld:'vSEQUENCIAITEM01'},{av:'AV40SequenciaItem02',fld:'vSEQUENCIAITEM02'},{av:'AV41SequenciaItem03',fld:'vSEQUENCIAITEM03'},{av:'AV42SequenciaItem04',fld:'vSEQUENCIAITEM04'},{av:'AV43SequenciaItem05',fld:'vSEQUENCIAITEM05'},{av:'AV44SequenciaItem06',fld:'vSEQUENCIAITEM06'},{av:'AV45SequenciaItem07',fld:'vSEQUENCIAITEM07'},{av:'AV46SequenciaItem08',fld:'vSEQUENCIAITEM08'},{av:'AV47SequenciaItem09',fld:'vSEQUENCIAITEM09'},{av:'AV48SequenciaItem10',fld:'vSEQUENCIAITEM10'},{av:'AV19OpcoesSistema',fld:'vOPCOESSISTEMA'},{av:'AV20TamanhoCampo',fld:'vTAMANHOCAMPO'},{av:'AV21TipoNumCar',fld:'vTIPONUMCAR'}]];
   this.EvtParms["'SALVAR'"] = [[{av:'AV13tpErro',fld:'vTPERRO'},{av:'AV29Linha',fld:'vLINHA',grid:96},{av:'AV36Cont',fld:'vCONT'},{av:'AV32Contador',fld:'vCONTADOR'},{av:'AV12TipoCampo',fld:'vTIPOCAMPO'},{av:'AV14TextoFixo',fld:'vTEXTOFIXO'},{av:'AV20TamanhoCampo',fld:'vTAMANHOCAMPO'},{av:'AV15Tabela',fld:'vTABELA'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'},{av:'AV77LinhaMsg',fld:'vLINHAMSG'},{av:'AV39SequenciaItem01',fld:'vSEQUENCIAITEM01'},{av:'AV40SequenciaItem02',fld:'vSEQUENCIAITEM02'},{av:'AV41SequenciaItem03',fld:'vSEQUENCIAITEM03'},{av:'AV42SequenciaItem04',fld:'vSEQUENCIAITEM04'},{av:'AV43SequenciaItem05',fld:'vSEQUENCIAITEM05'},{av:'AV44SequenciaItem06',fld:'vSEQUENCIAITEM06'},{av:'AV45SequenciaItem07',fld:'vSEQUENCIAITEM07'},{av:'AV46SequenciaItem08',fld:'vSEQUENCIAITEM08'},{av:'AV47SequenciaItem09',fld:'vSEQUENCIAITEM09'},{av:'AV48SequenciaItem10',fld:'vSEQUENCIAITEM10'},{av:'A2784RemessaRetornoEmpresaId',fld:'REMESSARETORNOEMPRESAID'},{av:'AV11EmpresaPadrao',fld:'vEMPRESAPADRAO',hsh:true},{av:'A2785RemessaRetornoId',fld:'REMESSARETORNOID'},{av:'AV25RemessaRetornoId',fld:'vREMESSARETORNOID',hsh:true},{av:'A2798RemessaRetornoItemSequencia',fld:'REMESSARETORNOITEMSEQUENCIA'},{av:'AV19OpcoesSistema',fld:'vOPCOESSISTEMA'},{av:'AV21TipoNumCar',fld:'vTIPONUMCAR'},{av:'AV35Conteudo',fld:'vCONTEUDO'},{av:'AV80SnMulta',fld:'vSNMULTA'},{av:'AV83SnDesconto',fld:'vSNDESCONTO'},{av:'AV18Somatorio',fld:'vSOMATORIO'},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV50ChamouTipoCampo',fld:'vCHAMOUTIPOCAMPO'}],[{av:'AV37SnEncontrou',fld:'vSNENCONTROU'},{av:'AV108GXV4',fld:'vGXV4'},{av:'AV35Conteudo',fld:'vCONTEUDO'},{av:'AV32Contador',fld:'vCONTADOR'},{av:'AV29Linha',fld:'vLINHA',grid:96},{av:'AV13tpErro',fld:'vTPERRO'},{av:'AV110GXLvl662',fld:'vGXLVL662'},{av:'AV111GXLvl675',fld:'vGXLVL675'},{av:'AV112GXLvl688',fld:'vGXLVL688'},{av:'AV113GXLvl701',fld:'vGXLVL701'},{av:'AV114GXLvl714',fld:'vGXLVL714'},{av:'AV115GXLvl727',fld:'vGXLVL727'},{av:'AV116GXLvl740',fld:'vGXLVL740'},{av:'AV117GXLvl753',fld:'vGXLVL753'},{av:'AV118GXLvl766',fld:'vGXLVL766'},{av:'AV119GXLvl779',fld:'vGXLVL779'},{av:'AV49ValorAuxiliar',fld:'vVALORAUXILIAR'},{av:'AV28RemessaRetornoItemConteudo',fld:'vREMESSARETORNOITEMCONTEUDO'},{av:'AV109GXV5',fld:'vGXV5'},{av:'AV36Cont',fld:'vCONT'},{av:'AV12TipoCampo',fld:'vTIPOCAMPO'},{av:'AV14TextoFixo',fld:'vTEXTOFIXO'},{av:'AV15Tabela',fld:'vTABELA'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'},{av:'AV18Somatorio',fld:'vSOMATORIO'},{av:'AV39SequenciaItem01',fld:'vSEQUENCIAITEM01'},{av:'AV40SequenciaItem02',fld:'vSEQUENCIAITEM02'},{av:'AV41SequenciaItem03',fld:'vSEQUENCIAITEM03'},{av:'AV42SequenciaItem04',fld:'vSEQUENCIAITEM04'},{av:'AV43SequenciaItem05',fld:'vSEQUENCIAITEM05'},{av:'AV44SequenciaItem06',fld:'vSEQUENCIAITEM06'},{av:'AV45SequenciaItem07',fld:'vSEQUENCIAITEM07'},{av:'AV46SequenciaItem08',fld:'vSEQUENCIAITEM08'},{av:'AV47SequenciaItem09',fld:'vSEQUENCIAITEM09'},{av:'AV48SequenciaItem10',fld:'vSEQUENCIAITEM10'},{av:'AV19OpcoesSistema',fld:'vOPCOESSISTEMA'},{av:'AV20TamanhoCampo',fld:'vTAMANHOCAMPO'},{av:'AV21TipoNumCar',fld:'vTIPONUMCAR'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV29Linha',fld:'vLINHA',grid:96},{av:'AV39SequenciaItem01',fld:'vSEQUENCIAITEM01'},{av:'AV40SequenciaItem02',fld:'vSEQUENCIAITEM02'},{av:'AV41SequenciaItem03',fld:'vSEQUENCIAITEM03'},{av:'AV42SequenciaItem04',fld:'vSEQUENCIAITEM04'},{av:'AV43SequenciaItem05',fld:'vSEQUENCIAITEM05'},{av:'AV44SequenciaItem06',fld:'vSEQUENCIAITEM06'},{av:'AV45SequenciaItem07',fld:'vSEQUENCIAITEM07'},{av:'AV46SequenciaItem08',fld:'vSEQUENCIAITEM08'},{av:'AV47SequenciaItem09',fld:'vSEQUENCIAITEM09'},{av:'AV52PosIni',fld:'vPOSINI'},{av:'AV48SequenciaItem10',fld:'vSEQUENCIAITEM10'},{av:'AV50ChamouTipoCampo',fld:'vCHAMOUTIPOCAMPO'},{av:'AV12TipoCampo',fld:'vTIPOCAMPO'},{av:'AV14TextoFixo',fld:'vTEXTOFIXO'},{av:'AV15Tabela',fld:'vTABELA'},{av:'AV19OpcoesSistema',fld:'vOPCOESSISTEMA'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'}],[{av:'AV35Conteudo',fld:'vCONTEUDO'},{av:'AV36Cont',fld:'vCONT'},{av:'AV12TipoCampo',fld:'vTIPOCAMPO'},{av:'AV14TextoFixo',fld:'vTEXTOFIXO'},{av:'AV15Tabela',fld:'vTABELA'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'},{av:'AV18Somatorio',fld:'vSOMATORIO'},{av:'AV39SequenciaItem01',fld:'vSEQUENCIAITEM01'},{av:'AV40SequenciaItem02',fld:'vSEQUENCIAITEM02'},{av:'AV41SequenciaItem03',fld:'vSEQUENCIAITEM03'},{av:'AV42SequenciaItem04',fld:'vSEQUENCIAITEM04'},{av:'AV43SequenciaItem05',fld:'vSEQUENCIAITEM05'},{av:'AV44SequenciaItem06',fld:'vSEQUENCIAITEM06'},{av:'AV45SequenciaItem07',fld:'vSEQUENCIAITEM07'},{av:'AV46SequenciaItem08',fld:'vSEQUENCIAITEM08'},{av:'AV47SequenciaItem09',fld:'vSEQUENCIAITEM09'},{av:'AV48SequenciaItem10',fld:'vSEQUENCIAITEM10'},{av:'AV19OpcoesSistema',fld:'vOPCOESSISTEMA'},{av:'AV20TamanhoCampo',fld:'vTAMANHOCAMPO'},{av:'AV21TipoNumCar',fld:'vTIPONUMCAR'},{av:'AV77LinhaMsg',fld:'vLINHAMSG'},{av:'AV80SnMulta',fld:'vSNMULTA'},{av:'AV83SnDesconto',fld:'vSNDESCONTO'},{av:'AV49ValorAuxiliar',fld:'vVALORAUXILIAR'},{av:'AV56ControlePosicao',fld:'vCONTROLEPOSICAO'},{av:'AV53QtdeCaracteres',fld:'vQTDECARACTERES'},{av:'AV54i',fld:'vI'},{av:'AV55c',fld:'vC'},{av:'AV51PosFim',fld:'vPOSFIM'},{av:'AV52PosIni',fld:'vPOSINI'},{av:'AV38CharControle',fld:'vCHARCONTROLE'},{av:'AV50ChamouTipoCampo',fld:'vCHAMOUTIPOCAMPO'},{av:'gx.fn.getCtrlProperty("TABLESOMAT","Visible")',ctrl:'TABLESOMAT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLEMULTA","Visible")',ctrl:'TABLEMULTA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLEDESCONTO","Visible")',ctrl:'TABLEDESCONTO',prop:'Visible'},{ctrl:'vTIPONUMCAR'},{av:'gx.fn.getCtrlProperty("TABLEFIXO","Visible")',ctrl:'TABLEFIXO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLETABELA","Visible")',ctrl:'TABLETABELA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECAMPO","Visible")',ctrl:'TABLECAMPO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECONTADOR","Visible")',ctrl:'TABLECONTADOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLESISTEMA","Visible")',ctrl:'TABLESISTEMA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLETAMANHO","Visible")',ctrl:'TABLETAMANHO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLINHA","Visible")',ctrl:'TABLINHA',prop:'Visible'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV29Linha',fld:'vLINHA',grid:96},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV50ChamouTipoCampo',fld:'vCHAMOUTIPOCAMPO'},{av:'AV12TipoCampo',fld:'vTIPOCAMPO'},{av:'AV14TextoFixo',fld:'vTEXTOFIXO'},{av:'AV15Tabela',fld:'vTABELA'},{av:'AV39SequenciaItem01',fld:'vSEQUENCIAITEM01'},{av:'AV19OpcoesSistema',fld:'vOPCOESSISTEMA'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'}],[{av:'AV29Linha',fld:'vLINHA',grid:96},{av:'AV28RemessaRetornoItemConteudo',fld:'vREMESSARETORNOITEMCONTEUDO'},{av:'AV109GXV5',fld:'vGXV5'},{av:'AV35Conteudo',fld:'vCONTEUDO'},{av:'AV49ValorAuxiliar',fld:'vVALORAUXILIAR'}]];
   this.EvtParms["ENTER"] = [[{av:'AV57ArmazenaTamanho',fld:'vARMAZENATAMANHO'},{av:'AV28RemessaRetornoItemConteudo',fld:'vREMESSARETORNOITEMCONTEUDO'}],[{av:'AV27SnConfirma',fld:'vSNCONFIRMA'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV57ArmazenaTamanho',fld:'vARMAZENATAMANHO'},{av:'AV28RemessaRetornoItemConteudo',fld:'vREMESSARETORNOITEMCONTEUDO'}],[{av:'AV27SnConfirma',fld:'vSNCONFIRMA'}]];
   this.EvtParms["'SUBIR'"] = [[{av:'AV29Linha',fld:'vLINHA',grid:96},{av:'AV68TamanhoOrigem',fld:'vTAMANHOORIGEM'},{av:'AV69TipoOrigem',fld:'vTIPOORIGEM'},{av:'AV70ValorOrigem',fld:'vVALORORIGEM'},{av:'AV71TabelaOrigem',fld:'vTABELAORIGEM'},{av:'AV72SnSomatorioOrigem',fld:'vSNSOMATORIOORIGEM'},{av:'AV82SnMultaOrigem',fld:'vSNMULTAORIGEM'},{av:'AV85SnDescontoOrigem',fld:'vSNDESCONTOORIGEM'},{av:'AV73NumCaracOrigem',fld:'vNUMCARACORIGEM'},{av:'AV79NumLinhaOrigem',fld:'vNUMLINHAORIGEM'},{av:'AV62TamanhoDestino',fld:'vTAMANHODESTINO'},{av:'AV63TipoDestino',fld:'vTIPODESTINO'},{av:'AV64ValorDestino',fld:'vVALORDESTINO'},{av:'AV65TabelaDestino',fld:'vTABELADESTINO'},{av:'AV66SnSomatorioDestino',fld:'vSNSOMATORIODESTINO'},{av:'AV81SnMultaDestino',fld:'vSNMULTADESTINO'},{av:'AV84SnDescontoDestino',fld:'vSNDESCONTODESTINO'},{av:'AV67NumCaracDestino',fld:'vNUMCARACDESTINO'},{av:'AV78NumLinhaDestino',fld:'vNUMLINHADESTINO'}],[{av:'AV60Origem',fld:'vORIGEM'},{av:'AV61Destino',fld:'vDESTINO'},{av:'AV120GXV6',fld:'vGXV6'},{av:'AV35Conteudo',fld:'vCONTEUDO'},{av:'AV62TamanhoDestino',fld:'vTAMANHODESTINO'},{av:'AV63TipoDestino',fld:'vTIPODESTINO'},{av:'AV64ValorDestino',fld:'vVALORDESTINO'},{av:'AV65TabelaDestino',fld:'vTABELADESTINO'},{av:'AV66SnSomatorioDestino',fld:'vSNSOMATORIODESTINO'},{av:'AV81SnMultaDestino',fld:'vSNMULTADESTINO'},{av:'AV84SnDescontoDestino',fld:'vSNDESCONTODESTINO'},{av:'AV67NumCaracDestino',fld:'vNUMCARACDESTINO'},{av:'AV78NumLinhaDestino',fld:'vNUMLINHADESTINO'},{av:'AV68TamanhoOrigem',fld:'vTAMANHOORIGEM'},{av:'AV69TipoOrigem',fld:'vTIPOORIGEM'},{av:'AV70ValorOrigem',fld:'vVALORORIGEM'},{av:'AV71TabelaOrigem',fld:'vTABELAORIGEM'},{av:'AV72SnSomatorioOrigem',fld:'vSNSOMATORIOORIGEM'},{av:'AV82SnMultaOrigem',fld:'vSNMULTAORIGEM'},{av:'AV85SnDescontoOrigem',fld:'vSNDESCONTOORIGEM'},{av:'AV73NumCaracOrigem',fld:'vNUMCARACORIGEM'},{av:'AV79NumLinhaOrigem',fld:'vNUMLINHAORIGEM'},{av:'AV121GXV7',fld:'vGXV7'},{av:'AV28RemessaRetornoItemConteudo',fld:'vREMESSARETORNOITEMCONTEUDO'},{av:'AV109GXV5',fld:'vGXV5'},{av:'AV49ValorAuxiliar',fld:'vVALORAUXILIAR'}]];
   this.EvtParms["'DESCER'"] = [[{av:'AV29Linha',fld:'vLINHA',grid:96},{av:'AV62TamanhoDestino',fld:'vTAMANHODESTINO'},{av:'AV63TipoDestino',fld:'vTIPODESTINO'},{av:'AV64ValorDestino',fld:'vVALORDESTINO'},{av:'AV65TabelaDestino',fld:'vTABELADESTINO'},{av:'AV66SnSomatorioDestino',fld:'vSNSOMATORIODESTINO'},{av:'AV81SnMultaDestino',fld:'vSNMULTADESTINO'},{av:'AV84SnDescontoDestino',fld:'vSNDESCONTODESTINO'},{av:'AV67NumCaracDestino',fld:'vNUMCARACDESTINO'},{av:'AV78NumLinhaDestino',fld:'vNUMLINHADESTINO'},{av:'AV68TamanhoOrigem',fld:'vTAMANHOORIGEM'},{av:'AV69TipoOrigem',fld:'vTIPOORIGEM'},{av:'AV70ValorOrigem',fld:'vVALORORIGEM'},{av:'AV71TabelaOrigem',fld:'vTABELAORIGEM'},{av:'AV72SnSomatorioOrigem',fld:'vSNSOMATORIOORIGEM'},{av:'AV85SnDescontoOrigem',fld:'vSNDESCONTOORIGEM'},{av:'AV73NumCaracOrigem',fld:'vNUMCARACORIGEM'},{av:'AV79NumLinhaOrigem',fld:'vNUMLINHAORIGEM'}],[{av:'AV74SnExiste',fld:'vSNEXISTE'},{av:'AV60Origem',fld:'vORIGEM'},{av:'AV61Destino',fld:'vDESTINO'},{av:'AV122GXV8',fld:'vGXV8'},{av:'AV35Conteudo',fld:'vCONTEUDO'},{av:'AV68TamanhoOrigem',fld:'vTAMANHOORIGEM'},{av:'AV69TipoOrigem',fld:'vTIPOORIGEM'},{av:'AV70ValorOrigem',fld:'vVALORORIGEM'},{av:'AV71TabelaOrigem',fld:'vTABELAORIGEM'},{av:'AV72SnSomatorioOrigem',fld:'vSNSOMATORIOORIGEM'},{av:'AV82SnMultaOrigem',fld:'vSNMULTAORIGEM'},{av:'AV85SnDescontoOrigem',fld:'vSNDESCONTOORIGEM'},{av:'AV73NumCaracOrigem',fld:'vNUMCARACORIGEM'},{av:'AV79NumLinhaOrigem',fld:'vNUMLINHAORIGEM'},{av:'AV62TamanhoDestino',fld:'vTAMANHODESTINO'},{av:'AV63TipoDestino',fld:'vTIPODESTINO'},{av:'AV64ValorDestino',fld:'vVALORDESTINO'},{av:'AV65TabelaDestino',fld:'vTABELADESTINO'},{av:'AV66SnSomatorioDestino',fld:'vSNSOMATORIODESTINO'},{av:'AV81SnMultaDestino',fld:'vSNMULTADESTINO'},{av:'AV84SnDescontoDestino',fld:'vSNDESCONTODESTINO'},{av:'AV67NumCaracDestino',fld:'vNUMCARACDESTINO'},{av:'AV78NumLinhaDestino',fld:'vNUMLINHADESTINO'},{av:'AV123GXV9',fld:'vGXV9'},{av:'AV28RemessaRetornoItemConteudo',fld:'vREMESSARETORNOITEMCONTEUDO'},{av:'AV109GXV5',fld:'vGXV5'},{av:'AV49ValorAuxiliar',fld:'vVALORAUXILIAR'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV50ChamouTipoCampo',fld:'vCHAMOUTIPOCAMPO'},{av:'AV12TipoCampo',fld:'vTIPOCAMPO'},{av:'AV14TextoFixo',fld:'vTEXTOFIXO'},{av:'AV15Tabela',fld:'vTABELA'},{av:'AV39SequenciaItem01',fld:'vSEQUENCIAITEM01'},{av:'AV19OpcoesSistema',fld:'vOPCOESSISTEMA'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'},{av:'AV29Linha',fld:'vLINHA',grid:96}],[{av:'AV50ChamouTipoCampo',fld:'vCHAMOUTIPOCAMPO'},{av:'AV21TipoNumCar',fld:'vTIPONUMCAR'},{av:'gx.fn.getCtrlProperty("TABLESOMAT","Visible")',ctrl:'TABLESOMAT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLEMULTA","Visible")',ctrl:'TABLEMULTA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLEDESCONTO","Visible")',ctrl:'TABLEDESCONTO',prop:'Visible'},{ctrl:'vTIPONUMCAR'},{av:'gx.fn.getCtrlProperty("TABLEFIXO","Visible")',ctrl:'TABLEFIXO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLETABELA","Visible")',ctrl:'TABLETABELA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECAMPO","Visible")',ctrl:'TABLECAMPO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECONTADOR","Visible")',ctrl:'TABLECONTADOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLESISTEMA","Visible")',ctrl:'TABLESISTEMA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLETAMANHO","Visible")',ctrl:'TABLETAMANHO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLINHA","Visible")',ctrl:'TABLINHA',prop:'Visible'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'},{av:'AV18Somatorio',fld:'vSOMATORIO'}]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV50ChamouTipoCampo',fld:'vCHAMOUTIPOCAMPO'},{av:'AV12TipoCampo',fld:'vTIPOCAMPO'},{av:'AV14TextoFixo',fld:'vTEXTOFIXO'},{av:'AV15Tabela',fld:'vTABELA'},{av:'AV39SequenciaItem01',fld:'vSEQUENCIAITEM01'},{av:'AV19OpcoesSistema',fld:'vOPCOESSISTEMA'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'},{av:'AV29Linha',fld:'vLINHA',grid:96}],[{av:'AV50ChamouTipoCampo',fld:'vCHAMOUTIPOCAMPO'},{av:'AV21TipoNumCar',fld:'vTIPONUMCAR'},{av:'gx.fn.getCtrlProperty("TABLESOMAT","Visible")',ctrl:'TABLESOMAT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLEMULTA","Visible")',ctrl:'TABLEMULTA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLEDESCONTO","Visible")',ctrl:'TABLEDESCONTO',prop:'Visible'},{ctrl:'vTIPONUMCAR'},{av:'gx.fn.getCtrlProperty("TABLEFIXO","Visible")',ctrl:'TABLEFIXO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLETABELA","Visible")',ctrl:'TABLETABELA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECAMPO","Visible")',ctrl:'TABLECAMPO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECONTADOR","Visible")',ctrl:'TABLECONTADOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLESISTEMA","Visible")',ctrl:'TABLESISTEMA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLETAMANHO","Visible")',ctrl:'TABLETAMANHO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLINHA","Visible")',ctrl:'TABLINHA',prop:'Visible'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'},{av:'AV18Somatorio',fld:'vSOMATORIO'}]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV50ChamouTipoCampo',fld:'vCHAMOUTIPOCAMPO'},{av:'AV12TipoCampo',fld:'vTIPOCAMPO'},{av:'AV14TextoFixo',fld:'vTEXTOFIXO'},{av:'AV15Tabela',fld:'vTABELA'},{av:'AV39SequenciaItem01',fld:'vSEQUENCIAITEM01'},{av:'AV19OpcoesSistema',fld:'vOPCOESSISTEMA'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'},{av:'AV29Linha',fld:'vLINHA',grid:96}],[{av:'AV50ChamouTipoCampo',fld:'vCHAMOUTIPOCAMPO'},{av:'AV21TipoNumCar',fld:'vTIPONUMCAR'},{av:'gx.fn.getCtrlProperty("TABLESOMAT","Visible")',ctrl:'TABLESOMAT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLEMULTA","Visible")',ctrl:'TABLEMULTA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLEDESCONTO","Visible")',ctrl:'TABLEDESCONTO',prop:'Visible'},{ctrl:'vTIPONUMCAR'},{av:'gx.fn.getCtrlProperty("TABLEFIXO","Visible")',ctrl:'TABLEFIXO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLETABELA","Visible")',ctrl:'TABLETABELA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECAMPO","Visible")',ctrl:'TABLECAMPO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECONTADOR","Visible")',ctrl:'TABLECONTADOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLESISTEMA","Visible")',ctrl:'TABLESISTEMA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLETAMANHO","Visible")',ctrl:'TABLETAMANHO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLINHA","Visible")',ctrl:'TABLINHA',prop:'Visible'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'},{av:'AV18Somatorio',fld:'vSOMATORIO'}]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV50ChamouTipoCampo',fld:'vCHAMOUTIPOCAMPO'},{av:'AV12TipoCampo',fld:'vTIPOCAMPO'},{av:'AV14TextoFixo',fld:'vTEXTOFIXO'},{av:'AV15Tabela',fld:'vTABELA'},{av:'AV39SequenciaItem01',fld:'vSEQUENCIAITEM01'},{av:'AV19OpcoesSistema',fld:'vOPCOESSISTEMA'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'},{av:'AV29Linha',fld:'vLINHA',grid:96}],[{av:'AV50ChamouTipoCampo',fld:'vCHAMOUTIPOCAMPO'},{av:'AV21TipoNumCar',fld:'vTIPONUMCAR'},{av:'gx.fn.getCtrlProperty("TABLESOMAT","Visible")',ctrl:'TABLESOMAT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLEMULTA","Visible")',ctrl:'TABLEMULTA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLEDESCONTO","Visible")',ctrl:'TABLEDESCONTO',prop:'Visible'},{ctrl:'vTIPONUMCAR'},{av:'gx.fn.getCtrlProperty("TABLEFIXO","Visible")',ctrl:'TABLEFIXO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLETABELA","Visible")',ctrl:'TABLETABELA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECAMPO","Visible")',ctrl:'TABLECAMPO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECONTADOR","Visible")',ctrl:'TABLECONTADOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLESISTEMA","Visible")',ctrl:'TABLESISTEMA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLETAMANHO","Visible")',ctrl:'TABLETAMANHO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLINHA","Visible")',ctrl:'TABLINHA',prop:'Visible'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'},{av:'AV18Somatorio',fld:'vSOMATORIO'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV50ChamouTipoCampo", "vCHAMOUTIPOCAMPO", 0, "char");
   this.setVCMap("AV29Linha", "vLINHA", 0, "SdtRemessaRetorno.Linha");
   this.setVCMap("AV11EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV25RemessaRetornoId", "vREMESSARETORNOID", 0, "int");
   this.setVCMap("AV26RemessaRetornoItemSequencia", "vREMESSARETORNOITEMSEQUENCIA", 0, "int");
   this.setVCMap("AV75RemessaRetornoItemTipo", "vREMESSARETORNOITEMTIPO", 0, "char");
   this.setVCMap("AV76RemessaRetornoTipo", "vREMESSARETORNOTIPO", 0, "char");
   this.setVCMap("AV50ChamouTipoCampo", "vCHAMOUTIPOCAMPO", 0, "char");
   this.setVCMap("AV29Linha", "vLINHA", 0, "SdtRemessaRetorno.Linha");
   Grid1Container.addRefreshingVar({rfrVar:"AV50ChamouTipoCampo"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[11]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[20]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[26]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[42]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[57]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[32]);
   Grid1Container.addRefreshingVar({rfrVar:"AV29Linha"});
   this.addGridBCProperty("Linha", ["Conteudo", "Valor"], this.GXValidFnc[97], "AV29Linha");
   this.addGridBCProperty("Linha", ["Conteudo", "Inicio"], this.GXValidFnc[99], "AV29Linha");
   this.addGridBCProperty("Linha", ["Conteudo", "Fim"], this.GXValidFnc[100], "AV29Linha");
   this.addGridBCProperty("Linha", ["Conteudo", "Tamanho"], this.GXValidFnc[101], "AV29Linha");
   this.addGridBCProperty("Linha", ["Conteudo", "Contador"], this.GXValidFnc[102], "AV29Linha");
   this.addGridBCProperty("Linha", ["Conteudo", "Tipo"], this.GXValidFnc[103], "AV29Linha");
   this.addGridBCProperty("Linha", ["Conteudo", "Tabela"], this.GXValidFnc[104], "AV29Linha");
   this.addGridBCProperty("Linha", ["Conteudo", "SnSomatorio"], this.GXValidFnc[105], "AV29Linha");
   this.addGridBCProperty("Linha", ["Conteudo", "NumCarac"], this.GXValidFnc[106], "AV29Linha");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hremessaretornoitemconteudo());
