/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:1:31.18
*/
gx.evt.autoSkip = false;
gx.define('hmodaldetalharmapapreco', false, function () {
   this.ServerClass =  "hmodaldetalharmapapreco" ;
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
      this.AV12SolicitacaoEmpresaId=gx.fn.getControlValue("vSOLICITACAOEMPRESAID") ;
      this.A3410MapaPrecoItemQtdePedida=gx.fn.getDecimalValue("MAPAPRECOITEMQTDEPEDIDA",'.',',') ;
      this.A3654MapaPrecoProdutoId=gx.fn.getIntegerValue("MAPAPRECOPRODUTOID",'.') ;
      this.AV22SnPossui=gx.fn.getControlValue("vSNPOSSUI") ;
      this.A2964ProdutoEmpresaId=gx.fn.getControlValue("PRODUTOEMPRESAID") ;
      this.AV18ProdutoEmpresaId=gx.fn.getControlValue("vPRODUTOEMPRESAID") ;
      this.A2965ProdutoId=gx.fn.getIntegerValue("PRODUTOID",'.') ;
      this.AV17ProdutoId=gx.fn.getIntegerValue("vPRODUTOID",'.') ;
      this.A3399ProdutoCategoria=gx.fn.getControlValue("PRODUTOCATEGORIA") ;
      this.A3828ProdutoObservacao=gx.fn.getControlValue("PRODUTOOBSERVACAO") ;
      this.A2960ProdutoDescricao=gx.fn.getControlValue("PRODUTODESCRICAO") ;
      this.A3370SolicitacaoEmpresaId=gx.fn.getControlValue("SOLICITACAOEMPRESAID") ;
      this.A3371SolicitacaoNumero=gx.fn.getIntegerValue("SOLICITACAONUMERO",'.') ;
      this.AV21SolicitacaoItemSeq=gx.fn.getIntegerValue("vSOLICITACAOITEMSEQ",'.') ;
      this.A3405MapaPrecoNumero=gx.fn.getIntegerValue("MAPAPRECONUMERO",'.') ;
      this.A3684MapaPrecoCotacaoUsuAlt=gx.fn.getControlValue("MAPAPRECOCOTACAOUSUALT") ;
      this.AV23MapaPrecoTipoPreco=gx.fn.getControlValue("vMAPAPRECOTIPOPRECO") ;
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
   this.Validv_Mapapreconumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vMAPAPRECONUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e14oz2_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodaldetalharmapaprecocot",[this.AV11SolicitacaoNumero, this.AV13MapaPrecoNumero, this.A3392SolicitacaoItemSeq, this.AV23MapaPrecoTipoPreco, this.AV24MapaPrecoDataHoraAlt, this.AV25UsuarioNome]), []);
      this.refreshOutputs([]);
   };
   this.e11oz2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15oz2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e16oz2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,12,14,16,18,20,22,27,29,30,31,32,33,34,35,36,37,38];
   this.GXLastCtrlId =38;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hmodaldetalharmapapreco",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit(3392,29,"SOLICITACAOITEMSEQ","Item","","SolicitacaoItemSeq","int",0,"px",6,6,"right",null,[],3392,"SolicitacaoItemSeq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Produtodescricao",30,"vPRODUTODESCRICAO","Produto","","ProdutoDescricao","svchar",0,"px",40,40,"left",null,[],"Produtodescricao","ProdutoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("Qtdepedida",31,"vQTDEPEDIDA","Qtde Pedida","","QtdePedida","char",0,"px",22,22,"left",null,[],"Qtdepedida","QtdePedida",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3655,32,"MAPAPRECOITEMMARCA1","Marca 1","","MapaPrecoItemMarca1","svchar",0,"px",20,20,"left",null,[],3655,"MapaPrecoItemMarca1",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(3656,33,"MAPAPRECOITEMMARCA2","Marca 2","","MapaPrecoItemMarca2","svchar",0,"px",20,20,"left",null,[],3656,"MapaPrecoItemMarca2",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(3657,34,"MAPAPRECOITEMMARCA3","Marca 3","","MapaPrecoItemMarca3","svchar",0,"px",20,20,"left",null,[],3657,"MapaPrecoItemMarca3",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(3658,35,"MAPAPRECOITEMMARCAINAD","Marca Inad","","MapaPrecoItemMarcaInad","svchar",0,"px",20,20,"left",null,[],3658,"MapaPrecoItemMarcaInad",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(3659,36,"MAPAPRECOITEMVLRCOMPANO","Valor Comp Ano","","MapaPrecoItemVlrCompAno","decimal",0,"px",22,22,"right",null,[],3659,"MapaPrecoItemVlrCompAno",true,2,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmpdet","vBMPDET",37,0,"px",17,"px","e14oz2_client","","Detalhar","Image","GridColumnImage");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Solicitacaonumero,isvalid:null,rgrid:[this.Grid1Container],fld:"vSOLICITACAONUMERO",gxz:"ZV11SolicitacaoNumero",gxold:"OV11SolicitacaoNumero",gxvar:"AV11SolicitacaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11SolicitacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11SolicitacaoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAONUMERO",gx.O.AV11SolicitacaoNumero,0)},c2v:function(){gx.O.AV11SolicitacaoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Mapapreconumero,isvalid:null,rgrid:[this.Grid1Container],fld:"vMAPAPRECONUMERO",gxz:"ZV13MapaPrecoNumero",gxold:"OV13MapaPrecoNumero",gxvar:"AV13MapaPrecoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13MapaPrecoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13MapaPrecoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMAPAPRECONUMERO",gx.O.AV13MapaPrecoNumero,0)},c2v:function(){gx.O.AV13MapaPrecoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMAPAPRECONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMAPAPRECODATAHORAALT",gxz:"ZV24MapaPrecoDataHoraAlt",gxold:"OV24MapaPrecoDataHoraAlt",gxvar:"AV24MapaPrecoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24MapaPrecoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV24MapaPrecoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vMAPAPRECODATAHORAALT",gx.O.AV24MapaPrecoDataHoraAlt,0)},c2v:function(){gx.O.AV24MapaPrecoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vMAPAPRECODATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIONOME",gxz:"ZV25UsuarioNome",gxold:"OV25UsuarioNome",gxvar:"AV25UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25UsuarioNome=Value},v2z:function(Value){gx.O.ZV25UsuarioNome=Value},v2c:function(){gx.fn.setControlValue("vUSUARIONOME",gx.O.AV25UsuarioNome,0)},c2v:function(){gx.O.AV25UsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIONOME")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[29]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITACAOITEMSEQ",gxz:"Z3392SolicitacaoItemSeq",gxold:"O3392SolicitacaoItemSeq",gxvar:"A3392SolicitacaoItemSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3392SolicitacaoItemSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3392SolicitacaoItemSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SOLICITACAOITEMSEQ",row || gx.fn.currentGridRowImpl(28),gx.O.A3392SolicitacaoItemSeq,0)},c2v:function(){gx.O.A3392SolicitacaoItemSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SOLICITACAOITEMSEQ",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:28,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAO",gxz:"ZV19ProdutoDescricao",gxold:"OV19ProdutoDescricao",gxvar:"AV19ProdutoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV19ProdutoDescricao=Value},v2z:function(Value){gx.O.ZV19ProdutoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vPRODUTODESCRICAO",row || gx.fn.currentGridRowImpl(28),gx.O.AV19ProdutoDescricao,0)},c2v:function(){gx.O.AV19ProdutoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vPRODUTODESCRICAO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"char",len:22,dec:0,sign:false,ro:0,isacc:0,grid:28,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEPEDIDA",gxz:"ZV26QtdePedida",gxold:"OV26QtdePedida",gxvar:"AV26QtdePedida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV26QtdePedida=Value},v2z:function(Value){gx.O.ZV26QtdePedida=Value},v2c:function(row){gx.fn.setGridControlValue("vQTDEPEDIDA",row || gx.fn.currentGridRowImpl(28),gx.O.AV26QtdePedida,0)},c2v:function(){gx.O.AV26QtdePedida=this.val()},val:function(row){return gx.fn.getGridControlValue("vQTDEPEDIDA",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECOITEMMARCA1",gxz:"Z3655MapaPrecoItemMarca1",gxold:"O3655MapaPrecoItemMarca1",gxvar:"A3655MapaPrecoItemMarca1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3655MapaPrecoItemMarca1=Value},v2z:function(Value){gx.O.Z3655MapaPrecoItemMarca1=Value},v2c:function(row){gx.fn.setGridControlValue("MAPAPRECOITEMMARCA1",row || gx.fn.currentGridRowImpl(28),gx.O.A3655MapaPrecoItemMarca1,0)},c2v:function(){gx.O.A3655MapaPrecoItemMarca1=this.val()},val:function(row){return gx.fn.getGridControlValue("MAPAPRECOITEMMARCA1",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECOITEMMARCA2",gxz:"Z3656MapaPrecoItemMarca2",gxold:"O3656MapaPrecoItemMarca2",gxvar:"A3656MapaPrecoItemMarca2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3656MapaPrecoItemMarca2=Value},v2z:function(Value){gx.O.Z3656MapaPrecoItemMarca2=Value},v2c:function(row){gx.fn.setGridControlValue("MAPAPRECOITEMMARCA2",row || gx.fn.currentGridRowImpl(28),gx.O.A3656MapaPrecoItemMarca2,0)},c2v:function(){gx.O.A3656MapaPrecoItemMarca2=this.val()},val:function(row){return gx.fn.getGridControlValue("MAPAPRECOITEMMARCA2",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECOITEMMARCA3",gxz:"Z3657MapaPrecoItemMarca3",gxold:"O3657MapaPrecoItemMarca3",gxvar:"A3657MapaPrecoItemMarca3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3657MapaPrecoItemMarca3=Value},v2z:function(Value){gx.O.Z3657MapaPrecoItemMarca3=Value},v2c:function(row){gx.fn.setGridControlValue("MAPAPRECOITEMMARCA3",row || gx.fn.currentGridRowImpl(28),gx.O.A3657MapaPrecoItemMarca3,0)},c2v:function(){gx.O.A3657MapaPrecoItemMarca3=this.val()},val:function(row){return gx.fn.getGridControlValue("MAPAPRECOITEMMARCA3",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECOITEMMARCAINAD",gxz:"Z3658MapaPrecoItemMarcaInad",gxold:"O3658MapaPrecoItemMarcaInad",gxvar:"A3658MapaPrecoItemMarcaInad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3658MapaPrecoItemMarcaInad=Value},v2z:function(Value){gx.O.Z3658MapaPrecoItemMarcaInad=Value},v2c:function(row){gx.fn.setGridControlValue("MAPAPRECOITEMMARCAINAD",row || gx.fn.currentGridRowImpl(28),gx.O.A3658MapaPrecoItemMarcaInad,0)},c2v:function(){gx.O.A3658MapaPrecoItemMarcaInad=this.val()},val:function(row){return gx.fn.getGridControlValue("MAPAPRECOITEMMARCAINAD",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:28,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECOITEMVLRCOMPANO",gxz:"Z3659MapaPrecoItemVlrCompAno",gxold:"O3659MapaPrecoItemVlrCompAno",gxvar:"A3659MapaPrecoItemVlrCompAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3659MapaPrecoItemVlrCompAno=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3659MapaPrecoItemVlrCompAno=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("MAPAPRECOITEMVLRCOMPANO",row || gx.fn.currentGridRowImpl(28),gx.O.A3659MapaPrecoItemVlrCompAno,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3659MapaPrecoItemVlrCompAno=this.val()},val:function(row){return gx.fn.getGridDecimalValue("MAPAPRECOITEMVLRCOMPANO",row || gx.fn.currentGridRowImpl(28),'.',',')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDET",gxz:"ZV20bmpDet",gxold:"OV20bmpDet",gxvar:"AV20bmpDet",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV20bmpDet=Value},v2z:function(Value){gx.O.ZV20bmpDet=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDET",row || gx.fn.currentGridRowImpl(28),gx.O.AV20bmpDet,gx.O.AV31Bmpdet_GXI)},c2v:function(){gx.O.AV31Bmpdet_GXI=this.val_GXI();gx.O.AV20bmpDet=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDET",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDET_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV31Bmpdet_GXI',nac:gx.falseFn};
   GXValidFnc[38]={fld:"DIV2", format:2,grid:0};
   this.AV11SolicitacaoNumero = 0 ;
   this.ZV11SolicitacaoNumero = 0 ;
   this.OV11SolicitacaoNumero = 0 ;
   this.AV13MapaPrecoNumero = 0 ;
   this.ZV13MapaPrecoNumero = 0 ;
   this.OV13MapaPrecoNumero = 0 ;
   this.AV24MapaPrecoDataHoraAlt = gx.date.nullDate() ;
   this.ZV24MapaPrecoDataHoraAlt = gx.date.nullDate() ;
   this.OV24MapaPrecoDataHoraAlt = gx.date.nullDate() ;
   this.AV25UsuarioNome = "" ;
   this.ZV25UsuarioNome = "" ;
   this.OV25UsuarioNome = "" ;
   this.Z3392SolicitacaoItemSeq = 0 ;
   this.O3392SolicitacaoItemSeq = 0 ;
   this.ZV19ProdutoDescricao = "" ;
   this.OV19ProdutoDescricao = "" ;
   this.ZV26QtdePedida = "" ;
   this.OV26QtdePedida = "" ;
   this.Z3655MapaPrecoItemMarca1 = "" ;
   this.O3655MapaPrecoItemMarca1 = "" ;
   this.Z3656MapaPrecoItemMarca2 = "" ;
   this.O3656MapaPrecoItemMarca2 = "" ;
   this.Z3657MapaPrecoItemMarca3 = "" ;
   this.O3657MapaPrecoItemMarca3 = "" ;
   this.Z3658MapaPrecoItemMarcaInad = "" ;
   this.O3658MapaPrecoItemMarcaInad = "" ;
   this.Z3659MapaPrecoItemVlrCompAno = 0 ;
   this.O3659MapaPrecoItemVlrCompAno = 0 ;
   this.ZV20bmpDet = "" ;
   this.OV20bmpDet = "" ;
   this.AV11SolicitacaoNumero = 0 ;
   this.AV13MapaPrecoNumero = 0 ;
   this.AV24MapaPrecoDataHoraAlt = gx.date.nullDate() ;
   this.AV25UsuarioNome = "" ;
   this.AV23MapaPrecoTipoPreco = "" ;
   this.A3410MapaPrecoItemQtdePedida = 0 ;
   this.A3654MapaPrecoProdutoId = 0 ;
   this.A3405MapaPrecoNumero = 0 ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A3392SolicitacaoItemSeq = 0 ;
   this.AV19ProdutoDescricao = "" ;
   this.AV26QtdePedida = "" ;
   this.A3655MapaPrecoItemMarca1 = "" ;
   this.A3656MapaPrecoItemMarca2 = "" ;
   this.A3657MapaPrecoItemMarca3 = "" ;
   this.A3658MapaPrecoItemMarcaInad = "" ;
   this.A3659MapaPrecoItemVlrCompAno = 0 ;
   this.AV20bmpDet = "" ;
   this.A3684MapaPrecoCotacaoUsuAlt = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A3399ProdutoCategoria = "" ;
   this.A3828ProdutoObservacao = "" ;
   this.A2960ProdutoDescricao = "" ;
   this.AV12SolicitacaoEmpresaId = "" ;
   this.AV22SnPossui = "" ;
   this.AV18ProdutoEmpresaId = "" ;
   this.AV17ProdutoId = 0 ;
   this.AV21SolicitacaoItemSeq = 0 ;
   this.Events = {"e11oz2_client": ["'FECHAR'", true] ,"e15oz2_client": ["ENTER", true] ,"e16oz2_client": ["CANCEL", true] ,"e14oz2_client": ["'DETALHAR'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV12SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV11SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'AV13MapaPrecoNumero',fld:'vMAPAPRECONUMERO',hsh:true},{av:'AV20bmpDet',fld:'vBMPDET'},{av:'A3410MapaPrecoItemQtdePedida',fld:'MAPAPRECOITEMQTDEPEDIDA'},{av:'A3654MapaPrecoProdutoId',fld:'MAPAPRECOPRODUTOID'},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ'},{av:'AV22SnPossui',fld:'vSNPOSSUI'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV18ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV17ProdutoId',fld:'vPRODUTOID'},{av:'A3399ProdutoCategoria',fld:'PRODUTOCATEGORIA'},{av:'A3828ProdutoObservacao',fld:'PRODUTOOBSERVACAO'},{av:'A2960ProdutoDescricao',fld:'PRODUTODESCRICAO'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV21SolicitacaoItemSeq',fld:'vSOLICITACAOITEMSEQ'},{av:'A3405MapaPrecoNumero',fld:'MAPAPRECONUMERO'},{av:'A3684MapaPrecoCotacaoUsuAlt',fld:'MAPAPRECOCOTACAOUSUALT'}],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'A3410MapaPrecoItemQtdePedida',fld:'MAPAPRECOITEMQTDEPEDIDA'},{av:'A3654MapaPrecoProdutoId',fld:'MAPAPRECOPRODUTOID'},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ'},{av:'AV22SnPossui',fld:'vSNPOSSUI'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV18ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV17ProdutoId',fld:'vPRODUTOID'},{av:'A3399ProdutoCategoria',fld:'PRODUTOCATEGORIA'},{av:'A3828ProdutoObservacao',fld:'PRODUTOOBSERVACAO'},{av:'A2960ProdutoDescricao',fld:'PRODUTODESCRICAO'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV12SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV11SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'AV21SolicitacaoItemSeq',fld:'vSOLICITACAOITEMSEQ'},{av:'A3405MapaPrecoNumero',fld:'MAPAPRECONUMERO'},{av:'AV13MapaPrecoNumero',fld:'vMAPAPRECONUMERO',hsh:true},{av:'A3684MapaPrecoCotacaoUsuAlt',fld:'MAPAPRECOCOTACAOUSUALT'}],[{av:'AV26QtdePedida',fld:'vQTDEPEDIDA'},{av:'AV17ProdutoId',fld:'vPRODUTOID'},{av:'AV21SolicitacaoItemSeq',fld:'vSOLICITACAOITEMSEQ'},{av:'gx.fn.getCtrlProperty("vBMPDET","Enabled")',ctrl:'vBMPDET',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPDET","Tooltiptext")',ctrl:'vBMPDET',prop:'Tooltiptext'},{av:'AV19ProdutoDescricao',fld:'vPRODUTODESCRICAO'},{av:'AV33GXLvl92',fld:'vGXLVL92'},{av:'AV22SnPossui',fld:'vSNPOSSUI'}]];
   this.EvtParms["'DETALHAR'"] = [[{av:'AV11SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'AV13MapaPrecoNumero',fld:'vMAPAPRECONUMERO',hsh:true},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ'},{av:'AV23MapaPrecoTipoPreco',fld:'vMAPAPRECOTIPOPRECO',hsh:true},{av:'AV24MapaPrecoDataHoraAlt',fld:'vMAPAPRECODATAHORAALT',hsh:true},{av:'AV25UsuarioNome',fld:'vUSUARIONOME',hsh:true}],[]];
   this.setVCMap("AV12SolicitacaoEmpresaId", "vSOLICITACAOEMPRESAID", 0, "char");
   this.setVCMap("A3410MapaPrecoItemQtdePedida", "MAPAPRECOITEMQTDEPEDIDA", 0, "decimal");
   this.setVCMap("A3654MapaPrecoProdutoId", "MAPAPRECOPRODUTOID", 0, "int");
   this.setVCMap("AV22SnPossui", "vSNPOSSUI", 0, "char");
   this.setVCMap("A2964ProdutoEmpresaId", "PRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV18ProdutoEmpresaId", "vPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("A2965ProdutoId", "PRODUTOID", 0, "int");
   this.setVCMap("AV17ProdutoId", "vPRODUTOID", 0, "int");
   this.setVCMap("A3399ProdutoCategoria", "PRODUTOCATEGORIA", 0, "char");
   this.setVCMap("A3828ProdutoObservacao", "PRODUTOOBSERVACAO", 0, "vchar");
   this.setVCMap("A2960ProdutoDescricao", "PRODUTODESCRICAO", 0, "svchar");
   this.setVCMap("A3370SolicitacaoEmpresaId", "SOLICITACAOEMPRESAID", 0, "char");
   this.setVCMap("A3371SolicitacaoNumero", "SOLICITACAONUMERO", 0, "int");
   this.setVCMap("AV21SolicitacaoItemSeq", "vSOLICITACAOITEMSEQ", 0, "int");
   this.setVCMap("A3405MapaPrecoNumero", "MAPAPRECONUMERO", 0, "int");
   this.setVCMap("A3684MapaPrecoCotacaoUsuAlt", "MAPAPRECOCOTACAOUSUALT", 0, "char");
   this.setVCMap("AV23MapaPrecoTipoPreco", "vMAPAPRECOTIPOPRECO", 0, "char");
   this.setVCMap("AV12SolicitacaoEmpresaId", "vSOLICITACAOEMPRESAID", 0, "char");
   this.setVCMap("A3410MapaPrecoItemQtdePedida", "MAPAPRECOITEMQTDEPEDIDA", 0, "decimal");
   this.setVCMap("A3654MapaPrecoProdutoId", "MAPAPRECOPRODUTOID", 0, "int");
   this.setVCMap("AV22SnPossui", "vSNPOSSUI", 0, "char");
   this.setVCMap("A2964ProdutoEmpresaId", "PRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV18ProdutoEmpresaId", "vPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("A2965ProdutoId", "PRODUTOID", 0, "int");
   this.setVCMap("AV17ProdutoId", "vPRODUTOID", 0, "int");
   this.setVCMap("A3399ProdutoCategoria", "PRODUTOCATEGORIA", 0, "char");
   this.setVCMap("A3828ProdutoObservacao", "PRODUTOOBSERVACAO", 0, "vchar");
   this.setVCMap("A2960ProdutoDescricao", "PRODUTODESCRICAO", 0, "svchar");
   this.setVCMap("A3370SolicitacaoEmpresaId", "SOLICITACAOEMPRESAID", 0, "char");
   this.setVCMap("A3371SolicitacaoNumero", "SOLICITACAONUMERO", 0, "int");
   this.setVCMap("AV21SolicitacaoItemSeq", "vSOLICITACAOITEMSEQ", 0, "int");
   this.setVCMap("A3405MapaPrecoNumero", "MAPAPRECONUMERO", 0, "int");
   this.setVCMap("A3684MapaPrecoCotacaoUsuAlt", "MAPAPRECOCOTACAOUSUALT", 0, "char");
   Grid1Container.addRefreshingVar({rfrVar:"AV12SolicitacaoEmpresaId"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[10]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar({rfrVar:"AV20bmpDet", rfrProp:"Value", gxAttId:"Bmpdet"});
   Grid1Container.addRefreshingVar({rfrVar:"A3410MapaPrecoItemQtdePedida"});
   Grid1Container.addRefreshingVar({rfrVar:"A3654MapaPrecoProdutoId"});
   Grid1Container.addRefreshingVar({rfrVar:"A3392SolicitacaoItemSeq", rfrProp:"Value", gxAttId:"3392"});
   Grid1Container.addRefreshingVar({rfrVar:"AV22SnPossui"});
   Grid1Container.addRefreshingVar({rfrVar:"A2964ProdutoEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV18ProdutoEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A2965ProdutoId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV17ProdutoId"});
   Grid1Container.addRefreshingVar({rfrVar:"A3399ProdutoCategoria"});
   Grid1Container.addRefreshingVar({rfrVar:"A3828ProdutoObservacao"});
   Grid1Container.addRefreshingVar({rfrVar:"A2960ProdutoDescricao"});
   Grid1Container.addRefreshingVar({rfrVar:"A3370SolicitacaoEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A3371SolicitacaoNumero"});
   Grid1Container.addRefreshingVar({rfrVar:"AV21SolicitacaoItemSeq"});
   Grid1Container.addRefreshingVar({rfrVar:"A3405MapaPrecoNumero"});
   Grid1Container.addRefreshingVar({rfrVar:"A3684MapaPrecoCotacaoUsuAlt"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodaldetalharmapapreco());
