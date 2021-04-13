/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:34:39.33
*/
gx.evt.autoSkip = false;
gx.define('gx0at0', false, function () {
   this.ServerClass =  "gx0at0" ;
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
      this.AV13pFilialEmpresaId=gx.fn.getControlValue("vPFILIALEMPRESAID") ;
      this.AV14pFilialId=gx.fn.getIntegerValue("vPFILIALID",'.') ;
      this.AV15pProdutoEmpresaId=gx.fn.getControlValue("vPPRODUTOEMPRESAID") ;
      this.AV16pProdutoId=gx.fn.getIntegerValue("vPPRODUTOID",'.') ;
      this.AV17pLoteProdutoCombinacao=gx.fn.getControlValue("vPLOTEPRODUTOCOMBINACAO") ;
   };
   this.e131pe2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141pe1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,62];
   this.GXLastCtrlId =62;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0at0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(1228,53,"FILIALEMPRESAID","Empresa da Filial","","FilialEmpresaId","char",0,"px",10,10,"left",null,[],1228,"FilialEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1156,54,"FILIALID","Código da Filial","","FilialId","int",0,"px",7,7,"right",null,[],1156,"FilialId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2964,55,"PRODUTOEMPRESAID","Empresa do Produto","","ProdutoEmpresaId","char",0,"px",10,10,"left",null,[],2964,"ProdutoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2965,56,"PRODUTOID","Código do Produto","","ProdutoId","int",0,"px",10,10,"right",null,[],2965,"ProdutoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3624,57,"LOTEPRODUTOCOMBINACAO","Combinação Lote","","LoteProdutoCombinacao","char",0,"px",20,20,"left",null,[],3624,"LoteProdutoCombinacao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3644,58,"LOTEPRODUTOCODIGOBARRAS","Código de Barras","Selecionar","LoteProdutoCodigoBarras","int",0,"px",14,14,"right",null,[],3644,"LoteProdutoCodigoBarras",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3645,59,"LOTEPRODUTOQTDEATUAL","Quantidade Atual","","LoteProdutoQtdeAtual","decimal",0,"px",21,21,"right",null,[],3645,"LoteProdutoQtdeAtual",true,4,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKFILIALEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFILIALEMPRESAID",gxz:"ZV6cFilialEmpresaId",gxold:"OV6cFilialEmpresaId",gxvar:"AV6cFilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cFilialEmpresaId=Value},v2z:function(Value){gx.O.ZV6cFilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCFILIALEMPRESAID",gx.O.AV6cFilialEmpresaId,0)},c2v:function(){gx.O.AV6cFilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKFILIALID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFILIALID",gxz:"ZV7cFilialId",gxold:"OV7cFilialId",gxvar:"AV7cFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFILIALID",gx.O.AV7cFilialId,0)},c2v:function(){gx.O.AV7cFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKPRODUTOEMPRESAID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPRODUTOEMPRESAID",gxz:"ZV8cProdutoEmpresaId",gxold:"OV8cProdutoEmpresaId",gxvar:"AV8cProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV8cProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCPRODUTOEMPRESAID",gx.O.AV8cProdutoEmpresaId,0)},c2v:function(){gx.O.AV8cProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKPRODUTOID", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPRODUTOID",gxz:"ZV9cProdutoId",gxold:"OV9cProdutoId",gxvar:"AV9cProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPRODUTOID",gx.O.AV9cProdutoId,0)},c2v:function(){gx.O.AV9cProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKLOTEPRODUTOCOMBINACAO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLOTEPRODUTOCOMBINACAO",gxz:"ZV10cLoteProdutoCombinacao",gxold:"OV10cLoteProdutoCombinacao",gxvar:"AV10cLoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cLoteProdutoCombinacao=Value},v2z:function(Value){gx.O.ZV10cLoteProdutoCombinacao=Value},v2c:function(){gx.fn.setControlValue("vCLOTEPRODUTOCOMBINACAO",gx.O.AV10cLoteProdutoCombinacao,0)},c2v:function(){gx.O.AV10cLoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vCLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKLOTEPRODUTOCODIGOBARRAS", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:14,dec:0,sign:false,pic:"ZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLOTEPRODUTOCODIGOBARRAS",gxz:"ZV11cLoteProdutoCodigoBarras",gxold:"OV11cLoteProdutoCodigoBarras",gxvar:"AV11cLoteProdutoCodigoBarras",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cLoteProdutoCodigoBarras=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cLoteProdutoCodigoBarras=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLOTEPRODUTOCODIGOBARRAS",gx.O.AV11cLoteProdutoCodigoBarras,0)},c2v:function(){gx.O.AV11cLoteProdutoCodigoBarras=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLOTEPRODUTOCODIGOBARRAS",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKLOTEPRODUTOQTDEATUAL", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLOTEPRODUTOQTDEATUAL",gxz:"ZV12cLoteProdutoQtdeAtual",gxold:"OV12cLoteProdutoQtdeAtual",gxvar:"AV12cLoteProdutoQtdeAtual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cLoteProdutoQtdeAtual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV12cLoteProdutoQtdeAtual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCLOTEPRODUTOQTDEATUAL",gx.O.AV12cLoteProdutoQtdeAtual,4,',')},c2v:function(){gx.O.AV12cLoteProdutoQtdeAtual=this.val()},val:function(){return gx.fn.getDecimalValue("vCLOTEPRODUTOQTDEATUAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV20Linkselection_GXI)},c2v:function(){gx.O.AV20Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV20Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FILIALEMPRESAID",gxz:"Z1228FilialEmpresaId",gxold:"O1228FilialEmpresaId",gxvar:"A1228FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1228FilialEmpresaId=Value},v2z:function(Value){gx.O.Z1228FilialEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("FILIALEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A1228FilialEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1228FilialEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("FILIALEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FILIALID",gxz:"Z1156FilialId",gxold:"O1156FilialId",gxvar:"A1156FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1156FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1156FilialId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FILIALID",row || gx.fn.currentGridRowImpl(51),gx.O.A1156FilialId,0)},c2v:function(){gx.O.A1156FilialId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FILIALID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PRODUTOEMPRESAID",gxz:"Z2964ProdutoEmpresaId",gxold:"O2964ProdutoEmpresaId",gxvar:"A2964ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2964ProdutoEmpresaId=Value},v2z:function(Value){gx.O.Z2964ProdutoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("PRODUTOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A2964ProdutoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2964ProdutoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("PRODUTOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PRODUTOID",gxz:"Z2965ProdutoId",gxold:"O2965ProdutoId",gxvar:"A2965ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2965ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2965ProdutoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PRODUTOID",row || gx.fn.currentGridRowImpl(51),gx.O.A2965ProdutoId,0)},c2v:function(){gx.O.A2965ProdutoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PRODUTOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOTEPRODUTOCOMBINACAO",gxz:"Z3624LoteProdutoCombinacao",gxold:"O3624LoteProdutoCombinacao",gxvar:"A3624LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3624LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.Z3624LoteProdutoCombinacao=Value},v2c:function(row){gx.fn.setGridControlValue("LOTEPRODUTOCOMBINACAO",row || gx.fn.currentGridRowImpl(51),gx.O.A3624LoteProdutoCombinacao,0)},c2v:function(){gx.O.A3624LoteProdutoCombinacao=this.val()},val:function(row){return gx.fn.getGridControlValue("LOTEPRODUTOCOMBINACAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:14,dec:0,sign:false,pic:"ZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOTEPRODUTOCODIGOBARRAS",gxz:"Z3644LoteProdutoCodigoBarras",gxold:"O3644LoteProdutoCodigoBarras",gxvar:"A3644LoteProdutoCodigoBarras",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3644LoteProdutoCodigoBarras=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3644LoteProdutoCodigoBarras=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LOTEPRODUTOCODIGOBARRAS",row || gx.fn.currentGridRowImpl(51),gx.O.A3644LoteProdutoCodigoBarras,0)},c2v:function(){gx.O.A3644LoteProdutoCodigoBarras=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LOTEPRODUTOCODIGOBARRAS",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOTEPRODUTOQTDEATUAL",gxz:"Z3645LoteProdutoQtdeAtual",gxold:"O3645LoteProdutoQtdeAtual",gxvar:"A3645LoteProdutoQtdeAtual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3645LoteProdutoQtdeAtual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3645LoteProdutoQtdeAtual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("LOTEPRODUTOQTDEATUAL",row || gx.fn.currentGridRowImpl(51),gx.O.A3645LoteProdutoQtdeAtual,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3645LoteProdutoQtdeAtual=this.val()},val:function(row){return gx.fn.getGridDecimalValue("LOTEPRODUTOQTDEATUAL",row || gx.fn.currentGridRowImpl(51),'.',',')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TABLE4",grid:0};
   this.AV6cFilialEmpresaId = "" ;
   this.ZV6cFilialEmpresaId = "" ;
   this.OV6cFilialEmpresaId = "" ;
   this.AV7cFilialId = 0 ;
   this.ZV7cFilialId = 0 ;
   this.OV7cFilialId = 0 ;
   this.AV8cProdutoEmpresaId = "" ;
   this.ZV8cProdutoEmpresaId = "" ;
   this.OV8cProdutoEmpresaId = "" ;
   this.AV9cProdutoId = 0 ;
   this.ZV9cProdutoId = 0 ;
   this.OV9cProdutoId = 0 ;
   this.AV10cLoteProdutoCombinacao = "" ;
   this.ZV10cLoteProdutoCombinacao = "" ;
   this.OV10cLoteProdutoCombinacao = "" ;
   this.AV11cLoteProdutoCodigoBarras = 0 ;
   this.ZV11cLoteProdutoCodigoBarras = 0 ;
   this.OV11cLoteProdutoCodigoBarras = 0 ;
   this.AV12cLoteProdutoQtdeAtual = 0 ;
   this.ZV12cLoteProdutoQtdeAtual = 0 ;
   this.OV12cLoteProdutoQtdeAtual = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z1228FilialEmpresaId = "" ;
   this.O1228FilialEmpresaId = "" ;
   this.Z1156FilialId = 0 ;
   this.O1156FilialId = 0 ;
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
   this.AV6cFilialEmpresaId = "" ;
   this.AV7cFilialId = 0 ;
   this.AV8cProdutoEmpresaId = "" ;
   this.AV9cProdutoId = 0 ;
   this.AV10cLoteProdutoCombinacao = "" ;
   this.AV11cLoteProdutoCodigoBarras = 0 ;
   this.AV12cLoteProdutoQtdeAtual = 0 ;
   this.AV13pFilialEmpresaId = "" ;
   this.AV14pFilialId = 0 ;
   this.AV15pProdutoEmpresaId = "" ;
   this.AV16pProdutoId = 0 ;
   this.AV17pLoteProdutoCombinacao = "" ;
   this.AV5LinkSelection = "" ;
   this.A1228FilialEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2965ProdutoId = 0 ;
   this.A3624LoteProdutoCombinacao = "" ;
   this.A3644LoteProdutoCodigoBarras = 0 ;
   this.A3645LoteProdutoQtdeAtual = 0 ;
   this.Events = {"e131pe2_client": ["ENTER", true] ,"e141pe1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFilialEmpresaId',fld:'vCFILIALEMPRESAID'},{av:'AV7cFilialId',fld:'vCFILIALID'},{av:'AV8cProdutoEmpresaId',fld:'vCPRODUTOEMPRESAID'},{av:'AV9cProdutoId',fld:'vCPRODUTOID'},{av:'AV10cLoteProdutoCombinacao',fld:'vCLOTEPRODUTOCOMBINACAO'},{av:'AV11cLoteProdutoCodigoBarras',fld:'vCLOTEPRODUTOCODIGOBARRAS'},{av:'AV12cLoteProdutoQtdeAtual',fld:'vCLOTEPRODUTOQTDEATUAL'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'}],[{av:'AV13pFilialEmpresaId',fld:'vPFILIALEMPRESAID'},{av:'AV14pFilialId',fld:'vPFILIALID'},{av:'AV15pProdutoEmpresaId',fld:'vPPRODUTOEMPRESAID'},{av:'AV16pProdutoId',fld:'vPPRODUTOID'},{av:'AV17pLoteProdutoCombinacao',fld:'vPLOTEPRODUTOCOMBINACAO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFilialEmpresaId',fld:'vCFILIALEMPRESAID'},{av:'AV7cFilialId',fld:'vCFILIALID'},{av:'AV8cProdutoEmpresaId',fld:'vCPRODUTOEMPRESAID'},{av:'AV9cProdutoId',fld:'vCPRODUTOID'},{av:'AV10cLoteProdutoCombinacao',fld:'vCLOTEPRODUTOCOMBINACAO'},{av:'AV11cLoteProdutoCodigoBarras',fld:'vCLOTEPRODUTOCODIGOBARRAS'},{av:'AV12cLoteProdutoQtdeAtual',fld:'vCLOTEPRODUTOQTDEATUAL'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFilialEmpresaId',fld:'vCFILIALEMPRESAID'},{av:'AV7cFilialId',fld:'vCFILIALID'},{av:'AV8cProdutoEmpresaId',fld:'vCPRODUTOEMPRESAID'},{av:'AV9cProdutoId',fld:'vCPRODUTOID'},{av:'AV10cLoteProdutoCombinacao',fld:'vCLOTEPRODUTOCOMBINACAO'},{av:'AV11cLoteProdutoCodigoBarras',fld:'vCLOTEPRODUTOCODIGOBARRAS'},{av:'AV12cLoteProdutoQtdeAtual',fld:'vCLOTEPRODUTOQTDEATUAL'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFilialEmpresaId',fld:'vCFILIALEMPRESAID'},{av:'AV7cFilialId',fld:'vCFILIALID'},{av:'AV8cProdutoEmpresaId',fld:'vCPRODUTOEMPRESAID'},{av:'AV9cProdutoId',fld:'vCPRODUTOID'},{av:'AV10cLoteProdutoCombinacao',fld:'vCLOTEPRODUTOCOMBINACAO'},{av:'AV11cLoteProdutoCodigoBarras',fld:'vCLOTEPRODUTOCODIGOBARRAS'},{av:'AV12cLoteProdutoQtdeAtual',fld:'vCLOTEPRODUTOQTDEATUAL'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFilialEmpresaId',fld:'vCFILIALEMPRESAID'},{av:'AV7cFilialId',fld:'vCFILIALID'},{av:'AV8cProdutoEmpresaId',fld:'vCPRODUTOEMPRESAID'},{av:'AV9cProdutoId',fld:'vCPRODUTOID'},{av:'AV10cLoteProdutoCombinacao',fld:'vCLOTEPRODUTOCOMBINACAO'},{av:'AV11cLoteProdutoCodigoBarras',fld:'vCLOTEPRODUTOCODIGOBARRAS'},{av:'AV12cLoteProdutoQtdeAtual',fld:'vCLOTEPRODUTOQTDEATUAL'}],[]];
   this.setVCMap("AV13pFilialEmpresaId", "vPFILIALEMPRESAID", 0, "char");
   this.setVCMap("AV14pFilialId", "vPFILIALID", 0, "int");
   this.setVCMap("AV15pProdutoEmpresaId", "vPPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV16pProdutoId", "vPPRODUTOID", 0, "int");
   this.setVCMap("AV17pLoteProdutoCombinacao", "vPLOTEPRODUTOCOMBINACAO", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0at0());