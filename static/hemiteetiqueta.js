/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:5:51.84
*/
gx.evt.autoSkip = false;
gx.define('hemiteetiqueta', false, function () {
   this.ServerClass =  "hemiteetiqueta" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV82CodificacaoEstEmpresaId=gx.fn.getControlValue("vCODIFICACAOESTEMPRESAID") ;
      this.AV84ClassificacaoEstEmpresaId=gx.fn.getControlValue("vCLASSIFICACAOESTEMPRESAID") ;
      this.AV208IdentificacaoProduto=gx.fn.getControlValue("vIDENTIFICACAOPRODUTO") ;
      this.AV69SdtGridProdutoEtiqueta=gx.fn.getControlValue("vSDTGRIDPRODUTOETIQUETA") ;
      this.AV216isUnicoAtt=gx.fn.getControlValue("vISUNICOATT") ;
      this.AV172ValorAtributoCodigo=gx.fn.getIntegerValue("vVALORATRIBUTOCODIGO",'.') ;
      this.AV213SnLoteMedicamen=gx.fn.getControlValue("vSNLOTEMEDICAMEN") ;
      this.AV257Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV201SdtTxtTela=gx.fn.getControlValue("vSDTTXTTELA") ;
      this.AV15EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
      this.A2964ProdutoEmpresaId=gx.fn.getControlValue("PRODUTOEMPRESAID") ;
      this.AV75ProdutoEmpresaId=gx.fn.getControlValue("vPRODUTOEMPRESAID") ;
      this.A2965ProdutoId=gx.fn.getIntegerValue("PRODUTOID",'.') ;
      this.A2915EsquemaCodigo=gx.fn.getIntegerValue("ESQUEMACODIGO",'.') ;
      this.AV130EsquemaUnico=gx.fn.getControlValue("vESQUEMAUNICO") ;
      this.A2921AtributoEsquemaCodigo=gx.fn.getIntegerValue("ATRIBUTOESQUEMACODIGO",'.') ;
      this.A2916AtributoEsquemaDescricao=gx.fn.getControlValue("ATRIBUTOESQUEMADESCRICAO") ;
      this.A2917AtributoEsquemaSnCadastrado=gx.fn.getControlValue("ATRIBUTOESQUEMASNCADASTRADO") ;
      this.AV103SNErro=gx.fn.getControlValue("vSNERRO") ;
      this.A1228FilialEmpresaId=gx.fn.getControlValue("FILIALEMPRESAID") ;
      this.A1156FilialId=gx.fn.getIntegerValue("FILIALID",'.') ;
      this.A3624LoteProdutoCombinacao=gx.fn.getControlValue("LOTEPRODUTOCOMBINACAO") ;
      this.AV128LoteProdutoCombinacao=gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO") ;
      this.A3645LoteProdutoQtdeAtual=gx.fn.getDecimalValue("LOTEPRODUTOQTDEATUAL",'.',',') ;
      this.A2960ProdutoDescricao=gx.fn.getControlValue("PRODUTODESCRICAO") ;
      this.A2961ProdutoDescricaoResumida=gx.fn.getControlValue("PRODUTODESCRICAORESUMIDA") ;
      this.A3840ProdutoFamiliaId=gx.fn.getControlValue("PRODUTOFAMILIAID") ;
      this.A3838ProdutoCodificacaoPrincipal=gx.fn.getControlValue("PRODUTOCODIFICACAOPRINCIPAL") ;
      this.A3400ProdutoClassificacaoPrincipal=gx.fn.getControlValue("PRODUTOCLASSIFICACAOPRINCIPAL") ;
      this.A3398ProdutoFabricanteId=gx.fn.getIntegerValue("PRODUTOFABRICANTEID",'.') ;
      this.A3846ProdutoFabricanteFantasia=gx.fn.getControlValue("PRODUTOFABRICANTEFANTASIA") ;
      this.AV214MesAnoVenc=gx.fn.getControlValue("vMESANOVENC") ;
      this.AV212isVencLote=gx.fn.getControlValue("vISVENCLOTE") ;
      this.AV165EsquemaCodigoProduto=gx.fn.getIntegerValue("vESQUEMACODIGOPRODUTO",'.') ;
      this.AV171AtributoEsquemaCodigo=gx.fn.getIntegerValue("vATRIBUTOESQUEMACODIGO",'.') ;
      this.A2939ValorAtributoUsuarioAlt=gx.fn.getControlValue("VALORATRIBUTOUSUARIOALT") ;
      this.A2941ValorAtributoCodigo=gx.fn.getIntegerValue("VALORATRIBUTOCODIGO",'.') ;
      this.A2938ValorAtributoDescricao=gx.fn.getControlValue("VALORATRIBUTODESCRICAO") ;
      this.AV124i=gx.fn.getIntegerValue("vI",'.') ;
      this.AV173ValorAtributoCodigoStr=gx.fn.getControlValue("vVALORATRIBUTOCODIGOSTR") ;
      this.AV174ValorAtributoDescricao=gx.fn.getControlValue("vVALORATRIBUTODESCRICAO") ;
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
   this.Validv_Etiquetatermicamodelo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vETIQUETATERMICAMODELO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Etiquetacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vETIQUETACODIGO");
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
   this.Validv_Pessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAID");
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
   this.Validv_Familiaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFAMILIAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Fabricante=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFABRICANTE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Codificacaoestid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCODIFICACAOESTID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Classificacaoestid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCLASSIFICACAOESTID");
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
   this.Validv_Empresaetiquetaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAETIQUETAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Etiquetatermicaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vETIQUETATERMICAEMPRESAID");
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
   this.s142_client=function()
   {
      gx.fn.setCtrlProperty("DIVPROD1","Caption", "<div id=\"dvd\" style=height:270px;overflow:auto;>" );
      gx.fn.setCtrlProperty("DIVPROD2","Caption", "</div>" );
      gx.fn.setCtrlProperty("DIVFAM1","Caption", "<div id=\"dvd\" style=height:300px;overflow:auto;>" );
      gx.fn.setCtrlProperty("DIVFAM2","Caption", "</div>" );
      gx.fn.setCtrlProperty("DIVFAB1","Caption", "<div id=\"dvd\" style=height:300px;overflow:auto;>" );
      gx.fn.setCtrlProperty("DIVFAB2","Caption", "</div>" );
      gx.fn.setCtrlProperty("DIVCLAS1","Caption", "<div id=\"dvd\" style=height:300px;overflow:auto;>" );
      gx.fn.setCtrlProperty("DIVCLAS2","Caption", "</div>" );
      gx.fn.setCtrlProperty("DIVCOD1","Caption", "<div id=\"dvd\" style=height:300px;overflow:auto;>" );
      gx.fn.setCtrlProperty("DIVCOD2","Caption", "</div>" );
   };
   this.s322_client=function()
   {
      if ( this.AV31TipoEmissao == "A" )
      {
         this.AV305GXV13 = gx.num.trunc( 1 ,0) ;
         while ( this.AV305GXV13 <= this.AV69SdtGridProdutoEtiqueta.length )
         {
            this.AV76SdtGridProdutoEtiquetaItem =  this.AV69SdtGridProdutoEtiqueta[this.AV305GXV13 - 1]  ;
            if ( (0==this.AV76SdtGridProdutoEtiquetaItem.Quantidade) )
            {
               this.addMessage("Informe a Quantidade para o Produto "+gx.text.trim( gx.num.str( this.AV76SdtGridProdutoEtiquetaItem.ProdutoId, 10, 0))+" da linha "+gx.text.trim( gx.num.str( this.AV76SdtGridProdutoEtiquetaItem.Indice, 4, 0)));
               this.AV103SNErro =  "S"  ;
               break;
            }
            this.AV305GXV13 = gx.num.trunc( this.AV305GXV13 + 1 ,0) ;
         }
      }
      else
      {
         this.AV306GXV14 = gx.num.trunc( 1 ,0) ;
         while ( this.AV306GXV14 <= this.AV69SdtGridProdutoEtiqueta.length )
         {
            this.AV76SdtGridProdutoEtiquetaItem =  this.AV69SdtGridProdutoEtiqueta[this.AV306GXV14 - 1]  ;
            if ( this.AV76SdtGridProdutoEtiquetaItem.Quantidade != 0 )
            {
               this.addMessage("Não informe a Quantidade para o Produto "+gx.text.trim( gx.num.str( this.AV76SdtGridProdutoEtiquetaItem.ProdutoId, 10, 0))+" da linha "+gx.text.trim( gx.num.str( this.AV76SdtGridProdutoEtiquetaItem.Indice, 4, 0)));
               this.AV103SNErro =  "S"  ;
               break;
            }
            this.AV306GXV14 = gx.num.trunc( this.AV306GXV14 + 1 ,0) ;
         }
      }
      if ( this.AV103SNErro == "S" )
      {
         this.TABCSSContainer.setPosition(2) ;
      }
   };
   this.s352_client=function()
   {
      if ( this.AV31TipoEmissao == "I" )
      {
         this.AV166TipoEmissaoDesc =  "Implantação"  ;
      }
      else if ( this.AV31TipoEmissao == "E" )
      {
         this.AV166TipoEmissaoDesc =  "Entradas"  ;
      }
      else if ( this.AV31TipoEmissao == "Q" )
      {
         this.AV166TipoEmissaoDesc =  "Entradas com Qtde Atual"  ;
      }
      else if ( this.AV31TipoEmissao == "P" )
      {
         this.AV166TipoEmissaoDesc =  "Pedido"  ;
      }
      else if ( this.AV31TipoEmissao == "S" )
      {
         this.AV166TipoEmissaoDesc =  "Saldo Atual"  ;
      }
      else if ( this.AV31TipoEmissao == "C" )
      {
         this.AV166TipoEmissaoDesc =  "Cadastro"  ;
      }
      else if ( this.AV31TipoEmissao == "A" )
      {
         this.AV166TipoEmissaoDesc =  "Avulsa"  ;
      }
   };
   this.s362_client=function()
   {
      if ( this.AV30Ordenacao == "codigomercadoria" )
      {
         this.AV168OrdenacaoDesc =  "Código da Mercadoria"  ;
      }
      else if ( this.AV30Ordenacao == "descricaoresumida" )
      {
         this.AV168OrdenacaoDesc =  "Descrição Resumida"  ;
      }
      else if ( this.AV30Ordenacao == "descricaocompleta" )
      {
         this.AV168OrdenacaoDesc =  "Descrição Completa"  ;
      }
      else if ( this.AV30Ordenacao == "codigofamilia" )
      {
         this.AV168OrdenacaoDesc =  "Código da Família"  ;
      }
      else if ( this.AV30Ordenacao == "codificacaoprincipal" )
      {
         this.AV168OrdenacaoDesc =  "Codificação Principal"  ;
      }
      else if ( this.AV30Ordenacao == "classificacaoprincipal" )
      {
         this.AV168OrdenacaoDesc =  "Classificação Principal"  ;
      }
      else if ( this.AV30Ordenacao == "codigofabricante" )
      {
         this.AV168OrdenacaoDesc =  "Código do Fabricante"  ;
      }
      else if ( this.AV30Ordenacao == "nomefabricante" )
      {
         this.AV168OrdenacaoDesc =  "Nome do Fabricante"  ;
      }
   };
   this.e11x92_client=function()
   {
      this.executeServerEvent("MODALPARCELAS.CLICK", true, null, false, true);
   };
   this.e12x92_client=function()
   {
      this.executeServerEvent("'AVANCAR'", true, null, false, false);
   };
   this.e40x92_client=function()
   {
      this.executeServerEvent("'LOTEPRODUTO'", true, arguments[0], false, false);
   };
   this.e41x92_client=function()
   {
      this.executeServerEvent("'DLTPRODUTO'", true, arguments[0], false, false);
   };
   this.e13x92_client=function()
   {
      this.executeServerEvent("'ADICIONARFAMILIA'", true, null, false, false);
   };
   this.e30x92_client=function()
   {
      this.executeServerEvent("'DLTFAMILIA'", true, arguments[0], false, false);
   };
   this.e14x92_client=function()
   {
      this.executeServerEvent("'ADICIONARFABRICANTE'", true, null, false, false);
   };
   this.e32x92_client=function()
   {
      this.executeServerEvent("'DLTFABRICANTE'", true, arguments[0], false, false);
   };
   this.e15x92_client=function()
   {
      this.executeServerEvent("'ADICIONARCODIFICACAO'", true, null, false, false);
   };
   this.e34x92_client=function()
   {
      this.executeServerEvent("'DLTCODIFICACAO'", true, arguments[0], false, false);
   };
   this.e16x92_client=function()
   {
      this.executeServerEvent("'ADICIONARCLASSIFICACAO'", true, null, false, false);
   };
   this.e36x92_client=function()
   {
      this.executeServerEvent("'DLTCLASSIFICACAO'", true, arguments[0], false, false);
   };
   this.e17x92_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e18x92_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e19x92_client=function()
   {
      this.executeServerEvent("'LIMPARGRIDPRODUTO'", true, null, false, false);
   };
   this.e20x92_client=function()
   {
      this.executeServerEvent("'LIMPARGRIDFAMILIA'", true, null, false, false);
   };
   this.e21x92_client=function()
   {
      this.executeServerEvent("'LIMPARGRIDFABRICANTE'", true, null, false, false);
   };
   this.e22x92_client=function()
   {
      this.executeServerEvent("'LIMPARGRIDCODIF'", true, null, false, false);
   };
   this.e23x92_client=function()
   {
      this.executeServerEvent("'LIMPARGRIDCLASSIF'", true, null, false, false);
   };
   this.e24x92_client=function()
   {
      this.executeServerEvent("'CONFIRMAR'", false, null, false, false);
   };
   this.e25x92_client=function()
   {
      this.executeServerEvent("'LISTARPRODUTOS'", true, null, false, false);
   };
   this.e26x92_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e27x92_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e28x92_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e29x92_client=function()
   {
      this.executeServerEvent("VTPETIQUETA.CLICK", true, null, false, true);
   };
   this.e43x92_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,13,15,19,22,25,28,30,31,32,35,37,40,42,45,47,49,54,57,59,60,61,62,65,67,70,72,77,80,83,85,87,89,92,94,95,96,99,101,103,105,108,110,111,114,116,118,120,123,125,128,130,133,135,136,139,141,142,145,147,149,154,157,159,160,163,164,167,170,172,175,176,179,180,182,185,186,188,189,191,193,194,197,199,203,204,207,209,211,213,215,217,221,222,223,225,226,227,229,230,231,233,234,235,237,238,239,244,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,270,273,275,277,279,280,282,283,284,285,286,289,292,294,296,298,299,301,302,303,304,305,306,309,312,314,316,318,319,321,322,323,324,325,328,331,333,335,337,338,340,341,342,343,344,351,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,374,376,377,378,379,380,381];
   this.GXLastCtrlId =381;
   this.Grid3Container = new gx.grid.grid(this, 2,"WbpLvl2",245,"Grid3","Grid3","Grid3Container",this.CmpContext,this.IsMasterPage,"hemiteetiqueta",[],false,1,false,true,0,false,false,false,"CollSdtGridProdutoEtiqueta.SdtGridProdutoEtiquetaItem",0,"px","Novo registro",false,false,false,null,null,false,"AV69SdtGridProdutoEtiqueta",false,[1,1,1,1]);
   var Grid3Container = this.Grid3Container;
   Grid3Container.addSingleLineEdit("GXV16U",246,"CTLPRODUTOID","Produto","","ProdutoId","int",0,"px",10,10,"right",null,[],"GXV16U","GXV16U",true,0,false,false,"SemQuebraGrid",1,"");
   Grid3Container.addSingleLineEdit("GXV16V",247,"CTLPRODUTOCODIGOBARRAS","Produto","","ProdutoCodigoBarras","int",0,"px",15,15,"right",null,[],"GXV16V","GXV16V",true,0,false,false,"SemQuebraGrid",1,"");
   Grid3Container.addSingleLineEdit("GXV16W",248,"CTLPRODUTODESCRICAO","Descrição","","ProdutoDescricao","svchar",0,"px",40,40,"left",null,[],"GXV16W","GXV16W",true,0,false,false,"SemQuebraGrid",1,"");
   Grid3Container.addSingleLineEdit("GXV16X",249,"CTLLOTEPRODUTOCOMBINACAO","Lote","","LoteProdutoCombinacao","char",0,"px",20,20,"left",null,[],"GXV16X","GXV16X",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit("GXV16Y",250,"CTLMESANOVENC","Vencimento","","MesAnoVenc","char",0,"px",7,7,"left",null,[],"GXV16Y","GXV16Y",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit("GXV16Z",251,"CTLQUANTIDADE","Quantidade","","Quantidade","int",0,"px",4,4,"right",null,[],"GXV16Z","GXV16Z",true,0,false,false,"SemQuebraGrid",1,"");
   Grid3Container.addSingleLineEdit("GXV170",252,"CTLATRIBUTO1","Atributo1","","Atributo1","svchar",0,"px",15,15,"left",null,[],"GXV170","GXV170",false,0,false,false,"SemQuebraGrid",1,"");
   Grid3Container.addSingleLineEdit("GXV171",253,"CTLATRIBUTO2","Atributo2","","Atributo2","svchar",0,"px",15,15,"left",null,[],"GXV171","GXV171",false,0,false,false,"SemQuebraGrid",1,"");
   Grid3Container.addSingleLineEdit("GXV172",254,"CTLATRIBUTO3","Atributo3","","Atributo3","svchar",0,"px",15,15,"left",null,[],"GXV172","GXV172",false,0,false,false,"SemQuebraGrid",1,"");
   Grid3Container.addSingleLineEdit("GXV173",255,"CTLATRIBUTO4","Atributo4","","Atributo4","svchar",0,"px",15,15,"left",null,[],"GXV173","GXV173",false,0,false,false,"SemQuebraGrid",1,"");
   Grid3Container.addSingleLineEdit("GXV174",256,"CTLATRIBUTO5","Atributo5","","Atributo5","svchar",0,"px",15,15,"left",null,[],"GXV174","GXV174",false,0,false,false,"SemQuebraGrid",1,"");
   Grid3Container.addBitmap("&Bmplote","vBMPLOTE",257,0,"px",17,"px","e40x92_client","","Lote","Image","");
   Grid3Container.addBitmap("&Bmpexcproduto","vBMPEXCPRODUTO",258,0,"px",17,"px","e41x92_client","","Exc","Image","");
   Grid3Container.addSingleLineEdit("GXV177",259,"CTLINDICE","Indice","","Indice","int",0,"px",4,4,"right",null,[],"GXV177","GXV177",false,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit("GXV178",260,"CTLPRODUTOFAMILIAID","Família","","ProdutoFamiliaId","char",0,"px",15,15,"left",null,[],"GXV178","GXV178",false,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit("GXV179",261,"CTLPRODUTODESCRICAOCOMP","Descrição do Produto","","ProdutoDescricaoComp","svchar",0,"px",120,80,"left",null,[],"GXV179","GXV179",false,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit("GXV17A",262,"CTLPRODUTOCODPRINCIPAL","Codificação Principal","","ProdutoCodPrincipal","char",0,"px",20,20,"left",null,[],"GXV17A","GXV17A",false,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit("GXV17B",263,"CTLPRODUTOCLASSPRINCIPAL","Classificação Principal","","ProdutoClassPrincipal","char",0,"px",20,20,"left",null,[],"GXV17B","GXV17B",false,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit("GXV17C",264,"CTLPRODUTOFABID","Fabricante","","ProdutoFabId","int",0,"px",7,7,"right",null,[],"GXV17C","GXV17C",false,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit("GXV17D",265,"CTLPRODUTOFABFANTASIA","Fantasia","","ProdutoFabFantasia","svchar",0,"px",60,60,"left",null,[],"GXV17D","GXV17D",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid3Container);
   this.Grid1Container = new gx.grid.grid(this, 32,"WbpLvl32",281,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hemiteetiqueta",[],false,1,true,true,0,false,false,false,"CollSdtGridFamilia.SdtGridFamiliaItem",0,"px","Novo registro",false,false,false,null,null,false,"AV58SdtGridFamilia",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("GXV17U",282,"CTLFAMILIAID","Família","","FamiliaId","char",0,"px",15,15,"left",null,[],"GXV17U","GXV17U",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV17V",283,"CTLFAMILIADESCRICAO","Descrição","","FamiliaDescricao","svchar",190,"px",30,30,"left",null,[],"GXV17V","GXV17V",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmpexcfamilia","vBMPEXCFAMILIA",284,0,"px",17,"px","e30x92_client","","Exc","GridColumnImage","");
   Grid1Container.addSingleLineEdit("GXV17X",285,"CTLINDICE1","Indice","","Indice","int",0,"px",4,4,"right",null,[],"GXV17X","GXV17X",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   this.Grid2Container = new gx.grid.grid(this, 31,"WbpLvl31",300,"Grid2","Grid2","Grid2Container",this.CmpContext,this.IsMasterPage,"hemiteetiqueta",[],false,1,true,true,0,false,false,false,"CollSdtGridFabricante.SdtGridFabricanteItem",0,"px","Novo registro",false,false,false,null,null,false,"AV59SdtGridFabricante",false,[1,1,1,1]);
   var Grid2Container = this.Grid2Container;
   Grid2Container.addSingleLineEdit("GXV18D",301,"CTLFABRICANTE","Fabricante","","Fabricante","int",0,"px",7,7,"right",null,[],"GXV18D","GXV18D",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit("GXV18E",302,"CTLFABICANTENOME","Nome","","FabicanteNome","svchar",190,"px",60,60,"left",null,[],"GXV18E","GXV18E",true,0,false,false,"Attribute",1,"");
   Grid2Container.addBitmap("&Bmpexcfabricante","vBMPEXCFABRICANTE",303,0,"px",17,"px","e32x92_client","","Exc","GridColumnImage","");
   Grid2Container.addSingleLineEdit("GXV18G",304,"CTLINDICE2","Indice","","Indice","int",0,"px",4,4,"right",null,[],"GXV18G","GXV18G",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid2Container);
   this.Grid4Container = new gx.grid.grid(this, 30,"WbpLvl30",320,"Grid4","Grid4","Grid4Container",this.CmpContext,this.IsMasterPage,"hemiteetiqueta",[],false,1,true,true,0,false,false,false,"CollSdtGridCodificaoEtiqueta.SdtGridCodificaoEtiquetaItem",0,"px","Novo registro",false,false,false,null,null,false,"AV77SdtGridCodificacaoEtiqueta",false,[1,1,1,1]);
   var Grid4Container = this.Grid4Container;
   Grid4Container.addComboBox("GXV18X",321,"CTLCODIFICACAOESTID","Codificação","CodificacaoEstId","char",null,0,true,false,0,"px","");
   Grid4Container.addSingleLineEdit("GXV18Y",322,"CTLPRODUTOCODIFICACAOVALOR","Valor Codificação","","ProdutoCodificacaoValor","char",0,"px",20,20,"left",null,[],"GXV18Y","GXV18Y",true,0,false,false,"Attribute",1,"");
   Grid4Container.addBitmap("&Bmpexccodificacao","vBMPEXCCODIFICACAO",323,0,"px",17,"px","e34x92_client","","Exc","GridColumnImage","");
   Grid4Container.addSingleLineEdit("GXV190",324,"CTLINDICE4","Indice","","Indice","int",0,"px",4,4,"right",null,[],"GXV190","GXV190",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid4Container);
   this.Grid5Container = new gx.grid.grid(this, 29,"WbpLvl29",339,"Grid5","Grid5","Grid5Container",this.CmpContext,this.IsMasterPage,"hemiteetiqueta",[],false,1,true,true,0,false,false,false,"CollSdtGridClassificacaoEtiqueta.SdtGridClassificacaoEtiquetaItem",0,"px","Novo registro",false,false,false,null,null,false,"AV78SdtGridClassificacaoEtiqueta",false,[1,1,1,1]);
   var Grid5Container = this.Grid5Container;
   Grid5Container.addComboBox("GXV19G",340,"CTLCLASSIFICACAOESTID","Classificação","ClassificacaoEstId","char",null,0,true,false,0,"px","");
   Grid5Container.addComboBox("GXV19H",341,"CTLPRODUTOCLASSIFICACAOVALOR","Valor","ProdutoClassificacaoValor","char",null,0,true,false,0,"px","");
   Grid5Container.addBitmap("&Bmpexcclassificacao","vBMPEXCCLASSIFICACAO",342,0,"px",17,"px","e36x92_client","","Exc","GridColumnImage","");
   Grid5Container.addSingleLineEdit("GXV19J",343,"CTLINDICE5","Indice","","Indice","int",0,"px",4,4,"right",null,[],"GXV19J","GXV19J",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid5Container);
   this.TABCSSContainer = gx.uc.getNew(this, 18, 11, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV196Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV196Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV196Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "hemiteetiqueta_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[3]={fld:"TABPRINCIPAL",grid:0};
   GXValidFnc[6]={fld:"TABTXT",grid:0};
   GXValidFnc[9]={fld:"TEXTBLOCK54", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV217TxtTela",gxold:"OV217TxtTela",gxvar:"AV217TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV217TxtTela=Value},v2z:function(Value){gx.O.ZV217TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV217TxtTela)},c2v:function(){gx.O.AV217TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"IMAGE9",grid:0};
   GXValidFnc[15]={fld:"IMGEXCTXTTELA",grid:0};
   GXValidFnc[19]={fld:"TAB1",grid:0};
   GXValidFnc[22]={fld:"TABLE2",grid:0};
   GXValidFnc[25]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[28]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV27FilialId",gxold:"OV27FilialId",gxvar:"AV27FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV27FilialId,0)},c2v:function(){gx.O.AV27FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[31]={fld:"PROMPTFILIAL",grid:0};
   GXValidFnc[32]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV87FilialNome",gxold:"OV87FilialNome",gxvar:"AV87FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV87FilialNome=Value},v2z:function(Value){gx.O.ZV87FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV87FilialNome,0)},c2v:function(){gx.O.AV87FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPETIQUETA",gxz:"ZV28TpEtiqueta",gxold:"OV28TpEtiqueta",gxvar:"AV28TpEtiqueta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28TpEtiqueta=Value},v2z:function(Value){gx.O.ZV28TpEtiqueta=Value},v2c:function(){gx.fn.setComboBoxValue("vTPETIQUETA",gx.O.AV28TpEtiqueta)},c2v:function(){gx.O.AV28TpEtiqueta=this.val()},val:function(){return gx.fn.getControlValue("vTPETIQUETA")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDENACAO",gxz:"ZV30Ordenacao",gxold:"OV30Ordenacao",gxvar:"AV30Ordenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV30Ordenacao=Value},v2z:function(Value){gx.O.ZV30Ordenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vORDENACAO",gx.O.AV30Ordenacao)},c2v:function(){gx.O.AV30Ordenacao=this.val()},val:function(){return gx.fn.getControlValue("vORDENACAO")},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOEMISSAO",gxz:"ZV31TipoEmissao",gxold:"OV31TipoEmissao",gxvar:"AV31TipoEmissao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV31TipoEmissao=Value},v2z:function(Value){gx.O.ZV31TipoEmissao=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOEMISSAO",gx.O.AV31TipoEmissao)},c2v:function(){gx.O.AV31TipoEmissao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOEMISSAO")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TABLE5",grid:0};
   GXValidFnc[54]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNIMPMOEDA",gxz:"ZV156SNImpMoeda",gxold:"OV156SNImpMoeda",gxvar:"AV156SNImpMoeda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV156SNImpMoeda=Value},v2z:function(Value){gx.O.ZV156SNImpMoeda=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNIMPMOEDA",gx.O.AV156SNImpMoeda,"S")},c2v:function(){gx.O.AV156SNImpMoeda=this.val()},val:function(){return gx.fn.getControlValue("vSNIMPMOEDA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[57]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Etiquetatermicamodelo,isvalid:null,rgrid:[],fld:"vETIQUETATERMICAMODELO",gxz:"ZV29EtiquetaTermicaModelo",gxold:"OV29EtiquetaTermicaModelo",gxvar:"AV29EtiquetaTermicaModelo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29EtiquetaTermicaModelo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29EtiquetaTermicaModelo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vETIQUETATERMICAMODELO",gx.O.AV29EtiquetaTermicaModelo,0)},c2v:function(){gx.O.AV29EtiquetaTermicaModelo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vETIQUETATERMICAMODELO",'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vETIQUETATERMICADESCRICAO",gxz:"ZV91EtiquetaTermicaDescricao",gxold:"OV91EtiquetaTermicaDescricao",gxvar:"AV91EtiquetaTermicaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV91EtiquetaTermicaDescricao=Value},v2z:function(Value){gx.O.ZV91EtiquetaTermicaDescricao=Value},v2c:function(){gx.fn.setControlValue("vETIQUETATERMICADESCRICAO",gx.O.AV91EtiquetaTermicaDescricao,0)},c2v:function(){gx.O.AV91EtiquetaTermicaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vETIQUETATERMICADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Etiquetacodigo,isvalid:null,rgrid:[],fld:"vETIQUETACODIGO",gxz:"ZV92EtiquetaCodigo",gxold:"OV92EtiquetaCodigo",gxvar:"AV92EtiquetaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV92EtiquetaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV92EtiquetaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vETIQUETACODIGO",gx.O.AV92EtiquetaCodigo,0)},c2v:function(){gx.O.AV92EtiquetaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vETIQUETACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vETIQUETADESCRICAO",gxz:"ZV93EtiquetaDescricao",gxold:"OV93EtiquetaDescricao",gxvar:"AV93EtiquetaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV93EtiquetaDescricao=Value},v2z:function(Value){gx.O.ZV93EtiquetaDescricao=Value},v2c:function(){gx.fn.setControlValue("vETIQUETADESCRICAO",gx.O.AV93EtiquetaDescricao,0)},c2v:function(){gx.O.AV93EtiquetaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vETIQUETADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[65]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[67]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLINHAINICIAL",gxz:"ZV139LinhaInicial",gxold:"OV139LinhaInicial",gxvar:"AV139LinhaInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV139LinhaInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV139LinhaInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLINHAINICIAL",gx.O.AV139LinhaInicial,0)},c2v:function(){gx.O.AV139LinhaInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLINHAINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[70]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[72]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOLUNAINICIAL",gxz:"ZV138ColunaInicial",gxold:"OV138ColunaInicial",gxvar:"AV138ColunaInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV138ColunaInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV138ColunaInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCOLUNAINICIAL",gx.O.AV138ColunaInicial,0)},c2v:function(){gx.O.AV138ColunaInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOLUNAINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TABLE6",grid:0};
   GXValidFnc[80]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[83]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAREFERENCIAINI",gxz:"ZV32DataReferenciaIni",gxold:"OV32DataReferenciaIni",gxvar:"AV32DataReferenciaIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32DataReferenciaIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV32DataReferenciaIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAREFERENCIAINI",gx.O.AV32DataReferenciaIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV32DataReferenciaIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAREFERENCIAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 85 , function() {
   });
   GXValidFnc[87]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAREFERENCIAFIM",gxz:"ZV34DataReferenciaFim",gxold:"OV34DataReferenciaFim",gxvar:"AV34DataReferenciaFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34DataReferenciaFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV34DataReferenciaFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAREFERENCIAFIM",gx.O.AV34DataReferenciaFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV34DataReferenciaFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAREFERENCIAFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 89 , function() {
   });
   GXValidFnc[92]={fld:"TXTPEDIDO", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRANUMERO",gxz:"ZV33PedidoCompraNumero",gxold:"OV33PedidoCompraNumero",gxvar:"AV33PedidoCompraNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33PedidoCompraNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33PedidoCompraNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRANUMERO",gx.O.AV33PedidoCompraNumero,0)},c2v:function(){gx.O.AV33PedidoCompraNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRANUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[95]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAANO",gxz:"ZV105PedidoCompraAno",gxold:"OV105PedidoCompraAno",gxvar:"AV105PedidoCompraAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV105PedidoCompraAno=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV105PedidoCompraAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAANO",gx.O.AV105PedidoCompraAno,0)},c2v:function(){gx.O.AV105PedidoCompraAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRAANO",'.')},nac:gx.falseFn};
   GXValidFnc[96]={fld:"IMGPEDIDO",grid:0};
   GXValidFnc[99]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[101]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOCALINI",gxz:"ZV35LocalIni",gxold:"OV35LocalIni",gxvar:"AV35LocalIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35LocalIni=Value},v2z:function(Value){gx.O.ZV35LocalIni=Value},v2c:function(){gx.fn.setControlValue("vLOCALINI",gx.O.AV35LocalIni,0)},c2v:function(){gx.O.AV35LocalIni=this.val()},val:function(){return gx.fn.getControlValue("vLOCALINI")},nac:gx.falseFn};
   GXValidFnc[103]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[105]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOCALFIM",gxz:"ZV36LocalFim",gxold:"OV36LocalFim",gxvar:"AV36LocalFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36LocalFim=Value},v2z:function(Value){gx.O.ZV36LocalFim=Value},v2c:function(){gx.fn.setControlValue("vLOCALFIM",gx.O.AV36LocalFim,0)},c2v:function(){gx.O.AV36LocalFim=this.val()},val:function(){return gx.fn.getControlValue("vLOCALFIM")},nac:gx.falseFn};
   GXValidFnc[108]={fld:"TXTESQUEMA", format:0,grid:0};
   GXValidFnc[110]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Esquemacodigo,isvalid:null,rgrid:[],fld:"vESQUEMACODIGO",gxz:"ZV161EsquemaCodigo",gxold:"OV161EsquemaCodigo",gxvar:"AV161EsquemaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV161EsquemaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV161EsquemaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESQUEMACODIGO",gx.O.AV161EsquemaCodigo,0)},c2v:function(){gx.O.AV161EsquemaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESQUEMACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[111]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESQUEMADESCRICAO",gxz:"ZV164EsquemaDescricao",gxold:"OV164EsquemaDescricao",gxvar:"AV164EsquemaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV164EsquemaDescricao=Value},v2z:function(Value){gx.O.ZV164EsquemaDescricao=Value},v2c:function(){gx.fn.setControlValue("vESQUEMADESCRICAO",gx.O.AV164EsquemaDescricao,0)},c2v:function(){gx.O.AV164EsquemaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vESQUEMADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[114]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[116]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIAINI",gxz:"ZV37ProdutoReferenciaIni",gxold:"OV37ProdutoReferenciaIni",gxvar:"AV37ProdutoReferenciaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37ProdutoReferenciaIni=Value},v2z:function(Value){gx.O.ZV37ProdutoReferenciaIni=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIAINI",gx.O.AV37ProdutoReferenciaIni,0)},c2v:function(){gx.O.AV37ProdutoReferenciaIni=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIAINI")},nac:gx.falseFn};
   GXValidFnc[118]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[120]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIAFIM",gxz:"ZV38ProdutoReferenciaFim",gxold:"OV38ProdutoReferenciaFim",gxvar:"AV38ProdutoReferenciaFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38ProdutoReferenciaFim=Value},v2z:function(Value){gx.O.ZV38ProdutoReferenciaFim=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIAFIM",gx.O.AV38ProdutoReferenciaFim,0)},c2v:function(){gx.O.AV38ProdutoReferenciaFim=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIAFIM")},nac:gx.falseFn};
   GXValidFnc[123]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[125]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOTIPO",gxz:"ZV39ProdutoTipo",gxold:"OV39ProdutoTipo",gxvar:"AV39ProdutoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39ProdutoTipo=Value},v2z:function(Value){gx.O.ZV39ProdutoTipo=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOTIPO",gx.O.AV39ProdutoTipo,0)},c2v:function(){gx.O.AV39ProdutoTipo=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOTIPO")},nac:gx.falseFn};
   GXValidFnc[128]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[130]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCATEGORIA",gxz:"ZV170ProdutoCategoria",gxold:"OV170ProdutoCategoria",gxvar:"AV170ProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV170ProdutoCategoria=Value},v2z:function(Value){gx.O.ZV170ProdutoCategoria=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOCATEGORIA",gx.O.AV170ProdutoCategoria)},c2v:function(){gx.O.AV170ProdutoCategoria=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCATEGORIA")},nac:gx.falseFn};
   GXValidFnc[133]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[135]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV41PessoaId",gxold:"OV41PessoaId",gxvar:"AV41PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV41PessoaId,0)},c2v:function(){gx.O.AV41PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[136]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV159PessoaFantasia",gxold:"OV159PessoaFantasia",gxvar:"AV159PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV159PessoaFantasia=Value},v2z:function(Value){gx.O.ZV159PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV159PessoaFantasia,0)},c2v:function(){gx.O.AV159PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[139]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[141]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDOCUMENTO",gxz:"ZV40Documento",gxold:"OV40Documento",gxvar:"AV40Documento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40Documento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40Documento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDOCUMENTO",gx.O.AV40Documento,0)},c2v:function(){gx.O.AV40Documento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDOCUMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[142]={fld:"IMGDETALHAR",grid:0};
   GXValidFnc[145]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[147]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAULTENVIO",gxz:"ZV42DataUltEnvio",gxold:"OV42DataUltEnvio",gxvar:"AV42DataUltEnvio",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42DataUltEnvio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV42DataUltEnvio=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAULTENVIO",gx.O.AV42DataUltEnvio,0)},c2v:function(){gx.O.AV42DataUltEnvio=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vDATAULTENVIO")},nac:gx.falseFn};
   GXValidFnc[149]={fld:"TABLE7",grid:0};
   GXValidFnc[154]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNPRECOPROMOCAO",gxz:"ZV180SNPrecoPromocao",gxold:"OV180SNPrecoPromocao",gxvar:"AV180SNPrecoPromocao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV180SNPrecoPromocao=Value},v2z:function(Value){gx.O.ZV180SNPrecoPromocao=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNPRECOPROMOCAO",gx.O.AV180SNPrecoPromocao,"S")},c2v:function(){gx.O.AV180SNPrecoPromocao=this.val()},val:function(){return gx.fn.getControlValue("vSNPRECOPROMOCAO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[157]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[159]={lvl:0,type:"int",len:2,dec:0,sign:true,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEPARCELAS",gxz:"ZV181QtdeParcelas",gxold:"OV181QtdeParcelas",gxvar:"AV181QtdeParcelas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV181QtdeParcelas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV181QtdeParcelas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEPARCELAS",gx.O.AV181QtdeParcelas,0)},c2v:function(){gx.O.AV181QtdeParcelas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEPARCELAS",'.')},nac:gx.falseFn};
   GXValidFnc[160]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSESSAOAUX",gxz:"ZV182SessaoAux",gxold:"OV182SessaoAux",gxvar:"AV182SessaoAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV182SessaoAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV182SessaoAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSESSAOAUX",gx.O.AV182SessaoAux,0)},c2v:function(){gx.O.AV182SessaoAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSESSAOAUX",'.')},nac:gx.falseFn};
   GXValidFnc[163]={fld:"MODALPARCELAS", format:0,grid:0};
   GXValidFnc[164]={fld:"TAB2",grid:0};
   GXValidFnc[167]={fld:"TABLE12",grid:0};
   GXValidFnc[170]={fld:"TXTABACODIFI3", format:0,grid:0};
   GXValidFnc[172]={fld:"TABLE9",grid:0};
   GXValidFnc[175]={fld:"TABLE1",grid:0};
   GXValidFnc[176]={fld:"TABCOD",grid:0};
   GXValidFnc[179]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV68ProdutoId",gxold:"OV68ProdutoId",gxvar:"AV68ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV68ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV68ProdutoId,0)},c2v:function(){gx.O.AV68ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[180]={fld:"IMGPROMPT",grid:0};
   GXValidFnc[182]={fld:"TABCBARRAS",grid:0};
   GXValidFnc[185]={lvl:0,type:"int",len:14,dec:0,sign:false,pic:"ZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOBARRAS",gxz:"ZV207ProdutoCodigoBarras",gxold:"OV207ProdutoCodigoBarras",gxvar:"AV207ProdutoCodigoBarras",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV207ProdutoCodigoBarras=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV207ProdutoCodigoBarras=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOBARRAS",gx.O.AV207ProdutoCodigoBarras,0)},c2v:function(){gx.O.AV207ProdutoCodigoBarras=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOBARRAS",'.')},nac:gx.falseFn};
   GXValidFnc[186]={fld:"PROMPTCBARRAS",grid:0};
   GXValidFnc[188]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNAVANCAR",gxz:"ZV157SNAvancar",gxold:"OV157SNAvancar",gxvar:"AV157SNAvancar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV157SNAvancar=Value},v2z:function(Value){gx.O.ZV157SNAvancar=Value},v2c:function(){gx.fn.setControlValue("vSNAVANCAR",gx.O.AV157SNAvancar,0)},c2v:function(){gx.O.AV157SNAvancar=this.val()},val:function(){return gx.fn.getControlValue("vSNAVANCAR")},nac:gx.falseFn};
   GXValidFnc[189]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBMPAVANCAR",gxz:"ZV127bmpAvancar",gxold:"OV127bmpAvancar",gxvar:"AV127bmpAvancar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV127bmpAvancar=Value},v2z:function(Value){gx.O.ZV127bmpAvancar=Value},v2c:function(){gx.fn.setMultimediaValue("vBMPAVANCAR",gx.O.AV127bmpAvancar,gx.O.AV262Bmpavancar_GXI)},c2v:function(){gx.O.AV262Bmpavancar_GXI=this.val_GXI();gx.O.AV127bmpAvancar=this.val()},val:function(){return gx.fn.getBlobValue("vBMPAVANCAR")},val_GXI:function(){return gx.fn.getControlValue("vBMPAVANCAR_GXI")}, gxvar_GXI:'AV262Bmpavancar_GXI',nac:gx.falseFn};
   GXValidFnc[191]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPRODUTO",gxz:"ZV71bmpProduto",gxold:"OV71bmpProduto",gxvar:"AV71bmpProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71bmpProduto=Value},v2z:function(Value){gx.O.ZV71bmpProduto=Value},v2c:function(){gx.fn.setMultimediaValue("vBMPPRODUTO",gx.O.AV71bmpProduto,gx.O.AV259Bmpproduto_GXI)},c2v:function(){gx.O.AV259Bmpproduto_GXI=this.val_GXI();gx.O.AV71bmpProduto=this.val()},val:function(){return gx.fn.getBlobValue("vBMPPRODUTO")},val_GXI:function(){return gx.fn.getControlValue("vBMPPRODUTO_GXI")}, gxvar_GXI:'AV259Bmpproduto_GXI',nac:gx.falseFn};
   GXValidFnc[193]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPRODUTOEXC",gxz:"ZV191bmpProdutoExc",gxold:"OV191bmpProdutoExc",gxvar:"AV191bmpProdutoExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV191bmpProdutoExc=Value},v2z:function(Value){gx.O.ZV191bmpProdutoExc=Value},v2c:function(){gx.fn.setMultimediaValue("vBMPPRODUTOEXC",gx.O.AV191bmpProdutoExc,gx.O.AV260Bmpprodutoexc_GXI)},c2v:function(){gx.O.AV260Bmpprodutoexc_GXI=this.val_GXI();gx.O.AV191bmpProdutoExc=this.val()},val:function(){return gx.fn.getBlobValue("vBMPPRODUTOEXC")},val_GXI:function(){return gx.fn.getControlValue("vBMPPRODUTOEXC_GXI")}, gxvar_GXI:'AV260Bmpprodutoexc_GXI',nac:gx.falseFn};
   GXValidFnc[194]={fld:"TABLE8",grid:0};
   GXValidFnc[197]={fld:"TXTLOTE2", format:0,grid:0};
   GXValidFnc[199]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV206Qtde",gxold:"OV206Qtde",gxvar:"AV206Qtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV206Qtde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV206Qtde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV206Qtde,0)},c2v:function(){gx.O.AV206Qtde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[203]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vISCONSISTEQUANTIDADE",gxz:"ZV218isConsisteQuantidade",gxold:"OV218isConsisteQuantidade",gxvar:"AV218isConsisteQuantidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV218isConsisteQuantidade=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV218isConsisteQuantidade=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISCONSISTEQUANTIDADE",gx.O.AV218isConsisteQuantidade,true)},c2v:function(){gx.O.AV218isConsisteQuantidade=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISCONSISTEQUANTIDADE")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[204]={fld:"TABLELOTE",grid:0};
   GXValidFnc[207]={fld:"TXTLOTE", format:0,grid:0};
   GXValidFnc[209]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESC1",gxz:"ZV175Desc1",gxold:"OV175Desc1",gxvar:"AV175Desc1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV175Desc1=Value},v2z:function(Value){gx.O.ZV175Desc1=Value},v2c:function(){gx.fn.setControlValue("vDESC1",gx.O.AV175Desc1,0)},c2v:function(){gx.O.AV175Desc1=this.val()},val:function(){return gx.fn.getControlValue("vDESC1")},nac:gx.falseFn};
   GXValidFnc[211]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESC2",gxz:"ZV176Desc2",gxold:"OV176Desc2",gxvar:"AV176Desc2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV176Desc2=Value},v2z:function(Value){gx.O.ZV176Desc2=Value},v2c:function(){gx.fn.setControlValue("vDESC2",gx.O.AV176Desc2,0)},c2v:function(){gx.O.AV176Desc2=this.val()},val:function(){return gx.fn.getControlValue("vDESC2")},nac:gx.falseFn};
   GXValidFnc[213]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESC3",gxz:"ZV177Desc3",gxold:"OV177Desc3",gxvar:"AV177Desc3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV177Desc3=Value},v2z:function(Value){gx.O.ZV177Desc3=Value},v2c:function(){gx.fn.setControlValue("vDESC3",gx.O.AV177Desc3,0)},c2v:function(){gx.O.AV177Desc3=this.val()},val:function(){return gx.fn.getControlValue("vDESC3")},nac:gx.falseFn};
   GXValidFnc[215]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESC4",gxz:"ZV178Desc4",gxold:"OV178Desc4",gxvar:"AV178Desc4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV178Desc4=Value},v2z:function(Value){gx.O.ZV178Desc4=Value},v2c:function(){gx.fn.setControlValue("vDESC4",gx.O.AV178Desc4,0)},c2v:function(){gx.O.AV178Desc4=this.val()},val:function(){return gx.fn.getControlValue("vDESC4")},nac:gx.falseFn};
   GXValidFnc[217]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESC5",gxz:"ZV179Desc5",gxold:"OV179Desc5",gxvar:"AV179Desc5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV179Desc5=Value},v2z:function(Value){gx.O.ZV179Desc5=Value},v2c:function(){gx.fn.setControlValue("vDESC5",gx.O.AV179Desc5,0)},c2v:function(){gx.O.AV179Desc5=this.val()},val:function(){return gx.fn.getControlValue("vDESC5")},nac:gx.falseFn};
   GXValidFnc[221]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEDIT1",gxz:"ZV108Edit1",gxold:"OV108Edit1",gxvar:"AV108Edit1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV108Edit1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV108Edit1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vEDIT1",gx.O.AV108Edit1,0)},c2v:function(){gx.O.AV108Edit1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vEDIT1",'.')},nac:gx.falseFn};
   GXValidFnc[222]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMBO1",gxz:"ZV109Combo1",gxold:"OV109Combo1",gxvar:"AV109Combo1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV109Combo1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV109Combo1=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCOMBO1",gx.O.AV109Combo1)},c2v:function(){gx.O.AV109Combo1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOMBO1",'.')},nac:gx.falseFn};
   GXValidFnc[223]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVISIBLE1",gxz:"ZV119Visible1",gxold:"OV119Visible1",gxvar:"AV119Visible1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV119Visible1=Value},v2z:function(Value){gx.O.ZV119Visible1=Value},v2c:function(){gx.fn.setControlValue("vVISIBLE1",gx.O.AV119Visible1,0)},c2v:function(){gx.O.AV119Visible1=this.val()},val:function(){return gx.fn.getControlValue("vVISIBLE1")},nac:gx.falseFn};
   GXValidFnc[225]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEDIT2",gxz:"ZV110Edit2",gxold:"OV110Edit2",gxvar:"AV110Edit2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV110Edit2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV110Edit2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vEDIT2",gx.O.AV110Edit2,0)},c2v:function(){gx.O.AV110Edit2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vEDIT2",'.')},nac:gx.falseFn};
   GXValidFnc[226]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMBO2",gxz:"ZV111Combo2",gxold:"OV111Combo2",gxvar:"AV111Combo2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV111Combo2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV111Combo2=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCOMBO2",gx.O.AV111Combo2)},c2v:function(){gx.O.AV111Combo2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOMBO2",'.')},nac:gx.falseFn};
   GXValidFnc[227]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVISIBLE2",gxz:"ZV120Visible2",gxold:"OV120Visible2",gxvar:"AV120Visible2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV120Visible2=Value},v2z:function(Value){gx.O.ZV120Visible2=Value},v2c:function(){gx.fn.setControlValue("vVISIBLE2",gx.O.AV120Visible2,0)},c2v:function(){gx.O.AV120Visible2=this.val()},val:function(){return gx.fn.getControlValue("vVISIBLE2")},nac:gx.falseFn};
   GXValidFnc[229]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEDIT3",gxz:"ZV112Edit3",gxold:"OV112Edit3",gxvar:"AV112Edit3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV112Edit3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV112Edit3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vEDIT3",gx.O.AV112Edit3,0)},c2v:function(){gx.O.AV112Edit3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vEDIT3",'.')},nac:gx.falseFn};
   GXValidFnc[230]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMBO3",gxz:"ZV113Combo3",gxold:"OV113Combo3",gxvar:"AV113Combo3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV113Combo3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV113Combo3=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCOMBO3",gx.O.AV113Combo3)},c2v:function(){gx.O.AV113Combo3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOMBO3",'.')},nac:gx.falseFn};
   GXValidFnc[231]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVISIBLE3",gxz:"ZV121Visible3",gxold:"OV121Visible3",gxvar:"AV121Visible3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV121Visible3=Value},v2z:function(Value){gx.O.ZV121Visible3=Value},v2c:function(){gx.fn.setControlValue("vVISIBLE3",gx.O.AV121Visible3,0)},c2v:function(){gx.O.AV121Visible3=this.val()},val:function(){return gx.fn.getControlValue("vVISIBLE3")},nac:gx.falseFn};
   GXValidFnc[233]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEDIT4",gxz:"ZV114Edit4",gxold:"OV114Edit4",gxvar:"AV114Edit4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV114Edit4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV114Edit4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vEDIT4",gx.O.AV114Edit4,0)},c2v:function(){gx.O.AV114Edit4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vEDIT4",'.')},nac:gx.falseFn};
   GXValidFnc[234]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMBO4",gxz:"ZV115Combo4",gxold:"OV115Combo4",gxvar:"AV115Combo4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV115Combo4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV115Combo4=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCOMBO4",gx.O.AV115Combo4)},c2v:function(){gx.O.AV115Combo4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOMBO4",'.')},nac:gx.falseFn};
   GXValidFnc[235]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVISIBLE4",gxz:"ZV122Visible4",gxold:"OV122Visible4",gxvar:"AV122Visible4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV122Visible4=Value},v2z:function(Value){gx.O.ZV122Visible4=Value},v2c:function(){gx.fn.setControlValue("vVISIBLE4",gx.O.AV122Visible4,0)},c2v:function(){gx.O.AV122Visible4=this.val()},val:function(){return gx.fn.getControlValue("vVISIBLE4")},nac:gx.falseFn};
   GXValidFnc[237]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEDIT5",gxz:"ZV116Edit5",gxold:"OV116Edit5",gxvar:"AV116Edit5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV116Edit5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV116Edit5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vEDIT5",gx.O.AV116Edit5,0)},c2v:function(){gx.O.AV116Edit5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vEDIT5",'.')},nac:gx.falseFn};
   GXValidFnc[238]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMBO5",gxz:"ZV117Combo5",gxold:"OV117Combo5",gxvar:"AV117Combo5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV117Combo5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV117Combo5=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCOMBO5",gx.O.AV117Combo5)},c2v:function(){gx.O.AV117Combo5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOMBO5",'.')},nac:gx.falseFn};
   GXValidFnc[239]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVISIBLE5",gxz:"ZV123Visible5",gxold:"OV123Visible5",gxvar:"AV123Visible5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV123Visible5=Value},v2z:function(Value){gx.O.ZV123Visible5=Value},v2c:function(){gx.fn.setControlValue("vVISIBLE5",gx.O.AV123Visible5,0)},c2v:function(){gx.O.AV123Visible5=this.val()},val:function(){return gx.fn.getControlValue("vVISIBLE5")},nac:gx.falseFn};
   GXValidFnc[244]={fld:"DIVPROD1", format:2,grid:0};
   GXValidFnc[246]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:245,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOID",gxz:"ZV223GXV16U",gxold:"OV223GXV16U",gxvar:"GXV16U",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV16U=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV223GXV16U=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTOID",row || gx.fn.currentGridRowImpl(245),gx.O.GXV16U,0)},c2v:function(){gx.O.GXV16U=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPRODUTOID",row || gx.fn.currentGridRowImpl(245),'.')},nac:gx.falseFn};
   GXValidFnc[247]={lvl:2,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,isacc:0,grid:245,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOCODIGOBARRAS",gxz:"ZV224GXV16V",gxold:"OV224GXV16V",gxvar:"GXV16V",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV16V=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV224GXV16V=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTOCODIGOBARRAS",row || gx.fn.currentGridRowImpl(245),gx.O.GXV16V,0)},c2v:function(){gx.O.GXV16V=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPRODUTOCODIGOBARRAS",row || gx.fn.currentGridRowImpl(245),'.')},nac:gx.falseFn};
   GXValidFnc[248]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:245,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTODESCRICAO",gxz:"ZV225GXV16W",gxold:"OV225GXV16W",gxvar:"GXV16W",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV16W=Value},v2z:function(Value){gx.O.ZV225GXV16W=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTODESCRICAO",row || gx.fn.currentGridRowImpl(245),gx.O.GXV16W,0)},c2v:function(){gx.O.GXV16W=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPRODUTODESCRICAO",row || gx.fn.currentGridRowImpl(245))},nac:gx.falseFn};
   GXValidFnc[249]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:245,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLLOTEPRODUTOCOMBINACAO",gxz:"ZV226GXV16X",gxold:"OV226GXV16X",gxvar:"GXV16X",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV16X=Value},v2z:function(Value){gx.O.ZV226GXV16X=Value},v2c:function(row){gx.fn.setGridControlValue("CTLLOTEPRODUTOCOMBINACAO",row || gx.fn.currentGridRowImpl(245),gx.O.GXV16X,0)},c2v:function(){gx.O.GXV16X=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLLOTEPRODUTOCOMBINACAO",row || gx.fn.currentGridRowImpl(245))},nac:gx.falseFn};
   GXValidFnc[250]={lvl:2,type:"char",len:7,dec:0,sign:false,ro:0,isacc:0,grid:245,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLMESANOVENC",gxz:"ZV227GXV16Y",gxold:"OV227GXV16Y",gxvar:"GXV16Y",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV16Y=Value},v2z:function(Value){gx.O.ZV227GXV16Y=Value},v2c:function(row){gx.fn.setGridControlValue("CTLMESANOVENC",row || gx.fn.currentGridRowImpl(245),gx.O.GXV16Y,0)},c2v:function(){gx.O.GXV16Y=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLMESANOVENC",row || gx.fn.currentGridRowImpl(245))},nac:gx.falseFn};
   GXValidFnc[251]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:245,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLQUANTIDADE",gxz:"ZV228GXV16Z",gxold:"OV228GXV16Z",gxvar:"GXV16Z",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV16Z=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV228GXV16Z=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLQUANTIDADE",row || gx.fn.currentGridRowImpl(245),gx.O.GXV16Z,0)},c2v:function(){gx.O.GXV16Z=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLQUANTIDADE",row || gx.fn.currentGridRowImpl(245),'.')},nac:gx.falseFn};
   GXValidFnc[252]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:0,isacc:0,grid:245,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLATRIBUTO1",gxz:"ZV229GXV170",gxold:"OV229GXV170",gxvar:"GXV170",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV170=Value},v2z:function(Value){gx.O.ZV229GXV170=Value},v2c:function(row){gx.fn.setGridControlValue("CTLATRIBUTO1",row || gx.fn.currentGridRowImpl(245),gx.O.GXV170,0)},c2v:function(){gx.O.GXV170=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLATRIBUTO1",row || gx.fn.currentGridRowImpl(245))},nac:gx.falseFn};
   GXValidFnc[253]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:0,isacc:0,grid:245,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLATRIBUTO2",gxz:"ZV230GXV171",gxold:"OV230GXV171",gxvar:"GXV171",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV171=Value},v2z:function(Value){gx.O.ZV230GXV171=Value},v2c:function(row){gx.fn.setGridControlValue("CTLATRIBUTO2",row || gx.fn.currentGridRowImpl(245),gx.O.GXV171,0)},c2v:function(){gx.O.GXV171=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLATRIBUTO2",row || gx.fn.currentGridRowImpl(245))},nac:gx.falseFn};
   GXValidFnc[254]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:0,isacc:0,grid:245,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLATRIBUTO3",gxz:"ZV231GXV172",gxold:"OV231GXV172",gxvar:"GXV172",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV172=Value},v2z:function(Value){gx.O.ZV231GXV172=Value},v2c:function(row){gx.fn.setGridControlValue("CTLATRIBUTO3",row || gx.fn.currentGridRowImpl(245),gx.O.GXV172,0)},c2v:function(){gx.O.GXV172=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLATRIBUTO3",row || gx.fn.currentGridRowImpl(245))},nac:gx.falseFn};
   GXValidFnc[255]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:0,isacc:0,grid:245,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLATRIBUTO4",gxz:"ZV232GXV173",gxold:"OV232GXV173",gxvar:"GXV173",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV173=Value},v2z:function(Value){gx.O.ZV232GXV173=Value},v2c:function(row){gx.fn.setGridControlValue("CTLATRIBUTO4",row || gx.fn.currentGridRowImpl(245),gx.O.GXV173,0)},c2v:function(){gx.O.GXV173=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLATRIBUTO4",row || gx.fn.currentGridRowImpl(245))},nac:gx.falseFn};
   GXValidFnc[256]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:0,isacc:0,grid:245,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLATRIBUTO5",gxz:"ZV233GXV174",gxold:"OV233GXV174",gxvar:"GXV174",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV174=Value},v2z:function(Value){gx.O.ZV233GXV174=Value},v2c:function(row){gx.fn.setGridControlValue("CTLATRIBUTO5",row || gx.fn.currentGridRowImpl(245),gx.O.GXV174,0)},c2v:function(){gx.O.GXV174=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLATRIBUTO5",row || gx.fn.currentGridRowImpl(245))},nac:gx.falseFn};
   GXValidFnc[257]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:245,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPLOTE",gxz:"ZV129bmpLote",gxold:"OV129bmpLote",gxvar:"AV129bmpLote",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV129bmpLote=Value},v2z:function(Value){gx.O.ZV129bmpLote=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPLOTE",row || gx.fn.currentGridRowImpl(245),gx.O.AV129bmpLote,gx.O.AV263Bmplote_GXI)},c2v:function(){gx.O.AV263Bmplote_GXI=this.val_GXI();gx.O.AV129bmpLote=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPLOTE",row || gx.fn.currentGridRowImpl(245))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPLOTE_GXI",row || gx.fn.currentGridRowImpl(245))}, gxvar_GXI:'AV263Bmplote_GXI',nac:gx.falseFn};
   GXValidFnc[258]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:245,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXCPRODUTO",gxz:"ZV98bmpExcProduto",gxold:"OV98bmpExcProduto",gxvar:"AV98bmpExcProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV98bmpExcProduto=Value},v2z:function(Value){gx.O.ZV98bmpExcProduto=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXCPRODUTO",row || gx.fn.currentGridRowImpl(245),gx.O.AV98bmpExcProduto,gx.O.AV261Bmpexcproduto_GXI)},c2v:function(){gx.O.AV261Bmpexcproduto_GXI=this.val_GXI();gx.O.AV98bmpExcProduto=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXCPRODUTO",row || gx.fn.currentGridRowImpl(245))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXCPRODUTO_GXI",row || gx.fn.currentGridRowImpl(245))}, gxvar_GXI:'AV261Bmpexcproduto_GXI',nac:gx.falseFn};
   GXValidFnc[259]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:245,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLINDICE",gxz:"ZV234GXV177",gxold:"OV234GXV177",gxvar:"GXV177",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV177=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV234GXV177=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLINDICE",row || gx.fn.currentGridRowImpl(245),gx.O.GXV177,0)},c2v:function(){gx.O.GXV177=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLINDICE",row || gx.fn.currentGridRowImpl(245),'.')},nac:gx.falseFn};
   GXValidFnc[260]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:245,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOFAMILIAID",gxz:"ZV235GXV178",gxold:"OV235GXV178",gxvar:"GXV178",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV178=Value},v2z:function(Value){gx.O.ZV235GXV178=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTOFAMILIAID",row || gx.fn.currentGridRowImpl(245),gx.O.GXV178,0)},c2v:function(){gx.O.GXV178=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPRODUTOFAMILIAID",row || gx.fn.currentGridRowImpl(245))},nac:gx.falseFn};
   GXValidFnc[261]={lvl:2,type:"svchar",len:120,dec:0,sign:false,ro:0,isacc:0,grid:245,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTODESCRICAOCOMP",gxz:"ZV236GXV179",gxold:"OV236GXV179",gxvar:"GXV179",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV179=Value},v2z:function(Value){gx.O.ZV236GXV179=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTODESCRICAOCOMP",row || gx.fn.currentGridRowImpl(245),gx.O.GXV179,0)},c2v:function(){gx.O.GXV179=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPRODUTODESCRICAOCOMP",row || gx.fn.currentGridRowImpl(245))},nac:gx.falseFn};
   GXValidFnc[262]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:245,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOCODPRINCIPAL",gxz:"ZV237GXV17A",gxold:"OV237GXV17A",gxvar:"GXV17A",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV17A=Value},v2z:function(Value){gx.O.ZV237GXV17A=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTOCODPRINCIPAL",row || gx.fn.currentGridRowImpl(245),gx.O.GXV17A,0)},c2v:function(){gx.O.GXV17A=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPRODUTOCODPRINCIPAL",row || gx.fn.currentGridRowImpl(245))},nac:gx.falseFn};
   GXValidFnc[263]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:245,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOCLASSPRINCIPAL",gxz:"ZV238GXV17B",gxold:"OV238GXV17B",gxvar:"GXV17B",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV17B=Value},v2z:function(Value){gx.O.ZV238GXV17B=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTOCLASSPRINCIPAL",row || gx.fn.currentGridRowImpl(245),gx.O.GXV17B,0)},c2v:function(){gx.O.GXV17B=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPRODUTOCLASSPRINCIPAL",row || gx.fn.currentGridRowImpl(245))},nac:gx.falseFn};
   GXValidFnc[264]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:245,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOFABID",gxz:"ZV239GXV17C",gxold:"OV239GXV17C",gxvar:"GXV17C",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV17C=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV239GXV17C=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTOFABID",row || gx.fn.currentGridRowImpl(245),gx.O.GXV17C,0)},c2v:function(){gx.O.GXV17C=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPRODUTOFABID",row || gx.fn.currentGridRowImpl(245),'.')},nac:gx.falseFn};
   GXValidFnc[265]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:245,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOFABFANTASIA",gxz:"ZV240GXV17D",gxold:"OV240GXV17D",gxvar:"GXV17D",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV17D=Value},v2z:function(Value){gx.O.ZV240GXV17D=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTOFABFANTASIA",row || gx.fn.currentGridRowImpl(245),gx.O.GXV17D,0)},c2v:function(){gx.O.GXV17D=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPRODUTOFABFANTASIA",row || gx.fn.currentGridRowImpl(245))},nac:gx.falseFn};
   GXValidFnc[266]={fld:"DIVPROD2", format:2,grid:0};
   GXValidFnc[267]={fld:"TAB3",grid:0};
   GXValidFnc[270]={fld:"TABLE10",grid:0};
   GXValidFnc[273]={fld:"TXTABACODIFI1", format:0,grid:0};
   GXValidFnc[275]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Familiaid,isvalid:null,rgrid:[],fld:"vFAMILIAID",gxz:"ZV55FamiliaId",gxold:"OV55FamiliaId",gxvar:"AV55FamiliaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55FamiliaId=Value},v2z:function(Value){gx.O.ZV55FamiliaId=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAID",gx.O.AV55FamiliaId,0)},c2v:function(){gx.O.AV55FamiliaId=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAID")},nac:gx.falseFn};
   GXValidFnc[277]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBMPFAMILIA",gxz:"ZV60bmpFamilia",gxold:"OV60bmpFamilia",gxvar:"AV60bmpFamilia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60bmpFamilia=Value},v2z:function(Value){gx.O.ZV60bmpFamilia=Value},v2c:function(){gx.fn.setMultimediaValue("vBMPFAMILIA",gx.O.AV60bmpFamilia,gx.O.AV264Bmpfamilia_GXI)},c2v:function(){gx.O.AV264Bmpfamilia_GXI=this.val_GXI();gx.O.AV60bmpFamilia=this.val()},val:function(){return gx.fn.getBlobValue("vBMPFAMILIA")},val_GXI:function(){return gx.fn.getControlValue("vBMPFAMILIA_GXI")}, gxvar_GXI:'AV264Bmpfamilia_GXI',nac:gx.falseFn};
   GXValidFnc[279]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBMPFAMILIAEXC",gxz:"ZV192bmpFamiliaExc",gxold:"OV192bmpFamiliaExc",gxvar:"AV192bmpFamiliaExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV192bmpFamiliaExc=Value},v2z:function(Value){gx.O.ZV192bmpFamiliaExc=Value},v2c:function(){gx.fn.setMultimediaValue("vBMPFAMILIAEXC",gx.O.AV192bmpFamiliaExc,gx.O.AV265Bmpfamiliaexc_GXI)},c2v:function(){gx.O.AV265Bmpfamiliaexc_GXI=this.val_GXI();gx.O.AV192bmpFamiliaExc=this.val()},val:function(){return gx.fn.getBlobValue("vBMPFAMILIAEXC")},val_GXI:function(){return gx.fn.getControlValue("vBMPFAMILIAEXC_GXI")}, gxvar_GXI:'AV265Bmpfamiliaexc_GXI',nac:gx.falseFn};
   GXValidFnc[280]={fld:"DIVFAM1", format:2,grid:0};
   GXValidFnc[282]={lvl:32,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:281,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLFAMILIAID",gxz:"ZV242GXV17U",gxold:"OV242GXV17U",gxvar:"GXV17U",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV17U=Value},v2z:function(Value){gx.O.ZV242GXV17U=Value},v2c:function(row){gx.fn.setGridControlValue("CTLFAMILIAID",row || gx.fn.currentGridRowImpl(281),gx.O.GXV17U,0)},c2v:function(){gx.O.GXV17U=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLFAMILIAID",row || gx.fn.currentGridRowImpl(281))},nac:gx.falseFn};
   GXValidFnc[283]={lvl:32,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:281,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLFAMILIADESCRICAO",gxz:"ZV243GXV17V",gxold:"OV243GXV17V",gxvar:"GXV17V",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV17V=Value},v2z:function(Value){gx.O.ZV243GXV17V=Value},v2c:function(row){gx.fn.setGridControlValue("CTLFAMILIADESCRICAO",row || gx.fn.currentGridRowImpl(281),gx.O.GXV17V,0)},c2v:function(){gx.O.GXV17V=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLFAMILIADESCRICAO",row || gx.fn.currentGridRowImpl(281))},nac:gx.falseFn};
   GXValidFnc[284]={lvl:32,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:281,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXCFAMILIA",gxz:"ZV96bmpExcFamilia",gxold:"OV96bmpExcFamilia",gxvar:"AV96bmpExcFamilia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV96bmpExcFamilia=Value},v2z:function(Value){gx.O.ZV96bmpExcFamilia=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXCFAMILIA",row || gx.fn.currentGridRowImpl(281),gx.O.AV96bmpExcFamilia,gx.O.AV266Bmpexcfamilia_GXI)},c2v:function(){gx.O.AV266Bmpexcfamilia_GXI=this.val_GXI();gx.O.AV96bmpExcFamilia=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXCFAMILIA",row || gx.fn.currentGridRowImpl(281))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXCFAMILIA_GXI",row || gx.fn.currentGridRowImpl(281))}, gxvar_GXI:'AV266Bmpexcfamilia_GXI',nac:gx.falseFn};
   GXValidFnc[285]={lvl:32,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:281,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLINDICE1",gxz:"ZV244GXV17X",gxold:"OV244GXV17X",gxvar:"GXV17X",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV17X=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV244GXV17X=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLINDICE1",row || gx.fn.currentGridRowImpl(281),gx.O.GXV17X,0)},c2v:function(){gx.O.GXV17X=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLINDICE1",row || gx.fn.currentGridRowImpl(281),'.')},nac:gx.falseFn};
   GXValidFnc[286]={fld:"DIVFAM2", format:2,grid:0};
   GXValidFnc[289]={fld:"TABLE4",grid:0};
   GXValidFnc[292]={fld:"TXTABACODIFI2", format:0,grid:0};
   GXValidFnc[294]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Fabricante,isvalid:null,rgrid:[],fld:"vFABRICANTE",gxz:"ZV56Fabricante",gxold:"OV56Fabricante",gxvar:"AV56Fabricante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56Fabricante=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV56Fabricante=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFABRICANTE",gx.O.AV56Fabricante,0)},c2v:function(){gx.O.AV56Fabricante=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFABRICANTE",'.')},nac:gx.falseFn};
   GXValidFnc[296]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBMPFABRICANTE",gxz:"ZV63bmpFabricante",gxold:"OV63bmpFabricante",gxvar:"AV63bmpFabricante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63bmpFabricante=Value},v2z:function(Value){gx.O.ZV63bmpFabricante=Value},v2c:function(){gx.fn.setMultimediaValue("vBMPFABRICANTE",gx.O.AV63bmpFabricante,gx.O.AV267Bmpfabricante_GXI)},c2v:function(){gx.O.AV267Bmpfabricante_GXI=this.val_GXI();gx.O.AV63bmpFabricante=this.val()},val:function(){return gx.fn.getBlobValue("vBMPFABRICANTE")},val_GXI:function(){return gx.fn.getControlValue("vBMPFABRICANTE_GXI")}, gxvar_GXI:'AV267Bmpfabricante_GXI',nac:gx.falseFn};
   GXValidFnc[298]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBMPFABRICANTEEXC",gxz:"ZV193bmpFabricanteExc",gxold:"OV193bmpFabricanteExc",gxvar:"AV193bmpFabricanteExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV193bmpFabricanteExc=Value},v2z:function(Value){gx.O.ZV193bmpFabricanteExc=Value},v2c:function(){gx.fn.setMultimediaValue("vBMPFABRICANTEEXC",gx.O.AV193bmpFabricanteExc,gx.O.AV268Bmpfabricanteexc_GXI)},c2v:function(){gx.O.AV268Bmpfabricanteexc_GXI=this.val_GXI();gx.O.AV193bmpFabricanteExc=this.val()},val:function(){return gx.fn.getBlobValue("vBMPFABRICANTEEXC")},val_GXI:function(){return gx.fn.getControlValue("vBMPFABRICANTEEXC_GXI")}, gxvar_GXI:'AV268Bmpfabricanteexc_GXI',nac:gx.falseFn};
   GXValidFnc[299]={fld:"DIVFAB1", format:2,grid:0};
   GXValidFnc[301]={lvl:31,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:300,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLFABRICANTE",gxz:"ZV246GXV18D",gxold:"OV246GXV18D",gxvar:"GXV18D",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV18D=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV246GXV18D=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLFABRICANTE",row || gx.fn.currentGridRowImpl(300),gx.O.GXV18D,0)},c2v:function(){gx.O.GXV18D=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLFABRICANTE",row || gx.fn.currentGridRowImpl(300),'.')},nac:gx.falseFn};
   GXValidFnc[302]={lvl:31,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:300,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLFABICANTENOME",gxz:"ZV247GXV18E",gxold:"OV247GXV18E",gxvar:"GXV18E",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV18E=Value},v2z:function(Value){gx.O.ZV247GXV18E=Value},v2c:function(row){gx.fn.setGridControlValue("CTLFABICANTENOME",row || gx.fn.currentGridRowImpl(300),gx.O.GXV18E,0)},c2v:function(){gx.O.GXV18E=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLFABICANTENOME",row || gx.fn.currentGridRowImpl(300))},nac:gx.falseFn};
   GXValidFnc[303]={lvl:31,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:300,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXCFABRICANTE",gxz:"ZV97bmpExcFabricante",gxold:"OV97bmpExcFabricante",gxvar:"AV97bmpExcFabricante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV97bmpExcFabricante=Value},v2z:function(Value){gx.O.ZV97bmpExcFabricante=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXCFABRICANTE",row || gx.fn.currentGridRowImpl(300),gx.O.AV97bmpExcFabricante,gx.O.AV269Bmpexcfabricante_GXI)},c2v:function(){gx.O.AV269Bmpexcfabricante_GXI=this.val_GXI();gx.O.AV97bmpExcFabricante=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXCFABRICANTE",row || gx.fn.currentGridRowImpl(300))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXCFABRICANTE_GXI",row || gx.fn.currentGridRowImpl(300))}, gxvar_GXI:'AV269Bmpexcfabricante_GXI',nac:gx.falseFn};
   GXValidFnc[304]={lvl:31,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:300,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLINDICE2",gxz:"ZV248GXV18G",gxold:"OV248GXV18G",gxvar:"GXV18G",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV18G=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV248GXV18G=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLINDICE2",row || gx.fn.currentGridRowImpl(300),gx.O.GXV18G,0)},c2v:function(){gx.O.GXV18G=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLINDICE2",row || gx.fn.currentGridRowImpl(300),'.')},nac:gx.falseFn};
   GXValidFnc[305]={fld:"DIVFAB2", format:2,grid:0};
   GXValidFnc[306]={fld:"TAB4",grid:0};
   GXValidFnc[309]={fld:"TABLE11",grid:0};
   GXValidFnc[312]={fld:"TXTABACODIFI4", format:0,grid:0};
   GXValidFnc[314]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Codificacaoestid,isvalid:null,rgrid:[],fld:"vCODIFICACAOESTID",gxz:"ZV45CodificacaoEstId",gxold:"OV45CodificacaoEstId",gxvar:"AV45CodificacaoEstId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV45CodificacaoEstId=Value},v2z:function(Value){gx.O.ZV45CodificacaoEstId=Value},v2c:function(){gx.fn.setComboBoxValue("vCODIFICACAOESTID",gx.O.AV45CodificacaoEstId)},c2v:function(){gx.O.AV45CodificacaoEstId=this.val()},val:function(){return gx.fn.getControlValue("vCODIFICACAOESTID")},nac:gx.falseFn};
   GXValidFnc[316]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCODIFICACAO",gxz:"ZV79bmpCodificacao",gxold:"OV79bmpCodificacao",gxvar:"AV79bmpCodificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV79bmpCodificacao=Value},v2z:function(Value){gx.O.ZV79bmpCodificacao=Value},v2c:function(){gx.fn.setMultimediaValue("vBMPCODIFICACAO",gx.O.AV79bmpCodificacao,gx.O.AV270Bmpcodificacao_GXI)},c2v:function(){gx.O.AV270Bmpcodificacao_GXI=this.val_GXI();gx.O.AV79bmpCodificacao=this.val()},val:function(){return gx.fn.getBlobValue("vBMPCODIFICACAO")},val_GXI:function(){return gx.fn.getControlValue("vBMPCODIFICACAO_GXI")}, gxvar_GXI:'AV270Bmpcodificacao_GXI',nac:gx.falseFn};
   GXValidFnc[318]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCODIFICACAOEXC",gxz:"ZV194bmpCodificacaoExc",gxold:"OV194bmpCodificacaoExc",gxvar:"AV194bmpCodificacaoExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV194bmpCodificacaoExc=Value},v2z:function(Value){gx.O.ZV194bmpCodificacaoExc=Value},v2c:function(){gx.fn.setMultimediaValue("vBMPCODIFICACAOEXC",gx.O.AV194bmpCodificacaoExc,gx.O.AV271Bmpcodificacaoexc_GXI)},c2v:function(){gx.O.AV271Bmpcodificacaoexc_GXI=this.val_GXI();gx.O.AV194bmpCodificacaoExc=this.val()},val:function(){return gx.fn.getBlobValue("vBMPCODIFICACAOEXC")},val_GXI:function(){return gx.fn.getControlValue("vBMPCODIFICACAOEXC_GXI")}, gxvar_GXI:'AV271Bmpcodificacaoexc_GXI',nac:gx.falseFn};
   GXValidFnc[319]={fld:"DIVCOD1", format:2,grid:0};
   GXValidFnc[321]={lvl:30,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:320,gxgrid:this.Grid4Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCODIFICACAOESTID",gxz:"ZV250GXV18X",gxold:"OV250GXV18X",gxvar:"GXV18X",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",inputType:'text',v2v:function(Value){gx.O.GXV18X=Value},v2z:function(Value){gx.O.ZV250GXV18X=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CTLCODIFICACAOESTID",row || gx.fn.currentGridRowImpl(320),gx.O.GXV18X)},c2v:function(){gx.O.GXV18X=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCODIFICACAOESTID",row || gx.fn.currentGridRowImpl(320))},nac:gx.falseFn};
   GXValidFnc[322]={lvl:30,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:320,gxgrid:this.Grid4Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOCODIFICACAOVALOR",gxz:"ZV251GXV18Y",gxold:"OV251GXV18Y",gxvar:"GXV18Y",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV18Y=Value},v2z:function(Value){gx.O.ZV251GXV18Y=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTOCODIFICACAOVALOR",row || gx.fn.currentGridRowImpl(320),gx.O.GXV18Y,0)},c2v:function(){gx.O.GXV18Y=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPRODUTOCODIFICACAOVALOR",row || gx.fn.currentGridRowImpl(320))},nac:gx.falseFn};
   GXValidFnc[323]={lvl:30,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:320,gxgrid:this.Grid4Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXCCODIFICACAO",gxz:"ZV99bmpExcCodificacao",gxold:"OV99bmpExcCodificacao",gxvar:"AV99bmpExcCodificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV99bmpExcCodificacao=Value},v2z:function(Value){gx.O.ZV99bmpExcCodificacao=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXCCODIFICACAO",row || gx.fn.currentGridRowImpl(320),gx.O.AV99bmpExcCodificacao,gx.O.AV272Bmpexccodificacao_GXI)},c2v:function(){gx.O.AV272Bmpexccodificacao_GXI=this.val_GXI();gx.O.AV99bmpExcCodificacao=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXCCODIFICACAO",row || gx.fn.currentGridRowImpl(320))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXCCODIFICACAO_GXI",row || gx.fn.currentGridRowImpl(320))}, gxvar_GXI:'AV272Bmpexccodificacao_GXI',nac:gx.falseFn};
   GXValidFnc[324]={lvl:30,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:320,gxgrid:this.Grid4Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLINDICE4",gxz:"ZV252GXV190",gxold:"OV252GXV190",gxvar:"GXV190",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV190=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV252GXV190=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLINDICE4",row || gx.fn.currentGridRowImpl(320),gx.O.GXV190,0)},c2v:function(){gx.O.GXV190=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLINDICE4",row || gx.fn.currentGridRowImpl(320),'.')},nac:gx.falseFn};
   GXValidFnc[325]={fld:"DIVCOD2", format:2,grid:0};
   GXValidFnc[328]={fld:"TABLE3",grid:0};
   GXValidFnc[331]={fld:"TXTABACODIFI5", format:0,grid:0};
   GXValidFnc[333]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Classificacaoestid,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOESTID",gxz:"ZV50ClassificacaoEstId",gxold:"OV50ClassificacaoEstId",gxvar:"AV50ClassificacaoEstId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV50ClassificacaoEstId=Value},v2z:function(Value){gx.O.ZV50ClassificacaoEstId=Value},v2c:function(){gx.fn.setComboBoxValue("vCLASSIFICACAOESTID",gx.O.AV50ClassificacaoEstId)},c2v:function(){gx.O.AV50ClassificacaoEstId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOESTID")},nac:gx.falseFn};
   GXValidFnc[335]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCLASSIFICACAO",gxz:"ZV80bmpClassificacao",gxold:"OV80bmpClassificacao",gxvar:"AV80bmpClassificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80bmpClassificacao=Value},v2z:function(Value){gx.O.ZV80bmpClassificacao=Value},v2c:function(){gx.fn.setMultimediaValue("vBMPCLASSIFICACAO",gx.O.AV80bmpClassificacao,gx.O.AV273Bmpclassificacao_GXI)},c2v:function(){gx.O.AV273Bmpclassificacao_GXI=this.val_GXI();gx.O.AV80bmpClassificacao=this.val()},val:function(){return gx.fn.getBlobValue("vBMPCLASSIFICACAO")},val_GXI:function(){return gx.fn.getControlValue("vBMPCLASSIFICACAO_GXI")}, gxvar_GXI:'AV273Bmpclassificacao_GXI',nac:gx.falseFn};
   GXValidFnc[337]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCLASSIFICACAOEXC",gxz:"ZV195bmpClassificacaoExc",gxold:"OV195bmpClassificacaoExc",gxvar:"AV195bmpClassificacaoExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV195bmpClassificacaoExc=Value},v2z:function(Value){gx.O.ZV195bmpClassificacaoExc=Value},v2c:function(){gx.fn.setMultimediaValue("vBMPCLASSIFICACAOEXC",gx.O.AV195bmpClassificacaoExc,gx.O.AV274Bmpclassificacaoexc_GXI)},c2v:function(){gx.O.AV274Bmpclassificacaoexc_GXI=this.val_GXI();gx.O.AV195bmpClassificacaoExc=this.val()},val:function(){return gx.fn.getBlobValue("vBMPCLASSIFICACAOEXC")},val_GXI:function(){return gx.fn.getControlValue("vBMPCLASSIFICACAOEXC_GXI")}, gxvar_GXI:'AV274Bmpclassificacaoexc_GXI',nac:gx.falseFn};
   GXValidFnc[338]={fld:"DIVCLAS1", format:2,grid:0};
   GXValidFnc[340]={lvl:29,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:339,gxgrid:this.Grid5Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCLASSIFICACAOESTID",gxz:"ZV254GXV19G",gxold:"OV254GXV19G",gxvar:"GXV19G",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",inputType:'text',v2v:function(Value){gx.O.GXV19G=Value},v2z:function(Value){gx.O.ZV254GXV19G=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CTLCLASSIFICACAOESTID",row || gx.fn.currentGridRowImpl(339),gx.O.GXV19G)},c2v:function(){gx.O.GXV19G=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCLASSIFICACAOESTID",row || gx.fn.currentGridRowImpl(339))},nac:gx.falseFn};
   GXValidFnc[341]={lvl:29,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:339,gxgrid:this.Grid5Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOCLASSIFICACAOVALOR",gxz:"ZV255GXV19H",gxold:"OV255GXV19H",gxvar:"GXV19H",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",inputType:'text',v2v:function(Value){gx.O.GXV19H=Value},v2z:function(Value){gx.O.ZV255GXV19H=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CTLPRODUTOCLASSIFICACAOVALOR",row || gx.fn.currentGridRowImpl(339),gx.O.GXV19H)},c2v:function(){gx.O.GXV19H=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPRODUTOCLASSIFICACAOVALOR",row || gx.fn.currentGridRowImpl(339))},nac:gx.falseFn};
   GXValidFnc[342]={lvl:29,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:339,gxgrid:this.Grid5Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXCCLASSIFICACAO",gxz:"ZV100bmpExcClassificacao",gxold:"OV100bmpExcClassificacao",gxvar:"AV100bmpExcClassificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV100bmpExcClassificacao=Value},v2z:function(Value){gx.O.ZV100bmpExcClassificacao=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXCCLASSIFICACAO",row || gx.fn.currentGridRowImpl(339),gx.O.AV100bmpExcClassificacao,gx.O.AV275Bmpexcclassificacao_GXI)},c2v:function(){gx.O.AV275Bmpexcclassificacao_GXI=this.val_GXI();gx.O.AV100bmpExcClassificacao=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXCCLASSIFICACAO",row || gx.fn.currentGridRowImpl(339))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXCCLASSIFICACAO_GXI",row || gx.fn.currentGridRowImpl(339))}, gxvar_GXI:'AV275Bmpexcclassificacao_GXI',nac:gx.falseFn};
   GXValidFnc[343]={lvl:29,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:339,gxgrid:this.Grid5Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLINDICE5",gxz:"ZV256GXV19J",gxold:"OV256GXV19J",gxvar:"GXV19J",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV19J=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV256GXV19J=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLINDICE5",row || gx.fn.currentGridRowImpl(339),gx.O.GXV19J,0)},c2v:function(){gx.O.GXV19J=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLINDICE5",row || gx.fn.currentGridRowImpl(339),'.')},nac:gx.falseFn};
   GXValidFnc[344]={fld:"DIVCLAS2", format:2,grid:0};
   GXValidFnc[351]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTECBARRAS",gxz:"ZV209LoteCBarras",gxold:"OV209LoteCBarras",gxvar:"AV209LoteCBarras",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV209LoteCBarras=Value},v2z:function(Value){gx.O.ZV209LoteCBarras=Value},v2c:function(){gx.fn.setControlValue("vLOTECBARRAS",gx.O.AV209LoteCBarras,0)},c2v:function(){gx.O.AV209LoteCBarras=this.val()},val:function(){return gx.fn.getControlValue("vLOTECBARRAS")},nac:gx.falseFn};
   GXValidFnc[354]={fld:"JS", format:2,grid:0};
   GXValidFnc[355]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vETIQUETATAMENTRELINHA",gxz:"ZV145EtiquetaTamEntreLinha",gxold:"OV145EtiquetaTamEntreLinha",gxvar:"AV145EtiquetaTamEntreLinha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV145EtiquetaTamEntreLinha=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV145EtiquetaTamEntreLinha=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vETIQUETATAMENTRELINHA",gx.O.AV145EtiquetaTamEntreLinha,0)},c2v:function(){gx.O.AV145EtiquetaTamEntreLinha=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vETIQUETATAMENTRELINHA",'.')},nac:gx.falseFn};
   GXValidFnc[356]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNTXT",gxz:"ZV140SNTxt",gxold:"OV140SNTxt",gxvar:"AV140SNTxt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV140SNTxt=Value},v2z:function(Value){gx.O.ZV140SNTxt=Value},v2c:function(){gx.fn.setControlValue("vSNTXT",gx.O.AV140SNTxt,0)},c2v:function(){gx.O.AV140SNTxt=this.val()},val:function(){return gx.fn.getControlValue("vSNTXT")},nac:gx.falseFn};
   GXValidFnc[357]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNLOTEUNICO",gxz:"ZV118SNLoteUnico",gxold:"OV118SNLoteUnico",gxvar:"AV118SNLoteUnico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV118SNLoteUnico=Value},v2z:function(Value){gx.O.ZV118SNLoteUnico=Value},v2c:function(){gx.fn.setControlValue("vSNLOTEUNICO",gx.O.AV118SNLoteUnico,0)},c2v:function(){gx.O.AV118SNLoteUnico=this.val()},val:function(){return gx.fn.getControlValue("vSNLOTEUNICO")},nac:gx.falseFn};
   GXValidFnc[358]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV65Sim",gxold:"OV65Sim",gxvar:"AV65Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV65Sim=Value},v2z:function(Value){gx.O.ZV65Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV65Sim,0)},c2v:function(){gx.O.AV65Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[359]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV90FilialEmpresaId",gxold:"OV90FilialEmpresaId",gxvar:"AV90FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV90FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV90FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV90FilialEmpresaId,0)},c2v:function(){gx.O.AV90FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[360]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vETIQUETAQTDCOLLINHA",gxz:"ZV144EtiquetaQtdColLinha",gxold:"OV144EtiquetaQtdColLinha",gxvar:"AV144EtiquetaQtdColLinha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV144EtiquetaQtdColLinha=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV144EtiquetaQtdColLinha=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vETIQUETAQTDCOLLINHA",gx.O.AV144EtiquetaQtdColLinha,0)},c2v:function(){gx.O.AV144EtiquetaQtdColLinha=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vETIQUETAQTDCOLLINHA",'.')},nac:gx.falseFn};
   GXValidFnc[361]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECHAR",gxz:"ZV158QtdeChar",gxold:"OV158QtdeChar",gxvar:"AV158QtdeChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV158QtdeChar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV158QtdeChar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECHAR",gx.O.AV158QtdeChar,0)},c2v:function(){gx.O.AV158QtdeChar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECHAR",'.')},nac:gx.falseFn};
   GXValidFnc[362]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"vEMPRESAPESSOASEMPRESAID",gxz:"ZV66EmpresaPessoasEmpresaId",gxold:"OV66EmpresaPessoasEmpresaId",gxvar:"AV66EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV66EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPESSOASEMPRESAID",gx.O.AV66EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV66EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[363]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresaetiquetaempresaid,isvalid:null,rgrid:[],fld:"vEMPRESAETIQUETAEMPRESAID",gxz:"ZV94EmpresaEtiquetaEmpresaId",gxold:"OV94EmpresaEtiquetaEmpresaId",gxvar:"AV94EmpresaEtiquetaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV94EmpresaEtiquetaEmpresaId=Value},v2z:function(Value){gx.O.ZV94EmpresaEtiquetaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAETIQUETAEMPRESAID",gx.O.AV94EmpresaEtiquetaEmpresaId,0)},c2v:function(){gx.O.AV94EmpresaEtiquetaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAETIQUETAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[364]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Etiquetatermicaempresaid,isvalid:null,rgrid:[],fld:"vETIQUETATERMICAEMPRESAID",gxz:"ZV95EtiquetaTermicaEmpresaId",gxold:"OV95EtiquetaTermicaEmpresaId",gxvar:"AV95EtiquetaTermicaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV95EtiquetaTermicaEmpresaId=Value},v2z:function(Value){gx.O.ZV95EtiquetaTermicaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vETIQUETATERMICAEMPRESAID",gx.O.AV95EtiquetaTermicaEmpresaId,0)},c2v:function(){gx.O.AV95EtiquetaTermicaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vETIQUETATERMICAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[365]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUX",gxz:"ZV72IntAux",gxold:"OV72IntAux",gxvar:"AV72IntAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72IntAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV72IntAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTAUX",gx.O.AV72IntAux,0)},c2v:function(){gx.O.AV72IntAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUX",'.')},nac:gx.falseFn};
   GXValidFnc[366]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHARAUX",gxz:"ZV73CharAux",gxold:"OV73CharAux",gxvar:"AV73CharAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73CharAux=Value},v2z:function(Value){gx.O.ZV73CharAux=Value},v2c:function(){gx.fn.setControlValue("vCHARAUX",gx.O.AV73CharAux,0)},c2v:function(){gx.O.AV73CharAux=this.val()},val:function(){return gx.fn.getControlValue("vCHARAUX")},nac:gx.falseFn};
   GXValidFnc[367]={lvl:0,type:"date",len:8,dec:0,sign:true,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Gx_date,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};
   GXValidFnc[368]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOBARRA",gxz:"ZV107CodigoBarrasProdutoBarra",gxold:"OV107CodigoBarrasProdutoBarra",gxvar:"AV107CodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV107CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV107CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTOBARRA",gx.O.AV107CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.AV107CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRA",'.')},nac:gx.falseFn};
   GXValidFnc[369]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV106ProdutoReferencia",gxold:"OV106ProdutoReferencia",gxvar:"AV106ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV106ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV106ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV106ProdutoReferencia,0)},c2v:function(){gx.O.AV106ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[370]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTECOMBINACAO",gxz:"ZV74LoteCombinacao",gxold:"OV74LoteCombinacao",gxvar:"AV74LoteCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74LoteCombinacao=Value},v2z:function(Value){gx.O.ZV74LoteCombinacao=Value},v2c:function(){gx.fn.setControlValue("vLOTECOMBINACAO",gx.O.AV74LoteCombinacao,0)},c2v:function(){gx.O.AV74LoteCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTECOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[371]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV154SNVenda",gxold:"OV154SNVenda",gxvar:"AV154SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV154SNVenda=Value},v2z:function(Value){gx.O.ZV154SNVenda=Value},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV154SNVenda,0)},c2v:function(){gx.O.AV154SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};
   GXValidFnc[372]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV64Nao",gxold:"OV64Nao",gxvar:"AV64Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64Nao=Value},v2z:function(Value){gx.O.ZV64Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV64Nao,0)},c2v:function(){gx.O.AV64Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[374]={fld:"BTNHELP",grid:0};
   GXValidFnc[376]={fld:"PROMPT_ETIQUETATERMICAMODELO",grid:0};
   GXValidFnc[377]={fld:"PROMPT_ETIQUETACODIGO",grid:0};
   GXValidFnc[378]={fld:"PROMPT_ESQUEMACODIGO",grid:0};
   GXValidFnc[379]={fld:"PROMPT_PESSOAID",grid:0};
   GXValidFnc[380]={fld:"PROMPT_FAMILIAID",grid:0};
   GXValidFnc[381]={fld:"PROMPT_FABRICANTE",grid:0};
   this.AV217TxtTela = "" ;
   this.ZV217TxtTela = "" ;
   this.OV217TxtTela = "" ;
   this.AV27FilialId = 0 ;
   this.ZV27FilialId = 0 ;
   this.OV27FilialId = 0 ;
   this.AV87FilialNome = "" ;
   this.ZV87FilialNome = "" ;
   this.OV87FilialNome = "" ;
   this.AV28TpEtiqueta = "" ;
   this.ZV28TpEtiqueta = "" ;
   this.OV28TpEtiqueta = "" ;
   this.AV30Ordenacao = "" ;
   this.ZV30Ordenacao = "" ;
   this.OV30Ordenacao = "" ;
   this.AV31TipoEmissao = "" ;
   this.ZV31TipoEmissao = "" ;
   this.OV31TipoEmissao = "" ;
   this.AV156SNImpMoeda = "" ;
   this.ZV156SNImpMoeda = "" ;
   this.OV156SNImpMoeda = "" ;
   this.AV29EtiquetaTermicaModelo = 0 ;
   this.ZV29EtiquetaTermicaModelo = 0 ;
   this.OV29EtiquetaTermicaModelo = 0 ;
   this.AV91EtiquetaTermicaDescricao = "" ;
   this.ZV91EtiquetaTermicaDescricao = "" ;
   this.OV91EtiquetaTermicaDescricao = "" ;
   this.AV92EtiquetaCodigo = 0 ;
   this.ZV92EtiquetaCodigo = 0 ;
   this.OV92EtiquetaCodigo = 0 ;
   this.AV93EtiquetaDescricao = "" ;
   this.ZV93EtiquetaDescricao = "" ;
   this.OV93EtiquetaDescricao = "" ;
   this.AV139LinhaInicial = 0 ;
   this.ZV139LinhaInicial = 0 ;
   this.OV139LinhaInicial = 0 ;
   this.AV138ColunaInicial = 0 ;
   this.ZV138ColunaInicial = 0 ;
   this.OV138ColunaInicial = 0 ;
   this.AV32DataReferenciaIni = gx.date.nullDate() ;
   this.ZV32DataReferenciaIni = gx.date.nullDate() ;
   this.OV32DataReferenciaIni = gx.date.nullDate() ;
   this.AV34DataReferenciaFim = gx.date.nullDate() ;
   this.ZV34DataReferenciaFim = gx.date.nullDate() ;
   this.OV34DataReferenciaFim = gx.date.nullDate() ;
   this.AV33PedidoCompraNumero = 0 ;
   this.ZV33PedidoCompraNumero = 0 ;
   this.OV33PedidoCompraNumero = 0 ;
   this.AV105PedidoCompraAno = 0 ;
   this.ZV105PedidoCompraAno = 0 ;
   this.OV105PedidoCompraAno = 0 ;
   this.AV35LocalIni = "" ;
   this.ZV35LocalIni = "" ;
   this.OV35LocalIni = "" ;
   this.AV36LocalFim = "" ;
   this.ZV36LocalFim = "" ;
   this.OV36LocalFim = "" ;
   this.AV161EsquemaCodigo = 0 ;
   this.ZV161EsquemaCodigo = 0 ;
   this.OV161EsquemaCodigo = 0 ;
   this.AV164EsquemaDescricao = "" ;
   this.ZV164EsquemaDescricao = "" ;
   this.OV164EsquemaDescricao = "" ;
   this.AV37ProdutoReferenciaIni = "" ;
   this.ZV37ProdutoReferenciaIni = "" ;
   this.OV37ProdutoReferenciaIni = "" ;
   this.AV38ProdutoReferenciaFim = "" ;
   this.ZV38ProdutoReferenciaFim = "" ;
   this.OV38ProdutoReferenciaFim = "" ;
   this.AV39ProdutoTipo = "" ;
   this.ZV39ProdutoTipo = "" ;
   this.OV39ProdutoTipo = "" ;
   this.AV170ProdutoCategoria = "" ;
   this.ZV170ProdutoCategoria = "" ;
   this.OV170ProdutoCategoria = "" ;
   this.AV41PessoaId = 0 ;
   this.ZV41PessoaId = 0 ;
   this.OV41PessoaId = 0 ;
   this.AV159PessoaFantasia = "" ;
   this.ZV159PessoaFantasia = "" ;
   this.OV159PessoaFantasia = "" ;
   this.AV40Documento = 0 ;
   this.ZV40Documento = 0 ;
   this.OV40Documento = 0 ;
   this.AV42DataUltEnvio = gx.date.nullDate() ;
   this.ZV42DataUltEnvio = gx.date.nullDate() ;
   this.OV42DataUltEnvio = gx.date.nullDate() ;
   this.AV180SNPrecoPromocao = "" ;
   this.ZV180SNPrecoPromocao = "" ;
   this.OV180SNPrecoPromocao = "" ;
   this.AV181QtdeParcelas = 0 ;
   this.ZV181QtdeParcelas = 0 ;
   this.OV181QtdeParcelas = 0 ;
   this.AV182SessaoAux = 0 ;
   this.ZV182SessaoAux = 0 ;
   this.OV182SessaoAux = 0 ;
   this.AV68ProdutoId = 0 ;
   this.ZV68ProdutoId = 0 ;
   this.OV68ProdutoId = 0 ;
   this.AV207ProdutoCodigoBarras = 0 ;
   this.ZV207ProdutoCodigoBarras = 0 ;
   this.OV207ProdutoCodigoBarras = 0 ;
   this.AV157SNAvancar = "" ;
   this.ZV157SNAvancar = "" ;
   this.OV157SNAvancar = "" ;
   this.AV262Bmpavancar_GXI = "" ;
   this.AV127bmpAvancar = "" ;
   this.ZV127bmpAvancar = "" ;
   this.OV127bmpAvancar = "" ;
   this.AV259Bmpproduto_GXI = "" ;
   this.AV71bmpProduto = "" ;
   this.ZV71bmpProduto = "" ;
   this.OV71bmpProduto = "" ;
   this.AV260Bmpprodutoexc_GXI = "" ;
   this.AV191bmpProdutoExc = "" ;
   this.ZV191bmpProdutoExc = "" ;
   this.OV191bmpProdutoExc = "" ;
   this.AV206Qtde = 0 ;
   this.ZV206Qtde = 0 ;
   this.OV206Qtde = 0 ;
   this.AV218isConsisteQuantidade = false ;
   this.ZV218isConsisteQuantidade = false ;
   this.OV218isConsisteQuantidade = false ;
   this.AV175Desc1 = "" ;
   this.ZV175Desc1 = "" ;
   this.OV175Desc1 = "" ;
   this.AV176Desc2 = "" ;
   this.ZV176Desc2 = "" ;
   this.OV176Desc2 = "" ;
   this.AV177Desc3 = "" ;
   this.ZV177Desc3 = "" ;
   this.OV177Desc3 = "" ;
   this.AV178Desc4 = "" ;
   this.ZV178Desc4 = "" ;
   this.OV178Desc4 = "" ;
   this.AV179Desc5 = "" ;
   this.ZV179Desc5 = "" ;
   this.OV179Desc5 = "" ;
   this.AV108Edit1 = 0 ;
   this.ZV108Edit1 = 0 ;
   this.OV108Edit1 = 0 ;
   this.AV109Combo1 = 0 ;
   this.ZV109Combo1 = 0 ;
   this.OV109Combo1 = 0 ;
   this.AV119Visible1 = "" ;
   this.ZV119Visible1 = "" ;
   this.OV119Visible1 = "" ;
   this.AV110Edit2 = 0 ;
   this.ZV110Edit2 = 0 ;
   this.OV110Edit2 = 0 ;
   this.AV111Combo2 = 0 ;
   this.ZV111Combo2 = 0 ;
   this.OV111Combo2 = 0 ;
   this.AV120Visible2 = "" ;
   this.ZV120Visible2 = "" ;
   this.OV120Visible2 = "" ;
   this.AV112Edit3 = 0 ;
   this.ZV112Edit3 = 0 ;
   this.OV112Edit3 = 0 ;
   this.AV113Combo3 = 0 ;
   this.ZV113Combo3 = 0 ;
   this.OV113Combo3 = 0 ;
   this.AV121Visible3 = "" ;
   this.ZV121Visible3 = "" ;
   this.OV121Visible3 = "" ;
   this.AV114Edit4 = 0 ;
   this.ZV114Edit4 = 0 ;
   this.OV114Edit4 = 0 ;
   this.AV115Combo4 = 0 ;
   this.ZV115Combo4 = 0 ;
   this.OV115Combo4 = 0 ;
   this.AV122Visible4 = "" ;
   this.ZV122Visible4 = "" ;
   this.OV122Visible4 = "" ;
   this.AV116Edit5 = 0 ;
   this.ZV116Edit5 = 0 ;
   this.OV116Edit5 = 0 ;
   this.AV117Combo5 = 0 ;
   this.ZV117Combo5 = 0 ;
   this.OV117Combo5 = 0 ;
   this.AV123Visible5 = "" ;
   this.ZV123Visible5 = "" ;
   this.OV123Visible5 = "" ;
   this.ZV223GXV16U = 0 ;
   this.OV223GXV16U = 0 ;
   this.ZV224GXV16V = 0 ;
   this.OV224GXV16V = 0 ;
   this.ZV225GXV16W = "" ;
   this.OV225GXV16W = "" ;
   this.ZV226GXV16X = "" ;
   this.OV226GXV16X = "" ;
   this.ZV227GXV16Y = "" ;
   this.OV227GXV16Y = "" ;
   this.ZV228GXV16Z = 0 ;
   this.OV228GXV16Z = 0 ;
   this.ZV229GXV170 = "" ;
   this.OV229GXV170 = "" ;
   this.ZV230GXV171 = "" ;
   this.OV230GXV171 = "" ;
   this.ZV231GXV172 = "" ;
   this.OV231GXV172 = "" ;
   this.ZV232GXV173 = "" ;
   this.OV232GXV173 = "" ;
   this.ZV233GXV174 = "" ;
   this.OV233GXV174 = "" ;
   this.ZV129bmpLote = "" ;
   this.OV129bmpLote = "" ;
   this.ZV98bmpExcProduto = "" ;
   this.OV98bmpExcProduto = "" ;
   this.ZV234GXV177 = 0 ;
   this.OV234GXV177 = 0 ;
   this.ZV235GXV178 = "" ;
   this.OV235GXV178 = "" ;
   this.ZV236GXV179 = "" ;
   this.OV236GXV179 = "" ;
   this.ZV237GXV17A = "" ;
   this.OV237GXV17A = "" ;
   this.ZV238GXV17B = "" ;
   this.OV238GXV17B = "" ;
   this.ZV239GXV17C = 0 ;
   this.OV239GXV17C = 0 ;
   this.ZV240GXV17D = "" ;
   this.OV240GXV17D = "" ;
   this.AV55FamiliaId = "" ;
   this.ZV55FamiliaId = "" ;
   this.OV55FamiliaId = "" ;
   this.AV264Bmpfamilia_GXI = "" ;
   this.AV60bmpFamilia = "" ;
   this.ZV60bmpFamilia = "" ;
   this.OV60bmpFamilia = "" ;
   this.AV265Bmpfamiliaexc_GXI = "" ;
   this.AV192bmpFamiliaExc = "" ;
   this.ZV192bmpFamiliaExc = "" ;
   this.OV192bmpFamiliaExc = "" ;
   this.ZV242GXV17U = "" ;
   this.OV242GXV17U = "" ;
   this.ZV243GXV17V = "" ;
   this.OV243GXV17V = "" ;
   this.ZV96bmpExcFamilia = "" ;
   this.OV96bmpExcFamilia = "" ;
   this.ZV244GXV17X = 0 ;
   this.OV244GXV17X = 0 ;
   this.AV56Fabricante = 0 ;
   this.ZV56Fabricante = 0 ;
   this.OV56Fabricante = 0 ;
   this.AV267Bmpfabricante_GXI = "" ;
   this.AV63bmpFabricante = "" ;
   this.ZV63bmpFabricante = "" ;
   this.OV63bmpFabricante = "" ;
   this.AV268Bmpfabricanteexc_GXI = "" ;
   this.AV193bmpFabricanteExc = "" ;
   this.ZV193bmpFabricanteExc = "" ;
   this.OV193bmpFabricanteExc = "" ;
   this.ZV246GXV18D = 0 ;
   this.OV246GXV18D = 0 ;
   this.ZV247GXV18E = "" ;
   this.OV247GXV18E = "" ;
   this.ZV97bmpExcFabricante = "" ;
   this.OV97bmpExcFabricante = "" ;
   this.ZV248GXV18G = 0 ;
   this.OV248GXV18G = 0 ;
   this.AV45CodificacaoEstId = "" ;
   this.ZV45CodificacaoEstId = "" ;
   this.OV45CodificacaoEstId = "" ;
   this.AV270Bmpcodificacao_GXI = "" ;
   this.AV79bmpCodificacao = "" ;
   this.ZV79bmpCodificacao = "" ;
   this.OV79bmpCodificacao = "" ;
   this.AV271Bmpcodificacaoexc_GXI = "" ;
   this.AV194bmpCodificacaoExc = "" ;
   this.ZV194bmpCodificacaoExc = "" ;
   this.OV194bmpCodificacaoExc = "" ;
   this.ZV250GXV18X = "" ;
   this.OV250GXV18X = "" ;
   this.ZV251GXV18Y = "" ;
   this.OV251GXV18Y = "" ;
   this.ZV99bmpExcCodificacao = "" ;
   this.OV99bmpExcCodificacao = "" ;
   this.ZV252GXV190 = 0 ;
   this.OV252GXV190 = 0 ;
   this.AV50ClassificacaoEstId = "" ;
   this.ZV50ClassificacaoEstId = "" ;
   this.OV50ClassificacaoEstId = "" ;
   this.AV273Bmpclassificacao_GXI = "" ;
   this.AV80bmpClassificacao = "" ;
   this.ZV80bmpClassificacao = "" ;
   this.OV80bmpClassificacao = "" ;
   this.AV274Bmpclassificacaoexc_GXI = "" ;
   this.AV195bmpClassificacaoExc = "" ;
   this.ZV195bmpClassificacaoExc = "" ;
   this.OV195bmpClassificacaoExc = "" ;
   this.ZV254GXV19G = "" ;
   this.OV254GXV19G = "" ;
   this.ZV255GXV19H = "" ;
   this.OV255GXV19H = "" ;
   this.ZV100bmpExcClassificacao = "" ;
   this.OV100bmpExcClassificacao = "" ;
   this.ZV256GXV19J = 0 ;
   this.OV256GXV19J = 0 ;
   this.AV209LoteCBarras = "" ;
   this.ZV209LoteCBarras = "" ;
   this.OV209LoteCBarras = "" ;
   this.AV145EtiquetaTamEntreLinha = 0 ;
   this.ZV145EtiquetaTamEntreLinha = 0 ;
   this.OV145EtiquetaTamEntreLinha = 0 ;
   this.AV140SNTxt = "" ;
   this.ZV140SNTxt = "" ;
   this.OV140SNTxt = "" ;
   this.AV118SNLoteUnico = "" ;
   this.ZV118SNLoteUnico = "" ;
   this.OV118SNLoteUnico = "" ;
   this.AV65Sim = "" ;
   this.ZV65Sim = "" ;
   this.OV65Sim = "" ;
   this.AV90FilialEmpresaId = "" ;
   this.ZV90FilialEmpresaId = "" ;
   this.OV90FilialEmpresaId = "" ;
   this.AV144EtiquetaQtdColLinha = 0 ;
   this.ZV144EtiquetaQtdColLinha = 0 ;
   this.OV144EtiquetaQtdColLinha = 0 ;
   this.AV158QtdeChar = 0 ;
   this.ZV158QtdeChar = 0 ;
   this.OV158QtdeChar = 0 ;
   this.AV66EmpresaPessoasEmpresaId = "" ;
   this.ZV66EmpresaPessoasEmpresaId = "" ;
   this.OV66EmpresaPessoasEmpresaId = "" ;
   this.AV94EmpresaEtiquetaEmpresaId = "" ;
   this.ZV94EmpresaEtiquetaEmpresaId = "" ;
   this.OV94EmpresaEtiquetaEmpresaId = "" ;
   this.AV95EtiquetaTermicaEmpresaId = "" ;
   this.ZV95EtiquetaTermicaEmpresaId = "" ;
   this.OV95EtiquetaTermicaEmpresaId = "" ;
   this.AV72IntAux = 0 ;
   this.ZV72IntAux = 0 ;
   this.OV72IntAux = 0 ;
   this.AV73CharAux = "" ;
   this.ZV73CharAux = "" ;
   this.OV73CharAux = "" ;
   this.Gx_date = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV107CodigoBarrasProdutoBarra = 0 ;
   this.ZV107CodigoBarrasProdutoBarra = 0 ;
   this.OV107CodigoBarrasProdutoBarra = 0 ;
   this.AV106ProdutoReferencia = "" ;
   this.ZV106ProdutoReferencia = "" ;
   this.OV106ProdutoReferencia = "" ;
   this.AV74LoteCombinacao = "" ;
   this.ZV74LoteCombinacao = "" ;
   this.OV74LoteCombinacao = "" ;
   this.AV154SNVenda = "" ;
   this.ZV154SNVenda = "" ;
   this.OV154SNVenda = "" ;
   this.AV64Nao = "" ;
   this.ZV64Nao = "" ;
   this.OV64Nao = "" ;
   this.AV217TxtTela = "" ;
   this.AV196Tab = [ ] ;
   this.AV27FilialId = 0 ;
   this.AV87FilialNome = "" ;
   this.AV28TpEtiqueta = "" ;
   this.AV30Ordenacao = "" ;
   this.AV31TipoEmissao = "" ;
   this.AV156SNImpMoeda = "" ;
   this.AV29EtiquetaTermicaModelo = 0 ;
   this.AV91EtiquetaTermicaDescricao = "" ;
   this.AV92EtiquetaCodigo = 0 ;
   this.AV93EtiquetaDescricao = "" ;
   this.AV139LinhaInicial = 0 ;
   this.AV138ColunaInicial = 0 ;
   this.AV32DataReferenciaIni = gx.date.nullDate() ;
   this.AV34DataReferenciaFim = gx.date.nullDate() ;
   this.AV33PedidoCompraNumero = 0 ;
   this.AV105PedidoCompraAno = 0 ;
   this.AV35LocalIni = "" ;
   this.AV36LocalFim = "" ;
   this.AV161EsquemaCodigo = 0 ;
   this.AV164EsquemaDescricao = "" ;
   this.AV37ProdutoReferenciaIni = "" ;
   this.AV38ProdutoReferenciaFim = "" ;
   this.AV39ProdutoTipo = "" ;
   this.AV170ProdutoCategoria = "" ;
   this.AV41PessoaId = 0 ;
   this.AV159PessoaFantasia = "" ;
   this.AV40Documento = 0 ;
   this.AV42DataUltEnvio = gx.date.nullDate() ;
   this.AV180SNPrecoPromocao = "" ;
   this.AV181QtdeParcelas = 0 ;
   this.AV182SessaoAux = 0 ;
   this.AV68ProdutoId = 0 ;
   this.AV207ProdutoCodigoBarras = 0 ;
   this.AV157SNAvancar = "" ;
   this.AV127bmpAvancar = "" ;
   this.AV71bmpProduto = "" ;
   this.AV191bmpProdutoExc = "" ;
   this.AV206Qtde = 0 ;
   this.AV218isConsisteQuantidade = false ;
   this.AV175Desc1 = "" ;
   this.AV176Desc2 = "" ;
   this.AV177Desc3 = "" ;
   this.AV178Desc4 = "" ;
   this.AV179Desc5 = "" ;
   this.AV108Edit1 = 0 ;
   this.AV109Combo1 = 0 ;
   this.AV119Visible1 = "" ;
   this.AV110Edit2 = 0 ;
   this.AV111Combo2 = 0 ;
   this.AV120Visible2 = "" ;
   this.AV112Edit3 = 0 ;
   this.AV113Combo3 = 0 ;
   this.AV121Visible3 = "" ;
   this.AV114Edit4 = 0 ;
   this.AV115Combo4 = 0 ;
   this.AV122Visible4 = "" ;
   this.AV116Edit5 = 0 ;
   this.AV117Combo5 = 0 ;
   this.AV123Visible5 = "" ;
   this.AV55FamiliaId = "" ;
   this.AV60bmpFamilia = "" ;
   this.AV192bmpFamiliaExc = "" ;
   this.AV56Fabricante = 0 ;
   this.AV63bmpFabricante = "" ;
   this.AV193bmpFabricanteExc = "" ;
   this.AV45CodificacaoEstId = "" ;
   this.AV79bmpCodificacao = "" ;
   this.AV194bmpCodificacaoExc = "" ;
   this.AV50ClassificacaoEstId = "" ;
   this.AV80bmpClassificacao = "" ;
   this.AV195bmpClassificacaoExc = "" ;
   this.AV209LoteCBarras = "" ;
   this.AV145EtiquetaTamEntreLinha = 0 ;
   this.AV140SNTxt = "" ;
   this.AV118SNLoteUnico = "" ;
   this.AV65Sim = "" ;
   this.AV90FilialEmpresaId = "" ;
   this.AV144EtiquetaQtdColLinha = 0 ;
   this.AV158QtdeChar = 0 ;
   this.AV66EmpresaPessoasEmpresaId = "" ;
   this.AV94EmpresaEtiquetaEmpresaId = "" ;
   this.AV95EtiquetaTermicaEmpresaId = "" ;
   this.AV72IntAux = 0 ;
   this.AV73CharAux = "" ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV107CodigoBarrasProdutoBarra = 0 ;
   this.AV106ProdutoReferencia = "" ;
   this.AV74LoteCombinacao = "" ;
   this.AV154SNVenda = "" ;
   this.AV64Nao = "" ;
   this.GXV17U = "" ;
   this.GXV17V = "" ;
   this.AV96bmpExcFamilia = "" ;
   this.GXV17X = 0 ;
   this.GXV18D = 0 ;
   this.GXV18E = "" ;
   this.AV97bmpExcFabricante = "" ;
   this.GXV18G = 0 ;
   this.GXV18X = "" ;
   this.GXV18Y = "" ;
   this.AV99bmpExcCodificacao = "" ;
   this.GXV190 = 0 ;
   this.GXV19G = "" ;
   this.GXV19H = "" ;
   this.AV100bmpExcClassificacao = "" ;
   this.GXV19J = 0 ;
   this.GXV16U = 0 ;
   this.GXV16V = 0 ;
   this.GXV16W = "" ;
   this.GXV16X = "" ;
   this.GXV16Y = "" ;
   this.GXV16Z = 0 ;
   this.GXV170 = "" ;
   this.GXV171 = "" ;
   this.GXV172 = "" ;
   this.GXV173 = "" ;
   this.GXV174 = "" ;
   this.AV129bmpLote = "" ;
   this.AV98bmpExcProduto = "" ;
   this.GXV177 = 0 ;
   this.GXV178 = "" ;
   this.GXV179 = "" ;
   this.GXV17A = "" ;
   this.GXV17B = "" ;
   this.GXV17C = 0 ;
   this.GXV17D = "" ;
   this.A4656EntradaDataEntrada = gx.date.nullDate() ;
   this.A4643EntradaFornecedorId = 0 ;
   this.A4642EntradaFornecedorEmpId = "" ;
   this.A4646EntradaNumeroDocumento = 0 ;
   this.A4637EntradaEmpresaId = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2960ProdutoDescricao = "" ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A3840ProdutoFamiliaId = "" ;
   this.A3838ProdutoCodificacaoPrincipal = "" ;
   this.A3400ProdutoClassificacaoPrincipal = "" ;
   this.A3398ProdutoFabricanteId = 0 ;
   this.A3846ProdutoFabricanteFantasia = "" ;
   this.A3845ProdutoFabricanteEmpId = "" ;
   this.A3624LoteProdutoCombinacao = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A3645LoteProdutoQtdeAtual = 0 ;
   this.A2937CodificacaoEstId = "" ;
   this.A2936CodificacaoEstEmpresaId = "" ;
   this.A2932CodificacaoEstDescricao = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A2915EsquemaCodigo = 0 ;
   this.A5903EtiquetaTermicaModelo = 0 ;
   this.A5902EtiquetaTermicaEmpresaId = "" ;
   this.A2929ClassificacaoEstEmpresaId = "" ;
   this.A9866EtiquetaTermicaSituacao = "" ;
   this.A5886EtiquetaTermicaCampo = "" ;
   this.A241EtiquetaCodigo = 0 ;
   this.A240EmpresaEtiquetaEmpresaId = "" ;
   this.A102EtiquetaTamEntreLinha = 0 ;
   this.A743EtiquetaTipoImpressao = "" ;
   this.A98EtiquetaQtdLinhasPag = 0 ;
   this.A99EtiquetaQtdLinhasEtq = 0 ;
   this.A100EtiquetaQtdColLinha = 0 ;
   this.A239EtiquetaLinhaConteudo = "" ;
   this.A242EtiquetaLinhaCod = 0 ;
   this.A2921AtributoEsquemaCodigo = 0 ;
   this.A2939ValorAtributoUsuarioAlt = "" ;
   this.A2941ValorAtributoCodigo = 0 ;
   this.A2938ValorAtributoDescricao = "" ;
   this.A2916AtributoEsquemaDescricao = "" ;
   this.A2917AtributoEsquemaSnCadastrado = "" ;
   this.A2930ClassificacaoEstId = "" ;
   this.A71PessoaFantasia = "" ;
   this.A2957FamiliaId = "" ;
   this.A2956FamiliaEmpresaId = "" ;
   this.A2951FamiliaDescricao = "" ;
   this.A10788ProdutoSnControlaVenc = "" ;
   this.A3644LoteProdutoCodigoBarras = 0 ;
   this.A2968CodigoBarrasProdutoBarra = 0 ;
   this.A2912EsquemaDescricao = "" ;
   this.A1136FilialNome = "" ;
   this.AV208IdentificacaoProduto = "" ;
   this.AV69SdtGridProdutoEtiqueta = [ ] ;
   this.AV216isUnicoAtt = false ;
   this.AV172ValorAtributoCodigo = 0 ;
   this.AV213SnLoteMedicamen = "" ;
   this.AV257Pgmname = "" ;
   this.AV201SdtTxtTela = [ ] ;
   this.AV15EmpresaLogadaId = "" ;
   this.AV75ProdutoEmpresaId = "" ;
   this.AV130EsquemaUnico = "" ;
   this.AV103SNErro = "" ;
   this.AV128LoteProdutoCombinacao = "" ;
   this.AV214MesAnoVenc = "" ;
   this.AV212isVencLote = false ;
   this.AV165EsquemaCodigoProduto = 0 ;
   this.AV171AtributoEsquemaCodigo = 0 ;
   this.AV124i = 0 ;
   this.AV173ValorAtributoCodigoStr = "" ;
   this.AV174ValorAtributoDescricao = "" ;
   this.AV306GXV14 = 0 ;
   this.AV76SdtGridProdutoEtiquetaItem = {} ;
   this.AV305GXV13 = 0 ;
   this.AV166TipoEmissaoDesc = "" ;
   this.AV168OrdenacaoDesc = "" ;
   this.Events = {"e11x92_client": ["MODALPARCELAS.CLICK", true] ,"e12x92_client": ["'AVANCAR'", true] ,"e40x92_client": ["'LOTEPRODUTO'", true] ,"e41x92_client": ["'DLTPRODUTO'", true] ,"e13x92_client": ["'ADICIONARFAMILIA'", true] ,"e30x92_client": ["'DLTFAMILIA'", true] ,"e14x92_client": ["'ADICIONARFABRICANTE'", true] ,"e32x92_client": ["'DLTFABRICANTE'", true] ,"e15x92_client": ["'ADICIONARCODIFICACAO'", true] ,"e34x92_client": ["'DLTCODIFICACAO'", true] ,"e16x92_client": ["'ADICIONARCLASSIFICACAO'", true] ,"e36x92_client": ["'DLTCLASSIFICACAO'", true] ,"e17x92_client": ["ENTER", true] ,"e18x92_client": ["'FECHAR'", true] ,"e19x92_client": ["'LIMPARGRIDPRODUTO'", true] ,"e20x92_client": ["'LIMPARGRIDFAMILIA'", true] ,"e21x92_client": ["'LIMPARGRIDFABRICANTE'", true] ,"e22x92_client": ["'LIMPARGRIDCODIF'", true] ,"e23x92_client": ["'LIMPARGRIDCLASSIF'", true] ,"e24x92_client": ["'CONFIRMAR'", true] ,"e25x92_client": ["'LISTARPRODUTOS'", true] ,"e26x92_client": ["'SALVARTXT'", true] ,"e27x92_client": ["VTXTTELA.CLICK", true] ,"e28x92_client": ["'EXCLUIRTXT'", true] ,"e29x92_client": ["VTPETIQUETA.CLICK", true] ,"e43x92_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID3_nFirstRecordOnPage'},{av:'GRID3_nEOF'},{av:'AV98bmpExcProduto',fld:'vBMPEXCPRODUTO'},{av:'AV129bmpLote',fld:'vBMPLOTE'},{av:'gx.fn.getCtrlProperty("vBMPLOTE","Tooltiptext")',ctrl:'vBMPLOTE',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPLOTE","Visible")',ctrl:'vBMPLOTE',prop:'Visible'},{av:'GRID5_nFirstRecordOnPage'},{av:'GRID5_nEOF'},{av:'AV100bmpExcClassificacao',fld:'vBMPEXCCLASSIFICACAO'},{av:'AV78SdtGridClassificacaoEtiqueta',fld:'vSDTGRIDCLASSIFICACAOETIQUETA',grid:339},{av:'GRID4_nFirstRecordOnPage'},{av:'GRID4_nEOF'},{av:'AV77SdtGridCodificacaoEtiqueta',fld:'vSDTGRIDCODIFICACAOETIQUETA',grid:320},{av:'AV99bmpExcCodificacao',fld:'vBMPEXCCODIFICACAO'},{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'AV59SdtGridFabricante',fld:'vSDTGRIDFABRICANTE',grid:300},{av:'AV97bmpExcFabricante',fld:'vBMPEXCFABRICANTE'},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV58SdtGridFamilia',fld:'vSDTGRIDFAMILIA',grid:281},{av:'AV96bmpExcFamilia',fld:'vBMPEXCFAMILIA'},{av:'AV208IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{av:'AV69SdtGridProdutoEtiqueta',fld:'vSDTGRIDPRODUTOETIQUETA',grid:245},{av:'AV28TpEtiqueta',fld:'vTPETIQUETA'},{av:'AV68ProdutoId',fld:'vPRODUTOID'},{av:'AV157SNAvancar',fld:'vSNAVANCAR'},{av:'AV216isUnicoAtt',fld:'vISUNICOATT'},{av:'AV172ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV213SnLoteMedicamen',fld:'vSNLOTEMEDICAMEN'},{av:'AV118SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV257Pgmname',fld:'vPGMNAME'},{av:'AV201SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV75ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV130EsquemaUnico',fld:'vESQUEMAUNICO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'AV108Edit1',fld:'vEDIT1'},{av:'AV209LoteCBarras',fld:'vLOTECBARRAS'},{av:'AV103SNErro',fld:'vSNERRO'},{av:'AV218isConsisteQuantidade',fld:'vISCONSISTEQUANTIDADE'},{av:'AV31TipoEmissao',fld:'vTIPOEMISSAO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV90FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV128LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV206Qtde',fld:'vQTDE'},{av:'A3645LoteProdutoQtdeAtual',fld:'LOTEPRODUTOQTDEATUAL'},{av:'A2960ProdutoDescricao',fld:'PRODUTODESCRICAO'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'AV207ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'A3840ProdutoFamiliaId',fld:'PRODUTOFAMILIAID'},{av:'A3838ProdutoCodificacaoPrincipal',fld:'PRODUTOCODIFICACAOPRINCIPAL'},{av:'A3400ProdutoClassificacaoPrincipal',fld:'PRODUTOCLASSIFICACAOPRINCIPAL'},{av:'A3398ProdutoFabricanteId',fld:'PRODUTOFABRICANTEID'},{av:'A3846ProdutoFabricanteFantasia',fld:'PRODUTOFABRICANTEFANTASIA'},{av:'AV214MesAnoVenc',fld:'vMESANOVENC',hsh:true},{av:'AV212isVencLote',fld:'vISVENCLOTE'},{av:'AV217TxtTela',fld:'vTXTTELA'},{av:'AV182SessaoAux',fld:'vSESSAOAUX'},{av:'AV165EsquemaCodigoProduto',fld:'vESQUEMACODIGOPRODUTO'},{av:'AV171AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2939ValorAtributoUsuarioAlt',fld:'VALORATRIBUTOUSUARIOALT'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV119Visible1',fld:'vVISIBLE1'},{av:'AV109Combo1',fld:'vCOMBO1'},{av:'AV120Visible2',fld:'vVISIBLE2'},{av:'AV110Edit2',fld:'vEDIT2'},{av:'AV111Combo2',fld:'vCOMBO2'},{av:'AV121Visible3',fld:'vVISIBLE3'},{av:'AV112Edit3',fld:'vEDIT3'},{av:'AV113Combo3',fld:'vCOMBO3'},{av:'AV122Visible4',fld:'vVISIBLE4'},{av:'AV114Edit4',fld:'vEDIT4'},{av:'AV115Combo4',fld:'vCOMBO4'},{av:'AV123Visible5',fld:'vVISIBLE5'},{av:'AV116Edit5',fld:'vEDIT5'},{av:'AV117Combo5',fld:'vCOMBO5'},{av:'AV124i',fld:'vI'},{av:'AV173ValorAtributoCodigoStr',fld:'vVALORATRIBUTOCODIGOSTR'},{av:'AV174ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'}],[{av:'gx.fn.getCtrlProperty("TABCBARRAS","Visible")',ctrl:'TABCBARRAS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCOD","Visible")',ctrl:'TABCOD',prop:'Visible'},{ctrl:'CTLPRODUTOCODIGOBARRAS',prop:'Visible'},{ctrl:'CTLPRODUTOID',prop:'Visible'},{av:'AV101Indice',fld:'vINDICE'},{av:'AV74LoteCombinacao',fld:'vLOTECOMBINACAO'},{av:'AV278GXV6',fld:'vGXV6'},{av:'AV76SdtGridProdutoEtiquetaItem',fld:'vSDTGRIDPRODUTOETIQUETAITEM'},{av:'gx.fn.getCtrlProperty("vETIQUETATERMICAMODELO","Visible")',ctrl:'vETIQUETATERMICAMODELO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vETIQUETATERMICADESCRICAO","Visible")',ctrl:'vETIQUETATERMICADESCRICAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vETIQUETACODIGO","Visible")',ctrl:'vETIQUETACODIGO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vETIQUETADESCRICAO","Visible")',ctrl:'vETIQUETADESCRICAO',prop:'Visible'},{av:'AV109Combo1',fld:'vCOMBO1'},{av:'AV128LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV214MesAnoVenc',fld:'vMESANOVENC',hsh:true},{av:'AV212isVencLote',fld:'vISVENCLOTE'},{ctrl:'CTLLOTEPRODUTOCOMBINACAO',prop:'Visible'},{ctrl:'CTLMESANOVENC',prop:'Visible'},{av:'AV215SdtGridProdutoEtiquetaAux',fld:'vSDTGRIDPRODUTOETIQUETAAUX'},{av:'AV69SdtGridProdutoEtiqueta',fld:'vSDTGRIDPRODUTOETIQUETA',grid:245},{av:'AV279GXV7',fld:'vGXV7'},{av:'AV217TxtTela',fld:'vTXTTELA'},{av:'AV314GXV17',fld:'vGXV17'},{av:'AV202SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'gx.fn.getCtrlProperty("TABLELOTE","Visible")',ctrl:'TABLELOTE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESC1","Visible")',ctrl:'vDESC1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESC2","Visible")',ctrl:'vDESC2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESC3","Visible")',ctrl:'vDESC3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESC4","Visible")',ctrl:'vDESC4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESC5","Visible")',ctrl:'vDESC5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT1","Visible")',ctrl:'vEDIT1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT2","Visible")',ctrl:'vEDIT2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT3","Visible")',ctrl:'vEDIT3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT4","Visible")',ctrl:'vEDIT4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT5","Visible")',ctrl:'vEDIT5',prop:'Visible'},{ctrl:'vCOMBO1'},{ctrl:'vCOMBO2'},{ctrl:'vCOMBO3'},{ctrl:'vCOMBO4'},{ctrl:'vCOMBO5'},{av:'AV119Visible1',fld:'vVISIBLE1'},{av:'AV120Visible2',fld:'vVISIBLE2'},{av:'AV121Visible3',fld:'vVISIBLE3'},{av:'AV122Visible4',fld:'vVISIBLE4'},{av:'AV123Visible5',fld:'vVISIBLE5'},{av:'AV165EsquemaCodigoProduto',fld:'vESQUEMACODIGOPRODUTO'},{av:'AV124i',fld:'vI'},{av:'AV216isUnicoAtt',fld:'vISUNICOATT'},{av:'AV171AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV175Desc1',fld:'vDESC1'},{av:'AV176Desc2',fld:'vDESC2'},{av:'AV111Combo2',fld:'vCOMBO2'},{av:'AV177Desc3',fld:'vDESC3'},{av:'AV113Combo3',fld:'vCOMBO3'},{av:'AV178Desc4',fld:'vDESC4'},{av:'AV115Combo4',fld:'vCOMBO4'},{av:'AV179Desc5',fld:'vDESC5'},{av:'AV117Combo5',fld:'vCOMBO5'},{av:'AV108Edit1',fld:'vEDIT1'},{av:'AV110Edit2',fld:'vEDIT2'},{av:'AV112Edit3',fld:'vEDIT3'},{av:'AV114Edit4',fld:'vEDIT4'},{av:'AV116Edit5',fld:'vEDIT5'},{av:'AV157SNAvancar',fld:'vSNAVANCAR'},{av:'AV207ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'AV68ProdutoId',fld:'vPRODUTOID'},{av:'AV206Qtde',fld:'vQTDE'},{av:'AV103SNErro',fld:'vSNERRO'},{av:'AV310GXLvl1843',fld:'vGXLVL1843'},{av:'AV313GXV16',fld:'vGXV16'},{av:'AV42DataUltEnvio',fld:'vDATAULTENVIO'},{av:'AV218isConsisteQuantidade',fld:'vISCONSISTEQUANTIDADE'},{av:'AV172ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV173ValorAtributoCodigoStr',fld:'vVALORATRIBUTOCODIGOSTR'},{av:'AV174ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'},{av:'AV305GXV13',fld:'vGXV13'},{av:'AV306GXV14',fld:'vGXV14'}]];
   this.EvtParms["VTPETIQUETA.CLICK"] = [[{av:'AV28TpEtiqueta',fld:'vTPETIQUETA'}],[{av:'AV92EtiquetaCodigo',fld:'vETIQUETACODIGO'},{av:'AV93EtiquetaDescricao',fld:'vETIQUETADESCRICAO'},{av:'AV29EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO'},{av:'AV91EtiquetaTermicaDescricao',fld:'vETIQUETATERMICADESCRICAO'},{av:'AV139LinhaInicial',fld:'vLINHAINICIAL'},{av:'AV138ColunaInicial',fld:'vCOLUNAINICIAL'}]];
   this.EvtParms["MODALPARCELAS.CLICK"] = [[{av:'AV92EtiquetaCodigo',fld:'vETIQUETACODIGO'},{av:'AV29EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO'},{av:'AV28TpEtiqueta',fld:'vTPETIQUETA'},{av:'AV104SNExiste',fld:'vSNEXISTE'},{av:'AV204EtiquetaTermicaSituacao',fld:'vETIQUETATERMICASITUACAO'},{av:'AV184SNParcelas',fld:'vSNPARCELAS'},{av:'AV103SNErro',fld:'vSNERRO'},{av:'AV182SessaoAux',fld:'vSESSAOAUX'},{av:'A240EmpresaEtiquetaEmpresaId',fld:'EMPRESAETIQUETAEMPRESAID'},{av:'AV94EmpresaEtiquetaEmpresaId',fld:'vEMPRESAETIQUETAEMPRESAID'},{av:'A241EtiquetaCodigo',fld:'ETIQUETACODIGO'},{av:'A102EtiquetaTamEntreLinha',fld:'ETIQUETATAMENTRELINHA'},{av:'A743EtiquetaTipoImpressao',fld:'ETIQUETATIPOIMPRESSAO'},{av:'A98EtiquetaQtdLinhasPag',fld:'ETIQUETAQTDLINHASPAG'},{av:'A99EtiquetaQtdLinhasEtq',fld:'ETIQUETAQTDLINHASETQ'},{av:'A100EtiquetaQtdColLinha',fld:'ETIQUETAQTDCOLLINHA'},{av:'A242EtiquetaLinhaCod',fld:'ETIQUETALINHACOD'},{av:'A239EtiquetaLinhaConteudo',fld:'ETIQUETALINHACONTEUDO'},{av:'A5902EtiquetaTermicaEmpresaId',fld:'ETIQUETATERMICAEMPRESAID'},{av:'AV95EtiquetaTermicaEmpresaId',fld:'vETIQUETATERMICAEMPRESAID'},{av:'A5903EtiquetaTermicaModelo',fld:'ETIQUETATERMICAMODELO'},{av:'A9866EtiquetaTermicaSituacao',fld:'ETIQUETATERMICASITUACAO'},{av:'A5886EtiquetaTermicaCampo',fld:'ETIQUETATERMICACAMPO'}],[{av:'AV103SNErro',fld:'vSNERRO'},{av:'AV182SessaoAux',fld:'vSESSAOAUX'},{av:'AV104SNExiste',fld:'vSNEXISTE'},{av:'AV184SNParcelas',fld:'vSNPARCELAS'},{av:'AV145EtiquetaTamEntreLinha',fld:'vETIQUETATAMENTRELINHA'},{av:'AV141EtiquetaTipoImpressao',fld:'vETIQUETATIPOIMPRESSAO'},{av:'AV143EtiquetaQtdLinhasPag',fld:'vETIQUETAQTDLINHASPAG'},{av:'AV142EtiquetaQtdLinhasEtq',fld:'vETIQUETAQTDLINHASETQ'},{av:'AV144EtiquetaQtdColLinha',fld:'vETIQUETAQTDCOLLINHA'},{av:'AV204EtiquetaTermicaSituacao',fld:'vETIQUETATERMICASITUACAO'}]];
   this.EvtParms["'AVANCAR'"] = [[{av:'AV218isConsisteQuantidade',fld:'vISCONSISTEQUANTIDADE'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'AV104SNExiste',fld:'vSNEXISTE'},{av:'AV103SNErro',fld:'vSNERRO'},{av:'AV208IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{av:'AV207ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'AV118SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV75ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2968CodigoBarrasProdutoBarra',fld:'CODIGOBARRASPRODUTOBARRA'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV90FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A3644LoteProdutoCodigoBarras',fld:'LOTEPRODUTOCODIGOBARRAS'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV68ProdutoId',fld:'vPRODUTOID'},{av:'A10788ProdutoSnControlaVenc',fld:'PRODUTOSNCONTROLAVENC'}],[{av:'AV103SNErro',fld:'vSNERRO'},{av:'AV157SNAvancar',fld:'vSNAVANCAR'},{av:'AV210PRodutoSnControlaVenc',fld:'vPRODUTOSNCONTROLAVENC'},{av:'AV280GXLvl379',fld:'vGXLVL379'},{av:'AV281GXLvl391',fld:'vGXLVL391'},{av:'AV209LoteCBarras',fld:'vLOTECBARRAS'},{av:'AV68ProdutoId',fld:'vPRODUTOID'},{av:'AV283GXLvl419',fld:'vGXLVL419'},{av:'AV104SNExiste',fld:'vSNEXISTE'}]];
   this.EvtParms["'LOTEPRODUTO'"] = [[{av:'GRID3_nFirstRecordOnPage'},{av:'GRID3_nEOF'},{av:'AV98bmpExcProduto',fld:'vBMPEXCPRODUTO'},{av:'AV129bmpLote',fld:'vBMPLOTE'},{av:'gx.fn.getCtrlProperty("vBMPLOTE","Tooltiptext")',ctrl:'vBMPLOTE',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPLOTE","Visible")',ctrl:'vBMPLOTE',prop:'Visible'},{av:'AV208IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{av:'AV69SdtGridProdutoEtiqueta',fld:'vSDTGRIDPRODUTOETIQUETA',grid:245},{av:'AV28TpEtiqueta',fld:'vTPETIQUETA'},{av:'AV68ProdutoId',fld:'vPRODUTOID'},{av:'AV157SNAvancar',fld:'vSNAVANCAR'},{av:'AV216isUnicoAtt',fld:'vISUNICOATT'},{av:'AV172ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV213SnLoteMedicamen',fld:'vSNLOTEMEDICAMEN'},{av:'AV118SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV257Pgmname',fld:'vPGMNAME'},{av:'AV201SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV75ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV130EsquemaUnico',fld:'vESQUEMAUNICO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'AV108Edit1',fld:'vEDIT1'},{av:'AV209LoteCBarras',fld:'vLOTECBARRAS'},{av:'AV103SNErro',fld:'vSNERRO'},{av:'AV218isConsisteQuantidade',fld:'vISCONSISTEQUANTIDADE'},{av:'AV31TipoEmissao',fld:'vTIPOEMISSAO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV90FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV128LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV206Qtde',fld:'vQTDE'},{av:'A3645LoteProdutoQtdeAtual',fld:'LOTEPRODUTOQTDEATUAL'},{av:'A2960ProdutoDescricao',fld:'PRODUTODESCRICAO'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'AV207ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'A3840ProdutoFamiliaId',fld:'PRODUTOFAMILIAID'},{av:'A3838ProdutoCodificacaoPrincipal',fld:'PRODUTOCODIFICACAOPRINCIPAL'},{av:'A3400ProdutoClassificacaoPrincipal',fld:'PRODUTOCLASSIFICACAOPRINCIPAL'},{av:'A3398ProdutoFabricanteId',fld:'PRODUTOFABRICANTEID'},{av:'A3846ProdutoFabricanteFantasia',fld:'PRODUTOFABRICANTEFANTASIA'},{av:'AV214MesAnoVenc',fld:'vMESANOVENC',hsh:true},{av:'AV212isVencLote',fld:'vISVENCLOTE'},{av:'AV217TxtTela',fld:'vTXTTELA'},{av:'AV182SessaoAux',fld:'vSESSAOAUX'},{av:'AV165EsquemaCodigoProduto',fld:'vESQUEMACODIGOPRODUTO'},{av:'AV171AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2939ValorAtributoUsuarioAlt',fld:'VALORATRIBUTOUSUARIOALT'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV119Visible1',fld:'vVISIBLE1'},{av:'AV109Combo1',fld:'vCOMBO1'},{av:'AV120Visible2',fld:'vVISIBLE2'},{av:'AV110Edit2',fld:'vEDIT2'},{av:'AV111Combo2',fld:'vCOMBO2'},{av:'AV121Visible3',fld:'vVISIBLE3'},{av:'AV112Edit3',fld:'vEDIT3'},{av:'AV113Combo3',fld:'vCOMBO3'},{av:'AV122Visible4',fld:'vVISIBLE4'},{av:'AV114Edit4',fld:'vEDIT4'},{av:'AV115Combo4',fld:'vCOMBO4'},{av:'AV123Visible5',fld:'vVISIBLE5'},{av:'AV116Edit5',fld:'vEDIT5'},{av:'AV117Combo5',fld:'vCOMBO5'},{av:'AV124i',fld:'vI'},{av:'AV173ValorAtributoCodigoStr',fld:'vVALORATRIBUTOCODIGOSTR'},{av:'AV174ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'}],[{av:'AV165EsquemaCodigoProduto',fld:'vESQUEMACODIGOPRODUTO'},{av:'AV101Indice',fld:'vINDICE'},{av:'AV155Aux',fld:'vAUX'},{av:'AV69SdtGridProdutoEtiqueta',fld:'vSDTGRIDPRODUTOETIQUETA',grid:245},{av:'AV27FilialId',fld:'vFILIALID'}]];
   this.EvtParms["'DLTPRODUTO'"] = [[{av:'AV69SdtGridProdutoEtiqueta',fld:'vSDTGRIDPRODUTOETIQUETA',grid:245},{av:'GRID3_nFirstRecordOnPage'},{av:'GRID3_nEOF'},{av:'AV98bmpExcProduto',fld:'vBMPEXCPRODUTO'},{av:'AV129bmpLote',fld:'vBMPLOTE'},{av:'gx.fn.getCtrlProperty("vBMPLOTE","Tooltiptext")',ctrl:'vBMPLOTE',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPLOTE","Visible")',ctrl:'vBMPLOTE',prop:'Visible'},{av:'AV208IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{av:'AV28TpEtiqueta',fld:'vTPETIQUETA'},{av:'AV68ProdutoId',fld:'vPRODUTOID'},{av:'AV157SNAvancar',fld:'vSNAVANCAR'},{av:'AV216isUnicoAtt',fld:'vISUNICOATT'},{av:'AV172ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV213SnLoteMedicamen',fld:'vSNLOTEMEDICAMEN'},{av:'AV118SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV257Pgmname',fld:'vPGMNAME'},{av:'AV201SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV75ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV130EsquemaUnico',fld:'vESQUEMAUNICO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'AV108Edit1',fld:'vEDIT1'},{av:'AV209LoteCBarras',fld:'vLOTECBARRAS'},{av:'AV103SNErro',fld:'vSNERRO'},{av:'AV218isConsisteQuantidade',fld:'vISCONSISTEQUANTIDADE'},{av:'AV31TipoEmissao',fld:'vTIPOEMISSAO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV90FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV128LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV206Qtde',fld:'vQTDE'},{av:'A3645LoteProdutoQtdeAtual',fld:'LOTEPRODUTOQTDEATUAL'},{av:'A2960ProdutoDescricao',fld:'PRODUTODESCRICAO'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'AV207ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'A3840ProdutoFamiliaId',fld:'PRODUTOFAMILIAID'},{av:'A3838ProdutoCodificacaoPrincipal',fld:'PRODUTOCODIFICACAOPRINCIPAL'},{av:'A3400ProdutoClassificacaoPrincipal',fld:'PRODUTOCLASSIFICACAOPRINCIPAL'},{av:'A3398ProdutoFabricanteId',fld:'PRODUTOFABRICANTEID'},{av:'A3846ProdutoFabricanteFantasia',fld:'PRODUTOFABRICANTEFANTASIA'},{av:'AV214MesAnoVenc',fld:'vMESANOVENC',hsh:true},{av:'AV212isVencLote',fld:'vISVENCLOTE'},{av:'AV217TxtTela',fld:'vTXTTELA'},{av:'AV182SessaoAux',fld:'vSESSAOAUX'},{av:'AV165EsquemaCodigoProduto',fld:'vESQUEMACODIGOPRODUTO'},{av:'AV171AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2939ValorAtributoUsuarioAlt',fld:'VALORATRIBUTOUSUARIOALT'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV119Visible1',fld:'vVISIBLE1'},{av:'AV109Combo1',fld:'vCOMBO1'},{av:'AV120Visible2',fld:'vVISIBLE2'},{av:'AV110Edit2',fld:'vEDIT2'},{av:'AV111Combo2',fld:'vCOMBO2'},{av:'AV121Visible3',fld:'vVISIBLE3'},{av:'AV112Edit3',fld:'vEDIT3'},{av:'AV113Combo3',fld:'vCOMBO3'},{av:'AV122Visible4',fld:'vVISIBLE4'},{av:'AV114Edit4',fld:'vEDIT4'},{av:'AV115Combo4',fld:'vCOMBO4'},{av:'AV123Visible5',fld:'vVISIBLE5'},{av:'AV116Edit5',fld:'vEDIT5'},{av:'AV117Combo5',fld:'vCOMBO5'},{av:'AV124i',fld:'vI'},{av:'AV173ValorAtributoCodigoStr',fld:'vVALORATRIBUTOCODIGOSTR'},{av:'AV174ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'}],[{av:'AV69SdtGridProdutoEtiqueta',fld:'vSDTGRIDPRODUTOETIQUETA',grid:245},{av:'AV101Indice',fld:'vINDICE'},{av:'AV285GXV8',fld:'vGXV8'},{av:'AV76SdtGridProdutoEtiquetaItem',fld:'vSDTGRIDPRODUTOETIQUETAITEM'}]];
   this.EvtParms["'ADICIONARFAMILIA'"] = [[{av:'AV55FamiliaId',fld:'vFAMILIAID'},{av:'A2956FamiliaEmpresaId',fld:'FAMILIAEMPRESAID'},{av:'AV61FamiliaEmpresaId',fld:'vFAMILIAEMPRESAID'},{av:'A2957FamiliaId',fld:'FAMILIAID'},{av:'AV58SdtGridFamilia',fld:'vSDTGRIDFAMILIA',grid:281},{av:'A2951FamiliaDescricao',fld:'FAMILIADESCRICAO'},{av:'AV103SNErro',fld:'vSNERRO'},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV96bmpExcFamilia',fld:'vBMPEXCFAMILIA'},{av:'AV208IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{av:'AV69SdtGridProdutoEtiqueta',fld:'vSDTGRIDPRODUTOETIQUETA',grid:245},{av:'AV28TpEtiqueta',fld:'vTPETIQUETA'},{av:'AV68ProdutoId',fld:'vPRODUTOID'},{av:'AV157SNAvancar',fld:'vSNAVANCAR'},{av:'AV216isUnicoAtt',fld:'vISUNICOATT'},{av:'AV172ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV213SnLoteMedicamen',fld:'vSNLOTEMEDICAMEN'},{av:'AV118SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV257Pgmname',fld:'vPGMNAME'},{av:'AV201SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV75ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV130EsquemaUnico',fld:'vESQUEMAUNICO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'AV108Edit1',fld:'vEDIT1'},{av:'AV209LoteCBarras',fld:'vLOTECBARRAS'},{av:'AV218isConsisteQuantidade',fld:'vISCONSISTEQUANTIDADE'},{av:'AV31TipoEmissao',fld:'vTIPOEMISSAO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV90FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV128LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV206Qtde',fld:'vQTDE'},{av:'A3645LoteProdutoQtdeAtual',fld:'LOTEPRODUTOQTDEATUAL'},{av:'A2960ProdutoDescricao',fld:'PRODUTODESCRICAO'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'AV207ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'A3840ProdutoFamiliaId',fld:'PRODUTOFAMILIAID'},{av:'A3838ProdutoCodificacaoPrincipal',fld:'PRODUTOCODIFICACAOPRINCIPAL'},{av:'A3400ProdutoClassificacaoPrincipal',fld:'PRODUTOCLASSIFICACAOPRINCIPAL'},{av:'A3398ProdutoFabricanteId',fld:'PRODUTOFABRICANTEID'},{av:'A3846ProdutoFabricanteFantasia',fld:'PRODUTOFABRICANTEFANTASIA'},{av:'AV214MesAnoVenc',fld:'vMESANOVENC',hsh:true},{av:'AV212isVencLote',fld:'vISVENCLOTE'},{av:'AV217TxtTela',fld:'vTXTTELA'},{av:'AV182SessaoAux',fld:'vSESSAOAUX'},{av:'AV165EsquemaCodigoProduto',fld:'vESQUEMACODIGOPRODUTO'},{av:'AV171AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2939ValorAtributoUsuarioAlt',fld:'VALORATRIBUTOUSUARIOALT'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV119Visible1',fld:'vVISIBLE1'},{av:'AV109Combo1',fld:'vCOMBO1'},{av:'AV120Visible2',fld:'vVISIBLE2'},{av:'AV110Edit2',fld:'vEDIT2'},{av:'AV111Combo2',fld:'vCOMBO2'},{av:'AV121Visible3',fld:'vVISIBLE3'},{av:'AV112Edit3',fld:'vEDIT3'},{av:'AV113Combo3',fld:'vCOMBO3'},{av:'AV122Visible4',fld:'vVISIBLE4'},{av:'AV114Edit4',fld:'vEDIT4'},{av:'AV115Combo4',fld:'vCOMBO4'},{av:'AV123Visible5',fld:'vVISIBLE5'},{av:'AV116Edit5',fld:'vEDIT5'},{av:'AV117Combo5',fld:'vCOMBO5'},{av:'AV124i',fld:'vI'},{av:'AV173ValorAtributoCodigoStr',fld:'vVALORATRIBUTOCODIGOSTR'},{av:'AV174ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'}],[{av:'AV286GXLvl520',fld:'vGXLVL520'},{av:'AV62SdtGridFamiliaItem',fld:'vSDTGRIDFAMILIAITEM'},{av:'AV58SdtGridFamilia',fld:'vSDTGRIDFAMILIA',grid:281},{av:'AV103SNErro',fld:'vSNERRO'},{av:'AV55FamiliaId',fld:'vFAMILIAID'}]];
   this.EvtParms["'DLTFAMILIA'"] = [[{av:'AV58SdtGridFamilia',fld:'vSDTGRIDFAMILIA',grid:281},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV96bmpExcFamilia',fld:'vBMPEXCFAMILIA'},{av:'AV208IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{av:'AV69SdtGridProdutoEtiqueta',fld:'vSDTGRIDPRODUTOETIQUETA',grid:245},{av:'AV28TpEtiqueta',fld:'vTPETIQUETA'},{av:'AV68ProdutoId',fld:'vPRODUTOID'},{av:'AV157SNAvancar',fld:'vSNAVANCAR'},{av:'AV216isUnicoAtt',fld:'vISUNICOATT'},{av:'AV172ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV213SnLoteMedicamen',fld:'vSNLOTEMEDICAMEN'},{av:'AV118SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV257Pgmname',fld:'vPGMNAME'},{av:'AV201SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV75ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV130EsquemaUnico',fld:'vESQUEMAUNICO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'AV108Edit1',fld:'vEDIT1'},{av:'AV209LoteCBarras',fld:'vLOTECBARRAS'},{av:'AV103SNErro',fld:'vSNERRO'},{av:'AV218isConsisteQuantidade',fld:'vISCONSISTEQUANTIDADE'},{av:'AV31TipoEmissao',fld:'vTIPOEMISSAO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV90FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV128LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV206Qtde',fld:'vQTDE'},{av:'A3645LoteProdutoQtdeAtual',fld:'LOTEPRODUTOQTDEATUAL'},{av:'A2960ProdutoDescricao',fld:'PRODUTODESCRICAO'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'AV207ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'A3840ProdutoFamiliaId',fld:'PRODUTOFAMILIAID'},{av:'A3838ProdutoCodificacaoPrincipal',fld:'PRODUTOCODIFICACAOPRINCIPAL'},{av:'A3400ProdutoClassificacaoPrincipal',fld:'PRODUTOCLASSIFICACAOPRINCIPAL'},{av:'A3398ProdutoFabricanteId',fld:'PRODUTOFABRICANTEID'},{av:'A3846ProdutoFabricanteFantasia',fld:'PRODUTOFABRICANTEFANTASIA'},{av:'AV214MesAnoVenc',fld:'vMESANOVENC',hsh:true},{av:'AV212isVencLote',fld:'vISVENCLOTE'},{av:'AV217TxtTela',fld:'vTXTTELA'},{av:'AV182SessaoAux',fld:'vSESSAOAUX'},{av:'AV165EsquemaCodigoProduto',fld:'vESQUEMACODIGOPRODUTO'},{av:'AV171AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2939ValorAtributoUsuarioAlt',fld:'VALORATRIBUTOUSUARIOALT'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV119Visible1',fld:'vVISIBLE1'},{av:'AV109Combo1',fld:'vCOMBO1'},{av:'AV120Visible2',fld:'vVISIBLE2'},{av:'AV110Edit2',fld:'vEDIT2'},{av:'AV111Combo2',fld:'vCOMBO2'},{av:'AV121Visible3',fld:'vVISIBLE3'},{av:'AV112Edit3',fld:'vEDIT3'},{av:'AV113Combo3',fld:'vCOMBO3'},{av:'AV122Visible4',fld:'vVISIBLE4'},{av:'AV114Edit4',fld:'vEDIT4'},{av:'AV115Combo4',fld:'vCOMBO4'},{av:'AV123Visible5',fld:'vVISIBLE5'},{av:'AV116Edit5',fld:'vEDIT5'},{av:'AV117Combo5',fld:'vCOMBO5'},{av:'AV124i',fld:'vI'},{av:'AV173ValorAtributoCodigoStr',fld:'vVALORATRIBUTOCODIGOSTR'},{av:'AV174ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'}],[{av:'AV58SdtGridFamilia',fld:'vSDTGRIDFAMILIA',grid:281},{av:'AV101Indice',fld:'vINDICE'},{av:'AV287GXV9',fld:'vGXV9'},{av:'AV62SdtGridFamiliaItem',fld:'vSDTGRIDFAMILIAITEM'}]];
   this.EvtParms["'ADICIONARFABRICANTE'"] = [[{av:'AV56Fabricante',fld:'vFABRICANTE'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV66EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV59SdtGridFabricante',fld:'vSDTGRIDFABRICANTE',grid:300},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV103SNErro',fld:'vSNERRO'},{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'AV97bmpExcFabricante',fld:'vBMPEXCFABRICANTE'},{av:'AV208IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{av:'AV69SdtGridProdutoEtiqueta',fld:'vSDTGRIDPRODUTOETIQUETA',grid:245},{av:'AV28TpEtiqueta',fld:'vTPETIQUETA'},{av:'AV68ProdutoId',fld:'vPRODUTOID'},{av:'AV157SNAvancar',fld:'vSNAVANCAR'},{av:'AV216isUnicoAtt',fld:'vISUNICOATT'},{av:'AV172ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV213SnLoteMedicamen',fld:'vSNLOTEMEDICAMEN'},{av:'AV118SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV257Pgmname',fld:'vPGMNAME'},{av:'AV201SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV75ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV130EsquemaUnico',fld:'vESQUEMAUNICO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'AV108Edit1',fld:'vEDIT1'},{av:'AV209LoteCBarras',fld:'vLOTECBARRAS'},{av:'AV218isConsisteQuantidade',fld:'vISCONSISTEQUANTIDADE'},{av:'AV31TipoEmissao',fld:'vTIPOEMISSAO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV90FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV128LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV206Qtde',fld:'vQTDE'},{av:'A3645LoteProdutoQtdeAtual',fld:'LOTEPRODUTOQTDEATUAL'},{av:'A2960ProdutoDescricao',fld:'PRODUTODESCRICAO'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'AV207ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'A3840ProdutoFamiliaId',fld:'PRODUTOFAMILIAID'},{av:'A3838ProdutoCodificacaoPrincipal',fld:'PRODUTOCODIFICACAOPRINCIPAL'},{av:'A3400ProdutoClassificacaoPrincipal',fld:'PRODUTOCLASSIFICACAOPRINCIPAL'},{av:'A3398ProdutoFabricanteId',fld:'PRODUTOFABRICANTEID'},{av:'A3846ProdutoFabricanteFantasia',fld:'PRODUTOFABRICANTEFANTASIA'},{av:'AV214MesAnoVenc',fld:'vMESANOVENC',hsh:true},{av:'AV212isVencLote',fld:'vISVENCLOTE'},{av:'AV217TxtTela',fld:'vTXTTELA'},{av:'AV182SessaoAux',fld:'vSESSAOAUX'},{av:'AV165EsquemaCodigoProduto',fld:'vESQUEMACODIGOPRODUTO'},{av:'AV171AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2939ValorAtributoUsuarioAlt',fld:'VALORATRIBUTOUSUARIOALT'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV119Visible1',fld:'vVISIBLE1'},{av:'AV109Combo1',fld:'vCOMBO1'},{av:'AV120Visible2',fld:'vVISIBLE2'},{av:'AV110Edit2',fld:'vEDIT2'},{av:'AV111Combo2',fld:'vCOMBO2'},{av:'AV121Visible3',fld:'vVISIBLE3'},{av:'AV112Edit3',fld:'vEDIT3'},{av:'AV113Combo3',fld:'vCOMBO3'},{av:'AV122Visible4',fld:'vVISIBLE4'},{av:'AV114Edit4',fld:'vEDIT4'},{av:'AV115Combo4',fld:'vCOMBO4'},{av:'AV123Visible5',fld:'vVISIBLE5'},{av:'AV116Edit5',fld:'vEDIT5'},{av:'AV117Combo5',fld:'vCOMBO5'},{av:'AV124i',fld:'vI'},{av:'AV173ValorAtributoCodigoStr',fld:'vVALORATRIBUTOCODIGOSTR'},{av:'AV174ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'}],[{av:'AV288GXLvl558',fld:'vGXLVL558'},{av:'AV67SdtGridFabricanteItem',fld:'vSDTGRIDFABRICANTEITEM'},{av:'AV59SdtGridFabricante',fld:'vSDTGRIDFABRICANTE',grid:300},{av:'AV103SNErro',fld:'vSNERRO'},{av:'AV56Fabricante',fld:'vFABRICANTE'}]];
   this.EvtParms["'DLTFABRICANTE'"] = [[{av:'AV59SdtGridFabricante',fld:'vSDTGRIDFABRICANTE',grid:300},{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'AV97bmpExcFabricante',fld:'vBMPEXCFABRICANTE'},{av:'AV208IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{av:'AV69SdtGridProdutoEtiqueta',fld:'vSDTGRIDPRODUTOETIQUETA',grid:245},{av:'AV28TpEtiqueta',fld:'vTPETIQUETA'},{av:'AV68ProdutoId',fld:'vPRODUTOID'},{av:'AV157SNAvancar',fld:'vSNAVANCAR'},{av:'AV216isUnicoAtt',fld:'vISUNICOATT'},{av:'AV172ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV213SnLoteMedicamen',fld:'vSNLOTEMEDICAMEN'},{av:'AV118SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV257Pgmname',fld:'vPGMNAME'},{av:'AV201SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV75ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV130EsquemaUnico',fld:'vESQUEMAUNICO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'AV108Edit1',fld:'vEDIT1'},{av:'AV209LoteCBarras',fld:'vLOTECBARRAS'},{av:'AV103SNErro',fld:'vSNERRO'},{av:'AV218isConsisteQuantidade',fld:'vISCONSISTEQUANTIDADE'},{av:'AV31TipoEmissao',fld:'vTIPOEMISSAO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV90FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV128LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV206Qtde',fld:'vQTDE'},{av:'A3645LoteProdutoQtdeAtual',fld:'LOTEPRODUTOQTDEATUAL'},{av:'A2960ProdutoDescricao',fld:'PRODUTODESCRICAO'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'AV207ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'A3840ProdutoFamiliaId',fld:'PRODUTOFAMILIAID'},{av:'A3838ProdutoCodificacaoPrincipal',fld:'PRODUTOCODIFICACAOPRINCIPAL'},{av:'A3400ProdutoClassificacaoPrincipal',fld:'PRODUTOCLASSIFICACAOPRINCIPAL'},{av:'A3398ProdutoFabricanteId',fld:'PRODUTOFABRICANTEID'},{av:'A3846ProdutoFabricanteFantasia',fld:'PRODUTOFABRICANTEFANTASIA'},{av:'AV214MesAnoVenc',fld:'vMESANOVENC',hsh:true},{av:'AV212isVencLote',fld:'vISVENCLOTE'},{av:'AV217TxtTela',fld:'vTXTTELA'},{av:'AV182SessaoAux',fld:'vSESSAOAUX'},{av:'AV165EsquemaCodigoProduto',fld:'vESQUEMACODIGOPRODUTO'},{av:'AV171AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2939ValorAtributoUsuarioAlt',fld:'VALORATRIBUTOUSUARIOALT'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV119Visible1',fld:'vVISIBLE1'},{av:'AV109Combo1',fld:'vCOMBO1'},{av:'AV120Visible2',fld:'vVISIBLE2'},{av:'AV110Edit2',fld:'vEDIT2'},{av:'AV111Combo2',fld:'vCOMBO2'},{av:'AV121Visible3',fld:'vVISIBLE3'},{av:'AV112Edit3',fld:'vEDIT3'},{av:'AV113Combo3',fld:'vCOMBO3'},{av:'AV122Visible4',fld:'vVISIBLE4'},{av:'AV114Edit4',fld:'vEDIT4'},{av:'AV115Combo4',fld:'vCOMBO4'},{av:'AV123Visible5',fld:'vVISIBLE5'},{av:'AV116Edit5',fld:'vEDIT5'},{av:'AV117Combo5',fld:'vCOMBO5'},{av:'AV124i',fld:'vI'},{av:'AV173ValorAtributoCodigoStr',fld:'vVALORATRIBUTOCODIGOSTR'},{av:'AV174ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'}],[{av:'AV59SdtGridFabricante',fld:'vSDTGRIDFABRICANTE',grid:300},{av:'AV101Indice',fld:'vINDICE'},{av:'AV289GXV10',fld:'vGXV10'},{av:'AV67SdtGridFabricanteItem',fld:'vSDTGRIDFABRICANTEITEM'}]];
   this.EvtParms["'ADICIONARCODIFICACAO'"] = [[{av:'AV45CodificacaoEstId',fld:'vCODIFICACAOESTID'},{av:'AV103SNErro',fld:'vSNERRO'},{av:'A2936CodificacaoEstEmpresaId',fld:'CODIFICACAOESTEMPRESAID'},{av:'AV82CodificacaoEstEmpresaId',fld:'vCODIFICACAOESTEMPRESAID'},{av:'A2937CodificacaoEstId',fld:'CODIFICACAOESTID'},{av:'AV77SdtGridCodificacaoEtiqueta',fld:'vSDTGRIDCODIFICACAOETIQUETA',grid:320},{av:'AV163CodificacaoEstDescricao',fld:'vCODIFICACAOESTDESCRICAO'},{av:'AV162CodificacaoEstIdAux',fld:'vCODIFICACAOESTIDAUX'},{av:'A2932CodificacaoEstDescricao',fld:'CODIFICACAOESTDESCRICAO'},{av:'GRID4_nFirstRecordOnPage'},{av:'GRID4_nEOF'},{av:'AV99bmpExcCodificacao',fld:'vBMPEXCCODIFICACAO'},{av:'AV208IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{av:'AV69SdtGridProdutoEtiqueta',fld:'vSDTGRIDPRODUTOETIQUETA',grid:245},{av:'AV28TpEtiqueta',fld:'vTPETIQUETA'},{av:'AV68ProdutoId',fld:'vPRODUTOID'},{av:'AV157SNAvancar',fld:'vSNAVANCAR'},{av:'AV216isUnicoAtt',fld:'vISUNICOATT'},{av:'AV172ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV213SnLoteMedicamen',fld:'vSNLOTEMEDICAMEN'},{av:'AV118SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV257Pgmname',fld:'vPGMNAME'},{av:'AV201SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV75ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV130EsquemaUnico',fld:'vESQUEMAUNICO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'AV108Edit1',fld:'vEDIT1'},{av:'AV209LoteCBarras',fld:'vLOTECBARRAS'},{av:'AV218isConsisteQuantidade',fld:'vISCONSISTEQUANTIDADE'},{av:'AV31TipoEmissao',fld:'vTIPOEMISSAO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV90FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV128LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV206Qtde',fld:'vQTDE'},{av:'A3645LoteProdutoQtdeAtual',fld:'LOTEPRODUTOQTDEATUAL'},{av:'A2960ProdutoDescricao',fld:'PRODUTODESCRICAO'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'AV207ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'A3840ProdutoFamiliaId',fld:'PRODUTOFAMILIAID'},{av:'A3838ProdutoCodificacaoPrincipal',fld:'PRODUTOCODIFICACAOPRINCIPAL'},{av:'A3400ProdutoClassificacaoPrincipal',fld:'PRODUTOCLASSIFICACAOPRINCIPAL'},{av:'A3398ProdutoFabricanteId',fld:'PRODUTOFABRICANTEID'},{av:'A3846ProdutoFabricanteFantasia',fld:'PRODUTOFABRICANTEFANTASIA'},{av:'AV214MesAnoVenc',fld:'vMESANOVENC',hsh:true},{av:'AV212isVencLote',fld:'vISVENCLOTE'},{av:'AV217TxtTela',fld:'vTXTTELA'},{av:'AV182SessaoAux',fld:'vSESSAOAUX'},{av:'AV165EsquemaCodigoProduto',fld:'vESQUEMACODIGOPRODUTO'},{av:'AV171AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2939ValorAtributoUsuarioAlt',fld:'VALORATRIBUTOUSUARIOALT'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV119Visible1',fld:'vVISIBLE1'},{av:'AV109Combo1',fld:'vCOMBO1'},{av:'AV120Visible2',fld:'vVISIBLE2'},{av:'AV110Edit2',fld:'vEDIT2'},{av:'AV111Combo2',fld:'vCOMBO2'},{av:'AV121Visible3',fld:'vVISIBLE3'},{av:'AV112Edit3',fld:'vEDIT3'},{av:'AV113Combo3',fld:'vCOMBO3'},{av:'AV122Visible4',fld:'vVISIBLE4'},{av:'AV114Edit4',fld:'vEDIT4'},{av:'AV115Combo4',fld:'vCOMBO4'},{av:'AV123Visible5',fld:'vVISIBLE5'},{av:'AV116Edit5',fld:'vEDIT5'},{av:'AV117Combo5',fld:'vCOMBO5'},{av:'AV124i',fld:'vI'},{av:'AV173ValorAtributoCodigoStr',fld:'vVALORATRIBUTOCODIGOSTR'},{av:'AV174ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'}],[{av:'AV83SdtGridCodificacaoEtiquetaItem',fld:'vSDTGRIDCODIFICACAOETIQUETAITEM'},{av:'AV77SdtGridCodificacaoEtiqueta',fld:'vSDTGRIDCODIFICACAOETIQUETA',grid:320},{av:'AV45CodificacaoEstId',fld:'vCODIFICACAOESTID'},{av:'AV307GXV15',fld:'vGXV15'},{av:'AV162CodificacaoEstIdAux',fld:'vCODIFICACAOESTIDAUX'},{av:'AV103SNErro',fld:'vSNERRO'},{av:'AV163CodificacaoEstDescricao',fld:'vCODIFICACAOESTDESCRICAO'}]];
   this.EvtParms["'DLTCODIFICACAO'"] = [[{av:'AV77SdtGridCodificacaoEtiqueta',fld:'vSDTGRIDCODIFICACAOETIQUETA',grid:320},{av:'GRID4_nFirstRecordOnPage'},{av:'GRID4_nEOF'},{av:'AV99bmpExcCodificacao',fld:'vBMPEXCCODIFICACAO'},{av:'AV208IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{av:'AV69SdtGridProdutoEtiqueta',fld:'vSDTGRIDPRODUTOETIQUETA',grid:245},{av:'AV28TpEtiqueta',fld:'vTPETIQUETA'},{av:'AV68ProdutoId',fld:'vPRODUTOID'},{av:'AV157SNAvancar',fld:'vSNAVANCAR'},{av:'AV216isUnicoAtt',fld:'vISUNICOATT'},{av:'AV172ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV213SnLoteMedicamen',fld:'vSNLOTEMEDICAMEN'},{av:'AV118SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV257Pgmname',fld:'vPGMNAME'},{av:'AV201SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV75ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV130EsquemaUnico',fld:'vESQUEMAUNICO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'AV108Edit1',fld:'vEDIT1'},{av:'AV209LoteCBarras',fld:'vLOTECBARRAS'},{av:'AV103SNErro',fld:'vSNERRO'},{av:'AV218isConsisteQuantidade',fld:'vISCONSISTEQUANTIDADE'},{av:'AV31TipoEmissao',fld:'vTIPOEMISSAO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV90FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV128LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV206Qtde',fld:'vQTDE'},{av:'A3645LoteProdutoQtdeAtual',fld:'LOTEPRODUTOQTDEATUAL'},{av:'A2960ProdutoDescricao',fld:'PRODUTODESCRICAO'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'AV207ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'A3840ProdutoFamiliaId',fld:'PRODUTOFAMILIAID'},{av:'A3838ProdutoCodificacaoPrincipal',fld:'PRODUTOCODIFICACAOPRINCIPAL'},{av:'A3400ProdutoClassificacaoPrincipal',fld:'PRODUTOCLASSIFICACAOPRINCIPAL'},{av:'A3398ProdutoFabricanteId',fld:'PRODUTOFABRICANTEID'},{av:'A3846ProdutoFabricanteFantasia',fld:'PRODUTOFABRICANTEFANTASIA'},{av:'AV214MesAnoVenc',fld:'vMESANOVENC',hsh:true},{av:'AV212isVencLote',fld:'vISVENCLOTE'},{av:'AV217TxtTela',fld:'vTXTTELA'},{av:'AV182SessaoAux',fld:'vSESSAOAUX'},{av:'AV165EsquemaCodigoProduto',fld:'vESQUEMACODIGOPRODUTO'},{av:'AV171AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2939ValorAtributoUsuarioAlt',fld:'VALORATRIBUTOUSUARIOALT'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV119Visible1',fld:'vVISIBLE1'},{av:'AV109Combo1',fld:'vCOMBO1'},{av:'AV120Visible2',fld:'vVISIBLE2'},{av:'AV110Edit2',fld:'vEDIT2'},{av:'AV111Combo2',fld:'vCOMBO2'},{av:'AV121Visible3',fld:'vVISIBLE3'},{av:'AV112Edit3',fld:'vEDIT3'},{av:'AV113Combo3',fld:'vCOMBO3'},{av:'AV122Visible4',fld:'vVISIBLE4'},{av:'AV114Edit4',fld:'vEDIT4'},{av:'AV115Combo4',fld:'vCOMBO4'},{av:'AV123Visible5',fld:'vVISIBLE5'},{av:'AV116Edit5',fld:'vEDIT5'},{av:'AV117Combo5',fld:'vCOMBO5'},{av:'AV124i',fld:'vI'},{av:'AV173ValorAtributoCodigoStr',fld:'vVALORATRIBUTOCODIGOSTR'},{av:'AV174ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'}],[{av:'AV77SdtGridCodificacaoEtiqueta',fld:'vSDTGRIDCODIFICACAOETIQUETA',grid:320},{av:'AV101Indice',fld:'vINDICE'},{av:'AV291GXV11',fld:'vGXV11'},{av:'AV83SdtGridCodificacaoEtiquetaItem',fld:'vSDTGRIDCODIFICACAOETIQUETAITEM'}]];
   this.EvtParms["'ADICIONARCLASSIFICACAO'"] = [[{av:'AV50ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV84ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'AV78SdtGridClassificacaoEtiqueta',fld:'vSDTGRIDCLASSIFICACAOETIQUETA',grid:339},{av:'GRID5_nFirstRecordOnPage'},{av:'GRID5_nEOF'},{av:'AV100bmpExcClassificacao',fld:'vBMPEXCCLASSIFICACAO'},{av:'AV208IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{av:'AV69SdtGridProdutoEtiqueta',fld:'vSDTGRIDPRODUTOETIQUETA',grid:245},{av:'AV28TpEtiqueta',fld:'vTPETIQUETA'},{av:'AV68ProdutoId',fld:'vPRODUTOID'},{av:'AV157SNAvancar',fld:'vSNAVANCAR'},{av:'AV216isUnicoAtt',fld:'vISUNICOATT'},{av:'AV172ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV213SnLoteMedicamen',fld:'vSNLOTEMEDICAMEN'},{av:'AV118SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV257Pgmname',fld:'vPGMNAME'},{av:'AV201SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV75ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV130EsquemaUnico',fld:'vESQUEMAUNICO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'AV108Edit1',fld:'vEDIT1'},{av:'AV209LoteCBarras',fld:'vLOTECBARRAS'},{av:'AV103SNErro',fld:'vSNERRO'},{av:'AV218isConsisteQuantidade',fld:'vISCONSISTEQUANTIDADE'},{av:'AV31TipoEmissao',fld:'vTIPOEMISSAO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV90FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV128LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV206Qtde',fld:'vQTDE'},{av:'A3645LoteProdutoQtdeAtual',fld:'LOTEPRODUTOQTDEATUAL'},{av:'A2960ProdutoDescricao',fld:'PRODUTODESCRICAO'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'AV207ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'A3840ProdutoFamiliaId',fld:'PRODUTOFAMILIAID'},{av:'A3838ProdutoCodificacaoPrincipal',fld:'PRODUTOCODIFICACAOPRINCIPAL'},{av:'A3400ProdutoClassificacaoPrincipal',fld:'PRODUTOCLASSIFICACAOPRINCIPAL'},{av:'A3398ProdutoFabricanteId',fld:'PRODUTOFABRICANTEID'},{av:'A3846ProdutoFabricanteFantasia',fld:'PRODUTOFABRICANTEFANTASIA'},{av:'AV214MesAnoVenc',fld:'vMESANOVENC',hsh:true},{av:'AV212isVencLote',fld:'vISVENCLOTE'},{av:'AV217TxtTela',fld:'vTXTTELA'},{av:'AV182SessaoAux',fld:'vSESSAOAUX'},{av:'AV165EsquemaCodigoProduto',fld:'vESQUEMACODIGOPRODUTO'},{av:'AV171AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2939ValorAtributoUsuarioAlt',fld:'VALORATRIBUTOUSUARIOALT'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV119Visible1',fld:'vVISIBLE1'},{av:'AV109Combo1',fld:'vCOMBO1'},{av:'AV120Visible2',fld:'vVISIBLE2'},{av:'AV110Edit2',fld:'vEDIT2'},{av:'AV111Combo2',fld:'vCOMBO2'},{av:'AV121Visible3',fld:'vVISIBLE3'},{av:'AV112Edit3',fld:'vEDIT3'},{av:'AV113Combo3',fld:'vCOMBO3'},{av:'AV122Visible4',fld:'vVISIBLE4'},{av:'AV114Edit4',fld:'vEDIT4'},{av:'AV115Combo4',fld:'vCOMBO4'},{av:'AV123Visible5',fld:'vVISIBLE5'},{av:'AV116Edit5',fld:'vEDIT5'},{av:'AV117Combo5',fld:'vCOMBO5'},{av:'AV124i',fld:'vI'},{av:'AV173ValorAtributoCodigoStr',fld:'vVALORATRIBUTOCODIGOSTR'},{av:'AV174ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'}],[{av:'AV81SdtGridClassificacaoEtiquetaItem',fld:'vSDTGRIDCLASSIFICACAOETIQUETAITEM'},{av:'AV78SdtGridClassificacaoEtiqueta',fld:'vSDTGRIDCLASSIFICACAOETIQUETA',grid:339},{av:'AV50ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'}]];
   this.EvtParms["'DLTCLASSIFICACAO'"] = [[{av:'AV78SdtGridClassificacaoEtiqueta',fld:'vSDTGRIDCLASSIFICACAOETIQUETA',grid:339},{av:'GRID5_nFirstRecordOnPage'},{av:'GRID5_nEOF'},{av:'AV100bmpExcClassificacao',fld:'vBMPEXCCLASSIFICACAO'},{av:'AV208IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{av:'AV69SdtGridProdutoEtiqueta',fld:'vSDTGRIDPRODUTOETIQUETA',grid:245},{av:'AV28TpEtiqueta',fld:'vTPETIQUETA'},{av:'AV68ProdutoId',fld:'vPRODUTOID'},{av:'AV157SNAvancar',fld:'vSNAVANCAR'},{av:'AV216isUnicoAtt',fld:'vISUNICOATT'},{av:'AV172ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV213SnLoteMedicamen',fld:'vSNLOTEMEDICAMEN'},{av:'AV118SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV257Pgmname',fld:'vPGMNAME'},{av:'AV201SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV75ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV130EsquemaUnico',fld:'vESQUEMAUNICO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'AV108Edit1',fld:'vEDIT1'},{av:'AV209LoteCBarras',fld:'vLOTECBARRAS'},{av:'AV103SNErro',fld:'vSNERRO'},{av:'AV218isConsisteQuantidade',fld:'vISCONSISTEQUANTIDADE'},{av:'AV31TipoEmissao',fld:'vTIPOEMISSAO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV90FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV128LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV206Qtde',fld:'vQTDE'},{av:'A3645LoteProdutoQtdeAtual',fld:'LOTEPRODUTOQTDEATUAL'},{av:'A2960ProdutoDescricao',fld:'PRODUTODESCRICAO'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'AV207ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'A3840ProdutoFamiliaId',fld:'PRODUTOFAMILIAID'},{av:'A3838ProdutoCodificacaoPrincipal',fld:'PRODUTOCODIFICACAOPRINCIPAL'},{av:'A3400ProdutoClassificacaoPrincipal',fld:'PRODUTOCLASSIFICACAOPRINCIPAL'},{av:'A3398ProdutoFabricanteId',fld:'PRODUTOFABRICANTEID'},{av:'A3846ProdutoFabricanteFantasia',fld:'PRODUTOFABRICANTEFANTASIA'},{av:'AV214MesAnoVenc',fld:'vMESANOVENC',hsh:true},{av:'AV212isVencLote',fld:'vISVENCLOTE'},{av:'AV217TxtTela',fld:'vTXTTELA'},{av:'AV182SessaoAux',fld:'vSESSAOAUX'},{av:'AV165EsquemaCodigoProduto',fld:'vESQUEMACODIGOPRODUTO'},{av:'AV171AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2939ValorAtributoUsuarioAlt',fld:'VALORATRIBUTOUSUARIOALT'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV119Visible1',fld:'vVISIBLE1'},{av:'AV109Combo1',fld:'vCOMBO1'},{av:'AV120Visible2',fld:'vVISIBLE2'},{av:'AV110Edit2',fld:'vEDIT2'},{av:'AV111Combo2',fld:'vCOMBO2'},{av:'AV121Visible3',fld:'vVISIBLE3'},{av:'AV112Edit3',fld:'vEDIT3'},{av:'AV113Combo3',fld:'vCOMBO3'},{av:'AV122Visible4',fld:'vVISIBLE4'},{av:'AV114Edit4',fld:'vEDIT4'},{av:'AV115Combo4',fld:'vCOMBO4'},{av:'AV123Visible5',fld:'vVISIBLE5'},{av:'AV116Edit5',fld:'vEDIT5'},{av:'AV117Combo5',fld:'vCOMBO5'},{av:'AV124i',fld:'vI'},{av:'AV173ValorAtributoCodigoStr',fld:'vVALORATRIBUTOCODIGOSTR'},{av:'AV174ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'}],[{av:'AV78SdtGridClassificacaoEtiqueta',fld:'vSDTGRIDCLASSIFICACAOETIQUETA',grid:339},{av:'AV101Indice',fld:'vINDICE'},{av:'AV293GXV12',fld:'vGXV12'},{av:'AV81SdtGridClassificacaoEtiquetaItem',fld:'vSDTGRIDCLASSIFICACAOETIQUETAITEM'}]];
   this.EvtParms["ENTER"] = [[{av:'GRID3_nFirstRecordOnPage'},{av:'GRID3_nEOF'},{av:'AV98bmpExcProduto',fld:'vBMPEXCPRODUTO'},{av:'AV129bmpLote',fld:'vBMPLOTE'},{av:'gx.fn.getCtrlProperty("vBMPLOTE","Tooltiptext")',ctrl:'vBMPLOTE',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPLOTE","Visible")',ctrl:'vBMPLOTE',prop:'Visible'},{av:'AV208IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{av:'AV69SdtGridProdutoEtiqueta',fld:'vSDTGRIDPRODUTOETIQUETA',grid:245},{av:'AV28TpEtiqueta',fld:'vTPETIQUETA'},{av:'AV68ProdutoId',fld:'vPRODUTOID'},{av:'AV157SNAvancar',fld:'vSNAVANCAR'},{av:'AV216isUnicoAtt',fld:'vISUNICOATT'},{av:'AV172ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV213SnLoteMedicamen',fld:'vSNLOTEMEDICAMEN'},{av:'AV118SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV257Pgmname',fld:'vPGMNAME'},{av:'AV201SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV75ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV130EsquemaUnico',fld:'vESQUEMAUNICO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'AV108Edit1',fld:'vEDIT1'},{av:'AV209LoteCBarras',fld:'vLOTECBARRAS'},{av:'AV103SNErro',fld:'vSNERRO'},{av:'AV218isConsisteQuantidade',fld:'vISCONSISTEQUANTIDADE'},{av:'AV31TipoEmissao',fld:'vTIPOEMISSAO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV90FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV128LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV206Qtde',fld:'vQTDE'},{av:'A3645LoteProdutoQtdeAtual',fld:'LOTEPRODUTOQTDEATUAL'},{av:'A2960ProdutoDescricao',fld:'PRODUTODESCRICAO'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'AV207ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'A3840ProdutoFamiliaId',fld:'PRODUTOFAMILIAID'},{av:'A3838ProdutoCodificacaoPrincipal',fld:'PRODUTOCODIFICACAOPRINCIPAL'},{av:'A3400ProdutoClassificacaoPrincipal',fld:'PRODUTOCLASSIFICACAOPRINCIPAL'},{av:'A3398ProdutoFabricanteId',fld:'PRODUTOFABRICANTEID'},{av:'A3846ProdutoFabricanteFantasia',fld:'PRODUTOFABRICANTEFANTASIA'},{av:'AV214MesAnoVenc',fld:'vMESANOVENC',hsh:true},{av:'AV212isVencLote',fld:'vISVENCLOTE'},{av:'AV217TxtTela',fld:'vTXTTELA'},{av:'AV182SessaoAux',fld:'vSESSAOAUX'},{av:'AV165EsquemaCodigoProduto',fld:'vESQUEMACODIGOPRODUTO'},{av:'AV171AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2939ValorAtributoUsuarioAlt',fld:'VALORATRIBUTOUSUARIOALT'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV119Visible1',fld:'vVISIBLE1'},{av:'AV109Combo1',fld:'vCOMBO1'},{av:'AV120Visible2',fld:'vVISIBLE2'},{av:'AV110Edit2',fld:'vEDIT2'},{av:'AV111Combo2',fld:'vCOMBO2'},{av:'AV121Visible3',fld:'vVISIBLE3'},{av:'AV112Edit3',fld:'vEDIT3'},{av:'AV113Combo3',fld:'vCOMBO3'},{av:'AV122Visible4',fld:'vVISIBLE4'},{av:'AV114Edit4',fld:'vEDIT4'},{av:'AV115Combo4',fld:'vCOMBO4'},{av:'AV123Visible5',fld:'vVISIBLE5'},{av:'AV116Edit5',fld:'vEDIT5'},{av:'AV117Combo5',fld:'vCOMBO5'},{av:'AV124i',fld:'vI'},{av:'AV173ValorAtributoCodigoStr',fld:'vVALORATRIBUTOCODIGOSTR'},{av:'AV174ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'},{av:'AV175Desc1',fld:'vDESC1'},{av:'AV176Desc2',fld:'vDESC2'},{av:'AV177Desc3',fld:'vDESC3'},{av:'AV178Desc4',fld:'vDESC4'},{av:'AV179Desc5',fld:'vDESC5'},{av:'AV210PRodutoSnControlaVenc',fld:'vPRODUTOSNCONTROLAVENC'},{av:'AV104SNExiste',fld:'vSNEXISTE'},{av:'A2968CodigoBarrasProdutoBarra',fld:'CODIGOBARRASPRODUTOBARRA'},{av:'A3644LoteProdutoCodigoBarras',fld:'LOTEPRODUTOCODIGOBARRAS'},{av:'A10788ProdutoSnControlaVenc',fld:'PRODUTOSNCONTROLAVENC'}],[{av:'AV103SNErro',fld:'vSNERRO'},{av:'AV157SNAvancar',fld:'vSNAVANCAR'},{av:'AV109Combo1',fld:'vCOMBO1'},{av:'AV210PRodutoSnControlaVenc',fld:'vPRODUTOSNCONTROLAVENC'},{av:'AV280GXLvl379',fld:'vGXLVL379'},{av:'AV281GXLvl391',fld:'vGXLVL391'},{av:'AV209LoteCBarras',fld:'vLOTECBARRAS'},{av:'AV68ProdutoId',fld:'vPRODUTOID'},{av:'AV283GXLvl419',fld:'vGXLVL419'},{av:'gx.fn.getCtrlProperty("TABLELOTE","Visible")',ctrl:'TABLELOTE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESC1","Visible")',ctrl:'vDESC1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESC2","Visible")',ctrl:'vDESC2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESC3","Visible")',ctrl:'vDESC3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESC4","Visible")',ctrl:'vDESC4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESC5","Visible")',ctrl:'vDESC5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT1","Visible")',ctrl:'vEDIT1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT2","Visible")',ctrl:'vEDIT2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT3","Visible")',ctrl:'vEDIT3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT4","Visible")',ctrl:'vEDIT4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT5","Visible")',ctrl:'vEDIT5',prop:'Visible'},{ctrl:'vCOMBO1'},{ctrl:'vCOMBO2'},{ctrl:'vCOMBO3'},{ctrl:'vCOMBO4'},{ctrl:'vCOMBO5'},{av:'AV119Visible1',fld:'vVISIBLE1'},{av:'AV120Visible2',fld:'vVISIBLE2'},{av:'AV121Visible3',fld:'vVISIBLE3'},{av:'AV122Visible4',fld:'vVISIBLE4'},{av:'AV123Visible5',fld:'vVISIBLE5'},{av:'AV165EsquemaCodigoProduto',fld:'vESQUEMACODIGOPRODUTO'},{av:'AV124i',fld:'vI'},{av:'AV216isUnicoAtt',fld:'vISUNICOATT'},{av:'AV171AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV175Desc1',fld:'vDESC1'},{av:'AV176Desc2',fld:'vDESC2'},{av:'AV111Combo2',fld:'vCOMBO2'},{av:'AV177Desc3',fld:'vDESC3'},{av:'AV113Combo3',fld:'vCOMBO3'},{av:'AV178Desc4',fld:'vDESC4'},{av:'AV115Combo4',fld:'vCOMBO4'},{av:'AV179Desc5',fld:'vDESC5'},{av:'AV117Combo5',fld:'vCOMBO5'},{av:'AV108Edit1',fld:'vEDIT1'},{av:'AV110Edit2',fld:'vEDIT2'},{av:'AV112Edit3',fld:'vEDIT3'},{av:'AV114Edit4',fld:'vEDIT4'},{av:'AV116Edit5',fld:'vEDIT5'},{av:'AV104SNExiste',fld:'vSNEXISTE'},{av:'AV128LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV212isVencLote',fld:'vISVENCLOTE'},{av:'AV207ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'AV206Qtde',fld:'vQTDE'},{av:'AV172ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV173ValorAtributoCodigoStr',fld:'vVALORATRIBUTOCODIGOSTR'},{av:'AV174ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'},{av:'AV305GXV13',fld:'vGXV13'},{av:'AV306GXV14',fld:'vGXV14'},{av:'AV76SdtGridProdutoEtiquetaItem',fld:'vSDTGRIDPRODUTOETIQUETAITEM'},{av:'AV310GXLvl1843',fld:'vGXLVL1843'},{av:'AV69SdtGridProdutoEtiqueta',fld:'vSDTGRIDPRODUTOETIQUETA',grid:245}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV182SessaoAux',fld:'vSESSAOAUX'}],[]];
   this.EvtParms["'LIMPARGRIDPRODUTO'"] = [[{av:'AV69SdtGridProdutoEtiqueta',fld:'vSDTGRIDPRODUTOETIQUETA',grid:245},{av:'GRID3_nFirstRecordOnPage'},{av:'GRID3_nEOF'},{av:'AV98bmpExcProduto',fld:'vBMPEXCPRODUTO'},{av:'AV129bmpLote',fld:'vBMPLOTE'},{av:'gx.fn.getCtrlProperty("vBMPLOTE","Tooltiptext")',ctrl:'vBMPLOTE',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPLOTE","Visible")',ctrl:'vBMPLOTE',prop:'Visible'},{av:'AV208IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{av:'AV28TpEtiqueta',fld:'vTPETIQUETA'},{av:'AV68ProdutoId',fld:'vPRODUTOID'},{av:'AV157SNAvancar',fld:'vSNAVANCAR'},{av:'AV216isUnicoAtt',fld:'vISUNICOATT'},{av:'AV172ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV213SnLoteMedicamen',fld:'vSNLOTEMEDICAMEN'},{av:'AV118SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV257Pgmname',fld:'vPGMNAME'},{av:'AV201SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV75ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV130EsquemaUnico',fld:'vESQUEMAUNICO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'AV108Edit1',fld:'vEDIT1'},{av:'AV209LoteCBarras',fld:'vLOTECBARRAS'},{av:'AV103SNErro',fld:'vSNERRO'},{av:'AV218isConsisteQuantidade',fld:'vISCONSISTEQUANTIDADE'},{av:'AV31TipoEmissao',fld:'vTIPOEMISSAO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV90FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV128LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV206Qtde',fld:'vQTDE'},{av:'A3645LoteProdutoQtdeAtual',fld:'LOTEPRODUTOQTDEATUAL'},{av:'A2960ProdutoDescricao',fld:'PRODUTODESCRICAO'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'AV207ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'A3840ProdutoFamiliaId',fld:'PRODUTOFAMILIAID'},{av:'A3838ProdutoCodificacaoPrincipal',fld:'PRODUTOCODIFICACAOPRINCIPAL'},{av:'A3400ProdutoClassificacaoPrincipal',fld:'PRODUTOCLASSIFICACAOPRINCIPAL'},{av:'A3398ProdutoFabricanteId',fld:'PRODUTOFABRICANTEID'},{av:'A3846ProdutoFabricanteFantasia',fld:'PRODUTOFABRICANTEFANTASIA'},{av:'AV214MesAnoVenc',fld:'vMESANOVENC',hsh:true},{av:'AV212isVencLote',fld:'vISVENCLOTE'},{av:'AV217TxtTela',fld:'vTXTTELA'},{av:'AV182SessaoAux',fld:'vSESSAOAUX'},{av:'AV165EsquemaCodigoProduto',fld:'vESQUEMACODIGOPRODUTO'},{av:'AV171AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2939ValorAtributoUsuarioAlt',fld:'VALORATRIBUTOUSUARIOALT'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV119Visible1',fld:'vVISIBLE1'},{av:'AV109Combo1',fld:'vCOMBO1'},{av:'AV120Visible2',fld:'vVISIBLE2'},{av:'AV110Edit2',fld:'vEDIT2'},{av:'AV111Combo2',fld:'vCOMBO2'},{av:'AV121Visible3',fld:'vVISIBLE3'},{av:'AV112Edit3',fld:'vEDIT3'},{av:'AV113Combo3',fld:'vCOMBO3'},{av:'AV122Visible4',fld:'vVISIBLE4'},{av:'AV114Edit4',fld:'vEDIT4'},{av:'AV115Combo4',fld:'vCOMBO4'},{av:'AV123Visible5',fld:'vVISIBLE5'},{av:'AV116Edit5',fld:'vEDIT5'},{av:'AV117Combo5',fld:'vCOMBO5'},{av:'AV124i',fld:'vI'},{av:'AV173ValorAtributoCodigoStr',fld:'vVALORATRIBUTOCODIGOSTR'},{av:'AV174ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'}],[{av:'AV69SdtGridProdutoEtiqueta',fld:'vSDTGRIDPRODUTOETIQUETA',grid:245}]];
   this.EvtParms["'LIMPARGRIDFAMILIA'"] = [[{av:'AV58SdtGridFamilia',fld:'vSDTGRIDFAMILIA',grid:281},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV96bmpExcFamilia',fld:'vBMPEXCFAMILIA'},{av:'AV208IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{av:'AV69SdtGridProdutoEtiqueta',fld:'vSDTGRIDPRODUTOETIQUETA',grid:245},{av:'AV28TpEtiqueta',fld:'vTPETIQUETA'},{av:'AV68ProdutoId',fld:'vPRODUTOID'},{av:'AV157SNAvancar',fld:'vSNAVANCAR'},{av:'AV216isUnicoAtt',fld:'vISUNICOATT'},{av:'AV172ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV213SnLoteMedicamen',fld:'vSNLOTEMEDICAMEN'},{av:'AV118SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV257Pgmname',fld:'vPGMNAME'},{av:'AV201SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV75ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV130EsquemaUnico',fld:'vESQUEMAUNICO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'AV108Edit1',fld:'vEDIT1'},{av:'AV209LoteCBarras',fld:'vLOTECBARRAS'},{av:'AV103SNErro',fld:'vSNERRO'},{av:'AV218isConsisteQuantidade',fld:'vISCONSISTEQUANTIDADE'},{av:'AV31TipoEmissao',fld:'vTIPOEMISSAO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV90FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV128LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV206Qtde',fld:'vQTDE'},{av:'A3645LoteProdutoQtdeAtual',fld:'LOTEPRODUTOQTDEATUAL'},{av:'A2960ProdutoDescricao',fld:'PRODUTODESCRICAO'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'AV207ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'A3840ProdutoFamiliaId',fld:'PRODUTOFAMILIAID'},{av:'A3838ProdutoCodificacaoPrincipal',fld:'PRODUTOCODIFICACAOPRINCIPAL'},{av:'A3400ProdutoClassificacaoPrincipal',fld:'PRODUTOCLASSIFICACAOPRINCIPAL'},{av:'A3398ProdutoFabricanteId',fld:'PRODUTOFABRICANTEID'},{av:'A3846ProdutoFabricanteFantasia',fld:'PRODUTOFABRICANTEFANTASIA'},{av:'AV214MesAnoVenc',fld:'vMESANOVENC',hsh:true},{av:'AV212isVencLote',fld:'vISVENCLOTE'},{av:'AV217TxtTela',fld:'vTXTTELA'},{av:'AV182SessaoAux',fld:'vSESSAOAUX'},{av:'AV165EsquemaCodigoProduto',fld:'vESQUEMACODIGOPRODUTO'},{av:'AV171AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2939ValorAtributoUsuarioAlt',fld:'VALORATRIBUTOUSUARIOALT'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV119Visible1',fld:'vVISIBLE1'},{av:'AV109Combo1',fld:'vCOMBO1'},{av:'AV120Visible2',fld:'vVISIBLE2'},{av:'AV110Edit2',fld:'vEDIT2'},{av:'AV111Combo2',fld:'vCOMBO2'},{av:'AV121Visible3',fld:'vVISIBLE3'},{av:'AV112Edit3',fld:'vEDIT3'},{av:'AV113Combo3',fld:'vCOMBO3'},{av:'AV122Visible4',fld:'vVISIBLE4'},{av:'AV114Edit4',fld:'vEDIT4'},{av:'AV115Combo4',fld:'vCOMBO4'},{av:'AV123Visible5',fld:'vVISIBLE5'},{av:'AV116Edit5',fld:'vEDIT5'},{av:'AV117Combo5',fld:'vCOMBO5'},{av:'AV124i',fld:'vI'},{av:'AV173ValorAtributoCodigoStr',fld:'vVALORATRIBUTOCODIGOSTR'},{av:'AV174ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'}],[{av:'AV58SdtGridFamilia',fld:'vSDTGRIDFAMILIA',grid:281}]];
   this.EvtParms["'LIMPARGRIDFABRICANTE'"] = [[{av:'AV59SdtGridFabricante',fld:'vSDTGRIDFABRICANTE',grid:300},{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'AV97bmpExcFabricante',fld:'vBMPEXCFABRICANTE'},{av:'AV208IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{av:'AV69SdtGridProdutoEtiqueta',fld:'vSDTGRIDPRODUTOETIQUETA',grid:245},{av:'AV28TpEtiqueta',fld:'vTPETIQUETA'},{av:'AV68ProdutoId',fld:'vPRODUTOID'},{av:'AV157SNAvancar',fld:'vSNAVANCAR'},{av:'AV216isUnicoAtt',fld:'vISUNICOATT'},{av:'AV172ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV213SnLoteMedicamen',fld:'vSNLOTEMEDICAMEN'},{av:'AV118SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV257Pgmname',fld:'vPGMNAME'},{av:'AV201SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV75ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV130EsquemaUnico',fld:'vESQUEMAUNICO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'AV108Edit1',fld:'vEDIT1'},{av:'AV209LoteCBarras',fld:'vLOTECBARRAS'},{av:'AV103SNErro',fld:'vSNERRO'},{av:'AV218isConsisteQuantidade',fld:'vISCONSISTEQUANTIDADE'},{av:'AV31TipoEmissao',fld:'vTIPOEMISSAO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV90FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV128LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV206Qtde',fld:'vQTDE'},{av:'A3645LoteProdutoQtdeAtual',fld:'LOTEPRODUTOQTDEATUAL'},{av:'A2960ProdutoDescricao',fld:'PRODUTODESCRICAO'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'AV207ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'A3840ProdutoFamiliaId',fld:'PRODUTOFAMILIAID'},{av:'A3838ProdutoCodificacaoPrincipal',fld:'PRODUTOCODIFICACAOPRINCIPAL'},{av:'A3400ProdutoClassificacaoPrincipal',fld:'PRODUTOCLASSIFICACAOPRINCIPAL'},{av:'A3398ProdutoFabricanteId',fld:'PRODUTOFABRICANTEID'},{av:'A3846ProdutoFabricanteFantasia',fld:'PRODUTOFABRICANTEFANTASIA'},{av:'AV214MesAnoVenc',fld:'vMESANOVENC',hsh:true},{av:'AV212isVencLote',fld:'vISVENCLOTE'},{av:'AV217TxtTela',fld:'vTXTTELA'},{av:'AV182SessaoAux',fld:'vSESSAOAUX'},{av:'AV165EsquemaCodigoProduto',fld:'vESQUEMACODIGOPRODUTO'},{av:'AV171AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2939ValorAtributoUsuarioAlt',fld:'VALORATRIBUTOUSUARIOALT'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV119Visible1',fld:'vVISIBLE1'},{av:'AV109Combo1',fld:'vCOMBO1'},{av:'AV120Visible2',fld:'vVISIBLE2'},{av:'AV110Edit2',fld:'vEDIT2'},{av:'AV111Combo2',fld:'vCOMBO2'},{av:'AV121Visible3',fld:'vVISIBLE3'},{av:'AV112Edit3',fld:'vEDIT3'},{av:'AV113Combo3',fld:'vCOMBO3'},{av:'AV122Visible4',fld:'vVISIBLE4'},{av:'AV114Edit4',fld:'vEDIT4'},{av:'AV115Combo4',fld:'vCOMBO4'},{av:'AV123Visible5',fld:'vVISIBLE5'},{av:'AV116Edit5',fld:'vEDIT5'},{av:'AV117Combo5',fld:'vCOMBO5'},{av:'AV124i',fld:'vI'},{av:'AV173ValorAtributoCodigoStr',fld:'vVALORATRIBUTOCODIGOSTR'},{av:'AV174ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'}],[{av:'AV59SdtGridFabricante',fld:'vSDTGRIDFABRICANTE',grid:300}]];
   this.EvtParms["'LIMPARGRIDCODIF'"] = [[{av:'AV77SdtGridCodificacaoEtiqueta',fld:'vSDTGRIDCODIFICACAOETIQUETA',grid:320},{av:'GRID4_nFirstRecordOnPage'},{av:'GRID4_nEOF'},{av:'AV99bmpExcCodificacao',fld:'vBMPEXCCODIFICACAO'},{av:'AV208IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{av:'AV69SdtGridProdutoEtiqueta',fld:'vSDTGRIDPRODUTOETIQUETA',grid:245},{av:'AV28TpEtiqueta',fld:'vTPETIQUETA'},{av:'AV68ProdutoId',fld:'vPRODUTOID'},{av:'AV157SNAvancar',fld:'vSNAVANCAR'},{av:'AV216isUnicoAtt',fld:'vISUNICOATT'},{av:'AV172ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV213SnLoteMedicamen',fld:'vSNLOTEMEDICAMEN'},{av:'AV118SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV257Pgmname',fld:'vPGMNAME'},{av:'AV201SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV75ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV130EsquemaUnico',fld:'vESQUEMAUNICO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'AV108Edit1',fld:'vEDIT1'},{av:'AV209LoteCBarras',fld:'vLOTECBARRAS'},{av:'AV103SNErro',fld:'vSNERRO'},{av:'AV218isConsisteQuantidade',fld:'vISCONSISTEQUANTIDADE'},{av:'AV31TipoEmissao',fld:'vTIPOEMISSAO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV90FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV128LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV206Qtde',fld:'vQTDE'},{av:'A3645LoteProdutoQtdeAtual',fld:'LOTEPRODUTOQTDEATUAL'},{av:'A2960ProdutoDescricao',fld:'PRODUTODESCRICAO'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'AV207ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'A3840ProdutoFamiliaId',fld:'PRODUTOFAMILIAID'},{av:'A3838ProdutoCodificacaoPrincipal',fld:'PRODUTOCODIFICACAOPRINCIPAL'},{av:'A3400ProdutoClassificacaoPrincipal',fld:'PRODUTOCLASSIFICACAOPRINCIPAL'},{av:'A3398ProdutoFabricanteId',fld:'PRODUTOFABRICANTEID'},{av:'A3846ProdutoFabricanteFantasia',fld:'PRODUTOFABRICANTEFANTASIA'},{av:'AV214MesAnoVenc',fld:'vMESANOVENC',hsh:true},{av:'AV212isVencLote',fld:'vISVENCLOTE'},{av:'AV217TxtTela',fld:'vTXTTELA'},{av:'AV182SessaoAux',fld:'vSESSAOAUX'},{av:'AV165EsquemaCodigoProduto',fld:'vESQUEMACODIGOPRODUTO'},{av:'AV171AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2939ValorAtributoUsuarioAlt',fld:'VALORATRIBUTOUSUARIOALT'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV119Visible1',fld:'vVISIBLE1'},{av:'AV109Combo1',fld:'vCOMBO1'},{av:'AV120Visible2',fld:'vVISIBLE2'},{av:'AV110Edit2',fld:'vEDIT2'},{av:'AV111Combo2',fld:'vCOMBO2'},{av:'AV121Visible3',fld:'vVISIBLE3'},{av:'AV112Edit3',fld:'vEDIT3'},{av:'AV113Combo3',fld:'vCOMBO3'},{av:'AV122Visible4',fld:'vVISIBLE4'},{av:'AV114Edit4',fld:'vEDIT4'},{av:'AV115Combo4',fld:'vCOMBO4'},{av:'AV123Visible5',fld:'vVISIBLE5'},{av:'AV116Edit5',fld:'vEDIT5'},{av:'AV117Combo5',fld:'vCOMBO5'},{av:'AV124i',fld:'vI'},{av:'AV173ValorAtributoCodigoStr',fld:'vVALORATRIBUTOCODIGOSTR'},{av:'AV174ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'}],[{av:'AV77SdtGridCodificacaoEtiqueta',fld:'vSDTGRIDCODIFICACAOETIQUETA',grid:320}]];
   this.EvtParms["'LIMPARGRIDCLASSIF'"] = [[{av:'AV78SdtGridClassificacaoEtiqueta',fld:'vSDTGRIDCLASSIFICACAOETIQUETA',grid:339},{av:'GRID5_nFirstRecordOnPage'},{av:'GRID5_nEOF'},{av:'AV100bmpExcClassificacao',fld:'vBMPEXCCLASSIFICACAO'},{av:'AV208IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{av:'AV69SdtGridProdutoEtiqueta',fld:'vSDTGRIDPRODUTOETIQUETA',grid:245},{av:'AV28TpEtiqueta',fld:'vTPETIQUETA'},{av:'AV68ProdutoId',fld:'vPRODUTOID'},{av:'AV157SNAvancar',fld:'vSNAVANCAR'},{av:'AV216isUnicoAtt',fld:'vISUNICOATT'},{av:'AV172ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV213SnLoteMedicamen',fld:'vSNLOTEMEDICAMEN'},{av:'AV118SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV257Pgmname',fld:'vPGMNAME'},{av:'AV201SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV75ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV130EsquemaUnico',fld:'vESQUEMAUNICO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'AV108Edit1',fld:'vEDIT1'},{av:'AV209LoteCBarras',fld:'vLOTECBARRAS'},{av:'AV103SNErro',fld:'vSNERRO'},{av:'AV218isConsisteQuantidade',fld:'vISCONSISTEQUANTIDADE'},{av:'AV31TipoEmissao',fld:'vTIPOEMISSAO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV90FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV128LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV206Qtde',fld:'vQTDE'},{av:'A3645LoteProdutoQtdeAtual',fld:'LOTEPRODUTOQTDEATUAL'},{av:'A2960ProdutoDescricao',fld:'PRODUTODESCRICAO'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'AV207ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'A3840ProdutoFamiliaId',fld:'PRODUTOFAMILIAID'},{av:'A3838ProdutoCodificacaoPrincipal',fld:'PRODUTOCODIFICACAOPRINCIPAL'},{av:'A3400ProdutoClassificacaoPrincipal',fld:'PRODUTOCLASSIFICACAOPRINCIPAL'},{av:'A3398ProdutoFabricanteId',fld:'PRODUTOFABRICANTEID'},{av:'A3846ProdutoFabricanteFantasia',fld:'PRODUTOFABRICANTEFANTASIA'},{av:'AV214MesAnoVenc',fld:'vMESANOVENC',hsh:true},{av:'AV212isVencLote',fld:'vISVENCLOTE'},{av:'AV217TxtTela',fld:'vTXTTELA'},{av:'AV182SessaoAux',fld:'vSESSAOAUX'},{av:'AV165EsquemaCodigoProduto',fld:'vESQUEMACODIGOPRODUTO'},{av:'AV171AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2939ValorAtributoUsuarioAlt',fld:'VALORATRIBUTOUSUARIOALT'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV119Visible1',fld:'vVISIBLE1'},{av:'AV109Combo1',fld:'vCOMBO1'},{av:'AV120Visible2',fld:'vVISIBLE2'},{av:'AV110Edit2',fld:'vEDIT2'},{av:'AV111Combo2',fld:'vCOMBO2'},{av:'AV121Visible3',fld:'vVISIBLE3'},{av:'AV112Edit3',fld:'vEDIT3'},{av:'AV113Combo3',fld:'vCOMBO3'},{av:'AV122Visible4',fld:'vVISIBLE4'},{av:'AV114Edit4',fld:'vEDIT4'},{av:'AV115Combo4',fld:'vCOMBO4'},{av:'AV123Visible5',fld:'vVISIBLE5'},{av:'AV116Edit5',fld:'vEDIT5'},{av:'AV117Combo5',fld:'vCOMBO5'},{av:'AV124i',fld:'vI'},{av:'AV173ValorAtributoCodigoStr',fld:'vVALORATRIBUTOCODIGOSTR'},{av:'AV174ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'}],[{av:'AV78SdtGridClassificacaoEtiqueta',fld:'vSDTGRIDCLASSIFICACAOETIQUETA',grid:339}]];
   this.EvtParms["'CONFIRMAR'"] = [[{av:'AV103SNErro',fld:'vSNERRO'},{av:'AV217TxtTela',fld:'vTXTTELA'},{av:'AV28TpEtiqueta',fld:'vTPETIQUETA'},{av:'AV182SessaoAux',fld:'vSESSAOAUX'},{av:'AV29EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO'},{av:'AV94EmpresaEtiquetaEmpresaId',fld:'vEMPRESAETIQUETAEMPRESAID'},{av:'AV69SdtGridProdutoEtiqueta',fld:'vSDTGRIDPRODUTOETIQUETA',grid:245},{av:'AV58SdtGridFamilia',fld:'vSDTGRIDFAMILIA',grid:281},{av:'AV59SdtGridFabricante',fld:'vSDTGRIDFABRICANTE',grid:300},{av:'AV78SdtGridClassificacaoEtiqueta',fld:'vSDTGRIDCLASSIFICACAOETIQUETA',grid:339},{av:'AV77SdtGridCodificacaoEtiqueta',fld:'vSDTGRIDCODIFICACAOETIQUETA',grid:320},{av:'AV27FilialId',fld:'vFILIALID'},{av:'AV30Ordenacao',fld:'vORDENACAO'},{av:'AV31TipoEmissao',fld:'vTIPOEMISSAO'},{av:'AV32DataReferenciaIni',fld:'vDATAREFERENCIAINI'},{av:'AV34DataReferenciaFim',fld:'vDATAREFERENCIAFIM'},{av:'AV105PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV33PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV35LocalIni',fld:'vLOCALINI'},{av:'AV36LocalFim',fld:'vLOCALFIM'},{av:'AV161EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV74LoteCombinacao',fld:'vLOTECOMBINACAO'},{av:'AV37ProdutoReferenciaIni',fld:'vPRODUTOREFERENCIAINI'},{av:'AV38ProdutoReferenciaFim',fld:'vPRODUTOREFERENCIAFIM'},{av:'AV39ProdutoTipo',fld:'vPRODUTOTIPO'},{av:'AV170ProdutoCategoria',fld:'vPRODUTOCATEGORIA'},{av:'AV40Documento',fld:'vDOCUMENTO'},{av:'AV41PessoaId',fld:'vPESSOAID'},{av:'AV42DataUltEnvio',fld:'vDATAULTENVIO'},{av:'AV156SNImpMoeda',fld:'vSNIMPMOEDA'},{av:'AV180SNPrecoPromocao',fld:'vSNPRECOPROMOCAO'},{av:'AV181QtdeParcelas',fld:'vQTDEPARCELAS'},{av:'AV185ProdutoIdIni',fld:'vPRODUTOIDINI'},{av:'AV186ProdutoIdFin',fld:'vPRODUTOIDFIN'},{av:'AV75ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV92EtiquetaCodigo',fld:'vETIQUETACODIGO'},{av:'AV139LinhaInicial',fld:'vLINHAINICIAL'},{av:'AV138ColunaInicial',fld:'vCOLUNAINICIAL'},{av:'AV133Sdt',fld:'vSDT'},{av:'AV134SdtCpf',fld:'vSDTCPF'},{av:'AV135SdtPessoa',fld:'vSDTPESSOA'},{av:'AV153Usuarios',fld:'vUSUARIOS'},{av:'AV136SdtEtiqueta',fld:'vSDTETIQUETA'},{av:'AV141EtiquetaTipoImpressao',fld:'vETIQUETATIPOIMPRESSAO'},{av:'AV142EtiquetaQtdLinhasEtq',fld:'vETIQUETAQTDLINHASETQ'},{av:'AV145EtiquetaTamEntreLinha',fld:'vETIQUETATAMENTRELINHA'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV258Pgmdesc',fld:'vPGMDESC'},{av:'AV104SNExiste',fld:'vSNEXISTE'},{av:'AV168OrdenacaoDesc',fld:'vORDENACAODESC'},{av:'AV166TipoEmissaoDesc',fld:'vTIPOEMISSAODESC'},{av:'AV204EtiquetaTermicaSituacao',fld:'vETIQUETATERMICASITUACAO'},{av:'AV143EtiquetaQtdLinhasPag',fld:'vETIQUETAQTDLINHASPAG'},{av:'AV144EtiquetaQtdColLinha',fld:'vETIQUETAQTDCOLLINHA'},{av:'AV160CalcNoPedidoAno',fld:'vCALCNOPEDIDOANO'},{av:'AV184SNParcelas',fld:'vSNPARCELAS'},{av:'AV68ProdutoId',fld:'vPRODUTOID'},{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV257Pgmname',fld:'vPGMNAME'},{av:'AV132SdtEtiquetaTermica',fld:'vSDTETIQUETATERMICA'},{av:'AV150ParmRelat',fld:'vPARMRELAT'},{av:'AV218isConsisteQuantidade',fld:'vISCONSISTEQUANTIDADE'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV90FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A240EmpresaEtiquetaEmpresaId',fld:'EMPRESAETIQUETAEMPRESAID'},{av:'A241EtiquetaCodigo',fld:'ETIQUETACODIGO'},{av:'A102EtiquetaTamEntreLinha',fld:'ETIQUETATAMENTRELINHA'},{av:'A743EtiquetaTipoImpressao',fld:'ETIQUETATIPOIMPRESSAO'},{av:'A98EtiquetaQtdLinhasPag',fld:'ETIQUETAQTDLINHASPAG'},{av:'A99EtiquetaQtdLinhasEtq',fld:'ETIQUETAQTDLINHASETQ'},{av:'A100EtiquetaQtdColLinha',fld:'ETIQUETAQTDCOLLINHA'},{av:'A242EtiquetaLinhaCod',fld:'ETIQUETALINHACOD'},{av:'A239EtiquetaLinhaConteudo',fld:'ETIQUETALINHACONTEUDO'},{av:'A5902EtiquetaTermicaEmpresaId',fld:'ETIQUETATERMICAEMPRESAID'},{av:'AV95EtiquetaTermicaEmpresaId',fld:'vETIQUETATERMICAEMPRESAID'},{av:'A5903EtiquetaTermicaModelo',fld:'ETIQUETATERMICAMODELO'},{av:'A9866EtiquetaTermicaSituacao',fld:'ETIQUETATERMICASITUACAO'},{av:'A5886EtiquetaTermicaCampo',fld:'ETIQUETATERMICACAMPO'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV66EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV163CodificacaoEstDescricao',fld:'vCODIFICACAOESTDESCRICAO'},{av:'A2936CodificacaoEstEmpresaId',fld:'CODIFICACAOESTEMPRESAID'},{av:'AV82CodificacaoEstEmpresaId',fld:'vCODIFICACAOESTEMPRESAID'},{av:'A2937CodificacaoEstId',fld:'CODIFICACAOESTID'},{av:'AV162CodificacaoEstIdAux',fld:'vCODIFICACAOESTIDAUX'},{av:'A2932CodificacaoEstDescricao',fld:'CODIFICACAOESTDESCRICAO'}],[{av:'AV183SdtParcelas',fld:'vSDTPARCELAS'},{av:'AV167SNConteudo',fld:'vSNCONTEUDO'},{av:'AV132SdtEtiquetaTermica',fld:'vSDTETIQUETATERMICA'},{av:'AV136SdtEtiqueta',fld:'vSDTETIQUETA'},{av:'AV140SNTxt',fld:'vSNTXT'},{av:'AV137QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV103SNErro',fld:'vSNERRO'},{av:'AV139LinhaInicial',fld:'vLINHAINICIAL'},{av:'AV138ColunaInicial',fld:'vCOLUNAINICIAL'},{av:'AV150ParmRelat',fld:'vPARMRELAT'},{av:'AV149NomeProc',fld:'vNOMEPROC'},{av:'AV151Random',fld:'vRANDOM'},{av:'AV152NomeSessao',fld:'vNOMESESSAO'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV166TipoEmissaoDesc',fld:'vTIPOEMISSAODESC'},{av:'AV168OrdenacaoDesc',fld:'vORDENACAODESC'},{av:'AV104SNExiste',fld:'vSNEXISTE'},{av:'AV184SNParcelas',fld:'vSNPARCELAS'},{av:'AV145EtiquetaTamEntreLinha',fld:'vETIQUETATAMENTRELINHA'},{av:'AV141EtiquetaTipoImpressao',fld:'vETIQUETATIPOIMPRESSAO'},{av:'AV143EtiquetaQtdLinhasPag',fld:'vETIQUETAQTDLINHASPAG'},{av:'AV142EtiquetaQtdLinhasEtq',fld:'vETIQUETAQTDLINHASETQ'},{av:'AV144EtiquetaQtdColLinha',fld:'vETIQUETAQTDCOLLINHA'},{av:'AV204EtiquetaTermicaSituacao',fld:'vETIQUETATERMICASITUACAO'},{av:'AV305GXV13',fld:'vGXV13'},{av:'AV306GXV14',fld:'vGXV14'},{av:'AV76SdtGridProdutoEtiquetaItem',fld:'vSDTGRIDPRODUTOETIQUETAITEM'},{av:'AV307GXV15',fld:'vGXV15'},{av:'AV83SdtGridCodificacaoEtiquetaItem',fld:'vSDTGRIDCODIFICACAOETIQUETAITEM'},{av:'AV162CodificacaoEstIdAux',fld:'vCODIFICACAOESTIDAUX'},{av:'AV199OpcoesTxtTela',fld:'vOPCOESTXTTELA'},{av:'AV163CodificacaoEstDescricao',fld:'vCODIFICACAOESTDESCRICAO'}]];
   this.EvtParms["'LISTARPRODUTOS'"] = [[{av:'AV28TpEtiqueta',fld:'vTPETIQUETA'},{av:'AV31TipoEmissao',fld:'vTIPOEMISSAO'},{av:'AV40Documento',fld:'vDOCUMENTO'},{av:'A4637EntradaEmpresaId',fld:'ENTRADAEMPRESAID'},{av:'AV312Udparg1',fld:'vUDPARG1'},{av:'A4646EntradaNumeroDocumento',fld:'ENTRADANUMERODOCUMENTO'},{av:'AV41PessoaId',fld:'vPESSOAID'},{av:'A4642EntradaFornecedorEmpId',fld:'ENTRADAFORNECEDOREMPID'},{av:'AV66EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A4643EntradaFornecedorId',fld:'ENTRADAFORNECEDORID'},{av:'A4656EntradaDataEntrada',fld:'ENTRADADATAENTRADA'},{av:'AV32DataReferenciaIni',fld:'vDATAREFERENCIAINI'},{av:'AV34DataReferenciaFim',fld:'vDATAREFERENCIAFIM'}],[{av:'AV311GXLvl1911',fld:'vGXLVL1911'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'GRID3_nFirstRecordOnPage'},{av:'GRID3_nEOF'},{av:'AV98bmpExcProduto',fld:'vBMPEXCPRODUTO'},{av:'AV129bmpLote',fld:'vBMPLOTE'},{av:'gx.fn.getCtrlProperty("vBMPLOTE","Tooltiptext")',ctrl:'vBMPLOTE',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPLOTE","Visible")',ctrl:'vBMPLOTE',prop:'Visible'},{av:'AV208IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{av:'AV69SdtGridProdutoEtiqueta',fld:'vSDTGRIDPRODUTOETIQUETA',grid:245},{av:'AV28TpEtiqueta',fld:'vTPETIQUETA'},{av:'AV68ProdutoId',fld:'vPRODUTOID'},{av:'AV157SNAvancar',fld:'vSNAVANCAR'},{av:'AV216isUnicoAtt',fld:'vISUNICOATT'},{av:'AV172ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV213SnLoteMedicamen',fld:'vSNLOTEMEDICAMEN'},{av:'AV118SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV257Pgmname',fld:'vPGMNAME'},{av:'AV201SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV75ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV130EsquemaUnico',fld:'vESQUEMAUNICO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'AV108Edit1',fld:'vEDIT1'},{av:'AV209LoteCBarras',fld:'vLOTECBARRAS'},{av:'AV103SNErro',fld:'vSNERRO'},{av:'AV218isConsisteQuantidade',fld:'vISCONSISTEQUANTIDADE'},{av:'AV31TipoEmissao',fld:'vTIPOEMISSAO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV90FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV128LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV206Qtde',fld:'vQTDE'},{av:'A3645LoteProdutoQtdeAtual',fld:'LOTEPRODUTOQTDEATUAL'},{av:'A2960ProdutoDescricao',fld:'PRODUTODESCRICAO'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'AV207ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'A3840ProdutoFamiliaId',fld:'PRODUTOFAMILIAID'},{av:'A3838ProdutoCodificacaoPrincipal',fld:'PRODUTOCODIFICACAOPRINCIPAL'},{av:'A3400ProdutoClassificacaoPrincipal',fld:'PRODUTOCLASSIFICACAOPRINCIPAL'},{av:'A3398ProdutoFabricanteId',fld:'PRODUTOFABRICANTEID'},{av:'A3846ProdutoFabricanteFantasia',fld:'PRODUTOFABRICANTEFANTASIA'},{av:'AV214MesAnoVenc',fld:'vMESANOVENC',hsh:true},{av:'AV212isVencLote',fld:'vISVENCLOTE'},{av:'AV217TxtTela',fld:'vTXTTELA'},{av:'AV182SessaoAux',fld:'vSESSAOAUX'},{av:'AV165EsquemaCodigoProduto',fld:'vESQUEMACODIGOPRODUTO'},{av:'AV171AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2939ValorAtributoUsuarioAlt',fld:'VALORATRIBUTOUSUARIOALT'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV119Visible1',fld:'vVISIBLE1'},{av:'AV109Combo1',fld:'vCOMBO1'},{av:'AV120Visible2',fld:'vVISIBLE2'},{av:'AV110Edit2',fld:'vEDIT2'},{av:'AV111Combo2',fld:'vCOMBO2'},{av:'AV121Visible3',fld:'vVISIBLE3'},{av:'AV112Edit3',fld:'vEDIT3'},{av:'AV113Combo3',fld:'vCOMBO3'},{av:'AV122Visible4',fld:'vVISIBLE4'},{av:'AV114Edit4',fld:'vEDIT4'},{av:'AV115Combo4',fld:'vCOMBO4'},{av:'AV123Visible5',fld:'vVISIBLE5'},{av:'AV116Edit5',fld:'vEDIT5'},{av:'AV117Combo5',fld:'vCOMBO5'},{av:'AV124i',fld:'vI'},{av:'AV173ValorAtributoCodigoStr',fld:'vVALORATRIBUTOCODIGOSTR'},{av:'AV174ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'},{av:'AV42DataUltEnvio',fld:'vDATAULTENVIO'}],[{av:'AV199OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV257Pgmname',fld:'vPGMNAME'},{av:'AV201SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV217TxtTela',fld:'vTXTTELA'},{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV182SessaoAux',fld:'vSESSAOAUX'}],[{av:'AV313GXV16',fld:'vGXV16'},{av:'AV202SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV42DataUltEnvio',fld:'vDATAULTENVIO'},{av:'AV218isConsisteQuantidade',fld:'vISCONSISTEQUANTIDADE'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV257Pgmname',fld:'vPGMNAME'},{av:'AV217TxtTela',fld:'vTXTTELA'}],[]];
   this.setPrompt("PROMPTFILIAL", [30]);
   this.setPrompt("IMGPEDIDO", [94,95]);
   this.setPrompt("PROMPT_ETIQUETATERMICAMODELO", [59]);
   this.setPrompt("PROMPT_ETIQUETACODIGO", [61]);
   this.setPrompt("IMGPROMPT", [179,365,365,365,370,369,368]);
   this.setPrompt("PROMPT_ESQUEMACODIGO", [110]);
   this.setPrompt("PROMPT_PESSOAID", [135]);
   this.setPrompt("PROMPTCBARRAS", [179,365,365,365,370,369,185]);
   this.setPrompt("PROMPT_FAMILIAID", [275]);
   this.setPrompt("PROMPT_FABRICANTE", [294]);
   this.EnterCtrl = ["vBMPPRODUTO"];
   this.setVCMap("AV82CodificacaoEstEmpresaId", "vCODIFICACAOESTEMPRESAID", 0, "char");
   this.setVCMap("AV84ClassificacaoEstEmpresaId", "vCLASSIFICACAOESTEMPRESAID", 0, "char");
   this.setVCMap("AV78SdtGridClassificacaoEtiqueta", "vSDTGRIDCLASSIFICACAOETIQUETA", 0, "CollSdtGridClassificacaoEtiqueta.SdtGridClassificacaoEtiquetaItem");
   this.setVCMap("AV208IdentificacaoProduto", "vIDENTIFICACAOPRODUTO", 0, "char");
   this.setVCMap("AV69SdtGridProdutoEtiqueta", "vSDTGRIDPRODUTOETIQUETA", 0, "CollSdtGridProdutoEtiqueta.SdtGridProdutoEtiquetaItem");
   this.setVCMap("AV216isUnicoAtt", "vISUNICOATT", 0, "boolean");
   this.setVCMap("AV172ValorAtributoCodigo", "vVALORATRIBUTOCODIGO", 0, "int");
   this.setVCMap("AV213SnLoteMedicamen", "vSNLOTEMEDICAMEN", 0, "char");
   this.setVCMap("AV257Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV201SdtTxtTela", "vSDTTXTTELA", 0, "CollSdtTxtTela.SdtTxtTelaItem");
   this.setVCMap("AV15EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("A2964ProdutoEmpresaId", "PRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV75ProdutoEmpresaId", "vPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("A2965ProdutoId", "PRODUTOID", 0, "int");
   this.setVCMap("A2915EsquemaCodigo", "ESQUEMACODIGO", 0, "int");
   this.setVCMap("AV130EsquemaUnico", "vESQUEMAUNICO", 0, "char");
   this.setVCMap("A2921AtributoEsquemaCodigo", "ATRIBUTOESQUEMACODIGO", 0, "int");
   this.setVCMap("A2916AtributoEsquemaDescricao", "ATRIBUTOESQUEMADESCRICAO", 0, "char");
   this.setVCMap("A2917AtributoEsquemaSnCadastrado", "ATRIBUTOESQUEMASNCADASTRADO", 0, "char");
   this.setVCMap("AV103SNErro", "vSNERRO", 0, "char");
   this.setVCMap("A1228FilialEmpresaId", "FILIALEMPRESAID", 0, "char");
   this.setVCMap("A1156FilialId", "FILIALID", 0, "int");
   this.setVCMap("A3624LoteProdutoCombinacao", "LOTEPRODUTOCOMBINACAO", 0, "char");
   this.setVCMap("AV128LoteProdutoCombinacao", "vLOTEPRODUTOCOMBINACAO", 0, "char");
   this.setVCMap("A3645LoteProdutoQtdeAtual", "LOTEPRODUTOQTDEATUAL", 0, "decimal");
   this.setVCMap("A2960ProdutoDescricao", "PRODUTODESCRICAO", 0, "svchar");
   this.setVCMap("A2961ProdutoDescricaoResumida", "PRODUTODESCRICAORESUMIDA", 0, "svchar");
   this.setVCMap("A3840ProdutoFamiliaId", "PRODUTOFAMILIAID", 0, "char");
   this.setVCMap("A3838ProdutoCodificacaoPrincipal", "PRODUTOCODIFICACAOPRINCIPAL", 0, "char");
   this.setVCMap("A3400ProdutoClassificacaoPrincipal", "PRODUTOCLASSIFICACAOPRINCIPAL", 0, "char");
   this.setVCMap("A3398ProdutoFabricanteId", "PRODUTOFABRICANTEID", 0, "int");
   this.setVCMap("A3846ProdutoFabricanteFantasia", "PRODUTOFABRICANTEFANTASIA", 0, "svchar");
   this.setVCMap("AV214MesAnoVenc", "vMESANOVENC", 0, "char");
   this.setVCMap("AV212isVencLote", "vISVENCLOTE", 0, "boolean");
   this.setVCMap("AV165EsquemaCodigoProduto", "vESQUEMACODIGOPRODUTO", 0, "int");
   this.setVCMap("AV171AtributoEsquemaCodigo", "vATRIBUTOESQUEMACODIGO", 0, "int");
   this.setVCMap("A2939ValorAtributoUsuarioAlt", "VALORATRIBUTOUSUARIOALT", 0, "char");
   this.setVCMap("A2941ValorAtributoCodigo", "VALORATRIBUTOCODIGO", 0, "int");
   this.setVCMap("A2938ValorAtributoDescricao", "VALORATRIBUTODESCRICAO", 0, "char");
   this.setVCMap("AV124i", "vI", 0, "int");
   this.setVCMap("AV173ValorAtributoCodigoStr", "vVALORATRIBUTOCODIGOSTR", 0, "char");
   this.setVCMap("AV174ValorAtributoDescricao", "vVALORATRIBUTODESCRICAO", 0, "char");
   this.setVCMap("AV208IdentificacaoProduto", "vIDENTIFICACAOPRODUTO", 0, "char");
   this.setVCMap("AV69SdtGridProdutoEtiqueta", "vSDTGRIDPRODUTOETIQUETA", 0, "CollSdtGridProdutoEtiqueta.SdtGridProdutoEtiquetaItem");
   this.setVCMap("AV216isUnicoAtt", "vISUNICOATT", 0, "boolean");
   this.setVCMap("AV172ValorAtributoCodigo", "vVALORATRIBUTOCODIGO", 0, "int");
   this.setVCMap("AV213SnLoteMedicamen", "vSNLOTEMEDICAMEN", 0, "char");
   this.setVCMap("AV257Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV201SdtTxtTela", "vSDTTXTTELA", 0, "CollSdtTxtTela.SdtTxtTelaItem");
   this.setVCMap("AV15EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("A2964ProdutoEmpresaId", "PRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV75ProdutoEmpresaId", "vPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("A2965ProdutoId", "PRODUTOID", 0, "int");
   this.setVCMap("A2915EsquemaCodigo", "ESQUEMACODIGO", 0, "int");
   this.setVCMap("AV130EsquemaUnico", "vESQUEMAUNICO", 0, "char");
   this.setVCMap("A2921AtributoEsquemaCodigo", "ATRIBUTOESQUEMACODIGO", 0, "int");
   this.setVCMap("A2916AtributoEsquemaDescricao", "ATRIBUTOESQUEMADESCRICAO", 0, "char");
   this.setVCMap("A2917AtributoEsquemaSnCadastrado", "ATRIBUTOESQUEMASNCADASTRADO", 0, "char");
   this.setVCMap("AV103SNErro", "vSNERRO", 0, "char");
   this.setVCMap("A1228FilialEmpresaId", "FILIALEMPRESAID", 0, "char");
   this.setVCMap("A1156FilialId", "FILIALID", 0, "int");
   this.setVCMap("A3624LoteProdutoCombinacao", "LOTEPRODUTOCOMBINACAO", 0, "char");
   this.setVCMap("AV128LoteProdutoCombinacao", "vLOTEPRODUTOCOMBINACAO", 0, "char");
   this.setVCMap("A3645LoteProdutoQtdeAtual", "LOTEPRODUTOQTDEATUAL", 0, "decimal");
   this.setVCMap("A2960ProdutoDescricao", "PRODUTODESCRICAO", 0, "svchar");
   this.setVCMap("A2961ProdutoDescricaoResumida", "PRODUTODESCRICAORESUMIDA", 0, "svchar");
   this.setVCMap("A3840ProdutoFamiliaId", "PRODUTOFAMILIAID", 0, "char");
   this.setVCMap("A3838ProdutoCodificacaoPrincipal", "PRODUTOCODIFICACAOPRINCIPAL", 0, "char");
   this.setVCMap("A3400ProdutoClassificacaoPrincipal", "PRODUTOCLASSIFICACAOPRINCIPAL", 0, "char");
   this.setVCMap("A3398ProdutoFabricanteId", "PRODUTOFABRICANTEID", 0, "int");
   this.setVCMap("A3846ProdutoFabricanteFantasia", "PRODUTOFABRICANTEFANTASIA", 0, "svchar");
   this.setVCMap("AV214MesAnoVenc", "vMESANOVENC", 0, "char");
   this.setVCMap("AV212isVencLote", "vISVENCLOTE", 0, "boolean");
   this.setVCMap("AV165EsquemaCodigoProduto", "vESQUEMACODIGOPRODUTO", 0, "int");
   this.setVCMap("AV171AtributoEsquemaCodigo", "vATRIBUTOESQUEMACODIGO", 0, "int");
   this.setVCMap("A2939ValorAtributoUsuarioAlt", "VALORATRIBUTOUSUARIOALT", 0, "char");
   this.setVCMap("A2941ValorAtributoCodigo", "VALORATRIBUTOCODIGO", 0, "int");
   this.setVCMap("A2938ValorAtributoDescricao", "VALORATRIBUTODESCRICAO", 0, "char");
   this.setVCMap("AV124i", "vI", 0, "int");
   this.setVCMap("AV173ValorAtributoCodigoStr", "vVALORATRIBUTOCODIGOSTR", 0, "char");
   this.setVCMap("AV174ValorAtributoDescricao", "vVALORATRIBUTODESCRICAO", 0, "char");
   Grid3Container.addRefreshingVar({rfrVar:"AV98bmpExcProduto", rfrProp:"Value", gxAttId:"Bmpexcproduto"});
   Grid3Container.addRefreshingVar({rfrVar:"AV129bmpLote", rfrProp:"Value", gxAttId:"Bmplote"});
   Grid3Container.addRefreshingVar({rfrVar:"AV129bmpLote", rfrProp:"Tooltiptext", gxAttId:"Bmplote"});
   Grid3Container.addRefreshingVar({rfrVar:"AV129bmpLote", rfrProp:"Visible", gxAttId:"Bmplote"});
   Grid3Container.addRefreshingVar({rfrVar:"AV208IdentificacaoProduto"});
   Grid3Container.addRefreshingVar({rfrVar:"AV69SdtGridProdutoEtiqueta"});
   Grid3Container.addRefreshingVar(this.GXValidFnc[37]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[179]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[188]);
   Grid3Container.addRefreshingVar({rfrVar:"AV216isUnicoAtt"});
   Grid3Container.addRefreshingVar({rfrVar:"AV172ValorAtributoCodigo"});
   Grid3Container.addRefreshingVar({rfrVar:"AV213SnLoteMedicamen"});
   Grid3Container.addRefreshingVar(this.GXValidFnc[357]);
   Grid3Container.addRefreshingVar({rfrVar:"AV257Pgmname"});
   Grid3Container.addRefreshingVar({rfrVar:"AV201SdtTxtTela"});
   Grid3Container.addRefreshingVar({rfrVar:"AV15EmpresaLogadaId"});
   Grid3Container.addRefreshingVar({rfrVar:"A2964ProdutoEmpresaId"});
   Grid3Container.addRefreshingVar({rfrVar:"AV75ProdutoEmpresaId"});
   Grid3Container.addRefreshingVar({rfrVar:"A2965ProdutoId"});
   Grid3Container.addRefreshingVar({rfrVar:"A2915EsquemaCodigo"});
   Grid3Container.addRefreshingVar({rfrVar:"AV130EsquemaUnico"});
   Grid3Container.addRefreshingVar({rfrVar:"A2921AtributoEsquemaCodigo"});
   Grid3Container.addRefreshingVar({rfrVar:"A2916AtributoEsquemaDescricao"});
   Grid3Container.addRefreshingVar({rfrVar:"A2917AtributoEsquemaSnCadastrado"});
   Grid3Container.addRefreshingVar(this.GXValidFnc[221]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[351]);
   Grid3Container.addRefreshingVar({rfrVar:"AV103SNErro"});
   Grid3Container.addRefreshingVar(this.GXValidFnc[203]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[47]);
   Grid3Container.addRefreshingVar({rfrVar:"A1228FilialEmpresaId"});
   Grid3Container.addRefreshingVar(this.GXValidFnc[359]);
   Grid3Container.addRefreshingVar({rfrVar:"A1156FilialId"});
   Grid3Container.addRefreshingVar(this.GXValidFnc[30]);
   Grid3Container.addRefreshingVar({rfrVar:"A3624LoteProdutoCombinacao"});
   Grid3Container.addRefreshingVar({rfrVar:"AV128LoteProdutoCombinacao"});
   Grid3Container.addRefreshingVar(this.GXValidFnc[199]);
   Grid3Container.addRefreshingVar({rfrVar:"A3645LoteProdutoQtdeAtual"});
   Grid3Container.addRefreshingVar({rfrVar:"A2960ProdutoDescricao"});
   Grid3Container.addRefreshingVar({rfrVar:"A2961ProdutoDescricaoResumida"});
   Grid3Container.addRefreshingVar(this.GXValidFnc[185]);
   Grid3Container.addRefreshingVar({rfrVar:"A3840ProdutoFamiliaId"});
   Grid3Container.addRefreshingVar({rfrVar:"A3838ProdutoCodificacaoPrincipal"});
   Grid3Container.addRefreshingVar({rfrVar:"A3400ProdutoClassificacaoPrincipal"});
   Grid3Container.addRefreshingVar({rfrVar:"A3398ProdutoFabricanteId"});
   Grid3Container.addRefreshingVar({rfrVar:"A3846ProdutoFabricanteFantasia"});
   Grid3Container.addRefreshingVar({rfrVar:"AV214MesAnoVenc"});
   Grid3Container.addRefreshingVar({rfrVar:"AV212isVencLote"});
   Grid3Container.addRefreshingVar(this.GXValidFnc[11]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[160]);
   Grid3Container.addRefreshingVar({rfrVar:"AV165EsquemaCodigoProduto"});
   Grid3Container.addRefreshingVar({rfrVar:"AV171AtributoEsquemaCodigo"});
   Grid3Container.addRefreshingVar({rfrVar:"A2939ValorAtributoUsuarioAlt"});
   Grid3Container.addRefreshingVar({rfrVar:"A2941ValorAtributoCodigo"});
   Grid3Container.addRefreshingVar({rfrVar:"A2938ValorAtributoDescricao"});
   Grid3Container.addRefreshingVar(this.GXValidFnc[223]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[222]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[227]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[225]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[226]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[231]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[229]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[230]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[235]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[233]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[234]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[239]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[237]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[238]);
   Grid3Container.addRefreshingVar({rfrVar:"AV124i"});
   Grid3Container.addRefreshingVar({rfrVar:"AV173ValorAtributoCodigoStr"});
   Grid3Container.addRefreshingVar({rfrVar:"AV174ValorAtributoDescricao"});
   Grid1Container.addRefreshingVar({rfrVar:"AV96bmpExcFamilia", rfrProp:"Value", gxAttId:"Bmpexcfamilia"});
   Grid1Container.addRefreshingVar({rfrVar:"AV208IdentificacaoProduto"});
   Grid1Container.addRefreshingVar({rfrVar:"AV69SdtGridProdutoEtiqueta"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[37]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[179]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[188]);
   Grid1Container.addRefreshingVar({rfrVar:"AV216isUnicoAtt"});
   Grid1Container.addRefreshingVar({rfrVar:"AV172ValorAtributoCodigo"});
   Grid1Container.addRefreshingVar({rfrVar:"AV213SnLoteMedicamen"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[357]);
   Grid1Container.addRefreshingVar({rfrVar:"AV257Pgmname"});
   Grid1Container.addRefreshingVar({rfrVar:"AV201SdtTxtTela"});
   Grid1Container.addRefreshingVar({rfrVar:"AV15EmpresaLogadaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A2964ProdutoEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV75ProdutoEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A2965ProdutoId"});
   Grid1Container.addRefreshingVar({rfrVar:"A2915EsquemaCodigo"});
   Grid1Container.addRefreshingVar({rfrVar:"AV130EsquemaUnico"});
   Grid1Container.addRefreshingVar({rfrVar:"A2921AtributoEsquemaCodigo"});
   Grid1Container.addRefreshingVar({rfrVar:"A2916AtributoEsquemaDescricao"});
   Grid1Container.addRefreshingVar({rfrVar:"A2917AtributoEsquemaSnCadastrado"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[221]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[351]);
   Grid1Container.addRefreshingVar({rfrVar:"AV103SNErro"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[203]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[47]);
   Grid1Container.addRefreshingVar({rfrVar:"A1228FilialEmpresaId"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[359]);
   Grid1Container.addRefreshingVar({rfrVar:"A1156FilialId"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[30]);
   Grid1Container.addRefreshingVar({rfrVar:"A3624LoteProdutoCombinacao"});
   Grid1Container.addRefreshingVar({rfrVar:"AV128LoteProdutoCombinacao"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[199]);
   Grid1Container.addRefreshingVar({rfrVar:"A3645LoteProdutoQtdeAtual"});
   Grid1Container.addRefreshingVar({rfrVar:"A2960ProdutoDescricao"});
   Grid1Container.addRefreshingVar({rfrVar:"A2961ProdutoDescricaoResumida"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[185]);
   Grid1Container.addRefreshingVar({rfrVar:"A3840ProdutoFamiliaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A3838ProdutoCodificacaoPrincipal"});
   Grid1Container.addRefreshingVar({rfrVar:"A3400ProdutoClassificacaoPrincipal"});
   Grid1Container.addRefreshingVar({rfrVar:"A3398ProdutoFabricanteId"});
   Grid1Container.addRefreshingVar({rfrVar:"A3846ProdutoFabricanteFantasia"});
   Grid1Container.addRefreshingVar({rfrVar:"AV214MesAnoVenc"});
   Grid1Container.addRefreshingVar({rfrVar:"AV212isVencLote"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[11]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[160]);
   Grid1Container.addRefreshingVar({rfrVar:"AV165EsquemaCodigoProduto"});
   Grid1Container.addRefreshingVar({rfrVar:"AV171AtributoEsquemaCodigo"});
   Grid1Container.addRefreshingVar({rfrVar:"A2939ValorAtributoUsuarioAlt"});
   Grid1Container.addRefreshingVar({rfrVar:"A2941ValorAtributoCodigo"});
   Grid1Container.addRefreshingVar({rfrVar:"A2938ValorAtributoDescricao"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[223]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[222]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[227]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[225]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[226]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[231]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[229]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[230]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[235]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[233]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[234]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[239]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[237]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[238]);
   Grid1Container.addRefreshingVar({rfrVar:"AV124i"});
   Grid1Container.addRefreshingVar({rfrVar:"AV173ValorAtributoCodigoStr"});
   Grid1Container.addRefreshingVar({rfrVar:"AV174ValorAtributoDescricao"});
   Grid2Container.addRefreshingVar({rfrVar:"AV97bmpExcFabricante", rfrProp:"Value", gxAttId:"Bmpexcfabricante"});
   Grid2Container.addRefreshingVar({rfrVar:"AV208IdentificacaoProduto"});
   Grid2Container.addRefreshingVar({rfrVar:"AV69SdtGridProdutoEtiqueta"});
   Grid2Container.addRefreshingVar(this.GXValidFnc[37]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[179]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[188]);
   Grid2Container.addRefreshingVar({rfrVar:"AV216isUnicoAtt"});
   Grid2Container.addRefreshingVar({rfrVar:"AV172ValorAtributoCodigo"});
   Grid2Container.addRefreshingVar({rfrVar:"AV213SnLoteMedicamen"});
   Grid2Container.addRefreshingVar(this.GXValidFnc[357]);
   Grid2Container.addRefreshingVar({rfrVar:"AV257Pgmname"});
   Grid2Container.addRefreshingVar({rfrVar:"AV201SdtTxtTela"});
   Grid2Container.addRefreshingVar({rfrVar:"AV15EmpresaLogadaId"});
   Grid2Container.addRefreshingVar({rfrVar:"A2964ProdutoEmpresaId"});
   Grid2Container.addRefreshingVar({rfrVar:"AV75ProdutoEmpresaId"});
   Grid2Container.addRefreshingVar({rfrVar:"A2965ProdutoId"});
   Grid2Container.addRefreshingVar({rfrVar:"A2915EsquemaCodigo"});
   Grid2Container.addRefreshingVar({rfrVar:"AV130EsquemaUnico"});
   Grid2Container.addRefreshingVar({rfrVar:"A2921AtributoEsquemaCodigo"});
   Grid2Container.addRefreshingVar({rfrVar:"A2916AtributoEsquemaDescricao"});
   Grid2Container.addRefreshingVar({rfrVar:"A2917AtributoEsquemaSnCadastrado"});
   Grid2Container.addRefreshingVar(this.GXValidFnc[221]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[351]);
   Grid2Container.addRefreshingVar({rfrVar:"AV103SNErro"});
   Grid2Container.addRefreshingVar(this.GXValidFnc[203]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[47]);
   Grid2Container.addRefreshingVar({rfrVar:"A1228FilialEmpresaId"});
   Grid2Container.addRefreshingVar(this.GXValidFnc[359]);
   Grid2Container.addRefreshingVar({rfrVar:"A1156FilialId"});
   Grid2Container.addRefreshingVar(this.GXValidFnc[30]);
   Grid2Container.addRefreshingVar({rfrVar:"A3624LoteProdutoCombinacao"});
   Grid2Container.addRefreshingVar({rfrVar:"AV128LoteProdutoCombinacao"});
   Grid2Container.addRefreshingVar(this.GXValidFnc[199]);
   Grid2Container.addRefreshingVar({rfrVar:"A3645LoteProdutoQtdeAtual"});
   Grid2Container.addRefreshingVar({rfrVar:"A2960ProdutoDescricao"});
   Grid2Container.addRefreshingVar({rfrVar:"A2961ProdutoDescricaoResumida"});
   Grid2Container.addRefreshingVar(this.GXValidFnc[185]);
   Grid2Container.addRefreshingVar({rfrVar:"A3840ProdutoFamiliaId"});
   Grid2Container.addRefreshingVar({rfrVar:"A3838ProdutoCodificacaoPrincipal"});
   Grid2Container.addRefreshingVar({rfrVar:"A3400ProdutoClassificacaoPrincipal"});
   Grid2Container.addRefreshingVar({rfrVar:"A3398ProdutoFabricanteId"});
   Grid2Container.addRefreshingVar({rfrVar:"A3846ProdutoFabricanteFantasia"});
   Grid2Container.addRefreshingVar({rfrVar:"AV214MesAnoVenc"});
   Grid2Container.addRefreshingVar({rfrVar:"AV212isVencLote"});
   Grid2Container.addRefreshingVar(this.GXValidFnc[11]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[160]);
   Grid2Container.addRefreshingVar({rfrVar:"AV165EsquemaCodigoProduto"});
   Grid2Container.addRefreshingVar({rfrVar:"AV171AtributoEsquemaCodigo"});
   Grid2Container.addRefreshingVar({rfrVar:"A2939ValorAtributoUsuarioAlt"});
   Grid2Container.addRefreshingVar({rfrVar:"A2941ValorAtributoCodigo"});
   Grid2Container.addRefreshingVar({rfrVar:"A2938ValorAtributoDescricao"});
   Grid2Container.addRefreshingVar(this.GXValidFnc[223]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[222]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[227]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[225]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[226]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[231]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[229]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[230]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[235]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[233]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[234]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[239]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[237]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[238]);
   Grid2Container.addRefreshingVar({rfrVar:"AV124i"});
   Grid2Container.addRefreshingVar({rfrVar:"AV173ValorAtributoCodigoStr"});
   Grid2Container.addRefreshingVar({rfrVar:"AV174ValorAtributoDescricao"});
   Grid4Container.addRefreshingVar({rfrVar:"AV99bmpExcCodificacao", rfrProp:"Value", gxAttId:"Bmpexccodificacao"});
   Grid4Container.addRefreshingVar({rfrVar:"AV208IdentificacaoProduto"});
   Grid4Container.addRefreshingVar({rfrVar:"AV69SdtGridProdutoEtiqueta"});
   Grid4Container.addRefreshingVar(this.GXValidFnc[37]);
   Grid4Container.addRefreshingVar(this.GXValidFnc[179]);
   Grid4Container.addRefreshingVar(this.GXValidFnc[188]);
   Grid4Container.addRefreshingVar({rfrVar:"AV216isUnicoAtt"});
   Grid4Container.addRefreshingVar({rfrVar:"AV172ValorAtributoCodigo"});
   Grid4Container.addRefreshingVar({rfrVar:"AV213SnLoteMedicamen"});
   Grid4Container.addRefreshingVar(this.GXValidFnc[357]);
   Grid4Container.addRefreshingVar({rfrVar:"AV257Pgmname"});
   Grid4Container.addRefreshingVar({rfrVar:"AV201SdtTxtTela"});
   Grid4Container.addRefreshingVar({rfrVar:"AV15EmpresaLogadaId"});
   Grid4Container.addRefreshingVar({rfrVar:"A2964ProdutoEmpresaId"});
   Grid4Container.addRefreshingVar({rfrVar:"AV75ProdutoEmpresaId"});
   Grid4Container.addRefreshingVar({rfrVar:"A2965ProdutoId"});
   Grid4Container.addRefreshingVar({rfrVar:"A2915EsquemaCodigo"});
   Grid4Container.addRefreshingVar({rfrVar:"AV130EsquemaUnico"});
   Grid4Container.addRefreshingVar({rfrVar:"A2921AtributoEsquemaCodigo"});
   Grid4Container.addRefreshingVar({rfrVar:"A2916AtributoEsquemaDescricao"});
   Grid4Container.addRefreshingVar({rfrVar:"A2917AtributoEsquemaSnCadastrado"});
   Grid4Container.addRefreshingVar(this.GXValidFnc[221]);
   Grid4Container.addRefreshingVar(this.GXValidFnc[351]);
   Grid4Container.addRefreshingVar({rfrVar:"AV103SNErro"});
   Grid4Container.addRefreshingVar(this.GXValidFnc[203]);
   Grid4Container.addRefreshingVar(this.GXValidFnc[47]);
   Grid4Container.addRefreshingVar({rfrVar:"A1228FilialEmpresaId"});
   Grid4Container.addRefreshingVar(this.GXValidFnc[359]);
   Grid4Container.addRefreshingVar({rfrVar:"A1156FilialId"});
   Grid4Container.addRefreshingVar(this.GXValidFnc[30]);
   Grid4Container.addRefreshingVar({rfrVar:"A3624LoteProdutoCombinacao"});
   Grid4Container.addRefreshingVar({rfrVar:"AV128LoteProdutoCombinacao"});
   Grid4Container.addRefreshingVar(this.GXValidFnc[199]);
   Grid4Container.addRefreshingVar({rfrVar:"A3645LoteProdutoQtdeAtual"});
   Grid4Container.addRefreshingVar({rfrVar:"A2960ProdutoDescricao"});
   Grid4Container.addRefreshingVar({rfrVar:"A2961ProdutoDescricaoResumida"});
   Grid4Container.addRefreshingVar(this.GXValidFnc[185]);
   Grid4Container.addRefreshingVar({rfrVar:"A3840ProdutoFamiliaId"});
   Grid4Container.addRefreshingVar({rfrVar:"A3838ProdutoCodificacaoPrincipal"});
   Grid4Container.addRefreshingVar({rfrVar:"A3400ProdutoClassificacaoPrincipal"});
   Grid4Container.addRefreshingVar({rfrVar:"A3398ProdutoFabricanteId"});
   Grid4Container.addRefreshingVar({rfrVar:"A3846ProdutoFabricanteFantasia"});
   Grid4Container.addRefreshingVar({rfrVar:"AV214MesAnoVenc"});
   Grid4Container.addRefreshingVar({rfrVar:"AV212isVencLote"});
   Grid4Container.addRefreshingVar(this.GXValidFnc[11]);
   Grid4Container.addRefreshingVar(this.GXValidFnc[160]);
   Grid4Container.addRefreshingVar({rfrVar:"AV165EsquemaCodigoProduto"});
   Grid4Container.addRefreshingVar({rfrVar:"AV171AtributoEsquemaCodigo"});
   Grid4Container.addRefreshingVar({rfrVar:"A2939ValorAtributoUsuarioAlt"});
   Grid4Container.addRefreshingVar({rfrVar:"A2941ValorAtributoCodigo"});
   Grid4Container.addRefreshingVar({rfrVar:"A2938ValorAtributoDescricao"});
   Grid4Container.addRefreshingVar(this.GXValidFnc[223]);
   Grid4Container.addRefreshingVar(this.GXValidFnc[222]);
   Grid4Container.addRefreshingVar(this.GXValidFnc[227]);
   Grid4Container.addRefreshingVar(this.GXValidFnc[225]);
   Grid4Container.addRefreshingVar(this.GXValidFnc[226]);
   Grid4Container.addRefreshingVar(this.GXValidFnc[231]);
   Grid4Container.addRefreshingVar(this.GXValidFnc[229]);
   Grid4Container.addRefreshingVar(this.GXValidFnc[230]);
   Grid4Container.addRefreshingVar(this.GXValidFnc[235]);
   Grid4Container.addRefreshingVar(this.GXValidFnc[233]);
   Grid4Container.addRefreshingVar(this.GXValidFnc[234]);
   Grid4Container.addRefreshingVar(this.GXValidFnc[239]);
   Grid4Container.addRefreshingVar(this.GXValidFnc[237]);
   Grid4Container.addRefreshingVar(this.GXValidFnc[238]);
   Grid4Container.addRefreshingVar({rfrVar:"AV124i"});
   Grid4Container.addRefreshingVar({rfrVar:"AV173ValorAtributoCodigoStr"});
   Grid4Container.addRefreshingVar({rfrVar:"AV174ValorAtributoDescricao"});
   Grid5Container.addRefreshingVar({rfrVar:"AV100bmpExcClassificacao", rfrProp:"Value", gxAttId:"Bmpexcclassificacao"});
   Grid5Container.addRefreshingVar({rfrVar:"AV208IdentificacaoProduto"});
   Grid5Container.addRefreshingVar({rfrVar:"AV69SdtGridProdutoEtiqueta"});
   Grid5Container.addRefreshingVar(this.GXValidFnc[37]);
   Grid5Container.addRefreshingVar(this.GXValidFnc[179]);
   Grid5Container.addRefreshingVar(this.GXValidFnc[188]);
   Grid5Container.addRefreshingVar({rfrVar:"AV216isUnicoAtt"});
   Grid5Container.addRefreshingVar({rfrVar:"AV172ValorAtributoCodigo"});
   Grid5Container.addRefreshingVar({rfrVar:"AV213SnLoteMedicamen"});
   Grid5Container.addRefreshingVar(this.GXValidFnc[357]);
   Grid5Container.addRefreshingVar({rfrVar:"AV257Pgmname"});
   Grid5Container.addRefreshingVar({rfrVar:"AV201SdtTxtTela"});
   Grid5Container.addRefreshingVar({rfrVar:"AV15EmpresaLogadaId"});
   Grid5Container.addRefreshingVar({rfrVar:"A2964ProdutoEmpresaId"});
   Grid5Container.addRefreshingVar({rfrVar:"AV75ProdutoEmpresaId"});
   Grid5Container.addRefreshingVar({rfrVar:"A2965ProdutoId"});
   Grid5Container.addRefreshingVar({rfrVar:"A2915EsquemaCodigo"});
   Grid5Container.addRefreshingVar({rfrVar:"AV130EsquemaUnico"});
   Grid5Container.addRefreshingVar({rfrVar:"A2921AtributoEsquemaCodigo"});
   Grid5Container.addRefreshingVar({rfrVar:"A2916AtributoEsquemaDescricao"});
   Grid5Container.addRefreshingVar({rfrVar:"A2917AtributoEsquemaSnCadastrado"});
   Grid5Container.addRefreshingVar(this.GXValidFnc[221]);
   Grid5Container.addRefreshingVar(this.GXValidFnc[351]);
   Grid5Container.addRefreshingVar({rfrVar:"AV103SNErro"});
   Grid5Container.addRefreshingVar(this.GXValidFnc[203]);
   Grid5Container.addRefreshingVar(this.GXValidFnc[47]);
   Grid5Container.addRefreshingVar({rfrVar:"A1228FilialEmpresaId"});
   Grid5Container.addRefreshingVar(this.GXValidFnc[359]);
   Grid5Container.addRefreshingVar({rfrVar:"A1156FilialId"});
   Grid5Container.addRefreshingVar(this.GXValidFnc[30]);
   Grid5Container.addRefreshingVar({rfrVar:"A3624LoteProdutoCombinacao"});
   Grid5Container.addRefreshingVar({rfrVar:"AV128LoteProdutoCombinacao"});
   Grid5Container.addRefreshingVar(this.GXValidFnc[199]);
   Grid5Container.addRefreshingVar({rfrVar:"A3645LoteProdutoQtdeAtual"});
   Grid5Container.addRefreshingVar({rfrVar:"A2960ProdutoDescricao"});
   Grid5Container.addRefreshingVar({rfrVar:"A2961ProdutoDescricaoResumida"});
   Grid5Container.addRefreshingVar(this.GXValidFnc[185]);
   Grid5Container.addRefreshingVar({rfrVar:"A3840ProdutoFamiliaId"});
   Grid5Container.addRefreshingVar({rfrVar:"A3838ProdutoCodificacaoPrincipal"});
   Grid5Container.addRefreshingVar({rfrVar:"A3400ProdutoClassificacaoPrincipal"});
   Grid5Container.addRefreshingVar({rfrVar:"A3398ProdutoFabricanteId"});
   Grid5Container.addRefreshingVar({rfrVar:"A3846ProdutoFabricanteFantasia"});
   Grid5Container.addRefreshingVar({rfrVar:"AV214MesAnoVenc"});
   Grid5Container.addRefreshingVar({rfrVar:"AV212isVencLote"});
   Grid5Container.addRefreshingVar(this.GXValidFnc[11]);
   Grid5Container.addRefreshingVar(this.GXValidFnc[160]);
   Grid5Container.addRefreshingVar({rfrVar:"AV165EsquemaCodigoProduto"});
   Grid5Container.addRefreshingVar({rfrVar:"AV171AtributoEsquemaCodigo"});
   Grid5Container.addRefreshingVar({rfrVar:"A2939ValorAtributoUsuarioAlt"});
   Grid5Container.addRefreshingVar({rfrVar:"A2941ValorAtributoCodigo"});
   Grid5Container.addRefreshingVar({rfrVar:"A2938ValorAtributoDescricao"});
   Grid5Container.addRefreshingVar(this.GXValidFnc[223]);
   Grid5Container.addRefreshingVar(this.GXValidFnc[222]);
   Grid5Container.addRefreshingVar(this.GXValidFnc[227]);
   Grid5Container.addRefreshingVar(this.GXValidFnc[225]);
   Grid5Container.addRefreshingVar(this.GXValidFnc[226]);
   Grid5Container.addRefreshingVar(this.GXValidFnc[231]);
   Grid5Container.addRefreshingVar(this.GXValidFnc[229]);
   Grid5Container.addRefreshingVar(this.GXValidFnc[230]);
   Grid5Container.addRefreshingVar(this.GXValidFnc[235]);
   Grid5Container.addRefreshingVar(this.GXValidFnc[233]);
   Grid5Container.addRefreshingVar(this.GXValidFnc[234]);
   Grid5Container.addRefreshingVar(this.GXValidFnc[239]);
   Grid5Container.addRefreshingVar(this.GXValidFnc[237]);
   Grid5Container.addRefreshingVar(this.GXValidFnc[238]);
   Grid5Container.addRefreshingVar({rfrVar:"AV124i"});
   Grid5Container.addRefreshingVar({rfrVar:"AV173ValorAtributoCodigoStr"});
   Grid5Container.addRefreshingVar({rfrVar:"AV174ValorAtributoDescricao"});
   this.addGridBCProperty("Sdtgridprodutoetiqueta", ["ProdutoId"], this.GXValidFnc[246], "AV69SdtGridProdutoEtiqueta");
   this.addGridBCProperty("Sdtgridprodutoetiqueta", ["ProdutoCodigoBarras"], this.GXValidFnc[247], "AV69SdtGridProdutoEtiqueta");
   this.addGridBCProperty("Sdtgridprodutoetiqueta", ["ProdutoDescricao"], this.GXValidFnc[248], "AV69SdtGridProdutoEtiqueta");
   this.addGridBCProperty("Sdtgridprodutoetiqueta", ["LoteProdutoCombinacao"], this.GXValidFnc[249], "AV69SdtGridProdutoEtiqueta");
   this.addGridBCProperty("Sdtgridprodutoetiqueta", ["MesAnoVenc"], this.GXValidFnc[250], "AV69SdtGridProdutoEtiqueta");
   this.addGridBCProperty("Sdtgridprodutoetiqueta", ["Quantidade"], this.GXValidFnc[251], "AV69SdtGridProdutoEtiqueta");
   this.addGridBCProperty("Sdtgridprodutoetiqueta", ["Atributo1"], this.GXValidFnc[252], "AV69SdtGridProdutoEtiqueta");
   this.addGridBCProperty("Sdtgridprodutoetiqueta", ["Atributo2"], this.GXValidFnc[253], "AV69SdtGridProdutoEtiqueta");
   this.addGridBCProperty("Sdtgridprodutoetiqueta", ["Atributo3"], this.GXValidFnc[254], "AV69SdtGridProdutoEtiqueta");
   this.addGridBCProperty("Sdtgridprodutoetiqueta", ["Atributo4"], this.GXValidFnc[255], "AV69SdtGridProdutoEtiqueta");
   this.addGridBCProperty("Sdtgridprodutoetiqueta", ["Atributo5"], this.GXValidFnc[256], "AV69SdtGridProdutoEtiqueta");
   this.addGridBCProperty("Sdtgridprodutoetiqueta", ["Indice"], this.GXValidFnc[259], "AV69SdtGridProdutoEtiqueta");
   this.addGridBCProperty("Sdtgridprodutoetiqueta", ["ProdutoFamiliaId"], this.GXValidFnc[260], "AV69SdtGridProdutoEtiqueta");
   this.addGridBCProperty("Sdtgridprodutoetiqueta", ["ProdutoDescricaoComp"], this.GXValidFnc[261], "AV69SdtGridProdutoEtiqueta");
   this.addGridBCProperty("Sdtgridprodutoetiqueta", ["ProdutoCodPrincipal"], this.GXValidFnc[262], "AV69SdtGridProdutoEtiqueta");
   this.addGridBCProperty("Sdtgridprodutoetiqueta", ["ProdutoClassPrincipal"], this.GXValidFnc[263], "AV69SdtGridProdutoEtiqueta");
   this.addGridBCProperty("Sdtgridprodutoetiqueta", ["ProdutoFabId"], this.GXValidFnc[264], "AV69SdtGridProdutoEtiqueta");
   this.addGridBCProperty("Sdtgridprodutoetiqueta", ["ProdutoFabFantasia"], this.GXValidFnc[265], "AV69SdtGridProdutoEtiqueta");
   this.addGridBCProperty("Sdtgridfamilia", ["FamiliaId"], this.GXValidFnc[282], "AV58SdtGridFamilia");
   this.addGridBCProperty("Sdtgridfamilia", ["FamiliaDescricao"], this.GXValidFnc[283], "AV58SdtGridFamilia");
   this.addGridBCProperty("Sdtgridfamilia", ["Indice"], this.GXValidFnc[285], "AV58SdtGridFamilia");
   this.addGridBCProperty("Sdtgridfabricante", ["Fabricante"], this.GXValidFnc[301], "AV59SdtGridFabricante");
   this.addGridBCProperty("Sdtgridfabricante", ["FabicanteNome"], this.GXValidFnc[302], "AV59SdtGridFabricante");
   this.addGridBCProperty("Sdtgridfabricante", ["Indice"], this.GXValidFnc[304], "AV59SdtGridFabricante");
   this.addGridBCProperty("Sdtgridcodificacaoetiqueta", ["CodificacaoEstId"], this.GXValidFnc[321], "AV77SdtGridCodificacaoEtiqueta");
   this.addGridBCProperty("Sdtgridcodificacaoetiqueta", ["ProdutoCodificacaoValor"], this.GXValidFnc[322], "AV77SdtGridCodificacaoEtiqueta");
   this.addGridBCProperty("Sdtgridcodificacaoetiqueta", ["Indice"], this.GXValidFnc[324], "AV77SdtGridCodificacaoEtiqueta");
   this.addGridBCProperty("Sdtgridclassificacaoetiqueta", ["ClassificacaoEstId"], this.GXValidFnc[340], "AV78SdtGridClassificacaoEtiqueta");
   this.addGridBCProperty("Sdtgridclassificacaoetiqueta", ["ProdutoClassificacaoValor"], this.GXValidFnc[341], "AV78SdtGridClassificacaoEtiqueta");
   this.addGridBCProperty("Sdtgridclassificacaoetiqueta", ["Indice"], this.GXValidFnc[343], "AV78SdtGridClassificacaoEtiqueta");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hemiteetiqueta());
