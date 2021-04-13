/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:49:15.21
*/
gx.evt.autoSkip = false;
gx.define('hconfirmarpedidocompra', false, function () {
   this.ServerClass =  "hconfirmarpedidocompra" ;
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
      this.AV11Cotacao=gx.fn.getControlValue("vCOTACAO") ;
      this.AV18PessoaId=gx.fn.getIntegerValue("vPESSOAID",'.') ;
      this.AV19SolicitacaoNumero=gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.') ;
      this.AV22ItemSolicitacao=gx.fn.getIntegerValue("vITEMSOLICITACAO",'.') ;
      this.AV29PedidoCompraAno=gx.fn.getIntegerValue("vPEDIDOCOMPRAANO",'.') ;
   };
   this.Validv_Item=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vITEM");
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
   this.s172_client=function()
   {
      this.AV32Quantidade =  gx.num.subtract( this.AV33QtdeSolicitacao , this.AV31QtdeTotalPedido )  ;
      if ( this.AV32Quantidade < 0 )
      {
         this.AV32Quantidade =  0  ;
      }
   };
   this.e11mq2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12mq2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e16mq2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,22,25,27,29,31,34,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,58,59];
   this.GXLastCtrlId =59;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",35,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hconfirmarpedidocompra",[],false,1,false,true,5,true,false,false,"CollSdtCotacao.SdtCotacaoItem",0,"px","Novo registro",true,false,false,null,null,false,"AV11Cotacao",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("GXV110",36,"CTLFORNECEDORID","Forn","","FornecedorId","int",0,"px",7,7,"right",null,[],"GXV110","GXV110",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV111",37,"CTLFANTASIA","Nome","","Fantasia","svchar",0,"px",40,40,"left",null,[],"GXV111","GXV111",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV112",38,"CTLTELEFONE","Telefone","","Telefone","svchar",0,"px",15,15,"left",null,[],"GXV112","GXV112",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV113",39,"CTLVALOR","Valor","","Valor","decimal",80,"px",21,21,"right",null,[],"GXV113","GXV113",true,4,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV114",40,"CTLVALORTOTAL","Valor Total","","ValorTotal","decimal",100,"px",21,21,"right",null,[],"GXV114","GXV114",true,4,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV115",41,"CTLRAZAO","Razao","","Razao","char",0,"px",80,80,"left",null,[],"GXV115","GXV115",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV116",42,"CTLCNPJ","CNPJ Cliente/Fornecedor","","CNPJ","char",0,"px",18,18,"left",null,[],"GXV116","GXV116",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV117",43,"CTLCPF","CPF Cliente/Fornecedor","","CPF","char",0,"px",14,14,"left",null,[],"GXV117","GXV117",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV118",44,"CTLORCAMENTO","Orcamento","","Orcamento","svchar",0,"px",15,15,"left",null,[],"GXV118","GXV118",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV119",45,"CTLENTREGA","Entrega","","Entrega","svchar",0,"px",40,40,"left",null,[],"GXV119","GXV119",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11A",46,"CTLPAGAMENTO","Pagamento","","Pagamento","svchar",0,"px",40,40,"left",null,[],"GXV11A","GXV11A",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11B",47,"CTLNUMSOLICITACAO","Num Solicitacao","","NumSolicitacao","int",0,"px",7,7,"right",null,[],"GXV11B","GXV11B",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11C",48,"CTLITEMSOLICITACAO","Sequência","","ItemSolicitacao","int",0,"px",6,6,"right",null,[],"GXV11C","GXV11C",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11D",49,"CTLCHECK","Check","","Check","char",0,"px",1,1,"left",null,[],"GXV11D","GXV11D",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE5",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Item,isvalid:null,rgrid:[],fld:"vITEM",gxz:"ZV12Item",gxold:"OV12Item",gxvar:"AV12Item",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12Item=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12Item=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vITEM",gx.O.AV12Item,0)},c2v:function(){gx.O.AV12Item=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vITEM",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV20ProdutoId",gxold:"OV20ProdutoId",gxvar:"AV20ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV20ProdutoId,0)},c2v:function(){gx.O.AV20ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAO",gxz:"ZV17ProdutoDescricao",gxold:"OV17ProdutoDescricao",gxvar:"AV17ProdutoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17ProdutoDescricao=Value},v2z:function(Value){gx.O.ZV17ProdutoDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAO",gx.O.AV17ProdutoDescricao,0)},c2v:function(){gx.O.AV17ProdutoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"decimal",len:18,dec:3,sign:false,pic:"ZZZZZZZZZZZZZ9.999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQUANTIDADE",gxz:"ZV32Quantidade",gxold:"OV32Quantidade",gxvar:"AV32Quantidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32Quantidade=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV32Quantidade=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vQUANTIDADE",gx.O.AV32Quantidade,3,',')},c2v:function(){gx.O.AV32Quantidade=this.val()},val:function(){return gx.fn.getDecimalValue("vQUANTIDADE",'.',',')},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOUNIDADECOMPRAID",gxz:"ZV57ProdutoUnidadeCompraId",gxold:"OV57ProdutoUnidadeCompraId",gxvar:"AV57ProdutoUnidadeCompraId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57ProdutoUnidadeCompraId=Value},v2z:function(Value){gx.O.ZV57ProdutoUnidadeCompraId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOUNIDADECOMPRAID",gx.O.AV57ProdutoUnidadeCompraId,0)},c2v:function(){gx.O.AV57ProdutoUnidadeCompraId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOUNIDADECOMPRAID")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[36]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLFORNECEDORID",gxz:"ZV72GXV110",gxold:"OV72GXV110",gxvar:"GXV110",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV110=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV72GXV110=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLFORNECEDORID",row || gx.fn.currentGridRowImpl(35),gx.O.GXV110,0)},c2v:function(){gx.O.GXV110=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLFORNECEDORID",row || gx.fn.currentGridRowImpl(35),'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLFANTASIA",gxz:"ZV73GXV111",gxold:"OV73GXV111",gxvar:"GXV111",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV111=Value},v2z:function(Value){gx.O.ZV73GXV111=Value},v2c:function(row){gx.fn.setGridControlValue("CTLFANTASIA",row || gx.fn.currentGridRowImpl(35),gx.O.GXV111,0)},c2v:function(){gx.O.GXV111=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLFANTASIA",row || gx.fn.currentGridRowImpl(35))},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLTELEFONE",gxz:"ZV74GXV112",gxold:"OV74GXV112",gxvar:"GXV112",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV112=Value},v2z:function(Value){gx.O.ZV74GXV112=Value},v2c:function(row){gx.fn.setGridControlValue("CTLTELEFONE",row || gx.fn.currentGridRowImpl(35),gx.O.GXV112,0)},c2v:function(){gx.O.GXV112=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLTELEFONE",row || gx.fn.currentGridRowImpl(35))},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALOR",gxz:"ZV75GXV113",gxold:"OV75GXV113",gxvar:"GXV113",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV113=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV75GXV113=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVALOR",row || gx.fn.currentGridRowImpl(35),gx.O.GXV113,4,',')},c2v:function(){gx.O.GXV113=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVALOR",row || gx.fn.currentGridRowImpl(35),'.',',')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALORTOTAL",gxz:"ZV76GXV114",gxold:"OV76GXV114",gxvar:"GXV114",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV114=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV76GXV114=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVALORTOTAL",row || gx.fn.currentGridRowImpl(35),gx.O.GXV114,4,',')},c2v:function(){gx.O.GXV114=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVALORTOTAL",row || gx.fn.currentGridRowImpl(35),'.',',')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"char",len:80,dec:0,sign:false,ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLRAZAO",gxz:"ZV77GXV115",gxold:"OV77GXV115",gxvar:"GXV115",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV115=Value},v2z:function(Value){gx.O.ZV77GXV115=Value},v2c:function(row){gx.fn.setGridControlValue("CTLRAZAO",row || gx.fn.currentGridRowImpl(35),gx.O.GXV115,0)},c2v:function(){gx.O.GXV115=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLRAZAO",row || gx.fn.currentGridRowImpl(35))},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"char",len:18,dec:0,sign:false,ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCNPJ",gxz:"ZV78GXV116",gxold:"OV78GXV116",gxvar:"GXV116",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV116=Value},v2z:function(Value){gx.O.ZV78GXV116=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCNPJ",row || gx.fn.currentGridRowImpl(35),gx.O.GXV116,0)},c2v:function(){gx.O.GXV116=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCNPJ",row || gx.fn.currentGridRowImpl(35))},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"char",len:14,dec:0,sign:false,ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCPF",gxz:"ZV79GXV117",gxold:"OV79GXV117",gxvar:"GXV117",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV117=Value},v2z:function(Value){gx.O.ZV79GXV117=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCPF",row || gx.fn.currentGridRowImpl(35),gx.O.GXV117,0)},c2v:function(){gx.O.GXV117=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCPF",row || gx.fn.currentGridRowImpl(35))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLORCAMENTO",gxz:"ZV80GXV118",gxold:"OV80GXV118",gxvar:"GXV118",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV118=Value},v2z:function(Value){gx.O.ZV80GXV118=Value},v2c:function(row){gx.fn.setGridControlValue("CTLORCAMENTO",row || gx.fn.currentGridRowImpl(35),gx.O.GXV118,0)},c2v:function(){gx.O.GXV118=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLORCAMENTO",row || gx.fn.currentGridRowImpl(35))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLENTREGA",gxz:"ZV81GXV119",gxold:"OV81GXV119",gxvar:"GXV119",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV119=Value},v2z:function(Value){gx.O.ZV81GXV119=Value},v2c:function(row){gx.fn.setGridControlValue("CTLENTREGA",row || gx.fn.currentGridRowImpl(35),gx.O.GXV119,0)},c2v:function(){gx.O.GXV119=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLENTREGA",row || gx.fn.currentGridRowImpl(35))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPAGAMENTO",gxz:"ZV82GXV11A",gxold:"OV82GXV11A",gxvar:"GXV11A",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11A=Value},v2z:function(Value){gx.O.ZV82GXV11A=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPAGAMENTO",row || gx.fn.currentGridRowImpl(35),gx.O.GXV11A,0)},c2v:function(){gx.O.GXV11A=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPAGAMENTO",row || gx.fn.currentGridRowImpl(35))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLNUMSOLICITACAO",gxz:"ZV83GXV11B",gxold:"OV83GXV11B",gxvar:"GXV11B",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11B=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV83GXV11B=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLNUMSOLICITACAO",row || gx.fn.currentGridRowImpl(35),gx.O.GXV11B,0)},c2v:function(){gx.O.GXV11B=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLNUMSOLICITACAO",row || gx.fn.currentGridRowImpl(35),'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLITEMSOLICITACAO",gxz:"ZV84GXV11C",gxold:"OV84GXV11C",gxvar:"GXV11C",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11C=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV84GXV11C=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLITEMSOLICITACAO",row || gx.fn.currentGridRowImpl(35),gx.O.GXV11C,0)},c2v:function(){gx.O.GXV11C=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLITEMSOLICITACAO",row || gx.fn.currentGridRowImpl(35),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCHECK",gxz:"ZV85GXV11D",gxold:"OV85GXV11D",gxvar:"GXV11D",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11D=Value},v2z:function(Value){gx.O.ZV85GXV11D=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCHECK",row || gx.fn.currentGridRowImpl(35),gx.O.GXV11D,0)},c2v:function(){gx.O.GXV11D=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCHECK",row || gx.fn.currentGridRowImpl(35))},nac:gx.falseFn};
   GXValidFnc[50]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[58]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRANUMERO",gxz:"ZV30PedidoCompraNumero",gxold:"OV30PedidoCompraNumero",gxvar:"AV30PedidoCompraNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30PedidoCompraNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30PedidoCompraNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRANUMERO",gx.O.AV30PedidoCompraNumero,0)},c2v:function(){gx.O.AV30PedidoCompraNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRANUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVEZ",gxz:"ZV58vez",gxold:"OV58vez",gxvar:"AV58vez",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58vez=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV58vez=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVEZ",gx.O.AV58vez,0)},c2v:function(){gx.O.AV58vez=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVEZ",'.')},nac:gx.falseFn};
   this.AV12Item = 0 ;
   this.ZV12Item = 0 ;
   this.OV12Item = 0 ;
   this.AV20ProdutoId = 0 ;
   this.ZV20ProdutoId = 0 ;
   this.OV20ProdutoId = 0 ;
   this.AV17ProdutoDescricao = "" ;
   this.ZV17ProdutoDescricao = "" ;
   this.OV17ProdutoDescricao = "" ;
   this.AV32Quantidade = 0 ;
   this.ZV32Quantidade = 0 ;
   this.OV32Quantidade = 0 ;
   this.AV57ProdutoUnidadeCompraId = "" ;
   this.ZV57ProdutoUnidadeCompraId = "" ;
   this.OV57ProdutoUnidadeCompraId = "" ;
   this.ZV72GXV110 = 0 ;
   this.OV72GXV110 = 0 ;
   this.ZV73GXV111 = "" ;
   this.OV73GXV111 = "" ;
   this.ZV74GXV112 = "" ;
   this.OV74GXV112 = "" ;
   this.ZV75GXV113 = 0 ;
   this.OV75GXV113 = 0 ;
   this.ZV76GXV114 = 0 ;
   this.OV76GXV114 = 0 ;
   this.ZV77GXV115 = "" ;
   this.OV77GXV115 = "" ;
   this.ZV78GXV116 = "" ;
   this.OV78GXV116 = "" ;
   this.ZV79GXV117 = "" ;
   this.OV79GXV117 = "" ;
   this.ZV80GXV118 = "" ;
   this.OV80GXV118 = "" ;
   this.ZV81GXV119 = "" ;
   this.OV81GXV119 = "" ;
   this.ZV82GXV11A = "" ;
   this.OV82GXV11A = "" ;
   this.ZV83GXV11B = 0 ;
   this.OV83GXV11B = 0 ;
   this.ZV84GXV11C = 0 ;
   this.OV84GXV11C = 0 ;
   this.ZV85GXV11D = "" ;
   this.OV85GXV11D = "" ;
   this.AV30PedidoCompraNumero = 0 ;
   this.ZV30PedidoCompraNumero = 0 ;
   this.OV30PedidoCompraNumero = 0 ;
   this.AV58vez = 0 ;
   this.ZV58vez = 0 ;
   this.OV58vez = 0 ;
   this.AV12Item = 0 ;
   this.AV20ProdutoId = 0 ;
   this.AV17ProdutoDescricao = "" ;
   this.AV32Quantidade = 0 ;
   this.AV57ProdutoUnidadeCompraId = "" ;
   this.AV30PedidoCompraNumero = 0 ;
   this.AV58vez = 0 ;
   this.AV18PessoaId = 0 ;
   this.AV19SolicitacaoNumero = 0 ;
   this.AV22ItemSolicitacao = 0 ;
   this.AV29PedidoCompraAno = 0 ;
   this.GXV110 = 0 ;
   this.GXV111 = "" ;
   this.GXV112 = "" ;
   this.GXV113 = 0 ;
   this.GXV114 = 0 ;
   this.GXV115 = "" ;
   this.GXV116 = "" ;
   this.GXV117 = "" ;
   this.GXV118 = "" ;
   this.GXV119 = "" ;
   this.GXV11A = "" ;
   this.GXV11B = 0 ;
   this.GXV11C = 0 ;
   this.GXV11D = "" ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A4021SolicitacaoSituacao = "" ;
   this.A69PessoaId = 0 ;
   this.A3392SolicitacaoItemSeq = 0 ;
   this.A3482CotacaoDataHoraAlt = gx.date.nullDate() ;
   this.A3462CotacaoValorFrete = 0 ;
   this.A4240CotacaoPCFrete = 0 ;
   this.A3467CotacaoValorSeguro = 0 ;
   this.A3466CotacaoValorEncargos = 0 ;
   this.A3457CotacaoPCDesconto1 = 0 ;
   this.A3458CotacaoPCDesconto2 = 0 ;
   this.A3459CotacaoPCDesconto3 = 0 ;
   this.A3460CotacaoPCDesconto4 = 0 ;
   this.A3461CotacaoPCDesconto5 = 0 ;
   this.A3395CotacaoValorAvista = 0 ;
   this.A3396CotacaoValoraPrazo = 0 ;
   this.A3464CotacaoValorICMS = 0 ;
   this.A4242CotacaoPCICMS = 0 ;
   this.A3465CotacaoValorICMSST = 0 ;
   this.A4243CotacaoPCICMSST = 0 ;
   this.A3463CotacaoValorIPI = 0 ;
   this.A4241CotacaoPCIPI = 0 ;
   this.A3479CotacaoValorTotalaPrazo = 0 ;
   this.A3473CotacaoValorTotalAVista = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A3411UnidadeId = "" ;
   this.A4162UnidadeEmpresaId = "" ;
   this.A4159UnidadeDescricao = "" ;
   this.A71PessoaFantasia = "" ;
   this.A72PessoaTelefone = "" ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2965ProdutoId = 0 ;
   this.A3845ProdutoFabricanteEmpId = "" ;
   this.A3398ProdutoFabricanteId = 0 ;
   this.A4052SolicitacaoItemDataHoraAlt = gx.date.nullDate() ;
   this.A4042SolicitacaoItemQtdePedida = 0 ;
   this.A4050SolicitacaoItemUnidade = "" ;
   this.A2963ProdutoDataHoraAlt = gx.date.nullDate() ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A3393ProdutoUnidadeCompraId = "" ;
   this.A4051SolicitacaoItemUsuarioAlt = "" ;
   this.AV11Cotacao = [ ] ;
   this.AV31QtdeTotalPedido = 0 ;
   this.AV33QtdeSolicitacao = 0 ;
   this.Events = {"e11mq2_client": ["ENTER", true] ,"e12mq2_client": ["'FECHAR'", true] ,"e16mq2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV11Cotacao',fld:'vCOTACAO',grid:35}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV35SnErro',fld:'vSNERRO'},{av:'AV58vez',fld:'vVEZ'},{av:'AV30PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV29PedidoCompraAno',fld:'vPEDIDOCOMPRAANO',hsh:true},{av:'AV32Quantidade',fld:'vQUANTIDADE'},{av:'AV68SeguroEncargoFretePessoa',fld:'vSEGUROENCARGOFRETEPESSOA'},{av:'AV19SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'AV12Item',fld:'vITEM'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV56SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'A4021SolicitacaoSituacao',fld:'SOLICITACAOSITUACAO'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ'},{av:'A4052SolicitacaoItemDataHoraAlt',fld:'SOLICITACAOITEMDATAHORAALT'},{av:'A4042SolicitacaoItemQtdePedida',fld:'SOLICITACAOITEMQTDEPEDIDA'},{av:'A4050SolicitacaoItemUnidade',fld:'SOLICITACAOITEMUNIDADE'},{av:'AV27MaxAditivoAux',fld:'vMAXADITIVOAUX'},{av:'AV26SnQtPedMaiSol',fld:'vSNQTPEDMAISOL'},{av:'AV28MaxAditivo',fld:'vMAXADITIVO'},{av:'A3473CotacaoValorTotalAVista',fld:'COTACAOVALORTOTALAVISTA'},{av:'A3479CotacaoValorTotalaPrazo',fld:'COTACAOVALORTOTALAPRAZO'},{av:'AV60Preco',fld:'vPRECO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A3466CotacaoValorEncargos',fld:'COTACAOVALORENCARGOS'},{av:'A3462CotacaoValorFrete',fld:'COTACAOVALORFRETE'},{av:'A3467CotacaoValorSeguro',fld:'COTACAOVALORSEGURO'},{av:'AV18PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV21ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV20ProdutoId',fld:'vPRODUTOID'},{av:'AV17ProdutoDescricao',fld:'vPRODUTODESCRICAO'},{av:'A3395CotacaoValorAvista',fld:'COTACAOVALORAVISTA'},{av:'A3396CotacaoValoraPrazo',fld:'COTACAOVALORAPRAZO'},{av:'AV54UnidadeEmpresaId',fld:'vUNIDADEEMPRESAID'},{av:'AV55UnidadeDescricao',fld:'vUNIDADEDESCRICAO'},{av:'A4051SolicitacaoItemUsuarioAlt',fld:'SOLICITACAOITEMUSUARIOALT'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2963ProdutoDataHoraAlt',fld:'PRODUTODATAHORAALT'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'A3393ProdutoUnidadeCompraId',fld:'PRODUTOUNIDADECOMPRAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV61PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV24i',fld:'vI'},{av:'AV33QtdeSolicitacao',fld:'vQTDESOLICITACAO'},{av:'AV31QtdeTotalPedido',fld:'vQTDETOTALPEDIDO'},{av:'A4162UnidadeEmpresaId',fld:'UNIDADEEMPRESAID'},{av:'A3411UnidadeId',fld:'UNIDADEID'},{av:'AV53PedidoCompraItemUnidadeId',fld:'vPEDIDOCOMPRAITEMUNIDADEID'},{av:'A4159UnidadeDescricao',fld:'UNIDADEDESCRICAO'},{av:'A3482CotacaoDataHoraAlt',fld:'COTACAODATAHORAALT'},{av:'AV39SdtPedidoCompraItem',fld:'vSDTPEDIDOCOMPRAITEM'},{av:'A4240CotacaoPCFrete',fld:'COTACAOPCFRETE'},{av:'A3457CotacaoPCDesconto1',fld:'COTACAOPCDESCONTO1'},{av:'A3458CotacaoPCDesconto2',fld:'COTACAOPCDESCONTO2'},{av:'A3459CotacaoPCDesconto3',fld:'COTACAOPCDESCONTO3'},{av:'A3460CotacaoPCDesconto4',fld:'COTACAOPCDESCONTO4'},{av:'A3461CotacaoPCDesconto5',fld:'COTACAOPCDESCONTO5'},{av:'A3464CotacaoValorICMS',fld:'COTACAOVALORICMS'},{av:'A4242CotacaoPCICMS',fld:'COTACAOPCICMS'},{av:'A3465CotacaoValorICMSST',fld:'COTACAOVALORICMSST'},{av:'A4243CotacaoPCICMSST',fld:'COTACAOPCICMSST'},{av:'A3463CotacaoValorIPI',fld:'COTACAOVALORIPI'},{av:'A4241CotacaoPCIPI',fld:'COTACAOPCIPI'},{av:'AV11Cotacao',fld:'vCOTACAO',grid:35},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'}],[{av:'AV58vez',fld:'vVEZ'},{av:'AV37SdtPedidoCompra',fld:'vSDTPEDIDOCOMPRA'},{av:'AV39SdtPedidoCompraItem',fld:'vSDTPEDIDOCOMPRAITEM'},{av:'AV52TotalAux',fld:'vTOTALAUX'},{av:'AV51Total',fld:'vTOTAL'},{av:'AV30PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV31QtdeTotalPedido',fld:'vQTDETOTALPEDIDO'},{av:'AV34MsgQuantidade',fld:'vMSGQUANTIDADE'},{av:'AV35SnErro',fld:'vSNERRO'},{av:'AV64SnSolicitacao',fld:'vSNSOLICITACAO'},{av:'AV65Justificativa',fld:'vJUSTIFICATIVA'},{av:'AV66Retorno',fld:'vRETORNO'},{av:'AV23flag',fld:'vFLAG'},{av:'AV25ItemAux',fld:'vITEMAUX'},{av:'AV12Item',fld:'vITEM'},{av:'AV11Cotacao',fld:'vCOTACAO',grid:35},{av:'AV33QtdeSolicitacao',fld:'vQTDESOLICITACAO'},{av:'AV53PedidoCompraItemUnidadeId',fld:'vPEDIDOCOMPRAITEMUNIDADEID'},{av:'AV16CotacaoItem',fld:'vCOTACAOITEM'},{av:'AV67SeguroEncargoFrete',fld:'vSEGUROENCARGOFRETE'},{av:'AV68SeguroEncargoFretePessoa',fld:'vSEGUROENCARGOFRETEPESSOA'},{av:'AV40PedidoCompraItemSeqAux',fld:'vPEDIDOCOMPRAITEMSEQAUX'},{av:'AV41PedidoCompraItemProdutoEmpIdAux',fld:'vPEDIDOCOMPRAITEMPRODUTOEMPIDAUX'},{av:'AV42PedidoCompraItemProdutoIdAux',fld:'vPEDIDOCOMPRAITEMPRODUTOIDAUX'},{av:'AV43PedidoCompraItemProdutoDescAux',fld:'vPEDIDOCOMPRAITEMPRODUTODESCAUX'},{av:'AV44PedidoCompraItemValorAux',fld:'vPEDIDOCOMPRAITEMVALORAUX'},{av:'AV20ProdutoId',fld:'vPRODUTOID'},{av:'AV17ProdutoDescricao',fld:'vPRODUTODESCRICAO'},{av:'AV57ProdutoUnidadeCompraId',fld:'vPRODUTOUNIDADECOMPRAID'},{av:'AV24i',fld:'vI'},{av:'AV32Quantidade',fld:'vQUANTIDADE'},{av:'AV55UnidadeDescricao',fld:'vUNIDADEDESCRICAO'},{av:'AV62DescontoAux',fld:'vDESCONTOAUX'},{av:'AV63Desconto',fld:'vDESCONTO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV12Item',fld:'vITEM'},{av:'AV25ItemAux',fld:'vITEMAUX'},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV56SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV19SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A4052SolicitacaoItemDataHoraAlt',fld:'SOLICITACAOITEMDATAHORAALT'},{av:'A4042SolicitacaoItemQtdePedida',fld:'SOLICITACAOITEMQTDEPEDIDA'},{av:'A4050SolicitacaoItemUnidade',fld:'SOLICITACAOITEMUNIDADE'},{av:'AV29PedidoCompraAno',fld:'vPEDIDOCOMPRAANO',hsh:true},{av:'AV30PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV27MaxAditivoAux',fld:'vMAXADITIVOAUX'},{av:'AV26SnQtPedMaiSol',fld:'vSNQTPEDMAISOL'},{av:'AV28MaxAditivo',fld:'vMAXADITIVO'},{av:'AV32Quantidade',fld:'vQUANTIDADE'},{av:'A3473CotacaoValorTotalAVista',fld:'COTACAOVALORTOTALAVISTA'},{av:'A3479CotacaoValorTotalaPrazo',fld:'COTACAOVALORTOTALAPRAZO'},{av:'AV60Preco',fld:'vPRECO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A3466CotacaoValorEncargos',fld:'COTACAOVALORENCARGOS'},{av:'A3462CotacaoValorFrete',fld:'COTACAOVALORFRETE'},{av:'A3467CotacaoValorSeguro',fld:'COTACAOVALORSEGURO'},{av:'AV18PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV21ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV20ProdutoId',fld:'vPRODUTOID'},{av:'AV17ProdutoDescricao',fld:'vPRODUTODESCRICAO'},{av:'A3395CotacaoValorAvista',fld:'COTACAOVALORAVISTA'},{av:'A3396CotacaoValoraPrazo',fld:'COTACAOVALORAPRAZO'},{av:'AV54UnidadeEmpresaId',fld:'vUNIDADEEMPRESAID'},{av:'AV55UnidadeDescricao',fld:'vUNIDADEDESCRICAO'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV58vez',fld:'vVEZ'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV61PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV24i',fld:'vI'},{av:'AV33QtdeSolicitacao',fld:'vQTDESOLICITACAO'},{av:'AV31QtdeTotalPedido',fld:'vQTDETOTALPEDIDO'},{av:'A4051SolicitacaoItemUsuarioAlt',fld:'SOLICITACAOITEMUSUARIOALT'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2963ProdutoDataHoraAlt',fld:'PRODUTODATAHORAALT'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'A3393ProdutoUnidadeCompraId',fld:'PRODUTOUNIDADECOMPRAID'},{av:'A4162UnidadeEmpresaId',fld:'UNIDADEEMPRESAID'},{av:'A3411UnidadeId',fld:'UNIDADEID'},{av:'AV53PedidoCompraItemUnidadeId',fld:'vPEDIDOCOMPRAITEMUNIDADEID'},{av:'A4159UnidadeDescricao',fld:'UNIDADEDESCRICAO'},{av:'A3482CotacaoDataHoraAlt',fld:'COTACAODATAHORAALT'},{av:'AV39SdtPedidoCompraItem',fld:'vSDTPEDIDOCOMPRAITEM'},{av:'A4240CotacaoPCFrete',fld:'COTACAOPCFRETE'},{av:'A3457CotacaoPCDesconto1',fld:'COTACAOPCDESCONTO1'},{av:'A3458CotacaoPCDesconto2',fld:'COTACAOPCDESCONTO2'},{av:'A3459CotacaoPCDesconto3',fld:'COTACAOPCDESCONTO3'},{av:'A3460CotacaoPCDesconto4',fld:'COTACAOPCDESCONTO4'},{av:'A3461CotacaoPCDesconto5',fld:'COTACAOPCDESCONTO5'},{av:'A3464CotacaoValorICMS',fld:'COTACAOVALORICMS'},{av:'A4242CotacaoPCICMS',fld:'COTACAOPCICMS'},{av:'A3465CotacaoValorICMSST',fld:'COTACAOVALORICMSST'},{av:'A4243CotacaoPCICMSST',fld:'COTACAOPCICMSST'},{av:'A3463CotacaoValorIPI',fld:'COTACAOVALORIPI'},{av:'A4241CotacaoPCIPI',fld:'COTACAOPCIPI'},{av:'AV11Cotacao',fld:'vCOTACAO',grid:35},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'}],[{av:'AV37SdtPedidoCompra',fld:'vSDTPEDIDOCOMPRA'},{av:'AV23flag',fld:'vFLAG'},{av:'AV25ItemAux',fld:'vITEMAUX'},{av:'AV12Item',fld:'vITEM'},{av:'AV11Cotacao',fld:'vCOTACAO',grid:35},{av:'AV33QtdeSolicitacao',fld:'vQTDESOLICITACAO'},{av:'AV53PedidoCompraItemUnidadeId',fld:'vPEDIDOCOMPRAITEMUNIDADEID'},{av:'AV31QtdeTotalPedido',fld:'vQTDETOTALPEDIDO'},{av:'AV16CotacaoItem',fld:'vCOTACAOITEM'},{av:'AV67SeguroEncargoFrete',fld:'vSEGUROENCARGOFRETE'},{av:'AV68SeguroEncargoFretePessoa',fld:'vSEGUROENCARGOFRETEPESSOA'},{av:'AV40PedidoCompraItemSeqAux',fld:'vPEDIDOCOMPRAITEMSEQAUX'},{av:'AV41PedidoCompraItemProdutoEmpIdAux',fld:'vPEDIDOCOMPRAITEMPRODUTOEMPIDAUX'},{av:'AV42PedidoCompraItemProdutoIdAux',fld:'vPEDIDOCOMPRAITEMPRODUTOIDAUX'},{av:'AV43PedidoCompraItemProdutoDescAux',fld:'vPEDIDOCOMPRAITEMPRODUTODESCAUX'},{av:'AV44PedidoCompraItemValorAux',fld:'vPEDIDOCOMPRAITEMVALORAUX'},{av:'AV39SdtPedidoCompraItem',fld:'vSDTPEDIDOCOMPRAITEM'},{av:'AV24i',fld:'vI'},{av:'AV32Quantidade',fld:'vQUANTIDADE'},{av:'AV20ProdutoId',fld:'vPRODUTOID'},{av:'AV17ProdutoDescricao',fld:'vPRODUTODESCRICAO'},{av:'AV57ProdutoUnidadeCompraId',fld:'vPRODUTOUNIDADECOMPRAID'},{av:'AV55UnidadeDescricao',fld:'vUNIDADEDESCRICAO'},{av:'AV62DescontoAux',fld:'vDESCONTOAUX'},{av:'AV63Desconto',fld:'vDESCONTO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV11Cotacao',fld:'vCOTACAO',grid:35}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV11Cotacao',fld:'vCOTACAO',grid:35}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV11Cotacao',fld:'vCOTACAO',grid:35}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV11Cotacao',fld:'vCOTACAO',grid:35}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV11Cotacao", "vCOTACAO", 0, "CollSdtCotacao.SdtCotacaoItem");
   this.setVCMap("AV18PessoaId", "vPESSOAID", 0, "int");
   this.setVCMap("AV19SolicitacaoNumero", "vSOLICITACAONUMERO", 0, "int");
   this.setVCMap("AV22ItemSolicitacao", "vITEMSOLICITACAO", 0, "int");
   this.setVCMap("AV29PedidoCompraAno", "vPEDIDOCOMPRAANO", 0, "int");
   this.setVCMap("AV11Cotacao", "vCOTACAO", 0, "CollSdtCotacao.SdtCotacaoItem");
   Grid1Container.addRefreshingVar({rfrVar:"AV11Cotacao"});
   this.addGridBCProperty("Cotacao", ["FornecedorId"], this.GXValidFnc[36], "AV11Cotacao");
   this.addGridBCProperty("Cotacao", ["Fantasia"], this.GXValidFnc[37], "AV11Cotacao");
   this.addGridBCProperty("Cotacao", ["Telefone"], this.GXValidFnc[38], "AV11Cotacao");
   this.addGridBCProperty("Cotacao", ["Valor"], this.GXValidFnc[39], "AV11Cotacao");
   this.addGridBCProperty("Cotacao", ["ValorTotal"], this.GXValidFnc[40], "AV11Cotacao");
   this.addGridBCProperty("Cotacao", ["Razao"], this.GXValidFnc[41], "AV11Cotacao");
   this.addGridBCProperty("Cotacao", ["CNPJ"], this.GXValidFnc[42], "AV11Cotacao");
   this.addGridBCProperty("Cotacao", ["CPF"], this.GXValidFnc[43], "AV11Cotacao");
   this.addGridBCProperty("Cotacao", ["Orcamento"], this.GXValidFnc[44], "AV11Cotacao");
   this.addGridBCProperty("Cotacao", ["Entrega"], this.GXValidFnc[45], "AV11Cotacao");
   this.addGridBCProperty("Cotacao", ["Pagamento"], this.GXValidFnc[46], "AV11Cotacao");
   this.addGridBCProperty("Cotacao", ["NumSolicitacao"], this.GXValidFnc[47], "AV11Cotacao");
   this.addGridBCProperty("Cotacao", ["ItemSolicitacao"], this.GXValidFnc[48], "AV11Cotacao");
   this.addGridBCProperty("Cotacao", ["Check"], this.GXValidFnc[49], "AV11Cotacao");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconfirmarpedidocompra());
