/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:19:50.16
*/
gx.evt.autoSkip = false;
gx.define('hrelacaoinventario', false, function () {
   this.ServerClass =  "hrelacaoinventario" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV53Data=gx.fn.getDateValue("vDATA") ;
      this.AV75SNVenda=gx.fn.getControlValue("vSNVENDA") ;
      this.AV165Mensagem=gx.fn.getControlValue("vMENSAGEM") ;
      this.AV187SnInventarioLote=gx.fn.getControlValue("vSNINVENTARIOLOTE") ;
      this.AV217Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV195SdtTxtTela=gx.fn.getControlValue("vSDTTXTTELA") ;
      this.AV8EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
      this.A3227ParametroConsultaEmpresaId=gx.fn.getControlValue("PARAMETROCONSULTAEMPRESAID") ;
      this.A3228ParametroConsultaCodigo=gx.fn.getIntegerValue("PARAMETROCONSULTACODIGO",'.') ;
      this.A3234ParametroConsultaCampoUsuAlt=gx.fn.getControlValue("PARAMETROCONSULTACAMPOUSUALT") ;
      this.A3230ParametroConsultaCampoCod=gx.fn.getControlValue("PARAMETROCONSULTACAMPOCOD") ;
      this.AV170SNNovaLinhaProduto=gx.fn.getControlValue("vSNNOVALINHAPRODUTO") ;
      this.AV21SNErro=gx.fn.getControlValue("vSNERRO") ;
      this.AV62SNExcluiProduto=gx.fn.getControlValue("vSNEXCLUIPRODUTO") ;
      this.AV171SNNovaLinhaFamilia=gx.fn.getControlValue("vSNNOVALINHAFAMILIA") ;
      this.AV86SNExcluiFamilia=gx.fn.getControlValue("vSNEXCLUIFAMILIA") ;
      this.AV172SNNovaLinhaFabricante=gx.fn.getControlValue("vSNNOVALINHAFABRICANTE") ;
      this.AV91SNExcluiFabricante=gx.fn.getControlValue("vSNEXCLUIFABRICANTE") ;
      this.AV173SNNovaLinhaClassificacao=gx.fn.getControlValue("vSNNOVALINHACLASSIFICACAO") ;
      this.AV97SNExcluiClassificacao=gx.fn.getControlValue("vSNEXCLUICLASSIFICACAO") ;
      this.AV174SNNovaLinhaCodificacao=gx.fn.getControlValue("vSNNOVALINHACODIFICACAO") ;
      this.AV103SNExcluiCodificacao=gx.fn.getControlValue("vSNEXCLUICODIFICACAO") ;
      this.AV56SdtProdutoRelProduto=gx.fn.getControlValue("vSDTPRODUTORELPRODUTO") ;
   };
   this.Validv_Parametroconsultacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPARAMETROCONSULTACODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Precoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRECOID");
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
   this.Validv_Produtofamiliaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOFAMILIAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtofabricanteid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOFABRICANTEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Classificacaoestidgrid=function()
   {
      gx.ajax.validSrvEvt("dyncall","validv_Classificacaoestidgrid",["gx.O.AV96ClassificacaoEstIdGrid", "gx.O.AV95ProdutoClassificacaoValor"],["AV95ProdutoClassificacaoValor"]);
      return true;
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
   this.Validv_Parametroconsultaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPARAMETROCONSULTAEMPRESAID");
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
   this.Validv_Familiaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFAMILIAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Classificacaoestempresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","validv_Classificacaoestempresaid",["gx.O.AV104ClassificacaoEstEmpresaId", "gx.O.AV96ClassificacaoEstIdGrid"],["AV96ClassificacaoEstIdGrid"]);
      return true;
   }
   this.Validv_Codificacaoestempresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","validv_Codificacaoestempresaid",["gx.O.AV102CodificacaoEstEmpresaId", "gx.O.AV100CodificacaoEstIdGrid"],["AV100CodificacaoEstIdGrid"]);
      return true;
   }
   this.Validv_Classificacaoestidgrid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCLASSIFICACAOESTIDGRID");
         this.AnyError  = 0;
         gxajaxCallCrl(["AV96ClassificacaoEstIdGrid"],"vPRODUTOCLASSIFICACAOVALOR");
      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtofabricanteid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOFABRICANTEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtofamiliaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOFAMILIAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s252_client=function()
   {
      gx.fn.setCtrlProperty("BTNIMPRIMIR","Enabled", 1 );
      gx.fn.setCtrlProperty("vPARAMETROCONSULTACODIGO","Enabled", 1 );
      gx.fn.setCtrlProperty("vORDENACAO","Enabled", 1 );
      gx.fn.setCtrlProperty("vTIPOSALDO","Enabled", 1 );
      gx.fn.setCtrlProperty("vDATAREFERENCIA","Enabled", 1 );
      gx.fn.setCtrlProperty("vPRECOIMPRESSO","Enabled", 1 );
      gx.fn.setCtrlProperty("vENCADERNACAO","Enabled", 1 );
      gx.fn.setCtrlProperty("vSNSALTARPAGINA","Enabled", 1 );
      gx.fn.setCtrlProperty("vSNSALTARLINHA","Enabled", 1 );
      gx.fn.setCtrlProperty("vSNGERARCSV","Enabled", 1 );
      gx.fn.setCtrlProperty("vSNIMPFOTOPRODUTO","Enabled", 1 );
      gx.fn.setCtrlProperty("FILTRARFILIAL","Enabled", 1 );
      gx.fn.setCtrlProperty("vNOMEPRODUTOINI","Enabled", 1 );
      gx.fn.setCtrlProperty("vNOMEPRODUTOFIN","Enabled", 1 );
      gx.fn.setCtrlProperty("vPRODUTOREFERENCIAINI","Enabled", 1 );
      gx.fn.setCtrlProperty("vPRODUTOREFERENCIAFIN","Enabled", 1 );
      gx.fn.setCtrlProperty("vLOTEPRODUTOLOCALINI","Enabled", 1 );
      gx.fn.setCtrlProperty("vLOTEPRODUTOLOCALFIN","Enabled", 1 );
      gx.fn.setCtrlProperty("vPESSOAID","Enabled", 1 );
      gx.fn.setCtrlProperty("vESQUEMACODIGO","Enabled", 1 );
      gx.fn.setCtrlProperty("vNODOCUMENTO","Enabled", 1 );
      gx.fn.setCtrlProperty("vDATAENTRADAINI","Enabled", 1 );
      gx.fn.setCtrlProperty("vDATAENTRADAFIN","Enabled", 1 );
      gx.fn.setCtrlProperty("vDATASAIDAINI","Enabled", 1 );
      gx.fn.setCtrlProperty("vDATASAIDAFIN","Enabled", 1 );
      gx.fn.setCtrlProperty("vPRODUTOSITUACAO","Enabled", 1 );
      gx.fn.setCtrlProperty("vPRODUTOTIPO","Enabled", 1 );
      gx.fn.setCtrlProperty("FILTRARLOTE","Enabled", 1 );
      gx.fn.setCtrlProperty("INCLUIPRODUTO","Enabled", 1 );
      gx.fn.setCtrlProperty("vPRODUTOID","Enabled", 1 );
      gx.fn.setCtrlProperty("vPROMPTPRODUTO","Enabled", 1 );
      gx.fn.setCtrlProperty("vPRODUTODESCRICAORESUMIDA","Enabled", 1 );
      gx.fn.setCtrlProperty("vEXCLINHAPRODUTO","Enabled", 1 );
      gx.fn.setCtrlProperty("INCLUIFAMILIA","Enabled", 1 );
      gx.fn.setCtrlProperty("vPRODUTOFAMILIAID","Enabled", 1 );
      gx.fn.setCtrlProperty("vPROMPTFAMILIA","Enabled", 1 );
      gx.fn.setCtrlProperty("vPRODUTOFAMILIADESCRICAO","Enabled", 1 );
      gx.fn.setCtrlProperty("vEXCLINHAFAMILIA","Enabled", 1 );
      gx.fn.setCtrlProperty("INCLUIFABRICANTE","Enabled", 1 );
      gx.fn.setCtrlProperty("vPRODUTOFABRICANTEID","Enabled", 1 );
      gx.fn.setCtrlProperty("vPROMPTFABRICANTE","Enabled", 1 );
      gx.fn.setCtrlProperty("vPRODUTOFABRICANTEFANTASIA","Enabled", 1 );
      gx.fn.setCtrlProperty("vEXCLINHAFABRICANTE","Enabled", 1 );
      gx.fn.setCtrlProperty("INCLUICLASSIFICACAO","Enabled", 1 );
      gx.fn.setCtrlProperty("vCLASSIFICACAOESTIDGRID","Enabled", 1 );
      gx.fn.setCtrlProperty("vPRODUTOCLASSIFICACAOVALOR","Enabled", 1 );
      gx.fn.setCtrlProperty("vEXCLINHACLASSIFICACAO","Enabled", 1 );
      gx.fn.setCtrlProperty("INCLUICODIFICACAO","Enabled", 1 );
      gx.fn.setCtrlProperty("vCODIFICACAOESTIDGRID","Enabled", 1 );
      gx.fn.setCtrlProperty("vPRODUTOCODIFICACAOVALOR","Enabled", 1 );
      gx.fn.setCtrlProperty("vEXCLINHACODIFICACAO","Enabled", 1 );
   };
   this.s342_client=function()
   {
      this.AV21SNErro =  "N"  ;
      /* Start For Each Line in Gridclassificacao */
      var rowIdx278 = 1 ;
      var currentRowIdx278 = gx.fn.currentGridRowImpl(278) ;
      var rowIdxS278 ;
      var gridObj278 = gx.O.getGridById(278,0) ;
      while ( rowIdx278 <= gridObj278.grid.rows.length )
      {
         rowIdxS278 =  gx.text.padl( gx.text.tostring( rowIdx278), 4, "0")  ;
         gridObj278.instanciateRow(gridObj278.grid.getRowById(rowIdx278 - 1));
         if ( (""==this.AV96ClassificacaoEstIdGrid) && this.AV173SNNovaLinhaClassificacao == "S" || ( (""==this.AV96ClassificacaoEstIdGrid) && ! (""==this.AV95ProdutoClassificacaoValor) ) )
         {
            this.addMessage("Informe a Classificação");
            this.AV21SNErro =  "S"  ;
         }
         if ( ! (""==this.AV96ClassificacaoEstIdGrid) && (""==this.AV95ProdutoClassificacaoValor) )
         {
            this.addMessage("Informe o Valor da Classificação");
            this.AV21SNErro =  "S"  ;
         }
         if ( this.AV21SNErro == "S" )
         {
            this.TABCSSContainer.setPosition(4) ;
         }
         rowIdx278 = gx.num.trunc( rowIdx278 + 1 ,0) ;
      }
      if ( currentRowIdx278 )
      {
         gridObj278.instanciateRow(currentRowIdx278);
      }
   };
   this.s352_client=function()
   {
      this.AV21SNErro =  "N"  ;
      /* Start For Each Line in Gridcodificacao */
      var rowIdx295 = 1 ;
      var currentRowIdx295 = gx.fn.currentGridRowImpl(295) ;
      var rowIdxS295 ;
      var gridObj295 = gx.O.getGridById(295,0) ;
      while ( rowIdx295 <= gridObj295.grid.rows.length )
      {
         rowIdxS295 =  gx.text.padl( gx.text.tostring( rowIdx295), 4, "0")  ;
         gridObj295.instanciateRow(gridObj295.grid.getRowById(rowIdx295 - 1));
         if ( (""==this.AV100CodificacaoEstIdGrid) && this.AV174SNNovaLinhaCodificacao == "S" || ( (""==this.AV100CodificacaoEstIdGrid) && ! (""==this.AV101ProdutoCodificacaoValor) ) )
         {
            this.addMessage("Informe a Codificação");
            this.AV21SNErro =  "S"  ;
         }
         if ( ! (""==this.AV100CodificacaoEstIdGrid) && (""==this.AV101ProdutoCodificacaoValor) )
         {
            this.addMessage("Informe o Valor da Codificação");
            this.AV21SNErro =  "S"  ;
         }
         if ( this.AV21SNErro == "S" )
         {
            this.TABCSSContainer.setPosition(4) ;
         }
         rowIdx295 = gx.num.trunc( rowIdx295 + 1 ,0) ;
      }
      if ( currentRowIdx295 )
      {
         gridObj295.instanciateRow(currentRowIdx295);
      }
   };
   this.e121142_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e131142_client=function()
   {
      this.executeServerEvent("FILTRARFILIAL.CLICK", true, null, false, true);
   };
   this.e141142_client=function()
   {
      this.executeServerEvent("FILTRARLOTE.CLICK", true, null, false, true);
   };
   this.e111142_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151142_client=function()
   {
      this.executeServerEvent("'LINHAGRIDPRODUTO'", true, null, false, false);
   };
   this.e281142_client=function()
   {
      this.executeServerEvent("'EXCLUILINHAGRIDPRODUTO'", true, arguments[0], false, false);
   };
   this.e161142_client=function()
   {
      this.executeServerEvent("'LINHAGRIDFAMILIA'", true, null, false, false);
   };
   this.e391142_client=function()
   {
      this.executeServerEvent("'EXCLUILINHAGRIDFAMILIA'", true, arguments[0], false, false);
   };
   this.e171142_client=function()
   {
      this.executeServerEvent("'LINHAGRIDFABRICANTE'", true, null, false, false);
   };
   this.e361142_client=function()
   {
      this.executeServerEvent("'EXCLUILINHAGRIDFABRICANTE'", true, arguments[0], false, false);
   };
   this.e181142_client=function()
   {
      this.executeServerEvent("'LINHAGRIDCLASSIFICACAO'", true, null, false, false);
   };
   this.e331142_client=function()
   {
      this.executeServerEvent("'EXCLUILINHAGRIDCLASSIFICACAO'", true, arguments[0], false, false);
   };
   this.e191142_client=function()
   {
      this.executeServerEvent("'LINHAGRIDCODIFICACAO'", true, null, false, false);
   };
   this.e311142_client=function()
   {
      this.executeServerEvent("'EXCLUILINHAGRIDCODIFICACAO'", true, arguments[0], false, false);
   };
   this.e201142_client=function()
   {
      this.executeServerEvent("VPARAMETROCONSULTACODIGO.ISVALID", true, null, false, true);
   };
   this.e211142_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e221142_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e231142_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e241142_client=function()
   {
      this.executeServerEvent("VTIPOSALDO.CLICK", true, null, false, true);
   };
   this.e291142_client=function()
   {
      this.executeServerEvent("VPRODUTOID.ISVALID", true, arguments[0], false, false);
   };
   this.e401142_client=function()
   {
      this.executeServerEvent("VPRODUTOFAMILIAID.ISVALID", true, arguments[0], false, false);
   };
   this.e371142_client=function()
   {
      this.executeServerEvent("VPRODUTOFABRICANTEID.ISVALID", true, arguments[0], false, false);
   };
   this.e341142_client=function()
   {
      this.executeServerEvent("VCLASSIFICACAOESTIDGRID.CLICK", true, arguments[0], false, false);
   };
   this.e411142_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,16,18,22,25,28,30,31,32,35,37,40,43,45,46,49,51,52,53,56,58,61,63,66,68,70,73,75,78,81,84,87,88,91,94,97,99,102,104,106,108,110,113,115,118,120,122,124,126,129,131,133,136,138,141,143,145,147,149,152,154,156,159,161,162,164,166,169,171,172,174,176,181,184,187,189,191,194,196,198,201,203,205,208,210,212,213,216,219,221,223,224,225,226,227,228,229,232,235,238,240,242,243,244,245,246,247,250,253,256,258,260,261,262,263,264,265,266,269,272,275,277,279,280,281,282,283,286,289,292,294,296,297,298,299,300,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,343,345,346,347,348];
   this.GXLastCtrlId =348;
   this.GridprodutoContainer = new gx.grid.grid(this, 2,"WbpLvl2",222,"Gridproduto","Gridproduto","GridprodutoContainer",this.CmpContext,this.IsMasterPage,"hrelacaoinventario",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridprodutoContainer = this.GridprodutoContainer;
   GridprodutoContainer.addSingleLineEdit("Produtoid",223,"vPRODUTOID","Produto","","ProdutoId","int",0,"px",10,10,"right",null,[],"Produtoid","ProdutoId",true,0,false,false,"Attribute",1,"");
   GridprodutoContainer.addBitmap("&Promptproduto","vPROMPTPRODUTO",224,0,"px",17,"px",null,"","","GridColumnImage","");
   GridprodutoContainer.addSingleLineEdit("Produtodescricaoresumida",225,"vPRODUTODESCRICAORESUMIDA","Descrição","","ProdutoDescricaoResumida","svchar",0,"px",40,40,"left",null,[],"Produtodescricaoresumida","ProdutoDescricaoResumida",true,0,false,false,"SemQuebraGrid",1,"");
   GridprodutoContainer.addBitmap("&Exclinhaproduto","vEXCLINHAPRODUTO",226,0,"px",17,"px","e281142_client","","Exc","GridColumnImage","");
   GridprodutoContainer.addSingleLineEdit("Controlalinhaproduto",227,"vCONTROLALINHAPRODUTO","Controla Linha Produto","","ControlaLinhaProduto","int",0,"px",10,10,"right",null,[],"Controlalinhaproduto","ControlaLinhaProduto",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridprodutoContainer);
   this.GridfamiliaContainer = new gx.grid.grid(this, 18,"WbpLvl18",241,"Gridfamilia","Gridfamilia","GridfamiliaContainer",this.CmpContext,this.IsMasterPage,"hrelacaoinventario",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridfamiliaContainer = this.GridfamiliaContainer;
   GridfamiliaContainer.addSingleLineEdit("Produtofamiliaid",242,"vPRODUTOFAMILIAID","Família","","ProdutoFamiliaId","char",0,"px",15,15,"left",null,[],"Produtofamiliaid","ProdutoFamiliaId",true,0,false,false,"Attribute",1,"");
   GridfamiliaContainer.addBitmap("&Promptfamilia","vPROMPTFAMILIA",243,0,"px",17,"px",null,"","","GridColumnImage","");
   GridfamiliaContainer.addSingleLineEdit("Produtofamiliadescricao",244,"vPRODUTOFAMILIADESCRICAO","Descrição","","ProdutoFamiliaDescricao","svchar",350,"px",30,30,"left",null,[],"Produtofamiliadescricao","ProdutoFamiliaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridfamiliaContainer.addBitmap("&Exclinhafamilia","vEXCLINHAFAMILIA",245,0,"px",17,"px","e391142_client","","Exc","GridColumnImage","");
   GridfamiliaContainer.addSingleLineEdit("Controlalinhafamilia",246,"vCONTROLALINHAFAMILIA","Controla Linha Familia","","ControlaLinhaFamilia","int",0,"px",10,10,"right",null,[],"Controlalinhafamilia","ControlaLinhaFamilia",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridfamiliaContainer);
   this.GridfabricanteContainer = new gx.grid.grid(this, 20,"WbpLvl20",259,"Gridfabricante","Gridfabricante","GridfabricanteContainer",this.CmpContext,this.IsMasterPage,"hrelacaoinventario",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridfabricanteContainer = this.GridfabricanteContainer;
   GridfabricanteContainer.addSingleLineEdit("Produtofabricanteid",260,"vPRODUTOFABRICANTEID","Fabricante","","ProdutoFabricanteId","int",0,"px",7,7,"right",null,[],"Produtofabricanteid","ProdutoFabricanteId",true,0,false,false,"Attribute",1,"");
   GridfabricanteContainer.addBitmap("&Promptfabricante","vPROMPTFABRICANTE",261,0,"px",17,"px",null,"","","GridColumnImage","");
   GridfabricanteContainer.addSingleLineEdit("Produtofabricantefantasia",262,"vPRODUTOFABRICANTEFANTASIA","Nome","","ProdutoFabricanteFantasia","svchar",350,"px",60,60,"left",null,[],"Produtofabricantefantasia","ProdutoFabricanteFantasia",true,0,false,false,"SemQuebraGrid",1,"");
   GridfabricanteContainer.addBitmap("&Exclinhafabricante","vEXCLINHAFABRICANTE",263,0,"px",17,"px","e361142_client","","Exc","GridColumnImage","");
   GridfabricanteContainer.addSingleLineEdit("Controlalinhafabricante",264,"vCONTROLALINHAFABRICANTE","Controla Linha Fabricante","","ControlaLinhaFabricante","int",0,"px",10,10,"right",null,[],"Controlalinhafabricante","ControlaLinhaFabricante",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridfabricanteContainer);
   this.GridclassificacaoContainer = new gx.grid.grid(this, 22,"WbpLvl22",278,"Gridclassificacao","Gridclassificacao","GridclassificacaoContainer",this.CmpContext,this.IsMasterPage,"hrelacaoinventario",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridclassificacaoContainer = this.GridclassificacaoContainer;
   GridclassificacaoContainer.addComboBox("Classificacaoestidgrid",279,"vCLASSIFICACAOESTIDGRID","Classificação","ClassificacaoEstIdGrid","char","e341142_client",1,true,false,0,"px","");
   GridclassificacaoContainer.addComboBox("Produtoclassificacaovalor",280,"vPRODUTOCLASSIFICACAOVALOR","Valor","ProdutoClassificacaoValor","char",null,1,true,false,0,"px","");
   GridclassificacaoContainer.addBitmap("&Exclinhaclassificacao","vEXCLINHACLASSIFICACAO",281,0,"px",17,"px","e331142_client","","Exc","GridColumnImage","");
   GridclassificacaoContainer.addSingleLineEdit("Controlalinhaclassificacao",282,"vCONTROLALINHACLASSIFICACAO","Controla Linha Classificacao","","ControlaLinhaClassificacao","int",0,"px",10,10,"right",null,[],"Controlalinhaclassificacao","ControlaLinhaClassificacao",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridclassificacaoContainer);
   this.GridcodificacaoContainer = new gx.grid.grid(this, 23,"WbpLvl23",295,"Gridcodificacao","Gridcodificacao","GridcodificacaoContainer",this.CmpContext,this.IsMasterPage,"hrelacaoinventario",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridcodificacaoContainer = this.GridcodificacaoContainer;
   GridcodificacaoContainer.addComboBox("Codificacaoestidgrid",296,"vCODIFICACAOESTIDGRID","Codificação","CodificacaoEstIdGrid","char",null,1,true,false,0,"px","");
   GridcodificacaoContainer.addSingleLineEdit("Produtocodificacaovalor",297,"vPRODUTOCODIFICACAOVALOR","Valor","","ProdutoCodificacaoValor","char",0,"px",20,20,"left",null,[],"Produtocodificacaovalor","ProdutoCodificacaoValor",true,0,false,false,"Attribute",1,"");
   GridcodificacaoContainer.addBitmap("&Exclinhacodificacao","vEXCLINHACODIFICACAO",298,0,"px",17,"px","e311142_client","","Exc","GridColumnImage","");
   GridcodificacaoContainer.addSingleLineEdit("Controlalinhacodificacao",299,"vCONTROLALINHACODIFICACAO","Controla Linha Codificacao","","ControlaLinhaCodificacao","int",0,"px",10,10,"right",null,[],"Controlalinhacodificacao","ControlaLinhaCodificacao",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridcodificacaoContainer);
   this.TABCSSContainer = gx.uc.getNew(this, 21, 14, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV197Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV197Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV197Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "hrelacaoinventario_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABTXT",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV139TxtTela",gxold:"OV139TxtTela",gxvar:"AV139TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV139TxtTela=Value},v2z:function(Value){gx.O.ZV139TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV139TxtTela)},c2v:function(){gx.O.AV139TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"IMAGE2",grid:0};
   GXValidFnc[18]={fld:"IMAGE1",grid:0};
   GXValidFnc[22]={fld:"TAB1",grid:0};
   GXValidFnc[25]={fld:"TABMODELO",grid:0};
   GXValidFnc[28]={fld:"TXTMODELORELATORIO", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Parametroconsultacodigo,isvalid:'e201142_client',rgrid:[],fld:"vPARAMETROCONSULTACODIGO",gxz:"ZV26ParametroConsultaCodigo",gxold:"OV26ParametroConsultaCodigo",gxvar:"AV26ParametroConsultaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26ParametroConsultaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26ParametroConsultaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPARAMETROCONSULTACODIGO",gx.O.AV26ParametroConsultaCodigo,0)},c2v:function(){gx.O.AV26ParametroConsultaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPARAMETROCONSULTACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPARAMETROCONSULTADESCRICAO",gxz:"ZV27ParametroConsultaDescricao",gxold:"OV27ParametroConsultaDescricao",gxvar:"AV27ParametroConsultaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ParametroConsultaDescricao=Value},v2z:function(Value){gx.O.ZV27ParametroConsultaDescricao=Value},v2c:function(){gx.fn.setControlValue("vPARAMETROCONSULTADESCRICAO",gx.O.AV27ParametroConsultaDescricao,0)},c2v:function(){gx.O.AV27ParametroConsultaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPARAMETROCONSULTADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TABLE6",grid:0};
   GXValidFnc[35]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDENACAO",gxz:"ZV13Ordenacao",gxold:"OV13Ordenacao",gxvar:"AV13Ordenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV13Ordenacao=Value},v2z:function(Value){gx.O.ZV13Ordenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vORDENACAO",gx.O.AV13Ordenacao)},c2v:function(){gx.O.AV13Ordenacao=this.val()},val:function(){return gx.fn.getControlValue("vORDENACAO")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TABTIPOSALDO",grid:0};
   GXValidFnc[43]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOSALDO",gxz:"ZV48TipoSaldo",gxold:"OV48TipoSaldo",gxvar:"AV48TipoSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV48TipoSaldo=Value},v2z:function(Value){gx.O.ZV48TipoSaldo=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOSALDO",gx.O.AV48TipoSaldo)},c2v:function(){gx.O.AV48TipoSaldo=this.val()},val:function(){return gx.fn.getControlValue("vTIPOSALDO")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TABPRECO",grid:0};
   GXValidFnc[49]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precoid,isvalid:null,rgrid:[],fld:"vPRECOID",gxz:"ZV188PrecoId",gxold:"OV188PrecoId",gxvar:"AV188PrecoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV188PrecoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV188PrecoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECOID",gx.O.AV188PrecoId,0)},c2v:function(){gx.O.AV188PrecoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOID",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECODESCRICAO",gxz:"ZV189PrecoDescricao",gxold:"OV189PrecoDescricao",gxvar:"AV189PrecoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV189PrecoDescricao=Value},v2z:function(Value){gx.O.ZV189PrecoDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRECODESCRICAO",gx.O.AV189PrecoDescricao,0)},c2v:function(){gx.O.AV189PrecoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRECODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TABLE8",grid:0};
   GXValidFnc[56]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECOIMPRESSO",gxz:"ZV186PrecoImpresso",gxold:"OV186PrecoImpresso",gxvar:"AV186PrecoImpresso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV186PrecoImpresso=Value},v2z:function(Value){gx.O.ZV186PrecoImpresso=Value},v2c:function(){gx.fn.setComboBoxValue("vPRECOIMPRESSO",gx.O.AV186PrecoImpresso)},c2v:function(){gx.O.AV186PrecoImpresso=this.val()},val:function(){return gx.fn.getControlValue("vPRECOIMPRESSO")},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[63]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAREFERENCIA",gxz:"ZV47DataReferencia",gxold:"OV47DataReferencia",gxvar:"AV47DataReferencia",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47DataReferencia=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV47DataReferencia=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAREFERENCIA",gx.O.AV47DataReferencia,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV47DataReferencia=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAREFERENCIA")},nac:gx.falseFn};
   this.declareDomainHdlr( 63 , function() {
   });
   GXValidFnc[66]={fld:"TXTESPENCADERNACAO", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENCADERNACAO",gxz:"ZV181Encadernacao",gxold:"OV181Encadernacao",gxvar:"AV181Encadernacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV181Encadernacao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV181Encadernacao=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vENCADERNACAO",gx.O.AV181Encadernacao)},c2v:function(){gx.O.AV181Encadernacao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENCADERNACAO",'.')},nac:gx.falseFn};
   GXValidFnc[70]={fld:"TABSALTARLINHA",grid:0};
   GXValidFnc[73]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNSALTARLINHA",gxz:"ZV46SNSaltarLinha",gxold:"OV46SNSaltarLinha",gxvar:"AV46SNSaltarLinha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV46SNSaltarLinha=Value},v2z:function(Value){gx.O.ZV46SNSaltarLinha=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNSALTARLINHA",gx.O.AV46SNSaltarLinha,"S")},c2v:function(){gx.O.AV46SNSaltarLinha=this.val()},val:function(){return gx.fn.getControlValue("vSNSALTARLINHA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[75]={fld:"TABLE7",grid:0};
   GXValidFnc[78]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNSALTARPAGINA",gxz:"ZV45SNSaltarPagina",gxold:"OV45SNSaltarPagina",gxvar:"AV45SNSaltarPagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV45SNSaltarPagina=Value},v2z:function(Value){gx.O.ZV45SNSaltarPagina=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNSALTARPAGINA",gx.O.AV45SNSaltarPagina,"S")},c2v:function(){gx.O.AV45SNSaltarPagina=this.val()},val:function(){return gx.fn.getControlValue("vSNSALTARPAGINA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[81]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNGERARCSV",gxz:"ZV29SNGerarCSV",gxold:"OV29SNGerarCSV",gxvar:"AV29SNGerarCSV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV29SNGerarCSV=Value},v2z:function(Value){gx.O.ZV29SNGerarCSV=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNGERARCSV",gx.O.AV29SNGerarCSV,"S")},c2v:function(){gx.O.AV29SNGerarCSV=this.val()},val:function(){return gx.fn.getControlValue("vSNGERARCSV")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[84]={lvl:0,type:"svchar",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNIMPFOTOPRODUTO",gxz:"ZV200SNImpFotoProduto",gxold:"OV200SNImpFotoProduto",gxvar:"AV200SNImpFotoProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV200SNImpFotoProduto=Value},v2z:function(Value){gx.O.ZV200SNImpFotoProduto=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNIMPFOTOPRODUTO",gx.O.AV200SNImpFotoProduto,"S")},c2v:function(){gx.O.AV200SNImpFotoProduto=this.val()},val:function(){return gx.fn.getControlValue("vSNIMPFOTOPRODUTO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[87]={fld:"FILTRARFILIAL", format:0,grid:0};
   GXValidFnc[88]={lvl:0,type:"char",len:57,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALUNICA",gxz:"ZV160FilialUnica",gxold:"OV160FilialUnica",gxvar:"AV160FilialUnica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV160FilialUnica=Value},v2z:function(Value){gx.O.ZV160FilialUnica=Value},v2c:function(){gx.fn.setControlValue("vFILIALUNICA",gx.O.AV160FilialUnica,0)},c2v:function(){gx.O.AV160FilialUnica=this.val()},val:function(){return gx.fn.getControlValue("vFILIALUNICA")},nac:gx.falseFn};
   GXValidFnc[91]={fld:"TABLE9",grid:0};
   GXValidFnc[94]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[97]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[99]={fld:"TABLE16",grid:0};
   GXValidFnc[102]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMEPRODUTOINI",gxz:"ZV30NomeProdutoIni",gxold:"OV30NomeProdutoIni",gxvar:"AV30NomeProdutoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30NomeProdutoIni=Value},v2z:function(Value){gx.O.ZV30NomeProdutoIni=Value},v2c:function(){gx.fn.setControlValue("vNOMEPRODUTOINI",gx.O.AV30NomeProdutoIni,0)},c2v:function(){gx.O.AV30NomeProdutoIni=this.val()},val:function(){return gx.fn.getControlValue("vNOMEPRODUTOINI")},nac:gx.falseFn};
   GXValidFnc[104]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[106]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMEPRODUTOFIN",gxz:"ZV31NomeProdutoFin",gxold:"OV31NomeProdutoFin",gxvar:"AV31NomeProdutoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31NomeProdutoFin=Value},v2z:function(Value){gx.O.ZV31NomeProdutoFin=Value},v2c:function(){gx.fn.setControlValue("vNOMEPRODUTOFIN",gx.O.AV31NomeProdutoFin,0)},c2v:function(){gx.O.AV31NomeProdutoFin=this.val()},val:function(){return gx.fn.getControlValue("vNOMEPRODUTOFIN")},nac:gx.falseFn};
   GXValidFnc[108]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[110]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNODOCUMENTO",gxz:"ZV180NoDocumento",gxold:"OV180NoDocumento",gxvar:"AV180NoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV180NoDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV180NoDocumento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNODOCUMENTO",gx.O.AV180NoDocumento,0)},c2v:function(){gx.O.AV180NoDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNODOCUMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[113]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[115]={fld:"TABLE17",grid:0};
   GXValidFnc[118]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIAINI",gxz:"ZV35ProdutoReferenciaIni",gxold:"OV35ProdutoReferenciaIni",gxvar:"AV35ProdutoReferenciaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35ProdutoReferenciaIni=Value},v2z:function(Value){gx.O.ZV35ProdutoReferenciaIni=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIAINI",gx.O.AV35ProdutoReferenciaIni,0)},c2v:function(){gx.O.AV35ProdutoReferenciaIni=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIAINI")},nac:gx.falseFn};
   GXValidFnc[120]={fld:"TEXTBLOCK34", format:0,grid:0};
   GXValidFnc[122]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIAFIN",gxz:"ZV36ProdutoReferenciaFin",gxold:"OV36ProdutoReferenciaFin",gxvar:"AV36ProdutoReferenciaFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36ProdutoReferenciaFin=Value},v2z:function(Value){gx.O.ZV36ProdutoReferenciaFin=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIAFIN",gx.O.AV36ProdutoReferenciaFin,0)},c2v:function(){gx.O.AV36ProdutoReferenciaFin=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIAFIN")},nac:gx.falseFn};
   GXValidFnc[124]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[126]={fld:"TABLE19",grid:0};
   GXValidFnc[129]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAENTRADAINI",gxz:"ZV41DataEntradaIni",gxold:"OV41DataEntradaIni",gxvar:"AV41DataEntradaIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41DataEntradaIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV41DataEntradaIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAENTRADAINI",gx.O.AV41DataEntradaIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV41DataEntradaIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAENTRADAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 129 , function() {
   });
   GXValidFnc[131]={fld:"TEXTBLOCK36", format:0,grid:0};
   GXValidFnc[133]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAENTRADAFIN",gxz:"ZV42DataEntradaFin",gxold:"OV42DataEntradaFin",gxvar:"AV42DataEntradaFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42DataEntradaFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV42DataEntradaFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAENTRADAFIN",gx.O.AV42DataEntradaFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV42DataEntradaFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAENTRADAFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 133 , function() {
   });
   GXValidFnc[136]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[138]={fld:"TABLE18",grid:0};
   GXValidFnc[141]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOLOCALINI",gxz:"ZV39LoteProdutoLocalIni",gxold:"OV39LoteProdutoLocalIni",gxvar:"AV39LoteProdutoLocalIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39LoteProdutoLocalIni=Value},v2z:function(Value){gx.O.ZV39LoteProdutoLocalIni=Value},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOLOCALINI",gx.O.AV39LoteProdutoLocalIni,0)},c2v:function(){gx.O.AV39LoteProdutoLocalIni=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOLOCALINI")},nac:gx.falseFn};
   GXValidFnc[143]={fld:"TEXTBLOCK35", format:0,grid:0};
   GXValidFnc[145]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOLOCALFIN",gxz:"ZV40LoteProdutoLocalFin",gxold:"OV40LoteProdutoLocalFin",gxvar:"AV40LoteProdutoLocalFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40LoteProdutoLocalFin=Value},v2z:function(Value){gx.O.ZV40LoteProdutoLocalFin=Value},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOLOCALFIN",gx.O.AV40LoteProdutoLocalFin,0)},c2v:function(){gx.O.AV40LoteProdutoLocalFin=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOLOCALFIN")},nac:gx.falseFn};
   GXValidFnc[147]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[149]={fld:"TABLE20",grid:0};
   GXValidFnc[152]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATASAIDAINI",gxz:"ZV43DataSaidaIni",gxold:"OV43DataSaidaIni",gxvar:"AV43DataSaidaIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43DataSaidaIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV43DataSaidaIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATASAIDAINI",gx.O.AV43DataSaidaIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV43DataSaidaIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATASAIDAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 152 , function() {
   });
   GXValidFnc[154]={fld:"TEXTBLOCK37", format:0,grid:0};
   GXValidFnc[156]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATASAIDAFIN",gxz:"ZV44DataSaidaFin",gxold:"OV44DataSaidaFin",gxvar:"AV44DataSaidaFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44DataSaidaFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV44DataSaidaFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATASAIDAFIN",gx.O.AV44DataSaidaFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV44DataSaidaFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATASAIDAFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 156 , function() {
   });
   GXValidFnc[159]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[161]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV37PessoaId",gxold:"OV37PessoaId",gxvar:"AV37PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV37PessoaId,0)},c2v:function(){gx.O.AV37PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[162]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV38PessoaFantasia",gxold:"OV38PessoaFantasia",gxvar:"AV38PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38PessoaFantasia=Value},v2z:function(Value){gx.O.ZV38PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV38PessoaFantasia,0)},c2v:function(){gx.O.AV38PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[164]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[166]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOSITUACAO",gxz:"ZV129ProdutoSituacao",gxold:"OV129ProdutoSituacao",gxvar:"AV129ProdutoSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV129ProdutoSituacao=Value},v2z:function(Value){gx.O.ZV129ProdutoSituacao=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOSITUACAO",gx.O.AV129ProdutoSituacao)},c2v:function(){gx.O.AV129ProdutoSituacao=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSITUACAO")},nac:gx.falseFn};
   GXValidFnc[169]={fld:"TXTESQUEMA", format:0,grid:0};
   GXValidFnc[171]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Esquemacodigo,isvalid:null,rgrid:[],fld:"vESQUEMACODIGO",gxz:"ZV112EsquemaCodigo",gxold:"OV112EsquemaCodigo",gxvar:"AV112EsquemaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV112EsquemaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV112EsquemaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESQUEMACODIGO",gx.O.AV112EsquemaCodigo,0)},c2v:function(){gx.O.AV112EsquemaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESQUEMACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[172]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESQUEMADESCRICAO",gxz:"ZV114EsquemaDescricao",gxold:"OV114EsquemaDescricao",gxvar:"AV114EsquemaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV114EsquemaDescricao=Value},v2z:function(Value){gx.O.ZV114EsquemaDescricao=Value},v2c:function(){gx.fn.setControlValue("vESQUEMADESCRICAO",gx.O.AV114EsquemaDescricao,0)},c2v:function(){gx.O.AV114EsquemaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vESQUEMADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[174]={fld:"TEXTBLOCK38", format:0,grid:0};
   GXValidFnc[176]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOTIPO",gxz:"ZV203ProdutoTipo",gxold:"OV203ProdutoTipo",gxvar:"AV203ProdutoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV203ProdutoTipo=Value},v2z:function(Value){gx.O.ZV203ProdutoTipo=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOTIPO",gx.O.AV203ProdutoTipo,0)},c2v:function(){gx.O.AV203ProdutoTipo=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOTIPO")},nac:gx.falseFn};
   GXValidFnc[181]={fld:"FILTRARLOTE", format:0,grid:0};
   GXValidFnc[184]={fld:"TABLE12",grid:0};
   GXValidFnc[187]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[189]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[191]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[194]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPQTDEATUALPOS",gxz:"ZV130ImpQtdeAtualPos",gxold:"OV130ImpQtdeAtualPos",gxvar:"AV130ImpQtdeAtualPos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV130ImpQtdeAtualPos=Value},v2z:function(Value){gx.O.ZV130ImpQtdeAtualPos=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPQTDEATUALPOS",gx.O.AV130ImpQtdeAtualPos,"S")},c2v:function(){gx.O.AV130ImpQtdeAtualPos=this.val()},val:function(){return gx.fn.getControlValue("vIMPQTDEATUALPOS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[196]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPQTDEINVENTARIOPOS",gxz:"ZV133ImpQtdeInventarioPos",gxold:"OV133ImpQtdeInventarioPos",gxvar:"AV133ImpQtdeInventarioPos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV133ImpQtdeInventarioPos=Value},v2z:function(Value){gx.O.ZV133ImpQtdeInventarioPos=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPQTDEINVENTARIOPOS",gx.O.AV133ImpQtdeInventarioPos,"S")},c2v:function(){gx.O.AV133ImpQtdeInventarioPos=this.val()},val:function(){return gx.fn.getControlValue("vIMPQTDEINVENTARIOPOS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[198]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPQTDESALDOPOS",gxz:"ZV136ImpQtdeSaldoPos",gxold:"OV136ImpQtdeSaldoPos",gxvar:"AV136ImpQtdeSaldoPos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV136ImpQtdeSaldoPos=Value},v2z:function(Value){gx.O.ZV136ImpQtdeSaldoPos=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPQTDESALDOPOS",gx.O.AV136ImpQtdeSaldoPos,"S")},c2v:function(){gx.O.AV136ImpQtdeSaldoPos=this.val()},val:function(){return gx.fn.getControlValue("vIMPQTDESALDOPOS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[201]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPQTDEATUALNEG",gxz:"ZV131ImpQtdeAtualNeg",gxold:"OV131ImpQtdeAtualNeg",gxvar:"AV131ImpQtdeAtualNeg",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV131ImpQtdeAtualNeg=Value},v2z:function(Value){gx.O.ZV131ImpQtdeAtualNeg=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPQTDEATUALNEG",gx.O.AV131ImpQtdeAtualNeg,"S")},c2v:function(){gx.O.AV131ImpQtdeAtualNeg=this.val()},val:function(){return gx.fn.getControlValue("vIMPQTDEATUALNEG")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[203]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPQTDEINVENTARIONEG",gxz:"ZV134ImpQtdeInventarioNeg",gxold:"OV134ImpQtdeInventarioNeg",gxvar:"AV134ImpQtdeInventarioNeg",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV134ImpQtdeInventarioNeg=Value},v2z:function(Value){gx.O.ZV134ImpQtdeInventarioNeg=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPQTDEINVENTARIONEG",gx.O.AV134ImpQtdeInventarioNeg,"S")},c2v:function(){gx.O.AV134ImpQtdeInventarioNeg=this.val()},val:function(){return gx.fn.getControlValue("vIMPQTDEINVENTARIONEG")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[205]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPQTDESALDONEG",gxz:"ZV137ImpQtdeSaldoNeg",gxold:"OV137ImpQtdeSaldoNeg",gxvar:"AV137ImpQtdeSaldoNeg",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV137ImpQtdeSaldoNeg=Value},v2z:function(Value){gx.O.ZV137ImpQtdeSaldoNeg=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPQTDESALDONEG",gx.O.AV137ImpQtdeSaldoNeg,"S")},c2v:function(){gx.O.AV137ImpQtdeSaldoNeg=this.val()},val:function(){return gx.fn.getControlValue("vIMPQTDESALDONEG")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[208]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPQTDEATUALZER",gxz:"ZV132ImpQtdeAtualZer",gxold:"OV132ImpQtdeAtualZer",gxvar:"AV132ImpQtdeAtualZer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV132ImpQtdeAtualZer=Value},v2z:function(Value){gx.O.ZV132ImpQtdeAtualZer=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPQTDEATUALZER",gx.O.AV132ImpQtdeAtualZer,"S")},c2v:function(){gx.O.AV132ImpQtdeAtualZer=this.val()},val:function(){return gx.fn.getControlValue("vIMPQTDEATUALZER")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[210]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPQTDEINVENTARIOZER",gxz:"ZV135ImpQtdeInventarioZer",gxold:"OV135ImpQtdeInventarioZer",gxvar:"AV135ImpQtdeInventarioZer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV135ImpQtdeInventarioZer=Value},v2z:function(Value){gx.O.ZV135ImpQtdeInventarioZer=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPQTDEINVENTARIOZER",gx.O.AV135ImpQtdeInventarioZer,"S")},c2v:function(){gx.O.AV135ImpQtdeInventarioZer=this.val()},val:function(){return gx.fn.getControlValue("vIMPQTDEINVENTARIOZER")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[212]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPQTDESALDOZER",gxz:"ZV138ImpQtdeSaldoZer",gxold:"OV138ImpQtdeSaldoZer",gxvar:"AV138ImpQtdeSaldoZer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV138ImpQtdeSaldoZer=Value},v2z:function(Value){gx.O.ZV138ImpQtdeSaldoZer=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPQTDESALDOZER",gx.O.AV138ImpQtdeSaldoZer,"S")},c2v:function(){gx.O.AV138ImpQtdeSaldoZer=this.val()},val:function(){return gx.fn.getControlValue("vIMPQTDESALDOZER")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[213]={fld:"TAB2",grid:0};
   GXValidFnc[216]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[219]={fld:"INCLUIPRODUTO",grid:0};
   GXValidFnc[221]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[223]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:222,gxgrid:this.GridprodutoContainer,fnc:this.Validv_Produtoid,isvalid:'e291142_client',rgrid:[],fld:"vPRODUTOID",gxz:"ZV57ProdutoId",gxold:"OV57ProdutoId",gxvar:"AV57ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV57ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV57ProdutoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vPRODUTOID",row || gx.fn.currentGridRowImpl(222),gx.O.AV57ProdutoId,0)},c2v:function(){gx.O.AV57ProdutoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vPRODUTOID",row || gx.fn.currentGridRowImpl(222),'.')},nac:gx.falseFn};
   GXValidFnc[224]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:222,gxgrid:this.GridprodutoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPROMPTPRODUTO",gxz:"ZV64promptProduto",gxold:"OV64promptProduto",gxvar:"AV64promptProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV64promptProduto=Value},v2z:function(Value){gx.O.ZV64promptProduto=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vPROMPTPRODUTO",row || gx.fn.currentGridRowImpl(222),gx.O.AV64promptProduto,gx.O.AV225Promptproduto_GXI)},c2v:function(){gx.O.AV225Promptproduto_GXI=this.val_GXI();gx.O.AV64promptProduto=this.val()},val:function(row){return gx.fn.getGridControlValue("vPROMPTPRODUTO",row || gx.fn.currentGridRowImpl(222))},val_GXI:function(row){return gx.fn.getGridControlValue("vPROMPTPRODUTO_GXI",row || gx.fn.currentGridRowImpl(222))}, gxvar_GXI:'AV225Promptproduto_GXI',nac:gx.falseFn};
   GXValidFnc[225]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:222,gxgrid:this.GridprodutoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDA",gxz:"ZV58ProdutoDescricaoResumida",gxold:"OV58ProdutoDescricaoResumida",gxvar:"AV58ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV58ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.ZV58ProdutoDescricaoResumida=Value},v2c:function(row){gx.fn.setGridControlValue("vPRODUTODESCRICAORESUMIDA",row || gx.fn.currentGridRowImpl(222),gx.O.AV58ProdutoDescricaoResumida,0)},c2v:function(){gx.O.AV58ProdutoDescricaoResumida=this.val()},val:function(row){return gx.fn.getGridControlValue("vPRODUTODESCRICAORESUMIDA",row || gx.fn.currentGridRowImpl(222))},nac:gx.falseFn};
   GXValidFnc[226]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:222,gxgrid:this.GridprodutoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vEXCLINHAPRODUTO",gxz:"ZV65excLinhaProduto",gxold:"OV65excLinhaProduto",gxvar:"AV65excLinhaProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV65excLinhaProduto=Value},v2z:function(Value){gx.O.ZV65excLinhaProduto=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vEXCLINHAPRODUTO",row || gx.fn.currentGridRowImpl(222),gx.O.AV65excLinhaProduto,gx.O.AV226Exclinhaproduto_GXI)},c2v:function(){gx.O.AV226Exclinhaproduto_GXI=this.val_GXI();gx.O.AV65excLinhaProduto=this.val()},val:function(row){return gx.fn.getGridControlValue("vEXCLINHAPRODUTO",row || gx.fn.currentGridRowImpl(222))},val_GXI:function(row){return gx.fn.getGridControlValue("vEXCLINHAPRODUTO_GXI",row || gx.fn.currentGridRowImpl(222))}, gxvar_GXI:'AV226Exclinhaproduto_GXI',nac:gx.falseFn};
   GXValidFnc[227]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:222,gxgrid:this.GridprodutoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTROLALINHAPRODUTO",gxz:"ZV54ControlaLinhaProduto",gxold:"OV54ControlaLinhaProduto",gxvar:"AV54ControlaLinhaProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV54ControlaLinhaProduto=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV54ControlaLinhaProduto=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vCONTROLALINHAPRODUTO",row || gx.fn.currentGridRowImpl(222),gx.O.AV54ControlaLinhaProduto,0)},c2v:function(){gx.O.AV54ControlaLinhaProduto=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vCONTROLALINHAPRODUTO",row || gx.fn.currentGridRowImpl(222),'.')},nac:gx.falseFn};
   GXValidFnc[228]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[229]={fld:"TAB3",grid:0};
   GXValidFnc[232]={fld:"TABLE15",grid:0};
   GXValidFnc[235]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[238]={fld:"INCLUIFAMILIA",grid:0};
   GXValidFnc[240]={fld:"DIV3", format:2,grid:0};
   GXValidFnc[242]={lvl:18,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:241,gxgrid:this.GridfamiliaContainer,fnc:this.Validv_Produtofamiliaid,isvalid:'e401142_client',rgrid:[],fld:"vPRODUTOFAMILIAID",gxz:"ZV84ProdutoFamiliaId",gxold:"OV84ProdutoFamiliaId",gxvar:"AV84ProdutoFamiliaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV84ProdutoFamiliaId=Value},v2z:function(Value){gx.O.ZV84ProdutoFamiliaId=Value},v2c:function(row){gx.fn.setGridControlValue("vPRODUTOFAMILIAID",row || gx.fn.currentGridRowImpl(241),gx.O.AV84ProdutoFamiliaId,0)},c2v:function(){gx.O.AV84ProdutoFamiliaId=this.val()},val:function(row){return gx.fn.getGridControlValue("vPRODUTOFAMILIAID",row || gx.fn.currentGridRowImpl(241))},nac:gx.falseFn};
   GXValidFnc[243]={lvl:18,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:241,gxgrid:this.GridfamiliaContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPROMPTFAMILIA",gxz:"ZV66promptFamilia",gxold:"OV66promptFamilia",gxvar:"AV66promptFamilia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV66promptFamilia=Value},v2z:function(Value){gx.O.ZV66promptFamilia=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vPROMPTFAMILIA",row || gx.fn.currentGridRowImpl(241),gx.O.AV66promptFamilia,gx.O.AV227Promptfamilia_GXI)},c2v:function(){gx.O.AV227Promptfamilia_GXI=this.val_GXI();gx.O.AV66promptFamilia=this.val()},val:function(row){return gx.fn.getGridControlValue("vPROMPTFAMILIA",row || gx.fn.currentGridRowImpl(241))},val_GXI:function(row){return gx.fn.getGridControlValue("vPROMPTFAMILIA_GXI",row || gx.fn.currentGridRowImpl(241))}, gxvar_GXI:'AV227Promptfamilia_GXI',nac:gx.falseFn};
   GXValidFnc[244]={lvl:18,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:241,gxgrid:this.GridfamiliaContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOFAMILIADESCRICAO",gxz:"ZV87ProdutoFamiliaDescricao",gxold:"OV87ProdutoFamiliaDescricao",gxvar:"AV87ProdutoFamiliaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV87ProdutoFamiliaDescricao=Value},v2z:function(Value){gx.O.ZV87ProdutoFamiliaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vPRODUTOFAMILIADESCRICAO",row || gx.fn.currentGridRowImpl(241),gx.O.AV87ProdutoFamiliaDescricao,0)},c2v:function(){gx.O.AV87ProdutoFamiliaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vPRODUTOFAMILIADESCRICAO",row || gx.fn.currentGridRowImpl(241))},nac:gx.falseFn};
   GXValidFnc[245]={lvl:18,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:241,gxgrid:this.GridfamiliaContainer,fnc:null,isvalid:null,rgrid:[],fld:"vEXCLINHAFAMILIA",gxz:"ZV67excLinhaFamilia",gxold:"OV67excLinhaFamilia",gxvar:"AV67excLinhaFamilia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV67excLinhaFamilia=Value},v2z:function(Value){gx.O.ZV67excLinhaFamilia=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vEXCLINHAFAMILIA",row || gx.fn.currentGridRowImpl(241),gx.O.AV67excLinhaFamilia,gx.O.AV228Exclinhafamilia_GXI)},c2v:function(){gx.O.AV228Exclinhafamilia_GXI=this.val_GXI();gx.O.AV67excLinhaFamilia=this.val()},val:function(row){return gx.fn.getGridControlValue("vEXCLINHAFAMILIA",row || gx.fn.currentGridRowImpl(241))},val_GXI:function(row){return gx.fn.getGridControlValue("vEXCLINHAFAMILIA_GXI",row || gx.fn.currentGridRowImpl(241))}, gxvar_GXI:'AV228Exclinhafamilia_GXI',nac:gx.falseFn};
   GXValidFnc[246]={lvl:18,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:241,gxgrid:this.GridfamiliaContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTROLALINHAFAMILIA",gxz:"ZV82ControlaLinhaFamilia",gxold:"OV82ControlaLinhaFamilia",gxvar:"AV82ControlaLinhaFamilia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV82ControlaLinhaFamilia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV82ControlaLinhaFamilia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vCONTROLALINHAFAMILIA",row || gx.fn.currentGridRowImpl(241),gx.O.AV82ControlaLinhaFamilia,0)},c2v:function(){gx.O.AV82ControlaLinhaFamilia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vCONTROLALINHAFAMILIA",row || gx.fn.currentGridRowImpl(241),'.')},nac:gx.falseFn};
   GXValidFnc[247]={fld:"DIV4", format:2,grid:0};
   GXValidFnc[250]={fld:"TABLE3",grid:0};
   GXValidFnc[253]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[256]={fld:"INCLUIFABRICANTE",grid:0};
   GXValidFnc[258]={fld:"DIV5", format:2,grid:0};
   GXValidFnc[260]={lvl:20,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:259,gxgrid:this.GridfabricanteContainer,fnc:this.Validv_Produtofabricanteid,isvalid:'e371142_client',rgrid:[],fld:"vPRODUTOFABRICANTEID",gxz:"ZV90ProdutoFabricanteId",gxold:"OV90ProdutoFabricanteId",gxvar:"AV90ProdutoFabricanteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV90ProdutoFabricanteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV90ProdutoFabricanteId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vPRODUTOFABRICANTEID",row || gx.fn.currentGridRowImpl(259),gx.O.AV90ProdutoFabricanteId,0)},c2v:function(){gx.O.AV90ProdutoFabricanteId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vPRODUTOFABRICANTEID",row || gx.fn.currentGridRowImpl(259),'.')},nac:gx.falseFn};
   GXValidFnc[261]={lvl:20,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:259,gxgrid:this.GridfabricanteContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPROMPTFABRICANTE",gxz:"ZV68promptFabricante",gxold:"OV68promptFabricante",gxvar:"AV68promptFabricante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV68promptFabricante=Value},v2z:function(Value){gx.O.ZV68promptFabricante=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vPROMPTFABRICANTE",row || gx.fn.currentGridRowImpl(259),gx.O.AV68promptFabricante,gx.O.AV229Promptfabricante_GXI)},c2v:function(){gx.O.AV229Promptfabricante_GXI=this.val_GXI();gx.O.AV68promptFabricante=this.val()},val:function(row){return gx.fn.getGridControlValue("vPROMPTFABRICANTE",row || gx.fn.currentGridRowImpl(259))},val_GXI:function(row){return gx.fn.getGridControlValue("vPROMPTFABRICANTE_GXI",row || gx.fn.currentGridRowImpl(259))}, gxvar_GXI:'AV229Promptfabricante_GXI',nac:gx.falseFn};
   GXValidFnc[262]={lvl:20,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:259,gxgrid:this.GridfabricanteContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOFABRICANTEFANTASIA",gxz:"ZV92ProdutoFabricanteFantasia",gxold:"OV92ProdutoFabricanteFantasia",gxvar:"AV92ProdutoFabricanteFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV92ProdutoFabricanteFantasia=Value},v2z:function(Value){gx.O.ZV92ProdutoFabricanteFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("vPRODUTOFABRICANTEFANTASIA",row || gx.fn.currentGridRowImpl(259),gx.O.AV92ProdutoFabricanteFantasia,0)},c2v:function(){gx.O.AV92ProdutoFabricanteFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("vPRODUTOFABRICANTEFANTASIA",row || gx.fn.currentGridRowImpl(259))},nac:gx.falseFn};
   GXValidFnc[263]={lvl:20,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:259,gxgrid:this.GridfabricanteContainer,fnc:null,isvalid:null,rgrid:[],fld:"vEXCLINHAFABRICANTE",gxz:"ZV69excLinhaFabricante",gxold:"OV69excLinhaFabricante",gxvar:"AV69excLinhaFabricante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV69excLinhaFabricante=Value},v2z:function(Value){gx.O.ZV69excLinhaFabricante=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vEXCLINHAFABRICANTE",row || gx.fn.currentGridRowImpl(259),gx.O.AV69excLinhaFabricante,gx.O.AV230Exclinhafabricante_GXI)},c2v:function(){gx.O.AV230Exclinhafabricante_GXI=this.val_GXI();gx.O.AV69excLinhaFabricante=this.val()},val:function(row){return gx.fn.getGridControlValue("vEXCLINHAFABRICANTE",row || gx.fn.currentGridRowImpl(259))},val_GXI:function(row){return gx.fn.getGridControlValue("vEXCLINHAFABRICANTE_GXI",row || gx.fn.currentGridRowImpl(259))}, gxvar_GXI:'AV230Exclinhafabricante_GXI',nac:gx.falseFn};
   GXValidFnc[264]={lvl:20,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:259,gxgrid:this.GridfabricanteContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTROLALINHAFABRICANTE",gxz:"ZV88ControlaLinhaFabricante",gxold:"OV88ControlaLinhaFabricante",gxvar:"AV88ControlaLinhaFabricante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV88ControlaLinhaFabricante=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV88ControlaLinhaFabricante=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vCONTROLALINHAFABRICANTE",row || gx.fn.currentGridRowImpl(259),gx.O.AV88ControlaLinhaFabricante,0)},c2v:function(){gx.O.AV88ControlaLinhaFabricante=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vCONTROLALINHAFABRICANTE",row || gx.fn.currentGridRowImpl(259),'.')},nac:gx.falseFn};
   GXValidFnc[265]={fld:"DIV6", format:2,grid:0};
   GXValidFnc[266]={fld:"TAB4",grid:0};
   GXValidFnc[269]={fld:"TABLE4",grid:0};
   GXValidFnc[272]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[275]={fld:"INCLUICLASSIFICACAO",grid:0};
   GXValidFnc[277]={fld:"DIV7", format:2,grid:0};
   GXValidFnc[279]={lvl:22,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:278,gxgrid:this.GridclassificacaoContainer,fnc:this.Validv_Classificacaoestidgrid,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOESTIDGRID",gxz:"ZV96ClassificacaoEstIdGrid",gxold:"OV96ClassificacaoEstIdGrid",gxvar:"AV96ClassificacaoEstIdGrid",ucs:[],op:[280],ip:[280,279],nacdep:[],ctrltype:"dyncombo",inputType:'text',v2v:function(Value){gx.O.AV96ClassificacaoEstIdGrid=Value},v2z:function(Value){gx.O.ZV96ClassificacaoEstIdGrid=Value},v2c:function(row){gx.fn.setGridComboBoxValue("vCLASSIFICACAOESTIDGRID",row || gx.fn.currentGridRowImpl(278),gx.O.AV96ClassificacaoEstIdGrid)},c2v:function(){gx.O.AV96ClassificacaoEstIdGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vCLASSIFICACAOESTIDGRID",row || gx.fn.currentGridRowImpl(278))},nac:gx.falseFn};
   GXValidFnc[280]={lvl:22,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:278,gxgrid:this.GridclassificacaoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCLASSIFICACAOVALOR",gxz:"ZV95ProdutoClassificacaoValor",gxold:"OV95ProdutoClassificacaoValor",gxvar:"AV95ProdutoClassificacaoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",inputType:'text',v2v:function(Value){gx.O.AV95ProdutoClassificacaoValor=Value},v2z:function(Value){gx.O.ZV95ProdutoClassificacaoValor=Value},v2c:function(row){gx.fn.setGridComboBoxValue("vPRODUTOCLASSIFICACAOVALOR",row || gx.fn.currentGridRowImpl(278),gx.O.AV95ProdutoClassificacaoValor)},c2v:function(){gx.O.AV95ProdutoClassificacaoValor=this.val()},val:function(row){return gx.fn.getGridControlValue("vPRODUTOCLASSIFICACAOVALOR",row || gx.fn.currentGridRowImpl(278))},nac:gx.falseFn};
   GXValidFnc[281]={lvl:22,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:278,gxgrid:this.GridclassificacaoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vEXCLINHACLASSIFICACAO",gxz:"ZV70excLinhaClassificacao",gxold:"OV70excLinhaClassificacao",gxvar:"AV70excLinhaClassificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV70excLinhaClassificacao=Value},v2z:function(Value){gx.O.ZV70excLinhaClassificacao=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vEXCLINHACLASSIFICACAO",row || gx.fn.currentGridRowImpl(278),gx.O.AV70excLinhaClassificacao,gx.O.AV231Exclinhaclassificacao_GXI)},c2v:function(){gx.O.AV231Exclinhaclassificacao_GXI=this.val_GXI();gx.O.AV70excLinhaClassificacao=this.val()},val:function(row){return gx.fn.getGridControlValue("vEXCLINHACLASSIFICACAO",row || gx.fn.currentGridRowImpl(278))},val_GXI:function(row){return gx.fn.getGridControlValue("vEXCLINHACLASSIFICACAO_GXI",row || gx.fn.currentGridRowImpl(278))}, gxvar_GXI:'AV231Exclinhaclassificacao_GXI',nac:gx.falseFn};
   GXValidFnc[282]={lvl:22,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:278,gxgrid:this.GridclassificacaoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTROLALINHACLASSIFICACAO",gxz:"ZV93ControlaLinhaClassificacao",gxold:"OV93ControlaLinhaClassificacao",gxvar:"AV93ControlaLinhaClassificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV93ControlaLinhaClassificacao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV93ControlaLinhaClassificacao=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vCONTROLALINHACLASSIFICACAO",row || gx.fn.currentGridRowImpl(278),gx.O.AV93ControlaLinhaClassificacao,0)},c2v:function(){gx.O.AV93ControlaLinhaClassificacao=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vCONTROLALINHACLASSIFICACAO",row || gx.fn.currentGridRowImpl(278),'.')},nac:gx.falseFn};
   GXValidFnc[283]={fld:"DIV8", format:2,grid:0};
   GXValidFnc[286]={fld:"TABLE5",grid:0};
   GXValidFnc[289]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[292]={fld:"INCLUICODIFICACAO",grid:0};
   GXValidFnc[294]={fld:"DIV9", format:2,grid:0};
   GXValidFnc[296]={lvl:23,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:295,gxgrid:this.GridcodificacaoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCODIFICACAOESTIDGRID",gxz:"ZV100CodificacaoEstIdGrid",gxold:"OV100CodificacaoEstIdGrid",gxvar:"AV100CodificacaoEstIdGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",inputType:'text',v2v:function(Value){gx.O.AV100CodificacaoEstIdGrid=Value},v2z:function(Value){gx.O.ZV100CodificacaoEstIdGrid=Value},v2c:function(row){gx.fn.setGridComboBoxValue("vCODIFICACAOESTIDGRID",row || gx.fn.currentGridRowImpl(295),gx.O.AV100CodificacaoEstIdGrid)},c2v:function(){gx.O.AV100CodificacaoEstIdGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vCODIFICACAOESTIDGRID",row || gx.fn.currentGridRowImpl(295))},nac:gx.falseFn};
   GXValidFnc[297]={lvl:23,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:295,gxgrid:this.GridcodificacaoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIFICACAOVALOR",gxz:"ZV101ProdutoCodificacaoValor",gxold:"OV101ProdutoCodificacaoValor",gxvar:"AV101ProdutoCodificacaoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV101ProdutoCodificacaoValor=Value},v2z:function(Value){gx.O.ZV101ProdutoCodificacaoValor=Value},v2c:function(row){gx.fn.setGridControlValue("vPRODUTOCODIFICACAOVALOR",row || gx.fn.currentGridRowImpl(295),gx.O.AV101ProdutoCodificacaoValor,0)},c2v:function(){gx.O.AV101ProdutoCodificacaoValor=this.val()},val:function(row){return gx.fn.getGridControlValue("vPRODUTOCODIFICACAOVALOR",row || gx.fn.currentGridRowImpl(295))},nac:gx.falseFn};
   GXValidFnc[298]={lvl:23,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:295,gxgrid:this.GridcodificacaoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vEXCLINHACODIFICACAO",gxz:"ZV71excLinhaCodificacao",gxold:"OV71excLinhaCodificacao",gxvar:"AV71excLinhaCodificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV71excLinhaCodificacao=Value},v2z:function(Value){gx.O.ZV71excLinhaCodificacao=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vEXCLINHACODIFICACAO",row || gx.fn.currentGridRowImpl(295),gx.O.AV71excLinhaCodificacao,gx.O.AV232Exclinhacodificacao_GXI)},c2v:function(){gx.O.AV232Exclinhacodificacao_GXI=this.val_GXI();gx.O.AV71excLinhaCodificacao=this.val()},val:function(row){return gx.fn.getGridControlValue("vEXCLINHACODIFICACAO",row || gx.fn.currentGridRowImpl(295))},val_GXI:function(row){return gx.fn.getGridControlValue("vEXCLINHACODIFICACAO_GXI",row || gx.fn.currentGridRowImpl(295))}, gxvar_GXI:'AV232Exclinhacodificacao_GXI',nac:gx.falseFn};
   GXValidFnc[299]={lvl:23,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:295,gxgrid:this.GridcodificacaoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTROLALINHACODIFICACAO",gxz:"ZV98ControlaLinhaCodificacao",gxold:"OV98ControlaLinhaCodificacao",gxvar:"AV98ControlaLinhaCodificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV98ControlaLinhaCodificacao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV98ControlaLinhaCodificacao=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vCONTROLALINHACODIFICACAO",row || gx.fn.currentGridRowImpl(295),gx.O.AV98ControlaLinhaCodificacao,0)},c2v:function(){gx.O.AV98ControlaLinhaCodificacao=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vCONTROLALINHACODIFICACAO",row || gx.fn.currentGridRowImpl(295),'.')},nac:gx.falseFn};
   GXValidFnc[300]={fld:"DIV10", format:2,grid:0};
   GXValidFnc[309]={fld:"JS", format:2,grid:0};
   GXValidFnc[310]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV19FilialEmpresaId",gxold:"OV19FilialEmpresaId",gxvar:"AV19FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV19FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV19FilialEmpresaId,0)},c2v:function(){gx.O.AV19FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[311]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Parametroconsultaempresaid,isvalid:null,rgrid:[],fld:"vPARAMETROCONSULTAEMPRESAID",gxz:"ZV28ParametroConsultaEmpresaId",gxold:"OV28ParametroConsultaEmpresaId",gxvar:"AV28ParametroConsultaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ParametroConsultaEmpresaId=Value},v2z:function(Value){gx.O.ZV28ParametroConsultaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPARAMETROCONSULTAEMPRESAID",gx.O.AV28ParametroConsultaEmpresaId,0)},c2v:function(){gx.O.AV28ParametroConsultaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPARAMETROCONSULTAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[312]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaempresaid,isvalid:null,rgrid:[],fld:"vPESSOAEMPRESAID",gxz:"ZV49PessoaEmpresaId",gxold:"OV49PessoaEmpresaId",gxvar:"AV49PessoaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49PessoaEmpresaId=Value},v2z:function(Value){gx.O.ZV49PessoaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMPRESAID",gx.O.AV49PessoaEmpresaId,0)},c2v:function(){gx.O.AV49PessoaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[313]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoempresaid,isvalid:null,rgrid:[],fld:"vPRODUTOEMPRESAID",gxz:"ZV61ProdutoEmpresaId",gxold:"OV61ProdutoEmpresaId",gxvar:"AV61ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61ProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV61ProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOEMPRESAID",gx.O.AV61ProdutoEmpresaId,0)},c2v:function(){gx.O.AV61ProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[314]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARACTER",gxz:"ZV52QtdeCaracter",gxold:"OV52QtdeCaracter",gxvar:"AV52QtdeCaracter",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52QtdeCaracter=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV52QtdeCaracter=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARACTER",gx.O.AV52QtdeCaracter,0)},c2v:function(){gx.O.AV52QtdeCaracter=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARACTER",'.')},nac:gx.falseFn};
   GXValidFnc[315]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV50Sim",gxold:"OV50Sim",gxvar:"AV50Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50Sim=Value},v2z:function(Value){gx.O.ZV50Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV50Sim,0)},c2v:function(){gx.O.AV50Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[316]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV51Nao",gxold:"OV51Nao",gxvar:"AV51Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51Nao=Value},v2z:function(Value){gx.O.ZV51Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV51Nao,0)},c2v:function(){gx.O.AV51Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[317]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUX",gxz:"ZV73IntAux",gxold:"OV73IntAux",gxvar:"AV73IntAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73IntAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV73IntAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTAUX",gx.O.AV73IntAux,0)},c2v:function(){gx.O.AV73IntAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUX",'.')},nac:gx.falseFn};
   GXValidFnc[318]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHARAUX",gxz:"ZV74CharAux",gxold:"OV74CharAux",gxvar:"AV74CharAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74CharAux=Value},v2z:function(Value){gx.O.ZV74CharAux=Value},v2c:function(){gx.fn.setControlValue("vCHARAUX",gx.O.AV74CharAux,0)},c2v:function(){gx.O.AV74CharAux=this.val()},val:function(){return gx.fn.getControlValue("vCHARAUX")},nac:gx.falseFn};
   GXValidFnc[319]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Familiaempresaid,isvalid:null,rgrid:[],fld:"vFAMILIAEMPRESAID",gxz:"ZV85FamiliaEmpresaId",gxold:"OV85FamiliaEmpresaId",gxvar:"AV85FamiliaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV85FamiliaEmpresaId=Value},v2z:function(Value){gx.O.ZV85FamiliaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAEMPRESAID",gx.O.AV85FamiliaEmpresaId,0)},c2v:function(){gx.O.AV85FamiliaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[320]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Classificacaoestempresaid,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOESTEMPRESAID",gxz:"ZV104ClassificacaoEstEmpresaId",gxold:"OV104ClassificacaoEstEmpresaId",gxvar:"AV104ClassificacaoEstEmpresaId",ucs:[],op:[279],ip:[279,320],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV104ClassificacaoEstEmpresaId=Value},v2z:function(Value){gx.O.ZV104ClassificacaoEstEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCLASSIFICACAOESTEMPRESAID",gx.O.AV104ClassificacaoEstEmpresaId,0)},c2v:function(){gx.O.AV104ClassificacaoEstEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOESTEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[321]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Codificacaoestempresaid,isvalid:null,rgrid:[],fld:"vCODIFICACAOESTEMPRESAID",gxz:"ZV102CodificacaoEstEmpresaId",gxold:"OV102CodificacaoEstEmpresaId",gxvar:"AV102CodificacaoEstEmpresaId",ucs:[],op:[296],ip:[296,321],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV102CodificacaoEstEmpresaId=Value},v2z:function(Value){gx.O.ZV102CodificacaoEstEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCODIFICACAOESTEMPRESAID",gx.O.AV102CodificacaoEstEmpresaId,0)},c2v:function(){gx.O.AV102CodificacaoEstEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCODIFICACAOESTEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[322]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARACTERRELATORIO",gxz:"ZV108QtdeCaracterRelatorio",gxold:"OV108QtdeCaracterRelatorio",gxvar:"AV108QtdeCaracterRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV108QtdeCaracterRelatorio=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV108QtdeCaracterRelatorio=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARACTERRELATORIO",gx.O.AV108QtdeCaracterRelatorio,0)},c2v:function(){gx.O.AV108QtdeCaracterRelatorio=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARACTERRELATORIO",'.')},nac:gx.falseFn};
   GXValidFnc[323]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORATRIBUTOCOMBO5",gxz:"ZV124ValorAtributoCombo5",gxold:"OV124ValorAtributoCombo5",gxvar:"AV124ValorAtributoCombo5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV124ValorAtributoCombo5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV124ValorAtributoCombo5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVALORATRIBUTOCOMBO5",gx.O.AV124ValorAtributoCombo5,0)},c2v:function(){gx.O.AV124ValorAtributoCombo5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVALORATRIBUTOCOMBO5",'.')},nac:gx.falseFn};
   GXValidFnc[324]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORATRIBUTOCOMBO4",gxz:"ZV123ValorAtributoCombo4",gxold:"OV123ValorAtributoCombo4",gxvar:"AV123ValorAtributoCombo4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV123ValorAtributoCombo4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV123ValorAtributoCombo4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVALORATRIBUTOCOMBO4",gx.O.AV123ValorAtributoCombo4,0)},c2v:function(){gx.O.AV123ValorAtributoCombo4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVALORATRIBUTOCOMBO4",'.')},nac:gx.falseFn};
   GXValidFnc[325]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORATRIBUTOCOMBO3",gxz:"ZV122ValorAtributoCombo3",gxold:"OV122ValorAtributoCombo3",gxvar:"AV122ValorAtributoCombo3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV122ValorAtributoCombo3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV122ValorAtributoCombo3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVALORATRIBUTOCOMBO3",gx.O.AV122ValorAtributoCombo3,0)},c2v:function(){gx.O.AV122ValorAtributoCombo3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVALORATRIBUTOCOMBO3",'.')},nac:gx.falseFn};
   GXValidFnc[326]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORATRIBUTOCOMBO2",gxz:"ZV121ValorAtributoCombo2",gxold:"OV121ValorAtributoCombo2",gxvar:"AV121ValorAtributoCombo2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV121ValorAtributoCombo2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV121ValorAtributoCombo2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVALORATRIBUTOCOMBO2",gx.O.AV121ValorAtributoCombo2,0)},c2v:function(){gx.O.AV121ValorAtributoCombo2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVALORATRIBUTOCOMBO2",'.')},nac:gx.falseFn};
   GXValidFnc[327]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORATRIBUTOCOMBO1",gxz:"ZV120ValorAtributoCombo1",gxold:"OV120ValorAtributoCombo1",gxvar:"AV120ValorAtributoCombo1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV120ValorAtributoCombo1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV120ValorAtributoCombo1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVALORATRIBUTOCOMBO1",gx.O.AV120ValorAtributoCombo1,0)},c2v:function(){gx.O.AV120ValorAtributoCombo1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVALORATRIBUTOCOMBO1",'.')},nac:gx.falseFn};
   GXValidFnc[328]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORATRIBUTO5",gxz:"ZV119ValorAtributo5",gxold:"OV119ValorAtributo5",gxvar:"AV119ValorAtributo5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV119ValorAtributo5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV119ValorAtributo5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVALORATRIBUTO5",gx.O.AV119ValorAtributo5,0)},c2v:function(){gx.O.AV119ValorAtributo5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVALORATRIBUTO5",'.')},nac:gx.falseFn};
   GXValidFnc[329]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORATRIBUTO4",gxz:"ZV118ValorAtributo4",gxold:"OV118ValorAtributo4",gxvar:"AV118ValorAtributo4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV118ValorAtributo4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV118ValorAtributo4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVALORATRIBUTO4",gx.O.AV118ValorAtributo4,0)},c2v:function(){gx.O.AV118ValorAtributo4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVALORATRIBUTO4",'.')},nac:gx.falseFn};
   GXValidFnc[330]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORATRIBUTO3",gxz:"ZV117ValorAtributo3",gxold:"OV117ValorAtributo3",gxvar:"AV117ValorAtributo3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV117ValorAtributo3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV117ValorAtributo3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVALORATRIBUTO3",gx.O.AV117ValorAtributo3,0)},c2v:function(){gx.O.AV117ValorAtributo3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVALORATRIBUTO3",'.')},nac:gx.falseFn};
   GXValidFnc[331]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORATRIBUTO2",gxz:"ZV116ValorAtributo2",gxold:"OV116ValorAtributo2",gxvar:"AV116ValorAtributo2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV116ValorAtributo2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV116ValorAtributo2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVALORATRIBUTO2",gx.O.AV116ValorAtributo2,0)},c2v:function(){gx.O.AV116ValorAtributo2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVALORATRIBUTO2",'.')},nac:gx.falseFn};
   GXValidFnc[332]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORATRIBUTO1",gxz:"ZV115ValorAtributo1",gxold:"OV115ValorAtributo1",gxvar:"AV115ValorAtributo1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV115ValorAtributo1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV115ValorAtributo1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVALORATRIBUTO1",gx.O.AV115ValorAtributo1,0)},c2v:function(){gx.O.AV115ValorAtributo1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVALORATRIBUTO1",'.')},nac:gx.falseFn};
   GXValidFnc[333]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNIMPRIMIR",gxz:"ZV128SNImprimir",gxold:"OV128SNImprimir",gxvar:"AV128SNImprimir",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV128SNImprimir=Value},v2z:function(Value){gx.O.ZV128SNImprimir=Value},v2c:function(){gx.fn.setControlValue("vSNIMPRIMIR",gx.O.AV128SNImprimir,0)},c2v:function(){gx.O.AV128SNImprimir=this.val()},val:function(){return gx.fn.getControlValue("vSNIMPRIMIR")},nac:gx.falseFn};
   GXValidFnc[334]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNBLOQUEIATELA",gxz:"ZV175SNBloqueiaTela",gxold:"OV175SNBloqueiaTela",gxvar:"AV175SNBloqueiaTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV175SNBloqueiaTela=Value},v2z:function(Value){gx.O.ZV175SNBloqueiaTela=Value},v2c:function(){gx.fn.setControlValue("vSNBLOQUEIATELA",gx.O.AV175SNBloqueiaTela,0)},c2v:function(){gx.O.AV175SNBloqueiaTela=this.val()},val:function(){return gx.fn.getControlValue("vSNBLOQUEIATELA")},nac:gx.falseFn};
   GXValidFnc[335]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALQTD",gxz:"ZV204FilialQtd",gxold:"OV204FilialQtd",gxvar:"AV204FilialQtd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV204FilialQtd=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV204FilialQtd=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALQTD",gx.O.AV204FilialQtd,0)},c2v:function(){gx.O.AV204FilialQtd=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALQTD",'.')},nac:gx.falseFn};
   GXValidFnc[336]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILTRARQTDEFILIAL",gxz:"ZV207FiltrarQtdeFilial",gxold:"OV207FiltrarQtdeFilial",gxvar:"AV207FiltrarQtdeFilial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV207FiltrarQtdeFilial=Value},v2z:function(Value){gx.O.ZV207FiltrarQtdeFilial=Value},v2c:function(){gx.fn.setControlValue("vFILTRARQTDEFILIAL",gx.O.AV207FiltrarQtdeFilial,0)},c2v:function(){gx.O.AV207FiltrarQtdeFilial=this.val()},val:function(){return gx.fn.getControlValue("vFILTRARQTDEFILIAL")},nac:gx.falseFn};
   GXValidFnc[337]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEFAULTTIPOSALDO",gxz:"ZV210DefaultTipoSaldo",gxold:"OV210DefaultTipoSaldo",gxvar:"AV210DefaultTipoSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV210DefaultTipoSaldo=Value},v2z:function(Value){gx.O.ZV210DefaultTipoSaldo=Value},v2c:function(){gx.fn.setControlValue("vDEFAULTTIPOSALDO",gx.O.AV210DefaultTipoSaldo,0)},c2v:function(){gx.O.AV210DefaultTipoSaldo=this.val()},val:function(){return gx.fn.getControlValue("vDEFAULTTIPOSALDO")},nac:gx.falseFn};
   GXValidFnc[338]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNPASSOU",gxz:"ZV211SNPassou",gxold:"OV211SNPassou",gxvar:"AV211SNPassou",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV211SNPassou=Value},v2z:function(Value){gx.O.ZV211SNPassou=Value},v2c:function(){gx.fn.setControlValue("vSNPASSOU",gx.O.AV211SNPassou,0)},c2v:function(){gx.O.AV211SNPassou=this.val()},val:function(){return gx.fn.getControlValue("vSNPASSOU")},nac:gx.falseFn};
   GXValidFnc[339]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMERELATIVO",gxz:"ZV11NomeRelativo",gxold:"OV11NomeRelativo",gxvar:"AV11NomeRelativo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11NomeRelativo=Value},v2z:function(Value){gx.O.ZV11NomeRelativo=Value},v2c:function(){gx.fn.setControlValue("vNOMERELATIVO",gx.O.AV11NomeRelativo,0)},c2v:function(){gx.O.AV11NomeRelativo=this.val()},val:function(){return gx.fn.getControlValue("vNOMERELATIVO")},nac:gx.falseFn};
   GXValidFnc[340]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE",gxz:"ZV213Lote",gxold:"OV213Lote",gxvar:"AV213Lote",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV213Lote=Value},v2z:function(Value){gx.O.ZV213Lote=Value},v2c:function(){gx.fn.setControlValue("vLOTE",gx.O.AV213Lote,0)},c2v:function(){gx.O.AV213Lote=this.val()},val:function(){return gx.fn.getControlValue("vLOTE")},nac:gx.falseFn};
   GXValidFnc[341]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNAGRUPARQTFILIAL",gxz:"ZV164SNAgruparQtFilial",gxold:"OV164SNAgruparQtFilial",gxvar:"AV164SNAgruparQtFilial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV164SNAgruparQtFilial=Value},v2z:function(Value){gx.O.ZV164SNAgruparQtFilial=Value},v2c:function(){gx.fn.setControlValue("vSNAGRUPARQTFILIAL",gx.O.AV164SNAgruparQtFilial,0)},c2v:function(){gx.O.AV164SNAgruparQtFilial=this.val()},val:function(){return gx.fn.getControlValue("vSNAGRUPARQTFILIAL")},nac:gx.falseFn};
   GXValidFnc[343]={fld:"BTNHELP",grid:0};
   GXValidFnc[345]={fld:"PROMPT_PARAMETROCONSULTACODIGO",grid:0};
   GXValidFnc[346]={fld:"PROMPT_PRECOID",grid:0};
   GXValidFnc[347]={fld:"PROMPT_PESSOAID",grid:0};
   GXValidFnc[348]={fld:"PROMPT_ESQUEMACODIGO",grid:0};
   this.AV139TxtTela = "" ;
   this.ZV139TxtTela = "" ;
   this.OV139TxtTela = "" ;
   this.AV26ParametroConsultaCodigo = 0 ;
   this.ZV26ParametroConsultaCodigo = 0 ;
   this.OV26ParametroConsultaCodigo = 0 ;
   this.AV27ParametroConsultaDescricao = "" ;
   this.ZV27ParametroConsultaDescricao = "" ;
   this.OV27ParametroConsultaDescricao = "" ;
   this.AV13Ordenacao = "" ;
   this.ZV13Ordenacao = "" ;
   this.OV13Ordenacao = "" ;
   this.AV48TipoSaldo = "" ;
   this.ZV48TipoSaldo = "" ;
   this.OV48TipoSaldo = "" ;
   this.AV188PrecoId = 0 ;
   this.ZV188PrecoId = 0 ;
   this.OV188PrecoId = 0 ;
   this.AV189PrecoDescricao = "" ;
   this.ZV189PrecoDescricao = "" ;
   this.OV189PrecoDescricao = "" ;
   this.AV186PrecoImpresso = "" ;
   this.ZV186PrecoImpresso = "" ;
   this.OV186PrecoImpresso = "" ;
   this.AV47DataReferencia = gx.date.nullDate() ;
   this.ZV47DataReferencia = gx.date.nullDate() ;
   this.OV47DataReferencia = gx.date.nullDate() ;
   this.AV181Encadernacao = 0 ;
   this.ZV181Encadernacao = 0 ;
   this.OV181Encadernacao = 0 ;
   this.AV46SNSaltarLinha = "" ;
   this.ZV46SNSaltarLinha = "" ;
   this.OV46SNSaltarLinha = "" ;
   this.AV45SNSaltarPagina = "" ;
   this.ZV45SNSaltarPagina = "" ;
   this.OV45SNSaltarPagina = "" ;
   this.AV29SNGerarCSV = "" ;
   this.ZV29SNGerarCSV = "" ;
   this.OV29SNGerarCSV = "" ;
   this.AV200SNImpFotoProduto = "" ;
   this.ZV200SNImpFotoProduto = "" ;
   this.OV200SNImpFotoProduto = "" ;
   this.AV160FilialUnica = "" ;
   this.ZV160FilialUnica = "" ;
   this.OV160FilialUnica = "" ;
   this.AV30NomeProdutoIni = "" ;
   this.ZV30NomeProdutoIni = "" ;
   this.OV30NomeProdutoIni = "" ;
   this.AV31NomeProdutoFin = "" ;
   this.ZV31NomeProdutoFin = "" ;
   this.OV31NomeProdutoFin = "" ;
   this.AV180NoDocumento = 0 ;
   this.ZV180NoDocumento = 0 ;
   this.OV180NoDocumento = 0 ;
   this.AV35ProdutoReferenciaIni = "" ;
   this.ZV35ProdutoReferenciaIni = "" ;
   this.OV35ProdutoReferenciaIni = "" ;
   this.AV36ProdutoReferenciaFin = "" ;
   this.ZV36ProdutoReferenciaFin = "" ;
   this.OV36ProdutoReferenciaFin = "" ;
   this.AV41DataEntradaIni = gx.date.nullDate() ;
   this.ZV41DataEntradaIni = gx.date.nullDate() ;
   this.OV41DataEntradaIni = gx.date.nullDate() ;
   this.AV42DataEntradaFin = gx.date.nullDate() ;
   this.ZV42DataEntradaFin = gx.date.nullDate() ;
   this.OV42DataEntradaFin = gx.date.nullDate() ;
   this.AV39LoteProdutoLocalIni = "" ;
   this.ZV39LoteProdutoLocalIni = "" ;
   this.OV39LoteProdutoLocalIni = "" ;
   this.AV40LoteProdutoLocalFin = "" ;
   this.ZV40LoteProdutoLocalFin = "" ;
   this.OV40LoteProdutoLocalFin = "" ;
   this.AV43DataSaidaIni = gx.date.nullDate() ;
   this.ZV43DataSaidaIni = gx.date.nullDate() ;
   this.OV43DataSaidaIni = gx.date.nullDate() ;
   this.AV44DataSaidaFin = gx.date.nullDate() ;
   this.ZV44DataSaidaFin = gx.date.nullDate() ;
   this.OV44DataSaidaFin = gx.date.nullDate() ;
   this.AV37PessoaId = 0 ;
   this.ZV37PessoaId = 0 ;
   this.OV37PessoaId = 0 ;
   this.AV38PessoaFantasia = "" ;
   this.ZV38PessoaFantasia = "" ;
   this.OV38PessoaFantasia = "" ;
   this.AV129ProdutoSituacao = "" ;
   this.ZV129ProdutoSituacao = "" ;
   this.OV129ProdutoSituacao = "" ;
   this.AV112EsquemaCodigo = 0 ;
   this.ZV112EsquemaCodigo = 0 ;
   this.OV112EsquemaCodigo = 0 ;
   this.AV114EsquemaDescricao = "" ;
   this.ZV114EsquemaDescricao = "" ;
   this.OV114EsquemaDescricao = "" ;
   this.AV203ProdutoTipo = "" ;
   this.ZV203ProdutoTipo = "" ;
   this.OV203ProdutoTipo = "" ;
   this.AV130ImpQtdeAtualPos = "" ;
   this.ZV130ImpQtdeAtualPos = "" ;
   this.OV130ImpQtdeAtualPos = "" ;
   this.AV133ImpQtdeInventarioPos = "" ;
   this.ZV133ImpQtdeInventarioPos = "" ;
   this.OV133ImpQtdeInventarioPos = "" ;
   this.AV136ImpQtdeSaldoPos = "" ;
   this.ZV136ImpQtdeSaldoPos = "" ;
   this.OV136ImpQtdeSaldoPos = "" ;
   this.AV131ImpQtdeAtualNeg = "" ;
   this.ZV131ImpQtdeAtualNeg = "" ;
   this.OV131ImpQtdeAtualNeg = "" ;
   this.AV134ImpQtdeInventarioNeg = "" ;
   this.ZV134ImpQtdeInventarioNeg = "" ;
   this.OV134ImpQtdeInventarioNeg = "" ;
   this.AV137ImpQtdeSaldoNeg = "" ;
   this.ZV137ImpQtdeSaldoNeg = "" ;
   this.OV137ImpQtdeSaldoNeg = "" ;
   this.AV132ImpQtdeAtualZer = "" ;
   this.ZV132ImpQtdeAtualZer = "" ;
   this.OV132ImpQtdeAtualZer = "" ;
   this.AV135ImpQtdeInventarioZer = "" ;
   this.ZV135ImpQtdeInventarioZer = "" ;
   this.OV135ImpQtdeInventarioZer = "" ;
   this.AV138ImpQtdeSaldoZer = "" ;
   this.ZV138ImpQtdeSaldoZer = "" ;
   this.OV138ImpQtdeSaldoZer = "" ;
   this.ZV57ProdutoId = 0 ;
   this.OV57ProdutoId = 0 ;
   this.ZV64promptProduto = "" ;
   this.OV64promptProduto = "" ;
   this.ZV58ProdutoDescricaoResumida = "" ;
   this.OV58ProdutoDescricaoResumida = "" ;
   this.ZV65excLinhaProduto = "" ;
   this.OV65excLinhaProduto = "" ;
   this.ZV54ControlaLinhaProduto = 0 ;
   this.OV54ControlaLinhaProduto = 0 ;
   this.ZV84ProdutoFamiliaId = "" ;
   this.OV84ProdutoFamiliaId = "" ;
   this.ZV66promptFamilia = "" ;
   this.OV66promptFamilia = "" ;
   this.ZV87ProdutoFamiliaDescricao = "" ;
   this.OV87ProdutoFamiliaDescricao = "" ;
   this.ZV67excLinhaFamilia = "" ;
   this.OV67excLinhaFamilia = "" ;
   this.ZV82ControlaLinhaFamilia = 0 ;
   this.OV82ControlaLinhaFamilia = 0 ;
   this.ZV90ProdutoFabricanteId = 0 ;
   this.OV90ProdutoFabricanteId = 0 ;
   this.ZV68promptFabricante = "" ;
   this.OV68promptFabricante = "" ;
   this.ZV92ProdutoFabricanteFantasia = "" ;
   this.OV92ProdutoFabricanteFantasia = "" ;
   this.ZV69excLinhaFabricante = "" ;
   this.OV69excLinhaFabricante = "" ;
   this.ZV88ControlaLinhaFabricante = 0 ;
   this.OV88ControlaLinhaFabricante = 0 ;
   this.ZV96ClassificacaoEstIdGrid = "" ;
   this.OV96ClassificacaoEstIdGrid = "" ;
   this.ZV95ProdutoClassificacaoValor = "" ;
   this.OV95ProdutoClassificacaoValor = "" ;
   this.ZV70excLinhaClassificacao = "" ;
   this.OV70excLinhaClassificacao = "" ;
   this.ZV93ControlaLinhaClassificacao = 0 ;
   this.OV93ControlaLinhaClassificacao = 0 ;
   this.ZV100CodificacaoEstIdGrid = "" ;
   this.OV100CodificacaoEstIdGrid = "" ;
   this.ZV101ProdutoCodificacaoValor = "" ;
   this.OV101ProdutoCodificacaoValor = "" ;
   this.ZV71excLinhaCodificacao = "" ;
   this.OV71excLinhaCodificacao = "" ;
   this.ZV98ControlaLinhaCodificacao = 0 ;
   this.OV98ControlaLinhaCodificacao = 0 ;
   this.AV19FilialEmpresaId = "" ;
   this.ZV19FilialEmpresaId = "" ;
   this.OV19FilialEmpresaId = "" ;
   this.AV28ParametroConsultaEmpresaId = "" ;
   this.ZV28ParametroConsultaEmpresaId = "" ;
   this.OV28ParametroConsultaEmpresaId = "" ;
   this.AV49PessoaEmpresaId = "" ;
   this.ZV49PessoaEmpresaId = "" ;
   this.OV49PessoaEmpresaId = "" ;
   this.AV61ProdutoEmpresaId = "" ;
   this.ZV61ProdutoEmpresaId = "" ;
   this.OV61ProdutoEmpresaId = "" ;
   this.AV52QtdeCaracter = 0 ;
   this.ZV52QtdeCaracter = 0 ;
   this.OV52QtdeCaracter = 0 ;
   this.AV50Sim = "" ;
   this.ZV50Sim = "" ;
   this.OV50Sim = "" ;
   this.AV51Nao = "" ;
   this.ZV51Nao = "" ;
   this.OV51Nao = "" ;
   this.AV73IntAux = 0 ;
   this.ZV73IntAux = 0 ;
   this.OV73IntAux = 0 ;
   this.AV74CharAux = "" ;
   this.ZV74CharAux = "" ;
   this.OV74CharAux = "" ;
   this.AV85FamiliaEmpresaId = "" ;
   this.ZV85FamiliaEmpresaId = "" ;
   this.OV85FamiliaEmpresaId = "" ;
   this.AV104ClassificacaoEstEmpresaId = "" ;
   this.ZV104ClassificacaoEstEmpresaId = "" ;
   this.OV104ClassificacaoEstEmpresaId = "" ;
   this.AV102CodificacaoEstEmpresaId = "" ;
   this.ZV102CodificacaoEstEmpresaId = "" ;
   this.OV102CodificacaoEstEmpresaId = "" ;
   this.AV108QtdeCaracterRelatorio = 0 ;
   this.ZV108QtdeCaracterRelatorio = 0 ;
   this.OV108QtdeCaracterRelatorio = 0 ;
   this.AV124ValorAtributoCombo5 = 0 ;
   this.ZV124ValorAtributoCombo5 = 0 ;
   this.OV124ValorAtributoCombo5 = 0 ;
   this.AV123ValorAtributoCombo4 = 0 ;
   this.ZV123ValorAtributoCombo4 = 0 ;
   this.OV123ValorAtributoCombo4 = 0 ;
   this.AV122ValorAtributoCombo3 = 0 ;
   this.ZV122ValorAtributoCombo3 = 0 ;
   this.OV122ValorAtributoCombo3 = 0 ;
   this.AV121ValorAtributoCombo2 = 0 ;
   this.ZV121ValorAtributoCombo2 = 0 ;
   this.OV121ValorAtributoCombo2 = 0 ;
   this.AV120ValorAtributoCombo1 = 0 ;
   this.ZV120ValorAtributoCombo1 = 0 ;
   this.OV120ValorAtributoCombo1 = 0 ;
   this.AV119ValorAtributo5 = 0 ;
   this.ZV119ValorAtributo5 = 0 ;
   this.OV119ValorAtributo5 = 0 ;
   this.AV118ValorAtributo4 = 0 ;
   this.ZV118ValorAtributo4 = 0 ;
   this.OV118ValorAtributo4 = 0 ;
   this.AV117ValorAtributo3 = 0 ;
   this.ZV117ValorAtributo3 = 0 ;
   this.OV117ValorAtributo3 = 0 ;
   this.AV116ValorAtributo2 = 0 ;
   this.ZV116ValorAtributo2 = 0 ;
   this.OV116ValorAtributo2 = 0 ;
   this.AV115ValorAtributo1 = 0 ;
   this.ZV115ValorAtributo1 = 0 ;
   this.OV115ValorAtributo1 = 0 ;
   this.AV128SNImprimir = "" ;
   this.ZV128SNImprimir = "" ;
   this.OV128SNImprimir = "" ;
   this.AV175SNBloqueiaTela = "" ;
   this.ZV175SNBloqueiaTela = "" ;
   this.OV175SNBloqueiaTela = "" ;
   this.AV204FilialQtd = 0 ;
   this.ZV204FilialQtd = 0 ;
   this.OV204FilialQtd = 0 ;
   this.AV207FiltrarQtdeFilial = "" ;
   this.ZV207FiltrarQtdeFilial = "" ;
   this.OV207FiltrarQtdeFilial = "" ;
   this.AV210DefaultTipoSaldo = "" ;
   this.ZV210DefaultTipoSaldo = "" ;
   this.OV210DefaultTipoSaldo = "" ;
   this.AV211SNPassou = "" ;
   this.ZV211SNPassou = "" ;
   this.OV211SNPassou = "" ;
   this.AV11NomeRelativo = "" ;
   this.ZV11NomeRelativo = "" ;
   this.OV11NomeRelativo = "" ;
   this.AV213Lote = "" ;
   this.ZV213Lote = "" ;
   this.OV213Lote = "" ;
   this.AV164SNAgruparQtFilial = "" ;
   this.ZV164SNAgruparQtFilial = "" ;
   this.OV164SNAgruparQtFilial = "" ;
   this.AV139TxtTela = "" ;
   this.AV197Tab = [ ] ;
   this.AV26ParametroConsultaCodigo = 0 ;
   this.AV27ParametroConsultaDescricao = "" ;
   this.AV13Ordenacao = "" ;
   this.AV48TipoSaldo = "" ;
   this.AV188PrecoId = 0 ;
   this.AV189PrecoDescricao = "" ;
   this.AV186PrecoImpresso = "" ;
   this.AV47DataReferencia = gx.date.nullDate() ;
   this.AV181Encadernacao = 0 ;
   this.AV46SNSaltarLinha = "" ;
   this.AV45SNSaltarPagina = "" ;
   this.AV29SNGerarCSV = "" ;
   this.AV200SNImpFotoProduto = "" ;
   this.AV160FilialUnica = "" ;
   this.AV30NomeProdutoIni = "" ;
   this.AV31NomeProdutoFin = "" ;
   this.AV180NoDocumento = 0 ;
   this.AV35ProdutoReferenciaIni = "" ;
   this.AV36ProdutoReferenciaFin = "" ;
   this.AV41DataEntradaIni = gx.date.nullDate() ;
   this.AV42DataEntradaFin = gx.date.nullDate() ;
   this.AV39LoteProdutoLocalIni = "" ;
   this.AV40LoteProdutoLocalFin = "" ;
   this.AV43DataSaidaIni = gx.date.nullDate() ;
   this.AV44DataSaidaFin = gx.date.nullDate() ;
   this.AV37PessoaId = 0 ;
   this.AV38PessoaFantasia = "" ;
   this.AV129ProdutoSituacao = "" ;
   this.AV112EsquemaCodigo = 0 ;
   this.AV114EsquemaDescricao = "" ;
   this.AV203ProdutoTipo = "" ;
   this.AV130ImpQtdeAtualPos = "" ;
   this.AV133ImpQtdeInventarioPos = "" ;
   this.AV136ImpQtdeSaldoPos = "" ;
   this.AV131ImpQtdeAtualNeg = "" ;
   this.AV134ImpQtdeInventarioNeg = "" ;
   this.AV137ImpQtdeSaldoNeg = "" ;
   this.AV132ImpQtdeAtualZer = "" ;
   this.AV135ImpQtdeInventarioZer = "" ;
   this.AV138ImpQtdeSaldoZer = "" ;
   this.AV19FilialEmpresaId = "" ;
   this.AV28ParametroConsultaEmpresaId = "" ;
   this.AV49PessoaEmpresaId = "" ;
   this.AV61ProdutoEmpresaId = "" ;
   this.AV52QtdeCaracter = 0 ;
   this.AV50Sim = "" ;
   this.AV51Nao = "" ;
   this.AV73IntAux = 0 ;
   this.AV74CharAux = "" ;
   this.AV85FamiliaEmpresaId = "" ;
   this.AV104ClassificacaoEstEmpresaId = "" ;
   this.AV102CodificacaoEstEmpresaId = "" ;
   this.AV108QtdeCaracterRelatorio = 0 ;
   this.AV124ValorAtributoCombo5 = 0 ;
   this.AV123ValorAtributoCombo4 = 0 ;
   this.AV122ValorAtributoCombo3 = 0 ;
   this.AV121ValorAtributoCombo2 = 0 ;
   this.AV120ValorAtributoCombo1 = 0 ;
   this.AV119ValorAtributo5 = 0 ;
   this.AV118ValorAtributo4 = 0 ;
   this.AV117ValorAtributo3 = 0 ;
   this.AV116ValorAtributo2 = 0 ;
   this.AV115ValorAtributo1 = 0 ;
   this.AV128SNImprimir = "" ;
   this.AV175SNBloqueiaTela = "" ;
   this.AV204FilialQtd = 0 ;
   this.AV207FiltrarQtdeFilial = "" ;
   this.AV210DefaultTipoSaldo = "" ;
   this.AV211SNPassou = "" ;
   this.AV11NomeRelativo = "" ;
   this.AV213Lote = "" ;
   this.AV164SNAgruparQtFilial = "" ;
   this.AV187SnInventarioLote = "" ;
   this.AV57ProdutoId = 0 ;
   this.AV64promptProduto = "" ;
   this.AV58ProdutoDescricaoResumida = "" ;
   this.AV65excLinhaProduto = "" ;
   this.AV54ControlaLinhaProduto = 0 ;
   this.A3228ParametroConsultaCodigo = 0 ;
   this.A3227ParametroConsultaEmpresaId = "" ;
   this.AV84ProdutoFamiliaId = "" ;
   this.AV66promptFamilia = "" ;
   this.AV87ProdutoFamiliaDescricao = "" ;
   this.AV67excLinhaFamilia = "" ;
   this.AV82ControlaLinhaFamilia = 0 ;
   this.AV90ProdutoFabricanteId = 0 ;
   this.AV68promptFabricante = "" ;
   this.AV92ProdutoFabricanteFantasia = "" ;
   this.AV69excLinhaFabricante = "" ;
   this.AV88ControlaLinhaFabricante = 0 ;
   this.AV96ClassificacaoEstIdGrid = "" ;
   this.AV95ProdutoClassificacaoValor = "" ;
   this.AV70excLinhaClassificacao = "" ;
   this.AV93ControlaLinhaClassificacao = 0 ;
   this.AV100CodificacaoEstIdGrid = "" ;
   this.AV101ProdutoCodificacaoValor = "" ;
   this.AV71excLinhaCodificacao = "" ;
   this.AV98ControlaLinhaCodificacao = 0 ;
   this.A3234ParametroConsultaCampoUsuAlt = "" ;
   this.A3230ParametroConsultaCampoCod = "" ;
   this.A2915EsquemaCodigo = 0 ;
   this.A2912EsquemaDescricao = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.A3215ParametroConsultaDescricao = "" ;
   this.A2957FamiliaId = "" ;
   this.A2956FamiliaEmpresaId = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2919AtributoEsquemaUsuarioAlt = "" ;
   this.A2917AtributoEsquemaSnCadastrado = "" ;
   this.A2916AtributoEsquemaDescricao = "" ;
   this.A2921AtributoEsquemaCodigo = 0 ;
   this.A446PessoaFornecedor = "" ;
   this.A1228FilialEmpresaId = "" ;
   this.A6380InventarioData = gx.date.nullDate() ;
   this.A710PrecoId = 0 ;
   this.A709PrecoEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.A1136FilialNome = "" ;
   this.A3233ParametroConsultaCampoTitulo = "" ;
   this.A6523ParametroConsultaCampoTamanho = 0 ;
   this.A3236ParametroConsultaCampoSeq = 0 ;
   this.AV165Mensagem = "" ;
   this.AV217Pgmname = "" ;
   this.AV195SdtTxtTela = [ ] ;
   this.AV8EmpresaLogadaId = "" ;
   this.AV170SNNovaLinhaProduto = "" ;
   this.AV21SNErro = "" ;
   this.AV62SNExcluiProduto = "" ;
   this.AV171SNNovaLinhaFamilia = "" ;
   this.AV86SNExcluiFamilia = "" ;
   this.AV172SNNovaLinhaFabricante = "" ;
   this.AV91SNExcluiFabricante = "" ;
   this.AV173SNNovaLinhaClassificacao = "" ;
   this.AV97SNExcluiClassificacao = "" ;
   this.AV174SNNovaLinhaCodificacao = "" ;
   this.AV103SNExcluiCodificacao = "" ;
   this.AV56SdtProdutoRelProduto = [ ] ;
   this.Events = {"e121142_client": ["ENTER", true] ,"e131142_client": ["FILTRARFILIAL.CLICK", true] ,"e141142_client": ["FILTRARLOTE.CLICK", true] ,"e111142_client": ["'FECHAR'", true] ,"e151142_client": ["'LINHAGRIDPRODUTO'", true] ,"e281142_client": ["'EXCLUILINHAGRIDPRODUTO'", true] ,"e161142_client": ["'LINHAGRIDFAMILIA'", true] ,"e391142_client": ["'EXCLUILINHAGRIDFAMILIA'", true] ,"e171142_client": ["'LINHAGRIDFABRICANTE'", true] ,"e361142_client": ["'EXCLUILINHAGRIDFABRICANTE'", true] ,"e181142_client": ["'LINHAGRIDCLASSIFICACAO'", true] ,"e331142_client": ["'EXCLUILINHAGRIDCLASSIFICACAO'", true] ,"e191142_client": ["'LINHAGRIDCODIFICACAO'", true] ,"e311142_client": ["'EXCLUILINHAGRIDCODIFICACAO'", true] ,"e201142_client": ["VPARAMETROCONSULTACODIGO.ISVALID", true] ,"e211142_client": ["'SALVARTXT'", true] ,"e221142_client": ["VTXTTELA.CLICK", true] ,"e231142_client": ["'EXCLUIRTXT'", true] ,"e241142_client": ["VTIPOSALDO.CLICK", true] ,"e291142_client": ["VPRODUTOID.ISVALID", true] ,"e401142_client": ["VPRODUTOFAMILIAID.ISVALID", true] ,"e371142_client": ["VPRODUTOFABRICANTEID.ISVALID", true] ,"e341142_client": ["VCLASSIFICACAOESTIDGRID.CLICK", true] ,"e411142_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDPRODUTO_nFirstRecordOnPage'},{av:'GRIDPRODUTO_nEOF'},{av:'AV64promptProduto',fld:'vPROMPTPRODUTO',grid:222},{av:'AV65excLinhaProduto',fld:'vEXCLINHAPRODUTO',grid:222},{av:'AV56SdtProdutoRelProduto',fld:'vSDTPRODUTORELPRODUTO'},{av:'GRIDFAMILIA_nFirstRecordOnPage'},{av:'GRIDFAMILIA_nEOF'},{av:'AV66promptFamilia',fld:'vPROMPTFAMILIA',grid:241},{av:'AV67excLinhaFamilia',fld:'vEXCLINHAFAMILIA',grid:241},{av:'AV81SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'GRIDFABRICANTE_nFirstRecordOnPage'},{av:'GRIDFABRICANTE_nEOF'},{av:'AV68promptFabricante',fld:'vPROMPTFABRICANTE',grid:259},{av:'AV69excLinhaFabricante',fld:'vEXCLINHAFABRICANTE',grid:259},{av:'AV77SdtFabricanteRelProduto',fld:'vSDTFABRICANTERELPRODUTO'},{av:'GRIDCLASSIFICACAO_nFirstRecordOnPage'},{av:'GRIDCLASSIFICACAO_nEOF'},{av:'AV70excLinhaClassificacao',fld:'vEXCLINHACLASSIFICACAO',grid:278},{av:'AV78SdtClassificacaoRelProduto',fld:'vSDTCLASSIFICACAORELPRODUTO'},{av:'AV104ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'GRIDCODIFICACAO_nFirstRecordOnPage'},{av:'GRIDCODIFICACAO_nEOF'},{av:'AV71excLinhaCodificacao',fld:'vEXCLINHACODIFICACAO',grid:295},{av:'AV79SdtCodificacaoRelProduto',fld:'vSDTCODIFICACAORELPRODUTO'},{av:'AV102CodificacaoEstEmpresaId',fld:'vCODIFICACAOESTEMPRESAID'},{av:'AV211SNPassou',fld:'vSNPASSOU'},{av:'AV26ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO'},{av:'AV115ValorAtributo1',fld:'vVALORATRIBUTO1'},{av:'AV116ValorAtributo2',fld:'vVALORATRIBUTO2'},{av:'AV117ValorAtributo3',fld:'vVALORATRIBUTO3'},{av:'AV118ValorAtributo4',fld:'vVALORATRIBUTO4'},{av:'AV119ValorAtributo5',fld:'vVALORATRIBUTO5'},{av:'AV120ValorAtributoCombo1',fld:'vVALORATRIBUTOCOMBO1'},{av:'AV121ValorAtributoCombo2',fld:'vVALORATRIBUTOCOMBO2'},{av:'AV122ValorAtributoCombo3',fld:'vVALORATRIBUTOCOMBO3'},{av:'AV123ValorAtributoCombo4',fld:'vVALORATRIBUTOCOMBO4'},{av:'AV124ValorAtributoCombo5',fld:'vVALORATRIBUTOCOMBO5'},{av:'AV175SNBloqueiaTela',fld:'vSNBLOQUEIATELA'},{av:'AV128SNImprimir',fld:'vSNIMPRIMIR'},{av:'AV11NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV29SNGerarCSV',fld:'vSNGERARCSV'},{av:'AV165Mensagem',fld:'vMENSAGEM',hsh:true},{av:'AV204FilialQtd',fld:'vFILIALQTD'},{av:'AV187SnInventarioLote',fld:'vSNINVENTARIOLOTE'},{av:'AV217Pgmname',fld:'vPGMNAME'},{av:'AV195SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV48TipoSaldo',fld:'vTIPOSALDO'},{av:'A3227ParametroConsultaEmpresaId',fld:'PARAMETROCONSULTAEMPRESAID'},{av:'AV28ParametroConsultaEmpresaId',fld:'vPARAMETROCONSULTAEMPRESAID'},{av:'A3228ParametroConsultaCodigo',fld:'PARAMETROCONSULTACODIGO'},{av:'A3234ParametroConsultaCampoUsuAlt',fld:'PARAMETROCONSULTACAMPOUSUALT'},{av:'A3230ParametroConsultaCampoCod',fld:'PARAMETROCONSULTACAMPOCOD'},{av:'AV170SNNovaLinhaProduto',fld:'vSNNOVALINHAPRODUTO'},{av:'AV21SNErro',fld:'vSNERRO'},{av:'AV62SNExcluiProduto',fld:'vSNEXCLUIPRODUTO'},{av:'AV57ProdutoId',fld:'vPRODUTOID',grid:222},{av:'AV58ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA',grid:222},{av:'AV171SNNovaLinhaFamilia',fld:'vSNNOVALINHAFAMILIA'},{av:'AV86SNExcluiFamilia',fld:'vSNEXCLUIFAMILIA'},{av:'AV84ProdutoFamiliaId',fld:'vPRODUTOFAMILIAID',grid:241},{av:'AV87ProdutoFamiliaDescricao',fld:'vPRODUTOFAMILIADESCRICAO',grid:241},{av:'AV172SNNovaLinhaFabricante',fld:'vSNNOVALINHAFABRICANTE'},{av:'AV91SNExcluiFabricante',fld:'vSNEXCLUIFABRICANTE'},{av:'AV90ProdutoFabricanteId',fld:'vPRODUTOFABRICANTEID',grid:259},{av:'AV92ProdutoFabricanteFantasia',fld:'vPRODUTOFABRICANTEFANTASIA',grid:259},{av:'AV173SNNovaLinhaClassificacao',fld:'vSNNOVALINHACLASSIFICACAO'},{av:'AV97SNExcluiClassificacao',fld:'vSNEXCLUICLASSIFICACAO'},{av:'AV96ClassificacaoEstIdGrid',fld:'vCLASSIFICACAOESTIDGRID',grid:278},{av:'AV95ProdutoClassificacaoValor',fld:'vPRODUTOCLASSIFICACAOVALOR',grid:278},{av:'AV174SNNovaLinhaCodificacao',fld:'vSNNOVALINHACODIFICACAO'},{av:'AV103SNExcluiCodificacao',fld:'vSNEXCLUICODIFICACAO'},{av:'AV100CodificacaoEstIdGrid',fld:'vCODIFICACAOESTIDGRID',grid:295},{av:'AV101ProdutoCodificacaoValor',fld:'vPRODUTOCODIFICACAOVALOR',grid:295},{av:'AV139TxtTela',fld:'vTXTTELA'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'}],[{av:'AV213Lote',fld:'vLOTE'},{av:'AV128SNImprimir',fld:'vSNIMPRIMIR'},{av:'AV211SNPassou',fld:'vSNPASSOU'},{av:'gx.fn.getCtrlProperty("vESQUEMACODIGO","Enabled")',ctrl:'vESQUEMACODIGO',prop:'Enabled'},{av:'AV16QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV204FilialQtd',fld:'vFILIALQTD'},{av:'AV165Mensagem',fld:'vMENSAGEM',hsh:true},{av:'AV206SdtFiliaisAux',fld:'vSDTFILIAISAUX'},{av:'AV219GXV1',fld:'vGXV1'},{av:'AV176SdtFiliaisItem',fld:'vSDTFILIAISITEM'},{av:'AV164SNAgruparQtFilial',fld:'vSNAGRUPARQTFILIAL'},{av:'AV207FiltrarQtdeFilial',fld:'vFILTRARQTDEFILIAL'},{av:'gx.fn.getCtrlProperty("TABMODELO","Visible")',ctrl:'TABMODELO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABTIPOSALDO","Visible")',ctrl:'TABTIPOSALDO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABSALTARLINHA","Visible")',ctrl:'TABSALTARLINHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPRECO","Visible")',ctrl:'TABPRECO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTESPENCADERNACAO","Visible")',ctrl:'TXTESPENCADERNACAO',prop:'Visible'},{ctrl:'vENCADERNACAO'},{av:'AV13Ordenacao',fld:'vORDENACAO'},{av:'AV139TxtTela',fld:'vTXTTELA'},{av:'AV279GXV21',fld:'vGXV21'},{av:'AV196SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV163SNQtdeSaldo',fld:'vSNQTDESALDO'},{av:'AV167SNValidaInv',fld:'vSNVALIDAINV'},{av:'AV169SNObrQtde',fld:'vSNOBRQTDE'},{av:'AV161SdtFiliais',fld:'vSDTFILIAIS'},{av:'AV131ImpQtdeAtualNeg',fld:'vIMPQTDEATUALNEG'},{av:'AV130ImpQtdeAtualPos',fld:'vIMPQTDEATUALPOS'},{av:'AV132ImpQtdeAtualZer',fld:'vIMPQTDEATUALZER'},{av:'AV275GXV17',fld:'vGXV17'},{av:'gx.fn.getCtrlProperty("vIMPQTDEATUALNEG","Enabled")',ctrl:'vIMPQTDEATUALNEG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPQTDEATUALPOS","Enabled")',ctrl:'vIMPQTDEATUALPOS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPQTDEATUALZER","Enabled")',ctrl:'vIMPQTDEATUALZER',prop:'Enabled'},{av:'AV134ImpQtdeInventarioNeg',fld:'vIMPQTDEINVENTARIONEG'},{av:'AV133ImpQtdeInventarioPos',fld:'vIMPQTDEINVENTARIOPOS'},{av:'AV135ImpQtdeInventarioZer',fld:'vIMPQTDEINVENTARIOZER'},{av:'AV276GXV18',fld:'vGXV18'},{av:'gx.fn.getCtrlProperty("vIMPQTDEINVENTARIONEG","Enabled")',ctrl:'vIMPQTDEINVENTARIONEG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPQTDEINVENTARIOPOS","Enabled")',ctrl:'vIMPQTDEINVENTARIOPOS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPQTDEINVENTARIOZER","Enabled")',ctrl:'vIMPQTDEINVENTARIOZER',prop:'Enabled'},{av:'AV137ImpQtdeSaldoNeg',fld:'vIMPQTDESALDONEG'},{av:'AV136ImpQtdeSaldoPos',fld:'vIMPQTDESALDOPOS'},{av:'AV138ImpQtdeSaldoZer',fld:'vIMPQTDESALDOZER'},{av:'AV277GXV19',fld:'vGXV19'},{av:'gx.fn.getCtrlProperty("vIMPQTDESALDONEG","Enabled")',ctrl:'vIMPQTDESALDONEG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPQTDESALDOPOS","Enabled")',ctrl:'vIMPQTDESALDOPOS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPQTDESALDOZER","Enabled")',ctrl:'vIMPQTDESALDOZER',prop:'Enabled'},{av:'AV56SdtProdutoRelProduto',fld:'vSDTPRODUTORELPRODUTO'},{av:'AV81SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'AV80TemMascara',fld:'vTEMMASCARA'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV32x',fld:'vX'},{av:'AV77SdtFabricanteRelProduto',fld:'vSDTFABRICANTERELPRODUTO'},{av:'AV202Cont',fld:'vCONT'},{av:'AV246GXV3',fld:'vGXV3'},{av:'AV55SdtProdutoRelProdutoItem',fld:'vSDTPRODUTORELPRODUTOITEM'},{av:'AV247GXV4',fld:'vGXV4'},{av:'AV252GXV6',fld:'vGXV6'},{av:'AV83SdtFamiliaRelProdutoItem',fld:'vSDTFAMILIARELPRODUTOITEM'},{av:'AV253GXV7',fld:'vGXV7'},{av:'AV258GXV9',fld:'vGXV9'},{av:'AV89SdtFabricanteRelProdutoItem',fld:'vSDTFABRICANTERELPRODUTOITEM'},{av:'AV259GXV10',fld:'vGXV10'},{av:'AV78SdtClassificacaoRelProduto',fld:'vSDTCLASSIFICACAORELPRODUTO'},{av:'AV263GXV12',fld:'vGXV12'},{av:'AV94SdtClassificacaoRelProdutoItem',fld:'vSDTCLASSIFICACAORELPRODUTOITEM'},{av:'AV264GXV13',fld:'vGXV13'},{av:'AV79SdtCodificacaoRelProduto',fld:'vSDTCODIFICACAORELPRODUTO'},{av:'AV268GXV15',fld:'vGXV15'},{av:'AV99SdtCodificacaoRelProdutoItem',fld:'vSDTCODIFICACAORELPRODUTOITEM'},{av:'AV269GXV16',fld:'vGXV16'},{av:'AV45SNSaltarPagina',fld:'vSNSALTARPAGINA'},{av:'AV46SNSaltarLinha',fld:'vSNSALTARLINHA'},{av:'AV29SNGerarCSV',fld:'vSNGERARCSV'},{av:'AV200SNImpFotoProduto',fld:'vSNIMPFOTOPRODUTO'},{av:'AV175SNBloqueiaTela',fld:'vSNBLOQUEIATELA'},{ctrl:'BTNIMPRIMIR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPARAMETROCONSULTACODIGO","Enabled")',ctrl:'vPARAMETROCONSULTACODIGO',prop:'Enabled'},{ctrl:'vORDENACAO'},{ctrl:'vTIPOSALDO'},{av:'gx.fn.getCtrlProperty("vDATAREFERENCIA","Enabled")',ctrl:'vDATAREFERENCIA',prop:'Enabled'},{ctrl:'vPRECOIMPRESSO'},{av:'gx.fn.getCtrlProperty("vSNSALTARPAGINA","Enabled")',ctrl:'vSNSALTARPAGINA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNSALTARLINHA","Enabled")',ctrl:'vSNSALTARLINHA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNGERARCSV","Enabled")',ctrl:'vSNGERARCSV',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNIMPFOTOPRODUTO","Enabled")',ctrl:'vSNIMPFOTOPRODUTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("FILTRARFILIAL","Enabled")',ctrl:'FILTRARFILIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vNOMEPRODUTOINI","Enabled")',ctrl:'vNOMEPRODUTOINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vNOMEPRODUTOFIN","Enabled")',ctrl:'vNOMEPRODUTOFIN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOREFERENCIAINI","Enabled")',ctrl:'vPRODUTOREFERENCIAINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOREFERENCIAFIN","Enabled")',ctrl:'vPRODUTOREFERENCIAFIN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vLOTEPRODUTOLOCALINI","Enabled")',ctrl:'vLOTEPRODUTOLOCALINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vLOTEPRODUTOLOCALFIN","Enabled")',ctrl:'vLOTEPRODUTOLOCALFIN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPESSOAID","Enabled")',ctrl:'vPESSOAID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vNODOCUMENTO","Enabled")',ctrl:'vNODOCUMENTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAENTRADAINI","Enabled")',ctrl:'vDATAENTRADAINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAENTRADAFIN","Enabled")',ctrl:'vDATAENTRADAFIN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATASAIDAINI","Enabled")',ctrl:'vDATASAIDAINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATASAIDAFIN","Enabled")',ctrl:'vDATASAIDAFIN',prop:'Enabled'},{ctrl:'vPRODUTOSITUACAO'},{av:'gx.fn.getCtrlProperty("vPRODUTOTIPO","Enabled")',ctrl:'vPRODUTOTIPO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("FILTRARLOTE","Enabled")',ctrl:'FILTRARLOTE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("INCLUIPRODUTO","Enabled")',ctrl:'INCLUIPRODUTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOID","Enabled")',ctrl:'vPRODUTOID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPROMPTPRODUTO","Enabled")',ctrl:'vPROMPTPRODUTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTODESCRICAORESUMIDA","Enabled")',ctrl:'vPRODUTODESCRICAORESUMIDA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vEXCLINHAPRODUTO","Enabled")',ctrl:'vEXCLINHAPRODUTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("INCLUIFAMILIA","Enabled")',ctrl:'INCLUIFAMILIA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOFAMILIAID","Enabled")',ctrl:'vPRODUTOFAMILIAID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPROMPTFAMILIA","Enabled")',ctrl:'vPROMPTFAMILIA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOFAMILIADESCRICAO","Enabled")',ctrl:'vPRODUTOFAMILIADESCRICAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vEXCLINHAFAMILIA","Enabled")',ctrl:'vEXCLINHAFAMILIA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("INCLUIFABRICANTE","Enabled")',ctrl:'INCLUIFABRICANTE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOFABRICANTEID","Enabled")',ctrl:'vPRODUTOFABRICANTEID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPROMPTFABRICANTE","Enabled")',ctrl:'vPROMPTFABRICANTE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOFABRICANTEFANTASIA","Enabled")',ctrl:'vPRODUTOFABRICANTEFANTASIA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vEXCLINHAFABRICANTE","Enabled")',ctrl:'vEXCLINHAFABRICANTE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("INCLUICLASSIFICACAO","Enabled")',ctrl:'INCLUICLASSIFICACAO',prop:'Enabled'},{ctrl:'vCLASSIFICACAOESTIDGRID'},{ctrl:'vPRODUTOCLASSIFICACAOVALOR'},{av:'gx.fn.getCtrlProperty("vEXCLINHACLASSIFICACAO","Enabled")',ctrl:'vEXCLINHACLASSIFICACAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("INCLUICODIFICACAO","Enabled")',ctrl:'INCLUICODIFICACAO',prop:'Enabled'},{ctrl:'vCODIFICACAOESTIDGRID'},{av:'gx.fn.getCtrlProperty("vPRODUTOCODIFICACAOVALOR","Enabled")',ctrl:'vPRODUTOCODIFICACAOVALOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vEXCLINHACODIFICACAO","Enabled")',ctrl:'vEXCLINHACODIFICACAO',prop:'Enabled'},{av:'AV278GXV20',fld:'vGXV20'},{av:'AV26ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO'},{av:'AV48TipoSaldo',fld:'vTIPOSALDO'},{av:'AV166InventarioData',fld:'vINVENTARIODATA'},{av:'AV181Encadernacao',fld:'vENCADERNACAO'},{av:'AV30NomeProdutoIni',fld:'vNOMEPRODUTOINI'},{av:'AV31NomeProdutoFin',fld:'vNOMEPRODUTOFIN'},{av:'AV35ProdutoReferenciaIni',fld:'vPRODUTOREFERENCIAINI'},{av:'AV36ProdutoReferenciaFin',fld:'vPRODUTOREFERENCIAFIN'},{av:'AV39LoteProdutoLocalIni',fld:'vLOTEPRODUTOLOCALINI'},{av:'AV40LoteProdutoLocalFin',fld:'vLOTEPRODUTOLOCALFIN'},{av:'AV37PessoaId',fld:'vPESSOAID'},{av:'AV112EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV129ProdutoSituacao',fld:'vPRODUTOSITUACAO'},{av:'AV115ValorAtributo1',fld:'vVALORATRIBUTO1'},{av:'AV116ValorAtributo2',fld:'vVALORATRIBUTO2'},{av:'AV117ValorAtributo3',fld:'vVALORATRIBUTO3'},{av:'AV118ValorAtributo4',fld:'vVALORATRIBUTO4'},{av:'AV119ValorAtributo5',fld:'vVALORATRIBUTO5'},{av:'AV120ValorAtributoCombo1',fld:'vVALORATRIBUTOCOMBO1'},{av:'AV121ValorAtributoCombo2',fld:'vVALORATRIBUTOCOMBO2'},{av:'AV122ValorAtributoCombo3',fld:'vVALORATRIBUTOCOMBO3'},{av:'AV123ValorAtributoCombo4',fld:'vVALORATRIBUTOCOMBO4'},{av:'AV124ValorAtributoCombo5',fld:'vVALORATRIBUTOCOMBO5'},{av:'AV203ProdutoTipo',fld:'vPRODUTOTIPO'}]];
   this.EvtParms["ENTER"] = [[{av:'AV187SnInventarioLote',fld:'vSNINVENTARIOLOTE'},{av:'AV47DataReferencia',fld:'vDATAREFERENCIA'},{av:'AV48TipoSaldo',fld:'vTIPOSALDO'},{av:'AV21SNErro',fld:'vSNERRO'},{av:'A3236ParametroConsultaCampoSeq',fld:'PARAMETROCONSULTACAMPOSEQ'},{av:'A3227ParametroConsultaEmpresaId',fld:'PARAMETROCONSULTAEMPRESAID'},{av:'AV28ParametroConsultaEmpresaId',fld:'vPARAMETROCONSULTAEMPRESAID'},{av:'A3228ParametroConsultaCodigo',fld:'PARAMETROCONSULTACODIGO'},{av:'AV26ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO'},{av:'A3230ParametroConsultaCampoCod',fld:'PARAMETROCONSULTACAMPOCOD'},{av:'A3233ParametroConsultaCampoTitulo',fld:'PARAMETROCONSULTACAMPOTITULO'},{av:'A6523ParametroConsultaCampoTamanho',fld:'PARAMETROCONSULTACAMPOTAMANHO'},{av:'AV204FilialQtd',fld:'vFILIALQTD'},{av:'AV111SNPossuiLote',fld:'vSNPOSSUILOTE'},{av:'A3234ParametroConsultaCampoUsuAlt',fld:'PARAMETROCONSULTACAMPOUSUALT'},{av:'AV126SNSimilares',fld:'vSNSIMILARES'},{av:'AV127SNValidaLote',fld:'vSNVALIDALOTE'},{av:'AV163SNQtdeSaldo',fld:'vSNQTDESALDO'},{av:'AV167SNValidaInv',fld:'vSNVALIDAINV'},{av:'AV169SNObrQtde',fld:'vSNOBRQTDE'},{av:'AV113SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV214SNContrArmazem',fld:'vSNCONTRARMAZEM'},{av:'AV13Ordenacao',fld:'vORDENACAO'},{av:'AV210DefaultTipoSaldo',fld:'vDEFAULTTIPOSALDO'},{av:'AV186PrecoImpresso',fld:'vPRECOIMPRESSO'},{av:'AV188PrecoId',fld:'vPRECOID'},{av:'A709PrecoEmpresaId',fld:'PRECOEMPRESAID'},{av:'AV190PrecoEmpresaId',fld:'vPRECOEMPRESAID'},{av:'A710PrecoId',fld:'PRECOID'},{av:'AV166InventarioData',fld:'vINVENTARIODATA'},{av:'A6380InventarioData',fld:'INVENTARIODATA'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV19FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV61ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV45SNSaltarPagina',fld:'vSNSALTARPAGINA'},{av:'AV160FilialUnica',fld:'vFILIALUNICA'},{av:'AV30NomeProdutoIni',fld:'vNOMEPRODUTOINI'},{av:'AV31NomeProdutoFin',fld:'vNOMEPRODUTOFIN'},{av:'AV35ProdutoReferenciaIni',fld:'vPRODUTOREFERENCIAINI'},{av:'AV36ProdutoReferenciaFin',fld:'vPRODUTOREFERENCIAFIN'},{av:'AV39LoteProdutoLocalIni',fld:'vLOTEPRODUTOLOCALINI'},{av:'AV40LoteProdutoLocalFin',fld:'vLOTEPRODUTOLOCALFIN'},{av:'AV37PessoaId',fld:'vPESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV49PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'AV112EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV41DataEntradaIni',fld:'vDATAENTRADAINI'},{av:'AV42DataEntradaFin',fld:'vDATAENTRADAFIN'},{av:'AV43DataSaidaIni',fld:'vDATASAIDAINI'},{av:'AV44DataSaidaFin',fld:'vDATASAIDAFIN'},{av:'AV129ProdutoSituacao',fld:'vPRODUTOSITUACAO'},{av:'AV130ImpQtdeAtualPos',fld:'vIMPQTDEATUALPOS'},{av:'AV131ImpQtdeAtualNeg',fld:'vIMPQTDEATUALNEG'},{av:'AV132ImpQtdeAtualZer',fld:'vIMPQTDEATUALZER'},{av:'AV133ImpQtdeInventarioPos',fld:'vIMPQTDEINVENTARIOPOS'},{av:'AV134ImpQtdeInventarioNeg',fld:'vIMPQTDEINVENTARIONEG'},{av:'AV135ImpQtdeInventarioZer',fld:'vIMPQTDEINVENTARIOZER'},{av:'AV136ImpQtdeSaldoPos',fld:'vIMPQTDESALDOPOS'},{av:'AV137ImpQtdeSaldoNeg',fld:'vIMPQTDESALDONEG'},{av:'AV138ImpQtdeSaldoZer',fld:'vIMPQTDESALDOZER'},{av:'AV217Pgmname',fld:'vPGMNAME'},{av:'AV20FilialIdParm',fld:'vFILIALIDPARM'},{av:'AV213Lote',fld:'vLOTE'},{av:'AV142FilialId',fld:'vFILIALID'},{av:'AV161SdtFiliais',fld:'vSDTFILIAIS'},{av:'AV120ValorAtributoCombo1',fld:'vVALORATRIBUTOCOMBO1'},{av:'AV121ValorAtributoCombo2',fld:'vVALORATRIBUTOCOMBO2'},{av:'AV122ValorAtributoCombo3',fld:'vVALORATRIBUTOCOMBO3'},{av:'AV123ValorAtributoCombo4',fld:'vVALORATRIBUTOCOMBO4'},{av:'AV124ValorAtributoCombo5',fld:'vVALORATRIBUTOCOMBO5'},{av:'AV180NoDocumento',fld:'vNODOCUMENTO'},{av:'AV56SdtProdutoRelProduto',fld:'vSDTPRODUTORELPRODUTO'},{av:'AV81SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'AV77SdtFabricanteRelProduto',fld:'vSDTFABRICANTERELPRODUTO'},{av:'AV78SdtClassificacaoRelProduto',fld:'vSDTCLASSIFICACAORELPRODUTO'},{av:'AV79SdtCodificacaoRelProduto',fld:'vSDTCODIFICACAORELPRODUTO'},{av:'AV29SNGerarCSV',fld:'vSNGERARCSV'},{av:'AV203ProdutoTipo',fld:'vPRODUTOTIPO'},{av:'AV139TxtTela',fld:'vTXTTELA'},{av:'AV168SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV106ParametroConsultaCampoTitulo',fld:'vPARAMETROCONSULTACAMPOTITULO'},{av:'AV108QtdeCaracterRelatorio',fld:'vQTDECARACTERRELATORIO'},{av:'AV105ParametroConsultaCampoCod',fld:'vPARAMETROCONSULTACAMPOCOD'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2919AtributoEsquemaUsuarioAlt',fld:'ATRIBUTOESQUEMAUSUARIOALT'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'AV110ParametroConsultaCampoTamanhoAux',fld:'vPARAMETROCONSULTACAMPOTAMANHOAUX'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'AV184EsquemaCodigoQuebra',fld:'vESQUEMACODIGOQUEBRA'},{av:'GRIDPRODUTO_nFirstRecordOnPage'},{av:'GRIDPRODUTO_nEOF'},{av:'AV64promptProduto',fld:'vPROMPTPRODUTO',grid:222},{av:'AV65excLinhaProduto',fld:'vEXCLINHAPRODUTO',grid:222},{av:'AV211SNPassou',fld:'vSNPASSOU'},{av:'AV115ValorAtributo1',fld:'vVALORATRIBUTO1'},{av:'AV116ValorAtributo2',fld:'vVALORATRIBUTO2'},{av:'AV117ValorAtributo3',fld:'vVALORATRIBUTO3'},{av:'AV118ValorAtributo4',fld:'vVALORATRIBUTO4'},{av:'AV119ValorAtributo5',fld:'vVALORATRIBUTO5'},{av:'AV175SNBloqueiaTela',fld:'vSNBLOQUEIATELA'},{av:'AV128SNImprimir',fld:'vSNIMPRIMIR'},{av:'AV11NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV165Mensagem',fld:'vMENSAGEM',hsh:true},{av:'AV195SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV170SNNovaLinhaProduto',fld:'vSNNOVALINHAPRODUTO'},{av:'AV62SNExcluiProduto',fld:'vSNEXCLUIPRODUTO'},{av:'AV57ProdutoId',fld:'vPRODUTOID',grid:222},{av:'AV58ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA',grid:222},{av:'AV171SNNovaLinhaFamilia',fld:'vSNNOVALINHAFAMILIA'},{av:'AV86SNExcluiFamilia',fld:'vSNEXCLUIFAMILIA'},{av:'AV84ProdutoFamiliaId',fld:'vPRODUTOFAMILIAID',grid:241},{av:'AV87ProdutoFamiliaDescricao',fld:'vPRODUTOFAMILIADESCRICAO',grid:241},{av:'AV172SNNovaLinhaFabricante',fld:'vSNNOVALINHAFABRICANTE'},{av:'AV91SNExcluiFabricante',fld:'vSNEXCLUIFABRICANTE'},{av:'AV90ProdutoFabricanteId',fld:'vPRODUTOFABRICANTEID',grid:259},{av:'AV92ProdutoFabricanteFantasia',fld:'vPRODUTOFABRICANTEFANTASIA',grid:259},{av:'AV173SNNovaLinhaClassificacao',fld:'vSNNOVALINHACLASSIFICACAO'},{av:'AV97SNExcluiClassificacao',fld:'vSNEXCLUICLASSIFICACAO'},{av:'AV96ClassificacaoEstIdGrid',fld:'vCLASSIFICACAOESTIDGRID',grid:278},{av:'AV95ProdutoClassificacaoValor',fld:'vPRODUTOCLASSIFICACAOVALOR',grid:278},{av:'AV174SNNovaLinhaCodificacao',fld:'vSNNOVALINHACODIFICACAO'},{av:'AV103SNExcluiCodificacao',fld:'vSNEXCLUICODIFICACAO'},{av:'AV100CodificacaoEstIdGrid',fld:'vCODIFICACAOESTIDGRID',grid:295},{av:'AV101ProdutoCodificacaoValor',fld:'vPRODUTOCODIFICACAOVALOR',grid:295},{av:'AV181Encadernacao',fld:'vENCADERNACAO'},{av:'AV46SNSaltarLinha',fld:'vSNSALTARLINHA'},{av:'AV164SNAgruparQtFilial',fld:'vSNAGRUPARQTFILIAL'},{av:'AV200SNImpFotoProduto',fld:'vSNIMPFOTOPRODUTO'},{av:'AV207FiltrarQtdeFilial',fld:'vFILTRARQTDEFILIAL'},{av:'AV212QtdeCaracterRelatorioAux',fld:'vQTDECARACTERRELATORIOAUX'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2956FamiliaEmpresaId',fld:'FAMILIAEMPRESAID'},{av:'AV85FamiliaEmpresaId',fld:'vFAMILIAEMPRESAID'},{av:'A2957FamiliaId',fld:'FAMILIAID'}],[{av:'AV108QtdeCaracterRelatorio',fld:'vQTDECARACTERRELATORIO'},{av:'AV210DefaultTipoSaldo',fld:'vDEFAULTTIPOSALDO'},{av:'AV166InventarioData',fld:'vINVENTARIODATA'},{av:'AV105ParametroConsultaCampoCod',fld:'vPARAMETROCONSULTACAMPOCOD'},{av:'AV106ParametroConsultaCampoTitulo',fld:'vPARAMETROCONSULTACAMPOTITULO'},{av:'AV107ParametroConsultaCampoTamanho',fld:'vPARAMETROCONSULTACAMPOTAMANHO'},{av:'AV110ParametroConsultaCampoTamanhoAux',fld:'vPARAMETROCONSULTACAMPOTAMANHOAUX'},{av:'AV111SNPossuiLote',fld:'vSNPOSSUILOTE'},{av:'AV21SNErro',fld:'vSNERRO'},{av:'AV207FiltrarQtdeFilial',fld:'vFILTRARQTDEFILIAL'},{av:'AV233GXLvl516',fld:'vGXLVL516'},{av:'AV126SNSimilares',fld:'vSNSIMILARES'},{av:'AV127SNValidaLote',fld:'vSNVALIDALOTE'},{av:'AV163SNQtdeSaldo',fld:'vSNQTDESALDO'},{av:'AV167SNValidaInv',fld:'vSNVALIDAINV'},{av:'AV169SNObrQtde',fld:'vSNOBRQTDE'},{av:'AV235GXLvl573',fld:'vGXLVL573'},{av:'AV236GXLvl616',fld:'vGXLVL616'},{av:'AV237GXLvl674',fld:'vGXLVL674'},{av:'AV76z',fld:'vZ'},{av:'AV33c1',fld:'vC1'},{av:'AV34c2',fld:'vC2'},{av:'AV238GXLvl754',fld:'vGXLVL754'},{av:'AV239GXLvl773',fld:'vGXLVL773'},{av:'AV56SdtProdutoRelProduto',fld:'vSDTPRODUTORELPRODUTO'},{av:'AV81SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'AV77SdtFabricanteRelProduto',fld:'vSDTFABRICANTERELPRODUTO'},{av:'AV78SdtClassificacaoRelProduto',fld:'vSDTCLASSIFICACAORELPRODUTO'},{av:'AV79SdtCodificacaoRelProduto',fld:'vSDTCODIFICACAORELPRODUTO'},{av:'AV11NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV10NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV142FilialId',fld:'vFILIALID'},{av:'AV161SdtFiliais',fld:'vSDTFILIAIS'},{av:'AV164SNAgruparQtFilial',fld:'vSNAGRUPARQTFILIAL'},{av:'AV112EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV120ValorAtributoCombo1',fld:'vVALORATRIBUTOCOMBO1'},{av:'AV121ValorAtributoCombo2',fld:'vVALORATRIBUTOCOMBO2'},{av:'AV122ValorAtributoCombo3',fld:'vVALORATRIBUTOCOMBO3'},{av:'AV123ValorAtributoCombo4',fld:'vVALORATRIBUTOCOMBO4'},{av:'AV124ValorAtributoCombo5',fld:'vVALORATRIBUTOCOMBO5'},{av:'AV115ValorAtributo1',fld:'vVALORATRIBUTO1'},{av:'AV116ValorAtributo2',fld:'vVALORATRIBUTO2'},{av:'AV117ValorAtributo3',fld:'vVALORATRIBUTO3'},{av:'AV118ValorAtributo4',fld:'vVALORATRIBUTO4'},{av:'AV119ValorAtributo5',fld:'vVALORATRIBUTO5'},{av:'AV16QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV139TxtTela',fld:'vTXTTELA'},{av:'AV128SNImprimir',fld:'vSNIMPRIMIR'},{av:'AV109ContLote',fld:'vCONTLOTE'},{av:'AV182QtdeAtributos',fld:'vQTDEATRIBUTOS'},{av:'AV183QtdeMaxAtributos',fld:'vQTDEMAXATRIBUTOS'},{av:'AV184EsquemaCodigoQuebra',fld:'vESQUEMACODIGOQUEBRA'},{av:'AV185Relatorio',fld:'vRELATORIO'},{av:'AV212QtdeCaracterRelatorioAux',fld:'vQTDECARACTERRELATORIOAUX'},{av:'AV201Orientacao',fld:'vORIENTACAO'},{av:'AV244GXLvl1164',fld:'vGXLVL1164'},{av:'AV250GXLvl1284',fld:'vGXLVL1284'},{av:'AV256GXLvl1404',fld:'vGXLVL1404'},{av:'AV202Cont',fld:'vCONT'},{av:'AV246GXV3',fld:'vGXV3'},{av:'AV55SdtProdutoRelProdutoItem',fld:'vSDTPRODUTORELPRODUTOITEM'},{av:'AV247GXV4',fld:'vGXV4'},{av:'AV252GXV6',fld:'vGXV6'},{av:'AV83SdtFamiliaRelProdutoItem',fld:'vSDTFAMILIARELPRODUTOITEM'},{av:'AV253GXV7',fld:'vGXV7'},{av:'AV258GXV9',fld:'vGXV9'},{av:'AV89SdtFabricanteRelProdutoItem',fld:'vSDTFABRICANTERELPRODUTOITEM'},{av:'AV259GXV10',fld:'vGXV10'},{av:'AV263GXV12',fld:'vGXV12'},{av:'AV94SdtClassificacaoRelProdutoItem',fld:'vSDTCLASSIFICACAORELPRODUTOITEM'},{av:'AV264GXV13',fld:'vGXV13'},{av:'AV268GXV15',fld:'vGXV15'},{av:'AV99SdtCodificacaoRelProdutoItem',fld:'vSDTCODIFICACAORELPRODUTOITEM'},{av:'AV269GXV16',fld:'vGXV16'},{ctrl:'BTNIMPRIMIR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPARAMETROCONSULTACODIGO","Enabled")',ctrl:'vPARAMETROCONSULTACODIGO',prop:'Enabled'},{ctrl:'vORDENACAO'},{ctrl:'vTIPOSALDO'},{av:'gx.fn.getCtrlProperty("vDATAREFERENCIA","Enabled")',ctrl:'vDATAREFERENCIA',prop:'Enabled'},{ctrl:'vPRECOIMPRESSO'},{ctrl:'vENCADERNACAO'},{av:'gx.fn.getCtrlProperty("vSNSALTARPAGINA","Enabled")',ctrl:'vSNSALTARPAGINA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNSALTARLINHA","Enabled")',ctrl:'vSNSALTARLINHA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNGERARCSV","Enabled")',ctrl:'vSNGERARCSV',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNIMPFOTOPRODUTO","Enabled")',ctrl:'vSNIMPFOTOPRODUTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("FILTRARFILIAL","Enabled")',ctrl:'FILTRARFILIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vNOMEPRODUTOINI","Enabled")',ctrl:'vNOMEPRODUTOINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vNOMEPRODUTOFIN","Enabled")',ctrl:'vNOMEPRODUTOFIN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOREFERENCIAINI","Enabled")',ctrl:'vPRODUTOREFERENCIAINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOREFERENCIAFIN","Enabled")',ctrl:'vPRODUTOREFERENCIAFIN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vLOTEPRODUTOLOCALINI","Enabled")',ctrl:'vLOTEPRODUTOLOCALINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vLOTEPRODUTOLOCALFIN","Enabled")',ctrl:'vLOTEPRODUTOLOCALFIN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPESSOAID","Enabled")',ctrl:'vPESSOAID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vESQUEMACODIGO","Enabled")',ctrl:'vESQUEMACODIGO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vNODOCUMENTO","Enabled")',ctrl:'vNODOCUMENTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAENTRADAINI","Enabled")',ctrl:'vDATAENTRADAINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAENTRADAFIN","Enabled")',ctrl:'vDATAENTRADAFIN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATASAIDAINI","Enabled")',ctrl:'vDATASAIDAINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATASAIDAFIN","Enabled")',ctrl:'vDATASAIDAFIN',prop:'Enabled'},{ctrl:'vPRODUTOSITUACAO'},{av:'gx.fn.getCtrlProperty("vPRODUTOTIPO","Enabled")',ctrl:'vPRODUTOTIPO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("FILTRARLOTE","Enabled")',ctrl:'FILTRARLOTE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("INCLUIPRODUTO","Enabled")',ctrl:'INCLUIPRODUTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOID","Enabled")',ctrl:'vPRODUTOID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPROMPTPRODUTO","Enabled")',ctrl:'vPROMPTPRODUTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTODESCRICAORESUMIDA","Enabled")',ctrl:'vPRODUTODESCRICAORESUMIDA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vEXCLINHAPRODUTO","Enabled")',ctrl:'vEXCLINHAPRODUTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("INCLUIFAMILIA","Enabled")',ctrl:'INCLUIFAMILIA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOFAMILIAID","Enabled")',ctrl:'vPRODUTOFAMILIAID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPROMPTFAMILIA","Enabled")',ctrl:'vPROMPTFAMILIA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOFAMILIADESCRICAO","Enabled")',ctrl:'vPRODUTOFAMILIADESCRICAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vEXCLINHAFAMILIA","Enabled")',ctrl:'vEXCLINHAFAMILIA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("INCLUIFABRICANTE","Enabled")',ctrl:'INCLUIFABRICANTE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOFABRICANTEID","Enabled")',ctrl:'vPRODUTOFABRICANTEID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPROMPTFABRICANTE","Enabled")',ctrl:'vPROMPTFABRICANTE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOFABRICANTEFANTASIA","Enabled")',ctrl:'vPRODUTOFABRICANTEFANTASIA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vEXCLINHAFABRICANTE","Enabled")',ctrl:'vEXCLINHAFABRICANTE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("INCLUICLASSIFICACAO","Enabled")',ctrl:'INCLUICLASSIFICACAO',prop:'Enabled'},{ctrl:'vCLASSIFICACAOESTIDGRID'},{ctrl:'vPRODUTOCLASSIFICACAOVALOR'},{av:'gx.fn.getCtrlProperty("vEXCLINHACLASSIFICACAO","Enabled")',ctrl:'vEXCLINHACLASSIFICACAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("INCLUICODIFICACAO","Enabled")',ctrl:'INCLUICODIFICACAO',prop:'Enabled'},{ctrl:'vCODIFICACAOESTIDGRID'},{av:'gx.fn.getCtrlProperty("vPRODUTOCODIFICACAOVALOR","Enabled")',ctrl:'vPRODUTOCODIFICACAOVALOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vEXCLINHACODIFICACAO","Enabled")',ctrl:'vEXCLINHACODIFICACAO',prop:'Enabled'},{av:'AV194OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["FILTRARFILIAL.CLICK"] = [[{av:'GRIDPRODUTO_nFirstRecordOnPage'},{av:'GRIDPRODUTO_nEOF'},{av:'AV64promptProduto',fld:'vPROMPTPRODUTO'},{av:'AV65excLinhaProduto',fld:'vEXCLINHAPRODUTO'},{av:'AV211SNPassou',fld:'vSNPASSOU'},{av:'AV26ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO'},{av:'AV115ValorAtributo1',fld:'vVALORATRIBUTO1'},{av:'AV116ValorAtributo2',fld:'vVALORATRIBUTO2'},{av:'AV117ValorAtributo3',fld:'vVALORATRIBUTO3'},{av:'AV118ValorAtributo4',fld:'vVALORATRIBUTO4'},{av:'AV119ValorAtributo5',fld:'vVALORATRIBUTO5'},{av:'AV120ValorAtributoCombo1',fld:'vVALORATRIBUTOCOMBO1'},{av:'AV121ValorAtributoCombo2',fld:'vVALORATRIBUTOCOMBO2'},{av:'AV122ValorAtributoCombo3',fld:'vVALORATRIBUTOCOMBO3'},{av:'AV123ValorAtributoCombo4',fld:'vVALORATRIBUTOCOMBO4'},{av:'AV124ValorAtributoCombo5',fld:'vVALORATRIBUTOCOMBO5'},{av:'AV175SNBloqueiaTela',fld:'vSNBLOQUEIATELA'},{av:'AV128SNImprimir',fld:'vSNIMPRIMIR'},{av:'AV11NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV29SNGerarCSV',fld:'vSNGERARCSV'},{av:'AV165Mensagem',fld:'vMENSAGEM',hsh:true},{av:'AV204FilialQtd',fld:'vFILIALQTD'},{av:'AV187SnInventarioLote',fld:'vSNINVENTARIOLOTE'},{av:'AV217Pgmname',fld:'vPGMNAME'},{av:'AV195SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV48TipoSaldo',fld:'vTIPOSALDO'},{av:'A3227ParametroConsultaEmpresaId',fld:'PARAMETROCONSULTAEMPRESAID'},{av:'AV28ParametroConsultaEmpresaId',fld:'vPARAMETROCONSULTAEMPRESAID'},{av:'A3228ParametroConsultaCodigo',fld:'PARAMETROCONSULTACODIGO'},{av:'A3234ParametroConsultaCampoUsuAlt',fld:'PARAMETROCONSULTACAMPOUSUALT'},{av:'A3230ParametroConsultaCampoCod',fld:'PARAMETROCONSULTACAMPOCOD'},{av:'AV170SNNovaLinhaProduto',fld:'vSNNOVALINHAPRODUTO'},{av:'AV21SNErro',fld:'vSNERRO'},{av:'AV62SNExcluiProduto',fld:'vSNEXCLUIPRODUTO'},{av:'AV57ProdutoId',fld:'vPRODUTOID'},{av:'AV58ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'},{av:'AV171SNNovaLinhaFamilia',fld:'vSNNOVALINHAFAMILIA'},{av:'AV86SNExcluiFamilia',fld:'vSNEXCLUIFAMILIA'},{av:'AV84ProdutoFamiliaId',fld:'vPRODUTOFAMILIAID'},{av:'AV87ProdutoFamiliaDescricao',fld:'vPRODUTOFAMILIADESCRICAO'},{av:'AV172SNNovaLinhaFabricante',fld:'vSNNOVALINHAFABRICANTE'},{av:'AV91SNExcluiFabricante',fld:'vSNEXCLUIFABRICANTE'},{av:'AV90ProdutoFabricanteId',fld:'vPRODUTOFABRICANTEID'},{av:'AV92ProdutoFabricanteFantasia',fld:'vPRODUTOFABRICANTEFANTASIA'},{av:'AV173SNNovaLinhaClassificacao',fld:'vSNNOVALINHACLASSIFICACAO'},{av:'AV97SNExcluiClassificacao',fld:'vSNEXCLUICLASSIFICACAO'},{av:'AV96ClassificacaoEstIdGrid',fld:'vCLASSIFICACAOESTIDGRID'},{av:'AV95ProdutoClassificacaoValor',fld:'vPRODUTOCLASSIFICACAOVALOR'},{av:'AV174SNNovaLinhaCodificacao',fld:'vSNNOVALINHACODIFICACAO'},{av:'AV103SNExcluiCodificacao',fld:'vSNEXCLUICODIFICACAO'},{av:'AV100CodificacaoEstIdGrid',fld:'vCODIFICACAOESTIDGRID'},{av:'AV101ProdutoCodificacaoValor',fld:'vPRODUTOCODIFICACAOVALOR'},{av:'AV139TxtTela',fld:'vTXTTELA'},{av:'AV56SdtProdutoRelProduto',fld:'vSDTPRODUTORELPRODUTO'},{av:'AV210DefaultTipoSaldo',fld:'vDEFAULTTIPOSALDO'}],[]];
   this.EvtParms["FILTRARLOTE.CLICK"] = [[{av:'GRIDPRODUTO_nFirstRecordOnPage'},{av:'GRIDPRODUTO_nEOF'},{av:'AV64promptProduto',fld:'vPROMPTPRODUTO'},{av:'AV65excLinhaProduto',fld:'vEXCLINHAPRODUTO'},{av:'AV211SNPassou',fld:'vSNPASSOU'},{av:'AV26ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO'},{av:'AV115ValorAtributo1',fld:'vVALORATRIBUTO1'},{av:'AV116ValorAtributo2',fld:'vVALORATRIBUTO2'},{av:'AV117ValorAtributo3',fld:'vVALORATRIBUTO3'},{av:'AV118ValorAtributo4',fld:'vVALORATRIBUTO4'},{av:'AV119ValorAtributo5',fld:'vVALORATRIBUTO5'},{av:'AV120ValorAtributoCombo1',fld:'vVALORATRIBUTOCOMBO1'},{av:'AV121ValorAtributoCombo2',fld:'vVALORATRIBUTOCOMBO2'},{av:'AV122ValorAtributoCombo3',fld:'vVALORATRIBUTOCOMBO3'},{av:'AV123ValorAtributoCombo4',fld:'vVALORATRIBUTOCOMBO4'},{av:'AV124ValorAtributoCombo5',fld:'vVALORATRIBUTOCOMBO5'},{av:'AV175SNBloqueiaTela',fld:'vSNBLOQUEIATELA'},{av:'AV128SNImprimir',fld:'vSNIMPRIMIR'},{av:'AV11NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV29SNGerarCSV',fld:'vSNGERARCSV'},{av:'AV165Mensagem',fld:'vMENSAGEM',hsh:true},{av:'AV204FilialQtd',fld:'vFILIALQTD'},{av:'AV187SnInventarioLote',fld:'vSNINVENTARIOLOTE'},{av:'AV217Pgmname',fld:'vPGMNAME'},{av:'AV195SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV48TipoSaldo',fld:'vTIPOSALDO'},{av:'A3227ParametroConsultaEmpresaId',fld:'PARAMETROCONSULTAEMPRESAID'},{av:'AV28ParametroConsultaEmpresaId',fld:'vPARAMETROCONSULTAEMPRESAID'},{av:'A3228ParametroConsultaCodigo',fld:'PARAMETROCONSULTACODIGO'},{av:'A3234ParametroConsultaCampoUsuAlt',fld:'PARAMETROCONSULTACAMPOUSUALT'},{av:'A3230ParametroConsultaCampoCod',fld:'PARAMETROCONSULTACAMPOCOD'},{av:'AV170SNNovaLinhaProduto',fld:'vSNNOVALINHAPRODUTO'},{av:'AV21SNErro',fld:'vSNERRO'},{av:'AV62SNExcluiProduto',fld:'vSNEXCLUIPRODUTO'},{av:'AV57ProdutoId',fld:'vPRODUTOID'},{av:'AV58ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'},{av:'AV171SNNovaLinhaFamilia',fld:'vSNNOVALINHAFAMILIA'},{av:'AV86SNExcluiFamilia',fld:'vSNEXCLUIFAMILIA'},{av:'AV84ProdutoFamiliaId',fld:'vPRODUTOFAMILIAID'},{av:'AV87ProdutoFamiliaDescricao',fld:'vPRODUTOFAMILIADESCRICAO'},{av:'AV172SNNovaLinhaFabricante',fld:'vSNNOVALINHAFABRICANTE'},{av:'AV91SNExcluiFabricante',fld:'vSNEXCLUIFABRICANTE'},{av:'AV90ProdutoFabricanteId',fld:'vPRODUTOFABRICANTEID'},{av:'AV92ProdutoFabricanteFantasia',fld:'vPRODUTOFABRICANTEFANTASIA'},{av:'AV173SNNovaLinhaClassificacao',fld:'vSNNOVALINHACLASSIFICACAO'},{av:'AV97SNExcluiClassificacao',fld:'vSNEXCLUICLASSIFICACAO'},{av:'AV96ClassificacaoEstIdGrid',fld:'vCLASSIFICACAOESTIDGRID'},{av:'AV95ProdutoClassificacaoValor',fld:'vPRODUTOCLASSIFICACAOVALOR'},{av:'AV174SNNovaLinhaCodificacao',fld:'vSNNOVALINHACODIFICACAO'},{av:'AV103SNExcluiCodificacao',fld:'vSNEXCLUICODIFICACAO'},{av:'AV100CodificacaoEstIdGrid',fld:'vCODIFICACAOESTIDGRID'},{av:'AV101ProdutoCodificacaoValor',fld:'vPRODUTOCODIFICACAOVALOR'},{av:'AV139TxtTela',fld:'vTXTTELA'},{av:'AV56SdtProdutoRelProduto',fld:'vSDTPRODUTORELPRODUTO'},{av:'AV112EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'}],[{av:'AV21SNErro',fld:'vSNERRO'},{av:'AV221GXLvl291',fld:'vGXLVL291'},{av:'AV124ValorAtributoCombo5',fld:'vVALORATRIBUTOCOMBO5'},{av:'AV123ValorAtributoCombo4',fld:'vVALORATRIBUTOCOMBO4'},{av:'AV122ValorAtributoCombo3',fld:'vVALORATRIBUTOCOMBO3'},{av:'AV121ValorAtributoCombo2',fld:'vVALORATRIBUTOCOMBO2'},{av:'AV120ValorAtributoCombo1',fld:'vVALORATRIBUTOCOMBO1'},{av:'AV119ValorAtributo5',fld:'vVALORATRIBUTO5'},{av:'AV118ValorAtributo4',fld:'vVALORATRIBUTO4'},{av:'AV117ValorAtributo3',fld:'vVALORATRIBUTO3'},{av:'AV116ValorAtributo2',fld:'vVALORATRIBUTO2'},{av:'AV115ValorAtributo1',fld:'vVALORATRIBUTO1'},{av:'AV112EsquemaCodigo',fld:'vESQUEMACODIGO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["GRIDPRODUTO.LOAD"] = [[{av:'AV56SdtProdutoRelProduto',fld:'vSDTPRODUTORELPRODUTO'},{av:'AV170SNNovaLinhaProduto',fld:'vSNNOVALINHAPRODUTO'},{av:'AV21SNErro',fld:'vSNERRO'}],[{av:'AV54ControlaLinhaProduto',fld:'vCONTROLALINHAPRODUTO'},{av:'AV242GXV2',fld:'vGXV2'},{av:'AV55SdtProdutoRelProdutoItem',fld:'vSDTPRODUTORELPRODUTOITEM'},{av:'AV57ProdutoId',fld:'vPRODUTOID'},{av:'AV58ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'}]];
   this.EvtParms["'LINHAGRIDPRODUTO'"] = [[{av:'AV21SNErro',fld:'vSNERRO'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV57ProdutoId',fld:'vPRODUTOID',grid:222},{av:'AV170SNNovaLinhaProduto',fld:'vSNNOVALINHAPRODUTO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV61ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'}],[{av:'AV56SdtProdutoRelProduto',fld:'vSDTPRODUTORELPRODUTO'},{av:'AV170SNNovaLinhaProduto',fld:'vSNNOVALINHAPRODUTO'},{av:'AV55SdtProdutoRelProdutoItem',fld:'vSDTPRODUTORELPRODUTOITEM'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV21SNErro',fld:'vSNERRO'},{av:'AV244GXLvl1164',fld:'vGXLVL1164'}]];
   this.EvtParms["'EXCLUILINHAGRIDPRODUTO'"] = [[{av:'AV54ControlaLinhaProduto',fld:'vCONTROLALINHAPRODUTO'}],[{av:'AV56SdtProdutoRelProduto',fld:'vSDTPRODUTORELPRODUTO'},{av:'AV62SNExcluiProduto',fld:'vSNEXCLUIPRODUTO'}]];
   this.EvtParms["GRIDFAMILIA.LOAD"] = [[{av:'AV81SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'AV171SNNovaLinhaFamilia',fld:'vSNNOVALINHAFAMILIA'},{av:'AV21SNErro',fld:'vSNERRO'}],[{av:'AV82ControlaLinhaFamilia',fld:'vCONTROLALINHAFAMILIA'},{av:'AV248GXV5',fld:'vGXV5'},{av:'AV83SdtFamiliaRelProdutoItem',fld:'vSDTFAMILIARELPRODUTOITEM'},{av:'AV84ProdutoFamiliaId',fld:'vPRODUTOFAMILIAID'},{av:'AV87ProdutoFamiliaDescricao',fld:'vPRODUTOFAMILIADESCRICAO'}]];
   this.EvtParms["'LINHAGRIDFAMILIA'"] = [[{av:'AV21SNErro',fld:'vSNERRO'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV84ProdutoFamiliaId',fld:'vPRODUTOFAMILIAID',grid:241},{av:'AV171SNNovaLinhaFamilia',fld:'vSNNOVALINHAFAMILIA'},{av:'A2956FamiliaEmpresaId',fld:'FAMILIAEMPRESAID'},{av:'AV85FamiliaEmpresaId',fld:'vFAMILIAEMPRESAID'},{av:'A2957FamiliaId',fld:'FAMILIAID'}],[{av:'AV81SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'AV171SNNovaLinhaFamilia',fld:'vSNNOVALINHAFAMILIA'},{av:'AV83SdtFamiliaRelProdutoItem',fld:'vSDTFAMILIARELPRODUTOITEM'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV21SNErro',fld:'vSNERRO'},{av:'AV250GXLvl1284',fld:'vGXLVL1284'}]];
   this.EvtParms["'EXCLUILINHAGRIDFAMILIA'"] = [[{av:'AV82ControlaLinhaFamilia',fld:'vCONTROLALINHAFAMILIA'}],[{av:'AV81SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'AV86SNExcluiFamilia',fld:'vSNEXCLUIFAMILIA'}]];
   this.EvtParms["GRIDFABRICANTE.LOAD"] = [[{av:'AV77SdtFabricanteRelProduto',fld:'vSDTFABRICANTERELPRODUTO'},{av:'AV172SNNovaLinhaFabricante',fld:'vSNNOVALINHAFABRICANTE'},{av:'AV21SNErro',fld:'vSNERRO'}],[{av:'AV88ControlaLinhaFabricante',fld:'vCONTROLALINHAFABRICANTE'},{av:'AV254GXV8',fld:'vGXV8'},{av:'AV89SdtFabricanteRelProdutoItem',fld:'vSDTFABRICANTERELPRODUTOITEM'},{av:'AV90ProdutoFabricanteId',fld:'vPRODUTOFABRICANTEID'},{av:'AV92ProdutoFabricanteFantasia',fld:'vPRODUTOFABRICANTEFANTASIA'}]];
   this.EvtParms["'LINHAGRIDFABRICANTE'"] = [[{av:'AV21SNErro',fld:'vSNERRO'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV90ProdutoFabricanteId',fld:'vPRODUTOFABRICANTEID',grid:259},{av:'AV172SNNovaLinhaFabricante',fld:'vSNNOVALINHAFABRICANTE'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV49PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'}],[{av:'AV77SdtFabricanteRelProduto',fld:'vSDTFABRICANTERELPRODUTO'},{av:'AV172SNNovaLinhaFabricante',fld:'vSNNOVALINHAFABRICANTE'},{av:'AV89SdtFabricanteRelProdutoItem',fld:'vSDTFABRICANTERELPRODUTOITEM'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV21SNErro',fld:'vSNERRO'},{av:'AV256GXLvl1404',fld:'vGXLVL1404'}]];
   this.EvtParms["'EXCLUILINHAGRIDFABRICANTE'"] = [[{av:'AV88ControlaLinhaFabricante',fld:'vCONTROLALINHAFABRICANTE'}],[{av:'AV77SdtFabricanteRelProduto',fld:'vSDTFABRICANTERELPRODUTO'},{av:'AV91SNExcluiFabricante',fld:'vSNEXCLUIFABRICANTE'}]];
   this.EvtParms["GRIDCLASSIFICACAO.LOAD"] = [[{av:'AV78SdtClassificacaoRelProduto',fld:'vSDTCLASSIFICACAORELPRODUTO'},{av:'AV173SNNovaLinhaClassificacao',fld:'vSNNOVALINHACLASSIFICACAO'},{av:'AV21SNErro',fld:'vSNERRO'}],[{av:'AV93ControlaLinhaClassificacao',fld:'vCONTROLALINHACLASSIFICACAO'},{av:'AV260GXV11',fld:'vGXV11'},{av:'AV94SdtClassificacaoRelProdutoItem',fld:'vSDTCLASSIFICACAORELPRODUTOITEM'},{av:'AV96ClassificacaoEstIdGrid',fld:'vCLASSIFICACAOESTIDGRID'},{av:'AV95ProdutoClassificacaoValor',fld:'vPRODUTOCLASSIFICACAOVALOR'}]];
   this.EvtParms["VCLASSIFICACAOESTIDGRID.CLICK"] = [[{av:'AV95ProdutoClassificacaoValor',fld:'vPRODUTOCLASSIFICACAOVALOR'}],[]];
   this.EvtParms["'LINHAGRIDCLASSIFICACAO'"] = [[{av:'AV21SNErro',fld:'vSNERRO'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV173SNNovaLinhaClassificacao',fld:'vSNNOVALINHACLASSIFICACAO'},{av:'AV96ClassificacaoEstIdGrid',fld:'vCLASSIFICACAOESTIDGRID',grid:278},{av:'AV95ProdutoClassificacaoValor',fld:'vPRODUTOCLASSIFICACAOVALOR',grid:278}],[{av:'AV78SdtClassificacaoRelProduto',fld:'vSDTCLASSIFICACAORELPRODUTO'},{av:'AV173SNNovaLinhaClassificacao',fld:'vSNNOVALINHACLASSIFICACAO'},{av:'AV94SdtClassificacaoRelProdutoItem',fld:'vSDTCLASSIFICACAORELPRODUTOITEM'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV21SNErro',fld:'vSNERRO'}]];
   this.EvtParms["'EXCLUILINHAGRIDCLASSIFICACAO'"] = [[{av:'AV93ControlaLinhaClassificacao',fld:'vCONTROLALINHACLASSIFICACAO'}],[{av:'AV78SdtClassificacaoRelProduto',fld:'vSDTCLASSIFICACAORELPRODUTO'},{av:'AV97SNExcluiClassificacao',fld:'vSNEXCLUICLASSIFICACAO'}]];
   this.EvtParms["GRIDCODIFICACAO.LOAD"] = [[{av:'AV79SdtCodificacaoRelProduto',fld:'vSDTCODIFICACAORELPRODUTO'},{av:'AV174SNNovaLinhaCodificacao',fld:'vSNNOVALINHACODIFICACAO'},{av:'AV21SNErro',fld:'vSNERRO'}],[{av:'AV98ControlaLinhaCodificacao',fld:'vCONTROLALINHACODIFICACAO'},{av:'AV265GXV14',fld:'vGXV14'},{av:'AV99SdtCodificacaoRelProdutoItem',fld:'vSDTCODIFICACAORELPRODUTOITEM'},{av:'AV100CodificacaoEstIdGrid',fld:'vCODIFICACAOESTIDGRID'},{av:'AV101ProdutoCodificacaoValor',fld:'vPRODUTOCODIFICACAOVALOR'}]];
   this.EvtParms["'LINHAGRIDCODIFICACAO'"] = [[{av:'AV21SNErro',fld:'vSNERRO'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV174SNNovaLinhaCodificacao',fld:'vSNNOVALINHACODIFICACAO'},{av:'AV100CodificacaoEstIdGrid',fld:'vCODIFICACAOESTIDGRID',grid:295},{av:'AV101ProdutoCodificacaoValor',fld:'vPRODUTOCODIFICACAOVALOR',grid:295}],[{av:'AV79SdtCodificacaoRelProduto',fld:'vSDTCODIFICACAORELPRODUTO'},{av:'AV174SNNovaLinhaCodificacao',fld:'vSNNOVALINHACODIFICACAO'},{av:'AV99SdtCodificacaoRelProdutoItem',fld:'vSDTCODIFICACAORELPRODUTOITEM'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV21SNErro',fld:'vSNERRO'}]];
   this.EvtParms["'EXCLUILINHAGRIDCODIFICACAO'"] = [[{av:'AV98ControlaLinhaCodificacao',fld:'vCONTROLALINHACODIFICACAO'}],[{av:'AV79SdtCodificacaoRelProduto',fld:'vSDTCODIFICACAORELPRODUTO'},{av:'AV103SNExcluiCodificacao',fld:'vSNEXCLUICODIFICACAO'}]];
   this.EvtParms["VPARAMETROCONSULTACODIGO.ISVALID"] = [[{av:'AV187SnInventarioLote',fld:'vSNINVENTARIOLOTE'},{av:'AV48TipoSaldo',fld:'vTIPOSALDO'},{av:'A3227ParametroConsultaEmpresaId',fld:'PARAMETROCONSULTAEMPRESAID'},{av:'AV28ParametroConsultaEmpresaId',fld:'vPARAMETROCONSULTAEMPRESAID'},{av:'A3228ParametroConsultaCodigo',fld:'PARAMETROCONSULTACODIGO'},{av:'AV26ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO'},{av:'A3234ParametroConsultaCampoUsuAlt',fld:'PARAMETROCONSULTACAMPOUSUALT'},{av:'A3230ParametroConsultaCampoCod',fld:'PARAMETROCONSULTACAMPOCOD'}],[{av:'AV163SNQtdeSaldo',fld:'vSNQTDESALDO'},{av:'AV167SNValidaInv',fld:'vSNVALIDAINV'},{av:'AV169SNObrQtde',fld:'vSNOBRQTDE'},{av:'AV161SdtFiliais',fld:'vSDTFILIAIS'},{av:'AV131ImpQtdeAtualNeg',fld:'vIMPQTDEATUALNEG'},{av:'AV130ImpQtdeAtualPos',fld:'vIMPQTDEATUALPOS'},{av:'AV132ImpQtdeAtualZer',fld:'vIMPQTDEATUALZER'},{av:'AV275GXV17',fld:'vGXV17'},{av:'AV176SdtFiliaisItem',fld:'vSDTFILIAISITEM'},{av:'gx.fn.getCtrlProperty("vIMPQTDEATUALNEG","Enabled")',ctrl:'vIMPQTDEATUALNEG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPQTDEATUALPOS","Enabled")',ctrl:'vIMPQTDEATUALPOS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPQTDEATUALZER","Enabled")',ctrl:'vIMPQTDEATUALZER',prop:'Enabled'},{av:'AV134ImpQtdeInventarioNeg',fld:'vIMPQTDEINVENTARIONEG'},{av:'AV133ImpQtdeInventarioPos',fld:'vIMPQTDEINVENTARIOPOS'},{av:'AV135ImpQtdeInventarioZer',fld:'vIMPQTDEINVENTARIOZER'},{av:'AV276GXV18',fld:'vGXV18'},{av:'gx.fn.getCtrlProperty("vIMPQTDEINVENTARIONEG","Enabled")',ctrl:'vIMPQTDEINVENTARIONEG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPQTDEINVENTARIOPOS","Enabled")',ctrl:'vIMPQTDEINVENTARIOPOS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPQTDEINVENTARIOZER","Enabled")',ctrl:'vIMPQTDEINVENTARIOZER',prop:'Enabled'},{av:'AV137ImpQtdeSaldoNeg',fld:'vIMPQTDESALDONEG'},{av:'AV136ImpQtdeSaldoPos',fld:'vIMPQTDESALDOPOS'},{av:'AV138ImpQtdeSaldoZer',fld:'vIMPQTDESALDOZER'},{av:'AV277GXV19',fld:'vGXV19'},{av:'gx.fn.getCtrlProperty("vIMPQTDESALDONEG","Enabled")',ctrl:'vIMPQTDESALDONEG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPQTDESALDOPOS","Enabled")',ctrl:'vIMPQTDESALDOPOS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPQTDESALDOZER","Enabled")',ctrl:'vIMPQTDESALDOZER',prop:'Enabled'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'GRIDPRODUTO_nFirstRecordOnPage'},{av:'GRIDPRODUTO_nEOF'},{av:'AV64promptProduto',fld:'vPROMPTPRODUTO'},{av:'AV65excLinhaProduto',fld:'vEXCLINHAPRODUTO'},{av:'AV211SNPassou',fld:'vSNPASSOU'},{av:'AV26ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO'},{av:'AV115ValorAtributo1',fld:'vVALORATRIBUTO1'},{av:'AV116ValorAtributo2',fld:'vVALORATRIBUTO2'},{av:'AV117ValorAtributo3',fld:'vVALORATRIBUTO3'},{av:'AV118ValorAtributo4',fld:'vVALORATRIBUTO4'},{av:'AV119ValorAtributo5',fld:'vVALORATRIBUTO5'},{av:'AV120ValorAtributoCombo1',fld:'vVALORATRIBUTOCOMBO1'},{av:'AV121ValorAtributoCombo2',fld:'vVALORATRIBUTOCOMBO2'},{av:'AV122ValorAtributoCombo3',fld:'vVALORATRIBUTOCOMBO3'},{av:'AV123ValorAtributoCombo4',fld:'vVALORATRIBUTOCOMBO4'},{av:'AV124ValorAtributoCombo5',fld:'vVALORATRIBUTOCOMBO5'},{av:'AV175SNBloqueiaTela',fld:'vSNBLOQUEIATELA'},{av:'AV128SNImprimir',fld:'vSNIMPRIMIR'},{av:'AV11NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV29SNGerarCSV',fld:'vSNGERARCSV'},{av:'AV165Mensagem',fld:'vMENSAGEM',hsh:true},{av:'AV204FilialQtd',fld:'vFILIALQTD'},{av:'AV187SnInventarioLote',fld:'vSNINVENTARIOLOTE'},{av:'AV217Pgmname',fld:'vPGMNAME'},{av:'AV195SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV48TipoSaldo',fld:'vTIPOSALDO'},{av:'A3227ParametroConsultaEmpresaId',fld:'PARAMETROCONSULTAEMPRESAID'},{av:'AV28ParametroConsultaEmpresaId',fld:'vPARAMETROCONSULTAEMPRESAID'},{av:'A3228ParametroConsultaCodigo',fld:'PARAMETROCONSULTACODIGO'},{av:'A3234ParametroConsultaCampoUsuAlt',fld:'PARAMETROCONSULTACAMPOUSUALT'},{av:'A3230ParametroConsultaCampoCod',fld:'PARAMETROCONSULTACAMPOCOD'},{av:'AV170SNNovaLinhaProduto',fld:'vSNNOVALINHAPRODUTO'},{av:'AV21SNErro',fld:'vSNERRO'},{av:'AV62SNExcluiProduto',fld:'vSNEXCLUIPRODUTO'},{av:'AV57ProdutoId',fld:'vPRODUTOID'},{av:'AV58ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'},{av:'AV171SNNovaLinhaFamilia',fld:'vSNNOVALINHAFAMILIA'},{av:'AV86SNExcluiFamilia',fld:'vSNEXCLUIFAMILIA'},{av:'AV84ProdutoFamiliaId',fld:'vPRODUTOFAMILIAID'},{av:'AV87ProdutoFamiliaDescricao',fld:'vPRODUTOFAMILIADESCRICAO'},{av:'AV172SNNovaLinhaFabricante',fld:'vSNNOVALINHAFABRICANTE'},{av:'AV91SNExcluiFabricante',fld:'vSNEXCLUIFABRICANTE'},{av:'AV90ProdutoFabricanteId',fld:'vPRODUTOFABRICANTEID'},{av:'AV92ProdutoFabricanteFantasia',fld:'vPRODUTOFABRICANTEFANTASIA'},{av:'AV173SNNovaLinhaClassificacao',fld:'vSNNOVALINHACLASSIFICACAO'},{av:'AV97SNExcluiClassificacao',fld:'vSNEXCLUICLASSIFICACAO'},{av:'AV96ClassificacaoEstIdGrid',fld:'vCLASSIFICACAOESTIDGRID'},{av:'AV95ProdutoClassificacaoValor',fld:'vPRODUTOCLASSIFICACAOVALOR'},{av:'AV174SNNovaLinhaCodificacao',fld:'vSNNOVALINHACODIFICACAO'},{av:'AV103SNExcluiCodificacao',fld:'vSNEXCLUICODIFICACAO'},{av:'AV100CodificacaoEstIdGrid',fld:'vCODIFICACAOESTIDGRID'},{av:'AV101ProdutoCodificacaoValor',fld:'vPRODUTOCODIFICACAOVALOR'},{av:'AV139TxtTela',fld:'vTXTTELA'},{av:'AV56SdtProdutoRelProduto',fld:'vSDTPRODUTORELPRODUTO'},{av:'AV13Ordenacao',fld:'vORDENACAO'},{av:'AV210DefaultTipoSaldo',fld:'vDEFAULTTIPOSALDO'},{av:'AV166InventarioData',fld:'vINVENTARIODATA'},{av:'AV181Encadernacao',fld:'vENCADERNACAO'},{av:'AV45SNSaltarPagina',fld:'vSNSALTARPAGINA'},{av:'AV46SNSaltarLinha',fld:'vSNSALTARLINHA'},{av:'AV30NomeProdutoIni',fld:'vNOMEPRODUTOINI'},{av:'AV31NomeProdutoFin',fld:'vNOMEPRODUTOFIN'},{av:'AV35ProdutoReferenciaIni',fld:'vPRODUTOREFERENCIAINI'},{av:'AV36ProdutoReferenciaFin',fld:'vPRODUTOREFERENCIAFIN'},{av:'AV39LoteProdutoLocalIni',fld:'vLOTEPRODUTOLOCALINI'},{av:'AV40LoteProdutoLocalFin',fld:'vLOTEPRODUTOLOCALFIN'},{av:'AV37PessoaId',fld:'vPESSOAID'},{av:'AV112EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV129ProdutoSituacao',fld:'vPRODUTOSITUACAO'},{av:'AV130ImpQtdeAtualPos',fld:'vIMPQTDEATUALPOS'},{av:'AV131ImpQtdeAtualNeg',fld:'vIMPQTDEATUALNEG'},{av:'AV132ImpQtdeAtualZer',fld:'vIMPQTDEATUALZER'},{av:'AV133ImpQtdeInventarioPos',fld:'vIMPQTDEINVENTARIOPOS'},{av:'AV134ImpQtdeInventarioNeg',fld:'vIMPQTDEINVENTARIONEG'},{av:'AV135ImpQtdeInventarioZer',fld:'vIMPQTDEINVENTARIOZER'},{av:'AV136ImpQtdeSaldoPos',fld:'vIMPQTDESALDOPOS'},{av:'AV137ImpQtdeSaldoNeg',fld:'vIMPQTDESALDONEG'},{av:'AV138ImpQtdeSaldoZer',fld:'vIMPQTDESALDOZER'},{av:'AV164SNAgruparQtFilial',fld:'vSNAGRUPARQTFILIAL'},{av:'AV207FiltrarQtdeFilial',fld:'vFILTRARQTDEFILIAL'},{av:'AV200SNImpFotoProduto',fld:'vSNIMPFOTOPRODUTO'},{av:'AV203ProdutoTipo',fld:'vPRODUTOTIPO'},{av:'AV161SdtFiliais',fld:'vSDTFILIAIS'},{av:'AV81SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'AV77SdtFabricanteRelProduto',fld:'vSDTFABRICANTERELPRODUTO'}],[{av:'AV161SdtFiliais',fld:'vSDTFILIAIS'},{av:'AV194OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV217Pgmname',fld:'vPGMNAME'},{av:'AV195SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV139TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV187SnInventarioLote',fld:'vSNINVENTARIOLOTE'},{av:'AV48TipoSaldo',fld:'vTIPOSALDO'},{av:'A3227ParametroConsultaEmpresaId',fld:'PARAMETROCONSULTAEMPRESAID'},{av:'AV28ParametroConsultaEmpresaId',fld:'vPARAMETROCONSULTAEMPRESAID'},{av:'A3228ParametroConsultaCodigo',fld:'PARAMETROCONSULTACODIGO'},{av:'AV26ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO'},{av:'A3234ParametroConsultaCampoUsuAlt',fld:'PARAMETROCONSULTACAMPOUSUALT'},{av:'A3230ParametroConsultaCampoCod',fld:'PARAMETROCONSULTACAMPOCOD'}],[{av:'AV278GXV20',fld:'vGXV20'},{av:'AV196SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV26ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO'},{av:'AV13Ordenacao',fld:'vORDENACAO'},{av:'AV48TipoSaldo',fld:'vTIPOSALDO'},{av:'AV166InventarioData',fld:'vINVENTARIODATA'},{av:'AV181Encadernacao',fld:'vENCADERNACAO'},{av:'AV45SNSaltarPagina',fld:'vSNSALTARPAGINA'},{av:'AV46SNSaltarLinha',fld:'vSNSALTARLINHA'},{av:'AV29SNGerarCSV',fld:'vSNGERARCSV'},{av:'AV30NomeProdutoIni',fld:'vNOMEPRODUTOINI'},{av:'AV31NomeProdutoFin',fld:'vNOMEPRODUTOFIN'},{av:'AV35ProdutoReferenciaIni',fld:'vPRODUTOREFERENCIAINI'},{av:'AV36ProdutoReferenciaFin',fld:'vPRODUTOREFERENCIAFIN'},{av:'AV39LoteProdutoLocalIni',fld:'vLOTEPRODUTOLOCALINI'},{av:'AV40LoteProdutoLocalFin',fld:'vLOTEPRODUTOLOCALFIN'},{av:'AV37PessoaId',fld:'vPESSOAID'},{av:'AV112EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV129ProdutoSituacao',fld:'vPRODUTOSITUACAO'},{av:'AV130ImpQtdeAtualPos',fld:'vIMPQTDEATUALPOS'},{av:'AV131ImpQtdeAtualNeg',fld:'vIMPQTDEATUALNEG'},{av:'AV132ImpQtdeAtualZer',fld:'vIMPQTDEATUALZER'},{av:'AV133ImpQtdeInventarioPos',fld:'vIMPQTDEINVENTARIOPOS'},{av:'AV134ImpQtdeInventarioNeg',fld:'vIMPQTDEINVENTARIONEG'},{av:'AV135ImpQtdeInventarioZer',fld:'vIMPQTDEINVENTARIOZER'},{av:'AV136ImpQtdeSaldoPos',fld:'vIMPQTDESALDOPOS'},{av:'AV137ImpQtdeSaldoNeg',fld:'vIMPQTDESALDONEG'},{av:'AV138ImpQtdeSaldoZer',fld:'vIMPQTDESALDOZER'},{av:'AV115ValorAtributo1',fld:'vVALORATRIBUTO1'},{av:'AV116ValorAtributo2',fld:'vVALORATRIBUTO2'},{av:'AV117ValorAtributo3',fld:'vVALORATRIBUTO3'},{av:'AV118ValorAtributo4',fld:'vVALORATRIBUTO4'},{av:'AV119ValorAtributo5',fld:'vVALORATRIBUTO5'},{av:'AV120ValorAtributoCombo1',fld:'vVALORATRIBUTOCOMBO1'},{av:'AV121ValorAtributoCombo2',fld:'vVALORATRIBUTOCOMBO2'},{av:'AV122ValorAtributoCombo3',fld:'vVALORATRIBUTOCOMBO3'},{av:'AV123ValorAtributoCombo4',fld:'vVALORATRIBUTOCOMBO4'},{av:'AV124ValorAtributoCombo5',fld:'vVALORATRIBUTOCOMBO5'},{av:'AV200SNImpFotoProduto',fld:'vSNIMPFOTOPRODUTO'},{av:'AV203ProdutoTipo',fld:'vPRODUTOTIPO'},{av:'AV163SNQtdeSaldo',fld:'vSNQTDESALDO'},{av:'AV167SNValidaInv',fld:'vSNVALIDAINV'},{av:'AV169SNObrQtde',fld:'vSNOBRQTDE'},{av:'AV161SdtFiliais',fld:'vSDTFILIAIS'},{av:'AV275GXV17',fld:'vGXV17'},{av:'AV176SdtFiliaisItem',fld:'vSDTFILIAISITEM'},{av:'gx.fn.getCtrlProperty("vIMPQTDEATUALNEG","Enabled")',ctrl:'vIMPQTDEATUALNEG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPQTDEATUALPOS","Enabled")',ctrl:'vIMPQTDEATUALPOS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPQTDEATUALZER","Enabled")',ctrl:'vIMPQTDEATUALZER',prop:'Enabled'},{av:'AV276GXV18',fld:'vGXV18'},{av:'gx.fn.getCtrlProperty("vIMPQTDEINVENTARIONEG","Enabled")',ctrl:'vIMPQTDEINVENTARIONEG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPQTDEINVENTARIOPOS","Enabled")',ctrl:'vIMPQTDEINVENTARIOPOS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPQTDEINVENTARIOZER","Enabled")',ctrl:'vIMPQTDEINVENTARIOZER',prop:'Enabled'},{av:'AV277GXV19',fld:'vGXV19'},{av:'gx.fn.getCtrlProperty("vIMPQTDESALDONEG","Enabled")',ctrl:'vIMPQTDESALDONEG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPQTDESALDOPOS","Enabled")',ctrl:'vIMPQTDESALDOPOS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPQTDESALDOZER","Enabled")',ctrl:'vIMPQTDESALDOZER',prop:'Enabled'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV217Pgmname',fld:'vPGMNAME'},{av:'AV139TxtTela',fld:'vTXTTELA'}],[]];
   this.EvtParms["VTIPOSALDO.CLICK"] = [[{av:'AV187SnInventarioLote',fld:'vSNINVENTARIOLOTE'},{av:'AV48TipoSaldo',fld:'vTIPOSALDO'},{av:'A3227ParametroConsultaEmpresaId',fld:'PARAMETROCONSULTAEMPRESAID'},{av:'AV28ParametroConsultaEmpresaId',fld:'vPARAMETROCONSULTAEMPRESAID'},{av:'A3228ParametroConsultaCodigo',fld:'PARAMETROCONSULTACODIGO'},{av:'AV26ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO'},{av:'A3234ParametroConsultaCampoUsuAlt',fld:'PARAMETROCONSULTACAMPOUSUALT'},{av:'A3230ParametroConsultaCampoCod',fld:'PARAMETROCONSULTACAMPOCOD'}],[{av:'AV163SNQtdeSaldo',fld:'vSNQTDESALDO'},{av:'AV167SNValidaInv',fld:'vSNVALIDAINV'},{av:'AV169SNObrQtde',fld:'vSNOBRQTDE'},{av:'AV161SdtFiliais',fld:'vSDTFILIAIS'},{av:'AV131ImpQtdeAtualNeg',fld:'vIMPQTDEATUALNEG'},{av:'AV130ImpQtdeAtualPos',fld:'vIMPQTDEATUALPOS'},{av:'AV132ImpQtdeAtualZer',fld:'vIMPQTDEATUALZER'},{av:'AV275GXV17',fld:'vGXV17'},{av:'AV176SdtFiliaisItem',fld:'vSDTFILIAISITEM'},{av:'gx.fn.getCtrlProperty("vIMPQTDEATUALNEG","Enabled")',ctrl:'vIMPQTDEATUALNEG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPQTDEATUALPOS","Enabled")',ctrl:'vIMPQTDEATUALPOS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPQTDEATUALZER","Enabled")',ctrl:'vIMPQTDEATUALZER',prop:'Enabled'},{av:'AV134ImpQtdeInventarioNeg',fld:'vIMPQTDEINVENTARIONEG'},{av:'AV133ImpQtdeInventarioPos',fld:'vIMPQTDEINVENTARIOPOS'},{av:'AV135ImpQtdeInventarioZer',fld:'vIMPQTDEINVENTARIOZER'},{av:'AV276GXV18',fld:'vGXV18'},{av:'gx.fn.getCtrlProperty("vIMPQTDEINVENTARIONEG","Enabled")',ctrl:'vIMPQTDEINVENTARIONEG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPQTDEINVENTARIOPOS","Enabled")',ctrl:'vIMPQTDEINVENTARIOPOS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPQTDEINVENTARIOZER","Enabled")',ctrl:'vIMPQTDEINVENTARIOZER',prop:'Enabled'},{av:'AV137ImpQtdeSaldoNeg',fld:'vIMPQTDESALDONEG'},{av:'AV136ImpQtdeSaldoPos',fld:'vIMPQTDESALDOPOS'},{av:'AV138ImpQtdeSaldoZer',fld:'vIMPQTDESALDOZER'},{av:'AV277GXV19',fld:'vGXV19'},{av:'gx.fn.getCtrlProperty("vIMPQTDESALDONEG","Enabled")',ctrl:'vIMPQTDESALDONEG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPQTDESALDOPOS","Enabled")',ctrl:'vIMPQTDESALDOPOS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPQTDESALDOZER","Enabled")',ctrl:'vIMPQTDESALDOZER',prop:'Enabled'}]];
   this.EvtParms["VPRODUTOID.ISVALID"] = [[{av:'AV61ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV57ProdutoId',fld:'vPRODUTOID'}],[{av:'AV58ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'}]];
   this.EvtParms["VPRODUTOFAMILIAID.ISVALID"] = [[{av:'AV85FamiliaEmpresaId',fld:'vFAMILIAEMPRESAID'},{av:'AV84ProdutoFamiliaId',fld:'vPRODUTOFAMILIAID'}],[{av:'AV87ProdutoFamiliaDescricao',fld:'vPRODUTOFAMILIADESCRICAO'}]];
   this.EvtParms["VPRODUTOFABRICANTEID.ISVALID"] = [[{av:'AV49PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV90ProdutoFabricanteId',fld:'vPRODUTOFABRICANTEID'}],[{av:'AV92ProdutoFabricanteFantasia',fld:'vPRODUTOFABRICANTEFANTASIA'}]];
   this.setPrompt("PROMPT_PARAMETROCONSULTACODIGO", [30]);
   this.setPrompt("PROMPT_PRECOID", [51]);
   this.setPrompt("PROMPT_PESSOAID", [161]);
   this.setPrompt("PROMPT_ESQUEMACODIGO", [171]);
   this.setPrompt("&PROMPTPRODUTO", [223,317,317,317,318,318,317]);
   this.setPrompt("&PROMPTFAMILIA", [242]);
   this.setPrompt("&PROMPTFABRICANTE", [260]);
   this.EnterCtrl = ["BTNIMPRIMIR"];
   this.setVCMap("AV53Data", "vDATA", 0, "date");
   this.setVCMap("AV75SNVenda", "vSNVENDA", 0, "char");
   this.setVCMap("AV165Mensagem", "vMENSAGEM", 0, "char");
   this.setVCMap("AV187SnInventarioLote", "vSNINVENTARIOLOTE", 0, "char");
   this.setVCMap("AV217Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV195SdtTxtTela", "vSDTTXTTELA", 0, "CollSdtTxtTela.SdtTxtTelaItem");
   this.setVCMap("AV8EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("A3227ParametroConsultaEmpresaId", "PARAMETROCONSULTAEMPRESAID", 0, "char");
   this.setVCMap("A3228ParametroConsultaCodigo", "PARAMETROCONSULTACODIGO", 0, "int");
   this.setVCMap("A3234ParametroConsultaCampoUsuAlt", "PARAMETROCONSULTACAMPOUSUALT", 0, "char");
   this.setVCMap("A3230ParametroConsultaCampoCod", "PARAMETROCONSULTACAMPOCOD", 0, "char");
   this.setVCMap("AV170SNNovaLinhaProduto", "vSNNOVALINHAPRODUTO", 0, "char");
   this.setVCMap("AV21SNErro", "vSNERRO", 0, "char");
   this.setVCMap("AV62SNExcluiProduto", "vSNEXCLUIPRODUTO", 0, "char");
   this.setVCMap("AV171SNNovaLinhaFamilia", "vSNNOVALINHAFAMILIA", 0, "char");
   this.setVCMap("AV86SNExcluiFamilia", "vSNEXCLUIFAMILIA", 0, "char");
   this.setVCMap("AV172SNNovaLinhaFabricante", "vSNNOVALINHAFABRICANTE", 0, "char");
   this.setVCMap("AV91SNExcluiFabricante", "vSNEXCLUIFABRICANTE", 0, "char");
   this.setVCMap("AV173SNNovaLinhaClassificacao", "vSNNOVALINHACLASSIFICACAO", 0, "char");
   this.setVCMap("AV97SNExcluiClassificacao", "vSNEXCLUICLASSIFICACAO", 0, "char");
   this.setVCMap("AV174SNNovaLinhaCodificacao", "vSNNOVALINHACODIFICACAO", 0, "char");
   this.setVCMap("AV103SNExcluiCodificacao", "vSNEXCLUICODIFICACAO", 0, "char");
   this.setVCMap("AV56SdtProdutoRelProduto", "vSDTPRODUTORELPRODUTO", 0, "CollSdtProdutoRelProduto.SdtProdutoRelProdutoItem");
   this.setVCMap("AV165Mensagem", "vMENSAGEM", 0, "char");
   this.setVCMap("AV187SnInventarioLote", "vSNINVENTARIOLOTE", 0, "char");
   this.setVCMap("AV217Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV195SdtTxtTela", "vSDTTXTTELA", 0, "CollSdtTxtTela.SdtTxtTelaItem");
   this.setVCMap("AV8EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("A3227ParametroConsultaEmpresaId", "PARAMETROCONSULTAEMPRESAID", 0, "char");
   this.setVCMap("A3228ParametroConsultaCodigo", "PARAMETROCONSULTACODIGO", 0, "int");
   this.setVCMap("A3234ParametroConsultaCampoUsuAlt", "PARAMETROCONSULTACAMPOUSUALT", 0, "char");
   this.setVCMap("A3230ParametroConsultaCampoCod", "PARAMETROCONSULTACAMPOCOD", 0, "char");
   this.setVCMap("AV170SNNovaLinhaProduto", "vSNNOVALINHAPRODUTO", 0, "char");
   this.setVCMap("AV21SNErro", "vSNERRO", 0, "char");
   this.setVCMap("AV62SNExcluiProduto", "vSNEXCLUIPRODUTO", 0, "char");
   this.setVCMap("AV171SNNovaLinhaFamilia", "vSNNOVALINHAFAMILIA", 0, "char");
   this.setVCMap("AV86SNExcluiFamilia", "vSNEXCLUIFAMILIA", 0, "char");
   this.setVCMap("AV172SNNovaLinhaFabricante", "vSNNOVALINHAFABRICANTE", 0, "char");
   this.setVCMap("AV91SNExcluiFabricante", "vSNEXCLUIFABRICANTE", 0, "char");
   this.setVCMap("AV173SNNovaLinhaClassificacao", "vSNNOVALINHACLASSIFICACAO", 0, "char");
   this.setVCMap("AV97SNExcluiClassificacao", "vSNEXCLUICLASSIFICACAO", 0, "char");
   this.setVCMap("AV174SNNovaLinhaCodificacao", "vSNNOVALINHACODIFICACAO", 0, "char");
   this.setVCMap("AV103SNExcluiCodificacao", "vSNEXCLUICODIFICACAO", 0, "char");
   this.setVCMap("AV56SdtProdutoRelProduto", "vSDTPRODUTORELPRODUTO", 0, "CollSdtProdutoRelProduto.SdtProdutoRelProdutoItem");
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV64promptProduto", rfrProp:"Value", gxAttId:"Promptproduto"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV65excLinhaProduto", rfrProp:"Value", gxAttId:"Exclinhaproduto"});
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[338]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[332]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[331]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[330]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[329]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[328]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[327]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[326]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[325]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[324]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[323]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[334]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[333]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[339]);
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[81]);
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV165Mensagem"});
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[335]);
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV187SnInventarioLote"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV217Pgmname"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV195SdtTxtTela"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV8EmpresaLogadaId"});
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[45]);
   GridprodutoContainer.addRefreshingVar({rfrVar:"A3227ParametroConsultaEmpresaId"});
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[311]);
   GridprodutoContainer.addRefreshingVar({rfrVar:"A3228ParametroConsultaCodigo"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"A3234ParametroConsultaCampoUsuAlt"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"A3230ParametroConsultaCampoCod"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV170SNNovaLinhaProduto"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV21SNErro"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV62SNExcluiProduto"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV57ProdutoId", rfrProp:"Value", gxAttId:"Produtoid"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV58ProdutoDescricaoResumida", rfrProp:"Value", gxAttId:"Produtodescricaoresumida"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV171SNNovaLinhaFamilia"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV86SNExcluiFamilia"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV84ProdutoFamiliaId", rfrProp:"Value", gxAttId:"Produtofamiliaid"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV87ProdutoFamiliaDescricao", rfrProp:"Value", gxAttId:"Produtofamiliadescricao"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV172SNNovaLinhaFabricante"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV91SNExcluiFabricante"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV90ProdutoFabricanteId", rfrProp:"Value", gxAttId:"Produtofabricanteid"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV92ProdutoFabricanteFantasia", rfrProp:"Value", gxAttId:"Produtofabricantefantasia"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV173SNNovaLinhaClassificacao"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV97SNExcluiClassificacao"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV96ClassificacaoEstIdGrid", rfrProp:"Value", gxAttId:"Classificacaoestidgrid"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV95ProdutoClassificacaoValor", rfrProp:"Value", gxAttId:"Produtoclassificacaovalor"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV174SNNovaLinhaCodificacao"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV103SNExcluiCodificacao"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV100CodificacaoEstIdGrid", rfrProp:"Value", gxAttId:"Codificacaoestidgrid"});
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV101ProdutoCodificacaoValor", rfrProp:"Value", gxAttId:"Produtocodificacaovalor"});
   GridprodutoContainer.addRefreshingVar(this.GXValidFnc[14]);
   GridprodutoContainer.addRefreshingVar({rfrVar:"AV56SdtProdutoRelProduto"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV66promptFamilia", rfrProp:"Value", gxAttId:"Promptfamilia"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV67excLinhaFamilia", rfrProp:"Value", gxAttId:"Exclinhafamilia"});
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[338]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[332]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[331]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[330]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[329]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[328]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[327]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[326]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[325]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[324]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[323]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[334]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[333]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[339]);
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[81]);
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV165Mensagem"});
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[335]);
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV187SnInventarioLote"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV217Pgmname"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV195SdtTxtTela"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV8EmpresaLogadaId"});
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[45]);
   GridfamiliaContainer.addRefreshingVar({rfrVar:"A3227ParametroConsultaEmpresaId"});
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[311]);
   GridfamiliaContainer.addRefreshingVar({rfrVar:"A3228ParametroConsultaCodigo"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"A3234ParametroConsultaCampoUsuAlt"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"A3230ParametroConsultaCampoCod"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV170SNNovaLinhaProduto"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV21SNErro"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV62SNExcluiProduto"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV57ProdutoId", rfrProp:"Value", gxAttId:"Produtoid"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV58ProdutoDescricaoResumida", rfrProp:"Value", gxAttId:"Produtodescricaoresumida"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV171SNNovaLinhaFamilia"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV86SNExcluiFamilia"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV84ProdutoFamiliaId", rfrProp:"Value", gxAttId:"Produtofamiliaid"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV87ProdutoFamiliaDescricao", rfrProp:"Value", gxAttId:"Produtofamiliadescricao"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV172SNNovaLinhaFabricante"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV91SNExcluiFabricante"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV90ProdutoFabricanteId", rfrProp:"Value", gxAttId:"Produtofabricanteid"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV92ProdutoFabricanteFantasia", rfrProp:"Value", gxAttId:"Produtofabricantefantasia"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV173SNNovaLinhaClassificacao"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV97SNExcluiClassificacao"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV96ClassificacaoEstIdGrid", rfrProp:"Value", gxAttId:"Classificacaoestidgrid"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV95ProdutoClassificacaoValor", rfrProp:"Value", gxAttId:"Produtoclassificacaovalor"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV174SNNovaLinhaCodificacao"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV103SNExcluiCodificacao"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV100CodificacaoEstIdGrid", rfrProp:"Value", gxAttId:"Codificacaoestidgrid"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV101ProdutoCodificacaoValor", rfrProp:"Value", gxAttId:"Produtocodificacaovalor"});
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[14]);
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV81SdtFamiliaRelProduto"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV68promptFabricante", rfrProp:"Value", gxAttId:"Promptfabricante"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV69excLinhaFabricante", rfrProp:"Value", gxAttId:"Exclinhafabricante"});
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[338]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[332]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[331]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[330]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[329]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[328]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[327]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[326]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[325]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[324]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[323]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[334]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[333]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[339]);
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[81]);
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV165Mensagem"});
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[335]);
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV187SnInventarioLote"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV217Pgmname"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV195SdtTxtTela"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV8EmpresaLogadaId"});
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[45]);
   GridfabricanteContainer.addRefreshingVar({rfrVar:"A3227ParametroConsultaEmpresaId"});
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[311]);
   GridfabricanteContainer.addRefreshingVar({rfrVar:"A3228ParametroConsultaCodigo"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"A3234ParametroConsultaCampoUsuAlt"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"A3230ParametroConsultaCampoCod"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV170SNNovaLinhaProduto"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV21SNErro"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV62SNExcluiProduto"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV57ProdutoId", rfrProp:"Value", gxAttId:"Produtoid"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV58ProdutoDescricaoResumida", rfrProp:"Value", gxAttId:"Produtodescricaoresumida"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV171SNNovaLinhaFamilia"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV86SNExcluiFamilia"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV84ProdutoFamiliaId", rfrProp:"Value", gxAttId:"Produtofamiliaid"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV87ProdutoFamiliaDescricao", rfrProp:"Value", gxAttId:"Produtofamiliadescricao"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV172SNNovaLinhaFabricante"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV91SNExcluiFabricante"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV90ProdutoFabricanteId", rfrProp:"Value", gxAttId:"Produtofabricanteid"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV92ProdutoFabricanteFantasia", rfrProp:"Value", gxAttId:"Produtofabricantefantasia"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV173SNNovaLinhaClassificacao"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV97SNExcluiClassificacao"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV96ClassificacaoEstIdGrid", rfrProp:"Value", gxAttId:"Classificacaoestidgrid"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV95ProdutoClassificacaoValor", rfrProp:"Value", gxAttId:"Produtoclassificacaovalor"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV174SNNovaLinhaCodificacao"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV103SNExcluiCodificacao"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV100CodificacaoEstIdGrid", rfrProp:"Value", gxAttId:"Codificacaoestidgrid"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV101ProdutoCodificacaoValor", rfrProp:"Value", gxAttId:"Produtocodificacaovalor"});
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[14]);
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV77SdtFabricanteRelProduto"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV70excLinhaClassificacao", rfrProp:"Value", gxAttId:"Exclinhaclassificacao"});
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[338]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[332]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[331]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[330]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[329]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[328]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[327]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[326]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[325]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[324]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[323]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[334]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[333]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[339]);
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[81]);
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV165Mensagem"});
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[335]);
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV187SnInventarioLote"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV217Pgmname"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV195SdtTxtTela"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV8EmpresaLogadaId"});
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[45]);
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"A3227ParametroConsultaEmpresaId"});
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[311]);
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"A3228ParametroConsultaCodigo"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"A3234ParametroConsultaCampoUsuAlt"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"A3230ParametroConsultaCampoCod"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV170SNNovaLinhaProduto"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV21SNErro"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV62SNExcluiProduto"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV57ProdutoId", rfrProp:"Value", gxAttId:"Produtoid"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV58ProdutoDescricaoResumida", rfrProp:"Value", gxAttId:"Produtodescricaoresumida"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV171SNNovaLinhaFamilia"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV86SNExcluiFamilia"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV84ProdutoFamiliaId", rfrProp:"Value", gxAttId:"Produtofamiliaid"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV87ProdutoFamiliaDescricao", rfrProp:"Value", gxAttId:"Produtofamiliadescricao"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV172SNNovaLinhaFabricante"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV91SNExcluiFabricante"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV90ProdutoFabricanteId", rfrProp:"Value", gxAttId:"Produtofabricanteid"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV92ProdutoFabricanteFantasia", rfrProp:"Value", gxAttId:"Produtofabricantefantasia"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV173SNNovaLinhaClassificacao"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV97SNExcluiClassificacao"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV96ClassificacaoEstIdGrid", rfrProp:"Value", gxAttId:"Classificacaoestidgrid"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV95ProdutoClassificacaoValor", rfrProp:"Value", gxAttId:"Produtoclassificacaovalor"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV174SNNovaLinhaCodificacao"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV103SNExcluiCodificacao"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV100CodificacaoEstIdGrid", rfrProp:"Value", gxAttId:"Codificacaoestidgrid"});
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV101ProdutoCodificacaoValor", rfrProp:"Value", gxAttId:"Produtocodificacaovalor"});
   GridclassificacaoContainer.addRefreshingVar(this.GXValidFnc[14]);
   GridclassificacaoContainer.addRefreshingVar({rfrVar:"AV78SdtClassificacaoRelProduto"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV71excLinhaCodificacao", rfrProp:"Value", gxAttId:"Exclinhacodificacao"});
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[338]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[332]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[331]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[330]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[329]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[328]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[327]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[326]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[325]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[324]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[323]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[334]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[333]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[339]);
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[81]);
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV165Mensagem"});
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[335]);
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV187SnInventarioLote"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV217Pgmname"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV195SdtTxtTela"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV8EmpresaLogadaId"});
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[45]);
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"A3227ParametroConsultaEmpresaId"});
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[311]);
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"A3228ParametroConsultaCodigo"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"A3234ParametroConsultaCampoUsuAlt"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"A3230ParametroConsultaCampoCod"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV170SNNovaLinhaProduto"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV21SNErro"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV62SNExcluiProduto"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV57ProdutoId", rfrProp:"Value", gxAttId:"Produtoid"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV58ProdutoDescricaoResumida", rfrProp:"Value", gxAttId:"Produtodescricaoresumida"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV171SNNovaLinhaFamilia"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV86SNExcluiFamilia"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV84ProdutoFamiliaId", rfrProp:"Value", gxAttId:"Produtofamiliaid"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV87ProdutoFamiliaDescricao", rfrProp:"Value", gxAttId:"Produtofamiliadescricao"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV172SNNovaLinhaFabricante"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV91SNExcluiFabricante"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV90ProdutoFabricanteId", rfrProp:"Value", gxAttId:"Produtofabricanteid"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV92ProdutoFabricanteFantasia", rfrProp:"Value", gxAttId:"Produtofabricantefantasia"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV173SNNovaLinhaClassificacao"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV97SNExcluiClassificacao"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV96ClassificacaoEstIdGrid", rfrProp:"Value", gxAttId:"Classificacaoestidgrid"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV95ProdutoClassificacaoValor", rfrProp:"Value", gxAttId:"Produtoclassificacaovalor"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV174SNNovaLinhaCodificacao"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV103SNExcluiCodificacao"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV100CodificacaoEstIdGrid", rfrProp:"Value", gxAttId:"Codificacaoestidgrid"});
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV101ProdutoCodificacaoValor", rfrProp:"Value", gxAttId:"Produtocodificacaovalor"});
   GridcodificacaoContainer.addRefreshingVar(this.GXValidFnc[14]);
   GridcodificacaoContainer.addRefreshingVar({rfrVar:"AV79SdtCodificacaoRelProduto"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaoinventario());
