/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:2:51.80
*/
gx.evt.autoSkip = false;
gx.define('hrelatgiro', false, function () {
   this.ServerClass =  "hrelatgiro" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A2930ClassificacaoEstId=gx.fn.getControlValue("CLASSIFICACAOESTID") ;
      this.A2929ClassificacaoEstEmpresaId=gx.fn.getControlValue("CLASSIFICACAOESTEMPRESAID") ;
      this.AV29ClassificacaoEstEmpresaId=gx.fn.getControlValue("vCLASSIFICACAOESTEMPRESAID") ;
      this.A2922ClassificacaoEstDescricao=gx.fn.getControlValue("CLASSIFICACAOESTDESCRICAO") ;
      this.A2937CodificacaoEstId=gx.fn.getControlValue("CODIFICACAOESTID") ;
      this.A2936CodificacaoEstEmpresaId=gx.fn.getControlValue("CODIFICACAOESTEMPRESAID") ;
      this.AV31CodificacaoEstEmpresaId=gx.fn.getControlValue("vCODIFICACAOESTEMPRESAID") ;
      this.A2932CodificacaoEstDescricao=gx.fn.getControlValue("CODIFICACAOESTDESCRICAO") ;
      this.AV54SNNovaLinhaFamilia=gx.fn.getControlValue("vSNNOVALINHAFAMILIA") ;
      this.AV49snErro=gx.fn.getControlValue("vSNERRO") ;
      this.AV60snExcluiFamilia=gx.fn.getControlValue("vSNEXCLUIFAMILIA") ;
      this.AV73SNNovaLinhaFabricante=gx.fn.getControlValue("vSNNOVALINHAFABRICANTE") ;
      this.AV74snExcluiFabricante=gx.fn.getControlValue("vSNEXCLUIFABRICANTE") ;
      this.AV53SdtFamiliaRelProduto=gx.fn.getControlValue("vSDTFAMILIARELPRODUTO") ;
   };
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
   this.s192_client=function()
   {
      this.AV84DataInicialStr =  "01/" + this.AV32MesApuracaoIni + "/" + this.AV34AnoApuracaoIni  ;
      this.AV85DataInicial =  gx.date.ctod( this.AV84DataInicialStr, "DMY4")  ;
      this.AV86DataFinal =  gx.date.eom( this.AV85DataInicial)  ;
      this.AV87IntervaloDias = gx.num.trunc( gx.date.daysDiff( ( gx.date.addDays( this.AV86DataFinal , + ( 1 )) ) , this.AV85DataInicial ) ,0) ;
   };
   this.e111be2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e121be2_client=function()
   {
      this.executeServerEvent("'CONFIRMAR'", false, null, false, false);
   };
   this.e131be2_client=function()
   {
      this.executeServerEvent("VFORMAORDENACAO.CLICK", true, null, false, true);
   };
   this.e141be2_client=function()
   {
      this.executeServerEvent("'LINHAGRIDFAMILIA'", true, null, false, false);
   };
   this.e191be2_client=function()
   {
      this.executeServerEvent("'EXCLUILINHAGRIDFAMILIA'", true, arguments[0], false, false);
   };
   this.e151be2_client=function()
   {
      this.executeServerEvent("'LINHAGRIDFABRICANTE'", true, null, false, false);
   };
   this.e221be2_client=function()
   {
      this.executeServerEvent("'EXCLUILINHAGRIDFABRICANTE'", true, arguments[0], false, false);
   };
   this.e231be2_client=function()
   {
      this.executeServerEvent("VPRODUTOFABRICANTEID.ISVALID", true, arguments[0], false, false);
   };
   this.e201be2_client=function()
   {
      this.executeServerEvent("VPRODUTOFAMILIAID.ISVALID", true, arguments[0], false, false);
   };
   this.e241be2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e251be2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,10,13,16,18,19,20,23,25,28,30,33,35,38,40,43,45,50,53,55,58,60,62,64,66,68,70,73,75,78,80,83,85,88,90,92,95,97,104,107,110,113,115,117,118,119,120,121,122,127,130,132,134,135,136,137,138,139,148,149,150,153,155];
   this.GXLastCtrlId =155;
   this.GridfamiliaContainer = new gx.grid.grid(this, 2,"WbpLvl2",116,"Gridfamilia","Gridfamilia","GridfamiliaContainer",this.CmpContext,this.IsMasterPage,"hrelatgiro",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridfamiliaContainer = this.GridfamiliaContainer;
   GridfamiliaContainer.addSingleLineEdit("Produtofamiliaid",117,"vPRODUTOFAMILIAID","Família","","ProdutoFamiliaId","char",0,"px",15,15,"left",null,[],"Produtofamiliaid","ProdutoFamiliaId",true,0,false,false,"Attribute",1,"");
   GridfamiliaContainer.addBitmap("&Promptfamilia","vPROMPTFAMILIA",118,0,"px",17,"px",null,"","","GridColumnImage","");
   GridfamiliaContainer.addSingleLineEdit("Produtofamiliadescricao",119,"vPRODUTOFAMILIADESCRICAO","Descrição","","ProdutoFamiliaDescricao","svchar",350,"px",30,30,"left",null,[],"Produtofamiliadescricao","ProdutoFamiliaDescricao",true,0,false,false,"Attribute",1,"");
   GridfamiliaContainer.addBitmap("&Exclinhafamilia","vEXCLINHAFAMILIA",120,0,"px",17,"px","e191be2_client","","Exc","GridColumnImage","");
   GridfamiliaContainer.addSingleLineEdit("Controlalinhafamilia",121,"vCONTROLALINHAFAMILIA","Controla Linha Familia","","ControlaLinhaFamilia","int",0,"px",10,10,"right",null,[],"Controlalinhafamilia","ControlaLinhaFamilia",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridfamiliaContainer);
   this.GridfabricanteContainer = new gx.grid.grid(this, 8,"WbpLvl8",133,"Gridfabricante","Gridfabricante","GridfabricanteContainer",this.CmpContext,this.IsMasterPage,"hrelatgiro",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridfabricanteContainer = this.GridfabricanteContainer;
   GridfabricanteContainer.addSingleLineEdit("Produtofabricanteid",134,"vPRODUTOFABRICANTEID","Fabricante","","ProdutoFabricanteId","int",0,"px",7,7,"right",null,[],"Produtofabricanteid","ProdutoFabricanteId",true,0,false,false,"Attribute",1,"");
   GridfabricanteContainer.addBitmap("&Promptfabricante","vPROMPTFABRICANTE",135,0,"px",17,"px",null,"","","GridColumnImage","");
   GridfabricanteContainer.addSingleLineEdit("Produtofabricantefantasia",136,"vPRODUTOFABRICANTEFANTASIA","Nome","","ProdutoFabricanteFantasia","svchar",350,"px",60,60,"left",null,[],"Produtofabricantefantasia","ProdutoFabricanteFantasia",true,0,false,false,"Attribute",1,"");
   GridfabricanteContainer.addBitmap("&Exclinhafabricante","vEXCLINHAFABRICANTE",137,0,"px",17,"px","e221be2_client","","Exc","GridColumnImage","");
   GridfabricanteContainer.addSingleLineEdit("Controlalinhafabricante",138,"vCONTROLALINHAFABRICANTE","Controla Linha Fabricante","","ControlaLinhaFabricante","int",0,"px",10,10,"right",null,[],"Controlalinhafabricante","ControlaLinhaFabricante",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridfabricanteContainer);
   this.TABCSSContainer = gx.uc.getNew(this, 9, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV99Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV99Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV99Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "hrelatgiro_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   this.HDMASKContainer = gx.uc.getNew(this, 151, 18, "HDMask", "HDMASKContainer", "Hdmask");
   var HDMASKContainer = this.HDMASKContainer;
   HDMASKContainer.setDynProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKContainer.setDynProp("Picture", "Picture", "", "str");
   HDMASKContainer.setProp("Default", "Default", "", "str");
   HDMASKContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKContainer.setProp("Reverse", "Reverse", false, "bool");
   HDMASKContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKContainer.setProp("UnmaskedChars", "Unmaskedchars", "[(),.:/ -]", "str");
   HDMASKContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKContainer.setProp("FixedChars", "Fixedchars", "[(),.:/ -]", "str");
   HDMASKContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKContainer.setProp("ControlType", "Controltype", "Grid", "str");
   HDMASKContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKContainer.setProp("Class", "Class", "", "char");
   HDMASKContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[10]={fld:"TAB1",grid:0};
   GXValidFnc[13]={fld:"TABLE01",grid:0};
   GXValidFnc[16]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV76FilialEmpresaId",gxold:"OV76FilialEmpresaId",gxvar:"AV76FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV76FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV76FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV76FilialEmpresaId,0)},c2v:function(){gx.O.AV76FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV23FilialId",gxold:"OV23FilialId",gxvar:"AV23FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV23FilialId,0)},c2v:function(){gx.O.AV23FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[20]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV24FilialNome",gxold:"OV24FilialNome",gxvar:"AV24FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24FilialNome=Value},v2z:function(Value){gx.O.ZV24FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV24FilialNome,0)},c2v:function(){gx.O.AV24FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPORELATORIO",gxz:"ZV25TipoRelatorio",gxold:"OV25TipoRelatorio",gxvar:"AV25TipoRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV25TipoRelatorio=Value},v2z:function(Value){gx.O.ZV25TipoRelatorio=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPORELATORIO",gx.O.AV25TipoRelatorio)},c2v:function(){gx.O.AV25TipoRelatorio=this.val()},val:function(){return gx.fn.getControlValue("vTIPORELATORIO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFORMAORDENACAO",gxz:"ZV26FormaOrdenacao",gxold:"OV26FormaOrdenacao",gxvar:"AV26FormaOrdenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV26FormaOrdenacao=Value},v2z:function(Value){gx.O.ZV26FormaOrdenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vFORMAORDENACAO",gx.O.AV26FormaOrdenacao)},c2v:function(){gx.O.AV26FormaOrdenacao=this.val()},val:function(){return gx.fn.getControlValue("vFORMAORDENACAO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIDENTIFICACAOPRODUTO",gxz:"ZV27IdentificacaoProduto",gxold:"OV27IdentificacaoProduto",gxvar:"AV27IdentificacaoProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV27IdentificacaoProduto=Value},v2z:function(Value){gx.O.ZV27IdentificacaoProduto=Value},v2c:function(){gx.fn.setComboBoxValue("vIDENTIFICACAOPRODUTO",gx.O.AV27IdentificacaoProduto)},c2v:function(){gx.O.AV27IdentificacaoProduto=this.val()},val:function(){return gx.fn.getControlValue("vIDENTIFICACAOPRODUTO")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSCODIFICACAO",gxz:"ZV28ClassCodificacao",gxold:"OV28ClassCodificacao",gxvar:"AV28ClassCodificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28ClassCodificacao=Value},v2z:function(Value){gx.O.ZV28ClassCodificacao=Value},v2c:function(){gx.fn.setComboBoxValue("vCLASSCODIFICACAO",gx.O.AV28ClassCodificacao)},c2v:function(){gx.O.AV28ClassCodificacao=this.val()},val:function(){return gx.fn.getControlValue("vCLASSCODIFICACAO")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEDIAS",gxz:"ZV30QtdeDias",gxold:"OV30QtdeDias",gxvar:"AV30QtdeDias",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30QtdeDias=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30QtdeDias=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEDIAS",gx.O.AV30QtdeDias,0)},c2v:function(){gx.O.AV30QtdeDias=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEDIAS",'.')},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[53]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[55]={fld:"TABLE4",grid:0};
   GXValidFnc[58]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESANOINI",gxz:"ZV90MesAnoIni",gxold:"OV90MesAnoIni",gxvar:"AV90MesAnoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV90MesAnoIni=Value},v2z:function(Value){gx.O.ZV90MesAnoIni=Value},v2c:function(){gx.fn.setControlValue("vMESANOINI",gx.O.AV90MesAnoIni,0)},c2v:function(){gx.O.AV90MesAnoIni=this.val()},val:function(){return gx.fn.getControlValue("vMESANOINI")},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[62]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOINI",gxz:"ZV92AnoIni",gxold:"OV92AnoIni",gxvar:"AV92AnoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV92AnoIni=Value},v2z:function(Value){gx.O.ZV92AnoIni=Value},v2c:function(){gx.fn.setControlValue("vANOINI",gx.O.AV92AnoIni,0)},c2v:function(){gx.O.AV92AnoIni=this.val()},val:function(){return gx.fn.getControlValue("vANOINI")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESANOFIN",gxz:"ZV91MesAnoFin",gxold:"OV91MesAnoFin",gxvar:"AV91MesAnoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV91MesAnoFin=Value},v2z:function(Value){gx.O.ZV91MesAnoFin=Value},v2c:function(){gx.fn.setControlValue("vMESANOFIN",gx.O.AV91MesAnoFin,0)},c2v:function(){gx.O.AV91MesAnoFin=this.val()},val:function(){return gx.fn.getControlValue("vMESANOFIN")},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOFIN",gxz:"ZV93AnoFin",gxold:"OV93AnoFin",gxvar:"AV93AnoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV93AnoFin=Value},v2z:function(Value){gx.O.ZV93AnoFin=Value},v2c:function(){gx.fn.setControlValue("vANOFIN",gx.O.AV93AnoFin,0)},c2v:function(){gx.O.AV93AnoFin=this.val()},val:function(){return gx.fn.getControlValue("vANOFIN")},nac:gx.falseFn};
   GXValidFnc[73]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITUACAOPRODUTO",gxz:"ZV36SituacaoProduto",gxold:"OV36SituacaoProduto",gxvar:"AV36SituacaoProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV36SituacaoProduto=Value},v2z:function(Value){gx.O.ZV36SituacaoProduto=Value},v2c:function(){gx.fn.setComboBoxValue("vSITUACAOPRODUTO",gx.O.AV36SituacaoProduto)},c2v:function(){gx.O.AV36SituacaoProduto=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAOPRODUTO")},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOPRODUTO",gxz:"ZV37TipoProduto",gxold:"OV37TipoProduto",gxvar:"AV37TipoProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37TipoProduto=Value},v2z:function(Value){gx.O.ZV37TipoProduto=Value},v2c:function(){gx.fn.setControlValue("vTIPOPRODUTO",gx.O.AV37TipoProduto,0)},c2v:function(){gx.O.AV37TipoProduto=this.val()},val:function(){return gx.fn.getControlValue("vTIPOPRODUTO")},nac:gx.falseFn};
   GXValidFnc[83]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[85]={fld:"TABLE7",grid:0};
   GXValidFnc[88]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREFERENCIAINI",gxz:"ZV38ReferenciaIni",gxold:"OV38ReferenciaIni",gxvar:"AV38ReferenciaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38ReferenciaIni=Value},v2z:function(Value){gx.O.ZV38ReferenciaIni=Value},v2c:function(){gx.fn.setControlValue("vREFERENCIAINI",gx.O.AV38ReferenciaIni,0)},c2v:function(){gx.O.AV38ReferenciaIni=this.val()},val:function(){return gx.fn.getControlValue("vREFERENCIAINI")},nac:gx.falseFn};
   GXValidFnc[90]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[92]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREFERENCIAFIN",gxz:"ZV39ReferenciaFin",gxold:"OV39ReferenciaFin",gxvar:"AV39ReferenciaFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39ReferenciaFin=Value},v2z:function(Value){gx.O.ZV39ReferenciaFin=Value},v2c:function(){gx.fn.setControlValue("vREFERENCIAFIN",gx.O.AV39ReferenciaFin,0)},c2v:function(){gx.O.AV39ReferenciaFin=this.val()},val:function(){return gx.fn.getControlValue("vREFERENCIAFIN")},nac:gx.falseFn};
   GXValidFnc[95]={fld:"ESQUEMALABEL", format:0,grid:0};
   GXValidFnc[97]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESQUEMAID",gxz:"ZV41EsquemaId",gxold:"OV41EsquemaId",gxvar:"AV41EsquemaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41EsquemaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41EsquemaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESQUEMAID",gx.O.AV41EsquemaId,0)},c2v:function(){gx.O.AV41EsquemaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESQUEMAID",'.')},nac:gx.falseFn};
   GXValidFnc[104]={fld:"TAB2",grid:0};
   GXValidFnc[107]={fld:"TABLE3",grid:0};
   GXValidFnc[110]={fld:"OPCOESSELECAO1", format:0,grid:0};
   GXValidFnc[113]={fld:"INCLUIFAMILIA",grid:0};
   GXValidFnc[115]={fld:"DIV3", format:2,grid:0};
   GXValidFnc[117]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:116,gxgrid:this.GridfamiliaContainer,fnc:this.Validv_Produtofamiliaid,isvalid:'e201be2_client',rgrid:[],fld:"vPRODUTOFAMILIAID",gxz:"ZV42ProdutoFamiliaId",gxold:"OV42ProdutoFamiliaId",gxvar:"AV42ProdutoFamiliaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV42ProdutoFamiliaId=Value},v2z:function(Value){gx.O.ZV42ProdutoFamiliaId=Value},v2c:function(row){gx.fn.setGridControlValue("vPRODUTOFAMILIAID",row || gx.fn.currentGridRowImpl(116),gx.O.AV42ProdutoFamiliaId,0)},c2v:function(){gx.O.AV42ProdutoFamiliaId=this.val()},val:function(row){return gx.fn.getGridControlValue("vPRODUTOFAMILIAID",row || gx.fn.currentGridRowImpl(116))},nac:gx.falseFn};
   GXValidFnc[118]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:116,gxgrid:this.GridfamiliaContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPROMPTFAMILIA",gxz:"ZV43promptFamilia",gxold:"OV43promptFamilia",gxvar:"AV43promptFamilia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV43promptFamilia=Value},v2z:function(Value){gx.O.ZV43promptFamilia=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vPROMPTFAMILIA",row || gx.fn.currentGridRowImpl(116),gx.O.AV43promptFamilia,gx.O.AV106Promptfamilia_GXI)},c2v:function(){gx.O.AV106Promptfamilia_GXI=this.val_GXI();gx.O.AV43promptFamilia=this.val()},val:function(row){return gx.fn.getGridControlValue("vPROMPTFAMILIA",row || gx.fn.currentGridRowImpl(116))},val_GXI:function(row){return gx.fn.getGridControlValue("vPROMPTFAMILIA_GXI",row || gx.fn.currentGridRowImpl(116))}, gxvar_GXI:'AV106Promptfamilia_GXI',nac:gx.falseFn};
   GXValidFnc[119]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:116,gxgrid:this.GridfamiliaContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOFAMILIADESCRICAO",gxz:"ZV44ProdutoFamiliaDescricao",gxold:"OV44ProdutoFamiliaDescricao",gxvar:"AV44ProdutoFamiliaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV44ProdutoFamiliaDescricao=Value},v2z:function(Value){gx.O.ZV44ProdutoFamiliaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vPRODUTOFAMILIADESCRICAO",row || gx.fn.currentGridRowImpl(116),gx.O.AV44ProdutoFamiliaDescricao,0)},c2v:function(){gx.O.AV44ProdutoFamiliaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vPRODUTOFAMILIADESCRICAO",row || gx.fn.currentGridRowImpl(116))},nac:gx.falseFn};
   GXValidFnc[120]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:116,gxgrid:this.GridfamiliaContainer,fnc:null,isvalid:null,rgrid:[],fld:"vEXCLINHAFAMILIA",gxz:"ZV45excLinhaFamilia",gxold:"OV45excLinhaFamilia",gxvar:"AV45excLinhaFamilia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV45excLinhaFamilia=Value},v2z:function(Value){gx.O.ZV45excLinhaFamilia=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vEXCLINHAFAMILIA",row || gx.fn.currentGridRowImpl(116),gx.O.AV45excLinhaFamilia,gx.O.AV107Exclinhafamilia_GXI)},c2v:function(){gx.O.AV107Exclinhafamilia_GXI=this.val_GXI();gx.O.AV45excLinhaFamilia=this.val()},val:function(row){return gx.fn.getGridControlValue("vEXCLINHAFAMILIA",row || gx.fn.currentGridRowImpl(116))},val_GXI:function(row){return gx.fn.getGridControlValue("vEXCLINHAFAMILIA_GXI",row || gx.fn.currentGridRowImpl(116))}, gxvar_GXI:'AV107Exclinhafamilia_GXI',nac:gx.falseFn};
   GXValidFnc[121]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:116,gxgrid:this.GridfamiliaContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTROLALINHAFAMILIA",gxz:"ZV46ControlaLinhaFamilia",gxold:"OV46ControlaLinhaFamilia",gxvar:"AV46ControlaLinhaFamilia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV46ControlaLinhaFamilia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV46ControlaLinhaFamilia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vCONTROLALINHAFAMILIA",row || gx.fn.currentGridRowImpl(116),gx.O.AV46ControlaLinhaFamilia,0)},c2v:function(){gx.O.AV46ControlaLinhaFamilia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vCONTROLALINHAFAMILIA",row || gx.fn.currentGridRowImpl(116),'.')},nac:gx.falseFn};
   GXValidFnc[122]={fld:"DIV4", format:2,grid:0};
   GXValidFnc[127]={fld:"OPCOESSELECAO2", format:0,grid:0};
   GXValidFnc[130]={fld:"INCLUIFABRICANTE",grid:0};
   GXValidFnc[132]={fld:"DIV5", format:2,grid:0};
   GXValidFnc[134]={lvl:8,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:133,gxgrid:this.GridfabricanteContainer,fnc:this.Validv_Produtofabricanteid,isvalid:'e231be2_client',rgrid:[],fld:"vPRODUTOFABRICANTEID",gxz:"ZV65ProdutoFabricanteId",gxold:"OV65ProdutoFabricanteId",gxvar:"AV65ProdutoFabricanteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV65ProdutoFabricanteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV65ProdutoFabricanteId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vPRODUTOFABRICANTEID",row || gx.fn.currentGridRowImpl(133),gx.O.AV65ProdutoFabricanteId,0)},c2v:function(){gx.O.AV65ProdutoFabricanteId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vPRODUTOFABRICANTEID",row || gx.fn.currentGridRowImpl(133),'.')},nac:gx.falseFn};
   GXValidFnc[135]={lvl:8,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:133,gxgrid:this.GridfabricanteContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPROMPTFABRICANTE",gxz:"ZV66promptFabricante",gxold:"OV66promptFabricante",gxvar:"AV66promptFabricante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV66promptFabricante=Value},v2z:function(Value){gx.O.ZV66promptFabricante=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vPROMPTFABRICANTE",row || gx.fn.currentGridRowImpl(133),gx.O.AV66promptFabricante,gx.O.AV108Promptfabricante_GXI)},c2v:function(){gx.O.AV108Promptfabricante_GXI=this.val_GXI();gx.O.AV66promptFabricante=this.val()},val:function(row){return gx.fn.getGridControlValue("vPROMPTFABRICANTE",row || gx.fn.currentGridRowImpl(133))},val_GXI:function(row){return gx.fn.getGridControlValue("vPROMPTFABRICANTE_GXI",row || gx.fn.currentGridRowImpl(133))}, gxvar_GXI:'AV108Promptfabricante_GXI',nac:gx.falseFn};
   GXValidFnc[136]={lvl:8,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:133,gxgrid:this.GridfabricanteContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOFABRICANTEFANTASIA",gxz:"ZV67ProdutoFabricanteFantasia",gxold:"OV67ProdutoFabricanteFantasia",gxvar:"AV67ProdutoFabricanteFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV67ProdutoFabricanteFantasia=Value},v2z:function(Value){gx.O.ZV67ProdutoFabricanteFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("vPRODUTOFABRICANTEFANTASIA",row || gx.fn.currentGridRowImpl(133),gx.O.AV67ProdutoFabricanteFantasia,0)},c2v:function(){gx.O.AV67ProdutoFabricanteFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("vPRODUTOFABRICANTEFANTASIA",row || gx.fn.currentGridRowImpl(133))},nac:gx.falseFn};
   GXValidFnc[137]={lvl:8,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:133,gxgrid:this.GridfabricanteContainer,fnc:null,isvalid:null,rgrid:[],fld:"vEXCLINHAFABRICANTE",gxz:"ZV68excLinhaFabricante",gxold:"OV68excLinhaFabricante",gxvar:"AV68excLinhaFabricante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV68excLinhaFabricante=Value},v2z:function(Value){gx.O.ZV68excLinhaFabricante=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vEXCLINHAFABRICANTE",row || gx.fn.currentGridRowImpl(133),gx.O.AV68excLinhaFabricante,gx.O.AV109Exclinhafabricante_GXI)},c2v:function(){gx.O.AV109Exclinhafabricante_GXI=this.val_GXI();gx.O.AV68excLinhaFabricante=this.val()},val:function(row){return gx.fn.getGridControlValue("vEXCLINHAFABRICANTE",row || gx.fn.currentGridRowImpl(133))},val_GXI:function(row){return gx.fn.getGridControlValue("vEXCLINHAFABRICANTE_GXI",row || gx.fn.currentGridRowImpl(133))}, gxvar_GXI:'AV109Exclinhafabricante_GXI',nac:gx.falseFn};
   GXValidFnc[138]={lvl:8,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:133,gxgrid:this.GridfabricanteContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTROLALINHAFABRICANTE",gxz:"ZV69ControlaLinhaFabricante",gxold:"OV69ControlaLinhaFabricante",gxvar:"AV69ControlaLinhaFabricante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV69ControlaLinhaFabricante=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV69ControlaLinhaFabricante=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vCONTROLALINHAFABRICANTE",row || gx.fn.currentGridRowImpl(133),gx.O.AV69ControlaLinhaFabricante,0)},c2v:function(){gx.O.AV69ControlaLinhaFabricante=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vCONTROLALINHAFABRICANTE",row || gx.fn.currentGridRowImpl(133),'.')},nac:gx.falseFn};
   GXValidFnc[139]={fld:"DIV6", format:2,grid:0};
   GXValidFnc[148]={fld:"JS", format:2,grid:0};
   GXValidFnc[149]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Familiaempresaid,isvalid:null,rgrid:[],fld:"vFAMILIAEMPRESAID",gxz:"ZV55FamiliaEmpresaId",gxold:"OV55FamiliaEmpresaId",gxvar:"AV55FamiliaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55FamiliaEmpresaId=Value},v2z:function(Value){gx.O.ZV55FamiliaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAEMPRESAID",gx.O.AV55FamiliaEmpresaId,0)},c2v:function(){gx.O.AV55FamiliaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[150]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaempresaid,isvalid:null,rgrid:[],fld:"vPESSOAEMPRESAID",gxz:"ZV70PessoaEmpresaId",gxold:"OV70PessoaEmpresaId",gxvar:"AV70PessoaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70PessoaEmpresaId=Value},v2z:function(Value){gx.O.ZV70PessoaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMPRESAID",gx.O.AV70PessoaEmpresaId,0)},c2v:function(){gx.O.AV70PessoaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[153]={fld:"BTNHELP",grid:0};
   GXValidFnc[155]={fld:"PROMPT_FILIALID",grid:0};
   this.AV76FilialEmpresaId = "" ;
   this.ZV76FilialEmpresaId = "" ;
   this.OV76FilialEmpresaId = "" ;
   this.AV23FilialId = 0 ;
   this.ZV23FilialId = 0 ;
   this.OV23FilialId = 0 ;
   this.AV24FilialNome = "" ;
   this.ZV24FilialNome = "" ;
   this.OV24FilialNome = "" ;
   this.AV25TipoRelatorio = "" ;
   this.ZV25TipoRelatorio = "" ;
   this.OV25TipoRelatorio = "" ;
   this.AV26FormaOrdenacao = "" ;
   this.ZV26FormaOrdenacao = "" ;
   this.OV26FormaOrdenacao = "" ;
   this.AV27IdentificacaoProduto = "" ;
   this.ZV27IdentificacaoProduto = "" ;
   this.OV27IdentificacaoProduto = "" ;
   this.AV28ClassCodificacao = "" ;
   this.ZV28ClassCodificacao = "" ;
   this.OV28ClassCodificacao = "" ;
   this.AV30QtdeDias = 0 ;
   this.ZV30QtdeDias = 0 ;
   this.OV30QtdeDias = 0 ;
   this.AV90MesAnoIni = "" ;
   this.ZV90MesAnoIni = "" ;
   this.OV90MesAnoIni = "" ;
   this.AV92AnoIni = "" ;
   this.ZV92AnoIni = "" ;
   this.OV92AnoIni = "" ;
   this.AV91MesAnoFin = "" ;
   this.ZV91MesAnoFin = "" ;
   this.OV91MesAnoFin = "" ;
   this.AV93AnoFin = "" ;
   this.ZV93AnoFin = "" ;
   this.OV93AnoFin = "" ;
   this.AV36SituacaoProduto = "" ;
   this.ZV36SituacaoProduto = "" ;
   this.OV36SituacaoProduto = "" ;
   this.AV37TipoProduto = "" ;
   this.ZV37TipoProduto = "" ;
   this.OV37TipoProduto = "" ;
   this.AV38ReferenciaIni = "" ;
   this.ZV38ReferenciaIni = "" ;
   this.OV38ReferenciaIni = "" ;
   this.AV39ReferenciaFin = "" ;
   this.ZV39ReferenciaFin = "" ;
   this.OV39ReferenciaFin = "" ;
   this.AV41EsquemaId = 0 ;
   this.ZV41EsquemaId = 0 ;
   this.OV41EsquemaId = 0 ;
   this.ZV42ProdutoFamiliaId = "" ;
   this.OV42ProdutoFamiliaId = "" ;
   this.ZV43promptFamilia = "" ;
   this.OV43promptFamilia = "" ;
   this.ZV44ProdutoFamiliaDescricao = "" ;
   this.OV44ProdutoFamiliaDescricao = "" ;
   this.ZV45excLinhaFamilia = "" ;
   this.OV45excLinhaFamilia = "" ;
   this.ZV46ControlaLinhaFamilia = 0 ;
   this.OV46ControlaLinhaFamilia = 0 ;
   this.ZV65ProdutoFabricanteId = 0 ;
   this.OV65ProdutoFabricanteId = 0 ;
   this.ZV66promptFabricante = "" ;
   this.OV66promptFabricante = "" ;
   this.ZV67ProdutoFabricanteFantasia = "" ;
   this.OV67ProdutoFabricanteFantasia = "" ;
   this.ZV68excLinhaFabricante = "" ;
   this.OV68excLinhaFabricante = "" ;
   this.ZV69ControlaLinhaFabricante = 0 ;
   this.OV69ControlaLinhaFabricante = 0 ;
   this.AV55FamiliaEmpresaId = "" ;
   this.ZV55FamiliaEmpresaId = "" ;
   this.OV55FamiliaEmpresaId = "" ;
   this.AV70PessoaEmpresaId = "" ;
   this.ZV70PessoaEmpresaId = "" ;
   this.OV70PessoaEmpresaId = "" ;
   this.AV99Tab = [ ] ;
   this.AV76FilialEmpresaId = "" ;
   this.AV23FilialId = 0 ;
   this.AV24FilialNome = "" ;
   this.AV25TipoRelatorio = "" ;
   this.AV26FormaOrdenacao = "" ;
   this.AV27IdentificacaoProduto = "" ;
   this.AV28ClassCodificacao = "" ;
   this.AV30QtdeDias = 0 ;
   this.AV90MesAnoIni = "" ;
   this.AV92AnoIni = "" ;
   this.AV91MesAnoFin = "" ;
   this.AV93AnoFin = "" ;
   this.AV36SituacaoProduto = "" ;
   this.AV37TipoProduto = "" ;
   this.AV38ReferenciaIni = "" ;
   this.AV39ReferenciaFin = "" ;
   this.AV41EsquemaId = 0 ;
   this.AV55FamiliaEmpresaId = "" ;
   this.AV70PessoaEmpresaId = "" ;
   this.AV42ProdutoFamiliaId = "" ;
   this.AV43promptFamilia = "" ;
   this.AV44ProdutoFamiliaDescricao = "" ;
   this.AV45excLinhaFamilia = "" ;
   this.AV46ControlaLinhaFamilia = 0 ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.AV65ProdutoFabricanteId = 0 ;
   this.AV66promptFabricante = "" ;
   this.AV67ProdutoFabricanteFantasia = "" ;
   this.AV68excLinhaFabricante = "" ;
   this.AV69ControlaLinhaFabricante = 0 ;
   this.A2957FamiliaId = "" ;
   this.A2956FamiliaEmpresaId = "" ;
   this.A2936CodificacaoEstEmpresaId = "" ;
   this.A2932CodificacaoEstDescricao = "" ;
   this.A2937CodificacaoEstId = "" ;
   this.A2929ClassificacaoEstEmpresaId = "" ;
   this.A2922ClassificacaoEstDescricao = "" ;
   this.A2930ClassificacaoEstId = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.AV29ClassificacaoEstEmpresaId = "" ;
   this.AV31CodificacaoEstEmpresaId = "" ;
   this.AV54SNNovaLinhaFamilia = "" ;
   this.AV49snErro = "" ;
   this.AV60snExcluiFamilia = "" ;
   this.AV73SNNovaLinhaFabricante = "" ;
   this.AV74snExcluiFabricante = "" ;
   this.AV53SdtFamiliaRelProduto = [ ] ;
   this.AV87IntervaloDias = 0 ;
   this.AV86DataFinal = gx.date.nullDate() ;
   this.AV85DataInicial = gx.date.nullDate() ;
   this.AV34AnoApuracaoIni = "" ;
   this.AV32MesApuracaoIni = "" ;
   this.AV84DataInicialStr = "" ;
   this.Events = {"e111be2_client": ["'FECHAR'", true] ,"e121be2_client": ["'CONFIRMAR'", true] ,"e131be2_client": ["VFORMAORDENACAO.CLICK", true] ,"e141be2_client": ["'LINHAGRIDFAMILIA'", true] ,"e191be2_client": ["'EXCLUILINHAGRIDFAMILIA'", true] ,"e151be2_client": ["'LINHAGRIDFABRICANTE'", true] ,"e221be2_client": ["'EXCLUILINHAGRIDFABRICANTE'", true] ,"e231be2_client": ["VPRODUTOFABRICANTEID.ISVALID", true] ,"e201be2_client": ["VPRODUTOFAMILIAID.ISVALID", true] ,"e241be2_client": ["ENTER", true] ,"e251be2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDFAMILIA_nFirstRecordOnPage'},{av:'GRIDFAMILIA_nEOF'},{av:'AV43promptFamilia',fld:'vPROMPTFAMILIA',grid:116},{av:'AV45excLinhaFamilia',fld:'vEXCLINHAFAMILIA',grid:116},{av:'AV53SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'GRIDFABRICANTE_nFirstRecordOnPage'},{av:'GRIDFABRICANTE_nEOF'},{av:'AV66promptFabricante',fld:'vPROMPTFABRICANTE',grid:133},{av:'AV68excLinhaFabricante',fld:'vEXCLINHAFABRICANTE',grid:133},{av:'AV71SdtFabricanteRelProduto',fld:'vSDTFABRICANTERELPRODUTO'},{av:'AV26FormaOrdenacao',fld:'vFORMAORDENACAO'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV29ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2922ClassificacaoEstDescricao',fld:'CLASSIFICACAOESTDESCRICAO'},{av:'A2937CodificacaoEstId',fld:'CODIFICACAOESTID'},{av:'A2936CodificacaoEstEmpresaId',fld:'CODIFICACAOESTEMPRESAID'},{av:'AV31CodificacaoEstEmpresaId',fld:'vCODIFICACAOESTEMPRESAID'},{av:'A2932CodificacaoEstDescricao',fld:'CODIFICACAOESTDESCRICAO'},{av:'AV54SNNovaLinhaFamilia',fld:'vSNNOVALINHAFAMILIA'},{av:'AV49snErro',fld:'vSNERRO'},{av:'AV60snExcluiFamilia',fld:'vSNEXCLUIFAMILIA'},{av:'AV42ProdutoFamiliaId',fld:'vPRODUTOFAMILIAID',grid:116},{av:'AV44ProdutoFamiliaDescricao',fld:'vPRODUTOFAMILIADESCRICAO',grid:116},{av:'AV73SNNovaLinhaFabricante',fld:'vSNNOVALINHAFABRICANTE'},{av:'AV74snExcluiFabricante',fld:'vSNEXCLUIFABRICANTE'},{av:'AV65ProdutoFabricanteId',fld:'vPRODUTOFABRICANTEID',grid:133},{av:'AV67ProdutoFabricanteFantasia',fld:'vPRODUTOFABRICANTEFANTASIA',grid:133}],[{av:'AV28ClassCodificacao',fld:'vCLASSCODIFICACAO'},{av:'AV53SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'AV61Cont',fld:'vCONT'},{av:'AV118GXV2',fld:'vGXV2'},{av:'AV56SdtFamiliaRelProdutoItem',fld:'vSDTFAMILIARELPRODUTOITEM'},{av:'AV119GXV3',fld:'vGXV3'},{av:'AV71SdtFabricanteRelProduto',fld:'vSDTFABRICANTERELPRODUTO'},{av:'AV126GXV5',fld:'vGXV5'},{av:'AV72SdtFabricanteRelProdutoItem',fld:'vSDTFABRICANTERELPRODUTOITEM'},{av:'AV127GXV6',fld:'vGXV6'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'CONFIRMAR'"] = [[{av:'AV49snErro',fld:'vSNERRO'},{av:'AV23FilialId',fld:'vFILIALID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV76FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV90MesAnoIni',fld:'vMESANOINI'},{av:'AV92AnoIni',fld:'vANOINI'},{av:'AV91MesAnoFin',fld:'vMESANOFIN'},{av:'AV93AnoFin',fld:'vANOFIN'},{av:'AV39ReferenciaFin',fld:'vREFERENCIAFIN'},{av:'AV38ReferenciaIni',fld:'vREFERENCIAINI'},{av:'AV42ProdutoFamiliaId',fld:'vPRODUTOFAMILIAID',grid:116},{av:'AV54SNNovaLinhaFamilia',fld:'vSNNOVALINHAFAMILIA'},{av:'A2956FamiliaEmpresaId',fld:'FAMILIAEMPRESAID'},{av:'AV55FamiliaEmpresaId',fld:'vFAMILIAEMPRESAID'},{av:'A2957FamiliaId',fld:'FAMILIAID'},{av:'AV65ProdutoFabricanteId',fld:'vPRODUTOFABRICANTEID',grid:133},{av:'AV73SNNovaLinhaFabricante',fld:'vSNNOVALINHAFABRICANTE'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV70PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV25TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV26FormaOrdenacao',fld:'vFORMAORDENACAO'},{av:'AV27IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{av:'AV28ClassCodificacao',fld:'vCLASSCODIFICACAO'},{av:'AV30QtdeDias',fld:'vQTDEDIAS'},{av:'AV85DataInicial',fld:'vDATAINICIAL'},{av:'AV86DataFinal',fld:'vDATAFINAL'},{av:'AV36SituacaoProduto',fld:'vSITUACAOPRODUTO'},{av:'AV37TipoProduto',fld:'vTIPOPRODUTO'},{av:'AV41EsquemaId',fld:'vESQUEMAID'},{av:'AV87IntervaloDias',fld:'vINTERVALODIAS'},{av:'AV53SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'AV71SdtFabricanteRelProduto',fld:'vSDTFABRICANTERELPRODUTO'},{av:'AV32MesApuracaoIni',fld:'vMESAPURACAOINI'},{av:'AV34AnoApuracaoIni',fld:'vANOAPURACAOINI'}],[{av:'AV53SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'AV71SdtFabricanteRelProduto',fld:'vSDTFABRICANTERELPRODUTO'},{av:'AV49snErro',fld:'vSNERRO'},{av:'AV32MesApuracaoIni',fld:'vMESAPURACAOINI'},{av:'AV34AnoApuracaoIni',fld:'vANOAPURACAOINI'},{av:'AV33MesApuracaoFin',fld:'vMESAPURACAOFIN'},{av:'AV35AnoApuracaoFin',fld:'vANOAPURACAOFIN'},{av:'AV78MesInicial',fld:'vMESINICIAL'},{av:'AV79MesFinal',fld:'vMESFINAL'},{av:'AV121GXLvl447',fld:'vGXLVL447'},{av:'AV124GXLvl514',fld:'vGXLVL514'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV89SNImpDetalhe',fld:'vSNIMPDETALHE'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV87IntervaloDias',fld:'vINTERVALODIAS'},{av:'AV41EsquemaId',fld:'vESQUEMAID'},{av:'AV39ReferenciaFin',fld:'vREFERENCIAFIN'},{av:'AV38ReferenciaIni',fld:'vREFERENCIAINI'},{av:'AV37TipoProduto',fld:'vTIPOPRODUTO'},{av:'AV36SituacaoProduto',fld:'vSITUACAOPRODUTO'},{av:'AV86DataFinal',fld:'vDATAFINAL'},{av:'AV85DataInicial',fld:'vDATAINICIAL'},{av:'AV30QtdeDias',fld:'vQTDEDIAS'},{av:'AV28ClassCodificacao',fld:'vCLASSCODIFICACAO'},{av:'AV27IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{av:'AV26FormaOrdenacao',fld:'vFORMAORDENACAO'},{av:'AV25TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV23FilialId',fld:'vFILIALID'},{av:'AV76FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV84DataInicialStr',fld:'vDATAINICIALSTR'}]];
   this.EvtParms["VFORMAORDENACAO.CLICK"] = [[{av:'AV26FormaOrdenacao',fld:'vFORMAORDENACAO'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV29ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2922ClassificacaoEstDescricao',fld:'CLASSIFICACAOESTDESCRICAO'},{av:'A2937CodificacaoEstId',fld:'CODIFICACAOESTID'},{av:'A2936CodificacaoEstEmpresaId',fld:'CODIFICACAOESTEMPRESAID'},{av:'AV31CodificacaoEstEmpresaId',fld:'vCODIFICACAOESTEMPRESAID'},{av:'A2932CodificacaoEstDescricao',fld:'CODIFICACAOESTDESCRICAO'}],[{av:'AV28ClassCodificacao',fld:'vCLASSCODIFICACAO'}]];
   this.EvtParms["GRIDFAMILIA.LOAD"] = [[{av:'AV53SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'AV54SNNovaLinhaFamilia',fld:'vSNNOVALINHAFAMILIA'},{av:'AV49snErro',fld:'vSNERRO'}],[{av:'AV46ControlaLinhaFamilia',fld:'vCONTROLALINHAFAMILIA'},{av:'AV116GXV1',fld:'vGXV1'},{av:'AV56SdtFamiliaRelProdutoItem',fld:'vSDTFAMILIARELPRODUTOITEM'},{av:'AV42ProdutoFamiliaId',fld:'vPRODUTOFAMILIAID'},{av:'AV44ProdutoFamiliaDescricao',fld:'vPRODUTOFAMILIADESCRICAO'}]];
   this.EvtParms["'LINHAGRIDFAMILIA'"] = [[{av:'AV49snErro',fld:'vSNERRO'},{av:'AV42ProdutoFamiliaId',fld:'vPRODUTOFAMILIAID',grid:116},{av:'AV44ProdutoFamiliaDescricao',fld:'vPRODUTOFAMILIADESCRICAO',grid:116},{av:'AV54SNNovaLinhaFamilia',fld:'vSNNOVALINHAFAMILIA'},{av:'A2956FamiliaEmpresaId',fld:'FAMILIAEMPRESAID'},{av:'AV55FamiliaEmpresaId',fld:'vFAMILIAEMPRESAID'},{av:'A2957FamiliaId',fld:'FAMILIAID'}],[{av:'AV53SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'AV54SNNovaLinhaFamilia',fld:'vSNNOVALINHAFAMILIA'},{av:'AV56SdtFamiliaRelProdutoItem',fld:'vSDTFAMILIARELPRODUTOITEM'},{av:'AV49snErro',fld:'vSNERRO'},{av:'AV121GXLvl447',fld:'vGXLVL447'}]];
   this.EvtParms["'EXCLUILINHAGRIDFAMILIA'"] = [[{av:'AV46ControlaLinhaFamilia',fld:'vCONTROLALINHAFAMILIA'}],[{av:'AV53SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'AV60snExcluiFamilia',fld:'vSNEXCLUIFAMILIA'}]];
   this.EvtParms["GRIDFABRICANTE.LOAD"] = [[{av:'AV71SdtFabricanteRelProduto',fld:'vSDTFABRICANTERELPRODUTO'},{av:'AV73SNNovaLinhaFabricante',fld:'vSNNOVALINHAFABRICANTE'},{av:'AV49snErro',fld:'vSNERRO'}],[{av:'AV69ControlaLinhaFabricante',fld:'vCONTROLALINHAFABRICANTE'},{av:'AV122GXV4',fld:'vGXV4'},{av:'AV72SdtFabricanteRelProdutoItem',fld:'vSDTFABRICANTERELPRODUTOITEM'},{av:'AV65ProdutoFabricanteId',fld:'vPRODUTOFABRICANTEID'},{av:'AV67ProdutoFabricanteFantasia',fld:'vPRODUTOFABRICANTEFANTASIA'}]];
   this.EvtParms["'LINHAGRIDFABRICANTE'"] = [[{av:'AV49snErro',fld:'vSNERRO'},{av:'AV65ProdutoFabricanteId',fld:'vPRODUTOFABRICANTEID',grid:133},{av:'AV67ProdutoFabricanteFantasia',fld:'vPRODUTOFABRICANTEFANTASIA',grid:133},{av:'AV73SNNovaLinhaFabricante',fld:'vSNNOVALINHAFABRICANTE'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV70PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'}],[{av:'AV71SdtFabricanteRelProduto',fld:'vSDTFABRICANTERELPRODUTO'},{av:'AV73SNNovaLinhaFabricante',fld:'vSNNOVALINHAFABRICANTE'},{av:'AV72SdtFabricanteRelProdutoItem',fld:'vSDTFABRICANTERELPRODUTOITEM'},{av:'AV49snErro',fld:'vSNERRO'},{av:'AV124GXLvl514',fld:'vGXLVL514'}]];
   this.EvtParms["'EXCLUILINHAGRIDFABRICANTE'"] = [[{av:'AV69ControlaLinhaFabricante',fld:'vCONTROLALINHAFABRICANTE'}],[{av:'AV71SdtFabricanteRelProduto',fld:'vSDTFABRICANTERELPRODUTO'},{av:'AV74snExcluiFabricante',fld:'vSNEXCLUIFABRICANTE'}]];
   this.EvtParms["VPRODUTOFABRICANTEID.ISVALID"] = [[{av:'AV70PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV65ProdutoFabricanteId',fld:'vPRODUTOFABRICANTEID'}],[{av:'AV67ProdutoFabricanteFantasia',fld:'vPRODUTOFABRICANTEFANTASIA'}]];
   this.EvtParms["VPRODUTOFAMILIAID.ISVALID"] = [[{av:'AV55FamiliaEmpresaId',fld:'vFAMILIAEMPRESAID'},{av:'AV42ProdutoFamiliaId',fld:'vPRODUTOFAMILIAID'}],[{av:'AV44ProdutoFamiliaDescricao',fld:'vPRODUTOFAMILIADESCRICAO'}]];
   this.setPrompt("PROMPT_FILIALID", [19]);
   this.setPrompt("&PROMPTFAMILIA", [117]);
   this.setPrompt("&PROMPTFABRICANTE", [134]);
   this.setVCMap("AV82Nao", "vNAO", 0, "char");
   this.setVCMap("A2930ClassificacaoEstId", "CLASSIFICACAOESTID", 0, "char");
   this.setVCMap("A2929ClassificacaoEstEmpresaId", "CLASSIFICACAOESTEMPRESAID", 0, "char");
   this.setVCMap("AV29ClassificacaoEstEmpresaId", "vCLASSIFICACAOESTEMPRESAID", 0, "char");
   this.setVCMap("A2922ClassificacaoEstDescricao", "CLASSIFICACAOESTDESCRICAO", 0, "svchar");
   this.setVCMap("A2937CodificacaoEstId", "CODIFICACAOESTID", 0, "char");
   this.setVCMap("A2936CodificacaoEstEmpresaId", "CODIFICACAOESTEMPRESAID", 0, "char");
   this.setVCMap("AV31CodificacaoEstEmpresaId", "vCODIFICACAOESTEMPRESAID", 0, "char");
   this.setVCMap("A2932CodificacaoEstDescricao", "CODIFICACAOESTDESCRICAO", 0, "svchar");
   this.setVCMap("AV54SNNovaLinhaFamilia", "vSNNOVALINHAFAMILIA", 0, "char");
   this.setVCMap("AV49snErro", "vSNERRO", 0, "char");
   this.setVCMap("AV60snExcluiFamilia", "vSNEXCLUIFAMILIA", 0, "char");
   this.setVCMap("AV73SNNovaLinhaFabricante", "vSNNOVALINHAFABRICANTE", 0, "char");
   this.setVCMap("AV74snExcluiFabricante", "vSNEXCLUIFABRICANTE", 0, "char");
   this.setVCMap("AV53SdtFamiliaRelProduto", "vSDTFAMILIARELPRODUTO", 0, "CollSdtFamiliaRelProduto.SdtFamiliaRelProdutoItem");
   this.setVCMap("A2930ClassificacaoEstId", "CLASSIFICACAOESTID", 0, "char");
   this.setVCMap("A2929ClassificacaoEstEmpresaId", "CLASSIFICACAOESTEMPRESAID", 0, "char");
   this.setVCMap("AV29ClassificacaoEstEmpresaId", "vCLASSIFICACAOESTEMPRESAID", 0, "char");
   this.setVCMap("A2922ClassificacaoEstDescricao", "CLASSIFICACAOESTDESCRICAO", 0, "svchar");
   this.setVCMap("A2937CodificacaoEstId", "CODIFICACAOESTID", 0, "char");
   this.setVCMap("A2936CodificacaoEstEmpresaId", "CODIFICACAOESTEMPRESAID", 0, "char");
   this.setVCMap("AV31CodificacaoEstEmpresaId", "vCODIFICACAOESTEMPRESAID", 0, "char");
   this.setVCMap("A2932CodificacaoEstDescricao", "CODIFICACAOESTDESCRICAO", 0, "svchar");
   this.setVCMap("AV54SNNovaLinhaFamilia", "vSNNOVALINHAFAMILIA", 0, "char");
   this.setVCMap("AV49snErro", "vSNERRO", 0, "char");
   this.setVCMap("AV60snExcluiFamilia", "vSNEXCLUIFAMILIA", 0, "char");
   this.setVCMap("AV73SNNovaLinhaFabricante", "vSNNOVALINHAFABRICANTE", 0, "char");
   this.setVCMap("AV74snExcluiFabricante", "vSNEXCLUIFABRICANTE", 0, "char");
   this.setVCMap("AV53SdtFamiliaRelProduto", "vSDTFAMILIARELPRODUTO", 0, "CollSdtFamiliaRelProduto.SdtFamiliaRelProdutoItem");
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV43promptFamilia", rfrProp:"Value", gxAttId:"Promptfamilia"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV45excLinhaFamilia", rfrProp:"Value", gxAttId:"Exclinhafamilia"});
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridfamiliaContainer.addRefreshingVar({rfrVar:"A2930ClassificacaoEstId"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"A2929ClassificacaoEstEmpresaId"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV29ClassificacaoEstEmpresaId"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"A2922ClassificacaoEstDescricao"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"A2937CodificacaoEstId"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"A2936CodificacaoEstEmpresaId"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV31CodificacaoEstEmpresaId"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"A2932CodificacaoEstDescricao"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV54SNNovaLinhaFamilia"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV49snErro"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV60snExcluiFamilia"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV42ProdutoFamiliaId", rfrProp:"Value", gxAttId:"Produtofamiliaid"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV44ProdutoFamiliaDescricao", rfrProp:"Value", gxAttId:"Produtofamiliadescricao"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV73SNNovaLinhaFabricante"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV74snExcluiFabricante"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV65ProdutoFabricanteId", rfrProp:"Value", gxAttId:"Produtofabricanteid"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV67ProdutoFabricanteFantasia", rfrProp:"Value", gxAttId:"Produtofabricantefantasia"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV53SdtFamiliaRelProduto"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV66promptFabricante", rfrProp:"Value", gxAttId:"Promptfabricante"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV68excLinhaFabricante", rfrProp:"Value", gxAttId:"Exclinhafabricante"});
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridfabricanteContainer.addRefreshingVar({rfrVar:"A2930ClassificacaoEstId"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"A2929ClassificacaoEstEmpresaId"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV29ClassificacaoEstEmpresaId"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"A2922ClassificacaoEstDescricao"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"A2937CodificacaoEstId"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"A2936CodificacaoEstEmpresaId"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV31CodificacaoEstEmpresaId"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"A2932CodificacaoEstDescricao"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV54SNNovaLinhaFamilia"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV49snErro"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV60snExcluiFamilia"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV42ProdutoFamiliaId", rfrProp:"Value", gxAttId:"Produtofamiliaid"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV44ProdutoFamiliaDescricao", rfrProp:"Value", gxAttId:"Produtofamiliadescricao"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV73SNNovaLinhaFabricante"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV74snExcluiFabricante"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV65ProdutoFabricanteId", rfrProp:"Value", gxAttId:"Produtofabricanteid"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV67ProdutoFabricanteFantasia", rfrProp:"Value", gxAttId:"Produtofabricantefantasia"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV71SdtFabricanteRelProduto"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelatgiro());
