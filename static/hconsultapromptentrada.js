/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:57:44.41
*/
gx.evt.autoSkip = false;
gx.define('hconsultapromptentrada', false, function () {
   this.ServerClass =  "hconsultapromptentrada" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A4701EntradaValorProdutos=gx.fn.getDecimalValue("ENTRADAVALORPRODUTOS",'.',',') ;
      this.A6542EntradaValorServico=gx.fn.getDecimalValue("ENTRADAVALORSERVICO",'.',',') ;
      this.A4703EntradaValorDesconto=gx.fn.getDecimalValue("ENTRADAVALORDESCONTO",'.',',') ;
      this.A4716EntradaValorICMSST=gx.fn.getDecimalValue("ENTRADAVALORICMSST",'.',',') ;
      this.A4706EntradaValorSeguro=gx.fn.getDecimalValue("ENTRADAVALORSEGURO",'.',',') ;
      this.A4707EntradaValorOutrasDespesas=gx.fn.getDecimalValue("ENTRADAVALOROUTRASDESPESAS",'.',',') ;
      this.A4717EntradaValorIPI=gx.fn.getDecimalValue("ENTRADAVALORIPI",'.',',') ;
      this.A4705EntradaValorFrete=gx.fn.getDecimalValue("ENTRADAVALORFRETE",'.',',') ;
      this.A4737EntradaFreteEntraTotal=gx.fn.getControlValue("ENTRADAFRETEENTRATOTAL") ;
      this.A10530EntradaValorICMSDesonerado=gx.fn.getDecimalValue("ENTRADAVALORICMSDESONERADO",'.',',') ;
      this.A11303EntradaICMSDesEntraTotal=gx.fn.getControlValue("ENTRADAICMSDESENTRATOTAL") ;
      this.A10599EntradaValorFCPST=gx.fn.getDecimalValue("ENTRADAVALORFCPST",'.',',') ;
      this.A10600EntradaValorFCPSTRet=gx.fn.getDecimalValue("ENTRADAVALORFCPSTRET",'.',',') ;
      this.A4709EntradaValorTotal=gx.fn.getDecimalValue("ENTRADAVALORTOTAL",'.',',') ;
      this.A4638EntradaId=gx.fn.getIntegerValue("ENTRADAID",'.') ;
      this.A4637EntradaEmpresaId=gx.fn.getControlValue("ENTRADAEMPRESAID") ;
      this.AV54EntradaEmpresaId=gx.fn.getControlValue("vENTRADAEMPRESAID") ;
      this.A4659EntradaFilialEmpId=gx.fn.getControlValue("ENTRADAFILIALEMPID") ;
      this.A4660EntradaFilialId=gx.fn.getIntegerValue("ENTRADAFILIALID",'.') ;
      this.A4642EntradaFornecedorEmpId=gx.fn.getControlValue("ENTRADAFORNECEDOREMPID") ;
      this.A4643EntradaFornecedorId=gx.fn.getIntegerValue("ENTRADAFORNECEDORID",'.') ;
      this.A4650EntradaCFOPCodigo=gx.fn.getIntegerValue("ENTRADACFOPCODIGO",'.') ;
      this.A4655EntradaDataEmissao=gx.fn.getDateValue("ENTRADADATAEMISSAO") ;
      this.A4656EntradaDataEntrada=gx.fn.getDateValue("ENTRADADATAENTRADA") ;
      this.A4647EntradaSerie=gx.fn.getControlValue("ENTRADASERIE") ;
      this.A4646EntradaNumeroDocumento=gx.fn.getIntegerValue("ENTRADANUMERODOCUMENTO",'.') ;
      this.A4667EntradaSituacao=gx.fn.getControlValue("ENTRADASITUACAO") ;
      this.A4640EntradaTipo=gx.fn.getControlValue("ENTRADATIPO") ;
      this.AV93Seleciona=gx.fn.getIntegerValue("vSELECIONA",'.') ;
      this.A4645EntradaFornecedorRazao=gx.fn.getControlValue("ENTRADAFORNECEDORRAZAO") ;
      this.A4845EntradaItemLoteProdutoEmpId=gx.fn.getControlValue("ENTRADAITEMLOTEPRODUTOEMPID") ;
      this.A4846EntradaItemLoteProdutoId=gx.fn.getIntegerValue("ENTRADAITEMLOTEPRODUTOID",'.') ;
      this.AV94EntradaSituacaoFiltro=gx.fn.getControlValue("vENTRADASITUACAOFILTRO") ;
      this.AV95EntradaTipoFiltro=gx.fn.getControlValue("vENTRADATIPOFILTRO") ;
      this.A3430CFOPCodigo=gx.fn.getIntegerValue("CFOPCODIGO",'.') ;
      this.AV71EntradaCFOPCodigo=gx.fn.getIntegerValue("vENTRADACFOPCODIGO",'.') ;
      this.A3445CFOPTipo=gx.fn.getControlValue("CFOPTIPO") ;
      this.AV88Tipo=gx.fn.getControlValue("vTIPO") ;
      this.AV51EntradaIdOut=gx.fn.getIntegerValue("vENTRADAIDOUT",'.') ;
      this.AV96SerieOut=gx.fn.getControlValue("vSERIEOUT") ;
      this.AV97DocumentoOut=gx.fn.getIntegerValue("vDOCUMENTOOUT",'.') ;
   };
   this.Validv_Filialidfiltro=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALIDFILTRO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtoidfiltro=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOIDFILTRO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Fornecedoridfiltro=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFORNECEDORIDFILTRO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Cfopcodigofiltro=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCFOPCODIGOFILTRO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradatipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADATIPO");
         this.AnyError  = 0;
         if ( ! ( this.AV45EntradaTipo == "1" || this.AV45EntradaTipo == "2" || this.AV45EntradaTipo == "3" || this.AV45EntradaTipo == "4" || this.AV45EntradaTipo == "5" || this.AV45EntradaTipo == "6" || this.AV45EntradaTipo == "7" ) )
         {
            try {
               gxballoon.setError("Campo EntradaTipo fora do intervalo");
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
   this.s134_client=function()
   {
      this.AV93Seleciona = gx.num.trunc( 1 ,0) ;
      if ( this.AV94EntradaSituacaoFiltro == "N" && this.AV36EntradaSnNormal == "S" )
      {
         this.AV93Seleciona = gx.num.trunc( 0 ,0) ;
      }
      else if ( this.AV94EntradaSituacaoFiltro == "C" && this.AV41EntradaSnCancelada == "S" )
      {
         this.AV93Seleciona = gx.num.trunc( 0 ,0) ;
      }
      else if ( this.AV94EntradaSituacaoFiltro == "I" && this.AV44EntradaSnInutilizada == "S" )
      {
         this.AV93Seleciona = gx.num.trunc( 0 ,0) ;
      }
      else
      {
         if ( this.AV36EntradaSnNormal == "N" && this.AV41EntradaSnCancelada == "N" && this.AV44EntradaSnInutilizada == "N" )
         {
            this.AV93Seleciona = gx.num.trunc( 0 ,0) ;
         }
      }
      if ( this.AV93Seleciona == 0 )
      {
         if ( this.AV95EntradaTipoFiltro == "1" && this.AV35EntradaSnNotaEnt == "N" )
         {
            this.AV93Seleciona = gx.num.trunc( 1 ,0) ;
         }
         else if ( this.AV95EntradaTipoFiltro == "2" && this.AV40EntradaSnNotaComp == "N" )
         {
            this.AV93Seleciona = gx.num.trunc( 1 ,0) ;
         }
         else if ( this.AV95EntradaTipoFiltro == "3" && this.AV90EntradaSnAjusteEnt == "N" )
         {
            this.AV93Seleciona = gx.num.trunc( 1 ,0) ;
         }
         else if ( this.AV95EntradaTipoFiltro == "4" && this.AV89EntradaSnDevolucao == "N" )
         {
            this.AV93Seleciona = gx.num.trunc( 1 ,0) ;
         }
         else if ( this.AV95EntradaTipoFiltro == "6" && this.AV43EntradaSnAjuste == "N" )
         {
            this.AV93Seleciona = gx.num.trunc( 1 ,0) ;
         }
         else if ( this.AV95EntradaTipoFiltro == "5" && this.AV91EntradaSnTroca == "N" )
         {
            this.AV93Seleciona = gx.num.trunc( 1 ,0) ;
         }
         else if ( this.AV95EntradaTipoFiltro == "7" && this.AV92EntradaSnTransf == "N" )
         {
            this.AV93Seleciona = gx.num.trunc( 1 ,0) ;
         }
      }
   };
   this.e22vd2_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hconsultaentradacustos",[this.AV54EntradaEmpresaId, this.AV22EntradaId]), []);
      this.refreshOutputs([]);
   };
   this.e23vd2_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalconsultapromptentrada",["PAR", this.AV54EntradaEmpresaId, this.AV22EntradaId, "", "", "", "", "", "", "", ""]), []);
      this.refreshOutputs([]);
   };
   this.e18vd2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e16vd2_client=function()
   {
      this.executeServerEvent("SELECIONARTIPO.CLICK", true, null, false, true);
   };
   this.e11vd2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12vd2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13vd2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14vd2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15vd2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20vd2_client=function()
   {
      this.executeServerEvent("'ITENS'", true, arguments[0], false, false);
   };
   this.e24vd1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,15,17,19,20,21,24,26,27,28,30,32,35,37,40,42,44,46,48,49,52,54,57,59,61,63,66,68,70,73,75,78,80,82,84,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,111,114,116,118,120,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147];
   this.GXLastCtrlId =147;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",89,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultapromptentrada",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Entradaid",90,"vENTRADAID","ID","","EntradaId","int",0,"px",10,10,"right",null,[],"Entradaid","EntradaId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Entradanumerodocumento",91,"vENTRADANUMERODOCUMENTO","Documento","","EntradaNumeroDocumento","int",0,"px",9,9,"right",null,[],"Entradanumerodocumento","EntradaNumeroDocumento",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Entradafilialempid",92,"vENTRADAFILIALEMPID","Empresa da Filial","","EntradaFilialEmpId","char",0,"px",10,10,"left",null,[],"Entradafilialempid","EntradaFilialEmpId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Entradafornecedorempid",93,"vENTRADAFORNECEDOREMPID","Empresa do Fornecedor","","EntradaFornecedorEmpId","char",0,"px",10,10,"left",null,[],"Entradafornecedorempid","EntradaFornecedorEmpId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Entradafornecedorid",94,"vENTRADAFORNECEDORID","Fornecedor","","EntradaFornecedorId","int",0,"px",7,7,"right",null,[],"Entradafornecedorid","EntradaFornecedorId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Entradafornecrazao",95,"vENTRADAFORNECRAZAO","Razão Social","","EntradaFornecRazao","svchar",0,"px",60,60,"left",null,[],"Entradafornecrazao","EntradaFornecRazao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Entradaserie",96,"vENTRADASERIE","Série","","EntradaSerie","char",0,"px",4,4,"left",null,[],"Entradaserie","EntradaSerie",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Entradafilialid",97,"vENTRADAFILIALID","Filial","","EntradaFilialId","int",0,"px",7,7,"right",null,[],"Entradafilialid","EntradaFilialId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Entradadataemissao",98,"vENTRADADATAEMISSAO","Emissão","","EntradaDataEmissao","date",0,"px",10,10,"right",null,[],"Entradadataemissao","EntradaDataEmissao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Entradadataentrada",99,"vENTRADADATAENTRADA","Entrada","","EntradaDataEntrada","date",0,"px",10,10,"right",null,[],"Entradadataentrada","EntradaDataEntrada",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Entradavalortotal",100,"vENTRADAVALORTOTAL","Valor Total","","EntradaValorTotal","decimal",0,"px",22,22,"right",null,[],"Entradavalortotal","EntradaValorTotal",true,2,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox("Entradasituacao",101,"vENTRADASITUACAO","Situação da Nota","EntradaSituacao","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmpcustos","vBMPCUSTOS",102,0,"px",17,"px","e22vd2_client","","Custos","Image","GridColumnImage");
   GridContainer.addComboBox("Entradatipo",103,"vENTRADATIPO","Tipo de Entrada","EntradaTipo","char",null,0,false,false,0,"px","");
   GridContainer.addBitmap("&Bmpitem","vBMPITEM",104,0,"px",17,"px","e20vd2_client","","Itens","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpparc","vBMPPARC",105,0,"px",17,"px","e23vd2_client","","Parc","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TXTFILIAL", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialidfiltro,isvalid:null,rgrid:[],fld:"vFILIALIDFILTRO",gxz:"ZV28FilialIdFiltro",gxold:"OV28FilialIdFiltro",gxvar:"AV28FilialIdFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28FilialIdFiltro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28FilialIdFiltro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDFILTRO",gx.O.AV28FilialIdFiltro,0)},c2v:function(){gx.O.AV28FilialIdFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDFILTRO",'.')},nac:gx.falseFn};
   GXValidFnc[14]={fld:"IMGPROMPT",grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV61FilialNome",gxold:"OV61FilialNome",gxvar:"AV61FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61FilialNome=Value},v2z:function(Value){gx.O.ZV61FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV61FilialNome,0)},c2v:function(){gx.O.AV61FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TXTPROD", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoidfiltro,isvalid:null,rgrid:[],fld:"vPRODUTOIDFILTRO",gxz:"ZV42ProdutoIdFiltro",gxold:"OV42ProdutoIdFiltro",gxvar:"AV42ProdutoIdFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42ProdutoIdFiltro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42ProdutoIdFiltro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOIDFILTRO",gx.O.AV42ProdutoIdFiltro,0)},c2v:function(){gx.O.AV42ProdutoIdFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOIDFILTRO",'.')},nac:gx.falseFn};
   GXValidFnc[20]={fld:"IMGPROMPTPROD",grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDA",gxz:"ZV73ProdutoDescricaoResumida",gxold:"OV73ProdutoDescricaoResumida",gxvar:"AV73ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.ZV73ProdutoDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAORESUMIDA",gx.O.AV73ProdutoDescricaoResumida,0)},c2v:function(){gx.O.AV73ProdutoDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TXTFORNEC", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Fornecedoridfiltro,isvalid:null,rgrid:[],fld:"vFORNECEDORIDFILTRO",gxz:"ZV32FornecedorIdFiltro",gxold:"OV32FornecedorIdFiltro",gxvar:"AV32FornecedorIdFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32FornecedorIdFiltro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32FornecedorIdFiltro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFORNECEDORIDFILTRO",gx.O.AV32FornecedorIdFiltro,0)},c2v:function(){gx.O.AV32FornecedorIdFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFORNECEDORIDFILTRO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"IMGPROMPTFORNEC",grid:0};
   GXValidFnc[28]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFORNECEDORFANTASIA",gxz:"ZV67FornecedorFantasia",gxold:"OV67FornecedorFantasia",gxvar:"AV67FornecedorFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67FornecedorFantasia=Value},v2z:function(Value){gx.O.ZV67FornecedorFantasia=Value},v2c:function(){gx.fn.setControlValue("vFORNECEDORFANTASIA",gx.O.AV67FornecedorFantasia,0)},c2v:function(){gx.O.AV67FornecedorFantasia=this.val()},val:function(){return gx.fn.getControlValue("vFORNECEDORFANTASIA")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TXTTPCFOP", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCFOPTIPOFILTRO",gxz:"ZV70CFOPTipoFiltro",gxold:"OV70CFOPTipoFiltro",gxvar:"AV70CFOPTipoFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV70CFOPTipoFiltro=Value},v2z:function(Value){gx.O.ZV70CFOPTipoFiltro=Value},v2c:function(){gx.fn.setComboBoxValue("vCFOPTIPOFILTRO",gx.O.AV70CFOPTipoFiltro)},c2v:function(){gx.O.AV70CFOPTipoFiltro=this.val()},val:function(){return gx.fn.getControlValue("vCFOPTIPOFILTRO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TXTSERIENUM", format:0,grid:0};
   GXValidFnc[37]={fld:"TABLERANGESERIE",grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADASERIEFILTRO",gxz:"ZV38EntradaSerieFiltro",gxold:"OV38EntradaSerieFiltro",gxvar:"AV38EntradaSerieFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38EntradaSerieFiltro=Value},v2z:function(Value){gx.O.ZV38EntradaSerieFiltro=Value},v2c:function(){gx.fn.setControlValue("vENTRADASERIEFILTRO",gx.O.AV38EntradaSerieFiltro,0)},c2v:function(){gx.O.AV38EntradaSerieFiltro=this.val()},val:function(){return gx.fn.getControlValue("vENTRADASERIEFILTRO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TXTBAR", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADANUMERODOCUMENTOFILTRO",gxz:"ZV39EntradaNumeroDocumentoFiltro",gxold:"OV39EntradaNumeroDocumentoFiltro",gxvar:"AV39EntradaNumeroDocumentoFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39EntradaNumeroDocumentoFiltro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39EntradaNumeroDocumentoFiltro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADANUMERODOCUMENTOFILTRO",gx.O.AV39EntradaNumeroDocumentoFiltro,0)},c2v:function(){gx.O.AV39EntradaNumeroDocumentoFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADANUMERODOCUMENTOFILTRO",'.')},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TXTCFOP", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cfopcodigofiltro,isvalid:null,rgrid:[],fld:"vCFOPCODIGOFILTRO",gxz:"ZV37CFOPCodigoFiltro",gxold:"OV37CFOPCodigoFiltro",gxvar:"AV37CFOPCodigoFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37CFOPCodigoFiltro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37CFOPCodigoFiltro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFOPCODIGOFILTRO",gx.O.AV37CFOPCodigoFiltro,0)},c2v:function(){gx.O.AV37CFOPCodigoFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFOPCODIGOFILTRO",'.')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"IMGPROMPTCFOP",grid:0};
   GXValidFnc[52]={fld:"TXTDTEMI", format:0,grid:0};
   GXValidFnc[54]={fld:"TABLERANGEEMISSAO",grid:0};
   GXValidFnc[57]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADADATAEMISSAOINI",gxz:"ZV29EntradaDataEmissaoIni",gxold:"OV29EntradaDataEmissaoIni",gxvar:"AV29EntradaDataEmissaoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29EntradaDataEmissaoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV29EntradaDataEmissaoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vENTRADADATAEMISSAOINI",gx.O.AV29EntradaDataEmissaoIni,0)},c2v:function(){gx.O.AV29EntradaDataEmissaoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vENTRADADATAEMISSAOINI")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TXTAEMI1", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADADATAEMISSAOFIN",gxz:"ZV30EntradaDataEmissaoFin",gxold:"OV30EntradaDataEmissaoFin",gxvar:"AV30EntradaDataEmissaoFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30EntradaDataEmissaoFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV30EntradaDataEmissaoFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vENTRADADATAEMISSAOFIN",gx.O.AV30EntradaDataEmissaoFin,0)},c2v:function(){gx.O.AV30EntradaDataEmissaoFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vENTRADADATAEMISSAOFIN")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TABLE1",grid:0};
   GXValidFnc[66]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADASNNORMAL",gxz:"ZV36EntradaSnNormal",gxold:"OV36EntradaSnNormal",gxvar:"AV36EntradaSnNormal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV36EntradaSnNormal=Value},v2z:function(Value){gx.O.ZV36EntradaSnNormal=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADASNNORMAL",gx.O.AV36EntradaSnNormal,"S")},c2v:function(){gx.O.AV36EntradaSnNormal=this.val()},val:function(){return gx.fn.getControlValue("vENTRADASNNORMAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[68]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADASNCANCELADA",gxz:"ZV41EntradaSnCancelada",gxold:"OV41EntradaSnCancelada",gxvar:"AV41EntradaSnCancelada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV41EntradaSnCancelada=Value},v2z:function(Value){gx.O.ZV41EntradaSnCancelada=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADASNCANCELADA",gx.O.AV41EntradaSnCancelada,"S")},c2v:function(){gx.O.AV41EntradaSnCancelada=this.val()},val:function(){return gx.fn.getControlValue("vENTRADASNCANCELADA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[70]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADASNINUTILIZADA",gxz:"ZV44EntradaSnInutilizada",gxold:"OV44EntradaSnInutilizada",gxvar:"AV44EntradaSnInutilizada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV44EntradaSnInutilizada=Value},v2z:function(Value){gx.O.ZV44EntradaSnInutilizada=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADASNINUTILIZADA",gx.O.AV44EntradaSnInutilizada,"S")},c2v:function(){gx.O.AV44EntradaSnInutilizada=this.val()},val:function(){return gx.fn.getControlValue("vENTRADASNINUTILIZADA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[73]={fld:"TXTDTENT1", format:0,grid:0};
   GXValidFnc[75]={fld:"TABLERANGEENTRADA",grid:0};
   GXValidFnc[78]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADADATAENTRADAINI",gxz:"ZV33EntradaDataEntradaIni",gxold:"OV33EntradaDataEntradaIni",gxvar:"AV33EntradaDataEntradaIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33EntradaDataEntradaIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV33EntradaDataEntradaIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vENTRADADATAENTRADAINI",gx.O.AV33EntradaDataEntradaIni,0)},c2v:function(){gx.O.AV33EntradaDataEntradaIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vENTRADADATAENTRADAINI")},nac:gx.falseFn};
   GXValidFnc[80]={fld:"TXTAENT1", format:0,grid:0};
   GXValidFnc[82]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADADATAENTRADAFIN",gxz:"ZV34EntradaDataEntradaFin",gxold:"OV34EntradaDataEntradaFin",gxvar:"AV34EntradaDataEntradaFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34EntradaDataEntradaFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV34EntradaDataEntradaFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vENTRADADATAENTRADAFIN",gx.O.AV34EntradaDataEntradaFin,0)},c2v:function(){gx.O.AV34EntradaDataEntradaFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vENTRADADATAENTRADAFIN")},nac:gx.falseFn};
   GXValidFnc[84]={fld:"SELECIONARTIPO", format:0,grid:0};
   GXValidFnc[90]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:89,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAID",gxz:"ZV22EntradaId",gxold:"OV22EntradaId",gxvar:"AV22EntradaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV22EntradaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22EntradaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vENTRADAID",row || gx.fn.currentGridRowImpl(89),gx.O.AV22EntradaId,0)},c2v:function(){gx.O.AV22EntradaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vENTRADAID",row || gx.fn.currentGridRowImpl(89),'.')},nac:gx.falseFn};
   GXValidFnc[91]={lvl:2,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,isacc:0,grid:89,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADANUMERODOCUMENTO",gxz:"ZV55EntradaNumeroDocumento",gxold:"OV55EntradaNumeroDocumento",gxvar:"AV55EntradaNumeroDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV55EntradaNumeroDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV55EntradaNumeroDocumento=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vENTRADANUMERODOCUMENTO",row || gx.fn.currentGridRowImpl(89),gx.O.AV55EntradaNumeroDocumento,0)},c2v:function(){gx.O.AV55EntradaNumeroDocumento=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vENTRADANUMERODOCUMENTO",row || gx.fn.currentGridRowImpl(89),'.')},nac:gx.falseFn};
   GXValidFnc[92]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:89,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAFILIALEMPID",gxz:"ZV16EntradaFilialEmpId",gxold:"OV16EntradaFilialEmpId",gxvar:"AV16EntradaFilialEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV16EntradaFilialEmpId=Value},v2z:function(Value){gx.O.ZV16EntradaFilialEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("vENTRADAFILIALEMPID",row || gx.fn.currentGridRowImpl(89),gx.O.AV16EntradaFilialEmpId,0)},c2v:function(){gx.O.AV16EntradaFilialEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("vENTRADAFILIALEMPID",row || gx.fn.currentGridRowImpl(89))},nac:gx.falseFn};
   GXValidFnc[93]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:89,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAFORNECEDOREMPID",gxz:"ZV18EntradaFornecedorEmpId",gxold:"OV18EntradaFornecedorEmpId",gxvar:"AV18EntradaFornecedorEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV18EntradaFornecedorEmpId=Value},v2z:function(Value){gx.O.ZV18EntradaFornecedorEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("vENTRADAFORNECEDOREMPID",row || gx.fn.currentGridRowImpl(89),gx.O.AV18EntradaFornecedorEmpId,0)},c2v:function(){gx.O.AV18EntradaFornecedorEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("vENTRADAFORNECEDOREMPID",row || gx.fn.currentGridRowImpl(89))},nac:gx.falseFn};
   GXValidFnc[94]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:89,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAFORNECEDORID",gxz:"ZV19EntradaFornecedorId",gxold:"OV19EntradaFornecedorId",gxvar:"AV19EntradaFornecedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV19EntradaFornecedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19EntradaFornecedorId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vENTRADAFORNECEDORID",row || gx.fn.currentGridRowImpl(89),gx.O.AV19EntradaFornecedorId,0)},c2v:function(){gx.O.AV19EntradaFornecedorId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vENTRADAFORNECEDORID",row || gx.fn.currentGridRowImpl(89),'.')},nac:gx.falseFn};
   GXValidFnc[95]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:89,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAFORNECRAZAO",gxz:"ZV20EntradaFornecRazao",gxold:"OV20EntradaFornecRazao",gxvar:"AV20EntradaFornecRazao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV20EntradaFornecRazao=Value},v2z:function(Value){gx.O.ZV20EntradaFornecRazao=Value},v2c:function(row){gx.fn.setGridControlValue("vENTRADAFORNECRAZAO",row || gx.fn.currentGridRowImpl(89),gx.O.AV20EntradaFornecRazao,0)},c2v:function(){gx.O.AV20EntradaFornecRazao=this.val()},val:function(row){return gx.fn.getGridControlValue("vENTRADAFORNECRAZAO",row || gx.fn.currentGridRowImpl(89))},nac:gx.falseFn};
   GXValidFnc[96]={lvl:2,type:"char",len:4,dec:0,sign:false,ro:0,isacc:0,grid:89,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADASERIE",gxz:"ZV21EntradaSerie",gxold:"OV21EntradaSerie",gxvar:"AV21EntradaSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV21EntradaSerie=Value},v2z:function(Value){gx.O.ZV21EntradaSerie=Value},v2c:function(row){gx.fn.setGridControlValue("vENTRADASERIE",row || gx.fn.currentGridRowImpl(89),gx.O.AV21EntradaSerie,0)},c2v:function(){gx.O.AV21EntradaSerie=this.val()},val:function(row){return gx.fn.getGridControlValue("vENTRADASERIE",row || gx.fn.currentGridRowImpl(89))},nac:gx.falseFn};
   GXValidFnc[97]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:89,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAFILIALID",gxz:"ZV17EntradaFilialId",gxold:"OV17EntradaFilialId",gxvar:"AV17EntradaFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV17EntradaFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17EntradaFilialId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vENTRADAFILIALID",row || gx.fn.currentGridRowImpl(89),gx.O.AV17EntradaFilialId,0)},c2v:function(){gx.O.AV17EntradaFilialId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vENTRADAFILIALID",row || gx.fn.currentGridRowImpl(89),'.')},nac:gx.falseFn};
   GXValidFnc[98]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:89,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADADATAEMISSAO",gxz:"ZV23EntradaDataEmissao",gxold:"OV23EntradaDataEmissao",gxvar:"AV23EntradaDataEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV23EntradaDataEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV23EntradaDataEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("vENTRADADATAEMISSAO",row || gx.fn.currentGridRowImpl(89),gx.O.AV23EntradaDataEmissao,0)},c2v:function(){gx.O.AV23EntradaDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("vENTRADADATAEMISSAO",row || gx.fn.currentGridRowImpl(89))},nac:gx.falseFn};
   GXValidFnc[99]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:89,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADADATAENTRADA",gxz:"ZV24EntradaDataEntrada",gxold:"OV24EntradaDataEntrada",gxvar:"AV24EntradaDataEntrada",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV24EntradaDataEntrada=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV24EntradaDataEntrada=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("vENTRADADATAENTRADA",row || gx.fn.currentGridRowImpl(89),gx.O.AV24EntradaDataEntrada,0)},c2v:function(){gx.O.AV24EntradaDataEntrada=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("vENTRADADATAENTRADA",row || gx.fn.currentGridRowImpl(89))},nac:gx.falseFn};
   GXValidFnc[100]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:89,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAVALORTOTAL",gxz:"ZV25EntradaValorTotal",gxold:"OV25EntradaValorTotal",gxvar:"AV25EntradaValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV25EntradaValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV25EntradaValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vENTRADAVALORTOTAL",row || gx.fn.currentGridRowImpl(89),gx.O.AV25EntradaValorTotal,2,',')},c2v:function(){gx.O.AV25EntradaValorTotal=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vENTRADAVALORTOTAL",row || gx.fn.currentGridRowImpl(89),'.',',')},nac:gx.falseFn};
   GXValidFnc[101]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:89,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADASITUACAO",gxz:"ZV26EntradaSituacao",gxold:"OV26EntradaSituacao",gxvar:"AV26EntradaSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.AV26EntradaSituacao=Value},v2z:function(Value){gx.O.ZV26EntradaSituacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("vENTRADASITUACAO",row || gx.fn.currentGridRowImpl(89),gx.O.AV26EntradaSituacao)},c2v:function(){gx.O.AV26EntradaSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("vENTRADASITUACAO",row || gx.fn.currentGridRowImpl(89))},nac:gx.falseFn};
   GXValidFnc[102]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:89,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCUSTOS",gxz:"ZV27bmpCustos",gxold:"OV27bmpCustos",gxvar:"AV27bmpCustos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV27bmpCustos=Value},v2z:function(Value){gx.O.ZV27bmpCustos=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCUSTOS",row || gx.fn.currentGridRowImpl(89),gx.O.AV27bmpCustos,gx.O.AV102Bmpcustos_GXI)},c2v:function(){gx.O.AV102Bmpcustos_GXI=this.val_GXI();gx.O.AV27bmpCustos=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCUSTOS",row || gx.fn.currentGridRowImpl(89))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCUSTOS_GXI",row || gx.fn.currentGridRowImpl(89))}, gxvar_GXI:'AV102Bmpcustos_GXI',nac:gx.falseFn};
   GXValidFnc[103]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:89,gxgrid:this.GridContainer,fnc:this.Validv_Entradatipo,isvalid:null,rgrid:[],fld:"vENTRADATIPO",gxz:"ZV45EntradaTipo",gxold:"OV45EntradaTipo",gxvar:"AV45EntradaTipo",ucs:[],op:[103],ip:[103],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.AV45EntradaTipo=Value},v2z:function(Value){gx.O.ZV45EntradaTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("vENTRADATIPO",row || gx.fn.currentGridRowImpl(89),gx.O.AV45EntradaTipo)},c2v:function(){gx.O.AV45EntradaTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("vENTRADATIPO",row || gx.fn.currentGridRowImpl(89))},nac:gx.falseFn};
   GXValidFnc[104]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:89,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPITEM",gxz:"ZV85bmpItem",gxold:"OV85bmpItem",gxvar:"AV85bmpItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV85bmpItem=Value},v2z:function(Value){gx.O.ZV85bmpItem=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPITEM",row || gx.fn.currentGridRowImpl(89),gx.O.AV85bmpItem,gx.O.AV103Bmpitem_GXI)},c2v:function(){gx.O.AV103Bmpitem_GXI=this.val_GXI();gx.O.AV85bmpItem=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPITEM",row || gx.fn.currentGridRowImpl(89))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPITEM_GXI",row || gx.fn.currentGridRowImpl(89))}, gxvar_GXI:'AV103Bmpitem_GXI',nac:gx.falseFn};
   GXValidFnc[105]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:89,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPARC",gxz:"ZV86bmpParc",gxold:"OV86bmpParc",gxvar:"AV86bmpParc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV86bmpParc=Value},v2z:function(Value){gx.O.ZV86bmpParc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPARC",row || gx.fn.currentGridRowImpl(89),gx.O.AV86bmpParc,gx.O.AV104Bmpparc_GXI)},c2v:function(){gx.O.AV104Bmpparc_GXI=this.val_GXI();gx.O.AV86bmpParc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPARC",row || gx.fn.currentGridRowImpl(89))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPARC_GXI",row || gx.fn.currentGridRowImpl(89))}, gxvar_GXI:'AV104Bmpparc_GXI',nac:gx.falseFn};
   GXValidFnc[111]={fld:"TABLENAV",grid:0};
   GXValidFnc[114]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[116]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[118]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[120]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[122]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[123]={fld:"JS", format:2,grid:0};
   GXValidFnc[124]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHARAUX",gxz:"ZV48CharAux",gxold:"OV48CharAux",gxvar:"AV48CharAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48CharAux=Value},v2z:function(Value){gx.O.ZV48CharAux=Value},v2c:function(){gx.fn.setControlValue("vCHARAUX",gx.O.AV48CharAux,0)},c2v:function(){gx.O.AV48CharAux=this.val()},val:function(){return gx.fn.getControlValue("vCHARAUX")},nac:gx.falseFn};
   GXValidFnc[125]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUX",gxz:"ZV47IntAux",gxold:"OV47IntAux",gxvar:"AV47IntAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47IntAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47IntAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTAUX",gx.O.AV47IntAux,0)},c2v:function(){gx.O.AV47IntAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUX",'.')},nac:gx.falseFn};
   GXValidFnc[126]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOUTCHARAUX",gxz:"ZV60OutCharAux",gxold:"OV60OutCharAux",gxvar:"AV60OutCharAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60OutCharAux=Value},v2z:function(Value){gx.O.ZV60OutCharAux=Value},v2c:function(){gx.fn.setControlValue("vOUTCHARAUX",gx.O.AV60OutCharAux,0)},c2v:function(){gx.O.AV60OutCharAux=this.val()},val:function(){return gx.fn.getControlValue("vOUTCHARAUX")},nac:gx.falseFn};
   GXValidFnc[127]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOUTINTAUX",gxz:"ZV59OutIntAux",gxold:"OV59OutIntAux",gxvar:"AV59OutIntAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59OutIntAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV59OutIntAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vOUTINTAUX",gx.O.AV59OutIntAux,0)},c2v:function(){gx.O.AV59OutIntAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vOUTINTAUX",'.')},nac:gx.falseFn};
   GXValidFnc[128]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV49Sim",gxold:"OV49Sim",gxvar:"AV49Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49Sim=Value},v2z:function(Value){gx.O.ZV49Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV49Sim,0)},c2v:function(){gx.O.AV49Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[129]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV50Nao",gxold:"OV50Nao",gxvar:"AV50Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50Nao=Value},v2z:function(Value){gx.O.ZV50Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV50Nao,0)},c2v:function(){gx.O.AV50Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[130]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV62FilialEmpresaId",gxold:"OV62FilialEmpresaId",gxvar:"AV62FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV62FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV62FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV62FilialEmpresaId,0)},c2v:function(){gx.O.AV62FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[131]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaempresaid,isvalid:null,rgrid:[],fld:"vPESSOAEMPRESAID",gxz:"ZV63PessoaEmpresaId",gxold:"OV63PessoaEmpresaId",gxvar:"AV63PessoaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63PessoaEmpresaId=Value},v2z:function(Value){gx.O.ZV63PessoaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMPRESAID",gx.O.AV63PessoaEmpresaId,0)},c2v:function(){gx.O.AV63PessoaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[132]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECHAR",gxz:"ZV64QtdeChar",gxold:"OV64QtdeChar",gxvar:"AV64QtdeChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64QtdeChar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV64QtdeChar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECHAR",gx.O.AV64QtdeChar,0)},c2v:function(){gx.O.AV64QtdeChar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECHAR",'.')},nac:gx.falseFn};
   GXValidFnc[133]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoempresaid,isvalid:null,rgrid:[],fld:"vPRODUTOEMPRESAID",gxz:"ZV53ProdutoEmpresaId",gxold:"OV53ProdutoEmpresaId",gxvar:"AV53ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53ProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV53ProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOEMPRESAID",gx.O.AV53ProdutoEmpresaId,0)},c2v:function(){gx.O.AV53ProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[134]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOBARRA",gxz:"ZV80CodigoBarrasProdutoBarra",gxold:"OV80CodigoBarrasProdutoBarra",gxvar:"AV80CodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV80CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTOBARRA",gx.O.AV80CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.AV80CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRA",'.')},nac:gx.falseFn};
   GXValidFnc[135]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV79ProdutoReferencia",gxold:"OV79ProdutoReferencia",gxvar:"AV79ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV79ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV79ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV79ProdutoReferencia,0)},c2v:function(){gx.O.AV79ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[136]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNPESQUISAR",gxz:"ZV31SnPesquisar",gxold:"OV31SnPesquisar",gxvar:"AV31SnPesquisar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31SnPesquisar=Value},v2z:function(Value){gx.O.ZV31SnPesquisar=Value},v2c:function(){gx.fn.setControlValue("vSNPESQUISAR",gx.O.AV31SnPesquisar,0)},c2v:function(){gx.O.AV31SnPesquisar=this.val()},val:function(){return gx.fn.getControlValue("vSNPESQUISAR")},nac:gx.falseFn};
   GXValidFnc[137]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNERRO",gxz:"ZV76SnErro",gxold:"OV76SnErro",gxvar:"AV76SnErro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV76SnErro=Value},v2z:function(Value){gx.O.ZV76SnErro=Value},v2c:function(){gx.fn.setControlValue("vSNERRO",gx.O.AV76SnErro,0)},c2v:function(){gx.O.AV76SnErro=this.val()},val:function(){return gx.fn.getControlValue("vSNERRO")},nac:gx.falseFn};
   GXValidFnc[138]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCTRLPAG",gxz:"ZV81CtrlPag",gxold:"OV81CtrlPag",gxvar:"AV81CtrlPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV81CtrlPag=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV81CtrlPag=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTRLPAG",gx.O.AV81CtrlPag,0)},c2v:function(){gx.O.AV81CtrlPag=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTRLPAG",'.')},nac:gx.falseFn};
   GXValidFnc[139]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAG",gxz:"ZV82Pag",gxold:"OV82Pag",gxvar:"AV82Pag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV82Pag=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV82Pag=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAG",gx.O.AV82Pag,0)},c2v:function(){gx.O.AV82Pag=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAG",'.')},nac:gx.falseFn};
   GXValidFnc[140]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV87SNVenda",gxold:"OV87SNVenda",gxvar:"AV87SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV87SNVenda=Value},v2z:function(Value){gx.O.ZV87SNVenda=Value},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV87SNVenda,0)},c2v:function(){gx.O.AV87SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};
   GXValidFnc[141]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADASNNOTAENT",gxz:"ZV35EntradaSnNotaEnt",gxold:"OV35EntradaSnNotaEnt",gxvar:"AV35EntradaSnNotaEnt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35EntradaSnNotaEnt=Value},v2z:function(Value){gx.O.ZV35EntradaSnNotaEnt=Value},v2c:function(){gx.fn.setControlValue("vENTRADASNNOTAENT",gx.O.AV35EntradaSnNotaEnt,0)},c2v:function(){gx.O.AV35EntradaSnNotaEnt=this.val()},val:function(){return gx.fn.getControlValue("vENTRADASNNOTAENT")},nac:gx.falseFn};
   GXValidFnc[142]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADASNAJUSTE",gxz:"ZV43EntradaSnAjuste",gxold:"OV43EntradaSnAjuste",gxvar:"AV43EntradaSnAjuste",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43EntradaSnAjuste=Value},v2z:function(Value){gx.O.ZV43EntradaSnAjuste=Value},v2c:function(){gx.fn.setControlValue("vENTRADASNAJUSTE",gx.O.AV43EntradaSnAjuste,0)},c2v:function(){gx.O.AV43EntradaSnAjuste=this.val()},val:function(){return gx.fn.getControlValue("vENTRADASNAJUSTE")},nac:gx.falseFn};
   GXValidFnc[143]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADASNNOTACOMP",gxz:"ZV40EntradaSnNotaComp",gxold:"OV40EntradaSnNotaComp",gxvar:"AV40EntradaSnNotaComp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40EntradaSnNotaComp=Value},v2z:function(Value){gx.O.ZV40EntradaSnNotaComp=Value},v2c:function(){gx.fn.setControlValue("vENTRADASNNOTACOMP",gx.O.AV40EntradaSnNotaComp,0)},c2v:function(){gx.O.AV40EntradaSnNotaComp=this.val()},val:function(){return gx.fn.getControlValue("vENTRADASNNOTACOMP")},nac:gx.falseFn};
   GXValidFnc[144]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADASNDEVOLUCAO",gxz:"ZV89EntradaSnDevolucao",gxold:"OV89EntradaSnDevolucao",gxvar:"AV89EntradaSnDevolucao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV89EntradaSnDevolucao=Value},v2z:function(Value){gx.O.ZV89EntradaSnDevolucao=Value},v2c:function(){gx.fn.setControlValue("vENTRADASNDEVOLUCAO",gx.O.AV89EntradaSnDevolucao,0)},c2v:function(){gx.O.AV89EntradaSnDevolucao=this.val()},val:function(){return gx.fn.getControlValue("vENTRADASNDEVOLUCAO")},nac:gx.falseFn};
   GXValidFnc[145]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADASNAJUSTEENT",gxz:"ZV90EntradaSnAjusteEnt",gxold:"OV90EntradaSnAjusteEnt",gxvar:"AV90EntradaSnAjusteEnt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV90EntradaSnAjusteEnt=Value},v2z:function(Value){gx.O.ZV90EntradaSnAjusteEnt=Value},v2c:function(){gx.fn.setControlValue("vENTRADASNAJUSTEENT",gx.O.AV90EntradaSnAjusteEnt,0)},c2v:function(){gx.O.AV90EntradaSnAjusteEnt=this.val()},val:function(){return gx.fn.getControlValue("vENTRADASNAJUSTEENT")},nac:gx.falseFn};
   GXValidFnc[146]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADASNTROCA",gxz:"ZV91EntradaSnTroca",gxold:"OV91EntradaSnTroca",gxvar:"AV91EntradaSnTroca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV91EntradaSnTroca=Value},v2z:function(Value){gx.O.ZV91EntradaSnTroca=Value},v2c:function(){gx.fn.setControlValue("vENTRADASNTROCA",gx.O.AV91EntradaSnTroca,0)},c2v:function(){gx.O.AV91EntradaSnTroca=this.val()},val:function(){return gx.fn.getControlValue("vENTRADASNTROCA")},nac:gx.falseFn};
   GXValidFnc[147]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADASNTRANSF",gxz:"ZV92EntradaSnTransf",gxold:"OV92EntradaSnTransf",gxvar:"AV92EntradaSnTransf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV92EntradaSnTransf=Value},v2z:function(Value){gx.O.ZV92EntradaSnTransf=Value},v2c:function(){gx.fn.setControlValue("vENTRADASNTRANSF",gx.O.AV92EntradaSnTransf,0)},c2v:function(){gx.O.AV92EntradaSnTransf=this.val()},val:function(){return gx.fn.getControlValue("vENTRADASNTRANSF")},nac:gx.falseFn};
   this.AV28FilialIdFiltro = 0 ;
   this.ZV28FilialIdFiltro = 0 ;
   this.OV28FilialIdFiltro = 0 ;
   this.AV61FilialNome = "" ;
   this.ZV61FilialNome = "" ;
   this.OV61FilialNome = "" ;
   this.AV42ProdutoIdFiltro = 0 ;
   this.ZV42ProdutoIdFiltro = 0 ;
   this.OV42ProdutoIdFiltro = 0 ;
   this.AV73ProdutoDescricaoResumida = "" ;
   this.ZV73ProdutoDescricaoResumida = "" ;
   this.OV73ProdutoDescricaoResumida = "" ;
   this.AV32FornecedorIdFiltro = 0 ;
   this.ZV32FornecedorIdFiltro = 0 ;
   this.OV32FornecedorIdFiltro = 0 ;
   this.AV67FornecedorFantasia = "" ;
   this.ZV67FornecedorFantasia = "" ;
   this.OV67FornecedorFantasia = "" ;
   this.AV70CFOPTipoFiltro = "" ;
   this.ZV70CFOPTipoFiltro = "" ;
   this.OV70CFOPTipoFiltro = "" ;
   this.AV38EntradaSerieFiltro = "" ;
   this.ZV38EntradaSerieFiltro = "" ;
   this.OV38EntradaSerieFiltro = "" ;
   this.AV39EntradaNumeroDocumentoFiltro = 0 ;
   this.ZV39EntradaNumeroDocumentoFiltro = 0 ;
   this.OV39EntradaNumeroDocumentoFiltro = 0 ;
   this.AV37CFOPCodigoFiltro = 0 ;
   this.ZV37CFOPCodigoFiltro = 0 ;
   this.OV37CFOPCodigoFiltro = 0 ;
   this.AV29EntradaDataEmissaoIni = gx.date.nullDate() ;
   this.ZV29EntradaDataEmissaoIni = gx.date.nullDate() ;
   this.OV29EntradaDataEmissaoIni = gx.date.nullDate() ;
   this.AV30EntradaDataEmissaoFin = gx.date.nullDate() ;
   this.ZV30EntradaDataEmissaoFin = gx.date.nullDate() ;
   this.OV30EntradaDataEmissaoFin = gx.date.nullDate() ;
   this.AV36EntradaSnNormal = "" ;
   this.ZV36EntradaSnNormal = "" ;
   this.OV36EntradaSnNormal = "" ;
   this.AV41EntradaSnCancelada = "" ;
   this.ZV41EntradaSnCancelada = "" ;
   this.OV41EntradaSnCancelada = "" ;
   this.AV44EntradaSnInutilizada = "" ;
   this.ZV44EntradaSnInutilizada = "" ;
   this.OV44EntradaSnInutilizada = "" ;
   this.AV33EntradaDataEntradaIni = gx.date.nullDate() ;
   this.ZV33EntradaDataEntradaIni = gx.date.nullDate() ;
   this.OV33EntradaDataEntradaIni = gx.date.nullDate() ;
   this.AV34EntradaDataEntradaFin = gx.date.nullDate() ;
   this.ZV34EntradaDataEntradaFin = gx.date.nullDate() ;
   this.OV34EntradaDataEntradaFin = gx.date.nullDate() ;
   this.ZV22EntradaId = 0 ;
   this.OV22EntradaId = 0 ;
   this.ZV55EntradaNumeroDocumento = 0 ;
   this.OV55EntradaNumeroDocumento = 0 ;
   this.ZV16EntradaFilialEmpId = "" ;
   this.OV16EntradaFilialEmpId = "" ;
   this.ZV18EntradaFornecedorEmpId = "" ;
   this.OV18EntradaFornecedorEmpId = "" ;
   this.ZV19EntradaFornecedorId = 0 ;
   this.OV19EntradaFornecedorId = 0 ;
   this.ZV20EntradaFornecRazao = "" ;
   this.OV20EntradaFornecRazao = "" ;
   this.ZV21EntradaSerie = "" ;
   this.OV21EntradaSerie = "" ;
   this.ZV17EntradaFilialId = 0 ;
   this.OV17EntradaFilialId = 0 ;
   this.ZV23EntradaDataEmissao = gx.date.nullDate() ;
   this.OV23EntradaDataEmissao = gx.date.nullDate() ;
   this.ZV24EntradaDataEntrada = gx.date.nullDate() ;
   this.OV24EntradaDataEntrada = gx.date.nullDate() ;
   this.ZV25EntradaValorTotal = 0 ;
   this.OV25EntradaValorTotal = 0 ;
   this.ZV26EntradaSituacao = "" ;
   this.OV26EntradaSituacao = "" ;
   this.ZV27bmpCustos = "" ;
   this.OV27bmpCustos = "" ;
   this.ZV45EntradaTipo = "" ;
   this.OV45EntradaTipo = "" ;
   this.ZV85bmpItem = "" ;
   this.OV85bmpItem = "" ;
   this.ZV86bmpParc = "" ;
   this.OV86bmpParc = "" ;
   this.AV48CharAux = "" ;
   this.ZV48CharAux = "" ;
   this.OV48CharAux = "" ;
   this.AV47IntAux = 0 ;
   this.ZV47IntAux = 0 ;
   this.OV47IntAux = 0 ;
   this.AV60OutCharAux = "" ;
   this.ZV60OutCharAux = "" ;
   this.OV60OutCharAux = "" ;
   this.AV59OutIntAux = 0 ;
   this.ZV59OutIntAux = 0 ;
   this.OV59OutIntAux = 0 ;
   this.AV49Sim = "" ;
   this.ZV49Sim = "" ;
   this.OV49Sim = "" ;
   this.AV50Nao = "" ;
   this.ZV50Nao = "" ;
   this.OV50Nao = "" ;
   this.AV62FilialEmpresaId = "" ;
   this.ZV62FilialEmpresaId = "" ;
   this.OV62FilialEmpresaId = "" ;
   this.AV63PessoaEmpresaId = "" ;
   this.ZV63PessoaEmpresaId = "" ;
   this.OV63PessoaEmpresaId = "" ;
   this.AV64QtdeChar = 0 ;
   this.ZV64QtdeChar = 0 ;
   this.OV64QtdeChar = 0 ;
   this.AV53ProdutoEmpresaId = "" ;
   this.ZV53ProdutoEmpresaId = "" ;
   this.OV53ProdutoEmpresaId = "" ;
   this.AV80CodigoBarrasProdutoBarra = 0 ;
   this.ZV80CodigoBarrasProdutoBarra = 0 ;
   this.OV80CodigoBarrasProdutoBarra = 0 ;
   this.AV79ProdutoReferencia = "" ;
   this.ZV79ProdutoReferencia = "" ;
   this.OV79ProdutoReferencia = "" ;
   this.AV31SnPesquisar = "" ;
   this.ZV31SnPesquisar = "" ;
   this.OV31SnPesquisar = "" ;
   this.AV76SnErro = "" ;
   this.ZV76SnErro = "" ;
   this.OV76SnErro = "" ;
   this.AV81CtrlPag = 0 ;
   this.ZV81CtrlPag = 0 ;
   this.OV81CtrlPag = 0 ;
   this.AV82Pag = 0 ;
   this.ZV82Pag = 0 ;
   this.OV82Pag = 0 ;
   this.AV87SNVenda = "" ;
   this.ZV87SNVenda = "" ;
   this.OV87SNVenda = "" ;
   this.AV35EntradaSnNotaEnt = "" ;
   this.ZV35EntradaSnNotaEnt = "" ;
   this.OV35EntradaSnNotaEnt = "" ;
   this.AV43EntradaSnAjuste = "" ;
   this.ZV43EntradaSnAjuste = "" ;
   this.OV43EntradaSnAjuste = "" ;
   this.AV40EntradaSnNotaComp = "" ;
   this.ZV40EntradaSnNotaComp = "" ;
   this.OV40EntradaSnNotaComp = "" ;
   this.AV89EntradaSnDevolucao = "" ;
   this.ZV89EntradaSnDevolucao = "" ;
   this.OV89EntradaSnDevolucao = "" ;
   this.AV90EntradaSnAjusteEnt = "" ;
   this.ZV90EntradaSnAjusteEnt = "" ;
   this.OV90EntradaSnAjusteEnt = "" ;
   this.AV91EntradaSnTroca = "" ;
   this.ZV91EntradaSnTroca = "" ;
   this.OV91EntradaSnTroca = "" ;
   this.AV92EntradaSnTransf = "" ;
   this.ZV92EntradaSnTransf = "" ;
   this.OV92EntradaSnTransf = "" ;
   this.AV28FilialIdFiltro = 0 ;
   this.AV61FilialNome = "" ;
   this.AV42ProdutoIdFiltro = 0 ;
   this.AV73ProdutoDescricaoResumida = "" ;
   this.AV32FornecedorIdFiltro = 0 ;
   this.AV67FornecedorFantasia = "" ;
   this.AV70CFOPTipoFiltro = "" ;
   this.AV38EntradaSerieFiltro = "" ;
   this.AV39EntradaNumeroDocumentoFiltro = 0 ;
   this.AV37CFOPCodigoFiltro = 0 ;
   this.AV29EntradaDataEmissaoIni = gx.date.nullDate() ;
   this.AV30EntradaDataEmissaoFin = gx.date.nullDate() ;
   this.AV36EntradaSnNormal = "" ;
   this.AV41EntradaSnCancelada = "" ;
   this.AV44EntradaSnInutilizada = "" ;
   this.AV33EntradaDataEntradaIni = gx.date.nullDate() ;
   this.AV34EntradaDataEntradaFin = gx.date.nullDate() ;
   this.AV48CharAux = "" ;
   this.AV47IntAux = 0 ;
   this.AV60OutCharAux = "" ;
   this.AV59OutIntAux = 0 ;
   this.AV49Sim = "" ;
   this.AV50Nao = "" ;
   this.AV62FilialEmpresaId = "" ;
   this.AV63PessoaEmpresaId = "" ;
   this.AV64QtdeChar = 0 ;
   this.AV53ProdutoEmpresaId = "" ;
   this.AV80CodigoBarrasProdutoBarra = 0 ;
   this.AV79ProdutoReferencia = "" ;
   this.AV31SnPesquisar = "" ;
   this.AV76SnErro = "" ;
   this.AV81CtrlPag = 0 ;
   this.AV82Pag = 0 ;
   this.AV87SNVenda = "" ;
   this.AV35EntradaSnNotaEnt = "" ;
   this.AV43EntradaSnAjuste = "" ;
   this.AV40EntradaSnNotaComp = "" ;
   this.AV89EntradaSnDevolucao = "" ;
   this.AV90EntradaSnAjusteEnt = "" ;
   this.AV91EntradaSnTroca = "" ;
   this.AV92EntradaSnTransf = "" ;
   this.AV88Tipo = "" ;
   this.AV51EntradaIdOut = 0 ;
   this.AV96SerieOut = "" ;
   this.AV97DocumentoOut = 0 ;
   this.AV22EntradaId = 0 ;
   this.AV55EntradaNumeroDocumento = 0 ;
   this.AV16EntradaFilialEmpId = "" ;
   this.AV18EntradaFornecedorEmpId = "" ;
   this.AV19EntradaFornecedorId = 0 ;
   this.AV20EntradaFornecRazao = "" ;
   this.AV21EntradaSerie = "" ;
   this.AV17EntradaFilialId = 0 ;
   this.AV23EntradaDataEmissao = gx.date.nullDate() ;
   this.AV24EntradaDataEntrada = gx.date.nullDate() ;
   this.AV25EntradaValorTotal = 0 ;
   this.AV26EntradaSituacao = "" ;
   this.AV27bmpCustos = "" ;
   this.AV45EntradaTipo = "" ;
   this.AV85bmpItem = "" ;
   this.AV86bmpParc = "" ;
   this.A3430CFOPCodigo = 0 ;
   this.A3445CFOPTipo = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A4638EntradaId = 0 ;
   this.A4637EntradaEmpresaId = "" ;
   this.A4646EntradaNumeroDocumento = 0 ;
   this.A4647EntradaSerie = "" ;
   this.A4656EntradaDataEntrada = gx.date.nullDate() ;
   this.A4655EntradaDataEmissao = gx.date.nullDate() ;
   this.A4650EntradaCFOPCodigo = 0 ;
   this.A4643EntradaFornecedorId = 0 ;
   this.A4642EntradaFornecedorEmpId = "" ;
   this.A4660EntradaFilialId = 0 ;
   this.A4659EntradaFilialEmpId = "" ;
   this.A4667EntradaSituacao = "" ;
   this.A4640EntradaTipo = "" ;
   this.A4645EntradaFornecedorRazao = "" ;
   this.A10600EntradaValorFCPSTRet = 0 ;
   this.A10599EntradaValorFCPST = 0 ;
   this.A11303EntradaICMSDesEntraTotal = "" ;
   this.A10530EntradaValorICMSDesonerado = 0 ;
   this.A4737EntradaFreteEntraTotal = "" ;
   this.A4705EntradaValorFrete = 0 ;
   this.A4717EntradaValorIPI = 0 ;
   this.A4707EntradaValorOutrasDespesas = 0 ;
   this.A4706EntradaValorSeguro = 0 ;
   this.A4716EntradaValorICMSST = 0 ;
   this.A4703EntradaValorDesconto = 0 ;
   this.A6542EntradaValorServico = 0 ;
   this.A4701EntradaValorProdutos = 0 ;
   this.A4709EntradaValorTotal = 0 ;
   this.A4846EntradaItemLoteProdutoId = 0 ;
   this.A4845EntradaItemLoteProdutoEmpId = "" ;
   this.A1136FilialNome = "" ;
   this.AV54EntradaEmpresaId = "" ;
   this.AV93Seleciona = 0 ;
   this.AV94EntradaSituacaoFiltro = "" ;
   this.AV95EntradaTipoFiltro = "" ;
   this.AV71EntradaCFOPCodigo = 0 ;
   this.Events = {"e18vd2_client": ["ENTER", true] ,"e16vd2_client": ["SELECIONARTIPO.CLICK", true] ,"e11vd2_client": ["'GXM_FIRST'", true] ,"e12vd2_client": ["'GXM_PREVIOUS'", true] ,"e13vd2_client": ["'GXM_NEXT'", true] ,"e14vd2_client": ["'GXM_LAST'", true] ,"e15vd2_client": ["'PROCURAR'", true] ,"e20vd2_client": ["'ITENS'", true] ,"e24vd1_client": ["CANCEL", true] ,"e22vd2_client": ["'CUSTOS'", false] ,"e23vd2_client": ["'PARCELAS'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27bmpCustos',fld:'vBMPCUSTOS'},{av:'gx.fn.getCtrlProperty("vBMPCUSTOS","Tooltiptext")',ctrl:'vBMPCUSTOS',prop:'Tooltiptext'},{av:'AV85bmpItem',fld:'vBMPITEM'},{av:'gx.fn.getCtrlProperty("vBMPITEM","Tooltiptext")',ctrl:'vBMPITEM',prop:'Tooltiptext'},{av:'AV86bmpParc',fld:'vBMPPARC'},{av:'gx.fn.getCtrlProperty("vBMPPARC","Tooltiptext")',ctrl:'vBMPPARC',prop:'Tooltiptext'},{av:'AV31SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV76SnErro',fld:'vSNERRO'},{av:'A4638EntradaId',fld:'ENTRADAID'},{av:'A4637EntradaEmpresaId',fld:'ENTRADAEMPRESAID'},{av:'AV54EntradaEmpresaId',fld:'vENTRADAEMPRESAID'},{av:'AV28FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'A4659EntradaFilialEmpId',fld:'ENTRADAFILIALEMPID'},{av:'AV62FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A4660EntradaFilialId',fld:'ENTRADAFILIALID'},{av:'AV32FornecedorIdFiltro',fld:'vFORNECEDORIDFILTRO'},{av:'A4642EntradaFornecedorEmpId',fld:'ENTRADAFORNECEDOREMPID'},{av:'AV63PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A4643EntradaFornecedorId',fld:'ENTRADAFORNECEDORID'},{av:'A4650EntradaCFOPCodigo',fld:'ENTRADACFOPCODIGO'},{av:'AV37CFOPCodigoFiltro',fld:'vCFOPCODIGOFILTRO'},{av:'A4655EntradaDataEmissao',fld:'ENTRADADATAEMISSAO'},{av:'AV29EntradaDataEmissaoIni',fld:'vENTRADADATAEMISSAOINI'},{av:'AV30EntradaDataEmissaoFin',fld:'vENTRADADATAEMISSAOFIN'},{av:'A4656EntradaDataEntrada',fld:'ENTRADADATAENTRADA'},{av:'AV33EntradaDataEntradaIni',fld:'vENTRADADATAENTRADAINI'},{av:'AV34EntradaDataEntradaFin',fld:'vENTRADADATAENTRADAFIN'},{av:'A4647EntradaSerie',fld:'ENTRADASERIE'},{av:'AV38EntradaSerieFiltro',fld:'vENTRADASERIEFILTRO'},{av:'A4646EntradaNumeroDocumento',fld:'ENTRADANUMERODOCUMENTO'},{av:'AV39EntradaNumeroDocumentoFiltro',fld:'vENTRADANUMERODOCUMENTOFILTRO'},{av:'A4667EntradaSituacao',fld:'ENTRADASITUACAO'},{av:'A4640EntradaTipo',fld:'ENTRADATIPO'},{av:'AV93Seleciona',fld:'vSELECIONA'},{av:'A4645EntradaFornecedorRazao',fld:'ENTRADAFORNECEDORRAZAO'},{av:'A4709EntradaValorTotal',fld:'ENTRADAVALORTOTAL'},{av:'AV42ProdutoIdFiltro',fld:'vPRODUTOIDFILTRO'},{av:'A4845EntradaItemLoteProdutoEmpId',fld:'ENTRADAITEMLOTEPRODUTOEMPID'},{av:'AV53ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A4846EntradaItemLoteProdutoId',fld:'ENTRADAITEMLOTEPRODUTOID'},{av:'AV94EntradaSituacaoFiltro',fld:'vENTRADASITUACAOFILTRO'},{av:'AV36EntradaSnNormal',fld:'vENTRADASNNORMAL'},{av:'AV41EntradaSnCancelada',fld:'vENTRADASNCANCELADA'},{av:'AV44EntradaSnInutilizada',fld:'vENTRADASNINUTILIZADA'},{av:'AV35EntradaSnNotaEnt',fld:'vENTRADASNNOTAENT'},{av:'AV40EntradaSnNotaComp',fld:'vENTRADASNNOTACOMP'},{av:'AV90EntradaSnAjusteEnt',fld:'vENTRADASNAJUSTEENT'},{av:'AV89EntradaSnDevolucao',fld:'vENTRADASNDEVOLUCAO'},{av:'AV43EntradaSnAjuste',fld:'vENTRADASNAJUSTE'},{av:'AV91EntradaSnTroca',fld:'vENTRADASNTROCA'},{av:'AV92EntradaSnTransf',fld:'vENTRADASNTRANSF'},{av:'AV95EntradaTipoFiltro',fld:'vENTRADATIPOFILTRO'},{av:'AV70CFOPTipoFiltro',fld:'vCFOPTIPOFILTRO'},{av:'A3430CFOPCodigo',fld:'CFOPCODIGO'},{av:'AV71EntradaCFOPCodigo',fld:'vENTRADACFOPCODIGO'},{av:'A3445CFOPTipo',fld:'CFOPTIPO'},{av:'AV82Pag',fld:'vPAG'},{av:'AV81CtrlPag',fld:'vCTRLPAG'}],[{av:'AV35EntradaSnNotaEnt',fld:'vENTRADASNNOTAENT'},{av:'AV43EntradaSnAjuste',fld:'vENTRADASNAJUSTE'},{av:'AV40EntradaSnNotaComp',fld:'vENTRADASNNOTACOMP'},{av:'AV89EntradaSnDevolucao',fld:'vENTRADASNDEVOLUCAO'},{av:'AV90EntradaSnAjusteEnt',fld:'vENTRADASNAJUSTEENT'},{av:'AV91EntradaSnTroca',fld:'vENTRADASNTROCA'},{av:'AV92EntradaSnTransf',fld:'vENTRADASNTRANSF'}]];
   this.EvtParms["ENTER"] = [[{av:'AV22EntradaId',fld:'vENTRADAID'},{av:'AV21EntradaSerie',fld:'vENTRADASERIE'},{av:'AV55EntradaNumeroDocumento',fld:'vENTRADANUMERODOCUMENTO'}],[{av:'AV51EntradaIdOut',fld:'vENTRADAIDOUT'},{av:'AV96SerieOut',fld:'vSERIEOUT'},{av:'AV97DocumentoOut',fld:'vDOCUMENTOOUT'}]];
   this.EvtParms["SELECIONARTIPO.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27bmpCustos',fld:'vBMPCUSTOS'},{av:'gx.fn.getCtrlProperty("vBMPCUSTOS","Tooltiptext")',ctrl:'vBMPCUSTOS',prop:'Tooltiptext'},{av:'AV85bmpItem',fld:'vBMPITEM'},{av:'gx.fn.getCtrlProperty("vBMPITEM","Tooltiptext")',ctrl:'vBMPITEM',prop:'Tooltiptext'},{av:'AV86bmpParc',fld:'vBMPPARC'},{av:'gx.fn.getCtrlProperty("vBMPPARC","Tooltiptext")',ctrl:'vBMPPARC',prop:'Tooltiptext'},{av:'AV31SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV76SnErro',fld:'vSNERRO'},{av:'A4638EntradaId',fld:'ENTRADAID'},{av:'A4637EntradaEmpresaId',fld:'ENTRADAEMPRESAID'},{av:'AV54EntradaEmpresaId',fld:'vENTRADAEMPRESAID'},{av:'AV28FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'A4659EntradaFilialEmpId',fld:'ENTRADAFILIALEMPID'},{av:'AV62FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A4660EntradaFilialId',fld:'ENTRADAFILIALID'},{av:'AV32FornecedorIdFiltro',fld:'vFORNECEDORIDFILTRO'},{av:'A4642EntradaFornecedorEmpId',fld:'ENTRADAFORNECEDOREMPID'},{av:'AV63PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A4643EntradaFornecedorId',fld:'ENTRADAFORNECEDORID'},{av:'A4650EntradaCFOPCodigo',fld:'ENTRADACFOPCODIGO'},{av:'AV37CFOPCodigoFiltro',fld:'vCFOPCODIGOFILTRO'},{av:'A4655EntradaDataEmissao',fld:'ENTRADADATAEMISSAO'},{av:'AV29EntradaDataEmissaoIni',fld:'vENTRADADATAEMISSAOINI'},{av:'AV30EntradaDataEmissaoFin',fld:'vENTRADADATAEMISSAOFIN'},{av:'A4656EntradaDataEntrada',fld:'ENTRADADATAENTRADA'},{av:'AV33EntradaDataEntradaIni',fld:'vENTRADADATAENTRADAINI'},{av:'AV34EntradaDataEntradaFin',fld:'vENTRADADATAENTRADAFIN'},{av:'A4647EntradaSerie',fld:'ENTRADASERIE'},{av:'AV38EntradaSerieFiltro',fld:'vENTRADASERIEFILTRO'},{av:'A4646EntradaNumeroDocumento',fld:'ENTRADANUMERODOCUMENTO'},{av:'AV39EntradaNumeroDocumentoFiltro',fld:'vENTRADANUMERODOCUMENTOFILTRO'},{av:'A4667EntradaSituacao',fld:'ENTRADASITUACAO'},{av:'A4640EntradaTipo',fld:'ENTRADATIPO'},{av:'AV93Seleciona',fld:'vSELECIONA'},{av:'A4645EntradaFornecedorRazao',fld:'ENTRADAFORNECEDORRAZAO'},{av:'A4709EntradaValorTotal',fld:'ENTRADAVALORTOTAL'},{av:'AV42ProdutoIdFiltro',fld:'vPRODUTOIDFILTRO'},{av:'A4845EntradaItemLoteProdutoEmpId',fld:'ENTRADAITEMLOTEPRODUTOEMPID'},{av:'AV53ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A4846EntradaItemLoteProdutoId',fld:'ENTRADAITEMLOTEPRODUTOID'},{av:'AV94EntradaSituacaoFiltro',fld:'vENTRADASITUACAOFILTRO'},{av:'AV36EntradaSnNormal',fld:'vENTRADASNNORMAL'},{av:'AV41EntradaSnCancelada',fld:'vENTRADASNCANCELADA'},{av:'AV44EntradaSnInutilizada',fld:'vENTRADASNINUTILIZADA'},{av:'AV35EntradaSnNotaEnt',fld:'vENTRADASNNOTAENT'},{av:'AV40EntradaSnNotaComp',fld:'vENTRADASNNOTACOMP'},{av:'AV90EntradaSnAjusteEnt',fld:'vENTRADASNAJUSTEENT'},{av:'AV89EntradaSnDevolucao',fld:'vENTRADASNDEVOLUCAO'},{av:'AV43EntradaSnAjuste',fld:'vENTRADASNAJUSTE'},{av:'AV91EntradaSnTroca',fld:'vENTRADASNTROCA'},{av:'AV92EntradaSnTransf',fld:'vENTRADASNTRANSF'},{av:'AV95EntradaTipoFiltro',fld:'vENTRADATIPOFILTRO'},{av:'AV70CFOPTipoFiltro',fld:'vCFOPTIPOFILTRO'},{av:'A3430CFOPCodigo',fld:'CFOPCODIGO'},{av:'AV71EntradaCFOPCodigo',fld:'vENTRADACFOPCODIGO'},{av:'A3445CFOPTipo',fld:'CFOPTIPO'},{av:'AV82Pag',fld:'vPAG'},{av:'AV81CtrlPag',fld:'vCTRLPAG'},{av:'AV88Tipo',fld:'vTIPO',hsh:true}],[]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27bmpCustos',fld:'vBMPCUSTOS'},{av:'gx.fn.getCtrlProperty("vBMPCUSTOS","Tooltiptext")',ctrl:'vBMPCUSTOS',prop:'Tooltiptext'},{av:'AV85bmpItem',fld:'vBMPITEM'},{av:'gx.fn.getCtrlProperty("vBMPITEM","Tooltiptext")',ctrl:'vBMPITEM',prop:'Tooltiptext'},{av:'AV86bmpParc',fld:'vBMPPARC'},{av:'gx.fn.getCtrlProperty("vBMPPARC","Tooltiptext")',ctrl:'vBMPPARC',prop:'Tooltiptext'},{av:'AV31SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV76SnErro',fld:'vSNERRO'},{av:'A4638EntradaId',fld:'ENTRADAID'},{av:'A4637EntradaEmpresaId',fld:'ENTRADAEMPRESAID'},{av:'AV54EntradaEmpresaId',fld:'vENTRADAEMPRESAID'},{av:'AV28FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'A4659EntradaFilialEmpId',fld:'ENTRADAFILIALEMPID'},{av:'AV62FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A4660EntradaFilialId',fld:'ENTRADAFILIALID'},{av:'AV32FornecedorIdFiltro',fld:'vFORNECEDORIDFILTRO'},{av:'A4642EntradaFornecedorEmpId',fld:'ENTRADAFORNECEDOREMPID'},{av:'AV63PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A4643EntradaFornecedorId',fld:'ENTRADAFORNECEDORID'},{av:'A4650EntradaCFOPCodigo',fld:'ENTRADACFOPCODIGO'},{av:'AV37CFOPCodigoFiltro',fld:'vCFOPCODIGOFILTRO'},{av:'A4655EntradaDataEmissao',fld:'ENTRADADATAEMISSAO'},{av:'AV29EntradaDataEmissaoIni',fld:'vENTRADADATAEMISSAOINI'},{av:'AV30EntradaDataEmissaoFin',fld:'vENTRADADATAEMISSAOFIN'},{av:'A4656EntradaDataEntrada',fld:'ENTRADADATAENTRADA'},{av:'AV33EntradaDataEntradaIni',fld:'vENTRADADATAENTRADAINI'},{av:'AV34EntradaDataEntradaFin',fld:'vENTRADADATAENTRADAFIN'},{av:'A4647EntradaSerie',fld:'ENTRADASERIE'},{av:'AV38EntradaSerieFiltro',fld:'vENTRADASERIEFILTRO'},{av:'A4646EntradaNumeroDocumento',fld:'ENTRADANUMERODOCUMENTO'},{av:'AV39EntradaNumeroDocumentoFiltro',fld:'vENTRADANUMERODOCUMENTOFILTRO'},{av:'A4667EntradaSituacao',fld:'ENTRADASITUACAO'},{av:'A4640EntradaTipo',fld:'ENTRADATIPO'},{av:'AV93Seleciona',fld:'vSELECIONA'},{av:'A4645EntradaFornecedorRazao',fld:'ENTRADAFORNECEDORRAZAO'},{av:'A4709EntradaValorTotal',fld:'ENTRADAVALORTOTAL'},{av:'AV42ProdutoIdFiltro',fld:'vPRODUTOIDFILTRO'},{av:'A4845EntradaItemLoteProdutoEmpId',fld:'ENTRADAITEMLOTEPRODUTOEMPID'},{av:'AV53ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A4846EntradaItemLoteProdutoId',fld:'ENTRADAITEMLOTEPRODUTOID'},{av:'AV94EntradaSituacaoFiltro',fld:'vENTRADASITUACAOFILTRO'},{av:'AV36EntradaSnNormal',fld:'vENTRADASNNORMAL'},{av:'AV41EntradaSnCancelada',fld:'vENTRADASNCANCELADA'},{av:'AV44EntradaSnInutilizada',fld:'vENTRADASNINUTILIZADA'},{av:'AV35EntradaSnNotaEnt',fld:'vENTRADASNNOTAENT'},{av:'AV40EntradaSnNotaComp',fld:'vENTRADASNNOTACOMP'},{av:'AV90EntradaSnAjusteEnt',fld:'vENTRADASNAJUSTEENT'},{av:'AV89EntradaSnDevolucao',fld:'vENTRADASNDEVOLUCAO'},{av:'AV43EntradaSnAjuste',fld:'vENTRADASNAJUSTE'},{av:'AV91EntradaSnTroca',fld:'vENTRADASNTROCA'},{av:'AV92EntradaSnTransf',fld:'vENTRADASNTRANSF'},{av:'AV95EntradaTipoFiltro',fld:'vENTRADATIPOFILTRO'},{av:'AV70CFOPTipoFiltro',fld:'vCFOPTIPOFILTRO'},{av:'A3430CFOPCodigo',fld:'CFOPCODIGO'},{av:'AV71EntradaCFOPCodigo',fld:'vENTRADACFOPCODIGO'},{av:'A3445CFOPTipo',fld:'CFOPTIPO'},{av:'AV82Pag',fld:'vPAG'},{av:'AV81CtrlPag',fld:'vCTRLPAG'}],[{av:'AV81CtrlPag',fld:'vCTRLPAG'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27bmpCustos',fld:'vBMPCUSTOS'},{av:'gx.fn.getCtrlProperty("vBMPCUSTOS","Tooltiptext")',ctrl:'vBMPCUSTOS',prop:'Tooltiptext'},{av:'AV85bmpItem',fld:'vBMPITEM'},{av:'gx.fn.getCtrlProperty("vBMPITEM","Tooltiptext")',ctrl:'vBMPITEM',prop:'Tooltiptext'},{av:'AV86bmpParc',fld:'vBMPPARC'},{av:'gx.fn.getCtrlProperty("vBMPPARC","Tooltiptext")',ctrl:'vBMPPARC',prop:'Tooltiptext'},{av:'AV31SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV76SnErro',fld:'vSNERRO'},{av:'A4638EntradaId',fld:'ENTRADAID'},{av:'A4637EntradaEmpresaId',fld:'ENTRADAEMPRESAID'},{av:'AV54EntradaEmpresaId',fld:'vENTRADAEMPRESAID'},{av:'AV28FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'A4659EntradaFilialEmpId',fld:'ENTRADAFILIALEMPID'},{av:'AV62FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A4660EntradaFilialId',fld:'ENTRADAFILIALID'},{av:'AV32FornecedorIdFiltro',fld:'vFORNECEDORIDFILTRO'},{av:'A4642EntradaFornecedorEmpId',fld:'ENTRADAFORNECEDOREMPID'},{av:'AV63PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A4643EntradaFornecedorId',fld:'ENTRADAFORNECEDORID'},{av:'A4650EntradaCFOPCodigo',fld:'ENTRADACFOPCODIGO'},{av:'AV37CFOPCodigoFiltro',fld:'vCFOPCODIGOFILTRO'},{av:'A4655EntradaDataEmissao',fld:'ENTRADADATAEMISSAO'},{av:'AV29EntradaDataEmissaoIni',fld:'vENTRADADATAEMISSAOINI'},{av:'AV30EntradaDataEmissaoFin',fld:'vENTRADADATAEMISSAOFIN'},{av:'A4656EntradaDataEntrada',fld:'ENTRADADATAENTRADA'},{av:'AV33EntradaDataEntradaIni',fld:'vENTRADADATAENTRADAINI'},{av:'AV34EntradaDataEntradaFin',fld:'vENTRADADATAENTRADAFIN'},{av:'A4647EntradaSerie',fld:'ENTRADASERIE'},{av:'AV38EntradaSerieFiltro',fld:'vENTRADASERIEFILTRO'},{av:'A4646EntradaNumeroDocumento',fld:'ENTRADANUMERODOCUMENTO'},{av:'AV39EntradaNumeroDocumentoFiltro',fld:'vENTRADANUMERODOCUMENTOFILTRO'},{av:'A4667EntradaSituacao',fld:'ENTRADASITUACAO'},{av:'A4640EntradaTipo',fld:'ENTRADATIPO'},{av:'AV93Seleciona',fld:'vSELECIONA'},{av:'A4645EntradaFornecedorRazao',fld:'ENTRADAFORNECEDORRAZAO'},{av:'A4709EntradaValorTotal',fld:'ENTRADAVALORTOTAL'},{av:'AV42ProdutoIdFiltro',fld:'vPRODUTOIDFILTRO'},{av:'A4845EntradaItemLoteProdutoEmpId',fld:'ENTRADAITEMLOTEPRODUTOEMPID'},{av:'AV53ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A4846EntradaItemLoteProdutoId',fld:'ENTRADAITEMLOTEPRODUTOID'},{av:'AV94EntradaSituacaoFiltro',fld:'vENTRADASITUACAOFILTRO'},{av:'AV36EntradaSnNormal',fld:'vENTRADASNNORMAL'},{av:'AV41EntradaSnCancelada',fld:'vENTRADASNCANCELADA'},{av:'AV44EntradaSnInutilizada',fld:'vENTRADASNINUTILIZADA'},{av:'AV35EntradaSnNotaEnt',fld:'vENTRADASNNOTAENT'},{av:'AV40EntradaSnNotaComp',fld:'vENTRADASNNOTACOMP'},{av:'AV90EntradaSnAjusteEnt',fld:'vENTRADASNAJUSTEENT'},{av:'AV89EntradaSnDevolucao',fld:'vENTRADASNDEVOLUCAO'},{av:'AV43EntradaSnAjuste',fld:'vENTRADASNAJUSTE'},{av:'AV91EntradaSnTroca',fld:'vENTRADASNTROCA'},{av:'AV92EntradaSnTransf',fld:'vENTRADASNTRANSF'},{av:'AV95EntradaTipoFiltro',fld:'vENTRADATIPOFILTRO'},{av:'AV70CFOPTipoFiltro',fld:'vCFOPTIPOFILTRO'},{av:'A3430CFOPCodigo',fld:'CFOPCODIGO'},{av:'AV71EntradaCFOPCodigo',fld:'vENTRADACFOPCODIGO'},{av:'A3445CFOPTipo',fld:'CFOPTIPO'},{av:'AV82Pag',fld:'vPAG'},{av:'AV81CtrlPag',fld:'vCTRLPAG'}],[{av:'AV81CtrlPag',fld:'vCTRLPAG'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27bmpCustos',fld:'vBMPCUSTOS'},{av:'gx.fn.getCtrlProperty("vBMPCUSTOS","Tooltiptext")',ctrl:'vBMPCUSTOS',prop:'Tooltiptext'},{av:'AV85bmpItem',fld:'vBMPITEM'},{av:'gx.fn.getCtrlProperty("vBMPITEM","Tooltiptext")',ctrl:'vBMPITEM',prop:'Tooltiptext'},{av:'AV86bmpParc',fld:'vBMPPARC'},{av:'gx.fn.getCtrlProperty("vBMPPARC","Tooltiptext")',ctrl:'vBMPPARC',prop:'Tooltiptext'},{av:'AV31SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV76SnErro',fld:'vSNERRO'},{av:'A4638EntradaId',fld:'ENTRADAID'},{av:'A4637EntradaEmpresaId',fld:'ENTRADAEMPRESAID'},{av:'AV54EntradaEmpresaId',fld:'vENTRADAEMPRESAID'},{av:'AV28FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'A4659EntradaFilialEmpId',fld:'ENTRADAFILIALEMPID'},{av:'AV62FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A4660EntradaFilialId',fld:'ENTRADAFILIALID'},{av:'AV32FornecedorIdFiltro',fld:'vFORNECEDORIDFILTRO'},{av:'A4642EntradaFornecedorEmpId',fld:'ENTRADAFORNECEDOREMPID'},{av:'AV63PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A4643EntradaFornecedorId',fld:'ENTRADAFORNECEDORID'},{av:'A4650EntradaCFOPCodigo',fld:'ENTRADACFOPCODIGO'},{av:'AV37CFOPCodigoFiltro',fld:'vCFOPCODIGOFILTRO'},{av:'A4655EntradaDataEmissao',fld:'ENTRADADATAEMISSAO'},{av:'AV29EntradaDataEmissaoIni',fld:'vENTRADADATAEMISSAOINI'},{av:'AV30EntradaDataEmissaoFin',fld:'vENTRADADATAEMISSAOFIN'},{av:'A4656EntradaDataEntrada',fld:'ENTRADADATAENTRADA'},{av:'AV33EntradaDataEntradaIni',fld:'vENTRADADATAENTRADAINI'},{av:'AV34EntradaDataEntradaFin',fld:'vENTRADADATAENTRADAFIN'},{av:'A4647EntradaSerie',fld:'ENTRADASERIE'},{av:'AV38EntradaSerieFiltro',fld:'vENTRADASERIEFILTRO'},{av:'A4646EntradaNumeroDocumento',fld:'ENTRADANUMERODOCUMENTO'},{av:'AV39EntradaNumeroDocumentoFiltro',fld:'vENTRADANUMERODOCUMENTOFILTRO'},{av:'A4667EntradaSituacao',fld:'ENTRADASITUACAO'},{av:'A4640EntradaTipo',fld:'ENTRADATIPO'},{av:'AV93Seleciona',fld:'vSELECIONA'},{av:'A4645EntradaFornecedorRazao',fld:'ENTRADAFORNECEDORRAZAO'},{av:'A4709EntradaValorTotal',fld:'ENTRADAVALORTOTAL'},{av:'AV42ProdutoIdFiltro',fld:'vPRODUTOIDFILTRO'},{av:'A4845EntradaItemLoteProdutoEmpId',fld:'ENTRADAITEMLOTEPRODUTOEMPID'},{av:'AV53ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A4846EntradaItemLoteProdutoId',fld:'ENTRADAITEMLOTEPRODUTOID'},{av:'AV94EntradaSituacaoFiltro',fld:'vENTRADASITUACAOFILTRO'},{av:'AV36EntradaSnNormal',fld:'vENTRADASNNORMAL'},{av:'AV41EntradaSnCancelada',fld:'vENTRADASNCANCELADA'},{av:'AV44EntradaSnInutilizada',fld:'vENTRADASNINUTILIZADA'},{av:'AV35EntradaSnNotaEnt',fld:'vENTRADASNNOTAENT'},{av:'AV40EntradaSnNotaComp',fld:'vENTRADASNNOTACOMP'},{av:'AV90EntradaSnAjusteEnt',fld:'vENTRADASNAJUSTEENT'},{av:'AV89EntradaSnDevolucao',fld:'vENTRADASNDEVOLUCAO'},{av:'AV43EntradaSnAjuste',fld:'vENTRADASNAJUSTE'},{av:'AV91EntradaSnTroca',fld:'vENTRADASNTROCA'},{av:'AV92EntradaSnTransf',fld:'vENTRADASNTRANSF'},{av:'AV95EntradaTipoFiltro',fld:'vENTRADATIPOFILTRO'},{av:'AV70CFOPTipoFiltro',fld:'vCFOPTIPOFILTRO'},{av:'A3430CFOPCodigo',fld:'CFOPCODIGO'},{av:'AV71EntradaCFOPCodigo',fld:'vENTRADACFOPCODIGO'},{av:'A3445CFOPTipo',fld:'CFOPTIPO'},{av:'AV82Pag',fld:'vPAG'},{av:'AV81CtrlPag',fld:'vCTRLPAG'}],[{av:'AV81CtrlPag',fld:'vCTRLPAG'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27bmpCustos',fld:'vBMPCUSTOS'},{av:'gx.fn.getCtrlProperty("vBMPCUSTOS","Tooltiptext")',ctrl:'vBMPCUSTOS',prop:'Tooltiptext'},{av:'AV85bmpItem',fld:'vBMPITEM'},{av:'gx.fn.getCtrlProperty("vBMPITEM","Tooltiptext")',ctrl:'vBMPITEM',prop:'Tooltiptext'},{av:'AV86bmpParc',fld:'vBMPPARC'},{av:'gx.fn.getCtrlProperty("vBMPPARC","Tooltiptext")',ctrl:'vBMPPARC',prop:'Tooltiptext'},{av:'AV31SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV76SnErro',fld:'vSNERRO'},{av:'A4638EntradaId',fld:'ENTRADAID'},{av:'A4637EntradaEmpresaId',fld:'ENTRADAEMPRESAID'},{av:'AV54EntradaEmpresaId',fld:'vENTRADAEMPRESAID'},{av:'AV28FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'A4659EntradaFilialEmpId',fld:'ENTRADAFILIALEMPID'},{av:'AV62FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A4660EntradaFilialId',fld:'ENTRADAFILIALID'},{av:'AV32FornecedorIdFiltro',fld:'vFORNECEDORIDFILTRO'},{av:'A4642EntradaFornecedorEmpId',fld:'ENTRADAFORNECEDOREMPID'},{av:'AV63PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A4643EntradaFornecedorId',fld:'ENTRADAFORNECEDORID'},{av:'A4650EntradaCFOPCodigo',fld:'ENTRADACFOPCODIGO'},{av:'AV37CFOPCodigoFiltro',fld:'vCFOPCODIGOFILTRO'},{av:'A4655EntradaDataEmissao',fld:'ENTRADADATAEMISSAO'},{av:'AV29EntradaDataEmissaoIni',fld:'vENTRADADATAEMISSAOINI'},{av:'AV30EntradaDataEmissaoFin',fld:'vENTRADADATAEMISSAOFIN'},{av:'A4656EntradaDataEntrada',fld:'ENTRADADATAENTRADA'},{av:'AV33EntradaDataEntradaIni',fld:'vENTRADADATAENTRADAINI'},{av:'AV34EntradaDataEntradaFin',fld:'vENTRADADATAENTRADAFIN'},{av:'A4647EntradaSerie',fld:'ENTRADASERIE'},{av:'AV38EntradaSerieFiltro',fld:'vENTRADASERIEFILTRO'},{av:'A4646EntradaNumeroDocumento',fld:'ENTRADANUMERODOCUMENTO'},{av:'AV39EntradaNumeroDocumentoFiltro',fld:'vENTRADANUMERODOCUMENTOFILTRO'},{av:'A4667EntradaSituacao',fld:'ENTRADASITUACAO'},{av:'A4640EntradaTipo',fld:'ENTRADATIPO'},{av:'AV93Seleciona',fld:'vSELECIONA'},{av:'A4645EntradaFornecedorRazao',fld:'ENTRADAFORNECEDORRAZAO'},{av:'A4709EntradaValorTotal',fld:'ENTRADAVALORTOTAL'},{av:'AV42ProdutoIdFiltro',fld:'vPRODUTOIDFILTRO'},{av:'A4845EntradaItemLoteProdutoEmpId',fld:'ENTRADAITEMLOTEPRODUTOEMPID'},{av:'AV53ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A4846EntradaItemLoteProdutoId',fld:'ENTRADAITEMLOTEPRODUTOID'},{av:'AV94EntradaSituacaoFiltro',fld:'vENTRADASITUACAOFILTRO'},{av:'AV36EntradaSnNormal',fld:'vENTRADASNNORMAL'},{av:'AV41EntradaSnCancelada',fld:'vENTRADASNCANCELADA'},{av:'AV44EntradaSnInutilizada',fld:'vENTRADASNINUTILIZADA'},{av:'AV35EntradaSnNotaEnt',fld:'vENTRADASNNOTAENT'},{av:'AV40EntradaSnNotaComp',fld:'vENTRADASNNOTACOMP'},{av:'AV90EntradaSnAjusteEnt',fld:'vENTRADASNAJUSTEENT'},{av:'AV89EntradaSnDevolucao',fld:'vENTRADASNDEVOLUCAO'},{av:'AV43EntradaSnAjuste',fld:'vENTRADASNAJUSTE'},{av:'AV91EntradaSnTroca',fld:'vENTRADASNTROCA'},{av:'AV92EntradaSnTransf',fld:'vENTRADASNTRANSF'},{av:'AV95EntradaTipoFiltro',fld:'vENTRADATIPOFILTRO'},{av:'AV70CFOPTipoFiltro',fld:'vCFOPTIPOFILTRO'},{av:'A3430CFOPCodigo',fld:'CFOPCODIGO'},{av:'AV71EntradaCFOPCodigo',fld:'vENTRADACFOPCODIGO'},{av:'A3445CFOPTipo',fld:'CFOPTIPO'},{av:'AV82Pag',fld:'vPAG'},{av:'AV81CtrlPag',fld:'vCTRLPAG'}],[{av:'AV81CtrlPag',fld:'vCTRLPAG'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV31SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV76SnErro',fld:'vSNERRO'},{av:'A4638EntradaId',fld:'ENTRADAID'},{av:'A4637EntradaEmpresaId',fld:'ENTRADAEMPRESAID'},{av:'AV54EntradaEmpresaId',fld:'vENTRADAEMPRESAID'},{av:'AV28FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'A4659EntradaFilialEmpId',fld:'ENTRADAFILIALEMPID'},{av:'AV62FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A4660EntradaFilialId',fld:'ENTRADAFILIALID'},{av:'AV32FornecedorIdFiltro',fld:'vFORNECEDORIDFILTRO'},{av:'A4642EntradaFornecedorEmpId',fld:'ENTRADAFORNECEDOREMPID'},{av:'AV63PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A4643EntradaFornecedorId',fld:'ENTRADAFORNECEDORID'},{av:'A4650EntradaCFOPCodigo',fld:'ENTRADACFOPCODIGO'},{av:'AV37CFOPCodigoFiltro',fld:'vCFOPCODIGOFILTRO'},{av:'A4655EntradaDataEmissao',fld:'ENTRADADATAEMISSAO'},{av:'AV29EntradaDataEmissaoIni',fld:'vENTRADADATAEMISSAOINI'},{av:'AV30EntradaDataEmissaoFin',fld:'vENTRADADATAEMISSAOFIN'},{av:'A4656EntradaDataEntrada',fld:'ENTRADADATAENTRADA'},{av:'AV33EntradaDataEntradaIni',fld:'vENTRADADATAENTRADAINI'},{av:'AV34EntradaDataEntradaFin',fld:'vENTRADADATAENTRADAFIN'},{av:'A4647EntradaSerie',fld:'ENTRADASERIE'},{av:'AV38EntradaSerieFiltro',fld:'vENTRADASERIEFILTRO'},{av:'A4646EntradaNumeroDocumento',fld:'ENTRADANUMERODOCUMENTO'},{av:'AV39EntradaNumeroDocumentoFiltro',fld:'vENTRADANUMERODOCUMENTOFILTRO'},{av:'A4667EntradaSituacao',fld:'ENTRADASITUACAO'},{av:'A4640EntradaTipo',fld:'ENTRADATIPO'},{av:'AV93Seleciona',fld:'vSELECIONA'},{av:'A4645EntradaFornecedorRazao',fld:'ENTRADAFORNECEDORRAZAO'},{av:'A4709EntradaValorTotal',fld:'ENTRADAVALORTOTAL'},{av:'AV42ProdutoIdFiltro',fld:'vPRODUTOIDFILTRO'},{av:'A4845EntradaItemLoteProdutoEmpId',fld:'ENTRADAITEMLOTEPRODUTOEMPID'},{av:'AV53ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A4846EntradaItemLoteProdutoId',fld:'ENTRADAITEMLOTEPRODUTOID'},{av:'AV94EntradaSituacaoFiltro',fld:'vENTRADASITUACAOFILTRO'},{av:'AV36EntradaSnNormal',fld:'vENTRADASNNORMAL'},{av:'AV41EntradaSnCancelada',fld:'vENTRADASNCANCELADA'},{av:'AV44EntradaSnInutilizada',fld:'vENTRADASNINUTILIZADA'},{av:'AV35EntradaSnNotaEnt',fld:'vENTRADASNNOTAENT'},{av:'AV40EntradaSnNotaComp',fld:'vENTRADASNNOTACOMP'},{av:'AV90EntradaSnAjusteEnt',fld:'vENTRADASNAJUSTEENT'},{av:'AV89EntradaSnDevolucao',fld:'vENTRADASNDEVOLUCAO'},{av:'AV43EntradaSnAjuste',fld:'vENTRADASNAJUSTE'},{av:'AV91EntradaSnTroca',fld:'vENTRADASNTROCA'},{av:'AV92EntradaSnTransf',fld:'vENTRADASNTRANSF'},{av:'AV95EntradaTipoFiltro',fld:'vENTRADATIPOFILTRO'},{av:'AV70CFOPTipoFiltro',fld:'vCFOPTIPOFILTRO'},{av:'A3430CFOPCodigo',fld:'CFOPCODIGO'},{av:'AV71EntradaCFOPCodigo',fld:'vENTRADACFOPCODIGO'},{av:'A3445CFOPTipo',fld:'CFOPTIPO'},{av:'AV82Pag',fld:'vPAG'},{av:'AV81CtrlPag',fld:'vCTRLPAG'}],[{av:'AV58ContLinhas',fld:'vCONTLINHAS'},{av:'AV52SnAchou',fld:'vSNACHOU'},{av:'AV72SnAchouCFOP',fld:'vSNACHOUCFOP'},{av:'AV94EntradaSituacaoFiltro',fld:'vENTRADASITUACAOFILTRO'},{av:'AV95EntradaTipoFiltro',fld:'vENTRADATIPOFILTRO'},{av:'AV22EntradaId',fld:'vENTRADAID'},{av:'AV17EntradaFilialId',fld:'vENTRADAFILIALID'},{av:'AV19EntradaFornecedorId',fld:'vENTRADAFORNECEDORID'},{av:'AV20EntradaFornecRazao',fld:'vENTRADAFORNECRAZAO'},{av:'AV21EntradaSerie',fld:'vENTRADASERIE'},{av:'AV55EntradaNumeroDocumento',fld:'vENTRADANUMERODOCUMENTO'},{av:'AV23EntradaDataEmissao',fld:'vENTRADADATAEMISSAO'},{av:'AV24EntradaDataEntrada',fld:'vENTRADADATAENTRADA'},{av:'AV25EntradaValorTotal',fld:'vENTRADAVALORTOTAL'},{av:'AV26EntradaSituacao',fld:'vENTRADASITUACAO'},{av:'AV45EntradaTipo',fld:'vENTRADATIPO'},{av:'AV71EntradaCFOPCodigo',fld:'vENTRADACFOPCODIGO'},{av:'AV83Res',fld:'vRES'},{av:'AV84ResInt',fld:'vRESINT'},{av:'AV82Pag',fld:'vPAG'},{av:'AV93Seleciona',fld:'vSELECIONA'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27bmpCustos',fld:'vBMPCUSTOS'},{av:'gx.fn.getCtrlProperty("vBMPCUSTOS","Tooltiptext")',ctrl:'vBMPCUSTOS',prop:'Tooltiptext'},{av:'AV85bmpItem',fld:'vBMPITEM'},{av:'gx.fn.getCtrlProperty("vBMPITEM","Tooltiptext")',ctrl:'vBMPITEM',prop:'Tooltiptext'},{av:'AV86bmpParc',fld:'vBMPPARC'},{av:'gx.fn.getCtrlProperty("vBMPPARC","Tooltiptext")',ctrl:'vBMPPARC',prop:'Tooltiptext'},{av:'AV31SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV76SnErro',fld:'vSNERRO'},{av:'A4638EntradaId',fld:'ENTRADAID'},{av:'A4637EntradaEmpresaId',fld:'ENTRADAEMPRESAID'},{av:'AV54EntradaEmpresaId',fld:'vENTRADAEMPRESAID'},{av:'AV28FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'A4659EntradaFilialEmpId',fld:'ENTRADAFILIALEMPID'},{av:'AV62FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A4660EntradaFilialId',fld:'ENTRADAFILIALID'},{av:'AV32FornecedorIdFiltro',fld:'vFORNECEDORIDFILTRO'},{av:'A4642EntradaFornecedorEmpId',fld:'ENTRADAFORNECEDOREMPID'},{av:'AV63PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A4643EntradaFornecedorId',fld:'ENTRADAFORNECEDORID'},{av:'A4650EntradaCFOPCodigo',fld:'ENTRADACFOPCODIGO'},{av:'AV37CFOPCodigoFiltro',fld:'vCFOPCODIGOFILTRO'},{av:'A4655EntradaDataEmissao',fld:'ENTRADADATAEMISSAO'},{av:'AV29EntradaDataEmissaoIni',fld:'vENTRADADATAEMISSAOINI'},{av:'AV30EntradaDataEmissaoFin',fld:'vENTRADADATAEMISSAOFIN'},{av:'A4656EntradaDataEntrada',fld:'ENTRADADATAENTRADA'},{av:'AV33EntradaDataEntradaIni',fld:'vENTRADADATAENTRADAINI'},{av:'AV34EntradaDataEntradaFin',fld:'vENTRADADATAENTRADAFIN'},{av:'A4647EntradaSerie',fld:'ENTRADASERIE'},{av:'AV38EntradaSerieFiltro',fld:'vENTRADASERIEFILTRO'},{av:'A4646EntradaNumeroDocumento',fld:'ENTRADANUMERODOCUMENTO'},{av:'AV39EntradaNumeroDocumentoFiltro',fld:'vENTRADANUMERODOCUMENTOFILTRO'},{av:'A4667EntradaSituacao',fld:'ENTRADASITUACAO'},{av:'A4640EntradaTipo',fld:'ENTRADATIPO'},{av:'AV93Seleciona',fld:'vSELECIONA'},{av:'A4645EntradaFornecedorRazao',fld:'ENTRADAFORNECEDORRAZAO'},{av:'A4709EntradaValorTotal',fld:'ENTRADAVALORTOTAL'},{av:'AV42ProdutoIdFiltro',fld:'vPRODUTOIDFILTRO'},{av:'A4845EntradaItemLoteProdutoEmpId',fld:'ENTRADAITEMLOTEPRODUTOEMPID'},{av:'AV53ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A4846EntradaItemLoteProdutoId',fld:'ENTRADAITEMLOTEPRODUTOID'},{av:'AV94EntradaSituacaoFiltro',fld:'vENTRADASITUACAOFILTRO'},{av:'AV36EntradaSnNormal',fld:'vENTRADASNNORMAL'},{av:'AV41EntradaSnCancelada',fld:'vENTRADASNCANCELADA'},{av:'AV44EntradaSnInutilizada',fld:'vENTRADASNINUTILIZADA'},{av:'AV35EntradaSnNotaEnt',fld:'vENTRADASNNOTAENT'},{av:'AV40EntradaSnNotaComp',fld:'vENTRADASNNOTACOMP'},{av:'AV90EntradaSnAjusteEnt',fld:'vENTRADASNAJUSTEENT'},{av:'AV89EntradaSnDevolucao',fld:'vENTRADASNDEVOLUCAO'},{av:'AV43EntradaSnAjuste',fld:'vENTRADASNAJUSTE'},{av:'AV91EntradaSnTroca',fld:'vENTRADASNTROCA'},{av:'AV92EntradaSnTransf',fld:'vENTRADASNTRANSF'},{av:'AV95EntradaTipoFiltro',fld:'vENTRADATIPOFILTRO'},{av:'AV70CFOPTipoFiltro',fld:'vCFOPTIPOFILTRO'},{av:'A3430CFOPCodigo',fld:'CFOPCODIGO'},{av:'AV71EntradaCFOPCodigo',fld:'vENTRADACFOPCODIGO'},{av:'A3445CFOPTipo',fld:'CFOPTIPO'},{av:'AV82Pag',fld:'vPAG'},{av:'AV81CtrlPag',fld:'vCTRLPAG'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'}],[{av:'AV31SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV81CtrlPag',fld:'vCTRLPAG'},{av:'AV76SnErro',fld:'vSNERRO'},{av:'AV108GXLvl290',fld:'vGXLVL290'},{av:'AV109GXLvl302',fld:'vGXLVL302'},{av:'AV110GXLvl314',fld:'vGXLVL314'},{av:'AV111GXLvl326',fld:'vGXLVL326'}]];
   this.EvtParms["'CUSTOS'"] = [[{av:'AV54EntradaEmpresaId',fld:'vENTRADAEMPRESAID'},{av:'AV22EntradaId',fld:'vENTRADAID'}],[]];
   this.EvtParms["'ITENS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27bmpCustos',fld:'vBMPCUSTOS'},{av:'gx.fn.getCtrlProperty("vBMPCUSTOS","Tooltiptext")',ctrl:'vBMPCUSTOS',prop:'Tooltiptext'},{av:'AV85bmpItem',fld:'vBMPITEM'},{av:'gx.fn.getCtrlProperty("vBMPITEM","Tooltiptext")',ctrl:'vBMPITEM',prop:'Tooltiptext'},{av:'AV86bmpParc',fld:'vBMPPARC'},{av:'gx.fn.getCtrlProperty("vBMPPARC","Tooltiptext")',ctrl:'vBMPPARC',prop:'Tooltiptext'},{av:'AV31SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV76SnErro',fld:'vSNERRO'},{av:'A4638EntradaId',fld:'ENTRADAID'},{av:'A4637EntradaEmpresaId',fld:'ENTRADAEMPRESAID'},{av:'AV54EntradaEmpresaId',fld:'vENTRADAEMPRESAID'},{av:'AV28FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'A4659EntradaFilialEmpId',fld:'ENTRADAFILIALEMPID'},{av:'AV62FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A4660EntradaFilialId',fld:'ENTRADAFILIALID'},{av:'AV32FornecedorIdFiltro',fld:'vFORNECEDORIDFILTRO'},{av:'A4642EntradaFornecedorEmpId',fld:'ENTRADAFORNECEDOREMPID'},{av:'AV63PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A4643EntradaFornecedorId',fld:'ENTRADAFORNECEDORID'},{av:'A4650EntradaCFOPCodigo',fld:'ENTRADACFOPCODIGO'},{av:'AV37CFOPCodigoFiltro',fld:'vCFOPCODIGOFILTRO'},{av:'A4655EntradaDataEmissao',fld:'ENTRADADATAEMISSAO'},{av:'AV29EntradaDataEmissaoIni',fld:'vENTRADADATAEMISSAOINI'},{av:'AV30EntradaDataEmissaoFin',fld:'vENTRADADATAEMISSAOFIN'},{av:'A4656EntradaDataEntrada',fld:'ENTRADADATAENTRADA'},{av:'AV33EntradaDataEntradaIni',fld:'vENTRADADATAENTRADAINI'},{av:'AV34EntradaDataEntradaFin',fld:'vENTRADADATAENTRADAFIN'},{av:'A4647EntradaSerie',fld:'ENTRADASERIE'},{av:'AV38EntradaSerieFiltro',fld:'vENTRADASERIEFILTRO'},{av:'A4646EntradaNumeroDocumento',fld:'ENTRADANUMERODOCUMENTO'},{av:'AV39EntradaNumeroDocumentoFiltro',fld:'vENTRADANUMERODOCUMENTOFILTRO'},{av:'A4667EntradaSituacao',fld:'ENTRADASITUACAO'},{av:'A4640EntradaTipo',fld:'ENTRADATIPO'},{av:'AV93Seleciona',fld:'vSELECIONA'},{av:'A4645EntradaFornecedorRazao',fld:'ENTRADAFORNECEDORRAZAO'},{av:'A4709EntradaValorTotal',fld:'ENTRADAVALORTOTAL'},{av:'AV42ProdutoIdFiltro',fld:'vPRODUTOIDFILTRO'},{av:'A4845EntradaItemLoteProdutoEmpId',fld:'ENTRADAITEMLOTEPRODUTOEMPID'},{av:'AV53ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A4846EntradaItemLoteProdutoId',fld:'ENTRADAITEMLOTEPRODUTOID'},{av:'AV94EntradaSituacaoFiltro',fld:'vENTRADASITUACAOFILTRO'},{av:'AV36EntradaSnNormal',fld:'vENTRADASNNORMAL'},{av:'AV41EntradaSnCancelada',fld:'vENTRADASNCANCELADA'},{av:'AV44EntradaSnInutilizada',fld:'vENTRADASNINUTILIZADA'},{av:'AV35EntradaSnNotaEnt',fld:'vENTRADASNNOTAENT'},{av:'AV40EntradaSnNotaComp',fld:'vENTRADASNNOTACOMP'},{av:'AV90EntradaSnAjusteEnt',fld:'vENTRADASNAJUSTEENT'},{av:'AV89EntradaSnDevolucao',fld:'vENTRADASNDEVOLUCAO'},{av:'AV43EntradaSnAjuste',fld:'vENTRADASNAJUSTE'},{av:'AV91EntradaSnTroca',fld:'vENTRADASNTROCA'},{av:'AV92EntradaSnTransf',fld:'vENTRADASNTRANSF'},{av:'AV95EntradaTipoFiltro',fld:'vENTRADATIPOFILTRO'},{av:'AV70CFOPTipoFiltro',fld:'vCFOPTIPOFILTRO'},{av:'A3430CFOPCodigo',fld:'CFOPCODIGO'},{av:'AV71EntradaCFOPCodigo',fld:'vENTRADACFOPCODIGO'},{av:'A3445CFOPTipo',fld:'CFOPTIPO'},{av:'AV82Pag',fld:'vPAG'},{av:'AV81CtrlPag',fld:'vCTRLPAG'},{av:'AV22EntradaId',fld:'vENTRADAID'}],[]];
   this.EvtParms["'PARCELAS'"] = [[{av:'AV54EntradaEmpresaId',fld:'vENTRADAEMPRESAID'},{av:'AV22EntradaId',fld:'vENTRADAID'}],[]];
   this.setPrompt("IMGPROMPT", [13]);
   this.setPrompt("IMGPROMPTPROD", [19,127,127,127,126,135,134]);
   this.setPrompt("IMGPROMPTFORNEC", [26]);
   this.setPrompt("IMGPROMPTCFOP", [48]);
   this.setVCMap("A4701EntradaValorProdutos", "ENTRADAVALORPRODUTOS", 0, "decimal");
   this.setVCMap("A6542EntradaValorServico", "ENTRADAVALORSERVICO", 0, "decimal");
   this.setVCMap("A4703EntradaValorDesconto", "ENTRADAVALORDESCONTO", 0, "decimal");
   this.setVCMap("A4716EntradaValorICMSST", "ENTRADAVALORICMSST", 0, "decimal");
   this.setVCMap("A4706EntradaValorSeguro", "ENTRADAVALORSEGURO", 0, "decimal");
   this.setVCMap("A4707EntradaValorOutrasDespesas", "ENTRADAVALOROUTRASDESPESAS", 0, "decimal");
   this.setVCMap("A4717EntradaValorIPI", "ENTRADAVALORIPI", 0, "decimal");
   this.setVCMap("A4705EntradaValorFrete", "ENTRADAVALORFRETE", 0, "decimal");
   this.setVCMap("A4737EntradaFreteEntraTotal", "ENTRADAFRETEENTRATOTAL", 0, "char");
   this.setVCMap("A10530EntradaValorICMSDesonerado", "ENTRADAVALORICMSDESONERADO", 0, "decimal");
   this.setVCMap("A11303EntradaICMSDesEntraTotal", "ENTRADAICMSDESENTRATOTAL", 0, "char");
   this.setVCMap("A10599EntradaValorFCPST", "ENTRADAVALORFCPST", 0, "decimal");
   this.setVCMap("A10600EntradaValorFCPSTRet", "ENTRADAVALORFCPSTRET", 0, "decimal");
   this.setVCMap("A4709EntradaValorTotal", "ENTRADAVALORTOTAL", 0, "decimal");
   this.setVCMap("A4638EntradaId", "ENTRADAID", 0, "int");
   this.setVCMap("A4637EntradaEmpresaId", "ENTRADAEMPRESAID", 0, "char");
   this.setVCMap("AV54EntradaEmpresaId", "vENTRADAEMPRESAID", 0, "char");
   this.setVCMap("A4659EntradaFilialEmpId", "ENTRADAFILIALEMPID", 0, "char");
   this.setVCMap("A4660EntradaFilialId", "ENTRADAFILIALID", 0, "int");
   this.setVCMap("A4642EntradaFornecedorEmpId", "ENTRADAFORNECEDOREMPID", 0, "char");
   this.setVCMap("A4643EntradaFornecedorId", "ENTRADAFORNECEDORID", 0, "int");
   this.setVCMap("A4650EntradaCFOPCodigo", "ENTRADACFOPCODIGO", 0, "int");
   this.setVCMap("A4655EntradaDataEmissao", "ENTRADADATAEMISSAO", 0, "date");
   this.setVCMap("A4656EntradaDataEntrada", "ENTRADADATAENTRADA", 0, "date");
   this.setVCMap("A4647EntradaSerie", "ENTRADASERIE", 0, "char");
   this.setVCMap("A4646EntradaNumeroDocumento", "ENTRADANUMERODOCUMENTO", 0, "int");
   this.setVCMap("A4667EntradaSituacao", "ENTRADASITUACAO", 0, "char");
   this.setVCMap("A4640EntradaTipo", "ENTRADATIPO", 0, "char");
   this.setVCMap("AV93Seleciona", "vSELECIONA", 0, "int");
   this.setVCMap("A4645EntradaFornecedorRazao", "ENTRADAFORNECEDORRAZAO", 0, "svchar");
   this.setVCMap("A4845EntradaItemLoteProdutoEmpId", "ENTRADAITEMLOTEPRODUTOEMPID", 0, "char");
   this.setVCMap("A4846EntradaItemLoteProdutoId", "ENTRADAITEMLOTEPRODUTOID", 0, "int");
   this.setVCMap("AV94EntradaSituacaoFiltro", "vENTRADASITUACAOFILTRO", 0, "char");
   this.setVCMap("AV95EntradaTipoFiltro", "vENTRADATIPOFILTRO", 0, "char");
   this.setVCMap("A3430CFOPCodigo", "CFOPCODIGO", 0, "int");
   this.setVCMap("AV71EntradaCFOPCodigo", "vENTRADACFOPCODIGO", 0, "int");
   this.setVCMap("A3445CFOPTipo", "CFOPTIPO", 0, "char");
   this.setVCMap("AV88Tipo", "vTIPO", 0, "char");
   this.setVCMap("AV51EntradaIdOut", "vENTRADAIDOUT", 0, "int");
   this.setVCMap("AV96SerieOut", "vSERIEOUT", 0, "char");
   this.setVCMap("AV97DocumentoOut", "vDOCUMENTOOUT", 0, "int");
   this.setVCMap("A4638EntradaId", "ENTRADAID", 0, "int");
   this.setVCMap("A4637EntradaEmpresaId", "ENTRADAEMPRESAID", 0, "char");
   this.setVCMap("AV54EntradaEmpresaId", "vENTRADAEMPRESAID", 0, "char");
   this.setVCMap("A4659EntradaFilialEmpId", "ENTRADAFILIALEMPID", 0, "char");
   this.setVCMap("A4660EntradaFilialId", "ENTRADAFILIALID", 0, "int");
   this.setVCMap("A4642EntradaFornecedorEmpId", "ENTRADAFORNECEDOREMPID", 0, "char");
   this.setVCMap("A4643EntradaFornecedorId", "ENTRADAFORNECEDORID", 0, "int");
   this.setVCMap("A4650EntradaCFOPCodigo", "ENTRADACFOPCODIGO", 0, "int");
   this.setVCMap("A4655EntradaDataEmissao", "ENTRADADATAEMISSAO", 0, "date");
   this.setVCMap("A4656EntradaDataEntrada", "ENTRADADATAENTRADA", 0, "date");
   this.setVCMap("A4647EntradaSerie", "ENTRADASERIE", 0, "char");
   this.setVCMap("A4646EntradaNumeroDocumento", "ENTRADANUMERODOCUMENTO", 0, "int");
   this.setVCMap("A4667EntradaSituacao", "ENTRADASITUACAO", 0, "char");
   this.setVCMap("A4640EntradaTipo", "ENTRADATIPO", 0, "char");
   this.setVCMap("AV93Seleciona", "vSELECIONA", 0, "int");
   this.setVCMap("A4645EntradaFornecedorRazao", "ENTRADAFORNECEDORRAZAO", 0, "svchar");
   this.setVCMap("A4845EntradaItemLoteProdutoEmpId", "ENTRADAITEMLOTEPRODUTOEMPID", 0, "char");
   this.setVCMap("A4846EntradaItemLoteProdutoId", "ENTRADAITEMLOTEPRODUTOID", 0, "int");
   this.setVCMap("AV94EntradaSituacaoFiltro", "vENTRADASITUACAOFILTRO", 0, "char");
   this.setVCMap("AV95EntradaTipoFiltro", "vENTRADATIPOFILTRO", 0, "char");
   this.setVCMap("A3430CFOPCodigo", "CFOPCODIGO", 0, "int");
   this.setVCMap("AV71EntradaCFOPCodigo", "vENTRADACFOPCODIGO", 0, "int");
   this.setVCMap("A3445CFOPTipo", "CFOPTIPO", 0, "char");
   GridContainer.addRefreshingVar({rfrVar:"AV27bmpCustos", rfrProp:"Value", gxAttId:"Bmpcustos"});
   GridContainer.addRefreshingVar({rfrVar:"AV27bmpCustos", rfrProp:"Tooltiptext", gxAttId:"Bmpcustos"});
   GridContainer.addRefreshingVar({rfrVar:"AV85bmpItem", rfrProp:"Value", gxAttId:"Bmpitem"});
   GridContainer.addRefreshingVar({rfrVar:"AV85bmpItem", rfrProp:"Tooltiptext", gxAttId:"Bmpitem"});
   GridContainer.addRefreshingVar({rfrVar:"AV86bmpParc", rfrProp:"Value", gxAttId:"Bmpparc"});
   GridContainer.addRefreshingVar({rfrVar:"AV86bmpParc", rfrProp:"Tooltiptext", gxAttId:"Bmpparc"});
   GridContainer.addRefreshingVar(this.GXValidFnc[136]);
   GridContainer.addRefreshingVar(this.GXValidFnc[137]);
   GridContainer.addRefreshingVar({rfrVar:"A4638EntradaId"});
   GridContainer.addRefreshingVar({rfrVar:"A4637EntradaEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV54EntradaEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar({rfrVar:"A4659EntradaFilialEmpId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[130]);
   GridContainer.addRefreshingVar({rfrVar:"A4660EntradaFilialId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridContainer.addRefreshingVar({rfrVar:"A4642EntradaFornecedorEmpId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[131]);
   GridContainer.addRefreshingVar({rfrVar:"A4643EntradaFornecedorId"});
   GridContainer.addRefreshingVar({rfrVar:"A4650EntradaCFOPCodigo"});
   GridContainer.addRefreshingVar(this.GXValidFnc[48]);
   GridContainer.addRefreshingVar({rfrVar:"A4655EntradaDataEmissao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[57]);
   GridContainer.addRefreshingVar(this.GXValidFnc[61]);
   GridContainer.addRefreshingVar({rfrVar:"A4656EntradaDataEntrada"});
   GridContainer.addRefreshingVar(this.GXValidFnc[78]);
   GridContainer.addRefreshingVar(this.GXValidFnc[82]);
   GridContainer.addRefreshingVar({rfrVar:"A4647EntradaSerie"});
   GridContainer.addRefreshingVar(this.GXValidFnc[40]);
   GridContainer.addRefreshingVar({rfrVar:"A4646EntradaNumeroDocumento"});
   GridContainer.addRefreshingVar(this.GXValidFnc[44]);
   GridContainer.addRefreshingVar({rfrVar:"A4667EntradaSituacao"});
   GridContainer.addRefreshingVar({rfrVar:"A4640EntradaTipo"});
   GridContainer.addRefreshingVar({rfrVar:"AV93Seleciona"});
   GridContainer.addRefreshingVar({rfrVar:"A4645EntradaFornecedorRazao"});
   GridContainer.addRefreshingVar({rfrVar:"A4709EntradaValorTotal"});
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridContainer.addRefreshingVar({rfrVar:"A4845EntradaItemLoteProdutoEmpId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[133]);
   GridContainer.addRefreshingVar({rfrVar:"A4846EntradaItemLoteProdutoId"});
   GridContainer.addRefreshingVar({rfrVar:"AV94EntradaSituacaoFiltro"});
   GridContainer.addRefreshingVar(this.GXValidFnc[66]);
   GridContainer.addRefreshingVar(this.GXValidFnc[68]);
   GridContainer.addRefreshingVar(this.GXValidFnc[70]);
   GridContainer.addRefreshingVar(this.GXValidFnc[141]);
   GridContainer.addRefreshingVar(this.GXValidFnc[143]);
   GridContainer.addRefreshingVar(this.GXValidFnc[145]);
   GridContainer.addRefreshingVar(this.GXValidFnc[144]);
   GridContainer.addRefreshingVar(this.GXValidFnc[142]);
   GridContainer.addRefreshingVar(this.GXValidFnc[146]);
   GridContainer.addRefreshingVar(this.GXValidFnc[147]);
   GridContainer.addRefreshingVar({rfrVar:"AV95EntradaTipoFiltro"});
   GridContainer.addRefreshingVar(this.GXValidFnc[32]);
   GridContainer.addRefreshingVar({rfrVar:"A3430CFOPCodigo"});
   GridContainer.addRefreshingVar({rfrVar:"AV71EntradaCFOPCodigo"});
   GridContainer.addRefreshingVar({rfrVar:"A3445CFOPTipo"});
   GridContainer.addRefreshingVar(this.GXValidFnc[139]);
   GridContainer.addRefreshingVar(this.GXValidFnc[138]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultapromptentrada());
