/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:8:59.0
*/
gx.evt.autoSkip = false;
gx.define('tentradaprov', false, function () {
   this.ServerClass =  "tentradaprov" ;
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
      this.A11298EntradaProvCNPJFilial=gx.fn.getControlValue("ENTRADAPROVCNPJFILIAL") ;
      this.A10527EntradaProvValorICMSDesonerado=gx.fn.getDecimalValue("ENTRADAPROVVALORICMSDESONERADO",'.',',') ;
      this.A9914EntradaProvTransacaoEmpresaId=gx.fn.getControlValue("ENTRADAPROVTRANSACAOEMPRESAID") ;
      this.A9913EntradaProvTransacaoCodigo=gx.fn.getControlValue("ENTRADAPROVTRANSACAOCODIGO") ;
      this.A10595EntradaProvValorFCP=gx.fn.getDecimalValue("ENTRADAPROVVALORFCP",'.',',') ;
      this.A10596EntradaProvValorFCPST=gx.fn.getDecimalValue("ENTRADAPROVVALORFCPST",'.',',') ;
      this.A10597EntradaProvValorFCPSTRet=gx.fn.getDecimalValue("ENTRADAPROVVALORFCPSTRET",'.',',') ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.A11748EntradaProvItemCESTCodigo=gx.fn.getIntegerValue("ENTRADAPROVITEMCESTCODIGO",'.') ;
      this.A10929EntradaProvItemDtFabricacao=gx.fn.getDateValue("ENTRADAPROVITEMDTFABRICACAO") ;
      this.A10528EntradaProvItemValorICMSDesone=gx.fn.getDecimalValue("ENTRADAPROVITEMVALORICMSDESONE",'.',',') ;
      this.A10589EntradaProvItemValorBCFCP=gx.fn.getDecimalValue("ENTRADAPROVITEMVALORBCFCP",'.',',') ;
      this.A10586EntradaProvItemAliquotaFCP=gx.fn.getDecimalValue("ENTRADAPROVITEMALIQUOTAFCP",'.',',') ;
      this.A10592EntradaProvItemValorFCP=gx.fn.getDecimalValue("ENTRADAPROVITEMVALORFCP",'.',',') ;
      this.A10590EntradaProvItemValorBCFCPST=gx.fn.getDecimalValue("ENTRADAPROVITEMVALORBCFCPST",'.',',') ;
      this.A10587EntradaProvItemAliquotaFCPST=gx.fn.getDecimalValue("ENTRADAPROVITEMALIQUOTAFCPST",'.',',') ;
      this.A10593EntradaProvItemValorFCPST=gx.fn.getDecimalValue("ENTRADAPROVITEMVALORFCPST",'.',',') ;
      this.A10591EntradaProvItemValorBCFCPSTRet=gx.fn.getDecimalValue("ENTRADAPROVITEMVALORBCFCPSTRET",'.',',') ;
      this.A10588EntradaProvItemAliquotaFCPSTRe=gx.fn.getDecimalValue("ENTRADAPROVITEMALIQUOTAFCPSTRE",'.',',') ;
      this.A10594EntradaProvItemValorFCPSTRet=gx.fn.getDecimalValue("ENTRADAPROVITEMVALORFCPSTRET",'.',',') ;
      this.A11790EntradaProvItemTipoCalculo=gx.fn.getControlValue("ENTRADAPROVITEMTIPOCALCULO") ;
   };
   this.Valid_Entradaprovempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ENTRADAPROVEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Entradaprovid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Entradaprovid",["gx.O.A5013EntradaProvEmpresaId", "gx.O.A5014EntradaProvId", "gx.O.A5015EntradaProvTipo", "gx.O.A5016EntradaProvNumeroDocumento", "gx.O.A5017EntradaProvFornecedorEmpId", "gx.O.A5018EntradaProvFornecedorId", "gx.O.A6550EntradaProvFornecedorNome", "gx.O.A6551EntradaProvFornecedorFantasia", "gx.O.A5088EntradaProvTipoPessoa", "gx.O.A5089EntradaProvCPFCNPJ", "gx.O.A11298EntradaProvCNPJFilial", "gx.O.A6552EntradaProvFornecEndereco", "gx.O.A6553EntradaProvFornecNumEndereco", "gx.O.A6554EntradaProvFornecComplemento", "gx.O.A6555EntradaProvFornecBairro", "gx.O.A6556EntradaProvFornecCidadeId", "gx.O.A6557EntradaProvFornecCidadeNome", "gx.O.A6558EntradaProvFornecUF", "gx.O.A6559EntradaProvFornecCEP", "gx.O.A6560EntradaProvFornecPaisId", "gx.O.A6561EntradaProvFornecPaisNome", "gx.O.A6562EntradaProvFornecTelefone", "gx.O.A6563EntradaProvFornecIE", "gx.O.A6564EntradaProvFornecIM", "gx.O.A5019EntradaProvSerie", "gx.O.A5020EntradaProvSubSerie", "gx.O.A5021EntradaProvChaveNFE", 'gx.date.urlDate(gx.O.A5022EntradaProvDataEmissao,"DMY4")', 'gx.date.urlDate(gx.O.A5023EntradaProvDataEntrada,"DMY4")', "gx.O.A5024EntradaProvCFOPCodigo", "gx.O.A5025EntradaProvCSTTipo", "gx.O.A5027EntradaProvCSTCodigo", "gx.O.A5030EntradaProvModDocFiscal", "gx.O.A5031EntradaProvSitDocFiscal", "gx.O.A5032EntradaProvEspecie", "gx.O.A5033EntradaProvMarca", "gx.O.A5034EntradaProvNumeracao", "gx.O.A5035EntradaProvObservacao", "gx.O.A5036EntradaProvModalidadeFrete", "gx.O.A5037EntradaProvTipoTransporte", "gx.O.A5038EntradaProvTransportadorEmpId", "gx.O.A5039EntradaProvTransportadorId", "gx.O.A5040EntradaProvCodigoAntecipacao", "gx.O.A5049EntradaProvClasseEnergiaEletr", "gx.O.A5050EntradaProvCPFEntrega", "gx.O.A5051EntradaProvCNPJEntrega", "gx.O.A5052EntradaProvEnderecoRetirada", "gx.O.A5053EntradaProvNumeroEndRetirada", "gx.O.A5054EntradaProvComplEndRetirada", "gx.O.A5055EntradaProvBairroEndRetirada", "gx.O.A5056EntradaProvCEPEndRetirada", "gx.O.A5057EntradaProvCidadeEntRetirada", "gx.O.A5058EntradaProvTipoCTE", "gx.O.A5059EntradaProvChaveCTEREF", "gx.num.urlDecimal(gx.O.A5060EntradaProvValorProdutos,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A5061EntradaProvValorAcrescimo,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A5062EntradaProvValorDesconto,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A5063EntradaProvDescontoFinanceiro,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A5064EntradaProvValorFrete,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A5065EntradaProvValorSeguro,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A5066EntradaProvValorOutDespesas,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A5067EntradaProvValorManuseio,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A5068EntradaProvValorTotal,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A5069EntradaProvBCICMS,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A5070EntradaProvReducaoBaseICMS,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A5071EntradaProvAliquotaICMS,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A5072EntradaProvValorDiferencaICMS,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A5073EntradaProvValorICMS,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A5074EntradaProvValorBCICMSST,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A5159EntradaProvValorICMSST,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A5076EntradaProvValorIPI,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A5077EntradaProvValorPIS,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A5078EntradaProvValorPISST,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A5079EntradaProvValorCOFINS,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A5080EntradaProvValorCOFINSST,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A5081EntradaProvValorICMSNaoDestac,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A5250EntradaProvValorBCIMCSTNaoDest,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A10527EntradaProvValorICMSDesonerado,\'.\',\',\')", "gx.O.A5090EntradaProvSNEfetivada", "gx.O.A9246EntradaProvSnConferida", "gx.O.A5084EntradaProvUsuarioAlt", 'gx.date.urlDateTime(gx.O.A5085EntradaProvDataHoraAlt,"DMY4")', "gx.O.A9914EntradaProvTransacaoEmpresaId", "gx.O.A9913EntradaProvTransacaoCodigo", "gx.num.urlDecimal(gx.O.A10595EntradaProvValorFCP,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A10596EntradaProvValorFCPST,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A10597EntradaProvValorFCPSTRet,\'.\',\',\')"],["A5015EntradaProvTipo", "A5016EntradaProvNumeroDocumento", "A5017EntradaProvFornecedorEmpId", "A5018EntradaProvFornecedorId", "A6550EntradaProvFornecedorNome", "A6551EntradaProvFornecedorFantasia", "A5088EntradaProvTipoPessoa", "A5089EntradaProvCPFCNPJ", "A11298EntradaProvCNPJFilial", "A6552EntradaProvFornecEndereco", "A6553EntradaProvFornecNumEndereco", "A6554EntradaProvFornecComplemento", "A6555EntradaProvFornecBairro", "A6556EntradaProvFornecCidadeId", "A6557EntradaProvFornecCidadeNome", "A6558EntradaProvFornecUF", "A6559EntradaProvFornecCEP", "A6560EntradaProvFornecPaisId", "A6561EntradaProvFornecPaisNome", "A6562EntradaProvFornecTelefone", "A6563EntradaProvFornecIE", "A6564EntradaProvFornecIM", "A5019EntradaProvSerie", "A5020EntradaProvSubSerie", "A5021EntradaProvChaveNFE", "A5022EntradaProvDataEmissao", "A5023EntradaProvDataEntrada", "A5024EntradaProvCFOPCodigo", "A5025EntradaProvCSTTipo", "A5027EntradaProvCSTCodigo", "A5030EntradaProvModDocFiscal", "A5031EntradaProvSitDocFiscal", "A5032EntradaProvEspecie", "A5033EntradaProvMarca", "A5034EntradaProvNumeracao", "A5035EntradaProvObservacao", "A5036EntradaProvModalidadeFrete", "A5037EntradaProvTipoTransporte", "A5038EntradaProvTransportadorEmpId", "A5039EntradaProvTransportadorId", "A5040EntradaProvCodigoAntecipacao", "A5049EntradaProvClasseEnergiaEletr", "A5050EntradaProvCPFEntrega", "A5051EntradaProvCNPJEntrega", "A5052EntradaProvEnderecoRetirada", "A5053EntradaProvNumeroEndRetirada", "A5054EntradaProvComplEndRetirada", "A5055EntradaProvBairroEndRetirada", "A5056EntradaProvCEPEndRetirada", "A5057EntradaProvCidadeEntRetirada", "A5058EntradaProvTipoCTE", "A5059EntradaProvChaveCTEREF", "A5060EntradaProvValorProdutos", "A5061EntradaProvValorAcrescimo", "A5062EntradaProvValorDesconto", "A5063EntradaProvDescontoFinanceiro", "A5064EntradaProvValorFrete", "A5065EntradaProvValorSeguro", "A5066EntradaProvValorOutDespesas", "A5067EntradaProvValorManuseio", "A5068EntradaProvValorTotal", "A5069EntradaProvBCICMS", "A5070EntradaProvReducaoBaseICMS", "A5071EntradaProvAliquotaICMS", "A5072EntradaProvValorDiferencaICMS", "A5073EntradaProvValorICMS", "A5074EntradaProvValorBCICMSST", "A5159EntradaProvValorICMSST", "A5076EntradaProvValorIPI", "A5077EntradaProvValorPIS", "A5078EntradaProvValorPISST", "A5079EntradaProvValorCOFINS", "A5080EntradaProvValorCOFINSST", "A5081EntradaProvValorICMSNaoDestac", "A5250EntradaProvValorBCIMCSTNaoDest", "A10527EntradaProvValorICMSDesonerado", "A5090EntradaProvSNEfetivada", "A9246EntradaProvSnConferida", "A5084EntradaProvUsuarioAlt", "A5085EntradaProvDataHoraAlt", "A9914EntradaProvTransacaoEmpresaId", "A9913EntradaProvTransacaoCodigo", "A10595EntradaProvValorFCP", "A10596EntradaProvValorFCPST", "A10597EntradaProvValorFCPSTRet", "Gx_mode", "Z5013EntradaProvEmpresaId", "Z5014EntradaProvId", "Z5015EntradaProvTipo", "Z5016EntradaProvNumeroDocumento", "Z5017EntradaProvFornecedorEmpId", "Z5018EntradaProvFornecedorId", "Z6550EntradaProvFornecedorNome", "Z6551EntradaProvFornecedorFantasia", "Z5088EntradaProvTipoPessoa", "Z5089EntradaProvCPFCNPJ", "Z11298EntradaProvCNPJFilial", "Z6552EntradaProvFornecEndereco", "Z6553EntradaProvFornecNumEndereco", "Z6554EntradaProvFornecComplemento", "Z6555EntradaProvFornecBairro", "Z6556EntradaProvFornecCidadeId", "Z6557EntradaProvFornecCidadeNome", "Z6558EntradaProvFornecUF", "Z6559EntradaProvFornecCEP", "Z6560EntradaProvFornecPaisId", "Z6561EntradaProvFornecPaisNome", "Z6562EntradaProvFornecTelefone", "Z6563EntradaProvFornecIE", "Z6564EntradaProvFornecIM", "Z5019EntradaProvSerie", "Z5020EntradaProvSubSerie", "Z5021EntradaProvChaveNFE", "Z5022EntradaProvDataEmissao", "Z5023EntradaProvDataEntrada", "Z5024EntradaProvCFOPCodigo", "Z5025EntradaProvCSTTipo", "Z5027EntradaProvCSTCodigo", "Z5030EntradaProvModDocFiscal", "Z5031EntradaProvSitDocFiscal", "Z5032EntradaProvEspecie", "Z5033EntradaProvMarca", "Z5034EntradaProvNumeracao", "Z5035EntradaProvObservacao", "Z5036EntradaProvModalidadeFrete", "Z5037EntradaProvTipoTransporte", "Z5038EntradaProvTransportadorEmpId", "Z5039EntradaProvTransportadorId", "Z5040EntradaProvCodigoAntecipacao", "Z5049EntradaProvClasseEnergiaEletr", "Z5050EntradaProvCPFEntrega", "Z5051EntradaProvCNPJEntrega", "Z5052EntradaProvEnderecoRetirada", "Z5053EntradaProvNumeroEndRetirada", "Z5054EntradaProvComplEndRetirada", "Z5055EntradaProvBairroEndRetirada", "Z5056EntradaProvCEPEndRetirada", "Z5057EntradaProvCidadeEntRetirada", "Z5058EntradaProvTipoCTE", "Z5059EntradaProvChaveCTEREF", "Z5060EntradaProvValorProdutos", "Z5061EntradaProvValorAcrescimo", "Z5062EntradaProvValorDesconto", "Z5063EntradaProvDescontoFinanceiro", "Z5064EntradaProvValorFrete", "Z5065EntradaProvValorSeguro", "Z5066EntradaProvValorOutDespesas", "Z5067EntradaProvValorManuseio", "Z5068EntradaProvValorTotal", "Z5069EntradaProvBCICMS", "Z5070EntradaProvReducaoBaseICMS", "Z5071EntradaProvAliquotaICMS", "Z5072EntradaProvValorDiferencaICMS", "Z5073EntradaProvValorICMS", "Z5074EntradaProvValorBCICMSST", "Z5159EntradaProvValorICMSST", "Z5076EntradaProvValorIPI", "Z5077EntradaProvValorPIS", "Z5078EntradaProvValorPISST", "Z5079EntradaProvValorCOFINS", "Z5080EntradaProvValorCOFINSST", "Z5081EntradaProvValorICMSNaoDestac", "Z5250EntradaProvValorBCIMCSTNaoDest", "Z10527EntradaProvValorICMSDesonerado", "Z5090EntradaProvSNEfetivada", "Z9246EntradaProvSnConferida", "Z5084EntradaProvUsuarioAlt", "Z5085EntradaProvDataHoraAlt", "Z9914EntradaProvTransacaoEmpresaId", "Z9913EntradaProvTransacaoCodigo", "Z10595EntradaProvValorFCP", "Z10596EntradaProvValorFCPST", "Z10597EntradaProvValorFCPSTRet", "Grid1", "Grid3", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.Valid_Entradaprovtipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ENTRADAPROVTIPO");
         this.AnyError  = 0;
         if ( ! ( this.A5015EntradaProvTipo == "1" || this.A5015EntradaProvTipo == "2" || this.A5015EntradaProvTipo == "3" || this.A5015EntradaProvTipo == "4" || this.A5015EntradaProvTipo == "5" || this.A5015EntradaProvTipo == "6" || this.A5015EntradaProvTipo == "7" ) )
         {
            try {
               gxballoon.setError("Campo Tipo de Entrada Provisória fora do intervalo");
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
   this.Valid_Entradaprovtipopessoa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ENTRADAPROVTIPOPESSOA");
         this.AnyError  = 0;
         if ( ! ( this.A5088EntradaProvTipoPessoa == "F" || this.A5088EntradaProvTipoPessoa == "J" ) )
         {
            try {
               gxballoon.setError("Campo Tipo de PEssoa fora do intervalo");
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
   this.Valid_Entradaprovfornecuf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ENTRADAPROVFORNECUF");
         this.AnyError  = 0;
         if ( ! ( this.A6558EntradaProvFornecUF == "" || this.A6558EntradaProvFornecUF == "AC" || this.A6558EntradaProvFornecUF == "AL" || this.A6558EntradaProvFornecUF == "AP" || this.A6558EntradaProvFornecUF == "AM" || this.A6558EntradaProvFornecUF == "BA" || this.A6558EntradaProvFornecUF == "CE" || this.A6558EntradaProvFornecUF == "DF" || this.A6558EntradaProvFornecUF == "ES" || this.A6558EntradaProvFornecUF == "GO" || this.A6558EntradaProvFornecUF == "MA" || this.A6558EntradaProvFornecUF == "MT" || this.A6558EntradaProvFornecUF == "MS" || this.A6558EntradaProvFornecUF == "MG" || this.A6558EntradaProvFornecUF == "PA" || this.A6558EntradaProvFornecUF == "PB" || this.A6558EntradaProvFornecUF == "PR" || this.A6558EntradaProvFornecUF == "PE" || this.A6558EntradaProvFornecUF == "PI" || this.A6558EntradaProvFornecUF == "RJ" || this.A6558EntradaProvFornecUF == "RN" || this.A6558EntradaProvFornecUF == "RS" || this.A6558EntradaProvFornecUF == "RO" || this.A6558EntradaProvFornecUF == "RR" || this.A6558EntradaProvFornecUF == "SC" || this.A6558EntradaProvFornecUF == "SP" || this.A6558EntradaProvFornecUF == "SE" || this.A6558EntradaProvFornecUF == "TO" || this.A6558EntradaProvFornecUF == "EX" ) )
         {
            try {
               gxballoon.setError("Campo UF do Fornecedor fora do intervalo");
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
   this.Valid_Entradaprovsequencia=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(412) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("ENTRADAPROVSEQUENCIA", gx.fn.currentGridRowImpl(412));
         this.AnyError  = 0;
         this.sMode452 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(452,412)  ;
         this.standaloneModal89452( );
         this.standaloneNotModal89452( );
         if ( gx.fn.gridDuplicateKey(414) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Itens da Entrada Provisória", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode452  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.standaloneModal89452=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("ENTRADAPROVSEQUENCIA","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("ENTRADAPROVSEQUENCIA","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal89452=function()
   {
      return true;
   }
   this.Valid_Entradaprovitemgradeseq=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(493) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("ENTRADAPROVITEMGRADESEQ", gx.fn.currentGridRowImpl(493));
         this.AnyError  = 0;
         this.sMode741 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(741,493)  ;
         this.standaloneModal89741( );
         this.standaloneNotModal89741( );
         if ( gx.fn.gridDuplicateKey(494) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Entrada Prov Item Grade", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode741  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.standaloneModal89741=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("ENTRADAPROVITEMGRADESEQ","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("ENTRADAPROVITEMGRADESEQ","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal89741=function()
   {
      return true;
   }
   this.Valid_Entradaprovpagtoitem=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(497) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("ENTRADAPROVPAGTOITEM", gx.fn.currentGridRowImpl(497));
         this.AnyError  = 0;
         this.sMode829 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(829,497)  ;
         this.standaloneModal89829( );
         this.standaloneNotModal89829( );
         if ( gx.fn.gridDuplicateKey(499) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Entrada Prov Pagto", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode829  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.standaloneModal89829=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("ENTRADAPROVPAGTOITEM","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("ENTRADAPROVPAGTOITEM","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal89829=function()
   {
      return true;
   }
   this.e1189451_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e1289451_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1389451_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,23,25,28,30,33,35,38,40,43,45,48,50,53,55,58,60,63,65,68,70,73,75,78,80,83,85,88,90,93,95,98,100,103,105,108,110,113,115,118,120,123,125,128,130,133,135,138,140,143,145,148,150,153,155,158,160,163,165,168,170,173,175,178,180,183,185,188,190,193,195,198,200,203,205,208,210,213,215,218,220,223,225,228,230,233,235,238,240,243,245,248,250,253,255,258,260,263,265,268,270,273,275,278,280,283,285,288,290,293,295,298,300,303,305,308,310,313,315,318,320,323,325,328,330,333,335,338,340,343,345,348,350,353,355,358,360,363,365,368,370,373,375,378,380,383,385,388,390,394,398,401,403,406,408,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,494,495,496,498,499,500,501,504,514,516];
   this.GXLastCtrlId =516;
   this.Grid2Container = new gx.grid.grid(this, 741,"EntradaProvItemGrade",493,"Grid2","Grid2","Grid2Container",this.CmpContext,this.IsMasterPage,"tentradaprov",[9912],false,1,false,true,5,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid2Container = this.Grid2Container;
   Grid2Container.addSingleLineEdit(9912,494,"ENTRADAPROVITEMGRADESEQ","Entrada Prov Item Grade Seq","","EntradaProvItemGradeSeq","int",0,"px",4,4,"right",null,[],9912,"EntradaProvItemGradeSeq",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(9916,495,"ENTRADAPROVITEMGRADEQUANTIDADE","Entrada Prov Item Grade Quantidade","","EntradaProvItemGradeQuantidade","decimal",0,"px",21,21,"right",null,[],9916,"EntradaProvItemGradeQuantidade",true,4,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(9915,496,"ENTRADAPROVITEMGRADECOMBINACAO","Entrada Prov Item Grade Combinacao","","EntradaProvItemGradeCombinacao","char",0,"px",20,20,"left",null,[],9915,"EntradaProvItemGradeCombinacao",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid2Container);
   this.Grid3Container = new gx.grid.grid(this, 829,"EntradaProvPagto",497,"Grid3","Grid3","Grid3Container",this.CmpContext,this.IsMasterPage,"tentradaprov",[11299],false,1,false,true,5,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid3Container = this.Grid3Container;
   Grid3Container.addSingleLineEdit(11300,498,"ENTRADAPROVPAGTODTVENC","Entrada Prov Pagto Dt Venc","","EntradaProvPagtoDtVenc","date",0,"px",10,10,"right",null,[],11300,"EntradaProvPagtoDtVenc",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit(11299,499,"ENTRADAPROVPAGTOITEM","Entrada Prov Pagto Item","","EntradaProvPagtoItem","char",0,"px",20,20,"left",null,[],11299,"EntradaProvPagtoItem",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit(11301,500,"ENTRADAPROVPAGTOVALOR","Entrada Prov Pagto Valor","","EntradaProvPagtoValor","decimal",0,"px",22,22,"right",null,[],11301,"EntradaProvPagtoValor",true,2,false,false,"Attribute",1,"");
   this.setGrid(Grid3Container);
   this.Grid1Container = new gx.grid.grid(this, 452,"EntradaProvItem",412,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"tentradaprov",[5091],false,1,false,true,5,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("nRcdDeleted_452",413,"vNRCDDELETED_452","","","nRcdDeleted_452","int",0,"px",4,1,"right",null,[],"nRcdDeleted_452","nRcdDeleted_452",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5091,414,"ENTRADAPROVSEQUENCIA","Sequência","","EntradaProvSequencia","int",0,"px",6,6,"right",null,[],5091,"EntradaProvSequencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5092,415,"ENTRADAPROVITEMLOTEFILIALEMPID","Empresa da Filial","","EntradaProvItemLoteFilialEmpId","char",0,"px",10,10,"left",null,[],5092,"EntradaProvItemLoteFilialEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5093,416,"ENTRADAPROVITEMLOTEFILIALID","FIlial do Lote do Produto","","EntradaProvItemLoteFilialId","int",0,"px",7,7,"right",null,[],5093,"EntradaProvItemLoteFilialId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5094,417,"ENTRADAPROVITEMLOTEPRODEMPID","Empreasa do Produto","","EntradaProvItemLoteProdEmpId","char",0,"px",10,10,"left",null,[],5094,"EntradaProvItemLoteProdEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5095,418,"ENTRADAPROVITEMLOTEPRODID","Produto","","EntradaProvItemLoteProdId","int",0,"px",10,10,"right",null,[],5095,"EntradaProvItemLoteProdId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8233,419,"ENTRADAPROVITEMLOTEPRODDESC","Descrição Produto","","EntradaProvItemLoteProdDesc","svchar",0,"px",120,80,"left",null,[],8233,"EntradaProvItemLoteProdDesc",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9312,420,"ENTRADAPROVITEMPRODUTOXML","Código do Produto no XML","","EntradaProvItemProdutoXML","char",0,"px",60,60,"left",null,[],9312,"EntradaProvItemProdutoXML",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5096,421,"ENTRADAPROVITEMLOTECOMBINACAO","Combinação do Lote","","EntradaProvItemLoteCombinacao","char",0,"px",20,20,"left",null,[],5096,"EntradaProvItemLoteCombinacao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9234,422,"ENTRADAPROVITEMNCMCODIGO","Código do NCM","","EntradaProvItemNCMCodigo","int",0,"px",8,8,"right",null,[],9234,"EntradaProvItemNCMCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5378,423,"ENTRADAPROVITEMDTVENCIMENTO","Data de Vencimento do Item","","EntradaProvItemDtVencimento","date",0,"px",10,10,"right",null,[],5378,"EntradaProvItemDtVencimento",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5097,424,"ENTRADAPROVITEMCODIGOBARRAS","Código de Barras","","EntradaProvItemCodigoBarras","int",0,"px",15,15,"right",null,[],5097,"EntradaProvItemCodigoBarras",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5098,425,"ENTRADAPROVITEMQUANTIDADE","Quantidade","","EntradaProvItemQuantidade","decimal",0,"px",21,21,"right",null,[],5098,"EntradaProvItemQuantidade",true,4,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9247,426,"ENTRADAPROVITEMQTDECONF","Quantidade Conferida","","EntradaProvItemQtdeConf","decimal",0,"px",21,21,"right",null,[],9247,"EntradaProvItemQtdeConf",true,4,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5099,427,"ENTRADAPROVITEMFATORCONVERSAO","Fator de Conversão","","EntradaProvItemFatorConversao","decimal",0,"px",18,18,"right",null,[],5099,"EntradaProvItemFatorConversao",true,6,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5100,428,"ENTRADAPROVITEMUNIDADEEMPID","Empresa da Unidade","","EntradaProvItemUnidadeEmpId","char",0,"px",10,10,"left",null,[],5100,"EntradaProvItemUnidadeEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5101,429,"ENTRADAPROVITEMUNIDADEID","Unidade","","EntradaProvItemUnidadeId","char",0,"px",3,3,"left",null,[],5101,"EntradaProvItemUnidadeId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5102,430,"ENTRADAPROVSNTOTALNOTA","Total da Nota","","EntradaProvSnTotalNota","char",0,"px",1,1,"left",null,[],5102,"EntradaProvSnTotalNota",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5103,431,"ENTRADAPROVITEMVALOR","Valor do Item","","EntradaProvItemValor","decimal",0,"px",21,21,"right",null,[],5103,"EntradaProvItemValor",true,6,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5104,432,"ENTRADAPROVITEMVALORDESCONTO","Valor do Desconto","","EntradaProvItemValorDesconto","decimal",0,"px",22,22,"right",null,[],5104,"EntradaProvItemValorDesconto",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5105,433,"ENTRADAPROVITEMVALORFRETE","Valor do Frete","","EntradaProvItemValorFrete","decimal",0,"px",22,22,"right",null,[],5105,"EntradaProvItemValorFrete",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5106,434,"ENTRADAPROVITEMVALORSEGURO","Valor do Seguro","","EntradaProvItemValorSeguro","decimal",0,"px",22,22,"right",null,[],5106,"EntradaProvItemValorSeguro",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5107,435,"ENTRADAPROVITEMOUTRASDESPESAS","Valor de Outras Despesas","","EntradaProvItemOutrasDespesas","decimal",0,"px",22,22,"right",null,[],5107,"EntradaProvItemOutrasDespesas",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5108,436,"ENTRADAPROVITEMVALORACRESCIMO","Valor do Acréscimo","","EntradaProvItemValorAcrescimo","decimal",0,"px",22,22,"right",null,[],5108,"EntradaProvItemValorAcrescimo",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5109,437,"ENTRADAPROVITEMVALORMANUSEIO","Valor do Manuseio","","EntradaProvItemValorManuseio","decimal",0,"px",22,22,"right",null,[],5109,"EntradaProvItemValorManuseio",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5110,438,"ENTRADAPROVITEMCFOPCODIGO","CFOP","","EntradaProvItemCFOPCOdigo","int",0,"px",4,4,"right",null,[],5110,"EntradaProvItemCFOPCOdigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5111,439,"ENTRADAPROVITEMCSTICMSTIPO","Tipo do CST","","EntradaProvItemCSTICMSTipo","char",0,"px",1,1,"left",null,[],5111,"EntradaProvItemCSTICMSTipo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5113,440,"ENTRADAPROVITEMCSTICMSCODIGO","Código do CST","","EntradaProvItemCSTICMSCodigo","char",0,"px",4,4,"left",null,[],5113,"EntradaProvItemCSTICMSCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5114,441,"ENTRADAPROVITEMMODALIDADEICMS","Modalidade do ICMS","","EntradaProvItemModalidadeICMS","char",0,"px",1,1,"left",null,[],5114,"EntradaProvItemModalidadeICMS",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5115,442,"ENTRADAPROVITEMREDBASEICMS","Redução da Base do ICMS","","EntradaProvItemRedBaseICMS","decimal",0,"px",6,6,"right",null,[],5115,"EntradaProvItemRedBaseICMS",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5116,443,"ENTRADAPROVITEMVALORBCICMS","Base de Cálculo do ICMS","","EntradaProvItemValorBCICMS","decimal",0,"px",22,22,"right",null,[],5116,"EntradaProvItemValorBCICMS",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5117,444,"ENTRADAPROVITEMPRECOPAUTAICMS","Proço de Pauta do ICMS","","EntradaProvItemPrecoPautaICMS","decimal",0,"px",21,21,"right",null,[],5117,"EntradaProvItemPrecoPautaICMS",true,6,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5118,445,"ENTRADAPROVITEMALIQUOTAICMS","Alíquota do ICMS","","EntradaProvItemAliquotaICMS","decimal",0,"px",6,6,"right",null,[],5118,"EntradaProvItemAliquotaICMS",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5119,446,"ENTRADAPROVITEMVALORICMS","Valor do ICMS","","EntradaProvItemValorICMS","decimal",0,"px",22,22,"right",null,[],5119,"EntradaProvItemValorICMS",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5120,447,"ENTRADAPROVITEMPCDIFERENCAICMS","Percentual de DIferença do ICMS","","EntradaProvItemPCDiferencaICMS","decimal",0,"px",6,6,"right",null,[],5120,"EntradaProvItemPCDiferencaICMS",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5121,448,"ENTRADAPROVITEMVLRDIFERENCAICM","Entrada Prov Item Vlr Diferenca ICMS","","EntradaProvItemVlrDiferencaICM","decimal",0,"px",22,22,"right",null,[],5121,"EntradaProvItemVlrDiferencaICM",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5122,449,"ENTRADAPROVITEMMODALIDADEICMSS","Modalidade do ICMS ST","","EntradaProvItemModalidadeICMSS","char",0,"px",1,1,"left",null,[],5122,"EntradaProvItemModalidadeICMSS",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5123,450,"ENTRADAPROVITEMMVAAJUSTADA","MVA Ajustada","","EntradaProvItemMVAAjustada","char",0,"px",1,1,"left",null,[],5123,"EntradaProvItemMVAAjustada",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5124,451,"ENTRADAPROVITEMVALORBCICMSST","Base de Cálculo do ICMS ST","","EntradaProvItemValorBCICMSST","decimal",0,"px",22,22,"right",null,[],5124,"EntradaProvItemValorBCICMSST",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5125,452,"ENTRADAPROVITEMPRECOPAUTAICMSS","Preço de Pauta do ICMS ST","","EntradaProvItemPrecoPautaICMSS","decimal",0,"px",21,21,"right",null,[],5125,"EntradaProvItemPrecoPautaICMSS",true,6,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5126,453,"ENTRADAPROVITEMPCMVA","Percentual do MVA","","EntradaProvItemPCMVA","decimal",0,"px",6,6,"right",null,[],5126,"EntradaProvItemPCMVA",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5127,454,"ENTRADAPROVITEMREDBASEICMSST","Redução da Base do ICMS ST","","EntradaProvItemRedBaseICMSST","decimal",0,"px",6,6,"right",null,[],5127,"EntradaProvItemRedBaseICMSST",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5129,455,"ENTRADAPROVITEMALIQUOTAINTERST","Alíquota Interna ST","","EntradaProvItemAliquotaInterST","decimal",0,"px",6,6,"right",null,[],5129,"EntradaProvItemAliquotaInterST",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5130,456,"ENTRADAPROVITEMALIQUOTAINTRAST","Alíquota Intra ST","","EntradaProvItemAliquotaIntraST","decimal",0,"px",6,6,"right",null,[],5130,"EntradaProvItemAliquotaIntraST",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5131,457,"ENTRADAPROVITEMVALORICMSST","Valor ICMS ST","","EntradaProvItemValorICMSST","decimal",0,"px",22,22,"right",null,[],5131,"EntradaProvItemValorICMSST",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5132,458,"ENTRADAPROVITEMICMSNAODEST","ICMS Não Destacado","","EntradaProvItemICMSNaoDest","char",0,"px",1,1,"left",null,[],5132,"EntradaProvItemICMSNaoDest",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5133,459,"ENTRADAITEMPROVVLRBCICMSNAODES","Base de Cálculo do ICMS Não Destacado","","EntradaItemProvVlrBCICMSNaoDes","decimal",0,"px",22,22,"right",null,[],5133,"EntradaItemProvVlrBCICMSNaoDes",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5134,460,"ENTRADAPROVITEMALIQICMSNAODEST","Alíquota do ICMS Não Destacado","","EntradaProvItemAliqICMSNaoDest","decimal",0,"px",6,6,"right",null,[],5134,"EntradaProvItemAliqICMSNaoDest",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5135,461,"ENTRADAPROVITEMVALORICMSNAODES","Entrada Prov Item Valor ICMSNao Dest","","EntradaProvItemValorICMSNaoDes","decimal",0,"px",22,22,"right",null,[],5135,"EntradaProvItemValorICMSNaoDes",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5375,462,"ENTRADAPROVITEMCLENQIPI","Classe Enquadramento IPI","","EntradaProvItemClEnqIPI","char",0,"px",5,5,"left",null,[],5375,"EntradaProvItemClEnqIPI",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5376,463,"ENTRADAPROVITEMCODENQIPI","Codigo Enquadramento IPI","","EntradaProvItemCodEnqIPI","int",0,"px",3,3,"right",null,[],5376,"EntradaProvItemCodEnqIPI",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5377,464,"ENTRADAPROVITEMCNPJPRODUTOR","CNPJ Produtor","","EntradaProvItemCNPJProdutor","char",0,"px",18,18,"left",null,[],5377,"EntradaProvItemCNPJProdutor",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5136,465,"ITEMENTRADAPROVCSTIPITIPO","Tipo do CST de IPI","","ItemEntradaProvCSTIPITipo","char",0,"px",1,1,"left",null,[],5136,"ItemEntradaProvCSTIPITipo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5138,466,"ITEMENTRADAPROVCSTIPICODIGO","Código do CST de IPI","","ItemEntradaProvCSTIPICodigo","char",0,"px",4,4,"left",null,[],5138,"ItemEntradaProvCSTIPICodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5139,467,"ENTRADAPROVITEMVALORBCIPI","Base de Cálculo do IPI","","EntradaProvItemValorBCIPI","decimal",0,"px",22,22,"right",null,[],5139,"EntradaProvItemValorBCIPI",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5140,468,"ENTRADAPROVITEMALIQUOTAIPI","Alíquota do IPI","","EntradaProvItemAliquotaIPI","decimal",0,"px",6,6,"right",null,[],5140,"EntradaProvItemAliquotaIPI",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5141,469,"ENTRADAPROVITEMVALORIPI","Valor do IPI","","EntradaProvItemValorIPI","decimal",0,"px",22,22,"right",null,[],5141,"EntradaProvItemValorIPI",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8703,470,"ENTRADAPROVITEMVLALIQUOTAIPI","Valor da Alíquota do IPI","","EntradaProvItemVlAliquotaIPI","decimal",0,"px",16,16,"right",null,[],8703,"EntradaProvItemVlAliquotaIPI",true,4,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8704,471,"ENTRADAPROVITEMQTDEIPI","Quantidade de Entrada do IPI","","EntradaProvItemQtdeIPI","decimal",0,"px",16,16,"right",null,[],8704,"EntradaProvItemQtdeIPI",true,4,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5142,472,"ENTRADAPROVITEMCSTPISTIPO","Tipo do CST de PIS","","EntradaProvItemCSTPISTipo","char",0,"px",1,1,"left",null,[],5142,"EntradaProvItemCSTPISTipo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5144,473,"ENTRADAPROVITEMCSTPISCODIGO","Código do CST do PIS","","EntradaProvItemCSTPISCodigo","char",0,"px",4,4,"left",null,[],5144,"EntradaProvItemCSTPISCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5145,474,"ENTRADAPROVITEMVALORBCPIS","Base de Cálculo do PIS","","EntradaProvItemValorBCPIS","decimal",0,"px",22,22,"right",null,[],5145,"EntradaProvItemValorBCPIS",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5146,475,"ENTRADAPROVITEMALIQUOTAPIS","Alíquota do PIS","","EntradaProvItemAliquotaPIS","decimal",0,"px",6,6,"right",null,[],5146,"EntradaProvItemAliquotaPIS",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5147,476,"ENTRADAPROVITEMVALORALIQUOTAPI","Valor da Alíquota do PIS","","EntradaProvItemValorAliquotaPI","decimal",0,"px",16,16,"right",null,[],5147,"EntradaProvItemValorAliquotaPI",true,4,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5148,477,"ENTRADAPROVITEMQTDEPIS","Quantidade de Entrada do PIS","","EntradaProvItemQtdePIS","decimal",0,"px",16,16,"right",null,[],5148,"EntradaProvItemQtdePIS",true,4,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5149,478,"ENTRADAPROVITEMVALORPIS","VAlor do PIS","","EntradaProvItemValorPIS","decimal",0,"px",22,22,"right",null,[],5149,"EntradaProvItemValorPIS",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5150,479,"ENTRADAPROVITEMCSTCOFINSTIPO","Tipo do CST do COFINS","","EntradaProvItemCSTCOFINSTipo","char",0,"px",1,1,"left",null,[],5150,"EntradaProvItemCSTCOFINSTipo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5152,480,"ENTRADAPROVITEMCSTCOFINSCODIGO","Código do CST do COFINS","","EntradaProvItemCSTCOFINSCodigo","char",0,"px",4,4,"left",null,[],5152,"EntradaProvItemCSTCOFINSCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5153,481,"ENTRADAPROVITEMVALORBCCOFINS","Base de cálculo do COFINS","","EntradaProvItemValorBCCOFINS","decimal",0,"px",22,22,"right",null,[],5153,"EntradaProvItemValorBCCOFINS",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5154,482,"ENTRADAPROVITEMALIQUOTACOFINS","Alíquota do COFINS","","EntradaProvItemAliquotaCOFINS","decimal",0,"px",6,6,"right",null,[],5154,"EntradaProvItemAliquotaCOFINS",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5155,483,"ENTRADAPROVITEMVALORALIQCOFINS","Valor da Alíquota do COFINS","","EntradaProvItemValorAliqCOFINS","decimal",0,"px",16,16,"right",null,[],5155,"EntradaProvItemValorAliqCOFINS",true,4,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5156,484,"ENTRADAPROVITEMQTDECOFINS","Quantidade de Entrada do COFINS","","EntradaProvItemQtdeCOFINS","decimal",0,"px",16,16,"right",null,[],5156,"EntradaProvItemQtdeCOFINS",true,4,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5157,485,"ENTRADAPROVITEMVALORCOFINS","Valor do COFINS","","EntradaProvItemValorCOFINS","decimal",0,"px",22,22,"right",null,[],5157,"EntradaProvItemValorCOFINS",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5363,486,"ENTRADAPROVITEMVLRBCIMPORTACAO","Base de Cálculo da Importação","","EntradaProvItemVlrBCImportacao","decimal",0,"px",22,22,"right",null,[],5363,"EntradaProvItemVlrBCImportacao",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5364,487,"ENTRADAPROVITEMVLRDESPADUANEIR","Despesas Aduaneiras","","EntradaProvItemVlrDespAduaneir","decimal",0,"px",22,22,"right",null,[],5364,"EntradaProvItemVlrDespAduaneir",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5365,488,"ENTRADAPROVITEMVLRIOF","Valor do IOF","","EntradaProvItemVlrIOF","decimal",0,"px",22,22,"right",null,[],5365,"EntradaProvItemVlrIOF",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5366,489,"ENTRADAPROVITEMVLRIMPORTACAO","Valor da Importação","","EntradaProvItemVlrImportacao","decimal",0,"px",22,22,"right",null,[],5366,"EntradaProvItemVlrImportacao",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5158,490,"ENTRADAPROVITEMOBSERVACAO","Observação","","EntradaProvItemObservacao","vchar",0,"px",9000,80,"left",null,[],5158,"EntradaProvItemObservacao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8234,491,"ENTRADAPROVITEMBCICMSSTRETANT","Base ICMSST Retido Anteriormente","","EntradaProvItemBCICMSSTRetAnt","decimal",0,"px",22,22,"right",null,[],8234,"EntradaProvItemBCICMSSTRetAnt",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8235,492,"ENTRADAPROVITEMVLICMSSTRETANT","Valor ICMSST Retido Anteriormente","","EntradaProvItemVLICMSSTRetAnt","decimal",0,"px",22,22,"right",null,[],8235,"EntradaProvItemVLICMSSTRetAnt",true,2,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TAB1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entradaprovempresaid,isvalid:null,rgrid:[this.Grid2Container,this.Grid3Container,this.Grid1Container],fld:"ENTRADAPROVEMPRESAID",gxz:"Z5013EntradaProvEmpresaId",gxold:"O5013EntradaProvEmpresaId",gxvar:"A5013EntradaProvEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5013EntradaProvEmpresaId=Value},v2z:function(Value){gx.O.Z5013EntradaProvEmpresaId=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVEMPRESAID",gx.O.A5013EntradaProvEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5013EntradaProvEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entradaprovid,isvalid:null,rgrid:[this.Grid2Container,this.Grid3Container,this.Grid1Container],fld:"ENTRADAPROVID",gxz:"Z5014EntradaProvId",gxold:"O5014EntradaProvId",gxvar:"A5014EntradaProvId",ucs:[],op:[408,403,398,394,390,385,380,375,370,365,360,355,350,345,340,335,330,325,320,315,310,305,300,295,290,285,280,275,270,265,260,255,250,245,240,235,230,225,220,215,210,205,200,195,190,185,180,175,170,165,160,155,150,145,140,135,130,125,120,115,110,105,100,95,90,85,80,75,70,65,60,55,50,45,40,35,30,25],ip:[408,403,398,394,390,385,380,375,370,365,360,355,350,345,340,335,330,325,320,315,310,305,300,295,290,285,280,275,270,265,260,255,250,245,240,235,230,225,220,215,210,205,200,195,190,185,180,175,170,165,160,155,150,145,140,135,130,125,120,115,110,105,100,95,90,85,80,75,70,65,60,55,50,45,40,35,30,25,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5014EntradaProvId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5014EntradaProvId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTRADAPROVID",gx.O.A5014EntradaProvId,0)},c2v:function(){gx.O.A5014EntradaProvId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTRADAPROVID",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entradaprovtipo,isvalid:null,rgrid:[],fld:"ENTRADAPROVTIPO",gxz:"Z5015EntradaProvTipo",gxold:"O5015EntradaProvTipo",gxvar:"A5015EntradaProvTipo",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A5015EntradaProvTipo=Value},v2z:function(Value){gx.O.Z5015EntradaProvTipo=Value},v2c:function(){gx.fn.setComboBoxValue("ENTRADAPROVTIPO",gx.O.A5015EntradaProvTipo);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5015EntradaProvTipo=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVTIPO")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVNUMERODOCUMENTO",gxz:"Z5016EntradaProvNumeroDocumento",gxold:"O5016EntradaProvNumeroDocumento",gxvar:"A5016EntradaProvNumeroDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5016EntradaProvNumeroDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5016EntradaProvNumeroDocumento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTRADAPROVNUMERODOCUMENTO",gx.O.A5016EntradaProvNumeroDocumento,0)},c2v:function(){gx.O.A5016EntradaProvNumeroDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTRADAPROVNUMERODOCUMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVFORNECEDOREMPID",gxz:"Z5017EntradaProvFornecedorEmpId",gxold:"O5017EntradaProvFornecedorEmpId",gxvar:"A5017EntradaProvFornecedorEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5017EntradaProvFornecedorEmpId=Value},v2z:function(Value){gx.O.Z5017EntradaProvFornecedorEmpId=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVFORNECEDOREMPID",gx.O.A5017EntradaProvFornecedorEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5017EntradaProvFornecedorEmpId=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVFORNECEDOREMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVFORNECEDORID",gxz:"Z5018EntradaProvFornecedorId",gxold:"O5018EntradaProvFornecedorId",gxvar:"A5018EntradaProvFornecedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5018EntradaProvFornecedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5018EntradaProvFornecedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTRADAPROVFORNECEDORID",gx.O.A5018EntradaProvFornecedorId,0)},c2v:function(){gx.O.A5018EntradaProvFornecedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTRADAPROVFORNECEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVFORNECEDORNOME",gxz:"Z6550EntradaProvFornecedorNome",gxold:"O6550EntradaProvFornecedorNome",gxvar:"A6550EntradaProvFornecedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6550EntradaProvFornecedorNome=Value},v2z:function(Value){gx.O.Z6550EntradaProvFornecedorNome=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVFORNECEDORNOME",gx.O.A6550EntradaProvFornecedorNome,0)},c2v:function(){gx.O.A6550EntradaProvFornecedorNome=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVFORNECEDORNOME")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVFORNECEDORFANTASIA",gxz:"Z6551EntradaProvFornecedorFantasia",gxold:"O6551EntradaProvFornecedorFantasia",gxvar:"A6551EntradaProvFornecedorFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6551EntradaProvFornecedorFantasia=Value},v2z:function(Value){gx.O.Z6551EntradaProvFornecedorFantasia=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVFORNECEDORFANTASIA",gx.O.A6551EntradaProvFornecedorFantasia,0)},c2v:function(){gx.O.A6551EntradaProvFornecedorFantasia=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVFORNECEDORFANTASIA")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entradaprovtipopessoa,isvalid:null,rgrid:[],fld:"ENTRADAPROVTIPOPESSOA",gxz:"Z5088EntradaProvTipoPessoa",gxold:"O5088EntradaProvTipoPessoa",gxvar:"A5088EntradaProvTipoPessoa",ucs:[],op:[55],ip:[55],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A5088EntradaProvTipoPessoa=Value},v2z:function(Value){gx.O.Z5088EntradaProvTipoPessoa=Value},v2c:function(){gx.fn.setComboBoxValue("ENTRADAPROVTIPOPESSOA",gx.O.A5088EntradaProvTipoPessoa);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5088EntradaProvTipoPessoa=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVTIPOPESSOA")},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVCPFCNPJ",gxz:"Z5089EntradaProvCPFCNPJ",gxold:"O5089EntradaProvCPFCNPJ",gxvar:"A5089EntradaProvCPFCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5089EntradaProvCPFCNPJ=Value},v2z:function(Value){gx.O.Z5089EntradaProvCPFCNPJ=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVCPFCNPJ",gx.O.A5089EntradaProvCPFCNPJ,0)},c2v:function(){gx.O.A5089EntradaProvCPFCNPJ=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVCPFCNPJ")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVFORNECENDERECO",gxz:"Z6552EntradaProvFornecEndereco",gxold:"O6552EntradaProvFornecEndereco",gxvar:"A6552EntradaProvFornecEndereco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6552EntradaProvFornecEndereco=Value},v2z:function(Value){gx.O.Z6552EntradaProvFornecEndereco=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVFORNECENDERECO",gx.O.A6552EntradaProvFornecEndereco,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6552EntradaProvFornecEndereco=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVFORNECENDERECO")},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[68]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVFORNECNUMENDERECO",gxz:"Z6553EntradaProvFornecNumEndereco",gxold:"O6553EntradaProvFornecNumEndereco",gxvar:"A6553EntradaProvFornecNumEndereco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6553EntradaProvFornecNumEndereco=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6553EntradaProvFornecNumEndereco=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTRADAPROVFORNECNUMENDERECO",gx.O.A6553EntradaProvFornecNumEndereco,0)},c2v:function(){gx.O.A6553EntradaProvFornecNumEndereco=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTRADAPROVFORNECNUMENDERECO",'.')},nac:gx.falseFn};
   GXValidFnc[73]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVFORNECCOMPLEMENTO",gxz:"Z6554EntradaProvFornecComplemento",gxold:"O6554EntradaProvFornecComplemento",gxvar:"A6554EntradaProvFornecComplemento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6554EntradaProvFornecComplemento=Value},v2z:function(Value){gx.O.Z6554EntradaProvFornecComplemento=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVFORNECCOMPLEMENTO",gx.O.A6554EntradaProvFornecComplemento,0)},c2v:function(){gx.O.A6554EntradaProvFornecComplemento=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVFORNECCOMPLEMENTO")},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVFORNECBAIRRO",gxz:"Z6555EntradaProvFornecBairro",gxold:"O6555EntradaProvFornecBairro",gxvar:"A6555EntradaProvFornecBairro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6555EntradaProvFornecBairro=Value},v2z:function(Value){gx.O.Z6555EntradaProvFornecBairro=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVFORNECBAIRRO",gx.O.A6555EntradaProvFornecBairro,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6555EntradaProvFornecBairro=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVFORNECBAIRRO")},nac:gx.falseFn};
   this.declareDomainHdlr( 80 , function() {
   });
   GXValidFnc[83]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVFORNECCIDADEID",gxz:"Z6556EntradaProvFornecCidadeId",gxold:"O6556EntradaProvFornecCidadeId",gxvar:"A6556EntradaProvFornecCidadeId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6556EntradaProvFornecCidadeId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6556EntradaProvFornecCidadeId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTRADAPROVFORNECCIDADEID",gx.O.A6556EntradaProvFornecCidadeId,0)},c2v:function(){gx.O.A6556EntradaProvFornecCidadeId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTRADAPROVFORNECCIDADEID",'.')},nac:gx.falseFn};
   GXValidFnc[88]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVFORNECCIDADENOME",gxz:"Z6557EntradaProvFornecCidadeNome",gxold:"O6557EntradaProvFornecCidadeNome",gxvar:"A6557EntradaProvFornecCidadeNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6557EntradaProvFornecCidadeNome=Value},v2z:function(Value){gx.O.Z6557EntradaProvFornecCidadeNome=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVFORNECCIDADENOME",gx.O.A6557EntradaProvFornecCidadeNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6557EntradaProvFornecCidadeNome=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVFORNECCIDADENOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 90 , function() {
   });
   GXValidFnc[93]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entradaprovfornecuf,isvalid:null,rgrid:[],fld:"ENTRADAPROVFORNECUF",gxz:"Z6558EntradaProvFornecUF",gxold:"O6558EntradaProvFornecUF",gxvar:"A6558EntradaProvFornecUF",ucs:[],op:[95],ip:[95],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A6558EntradaProvFornecUF=Value},v2z:function(Value){gx.O.Z6558EntradaProvFornecUF=Value},v2c:function(){gx.fn.setComboBoxValue("ENTRADAPROVFORNECUF",gx.O.A6558EntradaProvFornecUF);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6558EntradaProvFornecUF=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVFORNECUF")},nac:gx.falseFn};
   this.declareDomainHdlr( 95 , function() {
   });
   GXValidFnc[98]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVFORNECCEP",gxz:"Z6559EntradaProvFornecCEP",gxold:"O6559EntradaProvFornecCEP",gxvar:"A6559EntradaProvFornecCEP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6559EntradaProvFornecCEP=Value},v2z:function(Value){gx.O.Z6559EntradaProvFornecCEP=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVFORNECCEP",gx.O.A6559EntradaProvFornecCEP,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6559EntradaProvFornecCEP=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVFORNECCEP")},nac:gx.falseFn};
   this.declareDomainHdlr( 100 , function() {
   });
   GXValidFnc[103]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[105]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVFORNECPAISID",gxz:"Z6560EntradaProvFornecPaisId",gxold:"O6560EntradaProvFornecPaisId",gxvar:"A6560EntradaProvFornecPaisId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6560EntradaProvFornecPaisId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6560EntradaProvFornecPaisId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTRADAPROVFORNECPAISID",gx.O.A6560EntradaProvFornecPaisId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6560EntradaProvFornecPaisId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTRADAPROVFORNECPAISID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 105 , function() {
   });
   GXValidFnc[108]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[110]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVFORNECPAISNOME",gxz:"Z6561EntradaProvFornecPaisNome",gxold:"O6561EntradaProvFornecPaisNome",gxvar:"A6561EntradaProvFornecPaisNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6561EntradaProvFornecPaisNome=Value},v2z:function(Value){gx.O.Z6561EntradaProvFornecPaisNome=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVFORNECPAISNOME",gx.O.A6561EntradaProvFornecPaisNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6561EntradaProvFornecPaisNome=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVFORNECPAISNOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 110 , function() {
   });
   GXValidFnc[113]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[115]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVFORNECTELEFONE",gxz:"Z6562EntradaProvFornecTelefone",gxold:"O6562EntradaProvFornecTelefone",gxvar:"A6562EntradaProvFornecTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6562EntradaProvFornecTelefone=Value},v2z:function(Value){gx.O.Z6562EntradaProvFornecTelefone=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVFORNECTELEFONE",gx.O.A6562EntradaProvFornecTelefone,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6562EntradaProvFornecTelefone=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVFORNECTELEFONE")},nac:gx.falseFn};
   this.declareDomainHdlr( 115 , function() {
   });
   GXValidFnc[118]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[120]={lvl:0,type:"svchar",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVFORNECIE",gxz:"Z6563EntradaProvFornecIE",gxold:"O6563EntradaProvFornecIE",gxvar:"A6563EntradaProvFornecIE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6563EntradaProvFornecIE=Value},v2z:function(Value){gx.O.Z6563EntradaProvFornecIE=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVFORNECIE",gx.O.A6563EntradaProvFornecIE,0)},c2v:function(){gx.O.A6563EntradaProvFornecIE=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVFORNECIE")},nac:gx.falseFn};
   GXValidFnc[123]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[125]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVFORNECIM",gxz:"Z6564EntradaProvFornecIM",gxold:"O6564EntradaProvFornecIM",gxvar:"A6564EntradaProvFornecIM",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6564EntradaProvFornecIM=Value},v2z:function(Value){gx.O.Z6564EntradaProvFornecIM=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVFORNECIM",gx.O.A6564EntradaProvFornecIM,0)},c2v:function(){gx.O.A6564EntradaProvFornecIM=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVFORNECIM")},nac:gx.falseFn};
   GXValidFnc[128]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[130]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVSERIE",gxz:"Z5019EntradaProvSerie",gxold:"O5019EntradaProvSerie",gxvar:"A5019EntradaProvSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5019EntradaProvSerie=Value},v2z:function(Value){gx.O.Z5019EntradaProvSerie=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVSERIE",gx.O.A5019EntradaProvSerie,0)},c2v:function(){gx.O.A5019EntradaProvSerie=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVSERIE")},nac:gx.falseFn};
   GXValidFnc[133]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[135]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVSUBSERIE",gxz:"Z5020EntradaProvSubSerie",gxold:"O5020EntradaProvSubSerie",gxvar:"A5020EntradaProvSubSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5020EntradaProvSubSerie=Value},v2z:function(Value){gx.O.Z5020EntradaProvSubSerie=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVSUBSERIE",gx.O.A5020EntradaProvSubSerie,0)},c2v:function(){gx.O.A5020EntradaProvSubSerie=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVSUBSERIE")},nac:gx.falseFn};
   GXValidFnc[138]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[140]={lvl:0,type:"svchar",len:44,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVCHAVENFE",gxz:"Z5021EntradaProvChaveNFE",gxold:"O5021EntradaProvChaveNFE",gxvar:"A5021EntradaProvChaveNFE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5021EntradaProvChaveNFE=Value},v2z:function(Value){gx.O.Z5021EntradaProvChaveNFE=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVCHAVENFE",gx.O.A5021EntradaProvChaveNFE,0)},c2v:function(){gx.O.A5021EntradaProvChaveNFE=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVCHAVENFE")},nac:gx.falseFn};
   GXValidFnc[143]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[145]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVDATAEMISSAO",gxz:"Z5022EntradaProvDataEmissao",gxold:"O5022EntradaProvDataEmissao",gxvar:"A5022EntradaProvDataEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5022EntradaProvDataEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5022EntradaProvDataEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ENTRADAPROVDATAEMISSAO",gx.O.A5022EntradaProvDataEmissao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5022EntradaProvDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("ENTRADAPROVDATAEMISSAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 145 , function() {
   });
   GXValidFnc[148]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[150]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVDATAENTRADA",gxz:"Z5023EntradaProvDataEntrada",gxold:"O5023EntradaProvDataEntrada",gxvar:"A5023EntradaProvDataEntrada",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5023EntradaProvDataEntrada=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5023EntradaProvDataEntrada=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ENTRADAPROVDATAENTRADA",gx.O.A5023EntradaProvDataEntrada,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5023EntradaProvDataEntrada=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("ENTRADAPROVDATAENTRADA")},nac:gx.falseFn};
   this.declareDomainHdlr( 150 , function() {
   });
   GXValidFnc[153]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[155]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVCFOPCODIGO",gxz:"Z5024EntradaProvCFOPCodigo",gxold:"O5024EntradaProvCFOPCodigo",gxvar:"A5024EntradaProvCFOPCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5024EntradaProvCFOPCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5024EntradaProvCFOPCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTRADAPROVCFOPCODIGO",gx.O.A5024EntradaProvCFOPCodigo,0)},c2v:function(){gx.O.A5024EntradaProvCFOPCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTRADAPROVCFOPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[158]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[160]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVCSTTIPO",gxz:"Z5025EntradaProvCSTTipo",gxold:"O5025EntradaProvCSTTipo",gxvar:"A5025EntradaProvCSTTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5025EntradaProvCSTTipo=Value},v2z:function(Value){gx.O.Z5025EntradaProvCSTTipo=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVCSTTIPO",gx.O.A5025EntradaProvCSTTipo,0)},c2v:function(){gx.O.A5025EntradaProvCSTTipo=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVCSTTIPO")},nac:gx.falseFn};
   GXValidFnc[163]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[165]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVCSTCODIGO",gxz:"Z5027EntradaProvCSTCodigo",gxold:"O5027EntradaProvCSTCodigo",gxvar:"A5027EntradaProvCSTCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5027EntradaProvCSTCodigo=Value},v2z:function(Value){gx.O.Z5027EntradaProvCSTCodigo=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVCSTCODIGO",gx.O.A5027EntradaProvCSTCodigo,0)},c2v:function(){gx.O.A5027EntradaProvCSTCodigo=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVCSTCODIGO")},nac:gx.falseFn};
   GXValidFnc[168]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[170]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVMODDOCFISCAL",gxz:"Z5030EntradaProvModDocFiscal",gxold:"O5030EntradaProvModDocFiscal",gxvar:"A5030EntradaProvModDocFiscal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5030EntradaProvModDocFiscal=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5030EntradaProvModDocFiscal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTRADAPROVMODDOCFISCAL",gx.O.A5030EntradaProvModDocFiscal,0)},c2v:function(){gx.O.A5030EntradaProvModDocFiscal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTRADAPROVMODDOCFISCAL",'.')},nac:gx.falseFn};
   GXValidFnc[173]={fld:"TEXTBLOCK34", format:0,grid:0};
   GXValidFnc[175]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVSITDOCFISCAL",gxz:"Z5031EntradaProvSitDocFiscal",gxold:"O5031EntradaProvSitDocFiscal",gxvar:"A5031EntradaProvSitDocFiscal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5031EntradaProvSitDocFiscal=Value},v2z:function(Value){gx.O.Z5031EntradaProvSitDocFiscal=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVSITDOCFISCAL",gx.O.A5031EntradaProvSitDocFiscal,0)},c2v:function(){gx.O.A5031EntradaProvSitDocFiscal=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVSITDOCFISCAL")},nac:gx.falseFn};
   GXValidFnc[178]={fld:"TEXTBLOCK35", format:0,grid:0};
   GXValidFnc[180]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVESPECIE",gxz:"Z5032EntradaProvEspecie",gxold:"O5032EntradaProvEspecie",gxvar:"A5032EntradaProvEspecie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5032EntradaProvEspecie=Value},v2z:function(Value){gx.O.Z5032EntradaProvEspecie=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVESPECIE",gx.O.A5032EntradaProvEspecie,0)},c2v:function(){gx.O.A5032EntradaProvEspecie=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVESPECIE")},nac:gx.falseFn};
   GXValidFnc[183]={fld:"TEXTBLOCK36", format:0,grid:0};
   GXValidFnc[185]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVMARCA",gxz:"Z5033EntradaProvMarca",gxold:"O5033EntradaProvMarca",gxvar:"A5033EntradaProvMarca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5033EntradaProvMarca=Value},v2z:function(Value){gx.O.Z5033EntradaProvMarca=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVMARCA",gx.O.A5033EntradaProvMarca,0)},c2v:function(){gx.O.A5033EntradaProvMarca=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVMARCA")},nac:gx.falseFn};
   GXValidFnc[188]={fld:"TEXTBLOCK37", format:0,grid:0};
   GXValidFnc[190]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVNUMERACAO",gxz:"Z5034EntradaProvNumeracao",gxold:"O5034EntradaProvNumeracao",gxvar:"A5034EntradaProvNumeracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5034EntradaProvNumeracao=Value},v2z:function(Value){gx.O.Z5034EntradaProvNumeracao=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVNUMERACAO",gx.O.A5034EntradaProvNumeracao,0)},c2v:function(){gx.O.A5034EntradaProvNumeracao=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVNUMERACAO")},nac:gx.falseFn};
   GXValidFnc[193]={fld:"TEXTBLOCK38", format:0,grid:0};
   GXValidFnc[195]={lvl:0,type:"vchar",len:9000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVOBSERVACAO",gxz:"Z5035EntradaProvObservacao",gxold:"O5035EntradaProvObservacao",gxvar:"A5035EntradaProvObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5035EntradaProvObservacao=Value},v2z:function(Value){gx.O.Z5035EntradaProvObservacao=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVOBSERVACAO",gx.O.A5035EntradaProvObservacao,0)},c2v:function(){gx.O.A5035EntradaProvObservacao=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[198]={fld:"TEXTBLOCK39", format:0,grid:0};
   GXValidFnc[200]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVMODALIDADEFRETE",gxz:"Z5036EntradaProvModalidadeFrete",gxold:"O5036EntradaProvModalidadeFrete",gxvar:"A5036EntradaProvModalidadeFrete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5036EntradaProvModalidadeFrete=Value},v2z:function(Value){gx.O.Z5036EntradaProvModalidadeFrete=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVMODALIDADEFRETE",gx.O.A5036EntradaProvModalidadeFrete,0)},c2v:function(){gx.O.A5036EntradaProvModalidadeFrete=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVMODALIDADEFRETE")},nac:gx.falseFn};
   GXValidFnc[203]={fld:"TEXTBLOCK40", format:0,grid:0};
   GXValidFnc[205]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVTIPOTRANSPORTE",gxz:"Z5037EntradaProvTipoTransporte",gxold:"O5037EntradaProvTipoTransporte",gxvar:"A5037EntradaProvTipoTransporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5037EntradaProvTipoTransporte=Value},v2z:function(Value){gx.O.Z5037EntradaProvTipoTransporte=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVTIPOTRANSPORTE",gx.O.A5037EntradaProvTipoTransporte,0)},c2v:function(){gx.O.A5037EntradaProvTipoTransporte=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVTIPOTRANSPORTE")},nac:gx.falseFn};
   GXValidFnc[208]={fld:"TEXTBLOCK41", format:0,grid:0};
   GXValidFnc[210]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVTRANSPORTADOREMPID",gxz:"Z5038EntradaProvTransportadorEmpId",gxold:"O5038EntradaProvTransportadorEmpId",gxvar:"A5038EntradaProvTransportadorEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5038EntradaProvTransportadorEmpId=Value},v2z:function(Value){gx.O.Z5038EntradaProvTransportadorEmpId=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVTRANSPORTADOREMPID",gx.O.A5038EntradaProvTransportadorEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5038EntradaProvTransportadorEmpId=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVTRANSPORTADOREMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 210 , function() {
   });
   GXValidFnc[213]={fld:"TEXTBLOCK42", format:0,grid:0};
   GXValidFnc[215]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVTRANSPORTADORID",gxz:"Z5039EntradaProvTransportadorId",gxold:"O5039EntradaProvTransportadorId",gxvar:"A5039EntradaProvTransportadorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5039EntradaProvTransportadorId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5039EntradaProvTransportadorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTRADAPROVTRANSPORTADORID",gx.O.A5039EntradaProvTransportadorId,0)},c2v:function(){gx.O.A5039EntradaProvTransportadorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTRADAPROVTRANSPORTADORID",'.')},nac:gx.falseFn};
   GXValidFnc[218]={fld:"TEXTBLOCK43", format:0,grid:0};
   GXValidFnc[220]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVCODIGOANTECIPACAO",gxz:"Z5040EntradaProvCodigoAntecipacao",gxold:"O5040EntradaProvCodigoAntecipacao",gxvar:"A5040EntradaProvCodigoAntecipacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5040EntradaProvCodigoAntecipacao=Value},v2z:function(Value){gx.O.Z5040EntradaProvCodigoAntecipacao=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVCODIGOANTECIPACAO",gx.O.A5040EntradaProvCodigoAntecipacao,0)},c2v:function(){gx.O.A5040EntradaProvCodigoAntecipacao=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVCODIGOANTECIPACAO")},nac:gx.falseFn};
   GXValidFnc[223]={fld:"TEXTBLOCK44", format:0,grid:0};
   GXValidFnc[225]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVCLASSEENERGIAELETR",gxz:"Z5049EntradaProvClasseEnergiaEletr",gxold:"O5049EntradaProvClasseEnergiaEletr",gxvar:"A5049EntradaProvClasseEnergiaEletr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5049EntradaProvClasseEnergiaEletr=Value},v2z:function(Value){gx.O.Z5049EntradaProvClasseEnergiaEletr=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVCLASSEENERGIAELETR",gx.O.A5049EntradaProvClasseEnergiaEletr,0)},c2v:function(){gx.O.A5049EntradaProvClasseEnergiaEletr=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVCLASSEENERGIAELETR")},nac:gx.falseFn};
   GXValidFnc[228]={fld:"TEXTBLOCK45", format:0,grid:0};
   GXValidFnc[230]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVCPFENTREGA",gxz:"Z5050EntradaProvCPFEntrega",gxold:"O5050EntradaProvCPFEntrega",gxvar:"A5050EntradaProvCPFEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5050EntradaProvCPFEntrega=Value},v2z:function(Value){gx.O.Z5050EntradaProvCPFEntrega=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVCPFENTREGA",gx.O.A5050EntradaProvCPFEntrega,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5050EntradaProvCPFEntrega=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVCPFENTREGA")},nac:gx.falseFn};
   this.declareDomainHdlr( 230 , function() {
   });
   GXValidFnc[233]={fld:"TEXTBLOCK46", format:0,grid:0};
   GXValidFnc[235]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVCNPJENTREGA",gxz:"Z5051EntradaProvCNPJEntrega",gxold:"O5051EntradaProvCNPJEntrega",gxvar:"A5051EntradaProvCNPJEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5051EntradaProvCNPJEntrega=Value},v2z:function(Value){gx.O.Z5051EntradaProvCNPJEntrega=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVCNPJENTREGA",gx.O.A5051EntradaProvCNPJEntrega,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5051EntradaProvCNPJEntrega=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVCNPJENTREGA")},nac:gx.falseFn};
   this.declareDomainHdlr( 235 , function() {
   });
   GXValidFnc[238]={fld:"TEXTBLOCK47", format:0,grid:0};
   GXValidFnc[240]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVENDERECORETIRADA",gxz:"Z5052EntradaProvEnderecoRetirada",gxold:"O5052EntradaProvEnderecoRetirada",gxvar:"A5052EntradaProvEnderecoRetirada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5052EntradaProvEnderecoRetirada=Value},v2z:function(Value){gx.O.Z5052EntradaProvEnderecoRetirada=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVENDERECORETIRADA",gx.O.A5052EntradaProvEnderecoRetirada,0)},c2v:function(){gx.O.A5052EntradaProvEnderecoRetirada=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVENDERECORETIRADA")},nac:gx.falseFn};
   GXValidFnc[243]={fld:"TEXTBLOCK48", format:0,grid:0};
   GXValidFnc[245]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVNUMEROENDRETIRADA",gxz:"Z5053EntradaProvNumeroEndRetirada",gxold:"O5053EntradaProvNumeroEndRetirada",gxvar:"A5053EntradaProvNumeroEndRetirada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5053EntradaProvNumeroEndRetirada=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5053EntradaProvNumeroEndRetirada=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTRADAPROVNUMEROENDRETIRADA",gx.O.A5053EntradaProvNumeroEndRetirada,0)},c2v:function(){gx.O.A5053EntradaProvNumeroEndRetirada=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTRADAPROVNUMEROENDRETIRADA",'.')},nac:gx.falseFn};
   GXValidFnc[248]={fld:"TEXTBLOCK49", format:0,grid:0};
   GXValidFnc[250]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVCOMPLENDRETIRADA",gxz:"Z5054EntradaProvComplEndRetirada",gxold:"O5054EntradaProvComplEndRetirada",gxvar:"A5054EntradaProvComplEndRetirada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5054EntradaProvComplEndRetirada=Value},v2z:function(Value){gx.O.Z5054EntradaProvComplEndRetirada=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVCOMPLENDRETIRADA",gx.O.A5054EntradaProvComplEndRetirada,0)},c2v:function(){gx.O.A5054EntradaProvComplEndRetirada=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVCOMPLENDRETIRADA")},nac:gx.falseFn};
   GXValidFnc[253]={fld:"TEXTBLOCK50", format:0,grid:0};
   GXValidFnc[255]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVBAIRROENDRETIRADA",gxz:"Z5055EntradaProvBairroEndRetirada",gxold:"O5055EntradaProvBairroEndRetirada",gxvar:"A5055EntradaProvBairroEndRetirada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5055EntradaProvBairroEndRetirada=Value},v2z:function(Value){gx.O.Z5055EntradaProvBairroEndRetirada=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVBAIRROENDRETIRADA",gx.O.A5055EntradaProvBairroEndRetirada,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5055EntradaProvBairroEndRetirada=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVBAIRROENDRETIRADA")},nac:gx.falseFn};
   this.declareDomainHdlr( 255 , function() {
   });
   GXValidFnc[258]={fld:"TEXTBLOCK51", format:0,grid:0};
   GXValidFnc[260]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVCEPENDRETIRADA",gxz:"Z5056EntradaProvCEPEndRetirada",gxold:"O5056EntradaProvCEPEndRetirada",gxvar:"A5056EntradaProvCEPEndRetirada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5056EntradaProvCEPEndRetirada=Value},v2z:function(Value){gx.O.Z5056EntradaProvCEPEndRetirada=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVCEPENDRETIRADA",gx.O.A5056EntradaProvCEPEndRetirada,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5056EntradaProvCEPEndRetirada=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVCEPENDRETIRADA")},nac:gx.falseFn};
   this.declareDomainHdlr( 260 , function() {
   });
   GXValidFnc[263]={fld:"TEXTBLOCK52", format:0,grid:0};
   GXValidFnc[265]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVCIDADEENTRETIRADA",gxz:"Z5057EntradaProvCidadeEntRetirada",gxold:"O5057EntradaProvCidadeEntRetirada",gxvar:"A5057EntradaProvCidadeEntRetirada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5057EntradaProvCidadeEntRetirada=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5057EntradaProvCidadeEntRetirada=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTRADAPROVCIDADEENTRETIRADA",gx.O.A5057EntradaProvCidadeEntRetirada,0)},c2v:function(){gx.O.A5057EntradaProvCidadeEntRetirada=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTRADAPROVCIDADEENTRETIRADA",'.')},nac:gx.falseFn};
   GXValidFnc[268]={fld:"TEXTBLOCK53", format:0,grid:0};
   GXValidFnc[270]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVTIPOCTE",gxz:"Z5058EntradaProvTipoCTE",gxold:"O5058EntradaProvTipoCTE",gxvar:"A5058EntradaProvTipoCTE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5058EntradaProvTipoCTE=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5058EntradaProvTipoCTE=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTRADAPROVTIPOCTE",gx.O.A5058EntradaProvTipoCTE,0)},c2v:function(){gx.O.A5058EntradaProvTipoCTE=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTRADAPROVTIPOCTE",'.')},nac:gx.falseFn};
   GXValidFnc[273]={fld:"TEXTBLOCK54", format:0,grid:0};
   GXValidFnc[275]={lvl:0,type:"svchar",len:44,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVCHAVECTEREF",gxz:"Z5059EntradaProvChaveCTEREF",gxold:"O5059EntradaProvChaveCTEREF",gxvar:"A5059EntradaProvChaveCTEREF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5059EntradaProvChaveCTEREF=Value},v2z:function(Value){gx.O.Z5059EntradaProvChaveCTEREF=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVCHAVECTEREF",gx.O.A5059EntradaProvChaveCTEREF,0)},c2v:function(){gx.O.A5059EntradaProvChaveCTEREF=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVCHAVECTEREF")},nac:gx.falseFn};
   GXValidFnc[278]={fld:"TEXTBLOCK55", format:0,grid:0};
   GXValidFnc[280]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVVALORPRODUTOS",gxz:"Z5060EntradaProvValorProdutos",gxold:"O5060EntradaProvValorProdutos",gxvar:"A5060EntradaProvValorProdutos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5060EntradaProvValorProdutos=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5060EntradaProvValorProdutos=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ENTRADAPROVVALORPRODUTOS",gx.O.A5060EntradaProvValorProdutos,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5060EntradaProvValorProdutos=this.val()},val:function(){return gx.fn.getDecimalValue("ENTRADAPROVVALORPRODUTOS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 280 , function() {
   });
   GXValidFnc[283]={fld:"TEXTBLOCK56", format:0,grid:0};
   GXValidFnc[285]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVVALORACRESCIMO",gxz:"Z5061EntradaProvValorAcrescimo",gxold:"O5061EntradaProvValorAcrescimo",gxvar:"A5061EntradaProvValorAcrescimo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5061EntradaProvValorAcrescimo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5061EntradaProvValorAcrescimo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ENTRADAPROVVALORACRESCIMO",gx.O.A5061EntradaProvValorAcrescimo,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5061EntradaProvValorAcrescimo=this.val()},val:function(){return gx.fn.getDecimalValue("ENTRADAPROVVALORACRESCIMO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 285 , function() {
   });
   GXValidFnc[288]={fld:"TEXTBLOCK57", format:0,grid:0};
   GXValidFnc[290]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVVALORDESCONTO",gxz:"Z5062EntradaProvValorDesconto",gxold:"O5062EntradaProvValorDesconto",gxvar:"A5062EntradaProvValorDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5062EntradaProvValorDesconto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5062EntradaProvValorDesconto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ENTRADAPROVVALORDESCONTO",gx.O.A5062EntradaProvValorDesconto,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5062EntradaProvValorDesconto=this.val()},val:function(){return gx.fn.getDecimalValue("ENTRADAPROVVALORDESCONTO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 290 , function() {
   });
   GXValidFnc[293]={fld:"TEXTBLOCK58", format:0,grid:0};
   GXValidFnc[295]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVDESCONTOFINANCEIRO",gxz:"Z5063EntradaProvDescontoFinanceiro",gxold:"O5063EntradaProvDescontoFinanceiro",gxvar:"A5063EntradaProvDescontoFinanceiro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5063EntradaProvDescontoFinanceiro=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5063EntradaProvDescontoFinanceiro=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ENTRADAPROVDESCONTOFINANCEIRO",gx.O.A5063EntradaProvDescontoFinanceiro,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5063EntradaProvDescontoFinanceiro=this.val()},val:function(){return gx.fn.getDecimalValue("ENTRADAPROVDESCONTOFINANCEIRO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 295 , function() {
   });
   GXValidFnc[298]={fld:"TEXTBLOCK59", format:0,grid:0};
   GXValidFnc[300]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVVALORFRETE",gxz:"Z5064EntradaProvValorFrete",gxold:"O5064EntradaProvValorFrete",gxvar:"A5064EntradaProvValorFrete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5064EntradaProvValorFrete=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5064EntradaProvValorFrete=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ENTRADAPROVVALORFRETE",gx.O.A5064EntradaProvValorFrete,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5064EntradaProvValorFrete=this.val()},val:function(){return gx.fn.getDecimalValue("ENTRADAPROVVALORFRETE",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 300 , function() {
   });
   GXValidFnc[303]={fld:"TEXTBLOCK60", format:0,grid:0};
   GXValidFnc[305]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVVALORSEGURO",gxz:"Z5065EntradaProvValorSeguro",gxold:"O5065EntradaProvValorSeguro",gxvar:"A5065EntradaProvValorSeguro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5065EntradaProvValorSeguro=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5065EntradaProvValorSeguro=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ENTRADAPROVVALORSEGURO",gx.O.A5065EntradaProvValorSeguro,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5065EntradaProvValorSeguro=this.val()},val:function(){return gx.fn.getDecimalValue("ENTRADAPROVVALORSEGURO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 305 , function() {
   });
   GXValidFnc[308]={fld:"TEXTBLOCK61", format:0,grid:0};
   GXValidFnc[310]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVVALOROUTDESPESAS",gxz:"Z5066EntradaProvValorOutDespesas",gxold:"O5066EntradaProvValorOutDespesas",gxvar:"A5066EntradaProvValorOutDespesas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5066EntradaProvValorOutDespesas=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5066EntradaProvValorOutDespesas=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ENTRADAPROVVALOROUTDESPESAS",gx.O.A5066EntradaProvValorOutDespesas,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5066EntradaProvValorOutDespesas=this.val()},val:function(){return gx.fn.getDecimalValue("ENTRADAPROVVALOROUTDESPESAS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 310 , function() {
   });
   GXValidFnc[313]={fld:"TEXTBLOCK62", format:0,grid:0};
   GXValidFnc[315]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVVALORMANUSEIO",gxz:"Z5067EntradaProvValorManuseio",gxold:"O5067EntradaProvValorManuseio",gxvar:"A5067EntradaProvValorManuseio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5067EntradaProvValorManuseio=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5067EntradaProvValorManuseio=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ENTRADAPROVVALORMANUSEIO",gx.O.A5067EntradaProvValorManuseio,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5067EntradaProvValorManuseio=this.val()},val:function(){return gx.fn.getDecimalValue("ENTRADAPROVVALORMANUSEIO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 315 , function() {
   });
   GXValidFnc[318]={fld:"TEXTBLOCK63", format:0,grid:0};
   GXValidFnc[320]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVVALORTOTAL",gxz:"Z5068EntradaProvValorTotal",gxold:"O5068EntradaProvValorTotal",gxvar:"A5068EntradaProvValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5068EntradaProvValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5068EntradaProvValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ENTRADAPROVVALORTOTAL",gx.O.A5068EntradaProvValorTotal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5068EntradaProvValorTotal=this.val()},val:function(){return gx.fn.getDecimalValue("ENTRADAPROVVALORTOTAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 320 , function() {
   });
   GXValidFnc[323]={fld:"TEXTBLOCK64", format:0,grid:0};
   GXValidFnc[325]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVBCICMS",gxz:"Z5069EntradaProvBCICMS",gxold:"O5069EntradaProvBCICMS",gxvar:"A5069EntradaProvBCICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5069EntradaProvBCICMS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5069EntradaProvBCICMS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ENTRADAPROVBCICMS",gx.O.A5069EntradaProvBCICMS,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5069EntradaProvBCICMS=this.val()},val:function(){return gx.fn.getDecimalValue("ENTRADAPROVBCICMS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 325 , function() {
   });
   GXValidFnc[328]={fld:"TEXTBLOCK65", format:0,grid:0};
   GXValidFnc[330]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVREDUCAOBASEICMS",gxz:"Z5070EntradaProvReducaoBaseICMS",gxold:"O5070EntradaProvReducaoBaseICMS",gxvar:"A5070EntradaProvReducaoBaseICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5070EntradaProvReducaoBaseICMS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5070EntradaProvReducaoBaseICMS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ENTRADAPROVREDUCAOBASEICMS",gx.O.A5070EntradaProvReducaoBaseICMS,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5070EntradaProvReducaoBaseICMS=this.val()},val:function(){return gx.fn.getDecimalValue("ENTRADAPROVREDUCAOBASEICMS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 330 , function() {
   });
   GXValidFnc[333]={fld:"TEXTBLOCK66", format:0,grid:0};
   GXValidFnc[335]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVALIQUOTAICMS",gxz:"Z5071EntradaProvAliquotaICMS",gxold:"O5071EntradaProvAliquotaICMS",gxvar:"A5071EntradaProvAliquotaICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5071EntradaProvAliquotaICMS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5071EntradaProvAliquotaICMS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ENTRADAPROVALIQUOTAICMS",gx.O.A5071EntradaProvAliquotaICMS,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5071EntradaProvAliquotaICMS=this.val()},val:function(){return gx.fn.getDecimalValue("ENTRADAPROVALIQUOTAICMS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 335 , function() {
   });
   GXValidFnc[338]={fld:"TEXTBLOCK67", format:0,grid:0};
   GXValidFnc[340]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVVALORDIFERENCAICMS",gxz:"Z5072EntradaProvValorDiferencaICMS",gxold:"O5072EntradaProvValorDiferencaICMS",gxvar:"A5072EntradaProvValorDiferencaICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5072EntradaProvValorDiferencaICMS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5072EntradaProvValorDiferencaICMS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ENTRADAPROVVALORDIFERENCAICMS",gx.O.A5072EntradaProvValorDiferencaICMS,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5072EntradaProvValorDiferencaICMS=this.val()},val:function(){return gx.fn.getDecimalValue("ENTRADAPROVVALORDIFERENCAICMS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 340 , function() {
   });
   GXValidFnc[343]={fld:"TEXTBLOCK68", format:0,grid:0};
   GXValidFnc[345]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVVALORICMS",gxz:"Z5073EntradaProvValorICMS",gxold:"O5073EntradaProvValorICMS",gxvar:"A5073EntradaProvValorICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5073EntradaProvValorICMS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5073EntradaProvValorICMS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ENTRADAPROVVALORICMS",gx.O.A5073EntradaProvValorICMS,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5073EntradaProvValorICMS=this.val()},val:function(){return gx.fn.getDecimalValue("ENTRADAPROVVALORICMS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 345 , function() {
   });
   GXValidFnc[348]={fld:"TEXTBLOCK69", format:0,grid:0};
   GXValidFnc[350]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVVALORBCICMSST",gxz:"Z5074EntradaProvValorBCICMSST",gxold:"O5074EntradaProvValorBCICMSST",gxvar:"A5074EntradaProvValorBCICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5074EntradaProvValorBCICMSST=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5074EntradaProvValorBCICMSST=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ENTRADAPROVVALORBCICMSST",gx.O.A5074EntradaProvValorBCICMSST,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5074EntradaProvValorBCICMSST=this.val()},val:function(){return gx.fn.getDecimalValue("ENTRADAPROVVALORBCICMSST",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 350 , function() {
   });
   GXValidFnc[353]={fld:"TEXTBLOCK70", format:0,grid:0};
   GXValidFnc[355]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVVALORICMSST",gxz:"Z5159EntradaProvValorICMSST",gxold:"O5159EntradaProvValorICMSST",gxvar:"A5159EntradaProvValorICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5159EntradaProvValorICMSST=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5159EntradaProvValorICMSST=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ENTRADAPROVVALORICMSST",gx.O.A5159EntradaProvValorICMSST,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5159EntradaProvValorICMSST=this.val()},val:function(){return gx.fn.getDecimalValue("ENTRADAPROVVALORICMSST",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 355 , function() {
   });
   GXValidFnc[358]={fld:"TEXTBLOCK71", format:0,grid:0};
   GXValidFnc[360]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVVALORIPI",gxz:"Z5076EntradaProvValorIPI",gxold:"O5076EntradaProvValorIPI",gxvar:"A5076EntradaProvValorIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5076EntradaProvValorIPI=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5076EntradaProvValorIPI=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ENTRADAPROVVALORIPI",gx.O.A5076EntradaProvValorIPI,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5076EntradaProvValorIPI=this.val()},val:function(){return gx.fn.getDecimalValue("ENTRADAPROVVALORIPI",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 360 , function() {
   });
   GXValidFnc[363]={fld:"TEXTBLOCK72", format:0,grid:0};
   GXValidFnc[365]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVVALORPIS",gxz:"Z5077EntradaProvValorPIS",gxold:"O5077EntradaProvValorPIS",gxvar:"A5077EntradaProvValorPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5077EntradaProvValorPIS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5077EntradaProvValorPIS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ENTRADAPROVVALORPIS",gx.O.A5077EntradaProvValorPIS,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5077EntradaProvValorPIS=this.val()},val:function(){return gx.fn.getDecimalValue("ENTRADAPROVVALORPIS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 365 , function() {
   });
   GXValidFnc[368]={fld:"TEXTBLOCK73", format:0,grid:0};
   GXValidFnc[370]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVVALORPISST",gxz:"Z5078EntradaProvValorPISST",gxold:"O5078EntradaProvValorPISST",gxvar:"A5078EntradaProvValorPISST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5078EntradaProvValorPISST=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5078EntradaProvValorPISST=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ENTRADAPROVVALORPISST",gx.O.A5078EntradaProvValorPISST,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5078EntradaProvValorPISST=this.val()},val:function(){return gx.fn.getDecimalValue("ENTRADAPROVVALORPISST",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 370 , function() {
   });
   GXValidFnc[373]={fld:"TEXTBLOCK74", format:0,grid:0};
   GXValidFnc[375]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVVALORCOFINS",gxz:"Z5079EntradaProvValorCOFINS",gxold:"O5079EntradaProvValorCOFINS",gxvar:"A5079EntradaProvValorCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5079EntradaProvValorCOFINS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5079EntradaProvValorCOFINS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ENTRADAPROVVALORCOFINS",gx.O.A5079EntradaProvValorCOFINS,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5079EntradaProvValorCOFINS=this.val()},val:function(){return gx.fn.getDecimalValue("ENTRADAPROVVALORCOFINS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 375 , function() {
   });
   GXValidFnc[378]={fld:"TEXTBLOCK75", format:0,grid:0};
   GXValidFnc[380]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVVALORCOFINSST",gxz:"Z5080EntradaProvValorCOFINSST",gxold:"O5080EntradaProvValorCOFINSST",gxvar:"A5080EntradaProvValorCOFINSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5080EntradaProvValorCOFINSST=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5080EntradaProvValorCOFINSST=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ENTRADAPROVVALORCOFINSST",gx.O.A5080EntradaProvValorCOFINSST,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5080EntradaProvValorCOFINSST=this.val()},val:function(){return gx.fn.getDecimalValue("ENTRADAPROVVALORCOFINSST",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 380 , function() {
   });
   GXValidFnc[383]={fld:"TEXTBLOCK76", format:0,grid:0};
   GXValidFnc[385]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVVALORICMSNAODESTAC",gxz:"Z5081EntradaProvValorICMSNaoDestac",gxold:"O5081EntradaProvValorICMSNaoDestac",gxvar:"A5081EntradaProvValorICMSNaoDestac",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5081EntradaProvValorICMSNaoDestac=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5081EntradaProvValorICMSNaoDestac=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ENTRADAPROVVALORICMSNAODESTAC",gx.O.A5081EntradaProvValorICMSNaoDestac,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5081EntradaProvValorICMSNaoDestac=this.val()},val:function(){return gx.fn.getDecimalValue("ENTRADAPROVVALORICMSNAODESTAC",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 385 , function() {
   });
   GXValidFnc[388]={fld:"TEXTBLOCK77", format:0,grid:0};
   GXValidFnc[390]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVVALORBCIMCSTNAODEST",gxz:"Z5250EntradaProvValorBCIMCSTNaoDest",gxold:"O5250EntradaProvValorBCIMCSTNaoDest",gxvar:"A5250EntradaProvValorBCIMCSTNaoDest",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5250EntradaProvValorBCIMCSTNaoDest=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5250EntradaProvValorBCIMCSTNaoDest=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ENTRADAPROVVALORBCIMCSTNAODEST",gx.O.A5250EntradaProvValorBCIMCSTNaoDest,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5250EntradaProvValorBCIMCSTNaoDest=this.val()},val:function(){return gx.fn.getDecimalValue("ENTRADAPROVVALORBCIMCSTNAODEST",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 390 , function() {
   });
   GXValidFnc[394]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVSNEFETIVADA",gxz:"Z5090EntradaProvSNEfetivada",gxold:"O5090EntradaProvSNEfetivada",gxvar:"A5090EntradaProvSNEfetivada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5090EntradaProvSNEfetivada=Value},v2z:function(Value){gx.O.Z5090EntradaProvSNEfetivada=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVSNEFETIVADA",gx.O.A5090EntradaProvSNEfetivada,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5090EntradaProvSNEfetivada=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVSNEFETIVADA")},nac:gx.falseFn};
   this.declareDomainHdlr( 394 , function() {
   });
   GXValidFnc[398]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVSNCONFERIDA",gxz:"Z9246EntradaProvSnConferida",gxold:"O9246EntradaProvSnConferida",gxvar:"A9246EntradaProvSnConferida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9246EntradaProvSnConferida=Value},v2z:function(Value){gx.O.Z9246EntradaProvSnConferida=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVSNCONFERIDA",gx.O.A9246EntradaProvSnConferida,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9246EntradaProvSnConferida=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVSNCONFERIDA")},nac:gx.falseFn};
   this.declareDomainHdlr( 398 , function() {
   });
   GXValidFnc[401]={fld:"TEXTBLOCK78", format:0,grid:0};
   GXValidFnc[403]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVUSUARIOALT",gxz:"Z5084EntradaProvUsuarioAlt",gxold:"O5084EntradaProvUsuarioAlt",gxvar:"A5084EntradaProvUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5084EntradaProvUsuarioAlt=Value},v2z:function(Value){gx.O.Z5084EntradaProvUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVUSUARIOALT",gx.O.A5084EntradaProvUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5084EntradaProvUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 403 , function() {
   });
   GXValidFnc[406]={fld:"TEXTBLOCK79", format:0,grid:0};
   GXValidFnc[408]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVDATAHORAALT",gxz:"Z5085EntradaProvDataHoraAlt",gxold:"O5085EntradaProvDataHoraAlt",gxvar:"A5085EntradaProvDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5085EntradaProvDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5085EntradaProvDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ENTRADAPROVDATAHORAALT",gx.O.A5085EntradaProvDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5085EntradaProvDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ENTRADAPROVDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 408 , function() {
   });
   GXValidFnc[413]={lvl:452,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_452",gxz:"ZnRcdDeleted_452",gxold:"OnRcdDeleted_452",gxvar:"nRcdDeleted_452",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_452=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_452=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_452",row || gx.fn.currentGridRowImpl(412),gx.O.nRcdDeleted_452,0)},c2v:function(){gx.O.nRcdDeleted_452=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_452",row || gx.fn.currentGridRowImpl(412),'.')},nac:gx.falseFn};
   GXValidFnc[414]={lvl:452,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:this.Valid_Entradaprovsequencia,isvalid:null,rgrid:[this.Grid2Container],fld:"ENTRADAPROVSEQUENCIA",gxz:"Z5091EntradaProvSequencia",gxold:"O5091EntradaProvSequencia",gxvar:"A5091EntradaProvSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5091EntradaProvSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5091EntradaProvSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVSEQUENCIA",row || gx.fn.currentGridRowImpl(412),gx.O.A5091EntradaProvSequencia,0)},c2v:function(){gx.O.A5091EntradaProvSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADAPROVSEQUENCIA",row || gx.fn.currentGridRowImpl(412),'.')},nac:gx.falseFn};
   GXValidFnc[415]={lvl:452,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMLOTEFILIALEMPID",gxz:"Z5092EntradaProvItemLoteFilialEmpId",gxold:"O5092EntradaProvItemLoteFilialEmpId",gxvar:"A5092EntradaProvItemLoteFilialEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5092EntradaProvItemLoteFilialEmpId=Value},v2z:function(Value){gx.O.Z5092EntradaProvItemLoteFilialEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMLOTEFILIALEMPID",row || gx.fn.currentGridRowImpl(412),gx.O.A5092EntradaProvItemLoteFilialEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5092EntradaProvItemLoteFilialEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPROVITEMLOTEFILIALEMPID",row || gx.fn.currentGridRowImpl(412))},nac:gx.falseFn};
   GXValidFnc[416]={lvl:452,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMLOTEFILIALID",gxz:"Z5093EntradaProvItemLoteFilialId",gxold:"O5093EntradaProvItemLoteFilialId",gxvar:"A5093EntradaProvItemLoteFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5093EntradaProvItemLoteFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5093EntradaProvItemLoteFilialId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMLOTEFILIALID",row || gx.fn.currentGridRowImpl(412),gx.O.A5093EntradaProvItemLoteFilialId,0)},c2v:function(){gx.O.A5093EntradaProvItemLoteFilialId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADAPROVITEMLOTEFILIALID",row || gx.fn.currentGridRowImpl(412),'.')},nac:gx.falseFn};
   GXValidFnc[417]={lvl:452,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMLOTEPRODEMPID",gxz:"Z5094EntradaProvItemLoteProdEmpId",gxold:"O5094EntradaProvItemLoteProdEmpId",gxvar:"A5094EntradaProvItemLoteProdEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5094EntradaProvItemLoteProdEmpId=Value},v2z:function(Value){gx.O.Z5094EntradaProvItemLoteProdEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMLOTEPRODEMPID",row || gx.fn.currentGridRowImpl(412),gx.O.A5094EntradaProvItemLoteProdEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5094EntradaProvItemLoteProdEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPROVITEMLOTEPRODEMPID",row || gx.fn.currentGridRowImpl(412))},nac:gx.falseFn};
   GXValidFnc[418]={lvl:452,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMLOTEPRODID",gxz:"Z5095EntradaProvItemLoteProdId",gxold:"O5095EntradaProvItemLoteProdId",gxvar:"A5095EntradaProvItemLoteProdId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5095EntradaProvItemLoteProdId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5095EntradaProvItemLoteProdId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMLOTEPRODID",row || gx.fn.currentGridRowImpl(412),gx.O.A5095EntradaProvItemLoteProdId,0)},c2v:function(){gx.O.A5095EntradaProvItemLoteProdId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADAPROVITEMLOTEPRODID",row || gx.fn.currentGridRowImpl(412),'.')},nac:gx.falseFn};
   GXValidFnc[419]={lvl:452,type:"svchar",len:120,dec:0,sign:false,ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMLOTEPRODDESC",gxz:"Z8233EntradaProvItemLoteProdDesc",gxold:"O8233EntradaProvItemLoteProdDesc",gxvar:"A8233EntradaProvItemLoteProdDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8233EntradaProvItemLoteProdDesc=Value},v2z:function(Value){gx.O.Z8233EntradaProvItemLoteProdDesc=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMLOTEPRODDESC",row || gx.fn.currentGridRowImpl(412),gx.O.A8233EntradaProvItemLoteProdDesc,0)},c2v:function(){gx.O.A8233EntradaProvItemLoteProdDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPROVITEMLOTEPRODDESC",row || gx.fn.currentGridRowImpl(412))},nac:gx.falseFn};
   GXValidFnc[420]={lvl:452,type:"char",len:60,dec:0,sign:false,ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMPRODUTOXML",gxz:"Z9312EntradaProvItemProdutoXML",gxold:"O9312EntradaProvItemProdutoXML",gxvar:"A9312EntradaProvItemProdutoXML",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9312EntradaProvItemProdutoXML=Value},v2z:function(Value){gx.O.Z9312EntradaProvItemProdutoXML=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMPRODUTOXML",row || gx.fn.currentGridRowImpl(412),gx.O.A9312EntradaProvItemProdutoXML,0)},c2v:function(){gx.O.A9312EntradaProvItemProdutoXML=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPROVITEMPRODUTOXML",row || gx.fn.currentGridRowImpl(412))},nac:gx.falseFn};
   GXValidFnc[421]={lvl:452,type:"char",len:20,dec:0,sign:false,ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMLOTECOMBINACAO",gxz:"Z5096EntradaProvItemLoteCombinacao",gxold:"O5096EntradaProvItemLoteCombinacao",gxvar:"A5096EntradaProvItemLoteCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5096EntradaProvItemLoteCombinacao=Value},v2z:function(Value){gx.O.Z5096EntradaProvItemLoteCombinacao=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMLOTECOMBINACAO",row || gx.fn.currentGridRowImpl(412),gx.O.A5096EntradaProvItemLoteCombinacao,0)},c2v:function(){gx.O.A5096EntradaProvItemLoteCombinacao=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPROVITEMLOTECOMBINACAO",row || gx.fn.currentGridRowImpl(412))},nac:gx.falseFn};
   GXValidFnc[422]={lvl:452,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMNCMCODIGO",gxz:"Z9234EntradaProvItemNCMCodigo",gxold:"O9234EntradaProvItemNCMCodigo",gxvar:"A9234EntradaProvItemNCMCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9234EntradaProvItemNCMCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9234EntradaProvItemNCMCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMNCMCODIGO",row || gx.fn.currentGridRowImpl(412),gx.O.A9234EntradaProvItemNCMCodigo,0)},c2v:function(){gx.O.A9234EntradaProvItemNCMCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADAPROVITEMNCMCODIGO",row || gx.fn.currentGridRowImpl(412),'.')},nac:gx.falseFn};
   GXValidFnc[423]={lvl:452,type:"date",len:10,dec:0,sign:false,ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMDTVENCIMENTO",gxz:"Z5378EntradaProvItemDtVencimento",gxold:"O5378EntradaProvItemDtVencimento",gxvar:"A5378EntradaProvItemDtVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5378EntradaProvItemDtVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5378EntradaProvItemDtVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMDTVENCIMENTO",row || gx.fn.currentGridRowImpl(412),gx.O.A5378EntradaProvItemDtVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5378EntradaProvItemDtVencimento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ENTRADAPROVITEMDTVENCIMENTO",row || gx.fn.currentGridRowImpl(412))},nac:gx.falseFn};
   GXValidFnc[424]={lvl:452,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMCODIGOBARRAS",gxz:"Z5097EntradaProvItemCodigoBarras",gxold:"O5097EntradaProvItemCodigoBarras",gxvar:"A5097EntradaProvItemCodigoBarras",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5097EntradaProvItemCodigoBarras=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5097EntradaProvItemCodigoBarras=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMCODIGOBARRAS",row || gx.fn.currentGridRowImpl(412),gx.O.A5097EntradaProvItemCodigoBarras,0)},c2v:function(){gx.O.A5097EntradaProvItemCodigoBarras=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADAPROVITEMCODIGOBARRAS",row || gx.fn.currentGridRowImpl(412),'.')},nac:gx.falseFn};
   GXValidFnc[425]={lvl:452,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMQUANTIDADE",gxz:"Z5098EntradaProvItemQuantidade",gxold:"O5098EntradaProvItemQuantidade",gxvar:"A5098EntradaProvItemQuantidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5098EntradaProvItemQuantidade=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5098EntradaProvItemQuantidade=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMQUANTIDADE",row || gx.fn.currentGridRowImpl(412),gx.O.A5098EntradaProvItemQuantidade,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5098EntradaProvItemQuantidade=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMQUANTIDADE",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[426]={lvl:452,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMQTDECONF",gxz:"Z9247EntradaProvItemQtdeConf",gxold:"O9247EntradaProvItemQtdeConf",gxvar:"A9247EntradaProvItemQtdeConf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9247EntradaProvItemQtdeConf=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9247EntradaProvItemQtdeConf=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMQTDECONF",row || gx.fn.currentGridRowImpl(412),gx.O.A9247EntradaProvItemQtdeConf,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9247EntradaProvItemQtdeConf=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMQTDECONF",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[427]={lvl:452,type:"decimal",len:16,dec:6,sign:false,pic:"ZZZ,ZZZ,ZZ9.999999",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMFATORCONVERSAO",gxz:"Z5099EntradaProvItemFatorConversao",gxold:"O5099EntradaProvItemFatorConversao",gxvar:"A5099EntradaProvItemFatorConversao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5099EntradaProvItemFatorConversao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5099EntradaProvItemFatorConversao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMFATORCONVERSAO",row || gx.fn.currentGridRowImpl(412),gx.O.A5099EntradaProvItemFatorConversao,6,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5099EntradaProvItemFatorConversao=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMFATORCONVERSAO",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[428]={lvl:452,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMUNIDADEEMPID",gxz:"Z5100EntradaProvItemUnidadeEmpId",gxold:"O5100EntradaProvItemUnidadeEmpId",gxvar:"A5100EntradaProvItemUnidadeEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5100EntradaProvItemUnidadeEmpId=Value},v2z:function(Value){gx.O.Z5100EntradaProvItemUnidadeEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMUNIDADEEMPID",row || gx.fn.currentGridRowImpl(412),gx.O.A5100EntradaProvItemUnidadeEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5100EntradaProvItemUnidadeEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPROVITEMUNIDADEEMPID",row || gx.fn.currentGridRowImpl(412))},nac:gx.falseFn};
   GXValidFnc[429]={lvl:452,type:"char",len:3,dec:0,sign:false,ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMUNIDADEID",gxz:"Z5101EntradaProvItemUnidadeId",gxold:"O5101EntradaProvItemUnidadeId",gxvar:"A5101EntradaProvItemUnidadeId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5101EntradaProvItemUnidadeId=Value},v2z:function(Value){gx.O.Z5101EntradaProvItemUnidadeId=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMUNIDADEID",row || gx.fn.currentGridRowImpl(412),gx.O.A5101EntradaProvItemUnidadeId,0)},c2v:function(){gx.O.A5101EntradaProvItemUnidadeId=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPROVITEMUNIDADEID",row || gx.fn.currentGridRowImpl(412))},nac:gx.falseFn};
   GXValidFnc[430]={lvl:452,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVSNTOTALNOTA",gxz:"Z5102EntradaProvSnTotalNota",gxold:"O5102EntradaProvSnTotalNota",gxvar:"A5102EntradaProvSnTotalNota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5102EntradaProvSnTotalNota=Value},v2z:function(Value){gx.O.Z5102EntradaProvSnTotalNota=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVSNTOTALNOTA",row || gx.fn.currentGridRowImpl(412),gx.O.A5102EntradaProvSnTotalNota,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5102EntradaProvSnTotalNota=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPROVSNTOTALNOTA",row || gx.fn.currentGridRowImpl(412))},nac:gx.falseFn};
   GXValidFnc[431]={lvl:452,type:"decimal",len:18,dec:6,sign:false,pic:"ZZ,ZZZ,ZZZ,ZZ9.999999",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMVALOR",gxz:"Z5103EntradaProvItemValor",gxold:"O5103EntradaProvItemValor",gxvar:"A5103EntradaProvItemValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5103EntradaProvItemValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5103EntradaProvItemValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMVALOR",row || gx.fn.currentGridRowImpl(412),gx.O.A5103EntradaProvItemValor,6,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5103EntradaProvItemValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMVALOR",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[432]={lvl:452,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMVALORDESCONTO",gxz:"Z5104EntradaProvItemValorDesconto",gxold:"O5104EntradaProvItemValorDesconto",gxvar:"A5104EntradaProvItemValorDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5104EntradaProvItemValorDesconto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5104EntradaProvItemValorDesconto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMVALORDESCONTO",row || gx.fn.currentGridRowImpl(412),gx.O.A5104EntradaProvItemValorDesconto,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5104EntradaProvItemValorDesconto=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMVALORDESCONTO",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[433]={lvl:452,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMVALORFRETE",gxz:"Z5105EntradaProvItemValorFrete",gxold:"O5105EntradaProvItemValorFrete",gxvar:"A5105EntradaProvItemValorFrete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5105EntradaProvItemValorFrete=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5105EntradaProvItemValorFrete=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMVALORFRETE",row || gx.fn.currentGridRowImpl(412),gx.O.A5105EntradaProvItemValorFrete,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5105EntradaProvItemValorFrete=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMVALORFRETE",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[434]={lvl:452,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMVALORSEGURO",gxz:"Z5106EntradaProvItemValorSeguro",gxold:"O5106EntradaProvItemValorSeguro",gxvar:"A5106EntradaProvItemValorSeguro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5106EntradaProvItemValorSeguro=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5106EntradaProvItemValorSeguro=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMVALORSEGURO",row || gx.fn.currentGridRowImpl(412),gx.O.A5106EntradaProvItemValorSeguro,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5106EntradaProvItemValorSeguro=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMVALORSEGURO",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[435]={lvl:452,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMOUTRASDESPESAS",gxz:"Z5107EntradaProvItemOutrasDespesas",gxold:"O5107EntradaProvItemOutrasDespesas",gxvar:"A5107EntradaProvItemOutrasDespesas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5107EntradaProvItemOutrasDespesas=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5107EntradaProvItemOutrasDespesas=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMOUTRASDESPESAS",row || gx.fn.currentGridRowImpl(412),gx.O.A5107EntradaProvItemOutrasDespesas,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5107EntradaProvItemOutrasDespesas=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMOUTRASDESPESAS",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[436]={lvl:452,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMVALORACRESCIMO",gxz:"Z5108EntradaProvItemValorAcrescimo",gxold:"O5108EntradaProvItemValorAcrescimo",gxvar:"A5108EntradaProvItemValorAcrescimo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5108EntradaProvItemValorAcrescimo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5108EntradaProvItemValorAcrescimo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMVALORACRESCIMO",row || gx.fn.currentGridRowImpl(412),gx.O.A5108EntradaProvItemValorAcrescimo,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5108EntradaProvItemValorAcrescimo=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMVALORACRESCIMO",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[437]={lvl:452,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMVALORMANUSEIO",gxz:"Z5109EntradaProvItemValorManuseio",gxold:"O5109EntradaProvItemValorManuseio",gxvar:"A5109EntradaProvItemValorManuseio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5109EntradaProvItemValorManuseio=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5109EntradaProvItemValorManuseio=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMVALORMANUSEIO",row || gx.fn.currentGridRowImpl(412),gx.O.A5109EntradaProvItemValorManuseio,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5109EntradaProvItemValorManuseio=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMVALORMANUSEIO",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[438]={lvl:452,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMCFOPCODIGO",gxz:"Z5110EntradaProvItemCFOPCOdigo",gxold:"O5110EntradaProvItemCFOPCOdigo",gxvar:"A5110EntradaProvItemCFOPCOdigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5110EntradaProvItemCFOPCOdigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5110EntradaProvItemCFOPCOdigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMCFOPCODIGO",row || gx.fn.currentGridRowImpl(412),gx.O.A5110EntradaProvItemCFOPCOdigo,0)},c2v:function(){gx.O.A5110EntradaProvItemCFOPCOdigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADAPROVITEMCFOPCODIGO",row || gx.fn.currentGridRowImpl(412),'.')},nac:gx.falseFn};
   GXValidFnc[439]={lvl:452,type:"char",len:1,dec:0,sign:false,ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMCSTICMSTIPO",gxz:"Z5111EntradaProvItemCSTICMSTipo",gxold:"O5111EntradaProvItemCSTICMSTipo",gxvar:"A5111EntradaProvItemCSTICMSTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5111EntradaProvItemCSTICMSTipo=Value},v2z:function(Value){gx.O.Z5111EntradaProvItemCSTICMSTipo=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMCSTICMSTIPO",row || gx.fn.currentGridRowImpl(412),gx.O.A5111EntradaProvItemCSTICMSTipo,0)},c2v:function(){gx.O.A5111EntradaProvItemCSTICMSTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPROVITEMCSTICMSTIPO",row || gx.fn.currentGridRowImpl(412))},nac:gx.falseFn};
   GXValidFnc[440]={lvl:452,type:"char",len:4,dec:0,sign:false,ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMCSTICMSCODIGO",gxz:"Z5113EntradaProvItemCSTICMSCodigo",gxold:"O5113EntradaProvItemCSTICMSCodigo",gxvar:"A5113EntradaProvItemCSTICMSCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5113EntradaProvItemCSTICMSCodigo=Value},v2z:function(Value){gx.O.Z5113EntradaProvItemCSTICMSCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMCSTICMSCODIGO",row || gx.fn.currentGridRowImpl(412),gx.O.A5113EntradaProvItemCSTICMSCodigo,0)},c2v:function(){gx.O.A5113EntradaProvItemCSTICMSCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPROVITEMCSTICMSCODIGO",row || gx.fn.currentGridRowImpl(412))},nac:gx.falseFn};
   GXValidFnc[441]={lvl:452,type:"char",len:1,dec:0,sign:false,ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMMODALIDADEICMS",gxz:"Z5114EntradaProvItemModalidadeICMS",gxold:"O5114EntradaProvItemModalidadeICMS",gxvar:"A5114EntradaProvItemModalidadeICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5114EntradaProvItemModalidadeICMS=Value},v2z:function(Value){gx.O.Z5114EntradaProvItemModalidadeICMS=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMMODALIDADEICMS",row || gx.fn.currentGridRowImpl(412),gx.O.A5114EntradaProvItemModalidadeICMS,0)},c2v:function(){gx.O.A5114EntradaProvItemModalidadeICMS=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPROVITEMMODALIDADEICMS",row || gx.fn.currentGridRowImpl(412))},nac:gx.falseFn};
   GXValidFnc[442]={lvl:452,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMREDBASEICMS",gxz:"Z5115EntradaProvItemRedBaseICMS",gxold:"O5115EntradaProvItemRedBaseICMS",gxvar:"A5115EntradaProvItemRedBaseICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5115EntradaProvItemRedBaseICMS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5115EntradaProvItemRedBaseICMS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMREDBASEICMS",row || gx.fn.currentGridRowImpl(412),gx.O.A5115EntradaProvItemRedBaseICMS,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5115EntradaProvItemRedBaseICMS=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMREDBASEICMS",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[443]={lvl:452,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMVALORBCICMS",gxz:"Z5116EntradaProvItemValorBCICMS",gxold:"O5116EntradaProvItemValorBCICMS",gxvar:"A5116EntradaProvItemValorBCICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5116EntradaProvItemValorBCICMS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5116EntradaProvItemValorBCICMS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMVALORBCICMS",row || gx.fn.currentGridRowImpl(412),gx.O.A5116EntradaProvItemValorBCICMS,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5116EntradaProvItemValorBCICMS=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMVALORBCICMS",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[444]={lvl:452,type:"decimal",len:18,dec:6,sign:false,pic:"ZZ,ZZZ,ZZZ,ZZ9.999999",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMPRECOPAUTAICMS",gxz:"Z5117EntradaProvItemPrecoPautaICMS",gxold:"O5117EntradaProvItemPrecoPautaICMS",gxvar:"A5117EntradaProvItemPrecoPautaICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5117EntradaProvItemPrecoPautaICMS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5117EntradaProvItemPrecoPautaICMS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMPRECOPAUTAICMS",row || gx.fn.currentGridRowImpl(412),gx.O.A5117EntradaProvItemPrecoPautaICMS,6,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5117EntradaProvItemPrecoPautaICMS=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMPRECOPAUTAICMS",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[445]={lvl:452,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMALIQUOTAICMS",gxz:"Z5118EntradaProvItemAliquotaICMS",gxold:"O5118EntradaProvItemAliquotaICMS",gxvar:"A5118EntradaProvItemAliquotaICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5118EntradaProvItemAliquotaICMS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5118EntradaProvItemAliquotaICMS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMALIQUOTAICMS",row || gx.fn.currentGridRowImpl(412),gx.O.A5118EntradaProvItemAliquotaICMS,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5118EntradaProvItemAliquotaICMS=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMALIQUOTAICMS",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[446]={lvl:452,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMVALORICMS",gxz:"Z5119EntradaProvItemValorICMS",gxold:"O5119EntradaProvItemValorICMS",gxvar:"A5119EntradaProvItemValorICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5119EntradaProvItemValorICMS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5119EntradaProvItemValorICMS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMVALORICMS",row || gx.fn.currentGridRowImpl(412),gx.O.A5119EntradaProvItemValorICMS,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5119EntradaProvItemValorICMS=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMVALORICMS",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[447]={lvl:452,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMPCDIFERENCAICMS",gxz:"Z5120EntradaProvItemPCDiferencaICMS",gxold:"O5120EntradaProvItemPCDiferencaICMS",gxvar:"A5120EntradaProvItemPCDiferencaICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5120EntradaProvItemPCDiferencaICMS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5120EntradaProvItemPCDiferencaICMS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMPCDIFERENCAICMS",row || gx.fn.currentGridRowImpl(412),gx.O.A5120EntradaProvItemPCDiferencaICMS,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5120EntradaProvItemPCDiferencaICMS=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMPCDIFERENCAICMS",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[448]={lvl:452,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMVLRDIFERENCAICM",gxz:"Z5121EntradaProvItemVlrDiferencaICM",gxold:"O5121EntradaProvItemVlrDiferencaICM",gxvar:"A5121EntradaProvItemVlrDiferencaICM",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5121EntradaProvItemVlrDiferencaICM=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5121EntradaProvItemVlrDiferencaICM=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMVLRDIFERENCAICM",row || gx.fn.currentGridRowImpl(412),gx.O.A5121EntradaProvItemVlrDiferencaICM,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5121EntradaProvItemVlrDiferencaICM=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMVLRDIFERENCAICM",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[449]={lvl:452,type:"char",len:1,dec:0,sign:false,ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMMODALIDADEICMSS",gxz:"Z5122EntradaProvItemModalidadeICMSS",gxold:"O5122EntradaProvItemModalidadeICMSS",gxvar:"A5122EntradaProvItemModalidadeICMSS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5122EntradaProvItemModalidadeICMSS=Value},v2z:function(Value){gx.O.Z5122EntradaProvItemModalidadeICMSS=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMMODALIDADEICMSS",row || gx.fn.currentGridRowImpl(412),gx.O.A5122EntradaProvItemModalidadeICMSS,0)},c2v:function(){gx.O.A5122EntradaProvItemModalidadeICMSS=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPROVITEMMODALIDADEICMSS",row || gx.fn.currentGridRowImpl(412))},nac:gx.falseFn};
   GXValidFnc[450]={lvl:452,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMMVAAJUSTADA",gxz:"Z5123EntradaProvItemMVAAjustada",gxold:"O5123EntradaProvItemMVAAjustada",gxvar:"A5123EntradaProvItemMVAAjustada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5123EntradaProvItemMVAAjustada=Value},v2z:function(Value){gx.O.Z5123EntradaProvItemMVAAjustada=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMMVAAJUSTADA",row || gx.fn.currentGridRowImpl(412),gx.O.A5123EntradaProvItemMVAAjustada,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5123EntradaProvItemMVAAjustada=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPROVITEMMVAAJUSTADA",row || gx.fn.currentGridRowImpl(412))},nac:gx.falseFn};
   GXValidFnc[451]={lvl:452,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMVALORBCICMSST",gxz:"Z5124EntradaProvItemValorBCICMSST",gxold:"O5124EntradaProvItemValorBCICMSST",gxvar:"A5124EntradaProvItemValorBCICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5124EntradaProvItemValorBCICMSST=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5124EntradaProvItemValorBCICMSST=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMVALORBCICMSST",row || gx.fn.currentGridRowImpl(412),gx.O.A5124EntradaProvItemValorBCICMSST,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5124EntradaProvItemValorBCICMSST=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMVALORBCICMSST",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[452]={lvl:452,type:"decimal",len:18,dec:6,sign:false,pic:"ZZ,ZZZ,ZZZ,ZZ9.999999",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMPRECOPAUTAICMSS",gxz:"Z5125EntradaProvItemPrecoPautaICMSS",gxold:"O5125EntradaProvItemPrecoPautaICMSS",gxvar:"A5125EntradaProvItemPrecoPautaICMSS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5125EntradaProvItemPrecoPautaICMSS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5125EntradaProvItemPrecoPautaICMSS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMPRECOPAUTAICMSS",row || gx.fn.currentGridRowImpl(412),gx.O.A5125EntradaProvItemPrecoPautaICMSS,6,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5125EntradaProvItemPrecoPautaICMSS=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMPRECOPAUTAICMSS",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[453]={lvl:452,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMPCMVA",gxz:"Z5126EntradaProvItemPCMVA",gxold:"O5126EntradaProvItemPCMVA",gxvar:"A5126EntradaProvItemPCMVA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5126EntradaProvItemPCMVA=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5126EntradaProvItemPCMVA=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMPCMVA",row || gx.fn.currentGridRowImpl(412),gx.O.A5126EntradaProvItemPCMVA,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5126EntradaProvItemPCMVA=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMPCMVA",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[454]={lvl:452,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMREDBASEICMSST",gxz:"Z5127EntradaProvItemRedBaseICMSST",gxold:"O5127EntradaProvItemRedBaseICMSST",gxvar:"A5127EntradaProvItemRedBaseICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5127EntradaProvItemRedBaseICMSST=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5127EntradaProvItemRedBaseICMSST=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMREDBASEICMSST",row || gx.fn.currentGridRowImpl(412),gx.O.A5127EntradaProvItemRedBaseICMSST,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5127EntradaProvItemRedBaseICMSST=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMREDBASEICMSST",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[455]={lvl:452,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMALIQUOTAINTERST",gxz:"Z5129EntradaProvItemAliquotaInterST",gxold:"O5129EntradaProvItemAliquotaInterST",gxvar:"A5129EntradaProvItemAliquotaInterST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5129EntradaProvItemAliquotaInterST=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5129EntradaProvItemAliquotaInterST=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMALIQUOTAINTERST",row || gx.fn.currentGridRowImpl(412),gx.O.A5129EntradaProvItemAliquotaInterST,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5129EntradaProvItemAliquotaInterST=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMALIQUOTAINTERST",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[456]={lvl:452,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMALIQUOTAINTRAST",gxz:"Z5130EntradaProvItemAliquotaIntraST",gxold:"O5130EntradaProvItemAliquotaIntraST",gxvar:"A5130EntradaProvItemAliquotaIntraST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5130EntradaProvItemAliquotaIntraST=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5130EntradaProvItemAliquotaIntraST=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMALIQUOTAINTRAST",row || gx.fn.currentGridRowImpl(412),gx.O.A5130EntradaProvItemAliquotaIntraST,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5130EntradaProvItemAliquotaIntraST=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMALIQUOTAINTRAST",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[457]={lvl:452,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMVALORICMSST",gxz:"Z5131EntradaProvItemValorICMSST",gxold:"O5131EntradaProvItemValorICMSST",gxvar:"A5131EntradaProvItemValorICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5131EntradaProvItemValorICMSST=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5131EntradaProvItemValorICMSST=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMVALORICMSST",row || gx.fn.currentGridRowImpl(412),gx.O.A5131EntradaProvItemValorICMSST,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5131EntradaProvItemValorICMSST=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMVALORICMSST",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[458]={lvl:452,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMICMSNAODEST",gxz:"Z5132EntradaProvItemICMSNaoDest",gxold:"O5132EntradaProvItemICMSNaoDest",gxvar:"A5132EntradaProvItemICMSNaoDest",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5132EntradaProvItemICMSNaoDest=Value},v2z:function(Value){gx.O.Z5132EntradaProvItemICMSNaoDest=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMICMSNAODEST",row || gx.fn.currentGridRowImpl(412),gx.O.A5132EntradaProvItemICMSNaoDest,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5132EntradaProvItemICMSNaoDest=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPROVITEMICMSNAODEST",row || gx.fn.currentGridRowImpl(412))},nac:gx.falseFn};
   GXValidFnc[459]={lvl:452,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAITEMPROVVLRBCICMSNAODES",gxz:"Z5133EntradaItemProvVlrBCICMSNaoDes",gxold:"O5133EntradaItemProvVlrBCICMSNaoDes",gxvar:"A5133EntradaItemProvVlrBCICMSNaoDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5133EntradaItemProvVlrBCICMSNaoDes=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5133EntradaItemProvVlrBCICMSNaoDes=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAITEMPROVVLRBCICMSNAODES",row || gx.fn.currentGridRowImpl(412),gx.O.A5133EntradaItemProvVlrBCICMSNaoDes,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5133EntradaItemProvVlrBCICMSNaoDes=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAITEMPROVVLRBCICMSNAODES",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[460]={lvl:452,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMALIQICMSNAODEST",gxz:"Z5134EntradaProvItemAliqICMSNaoDest",gxold:"O5134EntradaProvItemAliqICMSNaoDest",gxvar:"A5134EntradaProvItemAliqICMSNaoDest",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5134EntradaProvItemAliqICMSNaoDest=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5134EntradaProvItemAliqICMSNaoDest=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMALIQICMSNAODEST",row || gx.fn.currentGridRowImpl(412),gx.O.A5134EntradaProvItemAliqICMSNaoDest,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5134EntradaProvItemAliqICMSNaoDest=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMALIQICMSNAODEST",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[461]={lvl:452,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMVALORICMSNAODES",gxz:"Z5135EntradaProvItemValorICMSNaoDes",gxold:"O5135EntradaProvItemValorICMSNaoDes",gxvar:"A5135EntradaProvItemValorICMSNaoDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5135EntradaProvItemValorICMSNaoDes=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5135EntradaProvItemValorICMSNaoDes=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMVALORICMSNAODES",row || gx.fn.currentGridRowImpl(412),gx.O.A5135EntradaProvItemValorICMSNaoDes,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5135EntradaProvItemValorICMSNaoDes=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMVALORICMSNAODES",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[462]={lvl:452,type:"char",len:5,dec:0,sign:false,ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMCLENQIPI",gxz:"Z5375EntradaProvItemClEnqIPI",gxold:"O5375EntradaProvItemClEnqIPI",gxvar:"A5375EntradaProvItemClEnqIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5375EntradaProvItemClEnqIPI=Value},v2z:function(Value){gx.O.Z5375EntradaProvItemClEnqIPI=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMCLENQIPI",row || gx.fn.currentGridRowImpl(412),gx.O.A5375EntradaProvItemClEnqIPI,0)},c2v:function(){gx.O.A5375EntradaProvItemClEnqIPI=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPROVITEMCLENQIPI",row || gx.fn.currentGridRowImpl(412))},nac:gx.falseFn};
   GXValidFnc[463]={lvl:452,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMCODENQIPI",gxz:"Z5376EntradaProvItemCodEnqIPI",gxold:"O5376EntradaProvItemCodEnqIPI",gxvar:"A5376EntradaProvItemCodEnqIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5376EntradaProvItemCodEnqIPI=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5376EntradaProvItemCodEnqIPI=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMCODENQIPI",row || gx.fn.currentGridRowImpl(412),gx.O.A5376EntradaProvItemCodEnqIPI,0)},c2v:function(){gx.O.A5376EntradaProvItemCodEnqIPI=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADAPROVITEMCODENQIPI",row || gx.fn.currentGridRowImpl(412),'.')},nac:gx.falseFn};
   GXValidFnc[464]={lvl:452,type:"char",len:18,dec:0,sign:false,ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMCNPJPRODUTOR",gxz:"Z5377EntradaProvItemCNPJProdutor",gxold:"O5377EntradaProvItemCNPJProdutor",gxvar:"A5377EntradaProvItemCNPJProdutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5377EntradaProvItemCNPJProdutor=Value},v2z:function(Value){gx.O.Z5377EntradaProvItemCNPJProdutor=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMCNPJPRODUTOR",row || gx.fn.currentGridRowImpl(412),gx.O.A5377EntradaProvItemCNPJProdutor,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5377EntradaProvItemCNPJProdutor=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPROVITEMCNPJPRODUTOR",row || gx.fn.currentGridRowImpl(412))},nac:gx.falseFn};
   GXValidFnc[465]={lvl:452,type:"char",len:1,dec:0,sign:false,ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ITEMENTRADAPROVCSTIPITIPO",gxz:"Z5136ItemEntradaProvCSTIPITipo",gxold:"O5136ItemEntradaProvCSTIPITipo",gxvar:"A5136ItemEntradaProvCSTIPITipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5136ItemEntradaProvCSTIPITipo=Value},v2z:function(Value){gx.O.Z5136ItemEntradaProvCSTIPITipo=Value},v2c:function(row){gx.fn.setGridControlValue("ITEMENTRADAPROVCSTIPITIPO",row || gx.fn.currentGridRowImpl(412),gx.O.A5136ItemEntradaProvCSTIPITipo,0)},c2v:function(){gx.O.A5136ItemEntradaProvCSTIPITipo=this.val()},val:function(row){return gx.fn.getGridControlValue("ITEMENTRADAPROVCSTIPITIPO",row || gx.fn.currentGridRowImpl(412))},nac:gx.falseFn};
   GXValidFnc[466]={lvl:452,type:"char",len:4,dec:0,sign:false,ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ITEMENTRADAPROVCSTIPICODIGO",gxz:"Z5138ItemEntradaProvCSTIPICodigo",gxold:"O5138ItemEntradaProvCSTIPICodigo",gxvar:"A5138ItemEntradaProvCSTIPICodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5138ItemEntradaProvCSTIPICodigo=Value},v2z:function(Value){gx.O.Z5138ItemEntradaProvCSTIPICodigo=Value},v2c:function(row){gx.fn.setGridControlValue("ITEMENTRADAPROVCSTIPICODIGO",row || gx.fn.currentGridRowImpl(412),gx.O.A5138ItemEntradaProvCSTIPICodigo,0)},c2v:function(){gx.O.A5138ItemEntradaProvCSTIPICodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("ITEMENTRADAPROVCSTIPICODIGO",row || gx.fn.currentGridRowImpl(412))},nac:gx.falseFn};
   GXValidFnc[467]={lvl:452,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMVALORBCIPI",gxz:"Z5139EntradaProvItemValorBCIPI",gxold:"O5139EntradaProvItemValorBCIPI",gxvar:"A5139EntradaProvItemValorBCIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5139EntradaProvItemValorBCIPI=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5139EntradaProvItemValorBCIPI=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMVALORBCIPI",row || gx.fn.currentGridRowImpl(412),gx.O.A5139EntradaProvItemValorBCIPI,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5139EntradaProvItemValorBCIPI=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMVALORBCIPI",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[468]={lvl:452,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMALIQUOTAIPI",gxz:"Z5140EntradaProvItemAliquotaIPI",gxold:"O5140EntradaProvItemAliquotaIPI",gxvar:"A5140EntradaProvItemAliquotaIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5140EntradaProvItemAliquotaIPI=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5140EntradaProvItemAliquotaIPI=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMALIQUOTAIPI",row || gx.fn.currentGridRowImpl(412),gx.O.A5140EntradaProvItemAliquotaIPI,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5140EntradaProvItemAliquotaIPI=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMALIQUOTAIPI",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[469]={lvl:452,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMVALORIPI",gxz:"Z5141EntradaProvItemValorIPI",gxold:"O5141EntradaProvItemValorIPI",gxvar:"A5141EntradaProvItemValorIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5141EntradaProvItemValorIPI=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5141EntradaProvItemValorIPI=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMVALORIPI",row || gx.fn.currentGridRowImpl(412),gx.O.A5141EntradaProvItemValorIPI,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5141EntradaProvItemValorIPI=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMVALORIPI",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[470]={lvl:452,type:"decimal",len:16,dec:4,sign:false,pic:"ZZZZZZZZZZ9.9999",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMVLALIQUOTAIPI",gxz:"Z8703EntradaProvItemVlAliquotaIPI",gxold:"O8703EntradaProvItemVlAliquotaIPI",gxvar:"A8703EntradaProvItemVlAliquotaIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8703EntradaProvItemVlAliquotaIPI=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8703EntradaProvItemVlAliquotaIPI=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMVLALIQUOTAIPI",row || gx.fn.currentGridRowImpl(412),gx.O.A8703EntradaProvItemVlAliquotaIPI,4,',')},c2v:function(){gx.O.A8703EntradaProvItemVlAliquotaIPI=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMVLALIQUOTAIPI",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[471]={lvl:452,type:"decimal",len:16,dec:4,sign:false,pic:"ZZZZZZZZZZ9.9999",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMQTDEIPI",gxz:"Z8704EntradaProvItemQtdeIPI",gxold:"O8704EntradaProvItemQtdeIPI",gxvar:"A8704EntradaProvItemQtdeIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8704EntradaProvItemQtdeIPI=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8704EntradaProvItemQtdeIPI=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMQTDEIPI",row || gx.fn.currentGridRowImpl(412),gx.O.A8704EntradaProvItemQtdeIPI,4,',')},c2v:function(){gx.O.A8704EntradaProvItemQtdeIPI=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMQTDEIPI",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[472]={lvl:452,type:"char",len:1,dec:0,sign:false,ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMCSTPISTIPO",gxz:"Z5142EntradaProvItemCSTPISTipo",gxold:"O5142EntradaProvItemCSTPISTipo",gxvar:"A5142EntradaProvItemCSTPISTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5142EntradaProvItemCSTPISTipo=Value},v2z:function(Value){gx.O.Z5142EntradaProvItemCSTPISTipo=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMCSTPISTIPO",row || gx.fn.currentGridRowImpl(412),gx.O.A5142EntradaProvItemCSTPISTipo,0)},c2v:function(){gx.O.A5142EntradaProvItemCSTPISTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPROVITEMCSTPISTIPO",row || gx.fn.currentGridRowImpl(412))},nac:gx.falseFn};
   GXValidFnc[473]={lvl:452,type:"char",len:4,dec:0,sign:false,ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMCSTPISCODIGO",gxz:"Z5144EntradaProvItemCSTPISCodigo",gxold:"O5144EntradaProvItemCSTPISCodigo",gxvar:"A5144EntradaProvItemCSTPISCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5144EntradaProvItemCSTPISCodigo=Value},v2z:function(Value){gx.O.Z5144EntradaProvItemCSTPISCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMCSTPISCODIGO",row || gx.fn.currentGridRowImpl(412),gx.O.A5144EntradaProvItemCSTPISCodigo,0)},c2v:function(){gx.O.A5144EntradaProvItemCSTPISCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPROVITEMCSTPISCODIGO",row || gx.fn.currentGridRowImpl(412))},nac:gx.falseFn};
   GXValidFnc[474]={lvl:452,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMVALORBCPIS",gxz:"Z5145EntradaProvItemValorBCPIS",gxold:"O5145EntradaProvItemValorBCPIS",gxvar:"A5145EntradaProvItemValorBCPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5145EntradaProvItemValorBCPIS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5145EntradaProvItemValorBCPIS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMVALORBCPIS",row || gx.fn.currentGridRowImpl(412),gx.O.A5145EntradaProvItemValorBCPIS,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5145EntradaProvItemValorBCPIS=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMVALORBCPIS",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[475]={lvl:452,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMALIQUOTAPIS",gxz:"Z5146EntradaProvItemAliquotaPIS",gxold:"O5146EntradaProvItemAliquotaPIS",gxvar:"A5146EntradaProvItemAliquotaPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5146EntradaProvItemAliquotaPIS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5146EntradaProvItemAliquotaPIS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMALIQUOTAPIS",row || gx.fn.currentGridRowImpl(412),gx.O.A5146EntradaProvItemAliquotaPIS,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5146EntradaProvItemAliquotaPIS=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMALIQUOTAPIS",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[476]={lvl:452,type:"decimal",len:16,dec:4,sign:false,pic:"ZZZZZZZZZZ9.9999",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMVALORALIQUOTAPI",gxz:"Z5147EntradaProvItemValorAliquotaPI",gxold:"O5147EntradaProvItemValorAliquotaPI",gxvar:"A5147EntradaProvItemValorAliquotaPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5147EntradaProvItemValorAliquotaPI=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5147EntradaProvItemValorAliquotaPI=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMVALORALIQUOTAPI",row || gx.fn.currentGridRowImpl(412),gx.O.A5147EntradaProvItemValorAliquotaPI,4,',')},c2v:function(){gx.O.A5147EntradaProvItemValorAliquotaPI=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMVALORALIQUOTAPI",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[477]={lvl:452,type:"decimal",len:16,dec:4,sign:false,pic:"ZZZZZZZZZZ9.9999",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMQTDEPIS",gxz:"Z5148EntradaProvItemQtdePIS",gxold:"O5148EntradaProvItemQtdePIS",gxvar:"A5148EntradaProvItemQtdePIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5148EntradaProvItemQtdePIS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5148EntradaProvItemQtdePIS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMQTDEPIS",row || gx.fn.currentGridRowImpl(412),gx.O.A5148EntradaProvItemQtdePIS,4,',')},c2v:function(){gx.O.A5148EntradaProvItemQtdePIS=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMQTDEPIS",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[478]={lvl:452,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMVALORPIS",gxz:"Z5149EntradaProvItemValorPIS",gxold:"O5149EntradaProvItemValorPIS",gxvar:"A5149EntradaProvItemValorPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5149EntradaProvItemValorPIS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5149EntradaProvItemValorPIS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMVALORPIS",row || gx.fn.currentGridRowImpl(412),gx.O.A5149EntradaProvItemValorPIS,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5149EntradaProvItemValorPIS=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMVALORPIS",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[479]={lvl:452,type:"char",len:1,dec:0,sign:false,ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMCSTCOFINSTIPO",gxz:"Z5150EntradaProvItemCSTCOFINSTipo",gxold:"O5150EntradaProvItemCSTCOFINSTipo",gxvar:"A5150EntradaProvItemCSTCOFINSTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5150EntradaProvItemCSTCOFINSTipo=Value},v2z:function(Value){gx.O.Z5150EntradaProvItemCSTCOFINSTipo=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMCSTCOFINSTIPO",row || gx.fn.currentGridRowImpl(412),gx.O.A5150EntradaProvItemCSTCOFINSTipo,0)},c2v:function(){gx.O.A5150EntradaProvItemCSTCOFINSTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPROVITEMCSTCOFINSTIPO",row || gx.fn.currentGridRowImpl(412))},nac:gx.falseFn};
   GXValidFnc[480]={lvl:452,type:"char",len:4,dec:0,sign:false,ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMCSTCOFINSCODIGO",gxz:"Z5152EntradaProvItemCSTCOFINSCodigo",gxold:"O5152EntradaProvItemCSTCOFINSCodigo",gxvar:"A5152EntradaProvItemCSTCOFINSCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5152EntradaProvItemCSTCOFINSCodigo=Value},v2z:function(Value){gx.O.Z5152EntradaProvItemCSTCOFINSCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMCSTCOFINSCODIGO",row || gx.fn.currentGridRowImpl(412),gx.O.A5152EntradaProvItemCSTCOFINSCodigo,0)},c2v:function(){gx.O.A5152EntradaProvItemCSTCOFINSCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPROVITEMCSTCOFINSCODIGO",row || gx.fn.currentGridRowImpl(412))},nac:gx.falseFn};
   GXValidFnc[481]={lvl:452,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMVALORBCCOFINS",gxz:"Z5153EntradaProvItemValorBCCOFINS",gxold:"O5153EntradaProvItemValorBCCOFINS",gxvar:"A5153EntradaProvItemValorBCCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5153EntradaProvItemValorBCCOFINS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5153EntradaProvItemValorBCCOFINS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMVALORBCCOFINS",row || gx.fn.currentGridRowImpl(412),gx.O.A5153EntradaProvItemValorBCCOFINS,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5153EntradaProvItemValorBCCOFINS=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMVALORBCCOFINS",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[482]={lvl:452,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMALIQUOTACOFINS",gxz:"Z5154EntradaProvItemAliquotaCOFINS",gxold:"O5154EntradaProvItemAliquotaCOFINS",gxvar:"A5154EntradaProvItemAliquotaCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5154EntradaProvItemAliquotaCOFINS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5154EntradaProvItemAliquotaCOFINS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMALIQUOTACOFINS",row || gx.fn.currentGridRowImpl(412),gx.O.A5154EntradaProvItemAliquotaCOFINS,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5154EntradaProvItemAliquotaCOFINS=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMALIQUOTACOFINS",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[483]={lvl:452,type:"decimal",len:16,dec:4,sign:false,pic:"ZZZZZZZZZZ9.9999",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMVALORALIQCOFINS",gxz:"Z5155EntradaProvItemValorAliqCOFINS",gxold:"O5155EntradaProvItemValorAliqCOFINS",gxvar:"A5155EntradaProvItemValorAliqCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5155EntradaProvItemValorAliqCOFINS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5155EntradaProvItemValorAliqCOFINS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMVALORALIQCOFINS",row || gx.fn.currentGridRowImpl(412),gx.O.A5155EntradaProvItemValorAliqCOFINS,4,',')},c2v:function(){gx.O.A5155EntradaProvItemValorAliqCOFINS=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMVALORALIQCOFINS",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[484]={lvl:452,type:"decimal",len:16,dec:4,sign:false,pic:"ZZZZZZZZZZ9.9999",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMQTDECOFINS",gxz:"Z5156EntradaProvItemQtdeCOFINS",gxold:"O5156EntradaProvItemQtdeCOFINS",gxvar:"A5156EntradaProvItemQtdeCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5156EntradaProvItemQtdeCOFINS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5156EntradaProvItemQtdeCOFINS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMQTDECOFINS",row || gx.fn.currentGridRowImpl(412),gx.O.A5156EntradaProvItemQtdeCOFINS,4,',')},c2v:function(){gx.O.A5156EntradaProvItemQtdeCOFINS=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMQTDECOFINS",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[485]={lvl:452,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMVALORCOFINS",gxz:"Z5157EntradaProvItemValorCOFINS",gxold:"O5157EntradaProvItemValorCOFINS",gxvar:"A5157EntradaProvItemValorCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5157EntradaProvItemValorCOFINS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5157EntradaProvItemValorCOFINS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMVALORCOFINS",row || gx.fn.currentGridRowImpl(412),gx.O.A5157EntradaProvItemValorCOFINS,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5157EntradaProvItemValorCOFINS=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMVALORCOFINS",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[486]={lvl:452,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMVLRBCIMPORTACAO",gxz:"Z5363EntradaProvItemVlrBCImportacao",gxold:"O5363EntradaProvItemVlrBCImportacao",gxvar:"A5363EntradaProvItemVlrBCImportacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5363EntradaProvItemVlrBCImportacao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5363EntradaProvItemVlrBCImportacao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMVLRBCIMPORTACAO",row || gx.fn.currentGridRowImpl(412),gx.O.A5363EntradaProvItemVlrBCImportacao,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5363EntradaProvItemVlrBCImportacao=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMVLRBCIMPORTACAO",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[487]={lvl:452,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMVLRDESPADUANEIR",gxz:"Z5364EntradaProvItemVlrDespAduaneir",gxold:"O5364EntradaProvItemVlrDespAduaneir",gxvar:"A5364EntradaProvItemVlrDespAduaneir",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5364EntradaProvItemVlrDespAduaneir=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5364EntradaProvItemVlrDespAduaneir=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMVLRDESPADUANEIR",row || gx.fn.currentGridRowImpl(412),gx.O.A5364EntradaProvItemVlrDespAduaneir,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5364EntradaProvItemVlrDespAduaneir=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMVLRDESPADUANEIR",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[488]={lvl:452,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMVLRIOF",gxz:"Z5365EntradaProvItemVlrIOF",gxold:"O5365EntradaProvItemVlrIOF",gxvar:"A5365EntradaProvItemVlrIOF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5365EntradaProvItemVlrIOF=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5365EntradaProvItemVlrIOF=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMVLRIOF",row || gx.fn.currentGridRowImpl(412),gx.O.A5365EntradaProvItemVlrIOF,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5365EntradaProvItemVlrIOF=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMVLRIOF",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[489]={lvl:452,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMVLRIMPORTACAO",gxz:"Z5366EntradaProvItemVlrImportacao",gxold:"O5366EntradaProvItemVlrImportacao",gxvar:"A5366EntradaProvItemVlrImportacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5366EntradaProvItemVlrImportacao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5366EntradaProvItemVlrImportacao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMVLRIMPORTACAO",row || gx.fn.currentGridRowImpl(412),gx.O.A5366EntradaProvItemVlrImportacao,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5366EntradaProvItemVlrImportacao=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMVLRIMPORTACAO",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[490]={lvl:452,type:"vchar",len:9000,dec:0,sign:false,ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMOBSERVACAO",gxz:"Z5158EntradaProvItemObservacao",gxold:"O5158EntradaProvItemObservacao",gxvar:"A5158EntradaProvItemObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5158EntradaProvItemObservacao=Value},v2z:function(Value){gx.O.Z5158EntradaProvItemObservacao=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMOBSERVACAO",row || gx.fn.currentGridRowImpl(412),gx.O.A5158EntradaProvItemObservacao,0)},c2v:function(){gx.O.A5158EntradaProvItemObservacao=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPROVITEMOBSERVACAO",row || gx.fn.currentGridRowImpl(412))},nac:gx.falseFn};
   GXValidFnc[491]={lvl:452,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMBCICMSSTRETANT",gxz:"Z8234EntradaProvItemBCICMSSTRetAnt",gxold:"O8234EntradaProvItemBCICMSSTRetAnt",gxvar:"A8234EntradaProvItemBCICMSSTRetAnt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8234EntradaProvItemBCICMSSTRetAnt=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8234EntradaProvItemBCICMSSTRetAnt=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMBCICMSSTRETANT",row || gx.fn.currentGridRowImpl(412),gx.O.A8234EntradaProvItemBCICMSSTRetAnt,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8234EntradaProvItemBCICMSSTRetAnt=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMBCICMSSTRETANT",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[492]={lvl:452,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:412,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMVLICMSSTRETANT",gxz:"Z8235EntradaProvItemVLICMSSTRetAnt",gxold:"O8235EntradaProvItemVLICMSSTRetAnt",gxvar:"A8235EntradaProvItemVLICMSSTRetAnt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8235EntradaProvItemVLICMSSTRetAnt=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8235EntradaProvItemVLICMSSTRetAnt=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMVLICMSSTRETANT",row || gx.fn.currentGridRowImpl(412),gx.O.A8235EntradaProvItemVLICMSSTRetAnt,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8235EntradaProvItemVLICMSSTRetAnt=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMVLICMSSTRETANT",row || gx.fn.currentGridRowImpl(412),'.',',')},nac:gx.falseFn};
   GXValidFnc[494]={lvl:741,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:1,grid:493,gxgrid:this.Grid2Container,fnc:this.Valid_Entradaprovitemgradeseq,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMGRADESEQ",gxz:"Z9912EntradaProvItemGradeSeq",gxold:"O9912EntradaProvItemGradeSeq",gxvar:"A9912EntradaProvItemGradeSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9912EntradaProvItemGradeSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9912EntradaProvItemGradeSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMGRADESEQ",row || gx.fn.currentGridRowImpl(493),gx.O.A9912EntradaProvItemGradeSeq,0)},c2v:function(){gx.O.A9912EntradaProvItemGradeSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADAPROVITEMGRADESEQ",row || gx.fn.currentGridRowImpl(493),'.')},nac:gx.falseFn};
   GXValidFnc[495]={lvl:741,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,isacc:1,grid:493,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMGRADEQUANTIDADE",gxz:"Z9916EntradaProvItemGradeQuantidade",gxold:"O9916EntradaProvItemGradeQuantidade",gxvar:"A9916EntradaProvItemGradeQuantidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9916EntradaProvItemGradeQuantidade=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9916EntradaProvItemGradeQuantidade=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMGRADEQUANTIDADE",row || gx.fn.currentGridRowImpl(493),gx.O.A9916EntradaProvItemGradeQuantidade,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9916EntradaProvItemGradeQuantidade=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMGRADEQUANTIDADE",row || gx.fn.currentGridRowImpl(493),'.',',')},nac:gx.falseFn};
   GXValidFnc[496]={lvl:741,type:"char",len:20,dec:0,sign:false,ro:0,isacc:1,grid:493,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMGRADECOMBINACAO",gxz:"Z9915EntradaProvItemGradeCombinacao",gxold:"O9915EntradaProvItemGradeCombinacao",gxvar:"A9915EntradaProvItemGradeCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9915EntradaProvItemGradeCombinacao=Value},v2z:function(Value){gx.O.Z9915EntradaProvItemGradeCombinacao=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMGRADECOMBINACAO",row || gx.fn.currentGridRowImpl(493),gx.O.A9915EntradaProvItemGradeCombinacao,0)},c2v:function(){gx.O.A9915EntradaProvItemGradeCombinacao=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPROVITEMGRADECOMBINACAO",row || gx.fn.currentGridRowImpl(493))},nac:gx.falseFn};
   GXValidFnc[498]={lvl:829,type:"date",len:10,dec:0,sign:false,ro:0,isacc:1,grid:497,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVPAGTODTVENC",gxz:"Z11300EntradaProvPagtoDtVenc",gxold:"O11300EntradaProvPagtoDtVenc",gxvar:"A11300EntradaProvPagtoDtVenc",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11300EntradaProvPagtoDtVenc=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z11300EntradaProvPagtoDtVenc=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVPAGTODTVENC",row || gx.fn.currentGridRowImpl(497),gx.O.A11300EntradaProvPagtoDtVenc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11300EntradaProvPagtoDtVenc=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ENTRADAPROVPAGTODTVENC",row || gx.fn.currentGridRowImpl(497))},nac:gx.falseFn};
   GXValidFnc[499]={lvl:829,type:"char",len:20,dec:0,sign:false,ro:0,isacc:1,grid:497,gxgrid:this.Grid3Container,fnc:this.Valid_Entradaprovpagtoitem,isvalid:null,rgrid:[],fld:"ENTRADAPROVPAGTOITEM",gxz:"Z11299EntradaProvPagtoItem",gxold:"O11299EntradaProvPagtoItem",gxvar:"A11299EntradaProvPagtoItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11299EntradaProvPagtoItem=Value},v2z:function(Value){gx.O.Z11299EntradaProvPagtoItem=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVPAGTOITEM",row || gx.fn.currentGridRowImpl(497),gx.O.A11299EntradaProvPagtoItem,0)},c2v:function(){gx.O.A11299EntradaProvPagtoItem=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPROVPAGTOITEM",row || gx.fn.currentGridRowImpl(497))},nac:gx.falseFn};
   GXValidFnc[500]={lvl:829,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:497,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVPAGTOVALOR",gxz:"Z11301EntradaProvPagtoValor",gxold:"O11301EntradaProvPagtoValor",gxvar:"A11301EntradaProvPagtoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11301EntradaProvPagtoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11301EntradaProvPagtoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVPAGTOVALOR",row || gx.fn.currentGridRowImpl(497),gx.O.A11301EntradaProvPagtoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11301EntradaProvPagtoValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVPAGTOVALOR",row || gx.fn.currentGridRowImpl(497),'.',',')},nac:gx.falseFn};
   GXValidFnc[501]={fld:"TABLE21",grid:0};
   GXValidFnc[504]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[514]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV20AcessoSistemaSequencia",gxold:"OV20AcessoSistemaSequencia",gxvar:"AV20AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV20AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV20AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[516]={fld:"BTNHELP",grid:0};
   this.A5013EntradaProvEmpresaId = "" ;
   this.Z5013EntradaProvEmpresaId = "" ;
   this.O5013EntradaProvEmpresaId = "" ;
   this.A5014EntradaProvId = 0 ;
   this.Z5014EntradaProvId = 0 ;
   this.O5014EntradaProvId = 0 ;
   this.A5015EntradaProvTipo = "" ;
   this.Z5015EntradaProvTipo = "" ;
   this.O5015EntradaProvTipo = "" ;
   this.A5016EntradaProvNumeroDocumento = 0 ;
   this.Z5016EntradaProvNumeroDocumento = 0 ;
   this.O5016EntradaProvNumeroDocumento = 0 ;
   this.A5017EntradaProvFornecedorEmpId = "" ;
   this.Z5017EntradaProvFornecedorEmpId = "" ;
   this.O5017EntradaProvFornecedorEmpId = "" ;
   this.A5018EntradaProvFornecedorId = 0 ;
   this.Z5018EntradaProvFornecedorId = 0 ;
   this.O5018EntradaProvFornecedorId = 0 ;
   this.A6550EntradaProvFornecedorNome = "" ;
   this.Z6550EntradaProvFornecedorNome = "" ;
   this.O6550EntradaProvFornecedorNome = "" ;
   this.A6551EntradaProvFornecedorFantasia = "" ;
   this.Z6551EntradaProvFornecedorFantasia = "" ;
   this.O6551EntradaProvFornecedorFantasia = "" ;
   this.A5088EntradaProvTipoPessoa = "" ;
   this.Z5088EntradaProvTipoPessoa = "" ;
   this.O5088EntradaProvTipoPessoa = "" ;
   this.A5089EntradaProvCPFCNPJ = "" ;
   this.Z5089EntradaProvCPFCNPJ = "" ;
   this.O5089EntradaProvCPFCNPJ = "" ;
   this.A6552EntradaProvFornecEndereco = "" ;
   this.Z6552EntradaProvFornecEndereco = "" ;
   this.O6552EntradaProvFornecEndereco = "" ;
   this.A6553EntradaProvFornecNumEndereco = 0 ;
   this.Z6553EntradaProvFornecNumEndereco = 0 ;
   this.O6553EntradaProvFornecNumEndereco = 0 ;
   this.A6554EntradaProvFornecComplemento = "" ;
   this.Z6554EntradaProvFornecComplemento = "" ;
   this.O6554EntradaProvFornecComplemento = "" ;
   this.A6555EntradaProvFornecBairro = "" ;
   this.Z6555EntradaProvFornecBairro = "" ;
   this.O6555EntradaProvFornecBairro = "" ;
   this.A6556EntradaProvFornecCidadeId = 0 ;
   this.Z6556EntradaProvFornecCidadeId = 0 ;
   this.O6556EntradaProvFornecCidadeId = 0 ;
   this.A6557EntradaProvFornecCidadeNome = "" ;
   this.Z6557EntradaProvFornecCidadeNome = "" ;
   this.O6557EntradaProvFornecCidadeNome = "" ;
   this.A6558EntradaProvFornecUF = "" ;
   this.Z6558EntradaProvFornecUF = "" ;
   this.O6558EntradaProvFornecUF = "" ;
   this.A6559EntradaProvFornecCEP = "" ;
   this.Z6559EntradaProvFornecCEP = "" ;
   this.O6559EntradaProvFornecCEP = "" ;
   this.A6560EntradaProvFornecPaisId = 0 ;
   this.Z6560EntradaProvFornecPaisId = 0 ;
   this.O6560EntradaProvFornecPaisId = 0 ;
   this.A6561EntradaProvFornecPaisNome = "" ;
   this.Z6561EntradaProvFornecPaisNome = "" ;
   this.O6561EntradaProvFornecPaisNome = "" ;
   this.A6562EntradaProvFornecTelefone = "" ;
   this.Z6562EntradaProvFornecTelefone = "" ;
   this.O6562EntradaProvFornecTelefone = "" ;
   this.A6563EntradaProvFornecIE = "" ;
   this.Z6563EntradaProvFornecIE = "" ;
   this.O6563EntradaProvFornecIE = "" ;
   this.A6564EntradaProvFornecIM = "" ;
   this.Z6564EntradaProvFornecIM = "" ;
   this.O6564EntradaProvFornecIM = "" ;
   this.A5019EntradaProvSerie = "" ;
   this.Z5019EntradaProvSerie = "" ;
   this.O5019EntradaProvSerie = "" ;
   this.A5020EntradaProvSubSerie = "" ;
   this.Z5020EntradaProvSubSerie = "" ;
   this.O5020EntradaProvSubSerie = "" ;
   this.A5021EntradaProvChaveNFE = "" ;
   this.Z5021EntradaProvChaveNFE = "" ;
   this.O5021EntradaProvChaveNFE = "" ;
   this.A5022EntradaProvDataEmissao = gx.date.nullDate() ;
   this.Z5022EntradaProvDataEmissao = gx.date.nullDate() ;
   this.O5022EntradaProvDataEmissao = gx.date.nullDate() ;
   this.A5023EntradaProvDataEntrada = gx.date.nullDate() ;
   this.Z5023EntradaProvDataEntrada = gx.date.nullDate() ;
   this.O5023EntradaProvDataEntrada = gx.date.nullDate() ;
   this.A5024EntradaProvCFOPCodigo = 0 ;
   this.Z5024EntradaProvCFOPCodigo = 0 ;
   this.O5024EntradaProvCFOPCodigo = 0 ;
   this.A5025EntradaProvCSTTipo = "" ;
   this.Z5025EntradaProvCSTTipo = "" ;
   this.O5025EntradaProvCSTTipo = "" ;
   this.A5027EntradaProvCSTCodigo = "" ;
   this.Z5027EntradaProvCSTCodigo = "" ;
   this.O5027EntradaProvCSTCodigo = "" ;
   this.A5030EntradaProvModDocFiscal = 0 ;
   this.Z5030EntradaProvModDocFiscal = 0 ;
   this.O5030EntradaProvModDocFiscal = 0 ;
   this.A5031EntradaProvSitDocFiscal = "" ;
   this.Z5031EntradaProvSitDocFiscal = "" ;
   this.O5031EntradaProvSitDocFiscal = "" ;
   this.A5032EntradaProvEspecie = "" ;
   this.Z5032EntradaProvEspecie = "" ;
   this.O5032EntradaProvEspecie = "" ;
   this.A5033EntradaProvMarca = "" ;
   this.Z5033EntradaProvMarca = "" ;
   this.O5033EntradaProvMarca = "" ;
   this.A5034EntradaProvNumeracao = "" ;
   this.Z5034EntradaProvNumeracao = "" ;
   this.O5034EntradaProvNumeracao = "" ;
   this.A5035EntradaProvObservacao = "" ;
   this.Z5035EntradaProvObservacao = "" ;
   this.O5035EntradaProvObservacao = "" ;
   this.A5036EntradaProvModalidadeFrete = "" ;
   this.Z5036EntradaProvModalidadeFrete = "" ;
   this.O5036EntradaProvModalidadeFrete = "" ;
   this.A5037EntradaProvTipoTransporte = "" ;
   this.Z5037EntradaProvTipoTransporte = "" ;
   this.O5037EntradaProvTipoTransporte = "" ;
   this.A5038EntradaProvTransportadorEmpId = "" ;
   this.Z5038EntradaProvTransportadorEmpId = "" ;
   this.O5038EntradaProvTransportadorEmpId = "" ;
   this.A5039EntradaProvTransportadorId = 0 ;
   this.Z5039EntradaProvTransportadorId = 0 ;
   this.O5039EntradaProvTransportadorId = 0 ;
   this.A5040EntradaProvCodigoAntecipacao = "" ;
   this.Z5040EntradaProvCodigoAntecipacao = "" ;
   this.O5040EntradaProvCodigoAntecipacao = "" ;
   this.A5049EntradaProvClasseEnergiaEletr = "" ;
   this.Z5049EntradaProvClasseEnergiaEletr = "" ;
   this.O5049EntradaProvClasseEnergiaEletr = "" ;
   this.A5050EntradaProvCPFEntrega = "" ;
   this.Z5050EntradaProvCPFEntrega = "" ;
   this.O5050EntradaProvCPFEntrega = "" ;
   this.A5051EntradaProvCNPJEntrega = "" ;
   this.Z5051EntradaProvCNPJEntrega = "" ;
   this.O5051EntradaProvCNPJEntrega = "" ;
   this.A5052EntradaProvEnderecoRetirada = "" ;
   this.Z5052EntradaProvEnderecoRetirada = "" ;
   this.O5052EntradaProvEnderecoRetirada = "" ;
   this.A5053EntradaProvNumeroEndRetirada = 0 ;
   this.Z5053EntradaProvNumeroEndRetirada = 0 ;
   this.O5053EntradaProvNumeroEndRetirada = 0 ;
   this.A5054EntradaProvComplEndRetirada = "" ;
   this.Z5054EntradaProvComplEndRetirada = "" ;
   this.O5054EntradaProvComplEndRetirada = "" ;
   this.A5055EntradaProvBairroEndRetirada = "" ;
   this.Z5055EntradaProvBairroEndRetirada = "" ;
   this.O5055EntradaProvBairroEndRetirada = "" ;
   this.A5056EntradaProvCEPEndRetirada = "" ;
   this.Z5056EntradaProvCEPEndRetirada = "" ;
   this.O5056EntradaProvCEPEndRetirada = "" ;
   this.A5057EntradaProvCidadeEntRetirada = 0 ;
   this.Z5057EntradaProvCidadeEntRetirada = 0 ;
   this.O5057EntradaProvCidadeEntRetirada = 0 ;
   this.A5058EntradaProvTipoCTE = 0 ;
   this.Z5058EntradaProvTipoCTE = 0 ;
   this.O5058EntradaProvTipoCTE = 0 ;
   this.A5059EntradaProvChaveCTEREF = "" ;
   this.Z5059EntradaProvChaveCTEREF = "" ;
   this.O5059EntradaProvChaveCTEREF = "" ;
   this.A5060EntradaProvValorProdutos = 0 ;
   this.Z5060EntradaProvValorProdutos = 0 ;
   this.O5060EntradaProvValorProdutos = 0 ;
   this.A5061EntradaProvValorAcrescimo = 0 ;
   this.Z5061EntradaProvValorAcrescimo = 0 ;
   this.O5061EntradaProvValorAcrescimo = 0 ;
   this.A5062EntradaProvValorDesconto = 0 ;
   this.Z5062EntradaProvValorDesconto = 0 ;
   this.O5062EntradaProvValorDesconto = 0 ;
   this.A5063EntradaProvDescontoFinanceiro = 0 ;
   this.Z5063EntradaProvDescontoFinanceiro = 0 ;
   this.O5063EntradaProvDescontoFinanceiro = 0 ;
   this.A5064EntradaProvValorFrete = 0 ;
   this.Z5064EntradaProvValorFrete = 0 ;
   this.O5064EntradaProvValorFrete = 0 ;
   this.A5065EntradaProvValorSeguro = 0 ;
   this.Z5065EntradaProvValorSeguro = 0 ;
   this.O5065EntradaProvValorSeguro = 0 ;
   this.A5066EntradaProvValorOutDespesas = 0 ;
   this.Z5066EntradaProvValorOutDespesas = 0 ;
   this.O5066EntradaProvValorOutDespesas = 0 ;
   this.A5067EntradaProvValorManuseio = 0 ;
   this.Z5067EntradaProvValorManuseio = 0 ;
   this.O5067EntradaProvValorManuseio = 0 ;
   this.A5068EntradaProvValorTotal = 0 ;
   this.Z5068EntradaProvValorTotal = 0 ;
   this.O5068EntradaProvValorTotal = 0 ;
   this.A5069EntradaProvBCICMS = 0 ;
   this.Z5069EntradaProvBCICMS = 0 ;
   this.O5069EntradaProvBCICMS = 0 ;
   this.A5070EntradaProvReducaoBaseICMS = 0 ;
   this.Z5070EntradaProvReducaoBaseICMS = 0 ;
   this.O5070EntradaProvReducaoBaseICMS = 0 ;
   this.A5071EntradaProvAliquotaICMS = 0 ;
   this.Z5071EntradaProvAliquotaICMS = 0 ;
   this.O5071EntradaProvAliquotaICMS = 0 ;
   this.A5072EntradaProvValorDiferencaICMS = 0 ;
   this.Z5072EntradaProvValorDiferencaICMS = 0 ;
   this.O5072EntradaProvValorDiferencaICMS = 0 ;
   this.A5073EntradaProvValorICMS = 0 ;
   this.Z5073EntradaProvValorICMS = 0 ;
   this.O5073EntradaProvValorICMS = 0 ;
   this.A5074EntradaProvValorBCICMSST = 0 ;
   this.Z5074EntradaProvValorBCICMSST = 0 ;
   this.O5074EntradaProvValorBCICMSST = 0 ;
   this.A5159EntradaProvValorICMSST = 0 ;
   this.Z5159EntradaProvValorICMSST = 0 ;
   this.O5159EntradaProvValorICMSST = 0 ;
   this.A5076EntradaProvValorIPI = 0 ;
   this.Z5076EntradaProvValorIPI = 0 ;
   this.O5076EntradaProvValorIPI = 0 ;
   this.A5077EntradaProvValorPIS = 0 ;
   this.Z5077EntradaProvValorPIS = 0 ;
   this.O5077EntradaProvValorPIS = 0 ;
   this.A5078EntradaProvValorPISST = 0 ;
   this.Z5078EntradaProvValorPISST = 0 ;
   this.O5078EntradaProvValorPISST = 0 ;
   this.A5079EntradaProvValorCOFINS = 0 ;
   this.Z5079EntradaProvValorCOFINS = 0 ;
   this.O5079EntradaProvValorCOFINS = 0 ;
   this.A5080EntradaProvValorCOFINSST = 0 ;
   this.Z5080EntradaProvValorCOFINSST = 0 ;
   this.O5080EntradaProvValorCOFINSST = 0 ;
   this.A5081EntradaProvValorICMSNaoDestac = 0 ;
   this.Z5081EntradaProvValorICMSNaoDestac = 0 ;
   this.O5081EntradaProvValorICMSNaoDestac = 0 ;
   this.A5250EntradaProvValorBCIMCSTNaoDest = 0 ;
   this.Z5250EntradaProvValorBCIMCSTNaoDest = 0 ;
   this.O5250EntradaProvValorBCIMCSTNaoDest = 0 ;
   this.A5090EntradaProvSNEfetivada = "" ;
   this.Z5090EntradaProvSNEfetivada = "" ;
   this.O5090EntradaProvSNEfetivada = "" ;
   this.A9246EntradaProvSnConferida = "" ;
   this.Z9246EntradaProvSnConferida = "" ;
   this.O9246EntradaProvSnConferida = "" ;
   this.A5084EntradaProvUsuarioAlt = "" ;
   this.Z5084EntradaProvUsuarioAlt = "" ;
   this.O5084EntradaProvUsuarioAlt = "" ;
   this.A5085EntradaProvDataHoraAlt = gx.date.nullDate() ;
   this.Z5085EntradaProvDataHoraAlt = gx.date.nullDate() ;
   this.O5085EntradaProvDataHoraAlt = gx.date.nullDate() ;
   this.ZnRcdDeleted_452 = 0 ;
   this.OnRcdDeleted_452 = 0 ;
   this.Z5091EntradaProvSequencia = 0 ;
   this.O5091EntradaProvSequencia = 0 ;
   this.Z5092EntradaProvItemLoteFilialEmpId = "" ;
   this.O5092EntradaProvItemLoteFilialEmpId = "" ;
   this.Z5093EntradaProvItemLoteFilialId = 0 ;
   this.O5093EntradaProvItemLoteFilialId = 0 ;
   this.Z5094EntradaProvItemLoteProdEmpId = "" ;
   this.O5094EntradaProvItemLoteProdEmpId = "" ;
   this.Z5095EntradaProvItemLoteProdId = 0 ;
   this.O5095EntradaProvItemLoteProdId = 0 ;
   this.Z8233EntradaProvItemLoteProdDesc = "" ;
   this.O8233EntradaProvItemLoteProdDesc = "" ;
   this.Z9312EntradaProvItemProdutoXML = "" ;
   this.O9312EntradaProvItemProdutoXML = "" ;
   this.Z5096EntradaProvItemLoteCombinacao = "" ;
   this.O5096EntradaProvItemLoteCombinacao = "" ;
   this.Z9234EntradaProvItemNCMCodigo = 0 ;
   this.O9234EntradaProvItemNCMCodigo = 0 ;
   this.Z5378EntradaProvItemDtVencimento = gx.date.nullDate() ;
   this.O5378EntradaProvItemDtVencimento = gx.date.nullDate() ;
   this.Z5097EntradaProvItemCodigoBarras = 0 ;
   this.O5097EntradaProvItemCodigoBarras = 0 ;
   this.Z5098EntradaProvItemQuantidade = 0 ;
   this.O5098EntradaProvItemQuantidade = 0 ;
   this.Z9247EntradaProvItemQtdeConf = 0 ;
   this.O9247EntradaProvItemQtdeConf = 0 ;
   this.Z5099EntradaProvItemFatorConversao = 0 ;
   this.O5099EntradaProvItemFatorConversao = 0 ;
   this.Z5100EntradaProvItemUnidadeEmpId = "" ;
   this.O5100EntradaProvItemUnidadeEmpId = "" ;
   this.Z5101EntradaProvItemUnidadeId = "" ;
   this.O5101EntradaProvItemUnidadeId = "" ;
   this.Z5102EntradaProvSnTotalNota = "" ;
   this.O5102EntradaProvSnTotalNota = "" ;
   this.Z5103EntradaProvItemValor = 0 ;
   this.O5103EntradaProvItemValor = 0 ;
   this.Z5104EntradaProvItemValorDesconto = 0 ;
   this.O5104EntradaProvItemValorDesconto = 0 ;
   this.Z5105EntradaProvItemValorFrete = 0 ;
   this.O5105EntradaProvItemValorFrete = 0 ;
   this.Z5106EntradaProvItemValorSeguro = 0 ;
   this.O5106EntradaProvItemValorSeguro = 0 ;
   this.Z5107EntradaProvItemOutrasDespesas = 0 ;
   this.O5107EntradaProvItemOutrasDespesas = 0 ;
   this.Z5108EntradaProvItemValorAcrescimo = 0 ;
   this.O5108EntradaProvItemValorAcrescimo = 0 ;
   this.Z5109EntradaProvItemValorManuseio = 0 ;
   this.O5109EntradaProvItemValorManuseio = 0 ;
   this.Z5110EntradaProvItemCFOPCOdigo = 0 ;
   this.O5110EntradaProvItemCFOPCOdigo = 0 ;
   this.Z5111EntradaProvItemCSTICMSTipo = "" ;
   this.O5111EntradaProvItemCSTICMSTipo = "" ;
   this.Z5113EntradaProvItemCSTICMSCodigo = "" ;
   this.O5113EntradaProvItemCSTICMSCodigo = "" ;
   this.Z5114EntradaProvItemModalidadeICMS = "" ;
   this.O5114EntradaProvItemModalidadeICMS = "" ;
   this.Z5115EntradaProvItemRedBaseICMS = 0 ;
   this.O5115EntradaProvItemRedBaseICMS = 0 ;
   this.Z5116EntradaProvItemValorBCICMS = 0 ;
   this.O5116EntradaProvItemValorBCICMS = 0 ;
   this.Z5117EntradaProvItemPrecoPautaICMS = 0 ;
   this.O5117EntradaProvItemPrecoPautaICMS = 0 ;
   this.Z5118EntradaProvItemAliquotaICMS = 0 ;
   this.O5118EntradaProvItemAliquotaICMS = 0 ;
   this.Z5119EntradaProvItemValorICMS = 0 ;
   this.O5119EntradaProvItemValorICMS = 0 ;
   this.Z5120EntradaProvItemPCDiferencaICMS = 0 ;
   this.O5120EntradaProvItemPCDiferencaICMS = 0 ;
   this.Z5121EntradaProvItemVlrDiferencaICM = 0 ;
   this.O5121EntradaProvItemVlrDiferencaICM = 0 ;
   this.Z5122EntradaProvItemModalidadeICMSS = "" ;
   this.O5122EntradaProvItemModalidadeICMSS = "" ;
   this.Z5123EntradaProvItemMVAAjustada = "" ;
   this.O5123EntradaProvItemMVAAjustada = "" ;
   this.Z5124EntradaProvItemValorBCICMSST = 0 ;
   this.O5124EntradaProvItemValorBCICMSST = 0 ;
   this.Z5125EntradaProvItemPrecoPautaICMSS = 0 ;
   this.O5125EntradaProvItemPrecoPautaICMSS = 0 ;
   this.Z5126EntradaProvItemPCMVA = 0 ;
   this.O5126EntradaProvItemPCMVA = 0 ;
   this.Z5127EntradaProvItemRedBaseICMSST = 0 ;
   this.O5127EntradaProvItemRedBaseICMSST = 0 ;
   this.Z5129EntradaProvItemAliquotaInterST = 0 ;
   this.O5129EntradaProvItemAliquotaInterST = 0 ;
   this.Z5130EntradaProvItemAliquotaIntraST = 0 ;
   this.O5130EntradaProvItemAliquotaIntraST = 0 ;
   this.Z5131EntradaProvItemValorICMSST = 0 ;
   this.O5131EntradaProvItemValorICMSST = 0 ;
   this.Z5132EntradaProvItemICMSNaoDest = "" ;
   this.O5132EntradaProvItemICMSNaoDest = "" ;
   this.Z5133EntradaItemProvVlrBCICMSNaoDes = 0 ;
   this.O5133EntradaItemProvVlrBCICMSNaoDes = 0 ;
   this.Z5134EntradaProvItemAliqICMSNaoDest = 0 ;
   this.O5134EntradaProvItemAliqICMSNaoDest = 0 ;
   this.Z5135EntradaProvItemValorICMSNaoDes = 0 ;
   this.O5135EntradaProvItemValorICMSNaoDes = 0 ;
   this.Z5375EntradaProvItemClEnqIPI = "" ;
   this.O5375EntradaProvItemClEnqIPI = "" ;
   this.Z5376EntradaProvItemCodEnqIPI = 0 ;
   this.O5376EntradaProvItemCodEnqIPI = 0 ;
   this.Z5377EntradaProvItemCNPJProdutor = "" ;
   this.O5377EntradaProvItemCNPJProdutor = "" ;
   this.Z5136ItemEntradaProvCSTIPITipo = "" ;
   this.O5136ItemEntradaProvCSTIPITipo = "" ;
   this.Z5138ItemEntradaProvCSTIPICodigo = "" ;
   this.O5138ItemEntradaProvCSTIPICodigo = "" ;
   this.Z5139EntradaProvItemValorBCIPI = 0 ;
   this.O5139EntradaProvItemValorBCIPI = 0 ;
   this.Z5140EntradaProvItemAliquotaIPI = 0 ;
   this.O5140EntradaProvItemAliquotaIPI = 0 ;
   this.Z5141EntradaProvItemValorIPI = 0 ;
   this.O5141EntradaProvItemValorIPI = 0 ;
   this.Z8703EntradaProvItemVlAliquotaIPI = 0 ;
   this.O8703EntradaProvItemVlAliquotaIPI = 0 ;
   this.Z8704EntradaProvItemQtdeIPI = 0 ;
   this.O8704EntradaProvItemQtdeIPI = 0 ;
   this.Z5142EntradaProvItemCSTPISTipo = "" ;
   this.O5142EntradaProvItemCSTPISTipo = "" ;
   this.Z5144EntradaProvItemCSTPISCodigo = "" ;
   this.O5144EntradaProvItemCSTPISCodigo = "" ;
   this.Z5145EntradaProvItemValorBCPIS = 0 ;
   this.O5145EntradaProvItemValorBCPIS = 0 ;
   this.Z5146EntradaProvItemAliquotaPIS = 0 ;
   this.O5146EntradaProvItemAliquotaPIS = 0 ;
   this.Z5147EntradaProvItemValorAliquotaPI = 0 ;
   this.O5147EntradaProvItemValorAliquotaPI = 0 ;
   this.Z5148EntradaProvItemQtdePIS = 0 ;
   this.O5148EntradaProvItemQtdePIS = 0 ;
   this.Z5149EntradaProvItemValorPIS = 0 ;
   this.O5149EntradaProvItemValorPIS = 0 ;
   this.Z5150EntradaProvItemCSTCOFINSTipo = "" ;
   this.O5150EntradaProvItemCSTCOFINSTipo = "" ;
   this.Z5152EntradaProvItemCSTCOFINSCodigo = "" ;
   this.O5152EntradaProvItemCSTCOFINSCodigo = "" ;
   this.Z5153EntradaProvItemValorBCCOFINS = 0 ;
   this.O5153EntradaProvItemValorBCCOFINS = 0 ;
   this.Z5154EntradaProvItemAliquotaCOFINS = 0 ;
   this.O5154EntradaProvItemAliquotaCOFINS = 0 ;
   this.Z5155EntradaProvItemValorAliqCOFINS = 0 ;
   this.O5155EntradaProvItemValorAliqCOFINS = 0 ;
   this.Z5156EntradaProvItemQtdeCOFINS = 0 ;
   this.O5156EntradaProvItemQtdeCOFINS = 0 ;
   this.Z5157EntradaProvItemValorCOFINS = 0 ;
   this.O5157EntradaProvItemValorCOFINS = 0 ;
   this.Z5363EntradaProvItemVlrBCImportacao = 0 ;
   this.O5363EntradaProvItemVlrBCImportacao = 0 ;
   this.Z5364EntradaProvItemVlrDespAduaneir = 0 ;
   this.O5364EntradaProvItemVlrDespAduaneir = 0 ;
   this.Z5365EntradaProvItemVlrIOF = 0 ;
   this.O5365EntradaProvItemVlrIOF = 0 ;
   this.Z5366EntradaProvItemVlrImportacao = 0 ;
   this.O5366EntradaProvItemVlrImportacao = 0 ;
   this.Z5158EntradaProvItemObservacao = "" ;
   this.O5158EntradaProvItemObservacao = "" ;
   this.Z8234EntradaProvItemBCICMSSTRetAnt = 0 ;
   this.O8234EntradaProvItemBCICMSSTRetAnt = 0 ;
   this.Z8235EntradaProvItemVLICMSSTRetAnt = 0 ;
   this.O8235EntradaProvItemVLICMSSTRetAnt = 0 ;
   this.Z9912EntradaProvItemGradeSeq = 0 ;
   this.O9912EntradaProvItemGradeSeq = 0 ;
   this.Z9916EntradaProvItemGradeQuantidade = 0 ;
   this.O9916EntradaProvItemGradeQuantidade = 0 ;
   this.Z9915EntradaProvItemGradeCombinacao = "" ;
   this.O9915EntradaProvItemGradeCombinacao = "" ;
   this.Z11300EntradaProvPagtoDtVenc = gx.date.nullDate() ;
   this.O11300EntradaProvPagtoDtVenc = gx.date.nullDate() ;
   this.Z11299EntradaProvPagtoItem = "" ;
   this.O11299EntradaProvPagtoItem = "" ;
   this.Z11301EntradaProvPagtoValor = 0 ;
   this.O11301EntradaProvPagtoValor = 0 ;
   this.AV20AcessoSistemaSequencia = 0 ;
   this.ZV20AcessoSistemaSequencia = 0 ;
   this.OV20AcessoSistemaSequencia = 0 ;
   this.A11299EntradaProvPagtoItem = "" ;
   this.A11300EntradaProvPagtoDtVenc = gx.date.nullDate() ;
   this.A11301EntradaProvPagtoValor = 0 ;
   this.A9912EntradaProvItemGradeSeq = 0 ;
   this.A9915EntradaProvItemGradeCombinacao = "" ;
   this.A9916EntradaProvItemGradeQuantidade = 0 ;
   this.A5091EntradaProvSequencia = 0 ;
   this.A5092EntradaProvItemLoteFilialEmpId = "" ;
   this.A5093EntradaProvItemLoteFilialId = 0 ;
   this.A5094EntradaProvItemLoteProdEmpId = "" ;
   this.A5095EntradaProvItemLoteProdId = 0 ;
   this.A8233EntradaProvItemLoteProdDesc = "" ;
   this.A9312EntradaProvItemProdutoXML = "" ;
   this.A5096EntradaProvItemLoteCombinacao = "" ;
   this.A9234EntradaProvItemNCMCodigo = 0 ;
   this.A11748EntradaProvItemCESTCodigo = 0 ;
   this.A5378EntradaProvItemDtVencimento = gx.date.nullDate() ;
   this.A10929EntradaProvItemDtFabricacao = gx.date.nullDate() ;
   this.A5097EntradaProvItemCodigoBarras = 0 ;
   this.A5098EntradaProvItemQuantidade = 0 ;
   this.A9247EntradaProvItemQtdeConf = 0 ;
   this.A5099EntradaProvItemFatorConversao = 0 ;
   this.A5100EntradaProvItemUnidadeEmpId = "" ;
   this.A5101EntradaProvItemUnidadeId = "" ;
   this.A5102EntradaProvSnTotalNota = "" ;
   this.A5103EntradaProvItemValor = 0 ;
   this.A5104EntradaProvItemValorDesconto = 0 ;
   this.A5105EntradaProvItemValorFrete = 0 ;
   this.A5106EntradaProvItemValorSeguro = 0 ;
   this.A5107EntradaProvItemOutrasDespesas = 0 ;
   this.A5108EntradaProvItemValorAcrescimo = 0 ;
   this.A5109EntradaProvItemValorManuseio = 0 ;
   this.A5110EntradaProvItemCFOPCOdigo = 0 ;
   this.A5111EntradaProvItemCSTICMSTipo = "" ;
   this.A5113EntradaProvItemCSTICMSCodigo = "" ;
   this.A5114EntradaProvItemModalidadeICMS = "" ;
   this.A5115EntradaProvItemRedBaseICMS = 0 ;
   this.A5116EntradaProvItemValorBCICMS = 0 ;
   this.A5117EntradaProvItemPrecoPautaICMS = 0 ;
   this.A5118EntradaProvItemAliquotaICMS = 0 ;
   this.A5119EntradaProvItemValorICMS = 0 ;
   this.A5120EntradaProvItemPCDiferencaICMS = 0 ;
   this.A5121EntradaProvItemVlrDiferencaICM = 0 ;
   this.A5122EntradaProvItemModalidadeICMSS = "" ;
   this.A5123EntradaProvItemMVAAjustada = "" ;
   this.A5124EntradaProvItemValorBCICMSST = 0 ;
   this.A5125EntradaProvItemPrecoPautaICMSS = 0 ;
   this.A5126EntradaProvItemPCMVA = 0 ;
   this.A5127EntradaProvItemRedBaseICMSST = 0 ;
   this.A5129EntradaProvItemAliquotaInterST = 0 ;
   this.A5130EntradaProvItemAliquotaIntraST = 0 ;
   this.A5131EntradaProvItemValorICMSST = 0 ;
   this.A5132EntradaProvItemICMSNaoDest = "" ;
   this.A5133EntradaItemProvVlrBCICMSNaoDes = 0 ;
   this.A5134EntradaProvItemAliqICMSNaoDest = 0 ;
   this.A5135EntradaProvItemValorICMSNaoDes = 0 ;
   this.A5375EntradaProvItemClEnqIPI = "" ;
   this.A5376EntradaProvItemCodEnqIPI = 0 ;
   this.A5377EntradaProvItemCNPJProdutor = "" ;
   this.A5136ItemEntradaProvCSTIPITipo = "" ;
   this.A5138ItemEntradaProvCSTIPICodigo = "" ;
   this.A5139EntradaProvItemValorBCIPI = 0 ;
   this.A5140EntradaProvItemAliquotaIPI = 0 ;
   this.A5141EntradaProvItemValorIPI = 0 ;
   this.A8703EntradaProvItemVlAliquotaIPI = 0 ;
   this.A8704EntradaProvItemQtdeIPI = 0 ;
   this.A5142EntradaProvItemCSTPISTipo = "" ;
   this.A5144EntradaProvItemCSTPISCodigo = "" ;
   this.A5145EntradaProvItemValorBCPIS = 0 ;
   this.A5146EntradaProvItemAliquotaPIS = 0 ;
   this.A5147EntradaProvItemValorAliquotaPI = 0 ;
   this.A5148EntradaProvItemQtdePIS = 0 ;
   this.A5149EntradaProvItemValorPIS = 0 ;
   this.A5150EntradaProvItemCSTCOFINSTipo = "" ;
   this.A5152EntradaProvItemCSTCOFINSCodigo = "" ;
   this.A5153EntradaProvItemValorBCCOFINS = 0 ;
   this.A5154EntradaProvItemAliquotaCOFINS = 0 ;
   this.A5155EntradaProvItemValorAliqCOFINS = 0 ;
   this.A5156EntradaProvItemQtdeCOFINS = 0 ;
   this.A5157EntradaProvItemValorCOFINS = 0 ;
   this.A5363EntradaProvItemVlrBCImportacao = 0 ;
   this.A5364EntradaProvItemVlrDespAduaneir = 0 ;
   this.A5365EntradaProvItemVlrIOF = 0 ;
   this.A5366EntradaProvItemVlrImportacao = 0 ;
   this.A5158EntradaProvItemObservacao = "" ;
   this.A8234EntradaProvItemBCICMSSTRetAnt = 0 ;
   this.A8235EntradaProvItemVLICMSSTRetAnt = 0 ;
   this.A10528EntradaProvItemValorICMSDesone = 0 ;
   this.A10589EntradaProvItemValorBCFCP = 0 ;
   this.A10586EntradaProvItemAliquotaFCP = 0 ;
   this.A10592EntradaProvItemValorFCP = 0 ;
   this.A10590EntradaProvItemValorBCFCPST = 0 ;
   this.A10587EntradaProvItemAliquotaFCPST = 0 ;
   this.A10593EntradaProvItemValorFCPST = 0 ;
   this.A10591EntradaProvItemValorBCFCPSTRet = 0 ;
   this.A10588EntradaProvItemAliquotaFCPSTRe = 0 ;
   this.A10594EntradaProvItemValorFCPSTRet = 0 ;
   this.A11790EntradaProvItemTipoCalculo = "" ;
   this.AV8Logon = {} ;
   this.A5013EntradaProvEmpresaId = "" ;
   this.A5014EntradaProvId = 0 ;
   this.A5015EntradaProvTipo = "" ;
   this.A5016EntradaProvNumeroDocumento = 0 ;
   this.A5017EntradaProvFornecedorEmpId = "" ;
   this.A5018EntradaProvFornecedorId = 0 ;
   this.A6550EntradaProvFornecedorNome = "" ;
   this.A6551EntradaProvFornecedorFantasia = "" ;
   this.A5088EntradaProvTipoPessoa = "" ;
   this.A5089EntradaProvCPFCNPJ = "" ;
   this.A11298EntradaProvCNPJFilial = "" ;
   this.A6552EntradaProvFornecEndereco = "" ;
   this.A6553EntradaProvFornecNumEndereco = 0 ;
   this.A6554EntradaProvFornecComplemento = "" ;
   this.A6555EntradaProvFornecBairro = "" ;
   this.A6556EntradaProvFornecCidadeId = 0 ;
   this.A6557EntradaProvFornecCidadeNome = "" ;
   this.A6558EntradaProvFornecUF = "" ;
   this.A6559EntradaProvFornecCEP = "" ;
   this.A6560EntradaProvFornecPaisId = 0 ;
   this.A6561EntradaProvFornecPaisNome = "" ;
   this.A6562EntradaProvFornecTelefone = "" ;
   this.A6563EntradaProvFornecIE = "" ;
   this.A6564EntradaProvFornecIM = "" ;
   this.A5019EntradaProvSerie = "" ;
   this.A5020EntradaProvSubSerie = "" ;
   this.A5021EntradaProvChaveNFE = "" ;
   this.A5022EntradaProvDataEmissao = gx.date.nullDate() ;
   this.A5023EntradaProvDataEntrada = gx.date.nullDate() ;
   this.A5024EntradaProvCFOPCodigo = 0 ;
   this.A5025EntradaProvCSTTipo = "" ;
   this.A5027EntradaProvCSTCodigo = "" ;
   this.A5030EntradaProvModDocFiscal = 0 ;
   this.A5031EntradaProvSitDocFiscal = "" ;
   this.A5032EntradaProvEspecie = "" ;
   this.A5033EntradaProvMarca = "" ;
   this.A5034EntradaProvNumeracao = "" ;
   this.A5035EntradaProvObservacao = "" ;
   this.A5036EntradaProvModalidadeFrete = "" ;
   this.A5037EntradaProvTipoTransporte = "" ;
   this.A5038EntradaProvTransportadorEmpId = "" ;
   this.A5039EntradaProvTransportadorId = 0 ;
   this.A5040EntradaProvCodigoAntecipacao = "" ;
   this.A5049EntradaProvClasseEnergiaEletr = "" ;
   this.A5050EntradaProvCPFEntrega = "" ;
   this.A5051EntradaProvCNPJEntrega = "" ;
   this.A5052EntradaProvEnderecoRetirada = "" ;
   this.A5053EntradaProvNumeroEndRetirada = 0 ;
   this.A5054EntradaProvComplEndRetirada = "" ;
   this.A5055EntradaProvBairroEndRetirada = "" ;
   this.A5056EntradaProvCEPEndRetirada = "" ;
   this.A5057EntradaProvCidadeEntRetirada = 0 ;
   this.A5058EntradaProvTipoCTE = 0 ;
   this.A5059EntradaProvChaveCTEREF = "" ;
   this.A5060EntradaProvValorProdutos = 0 ;
   this.A5061EntradaProvValorAcrescimo = 0 ;
   this.A5062EntradaProvValorDesconto = 0 ;
   this.A5063EntradaProvDescontoFinanceiro = 0 ;
   this.A5064EntradaProvValorFrete = 0 ;
   this.A5065EntradaProvValorSeguro = 0 ;
   this.A5066EntradaProvValorOutDespesas = 0 ;
   this.A5067EntradaProvValorManuseio = 0 ;
   this.A5068EntradaProvValorTotal = 0 ;
   this.A5069EntradaProvBCICMS = 0 ;
   this.A5070EntradaProvReducaoBaseICMS = 0 ;
   this.A5071EntradaProvAliquotaICMS = 0 ;
   this.A5072EntradaProvValorDiferencaICMS = 0 ;
   this.A5073EntradaProvValorICMS = 0 ;
   this.A5074EntradaProvValorBCICMSST = 0 ;
   this.A5159EntradaProvValorICMSST = 0 ;
   this.A5076EntradaProvValorIPI = 0 ;
   this.A5077EntradaProvValorPIS = 0 ;
   this.A5078EntradaProvValorPISST = 0 ;
   this.A5079EntradaProvValorCOFINS = 0 ;
   this.A5080EntradaProvValorCOFINSST = 0 ;
   this.A5081EntradaProvValorICMSNaoDestac = 0 ;
   this.A5250EntradaProvValorBCIMCSTNaoDest = 0 ;
   this.A10527EntradaProvValorICMSDesonerado = 0 ;
   this.A5090EntradaProvSNEfetivada = "" ;
   this.A9246EntradaProvSnConferida = "" ;
   this.A5084EntradaProvUsuarioAlt = "" ;
   this.A5085EntradaProvDataHoraAlt = gx.date.nullDate() ;
   this.A9914EntradaProvTransacaoEmpresaId = "" ;
   this.A9913EntradaProvTransacaoCodigo = "" ;
   this.A10595EntradaProvValorFCP = 0 ;
   this.A10596EntradaProvValorFCPST = 0 ;
   this.A10597EntradaProvValorFCPSTRet = 0 ;
   this.Events = {"e1289451_client": ["ENTER", true] ,"e1389451_client": ["CANCEL", true] ,"e1189451_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A11298EntradaProvCNPJFilial", "ENTRADAPROVCNPJFILIAL", 0, "char");
   this.setVCMap("A10527EntradaProvValorICMSDesonerado", "ENTRADAPROVVALORICMSDESONERADO", 0, "decimal");
   this.setVCMap("A9914EntradaProvTransacaoEmpresaId", "ENTRADAPROVTRANSACAOEMPRESAID", 0, "char");
   this.setVCMap("A9913EntradaProvTransacaoCodigo", "ENTRADAPROVTRANSACAOCODIGO", 0, "char");
   this.setVCMap("A10595EntradaProvValorFCP", "ENTRADAPROVVALORFCP", 0, "decimal");
   this.setVCMap("A10596EntradaProvValorFCPST", "ENTRADAPROVVALORFCPST", 0, "decimal");
   this.setVCMap("A10597EntradaProvValorFCPSTRet", "ENTRADAPROVVALORFCPSTRET", 0, "decimal");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("A11748EntradaProvItemCESTCodigo", "ENTRADAPROVITEMCESTCODIGO", 412, "int");
   this.setVCMap("A10929EntradaProvItemDtFabricacao", "ENTRADAPROVITEMDTFABRICACAO", 412, "date");
   this.setVCMap("A10528EntradaProvItemValorICMSDesone", "ENTRADAPROVITEMVALORICMSDESONE", 412, "decimal");
   this.setVCMap("A10589EntradaProvItemValorBCFCP", "ENTRADAPROVITEMVALORBCFCP", 412, "decimal");
   this.setVCMap("A10586EntradaProvItemAliquotaFCP", "ENTRADAPROVITEMALIQUOTAFCP", 412, "decimal");
   this.setVCMap("A10592EntradaProvItemValorFCP", "ENTRADAPROVITEMVALORFCP", 412, "decimal");
   this.setVCMap("A10590EntradaProvItemValorBCFCPST", "ENTRADAPROVITEMVALORBCFCPST", 412, "decimal");
   this.setVCMap("A10587EntradaProvItemAliquotaFCPST", "ENTRADAPROVITEMALIQUOTAFCPST", 412, "decimal");
   this.setVCMap("A10593EntradaProvItemValorFCPST", "ENTRADAPROVITEMVALORFCPST", 412, "decimal");
   this.setVCMap("A10591EntradaProvItemValorBCFCPSTRet", "ENTRADAPROVITEMVALORBCFCPSTRET", 412, "decimal");
   this.setVCMap("A10588EntradaProvItemAliquotaFCPSTRe", "ENTRADAPROVITEMALIQUOTAFCPSTRE", 412, "decimal");
   this.setVCMap("A10594EntradaProvItemValorFCPSTRet", "ENTRADAPROVITEMVALORFCPSTRET", 412, "decimal");
   this.setVCMap("A11790EntradaProvItemTipoCalculo", "ENTRADAPROVITEMTIPOCALCULO", 412, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tentradaprov());
