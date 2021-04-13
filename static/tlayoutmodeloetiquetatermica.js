/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:17:19.68
*/
gx.evt.autoSkip = false;
gx.define('tlayoutmodeloetiquetatermica', false, function () {
   this.ServerClass =  "tlayoutmodeloetiquetatermica" ;
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
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A5902EtiquetaTermicaEmpresaId=gx.fn.getControlValue("ETIQUETATERMICAEMPRESAID") ;
      this.AV18EtiquetaTermicaModelo=gx.fn.getIntegerValue("vETIQUETATERMICAMODELO",'.') ;
      this.AV19EtiquetaTermicaSequencia=gx.fn.getIntegerValue("vETIQUETATERMICASEQUENCIA",'.') ;
      this.AV24SnPreenchido=gx.fn.getControlValue("vSNPREENCHIDO") ;
      this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV33PrecoTipo=gx.fn.getControlValue("vPRECOTIPO") ;
      this.AV25SNExistePreco=gx.fn.getControlValue("vSNEXISTEPRECO") ;
      this.AV23EtiquetaTermicaNoColunas=gx.fn.getIntegerValue("vETIQUETATERMICANOCOLUNAS",'.') ;
      this.AV35Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV34Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Etiquetatermicamodelo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Etiquetatermicamodelo",["gx.O.A5902EtiquetaTermicaEmpresaId", "gx.O.A5903EtiquetaTermicaModelo", "gx.O.A5904EtiquetaTermicaDescricao"],["A5904EtiquetaTermicaDescricao"]);
      return true;
   }
   this.Valid_Etiquetatermicasequencia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICASEQUENCIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Etiquetatermicatipodados=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICATIPODADOS");
         this.AnyError  = 0;
         if ( (""==this.A5885EtiquetaTermicaTipoDados) )
         {
            try {
               gxballoon.setError("Informe o Tipo de Dados");
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
   this.Valid_Etiquetatermicacampo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICACAMPO");
         this.AnyError  = 0;
         if ( (""==this.A5886EtiquetaTermicaCampo) && this.A5885EtiquetaTermicaTipoDados != "I" )
         {
            try {
               gxballoon.setError("Informe o Campo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( ! (""==this.A5886EtiquetaTermicaCampo) && this.A5885EtiquetaTermicaTipoDados == "I" )
         {
            try {
               gxballoon.setError("Informe o Campo apenas quando o Tipo de Dados não for \"Imagem\"");
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
   this.Valid_Etiquetatermicaposicaoinicial=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICAPOSICAOINICIAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Etiquetatermicaqtdecaracter=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICAQTDECARACTER");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Etiquetatermicadescricaocampo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICADESCRICAOCAMPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Etiquetatermicadescricaofixa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICADESCRICAOFIXA");
         this.AnyError  = 0;
         if ( (""==this.A5888EtiquetaTermicaDescricaoFixa) && this.A5886EtiquetaTermicaCampo == "campofixo" )
         {
            try {
               gxballoon.setError("Informe a Descrição Fixa");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( ! (""==this.A5888EtiquetaTermicaDescricaoFixa) && this.A5886EtiquetaTermicaCampo != "campofixo" )
         {
            try {
               gxballoon.setError("Informe a Descrição Fixa apenas quando o Campo for \"Campo Fixo\"");
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
   this.Valid_Etiquetatermicanomeimagem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICANOMEIMAGEM");
         this.AnyError  = 0;
         if ( (""==this.A6405EtiquetaTermicaNomeImagem) && this.A5885EtiquetaTermicaTipoDados == "I" )
         {
            try {
               gxballoon.setError("Informe o Nome da Imagem");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( ! (""==this.A6405EtiquetaTermicaNomeImagem) && this.A5885EtiquetaTermicaTipoDados != "I" )
         {
            try {
               gxballoon.setError("Informe o Nome da Imagem apenas quando o Tipo de Dados for \"Imagem\"");
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
   this.Valid_Precoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Precoid",["gx.O.AV22PrecoEmpresaId", "gx.O.A710PrecoId", "gx.O.AV26PrecoDescricao"],["AV26PrecoDescricao"]);
      return true;
   }
   this.Validv_Precoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRECOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Etiquetatermicaqtdeparcelas=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICAQTDEPARCELAS");
         this.AnyError  = 0;
         if ( ! (0==this.A5891EtiquetaTermicaQtdeParcelas) && this.A5886EtiquetaTermicaCampo != "precoprodutoid" && this.A5886EtiquetaTermicaCampo != "precocodificado" && this.A5886EtiquetaTermicaCampo != "precocontrario" )
         {
            try {
               gxballoon.setError("Informe a Quantidade de Parcelas apenas quando o Campo for \"Preço\", \"Preço Codificado\" ou \"Preço ao Contrário\"");
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
   this.Valid_Etiquetatermicatipobarras=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICATIPOBARRAS");
         this.AnyError  = 0;
         if ( (""==this.A5899EtiquetaTermicaTipoBarras) && ( this.A5885EtiquetaTermicaTipoDados == "B" || this.A5886EtiquetaTermicaCampo == "codigobarrasproduto" ) )
         {
            try {
               gxballoon.setError("Informe o Tipo de Barras");
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
   this.Valid_Etiquetatermicaprecocodificado=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICAPRECOCODIFICADO");
         this.AnyError  = 0;
         if ( this.A6406EtiquetaTermicaPrecoCodificado == "S" && this.A5886EtiquetaTermicaCampo != "precoprodutoid" )
         {
            try {
               gxballoon.setError("Marque a opção \"Imprimir Valor Codificado\" apenas quando o Campo for \"Preço\"");
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
   this.Valid_Etiquetatermicatamanhofonte=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICATAMANHOFONTE");
         this.AnyError  = 0;
         try {
            if ( this.AV21EtiquetaTermicaLinguagem == "B" )
            {
               this.A5895EtiquetaTermicaTamanhoFonte =  gx.text.upper( this.A5895EtiquetaTermicaTamanhoFonte)  ;
            }
         }
         catch(e){}
         if ( this.AV21EtiquetaTermicaLinguagem == "A" && this.A5885EtiquetaTermicaTipoDados == "A" && ( gx.num.val( this.A5895EtiquetaTermicaTamanhoFonte) < 0 || gx.num.val( this.A5895EtiquetaTermicaTamanhoFonte) > 6 ) )
         {
            try {
               gxballoon.setError("Informe um numero entre 0 e 6 para o tamanho da fonte");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( gx.num.val( this.A5895EtiquetaTermicaTamanhoFonte) == 0 && this.A5885EtiquetaTermicaTipoDados != "I" && this.AV21EtiquetaTermicaLinguagem == "B" )
         {
            try {
               gxballoon.setError("Informe um valor de 1 a 9 para o Tamanho");
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
   this.Valid_Etiquetatermicacompfonte=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICACOMPFONTE");
         this.AnyError  = 0;
         if ( this.AV21EtiquetaTermicaLinguagem == "A" && this.A5885EtiquetaTermicaTipoDados == "A" && ( this.A5896EtiquetaTermicaCompFonte < 0 || this.A5896EtiquetaTermicaCompFonte > 9 ) )
         {
            try {
               gxballoon.setError("O campo Altura em etiquetas PPLA pode ter valor entre 0 e 9");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( (0==this.A5896EtiquetaTermicaCompFonte) && this.A5885EtiquetaTermicaTipoDados != "I" && this.AV21EtiquetaTermicaLinguagem == "B" )
         {
            try {
               gxballoon.setError("Informe o Comprimento");
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
   this.Valid_Etiquetatermicalargurafonte=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICALARGURAFONTE");
         this.AnyError  = 0;
         if ( this.AV21EtiquetaTermicaLinguagem == "A" && this.A5885EtiquetaTermicaTipoDados == "A" && ( this.A5897EtiquetaTermicaLarguraFonte < 0 || this.A5897EtiquetaTermicaLarguraFonte > 9 ) )
         {
            try {
               gxballoon.setError("O campo Largura em etiquetas PPLA pode ter valor entre 0 e 9");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( (0==this.A5897EtiquetaTermicaLarguraFonte) && this.A5885EtiquetaTermicaTipoDados != "I" && this.AV21EtiquetaTermicaLinguagem == "B" )
         {
            try {
               gxballoon.setError("Informe a Largura");
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
   this.Valid_Etiquetatermicatipotexto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICATIPOTEXTO");
         this.AnyError  = 0;
         if ( (""==this.A5898EtiquetaTermicaTipoTexto) && this.A5885EtiquetaTermicaTipoDados == "A" && this.A5885EtiquetaTermicaTipoDados != "I" )
         {
            try {
               gxballoon.setError("Informe o Tipo de Impressão");
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
   this.Valid_Etiquetatermicasubtipofonte=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICASUBTIPOFONTE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Etiquetatermicarotacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICAROTACAO");
         this.AnyError  = 0;
         if ( (""==this.A5894EtiquetaTermicaRotacao) && this.A5885EtiquetaTermicaTipoDados != "I" )
         {
            try {
               gxballoon.setError("Informe a Rotação");
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
   this.Valid_Etiquetatermicasuperiorinferio=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICASUPERIORINFERIO");
         this.AnyError  = 0;
         if ( (0==this.A5893EtiquetaTermicaSuperiorInferio) && this.AV21EtiquetaTermicaLinguagem == "B" )
         {
            try {
               gxballoon.setError("Informe a Coordenada Vertical");
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
   this.Valid_Etiquetatermicadiresq1=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICADIRESQ1");
         this.AnyError  = 0;
         if ( (0==this.A6360EtiquetaTermicaDirEsq1) && this.AV21EtiquetaTermicaLinguagem == "B" )
         {
            try {
               gxballoon.setError("Informe a Coordenada da Coluna 1");
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
   this.Valid_Etiquetatermicadiresq2=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICADIRESQ2");
         this.AnyError  = 0;
         if ( (0==this.A6361EtiquetaTermicaDirEsq2) && this.AV23EtiquetaTermicaNoColunas > 1 && this.AV21EtiquetaTermicaLinguagem == "B" )
         {
            try {
               gxballoon.setError("Informe a Coordenada da Coluna 2");
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
   this.Valid_Etiquetatermicadiresq3=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICADIRESQ3");
         this.AnyError  = 0;
         if ( (0==this.A6362EtiquetaTermicaDirEsq3) && this.AV23EtiquetaTermicaNoColunas > 2 && this.AV21EtiquetaTermicaLinguagem == "B" )
         {
            try {
               gxballoon.setError("Informe a Coordenada da Coluna 3");
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
   this.Valid_Etiquetatermicadiresq4=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICADIRESQ4");
         this.AnyError  = 0;
         if ( (0==this.A6363EtiquetaTermicaDirEsq4) && this.AV23EtiquetaTermicaNoColunas > 3 && this.AV21EtiquetaTermicaLinguagem == "B" )
         {
            try {
               gxballoon.setError("Informe a Coordenada da Coluna 4");
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
   this.Valid_Etiquetatermicadiresq5=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICADIRESQ5");
         this.AnyError  = 0;
         if ( (0==this.A6364EtiquetaTermicaDirEsq5) && this.AV23EtiquetaTermicaNoColunas > 4 && this.AV21EtiquetaTermicaLinguagem == "B" )
         {
            try {
               gxballoon.setError("Informe a Coordenada da Coluna 5");
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
   this.Valid_Etiquetatermicadiresq6=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICADIRESQ6");
         this.AnyError  = 0;
         if ( (0==this.A6365EtiquetaTermicaDirEsq6) && this.AV23EtiquetaTermicaNoColunas > 5 && this.AV21EtiquetaTermicaLinguagem == "B" )
         {
            try {
               gxballoon.setError("Informe a Coordenada da Coluna 6");
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
   this.Validv_Etiquetatermicalinguagem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vETIQUETATERMICALINGUAGEM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12932_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13932_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1493488_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1593488_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,18,21,23,26,28,31,33,36,38,41,43,46,48,51,53,56,58,61,63,64,65,68,70,73,75,79,83,85,90,93,95,98,100,103,105,108,110,113,115,116,119,122,124,127,129,132,134,135,136,137,138,139,143,146,148,150,159,160,161,163,165];
   this.GXLastCtrlId =165;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE5",grid:0};
   GXValidFnc[12]={fld:"TABLE3",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicamodelo,isvalid:null,rgrid:[],fld:"ETIQUETATERMICAMODELO",gxz:"Z5903EtiquetaTermicaModelo",gxold:"O5903EtiquetaTermicaModelo",gxvar:"A5903EtiquetaTermicaModelo",ucs:[],op:[18],ip:[18,17],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5903EtiquetaTermicaModelo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5903EtiquetaTermicaModelo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETATERMICAMODELO",gx.O.A5903EtiquetaTermicaModelo,0)},c2v:function(){gx.O.A5903EtiquetaTermicaModelo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ETIQUETATERMICAMODELO",'.')},nac:gx.falseFn};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETATERMICADESCRICAO",gxz:"Z5904EtiquetaTermicaDescricao",gxold:"O5904EtiquetaTermicaDescricao",gxvar:"A5904EtiquetaTermicaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5904EtiquetaTermicaDescricao=Value},v2z:function(Value){gx.O.Z5904EtiquetaTermicaDescricao=Value},v2c:function(){gx.fn.setControlValue("ETIQUETATERMICADESCRICAO",gx.O.A5904EtiquetaTermicaDescricao,0)},c2v:function(){gx.O.A5904EtiquetaTermicaDescricao=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETATERMICADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicasequencia,isvalid:null,rgrid:[],fld:"ETIQUETATERMICASEQUENCIA",gxz:"Z5905EtiquetaTermicaSequencia",gxold:"O5905EtiquetaTermicaSequencia",gxvar:"A5905EtiquetaTermicaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5905EtiquetaTermicaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5905EtiquetaTermicaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETATERMICASEQUENCIA",gx.O.A5905EtiquetaTermicaSequencia,0)},c2v:function(){gx.O.A5905EtiquetaTermicaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ETIQUETATERMICASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicatipodados,isvalid:null,rgrid:[],fld:"ETIQUETATERMICATIPODADOS",gxz:"Z5885EtiquetaTermicaTipoDados",gxold:"O5885EtiquetaTermicaTipoDados",gxvar:"A5885EtiquetaTermicaTipoDados",ucs:[],op:[28],ip:[28],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A5885EtiquetaTermicaTipoDados=Value},v2z:function(Value){gx.O.Z5885EtiquetaTermicaTipoDados=Value},v2c:function(){gx.fn.setComboBoxValue("ETIQUETATERMICATIPODADOS",gx.O.A5885EtiquetaTermicaTipoDados)},c2v:function(){gx.O.A5885EtiquetaTermicaTipoDados=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETATERMICATIPODADOS")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicacampo,isvalid:null,rgrid:[],fld:"ETIQUETATERMICACAMPO",gxz:"Z5886EtiquetaTermicaCampo",gxold:"O5886EtiquetaTermicaCampo",gxvar:"A5886EtiquetaTermicaCampo",ucs:[],op:[28,33],ip:[28,33],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A5886EtiquetaTermicaCampo=Value},v2z:function(Value){gx.O.Z5886EtiquetaTermicaCampo=Value},v2c:function(){gx.fn.setComboBoxValue("ETIQUETATERMICACAMPO",gx.O.A5886EtiquetaTermicaCampo)},c2v:function(){gx.O.A5886EtiquetaTermicaCampo=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETATERMICACAMPO")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicaposicaoinicial,isvalid:null,rgrid:[],fld:"ETIQUETATERMICAPOSICAOINICIAL",gxz:"Z5889EtiquetaTermicaPosicaoInicial",gxold:"O5889EtiquetaTermicaPosicaoInicial",gxvar:"A5889EtiquetaTermicaPosicaoInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5889EtiquetaTermicaPosicaoInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5889EtiquetaTermicaPosicaoInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETATERMICAPOSICAOINICIAL",gx.O.A5889EtiquetaTermicaPosicaoInicial,0)},c2v:function(){gx.O.A5889EtiquetaTermicaPosicaoInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ETIQUETATERMICAPOSICAOINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicaqtdecaracter,isvalid:null,rgrid:[],fld:"ETIQUETATERMICAQTDECARACTER",gxz:"Z5890EtiquetaTermicaQtdeCaracter",gxold:"O5890EtiquetaTermicaQtdeCaracter",gxvar:"A5890EtiquetaTermicaQtdeCaracter",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5890EtiquetaTermicaQtdeCaracter=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5890EtiquetaTermicaQtdeCaracter=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETATERMICAQTDECARACTER",gx.O.A5890EtiquetaTermicaQtdeCaracter,0)},c2v:function(){gx.O.A5890EtiquetaTermicaQtdeCaracter=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ETIQUETATERMICAQTDECARACTER",'.')},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicadescricaocampo,isvalid:null,rgrid:[],fld:"ETIQUETATERMICADESCRICAOCAMPO",gxz:"Z5887EtiquetaTermicaDescricaoCampo",gxold:"O5887EtiquetaTermicaDescricaoCampo",gxvar:"A5887EtiquetaTermicaDescricaoCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5887EtiquetaTermicaDescricaoCampo=Value},v2z:function(Value){gx.O.Z5887EtiquetaTermicaDescricaoCampo=Value},v2c:function(){gx.fn.setControlValue("ETIQUETATERMICADESCRICAOCAMPO",gx.O.A5887EtiquetaTermicaDescricaoCampo,0)},c2v:function(){gx.O.A5887EtiquetaTermicaDescricaoCampo=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETATERMICADESCRICAOCAMPO")},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicadescricaofixa,isvalid:null,rgrid:[],fld:"ETIQUETATERMICADESCRICAOFIXA",gxz:"Z5888EtiquetaTermicaDescricaoFixa",gxold:"O5888EtiquetaTermicaDescricaoFixa",gxvar:"A5888EtiquetaTermicaDescricaoFixa",ucs:[],op:[33,53],ip:[33,53],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5888EtiquetaTermicaDescricaoFixa=Value},v2z:function(Value){gx.O.Z5888EtiquetaTermicaDescricaoFixa=Value},v2c:function(){gx.fn.setControlValue("ETIQUETATERMICADESCRICAOFIXA",gx.O.A5888EtiquetaTermicaDescricaoFixa,0)},c2v:function(){gx.O.A5888EtiquetaTermicaDescricaoFixa=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETATERMICADESCRICAOFIXA")},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TXTNOMEIMG", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicanomeimagem,isvalid:null,rgrid:[],fld:"ETIQUETATERMICANOMEIMAGEM",gxz:"Z6405EtiquetaTermicaNomeImagem",gxold:"O6405EtiquetaTermicaNomeImagem",gxvar:"A6405EtiquetaTermicaNomeImagem",ucs:[],op:[28,58],ip:[28,58],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6405EtiquetaTermicaNomeImagem=Value},v2z:function(Value){gx.O.Z6405EtiquetaTermicaNomeImagem=Value},v2c:function(){gx.fn.setControlValue("ETIQUETATERMICANOMEIMAGEM",gx.O.A6405EtiquetaTermicaNomeImagem,0)},c2v:function(){gx.O.A6405EtiquetaTermicaNomeImagem=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETATERMICANOMEIMAGEM")},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[63]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precoid,isvalid:null,rgrid:[],fld:"PRECOID",gxz:"Z710PrecoId",gxold:"O710PrecoId",gxvar:"A710PrecoId",ucs:[],op:[64],ip:[64,63,65],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A710PrecoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z710PrecoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PRECOID",gx.O.A710PrecoId,0)},c2v:function(){gx.O.A710PrecoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PRECOID",'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECODESCRICAO",gxz:"ZV26PrecoDescricao",gxold:"OV26PrecoDescricao",gxvar:"AV26PrecoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26PrecoDescricao=Value},v2z:function(Value){gx.O.ZV26PrecoDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRECODESCRICAO",gx.O.AV26PrecoDescricao,0)},c2v:function(){gx.O.AV26PrecoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRECODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Precoempresaid,isvalid:null,rgrid:[],fld:"vPRECOEMPRESAID",gxz:"ZV22PrecoEmpresaId",gxold:"OV22PrecoEmpresaId",gxvar:"AV22PrecoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22PrecoEmpresaId=Value},v2z:function(Value){gx.O.ZV22PrecoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRECOEMPRESAID",gx.O.AV22PrecoEmpresaId,0)},c2v:function(){gx.O.AV22PrecoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRECOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicaqtdeparcelas,isvalid:null,rgrid:[],fld:"ETIQUETATERMICAQTDEPARCELAS",gxz:"Z5891EtiquetaTermicaQtdeParcelas",gxold:"O5891EtiquetaTermicaQtdeParcelas",gxvar:"A5891EtiquetaTermicaQtdeParcelas",ucs:[],op:[33,70],ip:[33,70],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5891EtiquetaTermicaQtdeParcelas=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5891EtiquetaTermicaQtdeParcelas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETATERMICAQTDEPARCELAS",gx.O.A5891EtiquetaTermicaQtdeParcelas,0)},c2v:function(){gx.O.A5891EtiquetaTermicaQtdeParcelas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ETIQUETATERMICAQTDEPARCELAS",'.')},nac:gx.falseFn};
   GXValidFnc[73]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicatipobarras,isvalid:null,rgrid:[],fld:"ETIQUETATERMICATIPOBARRAS",gxz:"Z5899EtiquetaTermicaTipoBarras",gxold:"O5899EtiquetaTermicaTipoBarras",gxvar:"A5899EtiquetaTermicaTipoBarras",ucs:[],op:[33,28,75],ip:[33,28,75],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A5899EtiquetaTermicaTipoBarras=Value},v2z:function(Value){gx.O.Z5899EtiquetaTermicaTipoBarras=Value},v2c:function(){gx.fn.setComboBoxValue("ETIQUETATERMICATIPOBARRAS",gx.O.A5899EtiquetaTermicaTipoBarras)},c2v:function(){gx.O.A5899EtiquetaTermicaTipoBarras=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETATERMICATIPOBARRAS")},nac:gx.falseFn};
   GXValidFnc[79]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicaprecocodificado,isvalid:null,rgrid:[],fld:"ETIQUETATERMICAPRECOCODIFICADO",gxz:"Z6406EtiquetaTermicaPrecoCodificado",gxold:"O6406EtiquetaTermicaPrecoCodificado",gxvar:"A6406EtiquetaTermicaPrecoCodificado",ucs:[],op:[33,79],ip:[33,79],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A6406EtiquetaTermicaPrecoCodificado=Value},v2z:function(Value){gx.O.Z6406EtiquetaTermicaPrecoCodificado=Value},v2c:function(){gx.fn.setCheckBoxValue("ETIQUETATERMICAPRECOCODIFICADO",gx.O.A6406EtiquetaTermicaPrecoCodificado,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6406EtiquetaTermicaPrecoCodificado=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETATERMICAPRECOCODIFICADO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 79 , function() {
   });
   GXValidFnc[83]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETATERMICASNNUMEROCODBAR",gxz:"Z8188EtiquetaTermicaSNNumeroCodBar",gxold:"O8188EtiquetaTermicaSNNumeroCodBar",gxvar:"A8188EtiquetaTermicaSNNumeroCodBar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A8188EtiquetaTermicaSNNumeroCodBar=Value},v2z:function(Value){gx.O.Z8188EtiquetaTermicaSNNumeroCodBar=Value},v2c:function(){gx.fn.setCheckBoxValue("ETIQUETATERMICASNNUMEROCODBAR",gx.O.A8188EtiquetaTermicaSNNumeroCodBar,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8188EtiquetaTermicaSNNumeroCodBar=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETATERMICASNNUMEROCODBAR")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 83 , function() {
   });
   GXValidFnc[85]={fld:"TABLE4",grid:0};
   GXValidFnc[90]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[93]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicatamanhofonte,isvalid:null,rgrid:[],fld:"ETIQUETATERMICATAMANHOFONTE",gxz:"Z5895EtiquetaTermicaTamanhoFonte",gxold:"O5895EtiquetaTermicaTamanhoFonte",gxvar:"A5895EtiquetaTermicaTamanhoFonte",ucs:[],op:[28,160,95],ip:[28,160,95],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5895EtiquetaTermicaTamanhoFonte=Value},v2z:function(Value){gx.O.Z5895EtiquetaTermicaTamanhoFonte=Value},v2c:function(){gx.fn.setControlValue("ETIQUETATERMICATAMANHOFONTE",gx.O.A5895EtiquetaTermicaTamanhoFonte,0)},c2v:function(){gx.O.A5895EtiquetaTermicaTamanhoFonte=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETATERMICATAMANHOFONTE")},nac:gx.falseFn};
   GXValidFnc[98]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicacompfonte,isvalid:null,rgrid:[],fld:"ETIQUETATERMICACOMPFONTE",gxz:"Z5896EtiquetaTermicaCompFonte",gxold:"O5896EtiquetaTermicaCompFonte",gxvar:"A5896EtiquetaTermicaCompFonte",ucs:[],op:[100,28,160],ip:[100,28,160],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5896EtiquetaTermicaCompFonte=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5896EtiquetaTermicaCompFonte=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETATERMICACOMPFONTE",gx.O.A5896EtiquetaTermicaCompFonte,0)},c2v:function(){gx.O.A5896EtiquetaTermicaCompFonte=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ETIQUETATERMICACOMPFONTE",'.')},nac:gx.falseFn};
   GXValidFnc[103]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[105]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicalargurafonte,isvalid:null,rgrid:[],fld:"ETIQUETATERMICALARGURAFONTE",gxz:"Z5897EtiquetaTermicaLarguraFonte",gxold:"O5897EtiquetaTermicaLarguraFonte",gxvar:"A5897EtiquetaTermicaLarguraFonte",ucs:[],op:[105,28,160],ip:[105,28,160],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5897EtiquetaTermicaLarguraFonte=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5897EtiquetaTermicaLarguraFonte=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETATERMICALARGURAFONTE",gx.O.A5897EtiquetaTermicaLarguraFonte,0)},c2v:function(){gx.O.A5897EtiquetaTermicaLarguraFonte=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ETIQUETATERMICALARGURAFONTE",'.')},nac:gx.falseFn};
   GXValidFnc[108]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[110]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicatipotexto,isvalid:null,rgrid:[],fld:"ETIQUETATERMICATIPOTEXTO",gxz:"Z5898EtiquetaTermicaTipoTexto",gxold:"O5898EtiquetaTermicaTipoTexto",gxvar:"A5898EtiquetaTermicaTipoTexto",ucs:[],op:[28,110],ip:[28,110],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A5898EtiquetaTermicaTipoTexto=Value},v2z:function(Value){gx.O.Z5898EtiquetaTermicaTipoTexto=Value},v2c:function(){gx.fn.setComboBoxValue("ETIQUETATERMICATIPOTEXTO",gx.O.A5898EtiquetaTermicaTipoTexto)},c2v:function(){gx.O.A5898EtiquetaTermicaTipoTexto=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETATERMICATIPOTEXTO")},nac:gx.falseFn};
   GXValidFnc[113]={fld:"SUBTIPO", format:0,grid:0};
   GXValidFnc[115]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicasubtipofonte,isvalid:null,rgrid:[],fld:"ETIQUETATERMICASUBTIPOFONTE",gxz:"Z6407EtiquetaTermicaSubtipoFonte",gxold:"O6407EtiquetaTermicaSubtipoFonte",gxvar:"A6407EtiquetaTermicaSubtipoFonte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A6407EtiquetaTermicaSubtipoFonte=Value},v2z:function(Value){gx.O.Z6407EtiquetaTermicaSubtipoFonte=Value},v2c:function(){gx.fn.setComboBoxValue("ETIQUETATERMICASUBTIPOFONTE",gx.O.A6407EtiquetaTermicaSubtipoFonte)},c2v:function(){gx.O.A6407EtiquetaTermicaSubtipoFonte=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETATERMICASUBTIPOFONTE")},nac:gx.falseFn};
   GXValidFnc[116]={fld:"PULALINHA",grid:0};
   GXValidFnc[119]={fld:"TABLE6",grid:0};
   GXValidFnc[122]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[124]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicarotacao,isvalid:null,rgrid:[],fld:"ETIQUETATERMICAROTACAO",gxz:"Z5894EtiquetaTermicaRotacao",gxold:"O5894EtiquetaTermicaRotacao",gxvar:"A5894EtiquetaTermicaRotacao",ucs:[],op:[28,124],ip:[28,124],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A5894EtiquetaTermicaRotacao=Value},v2z:function(Value){gx.O.Z5894EtiquetaTermicaRotacao=Value},v2c:function(){gx.fn.setComboBoxValue("ETIQUETATERMICAROTACAO",gx.O.A5894EtiquetaTermicaRotacao)},c2v:function(){gx.O.A5894EtiquetaTermicaRotacao=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETATERMICAROTACAO")},nac:gx.falseFn};
   GXValidFnc[127]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[129]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicasuperiorinferio,isvalid:null,rgrid:[],fld:"ETIQUETATERMICASUPERIORINFERIO",gxz:"Z5893EtiquetaTermicaSuperiorInferio",gxold:"O5893EtiquetaTermicaSuperiorInferio",gxvar:"A5893EtiquetaTermicaSuperiorInferio",ucs:[],op:[160,129],ip:[160,129],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5893EtiquetaTermicaSuperiorInferio=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5893EtiquetaTermicaSuperiorInferio=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETATERMICASUPERIORINFERIO",gx.O.A5893EtiquetaTermicaSuperiorInferio,0)},c2v:function(){gx.O.A5893EtiquetaTermicaSuperiorInferio=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ETIQUETATERMICASUPERIORINFERIO",'.')},nac:gx.falseFn};
   GXValidFnc[132]={fld:"POS1", format:0,grid:0};
   GXValidFnc[134]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicadiresq1,isvalid:null,rgrid:[],fld:"ETIQUETATERMICADIRESQ1",gxz:"Z6360EtiquetaTermicaDirEsq1",gxold:"O6360EtiquetaTermicaDirEsq1",gxvar:"A6360EtiquetaTermicaDirEsq1",ucs:[],op:[160,134],ip:[160,134],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6360EtiquetaTermicaDirEsq1=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6360EtiquetaTermicaDirEsq1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETATERMICADIRESQ1",gx.O.A6360EtiquetaTermicaDirEsq1,0)},c2v:function(){gx.O.A6360EtiquetaTermicaDirEsq1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ETIQUETATERMICADIRESQ1",'.')},nac:gx.falseFn};
   GXValidFnc[135]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicadiresq2,isvalid:null,rgrid:[],fld:"ETIQUETATERMICADIRESQ2",gxz:"Z6361EtiquetaTermicaDirEsq2",gxold:"O6361EtiquetaTermicaDirEsq2",gxvar:"A6361EtiquetaTermicaDirEsq2",ucs:[],op:[160,135],ip:[160,135],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6361EtiquetaTermicaDirEsq2=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6361EtiquetaTermicaDirEsq2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETATERMICADIRESQ2",gx.O.A6361EtiquetaTermicaDirEsq2,0)},c2v:function(){gx.O.A6361EtiquetaTermicaDirEsq2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ETIQUETATERMICADIRESQ2",'.')},nac:gx.falseFn};
   GXValidFnc[136]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicadiresq3,isvalid:null,rgrid:[],fld:"ETIQUETATERMICADIRESQ3",gxz:"Z6362EtiquetaTermicaDirEsq3",gxold:"O6362EtiquetaTermicaDirEsq3",gxvar:"A6362EtiquetaTermicaDirEsq3",ucs:[],op:[160,136],ip:[160,136],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6362EtiquetaTermicaDirEsq3=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6362EtiquetaTermicaDirEsq3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETATERMICADIRESQ3",gx.O.A6362EtiquetaTermicaDirEsq3,0)},c2v:function(){gx.O.A6362EtiquetaTermicaDirEsq3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ETIQUETATERMICADIRESQ3",'.')},nac:gx.falseFn};
   GXValidFnc[137]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicadiresq4,isvalid:null,rgrid:[],fld:"ETIQUETATERMICADIRESQ4",gxz:"Z6363EtiquetaTermicaDirEsq4",gxold:"O6363EtiquetaTermicaDirEsq4",gxvar:"A6363EtiquetaTermicaDirEsq4",ucs:[],op:[160,137],ip:[160,137],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6363EtiquetaTermicaDirEsq4=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6363EtiquetaTermicaDirEsq4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETATERMICADIRESQ4",gx.O.A6363EtiquetaTermicaDirEsq4,0)},c2v:function(){gx.O.A6363EtiquetaTermicaDirEsq4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ETIQUETATERMICADIRESQ4",'.')},nac:gx.falseFn};
   GXValidFnc[138]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicadiresq5,isvalid:null,rgrid:[],fld:"ETIQUETATERMICADIRESQ5",gxz:"Z6364EtiquetaTermicaDirEsq5",gxold:"O6364EtiquetaTermicaDirEsq5",gxvar:"A6364EtiquetaTermicaDirEsq5",ucs:[],op:[160,138],ip:[160,138],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6364EtiquetaTermicaDirEsq5=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6364EtiquetaTermicaDirEsq5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETATERMICADIRESQ5",gx.O.A6364EtiquetaTermicaDirEsq5,0)},c2v:function(){gx.O.A6364EtiquetaTermicaDirEsq5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ETIQUETATERMICADIRESQ5",'.')},nac:gx.falseFn};
   GXValidFnc[139]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicadiresq6,isvalid:null,rgrid:[],fld:"ETIQUETATERMICADIRESQ6",gxz:"Z6365EtiquetaTermicaDirEsq6",gxold:"O6365EtiquetaTermicaDirEsq6",gxvar:"A6365EtiquetaTermicaDirEsq6",ucs:[],op:[160,139],ip:[160,139],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6365EtiquetaTermicaDirEsq6=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6365EtiquetaTermicaDirEsq6=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETATERMICADIRESQ6",gx.O.A6365EtiquetaTermicaDirEsq6,0)},c2v:function(){gx.O.A6365EtiquetaTermicaDirEsq6=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ETIQUETATERMICADIRESQ6",'.')},nac:gx.falseFn};
   GXValidFnc[143]={fld:"TABLE7",grid:0};
   GXValidFnc[146]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[148]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETATERMICALAYOUTUSRALT",gxz:"Z5901EtiquetaTermicaLayoutUsrAlt",gxold:"O5901EtiquetaTermicaLayoutUsrAlt",gxvar:"A5901EtiquetaTermicaLayoutUsrAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5901EtiquetaTermicaLayoutUsrAlt=Value},v2z:function(Value){gx.O.Z5901EtiquetaTermicaLayoutUsrAlt=Value},v2c:function(){gx.fn.setControlValue("ETIQUETATERMICALAYOUTUSRALT",gx.O.A5901EtiquetaTermicaLayoutUsrAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5901EtiquetaTermicaLayoutUsrAlt=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETATERMICALAYOUTUSRALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 148 , function() {
   });
   GXValidFnc[150]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETATERMICALAYOUTDTHRALT",gxz:"Z5900EtiquetaTermicaLayoutDtHrAlt",gxold:"O5900EtiquetaTermicaLayoutDtHrAlt",gxvar:"A5900EtiquetaTermicaLayoutDtHrAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5900EtiquetaTermicaLayoutDtHrAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5900EtiquetaTermicaLayoutDtHrAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETATERMICALAYOUTDTHRALT",gx.O.A5900EtiquetaTermicaLayoutDtHrAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5900EtiquetaTermicaLayoutDtHrAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ETIQUETATERMICALAYOUTDTHRALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 150 , function() {
   });
   GXValidFnc[159]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[160]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Etiquetatermicalinguagem,isvalid:null,rgrid:[],fld:"vETIQUETATERMICALINGUAGEM",gxz:"ZV21EtiquetaTermicaLinguagem",gxold:"OV21EtiquetaTermicaLinguagem",gxvar:"AV21EtiquetaTermicaLinguagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21EtiquetaTermicaLinguagem=Value},v2z:function(Value){gx.O.ZV21EtiquetaTermicaLinguagem=Value},v2c:function(){gx.fn.setControlValue("vETIQUETATERMICALINGUAGEM",gx.O.AV21EtiquetaTermicaLinguagem,0)},c2v:function(){gx.O.AV21EtiquetaTermicaLinguagem=this.val()},val:function(){return gx.fn.getControlValue("vETIQUETATERMICALINGUAGEM")},nac:gx.falseFn};
   GXValidFnc[161]={fld:"JS", format:2,grid:0};
   GXValidFnc[163]={fld:"BTNHELP",grid:0};
   GXValidFnc[165]={fld:"PROMPT_710",grid:488};
   this.A5903EtiquetaTermicaModelo = 0 ;
   this.Z5903EtiquetaTermicaModelo = 0 ;
   this.O5903EtiquetaTermicaModelo = 0 ;
   this.A5904EtiquetaTermicaDescricao = "" ;
   this.Z5904EtiquetaTermicaDescricao = "" ;
   this.O5904EtiquetaTermicaDescricao = "" ;
   this.A5905EtiquetaTermicaSequencia = 0 ;
   this.Z5905EtiquetaTermicaSequencia = 0 ;
   this.O5905EtiquetaTermicaSequencia = 0 ;
   this.A5885EtiquetaTermicaTipoDados = "" ;
   this.Z5885EtiquetaTermicaTipoDados = "" ;
   this.O5885EtiquetaTermicaTipoDados = "" ;
   this.A5886EtiquetaTermicaCampo = "" ;
   this.Z5886EtiquetaTermicaCampo = "" ;
   this.O5886EtiquetaTermicaCampo = "" ;
   this.A5889EtiquetaTermicaPosicaoInicial = 0 ;
   this.Z5889EtiquetaTermicaPosicaoInicial = 0 ;
   this.O5889EtiquetaTermicaPosicaoInicial = 0 ;
   this.A5890EtiquetaTermicaQtdeCaracter = 0 ;
   this.Z5890EtiquetaTermicaQtdeCaracter = 0 ;
   this.O5890EtiquetaTermicaQtdeCaracter = 0 ;
   this.A5887EtiquetaTermicaDescricaoCampo = "" ;
   this.Z5887EtiquetaTermicaDescricaoCampo = "" ;
   this.O5887EtiquetaTermicaDescricaoCampo = "" ;
   this.A5888EtiquetaTermicaDescricaoFixa = "" ;
   this.Z5888EtiquetaTermicaDescricaoFixa = "" ;
   this.O5888EtiquetaTermicaDescricaoFixa = "" ;
   this.A6405EtiquetaTermicaNomeImagem = "" ;
   this.Z6405EtiquetaTermicaNomeImagem = "" ;
   this.O6405EtiquetaTermicaNomeImagem = "" ;
   this.A710PrecoId = 0 ;
   this.Z710PrecoId = 0 ;
   this.O710PrecoId = 0 ;
   this.AV26PrecoDescricao = "" ;
   this.ZV26PrecoDescricao = "" ;
   this.OV26PrecoDescricao = "" ;
   this.AV22PrecoEmpresaId = "" ;
   this.ZV22PrecoEmpresaId = "" ;
   this.OV22PrecoEmpresaId = "" ;
   this.A5891EtiquetaTermicaQtdeParcelas = 0 ;
   this.Z5891EtiquetaTermicaQtdeParcelas = 0 ;
   this.O5891EtiquetaTermicaQtdeParcelas = 0 ;
   this.A5899EtiquetaTermicaTipoBarras = "" ;
   this.Z5899EtiquetaTermicaTipoBarras = "" ;
   this.O5899EtiquetaTermicaTipoBarras = "" ;
   this.A6406EtiquetaTermicaPrecoCodificado = "" ;
   this.Z6406EtiquetaTermicaPrecoCodificado = "" ;
   this.O6406EtiquetaTermicaPrecoCodificado = "" ;
   this.A8188EtiquetaTermicaSNNumeroCodBar = "" ;
   this.Z8188EtiquetaTermicaSNNumeroCodBar = "" ;
   this.O8188EtiquetaTermicaSNNumeroCodBar = "" ;
   this.A5895EtiquetaTermicaTamanhoFonte = "" ;
   this.Z5895EtiquetaTermicaTamanhoFonte = "" ;
   this.O5895EtiquetaTermicaTamanhoFonte = "" ;
   this.A5896EtiquetaTermicaCompFonte = 0 ;
   this.Z5896EtiquetaTermicaCompFonte = 0 ;
   this.O5896EtiquetaTermicaCompFonte = 0 ;
   this.A5897EtiquetaTermicaLarguraFonte = 0 ;
   this.Z5897EtiquetaTermicaLarguraFonte = 0 ;
   this.O5897EtiquetaTermicaLarguraFonte = 0 ;
   this.A5898EtiquetaTermicaTipoTexto = "" ;
   this.Z5898EtiquetaTermicaTipoTexto = "" ;
   this.O5898EtiquetaTermicaTipoTexto = "" ;
   this.A6407EtiquetaTermicaSubtipoFonte = "" ;
   this.Z6407EtiquetaTermicaSubtipoFonte = "" ;
   this.O6407EtiquetaTermicaSubtipoFonte = "" ;
   this.A5894EtiquetaTermicaRotacao = "" ;
   this.Z5894EtiquetaTermicaRotacao = "" ;
   this.O5894EtiquetaTermicaRotacao = "" ;
   this.A5893EtiquetaTermicaSuperiorInferio = 0 ;
   this.Z5893EtiquetaTermicaSuperiorInferio = 0 ;
   this.O5893EtiquetaTermicaSuperiorInferio = 0 ;
   this.A6360EtiquetaTermicaDirEsq1 = 0 ;
   this.Z6360EtiquetaTermicaDirEsq1 = 0 ;
   this.O6360EtiquetaTermicaDirEsq1 = 0 ;
   this.A6361EtiquetaTermicaDirEsq2 = 0 ;
   this.Z6361EtiquetaTermicaDirEsq2 = 0 ;
   this.O6361EtiquetaTermicaDirEsq2 = 0 ;
   this.A6362EtiquetaTermicaDirEsq3 = 0 ;
   this.Z6362EtiquetaTermicaDirEsq3 = 0 ;
   this.O6362EtiquetaTermicaDirEsq3 = 0 ;
   this.A6363EtiquetaTermicaDirEsq4 = 0 ;
   this.Z6363EtiquetaTermicaDirEsq4 = 0 ;
   this.O6363EtiquetaTermicaDirEsq4 = 0 ;
   this.A6364EtiquetaTermicaDirEsq5 = 0 ;
   this.Z6364EtiquetaTermicaDirEsq5 = 0 ;
   this.O6364EtiquetaTermicaDirEsq5 = 0 ;
   this.A6365EtiquetaTermicaDirEsq6 = 0 ;
   this.Z6365EtiquetaTermicaDirEsq6 = 0 ;
   this.O6365EtiquetaTermicaDirEsq6 = 0 ;
   this.A5901EtiquetaTermicaLayoutUsrAlt = "" ;
   this.Z5901EtiquetaTermicaLayoutUsrAlt = "" ;
   this.O5901EtiquetaTermicaLayoutUsrAlt = "" ;
   this.A5900EtiquetaTermicaLayoutDtHrAlt = gx.date.nullDate() ;
   this.Z5900EtiquetaTermicaLayoutDtHrAlt = gx.date.nullDate() ;
   this.O5900EtiquetaTermicaLayoutDtHrAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV21EtiquetaTermicaLinguagem = "" ;
   this.ZV21EtiquetaTermicaLinguagem = "" ;
   this.OV21EtiquetaTermicaLinguagem = "" ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV34Pgmname = "" ;
   this.AV35Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV22PrecoEmpresaId = "" ;
   this.AV33PrecoTipo = "" ;
   this.AV25SNExistePreco = "" ;
   this.AV24SnPreenchido = "" ;
   this.AV18EtiquetaTermicaModelo = 0 ;
   this.AV19EtiquetaTermicaSequencia = 0 ;
   this.AV21EtiquetaTermicaLinguagem = "" ;
   this.AV23EtiquetaTermicaNoColunas = 0 ;
   this.A5902EtiquetaTermicaEmpresaId = "" ;
   this.A5903EtiquetaTermicaModelo = 0 ;
   this.A5905EtiquetaTermicaSequencia = 0 ;
   this.A5895EtiquetaTermicaTamanhoFonte = "" ;
   this.AV26PrecoDescricao = "" ;
   this.A6407EtiquetaTermicaSubtipoFonte = "" ;
   this.AV20SnAlterou = "" ;
   this.A5904EtiquetaTermicaDescricao = "" ;
   this.A5885EtiquetaTermicaTipoDados = "" ;
   this.A5886EtiquetaTermicaCampo = "" ;
   this.A5887EtiquetaTermicaDescricaoCampo = "" ;
   this.A5888EtiquetaTermicaDescricaoFixa = "" ;
   this.A5889EtiquetaTermicaPosicaoInicial = 0 ;
   this.A5890EtiquetaTermicaQtdeCaracter = 0 ;
   this.A710PrecoId = 0 ;
   this.A5891EtiquetaTermicaQtdeParcelas = 0 ;
   this.A6406EtiquetaTermicaPrecoCodificado = "" ;
   this.A5893EtiquetaTermicaSuperiorInferio = 0 ;
   this.A6360EtiquetaTermicaDirEsq1 = 0 ;
   this.A6361EtiquetaTermicaDirEsq2 = 0 ;
   this.A6362EtiquetaTermicaDirEsq3 = 0 ;
   this.A6363EtiquetaTermicaDirEsq4 = 0 ;
   this.A6364EtiquetaTermicaDirEsq5 = 0 ;
   this.A6365EtiquetaTermicaDirEsq6 = 0 ;
   this.A5894EtiquetaTermicaRotacao = "" ;
   this.A5896EtiquetaTermicaCompFonte = 0 ;
   this.A5897EtiquetaTermicaLarguraFonte = 0 ;
   this.A5898EtiquetaTermicaTipoTexto = "" ;
   this.A5899EtiquetaTermicaTipoBarras = "" ;
   this.A6405EtiquetaTermicaNomeImagem = "" ;
   this.A5900EtiquetaTermicaLayoutDtHrAlt = gx.date.nullDate() ;
   this.A5901EtiquetaTermicaLayoutUsrAlt = "" ;
   this.A8188EtiquetaTermicaSNNumeroCodBar = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12932_client": ["'FECHAR'", true] ,"e13932_client": ["AFTER TRN", true] ,"e1493488_client": ["ENTER", true] ,"e1593488_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO',hsh:true},{av:'AV19EtiquetaTermicaSequencia',fld:'vETIQUETATERMICASEQUENCIA',hsh:true},{av:'AV21EtiquetaTermicaLinguagem',fld:'vETIQUETATERMICALINGUAGEM',hsh:true},{av:'AV23EtiquetaTermicaNoColunas',fld:'vETIQUETATERMICANOCOLUNAS',hsh:true},{av:'Gx_mode',fld:'vMODE',hsh:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV18EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO',hsh:true},{av:'AV21EtiquetaTermicaLinguagem',fld:'vETIQUETATERMICALINGUAGEM',hsh:true},{av:'AV23EtiquetaTermicaNoColunas',fld:'vETIQUETATERMICANOCOLUNAS',hsh:true}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_710", [63]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A5902EtiquetaTermicaEmpresaId", "ETIQUETATERMICAEMPRESAID", 0, "char");
   this.setVCMap("AV18EtiquetaTermicaModelo", "vETIQUETATERMICAMODELO", 0, "int");
   this.setVCMap("AV19EtiquetaTermicaSequencia", "vETIQUETATERMICASEQUENCIA", 0, "int");
   this.setVCMap("AV24SnPreenchido", "vSNPREENCHIDO", 0, "char");
   this.setVCMap("AV20SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV33PrecoTipo", "vPRECOTIPO", 0, "char");
   this.setVCMap("AV25SNExistePreco", "vSNEXISTEPRECO", 0, "char");
   this.setVCMap("AV23EtiquetaTermicaNoColunas", "vETIQUETATERMICANOCOLUNAS", 0, "int");
   this.setVCMap("AV35Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV34Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 488 ]= ["O710PrecoId","O6406EtiquetaTermicaPrecoCodificado","O5898EtiquetaTermicaTipoTexto","O5885EtiquetaTermicaTipoDados","O5899EtiquetaTermicaTipoBarras","O6407EtiquetaTermicaSubtipoFonte","O5895EtiquetaTermicaTamanhoFonte","O5893EtiquetaTermicaSuperiorInferio","O5894EtiquetaTermicaRotacao","O5891EtiquetaTermicaQtdeParcelas","O5890EtiquetaTermicaQtdeCaracter","O5889EtiquetaTermicaPosicaoInicial","O5897EtiquetaTermicaLarguraFonte","O6365EtiquetaTermicaDirEsq6","O6364EtiquetaTermicaDirEsq5","O6363EtiquetaTermicaDirEsq4","O6362EtiquetaTermicaDirEsq3","O6361EtiquetaTermicaDirEsq2","O6360EtiquetaTermicaDirEsq1","O6405EtiquetaTermicaNomeImagem","O5888EtiquetaTermicaDescricaoFixa","O5887EtiquetaTermicaDescricaoCampo","O5896EtiquetaTermicaCompFonte","O5886EtiquetaTermicaCampo"] ;
});
gx.setParentObj(new tlayoutmodeloetiquetatermica());
