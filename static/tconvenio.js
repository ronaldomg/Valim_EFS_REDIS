/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:37:56.78
*/
gx.evt.autoSkip = false;
gx.define('tconvenio', false, function () {
   this.ServerClass =  "tconvenio" ;
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
      this.AV20ConvenioId=gx.fn.getIntegerValue("vCONVENIOID",'.') ;
      this.AV14EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A1680ConvenioEmpresaId=gx.fn.getControlValue("CONVENIOEMPRESAID") ;
      this.A2143ConvenioQtdeFornec=gx.fn.getIntegerValue("CONVENIOQTDEFORNEC",'.') ;
      this.AV52snUsuario=gx.fn.getControlValue("vSNUSUARIO") ;
      this.AV53SnErroEmail=gx.fn.getControlValue("vSNERROEMAIL") ;
      this.AV67snUsuario1=gx.fn.getControlValue("vSNUSUARIO1") ;
      this.AV57ErrDsc=gx.fn.getControlValue("vERRDSC") ;
      this.AV10ret=gx.fn.getIntegerValue("vRET",'.') ;
      this.AV54SnFornecedor=gx.fn.getControlValue("vSNFORNECEDOR") ;
      this.AV38snExiste=gx.fn.getControlValue("vSNEXISTE") ;
      this.AV23SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV76Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV75Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV21EmpresaPadraoCliFor=gx.fn.getControlValue("vEMPRESAPADRAOCLIFOR") ;
      this.A2201ConvenioFornecedorPessoaEmpId=gx.fn.getControlValue("CONVENIOFORNECEDORPESSOAEMPID") ;
      this.A446PessoaFornecedor=gx.fn.getControlValue("PESSOAFORNECEDOR") ;
      this.AV40SnAlterouD=gx.fn.getControlValue("vSNALTEROUD") ;
      this.A2101ConvenioFornecedorUsuarioAlt=gx.fn.getControlValue("CONVENIOFORNECEDORUSUARIOALT") ;
      this.A2102ConvenioFornecedorDataHoraAlt=gx.fn.getDateTimeValue("CONVENIOFORNECEDORDATAHORAALT") ;
      this.AV22EmpresaPadraoCaixaBanco=gx.fn.getControlValue("vEMPRESAPADRAOCAIXABANCO") ;
      this.A2110ConvenioCaixaBancoEmpId=gx.fn.getControlValue("CONVENIOCAIXABANCOEMPID") ;
      this.AV41SnAlterouT=gx.fn.getControlValue("vSNALTEROUT") ;
      this.A2113ConvenioCaixaBancoUsuarioAlt=gx.fn.getControlValue("CONVENIOCAIXABANCOUSUARIOALT") ;
      this.A2114ConvenioCaixaBancoDataHoraAlt=gx.fn.getDateTimeValue("CONVENIOCAIXABANCODATAHORAALT") ;
      this.AV42SnAlterouQ=gx.fn.getControlValue("vSNALTEROUQ") ;
      this.A2477ConvenioUsuarioUsuarioAlt=gx.fn.getControlValue("CONVENIOUSUARIOUSUARIOALT") ;
      this.A2478ConvenioUsuarioDataHoraAlt=gx.fn.getDateTimeValue("CONVENIOUSUARIODATAHORAALT") ;
   };
   this.Valid_Convenioid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Convenioid",["gx.O.Gx_mode", "gx.O.A1680ConvenioEmpresaId", "gx.O.A1681ConvenioId", "gx.O.A2143ConvenioQtdeFornec"],["A2143ConvenioQtdeFornec"]);
      return true;
   }
   this.Valid_Conveniodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONVENIODESCRICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Conveniosndespbancaria=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONVENIOSNDESPBANCARIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Convenionumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONVENIONUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Conveniosnlicitacao=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Conveniosnlicitacao",["gx.O.A2086ConvenioSnLicitacao", "gx.O.A2143ConvenioQtdeFornec", "gx.O.AV54SnFornecedor"],["AV54SnFornecedor"]);
      try {
         if ( this.A2086ConvenioSnLicitacao == "N" && this.A2143ConvenioQtdeFornec >= 1 )
         {
            this.AV54SnFornecedor =  "S"  ;
         }
         else
         {
            if ( this.A2143ConvenioQtdeFornec == 0 )
            {
               this.AV54SnFornecedor =  "N"  ;
            }
         }
      }
      catch(e){}
      return true;
   }
   this.Valid_Convenioexercicio=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONVENIOEXERCICIO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Convenioativo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Convenioativo",["gx.O.A1681ConvenioId", "gx.O.A2183ConvenioAtivo", "gx.O.AV57ErrDsc"],["AV57ErrDsc"]);
      return true;
   }
   this.Valid_Conveniotipoconvenio=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONVENIOTIPOCONVENIO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Conveniovencimento=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Conveniovencimento",["gx.O.AV14EmpresaPadrao", "gx.O.A1681ConvenioId", "gx.O.AV38snExiste", "gx.O.AV53SnErroEmail", 'gx.date.urlDate(gx.O.A2087ConvenioVencimento,"DMY4")', "gx.O.AV52snUsuario", "gx.O.AV67snUsuario1"],["AV52snUsuario", "AV67snUsuario1"]);
      return true;
   }
   this.Valid_Convenioqtdediasemail=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Convenioqtdediasemail",["gx.O.A2082ConvenioDescricao", "gx.O.A2083ConvenioNumero", "gx.O.A2084ConvenioExercicio", "gx.O.A2080ConvenioTipoConvenio", "gx.O.A2088ConvenioQtdeDiasEmail", 'gx.date.urlDate(gx.O.A2087ConvenioVencimento,"DMY4")', "gx.O.A2086ConvenioSnLicitacao", "gx.O.A2143ConvenioQtdeFornec", "gx.O.AV52snUsuario", "gx.O.AV53SnErroEmail", "gx.O.AV67snUsuario1", "gx.O.A2183ConvenioAtivo", "gx.O.AV57ErrDsc", "gx.O.AV10ret"],["AV10ret"]);
      try {
         if ( (""==this.A2082ConvenioDescricao) && gx.ajax.aggSelInteger("vRET","4",["gx.O.A2082ConvenioDescricao","gx.O.A2083ConvenioNumero","gx.O.A2084ConvenioExercicio","gx.O.A2080ConvenioTipoConvenio","gx.O.A2088ConvenioQtdeDiasEmail",'gx.date.urlDate(gx.O.A2087ConvenioVencimento,"DMY4")',"gx.O.A2086ConvenioSnLicitacao","gx.O.A2143ConvenioQtdeFornec","gx.O.AV52snUsuario","gx.O.AV53SnErroEmail","gx.O.AV67snUsuario1","gx.O.A2183ConvenioAtivo","gx.O.AV57ErrDsc"]) )
         {
            this.AV10ret = gx.num.trunc( 1 ,0) ;
         }
         else
         {
            if ( (""==this.A2083ConvenioNumero) && gx.ajax.aggSelInteger("vRET","4",["gx.O.A2082ConvenioDescricao","gx.O.A2083ConvenioNumero","gx.O.A2084ConvenioExercicio","gx.O.A2080ConvenioTipoConvenio","gx.O.A2088ConvenioQtdeDiasEmail",'gx.date.urlDate(gx.O.A2087ConvenioVencimento,"DMY4")',"gx.O.A2086ConvenioSnLicitacao","gx.O.A2143ConvenioQtdeFornec","gx.O.AV52snUsuario","gx.O.AV53SnErroEmail","gx.O.AV67snUsuario1","gx.O.A2183ConvenioAtivo","gx.O.AV57ErrDsc"]) )
            {
               this.AV10ret = gx.num.trunc( 1 ,0) ;
            }
            else
            {
               if ( (""==this.A2084ConvenioExercicio) && gx.ajax.aggSelInteger("vRET","4",["gx.O.A2082ConvenioDescricao","gx.O.A2083ConvenioNumero","gx.O.A2084ConvenioExercicio","gx.O.A2080ConvenioTipoConvenio","gx.O.A2088ConvenioQtdeDiasEmail",'gx.date.urlDate(gx.O.A2087ConvenioVencimento,"DMY4")',"gx.O.A2086ConvenioSnLicitacao","gx.O.A2143ConvenioQtdeFornec","gx.O.AV52snUsuario","gx.O.AV53SnErroEmail","gx.O.AV67snUsuario1","gx.O.A2183ConvenioAtivo","gx.O.AV57ErrDsc"]) )
               {
                  this.AV10ret = gx.num.trunc( 1 ,0) ;
               }
               else
               {
                  if ( (""==this.A2080ConvenioTipoConvenio) && gx.ajax.aggSelInteger("vRET","4",["gx.O.A2082ConvenioDescricao","gx.O.A2083ConvenioNumero","gx.O.A2084ConvenioExercicio","gx.O.A2080ConvenioTipoConvenio","gx.O.A2088ConvenioQtdeDiasEmail",'gx.date.urlDate(gx.O.A2087ConvenioVencimento,"DMY4")',"gx.O.A2086ConvenioSnLicitacao","gx.O.A2143ConvenioQtdeFornec","gx.O.AV52snUsuario","gx.O.AV53SnErroEmail","gx.O.AV67snUsuario1","gx.O.A2183ConvenioAtivo","gx.O.AV57ErrDsc"]) )
                  {
                     this.AV10ret = gx.num.trunc( 1 ,0) ;
                  }
                  else
                  {
                     if ( ! (0==this.A2088ConvenioQtdeDiasEmail) && (new gx.date.gxdate("").compare(this.A2087ConvenioVencimento)==0) && gx.ajax.aggSelInteger("vRET","4",["gx.O.A2082ConvenioDescricao","gx.O.A2083ConvenioNumero","gx.O.A2084ConvenioExercicio","gx.O.A2080ConvenioTipoConvenio","gx.O.A2088ConvenioQtdeDiasEmail",'gx.date.urlDate(gx.O.A2087ConvenioVencimento,"DMY4")',"gx.O.A2086ConvenioSnLicitacao","gx.O.A2143ConvenioQtdeFornec","gx.O.AV52snUsuario","gx.O.AV53SnErroEmail","gx.O.AV67snUsuario1","gx.O.A2183ConvenioAtivo","gx.O.AV57ErrDsc"]) )
                     {
                        this.AV10ret = gx.num.trunc( 1 ,0) ;
                     }
                     else
                     {
                        if ( this.A2086ConvenioSnLicitacao == "N" && this.A2143ConvenioQtdeFornec >= 1 && gx.ajax.aggSelInteger("vRET","4",["gx.O.A2082ConvenioDescricao","gx.O.A2083ConvenioNumero","gx.O.A2084ConvenioExercicio","gx.O.A2080ConvenioTipoConvenio","gx.O.A2088ConvenioQtdeDiasEmail",'gx.date.urlDate(gx.O.A2087ConvenioVencimento,"DMY4")',"gx.O.A2086ConvenioSnLicitacao","gx.O.A2143ConvenioQtdeFornec","gx.O.AV52snUsuario","gx.O.AV53SnErroEmail","gx.O.AV67snUsuario1","gx.O.A2183ConvenioAtivo","gx.O.AV57ErrDsc"]) )
                        {
                           this.AV10ret = gx.num.trunc( 1 ,0) ;
                        }
                        else
                        {
                           if ( this.Gx_mode == "INS" && this.AV52snUsuario == "N" && this.AV53SnErroEmail != "S" && ! (new gx.date.gxdate("").compare(this.A2087ConvenioVencimento)==0) && gx.ajax.aggSelInteger("vRET","4",["gx.O.A2082ConvenioDescricao","gx.O.A2083ConvenioNumero","gx.O.A2084ConvenioExercicio","gx.O.A2080ConvenioTipoConvenio","gx.O.A2088ConvenioQtdeDiasEmail",'gx.date.urlDate(gx.O.A2087ConvenioVencimento,"DMY4")',"gx.O.A2086ConvenioSnLicitacao","gx.O.A2143ConvenioQtdeFornec","gx.O.AV52snUsuario","gx.O.AV53SnErroEmail","gx.O.AV67snUsuario1","gx.O.A2183ConvenioAtivo","gx.O.AV57ErrDsc"]) )
                           {
                              this.AV10ret = gx.num.trunc( 1 ,0) ;
                           }
                           else
                           {
                              if ( this.Gx_mode == "UPD" && this.AV67snUsuario1 == "N" && ! (new gx.date.gxdate("").compare(this.A2087ConvenioVencimento)==0) && gx.ajax.aggSelInteger("vRET","4",["gx.O.A2082ConvenioDescricao","gx.O.A2083ConvenioNumero","gx.O.A2084ConvenioExercicio","gx.O.A2080ConvenioTipoConvenio","gx.O.A2088ConvenioQtdeDiasEmail",'gx.date.urlDate(gx.O.A2087ConvenioVencimento,"DMY4")',"gx.O.A2086ConvenioSnLicitacao","gx.O.A2143ConvenioQtdeFornec","gx.O.AV52snUsuario","gx.O.AV53SnErroEmail","gx.O.AV67snUsuario1","gx.O.A2183ConvenioAtivo","gx.O.AV57ErrDsc"]) )
                              {
                                 this.AV10ret = gx.num.trunc( 1 ,0) ;
                              }
                              else
                              {
                                 if ( this.Gx_mode != "INS" && this.A2183ConvenioAtivo == "N" && ( ! (""==this.AV57ErrDsc) ) && gx.ajax.aggSelInteger("vRET","4",["gx.O.A2082ConvenioDescricao","gx.O.A2083ConvenioNumero","gx.O.A2084ConvenioExercicio","gx.O.A2080ConvenioTipoConvenio","gx.O.A2088ConvenioQtdeDiasEmail",'gx.date.urlDate(gx.O.A2087ConvenioVencimento,"DMY4")',"gx.O.A2086ConvenioSnLicitacao","gx.O.A2143ConvenioQtdeFornec","gx.O.AV52snUsuario","gx.O.AV53SnErroEmail","gx.O.AV67snUsuario1","gx.O.A2183ConvenioAtivo","gx.O.AV57ErrDsc"]) )
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
      catch(e){}
      return true;
   }
   this.Valid_Conveniodataenvioemail=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONVENIODATAENVIOEMAIL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Sim=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSIM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Conveniofornecedorpessoaid=function()
   {
      this.sMode228 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(228,76)  ;
      this.standaloneModal3W228( );
      this.standaloneNotModal3W228( );
      if(  gx.fn.currentGridRowImpl(76) ===0) {
         this.Gx_mode =  this.sMode228  ;
         return true;
      }
      var gxballoon = gx.util.balloon.getNew("CONVENIOFORNECEDORPESSOAID", gx.fn.currentGridRowImpl(76));
      if ( gx.fn.gridDuplicateKey(78) )
      {
         gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Convenio Fornecedor", "", "", "", "", "", "", "", ""));
         this.AnyError = gx.num.trunc( 1 ,0) ;
         this.Gx_mode =  this.sMode228  ;
         return gxballoon.show();
      }
      gx.ajax.validSrvEvt("dyncall","valid_Conveniofornecedorpessoaid",["gx.O.A2201ConvenioFornecedorPessoaEmpId", "gx.O.A2202ConvenioFornecedorPessoaId", "gx.O.A2203ConvenioFornecedorPessoaNome", "gx.O.A446PessoaFornecedor"],["A2203ConvenioFornecedorPessoaNome", "A446PessoaFornecedor"]);
      this.Gx_mode =  this.sMode228  ;
      return true;
   }
   this.Valid_Conveniofornecedortplicitacao=function()
   {
      this.sMode228 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(228,76)  ;
      gx.ajax.validSrvEvt("dyncall","valid_Conveniofornecedortplicitacao",["gx.O.Gx_mode", "gx.O.A2202ConvenioFornecedorPessoaId", "gx.O.O2143ConvenioQtdeFornec", "gx.O.A2081ConvenioFornecedorTpLicitacao", "gx.O.A2082ConvenioDescricao", "gx.O.A2083ConvenioNumero", "gx.O.A2084ConvenioExercicio", "gx.O.A2080ConvenioTipoConvenio", "gx.O.A2088ConvenioQtdeDiasEmail", 'gx.date.urlDate(gx.O.A2087ConvenioVencimento,"DMY4")', "gx.O.A2086ConvenioSnLicitacao", "gx.O.A2143ConvenioQtdeFornec", "gx.O.A446PessoaFornecedor", "gx.O.AV52snUsuario", "gx.O.AV53SnErroEmail", "gx.O.AV67snUsuario1", "gx.O.A2183ConvenioAtivo", "gx.O.AV57ErrDsc", "gx.O.AV10ret", "gx.O.AV54SnFornecedor"],["AV10ret", "AV54SnFornecedor"]);
      this.A2143ConvenioQtdeFornec = gx.num.trunc( gx.fn.countFrm( "A2081ConvenioFornecedorTpLicitacao" , 0 , 76 , gx.trueFn , [] ) ,0) ;
      try {
         if ( (""==this.A2082ConvenioDescricao) && gx.ajax.aggSelInteger("vRET","31",["gx.O.A2082ConvenioDescricao","gx.O.A2083ConvenioNumero","gx.O.A2084ConvenioExercicio","gx.O.A2080ConvenioTipoConvenio","gx.O.A2088ConvenioQtdeDiasEmail",'gx.date.urlDate(gx.O.A2087ConvenioVencimento,"DMY4")',"gx.O.A2086ConvenioSnLicitacao","gx.O.A2143ConvenioQtdeFornec","gx.O.A446PessoaFornecedor","gx.O.AV52snUsuario","gx.O.AV53SnErroEmail","gx.O.AV67snUsuario1","gx.O.A2183ConvenioAtivo","gx.O.AV57ErrDsc"]) )
         {
            this.AV10ret = gx.num.trunc( 1 ,0) ;
         }
         else
         {
            if ( (""==this.A2083ConvenioNumero) && gx.ajax.aggSelInteger("vRET","31",["gx.O.A2082ConvenioDescricao","gx.O.A2083ConvenioNumero","gx.O.A2084ConvenioExercicio","gx.O.A2080ConvenioTipoConvenio","gx.O.A2088ConvenioQtdeDiasEmail",'gx.date.urlDate(gx.O.A2087ConvenioVencimento,"DMY4")',"gx.O.A2086ConvenioSnLicitacao","gx.O.A2143ConvenioQtdeFornec","gx.O.A446PessoaFornecedor","gx.O.AV52snUsuario","gx.O.AV53SnErroEmail","gx.O.AV67snUsuario1","gx.O.A2183ConvenioAtivo","gx.O.AV57ErrDsc"]) )
            {
               this.AV10ret = gx.num.trunc( 1 ,0) ;
            }
            else
            {
               if ( (""==this.A2084ConvenioExercicio) && gx.ajax.aggSelInteger("vRET","31",["gx.O.A2082ConvenioDescricao","gx.O.A2083ConvenioNumero","gx.O.A2084ConvenioExercicio","gx.O.A2080ConvenioTipoConvenio","gx.O.A2088ConvenioQtdeDiasEmail",'gx.date.urlDate(gx.O.A2087ConvenioVencimento,"DMY4")',"gx.O.A2086ConvenioSnLicitacao","gx.O.A2143ConvenioQtdeFornec","gx.O.A446PessoaFornecedor","gx.O.AV52snUsuario","gx.O.AV53SnErroEmail","gx.O.AV67snUsuario1","gx.O.A2183ConvenioAtivo","gx.O.AV57ErrDsc"]) )
               {
                  this.AV10ret = gx.num.trunc( 1 ,0) ;
               }
               else
               {
                  if ( (""==this.A2080ConvenioTipoConvenio) && gx.ajax.aggSelInteger("vRET","31",["gx.O.A2082ConvenioDescricao","gx.O.A2083ConvenioNumero","gx.O.A2084ConvenioExercicio","gx.O.A2080ConvenioTipoConvenio","gx.O.A2088ConvenioQtdeDiasEmail",'gx.date.urlDate(gx.O.A2087ConvenioVencimento,"DMY4")',"gx.O.A2086ConvenioSnLicitacao","gx.O.A2143ConvenioQtdeFornec","gx.O.A446PessoaFornecedor","gx.O.AV52snUsuario","gx.O.AV53SnErroEmail","gx.O.AV67snUsuario1","gx.O.A2183ConvenioAtivo","gx.O.AV57ErrDsc"]) )
                  {
                     this.AV10ret = gx.num.trunc( 1 ,0) ;
                  }
                  else
                  {
                     if ( ! (0==this.A2088ConvenioQtdeDiasEmail) && (new gx.date.gxdate("").compare(this.A2087ConvenioVencimento)==0) && gx.ajax.aggSelInteger("vRET","31",["gx.O.A2082ConvenioDescricao","gx.O.A2083ConvenioNumero","gx.O.A2084ConvenioExercicio","gx.O.A2080ConvenioTipoConvenio","gx.O.A2088ConvenioQtdeDiasEmail",'gx.date.urlDate(gx.O.A2087ConvenioVencimento,"DMY4")',"gx.O.A2086ConvenioSnLicitacao","gx.O.A2143ConvenioQtdeFornec","gx.O.A446PessoaFornecedor","gx.O.AV52snUsuario","gx.O.AV53SnErroEmail","gx.O.AV67snUsuario1","gx.O.A2183ConvenioAtivo","gx.O.AV57ErrDsc"]) )
                     {
                        this.AV10ret = gx.num.trunc( 1 ,0) ;
                     }
                     else
                     {
                        if ( this.A2086ConvenioSnLicitacao == "N" && this.A2143ConvenioQtdeFornec >= 1 && gx.ajax.aggSelInteger("vRET","31",["gx.O.A2082ConvenioDescricao","gx.O.A2083ConvenioNumero","gx.O.A2084ConvenioExercicio","gx.O.A2080ConvenioTipoConvenio","gx.O.A2088ConvenioQtdeDiasEmail",'gx.date.urlDate(gx.O.A2087ConvenioVencimento,"DMY4")',"gx.O.A2086ConvenioSnLicitacao","gx.O.A2143ConvenioQtdeFornec","gx.O.A446PessoaFornecedor","gx.O.AV52snUsuario","gx.O.AV53SnErroEmail","gx.O.AV67snUsuario1","gx.O.A2183ConvenioAtivo","gx.O.AV57ErrDsc"]) )
                        {
                           this.AV10ret = gx.num.trunc( 1 ,0) ;
                        }
                        else
                        {
                           if ( this.A446PessoaFornecedor == "N" && this.A2086ConvenioSnLicitacao == "S" && gx.ajax.aggSelInteger("vRET","31",["gx.O.A2082ConvenioDescricao","gx.O.A2083ConvenioNumero","gx.O.A2084ConvenioExercicio","gx.O.A2080ConvenioTipoConvenio","gx.O.A2088ConvenioQtdeDiasEmail",'gx.date.urlDate(gx.O.A2087ConvenioVencimento,"DMY4")',"gx.O.A2086ConvenioSnLicitacao","gx.O.A2143ConvenioQtdeFornec","gx.O.A446PessoaFornecedor","gx.O.AV52snUsuario","gx.O.AV53SnErroEmail","gx.O.AV67snUsuario1","gx.O.A2183ConvenioAtivo","gx.O.AV57ErrDsc"]) )
                           {
                              this.AV10ret = gx.num.trunc( 1 ,0) ;
                           }
                           else
                           {
                              if ( this.Gx_mode == "INS" && this.AV52snUsuario == "N" && this.AV53SnErroEmail != "S" && ! (new gx.date.gxdate("").compare(this.A2087ConvenioVencimento)==0) && gx.ajax.aggSelInteger("vRET","31",["gx.O.A2082ConvenioDescricao","gx.O.A2083ConvenioNumero","gx.O.A2084ConvenioExercicio","gx.O.A2080ConvenioTipoConvenio","gx.O.A2088ConvenioQtdeDiasEmail",'gx.date.urlDate(gx.O.A2087ConvenioVencimento,"DMY4")',"gx.O.A2086ConvenioSnLicitacao","gx.O.A2143ConvenioQtdeFornec","gx.O.A446PessoaFornecedor","gx.O.AV52snUsuario","gx.O.AV53SnErroEmail","gx.O.AV67snUsuario1","gx.O.A2183ConvenioAtivo","gx.O.AV57ErrDsc"]) )
                              {
                                 this.AV10ret = gx.num.trunc( 1 ,0) ;
                              }
                              else
                              {
                                 if ( this.Gx_mode == "UPD" && this.AV67snUsuario1 == "N" && ! (new gx.date.gxdate("").compare(this.A2087ConvenioVencimento)==0) && gx.ajax.aggSelInteger("vRET","31",["gx.O.A2082ConvenioDescricao","gx.O.A2083ConvenioNumero","gx.O.A2084ConvenioExercicio","gx.O.A2080ConvenioTipoConvenio","gx.O.A2088ConvenioQtdeDiasEmail",'gx.date.urlDate(gx.O.A2087ConvenioVencimento,"DMY4")',"gx.O.A2086ConvenioSnLicitacao","gx.O.A2143ConvenioQtdeFornec","gx.O.A446PessoaFornecedor","gx.O.AV52snUsuario","gx.O.AV53SnErroEmail","gx.O.AV67snUsuario1","gx.O.A2183ConvenioAtivo","gx.O.AV57ErrDsc"]) )
                                 {
                                    this.AV10ret = gx.num.trunc( 1 ,0) ;
                                 }
                                 else
                                 {
                                    if ( this.Gx_mode != "INS" && this.A2183ConvenioAtivo == "N" && ( ! (""==this.AV57ErrDsc) ) && gx.ajax.aggSelInteger("vRET","31",["gx.O.A2082ConvenioDescricao","gx.O.A2083ConvenioNumero","gx.O.A2084ConvenioExercicio","gx.O.A2080ConvenioTipoConvenio","gx.O.A2088ConvenioQtdeDiasEmail",'gx.date.urlDate(gx.O.A2087ConvenioVencimento,"DMY4")',"gx.O.A2086ConvenioSnLicitacao","gx.O.A2143ConvenioQtdeFornec","gx.O.A446PessoaFornecedor","gx.O.AV52snUsuario","gx.O.AV53SnErroEmail","gx.O.AV67snUsuario1","gx.O.A2183ConvenioAtivo","gx.O.AV57ErrDsc"]) )
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
      catch(e){}
      try {
         if ( this.A2086ConvenioSnLicitacao == "N" && this.A2143ConvenioQtdeFornec >= 1 )
         {
            this.AV54SnFornecedor =  "S"  ;
         }
         else
         {
            if ( this.A2143ConvenioQtdeFornec == 0 )
            {
               this.AV54SnFornecedor =  "N"  ;
            }
            else
            {
               if ( this.A446PessoaFornecedor == "N" && this.A2086ConvenioSnLicitacao == "S" )
               {
                  this.AV54SnFornecedor =  "S"  ;
               }
               else
               {
                  if ( this.A446PessoaFornecedor == "S" && this.A2086ConvenioSnLicitacao == "S" )
                  {
                     this.AV54SnFornecedor =  "N"  ;
                  }
               }
            }
         }
      }
      catch(e){}
      this.Gx_mode =  this.sMode228  ;
      return true;
   }
   this.standaloneModal3W228=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("CONVENIOFORNECEDORPESSOAID","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("CONVENIOFORNECEDORPESSOAID","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal3W228=function()
   {
      try {
         this.A2201ConvenioFornecedorPessoaEmpId =  this.AV21EmpresaPadraoCliFor  ;
      }
      catch(e){}
      return true;
   }
   this.Valid_Conveniocaixabancoid=function()
   {
      this.sMode215 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(215,86)  ;
      this.standaloneModal3W215( );
      this.standaloneNotModal3W215( );
      if(  gx.fn.currentGridRowImpl(86) ===0) {
         this.Gx_mode =  this.sMode215  ;
         return true;
      }
      var gxballoon = gx.util.balloon.getNew("CONVENIOCAIXABANCOID", gx.fn.currentGridRowImpl(86));
      if ( gx.fn.gridDuplicateKey(88) )
      {
         gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Convenio Caixa Banco", "", "", "", "", "", "", "", ""));
         this.AnyError = gx.num.trunc( 1 ,0) ;
         this.Gx_mode =  this.sMode215  ;
         return gxballoon.show();
      }
      gx.ajax.validSrvEvt("dyncall","valid_Conveniocaixabancoid",["gx.O.A2110ConvenioCaixaBancoEmpId", "gx.O.A2111ConvenioCaixaBancoId", "gx.O.A2112ConvenioCaixaBancoDesc"],["A2112ConvenioCaixaBancoDesc"]);
      this.Gx_mode =  this.sMode215  ;
      return true;
   }
   this.standaloneModal3W215=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("CONVENIOCAIXABANCOID","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("CONVENIOCAIXABANCOID","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal3W215=function()
   {
      try {
         this.A2110ConvenioCaixaBancoEmpId =  this.AV22EmpresaPadraoCaixaBanco  ;
      }
      catch(e){}
      return true;
   }
   this.Valid_Usuarioid=function()
   {
      this.sMode258 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(258,95)  ;
      this.standaloneModal3W258( );
      this.standaloneNotModal3W258( );
      if(  gx.fn.currentGridRowImpl(95) ===0) {
         this.Gx_mode =  this.sMode258  ;
         return true;
      }
      var gxballoon = gx.util.balloon.getNew("USUARIOID", gx.fn.currentGridRowImpl(95));
      if ( gx.fn.gridDuplicateKey(97) )
      {
         gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Convenio Usuario", "", "", "", "", "", "", "", ""));
         this.AnyError = gx.num.trunc( 1 ,0) ;
         this.Gx_mode =  this.sMode258  ;
         return gxballoon.show();
      }
      gx.ajax.validSrvEvt("dyncall","valid_Usuarioid",["gx.O.A75UsuarioId", "gx.O.A615UsuarioEmail", "gx.O.A219UsuarioNome"],["A219UsuarioNome", "A615UsuarioEmail"]);
      this.Gx_mode =  this.sMode258  ;
      return true;
   }
   this.Valid_Usuarioemail=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(95) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("USUARIOEMAIL", gx.fn.currentGridRowImpl(95));
         this.AnyError  = 0;
         this.sMode258 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(258,95)  ;
         if ( this.Gx_mode == "UPD" )
         {
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode258  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.standaloneModal3W258=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("USUARIOID","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("USUARIOID","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal3W258=function()
   {
      return true;
   }
   this.e113w224_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalcxabcoconvenio",[this.A1681ConvenioId, this.A2082ConvenioDescricao, this.Gx_mode]), []);
      this.refreshOutputs([]);
   };
   this.e123w224_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalusuarioconvenio",[this.A1681ConvenioId, this.A2082ConvenioDescricao, this.A2087ConvenioVencimento, this.Gx_mode]), []);
      this.refreshOutputs([]);
   };
   this.e143w2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e153w2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e163w2_client=function()
   {
      this.executeServerEvent("'PROCESSOCONV'", false, null, false, false);
   };
   this.e173w224_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e183w224_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,7,10,13,15,21,23,26,29,31,34,37,39,42,45,47,50,53,55,60,62,67,69,72,75,77,78,79,80,81,82,85,87,88,89,90,91,94,96,97,98,99,100,103,106,108,110,122,123,124,125,127];
   this.GXLastCtrlId =127;
   this.Grid1Container = new gx.grid.grid(this, 228,"ConvenioFornecedor",76,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"tconvenio",[2202],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("nRcdDeleted_228",77,"vNRCDDELETED_228","","","nRcdDeleted_228","int",0,"px",4,1,"right",null,[],"nRcdDeleted_228","nRcdDeleted_228",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2202,78,"CONVENIOFORNECEDORPESSOAID","Fornecedor","","ConvenioFornecedorPessoaId","int",0,"px",7,7,"right",null,[],2202,"ConvenioFornecedorPessoaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("prompt_2202","PROMPT_2202",129,0,"",0,"",null,"","","gx-prompt Image","");
   Grid1Container.addSingleLineEdit(2203,79,"CONVENIOFORNECEDORPESSOANOME","Nome Fornecedor","","ConvenioFornecedorPessoaNome","svchar",0,"px",60,60,"left",null,[],2203,"ConvenioFornecedorPessoaNome",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(2081,80,"CONVENIOFORNECEDORTPLICITACAO","Tipo de Licitação","ConvenioFornecedorTpLicitacao","char",null,0,true,false,0,"px","");
   this.setGrid(Grid1Container);
   this.Grid2Container = new gx.grid.grid(this, 215,"ConvenioCaixaBanco",86,"Grid2","Grid2","Grid2Container",this.CmpContext,this.IsMasterPage,"tconvenio",[2111],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid2Container = this.Grid2Container;
   Grid2Container.addSingleLineEdit("nRcdDeleted_215",87,"vNRCDDELETED_215","","","nRcdDeleted_215","int",0,"px",4,1,"right",null,[],"nRcdDeleted_215","nRcdDeleted_215",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(2111,88,"CONVENIOCAIXABANCOID","Caixa/Banco","","ConvenioCaixaBancoId","int",0,"px",5,5,"right",null,[],2111,"ConvenioCaixaBancoId",true,0,false,false,"Attribute",1,"");
   Grid2Container.addBitmap("prompt_2111","PROMPT_2111",130,0,"",0,"",null,"","","gx-prompt Image","");
   Grid2Container.addSingleLineEdit(2112,89,"CONVENIOCAIXABANCODESC","Descrição Caixa/Banco","","ConvenioCaixaBancoDesc","svchar",0,"px",25,25,"left",null,[],2112,"ConvenioCaixaBancoDesc",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid2Container);
   this.Grid3Container = new gx.grid.grid(this, 258,"ConvenioUsuario",95,"Grid3","Grid3","Grid3Container",this.CmpContext,this.IsMasterPage,"tconvenio",[75],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid3Container = this.Grid3Container;
   Grid3Container.addSingleLineEdit("nRcdDeleted_258",96,"vNRCDDELETED_258","","","nRcdDeleted_258","int",0,"px",4,1,"right",null,[],"nRcdDeleted_258","nRcdDeleted_258",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit(75,97,"USUARIOID","Usuário","","UsuarioId","char",0,"px",12,12,"left",null,[],75,"UsuarioId",true,0,false,false,"Attribute",1,"");
   Grid3Container.addBitmap("prompt_75","PROMPT_75",131,0,"",0,"",null,"","","gx-prompt Image","");
   Grid3Container.addSingleLineEdit(219,98,"USUARIONOME","Nome do Usuario","","UsuarioNome","svchar",0,"px",35,35,"left",null,[],219,"UsuarioNome",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit(615,99,"USUARIOEMAIL","Email do Usuario","","UsuarioEmail","svchar",0,"px",60,60,"left",null,[],615,"UsuarioEmail",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid3Container);
   this.TABCSSContainer = gx.uc.getNew(this, 6, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV68Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV68Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV68Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "tabcss_1", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TAB1",grid:0};
   GXValidFnc[10]={fld:"TABLE2",grid:0};
   GXValidFnc[13]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Convenioid,isvalid:null,rgrid:[this.Grid1Container,this.Grid2Container,this.Grid3Container],fld:"CONVENIOID",gxz:"Z1681ConvenioId",gxold:"O1681ConvenioId",gxvar:"A1681ConvenioId",ucs:[],op:[15],ip:[15],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1681ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1681ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONVENIOID",gx.O.A1681ConvenioId,0)},c2v:function(){gx.O.A1681ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conveniodescricao,isvalid:null,rgrid:[],fld:"CONVENIODESCRICAO",gxz:"Z2082ConvenioDescricao",gxold:"O2082ConvenioDescricao",gxvar:"A2082ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2082ConvenioDescricao=Value},v2z:function(Value){gx.O.Z2082ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("CONVENIODESCRICAO",gx.O.A2082ConvenioDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2082ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("CONVENIODESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 23 , function() {
   });
   GXValidFnc[26]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conveniosndespbancaria,isvalid:null,rgrid:[],fld:"CONVENIOSNDESPBANCARIA",gxz:"Z2085ConvenioSnDespBancaria",gxold:"O2085ConvenioSnDespBancaria",gxvar:"A2085ConvenioSnDespBancaria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2085ConvenioSnDespBancaria=Value},v2z:function(Value){gx.O.Z2085ConvenioSnDespBancaria=Value},v2c:function(){gx.fn.setCheckBoxValue("CONVENIOSNDESPBANCARIA",gx.O.A2085ConvenioSnDespBancaria,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2085ConvenioSnDespBancaria=this.val()},val:function(){return gx.fn.getControlValue("CONVENIOSNDESPBANCARIA")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[29]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Convenionumero,isvalid:null,rgrid:[],fld:"CONVENIONUMERO",gxz:"Z2083ConvenioNumero",gxold:"O2083ConvenioNumero",gxvar:"A2083ConvenioNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2083ConvenioNumero=Value},v2z:function(Value){gx.O.Z2083ConvenioNumero=Value},v2c:function(){gx.fn.setControlValue("CONVENIONUMERO",gx.O.A2083ConvenioNumero,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2083ConvenioNumero=this.val()},val:function(){return gx.fn.getControlValue("CONVENIONUMERO")},nac:gx.falseFn};
   this.declareDomainHdlr( 31 , function() {
   });
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conveniosnlicitacao,isvalid:null,rgrid:[],fld:"CONVENIOSNLICITACAO",gxz:"Z2086ConvenioSnLicitacao",gxold:"O2086ConvenioSnLicitacao",gxvar:"A2086ConvenioSnLicitacao",ucs:[],op:[],ip:[34],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2086ConvenioSnLicitacao=Value},v2z:function(Value){gx.O.Z2086ConvenioSnLicitacao=Value},v2c:function(){gx.fn.setCheckBoxValue("CONVENIOSNLICITACAO",gx.O.A2086ConvenioSnLicitacao,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2086ConvenioSnLicitacao=this.val()},val:function(){return gx.fn.getControlValue("CONVENIOSNLICITACAO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 34 , function() {
   });
   GXValidFnc[37]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Convenioexercicio,isvalid:null,rgrid:[],fld:"CONVENIOEXERCICIO",gxz:"Z2084ConvenioExercicio",gxold:"O2084ConvenioExercicio",gxvar:"A2084ConvenioExercicio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2084ConvenioExercicio=Value},v2z:function(Value){gx.O.Z2084ConvenioExercicio=Value},v2c:function(){gx.fn.setControlValue("CONVENIOEXERCICIO",gx.O.A2084ConvenioExercicio,0)},c2v:function(){gx.O.A2084ConvenioExercicio=this.val()},val:function(){return gx.fn.getControlValue("CONVENIOEXERCICIO")},nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Convenioativo,isvalid:null,rgrid:[],fld:"CONVENIOATIVO",gxz:"Z2183ConvenioAtivo",gxold:"O2183ConvenioAtivo",gxvar:"A2183ConvenioAtivo",ucs:[],op:[],ip:[42,15],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2183ConvenioAtivo=Value},v2z:function(Value){gx.O.Z2183ConvenioAtivo=Value},v2c:function(){gx.fn.setCheckBoxValue("CONVENIOATIVO",gx.O.A2183ConvenioAtivo,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2183ConvenioAtivo=this.val()},val:function(){return gx.fn.getControlValue("CONVENIOATIVO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[45]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conveniotipoconvenio,isvalid:null,rgrid:[],fld:"CONVENIOTIPOCONVENIO",gxz:"Z2080ConvenioTipoConvenio",gxold:"O2080ConvenioTipoConvenio",gxvar:"A2080ConvenioTipoConvenio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2080ConvenioTipoConvenio=Value},v2z:function(Value){gx.O.Z2080ConvenioTipoConvenio=Value},v2c:function(){gx.fn.setComboBoxValue("CONVENIOTIPOCONVENIO",gx.O.A2080ConvenioTipoConvenio)},c2v:function(){gx.O.A2080ConvenioTipoConvenio=this.val()},val:function(){return gx.fn.getControlValue("CONVENIOTIPOCONVENIO")},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOSNBOXSALDOCONTA",gxz:"Z2693ConvenioSnBoxSaldoConta",gxold:"O2693ConvenioSnBoxSaldoConta",gxvar:"A2693ConvenioSnBoxSaldoConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2693ConvenioSnBoxSaldoConta=Value},v2z:function(Value){gx.O.Z2693ConvenioSnBoxSaldoConta=Value},v2c:function(){gx.fn.setCheckBoxValue("CONVENIOSNBOXSALDOCONTA",gx.O.A2693ConvenioSnBoxSaldoConta,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2693ConvenioSnBoxSaldoConta=this.val()},val:function(){return gx.fn.getControlValue("CONVENIOSNBOXSALDOCONTA")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[53]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conveniovencimento,isvalid:null,rgrid:[],fld:"CONVENIOVENCIMENTO",gxz:"Z2087ConvenioVencimento",gxold:"O2087ConvenioVencimento",gxvar:"A2087ConvenioVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[55,15],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2087ConvenioVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2087ConvenioVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONVENIOVENCIMENTO",gx.O.A2087ConvenioVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2087ConvenioVencimento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CONVENIOVENCIMENTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[60]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[62]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Convenioqtdediasemail,isvalid:null,rgrid:[],fld:"CONVENIOQTDEDIASEMAIL",gxz:"Z2088ConvenioQtdeDiasEmail",gxold:"O2088ConvenioQtdeDiasEmail",gxvar:"A2088ConvenioQtdeDiasEmail",ucs:[],op:[],ip:[42,34,55,62,47,39,31,23],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2088ConvenioQtdeDiasEmail=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2088ConvenioQtdeDiasEmail=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONVENIOQTDEDIASEMAIL",gx.O.A2088ConvenioQtdeDiasEmail,0)},c2v:function(){gx.O.A2088ConvenioQtdeDiasEmail=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONVENIOQTDEDIASEMAIL",'.')},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conveniodataenvioemail,isvalid:null,rgrid:[],fld:"CONVENIODATAENVIOEMAIL",gxz:"Z2194ConvenioDataEnvioEmail",gxold:"O2194ConvenioDataEnvioEmail",gxvar:"A2194ConvenioDataEnvioEmail",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2194ConvenioDataEnvioEmail=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2194ConvenioDataEnvioEmail=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONVENIODATAENVIOEMAIL",gx.O.A2194ConvenioDataEnvioEmail,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2194ConvenioDataEnvioEmail=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CONVENIODATAENVIOEMAIL")},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[72]={fld:"TAB2",grid:0};
   GXValidFnc[75]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[77]={lvl:228,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:76,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_228",gxz:"ZnRcdDeleted_228",gxold:"OnRcdDeleted_228",gxvar:"nRcdDeleted_228",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_228=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_228=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_228",row || gx.fn.currentGridRowImpl(76),gx.O.nRcdDeleted_228,0)},c2v:function(){gx.O.nRcdDeleted_228=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_228",row || gx.fn.currentGridRowImpl(76),'.')},nac:gx.falseFn};
   GXValidFnc[78]={lvl:228,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:1,grid:76,gxgrid:this.Grid1Container,fnc:this.Valid_Conveniofornecedorpessoaid,isvalid:null,rgrid:[],fld:"CONVENIOFORNECEDORPESSOAID",gxz:"Z2202ConvenioFornecedorPessoaId",gxold:"O2202ConvenioFornecedorPessoaId",gxvar:"A2202ConvenioFornecedorPessoaId",ucs:[],op:[79],ip:[79,78],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2202ConvenioFornecedorPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2202ConvenioFornecedorPessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONVENIOFORNECEDORPESSOAID",row || gx.fn.currentGridRowImpl(76),gx.O.A2202ConvenioFornecedorPessoaId,0)},c2v:function(){gx.O.A2202ConvenioFornecedorPessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONVENIOFORNECEDORPESSOAID",row || gx.fn.currentGridRowImpl(76),'.')},nac:gx.falseFn};
   GXValidFnc[79]={lvl:228,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:1,grid:76,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOFORNECEDORPESSOANOME",gxz:"Z2203ConvenioFornecedorPessoaNome",gxold:"O2203ConvenioFornecedorPessoaNome",gxvar:"A2203ConvenioFornecedorPessoaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2203ConvenioFornecedorPessoaNome=Value},v2z:function(Value){gx.O.Z2203ConvenioFornecedorPessoaNome=Value},v2c:function(row){gx.fn.setGridControlValue("CONVENIOFORNECEDORPESSOANOME",row || gx.fn.currentGridRowImpl(76),gx.O.A2203ConvenioFornecedorPessoaNome,0)},c2v:function(){gx.O.A2203ConvenioFornecedorPessoaNome=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVENIOFORNECEDORPESSOANOME",row || gx.fn.currentGridRowImpl(76))},nac:gx.falseFn};
   GXValidFnc[80]={lvl:228,type:"char",len:2,dec:0,sign:false,ro:0,isacc:1,grid:76,gxgrid:this.Grid1Container,fnc:this.Valid_Conveniofornecedortplicitacao,isvalid:null,rgrid:[],fld:"CONVENIOFORNECEDORTPLICITACAO",gxz:"Z2081ConvenioFornecedorTpLicitacao",gxold:"O2081ConvenioFornecedorTpLicitacao",gxvar:"A2081ConvenioFornecedorTpLicitacao",ucs:[],op:[],ip:[42,34,55,62,47,39,31,23,80],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2081ConvenioFornecedorTpLicitacao=Value},v2z:function(Value){gx.O.Z2081ConvenioFornecedorTpLicitacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CONVENIOFORNECEDORTPLICITACAO",row || gx.fn.currentGridRowImpl(76),gx.O.A2081ConvenioFornecedorTpLicitacao)},c2v:function(){gx.O.A2081ConvenioFornecedorTpLicitacao=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVENIOFORNECEDORTPLICITACAO",row || gx.fn.currentGridRowImpl(76))},nac:gx.falseFn};
   GXValidFnc[81]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[82]={fld:"TAB3",grid:0};
   GXValidFnc[85]={fld:"DIV3", format:2,grid:0};
   GXValidFnc[87]={lvl:215,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:86,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_215",gxz:"ZnRcdDeleted_215",gxold:"OnRcdDeleted_215",gxvar:"nRcdDeleted_215",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_215=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_215=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_215",row || gx.fn.currentGridRowImpl(86),gx.O.nRcdDeleted_215,0)},c2v:function(){gx.O.nRcdDeleted_215=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_215",row || gx.fn.currentGridRowImpl(86),'.')},nac:gx.falseFn};
   GXValidFnc[88]={lvl:215,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,isacc:1,grid:86,gxgrid:this.Grid2Container,fnc:this.Valid_Conveniocaixabancoid,isvalid:null,rgrid:[],fld:"CONVENIOCAIXABANCOID",gxz:"Z2111ConvenioCaixaBancoId",gxold:"O2111ConvenioCaixaBancoId",gxvar:"A2111ConvenioCaixaBancoId",ucs:[],op:[89],ip:[89,88],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2111ConvenioCaixaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2111ConvenioCaixaBancoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONVENIOCAIXABANCOID",row || gx.fn.currentGridRowImpl(86),gx.O.A2111ConvenioCaixaBancoId,0)},c2v:function(){gx.O.A2111ConvenioCaixaBancoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONVENIOCAIXABANCOID",row || gx.fn.currentGridRowImpl(86),'.')},nac:gx.falseFn};
   GXValidFnc[89]={lvl:215,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:1,grid:86,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOCAIXABANCODESC",gxz:"Z2112ConvenioCaixaBancoDesc",gxold:"O2112ConvenioCaixaBancoDesc",gxvar:"A2112ConvenioCaixaBancoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2112ConvenioCaixaBancoDesc=Value},v2z:function(Value){gx.O.Z2112ConvenioCaixaBancoDesc=Value},v2c:function(row){gx.fn.setGridControlValue("CONVENIOCAIXABANCODESC",row || gx.fn.currentGridRowImpl(86),gx.O.A2112ConvenioCaixaBancoDesc,0)},c2v:function(){gx.O.A2112ConvenioCaixaBancoDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVENIOCAIXABANCODESC",row || gx.fn.currentGridRowImpl(86))},nac:gx.falseFn};
   GXValidFnc[90]={fld:"DIV4", format:2,grid:0};
   GXValidFnc[91]={fld:"TAB4",grid:0};
   GXValidFnc[94]={fld:"DIV5", format:2,grid:0};
   GXValidFnc[96]={lvl:258,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:95,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_258",gxz:"ZnRcdDeleted_258",gxold:"OnRcdDeleted_258",gxvar:"nRcdDeleted_258",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_258=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_258=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_258",row || gx.fn.currentGridRowImpl(95),gx.O.nRcdDeleted_258,0)},c2v:function(){gx.O.nRcdDeleted_258=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_258",row || gx.fn.currentGridRowImpl(95),'.')},nac:gx.falseFn};
   GXValidFnc[97]={lvl:258,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,isacc:1,grid:95,gxgrid:this.Grid3Container,fnc:this.Valid_Usuarioid,isvalid:null,rgrid:[],fld:"USUARIOID",gxz:"Z75UsuarioId",gxold:"O75UsuarioId",gxvar:"A75UsuarioId",ucs:[],op:[97,99,98],ip:[98,99,97],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A75UsuarioId=Value},v2z:function(Value){gx.O.Z75UsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIOID",row || gx.fn.currentGridRowImpl(95),gx.O.A75UsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A75UsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOID",row || gx.fn.currentGridRowImpl(95))},nac:gx.falseFn};
   GXValidFnc[98]={lvl:258,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:1,grid:95,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"USUARIONOME",gxz:"Z219UsuarioNome",gxold:"O219UsuarioNome",gxvar:"A219UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A219UsuarioNome=Value},v2z:function(Value){gx.O.Z219UsuarioNome=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIONOME",row || gx.fn.currentGridRowImpl(95),gx.O.A219UsuarioNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A219UsuarioNome=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIONOME",row || gx.fn.currentGridRowImpl(95))},nac:gx.falseFn};
   GXValidFnc[99]={lvl:258,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:1,grid:95,gxgrid:this.Grid3Container,fnc:this.Valid_Usuarioemail,isvalid:null,rgrid:[],fld:"USUARIOEMAIL",gxz:"Z615UsuarioEmail",gxold:"O615UsuarioEmail",gxvar:"A615UsuarioEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A615UsuarioEmail=Value},v2z:function(Value){gx.O.Z615UsuarioEmail=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIOEMAIL",row || gx.fn.currentGridRowImpl(95),gx.O.A615UsuarioEmail,0)},c2v:function(){gx.O.A615UsuarioEmail=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOEMAIL",row || gx.fn.currentGridRowImpl(95))},nac:gx.falseFn};
   GXValidFnc[100]={fld:"DIV6", format:2,grid:0};
   GXValidFnc[103]={fld:"TABLE22",grid:0};
   GXValidFnc[106]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[108]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOUSUARIOALT",gxz:"Z1683ConvenioUsuarioAlt",gxold:"O1683ConvenioUsuarioAlt",gxvar:"A1683ConvenioUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1683ConvenioUsuarioAlt=Value},v2z:function(Value){gx.O.Z1683ConvenioUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CONVENIOUSUARIOALT",gx.O.A1683ConvenioUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1683ConvenioUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CONVENIOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 108 , function() {
   });
   GXValidFnc[110]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIODATAHORAALT",gxz:"Z1684ConvenioDataHoraAlt",gxold:"O1684ConvenioDataHoraAlt",gxvar:"A1684ConvenioDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1684ConvenioDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1684ConvenioDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONVENIODATAHORAALT",gx.O.A1684ConvenioDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1684ConvenioDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CONVENIODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 110 , function() {
   });
   GXValidFnc[122]={fld:"JS", format:2,grid:0};
   GXValidFnc[123]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV56AcessoSistemaSequencia",gxold:"OV56AcessoSistemaSequencia",gxvar:"AV56AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV56AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV56AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV56AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[124]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Sim,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV24Sim",gxold:"OV24Sim",gxvar:"AV24Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24Sim=Value},v2z:function(Value){gx.O.ZV24Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV24Sim,0)},c2v:function(){gx.O.AV24Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[125]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIOVENCIMENTO",gxz:"ZV72ConvenioVencimento",gxold:"OV72ConvenioVencimento",gxvar:"AV72ConvenioVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72ConvenioVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV72ConvenioVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOVENCIMENTO",gx.O.AV72ConvenioVencimento,0)},c2v:function(){gx.O.AV72ConvenioVencimento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONVENIOVENCIMENTO")},nac:gx.falseFn};
   GXValidFnc[127]={fld:"BTNHELP",grid:0};
   this.A1681ConvenioId = 0 ;
   this.Z1681ConvenioId = 0 ;
   this.O1681ConvenioId = 0 ;
   this.A2082ConvenioDescricao = "" ;
   this.Z2082ConvenioDescricao = "" ;
   this.O2082ConvenioDescricao = "" ;
   this.A2085ConvenioSnDespBancaria = "" ;
   this.Z2085ConvenioSnDespBancaria = "" ;
   this.O2085ConvenioSnDespBancaria = "" ;
   this.A2083ConvenioNumero = "" ;
   this.Z2083ConvenioNumero = "" ;
   this.O2083ConvenioNumero = "" ;
   this.A2086ConvenioSnLicitacao = "" ;
   this.Z2086ConvenioSnLicitacao = "" ;
   this.O2086ConvenioSnLicitacao = "" ;
   this.A2084ConvenioExercicio = "" ;
   this.Z2084ConvenioExercicio = "" ;
   this.O2084ConvenioExercicio = "" ;
   this.A2183ConvenioAtivo = "" ;
   this.Z2183ConvenioAtivo = "" ;
   this.O2183ConvenioAtivo = "" ;
   this.A2080ConvenioTipoConvenio = "" ;
   this.Z2080ConvenioTipoConvenio = "" ;
   this.O2080ConvenioTipoConvenio = "" ;
   this.A2693ConvenioSnBoxSaldoConta = "" ;
   this.Z2693ConvenioSnBoxSaldoConta = "" ;
   this.O2693ConvenioSnBoxSaldoConta = "" ;
   this.A2087ConvenioVencimento = gx.date.nullDate() ;
   this.Z2087ConvenioVencimento = gx.date.nullDate() ;
   this.O2087ConvenioVencimento = gx.date.nullDate() ;
   this.A2088ConvenioQtdeDiasEmail = 0 ;
   this.Z2088ConvenioQtdeDiasEmail = 0 ;
   this.O2088ConvenioQtdeDiasEmail = 0 ;
   this.A2194ConvenioDataEnvioEmail = gx.date.nullDate() ;
   this.Z2194ConvenioDataEnvioEmail = gx.date.nullDate() ;
   this.O2194ConvenioDataEnvioEmail = gx.date.nullDate() ;
   this.ZnRcdDeleted_228 = 0 ;
   this.OnRcdDeleted_228 = 0 ;
   this.Z2202ConvenioFornecedorPessoaId = 0 ;
   this.O2202ConvenioFornecedorPessoaId = 0 ;
   this.Z2203ConvenioFornecedorPessoaNome = "" ;
   this.O2203ConvenioFornecedorPessoaNome = "" ;
   this.Z2081ConvenioFornecedorTpLicitacao = "" ;
   this.O2081ConvenioFornecedorTpLicitacao = "" ;
   this.ZnRcdDeleted_215 = 0 ;
   this.OnRcdDeleted_215 = 0 ;
   this.Z2111ConvenioCaixaBancoId = 0 ;
   this.O2111ConvenioCaixaBancoId = 0 ;
   this.Z2112ConvenioCaixaBancoDesc = "" ;
   this.O2112ConvenioCaixaBancoDesc = "" ;
   this.ZnRcdDeleted_258 = 0 ;
   this.OnRcdDeleted_258 = 0 ;
   this.Z75UsuarioId = "" ;
   this.O75UsuarioId = "" ;
   this.Z219UsuarioNome = "" ;
   this.O219UsuarioNome = "" ;
   this.Z615UsuarioEmail = "" ;
   this.O615UsuarioEmail = "" ;
   this.A1683ConvenioUsuarioAlt = "" ;
   this.Z1683ConvenioUsuarioAlt = "" ;
   this.O1683ConvenioUsuarioAlt = "" ;
   this.A1684ConvenioDataHoraAlt = gx.date.nullDate() ;
   this.Z1684ConvenioDataHoraAlt = gx.date.nullDate() ;
   this.O1684ConvenioDataHoraAlt = gx.date.nullDate() ;
   this.AV56AcessoSistemaSequencia = 0 ;
   this.ZV56AcessoSistemaSequencia = 0 ;
   this.OV56AcessoSistemaSequencia = 0 ;
   this.AV24Sim = "" ;
   this.ZV24Sim = "" ;
   this.OV24Sim = "" ;
   this.AV72ConvenioVencimento = gx.date.nullDate() ;
   this.ZV72ConvenioVencimento = gx.date.nullDate() ;
   this.OV72ConvenioVencimento = gx.date.nullDate() ;
   this.A75UsuarioId = "" ;
   this.AV42SnAlterouQ = "" ;
   this.A219UsuarioNome = "" ;
   this.A615UsuarioEmail = "" ;
   this.A2477ConvenioUsuarioUsuarioAlt = "" ;
   this.A2478ConvenioUsuarioDataHoraAlt = gx.date.nullDate() ;
   this.A2110ConvenioCaixaBancoEmpId = "" ;
   this.A2111ConvenioCaixaBancoId = 0 ;
   this.AV41SnAlterouT = "" ;
   this.A2112ConvenioCaixaBancoDesc = "" ;
   this.A2113ConvenioCaixaBancoUsuarioAlt = "" ;
   this.A2114ConvenioCaixaBancoDataHoraAlt = gx.date.nullDate() ;
   this.A2201ConvenioFornecedorPessoaEmpId = "" ;
   this.A2202ConvenioFornecedorPessoaId = 0 ;
   this.AV40SnAlterouD = "" ;
   this.A2203ConvenioFornecedorPessoaNome = "" ;
   this.A446PessoaFornecedor = "" ;
   this.A2081ConvenioFornecedorTpLicitacao = "" ;
   this.A2101ConvenioFornecedorUsuarioAlt = "" ;
   this.A2102ConvenioFornecedorDataHoraAlt = gx.date.nullDate() ;
   this.AV7UsrCod = "" ;
   this.AV12EmpresaLogadaID = "" ;
   this.AV16Sistema = "" ;
   this.AV24Sim = "" ;
   this.AV26Ativo = "" ;
   this.AV75Pgmname = "" ;
   this.AV76Pgmdesc = "" ;
   this.AV13MsgErro = "" ;
   this.AV56AcessoSistemaSequencia = 0 ;
   this.AV19Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV15Tabela = "" ;
   this.AV14EmpresaPadrao = "" ;
   this.AV21EmpresaPadraoCliFor = "" ;
   this.AV22EmpresaPadraoCaixaBanco = "" ;
   this.AV38snExiste = "" ;
   this.AV39SConvenioId = 0 ;
   this.AV53SnErroEmail = "" ;
   this.AV52snUsuario = "" ;
   this.AV67snUsuario1 = "" ;
   this.AV57ErrDsc = "" ;
   this.AV66snExiste1 = "" ;
   this.AV10ret = 0 ;
   this.AV20ConvenioId = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A1681ConvenioId = 0 ;
   this.AV54SnFornecedor = "" ;
   this.AV23SnAlterou = "" ;
   this.Gx_BScreen = 0 ;
   this.A2082ConvenioDescricao = "" ;
   this.A2083ConvenioNumero = "" ;
   this.A2084ConvenioExercicio = "" ;
   this.A2080ConvenioTipoConvenio = "" ;
   this.A2087ConvenioVencimento = gx.date.nullDate() ;
   this.A2088ConvenioQtdeDiasEmail = 0 ;
   this.A2085ConvenioSnDespBancaria = "" ;
   this.A2086ConvenioSnLicitacao = "" ;
   this.A2693ConvenioSnBoxSaldoConta = "" ;
   this.A2183ConvenioAtivo = "" ;
   this.A2194ConvenioDataEnvioEmail = gx.date.nullDate() ;
   this.A1683ConvenioUsuarioAlt = "" ;
   this.A1684ConvenioDataHoraAlt = gx.date.nullDate() ;
   this.A2143ConvenioQtdeFornec = 0 ;
   this.AV68Tab = [ ] ;
   this.Gx_mode = "" ;
   this.Events = {"e143w2_client": ["'FECHAR'", true] ,"e153w2_client": ["AFTER TRN", true] ,"e163w2_client": ["'PROCESSOCONV'", true] ,"e173w224_client": ["ENTER", true] ,"e183w224_client": ["CANCEL", true] ,"e113w224_client": ["'CAIXABANCOCONVENIO'", false] ,"e123w224_client": ["'USUARIOSCONVENIO'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV20ConvenioId',fld:'vCONVENIOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV56AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'A2087ConvenioVencimento',fld:'CONVENIOVENCIMENTO'},{av:'Gx_mode',fld:'vMODE'},{av:'AV56AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'}],[{av:'AV72ConvenioVencimento',fld:'vCONVENIOVENCIMENTO'}]];
   this.EvtParms["'PROCESSOCONV'"] = [[{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'}],[]];
   this.EvtParms["'CAIXABANCOCONVENIO'"] = [[{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["'USUARIOSCONVENIO'"] = [[{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'},{av:'A2087ConvenioVencimento',fld:'CONVENIOVENCIMENTO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.setPrompt("PROMPT_2202", [78]);
   this.setPrompt("PROMPT_2111", [88]);
   this.setPrompt("PROMPT_75", [97]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV20ConvenioId", "vCONVENIOID", 0, "int");
   this.setVCMap("AV14EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A1680ConvenioEmpresaId", "CONVENIOEMPRESAID", 0, "char");
   this.setVCMap("A2143ConvenioQtdeFornec", "CONVENIOQTDEFORNEC", 0, "int");
   this.setVCMap("AV52snUsuario", "vSNUSUARIO", 0, "char");
   this.setVCMap("AV53SnErroEmail", "vSNERROEMAIL", 0, "char");
   this.setVCMap("AV67snUsuario1", "vSNUSUARIO1", 0, "char");
   this.setVCMap("AV57ErrDsc", "vERRDSC", 0, "svchar");
   this.setVCMap("AV10ret", "vRET", 0, "int");
   this.setVCMap("AV54SnFornecedor", "vSNFORNECEDOR", 0, "char");
   this.setVCMap("AV38snExiste", "vSNEXISTE", 0, "char");
   this.setVCMap("AV23SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV76Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV75Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV21EmpresaPadraoCliFor", "vEMPRESAPADRAOCLIFOR", 0, "char");
   this.setVCMap("A2201ConvenioFornecedorPessoaEmpId", "CONVENIOFORNECEDORPESSOAEMPID", 76, "char");
   this.setVCMap("A446PessoaFornecedor", "PESSOAFORNECEDOR", 76, "char");
   this.setVCMap("AV40SnAlterouD", "vSNALTEROUD", 0, "char");
   this.setVCMap("A2101ConvenioFornecedorUsuarioAlt", "CONVENIOFORNECEDORUSUARIOALT", 76, "char");
   this.setVCMap("A2102ConvenioFornecedorDataHoraAlt", "CONVENIOFORNECEDORDATAHORAALT", 76, "dtime");
   this.setVCMap("AV22EmpresaPadraoCaixaBanco", "vEMPRESAPADRAOCAIXABANCO", 0, "char");
   this.setVCMap("A2110ConvenioCaixaBancoEmpId", "CONVENIOCAIXABANCOEMPID", 86, "char");
   this.setVCMap("AV41SnAlterouT", "vSNALTEROUT", 0, "char");
   this.setVCMap("A2113ConvenioCaixaBancoUsuarioAlt", "CONVENIOCAIXABANCOUSUARIOALT", 86, "char");
   this.setVCMap("A2114ConvenioCaixaBancoDataHoraAlt", "CONVENIOCAIXABANCODATAHORAALT", 86, "dtime");
   this.setVCMap("AV42SnAlterouQ", "vSNALTEROUQ", 0, "char");
   this.setVCMap("A2477ConvenioUsuarioUsuarioAlt", "CONVENIOUSUARIOUSUARIOALT", 95, "char");
   this.setVCMap("A2478ConvenioUsuarioDataHoraAlt", "CONVENIOUSUARIODATAHORAALT", 95, "dtime");
   this.InitStandaloneVars( );
   this.LvlOlds[ 224 ]= ["O2143ConvenioQtdeFornec","O2183ConvenioAtivo","O2086ConvenioSnLicitacao","O2085ConvenioSnDespBancaria","O2194ConvenioDataEnvioEmail","O2088ConvenioQtdeDiasEmail","O2087ConvenioVencimento","O2080ConvenioTipoConvenio","O2084ConvenioExercicio","O2083ConvenioNumero","O2082ConvenioDescricao"] ;
   this.LvlOlds[ 228 ]= ["O2081ConvenioFornecedorTpLicitacao","O2202ConvenioFornecedorPessoaId"] ;
   this.LvlOlds[ 215 ]= ["O2111ConvenioCaixaBancoId"] ;
   this.LvlOlds[ 258 ]= ["O75UsuarioId","O2143ConvenioQtdeFornec"] ;
});
gx.setParentObj(new tconvenio());
