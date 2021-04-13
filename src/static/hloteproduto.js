/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:0:10.45
*/
gx.evt.autoSkip = false;
gx.define('hloteproduto', false, function () {
   this.ServerClass =  "hloteproduto" ;
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
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A2964ProdutoEmpresaId=gx.fn.getControlValue("PRODUTOEMPRESAID") ;
      this.A11191LoteProdutoCodBarPrd=gx.fn.getControlValue("LOTEPRODUTOCODBARPRD") ;
      this.AV82SnLoteMedicamen=gx.fn.getControlValue("vSNLOTEMEDICAMEN") ;
      this.AV48AtributoEsquemaCodigo1=gx.fn.getIntegerValue("vATRIBUTOESQUEMACODIGO1",'.') ;
      this.AV45Retorno=gx.fn.getControlValue("vRETORNO") ;
      this.AV49AtributoEsquemaCodigo2=gx.fn.getIntegerValue("vATRIBUTOESQUEMACODIGO2",'.') ;
      this.AV50AtributoEsquemaCodigo3=gx.fn.getIntegerValue("vATRIBUTOESQUEMACODIGO3",'.') ;
      this.AV51AtributoEsquemaCodigo4=gx.fn.getIntegerValue("vATRIBUTOESQUEMACODIGO4",'.') ;
      this.AV52AtributoEsquemaCodigo5=gx.fn.getIntegerValue("vATRIBUTOESQUEMACODIGO5",'.') ;
      this.AV76filtrosMovEst=gx.fn.getControlValue("vFILTROSMOVEST") ;
      this.AV98Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV53SnLoteUnico=gx.fn.getControlValue("vSNLOTEUNICO") ;
      this.A2915EsquemaCodigo=gx.fn.getIntegerValue("ESQUEMACODIGO",'.') ;
      this.A10788ProdutoSnControlaVenc=gx.fn.getControlValue("PRODUTOSNCONTROLAVENC") ;
      this.AV84SnContrArmazem=gx.fn.getControlValue("vSNCONTRARMAZEM") ;
      this.AV55FilialUnica=gx.fn.getControlValue("vFILIALUNICA") ;
      this.A2921AtributoEsquemaCodigo=gx.fn.getIntegerValue("ATRIBUTOESQUEMACODIGO",'.') ;
      this.A2918AtributoEsquemaSnVencimento=gx.fn.getControlValue("ATRIBUTOESQUEMASNVENCIMENTO") ;
      this.A2916AtributoEsquemaDescricao=gx.fn.getControlValue("ATRIBUTOESQUEMADESCRICAO") ;
      this.AV44EsquemaCodigo=gx.fn.getIntegerValue("vESQUEMACODIGO",'.') ;
      this.AV47AtributoEsquemaCodigo=gx.fn.getIntegerValue("vATRIBUTOESQUEMACODIGO",'.') ;
      this.A2917AtributoEsquemaSnCadastrado=gx.fn.getControlValue("ATRIBUTOESQUEMASNCADASTRADO") ;
      this.A2941ValorAtributoCodigo=gx.fn.getIntegerValue("VALORATRIBUTOCODIGO",'.') ;
      this.AV46Combinacao=gx.fn.getIntegerValue("vCOMBINACAO",'.') ;
      this.A2938ValorAtributoDescricao=gx.fn.getControlValue("VALORATRIBUTODESCRICAO") ;
      this.AV81CondicionalADiminuir=gx.fn.getDecimalValue("vCONDICIONALADIMINUIR",'.',',') ;
      this.A6591SaidaCondItemSeq=gx.fn.getIntegerValue("SAIDACONDITEMSEQ",'.') ;
      this.A4306SaidaEmpresaId=gx.fn.getControlValue("SAIDAEMPRESAID") ;
      this.AV73SaidaEmpresaId=gx.fn.getControlValue("vSAIDAEMPRESAID") ;
      this.A10443SaidaItemCondSituacao=gx.fn.getControlValue("SAIDAITEMCONDSITUACAO") ;
      this.A6581SaidaItemCondLoteFilialEmpId=gx.fn.getControlValue("SAIDAITEMCONDLOTEFILIALEMPID") ;
      this.A6582SaidaItemCondLoteFilialId=gx.fn.getIntegerValue("SAIDAITEMCONDLOTEFILIALID",'.') ;
      this.AV68SaidaItemCondLoteFilialId=gx.fn.getIntegerValue("vSAIDAITEMCONDLOTEFILIALID",'.') ;
      this.A6584SaidaItemCondLoteProdEmpId=gx.fn.getControlValue("SAIDAITEMCONDLOTEPRODEMPID") ;
      this.A6585SaidaItemCondLoteProdId=gx.fn.getIntegerValue("SAIDAITEMCONDLOTEPRODID",'.') ;
      this.AV69SaidaItemCondLoteProdId=gx.fn.getIntegerValue("vSAIDAITEMCONDLOTEPRODID",'.') ;
      this.A6587SaidaItemCondLoteCombinacao=gx.fn.getControlValue("SAIDAITEMCONDLOTECOMBINACAO") ;
      this.AV70SaidaItemCondLoteCombinacao=gx.fn.getControlValue("vSAIDAITEMCONDLOTECOMBINACAO") ;
      this.A6594SaidaItemCondQuantidade=gx.fn.getDecimalValue("SAIDAITEMCONDQUANTIDADE",'.',',') ;
      this.A6088SaidaSnAlteraSaldo=gx.fn.getControlValue("SAIDASNALTERASALDO") ;
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
   this.Valid_Produtoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(55) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PRODUTOID", gx.fn.currentGridRowImpl(55));
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
   this.Valid_Loteprodutocombinacao=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(55) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("LOTEPRODUTOCOMBINACAO", gx.fn.currentGridRowImpl(55));
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
   this.Valid_Produtoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(55) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PRODUTOID", gx.fn.currentGridRowImpl(55));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Produtoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(55) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PRODUTOID", gx.fn.currentGridRowImpl(55));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Produtoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(55) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PRODUTOID", gx.fn.currentGridRowImpl(55));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Produtoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(55) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PRODUTOID", gx.fn.currentGridRowImpl(55));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Produtoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(55) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PRODUTOID", gx.fn.currentGridRowImpl(55));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Produtoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(55) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PRODUTOID", gx.fn.currentGridRowImpl(55));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e16om2_client=function()
   {
      this.executeServerEvent("FILTRARLOTE.CLICK", true, null, false, true);
   };
   this.e11om2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12om2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17om2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13om2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14om2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15om2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e22om2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e23om2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e24om2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e25om2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26om2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,16,18,21,23,24,25,27,32,35,38,40,42,44,46,49,51,52,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99];
   this.GXLastCtrlId =99;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",55,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hloteproduto",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Atributo1",56,"vATRIBUTO1","","","Atributo1","char",0,"px",15,15,"left",null,[],"Atributo1","Atributo1",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Atributo2",57,"vATRIBUTO2","","","Atributo2","char",0,"px",15,15,"left",null,[],"Atributo2","Atributo2",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Atributo3",58,"vATRIBUTO3","","","Atributo3","char",0,"px",15,15,"left",null,[],"Atributo3","Atributo3",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Atributo4",59,"vATRIBUTO4","","","Atributo4","char",0,"px",15,15,"left",null,[],"Atributo4","Atributo4",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Atributo5",60,"vATRIBUTO5","","","Atributo5","char",0,"px",15,15,"left",null,[],"Atributo5","Atributo5",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Loteunico",61,"vLOTEUNICO","Lote","","LoteUnico","char",0,"px",10,10,"left",null,[],"Loteunico","LoteUnico",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3644,62,"LOTEPRODUTOCODIGOBARRAS","","","LoteProdutoCodigoBarras","int",0,"px",14,14,"right",null,[],3644,"LoteProdutoCodigoBarras",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3650,63,"LOTEPRODUTOLOCAL","","","LoteProdutoLocal","svchar",0,"px",15,15,"left",null,[],3650,"LoteProdutoLocal",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Qtdeatual",64,"vQTDEATUAL","Quantidade","","QtdeAtual","decimal",0,"px",21,21,"right",null,[],"Qtdeatual","QtdeAtual",true,4,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Condicional",65,"vCONDICIONAL","Condicional","","Condicional","decimal",0,"px",21,21,"right",null,[],"Condicional","Condicional",true,4,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3649,66,"LOTEPRODUTOVENCIMENTO","","","LoteProdutoVencimento","date",0,"px",10,10,"right",null,[],3649,"LoteProdutoVencimento",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",67,0,"px",17,"px","e22om2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",68,0,"px",17,"px","e23om2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",69,0,"px",17,"px","e24om2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(1156,70,"FILIALID","Código da Filial","","FilialId","int",0,"px",7,7,"right",null,[],1156,"FilialId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2965,71,"PRODUTOID","Código do Produto","","ProdutoId","int",0,"px",10,10,"right",null,[],2965,"ProdutoId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3624,72,"LOTEPRODUTOCOMBINACAO","Combinação Lote","","LoteProdutoCombinacao","char",0,"px",20,20,"left",null,[],3624,"LoteProdutoCombinacao",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3645,73,"LOTEPRODUTOQTDEATUAL","Quantidade Atual","","LoteProdutoQtdeAtual","decimal",0,"px",21,21,"right",null,[],3645,"LoteProdutoQtdeAtual",false,4,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE11",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialidfiltro,isvalid:null,rgrid:[this.GridContainer],fld:"vFILIALIDFILTRO",gxz:"ZV27FilialIdFiltro",gxold:"OV27FilialIdFiltro",gxvar:"AV27FilialIdFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27FilialIdFiltro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27FilialIdFiltro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDFILTRO",gx.O.AV27FilialIdFiltro,0)},c2v:function(){gx.O.AV27FilialIdFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDFILTRO",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV34FilialNome",gxold:"OV34FilialNome",gxvar:"AV34FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34FilialNome=Value},v2z:function(Value){gx.O.ZV34FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV34FilialNome,0)},c2v:function(){gx.O.AV34FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"int",len:14,dec:0,sign:false,pic:"ZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLOTEPRODUTOCODIGOBARRASAUX",gxz:"ZV74LoteProdutoCodigoBarrasAux",gxold:"OV74LoteProdutoCodigoBarrasAux",gxvar:"AV74LoteProdutoCodigoBarrasAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74LoteProdutoCodigoBarrasAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV74LoteProdutoCodigoBarrasAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCODIGOBARRASAUX",gx.O.AV74LoteProdutoCodigoBarrasAux,0)},c2v:function(){gx.O.AV74LoteProdutoCodigoBarrasAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLOTEPRODUTOCODIGOBARRASAUX",'.')},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoidfiltro,isvalid:null,rgrid:[this.GridContainer],fld:"vPRODUTOIDFILTRO",gxz:"ZV28ProdutoIdFiltro",gxold:"OV28ProdutoIdFiltro",gxvar:"AV28ProdutoIdFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ProdutoIdFiltro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28ProdutoIdFiltro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOIDFILTRO",gx.O.AV28ProdutoIdFiltro,0)},c2v:function(){gx.O.AV28ProdutoIdFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOIDFILTRO",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"PROMPTPROD",grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDA",gxz:"ZV37ProdutoDescricaoResumida",gxold:"OV37ProdutoDescricaoResumida",gxvar:"AV37ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.ZV37ProdutoDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAORESUMIDA",gx.O.AV37ProdutoDescricaoResumida,0)},c2v:function(){gx.O.AV37ProdutoDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"FILTRARLOTE", format:0,grid:0};
   GXValidFnc[32]={fld:"TABLE4",grid:0};
   GXValidFnc[35]={fld:"TABLE10",grid:0};
   GXValidFnc[38]={fld:"IMAGE2",grid:0};
   GXValidFnc[40]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[42]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[44]={fld:"BTNHELP",grid:0};
   GXValidFnc[46]={fld:"TABLE5",grid:0};
   GXValidFnc[49]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vATRIBUTO1",gxz:"ZV38Atributo1",gxold:"OV38Atributo1",gxvar:"AV38Atributo1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV38Atributo1=Value},v2z:function(Value){gx.O.ZV38Atributo1=Value},v2c:function(row){gx.fn.setGridControlValue("vATRIBUTO1",row || gx.fn.currentGridRowImpl(55),gx.O.AV38Atributo1,0)},c2v:function(){gx.O.AV38Atributo1=this.val()},val:function(row){return gx.fn.getGridControlValue("vATRIBUTO1",row || gx.fn.currentGridRowImpl(55))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vATRIBUTO2",gxz:"ZV39Atributo2",gxold:"OV39Atributo2",gxvar:"AV39Atributo2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV39Atributo2=Value},v2z:function(Value){gx.O.ZV39Atributo2=Value},v2c:function(row){gx.fn.setGridControlValue("vATRIBUTO2",row || gx.fn.currentGridRowImpl(55),gx.O.AV39Atributo2,0)},c2v:function(){gx.O.AV39Atributo2=this.val()},val:function(row){return gx.fn.getGridControlValue("vATRIBUTO2",row || gx.fn.currentGridRowImpl(55))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vATRIBUTO3",gxz:"ZV40Atributo3",gxold:"OV40Atributo3",gxvar:"AV40Atributo3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV40Atributo3=Value},v2z:function(Value){gx.O.ZV40Atributo3=Value},v2c:function(row){gx.fn.setGridControlValue("vATRIBUTO3",row || gx.fn.currentGridRowImpl(55),gx.O.AV40Atributo3,0)},c2v:function(){gx.O.AV40Atributo3=this.val()},val:function(row){return gx.fn.getGridControlValue("vATRIBUTO3",row || gx.fn.currentGridRowImpl(55))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vATRIBUTO4",gxz:"ZV41Atributo4",gxold:"OV41Atributo4",gxvar:"AV41Atributo4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV41Atributo4=Value},v2z:function(Value){gx.O.ZV41Atributo4=Value},v2c:function(row){gx.fn.setGridControlValue("vATRIBUTO4",row || gx.fn.currentGridRowImpl(55),gx.O.AV41Atributo4,0)},c2v:function(){gx.O.AV41Atributo4=this.val()},val:function(row){return gx.fn.getGridControlValue("vATRIBUTO4",row || gx.fn.currentGridRowImpl(55))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vATRIBUTO5",gxz:"ZV42Atributo5",gxold:"OV42Atributo5",gxvar:"AV42Atributo5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV42Atributo5=Value},v2z:function(Value){gx.O.ZV42Atributo5=Value},v2c:function(row){gx.fn.setGridControlValue("vATRIBUTO5",row || gx.fn.currentGridRowImpl(55),gx.O.AV42Atributo5,0)},c2v:function(){gx.O.AV42Atributo5=this.val()},val:function(row){return gx.fn.getGridControlValue("vATRIBUTO5",row || gx.fn.currentGridRowImpl(55))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:0,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEUNICO",gxz:"ZV54LoteUnico",gxold:"OV54LoteUnico",gxvar:"AV54LoteUnico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV54LoteUnico=Value},v2z:function(Value){gx.O.ZV54LoteUnico=Value},v2c:function(row){gx.fn.setGridControlValue("vLOTEUNICO",row || gx.fn.currentGridRowImpl(55),gx.O.AV54LoteUnico,0)},c2v:function(){gx.O.AV54LoteUnico=this.val()},val:function(row){return gx.fn.getGridControlValue("vLOTEUNICO",row || gx.fn.currentGridRowImpl(55))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"int",len:14,dec:0,sign:false,pic:"ZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LOTEPRODUTOCODIGOBARRAS",gxz:"Z3644LoteProdutoCodigoBarras",gxold:"O3644LoteProdutoCodigoBarras",gxvar:"A3644LoteProdutoCodigoBarras",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3644LoteProdutoCodigoBarras=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3644LoteProdutoCodigoBarras=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LOTEPRODUTOCODIGOBARRAS",row || gx.fn.currentGridRowImpl(55),gx.O.A3644LoteProdutoCodigoBarras,0)},c2v:function(){gx.O.A3644LoteProdutoCodigoBarras=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LOTEPRODUTOCODIGOBARRAS",row || gx.fn.currentGridRowImpl(55),'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LOTEPRODUTOLOCAL",gxz:"Z3650LoteProdutoLocal",gxold:"O3650LoteProdutoLocal",gxvar:"A3650LoteProdutoLocal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3650LoteProdutoLocal=Value},v2z:function(Value){gx.O.Z3650LoteProdutoLocal=Value},v2c:function(row){gx.fn.setGridControlValue("LOTEPRODUTOLOCAL",row || gx.fn.currentGridRowImpl(55),gx.O.A3650LoteProdutoLocal,0)},c2v:function(){gx.O.A3650LoteProdutoLocal=this.val()},val:function(row){return gx.fn.getGridControlValue("LOTEPRODUTOLOCAL",row || gx.fn.currentGridRowImpl(55))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEATUAL",gxz:"ZV71QtdeAtual",gxold:"OV71QtdeAtual",gxvar:"AV71QtdeAtual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV71QtdeAtual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV71QtdeAtual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vQTDEATUAL",row || gx.fn.currentGridRowImpl(55),gx.O.AV71QtdeAtual,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV71QtdeAtual=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vQTDEATUAL",row || gx.fn.currentGridRowImpl(55),'.',',')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONDICIONAL",gxz:"ZV67Condicional",gxold:"OV67Condicional",gxvar:"AV67Condicional",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV67Condicional=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV67Condicional=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vCONDICIONAL",row || gx.fn.currentGridRowImpl(55),gx.O.AV67Condicional,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV67Condicional=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vCONDICIONAL",row || gx.fn.currentGridRowImpl(55),'.',',')},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LOTEPRODUTOVENCIMENTO",gxz:"Z3649LoteProdutoVencimento",gxold:"O3649LoteProdutoVencimento",gxvar:"A3649LoteProdutoVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3649LoteProdutoVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3649LoteProdutoVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("LOTEPRODUTOVENCIMENTO",row || gx.fn.currentGridRowImpl(55),gx.O.A3649LoteProdutoVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3649LoteProdutoVencimento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("LOTEPRODUTOVENCIMENTO",row || gx.fn.currentGridRowImpl(55))},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(55),gx.O.AV7bmpAlt,gx.O.AV100Bmpalt_GXI)},c2v:function(){gx.O.AV100Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(55))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(55))}, gxvar_GXI:'AV100Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(55),gx.O.AV8bmpExc,gx.O.AV101Bmpexc_GXI)},c2v:function(){gx.O.AV101Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(55))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(55))}, gxvar_GXI:'AV101Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(55),gx.O.AV16bmpCon,gx.O.AV102Bmpcon_GXI)},c2v:function(){gx.O.AV102Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(55))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(55))}, gxvar_GXI:'AV102Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"FILIALID",gxz:"Z1156FilialId",gxold:"O1156FilialId",gxvar:"A1156FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1156FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1156FilialId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FILIALID",row || gx.fn.currentGridRowImpl(55),gx.O.A1156FilialId,0)},c2v:function(){gx.O.A1156FilialId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FILIALID",row || gx.fn.currentGridRowImpl(55),'.')},nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:this.Valid_Produtoid,isvalid:null,rgrid:[],fld:"PRODUTOID",gxz:"Z2965ProdutoId",gxold:"O2965ProdutoId",gxvar:"A2965ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2965ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2965ProdutoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PRODUTOID",row || gx.fn.currentGridRowImpl(55),gx.O.A2965ProdutoId,0)},c2v:function(){gx.O.A2965ProdutoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PRODUTOID",row || gx.fn.currentGridRowImpl(55),'.')},nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:this.Valid_Loteprodutocombinacao,isvalid:null,rgrid:[],fld:"LOTEPRODUTOCOMBINACAO",gxz:"Z3624LoteProdutoCombinacao",gxold:"O3624LoteProdutoCombinacao",gxvar:"A3624LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3624LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.Z3624LoteProdutoCombinacao=Value},v2c:function(row){gx.fn.setGridControlValue("LOTEPRODUTOCOMBINACAO",row || gx.fn.currentGridRowImpl(55),gx.O.A3624LoteProdutoCombinacao,0)},c2v:function(){gx.O.A3624LoteProdutoCombinacao=this.val()},val:function(row){return gx.fn.getGridControlValue("LOTEPRODUTOCOMBINACAO",row || gx.fn.currentGridRowImpl(55))},nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LOTEPRODUTOQTDEATUAL",gxz:"Z3645LoteProdutoQtdeAtual",gxold:"O3645LoteProdutoQtdeAtual",gxvar:"A3645LoteProdutoQtdeAtual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3645LoteProdutoQtdeAtual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3645LoteProdutoQtdeAtual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("LOTEPRODUTOQTDEATUAL",row || gx.fn.currentGridRowImpl(55),gx.O.A3645LoteProdutoQtdeAtual,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3645LoteProdutoQtdeAtual=this.val()},val:function(row){return gx.fn.getGridDecimalValue("LOTEPRODUTOQTDEATUAL",row || gx.fn.currentGridRowImpl(55),'.',',')},nac:gx.falseFn};
   GXValidFnc[80]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOIDPARM",gxz:"ZV90ProdutoIdParm",gxold:"OV90ProdutoIdParm",gxvar:"AV90ProdutoIdParm",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV90ProdutoIdParm=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV90ProdutoIdParm=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOIDPARM",gx.O.AV90ProdutoIdParm,0)},c2v:function(){gx.O.AV90ProdutoIdParm=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOIDPARM",'.')},nac:gx.falseFn};
   GXValidFnc[81]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vISDISTRIBUIDORA",gxz:"ZV92isDistribuidora",gxold:"OV92isDistribuidora",gxvar:"AV92isDistribuidora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV92isDistribuidora=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV92isDistribuidora=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISDISTRIBUIDORA",gx.O.AV92isDistribuidora,true)},c2v:function(){gx.O.AV92isDistribuidora=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISDISTRIBUIDORA")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[82]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDPARM",gxz:"ZV91FilialIdParm",gxold:"OV91FilialIdParm",gxvar:"AV91FilialIdParm",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV91FilialIdParm=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV91FilialIdParm=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDPARM",gx.O.AV91FilialIdParm,0)},c2v:function(){gx.O.AV91FilialIdParm=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDPARM",'.')},nac:gx.falseFn};
   GXValidFnc[83]={lvl:0,type:"date",len:8,dec:0,sign:true,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Gx_date,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};
   GXValidFnc[84]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECONULO",gxz:"ZV60PrecoNulo",gxold:"OV60PrecoNulo",gxvar:"AV60PrecoNulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60PrecoNulo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV60PrecoNulo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECONULO",gx.O.AV60PrecoNulo,0)},c2v:function(){gx.O.AV60PrecoNulo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECONULO",'.')},nac:gx.falseFn};
   GXValidFnc[85]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAO",gxz:"ZV59LoteProdutoCombinacao",gxold:"OV59LoteProdutoCombinacao",gxvar:"AV59LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.ZV59LoteProdutoCombinacao=Value},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAO",gx.O.AV59LoteProdutoCombinacao,0)},c2v:function(){gx.O.AV59LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[86]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOID",gxz:"ZV57SubGrupoProdutoId",gxold:"OV57SubGrupoProdutoId",gxvar:"AV57SubGrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57SubGrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV57SubGrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOID",gx.O.AV57SubGrupoProdutoId,0)},c2v:function(){gx.O.AV57SubGrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[87]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOID",gxz:"ZV58ProdutoCodigoId",gxold:"OV58ProdutoCodigoId",gxvar:"AV58ProdutoCodigoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58ProdutoCodigoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV58ProdutoCodigoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOID",gx.O.AV58ProdutoCodigoId,0)},c2v:function(){gx.O.AV58ProdutoCodigoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOID",'.')},nac:gx.falseFn};
   GXValidFnc[88]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTOID",gxz:"ZV56GrupoProdutoId",gxold:"OV56GrupoProdutoId",gxvar:"AV56GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56GrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV56GrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOID",gx.O.AV56GrupoProdutoId,0)},c2v:function(){gx.O.AV56GrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[89]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoempresaid,isvalid:null,rgrid:[this.GridContainer],fld:"vPRODUTOEMPRESAID",gxz:"ZV30ProdutoEmpresaId",gxold:"OV30ProdutoEmpresaId",gxvar:"AV30ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV30ProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOEMPRESAID",gx.O.AV30ProdutoEmpresaId,0)},c2v:function(){gx.O.AV30ProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[90]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[this.GridContainer],fld:"vFILIALEMPRESAID",gxz:"ZV29FilialEmpresaId",gxold:"OV29FilialEmpresaId",gxvar:"AV29FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV29FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV29FilialEmpresaId,0)},c2v:function(){gx.O.AV29FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[91]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV64ProdutoReferencia",gxold:"OV64ProdutoReferencia",gxvar:"AV64ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV64ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV64ProdutoReferencia,0)},c2v:function(){gx.O.AV64ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[92]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECHAR",gxz:"ZV80QtdeChar",gxold:"OV80QtdeChar",gxvar:"AV80QtdeChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80QtdeChar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV80QtdeChar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECHAR",gx.O.AV80QtdeChar,0)},c2v:function(){gx.O.AV80QtdeChar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECHAR",'.')},nac:gx.falseFn};
   GXValidFnc[93]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[94]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV66SNVenda",gxold:"OV66SNVenda",gxvar:"AV66SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66SNVenda=Value},v2z:function(Value){gx.O.ZV66SNVenda=Value},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV66SNVenda,0)},c2v:function(){gx.O.AV66SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};
   GXValidFnc[95]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOBARRA",gxz:"ZV65CodigoBarrasProdutoBarra",gxold:"OV65CodigoBarrasProdutoBarra",gxvar:"AV65CodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV65CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV65CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTOBARRA",gx.O.AV65CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.AV65CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRA",'.')},nac:gx.falseFn};
   GXValidFnc[96]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUXIN",gxz:"ZV63IntAuxIn",gxold:"OV63IntAuxIn",gxvar:"AV63IntAuxIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63IntAuxIn=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV63IntAuxIn=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTAUXIN",gx.O.AV63IntAuxIn,0)},c2v:function(){gx.O.AV63IntAuxIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUXIN",'.')},nac:gx.falseFn};
   GXValidFnc[97]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCATEGORIA",gxz:"ZV61ProdutoCategoria",gxold:"OV61ProdutoCategoria",gxvar:"AV61ProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV61ProdutoCategoria=Value},v2z:function(Value){gx.O.ZV61ProdutoCategoria=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOCATEGORIA",gx.O.AV61ProdutoCategoria)},c2v:function(){gx.O.AV61ProdutoCategoria=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCATEGORIA")},nac:gx.falseFn};
   GXValidFnc[98]={fld:"JS", format:2,grid:0};
   GXValidFnc[99]={fld:"PROMPT_FILIALIDFILTRO",grid:0};
   this.AV27FilialIdFiltro = 0 ;
   this.ZV27FilialIdFiltro = 0 ;
   this.OV27FilialIdFiltro = 0 ;
   this.AV34FilialNome = "" ;
   this.ZV34FilialNome = "" ;
   this.OV34FilialNome = "" ;
   this.AV74LoteProdutoCodigoBarrasAux = 0 ;
   this.ZV74LoteProdutoCodigoBarrasAux = 0 ;
   this.OV74LoteProdutoCodigoBarrasAux = 0 ;
   this.AV28ProdutoIdFiltro = 0 ;
   this.ZV28ProdutoIdFiltro = 0 ;
   this.OV28ProdutoIdFiltro = 0 ;
   this.AV37ProdutoDescricaoResumida = "" ;
   this.ZV37ProdutoDescricaoResumida = "" ;
   this.OV37ProdutoDescricaoResumida = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.ZV38Atributo1 = "" ;
   this.OV38Atributo1 = "" ;
   this.ZV39Atributo2 = "" ;
   this.OV39Atributo2 = "" ;
   this.ZV40Atributo3 = "" ;
   this.OV40Atributo3 = "" ;
   this.ZV41Atributo4 = "" ;
   this.OV41Atributo4 = "" ;
   this.ZV42Atributo5 = "" ;
   this.OV42Atributo5 = "" ;
   this.ZV54LoteUnico = "" ;
   this.OV54LoteUnico = "" ;
   this.Z3644LoteProdutoCodigoBarras = 0 ;
   this.O3644LoteProdutoCodigoBarras = 0 ;
   this.Z3650LoteProdutoLocal = "" ;
   this.O3650LoteProdutoLocal = "" ;
   this.ZV71QtdeAtual = 0 ;
   this.OV71QtdeAtual = 0 ;
   this.ZV67Condicional = 0 ;
   this.OV67Condicional = 0 ;
   this.Z3649LoteProdutoVencimento = gx.date.nullDate() ;
   this.O3649LoteProdutoVencimento = gx.date.nullDate() ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z1156FilialId = 0 ;
   this.O1156FilialId = 0 ;
   this.Z2965ProdutoId = 0 ;
   this.O2965ProdutoId = 0 ;
   this.Z3624LoteProdutoCombinacao = "" ;
   this.O3624LoteProdutoCombinacao = "" ;
   this.Z3645LoteProdutoQtdeAtual = 0 ;
   this.O3645LoteProdutoQtdeAtual = 0 ;
   this.AV90ProdutoIdParm = 0 ;
   this.ZV90ProdutoIdParm = 0 ;
   this.OV90ProdutoIdParm = 0 ;
   this.AV92isDistribuidora = false ;
   this.ZV92isDistribuidora = false ;
   this.OV92isDistribuidora = false ;
   this.AV91FilialIdParm = 0 ;
   this.ZV91FilialIdParm = 0 ;
   this.OV91FilialIdParm = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV60PrecoNulo = 0 ;
   this.ZV60PrecoNulo = 0 ;
   this.OV60PrecoNulo = 0 ;
   this.AV59LoteProdutoCombinacao = "" ;
   this.ZV59LoteProdutoCombinacao = "" ;
   this.OV59LoteProdutoCombinacao = "" ;
   this.AV57SubGrupoProdutoId = 0 ;
   this.ZV57SubGrupoProdutoId = 0 ;
   this.OV57SubGrupoProdutoId = 0 ;
   this.AV58ProdutoCodigoId = 0 ;
   this.ZV58ProdutoCodigoId = 0 ;
   this.OV58ProdutoCodigoId = 0 ;
   this.AV56GrupoProdutoId = 0 ;
   this.ZV56GrupoProdutoId = 0 ;
   this.OV56GrupoProdutoId = 0 ;
   this.AV30ProdutoEmpresaId = "" ;
   this.ZV30ProdutoEmpresaId = "" ;
   this.OV30ProdutoEmpresaId = "" ;
   this.AV29FilialEmpresaId = "" ;
   this.ZV29FilialEmpresaId = "" ;
   this.OV29FilialEmpresaId = "" ;
   this.AV64ProdutoReferencia = "" ;
   this.ZV64ProdutoReferencia = "" ;
   this.OV64ProdutoReferencia = "" ;
   this.AV80QtdeChar = 0 ;
   this.ZV80QtdeChar = 0 ;
   this.OV80QtdeChar = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV66SNVenda = "" ;
   this.ZV66SNVenda = "" ;
   this.OV66SNVenda = "" ;
   this.AV65CodigoBarrasProdutoBarra = 0 ;
   this.ZV65CodigoBarrasProdutoBarra = 0 ;
   this.OV65CodigoBarrasProdutoBarra = 0 ;
   this.AV63IntAuxIn = 0 ;
   this.ZV63IntAuxIn = 0 ;
   this.OV63IntAuxIn = 0 ;
   this.AV61ProdutoCategoria = "" ;
   this.ZV61ProdutoCategoria = "" ;
   this.OV61ProdutoCategoria = "" ;
   this.AV27FilialIdFiltro = 0 ;
   this.AV34FilialNome = "" ;
   this.AV74LoteProdutoCodigoBarrasAux = 0 ;
   this.AV28ProdutoIdFiltro = 0 ;
   this.AV37ProdutoDescricaoResumida = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV90ProdutoIdParm = 0 ;
   this.AV92isDistribuidora = false ;
   this.AV91FilialIdParm = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV60PrecoNulo = 0 ;
   this.AV59LoteProdutoCombinacao = "" ;
   this.AV57SubGrupoProdutoId = 0 ;
   this.AV58ProdutoCodigoId = 0 ;
   this.AV56GrupoProdutoId = 0 ;
   this.AV30ProdutoEmpresaId = "" ;
   this.AV29FilialEmpresaId = "" ;
   this.AV64ProdutoReferencia = "" ;
   this.AV80QtdeChar = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV66SNVenda = "" ;
   this.AV65CodigoBarrasProdutoBarra = 0 ;
   this.AV63IntAuxIn = 0 ;
   this.AV61ProdutoCategoria = "" ;
   this.A1228FilialEmpresaId = "" ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A11191LoteProdutoCodBarPrd = "" ;
   this.AV38Atributo1 = "" ;
   this.AV39Atributo2 = "" ;
   this.AV40Atributo3 = "" ;
   this.AV41Atributo4 = "" ;
   this.AV42Atributo5 = "" ;
   this.AV54LoteUnico = "" ;
   this.A3644LoteProdutoCodigoBarras = 0 ;
   this.A3650LoteProdutoLocal = "" ;
   this.AV71QtdeAtual = 0 ;
   this.AV67Condicional = 0 ;
   this.A3649LoteProdutoVencimento = gx.date.nullDate() ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A1156FilialId = 0 ;
   this.A2965ProdutoId = 0 ;
   this.A3624LoteProdutoCombinacao = "" ;
   this.A3645LoteProdutoQtdeAtual = 0 ;
   this.A2915EsquemaCodigo = 0 ;
   this.A4306SaidaEmpresaId = "" ;
   this.A10443SaidaItemCondSituacao = "" ;
   this.A6581SaidaItemCondLoteFilialEmpId = "" ;
   this.A6582SaidaItemCondLoteFilialId = 0 ;
   this.A6584SaidaItemCondLoteProdEmpId = "" ;
   this.A6585SaidaItemCondLoteProdId = 0 ;
   this.A6587SaidaItemCondLoteCombinacao = "" ;
   this.A6594SaidaItemCondQuantidade = 0 ;
   this.A6088SaidaSnAlteraSaldo = "" ;
   this.A6591SaidaCondItemSeq = 0 ;
   this.A4307SaidaId = 0 ;
   this.A2921AtributoEsquemaCodigo = 0 ;
   this.A2917AtributoEsquemaSnCadastrado = "" ;
   this.A2941ValorAtributoCodigo = 0 ;
   this.A2938ValorAtributoDescricao = "" ;
   this.A2918AtributoEsquemaSnVencimento = "" ;
   this.A2916AtributoEsquemaDescricao = "" ;
   this.A10788ProdutoSnControlaVenc = "" ;
   this.A2968CodigoBarrasProdutoBarra = 0 ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A138EmpresaId = "" ;
   this.A140SistemaId = "" ;
   this.A1136FilialNome = "" ;
   this.AV82SnLoteMedicamen = "" ;
   this.AV48AtributoEsquemaCodigo1 = 0 ;
   this.AV45Retorno = "" ;
   this.AV49AtributoEsquemaCodigo2 = 0 ;
   this.AV50AtributoEsquemaCodigo3 = 0 ;
   this.AV51AtributoEsquemaCodigo4 = 0 ;
   this.AV52AtributoEsquemaCodigo5 = 0 ;
   this.AV76filtrosMovEst = {} ;
   this.AV98Pgmname = "" ;
   this.AV53SnLoteUnico = "" ;
   this.AV84SnContrArmazem = "" ;
   this.AV55FilialUnica = "" ;
   this.AV44EsquemaCodigo = 0 ;
   this.AV47AtributoEsquemaCodigo = 0 ;
   this.AV46Combinacao = 0 ;
   this.AV81CondicionalADiminuir = 0 ;
   this.AV73SaidaEmpresaId = "" ;
   this.AV68SaidaItemCondLoteFilialId = 0 ;
   this.AV69SaidaItemCondLoteProdId = 0 ;
   this.AV70SaidaItemCondLoteCombinacao = "" ;
   this.Events = {"e16om2_client": ["FILTRARLOTE.CLICK", true] ,"e11om2_client": ["'ANTERIOR'", true] ,"e12om2_client": ["'PROXIMO'", true] ,"e17om2_client": ["VPAGINA.CLICK", true] ,"e13om2_client": ["'NOVO'", true] ,"e14om2_client": ["'FECHAR'", true] ,"e15om2_client": ["'PROCURAR'", true] ,"e22om2_client": ["'ALTERAR'", true] ,"e23om2_client": ["'EXCLUIR'", true] ,"e24om2_client": ["'CONSULTAR'", true] ,"e25om2_client": ["ENTER", true] ,"e26om2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'AV74LoteProdutoCodigoBarrasAux',fld:'vLOTEPRODUTOCODIGOBARRASAUX'},{av:'AV92isDistribuidora',fld:'vISDISTRIBUIDORA'},{av:'AV29FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vATRIBUTO1","Visible")',ctrl:'vATRIBUTO1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO2","Visible")',ctrl:'vATRIBUTO2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO3","Visible")',ctrl:'vATRIBUTO3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO4","Visible")',ctrl:'vATRIBUTO4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO5","Visible")',ctrl:'vATRIBUTO5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTEUNICO","Visible")',ctrl:'vLOTEUNICO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LOTEPRODUTOVENCIMENTO","Visible")',ctrl:'LOTEPRODUTOVENCIMENTO',prop:'Visible'},{av:'AV76filtrosMovEst',fld:'vFILTROSMOVEST'},{av:'AV98Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV81CondicionalADiminuir',fld:'vCONDICIONALADIMINUIR'},{av:'A3645LoteProdutoQtdeAtual',fld:'LOTEPRODUTOQTDEATUAL'},{av:'A6591SaidaCondItemSeq',fld:'SAIDACONDITEMSEQ'},{av:'A4306SaidaEmpresaId',fld:'SAIDAEMPRESAID'},{av:'AV73SaidaEmpresaId',fld:'vSAIDAEMPRESAID'},{av:'A10443SaidaItemCondSituacao',fld:'SAIDAITEMCONDSITUACAO'},{av:'A6581SaidaItemCondLoteFilialEmpId',fld:'SAIDAITEMCONDLOTEFILIALEMPID'},{av:'A6582SaidaItemCondLoteFilialId',fld:'SAIDAITEMCONDLOTEFILIALID'},{av:'AV68SaidaItemCondLoteFilialId',fld:'vSAIDAITEMCONDLOTEFILIALID'},{av:'A6584SaidaItemCondLoteProdEmpId',fld:'SAIDAITEMCONDLOTEPRODEMPID'},{av:'A6585SaidaItemCondLoteProdId',fld:'SAIDAITEMCONDLOTEPRODID'},{av:'AV69SaidaItemCondLoteProdId',fld:'vSAIDAITEMCONDLOTEPRODID'},{av:'A6587SaidaItemCondLoteCombinacao',fld:'SAIDAITEMCONDLOTECOMBINACAO'},{av:'AV70SaidaItemCondLoteCombinacao',fld:'vSAIDAITEMCONDLOTECOMBINACAO'},{av:'A6594SaidaItemCondQuantidade',fld:'SAIDAITEMCONDQUANTIDADE'},{av:'A6088SaidaSnAlteraSaldo',fld:'SAIDASNALTERASALDO'},{av:'AV84SnContrArmazem',fld:'vSNCONTRARMAZEM'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV53SnLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV82SnLoteMedicamen',fld:'vSNLOTEMEDICAMEN'},{av:'AV48AtributoEsquemaCodigo1',fld:'vATRIBUTOESQUEMACODIGO1'},{av:'AV45Retorno',fld:'vRETORNO'},{av:'AV49AtributoEsquemaCodigo2',fld:'vATRIBUTOESQUEMACODIGO2'},{av:'AV50AtributoEsquemaCodigo3',fld:'vATRIBUTOESQUEMACODIGO3'},{av:'AV51AtributoEsquemaCodigo4',fld:'vATRIBUTOESQUEMACODIGO4'},{av:'AV52AtributoEsquemaCodigo5',fld:'vATRIBUTOESQUEMACODIGO5'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV30ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV28ProdutoIdFiltro',fld:'vPRODUTOIDFILTRO'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A10788ProdutoSnControlaVenc',fld:'PRODUTOSNCONTROLAVENC'},{av:'AV55FilialUnica',fld:'vFILIALUNICA'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2918AtributoEsquemaSnVencimento',fld:'ATRIBUTOESQUEMASNVENCIMENTO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'AV44EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV47AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'AV46Combinacao',fld:'vCOMBINACAO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'}],[{av:'AV76filtrosMovEst',fld:'vFILTROSMOVEST'},{av:'AV85Local1',fld:'vLOCAL1'},{av:'AV86Local2',fld:'vLOCAL2'},{av:'AV87Local3',fld:'vLOCAL3'},{av:'AV88Local4',fld:'vLOCAL4'},{av:'AV89Local5',fld:'vLOCAL5'},{av:'AV54LoteUnico',fld:'vLOTEUNICO'},{av:'AV46Combinacao',fld:'vCOMBINACAO'},{av:'AV47AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV38Atributo1',fld:'vATRIBUTO1'},{av:'AV39Atributo2',fld:'vATRIBUTO2'},{av:'AV40Atributo3',fld:'vATRIBUTO3'},{av:'AV41Atributo4',fld:'vATRIBUTO4'},{av:'AV42Atributo5',fld:'vATRIBUTO5'},{av:'gx.fn.getCtrlProperty("vATRIBUTO1","Visible")',ctrl:'vATRIBUTO1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO2","Visible")',ctrl:'vATRIBUTO2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO3","Visible")',ctrl:'vATRIBUTO3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO4","Visible")',ctrl:'vATRIBUTO4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO5","Visible")',ctrl:'vATRIBUTO5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTEUNICO","Visible")',ctrl:'vLOTEUNICO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LOTEPRODUTOVENCIMENTO","Visible")',ctrl:'LOTEPRODUTOVENCIMENTO',prop:'Visible'},{av:'AV44EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV83ProdutoSnControlaVenc',fld:'vPRODUTOSNCONTROLAVENC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LOTEPRODUTOCODIGOBARRAS","Visible")',ctrl:'LOTEPRODUTOCODIGOBARRAS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("IMAGE2","Visible")',ctrl:'IMAGE2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPALT","Visible")',ctrl:'vBMPALT',prop:'Visible'},{av:'AV43Cont',fld:'vCONT'},{av:'gx.fn.getCtrlProperty("vATRIBUTO1","Title")',ctrl:'vATRIBUTO1',prop:'Title'},{av:'AV48AtributoEsquemaCodigo1',fld:'vATRIBUTOESQUEMACODIGO1'},{av:'gx.fn.getCtrlProperty("vATRIBUTO2","Title")',ctrl:'vATRIBUTO2',prop:'Title'},{av:'AV49AtributoEsquemaCodigo2',fld:'vATRIBUTOESQUEMACODIGO2'},{av:'gx.fn.getCtrlProperty("vATRIBUTO3","Title")',ctrl:'vATRIBUTO3',prop:'Title'},{av:'AV50AtributoEsquemaCodigo3',fld:'vATRIBUTOESQUEMACODIGO3'},{av:'gx.fn.getCtrlProperty("vATRIBUTO4","Title")',ctrl:'vATRIBUTO4',prop:'Title'},{av:'AV51AtributoEsquemaCodigo4',fld:'vATRIBUTOESQUEMACODIGO4'},{av:'gx.fn.getCtrlProperty("vATRIBUTO5","Title")',ctrl:'vATRIBUTO5',prop:'Title'},{av:'AV52AtributoEsquemaCodigo5',fld:'vATRIBUTOESQUEMACODIGO5'},{av:'AV45Retorno',fld:'vRETORNO'}]];
   this.EvtParms["FILTRARLOTE.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'AV74LoteProdutoCodigoBarrasAux',fld:'vLOTEPRODUTOCODIGOBARRASAUX'},{av:'AV28ProdutoIdFiltro',fld:'vPRODUTOIDFILTRO'},{av:'AV92isDistribuidora',fld:'vISDISTRIBUIDORA'},{av:'AV30ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV29FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vATRIBUTO1","Visible")',ctrl:'vATRIBUTO1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO2","Visible")',ctrl:'vATRIBUTO2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO3","Visible")',ctrl:'vATRIBUTO3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO4","Visible")',ctrl:'vATRIBUTO4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO5","Visible")',ctrl:'vATRIBUTO5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTEUNICO","Visible")',ctrl:'vLOTEUNICO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LOTEPRODUTOVENCIMENTO","Visible")',ctrl:'LOTEPRODUTOVENCIMENTO',prop:'Visible'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV82SnLoteMedicamen',fld:'vSNLOTEMEDICAMEN'},{av:'AV48AtributoEsquemaCodigo1',fld:'vATRIBUTOESQUEMACODIGO1'},{av:'AV45Retorno',fld:'vRETORNO'},{av:'AV49AtributoEsquemaCodigo2',fld:'vATRIBUTOESQUEMACODIGO2'},{av:'AV50AtributoEsquemaCodigo3',fld:'vATRIBUTOESQUEMACODIGO3'},{av:'AV51AtributoEsquemaCodigo4',fld:'vATRIBUTOESQUEMACODIGO4'},{av:'AV52AtributoEsquemaCodigo5',fld:'vATRIBUTOESQUEMACODIGO5'},{av:'AV76filtrosMovEst',fld:'vFILTROSMOVEST'},{av:'AV98Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV53SnLoteUnico',fld:'vSNLOTEUNICO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A10788ProdutoSnControlaVenc',fld:'PRODUTOSNCONTROLAVENC'},{av:'AV84SnContrArmazem',fld:'vSNCONTRARMAZEM'},{av:'AV55FilialUnica',fld:'vFILIALUNICA'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2918AtributoEsquemaSnVencimento',fld:'ATRIBUTOESQUEMASNVENCIMENTO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'AV44EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV47AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'AV46Combinacao',fld:'vCOMBINACAO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV81CondicionalADiminuir',fld:'vCONDICIONALADIMINUIR'},{av:'A3645LoteProdutoQtdeAtual',fld:'LOTEPRODUTOQTDEATUAL'},{av:'A6591SaidaCondItemSeq',fld:'SAIDACONDITEMSEQ'},{av:'A4306SaidaEmpresaId',fld:'SAIDAEMPRESAID'},{av:'AV73SaidaEmpresaId',fld:'vSAIDAEMPRESAID'},{av:'A10443SaidaItemCondSituacao',fld:'SAIDAITEMCONDSITUACAO'},{av:'A6581SaidaItemCondLoteFilialEmpId',fld:'SAIDAITEMCONDLOTEFILIALEMPID'},{av:'A6582SaidaItemCondLoteFilialId',fld:'SAIDAITEMCONDLOTEFILIALID'},{av:'AV68SaidaItemCondLoteFilialId',fld:'vSAIDAITEMCONDLOTEFILIALID'},{av:'A6584SaidaItemCondLoteProdEmpId',fld:'SAIDAITEMCONDLOTEPRODEMPID'},{av:'A6585SaidaItemCondLoteProdId',fld:'SAIDAITEMCONDLOTEPRODID'},{av:'AV69SaidaItemCondLoteProdId',fld:'vSAIDAITEMCONDLOTEPRODID'},{av:'A6587SaidaItemCondLoteCombinacao',fld:'SAIDAITEMCONDLOTECOMBINACAO'},{av:'AV70SaidaItemCondLoteCombinacao',fld:'vSAIDAITEMCONDLOTECOMBINACAO'},{av:'A6594SaidaItemCondQuantidade',fld:'SAIDAITEMCONDQUANTIDADE'},{av:'A6088SaidaSnAlteraSaldo',fld:'SAIDASNALTERASALDO'},{av:'AV79ProdutorIdAnterior',fld:'vPRODUTORIDANTERIOR'},{av:'AV75ProdutoIdAnterior',fld:'vPRODUTOIDANTERIOR'},{av:'AV31SnErro',fld:'vSNERRO'},{av:'AV77EsquemaCodigoParm',fld:'vESQUEMACODIGOPARM'}],[{av:'AV76filtrosMovEst',fld:'vFILTROSMOVEST'},{av:'AV27FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'AV29FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV28ProdutoIdFiltro',fld:'vPRODUTOIDFILTRO'},{av:'AV30ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV75ProdutoIdAnterior',fld:'vPRODUTOIDANTERIOR'},{av:'AV115GXLvl732',fld:'vGXLVL732'},{av:'AV44EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV31SnErro',fld:'vSNERRO'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV27FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'AV30ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV28ProdutoIdFiltro',fld:'vPRODUTOIDFILTRO'},{av:'AV74LoteProdutoCodigoBarrasAux',fld:'vLOTEPRODUTOCODIGOBARRASAUX'},{av:'AV76filtrosMovEst',fld:'vFILTROSMOVEST'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV92isDistribuidora',fld:'vISDISTRIBUIDORA'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vATRIBUTO1","Visible")',ctrl:'vATRIBUTO1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO2","Visible")',ctrl:'vATRIBUTO2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO3","Visible")',ctrl:'vATRIBUTO3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO4","Visible")',ctrl:'vATRIBUTO4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO5","Visible")',ctrl:'vATRIBUTO5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTEUNICO","Visible")',ctrl:'vLOTEUNICO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LOTEPRODUTOVENCIMENTO","Visible")',ctrl:'LOTEPRODUTOVENCIMENTO',prop:'Visible'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV82SnLoteMedicamen',fld:'vSNLOTEMEDICAMEN'},{av:'AV48AtributoEsquemaCodigo1',fld:'vATRIBUTOESQUEMACODIGO1'},{av:'AV45Retorno',fld:'vRETORNO'},{av:'AV49AtributoEsquemaCodigo2',fld:'vATRIBUTOESQUEMACODIGO2'},{av:'AV50AtributoEsquemaCodigo3',fld:'vATRIBUTOESQUEMACODIGO3'},{av:'AV51AtributoEsquemaCodigo4',fld:'vATRIBUTOESQUEMACODIGO4'},{av:'AV52AtributoEsquemaCodigo5',fld:'vATRIBUTOESQUEMACODIGO5'},{av:'AV98Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV53SnLoteUnico',fld:'vSNLOTEUNICO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A10788ProdutoSnControlaVenc',fld:'PRODUTOSNCONTROLAVENC'},{av:'AV84SnContrArmazem',fld:'vSNCONTRARMAZEM'},{av:'AV55FilialUnica',fld:'vFILIALUNICA'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2918AtributoEsquemaSnVencimento',fld:'ATRIBUTOESQUEMASNVENCIMENTO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'AV44EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV47AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'AV46Combinacao',fld:'vCOMBINACAO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV81CondicionalADiminuir',fld:'vCONDICIONALADIMINUIR'},{av:'A3645LoteProdutoQtdeAtual',fld:'LOTEPRODUTOQTDEATUAL'},{av:'A6591SaidaCondItemSeq',fld:'SAIDACONDITEMSEQ'},{av:'A4306SaidaEmpresaId',fld:'SAIDAEMPRESAID'},{av:'AV73SaidaEmpresaId',fld:'vSAIDAEMPRESAID'},{av:'A10443SaidaItemCondSituacao',fld:'SAIDAITEMCONDSITUACAO'},{av:'A6581SaidaItemCondLoteFilialEmpId',fld:'SAIDAITEMCONDLOTEFILIALEMPID'},{av:'A6582SaidaItemCondLoteFilialId',fld:'SAIDAITEMCONDLOTEFILIALID'},{av:'AV68SaidaItemCondLoteFilialId',fld:'vSAIDAITEMCONDLOTEFILIALID'},{av:'A6584SaidaItemCondLoteProdEmpId',fld:'SAIDAITEMCONDLOTEPRODEMPID'},{av:'A6585SaidaItemCondLoteProdId',fld:'SAIDAITEMCONDLOTEPRODID'},{av:'AV69SaidaItemCondLoteProdId',fld:'vSAIDAITEMCONDLOTEPRODID'},{av:'A6587SaidaItemCondLoteCombinacao',fld:'SAIDAITEMCONDLOTECOMBINACAO'},{av:'AV70SaidaItemCondLoteCombinacao',fld:'vSAIDAITEMCONDLOTECOMBINACAO'},{av:'A6594SaidaItemCondQuantidade',fld:'SAIDAITEMCONDQUANTIDADE'},{av:'A6088SaidaSnAlteraSaldo',fld:'SAIDASNALTERASALDO'}],[{ctrl:'LOTEPRODUTOCODIGOBARRAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LOTEPRODUTOCODIGOBARRAS","Title")',ctrl:'LOTEPRODUTOCODIGOBARRAS',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'LOTEPRODUTOLOCAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LOTEPRODUTOLOCAL","Title")',ctrl:'LOTEPRODUTOLOCAL',prop:'Title'},{ctrl:'LOTEPRODUTOVENCIMENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LOTEPRODUTOVENCIMENTO","Title")',ctrl:'LOTEPRODUTOVENCIMENTO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'AV28ProdutoIdFiltro',fld:'vPRODUTOIDFILTRO'},{av:'AV34FilialNome',fld:'vFILIALNOME'},{av:'AV37ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'},{av:'AV74LoteProdutoCodigoBarrasAux',fld:'vLOTEPRODUTOCODIGOBARRASAUX'},{av:'AV90ProdutoIdParm',fld:'vPRODUTOIDPARM'},{av:'AV91FilialIdParm',fld:'vFILIALIDPARM'},{av:'gx.fn.getCtrlProperty("vATRIBUTO1","Visible")',ctrl:'vATRIBUTO1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO2","Visible")',ctrl:'vATRIBUTO2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO3","Visible")',ctrl:'vATRIBUTO3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO4","Visible")',ctrl:'vATRIBUTO4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO5","Visible")',ctrl:'vATRIBUTO5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTEUNICO","Visible")',ctrl:'vLOTEUNICO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LOTEPRODUTOVENCIMENTO","Visible")',ctrl:'LOTEPRODUTOVENCIMENTO',prop:'Visible'},{av:'AV76filtrosMovEst',fld:'vFILTROSMOVEST'},{av:'AV44EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV83ProdutoSnControlaVenc',fld:'vPRODUTOSNCONTROLAVENC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LOTEPRODUTOCODIGOBARRAS","Visible")',ctrl:'LOTEPRODUTOCODIGOBARRAS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("IMAGE2","Visible")',ctrl:'IMAGE2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPALT","Visible")',ctrl:'vBMPALT',prop:'Visible'},{av:'AV43Cont',fld:'vCONT'},{av:'gx.fn.getCtrlProperty("vATRIBUTO1","Title")',ctrl:'vATRIBUTO1',prop:'Title'},{av:'AV48AtributoEsquemaCodigo1',fld:'vATRIBUTOESQUEMACODIGO1'},{av:'gx.fn.getCtrlProperty("vATRIBUTO2","Title")',ctrl:'vATRIBUTO2',prop:'Title'},{av:'AV49AtributoEsquemaCodigo2',fld:'vATRIBUTOESQUEMACODIGO2'},{av:'gx.fn.getCtrlProperty("vATRIBUTO3","Title")',ctrl:'vATRIBUTO3',prop:'Title'},{av:'AV50AtributoEsquemaCodigo3',fld:'vATRIBUTOESQUEMACODIGO3'},{av:'gx.fn.getCtrlProperty("vATRIBUTO4","Title")',ctrl:'vATRIBUTO4',prop:'Title'},{av:'AV51AtributoEsquemaCodigo4',fld:'vATRIBUTOESQUEMACODIGO4'},{av:'gx.fn.getCtrlProperty("vATRIBUTO5","Title")',ctrl:'vATRIBUTO5',prop:'Title'},{av:'AV52AtributoEsquemaCodigo5',fld:'vATRIBUTOESQUEMACODIGO5'},{av:'AV45Retorno',fld:'vRETORNO'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A1156FilialId',fld:'FILIALID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV76filtrosMovEst',fld:'vFILTROSMOVEST'},{av:'AV81CondicionalADiminuir',fld:'vCONDICIONALADIMINUIR'},{av:'A3645LoteProdutoQtdeAtual',fld:'LOTEPRODUTOQTDEATUAL'},{av:'AV84SnContrArmazem',fld:'vSNCONTRARMAZEM'},{av:'AV53SnLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV82SnLoteMedicamen',fld:'vSNLOTEMEDICAMEN'},{av:'AV48AtributoEsquemaCodigo1',fld:'vATRIBUTOESQUEMACODIGO1'},{av:'AV45Retorno',fld:'vRETORNO'},{av:'AV49AtributoEsquemaCodigo2',fld:'vATRIBUTOESQUEMACODIGO2'},{av:'AV50AtributoEsquemaCodigo3',fld:'vATRIBUTOESQUEMACODIGO3'},{av:'AV51AtributoEsquemaCodigo4',fld:'vATRIBUTOESQUEMACODIGO4'},{av:'AV52AtributoEsquemaCodigo5',fld:'vATRIBUTOESQUEMACODIGO5'},{av:'A6591SaidaCondItemSeq',fld:'SAIDACONDITEMSEQ'},{av:'A4306SaidaEmpresaId',fld:'SAIDAEMPRESAID'},{av:'AV73SaidaEmpresaId',fld:'vSAIDAEMPRESAID'},{av:'A10443SaidaItemCondSituacao',fld:'SAIDAITEMCONDSITUACAO'},{av:'A6581SaidaItemCondLoteFilialEmpId',fld:'SAIDAITEMCONDLOTEFILIALEMPID'},{av:'AV29FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A6582SaidaItemCondLoteFilialId',fld:'SAIDAITEMCONDLOTEFILIALID'},{av:'AV68SaidaItemCondLoteFilialId',fld:'vSAIDAITEMCONDLOTEFILIALID'},{av:'A6584SaidaItemCondLoteProdEmpId',fld:'SAIDAITEMCONDLOTEPRODEMPID'},{av:'AV30ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A6585SaidaItemCondLoteProdId',fld:'SAIDAITEMCONDLOTEPRODID'},{av:'AV69SaidaItemCondLoteProdId',fld:'vSAIDAITEMCONDLOTEPRODID'},{av:'A6587SaidaItemCondLoteCombinacao',fld:'SAIDAITEMCONDLOTECOMBINACAO'},{av:'AV70SaidaItemCondLoteCombinacao',fld:'vSAIDAITEMCONDLOTECOMBINACAO'},{av:'A6594SaidaItemCondQuantidade',fld:'SAIDAITEMCONDQUANTIDADE'},{av:'A6088SaidaSnAlteraSaldo',fld:'SAIDASNALTERASALDO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV44EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV47AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'AV46Combinacao',fld:'vCOMBINACAO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'}],[{av:'AV68SaidaItemCondLoteFilialId',fld:'vSAIDAITEMCONDLOTEFILIALID'},{av:'AV69SaidaItemCondLoteProdId',fld:'vSAIDAITEMCONDLOTEPRODID'},{av:'AV70SaidaItemCondLoteCombinacao',fld:'vSAIDAITEMCONDLOTECOMBINACAO'},{av:'AV76filtrosMovEst',fld:'vFILTROSMOVEST'},{av:'AV71QtdeAtual',fld:'vQTDEATUAL'},{av:'AV85Local1',fld:'vLOCAL1'},{av:'AV86Local2',fld:'vLOCAL2'},{av:'AV87Local3',fld:'vLOCAL3'},{av:'AV88Local4',fld:'vLOCAL4'},{av:'AV89Local5',fld:'vLOCAL5'},{av:'AV54LoteUnico',fld:'vLOTEUNICO'},{av:'AV46Combinacao',fld:'vCOMBINACAO'},{av:'AV47AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV38Atributo1',fld:'vATRIBUTO1'},{av:'AV39Atributo2',fld:'vATRIBUTO2'},{av:'AV40Atributo3',fld:'vATRIBUTO3'},{av:'AV41Atributo4',fld:'vATRIBUTO4'},{av:'AV42Atributo5',fld:'vATRIBUTO5'},{av:'AV67Condicional',fld:'vCONDICIONAL'},{av:'AV81CondicionalADiminuir',fld:'vCONDICIONALADIMINUIR'},{av:'AV45Retorno',fld:'vRETORNO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'AV74LoteProdutoCodigoBarrasAux',fld:'vLOTEPRODUTOCODIGOBARRASAUX'},{av:'AV28ProdutoIdFiltro',fld:'vPRODUTOIDFILTRO'},{av:'AV92isDistribuidora',fld:'vISDISTRIBUIDORA'},{av:'AV30ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV29FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vATRIBUTO1","Visible")',ctrl:'vATRIBUTO1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO2","Visible")',ctrl:'vATRIBUTO2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO3","Visible")',ctrl:'vATRIBUTO3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO4","Visible")',ctrl:'vATRIBUTO4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO5","Visible")',ctrl:'vATRIBUTO5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTEUNICO","Visible")',ctrl:'vLOTEUNICO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LOTEPRODUTOVENCIMENTO","Visible")',ctrl:'LOTEPRODUTOVENCIMENTO',prop:'Visible'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV82SnLoteMedicamen',fld:'vSNLOTEMEDICAMEN'},{av:'AV48AtributoEsquemaCodigo1',fld:'vATRIBUTOESQUEMACODIGO1'},{av:'AV45Retorno',fld:'vRETORNO'},{av:'AV49AtributoEsquemaCodigo2',fld:'vATRIBUTOESQUEMACODIGO2'},{av:'AV50AtributoEsquemaCodigo3',fld:'vATRIBUTOESQUEMACODIGO3'},{av:'AV51AtributoEsquemaCodigo4',fld:'vATRIBUTOESQUEMACODIGO4'},{av:'AV52AtributoEsquemaCodigo5',fld:'vATRIBUTOESQUEMACODIGO5'},{av:'AV76filtrosMovEst',fld:'vFILTROSMOVEST'},{av:'AV98Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV53SnLoteUnico',fld:'vSNLOTEUNICO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A10788ProdutoSnControlaVenc',fld:'PRODUTOSNCONTROLAVENC'},{av:'AV84SnContrArmazem',fld:'vSNCONTRARMAZEM'},{av:'AV55FilialUnica',fld:'vFILIALUNICA'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2918AtributoEsquemaSnVencimento',fld:'ATRIBUTOESQUEMASNVENCIMENTO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'AV44EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV47AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'AV46Combinacao',fld:'vCOMBINACAO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV81CondicionalADiminuir',fld:'vCONDICIONALADIMINUIR'},{av:'A3645LoteProdutoQtdeAtual',fld:'LOTEPRODUTOQTDEATUAL'},{av:'A6591SaidaCondItemSeq',fld:'SAIDACONDITEMSEQ'},{av:'A4306SaidaEmpresaId',fld:'SAIDAEMPRESAID'},{av:'AV73SaidaEmpresaId',fld:'vSAIDAEMPRESAID'},{av:'A10443SaidaItemCondSituacao',fld:'SAIDAITEMCONDSITUACAO'},{av:'A6581SaidaItemCondLoteFilialEmpId',fld:'SAIDAITEMCONDLOTEFILIALEMPID'},{av:'A6582SaidaItemCondLoteFilialId',fld:'SAIDAITEMCONDLOTEFILIALID'},{av:'AV68SaidaItemCondLoteFilialId',fld:'vSAIDAITEMCONDLOTEFILIALID'},{av:'A6584SaidaItemCondLoteProdEmpId',fld:'SAIDAITEMCONDLOTEPRODEMPID'},{av:'A6585SaidaItemCondLoteProdId',fld:'SAIDAITEMCONDLOTEPRODID'},{av:'AV69SaidaItemCondLoteProdId',fld:'vSAIDAITEMCONDLOTEPRODID'},{av:'A6587SaidaItemCondLoteCombinacao',fld:'SAIDAITEMCONDLOTECOMBINACAO'},{av:'AV70SaidaItemCondLoteCombinacao',fld:'vSAIDAITEMCONDLOTECOMBINACAO'},{av:'A6594SaidaItemCondQuantidade',fld:'SAIDAITEMCONDQUANTIDADE'},{av:'A6088SaidaSnAlteraSaldo',fld:'SAIDASNALTERASALDO'},{av:'AV34FilialNome',fld:'vFILIALNOME'},{av:'AV37ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'},{av:'AV90ProdutoIdParm',fld:'vPRODUTOIDPARM'},{av:'AV91FilialIdParm',fld:'vFILIALIDPARM'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'AV74LoteProdutoCodigoBarrasAux',fld:'vLOTEPRODUTOCODIGOBARRASAUX'},{av:'AV28ProdutoIdFiltro',fld:'vPRODUTOIDFILTRO'},{av:'AV92isDistribuidora',fld:'vISDISTRIBUIDORA'},{av:'AV30ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV29FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vATRIBUTO1","Visible")',ctrl:'vATRIBUTO1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO2","Visible")',ctrl:'vATRIBUTO2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO3","Visible")',ctrl:'vATRIBUTO3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO4","Visible")',ctrl:'vATRIBUTO4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO5","Visible")',ctrl:'vATRIBUTO5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTEUNICO","Visible")',ctrl:'vLOTEUNICO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LOTEPRODUTOVENCIMENTO","Visible")',ctrl:'LOTEPRODUTOVENCIMENTO',prop:'Visible'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV82SnLoteMedicamen',fld:'vSNLOTEMEDICAMEN'},{av:'AV48AtributoEsquemaCodigo1',fld:'vATRIBUTOESQUEMACODIGO1'},{av:'AV45Retorno',fld:'vRETORNO'},{av:'AV49AtributoEsquemaCodigo2',fld:'vATRIBUTOESQUEMACODIGO2'},{av:'AV50AtributoEsquemaCodigo3',fld:'vATRIBUTOESQUEMACODIGO3'},{av:'AV51AtributoEsquemaCodigo4',fld:'vATRIBUTOESQUEMACODIGO4'},{av:'AV52AtributoEsquemaCodigo5',fld:'vATRIBUTOESQUEMACODIGO5'},{av:'AV76filtrosMovEst',fld:'vFILTROSMOVEST'},{av:'AV98Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV53SnLoteUnico',fld:'vSNLOTEUNICO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A10788ProdutoSnControlaVenc',fld:'PRODUTOSNCONTROLAVENC'},{av:'AV84SnContrArmazem',fld:'vSNCONTRARMAZEM'},{av:'AV55FilialUnica',fld:'vFILIALUNICA'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2918AtributoEsquemaSnVencimento',fld:'ATRIBUTOESQUEMASNVENCIMENTO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'AV44EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV47AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'AV46Combinacao',fld:'vCOMBINACAO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV81CondicionalADiminuir',fld:'vCONDICIONALADIMINUIR'},{av:'A3645LoteProdutoQtdeAtual',fld:'LOTEPRODUTOQTDEATUAL'},{av:'A6591SaidaCondItemSeq',fld:'SAIDACONDITEMSEQ'},{av:'A4306SaidaEmpresaId',fld:'SAIDAEMPRESAID'},{av:'AV73SaidaEmpresaId',fld:'vSAIDAEMPRESAID'},{av:'A10443SaidaItemCondSituacao',fld:'SAIDAITEMCONDSITUACAO'},{av:'A6581SaidaItemCondLoteFilialEmpId',fld:'SAIDAITEMCONDLOTEFILIALEMPID'},{av:'A6582SaidaItemCondLoteFilialId',fld:'SAIDAITEMCONDLOTEFILIALID'},{av:'AV68SaidaItemCondLoteFilialId',fld:'vSAIDAITEMCONDLOTEFILIALID'},{av:'A6584SaidaItemCondLoteProdEmpId',fld:'SAIDAITEMCONDLOTEPRODEMPID'},{av:'A6585SaidaItemCondLoteProdId',fld:'SAIDAITEMCONDLOTEPRODID'},{av:'AV69SaidaItemCondLoteProdId',fld:'vSAIDAITEMCONDLOTEPRODID'},{av:'A6587SaidaItemCondLoteCombinacao',fld:'SAIDAITEMCONDLOTECOMBINACAO'},{av:'AV70SaidaItemCondLoteCombinacao',fld:'vSAIDAITEMCONDLOTECOMBINACAO'},{av:'A6594SaidaItemCondQuantidade',fld:'SAIDAITEMCONDQUANTIDADE'},{av:'A6088SaidaSnAlteraSaldo',fld:'SAIDASNALTERASALDO'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV34FilialNome',fld:'vFILIALNOME'},{av:'AV37ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'},{av:'AV90ProdutoIdParm',fld:'vPRODUTOIDPARM'},{av:'AV91FilialIdParm',fld:'vFILIALIDPARM'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'AV74LoteProdutoCodigoBarrasAux',fld:'vLOTEPRODUTOCODIGOBARRASAUX'},{av:'AV28ProdutoIdFiltro',fld:'vPRODUTOIDFILTRO'},{av:'AV92isDistribuidora',fld:'vISDISTRIBUIDORA'},{av:'AV30ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV29FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vATRIBUTO1","Visible")',ctrl:'vATRIBUTO1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO2","Visible")',ctrl:'vATRIBUTO2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO3","Visible")',ctrl:'vATRIBUTO3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO4","Visible")',ctrl:'vATRIBUTO4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO5","Visible")',ctrl:'vATRIBUTO5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTEUNICO","Visible")',ctrl:'vLOTEUNICO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LOTEPRODUTOVENCIMENTO","Visible")',ctrl:'LOTEPRODUTOVENCIMENTO',prop:'Visible'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV82SnLoteMedicamen',fld:'vSNLOTEMEDICAMEN'},{av:'AV48AtributoEsquemaCodigo1',fld:'vATRIBUTOESQUEMACODIGO1'},{av:'AV45Retorno',fld:'vRETORNO'},{av:'AV49AtributoEsquemaCodigo2',fld:'vATRIBUTOESQUEMACODIGO2'},{av:'AV50AtributoEsquemaCodigo3',fld:'vATRIBUTOESQUEMACODIGO3'},{av:'AV51AtributoEsquemaCodigo4',fld:'vATRIBUTOESQUEMACODIGO4'},{av:'AV52AtributoEsquemaCodigo5',fld:'vATRIBUTOESQUEMACODIGO5'},{av:'AV76filtrosMovEst',fld:'vFILTROSMOVEST'},{av:'AV98Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV53SnLoteUnico',fld:'vSNLOTEUNICO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A10788ProdutoSnControlaVenc',fld:'PRODUTOSNCONTROLAVENC'},{av:'AV84SnContrArmazem',fld:'vSNCONTRARMAZEM'},{av:'AV55FilialUnica',fld:'vFILIALUNICA'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2918AtributoEsquemaSnVencimento',fld:'ATRIBUTOESQUEMASNVENCIMENTO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'AV44EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV47AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'AV46Combinacao',fld:'vCOMBINACAO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV81CondicionalADiminuir',fld:'vCONDICIONALADIMINUIR'},{av:'A3645LoteProdutoQtdeAtual',fld:'LOTEPRODUTOQTDEATUAL'},{av:'A6591SaidaCondItemSeq',fld:'SAIDACONDITEMSEQ'},{av:'A4306SaidaEmpresaId',fld:'SAIDAEMPRESAID'},{av:'AV73SaidaEmpresaId',fld:'vSAIDAEMPRESAID'},{av:'A10443SaidaItemCondSituacao',fld:'SAIDAITEMCONDSITUACAO'},{av:'A6581SaidaItemCondLoteFilialEmpId',fld:'SAIDAITEMCONDLOTEFILIALEMPID'},{av:'A6582SaidaItemCondLoteFilialId',fld:'SAIDAITEMCONDLOTEFILIALID'},{av:'AV68SaidaItemCondLoteFilialId',fld:'vSAIDAITEMCONDLOTEFILIALID'},{av:'A6584SaidaItemCondLoteProdEmpId',fld:'SAIDAITEMCONDLOTEPRODEMPID'},{av:'A6585SaidaItemCondLoteProdId',fld:'SAIDAITEMCONDLOTEPRODID'},{av:'AV69SaidaItemCondLoteProdId',fld:'vSAIDAITEMCONDLOTEPRODID'},{av:'A6587SaidaItemCondLoteCombinacao',fld:'SAIDAITEMCONDLOTECOMBINACAO'},{av:'AV70SaidaItemCondLoteCombinacao',fld:'vSAIDAITEMCONDLOTECOMBINACAO'},{av:'A6594SaidaItemCondQuantidade',fld:'SAIDAITEMCONDQUANTIDADE'},{av:'A6088SaidaSnAlteraSaldo',fld:'SAIDASNALTERASALDO'},{av:'AV34FilialNome',fld:'vFILIALNOME'},{av:'AV37ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'},{av:'AV90ProdutoIdParm',fld:'vPRODUTOIDPARM'},{av:'AV91FilialIdParm',fld:'vFILIALIDPARM'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'AV74LoteProdutoCodigoBarrasAux',fld:'vLOTEPRODUTOCODIGOBARRASAUX'},{av:'AV28ProdutoIdFiltro',fld:'vPRODUTOIDFILTRO'},{av:'AV92isDistribuidora',fld:'vISDISTRIBUIDORA'},{av:'AV30ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV29FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vATRIBUTO1","Visible")',ctrl:'vATRIBUTO1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO2","Visible")',ctrl:'vATRIBUTO2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO3","Visible")',ctrl:'vATRIBUTO3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO4","Visible")',ctrl:'vATRIBUTO4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO5","Visible")',ctrl:'vATRIBUTO5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTEUNICO","Visible")',ctrl:'vLOTEUNICO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LOTEPRODUTOVENCIMENTO","Visible")',ctrl:'LOTEPRODUTOVENCIMENTO',prop:'Visible'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV82SnLoteMedicamen',fld:'vSNLOTEMEDICAMEN'},{av:'AV48AtributoEsquemaCodigo1',fld:'vATRIBUTOESQUEMACODIGO1'},{av:'AV45Retorno',fld:'vRETORNO'},{av:'AV49AtributoEsquemaCodigo2',fld:'vATRIBUTOESQUEMACODIGO2'},{av:'AV50AtributoEsquemaCodigo3',fld:'vATRIBUTOESQUEMACODIGO3'},{av:'AV51AtributoEsquemaCodigo4',fld:'vATRIBUTOESQUEMACODIGO4'},{av:'AV52AtributoEsquemaCodigo5',fld:'vATRIBUTOESQUEMACODIGO5'},{av:'AV76filtrosMovEst',fld:'vFILTROSMOVEST'},{av:'AV98Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV53SnLoteUnico',fld:'vSNLOTEUNICO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A10788ProdutoSnControlaVenc',fld:'PRODUTOSNCONTROLAVENC'},{av:'AV84SnContrArmazem',fld:'vSNCONTRARMAZEM'},{av:'AV55FilialUnica',fld:'vFILIALUNICA'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2918AtributoEsquemaSnVencimento',fld:'ATRIBUTOESQUEMASNVENCIMENTO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'AV44EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV47AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'AV46Combinacao',fld:'vCOMBINACAO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV81CondicionalADiminuir',fld:'vCONDICIONALADIMINUIR'},{av:'A3645LoteProdutoQtdeAtual',fld:'LOTEPRODUTOQTDEATUAL'},{av:'A6591SaidaCondItemSeq',fld:'SAIDACONDITEMSEQ'},{av:'A4306SaidaEmpresaId',fld:'SAIDAEMPRESAID'},{av:'AV73SaidaEmpresaId',fld:'vSAIDAEMPRESAID'},{av:'A10443SaidaItemCondSituacao',fld:'SAIDAITEMCONDSITUACAO'},{av:'A6581SaidaItemCondLoteFilialEmpId',fld:'SAIDAITEMCONDLOTEFILIALEMPID'},{av:'A6582SaidaItemCondLoteFilialId',fld:'SAIDAITEMCONDLOTEFILIALID'},{av:'AV68SaidaItemCondLoteFilialId',fld:'vSAIDAITEMCONDLOTEFILIALID'},{av:'A6584SaidaItemCondLoteProdEmpId',fld:'SAIDAITEMCONDLOTEPRODEMPID'},{av:'A6585SaidaItemCondLoteProdId',fld:'SAIDAITEMCONDLOTEPRODID'},{av:'AV69SaidaItemCondLoteProdId',fld:'vSAIDAITEMCONDLOTEPRODID'},{av:'A6587SaidaItemCondLoteCombinacao',fld:'SAIDAITEMCONDLOTECOMBINACAO'},{av:'AV70SaidaItemCondLoteCombinacao',fld:'vSAIDAITEMCONDLOTECOMBINACAO'},{av:'A6594SaidaItemCondQuantidade',fld:'SAIDAITEMCONDQUANTIDADE'},{av:'A6088SaidaSnAlteraSaldo',fld:'SAIDASNALTERASALDO'},{av:'AV31SnErro',fld:'vSNERRO'},{av:'AV90ProdutoIdParm',fld:'vPRODUTOIDPARM'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV34FilialNome',fld:'vFILIALNOME'},{av:'AV37ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'},{av:'AV91FilialIdParm',fld:'vFILIALIDPARM'},{av:'A3644LoteProdutoCodigoBarras',fld:'LOTEPRODUTOCODIGOBARRAS'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'A2968CodigoBarrasProdutoBarra',fld:'CODIGOBARRASPRODUTOBARRA'}],[{av:'AV28ProdutoIdFiltro',fld:'vPRODUTOIDFILTRO'},{av:'AV27FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'AV31SnErro',fld:'vSNERRO'},{av:'AV106GXLvl445',fld:'vGXLVL445'},{av:'AV107GXLvl457',fld:'vGXLVL457'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV108GXLvl481',fld:'vGXLVL481'},{av:'AV109GXLvl493',fld:'vGXLVL493'},{av:'AV37ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV98Pgmname',fld:'vPGMNAME'},{av:'AV90ProdutoIdParm',fld:'vPRODUTOIDPARM'}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'AV74LoteProdutoCodigoBarrasAux',fld:'vLOTEPRODUTOCODIGOBARRASAUX'},{av:'AV28ProdutoIdFiltro',fld:'vPRODUTOIDFILTRO'},{av:'AV92isDistribuidora',fld:'vISDISTRIBUIDORA'},{av:'AV30ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV29FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vATRIBUTO1","Visible")',ctrl:'vATRIBUTO1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO2","Visible")',ctrl:'vATRIBUTO2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO3","Visible")',ctrl:'vATRIBUTO3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO4","Visible")',ctrl:'vATRIBUTO4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO5","Visible")',ctrl:'vATRIBUTO5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTEUNICO","Visible")',ctrl:'vLOTEUNICO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LOTEPRODUTOVENCIMENTO","Visible")',ctrl:'LOTEPRODUTOVENCIMENTO',prop:'Visible'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV82SnLoteMedicamen',fld:'vSNLOTEMEDICAMEN'},{av:'AV48AtributoEsquemaCodigo1',fld:'vATRIBUTOESQUEMACODIGO1'},{av:'AV45Retorno',fld:'vRETORNO'},{av:'AV49AtributoEsquemaCodigo2',fld:'vATRIBUTOESQUEMACODIGO2'},{av:'AV50AtributoEsquemaCodigo3',fld:'vATRIBUTOESQUEMACODIGO3'},{av:'AV51AtributoEsquemaCodigo4',fld:'vATRIBUTOESQUEMACODIGO4'},{av:'AV52AtributoEsquemaCodigo5',fld:'vATRIBUTOESQUEMACODIGO5'},{av:'AV76filtrosMovEst',fld:'vFILTROSMOVEST'},{av:'AV98Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV53SnLoteUnico',fld:'vSNLOTEUNICO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A10788ProdutoSnControlaVenc',fld:'PRODUTOSNCONTROLAVENC'},{av:'AV84SnContrArmazem',fld:'vSNCONTRARMAZEM'},{av:'AV55FilialUnica',fld:'vFILIALUNICA'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2918AtributoEsquemaSnVencimento',fld:'ATRIBUTOESQUEMASNVENCIMENTO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'AV44EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV47AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'AV46Combinacao',fld:'vCOMBINACAO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV81CondicionalADiminuir',fld:'vCONDICIONALADIMINUIR'},{av:'A3645LoteProdutoQtdeAtual',fld:'LOTEPRODUTOQTDEATUAL'},{av:'A6591SaidaCondItemSeq',fld:'SAIDACONDITEMSEQ'},{av:'A4306SaidaEmpresaId',fld:'SAIDAEMPRESAID'},{av:'AV73SaidaEmpresaId',fld:'vSAIDAEMPRESAID'},{av:'A10443SaidaItemCondSituacao',fld:'SAIDAITEMCONDSITUACAO'},{av:'A6581SaidaItemCondLoteFilialEmpId',fld:'SAIDAITEMCONDLOTEFILIALEMPID'},{av:'A6582SaidaItemCondLoteFilialId',fld:'SAIDAITEMCONDLOTEFILIALID'},{av:'AV68SaidaItemCondLoteFilialId',fld:'vSAIDAITEMCONDLOTEFILIALID'},{av:'A6584SaidaItemCondLoteProdEmpId',fld:'SAIDAITEMCONDLOTEPRODEMPID'},{av:'A6585SaidaItemCondLoteProdId',fld:'SAIDAITEMCONDLOTEPRODID'},{av:'AV69SaidaItemCondLoteProdId',fld:'vSAIDAITEMCONDLOTEPRODID'},{av:'A6587SaidaItemCondLoteCombinacao',fld:'SAIDAITEMCONDLOTECOMBINACAO'},{av:'AV70SaidaItemCondLoteCombinacao',fld:'vSAIDAITEMCONDLOTECOMBINACAO'},{av:'A6594SaidaItemCondQuantidade',fld:'SAIDAITEMCONDQUANTIDADE'},{av:'A6088SaidaSnAlteraSaldo',fld:'SAIDASNALTERASALDO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV34FilialNome',fld:'vFILIALNOME'},{av:'AV37ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'},{av:'AV90ProdutoIdParm',fld:'vPRODUTOIDPARM'},{av:'AV91FilialIdParm',fld:'vFILIALIDPARM'},{av:'A3644LoteProdutoCodigoBarras',fld:'LOTEPRODUTOCODIGOBARRAS'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'A2968CodigoBarrasProdutoBarra',fld:'CODIGOBARRASPRODUTOBARRA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV31SnErro',fld:'vSNERRO'},{av:'AV106GXLvl445',fld:'vGXLVL445'},{av:'AV107GXLvl457',fld:'vGXLVL457'},{av:'gx.fn.getCtrlProperty("vATRIBUTO1","Visible")',ctrl:'vATRIBUTO1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO2","Visible")',ctrl:'vATRIBUTO2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO3","Visible")',ctrl:'vATRIBUTO3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO4","Visible")',ctrl:'vATRIBUTO4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO5","Visible")',ctrl:'vATRIBUTO5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTEUNICO","Visible")',ctrl:'vLOTEUNICO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LOTEPRODUTOVENCIMENTO","Visible")',ctrl:'LOTEPRODUTOVENCIMENTO',prop:'Visible'},{av:'AV76filtrosMovEst',fld:'vFILTROSMOVEST'},{av:'AV44EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV83ProdutoSnControlaVenc',fld:'vPRODUTOSNCONTROLAVENC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LOTEPRODUTOCODIGOBARRAS","Visible")',ctrl:'LOTEPRODUTOCODIGOBARRAS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("IMAGE2","Visible")',ctrl:'IMAGE2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPALT","Visible")',ctrl:'vBMPALT',prop:'Visible'},{av:'AV43Cont',fld:'vCONT'},{av:'gx.fn.getCtrlProperty("vATRIBUTO1","Title")',ctrl:'vATRIBUTO1',prop:'Title'},{av:'AV48AtributoEsquemaCodigo1',fld:'vATRIBUTOESQUEMACODIGO1'},{av:'gx.fn.getCtrlProperty("vATRIBUTO2","Title")',ctrl:'vATRIBUTO2',prop:'Title'},{av:'AV49AtributoEsquemaCodigo2',fld:'vATRIBUTOESQUEMACODIGO2'},{av:'gx.fn.getCtrlProperty("vATRIBUTO3","Title")',ctrl:'vATRIBUTO3',prop:'Title'},{av:'AV50AtributoEsquemaCodigo3',fld:'vATRIBUTOESQUEMACODIGO3'},{av:'gx.fn.getCtrlProperty("vATRIBUTO4","Title")',ctrl:'vATRIBUTO4',prop:'Title'},{av:'AV51AtributoEsquemaCodigo4',fld:'vATRIBUTOESQUEMACODIGO4'},{av:'gx.fn.getCtrlProperty("vATRIBUTO5","Title")',ctrl:'vATRIBUTO5',prop:'Title'},{av:'AV52AtributoEsquemaCodigo5',fld:'vATRIBUTOESQUEMACODIGO5'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV108GXLvl481',fld:'vGXLVL481'},{av:'AV109GXLvl493',fld:'vGXLVL493'},{av:'AV28ProdutoIdFiltro',fld:'vPRODUTOIDFILTRO'},{av:'AV37ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'AV74LoteProdutoCodigoBarrasAux',fld:'vLOTEPRODUTOCODIGOBARRASAUX'},{av:'AV28ProdutoIdFiltro',fld:'vPRODUTOIDFILTRO'},{av:'AV92isDistribuidora',fld:'vISDISTRIBUIDORA'},{av:'AV30ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV29FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vATRIBUTO1","Visible")',ctrl:'vATRIBUTO1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO2","Visible")',ctrl:'vATRIBUTO2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO3","Visible")',ctrl:'vATRIBUTO3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO4","Visible")',ctrl:'vATRIBUTO4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO5","Visible")',ctrl:'vATRIBUTO5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTEUNICO","Visible")',ctrl:'vLOTEUNICO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LOTEPRODUTOVENCIMENTO","Visible")',ctrl:'LOTEPRODUTOVENCIMENTO',prop:'Visible'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV82SnLoteMedicamen',fld:'vSNLOTEMEDICAMEN'},{av:'AV48AtributoEsquemaCodigo1',fld:'vATRIBUTOESQUEMACODIGO1'},{av:'AV45Retorno',fld:'vRETORNO'},{av:'AV49AtributoEsquemaCodigo2',fld:'vATRIBUTOESQUEMACODIGO2'},{av:'AV50AtributoEsquemaCodigo3',fld:'vATRIBUTOESQUEMACODIGO3'},{av:'AV51AtributoEsquemaCodigo4',fld:'vATRIBUTOESQUEMACODIGO4'},{av:'AV52AtributoEsquemaCodigo5',fld:'vATRIBUTOESQUEMACODIGO5'},{av:'AV76filtrosMovEst',fld:'vFILTROSMOVEST'},{av:'AV98Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV53SnLoteUnico',fld:'vSNLOTEUNICO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A10788ProdutoSnControlaVenc',fld:'PRODUTOSNCONTROLAVENC'},{av:'AV84SnContrArmazem',fld:'vSNCONTRARMAZEM'},{av:'AV55FilialUnica',fld:'vFILIALUNICA'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2918AtributoEsquemaSnVencimento',fld:'ATRIBUTOESQUEMASNVENCIMENTO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'AV44EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV47AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'AV46Combinacao',fld:'vCOMBINACAO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV81CondicionalADiminuir',fld:'vCONDICIONALADIMINUIR'},{av:'A3645LoteProdutoQtdeAtual',fld:'LOTEPRODUTOQTDEATUAL'},{av:'A6591SaidaCondItemSeq',fld:'SAIDACONDITEMSEQ'},{av:'A4306SaidaEmpresaId',fld:'SAIDAEMPRESAID'},{av:'AV73SaidaEmpresaId',fld:'vSAIDAEMPRESAID'},{av:'A10443SaidaItemCondSituacao',fld:'SAIDAITEMCONDSITUACAO'},{av:'A6581SaidaItemCondLoteFilialEmpId',fld:'SAIDAITEMCONDLOTEFILIALEMPID'},{av:'A6582SaidaItemCondLoteFilialId',fld:'SAIDAITEMCONDLOTEFILIALID'},{av:'AV68SaidaItemCondLoteFilialId',fld:'vSAIDAITEMCONDLOTEFILIALID'},{av:'A6584SaidaItemCondLoteProdEmpId',fld:'SAIDAITEMCONDLOTEPRODEMPID'},{av:'A6585SaidaItemCondLoteProdId',fld:'SAIDAITEMCONDLOTEPRODID'},{av:'AV69SaidaItemCondLoteProdId',fld:'vSAIDAITEMCONDLOTEPRODID'},{av:'A6587SaidaItemCondLoteCombinacao',fld:'SAIDAITEMCONDLOTECOMBINACAO'},{av:'AV70SaidaItemCondLoteCombinacao',fld:'vSAIDAITEMCONDLOTECOMBINACAO'},{av:'A6594SaidaItemCondQuantidade',fld:'SAIDAITEMCONDQUANTIDADE'},{av:'A6088SaidaSnAlteraSaldo',fld:'SAIDASNALTERASALDO'},{av:'AV90ProdutoIdParm',fld:'vPRODUTOIDPARM'},{av:'AV34FilialNome',fld:'vFILIALNOME'},{av:'AV37ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'},{av:'AV91FilialIdParm',fld:'vFILIALIDPARM'}],[{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'AV74LoteProdutoCodigoBarrasAux',fld:'vLOTEPRODUTOCODIGOBARRASAUX'},{av:'AV28ProdutoIdFiltro',fld:'vPRODUTOIDFILTRO'},{av:'AV92isDistribuidora',fld:'vISDISTRIBUIDORA'},{av:'AV30ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV29FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vATRIBUTO1","Visible")',ctrl:'vATRIBUTO1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO2","Visible")',ctrl:'vATRIBUTO2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO3","Visible")',ctrl:'vATRIBUTO3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO4","Visible")',ctrl:'vATRIBUTO4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTO5","Visible")',ctrl:'vATRIBUTO5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTEUNICO","Visible")',ctrl:'vLOTEUNICO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LOTEPRODUTOVENCIMENTO","Visible")',ctrl:'LOTEPRODUTOVENCIMENTO',prop:'Visible'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV82SnLoteMedicamen',fld:'vSNLOTEMEDICAMEN'},{av:'AV48AtributoEsquemaCodigo1',fld:'vATRIBUTOESQUEMACODIGO1'},{av:'AV45Retorno',fld:'vRETORNO'},{av:'AV49AtributoEsquemaCodigo2',fld:'vATRIBUTOESQUEMACODIGO2'},{av:'AV50AtributoEsquemaCodigo3',fld:'vATRIBUTOESQUEMACODIGO3'},{av:'AV51AtributoEsquemaCodigo4',fld:'vATRIBUTOESQUEMACODIGO4'},{av:'AV52AtributoEsquemaCodigo5',fld:'vATRIBUTOESQUEMACODIGO5'},{av:'AV76filtrosMovEst',fld:'vFILTROSMOVEST'},{av:'AV98Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV53SnLoteUnico',fld:'vSNLOTEUNICO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A10788ProdutoSnControlaVenc',fld:'PRODUTOSNCONTROLAVENC'},{av:'AV84SnContrArmazem',fld:'vSNCONTRARMAZEM'},{av:'AV55FilialUnica',fld:'vFILIALUNICA'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2918AtributoEsquemaSnVencimento',fld:'ATRIBUTOESQUEMASNVENCIMENTO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'AV44EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV47AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'AV46Combinacao',fld:'vCOMBINACAO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV81CondicionalADiminuir',fld:'vCONDICIONALADIMINUIR'},{av:'A3645LoteProdutoQtdeAtual',fld:'LOTEPRODUTOQTDEATUAL'},{av:'A6591SaidaCondItemSeq',fld:'SAIDACONDITEMSEQ'},{av:'A4306SaidaEmpresaId',fld:'SAIDAEMPRESAID'},{av:'AV73SaidaEmpresaId',fld:'vSAIDAEMPRESAID'},{av:'A10443SaidaItemCondSituacao',fld:'SAIDAITEMCONDSITUACAO'},{av:'A6581SaidaItemCondLoteFilialEmpId',fld:'SAIDAITEMCONDLOTEFILIALEMPID'},{av:'A6582SaidaItemCondLoteFilialId',fld:'SAIDAITEMCONDLOTEFILIALID'},{av:'AV68SaidaItemCondLoteFilialId',fld:'vSAIDAITEMCONDLOTEFILIALID'},{av:'A6584SaidaItemCondLoteProdEmpId',fld:'SAIDAITEMCONDLOTEPRODEMPID'},{av:'A6585SaidaItemCondLoteProdId',fld:'SAIDAITEMCONDLOTEPRODID'},{av:'AV69SaidaItemCondLoteProdId',fld:'vSAIDAITEMCONDLOTEPRODID'},{av:'A6587SaidaItemCondLoteCombinacao',fld:'SAIDAITEMCONDLOTECOMBINACAO'},{av:'AV70SaidaItemCondLoteCombinacao',fld:'vSAIDAITEMCONDLOTECOMBINACAO'},{av:'A6594SaidaItemCondQuantidade',fld:'SAIDAITEMCONDQUANTIDADE'},{av:'A6088SaidaSnAlteraSaldo',fld:'SAIDASNALTERASALDO'},{av:'AV90ProdutoIdParm',fld:'vPRODUTOIDPARM'},{av:'AV34FilialNome',fld:'vFILIALNOME'},{av:'AV37ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'},{av:'AV91FilialIdParm',fld:'vFILIALIDPARM'}],[{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV90ProdutoIdParm',fld:'vPRODUTOIDPARM'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'AV28ProdutoIdFiltro',fld:'vPRODUTOIDFILTRO'},{av:'AV34FilialNome',fld:'vFILIALNOME'},{av:'AV37ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'},{av:'AV74LoteProdutoCodigoBarrasAux',fld:'vLOTEPRODUTOCODIGOBARRASAUX'},{av:'AV91FilialIdParm',fld:'vFILIALIDPARM'},{av:'AV98Pgmname',fld:'vPGMNAME'}],[{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.setPrompt("PROMPT_FILIALIDFILTRO", [13]);
   this.setPrompt("PROMPTPROD", [23,88,86,87,85,91,95]);
   this.setVCMap("A2964ProdutoEmpresaId", "PRODUTOEMPRESAID", 0, "char");
   this.setVCMap("A11191LoteProdutoCodBarPrd", "LOTEPRODUTOCODBARPRD", 0, "svchar");
   this.setVCMap("AV82SnLoteMedicamen", "vSNLOTEMEDICAMEN", 0, "char");
   this.setVCMap("AV48AtributoEsquemaCodigo1", "vATRIBUTOESQUEMACODIGO1", 0, "int");
   this.setVCMap("AV45Retorno", "vRETORNO", 0, "char");
   this.setVCMap("AV49AtributoEsquemaCodigo2", "vATRIBUTOESQUEMACODIGO2", 0, "int");
   this.setVCMap("AV50AtributoEsquemaCodigo3", "vATRIBUTOESQUEMACODIGO3", 0, "int");
   this.setVCMap("AV51AtributoEsquemaCodigo4", "vATRIBUTOESQUEMACODIGO4", 0, "int");
   this.setVCMap("AV52AtributoEsquemaCodigo5", "vATRIBUTOESQUEMACODIGO5", 0, "int");
   this.setVCMap("AV76filtrosMovEst", "vFILTROSMOVEST", 0, "FiltrosMovimentacaoEst");
   this.setVCMap("AV98Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV53SnLoteUnico", "vSNLOTEUNICO", 0, "char");
   this.setVCMap("A2915EsquemaCodigo", "ESQUEMACODIGO", 0, "int");
   this.setVCMap("A10788ProdutoSnControlaVenc", "PRODUTOSNCONTROLAVENC", 0, "char");
   this.setVCMap("AV84SnContrArmazem", "vSNCONTRARMAZEM", 0, "char");
   this.setVCMap("AV55FilialUnica", "vFILIALUNICA", 0, "char");
   this.setVCMap("A2921AtributoEsquemaCodigo", "ATRIBUTOESQUEMACODIGO", 0, "int");
   this.setVCMap("A2918AtributoEsquemaSnVencimento", "ATRIBUTOESQUEMASNVENCIMENTO", 0, "char");
   this.setVCMap("A2916AtributoEsquemaDescricao", "ATRIBUTOESQUEMADESCRICAO", 0, "char");
   this.setVCMap("AV44EsquemaCodigo", "vESQUEMACODIGO", 0, "int");
   this.setVCMap("AV47AtributoEsquemaCodigo", "vATRIBUTOESQUEMACODIGO", 0, "int");
   this.setVCMap("A2917AtributoEsquemaSnCadastrado", "ATRIBUTOESQUEMASNCADASTRADO", 0, "char");
   this.setVCMap("A2941ValorAtributoCodigo", "VALORATRIBUTOCODIGO", 0, "int");
   this.setVCMap("AV46Combinacao", "vCOMBINACAO", 0, "int");
   this.setVCMap("A2938ValorAtributoDescricao", "VALORATRIBUTODESCRICAO", 0, "char");
   this.setVCMap("AV81CondicionalADiminuir", "vCONDICIONALADIMINUIR", 0, "decimal");
   this.setVCMap("A6591SaidaCondItemSeq", "SAIDACONDITEMSEQ", 0, "int");
   this.setVCMap("A4306SaidaEmpresaId", "SAIDAEMPRESAID", 0, "char");
   this.setVCMap("AV73SaidaEmpresaId", "vSAIDAEMPRESAID", 0, "char");
   this.setVCMap("A10443SaidaItemCondSituacao", "SAIDAITEMCONDSITUACAO", 0, "char");
   this.setVCMap("A6581SaidaItemCondLoteFilialEmpId", "SAIDAITEMCONDLOTEFILIALEMPID", 0, "char");
   this.setVCMap("A6582SaidaItemCondLoteFilialId", "SAIDAITEMCONDLOTEFILIALID", 0, "int");
   this.setVCMap("AV68SaidaItemCondLoteFilialId", "vSAIDAITEMCONDLOTEFILIALID", 0, "int");
   this.setVCMap("A6584SaidaItemCondLoteProdEmpId", "SAIDAITEMCONDLOTEPRODEMPID", 0, "char");
   this.setVCMap("A6585SaidaItemCondLoteProdId", "SAIDAITEMCONDLOTEPRODID", 0, "int");
   this.setVCMap("AV69SaidaItemCondLoteProdId", "vSAIDAITEMCONDLOTEPRODID", 0, "int");
   this.setVCMap("A6587SaidaItemCondLoteCombinacao", "SAIDAITEMCONDLOTECOMBINACAO", 0, "char");
   this.setVCMap("AV70SaidaItemCondLoteCombinacao", "vSAIDAITEMCONDLOTECOMBINACAO", 0, "char");
   this.setVCMap("A6594SaidaItemCondQuantidade", "SAIDAITEMCONDQUANTIDADE", 0, "decimal");
   this.setVCMap("A6088SaidaSnAlteraSaldo", "SAIDASNALTERASALDO", 0, "char");
   this.setVCMap("AV82SnLoteMedicamen", "vSNLOTEMEDICAMEN", 0, "char");
   this.setVCMap("AV48AtributoEsquemaCodigo1", "vATRIBUTOESQUEMACODIGO1", 0, "int");
   this.setVCMap("AV45Retorno", "vRETORNO", 0, "char");
   this.setVCMap("AV49AtributoEsquemaCodigo2", "vATRIBUTOESQUEMACODIGO2", 0, "int");
   this.setVCMap("AV50AtributoEsquemaCodigo3", "vATRIBUTOESQUEMACODIGO3", 0, "int");
   this.setVCMap("AV51AtributoEsquemaCodigo4", "vATRIBUTOESQUEMACODIGO4", 0, "int");
   this.setVCMap("AV52AtributoEsquemaCodigo5", "vATRIBUTOESQUEMACODIGO5", 0, "int");
   this.setVCMap("AV76filtrosMovEst", "vFILTROSMOVEST", 0, "FiltrosMovimentacaoEst");
   this.setVCMap("AV98Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV53SnLoteUnico", "vSNLOTEUNICO", 0, "char");
   this.setVCMap("A2915EsquemaCodigo", "ESQUEMACODIGO", 0, "int");
   this.setVCMap("A10788ProdutoSnControlaVenc", "PRODUTOSNCONTROLAVENC", 0, "char");
   this.setVCMap("AV84SnContrArmazem", "vSNCONTRARMAZEM", 0, "char");
   this.setVCMap("AV55FilialUnica", "vFILIALUNICA", 0, "char");
   this.setVCMap("A2921AtributoEsquemaCodigo", "ATRIBUTOESQUEMACODIGO", 0, "int");
   this.setVCMap("A2918AtributoEsquemaSnVencimento", "ATRIBUTOESQUEMASNVENCIMENTO", 0, "char");
   this.setVCMap("A2916AtributoEsquemaDescricao", "ATRIBUTOESQUEMADESCRICAO", 0, "char");
   this.setVCMap("AV44EsquemaCodigo", "vESQUEMACODIGO", 0, "int");
   this.setVCMap("AV47AtributoEsquemaCodigo", "vATRIBUTOESQUEMACODIGO", 0, "int");
   this.setVCMap("A2917AtributoEsquemaSnCadastrado", "ATRIBUTOESQUEMASNCADASTRADO", 0, "char");
   this.setVCMap("A2941ValorAtributoCodigo", "VALORATRIBUTOCODIGO", 0, "int");
   this.setVCMap("AV46Combinacao", "vCOMBINACAO", 0, "int");
   this.setVCMap("A2938ValorAtributoDescricao", "VALORATRIBUTODESCRICAO", 0, "char");
   this.setVCMap("AV81CondicionalADiminuir", "vCONDICIONALADIMINUIR", 0, "decimal");
   this.setVCMap("A6591SaidaCondItemSeq", "SAIDACONDITEMSEQ", 0, "int");
   this.setVCMap("A4306SaidaEmpresaId", "SAIDAEMPRESAID", 0, "char");
   this.setVCMap("AV73SaidaEmpresaId", "vSAIDAEMPRESAID", 0, "char");
   this.setVCMap("A10443SaidaItemCondSituacao", "SAIDAITEMCONDSITUACAO", 0, "char");
   this.setVCMap("A6581SaidaItemCondLoteFilialEmpId", "SAIDAITEMCONDLOTEFILIALEMPID", 0, "char");
   this.setVCMap("A6582SaidaItemCondLoteFilialId", "SAIDAITEMCONDLOTEFILIALID", 0, "int");
   this.setVCMap("AV68SaidaItemCondLoteFilialId", "vSAIDAITEMCONDLOTEFILIALID", 0, "int");
   this.setVCMap("A6584SaidaItemCondLoteProdEmpId", "SAIDAITEMCONDLOTEPRODEMPID", 0, "char");
   this.setVCMap("A6585SaidaItemCondLoteProdId", "SAIDAITEMCONDLOTEPRODID", 0, "int");
   this.setVCMap("AV69SaidaItemCondLoteProdId", "vSAIDAITEMCONDLOTEPRODID", 0, "int");
   this.setVCMap("A6587SaidaItemCondLoteCombinacao", "SAIDAITEMCONDLOTECOMBINACAO", 0, "char");
   this.setVCMap("AV70SaidaItemCondLoteCombinacao", "vSAIDAITEMCONDLOTECOMBINACAO", 0, "char");
   this.setVCMap("A6594SaidaItemCondQuantidade", "SAIDAITEMCONDQUANTIDADE", 0, "decimal");
   this.setVCMap("A6088SaidaSnAlteraSaldo", "SAIDASNALTERASALDO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[81]);
   GridContainer.addRefreshingVar(this.GXValidFnc[89]);
   GridContainer.addRefreshingVar(this.GXValidFnc[90]);
   GridContainer.addRefreshingVar(this.GXValidFnc[93]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV38Atributo1", rfrProp:"Visible", gxAttId:"Atributo1"});
   GridContainer.addRefreshingVar({rfrVar:"AV39Atributo2", rfrProp:"Visible", gxAttId:"Atributo2"});
   GridContainer.addRefreshingVar({rfrVar:"AV40Atributo3", rfrProp:"Visible", gxAttId:"Atributo3"});
   GridContainer.addRefreshingVar({rfrVar:"AV41Atributo4", rfrProp:"Visible", gxAttId:"Atributo4"});
   GridContainer.addRefreshingVar({rfrVar:"AV42Atributo5", rfrProp:"Visible", gxAttId:"Atributo5"});
   GridContainer.addRefreshingVar({rfrVar:"AV54LoteUnico", rfrProp:"Visible", gxAttId:"Loteunico"});
   GridContainer.addRefreshingVar({rfrVar:"A3649LoteProdutoVencimento", rfrProp:"Visible", gxAttId:"3649"});
   GridContainer.addRefreshingVar({rfrVar:"A3624LoteProdutoCombinacao", rfrProp:"Value", gxAttId:"3624"});
   GridContainer.addRefreshingVar({rfrVar:"AV82SnLoteMedicamen"});
   GridContainer.addRefreshingVar({rfrVar:"AV48AtributoEsquemaCodigo1"});
   GridContainer.addRefreshingVar({rfrVar:"AV45Retorno"});
   GridContainer.addRefreshingVar({rfrVar:"AV49AtributoEsquemaCodigo2"});
   GridContainer.addRefreshingVar({rfrVar:"AV50AtributoEsquemaCodigo3"});
   GridContainer.addRefreshingVar({rfrVar:"AV51AtributoEsquemaCodigo4"});
   GridContainer.addRefreshingVar({rfrVar:"AV52AtributoEsquemaCodigo5"});
   GridContainer.addRefreshingVar({rfrVar:"AV76filtrosMovEst"});
   GridContainer.addRefreshingVar({rfrVar:"AV98Pgmname"});
   GridContainer.addRefreshingVar(this.GXValidFnc[51]);
   GridContainer.addRefreshingVar({rfrVar:"AV53SnLoteUnico"});
   GridContainer.addRefreshingVar({rfrVar:"A2964ProdutoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A2965ProdutoId", rfrProp:"Value", gxAttId:"2965"});
   GridContainer.addRefreshingVar({rfrVar:"A2915EsquemaCodigo"});
   GridContainer.addRefreshingVar({rfrVar:"A10788ProdutoSnControlaVenc"});
   GridContainer.addRefreshingVar({rfrVar:"AV84SnContrArmazem"});
   GridContainer.addRefreshingVar({rfrVar:"AV55FilialUnica"});
   GridContainer.addRefreshingVar({rfrVar:"A2921AtributoEsquemaCodigo"});
   GridContainer.addRefreshingVar({rfrVar:"A2918AtributoEsquemaSnVencimento"});
   GridContainer.addRefreshingVar({rfrVar:"A2916AtributoEsquemaDescricao"});
   GridContainer.addRefreshingVar({rfrVar:"AV44EsquemaCodigo"});
   GridContainer.addRefreshingVar({rfrVar:"AV47AtributoEsquemaCodigo"});
   GridContainer.addRefreshingVar({rfrVar:"A2917AtributoEsquemaSnCadastrado"});
   GridContainer.addRefreshingVar({rfrVar:"A2941ValorAtributoCodigo"});
   GridContainer.addRefreshingVar({rfrVar:"AV46Combinacao"});
   GridContainer.addRefreshingVar({rfrVar:"A2938ValorAtributoDescricao"});
   GridContainer.addRefreshingVar({rfrVar:"A1156FilialId", rfrProp:"Value", gxAttId:"1156"});
   GridContainer.addRefreshingVar({rfrVar:"AV81CondicionalADiminuir"});
   GridContainer.addRefreshingVar({rfrVar:"A3645LoteProdutoQtdeAtual", rfrProp:"Value", gxAttId:"3645"});
   GridContainer.addRefreshingVar({rfrVar:"A6591SaidaCondItemSeq"});
   GridContainer.addRefreshingVar({rfrVar:"A4306SaidaEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV73SaidaEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A10443SaidaItemCondSituacao"});
   GridContainer.addRefreshingVar({rfrVar:"A6581SaidaItemCondLoteFilialEmpId"});
   GridContainer.addRefreshingVar({rfrVar:"A6582SaidaItemCondLoteFilialId"});
   GridContainer.addRefreshingVar({rfrVar:"AV68SaidaItemCondLoteFilialId"});
   GridContainer.addRefreshingVar({rfrVar:"A6584SaidaItemCondLoteProdEmpId"});
   GridContainer.addRefreshingVar({rfrVar:"A6585SaidaItemCondLoteProdId"});
   GridContainer.addRefreshingVar({rfrVar:"AV69SaidaItemCondLoteProdId"});
   GridContainer.addRefreshingVar({rfrVar:"A6587SaidaItemCondLoteCombinacao"});
   GridContainer.addRefreshingVar({rfrVar:"AV70SaidaItemCondLoteCombinacao"});
   GridContainer.addRefreshingVar({rfrVar:"A6594SaidaItemCondQuantidade"});
   GridContainer.addRefreshingVar({rfrVar:"A6088SaidaSnAlteraSaldo"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hloteproduto());
