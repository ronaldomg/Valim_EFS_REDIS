/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:13:23.31
*/
gx.evt.autoSkip = false;
gx.define('tcategoria', false, function () {
   this.ServerClass =  "tcategoria" ;
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
      this.AV20CategoriaId=gx.fn.getIntegerValue("vCATEGORIAID",'.') ;
      this.AV21CategoriaEmpresaId=gx.fn.getControlValue("vCATEGORIAEMPRESAID") ;
      this.A2621CategoriaEmpresaId=gx.fn.getControlValue("CATEGORIAEMPRESAID") ;
      this.A2602TipoCategoriaEmpresaId=gx.fn.getControlValue("TIPOCATEGORIAEMPRESAID") ;
      this.A2606CategoriaCCustoEmpId=gx.fn.getControlValue("CATEGORIACCUSTOEMPID") ;
      this.A2609CategoriaNaturezaEmpId=gx.fn.getControlValue("CATEGORIANATUREZAEMPID") ;
      this.A2612CategoriaCContabilEmpId=gx.fn.getControlValue("CATEGORIACCONTABILEMPID") ;
      this.AV34ClassificacaoIdParm=gx.fn.getControlValue("vCLASSIFICACAOIDPARM") ;
      this.AV42SnExiste=gx.fn.getControlValue("vSNEXISTE") ;
      this.AV40SnEmUso=gx.fn.getControlValue("vSNEMUSO") ;
      this.AV60CategoriaLimiteConvite=gx.fn.getIntegerValue("vCATEGORIALIMITECONVITE",'.') ;
      this.AV43CobrarConvSocio=gx.fn.getControlValue("vCOBRARCONVSOCIO") ;
      this.AV61CategoriaTipoCobranca=gx.fn.getControlValue("vCATEGORIATIPOCOBRANCA") ;
      this.AV32SnAnaCCus=gx.fn.getControlValue("vSNANACCUS") ;
      this.AV31SnAnaNat=gx.fn.getControlValue("vSNANANAT") ;
      this.AV45IntFinCbl=gx.fn.getControlValue("vINTFINCBL") ;
      this.AV30SnAnaCCon=gx.fn.getControlValue("vSNANACCON") ;
      this.AV10ret=gx.fn.getIntegerValue("vRET",'.') ;
      this.AV62CategoriaSnVlrDependente=gx.fn.getControlValue("vCATEGORIASNVLRDEPENDENTE") ;
      this.AV26SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A2623TipoCategoriaDescricao=gx.fn.getControlValue("TIPOCATEGORIADESCRICAO") ;
      this.A2608CategoriaCCustoDescricao=gx.fn.getControlValue("CATEGORIACCUSTODESCRICAO") ;
      this.A2611CategoriaNaturezaDesc=gx.fn.getControlValue("CATEGORIANATUREZADESC") ;
      this.A2614CategoriaCContabilDesc=gx.fn.getControlValue("CATEGORIACCONTABILDESC") ;
      this.A2615CategoriaCContabilTradutor=gx.fn.getIntegerValue("CATEGORIACCONTABILTRADUTOR",'.') ;
      this.AV71Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV70Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Categoriaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CATEGORIAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Categoriasncaddependente=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CATEGORIASNCADDEPENDENTE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Categoriadescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CATEGORIADESCRICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Categoriasnvlrdependente=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Categoriasnvlrdependente",["gx.O.A3129CategoriaSnVlrDependente", "gx.O.AV62CategoriaSnVlrDependente"],["AV62CategoriaSnVlrDependente"]);
      return true;
   }
   this.Valid_Categoriadescabreviada=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CATEGORIADESCABREVIADA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Categoriavlrcotaavista=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CATEGORIAVLRCOTAAVISTA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Categoriatipocobranca=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Categoriatipocobranca",["gx.O.A2597CategoriaTipoCobranca", "gx.O.AV61CategoriaTipoCobranca"],["AV61CategoriaTipoCobranca"]);
      return true;
   }
   this.Valid_Categoriavlrcotaaprazo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CATEGORIAVLRCOTAAPRAZO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Categoriaqtdelimitedepend=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CATEGORIAQTDELIMITEDEPEND");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Categorialimiteconvite=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Categorialimiteconvite",["gx.O.A2598CategoriaLimiteConvite", "gx.O.AV60CategoriaLimiteConvite"],["AV60CategoriaLimiteConvite"]);
      return true;
   }
   this.Valid_Categoriaprazolimconvite=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CATEGORIAPRAZOLIMCONVITE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Categoriaqtdepessoasconvite=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CATEGORIAQTDEPESSOASCONVITE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Categoriadiasconsecutivosconv=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CATEGORIADIASCONSECUTIVOSCONV");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipocategoriaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipocategoriaid",["gx.O.AV22TipoCategoriaEmpresaId", "gx.O.A2603TipoCategoriaId", "gx.O.AV69TipoCategoriaDescricao"],["AV69TipoCategoriaDescricao"]);
      return true;
   }
   this.Valid_Categoriadialimgerarmensmes=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CATEGORIADIALIMGERARMENSMES");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Categoriaccustoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Categoriaccustoid",["gx.O.AV23CategoriaCCustoEmpId", "gx.O.A2607CategoriaCCustoId", "gx.O.AV64CCustoDescricao", "gx.O.AV32SnAnaCCus"],["AV64CCustoDescricao", "AV32SnAnaCCus"]);
      return true;
   }
   this.Valid_Categorianaturezaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Categorianaturezaid",["gx.O.AV24CategoriaNaturezaEmpId", "gx.O.A2610CategoriaNaturezaId", "gx.O.AV67NaturezaDescricao", "gx.O.AV31SnAnaNat"],["AV67NaturezaDescricao", "AV31SnAnaNat"]);
      return true;
   }
   this.Valid_Categoriaccontabilid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Categoriaccontabilid",["gx.O.AV25CategoriaCContabilEmpId", "gx.O.A2613CategoriaCContabilId", "gx.O.AV34ClassificacaoIdParm", "gx.O.AV42SnExiste", "gx.O.AV40SnEmUso", "gx.O.A2622CategoriaId", "gx.O.A2595CategoriaDescricao", "gx.O.A2597CategoriaTipoCobranca", "gx.O.A2599CategoriaPrazoLimConvite", "gx.O.AV60CategoriaLimiteConvite", "gx.O.A2600CategoriaQtdePessoasConvite", "gx.O.AV43CobrarConvSocio", "gx.O.A2601CategoriaDiasConsecutivosConv", "gx.O.A2603TipoCategoriaId", "gx.O.A2607CategoriaCCustoId", "gx.O.AV61CategoriaTipoCobranca", "gx.O.AV32SnAnaCCus", "gx.O.A2610CategoriaNaturezaId", "gx.O.AV31SnAnaNat", "gx.O.AV45IntFinCbl", "gx.O.AV30SnAnaCCon", "gx.O.AV68CContabilDescricao", "gx.O.AV10ret"],["AV68CContabilDescricao", "AV10ret", "AV30SnAnaCCon"]);
      return true;
   }
   this.Validv_Tipocategoriaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOCATEGORIAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Categoriaccustoempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCATEGORIACCUSTOEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Categoriaccontabilempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCATEGORIACCONTABILEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Categorianaturezaempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCATEGORIANATUREZAEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Categoriavalordata=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(105) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CATEGORIAVALORDATA", gx.fn.currentGridRowImpl(105));
         this.AnyError  = 0;
         this.sMode273 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(273,105)  ;
         this.standaloneModal4Q273( );
         this.standaloneNotModal4Q273( );
         if ( gx.fn.gridDuplicateKey(107) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Valores da Categoria", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode273  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Categoriavalormensalidade=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(105) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CATEGORIAVALORMENSALIDADE", gx.fn.currentGridRowImpl(105));
         this.AnyError  = 0;
         this.sMode273 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(273,105)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode273  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Categoriavalordesconto=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(105) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CATEGORIAVALORDESCONTO", gx.fn.currentGridRowImpl(105));
         this.AnyError  = 0;
         this.sMode273 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(273,105)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode273  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Categoriavalordesconto2=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(105) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CATEGORIAVALORDESCONTO2", gx.fn.currentGridRowImpl(105));
         this.AnyError  = 0;
         this.sMode273 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(273,105)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode273  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Categoriavalordesconto3=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(105) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CATEGORIAVALORDESCONTO3", gx.fn.currentGridRowImpl(105));
         this.AnyError  = 0;
         this.sMode273 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(273,105)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode273  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.standaloneModal4Q273=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("CATEGORIAVALORDATA","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("CATEGORIAVALORDATA","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal4Q273=function()
   {
      try {
         gx.fn.setCtrlProperty("CATEGORIAVALORUSUARIOALT","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("CATEGORIAVALORDATAHORAALT","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("CATEGORIAUSUARIOALT","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("CATEGORIADATAHORAALT","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("CATEGORIAUSUARIOALT","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("CATEGORIADATAHORAALT","Enabled", 0 );
      }
      catch(e){}
      try {
         if ( (""==this.AV34ClassificacaoIdParm) && gx.ajax.aggSelInteger("vRET","49",["gx.O.AV34ClassificacaoIdParm","gx.O.AV42SnExiste","gx.O.AV40SnEmUso","gx.O.A2622CategoriaId","gx.O.A2595CategoriaDescricao","gx.O.A2597CategoriaTipoCobranca","gx.O.A2599CategoriaPrazoLimConvite","gx.O.AV60CategoriaLimiteConvite","gx.O.A2600CategoriaQtdePessoasConvite","gx.O.AV43CobrarConvSocio","gx.O.A2601CategoriaDiasConsecutivosConv","gx.O.A2603TipoCategoriaId","gx.O.A2607CategoriaCCustoId","gx.O.AV61CategoriaTipoCobranca","gx.O.AV32SnAnaCCus","gx.O.A2610CategoriaNaturezaId","gx.O.AV31SnAnaNat","gx.O.A2613CategoriaCContabilId","gx.O.AV45IntFinCbl","gx.O.AV30SnAnaCCon"]) )
         {
            this.AV10ret = gx.num.trunc( 1 ,0) ;
         }
         else
         {
            if ( this.AV42SnExiste == "N" && gx.ajax.aggSelInteger("vRET","49",["gx.O.AV34ClassificacaoIdParm","gx.O.AV42SnExiste","gx.O.AV40SnEmUso","gx.O.A2622CategoriaId","gx.O.A2595CategoriaDescricao","gx.O.A2597CategoriaTipoCobranca","gx.O.A2599CategoriaPrazoLimConvite","gx.O.AV60CategoriaLimiteConvite","gx.O.A2600CategoriaQtdePessoasConvite","gx.O.AV43CobrarConvSocio","gx.O.A2601CategoriaDiasConsecutivosConv","gx.O.A2603TipoCategoriaId","gx.O.A2607CategoriaCCustoId","gx.O.AV61CategoriaTipoCobranca","gx.O.AV32SnAnaCCus","gx.O.A2610CategoriaNaturezaId","gx.O.AV31SnAnaNat","gx.O.A2613CategoriaCContabilId","gx.O.AV45IntFinCbl","gx.O.AV30SnAnaCCon"]) )
            {
               this.AV10ret = gx.num.trunc( 1 ,0) ;
            }
            else
            {
               if ( this.AV40SnEmUso == "S" && gx.ajax.aggSelInteger("vRET","49",["gx.O.AV34ClassificacaoIdParm","gx.O.AV42SnExiste","gx.O.AV40SnEmUso","gx.O.A2622CategoriaId","gx.O.A2595CategoriaDescricao","gx.O.A2597CategoriaTipoCobranca","gx.O.A2599CategoriaPrazoLimConvite","gx.O.AV60CategoriaLimiteConvite","gx.O.A2600CategoriaQtdePessoasConvite","gx.O.AV43CobrarConvSocio","gx.O.A2601CategoriaDiasConsecutivosConv","gx.O.A2603TipoCategoriaId","gx.O.A2607CategoriaCCustoId","gx.O.AV61CategoriaTipoCobranca","gx.O.AV32SnAnaCCus","gx.O.A2610CategoriaNaturezaId","gx.O.AV31SnAnaNat","gx.O.A2613CategoriaCContabilId","gx.O.AV45IntFinCbl","gx.O.AV30SnAnaCCon"]) )
               {
                  this.AV10ret = gx.num.trunc( 1 ,0) ;
               }
               else
               {
                  if ( (0==this.A2622CategoriaId) && gx.ajax.aggSelInteger("vRET","49",["gx.O.AV34ClassificacaoIdParm","gx.O.AV42SnExiste","gx.O.AV40SnEmUso","gx.O.A2622CategoriaId","gx.O.A2595CategoriaDescricao","gx.O.A2597CategoriaTipoCobranca","gx.O.A2599CategoriaPrazoLimConvite","gx.O.AV60CategoriaLimiteConvite","gx.O.A2600CategoriaQtdePessoasConvite","gx.O.AV43CobrarConvSocio","gx.O.A2601CategoriaDiasConsecutivosConv","gx.O.A2603TipoCategoriaId","gx.O.A2607CategoriaCCustoId","gx.O.AV61CategoriaTipoCobranca","gx.O.AV32SnAnaCCus","gx.O.A2610CategoriaNaturezaId","gx.O.AV31SnAnaNat","gx.O.A2613CategoriaCContabilId","gx.O.AV45IntFinCbl","gx.O.AV30SnAnaCCon"]) )
                  {
                     this.AV10ret = gx.num.trunc( 1 ,0) ;
                  }
                  else
                  {
                     if ( (""==this.A2595CategoriaDescricao) && gx.ajax.aggSelInteger("vRET","49",["gx.O.AV34ClassificacaoIdParm","gx.O.AV42SnExiste","gx.O.AV40SnEmUso","gx.O.A2622CategoriaId","gx.O.A2595CategoriaDescricao","gx.O.A2597CategoriaTipoCobranca","gx.O.A2599CategoriaPrazoLimConvite","gx.O.AV60CategoriaLimiteConvite","gx.O.A2600CategoriaQtdePessoasConvite","gx.O.AV43CobrarConvSocio","gx.O.A2601CategoriaDiasConsecutivosConv","gx.O.A2603TipoCategoriaId","gx.O.A2607CategoriaCCustoId","gx.O.AV61CategoriaTipoCobranca","gx.O.AV32SnAnaCCus","gx.O.A2610CategoriaNaturezaId","gx.O.AV31SnAnaNat","gx.O.A2613CategoriaCContabilId","gx.O.AV45IntFinCbl","gx.O.AV30SnAnaCCon"]) )
                     {
                        this.AV10ret = gx.num.trunc( 1 ,0) ;
                     }
                     else
                     {
                        if ( (""==this.A2597CategoriaTipoCobranca) && gx.ajax.aggSelInteger("vRET","49",["gx.O.AV34ClassificacaoIdParm","gx.O.AV42SnExiste","gx.O.AV40SnEmUso","gx.O.A2622CategoriaId","gx.O.A2595CategoriaDescricao","gx.O.A2597CategoriaTipoCobranca","gx.O.A2599CategoriaPrazoLimConvite","gx.O.AV60CategoriaLimiteConvite","gx.O.A2600CategoriaQtdePessoasConvite","gx.O.AV43CobrarConvSocio","gx.O.A2601CategoriaDiasConsecutivosConv","gx.O.A2603TipoCategoriaId","gx.O.A2607CategoriaCCustoId","gx.O.AV61CategoriaTipoCobranca","gx.O.AV32SnAnaCCus","gx.O.A2610CategoriaNaturezaId","gx.O.AV31SnAnaNat","gx.O.A2613CategoriaCContabilId","gx.O.AV45IntFinCbl","gx.O.AV30SnAnaCCon"]) )
                        {
                           this.AV10ret = gx.num.trunc( 1 ,0) ;
                        }
                        else
                        {
                           if ( (0==this.A2599CategoriaPrazoLimConvite) && ! (0==this.AV60CategoriaLimiteConvite) && gx.ajax.aggSelInteger("vRET","49",["gx.O.AV34ClassificacaoIdParm","gx.O.AV42SnExiste","gx.O.AV40SnEmUso","gx.O.A2622CategoriaId","gx.O.A2595CategoriaDescricao","gx.O.A2597CategoriaTipoCobranca","gx.O.A2599CategoriaPrazoLimConvite","gx.O.AV60CategoriaLimiteConvite","gx.O.A2600CategoriaQtdePessoasConvite","gx.O.AV43CobrarConvSocio","gx.O.A2601CategoriaDiasConsecutivosConv","gx.O.A2603TipoCategoriaId","gx.O.A2607CategoriaCCustoId","gx.O.AV61CategoriaTipoCobranca","gx.O.AV32SnAnaCCus","gx.O.A2610CategoriaNaturezaId","gx.O.AV31SnAnaNat","gx.O.A2613CategoriaCContabilId","gx.O.AV45IntFinCbl","gx.O.AV30SnAnaCCon"]) )
                           {
                              this.AV10ret = gx.num.trunc( 1 ,0) ;
                           }
                           else
                           {
                              if ( ! (0==this.A2599CategoriaPrazoLimConvite) && (0==this.AV60CategoriaLimiteConvite) && gx.ajax.aggSelInteger("vRET","49",["gx.O.AV34ClassificacaoIdParm","gx.O.AV42SnExiste","gx.O.AV40SnEmUso","gx.O.A2622CategoriaId","gx.O.A2595CategoriaDescricao","gx.O.A2597CategoriaTipoCobranca","gx.O.A2599CategoriaPrazoLimConvite","gx.O.AV60CategoriaLimiteConvite","gx.O.A2600CategoriaQtdePessoasConvite","gx.O.AV43CobrarConvSocio","gx.O.A2601CategoriaDiasConsecutivosConv","gx.O.A2603TipoCategoriaId","gx.O.A2607CategoriaCCustoId","gx.O.AV61CategoriaTipoCobranca","gx.O.AV32SnAnaCCus","gx.O.A2610CategoriaNaturezaId","gx.O.AV31SnAnaNat","gx.O.A2613CategoriaCContabilId","gx.O.AV45IntFinCbl","gx.O.AV30SnAnaCCon"]) )
                              {
                                 this.AV10ret = gx.num.trunc( 1 ,0) ;
                              }
                              else
                              {
                                 if ( (0==this.A2600CategoriaQtdePessoasConvite) && ( this.AV43CobrarConvSocio == "S" || ! (0==this.AV60CategoriaLimiteConvite) ) && gx.ajax.aggSelInteger("vRET","49",["gx.O.AV34ClassificacaoIdParm","gx.O.AV42SnExiste","gx.O.AV40SnEmUso","gx.O.A2622CategoriaId","gx.O.A2595CategoriaDescricao","gx.O.A2597CategoriaTipoCobranca","gx.O.A2599CategoriaPrazoLimConvite","gx.O.AV60CategoriaLimiteConvite","gx.O.A2600CategoriaQtdePessoasConvite","gx.O.AV43CobrarConvSocio","gx.O.A2601CategoriaDiasConsecutivosConv","gx.O.A2603TipoCategoriaId","gx.O.A2607CategoriaCCustoId","gx.O.AV61CategoriaTipoCobranca","gx.O.AV32SnAnaCCus","gx.O.A2610CategoriaNaturezaId","gx.O.AV31SnAnaNat","gx.O.A2613CategoriaCContabilId","gx.O.AV45IntFinCbl","gx.O.AV30SnAnaCCon"]) )
                                 {
                                    this.AV10ret = gx.num.trunc( 1 ,0) ;
                                 }
                                 else
                                 {
                                    if ( ! (0==this.A2600CategoriaQtdePessoasConvite) && (0==this.AV60CategoriaLimiteConvite) && this.AV43CobrarConvSocio == "N" && gx.ajax.aggSelInteger("vRET","49",["gx.O.AV34ClassificacaoIdParm","gx.O.AV42SnExiste","gx.O.AV40SnEmUso","gx.O.A2622CategoriaId","gx.O.A2595CategoriaDescricao","gx.O.A2597CategoriaTipoCobranca","gx.O.A2599CategoriaPrazoLimConvite","gx.O.AV60CategoriaLimiteConvite","gx.O.A2600CategoriaQtdePessoasConvite","gx.O.AV43CobrarConvSocio","gx.O.A2601CategoriaDiasConsecutivosConv","gx.O.A2603TipoCategoriaId","gx.O.A2607CategoriaCCustoId","gx.O.AV61CategoriaTipoCobranca","gx.O.AV32SnAnaCCus","gx.O.A2610CategoriaNaturezaId","gx.O.AV31SnAnaNat","gx.O.A2613CategoriaCContabilId","gx.O.AV45IntFinCbl","gx.O.AV30SnAnaCCon"]) )
                                    {
                                       this.AV10ret = gx.num.trunc( 1 ,0) ;
                                    }
                                    else
                                    {
                                       if ( (0==this.A2601CategoriaDiasConsecutivosConv) && ! (0==this.AV60CategoriaLimiteConvite) && gx.ajax.aggSelInteger("vRET","49",["gx.O.AV34ClassificacaoIdParm","gx.O.AV42SnExiste","gx.O.AV40SnEmUso","gx.O.A2622CategoriaId","gx.O.A2595CategoriaDescricao","gx.O.A2597CategoriaTipoCobranca","gx.O.A2599CategoriaPrazoLimConvite","gx.O.AV60CategoriaLimiteConvite","gx.O.A2600CategoriaQtdePessoasConvite","gx.O.AV43CobrarConvSocio","gx.O.A2601CategoriaDiasConsecutivosConv","gx.O.A2603TipoCategoriaId","gx.O.A2607CategoriaCCustoId","gx.O.AV61CategoriaTipoCobranca","gx.O.AV32SnAnaCCus","gx.O.A2610CategoriaNaturezaId","gx.O.AV31SnAnaNat","gx.O.A2613CategoriaCContabilId","gx.O.AV45IntFinCbl","gx.O.AV30SnAnaCCon"]) )
                                       {
                                          this.AV10ret = gx.num.trunc( 1 ,0) ;
                                       }
                                       else
                                       {
                                          if ( ! (0==this.A2601CategoriaDiasConsecutivosConv) && (0==this.AV60CategoriaLimiteConvite) && gx.ajax.aggSelInteger("vRET","49",["gx.O.AV34ClassificacaoIdParm","gx.O.AV42SnExiste","gx.O.AV40SnEmUso","gx.O.A2622CategoriaId","gx.O.A2595CategoriaDescricao","gx.O.A2597CategoriaTipoCobranca","gx.O.A2599CategoriaPrazoLimConvite","gx.O.AV60CategoriaLimiteConvite","gx.O.A2600CategoriaQtdePessoasConvite","gx.O.AV43CobrarConvSocio","gx.O.A2601CategoriaDiasConsecutivosConv","gx.O.A2603TipoCategoriaId","gx.O.A2607CategoriaCCustoId","gx.O.AV61CategoriaTipoCobranca","gx.O.AV32SnAnaCCus","gx.O.A2610CategoriaNaturezaId","gx.O.AV31SnAnaNat","gx.O.A2613CategoriaCContabilId","gx.O.AV45IntFinCbl","gx.O.AV30SnAnaCCon"]) )
                                          {
                                             this.AV10ret = gx.num.trunc( 1 ,0) ;
                                          }
                                          else
                                          {
                                             if ( (0==this.A2603TipoCategoriaId) && gx.ajax.aggSelInteger("vRET","49",["gx.O.AV34ClassificacaoIdParm","gx.O.AV42SnExiste","gx.O.AV40SnEmUso","gx.O.A2622CategoriaId","gx.O.A2595CategoriaDescricao","gx.O.A2597CategoriaTipoCobranca","gx.O.A2599CategoriaPrazoLimConvite","gx.O.AV60CategoriaLimiteConvite","gx.O.A2600CategoriaQtdePessoasConvite","gx.O.AV43CobrarConvSocio","gx.O.A2601CategoriaDiasConsecutivosConv","gx.O.A2603TipoCategoriaId","gx.O.A2607CategoriaCCustoId","gx.O.AV61CategoriaTipoCobranca","gx.O.AV32SnAnaCCus","gx.O.A2610CategoriaNaturezaId","gx.O.AV31SnAnaNat","gx.O.A2613CategoriaCContabilId","gx.O.AV45IntFinCbl","gx.O.AV30SnAnaCCon"]) )
                                             {
                                                this.AV10ret = gx.num.trunc( 1 ,0) ;
                                             }
                                             else
                                             {
                                                if ( (""==this.A2607CategoriaCCustoId) && this.AV61CategoriaTipoCobranca == "C" && gx.ajax.aggSelInteger("vRET","49",["gx.O.AV34ClassificacaoIdParm","gx.O.AV42SnExiste","gx.O.AV40SnEmUso","gx.O.A2622CategoriaId","gx.O.A2595CategoriaDescricao","gx.O.A2597CategoriaTipoCobranca","gx.O.A2599CategoriaPrazoLimConvite","gx.O.AV60CategoriaLimiteConvite","gx.O.A2600CategoriaQtdePessoasConvite","gx.O.AV43CobrarConvSocio","gx.O.A2601CategoriaDiasConsecutivosConv","gx.O.A2603TipoCategoriaId","gx.O.A2607CategoriaCCustoId","gx.O.AV61CategoriaTipoCobranca","gx.O.AV32SnAnaCCus","gx.O.A2610CategoriaNaturezaId","gx.O.AV31SnAnaNat","gx.O.A2613CategoriaCContabilId","gx.O.AV45IntFinCbl","gx.O.AV30SnAnaCCon"]) )
                                                {
                                                   this.AV10ret = gx.num.trunc( 1 ,0) ;
                                                }
                                                else
                                                {
                                                   if ( ! (""==this.A2607CategoriaCCustoId) && this.AV32SnAnaCCus == "S" && gx.ajax.aggSelInteger("vRET","49",["gx.O.AV34ClassificacaoIdParm","gx.O.AV42SnExiste","gx.O.AV40SnEmUso","gx.O.A2622CategoriaId","gx.O.A2595CategoriaDescricao","gx.O.A2597CategoriaTipoCobranca","gx.O.A2599CategoriaPrazoLimConvite","gx.O.AV60CategoriaLimiteConvite","gx.O.A2600CategoriaQtdePessoasConvite","gx.O.AV43CobrarConvSocio","gx.O.A2601CategoriaDiasConsecutivosConv","gx.O.A2603TipoCategoriaId","gx.O.A2607CategoriaCCustoId","gx.O.AV61CategoriaTipoCobranca","gx.O.AV32SnAnaCCus","gx.O.A2610CategoriaNaturezaId","gx.O.AV31SnAnaNat","gx.O.A2613CategoriaCContabilId","gx.O.AV45IntFinCbl","gx.O.AV30SnAnaCCon"]) )
                                                   {
                                                      this.AV10ret = gx.num.trunc( 1 ,0) ;
                                                   }
                                                   else
                                                   {
                                                      if ( (""==this.A2610CategoriaNaturezaId) && this.AV61CategoriaTipoCobranca == "C" && gx.ajax.aggSelInteger("vRET","49",["gx.O.AV34ClassificacaoIdParm","gx.O.AV42SnExiste","gx.O.AV40SnEmUso","gx.O.A2622CategoriaId","gx.O.A2595CategoriaDescricao","gx.O.A2597CategoriaTipoCobranca","gx.O.A2599CategoriaPrazoLimConvite","gx.O.AV60CategoriaLimiteConvite","gx.O.A2600CategoriaQtdePessoasConvite","gx.O.AV43CobrarConvSocio","gx.O.A2601CategoriaDiasConsecutivosConv","gx.O.A2603TipoCategoriaId","gx.O.A2607CategoriaCCustoId","gx.O.AV61CategoriaTipoCobranca","gx.O.AV32SnAnaCCus","gx.O.A2610CategoriaNaturezaId","gx.O.AV31SnAnaNat","gx.O.A2613CategoriaCContabilId","gx.O.AV45IntFinCbl","gx.O.AV30SnAnaCCon"]) )
                                                      {
                                                         this.AV10ret = gx.num.trunc( 1 ,0) ;
                                                      }
                                                      else
                                                      {
                                                         if ( ! (""==this.A2610CategoriaNaturezaId) && this.AV31SnAnaNat == "S" && gx.ajax.aggSelInteger("vRET","49",["gx.O.AV34ClassificacaoIdParm","gx.O.AV42SnExiste","gx.O.AV40SnEmUso","gx.O.A2622CategoriaId","gx.O.A2595CategoriaDescricao","gx.O.A2597CategoriaTipoCobranca","gx.O.A2599CategoriaPrazoLimConvite","gx.O.AV60CategoriaLimiteConvite","gx.O.A2600CategoriaQtdePessoasConvite","gx.O.AV43CobrarConvSocio","gx.O.A2601CategoriaDiasConsecutivosConv","gx.O.A2603TipoCategoriaId","gx.O.A2607CategoriaCCustoId","gx.O.AV61CategoriaTipoCobranca","gx.O.AV32SnAnaCCus","gx.O.A2610CategoriaNaturezaId","gx.O.AV31SnAnaNat","gx.O.A2613CategoriaCContabilId","gx.O.AV45IntFinCbl","gx.O.AV30SnAnaCCon"]) )
                                                         {
                                                            this.AV10ret = gx.num.trunc( 1 ,0) ;
                                                         }
                                                         else
                                                         {
                                                            if ( (""==this.A2613CategoriaCContabilId) && this.AV61CategoriaTipoCobranca == "C" && this.AV45IntFinCbl == "S" && gx.ajax.aggSelInteger("vRET","49",["gx.O.AV34ClassificacaoIdParm","gx.O.AV42SnExiste","gx.O.AV40SnEmUso","gx.O.A2622CategoriaId","gx.O.A2595CategoriaDescricao","gx.O.A2597CategoriaTipoCobranca","gx.O.A2599CategoriaPrazoLimConvite","gx.O.AV60CategoriaLimiteConvite","gx.O.A2600CategoriaQtdePessoasConvite","gx.O.AV43CobrarConvSocio","gx.O.A2601CategoriaDiasConsecutivosConv","gx.O.A2603TipoCategoriaId","gx.O.A2607CategoriaCCustoId","gx.O.AV61CategoriaTipoCobranca","gx.O.AV32SnAnaCCus","gx.O.A2610CategoriaNaturezaId","gx.O.AV31SnAnaNat","gx.O.A2613CategoriaCContabilId","gx.O.AV45IntFinCbl","gx.O.AV30SnAnaCCon"]) )
                                                            {
                                                               this.AV10ret = gx.num.trunc( 1 ,0) ;
                                                            }
                                                            else
                                                            {
                                                               if ( ! (""==this.A2613CategoriaCContabilId) && this.AV30SnAnaCCon == "S" && gx.ajax.aggSelInteger("vRET","49",["gx.O.AV34ClassificacaoIdParm","gx.O.AV42SnExiste","gx.O.AV40SnEmUso","gx.O.A2622CategoriaId","gx.O.A2595CategoriaDescricao","gx.O.A2597CategoriaTipoCobranca","gx.O.A2599CategoriaPrazoLimConvite","gx.O.AV60CategoriaLimiteConvite","gx.O.A2600CategoriaQtdePessoasConvite","gx.O.AV43CobrarConvSocio","gx.O.A2601CategoriaDiasConsecutivosConv","gx.O.A2603TipoCategoriaId","gx.O.A2607CategoriaCCustoId","gx.O.AV61CategoriaTipoCobranca","gx.O.AV32SnAnaCCus","gx.O.A2610CategoriaNaturezaId","gx.O.AV31SnAnaNat","gx.O.A2613CategoriaCContabilId","gx.O.AV45IntFinCbl","gx.O.AV30SnAnaCCon"]) )
                                                               {
                                                                  this.AV10ret = gx.num.trunc( 1 ,0) ;
                                                               }
                                                            }
                                                         }
                                                      }
                                                   }
                                                }
                                             }
                                          }
                                       }
                                    }
                                 }
                              }
                           }
                        }
                     }
                  }
               }
            }
         }
      }
      catch(e){}
      return true;
   }
   this.Valid_Categoriadependentedata=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(119) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CATEGORIADEPENDENTEDATA", gx.fn.currentGridRowImpl(119));
         this.AnyError  = 0;
         this.sMode341 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(341,119)  ;
         this.standaloneModal4Q341( );
         this.standaloneNotModal4Q341( );

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode341  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Categoriadependenteidademax=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(119) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CATEGORIADEPENDENTEIDADEMAX", gx.fn.currentGridRowImpl(119));
         this.AnyError  = 0;
         this.sMode341 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(341,119)  ;
         if ( gx.fn.gridDuplicateKey(122) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Valor por Dependente", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode341  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Categoriadependentevalor=function()
   {
      this.sMode341 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(341,119)  ;
      gx.ajax.validSrvEvt("dyncall","valid_Categoriadependentevalor",["gx.O.AV34ClassificacaoIdParm", "gx.O.AV42SnExiste", "gx.O.AV40SnEmUso", "gx.O.A2622CategoriaId", "gx.O.A2595CategoriaDescricao", "gx.O.A2597CategoriaTipoCobranca", "gx.O.A2599CategoriaPrazoLimConvite", "gx.O.AV60CategoriaLimiteConvite", "gx.O.A2600CategoriaQtdePessoasConvite", "gx.O.AV43CobrarConvSocio", "gx.O.A2601CategoriaDiasConsecutivosConv", "gx.O.A2603TipoCategoriaId", "gx.O.A2607CategoriaCCustoId", "gx.O.AV61CategoriaTipoCobranca", "gx.O.AV32SnAnaCCus", "gx.O.A2610CategoriaNaturezaId", "gx.O.AV31SnAnaNat", "gx.O.A2613CategoriaCContabilId", "gx.O.AV45IntFinCbl", "gx.O.AV30SnAnaCCon", 'gx.date.urlDate(gx.O.A3124CategoriaDependenteData,"DMY4")', "gx.O.AV62CategoriaSnVlrDependente", "gx.O.A3125CategoriaDependenteIdadeMax", "gx.num.urlDecimal(gx.O.A3126CategoriaDependenteValor,\'.\',\',\')", "gx.O.AV10ret"],["AV10ret"]);
      this.Gx_mode =  this.sMode341  ;
      return true;
   }
   this.Valid_Categoriadependentevalor2=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(119) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CATEGORIADEPENDENTEVALOR2", gx.fn.currentGridRowImpl(119));
         this.AnyError  = 0;
         this.sMode341 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(341,119)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode341  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.standaloneModal4Q341=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("CATEGORIADEPENDENTEDATA","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("CATEGORIADEPENDENTEDATA","Enabled", 1 );
         }
      }
      catch(e){}
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("CATEGORIADEPENDENTEIDADEMAX","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("CATEGORIADEPENDENTEIDADEMAX","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal4Q341=function()
   {
      try {
         gx.fn.setCtrlProperty("CATEGORIADEPENDENTEUSUARIOALT","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("CATEGORIADEPENDENTEDATAHORAALT","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("CATEGORIAUSUARIOALT","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("CATEGORIADATAHORAALT","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("CATEGORIAUSUARIOALT","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("CATEGORIADATAHORAALT","Enabled", 0 );
      }
      catch(e){}
      return true;
   }
   this.Valid_Categoriagrauparentescoid=function()
   {
      this.sMode609 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(609,132)  ;
      this.standaloneModal4Q609( );
      this.standaloneNotModal4Q609( );
      if(  gx.fn.currentGridRowImpl(132) ===0) {
         this.Gx_mode =  this.sMode609  ;
         return true;
      }
      var gxballoon = gx.util.balloon.getNew("CATEGORIAGRAUPARENTESCOID", gx.fn.currentGridRowImpl(132));
      if ( gx.fn.gridDuplicateKey(134) )
      {
         gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Grau Parentesco", "", "", "", "", "", "", "", ""));
         this.AnyError = gx.num.trunc( 1 ,0) ;
         this.Gx_mode =  this.sMode609  ;
         return gxballoon.show();
      }
      gx.ajax.validSrvEvt("dyncall","valid_Categoriagrauparentescoid",["gx.O.A8158CategoriaGrauParentescoId", "gx.O.A8154CategoriaGrauParentescoDesc"],["A8154CategoriaGrauParentescoDesc"]);
      this.Gx_mode =  this.sMode609  ;
      return true;
   }
   this.Valid_Categoriagrauparentescoidadema=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(132) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CATEGORIAGRAUPARENTESCOIDADEMA", gx.fn.currentGridRowImpl(132));
         this.AnyError  = 0;
         this.sMode609 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(609,132)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode609  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.standaloneModal4Q609=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("CATEGORIAGRAUPARENTESCOID","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("CATEGORIAGRAUPARENTESCOID","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal4Q609=function()
   {
      try {
         gx.fn.setCtrlProperty("CATEGORIAGRAUPARENTESCODESC","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("CATEGORIAGRAUPARENTESCOUSUARIO","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("CATEGORIAGRAUPARENTESCODATAHOR","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("CATEGORIAUSUARIOALT","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("CATEGORIADATAHORAALT","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("CATEGORIAUSUARIOALT","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("CATEGORIADATAHORAALT","Enabled", 0 );
      }
      catch(e){}
      return true;
   }
   this.e124q2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e134q2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e144q2_client=function()
   {
      this.executeServerEvent("CATEGORIACCUSTOID.ISVALID", true, null, false, true);
   };
   this.e154q272_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e164q272_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,6,9,12,14,17,20,22,24,27,29,31,33,36,38,40,42,45,47,51,53,56,58,59,62,64,67,69,72,74,75,78,80,83,85,86,89,91,92,95,97,98,99,100,101,104,106,107,108,109,110,111,112,113,114,115,118,120,121,122,123,124,125,126,127,128,131,133,134,135,136,137,138,139,142,145,147,149,156,159,160,168,169,170,171,172,173,174,175,176];
   this.GXLastCtrlId =176;
   this.Grid1Container = new gx.grid.grid(this, 273,"Valor",105,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"tcategoria",[2624],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("nRcdDeleted_273",106,"vNRCDDELETED_273","","","nRcdDeleted_273","int",0,"px",4,1,"right",null,[],"nRcdDeleted_273","nRcdDeleted_273",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2624,107,"CATEGORIAVALORDATA","Data Referência","","CategoriaValorData","date",0,"px",10,10,"right",null,[],2624,"CategoriaValorData",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2618,108,"CATEGORIAVALORMENSALIDADE","Valor Mensalidade","","CategoriaValorMensalidade","decimal",110,"px",22,22,"right",null,[],2618,"CategoriaValorMensalidade",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9802,109,"CATEGORIAVALORDESCONTO","Primeiro Desconto","","CategoriaValorDesconto","decimal",110,"px",22,22,"right",null,[],9802,"CategoriaValorDesconto",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10351,110,"CATEGORIAVALORDESCONTO2","Segundo Desconto","","CategoriaValorDesconto2","decimal",115,"px",22,22,"right",null,[],10351,"CategoriaValorDesconto2",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10352,111,"CATEGORIAVALORDESCONTO3","Terceiro Desconto","","CategoriaValorDesconto3","decimal",110,"px",22,22,"right",null,[],10352,"CategoriaValorDesconto3",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2619,112,"CATEGORIAVALORUSUARIOALT","Usuário Alteração","","CategoriaValorUsuarioAlt","char",0,"px",12,12,"left",null,[],2619,"CategoriaValorUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2620,113,"CATEGORIAVALORDATAHORAALT","Data/Hora Alteração","","CategoriaValorDataHoraAlt","dtime",0,"px",16,16,"right",null,[],2620,"CategoriaValorDataHoraAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   this.Grid2Container = new gx.grid.grid(this, 341,"Dependente",119,"Grid2","Grid2","Grid2Container",this.CmpContext,this.IsMasterPage,"tcategoria",[3124,3125],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid2Container = this.Grid2Container;
   Grid2Container.addSingleLineEdit("nRcdDeleted_341",120,"vNRCDDELETED_341","","","nRcdDeleted_341","int",0,"px",4,1,"right",null,[],"nRcdDeleted_341","nRcdDeleted_341",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(3124,121,"CATEGORIADEPENDENTEDATA","Data Referência","","CategoriaDependenteData","date",0,"px",10,10,"right",null,[],3124,"CategoriaDependenteData",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(3125,122,"CATEGORIADEPENDENTEIDADEMAX","Idade Máxima","","CategoriaDependenteIdadeMax","int",0,"px",3,3,"right",null,[],3125,"CategoriaDependenteIdadeMax",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(3126,123,"CATEGORIADEPENDENTEVALOR","Primeiro Valor Dependente","","CategoriaDependenteValor","decimal",0,"px",22,22,"right",null,[],3126,"CategoriaDependenteValor",true,2,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(10748,124,"CATEGORIADEPENDENTEVALOR2","Segundo Valor Dependente","","CategoriaDependenteValor2","decimal",0,"px",22,22,"right",null,[],10748,"CategoriaDependenteValor2",true,2,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(3127,125,"CATEGORIADEPENDENTEUSUARIOALT","Usuário Alteração","","CategoriaDependenteUsuarioAlt","char",0,"px",12,12,"left",null,[],3127,"CategoriaDependenteUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(3128,126,"CATEGORIADEPENDENTEDATAHORAALT","Data/Hora Alteração","","CategoriaDependenteDataHoraAlt","dtime",0,"px",16,16,"right",null,[],3128,"CategoriaDependenteDataHoraAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid2Container);
   this.Grid3Container = new gx.grid.grid(this, 609,"GrauParentesco",132,"Grid3","Grid3","Grid3Container",this.CmpContext,this.IsMasterPage,"tcategoria",[8158],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid3Container = this.Grid3Container;
   Grid3Container.addSingleLineEdit("nRcdDeleted_609",133,"vNRCDDELETED_609","","","nRcdDeleted_609","int",0,"px",4,1,"right",null,[],"nRcdDeleted_609","nRcdDeleted_609",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit(8158,134,"CATEGORIAGRAUPARENTESCOID","Grau Parentesco","","CategoriaGrauParentescoId","int",0,"px",2,2,"right",null,[],8158,"CategoriaGrauParentescoId",true,0,false,false,"Attribute",1,"");
   Grid3Container.addBitmap("prompt_8158","PROMPT_8158",177,0,"",0,"",null,"","","gx-prompt Image","");
   Grid3Container.addSingleLineEdit(8154,135,"CATEGORIAGRAUPARENTESCODESC","Descrição","","CategoriaGrauParentescoDesc","svchar",0,"px",20,20,"left",null,[],8154,"CategoriaGrauParentescoDesc",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit(8155,136,"CATEGORIAGRAUPARENTESCOIDADEMA","Idade Máxima","","CategoriaGrauParentescoIdadeMa","int",0,"px",4,4,"right",null,[],8155,"CategoriaGrauParentescoIdadeMa",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit(8156,137,"CATEGORIAGRAUPARENTESCOUSUARIO","Usuário Alteração","","CategoriaGrauParentescoUsuario","char",0,"px",12,12,"left",null,[],8156,"CategoriaGrauParentescoUsuario",true,0,false,false,"ApenasLeitura",1,"");
   Grid3Container.addSingleLineEdit(8157,138,"CATEGORIAGRAUPARENTESCODATAHOR","Data/Hora Alteração","","CategoriaGrauParentescoDataHor","dtime",0,"px",16,16,"right",null,[],8157,"CategoriaGrauParentescoDataHor",true,5,false,false,"ApenasLeitura",1,"");
   this.setGrid(Grid3Container);
   this.TABCSSContainer = gx.uc.getNew(this, 5, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV57Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV57Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV57Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "tcategoria_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   this.HDMASKVALDATContainer = gx.uc.getNew(this, 161, 14, "HDMask", "HDMASKVALDATContainer", "Hdmaskvaldat");
   var HDMASKVALDATContainer = this.HDMASKVALDATContainer;
   HDMASKVALDATContainer.setDynProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKVALDATContainer.setProp("Picture", "Picture", "99/99/9999", "str");
   HDMASKVALDATContainer.setProp("Default", "Default", "", "str");
   HDMASKVALDATContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKVALDATContainer.setProp("Reverse", "Reverse", false, "bool");
   HDMASKVALDATContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKVALDATContainer.setProp("UnmaskedChars", "Unmaskedchars", "[(),.:/ -]", "str");
   HDMASKVALDATContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKVALDATContainer.setProp("FixedChars", "Fixedchars", "[(),.:/ -]", "str");
   HDMASKVALDATContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKVALDATContainer.setProp("ControlType", "Controltype", "TransactionGrid", "str");
   HDMASKVALDATContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKVALDATContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKVALDATContainer.setProp("Class", "Class", "", "char");
   HDMASKVALDATContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKVALDATContainer);
   this.HDMASKVALORCATContainer = gx.uc.getNew(this, 162, 14, "HDMask", "HDMASKVALORCATContainer", "Hdmaskvalorcat");
   var HDMASKVALORCATContainer = this.HDMASKVALORCATContainer;
   HDMASKVALORCATContainer.setProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKVALORCATContainer.setProp("Picture", "Picture", "", "str");
   HDMASKVALORCATContainer.setProp("Default", "Default", "", "str");
   HDMASKVALORCATContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKVALORCATContainer.setProp("Reverse", "Reverse", true, "bool");
   HDMASKVALORCATContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKVALORCATContainer.setProp("UnmaskedChars", "Unmaskedchars", "", "str");
   HDMASKVALORCATContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKVALORCATContainer.setProp("FixedChars", "Fixedchars", "", "str");
   HDMASKVALORCATContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKVALORCATContainer.setProp("ControlType", "Controltype", "TransactionGrid", "str");
   HDMASKVALORCATContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKVALORCATContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKVALORCATContainer.setProp("Class", "Class", "", "char");
   HDMASKVALORCATContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKVALORCATContainer);
   this.HDMASKDTPENDContainer = gx.uc.getNew(this, 163, 14, "HDMask", "HDMASKDTPENDContainer", "Hdmaskdtpend");
   var HDMASKDTPENDContainer = this.HDMASKDTPENDContainer;
   HDMASKDTPENDContainer.setDynProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKDTPENDContainer.setProp("Picture", "Picture", "99/99/9999", "str");
   HDMASKDTPENDContainer.setProp("Default", "Default", "", "str");
   HDMASKDTPENDContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKDTPENDContainer.setProp("Reverse", "Reverse", false, "bool");
   HDMASKDTPENDContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKDTPENDContainer.setProp("UnmaskedChars", "Unmaskedchars", "[(),.:/ -]", "str");
   HDMASKDTPENDContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKDTPENDContainer.setProp("FixedChars", "Fixedchars", "[(),.:/ -]", "str");
   HDMASKDTPENDContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKDTPENDContainer.setProp("ControlType", "Controltype", "TransactionGrid", "str");
   HDMASKDTPENDContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKDTPENDContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKDTPENDContainer.setProp("Class", "Class", "", "char");
   HDMASKDTPENDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKDTPENDContainer);
   this.HDMASKVALORContainer = gx.uc.getNew(this, 164, 14, "HDMask", "HDMASKVALORContainer", "Hdmaskvalor");
   var HDMASKVALORContainer = this.HDMASKVALORContainer;
   HDMASKVALORContainer.setProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKVALORContainer.setProp("Picture", "Picture", "", "str");
   HDMASKVALORContainer.setProp("Default", "Default", "", "str");
   HDMASKVALORContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKVALORContainer.setProp("Reverse", "Reverse", true, "bool");
   HDMASKVALORContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKVALORContainer.setProp("UnmaskedChars", "Unmaskedchars", "", "str");
   HDMASKVALORContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKVALORContainer.setProp("FixedChars", "Fixedchars", "", "str");
   HDMASKVALORContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKVALORContainer.setProp("ControlType", "Controltype", "TransactionGrid", "str");
   HDMASKVALORContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKVALORContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKVALORContainer.setProp("Class", "Class", "", "char");
   HDMASKVALORContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKVALORContainer);
   this.HDMASKCOTAVISTAContainer = gx.uc.getNew(this, 165, 14, "HDMask", "HDMASKCOTAVISTAContainer", "Hdmaskcotavista");
   var HDMASKCOTAVISTAContainer = this.HDMASKCOTAVISTAContainer;
   HDMASKCOTAVISTAContainer.setProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKCOTAVISTAContainer.setProp("Picture", "Picture", "", "str");
   HDMASKCOTAVISTAContainer.setProp("Default", "Default", "", "str");
   HDMASKCOTAVISTAContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKCOTAVISTAContainer.setProp("Reverse", "Reverse", true, "bool");
   HDMASKCOTAVISTAContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKCOTAVISTAContainer.setProp("UnmaskedChars", "Unmaskedchars", "", "str");
   HDMASKCOTAVISTAContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKCOTAVISTAContainer.setProp("FixedChars", "Fixedchars", "", "str");
   HDMASKCOTAVISTAContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKCOTAVISTAContainer.setProp("ControlType", "Controltype", "Default", "str");
   HDMASKCOTAVISTAContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKCOTAVISTAContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKCOTAVISTAContainer.setProp("Class", "Class", "", "char");
   HDMASKCOTAVISTAContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKCOTAVISTAContainer);
   this.HDMASKCOTAPRAZOContainer = gx.uc.getNew(this, 166, 14, "HDMask", "HDMASKCOTAPRAZOContainer", "Hdmaskcotaprazo");
   var HDMASKCOTAPRAZOContainer = this.HDMASKCOTAPRAZOContainer;
   HDMASKCOTAPRAZOContainer.setProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKCOTAPRAZOContainer.setProp("Picture", "Picture", "", "str");
   HDMASKCOTAPRAZOContainer.setProp("Default", "Default", "", "str");
   HDMASKCOTAPRAZOContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKCOTAPRAZOContainer.setProp("Reverse", "Reverse", true, "bool");
   HDMASKCOTAPRAZOContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKCOTAPRAZOContainer.setProp("UnmaskedChars", "Unmaskedchars", "", "str");
   HDMASKCOTAPRAZOContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKCOTAPRAZOContainer.setProp("FixedChars", "Fixedchars", "", "str");
   HDMASKCOTAPRAZOContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKCOTAPRAZOContainer.setProp("ControlType", "Controltype", "Default", "str");
   HDMASKCOTAPRAZOContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKCOTAPRAZOContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKCOTAPRAZOContainer.setProp("Class", "Class", "", "char");
   HDMASKCOTAPRAZOContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKCOTAPRAZOContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TAB1",grid:0};
   GXValidFnc[9]={fld:"TABLE4",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Categoriaid,isvalid:null,rgrid:[this.Grid1Container,this.Grid2Container,this.Grid3Container],fld:"CATEGORIAID",gxz:"Z2622CategoriaId",gxold:"O2622CategoriaId",gxvar:"A2622CategoriaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2622CategoriaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2622CategoriaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CATEGORIAID",gx.O.A2622CategoriaId,0)},c2v:function(){gx.O.A2622CategoriaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CATEGORIAID",'.')},nac:function(){return !(0==this.AV20CategoriaId)}};
   GXValidFnc[17]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Categoriasncaddependente,isvalid:null,rgrid:[],fld:"CATEGORIASNCADDEPENDENTE",gxz:"Z2604CategoriaSnCadDependente",gxold:"O2604CategoriaSnCadDependente",gxvar:"A2604CategoriaSnCadDependente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2604CategoriaSnCadDependente=Value},v2z:function(Value){gx.O.Z2604CategoriaSnCadDependente=Value},v2c:function(){gx.fn.setCheckBoxValue("CATEGORIASNCADDEPENDENTE",gx.O.A2604CategoriaSnCadDependente,"S")},c2v:function(){gx.O.A2604CategoriaSnCadDependente=this.val()},val:function(){return gx.fn.getControlValue("CATEGORIASNCADDEPENDENTE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[20]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Categoriadescricao,isvalid:null,rgrid:[],fld:"CATEGORIADESCRICAO",gxz:"Z2595CategoriaDescricao",gxold:"O2595CategoriaDescricao",gxvar:"A2595CategoriaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2595CategoriaDescricao=Value},v2z:function(Value){gx.O.Z2595CategoriaDescricao=Value},v2c:function(){gx.fn.setControlValue("CATEGORIADESCRICAO",gx.O.A2595CategoriaDescricao,0)},c2v:function(){gx.O.A2595CategoriaDescricao=this.val()},val:function(){return gx.fn.getControlValue("CATEGORIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Categoriasnvlrdependente,isvalid:null,rgrid:[],fld:"CATEGORIASNVLRDEPENDENTE",gxz:"Z3129CategoriaSnVlrDependente",gxold:"O3129CategoriaSnVlrDependente",gxvar:"A3129CategoriaSnVlrDependente",ucs:[],op:[],ip:[24],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A3129CategoriaSnVlrDependente=Value},v2z:function(Value){gx.O.Z3129CategoriaSnVlrDependente=Value},v2c:function(){gx.fn.setCheckBoxValue("CATEGORIASNVLRDEPENDENTE",gx.O.A3129CategoriaSnVlrDependente,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3129CategoriaSnVlrDependente=this.val()},val:function(){return gx.fn.getControlValue("CATEGORIASNVLRDEPENDENTE")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[27]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Categoriadescabreviada,isvalid:null,rgrid:[],fld:"CATEGORIADESCABREVIADA",gxz:"Z2596CategoriaDescAbreviada",gxold:"O2596CategoriaDescAbreviada",gxvar:"A2596CategoriaDescAbreviada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2596CategoriaDescAbreviada=Value},v2z:function(Value){gx.O.Z2596CategoriaDescAbreviada=Value},v2c:function(){gx.fn.setControlValue("CATEGORIADESCABREVIADA",gx.O.A2596CategoriaDescAbreviada,0)},c2v:function(){gx.O.A2596CategoriaDescAbreviada=this.val()},val:function(){return gx.fn.getControlValue("CATEGORIADESCABREVIADA")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Categoriavlrcotaavista,isvalid:null,rgrid:[],fld:"CATEGORIAVLRCOTAAVISTA",gxz:"Z8078CategoriaVlrCotaAVista",gxold:"O8078CategoriaVlrCotaAVista",gxvar:"A8078CategoriaVlrCotaAVista",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8078CategoriaVlrCotaAVista=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8078CategoriaVlrCotaAVista=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CATEGORIAVLRCOTAAVISTA",gx.O.A8078CategoriaVlrCotaAVista,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8078CategoriaVlrCotaAVista=this.val()},val:function(){return gx.fn.getDecimalValue("CATEGORIAVLRCOTAAVISTA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[36]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Categoriatipocobranca,isvalid:null,rgrid:[],fld:"CATEGORIATIPOCOBRANCA",gxz:"Z2597CategoriaTipoCobranca",gxold:"O2597CategoriaTipoCobranca",gxvar:"A2597CategoriaTipoCobranca",ucs:[],op:[],ip:[38],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2597CategoriaTipoCobranca=Value},v2z:function(Value){gx.O.Z2597CategoriaTipoCobranca=Value},v2c:function(){gx.fn.setComboBoxValue("CATEGORIATIPOCOBRANCA",gx.O.A2597CategoriaTipoCobranca)},c2v:function(){gx.O.A2597CategoriaTipoCobranca=this.val()},val:function(){return gx.fn.getControlValue("CATEGORIATIPOCOBRANCA")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Categoriavlrcotaaprazo,isvalid:null,rgrid:[],fld:"CATEGORIAVLRCOTAAPRAZO",gxz:"Z8079CategoriaVlrCotaAPrazo",gxold:"O8079CategoriaVlrCotaAPrazo",gxvar:"A8079CategoriaVlrCotaAPrazo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8079CategoriaVlrCotaAPrazo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8079CategoriaVlrCotaAPrazo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CATEGORIAVLRCOTAAPRAZO",gx.O.A8079CategoriaVlrCotaAPrazo,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8079CategoriaVlrCotaAPrazo=this.val()},val:function(){return gx.fn.getDecimalValue("CATEGORIAVLRCOTAAPRAZO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[45]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Categoriaqtdelimitedepend,isvalid:null,rgrid:[],fld:"CATEGORIAQTDELIMITEDEPEND",gxz:"Z8042CategoriaQtdeLimiteDepend",gxold:"O8042CategoriaQtdeLimiteDepend",gxvar:"A8042CategoriaQtdeLimiteDepend",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8042CategoriaQtdeLimiteDepend=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8042CategoriaQtdeLimiteDepend=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CATEGORIAQTDELIMITEDEPEND",gx.O.A8042CategoriaQtdeLimiteDepend,0)},c2v:function(){gx.O.A8042CategoriaQtdeLimiteDepend=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CATEGORIAQTDELIMITEDEPEND",'.')},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Categorialimiteconvite,isvalid:null,rgrid:[],fld:"CATEGORIALIMITECONVITE",gxz:"Z2598CategoriaLimiteConvite",gxold:"O2598CategoriaLimiteConvite",gxvar:"A2598CategoriaLimiteConvite",ucs:[],op:[],ip:[53],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2598CategoriaLimiteConvite=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2598CategoriaLimiteConvite=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CATEGORIALIMITECONVITE",gx.O.A2598CategoriaLimiteConvite,0)},c2v:function(){gx.O.A2598CategoriaLimiteConvite=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CATEGORIALIMITECONVITE",'.')},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Categoriaprazolimconvite,isvalid:null,rgrid:[],fld:"CATEGORIAPRAZOLIMCONVITE",gxz:"Z2599CategoriaPrazoLimConvite",gxold:"O2599CategoriaPrazoLimConvite",gxvar:"A2599CategoriaPrazoLimConvite",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2599CategoriaPrazoLimConvite=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2599CategoriaPrazoLimConvite=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CATEGORIAPRAZOLIMCONVITE",gx.O.A2599CategoriaPrazoLimConvite,0)},c2v:function(){gx.O.A2599CategoriaPrazoLimConvite=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CATEGORIAPRAZOLIMCONVITE",'.')},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[62]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Categoriaqtdepessoasconvite,isvalid:null,rgrid:[],fld:"CATEGORIAQTDEPESSOASCONVITE",gxz:"Z2600CategoriaQtdePessoasConvite",gxold:"O2600CategoriaQtdePessoasConvite",gxvar:"A2600CategoriaQtdePessoasConvite",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2600CategoriaQtdePessoasConvite=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2600CategoriaQtdePessoasConvite=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CATEGORIAQTDEPESSOASCONVITE",gx.O.A2600CategoriaQtdePessoasConvite,0)},c2v:function(){gx.O.A2600CategoriaQtdePessoasConvite=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CATEGORIAQTDEPESSOASCONVITE",'.')},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Categoriadiasconsecutivosconv,isvalid:null,rgrid:[],fld:"CATEGORIADIASCONSECUTIVOSCONV",gxz:"Z2601CategoriaDiasConsecutivosConv",gxold:"O2601CategoriaDiasConsecutivosConv",gxvar:"A2601CategoriaDiasConsecutivosConv",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2601CategoriaDiasConsecutivosConv=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2601CategoriaDiasConsecutivosConv=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CATEGORIADIASCONSECUTIVOSCONV",gx.O.A2601CategoriaDiasConsecutivosConv,0)},c2v:function(){gx.O.A2601CategoriaDiasConsecutivosConv=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CATEGORIADIASCONSECUTIVOSCONV",'.')},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipocategoriaid,isvalid:null,rgrid:[],fld:"TIPOCATEGORIAID",gxz:"Z2603TipoCategoriaId",gxold:"O2603TipoCategoriaId",gxvar:"A2603TipoCategoriaId",ucs:[],op:[75],ip:[75,74,170],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2603TipoCategoriaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2603TipoCategoriaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPOCATEGORIAID",gx.O.A2603TipoCategoriaId,0)},c2v:function(){gx.O.A2603TipoCategoriaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPOCATEGORIAID",'.')},nac:gx.falseFn};
   GXValidFnc[75]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCATEGORIADESCRICAO",gxz:"ZV69TipoCategoriaDescricao",gxold:"OV69TipoCategoriaDescricao",gxvar:"AV69TipoCategoriaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69TipoCategoriaDescricao=Value},v2z:function(Value){gx.O.ZV69TipoCategoriaDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOCATEGORIADESCRICAO",gx.O.AV69TipoCategoriaDescricao,0)},c2v:function(){gx.O.AV69TipoCategoriaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCATEGORIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Categoriadialimgerarmensmes,isvalid:null,rgrid:[],fld:"CATEGORIADIALIMGERARMENSMES",gxz:"Z2605CategoriaDiaLimGerarMensMes",gxold:"O2605CategoriaDiaLimGerarMensMes",gxvar:"A2605CategoriaDiaLimGerarMensMes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2605CategoriaDiaLimGerarMensMes=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2605CategoriaDiaLimGerarMensMes=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CATEGORIADIALIMGERARMENSMES",gx.O.A2605CategoriaDiaLimGerarMensMes,0)},c2v:function(){gx.O.A2605CategoriaDiaLimGerarMensMes=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CATEGORIADIALIMGERARMENSMES",'.')},nac:gx.falseFn};
   GXValidFnc[83]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Categoriaccustoid,isvalid:'e144q2_client',rgrid:[],fld:"CATEGORIACCUSTOID",gxz:"Z2607CategoriaCCustoId",gxold:"O2607CategoriaCCustoId",gxvar:"A2607CategoriaCCustoId",ucs:[],op:[86],ip:[86,85,171],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2607CategoriaCCustoId=Value},v2z:function(Value){gx.O.Z2607CategoriaCCustoId=Value},v2c:function(){gx.fn.setControlValue("CATEGORIACCUSTOID",gx.O.A2607CategoriaCCustoId,0)},c2v:function(){gx.O.A2607CategoriaCCustoId=this.val()},val:function(){return gx.fn.getControlValue("CATEGORIACCUSTOID")},nac:gx.falseFn};
   GXValidFnc[86]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCCUSTODESCRICAO",gxz:"ZV64CCustoDescricao",gxold:"OV64CCustoDescricao",gxvar:"AV64CCustoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64CCustoDescricao=Value},v2z:function(Value){gx.O.ZV64CCustoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCCUSTODESCRICAO",gx.O.AV64CCustoDescricao,0)},c2v:function(){gx.O.AV64CCustoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCCUSTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[89]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[91]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Categorianaturezaid,isvalid:null,rgrid:[],fld:"CATEGORIANATUREZAID",gxz:"Z2610CategoriaNaturezaId",gxold:"O2610CategoriaNaturezaId",gxvar:"A2610CategoriaNaturezaId",ucs:[],op:[92],ip:[92,91,173],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2610CategoriaNaturezaId=Value},v2z:function(Value){gx.O.Z2610CategoriaNaturezaId=Value},v2c:function(){gx.fn.setControlValue("CATEGORIANATUREZAID",gx.O.A2610CategoriaNaturezaId,0)},c2v:function(){gx.O.A2610CategoriaNaturezaId=this.val()},val:function(){return gx.fn.getControlValue("CATEGORIANATUREZAID")},nac:gx.falseFn};
   GXValidFnc[92]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZADESCRICAO",gxz:"ZV67NaturezaDescricao",gxold:"OV67NaturezaDescricao",gxvar:"AV67NaturezaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67NaturezaDescricao=Value},v2z:function(Value){gx.O.ZV67NaturezaDescricao=Value},v2c:function(){gx.fn.setControlValue("vNATUREZADESCRICAO",gx.O.AV67NaturezaDescricao,0)},c2v:function(){gx.O.AV67NaturezaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[95]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[97]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Categoriaccontabilid,isvalid:null,rgrid:[],fld:"CATEGORIACCONTABILID",gxz:"Z2613CategoriaCContabilId",gxold:"O2613CategoriaCContabilId",gxvar:"A2613CategoriaCContabilId",ucs:[],op:[99],ip:[99,91,85,74,69,64,58,38,22,14,97,172],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2613CategoriaCContabilId=Value},v2z:function(Value){gx.O.Z2613CategoriaCContabilId=Value},v2c:function(){gx.fn.setControlValue("CATEGORIACCONTABILID",gx.O.A2613CategoriaCContabilId,0)},c2v:function(){gx.O.A2613CategoriaCContabilId=this.val()},val:function(){return gx.fn.getControlValue("CATEGORIACCONTABILID")},nac:gx.falseFn};
   GXValidFnc[98]={fld:"PROMPTCCONTABIL",grid:0};
   GXValidFnc[99]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCCONTABILDESCRICAO",gxz:"ZV68CContabilDescricao",gxold:"OV68CContabilDescricao",gxvar:"AV68CContabilDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68CContabilDescricao=Value},v2z:function(Value){gx.O.ZV68CContabilDescricao=Value},v2c:function(){gx.fn.setControlValue("vCCONTABILDESCRICAO",gx.O.AV68CContabilDescricao,0)},c2v:function(){gx.O.AV68CContabilDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCCONTABILDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[100]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCATEGORIACCONTABILTRADUTOR",gxz:"ZV38CategoriaCContabilTradutor",gxold:"OV38CategoriaCContabilTradutor",gxvar:"AV38CategoriaCContabilTradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38CategoriaCContabilTradutor=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38CategoriaCContabilTradutor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCATEGORIACCONTABILTRADUTOR",gx.O.AV38CategoriaCContabilTradutor,0)},c2v:function(){gx.O.AV38CategoriaCContabilTradutor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCATEGORIACCONTABILTRADUTOR",'.')},nac:gx.falseFn};
   GXValidFnc[101]={fld:"TAB2",grid:0};
   GXValidFnc[104]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[106]={lvl:273,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:105,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_273",gxz:"ZnRcdDeleted_273",gxold:"OnRcdDeleted_273",gxvar:"nRcdDeleted_273",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_273=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_273=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_273",row || gx.fn.currentGridRowImpl(105),gx.O.nRcdDeleted_273,0)},c2v:function(){gx.O.nRcdDeleted_273=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_273",row || gx.fn.currentGridRowImpl(105),'.')},nac:gx.falseFn};
   GXValidFnc[107]={lvl:273,type:"date",len:10,dec:0,sign:false,ro:0,isacc:1,grid:105,gxgrid:this.Grid1Container,fnc:this.Valid_Categoriavalordata,isvalid:null,rgrid:[],fld:"CATEGORIAVALORDATA",gxz:"Z2624CategoriaValorData",gxold:"O2624CategoriaValorData",gxvar:"A2624CategoriaValorData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[97,91,85,74,69,64,58,38,22,14],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2624CategoriaValorData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2624CategoriaValorData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CATEGORIAVALORDATA",row || gx.fn.currentGridRowImpl(105),gx.O.A2624CategoriaValorData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2624CategoriaValorData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CATEGORIAVALORDATA",row || gx.fn.currentGridRowImpl(105))},nac:gx.falseFn};
   GXValidFnc[108]={lvl:273,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:105,gxgrid:this.Grid1Container,fnc:this.Valid_Categoriavalormensalidade,isvalid:null,rgrid:[],fld:"CATEGORIAVALORMENSALIDADE",gxz:"Z2618CategoriaValorMensalidade",gxold:"O2618CategoriaValorMensalidade",gxvar:"A2618CategoriaValorMensalidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2618CategoriaValorMensalidade=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2618CategoriaValorMensalidade=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CATEGORIAVALORMENSALIDADE",row || gx.fn.currentGridRowImpl(105),gx.O.A2618CategoriaValorMensalidade,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2618CategoriaValorMensalidade=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CATEGORIAVALORMENSALIDADE",row || gx.fn.currentGridRowImpl(105),'.',',')},nac:gx.falseFn};
   GXValidFnc[109]={lvl:273,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:105,gxgrid:this.Grid1Container,fnc:this.Valid_Categoriavalordesconto,isvalid:null,rgrid:[],fld:"CATEGORIAVALORDESCONTO",gxz:"Z9802CategoriaValorDesconto",gxold:"O9802CategoriaValorDesconto",gxvar:"A9802CategoriaValorDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9802CategoriaValorDesconto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9802CategoriaValorDesconto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CATEGORIAVALORDESCONTO",row || gx.fn.currentGridRowImpl(105),gx.O.A9802CategoriaValorDesconto,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9802CategoriaValorDesconto=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CATEGORIAVALORDESCONTO",row || gx.fn.currentGridRowImpl(105),'.',',')},nac:gx.falseFn};
   GXValidFnc[110]={lvl:273,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:105,gxgrid:this.Grid1Container,fnc:this.Valid_Categoriavalordesconto2,isvalid:null,rgrid:[],fld:"CATEGORIAVALORDESCONTO2",gxz:"Z10351CategoriaValorDesconto2",gxold:"O10351CategoriaValorDesconto2",gxvar:"A10351CategoriaValorDesconto2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10351CategoriaValorDesconto2=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10351CategoriaValorDesconto2=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CATEGORIAVALORDESCONTO2",row || gx.fn.currentGridRowImpl(105),gx.O.A10351CategoriaValorDesconto2,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10351CategoriaValorDesconto2=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CATEGORIAVALORDESCONTO2",row || gx.fn.currentGridRowImpl(105),'.',',')},nac:gx.falseFn};
   GXValidFnc[111]={lvl:273,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:105,gxgrid:this.Grid1Container,fnc:this.Valid_Categoriavalordesconto3,isvalid:null,rgrid:[],fld:"CATEGORIAVALORDESCONTO3",gxz:"Z10352CategoriaValorDesconto3",gxold:"O10352CategoriaValorDesconto3",gxvar:"A10352CategoriaValorDesconto3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10352CategoriaValorDesconto3=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10352CategoriaValorDesconto3=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CATEGORIAVALORDESCONTO3",row || gx.fn.currentGridRowImpl(105),gx.O.A10352CategoriaValorDesconto3,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10352CategoriaValorDesconto3=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CATEGORIAVALORDESCONTO3",row || gx.fn.currentGridRowImpl(105),'.',',')},nac:gx.falseFn};
   GXValidFnc[112]={lvl:273,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:1,grid:105,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIAVALORUSUARIOALT",gxz:"Z2619CategoriaValorUsuarioAlt",gxold:"O2619CategoriaValorUsuarioAlt",gxvar:"A2619CategoriaValorUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2619CategoriaValorUsuarioAlt=Value},v2z:function(Value){gx.O.Z2619CategoriaValorUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("CATEGORIAVALORUSUARIOALT",row || gx.fn.currentGridRowImpl(105),gx.O.A2619CategoriaValorUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2619CategoriaValorUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("CATEGORIAVALORUSUARIOALT",row || gx.fn.currentGridRowImpl(105))},nac:gx.falseFn};
   GXValidFnc[113]={lvl:273,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:1,grid:105,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIAVALORDATAHORAALT",gxz:"Z2620CategoriaValorDataHoraAlt",gxold:"O2620CategoriaValorDataHoraAlt",gxvar:"A2620CategoriaValorDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2620CategoriaValorDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2620CategoriaValorDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CATEGORIAVALORDATAHORAALT",row || gx.fn.currentGridRowImpl(105),gx.O.A2620CategoriaValorDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2620CategoriaValorDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CATEGORIAVALORDATAHORAALT",row || gx.fn.currentGridRowImpl(105))},nac:gx.falseFn};
   GXValidFnc[114]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[115]={fld:"TAB3",grid:0};
   GXValidFnc[118]={fld:"DIV3", format:2,grid:0};
   GXValidFnc[120]={lvl:341,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:119,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_341",gxz:"ZnRcdDeleted_341",gxold:"OnRcdDeleted_341",gxvar:"nRcdDeleted_341",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_341=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_341=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_341",row || gx.fn.currentGridRowImpl(119),gx.O.nRcdDeleted_341,0)},c2v:function(){gx.O.nRcdDeleted_341=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_341",row || gx.fn.currentGridRowImpl(119),'.')},nac:gx.falseFn};
   GXValidFnc[121]={lvl:341,type:"date",len:10,dec:0,sign:false,ro:0,isacc:1,grid:119,gxgrid:this.Grid2Container,fnc:this.Valid_Categoriadependentedata,isvalid:null,rgrid:[],fld:"CATEGORIADEPENDENTEDATA",gxz:"Z3124CategoriaDependenteData",gxold:"O3124CategoriaDependenteData",gxvar:"A3124CategoriaDependenteData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3124CategoriaDependenteData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3124CategoriaDependenteData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CATEGORIADEPENDENTEDATA",row || gx.fn.currentGridRowImpl(119),gx.O.A3124CategoriaDependenteData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3124CategoriaDependenteData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CATEGORIADEPENDENTEDATA",row || gx.fn.currentGridRowImpl(119))},nac:gx.falseFn};
   GXValidFnc[122]={lvl:341,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,isacc:1,grid:119,gxgrid:this.Grid2Container,fnc:this.Valid_Categoriadependenteidademax,isvalid:null,rgrid:[],fld:"CATEGORIADEPENDENTEIDADEMAX",gxz:"Z3125CategoriaDependenteIdadeMax",gxold:"O3125CategoriaDependenteIdadeMax",gxvar:"A3125CategoriaDependenteIdadeMax",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3125CategoriaDependenteIdadeMax=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3125CategoriaDependenteIdadeMax=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CATEGORIADEPENDENTEIDADEMAX",row || gx.fn.currentGridRowImpl(119),gx.O.A3125CategoriaDependenteIdadeMax,0)},c2v:function(){gx.O.A3125CategoriaDependenteIdadeMax=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CATEGORIADEPENDENTEIDADEMAX",row || gx.fn.currentGridRowImpl(119),'.')},nac:gx.falseFn};
   GXValidFnc[123]={lvl:341,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:119,gxgrid:this.Grid2Container,fnc:this.Valid_Categoriadependentevalor,isvalid:null,rgrid:[],fld:"CATEGORIADEPENDENTEVALOR",gxz:"Z3126CategoriaDependenteValor",gxold:"O3126CategoriaDependenteValor",gxvar:"A3126CategoriaDependenteValor",ucs:[],op:[],ip:[123,122,121,97,91,85,74,69,64,58,38,22,14],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3126CategoriaDependenteValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3126CategoriaDependenteValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CATEGORIADEPENDENTEVALOR",row || gx.fn.currentGridRowImpl(119),gx.O.A3126CategoriaDependenteValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3126CategoriaDependenteValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CATEGORIADEPENDENTEVALOR",row || gx.fn.currentGridRowImpl(119),'.',',')},nac:gx.falseFn};
   GXValidFnc[124]={lvl:341,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:119,gxgrid:this.Grid2Container,fnc:this.Valid_Categoriadependentevalor2,isvalid:null,rgrid:[],fld:"CATEGORIADEPENDENTEVALOR2",gxz:"Z10748CategoriaDependenteValor2",gxold:"O10748CategoriaDependenteValor2",gxvar:"A10748CategoriaDependenteValor2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10748CategoriaDependenteValor2=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10748CategoriaDependenteValor2=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CATEGORIADEPENDENTEVALOR2",row || gx.fn.currentGridRowImpl(119),gx.O.A10748CategoriaDependenteValor2,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10748CategoriaDependenteValor2=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CATEGORIADEPENDENTEVALOR2",row || gx.fn.currentGridRowImpl(119),'.',',')},nac:gx.falseFn};
   GXValidFnc[125]={lvl:341,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:1,grid:119,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIADEPENDENTEUSUARIOALT",gxz:"Z3127CategoriaDependenteUsuarioAlt",gxold:"O3127CategoriaDependenteUsuarioAlt",gxvar:"A3127CategoriaDependenteUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3127CategoriaDependenteUsuarioAlt=Value},v2z:function(Value){gx.O.Z3127CategoriaDependenteUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("CATEGORIADEPENDENTEUSUARIOALT",row || gx.fn.currentGridRowImpl(119),gx.O.A3127CategoriaDependenteUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3127CategoriaDependenteUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("CATEGORIADEPENDENTEUSUARIOALT",row || gx.fn.currentGridRowImpl(119))},nac:gx.falseFn};
   GXValidFnc[126]={lvl:341,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:1,grid:119,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIADEPENDENTEDATAHORAALT",gxz:"Z3128CategoriaDependenteDataHoraAlt",gxold:"O3128CategoriaDependenteDataHoraAlt",gxvar:"A3128CategoriaDependenteDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3128CategoriaDependenteDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3128CategoriaDependenteDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CATEGORIADEPENDENTEDATAHORAALT",row || gx.fn.currentGridRowImpl(119),gx.O.A3128CategoriaDependenteDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3128CategoriaDependenteDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CATEGORIADEPENDENTEDATAHORAALT",row || gx.fn.currentGridRowImpl(119))},nac:gx.falseFn};
   GXValidFnc[127]={fld:"DIV4", format:2,grid:0};
   GXValidFnc[128]={fld:"TAB4",grid:0};
   GXValidFnc[131]={fld:"DIV5", format:2,grid:0};
   GXValidFnc[133]={lvl:609,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:132,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_609",gxz:"ZnRcdDeleted_609",gxold:"OnRcdDeleted_609",gxvar:"nRcdDeleted_609",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_609=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_609=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_609",row || gx.fn.currentGridRowImpl(132),gx.O.nRcdDeleted_609,0)},c2v:function(){gx.O.nRcdDeleted_609=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_609",row || gx.fn.currentGridRowImpl(132),'.')},nac:gx.falseFn};
   GXValidFnc[134]={lvl:609,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,isacc:1,grid:132,gxgrid:this.Grid3Container,fnc:this.Valid_Categoriagrauparentescoid,isvalid:null,rgrid:[],fld:"CATEGORIAGRAUPARENTESCOID",gxz:"Z8158CategoriaGrauParentescoId",gxold:"O8158CategoriaGrauParentescoId",gxvar:"A8158CategoriaGrauParentescoId",ucs:[],op:[135],ip:[135,134],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8158CategoriaGrauParentescoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8158CategoriaGrauParentescoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CATEGORIAGRAUPARENTESCOID",row || gx.fn.currentGridRowImpl(132),gx.O.A8158CategoriaGrauParentescoId,0)},c2v:function(){gx.O.A8158CategoriaGrauParentescoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CATEGORIAGRAUPARENTESCOID",row || gx.fn.currentGridRowImpl(132),'.')},nac:gx.falseFn};
   GXValidFnc[135]={lvl:609,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:1,grid:132,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIAGRAUPARENTESCODESC",gxz:"Z8154CategoriaGrauParentescoDesc",gxold:"O8154CategoriaGrauParentescoDesc",gxvar:"A8154CategoriaGrauParentescoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8154CategoriaGrauParentescoDesc=Value},v2z:function(Value){gx.O.Z8154CategoriaGrauParentescoDesc=Value},v2c:function(row){gx.fn.setGridControlValue("CATEGORIAGRAUPARENTESCODESC",row || gx.fn.currentGridRowImpl(132),gx.O.A8154CategoriaGrauParentescoDesc,0)},c2v:function(){gx.O.A8154CategoriaGrauParentescoDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("CATEGORIAGRAUPARENTESCODESC",row || gx.fn.currentGridRowImpl(132))},nac:gx.falseFn};
   GXValidFnc[136]={lvl:609,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:1,grid:132,gxgrid:this.Grid3Container,fnc:this.Valid_Categoriagrauparentescoidadema,isvalid:null,rgrid:[],fld:"CATEGORIAGRAUPARENTESCOIDADEMA",gxz:"Z8155CategoriaGrauParentescoIdadeMa",gxold:"O8155CategoriaGrauParentescoIdadeMa",gxvar:"A8155CategoriaGrauParentescoIdadeMa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8155CategoriaGrauParentescoIdadeMa=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8155CategoriaGrauParentescoIdadeMa=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CATEGORIAGRAUPARENTESCOIDADEMA",row || gx.fn.currentGridRowImpl(132),gx.O.A8155CategoriaGrauParentescoIdadeMa,0)},c2v:function(){gx.O.A8155CategoriaGrauParentescoIdadeMa=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CATEGORIAGRAUPARENTESCOIDADEMA",row || gx.fn.currentGridRowImpl(132),'.')},nac:gx.falseFn};
   GXValidFnc[137]={lvl:609,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:1,grid:132,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIAGRAUPARENTESCOUSUARIO",gxz:"Z8156CategoriaGrauParentescoUsuario",gxold:"O8156CategoriaGrauParentescoUsuario",gxvar:"A8156CategoriaGrauParentescoUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8156CategoriaGrauParentescoUsuario=Value},v2z:function(Value){gx.O.Z8156CategoriaGrauParentescoUsuario=Value},v2c:function(row){gx.fn.setGridControlValue("CATEGORIAGRAUPARENTESCOUSUARIO",row || gx.fn.currentGridRowImpl(132),gx.O.A8156CategoriaGrauParentescoUsuario,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8156CategoriaGrauParentescoUsuario=this.val()},val:function(row){return gx.fn.getGridControlValue("CATEGORIAGRAUPARENTESCOUSUARIO",row || gx.fn.currentGridRowImpl(132))},nac:gx.falseFn};
   GXValidFnc[138]={lvl:609,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:1,grid:132,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIAGRAUPARENTESCODATAHOR",gxz:"Z8157CategoriaGrauParentescoDataHor",gxold:"O8157CategoriaGrauParentescoDataHor",gxvar:"A8157CategoriaGrauParentescoDataHor",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8157CategoriaGrauParentescoDataHor=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8157CategoriaGrauParentescoDataHor=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CATEGORIAGRAUPARENTESCODATAHOR",row || gx.fn.currentGridRowImpl(132),gx.O.A8157CategoriaGrauParentescoDataHor,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8157CategoriaGrauParentescoDataHor=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CATEGORIAGRAUPARENTESCODATAHOR",row || gx.fn.currentGridRowImpl(132))},nac:gx.falseFn};
   GXValidFnc[139]={fld:"DIV6", format:2,grid:0};
   GXValidFnc[142]={fld:"TABLE22",grid:0};
   GXValidFnc[145]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[147]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIAUSUARIOALT",gxz:"Z2616CategoriaUsuarioAlt",gxold:"O2616CategoriaUsuarioAlt",gxvar:"A2616CategoriaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2616CategoriaUsuarioAlt=Value},v2z:function(Value){gx.O.Z2616CategoriaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CATEGORIAUSUARIOALT",gx.O.A2616CategoriaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2616CategoriaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CATEGORIAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 147 , function() {
   });
   GXValidFnc[149]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIADATAHORAALT",gxz:"Z2617CategoriaDataHoraAlt",gxold:"O2617CategoriaDataHoraAlt",gxvar:"A2617CategoriaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2617CategoriaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2617CategoriaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CATEGORIADATAHORAALT",gx.O.A2617CategoriaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2617CategoriaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CATEGORIADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 149 , function() {
   });
   GXValidFnc[156]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV28ChamaOnBlurMascara",gxold:"OV28ChamaOnBlurMascara",gxvar:"AV28ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV28ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV28ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV28ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[159]={fld:"JS", format:2,grid:0};
   GXValidFnc[160]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV41AcessoSistemaSequencia",gxold:"OV41AcessoSistemaSequencia",gxvar:"AV41AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV41AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV41AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[168]={fld:"BTNHELP",grid:0};
   GXValidFnc[169]={fld:"JSDESC", format:2,grid:0};
   GXValidFnc[170]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Tipocategoriaempresaid,isvalid:null,rgrid:[],fld:"vTIPOCATEGORIAEMPRESAID",gxz:"ZV22TipoCategoriaEmpresaId",gxold:"OV22TipoCategoriaEmpresaId",gxvar:"AV22TipoCategoriaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22TipoCategoriaEmpresaId=Value},v2z:function(Value){gx.O.ZV22TipoCategoriaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTIPOCATEGORIAEMPRESAID",gx.O.AV22TipoCategoriaEmpresaId,0)},c2v:function(){gx.O.AV22TipoCategoriaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCATEGORIAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[171]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Categoriaccustoempid,isvalid:null,rgrid:[],fld:"vCATEGORIACCUSTOEMPID",gxz:"ZV23CategoriaCCustoEmpId",gxold:"OV23CategoriaCCustoEmpId",gxvar:"AV23CategoriaCCustoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23CategoriaCCustoEmpId=Value},v2z:function(Value){gx.O.ZV23CategoriaCCustoEmpId=Value},v2c:function(){gx.fn.setControlValue("vCATEGORIACCUSTOEMPID",gx.O.AV23CategoriaCCustoEmpId,0)},c2v:function(){gx.O.AV23CategoriaCCustoEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCATEGORIACCUSTOEMPID")},nac:gx.falseFn};
   GXValidFnc[172]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Categoriaccontabilempid,isvalid:null,rgrid:[],fld:"vCATEGORIACCONTABILEMPID",gxz:"ZV25CategoriaCContabilEmpId",gxold:"OV25CategoriaCContabilEmpId",gxvar:"AV25CategoriaCContabilEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25CategoriaCContabilEmpId=Value},v2z:function(Value){gx.O.ZV25CategoriaCContabilEmpId=Value},v2c:function(){gx.fn.setControlValue("vCATEGORIACCONTABILEMPID",gx.O.AV25CategoriaCContabilEmpId,0)},c2v:function(){gx.O.AV25CategoriaCContabilEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCATEGORIACCONTABILEMPID")},nac:gx.falseFn};
   GXValidFnc[173]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Categorianaturezaempid,isvalid:null,rgrid:[],fld:"vCATEGORIANATUREZAEMPID",gxz:"ZV24CategoriaNaturezaEmpId",gxold:"OV24CategoriaNaturezaEmpId",gxvar:"AV24CategoriaNaturezaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24CategoriaNaturezaEmpId=Value},v2z:function(Value){gx.O.ZV24CategoriaNaturezaEmpId=Value},v2c:function(){gx.fn.setControlValue("vCATEGORIANATUREZAEMPID",gx.O.AV24CategoriaNaturezaEmpId,0)},c2v:function(){gx.O.AV24CategoriaNaturezaEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCATEGORIANATUREZAEMPID")},nac:gx.falseFn};
   GXValidFnc[174]={fld:"PROMPT_2603",grid:272};
   GXValidFnc[175]={fld:"PROMPT_2607",grid:272};
   GXValidFnc[176]={fld:"PROMPT_2610",grid:272};
   this.A2622CategoriaId = 0 ;
   this.Z2622CategoriaId = 0 ;
   this.O2622CategoriaId = 0 ;
   this.A2604CategoriaSnCadDependente = "" ;
   this.Z2604CategoriaSnCadDependente = "" ;
   this.O2604CategoriaSnCadDependente = "" ;
   this.A2595CategoriaDescricao = "" ;
   this.Z2595CategoriaDescricao = "" ;
   this.O2595CategoriaDescricao = "" ;
   this.A3129CategoriaSnVlrDependente = "" ;
   this.Z3129CategoriaSnVlrDependente = "" ;
   this.O3129CategoriaSnVlrDependente = "" ;
   this.A2596CategoriaDescAbreviada = "" ;
   this.Z2596CategoriaDescAbreviada = "" ;
   this.O2596CategoriaDescAbreviada = "" ;
   this.A8078CategoriaVlrCotaAVista = 0 ;
   this.Z8078CategoriaVlrCotaAVista = 0 ;
   this.O8078CategoriaVlrCotaAVista = 0 ;
   this.A2597CategoriaTipoCobranca = "" ;
   this.Z2597CategoriaTipoCobranca = "" ;
   this.O2597CategoriaTipoCobranca = "" ;
   this.A8079CategoriaVlrCotaAPrazo = 0 ;
   this.Z8079CategoriaVlrCotaAPrazo = 0 ;
   this.O8079CategoriaVlrCotaAPrazo = 0 ;
   this.A8042CategoriaQtdeLimiteDepend = 0 ;
   this.Z8042CategoriaQtdeLimiteDepend = 0 ;
   this.O8042CategoriaQtdeLimiteDepend = 0 ;
   this.A2598CategoriaLimiteConvite = 0 ;
   this.Z2598CategoriaLimiteConvite = 0 ;
   this.O2598CategoriaLimiteConvite = 0 ;
   this.A2599CategoriaPrazoLimConvite = 0 ;
   this.Z2599CategoriaPrazoLimConvite = 0 ;
   this.O2599CategoriaPrazoLimConvite = 0 ;
   this.A2600CategoriaQtdePessoasConvite = 0 ;
   this.Z2600CategoriaQtdePessoasConvite = 0 ;
   this.O2600CategoriaQtdePessoasConvite = 0 ;
   this.A2601CategoriaDiasConsecutivosConv = 0 ;
   this.Z2601CategoriaDiasConsecutivosConv = 0 ;
   this.O2601CategoriaDiasConsecutivosConv = 0 ;
   this.A2603TipoCategoriaId = 0 ;
   this.Z2603TipoCategoriaId = 0 ;
   this.O2603TipoCategoriaId = 0 ;
   this.AV69TipoCategoriaDescricao = "" ;
   this.ZV69TipoCategoriaDescricao = "" ;
   this.OV69TipoCategoriaDescricao = "" ;
   this.A2605CategoriaDiaLimGerarMensMes = 0 ;
   this.Z2605CategoriaDiaLimGerarMensMes = 0 ;
   this.O2605CategoriaDiaLimGerarMensMes = 0 ;
   this.A2607CategoriaCCustoId = "" ;
   this.Z2607CategoriaCCustoId = "" ;
   this.O2607CategoriaCCustoId = "" ;
   this.AV64CCustoDescricao = "" ;
   this.ZV64CCustoDescricao = "" ;
   this.OV64CCustoDescricao = "" ;
   this.A2610CategoriaNaturezaId = "" ;
   this.Z2610CategoriaNaturezaId = "" ;
   this.O2610CategoriaNaturezaId = "" ;
   this.AV67NaturezaDescricao = "" ;
   this.ZV67NaturezaDescricao = "" ;
   this.OV67NaturezaDescricao = "" ;
   this.A2613CategoriaCContabilId = "" ;
   this.Z2613CategoriaCContabilId = "" ;
   this.O2613CategoriaCContabilId = "" ;
   this.AV68CContabilDescricao = "" ;
   this.ZV68CContabilDescricao = "" ;
   this.OV68CContabilDescricao = "" ;
   this.AV38CategoriaCContabilTradutor = 0 ;
   this.ZV38CategoriaCContabilTradutor = 0 ;
   this.OV38CategoriaCContabilTradutor = 0 ;
   this.ZnRcdDeleted_273 = 0 ;
   this.OnRcdDeleted_273 = 0 ;
   this.Z2624CategoriaValorData = gx.date.nullDate() ;
   this.O2624CategoriaValorData = gx.date.nullDate() ;
   this.Z2618CategoriaValorMensalidade = 0 ;
   this.O2618CategoriaValorMensalidade = 0 ;
   this.Z9802CategoriaValorDesconto = 0 ;
   this.O9802CategoriaValorDesconto = 0 ;
   this.Z10351CategoriaValorDesconto2 = 0 ;
   this.O10351CategoriaValorDesconto2 = 0 ;
   this.Z10352CategoriaValorDesconto3 = 0 ;
   this.O10352CategoriaValorDesconto3 = 0 ;
   this.Z2619CategoriaValorUsuarioAlt = "" ;
   this.O2619CategoriaValorUsuarioAlt = "" ;
   this.Z2620CategoriaValorDataHoraAlt = gx.date.nullDate() ;
   this.O2620CategoriaValorDataHoraAlt = gx.date.nullDate() ;
   this.ZnRcdDeleted_341 = 0 ;
   this.OnRcdDeleted_341 = 0 ;
   this.Z3124CategoriaDependenteData = gx.date.nullDate() ;
   this.O3124CategoriaDependenteData = gx.date.nullDate() ;
   this.Z3125CategoriaDependenteIdadeMax = 0 ;
   this.O3125CategoriaDependenteIdadeMax = 0 ;
   this.Z3126CategoriaDependenteValor = 0 ;
   this.O3126CategoriaDependenteValor = 0 ;
   this.Z10748CategoriaDependenteValor2 = 0 ;
   this.O10748CategoriaDependenteValor2 = 0 ;
   this.Z3127CategoriaDependenteUsuarioAlt = "" ;
   this.O3127CategoriaDependenteUsuarioAlt = "" ;
   this.Z3128CategoriaDependenteDataHoraAlt = gx.date.nullDate() ;
   this.O3128CategoriaDependenteDataHoraAlt = gx.date.nullDate() ;
   this.ZnRcdDeleted_609 = 0 ;
   this.OnRcdDeleted_609 = 0 ;
   this.Z8158CategoriaGrauParentescoId = 0 ;
   this.O8158CategoriaGrauParentescoId = 0 ;
   this.Z8154CategoriaGrauParentescoDesc = "" ;
   this.O8154CategoriaGrauParentescoDesc = "" ;
   this.Z8155CategoriaGrauParentescoIdadeMa = 0 ;
   this.O8155CategoriaGrauParentescoIdadeMa = 0 ;
   this.Z8156CategoriaGrauParentescoUsuario = "" ;
   this.O8156CategoriaGrauParentescoUsuario = "" ;
   this.Z8157CategoriaGrauParentescoDataHor = gx.date.nullDate() ;
   this.O8157CategoriaGrauParentescoDataHor = gx.date.nullDate() ;
   this.A2616CategoriaUsuarioAlt = "" ;
   this.Z2616CategoriaUsuarioAlt = "" ;
   this.O2616CategoriaUsuarioAlt = "" ;
   this.A2617CategoriaDataHoraAlt = gx.date.nullDate() ;
   this.Z2617CategoriaDataHoraAlt = gx.date.nullDate() ;
   this.O2617CategoriaDataHoraAlt = gx.date.nullDate() ;
   this.AV28ChamaOnBlurMascara = "" ;
   this.ZV28ChamaOnBlurMascara = "" ;
   this.OV28ChamaOnBlurMascara = "" ;
   this.AV41AcessoSistemaSequencia = 0 ;
   this.ZV41AcessoSistemaSequencia = 0 ;
   this.OV41AcessoSistemaSequencia = 0 ;
   this.AV22TipoCategoriaEmpresaId = "" ;
   this.ZV22TipoCategoriaEmpresaId = "" ;
   this.OV22TipoCategoriaEmpresaId = "" ;
   this.AV23CategoriaCCustoEmpId = "" ;
   this.ZV23CategoriaCCustoEmpId = "" ;
   this.OV23CategoriaCCustoEmpId = "" ;
   this.AV25CategoriaCContabilEmpId = "" ;
   this.ZV25CategoriaCContabilEmpId = "" ;
   this.OV25CategoriaCContabilEmpId = "" ;
   this.AV24CategoriaNaturezaEmpId = "" ;
   this.ZV24CategoriaNaturezaEmpId = "" ;
   this.OV24CategoriaNaturezaEmpId = "" ;
   this.A8158CategoriaGrauParentescoId = 0 ;
   this.A8156CategoriaGrauParentescoUsuario = "" ;
   this.A8157CategoriaGrauParentescoDataHor = gx.date.nullDate() ;
   this.A8154CategoriaGrauParentescoDesc = "" ;
   this.A8155CategoriaGrauParentescoIdadeMa = 0 ;
   this.A3124CategoriaDependenteData = gx.date.nullDate() ;
   this.A3125CategoriaDependenteIdadeMax = 0 ;
   this.A3127CategoriaDependenteUsuarioAlt = "" ;
   this.A3128CategoriaDependenteDataHoraAlt = gx.date.nullDate() ;
   this.A3126CategoriaDependenteValor = 0 ;
   this.A10748CategoriaDependenteValor2 = 0 ;
   this.A2624CategoriaValorData = gx.date.nullDate() ;
   this.A2619CategoriaValorUsuarioAlt = "" ;
   this.A2620CategoriaValorDataHoraAlt = gx.date.nullDate() ;
   this.A2618CategoriaValorMensalidade = 0 ;
   this.A9802CategoriaValorDesconto = 0 ;
   this.A10351CategoriaValorDesconto2 = 0 ;
   this.A10352CategoriaValorDesconto3 = 0 ;
   this.AV7UsrCod = "" ;
   this.AV12EmpresaLogadaID = "" ;
   this.AV16Sistema = "" ;
   this.AV70Pgmname = "" ;
   this.AV71Pgmdesc = "" ;
   this.AV13MsgErro = "" ;
   this.AV41AcessoSistemaSequencia = 0 ;
   this.AV19Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV34ClassificacaoIdParm = "" ;
   this.AV43CobrarConvSocio = "" ;
   this.AV45IntFinCbl = "" ;
   this.AV15Tabela = "" ;
   this.AV21CategoriaEmpresaId = "" ;
   this.AV22TipoCategoriaEmpresaId = "" ;
   this.AV23CategoriaCCustoEmpId = "" ;
   this.AV24CategoriaNaturezaEmpId = "" ;
   this.AV25CategoriaCContabilEmpId = "" ;
   this.AV42SnExiste = "" ;
   this.AV32SnAnaCCus = "" ;
   this.AV31SnAnaNat = "" ;
   this.AV30SnAnaCCon = "" ;
   this.AV10ret = 0 ;
   this.AV20CategoriaId = 0 ;
   this.AV40SnEmUso = "" ;
   this.A2621CategoriaEmpresaId = "" ;
   this.A2622CategoriaId = 0 ;
   this.A2602TipoCategoriaEmpresaId = "" ;
   this.A2606CategoriaCCustoEmpId = "" ;
   this.A2609CategoriaNaturezaEmpId = "" ;
   this.A2612CategoriaCContabilEmpId = "" ;
   this.AV64CCustoDescricao = "" ;
   this.AV67NaturezaDescricao = "" ;
   this.AV68CContabilDescricao = "" ;
   this.AV69TipoCategoriaDescricao = "" ;
   this.A2596CategoriaDescAbreviada = "" ;
   this.AV60CategoriaLimiteConvite = 0 ;
   this.AV61CategoriaTipoCobranca = "" ;
   this.AV62CategoriaSnVlrDependente = "" ;
   this.AV26SnAlterou = "" ;
   this.A2595CategoriaDescricao = "" ;
   this.A2597CategoriaTipoCobranca = "" ;
   this.A8042CategoriaQtdeLimiteDepend = 0 ;
   this.A2598CategoriaLimiteConvite = 0 ;
   this.A2599CategoriaPrazoLimConvite = 0 ;
   this.A2600CategoriaQtdePessoasConvite = 0 ;
   this.A2601CategoriaDiasConsecutivosConv = 0 ;
   this.A2603TipoCategoriaId = 0 ;
   this.A2623TipoCategoriaDescricao = "" ;
   this.A2604CategoriaSnCadDependente = "" ;
   this.A2605CategoriaDiaLimGerarMensMes = 0 ;
   this.A2607CategoriaCCustoId = "" ;
   this.A2608CategoriaCCustoDescricao = "" ;
   this.A2610CategoriaNaturezaId = "" ;
   this.A2611CategoriaNaturezaDesc = "" ;
   this.A2613CategoriaCContabilId = "" ;
   this.A2614CategoriaCContabilDesc = "" ;
   this.A2615CategoriaCContabilTradutor = 0 ;
   this.A3129CategoriaSnVlrDependente = "" ;
   this.A8078CategoriaVlrCotaAVista = 0 ;
   this.A8079CategoriaVlrCotaAPrazo = 0 ;
   this.A2616CategoriaUsuarioAlt = "" ;
   this.A2617CategoriaDataHoraAlt = gx.date.nullDate() ;
   this.AV57Tab = [ ] ;
   this.Gx_mode = "" ;
   this.Events = {"e124q2_client": ["'FECHAR'", true] ,"e134q2_client": ["AFTER TRN", true] ,"e144q2_client": ["CATEGORIACCUSTOID.ISVALID", true] ,"e154q272_client": ["ENTER", true] ,"e164q272_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV20CategoriaId',fld:'vCATEGORIAID'},{av:'Gx_mode',fld:'vMODE'},{av:'AV40SnEmUso',fld:'vSNEMUSO'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV41AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV41AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["CATEGORIACCUSTOID.ISVALID"] = [[{av:'AV23CategoriaCCustoEmpId',fld:'vCATEGORIACCUSTOEMPID'},{av:'A2607CategoriaCCustoId',fld:'CATEGORIACCUSTOID'}],[{av:'AV64CCustoDescricao',fld:'vCCUSTODESCRICAO'}]];
   this.setPrompt("PROMPTCCONTABIL", [97]);
   this.setPrompt("PROMPT_2603", [74]);
   this.setPrompt("PROMPT_2607", [85]);
   this.setPrompt("PROMPT_2610", [91]);
   this.setPrompt("PROMPT_8158", [134]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV20CategoriaId", "vCATEGORIAID", 0, "int");
   this.setVCMap("AV21CategoriaEmpresaId", "vCATEGORIAEMPRESAID", 0, "char");
   this.setVCMap("A2621CategoriaEmpresaId", "CATEGORIAEMPRESAID", 0, "char");
   this.setVCMap("A2602TipoCategoriaEmpresaId", "TIPOCATEGORIAEMPRESAID", 0, "char");
   this.setVCMap("A2606CategoriaCCustoEmpId", "CATEGORIACCUSTOEMPID", 0, "char");
   this.setVCMap("A2609CategoriaNaturezaEmpId", "CATEGORIANATUREZAEMPID", 0, "char");
   this.setVCMap("A2612CategoriaCContabilEmpId", "CATEGORIACCONTABILEMPID", 0, "char");
   this.setVCMap("AV34ClassificacaoIdParm", "vCLASSIFICACAOIDPARM", 0, "char");
   this.setVCMap("AV42SnExiste", "vSNEXISTE", 0, "char");
   this.setVCMap("AV40SnEmUso", "vSNEMUSO", 0, "char");
   this.setVCMap("AV60CategoriaLimiteConvite", "vCATEGORIALIMITECONVITE", 0, "int");
   this.setVCMap("AV43CobrarConvSocio", "vCOBRARCONVSOCIO", 0, "char");
   this.setVCMap("AV61CategoriaTipoCobranca", "vCATEGORIATIPOCOBRANCA", 0, "char");
   this.setVCMap("AV32SnAnaCCus", "vSNANACCUS", 0, "char");
   this.setVCMap("AV31SnAnaNat", "vSNANANAT", 0, "char");
   this.setVCMap("AV45IntFinCbl", "vINTFINCBL", 0, "char");
   this.setVCMap("AV30SnAnaCCon", "vSNANACCON", 0, "char");
   this.setVCMap("AV10ret", "vRET", 0, "int");
   this.setVCMap("AV62CategoriaSnVlrDependente", "vCATEGORIASNVLRDEPENDENTE", 0, "char");
   this.setVCMap("AV26SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A2623TipoCategoriaDescricao", "TIPOCATEGORIADESCRICAO", 0, "svchar");
   this.setVCMap("A2608CategoriaCCustoDescricao", "CATEGORIACCUSTODESCRICAO", 0, "svchar");
   this.setVCMap("A2611CategoriaNaturezaDesc", "CATEGORIANATUREZADESC", 0, "svchar");
   this.setVCMap("A2614CategoriaCContabilDesc", "CATEGORIACCONTABILDESC", 0, "svchar");
   this.setVCMap("A2615CategoriaCContabilTradutor", "CATEGORIACCONTABILTRADUTOR", 0, "int");
   this.setVCMap("AV71Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV70Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 272 ]= ["O8079CategoriaVlrCotaAPrazo","O8078CategoriaVlrCotaAVista","O8042CategoriaQtdeLimiteDepend","O3129CategoriaSnVlrDependente","O2604CategoriaSnCadDependente","O2613CategoriaCContabilId","O2610CategoriaNaturezaId","O2607CategoriaCCustoId","O2605CategoriaDiaLimGerarMensMes","O2603TipoCategoriaId","O2601CategoriaDiasConsecutivosConv","O2600CategoriaQtdePessoasConvite","O2599CategoriaPrazoLimConvite","O2598CategoriaLimiteConvite","O2597CategoriaTipoCobranca","O2596CategoriaDescAbreviada","O2595CategoriaDescricao"] ;
   this.LvlOlds[ 273 ]= ["O8079CategoriaVlrCotaAPrazo","O8078CategoriaVlrCotaAVista","O8042CategoriaQtdeLimiteDepend","O3129CategoriaSnVlrDependente","O2604CategoriaSnCadDependente","O2613CategoriaCContabilId","O2610CategoriaNaturezaId","O2607CategoriaCCustoId","O2605CategoriaDiaLimGerarMensMes","O2603TipoCategoriaId","O2601CategoriaDiasConsecutivosConv","O2600CategoriaQtdePessoasConvite","O2599CategoriaPrazoLimConvite","O2598CategoriaLimiteConvite","O2597CategoriaTipoCobranca","O2596CategoriaDescAbreviada","O2595CategoriaDescricao","O2618CategoriaValorMensalidade","O10352CategoriaValorDesconto3","O10351CategoriaValorDesconto2","O9802CategoriaValorDesconto","O2624CategoriaValorData"] ;
   this.LvlOlds[ 341 ]= ["O8079CategoriaVlrCotaAPrazo","O8078CategoriaVlrCotaAVista","O8042CategoriaQtdeLimiteDepend","O3129CategoriaSnVlrDependente","O2604CategoriaSnCadDependente","O2613CategoriaCContabilId","O2610CategoriaNaturezaId","O2607CategoriaCCustoId","O2605CategoriaDiaLimGerarMensMes","O2603TipoCategoriaId","O2601CategoriaDiasConsecutivosConv","O2600CategoriaQtdePessoasConvite","O2599CategoriaPrazoLimConvite","O2598CategoriaLimiteConvite","O2597CategoriaTipoCobranca","O2596CategoriaDescAbreviada","O2595CategoriaDescricao","O10748CategoriaDependenteValor2","O3126CategoriaDependenteValor","O3125CategoriaDependenteIdadeMax","O3124CategoriaDependenteData"] ;
   this.LvlOlds[ 609 ]= ["O8155CategoriaGrauParentescoIdadeMa","O8158CategoriaGrauParentescoId","O8079CategoriaVlrCotaAPrazo","O8078CategoriaVlrCotaAVista","O8042CategoriaQtdeLimiteDepend","O3129CategoriaSnVlrDependente","O2604CategoriaSnCadDependente","O2613CategoriaCContabilId","O2610CategoriaNaturezaId","O2607CategoriaCCustoId","O2605CategoriaDiaLimGerarMensMes","O2603TipoCategoriaId","O2601CategoriaDiasConsecutivosConv","O2600CategoriaQtdePessoasConvite","O2599CategoriaPrazoLimConvite","O2598CategoriaLimiteConvite","O2597CategoriaTipoCobranca","O2596CategoriaDescAbreviada","O2595CategoriaDescricao"] ;
});
gx.setParentObj(new tcategoria());
