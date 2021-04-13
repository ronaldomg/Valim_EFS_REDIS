/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:38:28.30
*/
gx.evt.autoSkip = false;
gx.define('hestatisticaprazopagamento', false, function () {
   this.ServerClass =  "hestatisticaprazopagamento" ;
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
      this.AV72ContaPagRecPagRecAux=gx.fn.getControlValue("vCONTAPAGRECPAGRECAUX") ;
   };
   this.s112_client=function()
   {
      if ( ! (new gx.date.gxdate("").compare(this.AV24DataEmissaoIni)==0) && (new gx.date.gxdate("").compare(this.AV25DataEmissaoFim)==0) )
      {
         this.AV25DataEmissaoFim =  this.AV24DataEmissaoIni  ;
      }
      if ( ! (new gx.date.gxdate("").compare(this.AV73DataPagamentoIni)==0) && (new gx.date.gxdate("").compare(this.AV74DataPagamentoFim)==0) )
      {
         this.AV74DataPagamentoFim =  this.AV73DataPagamentoIni  ;
      }
      if ( ! (0==this.AV85ContaPagRecVendIdIni1) && (0==this.AV90ContaPagRecVendIdFin1) )
      {
         this.AV90ContaPagRecVendIdFin1 = gx.num.trunc( this.AV85ContaPagRecVendIdIni1 ,0) ;
      }
      if ( ! (0==this.AV86ContaPagRecVendIdIni2) && (0==this.AV91ContaPagRecVendIdFin2) )
      {
         this.AV91ContaPagRecVendIdFin2 = gx.num.trunc( this.AV86ContaPagRecVendIdIni2 ,0) ;
      }
      if ( ! (0==this.AV87ContaPagRecVendIdIni3) && (0==this.AV92ContaPagRecVendIdFin3) )
      {
         this.AV92ContaPagRecVendIdFin3 = gx.num.trunc( this.AV87ContaPagRecVendIdIni3 ,0) ;
      }
      if ( ! (0==this.AV88ContaPagRecVendIdIni4) && (0==this.AV93ContaPagRecVendIdFin4) )
      {
         this.AV93ContaPagRecVendIdFin4 = gx.num.trunc( this.AV88ContaPagRecVendIdIni4 ,0) ;
      }
      if ( ! (0==this.AV89ContaPagRecVendIdIni5) && (0==this.AV94ContaPagRecVendIdFin5) )
      {
         this.AV94ContaPagRecVendIdFin5 = gx.num.trunc( this.AV89ContaPagRecVendIdIni5 ,0) ;
      }
      if ( ! (0==this.AV28FilialIdIni1) && (0==this.AV29FilialIdFim1) )
      {
         this.AV29FilialIdFim1 = gx.num.trunc( this.AV28FilialIdIni1 ,0) ;
      }
      if ( ! (0==this.AV30FilialIdIni2) && (0==this.AV31FilialIdFim2) )
      {
         this.AV31FilialIdFim2 = gx.num.trunc( this.AV30FilialIdIni2 ,0) ;
      }
      if ( ! (0==this.AV32FilialIdIni3) && (0==this.AV33FilialIdFim3) )
      {
         this.AV33FilialIdFim3 = gx.num.trunc( this.AV32FilialIdIni3 ,0) ;
      }
      if ( ! (0==this.AV34FilialIdIni4) && (0==this.AV35FilialIdFim4) )
      {
         this.AV35FilialIdFim4 = gx.num.trunc( this.AV34FilialIdIni4 ,0) ;
      }
      if ( ! (0==this.AV36FilialIdIni5) && (0==this.AV37FilialIdFim5) )
      {
         this.AV37FilialIdFim5 = gx.num.trunc( this.AV36FilialIdIni5 ,0) ;
      }
      if ( ! (0==this.AV38EspecieIdIni1) && (0==this.AV39EspecieIdFim1) )
      {
         this.AV39EspecieIdFim1 = gx.num.trunc( this.AV38EspecieIdIni1 ,0) ;
      }
      if ( ! (0==this.AV40EspecieIdIni2) && (0==this.AV41EspecieIdFim2) )
      {
         this.AV41EspecieIdFim2 = gx.num.trunc( this.AV40EspecieIdIni2 ,0) ;
      }
      if ( ! (0==this.AV42EspecieIdIni3) && (0==this.AV43EspecieIdFim3) )
      {
         this.AV43EspecieIdFim3 = gx.num.trunc( this.AV42EspecieIdIni3 ,0) ;
      }
      if ( ! (0==this.AV44EspecieIdIni4) && (0==this.AV45EspecieIdFim4) )
      {
         this.AV45EspecieIdFim4 = gx.num.trunc( this.AV44EspecieIdIni4 ,0) ;
      }
      if ( ! (0==this.AV46EspecieIdIni5) && (0==this.AV47EspecieIdFim5) )
      {
         this.AV47EspecieIdFim5 = gx.num.trunc( this.AV46EspecieIdIni5 ,0) ;
      }
      if ( ! (0==this.AV48TipoContaIdIni1) && (0==this.AV49TipoContaIdFim1) )
      {
         this.AV49TipoContaIdFim1 = gx.num.trunc( this.AV48TipoContaIdIni1 ,0) ;
      }
      if ( ! (0==this.AV50TipoContaIdIni2) && (0==this.AV51TipoContaIdFim2) )
      {
         this.AV51TipoContaIdFim2 = gx.num.trunc( this.AV50TipoContaIdIni2 ,0) ;
      }
      if ( ! (0==this.AV52TipoContaIdIni3) && (0==this.AV53TipoContaIdFim3) )
      {
         this.AV53TipoContaIdFim3 = gx.num.trunc( this.AV52TipoContaIdIni3 ,0) ;
      }
      if ( ! (0==this.AV54TipoContaIdIni4) && (0==this.AV55TipoContaIdFim4) )
      {
         this.AV55TipoContaIdFim4 = gx.num.trunc( this.AV54TipoContaIdIni4 ,0) ;
      }
      if ( ! (0==this.AV56TipoContaIdIni5) && (0==this.AV57TipoContaIdFim5) )
      {
         this.AV57TipoContaIdFim5 = gx.num.trunc( this.AV56TipoContaIdIni5 ,0) ;
      }
      if ( ! (0==this.AV58TipoCobrancaIdIni1) && (0==this.AV59TipoCobrancaIdFim1) )
      {
         this.AV59TipoCobrancaIdFim1 = gx.num.trunc( this.AV58TipoCobrancaIdIni1 ,0) ;
      }
      if ( ! (0==this.AV60TipoCobrancaIdIni2) && (0==this.AV61TipoCobrancaIdFim2) )
      {
         this.AV61TipoCobrancaIdFim2 = gx.num.trunc( this.AV60TipoCobrancaIdIni2 ,0) ;
      }
      if ( ! (0==this.AV62TipoCobrancaIdIni3) && (0==this.AV63TipoCobrancaIdFim3) )
      {
         this.AV63TipoCobrancaIdFim3 = gx.num.trunc( this.AV62TipoCobrancaIdIni3 ,0) ;
      }
      if ( ! (0==this.AV64TipoCobrancaIdIni4) && (0==this.AV65TipoCobrancaIdFim4) )
      {
         this.AV65TipoCobrancaIdFim4 = gx.num.trunc( this.AV64TipoCobrancaIdIni4 ,0) ;
      }
      if ( ! (0==this.AV66TipoCobrancaIdIni5) && (0==this.AV67TipoCobrancaIdFim5) )
      {
         this.AV67TipoCobrancaIdFim5 = gx.num.trunc( this.AV66TipoCobrancaIdIni5 ,0) ;
      }
      if ( ! (""==this.AV68ContaPagRecCCustoIdIni) && (""==this.AV69ContaPagRecCCustoIdFim) )
      {
         this.AV69ContaPagRecCCustoIdFim =  this.AV68ContaPagRecCCustoIdIni  ;
      }
      if ( ! (""==this.AV95ContaPagRecNaturezaIdIni) && (""==this.AV96ContaPagRecNaturezaIdFin) )
      {
         this.AV96ContaPagRecNaturezaIdFin =  this.AV95ContaPagRecNaturezaIdIni  ;
      }
   };
   this.s122_client=function()
   {
      this.AV97TpErro = gx.num.trunc( 0 ,0) ;
      if ( this.AV98TipoRelatorio == "0" )
      {
         this.addMessage("Tipo de Relatório deve ser Sintético ou Analítico");
         gx.fn.usrSetFocus("vTIPORELATORIO") ;
         this.AV97TpErro = gx.num.trunc( 1 ,0) ;
      }
      if ( this.AV97TpErro == 0 )
      {
         if ( this.AV100MesIni == 0 || this.AV101AnoIni == 0 )
         {
            this.addMessage("Informe Mes/Ano de Vencimento Inicial");
            gx.fn.usrSetFocus("vMESINI") ;
            this.AV97TpErro = gx.num.trunc( 1 ,0) ;
         }
      }
      if ( this.AV97TpErro == 0 )
      {
         if ( this.AV100MesIni > 12 || this.AV101AnoIni < 1990 )
         {
            this.addMessage("Mes/Ano de Vencimento Inicial Inválido");
            gx.fn.usrSetFocus("vMESINI") ;
            this.AV97TpErro = gx.num.trunc( 1 ,0) ;
         }
      }
      if ( this.AV97TpErro == 0 )
      {
         if ( this.AV102MesFin == 0 || this.AV103AnoFin == 0 )
         {
            this.addMessage("Informe Mes/Ano de Vencimento Final");
            gx.fn.usrSetFocus("vMESFIN") ;
            this.AV97TpErro = gx.num.trunc( 1 ,0) ;
         }
      }
      if ( this.AV97TpErro == 0 )
      {
         if ( this.AV102MesFin > 12 || this.AV103AnoFin < 1990 )
         {
            this.addMessage("Mes/Ano de Vencimento Final Inválido");
            gx.fn.usrSetFocus("vMESFIN") ;
            this.AV97TpErro = gx.num.trunc( 1 ,0) ;
         }
      }
      if ( this.AV97TpErro == 0 )
      {
         this.AV104DtString =  "01/" + gx.num.str( this.AV100MesIni, 2, 0) + "/" + gx.num.str( this.AV101AnoIni, 4, 0)  ;
         this.AV26DataVencimentoIni =  gx.date.ctod( this.AV104DtString, "DMY4")  ;
         this.AV104DtString =  "01/" + gx.num.str( this.AV102MesFin, 2, 0) + "/" + gx.num.str( this.AV103AnoFin, 4, 0)  ;
         this.AV27DataVencimentoFim =  gx.date.eom( gx.date.ctod( this.AV104DtString, "DMY4"))  ;
         if ( new gx.date.gxdate( this.AV26DataVencimentoIni ).compare( this.AV27DataVencimentoFim ) > 0 )
         {
            this.addMessage("Mes/Ano de Vencimento Inicial maior que a Final");
            gx.fn.usrSetFocus("vMESINI") ;
            this.AV97TpErro = gx.num.trunc( 1 ,0) ;
         }
      }
      if ( this.AV97TpErro == 0 )
      {
         if ( this.AV20ContaPagRecCliForIdIni > this.AV84ContaPagRecCliForIdFim )
         {
            this.addMessage("Código do Cliente Inicial maior que o Final");
            gx.fn.usrSetFocus("vCONTAPAGRECCLIFORIDINI") ;
            this.AV97TpErro = gx.num.trunc( 1 ,0) ;
         }
      }
      if ( this.AV97TpErro == 0 )
      {
         if ( new gx.date.gxdate( this.AV24DataEmissaoIni ).compare( this.AV25DataEmissaoFim ) > 0 )
         {
            this.addMessage("Data de Emissão Inicial maior que a Final");
            gx.fn.usrSetFocus("vDATAEMISSAOINI") ;
            this.AV97TpErro = gx.num.trunc( 1 ,0) ;
         }
      }
      if ( this.AV97TpErro == 0 )
      {
         if ( new gx.date.gxdate( this.AV73DataPagamentoIni ).compare( this.AV74DataPagamentoFim ) > 0 )
         {
            this.addMessage("Data de Pagamento Inicial maior que a Final");
            gx.fn.usrSetFocus("vDATAPAGAMENTOINI") ;
            this.AV97TpErro = gx.num.trunc( 1 ,0) ;
         }
      }
      if ( this.AV97TpErro == 0 )
      {
         if ( this.AV85ContaPagRecVendIdIni1 > this.AV90ContaPagRecVendIdFin1 )
         {
            this.addMessage("Vendedor Inicial maior que o Final");
            gx.fn.usrSetFocus("vCONTAPAGRECVENDIDINI1") ;
            this.AV97TpErro = gx.num.trunc( 1 ,0) ;
         }
         else
         {
            if ( this.AV86ContaPagRecVendIdIni2 > this.AV91ContaPagRecVendIdFin2 )
            {
               this.addMessage("Vendedor Inicial maior que o Final");
               gx.fn.usrSetFocus("vCONTAPAGRECVENDIDINI2") ;
               this.AV97TpErro = gx.num.trunc( 1 ,0) ;
            }
            else
            {
               if ( this.AV87ContaPagRecVendIdIni3 > this.AV92ContaPagRecVendIdFin3 )
               {
                  this.addMessage("Vendedor Inicial maior que o Final");
                  gx.fn.usrSetFocus("vCONTAPAGRECVENDIDINI3") ;
                  this.AV97TpErro = gx.num.trunc( 1 ,0) ;
               }
               else
               {
                  if ( this.AV88ContaPagRecVendIdIni4 > this.AV93ContaPagRecVendIdFin4 )
                  {
                     this.addMessage("Vendedor Inicial maior que o Final");
                     gx.fn.usrSetFocus("vCONTAPAGRECVENDIDINI4") ;
                     this.AV97TpErro = gx.num.trunc( 1 ,0) ;
                  }
                  else
                  {
                     if ( this.AV89ContaPagRecVendIdIni5 > this.AV94ContaPagRecVendIdFin5 )
                     {
                        this.addMessage("Vendedor Inicial maior que o Final");
                        gx.fn.usrSetFocus("vCONTAPAGRECVENDIDINI5") ;
                        this.AV97TpErro = gx.num.trunc( 1 ,0) ;
                     }
                  }
               }
            }
         }
      }
      if ( this.AV97TpErro == 0 )
      {
         if ( this.AV28FilialIdIni1 > this.AV29FilialIdFim1 )
         {
            this.addMessage("Filial Inicial maior que a Final");
            gx.fn.usrSetFocus("vFILIALIDINI1") ;
            this.AV97TpErro = gx.num.trunc( 1 ,0) ;
         }
         else
         {
            if ( this.AV30FilialIdIni2 > this.AV31FilialIdFim2 )
            {
               this.addMessage("Filial Inicial maior que a Final");
               gx.fn.usrSetFocus("vFILIALIDINI2") ;
               this.AV97TpErro = gx.num.trunc( 1 ,0) ;
            }
            else
            {
               if ( this.AV32FilialIdIni3 > this.AV33FilialIdFim3 )
               {
                  this.addMessage("Filial Inicial maior que a Final");
                  gx.fn.usrSetFocus("vFILIALIDINI3") ;
                  this.AV97TpErro = gx.num.trunc( 1 ,0) ;
               }
               else
               {
                  if ( this.AV34FilialIdIni4 > this.AV35FilialIdFim4 )
                  {
                     this.addMessage("Filial Inicial maior que a Final");
                     gx.fn.usrSetFocus("vFILIALIDINI4") ;
                     this.AV97TpErro = gx.num.trunc( 1 ,0) ;
                  }
                  else
                  {
                     if ( this.AV36FilialIdIni5 > this.AV37FilialIdFim5 )
                     {
                        this.addMessage("Filial Inicial maior que a Final");
                        gx.fn.usrSetFocus("vFILIALIDINI5") ;
                        this.AV97TpErro = gx.num.trunc( 1 ,0) ;
                     }
                  }
               }
            }
         }
      }
      if ( this.AV97TpErro == 0 )
      {
         if ( this.AV38EspecieIdIni1 > this.AV39EspecieIdFim1 )
         {
            this.addMessage("Espécie Inicial maior que a Final");
            gx.fn.usrSetFocus("vESPECIEIDINI1") ;
            this.AV97TpErro = gx.num.trunc( 1 ,0) ;
         }
         else
         {
            if ( this.AV40EspecieIdIni2 > this.AV41EspecieIdFim2 )
            {
               this.addMessage("Espécie Inicial maior que a Final");
               gx.fn.usrSetFocus("vESPECIEIDINI2") ;
               this.AV97TpErro = gx.num.trunc( 1 ,0) ;
            }
            else
            {
               if ( this.AV42EspecieIdIni3 > this.AV43EspecieIdFim3 )
               {
                  this.addMessage("Espécie Inicial maior que a Final");
                  gx.fn.usrSetFocus("vESPECIEIDINI3") ;
                  this.AV97TpErro = gx.num.trunc( 1 ,0) ;
               }
               else
               {
                  if ( this.AV44EspecieIdIni4 > this.AV45EspecieIdFim4 )
                  {
                     this.addMessage("Espécie Inicial maior que a Final");
                     gx.fn.usrSetFocus("vESPECIEIDINI4") ;
                     this.AV97TpErro = gx.num.trunc( 1 ,0) ;
                  }
                  else
                  {
                     if ( this.AV46EspecieIdIni5 > this.AV47EspecieIdFim5 )
                     {
                        this.addMessage("Espécie Inicial maior que a Final");
                        gx.fn.usrSetFocus("vESPECIEIDINI5") ;
                        this.AV97TpErro = gx.num.trunc( 1 ,0) ;
                     }
                  }
               }
            }
         }
      }
      if ( this.AV97TpErro == 0 )
      {
         if ( this.AV48TipoContaIdIni1 > this.AV49TipoContaIdFim1 )
         {
            this.addMessage("Tipo de Conta Inicial maior que o Final");
            gx.fn.usrSetFocus("vTIPOCONTAIDINI1") ;
            this.AV97TpErro = gx.num.trunc( 1 ,0) ;
         }
         else
         {
            if ( this.AV50TipoContaIdIni2 > this.AV51TipoContaIdFim2 )
            {
               this.addMessage("Tipo de Conta Inicial maior que o Final");
               gx.fn.usrSetFocus("vTIPOCONTAIDINI2") ;
               this.AV97TpErro = gx.num.trunc( 1 ,0) ;
            }
            else
            {
               if ( this.AV52TipoContaIdIni3 > this.AV53TipoContaIdFim3 )
               {
                  this.addMessage("Tipo de Conta Inicial maior que o Final");
                  gx.fn.usrSetFocus("vTIPOCONTAIDINI3") ;
                  this.AV97TpErro = gx.num.trunc( 1 ,0) ;
               }
               else
               {
                  if ( this.AV54TipoContaIdIni4 > this.AV55TipoContaIdFim4 )
                  {
                     this.addMessage("Tipo de Conta Inicial maior que o Final");
                     gx.fn.usrSetFocus("vTIPOCONTAIDINI4") ;
                     this.AV97TpErro = gx.num.trunc( 1 ,0) ;
                  }
                  else
                  {
                     if ( this.AV56TipoContaIdIni5 > this.AV57TipoContaIdFim5 )
                     {
                        this.addMessage("Tipo de Conta Inicial maior que o Final");
                        gx.fn.usrSetFocus("vTIPOCONTAIDINI5") ;
                        this.AV97TpErro = gx.num.trunc( 1 ,0) ;
                     }
                  }
               }
            }
         }
      }
      if ( this.AV97TpErro == 0 )
      {
         if ( this.AV58TipoCobrancaIdIni1 > this.AV59TipoCobrancaIdFim1 )
         {
            this.addMessage("Tipo de Cobrança Inicial maior que o Final");
            gx.fn.usrSetFocus("vTIPOCOBRANCAIDINI1") ;
            this.AV97TpErro = gx.num.trunc( 1 ,0) ;
         }
         else
         {
            if ( this.AV60TipoCobrancaIdIni2 > this.AV61TipoCobrancaIdFim2 )
            {
               this.addMessage("Tipo de Cobrança Inicial maior que o Final");
               gx.fn.usrSetFocus("vTIPOCOBRANCAIDINI2") ;
               this.AV97TpErro = gx.num.trunc( 1 ,0) ;
            }
            else
            {
               if ( this.AV62TipoCobrancaIdIni3 > this.AV63TipoCobrancaIdFim3 )
               {
                  this.addMessage("Tipo de Cobrança Inicial maior que o Final");
                  gx.fn.usrSetFocus("vTIPOCOBRANCAIDINI3") ;
                  this.AV97TpErro = gx.num.trunc( 1 ,0) ;
               }
               else
               {
                  if ( this.AV64TipoCobrancaIdIni4 > this.AV65TipoCobrancaIdFim4 )
                  {
                     this.addMessage("Tipo de Cobrança Inicial maior que o Final");
                     gx.fn.usrSetFocus("vTIPOCOBRANCAIDINI4") ;
                     this.AV97TpErro = gx.num.trunc( 1 ,0) ;
                  }
                  else
                  {
                     if ( this.AV66TipoCobrancaIdIni5 > this.AV67TipoCobrancaIdFim5 )
                     {
                        this.addMessage("Tipo de Cobrança Inicial maior que o Final");
                        gx.fn.usrSetFocus("vTIPOCOBRANCAIDINI5") ;
                        this.AV97TpErro = gx.num.trunc( 1 ,0) ;
                     }
                  }
               }
            }
         }
      }
      if ( this.AV97TpErro == 0 )
      {
         if ( this.AV68ContaPagRecCCustoIdIni > this.AV69ContaPagRecCCustoIdFim )
         {
            this.addMessage("Centro de Custo Inicial maior que o Final");
            gx.fn.usrSetFocus("vCONTAPAGRECCCUSTOIDINI") ;
            this.AV97TpErro = gx.num.trunc( 1 ,0) ;
         }
      }
      if ( this.AV97TpErro == 0 )
      {
         if ( this.AV95ContaPagRecNaturezaIdIni > this.AV96ContaPagRecNaturezaIdFin )
         {
            this.addMessage("Natureza Inicial maior que a Final");
            gx.fn.usrSetFocus("vCONTAPAGRECNATUREZAIDINI") ;
            this.AV97TpErro = gx.num.trunc( 1 ,0) ;
         }
      }
   };
   this.e11h32_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13h32_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15h32_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e16h32_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e17h32_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e19h32_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,23,26,28,31,33,36,38,41,43,45,47,49,51,53,58,61,63,66,68,70,72,78,84,89,92,94,97,99,101,104,106,109,111,113,116,118,121,123,125,127,130,132,134,136,139,141,143,145,148,150,152,154,157,159,161,164,166,169,171,173,175,178,180,182,184,187,189,191,193,196,198,200,202,205,207,209,212,214,217,219,221,223,226,228,230,232,235,237,239,241,244,246,248,250,253,255,257,260,262,265,267,269,271,274,276,278,280,283,285,287,289,292,294,296,298,301,303,305,308,310,313,315,317,319,322,324,326,328,331,333,335,337,340,342,344,346,349,351,353,356,358,361,363,365,368,370,373,375,377,380,382,385,387,389,398,399,400,401,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461];
   this.GXLastCtrlId =461;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABTXT",grid:0};
   GXValidFnc[11]={fld:"TBDADOS", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV115TxtTela",gxold:"OV115TxtTela",gxvar:"AV115TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV115TxtTela=Value},v2z:function(Value){gx.O.ZV115TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV115TxtTela)},c2v:function(){gx.O.AV115TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"IMAGE2",grid:0};
   GXValidFnc[17]={fld:"IMAGE1",grid:0};
   GXValidFnc[20]={fld:"TABLE7",grid:0};
   GXValidFnc[23]={fld:"TABLE3",grid:0};
   GXValidFnc[26]={fld:"TB", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPORELATORIO",gxz:"ZV98TipoRelatorio",gxold:"OV98TipoRelatorio",gxvar:"AV98TipoRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV98TipoRelatorio=Value},v2z:function(Value){gx.O.ZV98TipoRelatorio=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPORELATORIO",gx.O.AV98TipoRelatorio)},c2v:function(){gx.O.AV98TipoRelatorio=this.val()},val:function(){return gx.fn.getControlValue("vTIPORELATORIO")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK49", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOVENCIMENTO",gxz:"ZV99TipoVencimento",gxold:"OV99TipoVencimento",gxvar:"AV99TipoVencimento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV99TipoVencimento=Value},v2z:function(Value){gx.O.ZV99TipoVencimento=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOVENCIMENTO",gx.O.AV99TipoVencimento)},c2v:function(){gx.O.AV99TipoVencimento=this.val()},val:function(){return gx.fn.getControlValue("vTIPOVENCIMENTO")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[38]={fld:"TABLE8",grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESINI",gxz:"ZV100MesIni",gxold:"OV100MesIni",gxvar:"AV100MesIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV100MesIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV100MesIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESINI",gx.O.AV100MesIni,0)},c2v:function(){gx.O.AV100MesIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESINI",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK53", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOINI",gxz:"ZV101AnoIni",gxold:"OV101AnoIni",gxvar:"AV101AnoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV101AnoIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV101AnoIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOINI",gx.O.AV101AnoIni,0)},c2v:function(){gx.O.AV101AnoIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOINI",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK41", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESFIN",gxz:"ZV102MesFin",gxold:"OV102MesFin",gxvar:"AV102MesFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV102MesFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV102MesFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESFIN",gx.O.AV102MesFin,0)},c2v:function(){gx.O.AV102MesFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESFIN",'.')},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TEXTBLOCK54", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOFIN",gxz:"ZV103AnoFin",gxold:"OV103AnoFin",gxvar:"AV103AnoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV103AnoFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV103AnoFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOFIN",gx.O.AV103AnoFin,0)},c2v:function(){gx.O.AV103AnoFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOFIN",'.')},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TITOPCOESCLIENTES", format:0,grid:0};
   GXValidFnc[61]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[63]={fld:"TABLE9",grid:0};
   GXValidFnc[66]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCLIFORIDINI",gxz:"ZV20ContaPagRecCliForIdIni",gxold:"OV20ContaPagRecCliForIdIni",gxvar:"AV20ContaPagRecCliForIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ContaPagRecCliForIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20ContaPagRecCliForIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCLIFORIDINI",gx.O.AV20ContaPagRecCliForIdIni,0)},c2v:function(){gx.O.AV20ContaPagRecCliForIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECCLIFORIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TEXTBLOCK55", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCLIFORIDFIM",gxz:"ZV84ContaPagRecCliForIdFim",gxold:"OV84ContaPagRecCliForIdFim",gxvar:"AV84ContaPagRecCliForIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV84ContaPagRecCliForIdFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV84ContaPagRecCliForIdFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCLIFORIDFIM",gx.O.AV84ContaPagRecCliForIdFim,0)},c2v:function(){gx.O.AV84ContaPagRecCliForIdFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECCLIFORIDFIM",'.')},nac:gx.falseFn};
   GXValidFnc[72]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMIRCLIFORNORMAL",gxz:"ZV21ImprimirCliForNormal",gxold:"OV21ImprimirCliForNormal",gxvar:"AV21ImprimirCliForNormal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV21ImprimirCliForNormal=Value},v2z:function(Value){gx.O.ZV21ImprimirCliForNormal=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPRIMIRCLIFORNORMAL",gx.O.AV21ImprimirCliForNormal,"S")},c2v:function(){gx.O.AV21ImprimirCliForNormal=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMIRCLIFORNORMAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[78]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMIRCLIFORSUSPENSO",gxz:"ZV22ImprimirCliForSuspenso",gxold:"OV22ImprimirCliForSuspenso",gxvar:"AV22ImprimirCliForSuspenso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV22ImprimirCliForSuspenso=Value},v2z:function(Value){gx.O.ZV22ImprimirCliForSuspenso=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPRIMIRCLIFORSUSPENSO",gx.O.AV22ImprimirCliForSuspenso,"S")},c2v:function(){gx.O.AV22ImprimirCliForSuspenso=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMIRCLIFORSUSPENSO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[84]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMIRCLIFORCANCELADO",gxz:"ZV23ImprimirCliForCancelado",gxold:"OV23ImprimirCliForCancelado",gxvar:"AV23ImprimirCliForCancelado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV23ImprimirCliForCancelado=Value},v2z:function(Value){gx.O.ZV23ImprimirCliForCancelado=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPRIMIRCLIFORCANCELADO",gx.O.AV23ImprimirCliForCancelado,"S")},c2v:function(){gx.O.AV23ImprimirCliForCancelado=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMIRCLIFORCANCELADO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[89]={fld:"TITOPCOESCONTAS", format:0,grid:0};
   GXValidFnc[92]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[94]={fld:"TABLE10",grid:0};
   GXValidFnc[97]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAEMISSAOINI",gxz:"ZV24DataEmissaoIni",gxold:"OV24DataEmissaoIni",gxvar:"AV24DataEmissaoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24DataEmissaoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV24DataEmissaoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAEMISSAOINI",gx.O.AV24DataEmissaoIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV24DataEmissaoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAEMISSAOINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 97 , function() {
   });
   GXValidFnc[99]={fld:"TEXTBLOCK56", format:0,grid:0};
   GXValidFnc[101]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAEMISSAOFIM",gxz:"ZV25DataEmissaoFim",gxold:"OV25DataEmissaoFim",gxvar:"AV25DataEmissaoFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25DataEmissaoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV25DataEmissaoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAEMISSAOFIM",gx.O.AV25DataEmissaoFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV25DataEmissaoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAEMISSAOFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 101 , function() {
   });
   GXValidFnc[104]={fld:"TEXTBLOCK42", format:0,grid:0};
   GXValidFnc[106]={fld:"TABLE11",grid:0};
   GXValidFnc[109]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAPAGAMENTOINI",gxz:"ZV73DataPagamentoIni",gxold:"OV73DataPagamentoIni",gxvar:"AV73DataPagamentoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73DataPagamentoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV73DataPagamentoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAPAGAMENTOINI",gx.O.AV73DataPagamentoIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV73DataPagamentoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAPAGAMENTOINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 109 , function() {
   });
   GXValidFnc[111]={fld:"TEXTBLOCK57", format:0,grid:0};
   GXValidFnc[113]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAPAGAMENTOFIM",gxz:"ZV74DataPagamentoFim",gxold:"OV74DataPagamentoFim",gxvar:"AV74DataPagamentoFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74DataPagamentoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV74DataPagamentoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAPAGAMENTOFIM",gx.O.AV74DataPagamentoFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV74DataPagamentoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAPAGAMENTOFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 113 , function() {
   });
   GXValidFnc[116]={fld:"TEXTBLOCK44", format:0,grid:0};
   GXValidFnc[118]={fld:"TABLE12",grid:0};
   GXValidFnc[121]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECVENDIDINI1",gxz:"ZV85ContaPagRecVendIdIni1",gxold:"OV85ContaPagRecVendIdIni1",gxvar:"AV85ContaPagRecVendIdIni1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV85ContaPagRecVendIdIni1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV85ContaPagRecVendIdIni1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECVENDIDINI1",gx.O.AV85ContaPagRecVendIdIni1,0)},c2v:function(){gx.O.AV85ContaPagRecVendIdIni1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECVENDIDINI1",'.')},nac:gx.falseFn};
   GXValidFnc[123]={fld:"TEXTBLOCK58", format:0,grid:0};
   GXValidFnc[125]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECVENDIDFIN1",gxz:"ZV90ContaPagRecVendIdFin1",gxold:"OV90ContaPagRecVendIdFin1",gxvar:"AV90ContaPagRecVendIdFin1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV90ContaPagRecVendIdFin1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV90ContaPagRecVendIdFin1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECVENDIDFIN1",gx.O.AV90ContaPagRecVendIdFin1,0)},c2v:function(){gx.O.AV90ContaPagRecVendIdFin1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECVENDIDFIN1",'.')},nac:gx.falseFn};
   GXValidFnc[127]={fld:"TABLE13",grid:0};
   GXValidFnc[130]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECVENDIDINI2",gxz:"ZV86ContaPagRecVendIdIni2",gxold:"OV86ContaPagRecVendIdIni2",gxvar:"AV86ContaPagRecVendIdIni2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV86ContaPagRecVendIdIni2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV86ContaPagRecVendIdIni2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECVENDIDINI2",gx.O.AV86ContaPagRecVendIdIni2,0)},c2v:function(){gx.O.AV86ContaPagRecVendIdIni2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECVENDIDINI2",'.')},nac:gx.falseFn};
   GXValidFnc[132]={fld:"TEXTBLOCK59", format:0,grid:0};
   GXValidFnc[134]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECVENDIDFIN2",gxz:"ZV91ContaPagRecVendIdFin2",gxold:"OV91ContaPagRecVendIdFin2",gxvar:"AV91ContaPagRecVendIdFin2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV91ContaPagRecVendIdFin2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV91ContaPagRecVendIdFin2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECVENDIDFIN2",gx.O.AV91ContaPagRecVendIdFin2,0)},c2v:function(){gx.O.AV91ContaPagRecVendIdFin2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECVENDIDFIN2",'.')},nac:gx.falseFn};
   GXValidFnc[136]={fld:"TABLE14",grid:0};
   GXValidFnc[139]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECVENDIDINI3",gxz:"ZV87ContaPagRecVendIdIni3",gxold:"OV87ContaPagRecVendIdIni3",gxvar:"AV87ContaPagRecVendIdIni3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV87ContaPagRecVendIdIni3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV87ContaPagRecVendIdIni3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECVENDIDINI3",gx.O.AV87ContaPagRecVendIdIni3,0)},c2v:function(){gx.O.AV87ContaPagRecVendIdIni3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECVENDIDINI3",'.')},nac:gx.falseFn};
   GXValidFnc[141]={fld:"TEXTBLOCK60", format:0,grid:0};
   GXValidFnc[143]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECVENDIDFIN3",gxz:"ZV92ContaPagRecVendIdFin3",gxold:"OV92ContaPagRecVendIdFin3",gxvar:"AV92ContaPagRecVendIdFin3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV92ContaPagRecVendIdFin3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV92ContaPagRecVendIdFin3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECVENDIDFIN3",gx.O.AV92ContaPagRecVendIdFin3,0)},c2v:function(){gx.O.AV92ContaPagRecVendIdFin3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECVENDIDFIN3",'.')},nac:gx.falseFn};
   GXValidFnc[145]={fld:"TABLE15",grid:0};
   GXValidFnc[148]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECVENDIDINI4",gxz:"ZV88ContaPagRecVendIdIni4",gxold:"OV88ContaPagRecVendIdIni4",gxvar:"AV88ContaPagRecVendIdIni4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV88ContaPagRecVendIdIni4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV88ContaPagRecVendIdIni4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECVENDIDINI4",gx.O.AV88ContaPagRecVendIdIni4,0)},c2v:function(){gx.O.AV88ContaPagRecVendIdIni4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECVENDIDINI4",'.')},nac:gx.falseFn};
   GXValidFnc[150]={fld:"TEXTBLOCK61", format:0,grid:0};
   GXValidFnc[152]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECVENDIDFIN4",gxz:"ZV93ContaPagRecVendIdFin4",gxold:"OV93ContaPagRecVendIdFin4",gxvar:"AV93ContaPagRecVendIdFin4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV93ContaPagRecVendIdFin4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV93ContaPagRecVendIdFin4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECVENDIDFIN4",gx.O.AV93ContaPagRecVendIdFin4,0)},c2v:function(){gx.O.AV93ContaPagRecVendIdFin4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECVENDIDFIN4",'.')},nac:gx.falseFn};
   GXValidFnc[154]={fld:"TABLE16",grid:0};
   GXValidFnc[157]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECVENDIDINI5",gxz:"ZV89ContaPagRecVendIdIni5",gxold:"OV89ContaPagRecVendIdIni5",gxvar:"AV89ContaPagRecVendIdIni5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV89ContaPagRecVendIdIni5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV89ContaPagRecVendIdIni5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECVENDIDINI5",gx.O.AV89ContaPagRecVendIdIni5,0)},c2v:function(){gx.O.AV89ContaPagRecVendIdIni5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECVENDIDINI5",'.')},nac:gx.falseFn};
   GXValidFnc[159]={fld:"TEXTBLOCK62", format:0,grid:0};
   GXValidFnc[161]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECVENDIDFIN5",gxz:"ZV94ContaPagRecVendIdFin5",gxold:"OV94ContaPagRecVendIdFin5",gxvar:"AV94ContaPagRecVendIdFin5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV94ContaPagRecVendIdFin5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV94ContaPagRecVendIdFin5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECVENDIDFIN5",gx.O.AV94ContaPagRecVendIdFin5,0)},c2v:function(){gx.O.AV94ContaPagRecVendIdFin5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECVENDIDFIN5",'.')},nac:gx.falseFn};
   GXValidFnc[164]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[166]={fld:"TABLE17",grid:0};
   GXValidFnc[169]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDINI1",gxz:"ZV28FilialIdIni1",gxold:"OV28FilialIdIni1",gxvar:"AV28FilialIdIni1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28FilialIdIni1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28FilialIdIni1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDINI1",gx.O.AV28FilialIdIni1,0)},c2v:function(){gx.O.AV28FilialIdIni1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDINI1",'.')},nac:gx.falseFn};
   GXValidFnc[171]={fld:"TEXTBLOCK63", format:0,grid:0};
   GXValidFnc[173]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDFIM1",gxz:"ZV29FilialIdFim1",gxold:"OV29FilialIdFim1",gxvar:"AV29FilialIdFim1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29FilialIdFim1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29FilialIdFim1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDFIM1",gx.O.AV29FilialIdFim1,0)},c2v:function(){gx.O.AV29FilialIdFim1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDFIM1",'.')},nac:gx.falseFn};
   GXValidFnc[175]={fld:"TABLE18",grid:0};
   GXValidFnc[178]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDINI2",gxz:"ZV30FilialIdIni2",gxold:"OV30FilialIdIni2",gxvar:"AV30FilialIdIni2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30FilialIdIni2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30FilialIdIni2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDINI2",gx.O.AV30FilialIdIni2,0)},c2v:function(){gx.O.AV30FilialIdIni2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDINI2",'.')},nac:gx.falseFn};
   GXValidFnc[180]={fld:"TEXTBLOCK64", format:0,grid:0};
   GXValidFnc[182]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDFIM2",gxz:"ZV31FilialIdFim2",gxold:"OV31FilialIdFim2",gxvar:"AV31FilialIdFim2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31FilialIdFim2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31FilialIdFim2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDFIM2",gx.O.AV31FilialIdFim2,0)},c2v:function(){gx.O.AV31FilialIdFim2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDFIM2",'.')},nac:gx.falseFn};
   GXValidFnc[184]={fld:"TABLE19",grid:0};
   GXValidFnc[187]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDINI3",gxz:"ZV32FilialIdIni3",gxold:"OV32FilialIdIni3",gxvar:"AV32FilialIdIni3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32FilialIdIni3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32FilialIdIni3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDINI3",gx.O.AV32FilialIdIni3,0)},c2v:function(){gx.O.AV32FilialIdIni3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDINI3",'.')},nac:gx.falseFn};
   GXValidFnc[189]={fld:"TEXTBLOCK65", format:0,grid:0};
   GXValidFnc[191]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDFIM3",gxz:"ZV33FilialIdFim3",gxold:"OV33FilialIdFim3",gxvar:"AV33FilialIdFim3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33FilialIdFim3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33FilialIdFim3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDFIM3",gx.O.AV33FilialIdFim3,0)},c2v:function(){gx.O.AV33FilialIdFim3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDFIM3",'.')},nac:gx.falseFn};
   GXValidFnc[193]={fld:"TABLE20",grid:0};
   GXValidFnc[196]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDINI4",gxz:"ZV34FilialIdIni4",gxold:"OV34FilialIdIni4",gxvar:"AV34FilialIdIni4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34FilialIdIni4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34FilialIdIni4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDINI4",gx.O.AV34FilialIdIni4,0)},c2v:function(){gx.O.AV34FilialIdIni4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDINI4",'.')},nac:gx.falseFn};
   GXValidFnc[198]={fld:"TEXTBLOCK66", format:0,grid:0};
   GXValidFnc[200]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDFIM4",gxz:"ZV35FilialIdFim4",gxold:"OV35FilialIdFim4",gxvar:"AV35FilialIdFim4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35FilialIdFim4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35FilialIdFim4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDFIM4",gx.O.AV35FilialIdFim4,0)},c2v:function(){gx.O.AV35FilialIdFim4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDFIM4",'.')},nac:gx.falseFn};
   GXValidFnc[202]={fld:"TABLE21",grid:0};
   GXValidFnc[205]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDINI5",gxz:"ZV36FilialIdIni5",gxold:"OV36FilialIdIni5",gxvar:"AV36FilialIdIni5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36FilialIdIni5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36FilialIdIni5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDINI5",gx.O.AV36FilialIdIni5,0)},c2v:function(){gx.O.AV36FilialIdIni5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDINI5",'.')},nac:gx.falseFn};
   GXValidFnc[207]={fld:"TEXTBLOCK67", format:0,grid:0};
   GXValidFnc[209]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDFIM5",gxz:"ZV37FilialIdFim5",gxold:"OV37FilialIdFim5",gxvar:"AV37FilialIdFim5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37FilialIdFim5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37FilialIdFim5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDFIM5",gx.O.AV37FilialIdFim5,0)},c2v:function(){gx.O.AV37FilialIdFim5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDFIM5",'.')},nac:gx.falseFn};
   GXValidFnc[212]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[214]={fld:"TABLE22",grid:0};
   GXValidFnc[217]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEIDINI1",gxz:"ZV38EspecieIdIni1",gxold:"OV38EspecieIdIni1",gxvar:"AV38EspecieIdIni1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38EspecieIdIni1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38EspecieIdIni1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEIDINI1",gx.O.AV38EspecieIdIni1,0)},c2v:function(){gx.O.AV38EspecieIdIni1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEIDINI1",'.')},nac:gx.falseFn};
   GXValidFnc[219]={fld:"TEXTBLOCK68", format:0,grid:0};
   GXValidFnc[221]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEIDFIM1",gxz:"ZV39EspecieIdFim1",gxold:"OV39EspecieIdFim1",gxvar:"AV39EspecieIdFim1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39EspecieIdFim1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39EspecieIdFim1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEIDFIM1",gx.O.AV39EspecieIdFim1,0)},c2v:function(){gx.O.AV39EspecieIdFim1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEIDFIM1",'.')},nac:gx.falseFn};
   GXValidFnc[223]={fld:"TABLE23",grid:0};
   GXValidFnc[226]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEIDINI2",gxz:"ZV40EspecieIdIni2",gxold:"OV40EspecieIdIni2",gxvar:"AV40EspecieIdIni2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40EspecieIdIni2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40EspecieIdIni2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEIDINI2",gx.O.AV40EspecieIdIni2,0)},c2v:function(){gx.O.AV40EspecieIdIni2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEIDINI2",'.')},nac:gx.falseFn};
   GXValidFnc[228]={fld:"TEXTBLOCK69", format:0,grid:0};
   GXValidFnc[230]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEIDFIM2",gxz:"ZV41EspecieIdFim2",gxold:"OV41EspecieIdFim2",gxvar:"AV41EspecieIdFim2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41EspecieIdFim2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41EspecieIdFim2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEIDFIM2",gx.O.AV41EspecieIdFim2,0)},c2v:function(){gx.O.AV41EspecieIdFim2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEIDFIM2",'.')},nac:gx.falseFn};
   GXValidFnc[232]={fld:"TABLE24",grid:0};
   GXValidFnc[235]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEIDINI3",gxz:"ZV42EspecieIdIni3",gxold:"OV42EspecieIdIni3",gxvar:"AV42EspecieIdIni3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42EspecieIdIni3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42EspecieIdIni3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEIDINI3",gx.O.AV42EspecieIdIni3,0)},c2v:function(){gx.O.AV42EspecieIdIni3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEIDINI3",'.')},nac:gx.falseFn};
   GXValidFnc[237]={fld:"TEXTBLOCK70", format:0,grid:0};
   GXValidFnc[239]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEIDFIM3",gxz:"ZV43EspecieIdFim3",gxold:"OV43EspecieIdFim3",gxvar:"AV43EspecieIdFim3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43EspecieIdFim3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43EspecieIdFim3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEIDFIM3",gx.O.AV43EspecieIdFim3,0)},c2v:function(){gx.O.AV43EspecieIdFim3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEIDFIM3",'.')},nac:gx.falseFn};
   GXValidFnc[241]={fld:"TABLE25",grid:0};
   GXValidFnc[244]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEIDINI4",gxz:"ZV44EspecieIdIni4",gxold:"OV44EspecieIdIni4",gxvar:"AV44EspecieIdIni4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44EspecieIdIni4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44EspecieIdIni4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEIDINI4",gx.O.AV44EspecieIdIni4,0)},c2v:function(){gx.O.AV44EspecieIdIni4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEIDINI4",'.')},nac:gx.falseFn};
   GXValidFnc[246]={fld:"TEXTBLOCK71", format:0,grid:0};
   GXValidFnc[248]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEIDFIM4",gxz:"ZV45EspecieIdFim4",gxold:"OV45EspecieIdFim4",gxvar:"AV45EspecieIdFim4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45EspecieIdFim4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45EspecieIdFim4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEIDFIM4",gx.O.AV45EspecieIdFim4,0)},c2v:function(){gx.O.AV45EspecieIdFim4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEIDFIM4",'.')},nac:gx.falseFn};
   GXValidFnc[250]={fld:"TABLE26",grid:0};
   GXValidFnc[253]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEIDINI5",gxz:"ZV46EspecieIdIni5",gxold:"OV46EspecieIdIni5",gxvar:"AV46EspecieIdIni5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46EspecieIdIni5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV46EspecieIdIni5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEIDINI5",gx.O.AV46EspecieIdIni5,0)},c2v:function(){gx.O.AV46EspecieIdIni5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEIDINI5",'.')},nac:gx.falseFn};
   GXValidFnc[255]={fld:"TEXTBLOCK72", format:0,grid:0};
   GXValidFnc[257]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEIDFIM5",gxz:"ZV47EspecieIdFim5",gxold:"OV47EspecieIdFim5",gxvar:"AV47EspecieIdFim5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47EspecieIdFim5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47EspecieIdFim5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEIDFIM5",gx.O.AV47EspecieIdFim5,0)},c2v:function(){gx.O.AV47EspecieIdFim5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEIDFIM5",'.')},nac:gx.falseFn};
   GXValidFnc[260]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[262]={fld:"TABLE27",grid:0};
   GXValidFnc[265]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAIDINI1",gxz:"ZV48TipoContaIdIni1",gxold:"OV48TipoContaIdIni1",gxvar:"AV48TipoContaIdIni1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48TipoContaIdIni1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV48TipoContaIdIni1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTAIDINI1",gx.O.AV48TipoContaIdIni1,0)},c2v:function(){gx.O.AV48TipoContaIdIni1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTAIDINI1",'.')},nac:gx.falseFn};
   GXValidFnc[267]={fld:"TEXTBLOCK73", format:0,grid:0};
   GXValidFnc[269]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAIDFIM1",gxz:"ZV49TipoContaIdFim1",gxold:"OV49TipoContaIdFim1",gxvar:"AV49TipoContaIdFim1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49TipoContaIdFim1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV49TipoContaIdFim1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTAIDFIM1",gx.O.AV49TipoContaIdFim1,0)},c2v:function(){gx.O.AV49TipoContaIdFim1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTAIDFIM1",'.')},nac:gx.falseFn};
   GXValidFnc[271]={fld:"TABLE28",grid:0};
   GXValidFnc[274]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAIDINI2",gxz:"ZV50TipoContaIdIni2",gxold:"OV50TipoContaIdIni2",gxvar:"AV50TipoContaIdIni2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50TipoContaIdIni2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV50TipoContaIdIni2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTAIDINI2",gx.O.AV50TipoContaIdIni2,0)},c2v:function(){gx.O.AV50TipoContaIdIni2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTAIDINI2",'.')},nac:gx.falseFn};
   GXValidFnc[276]={fld:"TEXTBLOCK74", format:0,grid:0};
   GXValidFnc[278]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAIDFIM2",gxz:"ZV51TipoContaIdFim2",gxold:"OV51TipoContaIdFim2",gxvar:"AV51TipoContaIdFim2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51TipoContaIdFim2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV51TipoContaIdFim2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTAIDFIM2",gx.O.AV51TipoContaIdFim2,0)},c2v:function(){gx.O.AV51TipoContaIdFim2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTAIDFIM2",'.')},nac:gx.falseFn};
   GXValidFnc[280]={fld:"TABLE29",grid:0};
   GXValidFnc[283]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAIDINI3",gxz:"ZV52TipoContaIdIni3",gxold:"OV52TipoContaIdIni3",gxvar:"AV52TipoContaIdIni3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52TipoContaIdIni3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV52TipoContaIdIni3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTAIDINI3",gx.O.AV52TipoContaIdIni3,0)},c2v:function(){gx.O.AV52TipoContaIdIni3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTAIDINI3",'.')},nac:gx.falseFn};
   GXValidFnc[285]={fld:"TEXTBLOCK75", format:0,grid:0};
   GXValidFnc[287]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAIDFIM3",gxz:"ZV53TipoContaIdFim3",gxold:"OV53TipoContaIdFim3",gxvar:"AV53TipoContaIdFim3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53TipoContaIdFim3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV53TipoContaIdFim3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTAIDFIM3",gx.O.AV53TipoContaIdFim3,0)},c2v:function(){gx.O.AV53TipoContaIdFim3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTAIDFIM3",'.')},nac:gx.falseFn};
   GXValidFnc[289]={fld:"TABLE30",grid:0};
   GXValidFnc[292]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAIDINI4",gxz:"ZV54TipoContaIdIni4",gxold:"OV54TipoContaIdIni4",gxvar:"AV54TipoContaIdIni4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54TipoContaIdIni4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV54TipoContaIdIni4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTAIDINI4",gx.O.AV54TipoContaIdIni4,0)},c2v:function(){gx.O.AV54TipoContaIdIni4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTAIDINI4",'.')},nac:gx.falseFn};
   GXValidFnc[294]={fld:"TEXTBLOCK76", format:0,grid:0};
   GXValidFnc[296]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAIDFIM4",gxz:"ZV55TipoContaIdFim4",gxold:"OV55TipoContaIdFim4",gxvar:"AV55TipoContaIdFim4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55TipoContaIdFim4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV55TipoContaIdFim4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTAIDFIM4",gx.O.AV55TipoContaIdFim4,0)},c2v:function(){gx.O.AV55TipoContaIdFim4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTAIDFIM4",'.')},nac:gx.falseFn};
   GXValidFnc[298]={fld:"TABLE31",grid:0};
   GXValidFnc[301]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAIDINI5",gxz:"ZV56TipoContaIdIni5",gxold:"OV56TipoContaIdIni5",gxvar:"AV56TipoContaIdIni5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56TipoContaIdIni5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV56TipoContaIdIni5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTAIDINI5",gx.O.AV56TipoContaIdIni5,0)},c2v:function(){gx.O.AV56TipoContaIdIni5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTAIDINI5",'.')},nac:gx.falseFn};
   GXValidFnc[303]={fld:"TEXTBLOCK77", format:0,grid:0};
   GXValidFnc[305]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAIDFIM5",gxz:"ZV57TipoContaIdFim5",gxold:"OV57TipoContaIdFim5",gxvar:"AV57TipoContaIdFim5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57TipoContaIdFim5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV57TipoContaIdFim5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTAIDFIM5",gx.O.AV57TipoContaIdFim5,0)},c2v:function(){gx.O.AV57TipoContaIdFim5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTAIDFIM5",'.')},nac:gx.falseFn};
   GXValidFnc[308]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[310]={fld:"TABLE32",grid:0};
   GXValidFnc[313]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAIDINI1",gxz:"ZV58TipoCobrancaIdIni1",gxold:"OV58TipoCobrancaIdIni1",gxvar:"AV58TipoCobrancaIdIni1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58TipoCobrancaIdIni1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV58TipoCobrancaIdIni1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAIDINI1",gx.O.AV58TipoCobrancaIdIni1,0)},c2v:function(){gx.O.AV58TipoCobrancaIdIni1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBRANCAIDINI1",'.')},nac:gx.falseFn};
   GXValidFnc[315]={fld:"TEXTBLOCK78", format:0,grid:0};
   GXValidFnc[317]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAIDFIM1",gxz:"ZV59TipoCobrancaIdFim1",gxold:"OV59TipoCobrancaIdFim1",gxvar:"AV59TipoCobrancaIdFim1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59TipoCobrancaIdFim1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV59TipoCobrancaIdFim1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAIDFIM1",gx.O.AV59TipoCobrancaIdFim1,0)},c2v:function(){gx.O.AV59TipoCobrancaIdFim1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBRANCAIDFIM1",'.')},nac:gx.falseFn};
   GXValidFnc[319]={fld:"TABLE33",grid:0};
   GXValidFnc[322]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAIDINI2",gxz:"ZV60TipoCobrancaIdIni2",gxold:"OV60TipoCobrancaIdIni2",gxvar:"AV60TipoCobrancaIdIni2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60TipoCobrancaIdIni2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV60TipoCobrancaIdIni2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAIDINI2",gx.O.AV60TipoCobrancaIdIni2,0)},c2v:function(){gx.O.AV60TipoCobrancaIdIni2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBRANCAIDINI2",'.')},nac:gx.falseFn};
   GXValidFnc[324]={fld:"TEXTBLOCK79", format:0,grid:0};
   GXValidFnc[326]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAIDFIM2",gxz:"ZV61TipoCobrancaIdFim2",gxold:"OV61TipoCobrancaIdFim2",gxvar:"AV61TipoCobrancaIdFim2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61TipoCobrancaIdFim2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV61TipoCobrancaIdFim2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAIDFIM2",gx.O.AV61TipoCobrancaIdFim2,0)},c2v:function(){gx.O.AV61TipoCobrancaIdFim2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBRANCAIDFIM2",'.')},nac:gx.falseFn};
   GXValidFnc[328]={fld:"TABLE34",grid:0};
   GXValidFnc[331]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAIDINI3",gxz:"ZV62TipoCobrancaIdIni3",gxold:"OV62TipoCobrancaIdIni3",gxvar:"AV62TipoCobrancaIdIni3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV62TipoCobrancaIdIni3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV62TipoCobrancaIdIni3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAIDINI3",gx.O.AV62TipoCobrancaIdIni3,0)},c2v:function(){gx.O.AV62TipoCobrancaIdIni3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBRANCAIDINI3",'.')},nac:gx.falseFn};
   GXValidFnc[333]={fld:"TEXTBLOCK80", format:0,grid:0};
   GXValidFnc[335]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAIDFIM3",gxz:"ZV63TipoCobrancaIdFim3",gxold:"OV63TipoCobrancaIdFim3",gxvar:"AV63TipoCobrancaIdFim3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63TipoCobrancaIdFim3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV63TipoCobrancaIdFim3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAIDFIM3",gx.O.AV63TipoCobrancaIdFim3,0)},c2v:function(){gx.O.AV63TipoCobrancaIdFim3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBRANCAIDFIM3",'.')},nac:gx.falseFn};
   GXValidFnc[337]={fld:"TABLE35",grid:0};
   GXValidFnc[340]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAIDINI4",gxz:"ZV64TipoCobrancaIdIni4",gxold:"OV64TipoCobrancaIdIni4",gxvar:"AV64TipoCobrancaIdIni4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64TipoCobrancaIdIni4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV64TipoCobrancaIdIni4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAIDINI4",gx.O.AV64TipoCobrancaIdIni4,0)},c2v:function(){gx.O.AV64TipoCobrancaIdIni4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBRANCAIDINI4",'.')},nac:gx.falseFn};
   GXValidFnc[342]={fld:"TEXTBLOCK81", format:0,grid:0};
   GXValidFnc[344]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAIDFIM4",gxz:"ZV65TipoCobrancaIdFim4",gxold:"OV65TipoCobrancaIdFim4",gxvar:"AV65TipoCobrancaIdFim4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV65TipoCobrancaIdFim4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV65TipoCobrancaIdFim4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAIDFIM4",gx.O.AV65TipoCobrancaIdFim4,0)},c2v:function(){gx.O.AV65TipoCobrancaIdFim4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBRANCAIDFIM4",'.')},nac:gx.falseFn};
   GXValidFnc[346]={fld:"TABLE36",grid:0};
   GXValidFnc[349]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAIDINI5",gxz:"ZV66TipoCobrancaIdIni5",gxold:"OV66TipoCobrancaIdIni5",gxvar:"AV66TipoCobrancaIdIni5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66TipoCobrancaIdIni5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV66TipoCobrancaIdIni5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAIDINI5",gx.O.AV66TipoCobrancaIdIni5,0)},c2v:function(){gx.O.AV66TipoCobrancaIdIni5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBRANCAIDINI5",'.')},nac:gx.falseFn};
   GXValidFnc[351]={fld:"TEXTBLOCK82", format:0,grid:0};
   GXValidFnc[353]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAIDFIM5",gxz:"ZV67TipoCobrancaIdFim5",gxold:"OV67TipoCobrancaIdFim5",gxvar:"AV67TipoCobrancaIdFim5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67TipoCobrancaIdFim5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV67TipoCobrancaIdFim5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAIDFIM5",gx.O.AV67TipoCobrancaIdFim5,0)},c2v:function(){gx.O.AV67TipoCobrancaIdFim5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBRANCAIDFIM5",'.')},nac:gx.falseFn};
   GXValidFnc[356]={fld:"TEXTBLOCK43", format:0,grid:0};
   GXValidFnc[358]={fld:"TABLE37",grid:0};
   GXValidFnc[361]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECBANCOID",gxz:"ZV75ContaPagRecBancoId",gxold:"OV75ContaPagRecBancoId",gxvar:"AV75ContaPagRecBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV75ContaPagRecBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV75ContaPagRecBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECBANCOID",gx.O.AV75ContaPagRecBancoId,0)},c2v:function(){gx.O.AV75ContaPagRecBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECBANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[363]={fld:"TEXTBLOCK83", format:0,grid:0};
   GXValidFnc[365]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECAGENCIAID",gxz:"ZV76ContaPagRecAgenciaId",gxold:"OV76ContaPagRecAgenciaId",gxvar:"AV76ContaPagRecAgenciaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV76ContaPagRecAgenciaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV76ContaPagRecAgenciaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECAGENCIAID",gx.O.AV76ContaPagRecAgenciaId,0)},c2v:function(){gx.O.AV76ContaPagRecAgenciaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECAGENCIAID",'.')},nac:gx.falseFn};
   GXValidFnc[368]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[370]={fld:"TABLE38",grid:0};
   GXValidFnc[373]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCCUSTOIDINI",gxz:"ZV68ContaPagRecCCustoIdIni",gxold:"OV68ContaPagRecCCustoIdIni",gxvar:"AV68ContaPagRecCCustoIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68ContaPagRecCCustoIdIni=Value},v2z:function(Value){gx.O.ZV68ContaPagRecCCustoIdIni=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCCUSTOIDINI",gx.O.AV68ContaPagRecCCustoIdIni,0)},c2v:function(){gx.O.AV68ContaPagRecCCustoIdIni=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECCCUSTOIDINI")},nac:gx.falseFn};
   GXValidFnc[375]={fld:"TEXTBLOCK84", format:0,grid:0};
   GXValidFnc[377]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCCUSTOIDFIM",gxz:"ZV69ContaPagRecCCustoIdFim",gxold:"OV69ContaPagRecCCustoIdFim",gxvar:"AV69ContaPagRecCCustoIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69ContaPagRecCCustoIdFim=Value},v2z:function(Value){gx.O.ZV69ContaPagRecCCustoIdFim=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCCUSTOIDFIM",gx.O.AV69ContaPagRecCCustoIdFim,0)},c2v:function(){gx.O.AV69ContaPagRecCCustoIdFim=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECCCUSTOIDFIM")},nac:gx.falseFn};
   GXValidFnc[380]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[382]={fld:"TABLE39",grid:0};
   GXValidFnc[385]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECNATUREZAIDINI",gxz:"ZV95ContaPagRecNaturezaIdIni",gxold:"OV95ContaPagRecNaturezaIdIni",gxvar:"AV95ContaPagRecNaturezaIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV95ContaPagRecNaturezaIdIni=Value},v2z:function(Value){gx.O.ZV95ContaPagRecNaturezaIdIni=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECNATUREZAIDINI",gx.O.AV95ContaPagRecNaturezaIdIni,0)},c2v:function(){gx.O.AV95ContaPagRecNaturezaIdIni=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECNATUREZAIDINI")},nac:gx.falseFn};
   GXValidFnc[387]={fld:"TEXTBLOCK85", format:0,grid:0};
   GXValidFnc[389]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECNATUREZAIDFIN",gxz:"ZV96ContaPagRecNaturezaIdFin",gxold:"OV96ContaPagRecNaturezaIdFin",gxvar:"AV96ContaPagRecNaturezaIdFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV96ContaPagRecNaturezaIdFin=Value},v2z:function(Value){gx.O.ZV96ContaPagRecNaturezaIdFin=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECNATUREZAIDFIN",gx.O.AV96ContaPagRecNaturezaIdFin,0)},c2v:function(){gx.O.AV96ContaPagRecNaturezaIdFin=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECNATUREZAIDFIN")},nac:gx.falseFn};
   GXValidFnc[398]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESACENTROCUSTOEMPRESAID",gxz:"ZV70EmpresaCentroCustoEmpresaId",gxold:"OV70EmpresaCentroCustoEmpresaId",gxvar:"AV70EmpresaCentroCustoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70EmpresaCentroCustoEmpresaId=Value},v2z:function(Value){gx.O.ZV70EmpresaCentroCustoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESACENTROCUSTOEMPRESAID",gx.O.AV70EmpresaCentroCustoEmpresaId,0)},c2v:function(){gx.O.AV70EmpresaCentroCustoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESACENTROCUSTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[399]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPESSOASEMPRESAID",gxz:"ZV71EmpresaPessoasEmpresaId",gxold:"OV71EmpresaPessoasEmpresaId",gxvar:"AV71EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV71EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPESSOASEMPRESAID",gx.O.AV71EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV71EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[400]={fld:"JS", format:2,grid:0};
   GXValidFnc[401]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDOREMPRESAID",gxz:"ZV82VendedorEmpresaId",gxold:"OV82VendedorEmpresaId",gxvar:"AV82VendedorEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV82VendedorEmpresaId=Value},v2z:function(Value){gx.O.ZV82VendedorEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vVENDEDOREMPRESAID",gx.O.AV82VendedorEmpresaId,0)},c2v:function(){gx.O.AV82VendedorEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vVENDEDOREMPRESAID")},nac:gx.falseFn};
   GXValidFnc[403]={fld:"BTNHELP",grid:0};
   GXValidFnc[404]={fld:"PROMPT_CONTAPAGRECCLIFORIDINI",grid:0};
   GXValidFnc[405]={fld:"PROMPT_CONTAPAGRECCLIFORIDFIM",grid:0};
   GXValidFnc[406]={fld:"PROMPT_CONTAPAGRECVENDIDINI1",grid:0};
   GXValidFnc[407]={fld:"PROMPT_CONTAPAGRECVENDIDFIN1",grid:0};
   GXValidFnc[408]={fld:"PROMPT_CONTAPAGRECVENDIDINI2",grid:0};
   GXValidFnc[409]={fld:"PROMPT_CONTAPAGRECVENDIDFIN2",grid:0};
   GXValidFnc[410]={fld:"PROMPT_CONTAPAGRECVENDIDINI3",grid:0};
   GXValidFnc[411]={fld:"PROMPT_CONTAPAGRECVENDIDFIN3",grid:0};
   GXValidFnc[412]={fld:"PROMPT_CONTAPAGRECVENDIDINI4",grid:0};
   GXValidFnc[413]={fld:"PROMPT_CONTAPAGRECVENDIDFIN4",grid:0};
   GXValidFnc[414]={fld:"PROMPT_CONTAPAGRECVENDIDINI5",grid:0};
   GXValidFnc[415]={fld:"PROMPT_CONTAPAGRECVENDIDFIN5",grid:0};
   GXValidFnc[416]={fld:"PROMPT_FILIALIDINI1",grid:0};
   GXValidFnc[417]={fld:"PROMPT_FILIALIDFIM1",grid:0};
   GXValidFnc[418]={fld:"PROMPT_FILIALIDINI2",grid:0};
   GXValidFnc[419]={fld:"PROMPT_FILIALIDFIM2",grid:0};
   GXValidFnc[420]={fld:"PROMPT_FILIALIDINI3",grid:0};
   GXValidFnc[421]={fld:"PROMPT_FILIALIDFIM3",grid:0};
   GXValidFnc[422]={fld:"PROMPT_FILIALIDINI4",grid:0};
   GXValidFnc[423]={fld:"PROMPT_FILIALIDFIM4",grid:0};
   GXValidFnc[424]={fld:"PROMPT_FILIALIDINI5",grid:0};
   GXValidFnc[425]={fld:"PROMPT_FILIALIDFIM5",grid:0};
   GXValidFnc[426]={fld:"PROMPT_ESPECIEIDINI1",grid:0};
   GXValidFnc[427]={fld:"PROMPT_ESPECIEIDFIM1",grid:0};
   GXValidFnc[428]={fld:"PROMPT_ESPECIEIDINI2",grid:0};
   GXValidFnc[429]={fld:"PROMPT_ESPECIEIDFIM2",grid:0};
   GXValidFnc[430]={fld:"PROMPT_ESPECIEIDINI3",grid:0};
   GXValidFnc[431]={fld:"PROMPT_ESPECIEIDFIM3",grid:0};
   GXValidFnc[432]={fld:"PROMPT_ESPECIEIDINI4",grid:0};
   GXValidFnc[433]={fld:"PROMPT_ESPECIEIDFIM4",grid:0};
   GXValidFnc[434]={fld:"PROMPT_ESPECIEIDINI5",grid:0};
   GXValidFnc[435]={fld:"PROMPT_ESPECIEIDFIM5",grid:0};
   GXValidFnc[436]={fld:"PROMPT_TIPOCONTAIDINI1",grid:0};
   GXValidFnc[437]={fld:"PROMPT_TIPOCONTAIDFIM1",grid:0};
   GXValidFnc[438]={fld:"PROMPT_TIPOCONTAIDINI2",grid:0};
   GXValidFnc[439]={fld:"PROMPT_TIPOCONTAIDFIM2",grid:0};
   GXValidFnc[440]={fld:"PROMPT_TIPOCONTAIDINI3",grid:0};
   GXValidFnc[441]={fld:"PROMPT_TIPOCONTAIDFIM3",grid:0};
   GXValidFnc[442]={fld:"PROMPT_TIPOCONTAIDINI4",grid:0};
   GXValidFnc[443]={fld:"PROMPT_TIPOCONTAIDFIM4",grid:0};
   GXValidFnc[444]={fld:"PROMPT_TIPOCONTAIDINI5",grid:0};
   GXValidFnc[445]={fld:"PROMPT_TIPOCONTAIDFIM5",grid:0};
   GXValidFnc[446]={fld:"PROMPT_TIPOCOBRANCAIDINI1",grid:0};
   GXValidFnc[447]={fld:"PROMPT_TIPOCOBRANCAIDFIM1",grid:0};
   GXValidFnc[448]={fld:"PROMPT_TIPOCOBRANCAIDINI2",grid:0};
   GXValidFnc[449]={fld:"PROMPT_TIPOCOBRANCAIDFIM2",grid:0};
   GXValidFnc[450]={fld:"PROMPT_TIPOCOBRANCAIDINI3",grid:0};
   GXValidFnc[451]={fld:"PROMPT_TIPOCOBRANCAIDFIM3",grid:0};
   GXValidFnc[452]={fld:"PROMPT_TIPOCOBRANCAIDINI4",grid:0};
   GXValidFnc[453]={fld:"PROMPT_TIPOCOBRANCAIDFIM4",grid:0};
   GXValidFnc[454]={fld:"PROMPT_TIPOCOBRANCAIDINI5",grid:0};
   GXValidFnc[455]={fld:"PROMPT_TIPOCOBRANCAIDFIM5",grid:0};
   GXValidFnc[456]={fld:"PROMPT_CONTAPAGRECBANCOID",grid:0};
   GXValidFnc[457]={fld:"PROMPT_CONTAPAGRECAGENCIAID",grid:0};
   GXValidFnc[458]={fld:"PROMPT_CONTAPAGRECCCUSTOIDINI",grid:0};
   GXValidFnc[459]={fld:"PROMPT_CONTAPAGRECCCUSTOIDFIM",grid:0};
   GXValidFnc[460]={fld:"PROMPT_CONTAPAGRECNATUREZAIDINI",grid:0};
   GXValidFnc[461]={fld:"PROMPT_CONTAPAGRECNATUREZAIDFIN",grid:0};
   this.AV115TxtTela = "" ;
   this.ZV115TxtTela = "" ;
   this.OV115TxtTela = "" ;
   this.AV98TipoRelatorio = "" ;
   this.ZV98TipoRelatorio = "" ;
   this.OV98TipoRelatorio = "" ;
   this.AV99TipoVencimento = "" ;
   this.ZV99TipoVencimento = "" ;
   this.OV99TipoVencimento = "" ;
   this.AV100MesIni = 0 ;
   this.ZV100MesIni = 0 ;
   this.OV100MesIni = 0 ;
   this.AV101AnoIni = 0 ;
   this.ZV101AnoIni = 0 ;
   this.OV101AnoIni = 0 ;
   this.AV102MesFin = 0 ;
   this.ZV102MesFin = 0 ;
   this.OV102MesFin = 0 ;
   this.AV103AnoFin = 0 ;
   this.ZV103AnoFin = 0 ;
   this.OV103AnoFin = 0 ;
   this.AV20ContaPagRecCliForIdIni = 0 ;
   this.ZV20ContaPagRecCliForIdIni = 0 ;
   this.OV20ContaPagRecCliForIdIni = 0 ;
   this.AV84ContaPagRecCliForIdFim = 0 ;
   this.ZV84ContaPagRecCliForIdFim = 0 ;
   this.OV84ContaPagRecCliForIdFim = 0 ;
   this.AV21ImprimirCliForNormal = "" ;
   this.ZV21ImprimirCliForNormal = "" ;
   this.OV21ImprimirCliForNormal = "" ;
   this.AV22ImprimirCliForSuspenso = "" ;
   this.ZV22ImprimirCliForSuspenso = "" ;
   this.OV22ImprimirCliForSuspenso = "" ;
   this.AV23ImprimirCliForCancelado = "" ;
   this.ZV23ImprimirCliForCancelado = "" ;
   this.OV23ImprimirCliForCancelado = "" ;
   this.AV24DataEmissaoIni = gx.date.nullDate() ;
   this.ZV24DataEmissaoIni = gx.date.nullDate() ;
   this.OV24DataEmissaoIni = gx.date.nullDate() ;
   this.AV25DataEmissaoFim = gx.date.nullDate() ;
   this.ZV25DataEmissaoFim = gx.date.nullDate() ;
   this.OV25DataEmissaoFim = gx.date.nullDate() ;
   this.AV73DataPagamentoIni = gx.date.nullDate() ;
   this.ZV73DataPagamentoIni = gx.date.nullDate() ;
   this.OV73DataPagamentoIni = gx.date.nullDate() ;
   this.AV74DataPagamentoFim = gx.date.nullDate() ;
   this.ZV74DataPagamentoFim = gx.date.nullDate() ;
   this.OV74DataPagamentoFim = gx.date.nullDate() ;
   this.AV85ContaPagRecVendIdIni1 = 0 ;
   this.ZV85ContaPagRecVendIdIni1 = 0 ;
   this.OV85ContaPagRecVendIdIni1 = 0 ;
   this.AV90ContaPagRecVendIdFin1 = 0 ;
   this.ZV90ContaPagRecVendIdFin1 = 0 ;
   this.OV90ContaPagRecVendIdFin1 = 0 ;
   this.AV86ContaPagRecVendIdIni2 = 0 ;
   this.ZV86ContaPagRecVendIdIni2 = 0 ;
   this.OV86ContaPagRecVendIdIni2 = 0 ;
   this.AV91ContaPagRecVendIdFin2 = 0 ;
   this.ZV91ContaPagRecVendIdFin2 = 0 ;
   this.OV91ContaPagRecVendIdFin2 = 0 ;
   this.AV87ContaPagRecVendIdIni3 = 0 ;
   this.ZV87ContaPagRecVendIdIni3 = 0 ;
   this.OV87ContaPagRecVendIdIni3 = 0 ;
   this.AV92ContaPagRecVendIdFin3 = 0 ;
   this.ZV92ContaPagRecVendIdFin3 = 0 ;
   this.OV92ContaPagRecVendIdFin3 = 0 ;
   this.AV88ContaPagRecVendIdIni4 = 0 ;
   this.ZV88ContaPagRecVendIdIni4 = 0 ;
   this.OV88ContaPagRecVendIdIni4 = 0 ;
   this.AV93ContaPagRecVendIdFin4 = 0 ;
   this.ZV93ContaPagRecVendIdFin4 = 0 ;
   this.OV93ContaPagRecVendIdFin4 = 0 ;
   this.AV89ContaPagRecVendIdIni5 = 0 ;
   this.ZV89ContaPagRecVendIdIni5 = 0 ;
   this.OV89ContaPagRecVendIdIni5 = 0 ;
   this.AV94ContaPagRecVendIdFin5 = 0 ;
   this.ZV94ContaPagRecVendIdFin5 = 0 ;
   this.OV94ContaPagRecVendIdFin5 = 0 ;
   this.AV28FilialIdIni1 = 0 ;
   this.ZV28FilialIdIni1 = 0 ;
   this.OV28FilialIdIni1 = 0 ;
   this.AV29FilialIdFim1 = 0 ;
   this.ZV29FilialIdFim1 = 0 ;
   this.OV29FilialIdFim1 = 0 ;
   this.AV30FilialIdIni2 = 0 ;
   this.ZV30FilialIdIni2 = 0 ;
   this.OV30FilialIdIni2 = 0 ;
   this.AV31FilialIdFim2 = 0 ;
   this.ZV31FilialIdFim2 = 0 ;
   this.OV31FilialIdFim2 = 0 ;
   this.AV32FilialIdIni3 = 0 ;
   this.ZV32FilialIdIni3 = 0 ;
   this.OV32FilialIdIni3 = 0 ;
   this.AV33FilialIdFim3 = 0 ;
   this.ZV33FilialIdFim3 = 0 ;
   this.OV33FilialIdFim3 = 0 ;
   this.AV34FilialIdIni4 = 0 ;
   this.ZV34FilialIdIni4 = 0 ;
   this.OV34FilialIdIni4 = 0 ;
   this.AV35FilialIdFim4 = 0 ;
   this.ZV35FilialIdFim4 = 0 ;
   this.OV35FilialIdFim4 = 0 ;
   this.AV36FilialIdIni5 = 0 ;
   this.ZV36FilialIdIni5 = 0 ;
   this.OV36FilialIdIni5 = 0 ;
   this.AV37FilialIdFim5 = 0 ;
   this.ZV37FilialIdFim5 = 0 ;
   this.OV37FilialIdFim5 = 0 ;
   this.AV38EspecieIdIni1 = 0 ;
   this.ZV38EspecieIdIni1 = 0 ;
   this.OV38EspecieIdIni1 = 0 ;
   this.AV39EspecieIdFim1 = 0 ;
   this.ZV39EspecieIdFim1 = 0 ;
   this.OV39EspecieIdFim1 = 0 ;
   this.AV40EspecieIdIni2 = 0 ;
   this.ZV40EspecieIdIni2 = 0 ;
   this.OV40EspecieIdIni2 = 0 ;
   this.AV41EspecieIdFim2 = 0 ;
   this.ZV41EspecieIdFim2 = 0 ;
   this.OV41EspecieIdFim2 = 0 ;
   this.AV42EspecieIdIni3 = 0 ;
   this.ZV42EspecieIdIni3 = 0 ;
   this.OV42EspecieIdIni3 = 0 ;
   this.AV43EspecieIdFim3 = 0 ;
   this.ZV43EspecieIdFim3 = 0 ;
   this.OV43EspecieIdFim3 = 0 ;
   this.AV44EspecieIdIni4 = 0 ;
   this.ZV44EspecieIdIni4 = 0 ;
   this.OV44EspecieIdIni4 = 0 ;
   this.AV45EspecieIdFim4 = 0 ;
   this.ZV45EspecieIdFim4 = 0 ;
   this.OV45EspecieIdFim4 = 0 ;
   this.AV46EspecieIdIni5 = 0 ;
   this.ZV46EspecieIdIni5 = 0 ;
   this.OV46EspecieIdIni5 = 0 ;
   this.AV47EspecieIdFim5 = 0 ;
   this.ZV47EspecieIdFim5 = 0 ;
   this.OV47EspecieIdFim5 = 0 ;
   this.AV48TipoContaIdIni1 = 0 ;
   this.ZV48TipoContaIdIni1 = 0 ;
   this.OV48TipoContaIdIni1 = 0 ;
   this.AV49TipoContaIdFim1 = 0 ;
   this.ZV49TipoContaIdFim1 = 0 ;
   this.OV49TipoContaIdFim1 = 0 ;
   this.AV50TipoContaIdIni2 = 0 ;
   this.ZV50TipoContaIdIni2 = 0 ;
   this.OV50TipoContaIdIni2 = 0 ;
   this.AV51TipoContaIdFim2 = 0 ;
   this.ZV51TipoContaIdFim2 = 0 ;
   this.OV51TipoContaIdFim2 = 0 ;
   this.AV52TipoContaIdIni3 = 0 ;
   this.ZV52TipoContaIdIni3 = 0 ;
   this.OV52TipoContaIdIni3 = 0 ;
   this.AV53TipoContaIdFim3 = 0 ;
   this.ZV53TipoContaIdFim3 = 0 ;
   this.OV53TipoContaIdFim3 = 0 ;
   this.AV54TipoContaIdIni4 = 0 ;
   this.ZV54TipoContaIdIni4 = 0 ;
   this.OV54TipoContaIdIni4 = 0 ;
   this.AV55TipoContaIdFim4 = 0 ;
   this.ZV55TipoContaIdFim4 = 0 ;
   this.OV55TipoContaIdFim4 = 0 ;
   this.AV56TipoContaIdIni5 = 0 ;
   this.ZV56TipoContaIdIni5 = 0 ;
   this.OV56TipoContaIdIni5 = 0 ;
   this.AV57TipoContaIdFim5 = 0 ;
   this.ZV57TipoContaIdFim5 = 0 ;
   this.OV57TipoContaIdFim5 = 0 ;
   this.AV58TipoCobrancaIdIni1 = 0 ;
   this.ZV58TipoCobrancaIdIni1 = 0 ;
   this.OV58TipoCobrancaIdIni1 = 0 ;
   this.AV59TipoCobrancaIdFim1 = 0 ;
   this.ZV59TipoCobrancaIdFim1 = 0 ;
   this.OV59TipoCobrancaIdFim1 = 0 ;
   this.AV60TipoCobrancaIdIni2 = 0 ;
   this.ZV60TipoCobrancaIdIni2 = 0 ;
   this.OV60TipoCobrancaIdIni2 = 0 ;
   this.AV61TipoCobrancaIdFim2 = 0 ;
   this.ZV61TipoCobrancaIdFim2 = 0 ;
   this.OV61TipoCobrancaIdFim2 = 0 ;
   this.AV62TipoCobrancaIdIni3 = 0 ;
   this.ZV62TipoCobrancaIdIni3 = 0 ;
   this.OV62TipoCobrancaIdIni3 = 0 ;
   this.AV63TipoCobrancaIdFim3 = 0 ;
   this.ZV63TipoCobrancaIdFim3 = 0 ;
   this.OV63TipoCobrancaIdFim3 = 0 ;
   this.AV64TipoCobrancaIdIni4 = 0 ;
   this.ZV64TipoCobrancaIdIni4 = 0 ;
   this.OV64TipoCobrancaIdIni4 = 0 ;
   this.AV65TipoCobrancaIdFim4 = 0 ;
   this.ZV65TipoCobrancaIdFim4 = 0 ;
   this.OV65TipoCobrancaIdFim4 = 0 ;
   this.AV66TipoCobrancaIdIni5 = 0 ;
   this.ZV66TipoCobrancaIdIni5 = 0 ;
   this.OV66TipoCobrancaIdIni5 = 0 ;
   this.AV67TipoCobrancaIdFim5 = 0 ;
   this.ZV67TipoCobrancaIdFim5 = 0 ;
   this.OV67TipoCobrancaIdFim5 = 0 ;
   this.AV75ContaPagRecBancoId = 0 ;
   this.ZV75ContaPagRecBancoId = 0 ;
   this.OV75ContaPagRecBancoId = 0 ;
   this.AV76ContaPagRecAgenciaId = 0 ;
   this.ZV76ContaPagRecAgenciaId = 0 ;
   this.OV76ContaPagRecAgenciaId = 0 ;
   this.AV68ContaPagRecCCustoIdIni = "" ;
   this.ZV68ContaPagRecCCustoIdIni = "" ;
   this.OV68ContaPagRecCCustoIdIni = "" ;
   this.AV69ContaPagRecCCustoIdFim = "" ;
   this.ZV69ContaPagRecCCustoIdFim = "" ;
   this.OV69ContaPagRecCCustoIdFim = "" ;
   this.AV95ContaPagRecNaturezaIdIni = "" ;
   this.ZV95ContaPagRecNaturezaIdIni = "" ;
   this.OV95ContaPagRecNaturezaIdIni = "" ;
   this.AV96ContaPagRecNaturezaIdFin = "" ;
   this.ZV96ContaPagRecNaturezaIdFin = "" ;
   this.OV96ContaPagRecNaturezaIdFin = "" ;
   this.AV70EmpresaCentroCustoEmpresaId = "" ;
   this.ZV70EmpresaCentroCustoEmpresaId = "" ;
   this.OV70EmpresaCentroCustoEmpresaId = "" ;
   this.AV71EmpresaPessoasEmpresaId = "" ;
   this.ZV71EmpresaPessoasEmpresaId = "" ;
   this.OV71EmpresaPessoasEmpresaId = "" ;
   this.AV82VendedorEmpresaId = "" ;
   this.ZV82VendedorEmpresaId = "" ;
   this.OV82VendedorEmpresaId = "" ;
   this.AV115TxtTela = "" ;
   this.AV98TipoRelatorio = "" ;
   this.AV99TipoVencimento = "" ;
   this.AV100MesIni = 0 ;
   this.AV101AnoIni = 0 ;
   this.AV102MesFin = 0 ;
   this.AV103AnoFin = 0 ;
   this.AV20ContaPagRecCliForIdIni = 0 ;
   this.AV84ContaPagRecCliForIdFim = 0 ;
   this.AV21ImprimirCliForNormal = "" ;
   this.AV22ImprimirCliForSuspenso = "" ;
   this.AV23ImprimirCliForCancelado = "" ;
   this.AV24DataEmissaoIni = gx.date.nullDate() ;
   this.AV25DataEmissaoFim = gx.date.nullDate() ;
   this.AV73DataPagamentoIni = gx.date.nullDate() ;
   this.AV74DataPagamentoFim = gx.date.nullDate() ;
   this.AV85ContaPagRecVendIdIni1 = 0 ;
   this.AV90ContaPagRecVendIdFin1 = 0 ;
   this.AV86ContaPagRecVendIdIni2 = 0 ;
   this.AV91ContaPagRecVendIdFin2 = 0 ;
   this.AV87ContaPagRecVendIdIni3 = 0 ;
   this.AV92ContaPagRecVendIdFin3 = 0 ;
   this.AV88ContaPagRecVendIdIni4 = 0 ;
   this.AV93ContaPagRecVendIdFin4 = 0 ;
   this.AV89ContaPagRecVendIdIni5 = 0 ;
   this.AV94ContaPagRecVendIdFin5 = 0 ;
   this.AV28FilialIdIni1 = 0 ;
   this.AV29FilialIdFim1 = 0 ;
   this.AV30FilialIdIni2 = 0 ;
   this.AV31FilialIdFim2 = 0 ;
   this.AV32FilialIdIni3 = 0 ;
   this.AV33FilialIdFim3 = 0 ;
   this.AV34FilialIdIni4 = 0 ;
   this.AV35FilialIdFim4 = 0 ;
   this.AV36FilialIdIni5 = 0 ;
   this.AV37FilialIdFim5 = 0 ;
   this.AV38EspecieIdIni1 = 0 ;
   this.AV39EspecieIdFim1 = 0 ;
   this.AV40EspecieIdIni2 = 0 ;
   this.AV41EspecieIdFim2 = 0 ;
   this.AV42EspecieIdIni3 = 0 ;
   this.AV43EspecieIdFim3 = 0 ;
   this.AV44EspecieIdIni4 = 0 ;
   this.AV45EspecieIdFim4 = 0 ;
   this.AV46EspecieIdIni5 = 0 ;
   this.AV47EspecieIdFim5 = 0 ;
   this.AV48TipoContaIdIni1 = 0 ;
   this.AV49TipoContaIdFim1 = 0 ;
   this.AV50TipoContaIdIni2 = 0 ;
   this.AV51TipoContaIdFim2 = 0 ;
   this.AV52TipoContaIdIni3 = 0 ;
   this.AV53TipoContaIdFim3 = 0 ;
   this.AV54TipoContaIdIni4 = 0 ;
   this.AV55TipoContaIdFim4 = 0 ;
   this.AV56TipoContaIdIni5 = 0 ;
   this.AV57TipoContaIdFim5 = 0 ;
   this.AV58TipoCobrancaIdIni1 = 0 ;
   this.AV59TipoCobrancaIdFim1 = 0 ;
   this.AV60TipoCobrancaIdIni2 = 0 ;
   this.AV61TipoCobrancaIdFim2 = 0 ;
   this.AV62TipoCobrancaIdIni3 = 0 ;
   this.AV63TipoCobrancaIdFim3 = 0 ;
   this.AV64TipoCobrancaIdIni4 = 0 ;
   this.AV65TipoCobrancaIdFim4 = 0 ;
   this.AV66TipoCobrancaIdIni5 = 0 ;
   this.AV67TipoCobrancaIdFim5 = 0 ;
   this.AV75ContaPagRecBancoId = 0 ;
   this.AV76ContaPagRecAgenciaId = 0 ;
   this.AV68ContaPagRecCCustoIdIni = "" ;
   this.AV69ContaPagRecCCustoIdFim = "" ;
   this.AV95ContaPagRecNaturezaIdIni = "" ;
   this.AV96ContaPagRecNaturezaIdFin = "" ;
   this.AV70EmpresaCentroCustoEmpresaId = "" ;
   this.AV71EmpresaPessoasEmpresaId = "" ;
   this.AV82VendedorEmpresaId = "" ;
   this.AV72ContaPagRecPagRecAux = "" ;
   this.A75UsuarioId = "" ;
   this.A1564UsuarioFilialId = 0 ;
   this.AV27DataVencimentoFim = gx.date.nullDate() ;
   this.AV26DataVencimentoIni = gx.date.nullDate() ;
   this.AV104DtString = "" ;
   this.AV97TpErro = 0 ;
   this.Events = {"e11h32_client": ["'FECHAR'", true] ,"e13h32_client": ["ENTER", true] ,"e15h32_client": ["'SALVARTXT'", true] ,"e16h32_client": ["VTXTTELA.CLICK", true] ,"e17h32_client": ["'EXCLUIRTXT'", true] ,"e19h32_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV136Pgmname',fld:'vPGMNAME'},{av:'AV72ContaPagRecPagRecAux',fld:'vCONTAPAGRECPAGRECAUX',hsh:true},{av:'AV131SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'A1564UsuarioFilialId',fld:'USUARIOFILIALID'},{av:'AV115TxtTela',fld:'vTXTTELA'}],[{av:'AV133NomeTela',fld:'vNOMETELA'},{av:'AV115TxtTela',fld:'vTXTTELA'},{av:'AV140GXV2',fld:'vGXV2'},{av:'AV132SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV28FilialIdIni1',fld:'vFILIALIDINI1'},{av:'AV29FilialIdFim1',fld:'vFILIALIDFIM1'},{av:'gx.fn.getCtrlProperty("vFILIALIDINI1","Enabled")',ctrl:'vFILIALIDINI1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALIDFIM1","Enabled")',ctrl:'vFILIALIDFIM1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALIDINI2","Enabled")',ctrl:'vFILIALIDINI2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALIDFIM2","Enabled")',ctrl:'vFILIALIDFIM2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALIDINI3","Enabled")',ctrl:'vFILIALIDINI3',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALIDFIM3","Enabled")',ctrl:'vFILIALIDFIM3',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALIDINI4","Enabled")',ctrl:'vFILIALIDINI4',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALIDFIM4","Enabled")',ctrl:'vFILIALIDFIM4',prop:'Enabled'},{av:'AV139GXV1',fld:'vGXV1'},{av:'AV98TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV99TipoVencimento',fld:'vTIPOVENCIMENTO'},{av:'AV21ImprimirCliForNormal',fld:'vIMPRIMIRCLIFORNORMAL'},{av:'AV22ImprimirCliForSuspenso',fld:'vIMPRIMIRCLIFORSUSPENSO'},{av:'AV23ImprimirCliForCancelado',fld:'vIMPRIMIRCLIFORCANCELADO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV97TpErro',fld:'vTPERRO'},{av:'AV115TxtTela',fld:'vTXTTELA'},{av:'AV136Pgmname',fld:'vPGMNAME'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV98TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV99TipoVencimento',fld:'vTIPOVENCIMENTO'},{av:'AV26DataVencimentoIni',fld:'vDATAVENCIMENTOINI'},{av:'AV27DataVencimentoFim',fld:'vDATAVENCIMENTOFIM'},{av:'AV20ContaPagRecCliForIdIni',fld:'vCONTAPAGRECCLIFORIDINI'},{av:'AV84ContaPagRecCliForIdFim',fld:'vCONTAPAGRECCLIFORIDFIM'},{av:'AV21ImprimirCliForNormal',fld:'vIMPRIMIRCLIFORNORMAL'},{av:'AV22ImprimirCliForSuspenso',fld:'vIMPRIMIRCLIFORSUSPENSO'},{av:'AV23ImprimirCliForCancelado',fld:'vIMPRIMIRCLIFORCANCELADO'},{av:'AV24DataEmissaoIni',fld:'vDATAEMISSAOINI'},{av:'AV25DataEmissaoFim',fld:'vDATAEMISSAOFIM'},{av:'AV73DataPagamentoIni',fld:'vDATAPAGAMENTOINI'},{av:'AV74DataPagamentoFim',fld:'vDATAPAGAMENTOFIM'},{av:'AV85ContaPagRecVendIdIni1',fld:'vCONTAPAGRECVENDIDINI1'},{av:'AV90ContaPagRecVendIdFin1',fld:'vCONTAPAGRECVENDIDFIN1'},{av:'AV86ContaPagRecVendIdIni2',fld:'vCONTAPAGRECVENDIDINI2'},{av:'AV91ContaPagRecVendIdFin2',fld:'vCONTAPAGRECVENDIDFIN2'},{av:'AV87ContaPagRecVendIdIni3',fld:'vCONTAPAGRECVENDIDINI3'},{av:'AV92ContaPagRecVendIdFin3',fld:'vCONTAPAGRECVENDIDFIN3'},{av:'AV88ContaPagRecVendIdIni4',fld:'vCONTAPAGRECVENDIDINI4'},{av:'AV93ContaPagRecVendIdFin4',fld:'vCONTAPAGRECVENDIDFIN4'},{av:'AV89ContaPagRecVendIdIni5',fld:'vCONTAPAGRECVENDIDINI5'},{av:'AV94ContaPagRecVendIdFin5',fld:'vCONTAPAGRECVENDIDFIN5'},{av:'AV28FilialIdIni1',fld:'vFILIALIDINI1'},{av:'AV29FilialIdFim1',fld:'vFILIALIDFIM1'},{av:'AV30FilialIdIni2',fld:'vFILIALIDINI2'},{av:'AV31FilialIdFim2',fld:'vFILIALIDFIM2'},{av:'AV32FilialIdIni3',fld:'vFILIALIDINI3'},{av:'AV33FilialIdFim3',fld:'vFILIALIDFIM3'},{av:'AV34FilialIdIni4',fld:'vFILIALIDINI4'},{av:'AV35FilialIdFim4',fld:'vFILIALIDFIM4'},{av:'AV36FilialIdIni5',fld:'vFILIALIDINI5'},{av:'AV37FilialIdFim5',fld:'vFILIALIDFIM5'},{av:'AV38EspecieIdIni1',fld:'vESPECIEIDINI1'},{av:'AV39EspecieIdFim1',fld:'vESPECIEIDFIM1'},{av:'AV40EspecieIdIni2',fld:'vESPECIEIDINI2'},{av:'AV41EspecieIdFim2',fld:'vESPECIEIDFIM2'},{av:'AV42EspecieIdIni3',fld:'vESPECIEIDINI3'},{av:'AV43EspecieIdFim3',fld:'vESPECIEIDFIM3'},{av:'AV44EspecieIdIni4',fld:'vESPECIEIDINI4'},{av:'AV45EspecieIdFim4',fld:'vESPECIEIDFIM4'},{av:'AV46EspecieIdIni5',fld:'vESPECIEIDINI5'},{av:'AV47EspecieIdFim5',fld:'vESPECIEIDFIM5'},{av:'AV48TipoContaIdIni1',fld:'vTIPOCONTAIDINI1'},{av:'AV49TipoContaIdFim1',fld:'vTIPOCONTAIDFIM1'},{av:'AV50TipoContaIdIni2',fld:'vTIPOCONTAIDINI2'},{av:'AV51TipoContaIdFim2',fld:'vTIPOCONTAIDFIM2'},{av:'AV52TipoContaIdIni3',fld:'vTIPOCONTAIDINI3'},{av:'AV53TipoContaIdFim3',fld:'vTIPOCONTAIDFIM3'},{av:'AV54TipoContaIdIni4',fld:'vTIPOCONTAIDINI4'},{av:'AV55TipoContaIdFim4',fld:'vTIPOCONTAIDFIM4'},{av:'AV56TipoContaIdIni5',fld:'vTIPOCONTAIDINI5'},{av:'AV57TipoContaIdFim5',fld:'vTIPOCONTAIDFIM5'},{av:'AV58TipoCobrancaIdIni1',fld:'vTIPOCOBRANCAIDINI1'},{av:'AV59TipoCobrancaIdFim1',fld:'vTIPOCOBRANCAIDFIM1'},{av:'AV60TipoCobrancaIdIni2',fld:'vTIPOCOBRANCAIDINI2'},{av:'AV61TipoCobrancaIdFim2',fld:'vTIPOCOBRANCAIDFIM2'},{av:'AV62TipoCobrancaIdIni3',fld:'vTIPOCOBRANCAIDINI3'},{av:'AV63TipoCobrancaIdFim3',fld:'vTIPOCOBRANCAIDFIM3'},{av:'AV64TipoCobrancaIdIni4',fld:'vTIPOCOBRANCAIDINI4'},{av:'AV65TipoCobrancaIdFim4',fld:'vTIPOCOBRANCAIDFIM4'},{av:'AV66TipoCobrancaIdIni5',fld:'vTIPOCOBRANCAIDINI5'},{av:'AV67TipoCobrancaIdFim5',fld:'vTIPOCOBRANCAIDFIM5'},{av:'AV75ContaPagRecBancoId',fld:'vCONTAPAGRECBANCOID'},{av:'AV76ContaPagRecAgenciaId',fld:'vCONTAPAGRECAGENCIAID'},{av:'AV68ContaPagRecCCustoIdIni',fld:'vCONTAPAGRECCCUSTOIDINI'},{av:'AV69ContaPagRecCCustoIdFim',fld:'vCONTAPAGRECCCUSTOIDFIM'},{av:'AV95ContaPagRecNaturezaIdIni',fld:'vCONTAPAGRECNATUREZAIDINI'},{av:'AV96ContaPagRecNaturezaIdFin',fld:'vCONTAPAGRECNATUREZAIDFIN'},{av:'AV80ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC'},{av:'AV137Pgmdesc',fld:'vPGMDESC'},{av:'AV100MesIni',fld:'vMESINI'},{av:'AV101AnoIni',fld:'vANOINI'},{av:'AV102MesFin',fld:'vMESFIN'},{av:'AV103AnoFin',fld:'vANOFIN'},{av:'AV72ContaPagRecPagRecAux',fld:'vCONTAPAGRECPAGRECAUX',hsh:true},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV127SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV80ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC'},{av:'AV96ContaPagRecNaturezaIdFin',fld:'vCONTAPAGRECNATUREZAIDFIN'},{av:'AV95ContaPagRecNaturezaIdIni',fld:'vCONTAPAGRECNATUREZAIDINI'},{av:'AV69ContaPagRecCCustoIdFim',fld:'vCONTAPAGRECCCUSTOIDFIM'},{av:'AV68ContaPagRecCCustoIdIni',fld:'vCONTAPAGRECCCUSTOIDINI'},{av:'AV76ContaPagRecAgenciaId',fld:'vCONTAPAGRECAGENCIAID'},{av:'AV75ContaPagRecBancoId',fld:'vCONTAPAGRECBANCOID'},{av:'AV67TipoCobrancaIdFim5',fld:'vTIPOCOBRANCAIDFIM5'},{av:'AV66TipoCobrancaIdIni5',fld:'vTIPOCOBRANCAIDINI5'},{av:'AV65TipoCobrancaIdFim4',fld:'vTIPOCOBRANCAIDFIM4'},{av:'AV64TipoCobrancaIdIni4',fld:'vTIPOCOBRANCAIDINI4'},{av:'AV63TipoCobrancaIdFim3',fld:'vTIPOCOBRANCAIDFIM3'},{av:'AV62TipoCobrancaIdIni3',fld:'vTIPOCOBRANCAIDINI3'},{av:'AV61TipoCobrancaIdFim2',fld:'vTIPOCOBRANCAIDFIM2'},{av:'AV60TipoCobrancaIdIni2',fld:'vTIPOCOBRANCAIDINI2'},{av:'AV59TipoCobrancaIdFim1',fld:'vTIPOCOBRANCAIDFIM1'},{av:'AV58TipoCobrancaIdIni1',fld:'vTIPOCOBRANCAIDINI1'},{av:'AV57TipoContaIdFim5',fld:'vTIPOCONTAIDFIM5'},{av:'AV56TipoContaIdIni5',fld:'vTIPOCONTAIDINI5'},{av:'AV55TipoContaIdFim4',fld:'vTIPOCONTAIDFIM4'},{av:'AV54TipoContaIdIni4',fld:'vTIPOCONTAIDINI4'},{av:'AV53TipoContaIdFim3',fld:'vTIPOCONTAIDFIM3'},{av:'AV52TipoContaIdIni3',fld:'vTIPOCONTAIDINI3'},{av:'AV51TipoContaIdFim2',fld:'vTIPOCONTAIDFIM2'},{av:'AV50TipoContaIdIni2',fld:'vTIPOCONTAIDINI2'},{av:'AV49TipoContaIdFim1',fld:'vTIPOCONTAIDFIM1'},{av:'AV48TipoContaIdIni1',fld:'vTIPOCONTAIDINI1'},{av:'AV47EspecieIdFim5',fld:'vESPECIEIDFIM5'},{av:'AV46EspecieIdIni5',fld:'vESPECIEIDINI5'},{av:'AV45EspecieIdFim4',fld:'vESPECIEIDFIM4'},{av:'AV44EspecieIdIni4',fld:'vESPECIEIDINI4'},{av:'AV43EspecieIdFim3',fld:'vESPECIEIDFIM3'},{av:'AV42EspecieIdIni3',fld:'vESPECIEIDINI3'},{av:'AV41EspecieIdFim2',fld:'vESPECIEIDFIM2'},{av:'AV40EspecieIdIni2',fld:'vESPECIEIDINI2'},{av:'AV39EspecieIdFim1',fld:'vESPECIEIDFIM1'},{av:'AV38EspecieIdIni1',fld:'vESPECIEIDINI1'},{av:'AV37FilialIdFim5',fld:'vFILIALIDFIM5'},{av:'AV36FilialIdIni5',fld:'vFILIALIDINI5'},{av:'AV35FilialIdFim4',fld:'vFILIALIDFIM4'},{av:'AV34FilialIdIni4',fld:'vFILIALIDINI4'},{av:'AV33FilialIdFim3',fld:'vFILIALIDFIM3'},{av:'AV32FilialIdIni3',fld:'vFILIALIDINI3'},{av:'AV31FilialIdFim2',fld:'vFILIALIDFIM2'},{av:'AV30FilialIdIni2',fld:'vFILIALIDINI2'},{av:'AV29FilialIdFim1',fld:'vFILIALIDFIM1'},{av:'AV28FilialIdIni1',fld:'vFILIALIDINI1'},{av:'AV94ContaPagRecVendIdFin5',fld:'vCONTAPAGRECVENDIDFIN5'},{av:'AV89ContaPagRecVendIdIni5',fld:'vCONTAPAGRECVENDIDINI5'},{av:'AV93ContaPagRecVendIdFin4',fld:'vCONTAPAGRECVENDIDFIN4'},{av:'AV88ContaPagRecVendIdIni4',fld:'vCONTAPAGRECVENDIDINI4'},{av:'AV92ContaPagRecVendIdFin3',fld:'vCONTAPAGRECVENDIDFIN3'},{av:'AV87ContaPagRecVendIdIni3',fld:'vCONTAPAGRECVENDIDINI3'},{av:'AV91ContaPagRecVendIdFin2',fld:'vCONTAPAGRECVENDIDFIN2'},{av:'AV86ContaPagRecVendIdIni2',fld:'vCONTAPAGRECVENDIDINI2'},{av:'AV90ContaPagRecVendIdFin1',fld:'vCONTAPAGRECVENDIDFIN1'},{av:'AV85ContaPagRecVendIdIni1',fld:'vCONTAPAGRECVENDIDINI1'},{av:'AV74DataPagamentoFim',fld:'vDATAPAGAMENTOFIM'},{av:'AV73DataPagamentoIni',fld:'vDATAPAGAMENTOINI'},{av:'AV25DataEmissaoFim',fld:'vDATAEMISSAOFIM'},{av:'AV24DataEmissaoIni',fld:'vDATAEMISSAOINI'},{av:'AV23ImprimirCliForCancelado',fld:'vIMPRIMIRCLIFORCANCELADO'},{av:'AV22ImprimirCliForSuspenso',fld:'vIMPRIMIRCLIFORSUSPENSO'},{av:'AV21ImprimirCliForNormal',fld:'vIMPRIMIRCLIFORNORMAL'},{av:'AV84ContaPagRecCliForIdFim',fld:'vCONTAPAGRECCLIFORIDFIM'},{av:'AV20ContaPagRecCliForIdIni',fld:'vCONTAPAGRECCLIFORIDINI'},{av:'AV27DataVencimentoFim',fld:'vDATAVENCIMENTOFIM'},{av:'AV26DataVencimentoIni',fld:'vDATAVENCIMENTOINI'},{av:'AV99TipoVencimento',fld:'vTIPOVENCIMENTO'},{av:'AV98TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV97TpErro',fld:'vTPERRO'},{av:'AV104DtString',fld:'vDTSTRING'},{av:'AV133NomeTela',fld:'vNOMETELA'},{av:'AV130OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV136Pgmname',fld:'vPGMNAME'},{av:'AV72ContaPagRecPagRecAux',fld:'vCONTAPAGRECPAGRECAUX',hsh:true},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV115TxtTela',fld:'vTXTTELA'},{av:'AV98TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV99TipoVencimento',fld:'vTIPOVENCIMENTO'},{av:'AV21ImprimirCliForNormal',fld:'vIMPRIMIRCLIFORNORMAL'},{av:'AV22ImprimirCliForSuspenso',fld:'vIMPRIMIRCLIFORSUSPENSO'},{av:'AV23ImprimirCliForCancelado',fld:'vIMPRIMIRCLIFORCANCELADO'}],[{av:'AV133NomeTela',fld:'vNOMETELA'},{av:'AV130OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV136Pgmname',fld:'vPGMNAME'},{av:'AV72ContaPagRecPagRecAux',fld:'vCONTAPAGRECPAGRECAUX',hsh:true},{av:'AV131SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV115TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV133NomeTela',fld:'vNOMETELA'},{av:'AV139GXV1',fld:'vGXV1'},{av:'AV132SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV98TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV99TipoVencimento',fld:'vTIPOVENCIMENTO'},{av:'AV21ImprimirCliForNormal',fld:'vIMPRIMIRCLIFORNORMAL'},{av:'AV22ImprimirCliForSuspenso',fld:'vIMPRIMIRCLIFORSUSPENSO'},{av:'AV23ImprimirCliForCancelado',fld:'vIMPRIMIRCLIFORCANCELADO'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV136Pgmname',fld:'vPGMNAME'},{av:'AV72ContaPagRecPagRecAux',fld:'vCONTAPAGRECPAGRECAUX',hsh:true},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV115TxtTela',fld:'vTXTTELA'}],[{av:'AV133NomeTela',fld:'vNOMETELA'}]];
   this.setPrompt("PROMPT_CONTAPAGRECCLIFORIDINI", [66]);
   this.setPrompt("PROMPT_CONTAPAGRECCLIFORIDFIM", [70]);
   this.setPrompt("PROMPT_CONTAPAGRECVENDIDINI1", [121]);
   this.setPrompt("PROMPT_CONTAPAGRECVENDIDFIN1", [125]);
   this.setPrompt("PROMPT_CONTAPAGRECVENDIDINI2", [130]);
   this.setPrompt("PROMPT_CONTAPAGRECVENDIDFIN2", [134]);
   this.setPrompt("PROMPT_CONTAPAGRECVENDIDINI3", [139]);
   this.setPrompt("PROMPT_CONTAPAGRECVENDIDFIN3", [143]);
   this.setPrompt("PROMPT_CONTAPAGRECVENDIDINI4", [148]);
   this.setPrompt("PROMPT_CONTAPAGRECVENDIDFIN4", [152]);
   this.setPrompt("PROMPT_CONTAPAGRECVENDIDINI5", [157]);
   this.setPrompt("PROMPT_CONTAPAGRECVENDIDFIN5", [161]);
   this.setPrompt("PROMPT_FILIALIDINI1", [169]);
   this.setPrompt("PROMPT_FILIALIDFIM1", [173]);
   this.setPrompt("PROMPT_FILIALIDINI2", [178]);
   this.setPrompt("PROMPT_FILIALIDFIM2", [182]);
   this.setPrompt("PROMPT_FILIALIDINI3", [187]);
   this.setPrompt("PROMPT_FILIALIDFIM3", [191]);
   this.setPrompt("PROMPT_FILIALIDINI4", [196]);
   this.setPrompt("PROMPT_FILIALIDFIM4", [200]);
   this.setPrompt("PROMPT_FILIALIDINI5", [205]);
   this.setPrompt("PROMPT_FILIALIDFIM5", [209]);
   this.setPrompt("PROMPT_ESPECIEIDINI1", [217]);
   this.setPrompt("PROMPT_ESPECIEIDFIM1", [221]);
   this.setPrompt("PROMPT_ESPECIEIDINI2", [226]);
   this.setPrompt("PROMPT_ESPECIEIDFIM2", [230]);
   this.setPrompt("PROMPT_ESPECIEIDINI3", [235]);
   this.setPrompt("PROMPT_ESPECIEIDFIM3", [239]);
   this.setPrompt("PROMPT_ESPECIEIDINI4", [244]);
   this.setPrompt("PROMPT_ESPECIEIDFIM4", [248]);
   this.setPrompt("PROMPT_ESPECIEIDINI5", [253]);
   this.setPrompt("PROMPT_ESPECIEIDFIM5", [257]);
   this.setPrompt("PROMPT_TIPOCONTAIDINI1", [265]);
   this.setPrompt("PROMPT_TIPOCONTAIDFIM1", [269]);
   this.setPrompt("PROMPT_TIPOCONTAIDINI2", [274]);
   this.setPrompt("PROMPT_TIPOCONTAIDFIM2", [278]);
   this.setPrompt("PROMPT_TIPOCONTAIDINI3", [283]);
   this.setPrompt("PROMPT_TIPOCONTAIDFIM3", [287]);
   this.setPrompt("PROMPT_TIPOCONTAIDINI4", [292]);
   this.setPrompt("PROMPT_TIPOCONTAIDFIM4", [296]);
   this.setPrompt("PROMPT_TIPOCONTAIDINI5", [301]);
   this.setPrompt("PROMPT_TIPOCONTAIDFIM5", [305]);
   this.setPrompt("PROMPT_TIPOCOBRANCAIDINI1", [313]);
   this.setPrompt("PROMPT_TIPOCOBRANCAIDFIM1", [317]);
   this.setPrompt("PROMPT_TIPOCOBRANCAIDINI2", [322]);
   this.setPrompt("PROMPT_TIPOCOBRANCAIDFIM2", [326]);
   this.setPrompt("PROMPT_TIPOCOBRANCAIDINI3", [331]);
   this.setPrompt("PROMPT_TIPOCOBRANCAIDFIM3", [335]);
   this.setPrompt("PROMPT_TIPOCOBRANCAIDINI4", [340]);
   this.setPrompt("PROMPT_TIPOCOBRANCAIDFIM4", [344]);
   this.setPrompt("PROMPT_TIPOCOBRANCAIDINI5", [349]);
   this.setPrompt("PROMPT_TIPOCOBRANCAIDFIM5", [353]);
   this.setPrompt("PROMPT_CONTAPAGRECBANCOID", [361]);
   this.setPrompt("PROMPT_CONTAPAGRECAGENCIAID", [365]);
   this.setPrompt("PROMPT_CONTAPAGRECCCUSTOIDINI", [373]);
   this.setPrompt("PROMPT_CONTAPAGRECCCUSTOIDFIM", [377]);
   this.setPrompt("PROMPT_CONTAPAGRECNATUREZAIDINI", [385]);
   this.setPrompt("PROMPT_CONTAPAGRECNATUREZAIDFIN", [389]);
   this.EnterCtrl = ["BUTTON3"];
   this.setVCMap("AV72ContaPagRecPagRecAux", "vCONTAPAGRECPAGRECAUX", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hestatisticaprazopagamento());
