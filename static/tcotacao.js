/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:45:38.77
*/
gx.evt.autoSkip = false;
gx.define('tcotacao', false, function () {
   this.ServerClass =  "tcotacao" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
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
      this.AV19LogSolicitacaoEmpresaId=gx.fn.getControlValue("vLOGSOLICITACAOEMPRESAID") ;
      this.AV20LogSolicitacaoNumero=gx.fn.getIntegerValue("vLOGSOLICITACAONUMERO",'.') ;
      this.AV21LogSolicitacaoItemSeq=gx.fn.getIntegerValue("vLOGSOLICITACAOITEMSEQ",'.') ;
      this.AV22LogEmpresaPessoasEmpresaId=gx.fn.getControlValue("vLOGEMPRESAPESSOASEMPRESAID") ;
      this.AV23LogPessoaId=gx.fn.getIntegerValue("vLOGPESSOAID",'.') ;
      this.AV18lCotacaos=gx.fn.getControlValue("vLCOTACAOS") ;
      this.AV24LogUsuario=gx.fn.getControlValue("vLOGUSUARIO") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Solicitacaoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SOLICITACAOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Solicitacaonumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SOLICITACAONUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Solicitacaoitemseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Solicitacaoitemseq",["gx.O.A3370SolicitacaoEmpresaId", "gx.O.A3371SolicitacaoNumero", "gx.O.A3392SolicitacaoItemSeq"],[]);
      return true;
   }
   this.Valid_Empresapessoasempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("EMPRESAPESSOASEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pessoaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Pessoaid",["gx.O.Gx_mode", "gx.O.O72PessoaTelefone", "gx.O.O472PessoaCNPJ", "gx.O.O473PessoaCPF", "gx.O.O71PessoaFantasia", "gx.O.O70PessoaRazaoSocial", "gx.O.A3370SolicitacaoEmpresaId", "gx.O.A3371SolicitacaoNumero", "gx.O.A3392SolicitacaoItemSeq", "gx.O.A227EmpresaPessoasEmpresaId", "gx.O.A69PessoaId", "gx.O.A70PessoaRazaoSocial", "gx.O.A71PessoaFantasia", "gx.O.A473PessoaCPF", "gx.O.A472PessoaCNPJ", "gx.O.A72PessoaTelefone", "gx.O.A3451CotacaoTipo", "gx.O.A3452CotacaoObservacao", "gx.O.A3394CotacaoMarca", "gx.O.A3453CotacaoNumeroFornecedor", "gx.num.urlDecimal(gx.O.A3395CotacaoValorAvista,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A3396CotacaoValoraPrazo,\'.\',\',\')", "gx.O.A3454CotacaoEntrega", "gx.O.A3455CotacaoPagamento", "gx.O.A3456CotacaoGarantia", "gx.num.urlDecimal(gx.O.A3457CotacaoPCDesconto1,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A3458CotacaoPCDesconto2,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A3459CotacaoPCDesconto3,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A3460CotacaoPCDesconto4,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A3461CotacaoPCDesconto5,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A4240CotacaoPCFrete,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A3462CotacaoValorFrete,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A4241CotacaoPCIPI,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A3463CotacaoValorIPI,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A4242CotacaoPCICMS,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A3464CotacaoValorICMS,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A4243CotacaoPCICMSST,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A3465CotacaoValorICMSST,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A3466CotacaoValorEncargos,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A3467CotacaoValorSeguro,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A3473CotacaoValorTotalAVista,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A3479CotacaoValorTotalaPrazo,\'.\',\',\')", "gx.O.A3480CotacaoUsuarioInc", "gx.O.A3397CotacaoSnGanhador", "gx.O.A3481CotacaoUsuarioAlt", 'gx.date.urlDateTime(gx.O.A3482CotacaoDataHoraAlt,"DMY4")'],["O70PessoaRazaoSocial", "O71PessoaFantasia", "O473PessoaCPF", "O472PessoaCNPJ", "O72PessoaTelefone", "A3451CotacaoTipo", "A3452CotacaoObservacao", "A3394CotacaoMarca", "A3453CotacaoNumeroFornecedor", "A3395CotacaoValorAvista", "A3396CotacaoValoraPrazo", "A3454CotacaoEntrega", "A3455CotacaoPagamento", "A3456CotacaoGarantia", "A3457CotacaoPCDesconto1", "A3458CotacaoPCDesconto2", "A3459CotacaoPCDesconto3", "A3460CotacaoPCDesconto4", "A3461CotacaoPCDesconto5", "A4240CotacaoPCFrete", "A3462CotacaoValorFrete", "A4241CotacaoPCIPI", "A3463CotacaoValorIPI", "A4242CotacaoPCICMS", "A3464CotacaoValorICMS", "A4243CotacaoPCICMSST", "A3465CotacaoValorICMSST", "A3466CotacaoValorEncargos", "A3467CotacaoValorSeguro", "A3473CotacaoValorTotalAVista", "A3479CotacaoValorTotalaPrazo", "A3480CotacaoUsuarioInc", "A3397CotacaoSnGanhador", "A3481CotacaoUsuarioAlt", "A3482CotacaoDataHoraAlt", "A70PessoaRazaoSocial", "A71PessoaFantasia", "A473PessoaCPF", "A472PessoaCNPJ", "A72PessoaTelefone", "A3468CotacaoValorComDesc1Vis", "A3469CotacaoValorComDesc2Vis", "A3470CotacaoValorComDesc3Vis", "A3471CotacaoValorComDesc4Vis", "A3472CotacaoValorComDesc5Vis", "A4238CotacaoValorAvistaAux", "A3474CotacaoValorComDesc1Pra", "A3475CotacaoValorComDesc2Pra", "A3476CotacaoValorComDesc3Pra", "A3477CotacaoValorComDesc4Pra", "A3478CotacaoValorComDesc5Pra", "A4239CotacaoValorAaPrazoAux", "Gx_mode", "Z3370SolicitacaoEmpresaId", "Z3371SolicitacaoNumero", "Z3392SolicitacaoItemSeq", "Z227EmpresaPessoasEmpresaId", "Z69PessoaId", "Z3451CotacaoTipo", "Z3452CotacaoObservacao", "Z3394CotacaoMarca", "Z3453CotacaoNumeroFornecedor", "Z3395CotacaoValorAvista", "Z3396CotacaoValoraPrazo", "Z3454CotacaoEntrega", "Z3455CotacaoPagamento", "Z3456CotacaoGarantia", "Z3457CotacaoPCDesconto1", "Z3458CotacaoPCDesconto2", "Z3459CotacaoPCDesconto3", "Z3460CotacaoPCDesconto4", "Z3461CotacaoPCDesconto5", "Z4240CotacaoPCFrete", "Z3462CotacaoValorFrete", "Z4241CotacaoPCIPI", "Z3463CotacaoValorIPI", "Z4242CotacaoPCICMS", "Z3464CotacaoValorICMS", "Z4243CotacaoPCICMSST", "Z3465CotacaoValorICMSST", "Z3466CotacaoValorEncargos", "Z3467CotacaoValorSeguro", "Z3473CotacaoValorTotalAVista", "Z3479CotacaoValorTotalaPrazo", "Z3480CotacaoUsuarioInc", "Z3397CotacaoSnGanhador", "Z3481CotacaoUsuarioAlt", "Z3482CotacaoDataHoraAlt", "Z70PessoaRazaoSocial", "Z71PessoaFantasia", "Z473PessoaCPF", "Z472PessoaCNPJ", "Z72PessoaTelefone", "Z3468CotacaoValorComDesc1Vis", "Z3469CotacaoValorComDesc2Vis", "Z3470CotacaoValorComDesc3Vis", "Z3471CotacaoValorComDesc4Vis", "Z3472CotacaoValorComDesc5Vis", "Z4238CotacaoValorAvistaAux", "Z3474CotacaoValorComDesc1Pra", "Z3475CotacaoValorComDesc2Pra", "Z3476CotacaoValorComDesc3Pra", "Z3477CotacaoValorComDesc4Pra", "Z3478CotacaoValorComDesc5Pra", "Z4239CotacaoValorAaPrazoAux", "O3397CotacaoSnGanhador", "O3480CotacaoUsuarioInc", "O3479CotacaoValorTotalaPrazo", "O3473CotacaoValorTotalAVista", "O4239CotacaoValorAaPrazoAux", "O3478CotacaoValorComDesc5Pra", "O3477CotacaoValorComDesc4Pra", "O3476CotacaoValorComDesc3Pra", "O3475CotacaoValorComDesc2Pra", "O3474CotacaoValorComDesc1Pra", "O3467CotacaoValorSeguro", "O4238CotacaoValorAvistaAux", "O3472CotacaoValorComDesc5Vis", "O3471CotacaoValorComDesc4Vis", "O3470CotacaoValorComDesc3Vis", "O3469CotacaoValorComDesc2Vis", "O3468CotacaoValorComDesc1Vis", "O3466CotacaoValorEncargos", "O3465CotacaoValorICMSST", "O4243CotacaoPCICMSST", "O3464CotacaoValorICMS", "O4242CotacaoPCICMS", "O3463CotacaoValorIPI", "O4241CotacaoPCIPI", "O3462CotacaoValorFrete", "O4240CotacaoPCFrete", "O3461CotacaoPCDesconto5", "O3460CotacaoPCDesconto4", "O3459CotacaoPCDesconto3", "O3458CotacaoPCDesconto2", "O3457CotacaoPCDesconto1", "O3456CotacaoGarantia", "O3455CotacaoPagamento", "O3454CotacaoEntrega", "O3396CotacaoValoraPrazo", "O3395CotacaoValorAvista", "O3453CotacaoNumeroFornecedor", "O3394CotacaoMarca", "O3452CotacaoObservacao", "O3451CotacaoTipo", "O69PessoaId", "O72PessoaTelefone", "O472PessoaCNPJ", "O473PessoaCPF", "O71PessoaFantasia", "O70PessoaRazaoSocial", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.Valid_Pessoarazaosocial=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PESSOARAZAOSOCIAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pessoafantasia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PESSOAFANTASIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pessoacpf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PESSOACPF");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pessoacnpj=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PESSOACNPJ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pessoatelefone=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PESSOATELEFONE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cotacaotipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOTIPO");
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
   this.Valid_Cotacaoobservacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOOBSERVACAO");
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
   this.Valid_Cotacaomarca=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOMARCA");
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
   this.Valid_Cotacaonumerofornecedor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAONUMEROFORNECEDOR");
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
   this.Valid_Cotacaovaloravista=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOVALORAVISTA");
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
   this.Valid_Cotacaovaloraprazo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOVALORAPRAZO");
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
   this.Valid_Cotacaoentrega=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOENTREGA");
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
   this.Valid_Cotacaopagamento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOPAGAMENTO");
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
   this.Valid_Cotacaogarantia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOGARANTIA");
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
   this.Valid_Cotacaopcdesconto1=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOPCDESCONTO1");
         this.AnyError  = 0;
         try {
            this.A3468CotacaoValorComDesc1Vis =  gx.num.subtract( this.A3395CotacaoValorAvista , ( gx.num.divide( ( gx.num.multiply( this.A3395CotacaoValorAvista , this.A3457CotacaoPCDesconto1 ) ) , 100 ) ) )  ;
         }
         catch(e){}
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
         try {
            this.A3474CotacaoValorComDesc1Pra =  gx.num.subtract( this.A3396CotacaoValoraPrazo , ( gx.num.divide( ( gx.num.multiply( this.A3396CotacaoValoraPrazo , this.A3457CotacaoPCDesconto1 ) ) , 100 ) ) )  ;
         }
         catch(e){}
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
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
   this.Valid_Cotacaopcdesconto2=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOPCDESCONTO2");
         this.AnyError  = 0;
         try {
            this.A3475CotacaoValorComDesc2Pra =  gx.num.subtract( this.A3474CotacaoValorComDesc1Pra , ( gx.num.divide( ( gx.num.multiply( this.A3474CotacaoValorComDesc1Pra , this.A3458CotacaoPCDesconto2 ) ) , 100 ) ) )  ;
         }
         catch(e){}
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
         try {
            this.A3469CotacaoValorComDesc2Vis =  gx.num.subtract( this.A3468CotacaoValorComDesc1Vis , ( gx.num.divide( ( gx.num.multiply( this.A3468CotacaoValorComDesc1Vis , this.A3458CotacaoPCDesconto2 ) ) , 100 ) ) )  ;
         }
         catch(e){}
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
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
   this.Valid_Cotacaopcdesconto3=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOPCDESCONTO3");
         this.AnyError  = 0;
         try {
            this.A3476CotacaoValorComDesc3Pra =  gx.num.subtract( this.A3475CotacaoValorComDesc2Pra , ( gx.num.divide( ( gx.num.multiply( this.A3475CotacaoValorComDesc2Pra , this.A3459CotacaoPCDesconto3 ) ) , 100 ) ) )  ;
         }
         catch(e){}
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
         try {
            this.A3470CotacaoValorComDesc3Vis =  gx.num.subtract( this.A3469CotacaoValorComDesc2Vis , ( gx.num.divide( ( gx.num.multiply( this.A3469CotacaoValorComDesc2Vis , this.A3459CotacaoPCDesconto3 ) ) , 100 ) ) )  ;
         }
         catch(e){}
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
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
   this.Valid_Cotacaopcdesconto4=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOPCDESCONTO4");
         this.AnyError  = 0;
         try {
            this.A3477CotacaoValorComDesc4Pra =  gx.num.subtract( this.A3476CotacaoValorComDesc3Pra , ( gx.num.divide( ( gx.num.multiply( this.A3476CotacaoValorComDesc3Pra , this.A3460CotacaoPCDesconto4 ) ) , 100 ) ) )  ;
         }
         catch(e){}
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
         try {
            this.A3471CotacaoValorComDesc4Vis =  gx.num.subtract( this.A3470CotacaoValorComDesc3Vis , ( gx.num.divide( ( gx.num.multiply( this.A3470CotacaoValorComDesc3Vis , this.A3460CotacaoPCDesconto4 ) ) , 100 ) ) )  ;
         }
         catch(e){}
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
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
   this.Valid_Cotacaopcdesconto5=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOPCDESCONTO5");
         this.AnyError  = 0;
         try {
            this.A3478CotacaoValorComDesc5Pra =  gx.num.subtract( this.A3477CotacaoValorComDesc4Pra , ( gx.num.divide( ( gx.num.multiply( this.A3477CotacaoValorComDesc4Pra , this.A3461CotacaoPCDesconto5 ) ) , 100 ) ) )  ;
         }
         catch(e){}
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
         try {
            this.A3472CotacaoValorComDesc5Vis =  gx.num.subtract( this.A3471CotacaoValorComDesc4Vis , ( gx.num.divide( ( gx.num.multiply( this.A3471CotacaoValorComDesc4Vis , this.A3461CotacaoPCDesconto5 ) ) , 100 ) ) )  ;
         }
         catch(e){}
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
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
   this.Valid_Cotacaopcfrete=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOPCFRETE");
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
   this.Valid_Cotacaovalorfrete=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOVALORFRETE");
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
   this.Valid_Cotacaopcipi=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOPCIPI");
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
   this.Valid_Cotacaovaloripi=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOVALORIPI");
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
   this.Valid_Cotacaopcicms=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOPCICMS");
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
   this.Valid_Cotacaovaloricms=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOVALORICMS");
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
   this.Valid_Cotacaopcicmsst=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOPCICMSST");
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
   this.Valid_Cotacaovaloricmsst=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOVALORICMSST");
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
   this.Valid_Cotacaovalorencargos=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOVALORENCARGOS");
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
   this.Valid_Cotacaovalorseguro=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOVALORSEGURO");
         this.AnyError  = 0;
         try {
            this.A4239CotacaoValorAaPrazoAux =  gx.num.add( gx.num.add( gx.num.add( gx.num.add( gx.num.add( gx.num.add( this.A3478CotacaoValorComDesc5Pra , this.A3462CotacaoValorFrete ) , this.A3463CotacaoValorIPI ) , this.A3464CotacaoValorICMS ) , this.A3465CotacaoValorICMSST ) , this.A3466CotacaoValorEncargos ) , this.A3467CotacaoValorSeguro )  ;
         }
         catch(e){}
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
         try {
            this.A4238CotacaoValorAvistaAux =  gx.num.add( gx.num.add( gx.num.add( gx.num.add( gx.num.add( gx.num.add( this.A3472CotacaoValorComDesc5Vis , this.A3462CotacaoValorFrete ) , this.A3463CotacaoValorIPI ) , this.A3464CotacaoValorICMS ) , this.A3465CotacaoValorICMSST ) , this.A3466CotacaoValorEncargos ) , this.A3467CotacaoValorSeguro )  ;
         }
         catch(e){}
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
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
   this.Valid_Cotacaovalorcomdesc1vis=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOVALORCOMDESC1VIS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cotacaovalorcomdesc2vis=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOVALORCOMDESC2VIS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cotacaovalorcomdesc3vis=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOVALORCOMDESC3VIS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cotacaovalorcomdesc4vis=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOVALORCOMDESC4VIS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cotacaovalorcomdesc5vis=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOVALORCOMDESC5VIS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cotacaovaloravistaaux=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOVALORAVISTAAUX");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cotacaovalortotalavista=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOVALORTOTALAVISTA");
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
   this.Valid_Cotacaovalorcomdesc1pra=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOVALORCOMDESC1PRA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cotacaovalorcomdesc2pra=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOVALORCOMDESC2PRA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cotacaovalorcomdesc3pra=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOVALORCOMDESC3PRA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cotacaovalorcomdesc4pra=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOVALORCOMDESC4PRA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cotacaovalorcomdesc5pra=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOVALORCOMDESC5PRA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cotacaovaloraaprazoaux=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOVALORAAPRAZOAUX");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cotacaovalortotalaprazo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOVALORTOTALAPRAZO");
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
   this.Valid_Cotacaousuarioinc=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOUSUARIOINC");
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
   this.Valid_Cotacaosnganhador=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COTACAOSNGANHADOR");
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
   this.e116g371_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e126g371_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e136g371_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,32,34,38,40,43,45,48,50,53,55,58,60,63,65,68,70,73,75,78,80,83,85,88,90,93,95,98,100,103,105,108,110,113,115,118,120,123,125,128,130,133,135,138,140,143,145,148,150,153,155,158,160,163,165,168,170,173,175,178,180,183,185,188,190,193,195,198,200,203,205,208,210,213,215,218,220,223,225,228,230,233,235,238,240,243,245,248,250,253,255,259,262,264,267,269,270,279,281,283,284];
   this.GXLastCtrlId =284;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Solicitacaoempresaid,isvalid:null,rgrid:[],fld:"SOLICITACAOEMPRESAID",gxz:"Z3370SolicitacaoEmpresaId",gxold:"O3370SolicitacaoEmpresaId",gxvar:"A3370SolicitacaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3370SolicitacaoEmpresaId=Value},v2z:function(Value){gx.O.Z3370SolicitacaoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("SOLICITACAOEMPRESAID",gx.O.A3370SolicitacaoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3370SolicitacaoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("SOLICITACAOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Solicitacaonumero,isvalid:null,rgrid:[],fld:"SOLICITACAONUMERO",gxz:"Z3371SolicitacaoNumero",gxold:"O3371SolicitacaoNumero",gxvar:"A3371SolicitacaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3371SolicitacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3371SolicitacaoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SOLICITACAONUMERO",gx.O.A3371SolicitacaoNumero,0)},c2v:function(){gx.O.A3371SolicitacaoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SOLICITACAONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Solicitacaoitemseq,isvalid:null,rgrid:[],fld:"SOLICITACAOITEMSEQ",gxz:"Z3392SolicitacaoItemSeq",gxold:"O3392SolicitacaoItemSeq",gxvar:"A3392SolicitacaoItemSeq",ucs:[],op:[],ip:[24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3392SolicitacaoItemSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3392SolicitacaoItemSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SOLICITACAOITEMSEQ",gx.O.A3392SolicitacaoItemSeq,0)},c2v:function(){gx.O.A3392SolicitacaoItemSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SOLICITACAOITEMSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"EMPRESAPESSOASEMPRESAID",gxz:"Z227EmpresaPessoasEmpresaId",gxold:"O227EmpresaPessoasEmpresaId",gxvar:"A227EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A227EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.Z227EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("EMPRESAPESSOASEMPRESAID",gx.O.A227EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.A227EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pessoaid,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[60,55,50,45,40,269,264,259,255,250,215,180,175,170,165,160,155,150,145,140,135,130,125,120,115,110,105,100,95,90,85,80,75,70,65],ip:[269,264,259,255,250,215,180,175,170,165,160,155,150,145,140,135,130,125,120,115,110,105,100,95,90,85,80,75,70,65,60,55,50,45,40,34,29,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PESSOAID",gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Pessoarazaosocial,isvalid:null,rgrid:[],fld:"PESSOARAZAOSOCIAL",gxz:"Z70PessoaRazaoSocial",gxold:"O70PessoaRazaoSocial",gxvar:"A70PessoaRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A70PessoaRazaoSocial=Value},v2z:function(Value){gx.O.Z70PessoaRazaoSocial=Value},v2c:function(){gx.fn.setControlValue("PESSOARAZAOSOCIAL",gx.O.A70PessoaRazaoSocial,0)},c2v:function(){gx.O.A70PessoaRazaoSocial=this.val()},val:function(){return gx.fn.getControlValue("PESSOARAZAOSOCIAL")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Pessoafantasia,isvalid:null,rgrid:[],fld:"PESSOAFANTASIA",gxz:"Z71PessoaFantasia",gxold:"O71PessoaFantasia",gxvar:"A71PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A71PessoaFantasia=Value},v2z:function(Value){gx.O.Z71PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("PESSOAFANTASIA",gx.O.A71PessoaFantasia,0)},c2v:function(){gx.O.A71PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("PESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Pessoacpf,isvalid:null,rgrid:[],fld:"PESSOACPF",gxz:"Z473PessoaCPF",gxold:"O473PessoaCPF",gxvar:"A473PessoaCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A473PessoaCPF=Value},v2z:function(Value){gx.O.Z473PessoaCPF=Value},v2c:function(){gx.fn.setControlValue("PESSOACPF",gx.O.A473PessoaCPF,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A473PessoaCPF=this.val()},val:function(){return gx.fn.getControlValue("PESSOACPF")},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Pessoacnpj,isvalid:null,rgrid:[],fld:"PESSOACNPJ",gxz:"Z472PessoaCNPJ",gxold:"O472PessoaCNPJ",gxvar:"A472PessoaCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A472PessoaCNPJ=Value},v2z:function(Value){gx.O.Z472PessoaCNPJ=Value},v2c:function(){gx.fn.setControlValue("PESSOACNPJ",gx.O.A472PessoaCNPJ,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A472PessoaCNPJ=this.val()},val:function(){return gx.fn.getControlValue("PESSOACNPJ")},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Pessoatelefone,isvalid:null,rgrid:[],fld:"PESSOATELEFONE",gxz:"Z72PessoaTelefone",gxold:"O72PessoaTelefone",gxvar:"A72PessoaTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A72PessoaTelefone=Value},v2z:function(Value){gx.O.Z72PessoaTelefone=Value},v2c:function(){gx.fn.setControlValue("PESSOATELEFONE",gx.O.A72PessoaTelefone,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A72PessoaTelefone=this.val()},val:function(){return gx.fn.getControlValue("PESSOATELEFONE")},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[63]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cotacaotipo,isvalid:null,rgrid:[],fld:"COTACAOTIPO",gxz:"Z3451CotacaoTipo",gxold:"O3451CotacaoTipo",gxvar:"A3451CotacaoTipo",ucs:[],op:[],ip:[65],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A3451CotacaoTipo=Value},v2z:function(Value){gx.O.Z3451CotacaoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("COTACAOTIPO",gx.O.A3451CotacaoTipo)},c2v:function(){gx.O.A3451CotacaoTipo=this.val()},val:function(){return gx.fn.getControlValue("COTACAOTIPO")},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Cotacaoobservacao,isvalid:null,rgrid:[],fld:"COTACAOOBSERVACAO",gxz:"Z3452CotacaoObservacao",gxold:"O3452CotacaoObservacao",gxvar:"A3452CotacaoObservacao",ucs:[],op:[],ip:[70],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3452CotacaoObservacao=Value},v2z:function(Value){gx.O.Z3452CotacaoObservacao=Value},v2c:function(){gx.fn.setControlValue("COTACAOOBSERVACAO",gx.O.A3452CotacaoObservacao,0)},c2v:function(){gx.O.A3452CotacaoObservacao=this.val()},val:function(){return gx.fn.getControlValue("COTACAOOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[73]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cotacaomarca,isvalid:null,rgrid:[],fld:"COTACAOMARCA",gxz:"Z3394CotacaoMarca",gxold:"O3394CotacaoMarca",gxvar:"A3394CotacaoMarca",ucs:[],op:[],ip:[75],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3394CotacaoMarca=Value},v2z:function(Value){gx.O.Z3394CotacaoMarca=Value},v2c:function(){gx.fn.setControlValue("COTACAOMARCA",gx.O.A3394CotacaoMarca,0)},c2v:function(){gx.O.A3394CotacaoMarca=this.val()},val:function(){return gx.fn.getControlValue("COTACAOMARCA")},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cotacaonumerofornecedor,isvalid:null,rgrid:[],fld:"COTACAONUMEROFORNECEDOR",gxz:"Z3453CotacaoNumeroFornecedor",gxold:"O3453CotacaoNumeroFornecedor",gxvar:"A3453CotacaoNumeroFornecedor",ucs:[],op:[],ip:[80],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3453CotacaoNumeroFornecedor=Value},v2z:function(Value){gx.O.Z3453CotacaoNumeroFornecedor=Value},v2c:function(){gx.fn.setControlValue("COTACAONUMEROFORNECEDOR",gx.O.A3453CotacaoNumeroFornecedor,0)},c2v:function(){gx.O.A3453CotacaoNumeroFornecedor=this.val()},val:function(){return gx.fn.getControlValue("COTACAONUMEROFORNECEDOR")},nac:gx.falseFn};
   GXValidFnc[83]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cotacaovaloravista,isvalid:null,rgrid:[],fld:"COTACAOVALORAVISTA",gxz:"Z3395CotacaoValorAvista",gxold:"O3395CotacaoValorAvista",gxvar:"A3395CotacaoValorAvista",ucs:[],op:[],ip:[85],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3395CotacaoValorAvista=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3395CotacaoValorAvista=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COTACAOVALORAVISTA",gx.O.A3395CotacaoValorAvista,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3395CotacaoValorAvista=this.val()},val:function(){return gx.fn.getDecimalValue("COTACAOVALORAVISTA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 85 , function() {
   });
   GXValidFnc[88]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cotacaovaloraprazo,isvalid:null,rgrid:[],fld:"COTACAOVALORAPRAZO",gxz:"Z3396CotacaoValoraPrazo",gxold:"O3396CotacaoValoraPrazo",gxvar:"A3396CotacaoValoraPrazo",ucs:[],op:[],ip:[90],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3396CotacaoValoraPrazo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3396CotacaoValoraPrazo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COTACAOVALORAPRAZO",gx.O.A3396CotacaoValoraPrazo,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3396CotacaoValoraPrazo=this.val()},val:function(){return gx.fn.getDecimalValue("COTACAOVALORAPRAZO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 90 , function() {
   });
   GXValidFnc[93]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cotacaoentrega,isvalid:null,rgrid:[],fld:"COTACAOENTREGA",gxz:"Z3454CotacaoEntrega",gxold:"O3454CotacaoEntrega",gxvar:"A3454CotacaoEntrega",ucs:[],op:[],ip:[95],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3454CotacaoEntrega=Value},v2z:function(Value){gx.O.Z3454CotacaoEntrega=Value},v2c:function(){gx.fn.setControlValue("COTACAOENTREGA",gx.O.A3454CotacaoEntrega,0)},c2v:function(){gx.O.A3454CotacaoEntrega=this.val()},val:function(){return gx.fn.getControlValue("COTACAOENTREGA")},nac:gx.falseFn};
   GXValidFnc[98]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cotacaopagamento,isvalid:null,rgrid:[],fld:"COTACAOPAGAMENTO",gxz:"Z3455CotacaoPagamento",gxold:"O3455CotacaoPagamento",gxvar:"A3455CotacaoPagamento",ucs:[],op:[],ip:[100],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3455CotacaoPagamento=Value},v2z:function(Value){gx.O.Z3455CotacaoPagamento=Value},v2c:function(){gx.fn.setControlValue("COTACAOPAGAMENTO",gx.O.A3455CotacaoPagamento,0)},c2v:function(){gx.O.A3455CotacaoPagamento=this.val()},val:function(){return gx.fn.getControlValue("COTACAOPAGAMENTO")},nac:gx.falseFn};
   GXValidFnc[103]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[105]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cotacaogarantia,isvalid:null,rgrid:[],fld:"COTACAOGARANTIA",gxz:"Z3456CotacaoGarantia",gxold:"O3456CotacaoGarantia",gxvar:"A3456CotacaoGarantia",ucs:[],op:[],ip:[105],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3456CotacaoGarantia=Value},v2z:function(Value){gx.O.Z3456CotacaoGarantia=Value},v2c:function(){gx.fn.setControlValue("COTACAOGARANTIA",gx.O.A3456CotacaoGarantia,0)},c2v:function(){gx.O.A3456CotacaoGarantia=this.val()},val:function(){return gx.fn.getControlValue("COTACAOGARANTIA")},nac:gx.falseFn};
   GXValidFnc[108]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[110]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cotacaopcdesconto1,isvalid:null,rgrid:[],fld:"COTACAOPCDESCONTO1",gxz:"Z3457CotacaoPCDesconto1",gxold:"O3457CotacaoPCDesconto1",gxvar:"A3457CotacaoPCDesconto1",ucs:[],op:[220,185],ip:[220,90,185,110,85],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3457CotacaoPCDesconto1=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3457CotacaoPCDesconto1=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COTACAOPCDESCONTO1",gx.O.A3457CotacaoPCDesconto1,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3457CotacaoPCDesconto1=this.val()},val:function(){return gx.fn.getDecimalValue("COTACAOPCDESCONTO1",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 110 , function() {
   });
   GXValidFnc[113]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[115]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cotacaopcdesconto2,isvalid:null,rgrid:[],fld:"COTACAOPCDESCONTO2",gxz:"Z3458CotacaoPCDesconto2",gxold:"O3458CotacaoPCDesconto2",gxvar:"A3458CotacaoPCDesconto2",ucs:[],op:[190,225],ip:[190,185,225,115,220],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3458CotacaoPCDesconto2=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3458CotacaoPCDesconto2=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COTACAOPCDESCONTO2",gx.O.A3458CotacaoPCDesconto2,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3458CotacaoPCDesconto2=this.val()},val:function(){return gx.fn.getDecimalValue("COTACAOPCDESCONTO2",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 115 , function() {
   });
   GXValidFnc[118]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[120]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cotacaopcdesconto3,isvalid:null,rgrid:[],fld:"COTACAOPCDESCONTO3",gxz:"Z3459CotacaoPCDesconto3",gxold:"O3459CotacaoPCDesconto3",gxvar:"A3459CotacaoPCDesconto3",ucs:[],op:[195,230],ip:[195,190,230,120,225],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3459CotacaoPCDesconto3=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3459CotacaoPCDesconto3=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COTACAOPCDESCONTO3",gx.O.A3459CotacaoPCDesconto3,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3459CotacaoPCDesconto3=this.val()},val:function(){return gx.fn.getDecimalValue("COTACAOPCDESCONTO3",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 120 , function() {
   });
   GXValidFnc[123]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[125]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cotacaopcdesconto4,isvalid:null,rgrid:[],fld:"COTACAOPCDESCONTO4",gxz:"Z3460CotacaoPCDesconto4",gxold:"O3460CotacaoPCDesconto4",gxvar:"A3460CotacaoPCDesconto4",ucs:[],op:[200,235],ip:[200,195,235,125,230],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3460CotacaoPCDesconto4=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3460CotacaoPCDesconto4=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COTACAOPCDESCONTO4",gx.O.A3460CotacaoPCDesconto4,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3460CotacaoPCDesconto4=this.val()},val:function(){return gx.fn.getDecimalValue("COTACAOPCDESCONTO4",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 125 , function() {
   });
   GXValidFnc[128]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[130]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cotacaopcdesconto5,isvalid:null,rgrid:[],fld:"COTACAOPCDESCONTO5",gxz:"Z3461CotacaoPCDesconto5",gxold:"O3461CotacaoPCDesconto5",gxvar:"A3461CotacaoPCDesconto5",ucs:[],op:[205,240],ip:[205,200,240,130,235],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3461CotacaoPCDesconto5=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3461CotacaoPCDesconto5=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COTACAOPCDESCONTO5",gx.O.A3461CotacaoPCDesconto5,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3461CotacaoPCDesconto5=this.val()},val:function(){return gx.fn.getDecimalValue("COTACAOPCDESCONTO5",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 130 , function() {
   });
   GXValidFnc[133]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[135]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cotacaopcfrete,isvalid:null,rgrid:[],fld:"COTACAOPCFRETE",gxz:"Z4240CotacaoPCFrete",gxold:"O4240CotacaoPCFrete",gxvar:"A4240CotacaoPCFrete",ucs:[],op:[],ip:[135],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4240CotacaoPCFrete=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4240CotacaoPCFrete=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COTACAOPCFRETE",gx.O.A4240CotacaoPCFrete,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4240CotacaoPCFrete=this.val()},val:function(){return gx.fn.getDecimalValue("COTACAOPCFRETE",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 135 , function() {
   });
   GXValidFnc[138]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[140]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cotacaovalorfrete,isvalid:null,rgrid:[],fld:"COTACAOVALORFRETE",gxz:"Z3462CotacaoValorFrete",gxold:"O3462CotacaoValorFrete",gxvar:"A3462CotacaoValorFrete",ucs:[],op:[],ip:[140],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3462CotacaoValorFrete=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3462CotacaoValorFrete=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COTACAOVALORFRETE",gx.O.A3462CotacaoValorFrete,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3462CotacaoValorFrete=this.val()},val:function(){return gx.fn.getDecimalValue("COTACAOVALORFRETE",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 140 , function() {
   });
   GXValidFnc[143]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[145]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cotacaopcipi,isvalid:null,rgrid:[],fld:"COTACAOPCIPI",gxz:"Z4241CotacaoPCIPI",gxold:"O4241CotacaoPCIPI",gxvar:"A4241CotacaoPCIPI",ucs:[],op:[],ip:[145],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4241CotacaoPCIPI=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4241CotacaoPCIPI=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COTACAOPCIPI",gx.O.A4241CotacaoPCIPI,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4241CotacaoPCIPI=this.val()},val:function(){return gx.fn.getDecimalValue("COTACAOPCIPI",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 145 , function() {
   });
   GXValidFnc[148]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[150]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cotacaovaloripi,isvalid:null,rgrid:[],fld:"COTACAOVALORIPI",gxz:"Z3463CotacaoValorIPI",gxold:"O3463CotacaoValorIPI",gxvar:"A3463CotacaoValorIPI",ucs:[],op:[],ip:[150],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3463CotacaoValorIPI=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3463CotacaoValorIPI=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COTACAOVALORIPI",gx.O.A3463CotacaoValorIPI,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3463CotacaoValorIPI=this.val()},val:function(){return gx.fn.getDecimalValue("COTACAOVALORIPI",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 150 , function() {
   });
   GXValidFnc[153]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[155]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cotacaopcicms,isvalid:null,rgrid:[],fld:"COTACAOPCICMS",gxz:"Z4242CotacaoPCICMS",gxold:"O4242CotacaoPCICMS",gxvar:"A4242CotacaoPCICMS",ucs:[],op:[],ip:[155],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4242CotacaoPCICMS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4242CotacaoPCICMS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COTACAOPCICMS",gx.O.A4242CotacaoPCICMS,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4242CotacaoPCICMS=this.val()},val:function(){return gx.fn.getDecimalValue("COTACAOPCICMS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 155 , function() {
   });
   GXValidFnc[158]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[160]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cotacaovaloricms,isvalid:null,rgrid:[],fld:"COTACAOVALORICMS",gxz:"Z3464CotacaoValorICMS",gxold:"O3464CotacaoValorICMS",gxvar:"A3464CotacaoValorICMS",ucs:[],op:[],ip:[160],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3464CotacaoValorICMS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3464CotacaoValorICMS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COTACAOVALORICMS",gx.O.A3464CotacaoValorICMS,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3464CotacaoValorICMS=this.val()},val:function(){return gx.fn.getDecimalValue("COTACAOVALORICMS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 160 , function() {
   });
   GXValidFnc[163]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[165]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cotacaopcicmsst,isvalid:null,rgrid:[],fld:"COTACAOPCICMSST",gxz:"Z4243CotacaoPCICMSST",gxold:"O4243CotacaoPCICMSST",gxvar:"A4243CotacaoPCICMSST",ucs:[],op:[],ip:[165],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4243CotacaoPCICMSST=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4243CotacaoPCICMSST=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COTACAOPCICMSST",gx.O.A4243CotacaoPCICMSST,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4243CotacaoPCICMSST=this.val()},val:function(){return gx.fn.getDecimalValue("COTACAOPCICMSST",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 165 , function() {
   });
   GXValidFnc[168]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[170]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cotacaovaloricmsst,isvalid:null,rgrid:[],fld:"COTACAOVALORICMSST",gxz:"Z3465CotacaoValorICMSST",gxold:"O3465CotacaoValorICMSST",gxvar:"A3465CotacaoValorICMSST",ucs:[],op:[],ip:[170],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3465CotacaoValorICMSST=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3465CotacaoValorICMSST=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COTACAOVALORICMSST",gx.O.A3465CotacaoValorICMSST,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3465CotacaoValorICMSST=this.val()},val:function(){return gx.fn.getDecimalValue("COTACAOVALORICMSST",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 170 , function() {
   });
   GXValidFnc[173]={fld:"TEXTBLOCK34", format:0,grid:0};
   GXValidFnc[175]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cotacaovalorencargos,isvalid:null,rgrid:[],fld:"COTACAOVALORENCARGOS",gxz:"Z3466CotacaoValorEncargos",gxold:"O3466CotacaoValorEncargos",gxvar:"A3466CotacaoValorEncargos",ucs:[],op:[],ip:[175],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3466CotacaoValorEncargos=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3466CotacaoValorEncargos=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COTACAOVALORENCARGOS",gx.O.A3466CotacaoValorEncargos,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3466CotacaoValorEncargos=this.val()},val:function(){return gx.fn.getDecimalValue("COTACAOVALORENCARGOS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 175 , function() {
   });
   GXValidFnc[178]={fld:"TEXTBLOCK35", format:0,grid:0};
   GXValidFnc[180]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cotacaovalorseguro,isvalid:null,rgrid:[],fld:"COTACAOVALORSEGURO",gxz:"Z3467CotacaoValorSeguro",gxold:"O3467CotacaoValorSeguro",gxvar:"A3467CotacaoValorSeguro",ucs:[],op:[210,245],ip:[210,205,245,180,175,170,160,150,140,240],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3467CotacaoValorSeguro=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3467CotacaoValorSeguro=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COTACAOVALORSEGURO",gx.O.A3467CotacaoValorSeguro,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3467CotacaoValorSeguro=this.val()},val:function(){return gx.fn.getDecimalValue("COTACAOVALORSEGURO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 180 , function() {
   });
   GXValidFnc[183]={fld:"TEXTBLOCK36", format:0,grid:0};
   GXValidFnc[185]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Cotacaovalorcomdesc1vis,isvalid:null,rgrid:[],fld:"COTACAOVALORCOMDESC1VIS",gxz:"Z3468CotacaoValorComDesc1Vis",gxold:"O3468CotacaoValorComDesc1Vis",gxvar:"A3468CotacaoValorComDesc1Vis",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3468CotacaoValorComDesc1Vis=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3468CotacaoValorComDesc1Vis=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COTACAOVALORCOMDESC1VIS",gx.O.A3468CotacaoValorComDesc1Vis,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3468CotacaoValorComDesc1Vis=this.val()},val:function(){return gx.fn.getDecimalValue("COTACAOVALORCOMDESC1VIS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 185 , function() {
   });
   GXValidFnc[188]={fld:"TEXTBLOCK37", format:0,grid:0};
   GXValidFnc[190]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Cotacaovalorcomdesc2vis,isvalid:null,rgrid:[],fld:"COTACAOVALORCOMDESC2VIS",gxz:"Z3469CotacaoValorComDesc2Vis",gxold:"O3469CotacaoValorComDesc2Vis",gxvar:"A3469CotacaoValorComDesc2Vis",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3469CotacaoValorComDesc2Vis=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3469CotacaoValorComDesc2Vis=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COTACAOVALORCOMDESC2VIS",gx.O.A3469CotacaoValorComDesc2Vis,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3469CotacaoValorComDesc2Vis=this.val()},val:function(){return gx.fn.getDecimalValue("COTACAOVALORCOMDESC2VIS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 190 , function() {
   });
   GXValidFnc[193]={fld:"TEXTBLOCK38", format:0,grid:0};
   GXValidFnc[195]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Cotacaovalorcomdesc3vis,isvalid:null,rgrid:[],fld:"COTACAOVALORCOMDESC3VIS",gxz:"Z3470CotacaoValorComDesc3Vis",gxold:"O3470CotacaoValorComDesc3Vis",gxvar:"A3470CotacaoValorComDesc3Vis",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3470CotacaoValorComDesc3Vis=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3470CotacaoValorComDesc3Vis=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COTACAOVALORCOMDESC3VIS",gx.O.A3470CotacaoValorComDesc3Vis,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3470CotacaoValorComDesc3Vis=this.val()},val:function(){return gx.fn.getDecimalValue("COTACAOVALORCOMDESC3VIS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 195 , function() {
   });
   GXValidFnc[198]={fld:"TEXTBLOCK39", format:0,grid:0};
   GXValidFnc[200]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Cotacaovalorcomdesc4vis,isvalid:null,rgrid:[],fld:"COTACAOVALORCOMDESC4VIS",gxz:"Z3471CotacaoValorComDesc4Vis",gxold:"O3471CotacaoValorComDesc4Vis",gxvar:"A3471CotacaoValorComDesc4Vis",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3471CotacaoValorComDesc4Vis=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3471CotacaoValorComDesc4Vis=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COTACAOVALORCOMDESC4VIS",gx.O.A3471CotacaoValorComDesc4Vis,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3471CotacaoValorComDesc4Vis=this.val()},val:function(){return gx.fn.getDecimalValue("COTACAOVALORCOMDESC4VIS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 200 , function() {
   });
   GXValidFnc[203]={fld:"TEXTBLOCK40", format:0,grid:0};
   GXValidFnc[205]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Cotacaovalorcomdesc5vis,isvalid:null,rgrid:[],fld:"COTACAOVALORCOMDESC5VIS",gxz:"Z3472CotacaoValorComDesc5Vis",gxold:"O3472CotacaoValorComDesc5Vis",gxvar:"A3472CotacaoValorComDesc5Vis",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3472CotacaoValorComDesc5Vis=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3472CotacaoValorComDesc5Vis=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COTACAOVALORCOMDESC5VIS",gx.O.A3472CotacaoValorComDesc5Vis,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3472CotacaoValorComDesc5Vis=this.val()},val:function(){return gx.fn.getDecimalValue("COTACAOVALORCOMDESC5VIS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 205 , function() {
   });
   GXValidFnc[208]={fld:"TEXTBLOCK41", format:0,grid:0};
   GXValidFnc[210]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Cotacaovaloravistaaux,isvalid:null,rgrid:[],fld:"COTACAOVALORAVISTAAUX",gxz:"Z4238CotacaoValorAvistaAux",gxold:"O4238CotacaoValorAvistaAux",gxvar:"A4238CotacaoValorAvistaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4238CotacaoValorAvistaAux=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4238CotacaoValorAvistaAux=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COTACAOVALORAVISTAAUX",gx.O.A4238CotacaoValorAvistaAux,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4238CotacaoValorAvistaAux=this.val()},val:function(){return gx.fn.getDecimalValue("COTACAOVALORAVISTAAUX",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 210 , function() {
   });
   GXValidFnc[213]={fld:"TEXTBLOCK42", format:0,grid:0};
   GXValidFnc[215]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cotacaovalortotalavista,isvalid:null,rgrid:[],fld:"COTACAOVALORTOTALAVISTA",gxz:"Z3473CotacaoValorTotalAVista",gxold:"O3473CotacaoValorTotalAVista",gxvar:"A3473CotacaoValorTotalAVista",ucs:[],op:[],ip:[215],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3473CotacaoValorTotalAVista=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3473CotacaoValorTotalAVista=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COTACAOVALORTOTALAVISTA",gx.O.A3473CotacaoValorTotalAVista,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3473CotacaoValorTotalAVista=this.val()},val:function(){return gx.fn.getDecimalValue("COTACAOVALORTOTALAVISTA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 215 , function() {
   });
   GXValidFnc[218]={fld:"TEXTBLOCK43", format:0,grid:0};
   GXValidFnc[220]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Cotacaovalorcomdesc1pra,isvalid:null,rgrid:[],fld:"COTACAOVALORCOMDESC1PRA",gxz:"Z3474CotacaoValorComDesc1Pra",gxold:"O3474CotacaoValorComDesc1Pra",gxvar:"A3474CotacaoValorComDesc1Pra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3474CotacaoValorComDesc1Pra=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3474CotacaoValorComDesc1Pra=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COTACAOVALORCOMDESC1PRA",gx.O.A3474CotacaoValorComDesc1Pra,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3474CotacaoValorComDesc1Pra=this.val()},val:function(){return gx.fn.getDecimalValue("COTACAOVALORCOMDESC1PRA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 220 , function() {
   });
   GXValidFnc[223]={fld:"TEXTBLOCK44", format:0,grid:0};
   GXValidFnc[225]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Cotacaovalorcomdesc2pra,isvalid:null,rgrid:[],fld:"COTACAOVALORCOMDESC2PRA",gxz:"Z3475CotacaoValorComDesc2Pra",gxold:"O3475CotacaoValorComDesc2Pra",gxvar:"A3475CotacaoValorComDesc2Pra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3475CotacaoValorComDesc2Pra=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3475CotacaoValorComDesc2Pra=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COTACAOVALORCOMDESC2PRA",gx.O.A3475CotacaoValorComDesc2Pra,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3475CotacaoValorComDesc2Pra=this.val()},val:function(){return gx.fn.getDecimalValue("COTACAOVALORCOMDESC2PRA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 225 , function() {
   });
   GXValidFnc[228]={fld:"TEXTBLOCK45", format:0,grid:0};
   GXValidFnc[230]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Cotacaovalorcomdesc3pra,isvalid:null,rgrid:[],fld:"COTACAOVALORCOMDESC3PRA",gxz:"Z3476CotacaoValorComDesc3Pra",gxold:"O3476CotacaoValorComDesc3Pra",gxvar:"A3476CotacaoValorComDesc3Pra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3476CotacaoValorComDesc3Pra=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3476CotacaoValorComDesc3Pra=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COTACAOVALORCOMDESC3PRA",gx.O.A3476CotacaoValorComDesc3Pra,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3476CotacaoValorComDesc3Pra=this.val()},val:function(){return gx.fn.getDecimalValue("COTACAOVALORCOMDESC3PRA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 230 , function() {
   });
   GXValidFnc[233]={fld:"TEXTBLOCK46", format:0,grid:0};
   GXValidFnc[235]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Cotacaovalorcomdesc4pra,isvalid:null,rgrid:[],fld:"COTACAOVALORCOMDESC4PRA",gxz:"Z3477CotacaoValorComDesc4Pra",gxold:"O3477CotacaoValorComDesc4Pra",gxvar:"A3477CotacaoValorComDesc4Pra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3477CotacaoValorComDesc4Pra=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3477CotacaoValorComDesc4Pra=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COTACAOVALORCOMDESC4PRA",gx.O.A3477CotacaoValorComDesc4Pra,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3477CotacaoValorComDesc4Pra=this.val()},val:function(){return gx.fn.getDecimalValue("COTACAOVALORCOMDESC4PRA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 235 , function() {
   });
   GXValidFnc[238]={fld:"TEXTBLOCK47", format:0,grid:0};
   GXValidFnc[240]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Cotacaovalorcomdesc5pra,isvalid:null,rgrid:[],fld:"COTACAOVALORCOMDESC5PRA",gxz:"Z3478CotacaoValorComDesc5Pra",gxold:"O3478CotacaoValorComDesc5Pra",gxvar:"A3478CotacaoValorComDesc5Pra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3478CotacaoValorComDesc5Pra=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3478CotacaoValorComDesc5Pra=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COTACAOVALORCOMDESC5PRA",gx.O.A3478CotacaoValorComDesc5Pra,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3478CotacaoValorComDesc5Pra=this.val()},val:function(){return gx.fn.getDecimalValue("COTACAOVALORCOMDESC5PRA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 240 , function() {
   });
   GXValidFnc[243]={fld:"TEXTBLOCK48", format:0,grid:0};
   GXValidFnc[245]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Cotacaovaloraaprazoaux,isvalid:null,rgrid:[],fld:"COTACAOVALORAAPRAZOAUX",gxz:"Z4239CotacaoValorAaPrazoAux",gxold:"O4239CotacaoValorAaPrazoAux",gxvar:"A4239CotacaoValorAaPrazoAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4239CotacaoValorAaPrazoAux=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4239CotacaoValorAaPrazoAux=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COTACAOVALORAAPRAZOAUX",gx.O.A4239CotacaoValorAaPrazoAux,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4239CotacaoValorAaPrazoAux=this.val()},val:function(){return gx.fn.getDecimalValue("COTACAOVALORAAPRAZOAUX",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 245 , function() {
   });
   GXValidFnc[248]={fld:"TEXTBLOCK49", format:0,grid:0};
   GXValidFnc[250]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cotacaovalortotalaprazo,isvalid:null,rgrid:[],fld:"COTACAOVALORTOTALAPRAZO",gxz:"Z3479CotacaoValorTotalaPrazo",gxold:"O3479CotacaoValorTotalaPrazo",gxvar:"A3479CotacaoValorTotalaPrazo",ucs:[],op:[],ip:[250],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3479CotacaoValorTotalaPrazo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3479CotacaoValorTotalaPrazo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COTACAOVALORTOTALAPRAZO",gx.O.A3479CotacaoValorTotalaPrazo,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3479CotacaoValorTotalaPrazo=this.val()},val:function(){return gx.fn.getDecimalValue("COTACAOVALORTOTALAPRAZO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 250 , function() {
   });
   GXValidFnc[253]={fld:"TEXTBLOCK50", format:0,grid:0};
   GXValidFnc[255]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cotacaousuarioinc,isvalid:null,rgrid:[],fld:"COTACAOUSUARIOINC",gxz:"Z3480CotacaoUsuarioInc",gxold:"O3480CotacaoUsuarioInc",gxvar:"A3480CotacaoUsuarioInc",ucs:[],op:[],ip:[255],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3480CotacaoUsuarioInc=Value},v2z:function(Value){gx.O.Z3480CotacaoUsuarioInc=Value},v2c:function(){gx.fn.setControlValue("COTACAOUSUARIOINC",gx.O.A3480CotacaoUsuarioInc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3480CotacaoUsuarioInc=this.val()},val:function(){return gx.fn.getControlValue("COTACAOUSUARIOINC")},nac:gx.falseFn};
   this.declareDomainHdlr( 255 , function() {
   });
   GXValidFnc[259]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cotacaosnganhador,isvalid:null,rgrid:[],fld:"COTACAOSNGANHADOR",gxz:"Z3397CotacaoSnGanhador",gxold:"O3397CotacaoSnGanhador",gxvar:"A3397CotacaoSnGanhador",ucs:[],op:[],ip:[259],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3397CotacaoSnGanhador=Value},v2z:function(Value){gx.O.Z3397CotacaoSnGanhador=Value},v2c:function(){gx.fn.setControlValue("COTACAOSNGANHADOR",gx.O.A3397CotacaoSnGanhador,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3397CotacaoSnGanhador=this.val()},val:function(){return gx.fn.getControlValue("COTACAOSNGANHADOR")},nac:gx.falseFn};
   this.declareDomainHdlr( 259 , function() {
   });
   GXValidFnc[262]={fld:"TEXTBLOCK51", format:0,grid:0};
   GXValidFnc[264]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"COTACAOUSUARIOALT",gxz:"Z3481CotacaoUsuarioAlt",gxold:"O3481CotacaoUsuarioAlt",gxvar:"A3481CotacaoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3481CotacaoUsuarioAlt=Value},v2z:function(Value){gx.O.Z3481CotacaoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("COTACAOUSUARIOALT",gx.O.A3481CotacaoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3481CotacaoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("COTACAOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 264 , function() {
   });
   GXValidFnc[267]={fld:"TEXTBLOCK52", format:0,grid:0};
   GXValidFnc[269]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"COTACAODATAHORAALT",gxz:"Z3482CotacaoDataHoraAlt",gxold:"O3482CotacaoDataHoraAlt",gxvar:"A3482CotacaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3482CotacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3482CotacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("COTACAODATAHORAALT",gx.O.A3482CotacaoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3482CotacaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("COTACAODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 269 , function() {
   });
   GXValidFnc[270]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[279]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[281]={fld:"BTNHELP",grid:0};
   GXValidFnc[283]={fld:"PROMPT_3370_3371_3392",grid:371};
   GXValidFnc[284]={fld:"PROMPT_227_69",grid:371};
   this.A3370SolicitacaoEmpresaId = "" ;
   this.Z3370SolicitacaoEmpresaId = "" ;
   this.O3370SolicitacaoEmpresaId = "" ;
   this.A3371SolicitacaoNumero = 0 ;
   this.Z3371SolicitacaoNumero = 0 ;
   this.O3371SolicitacaoNumero = 0 ;
   this.A3392SolicitacaoItemSeq = 0 ;
   this.Z3392SolicitacaoItemSeq = 0 ;
   this.O3392SolicitacaoItemSeq = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.Z227EmpresaPessoasEmpresaId = "" ;
   this.O227EmpresaPessoasEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.A70PessoaRazaoSocial = "" ;
   this.Z70PessoaRazaoSocial = "" ;
   this.O70PessoaRazaoSocial = "" ;
   this.A71PessoaFantasia = "" ;
   this.Z71PessoaFantasia = "" ;
   this.O71PessoaFantasia = "" ;
   this.A473PessoaCPF = "" ;
   this.Z473PessoaCPF = "" ;
   this.O473PessoaCPF = "" ;
   this.A472PessoaCNPJ = "" ;
   this.Z472PessoaCNPJ = "" ;
   this.O472PessoaCNPJ = "" ;
   this.A72PessoaTelefone = "" ;
   this.Z72PessoaTelefone = "" ;
   this.O72PessoaTelefone = "" ;
   this.A3451CotacaoTipo = "" ;
   this.Z3451CotacaoTipo = "" ;
   this.O3451CotacaoTipo = "" ;
   this.A3452CotacaoObservacao = "" ;
   this.Z3452CotacaoObservacao = "" ;
   this.O3452CotacaoObservacao = "" ;
   this.A3394CotacaoMarca = "" ;
   this.Z3394CotacaoMarca = "" ;
   this.O3394CotacaoMarca = "" ;
   this.A3453CotacaoNumeroFornecedor = "" ;
   this.Z3453CotacaoNumeroFornecedor = "" ;
   this.O3453CotacaoNumeroFornecedor = "" ;
   this.A3395CotacaoValorAvista = 0 ;
   this.Z3395CotacaoValorAvista = 0 ;
   this.O3395CotacaoValorAvista = 0 ;
   this.A3396CotacaoValoraPrazo = 0 ;
   this.Z3396CotacaoValoraPrazo = 0 ;
   this.O3396CotacaoValoraPrazo = 0 ;
   this.A3454CotacaoEntrega = "" ;
   this.Z3454CotacaoEntrega = "" ;
   this.O3454CotacaoEntrega = "" ;
   this.A3455CotacaoPagamento = "" ;
   this.Z3455CotacaoPagamento = "" ;
   this.O3455CotacaoPagamento = "" ;
   this.A3456CotacaoGarantia = "" ;
   this.Z3456CotacaoGarantia = "" ;
   this.O3456CotacaoGarantia = "" ;
   this.A3457CotacaoPCDesconto1 = 0 ;
   this.Z3457CotacaoPCDesconto1 = 0 ;
   this.O3457CotacaoPCDesconto1 = 0 ;
   this.A3458CotacaoPCDesconto2 = 0 ;
   this.Z3458CotacaoPCDesconto2 = 0 ;
   this.O3458CotacaoPCDesconto2 = 0 ;
   this.A3459CotacaoPCDesconto3 = 0 ;
   this.Z3459CotacaoPCDesconto3 = 0 ;
   this.O3459CotacaoPCDesconto3 = 0 ;
   this.A3460CotacaoPCDesconto4 = 0 ;
   this.Z3460CotacaoPCDesconto4 = 0 ;
   this.O3460CotacaoPCDesconto4 = 0 ;
   this.A3461CotacaoPCDesconto5 = 0 ;
   this.Z3461CotacaoPCDesconto5 = 0 ;
   this.O3461CotacaoPCDesconto5 = 0 ;
   this.A4240CotacaoPCFrete = 0 ;
   this.Z4240CotacaoPCFrete = 0 ;
   this.O4240CotacaoPCFrete = 0 ;
   this.A3462CotacaoValorFrete = 0 ;
   this.Z3462CotacaoValorFrete = 0 ;
   this.O3462CotacaoValorFrete = 0 ;
   this.A4241CotacaoPCIPI = 0 ;
   this.Z4241CotacaoPCIPI = 0 ;
   this.O4241CotacaoPCIPI = 0 ;
   this.A3463CotacaoValorIPI = 0 ;
   this.Z3463CotacaoValorIPI = 0 ;
   this.O3463CotacaoValorIPI = 0 ;
   this.A4242CotacaoPCICMS = 0 ;
   this.Z4242CotacaoPCICMS = 0 ;
   this.O4242CotacaoPCICMS = 0 ;
   this.A3464CotacaoValorICMS = 0 ;
   this.Z3464CotacaoValorICMS = 0 ;
   this.O3464CotacaoValorICMS = 0 ;
   this.A4243CotacaoPCICMSST = 0 ;
   this.Z4243CotacaoPCICMSST = 0 ;
   this.O4243CotacaoPCICMSST = 0 ;
   this.A3465CotacaoValorICMSST = 0 ;
   this.Z3465CotacaoValorICMSST = 0 ;
   this.O3465CotacaoValorICMSST = 0 ;
   this.A3466CotacaoValorEncargos = 0 ;
   this.Z3466CotacaoValorEncargos = 0 ;
   this.O3466CotacaoValorEncargos = 0 ;
   this.A3467CotacaoValorSeguro = 0 ;
   this.Z3467CotacaoValorSeguro = 0 ;
   this.O3467CotacaoValorSeguro = 0 ;
   this.A3468CotacaoValorComDesc1Vis = 0 ;
   this.Z3468CotacaoValorComDesc1Vis = 0 ;
   this.O3468CotacaoValorComDesc1Vis = 0 ;
   this.A3469CotacaoValorComDesc2Vis = 0 ;
   this.Z3469CotacaoValorComDesc2Vis = 0 ;
   this.O3469CotacaoValorComDesc2Vis = 0 ;
   this.A3470CotacaoValorComDesc3Vis = 0 ;
   this.Z3470CotacaoValorComDesc3Vis = 0 ;
   this.O3470CotacaoValorComDesc3Vis = 0 ;
   this.A3471CotacaoValorComDesc4Vis = 0 ;
   this.Z3471CotacaoValorComDesc4Vis = 0 ;
   this.O3471CotacaoValorComDesc4Vis = 0 ;
   this.A3472CotacaoValorComDesc5Vis = 0 ;
   this.Z3472CotacaoValorComDesc5Vis = 0 ;
   this.O3472CotacaoValorComDesc5Vis = 0 ;
   this.A4238CotacaoValorAvistaAux = 0 ;
   this.Z4238CotacaoValorAvistaAux = 0 ;
   this.O4238CotacaoValorAvistaAux = 0 ;
   this.A3473CotacaoValorTotalAVista = 0 ;
   this.Z3473CotacaoValorTotalAVista = 0 ;
   this.O3473CotacaoValorTotalAVista = 0 ;
   this.A3474CotacaoValorComDesc1Pra = 0 ;
   this.Z3474CotacaoValorComDesc1Pra = 0 ;
   this.O3474CotacaoValorComDesc1Pra = 0 ;
   this.A3475CotacaoValorComDesc2Pra = 0 ;
   this.Z3475CotacaoValorComDesc2Pra = 0 ;
   this.O3475CotacaoValorComDesc2Pra = 0 ;
   this.A3476CotacaoValorComDesc3Pra = 0 ;
   this.Z3476CotacaoValorComDesc3Pra = 0 ;
   this.O3476CotacaoValorComDesc3Pra = 0 ;
   this.A3477CotacaoValorComDesc4Pra = 0 ;
   this.Z3477CotacaoValorComDesc4Pra = 0 ;
   this.O3477CotacaoValorComDesc4Pra = 0 ;
   this.A3478CotacaoValorComDesc5Pra = 0 ;
   this.Z3478CotacaoValorComDesc5Pra = 0 ;
   this.O3478CotacaoValorComDesc5Pra = 0 ;
   this.A4239CotacaoValorAaPrazoAux = 0 ;
   this.Z4239CotacaoValorAaPrazoAux = 0 ;
   this.O4239CotacaoValorAaPrazoAux = 0 ;
   this.A3479CotacaoValorTotalaPrazo = 0 ;
   this.Z3479CotacaoValorTotalaPrazo = 0 ;
   this.O3479CotacaoValorTotalaPrazo = 0 ;
   this.A3480CotacaoUsuarioInc = "" ;
   this.Z3480CotacaoUsuarioInc = "" ;
   this.O3480CotacaoUsuarioInc = "" ;
   this.A3397CotacaoSnGanhador = "" ;
   this.Z3397CotacaoSnGanhador = "" ;
   this.O3397CotacaoSnGanhador = "" ;
   this.A3481CotacaoUsuarioAlt = "" ;
   this.Z3481CotacaoUsuarioAlt = "" ;
   this.O3481CotacaoUsuarioAlt = "" ;
   this.A3482CotacaoDataHoraAlt = gx.date.nullDate() ;
   this.Z3482CotacaoDataHoraAlt = gx.date.nullDate() ;
   this.O3482CotacaoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3392SolicitacaoItemSeq = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.AV19LogSolicitacaoEmpresaId = "" ;
   this.AV20LogSolicitacaoNumero = 0 ;
   this.AV21LogSolicitacaoItemSeq = 0 ;
   this.AV22LogEmpresaPessoasEmpresaId = "" ;
   this.AV23LogPessoaId = 0 ;
   this.A4238CotacaoValorAvistaAux = 0 ;
   this.A4239CotacaoValorAaPrazoAux = 0 ;
   this.A3472CotacaoValorComDesc5Vis = 0 ;
   this.A3478CotacaoValorComDesc5Pra = 0 ;
   this.A3471CotacaoValorComDesc4Vis = 0 ;
   this.A3477CotacaoValorComDesc4Pra = 0 ;
   this.A3470CotacaoValorComDesc3Vis = 0 ;
   this.A3476CotacaoValorComDesc3Pra = 0 ;
   this.A3469CotacaoValorComDesc2Vis = 0 ;
   this.A3475CotacaoValorComDesc2Pra = 0 ;
   this.A3474CotacaoValorComDesc1Pra = 0 ;
   this.A3468CotacaoValorComDesc1Vis = 0 ;
   this.A70PessoaRazaoSocial = "" ;
   this.A71PessoaFantasia = "" ;
   this.A473PessoaCPF = "" ;
   this.A472PessoaCNPJ = "" ;
   this.A72PessoaTelefone = "" ;
   this.A3451CotacaoTipo = "" ;
   this.A3452CotacaoObservacao = "" ;
   this.A3394CotacaoMarca = "" ;
   this.A3453CotacaoNumeroFornecedor = "" ;
   this.A3395CotacaoValorAvista = 0 ;
   this.A3396CotacaoValoraPrazo = 0 ;
   this.A3454CotacaoEntrega = "" ;
   this.A3455CotacaoPagamento = "" ;
   this.A3456CotacaoGarantia = "" ;
   this.A3457CotacaoPCDesconto1 = 0 ;
   this.A3458CotacaoPCDesconto2 = 0 ;
   this.A3459CotacaoPCDesconto3 = 0 ;
   this.A3460CotacaoPCDesconto4 = 0 ;
   this.A3461CotacaoPCDesconto5 = 0 ;
   this.A4240CotacaoPCFrete = 0 ;
   this.A3462CotacaoValorFrete = 0 ;
   this.A4241CotacaoPCIPI = 0 ;
   this.A3463CotacaoValorIPI = 0 ;
   this.A4242CotacaoPCICMS = 0 ;
   this.A3464CotacaoValorICMS = 0 ;
   this.A4243CotacaoPCICMSST = 0 ;
   this.A3465CotacaoValorICMSST = 0 ;
   this.A3466CotacaoValorEncargos = 0 ;
   this.A3467CotacaoValorSeguro = 0 ;
   this.A3473CotacaoValorTotalAVista = 0 ;
   this.A3479CotacaoValorTotalaPrazo = 0 ;
   this.A3480CotacaoUsuarioInc = "" ;
   this.A3397CotacaoSnGanhador = "" ;
   this.A3481CotacaoUsuarioAlt = "" ;
   this.A3482CotacaoDataHoraAlt = gx.date.nullDate() ;
   this.AV18lCotacaos = {} ;
   this.AV24LogUsuario = "" ;
   this.Events = {"e126g371_client": ["ENTER", true] ,"e136g371_client": ["CANCEL", true] ,"e116g371_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_3370_3371_3392", [14,19,24]);
   this.setPrompt("PROMPT_227_69", [29,34]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19LogSolicitacaoEmpresaId", "vLOGSOLICITACAOEMPRESAID", 0, "char");
   this.setVCMap("AV20LogSolicitacaoNumero", "vLOGSOLICITACAONUMERO", 0, "int");
   this.setVCMap("AV21LogSolicitacaoItemSeq", "vLOGSOLICITACAOITEMSEQ", 0, "int");
   this.setVCMap("AV22LogEmpresaPessoasEmpresaId", "vLOGEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV23LogPessoaId", "vLOGPESSOAID", 0, "int");
   this.setVCMap("AV18lCotacaos", "vLCOTACAOS", 0, "lCotacaos");
   this.setVCMap("AV24LogUsuario", "vLOGUSUARIO", 0, "svchar");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 371 ]= ["O3397CotacaoSnGanhador","O3480CotacaoUsuarioInc","O3479CotacaoValorTotalaPrazo","O3473CotacaoValorTotalAVista","O4239CotacaoValorAaPrazoAux","O3478CotacaoValorComDesc5Pra","O3477CotacaoValorComDesc4Pra","O3476CotacaoValorComDesc3Pra","O3475CotacaoValorComDesc2Pra","O3474CotacaoValorComDesc1Pra","O3467CotacaoValorSeguro","O4238CotacaoValorAvistaAux","O3472CotacaoValorComDesc5Vis","O3471CotacaoValorComDesc4Vis","O3470CotacaoValorComDesc3Vis","O3469CotacaoValorComDesc2Vis","O3468CotacaoValorComDesc1Vis","O3466CotacaoValorEncargos","O3465CotacaoValorICMSST","O4243CotacaoPCICMSST","O3464CotacaoValorICMS","O4242CotacaoPCICMS","O3463CotacaoValorIPI","O4241CotacaoPCIPI","O3462CotacaoValorFrete","O4240CotacaoPCFrete","O3461CotacaoPCDesconto5","O3460CotacaoPCDesconto4","O3459CotacaoPCDesconto3","O3458CotacaoPCDesconto2","O3457CotacaoPCDesconto1","O3456CotacaoGarantia","O3455CotacaoPagamento","O3454CotacaoEntrega","O3396CotacaoValoraPrazo","O3395CotacaoValorAvista","O3453CotacaoNumeroFornecedor","O3394CotacaoMarca","O3452CotacaoObservacao","O3451CotacaoTipo","O69PessoaId","O72PessoaTelefone","O472PessoaCNPJ","O473PessoaCPF","O71PessoaFantasia","O70PessoaRazaoSocial"] ;
});
gx.setParentObj(new tcotacao());
