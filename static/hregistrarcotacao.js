/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 6:1:59.14
*/
gx.evt.autoSkip = false;
gx.define('hregistrarcotacao', false, function () {
   this.ServerClass =  "hregistrarcotacao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A227EmpresaPessoasEmpresaId=gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID") ;
      this.A69PessoaId=gx.fn.getIntegerValue("PESSOAID",'.') ;
      this.A70PessoaRazaoSocial=gx.fn.getControlValue("PESSOARAZAOSOCIAL") ;
      this.AV45Fornecedor=gx.fn.getControlValue("vFORNECEDOR") ;
      this.A3392SolicitacaoItemSeq=gx.fn.getIntegerValue("SOLICITACAOITEMSEQ",'.') ;
      this.A3370SolicitacaoEmpresaId=gx.fn.getControlValue("SOLICITACAOEMPRESAID") ;
      this.AV27EmpresaId=gx.fn.getControlValue("vEMPRESAID") ;
      this.A3371SolicitacaoNumero=gx.fn.getIntegerValue("SOLICITACAONUMERO",'.') ;
      this.AV28SolicitacaoNumero=gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.') ;
      this.A3453CotacaoNumeroFornecedor=gx.fn.getControlValue("COTACAONUMEROFORNECEDOR") ;
      this.A3454CotacaoEntrega=gx.fn.getControlValue("COTACAOENTREGA") ;
      this.A3455CotacaoPagamento=gx.fn.getControlValue("COTACAOPAGAMENTO") ;
      this.AV104Razao=gx.fn.getControlValue("vRAZAO") ;
      this.AV86PessoaTelefone=gx.fn.getControlValue("vPESSOATELEFONE") ;
      this.AV106CNPJ=gx.fn.getControlValue("vCNPJ") ;
      this.AV105CPF=gx.fn.getControlValue("vCPF") ;
      this.AV132Pagamento=gx.fn.getControlValue("vPAGAMENTO") ;
      this.AV29PessoaId=gx.fn.getIntegerValue("vPESSOAID",'.') ;
      this.AV121SnValorPrazo=gx.fn.getControlValue("vSNVALORPRAZO") ;
      this.AV58Mod=gx.fn.getControlValue("vMOD") ;
      this.AV198SdtRegCotacao=gx.fn.getControlValue("vSDTREGCOTACAO") ;
      this.AV164SnExisteMarca=gx.fn.getControlValue("vSNEXISTEMARCA") ;
      this.AV193SNMarcaSolici=gx.fn.getControlValue("vSNMARCASOLICI") ;
      this.AV5UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A71PessoaFantasia=gx.fn.getControlValue("PESSOAFANTASIA") ;
      this.A72PessoaTelefone=gx.fn.getControlValue("PESSOATELEFONE") ;
      this.A473PessoaCPF=gx.fn.getControlValue("PESSOACPF") ;
      this.A472PessoaCNPJ=gx.fn.getControlValue("PESSOACNPJ") ;
      this.AV144SnEntregaProduto=gx.fn.getControlValue("vSNENTREGAPRODUTO") ;
      this.A3978ProdutoFornecedorProdutoEmpId=gx.fn.getControlValue("PRODUTOFORNECEDORPRODUTOEMPID") ;
      this.A3979ProdutoFornecedorProdutoId=gx.fn.getIntegerValue("PRODUTOFORNECEDORPRODUTOID",'.') ;
      this.AV41ProdutoId=gx.fn.getIntegerValue("vPRODUTOID",'.') ;
      this.A3980ProdutoFornecedorPessoaEmpId=gx.fn.getControlValue("PRODUTOFORNECEDORPESSOAEMPID") ;
      this.A3981ProdutoFornecedorPessoaId=gx.fn.getIntegerValue("PRODUTOFORNECEDORPESSOAID",'.') ;
      this.AV60Pessoa=gx.fn.getIntegerValue("vPESSOA",'.') ;
      this.A3975ProdutoFornecedorPrazoEntrega=gx.fn.getControlValue("PRODUTOFORNECEDORPRAZOENTREGA") ;
      this.AV117Entrega=gx.fn.getControlValue("vENTREGA") ;
      this.A3104PessoaPrazoEntregaPadrao=gx.fn.getControlValue("PESSOAPRAZOENTREGAPADRAO") ;
      this.A3103PessoaFormaPagtoPadrao=gx.fn.getControlValue("PESSOAFORMAPAGTOPADRAO") ;
      this.A2965ProdutoId=gx.fn.getIntegerValue("PRODUTOID",'.') ;
      this.AV73CotacaoTipo=gx.fn.getControlValue("vCOTACAOTIPO") ;
      this.A3482CotacaoDataHoraAlt=gx.fn.getDateTimeValue("COTACAODATAHORAALT") ;
      this.A3473CotacaoValorTotalAVista=gx.fn.getDecimalValue("COTACAOVALORTOTALAVISTA",'.',',') ;
      this.A3466CotacaoValorEncargos=gx.fn.getDecimalValue("COTACAOVALORENCARGOS",'.',',') ;
      this.A3462CotacaoValorFrete=gx.fn.getDecimalValue("COTACAOVALORFRETE",'.',',') ;
      this.A3467CotacaoValorSeguro=gx.fn.getDecimalValue("COTACAOVALORSEGURO",'.',',') ;
      this.AV172QtdeCotacao=gx.fn.getDecimalValue("vQTDECOTACAO",'.',',') ;
      this.A3479CotacaoValorTotalaPrazo=gx.fn.getDecimalValue("COTACAOVALORTOTALAPRAZO",'.',',') ;
      this.A2929ClassificacaoEstEmpresaId=gx.fn.getControlValue("CLASSIFICACAOESTEMPRESAID") ;
      this.AV142ClassificacaoEstEmpresaId=gx.fn.getControlValue("vCLASSIFICACAOESTEMPRESAID") ;
      this.A2930ClassificacaoEstId=gx.fn.getControlValue("CLASSIFICACAOESTID") ;
      this.A2931OpcaoClassificacaoEstId=gx.fn.getControlValue("OPCAOCLASSIFICACAOESTID") ;
      this.AV32Marca=gx.fn.getControlValue("vMARCA") ;
      this.AV171ItemCotacao=gx.fn.getIntegerValue("vITEMCOTACAO",'.') ;
      this.A4042SolicitacaoItemQtdePedida=gx.fn.getDecimalValue("SOLICITACAOITEMQTDEPEDIDA",'.',',') ;
      this.AV145Tela=gx.fn.getControlValue("vTELA") ;
   };
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
   this.Validv_Pessoacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOACODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Codfornecedoraux=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCODFORNECEDORAUX");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s132_client=function()
   {
      gx.fn.setCtrlProperty("BUTTON2","Enabled", 0 );
      gx.fn.setCtrlProperty("BUTTON3","Enabled", 0 );
      gx.fn.setCtrlProperty("BUTTON4","Enabled", 0 );
      gx.fn.setCtrlProperty("vCHEK","Enabled", 0 );
      gx.fn.setCtrlProperty("BTNMARCAR","Enabled", 0 );
      gx.fn.setCtrlProperty("BTNDESMARCAR","Enabled", 0 );
      gx.fn.setCtrlProperty("CTLORCAMENTO","Enabled", 0 );
      gx.fn.setCtrlProperty("CTLENTREGA","Enabled", 0 );
      gx.fn.setCtrlProperty("CTLPAGAMENTO","Enabled", 0 );
      gx.fn.setCtrlProperty("NOVOFORNECEDOR","Enabled", 0 );
      gx.fn.setCtrlProperty("DELFORNECEDOR","Enabled", 0 );
      gx.fn.setCtrlProperty("UPDPRODUTO","Enabled", 0 );
      gx.fn.setCtrlProperty("DELPRODUTO","Enabled", 0 );
      gx.fn.setCtrlProperty("CTLISCHECKED","Enabled", false );
      gx.fn.setCtrlProperty("CTLMARCA","Enabled", false );
      gx.fn.setCtrlProperty("CTLVALORAVISTA","Enabled", false );
      gx.fn.setCtrlProperty("CTLVALORPRAZO","Enabled", false );
   };
   this.s3212_client=function()
   {
      this.AV282GXV14 = gx.num.trunc( 1 ,0) ;
      while ( this.AV282GXV14 <= this.AV45Fornecedor.length )
      {
         this.AV44FornecedorItem =  this.AV45Fornecedor[this.AV282GXV14 - 1]  ;
         if ( this.AV44FornecedorItem.FornecedorId == this.AV60Pessoa )
         {
            this.AV43SnErro =  "S"  ;
         }
         this.AV282GXV14 = gx.num.trunc( this.AV282GXV14 + 1 ,0) ;
      }
   };
   this.e11pw2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13pw2_client=function()
   {
      this.executeServerEvent("'INCLUIRFORNECEDOR'", true, null, false, false);
   };
   this.e14pw2_client=function()
   {
      this.executeServerEvent("'EXCLUIRFORNECEDOR'", true, null, false, false);
   };
   this.e37pw2_client=function()
   {
      this.executeServerEvent("'COTACAO'", true, arguments[0], false, false);
   };
   this.e40pw2_client=function()
   {
      this.executeServerEvent("'OBSCOTACAO'", true, arguments[0], false, false);
   };
   this.e41pw2_client=function()
   {
      this.executeServerEvent("'ALTERARCOTACAO'", true, arguments[0], false, false);
   };
   this.e15pw2_client=function()
   {
      this.executeServerEvent("'EXCLUIRPRODUTO'", true, null, false, false);
   };
   this.e16pw2_client=function()
   {
      this.executeServerEvent("'SALVARGRIDCOTACAO'", true, null, false, false);
   };
   this.e42pw2_client=function()
   {
      this.executeServerEvent("'DESCRICAOPRODUTO'", true, arguments[0], false, false);
   };
   this.e17pw2_client=function()
   {
      this.executeServerEvent("'TRANSFERIRCOTACAO'", false, null, false, false);
   };
   this.e38pw2_client=function()
   {
      this.executeServerEvent("'VISUALIZARCOTACAO'", true, arguments[0], false, false);
   };
   this.e18pw2_client=function()
   {
      this.executeServerEvent("'REGISTRARGANHADOR'", false, null, false, false);
   };
   this.e19pw2_client=function()
   {
      this.executeServerEvent("'REGISTRARDESEMPATE'", false, null, false, false);
   };
   this.e20pw2_client=function()
   {
      this.executeServerEvent("'DESMARCARTODOSPRODUTOS'", false, null, false, false);
   };
   this.e21pw2_client=function()
   {
      this.executeServerEvent("'MARCARTODOSPRODUTOS'", false, null, false, false);
   };
   this.e22pw2_client=function()
   {
      this.executeServerEvent("'REGISTRARMARCA'", false, null, false, false);
   };
   this.e23pw2_client=function()
   {
      this.executeServerEvent("'MINIMIZAR'", true, null, false, false);
   };
   this.e24pw2_client=function()
   {
      this.executeServerEvent("'MAXIMIZAR'", true, null, false, false);
   };
   this.e25pw2_client=function()
   {
      this.executeServerEvent("'FORNANTERIOR'", true, null, false, false);
   };
   this.e26pw2_client=function()
   {
      this.executeServerEvent("'FORNPROXIMO'", true, null, false, false);
   };
   this.e27pw2_client=function()
   {
      this.executeServerEvent("'ITEMANTERIOR'", true, null, false, false);
   };
   this.e28pw2_client=function()
   {
      this.executeServerEvent("'ITEMPROXIMO'", true, null, false, false);
   };
   this.e12pw2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e29pw2_client=function()
   {
      this.executeServerEvent("'PROCURARPESSOA'", false, null, false, false);
   };
   this.e30pw2_client=function()
   {
      this.executeServerEvent("'ALTERARFORNECEDOR'", false, null, false, false);
   };
   this.e31pw2_client=function()
   {
      this.executeServerEvent("'CONSULTALOGGERA'", true, null, false, false);
   };
   this.e43pw2_client=function()
   {
      this.executeServerEvent("'CONSULTALOGITEMCOTACAO'", true, arguments[0], false, false);
   };
   this.e32pw2_client=function()
   {
      this.executeServerEvent("'DESMARCARTODOS'", false, null, false, false);
   };
   this.e33pw2_client=function()
   {
      this.executeServerEvent("'MARCARTODOS'", false, null, false, false);
   };
   this.e44pw2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e45pw2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,19,21,30,33,35,36,37,38,39,40,41,42,43,46,49,52,55,58,60,61,73,76,77,78,79,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,99,102,105,107,108,110,113,115,117,120,122,124,125,130,133,136,138,139,140,142,143,144,145,146,147,164,167,168,169,170,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,202,206,207,208,209,211,212,213,214,215,216,217,218,222,223,225];
   this.GXLastCtrlId =225;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",81,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hregistrarcotacao",[],false,1,false,true,5,false,false,false,"CollSdtCotacao.SdtCotacaoItem",0,"px","Novo registro",true,false,true,null,null,false,"AV45Fornecedor",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addCheckBox("GXV12A",82,"CTLCHECK","","","Check","char","S","N",null,false,false,0,"px","");
   Grid1Container.addCheckBox("Chek",83,"vCHEK","","","chek","char","S","N",null,true,false,0,"px","");
   Grid1Container.addBitmap("&Bmpcotacao","vBMPCOTACAO",84,0,"px",17,"px","e38pw2_client","","Cot","Image","");
   Grid1Container.addSingleLineEdit("GXV12D",85,"CTLFORNECEDORID","Código","","FornecedorId","int",0,"px",7,7,"right",null,[],"GXV12D","GXV12D",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV12E",86,"CTLRAZAO","Razão","","Razao","char",0,"px",80,80,"left",null,[],"GXV12E","GXV12E",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV12F",87,"CTLORCAMENTO","Orcamento","","Orcamento","svchar",40,"px",15,15,"left",null,[],"GXV12F","GXV12F",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV12G",88,"CTLENTREGA","Entrega","","Entrega","svchar",195,"px",40,40,"left",null,[],"GXV12G","GXV12G",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV12H",89,"CTLPAGAMENTO","Pagamento","","Pagamento","svchar",195,"px",40,40,"left",null,[],"GXV12H","GXV12H",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV12I",90,"CTLTELEFONE","Telefone","","Telefone","svchar",0,"px",15,15,"left",null,[],"GXV12I","GXV12I",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV12J",91,"CTLCNPJ","CPF/CNPJ","","CNPJ","char",0,"px",18,18,"left",null,[],"GXV12J","GXV12J",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV12K",92,"CTLNUMSOLICITACAO","Num Solicitacao","","NumSolicitacao","int",0,"px",7,7,"right",null,[],"GXV12K","GXV12K",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV12L",93,"CTLITEMSOLICITACAO","Sequência","","ItemSolicitacao","int",0,"px",6,6,"right",null,[],"GXV12L","GXV12L",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV12M",94,"CTLVALOR","Valor à Vista","","Valor","decimal",0,"px",21,21,"right",null,[],"GXV12M","GXV12M",false,4,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV12N",95,"CTLCPF","CPF Cliente/Fornecedor","","CPF","char",0,"px",14,14,"left",null,[],"GXV12N","GXV12N",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV12O",96,"CTLFANTASIA","Fantasia","","Fantasia","svchar",0,"px",40,40,"left",null,[],"GXV12O","GXV12O",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   this.Grid2Container = new gx.grid.grid(this, 5,"WbpLvl5",172,"Grid2","Grid2","Grid2Container",this.CmpContext,this.IsMasterPage,"hregistrarcotacao",[],false,1,false,true,0,false,false,false,"CollSdtRegCotacao.SdtRegCotacaoItem",0,"px","Novo registro",true,false,false,null,null,false,"AV198SdtRegCotacao",false,[1,1,1,1]);
   var Grid2Container = this.Grid2Container;
   Grid2Container.addCheckBox("GXV14T",173,"CTLISCHECKED","","","isChecked","boolean","true","false",null,true,false,0,"px","GridColumnImage");
   Grid2Container.addSingleLineEdit("GXV14U",174,"CTLSOLICITACAOITEMSEQ","Item","","SolicitacaoItemSeq","int",0,"px",6,6,"right",null,[],"GXV14U","GXV14U",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit("GXV14V",175,"CTLPRODUTODESCRICAORESUMIDA","Produto/Serviço","","ProdutoDescricaoResumida","svchar",0,"px",40,40,"left",null,[],"GXV14V","GXV14V",true,0,false,false,"SemQuebraGrid",1,"");
   Grid2Container.addBitmap("&Bmpobsprod","vBMPOBSPROD",176,0,"px",17,"px","e42pw2_client","","Desc","Image","GridColumnImage");
   Grid2Container.addSingleLineEdit("GXV14X",177,"CTLUNIDADE","UN","","Unidade","char",0,"px",3,3,"left",null,[],"GXV14X","GXV14X",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit("GXV14Y",178,"CTLQTDE","Qtde","","Qtde","decimal",0,"px",18,18,"right",null,[],"GXV14Y","GXV14Y",true,3,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit("GXV14Z",179,"CTLMARCA","Marca","","Marca","svchar",0,"px",20,20,"left",null,[],"GXV14Z","GXV14Z",true,0,false,false,"Attribute",1,"");
   Grid2Container.addBitmap("&Promptmarca","vPROMPTMARCA",180,0,"px",17,"px",null,"","","Image","");
   Grid2Container.addSingleLineEdit("GXV151",181,"CTLVALORAVISTA","Valor a vista","","ValorAVista","decimal",0,"px",18,18,"right",null,[],"GXV151","GXV151",true,4,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit("GXV152",182,"CTLVALORPRAZO","Valor a prazo","","ValorPrazo","decimal",0,"px",18,18,"right",null,[],"GXV152","GXV152",true,4,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit("GXV153",183,"CTLVALORTOTALVISTA","Total a Vista","","ValorTotalVista","decimal",0,"px",21,21,"right",null,[],"GXV153","GXV153",true,4,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit("GXV154",184,"CTLVALORTOTALPRAZO","Total a Prazo","","ValorTotalPrazo","decimal",0,"px",21,21,"right",null,[],"GXV154","GXV154",true,4,false,false,"Attribute",1,"");
   Grid2Container.addBitmap("&Bmpsnganhador","vBMPSNGANHADOR",185,0,"px",17,"px",null,"","Ganhador","Image","GridColumnImage");
   Grid2Container.addBitmap("&Bmplog","vBMPLOG",186,0,"px",17,"px","e43pw2_client","","Log","Image","");
   Grid2Container.addBitmap("&Bmpobs","vBMPOBS",187,0,"px",17,"px","e40pw2_client","","Obs","Image","");
   Grid2Container.addBitmap("&Bmpalt","vBMPALT",188,0,"px",17,"px","e41pw2_client","","Alt","Image","GridColumnImage");
   Grid2Container.addSingleLineEdit("GXV159",189,"CTLPRODUTOID","Código do Produto","","ProdutoId","int",0,"px",10,10,"right",null,[],"GXV159","GXV159",false,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit("GXV15A",190,"CTLPESSOAID","Código do Titular","","PessoaId","int",0,"px",7,7,"right",null,[],"GXV15A","GXV15A",false,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit("GXV15B",191,"CTLCOTACAOSNGANHADOR","Fornecedor Ganhador","","CotacaoSnGanhador","char",0,"px",1,1,"left",null,[],"GXV15B","GXV15B",false,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit("GXV15C",192,"CTLCOTACAOVALORTOTALAPRAZO","Valor Total a Prazo","","CotacaoValorTotalaPrazo","decimal",0,"px",21,21,"right",null,[],"GXV15C","GXV15C",false,4,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit("GXV15D",193,"CTLCOTACAOVALORTOTALAVISTA","Valor Total à Vista","","CotacaoValorTotalAvista","decimal",0,"px",21,21,"right",null,[],"GXV15D","GXV15D",false,4,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit("GXV15E",194,"CTLCOTACAOVALORENCARGOS","Valor Encargos","","CotacaoValorEncargos","decimal",0,"px",22,22,"right",null,[],"GXV15E","GXV15E",false,2,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit("GXV15F",195,"CTLCOTACAOVALORFRETE","Valor Frete","","CotacaoValorFrete","decimal",0,"px",22,22,"right",null,[],"GXV15F","GXV15F",false,2,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit("GXV15G",196,"CTLCOTACAOVALORSEGURO","Valor Seguro","","CotacaoValorSeguro","decimal",0,"px",22,22,"right",null,[],"GXV15G","GXV15G",false,2,false,false,"Attribute",1,"");
   this.setGrid(Grid2Container);
   this.HDMASKVALORVISTAContainer = gx.uc.getNew(this, 219, 17, "HDMask", "HDMASKVALORVISTAContainer", "Hdmaskvalorvista");
   var HDMASKVALORVISTAContainer = this.HDMASKVALORVISTAContainer;
   HDMASKVALORVISTAContainer.setProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKVALORVISTAContainer.setProp("Picture", "Picture", "", "str");
   HDMASKVALORVISTAContainer.setProp("Default", "Default", "", "str");
   HDMASKVALORVISTAContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKVALORVISTAContainer.setProp("Reverse", "Reverse", true, "bool");
   HDMASKVALORVISTAContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKVALORVISTAContainer.setProp("UnmaskedChars", "Unmaskedchars", "", "str");
   HDMASKVALORVISTAContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKVALORVISTAContainer.setProp("FixedChars", "Fixedchars", "", "str");
   HDMASKVALORVISTAContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKVALORVISTAContainer.setProp("ControlType", "Controltype", "Grid", "str");
   HDMASKVALORVISTAContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKVALORVISTAContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKVALORVISTAContainer.setProp("Class", "Class", "", "char");
   HDMASKVALORVISTAContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKVALORVISTAContainer);
   this.HDMASKVALORPRAZOContainer = gx.uc.getNew(this, 220, 17, "HDMask", "HDMASKVALORPRAZOContainer", "Hdmaskvalorprazo");
   var HDMASKVALORPRAZOContainer = this.HDMASKVALORPRAZOContainer;
   HDMASKVALORPRAZOContainer.setProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKVALORPRAZOContainer.setProp("Picture", "Picture", "", "str");
   HDMASKVALORPRAZOContainer.setProp("Default", "Default", "", "str");
   HDMASKVALORPRAZOContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKVALORPRAZOContainer.setProp("Reverse", "Reverse", true, "bool");
   HDMASKVALORPRAZOContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKVALORPRAZOContainer.setProp("UnmaskedChars", "Unmaskedchars", "", "str");
   HDMASKVALORPRAZOContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKVALORPRAZOContainer.setProp("FixedChars", "Fixedchars", "", "str");
   HDMASKVALORPRAZOContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKVALORPRAZOContainer.setProp("ControlType", "Controltype", "Grid", "str");
   HDMASKVALORPRAZOContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKVALORPRAZOContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKVALORPRAZOContainer.setProp("Class", "Class", "", "char");
   HDMASKVALORPRAZOContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKVALORPRAZOContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE3",grid:0};
   GXValidFnc[9]={fld:"TABLE10",grid:0};
   GXValidFnc[12]={fld:"TABLE16",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEPTOCOMPRASCODIGO",gxz:"ZV97DeptoComprasCodigo",gxold:"OV97DeptoComprasCodigo",gxvar:"AV97DeptoComprasCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV97DeptoComprasCodigo=Value},v2z:function(Value){gx.O.ZV97DeptoComprasCodigo=Value},v2c:function(){gx.fn.setControlValue("vDEPTOCOMPRASCODIGO",gx.O.AV97DeptoComprasCodigo,0)},c2v:function(){gx.O.AV97DeptoComprasCodigo=this.val()},val:function(){return gx.fn.getControlValue("vDEPTOCOMPRASCODIGO")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSOLICITANTENOME",gxz:"ZV99SolicitanteNome",gxold:"OV99SolicitanteNome",gxvar:"AV99SolicitanteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV99SolicitanteNome=Value},v2z:function(Value){gx.O.ZV99SolicitanteNome=Value},v2c:function(){gx.fn.setControlValue("vSOLICITANTENOME",gx.O.AV99SolicitanteNome,0)},c2v:function(){gx.O.AV99SolicitanteNome=this.val()},val:function(){return gx.fn.getControlValue("vSOLICITANTENOME")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TABLE11",grid:0};
   GXValidFnc[33]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Fornecedorid,isvalid:null,rgrid:[],fld:"vFORNECEDORID",gxz:"ZV65FornecedorId",gxold:"OV65FornecedorId",gxvar:"AV65FornecedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV65FornecedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV65FornecedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFORNECEDORID",gx.O.AV65FornecedorId,0)},c2v:function(){gx.O.AV65FornecedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFORNECEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFANTASIA",gxz:"ZV22Fantasia",gxold:"OV22Fantasia",gxvar:"AV22Fantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22Fantasia=Value},v2z:function(Value){gx.O.ZV22Fantasia=Value},v2c:function(){gx.fn.setControlValue("vFANTASIA",gx.O.AV22Fantasia,0)},c2v:function(){gx.O.AV22Fantasia=this.val()},val:function(){return gx.fn.getControlValue("vFANTASIA")},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoempresaid,isvalid:null,rgrid:[],fld:"vPRODUTOEMPRESAID",gxz:"ZV131ProdutoEmpresaId",gxold:"OV131ProdutoEmpresaId",gxvar:"AV131ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV131ProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV131ProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOEMPRESAID",gx.O.AV131ProdutoEmpresaId,0)},c2v:function(){gx.O.AV131ProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"vEMPRESAPESSOASEMPRESAID",gxz:"ZV116EmpresaPessoasEmpresaId",gxold:"OV116EmpresaPessoasEmpresaId",gxvar:"AV116EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV116EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV116EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPESSOASEMPRESAID",gx.O.AV116EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV116EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFLAG",gxz:"ZV122Flag",gxold:"OV122Flag",gxvar:"AV122Flag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV122Flag=Value},v2z:function(Value){gx.O.ZV122Flag=Value},v2c:function(){gx.fn.setControlValue("vFLAG",gx.O.AV122Flag,0)},c2v:function(){gx.O.AV122Flag=this.val()},val:function(){return gx.fn.getControlValue("vFLAG")},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNMARCA",gxz:"ZV128SnMarca",gxold:"OV128SnMarca",gxvar:"AV128SnMarca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV128SnMarca=Value},v2z:function(Value){gx.O.ZV128SnMarca=Value},v2c:function(){gx.fn.setControlValue("vSNMARCA",gx.O.AV128SnMarca,0)},c2v:function(){gx.O.AV128SnMarca=this.val()},val:function(){return gx.fn.getControlValue("vSNMARCA")},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNMINIMIZAR",gxz:"ZV168SnMinimizar",gxold:"OV168SnMinimizar",gxvar:"AV168SnMinimizar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV168SnMinimizar=Value},v2z:function(Value){gx.O.ZV168SnMinimizar=Value},v2c:function(){gx.fn.setControlValue("vSNMINIMIZAR",gx.O.AV168SnMinimizar,0)},c2v:function(){gx.O.AV168SnMinimizar=this.val()},val:function(){return gx.fn.getControlValue("vSNMINIMIZAR")},nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARACTERES",gxz:"ZV158QtdeCaracteres",gxold:"OV158QtdeCaracteres",gxvar:"AV158QtdeCaracteres",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV158QtdeCaracteres=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV158QtdeCaracteres=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARACTERES",gx.O.AV158QtdeCaracteres,0)},c2v:function(){gx.O.AV158QtdeCaracteres=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARACTERES",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoacodigo,isvalid:null,rgrid:[],fld:"vPESSOACODIGO",gxz:"ZV103PessoaCodigo",gxold:"OV103PessoaCodigo",gxvar:"AV103PessoaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV103PessoaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV103PessoaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOACODIGO",gx.O.AV103PessoaCodigo,0)},c2v:function(){gx.O.AV103PessoaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TABLE2",grid:0};
   GXValidFnc[49]={fld:"TABLE8",grid:0};
   GXValidFnc[52]={fld:"TABLE9",grid:0};
   GXValidFnc[55]={fld:"TABLE5",grid:0};
   GXValidFnc[58]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOABUSCA",gxz:"ZV148PessoaBusca",gxold:"OV148PessoaBusca",gxvar:"AV148PessoaBusca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV148PessoaBusca=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV148PessoaBusca=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOABUSCA",gx.O.AV148PessoaBusca,0)},c2v:function(){gx.O.AV148PessoaBusca=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOABUSCA",'.')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOANOMEBUSCA",gxz:"ZV149PessoaNomeBusca",gxold:"OV149PessoaNomeBusca",gxvar:"AV149PessoaNomeBusca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV149PessoaNomeBusca=Value},v2z:function(Value){gx.O.ZV149PessoaNomeBusca=Value},v2c:function(){gx.fn.setControlValue("vPESSOANOMEBUSCA",gx.O.AV149PessoaNomeBusca,0)},c2v:function(){gx.O.AV149PessoaNomeBusca=this.val()},val:function(){return gx.fn.getControlValue("vPESSOANOMEBUSCA")},nac:gx.falseFn};
   GXValidFnc[73]={fld:"TABELA1",grid:0};
   GXValidFnc[76]={fld:"NOVOFORNECEDOR",grid:0};
   GXValidFnc[77]={fld:"DELFORNECEDOR",grid:0};
   GXValidFnc[78]={fld:"IMAGE2",grid:0};
   GXValidFnc[79]={fld:"IMAGE3",grid:0};
   GXValidFnc[82]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:81,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCHECK",gxz:"ZV208GXV12A",gxold:"OV208GXV12A",gxvar:"GXV12A",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV12A=Value},v2z:function(Value){gx.O.ZV208GXV12A=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLCHECK",row || gx.fn.currentGridRowImpl(81),gx.O.GXV12A,"S")},c2v:function(){gx.O.GXV12A=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCHECK",row || gx.fn.currentGridRowImpl(81))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[83]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:81,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vCHEK",gxz:"ZV24chek",gxold:"OV24chek",gxvar:"AV24chek",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.AV24chek=Value},v2z:function(Value){gx.O.ZV24chek=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("vCHEK",row || gx.fn.currentGridRowImpl(81),gx.O.AV24chek,"S")},c2v:function(){gx.O.AV24chek=this.val()},val:function(row){return gx.fn.getGridControlValue("vCHEK",row || gx.fn.currentGridRowImpl(81))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[84]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:81,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCOTACAO",gxz:"ZV64bmpCotacao",gxold:"OV64bmpCotacao",gxvar:"AV64bmpCotacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV64bmpCotacao=Value},v2z:function(Value){gx.O.ZV64bmpCotacao=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCOTACAO",row || gx.fn.currentGridRowImpl(81),gx.O.AV64bmpCotacao,gx.O.AV242Bmpcotacao_GXI)},c2v:function(){gx.O.AV242Bmpcotacao_GXI=this.val_GXI();gx.O.AV64bmpCotacao=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCOTACAO",row || gx.fn.currentGridRowImpl(81))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCOTACAO_GXI",row || gx.fn.currentGridRowImpl(81))}, gxvar_GXI:'AV242Bmpcotacao_GXI',nac:gx.falseFn};
   GXValidFnc[85]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:81,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLFORNECEDORID",gxz:"ZV209GXV12D",gxold:"OV209GXV12D",gxvar:"GXV12D",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12D=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV209GXV12D=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLFORNECEDORID",row || gx.fn.currentGridRowImpl(81),gx.O.GXV12D,0)},c2v:function(){gx.O.GXV12D=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLFORNECEDORID",row || gx.fn.currentGridRowImpl(81),'.')},nac:gx.falseFn};
   GXValidFnc[86]={lvl:2,type:"char",len:80,dec:0,sign:false,ro:0,isacc:0,grid:81,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLRAZAO",gxz:"ZV210GXV12E",gxold:"OV210GXV12E",gxvar:"GXV12E",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12E=Value},v2z:function(Value){gx.O.ZV210GXV12E=Value},v2c:function(row){gx.fn.setGridControlValue("CTLRAZAO",row || gx.fn.currentGridRowImpl(81),gx.O.GXV12E,0)},c2v:function(){gx.O.GXV12E=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLRAZAO",row || gx.fn.currentGridRowImpl(81))},nac:gx.falseFn};
   GXValidFnc[87]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:0,isacc:0,grid:81,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLORCAMENTO",gxz:"ZV211GXV12F",gxold:"OV211GXV12F",gxvar:"GXV12F",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12F=Value},v2z:function(Value){gx.O.ZV211GXV12F=Value},v2c:function(row){gx.fn.setGridControlValue("CTLORCAMENTO",row || gx.fn.currentGridRowImpl(81),gx.O.GXV12F,0)},c2v:function(){gx.O.GXV12F=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLORCAMENTO",row || gx.fn.currentGridRowImpl(81))},nac:gx.falseFn};
   GXValidFnc[88]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:81,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLENTREGA",gxz:"ZV212GXV12G",gxold:"OV212GXV12G",gxvar:"GXV12G",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12G=Value},v2z:function(Value){gx.O.ZV212GXV12G=Value},v2c:function(row){gx.fn.setGridControlValue("CTLENTREGA",row || gx.fn.currentGridRowImpl(81),gx.O.GXV12G,0)},c2v:function(){gx.O.GXV12G=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLENTREGA",row || gx.fn.currentGridRowImpl(81))},nac:gx.falseFn};
   GXValidFnc[89]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:81,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPAGAMENTO",gxz:"ZV213GXV12H",gxold:"OV213GXV12H",gxvar:"GXV12H",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12H=Value},v2z:function(Value){gx.O.ZV213GXV12H=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPAGAMENTO",row || gx.fn.currentGridRowImpl(81),gx.O.GXV12H,0)},c2v:function(){gx.O.GXV12H=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPAGAMENTO",row || gx.fn.currentGridRowImpl(81))},nac:gx.falseFn};
   GXValidFnc[90]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:0,isacc:0,grid:81,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLTELEFONE",gxz:"ZV214GXV12I",gxold:"OV214GXV12I",gxvar:"GXV12I",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12I=Value},v2z:function(Value){gx.O.ZV214GXV12I=Value},v2c:function(row){gx.fn.setGridControlValue("CTLTELEFONE",row || gx.fn.currentGridRowImpl(81),gx.O.GXV12I,0)},c2v:function(){gx.O.GXV12I=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLTELEFONE",row || gx.fn.currentGridRowImpl(81))},nac:gx.falseFn};
   GXValidFnc[91]={lvl:2,type:"char",len:18,dec:0,sign:false,ro:0,isacc:0,grid:81,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCNPJ",gxz:"ZV215GXV12J",gxold:"OV215GXV12J",gxvar:"GXV12J",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12J=Value},v2z:function(Value){gx.O.ZV215GXV12J=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCNPJ",row || gx.fn.currentGridRowImpl(81),gx.O.GXV12J,0)},c2v:function(){gx.O.GXV12J=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCNPJ",row || gx.fn.currentGridRowImpl(81))},nac:gx.falseFn};
   GXValidFnc[92]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:81,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLNUMSOLICITACAO",gxz:"ZV216GXV12K",gxold:"OV216GXV12K",gxvar:"GXV12K",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12K=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV216GXV12K=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLNUMSOLICITACAO",row || gx.fn.currentGridRowImpl(81),gx.O.GXV12K,0)},c2v:function(){gx.O.GXV12K=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLNUMSOLICITACAO",row || gx.fn.currentGridRowImpl(81),'.')},nac:gx.falseFn};
   GXValidFnc[93]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,isacc:0,grid:81,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLITEMSOLICITACAO",gxz:"ZV217GXV12L",gxold:"OV217GXV12L",gxvar:"GXV12L",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12L=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV217GXV12L=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLITEMSOLICITACAO",row || gx.fn.currentGridRowImpl(81),gx.O.GXV12L,0)},c2v:function(){gx.O.GXV12L=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLITEMSOLICITACAO",row || gx.fn.currentGridRowImpl(81),'.')},nac:gx.falseFn};
   GXValidFnc[94]={lvl:2,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,isacc:0,grid:81,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALOR",gxz:"ZV218GXV12M",gxold:"OV218GXV12M",gxvar:"GXV12M",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12M=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV218GXV12M=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVALOR",row || gx.fn.currentGridRowImpl(81),gx.O.GXV12M,4,',')},c2v:function(){gx.O.GXV12M=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVALOR",row || gx.fn.currentGridRowImpl(81),'.',',')},nac:gx.falseFn};
   GXValidFnc[95]={lvl:2,type:"char",len:14,dec:0,sign:false,ro:0,isacc:0,grid:81,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCPF",gxz:"ZV219GXV12N",gxold:"OV219GXV12N",gxvar:"GXV12N",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12N=Value},v2z:function(Value){gx.O.ZV219GXV12N=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCPF",row || gx.fn.currentGridRowImpl(81),gx.O.GXV12N,0)},c2v:function(){gx.O.GXV12N=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCPF",row || gx.fn.currentGridRowImpl(81))},nac:gx.falseFn};
   GXValidFnc[96]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:81,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLFANTASIA",gxz:"ZV220GXV12O",gxold:"OV220GXV12O",gxvar:"GXV12O",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12O=Value},v2z:function(Value){gx.O.ZV220GXV12O=Value},v2c:function(row){gx.fn.setGridControlValue("CTLFANTASIA",row || gx.fn.currentGridRowImpl(81),gx.O.GXV12O,0)},c2v:function(){gx.O.GXV12O=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLFANTASIA",row || gx.fn.currentGridRowImpl(81))},nac:gx.falseFn};
   GXValidFnc[99]={fld:"TABLE4",grid:0};
   GXValidFnc[102]={fld:"TABLE13",grid:0};
   GXValidFnc[105]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[107]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Codfornecedoraux,isvalid:null,rgrid:[],fld:"vCODFORNECEDORAUX",gxz:"ZV111CodFornecedorAux",gxold:"OV111CodFornecedorAux",gxvar:"AV111CodFornecedorAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV111CodFornecedorAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV111CodFornecedorAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODFORNECEDORAUX",gx.O.AV111CodFornecedorAux,0)},c2v:function(){gx.O.AV111CodFornecedorAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODFORNECEDORAUX",'.')},nac:gx.falseFn};
   GXValidFnc[108]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRAZAOAUX",gxz:"ZV195RazaoAux",gxold:"OV195RazaoAux",gxvar:"AV195RazaoAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV195RazaoAux=Value},v2z:function(Value){gx.O.ZV195RazaoAux=Value},v2c:function(){gx.fn.setControlValue("vRAZAOAUX",gx.O.AV195RazaoAux,0)},c2v:function(){gx.O.AV195RazaoAux=this.val()},val:function(){return gx.fn.getControlValue("vRAZAOAUX")},nac:gx.falseFn};
   GXValidFnc[110]={fld:"TABLE14",grid:0};
   GXValidFnc[113]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[115]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTOTALAVISTA",gxz:"ZV169TotalAvista",gxold:"OV169TotalAvista",gxvar:"AV169TotalAvista",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV169TotalAvista=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV169TotalAvista=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTOTALAVISTA",gx.O.AV169TotalAvista,4,',')},c2v:function(){gx.O.AV169TotalAvista=this.val()},val:function(){return gx.fn.getDecimalValue("vTOTALAVISTA",'.',',')},nac:gx.falseFn};
   GXValidFnc[117]={fld:"TABLE15",grid:0};
   GXValidFnc[120]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[122]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTOTALAPRAZO",gxz:"ZV170TotalAPrazo",gxold:"OV170TotalAPrazo",gxvar:"AV170TotalAPrazo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV170TotalAPrazo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV170TotalAPrazo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTOTALAPRAZO",gx.O.AV170TotalAPrazo,4,',')},c2v:function(){gx.O.AV170TotalAPrazo=this.val()},val:function(){return gx.fn.getDecimalValue("vTOTALAPRAZO",'.',',')},nac:gx.falseFn};
   GXValidFnc[124]={fld:"MINIMIZAR",grid:0};
   GXValidFnc[125]={fld:"MAXIMIZAR",grid:0};
   GXValidFnc[130]={fld:"TABLE6",grid:0};
   GXValidFnc[133]={fld:"TABLE12",grid:0};
   GXValidFnc[136]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[138]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vITEMBUSCA",gxz:"ZV163ItemBusca",gxold:"OV163ItemBusca",gxvar:"AV163ItemBusca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV163ItemBusca=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV163ItemBusca=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vITEMBUSCA",gx.O.AV163ItemBusca,0)},c2v:function(){gx.O.AV163ItemBusca=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vITEMBUSCA",'.')},nac:gx.falseFn};
   GXValidFnc[139]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOIDAUX",gxz:"ZV146ProdutoIdAux",gxold:"OV146ProdutoIdAux",gxvar:"AV146ProdutoIdAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV146ProdutoIdAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV146ProdutoIdAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOIDAUX",gx.O.AV146ProdutoIdAux,0)},c2v:function(){gx.O.AV146ProdutoIdAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOIDAUX",'.')},nac:gx.falseFn};
   GXValidFnc[140]={fld:"PROMPTPRODUTO",grid:0};
   GXValidFnc[142]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAOAUX",gxz:"ZV147ProdutoDescricaoAux",gxold:"OV147ProdutoDescricaoAux",gxvar:"AV147ProdutoDescricaoAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV147ProdutoDescricaoAux=Value},v2z:function(Value){gx.O.ZV147ProdutoDescricaoAux=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAOAUX",gx.O.AV147ProdutoDescricaoAux,0)},c2v:function(){gx.O.AV147ProdutoDescricaoAux=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAOAUX")},nac:gx.falseFn};
   GXValidFnc[143]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE",gxz:"ZV154Lote",gxold:"OV154Lote",gxvar:"AV154Lote",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV154Lote=Value},v2z:function(Value){gx.O.ZV154Lote=Value},v2c:function(){gx.fn.setControlValue("vLOTE",gx.O.AV154Lote,0)},c2v:function(){gx.O.AV154Lote=this.val()},val:function(){return gx.fn.getControlValue("vLOTE")},nac:gx.falseFn};
   GXValidFnc[144]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPO",gxz:"ZV156SubGrupo",gxold:"OV156SubGrupo",gxvar:"AV156SubGrupo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV156SubGrupo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV156SubGrupo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSUBGRUPO",gx.O.AV156SubGrupo,0)},c2v:function(){gx.O.AV156SubGrupo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPO",'.')},nac:gx.falseFn};
   GXValidFnc[145]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPO",gxz:"ZV157Grupo",gxold:"OV157Grupo",gxvar:"AV157Grupo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV157Grupo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV157Grupo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPO",gx.O.AV157Grupo,0)},c2v:function(){gx.O.AV157Grupo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPO",'.')},nac:gx.falseFn};
   GXValidFnc[146]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONDPROD",gxz:"ZV155CondProd",gxold:"OV155CondProd",gxvar:"AV155CondProd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV155CondProd=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV155CondProd=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONDPROD",gx.O.AV155CondProd,0)},c2v:function(){gx.O.AV155CondProd=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONDPROD",'.')},nac:gx.falseFn};
   GXValidFnc[147]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNUMPAGINA",gxz:"ZV72NumPagina",gxold:"OV72NumPagina",gxvar:"AV72NumPagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72NumPagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV72NumPagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNUMPAGINA",gx.O.AV72NumPagina,0)},c2v:function(){gx.O.AV72NumPagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[164]={fld:"TABELA2",grid:0};
   GXValidFnc[167]={fld:"UPDPRODUTO",grid:0};
   GXValidFnc[168]={fld:"DELPRODUTO",grid:0};
   GXValidFnc[169]={fld:"IMAGE4",grid:0};
   GXValidFnc[170]={fld:"IMAGE5",grid:0};
   GXValidFnc[173]={lvl:5,type:"boolean",len:4,dec:0,sign:false,ro:0,isacc:0,grid:172,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLISCHECKED",gxz:"ZV222GXV14T",gxold:"OV222GXV14T",gxvar:"GXV14T",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV14T=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV222GXV14T=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLISCHECKED",row || gx.fn.currentGridRowImpl(172),gx.O.GXV14T,true)},c2v:function(){gx.O.GXV14T=gx.lang.booleanValue(this.val())},val:function(row){return gx.fn.getGridControlValue("CTLISCHECKED",row || gx.fn.currentGridRowImpl(172))},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[174]={lvl:5,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,isacc:0,grid:172,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLSOLICITACAOITEMSEQ",gxz:"ZV223GXV14U",gxold:"OV223GXV14U",gxvar:"GXV14U",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV14U=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV223GXV14U=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLSOLICITACAOITEMSEQ",row || gx.fn.currentGridRowImpl(172),gx.O.GXV14U,0)},c2v:function(){gx.O.GXV14U=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLSOLICITACAOITEMSEQ",row || gx.fn.currentGridRowImpl(172),'.')},nac:gx.falseFn};
   GXValidFnc[175]={lvl:5,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:172,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTODESCRICAORESUMIDA",gxz:"ZV224GXV14V",gxold:"OV224GXV14V",gxvar:"GXV14V",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV14V=Value},v2z:function(Value){gx.O.ZV224GXV14V=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTODESCRICAORESUMIDA",row || gx.fn.currentGridRowImpl(172),gx.O.GXV14V,0)},c2v:function(){gx.O.GXV14V=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPRODUTODESCRICAORESUMIDA",row || gx.fn.currentGridRowImpl(172))},nac:gx.falseFn};
   GXValidFnc[176]={lvl:5,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:172,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPOBSPROD",gxz:"ZV78bmpObsProd",gxold:"OV78bmpObsProd",gxvar:"AV78bmpObsProd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV78bmpObsProd=Value},v2z:function(Value){gx.O.ZV78bmpObsProd=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPOBSPROD",row || gx.fn.currentGridRowImpl(172),gx.O.AV78bmpObsProd,gx.O.AV252Bmpobsprod_GXI)},c2v:function(){gx.O.AV252Bmpobsprod_GXI=this.val_GXI();gx.O.AV78bmpObsProd=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPOBSPROD",row || gx.fn.currentGridRowImpl(172))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPOBSPROD_GXI",row || gx.fn.currentGridRowImpl(172))}, gxvar_GXI:'AV252Bmpobsprod_GXI',nac:gx.falseFn};
   GXValidFnc[177]={lvl:5,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:172,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLUNIDADE",gxz:"ZV225GXV14X",gxold:"OV225GXV14X",gxvar:"GXV14X",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV14X=Value},v2z:function(Value){gx.O.ZV225GXV14X=Value},v2c:function(row){gx.fn.setGridControlValue("CTLUNIDADE",row || gx.fn.currentGridRowImpl(172),gx.O.GXV14X,0)},c2v:function(){gx.O.GXV14X=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLUNIDADE",row || gx.fn.currentGridRowImpl(172))},nac:gx.falseFn};
   GXValidFnc[178]={lvl:5,type:"decimal",len:18,dec:3,sign:false,pic:"ZZZZZZZZZZZZZ9.999",ro:0,isacc:0,grid:172,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLQTDE",gxz:"ZV226GXV14Y",gxold:"OV226GXV14Y",gxvar:"GXV14Y",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV14Y=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV226GXV14Y=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLQTDE",row || gx.fn.currentGridRowImpl(172),gx.O.GXV14Y,3,',')},c2v:function(){gx.O.GXV14Y=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLQTDE",row || gx.fn.currentGridRowImpl(172),'.',',')},nac:gx.falseFn};
   GXValidFnc[179]={lvl:5,type:"svchar",len:20,dec:0,sign:false,ro:0,isacc:0,grid:172,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLMARCA",gxz:"ZV227GXV14Z",gxold:"OV227GXV14Z",gxvar:"GXV14Z",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV14Z=Value},v2z:function(Value){gx.O.ZV227GXV14Z=Value},v2c:function(row){gx.fn.setGridControlValue("CTLMARCA",row || gx.fn.currentGridRowImpl(172),gx.O.GXV14Z,0)},c2v:function(){gx.O.GXV14Z=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLMARCA",row || gx.fn.currentGridRowImpl(172))},nac:gx.falseFn};
   GXValidFnc[180]={lvl:5,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:172,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vPROMPTMARCA",gxz:"ZV197PromptMarca",gxold:"OV197PromptMarca",gxvar:"AV197PromptMarca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV197PromptMarca=Value},v2z:function(Value){gx.O.ZV197PromptMarca=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vPROMPTMARCA",row || gx.fn.currentGridRowImpl(172),gx.O.AV197PromptMarca,gx.O.AV245Promptmarca_GXI)},c2v:function(){gx.O.AV245Promptmarca_GXI=this.val_GXI();gx.O.AV197PromptMarca=this.val()},val:function(row){return gx.fn.getGridControlValue("vPROMPTMARCA",row || gx.fn.currentGridRowImpl(172))},val_GXI:function(row){return gx.fn.getGridControlValue("vPROMPTMARCA_GXI",row || gx.fn.currentGridRowImpl(172))}, gxvar_GXI:'AV245Promptmarca_GXI',nac:gx.falseFn};
   GXValidFnc[181]={lvl:5,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZZZZZZZZZ9.9999",ro:0,isacc:0,grid:172,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALORAVISTA",gxz:"ZV228GXV151",gxold:"OV228GXV151",gxvar:"GXV151",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV151=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV228GXV151=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVALORAVISTA",row || gx.fn.currentGridRowImpl(172),gx.O.GXV151,4,',')},c2v:function(){gx.O.GXV151=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVALORAVISTA",row || gx.fn.currentGridRowImpl(172),'.',',')},nac:gx.falseFn};
   GXValidFnc[182]={lvl:5,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZZZZZZZZZ9.9999",ro:0,isacc:0,grid:172,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALORPRAZO",gxz:"ZV229GXV152",gxold:"OV229GXV152",gxvar:"GXV152",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV152=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV229GXV152=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVALORPRAZO",row || gx.fn.currentGridRowImpl(172),gx.O.GXV152,4,',')},c2v:function(){gx.O.GXV152=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVALORPRAZO",row || gx.fn.currentGridRowImpl(172),'.',',')},nac:gx.falseFn};
   GXValidFnc[183]={lvl:5,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,isacc:0,grid:172,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALORTOTALVISTA",gxz:"ZV230GXV153",gxold:"OV230GXV153",gxvar:"GXV153",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV153=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV230GXV153=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVALORTOTALVISTA",row || gx.fn.currentGridRowImpl(172),gx.O.GXV153,4,',')},c2v:function(){gx.O.GXV153=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVALORTOTALVISTA",row || gx.fn.currentGridRowImpl(172),'.',',')},nac:gx.falseFn};
   GXValidFnc[184]={lvl:5,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,isacc:0,grid:172,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALORTOTALPRAZO",gxz:"ZV231GXV154",gxold:"OV231GXV154",gxvar:"GXV154",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV154=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV231GXV154=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVALORTOTALPRAZO",row || gx.fn.currentGridRowImpl(172),gx.O.GXV154,4,',')},c2v:function(){gx.O.GXV154=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVALORTOTALPRAZO",row || gx.fn.currentGridRowImpl(172),'.',',')},nac:gx.falseFn};
   GXValidFnc[185]={lvl:5,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:172,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSNGANHADOR",gxz:"ZV107bmpSnGanhador",gxold:"OV107bmpSnGanhador",gxvar:"AV107bmpSnGanhador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV107bmpSnGanhador=Value},v2z:function(Value){gx.O.ZV107bmpSnGanhador=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSNGANHADOR",row || gx.fn.currentGridRowImpl(172),gx.O.AV107bmpSnGanhador,gx.O.AV254Bmpsnganhador_GXI)},c2v:function(){gx.O.AV254Bmpsnganhador_GXI=this.val_GXI();gx.O.AV107bmpSnGanhador=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSNGANHADOR",row || gx.fn.currentGridRowImpl(172))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSNGANHADOR_GXI",row || gx.fn.currentGridRowImpl(172))}, gxvar_GXI:'AV254Bmpsnganhador_GXI',nac:gx.falseFn};
   GXValidFnc[186]={lvl:5,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:172,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPLOG",gxz:"ZV181bmpLog",gxold:"OV181bmpLog",gxvar:"AV181bmpLog",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV181bmpLog=Value},v2z:function(Value){gx.O.ZV181bmpLog=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPLOG",row || gx.fn.currentGridRowImpl(172),gx.O.AV181bmpLog,gx.O.AV253Bmplog_GXI)},c2v:function(){gx.O.AV253Bmplog_GXI=this.val_GXI();gx.O.AV181bmpLog=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPLOG",row || gx.fn.currentGridRowImpl(172))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPLOG_GXI",row || gx.fn.currentGridRowImpl(172))}, gxvar_GXI:'AV253Bmplog_GXI',nac:gx.falseFn};
   GXValidFnc[187]={lvl:5,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:172,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPOBS",gxz:"ZV38bmpObs",gxold:"OV38bmpObs",gxvar:"AV38bmpObs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV38bmpObs=Value},v2z:function(Value){gx.O.ZV38bmpObs=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPOBS",row || gx.fn.currentGridRowImpl(172),gx.O.AV38bmpObs,gx.O.AV244Bmpobs_GXI)},c2v:function(){gx.O.AV244Bmpobs_GXI=this.val_GXI();gx.O.AV38bmpObs=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPOBS",row || gx.fn.currentGridRowImpl(172))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPOBS_GXI",row || gx.fn.currentGridRowImpl(172))}, gxvar_GXI:'AV244Bmpobs_GXI',nac:gx.falseFn};
   GXValidFnc[188]={lvl:5,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:172,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV20bmpAlt",gxold:"OV20bmpAlt",gxvar:"AV20bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV20bmpAlt=Value},v2z:function(Value){gx.O.ZV20bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(172),gx.O.AV20bmpAlt,gx.O.AV243Bmpalt_GXI)},c2v:function(){gx.O.AV243Bmpalt_GXI=this.val_GXI();gx.O.AV20bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(172))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(172))}, gxvar_GXI:'AV243Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[189]={lvl:5,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:172,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOID",gxz:"ZV232GXV159",gxold:"OV232GXV159",gxvar:"GXV159",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV159=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV232GXV159=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTOID",row || gx.fn.currentGridRowImpl(172),gx.O.GXV159,0)},c2v:function(){gx.O.GXV159=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPRODUTOID",row || gx.fn.currentGridRowImpl(172),'.')},nac:gx.falseFn};
   GXValidFnc[190]={lvl:5,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:172,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAID",gxz:"ZV233GXV15A",gxold:"OV233GXV15A",gxvar:"GXV15A",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV15A=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV233GXV15A=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAID",row || gx.fn.currentGridRowImpl(172),gx.O.GXV15A,0)},c2v:function(){gx.O.GXV15A=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPESSOAID",row || gx.fn.currentGridRowImpl(172),'.')},nac:gx.falseFn};
   GXValidFnc[191]={lvl:5,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:172,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCOTACAOSNGANHADOR",gxz:"ZV234GXV15B",gxold:"OV234GXV15B",gxvar:"GXV15B",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV15B=Value},v2z:function(Value){gx.O.ZV234GXV15B=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCOTACAOSNGANHADOR",row || gx.fn.currentGridRowImpl(172),gx.O.GXV15B,0)},c2v:function(){gx.O.GXV15B=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCOTACAOSNGANHADOR",row || gx.fn.currentGridRowImpl(172))},nac:gx.falseFn};
   GXValidFnc[192]={lvl:5,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,isacc:0,grid:172,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCOTACAOVALORTOTALAPRAZO",gxz:"ZV235GXV15C",gxold:"OV235GXV15C",gxvar:"GXV15C",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV15C=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV235GXV15C=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLCOTACAOVALORTOTALAPRAZO",row || gx.fn.currentGridRowImpl(172),gx.O.GXV15C,4,',')},c2v:function(){gx.O.GXV15C=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLCOTACAOVALORTOTALAPRAZO",row || gx.fn.currentGridRowImpl(172),'.',',')},nac:gx.falseFn};
   GXValidFnc[193]={lvl:5,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,isacc:0,grid:172,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCOTACAOVALORTOTALAVISTA",gxz:"ZV236GXV15D",gxold:"OV236GXV15D",gxvar:"GXV15D",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV15D=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV236GXV15D=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLCOTACAOVALORTOTALAVISTA",row || gx.fn.currentGridRowImpl(172),gx.O.GXV15D,4,',')},c2v:function(){gx.O.GXV15D=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLCOTACAOVALORTOTALAVISTA",row || gx.fn.currentGridRowImpl(172),'.',',')},nac:gx.falseFn};
   GXValidFnc[194]={lvl:5,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:172,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCOTACAOVALORENCARGOS",gxz:"ZV237GXV15E",gxold:"OV237GXV15E",gxvar:"GXV15E",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV15E=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV237GXV15E=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLCOTACAOVALORENCARGOS",row || gx.fn.currentGridRowImpl(172),gx.O.GXV15E,2,',')},c2v:function(){gx.O.GXV15E=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLCOTACAOVALORENCARGOS",row || gx.fn.currentGridRowImpl(172),'.',',')},nac:gx.falseFn};
   GXValidFnc[195]={lvl:5,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:172,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCOTACAOVALORFRETE",gxz:"ZV238GXV15F",gxold:"OV238GXV15F",gxvar:"GXV15F",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV15F=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV238GXV15F=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLCOTACAOVALORFRETE",row || gx.fn.currentGridRowImpl(172),gx.O.GXV15F,2,',')},c2v:function(){gx.O.GXV15F=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLCOTACAOVALORFRETE",row || gx.fn.currentGridRowImpl(172),'.',',')},nac:gx.falseFn};
   GXValidFnc[196]={lvl:5,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:172,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCOTACAOVALORSEGURO",gxz:"ZV239GXV15G",gxold:"OV239GXV15G",gxvar:"GXV15G",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV15G=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV239GXV15G=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLCOTACAOVALORSEGURO",row || gx.fn.currentGridRowImpl(172),gx.O.GXV15G,2,',')},c2v:function(){gx.O.GXV15G=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLCOTACAOVALORSEGURO",row || gx.fn.currentGridRowImpl(172),'.',',')},nac:gx.falseFn};
   GXValidFnc[202]={fld:"TABLE7",grid:0};
   GXValidFnc[206]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAGRD2",gxz:"ZV200PaginaGrd2",gxold:"OV200PaginaGrd2",gxvar:"AV200PaginaGrd2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV200PaginaGrd2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV200PaginaGrd2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAGRD2",gx.O.AV200PaginaGrd2,0)},c2v:function(){gx.O.AV200PaginaGrd2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAGRD2",'.')},nac:gx.falseFn};
   GXValidFnc[207]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNFORNECEDOR",gxz:"ZV52SnFornecedor",gxold:"OV52SnFornecedor",gxvar:"AV52SnFornecedor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52SnFornecedor=Value},v2z:function(Value){gx.O.ZV52SnFornecedor=Value},v2c:function(){gx.fn.setControlValue("vSNFORNECEDOR",gx.O.AV52SnFornecedor,0)},c2v:function(){gx.O.AV52SnFornecedor=this.val()},val:function(){return gx.fn.getControlValue("vSNFORNECEDOR")},nac:gx.falseFn};
   GXValidFnc[208]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNFABRICANTE",gxz:"ZV55SnFabricante",gxold:"OV55SnFabricante",gxvar:"AV55SnFabricante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55SnFabricante=Value},v2z:function(Value){gx.O.ZV55SnFabricante=Value},v2c:function(){gx.fn.setControlValue("vSNFABRICANTE",gx.O.AV55SnFabricante,0)},c2v:function(){gx.O.AV55SnFabricante=this.val()},val:function(){return gx.fn.getControlValue("vSNFABRICANTE")},nac:gx.falseFn};
   GXValidFnc[209]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCLIENTE",gxz:"ZV51SnCliente",gxold:"OV51SnCliente",gxvar:"AV51SnCliente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51SnCliente=Value},v2z:function(Value){gx.O.ZV51SnCliente=Value},v2c:function(){gx.fn.setControlValue("vSNCLIENTE",gx.O.AV51SnCliente,0)},c2v:function(){gx.O.AV51SnCliente=this.val()},val:function(){return gx.fn.getControlValue("vSNCLIENTE")},nac:gx.falseFn};
   GXValidFnc[211]={fld:"JS", format:2,grid:0};
   GXValidFnc[212]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV184ProdutoReferencia",gxold:"OV184ProdutoReferencia",gxvar:"AV184ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV184ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV184ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV184ProdutoReferencia,0)},c2v:function(){gx.O.AV184ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[213]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV188SNVenda",gxold:"OV188SNVenda",gxvar:"AV188SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV188SNVenda=Value},v2z:function(Value){gx.O.ZV188SNVenda=Value},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV188SNVenda,0)},c2v:function(){gx.O.AV188SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};
   GXValidFnc[214]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOBARRA",gxz:"ZV183CodigoBarrasProdutoBarra",gxold:"OV183CodigoBarrasProdutoBarra",gxvar:"AV183CodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV183CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV183CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTOBARRA",gx.O.AV183CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.AV183CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRA",'.')},nac:gx.falseFn};
   GXValidFnc[215]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUXIN",gxz:"ZV185IntAuxIn",gxold:"OV185IntAuxIn",gxvar:"AV185IntAuxIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV185IntAuxIn=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV185IntAuxIn=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTAUXIN",gx.O.AV185IntAuxIn,0)},c2v:function(){gx.O.AV185IntAuxIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUXIN",'.')},nac:gx.falseFn};
   GXValidFnc[216]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV70Pagina",gxold:"OV70Pagina",gxvar:"AV70Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV70Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV70Pagina,0)},c2v:function(){gx.O.AV70Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[217]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCTRLPAG",gxz:"ZV191CtrlPag",gxold:"OV191CtrlPag",gxvar:"AV191CtrlPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV191CtrlPag=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV191CtrlPag=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTRLPAG",gx.O.AV191CtrlPag,0)},c2v:function(){gx.O.AV191CtrlPag=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTRLPAG",'.')},nac:gx.falseFn};
   GXValidFnc[218]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCTRLPAG2",gxz:"ZV192CtrlPag2",gxold:"OV192CtrlPag2",gxvar:"AV192CtrlPag2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV192CtrlPag2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV192CtrlPag2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTRLPAG2",gx.O.AV192CtrlPag2,0)},c2v:function(){gx.O.AV192CtrlPag2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTRLPAG2",'.')},nac:gx.falseFn};
   GXValidFnc[222]={fld:"BTNLOG",grid:0};
   GXValidFnc[223]={fld:"BTNHELP",grid:0};
   GXValidFnc[225]={fld:"PROMPT_PESSOABUSCA",grid:0};
   this.AV97DeptoComprasCodigo = "" ;
   this.ZV97DeptoComprasCodigo = "" ;
   this.OV97DeptoComprasCodigo = "" ;
   this.AV99SolicitanteNome = "" ;
   this.ZV99SolicitanteNome = "" ;
   this.OV99SolicitanteNome = "" ;
   this.AV65FornecedorId = 0 ;
   this.ZV65FornecedorId = 0 ;
   this.OV65FornecedorId = 0 ;
   this.AV22Fantasia = "" ;
   this.ZV22Fantasia = "" ;
   this.OV22Fantasia = "" ;
   this.AV131ProdutoEmpresaId = "" ;
   this.ZV131ProdutoEmpresaId = "" ;
   this.OV131ProdutoEmpresaId = "" ;
   this.AV116EmpresaPessoasEmpresaId = "" ;
   this.ZV116EmpresaPessoasEmpresaId = "" ;
   this.OV116EmpresaPessoasEmpresaId = "" ;
   this.AV122Flag = "" ;
   this.ZV122Flag = "" ;
   this.OV122Flag = "" ;
   this.AV128SnMarca = "" ;
   this.ZV128SnMarca = "" ;
   this.OV128SnMarca = "" ;
   this.AV168SnMinimizar = "" ;
   this.ZV168SnMinimizar = "" ;
   this.OV168SnMinimizar = "" ;
   this.AV158QtdeCaracteres = 0 ;
   this.ZV158QtdeCaracteres = 0 ;
   this.OV158QtdeCaracteres = 0 ;
   this.AV103PessoaCodigo = 0 ;
   this.ZV103PessoaCodigo = 0 ;
   this.OV103PessoaCodigo = 0 ;
   this.AV148PessoaBusca = 0 ;
   this.ZV148PessoaBusca = 0 ;
   this.OV148PessoaBusca = 0 ;
   this.AV149PessoaNomeBusca = "" ;
   this.ZV149PessoaNomeBusca = "" ;
   this.OV149PessoaNomeBusca = "" ;
   this.ZV208GXV12A = "" ;
   this.OV208GXV12A = "" ;
   this.ZV24chek = "" ;
   this.OV24chek = "" ;
   this.ZV64bmpCotacao = "" ;
   this.OV64bmpCotacao = "" ;
   this.ZV209GXV12D = 0 ;
   this.OV209GXV12D = 0 ;
   this.ZV210GXV12E = "" ;
   this.OV210GXV12E = "" ;
   this.ZV211GXV12F = "" ;
   this.OV211GXV12F = "" ;
   this.ZV212GXV12G = "" ;
   this.OV212GXV12G = "" ;
   this.ZV213GXV12H = "" ;
   this.OV213GXV12H = "" ;
   this.ZV214GXV12I = "" ;
   this.OV214GXV12I = "" ;
   this.ZV215GXV12J = "" ;
   this.OV215GXV12J = "" ;
   this.ZV216GXV12K = 0 ;
   this.OV216GXV12K = 0 ;
   this.ZV217GXV12L = 0 ;
   this.OV217GXV12L = 0 ;
   this.ZV218GXV12M = 0 ;
   this.OV218GXV12M = 0 ;
   this.ZV219GXV12N = "" ;
   this.OV219GXV12N = "" ;
   this.ZV220GXV12O = "" ;
   this.OV220GXV12O = "" ;
   this.AV111CodFornecedorAux = 0 ;
   this.ZV111CodFornecedorAux = 0 ;
   this.OV111CodFornecedorAux = 0 ;
   this.AV195RazaoAux = "" ;
   this.ZV195RazaoAux = "" ;
   this.OV195RazaoAux = "" ;
   this.AV169TotalAvista = 0 ;
   this.ZV169TotalAvista = 0 ;
   this.OV169TotalAvista = 0 ;
   this.AV170TotalAPrazo = 0 ;
   this.ZV170TotalAPrazo = 0 ;
   this.OV170TotalAPrazo = 0 ;
   this.AV163ItemBusca = 0 ;
   this.ZV163ItemBusca = 0 ;
   this.OV163ItemBusca = 0 ;
   this.AV146ProdutoIdAux = 0 ;
   this.ZV146ProdutoIdAux = 0 ;
   this.OV146ProdutoIdAux = 0 ;
   this.AV147ProdutoDescricaoAux = "" ;
   this.ZV147ProdutoDescricaoAux = "" ;
   this.OV147ProdutoDescricaoAux = "" ;
   this.AV154Lote = "" ;
   this.ZV154Lote = "" ;
   this.OV154Lote = "" ;
   this.AV156SubGrupo = 0 ;
   this.ZV156SubGrupo = 0 ;
   this.OV156SubGrupo = 0 ;
   this.AV157Grupo = 0 ;
   this.ZV157Grupo = 0 ;
   this.OV157Grupo = 0 ;
   this.AV155CondProd = 0 ;
   this.ZV155CondProd = 0 ;
   this.OV155CondProd = 0 ;
   this.AV72NumPagina = 0 ;
   this.ZV72NumPagina = 0 ;
   this.OV72NumPagina = 0 ;
   this.ZV222GXV14T = false ;
   this.OV222GXV14T = false ;
   this.ZV223GXV14U = 0 ;
   this.OV223GXV14U = 0 ;
   this.ZV224GXV14V = "" ;
   this.OV224GXV14V = "" ;
   this.ZV78bmpObsProd = "" ;
   this.OV78bmpObsProd = "" ;
   this.ZV225GXV14X = "" ;
   this.OV225GXV14X = "" ;
   this.ZV226GXV14Y = 0 ;
   this.OV226GXV14Y = 0 ;
   this.ZV227GXV14Z = "" ;
   this.OV227GXV14Z = "" ;
   this.ZV197PromptMarca = "" ;
   this.OV197PromptMarca = "" ;
   this.ZV228GXV151 = 0 ;
   this.OV228GXV151 = 0 ;
   this.ZV229GXV152 = 0 ;
   this.OV229GXV152 = 0 ;
   this.ZV230GXV153 = 0 ;
   this.OV230GXV153 = 0 ;
   this.ZV231GXV154 = 0 ;
   this.OV231GXV154 = 0 ;
   this.ZV107bmpSnGanhador = "" ;
   this.OV107bmpSnGanhador = "" ;
   this.ZV181bmpLog = "" ;
   this.OV181bmpLog = "" ;
   this.ZV38bmpObs = "" ;
   this.OV38bmpObs = "" ;
   this.ZV20bmpAlt = "" ;
   this.OV20bmpAlt = "" ;
   this.ZV232GXV159 = 0 ;
   this.OV232GXV159 = 0 ;
   this.ZV233GXV15A = 0 ;
   this.OV233GXV15A = 0 ;
   this.ZV234GXV15B = "" ;
   this.OV234GXV15B = "" ;
   this.ZV235GXV15C = 0 ;
   this.OV235GXV15C = 0 ;
   this.ZV236GXV15D = 0 ;
   this.OV236GXV15D = 0 ;
   this.ZV237GXV15E = 0 ;
   this.OV237GXV15E = 0 ;
   this.ZV238GXV15F = 0 ;
   this.OV238GXV15F = 0 ;
   this.ZV239GXV15G = 0 ;
   this.OV239GXV15G = 0 ;
   this.AV200PaginaGrd2 = 0 ;
   this.ZV200PaginaGrd2 = 0 ;
   this.OV200PaginaGrd2 = 0 ;
   this.AV52SnFornecedor = "" ;
   this.ZV52SnFornecedor = "" ;
   this.OV52SnFornecedor = "" ;
   this.AV55SnFabricante = "" ;
   this.ZV55SnFabricante = "" ;
   this.OV55SnFabricante = "" ;
   this.AV51SnCliente = "" ;
   this.ZV51SnCliente = "" ;
   this.OV51SnCliente = "" ;
   this.AV184ProdutoReferencia = "" ;
   this.ZV184ProdutoReferencia = "" ;
   this.OV184ProdutoReferencia = "" ;
   this.AV188SNVenda = "" ;
   this.ZV188SNVenda = "" ;
   this.OV188SNVenda = "" ;
   this.AV183CodigoBarrasProdutoBarra = 0 ;
   this.ZV183CodigoBarrasProdutoBarra = 0 ;
   this.OV183CodigoBarrasProdutoBarra = 0 ;
   this.AV185IntAuxIn = 0 ;
   this.ZV185IntAuxIn = 0 ;
   this.OV185IntAuxIn = 0 ;
   this.AV70Pagina = 0 ;
   this.ZV70Pagina = 0 ;
   this.OV70Pagina = 0 ;
   this.AV191CtrlPag = 0 ;
   this.ZV191CtrlPag = 0 ;
   this.OV191CtrlPag = 0 ;
   this.AV192CtrlPag2 = 0 ;
   this.ZV192CtrlPag2 = 0 ;
   this.OV192CtrlPag2 = 0 ;
   this.AV97DeptoComprasCodigo = "" ;
   this.AV99SolicitanteNome = "" ;
   this.AV65FornecedorId = 0 ;
   this.AV22Fantasia = "" ;
   this.AV131ProdutoEmpresaId = "" ;
   this.AV116EmpresaPessoasEmpresaId = "" ;
   this.AV122Flag = "" ;
   this.AV128SnMarca = "" ;
   this.AV168SnMinimizar = "" ;
   this.AV158QtdeCaracteres = 0 ;
   this.AV103PessoaCodigo = 0 ;
   this.AV148PessoaBusca = 0 ;
   this.AV149PessoaNomeBusca = "" ;
   this.AV111CodFornecedorAux = 0 ;
   this.AV195RazaoAux = "" ;
   this.AV169TotalAvista = 0 ;
   this.AV170TotalAPrazo = 0 ;
   this.AV163ItemBusca = 0 ;
   this.AV146ProdutoIdAux = 0 ;
   this.AV147ProdutoDescricaoAux = "" ;
   this.AV154Lote = "" ;
   this.AV156SubGrupo = 0 ;
   this.AV157Grupo = 0 ;
   this.AV155CondProd = 0 ;
   this.AV72NumPagina = 0 ;
   this.AV200PaginaGrd2 = 0 ;
   this.AV52SnFornecedor = "" ;
   this.AV55SnFabricante = "" ;
   this.AV51SnCliente = "" ;
   this.AV184ProdutoReferencia = "" ;
   this.AV188SNVenda = "" ;
   this.AV183CodigoBarrasProdutoBarra = 0 ;
   this.AV185IntAuxIn = 0 ;
   this.AV70Pagina = 0 ;
   this.AV191CtrlPag = 0 ;
   this.AV192CtrlPag2 = 0 ;
   this.AV27EmpresaId = "" ;
   this.AV28SolicitacaoNumero = 0 ;
   this.AV29PessoaId = 0 ;
   this.AV58Mod = "" ;
   this.AV145Tela = "" ;
   this.GXV12A = "" ;
   this.AV24chek = "" ;
   this.AV64bmpCotacao = "" ;
   this.GXV12D = 0 ;
   this.GXV12E = "" ;
   this.GXV12F = "" ;
   this.GXV12G = "" ;
   this.GXV12H = "" ;
   this.GXV12I = "" ;
   this.GXV12J = "" ;
   this.GXV12K = 0 ;
   this.GXV12L = 0 ;
   this.GXV12M = 0 ;
   this.GXV12N = "" ;
   this.GXV12O = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A3393ProdutoUnidadeCompraId = "" ;
   this.GXV14T = false ;
   this.GXV14U = 0 ;
   this.GXV14V = "" ;
   this.AV78bmpObsProd = "" ;
   this.GXV14X = "" ;
   this.GXV14Y = 0 ;
   this.GXV14Z = "" ;
   this.AV197PromptMarca = "" ;
   this.GXV151 = 0 ;
   this.GXV152 = 0 ;
   this.GXV153 = 0 ;
   this.GXV154 = 0 ;
   this.AV107bmpSnGanhador = "" ;
   this.AV181bmpLog = "" ;
   this.AV38bmpObs = "" ;
   this.AV20bmpAlt = "" ;
   this.GXV159 = 0 ;
   this.GXV15A = 0 ;
   this.GXV15B = "" ;
   this.GXV15C = 0 ;
   this.GXV15D = 0 ;
   this.GXV15E = 0 ;
   this.GXV15F = 0 ;
   this.GXV15G = 0 ;
   this.A3392SolicitacaoItemSeq = 0 ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A4042SolicitacaoItemQtdePedida = 0 ;
   this.A4050SolicitacaoItemUnidade = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A3481CotacaoUsuarioAlt = "" ;
   this.A3397CotacaoSnGanhador = "" ;
   this.A3466CotacaoValorEncargos = 0 ;
   this.A3462CotacaoValorFrete = 0 ;
   this.A3467CotacaoValorSeguro = 0 ;
   this.A3479CotacaoValorTotalaPrazo = 0 ;
   this.A3473CotacaoValorTotalAVista = 0 ;
   this.A3394CotacaoMarca = "" ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A3395CotacaoValorAvista = 0 ;
   this.A3396CotacaoValoraPrazo = 0 ;
   this.A3482CotacaoDataHoraAlt = gx.date.nullDate() ;
   this.A3828ProdutoObservacao = "" ;
   this.A4049SolicitacaoItemObservacao = "" ;
   this.A2931OpcaoClassificacaoEstId = "" ;
   this.A2930ClassificacaoEstId = "" ;
   this.A2929ClassificacaoEstEmpresaId = "" ;
   this.A3535GeneroFornecedorGeneroId = "" ;
   this.A3534GeneroFornecedorPessoaId = 0 ;
   this.A3533GeneroFornecedorPessoaEmpId = "" ;
   this.A3527GeneroId = "" ;
   this.A3979ProdutoFornecedorProdutoId = 0 ;
   this.A3978ProdutoFornecedorProdutoEmpId = "" ;
   this.A3981ProdutoFornecedorPessoaId = 0 ;
   this.A3980ProdutoFornecedorPessoaEmpId = "" ;
   this.A72PessoaTelefone = "" ;
   this.A428PessoaTipoPessoa = "" ;
   this.A472PessoaCNPJ = "" ;
   this.A473PessoaCPF = "" ;
   this.A3104PessoaPrazoEntregaPadrao = "" ;
   this.A3103PessoaFormaPagtoPadrao = "" ;
   this.A3975ProdutoFornecedorPrazoEntrega = "" ;
   this.A71PessoaFantasia = "" ;
   this.A70PessoaRazaoSocial = "" ;
   this.A3453CotacaoNumeroFornecedor = "" ;
   this.A3454CotacaoEntrega = "" ;
   this.A3455CotacaoPagamento = "" ;
   this.A3845ProdutoFabricanteEmpId = "" ;
   this.A3398ProdutoFabricanteId = 0 ;
   this.A4051SolicitacaoItemUsuarioAlt = "" ;
   this.A3528GeneroFornecedorPessoaFantasia = "" ;
   this.A3529GeneroFornecedorPessoaRazao = "" ;
   this.A3966ProdutoFornecedorPessoaFantasi = "" ;
   this.A3965ProdutoFornecedorPessoaRazao = "" ;
   this.AV45Fornecedor = [ ] ;
   this.AV104Razao = "" ;
   this.AV86PessoaTelefone = "" ;
   this.AV106CNPJ = "" ;
   this.AV105CPF = "" ;
   this.AV132Pagamento = "" ;
   this.AV121SnValorPrazo = "" ;
   this.AV198SdtRegCotacao = [ ] ;
   this.AV143ClassProdMarca = "" ;
   this.AV164SnExisteMarca = "" ;
   this.AV193SNMarcaSolici = "" ;
   this.AV5UsrCod = "" ;
   this.AV144SnEntregaProduto = "" ;
   this.AV41ProdutoId = 0 ;
   this.AV60Pessoa = 0 ;
   this.AV117Entrega = "" ;
   this.AV73CotacaoTipo = "" ;
   this.AV172QtdeCotacao = 0 ;
   this.AV142ClassificacaoEstEmpresaId = "" ;
   this.AV32Marca = "" ;
   this.AV171ItemCotacao = 0 ;
   this.AV43SnErro = "" ;
   this.AV44FornecedorItem = {} ;
   this.AV282GXV14 = 0 ;
   this.Events = {"e11pw2_client": ["'FECHAR'", true] ,"e13pw2_client": ["'INCLUIRFORNECEDOR'", true] ,"e14pw2_client": ["'EXCLUIRFORNECEDOR'", true] ,"e37pw2_client": ["'COTACAO'", true] ,"e40pw2_client": ["'OBSCOTACAO'", true] ,"e41pw2_client": ["'ALTERARCOTACAO'", true] ,"e15pw2_client": ["'EXCLUIRPRODUTO'", true] ,"e16pw2_client": ["'SALVARGRIDCOTACAO'", true] ,"e42pw2_client": ["'DESCRICAOPRODUTO'", true] ,"e17pw2_client": ["'TRANSFERIRCOTACAO'", true] ,"e38pw2_client": ["'VISUALIZARCOTACAO'", true] ,"e18pw2_client": ["'REGISTRARGANHADOR'", true] ,"e19pw2_client": ["'REGISTRARDESEMPATE'", true] ,"e20pw2_client": ["'DESMARCARTODOSPRODUTOS'", true] ,"e21pw2_client": ["'MARCARTODOSPRODUTOS'", true] ,"e22pw2_client": ["'REGISTRARMARCA'", true] ,"e23pw2_client": ["'MINIMIZAR'", true] ,"e24pw2_client": ["'MAXIMIZAR'", true] ,"e25pw2_client": ["'FORNANTERIOR'", true] ,"e26pw2_client": ["'FORNPROXIMO'", true] ,"e27pw2_client": ["'ITEMANTERIOR'", true] ,"e28pw2_client": ["'ITEMPROXIMO'", true] ,"e12pw2_client": ["'PROCURAR'", true] ,"e29pw2_client": ["'PROCURARPESSOA'", true] ,"e30pw2_client": ["'ALTERARFORNECEDOR'", true] ,"e31pw2_client": ["'CONSULTALOGGERA'", true] ,"e43pw2_client": ["'CONSULTALOGITEMCOTACAO'", true] ,"e32pw2_client": ["'DESMARCARTODOS'", true] ,"e33pw2_client": ["'MARCARTODOS'", true] ,"e44pw2_client": ["ENTER", true] ,"e45pw2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV64bmpCotacao',fld:'vBMPCOTACAO'},{av:'gx.fn.getCtrlProperty("vBMPCOTACAO","Tooltiptext")',ctrl:'vBMPCOTACAO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vCHEK","Enabled")',ctrl:'vCHEK',prop:'Enabled'},{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'subGrid2_Rows'},{av:'AV20bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV38bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV197PromptMarca',fld:'vPROMPTMARCA'},{av:'gx.fn.getCtrlProperty("vBMPSNGANHADOR","Visible")',ctrl:'vBMPSNGANHADOR',prop:'Visible'},{av:'AV30Item',fld:'vITEM'},{av:'AV167ObsProdutoChar',fld:'vOBSPRODUTOCHAR'},{av:'AV110SolicitacaoItemSeq',fld:'vSOLICITACAOITEMSEQ'},{av:'A4049SolicitacaoItemObservacao',fld:'SOLICITACAOITEMOBSERVACAO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A3828ProdutoObservacao',fld:'PRODUTOOBSERVACAO'},{av:'AV111CodFornecedorAux',fld:'vCODFORNECEDORAUX'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV116EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV168SnMinimizar',fld:'vSNMINIMIZAR'},{av:'AV45Fornecedor',fld:'vFORNECEDOR',grid:81},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV27EmpresaId',fld:'vEMPRESAID',hsh:true},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV28SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3453CotacaoNumeroFornecedor',fld:'COTACAONUMEROFORNECEDOR'},{av:'A3454CotacaoEntrega',fld:'COTACAOENTREGA'},{av:'A3455CotacaoPagamento',fld:'COTACAOPAGAMENTO'},{av:'AV128SnMarca',fld:'vSNMARCA'},{av:'AV65FornecedorId',fld:'vFORNECEDORID'},{av:'AV22Fantasia',fld:'vFANTASIA'},{av:'AV104Razao',fld:'vRAZAO'},{av:'AV86PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV106CNPJ',fld:'vCNPJ'},{av:'AV105CPF',fld:'vCPF'},{av:'AV132Pagamento',fld:'vPAGAMENTO'},{av:'AV29PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV121SnValorPrazo',fld:'vSNVALORPRAZO'},{av:'AV58Mod',fld:'vMOD',hsh:true},{ctrl:'CTLORCAMENTO',prop:'Enabled'},{ctrl:'CTLPAGAMENTO',prop:'Enabled'},{ctrl:'CTLENTREGA',prop:'Enabled'},{av:'AV192CtrlPag2',fld:'vCTRLPAG2'},{ctrl:'GRID2',prop:'Rows'},{av:'AV198SdtRegCotacao',fld:'vSDTREGCOTACAO',grid:172},{av:'AV143ClassProdMarca',fld:'vCLASSPRODMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV193SNMarcaSolici',fld:'vSNMARCASOLICI'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV103PessoaCodigo',fld:'vPESSOACODIGO'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV144SnEntregaProduto',fld:'vSNENTREGAPRODUTO'},{av:'A3978ProdutoFornecedorProdutoEmpId',fld:'PRODUTOFORNECEDORPRODUTOEMPID'},{av:'AV131ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A3979ProdutoFornecedorProdutoId',fld:'PRODUTOFORNECEDORPRODUTOID'},{av:'AV41ProdutoId',fld:'vPRODUTOID'},{av:'A3980ProdutoFornecedorPessoaEmpId',fld:'PRODUTOFORNECEDORPESSOAEMPID'},{av:'A3981ProdutoFornecedorPessoaId',fld:'PRODUTOFORNECEDORPESSOAID'},{av:'AV60Pessoa',fld:'vPESSOA'},{av:'A3975ProdutoFornecedorPrazoEntrega',fld:'PRODUTOFORNECEDORPRAZOENTREGA'},{av:'AV117Entrega',fld:'vENTREGA'},{av:'A3104PessoaPrazoEntregaPadrao',fld:'PESSOAPRAZOENTREGAPADRAO'},{av:'A3103PessoaFormaPagtoPadrao',fld:'PESSOAFORMAPAGTOPADRAO'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV73CotacaoTipo',fld:'vCOTACAOTIPO'},{av:'AV191CtrlPag',fld:'vCTRLPAG'},{av:'A3482CotacaoDataHoraAlt',fld:'COTACAODATAHORAALT'},{av:'A3473CotacaoValorTotalAVista',fld:'COTACAOVALORTOTALAVISTA'},{av:'A3466CotacaoValorEncargos',fld:'COTACAOVALORENCARGOS'},{av:'A3462CotacaoValorFrete',fld:'COTACAOVALORFRETE'},{av:'A3467CotacaoValorSeguro',fld:'COTACAOVALORSEGURO'},{av:'AV172QtdeCotacao',fld:'vQTDECOTACAO'},{av:'A3479CotacaoValorTotalaPrazo',fld:'COTACAOVALORTOTALAPRAZO'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV142ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV171ItemCotacao',fld:'vITEMCOTACAO'},{av:'A4042SolicitacaoItemQtdePedida',fld:'SOLICITACAOITEMQTDEPEDIDA'}],[{av:'AV195RazaoAux',fld:'vRAZAOAUX'},{av:'gx.fn.getCtrlProperty("PROMPTPRODUTO","Visible")',ctrl:'PROMPTPRODUTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLE2","Visible")',ctrl:'TABLE2',prop:'Visible'},{ctrl:'GRID2',prop:'Rows'},{av:'AV247GXV3',fld:'vGXV3'},{av:'AV44FornecedorItem',fld:'vFORNECEDORITEM'},{av:'AV249GXV4',fld:'vGXV4'},{av:'AV24chek',fld:'vCHEK'},{av:'AV128SnMarca',fld:'vSNMARCA'},{av:'gx.fn.getCtrlProperty("TABELA2","Visible")',ctrl:'TABELA2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vFORNECEDORID","Visible")',ctrl:'vFORNECEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MINIMIZAR","Visible")',ctrl:'MINIMIZAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MAXIMIZAR","Visible")',ctrl:'MAXIMIZAR',prop:'Visible'},{ctrl:'BTNMARCARPRODUTO',prop:'Visible'},{ctrl:'BTNDESMARCARPROD',prop:'Visible'},{av:'AV103PessoaCodigo',fld:'vPESSOACODIGO'},{av:'AV179SplitFornecedorRet',fld:'vSPLITFORNECEDORRET'},{av:'AV250GXV5',fld:'vGXV5'},{av:'AV180FornecedorRetorno',fld:'vFORNECEDORRETORNO'},{av:'AV43SnErro',fld:'vSNERRO'},{av:'AV251GXV6',fld:'vGXV6'},{av:'AV60Pessoa',fld:'vPESSOA'},{av:'AV117Entrega',fld:'vENTREGA'},{av:'AV144SnEntregaProduto',fld:'vSNENTREGAPRODUTO'},{av:'AV45Fornecedor',fld:'vFORNECEDOR',grid:81},{av:'AV73CotacaoTipo',fld:'vCOTACAOTIPO'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK7","Visible")',ctrl:'TEXTBLOCK7',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCODFORNECEDORAUX","Visible")',ctrl:'vCODFORNECEDORAUX',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK2","Visible")',ctrl:'TEXTBLOCK2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK8","Visible")',ctrl:'TEXTBLOCK8',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTOTALAVISTA","Visible")',ctrl:'vTOTALAVISTA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTOTALAPRAZO","Visible")',ctrl:'vTOTALAPRAZO',prop:'Visible'},{av:'AV65FornecedorId',fld:'vFORNECEDORID'},{av:'AV111CodFornecedorAux',fld:'vCODFORNECEDORAUX'},{av:'AV112FantasiaAux',fld:'vFANTASIAAUX'},{ctrl:'CTLVALORPRAZO',prop:'Visible'},{ctrl:'CTLVALORTOTALPRAZO',prop:'Visible'},{av:'AV264GXV12',fld:'vGXV12'},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{av:'AV202QtdeRegPular',fld:'vQTDEREGPULAR'},{av:'AV203QtdeLinRest',fld:'vQTDELINREST'},{av:'AV265GXV13',fld:'vGXV13'},{av:'AV199SdtRegCotacaoItem',fld:'vSDTREGCOTACAOITEM'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV22Fantasia',fld:'vFANTASIA'},{av:'AV104Razao',fld:'vRAZAO'},{av:'AV86PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV105CPF',fld:'vCPF'},{av:'AV106CNPJ',fld:'vCNPJ'},{av:'AV132Pagamento',fld:'vPAGAMENTO'},{av:'AV41ProdutoId',fld:'vPRODUTOID'},{av:'AV191CtrlPag',fld:'vCTRLPAG'},{av:'AV189Res',fld:'vRES'},{av:'AV190ResInt',fld:'vRESINT'},{av:'AV70Pagina',fld:'vPAGINA'},{av:'gx.fn.getCtrlProperty("IMAGE2","Enabled")',ctrl:'IMAGE2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE3","Enabled")',ctrl:'IMAGE3',prop:'Enabled'},{av:'AV200PaginaGrd2',fld:'vPAGINAGRD2'},{av:'gx.fn.getCtrlProperty("IMAGE4","Enabled")',ctrl:'IMAGE4',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE5","Enabled")',ctrl:'IMAGE5',prop:'Enabled'},{av:'AV169TotalAvista',fld:'vTOTALAVISTA'},{av:'AV170TotalAPrazo',fld:'vTOTALAPRAZO'},{av:'AV171ItemCotacao',fld:'vITEMCOTACAO'},{av:'AV173TotalVistaAux',fld:'vTOTALVISTAAUX'},{av:'AV174TotalPrazoAux',fld:'vTOTALPRAZOAUX'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV172QtdeCotacao',fld:'vQTDECOTACAO'}]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'AV45Fornecedor',fld:'vFORNECEDOR',grid:81},{av:'AV58Mod',fld:'vMOD',hsh:true},{av:'AV65FornecedorId',fld:'vFORNECEDORID'}],[{ctrl:'CTLORCAMENTO',prop:'Enabled'},{av:'AV137SnSalvaForn',fld:'vSNSALVAFORN'},{ctrl:'CTLENTREGA',prop:'Enabled'},{ctrl:'CTLPAGAMENTO',prop:'Enabled'},{ctrl:'CTLFORNECEDORID',prop:'Fontbold'},{ctrl:'CTLFANTASIA',prop:'Fontbold'},{ctrl:'CTLRAZAO',prop:'Fontbold'},{ctrl:'CTLCPF',prop:'Fontbold'},{ctrl:'CTLCNPJ',prop:'Fontbold'},{ctrl:'CTLTELEFONE',prop:'Fontbold'},{ctrl:'CTLPAGAMENTO',prop:'Fontbold'},{ctrl:'CTLENTREGA',prop:'Fontbold'},{ctrl:'CTLORCAMENTO',prop:'Fontbold'},{av:'AV112FantasiaAux',fld:'vFANTASIAAUX'}]];
   this.EvtParms["GRID2.LOAD"] = [[{av:'AV30Item',fld:'vITEM'},{av:'AV198SdtRegCotacao',fld:'vSDTREGCOTACAO',grid:172},{av:'AV167ObsProdutoChar',fld:'vOBSPRODUTOCHAR'},{av:'AV28SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV27EmpresaId',fld:'vEMPRESAID',hsh:true},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ'},{av:'AV110SolicitacaoItemSeq',fld:'vSOLICITACAOITEMSEQ'},{av:'A4049SolicitacaoItemObservacao',fld:'SOLICITACAOITEMOBSERVACAO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV131ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV41ProdutoId',fld:'vPRODUTOID'},{av:'A3828ProdutoObservacao',fld:'PRODUTOOBSERVACAO'}],[{ctrl:'CTLSOLICITACAOITEMSEQ',prop:'Fontbold'},{ctrl:'CTLVALORTOTALVISTA',prop:'Fontbold'},{ctrl:'CTLVALORTOTALPRAZO',prop:'Fontbold'},{av:'AV110SolicitacaoItemSeq',fld:'vSOLICITACAOITEMSEQ'},{av:'AV41ProdutoId',fld:'vPRODUTOID'},{av:'AV78bmpObsProd',fld:'vBMPOBSPROD'},{av:'gx.fn.getCtrlProperty("vBMPOBSPROD","Tooltiptext")',ctrl:'vBMPOBSPROD',prop:'Tooltiptext'},{av:'AV181bmpLog',fld:'vBMPLOG'},{av:'gx.fn.getCtrlProperty("vBMPLOG","Tooltiptext")',ctrl:'vBMPLOG',prop:'Tooltiptext'},{av:'AV107bmpSnGanhador',fld:'vBMPSNGANHADOR'},{av:'AV140SolicitacaoItemSeqAux',fld:'vSOLICITACAOITEMSEQAUX'},{av:'AV141SolicitacaoNumeroAux',fld:'vSOLICITACAONUMEROAUX'},{av:'AV67ObsProduto',fld:'vOBSPRODUTO'},{av:'AV167ObsProdutoChar',fld:'vOBSPRODUTOCHAR'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV58Mod',fld:'vMOD',hsh:true},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{av:'AV145Tela',fld:'vTELA',hsh:true},{av:'AV45Fornecedor',fld:'vFORNECEDOR',grid:81},{ctrl:'CTLORCAMENTO',prop:'Enabled'},{ctrl:'CTLPAGAMENTO',prop:'Enabled'},{ctrl:'CTLENTREGA',prop:'Enabled'},{av:'AV27EmpresaId',fld:'vEMPRESAID',hsh:true},{av:'AV28SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'AV116EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV192CtrlPag2',fld:'vCTRLPAG2'},{ctrl:'GRID2',prop:'Rows'},{av:'AV198SdtRegCotacao',fld:'vSDTREGCOTACAO',grid:172},{av:'AV143ClassProdMarca',fld:'vCLASSPRODMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV193SNMarcaSolici',fld:'vSNMARCASOLICI'},{av:'AV65FornecedorId',fld:'vFORNECEDORID'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV142ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'},{av:'AV32Marca',fld:'vMARCA'}],[{av:'AV264GXV12',fld:'vGXV12'},{av:'AV44FornecedorItem',fld:'vFORNECEDORITEM'},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{av:'AV202QtdeRegPular',fld:'vQTDEREGPULAR'},{av:'AV203QtdeLinRest',fld:'vQTDELINREST'},{av:'AV265GXV13',fld:'vGXV13'},{av:'AV199SdtRegCotacaoItem',fld:'vSDTREGCOTACAOITEM'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'}]];
   this.EvtParms["'INCLUIRFORNECEDOR'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV64bmpCotacao',fld:'vBMPCOTACAO'},{av:'gx.fn.getCtrlProperty("vBMPCOTACAO","Tooltiptext")',ctrl:'vBMPCOTACAO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vCHEK","Enabled")',ctrl:'vCHEK',prop:'Enabled'},{av:'AV111CodFornecedorAux',fld:'vCODFORNECEDORAUX'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV116EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV168SnMinimizar',fld:'vSNMINIMIZAR'},{av:'AV45Fornecedor',fld:'vFORNECEDOR',grid:81},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV27EmpresaId',fld:'vEMPRESAID',hsh:true},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV28SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3453CotacaoNumeroFornecedor',fld:'COTACAONUMEROFORNECEDOR'},{av:'A3454CotacaoEntrega',fld:'COTACAOENTREGA'},{av:'A3455CotacaoPagamento',fld:'COTACAOPAGAMENTO'},{av:'AV128SnMarca',fld:'vSNMARCA'},{av:'AV65FornecedorId',fld:'vFORNECEDORID'},{av:'AV22Fantasia',fld:'vFANTASIA'},{av:'AV104Razao',fld:'vRAZAO'},{av:'AV86PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV106CNPJ',fld:'vCNPJ'},{av:'AV105CPF',fld:'vCPF'},{av:'AV132Pagamento',fld:'vPAGAMENTO'},{av:'AV29PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV121SnValorPrazo',fld:'vSNVALORPRAZO'},{av:'AV58Mod',fld:'vMOD',hsh:true},{av:'AV192CtrlPag2',fld:'vCTRLPAG2'},{av:'AV198SdtRegCotacao',fld:'vSDTREGCOTACAO',grid:172},{av:'AV143ClassProdMarca',fld:'vCLASSPRODMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV193SNMarcaSolici',fld:'vSNMARCASOLICI'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV103PessoaCodigo',fld:'vPESSOACODIGO'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV144SnEntregaProduto',fld:'vSNENTREGAPRODUTO'},{av:'A3978ProdutoFornecedorProdutoEmpId',fld:'PRODUTOFORNECEDORPRODUTOEMPID'},{av:'AV131ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A3979ProdutoFornecedorProdutoId',fld:'PRODUTOFORNECEDORPRODUTOID'},{av:'AV41ProdutoId',fld:'vPRODUTOID'},{av:'A3980ProdutoFornecedorPessoaEmpId',fld:'PRODUTOFORNECEDORPESSOAEMPID'},{av:'A3981ProdutoFornecedorPessoaId',fld:'PRODUTOFORNECEDORPESSOAID'},{av:'AV60Pessoa',fld:'vPESSOA'},{av:'A3975ProdutoFornecedorPrazoEntrega',fld:'PRODUTOFORNECEDORPRAZOENTREGA'},{av:'AV117Entrega',fld:'vENTREGA'},{av:'A3104PessoaPrazoEntregaPadrao',fld:'PESSOAPRAZOENTREGAPADRAO'},{av:'A3103PessoaFormaPagtoPadrao',fld:'PESSOAFORMAPAGTOPADRAO'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV73CotacaoTipo',fld:'vCOTACAOTIPO'},{av:'AV191CtrlPag',fld:'vCTRLPAG'},{av:'A3482CotacaoDataHoraAlt',fld:'COTACAODATAHORAALT'},{av:'A3473CotacaoValorTotalAVista',fld:'COTACAOVALORTOTALAVISTA'},{av:'A3466CotacaoValorEncargos',fld:'COTACAOVALORENCARGOS'},{av:'A3462CotacaoValorFrete',fld:'COTACAOVALORFRETE'},{av:'A3467CotacaoValorSeguro',fld:'COTACAOVALORSEGURO'},{av:'AV172QtdeCotacao',fld:'vQTDECOTACAO'},{av:'A3479CotacaoValorTotalaPrazo',fld:'COTACAOVALORTOTALAPRAZO'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV142ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV171ItemCotacao',fld:'vITEMCOTACAO'},{av:'A4042SolicitacaoItemQtdePedida',fld:'SOLICITACAOITEMQTDEPEDIDA'},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{ctrl:'CTLORCAMENTO',prop:'Enabled'},{ctrl:'CTLPAGAMENTO',prop:'Enabled'},{ctrl:'CTLENTREGA',prop:'Enabled'},{ctrl:'GRID2',prop:'Rows'}],[{av:'AV179SplitFornecedorRet',fld:'vSPLITFORNECEDORRET'},{av:'AV264GXV12',fld:'vGXV12'},{av:'AV44FornecedorItem',fld:'vFORNECEDORITEM'},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{av:'AV202QtdeRegPular',fld:'vQTDEREGPULAR'},{av:'AV203QtdeLinRest',fld:'vQTDELINREST'},{av:'AV265GXV13',fld:'vGXV13'},{av:'AV199SdtRegCotacaoItem',fld:'vSDTREGCOTACAOITEM'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'}]];
   this.EvtParms["'EXCLUIRFORNECEDOR'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV64bmpCotacao',fld:'vBMPCOTACAO',grid:81},{av:'gx.fn.getCtrlProperty("vBMPCOTACAO","Tooltiptext")',ctrl:'vBMPCOTACAO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vCHEK","Enabled")',ctrl:'vCHEK',prop:'Enabled'},{av:'AV111CodFornecedorAux',fld:'vCODFORNECEDORAUX'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV116EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV168SnMinimizar',fld:'vSNMINIMIZAR'},{av:'AV45Fornecedor',fld:'vFORNECEDOR',grid:81},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV27EmpresaId',fld:'vEMPRESAID',hsh:true},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV28SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3453CotacaoNumeroFornecedor',fld:'COTACAONUMEROFORNECEDOR'},{av:'A3454CotacaoEntrega',fld:'COTACAOENTREGA'},{av:'A3455CotacaoPagamento',fld:'COTACAOPAGAMENTO'},{av:'AV128SnMarca',fld:'vSNMARCA'},{av:'AV65FornecedorId',fld:'vFORNECEDORID'},{av:'AV22Fantasia',fld:'vFANTASIA'},{av:'AV104Razao',fld:'vRAZAO'},{av:'AV86PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV106CNPJ',fld:'vCNPJ'},{av:'AV105CPF',fld:'vCPF'},{av:'AV132Pagamento',fld:'vPAGAMENTO'},{av:'AV29PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV121SnValorPrazo',fld:'vSNVALORPRAZO'},{av:'AV58Mod',fld:'vMOD',hsh:true},{av:'AV192CtrlPag2',fld:'vCTRLPAG2'},{av:'AV198SdtRegCotacao',fld:'vSDTREGCOTACAO',grid:172},{av:'AV143ClassProdMarca',fld:'vCLASSPRODMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV193SNMarcaSolici',fld:'vSNMARCASOLICI'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV103PessoaCodigo',fld:'vPESSOACODIGO'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV144SnEntregaProduto',fld:'vSNENTREGAPRODUTO'},{av:'A3978ProdutoFornecedorProdutoEmpId',fld:'PRODUTOFORNECEDORPRODUTOEMPID'},{av:'AV131ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A3979ProdutoFornecedorProdutoId',fld:'PRODUTOFORNECEDORPRODUTOID'},{av:'AV41ProdutoId',fld:'vPRODUTOID'},{av:'A3980ProdutoFornecedorPessoaEmpId',fld:'PRODUTOFORNECEDORPESSOAEMPID'},{av:'A3981ProdutoFornecedorPessoaId',fld:'PRODUTOFORNECEDORPESSOAID'},{av:'AV60Pessoa',fld:'vPESSOA'},{av:'A3975ProdutoFornecedorPrazoEntrega',fld:'PRODUTOFORNECEDORPRAZOENTREGA'},{av:'AV117Entrega',fld:'vENTREGA'},{av:'A3104PessoaPrazoEntregaPadrao',fld:'PESSOAPRAZOENTREGAPADRAO'},{av:'A3103PessoaFormaPagtoPadrao',fld:'PESSOAFORMAPAGTOPADRAO'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV73CotacaoTipo',fld:'vCOTACAOTIPO'},{av:'AV191CtrlPag',fld:'vCTRLPAG'},{av:'A3482CotacaoDataHoraAlt',fld:'COTACAODATAHORAALT'},{av:'A3473CotacaoValorTotalAVista',fld:'COTACAOVALORTOTALAVISTA'},{av:'A3466CotacaoValorEncargos',fld:'COTACAOVALORENCARGOS'},{av:'A3462CotacaoValorFrete',fld:'COTACAOVALORFRETE'},{av:'A3467CotacaoValorSeguro',fld:'COTACAOVALORSEGURO'},{av:'AV172QtdeCotacao',fld:'vQTDECOTACAO'},{av:'A3479CotacaoValorTotalaPrazo',fld:'COTACAOVALORTOTALAPRAZO'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV142ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV171ItemCotacao',fld:'vITEMCOTACAO'},{av:'A4042SolicitacaoItemQtdePedida',fld:'SOLICITACAOITEMQTDEPEDIDA'},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{av:'AV24chek',fld:'vCHEK',grid:81},{av:'AV72NumPagina',fld:'vNUMPAGINA'},{av:'AV76j',fld:'vJ'},{ctrl:'CTLORCAMENTO',prop:'Enabled'},{ctrl:'CTLPAGAMENTO',prop:'Enabled'},{ctrl:'CTLENTREGA',prop:'Enabled'},{ctrl:'GRID2',prop:'Rows'}],[{av:'AV19i',fld:'vI'},{av:'AV77cont',fld:'vCONT'},{av:'AV138SnExcluirForn',fld:'vSNEXCLUIRFORN'},{av:'AV44FornecedorItem',fld:'vFORNECEDORITEM'},{av:'AV76j',fld:'vJ'},{av:'AV45Fornecedor',fld:'vFORNECEDOR',grid:81},{av:'AV190ResInt',fld:'vRESINT'},{av:'AV191CtrlPag',fld:'vCTRLPAG'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK7","Visible")',ctrl:'TEXTBLOCK7',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCODFORNECEDORAUX","Visible")',ctrl:'vCODFORNECEDORAUX',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vRAZAOAUX","Visible")',ctrl:'vRAZAOAUX',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK2","Visible")',ctrl:'TEXTBLOCK2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK8","Visible")',ctrl:'TEXTBLOCK8',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTOTALAVISTA","Visible")',ctrl:'vTOTALAVISTA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTOTALAPRAZO","Visible")',ctrl:'vTOTALAPRAZO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABELA2","Visible")',ctrl:'TABELA2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vFORNECEDORID","Visible")',ctrl:'vFORNECEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MINIMIZAR","Visible")',ctrl:'MINIMIZAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MAXIMIZAR","Visible")',ctrl:'MAXIMIZAR',prop:'Visible'},{ctrl:'BTNMARCARPRODUTO',prop:'Visible'},{ctrl:'BTNDESMARCARPROD',prop:'Visible'},{av:'AV264GXV12',fld:'vGXV12'},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{av:'AV202QtdeRegPular',fld:'vQTDEREGPULAR'},{av:'AV203QtdeLinRest',fld:'vQTDELINREST'},{av:'AV265GXV13',fld:'vGXV13'},{av:'AV199SdtRegCotacaoItem',fld:'vSDTREGCOTACAOITEM'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'}]];
   this.EvtParms["'COTACAO'"] = [[{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{av:'AV45Fornecedor',fld:'vFORNECEDOR',grid:81},{av:'AV29PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV58Mod',fld:'vMOD',hsh:true},{ctrl:'CTLORCAMENTO',prop:'Enabled'},{ctrl:'CTLPAGAMENTO',prop:'Enabled'},{ctrl:'CTLENTREGA',prop:'Enabled'},{av:'AV27EmpresaId',fld:'vEMPRESAID',hsh:true},{av:'AV28SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'AV116EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV192CtrlPag2',fld:'vCTRLPAG2'},{ctrl:'GRID2',prop:'Rows'},{av:'AV198SdtRegCotacao',fld:'vSDTREGCOTACAO',grid:172},{av:'AV143ClassProdMarca',fld:'vCLASSPRODMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV193SNMarcaSolici',fld:'vSNMARCASOLICI'},{av:'AV65FornecedorId',fld:'vFORNECEDORID'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV49SnGeneroFornec',fld:'vSNGENEROFORNEC'},{av:'AV73CotacaoTipo',fld:'vCOTACAOTIPO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV111CodFornecedorAux',fld:'vCODFORNECEDORAUX'},{av:'A3482CotacaoDataHoraAlt',fld:'COTACAODATAHORAALT'},{av:'A3473CotacaoValorTotalAVista',fld:'COTACAOVALORTOTALAVISTA'},{av:'A3466CotacaoValorEncargos',fld:'COTACAOVALORENCARGOS'},{av:'A3462CotacaoValorFrete',fld:'COTACAOVALORFRETE'},{av:'A3467CotacaoValorSeguro',fld:'COTACAOVALORSEGURO'},{av:'AV172QtdeCotacao',fld:'vQTDECOTACAO'},{av:'A3479CotacaoValorTotalaPrazo',fld:'COTACAOVALORTOTALAPRAZO'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV142ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV144SnEntregaProduto',fld:'vSNENTREGAPRODUTO'},{av:'A3978ProdutoFornecedorProdutoEmpId',fld:'PRODUTOFORNECEDORPRODUTOEMPID'},{av:'AV131ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A3979ProdutoFornecedorProdutoId',fld:'PRODUTOFORNECEDORPRODUTOID'},{av:'AV41ProdutoId',fld:'vPRODUTOID'},{av:'A3980ProdutoFornecedorPessoaEmpId',fld:'PRODUTOFORNECEDORPESSOAEMPID'},{av:'A3981ProdutoFornecedorPessoaId',fld:'PRODUTOFORNECEDORPESSOAID'},{av:'AV60Pessoa',fld:'vPESSOA'},{av:'A3975ProdutoFornecedorPrazoEntrega',fld:'PRODUTOFORNECEDORPRAZOENTREGA'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV117Entrega',fld:'vENTREGA'},{av:'A3104PessoaPrazoEntregaPadrao',fld:'PESSOAPRAZOENTREGAPADRAO'},{av:'A3103PessoaFormaPagtoPadrao',fld:'PESSOAFORMAPAGTOPADRAO'},{av:'AV66Sequencia',fld:'vSEQUENCIA'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A3527GeneroId',fld:'GENEROID'},{av:'A3533GeneroFornecedorPessoaEmpId',fld:'GENEROFORNECEDORPESSOAEMPID'},{av:'A3534GeneroFornecedorPessoaId',fld:'GENEROFORNECEDORPESSOAID'},{av:'A3535GeneroFornecedorGeneroId',fld:'GENEROFORNECEDORGENEROID'},{av:'AV171ItemCotacao',fld:'vITEMCOTACAO'},{av:'A4042SolicitacaoItemQtdePedida',fld:'SOLICITACAOITEMQTDEPEDIDA'}],[{av:'gx.fn.getCtrlProperty("TABELA2","Visible")',ctrl:'TABELA2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MINIMIZAR","Visible")',ctrl:'MINIMIZAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MAXIMIZAR","Visible")',ctrl:'MAXIMIZAR',prop:'Visible'},{ctrl:'BTNMARCARPRODUTO',prop:'Visible'},{ctrl:'BTNDESMARCARPROD',prop:'Visible'},{av:'AV65FornecedorId',fld:'vFORNECEDORID'},{av:'AV111CodFornecedorAux',fld:'vCODFORNECEDORAUX'},{av:'AV112FantasiaAux',fld:'vFANTASIAAUX'},{av:'AV73CotacaoTipo',fld:'vCOTACAOTIPO'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK7","Visible")',ctrl:'TEXTBLOCK7',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCODFORNECEDORAUX","Visible")',ctrl:'vCODFORNECEDORAUX',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK2","Visible")',ctrl:'TEXTBLOCK2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK8","Visible")',ctrl:'TEXTBLOCK8',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTOTALAVISTA","Visible")',ctrl:'vTOTALAVISTA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTOTALAPRAZO","Visible")',ctrl:'vTOTALAPRAZO',prop:'Visible'},{av:'AV264GXV12',fld:'vGXV12'},{av:'AV44FornecedorItem',fld:'vFORNECEDORITEM'},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{av:'AV202QtdeRegPular',fld:'vQTDEREGPULAR'},{av:'AV203QtdeLinRest',fld:'vQTDELINREST'},{av:'AV265GXV13',fld:'vGXV13'},{av:'AV199SdtRegCotacaoItem',fld:'vSDTREGCOTACAOITEM'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV66Sequencia',fld:'vSEQUENCIA'},{av:'AV41ProdutoId',fld:'vPRODUTOID'},{av:'AV43SnErro',fld:'vSNERRO'},{av:'AV60Pessoa',fld:'vPESSOA'},{av:'AV144SnEntregaProduto',fld:'vSNENTREGAPRODUTO'},{av:'AV117Entrega',fld:'vENTREGA'},{av:'AV132Pagamento',fld:'vPAGAMENTO'},{av:'AV169TotalAvista',fld:'vTOTALAVISTA'},{av:'AV170TotalAPrazo',fld:'vTOTALAPRAZO'},{av:'AV171ItemCotacao',fld:'vITEMCOTACAO'},{av:'AV173TotalVistaAux',fld:'vTOTALVISTAAUX'},{av:'AV174TotalPrazoAux',fld:'vTOTALPRAZOAUX'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV42Genero',fld:'vGENERO'},{av:'AV172QtdeCotacao',fld:'vQTDECOTACAO'}]];
   this.EvtParms["'OBSCOTACAO'"] = [[{av:'AV198SdtRegCotacao',fld:'vSDTREGCOTACAO',grid:172},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{av:'AV28SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'AV65FornecedorId',fld:'vFORNECEDORID'},{av:'AV27EmpresaId',fld:'vEMPRESAID',hsh:true},{av:'AV58Mod',fld:'vMOD',hsh:true},{av:'AV45Fornecedor',fld:'vFORNECEDOR',grid:81},{ctrl:'CTLORCAMENTO',prop:'Enabled'},{ctrl:'CTLPAGAMENTO',prop:'Enabled'},{ctrl:'CTLENTREGA',prop:'Enabled'},{av:'AV116EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV192CtrlPag2',fld:'vCTRLPAG2'},{ctrl:'GRID2',prop:'Rows'},{av:'AV143ClassProdMarca',fld:'vCLASSPRODMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV193SNMarcaSolici',fld:'vSNMARCASOLICI'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV142ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'},{av:'AV32Marca',fld:'vMARCA'}],[{av:'AV134ItemSequencia',fld:'vITEMSEQUENCIA'},{av:'AV264GXV12',fld:'vGXV12'},{av:'AV44FornecedorItem',fld:'vFORNECEDORITEM'},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{av:'AV202QtdeRegPular',fld:'vQTDEREGPULAR'},{av:'AV203QtdeLinRest',fld:'vQTDELINREST'},{av:'AV265GXV13',fld:'vGXV13'},{av:'AV199SdtRegCotacaoItem',fld:'vSDTREGCOTACAOITEM'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'}]];
   this.EvtParms["'ALTERARCOTACAO'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV64bmpCotacao',fld:'vBMPCOTACAO'},{av:'gx.fn.getCtrlProperty("vBMPCOTACAO","Tooltiptext")',ctrl:'vBMPCOTACAO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vCHEK","Enabled")',ctrl:'vCHEK',prop:'Enabled'},{av:'AV111CodFornecedorAux',fld:'vCODFORNECEDORAUX'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV116EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV168SnMinimizar',fld:'vSNMINIMIZAR'},{av:'AV45Fornecedor',fld:'vFORNECEDOR',grid:81},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV27EmpresaId',fld:'vEMPRESAID',hsh:true},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV28SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3453CotacaoNumeroFornecedor',fld:'COTACAONUMEROFORNECEDOR'},{av:'A3454CotacaoEntrega',fld:'COTACAOENTREGA'},{av:'A3455CotacaoPagamento',fld:'COTACAOPAGAMENTO'},{av:'AV128SnMarca',fld:'vSNMARCA'},{av:'AV65FornecedorId',fld:'vFORNECEDORID'},{av:'AV22Fantasia',fld:'vFANTASIA'},{av:'AV104Razao',fld:'vRAZAO'},{av:'AV86PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV106CNPJ',fld:'vCNPJ'},{av:'AV105CPF',fld:'vCPF'},{av:'AV132Pagamento',fld:'vPAGAMENTO'},{av:'AV29PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV121SnValorPrazo',fld:'vSNVALORPRAZO'},{av:'AV58Mod',fld:'vMOD',hsh:true},{av:'AV192CtrlPag2',fld:'vCTRLPAG2'},{av:'AV198SdtRegCotacao',fld:'vSDTREGCOTACAO',grid:172},{av:'AV143ClassProdMarca',fld:'vCLASSPRODMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV193SNMarcaSolici',fld:'vSNMARCASOLICI'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV103PessoaCodigo',fld:'vPESSOACODIGO'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV144SnEntregaProduto',fld:'vSNENTREGAPRODUTO'},{av:'A3978ProdutoFornecedorProdutoEmpId',fld:'PRODUTOFORNECEDORPRODUTOEMPID'},{av:'AV131ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A3979ProdutoFornecedorProdutoId',fld:'PRODUTOFORNECEDORPRODUTOID'},{av:'AV41ProdutoId',fld:'vPRODUTOID'},{av:'A3980ProdutoFornecedorPessoaEmpId',fld:'PRODUTOFORNECEDORPESSOAEMPID'},{av:'A3981ProdutoFornecedorPessoaId',fld:'PRODUTOFORNECEDORPESSOAID'},{av:'AV60Pessoa',fld:'vPESSOA'},{av:'A3975ProdutoFornecedorPrazoEntrega',fld:'PRODUTOFORNECEDORPRAZOENTREGA'},{av:'AV117Entrega',fld:'vENTREGA'},{av:'A3104PessoaPrazoEntregaPadrao',fld:'PESSOAPRAZOENTREGAPADRAO'},{av:'A3103PessoaFormaPagtoPadrao',fld:'PESSOAFORMAPAGTOPADRAO'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV73CotacaoTipo',fld:'vCOTACAOTIPO'},{av:'AV191CtrlPag',fld:'vCTRLPAG'},{av:'A3482CotacaoDataHoraAlt',fld:'COTACAODATAHORAALT'},{av:'A3473CotacaoValorTotalAVista',fld:'COTACAOVALORTOTALAVISTA'},{av:'A3466CotacaoValorEncargos',fld:'COTACAOVALORENCARGOS'},{av:'A3462CotacaoValorFrete',fld:'COTACAOVALORFRETE'},{av:'A3467CotacaoValorSeguro',fld:'COTACAOVALORSEGURO'},{av:'AV172QtdeCotacao',fld:'vQTDECOTACAO'},{av:'A3479CotacaoValorTotalaPrazo',fld:'COTACAOVALORTOTALAPRAZO'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV142ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV171ItemCotacao',fld:'vITEMCOTACAO'},{av:'A4042SolicitacaoItemQtdePedida',fld:'SOLICITACAOITEMQTDEPEDIDA'},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{ctrl:'CTLORCAMENTO',prop:'Enabled'},{ctrl:'CTLPAGAMENTO',prop:'Enabled'},{ctrl:'CTLENTREGA',prop:'Enabled'},{ctrl:'GRID2',prop:'Rows'}],[{av:'AV134ItemSequencia',fld:'vITEMSEQUENCIA'},{av:'AV264GXV12',fld:'vGXV12'},{av:'AV44FornecedorItem',fld:'vFORNECEDORITEM'},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{av:'AV202QtdeRegPular',fld:'vQTDEREGPULAR'},{av:'AV203QtdeLinRest',fld:'vQTDELINREST'},{av:'AV265GXV13',fld:'vGXV13'},{av:'AV199SdtRegCotacaoItem',fld:'vSDTREGCOTACAOITEM'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'}]];
   this.EvtParms["'EXCLUIRPRODUTO'"] = [[{av:'AV192CtrlPag2',fld:'vCTRLPAG2'},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{av:'AV198SdtRegCotacao',fld:'vSDTREGCOTACAO',grid:172},{av:'AV28SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'AV65FornecedorId',fld:'vFORNECEDORID'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV27EmpresaId',fld:'vEMPRESAID',hsh:true},{av:'AV73CotacaoTipo',fld:'vCOTACAOTIPO'},{av:'AV58Mod',fld:'vMOD',hsh:true},{av:'AV45Fornecedor',fld:'vFORNECEDOR',grid:81},{ctrl:'CTLORCAMENTO',prop:'Enabled'},{ctrl:'CTLPAGAMENTO',prop:'Enabled'},{ctrl:'CTLENTREGA',prop:'Enabled'},{av:'AV116EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{ctrl:'GRID2',prop:'Rows'},{av:'AV143ClassProdMarca',fld:'vCLASSPRODMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV193SNMarcaSolici',fld:'vSNMARCASOLICI'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ'},{av:'AV163ItemBusca',fld:'vITEMBUSCA'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV146ProdutoIdAux',fld:'vPRODUTOIDAUX'},{av:'A3481CotacaoUsuarioAlt',fld:'COTACAOUSUARIOALT'},{av:'A3397CotacaoSnGanhador',fld:'COTACAOSNGANHADOR'},{av:'A3466CotacaoValorEncargos',fld:'COTACAOVALORENCARGOS'},{av:'A3462CotacaoValorFrete',fld:'COTACAOVALORFRETE'},{av:'A3467CotacaoValorSeguro',fld:'COTACAOVALORSEGURO'},{av:'A3479CotacaoValorTotalaPrazo',fld:'COTACAOVALORTOTALAPRAZO'},{av:'A3473CotacaoValorTotalAVista',fld:'COTACAOVALORTOTALAVISTA'},{av:'A3394CotacaoMarca',fld:'COTACAOMARCA'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'AV108Qtde',fld:'vQTDE'},{av:'AV204UnidadeId',fld:'vUNIDADEID'},{av:'A3395CotacaoValorAvista',fld:'COTACAOVALORAVISTA'},{av:'A3396CotacaoValoraPrazo',fld:'COTACAOVALORAPRAZO'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV142ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV110SolicitacaoItemSeq',fld:'vSOLICITACAOITEMSEQ'},{av:'A4042SolicitacaoItemQtdePedida',fld:'SOLICITACAOITEMQTDEPEDIDA'},{av:'A4050SolicitacaoItemUnidade',fld:'SOLICITACAOITEMUNIDADE'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV131ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV41ProdutoId',fld:'vPRODUTOID'},{av:'A3393ProdutoUnidadeCompraId',fld:'PRODUTOUNIDADECOMPRAID'},{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'subGrid2_Rows'},{av:'AV20bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV38bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV197PromptMarca',fld:'vPROMPTMARCA'},{av:'gx.fn.getCtrlProperty("vBMPSNGANHADOR","Visible")',ctrl:'vBMPSNGANHADOR',prop:'Visible'},{av:'AV111CodFornecedorAux',fld:'vCODFORNECEDORAUX'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV168SnMinimizar',fld:'vSNMINIMIZAR'},{av:'A3453CotacaoNumeroFornecedor',fld:'COTACAONUMEROFORNECEDOR'},{av:'A3454CotacaoEntrega',fld:'COTACAOENTREGA'},{av:'A3455CotacaoPagamento',fld:'COTACAOPAGAMENTO'},{av:'AV128SnMarca',fld:'vSNMARCA'},{av:'AV22Fantasia',fld:'vFANTASIA'},{av:'AV104Razao',fld:'vRAZAO'},{av:'AV86PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV106CNPJ',fld:'vCNPJ'},{av:'AV105CPF',fld:'vCPF'},{av:'AV132Pagamento',fld:'vPAGAMENTO'},{av:'AV29PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV121SnValorPrazo',fld:'vSNVALORPRAZO'},{av:'AV103PessoaCodigo',fld:'vPESSOACODIGO'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV144SnEntregaProduto',fld:'vSNENTREGAPRODUTO'},{av:'A3978ProdutoFornecedorProdutoEmpId',fld:'PRODUTOFORNECEDORPRODUTOEMPID'},{av:'A3979ProdutoFornecedorProdutoId',fld:'PRODUTOFORNECEDORPRODUTOID'},{av:'A3980ProdutoFornecedorPessoaEmpId',fld:'PRODUTOFORNECEDORPESSOAEMPID'},{av:'A3981ProdutoFornecedorPessoaId',fld:'PRODUTOFORNECEDORPESSOAID'},{av:'AV60Pessoa',fld:'vPESSOA'},{av:'A3975ProdutoFornecedorPrazoEntrega',fld:'PRODUTOFORNECEDORPRAZOENTREGA'},{av:'AV117Entrega',fld:'vENTREGA'},{av:'A3104PessoaPrazoEntregaPadrao',fld:'PESSOAPRAZOENTREGAPADRAO'},{av:'A3103PessoaFormaPagtoPadrao',fld:'PESSOAFORMAPAGTOPADRAO'},{av:'AV191CtrlPag',fld:'vCTRLPAG'},{av:'A3482CotacaoDataHoraAlt',fld:'COTACAODATAHORAALT'},{av:'AV172QtdeCotacao',fld:'vQTDECOTACAO'},{av:'AV171ItemCotacao',fld:'vITEMCOTACAO'},{av:'AV30Item',fld:'vITEM'},{av:'AV167ObsProdutoChar',fld:'vOBSPRODUTOCHAR'},{av:'A4049SolicitacaoItemObservacao',fld:'SOLICITACAOITEMOBSERVACAO'},{av:'A3828ProdutoObservacao',fld:'PRODUTOOBSERVACAO'}],[{av:'AV201PagAtu',fld:'vPAGATU'},{av:'AV196hasReg',fld:'vHASREG'},{av:'AV257GXV7',fld:'vGXV7'},{av:'AV199SdtRegCotacaoItem',fld:'vSDTREGCOTACAOITEM'},{av:'AV264GXV12',fld:'vGXV12'},{av:'AV44FornecedorItem',fld:'vFORNECEDORITEM'},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{av:'AV202QtdeRegPular',fld:'vQTDEREGPULAR'},{av:'AV203QtdeLinRest',fld:'vQTDELINREST'},{av:'AV265GXV13',fld:'vGXV13'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV198SdtRegCotacao',fld:'vSDTREGCOTACAO',grid:172},{av:'AV110SolicitacaoItemSeq',fld:'vSOLICITACAOITEMSEQ'},{av:'AV41ProdutoId',fld:'vPRODUTOID'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV108Qtde',fld:'vQTDE'},{av:'AV204UnidadeId',fld:'vUNIDADEID'}]];
   this.EvtParms["'SALVARGRIDCOTACAO'"] = [[{av:'AV58Mod',fld:'vMOD',hsh:true},{av:'AV45Fornecedor',fld:'vFORNECEDOR',grid:81},{ctrl:'CTLORCAMENTO',prop:'Enabled'},{ctrl:'CTLPAGAMENTO',prop:'Enabled'},{ctrl:'CTLENTREGA',prop:'Enabled'},{av:'AV27EmpresaId',fld:'vEMPRESAID',hsh:true},{av:'AV28SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'AV116EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV192CtrlPag2',fld:'vCTRLPAG2'},{ctrl:'GRID2',prop:'Rows'},{av:'AV198SdtRegCotacao',fld:'vSDTREGCOTACAO',grid:172},{av:'AV143ClassProdMarca',fld:'vCLASSPRODMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV193SNMarcaSolici',fld:'vSNMARCASOLICI'},{av:'AV65FornecedorId',fld:'vFORNECEDORID'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV142ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'},{av:'AV32Marca',fld:'vMARCA'}],[{av:'AV201PagAtu',fld:'vPAGATU'},{av:'AV264GXV12',fld:'vGXV12'},{av:'AV44FornecedorItem',fld:'vFORNECEDORITEM'},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{av:'AV202QtdeRegPular',fld:'vQTDEREGPULAR'},{av:'AV203QtdeLinRest',fld:'vQTDELINREST'},{av:'AV265GXV13',fld:'vGXV13'},{av:'AV199SdtRegCotacaoItem',fld:'vSDTREGCOTACAOITEM'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'}]];
   this.EvtParms["'DESCRICAOPRODUTO'"] = [[{av:'AV198SdtRegCotacao',fld:'vSDTREGCOTACAO',grid:172},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{av:'AV28SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'AV58Mod',fld:'vMOD',hsh:true},{av:'AV45Fornecedor',fld:'vFORNECEDOR',grid:81},{ctrl:'CTLORCAMENTO',prop:'Enabled'},{ctrl:'CTLPAGAMENTO',prop:'Enabled'},{ctrl:'CTLENTREGA',prop:'Enabled'},{av:'AV27EmpresaId',fld:'vEMPRESAID',hsh:true},{av:'AV116EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV192CtrlPag2',fld:'vCTRLPAG2'},{ctrl:'GRID2',prop:'Rows'},{av:'AV143ClassProdMarca',fld:'vCLASSPRODMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV193SNMarcaSolici',fld:'vSNMARCASOLICI'},{av:'AV65FornecedorId',fld:'vFORNECEDORID'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV142ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'},{av:'AV32Marca',fld:'vMARCA'}],[{av:'AV134ItemSequencia',fld:'vITEMSEQUENCIA'},{av:'AV41ProdutoId',fld:'vPRODUTOID'},{av:'AV264GXV12',fld:'vGXV12'},{av:'AV44FornecedorItem',fld:'vFORNECEDORITEM'},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{av:'AV202QtdeRegPular',fld:'vQTDEREGPULAR'},{av:'AV203QtdeLinRest',fld:'vQTDELINREST'},{av:'AV265GXV13',fld:'vGXV13'},{av:'AV199SdtRegCotacaoItem',fld:'vSDTREGCOTACAOITEM'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'}]];
   this.EvtParms["'TRANSFERIRCOTACAO'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV64bmpCotacao',fld:'vBMPCOTACAO'},{av:'gx.fn.getCtrlProperty("vBMPCOTACAO","Tooltiptext")',ctrl:'vBMPCOTACAO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vCHEK","Enabled")',ctrl:'vCHEK',prop:'Enabled'},{av:'AV111CodFornecedorAux',fld:'vCODFORNECEDORAUX'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV116EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV168SnMinimizar',fld:'vSNMINIMIZAR'},{av:'AV45Fornecedor',fld:'vFORNECEDOR',grid:81},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV27EmpresaId',fld:'vEMPRESAID',hsh:true},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV28SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3453CotacaoNumeroFornecedor',fld:'COTACAONUMEROFORNECEDOR'},{av:'A3454CotacaoEntrega',fld:'COTACAOENTREGA'},{av:'A3455CotacaoPagamento',fld:'COTACAOPAGAMENTO'},{av:'AV128SnMarca',fld:'vSNMARCA'},{av:'AV65FornecedorId',fld:'vFORNECEDORID'},{av:'AV22Fantasia',fld:'vFANTASIA'},{av:'AV104Razao',fld:'vRAZAO'},{av:'AV86PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV106CNPJ',fld:'vCNPJ'},{av:'AV105CPF',fld:'vCPF'},{av:'AV132Pagamento',fld:'vPAGAMENTO'},{av:'AV29PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV121SnValorPrazo',fld:'vSNVALORPRAZO'},{av:'AV58Mod',fld:'vMOD',hsh:true},{av:'AV192CtrlPag2',fld:'vCTRLPAG2'},{av:'AV198SdtRegCotacao',fld:'vSDTREGCOTACAO',grid:172},{av:'AV143ClassProdMarca',fld:'vCLASSPRODMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV193SNMarcaSolici',fld:'vSNMARCASOLICI'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV103PessoaCodigo',fld:'vPESSOACODIGO'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV144SnEntregaProduto',fld:'vSNENTREGAPRODUTO'},{av:'A3978ProdutoFornecedorProdutoEmpId',fld:'PRODUTOFORNECEDORPRODUTOEMPID'},{av:'AV131ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A3979ProdutoFornecedorProdutoId',fld:'PRODUTOFORNECEDORPRODUTOID'},{av:'AV41ProdutoId',fld:'vPRODUTOID'},{av:'A3980ProdutoFornecedorPessoaEmpId',fld:'PRODUTOFORNECEDORPESSOAEMPID'},{av:'A3981ProdutoFornecedorPessoaId',fld:'PRODUTOFORNECEDORPESSOAID'},{av:'AV60Pessoa',fld:'vPESSOA'},{av:'A3975ProdutoFornecedorPrazoEntrega',fld:'PRODUTOFORNECEDORPRAZOENTREGA'},{av:'AV117Entrega',fld:'vENTREGA'},{av:'A3104PessoaPrazoEntregaPadrao',fld:'PESSOAPRAZOENTREGAPADRAO'},{av:'A3103PessoaFormaPagtoPadrao',fld:'PESSOAFORMAPAGTOPADRAO'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV73CotacaoTipo',fld:'vCOTACAOTIPO'},{av:'AV191CtrlPag',fld:'vCTRLPAG'},{av:'A3482CotacaoDataHoraAlt',fld:'COTACAODATAHORAALT'},{av:'A3473CotacaoValorTotalAVista',fld:'COTACAOVALORTOTALAVISTA'},{av:'A3466CotacaoValorEncargos',fld:'COTACAOVALORENCARGOS'},{av:'A3462CotacaoValorFrete',fld:'COTACAOVALORFRETE'},{av:'A3467CotacaoValorSeguro',fld:'COTACAOVALORSEGURO'},{av:'AV172QtdeCotacao',fld:'vQTDECOTACAO'},{av:'A3479CotacaoValorTotalaPrazo',fld:'COTACAOVALORTOTALAPRAZO'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV142ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV171ItemCotacao',fld:'vITEMCOTACAO'},{av:'A4042SolicitacaoItemQtdePedida',fld:'SOLICITACAOITEMQTDEPEDIDA'},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{av:'AV99SolicitanteNome',fld:'vSOLICITANTENOME'},{av:'AV97DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{ctrl:'CTLORCAMENTO',prop:'Enabled'},{ctrl:'CTLPAGAMENTO',prop:'Enabled'},{ctrl:'CTLENTREGA',prop:'Enabled'},{ctrl:'GRID2',prop:'Rows'}],[{av:'AV264GXV12',fld:'vGXV12'},{av:'AV44FornecedorItem',fld:'vFORNECEDORITEM'},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{av:'AV202QtdeRegPular',fld:'vQTDEREGPULAR'},{av:'AV203QtdeLinRest',fld:'vQTDELINREST'},{av:'AV265GXV13',fld:'vGXV13'},{av:'AV199SdtRegCotacaoItem',fld:'vSDTREGCOTACAOITEM'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'}]];
   this.EvtParms["'VISUALIZARCOTACAO'"] = [[{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'subGrid2_Rows'},{av:'AV20bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV38bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV197PromptMarca',fld:'vPROMPTMARCA'},{av:'gx.fn.getCtrlProperty("vBMPSNGANHADOR","Visible")',ctrl:'vBMPSNGANHADOR',prop:'Visible'},{av:'AV111CodFornecedorAux',fld:'vCODFORNECEDORAUX'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV116EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV168SnMinimizar',fld:'vSNMINIMIZAR'},{av:'AV45Fornecedor',fld:'vFORNECEDOR',grid:81},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV27EmpresaId',fld:'vEMPRESAID',hsh:true},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV28SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3453CotacaoNumeroFornecedor',fld:'COTACAONUMEROFORNECEDOR'},{av:'A3454CotacaoEntrega',fld:'COTACAOENTREGA'},{av:'A3455CotacaoPagamento',fld:'COTACAOPAGAMENTO'},{av:'AV128SnMarca',fld:'vSNMARCA'},{av:'AV65FornecedorId',fld:'vFORNECEDORID'},{av:'AV22Fantasia',fld:'vFANTASIA'},{av:'AV104Razao',fld:'vRAZAO'},{av:'AV86PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV106CNPJ',fld:'vCNPJ'},{av:'AV105CPF',fld:'vCPF'},{av:'AV132Pagamento',fld:'vPAGAMENTO'},{av:'AV29PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV121SnValorPrazo',fld:'vSNVALORPRAZO'},{av:'AV58Mod',fld:'vMOD',hsh:true},{av:'AV192CtrlPag2',fld:'vCTRLPAG2'},{av:'AV198SdtRegCotacao',fld:'vSDTREGCOTACAO',grid:172},{av:'AV143ClassProdMarca',fld:'vCLASSPRODMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV193SNMarcaSolici',fld:'vSNMARCASOLICI'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV103PessoaCodigo',fld:'vPESSOACODIGO'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV144SnEntregaProduto',fld:'vSNENTREGAPRODUTO'},{av:'A3978ProdutoFornecedorProdutoEmpId',fld:'PRODUTOFORNECEDORPRODUTOEMPID'},{av:'AV131ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A3979ProdutoFornecedorProdutoId',fld:'PRODUTOFORNECEDORPRODUTOID'},{av:'AV41ProdutoId',fld:'vPRODUTOID'},{av:'A3980ProdutoFornecedorPessoaEmpId',fld:'PRODUTOFORNECEDORPESSOAEMPID'},{av:'A3981ProdutoFornecedorPessoaId',fld:'PRODUTOFORNECEDORPESSOAID'},{av:'AV60Pessoa',fld:'vPESSOA'},{av:'A3975ProdutoFornecedorPrazoEntrega',fld:'PRODUTOFORNECEDORPRAZOENTREGA'},{av:'AV117Entrega',fld:'vENTREGA'},{av:'A3104PessoaPrazoEntregaPadrao',fld:'PESSOAPRAZOENTREGAPADRAO'},{av:'A3103PessoaFormaPagtoPadrao',fld:'PESSOAFORMAPAGTOPADRAO'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV73CotacaoTipo',fld:'vCOTACAOTIPO'},{av:'AV191CtrlPag',fld:'vCTRLPAG'},{av:'A3482CotacaoDataHoraAlt',fld:'COTACAODATAHORAALT'},{av:'A3473CotacaoValorTotalAVista',fld:'COTACAOVALORTOTALAVISTA'},{av:'A3466CotacaoValorEncargos',fld:'COTACAOVALORENCARGOS'},{av:'A3462CotacaoValorFrete',fld:'COTACAOVALORFRETE'},{av:'A3467CotacaoValorSeguro',fld:'COTACAOVALORSEGURO'},{av:'AV172QtdeCotacao',fld:'vQTDECOTACAO'},{av:'A3479CotacaoValorTotalaPrazo',fld:'COTACAOVALORTOTALAPRAZO'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV142ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV171ItemCotacao',fld:'vITEMCOTACAO'},{av:'A4042SolicitacaoItemQtdePedida',fld:'SOLICITACAOITEMQTDEPEDIDA'},{av:'AV30Item',fld:'vITEM'},{av:'AV167ObsProdutoChar',fld:'vOBSPRODUTOCHAR'},{av:'AV110SolicitacaoItemSeq',fld:'vSOLICITACAOITEMSEQ'},{av:'A4049SolicitacaoItemObservacao',fld:'SOLICITACAOITEMOBSERVACAO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A3828ProdutoObservacao',fld:'PRODUTOOBSERVACAO'},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{ctrl:'CTLORCAMENTO',prop:'Enabled'},{ctrl:'CTLPAGAMENTO',prop:'Enabled'},{ctrl:'CTLENTREGA',prop:'Enabled'},{ctrl:'GRID2',prop:'Rows'},{av:'AV49SnGeneroFornec',fld:'vSNGENEROFORNEC'},{av:'AV163ItemBusca',fld:'vITEMBUSCA'},{av:'AV146ProdutoIdAux',fld:'vPRODUTOIDAUX'},{av:'A3481CotacaoUsuarioAlt',fld:'COTACAOUSUARIOALT'},{av:'A3397CotacaoSnGanhador',fld:'COTACAOSNGANHADOR'},{av:'A3394CotacaoMarca',fld:'COTACAOMARCA'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'AV108Qtde',fld:'vQTDE'},{av:'AV204UnidadeId',fld:'vUNIDADEID'},{av:'A3395CotacaoValorAvista',fld:'COTACAOVALORAVISTA'},{av:'A3396CotacaoValoraPrazo',fld:'COTACAOVALORAPRAZO'},{av:'AV66Sequencia',fld:'vSEQUENCIA'},{av:'A3527GeneroId',fld:'GENEROID'},{av:'A3533GeneroFornecedorPessoaEmpId',fld:'GENEROFORNECEDORPESSOAEMPID'},{av:'A3534GeneroFornecedorPessoaId',fld:'GENEROFORNECEDORPESSOAID'},{av:'A3535GeneroFornecedorGeneroId',fld:'GENEROFORNECEDORGENEROID'},{av:'A4050SolicitacaoItemUnidade',fld:'SOLICITACAOITEMUNIDADE'},{av:'A3393ProdutoUnidadeCompraId',fld:'PRODUTOUNIDADECOMPRAID'}],[{av:'gx.fn.getCtrlProperty("TABELA2","Visible")',ctrl:'TABELA2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MINIMIZAR","Visible")',ctrl:'MINIMIZAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MAXIMIZAR","Visible")',ctrl:'MAXIMIZAR',prop:'Visible'},{ctrl:'BTNMARCARPRODUTO',prop:'Visible'},{ctrl:'BTNDESMARCARPROD',prop:'Visible'},{av:'AV65FornecedorId',fld:'vFORNECEDORID'},{av:'AV111CodFornecedorAux',fld:'vCODFORNECEDORAUX'},{av:'AV112FantasiaAux',fld:'vFANTASIAAUX'},{av:'AV192CtrlPag2',fld:'vCTRLPAG2'},{av:'AV73CotacaoTipo',fld:'vCOTACAOTIPO'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK7","Visible")',ctrl:'TEXTBLOCK7',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK2","Visible")',ctrl:'TEXTBLOCK2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK8","Visible")',ctrl:'TEXTBLOCK8',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTOTALAVISTA","Visible")',ctrl:'vTOTALAVISTA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTOTALAPRAZO","Visible")',ctrl:'vTOTALAPRAZO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCODFORNECEDORAUX","Visible")',ctrl:'vCODFORNECEDORAUX',prop:'Visible'},{av:'AV264GXV12',fld:'vGXV12'},{av:'AV44FornecedorItem',fld:'vFORNECEDORITEM'},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{av:'AV202QtdeRegPular',fld:'vQTDEREGPULAR'},{av:'AV203QtdeLinRest',fld:'vQTDELINREST'},{av:'AV265GXV13',fld:'vGXV13'},{av:'AV199SdtRegCotacaoItem',fld:'vSDTREGCOTACAOITEM'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV66Sequencia',fld:'vSEQUENCIA'},{av:'AV41ProdutoId',fld:'vPRODUTOID'},{av:'AV43SnErro',fld:'vSNERRO'},{av:'AV60Pessoa',fld:'vPESSOA'},{av:'AV144SnEntregaProduto',fld:'vSNENTREGAPRODUTO'},{av:'AV117Entrega',fld:'vENTREGA'},{av:'AV132Pagamento',fld:'vPAGAMENTO'},{av:'AV169TotalAvista',fld:'vTOTALAVISTA'},{av:'AV170TotalAPrazo',fld:'vTOTALAPRAZO'},{av:'AV171ItemCotacao',fld:'vITEMCOTACAO'},{av:'AV173TotalVistaAux',fld:'vTOTALVISTAAUX'},{av:'AV174TotalPrazoAux',fld:'vTOTALPRAZOAUX'},{av:'AV198SdtRegCotacao',fld:'vSDTREGCOTACAO',grid:172},{av:'AV110SolicitacaoItemSeq',fld:'vSOLICITACAOITEMSEQ'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV42Genero',fld:'vGENERO'},{av:'AV172QtdeCotacao',fld:'vQTDECOTACAO'},{av:'AV108Qtde',fld:'vQTDE'},{av:'AV204UnidadeId',fld:'vUNIDADEID'}]];
   this.EvtParms["'REGISTRARGANHADOR'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV64bmpCotacao',fld:'vBMPCOTACAO'},{av:'gx.fn.getCtrlProperty("vBMPCOTACAO","Tooltiptext")',ctrl:'vBMPCOTACAO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vCHEK","Enabled")',ctrl:'vCHEK',prop:'Enabled'},{av:'AV111CodFornecedorAux',fld:'vCODFORNECEDORAUX'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV116EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV168SnMinimizar',fld:'vSNMINIMIZAR'},{av:'AV45Fornecedor',fld:'vFORNECEDOR',grid:81},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV27EmpresaId',fld:'vEMPRESAID',hsh:true},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV28SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3453CotacaoNumeroFornecedor',fld:'COTACAONUMEROFORNECEDOR'},{av:'A3454CotacaoEntrega',fld:'COTACAOENTREGA'},{av:'A3455CotacaoPagamento',fld:'COTACAOPAGAMENTO'},{av:'AV128SnMarca',fld:'vSNMARCA'},{av:'AV65FornecedorId',fld:'vFORNECEDORID'},{av:'AV22Fantasia',fld:'vFANTASIA'},{av:'AV104Razao',fld:'vRAZAO'},{av:'AV86PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV106CNPJ',fld:'vCNPJ'},{av:'AV105CPF',fld:'vCPF'},{av:'AV132Pagamento',fld:'vPAGAMENTO'},{av:'AV29PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV121SnValorPrazo',fld:'vSNVALORPRAZO'},{av:'AV58Mod',fld:'vMOD',hsh:true},{av:'AV192CtrlPag2',fld:'vCTRLPAG2'},{av:'AV198SdtRegCotacao',fld:'vSDTREGCOTACAO',grid:172},{av:'AV143ClassProdMarca',fld:'vCLASSPRODMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV193SNMarcaSolici',fld:'vSNMARCASOLICI'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV103PessoaCodigo',fld:'vPESSOACODIGO'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV144SnEntregaProduto',fld:'vSNENTREGAPRODUTO'},{av:'A3978ProdutoFornecedorProdutoEmpId',fld:'PRODUTOFORNECEDORPRODUTOEMPID'},{av:'AV131ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A3979ProdutoFornecedorProdutoId',fld:'PRODUTOFORNECEDORPRODUTOID'},{av:'AV41ProdutoId',fld:'vPRODUTOID'},{av:'A3980ProdutoFornecedorPessoaEmpId',fld:'PRODUTOFORNECEDORPESSOAEMPID'},{av:'A3981ProdutoFornecedorPessoaId',fld:'PRODUTOFORNECEDORPESSOAID'},{av:'AV60Pessoa',fld:'vPESSOA'},{av:'A3975ProdutoFornecedorPrazoEntrega',fld:'PRODUTOFORNECEDORPRAZOENTREGA'},{av:'AV117Entrega',fld:'vENTREGA'},{av:'A3104PessoaPrazoEntregaPadrao',fld:'PESSOAPRAZOENTREGAPADRAO'},{av:'A3103PessoaFormaPagtoPadrao',fld:'PESSOAFORMAPAGTOPADRAO'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV73CotacaoTipo',fld:'vCOTACAOTIPO'},{av:'AV191CtrlPag',fld:'vCTRLPAG'},{av:'A3482CotacaoDataHoraAlt',fld:'COTACAODATAHORAALT'},{av:'A3473CotacaoValorTotalAVista',fld:'COTACAOVALORTOTALAVISTA'},{av:'A3466CotacaoValorEncargos',fld:'COTACAOVALORENCARGOS'},{av:'A3462CotacaoValorFrete',fld:'COTACAOVALORFRETE'},{av:'A3467CotacaoValorSeguro',fld:'COTACAOVALORSEGURO'},{av:'AV172QtdeCotacao',fld:'vQTDECOTACAO'},{av:'A3479CotacaoValorTotalaPrazo',fld:'COTACAOVALORTOTALAPRAZO'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV142ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV171ItemCotacao',fld:'vITEMCOTACAO'},{av:'A4042SolicitacaoItemQtdePedida',fld:'SOLICITACAOITEMQTDEPEDIDA'},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{ctrl:'CTLORCAMENTO',prop:'Enabled'},{ctrl:'CTLPAGAMENTO',prop:'Enabled'},{ctrl:'CTLENTREGA',prop:'Enabled'},{ctrl:'GRID2',prop:'Rows'}],[{av:'AV264GXV12',fld:'vGXV12'},{av:'AV44FornecedorItem',fld:'vFORNECEDORITEM'},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{av:'AV202QtdeRegPular',fld:'vQTDEREGPULAR'},{av:'AV203QtdeLinRest',fld:'vQTDELINREST'},{av:'AV265GXV13',fld:'vGXV13'},{av:'AV199SdtRegCotacaoItem',fld:'vSDTREGCOTACAOITEM'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'}]];
   this.EvtParms["'REGISTRARDESEMPATE'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV64bmpCotacao',fld:'vBMPCOTACAO'},{av:'gx.fn.getCtrlProperty("vBMPCOTACAO","Tooltiptext")',ctrl:'vBMPCOTACAO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vCHEK","Enabled")',ctrl:'vCHEK',prop:'Enabled'},{av:'AV111CodFornecedorAux',fld:'vCODFORNECEDORAUX'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV116EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV168SnMinimizar',fld:'vSNMINIMIZAR'},{av:'AV45Fornecedor',fld:'vFORNECEDOR',grid:81},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV27EmpresaId',fld:'vEMPRESAID',hsh:true},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV28SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3453CotacaoNumeroFornecedor',fld:'COTACAONUMEROFORNECEDOR'},{av:'A3454CotacaoEntrega',fld:'COTACAOENTREGA'},{av:'A3455CotacaoPagamento',fld:'COTACAOPAGAMENTO'},{av:'AV128SnMarca',fld:'vSNMARCA'},{av:'AV65FornecedorId',fld:'vFORNECEDORID'},{av:'AV22Fantasia',fld:'vFANTASIA'},{av:'AV104Razao',fld:'vRAZAO'},{av:'AV86PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV106CNPJ',fld:'vCNPJ'},{av:'AV105CPF',fld:'vCPF'},{av:'AV132Pagamento',fld:'vPAGAMENTO'},{av:'AV29PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV121SnValorPrazo',fld:'vSNVALORPRAZO'},{av:'AV58Mod',fld:'vMOD',hsh:true},{av:'AV192CtrlPag2',fld:'vCTRLPAG2'},{av:'AV198SdtRegCotacao',fld:'vSDTREGCOTACAO',grid:172},{av:'AV143ClassProdMarca',fld:'vCLASSPRODMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV193SNMarcaSolici',fld:'vSNMARCASOLICI'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV103PessoaCodigo',fld:'vPESSOACODIGO'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV144SnEntregaProduto',fld:'vSNENTREGAPRODUTO'},{av:'A3978ProdutoFornecedorProdutoEmpId',fld:'PRODUTOFORNECEDORPRODUTOEMPID'},{av:'AV131ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A3979ProdutoFornecedorProdutoId',fld:'PRODUTOFORNECEDORPRODUTOID'},{av:'AV41ProdutoId',fld:'vPRODUTOID'},{av:'A3980ProdutoFornecedorPessoaEmpId',fld:'PRODUTOFORNECEDORPESSOAEMPID'},{av:'A3981ProdutoFornecedorPessoaId',fld:'PRODUTOFORNECEDORPESSOAID'},{av:'AV60Pessoa',fld:'vPESSOA'},{av:'A3975ProdutoFornecedorPrazoEntrega',fld:'PRODUTOFORNECEDORPRAZOENTREGA'},{av:'AV117Entrega',fld:'vENTREGA'},{av:'A3104PessoaPrazoEntregaPadrao',fld:'PESSOAPRAZOENTREGAPADRAO'},{av:'A3103PessoaFormaPagtoPadrao',fld:'PESSOAFORMAPAGTOPADRAO'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV73CotacaoTipo',fld:'vCOTACAOTIPO'},{av:'AV191CtrlPag',fld:'vCTRLPAG'},{av:'A3482CotacaoDataHoraAlt',fld:'COTACAODATAHORAALT'},{av:'A3473CotacaoValorTotalAVista',fld:'COTACAOVALORTOTALAVISTA'},{av:'A3466CotacaoValorEncargos',fld:'COTACAOVALORENCARGOS'},{av:'A3462CotacaoValorFrete',fld:'COTACAOVALORFRETE'},{av:'A3467CotacaoValorSeguro',fld:'COTACAOVALORSEGURO'},{av:'AV172QtdeCotacao',fld:'vQTDECOTACAO'},{av:'A3479CotacaoValorTotalaPrazo',fld:'COTACAOVALORTOTALAPRAZO'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV142ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV171ItemCotacao',fld:'vITEMCOTACAO'},{av:'A4042SolicitacaoItemQtdePedida',fld:'SOLICITACAOITEMQTDEPEDIDA'},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{av:'AV122Flag',fld:'vFLAG'},{ctrl:'CTLORCAMENTO',prop:'Enabled'},{ctrl:'CTLPAGAMENTO',prop:'Enabled'},{ctrl:'CTLENTREGA',prop:'Enabled'},{ctrl:'GRID2',prop:'Rows'},{av:'A4051SolicitacaoItemUsuarioAlt',fld:'SOLICITACAOITEMUSUARIOALT'},{av:'AV125MenorValor',fld:'vMENORVALOR'},{av:'AV124Preco',fld:'vPRECO'},{av:'AV123ItemDesempate',fld:'vITEMDESEMPATE'},{av:'AV127contDesempate',fld:'vCONTDESEMPATE'}],[{av:'AV122Flag',fld:'vFLAG'},{av:'AV264GXV12',fld:'vGXV12'},{av:'AV44FornecedorItem',fld:'vFORNECEDORITEM'},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{av:'AV202QtdeRegPular',fld:'vQTDEREGPULAR'},{av:'AV203QtdeLinRest',fld:'vQTDELINREST'},{av:'AV265GXV13',fld:'vGXV13'},{av:'AV199SdtRegCotacaoItem',fld:'vSDTREGCOTACAOITEM'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV123ItemDesempate',fld:'vITEMDESEMPATE'},{av:'AV127contDesempate',fld:'vCONTDESEMPATE'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV125MenorValor',fld:'vMENORVALOR'}]];
   this.EvtParms["'DESMARCARTODOS'"] = [[{av:'AV45Fornecedor',fld:'vFORNECEDOR',grid:81}],[{av:'AV258GXV8',fld:'vGXV8'},{av:'AV44FornecedorItem',fld:'vFORNECEDORITEM'},{av:'AV24chek',fld:'vCHEK'}]];
   this.EvtParms["'MARCARTODOS'"] = [[{av:'AV45Fornecedor',fld:'vFORNECEDOR',grid:81}],[{av:'AV259GXV9',fld:'vGXV9'},{av:'AV44FornecedorItem',fld:'vFORNECEDORITEM'},{av:'AV24chek',fld:'vCHEK'},{av:'AV128SnMarca',fld:'vSNMARCA'}]];
   this.EvtParms["'DESMARCARTODOSPRODUTOS'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV64bmpCotacao',fld:'vBMPCOTACAO'},{av:'gx.fn.getCtrlProperty("vBMPCOTACAO","Tooltiptext")',ctrl:'vBMPCOTACAO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vCHEK","Enabled")',ctrl:'vCHEK',prop:'Enabled'},{av:'AV111CodFornecedorAux',fld:'vCODFORNECEDORAUX'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV116EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV168SnMinimizar',fld:'vSNMINIMIZAR'},{av:'AV45Fornecedor',fld:'vFORNECEDOR',grid:81},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV27EmpresaId',fld:'vEMPRESAID',hsh:true},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV28SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3453CotacaoNumeroFornecedor',fld:'COTACAONUMEROFORNECEDOR'},{av:'A3454CotacaoEntrega',fld:'COTACAOENTREGA'},{av:'A3455CotacaoPagamento',fld:'COTACAOPAGAMENTO'},{av:'AV128SnMarca',fld:'vSNMARCA'},{av:'AV65FornecedorId',fld:'vFORNECEDORID'},{av:'AV22Fantasia',fld:'vFANTASIA'},{av:'AV104Razao',fld:'vRAZAO'},{av:'AV86PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV106CNPJ',fld:'vCNPJ'},{av:'AV105CPF',fld:'vCPF'},{av:'AV132Pagamento',fld:'vPAGAMENTO'},{av:'AV29PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV121SnValorPrazo',fld:'vSNVALORPRAZO'},{av:'AV58Mod',fld:'vMOD',hsh:true},{av:'AV192CtrlPag2',fld:'vCTRLPAG2'},{av:'AV198SdtRegCotacao',fld:'vSDTREGCOTACAO',grid:172},{av:'AV143ClassProdMarca',fld:'vCLASSPRODMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV193SNMarcaSolici',fld:'vSNMARCASOLICI'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV103PessoaCodigo',fld:'vPESSOACODIGO'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV144SnEntregaProduto',fld:'vSNENTREGAPRODUTO'},{av:'A3978ProdutoFornecedorProdutoEmpId',fld:'PRODUTOFORNECEDORPRODUTOEMPID'},{av:'AV131ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A3979ProdutoFornecedorProdutoId',fld:'PRODUTOFORNECEDORPRODUTOID'},{av:'AV41ProdutoId',fld:'vPRODUTOID'},{av:'A3980ProdutoFornecedorPessoaEmpId',fld:'PRODUTOFORNECEDORPESSOAEMPID'},{av:'A3981ProdutoFornecedorPessoaId',fld:'PRODUTOFORNECEDORPESSOAID'},{av:'AV60Pessoa',fld:'vPESSOA'},{av:'A3975ProdutoFornecedorPrazoEntrega',fld:'PRODUTOFORNECEDORPRAZOENTREGA'},{av:'AV117Entrega',fld:'vENTREGA'},{av:'A3104PessoaPrazoEntregaPadrao',fld:'PESSOAPRAZOENTREGAPADRAO'},{av:'A3103PessoaFormaPagtoPadrao',fld:'PESSOAFORMAPAGTOPADRAO'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV73CotacaoTipo',fld:'vCOTACAOTIPO'},{av:'AV191CtrlPag',fld:'vCTRLPAG'},{av:'A3482CotacaoDataHoraAlt',fld:'COTACAODATAHORAALT'},{av:'A3473CotacaoValorTotalAVista',fld:'COTACAOVALORTOTALAVISTA'},{av:'A3466CotacaoValorEncargos',fld:'COTACAOVALORENCARGOS'},{av:'A3462CotacaoValorFrete',fld:'COTACAOVALORFRETE'},{av:'A3467CotacaoValorSeguro',fld:'COTACAOVALORSEGURO'},{av:'AV172QtdeCotacao',fld:'vQTDECOTACAO'},{av:'A3479CotacaoValorTotalaPrazo',fld:'COTACAOVALORTOTALAPRAZO'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV142ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV171ItemCotacao',fld:'vITEMCOTACAO'},{av:'A4042SolicitacaoItemQtdePedida',fld:'SOLICITACAOITEMQTDEPEDIDA'}],[{av:'AV260GXV10',fld:'vGXV10'},{av:'AV199SdtRegCotacaoItem',fld:'vSDTREGCOTACAOITEM'}]];
   this.EvtParms["'MARCARTODOSPRODUTOS'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV64bmpCotacao',fld:'vBMPCOTACAO'},{av:'gx.fn.getCtrlProperty("vBMPCOTACAO","Tooltiptext")',ctrl:'vBMPCOTACAO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vCHEK","Enabled")',ctrl:'vCHEK',prop:'Enabled'},{av:'AV111CodFornecedorAux',fld:'vCODFORNECEDORAUX'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV116EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV168SnMinimizar',fld:'vSNMINIMIZAR'},{av:'AV45Fornecedor',fld:'vFORNECEDOR',grid:81},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV27EmpresaId',fld:'vEMPRESAID',hsh:true},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV28SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3453CotacaoNumeroFornecedor',fld:'COTACAONUMEROFORNECEDOR'},{av:'A3454CotacaoEntrega',fld:'COTACAOENTREGA'},{av:'A3455CotacaoPagamento',fld:'COTACAOPAGAMENTO'},{av:'AV128SnMarca',fld:'vSNMARCA'},{av:'AV65FornecedorId',fld:'vFORNECEDORID'},{av:'AV22Fantasia',fld:'vFANTASIA'},{av:'AV104Razao',fld:'vRAZAO'},{av:'AV86PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV106CNPJ',fld:'vCNPJ'},{av:'AV105CPF',fld:'vCPF'},{av:'AV132Pagamento',fld:'vPAGAMENTO'},{av:'AV29PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV121SnValorPrazo',fld:'vSNVALORPRAZO'},{av:'AV58Mod',fld:'vMOD',hsh:true},{av:'AV192CtrlPag2',fld:'vCTRLPAG2'},{av:'AV198SdtRegCotacao',fld:'vSDTREGCOTACAO',grid:172},{av:'AV143ClassProdMarca',fld:'vCLASSPRODMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV193SNMarcaSolici',fld:'vSNMARCASOLICI'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV103PessoaCodigo',fld:'vPESSOACODIGO'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV144SnEntregaProduto',fld:'vSNENTREGAPRODUTO'},{av:'A3978ProdutoFornecedorProdutoEmpId',fld:'PRODUTOFORNECEDORPRODUTOEMPID'},{av:'AV131ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A3979ProdutoFornecedorProdutoId',fld:'PRODUTOFORNECEDORPRODUTOID'},{av:'AV41ProdutoId',fld:'vPRODUTOID'},{av:'A3980ProdutoFornecedorPessoaEmpId',fld:'PRODUTOFORNECEDORPESSOAEMPID'},{av:'A3981ProdutoFornecedorPessoaId',fld:'PRODUTOFORNECEDORPESSOAID'},{av:'AV60Pessoa',fld:'vPESSOA'},{av:'A3975ProdutoFornecedorPrazoEntrega',fld:'PRODUTOFORNECEDORPRAZOENTREGA'},{av:'AV117Entrega',fld:'vENTREGA'},{av:'A3104PessoaPrazoEntregaPadrao',fld:'PESSOAPRAZOENTREGAPADRAO'},{av:'A3103PessoaFormaPagtoPadrao',fld:'PESSOAFORMAPAGTOPADRAO'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV73CotacaoTipo',fld:'vCOTACAOTIPO'},{av:'AV191CtrlPag',fld:'vCTRLPAG'},{av:'A3482CotacaoDataHoraAlt',fld:'COTACAODATAHORAALT'},{av:'A3473CotacaoValorTotalAVista',fld:'COTACAOVALORTOTALAVISTA'},{av:'A3466CotacaoValorEncargos',fld:'COTACAOVALORENCARGOS'},{av:'A3462CotacaoValorFrete',fld:'COTACAOVALORFRETE'},{av:'A3467CotacaoValorSeguro',fld:'COTACAOVALORSEGURO'},{av:'AV172QtdeCotacao',fld:'vQTDECOTACAO'},{av:'A3479CotacaoValorTotalaPrazo',fld:'COTACAOVALORTOTALAPRAZO'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV142ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV171ItemCotacao',fld:'vITEMCOTACAO'},{av:'A4042SolicitacaoItemQtdePedida',fld:'SOLICITACAOITEMQTDEPEDIDA'}],[{av:'AV261GXV11',fld:'vGXV11'},{av:'AV199SdtRegCotacaoItem',fld:'vSDTREGCOTACAOITEM'}]];
   this.EvtParms["'REGISTRARMARCA'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV64bmpCotacao',fld:'vBMPCOTACAO'},{av:'gx.fn.getCtrlProperty("vBMPCOTACAO","Tooltiptext")',ctrl:'vBMPCOTACAO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vCHEK","Enabled")',ctrl:'vCHEK',prop:'Enabled'},{av:'AV111CodFornecedorAux',fld:'vCODFORNECEDORAUX'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV116EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV168SnMinimizar',fld:'vSNMINIMIZAR'},{av:'AV45Fornecedor',fld:'vFORNECEDOR',grid:81},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV27EmpresaId',fld:'vEMPRESAID',hsh:true},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV28SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3453CotacaoNumeroFornecedor',fld:'COTACAONUMEROFORNECEDOR'},{av:'A3454CotacaoEntrega',fld:'COTACAOENTREGA'},{av:'A3455CotacaoPagamento',fld:'COTACAOPAGAMENTO'},{av:'AV128SnMarca',fld:'vSNMARCA'},{av:'AV65FornecedorId',fld:'vFORNECEDORID'},{av:'AV22Fantasia',fld:'vFANTASIA'},{av:'AV104Razao',fld:'vRAZAO'},{av:'AV86PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV106CNPJ',fld:'vCNPJ'},{av:'AV105CPF',fld:'vCPF'},{av:'AV132Pagamento',fld:'vPAGAMENTO'},{av:'AV29PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV121SnValorPrazo',fld:'vSNVALORPRAZO'},{av:'AV58Mod',fld:'vMOD',hsh:true},{av:'AV192CtrlPag2',fld:'vCTRLPAG2'},{av:'AV198SdtRegCotacao',fld:'vSDTREGCOTACAO',grid:172},{av:'AV143ClassProdMarca',fld:'vCLASSPRODMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV193SNMarcaSolici',fld:'vSNMARCASOLICI'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV103PessoaCodigo',fld:'vPESSOACODIGO'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV144SnEntregaProduto',fld:'vSNENTREGAPRODUTO'},{av:'A3978ProdutoFornecedorProdutoEmpId',fld:'PRODUTOFORNECEDORPRODUTOEMPID'},{av:'AV131ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A3979ProdutoFornecedorProdutoId',fld:'PRODUTOFORNECEDORPRODUTOID'},{av:'AV41ProdutoId',fld:'vPRODUTOID'},{av:'A3980ProdutoFornecedorPessoaEmpId',fld:'PRODUTOFORNECEDORPESSOAEMPID'},{av:'A3981ProdutoFornecedorPessoaId',fld:'PRODUTOFORNECEDORPESSOAID'},{av:'AV60Pessoa',fld:'vPESSOA'},{av:'A3975ProdutoFornecedorPrazoEntrega',fld:'PRODUTOFORNECEDORPRAZOENTREGA'},{av:'AV117Entrega',fld:'vENTREGA'},{av:'A3104PessoaPrazoEntregaPadrao',fld:'PESSOAPRAZOENTREGAPADRAO'},{av:'A3103PessoaFormaPagtoPadrao',fld:'PESSOAFORMAPAGTOPADRAO'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV73CotacaoTipo',fld:'vCOTACAOTIPO'},{av:'AV191CtrlPag',fld:'vCTRLPAG'},{av:'A3482CotacaoDataHoraAlt',fld:'COTACAODATAHORAALT'},{av:'A3473CotacaoValorTotalAVista',fld:'COTACAOVALORTOTALAVISTA'},{av:'A3466CotacaoValorEncargos',fld:'COTACAOVALORENCARGOS'},{av:'A3462CotacaoValorFrete',fld:'COTACAOVALORFRETE'},{av:'A3467CotacaoValorSeguro',fld:'COTACAOVALORSEGURO'},{av:'AV172QtdeCotacao',fld:'vQTDECOTACAO'},{av:'A3479CotacaoValorTotalaPrazo',fld:'COTACAOVALORTOTALAPRAZO'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV142ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV171ItemCotacao',fld:'vITEMCOTACAO'},{av:'A4042SolicitacaoItemQtdePedida',fld:'SOLICITACAOITEMQTDEPEDIDA'}],[]];
   this.EvtParms["'MINIMIZAR'"] = [[{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'subGrid2_Rows'},{av:'AV20bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV38bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV197PromptMarca',fld:'vPROMPTMARCA'},{av:'gx.fn.getCtrlProperty("vBMPSNGANHADOR","Visible")',ctrl:'vBMPSNGANHADOR',prop:'Visible'},{av:'AV111CodFornecedorAux',fld:'vCODFORNECEDORAUX'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV116EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV168SnMinimizar',fld:'vSNMINIMIZAR'},{av:'AV45Fornecedor',fld:'vFORNECEDOR',grid:81},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV27EmpresaId',fld:'vEMPRESAID',hsh:true},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV28SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3453CotacaoNumeroFornecedor',fld:'COTACAONUMEROFORNECEDOR'},{av:'A3454CotacaoEntrega',fld:'COTACAOENTREGA'},{av:'A3455CotacaoPagamento',fld:'COTACAOPAGAMENTO'},{av:'AV128SnMarca',fld:'vSNMARCA'},{av:'AV65FornecedorId',fld:'vFORNECEDORID'},{av:'AV22Fantasia',fld:'vFANTASIA'},{av:'AV104Razao',fld:'vRAZAO'},{av:'AV86PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV106CNPJ',fld:'vCNPJ'},{av:'AV105CPF',fld:'vCPF'},{av:'AV132Pagamento',fld:'vPAGAMENTO'},{av:'AV29PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV121SnValorPrazo',fld:'vSNVALORPRAZO'},{av:'AV58Mod',fld:'vMOD',hsh:true},{av:'AV192CtrlPag2',fld:'vCTRLPAG2'},{av:'AV198SdtRegCotacao',fld:'vSDTREGCOTACAO',grid:172},{av:'AV143ClassProdMarca',fld:'vCLASSPRODMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV193SNMarcaSolici',fld:'vSNMARCASOLICI'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV103PessoaCodigo',fld:'vPESSOACODIGO'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV144SnEntregaProduto',fld:'vSNENTREGAPRODUTO'},{av:'A3978ProdutoFornecedorProdutoEmpId',fld:'PRODUTOFORNECEDORPRODUTOEMPID'},{av:'AV131ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A3979ProdutoFornecedorProdutoId',fld:'PRODUTOFORNECEDORPRODUTOID'},{av:'AV41ProdutoId',fld:'vPRODUTOID'},{av:'A3980ProdutoFornecedorPessoaEmpId',fld:'PRODUTOFORNECEDORPESSOAEMPID'},{av:'A3981ProdutoFornecedorPessoaId',fld:'PRODUTOFORNECEDORPESSOAID'},{av:'AV60Pessoa',fld:'vPESSOA'},{av:'A3975ProdutoFornecedorPrazoEntrega',fld:'PRODUTOFORNECEDORPRAZOENTREGA'},{av:'AV117Entrega',fld:'vENTREGA'},{av:'A3104PessoaPrazoEntregaPadrao',fld:'PESSOAPRAZOENTREGAPADRAO'},{av:'A3103PessoaFormaPagtoPadrao',fld:'PESSOAFORMAPAGTOPADRAO'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV73CotacaoTipo',fld:'vCOTACAOTIPO'},{av:'AV191CtrlPag',fld:'vCTRLPAG'},{av:'A3482CotacaoDataHoraAlt',fld:'COTACAODATAHORAALT'},{av:'A3473CotacaoValorTotalAVista',fld:'COTACAOVALORTOTALAVISTA'},{av:'A3466CotacaoValorEncargos',fld:'COTACAOVALORENCARGOS'},{av:'A3462CotacaoValorFrete',fld:'COTACAOVALORFRETE'},{av:'A3467CotacaoValorSeguro',fld:'COTACAOVALORSEGURO'},{av:'AV172QtdeCotacao',fld:'vQTDECOTACAO'},{av:'A3479CotacaoValorTotalaPrazo',fld:'COTACAOVALORTOTALAPRAZO'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV142ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV171ItemCotacao',fld:'vITEMCOTACAO'},{av:'A4042SolicitacaoItemQtdePedida',fld:'SOLICITACAOITEMQTDEPEDIDA'},{av:'AV30Item',fld:'vITEM'},{av:'AV167ObsProdutoChar',fld:'vOBSPRODUTOCHAR'},{av:'AV110SolicitacaoItemSeq',fld:'vSOLICITACAOITEMSEQ'},{av:'A4049SolicitacaoItemObservacao',fld:'SOLICITACAOITEMOBSERVACAO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A3828ProdutoObservacao',fld:'PRODUTOOBSERVACAO'}],[{av:'gx.fn.getCtrlProperty("TABLE2","Visible")',ctrl:'TABLE2',prop:'Visible'},{ctrl:'GRID2',prop:'Rows'},{av:'AV168SnMinimizar',fld:'vSNMINIMIZAR'},{av:'AV192CtrlPag2',fld:'vCTRLPAG2'}]];
   this.EvtParms["'MAXIMIZAR'"] = [[{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'subGrid2_Rows'},{av:'AV20bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV38bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV197PromptMarca',fld:'vPROMPTMARCA'},{av:'gx.fn.getCtrlProperty("vBMPSNGANHADOR","Visible")',ctrl:'vBMPSNGANHADOR',prop:'Visible'},{av:'AV111CodFornecedorAux',fld:'vCODFORNECEDORAUX'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV116EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV168SnMinimizar',fld:'vSNMINIMIZAR'},{av:'AV45Fornecedor',fld:'vFORNECEDOR',grid:81},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV27EmpresaId',fld:'vEMPRESAID',hsh:true},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV28SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3453CotacaoNumeroFornecedor',fld:'COTACAONUMEROFORNECEDOR'},{av:'A3454CotacaoEntrega',fld:'COTACAOENTREGA'},{av:'A3455CotacaoPagamento',fld:'COTACAOPAGAMENTO'},{av:'AV128SnMarca',fld:'vSNMARCA'},{av:'AV65FornecedorId',fld:'vFORNECEDORID'},{av:'AV22Fantasia',fld:'vFANTASIA'},{av:'AV104Razao',fld:'vRAZAO'},{av:'AV86PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV106CNPJ',fld:'vCNPJ'},{av:'AV105CPF',fld:'vCPF'},{av:'AV132Pagamento',fld:'vPAGAMENTO'},{av:'AV29PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV121SnValorPrazo',fld:'vSNVALORPRAZO'},{av:'AV58Mod',fld:'vMOD',hsh:true},{av:'AV192CtrlPag2',fld:'vCTRLPAG2'},{av:'AV198SdtRegCotacao',fld:'vSDTREGCOTACAO',grid:172},{av:'AV143ClassProdMarca',fld:'vCLASSPRODMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV193SNMarcaSolici',fld:'vSNMARCASOLICI'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV103PessoaCodigo',fld:'vPESSOACODIGO'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV144SnEntregaProduto',fld:'vSNENTREGAPRODUTO'},{av:'A3978ProdutoFornecedorProdutoEmpId',fld:'PRODUTOFORNECEDORPRODUTOEMPID'},{av:'AV131ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A3979ProdutoFornecedorProdutoId',fld:'PRODUTOFORNECEDORPRODUTOID'},{av:'AV41ProdutoId',fld:'vPRODUTOID'},{av:'A3980ProdutoFornecedorPessoaEmpId',fld:'PRODUTOFORNECEDORPESSOAEMPID'},{av:'A3981ProdutoFornecedorPessoaId',fld:'PRODUTOFORNECEDORPESSOAID'},{av:'AV60Pessoa',fld:'vPESSOA'},{av:'A3975ProdutoFornecedorPrazoEntrega',fld:'PRODUTOFORNECEDORPRAZOENTREGA'},{av:'AV117Entrega',fld:'vENTREGA'},{av:'A3104PessoaPrazoEntregaPadrao',fld:'PESSOAPRAZOENTREGAPADRAO'},{av:'A3103PessoaFormaPagtoPadrao',fld:'PESSOAFORMAPAGTOPADRAO'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV73CotacaoTipo',fld:'vCOTACAOTIPO'},{av:'AV191CtrlPag',fld:'vCTRLPAG'},{av:'A3482CotacaoDataHoraAlt',fld:'COTACAODATAHORAALT'},{av:'A3473CotacaoValorTotalAVista',fld:'COTACAOVALORTOTALAVISTA'},{av:'A3466CotacaoValorEncargos',fld:'COTACAOVALORENCARGOS'},{av:'A3462CotacaoValorFrete',fld:'COTACAOVALORFRETE'},{av:'A3467CotacaoValorSeguro',fld:'COTACAOVALORSEGURO'},{av:'AV172QtdeCotacao',fld:'vQTDECOTACAO'},{av:'A3479CotacaoValorTotalaPrazo',fld:'COTACAOVALORTOTALAPRAZO'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV142ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV171ItemCotacao',fld:'vITEMCOTACAO'},{av:'A4042SolicitacaoItemQtdePedida',fld:'SOLICITACAOITEMQTDEPEDIDA'},{av:'AV30Item',fld:'vITEM'},{av:'AV167ObsProdutoChar',fld:'vOBSPRODUTOCHAR'},{av:'AV110SolicitacaoItemSeq',fld:'vSOLICITACAOITEMSEQ'},{av:'A4049SolicitacaoItemObservacao',fld:'SOLICITACAOITEMOBSERVACAO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A3828ProdutoObservacao',fld:'PRODUTOOBSERVACAO'}],[{av:'gx.fn.getCtrlProperty("TABLE2","Visible")',ctrl:'TABLE2',prop:'Visible'},{ctrl:'GRID2',prop:'Rows'},{av:'AV168SnMinimizar',fld:'vSNMINIMIZAR'},{av:'AV192CtrlPag2',fld:'vCTRLPAG2'}]];
   this.EvtParms["'FORNANTERIOR'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV64bmpCotacao',fld:'vBMPCOTACAO'},{av:'gx.fn.getCtrlProperty("vBMPCOTACAO","Tooltiptext")',ctrl:'vBMPCOTACAO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vCHEK","Enabled")',ctrl:'vCHEK',prop:'Enabled'},{av:'AV111CodFornecedorAux',fld:'vCODFORNECEDORAUX'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV116EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV168SnMinimizar',fld:'vSNMINIMIZAR'},{av:'AV45Fornecedor',fld:'vFORNECEDOR',grid:81},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV27EmpresaId',fld:'vEMPRESAID',hsh:true},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV28SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3453CotacaoNumeroFornecedor',fld:'COTACAONUMEROFORNECEDOR'},{av:'A3454CotacaoEntrega',fld:'COTACAOENTREGA'},{av:'A3455CotacaoPagamento',fld:'COTACAOPAGAMENTO'},{av:'AV128SnMarca',fld:'vSNMARCA'},{av:'AV65FornecedorId',fld:'vFORNECEDORID'},{av:'AV22Fantasia',fld:'vFANTASIA'},{av:'AV104Razao',fld:'vRAZAO'},{av:'AV86PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV106CNPJ',fld:'vCNPJ'},{av:'AV105CPF',fld:'vCPF'},{av:'AV132Pagamento',fld:'vPAGAMENTO'},{av:'AV29PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV121SnValorPrazo',fld:'vSNVALORPRAZO'},{av:'AV58Mod',fld:'vMOD',hsh:true},{av:'AV192CtrlPag2',fld:'vCTRLPAG2'},{av:'AV198SdtRegCotacao',fld:'vSDTREGCOTACAO',grid:172},{av:'AV143ClassProdMarca',fld:'vCLASSPRODMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV193SNMarcaSolici',fld:'vSNMARCASOLICI'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV103PessoaCodigo',fld:'vPESSOACODIGO'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV144SnEntregaProduto',fld:'vSNENTREGAPRODUTO'},{av:'A3978ProdutoFornecedorProdutoEmpId',fld:'PRODUTOFORNECEDORPRODUTOEMPID'},{av:'AV131ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A3979ProdutoFornecedorProdutoId',fld:'PRODUTOFORNECEDORPRODUTOID'},{av:'AV41ProdutoId',fld:'vPRODUTOID'},{av:'A3980ProdutoFornecedorPessoaEmpId',fld:'PRODUTOFORNECEDORPESSOAEMPID'},{av:'A3981ProdutoFornecedorPessoaId',fld:'PRODUTOFORNECEDORPESSOAID'},{av:'AV60Pessoa',fld:'vPESSOA'},{av:'A3975ProdutoFornecedorPrazoEntrega',fld:'PRODUTOFORNECEDORPRAZOENTREGA'},{av:'AV117Entrega',fld:'vENTREGA'},{av:'A3104PessoaPrazoEntregaPadrao',fld:'PESSOAPRAZOENTREGAPADRAO'},{av:'A3103PessoaFormaPagtoPadrao',fld:'PESSOAFORMAPAGTOPADRAO'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV73CotacaoTipo',fld:'vCOTACAOTIPO'},{av:'AV191CtrlPag',fld:'vCTRLPAG'},{av:'A3482CotacaoDataHoraAlt',fld:'COTACAODATAHORAALT'},{av:'A3473CotacaoValorTotalAVista',fld:'COTACAOVALORTOTALAVISTA'},{av:'A3466CotacaoValorEncargos',fld:'COTACAOVALORENCARGOS'},{av:'A3462CotacaoValorFrete',fld:'COTACAOVALORFRETE'},{av:'A3467CotacaoValorSeguro',fld:'COTACAOVALORSEGURO'},{av:'AV172QtdeCotacao',fld:'vQTDECOTACAO'},{av:'A3479CotacaoValorTotalaPrazo',fld:'COTACAOVALORTOTALAPRAZO'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV142ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV171ItemCotacao',fld:'vITEMCOTACAO'},{av:'A4042SolicitacaoItemQtdePedida',fld:'SOLICITACAOITEMQTDEPEDIDA'},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{av:'AV72NumPagina',fld:'vNUMPAGINA'},{ctrl:'CTLORCAMENTO',prop:'Enabled'},{ctrl:'CTLPAGAMENTO',prop:'Enabled'},{ctrl:'CTLENTREGA',prop:'Enabled'},{ctrl:'GRID2',prop:'Rows'}],[{av:'AV65FornecedorId',fld:'vFORNECEDORID'},{av:'AV72NumPagina',fld:'vNUMPAGINA'},{av:'AV191CtrlPag',fld:'vCTRLPAG'},{av:'AV264GXV12',fld:'vGXV12'},{av:'AV44FornecedorItem',fld:'vFORNECEDORITEM'},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{av:'AV202QtdeRegPular',fld:'vQTDEREGPULAR'},{av:'AV203QtdeLinRest',fld:'vQTDELINREST'},{av:'AV265GXV13',fld:'vGXV13'},{av:'AV199SdtRegCotacaoItem',fld:'vSDTREGCOTACAOITEM'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'}]];
   this.EvtParms["'FORNPROXIMO'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV64bmpCotacao',fld:'vBMPCOTACAO'},{av:'gx.fn.getCtrlProperty("vBMPCOTACAO","Tooltiptext")',ctrl:'vBMPCOTACAO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vCHEK","Enabled")',ctrl:'vCHEK',prop:'Enabled'},{av:'AV111CodFornecedorAux',fld:'vCODFORNECEDORAUX'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV116EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV168SnMinimizar',fld:'vSNMINIMIZAR'},{av:'AV45Fornecedor',fld:'vFORNECEDOR',grid:81},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV27EmpresaId',fld:'vEMPRESAID',hsh:true},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV28SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3453CotacaoNumeroFornecedor',fld:'COTACAONUMEROFORNECEDOR'},{av:'A3454CotacaoEntrega',fld:'COTACAOENTREGA'},{av:'A3455CotacaoPagamento',fld:'COTACAOPAGAMENTO'},{av:'AV128SnMarca',fld:'vSNMARCA'},{av:'AV65FornecedorId',fld:'vFORNECEDORID'},{av:'AV22Fantasia',fld:'vFANTASIA'},{av:'AV104Razao',fld:'vRAZAO'},{av:'AV86PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV106CNPJ',fld:'vCNPJ'},{av:'AV105CPF',fld:'vCPF'},{av:'AV132Pagamento',fld:'vPAGAMENTO'},{av:'AV29PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV121SnValorPrazo',fld:'vSNVALORPRAZO'},{av:'AV58Mod',fld:'vMOD',hsh:true},{av:'AV192CtrlPag2',fld:'vCTRLPAG2'},{av:'AV198SdtRegCotacao',fld:'vSDTREGCOTACAO',grid:172},{av:'AV143ClassProdMarca',fld:'vCLASSPRODMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV193SNMarcaSolici',fld:'vSNMARCASOLICI'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV103PessoaCodigo',fld:'vPESSOACODIGO'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV144SnEntregaProduto',fld:'vSNENTREGAPRODUTO'},{av:'A3978ProdutoFornecedorProdutoEmpId',fld:'PRODUTOFORNECEDORPRODUTOEMPID'},{av:'AV131ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A3979ProdutoFornecedorProdutoId',fld:'PRODUTOFORNECEDORPRODUTOID'},{av:'AV41ProdutoId',fld:'vPRODUTOID'},{av:'A3980ProdutoFornecedorPessoaEmpId',fld:'PRODUTOFORNECEDORPESSOAEMPID'},{av:'A3981ProdutoFornecedorPessoaId',fld:'PRODUTOFORNECEDORPESSOAID'},{av:'AV60Pessoa',fld:'vPESSOA'},{av:'A3975ProdutoFornecedorPrazoEntrega',fld:'PRODUTOFORNECEDORPRAZOENTREGA'},{av:'AV117Entrega',fld:'vENTREGA'},{av:'A3104PessoaPrazoEntregaPadrao',fld:'PESSOAPRAZOENTREGAPADRAO'},{av:'A3103PessoaFormaPagtoPadrao',fld:'PESSOAFORMAPAGTOPADRAO'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV73CotacaoTipo',fld:'vCOTACAOTIPO'},{av:'AV191CtrlPag',fld:'vCTRLPAG'},{av:'A3482CotacaoDataHoraAlt',fld:'COTACAODATAHORAALT'},{av:'A3473CotacaoValorTotalAVista',fld:'COTACAOVALORTOTALAVISTA'},{av:'A3466CotacaoValorEncargos',fld:'COTACAOVALORENCARGOS'},{av:'A3462CotacaoValorFrete',fld:'COTACAOVALORFRETE'},{av:'A3467CotacaoValorSeguro',fld:'COTACAOVALORSEGURO'},{av:'AV172QtdeCotacao',fld:'vQTDECOTACAO'},{av:'A3479CotacaoValorTotalaPrazo',fld:'COTACAOVALORTOTALAPRAZO'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV142ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV171ItemCotacao',fld:'vITEMCOTACAO'},{av:'A4042SolicitacaoItemQtdePedida',fld:'SOLICITACAOITEMQTDEPEDIDA'},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{av:'AV72NumPagina',fld:'vNUMPAGINA'},{ctrl:'CTLORCAMENTO',prop:'Enabled'},{ctrl:'CTLPAGAMENTO',prop:'Enabled'},{ctrl:'CTLENTREGA',prop:'Enabled'},{ctrl:'GRID2',prop:'Rows'}],[{av:'AV65FornecedorId',fld:'vFORNECEDORID'},{av:'AV72NumPagina',fld:'vNUMPAGINA'},{av:'AV191CtrlPag',fld:'vCTRLPAG'},{av:'AV264GXV12',fld:'vGXV12'},{av:'AV44FornecedorItem',fld:'vFORNECEDORITEM'},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{av:'AV202QtdeRegPular',fld:'vQTDEREGPULAR'},{av:'AV203QtdeLinRest',fld:'vQTDELINREST'},{av:'AV265GXV13',fld:'vGXV13'},{av:'AV199SdtRegCotacaoItem',fld:'vSDTREGCOTACAOITEM'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'}]];
   this.EvtParms["'ITEMANTERIOR'"] = [[{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'subGrid2_Rows'},{av:'AV20bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV38bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV197PromptMarca',fld:'vPROMPTMARCA'},{av:'gx.fn.getCtrlProperty("vBMPSNGANHADOR","Visible")',ctrl:'vBMPSNGANHADOR',prop:'Visible'},{av:'AV111CodFornecedorAux',fld:'vCODFORNECEDORAUX'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV116EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV168SnMinimizar',fld:'vSNMINIMIZAR'},{av:'AV45Fornecedor',fld:'vFORNECEDOR',grid:81},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV27EmpresaId',fld:'vEMPRESAID',hsh:true},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV28SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3453CotacaoNumeroFornecedor',fld:'COTACAONUMEROFORNECEDOR'},{av:'A3454CotacaoEntrega',fld:'COTACAOENTREGA'},{av:'A3455CotacaoPagamento',fld:'COTACAOPAGAMENTO'},{av:'AV128SnMarca',fld:'vSNMARCA'},{av:'AV65FornecedorId',fld:'vFORNECEDORID'},{av:'AV22Fantasia',fld:'vFANTASIA'},{av:'AV104Razao',fld:'vRAZAO'},{av:'AV86PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV106CNPJ',fld:'vCNPJ'},{av:'AV105CPF',fld:'vCPF'},{av:'AV132Pagamento',fld:'vPAGAMENTO'},{av:'AV29PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV121SnValorPrazo',fld:'vSNVALORPRAZO'},{av:'AV58Mod',fld:'vMOD',hsh:true},{av:'AV192CtrlPag2',fld:'vCTRLPAG2'},{av:'AV198SdtRegCotacao',fld:'vSDTREGCOTACAO',grid:172},{av:'AV143ClassProdMarca',fld:'vCLASSPRODMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV193SNMarcaSolici',fld:'vSNMARCASOLICI'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV103PessoaCodigo',fld:'vPESSOACODIGO'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV144SnEntregaProduto',fld:'vSNENTREGAPRODUTO'},{av:'A3978ProdutoFornecedorProdutoEmpId',fld:'PRODUTOFORNECEDORPRODUTOEMPID'},{av:'AV131ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A3979ProdutoFornecedorProdutoId',fld:'PRODUTOFORNECEDORPRODUTOID'},{av:'AV41ProdutoId',fld:'vPRODUTOID'},{av:'A3980ProdutoFornecedorPessoaEmpId',fld:'PRODUTOFORNECEDORPESSOAEMPID'},{av:'A3981ProdutoFornecedorPessoaId',fld:'PRODUTOFORNECEDORPESSOAID'},{av:'AV60Pessoa',fld:'vPESSOA'},{av:'A3975ProdutoFornecedorPrazoEntrega',fld:'PRODUTOFORNECEDORPRAZOENTREGA'},{av:'AV117Entrega',fld:'vENTREGA'},{av:'A3104PessoaPrazoEntregaPadrao',fld:'PESSOAPRAZOENTREGAPADRAO'},{av:'A3103PessoaFormaPagtoPadrao',fld:'PESSOAFORMAPAGTOPADRAO'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV73CotacaoTipo',fld:'vCOTACAOTIPO'},{av:'AV191CtrlPag',fld:'vCTRLPAG'},{av:'A3482CotacaoDataHoraAlt',fld:'COTACAODATAHORAALT'},{av:'A3473CotacaoValorTotalAVista',fld:'COTACAOVALORTOTALAVISTA'},{av:'A3466CotacaoValorEncargos',fld:'COTACAOVALORENCARGOS'},{av:'A3462CotacaoValorFrete',fld:'COTACAOVALORFRETE'},{av:'A3467CotacaoValorSeguro',fld:'COTACAOVALORSEGURO'},{av:'AV172QtdeCotacao',fld:'vQTDECOTACAO'},{av:'A3479CotacaoValorTotalaPrazo',fld:'COTACAOVALORTOTALAPRAZO'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV142ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV171ItemCotacao',fld:'vITEMCOTACAO'},{av:'A4042SolicitacaoItemQtdePedida',fld:'SOLICITACAOITEMQTDEPEDIDA'},{av:'AV30Item',fld:'vITEM'},{av:'AV167ObsProdutoChar',fld:'vOBSPRODUTOCHAR'},{av:'AV110SolicitacaoItemSeq',fld:'vSOLICITACAOITEMSEQ'},{av:'A4049SolicitacaoItemObservacao',fld:'SOLICITACAOITEMOBSERVACAO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A3828ProdutoObservacao',fld:'PRODUTOOBSERVACAO'},{ctrl:'CTLORCAMENTO',prop:'Enabled'},{ctrl:'CTLPAGAMENTO',prop:'Enabled'},{ctrl:'CTLENTREGA',prop:'Enabled'},{ctrl:'GRID2',prop:'Rows'}],[{av:'AV201PagAtu',fld:'vPAGATU'},{av:'gx.fn.getCtrlProperty("TABLE2","Visible")',ctrl:'TABLE2',prop:'Visible'},{ctrl:'GRID2',prop:'Rows'},{av:'AV192CtrlPag2',fld:'vCTRLPAG2'},{av:'AV264GXV12',fld:'vGXV12'},{av:'AV44FornecedorItem',fld:'vFORNECEDORITEM'},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{av:'AV202QtdeRegPular',fld:'vQTDEREGPULAR'},{av:'AV203QtdeLinRest',fld:'vQTDELINREST'},{av:'AV265GXV13',fld:'vGXV13'},{av:'AV199SdtRegCotacaoItem',fld:'vSDTREGCOTACAOITEM'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'}]];
   this.EvtParms["'ITEMPROXIMO'"] = [[{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'subGrid2_Rows'},{av:'AV20bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV38bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV197PromptMarca',fld:'vPROMPTMARCA'},{av:'gx.fn.getCtrlProperty("vBMPSNGANHADOR","Visible")',ctrl:'vBMPSNGANHADOR',prop:'Visible'},{av:'AV111CodFornecedorAux',fld:'vCODFORNECEDORAUX'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV116EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV168SnMinimizar',fld:'vSNMINIMIZAR'},{av:'AV45Fornecedor',fld:'vFORNECEDOR',grid:81},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV27EmpresaId',fld:'vEMPRESAID',hsh:true},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV28SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3453CotacaoNumeroFornecedor',fld:'COTACAONUMEROFORNECEDOR'},{av:'A3454CotacaoEntrega',fld:'COTACAOENTREGA'},{av:'A3455CotacaoPagamento',fld:'COTACAOPAGAMENTO'},{av:'AV128SnMarca',fld:'vSNMARCA'},{av:'AV65FornecedorId',fld:'vFORNECEDORID'},{av:'AV22Fantasia',fld:'vFANTASIA'},{av:'AV104Razao',fld:'vRAZAO'},{av:'AV86PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV106CNPJ',fld:'vCNPJ'},{av:'AV105CPF',fld:'vCPF'},{av:'AV132Pagamento',fld:'vPAGAMENTO'},{av:'AV29PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV121SnValorPrazo',fld:'vSNVALORPRAZO'},{av:'AV58Mod',fld:'vMOD',hsh:true},{av:'AV192CtrlPag2',fld:'vCTRLPAG2'},{av:'AV198SdtRegCotacao',fld:'vSDTREGCOTACAO',grid:172},{av:'AV143ClassProdMarca',fld:'vCLASSPRODMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV193SNMarcaSolici',fld:'vSNMARCASOLICI'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV103PessoaCodigo',fld:'vPESSOACODIGO'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV144SnEntregaProduto',fld:'vSNENTREGAPRODUTO'},{av:'A3978ProdutoFornecedorProdutoEmpId',fld:'PRODUTOFORNECEDORPRODUTOEMPID'},{av:'AV131ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A3979ProdutoFornecedorProdutoId',fld:'PRODUTOFORNECEDORPRODUTOID'},{av:'AV41ProdutoId',fld:'vPRODUTOID'},{av:'A3980ProdutoFornecedorPessoaEmpId',fld:'PRODUTOFORNECEDORPESSOAEMPID'},{av:'A3981ProdutoFornecedorPessoaId',fld:'PRODUTOFORNECEDORPESSOAID'},{av:'AV60Pessoa',fld:'vPESSOA'},{av:'A3975ProdutoFornecedorPrazoEntrega',fld:'PRODUTOFORNECEDORPRAZOENTREGA'},{av:'AV117Entrega',fld:'vENTREGA'},{av:'A3104PessoaPrazoEntregaPadrao',fld:'PESSOAPRAZOENTREGAPADRAO'},{av:'A3103PessoaFormaPagtoPadrao',fld:'PESSOAFORMAPAGTOPADRAO'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV73CotacaoTipo',fld:'vCOTACAOTIPO'},{av:'AV191CtrlPag',fld:'vCTRLPAG'},{av:'A3482CotacaoDataHoraAlt',fld:'COTACAODATAHORAALT'},{av:'A3473CotacaoValorTotalAVista',fld:'COTACAOVALORTOTALAVISTA'},{av:'A3466CotacaoValorEncargos',fld:'COTACAOVALORENCARGOS'},{av:'A3462CotacaoValorFrete',fld:'COTACAOVALORFRETE'},{av:'A3467CotacaoValorSeguro',fld:'COTACAOVALORSEGURO'},{av:'AV172QtdeCotacao',fld:'vQTDECOTACAO'},{av:'A3479CotacaoValorTotalaPrazo',fld:'COTACAOVALORTOTALAPRAZO'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV142ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV171ItemCotacao',fld:'vITEMCOTACAO'},{av:'A4042SolicitacaoItemQtdePedida',fld:'SOLICITACAOITEMQTDEPEDIDA'},{av:'AV30Item',fld:'vITEM'},{av:'AV167ObsProdutoChar',fld:'vOBSPRODUTOCHAR'},{av:'AV110SolicitacaoItemSeq',fld:'vSOLICITACAOITEMSEQ'},{av:'A4049SolicitacaoItemObservacao',fld:'SOLICITACAOITEMOBSERVACAO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A3828ProdutoObservacao',fld:'PRODUTOOBSERVACAO'},{ctrl:'CTLORCAMENTO',prop:'Enabled'},{ctrl:'CTLPAGAMENTO',prop:'Enabled'},{ctrl:'CTLENTREGA',prop:'Enabled'},{ctrl:'GRID2',prop:'Rows'}],[{av:'AV201PagAtu',fld:'vPAGATU'},{av:'gx.fn.getCtrlProperty("TABLE2","Visible")',ctrl:'TABLE2',prop:'Visible'},{ctrl:'GRID2',prop:'Rows'},{av:'AV192CtrlPag2',fld:'vCTRLPAG2'},{av:'AV264GXV12',fld:'vGXV12'},{av:'AV44FornecedorItem',fld:'vFORNECEDORITEM'},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{av:'AV202QtdeRegPular',fld:'vQTDEREGPULAR'},{av:'AV203QtdeLinRest',fld:'vQTDELINREST'},{av:'AV265GXV13',fld:'vGXV13'},{av:'AV199SdtRegCotacaoItem',fld:'vSDTREGCOTACAOITEM'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'subGrid2_Rows'},{av:'AV20bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV38bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV197PromptMarca',fld:'vPROMPTMARCA'},{av:'gx.fn.getCtrlProperty("vBMPSNGANHADOR","Visible")',ctrl:'vBMPSNGANHADOR',prop:'Visible'},{av:'AV111CodFornecedorAux',fld:'vCODFORNECEDORAUX'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV116EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV168SnMinimizar',fld:'vSNMINIMIZAR'},{av:'AV45Fornecedor',fld:'vFORNECEDOR',grid:81},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV27EmpresaId',fld:'vEMPRESAID',hsh:true},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV28SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3453CotacaoNumeroFornecedor',fld:'COTACAONUMEROFORNECEDOR'},{av:'A3454CotacaoEntrega',fld:'COTACAOENTREGA'},{av:'A3455CotacaoPagamento',fld:'COTACAOPAGAMENTO'},{av:'AV128SnMarca',fld:'vSNMARCA'},{av:'AV65FornecedorId',fld:'vFORNECEDORID'},{av:'AV22Fantasia',fld:'vFANTASIA'},{av:'AV104Razao',fld:'vRAZAO'},{av:'AV86PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV106CNPJ',fld:'vCNPJ'},{av:'AV105CPF',fld:'vCPF'},{av:'AV132Pagamento',fld:'vPAGAMENTO'},{av:'AV29PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV121SnValorPrazo',fld:'vSNVALORPRAZO'},{av:'AV58Mod',fld:'vMOD',hsh:true},{av:'AV192CtrlPag2',fld:'vCTRLPAG2'},{av:'AV198SdtRegCotacao',fld:'vSDTREGCOTACAO',grid:172},{av:'AV143ClassProdMarca',fld:'vCLASSPRODMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV193SNMarcaSolici',fld:'vSNMARCASOLICI'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV103PessoaCodigo',fld:'vPESSOACODIGO'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV144SnEntregaProduto',fld:'vSNENTREGAPRODUTO'},{av:'A3978ProdutoFornecedorProdutoEmpId',fld:'PRODUTOFORNECEDORPRODUTOEMPID'},{av:'AV131ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A3979ProdutoFornecedorProdutoId',fld:'PRODUTOFORNECEDORPRODUTOID'},{av:'AV41ProdutoId',fld:'vPRODUTOID'},{av:'A3980ProdutoFornecedorPessoaEmpId',fld:'PRODUTOFORNECEDORPESSOAEMPID'},{av:'A3981ProdutoFornecedorPessoaId',fld:'PRODUTOFORNECEDORPESSOAID'},{av:'AV60Pessoa',fld:'vPESSOA'},{av:'A3975ProdutoFornecedorPrazoEntrega',fld:'PRODUTOFORNECEDORPRAZOENTREGA'},{av:'AV117Entrega',fld:'vENTREGA'},{av:'A3104PessoaPrazoEntregaPadrao',fld:'PESSOAPRAZOENTREGAPADRAO'},{av:'A3103PessoaFormaPagtoPadrao',fld:'PESSOAFORMAPAGTOPADRAO'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV73CotacaoTipo',fld:'vCOTACAOTIPO'},{av:'AV191CtrlPag',fld:'vCTRLPAG'},{av:'A3482CotacaoDataHoraAlt',fld:'COTACAODATAHORAALT'},{av:'A3473CotacaoValorTotalAVista',fld:'COTACAOVALORTOTALAVISTA'},{av:'A3466CotacaoValorEncargos',fld:'COTACAOVALORENCARGOS'},{av:'A3462CotacaoValorFrete',fld:'COTACAOVALORFRETE'},{av:'A3467CotacaoValorSeguro',fld:'COTACAOVALORSEGURO'},{av:'AV172QtdeCotacao',fld:'vQTDECOTACAO'},{av:'A3479CotacaoValorTotalaPrazo',fld:'COTACAOVALORTOTALAPRAZO'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV142ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV171ItemCotacao',fld:'vITEMCOTACAO'},{av:'A4042SolicitacaoItemQtdePedida',fld:'SOLICITACAOITEMQTDEPEDIDA'},{av:'AV30Item',fld:'vITEM'},{av:'AV167ObsProdutoChar',fld:'vOBSPRODUTOCHAR'},{av:'AV110SolicitacaoItemSeq',fld:'vSOLICITACAOITEMSEQ'},{av:'A4049SolicitacaoItemObservacao',fld:'SOLICITACAOITEMOBSERVACAO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A3828ProdutoObservacao',fld:'PRODUTOOBSERVACAO'},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{ctrl:'CTLORCAMENTO',prop:'Enabled'},{ctrl:'CTLPAGAMENTO',prop:'Enabled'},{ctrl:'CTLENTREGA',prop:'Enabled'},{ctrl:'GRID2',prop:'Rows'},{av:'AV163ItemBusca',fld:'vITEMBUSCA'},{av:'AV146ProdutoIdAux',fld:'vPRODUTOIDAUX'},{av:'A3481CotacaoUsuarioAlt',fld:'COTACAOUSUARIOALT'},{av:'A3397CotacaoSnGanhador',fld:'COTACAOSNGANHADOR'},{av:'A3394CotacaoMarca',fld:'COTACAOMARCA'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'AV108Qtde',fld:'vQTDE'},{av:'AV204UnidadeId',fld:'vUNIDADEID'},{av:'A3395CotacaoValorAvista',fld:'COTACAOVALORAVISTA'},{av:'A3396CotacaoValoraPrazo',fld:'COTACAOVALORAPRAZO'},{av:'A4050SolicitacaoItemUnidade',fld:'SOLICITACAOITEMUNIDADE'},{av:'A3393ProdutoUnidadeCompraId',fld:'PRODUTOUNIDADECOMPRAID'}],[{av:'AV192CtrlPag2',fld:'vCTRLPAG2'},{av:'AV264GXV12',fld:'vGXV12'},{av:'AV44FornecedorItem',fld:'vFORNECEDORITEM'},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{av:'AV202QtdeRegPular',fld:'vQTDEREGPULAR'},{av:'AV203QtdeLinRest',fld:'vQTDELINREST'},{av:'AV265GXV13',fld:'vGXV13'},{av:'AV199SdtRegCotacaoItem',fld:'vSDTREGCOTACAOITEM'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV198SdtRegCotacao',fld:'vSDTREGCOTACAO',grid:172},{av:'AV110SolicitacaoItemSeq',fld:'vSOLICITACAOITEMSEQ'},{av:'AV41ProdutoId',fld:'vPRODUTOID'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV108Qtde',fld:'vQTDE'},{av:'AV204UnidadeId',fld:'vUNIDADEID'}]];
   this.EvtParms["'PROCURARPESSOA'"] = [[{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{av:'AV148PessoaBusca',fld:'vPESSOABUSCA'},{av:'AV58Mod',fld:'vMOD',hsh:true},{av:'AV45Fornecedor',fld:'vFORNECEDOR',grid:81},{ctrl:'CTLORCAMENTO',prop:'Enabled'},{ctrl:'CTLPAGAMENTO',prop:'Enabled'},{ctrl:'CTLENTREGA',prop:'Enabled'},{av:'AV27EmpresaId',fld:'vEMPRESAID',hsh:true},{av:'AV28SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'AV116EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV192CtrlPag2',fld:'vCTRLPAG2'},{ctrl:'GRID2',prop:'Rows'},{av:'AV198SdtRegCotacao',fld:'vSDTREGCOTACAO',grid:172},{av:'AV143ClassProdMarca',fld:'vCLASSPRODMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV193SNMarcaSolici',fld:'vSNMARCASOLICI'},{av:'AV65FornecedorId',fld:'vFORNECEDORID'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV29PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV49SnGeneroFornec',fld:'vSNGENEROFORNEC'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'A4051SolicitacaoItemUsuarioAlt',fld:'SOLICITACAOITEMUSUARIOALT'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A3978ProdutoFornecedorProdutoEmpId',fld:'PRODUTOFORNECEDORPRODUTOEMPID'},{av:'AV131ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A3979ProdutoFornecedorProdutoId',fld:'PRODUTOFORNECEDORPRODUTOID'},{av:'A3981ProdutoFornecedorPessoaId',fld:'PRODUTOFORNECEDORPESSOAID'},{av:'A3966ProdutoFornecedorPessoaFantasi',fld:'PRODUTOFORNECEDORPESSOAFANTASI'},{av:'A3965ProdutoFornecedorPessoaRazao',fld:'PRODUTOFORNECEDORPESSOARAZAO'},{av:'A3975ProdutoFornecedorPrazoEntrega',fld:'PRODUTOFORNECEDORPRAZOENTREGA'},{av:'AV132Pagamento',fld:'vPAGAMENTO'},{av:'AV50Telefone',fld:'vTELEFONE'},{av:'A3535GeneroFornecedorGeneroId',fld:'GENEROFORNECEDORGENEROID'},{av:'A3534GeneroFornecedorPessoaId',fld:'GENEROFORNECEDORPESSOAID'},{av:'A3528GeneroFornecedorPessoaFantasia',fld:'GENEROFORNECEDORPESSOAFANTASIA'},{av:'A3529GeneroFornecedorPessoaRazao',fld:'GENEROFORNECEDORPESSOARAZAO'},{av:'AV117Entrega',fld:'vENTREGA'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV142ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'},{av:'AV32Marca',fld:'vMARCA'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV60Pessoa',fld:'vPESSOA'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A3453CotacaoNumeroFornecedor',fld:'COTACAONUMEROFORNECEDOR'},{av:'A3454CotacaoEntrega',fld:'COTACAOENTREGA'},{av:'A3455CotacaoPagamento',fld:'COTACAOPAGAMENTO'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A428PessoaTipoPessoa',fld:'PESSOATIPOPESSOA'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV44FornecedorItem',fld:'vFORNECEDORITEM'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'AV144SnEntregaProduto',fld:'vSNENTREGAPRODUTO'},{av:'AV41ProdutoId',fld:'vPRODUTOID'},{av:'A3980ProdutoFornecedorPessoaEmpId',fld:'PRODUTOFORNECEDORPESSOAEMPID'},{av:'A3104PessoaPrazoEntregaPadrao',fld:'PESSOAPRAZOENTREGAPADRAO'},{av:'A3103PessoaFormaPagtoPadrao',fld:'PESSOAFORMAPAGTOPADRAO'},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV64bmpCotacao',fld:'vBMPCOTACAO'},{av:'gx.fn.getCtrlProperty("vBMPCOTACAO","Tooltiptext")',ctrl:'vBMPCOTACAO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vCHEK","Enabled")',ctrl:'vCHEK',prop:'Enabled'},{av:'AV111CodFornecedorAux',fld:'vCODFORNECEDORAUX'},{av:'AV168SnMinimizar',fld:'vSNMINIMIZAR'},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ'},{av:'AV128SnMarca',fld:'vSNMARCA'},{av:'AV22Fantasia',fld:'vFANTASIA'},{av:'AV104Razao',fld:'vRAZAO'},{av:'AV86PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV106CNPJ',fld:'vCNPJ'},{av:'AV105CPF',fld:'vCPF'},{av:'AV121SnValorPrazo',fld:'vSNVALORPRAZO'},{av:'AV103PessoaCodigo',fld:'vPESSOACODIGO'},{av:'AV73CotacaoTipo',fld:'vCOTACAOTIPO'},{av:'AV191CtrlPag',fld:'vCTRLPAG'},{av:'A3482CotacaoDataHoraAlt',fld:'COTACAODATAHORAALT'},{av:'A3473CotacaoValorTotalAVista',fld:'COTACAOVALORTOTALAVISTA'},{av:'A3466CotacaoValorEncargos',fld:'COTACAOVALORENCARGOS'},{av:'A3462CotacaoValorFrete',fld:'COTACAOVALORFRETE'},{av:'A3467CotacaoValorSeguro',fld:'COTACAOVALORSEGURO'},{av:'AV172QtdeCotacao',fld:'vQTDECOTACAO'},{av:'A3479CotacaoValorTotalaPrazo',fld:'COTACAOVALORTOTALAPRAZO'},{av:'AV171ItemCotacao',fld:'vITEMCOTACAO'},{av:'A4042SolicitacaoItemQtdePedida',fld:'SOLICITACAOITEMQTDEPEDIDA'}],[{av:'AV45Fornecedor',fld:'vFORNECEDOR',grid:81},{av:'AV60Pessoa',fld:'vPESSOA'},{av:'AV65FornecedorId',fld:'vFORNECEDORID'},{av:'AV191CtrlPag',fld:'vCTRLPAG'},{av:'AV264GXV12',fld:'vGXV12'},{av:'AV44FornecedorItem',fld:'vFORNECEDORITEM'},{av:'AV165SnErroMarca',fld:'vSNERROMARCA'},{av:'AV202QtdeRegPular',fld:'vQTDEREGPULAR'},{av:'AV203QtdeLinRest',fld:'vQTDELINREST'},{av:'AV265GXV13',fld:'vGXV13'},{av:'AV199SdtRegCotacaoItem',fld:'vSDTREGCOTACAOITEM'},{av:'AV32Marca',fld:'vMARCA'},{av:'gx.fn.getCtrlProperty("TABELA2","Visible")',ctrl:'TABELA2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vFORNECEDORID","Visible")',ctrl:'vFORNECEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MINIMIZAR","Visible")',ctrl:'MINIMIZAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MAXIMIZAR","Visible")',ctrl:'MAXIMIZAR',prop:'Visible'},{ctrl:'BTNMARCARPRODUTO',prop:'Visible'},{ctrl:'BTNDESMARCARPROD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK3","Visible")',ctrl:'TEXTBLOCK3',prop:'Visible'},{av:'AV41ProdutoId',fld:'vPRODUTOID'},{av:'AV43SnErro',fld:'vSNERRO'},{av:'AV117Entrega',fld:'vENTREGA'},{av:'AV144SnEntregaProduto',fld:'vSNENTREGAPRODUTO'},{av:'AV42Genero',fld:'vGENERO'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV282GXV14',fld:'vGXV14'},{av:'AV50Telefone',fld:'vTELEFONE'},{av:'AV132Pagamento',fld:'vPAGAMENTO'}]];
   this.EvtParms["'ALTERARFORNECEDOR'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV64bmpCotacao',fld:'vBMPCOTACAO'},{av:'gx.fn.getCtrlProperty("vBMPCOTACAO","Tooltiptext")',ctrl:'vBMPCOTACAO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vCHEK","Enabled")',ctrl:'vCHEK',prop:'Enabled'},{av:'AV111CodFornecedorAux',fld:'vCODFORNECEDORAUX'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV116EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV168SnMinimizar',fld:'vSNMINIMIZAR'},{av:'AV45Fornecedor',fld:'vFORNECEDOR',grid:81},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV27EmpresaId',fld:'vEMPRESAID',hsh:true},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV28SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3453CotacaoNumeroFornecedor',fld:'COTACAONUMEROFORNECEDOR'},{av:'A3454CotacaoEntrega',fld:'COTACAOENTREGA'},{av:'A3455CotacaoPagamento',fld:'COTACAOPAGAMENTO'},{av:'AV128SnMarca',fld:'vSNMARCA'},{av:'AV65FornecedorId',fld:'vFORNECEDORID'},{av:'AV22Fantasia',fld:'vFANTASIA'},{av:'AV104Razao',fld:'vRAZAO'},{av:'AV86PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV106CNPJ',fld:'vCNPJ'},{av:'AV105CPF',fld:'vCPF'},{av:'AV132Pagamento',fld:'vPAGAMENTO'},{av:'AV29PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV121SnValorPrazo',fld:'vSNVALORPRAZO'},{av:'AV58Mod',fld:'vMOD',hsh:true},{av:'AV192CtrlPag2',fld:'vCTRLPAG2'},{av:'AV198SdtRegCotacao',fld:'vSDTREGCOTACAO',grid:172},{av:'AV143ClassProdMarca',fld:'vCLASSPRODMARCA'},{av:'AV164SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV193SNMarcaSolici',fld:'vSNMARCASOLICI'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV103PessoaCodigo',fld:'vPESSOACODIGO'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV144SnEntregaProduto',fld:'vSNENTREGAPRODUTO'},{av:'A3978ProdutoFornecedorProdutoEmpId',fld:'PRODUTOFORNECEDORPRODUTOEMPID'},{av:'AV131ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A3979ProdutoFornecedorProdutoId',fld:'PRODUTOFORNECEDORPRODUTOID'},{av:'AV41ProdutoId',fld:'vPRODUTOID'},{av:'A3980ProdutoFornecedorPessoaEmpId',fld:'PRODUTOFORNECEDORPESSOAEMPID'},{av:'A3981ProdutoFornecedorPessoaId',fld:'PRODUTOFORNECEDORPESSOAID'},{av:'AV60Pessoa',fld:'vPESSOA'},{av:'A3975ProdutoFornecedorPrazoEntrega',fld:'PRODUTOFORNECEDORPRAZOENTREGA'},{av:'AV117Entrega',fld:'vENTREGA'},{av:'A3104PessoaPrazoEntregaPadrao',fld:'PESSOAPRAZOENTREGAPADRAO'},{av:'A3103PessoaFormaPagtoPadrao',fld:'PESSOAFORMAPAGTOPADRAO'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV73CotacaoTipo',fld:'vCOTACAOTIPO'},{av:'AV191CtrlPag',fld:'vCTRLPAG'},{av:'A3482CotacaoDataHoraAlt',fld:'COTACAODATAHORAALT'},{av:'A3473CotacaoValorTotalAVista',fld:'COTACAOVALORTOTALAVISTA'},{av:'A3466CotacaoValorEncargos',fld:'COTACAOVALORENCARGOS'},{av:'A3462CotacaoValorFrete',fld:'COTACAOVALORFRETE'},{av:'A3467CotacaoValorSeguro',fld:'COTACAOVALORSEGURO'},{av:'AV172QtdeCotacao',fld:'vQTDECOTACAO'},{av:'A3479CotacaoValorTotalaPrazo',fld:'COTACAOVALORTOTALAPRAZO'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV142ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'},{av:'AV32Marca',fld:'vMARCA'},{av:'AV171ItemCotacao',fld:'vITEMCOTACAO'},{av:'A4042SolicitacaoItemQtdePedida',fld:'SOLICITACAOITEMQTDEPEDIDA'}],[]];
   this.EvtParms["'CONSULTALOGGERA'"] = [[{av:'AV27EmpresaId',fld:'vEMPRESAID',hsh:true},{av:'AV28SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true}],[{av:'AV182Log',fld:'vLOG'}]];
   this.EvtParms["'CONSULTALOGITEMCOTACAO'"] = [[{av:'AV27EmpresaId',fld:'vEMPRESAID',hsh:true},{av:'AV28SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'AV198SdtRegCotacao',fld:'vSDTREGCOTACAO',grid:172},{av:'AV116EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV111CodFornecedorAux',fld:'vCODFORNECEDORAUX'}],[{av:'AV182Log',fld:'vLOG'}]];
   this.setPrompt("PROMPTPRODUTO", [139,145,144,146,143,212,214]);
   this.setPrompt("PROMPT_PESSOABUSCA", [60]);
   this.setVCMap("AV143ClassProdMarca", "vCLASSPRODMARCA", 0, "char");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("A70PessoaRazaoSocial", "PESSOARAZAOSOCIAL", 0, "svchar");
   this.setVCMap("AV45Fornecedor", "vFORNECEDOR", 0, "CollSdtCotacao.SdtCotacaoItem");
   this.setVCMap("A3392SolicitacaoItemSeq", "SOLICITACAOITEMSEQ", 0, "int");
   this.setVCMap("A3370SolicitacaoEmpresaId", "SOLICITACAOEMPRESAID", 0, "char");
   this.setVCMap("AV27EmpresaId", "vEMPRESAID", 0, "char");
   this.setVCMap("A3371SolicitacaoNumero", "SOLICITACAONUMERO", 0, "int");
   this.setVCMap("AV28SolicitacaoNumero", "vSOLICITACAONUMERO", 0, "int");
   this.setVCMap("A3453CotacaoNumeroFornecedor", "COTACAONUMEROFORNECEDOR", 0, "svchar");
   this.setVCMap("A3454CotacaoEntrega", "COTACAOENTREGA", 0, "svchar");
   this.setVCMap("A3455CotacaoPagamento", "COTACAOPAGAMENTO", 0, "svchar");
   this.setVCMap("AV104Razao", "vRAZAO", 0, "svchar");
   this.setVCMap("AV86PessoaTelefone", "vPESSOATELEFONE", 0, "svchar");
   this.setVCMap("AV106CNPJ", "vCNPJ", 0, "char");
   this.setVCMap("AV105CPF", "vCPF", 0, "char");
   this.setVCMap("AV132Pagamento", "vPAGAMENTO", 0, "char");
   this.setVCMap("AV29PessoaId", "vPESSOAID", 0, "int");
   this.setVCMap("AV121SnValorPrazo", "vSNVALORPRAZO", 0, "char");
   this.setVCMap("AV58Mod", "vMOD", 0, "char");
   this.setVCMap("AV198SdtRegCotacao", "vSDTREGCOTACAO", 0, "CollSdtRegCotacao.SdtRegCotacaoItem");
   this.setVCMap("AV143ClassProdMarca", "vCLASSPRODMARCA", 0, "char");
   this.setVCMap("AV164SnExisteMarca", "vSNEXISTEMARCA", 0, "char");
   this.setVCMap("AV193SNMarcaSolici", "vSNMARCASOLICI", 0, "char");
   this.setVCMap("AV5UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A71PessoaFantasia", "PESSOAFANTASIA", 0, "svchar");
   this.setVCMap("A72PessoaTelefone", "PESSOATELEFONE", 0, "svchar");
   this.setVCMap("A473PessoaCPF", "PESSOACPF", 0, "char");
   this.setVCMap("A472PessoaCNPJ", "PESSOACNPJ", 0, "char");
   this.setVCMap("AV144SnEntregaProduto", "vSNENTREGAPRODUTO", 0, "char");
   this.setVCMap("A3978ProdutoFornecedorProdutoEmpId", "PRODUTOFORNECEDORPRODUTOEMPID", 0, "char");
   this.setVCMap("A3979ProdutoFornecedorProdutoId", "PRODUTOFORNECEDORPRODUTOID", 0, "int");
   this.setVCMap("AV41ProdutoId", "vPRODUTOID", 0, "int");
   this.setVCMap("A3980ProdutoFornecedorPessoaEmpId", "PRODUTOFORNECEDORPESSOAEMPID", 0, "char");
   this.setVCMap("A3981ProdutoFornecedorPessoaId", "PRODUTOFORNECEDORPESSOAID", 0, "int");
   this.setVCMap("AV60Pessoa", "vPESSOA", 0, "int");
   this.setVCMap("A3975ProdutoFornecedorPrazoEntrega", "PRODUTOFORNECEDORPRAZOENTREGA", 0, "svchar");
   this.setVCMap("AV117Entrega", "vENTREGA", 0, "svchar");
   this.setVCMap("A3104PessoaPrazoEntregaPadrao", "PESSOAPRAZOENTREGAPADRAO", 0, "svchar");
   this.setVCMap("A3103PessoaFormaPagtoPadrao", "PESSOAFORMAPAGTOPADRAO", 0, "svchar");
   this.setVCMap("A2965ProdutoId", "PRODUTOID", 0, "int");
   this.setVCMap("AV73CotacaoTipo", "vCOTACAOTIPO", 0, "char");
   this.setVCMap("A3482CotacaoDataHoraAlt", "COTACAODATAHORAALT", 0, "dtime");
   this.setVCMap("A3473CotacaoValorTotalAVista", "COTACAOVALORTOTALAVISTA", 0, "decimal");
   this.setVCMap("A3466CotacaoValorEncargos", "COTACAOVALORENCARGOS", 0, "decimal");
   this.setVCMap("A3462CotacaoValorFrete", "COTACAOVALORFRETE", 0, "decimal");
   this.setVCMap("A3467CotacaoValorSeguro", "COTACAOVALORSEGURO", 0, "decimal");
   this.setVCMap("AV172QtdeCotacao", "vQTDECOTACAO", 0, "decimal");
   this.setVCMap("A3479CotacaoValorTotalaPrazo", "COTACAOVALORTOTALAPRAZO", 0, "decimal");
   this.setVCMap("A2929ClassificacaoEstEmpresaId", "CLASSIFICACAOESTEMPRESAID", 0, "char");
   this.setVCMap("AV142ClassificacaoEstEmpresaId", "vCLASSIFICACAOESTEMPRESAID", 0, "char");
   this.setVCMap("A2930ClassificacaoEstId", "CLASSIFICACAOESTID", 0, "char");
   this.setVCMap("A2931OpcaoClassificacaoEstId", "OPCAOCLASSIFICACAOESTID", 0, "char");
   this.setVCMap("AV32Marca", "vMARCA", 0, "svchar");
   this.setVCMap("AV171ItemCotacao", "vITEMCOTACAO", 0, "int");
   this.setVCMap("A4042SolicitacaoItemQtdePedida", "SOLICITACAOITEMQTDEPEDIDA", 0, "decimal");
   this.setVCMap("AV145Tela", "vTELA", 0, "char");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("A70PessoaRazaoSocial", "PESSOARAZAOSOCIAL", 0, "svchar");
   this.setVCMap("AV45Fornecedor", "vFORNECEDOR", 0, "CollSdtCotacao.SdtCotacaoItem");
   this.setVCMap("A3392SolicitacaoItemSeq", "SOLICITACAOITEMSEQ", 0, "int");
   this.setVCMap("A3370SolicitacaoEmpresaId", "SOLICITACAOEMPRESAID", 0, "char");
   this.setVCMap("AV27EmpresaId", "vEMPRESAID", 0, "char");
   this.setVCMap("A3371SolicitacaoNumero", "SOLICITACAONUMERO", 0, "int");
   this.setVCMap("AV28SolicitacaoNumero", "vSOLICITACAONUMERO", 0, "int");
   this.setVCMap("A3453CotacaoNumeroFornecedor", "COTACAONUMEROFORNECEDOR", 0, "svchar");
   this.setVCMap("A3454CotacaoEntrega", "COTACAOENTREGA", 0, "svchar");
   this.setVCMap("A3455CotacaoPagamento", "COTACAOPAGAMENTO", 0, "svchar");
   this.setVCMap("AV104Razao", "vRAZAO", 0, "svchar");
   this.setVCMap("AV86PessoaTelefone", "vPESSOATELEFONE", 0, "svchar");
   this.setVCMap("AV106CNPJ", "vCNPJ", 0, "char");
   this.setVCMap("AV105CPF", "vCPF", 0, "char");
   this.setVCMap("AV132Pagamento", "vPAGAMENTO", 0, "char");
   this.setVCMap("AV29PessoaId", "vPESSOAID", 0, "int");
   this.setVCMap("AV121SnValorPrazo", "vSNVALORPRAZO", 0, "char");
   this.setVCMap("AV58Mod", "vMOD", 0, "char");
   this.setVCMap("AV198SdtRegCotacao", "vSDTREGCOTACAO", 0, "CollSdtRegCotacao.SdtRegCotacaoItem");
   this.setVCMap("AV143ClassProdMarca", "vCLASSPRODMARCA", 0, "char");
   this.setVCMap("AV164SnExisteMarca", "vSNEXISTEMARCA", 0, "char");
   this.setVCMap("AV193SNMarcaSolici", "vSNMARCASOLICI", 0, "char");
   this.setVCMap("AV5UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A71PessoaFantasia", "PESSOAFANTASIA", 0, "svchar");
   this.setVCMap("A72PessoaTelefone", "PESSOATELEFONE", 0, "svchar");
   this.setVCMap("A473PessoaCPF", "PESSOACPF", 0, "char");
   this.setVCMap("A472PessoaCNPJ", "PESSOACNPJ", 0, "char");
   this.setVCMap("AV144SnEntregaProduto", "vSNENTREGAPRODUTO", 0, "char");
   this.setVCMap("A3978ProdutoFornecedorProdutoEmpId", "PRODUTOFORNECEDORPRODUTOEMPID", 0, "char");
   this.setVCMap("A3979ProdutoFornecedorProdutoId", "PRODUTOFORNECEDORPRODUTOID", 0, "int");
   this.setVCMap("AV41ProdutoId", "vPRODUTOID", 0, "int");
   this.setVCMap("A3980ProdutoFornecedorPessoaEmpId", "PRODUTOFORNECEDORPESSOAEMPID", 0, "char");
   this.setVCMap("A3981ProdutoFornecedorPessoaId", "PRODUTOFORNECEDORPESSOAID", 0, "int");
   this.setVCMap("AV60Pessoa", "vPESSOA", 0, "int");
   this.setVCMap("A3975ProdutoFornecedorPrazoEntrega", "PRODUTOFORNECEDORPRAZOENTREGA", 0, "svchar");
   this.setVCMap("AV117Entrega", "vENTREGA", 0, "svchar");
   this.setVCMap("A3104PessoaPrazoEntregaPadrao", "PESSOAPRAZOENTREGAPADRAO", 0, "svchar");
   this.setVCMap("A3103PessoaFormaPagtoPadrao", "PESSOAFORMAPAGTOPADRAO", 0, "svchar");
   this.setVCMap("A2965ProdutoId", "PRODUTOID", 0, "int");
   this.setVCMap("AV73CotacaoTipo", "vCOTACAOTIPO", 0, "char");
   this.setVCMap("A3482CotacaoDataHoraAlt", "COTACAODATAHORAALT", 0, "dtime");
   this.setVCMap("A3473CotacaoValorTotalAVista", "COTACAOVALORTOTALAVISTA", 0, "decimal");
   this.setVCMap("A3466CotacaoValorEncargos", "COTACAOVALORENCARGOS", 0, "decimal");
   this.setVCMap("A3462CotacaoValorFrete", "COTACAOVALORFRETE", 0, "decimal");
   this.setVCMap("A3467CotacaoValorSeguro", "COTACAOVALORSEGURO", 0, "decimal");
   this.setVCMap("AV172QtdeCotacao", "vQTDECOTACAO", 0, "decimal");
   this.setVCMap("A3479CotacaoValorTotalaPrazo", "COTACAOVALORTOTALAPRAZO", 0, "decimal");
   this.setVCMap("A2929ClassificacaoEstEmpresaId", "CLASSIFICACAOESTEMPRESAID", 0, "char");
   this.setVCMap("AV142ClassificacaoEstEmpresaId", "vCLASSIFICACAOESTEMPRESAID", 0, "char");
   this.setVCMap("A2930ClassificacaoEstId", "CLASSIFICACAOESTID", 0, "char");
   this.setVCMap("A2931OpcaoClassificacaoEstId", "OPCAOCLASSIFICACAOESTID", 0, "char");
   this.setVCMap("AV32Marca", "vMARCA", 0, "svchar");
   this.setVCMap("AV171ItemCotacao", "vITEMCOTACAO", 0, "int");
   this.setVCMap("A4042SolicitacaoItemQtdePedida", "SOLICITACAOITEMQTDEPEDIDA", 0, "decimal");
   Grid1Container.addRefreshingVar({rfrVar:"AV64bmpCotacao", rfrProp:"Value", gxAttId:"Bmpcotacao"});
   Grid1Container.addRefreshingVar({rfrVar:"AV64bmpCotacao", rfrProp:"Tooltiptext", gxAttId:"Bmpcotacao"});
   Grid1Container.addRefreshingVar({rfrVar:"AV24chek", rfrProp:"Enabled", gxAttId:"Chek"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[107]);
   Grid1Container.addRefreshingVar({rfrVar:"A227EmpresaPessoasEmpresaId"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[38]);
   Grid1Container.addRefreshingVar({rfrVar:"A69PessoaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A70PessoaRazaoSocial"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[41]);
   Grid1Container.addRefreshingVar({rfrVar:"AV45Fornecedor"});
   Grid1Container.addRefreshingVar({rfrVar:"A3392SolicitacaoItemSeq"});
   Grid1Container.addRefreshingVar({rfrVar:"A3370SolicitacaoEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV27EmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A3371SolicitacaoNumero"});
   Grid1Container.addRefreshingVar({rfrVar:"AV28SolicitacaoNumero"});
   Grid1Container.addRefreshingVar({rfrVar:"A3453CotacaoNumeroFornecedor"});
   Grid1Container.addRefreshingVar({rfrVar:"A3454CotacaoEntrega"});
   Grid1Container.addRefreshingVar({rfrVar:"A3455CotacaoPagamento"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[40]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[35]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[36]);
   Grid1Container.addRefreshingVar({rfrVar:"AV104Razao"});
   Grid1Container.addRefreshingVar({rfrVar:"AV86PessoaTelefone"});
   Grid1Container.addRefreshingVar({rfrVar:"AV106CNPJ"});
   Grid1Container.addRefreshingVar({rfrVar:"AV105CPF"});
   Grid1Container.addRefreshingVar({rfrVar:"AV132Pagamento"});
   Grid1Container.addRefreshingVar({rfrVar:"AV29PessoaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV121SnValorPrazo"});
   Grid1Container.addRefreshingVar({rfrVar:"AV58Mod"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[218]);
   Grid1Container.addRefreshingVar({rfrVar:"AV198SdtRegCotacao"});
   Grid1Container.addRefreshingVar({rfrVar:"AV143ClassProdMarca"});
   Grid1Container.addRefreshingVar({rfrVar:"AV164SnExisteMarca"});
   Grid1Container.addRefreshingVar({rfrVar:"AV193SNMarcaSolici"});
   Grid1Container.addRefreshingVar({rfrVar:"AV5UsrCod"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[43]);
   Grid1Container.addRefreshingVar({rfrVar:"A71PessoaFantasia"});
   Grid1Container.addRefreshingVar({rfrVar:"A72PessoaTelefone"});
   Grid1Container.addRefreshingVar({rfrVar:"A473PessoaCPF"});
   Grid1Container.addRefreshingVar({rfrVar:"A472PessoaCNPJ"});
   Grid1Container.addRefreshingVar({rfrVar:"AV144SnEntregaProduto"});
   Grid1Container.addRefreshingVar({rfrVar:"A3978ProdutoFornecedorProdutoEmpId"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[37]);
   Grid1Container.addRefreshingVar({rfrVar:"A3979ProdutoFornecedorProdutoId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV41ProdutoId"});
   Grid1Container.addRefreshingVar({rfrVar:"A3980ProdutoFornecedorPessoaEmpId"});
   Grid1Container.addRefreshingVar({rfrVar:"A3981ProdutoFornecedorPessoaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV60Pessoa"});
   Grid1Container.addRefreshingVar({rfrVar:"A3975ProdutoFornecedorPrazoEntrega"});
   Grid1Container.addRefreshingVar({rfrVar:"AV117Entrega"});
   Grid1Container.addRefreshingVar({rfrVar:"A3104PessoaPrazoEntregaPadrao"});
   Grid1Container.addRefreshingVar({rfrVar:"A3103PessoaFormaPagtoPadrao"});
   Grid1Container.addRefreshingVar({rfrVar:"A2965ProdutoId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV73CotacaoTipo"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[217]);
   Grid1Container.addRefreshingVar({rfrVar:"A3482CotacaoDataHoraAlt"});
   Grid1Container.addRefreshingVar({rfrVar:"A3473CotacaoValorTotalAVista"});
   Grid1Container.addRefreshingVar({rfrVar:"A3466CotacaoValorEncargos"});
   Grid1Container.addRefreshingVar({rfrVar:"A3462CotacaoValorFrete"});
   Grid1Container.addRefreshingVar({rfrVar:"A3467CotacaoValorSeguro"});
   Grid1Container.addRefreshingVar({rfrVar:"AV172QtdeCotacao"});
   Grid1Container.addRefreshingVar({rfrVar:"A3479CotacaoValorTotalaPrazo"});
   Grid1Container.addRefreshingVar({rfrVar:"A2929ClassificacaoEstEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV142ClassificacaoEstEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A2930ClassificacaoEstId"});
   Grid1Container.addRefreshingVar({rfrVar:"A2931OpcaoClassificacaoEstId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV32Marca"});
   Grid1Container.addRefreshingVar({rfrVar:"AV171ItemCotacao"});
   Grid1Container.addRefreshingVar({rfrVar:"A4042SolicitacaoItemQtdePedida"});
   Grid2Container.addRefreshingVar({rfrVar:"AV20bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   Grid2Container.addRefreshingVar({rfrVar:"AV20bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   Grid2Container.addRefreshingVar({rfrVar:"AV38bmpObs", rfrProp:"Value", gxAttId:"Bmpobs"});
   Grid2Container.addRefreshingVar({rfrVar:"AV38bmpObs", rfrProp:"Tooltiptext", gxAttId:"Bmpobs"});
   Grid2Container.addRefreshingVar({rfrVar:"AV197PromptMarca", rfrProp:"Value", gxAttId:"Promptmarca"});
   Grid2Container.addRefreshingVar({rfrVar:"AV107bmpSnGanhador", rfrProp:"Visible", gxAttId:"Bmpsnganhador"});
   Grid2Container.addRefreshingVar(this.GXValidFnc[107]);
   Grid2Container.addRefreshingVar({rfrVar:"A227EmpresaPessoasEmpresaId"});
   Grid2Container.addRefreshingVar(this.GXValidFnc[38]);
   Grid2Container.addRefreshingVar({rfrVar:"A69PessoaId"});
   Grid2Container.addRefreshingVar({rfrVar:"A70PessoaRazaoSocial"});
   Grid2Container.addRefreshingVar(this.GXValidFnc[41]);
   Grid2Container.addRefreshingVar({rfrVar:"AV45Fornecedor"});
   Grid2Container.addRefreshingVar({rfrVar:"A3392SolicitacaoItemSeq"});
   Grid2Container.addRefreshingVar({rfrVar:"A3370SolicitacaoEmpresaId"});
   Grid2Container.addRefreshingVar({rfrVar:"AV27EmpresaId"});
   Grid2Container.addRefreshingVar({rfrVar:"A3371SolicitacaoNumero"});
   Grid2Container.addRefreshingVar({rfrVar:"AV28SolicitacaoNumero"});
   Grid2Container.addRefreshingVar({rfrVar:"A3453CotacaoNumeroFornecedor"});
   Grid2Container.addRefreshingVar({rfrVar:"A3454CotacaoEntrega"});
   Grid2Container.addRefreshingVar({rfrVar:"A3455CotacaoPagamento"});
   Grid2Container.addRefreshingVar(this.GXValidFnc[40]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[35]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[36]);
   Grid2Container.addRefreshingVar({rfrVar:"AV104Razao"});
   Grid2Container.addRefreshingVar({rfrVar:"AV86PessoaTelefone"});
   Grid2Container.addRefreshingVar({rfrVar:"AV106CNPJ"});
   Grid2Container.addRefreshingVar({rfrVar:"AV105CPF"});
   Grid2Container.addRefreshingVar({rfrVar:"AV132Pagamento"});
   Grid2Container.addRefreshingVar({rfrVar:"AV29PessoaId"});
   Grid2Container.addRefreshingVar({rfrVar:"AV121SnValorPrazo"});
   Grid2Container.addRefreshingVar({rfrVar:"AV58Mod"});
   Grid2Container.addRefreshingVar(this.GXValidFnc[218]);
   Grid2Container.addRefreshingVar({rfrVar:"AV198SdtRegCotacao"});
   Grid2Container.addRefreshingVar({rfrVar:"AV143ClassProdMarca"});
   Grid2Container.addRefreshingVar({rfrVar:"AV164SnExisteMarca"});
   Grid2Container.addRefreshingVar({rfrVar:"AV193SNMarcaSolici"});
   Grid2Container.addRefreshingVar({rfrVar:"AV5UsrCod"});
   Grid2Container.addRefreshingVar(this.GXValidFnc[43]);
   Grid2Container.addRefreshingVar({rfrVar:"A71PessoaFantasia"});
   Grid2Container.addRefreshingVar({rfrVar:"A72PessoaTelefone"});
   Grid2Container.addRefreshingVar({rfrVar:"A473PessoaCPF"});
   Grid2Container.addRefreshingVar({rfrVar:"A472PessoaCNPJ"});
   Grid2Container.addRefreshingVar({rfrVar:"AV144SnEntregaProduto"});
   Grid2Container.addRefreshingVar({rfrVar:"A3978ProdutoFornecedorProdutoEmpId"});
   Grid2Container.addRefreshingVar(this.GXValidFnc[37]);
   Grid2Container.addRefreshingVar({rfrVar:"A3979ProdutoFornecedorProdutoId"});
   Grid2Container.addRefreshingVar({rfrVar:"AV41ProdutoId"});
   Grid2Container.addRefreshingVar({rfrVar:"A3980ProdutoFornecedorPessoaEmpId"});
   Grid2Container.addRefreshingVar({rfrVar:"A3981ProdutoFornecedorPessoaId"});
   Grid2Container.addRefreshingVar({rfrVar:"AV60Pessoa"});
   Grid2Container.addRefreshingVar({rfrVar:"A3975ProdutoFornecedorPrazoEntrega"});
   Grid2Container.addRefreshingVar({rfrVar:"AV117Entrega"});
   Grid2Container.addRefreshingVar({rfrVar:"A3104PessoaPrazoEntregaPadrao"});
   Grid2Container.addRefreshingVar({rfrVar:"A3103PessoaFormaPagtoPadrao"});
   Grid2Container.addRefreshingVar({rfrVar:"A2965ProdutoId"});
   Grid2Container.addRefreshingVar({rfrVar:"AV73CotacaoTipo"});
   Grid2Container.addRefreshingVar(this.GXValidFnc[217]);
   Grid2Container.addRefreshingVar({rfrVar:"A3482CotacaoDataHoraAlt"});
   Grid2Container.addRefreshingVar({rfrVar:"A3473CotacaoValorTotalAVista"});
   Grid2Container.addRefreshingVar({rfrVar:"A3466CotacaoValorEncargos"});
   Grid2Container.addRefreshingVar({rfrVar:"A3462CotacaoValorFrete"});
   Grid2Container.addRefreshingVar({rfrVar:"A3467CotacaoValorSeguro"});
   Grid2Container.addRefreshingVar({rfrVar:"AV172QtdeCotacao"});
   Grid2Container.addRefreshingVar({rfrVar:"A3479CotacaoValorTotalaPrazo"});
   Grid2Container.addRefreshingVar({rfrVar:"A2929ClassificacaoEstEmpresaId"});
   Grid2Container.addRefreshingVar({rfrVar:"AV142ClassificacaoEstEmpresaId"});
   Grid2Container.addRefreshingVar({rfrVar:"A2930ClassificacaoEstId"});
   Grid2Container.addRefreshingVar({rfrVar:"A2931OpcaoClassificacaoEstId"});
   Grid2Container.addRefreshingVar({rfrVar:"AV32Marca"});
   Grid2Container.addRefreshingVar({rfrVar:"AV171ItemCotacao"});
   Grid2Container.addRefreshingVar({rfrVar:"A4042SolicitacaoItemQtdePedida"});
   Grid2Container.addRefreshingVar({rfrVar:"AV30Item"});
   Grid2Container.addRefreshingVar({rfrVar:"AV167ObsProdutoChar"});
   Grid2Container.addRefreshingVar({rfrVar:"AV110SolicitacaoItemSeq"});
   Grid2Container.addRefreshingVar({rfrVar:"A4049SolicitacaoItemObservacao"});
   Grid2Container.addRefreshingVar({rfrVar:"A2964ProdutoEmpresaId"});
   Grid2Container.addRefreshingVar({rfrVar:"A3828ProdutoObservacao"});
   this.addGridBCProperty("Fornecedor", ["Check"], this.GXValidFnc[82], "AV45Fornecedor");
   this.addGridBCProperty("Fornecedor", ["FornecedorId"], this.GXValidFnc[85], "AV45Fornecedor");
   this.addGridBCProperty("Fornecedor", ["Razao"], this.GXValidFnc[86], "AV45Fornecedor");
   this.addGridBCProperty("Fornecedor", ["Orcamento"], this.GXValidFnc[87], "AV45Fornecedor");
   this.addGridBCProperty("Fornecedor", ["Entrega"], this.GXValidFnc[88], "AV45Fornecedor");
   this.addGridBCProperty("Fornecedor", ["Pagamento"], this.GXValidFnc[89], "AV45Fornecedor");
   this.addGridBCProperty("Fornecedor", ["Telefone"], this.GXValidFnc[90], "AV45Fornecedor");
   this.addGridBCProperty("Fornecedor", ["CNPJ"], this.GXValidFnc[91], "AV45Fornecedor");
   this.addGridBCProperty("Fornecedor", ["NumSolicitacao"], this.GXValidFnc[92], "AV45Fornecedor");
   this.addGridBCProperty("Fornecedor", ["ItemSolicitacao"], this.GXValidFnc[93], "AV45Fornecedor");
   this.addGridBCProperty("Fornecedor", ["Valor"], this.GXValidFnc[94], "AV45Fornecedor");
   this.addGridBCProperty("Fornecedor", ["CPF"], this.GXValidFnc[95], "AV45Fornecedor");
   this.addGridBCProperty("Fornecedor", ["Fantasia"], this.GXValidFnc[96], "AV45Fornecedor");
   this.addGridBCProperty("Sdtregcotacao", ["isChecked"], this.GXValidFnc[173], "AV198SdtRegCotacao");
   this.addGridBCProperty("Sdtregcotacao", ["SolicitacaoItemSeq"], this.GXValidFnc[174], "AV198SdtRegCotacao");
   this.addGridBCProperty("Sdtregcotacao", ["ProdutoDescricaoResumida"], this.GXValidFnc[175], "AV198SdtRegCotacao");
   this.addGridBCProperty("Sdtregcotacao", ["Unidade"], this.GXValidFnc[177], "AV198SdtRegCotacao");
   this.addGridBCProperty("Sdtregcotacao", ["Qtde"], this.GXValidFnc[178], "AV198SdtRegCotacao");
   this.addGridBCProperty("Sdtregcotacao", ["Marca"], this.GXValidFnc[179], "AV198SdtRegCotacao");
   this.addGridBCProperty("Sdtregcotacao", ["ValorAVista"], this.GXValidFnc[181], "AV198SdtRegCotacao");
   this.addGridBCProperty("Sdtregcotacao", ["ValorPrazo"], this.GXValidFnc[182], "AV198SdtRegCotacao");
   this.addGridBCProperty("Sdtregcotacao", ["ValorTotalVista"], this.GXValidFnc[183], "AV198SdtRegCotacao");
   this.addGridBCProperty("Sdtregcotacao", ["ValorTotalPrazo"], this.GXValidFnc[184], "AV198SdtRegCotacao");
   this.addGridBCProperty("Sdtregcotacao", ["ProdutoId"], this.GXValidFnc[189], "AV198SdtRegCotacao");
   this.addGridBCProperty("Sdtregcotacao", ["PessoaId"], this.GXValidFnc[190], "AV198SdtRegCotacao");
   this.addGridBCProperty("Sdtregcotacao", ["CotacaoSnGanhador"], this.GXValidFnc[191], "AV198SdtRegCotacao");
   this.addGridBCProperty("Sdtregcotacao", ["CotacaoValorTotalAPrazo"], this.GXValidFnc[192], "AV198SdtRegCotacao");
   this.addGridBCProperty("Sdtregcotacao", ["CotacaoValorTotalAVista"], this.GXValidFnc[193], "AV198SdtRegCotacao");
   this.addGridBCProperty("Sdtregcotacao", ["CotacaoValorEncargos"], this.GXValidFnc[194], "AV198SdtRegCotacao");
   this.addGridBCProperty("Sdtregcotacao", ["CotacaoValorFrete"], this.GXValidFnc[195], "AV198SdtRegCotacao");
   this.addGridBCProperty("Sdtregcotacao", ["CotacaoValorSeguro"], this.GXValidFnc[196], "AV198SdtRegCotacao");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarcotacao());
