/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:11:2.55
*/
gx.evt.autoSkip = false;
gx.define('hsolicitarsenha', false, function () {
   this.ServerClass =  "hsolicitarsenha" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("10", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV17TipoSolicitacao=gx.fn.getIntegerValue("vTIPOSOLICITACAO",'.') ;
      this.AV32Sdt=gx.fn.getControlValue("vSDT") ;
      this.AV30AgrupamentoSaidaId=gx.fn.getIntegerValue("vAGRUPAMENTOSAIDAID",'.') ;
   };
   this.Validv_Usuarioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSUARIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e122ci2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e112ci2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e162ci2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,20,23,25,26,27,28,29,30,31,32,33,34,35,36,37,47];
   this.GXLastCtrlId =47;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",24,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hsolicitarsenha",[],false,1,false,true,0,true,false,false,"CollSDTProdutoAgr.SDTProdutoAgrItem",0,"px","Novo registro",true,false,false,null,null,false,"AV32Sdt",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV10P",25,"CTLCODIGOBARRAS","Código de Barras","","CodigoBarras","int",0,"px",14,14,"right",null,[],"GXV10P","GXV10P",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10Q",26,"CTLREFERENCIA","Referência","","Referencia","svchar",0,"px",20,20,"left",null,[],"GXV10Q","GXV10Q",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV10R",27,"CTLNOMEPRODUTO","Produto","","NomeProduto","svchar",0,"px",40,40,"left",null,[],"GXV10R","GXV10R",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV10S",28,"CTLQTDEVENDIDA","Qtde Vendida","","QtdeVendida","decimal",0,"px",21,21,"right",null,[],"GXV10S","GXV10S",true,4,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10T",29,"CTLQTDECONFERIDA","Qtde Conferida","","QtdeConferida","decimal",0,"px",21,21,"right",null,[],"GXV10T","GXV10T",true,4,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Qtdefalta",30,"vQTDEFALTA","Qtde Falta","","QtdeFalta","decimal",0,"px",21,21,"right",null,[],"Qtdefalta","QtdeFalta",true,4,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10V",31,"CTLLOCAL","Combinação Lote","","Local","char",0,"px",20,20,"left",null,[],"GXV10V","GXV10V",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10W",32,"CTLLOCALFORMATADO","Local Formatado","","LocalFormatado","svchar",0,"px",40,40,"left",null,[],"GXV10W","GXV10W",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10X",33,"CTLNOMEFABRICANTE","Razão Social Cliente/Fornecedor","","NomeFabricante","svchar",0,"px",100,80,"left",null,[],"GXV10X","GXV10X",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10Y",34,"CTLID","Código do Produto","","Id","int",0,"px",10,10,"right",null,[],"GXV10Y","GXV10Y",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10Z",35,"CTLUNIDADE","Código da Unidade","","Unidade","char",0,"px",3,3,"left",null,[],"GXV10Z","GXV10Z",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV110",36,"CTLQTDCARRINHO","Agrupamento Carrinho Qtde Venda","","QtdCarrinho","decimal",0,"px",21,21,"right",null,[],"GXV110","GXV110",false,4,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABUSUARIO",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Usuarioid,isvalid:null,rgrid:[],fld:"vUSUARIOID",gxz:"ZV20UsuarioId",gxold:"OV20UsuarioId",gxvar:"AV20UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20UsuarioId=Value},v2z:function(Value){gx.O.ZV20UsuarioId=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOID",gx.O.AV20UsuarioId,0)},c2v:function(){gx.O.AV20UsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"char",len:32,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIOSENHA",gxz:"ZV19UsuarioSenha",gxold:"OV19UsuarioSenha",gxvar:"AV19UsuarioSenha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19UsuarioSenha=Value},v2z:function(Value){gx.O.ZV19UsuarioSenha=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOSENHA",gx.O.AV19UsuarioSenha,0)},c2v:function(){gx.O.AV19UsuarioSenha=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOSENHA")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TABPRODUTOS",grid:0};
   GXValidFnc[23]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[25]={lvl:2,type:"int",len:14,dec:0,sign:false,pic:"ZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:24,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCODIGOBARRAS",gxz:"ZV39GXV10P",gxold:"OV39GXV10P",gxvar:"GXV10P",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10P=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39GXV10P=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLCODIGOBARRAS",row || gx.fn.currentGridRowImpl(24),gx.O.GXV10P,0)},c2v:function(){gx.O.GXV10P=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLCODIGOBARRAS",row || gx.fn.currentGridRowImpl(24),'.')},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:24,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLREFERENCIA",gxz:"ZV40GXV10Q",gxold:"OV40GXV10Q",gxvar:"GXV10Q",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10Q=Value},v2z:function(Value){gx.O.ZV40GXV10Q=Value},v2c:function(row){gx.fn.setGridControlValue("CTLREFERENCIA",row || gx.fn.currentGridRowImpl(24),gx.O.GXV10Q,0)},c2v:function(){gx.O.GXV10Q=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLREFERENCIA",row || gx.fn.currentGridRowImpl(24))},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:24,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLNOMEPRODUTO",gxz:"ZV41GXV10R",gxold:"OV41GXV10R",gxvar:"GXV10R",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10R=Value},v2z:function(Value){gx.O.ZV41GXV10R=Value},v2c:function(row){gx.fn.setGridControlValue("CTLNOMEPRODUTO",row || gx.fn.currentGridRowImpl(24),gx.O.GXV10R,0)},c2v:function(){gx.O.GXV10R=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLNOMEPRODUTO",row || gx.fn.currentGridRowImpl(24))},nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,isacc:0,grid:24,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLQTDEVENDIDA",gxz:"ZV42GXV10S",gxold:"OV42GXV10S",gxvar:"GXV10S",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10S=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV42GXV10S=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLQTDEVENDIDA",row || gx.fn.currentGridRowImpl(24),gx.O.GXV10S,4,',')},c2v:function(){gx.O.GXV10S=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLQTDEVENDIDA",row || gx.fn.currentGridRowImpl(24),'.',',')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,isacc:0,grid:24,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLQTDECONFERIDA",gxz:"ZV43GXV10T",gxold:"OV43GXV10T",gxvar:"GXV10T",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10T=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV43GXV10T=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLQTDECONFERIDA",row || gx.fn.currentGridRowImpl(24),gx.O.GXV10T,4,',')},c2v:function(){gx.O.GXV10T=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLQTDECONFERIDA",row || gx.fn.currentGridRowImpl(24),'.',',')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,isacc:0,grid:24,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEFALTA",gxz:"ZV35QtdeFalta",gxold:"OV35QtdeFalta",gxvar:"AV35QtdeFalta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV35QtdeFalta=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV35QtdeFalta=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vQTDEFALTA",row || gx.fn.currentGridRowImpl(24),gx.O.AV35QtdeFalta,4,',')},c2v:function(){gx.O.AV35QtdeFalta=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vQTDEFALTA",row || gx.fn.currentGridRowImpl(24),'.',',')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:24,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLLOCAL",gxz:"ZV44GXV10V",gxold:"OV44GXV10V",gxvar:"GXV10V",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10V=Value},v2z:function(Value){gx.O.ZV44GXV10V=Value},v2c:function(row){gx.fn.setGridControlValue("CTLLOCAL",row || gx.fn.currentGridRowImpl(24),gx.O.GXV10V,0)},c2v:function(){gx.O.GXV10V=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLLOCAL",row || gx.fn.currentGridRowImpl(24))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:24,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLLOCALFORMATADO",gxz:"ZV45GXV10W",gxold:"OV45GXV10W",gxvar:"GXV10W",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10W=Value},v2z:function(Value){gx.O.ZV45GXV10W=Value},v2c:function(row){gx.fn.setGridControlValue("CTLLOCALFORMATADO",row || gx.fn.currentGridRowImpl(24),gx.O.GXV10W,0)},c2v:function(){gx.O.GXV10W=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLLOCALFORMATADO",row || gx.fn.currentGridRowImpl(24))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:24,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLNOMEFABRICANTE",gxz:"ZV46GXV10X",gxold:"OV46GXV10X",gxvar:"GXV10X",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10X=Value},v2z:function(Value){gx.O.ZV46GXV10X=Value},v2c:function(row){gx.fn.setGridControlValue("CTLNOMEFABRICANTE",row || gx.fn.currentGridRowImpl(24),gx.O.GXV10X,0)},c2v:function(){gx.O.GXV10X=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLNOMEFABRICANTE",row || gx.fn.currentGridRowImpl(24))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:24,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLID",gxz:"ZV47GXV10Y",gxold:"OV47GXV10Y",gxvar:"GXV10Y",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10Y=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47GXV10Y=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLID",row || gx.fn.currentGridRowImpl(24),gx.O.GXV10Y,0)},c2v:function(){gx.O.GXV10Y=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLID",row || gx.fn.currentGridRowImpl(24),'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:24,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLUNIDADE",gxz:"ZV48GXV10Z",gxold:"OV48GXV10Z",gxvar:"GXV10Z",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10Z=Value},v2z:function(Value){gx.O.ZV48GXV10Z=Value},v2c:function(row){gx.fn.setGridControlValue("CTLUNIDADE",row || gx.fn.currentGridRowImpl(24),gx.O.GXV10Z,0)},c2v:function(){gx.O.GXV10Z=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLUNIDADE",row || gx.fn.currentGridRowImpl(24))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,isacc:0,grid:24,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLQTDCARRINHO",gxz:"ZV49GXV110",gxold:"OV49GXV110",gxvar:"GXV110",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV110=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV49GXV110=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLQTDCARRINHO",row || gx.fn.currentGridRowImpl(24),gx.O.GXV110,4,',')},c2v:function(){gx.O.GXV110=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLQTDCARRINHO",row || gx.fn.currentGridRowImpl(24),'.',',')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[47]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNPERMISSAOQTDE",gxz:"ZV34SnPermissaoQtde",gxold:"OV34SnPermissaoQtde",gxvar:"AV34SnPermissaoQtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34SnPermissaoQtde=Value},v2z:function(Value){gx.O.ZV34SnPermissaoQtde=Value},v2c:function(){gx.fn.setControlValue("vSNPERMISSAOQTDE",gx.O.AV34SnPermissaoQtde,0)},c2v:function(){gx.O.AV34SnPermissaoQtde=this.val()},val:function(){return gx.fn.getControlValue("vSNPERMISSAOQTDE")},nac:gx.falseFn};
   this.AV20UsuarioId = "" ;
   this.ZV20UsuarioId = "" ;
   this.OV20UsuarioId = "" ;
   this.AV19UsuarioSenha = "" ;
   this.ZV19UsuarioSenha = "" ;
   this.OV19UsuarioSenha = "" ;
   this.ZV39GXV10P = 0 ;
   this.OV39GXV10P = 0 ;
   this.ZV40GXV10Q = "" ;
   this.OV40GXV10Q = "" ;
   this.ZV41GXV10R = "" ;
   this.OV41GXV10R = "" ;
   this.ZV42GXV10S = 0 ;
   this.OV42GXV10S = 0 ;
   this.ZV43GXV10T = 0 ;
   this.OV43GXV10T = 0 ;
   this.ZV35QtdeFalta = 0 ;
   this.OV35QtdeFalta = 0 ;
   this.ZV44GXV10V = "" ;
   this.OV44GXV10V = "" ;
   this.ZV45GXV10W = "" ;
   this.OV45GXV10W = "" ;
   this.ZV46GXV10X = "" ;
   this.OV46GXV10X = "" ;
   this.ZV47GXV10Y = 0 ;
   this.OV47GXV10Y = 0 ;
   this.ZV48GXV10Z = "" ;
   this.OV48GXV10Z = "" ;
   this.ZV49GXV110 = 0 ;
   this.OV49GXV110 = 0 ;
   this.AV34SnPermissaoQtde = "" ;
   this.ZV34SnPermissaoQtde = "" ;
   this.OV34SnPermissaoQtde = "" ;
   this.AV20UsuarioId = "" ;
   this.AV19UsuarioSenha = "" ;
   this.AV34SnPermissaoQtde = "" ;
   this.AV17TipoSolicitacao = 0 ;
   this.AV30AgrupamentoSaidaId = 0 ;
   this.GXV10P = 0 ;
   this.GXV10Q = "" ;
   this.GXV10R = "" ;
   this.GXV10S = 0 ;
   this.GXV10T = 0 ;
   this.AV35QtdeFalta = 0 ;
   this.GXV10V = "" ;
   this.GXV10W = "" ;
   this.GXV10X = "" ;
   this.GXV10Y = 0 ;
   this.GXV10Z = "" ;
   this.GXV110 = 0 ;
   this.A6157SaidaItemLoteCombinacao = "" ;
   this.A6160SaidaItemCodigoBarras = 0 ;
   this.A4307SaidaId = 0 ;
   this.A4306SaidaEmpresaId = "" ;
   this.A4309SaidaItemSeq = 0 ;
   this.A6165SaidaItemQuantidade = 0 ;
   this.A75UsuarioId = "" ;
   this.A608UsuarioChave = "" ;
   this.A605UsuarioSenha = "" ;
   this.AV32Sdt = [ ] ;
   this.Events = {"e122ci2_client": ["ENTER", true] ,"e112ci2_client": ["'FECHAR'", true] ,"e162ci2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32Sdt',fld:'vSDT',grid:24},{av:'AV17TipoSolicitacao',fld:'vTIPOSOLICITACAO',hsh:true},{av:'AV34SnPermissaoQtde',fld:'vSNPERMISSAOQTDE'}],[{av:'gx.fn.getCtrlProperty("TABPRODUTOS","Visible")',ctrl:'TABPRODUTOS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABUSUARIO","Visible")',ctrl:'TABUSUARIO',prop:'Visible'}]];
   this.EvtParms["ENTER"] = [[{av:'AV34SnPermissaoQtde',fld:'vSNPERMISSAOQTDE'},{av:'AV17TipoSolicitacao',fld:'vTIPOSOLICITACAO',hsh:true},{av:'AV20UsuarioId',fld:'vUSUARIOID'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV21EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV19UsuarioSenha',fld:'vUSUARIOSENHA'},{av:'A608UsuarioChave',fld:'USUARIOCHAVE'},{av:'A605UsuarioSenha',fld:'USUARIOSENHA'},{av:'AV18SnLiberou',fld:'vSNLIBEROU'}],[{av:'AV23TpErro',fld:'vTPERRO'},{av:'AV18SnLiberou',fld:'vSNLIBEROU'},{av:'AV50GXLvl53',fld:'vGXLVL53'},{av:'AV22SnPermissao',fld:'vSNPERMISSAO'},{av:'AV25UsuarioSenhaAux',fld:'vUSUARIOSENHAAUX'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17TipoSolicitacao',fld:'vTIPOSOLICITACAO',hsh:true},{av:'AV18SnLiberou',fld:'vSNLIBEROU'}],[{av:'AV18SnLiberou',fld:'vSNLIBEROU'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV32Sdt',fld:'vSDT',grid:24}],[{av:'AV35QtdeFalta',fld:'vQTDEFALTA'}]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17TipoSolicitacao',fld:'vTIPOSOLICITACAO',hsh:true},{av:'AV34SnPermissaoQtde',fld:'vSNPERMISSAOQTDE'},{av:'AV32Sdt',fld:'vSDT',grid:24}],[{av:'gx.fn.getCtrlProperty("TABPRODUTOS","Visible")',ctrl:'TABPRODUTOS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABUSUARIO","Visible")',ctrl:'TABUSUARIO',prop:'Visible'}]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17TipoSolicitacao',fld:'vTIPOSOLICITACAO',hsh:true},{av:'AV34SnPermissaoQtde',fld:'vSNPERMISSAOQTDE'},{av:'AV32Sdt',fld:'vSDT',grid:24}],[{av:'gx.fn.getCtrlProperty("TABPRODUTOS","Visible")',ctrl:'TABPRODUTOS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABUSUARIO","Visible")',ctrl:'TABUSUARIO',prop:'Visible'}]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17TipoSolicitacao',fld:'vTIPOSOLICITACAO',hsh:true},{av:'AV34SnPermissaoQtde',fld:'vSNPERMISSAOQTDE'},{av:'AV32Sdt',fld:'vSDT',grid:24}],[{av:'gx.fn.getCtrlProperty("TABPRODUTOS","Visible")',ctrl:'TABPRODUTOS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABUSUARIO","Visible")',ctrl:'TABUSUARIO',prop:'Visible'}]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17TipoSolicitacao',fld:'vTIPOSOLICITACAO',hsh:true},{av:'AV34SnPermissaoQtde',fld:'vSNPERMISSAOQTDE'},{av:'AV32Sdt',fld:'vSDT',grid:24}],[{av:'gx.fn.getCtrlProperty("TABPRODUTOS","Visible")',ctrl:'TABPRODUTOS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABUSUARIO","Visible")',ctrl:'TABUSUARIO',prop:'Visible'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17TipoSolicitacao", "vTIPOSOLICITACAO", 0, "int");
   this.setVCMap("AV32Sdt", "vSDT", 0, "CollSDTProdutoAgr.SDTProdutoAgrItem");
   this.setVCMap("AV30AgrupamentoSaidaId", "vAGRUPAMENTOSAIDAID", 0, "int");
   this.setVCMap("AV17TipoSolicitacao", "vTIPOSOLICITACAO", 0, "int");
   this.setVCMap("AV32Sdt", "vSDT", 0, "CollSDTProdutoAgr.SDTProdutoAgrItem");
   GridContainer.addRefreshingVar({rfrVar:"AV17TipoSolicitacao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[47]);
   GridContainer.addRefreshingVar({rfrVar:"AV32Sdt"});
   this.addGridBCProperty("Sdt", ["CodigoBarras"], this.GXValidFnc[25], "AV32Sdt");
   this.addGridBCProperty("Sdt", ["Referencia"], this.GXValidFnc[26], "AV32Sdt");
   this.addGridBCProperty("Sdt", ["NomeProduto"], this.GXValidFnc[27], "AV32Sdt");
   this.addGridBCProperty("Sdt", ["QtdeVendida"], this.GXValidFnc[28], "AV32Sdt");
   this.addGridBCProperty("Sdt", ["QtdeConferida"], this.GXValidFnc[29], "AV32Sdt");
   this.addGridBCProperty("Sdt", ["Local"], this.GXValidFnc[31], "AV32Sdt");
   this.addGridBCProperty("Sdt", ["LocalFormatado"], this.GXValidFnc[32], "AV32Sdt");
   this.addGridBCProperty("Sdt", ["NomeFabricante"], this.GXValidFnc[33], "AV32Sdt");
   this.addGridBCProperty("Sdt", ["Id"], this.GXValidFnc[34], "AV32Sdt");
   this.addGridBCProperty("Sdt", ["Unidade"], this.GXValidFnc[35], "AV32Sdt");
   this.addGridBCProperty("Sdt", ["QtdCarrinho"], this.GXValidFnc[36], "AV32Sdt");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hsolicitarsenha());
