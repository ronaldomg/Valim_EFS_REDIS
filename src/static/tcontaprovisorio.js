/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:42:7.98
*/
gx.evt.autoSkip = false;
gx.define('tcontaprovisorio', false, function () {
   this.ServerClass =  "tcontaprovisorio" ;
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
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.A1636ContaPagRecCliForEmpId=gx.fn.getControlValue("CONTAPAGRECCLIFOREMPID") ;
      this.A1864LancamentoCxaBcoPessoaEmpId=gx.fn.getControlValue("LANCAMENTOCXABCOPESSOAEMPID") ;
   };
   this.Valid_Contaprovisorioempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTAPROVISORIOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contaprovisorionumero=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contaprovisorionumero",["gx.O.A2702ContaProvisorioEmpresaId", "gx.O.A2703ContaProvisorioNumero", "gx.O.A2718ContaProvisorioQtdeContas", "gx.O.A2704ContaProvisorioCNPJ", "gx.O.A2705ContaProvisorioCPF", 'gx.date.urlDate(gx.O.A2708ContaProvisorioDataEmissao,"DMY4")', 'gx.date.urlDate(gx.O.A2709ContaProvisorioDataVencimento,"DMY4")', "gx.num.urlDecimal(gx.O.A2710ContaProvisorioValorNota,\'.\',\',\')", "gx.O.A9009ContaProvisorioOperacao", "gx.O.A9010ContaProvisorioCodCientec", "gx.O.A9016ContaProvisorioHistorico", "gx.O.A9011ContaProvisorioNumeroDocumento", "gx.num.urlDecimal(gx.O.A9017ContaProvisorioBoleto,\'.\',\',\')", "gx.O.A9014ContaProvisorioConvenioA", "gx.O.A9015ContaProvisorioConvenioB", "gx.O.A9012ContaProvisorioPessoaNome", "gx.O.A9013ContaProvisorioPessoaTipo", "gx.O.A9018ContaProvisorioPessoaEndereco", "gx.O.A9019ContaProvisorioPessoaNumEndere", "gx.O.A9020ContaProvisorioPessoaCompEnder", "gx.O.A9021ContaProvisorioPessoaBairro", "gx.O.A9022ContaProvisorioPessoaCidadeNom", "gx.O.A9023ContaProvisorioPessoaUF", "gx.O.A9024ContaProvisorioPessoaCEP", "gx.O.A9025ContaProvisorioInscEstadual", "gx.O.A9026ContaProvisorioInscMunicipal", "gx.O.A9027ContaProvisorioPessoaRG", "gx.O.A9028ContaProvisorioPessoaOrgExp", "gx.O.A9029ContaProvisorioPessoaTelRes", "gx.O.A9030ContaProvisorioPessoaTelCom", "gx.O.A9031ContaProvisorioPessoaCelular", "gx.O.A9032ContaProvisorioPessoaEmail", "gx.O.A9033ContaProvisorioPessoaBanco", "gx.O.A9034ContaProvisorioPessoaAgencia", "gx.O.A9035ContaProvisorioPessoaDigAgenci", "gx.O.A9036ContaProvisorioPessoaConta", "gx.O.A9037ContaProvisorioPessoaDigConta", "gx.O.A9038ContaProvisorioCentroCustoA", "gx.O.A9039ContaProvisorioCentroCustoB", "gx.O.A9040ContaProvisorioNumPedido", 'gx.date.urlDateTime(gx.O.A9041ContaProvisorioDataCriacao,"DMY4")', "gx.O.A9053ContaProvisorioUsuarioCriacao", "gx.O.A2715ContaProvisorioUsuarioAlt", 'gx.date.urlDateTime(gx.O.A2716ContaProvisorioDataHoraAlt,"DMY4")', "gx.O.A2717ContaProvisorioEfetivada"],["A2704ContaProvisorioCNPJ", "A2705ContaProvisorioCPF", "A2708ContaProvisorioDataEmissao", "A2709ContaProvisorioDataVencimento", "A2710ContaProvisorioValorNota", "A9009ContaProvisorioOperacao", "A9010ContaProvisorioCodCientec", "A9016ContaProvisorioHistorico", "A9011ContaProvisorioNumeroDocumento", "A9017ContaProvisorioBoleto", "A9014ContaProvisorioConvenioA", "A9015ContaProvisorioConvenioB", "A9012ContaProvisorioPessoaNome", "A9013ContaProvisorioPessoaTipo", "A9018ContaProvisorioPessoaEndereco", "A9019ContaProvisorioPessoaNumEndere", "A9020ContaProvisorioPessoaCompEnder", "A9021ContaProvisorioPessoaBairro", "A9022ContaProvisorioPessoaCidadeNom", "A9023ContaProvisorioPessoaUF", "A9024ContaProvisorioPessoaCEP", "A9025ContaProvisorioInscEstadual", "A9026ContaProvisorioInscMunicipal", "A9027ContaProvisorioPessoaRG", "A9028ContaProvisorioPessoaOrgExp", "A9029ContaProvisorioPessoaTelRes", "A9030ContaProvisorioPessoaTelCom", "A9031ContaProvisorioPessoaCelular", "A9032ContaProvisorioPessoaEmail", "A9033ContaProvisorioPessoaBanco", "A9034ContaProvisorioPessoaAgencia", "A9035ContaProvisorioPessoaDigAgenci", "A9036ContaProvisorioPessoaConta", "A9037ContaProvisorioPessoaDigConta", "A9038ContaProvisorioCentroCustoA", "A9039ContaProvisorioCentroCustoB", "A9040ContaProvisorioNumPedido", "A9041ContaProvisorioDataCriacao", "A9053ContaProvisorioUsuarioCriacao", "A2715ContaProvisorioUsuarioAlt", "A2716ContaProvisorioDataHoraAlt", "A2718ContaProvisorioQtdeContas", "A2717ContaProvisorioEfetivada", "Gx_mode", "Z2702ContaProvisorioEmpresaId", "Z2703ContaProvisorioNumero", "Z2704ContaProvisorioCNPJ", "Z2705ContaProvisorioCPF", "Z2708ContaProvisorioDataEmissao", "Z2709ContaProvisorioDataVencimento", "Z2710ContaProvisorioValorNota", "Z9009ContaProvisorioOperacao", "Z9010ContaProvisorioCodCientec", "Z9016ContaProvisorioHistorico", "Z9011ContaProvisorioNumeroDocumento", "Z9017ContaProvisorioBoleto", "Z9014ContaProvisorioConvenioA", "Z9015ContaProvisorioConvenioB", "Z9012ContaProvisorioPessoaNome", "Z9013ContaProvisorioPessoaTipo", "Z9018ContaProvisorioPessoaEndereco", "Z9019ContaProvisorioPessoaNumEndere", "Z9020ContaProvisorioPessoaCompEnder", "Z9021ContaProvisorioPessoaBairro", "Z9022ContaProvisorioPessoaCidadeNom", "Z9023ContaProvisorioPessoaUF", "Z9024ContaProvisorioPessoaCEP", "Z9025ContaProvisorioInscEstadual", "Z9026ContaProvisorioInscMunicipal", "Z9027ContaProvisorioPessoaRG", "Z9028ContaProvisorioPessoaOrgExp", "Z9029ContaProvisorioPessoaTelRes", "Z9030ContaProvisorioPessoaTelCom", "Z9031ContaProvisorioPessoaCelular", "Z9032ContaProvisorioPessoaEmail", "Z9033ContaProvisorioPessoaBanco", "Z9034ContaProvisorioPessoaAgencia", "Z9035ContaProvisorioPessoaDigAgenci", "Z9036ContaProvisorioPessoaConta", "Z9037ContaProvisorioPessoaDigConta", "Z9038ContaProvisorioCentroCustoA", "Z9039ContaProvisorioCentroCustoB", "Z9040ContaProvisorioNumPedido", "Z9041ContaProvisorioDataCriacao", "Z9053ContaProvisorioUsuarioCriacao", "Z2715ContaProvisorioUsuarioAlt", "Z2716ContaProvisorioDataHoraAlt", "Z2718ContaProvisorioQtdeContas", "Z2717ContaProvisorioEfetivada", "O2718ContaProvisorioQtdeContas", "Grid1", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      try {
         this.A2717ContaProvisorioEfetivada =  (this.A2718ContaProvisorioQtdeContas>0 ? "S" : "N")  ;
      }
      catch(e){}
      return true;
   }
   this.Valid_Contaprovisoriopessoatipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTAPROVISORIOPESSOATIPO");
         this.AnyError  = 0;
         if ( ! ( this.A9013ContaProvisorioPessoaTipo == "F" || this.A9013ContaProvisorioPessoaTipo == "J" ) )
         {
            try {
               gxballoon.setError("Campo Tipo da Pessoa fora do intervalo");
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
   this.Valid_Contaprovisoriopessoauf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTAPROVISORIOPESSOAUF");
         this.AnyError  = 0;
         if ( ! ( this.A9023ContaProvisorioPessoaUF == "" || this.A9023ContaProvisorioPessoaUF == "AC" || this.A9023ContaProvisorioPessoaUF == "AL" || this.A9023ContaProvisorioPessoaUF == "AP" || this.A9023ContaProvisorioPessoaUF == "AM" || this.A9023ContaProvisorioPessoaUF == "BA" || this.A9023ContaProvisorioPessoaUF == "CE" || this.A9023ContaProvisorioPessoaUF == "DF" || this.A9023ContaProvisorioPessoaUF == "ES" || this.A9023ContaProvisorioPessoaUF == "GO" || this.A9023ContaProvisorioPessoaUF == "MA" || this.A9023ContaProvisorioPessoaUF == "MT" || this.A9023ContaProvisorioPessoaUF == "MS" || this.A9023ContaProvisorioPessoaUF == "MG" || this.A9023ContaProvisorioPessoaUF == "PA" || this.A9023ContaProvisorioPessoaUF == "PB" || this.A9023ContaProvisorioPessoaUF == "PR" || this.A9023ContaProvisorioPessoaUF == "PE" || this.A9023ContaProvisorioPessoaUF == "PI" || this.A9023ContaProvisorioPessoaUF == "RJ" || this.A9023ContaProvisorioPessoaUF == "RN" || this.A9023ContaProvisorioPessoaUF == "RS" || this.A9023ContaProvisorioPessoaUF == "RO" || this.A9023ContaProvisorioPessoaUF == "RR" || this.A9023ContaProvisorioPessoaUF == "SC" || this.A9023ContaProvisorioPessoaUF == "SP" || this.A9023ContaProvisorioPessoaUF == "SE" || this.A9023ContaProvisorioPessoaUF == "TO" || this.A9023ContaProvisorioPessoaUF == "EX" ) )
         {
            try {
               gxballoon.setError("Campo Uf da Cidade fora do intervalo");
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
   this.Valid_Contaprovisorioqtdecontas=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTAPROVISORIOQTDECONTAS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contaprovisoriocontaseq=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(238) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONTAPROVISORIOCONTASEQ", gx.fn.currentGridRowImpl(238));
         this.AnyError  = 0;
         this.sMode674 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(674,238)  ;
         this.standaloneModal4Z674( );
         this.standaloneNotModal4Z674( );
         if ( gx.fn.gridDuplicateKey(240) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Conta", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode674  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contapagrecempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(238) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONTAPAGRECEMPRESAID", gx.fn.currentGridRowImpl(238));
         this.AnyError  = 0;
         this.sMode674 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(674,238)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode674  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contapagrecnumero=function()
   {
      this.sMode674 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(674,238)  ;
      gx.ajax.validSrvEvt("dyncall","valid_Contapagrecnumero",["gx.O.A1685ContaPagRecEmpresaId", "gx.O.A1686ContaPagRecNumero", "gx.O.A1636ContaPagRecCliForEmpId", "gx.O.A1637ContaPagRecCliForId", 'gx.date.urlDate(gx.O.A1699ContaPagRecDtEmissao,"DMY4")', "gx.num.urlDecimal(gx.O.A1713ContaPagRecVlrConta,\'.\',\',\')", "gx.O.A1692ContaPagRecSituacao", "gx.O.A1638ContaPagRecCliForFantasia"],["A1636ContaPagRecCliForEmpId", "A1699ContaPagRecDtEmissao", "A1713ContaPagRecVlrConta", "A1692ContaPagRecSituacao", "A1637ContaPagRecCliForId", "A1638ContaPagRecCliForFantasia"]);
      this.Gx_mode =  this.sMode674  ;
      return true;
   }
   this.Valid_Contapagreccliforid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(238) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONTAPAGRECCLIFORID", gx.fn.currentGridRowImpl(238));
         this.AnyError  = 0;
         this.sMode674 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(674,238)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode674  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamentocxabcoempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(238) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCXABCOEMPRESAID", gx.fn.currentGridRowImpl(238));
         this.AnyError  = 0;
         this.sMode674 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(674,238)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode674  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamentocxabconumero=function()
   {
      this.sMode674 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(674,238)  ;
      gx.ajax.validSrvEvt("dyncall","valid_Lancamentocxabconumero",["gx.O.A1928LancamentoCxaBcoEmpresaid", "gx.O.A1929LancamentoCxaBcoNumero", "gx.O.A1864LancamentoCxaBcoPessoaEmpId", "gx.O.A1865LancamentoCxaBcoPessoaId", "gx.O.A1867LancamentoCxaBcoCaiBanEmpId", "gx.O.A1868LancamentoCxaBcoCaiBanId", 'gx.date.urlDate(gx.O.A1930LancamentoCxaBcoData,"DMY4")', "gx.num.urlDecimal(gx.O.A1933LancamentoCxaBcoValor,\'.\',\',\')", "gx.O.A1866LancamentoCxaBcoPessoaFantasia", "gx.O.A1869LancamentoCxaBcoCaiBanDescrica"],["A1864LancamentoCxaBcoPessoaEmpId", "A1930LancamentoCxaBcoData", "A1933LancamentoCxaBcoValor", "A1865LancamentoCxaBcoPessoaId", "A1867LancamentoCxaBcoCaiBanEmpId", "A1868LancamentoCxaBcoCaiBanId", "A1866LancamentoCxaBcoPessoaFantasia", "A1869LancamentoCxaBcoCaiBanDescrica"]);
      this.Gx_mode =  this.sMode674  ;
      return true;
   }
   this.Valid_Lancamentocxabcopessoaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(238) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCXABCOPESSOAID", gx.fn.currentGridRowImpl(238));
         this.AnyError  = 0;
         this.sMode674 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(674,238)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode674  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamentocxabcocaibanempid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(238) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCXABCOCAIBANEMPID", gx.fn.currentGridRowImpl(238));
         this.AnyError  = 0;
         this.sMode674 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(674,238)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode674  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamentocxabcocaibanid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(238) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCXABCOCAIBANID", gx.fn.currentGridRowImpl(238));
         this.AnyError  = 0;
         this.sMode674 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(674,238)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode674  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contacontaprovisoriousuarioalt=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(238) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONTACONTAPROVISORIOUSUARIOALT", gx.fn.currentGridRowImpl(238));
         this.AnyError  = 0;
         this.sMode674 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(674,238)  ;
         try {
            this.A2718ContaProvisorioQtdeContas = gx.num.trunc( gx.fn.countFrm( "A2719ContaContaProvisorioUsuarioAlt" , 0 , 238 , gx.trueFn , [] ) ,0) ;
         }
         catch(e){}
         try {
            this.A2717ContaProvisorioEfetivada =  (this.A2718ContaProvisorioQtdeContas>0 ? "S" : "N")  ;
         }
         catch(e){}
         try {
            this.A2717ContaProvisorioEfetivada =  (this.A2718ContaProvisorioQtdeContas>0 ? "S" : "N")  ;
         }
         catch(e){}

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode674  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.standaloneModal4Z674=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("CONTAPROVISORIOCONTASEQ","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("CONTAPROVISORIOCONTASEQ","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal4Z674=function()
   {
      return true;
   }
   this.e114z283_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e124z283_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e134z283_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,23,25,28,30,33,35,38,40,43,45,48,50,53,55,58,60,63,65,68,70,73,75,78,80,83,85,88,90,93,95,98,100,103,105,108,110,113,115,118,120,123,125,128,130,133,135,138,140,143,145,148,150,153,155,158,160,163,165,168,170,173,175,178,180,183,185,188,190,193,195,198,200,203,205,208,210,213,215,218,220,223,225,229,232,234,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,269,271];
   this.GXLastCtrlId =271;
   this.Grid1Container = new gx.grid.grid(this, 674,"Conta",238,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"tcontaprovisorio",[9043],false,1,false,true,5,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("nRcdDeleted_674",239,"vNRCDDELETED_674","","","nRcdDeleted_674","int",0,"px",4,1,"right",null,[],"nRcdDeleted_674","nRcdDeleted_674",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9043,240,"CONTAPROVISORIOCONTASEQ","Sequencial","","ContaProvisorioContaSeq","int",0,"px",8,8,"right",null,[],9043,"ContaProvisorioContaSeq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1685,241,"CONTAPAGRECEMPRESAID","Empresa","","ContaPagRecEmpresaId","char",0,"px",10,10,"left",null,[],1685,"ContaPagRecEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1686,242,"CONTAPAGRECNUMERO","Número Conta","","ContaPagRecNumero","int",0,"px",8,8,"right",null,[],1686,"ContaPagRecNumero",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("prompt_1685_1686","PROMPT_1685_1686",273,0,"",0,"",null,"","","gx-prompt Image","");
   Grid1Container.addSingleLineEdit(1637,243,"CONTAPAGRECCLIFORID","Cliente/Fornecedor","","ContaPagRecCliForId","int",0,"px",7,7,"right",null,[],1637,"ContaPagRecCliForId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1638,244,"CONTAPAGRECCLIFORFANTASIA","Nome do Fornecedor","","ContaPagRecCliForFantasia","svchar",0,"px",60,60,"left",null,[],1638,"ContaPagRecCliForFantasia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1699,245,"CONTAPAGRECDTEMISSAO","Data Emissão","","ContaPagRecDtEmissao","date",0,"px",10,10,"right",null,[],1699,"ContaPagRecDtEmissao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1713,246,"CONTAPAGRECVLRCONTA","Valor Conta","","ContaPagRecVlrConta","decimal",0,"px",22,22,"right",null,[],1713,"ContaPagRecVlrConta",true,2,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(1692,247,"CONTAPAGRECSITUACAO","Situação do ContaPagRec","ContaPagRecSituacao","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(9042,248,"CONTAPROVISORIOCONTATIPO","Tipo do Documento","","ContaProvisorioContaTipo","int",0,"px",4,4,"right",null,[],9042,"ContaProvisorioContaTipo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1928,249,"LANCAMENTOCXABCOEMPRESAID","Empresa","","LancamentoCxaBcoEmpresaid","char",0,"px",10,10,"left",null,[],1928,"LancamentoCxaBcoEmpresaid",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1929,250,"LANCAMENTOCXABCONUMERO","Número Lançamento","","LancamentoCxaBcoNumero","int",0,"px",8,8,"right",null,[],1929,"LancamentoCxaBcoNumero",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("prompt_1928_1929","PROMPT_1928_1929",274,0,"",0,"",null,"","","gx-prompt Image","");
   Grid1Container.addSingleLineEdit(1865,251,"LANCAMENTOCXABCOPESSOAID","Cliente/Fornecedor","","LancamentoCxaBcoPessoaId","int",0,"px",7,7,"right",null,[],1865,"LancamentoCxaBcoPessoaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1866,252,"LANCAMENTOCXABCOPESSOAFANTASIA","Fantasia Cliente/Fornecedor","","LancamentoCxaBcoPessoaFantasia","svchar",0,"px",60,60,"left",null,[],1866,"LancamentoCxaBcoPessoaFantasia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1930,253,"LANCAMENTOCXABCODATA","Data","","LancamentoCxaBcoData","date",0,"px",10,10,"right",null,[],1930,"LancamentoCxaBcoData",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1933,254,"LANCAMENTOCXABCOVALOR","Valor","","LancamentoCxaBcoValor","decimal",0,"px",18,18,"right",null,[],1933,"LancamentoCxaBcoValor",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1867,255,"LANCAMENTOCXABCOCAIBANEMPID","Empresa","","LancamentoCxaBcoCaiBanEmpId","char",0,"px",10,10,"left",null,[],1867,"LancamentoCxaBcoCaiBanEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1868,256,"LANCAMENTOCXABCOCAIBANID","Caixa/Banco","","LancamentoCxaBcoCaiBanId","int",0,"px",5,5,"right",null,[],1868,"LancamentoCxaBcoCaiBanId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1869,257,"LANCAMENTOCXABCOCAIBANDESCRICA","Descrição Caixa/Banco","","LancamentoCxaBcoCaiBanDescrica","svchar",0,"px",25,25,"left",null,[],1869,"LancamentoCxaBcoCaiBanDescrica",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2719,258,"CONTACONTAPROVISORIOUSUARIOALT","Conta Conta Provisorio Usuario Alt","","ContaContaProvisorioUsuarioAlt","char",0,"px",12,12,"left",null,[],2719,"ContaContaProvisorioUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2720,259,"CONTACONTAPROVISORIODATAALT","Conta Conta Provisorio Data Alt","","ContaContaProvisorioDataAlt","dtime",0,"px",16,16,"right",null,[],2720,"ContaContaProvisorioDataAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contaprovisorioempresaid,isvalid:null,rgrid:[this.Grid1Container],fld:"CONTAPROVISORIOEMPRESAID",gxz:"Z2702ContaProvisorioEmpresaId",gxold:"O2702ContaProvisorioEmpresaId",gxvar:"A2702ContaProvisorioEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2702ContaProvisorioEmpresaId=Value},v2z:function(Value){gx.O.Z2702ContaProvisorioEmpresaId=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOEMPRESAID",gx.O.A2702ContaProvisorioEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2702ContaProvisorioEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contaprovisorionumero,isvalid:null,rgrid:[this.Grid1Container],fld:"CONTAPROVISORIONUMERO",gxz:"Z2703ContaProvisorioNumero",gxold:"O2703ContaProvisorioNumero",gxvar:"A2703ContaProvisorioNumero",ucs:[],op:[234,225,220,215,210,205,200,195,190,185,180,175,170,165,160,155,150,145,140,135,130,125,120,115,110,105,100,95,90,85,80,75,70,65,60,55,50,45,40,35,30,25,229],ip:[229,225,220,215,210,205,200,195,190,185,180,175,170,165,160,155,150,145,140,135,130,125,120,115,110,105,100,95,90,85,80,75,70,65,60,55,50,45,40,35,30,25,234,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2703ContaProvisorioNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2703ContaProvisorioNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIONUMERO",gx.O.A2703ContaProvisorioNumero,0)},c2v:function(){gx.O.A2703ContaProvisorioNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTAPROVISORIONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOCNPJ",gxz:"Z2704ContaProvisorioCNPJ",gxold:"O2704ContaProvisorioCNPJ",gxvar:"A2704ContaProvisorioCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2704ContaProvisorioCNPJ=Value},v2z:function(Value){gx.O.Z2704ContaProvisorioCNPJ=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOCNPJ",gx.O.A2704ContaProvisorioCNPJ,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2704ContaProvisorioCNPJ=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIOCNPJ")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOCPF",gxz:"Z2705ContaProvisorioCPF",gxold:"O2705ContaProvisorioCPF",gxvar:"A2705ContaProvisorioCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2705ContaProvisorioCPF=Value},v2z:function(Value){gx.O.Z2705ContaProvisorioCPF=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOCPF",gx.O.A2705ContaProvisorioCPF,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2705ContaProvisorioCPF=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIOCPF")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIODATAEMISSAO",gxz:"Z2708ContaProvisorioDataEmissao",gxold:"O2708ContaProvisorioDataEmissao",gxvar:"A2708ContaProvisorioDataEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2708ContaProvisorioDataEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2708ContaProvisorioDataEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIODATAEMISSAO",gx.O.A2708ContaProvisorioDataEmissao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2708ContaProvisorioDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CONTAPROVISORIODATAEMISSAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIODATAVENCIMENTO",gxz:"Z2709ContaProvisorioDataVencimento",gxold:"O2709ContaProvisorioDataVencimento",gxvar:"A2709ContaProvisorioDataVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2709ContaProvisorioDataVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2709ContaProvisorioDataVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIODATAVENCIMENTO",gx.O.A2709ContaProvisorioDataVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2709ContaProvisorioDataVencimento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CONTAPROVISORIODATAVENCIMENTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOVALORNOTA",gxz:"Z2710ContaProvisorioValorNota",gxold:"O2710ContaProvisorioValorNota",gxvar:"A2710ContaProvisorioValorNota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2710ContaProvisorioValorNota=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2710ContaProvisorioValorNota=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CONTAPROVISORIOVALORNOTA",gx.O.A2710ContaProvisorioValorNota,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2710ContaProvisorioValorNota=this.val()},val:function(){return gx.fn.getDecimalValue("CONTAPROVISORIOVALORNOTA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOOPERACAO",gxz:"Z9009ContaProvisorioOperacao",gxold:"O9009ContaProvisorioOperacao",gxvar:"A9009ContaProvisorioOperacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9009ContaProvisorioOperacao=Value},v2z:function(Value){gx.O.Z9009ContaProvisorioOperacao=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOOPERACAO",gx.O.A9009ContaProvisorioOperacao,0)},c2v:function(){gx.O.A9009ContaProvisorioOperacao=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIOOPERACAO")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOCODCIENTEC",gxz:"Z9010ContaProvisorioCodCientec",gxold:"O9010ContaProvisorioCodCientec",gxvar:"A9010ContaProvisorioCodCientec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9010ContaProvisorioCodCientec=Value},v2z:function(Value){gx.O.Z9010ContaProvisorioCodCientec=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOCODCIENTEC",gx.O.A9010ContaProvisorioCodCientec,0)},c2v:function(){gx.O.A9010ContaProvisorioCodCientec=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIOCODCIENTEC")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOHISTORICO",gxz:"Z9016ContaProvisorioHistorico",gxold:"O9016ContaProvisorioHistorico",gxvar:"A9016ContaProvisorioHistorico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9016ContaProvisorioHistorico=Value},v2z:function(Value){gx.O.Z9016ContaProvisorioHistorico=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOHISTORICO",gx.O.A9016ContaProvisorioHistorico,0)},c2v:function(){gx.O.A9016ContaProvisorioHistorico=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIOHISTORICO")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIONUMERODOCUMENTO",gxz:"Z9011ContaProvisorioNumeroDocumento",gxold:"O9011ContaProvisorioNumeroDocumento",gxvar:"A9011ContaProvisorioNumeroDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9011ContaProvisorioNumeroDocumento=Value},v2z:function(Value){gx.O.Z9011ContaProvisorioNumeroDocumento=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIONUMERODOCUMENTO",gx.O.A9011ContaProvisorioNumeroDocumento,0)},c2v:function(){gx.O.A9011ContaProvisorioNumeroDocumento=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIONUMERODOCUMENTO")},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"int",len:18,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOBOLETO",gxz:"Z9017ContaProvisorioBoleto",gxold:"O9017ContaProvisorioBoleto",gxvar:"A9017ContaProvisorioBoleto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9017ContaProvisorioBoleto=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9017ContaProvisorioBoleto=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOBOLETO",gx.O.A9017ContaProvisorioBoleto,0)},c2v:function(){gx.O.A9017ContaProvisorioBoleto=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTAPROVISORIOBOLETO",'.')},nac:gx.falseFn};
   GXValidFnc[73]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOCONVENIOA",gxz:"Z9014ContaProvisorioConvenioA",gxold:"O9014ContaProvisorioConvenioA",gxvar:"A9014ContaProvisorioConvenioA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9014ContaProvisorioConvenioA=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9014ContaProvisorioConvenioA=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOCONVENIOA",gx.O.A9014ContaProvisorioConvenioA,0)},c2v:function(){gx.O.A9014ContaProvisorioConvenioA=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTAPROVISORIOCONVENIOA",'.')},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOCONVENIOB",gxz:"Z9015ContaProvisorioConvenioB",gxold:"O9015ContaProvisorioConvenioB",gxvar:"A9015ContaProvisorioConvenioB",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9015ContaProvisorioConvenioB=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9015ContaProvisorioConvenioB=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOCONVENIOB",gx.O.A9015ContaProvisorioConvenioB,0)},c2v:function(){gx.O.A9015ContaProvisorioConvenioB=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTAPROVISORIOCONVENIOB",'.')},nac:gx.falseFn};
   GXValidFnc[83]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOPESSOANOME",gxz:"Z9012ContaProvisorioPessoaNome",gxold:"O9012ContaProvisorioPessoaNome",gxvar:"A9012ContaProvisorioPessoaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9012ContaProvisorioPessoaNome=Value},v2z:function(Value){gx.O.Z9012ContaProvisorioPessoaNome=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOPESSOANOME",gx.O.A9012ContaProvisorioPessoaNome,0)},c2v:function(){gx.O.A9012ContaProvisorioPessoaNome=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIOPESSOANOME")},nac:gx.falseFn};
   GXValidFnc[88]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contaprovisoriopessoatipo,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOPESSOATIPO",gxz:"Z9013ContaProvisorioPessoaTipo",gxold:"O9013ContaProvisorioPessoaTipo",gxvar:"A9013ContaProvisorioPessoaTipo",ucs:[],op:[90],ip:[90],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A9013ContaProvisorioPessoaTipo=Value},v2z:function(Value){gx.O.Z9013ContaProvisorioPessoaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("CONTAPROVISORIOPESSOATIPO",gx.O.A9013ContaProvisorioPessoaTipo);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9013ContaProvisorioPessoaTipo=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIOPESSOATIPO")},nac:gx.falseFn};
   this.declareDomainHdlr( 90 , function() {
   });
   GXValidFnc[93]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOPESSOAENDERECO",gxz:"Z9018ContaProvisorioPessoaEndereco",gxold:"O9018ContaProvisorioPessoaEndereco",gxvar:"A9018ContaProvisorioPessoaEndereco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9018ContaProvisorioPessoaEndereco=Value},v2z:function(Value){gx.O.Z9018ContaProvisorioPessoaEndereco=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOPESSOAENDERECO",gx.O.A9018ContaProvisorioPessoaEndereco,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9018ContaProvisorioPessoaEndereco=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIOPESSOAENDERECO")},nac:gx.falseFn};
   this.declareDomainHdlr( 95 , function() {
   });
   GXValidFnc[98]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOPESSOANUMENDERE",gxz:"Z9019ContaProvisorioPessoaNumEndere",gxold:"O9019ContaProvisorioPessoaNumEndere",gxvar:"A9019ContaProvisorioPessoaNumEndere",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9019ContaProvisorioPessoaNumEndere=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9019ContaProvisorioPessoaNumEndere=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOPESSOANUMENDERE",gx.O.A9019ContaProvisorioPessoaNumEndere,0)},c2v:function(){gx.O.A9019ContaProvisorioPessoaNumEndere=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTAPROVISORIOPESSOANUMENDERE",'.')},nac:gx.falseFn};
   GXValidFnc[103]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[105]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOPESSOACOMPENDER",gxz:"Z9020ContaProvisorioPessoaCompEnder",gxold:"O9020ContaProvisorioPessoaCompEnder",gxvar:"A9020ContaProvisorioPessoaCompEnder",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9020ContaProvisorioPessoaCompEnder=Value},v2z:function(Value){gx.O.Z9020ContaProvisorioPessoaCompEnder=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOPESSOACOMPENDER",gx.O.A9020ContaProvisorioPessoaCompEnder,0)},c2v:function(){gx.O.A9020ContaProvisorioPessoaCompEnder=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIOPESSOACOMPENDER")},nac:gx.falseFn};
   GXValidFnc[108]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[110]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOPESSOABAIRRO",gxz:"Z9021ContaProvisorioPessoaBairro",gxold:"O9021ContaProvisorioPessoaBairro",gxvar:"A9021ContaProvisorioPessoaBairro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9021ContaProvisorioPessoaBairro=Value},v2z:function(Value){gx.O.Z9021ContaProvisorioPessoaBairro=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOPESSOABAIRRO",gx.O.A9021ContaProvisorioPessoaBairro,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9021ContaProvisorioPessoaBairro=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIOPESSOABAIRRO")},nac:gx.falseFn};
   this.declareDomainHdlr( 110 , function() {
   });
   GXValidFnc[113]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[115]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOPESSOACIDADENOM",gxz:"Z9022ContaProvisorioPessoaCidadeNom",gxold:"O9022ContaProvisorioPessoaCidadeNom",gxvar:"A9022ContaProvisorioPessoaCidadeNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9022ContaProvisorioPessoaCidadeNom=Value},v2z:function(Value){gx.O.Z9022ContaProvisorioPessoaCidadeNom=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOPESSOACIDADENOM",gx.O.A9022ContaProvisorioPessoaCidadeNom,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9022ContaProvisorioPessoaCidadeNom=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIOPESSOACIDADENOM")},nac:gx.falseFn};
   this.declareDomainHdlr( 115 , function() {
   });
   GXValidFnc[118]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[120]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contaprovisoriopessoauf,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOPESSOAUF",gxz:"Z9023ContaProvisorioPessoaUF",gxold:"O9023ContaProvisorioPessoaUF",gxvar:"A9023ContaProvisorioPessoaUF",ucs:[],op:[120],ip:[120],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A9023ContaProvisorioPessoaUF=Value},v2z:function(Value){gx.O.Z9023ContaProvisorioPessoaUF=Value},v2c:function(){gx.fn.setComboBoxValue("CONTAPROVISORIOPESSOAUF",gx.O.A9023ContaProvisorioPessoaUF);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9023ContaProvisorioPessoaUF=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIOPESSOAUF")},nac:gx.falseFn};
   this.declareDomainHdlr( 120 , function() {
   });
   GXValidFnc[123]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[125]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOPESSOACEP",gxz:"Z9024ContaProvisorioPessoaCEP",gxold:"O9024ContaProvisorioPessoaCEP",gxvar:"A9024ContaProvisorioPessoaCEP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9024ContaProvisorioPessoaCEP=Value},v2z:function(Value){gx.O.Z9024ContaProvisorioPessoaCEP=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOPESSOACEP",gx.O.A9024ContaProvisorioPessoaCEP,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9024ContaProvisorioPessoaCEP=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIOPESSOACEP")},nac:gx.falseFn};
   this.declareDomainHdlr( 125 , function() {
   });
   GXValidFnc[128]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[130]={lvl:0,type:"svchar",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOINSCESTADUAL",gxz:"Z9025ContaProvisorioInscEstadual",gxold:"O9025ContaProvisorioInscEstadual",gxvar:"A9025ContaProvisorioInscEstadual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9025ContaProvisorioInscEstadual=Value},v2z:function(Value){gx.O.Z9025ContaProvisorioInscEstadual=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOINSCESTADUAL",gx.O.A9025ContaProvisorioInscEstadual,0)},c2v:function(){gx.O.A9025ContaProvisorioInscEstadual=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIOINSCESTADUAL")},nac:gx.falseFn};
   GXValidFnc[133]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[135]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOINSCMUNICIPAL",gxz:"Z9026ContaProvisorioInscMunicipal",gxold:"O9026ContaProvisorioInscMunicipal",gxvar:"A9026ContaProvisorioInscMunicipal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9026ContaProvisorioInscMunicipal=Value},v2z:function(Value){gx.O.Z9026ContaProvisorioInscMunicipal=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOINSCMUNICIPAL",gx.O.A9026ContaProvisorioInscMunicipal,0)},c2v:function(){gx.O.A9026ContaProvisorioInscMunicipal=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIOINSCMUNICIPAL")},nac:gx.falseFn};
   GXValidFnc[138]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[140]={lvl:0,type:"svchar",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOPESSOARG",gxz:"Z9027ContaProvisorioPessoaRG",gxold:"O9027ContaProvisorioPessoaRG",gxvar:"A9027ContaProvisorioPessoaRG",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9027ContaProvisorioPessoaRG=Value},v2z:function(Value){gx.O.Z9027ContaProvisorioPessoaRG=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOPESSOARG",gx.O.A9027ContaProvisorioPessoaRG,0)},c2v:function(){gx.O.A9027ContaProvisorioPessoaRG=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIOPESSOARG")},nac:gx.falseFn};
   GXValidFnc[143]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[145]={lvl:0,type:"svchar",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOPESSOAORGEXP",gxz:"Z9028ContaProvisorioPessoaOrgExp",gxold:"O9028ContaProvisorioPessoaOrgExp",gxvar:"A9028ContaProvisorioPessoaOrgExp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9028ContaProvisorioPessoaOrgExp=Value},v2z:function(Value){gx.O.Z9028ContaProvisorioPessoaOrgExp=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOPESSOAORGEXP",gx.O.A9028ContaProvisorioPessoaOrgExp,0)},c2v:function(){gx.O.A9028ContaProvisorioPessoaOrgExp=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIOPESSOAORGEXP")},nac:gx.falseFn};
   GXValidFnc[148]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[150]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOPESSOATELRES",gxz:"Z9029ContaProvisorioPessoaTelRes",gxold:"O9029ContaProvisorioPessoaTelRes",gxvar:"A9029ContaProvisorioPessoaTelRes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9029ContaProvisorioPessoaTelRes=Value},v2z:function(Value){gx.O.Z9029ContaProvisorioPessoaTelRes=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOPESSOATELRES",gx.O.A9029ContaProvisorioPessoaTelRes,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9029ContaProvisorioPessoaTelRes=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIOPESSOATELRES")},nac:gx.falseFn};
   this.declareDomainHdlr( 150 , function() {
   });
   GXValidFnc[153]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[155]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOPESSOATELCOM",gxz:"Z9030ContaProvisorioPessoaTelCom",gxold:"O9030ContaProvisorioPessoaTelCom",gxvar:"A9030ContaProvisorioPessoaTelCom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9030ContaProvisorioPessoaTelCom=Value},v2z:function(Value){gx.O.Z9030ContaProvisorioPessoaTelCom=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOPESSOATELCOM",gx.O.A9030ContaProvisorioPessoaTelCom,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9030ContaProvisorioPessoaTelCom=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIOPESSOATELCOM")},nac:gx.falseFn};
   this.declareDomainHdlr( 155 , function() {
   });
   GXValidFnc[158]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[160]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOPESSOACELULAR",gxz:"Z9031ContaProvisorioPessoaCelular",gxold:"O9031ContaProvisorioPessoaCelular",gxvar:"A9031ContaProvisorioPessoaCelular",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9031ContaProvisorioPessoaCelular=Value},v2z:function(Value){gx.O.Z9031ContaProvisorioPessoaCelular=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOPESSOACELULAR",gx.O.A9031ContaProvisorioPessoaCelular,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9031ContaProvisorioPessoaCelular=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIOPESSOACELULAR")},nac:gx.falseFn};
   this.declareDomainHdlr( 160 , function() {
   });
   GXValidFnc[163]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[165]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOPESSOAEMAIL",gxz:"Z9032ContaProvisorioPessoaEmail",gxold:"O9032ContaProvisorioPessoaEmail",gxvar:"A9032ContaProvisorioPessoaEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9032ContaProvisorioPessoaEmail=Value},v2z:function(Value){gx.O.Z9032ContaProvisorioPessoaEmail=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOPESSOAEMAIL",gx.O.A9032ContaProvisorioPessoaEmail,0)},c2v:function(){gx.O.A9032ContaProvisorioPessoaEmail=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIOPESSOAEMAIL")},nac:gx.falseFn};
   GXValidFnc[168]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[170]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOPESSOABANCO",gxz:"Z9033ContaProvisorioPessoaBanco",gxold:"O9033ContaProvisorioPessoaBanco",gxvar:"A9033ContaProvisorioPessoaBanco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9033ContaProvisorioPessoaBanco=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9033ContaProvisorioPessoaBanco=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOPESSOABANCO",gx.O.A9033ContaProvisorioPessoaBanco,0)},c2v:function(){gx.O.A9033ContaProvisorioPessoaBanco=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTAPROVISORIOPESSOABANCO",'.')},nac:gx.falseFn};
   GXValidFnc[173]={fld:"TEXTBLOCK34", format:0,grid:0};
   GXValidFnc[175]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOPESSOAAGENCIA",gxz:"Z9034ContaProvisorioPessoaAgencia",gxold:"O9034ContaProvisorioPessoaAgencia",gxvar:"A9034ContaProvisorioPessoaAgencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9034ContaProvisorioPessoaAgencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9034ContaProvisorioPessoaAgencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOPESSOAAGENCIA",gx.O.A9034ContaProvisorioPessoaAgencia,0)},c2v:function(){gx.O.A9034ContaProvisorioPessoaAgencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTAPROVISORIOPESSOAAGENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[178]={fld:"TEXTBLOCK35", format:0,grid:0};
   GXValidFnc[180]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOPESSOADIGAGENCI",gxz:"Z9035ContaProvisorioPessoaDigAgenci",gxold:"O9035ContaProvisorioPessoaDigAgenci",gxvar:"A9035ContaProvisorioPessoaDigAgenci",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9035ContaProvisorioPessoaDigAgenci=Value},v2z:function(Value){gx.O.Z9035ContaProvisorioPessoaDigAgenci=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOPESSOADIGAGENCI",gx.O.A9035ContaProvisorioPessoaDigAgenci,0)},c2v:function(){gx.O.A9035ContaProvisorioPessoaDigAgenci=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIOPESSOADIGAGENCI")},nac:gx.falseFn};
   GXValidFnc[183]={fld:"TEXTBLOCK36", format:0,grid:0};
   GXValidFnc[185]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOPESSOACONTA",gxz:"Z9036ContaProvisorioPessoaConta",gxold:"O9036ContaProvisorioPessoaConta",gxvar:"A9036ContaProvisorioPessoaConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9036ContaProvisorioPessoaConta=Value},v2z:function(Value){gx.O.Z9036ContaProvisorioPessoaConta=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOPESSOACONTA",gx.O.A9036ContaProvisorioPessoaConta,0)},c2v:function(){gx.O.A9036ContaProvisorioPessoaConta=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIOPESSOACONTA")},nac:gx.falseFn};
   GXValidFnc[188]={fld:"TEXTBLOCK37", format:0,grid:0};
   GXValidFnc[190]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOPESSOADIGCONTA",gxz:"Z9037ContaProvisorioPessoaDigConta",gxold:"O9037ContaProvisorioPessoaDigConta",gxvar:"A9037ContaProvisorioPessoaDigConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9037ContaProvisorioPessoaDigConta=Value},v2z:function(Value){gx.O.Z9037ContaProvisorioPessoaDigConta=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOPESSOADIGCONTA",gx.O.A9037ContaProvisorioPessoaDigConta,0)},c2v:function(){gx.O.A9037ContaProvisorioPessoaDigConta=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIOPESSOADIGCONTA")},nac:gx.falseFn};
   GXValidFnc[193]={fld:"TEXTBLOCK38", format:0,grid:0};
   GXValidFnc[195]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOCENTROCUSTOA",gxz:"Z9038ContaProvisorioCentroCustoA",gxold:"O9038ContaProvisorioCentroCustoA",gxvar:"A9038ContaProvisorioCentroCustoA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9038ContaProvisorioCentroCustoA=Value},v2z:function(Value){gx.O.Z9038ContaProvisorioCentroCustoA=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOCENTROCUSTOA",gx.O.A9038ContaProvisorioCentroCustoA,0)},c2v:function(){gx.O.A9038ContaProvisorioCentroCustoA=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIOCENTROCUSTOA")},nac:gx.falseFn};
   GXValidFnc[198]={fld:"TEXTBLOCK39", format:0,grid:0};
   GXValidFnc[200]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOCENTROCUSTOB",gxz:"Z9039ContaProvisorioCentroCustoB",gxold:"O9039ContaProvisorioCentroCustoB",gxvar:"A9039ContaProvisorioCentroCustoB",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9039ContaProvisorioCentroCustoB=Value},v2z:function(Value){gx.O.Z9039ContaProvisorioCentroCustoB=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOCENTROCUSTOB",gx.O.A9039ContaProvisorioCentroCustoB,0)},c2v:function(){gx.O.A9039ContaProvisorioCentroCustoB=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIOCENTROCUSTOB")},nac:gx.falseFn};
   GXValidFnc[203]={fld:"TEXTBLOCK40", format:0,grid:0};
   GXValidFnc[205]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIONUMPEDIDO",gxz:"Z9040ContaProvisorioNumPedido",gxold:"O9040ContaProvisorioNumPedido",gxvar:"A9040ContaProvisorioNumPedido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9040ContaProvisorioNumPedido=Value},v2z:function(Value){gx.O.Z9040ContaProvisorioNumPedido=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIONUMPEDIDO",gx.O.A9040ContaProvisorioNumPedido,0)},c2v:function(){gx.O.A9040ContaProvisorioNumPedido=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIONUMPEDIDO")},nac:gx.falseFn};
   GXValidFnc[208]={fld:"TEXTBLOCK41", format:0,grid:0};
   GXValidFnc[210]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIODATACRIACAO",gxz:"Z9041ContaProvisorioDataCriacao",gxold:"O9041ContaProvisorioDataCriacao",gxvar:"A9041ContaProvisorioDataCriacao",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9041ContaProvisorioDataCriacao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9041ContaProvisorioDataCriacao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIODATACRIACAO",gx.O.A9041ContaProvisorioDataCriacao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9041ContaProvisorioDataCriacao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CONTAPROVISORIODATACRIACAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 210 , function() {
   });
   GXValidFnc[213]={fld:"TEXTBLOCK42", format:0,grid:0};
   GXValidFnc[215]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOUSUARIOCRIACAO",gxz:"Z9053ContaProvisorioUsuarioCriacao",gxold:"O9053ContaProvisorioUsuarioCriacao",gxvar:"A9053ContaProvisorioUsuarioCriacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9053ContaProvisorioUsuarioCriacao=Value},v2z:function(Value){gx.O.Z9053ContaProvisorioUsuarioCriacao=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOUSUARIOCRIACAO",gx.O.A9053ContaProvisorioUsuarioCriacao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9053ContaProvisorioUsuarioCriacao=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIOUSUARIOCRIACAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 215 , function() {
   });
   GXValidFnc[218]={fld:"TEXTBLOCK43", format:0,grid:0};
   GXValidFnc[220]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOUSUARIOALT",gxz:"Z2715ContaProvisorioUsuarioAlt",gxold:"O2715ContaProvisorioUsuarioAlt",gxvar:"A2715ContaProvisorioUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2715ContaProvisorioUsuarioAlt=Value},v2z:function(Value){gx.O.Z2715ContaProvisorioUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOUSUARIOALT",gx.O.A2715ContaProvisorioUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2715ContaProvisorioUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 220 , function() {
   });
   GXValidFnc[223]={fld:"TEXTBLOCK44", format:0,grid:0};
   GXValidFnc[225]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIODATAHORAALT",gxz:"Z2716ContaProvisorioDataHoraAlt",gxold:"O2716ContaProvisorioDataHoraAlt",gxvar:"A2716ContaProvisorioDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2716ContaProvisorioDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2716ContaProvisorioDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIODATAHORAALT",gx.O.A2716ContaProvisorioDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2716ContaProvisorioDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CONTAPROVISORIODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 225 , function() {
   });
   GXValidFnc[229]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOEFETIVADA",gxz:"Z2717ContaProvisorioEfetivada",gxold:"O2717ContaProvisorioEfetivada",gxvar:"A2717ContaProvisorioEfetivada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2717ContaProvisorioEfetivada=Value},v2z:function(Value){gx.O.Z2717ContaProvisorioEfetivada=Value},v2c:function(){gx.fn.setCheckBoxValue("CONTAPROVISORIOEFETIVADA",gx.O.A2717ContaProvisorioEfetivada,"S")},c2v:function(){gx.O.A2717ContaProvisorioEfetivada=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIOEFETIVADA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[232]={fld:"TEXTBLOCK45", format:0,grid:0};
   GXValidFnc[234]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contaprovisorioqtdecontas,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOQTDECONTAS",gxz:"Z2718ContaProvisorioQtdeContas",gxold:"O2718ContaProvisorioQtdeContas",gxvar:"A2718ContaProvisorioQtdeContas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2718ContaProvisorioQtdeContas=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2718ContaProvisorioQtdeContas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIOQTDECONTAS",gx.O.A2718ContaProvisorioQtdeContas,0)},c2v:function(){gx.O.A2718ContaProvisorioQtdeContas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTAPROVISORIOQTDECONTAS",'.')},nac:gx.falseFn};
   GXValidFnc[239]={lvl:674,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:238,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_674",gxz:"ZnRcdDeleted_674",gxold:"OnRcdDeleted_674",gxvar:"nRcdDeleted_674",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_674=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_674=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_674",row || gx.fn.currentGridRowImpl(238),gx.O.nRcdDeleted_674,0)},c2v:function(){gx.O.nRcdDeleted_674=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_674",row || gx.fn.currentGridRowImpl(238),'.')},nac:gx.falseFn};
   GXValidFnc[240]={lvl:674,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:1,grid:238,gxgrid:this.Grid1Container,fnc:this.Valid_Contaprovisoriocontaseq,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOCONTASEQ",gxz:"Z9043ContaProvisorioContaSeq",gxold:"O9043ContaProvisorioContaSeq",gxvar:"A9043ContaProvisorioContaSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9043ContaProvisorioContaSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9043ContaProvisorioContaSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPROVISORIOCONTASEQ",row || gx.fn.currentGridRowImpl(238),gx.O.A9043ContaProvisorioContaSeq,0)},c2v:function(){gx.O.A9043ContaProvisorioContaSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAPROVISORIOCONTASEQ",row || gx.fn.currentGridRowImpl(238),'.')},nac:gx.falseFn};
   GXValidFnc[241]={lvl:674,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:1,grid:238,gxgrid:this.Grid1Container,fnc:this.Valid_Contapagrecempresaid,isvalid:null,rgrid:[],fld:"CONTAPAGRECEMPRESAID",gxz:"Z1685ContaPagRecEmpresaId",gxold:"O1685ContaPagRecEmpresaId",gxvar:"A1685ContaPagRecEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1685ContaPagRecEmpresaId=Value},v2z:function(Value){gx.O.Z1685ContaPagRecEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECEMPRESAID",row || gx.fn.currentGridRowImpl(238),gx.O.A1685ContaPagRecEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1685ContaPagRecEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPAGRECEMPRESAID",row || gx.fn.currentGridRowImpl(238))},nac:gx.falseFn};
   GXValidFnc[242]={lvl:674,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:1,grid:238,gxgrid:this.Grid1Container,fnc:this.Valid_Contapagrecnumero,isvalid:null,rgrid:[],fld:"CONTAPAGRECNUMERO",gxz:"Z1686ContaPagRecNumero",gxold:"O1686ContaPagRecNumero",gxvar:"A1686ContaPagRecNumero",ucs:[],op:[244,243,247,246,245],ip:[244,247,246,245,243,242,241],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1686ContaPagRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1686ContaPagRecNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECNUMERO",row || gx.fn.currentGridRowImpl(238),gx.O.A1686ContaPagRecNumero,0)},c2v:function(){gx.O.A1686ContaPagRecNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAPAGRECNUMERO",row || gx.fn.currentGridRowImpl(238),'.')},nac:gx.falseFn};
   GXValidFnc[243]={lvl:674,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:1,grid:238,gxgrid:this.Grid1Container,fnc:this.Valid_Contapagreccliforid,isvalid:null,rgrid:[],fld:"CONTAPAGRECCLIFORID",gxz:"Z1637ContaPagRecCliForId",gxold:"O1637ContaPagRecCliForId",gxvar:"A1637ContaPagRecCliForId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1637ContaPagRecCliForId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1637ContaPagRecCliForId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECCLIFORID",row || gx.fn.currentGridRowImpl(238),gx.O.A1637ContaPagRecCliForId,0)},c2v:function(){gx.O.A1637ContaPagRecCliForId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAPAGRECCLIFORID",row || gx.fn.currentGridRowImpl(238),'.')},nac:gx.falseFn};
   GXValidFnc[244]={lvl:674,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:1,grid:238,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECCLIFORFANTASIA",gxz:"Z1638ContaPagRecCliForFantasia",gxold:"O1638ContaPagRecCliForFantasia",gxvar:"A1638ContaPagRecCliForFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1638ContaPagRecCliForFantasia=Value},v2z:function(Value){gx.O.Z1638ContaPagRecCliForFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECCLIFORFANTASIA",row || gx.fn.currentGridRowImpl(238),gx.O.A1638ContaPagRecCliForFantasia,0)},c2v:function(){gx.O.A1638ContaPagRecCliForFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPAGRECCLIFORFANTASIA",row || gx.fn.currentGridRowImpl(238))},nac:gx.falseFn};
   GXValidFnc[245]={lvl:674,type:"date",len:10,dec:0,sign:false,ro:1,isacc:1,grid:238,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECDTEMISSAO",gxz:"Z1699ContaPagRecDtEmissao",gxold:"O1699ContaPagRecDtEmissao",gxvar:"A1699ContaPagRecDtEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1699ContaPagRecDtEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1699ContaPagRecDtEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECDTEMISSAO",row || gx.fn.currentGridRowImpl(238),gx.O.A1699ContaPagRecDtEmissao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1699ContaPagRecDtEmissao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CONTAPAGRECDTEMISSAO",row || gx.fn.currentGridRowImpl(238))},nac:gx.falseFn};
   GXValidFnc[246]={lvl:674,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:1,grid:238,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECVLRCONTA",gxz:"Z1713ContaPagRecVlrConta",gxold:"O1713ContaPagRecVlrConta",gxvar:"A1713ContaPagRecVlrConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1713ContaPagRecVlrConta=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z1713ContaPagRecVlrConta=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CONTAPAGRECVLRCONTA",row || gx.fn.currentGridRowImpl(238),gx.O.A1713ContaPagRecVlrConta,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1713ContaPagRecVlrConta=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CONTAPAGRECVLRCONTA",row || gx.fn.currentGridRowImpl(238),'.',',')},nac:gx.falseFn};
   GXValidFnc[247]={lvl:674,type:"char",len:1,dec:0,sign:false,ro:1,isacc:1,grid:238,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECSITUACAO",gxz:"Z1692ContaPagRecSituacao",gxold:"O1692ContaPagRecSituacao",gxvar:"A1692ContaPagRecSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1692ContaPagRecSituacao=Value},v2z:function(Value){gx.O.Z1692ContaPagRecSituacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CONTAPAGRECSITUACAO",row || gx.fn.currentGridRowImpl(238),gx.O.A1692ContaPagRecSituacao)},c2v:function(){gx.O.A1692ContaPagRecSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPAGRECSITUACAO",row || gx.fn.currentGridRowImpl(238))},nac:gx.falseFn};
   GXValidFnc[248]={lvl:674,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:1,grid:238,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIOCONTATIPO",gxz:"Z9042ContaProvisorioContaTipo",gxold:"O9042ContaProvisorioContaTipo",gxvar:"A9042ContaProvisorioContaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9042ContaProvisorioContaTipo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9042ContaProvisorioContaTipo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPROVISORIOCONTATIPO",row || gx.fn.currentGridRowImpl(238),gx.O.A9042ContaProvisorioContaTipo,0)},c2v:function(){gx.O.A9042ContaProvisorioContaTipo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAPROVISORIOCONTATIPO",row || gx.fn.currentGridRowImpl(238),'.')},nac:gx.falseFn};
   GXValidFnc[249]={lvl:674,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:1,grid:238,gxgrid:this.Grid1Container,fnc:this.Valid_Lancamentocxabcoempresaid,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCOEMPRESAID",gxz:"Z1928LancamentoCxaBcoEmpresaid",gxold:"O1928LancamentoCxaBcoEmpresaid",gxvar:"A1928LancamentoCxaBcoEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1928LancamentoCxaBcoEmpresaid=Value},v2z:function(Value){gx.O.Z1928LancamentoCxaBcoEmpresaid=Value},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCXABCOEMPRESAID",row || gx.fn.currentGridRowImpl(238),gx.O.A1928LancamentoCxaBcoEmpresaid,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1928LancamentoCxaBcoEmpresaid=this.val()},val:function(row){return gx.fn.getGridControlValue("LANCAMENTOCXABCOEMPRESAID",row || gx.fn.currentGridRowImpl(238))},nac:gx.falseFn};
   GXValidFnc[250]={lvl:674,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:1,grid:238,gxgrid:this.Grid1Container,fnc:this.Valid_Lancamentocxabconumero,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCONUMERO",gxz:"Z1929LancamentoCxaBcoNumero",gxold:"O1929LancamentoCxaBcoNumero",gxvar:"A1929LancamentoCxaBcoNumero",ucs:[],op:[257,252,256,255,251,254,253],ip:[257,252,254,253,256,255,251,250,249],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1929LancamentoCxaBcoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1929LancamentoCxaBcoNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCXABCONUMERO",row || gx.fn.currentGridRowImpl(238),gx.O.A1929LancamentoCxaBcoNumero,0)},c2v:function(){gx.O.A1929LancamentoCxaBcoNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LANCAMENTOCXABCONUMERO",row || gx.fn.currentGridRowImpl(238),'.')},nac:gx.falseFn};
   GXValidFnc[251]={lvl:674,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:1,grid:238,gxgrid:this.Grid1Container,fnc:this.Valid_Lancamentocxabcopessoaid,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCOPESSOAID",gxz:"Z1865LancamentoCxaBcoPessoaId",gxold:"O1865LancamentoCxaBcoPessoaId",gxvar:"A1865LancamentoCxaBcoPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1865LancamentoCxaBcoPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1865LancamentoCxaBcoPessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCXABCOPESSOAID",row || gx.fn.currentGridRowImpl(238),gx.O.A1865LancamentoCxaBcoPessoaId,0)},c2v:function(){gx.O.A1865LancamentoCxaBcoPessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LANCAMENTOCXABCOPESSOAID",row || gx.fn.currentGridRowImpl(238),'.')},nac:gx.falseFn};
   GXValidFnc[252]={lvl:674,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:1,grid:238,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCOPESSOAFANTASIA",gxz:"Z1866LancamentoCxaBcoPessoaFantasia",gxold:"O1866LancamentoCxaBcoPessoaFantasia",gxvar:"A1866LancamentoCxaBcoPessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1866LancamentoCxaBcoPessoaFantasia=Value},v2z:function(Value){gx.O.Z1866LancamentoCxaBcoPessoaFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCXABCOPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(238),gx.O.A1866LancamentoCxaBcoPessoaFantasia,0)},c2v:function(){gx.O.A1866LancamentoCxaBcoPessoaFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("LANCAMENTOCXABCOPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(238))},nac:gx.falseFn};
   GXValidFnc[253]={lvl:674,type:"date",len:10,dec:0,sign:false,ro:1,isacc:1,grid:238,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCODATA",gxz:"Z1930LancamentoCxaBcoData",gxold:"O1930LancamentoCxaBcoData",gxvar:"A1930LancamentoCxaBcoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1930LancamentoCxaBcoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1930LancamentoCxaBcoData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCXABCODATA",row || gx.fn.currentGridRowImpl(238),gx.O.A1930LancamentoCxaBcoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1930LancamentoCxaBcoData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("LANCAMENTOCXABCODATA",row || gx.fn.currentGridRowImpl(238))},nac:gx.falseFn};
   GXValidFnc[254]={lvl:674,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:1,grid:238,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCOVALOR",gxz:"Z1933LancamentoCxaBcoValor",gxold:"O1933LancamentoCxaBcoValor",gxvar:"A1933LancamentoCxaBcoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1933LancamentoCxaBcoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z1933LancamentoCxaBcoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("LANCAMENTOCXABCOVALOR",row || gx.fn.currentGridRowImpl(238),gx.O.A1933LancamentoCxaBcoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1933LancamentoCxaBcoValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("LANCAMENTOCXABCOVALOR",row || gx.fn.currentGridRowImpl(238),'.',',')},nac:gx.falseFn};
   GXValidFnc[255]={lvl:674,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:1,grid:238,gxgrid:this.Grid1Container,fnc:this.Valid_Lancamentocxabcocaibanempid,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCOCAIBANEMPID",gxz:"Z1867LancamentoCxaBcoCaiBanEmpId",gxold:"O1867LancamentoCxaBcoCaiBanEmpId",gxvar:"A1867LancamentoCxaBcoCaiBanEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1867LancamentoCxaBcoCaiBanEmpId=Value},v2z:function(Value){gx.O.Z1867LancamentoCxaBcoCaiBanEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCXABCOCAIBANEMPID",row || gx.fn.currentGridRowImpl(238),gx.O.A1867LancamentoCxaBcoCaiBanEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1867LancamentoCxaBcoCaiBanEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("LANCAMENTOCXABCOCAIBANEMPID",row || gx.fn.currentGridRowImpl(238))},nac:gx.falseFn};
   GXValidFnc[256]={lvl:674,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:1,isacc:1,grid:238,gxgrid:this.Grid1Container,fnc:this.Valid_Lancamentocxabcocaibanid,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCOCAIBANID",gxz:"Z1868LancamentoCxaBcoCaiBanId",gxold:"O1868LancamentoCxaBcoCaiBanId",gxvar:"A1868LancamentoCxaBcoCaiBanId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1868LancamentoCxaBcoCaiBanId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1868LancamentoCxaBcoCaiBanId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCXABCOCAIBANID",row || gx.fn.currentGridRowImpl(238),gx.O.A1868LancamentoCxaBcoCaiBanId,0)},c2v:function(){gx.O.A1868LancamentoCxaBcoCaiBanId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LANCAMENTOCXABCOCAIBANID",row || gx.fn.currentGridRowImpl(238),'.')},nac:gx.falseFn};
   GXValidFnc[257]={lvl:674,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:1,grid:238,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCOCAIBANDESCRICA",gxz:"Z1869LancamentoCxaBcoCaiBanDescrica",gxold:"O1869LancamentoCxaBcoCaiBanDescrica",gxvar:"A1869LancamentoCxaBcoCaiBanDescrica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1869LancamentoCxaBcoCaiBanDescrica=Value},v2z:function(Value){gx.O.Z1869LancamentoCxaBcoCaiBanDescrica=Value},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCXABCOCAIBANDESCRICA",row || gx.fn.currentGridRowImpl(238),gx.O.A1869LancamentoCxaBcoCaiBanDescrica,0)},c2v:function(){gx.O.A1869LancamentoCxaBcoCaiBanDescrica=this.val()},val:function(row){return gx.fn.getGridControlValue("LANCAMENTOCXABCOCAIBANDESCRICA",row || gx.fn.currentGridRowImpl(238))},nac:gx.falseFn};
   GXValidFnc[258]={lvl:674,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,isacc:1,grid:238,gxgrid:this.Grid1Container,fnc:this.Valid_Contacontaprovisoriousuarioalt,isvalid:null,rgrid:[],fld:"CONTACONTAPROVISORIOUSUARIOALT",gxz:"Z2719ContaContaProvisorioUsuarioAlt",gxold:"O2719ContaContaProvisorioUsuarioAlt",gxvar:"A2719ContaContaProvisorioUsuarioAlt",ucs:[],op:[229,234],ip:[229,234,258],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2719ContaContaProvisorioUsuarioAlt=Value},v2z:function(Value){gx.O.Z2719ContaContaProvisorioUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("CONTACONTAPROVISORIOUSUARIOALT",row || gx.fn.currentGridRowImpl(238),gx.O.A2719ContaContaProvisorioUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2719ContaContaProvisorioUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTACONTAPROVISORIOUSUARIOALT",row || gx.fn.currentGridRowImpl(238))},nac:gx.falseFn};
   GXValidFnc[259]={lvl:674,type:"dtime",len:10,dec:5,sign:false,ro:0,isacc:1,grid:238,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTACONTAPROVISORIODATAALT",gxz:"Z2720ContaContaProvisorioDataAlt",gxold:"O2720ContaContaProvisorioDataAlt",gxvar:"A2720ContaContaProvisorioDataAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2720ContaContaProvisorioDataAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2720ContaContaProvisorioDataAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTACONTAPROVISORIODATAALT",row || gx.fn.currentGridRowImpl(238),gx.O.A2720ContaContaProvisorioDataAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2720ContaContaProvisorioDataAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CONTACONTAPROVISORIODATAALT",row || gx.fn.currentGridRowImpl(238))},nac:gx.falseFn};
   GXValidFnc[260]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[269]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[271]={fld:"BTNHELP",grid:0};
   this.A2702ContaProvisorioEmpresaId = "" ;
   this.Z2702ContaProvisorioEmpresaId = "" ;
   this.O2702ContaProvisorioEmpresaId = "" ;
   this.A2703ContaProvisorioNumero = 0 ;
   this.Z2703ContaProvisorioNumero = 0 ;
   this.O2703ContaProvisorioNumero = 0 ;
   this.A2704ContaProvisorioCNPJ = "" ;
   this.Z2704ContaProvisorioCNPJ = "" ;
   this.O2704ContaProvisorioCNPJ = "" ;
   this.A2705ContaProvisorioCPF = "" ;
   this.Z2705ContaProvisorioCPF = "" ;
   this.O2705ContaProvisorioCPF = "" ;
   this.A2708ContaProvisorioDataEmissao = gx.date.nullDate() ;
   this.Z2708ContaProvisorioDataEmissao = gx.date.nullDate() ;
   this.O2708ContaProvisorioDataEmissao = gx.date.nullDate() ;
   this.A2709ContaProvisorioDataVencimento = gx.date.nullDate() ;
   this.Z2709ContaProvisorioDataVencimento = gx.date.nullDate() ;
   this.O2709ContaProvisorioDataVencimento = gx.date.nullDate() ;
   this.A2710ContaProvisorioValorNota = 0 ;
   this.Z2710ContaProvisorioValorNota = 0 ;
   this.O2710ContaProvisorioValorNota = 0 ;
   this.A9009ContaProvisorioOperacao = "" ;
   this.Z9009ContaProvisorioOperacao = "" ;
   this.O9009ContaProvisorioOperacao = "" ;
   this.A9010ContaProvisorioCodCientec = "" ;
   this.Z9010ContaProvisorioCodCientec = "" ;
   this.O9010ContaProvisorioCodCientec = "" ;
   this.A9016ContaProvisorioHistorico = "" ;
   this.Z9016ContaProvisorioHistorico = "" ;
   this.O9016ContaProvisorioHistorico = "" ;
   this.A9011ContaProvisorioNumeroDocumento = "" ;
   this.Z9011ContaProvisorioNumeroDocumento = "" ;
   this.O9011ContaProvisorioNumeroDocumento = "" ;
   this.A9017ContaProvisorioBoleto = 0 ;
   this.Z9017ContaProvisorioBoleto = 0 ;
   this.O9017ContaProvisorioBoleto = 0 ;
   this.A9014ContaProvisorioConvenioA = 0 ;
   this.Z9014ContaProvisorioConvenioA = 0 ;
   this.O9014ContaProvisorioConvenioA = 0 ;
   this.A9015ContaProvisorioConvenioB = 0 ;
   this.Z9015ContaProvisorioConvenioB = 0 ;
   this.O9015ContaProvisorioConvenioB = 0 ;
   this.A9012ContaProvisorioPessoaNome = "" ;
   this.Z9012ContaProvisorioPessoaNome = "" ;
   this.O9012ContaProvisorioPessoaNome = "" ;
   this.A9013ContaProvisorioPessoaTipo = "" ;
   this.Z9013ContaProvisorioPessoaTipo = "" ;
   this.O9013ContaProvisorioPessoaTipo = "" ;
   this.A9018ContaProvisorioPessoaEndereco = "" ;
   this.Z9018ContaProvisorioPessoaEndereco = "" ;
   this.O9018ContaProvisorioPessoaEndereco = "" ;
   this.A9019ContaProvisorioPessoaNumEndere = 0 ;
   this.Z9019ContaProvisorioPessoaNumEndere = 0 ;
   this.O9019ContaProvisorioPessoaNumEndere = 0 ;
   this.A9020ContaProvisorioPessoaCompEnder = "" ;
   this.Z9020ContaProvisorioPessoaCompEnder = "" ;
   this.O9020ContaProvisorioPessoaCompEnder = "" ;
   this.A9021ContaProvisorioPessoaBairro = "" ;
   this.Z9021ContaProvisorioPessoaBairro = "" ;
   this.O9021ContaProvisorioPessoaBairro = "" ;
   this.A9022ContaProvisorioPessoaCidadeNom = "" ;
   this.Z9022ContaProvisorioPessoaCidadeNom = "" ;
   this.O9022ContaProvisorioPessoaCidadeNom = "" ;
   this.A9023ContaProvisorioPessoaUF = "" ;
   this.Z9023ContaProvisorioPessoaUF = "" ;
   this.O9023ContaProvisorioPessoaUF = "" ;
   this.A9024ContaProvisorioPessoaCEP = "" ;
   this.Z9024ContaProvisorioPessoaCEP = "" ;
   this.O9024ContaProvisorioPessoaCEP = "" ;
   this.A9025ContaProvisorioInscEstadual = "" ;
   this.Z9025ContaProvisorioInscEstadual = "" ;
   this.O9025ContaProvisorioInscEstadual = "" ;
   this.A9026ContaProvisorioInscMunicipal = "" ;
   this.Z9026ContaProvisorioInscMunicipal = "" ;
   this.O9026ContaProvisorioInscMunicipal = "" ;
   this.A9027ContaProvisorioPessoaRG = "" ;
   this.Z9027ContaProvisorioPessoaRG = "" ;
   this.O9027ContaProvisorioPessoaRG = "" ;
   this.A9028ContaProvisorioPessoaOrgExp = "" ;
   this.Z9028ContaProvisorioPessoaOrgExp = "" ;
   this.O9028ContaProvisorioPessoaOrgExp = "" ;
   this.A9029ContaProvisorioPessoaTelRes = "" ;
   this.Z9029ContaProvisorioPessoaTelRes = "" ;
   this.O9029ContaProvisorioPessoaTelRes = "" ;
   this.A9030ContaProvisorioPessoaTelCom = "" ;
   this.Z9030ContaProvisorioPessoaTelCom = "" ;
   this.O9030ContaProvisorioPessoaTelCom = "" ;
   this.A9031ContaProvisorioPessoaCelular = "" ;
   this.Z9031ContaProvisorioPessoaCelular = "" ;
   this.O9031ContaProvisorioPessoaCelular = "" ;
   this.A9032ContaProvisorioPessoaEmail = "" ;
   this.Z9032ContaProvisorioPessoaEmail = "" ;
   this.O9032ContaProvisorioPessoaEmail = "" ;
   this.A9033ContaProvisorioPessoaBanco = 0 ;
   this.Z9033ContaProvisorioPessoaBanco = 0 ;
   this.O9033ContaProvisorioPessoaBanco = 0 ;
   this.A9034ContaProvisorioPessoaAgencia = 0 ;
   this.Z9034ContaProvisorioPessoaAgencia = 0 ;
   this.O9034ContaProvisorioPessoaAgencia = 0 ;
   this.A9035ContaProvisorioPessoaDigAgenci = "" ;
   this.Z9035ContaProvisorioPessoaDigAgenci = "" ;
   this.O9035ContaProvisorioPessoaDigAgenci = "" ;
   this.A9036ContaProvisorioPessoaConta = "" ;
   this.Z9036ContaProvisorioPessoaConta = "" ;
   this.O9036ContaProvisorioPessoaConta = "" ;
   this.A9037ContaProvisorioPessoaDigConta = "" ;
   this.Z9037ContaProvisorioPessoaDigConta = "" ;
   this.O9037ContaProvisorioPessoaDigConta = "" ;
   this.A9038ContaProvisorioCentroCustoA = "" ;
   this.Z9038ContaProvisorioCentroCustoA = "" ;
   this.O9038ContaProvisorioCentroCustoA = "" ;
   this.A9039ContaProvisorioCentroCustoB = "" ;
   this.Z9039ContaProvisorioCentroCustoB = "" ;
   this.O9039ContaProvisorioCentroCustoB = "" ;
   this.A9040ContaProvisorioNumPedido = "" ;
   this.Z9040ContaProvisorioNumPedido = "" ;
   this.O9040ContaProvisorioNumPedido = "" ;
   this.A9041ContaProvisorioDataCriacao = gx.date.nullDate() ;
   this.Z9041ContaProvisorioDataCriacao = gx.date.nullDate() ;
   this.O9041ContaProvisorioDataCriacao = gx.date.nullDate() ;
   this.A9053ContaProvisorioUsuarioCriacao = "" ;
   this.Z9053ContaProvisorioUsuarioCriacao = "" ;
   this.O9053ContaProvisorioUsuarioCriacao = "" ;
   this.A2715ContaProvisorioUsuarioAlt = "" ;
   this.Z2715ContaProvisorioUsuarioAlt = "" ;
   this.O2715ContaProvisorioUsuarioAlt = "" ;
   this.A2716ContaProvisorioDataHoraAlt = gx.date.nullDate() ;
   this.Z2716ContaProvisorioDataHoraAlt = gx.date.nullDate() ;
   this.O2716ContaProvisorioDataHoraAlt = gx.date.nullDate() ;
   this.A2717ContaProvisorioEfetivada = "" ;
   this.Z2717ContaProvisorioEfetivada = "" ;
   this.O2717ContaProvisorioEfetivada = "" ;
   this.A2718ContaProvisorioQtdeContas = 0 ;
   this.Z2718ContaProvisorioQtdeContas = 0 ;
   this.O2718ContaProvisorioQtdeContas = 0 ;
   this.ZnRcdDeleted_674 = 0 ;
   this.OnRcdDeleted_674 = 0 ;
   this.Z9043ContaProvisorioContaSeq = 0 ;
   this.O9043ContaProvisorioContaSeq = 0 ;
   this.Z1685ContaPagRecEmpresaId = "" ;
   this.O1685ContaPagRecEmpresaId = "" ;
   this.Z1686ContaPagRecNumero = 0 ;
   this.O1686ContaPagRecNumero = 0 ;
   this.Z1637ContaPagRecCliForId = 0 ;
   this.O1637ContaPagRecCliForId = 0 ;
   this.Z1638ContaPagRecCliForFantasia = "" ;
   this.O1638ContaPagRecCliForFantasia = "" ;
   this.Z1699ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.O1699ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.Z1713ContaPagRecVlrConta = 0 ;
   this.O1713ContaPagRecVlrConta = 0 ;
   this.Z1692ContaPagRecSituacao = "" ;
   this.O1692ContaPagRecSituacao = "" ;
   this.Z9042ContaProvisorioContaTipo = 0 ;
   this.O9042ContaProvisorioContaTipo = 0 ;
   this.Z1928LancamentoCxaBcoEmpresaid = "" ;
   this.O1928LancamentoCxaBcoEmpresaid = "" ;
   this.Z1929LancamentoCxaBcoNumero = 0 ;
   this.O1929LancamentoCxaBcoNumero = 0 ;
   this.Z1865LancamentoCxaBcoPessoaId = 0 ;
   this.O1865LancamentoCxaBcoPessoaId = 0 ;
   this.Z1866LancamentoCxaBcoPessoaFantasia = "" ;
   this.O1866LancamentoCxaBcoPessoaFantasia = "" ;
   this.Z1930LancamentoCxaBcoData = gx.date.nullDate() ;
   this.O1930LancamentoCxaBcoData = gx.date.nullDate() ;
   this.Z1933LancamentoCxaBcoValor = 0 ;
   this.O1933LancamentoCxaBcoValor = 0 ;
   this.Z1867LancamentoCxaBcoCaiBanEmpId = "" ;
   this.O1867LancamentoCxaBcoCaiBanEmpId = "" ;
   this.Z1868LancamentoCxaBcoCaiBanId = 0 ;
   this.O1868LancamentoCxaBcoCaiBanId = 0 ;
   this.Z1869LancamentoCxaBcoCaiBanDescrica = "" ;
   this.O1869LancamentoCxaBcoCaiBanDescrica = "" ;
   this.Z2719ContaContaProvisorioUsuarioAlt = "" ;
   this.O2719ContaContaProvisorioUsuarioAlt = "" ;
   this.Z2720ContaContaProvisorioDataAlt = gx.date.nullDate() ;
   this.O2720ContaContaProvisorioDataAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.A1864LancamentoCxaBcoPessoaEmpId = "" ;
   this.A1636ContaPagRecCliForEmpId = "" ;
   this.A9043ContaProvisorioContaSeq = 0 ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A1637ContaPagRecCliForId = 0 ;
   this.A1638ContaPagRecCliForFantasia = "" ;
   this.A1699ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.A1713ContaPagRecVlrConta = 0 ;
   this.A1692ContaPagRecSituacao = "" ;
   this.A9042ContaProvisorioContaTipo = 0 ;
   this.A1928LancamentoCxaBcoEmpresaid = "" ;
   this.A1929LancamentoCxaBcoNumero = 0 ;
   this.A1865LancamentoCxaBcoPessoaId = 0 ;
   this.A1866LancamentoCxaBcoPessoaFantasia = "" ;
   this.A1930LancamentoCxaBcoData = gx.date.nullDate() ;
   this.A1933LancamentoCxaBcoValor = 0 ;
   this.A1867LancamentoCxaBcoCaiBanEmpId = "" ;
   this.A1868LancamentoCxaBcoCaiBanId = 0 ;
   this.A1869LancamentoCxaBcoCaiBanDescrica = "" ;
   this.A2719ContaContaProvisorioUsuarioAlt = "" ;
   this.A2720ContaContaProvisorioDataAlt = gx.date.nullDate() ;
   this.AV8Logon = {} ;
   this.A2702ContaProvisorioEmpresaId = "" ;
   this.A2703ContaProvisorioNumero = 0 ;
   this.A2717ContaProvisorioEfetivada = "" ;
   this.A2704ContaProvisorioCNPJ = "" ;
   this.A2705ContaProvisorioCPF = "" ;
   this.A2708ContaProvisorioDataEmissao = gx.date.nullDate() ;
   this.A2709ContaProvisorioDataVencimento = gx.date.nullDate() ;
   this.A2710ContaProvisorioValorNota = 0 ;
   this.A9009ContaProvisorioOperacao = "" ;
   this.A9010ContaProvisorioCodCientec = "" ;
   this.A9016ContaProvisorioHistorico = "" ;
   this.A9011ContaProvisorioNumeroDocumento = "" ;
   this.A9017ContaProvisorioBoleto = 0 ;
   this.A9014ContaProvisorioConvenioA = 0 ;
   this.A9015ContaProvisorioConvenioB = 0 ;
   this.A9012ContaProvisorioPessoaNome = "" ;
   this.A9013ContaProvisorioPessoaTipo = "" ;
   this.A9018ContaProvisorioPessoaEndereco = "" ;
   this.A9019ContaProvisorioPessoaNumEndere = 0 ;
   this.A9020ContaProvisorioPessoaCompEnder = "" ;
   this.A9021ContaProvisorioPessoaBairro = "" ;
   this.A9022ContaProvisorioPessoaCidadeNom = "" ;
   this.A9023ContaProvisorioPessoaUF = "" ;
   this.A9024ContaProvisorioPessoaCEP = "" ;
   this.A9025ContaProvisorioInscEstadual = "" ;
   this.A9026ContaProvisorioInscMunicipal = "" ;
   this.A9027ContaProvisorioPessoaRG = "" ;
   this.A9028ContaProvisorioPessoaOrgExp = "" ;
   this.A9029ContaProvisorioPessoaTelRes = "" ;
   this.A9030ContaProvisorioPessoaTelCom = "" ;
   this.A9031ContaProvisorioPessoaCelular = "" ;
   this.A9032ContaProvisorioPessoaEmail = "" ;
   this.A9033ContaProvisorioPessoaBanco = 0 ;
   this.A9034ContaProvisorioPessoaAgencia = 0 ;
   this.A9035ContaProvisorioPessoaDigAgenci = "" ;
   this.A9036ContaProvisorioPessoaConta = "" ;
   this.A9037ContaProvisorioPessoaDigConta = "" ;
   this.A9038ContaProvisorioCentroCustoA = "" ;
   this.A9039ContaProvisorioCentroCustoB = "" ;
   this.A9040ContaProvisorioNumPedido = "" ;
   this.A9041ContaProvisorioDataCriacao = gx.date.nullDate() ;
   this.A9053ContaProvisorioUsuarioCriacao = "" ;
   this.A2715ContaProvisorioUsuarioAlt = "" ;
   this.A2716ContaProvisorioDataHoraAlt = gx.date.nullDate() ;
   this.A2718ContaProvisorioQtdeContas = 0 ;
   this.Events = {"e124z283_client": ["ENTER", true] ,"e134z283_client": ["CANCEL", true] ,"e114z283_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_1685_1686", [241,242]);
   this.setPrompt("PROMPT_1928_1929", [249,250]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("A1636ContaPagRecCliForEmpId", "CONTAPAGRECCLIFOREMPID", 0, "char");
   this.setVCMap("A1864LancamentoCxaBcoPessoaEmpId", "LANCAMENTOCXABCOPESSOAEMPID", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 283 ]= ["O2718ContaProvisorioQtdeContas"] ;
});
gx.setParentObj(new tcontaprovisorio());
