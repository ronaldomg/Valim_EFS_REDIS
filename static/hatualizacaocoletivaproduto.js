/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:28:50.45
*/
gx.evt.autoSkip = false;
gx.define('hatualizacaocoletivaproduto', false, function () {
   this.ServerClass =  "hatualizacaocoletivaproduto" ;
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
   this.Validv_Produtounidadecompraid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOUNIDADECOMPRAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtounidadevendaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOUNIDADEVENDAID");
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
   this.Validv_Produtocfoentdenestadocod=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOCFOENTDENESTADOCOD");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtocfoentforaestadocod=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOCFOENTFORAESTADOCOD");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtocfoentinscdenestadocod=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOCFOENTINSCDENESTADOCOD");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtocfoentinscforestadocod=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOCFOENTINSCFORESTADOCOD");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtocfosaidenestadocod=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOCFOSAIDENESTADOCOD");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtocfosaiforaestadocod=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOCFOSAIFORAESTADOCOD");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtocfosaiinscdenestadocod=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOCFOSAIINSCDENESTADOCOD");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtocfosaiinscforestadocod=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOCFOSAIINSCFORESTADOCOD");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Generoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vGENEROID");
         this.AnyError  = 0;

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
   this.Validv_Listaservicoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLISTASERVICOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtosittridenenttipoicms=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOSITTRIDENENTTIPOICMS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtosittridenentcodicms=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOSITTRIDENENTCODICMS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtosittridensaicodicms=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOSITTRIDENSAICODICMS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtosittriforenttipoicms=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOSITTRIFORENTTIPOICMS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtosittriforentcodicms=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOSITTRIFORENTCODICMS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtosittriforsaicodicms=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOSITTRIFORSAICODICMS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtosittrientpiscodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOSITTRIENTPISCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtosittrisaipiscodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOSITTRISAIPISCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtosittriextpiscodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOSITTRIEXTPISCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtosittrientcofcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOSITTRIENTCOFCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtosittrisaicofcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOSITTRISAICOFCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtosittriexpcofcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOSITTRIEXPCOFCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtogrupoprecoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOGRUPOPRECOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Mvaprodutouf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vMVAPRODUTOUF");
         this.AnyError  = 0;
         if ( ! ( this.AV256MVAProdutoUf == "" || this.AV256MVAProdutoUf == "99" || this.AV256MVAProdutoUf == "AC" || this.AV256MVAProdutoUf == "AL" || this.AV256MVAProdutoUf == "AP" || this.AV256MVAProdutoUf == "AM" || this.AV256MVAProdutoUf == "BA" || this.AV256MVAProdutoUf == "CE" || this.AV256MVAProdutoUf == "DF" || this.AV256MVAProdutoUf == "ES" || this.AV256MVAProdutoUf == "GO" || this.AV256MVAProdutoUf == "MA" || this.AV256MVAProdutoUf == "MT" || this.AV256MVAProdutoUf == "MS" || this.AV256MVAProdutoUf == "MG" || this.AV256MVAProdutoUf == "PA" || this.AV256MVAProdutoUf == "PB" || this.AV256MVAProdutoUf == "PR" || this.AV256MVAProdutoUf == "PE" || this.AV256MVAProdutoUf == "PI" || this.AV256MVAProdutoUf == "RJ" || this.AV256MVAProdutoUf == "RN" || this.AV256MVAProdutoUf == "RS" || this.AV256MVAProdutoUf == "RO" || this.AV256MVAProdutoUf == "RR" || this.AV256MVAProdutoUf == "SC" || this.AV256MVAProdutoUf == "SP" || this.AV256MVAProdutoUf == "SE" || this.AV256MVAProdutoUf == "TO" ) )
         {
            try {
               gxballoon.setError("Campo MVAProdutoUf fora do intervalo");
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
   this.Validv_Precoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRECOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Nbscodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNBSCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Subgrupoprodutoidatu=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSUBGRUPOPRODUTOIDATU");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Grupoprodutoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vGRUPOPRODUTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Subgrupoprodutoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSUBGRUPOPRODUTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtosittridenenttipoicmsfil=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOSITTRIDENENTTIPOICMSFIL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtosittridenentcodicmsfil=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOSITTRIDENENTCODICMSFIL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtosittriforenttipoicmsfil=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOSITTRIFORENTTIPOICMSFIL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtosittriforentcodicmsfil=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOSITTRIFORENTCODICMSFIL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtosittridensaitipoicmsfil=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOSITTRIDENSAITIPOICMSFIL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtosittridensaicodicmsfil=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOSITTRIDENSAICODICMSFIL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtosittriforsaitipoicmsfil=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOSITTRIFORSAITIPOICMSFIL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtosittriforsaicodicmsfil=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOSITTRIFORSAICODICMSFIL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipositpis=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOSITPIS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipositicms=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOSITICMS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipositcofins=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOSITCOFINS");
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
   this.Validv_Unidadeempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vUNIDADEEMPRESAID");
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
   this.Validv_Empresacontacontabilempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESACONTACONTABILEMPRESAID");
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
   this.Validv_Contacontabilsituacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTACONTABILSITUACAO");
         this.AnyError  = 0;
         if ( ! ( this.AV237ContaContabilSituacao == "I" || this.AV237ContaContabilSituacao == "A" ) )
         {
            try {
               gxballoon.setError("Campo ContaContabilSituacao fora do intervalo");
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
   this.Validv_Contacontabiltipolancamento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTACONTABILTIPOLANCAMENTO");
         this.AnyError  = 0;
         if ( ! ( this.AV236ContaContabilTipoLancamento == "C" || this.AV236ContaContabilTipoLancamento == "E" || this.AV236ContaContabilTipoLancamento == "N" ) )
         {
            try {
               gxballoon.setError("Campo ContaContabilTipoLancamento fora do intervalo");
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
   this.Validv_Empresapessoasempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPESSOASEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Subgrupoprodutoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSUBGRUPOPRODUTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Grupoprodutoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vGRUPOPRODUTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s122_client=function()
   {
      gx.fn.setCtrlProperty("vQTDECHAR","Visible", 0 );
      gx.fn.setCtrlProperty("vPFILIALID","Visible", 0 );
      gx.fn.setCtrlProperty("vTODAY","Visible", 0 );
      gx.fn.setCtrlProperty("vPPRECONULO","Visible", 0 );
      gx.fn.setCtrlProperty("vPPRODUTOCATEGORIA","Visible", 0 );
      gx.fn.setCtrlProperty("vPGRUPOPRODUTOID","Visible", 0 );
      gx.fn.setCtrlProperty("vPSUBGRUPOPRODUTOID","Visible", 0 );
      gx.fn.setCtrlProperty("vPPRODUTOCODIGOID","Visible", 0 );
      gx.fn.setCtrlProperty("vPLOTEPRODUTOCOMBINACAO","Visible", 0 );
      gx.fn.setCtrlProperty("vINTAUXIN","Visible", 0 );
      gx.fn.setCtrlProperty("vPPRODUTOREFERENCIAPROMPT","Visible", 0 );
      gx.fn.setCtrlProperty("vPCODIGOBARRASPRODUTOBARRA","Visible", 0 );
      gx.fn.setCtrlProperty("vTIPOSITICMS","Visible", 0 );
      gx.fn.setCtrlProperty("vTIPOSITIPI","Visible", 0 );
      gx.fn.setCtrlProperty("vTIPOSITPIS","Visible", 0 );
      gx.fn.setCtrlProperty("vTIPOSITCOFINS","Visible", 0 );
      gx.fn.setCtrlProperty("vPRODUTOSITTRIDENSAITIPOICMS","Visible", 0 );
      gx.fn.setCtrlProperty("vPRODUTOSITTRIFORSAITIPOICMS","Visible", 0 );
      gx.fn.setCtrlProperty("vPRODUTOSITTRIENTTIPOIPI","Visible", 0 );
      gx.fn.setCtrlProperty("vPRODUTOSITTRISAITIPOIPI","Visible", 0 );
      gx.fn.setCtrlProperty("vPRODUTOSITTRISAIPISTIPO","Visible", 0 );
      gx.fn.setCtrlProperty("vPRODUTOSITTRIENTPISTIPO","Visible", 0 );
      gx.fn.setCtrlProperty("vPRODUTOSITTRIEXTPISTIPO","Visible", 0 );
      gx.fn.setCtrlProperty("vEMPRESACONTACONTABILEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("vFAMILIAEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("vEMPRESAPESSOASEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("vUNIDADEEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("vCHAMAONBLURMASCARA","Visible", 0 );
      gx.fn.setCtrlProperty("vPRODUTOSITTRIENTCOFTIPO","Visible", 0 );
      gx.fn.setCtrlProperty("vPRODUTOSITTRIEXTCOFTIPO","Visible", 0 );
      gx.fn.setCtrlProperty("vPRODUTOSITTRISAICOFTIPO","Visible", 0 );
      gx.fn.setCtrlProperty("vPRODUTOEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("vQTDECARACTERES","Visible", 0 );
      gx.fn.setCtrlProperty("vNCMCODIGO","Visible", 0 );
      gx.fn.setCtrlProperty("vNCMCODIGOAUX","Visible", 0 );
      gx.fn.setCtrlProperty("vNBSCODIGOAUX","Visible", 0 );
      gx.fn.setCtrlProperty("vSUBGRUPOPRODUTOEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("vGRUPOPRODUTOEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("vENTD","Visible", 0 );
      gx.fn.setCtrlProperty("vENTF","Visible", 0 );
      gx.fn.setCtrlProperty("vSAID","Visible", 0 );
      gx.fn.setCtrlProperty("vSAIF","Visible", 0 );
      gx.fn.setCtrlProperty("vCONTACONTABILTIPOLANCAMENTO","Visible", 0 );
      gx.fn.setCtrlProperty("vCONTACONTABILSITUACAO","Visible", 0 );
      gx.fn.setCtrlProperty("vSNVENDA","Visible", 0 );
      gx.fn.setCtrlProperty("vPRECOEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("vPRODUTOSITTRIDENSAITIPOICMSFIL","Visible", 0 );
      gx.fn.setCtrlProperty("vPRODUTOSITTRIFORSAITIPOICMSFIL","Visible", 0 );
      gx.fn.setCtrlProperty("vNCMCODIGOIN","Visible", 0 );
      gx.fn.setCtrlProperty("vSTRING","Visible", 0 );
   };
   this.s152_client=function()
   {
      if ( this.AV33CampoAtualizar == 01 )
      {
         this.AV196VlrString =  this.AV95ProdutoUnidadeCompraID  ;
      }
      else if ( this.AV33CampoAtualizar == 02 )
      {
         this.AV196VlrString =  this.AV96ProdutoUnidadeVendaID  ;
      }
      else if ( this.AV33CampoAtualizar == 03 )
      {
         this.AV197VlrNumerico =  this.AV35ProdutoFatorConversao  ;
      }
      else if ( this.AV33CampoAtualizar == 04 )
      {
         this.AV196VlrString =  this.AV36ProdutoReferencia  ;
      }
      else if ( this.AV33CampoAtualizar == 05 )
      {
         this.AV196VlrString =  this.AV40ProdutoCodificacaoPrincipal  ;
      }
      else if ( this.AV33CampoAtualizar == 06 )
      {
         this.AV196VlrString =  this.AV39ProdutoClassificacaoPrincipal  ;
      }
      else if ( this.AV33CampoAtualizar == 07 )
      {
         this.AV196VlrString =  this.AV43ProdutoFamiliaId  ;
      }
      else if ( this.AV33CampoAtualizar == 08 )
      {
         this.AV197VlrNumerico =  this.AV41ProdutoDiasValidade  ;
      }
      else if ( this.AV33CampoAtualizar == 09 )
      {
         this.AV196VlrString =  this.AV49ProdutoSNSuspenso  ;
      }
      else if ( this.AV33CampoAtualizar == 10 )
      {
         this.AV197VlrNumerico =  this.AV42ProdutoFabricanteId  ;
      }
      else if ( this.AV33CampoAtualizar == 11 )
      {
         this.AV196VlrString =  this.AV97ProdutoTipoTributacao  ;
         this.AV197VlrNumerico =  this.AV44ProdutoPCAliquota  ;
      }
      else if ( this.AV33CampoAtualizar == 12 )
      {
         this.AV197VlrNumerico =  this.AV235PercAliquota  ;
      }
      else if ( this.AV33CampoAtualizar == 13 )
      {
         this.AV197VlrNumerico =  this.AV37ProdutoCasasDecimais  ;
      }
      else if ( this.AV33CampoAtualizar == 14 )
      {
         this.AV196VlrString =  this.AV50ProdutoTipo  ;
      }
      else if ( this.AV33CampoAtualizar == 15 )
      {
         this.AV197VlrNumerico =  this.AV45ProdutoPesoBruto  ;
      }
      else if ( this.AV33CampoAtualizar == 16 )
      {
         this.AV197VlrNumerico =  this.AV46ProdutoPesoLiquido  ;
      }
      else if ( this.AV33CampoAtualizar == 17 )
      {
         this.AV196VlrString =  this.AV38ProdutoCategoria  ;
      }
      else if ( this.AV33CampoAtualizar == 18 )
      {
         this.AV196VlrString =  this.AV48ProdutoSNControlaEstoque  ;
      }
      else if ( this.AV33CampoAtualizar == 19 )
      {
         this.AV196VlrString =  this.AV47ProdutoSnCalculaCusto  ;
      }
      else if ( this.AV33CampoAtualizar == 20 )
      {
         this.AV196VlrString =  this.AV52ProdutoTipoVendaBalanca  ;
      }
      else if ( this.AV33CampoAtualizar == 21 )
      {
         this.AV197VlrNumerico =  this.AV53ProdutoCFOEntDenEstadoCod  ;
      }
      else if ( this.AV33CampoAtualizar == 22 )
      {
         this.AV197VlrNumerico =  this.AV54ProdutoCFOEntForaEstadoCod  ;
      }
      else if ( this.AV33CampoAtualizar == 23 )
      {
         this.AV197VlrNumerico =  this.AV55ProdutoCFOEntInscDenEstadoCod  ;
      }
      else if ( this.AV33CampoAtualizar == 24 )
      {
         this.AV197VlrNumerico =  this.AV56ProdutoCFOEntInscForEstadoCod  ;
      }
      else if ( this.AV33CampoAtualizar == 25 )
      {
         this.AV197VlrNumerico =  this.AV57ProdutoCFOSaiDenEstadoCod  ;
      }
      else if ( this.AV33CampoAtualizar == 26 )
      {
         this.AV197VlrNumerico =  this.AV58ProdutoCFOSaiForaEstadoCod  ;
      }
      else if ( this.AV33CampoAtualizar == 27 )
      {
         this.AV197VlrNumerico =  this.AV59ProdutoCFOSaiInscDenEstadoCod  ;
      }
      else if ( this.AV33CampoAtualizar == 28 )
      {
         this.AV197VlrNumerico =  this.AV60ProdutoCFOSaiInscForEstadoCod  ;
      }
      else if ( this.AV33CampoAtualizar == 29 )
      {
         this.AV196VlrString =  this.AV62GeneroId  ;
      }
      else if ( this.AV33CampoAtualizar == 30 )
      {
         this.AV196VlrString =  this.AV66ProdutoClassificacaoABC  ;
      }
      else if ( this.AV33CampoAtualizar == 31 )
      {
         this.AV196VlrString =  this.AV51ProdutoTipoProducao  ;
      }
      else if ( this.AV33CampoAtualizar == 32 )
      {
         this.AV196VlrString =  this.AV65ProdutoCContabilId  ;
      }
      else if ( this.AV33CampoAtualizar == 33 )
      {
         this.AV197VlrNumerico =  this.AV61EsquemaCodigo  ;
      }
      else if ( this.AV33CampoAtualizar == 34 )
      {
         this.AV197VlrNumerico =  this.AV63ListaServicoId  ;
      }
      else if ( this.AV33CampoAtualizar == 35 )
      {
         this.AV198TipoCST =  "3"  ;
         this.AV257CodigoCST =  this.AV67ProdutoSitTriEntCodigoIPI  ;
      }
      else if ( this.AV33CampoAtualizar == 36 )
      {
         this.AV197VlrNumerico =  this.AV68ProdutoIPIPCEntrada  ;
      }
      else if ( this.AV33CampoAtualizar == 37 )
      {
         this.AV198TipoCST =  "3"  ;
         this.AV257CodigoCST =  this.AV70ProdutoSitTriSaiCodigoIPI  ;
      }
      else if ( this.AV33CampoAtualizar == 38 )
      {
         this.AV197VlrNumerico =  this.AV69ProdutoIPIPCSaida  ;
      }
      else if ( this.AV33CampoAtualizar == 39 )
      {
         this.AV197VlrNumerico =  this.AV98ProdutoPISEntrada  ;
      }
      else if ( this.AV33CampoAtualizar == 40 )
      {
         this.AV196VlrString =  this.AV71ProdutoMargemMarkupCodigo  ;
      }
      else if ( this.AV33CampoAtualizar == 41 )
      {
         this.AV197VlrNumerico =  this.AV74ProdutoPISSaida  ;
      }
      else if ( this.AV33CampoAtualizar == 42 )
      {
         this.AV197VlrNumerico =  this.AV72ProdutoPISExportacao  ;
      }
      else if ( this.AV33CampoAtualizar == 43 )
      {
         this.AV197VlrNumerico =  this.AV73ProdutoPISReducaoBase  ;
      }
      else if ( this.AV33CampoAtualizar == 44 )
      {
         this.AV197VlrNumerico =  this.AV75ProdutoCOFINSEntrada  ;
      }
      else if ( this.AV33CampoAtualizar == 45 )
      {
         this.AV197VlrNumerico =  this.AV78ProdutoCOFINSSaida  ;
      }
      else if ( this.AV33CampoAtualizar == 46 )
      {
         this.AV197VlrNumerico =  this.AV76ProdutoCOFINSExportacao  ;
      }
      else if ( this.AV33CampoAtualizar == 47 )
      {
         this.AV197VlrNumerico =  this.AV77ProdutoCOFINSReducaoBase  ;
      }
      else if ( this.AV33CampoAtualizar == 48 )
      {
         this.AV198TipoCST =  this.AV80ProdutoSitTriDenEntTipoICMS  ;
         this.AV257CodigoCST =  this.AV79ProdutoSitTriDenEntCodICMS  ;
      }
      else if ( this.AV33CampoAtualizar == 49 )
      {
         this.AV198TipoCST =  this.AV82ProdutoSitTriDenSaiTipoICMS  ;
         this.AV257CodigoCST =  this.AV81ProdutoSitTriDenSaiCodICMS  ;
      }
      else if ( this.AV33CampoAtualizar == 50 )
      {
         this.AV198TipoCST =  this.AV84ProdutoSitTriForEntTipoICMS  ;
         this.AV257CodigoCST =  this.AV83ProdutoSitTriForEntCodICMS  ;
      }
      else if ( this.AV33CampoAtualizar == 51 )
      {
         this.AV198TipoCST =  this.AV86ProdutoSitTriForSaiTipoICMS  ;
         this.AV257CodigoCST =  this.AV85ProdutoSitTriForSaiCodICMS  ;
      }
      else if ( this.AV33CampoAtualizar == 52 )
      {
         this.AV198TipoCST =  "4"  ;
         this.AV257CodigoCST =  this.AV87ProdutoSitTriEntPISCodigo  ;
      }
      else if ( this.AV33CampoAtualizar == 53 )
      {
         this.AV198TipoCST =  "4"  ;
         this.AV257CodigoCST =  this.AV89ProdutoSitTriSaiPISCodigo  ;
      }
      else if ( this.AV33CampoAtualizar == 54 )
      {
         this.AV198TipoCST =  "4"  ;
         this.AV257CodigoCST =  this.AV88ProdutoSitTriExtPISCodigo  ;
      }
      else if ( this.AV33CampoAtualizar == 55 )
      {
         this.AV198TipoCST =  "5"  ;
         this.AV257CodigoCST =  this.AV90ProdutoSitTriEntCOFCodigo  ;
      }
      else if ( this.AV33CampoAtualizar == 56 )
      {
         this.AV198TipoCST =  "5"  ;
         this.AV257CodigoCST =  this.AV91ProdutoSitTriSaiCOFCodigo  ;
      }
      else if ( this.AV33CampoAtualizar == 57 )
      {
         this.AV198TipoCST =  "5"  ;
         this.AV257CodigoCST =  this.AV92ProdutoSitTriExpCOFCodigo  ;
      }
      else if ( this.AV33CampoAtualizar == 58 )
      {
         this.AV197VlrNumerico =  this.AV93ProdutoGrupoPrecoID  ;
      }
      else if ( this.AV33CampoAtualizar == 59 )
      {
         this.AV197VlrNumerico =  this.AV126NCMCodigoMask  ;
      }
      else if ( this.AV33CampoAtualizar == 60 )
      {
         this.AV197VlrNumerico =  this.AV239NBSCodigo  ;
      }
      else if ( this.AV33CampoAtualizar == 61 )
      {
         this.AV197VlrNumerico =  this.AV241ProdutoAliquotaAproxNacional  ;
         this.AV243VlrNumerico2 =  this.AV242ProdutoAliquotaAproxImportacao  ;
      }
      else if ( this.AV33CampoAtualizar == 62 )
      {
         this.AV197VlrNumerico =  this.AV252ProdutoMargemLucro  ;
      }
      else if ( this.AV33CampoAtualizar == 63 )
      {
         this.AV197VlrNumerico =  this.AV253ProdutoICMSST  ;
      }
      else if ( this.AV33CampoAtualizar == 64 )
      {
         this.AV197VlrNumerico =  this.AV254ProdutoDiferencaICMS  ;
      }
      else if ( this.AV33CampoAtualizar == 65 )
      {
         this.AV197VlrNumerico =  this.AV255MVAProdutoPcMargem  ;
      }
      else if ( this.AV33CampoAtualizar == 66 )
      {
         this.AV196VlrString =  this.AV263CodificacaoEstId  ;
         this.AV264VlrString2 =  this.AV262ProdutoCodificacaoValor  ;
      }
      else if ( this.AV33CampoAtualizar == 67 )
      {
         this.AV196VlrString =  this.AV260ClassificacaoEstId  ;
         this.AV264VlrString2 =  this.AV261ProdutoClassificacaoValor  ;
      }
      else if ( this.AV33CampoAtualizar == 68 )
      {
         this.AV197VlrNumerico =  this.AV266PrecoId  ;
         this.AV243VlrNumerico2 =  this.AV265PercDescMaximo  ;
      }
      else if ( this.AV33CampoAtualizar == 69 )
      {
         this.AV197VlrNumerico =  this.AV299ProdutoPCComissao  ;
      }
      else if ( this.AV33CampoAtualizar == 70 )
      {
         this.AV197VlrNumerico =  this.AV300SubgrupoProdutoIdAtu  ;
      }
   };
   this.s162_client=function()
   {
      gx.fn.setCtrlProperty("TABTROCA","Visible", 0 );
      gx.fn.setCtrlProperty("TABATUALIZACAO","Visible", 0 );
      gx.fn.setCtrlProperty("TABSELECAO","Visible", 0 );
      if ( this.AV94TpOperacao == "T" )
      {
         gx.fn.setCtrlProperty("TABTROCA","Visible", 1 );
         gx.fn.setCtrlProperty("TABATUALIZACAO","Visible", 0 );
         gx.fn.setCtrlProperty("TABSELECAO","Visible", 0 );
         this.AV33CampoAtualizar = gx.num.trunc( 0 ,0) ;
      }
      else
      {
         if ( this.AV94TpOperacao == "A" )
         {
            gx.fn.setCtrlProperty("TABTROCA","Visible", 0 );
            gx.fn.setCtrlProperty("TABATUALIZACAO","Visible", 1 );
            gx.fn.setCtrlProperty("TABSELECAO","Visible", 1 );
         }
      }
   };
   this.s172_client=function()
   {
      gx.fn.setCtrlProperty("TABUNIDADECOMPRA","Visible", this.AV33CampoAtualizar==01 );
      gx.fn.setCtrlProperty("TABUNIDADEVENDA","Visible", this.AV33CampoAtualizar==02 );
      gx.fn.setCtrlProperty("TABFATOR","Visible", this.AV33CampoAtualizar==03 );
      gx.fn.setCtrlProperty("TABREFERENCIA","Visible", this.AV33CampoAtualizar==04 );
      gx.fn.setCtrlProperty("TABCODIFICACAO","Visible", this.AV33CampoAtualizar==05 );
      gx.fn.setCtrlProperty("TABCLASSIFICACAO","Visible", this.AV33CampoAtualizar==06 );
      gx.fn.setCtrlProperty("TABFAMILIA","Visible", this.AV33CampoAtualizar==07 );
      gx.fn.setCtrlProperty("TABDIASVAL","Visible", this.AV33CampoAtualizar==08 );
      gx.fn.setCtrlProperty("TABSNSUSPENSO","Visible", this.AV33CampoAtualizar==09 );
      gx.fn.setCtrlProperty("TABFABRICANTE","Visible", this.AV33CampoAtualizar==10 );
      gx.fn.setCtrlProperty("TABTPTRIBUTACAO","Visible", this.AV33CampoAtualizar==11 );
      gx.fn.setCtrlProperty("TABPCALIQUOTA","Visible", this.AV33CampoAtualizar==12 );
      gx.fn.setCtrlProperty("TABCASASDEC","Visible", this.AV33CampoAtualizar==13 );
      gx.fn.setCtrlProperty("TABTIPO","Visible", this.AV33CampoAtualizar==14 );
      gx.fn.setCtrlProperty("TABPESBRUTO","Visible", this.AV33CampoAtualizar==15 );
      gx.fn.setCtrlProperty("TABPESLIQUIDO","Visible", this.AV33CampoAtualizar==16 );
      gx.fn.setCtrlProperty("TABCATEGORIA","Visible", this.AV33CampoAtualizar==17 );
      gx.fn.setCtrlProperty("TABSNCONTESTOQUE","Visible", this.AV33CampoAtualizar==18 );
      gx.fn.setCtrlProperty("TABSNCALCCUSTO","Visible", this.AV33CampoAtualizar==19 );
      gx.fn.setCtrlProperty("TABTPVENDABALANCA","Visible", this.AV33CampoAtualizar==20 );
      gx.fn.setCtrlProperty("TABCFOENTDEN","Visible", this.AV33CampoAtualizar==21 );
      gx.fn.setCtrlProperty("TABCFOENTFOR","Visible", this.AV33CampoAtualizar==22 );
      gx.fn.setCtrlProperty("TABCFOENTINSCDEN","Visible", this.AV33CampoAtualizar==23 );
      gx.fn.setCtrlProperty("TABCFOENTINSCFOR","Visible", this.AV33CampoAtualizar==24 );
      gx.fn.setCtrlProperty("TABCFOSAIDEN","Visible", this.AV33CampoAtualizar==25 );
      gx.fn.setCtrlProperty("TABCFOSAIFOR","Visible", this.AV33CampoAtualizar==26 );
      gx.fn.setCtrlProperty("TABCFOSAIINSCDEN","Visible", this.AV33CampoAtualizar==27 );
      gx.fn.setCtrlProperty("TABCFOSAIINSCFOR","Visible", this.AV33CampoAtualizar==28 );
      gx.fn.setCtrlProperty("TABGENERO","Visible", this.AV33CampoAtualizar==29 );
      gx.fn.setCtrlProperty("TABCLASSABC","Visible", this.AV33CampoAtualizar==30 );
      gx.fn.setCtrlProperty("TABTPPRODUCAO","Visible", this.AV33CampoAtualizar==31 );
      gx.fn.setCtrlProperty("TABCCONTABIL","Visible", this.AV33CampoAtualizar==32 );
      gx.fn.setCtrlProperty("TABESQUEMA","Visible", this.AV33CampoAtualizar==33 );
      gx.fn.setCtrlProperty("TABNCM","Visible", this.AV33CampoAtualizar==59 );
      gx.fn.setCtrlProperty("TABLISTASER","Visible", this.AV33CampoAtualizar==34 );
      gx.fn.setCtrlProperty("TABIPIENT","Visible", this.AV33CampoAtualizar==35 );
      gx.fn.setCtrlProperty("TABPCIPIENT","Visible", this.AV33CampoAtualizar==36 );
      gx.fn.setCtrlProperty("TABIPISAI","Visible", this.AV33CampoAtualizar==37 );
      gx.fn.setCtrlProperty("TABPCIPISAI","Visible", this.AV33CampoAtualizar==38 );
      gx.fn.setCtrlProperty("TABPISENT","Visible", this.AV33CampoAtualizar==39 );
      gx.fn.setCtrlProperty("TABMARKUP","Visible", this.AV33CampoAtualizar==40 );
      gx.fn.setCtrlProperty("TABPISSAI","Visible", this.AV33CampoAtualizar==41 );
      gx.fn.setCtrlProperty("TABPISEXP","Visible", this.AV33CampoAtualizar==42 );
      gx.fn.setCtrlProperty("TABPISRED","Visible", this.AV33CampoAtualizar==43 );
      gx.fn.setCtrlProperty("TABCOFINSENT","Visible", this.AV33CampoAtualizar==44 );
      gx.fn.setCtrlProperty("TABCOFINSSAI","Visible", this.AV33CampoAtualizar==45 );
      gx.fn.setCtrlProperty("TABCOFINSEXP","Visible", this.AV33CampoAtualizar==46 );
      gx.fn.setCtrlProperty("TABCOFINSRED","Visible", this.AV33CampoAtualizar==47 );
      gx.fn.setCtrlProperty("TABICMSENTDEN","Visible", this.AV33CampoAtualizar==48 );
      gx.fn.setCtrlProperty("TABICMSSAIDEN","Visible", this.AV33CampoAtualizar==49 );
      gx.fn.setCtrlProperty("TABICMSENTFOR","Visible", this.AV33CampoAtualizar==50 );
      gx.fn.setCtrlProperty("TABICMSSAIFOR","Visible", this.AV33CampoAtualizar==51 );
      gx.fn.setCtrlProperty("TABCSTPISENT","Visible", this.AV33CampoAtualizar==52 );
      gx.fn.setCtrlProperty("TABCSTPISSAI","Visible", this.AV33CampoAtualizar==53 );
      gx.fn.setCtrlProperty("TABCSTPISEXP","Visible", this.AV33CampoAtualizar==54 );
      gx.fn.setCtrlProperty("TABCSTCOFINSENT","Visible", this.AV33CampoAtualizar==55 );
      gx.fn.setCtrlProperty("TABCSTCOFINSSAI","Visible", this.AV33CampoAtualizar==56 );
      gx.fn.setCtrlProperty("TABCSTCOFINSEXP","Visible", this.AV33CampoAtualizar==57 );
      gx.fn.setCtrlProperty("TABGRUPOPRECO","Visible", this.AV33CampoAtualizar==58 );
      gx.fn.setCtrlProperty("TABNBS","Visible", this.AV33CampoAtualizar==60 );
      gx.fn.setCtrlProperty("TABIMPOSTOAPROX","Visible", this.AV33CampoAtualizar==61 );
      gx.fn.setCtrlProperty("TABPERCMARGEMLUCRO","Visible", this.AV33CampoAtualizar==62 );
      gx.fn.setCtrlProperty("TABICMSST","Visible", this.AV33CampoAtualizar==63 );
      gx.fn.setCtrlProperty("TABDIFICMS","Visible", this.AV33CampoAtualizar==64 );
      gx.fn.setCtrlProperty("TABPERCENTUALMVA","Visible", this.AV33CampoAtualizar==65 );
      gx.fn.setCtrlProperty("TABCODPRODUTO","Visible", this.AV33CampoAtualizar==66 );
      gx.fn.setCtrlProperty("TABCLASSPRODUTO","Visible", this.AV33CampoAtualizar==67 );
      gx.fn.setCtrlProperty("TABDESCMAXIMO","Visible", this.AV33CampoAtualizar==68 );
      gx.fn.setCtrlProperty("TABPCCOMISSAO","Visible", this.AV33CampoAtualizar==69 );
      gx.fn.setCtrlProperty("TABSUBGRUPO","Visible", this.AV33CampoAtualizar==70 );
      gx.fn.setCtrlProperty("TABCEST","Visible", this.AV33CampoAtualizar==71 );
      gx.fn.setCtrlProperty("TABOBSERVACAO","Visible", this.AV33CampoAtualizar==72 );
      gx.fn.setCtrlProperty("TABIMAGEM","Visible", this.AV33CampoAtualizar==73 );
      if ( this.AV33CampoAtualizar == 72 || this.AV33CampoAtualizar == 73 )
      {
         this.TABCSSContainer.setPosition(3) ;
      }
   };
   this.e26xx1_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e27xx1_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e24xx1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hconsultaproduto",[0, this.Gx_date, 0, "", "", "", "", "", "", 0, 0, 0, 0, "S", "", ""]), ["AV291ProdutoIdIni", "", "", "", "", "", ""]);
      this.refreshOutputs([{av:'AV291ProdutoIdIni',fld:'vPRODUTOIDINI'}]);
   };
   this.e25xx1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hconsultaproduto",[0, this.Gx_date, 0, "", "", "", "", "", "", 0, 0, 0, 0, "S", "", ""]), ["AV292ProdutoIdFin", "", "", "", "", "", ""]);
      this.refreshOutputs([{av:'AV292ProdutoIdFin',fld:'vPRODUTOIDFIN'}]);
   };
   this.e11xx2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13xx2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15xx2_client=function()
   {
      this.executeServerEvent("VPRODUTOCESTCODIGO.ISVALID", true, null, false, true);
   };
   this.e16xx2_client=function()
   {
      this.executeServerEvent("'DIALOG1'", false, null, false, false);
   };
   this.e17xx2_client=function()
   {
      this.executeServerEvent("'DIALOG2'", false, null, false, false);
   };
   this.e18xx2_client=function()
   {
      this.executeServerEvent("'DIALOG3'", false, null, false, false);
   };
   this.e19xx2_client=function()
   {
      this.executeServerEvent("'DIALOG4'", false, null, false, false);
   };
   this.e20xx2_client=function()
   {
      this.executeServerEvent("'DIALOG5'", false, null, false, false);
   };
   this.e22xx2_client=function()
   {
      this.executeServerEvent("VTPOPERACAO.CLICK", true, null, false, true);
   };
   this.e23xx2_client=function()
   {
      this.executeServerEvent("VCAMPOATUALIZAR.CLICK", true, null, false, true);
   };
   this.e28xx2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,10,13,16,18,19,24,26,29,30,32,34,35,38,40,41,44,46,47,50,53,55,56,57,60,62,63,64,67,69,70,73,75,76,79,81,82,85,87,88,91,93,94,95,98,100,101,104,106,107,110,112,113,114,117,119,120,121,124,126,127,130,132,133,136,138,139,142,144,145,148,150,151,154,156,157,160,162,163,166,168,169,172,174,175,178,180,181,184,186,187,190,192,193,196,198,199,202,204,205,208,210,211,214,216,217,220,222,223,226,228,229,230,233,235,236,239,241,242,245,247,248,249,250,251,254,256,257,258,259,262,264,265,266,267,268,269,272,274,275,276,279,281,282,283,286,288,289,292,294,295,296,299,301,302,305,307,308,311,313,314,317,319,320,323,325,326,329,331,332,335,337,338,341,343,344,347,349,350,353,355,356,359,361,362,363,364,367,369,370,371,372,375,377,378,379,380,383,385,386,387,388,391,393,394,395,398,400,401,402,405,407,408,409,412,414,415,416,419,421,422,423,426,428,429,430,433,435,436,439,441,444,446,447,450,452,453,456,458,459,462,464,465,468,470,473,475,476,479,481,484,486,487,490,492,495,497,498,501,503,504,507,509,510,513,515,516,517,518,519,522,524,525,528,530,531,532,535,537,538,539,540,543,547,550,552,555,556,558,560,561,564,566,569,571,573,576,578,581,583,585,588,590,593,595,597,600,602,605,607,609,612,614,617,619,621,624,626,629,631,633,636,638,639,642,644,645,648,650,652,655,657,660,662,665,667,670,672,675,677,680,682,685,687,690,692,695,697,700,702,703,706,709,711,714,716,719,722,725,727,730,732,733,736,738,741,743,744,746,749,753,754,757,759,760,761,765,768,770,771,772,773,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,831,836,841,846,851,856,857,860,862,875,876,877,879,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911];
   this.GXLastCtrlId =911;
   this.TABCSSContainer = gx.uc.getNew(this, 9, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV289Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV289Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV289Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "hatualizacaocoletivaproduto_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[10]={fld:"TAB1",grid:0};
   GXValidFnc[13]={fld:"TABLE4",grid:0};
   GXValidFnc[16]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPOPERACAO",gxz:"ZV94TpOperacao",gxold:"OV94TpOperacao",gxvar:"AV94TpOperacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV94TpOperacao=Value},v2z:function(Value){gx.O.ZV94TpOperacao=Value},v2c:function(){gx.fn.setComboBoxValue("vTPOPERACAO",gx.O.AV94TpOperacao)},c2v:function(){gx.O.AV94TpOperacao=this.val()},val:function(){return gx.fn.getControlValue("vTPOPERACAO")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TABTROCA",grid:0};
   GXValidFnc[24]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[26]={fld:"TABLE9",grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOANTIGOINI",gxz:"ZV294ProdutoAntigoIni",gxold:"OV294ProdutoAntigoIni",gxvar:"AV294ProdutoAntigoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV294ProdutoAntigoIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV294ProdutoAntigoIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOANTIGOINI",gx.O.AV294ProdutoAntigoIni,0)},c2v:function(){gx.O.AV294ProdutoAntigoIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOANTIGOINI",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"PROMPTPRODUTOANTINI",grid:0};
   GXValidFnc[32]={fld:"TEXTBLOCK114", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOANTIGOFIN",gxz:"ZV295ProdutoAntigoFin",gxold:"OV295ProdutoAntigoFin",gxvar:"AV295ProdutoAntigoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV295ProdutoAntigoFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV295ProdutoAntigoFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOANTIGOFIN",gx.O.AV295ProdutoAntigoFin,0)},c2v:function(){gx.O.AV295ProdutoAntigoFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOANTIGOFIN",'.')},nac:gx.falseFn};
   GXValidFnc[35]={fld:"PROMPTPRODUTOANTFIN",grid:0};
   GXValidFnc[38]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTONOVO",gxz:"ZV100ProdutoNovo",gxold:"OV100ProdutoNovo",gxvar:"AV100ProdutoNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV100ProdutoNovo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV100ProdutoNovo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTONOVO",gx.O.AV100ProdutoNovo,0)},c2v:function(){gx.O.AV100ProdutoNovo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTONOVO",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TABATUALIZACAO",grid:0};
   GXValidFnc[44]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAMPOATUALIZAR",gxz:"ZV33CampoAtualizar",gxold:"OV33CampoAtualizar",gxvar:"AV33CampoAtualizar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV33CampoAtualizar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33CampoAtualizar=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCAMPOATUALIZAR",gx.O.AV33CampoAtualizar)},c2v:function(){gx.O.AV33CampoAtualizar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAMPOATUALIZAR",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TABLE3",grid:0};
   GXValidFnc[50]={fld:"TABUNIDADECOMPRA",grid:0};
   GXValidFnc[53]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtounidadecompraid,isvalid:null,rgrid:[],fld:"vPRODUTOUNIDADECOMPRAID",gxz:"ZV95ProdutoUnidadeCompraID",gxold:"OV95ProdutoUnidadeCompraID",gxvar:"AV95ProdutoUnidadeCompraID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV95ProdutoUnidadeCompraID=Value},v2z:function(Value){gx.O.ZV95ProdutoUnidadeCompraID=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOUNIDADECOMPRAID",gx.O.AV95ProdutoUnidadeCompraID,0)},c2v:function(){gx.O.AV95ProdutoUnidadeCompraID=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOUNIDADECOMPRAID")},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOUNIDADECOMPRADESC",gxz:"ZV204ProdutoUnidadeCompraDesc",gxold:"OV204ProdutoUnidadeCompraDesc",gxvar:"AV204ProdutoUnidadeCompraDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV204ProdutoUnidadeCompraDesc=Value},v2z:function(Value){gx.O.ZV204ProdutoUnidadeCompraDesc=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOUNIDADECOMPRADESC",gx.O.AV204ProdutoUnidadeCompraDesc,0)},c2v:function(){gx.O.AV204ProdutoUnidadeCompraDesc=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOUNIDADECOMPRADESC")},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TABUNIDADEVENDA",grid:0};
   GXValidFnc[60]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[62]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtounidadevendaid,isvalid:null,rgrid:[],fld:"vPRODUTOUNIDADEVENDAID",gxz:"ZV96ProdutoUnidadeVendaID",gxold:"OV96ProdutoUnidadeVendaID",gxvar:"AV96ProdutoUnidadeVendaID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV96ProdutoUnidadeVendaID=Value},v2z:function(Value){gx.O.ZV96ProdutoUnidadeVendaID=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOUNIDADEVENDAID",gx.O.AV96ProdutoUnidadeVendaID,0)},c2v:function(){gx.O.AV96ProdutoUnidadeVendaID=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOUNIDADEVENDAID")},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOUNIDADEVENDADESC",gxz:"ZV203ProdutoUnidadeVendaDesc",gxold:"OV203ProdutoUnidadeVendaDesc",gxvar:"AV203ProdutoUnidadeVendaDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV203ProdutoUnidadeVendaDesc=Value},v2z:function(Value){gx.O.ZV203ProdutoUnidadeVendaDesc=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOUNIDADEVENDADESC",gx.O.AV203ProdutoUnidadeVendaDesc,0)},c2v:function(){gx.O.AV203ProdutoUnidadeVendaDesc=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOUNIDADEVENDADESC")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TABFATOR",grid:0};
   GXValidFnc[67]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"decimal",len:16,dec:6,sign:false,pic:"ZZZ,ZZZ,ZZ9.999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOFATORCONVERSAO",gxz:"ZV35ProdutoFatorConversao",gxold:"OV35ProdutoFatorConversao",gxvar:"AV35ProdutoFatorConversao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35ProdutoFatorConversao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV35ProdutoFatorConversao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPRODUTOFATORCONVERSAO",gx.O.AV35ProdutoFatorConversao,6,',')},c2v:function(){gx.O.AV35ProdutoFatorConversao=this.val()},val:function(){return gx.fn.getDecimalValue("vPRODUTOFATORCONVERSAO",'.',',')},nac:gx.falseFn};
   GXValidFnc[70]={fld:"TABREFERENCIA",grid:0};
   GXValidFnc[73]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV36ProdutoReferencia",gxold:"OV36ProdutoReferencia",gxvar:"AV36ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV36ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV36ProdutoReferencia,0)},c2v:function(){gx.O.AV36ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[76]={fld:"TABCODIFICACAO",grid:0};
   GXValidFnc[79]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[81]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIFICACAOPRINCIPAL",gxz:"ZV40ProdutoCodificacaoPrincipal",gxold:"OV40ProdutoCodificacaoPrincipal",gxvar:"AV40ProdutoCodificacaoPrincipal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40ProdutoCodificacaoPrincipal=Value},v2z:function(Value){gx.O.ZV40ProdutoCodificacaoPrincipal=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIFICACAOPRINCIPAL",gx.O.AV40ProdutoCodificacaoPrincipal,0)},c2v:function(){gx.O.AV40ProdutoCodificacaoPrincipal=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCODIFICACAOPRINCIPAL")},nac:gx.falseFn};
   GXValidFnc[82]={fld:"TABCLASSIFICACAO",grid:0};
   GXValidFnc[85]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[87]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCLASSIFICACAOPRINCIPAL",gxz:"ZV39ProdutoClassificacaoPrincipal",gxold:"OV39ProdutoClassificacaoPrincipal",gxvar:"AV39ProdutoClassificacaoPrincipal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39ProdutoClassificacaoPrincipal=Value},v2z:function(Value){gx.O.ZV39ProdutoClassificacaoPrincipal=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOCLASSIFICACAOPRINCIPAL",gx.O.AV39ProdutoClassificacaoPrincipal,0)},c2v:function(){gx.O.AV39ProdutoClassificacaoPrincipal=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCLASSIFICACAOPRINCIPAL")},nac:gx.falseFn};
   GXValidFnc[88]={fld:"TABFAMILIA",grid:0};
   GXValidFnc[91]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[93]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtofamiliaid,isvalid:null,rgrid:[],fld:"vPRODUTOFAMILIAID",gxz:"ZV43ProdutoFamiliaId",gxold:"OV43ProdutoFamiliaId",gxvar:"AV43ProdutoFamiliaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43ProdutoFamiliaId=Value},v2z:function(Value){gx.O.ZV43ProdutoFamiliaId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOFAMILIAID",gx.O.AV43ProdutoFamiliaId,0)},c2v:function(){gx.O.AV43ProdutoFamiliaId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOFAMILIAID")},nac:gx.falseFn};
   GXValidFnc[94]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOFAMILIADESCRICAO",gxz:"ZV209ProdutoFamiliaDescricao",gxold:"OV209ProdutoFamiliaDescricao",gxvar:"AV209ProdutoFamiliaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV209ProdutoFamiliaDescricao=Value},v2z:function(Value){gx.O.ZV209ProdutoFamiliaDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOFAMILIADESCRICAO",gx.O.AV209ProdutoFamiliaDescricao,0)},c2v:function(){gx.O.AV209ProdutoFamiliaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOFAMILIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[95]={fld:"TABDIASVAL",grid:0};
   GXValidFnc[98]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODIASVALIDADE",gxz:"ZV41ProdutoDiasValidade",gxold:"OV41ProdutoDiasValidade",gxvar:"AV41ProdutoDiasValidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41ProdutoDiasValidade=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41ProdutoDiasValidade=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTODIASVALIDADE",gx.O.AV41ProdutoDiasValidade,0)},c2v:function(){gx.O.AV41ProdutoDiasValidade=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTODIASVALIDADE",'.')},nac:gx.falseFn};
   GXValidFnc[101]={fld:"TABSNSUSPENSO",grid:0};
   GXValidFnc[104]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[106]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOSNSUSPENSO",gxz:"ZV49ProdutoSNSuspenso",gxold:"OV49ProdutoSNSuspenso",gxvar:"AV49ProdutoSNSuspenso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV49ProdutoSNSuspenso=Value},v2z:function(Value){gx.O.ZV49ProdutoSNSuspenso=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOSNSUSPENSO",gx.O.AV49ProdutoSNSuspenso)},c2v:function(){gx.O.AV49ProdutoSNSuspenso=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSNSUSPENSO")},nac:gx.falseFn};
   GXValidFnc[107]={fld:"TABFABRICANTE",grid:0};
   GXValidFnc[110]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[112]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtofabricanteid,isvalid:null,rgrid:[],fld:"vPRODUTOFABRICANTEID",gxz:"ZV42ProdutoFabricanteId",gxold:"OV42ProdutoFabricanteId",gxvar:"AV42ProdutoFabricanteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42ProdutoFabricanteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42ProdutoFabricanteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOFABRICANTEID",gx.O.AV42ProdutoFabricanteId,0)},c2v:function(){gx.O.AV42ProdutoFabricanteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOFABRICANTEID",'.')},nac:gx.falseFn};
   GXValidFnc[113]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOFABRICANTEFANTASIA",gxz:"ZV214ProdutoFabricanteFantasia",gxold:"OV214ProdutoFabricanteFantasia",gxvar:"AV214ProdutoFabricanteFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV214ProdutoFabricanteFantasia=Value},v2z:function(Value){gx.O.ZV214ProdutoFabricanteFantasia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOFABRICANTEFANTASIA",gx.O.AV214ProdutoFabricanteFantasia,0)},c2v:function(){gx.O.AV214ProdutoFabricanteFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOFABRICANTEFANTASIA")},nac:gx.falseFn};
   GXValidFnc[114]={fld:"TABTPTRIBUTACAO",grid:0};
   GXValidFnc[117]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[119]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOTIPOTRIBUTACAO",gxz:"ZV97ProdutoTipoTributacao",gxold:"OV97ProdutoTipoTributacao",gxvar:"AV97ProdutoTipoTributacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV97ProdutoTipoTributacao=Value},v2z:function(Value){gx.O.ZV97ProdutoTipoTributacao=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOTIPOTRIBUTACAO",gx.O.AV97ProdutoTipoTributacao)},c2v:function(){gx.O.AV97ProdutoTipoTributacao=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOTIPOTRIBUTACAO")},nac:gx.falseFn};
   GXValidFnc[120]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOPCALIQUOTA",gxz:"ZV44ProdutoPCAliquota",gxold:"OV44ProdutoPCAliquota",gxvar:"AV44ProdutoPCAliquota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44ProdutoPCAliquota=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV44ProdutoPCAliquota=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPRODUTOPCALIQUOTA",gx.O.AV44ProdutoPCAliquota,2,',')},c2v:function(){gx.O.AV44ProdutoPCAliquota=this.val()},val:function(){return gx.fn.getDecimalValue("vPRODUTOPCALIQUOTA",'.',',')},nac:gx.falseFn};
   GXValidFnc[121]={fld:"TABPCALIQUOTA",grid:0};
   GXValidFnc[124]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[126]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPERCALIQUOTA",gxz:"ZV235PercAliquota",gxold:"OV235PercAliquota",gxvar:"AV235PercAliquota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV235PercAliquota=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV235PercAliquota=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPERCALIQUOTA",gx.O.AV235PercAliquota,2,',')},c2v:function(){gx.O.AV235PercAliquota=this.val()},val:function(){return gx.fn.getDecimalValue("vPERCALIQUOTA",'.',',')},nac:gx.falseFn};
   GXValidFnc[127]={fld:"TABCASASDEC",grid:0};
   GXValidFnc[130]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[132]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCASASDECIMAIS",gxz:"ZV37ProdutoCasasDecimais",gxold:"OV37ProdutoCasasDecimais",gxvar:"AV37ProdutoCasasDecimais",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37ProdutoCasasDecimais=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37ProdutoCasasDecimais=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCASASDECIMAIS",gx.O.AV37ProdutoCasasDecimais,0)},c2v:function(){gx.O.AV37ProdutoCasasDecimais=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCASASDECIMAIS",'.')},nac:gx.falseFn};
   GXValidFnc[133]={fld:"TABTIPO",grid:0};
   GXValidFnc[136]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[138]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOTIPO",gxz:"ZV50ProdutoTipo",gxold:"OV50ProdutoTipo",gxvar:"AV50ProdutoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50ProdutoTipo=Value},v2z:function(Value){gx.O.ZV50ProdutoTipo=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOTIPO",gx.O.AV50ProdutoTipo,0)},c2v:function(){gx.O.AV50ProdutoTipo=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOTIPO")},nac:gx.falseFn};
   GXValidFnc[139]={fld:"TABPESBRUTO",grid:0};
   GXValidFnc[142]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[144]={lvl:0,type:"decimal",len:18,dec:6,sign:false,pic:"ZZ,ZZZ,ZZZ,ZZ9.999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOPESOBRUTO",gxz:"ZV45ProdutoPesoBruto",gxold:"OV45ProdutoPesoBruto",gxvar:"AV45ProdutoPesoBruto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45ProdutoPesoBruto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV45ProdutoPesoBruto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPRODUTOPESOBRUTO",gx.O.AV45ProdutoPesoBruto,6,',')},c2v:function(){gx.O.AV45ProdutoPesoBruto=this.val()},val:function(){return gx.fn.getDecimalValue("vPRODUTOPESOBRUTO",'.',',')},nac:gx.falseFn};
   GXValidFnc[145]={fld:"TABPESLIQUIDO",grid:0};
   GXValidFnc[148]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[150]={lvl:0,type:"decimal",len:18,dec:6,sign:false,pic:"ZZ,ZZZ,ZZZ,ZZ9.999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOPESOLIQUIDO",gxz:"ZV46ProdutoPesoLiquido",gxold:"OV46ProdutoPesoLiquido",gxvar:"AV46ProdutoPesoLiquido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46ProdutoPesoLiquido=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV46ProdutoPesoLiquido=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPRODUTOPESOLIQUIDO",gx.O.AV46ProdutoPesoLiquido,6,',')},c2v:function(){gx.O.AV46ProdutoPesoLiquido=this.val()},val:function(){return gx.fn.getDecimalValue("vPRODUTOPESOLIQUIDO",'.',',')},nac:gx.falseFn};
   GXValidFnc[151]={fld:"TABCATEGORIA",grid:0};
   GXValidFnc[154]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[156]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCATEGORIA",gxz:"ZV38ProdutoCategoria",gxold:"OV38ProdutoCategoria",gxvar:"AV38ProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV38ProdutoCategoria=Value},v2z:function(Value){gx.O.ZV38ProdutoCategoria=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOCATEGORIA",gx.O.AV38ProdutoCategoria)},c2v:function(){gx.O.AV38ProdutoCategoria=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCATEGORIA")},nac:gx.falseFn};
   GXValidFnc[157]={fld:"TABSNCONTESTOQUE",grid:0};
   GXValidFnc[160]={fld:"TEXTBLOCK34", format:0,grid:0};
   GXValidFnc[162]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOSNCONTROLAESTOQUE",gxz:"ZV48ProdutoSNControlaEstoque",gxold:"OV48ProdutoSNControlaEstoque",gxvar:"AV48ProdutoSNControlaEstoque",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV48ProdutoSNControlaEstoque=Value},v2z:function(Value){gx.O.ZV48ProdutoSNControlaEstoque=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOSNCONTROLAESTOQUE",gx.O.AV48ProdutoSNControlaEstoque)},c2v:function(){gx.O.AV48ProdutoSNControlaEstoque=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSNCONTROLAESTOQUE")},nac:gx.falseFn};
   GXValidFnc[163]={fld:"TABSNCALCCUSTO",grid:0};
   GXValidFnc[166]={fld:"TEXTBLOCK35", format:0,grid:0};
   GXValidFnc[168]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOSNCALCULACUSTO",gxz:"ZV47ProdutoSnCalculaCusto",gxold:"OV47ProdutoSnCalculaCusto",gxvar:"AV47ProdutoSnCalculaCusto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV47ProdutoSnCalculaCusto=Value},v2z:function(Value){gx.O.ZV47ProdutoSnCalculaCusto=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOSNCALCULACUSTO",gx.O.AV47ProdutoSnCalculaCusto)},c2v:function(){gx.O.AV47ProdutoSnCalculaCusto=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSNCALCULACUSTO")},nac:gx.falseFn};
   GXValidFnc[169]={fld:"TABTPVENDABALANCA",grid:0};
   GXValidFnc[172]={fld:"TEXTBLOCK36", format:0,grid:0};
   GXValidFnc[174]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOTIPOVENDABALANCA",gxz:"ZV52ProdutoTipoVendaBalanca",gxold:"OV52ProdutoTipoVendaBalanca",gxvar:"AV52ProdutoTipoVendaBalanca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV52ProdutoTipoVendaBalanca=Value},v2z:function(Value){gx.O.ZV52ProdutoTipoVendaBalanca=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOTIPOVENDABALANCA",gx.O.AV52ProdutoTipoVendaBalanca)},c2v:function(){gx.O.AV52ProdutoTipoVendaBalanca=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOTIPOVENDABALANCA")},nac:gx.falseFn};
   GXValidFnc[175]={fld:"TABCFOENTDEN",grid:0};
   GXValidFnc[178]={fld:"TEXTBLOCK37", format:0,grid:0};
   GXValidFnc[180]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtocfoentdenestadocod,isvalid:null,rgrid:[],fld:"vPRODUTOCFOENTDENESTADOCOD",gxz:"ZV53ProdutoCFOEntDenEstadoCod",gxold:"OV53ProdutoCFOEntDenEstadoCod",gxvar:"AV53ProdutoCFOEntDenEstadoCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53ProdutoCFOEntDenEstadoCod=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV53ProdutoCFOEntDenEstadoCod=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCFOENTDENESTADOCOD",gx.O.AV53ProdutoCFOEntDenEstadoCod,0)},c2v:function(){gx.O.AV53ProdutoCFOEntDenEstadoCod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCFOENTDENESTADOCOD",'.')},nac:gx.falseFn};
   GXValidFnc[181]={fld:"TABCFOENTFOR",grid:0};
   GXValidFnc[184]={fld:"TEXTBLOCK38", format:0,grid:0};
   GXValidFnc[186]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtocfoentforaestadocod,isvalid:null,rgrid:[],fld:"vPRODUTOCFOENTFORAESTADOCOD",gxz:"ZV54ProdutoCFOEntForaEstadoCod",gxold:"OV54ProdutoCFOEntForaEstadoCod",gxvar:"AV54ProdutoCFOEntForaEstadoCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54ProdutoCFOEntForaEstadoCod=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV54ProdutoCFOEntForaEstadoCod=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCFOENTFORAESTADOCOD",gx.O.AV54ProdutoCFOEntForaEstadoCod,0)},c2v:function(){gx.O.AV54ProdutoCFOEntForaEstadoCod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCFOENTFORAESTADOCOD",'.')},nac:gx.falseFn};
   GXValidFnc[187]={fld:"TABCFOENTINSCDEN",grid:0};
   GXValidFnc[190]={fld:"TEXTBLOCK39", format:0,grid:0};
   GXValidFnc[192]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtocfoentinscdenestadocod,isvalid:null,rgrid:[],fld:"vPRODUTOCFOENTINSCDENESTADOCOD",gxz:"ZV55ProdutoCFOEntInscDenEstadoCod",gxold:"OV55ProdutoCFOEntInscDenEstadoCod",gxvar:"AV55ProdutoCFOEntInscDenEstadoCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55ProdutoCFOEntInscDenEstadoCod=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV55ProdutoCFOEntInscDenEstadoCod=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCFOENTINSCDENESTADOCOD",gx.O.AV55ProdutoCFOEntInscDenEstadoCod,0)},c2v:function(){gx.O.AV55ProdutoCFOEntInscDenEstadoCod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCFOENTINSCDENESTADOCOD",'.')},nac:gx.falseFn};
   GXValidFnc[193]={fld:"TABCFOENTINSCFOR",grid:0};
   GXValidFnc[196]={fld:"TEXTBLOCK40", format:0,grid:0};
   GXValidFnc[198]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtocfoentinscforestadocod,isvalid:null,rgrid:[],fld:"vPRODUTOCFOENTINSCFORESTADOCOD",gxz:"ZV56ProdutoCFOEntInscForEstadoCod",gxold:"OV56ProdutoCFOEntInscForEstadoCod",gxvar:"AV56ProdutoCFOEntInscForEstadoCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56ProdutoCFOEntInscForEstadoCod=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV56ProdutoCFOEntInscForEstadoCod=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCFOENTINSCFORESTADOCOD",gx.O.AV56ProdutoCFOEntInscForEstadoCod,0)},c2v:function(){gx.O.AV56ProdutoCFOEntInscForEstadoCod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCFOENTINSCFORESTADOCOD",'.')},nac:gx.falseFn};
   GXValidFnc[199]={fld:"TABCFOSAIDEN",grid:0};
   GXValidFnc[202]={fld:"TEXTBLOCK41", format:0,grid:0};
   GXValidFnc[204]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtocfosaidenestadocod,isvalid:null,rgrid:[],fld:"vPRODUTOCFOSAIDENESTADOCOD",gxz:"ZV57ProdutoCFOSaiDenEstadoCod",gxold:"OV57ProdutoCFOSaiDenEstadoCod",gxvar:"AV57ProdutoCFOSaiDenEstadoCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57ProdutoCFOSaiDenEstadoCod=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV57ProdutoCFOSaiDenEstadoCod=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCFOSAIDENESTADOCOD",gx.O.AV57ProdutoCFOSaiDenEstadoCod,0)},c2v:function(){gx.O.AV57ProdutoCFOSaiDenEstadoCod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCFOSAIDENESTADOCOD",'.')},nac:gx.falseFn};
   GXValidFnc[205]={fld:"TABCFOSAIFOR",grid:0};
   GXValidFnc[208]={fld:"TEXTBLOCK42", format:0,grid:0};
   GXValidFnc[210]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtocfosaiforaestadocod,isvalid:null,rgrid:[],fld:"vPRODUTOCFOSAIFORAESTADOCOD",gxz:"ZV58ProdutoCFOSaiForaEstadoCod",gxold:"OV58ProdutoCFOSaiForaEstadoCod",gxvar:"AV58ProdutoCFOSaiForaEstadoCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58ProdutoCFOSaiForaEstadoCod=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV58ProdutoCFOSaiForaEstadoCod=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCFOSAIFORAESTADOCOD",gx.O.AV58ProdutoCFOSaiForaEstadoCod,0)},c2v:function(){gx.O.AV58ProdutoCFOSaiForaEstadoCod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCFOSAIFORAESTADOCOD",'.')},nac:gx.falseFn};
   GXValidFnc[211]={fld:"TABCFOSAIINSCDEN",grid:0};
   GXValidFnc[214]={fld:"TEXTBLOCK43", format:0,grid:0};
   GXValidFnc[216]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtocfosaiinscdenestadocod,isvalid:null,rgrid:[],fld:"vPRODUTOCFOSAIINSCDENESTADOCOD",gxz:"ZV59ProdutoCFOSaiInscDenEstadoCod",gxold:"OV59ProdutoCFOSaiInscDenEstadoCod",gxvar:"AV59ProdutoCFOSaiInscDenEstadoCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59ProdutoCFOSaiInscDenEstadoCod=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV59ProdutoCFOSaiInscDenEstadoCod=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCFOSAIINSCDENESTADOCOD",gx.O.AV59ProdutoCFOSaiInscDenEstadoCod,0)},c2v:function(){gx.O.AV59ProdutoCFOSaiInscDenEstadoCod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCFOSAIINSCDENESTADOCOD",'.')},nac:gx.falseFn};
   GXValidFnc[217]={fld:"TABCFOSAIINSCFOR",grid:0};
   GXValidFnc[220]={fld:"TEXTBLOCK44", format:0,grid:0};
   GXValidFnc[222]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtocfosaiinscforestadocod,isvalid:null,rgrid:[],fld:"vPRODUTOCFOSAIINSCFORESTADOCOD",gxz:"ZV60ProdutoCFOSaiInscForEstadoCod",gxold:"OV60ProdutoCFOSaiInscForEstadoCod",gxvar:"AV60ProdutoCFOSaiInscForEstadoCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60ProdutoCFOSaiInscForEstadoCod=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV60ProdutoCFOSaiInscForEstadoCod=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCFOSAIINSCFORESTADOCOD",gx.O.AV60ProdutoCFOSaiInscForEstadoCod,0)},c2v:function(){gx.O.AV60ProdutoCFOSaiInscForEstadoCod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCFOSAIINSCFORESTADOCOD",'.')},nac:gx.falseFn};
   GXValidFnc[223]={fld:"TABGENERO",grid:0};
   GXValidFnc[226]={fld:"TEXTBLOCK45", format:0,grid:0};
   GXValidFnc[228]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Generoid,isvalid:null,rgrid:[],fld:"vGENEROID",gxz:"ZV62GeneroId",gxold:"OV62GeneroId",gxvar:"AV62GeneroId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV62GeneroId=Value},v2z:function(Value){gx.O.ZV62GeneroId=Value},v2c:function(){gx.fn.setControlValue("vGENEROID",gx.O.AV62GeneroId,0)},c2v:function(){gx.O.AV62GeneroId=this.val()},val:function(){return gx.fn.getControlValue("vGENEROID")},nac:gx.falseFn};
   GXValidFnc[229]={lvl:0,type:"svchar",len:160,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGENERODESCRICAO",gxz:"ZV217GeneroDescricao",gxold:"OV217GeneroDescricao",gxvar:"AV217GeneroDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV217GeneroDescricao=Value},v2z:function(Value){gx.O.ZV217GeneroDescricao=Value},v2c:function(){gx.fn.setControlValue("vGENERODESCRICAO",gx.O.AV217GeneroDescricao,0)},c2v:function(){gx.O.AV217GeneroDescricao=this.val()},val:function(){return gx.fn.getControlValue("vGENERODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[230]={fld:"TABCLASSABC",grid:0};
   GXValidFnc[233]={fld:"TEXTBLOCK46", format:0,grid:0};
   GXValidFnc[235]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCLASSIFICACAOABC",gxz:"ZV66ProdutoClassificacaoABC",gxold:"OV66ProdutoClassificacaoABC",gxvar:"AV66ProdutoClassificacaoABC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66ProdutoClassificacaoABC=Value},v2z:function(Value){gx.O.ZV66ProdutoClassificacaoABC=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOCLASSIFICACAOABC",gx.O.AV66ProdutoClassificacaoABC,0)},c2v:function(){gx.O.AV66ProdutoClassificacaoABC=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCLASSIFICACAOABC")},nac:gx.falseFn};
   GXValidFnc[236]={fld:"TABTPPRODUCAO",grid:0};
   GXValidFnc[239]={fld:"TEXTBLOCK47", format:0,grid:0};
   GXValidFnc[241]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOTIPOPRODUCAO",gxz:"ZV51ProdutoTipoProducao",gxold:"OV51ProdutoTipoProducao",gxvar:"AV51ProdutoTipoProducao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV51ProdutoTipoProducao=Value},v2z:function(Value){gx.O.ZV51ProdutoTipoProducao=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOTIPOPRODUCAO",gx.O.AV51ProdutoTipoProducao)},c2v:function(){gx.O.AV51ProdutoTipoProducao=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOTIPOPRODUCAO")},nac:gx.falseFn};
   GXValidFnc[242]={fld:"TABCCONTABIL",grid:0};
   GXValidFnc[245]={fld:"TEXTBLOCK48", format:0,grid:0};
   GXValidFnc[247]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCCONTABILTRADUTOR",gxz:"ZV115ProdutoCContabilTradutor",gxold:"OV115ProdutoCContabilTradutor",gxvar:"AV115ProdutoCContabilTradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV115ProdutoCContabilTradutor=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV115ProdutoCContabilTradutor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCCONTABILTRADUTOR",gx.O.AV115ProdutoCContabilTradutor,0)},c2v:function(){gx.O.AV115ProdutoCContabilTradutor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCCONTABILTRADUTOR",'.')},nac:gx.falseFn};
   GXValidFnc[248]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCCONTABILID",gxz:"ZV65ProdutoCContabilId",gxold:"OV65ProdutoCContabilId",gxvar:"AV65ProdutoCContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV65ProdutoCContabilId=Value},v2z:function(Value){gx.O.ZV65ProdutoCContabilId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOCCONTABILID",gx.O.AV65ProdutoCContabilId,0)},c2v:function(){gx.O.AV65ProdutoCContabilId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCCONTABILID")},nac:gx.falseFn};
   GXValidFnc[249]={fld:"IMGCCONT",grid:0};
   GXValidFnc[250]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCCONTABILNOME",gxz:"ZV218ProdutoCContabilNome",gxold:"OV218ProdutoCContabilNome",gxvar:"AV218ProdutoCContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV218ProdutoCContabilNome=Value},v2z:function(Value){gx.O.ZV218ProdutoCContabilNome=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOCCONTABILNOME",gx.O.AV218ProdutoCContabilNome,0)},c2v:function(){gx.O.AV218ProdutoCContabilNome=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCCONTABILNOME")},nac:gx.falseFn};
   GXValidFnc[251]={fld:"TABESQUEMA",grid:0};
   GXValidFnc[254]={fld:"TEXTBLOCK49", format:0,grid:0};
   GXValidFnc[256]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Esquemacodigo,isvalid:null,rgrid:[],fld:"vESQUEMACODIGO",gxz:"ZV61EsquemaCodigo",gxold:"OV61EsquemaCodigo",gxvar:"AV61EsquemaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61EsquemaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV61EsquemaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESQUEMACODIGO",gx.O.AV61EsquemaCodigo,0)},c2v:function(){gx.O.AV61EsquemaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESQUEMACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[257]={fld:"PROMPTESQUEMA",grid:0};
   GXValidFnc[258]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESQUEMADESCRICAO",gxz:"ZV221EsquemaDescricao",gxold:"OV221EsquemaDescricao",gxvar:"AV221EsquemaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV221EsquemaDescricao=Value},v2z:function(Value){gx.O.ZV221EsquemaDescricao=Value},v2c:function(){gx.fn.setControlValue("vESQUEMADESCRICAO",gx.O.AV221EsquemaDescricao,0)},c2v:function(){gx.O.AV221EsquemaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vESQUEMADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[259]={fld:"TABNCM",grid:0};
   GXValidFnc[262]={fld:"TEXTBLOCK50", format:0,grid:0};
   GXValidFnc[264]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNCMCODIGOMASK",gxz:"ZV126NCMCodigoMask",gxold:"OV126NCMCodigoMask",gxvar:"AV126NCMCodigoMask",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV126NCMCodigoMask=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV126NCMCodigoMask=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNCMCODIGOMASK",gx.O.AV126NCMCodigoMask,0)},c2v:function(){gx.O.AV126NCMCodigoMask=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNCMCODIGOMASK",'.')},nac:gx.falseFn};
   GXValidFnc[265]={fld:"IMGPROMPTNCM",grid:0};
   GXValidFnc[266]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNCMCODIGO",gxz:"ZV64NCMCodigo",gxold:"OV64NCMCodigo",gxvar:"AV64NCMCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64NCMCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV64NCMCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNCMCODIGO",gx.O.AV64NCMCodigo,0)},c2v:function(){gx.O.AV64NCMCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNCMCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[267]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNCMCODIGOAUX",gxz:"ZV127NcmCodigoAux",gxold:"OV127NcmCodigoAux",gxvar:"AV127NcmCodigoAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV127NcmCodigoAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV127NcmCodigoAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNCMCODIGOAUX",gx.O.AV127NcmCodigoAux,0)},c2v:function(){gx.O.AV127NcmCodigoAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNCMCODIGOAUX",'.')},nac:gx.falseFn};
   GXValidFnc[268]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNCMDESCRICAO",gxz:"ZV249NCMDescricao",gxold:"OV249NCMDescricao",gxvar:"AV249NCMDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV249NCMDescricao=Value},v2z:function(Value){gx.O.ZV249NCMDescricao=Value},v2c:function(){gx.fn.setControlValue("vNCMDESCRICAO",gx.O.AV249NCMDescricao,0)},c2v:function(){gx.O.AV249NCMDescricao=this.val()},val:function(){return gx.fn.getControlValue("vNCMDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[269]={fld:"TABLISTASER",grid:0};
   GXValidFnc[272]={fld:"TEXTBLOCK51", format:0,grid:0};
   GXValidFnc[274]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Listaservicoid,isvalid:null,rgrid:[],fld:"vLISTASERVICOID",gxz:"ZV63ListaServicoId",gxold:"OV63ListaServicoId",gxvar:"AV63ListaServicoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63ListaServicoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV63ListaServicoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLISTASERVICOID",gx.O.AV63ListaServicoId,0)},c2v:function(){gx.O.AV63ListaServicoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLISTASERVICOID",'.')},nac:gx.falseFn};
   GXValidFnc[275]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLISTASERVICODESCRICAO",gxz:"ZV193ListaServicoDescricao",gxold:"OV193ListaServicoDescricao",gxvar:"AV193ListaServicoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV193ListaServicoDescricao=Value},v2z:function(Value){gx.O.ZV193ListaServicoDescricao=Value},v2c:function(){gx.fn.setControlValue("vLISTASERVICODESCRICAO",gx.O.AV193ListaServicoDescricao,0)},c2v:function(){gx.O.AV193ListaServicoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vLISTASERVICODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[276]={fld:"TABIPIENT",grid:0};
   GXValidFnc[279]={fld:"TEXTBLOCK52", format:0,grid:0};
   GXValidFnc[281]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRIENTCODIGOIPI",gxz:"ZV67ProdutoSitTriEntCodigoIPI",gxold:"OV67ProdutoSitTriEntCodigoIPI",gxvar:"AV67ProdutoSitTriEntCodigoIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67ProdutoSitTriEntCodigoIPI=Value},v2z:function(Value){gx.O.ZV67ProdutoSitTriEntCodigoIPI=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOSITTRIENTCODIGOIPI",gx.O.AV67ProdutoSitTriEntCodigoIPI,0)},c2v:function(){gx.O.AV67ProdutoSitTriEntCodigoIPI=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRIENTCODIGOIPI")},nac:gx.falseFn};
   GXValidFnc[282]={fld:"PROMPT1",grid:0};
   GXValidFnc[283]={fld:"TABPCIPIENT",grid:0};
   GXValidFnc[286]={fld:"TEXTBLOCK53", format:0,grid:0};
   GXValidFnc[288]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOIPIPCENTRADA",gxz:"ZV68ProdutoIPIPCEntrada",gxold:"OV68ProdutoIPIPCEntrada",gxvar:"AV68ProdutoIPIPCEntrada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68ProdutoIPIPCEntrada=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV68ProdutoIPIPCEntrada=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPRODUTOIPIPCENTRADA",gx.O.AV68ProdutoIPIPCEntrada,2,',')},c2v:function(){gx.O.AV68ProdutoIPIPCEntrada=this.val()},val:function(){return gx.fn.getDecimalValue("vPRODUTOIPIPCENTRADA",'.',',')},nac:gx.falseFn};
   GXValidFnc[289]={fld:"TABIPISAI",grid:0};
   GXValidFnc[292]={fld:"TEXTBLOCK54", format:0,grid:0};
   GXValidFnc[294]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRISAICODIGOIPI",gxz:"ZV70ProdutoSitTriSaiCodigoIPI",gxold:"OV70ProdutoSitTriSaiCodigoIPI",gxvar:"AV70ProdutoSitTriSaiCodigoIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70ProdutoSitTriSaiCodigoIPI=Value},v2z:function(Value){gx.O.ZV70ProdutoSitTriSaiCodigoIPI=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOSITTRISAICODIGOIPI",gx.O.AV70ProdutoSitTriSaiCodigoIPI,0)},c2v:function(){gx.O.AV70ProdutoSitTriSaiCodigoIPI=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRISAICODIGOIPI")},nac:gx.falseFn};
   GXValidFnc[295]={fld:"PROMPT2",grid:0};
   GXValidFnc[296]={fld:"TABPCIPISAI",grid:0};
   GXValidFnc[299]={fld:"TEXTBLOCK55", format:0,grid:0};
   GXValidFnc[301]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOIPIPCSAIDA",gxz:"ZV69ProdutoIPIPCSaida",gxold:"OV69ProdutoIPIPCSaida",gxvar:"AV69ProdutoIPIPCSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69ProdutoIPIPCSaida=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV69ProdutoIPIPCSaida=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPRODUTOIPIPCSAIDA",gx.O.AV69ProdutoIPIPCSaida,2,',')},c2v:function(){gx.O.AV69ProdutoIPIPCSaida=this.val()},val:function(){return gx.fn.getDecimalValue("vPRODUTOIPIPCSAIDA",'.',',')},nac:gx.falseFn};
   GXValidFnc[302]={fld:"TABPISENT",grid:0};
   GXValidFnc[305]={fld:"TEXTBLOCK56", format:0,grid:0};
   GXValidFnc[307]={lvl:0,type:"decimal",len:8,dec:4,sign:false,pic:"ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOPISENTRADA",gxz:"ZV98ProdutoPISEntrada",gxold:"OV98ProdutoPISEntrada",gxvar:"AV98ProdutoPISEntrada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV98ProdutoPISEntrada=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV98ProdutoPISEntrada=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPRODUTOPISENTRADA",gx.O.AV98ProdutoPISEntrada,4,',')},c2v:function(){gx.O.AV98ProdutoPISEntrada=this.val()},val:function(){return gx.fn.getDecimalValue("vPRODUTOPISENTRADA",'.',',')},nac:gx.falseFn};
   GXValidFnc[308]={fld:"TABMARKUP",grid:0};
   GXValidFnc[311]={fld:"TEXTBLOCK57", format:0,grid:0};
   GXValidFnc[313]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOMARGEMMARKUPCODIGO",gxz:"ZV71ProdutoMargemMarkupCodigo",gxold:"OV71ProdutoMargemMarkupCodigo",gxvar:"AV71ProdutoMargemMarkupCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71ProdutoMargemMarkupCodigo=Value},v2z:function(Value){gx.O.ZV71ProdutoMargemMarkupCodigo=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOMARGEMMARKUPCODIGO",gx.O.AV71ProdutoMargemMarkupCodigo,0)},c2v:function(){gx.O.AV71ProdutoMargemMarkupCodigo=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOMARGEMMARKUPCODIGO")},nac:gx.falseFn};
   GXValidFnc[314]={fld:"TABPISSAI",grid:0};
   GXValidFnc[317]={fld:"TEXTBLOCK58", format:0,grid:0};
   GXValidFnc[319]={lvl:0,type:"decimal",len:8,dec:4,sign:false,pic:"ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOPISSAIDA",gxz:"ZV74ProdutoPISSaida",gxold:"OV74ProdutoPISSaida",gxvar:"AV74ProdutoPISSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74ProdutoPISSaida=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV74ProdutoPISSaida=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPRODUTOPISSAIDA",gx.O.AV74ProdutoPISSaida,4,',')},c2v:function(){gx.O.AV74ProdutoPISSaida=this.val()},val:function(){return gx.fn.getDecimalValue("vPRODUTOPISSAIDA",'.',',')},nac:gx.falseFn};
   GXValidFnc[320]={fld:"TABPISEXP",grid:0};
   GXValidFnc[323]={fld:"TEXTBLOCK59", format:0,grid:0};
   GXValidFnc[325]={lvl:0,type:"decimal",len:8,dec:4,sign:false,pic:"ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOPISEXPORTACAO",gxz:"ZV72ProdutoPISExportacao",gxold:"OV72ProdutoPISExportacao",gxvar:"AV72ProdutoPISExportacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72ProdutoPISExportacao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV72ProdutoPISExportacao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPRODUTOPISEXPORTACAO",gx.O.AV72ProdutoPISExportacao,4,',')},c2v:function(){gx.O.AV72ProdutoPISExportacao=this.val()},val:function(){return gx.fn.getDecimalValue("vPRODUTOPISEXPORTACAO",'.',',')},nac:gx.falseFn};
   GXValidFnc[326]={fld:"TABPISRED",grid:0};
   GXValidFnc[329]={fld:"TEXTBLOCK60", format:0,grid:0};
   GXValidFnc[331]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOPISREDUCAOBASE",gxz:"ZV73ProdutoPISReducaoBase",gxold:"OV73ProdutoPISReducaoBase",gxvar:"AV73ProdutoPISReducaoBase",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73ProdutoPISReducaoBase=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV73ProdutoPISReducaoBase=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPRODUTOPISREDUCAOBASE",gx.O.AV73ProdutoPISReducaoBase,2,',')},c2v:function(){gx.O.AV73ProdutoPISReducaoBase=this.val()},val:function(){return gx.fn.getDecimalValue("vPRODUTOPISREDUCAOBASE",'.',',')},nac:gx.falseFn};
   GXValidFnc[332]={fld:"TABCOFINSENT",grid:0};
   GXValidFnc[335]={fld:"TEXTBLOCK61", format:0,grid:0};
   GXValidFnc[337]={lvl:0,type:"decimal",len:8,dec:4,sign:false,pic:"ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCOFINSENTRADA",gxz:"ZV75ProdutoCOFINSEntrada",gxold:"OV75ProdutoCOFINSEntrada",gxvar:"AV75ProdutoCOFINSEntrada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV75ProdutoCOFINSEntrada=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV75ProdutoCOFINSEntrada=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPRODUTOCOFINSENTRADA",gx.O.AV75ProdutoCOFINSEntrada,4,',')},c2v:function(){gx.O.AV75ProdutoCOFINSEntrada=this.val()},val:function(){return gx.fn.getDecimalValue("vPRODUTOCOFINSENTRADA",'.',',')},nac:gx.falseFn};
   GXValidFnc[338]={fld:"TABCOFINSSAI",grid:0};
   GXValidFnc[341]={fld:"TEXTBLOCK62", format:0,grid:0};
   GXValidFnc[343]={lvl:0,type:"decimal",len:8,dec:4,sign:false,pic:"ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCOFINSSAIDA",gxz:"ZV78ProdutoCOFINSSaida",gxold:"OV78ProdutoCOFINSSaida",gxvar:"AV78ProdutoCOFINSSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV78ProdutoCOFINSSaida=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV78ProdutoCOFINSSaida=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPRODUTOCOFINSSAIDA",gx.O.AV78ProdutoCOFINSSaida,4,',')},c2v:function(){gx.O.AV78ProdutoCOFINSSaida=this.val()},val:function(){return gx.fn.getDecimalValue("vPRODUTOCOFINSSAIDA",'.',',')},nac:gx.falseFn};
   GXValidFnc[344]={fld:"TABCOFINSEXP",grid:0};
   GXValidFnc[347]={fld:"TEXTBLOCK63", format:0,grid:0};
   GXValidFnc[349]={lvl:0,type:"decimal",len:8,dec:4,sign:false,pic:"ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCOFINSEXPORTACAO",gxz:"ZV76ProdutoCOFINSExportacao",gxold:"OV76ProdutoCOFINSExportacao",gxvar:"AV76ProdutoCOFINSExportacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV76ProdutoCOFINSExportacao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV76ProdutoCOFINSExportacao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPRODUTOCOFINSEXPORTACAO",gx.O.AV76ProdutoCOFINSExportacao,4,',')},c2v:function(){gx.O.AV76ProdutoCOFINSExportacao=this.val()},val:function(){return gx.fn.getDecimalValue("vPRODUTOCOFINSEXPORTACAO",'.',',')},nac:gx.falseFn};
   GXValidFnc[350]={fld:"TABCOFINSRED",grid:0};
   GXValidFnc[353]={fld:"TEXTBLOCK64", format:0,grid:0};
   GXValidFnc[355]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCOFINSREDUCAOBASE",gxz:"ZV77ProdutoCOFINSReducaoBase",gxold:"OV77ProdutoCOFINSReducaoBase",gxvar:"AV77ProdutoCOFINSReducaoBase",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77ProdutoCOFINSReducaoBase=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV77ProdutoCOFINSReducaoBase=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPRODUTOCOFINSREDUCAOBASE",gx.O.AV77ProdutoCOFINSReducaoBase,2,',')},c2v:function(){gx.O.AV77ProdutoCOFINSReducaoBase=this.val()},val:function(){return gx.fn.getDecimalValue("vPRODUTOCOFINSREDUCAOBASE",'.',',')},nac:gx.falseFn};
   GXValidFnc[356]={fld:"TABICMSENTDEN",grid:0};
   GXValidFnc[359]={fld:"TEXTBLOCK65", format:0,grid:0};
   GXValidFnc[361]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtosittridenenttipoicms,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRIDENENTTIPOICMS",gxz:"ZV80ProdutoSitTriDenEntTipoICMS",gxold:"OV80ProdutoSitTriDenEntTipoICMS",gxvar:"AV80ProdutoSitTriDenEntTipoICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV80ProdutoSitTriDenEntTipoICMS=Value},v2z:function(Value){gx.O.ZV80ProdutoSitTriDenEntTipoICMS=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOSITTRIDENENTTIPOICMS",gx.O.AV80ProdutoSitTriDenEntTipoICMS)},c2v:function(){gx.O.AV80ProdutoSitTriDenEntTipoICMS=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRIDENENTTIPOICMS")},nac:gx.falseFn};
   GXValidFnc[362]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtosittridenentcodicms,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRIDENENTCODICMS",gxz:"ZV79ProdutoSitTriDenEntCodICMS",gxold:"OV79ProdutoSitTriDenEntCodICMS",gxvar:"AV79ProdutoSitTriDenEntCodICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV79ProdutoSitTriDenEntCodICMS=Value},v2z:function(Value){gx.O.ZV79ProdutoSitTriDenEntCodICMS=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOSITTRIDENENTCODICMS",gx.O.AV79ProdutoSitTriDenEntCodICMS,0)},c2v:function(){gx.O.AV79ProdutoSitTriDenEntCodICMS=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRIDENENTCODICMS")},nac:gx.falseFn};
   GXValidFnc[363]={fld:"PROMPT9",grid:0};
   GXValidFnc[364]={fld:"TABICMSSAIDEN",grid:0};
   GXValidFnc[367]={fld:"TEXTBLOCK66", format:0,grid:0};
   GXValidFnc[369]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRIDENSAITIPOICMS",gxz:"ZV82ProdutoSitTriDenSaiTipoICMS",gxold:"OV82ProdutoSitTriDenSaiTipoICMS",gxvar:"AV82ProdutoSitTriDenSaiTipoICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV82ProdutoSitTriDenSaiTipoICMS=Value},v2z:function(Value){gx.O.ZV82ProdutoSitTriDenSaiTipoICMS=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOSITTRIDENSAITIPOICMS",gx.O.AV82ProdutoSitTriDenSaiTipoICMS,0)},c2v:function(){gx.O.AV82ProdutoSitTriDenSaiTipoICMS=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRIDENSAITIPOICMS")},nac:gx.falseFn};
   GXValidFnc[370]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtosittridensaicodicms,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRIDENSAICODICMS",gxz:"ZV81ProdutoSitTriDenSaiCodICMS",gxold:"OV81ProdutoSitTriDenSaiCodICMS",gxvar:"AV81ProdutoSitTriDenSaiCodICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV81ProdutoSitTriDenSaiCodICMS=Value},v2z:function(Value){gx.O.ZV81ProdutoSitTriDenSaiCodICMS=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOSITTRIDENSAICODICMS",gx.O.AV81ProdutoSitTriDenSaiCodICMS,0)},c2v:function(){gx.O.AV81ProdutoSitTriDenSaiCodICMS=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRIDENSAICODICMS")},nac:gx.falseFn};
   GXValidFnc[371]={fld:"PROMPT11",grid:0};
   GXValidFnc[372]={fld:"TABICMSENTFOR",grid:0};
   GXValidFnc[375]={fld:"TEXTBLOCK67", format:0,grid:0};
   GXValidFnc[377]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtosittriforenttipoicms,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRIFORENTTIPOICMS",gxz:"ZV84ProdutoSitTriForEntTipoICMS",gxold:"OV84ProdutoSitTriForEntTipoICMS",gxvar:"AV84ProdutoSitTriForEntTipoICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV84ProdutoSitTriForEntTipoICMS=Value},v2z:function(Value){gx.O.ZV84ProdutoSitTriForEntTipoICMS=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOSITTRIFORENTTIPOICMS",gx.O.AV84ProdutoSitTriForEntTipoICMS)},c2v:function(){gx.O.AV84ProdutoSitTriForEntTipoICMS=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRIFORENTTIPOICMS")},nac:gx.falseFn};
   GXValidFnc[378]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtosittriforentcodicms,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRIFORENTCODICMS",gxz:"ZV83ProdutoSitTriForEntCodICMS",gxold:"OV83ProdutoSitTriForEntCodICMS",gxvar:"AV83ProdutoSitTriForEntCodICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV83ProdutoSitTriForEntCodICMS=Value},v2z:function(Value){gx.O.ZV83ProdutoSitTriForEntCodICMS=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOSITTRIFORENTCODICMS",gx.O.AV83ProdutoSitTriForEntCodICMS,0)},c2v:function(){gx.O.AV83ProdutoSitTriForEntCodICMS=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRIFORENTCODICMS")},nac:gx.falseFn};
   GXValidFnc[379]={fld:"PROMPT10",grid:0};
   GXValidFnc[380]={fld:"TABICMSSAIFOR",grid:0};
   GXValidFnc[383]={fld:"TEXTBLOCK68", format:0,grid:0};
   GXValidFnc[385]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRIFORSAITIPOICMS",gxz:"ZV86ProdutoSitTriForSaiTipoICMS",gxold:"OV86ProdutoSitTriForSaiTipoICMS",gxvar:"AV86ProdutoSitTriForSaiTipoICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV86ProdutoSitTriForSaiTipoICMS=Value},v2z:function(Value){gx.O.ZV86ProdutoSitTriForSaiTipoICMS=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOSITTRIFORSAITIPOICMS",gx.O.AV86ProdutoSitTriForSaiTipoICMS,0)},c2v:function(){gx.O.AV86ProdutoSitTriForSaiTipoICMS=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRIFORSAITIPOICMS")},nac:gx.falseFn};
   GXValidFnc[386]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtosittriforsaicodicms,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRIFORSAICODICMS",gxz:"ZV85ProdutoSitTriForSaiCodICMS",gxold:"OV85ProdutoSitTriForSaiCodICMS",gxvar:"AV85ProdutoSitTriForSaiCodICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV85ProdutoSitTriForSaiCodICMS=Value},v2z:function(Value){gx.O.ZV85ProdutoSitTriForSaiCodICMS=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOSITTRIFORSAICODICMS",gx.O.AV85ProdutoSitTriForSaiCodICMS,0)},c2v:function(){gx.O.AV85ProdutoSitTriForSaiCodICMS=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRIFORSAICODICMS")},nac:gx.falseFn};
   GXValidFnc[387]={fld:"PROMPT12",grid:0};
   GXValidFnc[388]={fld:"TABCSTPISENT",grid:0};
   GXValidFnc[391]={fld:"TEXTBLOCK69", format:0,grid:0};
   GXValidFnc[393]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtosittrientpiscodigo,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRIENTPISCODIGO",gxz:"ZV87ProdutoSitTriEntPISCodigo",gxold:"OV87ProdutoSitTriEntPISCodigo",gxvar:"AV87ProdutoSitTriEntPISCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV87ProdutoSitTriEntPISCodigo=Value},v2z:function(Value){gx.O.ZV87ProdutoSitTriEntPISCodigo=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOSITTRIENTPISCODIGO",gx.O.AV87ProdutoSitTriEntPISCodigo,0)},c2v:function(){gx.O.AV87ProdutoSitTriEntPISCodigo=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRIENTPISCODIGO")},nac:gx.falseFn};
   GXValidFnc[394]={fld:"PROMPT3",grid:0};
   GXValidFnc[395]={fld:"TABCSTPISSAI",grid:0};
   GXValidFnc[398]={fld:"TEXTBLOCK70", format:0,grid:0};
   GXValidFnc[400]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtosittrisaipiscodigo,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRISAIPISCODIGO",gxz:"ZV89ProdutoSitTriSaiPISCodigo",gxold:"OV89ProdutoSitTriSaiPISCodigo",gxvar:"AV89ProdutoSitTriSaiPISCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV89ProdutoSitTriSaiPISCodigo=Value},v2z:function(Value){gx.O.ZV89ProdutoSitTriSaiPISCodigo=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOSITTRISAIPISCODIGO",gx.O.AV89ProdutoSitTriSaiPISCodigo,0)},c2v:function(){gx.O.AV89ProdutoSitTriSaiPISCodigo=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRISAIPISCODIGO")},nac:gx.falseFn};
   GXValidFnc[401]={fld:"PROMPT4",grid:0};
   GXValidFnc[402]={fld:"TABCSTPISEXP",grid:0};
   GXValidFnc[405]={fld:"TEXTBLOCK71", format:0,grid:0};
   GXValidFnc[407]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtosittriextpiscodigo,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRIEXTPISCODIGO",gxz:"ZV88ProdutoSitTriExtPISCodigo",gxold:"OV88ProdutoSitTriExtPISCodigo",gxvar:"AV88ProdutoSitTriExtPISCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV88ProdutoSitTriExtPISCodigo=Value},v2z:function(Value){gx.O.ZV88ProdutoSitTriExtPISCodigo=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOSITTRIEXTPISCODIGO",gx.O.AV88ProdutoSitTriExtPISCodigo,0)},c2v:function(){gx.O.AV88ProdutoSitTriExtPISCodigo=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRIEXTPISCODIGO")},nac:gx.falseFn};
   GXValidFnc[408]={fld:"PROMPT5",grid:0};
   GXValidFnc[409]={fld:"TABCSTCOFINSENT",grid:0};
   GXValidFnc[412]={fld:"TEXTBLOCK72", format:0,grid:0};
   GXValidFnc[414]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtosittrientcofcodigo,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRIENTCOFCODIGO",gxz:"ZV90ProdutoSitTriEntCOFCodigo",gxold:"OV90ProdutoSitTriEntCOFCodigo",gxvar:"AV90ProdutoSitTriEntCOFCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV90ProdutoSitTriEntCOFCodigo=Value},v2z:function(Value){gx.O.ZV90ProdutoSitTriEntCOFCodigo=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOSITTRIENTCOFCODIGO",gx.O.AV90ProdutoSitTriEntCOFCodigo,0)},c2v:function(){gx.O.AV90ProdutoSitTriEntCOFCodigo=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRIENTCOFCODIGO")},nac:gx.falseFn};
   GXValidFnc[415]={fld:"PROMPT6",grid:0};
   GXValidFnc[416]={fld:"TABCSTCOFINSSAI",grid:0};
   GXValidFnc[419]={fld:"TEXTBLOCK73", format:0,grid:0};
   GXValidFnc[421]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtosittrisaicofcodigo,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRISAICOFCODIGO",gxz:"ZV91ProdutoSitTriSaiCOFCodigo",gxold:"OV91ProdutoSitTriSaiCOFCodigo",gxvar:"AV91ProdutoSitTriSaiCOFCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV91ProdutoSitTriSaiCOFCodigo=Value},v2z:function(Value){gx.O.ZV91ProdutoSitTriSaiCOFCodigo=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOSITTRISAICOFCODIGO",gx.O.AV91ProdutoSitTriSaiCOFCodigo,0)},c2v:function(){gx.O.AV91ProdutoSitTriSaiCOFCodigo=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRISAICOFCODIGO")},nac:gx.falseFn};
   GXValidFnc[422]={fld:"PROMPT7",grid:0};
   GXValidFnc[423]={fld:"TABCSTCOFINSEXP",grid:0};
   GXValidFnc[426]={fld:"TEXTBLOCK74", format:0,grid:0};
   GXValidFnc[428]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtosittriexpcofcodigo,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRIEXPCOFCODIGO",gxz:"ZV92ProdutoSitTriExpCOFCodigo",gxold:"OV92ProdutoSitTriExpCOFCodigo",gxvar:"AV92ProdutoSitTriExpCOFCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV92ProdutoSitTriExpCOFCodigo=Value},v2z:function(Value){gx.O.ZV92ProdutoSitTriExpCOFCodigo=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOSITTRIEXPCOFCODIGO",gx.O.AV92ProdutoSitTriExpCOFCodigo,0)},c2v:function(){gx.O.AV92ProdutoSitTriExpCOFCodigo=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRIEXPCOFCODIGO")},nac:gx.falseFn};
   GXValidFnc[429]={fld:"PROMPT8",grid:0};
   GXValidFnc[430]={fld:"TABGRUPOPRECO",grid:0};
   GXValidFnc[433]={fld:"TEXTBLOCK75", format:0,grid:0};
   GXValidFnc[435]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtogrupoprecoid,isvalid:null,rgrid:[],fld:"vPRODUTOGRUPOPRECOID",gxz:"ZV93ProdutoGrupoPrecoID",gxold:"OV93ProdutoGrupoPrecoID",gxvar:"AV93ProdutoGrupoPrecoID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV93ProdutoGrupoPrecoID=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV93ProdutoGrupoPrecoID=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOGRUPOPRECOID",gx.O.AV93ProdutoGrupoPrecoID,0)},c2v:function(){gx.O.AV93ProdutoGrupoPrecoID=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOGRUPOPRECOID",'.')},nac:gx.falseFn};
   GXValidFnc[436]={fld:"TABIMPOSTOAPROX",grid:0};
   GXValidFnc[439]={fld:"TEXTBLOCK84", format:0,grid:0};
   GXValidFnc[441]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOALIQUOTAAPROXNACIONAL",gxz:"ZV241ProdutoAliquotaAproxNacional",gxold:"OV241ProdutoAliquotaAproxNacional",gxvar:"AV241ProdutoAliquotaAproxNacional",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV241ProdutoAliquotaAproxNacional=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV241ProdutoAliquotaAproxNacional=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPRODUTOALIQUOTAAPROXNACIONAL",gx.O.AV241ProdutoAliquotaAproxNacional,2,',')},c2v:function(){gx.O.AV241ProdutoAliquotaAproxNacional=this.val()},val:function(){return gx.fn.getDecimalValue("vPRODUTOALIQUOTAAPROXNACIONAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[444]={fld:"TEXTBLOCK85", format:0,grid:0};
   GXValidFnc[446]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOALIQUOTAAPROXIMPORTACAO",gxz:"ZV242ProdutoAliquotaAproxImportacao",gxold:"OV242ProdutoAliquotaAproxImportacao",gxvar:"AV242ProdutoAliquotaAproxImportacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV242ProdutoAliquotaAproxImportacao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV242ProdutoAliquotaAproxImportacao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPRODUTOALIQUOTAAPROXIMPORTACAO",gx.O.AV242ProdutoAliquotaAproxImportacao,2,',')},c2v:function(){gx.O.AV242ProdutoAliquotaAproxImportacao=this.val()},val:function(){return gx.fn.getDecimalValue("vPRODUTOALIQUOTAAPROXIMPORTACAO",'.',',')},nac:gx.falseFn};
   GXValidFnc[447]={fld:"TABPERCMARGEMLUCRO",grid:0};
   GXValidFnc[450]={fld:"TEXTBLOCK88", format:0,grid:0};
   GXValidFnc[452]={lvl:0,type:"decimal",len:16,dec:6,sign:false,pic:"ZZZ,ZZZ,ZZ9.999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOMARGEMLUCRO",gxz:"ZV252ProdutoMargemLucro",gxold:"OV252ProdutoMargemLucro",gxvar:"AV252ProdutoMargemLucro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV252ProdutoMargemLucro=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV252ProdutoMargemLucro=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPRODUTOMARGEMLUCRO",gx.O.AV252ProdutoMargemLucro,6,',')},c2v:function(){gx.O.AV252ProdutoMargemLucro=this.val()},val:function(){return gx.fn.getDecimalValue("vPRODUTOMARGEMLUCRO",'.',',')},nac:gx.falseFn};
   GXValidFnc[453]={fld:"TABICMSST",grid:0};
   GXValidFnc[456]={fld:"TEXTBLOCK89", format:0,grid:0};
   GXValidFnc[458]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOICMSST",gxz:"ZV253ProdutoICMSST",gxold:"OV253ProdutoICMSST",gxvar:"AV253ProdutoICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV253ProdutoICMSST=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV253ProdutoICMSST=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPRODUTOICMSST",gx.O.AV253ProdutoICMSST,2,',')},c2v:function(){gx.O.AV253ProdutoICMSST=this.val()},val:function(){return gx.fn.getDecimalValue("vPRODUTOICMSST",'.',',')},nac:gx.falseFn};
   GXValidFnc[459]={fld:"TABDIFICMS",grid:0};
   GXValidFnc[462]={fld:"TEXTBLOCK90", format:0,grid:0};
   GXValidFnc[464]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODIFERENCAICMS",gxz:"ZV254ProdutoDiferencaICMS",gxold:"OV254ProdutoDiferencaICMS",gxvar:"AV254ProdutoDiferencaICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV254ProdutoDiferencaICMS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV254ProdutoDiferencaICMS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPRODUTODIFERENCAICMS",gx.O.AV254ProdutoDiferencaICMS,2,',')},c2v:function(){gx.O.AV254ProdutoDiferencaICMS=this.val()},val:function(){return gx.fn.getDecimalValue("vPRODUTODIFERENCAICMS",'.',',')},nac:gx.falseFn};
   GXValidFnc[465]={fld:"TABPERCENTUALMVA",grid:0};
   GXValidFnc[468]={fld:"TEXTBLOCK91", format:0,grid:0};
   GXValidFnc[470]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMVAPRODUTOPCMARGEM",gxz:"ZV255MVAProdutoPcMargem",gxold:"OV255MVAProdutoPcMargem",gxvar:"AV255MVAProdutoPcMargem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV255MVAProdutoPcMargem=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV255MVAProdutoPcMargem=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vMVAPRODUTOPCMARGEM",gx.O.AV255MVAProdutoPcMargem,2,',')},c2v:function(){gx.O.AV255MVAProdutoPcMargem=this.val()},val:function(){return gx.fn.getDecimalValue("vMVAPRODUTOPCMARGEM",'.',',')},nac:gx.falseFn};
   GXValidFnc[473]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[475]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Mvaprodutouf,isvalid:null,rgrid:[],fld:"vMVAPRODUTOUF",gxz:"ZV256MVAProdutoUf",gxold:"OV256MVAProdutoUf",gxvar:"AV256MVAProdutoUf",ucs:[],op:[475],ip:[475],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV256MVAProdutoUf=Value},v2z:function(Value){gx.O.ZV256MVAProdutoUf=Value},v2c:function(){gx.fn.setComboBoxValue("vMVAPRODUTOUF",gx.O.AV256MVAProdutoUf)},c2v:function(){gx.O.AV256MVAProdutoUf=this.val()},val:function(){return gx.fn.getControlValue("vMVAPRODUTOUF")},nac:gx.falseFn};
   GXValidFnc[476]={fld:"TABCODPRODUTO",grid:0};
   GXValidFnc[479]={fld:"TEXTBLOCK92", format:0,grid:0};
   GXValidFnc[481]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIFICACAOESTID",gxz:"ZV263CodificacaoEstId",gxold:"OV263CodificacaoEstId",gxvar:"AV263CodificacaoEstId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV263CodificacaoEstId=Value},v2z:function(Value){gx.O.ZV263CodificacaoEstId=Value},v2c:function(){gx.fn.setComboBoxValue("vCODIFICACAOESTID",gx.O.AV263CodificacaoEstId)},c2v:function(){gx.O.AV263CodificacaoEstId=this.val()},val:function(){return gx.fn.getControlValue("vCODIFICACAOESTID")},nac:gx.falseFn};
   GXValidFnc[484]={fld:"TEXTBLOCK93", format:0,grid:0};
   GXValidFnc[486]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIFICACAOVALOR",gxz:"ZV262ProdutoCodificacaoValor",gxold:"OV262ProdutoCodificacaoValor",gxvar:"AV262ProdutoCodificacaoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV262ProdutoCodificacaoValor=Value},v2z:function(Value){gx.O.ZV262ProdutoCodificacaoValor=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIFICACAOVALOR",gx.O.AV262ProdutoCodificacaoValor,0)},c2v:function(){gx.O.AV262ProdutoCodificacaoValor=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCODIFICACAOVALOR")},nac:gx.falseFn};
   GXValidFnc[487]={fld:"TABCLASSPRODUTO",grid:0};
   GXValidFnc[490]={fld:"TEXTBLOCK94", format:0,grid:0};
   GXValidFnc[492]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOESTID",gxz:"ZV260ClassificacaoEstId",gxold:"OV260ClassificacaoEstId",gxvar:"AV260ClassificacaoEstId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV260ClassificacaoEstId=Value},v2z:function(Value){gx.O.ZV260ClassificacaoEstId=Value},v2c:function(){gx.fn.setComboBoxValue("vCLASSIFICACAOESTID",gx.O.AV260ClassificacaoEstId)},c2v:function(){gx.O.AV260ClassificacaoEstId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOESTID")},nac:gx.falseFn};
   GXValidFnc[495]={fld:"TEXTBLOCK95", format:0,grid:0};
   GXValidFnc[497]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCLASSIFICACAOVALOR",gxz:"ZV261ProdutoClassificacaoValor",gxold:"OV261ProdutoClassificacaoValor",gxvar:"AV261ProdutoClassificacaoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV261ProdutoClassificacaoValor=Value},v2z:function(Value){gx.O.ZV261ProdutoClassificacaoValor=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOCLASSIFICACAOVALOR",gx.O.AV261ProdutoClassificacaoValor,0)},c2v:function(){gx.O.AV261ProdutoClassificacaoValor=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCLASSIFICACAOVALOR")},nac:gx.falseFn};
   GXValidFnc[498]={fld:"TABDESCMAXIMO",grid:0};
   GXValidFnc[501]={fld:"TEXTBLOCK96", format:0,grid:0};
   GXValidFnc[503]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precoid,isvalid:null,rgrid:[],fld:"vPRECOID",gxz:"ZV266PrecoId",gxold:"OV266PrecoId",gxvar:"AV266PrecoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV266PrecoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV266PrecoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECOID",gx.O.AV266PrecoId,0)},c2v:function(){gx.O.AV266PrecoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOID",'.')},nac:gx.falseFn};
   GXValidFnc[504]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECODESCRICAO",gxz:"ZV267PrecoDescricao",gxold:"OV267PrecoDescricao",gxvar:"AV267PrecoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV267PrecoDescricao=Value},v2z:function(Value){gx.O.ZV267PrecoDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRECODESCRICAO",gx.O.AV267PrecoDescricao,0)},c2v:function(){gx.O.AV267PrecoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRECODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[507]={fld:"TEXTBLOCK97", format:0,grid:0};
   GXValidFnc[509]={lvl:0,type:"decimal",len:16,dec:6,sign:false,pic:"ZZZ,ZZZ,ZZ9.999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPERCDESCMAXIMO",gxz:"ZV265PercDescMaximo",gxold:"OV265PercDescMaximo",gxvar:"AV265PercDescMaximo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV265PercDescMaximo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV265PercDescMaximo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPERCDESCMAXIMO",gx.O.AV265PercDescMaximo,6,',')},c2v:function(){gx.O.AV265PercDescMaximo=this.val()},val:function(){return gx.fn.getDecimalValue("vPERCDESCMAXIMO",'.',',')},nac:gx.falseFn};
   GXValidFnc[510]={fld:"TABNBS",grid:0};
   GXValidFnc[513]={fld:"TEXTBLOCK83", format:0,grid:0};
   GXValidFnc[515]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Nbscodigo,isvalid:null,rgrid:[],fld:"vNBSCODIGO",gxz:"ZV239NBSCodigo",gxold:"OV239NBSCodigo",gxvar:"AV239NBSCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV239NBSCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV239NBSCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNBSCODIGO",gx.O.AV239NBSCodigo,0)},c2v:function(){gx.O.AV239NBSCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNBSCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[516]={fld:"IMGPROMPTNBS",grid:0};
   GXValidFnc[517]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNBSCODIGOAUX",gxz:"ZV240NBSCodigoAux",gxold:"OV240NBSCodigoAux",gxvar:"AV240NBSCodigoAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV240NBSCodigoAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV240NBSCodigoAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNBSCODIGOAUX",gx.O.AV240NBSCodigoAux,0)},c2v:function(){gx.O.AV240NBSCodigoAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNBSCODIGOAUX",'.')},nac:gx.falseFn};
   GXValidFnc[518]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNBSDESCRICAO",gxz:"ZV246NBSDescricao",gxold:"OV246NBSDescricao",gxvar:"AV246NBSDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV246NBSDescricao=Value},v2z:function(Value){gx.O.ZV246NBSDescricao=Value},v2c:function(){gx.fn.setControlValue("vNBSDESCRICAO",gx.O.AV246NBSDescricao,0)},c2v:function(){gx.O.AV246NBSDescricao=this.val()},val:function(){return gx.fn.getControlValue("vNBSDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[519]={fld:"TABPCCOMISSAO",grid:0};
   GXValidFnc[522]={fld:"TEXTBLOCK115", format:0,grid:0};
   GXValidFnc[524]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOPCCOMISSAO",gxz:"ZV299ProdutoPCComissao",gxold:"OV299ProdutoPCComissao",gxvar:"AV299ProdutoPCComissao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV299ProdutoPCComissao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV299ProdutoPCComissao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPRODUTOPCCOMISSAO",gx.O.AV299ProdutoPCComissao,2,',')},c2v:function(){gx.O.AV299ProdutoPCComissao=this.val()},val:function(){return gx.fn.getDecimalValue("vPRODUTOPCCOMISSAO",'.',',')},nac:gx.falseFn};
   GXValidFnc[525]={fld:"TABSUBGRUPO",grid:0};
   GXValidFnc[528]={fld:"TEXTBLOCK116", format:0,grid:0};
   GXValidFnc[530]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Subgrupoprodutoidatu,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOIDATU",gxz:"ZV300SubgrupoProdutoIdAtu",gxold:"OV300SubgrupoProdutoIdAtu",gxvar:"AV300SubgrupoProdutoIdAtu",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV300SubgrupoProdutoIdAtu=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV300SubgrupoProdutoIdAtu=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOIDATU",gx.O.AV300SubgrupoProdutoIdAtu,0)},c2v:function(){gx.O.AV300SubgrupoProdutoIdAtu=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOPRODUTOIDATU",'.')},nac:gx.falseFn};
   GXValidFnc[531]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTODESCATU",gxz:"ZV301SubgrupoProdutoDescAtu",gxold:"OV301SubgrupoProdutoDescAtu",gxvar:"AV301SubgrupoProdutoDescAtu",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV301SubgrupoProdutoDescAtu=Value},v2z:function(Value){gx.O.ZV301SubgrupoProdutoDescAtu=Value},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTODESCATU",gx.O.AV301SubgrupoProdutoDescAtu,0)},c2v:function(){gx.O.AV301SubgrupoProdutoDescAtu=this.val()},val:function(){return gx.fn.getControlValue("vSUBGRUPOPRODUTODESCATU")},nac:gx.falseFn};
   GXValidFnc[532]={fld:"TABCEST",grid:0};
   GXValidFnc[535]={fld:"TEXTBLOCK118", format:0,grid:0};
   GXValidFnc[537]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:'e15xx2_client',rgrid:[],fld:"vPRODUTOCESTCODIGO",gxz:"ZV303ProdutoCESTCodigo",gxold:"OV303ProdutoCESTCodigo",gxvar:"AV303ProdutoCESTCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV303ProdutoCESTCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV303ProdutoCESTCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCESTCODIGO",gx.O.AV303ProdutoCESTCodigo,0)},c2v:function(){gx.O.AV303ProdutoCESTCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCESTCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[538]={fld:"IMGCEST",grid:0};
   GXValidFnc[539]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCESTDESCRICAO",gxz:"ZV304ProdutoCESTDescricao",gxold:"OV304ProdutoCESTDescricao",gxvar:"AV304ProdutoCESTDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV304ProdutoCESTDescricao=Value},v2z:function(Value){gx.O.ZV304ProdutoCESTDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOCESTDESCRICAO",gx.O.AV304ProdutoCESTDescricao,0)},c2v:function(){gx.O.AV304ProdutoCESTDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCESTDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[540]={fld:"TABSELECAO",grid:0};
   GXValidFnc[543]={fld:"TEXTBLOCK80", format:0,grid:0};
   GXValidFnc[547]={fld:"TABLE11",grid:0};
   GXValidFnc[550]={fld:"TEXTBLOCK113", format:0,grid:0};
   GXValidFnc[552]={fld:"TABLE18",grid:0};
   GXValidFnc[555]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOIDINI",gxz:"ZV291ProdutoIdIni",gxold:"OV291ProdutoIdIni",gxvar:"AV291ProdutoIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV291ProdutoIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV291ProdutoIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOIDINI",gx.O.AV291ProdutoIdIni,0)},c2v:function(){gx.O.AV291ProdutoIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[556]={fld:"BTNPROMPTINI",grid:0};
   GXValidFnc[558]={fld:"TEXTBLOCK126", format:0,grid:0};
   GXValidFnc[560]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOIDFIN",gxz:"ZV292ProdutoIdFin",gxold:"OV292ProdutoIdFin",gxvar:"AV292ProdutoIdFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV292ProdutoIdFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV292ProdutoIdFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOIDFIN",gx.O.AV292ProdutoIdFin,0)},c2v:function(){gx.O.AV292ProdutoIdFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOIDFIN",'.')},nac:gx.falseFn};
   GXValidFnc[561]={fld:"BTNPROMPTFIN",grid:0};
   GXValidFnc[564]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[566]={fld:"TABLE17",grid:0};
   GXValidFnc[569]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIAINI",gxz:"ZV128FamiliaIni",gxold:"OV128FamiliaIni",gxvar:"AV128FamiliaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV128FamiliaIni=Value},v2z:function(Value){gx.O.ZV128FamiliaIni=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAINI",gx.O.AV128FamiliaIni,0)},c2v:function(){gx.O.AV128FamiliaIni=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAINI")},nac:gx.falseFn};
   GXValidFnc[571]={fld:"TEXTBLOCK125", format:0,grid:0};
   GXValidFnc[573]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIAFIN",gxz:"ZV129FamiliaFin",gxold:"OV129FamiliaFin",gxvar:"AV129FamiliaFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV129FamiliaFin=Value},v2z:function(Value){gx.O.ZV129FamiliaFin=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAFIN",gx.O.AV129FamiliaFin,0)},c2v:function(){gx.O.AV129FamiliaFin=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAFIN")},nac:gx.falseFn};
   GXValidFnc[576]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[578]={fld:"TABLE16",grid:0};
   GXValidFnc[581]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNCMINICIAL",gxz:"ZV132NcmInicial",gxold:"OV132NcmInicial",gxvar:"AV132NcmInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV132NcmInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV132NcmInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNCMINICIAL",gx.O.AV132NcmInicial,0)},c2v:function(){gx.O.AV132NcmInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNCMINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[583]={fld:"TEXTBLOCK124", format:0,grid:0};
   GXValidFnc[585]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNCMFINAL",gxz:"ZV133NcmFinal",gxold:"OV133NcmFinal",gxvar:"AV133NcmFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV133NcmFinal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV133NcmFinal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNCMFINAL",gx.O.AV133NcmFinal,0)},c2v:function(){gx.O.AV133NcmFinal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNCMFINAL",'.')},nac:gx.falseFn};
   GXValidFnc[588]={fld:"TEXTBLOCK86", format:0,grid:0};
   GXValidFnc[590]={fld:"TABLE15",grid:0};
   GXValidFnc[593]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNBSINICIAL",gxz:"ZV244NBSInicial",gxold:"OV244NBSInicial",gxvar:"AV244NBSInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV244NBSInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV244NBSInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNBSINICIAL",gx.O.AV244NBSInicial,0)},c2v:function(){gx.O.AV244NBSInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNBSINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[595]={fld:"TEXTBLOCK122", format:0,grid:0};
   GXValidFnc[597]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNBSFINAL",gxz:"ZV245NBSFinal",gxold:"OV245NBSFinal",gxvar:"AV245NBSFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV245NBSFinal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV245NBSFinal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNBSFINAL",gx.O.AV245NBSFinal,0)},c2v:function(){gx.O.AV245NBSFinal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNBSFINAL",'.')},nac:gx.falseFn};
   GXValidFnc[600]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[602]={fld:"TABLE14",grid:0};
   GXValidFnc[605]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFABRICANTEINI",gxz:"ZV135FabricanteIni",gxold:"OV135FabricanteIni",gxvar:"AV135FabricanteIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV135FabricanteIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV135FabricanteIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFABRICANTEINI",gx.O.AV135FabricanteIni,0)},c2v:function(){gx.O.AV135FabricanteIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFABRICANTEINI",'.')},nac:gx.falseFn};
   GXValidFnc[607]={fld:"TEXTBLOCK121", format:0,grid:0};
   GXValidFnc[609]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFABRICANTEFIN",gxz:"ZV136FabricanteFin",gxold:"OV136FabricanteFin",gxvar:"AV136FabricanteFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV136FabricanteFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV136FabricanteFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFABRICANTEFIN",gx.O.AV136FabricanteFin,0)},c2v:function(){gx.O.AV136FabricanteFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFABRICANTEFIN",'.')},nac:gx.falseFn};
   GXValidFnc[612]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[614]={fld:"TABLE13",grid:0};
   GXValidFnc[617]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUNIDADECOMPRAINI",gxz:"ZV140UnidadeCompraIni",gxold:"OV140UnidadeCompraIni",gxvar:"AV140UnidadeCompraIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV140UnidadeCompraIni=Value},v2z:function(Value){gx.O.ZV140UnidadeCompraIni=Value},v2c:function(){gx.fn.setControlValue("vUNIDADECOMPRAINI",gx.O.AV140UnidadeCompraIni,0)},c2v:function(){gx.O.AV140UnidadeCompraIni=this.val()},val:function(){return gx.fn.getControlValue("vUNIDADECOMPRAINI")},nac:gx.falseFn};
   GXValidFnc[619]={fld:"TEXTBLOCK120", format:0,grid:0};
   GXValidFnc[621]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUNIDADECOMPRAFIN",gxz:"ZV141UnidadeCompraFin",gxold:"OV141UnidadeCompraFin",gxvar:"AV141UnidadeCompraFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV141UnidadeCompraFin=Value},v2z:function(Value){gx.O.ZV141UnidadeCompraFin=Value},v2c:function(){gx.fn.setControlValue("vUNIDADECOMPRAFIN",gx.O.AV141UnidadeCompraFin,0)},c2v:function(){gx.O.AV141UnidadeCompraFin=this.val()},val:function(){return gx.fn.getControlValue("vUNIDADECOMPRAFIN")},nac:gx.falseFn};
   GXValidFnc[624]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[626]={fld:"TABLE12",grid:0};
   GXValidFnc[629]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUNIDADEVENDAINI",gxz:"ZV142UnidadeVendaIni",gxold:"OV142UnidadeVendaIni",gxvar:"AV142UnidadeVendaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV142UnidadeVendaIni=Value},v2z:function(Value){gx.O.ZV142UnidadeVendaIni=Value},v2c:function(){gx.fn.setControlValue("vUNIDADEVENDAINI",gx.O.AV142UnidadeVendaIni,0)},c2v:function(){gx.O.AV142UnidadeVendaIni=this.val()},val:function(){return gx.fn.getControlValue("vUNIDADEVENDAINI")},nac:gx.falseFn};
   GXValidFnc[631]={fld:"TEXTBLOCK119", format:0,grid:0};
   GXValidFnc[633]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUNIDADEVENDAFIN",gxz:"ZV143UnidadeVendaFin",gxold:"OV143UnidadeVendaFin",gxvar:"AV143UnidadeVendaFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV143UnidadeVendaFin=Value},v2z:function(Value){gx.O.ZV143UnidadeVendaFin=Value},v2c:function(){gx.fn.setControlValue("vUNIDADEVENDAFIN",gx.O.AV143UnidadeVendaFin,0)},c2v:function(){gx.O.AV143UnidadeVendaFin=this.val()},val:function(){return gx.fn.getControlValue("vUNIDADEVENDAFIN")},nac:gx.falseFn};
   GXValidFnc[636]={fld:"TEXTBLOCK81", format:0,grid:0};
   GXValidFnc[638]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Grupoprodutoid,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTOID",gxz:"ZV225GrupoProdutoId",gxold:"OV225GrupoProdutoId",gxvar:"AV225GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV225GrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV225GrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOID",gx.O.AV225GrupoProdutoId,0)},c2v:function(){gx.O.AV225GrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[639]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTODESCRICAO",gxz:"ZV234GrupoProdutoDescricao",gxold:"OV234GrupoProdutoDescricao",gxvar:"AV234GrupoProdutoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV234GrupoProdutoDescricao=Value},v2z:function(Value){gx.O.ZV234GrupoProdutoDescricao=Value},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTODESCRICAO",gx.O.AV234GrupoProdutoDescricao,0)},c2v:function(){gx.O.AV234GrupoProdutoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vGRUPOPRODUTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[642]={fld:"TEXTBLOCK82", format:0,grid:0};
   GXValidFnc[644]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Subgrupoprodutoid,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOID",gxz:"ZV226SubgrupoProdutoId",gxold:"OV226SubgrupoProdutoId",gxvar:"AV226SubgrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV226SubgrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV226SubgrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOID",gx.O.AV226SubgrupoProdutoId,0)},c2v:function(){gx.O.AV226SubgrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[645]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTODESCRICAO",gxz:"ZV233SubgrupoProdutoDescricao",gxold:"OV233SubgrupoProdutoDescricao",gxvar:"AV233SubgrupoProdutoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV233SubgrupoProdutoDescricao=Value},v2z:function(Value){gx.O.ZV233SubgrupoProdutoDescricao=Value},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTODESCRICAO",gx.O.AV233SubgrupoProdutoDescricao,0)},c2v:function(){gx.O.AV233SubgrupoProdutoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vSUBGRUPOPRODUTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[648]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[650]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOPRODUTO",gxz:"ZV130TipoProduto",gxold:"OV130TipoProduto",gxvar:"AV130TipoProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV130TipoProduto=Value},v2z:function(Value){gx.O.ZV130TipoProduto=Value},v2c:function(){gx.fn.setControlValue("vTIPOPRODUTO",gx.O.AV130TipoProduto,0)},c2v:function(){gx.O.AV130TipoProduto=this.val()},val:function(){return gx.fn.getControlValue("vTIPOPRODUTO")},nac:gx.falseFn};
   GXValidFnc[652]={fld:"TABLE19",grid:0};
   GXValidFnc[655]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[657]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTULTIMACOMPRA",gxz:"ZV137DtUltimaCompra",gxold:"OV137DtUltimaCompra",gxvar:"AV137DtUltimaCompra",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV137DtUltimaCompra=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV137DtUltimaCompra=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTULTIMACOMPRA",gx.O.AV137DtUltimaCompra,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV137DtUltimaCompra=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTULTIMACOMPRA")},nac:gx.falseFn};
   this.declareDomainHdlr( 657 , function() {
   });
   GXValidFnc[660]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[662]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTULTIMASAIDA",gxz:"ZV138DtUltimaSaida",gxold:"OV138DtUltimaSaida",gxvar:"AV138DtUltimaSaida",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV138DtUltimaSaida=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV138DtUltimaSaida=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTULTIMASAIDA",gx.O.AV138DtUltimaSaida,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV138DtUltimaSaida=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTULTIMASAIDA")},nac:gx.falseFn};
   this.declareDomainHdlr( 662 , function() {
   });
   GXValidFnc[665]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[667]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENVIARBALANCA",gxz:"ZV134EnviarBalanca",gxold:"OV134EnviarBalanca",gxvar:"AV134EnviarBalanca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV134EnviarBalanca=Value},v2z:function(Value){gx.O.ZV134EnviarBalanca=Value},v2c:function(){gx.fn.setComboBoxValue("vENVIARBALANCA",gx.O.AV134EnviarBalanca)},c2v:function(){gx.O.AV134EnviarBalanca=this.val()},val:function(){return gx.fn.getControlValue("vENVIARBALANCA")},nac:gx.falseFn};
   GXValidFnc[670]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[672]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITUACAOPRODUTO",gxz:"ZV131SituacaoProduto",gxold:"OV131SituacaoProduto",gxvar:"AV131SituacaoProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV131SituacaoProduto=Value},v2z:function(Value){gx.O.ZV131SituacaoProduto=Value},v2c:function(){gx.fn.setComboBoxValue("vSITUACAOPRODUTO",gx.O.AV131SituacaoProduto)},c2v:function(){gx.O.AV131SituacaoProduto=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAOPRODUTO")},nac:gx.falseFn};
   GXValidFnc[675]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[677]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vALIQUOTAZERO",gxz:"ZV139AliquotaZero",gxold:"OV139AliquotaZero",gxvar:"AV139AliquotaZero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV139AliquotaZero=Value},v2z:function(Value){gx.O.ZV139AliquotaZero=Value},v2c:function(){gx.fn.setComboBoxValue("vALIQUOTAZERO",gx.O.AV139AliquotaZero)},c2v:function(){gx.O.AV139AliquotaZero=this.val()},val:function(){return gx.fn.getControlValue("vALIQUOTAZERO")},nac:gx.falseFn};
   GXValidFnc[680]={fld:"TEXTBLOCK98", format:0,grid:0};
   GXValidFnc[682]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITUACAOTRIBUTARIATIPO",gxz:"ZV271SituacaoTributariaTipo",gxold:"OV271SituacaoTributariaTipo",gxvar:"AV271SituacaoTributariaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV271SituacaoTributariaTipo=Value},v2z:function(Value){gx.O.ZV271SituacaoTributariaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vSITUACAOTRIBUTARIATIPO",gx.O.AV271SituacaoTributariaTipo)},c2v:function(){gx.O.AV271SituacaoTributariaTipo=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAOTRIBUTARIATIPO")},nac:gx.falseFn};
   GXValidFnc[685]={fld:"TEXTBLOCK99", format:0,grid:0};
   GXValidFnc[687]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITUACAOTRIBUTARIACODIGO",gxz:"ZV272SituacaoTributariaCodigo",gxold:"OV272SituacaoTributariaCodigo",gxvar:"AV272SituacaoTributariaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV272SituacaoTributariaCodigo=Value},v2z:function(Value){gx.O.ZV272SituacaoTributariaCodigo=Value},v2c:function(){gx.fn.setControlValue("vSITUACAOTRIBUTARIACODIGO",gx.O.AV272SituacaoTributariaCodigo,0)},c2v:function(){gx.O.AV272SituacaoTributariaCodigo=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAOTRIBUTARIACODIGO")},nac:gx.falseFn};
   GXValidFnc[690]={fld:"TEXTBLOCK108", format:0,grid:0};
   GXValidFnc[692]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOTIPOTRIBUTACAOFIL",gxz:"ZV284ProdutoTipoTributacaoFil",gxold:"OV284ProdutoTipoTributacaoFil",gxvar:"AV284ProdutoTipoTributacaoFil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV284ProdutoTipoTributacaoFil=Value},v2z:function(Value){gx.O.ZV284ProdutoTipoTributacaoFil=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOTIPOTRIBUTACAOFIL",gx.O.AV284ProdutoTipoTributacaoFil)},c2v:function(){gx.O.AV284ProdutoTipoTributacaoFil=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOTIPOTRIBUTACAOFIL")},nac:gx.falseFn};
   GXValidFnc[695]={fld:"TEXTBLOCK110", format:0,grid:0};
   GXValidFnc[697]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOPCALIQUOTAFIL",gxz:"ZV285ProdutoPCAliquotaFil",gxold:"OV285ProdutoPCAliquotaFil",gxvar:"AV285ProdutoPCAliquotaFil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV285ProdutoPCAliquotaFil=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV285ProdutoPCAliquotaFil=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPRODUTOPCALIQUOTAFIL",gx.O.AV285ProdutoPCAliquotaFil,2,',')},c2v:function(){gx.O.AV285ProdutoPCAliquotaFil=this.val()},val:function(){return gx.fn.getDecimalValue("vPRODUTOPCALIQUOTAFIL",'.',',')},nac:gx.falseFn};
   GXValidFnc[700]={fld:"TEXTBLOCK117", format:0,grid:0};
   GXValidFnc[702]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMEPRODUTO",gxz:"ZV302NomeProduto",gxold:"OV302NomeProduto",gxvar:"AV302NomeProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV302NomeProduto=Value},v2z:function(Value){gx.O.ZV302NomeProduto=Value},v2c:function(){gx.fn.setControlValue("vNOMEPRODUTO",gx.O.AV302NomeProduto,0)},c2v:function(){gx.O.AV302NomeProduto=this.val()},val:function(){return gx.fn.getControlValue("vNOMEPRODUTO")},nac:gx.falseFn};
   GXValidFnc[703]={fld:"TAB2",grid:0};
   GXValidFnc[706]={fld:"TABLE7",grid:0};
   GXValidFnc[709]={fld:"TEXTBLOCK100", format:0,grid:0};
   GXValidFnc[711]={fld:"TEXTBLOCK101", format:0,grid:0};
   GXValidFnc[714]={fld:"TEXTBLOCK102", format:0,grid:0};
   GXValidFnc[716]={fld:"TEXTBLOCK103", format:0,grid:0};
   GXValidFnc[719]={fld:"TABLE31",grid:0};
   GXValidFnc[722]={fld:"TABLE5",grid:0};
   GXValidFnc[725]={fld:"TEXTBLOCK104", format:0,grid:0};
   GXValidFnc[727]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtosittridenenttipoicmsfil,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRIDENENTTIPOICMSFIL",gxz:"ZV273ProdutoSitTriDenEntTipoICMSFil",gxold:"OV273ProdutoSitTriDenEntTipoICMSFil",gxvar:"AV273ProdutoSitTriDenEntTipoICMSFil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV273ProdutoSitTriDenEntTipoICMSFil=Value},v2z:function(Value){gx.O.ZV273ProdutoSitTriDenEntTipoICMSFil=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOSITTRIDENENTTIPOICMSFIL",gx.O.AV273ProdutoSitTriDenEntTipoICMSFil)},c2v:function(){gx.O.AV273ProdutoSitTriDenEntTipoICMSFil=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRIDENENTTIPOICMSFIL")},nac:gx.falseFn};
   GXValidFnc[730]={fld:"TEXTBLOCK105", format:0,grid:0};
   GXValidFnc[732]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtosittridenentcodicmsfil,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRIDENENTCODICMSFIL",gxz:"ZV274ProdutoSitTriDenEntCodICMSFil",gxold:"OV274ProdutoSitTriDenEntCodICMSFil",gxvar:"AV274ProdutoSitTriDenEntCodICMSFil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV274ProdutoSitTriDenEntCodICMSFil=Value},v2z:function(Value){gx.O.ZV274ProdutoSitTriDenEntCodICMSFil=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOSITTRIDENENTCODICMSFIL",gx.O.AV274ProdutoSitTriDenEntCodICMSFil,0)},c2v:function(){gx.O.AV274ProdutoSitTriDenEntCodICMSFil=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRIDENENTCODICMSFIL")},nac:gx.falseFn};
   GXValidFnc[733]={fld:"PROMPT13",grid:0};
   GXValidFnc[736]={fld:"TEXTBLOCK106", format:0,grid:0};
   GXValidFnc[738]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtosittriforenttipoicmsfil,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRIFORENTTIPOICMSFIL",gxz:"ZV275ProdutoSitTriForEntTipoICMSFil",gxold:"OV275ProdutoSitTriForEntTipoICMSFil",gxvar:"AV275ProdutoSitTriForEntTipoICMSFil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV275ProdutoSitTriForEntTipoICMSFil=Value},v2z:function(Value){gx.O.ZV275ProdutoSitTriForEntTipoICMSFil=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOSITTRIFORENTTIPOICMSFIL",gx.O.AV275ProdutoSitTriForEntTipoICMSFil)},c2v:function(){gx.O.AV275ProdutoSitTriForEntTipoICMSFil=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRIFORENTTIPOICMSFIL")},nac:gx.falseFn};
   GXValidFnc[741]={fld:"TEXTBLOCK107", format:0,grid:0};
   GXValidFnc[743]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtosittriforentcodicmsfil,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRIFORENTCODICMSFIL",gxz:"ZV276ProdutoSitTriForEntCodICMSFil",gxold:"OV276ProdutoSitTriForEntCodICMSFil",gxvar:"AV276ProdutoSitTriForEntCodICMSFil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV276ProdutoSitTriForEntCodICMSFil=Value},v2z:function(Value){gx.O.ZV276ProdutoSitTriForEntCodICMSFil=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOSITTRIFORENTCODICMSFIL",gx.O.AV276ProdutoSitTriForEntCodICMSFil,0)},c2v:function(){gx.O.AV276ProdutoSitTriForEntCodICMSFil=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRIFORENTCODICMSFIL")},nac:gx.falseFn};
   GXValidFnc[744]={fld:"PROMPT14",grid:0};
   GXValidFnc[746]={fld:"TABLE32",grid:0};
   GXValidFnc[749]={fld:"TABLE6",grid:0};
   GXValidFnc[753]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtosittridensaitipoicmsfil,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRIDENSAITIPOICMSFIL",gxz:"ZV279ProdutoSitTriDenSaiTipoICMSFil",gxold:"OV279ProdutoSitTriDenSaiTipoICMSFil",gxvar:"AV279ProdutoSitTriDenSaiTipoICMSFil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV279ProdutoSitTriDenSaiTipoICMSFil=Value},v2z:function(Value){gx.O.ZV279ProdutoSitTriDenSaiTipoICMSFil=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOSITTRIDENSAITIPOICMSFIL",gx.O.AV279ProdutoSitTriDenSaiTipoICMSFil,0)},c2v:function(){gx.O.AV279ProdutoSitTriDenSaiTipoICMSFil=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRIDENSAITIPOICMSFIL")},nac:gx.falseFn};
   GXValidFnc[754]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECHAR",gxz:"ZV283QtdeChar",gxold:"OV283QtdeChar",gxvar:"AV283QtdeChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV283QtdeChar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV283QtdeChar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECHAR",gx.O.AV283QtdeChar,0)},c2v:function(){gx.O.AV283QtdeChar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECHAR",'.')},nac:gx.falseFn};
   GXValidFnc[757]={fld:"TEXTBLOCK109", format:0,grid:0};
   GXValidFnc[759]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtosittridensaicodicmsfil,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRIDENSAICODICMSFIL",gxz:"ZV277ProdutoSitTriDenSaiCodICMSFil",gxold:"OV277ProdutoSitTriDenSaiCodICMSFil",gxvar:"AV277ProdutoSitTriDenSaiCodICMSFil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV277ProdutoSitTriDenSaiCodICMSFil=Value},v2z:function(Value){gx.O.ZV277ProdutoSitTriDenSaiCodICMSFil=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOSITTRIDENSAICODICMSFIL",gx.O.AV277ProdutoSitTriDenSaiCodICMSFil,0)},c2v:function(){gx.O.AV277ProdutoSitTriDenSaiCodICMSFil=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRIDENSAICODICMSFIL")},nac:gx.falseFn};
   GXValidFnc[760]={fld:"PROMPT15",grid:0};
   GXValidFnc[761]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRIDENSAICODICMSDESC",gxz:"ZV281ProdutoSitTriDenSaiCodICMSDesc",gxold:"OV281ProdutoSitTriDenSaiCodICMSDesc",gxvar:"AV281ProdutoSitTriDenSaiCodICMSDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV281ProdutoSitTriDenSaiCodICMSDesc=Value},v2z:function(Value){gx.O.ZV281ProdutoSitTriDenSaiCodICMSDesc=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOSITTRIDENSAICODICMSDESC",gx.O.AV281ProdutoSitTriDenSaiCodICMSDesc,0)},c2v:function(){gx.O.AV281ProdutoSitTriDenSaiCodICMSDesc=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRIDENSAICODICMSDESC")},nac:gx.falseFn};
   GXValidFnc[765]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtosittriforsaitipoicmsfil,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRIFORSAITIPOICMSFIL",gxz:"ZV280ProdutoSitTriForSaiTipoICMSFil",gxold:"OV280ProdutoSitTriForSaiTipoICMSFil",gxvar:"AV280ProdutoSitTriForSaiTipoICMSFil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV280ProdutoSitTriForSaiTipoICMSFil=Value},v2z:function(Value){gx.O.ZV280ProdutoSitTriForSaiTipoICMSFil=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOSITTRIFORSAITIPOICMSFIL",gx.O.AV280ProdutoSitTriForSaiTipoICMSFil,0)},c2v:function(){gx.O.AV280ProdutoSitTriForSaiTipoICMSFil=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRIFORSAITIPOICMSFIL")},nac:gx.falseFn};
   GXValidFnc[768]={fld:"TEXTBLOCK111", format:0,grid:0};
   GXValidFnc[770]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtosittriforsaicodicmsfil,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRIFORSAICODICMSFIL",gxz:"ZV278ProdutoSitTriForSaiCodICMSFil",gxold:"OV278ProdutoSitTriForSaiCodICMSFil",gxvar:"AV278ProdutoSitTriForSaiCodICMSFil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV278ProdutoSitTriForSaiCodICMSFil=Value},v2z:function(Value){gx.O.ZV278ProdutoSitTriForSaiCodICMSFil=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOSITTRIFORSAICODICMSFIL",gx.O.AV278ProdutoSitTriForSaiCodICMSFil,0)},c2v:function(){gx.O.AV278ProdutoSitTriForSaiCodICMSFil=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRIFORSAICODICMSFIL")},nac:gx.falseFn};
   GXValidFnc[771]={fld:"PROMPT16",grid:0};
   GXValidFnc[772]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRIFORSAICODICMSDESC",gxz:"ZV282ProdutoSitTriForSaiCodICMSDesc",gxold:"OV282ProdutoSitTriForSaiCodICMSDesc",gxvar:"AV282ProdutoSitTriForSaiCodICMSDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV282ProdutoSitTriForSaiCodICMSDesc=Value},v2z:function(Value){gx.O.ZV282ProdutoSitTriForSaiCodICMSDesc=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOSITTRIFORSAICODICMSDESC",gx.O.AV282ProdutoSitTriForSaiCodICMSDesc,0)},c2v:function(){gx.O.AV282ProdutoSitTriForSaiCodICMSDesc=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRIFORSAICODICMSDESC")},nac:gx.falseFn};
   GXValidFnc[773]={fld:"TABLE8",grid:0};
   GXValidFnc[783]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipositpis,isvalid:null,rgrid:[],fld:"vTIPOSITPIS",gxz:"ZV118TipoSitPIS",gxold:"OV118TipoSitPIS",gxvar:"AV118TipoSitPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV118TipoSitPIS=Value},v2z:function(Value){gx.O.ZV118TipoSitPIS=Value},v2c:function(){gx.fn.setControlValue("vTIPOSITPIS",gx.O.AV118TipoSitPIS,0)},c2v:function(){gx.O.AV118TipoSitPIS=this.val()},val:function(){return gx.fn.getControlValue("vTIPOSITPIS")},nac:gx.falseFn};
   GXValidFnc[784]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOSITIPI",gxz:"ZV117TipoSitIPI",gxold:"OV117TipoSitIPI",gxvar:"AV117TipoSitIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV117TipoSitIPI=Value},v2z:function(Value){gx.O.ZV117TipoSitIPI=Value},v2c:function(){gx.fn.setControlValue("vTIPOSITIPI",gx.O.AV117TipoSitIPI,0)},c2v:function(){gx.O.AV117TipoSitIPI=this.val()},val:function(){return gx.fn.getControlValue("vTIPOSITIPI")},nac:gx.falseFn};
   GXValidFnc[785]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipositicms,isvalid:null,rgrid:[],fld:"vTIPOSITICMS",gxz:"ZV116TipoSitICMS",gxold:"OV116TipoSitICMS",gxvar:"AV116TipoSitICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV116TipoSitICMS=Value},v2z:function(Value){gx.O.ZV116TipoSitICMS=Value},v2c:function(){gx.fn.setControlValue("vTIPOSITICMS",gx.O.AV116TipoSitICMS,0)},c2v:function(){gx.O.AV116TipoSitICMS=this.val()},val:function(){return gx.fn.getControlValue("vTIPOSITICMS")},nac:gx.falseFn};
   GXValidFnc[786]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipositcofins,isvalid:null,rgrid:[],fld:"vTIPOSITCOFINS",gxz:"ZV119TipoSitCOFINS",gxold:"OV119TipoSitCOFINS",gxvar:"AV119TipoSitCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV119TipoSitCOFINS=Value},v2z:function(Value){gx.O.ZV119TipoSitCOFINS=Value},v2c:function(){gx.fn.setControlValue("vTIPOSITCOFINS",gx.O.AV119TipoSitCOFINS,0)},c2v:function(){gx.O.AV119TipoSitCOFINS=this.val()},val:function(){return gx.fn.getControlValue("vTIPOSITCOFINS")},nac:gx.falseFn};
   GXValidFnc[787]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPCODIGOBARRASPRODUTOBARRA",gxz:"ZV110PCodigoBarrasProdutoBarra",gxold:"OV110PCodigoBarrasProdutoBarra",gxvar:"AV110PCodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV110PCodigoBarrasProdutoBarra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV110PCodigoBarrasProdutoBarra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPCODIGOBARRASPRODUTOBARRA",gx.O.AV110PCodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.AV110PCodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPCODIGOBARRASPRODUTOBARRA",'.')},nac:gx.falseFn};
   GXValidFnc[788]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPFILIALID",gxz:"ZV101PFilialId",gxold:"OV101PFilialId",gxvar:"AV101PFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV101PFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV101PFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPFILIALID",gx.O.AV101PFilialId,0)},c2v:function(){gx.O.AV101PFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[789]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPGRUPOPRODUTOID",gxz:"ZV104PGrupoProdutoId",gxold:"OV104PGrupoProdutoId",gxvar:"AV104PGrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV104PGrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV104PGrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPGRUPOPRODUTOID",gx.O.AV104PGrupoProdutoId,0)},c2v:function(){gx.O.AV104PGrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[790]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPLOTEPRODUTOCOMBINACAO",gxz:"ZV107PLoteProdutoCombinacao",gxold:"OV107PLoteProdutoCombinacao",gxvar:"AV107PLoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV107PLoteProdutoCombinacao=Value},v2z:function(Value){gx.O.ZV107PLoteProdutoCombinacao=Value},v2c:function(){gx.fn.setControlValue("vPLOTEPRODUTOCOMBINACAO",gx.O.AV107PLoteProdutoCombinacao,0)},c2v:function(){gx.O.AV107PLoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vPLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[791]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPPRODUTOREFERENCIAPROMPT",gxz:"ZV109PProdutoReferenciaPrompt",gxold:"OV109PProdutoReferenciaPrompt",gxvar:"AV109PProdutoReferenciaPrompt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV109PProdutoReferenciaPrompt=Value},v2z:function(Value){gx.O.ZV109PProdutoReferenciaPrompt=Value},v2c:function(){gx.fn.setControlValue("vPPRODUTOREFERENCIAPROMPT",gx.O.AV109PProdutoReferenciaPrompt,0)},c2v:function(){gx.O.AV109PProdutoReferenciaPrompt=this.val()},val:function(){return gx.fn.getControlValue("vPPRODUTOREFERENCIAPROMPT")},nac:gx.falseFn};
   GXValidFnc[792]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPPRODUTOCODIGOID",gxz:"ZV106PProdutoCodigoId",gxold:"OV106PProdutoCodigoId",gxvar:"AV106PProdutoCodigoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV106PProdutoCodigoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV106PProdutoCodigoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPPRODUTOCODIGOID",gx.O.AV106PProdutoCodigoId,0)},c2v:function(){gx.O.AV106PProdutoCodigoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPPRODUTOCODIGOID",'.')},nac:gx.falseFn};
   GXValidFnc[793]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPPRODUTOCATEGORIA",gxz:"ZV103PProdutoCategoria",gxold:"OV103PProdutoCategoria",gxvar:"AV103PProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV103PProdutoCategoria=Value},v2z:function(Value){gx.O.ZV103PProdutoCategoria=Value},v2c:function(){gx.fn.setComboBoxValue("vPPRODUTOCATEGORIA",gx.O.AV103PProdutoCategoria)},c2v:function(){gx.O.AV103PProdutoCategoria=this.val()},val:function(){return gx.fn.getControlValue("vPPRODUTOCATEGORIA")},nac:gx.falseFn};
   GXValidFnc[794]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPPRECONULO",gxz:"ZV102PPrecoNulo",gxold:"OV102PPrecoNulo",gxvar:"AV102PPrecoNulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV102PPrecoNulo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV102PPrecoNulo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPPRECONULO",gx.O.AV102PPrecoNulo,0)},c2v:function(){gx.O.AV102PPrecoNulo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPPRECONULO",'.')},nac:gx.falseFn};
   GXValidFnc[795]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV238SNVenda",gxold:"OV238SNVenda",gxvar:"AV238SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV238SNVenda=Value},v2z:function(Value){gx.O.ZV238SNVenda=Value},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV238SNVenda,0)},c2v:function(){gx.O.AV238SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};
   GXValidFnc[796]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV31AcessoSistemaSequencia",gxold:"OV31AcessoSistemaSequencia",gxvar:"AV31AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV31AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV31AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[797]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoempresaid,isvalid:null,rgrid:[],fld:"vPRODUTOEMPRESAID",gxz:"ZV172ProdutoEmpresaId",gxold:"OV172ProdutoEmpresaId",gxvar:"AV172ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV172ProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV172ProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOEMPRESAID",gx.O.AV172ProdutoEmpresaId,0)},c2v:function(){gx.O.AV172ProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[798]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARACTERES",gxz:"ZV188QtdeCaracteres",gxold:"OV188QtdeCaracteres",gxvar:"AV188QtdeCaracteres",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV188QtdeCaracteres=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV188QtdeCaracteres=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARACTERES",gx.O.AV188QtdeCaracteres,0)},c2v:function(){gx.O.AV188QtdeCaracteres=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARACTERES",'.')},nac:gx.falseFn};
   GXValidFnc[799]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUXIN",gxz:"ZV108IntAuxIn",gxold:"OV108IntAuxIn",gxvar:"AV108IntAuxIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV108IntAuxIn=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV108IntAuxIn=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTAUXIN",gx.O.AV108IntAuxIn,0)},c2v:function(){gx.O.AV108IntAuxIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUXIN",'.')},nac:gx.falseFn};
   GXValidFnc[800]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Unidadeempresaid,isvalid:null,rgrid:[],fld:"vUNIDADEEMPRESAID",gxz:"ZV178UnidadeEmpresaId",gxold:"OV178UnidadeEmpresaId",gxvar:"AV178UnidadeEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV178UnidadeEmpresaId=Value},v2z:function(Value){gx.O.ZV178UnidadeEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vUNIDADEEMPRESAID",gx.O.AV178UnidadeEmpresaId,0)},c2v:function(){gx.O.AV178UnidadeEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vUNIDADEEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[801]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPSUBGRUPOPRODUTOID",gxz:"ZV105PSubGrupoProdutoId",gxold:"OV105PSubGrupoProdutoId",gxvar:"AV105PSubGrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV105PSubGrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV105PSubGrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPSUBGRUPOPRODUTOID",gx.O.AV105PSubGrupoProdutoId,0)},c2v:function(){gx.O.AV105PSubGrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPSUBGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[802]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Familiaempresaid,isvalid:null,rgrid:[],fld:"vFAMILIAEMPRESAID",gxz:"ZV177FamiliaEmpresaId",gxold:"OV177FamiliaEmpresaId",gxvar:"AV177FamiliaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV177FamiliaEmpresaId=Value},v2z:function(Value){gx.O.ZV177FamiliaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAEMPRESAID",gx.O.AV177FamiliaEmpresaId,0)},c2v:function(){gx.O.AV177FamiliaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[803]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresacontacontabilempresaid,isvalid:null,rgrid:[],fld:"vEMPRESACONTACONTABILEMPRESAID",gxz:"ZV184EmpresaContaContabilEmpresaId",gxold:"OV184EmpresaContaContabilEmpresaId",gxvar:"AV184EmpresaContaContabilEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV184EmpresaContaContabilEmpresaId=Value},v2z:function(Value){gx.O.ZV184EmpresaContaContabilEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESACONTACONTABILEMPRESAID",gx.O.AV184EmpresaContaContabilEmpresaId,0)},c2v:function(){gx.O.AV184EmpresaContaContabilEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESACONTACONTABILEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[804]={lvl:0,type:"date",len:8,dec:0,sign:true,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Gx_date,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};
   GXValidFnc[805]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAID",gxz:"ZV113SaiD",gxold:"OV113SaiD",gxvar:"AV113SaiD",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV113SaiD=Value},v2z:function(Value){gx.O.ZV113SaiD=Value},v2c:function(){gx.fn.setControlValue("vSAID",gx.O.AV113SaiD,0)},c2v:function(){gx.O.AV113SaiD=this.val()},val:function(){return gx.fn.getControlValue("vSAID")},nac:gx.falseFn};
   GXValidFnc[806]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precoempresaid,isvalid:null,rgrid:[],fld:"vPRECOEMPRESAID",gxz:"ZV268PrecoEmpresaId",gxold:"OV268PrecoEmpresaId",gxvar:"AV268PrecoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV268PrecoEmpresaId=Value},v2z:function(Value){gx.O.ZV268PrecoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRECOEMPRESAID",gx.O.AV268PrecoEmpresaId,0)},c2v:function(){gx.O.AV268PrecoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRECOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[807]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contacontabilsituacao,isvalid:null,rgrid:[],fld:"vCONTACONTABILSITUACAO",gxz:"ZV237ContaContabilSituacao",gxold:"OV237ContaContabilSituacao",gxvar:"AV237ContaContabilSituacao",ucs:[],op:[807],ip:[807],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV237ContaContabilSituacao=Value},v2z:function(Value){gx.O.ZV237ContaContabilSituacao=Value},v2c:function(){gx.fn.setCheckBoxValue("vCONTACONTABILSITUACAO",gx.O.AV237ContaContabilSituacao,"A")},c2v:function(){gx.O.AV237ContaContabilSituacao=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILSITUACAO")},nac:gx.falseFn,values:['A','I']};
   GXValidFnc[808]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contacontabiltipolancamento,isvalid:null,rgrid:[],fld:"vCONTACONTABILTIPOLANCAMENTO",gxz:"ZV236ContaContabilTipoLancamento",gxold:"OV236ContaContabilTipoLancamento",gxvar:"AV236ContaContabilTipoLancamento",ucs:[],op:[808],ip:[808],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV236ContaContabilTipoLancamento=Value},v2z:function(Value){gx.O.ZV236ContaContabilTipoLancamento=Value},v2c:function(){gx.fn.setComboBoxValue("vCONTACONTABILTIPOLANCAMENTO",gx.O.AV236ContaContabilTipoLancamento)},c2v:function(){gx.O.AV236ContaContabilTipoLancamento=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILTIPOLANCAMENTO")},nac:gx.falseFn};
   GXValidFnc[809]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTF",gxz:"ZV112EntF",gxold:"OV112EntF",gxvar:"AV112EntF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV112EntF=Value},v2z:function(Value){gx.O.ZV112EntF=Value},v2c:function(){gx.fn.setControlValue("vENTF",gx.O.AV112EntF,0)},c2v:function(){gx.O.AV112EntF=this.val()},val:function(){return gx.fn.getControlValue("vENTF")},nac:gx.falseFn};
   GXValidFnc[810]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTD",gxz:"ZV111EntD",gxold:"OV111EntD",gxvar:"AV111EntD",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV111EntD=Value},v2z:function(Value){gx.O.ZV111EntD=Value},v2c:function(){gx.fn.setControlValue("vENTD",gx.O.AV111EntD,0)},c2v:function(){gx.O.AV111EntD=this.val()},val:function(){return gx.fn.getControlValue("vENTD")},nac:gx.falseFn};
   GXValidFnc[811]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"vEMPRESAPESSOASEMPRESAID",gxz:"ZV173EmpresaPessoasEmpresaId",gxold:"OV173EmpresaPessoasEmpresaId",gxvar:"AV173EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV173EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV173EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPESSOASEMPRESAID",gx.O.AV173EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV173EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[812]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIF",gxz:"ZV114SaiF",gxold:"OV114SaiF",gxvar:"AV114SaiF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV114SaiF=Value},v2z:function(Value){gx.O.ZV114SaiF=Value},v2c:function(){gx.fn.setControlValue("vSAIF",gx.O.AV114SaiF,0)},c2v:function(){gx.O.AV114SaiF=this.val()},val:function(){return gx.fn.getControlValue("vSAIF")},nac:gx.falseFn};
   GXValidFnc[813]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Subgrupoprodutoempresaid,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOEMPRESAID",gxz:"ZV231SubgrupoProdutoEmpresaId",gxold:"OV231SubgrupoProdutoEmpresaId",gxvar:"AV231SubgrupoProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV231SubgrupoProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV231SubgrupoProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOEMPRESAID",gx.O.AV231SubgrupoProdutoEmpresaId,0)},c2v:function(){gx.O.AV231SubgrupoProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vSUBGRUPOPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[814]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Grupoprodutoempresaid,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTOEMPRESAID",gxz:"ZV232GrupoProdutoEmpresaId",gxold:"OV232GrupoProdutoEmpresaId",gxvar:"AV232GrupoProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV232GrupoProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV232GrupoProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOEMPRESAID",gx.O.AV232GrupoProdutoEmpresaId,0)},c2v:function(){gx.O.AV232GrupoProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vGRUPOPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[815]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV180ChamaOnBlurMascara",gxold:"OV180ChamaOnBlurMascara",gxvar:"AV180ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV180ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV180ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV180ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV180ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[816]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRIENTTIPOIPI",gxz:"ZV185ProdutoSitTriEntTipoIPI",gxold:"OV185ProdutoSitTriEntTipoIPI",gxvar:"AV185ProdutoSitTriEntTipoIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV185ProdutoSitTriEntTipoIPI=Value},v2z:function(Value){gx.O.ZV185ProdutoSitTriEntTipoIPI=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOSITTRIENTTIPOIPI",gx.O.AV185ProdutoSitTriEntTipoIPI,0)},c2v:function(){gx.O.AV185ProdutoSitTriEntTipoIPI=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRIENTTIPOIPI")},nac:gx.falseFn};
   GXValidFnc[817]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRIENTPISTIPO",gxz:"ZV121ProdutoSitTriEntPISTipo",gxold:"OV121ProdutoSitTriEntPISTipo",gxvar:"AV121ProdutoSitTriEntPISTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV121ProdutoSitTriEntPISTipo=Value},v2z:function(Value){gx.O.ZV121ProdutoSitTriEntPISTipo=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOSITTRIENTPISTIPO",gx.O.AV121ProdutoSitTriEntPISTipo,0)},c2v:function(){gx.O.AV121ProdutoSitTriEntPISTipo=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRIENTPISTIPO")},nac:gx.falseFn};
   GXValidFnc[818]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRIEXTPISTIPO",gxz:"ZV122ProdutoSitTriExtPISTipo",gxold:"OV122ProdutoSitTriExtPISTipo",gxvar:"AV122ProdutoSitTriExtPISTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV122ProdutoSitTriExtPISTipo=Value},v2z:function(Value){gx.O.ZV122ProdutoSitTriExtPISTipo=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOSITTRIEXTPISTIPO",gx.O.AV122ProdutoSitTriExtPISTipo,0)},c2v:function(){gx.O.AV122ProdutoSitTriExtPISTipo=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRIEXTPISTIPO")},nac:gx.falseFn};
   GXValidFnc[819]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRISAIPISTIPO",gxz:"ZV123ProdutoSitTriSaiPISTipo",gxold:"OV123ProdutoSitTriSaiPISTipo",gxvar:"AV123ProdutoSitTriSaiPISTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV123ProdutoSitTriSaiPISTipo=Value},v2z:function(Value){gx.O.ZV123ProdutoSitTriSaiPISTipo=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOSITTRISAIPISTIPO",gx.O.AV123ProdutoSitTriSaiPISTipo,0)},c2v:function(){gx.O.AV123ProdutoSitTriSaiPISTipo=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRISAIPISTIPO")},nac:gx.falseFn};
   GXValidFnc[820]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRIENTCOFTIPO",gxz:"ZV124ProdutoSitTriEntCOFTipo",gxold:"OV124ProdutoSitTriEntCOFTipo",gxvar:"AV124ProdutoSitTriEntCOFTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV124ProdutoSitTriEntCOFTipo=Value},v2z:function(Value){gx.O.ZV124ProdutoSitTriEntCOFTipo=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOSITTRIENTCOFTIPO",gx.O.AV124ProdutoSitTriEntCOFTipo,0)},c2v:function(){gx.O.AV124ProdutoSitTriEntCOFTipo=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRIENTCOFTIPO")},nac:gx.falseFn};
   GXValidFnc[821]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRISAICOFTIPO",gxz:"ZV125ProdutoSitTriSaiCOFTipo",gxold:"OV125ProdutoSitTriSaiCOFTipo",gxvar:"AV125ProdutoSitTriSaiCOFTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV125ProdutoSitTriSaiCOFTipo=Value},v2z:function(Value){gx.O.ZV125ProdutoSitTriSaiCOFTipo=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOSITTRISAICOFTIPO",gx.O.AV125ProdutoSitTriSaiCOFTipo,0)},c2v:function(){gx.O.AV125ProdutoSitTriSaiCOFTipo=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRISAICOFTIPO")},nac:gx.falseFn};
   GXValidFnc[822]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRISAITIPOIPI",gxz:"ZV120ProdutoSitTriSaiTipoIPI",gxold:"OV120ProdutoSitTriSaiTipoIPI",gxvar:"AV120ProdutoSitTriSaiTipoIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV120ProdutoSitTriSaiTipoIPI=Value},v2z:function(Value){gx.O.ZV120ProdutoSitTriSaiTipoIPI=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOSITTRISAITIPOIPI",gx.O.AV120ProdutoSitTriSaiTipoIPI,0)},c2v:function(){gx.O.AV120ProdutoSitTriSaiTipoIPI=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRISAITIPOIPI")},nac:gx.falseFn};
   GXValidFnc[823]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOSITTRIEXTCOFTIPO",gxz:"ZV224produtosittriextcoftipo",gxold:"OV224produtosittriextcoftipo",gxvar:"AV224produtosittriextcoftipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV224produtosittriextcoftipo=Value},v2z:function(Value){gx.O.ZV224produtosittriextcoftipo=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOSITTRIEXTCOFTIPO",gx.O.AV224produtosittriextcoftipo,0)},c2v:function(){gx.O.AV224produtosittriextcoftipo=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITTRIEXTCOFTIPO")},nac:gx.falseFn};
   GXValidFnc[824]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNCMCODIGOIN",gxz:"ZV287NCMCodigoIN",gxold:"OV287NCMCodigoIN",gxvar:"AV287NCMCodigoIN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV287NCMCodigoIN=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV287NCMCodigoIN=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNCMCODIGOIN",gx.O.AV287NCMCodigoIN,0)},c2v:function(){gx.O.AV287NCMCodigoIN=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNCMCODIGOIN",'.')},nac:gx.falseFn};
   GXValidFnc[825]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSTRING",gxz:"ZV288String",gxold:"OV288String",gxvar:"AV288String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV288String=Value},v2z:function(Value){gx.O.ZV288String=Value},v2c:function(){gx.fn.setControlValue("vSTRING",gx.O.AV288String,0)},c2v:function(){gx.O.AV288String=this.val()},val:function(){return gx.fn.getControlValue("vSTRING")},nac:gx.falseFn};
   GXValidFnc[826]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCESTCODIGOIN",gxz:"ZV305CESTCodigoIN",gxold:"OV305CESTCodigoIN",gxvar:"AV305CESTCodigoIN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV305CESTCodigoIN=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV305CESTCodigoIN=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCESTCODIGOIN",gx.O.AV305CESTCodigoIN,0)},c2v:function(){gx.O.AV305CESTCodigoIN=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCESTCODIGOIN",'.')},nac:gx.falseFn};
   GXValidFnc[827]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCESTCODIGOMASKSAIDA",gxz:"ZV306CESTCodigoMaskSaida",gxold:"OV306CESTCodigoMaskSaida",gxvar:"AV306CESTCodigoMaskSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV306CESTCodigoMaskSaida=Value},v2z:function(Value){gx.O.ZV306CESTCodigoMaskSaida=Value},v2c:function(){gx.fn.setControlValue("vCESTCODIGOMASKSAIDA",gx.O.AV306CESTCodigoMaskSaida,0)},c2v:function(){gx.O.AV306CESTCodigoMaskSaida=this.val()},val:function(){return gx.fn.getControlValue("vCESTCODIGOMASKSAIDA")},nac:gx.falseFn};
   GXValidFnc[828]={fld:"TAB3",grid:0};
   GXValidFnc[831]={fld:"TABIMAGEM",grid:0};
   GXValidFnc[836]={lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMAGEM1",gxz:"ZV309Imagem1",gxold:"OV309Imagem1",gxvar:"AV309Imagem1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV309Imagem1=Value},v2z:function(Value){gx.O.ZV309Imagem1=Value},v2c:function(){gx.fn.setControlValue("vIMAGEM1",gx.O.AV309Imagem1,0)},c2v:function(){gx.O.AV309Imagem1=this.val()},val:function(){return gx.fn.getControlValue("vIMAGEM1")},nac:gx.falseFn};
   GXValidFnc[841]={lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMAGEM2",gxz:"ZV310Imagem2",gxold:"OV310Imagem2",gxvar:"AV310Imagem2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV310Imagem2=Value},v2z:function(Value){gx.O.ZV310Imagem2=Value},v2c:function(){gx.fn.setControlValue("vIMAGEM2",gx.O.AV310Imagem2,0)},c2v:function(){gx.O.AV310Imagem2=this.val()},val:function(){return gx.fn.getControlValue("vIMAGEM2")},nac:gx.falseFn};
   GXValidFnc[846]={lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMAGEM3",gxz:"ZV311Imagem3",gxold:"OV311Imagem3",gxvar:"AV311Imagem3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV311Imagem3=Value},v2z:function(Value){gx.O.ZV311Imagem3=Value},v2c:function(){gx.fn.setControlValue("vIMAGEM3",gx.O.AV311Imagem3,0)},c2v:function(){gx.O.AV311Imagem3=this.val()},val:function(){return gx.fn.getControlValue("vIMAGEM3")},nac:gx.falseFn};
   GXValidFnc[851]={lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMAGEM4",gxz:"ZV312Imagem4",gxold:"OV312Imagem4",gxvar:"AV312Imagem4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV312Imagem4=Value},v2z:function(Value){gx.O.ZV312Imagem4=Value},v2c:function(){gx.fn.setControlValue("vIMAGEM4",gx.O.AV312Imagem4,0)},c2v:function(){gx.O.AV312Imagem4=this.val()},val:function(){return gx.fn.getControlValue("vIMAGEM4")},nac:gx.falseFn};
   GXValidFnc[856]={lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMAGEM5",gxz:"ZV313Imagem5",gxold:"OV313Imagem5",gxvar:"AV313Imagem5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV313Imagem5=Value},v2z:function(Value){gx.O.ZV313Imagem5=Value},v2c:function(){gx.fn.setControlValue("vIMAGEM5",gx.O.AV313Imagem5,0)},c2v:function(){gx.O.AV313Imagem5=this.val()},val:function(){return gx.fn.getControlValue("vIMAGEM5")},nac:gx.falseFn};
   GXValidFnc[857]={fld:"TABOBSERVACAO",grid:0};
   GXValidFnc[860]={fld:"TEXTBLOCK123", format:0,grid:0};
   GXValidFnc[862]={lvl:0,type:"vchar",len:9000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOOBSERVACAO",gxz:"ZV308ProdutoObservacao",gxold:"OV308ProdutoObservacao",gxvar:"AV308ProdutoObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV308ProdutoObservacao=Value},v2z:function(Value){gx.O.ZV308ProdutoObservacao=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOOBSERVACAO",gx.O.AV308ProdutoObservacao,0)},c2v:function(){gx.O.AV308ProdutoObservacao=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[875]={fld:"JS", format:2,grid:0};
   GXValidFnc[876]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV182Nao",gxold:"OV182Nao",gxvar:"AV182Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV182Nao=Value},v2z:function(Value){gx.O.ZV182Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV182Nao,0)},c2v:function(){gx.O.AV182Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[877]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV181Sim",gxold:"OV181Sim",gxvar:"AV181Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV181Sim=Value},v2z:function(Value){gx.O.ZV181Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV181Sim,0)},c2v:function(){gx.O.AV181Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[879]={fld:"BTNHELP",grid:0};
   GXValidFnc[881]={fld:"PROMPT_PRODUTOUNIDADECOMPRAID",grid:0};
   GXValidFnc[882]={fld:"PROMPT_PRODUTOUNIDADEVENDAID",grid:0};
   GXValidFnc[883]={fld:"PROMPT_PRODUTOFAMILIAID",grid:0};
   GXValidFnc[884]={fld:"PROMPT_PRODUTOFABRICANTEID",grid:0};
   GXValidFnc[885]={fld:"PROMPT_PRODUTOCFOENTDENESTADOCOD",grid:0};
   GXValidFnc[886]={fld:"PROMPT_PRODUTOCFOENTFORAESTADOCOD",grid:0};
   GXValidFnc[887]={fld:"PROMPT_PRODUTOCFOENTINSCDENESTADOCOD",grid:0};
   GXValidFnc[888]={fld:"PROMPT_PRODUTOCFOENTINSCFORESTADOCOD",grid:0};
   GXValidFnc[889]={fld:"PROMPT_PRODUTOCFOSAIDENESTADOCOD",grid:0};
   GXValidFnc[890]={fld:"PROMPT_PRODUTOCFOSAIFORAESTADOCOD",grid:0};
   GXValidFnc[891]={fld:"PROMPT_PRODUTOCFOSAIINSCDENESTADOCOD",grid:0};
   GXValidFnc[892]={fld:"PROMPT_PRODUTOCFOSAIINSCFORESTADOCOD",grid:0};
   GXValidFnc[893]={fld:"PROMPT_GENEROID",grid:0};
   GXValidFnc[894]={fld:"PROMPT_LISTASERVICOID",grid:0};
   GXValidFnc[895]={fld:"PROMPT_PRODUTOMARGEMMARKUPCODIGO",grid:0};
   GXValidFnc[896]={fld:"PROMPT_PRECOID",grid:0};
   GXValidFnc[897]={fld:"PROMPT_SUBGRUPOPRODUTOIDATU",grid:0};
   GXValidFnc[898]={fld:"PROMPT_FAMILIAINI",grid:0};
   GXValidFnc[899]={fld:"PROMPT_FAMILIAFIN",grid:0};
   GXValidFnc[900]={fld:"PROMPT_NCMINICIAL",grid:0};
   GXValidFnc[901]={fld:"PROMPT_NCMFINAL",grid:0};
   GXValidFnc[902]={fld:"PROMPT_NBSINICIAL",grid:0};
   GXValidFnc[903]={fld:"PROMPT_NBSFINAL",grid:0};
   GXValidFnc[904]={fld:"PROMPT_FABRICANTEINI",grid:0};
   GXValidFnc[905]={fld:"PROMPT_FABRICANTEFIN",grid:0};
   GXValidFnc[906]={fld:"PROMPT_UNIDADECOMPRAINI",grid:0};
   GXValidFnc[907]={fld:"PROMPT_UNIDADECOMPRAFIN",grid:0};
   GXValidFnc[908]={fld:"PROMPT_UNIDADEVENDAINI",grid:0};
   GXValidFnc[909]={fld:"PROMPT_UNIDADEVENDAFIN",grid:0};
   GXValidFnc[910]={fld:"PROMPT_GRUPOPRODUTOID",grid:0};
   GXValidFnc[911]={fld:"PROMPT_SUBGRUPOPRODUTOID",grid:0};
   this.AV94TpOperacao = "" ;
   this.ZV94TpOperacao = "" ;
   this.OV94TpOperacao = "" ;
   this.AV294ProdutoAntigoIni = 0 ;
   this.ZV294ProdutoAntigoIni = 0 ;
   this.OV294ProdutoAntigoIni = 0 ;
   this.AV295ProdutoAntigoFin = 0 ;
   this.ZV295ProdutoAntigoFin = 0 ;
   this.OV295ProdutoAntigoFin = 0 ;
   this.AV100ProdutoNovo = 0 ;
   this.ZV100ProdutoNovo = 0 ;
   this.OV100ProdutoNovo = 0 ;
   this.AV33CampoAtualizar = 0 ;
   this.ZV33CampoAtualizar = 0 ;
   this.OV33CampoAtualizar = 0 ;
   this.AV95ProdutoUnidadeCompraID = "" ;
   this.ZV95ProdutoUnidadeCompraID = "" ;
   this.OV95ProdutoUnidadeCompraID = "" ;
   this.AV204ProdutoUnidadeCompraDesc = "" ;
   this.ZV204ProdutoUnidadeCompraDesc = "" ;
   this.OV204ProdutoUnidadeCompraDesc = "" ;
   this.AV96ProdutoUnidadeVendaID = "" ;
   this.ZV96ProdutoUnidadeVendaID = "" ;
   this.OV96ProdutoUnidadeVendaID = "" ;
   this.AV203ProdutoUnidadeVendaDesc = "" ;
   this.ZV203ProdutoUnidadeVendaDesc = "" ;
   this.OV203ProdutoUnidadeVendaDesc = "" ;
   this.AV35ProdutoFatorConversao = 0 ;
   this.ZV35ProdutoFatorConversao = 0 ;
   this.OV35ProdutoFatorConversao = 0 ;
   this.AV36ProdutoReferencia = "" ;
   this.ZV36ProdutoReferencia = "" ;
   this.OV36ProdutoReferencia = "" ;
   this.AV40ProdutoCodificacaoPrincipal = "" ;
   this.ZV40ProdutoCodificacaoPrincipal = "" ;
   this.OV40ProdutoCodificacaoPrincipal = "" ;
   this.AV39ProdutoClassificacaoPrincipal = "" ;
   this.ZV39ProdutoClassificacaoPrincipal = "" ;
   this.OV39ProdutoClassificacaoPrincipal = "" ;
   this.AV43ProdutoFamiliaId = "" ;
   this.ZV43ProdutoFamiliaId = "" ;
   this.OV43ProdutoFamiliaId = "" ;
   this.AV209ProdutoFamiliaDescricao = "" ;
   this.ZV209ProdutoFamiliaDescricao = "" ;
   this.OV209ProdutoFamiliaDescricao = "" ;
   this.AV41ProdutoDiasValidade = 0 ;
   this.ZV41ProdutoDiasValidade = 0 ;
   this.OV41ProdutoDiasValidade = 0 ;
   this.AV49ProdutoSNSuspenso = "" ;
   this.ZV49ProdutoSNSuspenso = "" ;
   this.OV49ProdutoSNSuspenso = "" ;
   this.AV42ProdutoFabricanteId = 0 ;
   this.ZV42ProdutoFabricanteId = 0 ;
   this.OV42ProdutoFabricanteId = 0 ;
   this.AV214ProdutoFabricanteFantasia = "" ;
   this.ZV214ProdutoFabricanteFantasia = "" ;
   this.OV214ProdutoFabricanteFantasia = "" ;
   this.AV97ProdutoTipoTributacao = "" ;
   this.ZV97ProdutoTipoTributacao = "" ;
   this.OV97ProdutoTipoTributacao = "" ;
   this.AV44ProdutoPCAliquota = 0 ;
   this.ZV44ProdutoPCAliquota = 0 ;
   this.OV44ProdutoPCAliquota = 0 ;
   this.AV235PercAliquota = 0 ;
   this.ZV235PercAliquota = 0 ;
   this.OV235PercAliquota = 0 ;
   this.AV37ProdutoCasasDecimais = 0 ;
   this.ZV37ProdutoCasasDecimais = 0 ;
   this.OV37ProdutoCasasDecimais = 0 ;
   this.AV50ProdutoTipo = "" ;
   this.ZV50ProdutoTipo = "" ;
   this.OV50ProdutoTipo = "" ;
   this.AV45ProdutoPesoBruto = 0 ;
   this.ZV45ProdutoPesoBruto = 0 ;
   this.OV45ProdutoPesoBruto = 0 ;
   this.AV46ProdutoPesoLiquido = 0 ;
   this.ZV46ProdutoPesoLiquido = 0 ;
   this.OV46ProdutoPesoLiquido = 0 ;
   this.AV38ProdutoCategoria = "" ;
   this.ZV38ProdutoCategoria = "" ;
   this.OV38ProdutoCategoria = "" ;
   this.AV48ProdutoSNControlaEstoque = "" ;
   this.ZV48ProdutoSNControlaEstoque = "" ;
   this.OV48ProdutoSNControlaEstoque = "" ;
   this.AV47ProdutoSnCalculaCusto = "" ;
   this.ZV47ProdutoSnCalculaCusto = "" ;
   this.OV47ProdutoSnCalculaCusto = "" ;
   this.AV52ProdutoTipoVendaBalanca = "" ;
   this.ZV52ProdutoTipoVendaBalanca = "" ;
   this.OV52ProdutoTipoVendaBalanca = "" ;
   this.AV53ProdutoCFOEntDenEstadoCod = 0 ;
   this.ZV53ProdutoCFOEntDenEstadoCod = 0 ;
   this.OV53ProdutoCFOEntDenEstadoCod = 0 ;
   this.AV54ProdutoCFOEntForaEstadoCod = 0 ;
   this.ZV54ProdutoCFOEntForaEstadoCod = 0 ;
   this.OV54ProdutoCFOEntForaEstadoCod = 0 ;
   this.AV55ProdutoCFOEntInscDenEstadoCod = 0 ;
   this.ZV55ProdutoCFOEntInscDenEstadoCod = 0 ;
   this.OV55ProdutoCFOEntInscDenEstadoCod = 0 ;
   this.AV56ProdutoCFOEntInscForEstadoCod = 0 ;
   this.ZV56ProdutoCFOEntInscForEstadoCod = 0 ;
   this.OV56ProdutoCFOEntInscForEstadoCod = 0 ;
   this.AV57ProdutoCFOSaiDenEstadoCod = 0 ;
   this.ZV57ProdutoCFOSaiDenEstadoCod = 0 ;
   this.OV57ProdutoCFOSaiDenEstadoCod = 0 ;
   this.AV58ProdutoCFOSaiForaEstadoCod = 0 ;
   this.ZV58ProdutoCFOSaiForaEstadoCod = 0 ;
   this.OV58ProdutoCFOSaiForaEstadoCod = 0 ;
   this.AV59ProdutoCFOSaiInscDenEstadoCod = 0 ;
   this.ZV59ProdutoCFOSaiInscDenEstadoCod = 0 ;
   this.OV59ProdutoCFOSaiInscDenEstadoCod = 0 ;
   this.AV60ProdutoCFOSaiInscForEstadoCod = 0 ;
   this.ZV60ProdutoCFOSaiInscForEstadoCod = 0 ;
   this.OV60ProdutoCFOSaiInscForEstadoCod = 0 ;
   this.AV62GeneroId = "" ;
   this.ZV62GeneroId = "" ;
   this.OV62GeneroId = "" ;
   this.AV217GeneroDescricao = "" ;
   this.ZV217GeneroDescricao = "" ;
   this.OV217GeneroDescricao = "" ;
   this.AV66ProdutoClassificacaoABC = "" ;
   this.ZV66ProdutoClassificacaoABC = "" ;
   this.OV66ProdutoClassificacaoABC = "" ;
   this.AV51ProdutoTipoProducao = "" ;
   this.ZV51ProdutoTipoProducao = "" ;
   this.OV51ProdutoTipoProducao = "" ;
   this.AV115ProdutoCContabilTradutor = 0 ;
   this.ZV115ProdutoCContabilTradutor = 0 ;
   this.OV115ProdutoCContabilTradutor = 0 ;
   this.AV65ProdutoCContabilId = "" ;
   this.ZV65ProdutoCContabilId = "" ;
   this.OV65ProdutoCContabilId = "" ;
   this.AV218ProdutoCContabilNome = "" ;
   this.ZV218ProdutoCContabilNome = "" ;
   this.OV218ProdutoCContabilNome = "" ;
   this.AV61EsquemaCodigo = 0 ;
   this.ZV61EsquemaCodigo = 0 ;
   this.OV61EsquemaCodigo = 0 ;
   this.AV221EsquemaDescricao = "" ;
   this.ZV221EsquemaDescricao = "" ;
   this.OV221EsquemaDescricao = "" ;
   this.AV126NCMCodigoMask = 0 ;
   this.ZV126NCMCodigoMask = 0 ;
   this.OV126NCMCodigoMask = 0 ;
   this.AV64NCMCodigo = 0 ;
   this.ZV64NCMCodigo = 0 ;
   this.OV64NCMCodigo = 0 ;
   this.AV127NcmCodigoAux = 0 ;
   this.ZV127NcmCodigoAux = 0 ;
   this.OV127NcmCodigoAux = 0 ;
   this.AV249NCMDescricao = "" ;
   this.ZV249NCMDescricao = "" ;
   this.OV249NCMDescricao = "" ;
   this.AV63ListaServicoId = 0 ;
   this.ZV63ListaServicoId = 0 ;
   this.OV63ListaServicoId = 0 ;
   this.AV193ListaServicoDescricao = "" ;
   this.ZV193ListaServicoDescricao = "" ;
   this.OV193ListaServicoDescricao = "" ;
   this.AV67ProdutoSitTriEntCodigoIPI = "" ;
   this.ZV67ProdutoSitTriEntCodigoIPI = "" ;
   this.OV67ProdutoSitTriEntCodigoIPI = "" ;
   this.AV68ProdutoIPIPCEntrada = 0 ;
   this.ZV68ProdutoIPIPCEntrada = 0 ;
   this.OV68ProdutoIPIPCEntrada = 0 ;
   this.AV70ProdutoSitTriSaiCodigoIPI = "" ;
   this.ZV70ProdutoSitTriSaiCodigoIPI = "" ;
   this.OV70ProdutoSitTriSaiCodigoIPI = "" ;
   this.AV69ProdutoIPIPCSaida = 0 ;
   this.ZV69ProdutoIPIPCSaida = 0 ;
   this.OV69ProdutoIPIPCSaida = 0 ;
   this.AV98ProdutoPISEntrada = 0 ;
   this.ZV98ProdutoPISEntrada = 0 ;
   this.OV98ProdutoPISEntrada = 0 ;
   this.AV71ProdutoMargemMarkupCodigo = "" ;
   this.ZV71ProdutoMargemMarkupCodigo = "" ;
   this.OV71ProdutoMargemMarkupCodigo = "" ;
   this.AV74ProdutoPISSaida = 0 ;
   this.ZV74ProdutoPISSaida = 0 ;
   this.OV74ProdutoPISSaida = 0 ;
   this.AV72ProdutoPISExportacao = 0 ;
   this.ZV72ProdutoPISExportacao = 0 ;
   this.OV72ProdutoPISExportacao = 0 ;
   this.AV73ProdutoPISReducaoBase = 0 ;
   this.ZV73ProdutoPISReducaoBase = 0 ;
   this.OV73ProdutoPISReducaoBase = 0 ;
   this.AV75ProdutoCOFINSEntrada = 0 ;
   this.ZV75ProdutoCOFINSEntrada = 0 ;
   this.OV75ProdutoCOFINSEntrada = 0 ;
   this.AV78ProdutoCOFINSSaida = 0 ;
   this.ZV78ProdutoCOFINSSaida = 0 ;
   this.OV78ProdutoCOFINSSaida = 0 ;
   this.AV76ProdutoCOFINSExportacao = 0 ;
   this.ZV76ProdutoCOFINSExportacao = 0 ;
   this.OV76ProdutoCOFINSExportacao = 0 ;
   this.AV77ProdutoCOFINSReducaoBase = 0 ;
   this.ZV77ProdutoCOFINSReducaoBase = 0 ;
   this.OV77ProdutoCOFINSReducaoBase = 0 ;
   this.AV80ProdutoSitTriDenEntTipoICMS = "" ;
   this.ZV80ProdutoSitTriDenEntTipoICMS = "" ;
   this.OV80ProdutoSitTriDenEntTipoICMS = "" ;
   this.AV79ProdutoSitTriDenEntCodICMS = "" ;
   this.ZV79ProdutoSitTriDenEntCodICMS = "" ;
   this.OV79ProdutoSitTriDenEntCodICMS = "" ;
   this.AV82ProdutoSitTriDenSaiTipoICMS = "" ;
   this.ZV82ProdutoSitTriDenSaiTipoICMS = "" ;
   this.OV82ProdutoSitTriDenSaiTipoICMS = "" ;
   this.AV81ProdutoSitTriDenSaiCodICMS = "" ;
   this.ZV81ProdutoSitTriDenSaiCodICMS = "" ;
   this.OV81ProdutoSitTriDenSaiCodICMS = "" ;
   this.AV84ProdutoSitTriForEntTipoICMS = "" ;
   this.ZV84ProdutoSitTriForEntTipoICMS = "" ;
   this.OV84ProdutoSitTriForEntTipoICMS = "" ;
   this.AV83ProdutoSitTriForEntCodICMS = "" ;
   this.ZV83ProdutoSitTriForEntCodICMS = "" ;
   this.OV83ProdutoSitTriForEntCodICMS = "" ;
   this.AV86ProdutoSitTriForSaiTipoICMS = "" ;
   this.ZV86ProdutoSitTriForSaiTipoICMS = "" ;
   this.OV86ProdutoSitTriForSaiTipoICMS = "" ;
   this.AV85ProdutoSitTriForSaiCodICMS = "" ;
   this.ZV85ProdutoSitTriForSaiCodICMS = "" ;
   this.OV85ProdutoSitTriForSaiCodICMS = "" ;
   this.AV87ProdutoSitTriEntPISCodigo = "" ;
   this.ZV87ProdutoSitTriEntPISCodigo = "" ;
   this.OV87ProdutoSitTriEntPISCodigo = "" ;
   this.AV89ProdutoSitTriSaiPISCodigo = "" ;
   this.ZV89ProdutoSitTriSaiPISCodigo = "" ;
   this.OV89ProdutoSitTriSaiPISCodigo = "" ;
   this.AV88ProdutoSitTriExtPISCodigo = "" ;
   this.ZV88ProdutoSitTriExtPISCodigo = "" ;
   this.OV88ProdutoSitTriExtPISCodigo = "" ;
   this.AV90ProdutoSitTriEntCOFCodigo = "" ;
   this.ZV90ProdutoSitTriEntCOFCodigo = "" ;
   this.OV90ProdutoSitTriEntCOFCodigo = "" ;
   this.AV91ProdutoSitTriSaiCOFCodigo = "" ;
   this.ZV91ProdutoSitTriSaiCOFCodigo = "" ;
   this.OV91ProdutoSitTriSaiCOFCodigo = "" ;
   this.AV92ProdutoSitTriExpCOFCodigo = "" ;
   this.ZV92ProdutoSitTriExpCOFCodigo = "" ;
   this.OV92ProdutoSitTriExpCOFCodigo = "" ;
   this.AV93ProdutoGrupoPrecoID = 0 ;
   this.ZV93ProdutoGrupoPrecoID = 0 ;
   this.OV93ProdutoGrupoPrecoID = 0 ;
   this.AV241ProdutoAliquotaAproxNacional = 0 ;
   this.ZV241ProdutoAliquotaAproxNacional = 0 ;
   this.OV241ProdutoAliquotaAproxNacional = 0 ;
   this.AV242ProdutoAliquotaAproxImportacao = 0 ;
   this.ZV242ProdutoAliquotaAproxImportacao = 0 ;
   this.OV242ProdutoAliquotaAproxImportacao = 0 ;
   this.AV252ProdutoMargemLucro = 0 ;
   this.ZV252ProdutoMargemLucro = 0 ;
   this.OV252ProdutoMargemLucro = 0 ;
   this.AV253ProdutoICMSST = 0 ;
   this.ZV253ProdutoICMSST = 0 ;
   this.OV253ProdutoICMSST = 0 ;
   this.AV254ProdutoDiferencaICMS = 0 ;
   this.ZV254ProdutoDiferencaICMS = 0 ;
   this.OV254ProdutoDiferencaICMS = 0 ;
   this.AV255MVAProdutoPcMargem = 0 ;
   this.ZV255MVAProdutoPcMargem = 0 ;
   this.OV255MVAProdutoPcMargem = 0 ;
   this.AV256MVAProdutoUf = "" ;
   this.ZV256MVAProdutoUf = "" ;
   this.OV256MVAProdutoUf = "" ;
   this.AV263CodificacaoEstId = "" ;
   this.ZV263CodificacaoEstId = "" ;
   this.OV263CodificacaoEstId = "" ;
   this.AV262ProdutoCodificacaoValor = "" ;
   this.ZV262ProdutoCodificacaoValor = "" ;
   this.OV262ProdutoCodificacaoValor = "" ;
   this.AV260ClassificacaoEstId = "" ;
   this.ZV260ClassificacaoEstId = "" ;
   this.OV260ClassificacaoEstId = "" ;
   this.AV261ProdutoClassificacaoValor = "" ;
   this.ZV261ProdutoClassificacaoValor = "" ;
   this.OV261ProdutoClassificacaoValor = "" ;
   this.AV266PrecoId = 0 ;
   this.ZV266PrecoId = 0 ;
   this.OV266PrecoId = 0 ;
   this.AV267PrecoDescricao = "" ;
   this.ZV267PrecoDescricao = "" ;
   this.OV267PrecoDescricao = "" ;
   this.AV265PercDescMaximo = 0 ;
   this.ZV265PercDescMaximo = 0 ;
   this.OV265PercDescMaximo = 0 ;
   this.AV239NBSCodigo = 0 ;
   this.ZV239NBSCodigo = 0 ;
   this.OV239NBSCodigo = 0 ;
   this.AV240NBSCodigoAux = 0 ;
   this.ZV240NBSCodigoAux = 0 ;
   this.OV240NBSCodigoAux = 0 ;
   this.AV246NBSDescricao = "" ;
   this.ZV246NBSDescricao = "" ;
   this.OV246NBSDescricao = "" ;
   this.AV299ProdutoPCComissao = 0 ;
   this.ZV299ProdutoPCComissao = 0 ;
   this.OV299ProdutoPCComissao = 0 ;
   this.AV300SubgrupoProdutoIdAtu = 0 ;
   this.ZV300SubgrupoProdutoIdAtu = 0 ;
   this.OV300SubgrupoProdutoIdAtu = 0 ;
   this.AV301SubgrupoProdutoDescAtu = "" ;
   this.ZV301SubgrupoProdutoDescAtu = "" ;
   this.OV301SubgrupoProdutoDescAtu = "" ;
   this.AV303ProdutoCESTCodigo = 0 ;
   this.ZV303ProdutoCESTCodigo = 0 ;
   this.OV303ProdutoCESTCodigo = 0 ;
   this.AV304ProdutoCESTDescricao = "" ;
   this.ZV304ProdutoCESTDescricao = "" ;
   this.OV304ProdutoCESTDescricao = "" ;
   this.AV291ProdutoIdIni = 0 ;
   this.ZV291ProdutoIdIni = 0 ;
   this.OV291ProdutoIdIni = 0 ;
   this.AV292ProdutoIdFin = 0 ;
   this.ZV292ProdutoIdFin = 0 ;
   this.OV292ProdutoIdFin = 0 ;
   this.AV128FamiliaIni = "" ;
   this.ZV128FamiliaIni = "" ;
   this.OV128FamiliaIni = "" ;
   this.AV129FamiliaFin = "" ;
   this.ZV129FamiliaFin = "" ;
   this.OV129FamiliaFin = "" ;
   this.AV132NcmInicial = 0 ;
   this.ZV132NcmInicial = 0 ;
   this.OV132NcmInicial = 0 ;
   this.AV133NcmFinal = 0 ;
   this.ZV133NcmFinal = 0 ;
   this.OV133NcmFinal = 0 ;
   this.AV244NBSInicial = 0 ;
   this.ZV244NBSInicial = 0 ;
   this.OV244NBSInicial = 0 ;
   this.AV245NBSFinal = 0 ;
   this.ZV245NBSFinal = 0 ;
   this.OV245NBSFinal = 0 ;
   this.AV135FabricanteIni = 0 ;
   this.ZV135FabricanteIni = 0 ;
   this.OV135FabricanteIni = 0 ;
   this.AV136FabricanteFin = 0 ;
   this.ZV136FabricanteFin = 0 ;
   this.OV136FabricanteFin = 0 ;
   this.AV140UnidadeCompraIni = "" ;
   this.ZV140UnidadeCompraIni = "" ;
   this.OV140UnidadeCompraIni = "" ;
   this.AV141UnidadeCompraFin = "" ;
   this.ZV141UnidadeCompraFin = "" ;
   this.OV141UnidadeCompraFin = "" ;
   this.AV142UnidadeVendaIni = "" ;
   this.ZV142UnidadeVendaIni = "" ;
   this.OV142UnidadeVendaIni = "" ;
   this.AV143UnidadeVendaFin = "" ;
   this.ZV143UnidadeVendaFin = "" ;
   this.OV143UnidadeVendaFin = "" ;
   this.AV225GrupoProdutoId = 0 ;
   this.ZV225GrupoProdutoId = 0 ;
   this.OV225GrupoProdutoId = 0 ;
   this.AV234GrupoProdutoDescricao = "" ;
   this.ZV234GrupoProdutoDescricao = "" ;
   this.OV234GrupoProdutoDescricao = "" ;
   this.AV226SubgrupoProdutoId = 0 ;
   this.ZV226SubgrupoProdutoId = 0 ;
   this.OV226SubgrupoProdutoId = 0 ;
   this.AV233SubgrupoProdutoDescricao = "" ;
   this.ZV233SubgrupoProdutoDescricao = "" ;
   this.OV233SubgrupoProdutoDescricao = "" ;
   this.AV130TipoProduto = "" ;
   this.ZV130TipoProduto = "" ;
   this.OV130TipoProduto = "" ;
   this.AV137DtUltimaCompra = gx.date.nullDate() ;
   this.ZV137DtUltimaCompra = gx.date.nullDate() ;
   this.OV137DtUltimaCompra = gx.date.nullDate() ;
   this.AV138DtUltimaSaida = gx.date.nullDate() ;
   this.ZV138DtUltimaSaida = gx.date.nullDate() ;
   this.OV138DtUltimaSaida = gx.date.nullDate() ;
   this.AV134EnviarBalanca = "" ;
   this.ZV134EnviarBalanca = "" ;
   this.OV134EnviarBalanca = "" ;
   this.AV131SituacaoProduto = "" ;
   this.ZV131SituacaoProduto = "" ;
   this.OV131SituacaoProduto = "" ;
   this.AV139AliquotaZero = "" ;
   this.ZV139AliquotaZero = "" ;
   this.OV139AliquotaZero = "" ;
   this.AV271SituacaoTributariaTipo = "" ;
   this.ZV271SituacaoTributariaTipo = "" ;
   this.OV271SituacaoTributariaTipo = "" ;
   this.AV272SituacaoTributariaCodigo = "" ;
   this.ZV272SituacaoTributariaCodigo = "" ;
   this.OV272SituacaoTributariaCodigo = "" ;
   this.AV284ProdutoTipoTributacaoFil = "" ;
   this.ZV284ProdutoTipoTributacaoFil = "" ;
   this.OV284ProdutoTipoTributacaoFil = "" ;
   this.AV285ProdutoPCAliquotaFil = 0 ;
   this.ZV285ProdutoPCAliquotaFil = 0 ;
   this.OV285ProdutoPCAliquotaFil = 0 ;
   this.AV302NomeProduto = "" ;
   this.ZV302NomeProduto = "" ;
   this.OV302NomeProduto = "" ;
   this.AV273ProdutoSitTriDenEntTipoICMSFil = "" ;
   this.ZV273ProdutoSitTriDenEntTipoICMSFil = "" ;
   this.OV273ProdutoSitTriDenEntTipoICMSFil = "" ;
   this.AV274ProdutoSitTriDenEntCodICMSFil = "" ;
   this.ZV274ProdutoSitTriDenEntCodICMSFil = "" ;
   this.OV274ProdutoSitTriDenEntCodICMSFil = "" ;
   this.AV275ProdutoSitTriForEntTipoICMSFil = "" ;
   this.ZV275ProdutoSitTriForEntTipoICMSFil = "" ;
   this.OV275ProdutoSitTriForEntTipoICMSFil = "" ;
   this.AV276ProdutoSitTriForEntCodICMSFil = "" ;
   this.ZV276ProdutoSitTriForEntCodICMSFil = "" ;
   this.OV276ProdutoSitTriForEntCodICMSFil = "" ;
   this.AV279ProdutoSitTriDenSaiTipoICMSFil = "" ;
   this.ZV279ProdutoSitTriDenSaiTipoICMSFil = "" ;
   this.OV279ProdutoSitTriDenSaiTipoICMSFil = "" ;
   this.AV283QtdeChar = 0 ;
   this.ZV283QtdeChar = 0 ;
   this.OV283QtdeChar = 0 ;
   this.AV277ProdutoSitTriDenSaiCodICMSFil = "" ;
   this.ZV277ProdutoSitTriDenSaiCodICMSFil = "" ;
   this.OV277ProdutoSitTriDenSaiCodICMSFil = "" ;
   this.AV281ProdutoSitTriDenSaiCodICMSDesc = "" ;
   this.ZV281ProdutoSitTriDenSaiCodICMSDesc = "" ;
   this.OV281ProdutoSitTriDenSaiCodICMSDesc = "" ;
   this.AV280ProdutoSitTriForSaiTipoICMSFil = "" ;
   this.ZV280ProdutoSitTriForSaiTipoICMSFil = "" ;
   this.OV280ProdutoSitTriForSaiTipoICMSFil = "" ;
   this.AV278ProdutoSitTriForSaiCodICMSFil = "" ;
   this.ZV278ProdutoSitTriForSaiCodICMSFil = "" ;
   this.OV278ProdutoSitTriForSaiCodICMSFil = "" ;
   this.AV282ProdutoSitTriForSaiCodICMSDesc = "" ;
   this.ZV282ProdutoSitTriForSaiCodICMSDesc = "" ;
   this.OV282ProdutoSitTriForSaiCodICMSDesc = "" ;
   this.AV118TipoSitPIS = "" ;
   this.ZV118TipoSitPIS = "" ;
   this.OV118TipoSitPIS = "" ;
   this.AV117TipoSitIPI = "" ;
   this.ZV117TipoSitIPI = "" ;
   this.OV117TipoSitIPI = "" ;
   this.AV116TipoSitICMS = "" ;
   this.ZV116TipoSitICMS = "" ;
   this.OV116TipoSitICMS = "" ;
   this.AV119TipoSitCOFINS = "" ;
   this.ZV119TipoSitCOFINS = "" ;
   this.OV119TipoSitCOFINS = "" ;
   this.AV110PCodigoBarrasProdutoBarra = 0 ;
   this.ZV110PCodigoBarrasProdutoBarra = 0 ;
   this.OV110PCodigoBarrasProdutoBarra = 0 ;
   this.AV101PFilialId = 0 ;
   this.ZV101PFilialId = 0 ;
   this.OV101PFilialId = 0 ;
   this.AV104PGrupoProdutoId = 0 ;
   this.ZV104PGrupoProdutoId = 0 ;
   this.OV104PGrupoProdutoId = 0 ;
   this.AV107PLoteProdutoCombinacao = "" ;
   this.ZV107PLoteProdutoCombinacao = "" ;
   this.OV107PLoteProdutoCombinacao = "" ;
   this.AV109PProdutoReferenciaPrompt = "" ;
   this.ZV109PProdutoReferenciaPrompt = "" ;
   this.OV109PProdutoReferenciaPrompt = "" ;
   this.AV106PProdutoCodigoId = 0 ;
   this.ZV106PProdutoCodigoId = 0 ;
   this.OV106PProdutoCodigoId = 0 ;
   this.AV103PProdutoCategoria = "" ;
   this.ZV103PProdutoCategoria = "" ;
   this.OV103PProdutoCategoria = "" ;
   this.AV102PPrecoNulo = 0 ;
   this.ZV102PPrecoNulo = 0 ;
   this.OV102PPrecoNulo = 0 ;
   this.AV238SNVenda = "" ;
   this.ZV238SNVenda = "" ;
   this.OV238SNVenda = "" ;
   this.AV31AcessoSistemaSequencia = 0 ;
   this.ZV31AcessoSistemaSequencia = 0 ;
   this.OV31AcessoSistemaSequencia = 0 ;
   this.AV172ProdutoEmpresaId = "" ;
   this.ZV172ProdutoEmpresaId = "" ;
   this.OV172ProdutoEmpresaId = "" ;
   this.AV188QtdeCaracteres = 0 ;
   this.ZV188QtdeCaracteres = 0 ;
   this.OV188QtdeCaracteres = 0 ;
   this.AV108IntAuxIn = 0 ;
   this.ZV108IntAuxIn = 0 ;
   this.OV108IntAuxIn = 0 ;
   this.AV178UnidadeEmpresaId = "" ;
   this.ZV178UnidadeEmpresaId = "" ;
   this.OV178UnidadeEmpresaId = "" ;
   this.AV105PSubGrupoProdutoId = 0 ;
   this.ZV105PSubGrupoProdutoId = 0 ;
   this.OV105PSubGrupoProdutoId = 0 ;
   this.AV177FamiliaEmpresaId = "" ;
   this.ZV177FamiliaEmpresaId = "" ;
   this.OV177FamiliaEmpresaId = "" ;
   this.AV184EmpresaContaContabilEmpresaId = "" ;
   this.ZV184EmpresaContaContabilEmpresaId = "" ;
   this.OV184EmpresaContaContabilEmpresaId = "" ;
   this.Gx_date = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV113SaiD = "" ;
   this.ZV113SaiD = "" ;
   this.OV113SaiD = "" ;
   this.AV268PrecoEmpresaId = "" ;
   this.ZV268PrecoEmpresaId = "" ;
   this.OV268PrecoEmpresaId = "" ;
   this.AV237ContaContabilSituacao = "" ;
   this.ZV237ContaContabilSituacao = "" ;
   this.OV237ContaContabilSituacao = "" ;
   this.AV236ContaContabilTipoLancamento = "" ;
   this.ZV236ContaContabilTipoLancamento = "" ;
   this.OV236ContaContabilTipoLancamento = "" ;
   this.AV112EntF = "" ;
   this.ZV112EntF = "" ;
   this.OV112EntF = "" ;
   this.AV111EntD = "" ;
   this.ZV111EntD = "" ;
   this.OV111EntD = "" ;
   this.AV173EmpresaPessoasEmpresaId = "" ;
   this.ZV173EmpresaPessoasEmpresaId = "" ;
   this.OV173EmpresaPessoasEmpresaId = "" ;
   this.AV114SaiF = "" ;
   this.ZV114SaiF = "" ;
   this.OV114SaiF = "" ;
   this.AV231SubgrupoProdutoEmpresaId = "" ;
   this.ZV231SubgrupoProdutoEmpresaId = "" ;
   this.OV231SubgrupoProdutoEmpresaId = "" ;
   this.AV232GrupoProdutoEmpresaId = "" ;
   this.ZV232GrupoProdutoEmpresaId = "" ;
   this.OV232GrupoProdutoEmpresaId = "" ;
   this.AV180ChamaOnBlurMascara = "" ;
   this.ZV180ChamaOnBlurMascara = "" ;
   this.OV180ChamaOnBlurMascara = "" ;
   this.AV185ProdutoSitTriEntTipoIPI = "" ;
   this.ZV185ProdutoSitTriEntTipoIPI = "" ;
   this.OV185ProdutoSitTriEntTipoIPI = "" ;
   this.AV121ProdutoSitTriEntPISTipo = "" ;
   this.ZV121ProdutoSitTriEntPISTipo = "" ;
   this.OV121ProdutoSitTriEntPISTipo = "" ;
   this.AV122ProdutoSitTriExtPISTipo = "" ;
   this.ZV122ProdutoSitTriExtPISTipo = "" ;
   this.OV122ProdutoSitTriExtPISTipo = "" ;
   this.AV123ProdutoSitTriSaiPISTipo = "" ;
   this.ZV123ProdutoSitTriSaiPISTipo = "" ;
   this.OV123ProdutoSitTriSaiPISTipo = "" ;
   this.AV124ProdutoSitTriEntCOFTipo = "" ;
   this.ZV124ProdutoSitTriEntCOFTipo = "" ;
   this.OV124ProdutoSitTriEntCOFTipo = "" ;
   this.AV125ProdutoSitTriSaiCOFTipo = "" ;
   this.ZV125ProdutoSitTriSaiCOFTipo = "" ;
   this.OV125ProdutoSitTriSaiCOFTipo = "" ;
   this.AV120ProdutoSitTriSaiTipoIPI = "" ;
   this.ZV120ProdutoSitTriSaiTipoIPI = "" ;
   this.OV120ProdutoSitTriSaiTipoIPI = "" ;
   this.AV224produtosittriextcoftipo = "" ;
   this.ZV224produtosittriextcoftipo = "" ;
   this.OV224produtosittriextcoftipo = "" ;
   this.AV287NCMCodigoIN = 0 ;
   this.ZV287NCMCodigoIN = 0 ;
   this.OV287NCMCodigoIN = 0 ;
   this.AV288String = "" ;
   this.ZV288String = "" ;
   this.OV288String = "" ;
   this.AV305CESTCodigoIN = 0 ;
   this.ZV305CESTCodigoIN = 0 ;
   this.OV305CESTCodigoIN = 0 ;
   this.AV306CESTCodigoMaskSaida = "" ;
   this.ZV306CESTCodigoMaskSaida = "" ;
   this.OV306CESTCodigoMaskSaida = "" ;
   this.AV309Imagem1 = "" ;
   this.ZV309Imagem1 = "" ;
   this.OV309Imagem1 = "" ;
   this.AV310Imagem2 = "" ;
   this.ZV310Imagem2 = "" ;
   this.OV310Imagem2 = "" ;
   this.AV311Imagem3 = "" ;
   this.ZV311Imagem3 = "" ;
   this.OV311Imagem3 = "" ;
   this.AV312Imagem4 = "" ;
   this.ZV312Imagem4 = "" ;
   this.OV312Imagem4 = "" ;
   this.AV313Imagem5 = "" ;
   this.ZV313Imagem5 = "" ;
   this.OV313Imagem5 = "" ;
   this.AV308ProdutoObservacao = "" ;
   this.ZV308ProdutoObservacao = "" ;
   this.OV308ProdutoObservacao = "" ;
   this.AV182Nao = "" ;
   this.ZV182Nao = "" ;
   this.OV182Nao = "" ;
   this.AV181Sim = "" ;
   this.ZV181Sim = "" ;
   this.OV181Sim = "" ;
   this.AV289Tab = [ ] ;
   this.AV94TpOperacao = "" ;
   this.AV294ProdutoAntigoIni = 0 ;
   this.AV295ProdutoAntigoFin = 0 ;
   this.AV100ProdutoNovo = 0 ;
   this.AV33CampoAtualizar = 0 ;
   this.AV95ProdutoUnidadeCompraID = "" ;
   this.AV204ProdutoUnidadeCompraDesc = "" ;
   this.AV96ProdutoUnidadeVendaID = "" ;
   this.AV203ProdutoUnidadeVendaDesc = "" ;
   this.AV35ProdutoFatorConversao = 0 ;
   this.AV36ProdutoReferencia = "" ;
   this.AV40ProdutoCodificacaoPrincipal = "" ;
   this.AV39ProdutoClassificacaoPrincipal = "" ;
   this.AV43ProdutoFamiliaId = "" ;
   this.AV209ProdutoFamiliaDescricao = "" ;
   this.AV41ProdutoDiasValidade = 0 ;
   this.AV49ProdutoSNSuspenso = "" ;
   this.AV42ProdutoFabricanteId = 0 ;
   this.AV214ProdutoFabricanteFantasia = "" ;
   this.AV97ProdutoTipoTributacao = "" ;
   this.AV44ProdutoPCAliquota = 0 ;
   this.AV235PercAliquota = 0 ;
   this.AV37ProdutoCasasDecimais = 0 ;
   this.AV50ProdutoTipo = "" ;
   this.AV45ProdutoPesoBruto = 0 ;
   this.AV46ProdutoPesoLiquido = 0 ;
   this.AV38ProdutoCategoria = "" ;
   this.AV48ProdutoSNControlaEstoque = "" ;
   this.AV47ProdutoSnCalculaCusto = "" ;
   this.AV52ProdutoTipoVendaBalanca = "" ;
   this.AV53ProdutoCFOEntDenEstadoCod = 0 ;
   this.AV54ProdutoCFOEntForaEstadoCod = 0 ;
   this.AV55ProdutoCFOEntInscDenEstadoCod = 0 ;
   this.AV56ProdutoCFOEntInscForEstadoCod = 0 ;
   this.AV57ProdutoCFOSaiDenEstadoCod = 0 ;
   this.AV58ProdutoCFOSaiForaEstadoCod = 0 ;
   this.AV59ProdutoCFOSaiInscDenEstadoCod = 0 ;
   this.AV60ProdutoCFOSaiInscForEstadoCod = 0 ;
   this.AV62GeneroId = "" ;
   this.AV217GeneroDescricao = "" ;
   this.AV66ProdutoClassificacaoABC = "" ;
   this.AV51ProdutoTipoProducao = "" ;
   this.AV115ProdutoCContabilTradutor = 0 ;
   this.AV65ProdutoCContabilId = "" ;
   this.AV218ProdutoCContabilNome = "" ;
   this.AV61EsquemaCodigo = 0 ;
   this.AV221EsquemaDescricao = "" ;
   this.AV126NCMCodigoMask = 0 ;
   this.AV64NCMCodigo = 0 ;
   this.AV127NcmCodigoAux = 0 ;
   this.AV249NCMDescricao = "" ;
   this.AV63ListaServicoId = 0 ;
   this.AV193ListaServicoDescricao = "" ;
   this.AV67ProdutoSitTriEntCodigoIPI = "" ;
   this.AV68ProdutoIPIPCEntrada = 0 ;
   this.AV70ProdutoSitTriSaiCodigoIPI = "" ;
   this.AV69ProdutoIPIPCSaida = 0 ;
   this.AV98ProdutoPISEntrada = 0 ;
   this.AV71ProdutoMargemMarkupCodigo = "" ;
   this.AV74ProdutoPISSaida = 0 ;
   this.AV72ProdutoPISExportacao = 0 ;
   this.AV73ProdutoPISReducaoBase = 0 ;
   this.AV75ProdutoCOFINSEntrada = 0 ;
   this.AV78ProdutoCOFINSSaida = 0 ;
   this.AV76ProdutoCOFINSExportacao = 0 ;
   this.AV77ProdutoCOFINSReducaoBase = 0 ;
   this.AV80ProdutoSitTriDenEntTipoICMS = "" ;
   this.AV79ProdutoSitTriDenEntCodICMS = "" ;
   this.AV82ProdutoSitTriDenSaiTipoICMS = "" ;
   this.AV81ProdutoSitTriDenSaiCodICMS = "" ;
   this.AV84ProdutoSitTriForEntTipoICMS = "" ;
   this.AV83ProdutoSitTriForEntCodICMS = "" ;
   this.AV86ProdutoSitTriForSaiTipoICMS = "" ;
   this.AV85ProdutoSitTriForSaiCodICMS = "" ;
   this.AV87ProdutoSitTriEntPISCodigo = "" ;
   this.AV89ProdutoSitTriSaiPISCodigo = "" ;
   this.AV88ProdutoSitTriExtPISCodigo = "" ;
   this.AV90ProdutoSitTriEntCOFCodigo = "" ;
   this.AV91ProdutoSitTriSaiCOFCodigo = "" ;
   this.AV92ProdutoSitTriExpCOFCodigo = "" ;
   this.AV93ProdutoGrupoPrecoID = 0 ;
   this.AV241ProdutoAliquotaAproxNacional = 0 ;
   this.AV242ProdutoAliquotaAproxImportacao = 0 ;
   this.AV252ProdutoMargemLucro = 0 ;
   this.AV253ProdutoICMSST = 0 ;
   this.AV254ProdutoDiferencaICMS = 0 ;
   this.AV255MVAProdutoPcMargem = 0 ;
   this.AV256MVAProdutoUf = "" ;
   this.AV263CodificacaoEstId = "" ;
   this.AV262ProdutoCodificacaoValor = "" ;
   this.AV260ClassificacaoEstId = "" ;
   this.AV261ProdutoClassificacaoValor = "" ;
   this.AV266PrecoId = 0 ;
   this.AV267PrecoDescricao = "" ;
   this.AV265PercDescMaximo = 0 ;
   this.AV239NBSCodigo = 0 ;
   this.AV240NBSCodigoAux = 0 ;
   this.AV246NBSDescricao = "" ;
   this.AV299ProdutoPCComissao = 0 ;
   this.AV300SubgrupoProdutoIdAtu = 0 ;
   this.AV301SubgrupoProdutoDescAtu = "" ;
   this.AV303ProdutoCESTCodigo = 0 ;
   this.AV304ProdutoCESTDescricao = "" ;
   this.AV291ProdutoIdIni = 0 ;
   this.AV292ProdutoIdFin = 0 ;
   this.AV128FamiliaIni = "" ;
   this.AV129FamiliaFin = "" ;
   this.AV132NcmInicial = 0 ;
   this.AV133NcmFinal = 0 ;
   this.AV244NBSInicial = 0 ;
   this.AV245NBSFinal = 0 ;
   this.AV135FabricanteIni = 0 ;
   this.AV136FabricanteFin = 0 ;
   this.AV140UnidadeCompraIni = "" ;
   this.AV141UnidadeCompraFin = "" ;
   this.AV142UnidadeVendaIni = "" ;
   this.AV143UnidadeVendaFin = "" ;
   this.AV225GrupoProdutoId = 0 ;
   this.AV234GrupoProdutoDescricao = "" ;
   this.AV226SubgrupoProdutoId = 0 ;
   this.AV233SubgrupoProdutoDescricao = "" ;
   this.AV130TipoProduto = "" ;
   this.AV137DtUltimaCompra = gx.date.nullDate() ;
   this.AV138DtUltimaSaida = gx.date.nullDate() ;
   this.AV134EnviarBalanca = "" ;
   this.AV131SituacaoProduto = "" ;
   this.AV139AliquotaZero = "" ;
   this.AV271SituacaoTributariaTipo = "" ;
   this.AV272SituacaoTributariaCodigo = "" ;
   this.AV284ProdutoTipoTributacaoFil = "" ;
   this.AV285ProdutoPCAliquotaFil = 0 ;
   this.AV302NomeProduto = "" ;
   this.AV273ProdutoSitTriDenEntTipoICMSFil = "" ;
   this.AV274ProdutoSitTriDenEntCodICMSFil = "" ;
   this.AV275ProdutoSitTriForEntTipoICMSFil = "" ;
   this.AV276ProdutoSitTriForEntCodICMSFil = "" ;
   this.AV279ProdutoSitTriDenSaiTipoICMSFil = "" ;
   this.AV283QtdeChar = 0 ;
   this.AV277ProdutoSitTriDenSaiCodICMSFil = "" ;
   this.AV281ProdutoSitTriDenSaiCodICMSDesc = "" ;
   this.AV280ProdutoSitTriForSaiTipoICMSFil = "" ;
   this.AV278ProdutoSitTriForSaiCodICMSFil = "" ;
   this.AV282ProdutoSitTriForSaiCodICMSDesc = "" ;
   this.AV118TipoSitPIS = "" ;
   this.AV117TipoSitIPI = "" ;
   this.AV116TipoSitICMS = "" ;
   this.AV119TipoSitCOFINS = "" ;
   this.AV110PCodigoBarrasProdutoBarra = 0 ;
   this.AV101PFilialId = 0 ;
   this.AV104PGrupoProdutoId = 0 ;
   this.AV107PLoteProdutoCombinacao = "" ;
   this.AV109PProdutoReferenciaPrompt = "" ;
   this.AV106PProdutoCodigoId = 0 ;
   this.AV103PProdutoCategoria = "" ;
   this.AV102PPrecoNulo = 0 ;
   this.AV238SNVenda = "" ;
   this.AV31AcessoSistemaSequencia = 0 ;
   this.AV172ProdutoEmpresaId = "" ;
   this.AV188QtdeCaracteres = 0 ;
   this.AV108IntAuxIn = 0 ;
   this.AV178UnidadeEmpresaId = "" ;
   this.AV105PSubGrupoProdutoId = 0 ;
   this.AV177FamiliaEmpresaId = "" ;
   this.AV184EmpresaContaContabilEmpresaId = "" ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV113SaiD = "" ;
   this.AV268PrecoEmpresaId = "" ;
   this.AV237ContaContabilSituacao = "" ;
   this.AV236ContaContabilTipoLancamento = "" ;
   this.AV112EntF = "" ;
   this.AV111EntD = "" ;
   this.AV173EmpresaPessoasEmpresaId = "" ;
   this.AV114SaiF = "" ;
   this.AV231SubgrupoProdutoEmpresaId = "" ;
   this.AV232GrupoProdutoEmpresaId = "" ;
   this.AV180ChamaOnBlurMascara = "" ;
   this.AV185ProdutoSitTriEntTipoIPI = "" ;
   this.AV121ProdutoSitTriEntPISTipo = "" ;
   this.AV122ProdutoSitTriExtPISTipo = "" ;
   this.AV123ProdutoSitTriSaiPISTipo = "" ;
   this.AV124ProdutoSitTriEntCOFTipo = "" ;
   this.AV125ProdutoSitTriSaiCOFTipo = "" ;
   this.AV120ProdutoSitTriSaiTipoIPI = "" ;
   this.AV224produtosittriextcoftipo = "" ;
   this.AV287NCMCodigoIN = 0 ;
   this.AV288String = "" ;
   this.AV305CESTCodigoIN = 0 ;
   this.AV306CESTCodigoMaskSaida = "" ;
   this.AV309Imagem1 = "" ;
   this.AV310Imagem2 = "" ;
   this.AV311Imagem3 = "" ;
   this.AV312Imagem4 = "" ;
   this.AV313Imagem5 = "" ;
   this.AV308ProdutoObservacao = "" ;
   this.AV182Nao = "" ;
   this.AV181Sim = "" ;
   this.A2936CodificacaoEstEmpresaId = "" ;
   this.A2937CodificacaoEstId = "" ;
   this.A2932CodificacaoEstDescricao = "" ;
   this.A2929ClassificacaoEstEmpresaId = "" ;
   this.A2930ClassificacaoEstId = "" ;
   this.A2922ClassificacaoEstDescricao = "" ;
   this.A3566SituacaoTributariaCodigo = "" ;
   this.A3564SituacaoTributariaTipo = "" ;
   this.A3409SubgrupoProdutoId = 0 ;
   this.A3826SubgrupoProdutoEmpresaId = "" ;
   this.A3963SubgrupoProdutoDescricao = "" ;
   this.A3408GrupoProdutoId = 0 ;
   this.A3539GrupoProdutoEmpresaId = "" ;
   this.A3536GrupoProdutoDescricao = "" ;
   this.A710PrecoId = 0 ;
   this.A709PrecoEmpresaId = "" ;
   this.A722PrecoTipo = "" ;
   this.A711PrecoDescricao = "" ;
   this.A7634NBSCodigo = 0 ;
   this.A5941GrupoPrecoId = 0 ;
   this.A5940GrupoPrecoEmpresaId = "" ;
   this.A4317MargemMarkupCodigo = "" ;
   this.A2983ListaServicoId = 0 ;
   this.A2915EsquemaCodigo = 0 ;
   this.A64ContaContabilTradutor = 0 ;
   this.A176EmpresaContaContabilEmpresaId = "" ;
   this.A62ContaContabilId = "" ;
   this.A63ContaContabilNome = "" ;
   this.A3527GeneroId = "" ;
   this.A3430CFOPCodigo = 0 ;
   this.A3444CFOPTipoEntSai = "" ;
   this.A449PessoaFabricante = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A2957FamiliaId = "" ;
   this.A2956FamiliaEmpresaId = "" ;
   this.A3411UnidadeId = "" ;
   this.A4162UnidadeEmpresaId = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.AV264VlrString2 = "" ;
   this.AV243VlrNumerico2 = 0 ;
   this.AV257CodigoCST = "" ;
   this.AV198TipoCST = "" ;
   this.AV197VlrNumerico = 0 ;
   this.AV196VlrString = "" ;
   this.Events = {"e11xx2_client": ["'FECHAR'", true] ,"e13xx2_client": ["ENTER", true] ,"e15xx2_client": ["VPRODUTOCESTCODIGO.ISVALID", true] ,"e16xx2_client": ["'DIALOG1'", true] ,"e17xx2_client": ["'DIALOG2'", true] ,"e18xx2_client": ["'DIALOG3'", true] ,"e19xx2_client": ["'DIALOG4'", true] ,"e20xx2_client": ["'DIALOG5'", true] ,"e22xx2_client": ["VTPOPERACAO.CLICK", true] ,"e23xx2_client": ["VCAMPOATUALIZAR.CLICK", true] ,"e28xx2_client": ["CANCEL", true] ,"e26xx1_client": ["VCLASSIFICACAOESTID.CLICK", false] ,"e27xx1_client": ["VCODIFICACAOESTID.CLICK", false] ,"e24xx1_client": ["'PROMPTPRODUTOINI'", false] ,"e25xx1_client": ["'PROMPTPRODUTOFIN'", false]};
   this.EvtParms["REFRESH"] = [[{av:'AV33CampoAtualizar',fld:'vCAMPOATUALIZAR'},{av:'AV94TpOperacao',fld:'vTPOPERACAO'},{av:'A2932CodificacaoEstDescricao',fld:'CODIFICACAOESTDESCRICAO'},{av:'A2936CodificacaoEstEmpresaId',fld:'CODIFICACAOESTEMPRESAID'},{av:'AV259CodificacaoEstEmpresaId',fld:'vCODIFICACAOESTEMPRESAID'},{av:'A2937CodificacaoEstId',fld:'CODIFICACAOESTID'},{av:'A2922ClassificacaoEstDescricao',fld:'CLASSIFICACAOESTDESCRICAO'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV258ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'}],[{av:'AV289Tab',fld:'vTAB'},{av:'gx.fn.getCtrlProperty("TABTROCA","Visible")',ctrl:'TABTROCA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABATUALIZACAO","Visible")',ctrl:'TABATUALIZACAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABSELECAO","Visible")',ctrl:'TABSELECAO',prop:'Visible'},{av:'AV33CampoAtualizar',fld:'vCAMPOATUALIZAR'},{av:'gx.fn.getCtrlProperty("TABUNIDADECOMPRA","Visible")',ctrl:'TABUNIDADECOMPRA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABUNIDADEVENDA","Visible")',ctrl:'TABUNIDADEVENDA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABFATOR","Visible")',ctrl:'TABFATOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABREFERENCIA","Visible")',ctrl:'TABREFERENCIA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCODIFICACAO","Visible")',ctrl:'TABCODIFICACAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCLASSIFICACAO","Visible")',ctrl:'TABCLASSIFICACAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABFAMILIA","Visible")',ctrl:'TABFAMILIA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABDIASVAL","Visible")',ctrl:'TABDIASVAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABSNSUSPENSO","Visible")',ctrl:'TABSNSUSPENSO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABFABRICANTE","Visible")',ctrl:'TABFABRICANTE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABTPTRIBUTACAO","Visible")',ctrl:'TABTPTRIBUTACAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPCALIQUOTA","Visible")',ctrl:'TABPCALIQUOTA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCASASDEC","Visible")',ctrl:'TABCASASDEC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABTIPO","Visible")',ctrl:'TABTIPO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPESBRUTO","Visible")',ctrl:'TABPESBRUTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPESLIQUIDO","Visible")',ctrl:'TABPESLIQUIDO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCATEGORIA","Visible")',ctrl:'TABCATEGORIA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABSNCONTESTOQUE","Visible")',ctrl:'TABSNCONTESTOQUE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABSNCALCCUSTO","Visible")',ctrl:'TABSNCALCCUSTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABTPVENDABALANCA","Visible")',ctrl:'TABTPVENDABALANCA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCFOENTDEN","Visible")',ctrl:'TABCFOENTDEN',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCFOENTFOR","Visible")',ctrl:'TABCFOENTFOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCFOENTINSCDEN","Visible")',ctrl:'TABCFOENTINSCDEN',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCFOENTINSCFOR","Visible")',ctrl:'TABCFOENTINSCFOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCFOSAIDEN","Visible")',ctrl:'TABCFOSAIDEN',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCFOSAIFOR","Visible")',ctrl:'TABCFOSAIFOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCFOSAIINSCDEN","Visible")',ctrl:'TABCFOSAIINSCDEN',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCFOSAIINSCFOR","Visible")',ctrl:'TABCFOSAIINSCFOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABGENERO","Visible")',ctrl:'TABGENERO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCLASSABC","Visible")',ctrl:'TABCLASSABC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABTPPRODUCAO","Visible")',ctrl:'TABTPPRODUCAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCCONTABIL","Visible")',ctrl:'TABCCONTABIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABESQUEMA","Visible")',ctrl:'TABESQUEMA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABNCM","Visible")',ctrl:'TABNCM',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLISTASER","Visible")',ctrl:'TABLISTASER',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABIPIENT","Visible")',ctrl:'TABIPIENT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPCIPIENT","Visible")',ctrl:'TABPCIPIENT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABIPISAI","Visible")',ctrl:'TABIPISAI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPCIPISAI","Visible")',ctrl:'TABPCIPISAI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPISENT","Visible")',ctrl:'TABPISENT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABMARKUP","Visible")',ctrl:'TABMARKUP',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPISSAI","Visible")',ctrl:'TABPISSAI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPISEXP","Visible")',ctrl:'TABPISEXP',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPISRED","Visible")',ctrl:'TABPISRED',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCOFINSENT","Visible")',ctrl:'TABCOFINSENT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCOFINSSAI","Visible")',ctrl:'TABCOFINSSAI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCOFINSEXP","Visible")',ctrl:'TABCOFINSEXP',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCOFINSRED","Visible")',ctrl:'TABCOFINSRED',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABICMSENTDEN","Visible")',ctrl:'TABICMSENTDEN',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABICMSSAIDEN","Visible")',ctrl:'TABICMSSAIDEN',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABICMSENTFOR","Visible")',ctrl:'TABICMSENTFOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABICMSSAIFOR","Visible")',ctrl:'TABICMSSAIFOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCSTPISENT","Visible")',ctrl:'TABCSTPISENT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCSTPISSAI","Visible")',ctrl:'TABCSTPISSAI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCSTPISEXP","Visible")',ctrl:'TABCSTPISEXP',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCSTCOFINSENT","Visible")',ctrl:'TABCSTCOFINSENT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCSTCOFINSSAI","Visible")',ctrl:'TABCSTCOFINSSAI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCSTCOFINSEXP","Visible")',ctrl:'TABCSTCOFINSEXP',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABGRUPOPRECO","Visible")',ctrl:'TABGRUPOPRECO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABNBS","Visible")',ctrl:'TABNBS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABIMPOSTOAPROX","Visible")',ctrl:'TABIMPOSTOAPROX',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPERCMARGEMLUCRO","Visible")',ctrl:'TABPERCMARGEMLUCRO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABICMSST","Visible")',ctrl:'TABICMSST',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABDIFICMS","Visible")',ctrl:'TABDIFICMS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPERCENTUALMVA","Visible")',ctrl:'TABPERCENTUALMVA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCODPRODUTO","Visible")',ctrl:'TABCODPRODUTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCLASSPRODUTO","Visible")',ctrl:'TABCLASSPRODUTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABDESCMAXIMO","Visible")',ctrl:'TABDESCMAXIMO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPCCOMISSAO","Visible")',ctrl:'TABPCCOMISSAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABSUBGRUPO","Visible")',ctrl:'TABSUBGRUPO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCEST","Visible")',ctrl:'TABCEST',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABOBSERVACAO","Visible")',ctrl:'TABOBSERVACAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABIMAGEM","Visible")',ctrl:'TABIMAGEM',prop:'Visible'},{av:'AV263CodificacaoEstId',fld:'vCODIFICACAOESTID'},{av:'AV260ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV31AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV19tpErro',fld:'vTPERRO'},{av:'AV94TpOperacao',fld:'vTPOPERACAO'},{av:'AV277ProdutoSitTriDenSaiCodICMSFil',fld:'vPRODUTOSITTRIDENSAICODICMSFIL'},{av:'AV278ProdutoSitTriForSaiCodICMSFil',fld:'vPRODUTOSITTRIFORSAICODICMSFIL'},{av:'AV172ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV294ProdutoAntigoIni',fld:'vPRODUTOANTIGOINI'},{av:'AV295ProdutoAntigoFin',fld:'vPRODUTOANTIGOFIN'},{av:'AV100ProdutoNovo',fld:'vPRODUTONOVO'},{av:'AV33CampoAtualizar',fld:'vCAMPOATUALIZAR'},{av:'AV196VlrString',fld:'vVLRSTRING'},{av:'AV264VlrString2',fld:'vVLRSTRING2'},{av:'AV197VlrNumerico',fld:'vVLRNUMERICO'},{av:'AV243VlrNumerico2',fld:'vVLRNUMERICO2'},{av:'AV198TipoCST',fld:'vTIPOCST'},{av:'AV257CodigoCST',fld:'vCODIGOCST'},{av:'AV256MVAProdutoUf',fld:'vMVAPRODUTOUF'},{av:'AV128FamiliaIni',fld:'vFAMILIAINI'},{av:'AV129FamiliaFin',fld:'vFAMILIAFIN'},{av:'AV132NcmInicial',fld:'vNCMINICIAL'},{av:'AV133NcmFinal',fld:'vNCMFINAL'},{av:'AV135FabricanteIni',fld:'vFABRICANTEINI'},{av:'AV136FabricanteFin',fld:'vFABRICANTEFIN'},{av:'AV140UnidadeCompraIni',fld:'vUNIDADECOMPRAINI'},{av:'AV141UnidadeCompraFin',fld:'vUNIDADECOMPRAFIN'},{av:'AV142UnidadeVendaIni',fld:'vUNIDADEVENDAINI'},{av:'AV143UnidadeVendaFin',fld:'vUNIDADEVENDAFIN'},{av:'AV139AliquotaZero',fld:'vALIQUOTAZERO'},{av:'AV137DtUltimaCompra',fld:'vDTULTIMACOMPRA'},{av:'AV138DtUltimaSaida',fld:'vDTULTIMASAIDA'},{av:'AV134EnviarBalanca',fld:'vENVIARBALANCA'},{av:'AV131SituacaoProduto',fld:'vSITUACAOPRODUTO'},{av:'AV130TipoProduto',fld:'vTIPOPRODUTO'},{av:'AV225GrupoProdutoId',fld:'vGRUPOPRODUTOID'},{av:'AV226SubgrupoProdutoId',fld:'vSUBGRUPOPRODUTOID'},{av:'AV244NBSInicial',fld:'vNBSINICIAL'},{av:'AV245NBSFinal',fld:'vNBSFINAL'},{av:'AV271SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO'},{av:'AV272SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO'},{av:'AV284ProdutoTipoTributacaoFil',fld:'vPRODUTOTIPOTRIBUTACAOFIL'},{av:'AV285ProdutoPCAliquotaFil',fld:'vPRODUTOPCALIQUOTAFIL'},{av:'AV273ProdutoSitTriDenEntTipoICMSFil',fld:'vPRODUTOSITTRIDENENTTIPOICMSFIL'},{av:'AV274ProdutoSitTriDenEntCodICMSFil',fld:'vPRODUTOSITTRIDENENTCODICMSFIL'},{av:'AV275ProdutoSitTriForEntTipoICMSFil',fld:'vPRODUTOSITTRIFORENTTIPOICMSFIL'},{av:'AV276ProdutoSitTriForEntCodICMSFil',fld:'vPRODUTOSITTRIFORENTCODICMSFIL'},{av:'AV279ProdutoSitTriDenSaiTipoICMSFil',fld:'vPRODUTOSITTRIDENSAITIPOICMSFIL'},{av:'AV280ProdutoSitTriForSaiTipoICMSFil',fld:'vPRODUTOSITTRIFORSAITIPOICMSFIL'},{av:'AV291ProdutoIdIni',fld:'vPRODUTOIDINI'},{av:'AV292ProdutoIdFin',fld:'vPRODUTOIDFIN'},{av:'AV302NomeProduto',fld:'vNOMEPRODUTO'},{av:'AV303ProdutoCESTCodigo',fld:'vPRODUTOCESTCODIGO'},{av:'AV308ProdutoObservacao',fld:'vPRODUTOOBSERVACAO'},{av:'AV309Imagem1',fld:'vIMAGEM1'},{av:'AV310Imagem2',fld:'vIMAGEM2'},{av:'AV311Imagem3',fld:'vIMAGEM3'},{av:'AV312Imagem4',fld:'vIMAGEM4'},{av:'AV313Imagem5',fld:'vIMAGEM5'},{av:'AV95ProdutoUnidadeCompraID',fld:'vPRODUTOUNIDADECOMPRAID'},{av:'AV96ProdutoUnidadeVendaID',fld:'vPRODUTOUNIDADEVENDAID'},{av:'AV35ProdutoFatorConversao',fld:'vPRODUTOFATORCONVERSAO'},{av:'AV36ProdutoReferencia',fld:'vPRODUTOREFERENCIA'},{av:'AV40ProdutoCodificacaoPrincipal',fld:'vPRODUTOCODIFICACAOPRINCIPAL'},{av:'AV39ProdutoClassificacaoPrincipal',fld:'vPRODUTOCLASSIFICACAOPRINCIPAL'},{av:'AV43ProdutoFamiliaId',fld:'vPRODUTOFAMILIAID'},{av:'AV41ProdutoDiasValidade',fld:'vPRODUTODIASVALIDADE'},{av:'AV49ProdutoSNSuspenso',fld:'vPRODUTOSNSUSPENSO'},{av:'AV42ProdutoFabricanteId',fld:'vPRODUTOFABRICANTEID'},{av:'AV44ProdutoPCAliquota',fld:'vPRODUTOPCALIQUOTA'},{av:'AV97ProdutoTipoTributacao',fld:'vPRODUTOTIPOTRIBUTACAO'},{av:'AV235PercAliquota',fld:'vPERCALIQUOTA'},{av:'AV37ProdutoCasasDecimais',fld:'vPRODUTOCASASDECIMAIS'},{av:'AV50ProdutoTipo',fld:'vPRODUTOTIPO'},{av:'AV45ProdutoPesoBruto',fld:'vPRODUTOPESOBRUTO'},{av:'AV46ProdutoPesoLiquido',fld:'vPRODUTOPESOLIQUIDO'},{av:'AV38ProdutoCategoria',fld:'vPRODUTOCATEGORIA'},{av:'AV48ProdutoSNControlaEstoque',fld:'vPRODUTOSNCONTROLAESTOQUE'},{av:'AV47ProdutoSnCalculaCusto',fld:'vPRODUTOSNCALCULACUSTO'},{av:'AV52ProdutoTipoVendaBalanca',fld:'vPRODUTOTIPOVENDABALANCA'},{av:'AV53ProdutoCFOEntDenEstadoCod',fld:'vPRODUTOCFOENTDENESTADOCOD'},{av:'AV54ProdutoCFOEntForaEstadoCod',fld:'vPRODUTOCFOENTFORAESTADOCOD'},{av:'AV55ProdutoCFOEntInscDenEstadoCod',fld:'vPRODUTOCFOENTINSCDENESTADOCOD'},{av:'AV56ProdutoCFOEntInscForEstadoCod',fld:'vPRODUTOCFOENTINSCFORESTADOCOD'},{av:'AV57ProdutoCFOSaiDenEstadoCod',fld:'vPRODUTOCFOSAIDENESTADOCOD'},{av:'AV58ProdutoCFOSaiForaEstadoCod',fld:'vPRODUTOCFOSAIFORAESTADOCOD'},{av:'AV59ProdutoCFOSaiInscDenEstadoCod',fld:'vPRODUTOCFOSAIINSCDENESTADOCOD'},{av:'AV60ProdutoCFOSaiInscForEstadoCod',fld:'vPRODUTOCFOSAIINSCFORESTADOCOD'},{av:'AV62GeneroId',fld:'vGENEROID'},{av:'AV66ProdutoClassificacaoABC',fld:'vPRODUTOCLASSIFICACAOABC'},{av:'AV51ProdutoTipoProducao',fld:'vPRODUTOTIPOPRODUCAO'},{av:'AV65ProdutoCContabilId',fld:'vPRODUTOCCONTABILID'},{av:'AV61EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV63ListaServicoId',fld:'vLISTASERVICOID'},{av:'AV67ProdutoSitTriEntCodigoIPI',fld:'vPRODUTOSITTRIENTCODIGOIPI'},{av:'AV68ProdutoIPIPCEntrada',fld:'vPRODUTOIPIPCENTRADA'},{av:'AV70ProdutoSitTriSaiCodigoIPI',fld:'vPRODUTOSITTRISAICODIGOIPI'},{av:'AV69ProdutoIPIPCSaida',fld:'vPRODUTOIPIPCSAIDA'},{av:'AV98ProdutoPISEntrada',fld:'vPRODUTOPISENTRADA'},{av:'AV71ProdutoMargemMarkupCodigo',fld:'vPRODUTOMARGEMMARKUPCODIGO'},{av:'AV74ProdutoPISSaida',fld:'vPRODUTOPISSAIDA'},{av:'AV72ProdutoPISExportacao',fld:'vPRODUTOPISEXPORTACAO'},{av:'AV73ProdutoPISReducaoBase',fld:'vPRODUTOPISREDUCAOBASE'},{av:'AV75ProdutoCOFINSEntrada',fld:'vPRODUTOCOFINSENTRADA'},{av:'AV78ProdutoCOFINSSaida',fld:'vPRODUTOCOFINSSAIDA'},{av:'AV76ProdutoCOFINSExportacao',fld:'vPRODUTOCOFINSEXPORTACAO'},{av:'AV77ProdutoCOFINSReducaoBase',fld:'vPRODUTOCOFINSREDUCAOBASE'},{av:'AV79ProdutoSitTriDenEntCodICMS',fld:'vPRODUTOSITTRIDENENTCODICMS'},{av:'AV80ProdutoSitTriDenEntTipoICMS',fld:'vPRODUTOSITTRIDENENTTIPOICMS'},{av:'AV81ProdutoSitTriDenSaiCodICMS',fld:'vPRODUTOSITTRIDENSAICODICMS'},{av:'AV82ProdutoSitTriDenSaiTipoICMS',fld:'vPRODUTOSITTRIDENSAITIPOICMS'},{av:'AV83ProdutoSitTriForEntCodICMS',fld:'vPRODUTOSITTRIFORENTCODICMS'},{av:'AV84ProdutoSitTriForEntTipoICMS',fld:'vPRODUTOSITTRIFORENTTIPOICMS'},{av:'AV85ProdutoSitTriForSaiCodICMS',fld:'vPRODUTOSITTRIFORSAICODICMS'},{av:'AV86ProdutoSitTriForSaiTipoICMS',fld:'vPRODUTOSITTRIFORSAITIPOICMS'},{av:'AV87ProdutoSitTriEntPISCodigo',fld:'vPRODUTOSITTRIENTPISCODIGO'},{av:'AV89ProdutoSitTriSaiPISCodigo',fld:'vPRODUTOSITTRISAIPISCODIGO'},{av:'AV88ProdutoSitTriExtPISCodigo',fld:'vPRODUTOSITTRIEXTPISCODIGO'},{av:'AV90ProdutoSitTriEntCOFCodigo',fld:'vPRODUTOSITTRIENTCOFCODIGO'},{av:'AV91ProdutoSitTriSaiCOFCodigo',fld:'vPRODUTOSITTRISAICOFCODIGO'},{av:'AV92ProdutoSitTriExpCOFCodigo',fld:'vPRODUTOSITTRIEXPCOFCODIGO'},{av:'AV93ProdutoGrupoPrecoID',fld:'vPRODUTOGRUPOPRECOID'},{av:'AV126NCMCodigoMask',fld:'vNCMCODIGOMASK'},{av:'AV239NBSCodigo',fld:'vNBSCODIGO'},{av:'AV242ProdutoAliquotaAproxImportacao',fld:'vPRODUTOALIQUOTAAPROXIMPORTACAO'},{av:'AV241ProdutoAliquotaAproxNacional',fld:'vPRODUTOALIQUOTAAPROXNACIONAL'},{av:'AV252ProdutoMargemLucro',fld:'vPRODUTOMARGEMLUCRO'},{av:'AV253ProdutoICMSST',fld:'vPRODUTOICMSST'},{av:'AV254ProdutoDiferencaICMS',fld:'vPRODUTODIFERENCAICMS'},{av:'AV255MVAProdutoPcMargem',fld:'vMVAPRODUTOPCMARGEM'},{av:'AV262ProdutoCodificacaoValor',fld:'vPRODUTOCODIFICACAOVALOR'},{av:'AV263CodificacaoEstId',fld:'vCODIFICACAOESTID'},{av:'AV261ProdutoClassificacaoValor',fld:'vPRODUTOCLASSIFICACAOVALOR'},{av:'AV260ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV265PercDescMaximo',fld:'vPERCDESCMAXIMO'},{av:'AV266PrecoId',fld:'vPRECOID'},{av:'AV299ProdutoPCComissao',fld:'vPRODUTOPCCOMISSAO'},{av:'AV300SubgrupoProdutoIdAtu',fld:'vSUBGRUPOPRODUTOIDATU'},{av:'A3411UnidadeId',fld:'UNIDADEID'},{av:'AV178UnidadeEmpresaId',fld:'vUNIDADEEMPRESAID'},{av:'A4162UnidadeEmpresaId',fld:'UNIDADEEMPRESAID'},{av:'A2957FamiliaId',fld:'FAMILIAID'},{av:'AV177FamiliaEmpresaId',fld:'vFAMILIAEMPRESAID'},{av:'A2956FamiliaEmpresaId',fld:'FAMILIAEMPRESAID'},{av:'A449PessoaFabricante',fld:'PESSOAFABRICANTE'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV173EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A3444CFOPTipoEntSai',fld:'CFOPTIPOENTSAI'},{av:'A3430CFOPCodigo',fld:'CFOPCODIGO'},{av:'A3527GeneroId',fld:'GENEROID'},{av:'A63ContaContabilNome',fld:'CONTACONTABILNOME'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A64ContaContabilTradutor',fld:'CONTACONTABILTRADUTOR'},{av:'AV184EmpresaContaContabilEmpresaId',fld:'vEMPRESACONTACONTABILEMPRESAID'},{av:'A176EmpresaContaContabilEmpresaId',fld:'EMPRESACONTACONTABILEMPRESAID'},{av:'AV115ProdutoCContabilTradutor',fld:'vPRODUTOCCONTABILTRADUTOR'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A2983ListaServicoId',fld:'LISTASERVICOID'},{av:'A4317MargemMarkupCodigo',fld:'MARGEMMARKUPCODIGO'},{av:'AV116TipoSitICMS',fld:'vTIPOSITICMS'},{av:'AV118TipoSitPIS',fld:'vTIPOSITPIS'},{av:'A3566SituacaoTributariaCodigo',fld:'SITUACAOTRIBUTARIACODIGO'},{av:'AV119TipoSitCOFINS',fld:'vTIPOSITCOFINS'},{av:'A3564SituacaoTributariaTipo',fld:'SITUACAOTRIBUTARIATIPO'},{av:'A5941GrupoPrecoId',fld:'GRUPOPRECOID'},{av:'AV202GrupoPrecoEmpresaId',fld:'vGRUPOPRECOEMPRESAID'},{av:'A5940GrupoPrecoEmpresaId',fld:'GRUPOPRECOEMPRESAID'},{av:'A7634NBSCodigo',fld:'NBSCODIGO'},{av:'A711PrecoDescricao',fld:'PRECODESCRICAO'},{av:'A722PrecoTipo',fld:'PRECOTIPO'},{av:'A710PrecoId',fld:'PRECOID'},{av:'AV268PrecoEmpresaId',fld:'vPRECOEMPRESAID'},{av:'A709PrecoEmpresaId',fld:'PRECOEMPRESAID'},{av:'A3963SubgrupoProdutoDescricao',fld:'SUBGRUPOPRODUTODESCRICAO'},{av:'A3409SubgrupoProdutoId',fld:'SUBGRUPOPRODUTOID'},{av:'AV231SubgrupoProdutoEmpresaId',fld:'vSUBGRUPOPRODUTOEMPRESAID'},{av:'A3826SubgrupoProdutoEmpresaId',fld:'SUBGRUPOPRODUTOEMPRESAID'},{av:'A3539GrupoProdutoEmpresaId',fld:'GRUPOPRODUTOEMPRESAID'},{av:'AV232GrupoProdutoEmpresaId',fld:'vGRUPOPRODUTOEMPRESAID'},{av:'A3408GrupoProdutoId',fld:'GRUPOPRODUTOID'},{av:'A3536GrupoProdutoDescricao',fld:'GRUPOPRODUTODESCRICAO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'}],[{av:'AV279ProdutoSitTriDenSaiTipoICMSFil',fld:'vPRODUTOSITTRIDENSAITIPOICMSFIL'},{av:'AV280ProdutoSitTriForSaiTipoICMSFil',fld:'vPRODUTOSITTRIFORSAITIPOICMSFIL'},{av:'AV286SNErro',fld:'vSNERRO'},{av:'AV313Imagem5',fld:'vIMAGEM5'},{av:'AV312Imagem4',fld:'vIMAGEM4'},{av:'AV311Imagem3',fld:'vIMAGEM3'},{av:'AV310Imagem2',fld:'vIMAGEM2'},{av:'AV309Imagem1',fld:'vIMAGEM1'},{av:'AV308ProdutoObservacao',fld:'vPRODUTOOBSERVACAO'},{av:'AV303ProdutoCESTCodigo',fld:'vPRODUTOCESTCODIGO'},{av:'AV302NomeProduto',fld:'vNOMEPRODUTO'},{av:'AV292ProdutoIdFin',fld:'vPRODUTOIDFIN'},{av:'AV291ProdutoIdIni',fld:'vPRODUTOIDINI'},{av:'AV278ProdutoSitTriForSaiCodICMSFil',fld:'vPRODUTOSITTRIFORSAICODICMSFIL'},{av:'AV277ProdutoSitTriDenSaiCodICMSFil',fld:'vPRODUTOSITTRIDENSAICODICMSFIL'},{av:'AV276ProdutoSitTriForEntCodICMSFil',fld:'vPRODUTOSITTRIFORENTCODICMSFIL'},{av:'AV275ProdutoSitTriForEntTipoICMSFil',fld:'vPRODUTOSITTRIFORENTTIPOICMSFIL'},{av:'AV274ProdutoSitTriDenEntCodICMSFil',fld:'vPRODUTOSITTRIDENENTCODICMSFIL'},{av:'AV273ProdutoSitTriDenEntTipoICMSFil',fld:'vPRODUTOSITTRIDENENTTIPOICMSFIL'},{av:'AV285ProdutoPCAliquotaFil',fld:'vPRODUTOPCALIQUOTAFIL'},{av:'AV284ProdutoTipoTributacaoFil',fld:'vPRODUTOTIPOTRIBUTACAOFIL'},{av:'AV272SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO'},{av:'AV271SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO'},{av:'AV245NBSFinal',fld:'vNBSFINAL'},{av:'AV244NBSInicial',fld:'vNBSINICIAL'},{av:'AV226SubgrupoProdutoId',fld:'vSUBGRUPOPRODUTOID'},{av:'AV225GrupoProdutoId',fld:'vGRUPOPRODUTOID'},{av:'AV130TipoProduto',fld:'vTIPOPRODUTO'},{av:'AV131SituacaoProduto',fld:'vSITUACAOPRODUTO'},{av:'AV134EnviarBalanca',fld:'vENVIARBALANCA'},{av:'AV138DtUltimaSaida',fld:'vDTULTIMASAIDA'},{av:'AV137DtUltimaCompra',fld:'vDTULTIMACOMPRA'},{av:'AV139AliquotaZero',fld:'vALIQUOTAZERO'},{av:'AV143UnidadeVendaFin',fld:'vUNIDADEVENDAFIN'},{av:'AV142UnidadeVendaIni',fld:'vUNIDADEVENDAINI'},{av:'AV141UnidadeCompraFin',fld:'vUNIDADECOMPRAFIN'},{av:'AV140UnidadeCompraIni',fld:'vUNIDADECOMPRAINI'},{av:'AV136FabricanteFin',fld:'vFABRICANTEFIN'},{av:'AV135FabricanteIni',fld:'vFABRICANTEINI'},{av:'AV133NcmFinal',fld:'vNCMFINAL'},{av:'AV132NcmInicial',fld:'vNCMINICIAL'},{av:'AV129FamiliaFin',fld:'vFAMILIAFIN'},{av:'AV128FamiliaIni',fld:'vFAMILIAINI'},{av:'AV256MVAProdutoUf',fld:'vMVAPRODUTOUF'},{av:'AV257CodigoCST',fld:'vCODIGOCST'},{av:'AV198TipoCST',fld:'vTIPOCST'},{av:'AV243VlrNumerico2',fld:'vVLRNUMERICO2'},{av:'AV197VlrNumerico',fld:'vVLRNUMERICO'},{av:'AV264VlrString2',fld:'vVLRSTRING2'},{av:'AV196VlrString',fld:'vVLRSTRING'},{av:'AV33CampoAtualizar',fld:'vCAMPOATUALIZAR'},{av:'AV100ProdutoNovo',fld:'vPRODUTONOVO'},{av:'AV295ProdutoAntigoFin',fld:'vPRODUTOANTIGOFIN'},{av:'AV294ProdutoAntigoIni',fld:'vPRODUTOANTIGOINI'},{av:'AV172ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV19tpErro',fld:'vTPERRO'},{av:'AV352GXLvl784',fld:'vGXLVL784'},{av:'AV301SubgrupoProdutoDescAtu',fld:'vSUBGRUPOPRODUTODESCATU'},{av:'AV351GXLvl747',fld:'vGXLVL747'},{av:'AV267PrecoDescricao',fld:'vPRECODESCRICAO'},{av:'gx.fn.getCtrlProperty("TABIMPOSTOAPROX","Visible")',ctrl:'TABIMPOSTOAPROX',prop:'Visible'},{av:'AV350GXLvl681',fld:'vGXLVL681'},{av:'gx.fn.getCtrlProperty("TABNBS","Visible")',ctrl:'TABNBS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABNCM","Visible")',ctrl:'TABNCM',prop:'Visible'},{av:'AV349GXLvl667',fld:'vGXLVL667'},{av:'gx.fn.getCtrlProperty("TABGRUPOPRECO","Visible")',ctrl:'TABGRUPOPRECO',prop:'Visible'},{av:'AV348GXLvl655',fld:'vGXLVL655'},{av:'AV347GXLvl643',fld:'vGXLVL643'},{av:'AV346GXLvl632',fld:'vGXLVL632'},{av:'AV345GXLvl621',fld:'vGXLVL621'},{av:'AV344GXLvl608',fld:'vGXLVL608'},{av:'AV343GXLvl596',fld:'vGXLVL596'},{av:'AV342GXLvl585',fld:'vGXLVL585'},{av:'AV341GXLvl573',fld:'vGXLVL573'},{av:'AV340GXLvl561',fld:'vGXLVL561'},{av:'AV339GXLvl549',fld:'vGXLVL549'},{av:'AV338GXLvl539',fld:'vGXLVL539'},{av:'AV337GXLvl517',fld:'vGXLVL517'},{av:'AV336GXLvl506',fld:'vGXLVL506'},{av:'AV335GXLvl496',fld:'vGXLVL496'},{av:'AV334GXLvl486',fld:'vGXLVL486'},{av:'AV333GXLvl473',fld:'vGXLVL473'},{av:'AV65ProdutoCContabilId',fld:'vPRODUTOCCONTABILID'},{av:'AV218ProdutoCContabilNome',fld:'vPRODUTOCCONTABILNOME'},{av:'AV66ProdutoClassificacaoABC',fld:'vPRODUTOCLASSIFICACAOABC'},{av:'AV332GXLvl449',fld:'vGXLVL449'},{av:'AV331GXLvl430',fld:'vGXLVL430'},{av:'AV174CFOPTipoEntSai',fld:'vCFOPTIPOENTSAI'},{av:'AV330GXLvl411',fld:'vGXLVL411'},{av:'AV329GXLvl392',fld:'vGXLVL392'},{av:'AV328GXLvl373',fld:'vGXLVL373'},{av:'AV327GXLvl354',fld:'vGXLVL354'},{av:'AV326GXLvl335',fld:'vGXLVL335'},{av:'AV325GXLvl315',fld:'vGXLVL315'},{av:'AV324GXLvl295',fld:'vGXLVL295'},{av:'AV323GXLvl233',fld:'vGXLVL233'},{av:'AV322GXLvl216',fld:'vGXLVL216'},{av:'AV35ProdutoFatorConversao',fld:'vPRODUTOFATORCONVERSAO'},{av:'AV321GXLvl197',fld:'vGXLVL197'},{av:'AV320GXLvl182',fld:'vGXLVL182'},{av:'AV353GXLvl861',fld:'vGXLVL861'},{av:'AV234GrupoProdutoDescricao',fld:'vGRUPOPRODUTODESCRICAO'},{av:'AV354GXLvl873',fld:'vGXLVL873'},{av:'AV233SubgrupoProdutoDescricao',fld:'vSUBGRUPOPRODUTODESCRICAO'},{av:'AV355GXLvl889',fld:'vGXLVL889'},{av:'AV356GXLvl902',fld:'vGXLVL902'},{av:'AV357GXLvl914',fld:'vGXLVL914'},{av:'AV358GXLvl926',fld:'vGXLVL926'},{av:'AV296ProdutoNovoIni',fld:'vPRODUTONOVOINI'},{av:'AV297ProdutoNovoFin',fld:'vPRODUTONOVOFIN'}]];
   this.EvtParms["VTPOPERACAO.CLICK"] = [[{av:'AV94TpOperacao',fld:'vTPOPERACAO'},{av:'AV33CampoAtualizar',fld:'vCAMPOATUALIZAR'}],[{av:'gx.fn.getCtrlProperty("TABTROCA","Visible")',ctrl:'TABTROCA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABATUALIZACAO","Visible")',ctrl:'TABATUALIZACAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABSELECAO","Visible")',ctrl:'TABSELECAO',prop:'Visible'},{av:'AV33CampoAtualizar',fld:'vCAMPOATUALIZAR'},{av:'gx.fn.getCtrlProperty("TABUNIDADECOMPRA","Visible")',ctrl:'TABUNIDADECOMPRA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABUNIDADEVENDA","Visible")',ctrl:'TABUNIDADEVENDA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABFATOR","Visible")',ctrl:'TABFATOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABREFERENCIA","Visible")',ctrl:'TABREFERENCIA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCODIFICACAO","Visible")',ctrl:'TABCODIFICACAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCLASSIFICACAO","Visible")',ctrl:'TABCLASSIFICACAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABFAMILIA","Visible")',ctrl:'TABFAMILIA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABDIASVAL","Visible")',ctrl:'TABDIASVAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABSNSUSPENSO","Visible")',ctrl:'TABSNSUSPENSO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABFABRICANTE","Visible")',ctrl:'TABFABRICANTE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABTPTRIBUTACAO","Visible")',ctrl:'TABTPTRIBUTACAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPCALIQUOTA","Visible")',ctrl:'TABPCALIQUOTA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCASASDEC","Visible")',ctrl:'TABCASASDEC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABTIPO","Visible")',ctrl:'TABTIPO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPESBRUTO","Visible")',ctrl:'TABPESBRUTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPESLIQUIDO","Visible")',ctrl:'TABPESLIQUIDO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCATEGORIA","Visible")',ctrl:'TABCATEGORIA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABSNCONTESTOQUE","Visible")',ctrl:'TABSNCONTESTOQUE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABSNCALCCUSTO","Visible")',ctrl:'TABSNCALCCUSTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABTPVENDABALANCA","Visible")',ctrl:'TABTPVENDABALANCA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCFOENTDEN","Visible")',ctrl:'TABCFOENTDEN',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCFOENTFOR","Visible")',ctrl:'TABCFOENTFOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCFOENTINSCDEN","Visible")',ctrl:'TABCFOENTINSCDEN',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCFOENTINSCFOR","Visible")',ctrl:'TABCFOENTINSCFOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCFOSAIDEN","Visible")',ctrl:'TABCFOSAIDEN',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCFOSAIFOR","Visible")',ctrl:'TABCFOSAIFOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCFOSAIINSCDEN","Visible")',ctrl:'TABCFOSAIINSCDEN',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCFOSAIINSCFOR","Visible")',ctrl:'TABCFOSAIINSCFOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABGENERO","Visible")',ctrl:'TABGENERO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCLASSABC","Visible")',ctrl:'TABCLASSABC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABTPPRODUCAO","Visible")',ctrl:'TABTPPRODUCAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCCONTABIL","Visible")',ctrl:'TABCCONTABIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABESQUEMA","Visible")',ctrl:'TABESQUEMA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABNCM","Visible")',ctrl:'TABNCM',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLISTASER","Visible")',ctrl:'TABLISTASER',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABIPIENT","Visible")',ctrl:'TABIPIENT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPCIPIENT","Visible")',ctrl:'TABPCIPIENT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABIPISAI","Visible")',ctrl:'TABIPISAI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPCIPISAI","Visible")',ctrl:'TABPCIPISAI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPISENT","Visible")',ctrl:'TABPISENT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABMARKUP","Visible")',ctrl:'TABMARKUP',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPISSAI","Visible")',ctrl:'TABPISSAI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPISEXP","Visible")',ctrl:'TABPISEXP',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPISRED","Visible")',ctrl:'TABPISRED',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCOFINSENT","Visible")',ctrl:'TABCOFINSENT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCOFINSSAI","Visible")',ctrl:'TABCOFINSSAI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCOFINSEXP","Visible")',ctrl:'TABCOFINSEXP',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCOFINSRED","Visible")',ctrl:'TABCOFINSRED',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABICMSENTDEN","Visible")',ctrl:'TABICMSENTDEN',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABICMSSAIDEN","Visible")',ctrl:'TABICMSSAIDEN',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABICMSENTFOR","Visible")',ctrl:'TABICMSENTFOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABICMSSAIFOR","Visible")',ctrl:'TABICMSSAIFOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCSTPISENT","Visible")',ctrl:'TABCSTPISENT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCSTPISSAI","Visible")',ctrl:'TABCSTPISSAI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCSTPISEXP","Visible")',ctrl:'TABCSTPISEXP',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCSTCOFINSENT","Visible")',ctrl:'TABCSTCOFINSENT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCSTCOFINSSAI","Visible")',ctrl:'TABCSTCOFINSSAI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCSTCOFINSEXP","Visible")',ctrl:'TABCSTCOFINSEXP',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABGRUPOPRECO","Visible")',ctrl:'TABGRUPOPRECO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABNBS","Visible")',ctrl:'TABNBS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABIMPOSTOAPROX","Visible")',ctrl:'TABIMPOSTOAPROX',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPERCMARGEMLUCRO","Visible")',ctrl:'TABPERCMARGEMLUCRO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABICMSST","Visible")',ctrl:'TABICMSST',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABDIFICMS","Visible")',ctrl:'TABDIFICMS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPERCENTUALMVA","Visible")',ctrl:'TABPERCENTUALMVA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCODPRODUTO","Visible")',ctrl:'TABCODPRODUTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCLASSPRODUTO","Visible")',ctrl:'TABCLASSPRODUTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABDESCMAXIMO","Visible")',ctrl:'TABDESCMAXIMO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPCCOMISSAO","Visible")',ctrl:'TABPCCOMISSAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABSUBGRUPO","Visible")',ctrl:'TABSUBGRUPO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCEST","Visible")',ctrl:'TABCEST',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABOBSERVACAO","Visible")',ctrl:'TABOBSERVACAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABIMAGEM","Visible")',ctrl:'TABIMAGEM',prop:'Visible'}]];
   this.EvtParms["VCAMPOATUALIZAR.CLICK"] = [[{av:'AV94TpOperacao',fld:'vTPOPERACAO'},{av:'AV33CampoAtualizar',fld:'vCAMPOATUALIZAR'}],[{av:'gx.fn.getCtrlProperty("TABTROCA","Visible")',ctrl:'TABTROCA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABATUALIZACAO","Visible")',ctrl:'TABATUALIZACAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABSELECAO","Visible")',ctrl:'TABSELECAO',prop:'Visible'},{av:'AV33CampoAtualizar',fld:'vCAMPOATUALIZAR'},{av:'gx.fn.getCtrlProperty("TABUNIDADECOMPRA","Visible")',ctrl:'TABUNIDADECOMPRA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABUNIDADEVENDA","Visible")',ctrl:'TABUNIDADEVENDA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABFATOR","Visible")',ctrl:'TABFATOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABREFERENCIA","Visible")',ctrl:'TABREFERENCIA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCODIFICACAO","Visible")',ctrl:'TABCODIFICACAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCLASSIFICACAO","Visible")',ctrl:'TABCLASSIFICACAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABFAMILIA","Visible")',ctrl:'TABFAMILIA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABDIASVAL","Visible")',ctrl:'TABDIASVAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABSNSUSPENSO","Visible")',ctrl:'TABSNSUSPENSO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABFABRICANTE","Visible")',ctrl:'TABFABRICANTE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABTPTRIBUTACAO","Visible")',ctrl:'TABTPTRIBUTACAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPCALIQUOTA","Visible")',ctrl:'TABPCALIQUOTA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCASASDEC","Visible")',ctrl:'TABCASASDEC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABTIPO","Visible")',ctrl:'TABTIPO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPESBRUTO","Visible")',ctrl:'TABPESBRUTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPESLIQUIDO","Visible")',ctrl:'TABPESLIQUIDO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCATEGORIA","Visible")',ctrl:'TABCATEGORIA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABSNCONTESTOQUE","Visible")',ctrl:'TABSNCONTESTOQUE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABSNCALCCUSTO","Visible")',ctrl:'TABSNCALCCUSTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABTPVENDABALANCA","Visible")',ctrl:'TABTPVENDABALANCA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCFOENTDEN","Visible")',ctrl:'TABCFOENTDEN',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCFOENTFOR","Visible")',ctrl:'TABCFOENTFOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCFOENTINSCDEN","Visible")',ctrl:'TABCFOENTINSCDEN',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCFOENTINSCFOR","Visible")',ctrl:'TABCFOENTINSCFOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCFOSAIDEN","Visible")',ctrl:'TABCFOSAIDEN',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCFOSAIFOR","Visible")',ctrl:'TABCFOSAIFOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCFOSAIINSCDEN","Visible")',ctrl:'TABCFOSAIINSCDEN',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCFOSAIINSCFOR","Visible")',ctrl:'TABCFOSAIINSCFOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABGENERO","Visible")',ctrl:'TABGENERO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCLASSABC","Visible")',ctrl:'TABCLASSABC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABTPPRODUCAO","Visible")',ctrl:'TABTPPRODUCAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCCONTABIL","Visible")',ctrl:'TABCCONTABIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABESQUEMA","Visible")',ctrl:'TABESQUEMA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABNCM","Visible")',ctrl:'TABNCM',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLISTASER","Visible")',ctrl:'TABLISTASER',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABIPIENT","Visible")',ctrl:'TABIPIENT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPCIPIENT","Visible")',ctrl:'TABPCIPIENT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABIPISAI","Visible")',ctrl:'TABIPISAI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPCIPISAI","Visible")',ctrl:'TABPCIPISAI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPISENT","Visible")',ctrl:'TABPISENT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABMARKUP","Visible")',ctrl:'TABMARKUP',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPISSAI","Visible")',ctrl:'TABPISSAI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPISEXP","Visible")',ctrl:'TABPISEXP',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPISRED","Visible")',ctrl:'TABPISRED',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCOFINSENT","Visible")',ctrl:'TABCOFINSENT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCOFINSSAI","Visible")',ctrl:'TABCOFINSSAI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCOFINSEXP","Visible")',ctrl:'TABCOFINSEXP',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCOFINSRED","Visible")',ctrl:'TABCOFINSRED',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABICMSENTDEN","Visible")',ctrl:'TABICMSENTDEN',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABICMSSAIDEN","Visible")',ctrl:'TABICMSSAIDEN',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABICMSENTFOR","Visible")',ctrl:'TABICMSENTFOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABICMSSAIFOR","Visible")',ctrl:'TABICMSSAIFOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCSTPISENT","Visible")',ctrl:'TABCSTPISENT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCSTPISSAI","Visible")',ctrl:'TABCSTPISSAI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCSTPISEXP","Visible")',ctrl:'TABCSTPISEXP',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCSTCOFINSENT","Visible")',ctrl:'TABCSTCOFINSENT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCSTCOFINSSAI","Visible")',ctrl:'TABCSTCOFINSSAI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCSTCOFINSEXP","Visible")',ctrl:'TABCSTCOFINSEXP',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABGRUPOPRECO","Visible")',ctrl:'TABGRUPOPRECO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABNBS","Visible")',ctrl:'TABNBS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABIMPOSTOAPROX","Visible")',ctrl:'TABIMPOSTOAPROX',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPERCMARGEMLUCRO","Visible")',ctrl:'TABPERCMARGEMLUCRO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABICMSST","Visible")',ctrl:'TABICMSST',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABDIFICMS","Visible")',ctrl:'TABDIFICMS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPERCENTUALMVA","Visible")',ctrl:'TABPERCENTUALMVA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCODPRODUTO","Visible")',ctrl:'TABCODPRODUTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCLASSPRODUTO","Visible")',ctrl:'TABCLASSPRODUTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABDESCMAXIMO","Visible")',ctrl:'TABDESCMAXIMO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPCCOMISSAO","Visible")',ctrl:'TABPCCOMISSAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABSUBGRUPO","Visible")',ctrl:'TABSUBGRUPO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCEST","Visible")',ctrl:'TABCEST',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABOBSERVACAO","Visible")',ctrl:'TABOBSERVACAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABIMAGEM","Visible")',ctrl:'TABIMAGEM',prop:'Visible'}]];
   this.EvtParms["VCLASSIFICACAOESTID.CLICK"] = [[],[]];
   this.EvtParms["VCODIFICACAOESTID.CLICK"] = [[],[]];
   this.EvtParms["'PROMPTPRODUTOINI'"] = [[{av:'Gx_date',fld:'vTODAY'}],[{av:'AV291ProdutoIdIni',fld:'vPRODUTOIDINI'}]];
   this.EvtParms["'PROMPTPRODUTOFIN'"] = [[{av:'Gx_date',fld:'vTODAY'}],[{av:'AV292ProdutoIdFin',fld:'vPRODUTOIDFIN'}]];
   this.EvtParms["VPRODUTOCESTCODIGO.ISVALID"] = [[{av:'AV307CESTEmpresaId',fld:'vCESTEMPRESAID'},{av:'AV303ProdutoCESTCodigo',fld:'vPRODUTOCESTCODIGO'}],[{av:'AV304ProdutoCESTDescricao',fld:'vPRODUTOCESTDESCRICAO'}]];
   this.EvtParms["'DIALOG1'"] = [[],[{av:'AV309Imagem1',fld:'vIMAGEM1'}]];
   this.EvtParms["'DIALOG2'"] = [[],[{av:'AV310Imagem2',fld:'vIMAGEM2'}]];
   this.EvtParms["'DIALOG3'"] = [[],[{av:'AV311Imagem3',fld:'vIMAGEM3'}]];
   this.EvtParms["'DIALOG4'"] = [[],[{av:'AV312Imagem4',fld:'vIMAGEM4'}]];
   this.EvtParms["'DIALOG5'"] = [[],[{av:'AV313Imagem5',fld:'vIMAGEM5'}]];
   this.setPrompt("PROMPTPRODUTOANTINI", [29,789,801,792,790,791,787]);
   this.setPrompt("PROMPTPRODUTOANTFIN", [34,789,801,792,790,791,787]);
   this.setPrompt("IMGCCONT", [248,247]);
   this.setPrompt("PROMPT_PRODUTOUNIDADECOMPRAID", [55]);
   this.setPrompt("PROMPT_PRODUTOUNIDADEVENDAID", [62]);
   this.setPrompt("PROMPT_PRODUTOFAMILIAID", [93]);
   this.setPrompt("PROMPT_PRODUTOFABRICANTEID", [112]);
   this.setPrompt("PROMPT_PRODUTOCFOENTDENESTADOCOD", [180]);
   this.setPrompt("PROMPT_PRODUTOCFOENTFORAESTADOCOD", [186]);
   this.setPrompt("PROMPT_PRODUTOCFOENTINSCDENESTADOCOD", [192]);
   this.setPrompt("PROMPT_PRODUTOCFOENTINSCFORESTADOCOD", [198]);
   this.setPrompt("PROMPT_PRODUTOCFOSAIDENESTADOCOD", [204]);
   this.setPrompt("PROMPT_PRODUTOCFOSAIFORAESTADOCOD", [210]);
   this.setPrompt("PROMPT_PRODUTOCFOSAIINSCDENESTADOCOD", [216]);
   this.setPrompt("PROMPT_PRODUTOCFOSAIINSCFORESTADOCOD", [222]);
   this.setPrompt("PROMPT_GENEROID", [228]);
   this.setPrompt("PROMPTESQUEMA", [256]);
   this.setPrompt("IMGPROMPTNCM", [267]);
   this.setPrompt("PROMPT1", [281,816]);
   this.setPrompt("PROMPT_LISTASERVICOID", [274]);
   this.setPrompt("PROMPT2", [294,822]);
   this.setPrompt("PROMPT9", [362,361]);
   this.setPrompt("PROMPT_PRODUTOMARGEMMARKUPCODIGO", [313]);
   this.setPrompt("PROMPT11", [370,369]);
   this.setPrompt("PROMPT10", [378,377]);
   this.setPrompt("PROMPT12", [386,385]);
   this.setPrompt("PROMPT3", [393,817]);
   this.setPrompt("PROMPT4", [400,819]);
   this.setPrompt("PROMPT5", [407,818]);
   this.setPrompt("PROMPT6", [414,820]);
   this.setPrompt("PROMPT7", [421,821]);
   this.setPrompt("PROMPT8", [428,823]);
   this.setPrompt("IMGPROMPTNBS", [515]);
   this.setPrompt("PROMPT_PRECOID", [503]);
   this.setPrompt("IMGCEST", [827,537]);
   this.setPrompt("PROMPT_SUBGRUPOPRODUTOIDATU", [530]);
   this.setPrompt("PROMPT13", [732,727]);
   this.setPrompt("PROMPT_FAMILIAINI", [569]);
   this.setPrompt("PROMPT_FAMILIAFIN", [573]);
   this.setPrompt("PROMPT_NCMINICIAL", [581]);
   this.setPrompt("PROMPT_NCMFINAL", [585]);
   this.setPrompt("PROMPT_NBSINICIAL", [593]);
   this.setPrompt("PROMPT_NBSFINAL", [597]);
   this.setPrompt("PROMPT_FABRICANTEINI", [605]);
   this.setPrompt("PROMPT_FABRICANTEFIN", [609]);
   this.setPrompt("PROMPT_UNIDADECOMPRAINI", [617]);
   this.setPrompt("PROMPT_UNIDADECOMPRAFIN", [621]);
   this.setPrompt("PROMPT_UNIDADEVENDAINI", [629]);
   this.setPrompt("PROMPT_UNIDADEVENDAFIN", [633]);
   this.setPrompt("PROMPT_GRUPOPRODUTOID", [638]);
   this.setPrompt("PROMPT_SUBGRUPOPRODUTOID", [644]);
   this.setPrompt("PROMPT14", [743,738]);
   this.setPrompt("PROMPT15", [759,753]);
   this.setPrompt("PROMPT16", [770,765]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hatualizacaocoletivaproduto());
