/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:1:25.71
*/
gx.evt.autoSkip = false;
gx.define('hmodalconsultarcotacoes', false, function () {
   this.ServerClass =  "hmodalconsultarcotacoes" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A227EmpresaPessoasEmpresaId=gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID") ;
      this.A69PessoaId=gx.fn.getIntegerValue("PESSOAID",'.') ;
      this.A70PessoaRazaoSocial=gx.fn.getControlValue("PESSOARAZAOSOCIAL") ;
      this.A472PessoaCNPJ=gx.fn.getControlValue("PESSOACNPJ") ;
      this.A72PessoaTelefone=gx.fn.getControlValue("PESSOATELEFONE") ;
      this.A3370SolicitacaoEmpresaId=gx.fn.getControlValue("SOLICITACAOEMPRESAID") ;
      this.A3371SolicitacaoNumero=gx.fn.getIntegerValue("SOLICITACAONUMERO",'.') ;
      this.A4028SolicitanteCodigo=gx.fn.getIntegerValue("SOLICITANTECODIGO",'.') ;
      this.A4060SolicitanteNome=gx.fn.getControlValue("SOLICITANTENOME") ;
      this.A3487DeptoComprasEmpresaId=gx.fn.getControlValue("DEPTOCOMPRASEMPRESAID") ;
      this.A3488DeptoComprasCodigo=gx.fn.getControlValue("DEPTOCOMPRASCODIGO") ;
      this.A3483DeptoComprasNome=gx.fn.getControlValue("DEPTOCOMPRASNOME") ;
      this.AV36SdtCotacaoItem=gx.fn.getControlValue("vSDTCOTACAOITEM") ;
      this.AV26ProdutoId=gx.fn.getIntegerValue("vPRODUTOID",'.') ;
   };
   this.Validv_Solicitacaonumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSOLICITACAONUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Deptocomprascodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDEPTOCOMPRASCODIGO");
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
   this.Validv_Deptocomprasempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDEPTOCOMPRASEMPRESAID");
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
   this.Validv_Solicitacaoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSOLICITACAOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s112_client=function()
   {
      gx.fn.setCtrlProperty("vDEPTOCOMPRASEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("vPESSOAEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("vPRODUTOEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("vSOLICITACAOEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("vEMPRESAPADRAO","Visible", 0 );
   };
   this.e11ou2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15ou2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e16ou2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,12,14,17,19,21,24,26,29,31,33,35,37,40,42,44,47,49,52,54,56,58,60,65,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,84,85,88,90,93,95,99,100,101,102,103];
   this.GXLastCtrlId =103;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",66,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmodalconsultarcotacoes",[],false,1,true,true,0,false,false,false,"SdtCotacao.SdtCotacaoItem",0,"px","Novo registro",false,false,false,null,null,false,"AV36SdtCotacaoItem",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV11V",67,"CTLSOLICITACAOITEMSEQ","Seq","","GXV11V","int",0,"px",6,6,"right",null,[],"GXV11V","GXV11V",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11W",68,"CTLPRODUTOID","Produto","","GXV11W","int",0,"px",10,10,"right",null,[],"GXV11W","GXV11W",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11X",69,"CTLPRODUTODESCRICAORESUMIDA","Descrição","","GXV11X","svchar",0,"px",40,40,"left",null,[],"GXV11X","GXV11X",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11Y",70,"CTLPRODUTOUNIDADECOMPRAID","UN","","GXV11Y","char",0,"px",3,3,"left",null,[],"GXV11Y","GXV11Y",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11Z",71,"CTLCOTACAOMARCA","Marca","","GXV11Z","svchar",0,"px",20,20,"left",null,[],"GXV11Z","GXV11Z",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV120",72,"CTLCOTACAOVALORAVISTA","Valor à Vista","","GXV120","decimal",0,"px",21,21,"right",null,[],"GXV120","GXV120",true,4,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV121",73,"CTLCOTACAOVALORAPRAZO","Valor à Prazo","","GXV121","decimal",0,"px",21,21,"right",null,[],"GXV121","GXV121",true,4,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV122",74,"CTLCOTACAOQUANTIDADE","Quantidade","","GXV122","decimal",0,"px",18,18,"right",null,[],"GXV122","GXV122",true,3,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV123",75,"CTLCOTACAOVALORTOTALAVISTA","Total à Vista","","GXV123","decimal",0,"px",21,21,"right",null,[],"GXV123","GXV123",true,4,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV124",76,"CTLCOTACAOVALORTOTALAPRAZO","Total à Prazo","","GXV124","decimal",0,"px",21,21,"right",null,[],"GXV124","GXV124",true,4,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV125",77,"CTLSOLICITACAONUMERO","Número","","GXV125","int",0,"px",7,7,"right",null,[],"GXV125","GXV125",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV126",78,"CTLCOTACAOSNGANHADOR","Fornecedor Ganhador","","GXV126","char",0,"px",1,1,"left",null,[],"GXV126","GXV126",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV127",79,"CTLCOTACAOVALORTOTALLIQUIDO","Cotacao Valor Total Liquido","","GXV127","decimal",0,"px",14,14,"right",null,[],"GXV127","GXV127",false,2,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpsnganhador","vBMPSNGANHADOR",80,0,"px",17,"px",null,"","Gan","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Solicitacaonumero,isvalid:null,rgrid:[],fld:"vSOLICITACAONUMERO",gxz:"ZV11SolicitacaoNumero",gxold:"OV11SolicitacaoNumero",gxvar:"AV11SolicitacaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11SolicitacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11SolicitacaoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAONUMERO",gx.O.AV11SolicitacaoNumero,0)},c2v:function(){gx.O.AV11SolicitacaoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[12]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[14]={fld:"TABLE7",grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Deptocomprascodigo,isvalid:null,rgrid:[],fld:"vDEPTOCOMPRASCODIGO",gxz:"ZV29DeptoComprasCodigo",gxold:"OV29DeptoComprasCodigo",gxvar:"AV29DeptoComprasCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29DeptoComprasCodigo=Value},v2z:function(Value){gx.O.ZV29DeptoComprasCodigo=Value},v2c:function(){gx.fn.setControlValue("vDEPTOCOMPRASCODIGO",gx.O.AV29DeptoComprasCodigo,0)},c2v:function(){gx.O.AV29DeptoComprasCodigo=this.val()},val:function(){return gx.fn.getControlValue("vDEPTOCOMPRASCODIGO")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEPTOCOMPRASNOME",gxz:"ZV30DeptoComprasNome",gxold:"OV30DeptoComprasNome",gxvar:"AV30DeptoComprasNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30DeptoComprasNome=Value},v2z:function(Value){gx.O.ZV30DeptoComprasNome=Value},v2c:function(){gx.fn.setControlValue("vDEPTOCOMPRASNOME",gx.O.AV30DeptoComprasNome,0)},c2v:function(){gx.O.AV30DeptoComprasNome=this.val()},val:function(){return gx.fn.getControlValue("vDEPTOCOMPRASNOME")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[26]={fld:"TABLE5",grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV16PessoaId",gxold:"OV16PessoaId",gxvar:"AV16PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV16PessoaId,0)},c2v:function(){gx.O.AV16PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV17PessoaFantasia",gxold:"OV17PessoaFantasia",gxvar:"AV17PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17PessoaFantasia=Value},v2z:function(Value){gx.O.ZV17PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV17PessoaFantasia,0)},c2v:function(){gx.O.AV17PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[37]={fld:"TABLE8",grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSOLICITANTECODIGO",gxz:"ZV12SolicitanteCodigo",gxold:"OV12SolicitanteCodigo",gxvar:"AV12SolicitanteCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12SolicitanteCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12SolicitanteCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITANTECODIGO",gx.O.AV12SolicitanteCodigo,0)},c2v:function(){gx.O.AV12SolicitanteCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITANTECODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSOLICITANTENOME",gxz:"ZV13SolicitanteNome",gxold:"OV13SolicitanteNome",gxvar:"AV13SolicitanteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13SolicitanteNome=Value},v2z:function(Value){gx.O.ZV13SolicitanteNome=Value},v2c:function(){gx.fn.setControlValue("vSOLICITANTENOME",gx.O.AV13SolicitanteNome,0)},c2v:function(){gx.O.AV13SolicitanteNome=this.val()},val:function(){return gx.fn.getControlValue("vSOLICITANTENOME")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[49]={fld:"TABLE6",grid:0};
   GXValidFnc[52]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACNPJ",gxz:"ZV19PessoaCNPJ",gxold:"OV19PessoaCNPJ",gxvar:"AV19PessoaCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19PessoaCNPJ=Value},v2z:function(Value){gx.O.ZV19PessoaCNPJ=Value},v2c:function(){gx.fn.setControlValue("vPESSOACNPJ",gx.O.AV19PessoaCNPJ,0)},c2v:function(){gx.O.AV19PessoaCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACNPJ")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOATELEFONE",gxz:"ZV18PessoaTelefone",gxold:"OV18PessoaTelefone",gxvar:"AV18PessoaTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18PessoaTelefone=Value},v2z:function(Value){gx.O.ZV18PessoaTelefone=Value},v2c:function(){gx.fn.setControlValue("vPESSOATELEFONE",gx.O.AV18PessoaTelefone,0)},c2v:function(){gx.O.AV18PessoaTelefone=this.val()},val:function(){return gx.fn.getControlValue("vPESSOATELEFONE")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMAPAPRECOTIPOPRECO",gxz:"ZV28MapaPrecoTipoPreco",gxold:"OV28MapaPrecoTipoPreco",gxvar:"AV28MapaPrecoTipoPreco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28MapaPrecoTipoPreco=Value},v2z:function(Value){gx.O.ZV28MapaPrecoTipoPreco=Value},v2c:function(){gx.fn.setComboBoxValue("vMAPAPRECOTIPOPRECO",gx.O.AV28MapaPrecoTipoPreco)},c2v:function(){gx.O.AV28MapaPrecoTipoPreco=this.val()},val:function(){return gx.fn.getControlValue("vMAPAPRECOTIPOPRECO")},nac:gx.falseFn};
   GXValidFnc[65]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[67]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSOLICITACAOITEMSEQ",gxz:"ZV46GXV11V",gxold:"OV46GXV11V",gxvar:"GXV11V",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11V=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV46GXV11V=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLSOLICITACAOITEMSEQ",row || gx.fn.currentGridRowImpl(66),gx.O.GXV11V,0)},c2v:function(){gx.O.GXV11V=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLSOLICITACAOITEMSEQ",row || gx.fn.currentGridRowImpl(66),'.')},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOID",gxz:"ZV47GXV11W",gxold:"OV47GXV11W",gxvar:"GXV11W",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11W=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47GXV11W=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTOID",row || gx.fn.currentGridRowImpl(66),gx.O.GXV11W,0)},c2v:function(){gx.O.GXV11W=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPRODUTOID",row || gx.fn.currentGridRowImpl(66),'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTODESCRICAORESUMIDA",gxz:"ZV48GXV11X",gxold:"OV48GXV11X",gxvar:"GXV11X",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11X=Value},v2z:function(Value){gx.O.ZV48GXV11X=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTODESCRICAORESUMIDA",row || gx.fn.currentGridRowImpl(66),gx.O.GXV11X,0)},c2v:function(){gx.O.GXV11X=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPRODUTODESCRICAORESUMIDA",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOUNIDADECOMPRAID",gxz:"ZV49GXV11Y",gxold:"OV49GXV11Y",gxvar:"GXV11Y",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11Y=Value},v2z:function(Value){gx.O.ZV49GXV11Y=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTOUNIDADECOMPRAID",row || gx.fn.currentGridRowImpl(66),gx.O.GXV11Y,0)},c2v:function(){gx.O.GXV11Y=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPRODUTOUNIDADECOMPRAID",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCOTACAOMARCA",gxz:"ZV50GXV11Z",gxold:"OV50GXV11Z",gxvar:"GXV11Z",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11Z=Value},v2z:function(Value){gx.O.ZV50GXV11Z=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCOTACAOMARCA",row || gx.fn.currentGridRowImpl(66),gx.O.GXV11Z,0)},c2v:function(){gx.O.GXV11Z=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCOTACAOMARCA",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCOTACAOVALORAVISTA",gxz:"ZV51GXV120",gxold:"OV51GXV120",gxvar:"GXV120",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV120=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV51GXV120=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLCOTACAOVALORAVISTA",row || gx.fn.currentGridRowImpl(66),gx.O.GXV120,4,',')},c2v:function(){gx.O.GXV120=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLCOTACAOVALORAVISTA",row || gx.fn.currentGridRowImpl(66),'.',',')},nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCOTACAOVALORAPRAZO",gxz:"ZV52GXV121",gxold:"OV52GXV121",gxvar:"GXV121",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV121=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV52GXV121=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLCOTACAOVALORAPRAZO",row || gx.fn.currentGridRowImpl(66),gx.O.GXV121,4,',')},c2v:function(){gx.O.GXV121=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLCOTACAOVALORAPRAZO",row || gx.fn.currentGridRowImpl(66),'.',',')},nac:gx.falseFn};
   GXValidFnc[74]={lvl:2,type:"decimal",len:18,dec:3,sign:false,pic:"ZZZZZZZZZZZZZ9.999",ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCOTACAOQUANTIDADE",gxz:"ZV53GXV122",gxold:"OV53GXV122",gxvar:"GXV122",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV122=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV53GXV122=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLCOTACAOQUANTIDADE",row || gx.fn.currentGridRowImpl(66),gx.O.GXV122,3,',')},c2v:function(){gx.O.GXV122=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLCOTACAOQUANTIDADE",row || gx.fn.currentGridRowImpl(66),'.',',')},nac:gx.falseFn};
   GXValidFnc[75]={lvl:2,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCOTACAOVALORTOTALAVISTA",gxz:"ZV54GXV123",gxold:"OV54GXV123",gxvar:"GXV123",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV123=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV54GXV123=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLCOTACAOVALORTOTALAVISTA",row || gx.fn.currentGridRowImpl(66),gx.O.GXV123,4,',')},c2v:function(){gx.O.GXV123=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLCOTACAOVALORTOTALAVISTA",row || gx.fn.currentGridRowImpl(66),'.',',')},nac:gx.falseFn};
   GXValidFnc[76]={lvl:2,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCOTACAOVALORTOTALAPRAZO",gxz:"ZV55GXV124",gxold:"OV55GXV124",gxvar:"GXV124",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV124=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV55GXV124=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLCOTACAOVALORTOTALAPRAZO",row || gx.fn.currentGridRowImpl(66),gx.O.GXV124,4,',')},c2v:function(){gx.O.GXV124=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLCOTACAOVALORTOTALAPRAZO",row || gx.fn.currentGridRowImpl(66),'.',',')},nac:gx.falseFn};
   GXValidFnc[77]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSOLICITACAONUMERO",gxz:"ZV56GXV125",gxold:"OV56GXV125",gxvar:"GXV125",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV125=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV56GXV125=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLSOLICITACAONUMERO",row || gx.fn.currentGridRowImpl(66),gx.O.GXV125,0)},c2v:function(){gx.O.GXV125=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLSOLICITACAONUMERO",row || gx.fn.currentGridRowImpl(66),'.')},nac:gx.falseFn};
   GXValidFnc[78]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCOTACAOSNGANHADOR",gxz:"ZV57GXV126",gxold:"OV57GXV126",gxvar:"GXV126",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV126=Value},v2z:function(Value){gx.O.ZV57GXV126=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCOTACAOSNGANHADOR",row || gx.fn.currentGridRowImpl(66),gx.O.GXV126,0)},c2v:function(){gx.O.GXV126=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCOTACAOSNGANHADOR",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[79]={lvl:2,type:"decimal",len:14,dec:2,sign:false,pic:"ZZZZZZZZZZ9.99",ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCOTACAOVALORTOTALLIQUIDO",gxz:"ZV58GXV127",gxold:"OV58GXV127",gxvar:"GXV127",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV127=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV58GXV127=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLCOTACAOVALORTOTALLIQUIDO",row || gx.fn.currentGridRowImpl(66),gx.O.GXV127,2,',')},c2v:function(){gx.O.GXV127=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLCOTACAOVALORTOTALLIQUIDO",row || gx.fn.currentGridRowImpl(66),'.',',')},nac:gx.falseFn};
   GXValidFnc[80]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSNGANHADOR",gxz:"ZV41bmpSnGanhador",gxold:"OV41bmpSnGanhador",gxvar:"AV41bmpSnGanhador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV41bmpSnGanhador=Value},v2z:function(Value){gx.O.ZV41bmpSnGanhador=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSNGANHADOR",row || gx.fn.currentGridRowImpl(66),gx.O.AV41bmpSnGanhador,gx.O.AV65Bmpsnganhador_GXI)},c2v:function(){gx.O.AV65Bmpsnganhador_GXI=this.val_GXI();gx.O.AV41bmpSnGanhador=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSNGANHADOR",row || gx.fn.currentGridRowImpl(66))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSNGANHADOR_GXI",row || gx.fn.currentGridRowImpl(66))}, gxvar_GXI:'AV65Bmpsnganhador_GXI',nac:gx.falseFn};
   GXValidFnc[81]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[84]={fld:"TABLE3",grid:0};
   GXValidFnc[85]={fld:"TABLE4",grid:0};
   GXValidFnc[88]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"decimal",len:14,dec:2,sign:false,pic:"ZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTOTVISTA",gxz:"ZV33TotVista",gxold:"OV33TotVista",gxvar:"AV33TotVista",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33TotVista=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV33TotVista=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTOTVISTA",gx.O.AV33TotVista,2,',')},c2v:function(){gx.O.AV33TotVista=this.val()},val:function(){return gx.fn.getDecimalValue("vTOTVISTA",'.',',')},nac:gx.falseFn};
   GXValidFnc[93]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"decimal",len:14,dec:2,sign:false,pic:"ZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTOTPRAZO",gxz:"ZV32TotPrazo",gxold:"OV32TotPrazo",gxvar:"AV32TotPrazo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32TotPrazo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV32TotPrazo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTOTPRAZO",gx.O.AV32TotPrazo,2,',')},c2v:function(){gx.O.AV32TotPrazo=this.val()},val:function(){return gx.fn.getDecimalValue("vTOTPRAZO",'.',',')},nac:gx.falseFn};
   GXValidFnc[99]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Deptocomprasempresaid,isvalid:null,rgrid:[],fld:"vDEPTOCOMPRASEMPRESAID",gxz:"ZV31DeptoComprasEmpresaId",gxold:"OV31DeptoComprasEmpresaId",gxvar:"AV31DeptoComprasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31DeptoComprasEmpresaId=Value},v2z:function(Value){gx.O.ZV31DeptoComprasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vDEPTOCOMPRASEMPRESAID",gx.O.AV31DeptoComprasEmpresaId,0)},c2v:function(){gx.O.AV31DeptoComprasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vDEPTOCOMPRASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[100]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV20EmpresaPadrao",gxold:"OV20EmpresaPadrao",gxvar:"AV20EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV20EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV20EmpresaPadrao,0)},c2v:function(){gx.O.AV20EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[101]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaempresaid,isvalid:null,rgrid:[],fld:"vPESSOAEMPRESAID",gxz:"ZV23PessoaEmpresaId",gxold:"OV23PessoaEmpresaId",gxvar:"AV23PessoaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23PessoaEmpresaId=Value},v2z:function(Value){gx.O.ZV23PessoaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMPRESAID",gx.O.AV23PessoaEmpresaId,0)},c2v:function(){gx.O.AV23PessoaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[102]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoempresaid,isvalid:null,rgrid:[],fld:"vPRODUTOEMPRESAID",gxz:"ZV22ProdutoEmpresaId",gxold:"OV22ProdutoEmpresaId",gxvar:"AV22ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22ProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV22ProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOEMPRESAID",gx.O.AV22ProdutoEmpresaId,0)},c2v:function(){gx.O.AV22ProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[103]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Solicitacaoempresaid,isvalid:null,rgrid:[],fld:"vSOLICITACAOEMPRESAID",gxz:"ZV24SolicitacaoEmpresaId",gxold:"OV24SolicitacaoEmpresaId",gxvar:"AV24SolicitacaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24SolicitacaoEmpresaId=Value},v2z:function(Value){gx.O.ZV24SolicitacaoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vSOLICITACAOEMPRESAID",gx.O.AV24SolicitacaoEmpresaId,0)},c2v:function(){gx.O.AV24SolicitacaoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vSOLICITACAOEMPRESAID")},nac:gx.falseFn};
   this.AV11SolicitacaoNumero = 0 ;
   this.ZV11SolicitacaoNumero = 0 ;
   this.OV11SolicitacaoNumero = 0 ;
   this.AV29DeptoComprasCodigo = "" ;
   this.ZV29DeptoComprasCodigo = "" ;
   this.OV29DeptoComprasCodigo = "" ;
   this.AV30DeptoComprasNome = "" ;
   this.ZV30DeptoComprasNome = "" ;
   this.OV30DeptoComprasNome = "" ;
   this.AV16PessoaId = 0 ;
   this.ZV16PessoaId = 0 ;
   this.OV16PessoaId = 0 ;
   this.AV17PessoaFantasia = "" ;
   this.ZV17PessoaFantasia = "" ;
   this.OV17PessoaFantasia = "" ;
   this.AV12SolicitanteCodigo = 0 ;
   this.ZV12SolicitanteCodigo = 0 ;
   this.OV12SolicitanteCodigo = 0 ;
   this.AV13SolicitanteNome = "" ;
   this.ZV13SolicitanteNome = "" ;
   this.OV13SolicitanteNome = "" ;
   this.AV19PessoaCNPJ = "" ;
   this.ZV19PessoaCNPJ = "" ;
   this.OV19PessoaCNPJ = "" ;
   this.AV18PessoaTelefone = "" ;
   this.ZV18PessoaTelefone = "" ;
   this.OV18PessoaTelefone = "" ;
   this.AV28MapaPrecoTipoPreco = "" ;
   this.ZV28MapaPrecoTipoPreco = "" ;
   this.OV28MapaPrecoTipoPreco = "" ;
   this.ZV46GXV11V = 0 ;
   this.OV46GXV11V = 0 ;
   this.ZV47GXV11W = 0 ;
   this.OV47GXV11W = 0 ;
   this.ZV48GXV11X = "" ;
   this.OV48GXV11X = "" ;
   this.ZV49GXV11Y = "" ;
   this.OV49GXV11Y = "" ;
   this.ZV50GXV11Z = "" ;
   this.OV50GXV11Z = "" ;
   this.ZV51GXV120 = 0 ;
   this.OV51GXV120 = 0 ;
   this.ZV52GXV121 = 0 ;
   this.OV52GXV121 = 0 ;
   this.ZV53GXV122 = 0 ;
   this.OV53GXV122 = 0 ;
   this.ZV54GXV123 = 0 ;
   this.OV54GXV123 = 0 ;
   this.ZV55GXV124 = 0 ;
   this.OV55GXV124 = 0 ;
   this.ZV56GXV125 = 0 ;
   this.OV56GXV125 = 0 ;
   this.ZV57GXV126 = "" ;
   this.OV57GXV126 = "" ;
   this.ZV58GXV127 = 0 ;
   this.OV58GXV127 = 0 ;
   this.ZV41bmpSnGanhador = "" ;
   this.OV41bmpSnGanhador = "" ;
   this.AV33TotVista = 0 ;
   this.ZV33TotVista = 0 ;
   this.OV33TotVista = 0 ;
   this.AV32TotPrazo = 0 ;
   this.ZV32TotPrazo = 0 ;
   this.OV32TotPrazo = 0 ;
   this.AV31DeptoComprasEmpresaId = "" ;
   this.ZV31DeptoComprasEmpresaId = "" ;
   this.OV31DeptoComprasEmpresaId = "" ;
   this.AV20EmpresaPadrao = "" ;
   this.ZV20EmpresaPadrao = "" ;
   this.OV20EmpresaPadrao = "" ;
   this.AV23PessoaEmpresaId = "" ;
   this.ZV23PessoaEmpresaId = "" ;
   this.OV23PessoaEmpresaId = "" ;
   this.AV22ProdutoEmpresaId = "" ;
   this.ZV22ProdutoEmpresaId = "" ;
   this.OV22ProdutoEmpresaId = "" ;
   this.AV24SolicitacaoEmpresaId = "" ;
   this.ZV24SolicitacaoEmpresaId = "" ;
   this.OV24SolicitacaoEmpresaId = "" ;
   this.AV11SolicitacaoNumero = 0 ;
   this.AV29DeptoComprasCodigo = "" ;
   this.AV30DeptoComprasNome = "" ;
   this.AV16PessoaId = 0 ;
   this.AV17PessoaFantasia = "" ;
   this.AV12SolicitanteCodigo = 0 ;
   this.AV13SolicitanteNome = "" ;
   this.AV19PessoaCNPJ = "" ;
   this.AV18PessoaTelefone = "" ;
   this.AV28MapaPrecoTipoPreco = "" ;
   this.AV33TotVista = 0 ;
   this.AV32TotPrazo = 0 ;
   this.AV31DeptoComprasEmpresaId = "" ;
   this.AV20EmpresaPadrao = "" ;
   this.AV23PessoaEmpresaId = "" ;
   this.AV22ProdutoEmpresaId = "" ;
   this.AV24SolicitacaoEmpresaId = "" ;
   this.AV26ProdutoId = 0 ;
   this.GXV11V = 0 ;
   this.GXV11W = 0 ;
   this.GXV11X = "" ;
   this.GXV11Y = "" ;
   this.GXV11Z = "" ;
   this.GXV120 = 0 ;
   this.GXV121 = 0 ;
   this.GXV122 = 0 ;
   this.GXV123 = 0 ;
   this.GXV124 = 0 ;
   this.GXV125 = 0 ;
   this.GXV126 = "" ;
   this.GXV127 = 0 ;
   this.AV41bmpSnGanhador = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A3488DeptoComprasCodigo = "" ;
   this.A3487DeptoComprasEmpresaId = "" ;
   this.A3483DeptoComprasNome = "" ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A4028SolicitanteCodigo = 0 ;
   this.A4060SolicitanteNome = "" ;
   this.A4027SolicitanteEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A70PessoaRazaoSocial = "" ;
   this.A472PessoaCNPJ = "" ;
   this.A72PessoaTelefone = "" ;
   this.A3481CotacaoUsuarioAlt = "" ;
   this.A3392SolicitacaoItemSeq = 0 ;
   this.A4050SolicitacaoItemUnidade = "" ;
   this.A3394CotacaoMarca = "" ;
   this.A3479CotacaoValorTotalaPrazo = 0 ;
   this.A3473CotacaoValorTotalAVista = 0 ;
   this.A3397CotacaoSnGanhador = "" ;
   this.A4042SolicitacaoItemQtdePedida = 0 ;
   this.AV36SdtCotacaoItem = {} ;
   this.Events = {"e11ou2_client": ["'FECHAR'", true] ,"e15ou2_client": ["ENTER", true] ,"e16ou2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV36SdtCotacaoItem',fld:'vSDTCOTACAOITEM',grid:66},{av:'AV19PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV18PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV23PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV16PessoaId',fld:'vPESSOAID',hsh:true},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'AV11SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV24SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'A4028SolicitanteCodigo',fld:'SOLICITANTECODIGO'},{av:'A4060SolicitanteNome',fld:'SOLICITANTENOME'},{av:'A3487DeptoComprasEmpresaId',fld:'DEPTOCOMPRASEMPRESAID'},{av:'AV31DeptoComprasEmpresaId',fld:'vDEPTOCOMPRASEMPRESAID'},{av:'A3488DeptoComprasCodigo',fld:'DEPTOCOMPRASCODIGO'},{av:'AV29DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'A3483DeptoComprasNome',fld:'DEPTOCOMPRASNOME'}],[{av:'gx.fn.getCtrlProperty("TEXTBLOCK2","Visible")',ctrl:'TEXTBLOCK2',prop:'Visible'},{av:'AV17PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV19PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV18PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV28MapaPrecoTipoPreco',fld:'vMAPAPRECOTIPOPRECO'},{av:'AV12SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV13SolicitanteNome',fld:'vSOLICITANTENOME'},{av:'AV30DeptoComprasNome',fld:'vDEPTOCOMPRASNOME'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV36SdtCotacaoItem',fld:'vSDTCOTACAOITEM',grid:66}],[{av:'AV41bmpSnGanhador',fld:'vBMPSNGANHADOR'}]];
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("A70PessoaRazaoSocial", "PESSOARAZAOSOCIAL", 0, "svchar");
   this.setVCMap("A472PessoaCNPJ", "PESSOACNPJ", 0, "char");
   this.setVCMap("A72PessoaTelefone", "PESSOATELEFONE", 0, "svchar");
   this.setVCMap("A3370SolicitacaoEmpresaId", "SOLICITACAOEMPRESAID", 0, "char");
   this.setVCMap("A3371SolicitacaoNumero", "SOLICITACAONUMERO", 0, "int");
   this.setVCMap("A4028SolicitanteCodigo", "SOLICITANTECODIGO", 0, "int");
   this.setVCMap("A4060SolicitanteNome", "SOLICITANTENOME", 0, "svchar");
   this.setVCMap("A3487DeptoComprasEmpresaId", "DEPTOCOMPRASEMPRESAID", 0, "char");
   this.setVCMap("A3488DeptoComprasCodigo", "DEPTOCOMPRASCODIGO", 0, "svchar");
   this.setVCMap("A3483DeptoComprasNome", "DEPTOCOMPRASNOME", 0, "svchar");
   this.setVCMap("AV36SdtCotacaoItem", "vSDTCOTACAOITEM", 0, "SdtCotacao.SdtCotacaoItem");
   this.setVCMap("AV26ProdutoId", "vPRODUTOID", 0, "int");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("A70PessoaRazaoSocial", "PESSOARAZAOSOCIAL", 0, "svchar");
   this.setVCMap("A472PessoaCNPJ", "PESSOACNPJ", 0, "char");
   this.setVCMap("A72PessoaTelefone", "PESSOATELEFONE", 0, "svchar");
   this.setVCMap("A3370SolicitacaoEmpresaId", "SOLICITACAOEMPRESAID", 0, "char");
   this.setVCMap("A3371SolicitacaoNumero", "SOLICITACAONUMERO", 0, "int");
   this.setVCMap("A4028SolicitanteCodigo", "SOLICITANTECODIGO", 0, "int");
   this.setVCMap("A4060SolicitanteNome", "SOLICITANTENOME", 0, "svchar");
   this.setVCMap("A3487DeptoComprasEmpresaId", "DEPTOCOMPRASEMPRESAID", 0, "char");
   this.setVCMap("A3488DeptoComprasCodigo", "DEPTOCOMPRASCODIGO", 0, "svchar");
   this.setVCMap("A3483DeptoComprasNome", "DEPTOCOMPRASNOME", 0, "svchar");
   this.setVCMap("AV36SdtCotacaoItem", "vSDTCOTACAOITEM", 0, "SdtCotacao.SdtCotacaoItem");
   GridContainer.addRefreshingVar(this.GXValidFnc[52]);
   GridContainer.addRefreshingVar(this.GXValidFnc[56]);
   GridContainer.addRefreshingVar({rfrVar:"A227EmpresaPessoasEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[101]);
   GridContainer.addRefreshingVar({rfrVar:"A69PessoaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[29]);
   GridContainer.addRefreshingVar({rfrVar:"A70PessoaRazaoSocial"});
   GridContainer.addRefreshingVar({rfrVar:"A472PessoaCNPJ"});
   GridContainer.addRefreshingVar({rfrVar:"A72PessoaTelefone"});
   GridContainer.addRefreshingVar(this.GXValidFnc[10]);
   GridContainer.addRefreshingVar({rfrVar:"A3370SolicitacaoEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[103]);
   GridContainer.addRefreshingVar({rfrVar:"A3371SolicitacaoNumero"});
   GridContainer.addRefreshingVar({rfrVar:"A4028SolicitanteCodigo"});
   GridContainer.addRefreshingVar({rfrVar:"A4060SolicitanteNome"});
   GridContainer.addRefreshingVar({rfrVar:"A3487DeptoComprasEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[99]);
   GridContainer.addRefreshingVar({rfrVar:"A3488DeptoComprasCodigo"});
   GridContainer.addRefreshingVar(this.GXValidFnc[17]);
   GridContainer.addRefreshingVar({rfrVar:"A3483DeptoComprasNome"});
   GridContainer.addRefreshingVar({rfrVar:"AV36SdtCotacaoItem"});
   this.addGridBCProperty("Sdtcotacaoitem", ["SdtCotacaoItem", "SolicitacaoItemSeq"], this.GXValidFnc[67], "AV36SdtCotacaoItem");
   this.addGridBCProperty("Sdtcotacaoitem", ["SdtCotacaoItem", "ProdutoId"], this.GXValidFnc[68], "AV36SdtCotacaoItem");
   this.addGridBCProperty("Sdtcotacaoitem", ["SdtCotacaoItem", "ProdutoDescricaoResumida"], this.GXValidFnc[69], "AV36SdtCotacaoItem");
   this.addGridBCProperty("Sdtcotacaoitem", ["SdtCotacaoItem", "ProdutoUnidadeCompraId"], this.GXValidFnc[70], "AV36SdtCotacaoItem");
   this.addGridBCProperty("Sdtcotacaoitem", ["SdtCotacaoItem", "CotacaoMarca"], this.GXValidFnc[71], "AV36SdtCotacaoItem");
   this.addGridBCProperty("Sdtcotacaoitem", ["SdtCotacaoItem", "CotacaoValoraVista"], this.GXValidFnc[72], "AV36SdtCotacaoItem");
   this.addGridBCProperty("Sdtcotacaoitem", ["SdtCotacaoItem", "CotacaoValoraPrazo"], this.GXValidFnc[73], "AV36SdtCotacaoItem");
   this.addGridBCProperty("Sdtcotacaoitem", ["SdtCotacaoItem", "CotacaoQuantidade"], this.GXValidFnc[74], "AV36SdtCotacaoItem");
   this.addGridBCProperty("Sdtcotacaoitem", ["SdtCotacaoItem", "CotacaoValorTotalAvista"], this.GXValidFnc[75], "AV36SdtCotacaoItem");
   this.addGridBCProperty("Sdtcotacaoitem", ["SdtCotacaoItem", "CotacaoValorTotalaPrazo"], this.GXValidFnc[76], "AV36SdtCotacaoItem");
   this.addGridBCProperty("Sdtcotacaoitem", ["SdtCotacaoItem", "SolicitacaoNumero"], this.GXValidFnc[77], "AV36SdtCotacaoItem");
   this.addGridBCProperty("Sdtcotacaoitem", ["SdtCotacaoItem", "CotacaoSnGanhador"], this.GXValidFnc[78], "AV36SdtCotacaoItem");
   this.addGridBCProperty("Sdtcotacaoitem", ["SdtCotacaoItem", "CotacaoValorTotalLiquido"], this.GXValidFnc[79], "AV36SdtCotacaoItem");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalconsultarcotacoes());
