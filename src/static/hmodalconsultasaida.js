/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:32:52.61
*/
gx.evt.autoSkip = false;
gx.define('hmodalconsultasaida', false, function () {
   this.ServerClass =  "hmodalconsultasaida" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV25Modo=gx.fn.getControlValue("vMODO") ;
      this.AV27SaidaEmpresaId=gx.fn.getControlValue("vSAIDAEMPRESAID") ;
      this.AV89Tipo=gx.fn.getControlValue("vTIPO") ;
      this.AV35SaidaTipo=gx.fn.getControlValue("vSAIDATIPO") ;
      this.AV20PreVendaAux=gx.fn.getControlValue("vPREVENDAAUX") ;
      this.AV22CondicionalAux=gx.fn.getControlValue("vCONDICIONALAUX") ;
      this.AV21OrcamentoAux=gx.fn.getControlValue("vORCAMENTOAUX") ;
      this.AV23EntregaFuturaAux=gx.fn.getControlValue("vENTREGAFUTURAAUX") ;
      this.AV24SimplesRemessaAux=gx.fn.getControlValue("vSIMPLESREMESSAAUX") ;
      this.AV84CupomFiscalAux=gx.fn.getControlValue("vCUPOMFISCALAUX") ;
      this.AV85CupomFiscalEleAux=gx.fn.getControlValue("vCUPOMFISCALELEAUX") ;
      this.AV88NotaSaidaNormalAux=gx.fn.getControlValue("vNOTASAIDANORMALAUX") ;
      this.AV87NotaSaidaCompAux=gx.fn.getControlValue("vNOTASAIDACOMPAUX") ;
      this.AV86NotaSaidaAjusteAux=gx.fn.getControlValue("vNOTASAIDAAJUSTEAUX") ;
      this.AV96DAVAux=gx.fn.getControlValue("vDAVAUX") ;
      this.AV97DevolucaoSaidaAux=gx.fn.getControlValue("vDEVOLUCAOSAIDAAUX") ;
      this.AV98TrocaAux=gx.fn.getControlValue("vTROCAAUX") ;
      this.AV99AjusteSaidaAux=gx.fn.getControlValue("vAJUSTESAIDAAUX") ;
      this.AV100TransferenciaAux=gx.fn.getControlValue("vTRANSFERENCIAAUX") ;
   };
   this.Valid_Saidavendedorid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(170) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SAIDAVENDEDORID", gx.fn.currentGridRowImpl(170));
         this.AnyError  = 0;
         this.standaloneModalYN8( );
         this.standaloneNotModalYN8( );

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Saidaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSAIDAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Saidaclienteid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSAIDACLIENTEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Saidatipopedidoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSAIDATIPOPEDIDOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Saidafilialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSAIDAFILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Saidatransacaocodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSAIDATRANSACAOCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidapagtoparcelabancoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(153) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SAIDAPAGTOPARCELABANCOID", gx.fn.currentGridRowImpl(153));
         this.AnyError  = 0;
         this.StandaloneModal( );
         this.StandaloneNotModal( );

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidapagtoparcelaformatpcobr=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(153) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SAIDAPAGTOPARCELAFORMATPCOBR", gx.fn.currentGridRowImpl(153));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidapagtoparcelaformaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(153) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SAIDAPAGTOPARCELAFORMAID", gx.fn.currentGridRowImpl(153));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidavendedorid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(170) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SAIDAVENDEDORID", gx.fn.currentGridRowImpl(170));
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
      this.AV95SNErro =  "S"  ;
      if ( this.AV89Tipo == "P" )
      {
         if ( this.AV101DAV == "S" )
         {
            this.addMessage("Não é permitido informar \"DAV\"");
            gx.fn.usrSetFocus("vDAV") ;
         }
         else if ( this.AV90CupomFiscal == "S" )
         {
            this.addMessage("Não é permitido informar \"Cupom Fiscal\"");
            gx.fn.usrSetFocus("vCUPOMFISCAL") ;
         }
         else if ( this.AV91CupomFiscalEle == "S" )
         {
            this.addMessage("Não é permitido informar \"Cupom Fiscal Eletrônico\"");
            gx.fn.usrSetFocus("vCUPOMFISCALELE") ;
         }
         else if ( this.AV92NotaSaidaNormal == "S" )
         {
            this.addMessage("Não é permitido informar \"Nota de Saída Normal\"");
            gx.fn.usrSetFocus("vNOTASAIDANORMAL") ;
         }
         else if ( this.AV93NotaSaidaComp == "S" )
         {
            this.addMessage("Não é permitido informar \"Nota de Saída Complementar\"");
            gx.fn.usrSetFocus("vNOTASAIDACOMP") ;
         }
         else if ( this.AV94NotaSaidaAjuste == "S" )
         {
            this.addMessage("Não é permitido informar \"Nota de Saída de Ajuste\"");
            gx.fn.usrSetFocus("vNOTASAIDAAJUSTE") ;
         }
         else if ( this.AV102DevolucaoSaida == "S" )
         {
            this.addMessage("Não é permitido informar \"Saída por Devolução\"");
            gx.fn.usrSetFocus("vDEVOLUCAOSAIDA") ;
         }
         else if ( this.AV104AjusteSaida == "S" )
         {
            this.addMessage("Não é permitido informar \"Ajuste de Saída\"");
            gx.fn.usrSetFocus("vAJUSTESAIDA") ;
         }
         else if ( this.AV103Troca == "S" )
         {
            this.addMessage("Não é permitido informar \"Troca\"");
            gx.fn.usrSetFocus("vTROCA") ;
         }
         else if ( this.AV105Transferencia == "S" )
         {
            this.addMessage("Não é permitido informar \"Transferência\"");
            gx.fn.usrSetFocus("vTRANSFERENCIA") ;
         }
         else
         {
            this.AV95SNErro =  "N"  ;
         }
      }
      if ( this.AV89Tipo == "C" )
      {
         if ( this.AV13PreVenda == "S" )
         {
            this.addMessage("Não é permitido informar \"Pré-Venda\"");
            gx.fn.usrSetFocus("vPREVENDA") ;
         }
         else if ( this.AV15Condicional == "S" )
         {
            this.addMessage("Não é permitido informar \"Condicional\"");
            gx.fn.usrSetFocus("vCONDICIONAL") ;
         }
         else if ( this.AV14Orcamento == "S" )
         {
            this.addMessage("Não é permitido informar \"Orçamento\"");
            gx.fn.usrSetFocus("vORCAMENTO") ;
         }
         else if ( this.AV16EntregaFutura == "S" )
         {
            this.addMessage("Não é permitido informar \"Entrega Futura\"");
            gx.fn.usrSetFocus("vENTREGAFUTURA") ;
         }
         else if ( this.AV17SimplesRemessa == "S" )
         {
            this.addMessage("Não é permitido informar \"Simples Remessa\"");
            gx.fn.usrSetFocus("vSIMPLESREMESSA") ;
         }
         else if ( this.AV101DAV == "S" )
         {
            this.addMessage("Não é permitido informar \"DAV\"");
            gx.fn.usrSetFocus("vDAV") ;
         }
         else if ( this.AV92NotaSaidaNormal == "S" )
         {
            this.addMessage("Não é permitido informar \"Nota de Saída Normal\"");
            gx.fn.usrSetFocus("vNOTASAIDANORMAL") ;
         }
         else if ( this.AV93NotaSaidaComp == "S" )
         {
            this.addMessage("Não é permitido informar \"Nota de Saída Complementar\"");
            gx.fn.usrSetFocus("vNOTASAIDACOMP") ;
         }
         else if ( this.AV94NotaSaidaAjuste == "S" )
         {
            this.addMessage("Não é permitido informar \"Nota de Saída de Ajuste\"");
            gx.fn.usrSetFocus("vNOTASAIDAAJUSTE") ;
         }
         else if ( this.AV102DevolucaoSaida == "S" )
         {
            this.addMessage("Não é permitido informar \"Saída por Devolução\"");
            gx.fn.usrSetFocus("vDEVOLUCAOSAIDA") ;
         }
         else if ( this.AV104AjusteSaida == "S" )
         {
            this.addMessage("Não é permitido informar \"Ajuste de Saída\"");
            gx.fn.usrSetFocus("vAJUSTESAIDA") ;
         }
         else if ( this.AV103Troca == "S" )
         {
            this.addMessage("Não é permitido informar \"Troca\"");
            gx.fn.usrSetFocus("vTROCA") ;
         }
         else if ( this.AV105Transferencia == "S" )
         {
            this.addMessage("Não é permitido informar \"Transferência\"");
            gx.fn.usrSetFocus("vTRANSFERENCIA") ;
         }
         else
         {
            this.AV95SNErro =  "N"  ;
         }
      }
      if ( this.AV89Tipo == "N" )
      {
         if ( this.AV13PreVenda == "S" )
         {
            this.addMessage("Não é permitido informar \"Pré-Venda\"");
            gx.fn.usrSetFocus("vPREVENDA") ;
         }
         else if ( this.AV15Condicional == "S" )
         {
            this.addMessage("Não é permitido informar \"Condicional\"");
            gx.fn.usrSetFocus("vCONDICIONAL") ;
         }
         else if ( this.AV14Orcamento == "S" )
         {
            this.addMessage("Não é permitido informar \"Orçamento\"");
            gx.fn.usrSetFocus("vORCAMENTO") ;
         }
         else if ( this.AV16EntregaFutura == "S" )
         {
            this.addMessage("Não é permitido informar \"Entrega Futura\"");
            gx.fn.usrSetFocus("vENTREGAFUTURA") ;
         }
         else if ( this.AV17SimplesRemessa == "S" )
         {
            this.addMessage("Não é permitido informar \"Simples Remessa\"");
            gx.fn.usrSetFocus("vSIMPLESREMESSA") ;
         }
         else if ( this.AV101DAV == "S" )
         {
            this.addMessage("Não é permitido informar \"DAV\"");
            gx.fn.usrSetFocus("vDAV") ;
         }
         else if ( this.AV90CupomFiscal == "S" )
         {
            this.addMessage("Não é permitido informar \"Cupom Fiscal\"");
            gx.fn.usrSetFocus("vCUPOMFISCAL") ;
         }
         else if ( this.AV91CupomFiscalEle == "S" )
         {
            this.addMessage("Não é permitido informar \"Cupom Fiscal Eletrônico\"");
            gx.fn.usrSetFocus("vCUPOMFISCALELE") ;
         }
         else if ( this.AV102DevolucaoSaida == "S" )
         {
            this.addMessage("Não é permitido informar \"Saída por Devolução\"");
            gx.fn.usrSetFocus("vDEVOLUCAOSAIDA") ;
         }
         else if ( this.AV104AjusteSaida == "S" )
         {
            this.addMessage("Não é permitido informar \"Ajuste de Saída\"");
            gx.fn.usrSetFocus("vAJUSTESAIDA") ;
         }
         else if ( this.AV103Troca == "S" )
         {
            this.addMessage("Não é permitido informar \"Troca\"");
            gx.fn.usrSetFocus("vTROCA") ;
         }
         else if ( this.AV105Transferencia == "S" )
         {
            this.addMessage("Não é permitido informar \"Transferência\"");
            gx.fn.usrSetFocus("vTRANSFERENCIA") ;
         }
         else
         {
            this.AV95SNErro =  "N"  ;
         }
      }
   };
   this.e16yn1_client=function()
   {
      this.clearMessages();
      if ( this.AV89Tipo == "P" )
      {
         this.AV13PreVenda =  "S"  ;
         this.AV15Condicional =  "S"  ;
         this.AV14Orcamento =  "S"  ;
         this.AV16EntregaFutura =  "S"  ;
         this.AV17SimplesRemessa =  "S"  ;
      }
      else if ( this.AV89Tipo == "C" )
      {
         this.AV90CupomFiscal =  "S"  ;
         this.AV91CupomFiscalEle =  "S"  ;
      }
      else if ( this.AV89Tipo == "N" )
      {
         this.AV92NotaSaidaNormal =  "S"  ;
         this.AV93NotaSaidaComp =  "S"  ;
         this.AV94NotaSaidaAjuste =  "S"  ;
      }
      else if ( this.AV89Tipo == "T" )
      {
         this.AV13PreVenda =  "S"  ;
         this.AV15Condicional =  "S"  ;
         this.AV14Orcamento =  "S"  ;
         this.AV16EntregaFutura =  "S"  ;
         this.AV17SimplesRemessa =  "S"  ;
         this.AV90CupomFiscal =  "S"  ;
         this.AV91CupomFiscalEle =  "S"  ;
         this.AV92NotaSaidaNormal =  "S"  ;
         this.AV93NotaSaidaComp =  "S"  ;
         this.AV94NotaSaidaAjuste =  "S"  ;
         this.AV101DAV =  "S"  ;
         this.AV102DevolucaoSaida =  "S"  ;
         this.AV103Troca =  "S"  ;
         this.AV104AjusteSaida =  "S"  ;
         this.AV105Transferencia =  "S"  ;
      }
      this.refreshOutputs([{av:'AV13PreVenda',fld:'vPREVENDA'},{av:'AV15Condicional',fld:'vCONDICIONAL'},{av:'AV14Orcamento',fld:'vORCAMENTO'},{av:'AV16EntregaFutura',fld:'vENTREGAFUTURA'},{av:'AV17SimplesRemessa',fld:'vSIMPLESREMESSA'},{av:'AV90CupomFiscal',fld:'vCUPOMFISCAL'},{av:'AV91CupomFiscalEle',fld:'vCUPOMFISCALELE'},{av:'AV92NotaSaidaNormal',fld:'vNOTASAIDANORMAL'},{av:'AV93NotaSaidaComp',fld:'vNOTASAIDACOMP'},{av:'AV94NotaSaidaAjuste',fld:'vNOTASAIDAAJUSTE'},{av:'AV101DAV',fld:'vDAV'},{av:'AV102DevolucaoSaida',fld:'vDEVOLUCAOSAIDA'},{av:'AV103Troca',fld:'vTROCA'},{av:'AV104AjusteSaida',fld:'vAJUSTESAIDA'},{av:'AV105Transferencia',fld:'vTRANSFERENCIA'}]);
   };
   this.e17yn1_client=function()
   {
      this.clearMessages();
      this.AV13PreVenda =  "N"  ;
      this.AV15Condicional =  "N"  ;
      this.AV14Orcamento =  "N"  ;
      this.AV16EntregaFutura =  "N"  ;
      this.AV17SimplesRemessa =  "N"  ;
      this.AV90CupomFiscal =  "N"  ;
      this.AV91CupomFiscalEle =  "N"  ;
      this.AV92NotaSaidaNormal =  "N"  ;
      this.AV93NotaSaidaComp =  "N"  ;
      this.AV94NotaSaidaAjuste =  "N"  ;
      this.AV101DAV =  "N"  ;
      this.AV102DevolucaoSaida =  "N"  ;
      this.AV103Troca =  "N"  ;
      this.AV104AjusteSaida =  "N"  ;
      this.AV105Transferencia =  "N"  ;
      this.refreshOutputs([{av:'AV13PreVenda',fld:'vPREVENDA'},{av:'AV15Condicional',fld:'vCONDICIONAL'},{av:'AV14Orcamento',fld:'vORCAMENTO'},{av:'AV16EntregaFutura',fld:'vENTREGAFUTURA'},{av:'AV17SimplesRemessa',fld:'vSIMPLESREMESSA'},{av:'AV90CupomFiscal',fld:'vCUPOMFISCAL'},{av:'AV91CupomFiscalEle',fld:'vCUPOMFISCALELE'},{av:'AV92NotaSaidaNormal',fld:'vNOTASAIDANORMAL'},{av:'AV93NotaSaidaComp',fld:'vNOTASAIDACOMP'},{av:'AV94NotaSaidaAjuste',fld:'vNOTASAIDAAJUSTE'},{av:'AV101DAV',fld:'vDAV'},{av:'AV102DevolucaoSaida',fld:'vDEVOLUCAOSAIDA'},{av:'AV103Troca',fld:'vTROCA'},{av:'AV104AjusteSaida',fld:'vAJUSTESAIDA'},{av:'AV105Transferencia',fld:'vTRANSFERENCIA'}]);
   };
   this.e11yn2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12yn2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e18yn2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,13,15,17,20,22,24,27,29,31,34,36,38,41,43,45,54,57,60,63,65,67,69,72,74,77,79,81,83,85,88,90,92,94,97,99,101,104,106,109,111,113,115,117,120,122,124,126,129,131,134,136,137,140,142,145,147,152,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,171,172,173,174];
   this.GXLastCtrlId =174;
   this.GridparcelasContainer = new gx.grid.grid(this, 2,"WbpLvl2",153,"Gridparcelas","Gridparcelas","GridparcelasContainer",this.CmpContext,this.IsMasterPage,"hmodalconsultasaida",[],false,1,true,true,5,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridparcelasContainer = this.GridparcelasContainer;
   GridparcelasContainer.addSingleLineEdit(6303,154,"SAIDAPAGTOPARCELASEQ","Seq","","SaidaPagtoParcelaSeq","char",0,"px",3,3,"left",null,[],6303,"SaidaPagtoParcelaSeq",true,0,false,false,"Attribute",1,"");
   GridparcelasContainer.addSingleLineEdit(6259,155,"SAIDAPAGTOPARCELACONTAPRECNO","No. Conta","","SaidaPagtoParcelaContaPRecNo","int",0,"px",8,8,"right",null,[],6259,"SaidaPagtoParcelaContaPRecNo",true,0,false,false,"Attribute",1,"");
   GridparcelasContainer.addSingleLineEdit(6249,156,"SAIDAPAGTOPARCELANUMEROCONTA","No. Conta Cliente","","SaidaPagtoParcelaNumeroConta","char",0,"px",10,10,"left",null,[],6249,"SaidaPagtoParcelaNumeroConta",true,0,false,false,"Attribute",1,"");
   GridparcelasContainer.addSingleLineEdit(6246,157,"SAIDAPAGTOPARCELABANCOID","Banco","","SaidaPagtoParcelaBancoId","int",0,"px",3,3,"right",null,[],6246,"SaidaPagtoParcelaBancoId",true,0,false,false,"Attribute",1,"");
   GridparcelasContainer.addSingleLineEdit(6247,158,"SAIDAPAGTOPARCELABANCONOME","Nome Banco","","SaidaPagtoParcelaBancoNome","svchar",0,"px",25,25,"left",null,[],6247,"SaidaPagtoParcelaBancoNome",false,0,false,false,"SemQuebraGrid",1,"");
   GridparcelasContainer.addSingleLineEdit(6248,159,"SAIDAPAGTOPARCELAAGENCIAID","Agência","","SaidaPagtoParcelaAgenciaId","int",0,"px",4,4,"right",null,[],6248,"SaidaPagtoParcelaAgenciaId",true,0,false,false,"Attribute",1,"");
   GridparcelasContainer.addSingleLineEdit(6241,160,"SAIDAPAGTOPARCELAFORMATPCOBR","Tp Cob.","","SaidaPagtoParcelaFormaTpCobr","int",0,"px",3,3,"right",null,[],6241,"SaidaPagtoParcelaFormaTpCobr",false,0,false,false,"Attribute",1,"");
   GridparcelasContainer.addSingleLineEdit(6242,161,"SAIDAPAGTOPARCELAFORMATPCOBDES","Tp. Cobrança","","SaidaPagtoParcelaFormaTpCobDes","svchar",0,"px",25,25,"left",null,[],6242,"SaidaPagtoParcelaFormaTpCobDes",true,0,false,false,"SemQuebraGrid",1,"");
   GridparcelasContainer.addSingleLineEdit(6239,162,"SAIDAPAGTOPARCELAFORMAID","Pagto","","SaidaPagtoParcelaFormaId","int",0,"px",3,3,"right",null,[],6239,"SaidaPagtoParcelaFormaId",false,0,false,false,"Attribute",1,"");
   GridparcelasContainer.addSingleLineEdit(6240,163,"SAIDAPAGTOPARCELAFORMADESC","Descrição Pagto","","SaidaPagtoParcelaFormaDesc","svchar",0,"px",20,20,"left",null,[],6240,"SaidaPagtoParcelaFormaDesc",true,0,false,false,"SemQuebraGrid",1,"");
   GridparcelasContainer.addSingleLineEdit(6251,164,"SAIDAPAGTOPARCELACHEQUE","No. Cheque","","SaidaPagtoParcelaCheque","int",0,"px",6,6,"right",null,[],6251,"SaidaPagtoParcelaCheque",true,0,false,false,"Attribute",1,"");
   GridparcelasContainer.addSingleLineEdit(6250,165,"SAIDAPAGTOPARCELASERIECHE","Série","","SaidaPagtoParcelaSerieChe","char",0,"px",3,3,"left",null,[],6250,"SaidaPagtoParcelaSerieChe",true,0,false,false,"SemQuebraGrid",1,"");
   GridparcelasContainer.addSingleLineEdit(6261,166,"SAIDAPAGTOPARCELALANCXABCONO","No. Lancmto","","SaidaPagtoParcelaLanCxaBcoNo","int",0,"px",8,8,"right",null,[],6261,"SaidaPagtoParcelaLanCxaBcoNo",true,0,false,false,"Attribute",1,"");
   GridparcelasContainer.addSingleLineEdit(6243,167,"SAIDAPAGTOPARCELAVALOR","Valor Parcela","","SaidaPagtoParcelaValor","decimal",0,"px",22,22,"right",null,[],6243,"SaidaPagtoParcelaValor",true,2,false,false,"Attribute",1,"");
   GridparcelasContainer.addSingleLineEdit(6244,168,"SAIDAPAGTOPARCELAVENCIMENTO","Vencimento","","SaidaPagtoParcelaVencimento","date",0,"px",10,10,"right",null,[],6244,"SaidaPagtoParcelaVencimento",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridparcelasContainer);
   this.GridvendedorContainer = new gx.grid.grid(this, 8,"WbpLvl8",170,"Gridvendedor","Gridvendedor","GridvendedorContainer",this.CmpContext,this.IsMasterPage,"hmodalconsultasaida",[],false,1,true,true,5,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridvendedorContainer = this.GridvendedorContainer;
   GridvendedorContainer.addSingleLineEdit(6305,171,"SAIDAVENDEDORID","Vendedor","","SaidaVendedorId","int",0,"px",7,7,"right",null,[],6305,"SaidaVendedorId",true,0,false,false,"Attribute",1,"");
   GridvendedorContainer.addSingleLineEdit(6329,172,"SAIDAVENDEDORNOME","Nome Vendedor","","SaidaVendedorNome","svchar",0,"px",40,40,"left",null,[],6329,"SaidaVendedorNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridvendedorContainer.addSingleLineEdit(6264,173,"SAIDAVENDEDORVALOR","Valor","","SaidaVendedorValor","decimal",0,"px",22,22,"right",null,[],6264,"SaidaVendedorValor",true,2,false,false,"Attribute",1,"");
   GridvendedorContainer.addSingleLineEdit(6265,174,"SAIDAVENDEDORPCCOMISSAO","Comissão (%)","","SaidaVendedorPcComissao","decimal",0,"px",6,6,"right",null,[],6265,"SaidaVendedorPcComissao",true,2,false,false,"Attribute",1,"");
   this.setGrid(GridvendedorContainer);
   GXValidFnc[3]={fld:"TABSELECAO",grid:0};
   GXValidFnc[6]={fld:"TABTIPO",grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPREVENDA",gxz:"ZV13PreVenda",gxold:"OV13PreVenda",gxvar:"AV13PreVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV13PreVenda=Value},v2z:function(Value){gx.O.ZV13PreVenda=Value},v2c:function(){gx.fn.setCheckBoxValue("vPREVENDA",gx.O.AV13PreVenda,"S")},c2v:function(){gx.O.AV13PreVenda=this.val()},val:function(){return gx.fn.getControlValue("vPREVENDA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[15]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDAV",gxz:"ZV101DAV",gxold:"OV101DAV",gxvar:"AV101DAV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV101DAV=Value},v2z:function(Value){gx.O.ZV101DAV=Value},v2c:function(){gx.fn.setCheckBoxValue("vDAV",gx.O.AV101DAV,"S")},c2v:function(){gx.O.AV101DAV=this.val()},val:function(){return gx.fn.getControlValue("vDAV")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[17]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOTASAIDAAJUSTE",gxz:"ZV94NotaSaidaAjuste",gxold:"OV94NotaSaidaAjuste",gxvar:"AV94NotaSaidaAjuste",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV94NotaSaidaAjuste=Value},v2z:function(Value){gx.O.ZV94NotaSaidaAjuste=Value},v2c:function(){gx.fn.setCheckBoxValue("vNOTASAIDAAJUSTE",gx.O.AV94NotaSaidaAjuste,"S")},c2v:function(){gx.O.AV94NotaSaidaAjuste=this.val()},val:function(){return gx.fn.getControlValue("vNOTASAIDAAJUSTE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[20]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONDICIONAL",gxz:"ZV15Condicional",gxold:"OV15Condicional",gxvar:"AV15Condicional",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV15Condicional=Value},v2z:function(Value){gx.O.ZV15Condicional=Value},v2c:function(){gx.fn.setCheckBoxValue("vCONDICIONAL",gx.O.AV15Condicional,"S")},c2v:function(){gx.O.AV15Condicional=this.val()},val:function(){return gx.fn.getControlValue("vCONDICIONAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[22]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCUPOMFISCAL",gxz:"ZV90CupomFiscal",gxold:"OV90CupomFiscal",gxvar:"AV90CupomFiscal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV90CupomFiscal=Value},v2z:function(Value){gx.O.ZV90CupomFiscal=Value},v2c:function(){gx.fn.setCheckBoxValue("vCUPOMFISCAL",gx.O.AV90CupomFiscal,"S")},c2v:function(){gx.O.AV90CupomFiscal=this.val()},val:function(){return gx.fn.getControlValue("vCUPOMFISCAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEVOLUCAOSAIDA",gxz:"ZV102DevolucaoSaida",gxold:"OV102DevolucaoSaida",gxvar:"AV102DevolucaoSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV102DevolucaoSaida=Value},v2z:function(Value){gx.O.ZV102DevolucaoSaida=Value},v2c:function(){gx.fn.setCheckBoxValue("vDEVOLUCAOSAIDA",gx.O.AV102DevolucaoSaida,"S")},c2v:function(){gx.O.AV102DevolucaoSaida=this.val()},val:function(){return gx.fn.getControlValue("vDEVOLUCAOSAIDA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[27]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORCAMENTO",gxz:"ZV14Orcamento",gxold:"OV14Orcamento",gxvar:"AV14Orcamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV14Orcamento=Value},v2z:function(Value){gx.O.ZV14Orcamento=Value},v2c:function(){gx.fn.setCheckBoxValue("vORCAMENTO",gx.O.AV14Orcamento,"S")},c2v:function(){gx.O.AV14Orcamento=this.val()},val:function(){return gx.fn.getControlValue("vORCAMENTO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCUPOMFISCALELE",gxz:"ZV91CupomFiscalEle",gxold:"OV91CupomFiscalEle",gxvar:"AV91CupomFiscalEle",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV91CupomFiscalEle=Value},v2z:function(Value){gx.O.ZV91CupomFiscalEle=Value},v2c:function(){gx.fn.setCheckBoxValue("vCUPOMFISCALELE",gx.O.AV91CupomFiscalEle,"S")},c2v:function(){gx.O.AV91CupomFiscalEle=this.val()},val:function(){return gx.fn.getControlValue("vCUPOMFISCALELE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[31]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAJUSTESAIDA",gxz:"ZV104AjusteSaida",gxold:"OV104AjusteSaida",gxvar:"AV104AjusteSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV104AjusteSaida=Value},v2z:function(Value){gx.O.ZV104AjusteSaida=Value},v2c:function(){gx.fn.setCheckBoxValue("vAJUSTESAIDA",gx.O.AV104AjusteSaida,"S")},c2v:function(){gx.O.AV104AjusteSaida=this.val()},val:function(){return gx.fn.getControlValue("vAJUSTESAIDA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTREGAFUTURA",gxz:"ZV16EntregaFutura",gxold:"OV16EntregaFutura",gxvar:"AV16EntregaFutura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV16EntregaFutura=Value},v2z:function(Value){gx.O.ZV16EntregaFutura=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTREGAFUTURA",gx.O.AV16EntregaFutura,"S")},c2v:function(){gx.O.AV16EntregaFutura=this.val()},val:function(){return gx.fn.getControlValue("vENTREGAFUTURA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[36]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOTASAIDANORMAL",gxz:"ZV92NotaSaidaNormal",gxold:"OV92NotaSaidaNormal",gxvar:"AV92NotaSaidaNormal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV92NotaSaidaNormal=Value},v2z:function(Value){gx.O.ZV92NotaSaidaNormal=Value},v2c:function(){gx.fn.setCheckBoxValue("vNOTASAIDANORMAL",gx.O.AV92NotaSaidaNormal,"S")},c2v:function(){gx.O.AV92NotaSaidaNormal=this.val()},val:function(){return gx.fn.getControlValue("vNOTASAIDANORMAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[38]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTROCA",gxz:"ZV103Troca",gxold:"OV103Troca",gxvar:"AV103Troca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV103Troca=Value},v2z:function(Value){gx.O.ZV103Troca=Value},v2c:function(){gx.fn.setCheckBoxValue("vTROCA",gx.O.AV103Troca,"S")},c2v:function(){gx.O.AV103Troca=this.val()},val:function(){return gx.fn.getControlValue("vTROCA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[41]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIMPLESREMESSA",gxz:"ZV17SimplesRemessa",gxold:"OV17SimplesRemessa",gxvar:"AV17SimplesRemessa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV17SimplesRemessa=Value},v2z:function(Value){gx.O.ZV17SimplesRemessa=Value},v2c:function(){gx.fn.setCheckBoxValue("vSIMPLESREMESSA",gx.O.AV17SimplesRemessa,"S")},c2v:function(){gx.O.AV17SimplesRemessa=this.val()},val:function(){return gx.fn.getControlValue("vSIMPLESREMESSA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[43]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOTASAIDACOMP",gxz:"ZV93NotaSaidaComp",gxold:"OV93NotaSaidaComp",gxvar:"AV93NotaSaidaComp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV93NotaSaidaComp=Value},v2z:function(Value){gx.O.ZV93NotaSaidaComp=Value},v2c:function(){gx.fn.setCheckBoxValue("vNOTASAIDACOMP",gx.O.AV93NotaSaidaComp,"S")},c2v:function(){gx.O.AV93NotaSaidaComp=this.val()},val:function(){return gx.fn.getControlValue("vNOTASAIDACOMP")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[45]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSFERENCIA",gxz:"ZV105Transferencia",gxold:"OV105Transferencia",gxvar:"AV105Transferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV105Transferencia=Value},v2z:function(Value){gx.O.ZV105Transferencia=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSFERENCIA",gx.O.AV105Transferencia,"S")},c2v:function(){gx.O.AV105Transferencia=this.val()},val:function(){return gx.fn.getControlValue("vTRANSFERENCIA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[54]={fld:"TABVENPAG",grid:0};
   GXValidFnc[57]={fld:"TABLE6",grid:0};
   GXValidFnc[60]={fld:"TABLE7",grid:0};
   GXValidFnc[63]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Saidaid,isvalid:null,rgrid:[this.GridparcelasContainer,this.GridvendedorContainer],fld:"vSAIDAID",gxz:"ZV26SaidaId",gxold:"OV26SaidaId",gxvar:"AV26SaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26SaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26SaidaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDAID",gx.O.AV26SaidaId,0)},c2v:function(){gx.O.AV26SaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAID",'.')},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDADATAEMISSAO",gxz:"ZV30SaidaDataEmissao",gxold:"OV30SaidaDataEmissao",gxvar:"AV30SaidaDataEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30SaidaDataEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV30SaidaDataEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vSAIDADATAEMISSAO",gx.O.AV30SaidaDataEmissao,0)},c2v:function(){gx.O.AV30SaidaDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vSAIDADATAEMISSAO")},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[74]={fld:"TABLE2",grid:0};
   GXValidFnc[77]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Saidaclienteid,isvalid:null,rgrid:[],fld:"vSAIDACLIENTEID",gxz:"ZV33SaidaClienteId",gxold:"OV33SaidaClienteId",gxvar:"AV33SaidaClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33SaidaClienteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33SaidaClienteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDACLIENTEID",gx.O.AV33SaidaClienteId,0)},c2v:function(){gx.O.AV33SaidaClienteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDACLIENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[79]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[81]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDACLIENTEFANTASIA",gxz:"ZV34SaidaClienteFantasia",gxold:"OV34SaidaClienteFantasia",gxvar:"AV34SaidaClienteFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34SaidaClienteFantasia=Value},v2z:function(Value){gx.O.ZV34SaidaClienteFantasia=Value},v2c:function(){gx.fn.setControlValue("vSAIDACLIENTEFANTASIA",gx.O.AV34SaidaClienteFantasia,0)},c2v:function(){gx.O.AV34SaidaClienteFantasia=this.val()},val:function(){return gx.fn.getControlValue("vSAIDACLIENTEFANTASIA")},nac:gx.falseFn};
   GXValidFnc[83]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDADATA",gxz:"ZV32SaidaData",gxold:"OV32SaidaData",gxvar:"AV32SaidaData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32SaidaData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV32SaidaData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vSAIDADATA",gx.O.AV32SaidaData,0)},c2v:function(){gx.O.AV32SaidaData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vSAIDADATA")},nac:gx.falseFn};
   GXValidFnc[88]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDANODOCUMENTO",gxz:"ZV31SaidaNoDocumento",gxold:"OV31SaidaNoDocumento",gxvar:"AV31SaidaNoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31SaidaNoDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31SaidaNoDocumento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDANODOCUMENTO",gx.O.AV31SaidaNoDocumento,0)},c2v:function(){gx.O.AV31SaidaNoDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDANODOCUMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[94]={fld:"TABLE4",grid:0};
   GXValidFnc[97]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Saidatipopedidoid,isvalid:null,rgrid:[],fld:"vSAIDATIPOPEDIDOID",gxz:"ZV36SaidaTipoPedidoId",gxold:"OV36SaidaTipoPedidoId",gxvar:"AV36SaidaTipoPedidoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36SaidaTipoPedidoId=Value},v2z:function(Value){gx.O.ZV36SaidaTipoPedidoId=Value},v2c:function(){gx.fn.setControlValue("vSAIDATIPOPEDIDOID",gx.O.AV36SaidaTipoPedidoId,0)},c2v:function(){gx.O.AV36SaidaTipoPedidoId=this.val()},val:function(){return gx.fn.getControlValue("vSAIDATIPOPEDIDOID")},nac:gx.falseFn};
   GXValidFnc[99]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[101]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDATIPOPEDIDODESC",gxz:"ZV37SaidaTipoPedidoDesc",gxold:"OV37SaidaTipoPedidoDesc",gxvar:"AV37SaidaTipoPedidoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37SaidaTipoPedidoDesc=Value},v2z:function(Value){gx.O.ZV37SaidaTipoPedidoDesc=Value},v2c:function(){gx.fn.setControlValue("vSAIDATIPOPEDIDODESC",gx.O.AV37SaidaTipoPedidoDesc,0)},c2v:function(){gx.O.AV37SaidaTipoPedidoDesc=this.val()},val:function(){return gx.fn.getControlValue("vSAIDATIPOPEDIDODESC")},nac:gx.falseFn};
   GXValidFnc[104]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[106]={fld:"TABLE3",grid:0};
   GXValidFnc[109]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Saidafilialid,isvalid:null,rgrid:[],fld:"vSAIDAFILIALID",gxz:"ZV28SaidaFilialId",gxold:"OV28SaidaFilialId",gxvar:"AV28SaidaFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28SaidaFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28SaidaFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDAFILIALID",gx.O.AV28SaidaFilialId,0)},c2v:function(){gx.O.AV28SaidaFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[111]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[113]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAFILIALNOME",gxz:"ZV29SaidaFilialNome",gxold:"OV29SaidaFilialNome",gxvar:"AV29SaidaFilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29SaidaFilialNome=Value},v2z:function(Value){gx.O.ZV29SaidaFilialNome=Value},v2c:function(){gx.fn.setControlValue("vSAIDAFILIALNOME",gx.O.AV29SaidaFilialNome,0)},c2v:function(){gx.O.AV29SaidaFilialNome=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[115]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[117]={fld:"TABLE5",grid:0};
   GXValidFnc[120]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Saidatransacaocodigo,isvalid:null,rgrid:[],fld:"vSAIDATRANSACAOCODIGO",gxz:"ZV38SaidaTransacaoCodigo",gxold:"OV38SaidaTransacaoCodigo",gxvar:"AV38SaidaTransacaoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38SaidaTransacaoCodigo=Value},v2z:function(Value){gx.O.ZV38SaidaTransacaoCodigo=Value},v2c:function(){gx.fn.setControlValue("vSAIDATRANSACAOCODIGO",gx.O.AV38SaidaTransacaoCodigo,0)},c2v:function(){gx.O.AV38SaidaTransacaoCodigo=this.val()},val:function(){return gx.fn.getControlValue("vSAIDATRANSACAOCODIGO")},nac:gx.falseFn};
   GXValidFnc[122]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[124]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDATRANSACAODESC",gxz:"ZV39SaidaTransacaoDesc",gxold:"OV39SaidaTransacaoDesc",gxvar:"AV39SaidaTransacaoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39SaidaTransacaoDesc=Value},v2z:function(Value){gx.O.ZV39SaidaTransacaoDesc=Value},v2c:function(){gx.fn.setControlValue("vSAIDATRANSACAODESC",gx.O.AV39SaidaTransacaoDesc,0)},c2v:function(){gx.O.AV39SaidaTransacaoDesc=this.val()},val:function(){return gx.fn.getControlValue("vSAIDATRANSACAODESC")},nac:gx.falseFn};
   GXValidFnc[126]={fld:"TAB1",grid:0};
   GXValidFnc[129]={fld:"TXTECF", format:0,grid:0};
   GXValidFnc[131]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAECF",gxz:"ZV42SaidaECF",gxold:"OV42SaidaECF",gxvar:"AV42SaidaECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42SaidaECF=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42SaidaECF=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDAECF",gx.O.AV42SaidaECF,0)},c2v:function(){gx.O.AV42SaidaECF=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAECF",'.')},nac:gx.falseFn};
   GXValidFnc[134]={fld:"TXTCOO", format:0,grid:0};
   GXValidFnc[136]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDANUMEROCOO",gxz:"ZV43SaidaNumeroCOO",gxold:"OV43SaidaNumeroCOO",gxvar:"AV43SaidaNumeroCOO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43SaidaNumeroCOO=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43SaidaNumeroCOO=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDANUMEROCOO",gx.O.AV43SaidaNumeroCOO,0)},c2v:function(){gx.O.AV43SaidaNumeroCOO=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDANUMEROCOO",'.')},nac:gx.falseFn};
   GXValidFnc[137]={fld:"TAB2",grid:0};
   GXValidFnc[140]={fld:"TXTSERIE", format:0,grid:0};
   GXValidFnc[142]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDASERIE",gxz:"ZV40SaidaSerie",gxold:"OV40SaidaSerie",gxvar:"AV40SaidaSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40SaidaSerie=Value},v2z:function(Value){gx.O.ZV40SaidaSerie=Value},v2c:function(){gx.fn.setControlValue("vSAIDASERIE",gx.O.AV40SaidaSerie,0)},c2v:function(){gx.O.AV40SaidaSerie=this.val()},val:function(){return gx.fn.getControlValue("vSAIDASERIE")},nac:gx.falseFn};
   GXValidFnc[145]={fld:"TXTCFOP", format:0,grid:0};
   GXValidFnc[147]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDACFOPCODIGO",gxz:"ZV41SaidaCFOPCodigo",gxold:"OV41SaidaCFOPCodigo",gxvar:"AV41SaidaCFOPCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41SaidaCFOPCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41SaidaCFOPCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDACFOPCODIGO",gx.O.AV41SaidaCFOPCodigo,0)},c2v:function(){gx.O.AV41SaidaCFOPCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDACFOPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[152]={fld:"ROL3", format:2,grid:0};
   GXValidFnc[154]={lvl:2,type:"char",len:3,dec:0,sign:false,ro:1,isacc:0,grid:153,gxgrid:this.GridparcelasContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAPAGTOPARCELASEQ",gxz:"Z6303SaidaPagtoParcelaSeq",gxold:"O6303SaidaPagtoParcelaSeq",gxvar:"A6303SaidaPagtoParcelaSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6303SaidaPagtoParcelaSeq=Value},v2z:function(Value){gx.O.Z6303SaidaPagtoParcelaSeq=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDAPAGTOPARCELASEQ",row || gx.fn.currentGridRowImpl(153),gx.O.A6303SaidaPagtoParcelaSeq,0)},c2v:function(){gx.O.A6303SaidaPagtoParcelaSeq=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAPAGTOPARCELASEQ",row || gx.fn.currentGridRowImpl(153))},nac:gx.falseFn};
   GXValidFnc[155]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:153,gxgrid:this.GridparcelasContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAPAGTOPARCELACONTAPRECNO",gxz:"Z6259SaidaPagtoParcelaContaPRecNo",gxold:"O6259SaidaPagtoParcelaContaPRecNo",gxvar:"A6259SaidaPagtoParcelaContaPRecNo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6259SaidaPagtoParcelaContaPRecNo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6259SaidaPagtoParcelaContaPRecNo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAPAGTOPARCELACONTAPRECNO",row || gx.fn.currentGridRowImpl(153),gx.O.A6259SaidaPagtoParcelaContaPRecNo,0)},c2v:function(){gx.O.A6259SaidaPagtoParcelaContaPRecNo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAPAGTOPARCELACONTAPRECNO",row || gx.fn.currentGridRowImpl(153),'.')},nac:gx.falseFn};
   GXValidFnc[156]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:1,isacc:0,grid:153,gxgrid:this.GridparcelasContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAPAGTOPARCELANUMEROCONTA",gxz:"Z6249SaidaPagtoParcelaNumeroConta",gxold:"O6249SaidaPagtoParcelaNumeroConta",gxvar:"A6249SaidaPagtoParcelaNumeroConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6249SaidaPagtoParcelaNumeroConta=Value},v2z:function(Value){gx.O.Z6249SaidaPagtoParcelaNumeroConta=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDAPAGTOPARCELANUMEROCONTA",row || gx.fn.currentGridRowImpl(153),gx.O.A6249SaidaPagtoParcelaNumeroConta,0)},c2v:function(){gx.O.A6249SaidaPagtoParcelaNumeroConta=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAPAGTOPARCELANUMEROCONTA",row || gx.fn.currentGridRowImpl(153))},nac:gx.falseFn};
   GXValidFnc[157]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:153,gxgrid:this.GridparcelasContainer,fnc:this.Valid_Saidapagtoparcelabancoid,isvalid:null,rgrid:[],fld:"SAIDAPAGTOPARCELABANCOID",gxz:"Z6246SaidaPagtoParcelaBancoId",gxold:"O6246SaidaPagtoParcelaBancoId",gxvar:"A6246SaidaPagtoParcelaBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6246SaidaPagtoParcelaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6246SaidaPagtoParcelaBancoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAPAGTOPARCELABANCOID",row || gx.fn.currentGridRowImpl(153),gx.O.A6246SaidaPagtoParcelaBancoId,0)},c2v:function(){gx.O.A6246SaidaPagtoParcelaBancoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAPAGTOPARCELABANCOID",row || gx.fn.currentGridRowImpl(153),'.')},nac:gx.falseFn};
   GXValidFnc[158]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:153,gxgrid:this.GridparcelasContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAPAGTOPARCELABANCONOME",gxz:"Z6247SaidaPagtoParcelaBancoNome",gxold:"O6247SaidaPagtoParcelaBancoNome",gxvar:"A6247SaidaPagtoParcelaBancoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6247SaidaPagtoParcelaBancoNome=Value},v2z:function(Value){gx.O.Z6247SaidaPagtoParcelaBancoNome=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDAPAGTOPARCELABANCONOME",row || gx.fn.currentGridRowImpl(153),gx.O.A6247SaidaPagtoParcelaBancoNome,0)},c2v:function(){gx.O.A6247SaidaPagtoParcelaBancoNome=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAPAGTOPARCELABANCONOME",row || gx.fn.currentGridRowImpl(153))},nac:gx.falseFn};
   GXValidFnc[159]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:153,gxgrid:this.GridparcelasContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAPAGTOPARCELAAGENCIAID",gxz:"Z6248SaidaPagtoParcelaAgenciaId",gxold:"O6248SaidaPagtoParcelaAgenciaId",gxvar:"A6248SaidaPagtoParcelaAgenciaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6248SaidaPagtoParcelaAgenciaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6248SaidaPagtoParcelaAgenciaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAPAGTOPARCELAAGENCIAID",row || gx.fn.currentGridRowImpl(153),gx.O.A6248SaidaPagtoParcelaAgenciaId,0)},c2v:function(){gx.O.A6248SaidaPagtoParcelaAgenciaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAPAGTOPARCELAAGENCIAID",row || gx.fn.currentGridRowImpl(153),'.')},nac:gx.falseFn};
   GXValidFnc[160]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:153,gxgrid:this.GridparcelasContainer,fnc:this.Valid_Saidapagtoparcelaformatpcobr,isvalid:null,rgrid:[],fld:"SAIDAPAGTOPARCELAFORMATPCOBR",gxz:"Z6241SaidaPagtoParcelaFormaTpCobr",gxold:"O6241SaidaPagtoParcelaFormaTpCobr",gxvar:"A6241SaidaPagtoParcelaFormaTpCobr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6241SaidaPagtoParcelaFormaTpCobr=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6241SaidaPagtoParcelaFormaTpCobr=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAPAGTOPARCELAFORMATPCOBR",row || gx.fn.currentGridRowImpl(153),gx.O.A6241SaidaPagtoParcelaFormaTpCobr,0)},c2v:function(){gx.O.A6241SaidaPagtoParcelaFormaTpCobr=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAPAGTOPARCELAFORMATPCOBR",row || gx.fn.currentGridRowImpl(153),'.')},nac:gx.falseFn};
   GXValidFnc[161]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:153,gxgrid:this.GridparcelasContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAPAGTOPARCELAFORMATPCOBDES",gxz:"Z6242SaidaPagtoParcelaFormaTpCobDes",gxold:"O6242SaidaPagtoParcelaFormaTpCobDes",gxvar:"A6242SaidaPagtoParcelaFormaTpCobDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6242SaidaPagtoParcelaFormaTpCobDes=Value},v2z:function(Value){gx.O.Z6242SaidaPagtoParcelaFormaTpCobDes=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDAPAGTOPARCELAFORMATPCOBDES",row || gx.fn.currentGridRowImpl(153),gx.O.A6242SaidaPagtoParcelaFormaTpCobDes,0)},c2v:function(){gx.O.A6242SaidaPagtoParcelaFormaTpCobDes=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAPAGTOPARCELAFORMATPCOBDES",row || gx.fn.currentGridRowImpl(153))},nac:gx.falseFn};
   GXValidFnc[162]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:153,gxgrid:this.GridparcelasContainer,fnc:this.Valid_Saidapagtoparcelaformaid,isvalid:null,rgrid:[],fld:"SAIDAPAGTOPARCELAFORMAID",gxz:"Z6239SaidaPagtoParcelaFormaId",gxold:"O6239SaidaPagtoParcelaFormaId",gxvar:"A6239SaidaPagtoParcelaFormaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6239SaidaPagtoParcelaFormaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6239SaidaPagtoParcelaFormaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAPAGTOPARCELAFORMAID",row || gx.fn.currentGridRowImpl(153),gx.O.A6239SaidaPagtoParcelaFormaId,0)},c2v:function(){gx.O.A6239SaidaPagtoParcelaFormaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAPAGTOPARCELAFORMAID",row || gx.fn.currentGridRowImpl(153),'.')},nac:gx.falseFn};
   GXValidFnc[163]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:153,gxgrid:this.GridparcelasContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAPAGTOPARCELAFORMADESC",gxz:"Z6240SaidaPagtoParcelaFormaDesc",gxold:"O6240SaidaPagtoParcelaFormaDesc",gxvar:"A6240SaidaPagtoParcelaFormaDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6240SaidaPagtoParcelaFormaDesc=Value},v2z:function(Value){gx.O.Z6240SaidaPagtoParcelaFormaDesc=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDAPAGTOPARCELAFORMADESC",row || gx.fn.currentGridRowImpl(153),gx.O.A6240SaidaPagtoParcelaFormaDesc,0)},c2v:function(){gx.O.A6240SaidaPagtoParcelaFormaDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAPAGTOPARCELAFORMADESC",row || gx.fn.currentGridRowImpl(153))},nac:gx.falseFn};
   GXValidFnc[164]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:153,gxgrid:this.GridparcelasContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAPAGTOPARCELACHEQUE",gxz:"Z6251SaidaPagtoParcelaCheque",gxold:"O6251SaidaPagtoParcelaCheque",gxvar:"A6251SaidaPagtoParcelaCheque",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6251SaidaPagtoParcelaCheque=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6251SaidaPagtoParcelaCheque=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAPAGTOPARCELACHEQUE",row || gx.fn.currentGridRowImpl(153),gx.O.A6251SaidaPagtoParcelaCheque,0)},c2v:function(){gx.O.A6251SaidaPagtoParcelaCheque=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAPAGTOPARCELACHEQUE",row || gx.fn.currentGridRowImpl(153),'.')},nac:gx.falseFn};
   GXValidFnc[165]={lvl:2,type:"char",len:3,dec:0,sign:false,ro:1,isacc:0,grid:153,gxgrid:this.GridparcelasContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAPAGTOPARCELASERIECHE",gxz:"Z6250SaidaPagtoParcelaSerieChe",gxold:"O6250SaidaPagtoParcelaSerieChe",gxvar:"A6250SaidaPagtoParcelaSerieChe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6250SaidaPagtoParcelaSerieChe=Value},v2z:function(Value){gx.O.Z6250SaidaPagtoParcelaSerieChe=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDAPAGTOPARCELASERIECHE",row || gx.fn.currentGridRowImpl(153),gx.O.A6250SaidaPagtoParcelaSerieChe,0)},c2v:function(){gx.O.A6250SaidaPagtoParcelaSerieChe=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAPAGTOPARCELASERIECHE",row || gx.fn.currentGridRowImpl(153))},nac:gx.falseFn};
   GXValidFnc[166]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:153,gxgrid:this.GridparcelasContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAPAGTOPARCELALANCXABCONO",gxz:"Z6261SaidaPagtoParcelaLanCxaBcoNo",gxold:"O6261SaidaPagtoParcelaLanCxaBcoNo",gxvar:"A6261SaidaPagtoParcelaLanCxaBcoNo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6261SaidaPagtoParcelaLanCxaBcoNo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6261SaidaPagtoParcelaLanCxaBcoNo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAPAGTOPARCELALANCXABCONO",row || gx.fn.currentGridRowImpl(153),gx.O.A6261SaidaPagtoParcelaLanCxaBcoNo,0)},c2v:function(){gx.O.A6261SaidaPagtoParcelaLanCxaBcoNo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAPAGTOPARCELALANCXABCONO",row || gx.fn.currentGridRowImpl(153),'.')},nac:gx.falseFn};
   GXValidFnc[167]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:153,gxgrid:this.GridparcelasContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAPAGTOPARCELAVALOR",gxz:"Z6243SaidaPagtoParcelaValor",gxold:"O6243SaidaPagtoParcelaValor",gxvar:"A6243SaidaPagtoParcelaValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6243SaidaPagtoParcelaValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z6243SaidaPagtoParcelaValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("SAIDAPAGTOPARCELAVALOR",row || gx.fn.currentGridRowImpl(153),gx.O.A6243SaidaPagtoParcelaValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6243SaidaPagtoParcelaValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("SAIDAPAGTOPARCELAVALOR",row || gx.fn.currentGridRowImpl(153),'.',',')},nac:gx.falseFn};
   GXValidFnc[168]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:153,gxgrid:this.GridparcelasContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAPAGTOPARCELAVENCIMENTO",gxz:"Z6244SaidaPagtoParcelaVencimento",gxold:"O6244SaidaPagtoParcelaVencimento",gxvar:"A6244SaidaPagtoParcelaVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6244SaidaPagtoParcelaVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6244SaidaPagtoParcelaVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAPAGTOPARCELAVENCIMENTO",row || gx.fn.currentGridRowImpl(153),gx.O.A6244SaidaPagtoParcelaVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6244SaidaPagtoParcelaVencimento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("SAIDAPAGTOPARCELAVENCIMENTO",row || gx.fn.currentGridRowImpl(153))},nac:gx.falseFn};
   GXValidFnc[169]={fld:"ROL4", format:2,grid:0};
   GXValidFnc[171]={lvl:8,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:170,gxgrid:this.GridvendedorContainer,fnc:this.Valid_Saidavendedorid,isvalid:null,rgrid:[],fld:"SAIDAVENDEDORID",gxz:"Z6305SaidaVendedorId",gxold:"O6305SaidaVendedorId",gxvar:"A6305SaidaVendedorId",ucs:[],op:[172],ip:[172,171],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6305SaidaVendedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6305SaidaVendedorId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAVENDEDORID",row || gx.fn.currentGridRowImpl(170),gx.O.A6305SaidaVendedorId,0)},c2v:function(){gx.O.A6305SaidaVendedorId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAVENDEDORID",row || gx.fn.currentGridRowImpl(170),'.')},nac:gx.falseFn};
   GXValidFnc[172]={lvl:8,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:170,gxgrid:this.GridvendedorContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAVENDEDORNOME",gxz:"Z6329SaidaVendedorNome",gxold:"O6329SaidaVendedorNome",gxvar:"A6329SaidaVendedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6329SaidaVendedorNome=Value},v2z:function(Value){gx.O.Z6329SaidaVendedorNome=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDAVENDEDORNOME",row || gx.fn.currentGridRowImpl(170),gx.O.A6329SaidaVendedorNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6329SaidaVendedorNome=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAVENDEDORNOME",row || gx.fn.currentGridRowImpl(170))},nac:gx.falseFn};
   GXValidFnc[173]={lvl:8,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:170,gxgrid:this.GridvendedorContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAVENDEDORVALOR",gxz:"Z6264SaidaVendedorValor",gxold:"O6264SaidaVendedorValor",gxvar:"A6264SaidaVendedorValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6264SaidaVendedorValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z6264SaidaVendedorValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("SAIDAVENDEDORVALOR",row || gx.fn.currentGridRowImpl(170),gx.O.A6264SaidaVendedorValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6264SaidaVendedorValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("SAIDAVENDEDORVALOR",row || gx.fn.currentGridRowImpl(170),'.',',')},nac:gx.falseFn};
   GXValidFnc[174]={lvl:8,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:1,isacc:0,grid:170,gxgrid:this.GridvendedorContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAVENDEDORPCCOMISSAO",gxz:"Z6265SaidaVendedorPcComissao",gxold:"O6265SaidaVendedorPcComissao",gxvar:"A6265SaidaVendedorPcComissao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6265SaidaVendedorPcComissao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z6265SaidaVendedorPcComissao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("SAIDAVENDEDORPCCOMISSAO",row || gx.fn.currentGridRowImpl(170),gx.O.A6265SaidaVendedorPcComissao,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6265SaidaVendedorPcComissao=this.val()},val:function(row){return gx.fn.getGridDecimalValue("SAIDAVENDEDORPCCOMISSAO",row || gx.fn.currentGridRowImpl(170),'.',',')},nac:gx.falseFn};
   this.AV13PreVenda = "" ;
   this.ZV13PreVenda = "" ;
   this.OV13PreVenda = "" ;
   this.AV101DAV = "" ;
   this.ZV101DAV = "" ;
   this.OV101DAV = "" ;
   this.AV94NotaSaidaAjuste = "" ;
   this.ZV94NotaSaidaAjuste = "" ;
   this.OV94NotaSaidaAjuste = "" ;
   this.AV15Condicional = "" ;
   this.ZV15Condicional = "" ;
   this.OV15Condicional = "" ;
   this.AV90CupomFiscal = "" ;
   this.ZV90CupomFiscal = "" ;
   this.OV90CupomFiscal = "" ;
   this.AV102DevolucaoSaida = "" ;
   this.ZV102DevolucaoSaida = "" ;
   this.OV102DevolucaoSaida = "" ;
   this.AV14Orcamento = "" ;
   this.ZV14Orcamento = "" ;
   this.OV14Orcamento = "" ;
   this.AV91CupomFiscalEle = "" ;
   this.ZV91CupomFiscalEle = "" ;
   this.OV91CupomFiscalEle = "" ;
   this.AV104AjusteSaida = "" ;
   this.ZV104AjusteSaida = "" ;
   this.OV104AjusteSaida = "" ;
   this.AV16EntregaFutura = "" ;
   this.ZV16EntregaFutura = "" ;
   this.OV16EntregaFutura = "" ;
   this.AV92NotaSaidaNormal = "" ;
   this.ZV92NotaSaidaNormal = "" ;
   this.OV92NotaSaidaNormal = "" ;
   this.AV103Troca = "" ;
   this.ZV103Troca = "" ;
   this.OV103Troca = "" ;
   this.AV17SimplesRemessa = "" ;
   this.ZV17SimplesRemessa = "" ;
   this.OV17SimplesRemessa = "" ;
   this.AV93NotaSaidaComp = "" ;
   this.ZV93NotaSaidaComp = "" ;
   this.OV93NotaSaidaComp = "" ;
   this.AV105Transferencia = "" ;
   this.ZV105Transferencia = "" ;
   this.OV105Transferencia = "" ;
   this.AV26SaidaId = 0 ;
   this.ZV26SaidaId = 0 ;
   this.OV26SaidaId = 0 ;
   this.AV30SaidaDataEmissao = gx.date.nullDate() ;
   this.ZV30SaidaDataEmissao = gx.date.nullDate() ;
   this.OV30SaidaDataEmissao = gx.date.nullDate() ;
   this.AV33SaidaClienteId = 0 ;
   this.ZV33SaidaClienteId = 0 ;
   this.OV33SaidaClienteId = 0 ;
   this.AV34SaidaClienteFantasia = "" ;
   this.ZV34SaidaClienteFantasia = "" ;
   this.OV34SaidaClienteFantasia = "" ;
   this.AV32SaidaData = gx.date.nullDate() ;
   this.ZV32SaidaData = gx.date.nullDate() ;
   this.OV32SaidaData = gx.date.nullDate() ;
   this.AV31SaidaNoDocumento = 0 ;
   this.ZV31SaidaNoDocumento = 0 ;
   this.OV31SaidaNoDocumento = 0 ;
   this.AV36SaidaTipoPedidoId = "" ;
   this.ZV36SaidaTipoPedidoId = "" ;
   this.OV36SaidaTipoPedidoId = "" ;
   this.AV37SaidaTipoPedidoDesc = "" ;
   this.ZV37SaidaTipoPedidoDesc = "" ;
   this.OV37SaidaTipoPedidoDesc = "" ;
   this.AV28SaidaFilialId = 0 ;
   this.ZV28SaidaFilialId = 0 ;
   this.OV28SaidaFilialId = 0 ;
   this.AV29SaidaFilialNome = "" ;
   this.ZV29SaidaFilialNome = "" ;
   this.OV29SaidaFilialNome = "" ;
   this.AV38SaidaTransacaoCodigo = "" ;
   this.ZV38SaidaTransacaoCodigo = "" ;
   this.OV38SaidaTransacaoCodigo = "" ;
   this.AV39SaidaTransacaoDesc = "" ;
   this.ZV39SaidaTransacaoDesc = "" ;
   this.OV39SaidaTransacaoDesc = "" ;
   this.AV42SaidaECF = 0 ;
   this.ZV42SaidaECF = 0 ;
   this.OV42SaidaECF = 0 ;
   this.AV43SaidaNumeroCOO = 0 ;
   this.ZV43SaidaNumeroCOO = 0 ;
   this.OV43SaidaNumeroCOO = 0 ;
   this.AV40SaidaSerie = "" ;
   this.ZV40SaidaSerie = "" ;
   this.OV40SaidaSerie = "" ;
   this.AV41SaidaCFOPCodigo = 0 ;
   this.ZV41SaidaCFOPCodigo = 0 ;
   this.OV41SaidaCFOPCodigo = 0 ;
   this.Z6303SaidaPagtoParcelaSeq = "" ;
   this.O6303SaidaPagtoParcelaSeq = "" ;
   this.Z6259SaidaPagtoParcelaContaPRecNo = 0 ;
   this.O6259SaidaPagtoParcelaContaPRecNo = 0 ;
   this.Z6249SaidaPagtoParcelaNumeroConta = "" ;
   this.O6249SaidaPagtoParcelaNumeroConta = "" ;
   this.Z6246SaidaPagtoParcelaBancoId = 0 ;
   this.O6246SaidaPagtoParcelaBancoId = 0 ;
   this.Z6247SaidaPagtoParcelaBancoNome = "" ;
   this.O6247SaidaPagtoParcelaBancoNome = "" ;
   this.Z6248SaidaPagtoParcelaAgenciaId = 0 ;
   this.O6248SaidaPagtoParcelaAgenciaId = 0 ;
   this.Z6241SaidaPagtoParcelaFormaTpCobr = 0 ;
   this.O6241SaidaPagtoParcelaFormaTpCobr = 0 ;
   this.Z6242SaidaPagtoParcelaFormaTpCobDes = "" ;
   this.O6242SaidaPagtoParcelaFormaTpCobDes = "" ;
   this.Z6239SaidaPagtoParcelaFormaId = 0 ;
   this.O6239SaidaPagtoParcelaFormaId = 0 ;
   this.Z6240SaidaPagtoParcelaFormaDesc = "" ;
   this.O6240SaidaPagtoParcelaFormaDesc = "" ;
   this.Z6251SaidaPagtoParcelaCheque = 0 ;
   this.O6251SaidaPagtoParcelaCheque = 0 ;
   this.Z6250SaidaPagtoParcelaSerieChe = "" ;
   this.O6250SaidaPagtoParcelaSerieChe = "" ;
   this.Z6261SaidaPagtoParcelaLanCxaBcoNo = 0 ;
   this.O6261SaidaPagtoParcelaLanCxaBcoNo = 0 ;
   this.Z6243SaidaPagtoParcelaValor = 0 ;
   this.O6243SaidaPagtoParcelaValor = 0 ;
   this.Z6244SaidaPagtoParcelaVencimento = gx.date.nullDate() ;
   this.O6244SaidaPagtoParcelaVencimento = gx.date.nullDate() ;
   this.Z6305SaidaVendedorId = 0 ;
   this.O6305SaidaVendedorId = 0 ;
   this.Z6329SaidaVendedorNome = "" ;
   this.O6329SaidaVendedorNome = "" ;
   this.Z6264SaidaVendedorValor = 0 ;
   this.O6264SaidaVendedorValor = 0 ;
   this.Z6265SaidaVendedorPcComissao = 0 ;
   this.O6265SaidaVendedorPcComissao = 0 ;
   this.AV13PreVenda = "" ;
   this.AV101DAV = "" ;
   this.AV94NotaSaidaAjuste = "" ;
   this.AV15Condicional = "" ;
   this.AV90CupomFiscal = "" ;
   this.AV102DevolucaoSaida = "" ;
   this.AV14Orcamento = "" ;
   this.AV91CupomFiscalEle = "" ;
   this.AV104AjusteSaida = "" ;
   this.AV16EntregaFutura = "" ;
   this.AV92NotaSaidaNormal = "" ;
   this.AV103Troca = "" ;
   this.AV17SimplesRemessa = "" ;
   this.AV93NotaSaidaComp = "" ;
   this.AV105Transferencia = "" ;
   this.AV26SaidaId = 0 ;
   this.AV30SaidaDataEmissao = gx.date.nullDate() ;
   this.AV33SaidaClienteId = 0 ;
   this.AV34SaidaClienteFantasia = "" ;
   this.AV32SaidaData = gx.date.nullDate() ;
   this.AV31SaidaNoDocumento = 0 ;
   this.AV36SaidaTipoPedidoId = "" ;
   this.AV37SaidaTipoPedidoDesc = "" ;
   this.AV28SaidaFilialId = 0 ;
   this.AV29SaidaFilialNome = "" ;
   this.AV38SaidaTransacaoCodigo = "" ;
   this.AV39SaidaTransacaoDesc = "" ;
   this.AV42SaidaECF = 0 ;
   this.AV43SaidaNumeroCOO = 0 ;
   this.AV40SaidaSerie = "" ;
   this.AV41SaidaCFOPCodigo = 0 ;
   this.AV25Modo = "" ;
   this.AV27SaidaEmpresaId = "" ;
   this.AV35SaidaTipo = "" ;
   this.AV89Tipo = "" ;
   this.AV20PreVendaAux = "" ;
   this.AV22CondicionalAux = "" ;
   this.AV21OrcamentoAux = "" ;
   this.AV23EntregaFuturaAux = "" ;
   this.AV24SimplesRemessaAux = "" ;
   this.AV84CupomFiscalAux = "" ;
   this.AV85CupomFiscalEleAux = "" ;
   this.AV88NotaSaidaNormalAux = "" ;
   this.AV87NotaSaidaCompAux = "" ;
   this.AV86NotaSaidaAjusteAux = "" ;
   this.AV96DAVAux = "" ;
   this.AV97DevolucaoSaidaAux = "" ;
   this.AV98TrocaAux = "" ;
   this.AV99AjusteSaidaAux = "" ;
   this.AV100TransferenciaAux = "" ;
   this.A4306SaidaEmpresaId = "" ;
   this.A4307SaidaId = 0 ;
   this.A6304SaidaVendedorEmpId = "" ;
   this.A6305SaidaVendedorId = 0 ;
   this.A6329SaidaVendedorNome = "" ;
   this.A6264SaidaVendedorValor = 0 ;
   this.A6265SaidaVendedorPcComissao = 0 ;
   this.A6238SaidaPagtoParcelaFormaEmpId = "" ;
   this.A6245SaidaPagtoParcelaBancoEmpId = "" ;
   this.A6303SaidaPagtoParcelaSeq = "" ;
   this.A6259SaidaPagtoParcelaContaPRecNo = 0 ;
   this.A6249SaidaPagtoParcelaNumeroConta = "" ;
   this.A6246SaidaPagtoParcelaBancoId = 0 ;
   this.A6247SaidaPagtoParcelaBancoNome = "" ;
   this.A6248SaidaPagtoParcelaAgenciaId = 0 ;
   this.A6241SaidaPagtoParcelaFormaTpCobr = 0 ;
   this.A6242SaidaPagtoParcelaFormaTpCobDes = "" ;
   this.A6239SaidaPagtoParcelaFormaId = 0 ;
   this.A6240SaidaPagtoParcelaFormaDesc = "" ;
   this.A6251SaidaPagtoParcelaCheque = 0 ;
   this.A6250SaidaPagtoParcelaSerieChe = "" ;
   this.A6261SaidaPagtoParcelaLanCxaBcoNo = 0 ;
   this.A6243SaidaPagtoParcelaValor = 0 ;
   this.A6244SaidaPagtoParcelaVencimento = gx.date.nullDate() ;
   this.A5695TransacaoSaidaCodigo = "" ;
   this.A5694TransacaoSaidaEmpresaId = "" ;
   this.A5568TransacaoSaidaDescricao = "" ;
   this.A3753TipoPedidoId = "" ;
   this.A4083TipoPedidoEmpresaId = "" ;
   this.A4080TipoPedidoDescricao = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.A5964SaidaDataEmissao = gx.date.nullDate() ;
   this.A5971SaidaFilialId = 0 ;
   this.A5960SaidaNoDocumento = 0 ;
   this.A6005SaidaData = gx.date.nullDate() ;
   this.A5966SaidaClienteId = 0 ;
   this.A5956SaidaTipoPedidoId = "" ;
   this.A6398SaidaTransacaoCodigo = "" ;
   this.A5992SaidaECF = 0 ;
   this.A5993SaidaNumeroCOO = 0 ;
   this.A5962SaidaSerie = "" ;
   this.A6012SaidaCFOPCodigo = 0 ;
   this.AV95SNErro = "" ;
   this.Events = {"e11yn2_client": ["ENTER", true] ,"e12yn2_client": ["'FECHAR'", true] ,"e18yn2_client": ["CANCEL", true] ,"e16yn1_client": ["'MARCARTODOS'", false] ,"e17yn1_client": ["'DESMARCARTODOS'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDPARCELAS_nFirstRecordOnPage'},{av:'GRIDPARCELAS_nEOF'},{av:'subGridparcelas_Rows'},{av:'GRIDVENDEDOR_nFirstRecordOnPage'},{av:'GRIDVENDEDOR_nEOF'},{av:'subGridvendedor_Rows'},{av:'AV25Modo',fld:'vMODO',hsh:true},{av:'AV27SaidaEmpresaId',fld:'vSAIDAEMPRESAID',hsh:true},{av:'AV26SaidaId',fld:'vSAIDAID',hsh:true}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV89Tipo',fld:'vTIPO',hsh:true},{av:'AV95SNErro',fld:'vSNERRO'},{av:'AV101DAV',fld:'vDAV'},{av:'AV90CupomFiscal',fld:'vCUPOMFISCAL'},{av:'AV91CupomFiscalEle',fld:'vCUPOMFISCALELE'},{av:'AV92NotaSaidaNormal',fld:'vNOTASAIDANORMAL'},{av:'AV93NotaSaidaComp',fld:'vNOTASAIDACOMP'},{av:'AV94NotaSaidaAjuste',fld:'vNOTASAIDAAJUSTE'},{av:'AV102DevolucaoSaida',fld:'vDEVOLUCAOSAIDA'},{av:'AV104AjusteSaida',fld:'vAJUSTESAIDA'},{av:'AV103Troca',fld:'vTROCA'},{av:'AV105Transferencia',fld:'vTRANSFERENCIA'},{av:'AV13PreVenda',fld:'vPREVENDA'},{av:'AV15Condicional',fld:'vCONDICIONAL'},{av:'AV14Orcamento',fld:'vORCAMENTO'},{av:'AV16EntregaFutura',fld:'vENTREGAFUTURA'},{av:'AV17SimplesRemessa',fld:'vSIMPLESREMESSA'},{av:'AV19SNConfirmar',fld:'vSNCONFIRMAR'},{av:'AV25Modo',fld:'vMODO',hsh:true}],[{av:'AV95SNErro',fld:'vSNERRO'},{av:'AV19SNConfirmar',fld:'vSNCONFIRMAR'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV19SNConfirmar',fld:'vSNCONFIRMAR'},{av:'AV25Modo',fld:'vMODO',hsh:true},{av:'AV13PreVenda',fld:'vPREVENDA'},{av:'AV14Orcamento',fld:'vORCAMENTO'},{av:'AV15Condicional',fld:'vCONDICIONAL'},{av:'AV16EntregaFutura',fld:'vENTREGAFUTURA'},{av:'AV17SimplesRemessa',fld:'vSIMPLESREMESSA'},{av:'AV90CupomFiscal',fld:'vCUPOMFISCAL'},{av:'AV91CupomFiscalEle',fld:'vCUPOMFISCALELE'},{av:'AV92NotaSaidaNormal',fld:'vNOTASAIDANORMAL'},{av:'AV93NotaSaidaComp',fld:'vNOTASAIDACOMP'},{av:'AV94NotaSaidaAjuste',fld:'vNOTASAIDAAJUSTE'},{av:'AV101DAV',fld:'vDAV'},{av:'AV102DevolucaoSaida',fld:'vDEVOLUCAOSAIDA'},{av:'AV103Troca',fld:'vTROCA'},{av:'AV104AjusteSaida',fld:'vAJUSTESAIDA'},{av:'AV105Transferencia',fld:'vTRANSFERENCIA'}],[{av:'AV19SNConfirmar',fld:'vSNCONFIRMAR'}]];
   this.EvtParms["'MARCARTODOS'"] = [[{av:'AV89Tipo',fld:'vTIPO',hsh:true}],[{av:'AV13PreVenda',fld:'vPREVENDA'},{av:'AV15Condicional',fld:'vCONDICIONAL'},{av:'AV14Orcamento',fld:'vORCAMENTO'},{av:'AV16EntregaFutura',fld:'vENTREGAFUTURA'},{av:'AV17SimplesRemessa',fld:'vSIMPLESREMESSA'},{av:'AV90CupomFiscal',fld:'vCUPOMFISCAL'},{av:'AV91CupomFiscalEle',fld:'vCUPOMFISCALELE'},{av:'AV92NotaSaidaNormal',fld:'vNOTASAIDANORMAL'},{av:'AV93NotaSaidaComp',fld:'vNOTASAIDACOMP'},{av:'AV94NotaSaidaAjuste',fld:'vNOTASAIDAAJUSTE'},{av:'AV101DAV',fld:'vDAV'},{av:'AV102DevolucaoSaida',fld:'vDEVOLUCAOSAIDA'},{av:'AV103Troca',fld:'vTROCA'},{av:'AV104AjusteSaida',fld:'vAJUSTESAIDA'},{av:'AV105Transferencia',fld:'vTRANSFERENCIA'}]];
   this.EvtParms["'DESMARCARTODOS'"] = [[],[{av:'AV13PreVenda',fld:'vPREVENDA'},{av:'AV15Condicional',fld:'vCONDICIONAL'},{av:'AV14Orcamento',fld:'vORCAMENTO'},{av:'AV16EntregaFutura',fld:'vENTREGAFUTURA'},{av:'AV17SimplesRemessa',fld:'vSIMPLESREMESSA'},{av:'AV90CupomFiscal',fld:'vCUPOMFISCAL'},{av:'AV91CupomFiscalEle',fld:'vCUPOMFISCALELE'},{av:'AV92NotaSaidaNormal',fld:'vNOTASAIDANORMAL'},{av:'AV93NotaSaidaComp',fld:'vNOTASAIDACOMP'},{av:'AV94NotaSaidaAjuste',fld:'vNOTASAIDAAJUSTE'},{av:'AV101DAV',fld:'vDAV'},{av:'AV102DevolucaoSaida',fld:'vDEVOLUCAOSAIDA'},{av:'AV103Troca',fld:'vTROCA'},{av:'AV104AjusteSaida',fld:'vAJUSTESAIDA'},{av:'AV105Transferencia',fld:'vTRANSFERENCIA'}]];
   this.EvtParms["GRIDPARCELAS_FIRSTPAGE"] = [[{av:'GRIDPARCELAS_nFirstRecordOnPage'},{av:'GRIDPARCELAS_nEOF'},{av:'subGridparcelas_Rows'},{av:'AV25Modo',fld:'vMODO',hsh:true},{av:'AV27SaidaEmpresaId',fld:'vSAIDAEMPRESAID',hsh:true},{av:'AV26SaidaId',fld:'vSAIDAID',hsh:true}],[]];
   this.EvtParms["GRIDPARCELAS_PREVPAGE"] = [[{av:'GRIDPARCELAS_nFirstRecordOnPage'},{av:'GRIDPARCELAS_nEOF'},{av:'subGridparcelas_Rows'},{av:'AV25Modo',fld:'vMODO',hsh:true},{av:'AV27SaidaEmpresaId',fld:'vSAIDAEMPRESAID',hsh:true},{av:'AV26SaidaId',fld:'vSAIDAID',hsh:true}],[]];
   this.EvtParms["GRIDPARCELAS_NEXTPAGE"] = [[{av:'GRIDPARCELAS_nFirstRecordOnPage'},{av:'GRIDPARCELAS_nEOF'},{av:'subGridparcelas_Rows'},{av:'AV25Modo',fld:'vMODO',hsh:true},{av:'AV27SaidaEmpresaId',fld:'vSAIDAEMPRESAID',hsh:true},{av:'AV26SaidaId',fld:'vSAIDAID',hsh:true}],[]];
   this.EvtParms["GRIDPARCELAS_LASTPAGE"] = [[{av:'GRIDPARCELAS_nFirstRecordOnPage'},{av:'GRIDPARCELAS_nEOF'},{av:'subGridparcelas_Rows'},{av:'AV25Modo',fld:'vMODO',hsh:true},{av:'AV27SaidaEmpresaId',fld:'vSAIDAEMPRESAID',hsh:true},{av:'AV26SaidaId',fld:'vSAIDAID',hsh:true}],[]];
   this.EvtParms["GRIDVENDEDOR_FIRSTPAGE"] = [[{av:'GRIDVENDEDOR_nFirstRecordOnPage'},{av:'GRIDVENDEDOR_nEOF'},{av:'subGridvendedor_Rows'},{av:'AV25Modo',fld:'vMODO',hsh:true},{av:'AV27SaidaEmpresaId',fld:'vSAIDAEMPRESAID',hsh:true},{av:'AV26SaidaId',fld:'vSAIDAID',hsh:true}],[]];
   this.EvtParms["GRIDVENDEDOR_PREVPAGE"] = [[{av:'GRIDVENDEDOR_nFirstRecordOnPage'},{av:'GRIDVENDEDOR_nEOF'},{av:'subGridvendedor_Rows'},{av:'AV25Modo',fld:'vMODO',hsh:true},{av:'AV27SaidaEmpresaId',fld:'vSAIDAEMPRESAID',hsh:true},{av:'AV26SaidaId',fld:'vSAIDAID',hsh:true}],[]];
   this.EvtParms["GRIDVENDEDOR_NEXTPAGE"] = [[{av:'GRIDVENDEDOR_nFirstRecordOnPage'},{av:'GRIDVENDEDOR_nEOF'},{av:'subGridvendedor_Rows'},{av:'AV25Modo',fld:'vMODO',hsh:true},{av:'AV27SaidaEmpresaId',fld:'vSAIDAEMPRESAID',hsh:true},{av:'AV26SaidaId',fld:'vSAIDAID',hsh:true}],[]];
   this.EvtParms["GRIDVENDEDOR_LASTPAGE"] = [[{av:'GRIDVENDEDOR_nFirstRecordOnPage'},{av:'GRIDVENDEDOR_nEOF'},{av:'subGridvendedor_Rows'},{av:'AV25Modo',fld:'vMODO',hsh:true},{av:'AV27SaidaEmpresaId',fld:'vSAIDAEMPRESAID',hsh:true},{av:'AV26SaidaId',fld:'vSAIDAID',hsh:true}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV25Modo", "vMODO", 0, "char");
   this.setVCMap("AV27SaidaEmpresaId", "vSAIDAEMPRESAID", 0, "char");
   this.setVCMap("AV89Tipo", "vTIPO", 0, "char");
   this.setVCMap("AV35SaidaTipo", "vSAIDATIPO", 0, "char");
   this.setVCMap("AV20PreVendaAux", "vPREVENDAAUX", 0, "char");
   this.setVCMap("AV22CondicionalAux", "vCONDICIONALAUX", 0, "char");
   this.setVCMap("AV21OrcamentoAux", "vORCAMENTOAUX", 0, "char");
   this.setVCMap("AV23EntregaFuturaAux", "vENTREGAFUTURAAUX", 0, "char");
   this.setVCMap("AV24SimplesRemessaAux", "vSIMPLESREMESSAAUX", 0, "char");
   this.setVCMap("AV84CupomFiscalAux", "vCUPOMFISCALAUX", 0, "char");
   this.setVCMap("AV85CupomFiscalEleAux", "vCUPOMFISCALELEAUX", 0, "char");
   this.setVCMap("AV88NotaSaidaNormalAux", "vNOTASAIDANORMALAUX", 0, "char");
   this.setVCMap("AV87NotaSaidaCompAux", "vNOTASAIDACOMPAUX", 0, "char");
   this.setVCMap("AV86NotaSaidaAjusteAux", "vNOTASAIDAAJUSTEAUX", 0, "char");
   this.setVCMap("AV96DAVAux", "vDAVAUX", 0, "char");
   this.setVCMap("AV97DevolucaoSaidaAux", "vDEVOLUCAOSAIDAAUX", 0, "char");
   this.setVCMap("AV98TrocaAux", "vTROCAAUX", 0, "char");
   this.setVCMap("AV99AjusteSaidaAux", "vAJUSTESAIDAAUX", 0, "char");
   this.setVCMap("AV100TransferenciaAux", "vTRANSFERENCIAAUX", 0, "char");
   this.setVCMap("AV25Modo", "vMODO", 0, "char");
   this.setVCMap("AV27SaidaEmpresaId", "vSAIDAEMPRESAID", 0, "char");
   GridparcelasContainer.addRefreshingVar({rfrVar:"AV25Modo"});
   GridparcelasContainer.addRefreshingVar({rfrVar:"AV27SaidaEmpresaId"});
   GridparcelasContainer.addRefreshingVar(this.GXValidFnc[65]);
   GridvendedorContainer.addRefreshingVar({rfrVar:"AV25Modo"});
   GridvendedorContainer.addRefreshingVar({rfrVar:"AV27SaidaEmpresaId"});
   GridvendedorContainer.addRefreshingVar(this.GXValidFnc[65]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalconsultasaida());
