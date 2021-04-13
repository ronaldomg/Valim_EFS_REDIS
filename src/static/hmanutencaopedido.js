/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:0:45.58
*/
gx.evt.autoSkip = false;
gx.define('hmanutencaopedido', false, function () {
   this.ServerClass =  "hmanutencaopedido" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("4", "'INSEREPEDIDOEXISTENTE'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A3382PedidoCompraValorDesconto=gx.fn.getDecimalValue("PEDIDOCOMPRAVALORDESCONTO",'.',',') ;
      this.A3383PedidoCompraValorFrete=gx.fn.getDecimalValue("PEDIDOCOMPRAVALORFRETE",'.',',') ;
      this.A3385PedidoCompraValorSeguro=gx.fn.getDecimalValue("PEDIDOCOMPRAVALORSEGURO",'.',',') ;
      this.A3384PedidoCompraValorEncargo=gx.fn.getDecimalValue("PEDIDOCOMPRAVALORENCARGO",'.',',') ;
      this.A3785PedidoCompraValorIPI=gx.fn.getDecimalValue("PEDIDOCOMPRAVALORIPI",'.',',') ;
      this.A3786PedidoCompraValorICMS=gx.fn.getDecimalValue("PEDIDOCOMPRAVALORICMS",'.',',') ;
      this.A3787PedidoCompraValorICMSST=gx.fn.getDecimalValue("PEDIDOCOMPRAVALORICMSST",'.',',') ;
      this.A3426PedidoCompraEmpresaId=gx.fn.getControlValue("PEDIDOCOMPRAEMPRESAID") ;
      this.AV152ProdutoEmpresaId=gx.fn.getControlValue("vPRODUTOEMPRESAID") ;
      this.AV126TpPrazoEntrega=gx.fn.getControlValue("vTPPRAZOENTREGA") ;
      this.A1228FilialEmpresaId=gx.fn.getControlValue("FILIALEMPRESAID") ;
      this.A1156FilialId=gx.fn.getIntegerValue("FILIALID",'.') ;
      this.A1136FilialNome=gx.fn.getControlValue("FILIALNOME") ;
      this.AV121PedidoComSolici=gx.fn.getControlValue("vPEDIDOCOMSOLICI") ;
      this.AV119IncPedidoDireto=gx.fn.getControlValue("vINCPEDIDODIRETO") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV21Sistema=gx.fn.getControlValue("vSISTEMA") ;
      this.AV164Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV165Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV11MsgErro=gx.fn.getControlValue("vMSGERRO") ;
      this.AV73PedidoCompraAno=gx.fn.getIntegerValue("vPEDIDOCOMPRAANO",'.') ;
      this.AV74PedidoCompraNumero=gx.fn.getIntegerValue("vPEDIDOCOMPRANUMERO",'.') ;
      this.AV12EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
      this.AV109SdtPermissao=gx.fn.getControlValue("vSDTPERMISSAO") ;
      this.A3362PedidoCompraPessoaId=gx.fn.getIntegerValue("PEDIDOCOMPRAPESSOAID",'.') ;
      this.A568TipoPermissaoId=gx.fn.getIntegerValue("TIPOPERMISSAOID",'.') ;
      this.A3138TipoPermissaoSnControla=gx.fn.getControlValue("TIPOPERMISSAOSNCONTROLA") ;
      this.A566TipoPermissaoUsuarioUsuarioId=gx.fn.getControlValue("TIPOPERMISSAOUSUARIOUSUARIOID") ;
      this.A558TipoPermissaoSnEmpresa=gx.fn.getControlValue("TIPOPERMISSAOSNEMPRESA") ;
      this.A138EmpresaId=gx.fn.getControlValue("EMPRESAID") ;
      this.A227EmpresaPessoasEmpresaId=gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID") ;
      this.A69PessoaId=gx.fn.getIntegerValue("PESSOAID",'.') ;
      this.A421PessoaContato=gx.fn.getControlValue("PESSOACONTATO") ;
      this.A10879PessoaEmailPessoaEmpId=gx.fn.getControlValue("PESSOAEMAILPESSOAEMPID") ;
      this.A10880PessoaEmailPessoaId=gx.fn.getIntegerValue("PESSOAEMAILPESSOAID",'.') ;
      this.A11788PessoaEmailTipo=gx.fn.getControlValue("PESSOAEMAILTIPO") ;
      this.A10882PessoaEmailEnderecoEmail=gx.fn.getControlValue("PESSOAEMAILENDERECOEMAIL") ;
      this.A434PessoaEmail=gx.fn.getControlValue("PESSOAEMAIL") ;
      this.AV133SdtParmEmail=gx.fn.getControlValue("vSDTPARMEMAIL") ;
      this.AV62CorAberta=gx.fn.getControlValue("vCORABERTA") ;
      this.AV61CorFechada=gx.fn.getControlValue("vCORFECHADA") ;
      this.AV60CorCancel=gx.fn.getControlValue("vCORCANCEL") ;
      this.A3778PedidoCompraPessoaFantasia=gx.fn.getControlValue("PEDIDOCOMPRAPESSOAFANTASIA") ;
      this.A3793PedidoCompraLOGData=gx.fn.getDateTimeValue("PEDIDOCOMPRALOGDATA") ;
      this.A3799PedidoCompraLOGSeq=gx.fn.getIntegerValue("PEDIDOCOMPRALOGSEQ",'.') ;
      this.A4286PedidoCompraLOGDataPrev=gx.fn.getDateValue("PEDIDOCOMPRALOGDATAPREV") ;
      this.AV63Cor=gx.fn.getControlValue("vCOR") ;
      this.AV122NomeClasse=gx.fn.getControlValue("vNOMECLASSE") ;
      this.AV89Chamada=gx.fn.getControlValue("vCHAMADA") ;
   };
   this.Validv_Filialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Fornecedorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFORNECEDORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Compradorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCOMPRADORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pedidocompraano=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(116) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PEDIDOCOMPRAANO", gx.fn.currentGridRowImpl(116));
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
   this.Valid_Pedidocompranumero=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(116) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PEDIDOCOMPRANUMERO", gx.fn.currentGridRowImpl(116));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Vendedorid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(116) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("VENDEDORID", gx.fn.currentGridRowImpl(116));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pedidocompravalortotal=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(116) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PEDIDOCOMPRAVALORTOTAL", gx.fn.currentGridRowImpl(116));
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
   this.Validv_Pessoaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Vendedorempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vVENDEDOREMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Filialempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadrao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pedidocompraano=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(116) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PEDIDOCOMPRAANO", gx.fn.currentGridRowImpl(116));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pedidocompranumero=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(116) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PEDIDOCOMPRANUMERO", gx.fn.currentGridRowImpl(116));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Vendedorid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(116) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("VENDEDORID", gx.fn.currentGridRowImpl(116));
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
      gx.fn.setCtrlProperty("TABINVISIVEL","Visible", 0 );
      this.AV44sim =  "S"  ;
      this.AV45nao =  "N"  ;
      this.AV98qtdeFornec = gx.num.trunc( 30 ,0) ;
      if ( this.AV35Ano == "S" )
      {
         gx.fn.setCtrlProperty("PEDIDOCOMPRAANO","Visible", 1 );
         gx.fn.setCtrlProperty("vPEDIDOCOMPRAANOFILTRO","Visible", 1 );
         gx.fn.setCtrlProperty("TRACO","Visible", 1 );
      }
   };
   this.s212_client=function()
   {
      if ( this.AV63Cor == "0" || (""==this.AV63Cor) )
      {
         this.AV122NomeClasse =  "AttributeCorPreto"  ;
      }
      else if ( this.AV63Cor == "1" )
      {
         this.AV122NomeClasse =  "AttributeCorVerde"  ;
      }
      else if ( this.AV63Cor == "2" )
      {
         this.AV122NomeClasse =  "AttributeCorVermelho"  ;
      }
      else if ( this.AV63Cor == "3" )
      {
         this.AV122NomeClasse =  "AttributeCorAzul"  ;
      }
      else if ( this.AV63Cor == "4" )
      {
         this.AV122NomeClasse =  "AttributeCorRosa"  ;
      }
      else if ( this.AV63Cor == "5" )
      {
         this.AV122NomeClasse =  "AttributeCorVinho"  ;
      }
      else if ( this.AV63Cor == "6" )
      {
         this.AV122NomeClasse =  "AttributeCorAmarelo"  ;
      }
      gx.fn.setCtrlProperty("PEDIDOCOMPRAANO","Class", this.AV122NomeClasse );
      gx.fn.setCtrlProperty("PEDIDOCOMPRANUMERO","Class", this.AV122NomeClasse );
      gx.fn.setCtrlProperty("PEDIDOCOMPRADATA","Class", this.AV122NomeClasse );
      gx.fn.setCtrlProperty("vPEDIDOCOMPRADATAPREVISAO","Class", this.AV122NomeClasse );
      gx.fn.setCtrlProperty("VENDEDORID","Class", this.AV122NomeClasse );
      gx.fn.setCtrlProperty("VENDEDORNOME","Class", this.AV122NomeClasse );
      gx.fn.setCtrlProperty("vVENDEDOR","Class", this.AV122NomeClasse );
      gx.fn.setCtrlProperty("vFORNECEDOR","Class", this.AV122NomeClasse );
      gx.fn.setCtrlProperty("PEDIDOCOMPRAVALORLIQUIDO","Class", this.AV122NomeClasse );
      gx.fn.setCtrlProperty("PEDIDOCOMPRAPAGAMENTO","Class", this.AV122NomeClasse );
   };
   this.e11oo2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12oo2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e13oo2_client=function()
   {
      this.executeServerEvent("'NOVO'", false, null, false, false);
   };
   this.e14oo2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15oo2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e26oo2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e27oo2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e16oo2_client=function()
   {
      this.executeServerEvent("'INSEREPEDIDOEXISTENTE'", false, null, false, false);
   };
   this.e28oo2_client=function()
   {
      this.executeServerEvent("'IMPRIMEPEDIDO'", true, arguments[0], false, false);
   };
   this.e29oo2_client=function()
   {
      this.executeServerEvent("'ACOMPANHAMENTO'", true, arguments[0], false, false);
   };
   this.e17oo2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e18oo2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e32oo2_client=function()
   {
      this.executeServerEvent("'ENTREGA'", true, arguments[0], false, false);
   };
   this.e33oo2_client=function()
   {
      this.executeServerEvent("'CONSULTA'", true, arguments[0], false, false);
   };
   this.e19oo2_client=function()
   {
      this.executeServerEvent("'PARAMETROS'", true, null, false, false);
   };
   this.e34oo2_client=function()
   {
      this.executeServerEvent("'CANCELARPEDIDO'", true, arguments[0], false, false);
   };
   this.e35oo2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e20oo2_client=function()
   {
      this.executeServerEvent("VPRODUTOID.ISVALID", true, null, false, true);
   };
   this.e21oo2_client=function()
   {
      this.executeServerEvent("'ABERTO'", true, null, false, false);
   };
   this.e22oo2_client=function()
   {
      this.executeServerEvent("'FECHADO'", true, null, false, false);
   };
   this.e23oo2_client=function()
   {
      this.executeServerEvent("'CANCELADO'", true, null, false, false);
   };
   this.e36oo2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e37oo2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,17,19,20,23,25,26,29,31,34,36,38,41,43,46,48,51,53,55,58,60,63,65,67,69,72,74,77,79,80,83,85,88,90,92,95,97,100,102,103,104,107,109,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,141,144,146,148,150,153,156,159,161,163,166,168,171,173,176,178,184,188,190,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,237,238,239,240,241];
   this.GXLastCtrlId =241;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",116,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmanutencaopedido",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3336,117,"PEDIDOCOMPRAANO","","","PedidoCompraAno","int",0,"px",4,4,"right",null,[],3336,"PedidoCompraAno",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit(3337,118,"PEDIDOCOMPRANUMERO","","","PedidoCompraNumero","int",0,"px",7,7,"right",null,[],3337,"PedidoCompraNumero",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit("Fornecedor",119,"vFORNECEDOR","","","Fornecedor","svchar",0,"px",200,80,"left",null,[],"Fornecedor","Fornecedor",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit(3360,120,"PEDIDOCOMPRADATA","","","PedidoCompraData","date",0,"px",10,10,"right",null,[],3360,"PedidoCompraData",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit("Pedidocompradataprevisao",121,"vPEDIDOCOMPRADATAPREVISAO","Previsão Entrega","","PedidoCompraDataPrevisao","date",0,"px",10,10,"right",null,[],"Pedidocompradataprevisao","PedidoCompraDataPrevisao",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit("Vendedor",122,"vVENDEDOR","","","Vendedor","svchar",0,"px",200,80,"left",null,[],"Vendedor","Vendedor",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit(1237,123,"VENDEDORID","Código do Comprador","","VendedorId","int",0,"px",7,7,"right",null,[],1237,"VendedorId",false,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit(1148,124,"VENDEDORNOME","Nome do Comprador","","VendedorNome","svchar",0,"px",40,40,"left",null,[],1148,"VendedorNome",false,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit(3369,125,"PEDIDOCOMPRAPAGAMENTO","","","PedidoCompraPagamento","svchar",0,"px",30,30,"left",null,[],3369,"PedidoCompraPagamento",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit(3391,126,"PEDIDOCOMPRAVALORTOTAL","Valor Total","","PedidoCompraValorTotal","decimal",0,"px",22,22,"right",null,[],3391,"PedidoCompraValorTotal",false,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3788,127,"PEDIDOCOMPRAVALORLIQUIDO","Valor Líquido","","PedidoCompraValorLiquido","decimal",0,"px",22,22,"right",null,[],3788,"PedidoCompraValorLiquido",true,2,false,false,"",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",128,0,"px",17,"px","e26oo2_client","","Alt","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",129,0,"px",17,"px","e27oo2_client","","Exc","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpimprimir","vBMPIMPRIMIR",130,0,"px",17,"px","e28oo2_client","","Imp","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpregprod","vBMPREGPROD",131,0,"px",17,"px","e32oo2_client","","Ent","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",132,0,"px",17,"px","e33oo2_client","","Con","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpocorrencia","vBMPOCORRENCIA",133,0,"px",17,"px","e29oo2_client","","Oco","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcan","vBMPCAN",134,0,"px",17,"px","e34oo2_client","","Can","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(4246,135,"PEDIDOCOMPRAUSUARIOAUT","Usuário Autorizou","","PedidoCompraUsuarioAut","char",0,"px",12,12,"left",null,[],4246,"PedidoCompraUsuarioAut",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4247,136,"PEDIDOCOMPRADATAHORAAUT","Data/Hora Autorização","","PedidoCompraDataHoraAut","dtime",0,"px",16,16,"right",null,[],4247,"PedidoCompraDataHoraAut",false,5,false,false,"Attribute",1,"");
   GridContainer.addComboBox(3380,137,"PEDIDOCOMPRASITUACAO","Situação","PedidoCompraSituacao","char",null,0,false,false,0,"px","");
   GridContainer.addSingleLineEdit(3388,138,"PEDIDOCOMPRAFILIALID","Código Filial","","PedidoCompraFilialId","int",0,"px",7,7,"right",null,[],3388,"PedidoCompraFilialId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE17",grid:0};
   GXValidFnc[8]={fld:"TABLE20",grid:0};
   GXValidFnc[11]={fld:"TABLE21",grid:0};
   GXValidFnc[14]={fld:"TABLE22",grid:0};
   GXValidFnc[17]={fld:"TXTTITAPL5", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[this.GridContainer],fld:"vFILIALID",gxz:"ZV26FilialId",gxold:"OV26FilialId",gxvar:"AV26FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV26FilialId,0)},c2v:function(){gx.O.AV26FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[20]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV27FilialNome",gxold:"OV27FilialNome",gxvar:"AV27FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27FilialNome=Value},v2z:function(Value){gx.O.ZV27FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV27FilialNome,0)},c2v:function(){gx.O.AV27FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TXTTITAPL18", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Fornecedorid,isvalid:null,rgrid:[this.GridContainer],fld:"vFORNECEDORID",gxz:"ZV23FornecedorId",gxold:"OV23FornecedorId",gxvar:"AV23FornecedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23FornecedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23FornecedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFORNECEDORID",gx.O.AV23FornecedorId,0)},c2v:function(){gx.O.AV23FornecedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFORNECEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFORNECEDORFANTASIA",gxz:"ZV24FornecedorFantasia",gxold:"OV24FornecedorFantasia",gxvar:"AV24FornecedorFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24FornecedorFantasia=Value},v2z:function(Value){gx.O.ZV24FornecedorFantasia=Value},v2c:function(){gx.fn.setControlValue("vFORNECEDORFANTASIA",gx.O.AV24FornecedorFantasia,0)},c2v:function(){gx.O.AV24FornecedorFantasia=this.val()},val:function(){return gx.fn.getControlValue("vFORNECEDORFANTASIA")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TXTTITAPL20", format:0,grid:0};
   GXValidFnc[31]={fld:"TABLE27",grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPEDIDOCOMPRAANOFILTRO",gxz:"ZV114PedidoCompraAnoFiltro",gxold:"OV114PedidoCompraAnoFiltro",gxvar:"AV114PedidoCompraAnoFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV114PedidoCompraAnoFiltro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV114PedidoCompraAnoFiltro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAANOFILTRO",gx.O.AV114PedidoCompraAnoFiltro,0)},c2v:function(){gx.O.AV114PedidoCompraAnoFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRAANOFILTRO",'.')},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TRACO", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPEDIDOCOMPRANUMEROFILTRO",gxz:"ZV113PedidoCompraNumeroFiltro",gxold:"OV113PedidoCompraNumeroFiltro",gxvar:"AV113PedidoCompraNumeroFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV113PedidoCompraNumeroFiltro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV113PedidoCompraNumeroFiltro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRANUMEROFILTRO",gx.O.AV113PedidoCompraNumeroFiltro,0)},c2v:function(){gx.O.AV113PedidoCompraNumeroFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRANUMEROFILTRO",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TXTTITAPL21", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPEDIDOCOMPRANOPEDIDOFORN",gxz:"ZV66PedidoCompraNoPedidoForn",gxold:"OV66PedidoCompraNoPedidoForn",gxvar:"AV66PedidoCompraNoPedidoForn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66PedidoCompraNoPedidoForn=Value},v2z:function(Value){gx.O.ZV66PedidoCompraNoPedidoForn=Value},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRANOPEDIDOFORN",gx.O.AV66PedidoCompraNoPedidoForn,0)},c2v:function(){gx.O.AV66PedidoCompraNoPedidoForn=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRANOPEDIDOFORN")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TXTTITAPL19", format:0,grid:0};
   GXValidFnc[48]={fld:"TABLE26",grid:0};
   GXValidFnc[51]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPEDIDOCOMPRADATAINI",gxz:"ZV25PedidoCompraDataini",gxold:"OV25PedidoCompraDataini",gxvar:"AV25PedidoCompraDataini",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25PedidoCompraDataini=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV25PedidoCompraDataini=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRADATAINI",gx.O.AV25PedidoCompraDataini,0)},c2v:function(){gx.O.AV25PedidoCompraDataini=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRADATAINI")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TXTTITAPL23", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPEDIDOCOMPRADATAFIM",gxz:"ZV65PedidoCompraDatafim",gxold:"OV65PedidoCompraDatafim",gxvar:"AV65PedidoCompraDatafim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV65PedidoCompraDatafim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV65PedidoCompraDatafim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRADATAFIM",gx.O.AV65PedidoCompraDatafim,0)},c2v:function(){gx.O.AV65PedidoCompraDatafim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRADATAFIM")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[60]={fld:"TABLE25",grid:0};
   GXValidFnc[63]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDATAENTRINI",gxz:"ZV93DataEntrIni",gxold:"OV93DataEntrIni",gxvar:"AV93DataEntrIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV93DataEntrIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV93DataEntrIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAENTRINI",gx.O.AV93DataEntrIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV93DataEntrIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAENTRINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 63 , function() {
   });
   GXValidFnc[65]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[67]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDATAENTRFIN",gxz:"ZV94DataEntrFin",gxold:"OV94DataEntrFin",gxvar:"AV94DataEntrFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV94DataEntrFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV94DataEntrFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAENTRFIN",gx.O.AV94DataEntrFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV94DataEntrFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAENTRFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 67 , function() {
   });
   GXValidFnc[69]={fld:"TABLE23",grid:0};
   GXValidFnc[72]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPEDIDOCOMPRASITUACAO",gxz:"ZV67PedidoCompraSituacao",gxold:"OV67PedidoCompraSituacao",gxvar:"AV67PedidoCompraSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV67PedidoCompraSituacao=Value},v2z:function(Value){gx.O.ZV67PedidoCompraSituacao=Value},v2c:function(){gx.fn.setComboBoxValue("vPEDIDOCOMPRASITUACAO",gx.O.AV67PedidoCompraSituacao)},c2v:function(){gx.O.AV67PedidoCompraSituacao=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRASITUACAO")},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TXTTITAPL11", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Compradorid,isvalid:null,rgrid:[this.GridContainer],fld:"vCOMPRADORID",gxz:"ZV28CompradorId",gxold:"OV28CompradorId",gxvar:"AV28CompradorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28CompradorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28CompradorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCOMPRADORID",gx.O.AV28CompradorId,0)},c2v:function(){gx.O.AV28CompradorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOMPRADORID",'.')},nac:gx.falseFn};
   GXValidFnc[80]={lvl:0,type:"svchar",len:19,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMPRADORNOME",gxz:"ZV29CompradorNome",gxold:"OV29CompradorNome",gxvar:"AV29CompradorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29CompradorNome=Value},v2z:function(Value){gx.O.ZV29CompradorNome=Value},v2c:function(){gx.fn.setControlValue("vCOMPRADORNOME",gx.O.AV29CompradorNome,0)},c2v:function(){gx.O.AV29CompradorNome=this.val()},val:function(){return gx.fn.getControlValue("vCOMPRADORNOME")},nac:gx.falseFn};
   GXValidFnc[83]={fld:"TXTTITAPL17", format:0,grid:0};
   GXValidFnc[85]={fld:"TABLE24",grid:0};
   GXValidFnc[88]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDATAAUTINI",gxz:"ZV91DataAutIni",gxold:"OV91DataAutIni",gxvar:"AV91DataAutIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV91DataAutIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV91DataAutIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAAUTINI",gx.O.AV91DataAutIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV91DataAutIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAAUTINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 88 , function() {
   });
   GXValidFnc[90]={fld:"TXTTITAPL22", format:0,grid:0};
   GXValidFnc[92]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDATAAUTFIN",gxz:"ZV92DataAutFin",gxold:"OV92DataAutFin",gxvar:"AV92DataAutFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV92DataAutFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV92DataAutFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAAUTFIN",gx.O.AV92DataAutFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV92DataAutFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAAUTFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 92 , function() {
   });
   GXValidFnc[95]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[97]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vAUTORIZACAO",gxz:"ZV90Autorizacao",gxold:"OV90Autorizacao",gxvar:"AV90Autorizacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV90Autorizacao=Value},v2z:function(Value){gx.O.ZV90Autorizacao=Value},v2c:function(){gx.fn.setComboBoxValue("vAUTORIZACAO",gx.O.AV90Autorizacao)},c2v:function(){gx.O.AV90Autorizacao=this.val()},val:function(){return gx.fn.getControlValue("vAUTORIZACAO")},nac:gx.falseFn};
   GXValidFnc[100]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[102]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:'e20oo2_client',rgrid:[this.GridContainer],fld:"vPRODUTOID",gxz:"ZV153produtoid",gxold:"OV153produtoid",gxvar:"AV153produtoid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV153produtoid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV153produtoid=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV153produtoid,0)},c2v:function(){gx.O.AV153produtoid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[103]={fld:"PROMPTPROD",grid:0};
   GXValidFnc[104]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDA",gxz:"ZV151ProdutoDescricaoResumida",gxold:"OV151ProdutoDescricaoResumida",gxvar:"AV151ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV151ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.ZV151ProdutoDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAORESUMIDA",gx.O.AV151ProdutoDescricaoResumida,0)},c2v:function(){gx.O.AV151ProdutoDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[107]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[109]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vENTRADANUMERODOCUMENTO",gxz:"ZV143EntradaNumeroDocumento",gxold:"OV143EntradaNumeroDocumento",gxvar:"AV143EntradaNumeroDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV143EntradaNumeroDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV143EntradaNumeroDocumento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADANUMERODOCUMENTO",gx.O.AV143EntradaNumeroDocumento,0)},c2v:function(){gx.O.AV143EntradaNumeroDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADANUMERODOCUMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[117]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:116,gxgrid:this.GridContainer,fnc:this.Valid_Pedidocompraano,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRAANO",gxz:"Z3336PedidoCompraAno",gxold:"O3336PedidoCompraAno",gxvar:"A3336PedidoCompraAno",ucs:[],op:[127,124,126],ip:[127,124,126,123,118,117],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3336PedidoCompraAno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3336PedidoCompraAno=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRAANO",row || gx.fn.currentGridRowImpl(116),gx.O.A3336PedidoCompraAno,0)},c2v:function(){gx.O.A3336PedidoCompraAno=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PEDIDOCOMPRAANO",row || gx.fn.currentGridRowImpl(116),'.')},nac:gx.falseFn};
   GXValidFnc[118]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:116,gxgrid:this.GridContainer,fnc:this.Valid_Pedidocompranumero,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRANUMERO",gxz:"Z3337PedidoCompraNumero",gxold:"O3337PedidoCompraNumero",gxvar:"A3337PedidoCompraNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3337PedidoCompraNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3337PedidoCompraNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRANUMERO",row || gx.fn.currentGridRowImpl(116),gx.O.A3337PedidoCompraNumero,0)},c2v:function(){gx.O.A3337PedidoCompraNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PEDIDOCOMPRANUMERO",row || gx.fn.currentGridRowImpl(116),'.')},nac:gx.falseFn};
   GXValidFnc[119]={lvl:2,type:"svchar",len:200,dec:0,sign:false,ro:0,isacc:0,grid:116,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vFORNECEDOR",gxz:"ZV68Fornecedor",gxold:"OV68Fornecedor",gxvar:"AV68Fornecedor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV68Fornecedor=Value},v2z:function(Value){gx.O.ZV68Fornecedor=Value},v2c:function(row){gx.fn.setGridControlValue("vFORNECEDOR",row || gx.fn.currentGridRowImpl(116),gx.O.AV68Fornecedor,0)},c2v:function(){gx.O.AV68Fornecedor=this.val()},val:function(row){return gx.fn.getGridControlValue("vFORNECEDOR",row || gx.fn.currentGridRowImpl(116))},nac:gx.falseFn};
   GXValidFnc[120]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:116,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRADATA",gxz:"Z3360PedidoCompraData",gxold:"O3360PedidoCompraData",gxvar:"A3360PedidoCompraData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3360PedidoCompraData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3360PedidoCompraData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRADATA",row || gx.fn.currentGridRowImpl(116),gx.O.A3360PedidoCompraData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3360PedidoCompraData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PEDIDOCOMPRADATA",row || gx.fn.currentGridRowImpl(116))},nac:gx.falseFn};
   GXValidFnc[121]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:116,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRADATAPREVISAO",gxz:"ZV125PedidoCompraDataPrevisao",gxold:"OV125PedidoCompraDataPrevisao",gxvar:"AV125PedidoCompraDataPrevisao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV125PedidoCompraDataPrevisao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV125PedidoCompraDataPrevisao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("vPEDIDOCOMPRADATAPREVISAO",row || gx.fn.currentGridRowImpl(116),gx.O.AV125PedidoCompraDataPrevisao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV125PedidoCompraDataPrevisao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("vPEDIDOCOMPRADATAPREVISAO",row || gx.fn.currentGridRowImpl(116))},nac:gx.falseFn};
   GXValidFnc[122]={lvl:2,type:"svchar",len:200,dec:0,sign:false,ro:0,isacc:0,grid:116,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDOR",gxz:"ZV64Vendedor",gxold:"OV64Vendedor",gxvar:"AV64Vendedor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV64Vendedor=Value},v2z:function(Value){gx.O.ZV64Vendedor=Value},v2c:function(row){gx.fn.setGridControlValue("vVENDEDOR",row || gx.fn.currentGridRowImpl(116),gx.O.AV64Vendedor,0)},c2v:function(){gx.O.AV64Vendedor=this.val()},val:function(row){return gx.fn.getGridControlValue("vVENDEDOR",row || gx.fn.currentGridRowImpl(116))},nac:gx.falseFn};
   GXValidFnc[123]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:116,gxgrid:this.GridContainer,fnc:this.Valid_Vendedorid,isvalid:null,rgrid:[],fld:"VENDEDORID",gxz:"Z1237VendedorId",gxold:"O1237VendedorId",gxvar:"A1237VendedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1237VendedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1237VendedorId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("VENDEDORID",row || gx.fn.currentGridRowImpl(116),gx.O.A1237VendedorId,0)},c2v:function(){gx.O.A1237VendedorId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("VENDEDORID",row || gx.fn.currentGridRowImpl(116),'.')},nac:gx.falseFn};
   GXValidFnc[124]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:116,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"VENDEDORNOME",gxz:"Z1148VendedorNome",gxold:"O1148VendedorNome",gxvar:"A1148VendedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1148VendedorNome=Value},v2z:function(Value){gx.O.Z1148VendedorNome=Value},v2c:function(row){gx.fn.setGridControlValue("VENDEDORNOME",row || gx.fn.currentGridRowImpl(116),gx.O.A1148VendedorNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1148VendedorNome=this.val()},val:function(row){return gx.fn.getGridControlValue("VENDEDORNOME",row || gx.fn.currentGridRowImpl(116))},nac:gx.falseFn};
   GXValidFnc[125]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:116,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRAPAGAMENTO",gxz:"Z3369PedidoCompraPagamento",gxold:"O3369PedidoCompraPagamento",gxvar:"A3369PedidoCompraPagamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3369PedidoCompraPagamento=Value},v2z:function(Value){gx.O.Z3369PedidoCompraPagamento=Value},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRAPAGAMENTO",row || gx.fn.currentGridRowImpl(116),gx.O.A3369PedidoCompraPagamento,0)},c2v:function(){gx.O.A3369PedidoCompraPagamento=this.val()},val:function(row){return gx.fn.getGridControlValue("PEDIDOCOMPRAPAGAMENTO",row || gx.fn.currentGridRowImpl(116))},nac:gx.falseFn};
   GXValidFnc[126]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:116,gxgrid:this.GridContainer,fnc:this.Valid_Pedidocompravalortotal,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRAVALORTOTAL",gxz:"Z3391PedidoCompraValorTotal",gxold:"O3391PedidoCompraValorTotal",gxvar:"A3391PedidoCompraValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3391PedidoCompraValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3391PedidoCompraValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("PEDIDOCOMPRAVALORTOTAL",row || gx.fn.currentGridRowImpl(116),gx.O.A3391PedidoCompraValorTotal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3391PedidoCompraValorTotal=this.val()},val:function(row){return gx.fn.getGridDecimalValue("PEDIDOCOMPRAVALORTOTAL",row || gx.fn.currentGridRowImpl(116),'.',',')},nac:gx.falseFn};
   GXValidFnc[127]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:116,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRAVALORLIQUIDO",gxz:"Z3788PedidoCompraValorLiquido",gxold:"O3788PedidoCompraValorLiquido",gxvar:"A3788PedidoCompraValorLiquido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3788PedidoCompraValorLiquido=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3788PedidoCompraValorLiquido=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("PEDIDOCOMPRAVALORLIQUIDO",row || gx.fn.currentGridRowImpl(116),gx.O.A3788PedidoCompraValorLiquido,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3788PedidoCompraValorLiquido=this.val()},val:function(row){return gx.fn.getGridDecimalValue("PEDIDOCOMPRAVALORLIQUIDO",row || gx.fn.currentGridRowImpl(116),'.',',')},nac:gx.falseFn};
   GXValidFnc[128]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:116,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV5bmpAlt",gxold:"OV5bmpAlt",gxvar:"AV5bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5bmpAlt=Value},v2z:function(Value){gx.O.ZV5bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(116),gx.O.AV5bmpAlt,gx.O.AV176Bmpalt_GXI)},c2v:function(){gx.O.AV176Bmpalt_GXI=this.val_GXI();gx.O.AV5bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(116))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(116))}, gxvar_GXI:'AV176Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[129]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:116,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV6bmpExc",gxold:"OV6bmpExc",gxvar:"AV6bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV6bmpExc=Value},v2z:function(Value){gx.O.ZV6bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(116),gx.O.AV6bmpExc,gx.O.AV177Bmpexc_GXI)},c2v:function(){gx.O.AV177Bmpexc_GXI=this.val_GXI();gx.O.AV6bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(116))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(116))}, gxvar_GXI:'AV177Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[130]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:116,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPIMPRIMIR",gxz:"ZV31bmpImprimir",gxold:"OV31bmpImprimir",gxvar:"AV31bmpImprimir",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV31bmpImprimir=Value},v2z:function(Value){gx.O.ZV31bmpImprimir=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPIMPRIMIR",row || gx.fn.currentGridRowImpl(116),gx.O.AV31bmpImprimir,gx.O.AV179Bmpimprimir_GXI)},c2v:function(){gx.O.AV179Bmpimprimir_GXI=this.val_GXI();gx.O.AV31bmpImprimir=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPIMPRIMIR",row || gx.fn.currentGridRowImpl(116))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPIMPRIMIR_GXI",row || gx.fn.currentGridRowImpl(116))}, gxvar_GXI:'AV179Bmpimprimir_GXI',nac:gx.falseFn};
   GXValidFnc[131]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:116,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPREGPROD",gxz:"ZV87bmpRegProd",gxold:"OV87bmpRegProd",gxvar:"AV87bmpRegProd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV87bmpRegProd=Value},v2z:function(Value){gx.O.ZV87bmpRegProd=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPREGPROD",row || gx.fn.currentGridRowImpl(116),gx.O.AV87bmpRegProd,gx.O.AV181Bmpregprod_GXI)},c2v:function(){gx.O.AV181Bmpregprod_GXI=this.val_GXI();gx.O.AV87bmpRegProd=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPREGPROD",row || gx.fn.currentGridRowImpl(116))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPREGPROD_GXI",row || gx.fn.currentGridRowImpl(116))}, gxvar_GXI:'AV181Bmpregprod_GXI',nac:gx.falseFn};
   GXValidFnc[132]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:116,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV13bmpCon",gxold:"OV13bmpCon",gxvar:"AV13bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV13bmpCon=Value},v2z:function(Value){gx.O.ZV13bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(116),gx.O.AV13bmpCon,gx.O.AV178Bmpcon_GXI)},c2v:function(){gx.O.AV178Bmpcon_GXI=this.val_GXI();gx.O.AV13bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(116))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(116))}, gxvar_GXI:'AV178Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[133]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:116,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPOCORRENCIA",gxz:"ZV32bmpOcorrencia",gxold:"OV32bmpOcorrencia",gxvar:"AV32bmpOcorrencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV32bmpOcorrencia=Value},v2z:function(Value){gx.O.ZV32bmpOcorrencia=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPOCORRENCIA",row || gx.fn.currentGridRowImpl(116),gx.O.AV32bmpOcorrencia,gx.O.AV180Bmpocorrencia_GXI)},c2v:function(){gx.O.AV180Bmpocorrencia_GXI=this.val_GXI();gx.O.AV32bmpOcorrencia=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPOCORRENCIA",row || gx.fn.currentGridRowImpl(116))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPOCORRENCIA_GXI",row || gx.fn.currentGridRowImpl(116))}, gxvar_GXI:'AV180Bmpocorrencia_GXI',nac:gx.falseFn};
   GXValidFnc[134]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:116,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCAN",gxz:"ZV120bmpCan",gxold:"OV120bmpCan",gxvar:"AV120bmpCan",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV120bmpCan=Value},v2z:function(Value){gx.O.ZV120bmpCan=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCAN",row || gx.fn.currentGridRowImpl(116),gx.O.AV120bmpCan,gx.O.AV182Bmpcan_GXI)},c2v:function(){gx.O.AV182Bmpcan_GXI=this.val_GXI();gx.O.AV120bmpCan=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCAN",row || gx.fn.currentGridRowImpl(116))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCAN_GXI",row || gx.fn.currentGridRowImpl(116))}, gxvar_GXI:'AV182Bmpcan_GXI',nac:gx.falseFn};
   GXValidFnc[135]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:116,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRAUSUARIOAUT",gxz:"Z4246PedidoCompraUsuarioAut",gxold:"O4246PedidoCompraUsuarioAut",gxvar:"A4246PedidoCompraUsuarioAut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4246PedidoCompraUsuarioAut=Value},v2z:function(Value){gx.O.Z4246PedidoCompraUsuarioAut=Value},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRAUSUARIOAUT",row || gx.fn.currentGridRowImpl(116),gx.O.A4246PedidoCompraUsuarioAut,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4246PedidoCompraUsuarioAut=this.val()},val:function(row){return gx.fn.getGridControlValue("PEDIDOCOMPRAUSUARIOAUT",row || gx.fn.currentGridRowImpl(116))},nac:gx.falseFn};
   GXValidFnc[136]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:116,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRADATAHORAAUT",gxz:"Z4247PedidoCompraDataHoraAut",gxold:"O4247PedidoCompraDataHoraAut",gxvar:"A4247PedidoCompraDataHoraAut",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4247PedidoCompraDataHoraAut=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4247PedidoCompraDataHoraAut=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRADATAHORAAUT",row || gx.fn.currentGridRowImpl(116),gx.O.A4247PedidoCompraDataHoraAut,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4247PedidoCompraDataHoraAut=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PEDIDOCOMPRADATAHORAAUT",row || gx.fn.currentGridRowImpl(116))},nac:gx.falseFn};
   GXValidFnc[137]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:116,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRASITUACAO",gxz:"Z3380PedidoCompraSituacao",gxold:"O3380PedidoCompraSituacao",gxvar:"A3380PedidoCompraSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A3380PedidoCompraSituacao=Value},v2z:function(Value){gx.O.Z3380PedidoCompraSituacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("PEDIDOCOMPRASITUACAO",row || gx.fn.currentGridRowImpl(116),gx.O.A3380PedidoCompraSituacao)},c2v:function(){gx.O.A3380PedidoCompraSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("PEDIDOCOMPRASITUACAO",row || gx.fn.currentGridRowImpl(116))},nac:gx.falseFn};
   GXValidFnc[138]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:116,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRAFILIALID",gxz:"Z3388PedidoCompraFilialId",gxold:"O3388PedidoCompraFilialId",gxvar:"A3388PedidoCompraFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3388PedidoCompraFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3388PedidoCompraFilialId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRAFILIALID",row || gx.fn.currentGridRowImpl(116),gx.O.A3388PedidoCompraFilialId,0)},c2v:function(){gx.O.A3388PedidoCompraFilialId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PEDIDOCOMPRAFILIALID",row || gx.fn.currentGridRowImpl(116),'.')},nac:gx.falseFn};
   GXValidFnc[141]={fld:"TABLE19",grid:0};
   GXValidFnc[144]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[146]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[148]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[150]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[153]={fld:"TABLE28",grid:0};
   GXValidFnc[156]={fld:"TABLE29",grid:0};
   GXValidFnc[159]={fld:"TXTTITAPL7", format:0,grid:0};
   GXValidFnc[161]={lvl:0,type:"decimal",len:15,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTOTPEDIDOS",gxz:"ZV69TotPedidos",gxold:"OV69TotPedidos",gxvar:"AV69TotPedidos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69TotPedidos=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV69TotPedidos=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTOTPEDIDOS",gx.O.AV69TotPedidos,2,',')},c2v:function(){gx.O.AV69TotPedidos=this.val()},val:function(){return gx.fn.getDecimalValue("vTOTPEDIDOS",'.',',')},nac:gx.falseFn};
   GXValidFnc[163]={fld:"TABLE30",grid:0};
   GXValidFnc[166]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITABERTO",gxz:"ZV77SitAberto",gxold:"OV77SitAberto",gxvar:"AV77SitAberto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77SitAberto=Value},v2z:function(Value){gx.O.ZV77SitAberto=Value},v2c:function(){gx.fn.setMultimediaValue("vSITABERTO",gx.O.AV77SitAberto,gx.O.AV174Sitaberto_GXI)},c2v:function(){gx.O.AV174Sitaberto_GXI=this.val_GXI();gx.O.AV77SitAberto=this.val()},val:function(){return gx.fn.getBlobValue("vSITABERTO")},val_GXI:function(){return gx.fn.getControlValue("vSITABERTO_GXI")}, gxvar_GXI:'AV174Sitaberto_GXI',nac:gx.falseFn};
   GXValidFnc[168]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[171]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITFECHADO",gxz:"ZV75SitFechado",gxold:"OV75SitFechado",gxvar:"AV75SitFechado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV75SitFechado=Value},v2z:function(Value){gx.O.ZV75SitFechado=Value},v2c:function(){gx.fn.setMultimediaValue("vSITFECHADO",gx.O.AV75SitFechado,gx.O.AV172Sitfechado_GXI)},c2v:function(){gx.O.AV172Sitfechado_GXI=this.val_GXI();gx.O.AV75SitFechado=this.val()},val:function(){return gx.fn.getBlobValue("vSITFECHADO")},val_GXI:function(){return gx.fn.getControlValue("vSITFECHADO_GXI")}, gxvar_GXI:'AV172Sitfechado_GXI',nac:gx.falseFn};
   GXValidFnc[173]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[176]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITCANCELADO",gxz:"ZV76SitCancelado",gxold:"OV76SitCancelado",gxvar:"AV76SitCancelado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV76SitCancelado=Value},v2z:function(Value){gx.O.ZV76SitCancelado=Value},v2c:function(){gx.fn.setMultimediaValue("vSITCANCELADO",gx.O.AV76SitCancelado,gx.O.AV173Sitcancelado_GXI)},c2v:function(){gx.O.AV173Sitcancelado_GXI=this.val_GXI();gx.O.AV76SitCancelado=this.val()},val:function(){return gx.fn.getBlobValue("vSITCANCELADO")},val_GXI:function(){return gx.fn.getControlValue("vSITCANCELADO_GXI")}, gxvar_GXI:'AV173Sitcancelado_GXI',nac:gx.falseFn};
   GXValidFnc[178]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[184]={fld:"TABLE18",grid:0};
   GXValidFnc[188]={fld:"JS", format:2,grid:0};
   GXValidFnc[190]={fld:"TABINVISIVEL",grid:0};
   GXValidFnc[193]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOID",gxz:"ZV150ProdutoCodigoId",gxold:"OV150ProdutoCodigoId",gxvar:"AV150ProdutoCodigoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV150ProdutoCodigoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV150ProdutoCodigoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOID",gx.O.AV150ProdutoCodigoId,0)},c2v:function(){gx.O.AV150ProdutoCodigoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOID",'.')},nac:gx.falseFn};
   GXValidFnc[194]={lvl:0,type:"date",len:8,dec:0,sign:true,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Gx_date,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};
   GXValidFnc[195]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAANOIMP",gxz:"ZV105PedidoCompraAnoImp",gxold:"OV105PedidoCompraAnoImp",gxvar:"AV105PedidoCompraAnoImp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV105PedidoCompraAnoImp=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV105PedidoCompraAnoImp=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAANOIMP",gx.O.AV105PedidoCompraAnoImp,0)},c2v:function(){gx.O.AV105PedidoCompraAnoImp=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRAANOIMP",'.')},nac:gx.falseFn};
   GXValidFnc[196]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSNERRO",gxz:"ZV86SnErro",gxold:"OV86SnErro",gxvar:"AV86SnErro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV86SnErro=Value},v2z:function(Value){gx.O.ZV86SnErro=Value},v2c:function(){gx.fn.setControlValue("vSNERRO",gx.O.AV86SnErro,0)},c2v:function(){gx.O.AV86SnErro=this.val()},val:function(){return gx.fn.getControlValue("vSNERRO")},nac:gx.falseFn};
   GXValidFnc[197]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEFORNEC",gxz:"ZV98qtdeFornec",gxold:"OV98qtdeFornec",gxvar:"AV98qtdeFornec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV98qtdeFornec=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV98qtdeFornec=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEFORNEC",gx.O.AV98qtdeFornec,0)},c2v:function(){gx.O.AV98qtdeFornec=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEFORNEC",'.')},nac:gx.falseFn};
   GXValidFnc[198]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOID",gxz:"ZV156SubGrupoProdutoId",gxold:"OV156SubGrupoProdutoId",gxvar:"AV156SubGrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV156SubGrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV156SubGrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOID",gx.O.AV156SubGrupoProdutoId,0)},c2v:function(){gx.O.AV156SubGrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[199]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTOID",gxz:"ZV145GrupoProdutoId",gxold:"OV145GrupoProdutoId",gxvar:"AV145GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV145GrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV145GrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOID",gx.O.AV145GrupoProdutoId,0)},c2v:function(){gx.O.AV145GrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[200]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECONULO",gxz:"ZV148PrecoNulo",gxold:"OV148PrecoNulo",gxvar:"AV148PrecoNulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV148PrecoNulo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV148PrecoNulo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECONULO",gx.O.AV148PrecoNulo,0)},c2v:function(){gx.O.AV148PrecoNulo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECONULO",'.')},nac:gx.falseFn};
   GXValidFnc[201]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAO",gxz:"ZV147LoteProdutoCombinacao",gxold:"OV147LoteProdutoCombinacao",gxvar:"AV147LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV147LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.ZV147LoteProdutoCombinacao=Value},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAO",gx.O.AV147LoteProdutoCombinacao,0)},c2v:function(){gx.O.AV147LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[202]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV44sim",gxold:"OV44sim",gxvar:"AV44sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44sim=Value},v2z:function(Value){gx.O.ZV44sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV44sim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV44sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 202 , function() {
   });
   GXValidFnc[203]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOBARRA",gxz:"ZV142CodigoBarrasProdutoBarra",gxold:"OV142CodigoBarrasProdutoBarra",gxvar:"AV142CodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV142CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV142CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTOBARRA",gx.O.AV142CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.AV142CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRA",'.')},nac:gx.falseFn};
   GXValidFnc[204]={lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMEARQUIVO",gxz:"ZV134NomeArquivo",gxold:"OV134NomeArquivo",gxvar:"AV134NomeArquivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV134NomeArquivo=Value},v2z:function(Value){gx.O.ZV134NomeArquivo=Value},v2c:function(){gx.fn.setControlValue("vNOMEARQUIVO",gx.O.AV134NomeArquivo,0)},c2v:function(){gx.O.AV134NomeArquivo=this.val()},val:function(){return gx.fn.getControlValue("vNOMEARQUIVO")},nac:gx.falseFn};
   GXValidFnc[205]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV154ProdutoReferencia",gxold:"OV154ProdutoReferencia",gxvar:"AV154ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV154ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV154ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV154ProdutoReferencia,0)},c2v:function(){gx.O.AV154ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[206]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCATEGORIA",gxz:"ZV149ProdutoCategoria",gxold:"OV149ProdutoCategoria",gxvar:"AV149ProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV149ProdutoCategoria=Value},v2z:function(Value){gx.O.ZV149ProdutoCategoria=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOCATEGORIA",gx.O.AV149ProdutoCategoria)},c2v:function(){gx.O.AV149ProdutoCategoria=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCATEGORIA")},nac:gx.falseFn};
   GXValidFnc[207]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDATAAUTINIAUX",gxz:"ZV95DataAutIniAux",gxold:"OV95DataAutIniAux",gxvar:"AV95DataAutIniAux",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV95DataAutIniAux=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV95DataAutIniAux=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAAUTINIAUX",gx.O.AV95DataAutIniAux,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV95DataAutIniAux=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vDATAAUTINIAUX")},nac:gx.falseFn};
   this.declareDomainHdlr( 207 , function() {
   });
   GXValidFnc[208]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV8OrderedBy",gxold:"OV8OrderedBy",gxvar:"AV8OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV8OrderedBy,0)},c2v:function(){gx.O.AV8OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[209]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV103PaginaAux",gxold:"OV103PaginaAux",gxvar:"AV103PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV103PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV103PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV103PaginaAux,0)},c2v:function(){gx.O.AV103PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[210]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV102Pagina",gxold:"OV102Pagina",gxvar:"AV102Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV102Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV102Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV102Pagina,0)},c2v:function(){gx.O.AV102Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[211]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDATAAUTFINAUX",gxz:"ZV96DataAutFinAux",gxold:"OV96DataAutFinAux",gxvar:"AV96DataAutFinAux",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV96DataAutFinAux=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV96DataAutFinAux=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAAUTFINAUX",gx.O.AV96DataAutFinAux,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV96DataAutFinAux=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vDATAAUTFINAUX")},nac:gx.falseFn};
   this.declareDomainHdlr( 211 , function() {
   });
   GXValidFnc[212]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV8OrderedBy",gxold:"OV8OrderedBy",gxvar:"AV8OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV8OrderedBy,0)},c2v:function(){gx.O.AV8OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[213]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV155SNVenda",gxold:"OV155SNVenda",gxvar:"AV155SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV155SNVenda=Value},v2z:function(Value){gx.O.ZV155SNVenda=Value},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV155SNVenda,0)},c2v:function(){gx.O.AV155SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};
   GXValidFnc[214]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUXIN",gxz:"ZV146IntAuxIn",gxold:"OV146IntAuxIn",gxvar:"AV146IntAuxIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV146IntAuxIn=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV146IntAuxIn=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTAUXIN",gx.O.AV146IntAuxIn,0)},c2v:function(){gx.O.AV146IntAuxIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUXIN",'.')},nac:gx.falseFn};
   GXValidFnc[215]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV8OrderedBy",gxold:"OV8OrderedBy",gxvar:"AV8OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV8OrderedBy,0)},c2v:function(){gx.O.AV8OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[216]={lvl:0,type:"char",len:7,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECO",gxz:"ZV37Preco",gxold:"OV37Preco",gxvar:"AV37Preco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37Preco=Value},v2z:function(Value){gx.O.ZV37Preco=Value},v2c:function(){gx.fn.setControlValue("vPRECO",gx.O.AV37Preco,0)},c2v:function(){gx.O.AV37Preco=this.val()},val:function(){return gx.fn.getControlValue("vPRECO")},nac:gx.falseFn};
   GXValidFnc[217]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV155SNVenda",gxold:"OV155SNVenda",gxvar:"AV155SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV155SNVenda=Value},v2z:function(Value){gx.O.ZV155SNVenda=Value},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV155SNVenda,0)},c2v:function(){gx.O.AV155SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};
   GXValidFnc[218]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUXIN",gxz:"ZV146IntAuxIn",gxold:"OV146IntAuxIn",gxvar:"AV146IntAuxIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV146IntAuxIn=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV146IntAuxIn=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTAUXIN",gx.O.AV146IntAuxIn,0)},c2v:function(){gx.O.AV146IntAuxIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUXIN",'.')},nac:gx.falseFn};
   GXValidFnc[219]={lvl:0,type:"char",len:7,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECO",gxz:"ZV37Preco",gxold:"OV37Preco",gxvar:"AV37Preco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37Preco=Value},v2z:function(Value){gx.O.ZV37Preco=Value},v2c:function(){gx.fn.setControlValue("vPRECO",gx.O.AV37Preco,0)},c2v:function(){gx.O.AV37Preco=this.val()},val:function(){return gx.fn.getControlValue("vPRECO")},nac:gx.falseFn};
   GXValidFnc[220]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV8OrderedBy",gxold:"OV8OrderedBy",gxvar:"AV8OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV8OrderedBy,0)},c2v:function(){gx.O.AV8OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[221]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDATAAUTFINAUX",gxz:"ZV96DataAutFinAux",gxold:"OV96DataAutFinAux",gxvar:"AV96DataAutFinAux",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV96DataAutFinAux=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV96DataAutFinAux=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAAUTFINAUX",gx.O.AV96DataAutFinAux,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV96DataAutFinAux=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vDATAAUTFINAUX")},nac:gx.falseFn};
   this.declareDomainHdlr( 221 , function() {
   });
   GXValidFnc[222]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV103PaginaAux",gxold:"OV103PaginaAux",gxvar:"AV103PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV103PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV103PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV103PaginaAux,0)},c2v:function(){gx.O.AV103PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[223]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV45nao",gxold:"OV45nao",gxvar:"AV45nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45nao=Value},v2z:function(Value){gx.O.ZV45nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV45nao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV45nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 223 , function() {
   });
   GXValidFnc[224]={lvl:0,type:"char",len:7,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIAL",gxz:"ZV38Filial",gxold:"OV38Filial",gxvar:"AV38Filial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38Filial=Value},v2z:function(Value){gx.O.ZV38Filial=Value},v2c:function(){gx.fn.setControlValue("vFILIAL",gx.O.AV38Filial,0)},c2v:function(){gx.O.AV38Filial=this.val()},val:function(){return gx.fn.getControlValue("vFILIAL")},nac:gx.falseFn};
   GXValidFnc[225]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaempresaid,isvalid:null,rgrid:[this.GridContainer],fld:"vPESSOAEMPRESAID",gxz:"ZV58PessoaEmpresaId",gxold:"OV58PessoaEmpresaId",gxvar:"AV58PessoaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58PessoaEmpresaId=Value},v2z:function(Value){gx.O.ZV58PessoaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMPRESAID",gx.O.AV58PessoaEmpresaId,0)},c2v:function(){gx.O.AV58PessoaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[226]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECOEMPRESAID",gxz:"ZV43PrecoEmpresaId",gxold:"OV43PrecoEmpresaId",gxvar:"AV43PrecoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43PrecoEmpresaId=Value},v2z:function(Value){gx.O.ZV43PrecoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRECOEMPRESAID",gx.O.AV43PrecoEmpresaId,0)},c2v:function(){gx.O.AV43PrecoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRECOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[227]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Vendedorempresaid,isvalid:null,rgrid:[this.GridContainer],fld:"vVENDEDOREMPRESAID",gxz:"ZV79VendedorEmpresaId",gxold:"OV79VendedorEmpresaId",gxvar:"AV79VendedorEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV79VendedorEmpresaId=Value},v2z:function(Value){gx.O.ZV79VendedorEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vVENDEDOREMPRESAID",gx.O.AV79VendedorEmpresaId,0)},c2v:function(){gx.O.AV79VendedorEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vVENDEDOREMPRESAID")},nac:gx.falseFn};
   GXValidFnc[228]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOTA",gxz:"ZV36Nota",gxold:"OV36Nota",gxvar:"AV36Nota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36Nota=Value},v2z:function(Value){gx.O.ZV36Nota=Value},v2c:function(){gx.fn.setControlValue("vNOTA",gx.O.AV36Nota,0)},c2v:function(){gx.O.AV36Nota=this.val()},val:function(){return gx.fn.getControlValue("vNOTA")},nac:gx.falseFn};
   GXValidFnc[229]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[this.GridContainer],fld:"vFILIALEMPRESAID",gxz:"ZV42FilialEmpresaId",gxold:"OV42FilialEmpresaId",gxvar:"AV42FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV42FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV42FilialEmpresaId,0)},c2v:function(){gx.O.AV42FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[230]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPADRAO",gxz:"ZV14EmpresaPadrao",gxold:"OV14EmpresaPadrao",gxvar:"AV14EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV14EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV14EmpresaPadrao,0)},c2v:function(){gx.O.AV14EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[231]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRANUMEROIMP",gxz:"ZV106PedidoCompraNumeroImp",gxold:"OV106PedidoCompraNumeroImp",gxvar:"AV106PedidoCompraNumeroImp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV106PedidoCompraNumeroImp=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV106PedidoCompraNumeroImp=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRANUMEROIMP",gx.O.AV106PedidoCompraNumeroImp,0)},c2v:function(){gx.O.AV106PedidoCompraNumeroImp=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRANUMEROIMP",'.')},nac:gx.falseFn};
   GXValidFnc[232]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAFILIALIDIMP",gxz:"ZV107PedidoCompraFilialIdImp",gxold:"OV107PedidoCompraFilialIdImp",gxvar:"AV107PedidoCompraFilialIdImp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV107PedidoCompraFilialIdImp=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV107PedidoCompraFilialIdImp=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAFILIALIDIMP",gx.O.AV107PedidoCompraFilialIdImp,0)},c2v:function(){gx.O.AV107PedidoCompraFilialIdImp=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRAFILIALIDIMP",'.')},nac:gx.falseFn};
   GXValidFnc[233]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDFILTRO",gxz:"ZV144FilialIdFiltro",gxold:"OV144FilialIdFiltro",gxvar:"AV144FilialIdFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV144FilialIdFiltro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV144FilialIdFiltro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDFILTRO",gx.O.AV144FilialIdFiltro,0)},c2v:function(){gx.O.AV144FilialIdFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDFILTRO",'.')},nac:gx.falseFn};
   GXValidFnc[237]={fld:"BTNPARM",grid:0};
   GXValidFnc[238]={fld:"BTNHELP",grid:0};
   GXValidFnc[239]={fld:"PROMPT_FILIALID",grid:0};
   GXValidFnc[240]={fld:"PROMPT_FORNECEDORID",grid:0};
   GXValidFnc[241]={fld:"PROMPT_COMPRADORID",grid:0};
   this.AV26FilialId = 0 ;
   this.ZV26FilialId = 0 ;
   this.OV26FilialId = 0 ;
   this.AV27FilialNome = "" ;
   this.ZV27FilialNome = "" ;
   this.OV27FilialNome = "" ;
   this.AV23FornecedorId = 0 ;
   this.ZV23FornecedorId = 0 ;
   this.OV23FornecedorId = 0 ;
   this.AV24FornecedorFantasia = "" ;
   this.ZV24FornecedorFantasia = "" ;
   this.OV24FornecedorFantasia = "" ;
   this.AV114PedidoCompraAnoFiltro = 0 ;
   this.ZV114PedidoCompraAnoFiltro = 0 ;
   this.OV114PedidoCompraAnoFiltro = 0 ;
   this.AV113PedidoCompraNumeroFiltro = 0 ;
   this.ZV113PedidoCompraNumeroFiltro = 0 ;
   this.OV113PedidoCompraNumeroFiltro = 0 ;
   this.AV66PedidoCompraNoPedidoForn = "" ;
   this.ZV66PedidoCompraNoPedidoForn = "" ;
   this.OV66PedidoCompraNoPedidoForn = "" ;
   this.AV25PedidoCompraDataini = gx.date.nullDate() ;
   this.ZV25PedidoCompraDataini = gx.date.nullDate() ;
   this.OV25PedidoCompraDataini = gx.date.nullDate() ;
   this.AV65PedidoCompraDatafim = gx.date.nullDate() ;
   this.ZV65PedidoCompraDatafim = gx.date.nullDate() ;
   this.OV65PedidoCompraDatafim = gx.date.nullDate() ;
   this.AV93DataEntrIni = gx.date.nullDate() ;
   this.ZV93DataEntrIni = gx.date.nullDate() ;
   this.OV93DataEntrIni = gx.date.nullDate() ;
   this.AV94DataEntrFin = gx.date.nullDate() ;
   this.ZV94DataEntrFin = gx.date.nullDate() ;
   this.OV94DataEntrFin = gx.date.nullDate() ;
   this.AV67PedidoCompraSituacao = "" ;
   this.ZV67PedidoCompraSituacao = "" ;
   this.OV67PedidoCompraSituacao = "" ;
   this.AV28CompradorId = 0 ;
   this.ZV28CompradorId = 0 ;
   this.OV28CompradorId = 0 ;
   this.AV29CompradorNome = "" ;
   this.ZV29CompradorNome = "" ;
   this.OV29CompradorNome = "" ;
   this.AV91DataAutIni = gx.date.nullDate() ;
   this.ZV91DataAutIni = gx.date.nullDate() ;
   this.OV91DataAutIni = gx.date.nullDate() ;
   this.AV92DataAutFin = gx.date.nullDate() ;
   this.ZV92DataAutFin = gx.date.nullDate() ;
   this.OV92DataAutFin = gx.date.nullDate() ;
   this.AV90Autorizacao = "" ;
   this.ZV90Autorizacao = "" ;
   this.OV90Autorizacao = "" ;
   this.AV153produtoid = 0 ;
   this.ZV153produtoid = 0 ;
   this.OV153produtoid = 0 ;
   this.AV151ProdutoDescricaoResumida = "" ;
   this.ZV151ProdutoDescricaoResumida = "" ;
   this.OV151ProdutoDescricaoResumida = "" ;
   this.AV143EntradaNumeroDocumento = 0 ;
   this.ZV143EntradaNumeroDocumento = 0 ;
   this.OV143EntradaNumeroDocumento = 0 ;
   this.Z3336PedidoCompraAno = 0 ;
   this.O3336PedidoCompraAno = 0 ;
   this.Z3337PedidoCompraNumero = 0 ;
   this.O3337PedidoCompraNumero = 0 ;
   this.ZV68Fornecedor = "" ;
   this.OV68Fornecedor = "" ;
   this.Z3360PedidoCompraData = gx.date.nullDate() ;
   this.O3360PedidoCompraData = gx.date.nullDate() ;
   this.ZV125PedidoCompraDataPrevisao = gx.date.nullDate() ;
   this.OV125PedidoCompraDataPrevisao = gx.date.nullDate() ;
   this.ZV64Vendedor = "" ;
   this.OV64Vendedor = "" ;
   this.Z1237VendedorId = 0 ;
   this.O1237VendedorId = 0 ;
   this.Z1148VendedorNome = "" ;
   this.O1148VendedorNome = "" ;
   this.Z3369PedidoCompraPagamento = "" ;
   this.O3369PedidoCompraPagamento = "" ;
   this.Z3391PedidoCompraValorTotal = 0 ;
   this.O3391PedidoCompraValorTotal = 0 ;
   this.Z3788PedidoCompraValorLiquido = 0 ;
   this.O3788PedidoCompraValorLiquido = 0 ;
   this.ZV5bmpAlt = "" ;
   this.OV5bmpAlt = "" ;
   this.ZV6bmpExc = "" ;
   this.OV6bmpExc = "" ;
   this.ZV31bmpImprimir = "" ;
   this.OV31bmpImprimir = "" ;
   this.ZV87bmpRegProd = "" ;
   this.OV87bmpRegProd = "" ;
   this.ZV13bmpCon = "" ;
   this.OV13bmpCon = "" ;
   this.ZV32bmpOcorrencia = "" ;
   this.OV32bmpOcorrencia = "" ;
   this.ZV120bmpCan = "" ;
   this.OV120bmpCan = "" ;
   this.Z4246PedidoCompraUsuarioAut = "" ;
   this.O4246PedidoCompraUsuarioAut = "" ;
   this.Z4247PedidoCompraDataHoraAut = gx.date.nullDate() ;
   this.O4247PedidoCompraDataHoraAut = gx.date.nullDate() ;
   this.Z3380PedidoCompraSituacao = "" ;
   this.O3380PedidoCompraSituacao = "" ;
   this.Z3388PedidoCompraFilialId = 0 ;
   this.O3388PedidoCompraFilialId = 0 ;
   this.AV69TotPedidos = 0 ;
   this.ZV69TotPedidos = 0 ;
   this.OV69TotPedidos = 0 ;
   this.AV174Sitaberto_GXI = "" ;
   this.AV77SitAberto = "" ;
   this.ZV77SitAberto = "" ;
   this.OV77SitAberto = "" ;
   this.AV172Sitfechado_GXI = "" ;
   this.AV75SitFechado = "" ;
   this.ZV75SitFechado = "" ;
   this.OV75SitFechado = "" ;
   this.AV173Sitcancelado_GXI = "" ;
   this.AV76SitCancelado = "" ;
   this.ZV76SitCancelado = "" ;
   this.OV76SitCancelado = "" ;
   this.AV150ProdutoCodigoId = 0 ;
   this.ZV150ProdutoCodigoId = 0 ;
   this.OV150ProdutoCodigoId = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV105PedidoCompraAnoImp = 0 ;
   this.ZV105PedidoCompraAnoImp = 0 ;
   this.OV105PedidoCompraAnoImp = 0 ;
   this.AV86SnErro = "" ;
   this.ZV86SnErro = "" ;
   this.OV86SnErro = "" ;
   this.AV98qtdeFornec = 0 ;
   this.ZV98qtdeFornec = 0 ;
   this.OV98qtdeFornec = 0 ;
   this.AV156SubGrupoProdutoId = 0 ;
   this.ZV156SubGrupoProdutoId = 0 ;
   this.OV156SubGrupoProdutoId = 0 ;
   this.AV145GrupoProdutoId = 0 ;
   this.ZV145GrupoProdutoId = 0 ;
   this.OV145GrupoProdutoId = 0 ;
   this.AV148PrecoNulo = 0 ;
   this.ZV148PrecoNulo = 0 ;
   this.OV148PrecoNulo = 0 ;
   this.AV147LoteProdutoCombinacao = "" ;
   this.ZV147LoteProdutoCombinacao = "" ;
   this.OV147LoteProdutoCombinacao = "" ;
   this.AV44sim = "" ;
   this.ZV44sim = "" ;
   this.OV44sim = "" ;
   this.AV142CodigoBarrasProdutoBarra = 0 ;
   this.ZV142CodigoBarrasProdutoBarra = 0 ;
   this.OV142CodigoBarrasProdutoBarra = 0 ;
   this.AV134NomeArquivo = "" ;
   this.ZV134NomeArquivo = "" ;
   this.OV134NomeArquivo = "" ;
   this.AV154ProdutoReferencia = "" ;
   this.ZV154ProdutoReferencia = "" ;
   this.OV154ProdutoReferencia = "" ;
   this.AV149ProdutoCategoria = "" ;
   this.ZV149ProdutoCategoria = "" ;
   this.OV149ProdutoCategoria = "" ;
   this.AV95DataAutIniAux = gx.date.nullDate() ;
   this.ZV95DataAutIniAux = gx.date.nullDate() ;
   this.OV95DataAutIniAux = gx.date.nullDate() ;
   this.AV8OrderedBy = 0 ;
   this.ZV8OrderedBy = 0 ;
   this.OV8OrderedBy = 0 ;
   this.AV103PaginaAux = 0 ;
   this.ZV103PaginaAux = 0 ;
   this.OV103PaginaAux = 0 ;
   this.AV102Pagina = 0 ;
   this.ZV102Pagina = 0 ;
   this.OV102Pagina = 0 ;
   this.AV96DataAutFinAux = gx.date.nullDate() ;
   this.ZV96DataAutFinAux = gx.date.nullDate() ;
   this.OV96DataAutFinAux = gx.date.nullDate() ;
   this.AV155SNVenda = "" ;
   this.ZV155SNVenda = "" ;
   this.OV155SNVenda = "" ;
   this.AV146IntAuxIn = 0 ;
   this.ZV146IntAuxIn = 0 ;
   this.OV146IntAuxIn = 0 ;
   this.AV37Preco = "" ;
   this.ZV37Preco = "" ;
   this.OV37Preco = "" ;
   this.AV45nao = "" ;
   this.ZV45nao = "" ;
   this.OV45nao = "" ;
   this.AV38Filial = "" ;
   this.ZV38Filial = "" ;
   this.OV38Filial = "" ;
   this.AV58PessoaEmpresaId = "" ;
   this.ZV58PessoaEmpresaId = "" ;
   this.OV58PessoaEmpresaId = "" ;
   this.AV43PrecoEmpresaId = "" ;
   this.ZV43PrecoEmpresaId = "" ;
   this.OV43PrecoEmpresaId = "" ;
   this.AV79VendedorEmpresaId = "" ;
   this.ZV79VendedorEmpresaId = "" ;
   this.OV79VendedorEmpresaId = "" ;
   this.AV36Nota = "" ;
   this.ZV36Nota = "" ;
   this.OV36Nota = "" ;
   this.AV42FilialEmpresaId = "" ;
   this.ZV42FilialEmpresaId = "" ;
   this.OV42FilialEmpresaId = "" ;
   this.AV14EmpresaPadrao = "" ;
   this.ZV14EmpresaPadrao = "" ;
   this.OV14EmpresaPadrao = "" ;
   this.AV106PedidoCompraNumeroImp = 0 ;
   this.ZV106PedidoCompraNumeroImp = 0 ;
   this.OV106PedidoCompraNumeroImp = 0 ;
   this.AV107PedidoCompraFilialIdImp = 0 ;
   this.ZV107PedidoCompraFilialIdImp = 0 ;
   this.OV107PedidoCompraFilialIdImp = 0 ;
   this.AV144FilialIdFiltro = 0 ;
   this.ZV144FilialIdFiltro = 0 ;
   this.OV144FilialIdFiltro = 0 ;
   this.AV26FilialId = 0 ;
   this.AV27FilialNome = "" ;
   this.AV23FornecedorId = 0 ;
   this.AV24FornecedorFantasia = "" ;
   this.AV114PedidoCompraAnoFiltro = 0 ;
   this.AV113PedidoCompraNumeroFiltro = 0 ;
   this.AV66PedidoCompraNoPedidoForn = "" ;
   this.AV25PedidoCompraDataini = gx.date.nullDate() ;
   this.AV65PedidoCompraDatafim = gx.date.nullDate() ;
   this.AV93DataEntrIni = gx.date.nullDate() ;
   this.AV94DataEntrFin = gx.date.nullDate() ;
   this.AV67PedidoCompraSituacao = "" ;
   this.AV28CompradorId = 0 ;
   this.AV29CompradorNome = "" ;
   this.AV91DataAutIni = gx.date.nullDate() ;
   this.AV92DataAutFin = gx.date.nullDate() ;
   this.AV90Autorizacao = "" ;
   this.AV153produtoid = 0 ;
   this.AV151ProdutoDescricaoResumida = "" ;
   this.AV143EntradaNumeroDocumento = 0 ;
   this.AV69TotPedidos = 0 ;
   this.AV77SitAberto = "" ;
   this.AV75SitFechado = "" ;
   this.AV76SitCancelado = "" ;
   this.AV150ProdutoCodigoId = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV105PedidoCompraAnoImp = 0 ;
   this.AV86SnErro = "" ;
   this.AV98qtdeFornec = 0 ;
   this.AV156SubGrupoProdutoId = 0 ;
   this.AV145GrupoProdutoId = 0 ;
   this.AV148PrecoNulo = 0 ;
   this.AV147LoteProdutoCombinacao = "" ;
   this.AV44sim = "" ;
   this.AV142CodigoBarrasProdutoBarra = 0 ;
   this.AV134NomeArquivo = "" ;
   this.AV154ProdutoReferencia = "" ;
   this.AV149ProdutoCategoria = "" ;
   this.AV95DataAutIniAux = gx.date.nullDate() ;
   this.AV8OrderedBy = 0 ;
   this.AV103PaginaAux = 0 ;
   this.AV102Pagina = 0 ;
   this.AV96DataAutFinAux = gx.date.nullDate() ;
   this.AV155SNVenda = "" ;
   this.AV146IntAuxIn = 0 ;
   this.AV37Preco = "" ;
   this.AV45nao = "" ;
   this.AV38Filial = "" ;
   this.AV58PessoaEmpresaId = "" ;
   this.AV43PrecoEmpresaId = "" ;
   this.AV79VendedorEmpresaId = "" ;
   this.AV36Nota = "" ;
   this.AV42FilialEmpresaId = "" ;
   this.AV14EmpresaPadrao = "" ;
   this.AV106PedidoCompraNumeroImp = 0 ;
   this.AV107PedidoCompraFilialIdImp = 0 ;
   this.AV144FilialIdFiltro = 0 ;
   this.AV89Chamada = "" ;
   this.A3426PedidoCompraEmpresaId = "" ;
   this.A3778PedidoCompraPessoaFantasia = "" ;
   this.A3389PedidoCompraDataEntrega = gx.date.nullDate() ;
   this.A3387PedidoCompraFilialEmpId = "" ;
   this.A3386PedidoCompraNoPedidoForn = "" ;
   this.A3362PedidoCompraPessoaId = 0 ;
   this.A3361PedidoCompraPessoaEmpId = "" ;
   this.A1229VendedorEmpresaId = "" ;
   this.A3787PedidoCompraValorICMSST = 0 ;
   this.A3786PedidoCompraValorICMS = 0 ;
   this.A3785PedidoCompraValorIPI = 0 ;
   this.A3384PedidoCompraValorEncargo = 0 ;
   this.A3385PedidoCompraValorSeguro = 0 ;
   this.A3383PedidoCompraValorFrete = 0 ;
   this.A3382PedidoCompraValorDesconto = 0 ;
   this.A3336PedidoCompraAno = 0 ;
   this.A3337PedidoCompraNumero = 0 ;
   this.AV68Fornecedor = "" ;
   this.A3360PedidoCompraData = gx.date.nullDate() ;
   this.AV125PedidoCompraDataPrevisao = gx.date.nullDate() ;
   this.AV64Vendedor = "" ;
   this.A1237VendedorId = 0 ;
   this.A1148VendedorNome = "" ;
   this.A3369PedidoCompraPagamento = "" ;
   this.A3391PedidoCompraValorTotal = 0 ;
   this.A3788PedidoCompraValorLiquido = 0 ;
   this.AV5bmpAlt = "" ;
   this.AV6bmpExc = "" ;
   this.AV31bmpImprimir = "" ;
   this.AV87bmpRegProd = "" ;
   this.AV13bmpCon = "" ;
   this.AV32bmpOcorrencia = "" ;
   this.AV120bmpCan = "" ;
   this.A4246PedidoCompraUsuarioAut = "" ;
   this.A4247PedidoCompraDataHoraAut = gx.date.nullDate() ;
   this.A3380PedidoCompraSituacao = "" ;
   this.A3388PedidoCompraFilialId = 0 ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.A10880PessoaEmailPessoaId = 0 ;
   this.A10879PessoaEmailPessoaEmpId = "" ;
   this.A10882PessoaEmailEnderecoEmail = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A434PessoaEmail = "" ;
   this.A11788PessoaEmailTipo = "" ;
   this.A421PessoaContato = "" ;
   this.A568TipoPermissaoId = 0 ;
   this.A558TipoPermissaoSnEmpresa = "" ;
   this.A3138TipoPermissaoSnControla = "" ;
   this.A138EmpresaId = "" ;
   this.A566TipoPermissaoUsuarioUsuarioId = "" ;
   this.A3799PedidoCompraLOGSeq = 0 ;
   this.A4286PedidoCompraLOGDataPrev = gx.date.nullDate() ;
   this.A3793PedidoCompraLOGData = gx.date.nullDate() ;
   this.A1127VendedorSNComprador = "" ;
   this.A71PessoaFantasia = "" ;
   this.AV152ProdutoEmpresaId = "" ;
   this.AV126TpPrazoEntrega = "" ;
   this.AV121PedidoComSolici = "" ;
   this.AV119IncPedidoDireto = "" ;
   this.AV7UsrCod = "" ;
   this.AV21Sistema = "" ;
   this.AV164Pgmname = "" ;
   this.AV165Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV73PedidoCompraAno = 0 ;
   this.AV74PedidoCompraNumero = 0 ;
   this.AV12EmpresaLogadaId = "" ;
   this.AV109SdtPermissao = [ ] ;
   this.AV133SdtParmEmail = {} ;
   this.AV62CorAberta = "" ;
   this.AV61CorFechada = "" ;
   this.AV60CorCancel = "" ;
   this.AV63Cor = "" ;
   this.AV122NomeClasse = "" ;
   this.AV35Ano = "" ;
   this.Events = {"e11oo2_client": ["'ANTERIOR'", true] ,"e12oo2_client": ["'PROXIMO'", true] ,"e13oo2_client": ["'NOVO'", true] ,"e14oo2_client": ["'FECHAR'", true] ,"e15oo2_client": ["'PROCURAR'", true] ,"e26oo2_client": ["'ALTERAR'", true] ,"e27oo2_client": ["'EXCLUIR'", true] ,"e16oo2_client": ["'INSEREPEDIDOEXISTENTE'", true] ,"e28oo2_client": ["'IMPRIMEPEDIDO'", true] ,"e29oo2_client": ["'ACOMPANHAMENTO'", true] ,"e17oo2_client": ["'GXM_LAST'", true] ,"e18oo2_client": ["'GXM_FIRST'", true] ,"e32oo2_client": ["'ENTREGA'", true] ,"e33oo2_client": ["'CONSULTA'", true] ,"e19oo2_client": ["'PARAMETROS'", true] ,"e34oo2_client": ["'CANCELARPEDIDO'", true] ,"e35oo2_client": ["'ATUALIZAPAGINA'", true] ,"e20oo2_client": ["VPRODUTOID.ISVALID", true] ,"e21oo2_client": ["'ABERTO'", true] ,"e22oo2_client": ["'FECHADO'", true] ,"e23oo2_client": ["'CANCELADO'", true] ,"e36oo2_client": ["ENTER", true] ,"e37oo2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26FilialId',fld:'vFILIALID'},{av:'AV23FornecedorId',fld:'vFORNECEDORID'},{av:'AV114PedidoCompraAnoFiltro',fld:'vPEDIDOCOMPRAANOFILTRO'},{av:'AV113PedidoCompraNumeroFiltro',fld:'vPEDIDOCOMPRANUMEROFILTRO'},{av:'AV66PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV25PedidoCompraDataini',fld:'vPEDIDOCOMPRADATAINI'},{av:'AV65PedidoCompraDatafim',fld:'vPEDIDOCOMPRADATAFIM'},{av:'AV93DataEntrIni',fld:'vDATAENTRINI'},{av:'AV94DataEntrFin',fld:'vDATAENTRFIN'},{av:'AV67PedidoCompraSituacao',fld:'vPEDIDOCOMPRASITUACAO'},{av:'AV28CompradorId',fld:'vCOMPRADORID'},{av:'AV91DataAutIni',fld:'vDATAAUTINI'},{av:'AV92DataAutFin',fld:'vDATAAUTFIN'},{av:'AV90Autorizacao',fld:'vAUTORIZACAO'},{av:'AV153produtoid',fld:'vPRODUTOID'},{av:'AV143EntradaNumeroDocumento',fld:'vENTRADANUMERODOCUMENTO'},{av:'AV86SnErro',fld:'vSNERRO'},{av:'AV95DataAutIniAux',fld:'vDATAAUTINIAUX'},{av:'AV8OrderedBy',fld:'vORDEREDBY'},{av:'AV96DataAutFinAux',fld:'vDATAAUTFINAUX'},{av:'AV79VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'AV152ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Visible")',ctrl:'PEDIDOCOMPRAANO',prop:'Visible'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV6bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV13bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpImprimir',fld:'vBMPIMPRIMIR'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIMIR","Tooltiptext")',ctrl:'vBMPIMPRIMIR',prop:'Tooltiptext'},{av:'AV32bmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV87bmpRegProd',fld:'vBMPREGPROD'},{av:'gx.fn.getCtrlProperty("vBMPREGPROD","Tooltiptext")',ctrl:'vBMPREGPROD',prop:'Tooltiptext'},{av:'AV120bmpCan',fld:'vBMPCAN'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Tooltiptext")',ctrl:'vBMPCAN',prop:'Tooltiptext'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV62CorAberta',fld:'vCORABERTA'},{av:'AV61CorFechada',fld:'vCORFECHADA'},{av:'AV60CorCancel',fld:'vCORCANCEL'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3793PedidoCompraLOGData',fld:'PEDIDOCOMPRALOGDATA'},{av:'A3799PedidoCompraLOGSeq',fld:'PEDIDOCOMPRALOGSEQ'},{av:'A4286PedidoCompraLOGDataPrev',fld:'PEDIDOCOMPRALOGDATAPREV'},{av:'AV63Cor',fld:'vCOR'},{av:'AV122NomeClasse',fld:'vNOMECLASSE'},{av:'AV126TpPrazoEntrega',fld:'vTPPRAZOENTREGA'},{av:'AV38Filial',fld:'vFILIAL'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV42FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV121PedidoComSolici',fld:'vPEDIDOCOMSOLICI'},{av:'AV119IncPedidoDireto',fld:'vINCPEDIDODIRETO'},{av:'AV7UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV21Sistema',fld:'vSISTEMA'},{av:'AV164Pgmname',fld:'vPGMNAME'},{av:'AV165Pgmdesc',fld:'vPGMDESC'},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV73PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV74PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV14EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV103PaginaAux',fld:'vPAGINAAUX'},{av:'AV102Pagina',fld:'vPAGINA'},{av:'AV58PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV105PedidoCompraAnoImp',fld:'vPEDIDOCOMPRAANOIMP'},{av:'AV106PedidoCompraNumeroImp',fld:'vPEDIDOCOMPRANUMEROIMP'},{av:'AV12EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV107PedidoCompraFilialIdImp',fld:'vPEDIDOCOMPRAFILIALIDIMP'},{av:'AV109SdtPermissao',fld:'vSDTPERMISSAO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A4246PedidoCompraUsuarioAut',fld:'PEDIDOCOMPRAUSUARIOAUT'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A3138TipoPermissaoSnControla',fld:'TIPOPERMISSAOSNCONTROLA'},{av:'A566TipoPermissaoUsuarioUsuarioId',fld:'TIPOPERMISSAOUSUARIOUSUARIOID'},{av:'A558TipoPermissaoSnEmpresa',fld:'TIPOPERMISSAOSNEMPRESA'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A421PessoaContato',fld:'PESSOACONTATO'},{av:'A10879PessoaEmailPessoaEmpId',fld:'PESSOAEMAILPESSOAEMPID'},{av:'A10880PessoaEmailPessoaId',fld:'PESSOAEMAILPESSOAID'},{av:'A11788PessoaEmailTipo',fld:'PESSOAEMAILTIPO'},{av:'A10882PessoaEmailEnderecoEmail',fld:'PESSOAEMAILENDERECOEMAIL'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'AV133SdtParmEmail',fld:'vSDTPARMEMAIL'},{av:'AV134NomeArquivo',fld:'vNOMEARQUIVO'}],[{av:'gx.fn.getCtrlProperty("vPEDIDOCOMPRADATAPREVISAO","Visible")',ctrl:'vPEDIDOCOMPRADATAPREVISAO',prop:'Visible'},{av:'AV26FilialId',fld:'vFILIALID'},{av:'AV27FilialNome',fld:'vFILIALNOME'},{av:'gx.fn.getCtrlProperty("vFILIALID","Enabled")',ctrl:'vFILIALID',prop:'Enabled'},{av:'AV73PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV74PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{ctrl:'BTNCOPPEDIDO',prop:'Visible'},{ctrl:'BTNNOVO',prop:'Visible'},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV165Pgmdesc',fld:'vPGMDESC'},{av:'AV164Pgmname',fld:'vPGMNAME'},{av:'AV21Sistema',fld:'vSISTEMA'},{av:'AV86SnErro',fld:'vSNERRO'},{av:'AV105PedidoCompraAnoImp',fld:'vPEDIDOCOMPRAANOIMP'},{av:'AV106PedidoCompraNumeroImp',fld:'vPEDIDOCOMPRANUMEROIMP'},{av:'AV107PedidoCompraFilialIdImp',fld:'vPEDIDOCOMPRAFILIALIDIMP'},{av:'AV123PedidoComSol',fld:'vPEDIDOCOMSOL'},{av:'AV37Preco',fld:'vPRECO'},{av:'AV35Ano',fld:'vANO'},{av:'AV36Nota',fld:'vNOTA'},{av:'AV121PedidoComSolici',fld:'vPEDIDOCOMSOLICI'},{av:'AV62CorAberta',fld:'vCORABERTA'},{av:'AV61CorFechada',fld:'vCORFECHADA'},{av:'AV60CorCancel',fld:'vCORCANCEL'},{av:'AV119IncPedidoDireto',fld:'vINCPEDIDODIRETO'},{av:'AV38Filial',fld:'vFILIAL'},{av:'AV126TpPrazoEntrega',fld:'vTPPRAZOENTREGA'},{av:'AV128NomeTela',fld:'vNOMETELA'},{av:'AV115ModeloRelatorio',fld:'vMODELORELATORIO'},{av:'AV16NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV15NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV134NomeArquivo',fld:'vNOMEARQUIVO'},{av:'AV116SdtPedido',fld:'vSDTPEDIDO'},{av:'AV117SdtPedidoCompra',fld:'vSDTPEDIDOCOMPRA'},{av:'AV59QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'},{av:'AV108MsgDetalhada',fld:'vMSGDETALHADA'},{av:'AV109SdtPermissao',fld:'vSDTPERMISSAO'},{av:'AV110SnTelaPermissao',fld:'vSNTELAPERMISSAO'},{av:'AV112NomeSessao',fld:'vNOMESESSAO'},{av:'AV99TipoAlteracao',fld:'vTIPOALTERACAO'},{av:'AV140NomeRelatoriAux',fld:'vNOMERELATORIAUX'},{av:'AV130PedidoCompraPessoaId',fld:'vPEDIDOCOMPRAPESSOAID'},{av:'AV141PedidoCompraUsuarioAut',fld:'vPEDIDOCOMPRAUSUARIOAUT'},{av:'AV135PessoaContato',fld:'vPESSOACONTATO'},{av:'AV131PessoaEmailCollection',fld:'vPESSOAEMAILCOLLECTION'},{av:'AV133SdtParmEmail',fld:'vSDTPARMEMAIL'},{av:'AV139NomeArquivoAnt',fld:'vNOMEARQUIVOANT'},{av:'AV136GetName',fld:'vGETNAME'},{av:'AV137NomeArquivoAtu',fld:'vNOMEARQUIVOATU'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV8OrderedBy',fld:'vORDEREDBY'},{av:'AV103PaginaAux',fld:'vPAGINAAUX'},{av:'AV102Pagina',fld:'vPAGINA'}],[{ctrl:'PEDIDOCOMPRAANO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Title")',ctrl:'PEDIDOCOMPRAANO',prop:'Title'},{av:'AV9Imagem',fld:'vIMAGEM'},{ctrl:'PEDIDOCOMPRANUMERO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRANUMERO","Title")',ctrl:'PEDIDOCOMPRANUMERO',prop:'Title'},{ctrl:'PEDIDOCOMPRADATA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRADATA","Title")',ctrl:'PEDIDOCOMPRADATA',prop:'Title'},{ctrl:'vVENDEDOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vVENDEDOR","Title")',ctrl:'vVENDEDOR',prop:'Title'},{ctrl:'vFORNECEDOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vFORNECEDOR","Title")',ctrl:'vFORNECEDOR',prop:'Title'},{ctrl:'PEDIDOCOMPRAPAGAMENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAPAGAMENTO","Title")',ctrl:'PEDIDOCOMPRAPAGAMENTO',prop:'Title'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26FilialId',fld:'vFILIALID'},{av:'AV23FornecedorId',fld:'vFORNECEDORID'},{av:'AV114PedidoCompraAnoFiltro',fld:'vPEDIDOCOMPRAANOFILTRO'},{av:'AV113PedidoCompraNumeroFiltro',fld:'vPEDIDOCOMPRANUMEROFILTRO'},{av:'AV66PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV25PedidoCompraDataini',fld:'vPEDIDOCOMPRADATAINI'},{av:'AV65PedidoCompraDatafim',fld:'vPEDIDOCOMPRADATAFIM'},{av:'AV93DataEntrIni',fld:'vDATAENTRINI'},{av:'AV94DataEntrFin',fld:'vDATAENTRFIN'},{av:'AV67PedidoCompraSituacao',fld:'vPEDIDOCOMPRASITUACAO'},{av:'AV28CompradorId',fld:'vCOMPRADORID'},{av:'AV91DataAutIni',fld:'vDATAAUTINI'},{av:'AV92DataAutFin',fld:'vDATAAUTFIN'},{av:'AV90Autorizacao',fld:'vAUTORIZACAO'},{av:'AV153produtoid',fld:'vPRODUTOID'},{av:'AV143EntradaNumeroDocumento',fld:'vENTRADANUMERODOCUMENTO'},{av:'AV86SnErro',fld:'vSNERRO'},{av:'AV95DataAutIniAux',fld:'vDATAAUTINIAUX'},{av:'AV8OrderedBy',fld:'vORDEREDBY'},{av:'AV96DataAutFinAux',fld:'vDATAAUTFINAUX'},{av:'AV58PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV79VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'AV42FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV14EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV152ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Visible")',ctrl:'PEDIDOCOMPRAANO',prop:'Visible'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV6bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV13bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpImprimir',fld:'vBMPIMPRIMIR'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIMIR","Tooltiptext")',ctrl:'vBMPIMPRIMIR',prop:'Tooltiptext'},{av:'AV32bmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV87bmpRegProd',fld:'vBMPREGPROD'},{av:'gx.fn.getCtrlProperty("vBMPREGPROD","Tooltiptext")',ctrl:'vBMPREGPROD',prop:'Tooltiptext'},{av:'AV120bmpCan',fld:'vBMPCAN'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Tooltiptext")',ctrl:'vBMPCAN',prop:'Tooltiptext'},{av:'AV126TpPrazoEntrega',fld:'vTPPRAZOENTREGA'},{av:'AV38Filial',fld:'vFILIAL'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV121PedidoComSolici',fld:'vPEDIDOCOMSOLICI'},{av:'AV119IncPedidoDireto',fld:'vINCPEDIDODIRETO'},{av:'AV7UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV21Sistema',fld:'vSISTEMA'},{av:'AV164Pgmname',fld:'vPGMNAME'},{av:'AV165Pgmdesc',fld:'vPGMDESC'},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV73PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV74PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV105PedidoCompraAnoImp',fld:'vPEDIDOCOMPRAANOIMP'},{av:'AV106PedidoCompraNumeroImp',fld:'vPEDIDOCOMPRANUMEROIMP'},{av:'AV12EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV107PedidoCompraFilialIdImp',fld:'vPEDIDOCOMPRAFILIALIDIMP'},{av:'AV109SdtPermissao',fld:'vSDTPERMISSAO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A4246PedidoCompraUsuarioAut',fld:'PEDIDOCOMPRAUSUARIOAUT'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A3138TipoPermissaoSnControla',fld:'TIPOPERMISSAOSNCONTROLA'},{av:'A566TipoPermissaoUsuarioUsuarioId',fld:'TIPOPERMISSAOUSUARIOUSUARIOID'},{av:'A558TipoPermissaoSnEmpresa',fld:'TIPOPERMISSAOSNEMPRESA'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A421PessoaContato',fld:'PESSOACONTATO'},{av:'A10879PessoaEmailPessoaEmpId',fld:'PESSOAEMAILPESSOAEMPID'},{av:'A10880PessoaEmailPessoaId',fld:'PESSOAEMAILPESSOAID'},{av:'A11788PessoaEmailTipo',fld:'PESSOAEMAILTIPO'},{av:'A10882PessoaEmailEnderecoEmail',fld:'PESSOAEMAILENDERECOEMAIL'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'AV133SdtParmEmail',fld:'vSDTPARMEMAIL'},{av:'AV134NomeArquivo',fld:'vNOMEARQUIVO'},{av:'AV103PaginaAux',fld:'vPAGINAAUX'},{av:'AV102Pagina',fld:'vPAGINA'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV62CorAberta',fld:'vCORABERTA'},{av:'AV61CorFechada',fld:'vCORFECHADA'},{av:'AV60CorCancel',fld:'vCORCANCEL'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3793PedidoCompraLOGData',fld:'PEDIDOCOMPRALOGDATA'},{av:'A3799PedidoCompraLOGSeq',fld:'PEDIDOCOMPRALOGSEQ'},{av:'A4286PedidoCompraLOGDataPrev',fld:'PEDIDOCOMPRALOGDATAPREV'},{av:'AV63Cor',fld:'vCOR'},{av:'AV122NomeClasse',fld:'vNOMECLASSE'}],[{av:'AV102Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26FilialId',fld:'vFILIALID'},{av:'AV23FornecedorId',fld:'vFORNECEDORID'},{av:'AV114PedidoCompraAnoFiltro',fld:'vPEDIDOCOMPRAANOFILTRO'},{av:'AV113PedidoCompraNumeroFiltro',fld:'vPEDIDOCOMPRANUMEROFILTRO'},{av:'AV66PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV25PedidoCompraDataini',fld:'vPEDIDOCOMPRADATAINI'},{av:'AV65PedidoCompraDatafim',fld:'vPEDIDOCOMPRADATAFIM'},{av:'AV93DataEntrIni',fld:'vDATAENTRINI'},{av:'AV94DataEntrFin',fld:'vDATAENTRFIN'},{av:'AV67PedidoCompraSituacao',fld:'vPEDIDOCOMPRASITUACAO'},{av:'AV28CompradorId',fld:'vCOMPRADORID'},{av:'AV91DataAutIni',fld:'vDATAAUTINI'},{av:'AV92DataAutFin',fld:'vDATAAUTFIN'},{av:'AV90Autorizacao',fld:'vAUTORIZACAO'},{av:'AV153produtoid',fld:'vPRODUTOID'},{av:'AV143EntradaNumeroDocumento',fld:'vENTRADANUMERODOCUMENTO'},{av:'AV86SnErro',fld:'vSNERRO'},{av:'AV95DataAutIniAux',fld:'vDATAAUTINIAUX'},{av:'AV8OrderedBy',fld:'vORDEREDBY'},{av:'AV96DataAutFinAux',fld:'vDATAAUTFINAUX'},{av:'AV58PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV79VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'AV42FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV14EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV152ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Visible")',ctrl:'PEDIDOCOMPRAANO',prop:'Visible'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV6bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV13bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpImprimir',fld:'vBMPIMPRIMIR'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIMIR","Tooltiptext")',ctrl:'vBMPIMPRIMIR',prop:'Tooltiptext'},{av:'AV32bmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV87bmpRegProd',fld:'vBMPREGPROD'},{av:'gx.fn.getCtrlProperty("vBMPREGPROD","Tooltiptext")',ctrl:'vBMPREGPROD',prop:'Tooltiptext'},{av:'AV120bmpCan',fld:'vBMPCAN'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Tooltiptext")',ctrl:'vBMPCAN',prop:'Tooltiptext'},{av:'AV126TpPrazoEntrega',fld:'vTPPRAZOENTREGA'},{av:'AV38Filial',fld:'vFILIAL'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV121PedidoComSolici',fld:'vPEDIDOCOMSOLICI'},{av:'AV119IncPedidoDireto',fld:'vINCPEDIDODIRETO'},{av:'AV7UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV21Sistema',fld:'vSISTEMA'},{av:'AV164Pgmname',fld:'vPGMNAME'},{av:'AV165Pgmdesc',fld:'vPGMDESC'},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV73PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV74PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV105PedidoCompraAnoImp',fld:'vPEDIDOCOMPRAANOIMP'},{av:'AV106PedidoCompraNumeroImp',fld:'vPEDIDOCOMPRANUMEROIMP'},{av:'AV12EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV107PedidoCompraFilialIdImp',fld:'vPEDIDOCOMPRAFILIALIDIMP'},{av:'AV109SdtPermissao',fld:'vSDTPERMISSAO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A4246PedidoCompraUsuarioAut',fld:'PEDIDOCOMPRAUSUARIOAUT'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A3138TipoPermissaoSnControla',fld:'TIPOPERMISSAOSNCONTROLA'},{av:'A566TipoPermissaoUsuarioUsuarioId',fld:'TIPOPERMISSAOUSUARIOUSUARIOID'},{av:'A558TipoPermissaoSnEmpresa',fld:'TIPOPERMISSAOSNEMPRESA'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A421PessoaContato',fld:'PESSOACONTATO'},{av:'A10879PessoaEmailPessoaEmpId',fld:'PESSOAEMAILPESSOAEMPID'},{av:'A10880PessoaEmailPessoaId',fld:'PESSOAEMAILPESSOAID'},{av:'A11788PessoaEmailTipo',fld:'PESSOAEMAILTIPO'},{av:'A10882PessoaEmailEnderecoEmail',fld:'PESSOAEMAILENDERECOEMAIL'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'AV133SdtParmEmail',fld:'vSDTPARMEMAIL'},{av:'AV134NomeArquivo',fld:'vNOMEARQUIVO'},{av:'AV103PaginaAux',fld:'vPAGINAAUX'},{av:'AV102Pagina',fld:'vPAGINA'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV62CorAberta',fld:'vCORABERTA'},{av:'AV61CorFechada',fld:'vCORFECHADA'},{av:'AV60CorCancel',fld:'vCORCANCEL'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3793PedidoCompraLOGData',fld:'PEDIDOCOMPRALOGDATA'},{av:'A3799PedidoCompraLOGSeq',fld:'PEDIDOCOMPRALOGSEQ'},{av:'A4286PedidoCompraLOGDataPrev',fld:'PEDIDOCOMPRALOGDATAPREV'},{av:'AV63Cor',fld:'vCOR'},{av:'AV122NomeClasse',fld:'vNOMECLASSE'}],[{av:'AV102Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'NOVO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26FilialId',fld:'vFILIALID'},{av:'AV23FornecedorId',fld:'vFORNECEDORID'},{av:'AV114PedidoCompraAnoFiltro',fld:'vPEDIDOCOMPRAANOFILTRO'},{av:'AV113PedidoCompraNumeroFiltro',fld:'vPEDIDOCOMPRANUMEROFILTRO'},{av:'AV66PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV25PedidoCompraDataini',fld:'vPEDIDOCOMPRADATAINI'},{av:'AV65PedidoCompraDatafim',fld:'vPEDIDOCOMPRADATAFIM'},{av:'AV93DataEntrIni',fld:'vDATAENTRINI'},{av:'AV94DataEntrFin',fld:'vDATAENTRFIN'},{av:'AV67PedidoCompraSituacao',fld:'vPEDIDOCOMPRASITUACAO'},{av:'AV28CompradorId',fld:'vCOMPRADORID'},{av:'AV91DataAutIni',fld:'vDATAAUTINI'},{av:'AV92DataAutFin',fld:'vDATAAUTFIN'},{av:'AV90Autorizacao',fld:'vAUTORIZACAO'},{av:'AV153produtoid',fld:'vPRODUTOID'},{av:'AV143EntradaNumeroDocumento',fld:'vENTRADANUMERODOCUMENTO'},{av:'AV86SnErro',fld:'vSNERRO'},{av:'AV95DataAutIniAux',fld:'vDATAAUTINIAUX'},{av:'AV8OrderedBy',fld:'vORDEREDBY'},{av:'AV96DataAutFinAux',fld:'vDATAAUTFINAUX'},{av:'AV58PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV79VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'AV42FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV14EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV152ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Visible")',ctrl:'PEDIDOCOMPRAANO',prop:'Visible'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV6bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV13bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpImprimir',fld:'vBMPIMPRIMIR'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIMIR","Tooltiptext")',ctrl:'vBMPIMPRIMIR',prop:'Tooltiptext'},{av:'AV32bmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV87bmpRegProd',fld:'vBMPREGPROD'},{av:'gx.fn.getCtrlProperty("vBMPREGPROD","Tooltiptext")',ctrl:'vBMPREGPROD',prop:'Tooltiptext'},{av:'AV120bmpCan',fld:'vBMPCAN'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Tooltiptext")',ctrl:'vBMPCAN',prop:'Tooltiptext'},{av:'AV126TpPrazoEntrega',fld:'vTPPRAZOENTREGA'},{av:'AV38Filial',fld:'vFILIAL'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV121PedidoComSolici',fld:'vPEDIDOCOMSOLICI'},{av:'AV119IncPedidoDireto',fld:'vINCPEDIDODIRETO'},{av:'AV7UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV21Sistema',fld:'vSISTEMA'},{av:'AV164Pgmname',fld:'vPGMNAME'},{av:'AV165Pgmdesc',fld:'vPGMDESC'},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV73PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV74PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV105PedidoCompraAnoImp',fld:'vPEDIDOCOMPRAANOIMP'},{av:'AV106PedidoCompraNumeroImp',fld:'vPEDIDOCOMPRANUMEROIMP'},{av:'AV12EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV107PedidoCompraFilialIdImp',fld:'vPEDIDOCOMPRAFILIALIDIMP'},{av:'AV109SdtPermissao',fld:'vSDTPERMISSAO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A4246PedidoCompraUsuarioAut',fld:'PEDIDOCOMPRAUSUARIOAUT'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A3138TipoPermissaoSnControla',fld:'TIPOPERMISSAOSNCONTROLA'},{av:'A566TipoPermissaoUsuarioUsuarioId',fld:'TIPOPERMISSAOUSUARIOUSUARIOID'},{av:'A558TipoPermissaoSnEmpresa',fld:'TIPOPERMISSAOSNEMPRESA'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A421PessoaContato',fld:'PESSOACONTATO'},{av:'A10879PessoaEmailPessoaEmpId',fld:'PESSOAEMAILPESSOAEMPID'},{av:'A10880PessoaEmailPessoaId',fld:'PESSOAEMAILPESSOAID'},{av:'A11788PessoaEmailTipo',fld:'PESSOAEMAILTIPO'},{av:'A10882PessoaEmailEnderecoEmail',fld:'PESSOAEMAILENDERECOEMAIL'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'AV133SdtParmEmail',fld:'vSDTPARMEMAIL'},{av:'AV134NomeArquivo',fld:'vNOMEARQUIVO'},{av:'AV103PaginaAux',fld:'vPAGINAAUX'},{av:'AV102Pagina',fld:'vPAGINA'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV62CorAberta',fld:'vCORABERTA'},{av:'AV61CorFechada',fld:'vCORFECHADA'},{av:'AV60CorCancel',fld:'vCORCANCEL'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3793PedidoCompraLOGData',fld:'PEDIDOCOMPRALOGDATA'},{av:'A3799PedidoCompraLOGSeq',fld:'PEDIDOCOMPRALOGSEQ'},{av:'A4286PedidoCompraLOGDataPrev',fld:'PEDIDOCOMPRALOGDATAPREV'},{av:'AV63Cor',fld:'vCOR'},{av:'AV122NomeClasse',fld:'vNOMECLASSE'},{av:'AV35Ano',fld:'vANO'}],[{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV165Pgmdesc',fld:'vPGMDESC'},{av:'AV164Pgmname',fld:'vPGMNAME'},{av:'AV21Sistema',fld:'vSISTEMA'},{av:'AV73PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV86SnErro',fld:'vSNERRO'},{av:'AV26FilialId',fld:'vFILIALID'},{av:'AV27FilialNome',fld:'vFILIALNOME'},{av:'AV190GXLvl1004',fld:'vGXLVL1004'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV89Chamada',fld:'vCHAMADA'}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26FilialId',fld:'vFILIALID'},{av:'AV23FornecedorId',fld:'vFORNECEDORID'},{av:'AV114PedidoCompraAnoFiltro',fld:'vPEDIDOCOMPRAANOFILTRO'},{av:'AV113PedidoCompraNumeroFiltro',fld:'vPEDIDOCOMPRANUMEROFILTRO'},{av:'AV66PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV25PedidoCompraDataini',fld:'vPEDIDOCOMPRADATAINI'},{av:'AV65PedidoCompraDatafim',fld:'vPEDIDOCOMPRADATAFIM'},{av:'AV93DataEntrIni',fld:'vDATAENTRINI'},{av:'AV94DataEntrFin',fld:'vDATAENTRFIN'},{av:'AV67PedidoCompraSituacao',fld:'vPEDIDOCOMPRASITUACAO'},{av:'AV28CompradorId',fld:'vCOMPRADORID'},{av:'AV91DataAutIni',fld:'vDATAAUTINI'},{av:'AV92DataAutFin',fld:'vDATAAUTFIN'},{av:'AV90Autorizacao',fld:'vAUTORIZACAO'},{av:'AV153produtoid',fld:'vPRODUTOID'},{av:'AV143EntradaNumeroDocumento',fld:'vENTRADANUMERODOCUMENTO'},{av:'AV86SnErro',fld:'vSNERRO'},{av:'AV95DataAutIniAux',fld:'vDATAAUTINIAUX'},{av:'AV8OrderedBy',fld:'vORDEREDBY'},{av:'AV96DataAutFinAux',fld:'vDATAAUTFINAUX'},{av:'AV58PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV79VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'AV42FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV14EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV152ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Visible")',ctrl:'PEDIDOCOMPRAANO',prop:'Visible'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV6bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV13bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpImprimir',fld:'vBMPIMPRIMIR'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIMIR","Tooltiptext")',ctrl:'vBMPIMPRIMIR',prop:'Tooltiptext'},{av:'AV32bmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV87bmpRegProd',fld:'vBMPREGPROD'},{av:'gx.fn.getCtrlProperty("vBMPREGPROD","Tooltiptext")',ctrl:'vBMPREGPROD',prop:'Tooltiptext'},{av:'AV120bmpCan',fld:'vBMPCAN'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Tooltiptext")',ctrl:'vBMPCAN',prop:'Tooltiptext'},{av:'AV126TpPrazoEntrega',fld:'vTPPRAZOENTREGA'},{av:'AV38Filial',fld:'vFILIAL'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV121PedidoComSolici',fld:'vPEDIDOCOMSOLICI'},{av:'AV119IncPedidoDireto',fld:'vINCPEDIDODIRETO'},{av:'AV7UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV21Sistema',fld:'vSISTEMA'},{av:'AV164Pgmname',fld:'vPGMNAME'},{av:'AV165Pgmdesc',fld:'vPGMDESC'},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV73PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV74PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV105PedidoCompraAnoImp',fld:'vPEDIDOCOMPRAANOIMP'},{av:'AV106PedidoCompraNumeroImp',fld:'vPEDIDOCOMPRANUMEROIMP'},{av:'AV12EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV107PedidoCompraFilialIdImp',fld:'vPEDIDOCOMPRAFILIALIDIMP'},{av:'AV109SdtPermissao',fld:'vSDTPERMISSAO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A4246PedidoCompraUsuarioAut',fld:'PEDIDOCOMPRAUSUARIOAUT'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A3138TipoPermissaoSnControla',fld:'TIPOPERMISSAOSNCONTROLA'},{av:'A566TipoPermissaoUsuarioUsuarioId',fld:'TIPOPERMISSAOUSUARIOUSUARIOID'},{av:'A558TipoPermissaoSnEmpresa',fld:'TIPOPERMISSAOSNEMPRESA'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A421PessoaContato',fld:'PESSOACONTATO'},{av:'A10879PessoaEmailPessoaEmpId',fld:'PESSOAEMAILPESSOAEMPID'},{av:'A10880PessoaEmailPessoaId',fld:'PESSOAEMAILPESSOAID'},{av:'A11788PessoaEmailTipo',fld:'PESSOAEMAILTIPO'},{av:'A10882PessoaEmailEnderecoEmail',fld:'PESSOAEMAILENDERECOEMAIL'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'AV133SdtParmEmail',fld:'vSDTPARMEMAIL'},{av:'AV134NomeArquivo',fld:'vNOMEARQUIVO'},{av:'AV103PaginaAux',fld:'vPAGINAAUX'},{av:'AV102Pagina',fld:'vPAGINA'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV62CorAberta',fld:'vCORABERTA'},{av:'AV61CorFechada',fld:'vCORFECHADA'},{av:'AV60CorCancel',fld:'vCORCANCEL'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3793PedidoCompraLOGData',fld:'PEDIDOCOMPRALOGDATA'},{av:'A3799PedidoCompraLOGSeq',fld:'PEDIDOCOMPRALOGSEQ'},{av:'A4286PedidoCompraLOGDataPrev',fld:'PEDIDOCOMPRALOGDATAPREV'},{av:'AV63Cor',fld:'vCOR'},{av:'AV122NomeClasse',fld:'vNOMECLASSE'},{av:'AV35Ano',fld:'vANO'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'A1127VendedorSNComprador',fld:'VENDEDORSNCOMPRADOR'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'}],[{av:'AV8OrderedBy',fld:'vORDEREDBY'},{av:'AV97DataAux',fld:'vDATAAUX'},{av:'AV95DataAutIniAux',fld:'vDATAAUTINIAUX'},{av:'AV96DataAutFinAux',fld:'vDATAAUTFINAUX'},{av:'AV84QtdeFechado',fld:'vQTDEFECHADO'},{av:'AV83QtdeCancelado',fld:'vQTDECANCELADO'},{av:'AV82QtdeAberto',fld:'vQTDEABERTO'},{av:'AV71TotPendente',fld:'vTOTPENDENTE'},{av:'AV69TotPedidos',fld:'vTOTPEDIDOS'},{av:'AV70TotEntregue',fld:'vTOTENTREGUE'},{av:'AV118TotBruto',fld:'vTOTBRUTO'},{av:'gx.fn.getCtrlProperty("vSITABERTO","Tooltiptext")',ctrl:'vSITABERTO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vSITCANCELADO","Tooltiptext")',ctrl:'vSITCANCELADO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vSITFECHADO","Tooltiptext")',ctrl:'vSITFECHADO',prop:'Tooltiptext'},{av:'AV103PaginaAux',fld:'vPAGINAAUX'},{av:'AV158QtdeLinGrid',fld:'vQTDELINGRID'},{av:'AV159Res',fld:'vRES'},{av:'AV160ResInt',fld:'vRESINT'},{av:'AV102Pagina',fld:'vPAGINA'},{av:'AV86SnErro',fld:'vSNERRO'},{av:'AV27FilialNome',fld:'vFILIALNOME'},{av:'AV167GXLvl329',fld:'vGXLVL329'},{av:'AV24FornecedorFantasia',fld:'vFORNECEDORFANTASIA'},{av:'AV168GXLvl365',fld:'vGXLVL365'},{av:'AV25PedidoCompraDataini',fld:'vPEDIDOCOMPRADATAINI'},{av:'AV65PedidoCompraDatafim',fld:'vPEDIDOCOMPRADATAFIM'},{av:'AV93DataEntrIni',fld:'vDATAENTRINI'},{av:'AV94DataEntrFin',fld:'vDATAENTRFIN'},{av:'AV92DataAutFin',fld:'vDATAAUTFIN'},{av:'AV91DataAutIni',fld:'vDATAAUTINI'},{av:'AV29CompradorNome',fld:'vCOMPRADORNOME'},{av:'AV169GXLvl431',fld:'vGXLVL431'},{av:'AV170GXLvl451',fld:'vGXLVL451'},{av:'AV37Preco',fld:'vPRECO'},{av:'AV35Ano',fld:'vANO'},{av:'AV36Nota',fld:'vNOTA'},{av:'AV121PedidoComSolici',fld:'vPEDIDOCOMSOLICI'},{av:'AV62CorAberta',fld:'vCORABERTA'},{av:'AV61CorFechada',fld:'vCORFECHADA'},{av:'AV60CorCancel',fld:'vCORCANCEL'},{av:'AV119IncPedidoDireto',fld:'vINCPEDIDODIRETO'},{av:'AV38Filial',fld:'vFILIAL'},{av:'AV126TpPrazoEntrega',fld:'vTPPRAZOENTREGA'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV21Sistema',fld:'vSISTEMA'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3388PedidoCompraFilialId',fld:'PEDIDOCOMPRAFILIALID'},{av:'A4247PedidoCompraDataHoraAut',fld:'PEDIDOCOMPRADATAHORAAUT'},{av:'A4246PedidoCompraUsuarioAut',fld:'PEDIDOCOMPRAUSUARIOAUT'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26FilialId',fld:'vFILIALID'},{av:'AV23FornecedorId',fld:'vFORNECEDORID'},{av:'AV114PedidoCompraAnoFiltro',fld:'vPEDIDOCOMPRAANOFILTRO'},{av:'AV113PedidoCompraNumeroFiltro',fld:'vPEDIDOCOMPRANUMEROFILTRO'},{av:'AV66PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV25PedidoCompraDataini',fld:'vPEDIDOCOMPRADATAINI'},{av:'AV65PedidoCompraDatafim',fld:'vPEDIDOCOMPRADATAFIM'},{av:'AV93DataEntrIni',fld:'vDATAENTRINI'},{av:'AV94DataEntrFin',fld:'vDATAENTRFIN'},{av:'AV67PedidoCompraSituacao',fld:'vPEDIDOCOMPRASITUACAO'},{av:'AV28CompradorId',fld:'vCOMPRADORID'},{av:'AV91DataAutIni',fld:'vDATAAUTINI'},{av:'AV92DataAutFin',fld:'vDATAAUTFIN'},{av:'AV90Autorizacao',fld:'vAUTORIZACAO'},{av:'AV153produtoid',fld:'vPRODUTOID'},{av:'AV143EntradaNumeroDocumento',fld:'vENTRADANUMERODOCUMENTO'},{av:'AV86SnErro',fld:'vSNERRO'},{av:'AV95DataAutIniAux',fld:'vDATAAUTINIAUX'},{av:'AV8OrderedBy',fld:'vORDEREDBY'},{av:'AV96DataAutFinAux',fld:'vDATAAUTFINAUX'},{av:'AV58PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV79VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'AV42FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV14EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV152ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Visible")',ctrl:'PEDIDOCOMPRAANO',prop:'Visible'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV6bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV13bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpImprimir',fld:'vBMPIMPRIMIR'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIMIR","Tooltiptext")',ctrl:'vBMPIMPRIMIR',prop:'Tooltiptext'},{av:'AV32bmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV87bmpRegProd',fld:'vBMPREGPROD'},{av:'gx.fn.getCtrlProperty("vBMPREGPROD","Tooltiptext")',ctrl:'vBMPREGPROD',prop:'Tooltiptext'},{av:'AV120bmpCan',fld:'vBMPCAN'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Tooltiptext")',ctrl:'vBMPCAN',prop:'Tooltiptext'},{av:'AV126TpPrazoEntrega',fld:'vTPPRAZOENTREGA'},{av:'AV38Filial',fld:'vFILIAL'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV121PedidoComSolici',fld:'vPEDIDOCOMSOLICI'},{av:'AV119IncPedidoDireto',fld:'vINCPEDIDODIRETO'},{av:'AV7UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV164Pgmname',fld:'vPGMNAME'},{av:'AV165Pgmdesc',fld:'vPGMDESC'},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV73PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV74PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV105PedidoCompraAnoImp',fld:'vPEDIDOCOMPRAANOIMP'},{av:'AV106PedidoCompraNumeroImp',fld:'vPEDIDOCOMPRANUMEROIMP'},{av:'AV12EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV107PedidoCompraFilialIdImp',fld:'vPEDIDOCOMPRAFILIALIDIMP'},{av:'AV109SdtPermissao',fld:'vSDTPERMISSAO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A3138TipoPermissaoSnControla',fld:'TIPOPERMISSAOSNCONTROLA'},{av:'A566TipoPermissaoUsuarioUsuarioId',fld:'TIPOPERMISSAOUSUARIOUSUARIOID'},{av:'A558TipoPermissaoSnEmpresa',fld:'TIPOPERMISSAOSNEMPRESA'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A421PessoaContato',fld:'PESSOACONTATO'},{av:'A10879PessoaEmailPessoaEmpId',fld:'PESSOAEMAILPESSOAEMPID'},{av:'A10880PessoaEmailPessoaId',fld:'PESSOAEMAILPESSOAID'},{av:'A11788PessoaEmailTipo',fld:'PESSOAEMAILTIPO'},{av:'A10882PessoaEmailEnderecoEmail',fld:'PESSOAEMAILENDERECOEMAIL'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'AV133SdtParmEmail',fld:'vSDTPARMEMAIL'},{av:'AV134NomeArquivo',fld:'vNOMEARQUIVO'},{av:'AV103PaginaAux',fld:'vPAGINAAUX'},{av:'AV102Pagina',fld:'vPAGINA'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV62CorAberta',fld:'vCORABERTA'},{av:'AV61CorFechada',fld:'vCORFECHADA'},{av:'AV60CorCancel',fld:'vCORCANCEL'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3793PedidoCompraLOGData',fld:'PEDIDOCOMPRALOGDATA'},{av:'A3799PedidoCompraLOGSeq',fld:'PEDIDOCOMPRALOGSEQ'},{av:'A4286PedidoCompraLOGDataPrev',fld:'PEDIDOCOMPRALOGDATAPREV'},{av:'AV63Cor',fld:'vCOR'},{av:'AV122NomeClasse',fld:'vNOMECLASSE'}],[{av:'AV86SnErro',fld:'vSNERRO'},{av:'AV100SnAutoriPedido',fld:'vSNAUTORIPEDIDO'},{av:'AV105PedidoCompraAnoImp',fld:'vPEDIDOCOMPRAANOIMP'},{av:'AV106PedidoCompraNumeroImp',fld:'vPEDIDOCOMPRANUMEROIMP'},{av:'AV107PedidoCompraFilialIdImp',fld:'vPEDIDOCOMPRAFILIALIDIMP'},{av:'AV108MsgDetalhada',fld:'vMSGDETALHADA'},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV109SdtPermissao',fld:'vSDTPERMISSAO'},{av:'AV110SnTelaPermissao',fld:'vSNTELAPERMISSAO'},{av:'AV112NomeSessao',fld:'vNOMESESSAO'},{av:'AV99TipoAlteracao',fld:'vTIPOALTERACAO'},{av:'AV165Pgmdesc',fld:'vPGMDESC'},{av:'AV164Pgmname',fld:'vPGMNAME'},{av:'AV21Sistema',fld:'vSISTEMA'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26FilialId',fld:'vFILIALID'},{av:'AV23FornecedorId',fld:'vFORNECEDORID'},{av:'AV114PedidoCompraAnoFiltro',fld:'vPEDIDOCOMPRAANOFILTRO'},{av:'AV113PedidoCompraNumeroFiltro',fld:'vPEDIDOCOMPRANUMEROFILTRO'},{av:'AV66PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV25PedidoCompraDataini',fld:'vPEDIDOCOMPRADATAINI'},{av:'AV65PedidoCompraDatafim',fld:'vPEDIDOCOMPRADATAFIM'},{av:'AV93DataEntrIni',fld:'vDATAENTRINI'},{av:'AV94DataEntrFin',fld:'vDATAENTRFIN'},{av:'AV67PedidoCompraSituacao',fld:'vPEDIDOCOMPRASITUACAO'},{av:'AV28CompradorId',fld:'vCOMPRADORID'},{av:'AV91DataAutIni',fld:'vDATAAUTINI'},{av:'AV92DataAutFin',fld:'vDATAAUTFIN'},{av:'AV90Autorizacao',fld:'vAUTORIZACAO'},{av:'AV153produtoid',fld:'vPRODUTOID'},{av:'AV143EntradaNumeroDocumento',fld:'vENTRADANUMERODOCUMENTO'},{av:'AV86SnErro',fld:'vSNERRO'},{av:'AV95DataAutIniAux',fld:'vDATAAUTINIAUX'},{av:'AV8OrderedBy',fld:'vORDEREDBY'},{av:'AV96DataAutFinAux',fld:'vDATAAUTFINAUX'},{av:'AV58PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV79VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'AV42FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV14EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV152ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Visible")',ctrl:'PEDIDOCOMPRAANO',prop:'Visible'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV6bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV13bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpImprimir',fld:'vBMPIMPRIMIR'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIMIR","Tooltiptext")',ctrl:'vBMPIMPRIMIR',prop:'Tooltiptext'},{av:'AV32bmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV87bmpRegProd',fld:'vBMPREGPROD'},{av:'gx.fn.getCtrlProperty("vBMPREGPROD","Tooltiptext")',ctrl:'vBMPREGPROD',prop:'Tooltiptext'},{av:'AV120bmpCan',fld:'vBMPCAN'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Tooltiptext")',ctrl:'vBMPCAN',prop:'Tooltiptext'},{av:'AV126TpPrazoEntrega',fld:'vTPPRAZOENTREGA'},{av:'AV38Filial',fld:'vFILIAL'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV121PedidoComSolici',fld:'vPEDIDOCOMSOLICI'},{av:'AV119IncPedidoDireto',fld:'vINCPEDIDODIRETO'},{av:'AV7UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV21Sistema',fld:'vSISTEMA'},{av:'AV164Pgmname',fld:'vPGMNAME'},{av:'AV165Pgmdesc',fld:'vPGMDESC'},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV73PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV74PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV105PedidoCompraAnoImp',fld:'vPEDIDOCOMPRAANOIMP'},{av:'AV106PedidoCompraNumeroImp',fld:'vPEDIDOCOMPRANUMEROIMP'},{av:'AV12EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV107PedidoCompraFilialIdImp',fld:'vPEDIDOCOMPRAFILIALIDIMP'},{av:'AV109SdtPermissao',fld:'vSDTPERMISSAO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A4246PedidoCompraUsuarioAut',fld:'PEDIDOCOMPRAUSUARIOAUT'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A3138TipoPermissaoSnControla',fld:'TIPOPERMISSAOSNCONTROLA'},{av:'A566TipoPermissaoUsuarioUsuarioId',fld:'TIPOPERMISSAOUSUARIOUSUARIOID'},{av:'A558TipoPermissaoSnEmpresa',fld:'TIPOPERMISSAOSNEMPRESA'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A421PessoaContato',fld:'PESSOACONTATO'},{av:'A10879PessoaEmailPessoaEmpId',fld:'PESSOAEMAILPESSOAEMPID'},{av:'A10880PessoaEmailPessoaId',fld:'PESSOAEMAILPESSOAID'},{av:'A11788PessoaEmailTipo',fld:'PESSOAEMAILTIPO'},{av:'A10882PessoaEmailEnderecoEmail',fld:'PESSOAEMAILENDERECOEMAIL'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'AV133SdtParmEmail',fld:'vSDTPARMEMAIL'},{av:'AV134NomeArquivo',fld:'vNOMEARQUIVO'},{av:'AV103PaginaAux',fld:'vPAGINAAUX'},{av:'AV102Pagina',fld:'vPAGINA'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV62CorAberta',fld:'vCORABERTA'},{av:'AV61CorFechada',fld:'vCORFECHADA'},{av:'AV60CorCancel',fld:'vCORCANCEL'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3793PedidoCompraLOGData',fld:'PEDIDOCOMPRALOGDATA'},{av:'A3799PedidoCompraLOGSeq',fld:'PEDIDOCOMPRALOGSEQ'},{av:'A4286PedidoCompraLOGDataPrev',fld:'PEDIDOCOMPRALOGDATAPREV'},{av:'AV63Cor',fld:'vCOR'},{av:'AV122NomeClasse',fld:'vNOMECLASSE'},{av:'A3388PedidoCompraFilialId',fld:'PEDIDOCOMPRAFILIALID'}],[{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV165Pgmdesc',fld:'vPGMDESC'},{av:'AV164Pgmname',fld:'vPGMNAME'},{av:'AV21Sistema',fld:'vSISTEMA'},{av:'A3388PedidoCompraFilialId',fld:'PEDIDOCOMPRAFILIALID'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'}]];
   this.EvtParms["'INSEREPEDIDOEXISTENTE'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26FilialId',fld:'vFILIALID'},{av:'AV23FornecedorId',fld:'vFORNECEDORID'},{av:'AV114PedidoCompraAnoFiltro',fld:'vPEDIDOCOMPRAANOFILTRO'},{av:'AV113PedidoCompraNumeroFiltro',fld:'vPEDIDOCOMPRANUMEROFILTRO'},{av:'AV66PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV25PedidoCompraDataini',fld:'vPEDIDOCOMPRADATAINI'},{av:'AV65PedidoCompraDatafim',fld:'vPEDIDOCOMPRADATAFIM'},{av:'AV93DataEntrIni',fld:'vDATAENTRINI'},{av:'AV94DataEntrFin',fld:'vDATAENTRFIN'},{av:'AV67PedidoCompraSituacao',fld:'vPEDIDOCOMPRASITUACAO'},{av:'AV28CompradorId',fld:'vCOMPRADORID'},{av:'AV91DataAutIni',fld:'vDATAAUTINI'},{av:'AV92DataAutFin',fld:'vDATAAUTFIN'},{av:'AV90Autorizacao',fld:'vAUTORIZACAO'},{av:'AV153produtoid',fld:'vPRODUTOID'},{av:'AV143EntradaNumeroDocumento',fld:'vENTRADANUMERODOCUMENTO'},{av:'AV86SnErro',fld:'vSNERRO'},{av:'AV95DataAutIniAux',fld:'vDATAAUTINIAUX'},{av:'AV8OrderedBy',fld:'vORDEREDBY'},{av:'AV96DataAutFinAux',fld:'vDATAAUTFINAUX'},{av:'AV58PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV79VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'AV42FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV14EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV152ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Visible")',ctrl:'PEDIDOCOMPRAANO',prop:'Visible'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV6bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV13bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpImprimir',fld:'vBMPIMPRIMIR'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIMIR","Tooltiptext")',ctrl:'vBMPIMPRIMIR',prop:'Tooltiptext'},{av:'AV32bmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV87bmpRegProd',fld:'vBMPREGPROD'},{av:'gx.fn.getCtrlProperty("vBMPREGPROD","Tooltiptext")',ctrl:'vBMPREGPROD',prop:'Tooltiptext'},{av:'AV120bmpCan',fld:'vBMPCAN'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Tooltiptext")',ctrl:'vBMPCAN',prop:'Tooltiptext'},{av:'AV126TpPrazoEntrega',fld:'vTPPRAZOENTREGA'},{av:'AV38Filial',fld:'vFILIAL'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV121PedidoComSolici',fld:'vPEDIDOCOMSOLICI'},{av:'AV119IncPedidoDireto',fld:'vINCPEDIDODIRETO'},{av:'AV7UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV21Sistema',fld:'vSISTEMA'},{av:'AV164Pgmname',fld:'vPGMNAME'},{av:'AV165Pgmdesc',fld:'vPGMDESC'},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV73PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV74PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV105PedidoCompraAnoImp',fld:'vPEDIDOCOMPRAANOIMP'},{av:'AV106PedidoCompraNumeroImp',fld:'vPEDIDOCOMPRANUMEROIMP'},{av:'AV12EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV107PedidoCompraFilialIdImp',fld:'vPEDIDOCOMPRAFILIALIDIMP'},{av:'AV109SdtPermissao',fld:'vSDTPERMISSAO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A4246PedidoCompraUsuarioAut',fld:'PEDIDOCOMPRAUSUARIOAUT'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A3138TipoPermissaoSnControla',fld:'TIPOPERMISSAOSNCONTROLA'},{av:'A566TipoPermissaoUsuarioUsuarioId',fld:'TIPOPERMISSAOUSUARIOUSUARIOID'},{av:'A558TipoPermissaoSnEmpresa',fld:'TIPOPERMISSAOSNEMPRESA'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A421PessoaContato',fld:'PESSOACONTATO'},{av:'A10879PessoaEmailPessoaEmpId',fld:'PESSOAEMAILPESSOAEMPID'},{av:'A10880PessoaEmailPessoaId',fld:'PESSOAEMAILPESSOAID'},{av:'A11788PessoaEmailTipo',fld:'PESSOAEMAILTIPO'},{av:'A10882PessoaEmailEnderecoEmail',fld:'PESSOAEMAILENDERECOEMAIL'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'AV133SdtParmEmail',fld:'vSDTPARMEMAIL'},{av:'AV134NomeArquivo',fld:'vNOMEARQUIVO'},{av:'AV103PaginaAux',fld:'vPAGINAAUX'},{av:'AV102Pagina',fld:'vPAGINA'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV62CorAberta',fld:'vCORABERTA'},{av:'AV61CorFechada',fld:'vCORFECHADA'},{av:'AV60CorCancel',fld:'vCORCANCEL'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3793PedidoCompraLOGData',fld:'PEDIDOCOMPRALOGDATA'},{av:'A3799PedidoCompraLOGSeq',fld:'PEDIDOCOMPRALOGSEQ'},{av:'A4286PedidoCompraLOGDataPrev',fld:'PEDIDOCOMPRALOGDATAPREV'},{av:'AV63Cor',fld:'vCOR'},{av:'AV122NomeClasse',fld:'vNOMECLASSE'}],[{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV165Pgmdesc',fld:'vPGMDESC'},{av:'AV164Pgmname',fld:'vPGMNAME'},{av:'AV21Sistema',fld:'vSISTEMA'}]];
   this.EvtParms["'IMPRIMEPEDIDO'"] = [[{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'AV164Pgmname',fld:'vPGMNAME'},{av:'AV73PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV74PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV14EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A4246PedidoCompraUsuarioAut',fld:'PEDIDOCOMPRAUSUARIOAUT'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A3138TipoPermissaoSnControla',fld:'TIPOPERMISSAOSNCONTROLA'},{av:'A566TipoPermissaoUsuarioUsuarioId',fld:'TIPOPERMISSAOUSUARIOUSUARIOID'},{av:'AV7UsrCod',fld:'vUSRCOD',hsh:true},{av:'A558TipoPermissaoSnEmpresa',fld:'TIPOPERMISSAOSNEMPRESA'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'AV12EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV58PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A421PessoaContato',fld:'PESSOACONTATO'},{av:'A10879PessoaEmailPessoaEmpId',fld:'PESSOAEMAILPESSOAEMPID'},{av:'A10880PessoaEmailPessoaId',fld:'PESSOAEMAILPESSOAID'},{av:'A11788PessoaEmailTipo',fld:'PESSOAEMAILTIPO'},{av:'A10882PessoaEmailEnderecoEmail',fld:'PESSOAEMAILENDERECOEMAIL'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'AV133SdtParmEmail',fld:'vSDTPARMEMAIL'},{av:'AV134NomeArquivo',fld:'vNOMEARQUIVO'}],[{av:'AV115ModeloRelatorio',fld:'vMODELORELATORIO'},{av:'AV73PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV74PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV128NomeTela',fld:'vNOMETELA'},{av:'AV16NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV15NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV134NomeArquivo',fld:'vNOMEARQUIVO'},{av:'AV116SdtPedido',fld:'vSDTPEDIDO'},{av:'AV117SdtPedidoCompra',fld:'vSDTPEDIDOCOMPRA'},{av:'AV59QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV140NomeRelatoriAux',fld:'vNOMERELATORIAUX'},{av:'AV130PedidoCompraPessoaId',fld:'vPEDIDOCOMPRAPESSOAID'},{av:'AV141PedidoCompraUsuarioAut',fld:'vPEDIDOCOMPRAUSUARIOAUT'},{av:'AV135PessoaContato',fld:'vPESSOACONTATO'},{av:'AV131PessoaEmailCollection',fld:'vPESSOAEMAILCOLLECTION'},{av:'AV133SdtParmEmail',fld:'vSDTPARMEMAIL'},{av:'AV139NomeArquivoAnt',fld:'vNOMEARQUIVOANT'},{av:'AV136GetName',fld:'vGETNAME'},{av:'AV137NomeArquivoAtu',fld:'vNOMEARQUIVOATU'}]];
   this.EvtParms["'ACOMPANHAMENTO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26FilialId',fld:'vFILIALID'},{av:'AV23FornecedorId',fld:'vFORNECEDORID'},{av:'AV114PedidoCompraAnoFiltro',fld:'vPEDIDOCOMPRAANOFILTRO'},{av:'AV113PedidoCompraNumeroFiltro',fld:'vPEDIDOCOMPRANUMEROFILTRO'},{av:'AV66PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV25PedidoCompraDataini',fld:'vPEDIDOCOMPRADATAINI'},{av:'AV65PedidoCompraDatafim',fld:'vPEDIDOCOMPRADATAFIM'},{av:'AV93DataEntrIni',fld:'vDATAENTRINI'},{av:'AV94DataEntrFin',fld:'vDATAENTRFIN'},{av:'AV67PedidoCompraSituacao',fld:'vPEDIDOCOMPRASITUACAO'},{av:'AV28CompradorId',fld:'vCOMPRADORID'},{av:'AV91DataAutIni',fld:'vDATAAUTINI'},{av:'AV92DataAutFin',fld:'vDATAAUTFIN'},{av:'AV90Autorizacao',fld:'vAUTORIZACAO'},{av:'AV153produtoid',fld:'vPRODUTOID'},{av:'AV143EntradaNumeroDocumento',fld:'vENTRADANUMERODOCUMENTO'},{av:'AV86SnErro',fld:'vSNERRO'},{av:'AV95DataAutIniAux',fld:'vDATAAUTINIAUX'},{av:'AV8OrderedBy',fld:'vORDEREDBY'},{av:'AV96DataAutFinAux',fld:'vDATAAUTFINAUX'},{av:'AV58PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV79VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'AV42FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV14EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV152ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Visible")',ctrl:'PEDIDOCOMPRAANO',prop:'Visible'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV6bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV13bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpImprimir',fld:'vBMPIMPRIMIR'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIMIR","Tooltiptext")',ctrl:'vBMPIMPRIMIR',prop:'Tooltiptext'},{av:'AV32bmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV87bmpRegProd',fld:'vBMPREGPROD'},{av:'gx.fn.getCtrlProperty("vBMPREGPROD","Tooltiptext")',ctrl:'vBMPREGPROD',prop:'Tooltiptext'},{av:'AV120bmpCan',fld:'vBMPCAN'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Tooltiptext")',ctrl:'vBMPCAN',prop:'Tooltiptext'},{av:'AV126TpPrazoEntrega',fld:'vTPPRAZOENTREGA'},{av:'AV38Filial',fld:'vFILIAL'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV121PedidoComSolici',fld:'vPEDIDOCOMSOLICI'},{av:'AV119IncPedidoDireto',fld:'vINCPEDIDODIRETO'},{av:'AV7UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV21Sistema',fld:'vSISTEMA'},{av:'AV164Pgmname',fld:'vPGMNAME'},{av:'AV165Pgmdesc',fld:'vPGMDESC'},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV73PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV74PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV105PedidoCompraAnoImp',fld:'vPEDIDOCOMPRAANOIMP'},{av:'AV106PedidoCompraNumeroImp',fld:'vPEDIDOCOMPRANUMEROIMP'},{av:'AV12EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV107PedidoCompraFilialIdImp',fld:'vPEDIDOCOMPRAFILIALIDIMP'},{av:'AV109SdtPermissao',fld:'vSDTPERMISSAO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A4246PedidoCompraUsuarioAut',fld:'PEDIDOCOMPRAUSUARIOAUT'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A3138TipoPermissaoSnControla',fld:'TIPOPERMISSAOSNCONTROLA'},{av:'A566TipoPermissaoUsuarioUsuarioId',fld:'TIPOPERMISSAOUSUARIOUSUARIOID'},{av:'A558TipoPermissaoSnEmpresa',fld:'TIPOPERMISSAOSNEMPRESA'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A421PessoaContato',fld:'PESSOACONTATO'},{av:'A10879PessoaEmailPessoaEmpId',fld:'PESSOAEMAILPESSOAEMPID'},{av:'A10880PessoaEmailPessoaId',fld:'PESSOAEMAILPESSOAID'},{av:'A11788PessoaEmailTipo',fld:'PESSOAEMAILTIPO'},{av:'A10882PessoaEmailEnderecoEmail',fld:'PESSOAEMAILENDERECOEMAIL'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'AV133SdtParmEmail',fld:'vSDTPARMEMAIL'},{av:'AV134NomeArquivo',fld:'vNOMEARQUIVO'},{av:'AV103PaginaAux',fld:'vPAGINAAUX'},{av:'AV102Pagina',fld:'vPAGINA'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV62CorAberta',fld:'vCORABERTA'},{av:'AV61CorFechada',fld:'vCORFECHADA'},{av:'AV60CorCancel',fld:'vCORCANCEL'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3793PedidoCompraLOGData',fld:'PEDIDOCOMPRALOGDATA'},{av:'A3799PedidoCompraLOGSeq',fld:'PEDIDOCOMPRALOGSEQ'},{av:'A4286PedidoCompraLOGDataPrev',fld:'PEDIDOCOMPRALOGDATAPREV'},{av:'AV63Cor',fld:'vCOR'},{av:'AV122NomeClasse',fld:'vNOMECLASSE'}],[]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26FilialId',fld:'vFILIALID'},{av:'AV23FornecedorId',fld:'vFORNECEDORID'},{av:'AV114PedidoCompraAnoFiltro',fld:'vPEDIDOCOMPRAANOFILTRO'},{av:'AV113PedidoCompraNumeroFiltro',fld:'vPEDIDOCOMPRANUMEROFILTRO'},{av:'AV66PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV25PedidoCompraDataini',fld:'vPEDIDOCOMPRADATAINI'},{av:'AV65PedidoCompraDatafim',fld:'vPEDIDOCOMPRADATAFIM'},{av:'AV93DataEntrIni',fld:'vDATAENTRINI'},{av:'AV94DataEntrFin',fld:'vDATAENTRFIN'},{av:'AV67PedidoCompraSituacao',fld:'vPEDIDOCOMPRASITUACAO'},{av:'AV28CompradorId',fld:'vCOMPRADORID'},{av:'AV91DataAutIni',fld:'vDATAAUTINI'},{av:'AV92DataAutFin',fld:'vDATAAUTFIN'},{av:'AV90Autorizacao',fld:'vAUTORIZACAO'},{av:'AV153produtoid',fld:'vPRODUTOID'},{av:'AV143EntradaNumeroDocumento',fld:'vENTRADANUMERODOCUMENTO'},{av:'AV86SnErro',fld:'vSNERRO'},{av:'AV95DataAutIniAux',fld:'vDATAAUTINIAUX'},{av:'AV8OrderedBy',fld:'vORDEREDBY'},{av:'AV96DataAutFinAux',fld:'vDATAAUTFINAUX'},{av:'AV58PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV79VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'AV42FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV14EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV152ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Visible")',ctrl:'PEDIDOCOMPRAANO',prop:'Visible'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV6bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV13bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpImprimir',fld:'vBMPIMPRIMIR'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIMIR","Tooltiptext")',ctrl:'vBMPIMPRIMIR',prop:'Tooltiptext'},{av:'AV32bmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV87bmpRegProd',fld:'vBMPREGPROD'},{av:'gx.fn.getCtrlProperty("vBMPREGPROD","Tooltiptext")',ctrl:'vBMPREGPROD',prop:'Tooltiptext'},{av:'AV120bmpCan',fld:'vBMPCAN'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Tooltiptext")',ctrl:'vBMPCAN',prop:'Tooltiptext'},{av:'AV126TpPrazoEntrega',fld:'vTPPRAZOENTREGA'},{av:'AV38Filial',fld:'vFILIAL'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV121PedidoComSolici',fld:'vPEDIDOCOMSOLICI'},{av:'AV119IncPedidoDireto',fld:'vINCPEDIDODIRETO'},{av:'AV7UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV21Sistema',fld:'vSISTEMA'},{av:'AV164Pgmname',fld:'vPGMNAME'},{av:'AV165Pgmdesc',fld:'vPGMDESC'},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV73PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV74PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV105PedidoCompraAnoImp',fld:'vPEDIDOCOMPRAANOIMP'},{av:'AV106PedidoCompraNumeroImp',fld:'vPEDIDOCOMPRANUMEROIMP'},{av:'AV12EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV107PedidoCompraFilialIdImp',fld:'vPEDIDOCOMPRAFILIALIDIMP'},{av:'AV109SdtPermissao',fld:'vSDTPERMISSAO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A4246PedidoCompraUsuarioAut',fld:'PEDIDOCOMPRAUSUARIOAUT'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A3138TipoPermissaoSnControla',fld:'TIPOPERMISSAOSNCONTROLA'},{av:'A566TipoPermissaoUsuarioUsuarioId',fld:'TIPOPERMISSAOUSUARIOUSUARIOID'},{av:'A558TipoPermissaoSnEmpresa',fld:'TIPOPERMISSAOSNEMPRESA'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A421PessoaContato',fld:'PESSOACONTATO'},{av:'A10879PessoaEmailPessoaEmpId',fld:'PESSOAEMAILPESSOAEMPID'},{av:'A10880PessoaEmailPessoaId',fld:'PESSOAEMAILPESSOAID'},{av:'A11788PessoaEmailTipo',fld:'PESSOAEMAILTIPO'},{av:'A10882PessoaEmailEnderecoEmail',fld:'PESSOAEMAILENDERECOEMAIL'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'AV133SdtParmEmail',fld:'vSDTPARMEMAIL'},{av:'AV134NomeArquivo',fld:'vNOMEARQUIVO'},{av:'AV103PaginaAux',fld:'vPAGINAAUX'},{av:'AV102Pagina',fld:'vPAGINA'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV62CorAberta',fld:'vCORABERTA'},{av:'AV61CorFechada',fld:'vCORFECHADA'},{av:'AV60CorCancel',fld:'vCORCANCEL'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3793PedidoCompraLOGData',fld:'PEDIDOCOMPRALOGDATA'},{av:'A3799PedidoCompraLOGSeq',fld:'PEDIDOCOMPRALOGSEQ'},{av:'A4286PedidoCompraLOGDataPrev',fld:'PEDIDOCOMPRALOGDATAPREV'},{av:'AV63Cor',fld:'vCOR'},{av:'AV122NomeClasse',fld:'vNOMECLASSE'}],[{av:'AV102Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26FilialId',fld:'vFILIALID'},{av:'AV23FornecedorId',fld:'vFORNECEDORID'},{av:'AV114PedidoCompraAnoFiltro',fld:'vPEDIDOCOMPRAANOFILTRO'},{av:'AV113PedidoCompraNumeroFiltro',fld:'vPEDIDOCOMPRANUMEROFILTRO'},{av:'AV66PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV25PedidoCompraDataini',fld:'vPEDIDOCOMPRADATAINI'},{av:'AV65PedidoCompraDatafim',fld:'vPEDIDOCOMPRADATAFIM'},{av:'AV93DataEntrIni',fld:'vDATAENTRINI'},{av:'AV94DataEntrFin',fld:'vDATAENTRFIN'},{av:'AV67PedidoCompraSituacao',fld:'vPEDIDOCOMPRASITUACAO'},{av:'AV28CompradorId',fld:'vCOMPRADORID'},{av:'AV91DataAutIni',fld:'vDATAAUTINI'},{av:'AV92DataAutFin',fld:'vDATAAUTFIN'},{av:'AV90Autorizacao',fld:'vAUTORIZACAO'},{av:'AV153produtoid',fld:'vPRODUTOID'},{av:'AV143EntradaNumeroDocumento',fld:'vENTRADANUMERODOCUMENTO'},{av:'AV86SnErro',fld:'vSNERRO'},{av:'AV95DataAutIniAux',fld:'vDATAAUTINIAUX'},{av:'AV8OrderedBy',fld:'vORDEREDBY'},{av:'AV96DataAutFinAux',fld:'vDATAAUTFINAUX'},{av:'AV58PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV79VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'AV42FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV14EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV152ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Visible")',ctrl:'PEDIDOCOMPRAANO',prop:'Visible'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV6bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV13bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpImprimir',fld:'vBMPIMPRIMIR'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIMIR","Tooltiptext")',ctrl:'vBMPIMPRIMIR',prop:'Tooltiptext'},{av:'AV32bmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV87bmpRegProd',fld:'vBMPREGPROD'},{av:'gx.fn.getCtrlProperty("vBMPREGPROD","Tooltiptext")',ctrl:'vBMPREGPROD',prop:'Tooltiptext'},{av:'AV120bmpCan',fld:'vBMPCAN'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Tooltiptext")',ctrl:'vBMPCAN',prop:'Tooltiptext'},{av:'AV126TpPrazoEntrega',fld:'vTPPRAZOENTREGA'},{av:'AV38Filial',fld:'vFILIAL'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV121PedidoComSolici',fld:'vPEDIDOCOMSOLICI'},{av:'AV119IncPedidoDireto',fld:'vINCPEDIDODIRETO'},{av:'AV7UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV21Sistema',fld:'vSISTEMA'},{av:'AV164Pgmname',fld:'vPGMNAME'},{av:'AV165Pgmdesc',fld:'vPGMDESC'},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV73PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV74PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV105PedidoCompraAnoImp',fld:'vPEDIDOCOMPRAANOIMP'},{av:'AV106PedidoCompraNumeroImp',fld:'vPEDIDOCOMPRANUMEROIMP'},{av:'AV12EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV107PedidoCompraFilialIdImp',fld:'vPEDIDOCOMPRAFILIALIDIMP'},{av:'AV109SdtPermissao',fld:'vSDTPERMISSAO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A4246PedidoCompraUsuarioAut',fld:'PEDIDOCOMPRAUSUARIOAUT'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A3138TipoPermissaoSnControla',fld:'TIPOPERMISSAOSNCONTROLA'},{av:'A566TipoPermissaoUsuarioUsuarioId',fld:'TIPOPERMISSAOUSUARIOUSUARIOID'},{av:'A558TipoPermissaoSnEmpresa',fld:'TIPOPERMISSAOSNEMPRESA'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A421PessoaContato',fld:'PESSOACONTATO'},{av:'A10879PessoaEmailPessoaEmpId',fld:'PESSOAEMAILPESSOAEMPID'},{av:'A10880PessoaEmailPessoaId',fld:'PESSOAEMAILPESSOAID'},{av:'A11788PessoaEmailTipo',fld:'PESSOAEMAILTIPO'},{av:'A10882PessoaEmailEnderecoEmail',fld:'PESSOAEMAILENDERECOEMAIL'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'AV133SdtParmEmail',fld:'vSDTPARMEMAIL'},{av:'AV134NomeArquivo',fld:'vNOMEARQUIVO'},{av:'AV103PaginaAux',fld:'vPAGINAAUX'},{av:'AV102Pagina',fld:'vPAGINA'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV62CorAberta',fld:'vCORABERTA'},{av:'AV61CorFechada',fld:'vCORFECHADA'},{av:'AV60CorCancel',fld:'vCORCANCEL'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3793PedidoCompraLOGData',fld:'PEDIDOCOMPRALOGDATA'},{av:'A3799PedidoCompraLOGSeq',fld:'PEDIDOCOMPRALOGSEQ'},{av:'A4286PedidoCompraLOGDataPrev',fld:'PEDIDOCOMPRALOGDATAPREV'},{av:'AV63Cor',fld:'vCOR'},{av:'AV122NomeClasse',fld:'vNOMECLASSE'}],[{av:'AV102Pagina',fld:'vPAGINA'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV62CorAberta',fld:'vCORABERTA'},{av:'AV61CorFechada',fld:'vCORFECHADA'},{av:'AV60CorCancel',fld:'vCORCANCEL'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3793PedidoCompraLOGData',fld:'PEDIDOCOMPRALOGDATA'},{av:'A3799PedidoCompraLOGSeq',fld:'PEDIDOCOMPRALOGSEQ'},{av:'A4286PedidoCompraLOGDataPrev',fld:'PEDIDOCOMPRALOGDATAPREV'},{av:'AV63Cor',fld:'vCOR'},{av:'AV122NomeClasse',fld:'vNOMECLASSE'}],[{av:'AV63Cor',fld:'vCOR'},{av:'AV64Vendedor',fld:'vVENDEDOR'},{av:'AV68Fornecedor',fld:'vFORNECEDOR'},{av:'AV125PedidoCompraDataPrevisao',fld:'vPEDIDOCOMPRADATAPREVISAO'},{av:'AV122NomeClasse',fld:'vNOMECLASSE'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Class")',ctrl:'PEDIDOCOMPRAANO',prop:'Class'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRANUMERO","Class")',ctrl:'PEDIDOCOMPRANUMERO',prop:'Class'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRADATA","Class")',ctrl:'PEDIDOCOMPRADATA',prop:'Class'},{av:'gx.fn.getCtrlProperty("vPEDIDOCOMPRADATAPREVISAO","Class")',ctrl:'vPEDIDOCOMPRADATAPREVISAO',prop:'Class'},{av:'gx.fn.getCtrlProperty("VENDEDORID","Class")',ctrl:'VENDEDORID',prop:'Class'},{av:'gx.fn.getCtrlProperty("VENDEDORNOME","Class")',ctrl:'VENDEDORNOME',prop:'Class'},{av:'gx.fn.getCtrlProperty("vVENDEDOR","Class")',ctrl:'vVENDEDOR',prop:'Class'},{av:'gx.fn.getCtrlProperty("vFORNECEDOR","Class")',ctrl:'vFORNECEDOR',prop:'Class'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAVALORLIQUIDO","Class")',ctrl:'PEDIDOCOMPRAVALORLIQUIDO',prop:'Class'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAPAGAMENTO","Class")',ctrl:'PEDIDOCOMPRAPAGAMENTO',prop:'Class'}]];
   this.EvtParms["'ABERTO'"] = [[],[{av:'AV67PedidoCompraSituacao',fld:'vPEDIDOCOMPRASITUACAO'}]];
   this.EvtParms["'FECHADO'"] = [[],[{av:'AV67PedidoCompraSituacao',fld:'vPEDIDOCOMPRASITUACAO'}]];
   this.EvtParms["'CANCELADO'"] = [[],[{av:'AV67PedidoCompraSituacao',fld:'vPEDIDOCOMPRASITUACAO'}]];
   this.EvtParms["'ENTREGA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26FilialId',fld:'vFILIALID'},{av:'AV23FornecedorId',fld:'vFORNECEDORID'},{av:'AV114PedidoCompraAnoFiltro',fld:'vPEDIDOCOMPRAANOFILTRO'},{av:'AV113PedidoCompraNumeroFiltro',fld:'vPEDIDOCOMPRANUMEROFILTRO'},{av:'AV66PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV25PedidoCompraDataini',fld:'vPEDIDOCOMPRADATAINI'},{av:'AV65PedidoCompraDatafim',fld:'vPEDIDOCOMPRADATAFIM'},{av:'AV93DataEntrIni',fld:'vDATAENTRINI'},{av:'AV94DataEntrFin',fld:'vDATAENTRFIN'},{av:'AV67PedidoCompraSituacao',fld:'vPEDIDOCOMPRASITUACAO'},{av:'AV28CompradorId',fld:'vCOMPRADORID'},{av:'AV91DataAutIni',fld:'vDATAAUTINI'},{av:'AV92DataAutFin',fld:'vDATAAUTFIN'},{av:'AV90Autorizacao',fld:'vAUTORIZACAO'},{av:'AV153produtoid',fld:'vPRODUTOID'},{av:'AV143EntradaNumeroDocumento',fld:'vENTRADANUMERODOCUMENTO'},{av:'AV86SnErro',fld:'vSNERRO'},{av:'AV95DataAutIniAux',fld:'vDATAAUTINIAUX'},{av:'AV8OrderedBy',fld:'vORDEREDBY'},{av:'AV96DataAutFinAux',fld:'vDATAAUTFINAUX'},{av:'AV58PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV79VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'AV42FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV14EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV152ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Visible")',ctrl:'PEDIDOCOMPRAANO',prop:'Visible'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV6bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV13bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpImprimir',fld:'vBMPIMPRIMIR'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIMIR","Tooltiptext")',ctrl:'vBMPIMPRIMIR',prop:'Tooltiptext'},{av:'AV32bmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV87bmpRegProd',fld:'vBMPREGPROD'},{av:'gx.fn.getCtrlProperty("vBMPREGPROD","Tooltiptext")',ctrl:'vBMPREGPROD',prop:'Tooltiptext'},{av:'AV120bmpCan',fld:'vBMPCAN'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Tooltiptext")',ctrl:'vBMPCAN',prop:'Tooltiptext'},{av:'AV126TpPrazoEntrega',fld:'vTPPRAZOENTREGA'},{av:'AV38Filial',fld:'vFILIAL'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV121PedidoComSolici',fld:'vPEDIDOCOMSOLICI'},{av:'AV119IncPedidoDireto',fld:'vINCPEDIDODIRETO'},{av:'AV7UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV21Sistema',fld:'vSISTEMA'},{av:'AV164Pgmname',fld:'vPGMNAME'},{av:'AV165Pgmdesc',fld:'vPGMDESC'},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV73PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV74PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV105PedidoCompraAnoImp',fld:'vPEDIDOCOMPRAANOIMP'},{av:'AV106PedidoCompraNumeroImp',fld:'vPEDIDOCOMPRANUMEROIMP'},{av:'AV12EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV107PedidoCompraFilialIdImp',fld:'vPEDIDOCOMPRAFILIALIDIMP'},{av:'AV109SdtPermissao',fld:'vSDTPERMISSAO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A4246PedidoCompraUsuarioAut',fld:'PEDIDOCOMPRAUSUARIOAUT'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A3138TipoPermissaoSnControla',fld:'TIPOPERMISSAOSNCONTROLA'},{av:'A566TipoPermissaoUsuarioUsuarioId',fld:'TIPOPERMISSAOUSUARIOUSUARIOID'},{av:'A558TipoPermissaoSnEmpresa',fld:'TIPOPERMISSAOSNEMPRESA'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A421PessoaContato',fld:'PESSOACONTATO'},{av:'A10879PessoaEmailPessoaEmpId',fld:'PESSOAEMAILPESSOAEMPID'},{av:'A10880PessoaEmailPessoaId',fld:'PESSOAEMAILPESSOAID'},{av:'A11788PessoaEmailTipo',fld:'PESSOAEMAILTIPO'},{av:'A10882PessoaEmailEnderecoEmail',fld:'PESSOAEMAILENDERECOEMAIL'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'AV133SdtParmEmail',fld:'vSDTPARMEMAIL'},{av:'AV134NomeArquivo',fld:'vNOMEARQUIVO'},{av:'AV103PaginaAux',fld:'vPAGINAAUX'},{av:'AV102Pagina',fld:'vPAGINA'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV62CorAberta',fld:'vCORABERTA'},{av:'AV61CorFechada',fld:'vCORFECHADA'},{av:'AV60CorCancel',fld:'vCORCANCEL'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3793PedidoCompraLOGData',fld:'PEDIDOCOMPRALOGDATA'},{av:'A3799PedidoCompraLOGSeq',fld:'PEDIDOCOMPRALOGSEQ'},{av:'A4286PedidoCompraLOGDataPrev',fld:'PEDIDOCOMPRALOGDATAPREV'},{av:'AV63Cor',fld:'vCOR'},{av:'AV122NomeClasse',fld:'vNOMECLASSE'}],[]];
   this.EvtParms["'CONSULTA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26FilialId',fld:'vFILIALID'},{av:'AV23FornecedorId',fld:'vFORNECEDORID'},{av:'AV114PedidoCompraAnoFiltro',fld:'vPEDIDOCOMPRAANOFILTRO'},{av:'AV113PedidoCompraNumeroFiltro',fld:'vPEDIDOCOMPRANUMEROFILTRO'},{av:'AV66PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV25PedidoCompraDataini',fld:'vPEDIDOCOMPRADATAINI'},{av:'AV65PedidoCompraDatafim',fld:'vPEDIDOCOMPRADATAFIM'},{av:'AV93DataEntrIni',fld:'vDATAENTRINI'},{av:'AV94DataEntrFin',fld:'vDATAENTRFIN'},{av:'AV67PedidoCompraSituacao',fld:'vPEDIDOCOMPRASITUACAO'},{av:'AV28CompradorId',fld:'vCOMPRADORID'},{av:'AV91DataAutIni',fld:'vDATAAUTINI'},{av:'AV92DataAutFin',fld:'vDATAAUTFIN'},{av:'AV90Autorizacao',fld:'vAUTORIZACAO'},{av:'AV153produtoid',fld:'vPRODUTOID'},{av:'AV143EntradaNumeroDocumento',fld:'vENTRADANUMERODOCUMENTO'},{av:'AV86SnErro',fld:'vSNERRO'},{av:'AV95DataAutIniAux',fld:'vDATAAUTINIAUX'},{av:'AV8OrderedBy',fld:'vORDEREDBY'},{av:'AV96DataAutFinAux',fld:'vDATAAUTFINAUX'},{av:'AV58PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV79VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'AV42FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV14EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV152ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Visible")',ctrl:'PEDIDOCOMPRAANO',prop:'Visible'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV6bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV13bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpImprimir',fld:'vBMPIMPRIMIR'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIMIR","Tooltiptext")',ctrl:'vBMPIMPRIMIR',prop:'Tooltiptext'},{av:'AV32bmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV87bmpRegProd',fld:'vBMPREGPROD'},{av:'gx.fn.getCtrlProperty("vBMPREGPROD","Tooltiptext")',ctrl:'vBMPREGPROD',prop:'Tooltiptext'},{av:'AV120bmpCan',fld:'vBMPCAN'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Tooltiptext")',ctrl:'vBMPCAN',prop:'Tooltiptext'},{av:'AV126TpPrazoEntrega',fld:'vTPPRAZOENTREGA'},{av:'AV38Filial',fld:'vFILIAL'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV121PedidoComSolici',fld:'vPEDIDOCOMSOLICI'},{av:'AV119IncPedidoDireto',fld:'vINCPEDIDODIRETO'},{av:'AV7UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV21Sistema',fld:'vSISTEMA'},{av:'AV164Pgmname',fld:'vPGMNAME'},{av:'AV165Pgmdesc',fld:'vPGMDESC'},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV73PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV74PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV105PedidoCompraAnoImp',fld:'vPEDIDOCOMPRAANOIMP'},{av:'AV106PedidoCompraNumeroImp',fld:'vPEDIDOCOMPRANUMEROIMP'},{av:'AV12EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV107PedidoCompraFilialIdImp',fld:'vPEDIDOCOMPRAFILIALIDIMP'},{av:'AV109SdtPermissao',fld:'vSDTPERMISSAO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A4246PedidoCompraUsuarioAut',fld:'PEDIDOCOMPRAUSUARIOAUT'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A3138TipoPermissaoSnControla',fld:'TIPOPERMISSAOSNCONTROLA'},{av:'A566TipoPermissaoUsuarioUsuarioId',fld:'TIPOPERMISSAOUSUARIOUSUARIOID'},{av:'A558TipoPermissaoSnEmpresa',fld:'TIPOPERMISSAOSNEMPRESA'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A421PessoaContato',fld:'PESSOACONTATO'},{av:'A10879PessoaEmailPessoaEmpId',fld:'PESSOAEMAILPESSOAEMPID'},{av:'A10880PessoaEmailPessoaId',fld:'PESSOAEMAILPESSOAID'},{av:'A11788PessoaEmailTipo',fld:'PESSOAEMAILTIPO'},{av:'A10882PessoaEmailEnderecoEmail',fld:'PESSOAEMAILENDERECOEMAIL'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'AV133SdtParmEmail',fld:'vSDTPARMEMAIL'},{av:'AV134NomeArquivo',fld:'vNOMEARQUIVO'},{av:'AV103PaginaAux',fld:'vPAGINAAUX'},{av:'AV102Pagina',fld:'vPAGINA'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV62CorAberta',fld:'vCORABERTA'},{av:'AV61CorFechada',fld:'vCORFECHADA'},{av:'AV60CorCancel',fld:'vCORCANCEL'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3793PedidoCompraLOGData',fld:'PEDIDOCOMPRALOGDATA'},{av:'A3799PedidoCompraLOGSeq',fld:'PEDIDOCOMPRALOGSEQ'},{av:'A4286PedidoCompraLOGDataPrev',fld:'PEDIDOCOMPRALOGDATAPREV'},{av:'AV63Cor',fld:'vCOR'},{av:'AV122NomeClasse',fld:'vNOMECLASSE'}],[]];
   this.EvtParms["'PARAMETROS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26FilialId',fld:'vFILIALID'},{av:'AV23FornecedorId',fld:'vFORNECEDORID'},{av:'AV114PedidoCompraAnoFiltro',fld:'vPEDIDOCOMPRAANOFILTRO'},{av:'AV113PedidoCompraNumeroFiltro',fld:'vPEDIDOCOMPRANUMEROFILTRO'},{av:'AV66PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV25PedidoCompraDataini',fld:'vPEDIDOCOMPRADATAINI'},{av:'AV65PedidoCompraDatafim',fld:'vPEDIDOCOMPRADATAFIM'},{av:'AV93DataEntrIni',fld:'vDATAENTRINI'},{av:'AV94DataEntrFin',fld:'vDATAENTRFIN'},{av:'AV67PedidoCompraSituacao',fld:'vPEDIDOCOMPRASITUACAO'},{av:'AV28CompradorId',fld:'vCOMPRADORID'},{av:'AV91DataAutIni',fld:'vDATAAUTINI'},{av:'AV92DataAutFin',fld:'vDATAAUTFIN'},{av:'AV90Autorizacao',fld:'vAUTORIZACAO'},{av:'AV153produtoid',fld:'vPRODUTOID'},{av:'AV143EntradaNumeroDocumento',fld:'vENTRADANUMERODOCUMENTO'},{av:'AV86SnErro',fld:'vSNERRO'},{av:'AV95DataAutIniAux',fld:'vDATAAUTINIAUX'},{av:'AV8OrderedBy',fld:'vORDEREDBY'},{av:'AV96DataAutFinAux',fld:'vDATAAUTFINAUX'},{av:'AV58PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV79VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'AV42FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV14EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV152ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Visible")',ctrl:'PEDIDOCOMPRAANO',prop:'Visible'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV6bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV13bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpImprimir',fld:'vBMPIMPRIMIR'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIMIR","Tooltiptext")',ctrl:'vBMPIMPRIMIR',prop:'Tooltiptext'},{av:'AV32bmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV87bmpRegProd',fld:'vBMPREGPROD'},{av:'gx.fn.getCtrlProperty("vBMPREGPROD","Tooltiptext")',ctrl:'vBMPREGPROD',prop:'Tooltiptext'},{av:'AV120bmpCan',fld:'vBMPCAN'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Tooltiptext")',ctrl:'vBMPCAN',prop:'Tooltiptext'},{av:'AV126TpPrazoEntrega',fld:'vTPPRAZOENTREGA'},{av:'AV38Filial',fld:'vFILIAL'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV121PedidoComSolici',fld:'vPEDIDOCOMSOLICI'},{av:'AV119IncPedidoDireto',fld:'vINCPEDIDODIRETO'},{av:'AV7UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV21Sistema',fld:'vSISTEMA'},{av:'AV164Pgmname',fld:'vPGMNAME'},{av:'AV165Pgmdesc',fld:'vPGMDESC'},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV73PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV74PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV105PedidoCompraAnoImp',fld:'vPEDIDOCOMPRAANOIMP'},{av:'AV106PedidoCompraNumeroImp',fld:'vPEDIDOCOMPRANUMEROIMP'},{av:'AV12EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV107PedidoCompraFilialIdImp',fld:'vPEDIDOCOMPRAFILIALIDIMP'},{av:'AV109SdtPermissao',fld:'vSDTPERMISSAO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A4246PedidoCompraUsuarioAut',fld:'PEDIDOCOMPRAUSUARIOAUT'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A3138TipoPermissaoSnControla',fld:'TIPOPERMISSAOSNCONTROLA'},{av:'A566TipoPermissaoUsuarioUsuarioId',fld:'TIPOPERMISSAOUSUARIOUSUARIOID'},{av:'A558TipoPermissaoSnEmpresa',fld:'TIPOPERMISSAOSNEMPRESA'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A421PessoaContato',fld:'PESSOACONTATO'},{av:'A10879PessoaEmailPessoaEmpId',fld:'PESSOAEMAILPESSOAEMPID'},{av:'A10880PessoaEmailPessoaId',fld:'PESSOAEMAILPESSOAID'},{av:'A11788PessoaEmailTipo',fld:'PESSOAEMAILTIPO'},{av:'A10882PessoaEmailEnderecoEmail',fld:'PESSOAEMAILENDERECOEMAIL'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'AV133SdtParmEmail',fld:'vSDTPARMEMAIL'},{av:'AV134NomeArquivo',fld:'vNOMEARQUIVO'},{av:'AV103PaginaAux',fld:'vPAGINAAUX'},{av:'AV102Pagina',fld:'vPAGINA'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV62CorAberta',fld:'vCORABERTA'},{av:'AV61CorFechada',fld:'vCORFECHADA'},{av:'AV60CorCancel',fld:'vCORCANCEL'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3793PedidoCompraLOGData',fld:'PEDIDOCOMPRALOGDATA'},{av:'A3799PedidoCompraLOGSeq',fld:'PEDIDOCOMPRALOGSEQ'},{av:'A4286PedidoCompraLOGDataPrev',fld:'PEDIDOCOMPRALOGDATAPREV'},{av:'AV63Cor',fld:'vCOR'},{av:'AV122NomeClasse',fld:'vNOMECLASSE'}],[]];
   this.EvtParms["'CANCELARPEDIDO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26FilialId',fld:'vFILIALID'},{av:'AV23FornecedorId',fld:'vFORNECEDORID'},{av:'AV114PedidoCompraAnoFiltro',fld:'vPEDIDOCOMPRAANOFILTRO'},{av:'AV113PedidoCompraNumeroFiltro',fld:'vPEDIDOCOMPRANUMEROFILTRO'},{av:'AV66PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV25PedidoCompraDataini',fld:'vPEDIDOCOMPRADATAINI'},{av:'AV65PedidoCompraDatafim',fld:'vPEDIDOCOMPRADATAFIM'},{av:'AV93DataEntrIni',fld:'vDATAENTRINI'},{av:'AV94DataEntrFin',fld:'vDATAENTRFIN'},{av:'AV67PedidoCompraSituacao',fld:'vPEDIDOCOMPRASITUACAO'},{av:'AV28CompradorId',fld:'vCOMPRADORID'},{av:'AV91DataAutIni',fld:'vDATAAUTINI'},{av:'AV92DataAutFin',fld:'vDATAAUTFIN'},{av:'AV90Autorizacao',fld:'vAUTORIZACAO'},{av:'AV153produtoid',fld:'vPRODUTOID'},{av:'AV143EntradaNumeroDocumento',fld:'vENTRADANUMERODOCUMENTO'},{av:'AV86SnErro',fld:'vSNERRO'},{av:'AV95DataAutIniAux',fld:'vDATAAUTINIAUX'},{av:'AV8OrderedBy',fld:'vORDEREDBY'},{av:'AV96DataAutFinAux',fld:'vDATAAUTFINAUX'},{av:'AV58PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV79VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'AV42FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV14EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV152ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Visible")',ctrl:'PEDIDOCOMPRAANO',prop:'Visible'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV6bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV13bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpImprimir',fld:'vBMPIMPRIMIR'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIMIR","Tooltiptext")',ctrl:'vBMPIMPRIMIR',prop:'Tooltiptext'},{av:'AV32bmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV87bmpRegProd',fld:'vBMPREGPROD'},{av:'gx.fn.getCtrlProperty("vBMPREGPROD","Tooltiptext")',ctrl:'vBMPREGPROD',prop:'Tooltiptext'},{av:'AV120bmpCan',fld:'vBMPCAN'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Tooltiptext")',ctrl:'vBMPCAN',prop:'Tooltiptext'},{av:'AV126TpPrazoEntrega',fld:'vTPPRAZOENTREGA'},{av:'AV38Filial',fld:'vFILIAL'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV121PedidoComSolici',fld:'vPEDIDOCOMSOLICI'},{av:'AV119IncPedidoDireto',fld:'vINCPEDIDODIRETO'},{av:'AV7UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV21Sistema',fld:'vSISTEMA'},{av:'AV164Pgmname',fld:'vPGMNAME'},{av:'AV165Pgmdesc',fld:'vPGMDESC'},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV73PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV74PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV105PedidoCompraAnoImp',fld:'vPEDIDOCOMPRAANOIMP'},{av:'AV106PedidoCompraNumeroImp',fld:'vPEDIDOCOMPRANUMEROIMP'},{av:'AV12EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV107PedidoCompraFilialIdImp',fld:'vPEDIDOCOMPRAFILIALIDIMP'},{av:'AV109SdtPermissao',fld:'vSDTPERMISSAO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A4246PedidoCompraUsuarioAut',fld:'PEDIDOCOMPRAUSUARIOAUT'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A3138TipoPermissaoSnControla',fld:'TIPOPERMISSAOSNCONTROLA'},{av:'A566TipoPermissaoUsuarioUsuarioId',fld:'TIPOPERMISSAOUSUARIOUSUARIOID'},{av:'A558TipoPermissaoSnEmpresa',fld:'TIPOPERMISSAOSNEMPRESA'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A421PessoaContato',fld:'PESSOACONTATO'},{av:'A10879PessoaEmailPessoaEmpId',fld:'PESSOAEMAILPESSOAEMPID'},{av:'A10880PessoaEmailPessoaId',fld:'PESSOAEMAILPESSOAID'},{av:'A11788PessoaEmailTipo',fld:'PESSOAEMAILTIPO'},{av:'A10882PessoaEmailEnderecoEmail',fld:'PESSOAEMAILENDERECOEMAIL'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'AV133SdtParmEmail',fld:'vSDTPARMEMAIL'},{av:'AV134NomeArquivo',fld:'vNOMEARQUIVO'},{av:'AV103PaginaAux',fld:'vPAGINAAUX'},{av:'AV102Pagina',fld:'vPAGINA'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV62CorAberta',fld:'vCORABERTA'},{av:'AV61CorFechada',fld:'vCORFECHADA'},{av:'AV60CorCancel',fld:'vCORCANCEL'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3793PedidoCompraLOGData',fld:'PEDIDOCOMPRALOGDATA'},{av:'A3799PedidoCompraLOGSeq',fld:'PEDIDOCOMPRALOGSEQ'},{av:'A4286PedidoCompraLOGDataPrev',fld:'PEDIDOCOMPRALOGDATAPREV'},{av:'AV63Cor',fld:'vCOR'},{av:'AV122NomeClasse',fld:'vNOMECLASSE'}],[{av:'AV11MsgErro',fld:'vMSGERRO'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26FilialId',fld:'vFILIALID'},{av:'AV23FornecedorId',fld:'vFORNECEDORID'},{av:'AV114PedidoCompraAnoFiltro',fld:'vPEDIDOCOMPRAANOFILTRO'},{av:'AV113PedidoCompraNumeroFiltro',fld:'vPEDIDOCOMPRANUMEROFILTRO'},{av:'AV66PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV25PedidoCompraDataini',fld:'vPEDIDOCOMPRADATAINI'},{av:'AV65PedidoCompraDatafim',fld:'vPEDIDOCOMPRADATAFIM'},{av:'AV93DataEntrIni',fld:'vDATAENTRINI'},{av:'AV94DataEntrFin',fld:'vDATAENTRFIN'},{av:'AV67PedidoCompraSituacao',fld:'vPEDIDOCOMPRASITUACAO'},{av:'AV28CompradorId',fld:'vCOMPRADORID'},{av:'AV91DataAutIni',fld:'vDATAAUTINI'},{av:'AV92DataAutFin',fld:'vDATAAUTFIN'},{av:'AV90Autorizacao',fld:'vAUTORIZACAO'},{av:'AV153produtoid',fld:'vPRODUTOID'},{av:'AV143EntradaNumeroDocumento',fld:'vENTRADANUMERODOCUMENTO'},{av:'AV86SnErro',fld:'vSNERRO'},{av:'AV95DataAutIniAux',fld:'vDATAAUTINIAUX'},{av:'AV8OrderedBy',fld:'vORDEREDBY'},{av:'AV96DataAutFinAux',fld:'vDATAAUTFINAUX'},{av:'AV58PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV79VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'AV42FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV14EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV152ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Visible")',ctrl:'PEDIDOCOMPRAANO',prop:'Visible'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV6bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV13bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpImprimir',fld:'vBMPIMPRIMIR'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIMIR","Tooltiptext")',ctrl:'vBMPIMPRIMIR',prop:'Tooltiptext'},{av:'AV32bmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV87bmpRegProd',fld:'vBMPREGPROD'},{av:'gx.fn.getCtrlProperty("vBMPREGPROD","Tooltiptext")',ctrl:'vBMPREGPROD',prop:'Tooltiptext'},{av:'AV120bmpCan',fld:'vBMPCAN'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Tooltiptext")',ctrl:'vBMPCAN',prop:'Tooltiptext'},{av:'AV126TpPrazoEntrega',fld:'vTPPRAZOENTREGA'},{av:'AV38Filial',fld:'vFILIAL'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV121PedidoComSolici',fld:'vPEDIDOCOMSOLICI'},{av:'AV119IncPedidoDireto',fld:'vINCPEDIDODIRETO'},{av:'AV7UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV21Sistema',fld:'vSISTEMA'},{av:'AV164Pgmname',fld:'vPGMNAME'},{av:'AV165Pgmdesc',fld:'vPGMDESC'},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV73PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV74PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV105PedidoCompraAnoImp',fld:'vPEDIDOCOMPRAANOIMP'},{av:'AV106PedidoCompraNumeroImp',fld:'vPEDIDOCOMPRANUMEROIMP'},{av:'AV12EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV107PedidoCompraFilialIdImp',fld:'vPEDIDOCOMPRAFILIALIDIMP'},{av:'AV109SdtPermissao',fld:'vSDTPERMISSAO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A4246PedidoCompraUsuarioAut',fld:'PEDIDOCOMPRAUSUARIOAUT'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A3138TipoPermissaoSnControla',fld:'TIPOPERMISSAOSNCONTROLA'},{av:'A566TipoPermissaoUsuarioUsuarioId',fld:'TIPOPERMISSAOUSUARIOUSUARIOID'},{av:'A558TipoPermissaoSnEmpresa',fld:'TIPOPERMISSAOSNEMPRESA'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A421PessoaContato',fld:'PESSOACONTATO'},{av:'A10879PessoaEmailPessoaEmpId',fld:'PESSOAEMAILPESSOAEMPID'},{av:'A10880PessoaEmailPessoaId',fld:'PESSOAEMAILPESSOAID'},{av:'A11788PessoaEmailTipo',fld:'PESSOAEMAILTIPO'},{av:'A10882PessoaEmailEnderecoEmail',fld:'PESSOAEMAILENDERECOEMAIL'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'AV133SdtParmEmail',fld:'vSDTPARMEMAIL'},{av:'AV134NomeArquivo',fld:'vNOMEARQUIVO'},{av:'AV103PaginaAux',fld:'vPAGINAAUX'},{av:'AV102Pagina',fld:'vPAGINA'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV62CorAberta',fld:'vCORABERTA'},{av:'AV61CorFechada',fld:'vCORFECHADA'},{av:'AV60CorCancel',fld:'vCORCANCEL'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3793PedidoCompraLOGData',fld:'PEDIDOCOMPRALOGDATA'},{av:'A3799PedidoCompraLOGSeq',fld:'PEDIDOCOMPRALOGSEQ'},{av:'A4286PedidoCompraLOGDataPrev',fld:'PEDIDOCOMPRALOGDATAPREV'},{av:'AV63Cor',fld:'vCOR'},{av:'AV122NomeClasse',fld:'vNOMECLASSE'}],[]];
   this.EvtParms["VPRODUTOID.ISVALID"] = [[{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV152ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV153produtoid',fld:'vPRODUTOID'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'}],[{av:'AV151ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'}]];
   this.setPrompt("PROMPT_FILIALID", [19]);
   this.setPrompt("PROMPTPROD", [102,199,198,193,201,205,203]);
   this.setPrompt("PROMPT_FORNECEDORID", [25]);
   this.setPrompt("PROMPT_COMPRADORID", [79]);
   this.setVCMap("A3382PedidoCompraValorDesconto", "PEDIDOCOMPRAVALORDESCONTO", 0, "decimal");
   this.setVCMap("A3383PedidoCompraValorFrete", "PEDIDOCOMPRAVALORFRETE", 0, "decimal");
   this.setVCMap("A3385PedidoCompraValorSeguro", "PEDIDOCOMPRAVALORSEGURO", 0, "decimal");
   this.setVCMap("A3384PedidoCompraValorEncargo", "PEDIDOCOMPRAVALORENCARGO", 0, "decimal");
   this.setVCMap("A3785PedidoCompraValorIPI", "PEDIDOCOMPRAVALORIPI", 0, "decimal");
   this.setVCMap("A3786PedidoCompraValorICMS", "PEDIDOCOMPRAVALORICMS", 0, "decimal");
   this.setVCMap("A3787PedidoCompraValorICMSST", "PEDIDOCOMPRAVALORICMSST", 0, "decimal");
   this.setVCMap("A3426PedidoCompraEmpresaId", "PEDIDOCOMPRAEMPRESAID", 0, "char");
   this.setVCMap("AV152ProdutoEmpresaId", "vPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV126TpPrazoEntrega", "vTPPRAZOENTREGA", 0, "char");
   this.setVCMap("A1228FilialEmpresaId", "FILIALEMPRESAID", 0, "char");
   this.setVCMap("A1156FilialId", "FILIALID", 0, "int");
   this.setVCMap("A1136FilialNome", "FILIALNOME", 0, "svchar");
   this.setVCMap("AV121PedidoComSolici", "vPEDIDOCOMSOLICI", 0, "char");
   this.setVCMap("AV119IncPedidoDireto", "vINCPEDIDODIRETO", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV21Sistema", "vSISTEMA", 0, "char");
   this.setVCMap("AV164Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV165Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV11MsgErro", "vMSGERRO", 0, "svchar");
   this.setVCMap("AV73PedidoCompraAno", "vPEDIDOCOMPRAANO", 0, "int");
   this.setVCMap("AV74PedidoCompraNumero", "vPEDIDOCOMPRANUMERO", 0, "int");
   this.setVCMap("AV12EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("AV109SdtPermissao", "vSDTPERMISSAO", 0, "CollSdtPermissao.SdtPermissaoItem");
   this.setVCMap("A3362PedidoCompraPessoaId", "PEDIDOCOMPRAPESSOAID", 0, "int");
   this.setVCMap("A568TipoPermissaoId", "TIPOPERMISSAOID", 0, "int");
   this.setVCMap("A3138TipoPermissaoSnControla", "TIPOPERMISSAOSNCONTROLA", 0, "char");
   this.setVCMap("A566TipoPermissaoUsuarioUsuarioId", "TIPOPERMISSAOUSUARIOUSUARIOID", 0, "char");
   this.setVCMap("A558TipoPermissaoSnEmpresa", "TIPOPERMISSAOSNEMPRESA", 0, "char");
   this.setVCMap("A138EmpresaId", "EMPRESAID", 0, "char");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("A421PessoaContato", "PESSOACONTATO", 0, "svchar");
   this.setVCMap("A10879PessoaEmailPessoaEmpId", "PESSOAEMAILPESSOAEMPID", 0, "char");
   this.setVCMap("A10880PessoaEmailPessoaId", "PESSOAEMAILPESSOAID", 0, "int");
   this.setVCMap("A11788PessoaEmailTipo", "PESSOAEMAILTIPO", 0, "char");
   this.setVCMap("A10882PessoaEmailEnderecoEmail", "PESSOAEMAILENDERECOEMAIL", 0, "svchar");
   this.setVCMap("A434PessoaEmail", "PESSOAEMAIL", 0, "svchar");
   this.setVCMap("AV133SdtParmEmail", "vSDTPARMEMAIL", 0, "SdtParmEmail");
   this.setVCMap("AV62CorAberta", "vCORABERTA", 0, "char");
   this.setVCMap("AV61CorFechada", "vCORFECHADA", 0, "char");
   this.setVCMap("AV60CorCancel", "vCORCANCEL", 0, "char");
   this.setVCMap("A3778PedidoCompraPessoaFantasia", "PEDIDOCOMPRAPESSOAFANTASIA", 0, "svchar");
   this.setVCMap("A3793PedidoCompraLOGData", "PEDIDOCOMPRALOGDATA", 0, "dtime");
   this.setVCMap("A3799PedidoCompraLOGSeq", "PEDIDOCOMPRALOGSEQ", 0, "int");
   this.setVCMap("A4286PedidoCompraLOGDataPrev", "PEDIDOCOMPRALOGDATAPREV", 0, "date");
   this.setVCMap("AV63Cor", "vCOR", 0, "char");
   this.setVCMap("AV122NomeClasse", "vNOMECLASSE", 0, "svchar");
   this.setVCMap("AV89Chamada", "vCHAMADA", 0, "char");
   this.setVCMap("AV152ProdutoEmpresaId", "vPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV126TpPrazoEntrega", "vTPPRAZOENTREGA", 0, "char");
   this.setVCMap("A1228FilialEmpresaId", "FILIALEMPRESAID", 0, "char");
   this.setVCMap("A1156FilialId", "FILIALID", 0, "int");
   this.setVCMap("A1136FilialNome", "FILIALNOME", 0, "svchar");
   this.setVCMap("AV121PedidoComSolici", "vPEDIDOCOMSOLICI", 0, "char");
   this.setVCMap("AV119IncPedidoDireto", "vINCPEDIDODIRETO", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV21Sistema", "vSISTEMA", 0, "char");
   this.setVCMap("AV164Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV165Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV11MsgErro", "vMSGERRO", 0, "svchar");
   this.setVCMap("AV73PedidoCompraAno", "vPEDIDOCOMPRAANO", 0, "int");
   this.setVCMap("AV74PedidoCompraNumero", "vPEDIDOCOMPRANUMERO", 0, "int");
   this.setVCMap("AV12EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("AV109SdtPermissao", "vSDTPERMISSAO", 0, "CollSdtPermissao.SdtPermissaoItem");
   this.setVCMap("A3362PedidoCompraPessoaId", "PEDIDOCOMPRAPESSOAID", 0, "int");
   this.setVCMap("A568TipoPermissaoId", "TIPOPERMISSAOID", 0, "int");
   this.setVCMap("A3138TipoPermissaoSnControla", "TIPOPERMISSAOSNCONTROLA", 0, "char");
   this.setVCMap("A566TipoPermissaoUsuarioUsuarioId", "TIPOPERMISSAOUSUARIOUSUARIOID", 0, "char");
   this.setVCMap("A558TipoPermissaoSnEmpresa", "TIPOPERMISSAOSNEMPRESA", 0, "char");
   this.setVCMap("A138EmpresaId", "EMPRESAID", 0, "char");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("A421PessoaContato", "PESSOACONTATO", 0, "svchar");
   this.setVCMap("A10879PessoaEmailPessoaEmpId", "PESSOAEMAILPESSOAEMPID", 0, "char");
   this.setVCMap("A10880PessoaEmailPessoaId", "PESSOAEMAILPESSOAID", 0, "int");
   this.setVCMap("A11788PessoaEmailTipo", "PESSOAEMAILTIPO", 0, "char");
   this.setVCMap("A10882PessoaEmailEnderecoEmail", "PESSOAEMAILENDERECOEMAIL", 0, "svchar");
   this.setVCMap("A434PessoaEmail", "PESSOAEMAIL", 0, "svchar");
   this.setVCMap("AV133SdtParmEmail", "vSDTPARMEMAIL", 0, "SdtParmEmail");
   this.setVCMap("AV62CorAberta", "vCORABERTA", 0, "char");
   this.setVCMap("AV61CorFechada", "vCORFECHADA", 0, "char");
   this.setVCMap("AV60CorCancel", "vCORCANCEL", 0, "char");
   this.setVCMap("A3778PedidoCompraPessoaFantasia", "PEDIDOCOMPRAPESSOAFANTASIA", 0, "svchar");
   this.setVCMap("A3793PedidoCompraLOGData", "PEDIDOCOMPRALOGDATA", 0, "dtime");
   this.setVCMap("A3799PedidoCompraLOGSeq", "PEDIDOCOMPRALOGSEQ", 0, "int");
   this.setVCMap("A4286PedidoCompraLOGDataPrev", "PEDIDOCOMPRALOGDATAPREV", 0, "date");
   this.setVCMap("AV63Cor", "vCOR", 0, "char");
   this.setVCMap("AV122NomeClasse", "vNOMECLASSE", 0, "svchar");
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridContainer.addRefreshingVar(this.GXValidFnc[25]);
   GridContainer.addRefreshingVar(this.GXValidFnc[34]);
   GridContainer.addRefreshingVar(this.GXValidFnc[38]);
   GridContainer.addRefreshingVar(this.GXValidFnc[43]);
   GridContainer.addRefreshingVar(this.GXValidFnc[51]);
   GridContainer.addRefreshingVar(this.GXValidFnc[55]);
   GridContainer.addRefreshingVar(this.GXValidFnc[63]);
   GridContainer.addRefreshingVar(this.GXValidFnc[67]);
   GridContainer.addRefreshingVar(this.GXValidFnc[74]);
   GridContainer.addRefreshingVar(this.GXValidFnc[79]);
   GridContainer.addRefreshingVar(this.GXValidFnc[88]);
   GridContainer.addRefreshingVar(this.GXValidFnc[92]);
   GridContainer.addRefreshingVar(this.GXValidFnc[97]);
   GridContainer.addRefreshingVar(this.GXValidFnc[102]);
   GridContainer.addRefreshingVar(this.GXValidFnc[109]);
   GridContainer.addRefreshingVar(this.GXValidFnc[196]);
   GridContainer.addRefreshingVar(this.GXValidFnc[207]);
   GridContainer.addRefreshingVar(this.GXValidFnc[208]);
   GridContainer.addRefreshingVar(this.GXValidFnc[211]);
   GridContainer.addRefreshingVar(this.GXValidFnc[225]);
   GridContainer.addRefreshingVar(this.GXValidFnc[227]);
   GridContainer.addRefreshingVar(this.GXValidFnc[229]);
   GridContainer.addRefreshingVar(this.GXValidFnc[230]);
   GridContainer.addRefreshingVar({rfrVar:"AV152ProdutoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A3336PedidoCompraAno", rfrProp:"Visible", gxAttId:"3336"});
   GridContainer.addRefreshingVar({rfrVar:"AV5bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV5bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV6bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV6bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV13bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV13bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV31bmpImprimir", rfrProp:"Value", gxAttId:"Bmpimprimir"});
   GridContainer.addRefreshingVar({rfrVar:"AV31bmpImprimir", rfrProp:"Tooltiptext", gxAttId:"Bmpimprimir"});
   GridContainer.addRefreshingVar({rfrVar:"AV32bmpOcorrencia", rfrProp:"Value", gxAttId:"Bmpocorrencia"});
   GridContainer.addRefreshingVar({rfrVar:"AV32bmpOcorrencia", rfrProp:"Tooltiptext", gxAttId:"Bmpocorrencia"});
   GridContainer.addRefreshingVar({rfrVar:"AV87bmpRegProd", rfrProp:"Value", gxAttId:"Bmpregprod"});
   GridContainer.addRefreshingVar({rfrVar:"AV87bmpRegProd", rfrProp:"Tooltiptext", gxAttId:"Bmpregprod"});
   GridContainer.addRefreshingVar({rfrVar:"AV120bmpCan", rfrProp:"Value", gxAttId:"Bmpcan"});
   GridContainer.addRefreshingVar({rfrVar:"AV120bmpCan", rfrProp:"Tooltiptext", gxAttId:"Bmpcan"});
   GridContainer.addRefreshingVar({rfrVar:"AV126TpPrazoEntrega"});
   GridContainer.addRefreshingVar(this.GXValidFnc[224]);
   GridContainer.addRefreshingVar({rfrVar:"A1228FilialEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A1156FilialId"});
   GridContainer.addRefreshingVar({rfrVar:"A1136FilialNome"});
   GridContainer.addRefreshingVar({rfrVar:"AV121PedidoComSolici"});
   GridContainer.addRefreshingVar({rfrVar:"AV119IncPedidoDireto"});
   GridContainer.addRefreshingVar({rfrVar:"AV7UsrCod"});
   GridContainer.addRefreshingVar({rfrVar:"AV21Sistema"});
   GridContainer.addRefreshingVar({rfrVar:"AV164Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"AV165Pgmdesc"});
   GridContainer.addRefreshingVar({rfrVar:"AV11MsgErro"});
   GridContainer.addRefreshingVar({rfrVar:"AV73PedidoCompraAno"});
   GridContainer.addRefreshingVar({rfrVar:"AV74PedidoCompraNumero"});
   GridContainer.addRefreshingVar(this.GXValidFnc[195]);
   GridContainer.addRefreshingVar(this.GXValidFnc[231]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaLogadaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[232]);
   GridContainer.addRefreshingVar({rfrVar:"AV109SdtPermissao"});
   GridContainer.addRefreshingVar({rfrVar:"A3426PedidoCompraEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A3336PedidoCompraAno", rfrProp:"Value", gxAttId:"3336"});
   GridContainer.addRefreshingVar({rfrVar:"A3337PedidoCompraNumero", rfrProp:"Value", gxAttId:"3337"});
   GridContainer.addRefreshingVar({rfrVar:"A3362PedidoCompraPessoaId"});
   GridContainer.addRefreshingVar({rfrVar:"A4246PedidoCompraUsuarioAut", rfrProp:"Value", gxAttId:"4246"});
   GridContainer.addRefreshingVar({rfrVar:"A568TipoPermissaoId"});
   GridContainer.addRefreshingVar({rfrVar:"A3138TipoPermissaoSnControla"});
   GridContainer.addRefreshingVar({rfrVar:"A566TipoPermissaoUsuarioUsuarioId"});
   GridContainer.addRefreshingVar({rfrVar:"A558TipoPermissaoSnEmpresa"});
   GridContainer.addRefreshingVar({rfrVar:"A138EmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A227EmpresaPessoasEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A69PessoaId"});
   GridContainer.addRefreshingVar({rfrVar:"A421PessoaContato"});
   GridContainer.addRefreshingVar({rfrVar:"A10879PessoaEmailPessoaEmpId"});
   GridContainer.addRefreshingVar({rfrVar:"A10880PessoaEmailPessoaId"});
   GridContainer.addRefreshingVar({rfrVar:"A11788PessoaEmailTipo"});
   GridContainer.addRefreshingVar({rfrVar:"A10882PessoaEmailEnderecoEmail"});
   GridContainer.addRefreshingVar({rfrVar:"A434PessoaEmail"});
   GridContainer.addRefreshingVar({rfrVar:"AV133SdtParmEmail"});
   GridContainer.addRefreshingVar(this.GXValidFnc[204]);
   GridContainer.addRefreshingVar(this.GXValidFnc[209]);
   GridContainer.addRefreshingVar(this.GXValidFnc[210]);
   GridContainer.addRefreshingVar({rfrVar:"A3380PedidoCompraSituacao", rfrProp:"Value", gxAttId:"3380"});
   GridContainer.addRefreshingVar({rfrVar:"AV62CorAberta"});
   GridContainer.addRefreshingVar({rfrVar:"AV61CorFechada"});
   GridContainer.addRefreshingVar({rfrVar:"AV60CorCancel"});
   GridContainer.addRefreshingVar({rfrVar:"A1237VendedorId", rfrProp:"Value", gxAttId:"1237"});
   GridContainer.addRefreshingVar({rfrVar:"A1148VendedorNome", rfrProp:"Value", gxAttId:"1148"});
   GridContainer.addRefreshingVar({rfrVar:"A3778PedidoCompraPessoaFantasia"});
   GridContainer.addRefreshingVar({rfrVar:"A3793PedidoCompraLOGData"});
   GridContainer.addRefreshingVar({rfrVar:"A3799PedidoCompraLOGSeq"});
   GridContainer.addRefreshingVar({rfrVar:"A4286PedidoCompraLOGDataPrev"});
   GridContainer.addRefreshingVar({rfrVar:"AV63Cor"});
   GridContainer.addRefreshingVar({rfrVar:"AV122NomeClasse"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmanutencaopedido());
