/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:17:17.40
*/
gx.evt.autoSkip = false;
gx.define('hrelacaogiro', false, function () {
   this.ServerClass =  "hrelacaogiro" ;
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
      this.AV140Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV124SdtTxtTela=gx.fn.getControlValue("vSDTTXTTELA") ;
      this.AV8EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
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
   this.Validv_Esquemaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vESQUEMAID");
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
   this.s232_client=function()
   {
      this.AV84DataInicialStr =  "01/" + this.AV32MesApuracaoIni + "/" + this.AV34AnoApuracaoIni  ;
      this.AV85DataInicial =  gx.date.ctod( this.AV84DataInicialStr, "DMY4")  ;
      this.AV118DataFinalStr =  "01/" + this.AV33MesApuracaoFin + "/" + this.AV35AnoApuracaoFin  ;
      this.AV86DataFinal =  gx.date.ctod( this.AV118DataFinalStr, "DMY4")  ;
      this.AV86DataFinal =  gx.date.eom( this.AV86DataFinal)  ;
      this.AV87IntervaloDias = gx.num.trunc( gx.date.daysDiff( ( gx.date.addDays( this.AV86DataFinal , + ( 1 )) ) , this.AV85DataInicial ) ,0) ;
   };
   this.e111d02_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e121d02_client=function()
   {
      this.executeServerEvent("'CONFIRMAR'", false, null, false, false);
   };
   this.e131d02_client=function()
   {
      this.executeServerEvent("VFORMAORDENACAO.CLICK", true, null, false, true);
   };
   this.e141d02_client=function()
   {
      this.executeServerEvent("'LINHAGRIDFAMILIA'", true, null, false, false);
   };
   this.e221d02_client=function()
   {
      this.executeServerEvent("'EXCLUILINHAGRIDFAMILIA'", true, arguments[0], false, false);
   };
   this.e151d02_client=function()
   {
      this.executeServerEvent("'LINHAGRIDFABRICANTE'", true, null, false, false);
   };
   this.e251d02_client=function()
   {
      this.executeServerEvent("'EXCLUILINHAGRIDFABRICANTE'", true, arguments[0], false, false);
   };
   this.e161d02_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e171d02_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e181d02_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e231d02_client=function()
   {
      this.executeServerEvent("VPRODUTOFAMILIAID.ISVALID", true, arguments[0], false, false);
   };
   this.e261d02_client=function()
   {
      this.executeServerEvent("VPRODUTOFABRICANTEID.ISVALID", true, arguments[0], false, false);
   };
   this.e271d02_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e281d02_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,12,14,18,21,24,26,27,28,31,33,37,39,43,45,49,51,55,57,63,68,70,73,75,77,79,81,83,85,89,91,95,97,101,103,106,108,110,114,116,117,118,120,123,126,129,131,133,134,135,136,137,138,139,140,143,146,149,151,153,154,155,156,157,158,164,170,171,173,174,175,176,178];
   this.GXLastCtrlId =178;
   this.GridfamiliaContainer = new gx.grid.grid(this, 2,"WbpLvl2",132,"Gridfamilia","Gridfamilia","GridfamiliaContainer",this.CmpContext,this.IsMasterPage,"hrelacaogiro",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridfamiliaContainer = this.GridfamiliaContainer;
   GridfamiliaContainer.addSingleLineEdit("Produtofamiliaid",133,"vPRODUTOFAMILIAID","Família","","ProdutoFamiliaId","char",0,"px",15,15,"left",null,[],"Produtofamiliaid","ProdutoFamiliaId",true,0,false,false,"Attribute",1,"");
   GridfamiliaContainer.addBitmap("&Promptfamilia","vPROMPTFAMILIA",134,0,"px",17,"px",null,"","","GridColumnImage","");
   GridfamiliaContainer.addSingleLineEdit("Produtofamiliadescricao",135,"vPRODUTOFAMILIADESCRICAO","Descrição","","ProdutoFamiliaDescricao","svchar",350,"px",30,30,"left",null,[],"Produtofamiliadescricao","ProdutoFamiliaDescricao",true,0,false,false,"Attribute",1,"");
   GridfamiliaContainer.addBitmap("&Exclinhafamilia","vEXCLINHAFAMILIA",136,0,"px",17,"px","e221d02_client","","Exc","GridColumnImage","");
   GridfamiliaContainer.addSingleLineEdit("Controlalinhafamilia",137,"vCONTROLALINHAFAMILIA","Controla Linha Familia","","ControlaLinhaFamilia","int",0,"px",10,10,"right",null,[],"Controlalinhafamilia","ControlaLinhaFamilia",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridfamiliaContainer);
   this.GridfabricanteContainer = new gx.grid.grid(this, 12,"WbpLvl12",152,"Gridfabricante","Gridfabricante","GridfabricanteContainer",this.CmpContext,this.IsMasterPage,"hrelacaogiro",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridfabricanteContainer = this.GridfabricanteContainer;
   GridfabricanteContainer.addSingleLineEdit("Produtofabricanteid",153,"vPRODUTOFABRICANTEID","Fabricante","","ProdutoFabricanteId","int",0,"px",7,7,"right",null,[],"Produtofabricanteid","ProdutoFabricanteId",true,0,false,false,"Attribute",1,"");
   GridfabricanteContainer.addBitmap("&Promptfabricante","vPROMPTFABRICANTE",154,0,"px",17,"px",null,"","","GridColumnImage","");
   GridfabricanteContainer.addSingleLineEdit("Produtofabricantefantasia",155,"vPRODUTOFABRICANTEFANTASIA","Nome","","ProdutoFabricanteFantasia","svchar",350,"px",60,60,"left",null,[],"Produtofabricantefantasia","ProdutoFabricanteFantasia",true,0,false,false,"Attribute",1,"");
   GridfabricanteContainer.addBitmap("&Exclinhafabricante","vEXCLINHAFABRICANTE",156,0,"px",17,"px","e251d02_client","","Exc","GridColumnImage","");
   GridfabricanteContainer.addSingleLineEdit("Controlalinhafabricante",157,"vCONTROLALINHAFABRICANTE","Controla Linha Fabricante","","ControlaLinhaFabricante","int",0,"px",10,10,"right",null,[],"Controlalinhafabricante","ControlaLinhaFabricante",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridfabricanteContainer);
   this.MASKFAMILIAContainer = gx.uc.getNew(this, 177, 10, "HDMask", "MASKFAMILIAContainer", "Maskfamilia");
   var MASKFAMILIAContainer = this.MASKFAMILIAContainer;
   MASKFAMILIAContainer.setDynProp("AttachControl", "Attachcontrol", "", "str");
   MASKFAMILIAContainer.setDynProp("Picture", "Picture", "", "str");
   MASKFAMILIAContainer.setProp("Default", "Default", "", "str");
   MASKFAMILIAContainer.setProp("Version", "Version", "2.01", "str");
   MASKFAMILIAContainer.setProp("Reverse", "Reverse", false, "bool");
   MASKFAMILIAContainer.setProp("Signed", "Signed", false, "bool");
   MASKFAMILIAContainer.setProp("UnmaskedChars", "Unmaskedchars", "[(),.:/ -]", "str");
   MASKFAMILIAContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   MASKFAMILIAContainer.setProp("FixedChars", "Fixedchars", "[(),.:/ -]", "str");
   MASKFAMILIAContainer.setProp("GetValue", "Getvalue", "", "char");
   MASKFAMILIAContainer.setProp("ControlType", "Controltype", "Grid", "str");
   MASKFAMILIAContainer.setProp("Visible", "Visible", true, "bool");
   MASKFAMILIAContainer.setProp("Enabled", "Enabled", true, "boolean");
   MASKFAMILIAContainer.setProp("Class", "Class", "", "char");
   MASKFAMILIAContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(MASKFAMILIAContainer);
   this.TABCSSContainer = gx.uc.getNew(this, 17, 10, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV129Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV129Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV129Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "hrelacaogiro_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABTXT",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV95TxtTela",gxold:"OV95TxtTela",gxvar:"AV95TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV95TxtTela=Value},v2z:function(Value){gx.O.ZV95TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV95TxtTela)},c2v:function(){gx.O.AV95TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[12]={fld:"IMAGE2",grid:0};
   GXValidFnc[14]={fld:"IMAGE1",grid:0};
   GXValidFnc[18]={fld:"TAB1",grid:0};
   GXValidFnc[21]={fld:"TABLE4",grid:0};
   GXValidFnc[24]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV76FilialEmpresaId",gxold:"OV76FilialEmpresaId",gxvar:"AV76FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV76FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV76FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV76FilialEmpresaId,0)},c2v:function(){gx.O.AV76FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV23FilialId",gxold:"OV23FilialId",gxvar:"AV23FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV23FilialId,0)},c2v:function(){gx.O.AV23FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV24FilialNome",gxold:"OV24FilialNome",gxvar:"AV24FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24FilialNome=Value},v2z:function(Value){gx.O.ZV24FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV24FilialNome,0)},c2v:function(){gx.O.AV24FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPORELATORIO",gxz:"ZV25TipoRelatorio",gxold:"OV25TipoRelatorio",gxvar:"AV25TipoRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV25TipoRelatorio=Value},v2z:function(Value){gx.O.ZV25TipoRelatorio=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPORELATORIO",gx.O.AV25TipoRelatorio)},c2v:function(){gx.O.AV25TipoRelatorio=this.val()},val:function(){return gx.fn.getControlValue("vTIPORELATORIO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFORMAORDENACAO",gxz:"ZV26FormaOrdenacao",gxold:"OV26FormaOrdenacao",gxvar:"AV26FormaOrdenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV26FormaOrdenacao=Value},v2z:function(Value){gx.O.ZV26FormaOrdenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vFORMAORDENACAO",gx.O.AV26FormaOrdenacao)},c2v:function(){gx.O.AV26FormaOrdenacao=this.val()},val:function(){return gx.fn.getControlValue("vFORMAORDENACAO")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIDENTIFICACAOPRODUTO",gxz:"ZV27IdentificacaoProduto",gxold:"OV27IdentificacaoProduto",gxvar:"AV27IdentificacaoProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV27IdentificacaoProduto=Value},v2z:function(Value){gx.O.ZV27IdentificacaoProduto=Value},v2c:function(){gx.fn.setComboBoxValue("vIDENTIFICACAOPRODUTO",gx.O.AV27IdentificacaoProduto)},c2v:function(){gx.O.AV27IdentificacaoProduto=this.val()},val:function(){return gx.fn.getControlValue("vIDENTIFICACAOPRODUTO")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSCODIFICACAO",gxz:"ZV28ClassCodificacao",gxold:"OV28ClassCodificacao",gxvar:"AV28ClassCodificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28ClassCodificacao=Value},v2z:function(Value){gx.O.ZV28ClassCodificacao=Value},v2c:function(){gx.fn.setComboBoxValue("vCLASSCODIFICACAO",gx.O.AV28ClassCodificacao)},c2v:function(){gx.O.AV28ClassCodificacao=this.val()},val:function(){return gx.fn.getControlValue("vCLASSCODIFICACAO")},nac:gx.falseFn};
   GXValidFnc[55]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEDIAS",gxz:"ZV30QtdeDias",gxold:"OV30QtdeDias",gxvar:"AV30QtdeDias",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30QtdeDias=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30QtdeDias=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEDIAS",gx.O.AV30QtdeDias,0)},c2v:function(){gx.O.AV30QtdeDias=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEDIAS",'.')},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[68]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[70]={fld:"TABLE5",grid:0};
   GXValidFnc[73]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESANOINI",gxz:"ZV90MesAnoIni",gxold:"OV90MesAnoIni",gxvar:"AV90MesAnoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV90MesAnoIni=Value},v2z:function(Value){gx.O.ZV90MesAnoIni=Value},v2c:function(){gx.fn.setControlValue("vMESANOINI",gx.O.AV90MesAnoIni,0)},c2v:function(){gx.O.AV90MesAnoIni=this.val()},val:function(){return gx.fn.getControlValue("vMESANOINI")},nac:gx.falseFn};
   GXValidFnc[75]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[77]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOINI",gxz:"ZV92AnoIni",gxold:"OV92AnoIni",gxvar:"AV92AnoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV92AnoIni=Value},v2z:function(Value){gx.O.ZV92AnoIni=Value},v2c:function(){gx.fn.setControlValue("vANOINI",gx.O.AV92AnoIni,0)},c2v:function(){gx.O.AV92AnoIni=this.val()},val:function(){return gx.fn.getControlValue("vANOINI")},nac:gx.falseFn};
   GXValidFnc[79]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[81]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESANOFIN",gxz:"ZV91MesAnoFin",gxold:"OV91MesAnoFin",gxvar:"AV91MesAnoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV91MesAnoFin=Value},v2z:function(Value){gx.O.ZV91MesAnoFin=Value},v2c:function(){gx.fn.setControlValue("vMESANOFIN",gx.O.AV91MesAnoFin,0)},c2v:function(){gx.O.AV91MesAnoFin=this.val()},val:function(){return gx.fn.getControlValue("vMESANOFIN")},nac:gx.falseFn};
   GXValidFnc[83]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOFIN",gxz:"ZV93AnoFin",gxold:"OV93AnoFin",gxvar:"AV93AnoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV93AnoFin=Value},v2z:function(Value){gx.O.ZV93AnoFin=Value},v2c:function(){gx.fn.setControlValue("vANOFIN",gx.O.AV93AnoFin,0)},c2v:function(){gx.O.AV93AnoFin=this.val()},val:function(){return gx.fn.getControlValue("vANOFIN")},nac:gx.falseFn};
   GXValidFnc[89]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[91]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITUACAOPRODUTO",gxz:"ZV36SituacaoProduto",gxold:"OV36SituacaoProduto",gxvar:"AV36SituacaoProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV36SituacaoProduto=Value},v2z:function(Value){gx.O.ZV36SituacaoProduto=Value},v2c:function(){gx.fn.setComboBoxValue("vSITUACAOPRODUTO",gx.O.AV36SituacaoProduto)},c2v:function(){gx.O.AV36SituacaoProduto=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAOPRODUTO")},nac:gx.falseFn};
   GXValidFnc[95]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[97]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOPRODUTO",gxz:"ZV37TipoProduto",gxold:"OV37TipoProduto",gxvar:"AV37TipoProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37TipoProduto=Value},v2z:function(Value){gx.O.ZV37TipoProduto=Value},v2c:function(){gx.fn.setControlValue("vTIPOPRODUTO",gx.O.AV37TipoProduto,0)},c2v:function(){gx.O.AV37TipoProduto=this.val()},val:function(){return gx.fn.getControlValue("vTIPOPRODUTO")},nac:gx.falseFn};
   GXValidFnc[101]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[103]={fld:"TABLE6",grid:0};
   GXValidFnc[106]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREFERENCIAINI",gxz:"ZV38ReferenciaIni",gxold:"OV38ReferenciaIni",gxvar:"AV38ReferenciaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38ReferenciaIni=Value},v2z:function(Value){gx.O.ZV38ReferenciaIni=Value},v2c:function(){gx.fn.setControlValue("vREFERENCIAINI",gx.O.AV38ReferenciaIni,0)},c2v:function(){gx.O.AV38ReferenciaIni=this.val()},val:function(){return gx.fn.getControlValue("vREFERENCIAINI")},nac:gx.falseFn};
   GXValidFnc[108]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[110]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREFERENCIAFIN",gxz:"ZV39ReferenciaFin",gxold:"OV39ReferenciaFin",gxvar:"AV39ReferenciaFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39ReferenciaFin=Value},v2z:function(Value){gx.O.ZV39ReferenciaFin=Value},v2c:function(){gx.fn.setControlValue("vREFERENCIAFIN",gx.O.AV39ReferenciaFin,0)},c2v:function(){gx.O.AV39ReferenciaFin=this.val()},val:function(){return gx.fn.getControlValue("vREFERENCIAFIN")},nac:gx.falseFn};
   GXValidFnc[114]={fld:"ESQUEMALABEL", format:0,grid:0};
   GXValidFnc[116]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Esquemaid,isvalid:null,rgrid:[],fld:"vESQUEMAID",gxz:"ZV41EsquemaId",gxold:"OV41EsquemaId",gxvar:"AV41EsquemaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41EsquemaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41EsquemaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESQUEMAID",gx.O.AV41EsquemaId,0)},c2v:function(){gx.O.AV41EsquemaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESQUEMAID",'.')},nac:gx.falseFn};
   GXValidFnc[117]={fld:"PROMPTESQUEMA",grid:0};
   GXValidFnc[118]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESQUEMADESCRICAO",gxz:"ZV94EsquemaDescricao",gxold:"OV94EsquemaDescricao",gxvar:"AV94EsquemaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV94EsquemaDescricao=Value},v2z:function(Value){gx.O.ZV94EsquemaDescricao=Value},v2c:function(){gx.fn.setControlValue("vESQUEMADESCRICAO",gx.O.AV94EsquemaDescricao,0)},c2v:function(){gx.O.AV94EsquemaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vESQUEMADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[120]={fld:"TAB2",grid:0};
   GXValidFnc[123]={fld:"TABLE3",grid:0};
   GXValidFnc[126]={fld:"OPCOESSELECAO1", format:0,grid:0};
   GXValidFnc[129]={fld:"INCLUIFAMILIA",grid:0};
   GXValidFnc[131]={fld:"DIV3", format:2,grid:0};
   GXValidFnc[133]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:132,gxgrid:this.GridfamiliaContainer,fnc:this.Validv_Produtofamiliaid,isvalid:'e231d02_client',rgrid:[],fld:"vPRODUTOFAMILIAID",gxz:"ZV42ProdutoFamiliaId",gxold:"OV42ProdutoFamiliaId",gxvar:"AV42ProdutoFamiliaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV42ProdutoFamiliaId=Value},v2z:function(Value){gx.O.ZV42ProdutoFamiliaId=Value},v2c:function(row){gx.fn.setGridControlValue("vPRODUTOFAMILIAID",row || gx.fn.currentGridRowImpl(132),gx.O.AV42ProdutoFamiliaId,0)},c2v:function(){gx.O.AV42ProdutoFamiliaId=this.val()},val:function(row){return gx.fn.getGridControlValue("vPRODUTOFAMILIAID",row || gx.fn.currentGridRowImpl(132))},nac:gx.falseFn};
   GXValidFnc[134]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:132,gxgrid:this.GridfamiliaContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPROMPTFAMILIA",gxz:"ZV43promptFamilia",gxold:"OV43promptFamilia",gxvar:"AV43promptFamilia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV43promptFamilia=Value},v2z:function(Value){gx.O.ZV43promptFamilia=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vPROMPTFAMILIA",row || gx.fn.currentGridRowImpl(132),gx.O.AV43promptFamilia,gx.O.AV135Promptfamilia_GXI)},c2v:function(){gx.O.AV135Promptfamilia_GXI=this.val_GXI();gx.O.AV43promptFamilia=this.val()},val:function(row){return gx.fn.getGridControlValue("vPROMPTFAMILIA",row || gx.fn.currentGridRowImpl(132))},val_GXI:function(row){return gx.fn.getGridControlValue("vPROMPTFAMILIA_GXI",row || gx.fn.currentGridRowImpl(132))}, gxvar_GXI:'AV135Promptfamilia_GXI',nac:gx.falseFn};
   GXValidFnc[135]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:132,gxgrid:this.GridfamiliaContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOFAMILIADESCRICAO",gxz:"ZV44ProdutoFamiliaDescricao",gxold:"OV44ProdutoFamiliaDescricao",gxvar:"AV44ProdutoFamiliaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV44ProdutoFamiliaDescricao=Value},v2z:function(Value){gx.O.ZV44ProdutoFamiliaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vPRODUTOFAMILIADESCRICAO",row || gx.fn.currentGridRowImpl(132),gx.O.AV44ProdutoFamiliaDescricao,0)},c2v:function(){gx.O.AV44ProdutoFamiliaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vPRODUTOFAMILIADESCRICAO",row || gx.fn.currentGridRowImpl(132))},nac:gx.falseFn};
   GXValidFnc[136]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:132,gxgrid:this.GridfamiliaContainer,fnc:null,isvalid:null,rgrid:[],fld:"vEXCLINHAFAMILIA",gxz:"ZV45excLinhaFamilia",gxold:"OV45excLinhaFamilia",gxvar:"AV45excLinhaFamilia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV45excLinhaFamilia=Value},v2z:function(Value){gx.O.ZV45excLinhaFamilia=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vEXCLINHAFAMILIA",row || gx.fn.currentGridRowImpl(132),gx.O.AV45excLinhaFamilia,gx.O.AV136Exclinhafamilia_GXI)},c2v:function(){gx.O.AV136Exclinhafamilia_GXI=this.val_GXI();gx.O.AV45excLinhaFamilia=this.val()},val:function(row){return gx.fn.getGridControlValue("vEXCLINHAFAMILIA",row || gx.fn.currentGridRowImpl(132))},val_GXI:function(row){return gx.fn.getGridControlValue("vEXCLINHAFAMILIA_GXI",row || gx.fn.currentGridRowImpl(132))}, gxvar_GXI:'AV136Exclinhafamilia_GXI',nac:gx.falseFn};
   GXValidFnc[137]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:132,gxgrid:this.GridfamiliaContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTROLALINHAFAMILIA",gxz:"ZV46ControlaLinhaFamilia",gxold:"OV46ControlaLinhaFamilia",gxvar:"AV46ControlaLinhaFamilia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV46ControlaLinhaFamilia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV46ControlaLinhaFamilia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vCONTROLALINHAFAMILIA",row || gx.fn.currentGridRowImpl(132),gx.O.AV46ControlaLinhaFamilia,0)},c2v:function(){gx.O.AV46ControlaLinhaFamilia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vCONTROLALINHAFAMILIA",row || gx.fn.currentGridRowImpl(132),'.')},nac:gx.falseFn};
   GXValidFnc[138]={fld:"DIV4", format:2,grid:0};
   GXValidFnc[139]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Familiaempresaid,isvalid:null,rgrid:[],fld:"vFAMILIAEMPRESAID",gxz:"ZV55FamiliaEmpresaId",gxold:"OV55FamiliaEmpresaId",gxvar:"AV55FamiliaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55FamiliaEmpresaId=Value},v2z:function(Value){gx.O.ZV55FamiliaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAEMPRESAID",gx.O.AV55FamiliaEmpresaId,0)},c2v:function(){gx.O.AV55FamiliaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[140]={fld:"TABLE9",grid:0};
   GXValidFnc[143]={fld:"TABLE8",grid:0};
   GXValidFnc[146]={fld:"OPCOESSELECAO2", format:0,grid:0};
   GXValidFnc[149]={fld:"INCLUIFABRICANTE",grid:0};
   GXValidFnc[151]={fld:"DIV5", format:2,grid:0};
   GXValidFnc[153]={lvl:12,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:152,gxgrid:this.GridfabricanteContainer,fnc:this.Validv_Produtofabricanteid,isvalid:'e261d02_client',rgrid:[],fld:"vPRODUTOFABRICANTEID",gxz:"ZV65ProdutoFabricanteId",gxold:"OV65ProdutoFabricanteId",gxvar:"AV65ProdutoFabricanteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV65ProdutoFabricanteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV65ProdutoFabricanteId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vPRODUTOFABRICANTEID",row || gx.fn.currentGridRowImpl(152),gx.O.AV65ProdutoFabricanteId,0)},c2v:function(){gx.O.AV65ProdutoFabricanteId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vPRODUTOFABRICANTEID",row || gx.fn.currentGridRowImpl(152),'.')},nac:gx.falseFn};
   GXValidFnc[154]={lvl:12,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:152,gxgrid:this.GridfabricanteContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPROMPTFABRICANTE",gxz:"ZV66promptFabricante",gxold:"OV66promptFabricante",gxvar:"AV66promptFabricante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV66promptFabricante=Value},v2z:function(Value){gx.O.ZV66promptFabricante=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vPROMPTFABRICANTE",row || gx.fn.currentGridRowImpl(152),gx.O.AV66promptFabricante,gx.O.AV137Promptfabricante_GXI)},c2v:function(){gx.O.AV137Promptfabricante_GXI=this.val_GXI();gx.O.AV66promptFabricante=this.val()},val:function(row){return gx.fn.getGridControlValue("vPROMPTFABRICANTE",row || gx.fn.currentGridRowImpl(152))},val_GXI:function(row){return gx.fn.getGridControlValue("vPROMPTFABRICANTE_GXI",row || gx.fn.currentGridRowImpl(152))}, gxvar_GXI:'AV137Promptfabricante_GXI',nac:gx.falseFn};
   GXValidFnc[155]={lvl:12,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:152,gxgrid:this.GridfabricanteContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOFABRICANTEFANTASIA",gxz:"ZV67ProdutoFabricanteFantasia",gxold:"OV67ProdutoFabricanteFantasia",gxvar:"AV67ProdutoFabricanteFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV67ProdutoFabricanteFantasia=Value},v2z:function(Value){gx.O.ZV67ProdutoFabricanteFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("vPRODUTOFABRICANTEFANTASIA",row || gx.fn.currentGridRowImpl(152),gx.O.AV67ProdutoFabricanteFantasia,0)},c2v:function(){gx.O.AV67ProdutoFabricanteFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("vPRODUTOFABRICANTEFANTASIA",row || gx.fn.currentGridRowImpl(152))},nac:gx.falseFn};
   GXValidFnc[156]={lvl:12,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:152,gxgrid:this.GridfabricanteContainer,fnc:null,isvalid:null,rgrid:[],fld:"vEXCLINHAFABRICANTE",gxz:"ZV68excLinhaFabricante",gxold:"OV68excLinhaFabricante",gxvar:"AV68excLinhaFabricante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV68excLinhaFabricante=Value},v2z:function(Value){gx.O.ZV68excLinhaFabricante=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vEXCLINHAFABRICANTE",row || gx.fn.currentGridRowImpl(152),gx.O.AV68excLinhaFabricante,gx.O.AV138Exclinhafabricante_GXI)},c2v:function(){gx.O.AV138Exclinhafabricante_GXI=this.val_GXI();gx.O.AV68excLinhaFabricante=this.val()},val:function(row){return gx.fn.getGridControlValue("vEXCLINHAFABRICANTE",row || gx.fn.currentGridRowImpl(152))},val_GXI:function(row){return gx.fn.getGridControlValue("vEXCLINHAFABRICANTE_GXI",row || gx.fn.currentGridRowImpl(152))}, gxvar_GXI:'AV138Exclinhafabricante_GXI',nac:gx.falseFn};
   GXValidFnc[157]={lvl:12,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:152,gxgrid:this.GridfabricanteContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTROLALINHAFABRICANTE",gxz:"ZV69ControlaLinhaFabricante",gxold:"OV69ControlaLinhaFabricante",gxvar:"AV69ControlaLinhaFabricante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV69ControlaLinhaFabricante=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV69ControlaLinhaFabricante=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vCONTROLALINHAFABRICANTE",row || gx.fn.currentGridRowImpl(152),gx.O.AV69ControlaLinhaFabricante,0)},c2v:function(){gx.O.AV69ControlaLinhaFabricante=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vCONTROLALINHAFABRICANTE",row || gx.fn.currentGridRowImpl(152),'.')},nac:gx.falseFn};
   GXValidFnc[158]={fld:"DIV6", format:2,grid:0};
   GXValidFnc[164]={fld:"TABLE7",grid:0};
   GXValidFnc[170]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV83Sim",gxold:"OV83Sim",gxvar:"AV83Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV83Sim=Value},v2z:function(Value){gx.O.ZV83Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV83Sim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV83Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 170 , function() {
   });
   GXValidFnc[171]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV82Nao",gxold:"OV82Nao",gxvar:"AV82Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV82Nao=Value},v2z:function(Value){gx.O.ZV82Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV82Nao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV82Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 171 , function() {
   });
   GXValidFnc[173]={fld:"BTNHELP",grid:0};
   GXValidFnc[174]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaempresaid,isvalid:null,rgrid:[],fld:"vPESSOAEMPRESAID",gxz:"ZV70PessoaEmpresaId",gxold:"OV70PessoaEmpresaId",gxvar:"AV70PessoaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70PessoaEmpresaId=Value},v2z:function(Value){gx.O.ZV70PessoaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMPRESAID",gx.O.AV70PessoaEmpresaId,0)},c2v:function(){gx.O.AV70PessoaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[175]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDELIMITAJSON",gxz:"ZV119DelimitaJson",gxold:"OV119DelimitaJson",gxvar:"AV119DelimitaJson",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV119DelimitaJson=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV119DelimitaJson=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDELIMITAJSON",gx.O.AV119DelimitaJson,0)},c2v:function(){gx.O.AV119DelimitaJson=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDELIMITAJSON",'.')},nac:gx.falseFn};
   GXValidFnc[176]={fld:"JS", format:2,grid:0};
   GXValidFnc[178]={fld:"PROMPT_FILIALID",grid:0};
   this.AV95TxtTela = "" ;
   this.ZV95TxtTela = "" ;
   this.OV95TxtTela = "" ;
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
   this.AV94EsquemaDescricao = "" ;
   this.ZV94EsquemaDescricao = "" ;
   this.OV94EsquemaDescricao = "" ;
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
   this.AV55FamiliaEmpresaId = "" ;
   this.ZV55FamiliaEmpresaId = "" ;
   this.OV55FamiliaEmpresaId = "" ;
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
   this.AV83Sim = "" ;
   this.ZV83Sim = "" ;
   this.OV83Sim = "" ;
   this.AV82Nao = "" ;
   this.ZV82Nao = "" ;
   this.OV82Nao = "" ;
   this.AV70PessoaEmpresaId = "" ;
   this.ZV70PessoaEmpresaId = "" ;
   this.OV70PessoaEmpresaId = "" ;
   this.AV119DelimitaJson = 0 ;
   this.ZV119DelimitaJson = 0 ;
   this.OV119DelimitaJson = 0 ;
   this.AV95TxtTela = "" ;
   this.AV129Tab = [ ] ;
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
   this.AV94EsquemaDescricao = "" ;
   this.AV55FamiliaEmpresaId = "" ;
   this.AV83Sim = "" ;
   this.AV82Nao = "" ;
   this.AV70PessoaEmpresaId = "" ;
   this.AV119DelimitaJson = 0 ;
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
   this.A75UsuarioId = "" ;
   this.A1564UsuarioFilialId = 0 ;
   this.A2915EsquemaCodigo = 0 ;
   this.A2912EsquemaDescricao = "" ;
   this.AV29ClassificacaoEstEmpresaId = "" ;
   this.AV31CodificacaoEstEmpresaId = "" ;
   this.AV54SNNovaLinhaFamilia = "" ;
   this.AV49snErro = "" ;
   this.AV60snExcluiFamilia = "" ;
   this.AV73SNNovaLinhaFabricante = "" ;
   this.AV74snExcluiFabricante = "" ;
   this.AV140Pgmname = "" ;
   this.AV124SdtTxtTela = [ ] ;
   this.AV8EmpresaLogadaId = "" ;
   this.AV53SdtFamiliaRelProduto = [ ] ;
   this.AV87IntervaloDias = 0 ;
   this.AV86DataFinal = gx.date.nullDate() ;
   this.AV35AnoApuracaoFin = "" ;
   this.AV33MesApuracaoFin = "" ;
   this.AV118DataFinalStr = "" ;
   this.AV85DataInicial = gx.date.nullDate() ;
   this.AV34AnoApuracaoIni = "" ;
   this.AV32MesApuracaoIni = "" ;
   this.AV84DataInicialStr = "" ;
   this.Events = {"e111d02_client": ["'FECHAR'", true] ,"e121d02_client": ["'CONFIRMAR'", true] ,"e131d02_client": ["VFORMAORDENACAO.CLICK", true] ,"e141d02_client": ["'LINHAGRIDFAMILIA'", true] ,"e221d02_client": ["'EXCLUILINHAGRIDFAMILIA'", true] ,"e151d02_client": ["'LINHAGRIDFABRICANTE'", true] ,"e251d02_client": ["'EXCLUILINHAGRIDFABRICANTE'", true] ,"e161d02_client": ["'SALVARTXT'", true] ,"e171d02_client": ["VTXTTELA.CLICK", true] ,"e181d02_client": ["'EXCLUIRTXT'", true] ,"e231d02_client": ["VPRODUTOFAMILIAID.ISVALID", true] ,"e261d02_client": ["VPRODUTOFABRICANTEID.ISVALID", true] ,"e271d02_client": ["ENTER", true] ,"e281d02_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDFAMILIA_nFirstRecordOnPage'},{av:'GRIDFAMILIA_nEOF'},{av:'AV43promptFamilia',fld:'vPROMPTFAMILIA',grid:132},{av:'AV45excLinhaFamilia',fld:'vEXCLINHAFAMILIA',grid:132},{av:'AV53SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'GRIDFABRICANTE_nFirstRecordOnPage'},{av:'GRIDFABRICANTE_nEOF'},{av:'AV66promptFabricante',fld:'vPROMPTFABRICANTE',grid:152},{av:'AV68excLinhaFabricante',fld:'vEXCLINHAFABRICANTE',grid:152},{av:'AV71SdtFabricanteRelProduto',fld:'vSDTFABRICANTERELPRODUTO'},{av:'AV26FormaOrdenacao',fld:'vFORMAORDENACAO'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV29ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2922ClassificacaoEstDescricao',fld:'CLASSIFICACAOESTDESCRICAO'},{av:'A2937CodificacaoEstId',fld:'CODIFICACAOESTID'},{av:'A2936CodificacaoEstEmpresaId',fld:'CODIFICACAOESTEMPRESAID'},{av:'AV31CodificacaoEstEmpresaId',fld:'vCODIFICACAOESTEMPRESAID'},{av:'A2932CodificacaoEstDescricao',fld:'CODIFICACAOESTDESCRICAO'},{av:'AV54SNNovaLinhaFamilia',fld:'vSNNOVALINHAFAMILIA'},{av:'AV49snErro',fld:'vSNERRO'},{av:'AV60snExcluiFamilia',fld:'vSNEXCLUIFAMILIA'},{av:'AV42ProdutoFamiliaId',fld:'vPRODUTOFAMILIAID',grid:132},{av:'AV44ProdutoFamiliaDescricao',fld:'vPRODUTOFAMILIADESCRICAO',grid:132},{av:'AV73SNNovaLinhaFabricante',fld:'vSNNOVALINHAFABRICANTE'},{av:'AV74snExcluiFabricante',fld:'vSNEXCLUIFABRICANTE'},{av:'AV65ProdutoFabricanteId',fld:'vPRODUTOFABRICANTEID',grid:152},{av:'AV67ProdutoFabricanteFantasia',fld:'vPRODUTOFABRICANTEFANTASIA',grid:152},{av:'AV140Pgmname',fld:'vPGMNAME'},{av:'AV124SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV95TxtTela',fld:'vTXTTELA'}],[{av:'AV130MascaraFamilia',fld:'vMASCARAFAMILIA'},{av:'this.MASKFAMILIAContainer.AttachControl',ctrl:'MASKFAMILIA',prop:'AttachControl'},{av:'AV131MascaraValores',fld:'vMASCARAVALORES'},{av:'this.MASKFAMILIAContainer.Picture',ctrl:'MASKFAMILIA',prop:'Picture'},{av:'AV28ClassCodificacao',fld:'vCLASSCODIFICACAO'},{av:'AV53SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'AV126Cont',fld:'vCONT'},{av:'AV150GXV2',fld:'vGXV2'},{av:'AV56SdtFamiliaRelProdutoItem',fld:'vSDTFAMILIARELPRODUTOITEM'},{av:'AV151GXV3',fld:'vGXV3'},{av:'AV71SdtFabricanteRelProduto',fld:'vSDTFABRICANTERELPRODUTO'},{av:'AV158GXV5',fld:'vGXV5'},{av:'AV72SdtFabricanteRelProdutoItem',fld:'vSDTFABRICANTERELPRODUTOITEM'},{av:'AV159GXV6',fld:'vGXV6'},{av:'AV95TxtTela',fld:'vTXTTELA'},{av:'AV161GXV8',fld:'vGXV8'},{av:'AV125SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV160GXV7',fld:'vGXV7'},{av:'AV76FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV23FilialId',fld:'vFILIALID'},{av:'AV25TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV26FormaOrdenacao',fld:'vFORMAORDENACAO'},{av:'AV30QtdeDias',fld:'vQTDEDIAS'},{av:'AV90MesAnoIni',fld:'vMESANOINI'},{av:'AV92AnoIni',fld:'vANOINI'},{av:'AV91MesAnoFin',fld:'vMESANOFIN'},{av:'AV93AnoFin',fld:'vANOFIN'},{av:'AV36SituacaoProduto',fld:'vSITUACAOPRODUTO'},{av:'AV37TipoProduto',fld:'vTIPOPRODUTO'},{av:'AV38ReferenciaIni',fld:'vREFERENCIAINI'},{av:'AV39ReferenciaFin',fld:'vREFERENCIAFIN'},{av:'AV41EsquemaId',fld:'vESQUEMAID'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'CONFIRMAR'"] = [[{av:'AV23FilialId',fld:'vFILIALID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV76FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV26FormaOrdenacao',fld:'vFORMAORDENACAO'},{av:'AV28ClassCodificacao',fld:'vCLASSCODIFICACAO'},{av:'AV25TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV90MesAnoIni',fld:'vMESANOINI'},{av:'AV92AnoIni',fld:'vANOINI'},{av:'AV91MesAnoFin',fld:'vMESANOFIN'},{av:'AV93AnoFin',fld:'vANOFIN'},{av:'AV39ReferenciaFin',fld:'vREFERENCIAFIN'},{av:'AV38ReferenciaIni',fld:'vREFERENCIAINI'},{av:'AV42ProdutoFamiliaId',fld:'vPRODUTOFAMILIAID',grid:132},{av:'AV54SNNovaLinhaFamilia',fld:'vSNNOVALINHAFAMILIA'},{av:'A2956FamiliaEmpresaId',fld:'FAMILIAEMPRESAID'},{av:'AV55FamiliaEmpresaId',fld:'vFAMILIAEMPRESAID'},{av:'A2957FamiliaId',fld:'FAMILIAID'},{av:'AV65ProdutoFabricanteId',fld:'vPRODUTOFABRICANTEID',grid:152},{av:'AV73SNNovaLinhaFabricante',fld:'vSNNOVALINHAFABRICANTE'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV70PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV75snConsisteTela',fld:'vSNCONSISTETELA'},{av:'AV49snErro',fld:'vSNERRO'},{av:'AV95TxtTela',fld:'vTXTTELA'},{av:'AV27IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{av:'AV30QtdeDias',fld:'vQTDEDIAS'},{av:'AV85DataInicial',fld:'vDATAINICIAL'},{av:'AV86DataFinal',fld:'vDATAFINAL'},{av:'AV36SituacaoProduto',fld:'vSITUACAOPRODUTO'},{av:'AV37TipoProduto',fld:'vTIPOPRODUTO'},{av:'AV41EsquemaId',fld:'vESQUEMAID'},{av:'AV87IntervaloDias',fld:'vINTERVALODIAS'},{av:'AV53SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'AV71SdtFabricanteRelProduto',fld:'vSDTFABRICANTERELPRODUTO'},{av:'AV141Pgmdesc',fld:'vPGMDESC'},{av:'AV60snExcluiFamilia',fld:'vSNEXCLUIFAMILIA'},{av:'AV44ProdutoFamiliaDescricao',fld:'vPRODUTOFAMILIADESCRICAO',grid:132},{av:'AV74snExcluiFabricante',fld:'vSNEXCLUIFABRICANTE'},{av:'AV67ProdutoFabricanteFantasia',fld:'vPRODUTOFABRICANTEFANTASIA',grid:152},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV140Pgmname',fld:'vPGMNAME'},{av:'AV32MesApuracaoIni',fld:'vMESAPURACAOINI'},{av:'AV34AnoApuracaoIni',fld:'vANOAPURACAOINI'},{av:'AV33MesApuracaoFin',fld:'vMESAPURACAOFIN'},{av:'AV35AnoApuracaoFin',fld:'vANOAPURACAOFIN'}],[{av:'AV49snErro',fld:'vSNERRO'},{av:'AV53SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'AV71SdtFabricanteRelProduto',fld:'vSDTFABRICANTERELPRODUTO'},{av:'AV75snConsisteTela',fld:'vSNCONSISTETELA'},{av:'AV32MesApuracaoIni',fld:'vMESAPURACAOINI'},{av:'AV34AnoApuracaoIni',fld:'vANOAPURACAOINI'},{av:'AV33MesApuracaoFin',fld:'vMESAPURACAOFIN'},{av:'AV35AnoApuracaoFin',fld:'vANOAPURACAOFIN'},{av:'AV78MesInicial',fld:'vMESINICIAL'},{av:'AV79MesFinal',fld:'vMESFINAL'},{av:'AV153GXLvl570',fld:'vGXLVL570'},{av:'AV156GXLvl654',fld:'vGXLVL654'},{av:'AV107SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV89SNImpDetalhe',fld:'vSNIMPDETALHE'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV87IntervaloDias',fld:'vINTERVALODIAS'},{av:'AV41EsquemaId',fld:'vESQUEMAID'},{av:'AV39ReferenciaFin',fld:'vREFERENCIAFIN'},{av:'AV38ReferenciaIni',fld:'vREFERENCIAINI'},{av:'AV37TipoProduto',fld:'vTIPOPRODUTO'},{av:'AV36SituacaoProduto',fld:'vSITUACAOPRODUTO'},{av:'AV86DataFinal',fld:'vDATAFINAL'},{av:'AV85DataInicial',fld:'vDATAINICIAL'},{av:'AV30QtdeDias',fld:'vQTDEDIAS'},{av:'AV28ClassCodificacao',fld:'vCLASSCODIFICACAO'},{av:'AV27IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{av:'AV26FormaOrdenacao',fld:'vFORMAORDENACAO'},{av:'AV25TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV23FilialId',fld:'vFILIALID'},{av:'AV76FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV126Cont',fld:'vCONT'},{av:'AV150GXV2',fld:'vGXV2'},{av:'AV56SdtFamiliaRelProdutoItem',fld:'vSDTFAMILIARELPRODUTOITEM'},{av:'AV151GXV3',fld:'vGXV3'},{av:'AV158GXV5',fld:'vGXV5'},{av:'AV72SdtFabricanteRelProdutoItem',fld:'vSDTFABRICANTERELPRODUTOITEM'},{av:'AV159GXV6',fld:'vGXV6'},{av:'AV84DataInicialStr',fld:'vDATAINICIALSTR'},{av:'AV118DataFinalStr',fld:'vDATAFINALSTR'},{av:'AV123OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VFORMAORDENACAO.CLICK"] = [[{av:'AV26FormaOrdenacao',fld:'vFORMAORDENACAO'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV29ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2922ClassificacaoEstDescricao',fld:'CLASSIFICACAOESTDESCRICAO'},{av:'A2937CodificacaoEstId',fld:'CODIFICACAOESTID'},{av:'A2936CodificacaoEstEmpresaId',fld:'CODIFICACAOESTEMPRESAID'},{av:'AV31CodificacaoEstEmpresaId',fld:'vCODIFICACAOESTEMPRESAID'},{av:'A2932CodificacaoEstDescricao',fld:'CODIFICACAOESTDESCRICAO'}],[{av:'AV28ClassCodificacao',fld:'vCLASSCODIFICACAO'}]];
   this.EvtParms["GRIDFAMILIA.LOAD"] = [[{av:'AV53SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'AV54SNNovaLinhaFamilia',fld:'vSNNOVALINHAFAMILIA'},{av:'AV49snErro',fld:'vSNERRO'}],[{av:'AV46ControlaLinhaFamilia',fld:'vCONTROLALINHAFAMILIA'},{av:'AV148GXV1',fld:'vGXV1'},{av:'AV56SdtFamiliaRelProdutoItem',fld:'vSDTFAMILIARELPRODUTOITEM'},{av:'AV42ProdutoFamiliaId',fld:'vPRODUTOFAMILIAID'},{av:'AV44ProdutoFamiliaDescricao',fld:'vPRODUTOFAMILIADESCRICAO'}]];
   this.EvtParms["'LINHAGRIDFAMILIA'"] = [[{av:'AV49snErro',fld:'vSNERRO'},{av:'AV42ProdutoFamiliaId',fld:'vPRODUTOFAMILIAID',grid:132},{av:'AV44ProdutoFamiliaDescricao',fld:'vPRODUTOFAMILIADESCRICAO',grid:132},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV54SNNovaLinhaFamilia',fld:'vSNNOVALINHAFAMILIA'},{av:'A2956FamiliaEmpresaId',fld:'FAMILIAEMPRESAID'},{av:'AV55FamiliaEmpresaId',fld:'vFAMILIAEMPRESAID'},{av:'A2957FamiliaId',fld:'FAMILIAID'}],[{av:'AV53SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'AV54SNNovaLinhaFamilia',fld:'vSNNOVALINHAFAMILIA'},{av:'AV56SdtFamiliaRelProdutoItem',fld:'vSDTFAMILIARELPRODUTOITEM'},{av:'AV57TemMascara',fld:'vTEMMASCARA'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV63x',fld:'vX'},{av:'AV58Entrada',fld:'vENTRADA'},{av:'AV59Saida',fld:'vSAIDA'},{av:'AV64Aux',fld:'vAUX'},{av:'AV49snErro',fld:'vSNERRO'},{av:'AV153GXLvl570',fld:'vGXLVL570'}]];
   this.EvtParms["'EXCLUILINHAGRIDFAMILIA'"] = [[{av:'AV46ControlaLinhaFamilia',fld:'vCONTROLALINHAFAMILIA'}],[{av:'AV53SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'AV60snExcluiFamilia',fld:'vSNEXCLUIFAMILIA'}]];
   this.EvtParms["GRIDFABRICANTE.LOAD"] = [[{av:'AV71SdtFabricanteRelProduto',fld:'vSDTFABRICANTERELPRODUTO'},{av:'AV73SNNovaLinhaFabricante',fld:'vSNNOVALINHAFABRICANTE'},{av:'AV49snErro',fld:'vSNERRO'}],[{av:'AV69ControlaLinhaFabricante',fld:'vCONTROLALINHAFABRICANTE'},{av:'AV154GXV4',fld:'vGXV4'},{av:'AV72SdtFabricanteRelProdutoItem',fld:'vSDTFABRICANTERELPRODUTOITEM'},{av:'AV65ProdutoFabricanteId',fld:'vPRODUTOFABRICANTEID'},{av:'AV67ProdutoFabricanteFantasia',fld:'vPRODUTOFABRICANTEFANTASIA'}]];
   this.EvtParms["'LINHAGRIDFABRICANTE'"] = [[{av:'AV49snErro',fld:'vSNERRO'},{av:'AV65ProdutoFabricanteId',fld:'vPRODUTOFABRICANTEID',grid:152},{av:'AV67ProdutoFabricanteFantasia',fld:'vPRODUTOFABRICANTEFANTASIA',grid:152},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV73SNNovaLinhaFabricante',fld:'vSNNOVALINHAFABRICANTE'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV70PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'}],[{av:'AV71SdtFabricanteRelProduto',fld:'vSDTFABRICANTERELPRODUTO'},{av:'AV73SNNovaLinhaFabricante',fld:'vSNNOVALINHAFABRICANTE'},{av:'AV72SdtFabricanteRelProdutoItem',fld:'vSDTFABRICANTERELPRODUTOITEM'},{av:'AV63x',fld:'vX'},{av:'AV58Entrada',fld:'vENTRADA'},{av:'AV59Saida',fld:'vSAIDA'},{av:'AV64Aux',fld:'vAUX'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV49snErro',fld:'vSNERRO'},{av:'AV156GXLvl654',fld:'vGXLVL654'}]];
   this.EvtParms["'EXCLUILINHAGRIDFABRICANTE'"] = [[{av:'AV69ControlaLinhaFabricante',fld:'vCONTROLALINHAFABRICANTE'}],[{av:'AV71SdtFabricanteRelProduto',fld:'vSDTFABRICANTERELPRODUTO'},{av:'AV74snExcluiFabricante',fld:'vSNEXCLUIFABRICANTE'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'GRIDFAMILIA_nFirstRecordOnPage'},{av:'GRIDFAMILIA_nEOF'},{av:'AV43promptFamilia',fld:'vPROMPTFAMILIA'},{av:'AV45excLinhaFamilia',fld:'vEXCLINHAFAMILIA'},{av:'AV26FormaOrdenacao',fld:'vFORMAORDENACAO'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV29ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2922ClassificacaoEstDescricao',fld:'CLASSIFICACAOESTDESCRICAO'},{av:'A2937CodificacaoEstId',fld:'CODIFICACAOESTID'},{av:'A2936CodificacaoEstEmpresaId',fld:'CODIFICACAOESTEMPRESAID'},{av:'AV31CodificacaoEstEmpresaId',fld:'vCODIFICACAOESTEMPRESAID'},{av:'A2932CodificacaoEstDescricao',fld:'CODIFICACAOESTDESCRICAO'},{av:'AV54SNNovaLinhaFamilia',fld:'vSNNOVALINHAFAMILIA'},{av:'AV49snErro',fld:'vSNERRO'},{av:'AV60snExcluiFamilia',fld:'vSNEXCLUIFAMILIA'},{av:'AV42ProdutoFamiliaId',fld:'vPRODUTOFAMILIAID'},{av:'AV44ProdutoFamiliaDescricao',fld:'vPRODUTOFAMILIADESCRICAO'},{av:'AV73SNNovaLinhaFabricante',fld:'vSNNOVALINHAFABRICANTE'},{av:'AV74snExcluiFabricante',fld:'vSNEXCLUIFABRICANTE'},{av:'AV65ProdutoFabricanteId',fld:'vPRODUTOFABRICANTEID'},{av:'AV67ProdutoFabricanteFantasia',fld:'vPRODUTOFABRICANTEFANTASIA'},{av:'AV140Pgmname',fld:'vPGMNAME'},{av:'AV124SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV95TxtTela',fld:'vTXTTELA'},{av:'AV53SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO'},{av:'AV76FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV23FilialId',fld:'vFILIALID'},{av:'AV25TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV30QtdeDias',fld:'vQTDEDIAS'},{av:'AV90MesAnoIni',fld:'vMESANOINI'},{av:'AV92AnoIni',fld:'vANOINI'},{av:'AV91MesAnoFin',fld:'vMESANOFIN'},{av:'AV93AnoFin',fld:'vANOFIN'},{av:'AV36SituacaoProduto',fld:'vSITUACAOPRODUTO'},{av:'AV37TipoProduto',fld:'vTIPOPRODUTO'},{av:'AV38ReferenciaIni',fld:'vREFERENCIAINI'},{av:'AV39ReferenciaFin',fld:'vREFERENCIAFIN'},{av:'AV41EsquemaId',fld:'vESQUEMAID'}],[{av:'AV123OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV140Pgmname',fld:'vPGMNAME'},{av:'AV124SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV95TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true}],[{av:'AV160GXV7',fld:'vGXV7'},{av:'AV125SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV76FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV23FilialId',fld:'vFILIALID'},{av:'AV25TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV26FormaOrdenacao',fld:'vFORMAORDENACAO'},{av:'AV30QtdeDias',fld:'vQTDEDIAS'},{av:'AV90MesAnoIni',fld:'vMESANOINI'},{av:'AV92AnoIni',fld:'vANOINI'},{av:'AV91MesAnoFin',fld:'vMESANOFIN'},{av:'AV93AnoFin',fld:'vANOFIN'},{av:'AV36SituacaoProduto',fld:'vSITUACAOPRODUTO'},{av:'AV37TipoProduto',fld:'vTIPOPRODUTO'},{av:'AV38ReferenciaIni',fld:'vREFERENCIAINI'},{av:'AV39ReferenciaFin',fld:'vREFERENCIAFIN'},{av:'AV41EsquemaId',fld:'vESQUEMAID'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV140Pgmname',fld:'vPGMNAME'},{av:'AV95TxtTela',fld:'vTXTTELA'}],[]];
   this.EvtParms["VPRODUTOFAMILIAID.ISVALID"] = [[{av:'AV55FamiliaEmpresaId',fld:'vFAMILIAEMPRESAID'},{av:'AV42ProdutoFamiliaId',fld:'vPRODUTOFAMILIAID'}],[{av:'AV44ProdutoFamiliaDescricao',fld:'vPRODUTOFAMILIADESCRICAO'}]];
   this.EvtParms["VPRODUTOFABRICANTEID.ISVALID"] = [[{av:'AV70PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV65ProdutoFabricanteId',fld:'vPRODUTOFABRICANTEID'}],[{av:'AV67ProdutoFabricanteFantasia',fld:'vPRODUTOFABRICANTEFANTASIA'}]];
   this.setPrompt("PROMPTESQUEMA", [116]);
   this.setPrompt("PROMPT_FILIALID", [27]);
   this.setPrompt("&PROMPTFAMILIA", [133]);
   this.setPrompt("&PROMPTFABRICANTE", [153]);
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
   this.setVCMap("AV140Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV124SdtTxtTela", "vSDTTXTTELA", 0, "CollSdtTxtTela.SdtTxtTelaItem");
   this.setVCMap("AV8EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
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
   this.setVCMap("AV140Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV124SdtTxtTela", "vSDTTXTTELA", 0, "CollSdtTxtTela.SdtTxtTelaItem");
   this.setVCMap("AV8EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("AV53SdtFamiliaRelProduto", "vSDTFAMILIARELPRODUTO", 0, "CollSdtFamiliaRelProduto.SdtFamiliaRelProdutoItem");
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV43promptFamilia", rfrProp:"Value", gxAttId:"Promptfamilia"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV45excLinhaFamilia", rfrProp:"Value", gxAttId:"Exclinhafamilia"});
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[39]);
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
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV140Pgmname"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV124SdtTxtTela"});
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV8EmpresaLogadaId"});
   GridfamiliaContainer.addRefreshingVar(this.GXValidFnc[10]);
   GridfamiliaContainer.addRefreshingVar({rfrVar:"AV53SdtFamiliaRelProduto"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV66promptFabricante", rfrProp:"Value", gxAttId:"Promptfabricante"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV68excLinhaFabricante", rfrProp:"Value", gxAttId:"Exclinhafabricante"});
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[39]);
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
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV140Pgmname"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV124SdtTxtTela"});
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV8EmpresaLogadaId"});
   GridfabricanteContainer.addRefreshingVar(this.GXValidFnc[10]);
   GridfabricanteContainer.addRefreshingVar({rfrVar:"AV71SdtFabricanteRelProduto"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaogiro());
