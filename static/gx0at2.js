/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:35:28.35
*/
gx.evt.autoSkip = false;
gx.define('gx0at2', false, function () {
   this.ServerClass =  "gx0at2" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV11pFilialEmpresaId=gx.fn.getControlValue("vPFILIALEMPRESAID") ;
      this.AV12pFilialId=gx.fn.getIntegerValue("vPFILIALID",'.') ;
      this.AV13pProdutoEmpresaId=gx.fn.getControlValue("vPPRODUTOEMPRESAID") ;
      this.AV14pProdutoId=gx.fn.getIntegerValue("vPPRODUTOID",'.') ;
      this.AV15pLoteProdutoCombinacao=gx.fn.getControlValue("vPLOTEPRODUTOCOMBINACAO") ;
   };
   this.e131pz2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141pz1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,38,42,43,44,45,46,47,48,49,50,51,54];
   this.GXLastCtrlId =54;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0at2",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(2964,43,"PRODUTOEMPRESAID","Empresa do Produto","","ProdutoEmpresaId","char",0,"px",10,10,"left",null,[],2964,"ProdutoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2965,44,"PRODUTOID","Código do Produto","","ProdutoId","int",0,"px",10,10,"right",null,[],2965,"ProdutoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3624,45,"LOTEPRODUTOCOMBINACAO","Combinação Lote","","LoteProdutoCombinacao","char",0,"px",20,20,"left",null,[],3624,"LoteProdutoCombinacao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3644,46,"LOTEPRODUTOCODIGOBARRAS","Código de Barras","Selecionar","LoteProdutoCodigoBarras","int",0,"px",14,14,"right",null,[],3644,"LoteProdutoCodigoBarras",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3645,47,"LOTEPRODUTOQTDEATUAL","Quantidade Atual","","LoteProdutoQtdeAtual","decimal",0,"px",21,21,"right",null,[],3645,"LoteProdutoQtdeAtual",true,4,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3646,48,"LOTEPRODUTOESTOQUEMINIMO","Estoque Mínimo","","LoteProdutoEstoqueMinimo","decimal",0,"px",18,18,"right",null,[],3646,"LoteProdutoEstoqueMinimo",true,6,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3649,49,"LOTEPRODUTOVENCIMENTO","Vencimento","","LoteProdutoVencimento","date",0,"px",10,10,"right",null,[],3649,"LoteProdutoVencimento",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1228,50,"FILIALEMPRESAID","Empresa da Filial","","FilialEmpresaId","char",0,"px",10,10,"left",null,[],1228,"FilialEmpresaId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1156,51,"FILIALID","Código da Filial","","FilialId","int",0,"px",7,7,"right",null,[],1156,"FilialId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKPRODUTOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPRODUTOEMPRESAID",gxz:"ZV6cProdutoEmpresaId",gxold:"OV6cProdutoEmpresaId",gxvar:"AV6cProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCPRODUTOEMPRESAID",gx.O.AV6cProdutoEmpresaId,0)},c2v:function(){gx.O.AV6cProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKPRODUTOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPRODUTOID",gxz:"ZV7cProdutoId",gxold:"OV7cProdutoId",gxvar:"AV7cProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPRODUTOID",gx.O.AV7cProdutoId,0)},c2v:function(){gx.O.AV7cProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKLOTEPRODUTOCOMBINACAO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLOTEPRODUTOCOMBINACAO",gxz:"ZV8cLoteProdutoCombinacao",gxold:"OV8cLoteProdutoCombinacao",gxvar:"AV8cLoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cLoteProdutoCombinacao=Value},v2z:function(Value){gx.O.ZV8cLoteProdutoCombinacao=Value},v2c:function(){gx.fn.setControlValue("vCLOTEPRODUTOCOMBINACAO",gx.O.AV8cLoteProdutoCombinacao,0)},c2v:function(){gx.O.AV8cLoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vCLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKLOTEPRODUTOCODIGOBARRAS", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:14,dec:0,sign:false,pic:"ZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLOTEPRODUTOCODIGOBARRAS",gxz:"ZV9cLoteProdutoCodigoBarras",gxold:"OV9cLoteProdutoCodigoBarras",gxvar:"AV9cLoteProdutoCodigoBarras",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cLoteProdutoCodigoBarras=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cLoteProdutoCodigoBarras=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLOTEPRODUTOCODIGOBARRAS",gx.O.AV9cLoteProdutoCodigoBarras,0)},c2v:function(){gx.O.AV9cLoteProdutoCodigoBarras=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLOTEPRODUTOCODIGOBARRAS",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKLOTEPRODUTOQTDEATUAL", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLOTEPRODUTOQTDEATUAL",gxz:"ZV10cLoteProdutoQtdeAtual",gxold:"OV10cLoteProdutoQtdeAtual",gxvar:"AV10cLoteProdutoQtdeAtual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cLoteProdutoQtdeAtual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV10cLoteProdutoQtdeAtual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCLOTEPRODUTOQTDEATUAL",gx.O.AV10cLoteProdutoQtdeAtual,4,',')},c2v:function(){gx.O.AV10cLoteProdutoQtdeAtual=this.val()},val:function(){return gx.fn.getDecimalValue("vCLOTEPRODUTOQTDEATUAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"GROUP2",grid:0};
   GXValidFnc[38]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,gx.O.AV18Linkselection_GXI)},c2v:function(){gx.O.AV18Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV18Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PRODUTOEMPRESAID",gxz:"Z2964ProdutoEmpresaId",gxold:"O2964ProdutoEmpresaId",gxvar:"A2964ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2964ProdutoEmpresaId=Value},v2z:function(Value){gx.O.Z2964ProdutoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("PRODUTOEMPRESAID",row || gx.fn.currentGridRowImpl(41),gx.O.A2964ProdutoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2964ProdutoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("PRODUTOEMPRESAID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PRODUTOID",gxz:"Z2965ProdutoId",gxold:"O2965ProdutoId",gxvar:"A2965ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2965ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2965ProdutoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PRODUTOID",row || gx.fn.currentGridRowImpl(41),gx.O.A2965ProdutoId,0)},c2v:function(){gx.O.A2965ProdutoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PRODUTOID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOTEPRODUTOCOMBINACAO",gxz:"Z3624LoteProdutoCombinacao",gxold:"O3624LoteProdutoCombinacao",gxvar:"A3624LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3624LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.Z3624LoteProdutoCombinacao=Value},v2c:function(row){gx.fn.setGridControlValue("LOTEPRODUTOCOMBINACAO",row || gx.fn.currentGridRowImpl(41),gx.O.A3624LoteProdutoCombinacao,0)},c2v:function(){gx.O.A3624LoteProdutoCombinacao=this.val()},val:function(row){return gx.fn.getGridControlValue("LOTEPRODUTOCOMBINACAO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"int",len:14,dec:0,sign:false,pic:"ZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOTEPRODUTOCODIGOBARRAS",gxz:"Z3644LoteProdutoCodigoBarras",gxold:"O3644LoteProdutoCodigoBarras",gxvar:"A3644LoteProdutoCodigoBarras",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3644LoteProdutoCodigoBarras=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3644LoteProdutoCodigoBarras=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LOTEPRODUTOCODIGOBARRAS",row || gx.fn.currentGridRowImpl(41),gx.O.A3644LoteProdutoCodigoBarras,0)},c2v:function(){gx.O.A3644LoteProdutoCodigoBarras=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LOTEPRODUTOCODIGOBARRAS",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOTEPRODUTOQTDEATUAL",gxz:"Z3645LoteProdutoQtdeAtual",gxold:"O3645LoteProdutoQtdeAtual",gxvar:"A3645LoteProdutoQtdeAtual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3645LoteProdutoQtdeAtual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3645LoteProdutoQtdeAtual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("LOTEPRODUTOQTDEATUAL",row || gx.fn.currentGridRowImpl(41),gx.O.A3645LoteProdutoQtdeAtual,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3645LoteProdutoQtdeAtual=this.val()},val:function(row){return gx.fn.getGridDecimalValue("LOTEPRODUTOQTDEATUAL",row || gx.fn.currentGridRowImpl(41),'.',',')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"decimal",len:16,dec:6,sign:false,pic:"ZZZ,ZZZ,ZZ9.999999",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOTEPRODUTOESTOQUEMINIMO",gxz:"Z3646LoteProdutoEstoqueMinimo",gxold:"O3646LoteProdutoEstoqueMinimo",gxvar:"A3646LoteProdutoEstoqueMinimo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3646LoteProdutoEstoqueMinimo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3646LoteProdutoEstoqueMinimo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("LOTEPRODUTOESTOQUEMINIMO",row || gx.fn.currentGridRowImpl(41),gx.O.A3646LoteProdutoEstoqueMinimo,6,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3646LoteProdutoEstoqueMinimo=this.val()},val:function(row){return gx.fn.getGridDecimalValue("LOTEPRODUTOESTOQUEMINIMO",row || gx.fn.currentGridRowImpl(41),'.',',')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOTEPRODUTOVENCIMENTO",gxz:"Z3649LoteProdutoVencimento",gxold:"O3649LoteProdutoVencimento",gxvar:"A3649LoteProdutoVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3649LoteProdutoVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3649LoteProdutoVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("LOTEPRODUTOVENCIMENTO",row || gx.fn.currentGridRowImpl(41),gx.O.A3649LoteProdutoVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3649LoteProdutoVencimento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("LOTEPRODUTOVENCIMENTO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FILIALEMPRESAID",gxz:"Z1228FilialEmpresaId",gxold:"O1228FilialEmpresaId",gxvar:"A1228FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1228FilialEmpresaId=Value},v2z:function(Value){gx.O.Z1228FilialEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("FILIALEMPRESAID",row || gx.fn.currentGridRowImpl(41),gx.O.A1228FilialEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1228FilialEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("FILIALEMPRESAID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FILIALID",gxz:"Z1156FilialId",gxold:"O1156FilialId",gxvar:"A1156FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1156FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1156FilialId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FILIALID",row || gx.fn.currentGridRowImpl(41),gx.O.A1156FilialId,0)},c2v:function(){gx.O.A1156FilialId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FILIALID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TABLE4",grid:0};
   this.AV6cProdutoEmpresaId = "" ;
   this.ZV6cProdutoEmpresaId = "" ;
   this.OV6cProdutoEmpresaId = "" ;
   this.AV7cProdutoId = 0 ;
   this.ZV7cProdutoId = 0 ;
   this.OV7cProdutoId = 0 ;
   this.AV8cLoteProdutoCombinacao = "" ;
   this.ZV8cLoteProdutoCombinacao = "" ;
   this.OV8cLoteProdutoCombinacao = "" ;
   this.AV9cLoteProdutoCodigoBarras = 0 ;
   this.ZV9cLoteProdutoCodigoBarras = 0 ;
   this.OV9cLoteProdutoCodigoBarras = 0 ;
   this.AV10cLoteProdutoQtdeAtual = 0 ;
   this.ZV10cLoteProdutoQtdeAtual = 0 ;
   this.OV10cLoteProdutoQtdeAtual = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z2964ProdutoEmpresaId = "" ;
   this.O2964ProdutoEmpresaId = "" ;
   this.Z2965ProdutoId = 0 ;
   this.O2965ProdutoId = 0 ;
   this.Z3624LoteProdutoCombinacao = "" ;
   this.O3624LoteProdutoCombinacao = "" ;
   this.Z3644LoteProdutoCodigoBarras = 0 ;
   this.O3644LoteProdutoCodigoBarras = 0 ;
   this.Z3645LoteProdutoQtdeAtual = 0 ;
   this.O3645LoteProdutoQtdeAtual = 0 ;
   this.Z3646LoteProdutoEstoqueMinimo = 0 ;
   this.O3646LoteProdutoEstoqueMinimo = 0 ;
   this.Z3649LoteProdutoVencimento = gx.date.nullDate() ;
   this.O3649LoteProdutoVencimento = gx.date.nullDate() ;
   this.Z1228FilialEmpresaId = "" ;
   this.O1228FilialEmpresaId = "" ;
   this.Z1156FilialId = 0 ;
   this.O1156FilialId = 0 ;
   this.AV6cProdutoEmpresaId = "" ;
   this.AV7cProdutoId = 0 ;
   this.AV8cLoteProdutoCombinacao = "" ;
   this.AV9cLoteProdutoCodigoBarras = 0 ;
   this.AV10cLoteProdutoQtdeAtual = 0 ;
   this.AV11pFilialEmpresaId = "" ;
   this.AV12pFilialId = 0 ;
   this.AV13pProdutoEmpresaId = "" ;
   this.AV14pProdutoId = 0 ;
   this.AV15pLoteProdutoCombinacao = "" ;
   this.AV5LinkSelection = "" ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2965ProdutoId = 0 ;
   this.A3624LoteProdutoCombinacao = "" ;
   this.A3644LoteProdutoCodigoBarras = 0 ;
   this.A3645LoteProdutoQtdeAtual = 0 ;
   this.A3646LoteProdutoEstoqueMinimo = 0 ;
   this.A3649LoteProdutoVencimento = gx.date.nullDate() ;
   this.A1228FilialEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.Events = {"e131pz2_client": ["ENTER", true] ,"e141pz1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProdutoEmpresaId',fld:'vCPRODUTOEMPRESAID'},{av:'AV7cProdutoId',fld:'vCPRODUTOID'},{av:'AV8cLoteProdutoCombinacao',fld:'vCLOTEPRODUTOCOMBINACAO'},{av:'AV9cLoteProdutoCodigoBarras',fld:'vCLOTEPRODUTOCODIGOBARRAS'},{av:'AV10cLoteProdutoQtdeAtual',fld:'vCLOTEPRODUTOQTDEATUAL'},{av:'AV11pFilialEmpresaId',fld:'vPFILIALEMPRESAID',hsh:true},{av:'AV12pFilialId',fld:'vPFILIALID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'}],[{av:'AV13pProdutoEmpresaId',fld:'vPPRODUTOEMPRESAID'},{av:'AV14pProdutoId',fld:'vPPRODUTOID'},{av:'AV15pLoteProdutoCombinacao',fld:'vPLOTEPRODUTOCOMBINACAO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProdutoEmpresaId',fld:'vCPRODUTOEMPRESAID'},{av:'AV7cProdutoId',fld:'vCPRODUTOID'},{av:'AV8cLoteProdutoCombinacao',fld:'vCLOTEPRODUTOCOMBINACAO'},{av:'AV9cLoteProdutoCodigoBarras',fld:'vCLOTEPRODUTOCODIGOBARRAS'},{av:'AV10cLoteProdutoQtdeAtual',fld:'vCLOTEPRODUTOQTDEATUAL'},{av:'AV11pFilialEmpresaId',fld:'vPFILIALEMPRESAID',hsh:true},{av:'AV12pFilialId',fld:'vPFILIALID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProdutoEmpresaId',fld:'vCPRODUTOEMPRESAID'},{av:'AV7cProdutoId',fld:'vCPRODUTOID'},{av:'AV8cLoteProdutoCombinacao',fld:'vCLOTEPRODUTOCOMBINACAO'},{av:'AV9cLoteProdutoCodigoBarras',fld:'vCLOTEPRODUTOCODIGOBARRAS'},{av:'AV10cLoteProdutoQtdeAtual',fld:'vCLOTEPRODUTOQTDEATUAL'},{av:'AV11pFilialEmpresaId',fld:'vPFILIALEMPRESAID',hsh:true},{av:'AV12pFilialId',fld:'vPFILIALID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProdutoEmpresaId',fld:'vCPRODUTOEMPRESAID'},{av:'AV7cProdutoId',fld:'vCPRODUTOID'},{av:'AV8cLoteProdutoCombinacao',fld:'vCLOTEPRODUTOCOMBINACAO'},{av:'AV9cLoteProdutoCodigoBarras',fld:'vCLOTEPRODUTOCODIGOBARRAS'},{av:'AV10cLoteProdutoQtdeAtual',fld:'vCLOTEPRODUTOQTDEATUAL'},{av:'AV11pFilialEmpresaId',fld:'vPFILIALEMPRESAID',hsh:true},{av:'AV12pFilialId',fld:'vPFILIALID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProdutoEmpresaId',fld:'vCPRODUTOEMPRESAID'},{av:'AV7cProdutoId',fld:'vCPRODUTOID'},{av:'AV8cLoteProdutoCombinacao',fld:'vCLOTEPRODUTOCOMBINACAO'},{av:'AV9cLoteProdutoCodigoBarras',fld:'vCLOTEPRODUTOCODIGOBARRAS'},{av:'AV10cLoteProdutoQtdeAtual',fld:'vCLOTEPRODUTOQTDEATUAL'},{av:'AV11pFilialEmpresaId',fld:'vPFILIALEMPRESAID',hsh:true},{av:'AV12pFilialId',fld:'vPFILIALID',hsh:true}],[]];
   this.setVCMap("AV11pFilialEmpresaId", "vPFILIALEMPRESAID", 0, "char");
   this.setVCMap("AV12pFilialId", "vPFILIALID", 0, "int");
   this.setVCMap("AV13pProdutoEmpresaId", "vPPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV14pProdutoId", "vPPRODUTOID", 0, "int");
   this.setVCMap("AV15pLoteProdutoCombinacao", "vPLOTEPRODUTOCOMBINACAO", 0, "char");
   this.setVCMap("AV11pFilialEmpresaId", "vPFILIALEMPRESAID", 0, "char");
   this.setVCMap("AV12pFilialId", "vPFILIALID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar({rfrVar:"AV11pFilialEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV12pFilialId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0at2());