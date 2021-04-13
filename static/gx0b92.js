/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:35:21.36
*/
gx.evt.autoSkip = false;
gx.define('gx0b92', false, function () {
   this.ServerClass =  "gx0b92" ;
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
      this.AV11pProdutoEmpresaId=gx.fn.getControlValue("vPPRODUTOEMPRESAID") ;
      this.AV12pProdutoId=gx.fn.getIntegerValue("vPPRODUTOID",'.') ;
      this.AV13pCodificacaoEstEmpresaId=gx.fn.getControlValue("vPCODIFICACAOESTEMPRESAID") ;
      this.AV14pCodificacaoEstId=gx.fn.getControlValue("vPCODIFICACAOESTID") ;
   };
   this.e131pv2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141pv1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,38,42,43,44,45,46,47,48,49,52];
   this.GXLastCtrlId =52;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0b92",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(2936,43,"CODIFICACAOESTEMPRESAID","Empresa Codificação","","CodificacaoEstEmpresaId","char",0,"px",10,10,"left",null,[],2936,"CodificacaoEstEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2937,44,"CODIFICACAOESTID","Código da Codificação","","CodificacaoEstId","char",0,"px",15,15,"left",null,[],2937,"CodificacaoEstId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3402,45,"PRODUTOCODIFICACAOVALOR","Valor Codificação","Selecionar","ProdutoCodificacaoValor","char",0,"px",20,20,"left",null,[],3402,"ProdutoCodificacaoValor",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3961,46,"PRODUTOCODIFICACAOUSUARIOALT","Usuário Alteração","","ProdutoCodificacaoUsuarioAlt","char",0,"px",12,12,"left",null,[],3961,"ProdutoCodificacaoUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3962,47,"PRODUTOCODIFICACAODTHRALT","Data/Hora Alteração","","ProdutoCodificacaoDtHrAlt","dtime",0,"px",16,16,"right",null,[],3962,"ProdutoCodificacaoDtHrAlt",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2964,48,"PRODUTOEMPRESAID","Empresa do Produto","","ProdutoEmpresaId","char",0,"px",10,10,"left",null,[],2964,"ProdutoEmpresaId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2965,49,"PRODUTOID","Código do Produto","","ProdutoId","int",0,"px",10,10,"right",null,[],2965,"ProdutoId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKCODIFICACAOESTEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCODIFICACAOESTEMPRESAID",gxz:"ZV6cCodificacaoEstEmpresaId",gxold:"OV6cCodificacaoEstEmpresaId",gxvar:"AV6cCodificacaoEstEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cCodificacaoEstEmpresaId=Value},v2z:function(Value){gx.O.ZV6cCodificacaoEstEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCCODIFICACAOESTEMPRESAID",gx.O.AV6cCodificacaoEstEmpresaId,0)},c2v:function(){gx.O.AV6cCodificacaoEstEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCCODIFICACAOESTEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCODIFICACAOESTID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCODIFICACAOESTID",gxz:"ZV7cCodificacaoEstId",gxold:"OV7cCodificacaoEstId",gxvar:"AV7cCodificacaoEstId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cCodificacaoEstId=Value},v2z:function(Value){gx.O.ZV7cCodificacaoEstId=Value},v2c:function(){gx.fn.setControlValue("vCCODIFICACAOESTID",gx.O.AV7cCodificacaoEstId,0)},c2v:function(){gx.O.AV7cCodificacaoEstId=this.val()},val:function(){return gx.fn.getControlValue("vCCODIFICACAOESTID")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKPRODUTOCODIFICACAOVALOR", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPRODUTOCODIFICACAOVALOR",gxz:"ZV8cProdutoCodificacaoValor",gxold:"OV8cProdutoCodificacaoValor",gxvar:"AV8cProdutoCodificacaoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cProdutoCodificacaoValor=Value},v2z:function(Value){gx.O.ZV8cProdutoCodificacaoValor=Value},v2c:function(){gx.fn.setControlValue("vCPRODUTOCODIFICACAOVALOR",gx.O.AV8cProdutoCodificacaoValor,0)},c2v:function(){gx.O.AV8cProdutoCodificacaoValor=this.val()},val:function(){return gx.fn.getControlValue("vCPRODUTOCODIFICACAOVALOR")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKPRODUTOCODIFICACAOUSUARIOALT", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPRODUTOCODIFICACAOUSUARIOALT",gxz:"ZV9cProdutoCodificacaoUsuarioAlt",gxold:"OV9cProdutoCodificacaoUsuarioAlt",gxvar:"AV9cProdutoCodificacaoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cProdutoCodificacaoUsuarioAlt=Value},v2z:function(Value){gx.O.ZV9cProdutoCodificacaoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCPRODUTOCODIFICACAOUSUARIOALT",gx.O.AV9cProdutoCodificacaoUsuarioAlt,0)},c2v:function(){gx.O.AV9cProdutoCodificacaoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCPRODUTOCODIFICACAOUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKPRODUTOCODIFICACAODTHRALT", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPRODUTOCODIFICACAODTHRALT",gxz:"ZV10cProdutoCodificacaoDtHrAlt",gxold:"OV10cProdutoCodificacaoDtHrAlt",gxvar:"AV10cProdutoCodificacaoDtHrAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cProdutoCodificacaoDtHrAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10cProdutoCodificacaoDtHrAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCPRODUTOCODIFICACAODTHRALT",gx.O.AV10cProdutoCodificacaoDtHrAlt,0)},c2v:function(){gx.O.AV10cProdutoCodificacaoDtHrAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCPRODUTOCODIFICACAODTHRALT")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"GROUP2",grid:0};
   GXValidFnc[38]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CODIFICACAOESTEMPRESAID",gxz:"Z2936CodificacaoEstEmpresaId",gxold:"O2936CodificacaoEstEmpresaId",gxvar:"A2936CodificacaoEstEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2936CodificacaoEstEmpresaId=Value},v2z:function(Value){gx.O.Z2936CodificacaoEstEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("CODIFICACAOESTEMPRESAID",row || gx.fn.currentGridRowImpl(41),gx.O.A2936CodificacaoEstEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2936CodificacaoEstEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CODIFICACAOESTEMPRESAID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CODIFICACAOESTID",gxz:"Z2937CodificacaoEstId",gxold:"O2937CodificacaoEstId",gxvar:"A2937CodificacaoEstId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2937CodificacaoEstId=Value},v2z:function(Value){gx.O.Z2937CodificacaoEstId=Value},v2c:function(row){gx.fn.setGridControlValue("CODIFICACAOESTID",row || gx.fn.currentGridRowImpl(41),gx.O.A2937CodificacaoEstId,0)},c2v:function(){gx.O.A2937CodificacaoEstId=this.val()},val:function(row){return gx.fn.getGridControlValue("CODIFICACAOESTID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PRODUTOCODIFICACAOVALOR",gxz:"Z3402ProdutoCodificacaoValor",gxold:"O3402ProdutoCodificacaoValor",gxvar:"A3402ProdutoCodificacaoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3402ProdutoCodificacaoValor=Value},v2z:function(Value){gx.O.Z3402ProdutoCodificacaoValor=Value},v2c:function(row){gx.fn.setGridControlValue("PRODUTOCODIFICACAOVALOR",row || gx.fn.currentGridRowImpl(41),gx.O.A3402ProdutoCodificacaoValor,0)},c2v:function(){gx.O.A3402ProdutoCodificacaoValor=this.val()},val:function(row){return gx.fn.getGridControlValue("PRODUTOCODIFICACAOVALOR",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PRODUTOCODIFICACAOUSUARIOALT",gxz:"Z3961ProdutoCodificacaoUsuarioAlt",gxold:"O3961ProdutoCodificacaoUsuarioAlt",gxvar:"A3961ProdutoCodificacaoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3961ProdutoCodificacaoUsuarioAlt=Value},v2z:function(Value){gx.O.Z3961ProdutoCodificacaoUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("PRODUTOCODIFICACAOUSUARIOALT",row || gx.fn.currentGridRowImpl(41),gx.O.A3961ProdutoCodificacaoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3961ProdutoCodificacaoUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("PRODUTOCODIFICACAOUSUARIOALT",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PRODUTOCODIFICACAODTHRALT",gxz:"Z3962ProdutoCodificacaoDtHrAlt",gxold:"O3962ProdutoCodificacaoDtHrAlt",gxvar:"A3962ProdutoCodificacaoDtHrAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3962ProdutoCodificacaoDtHrAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3962ProdutoCodificacaoDtHrAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PRODUTOCODIFICACAODTHRALT",row || gx.fn.currentGridRowImpl(41),gx.O.A3962ProdutoCodificacaoDtHrAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3962ProdutoCodificacaoDtHrAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PRODUTOCODIFICACAODTHRALT",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PRODUTOEMPRESAID",gxz:"Z2964ProdutoEmpresaId",gxold:"O2964ProdutoEmpresaId",gxvar:"A2964ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2964ProdutoEmpresaId=Value},v2z:function(Value){gx.O.Z2964ProdutoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("PRODUTOEMPRESAID",row || gx.fn.currentGridRowImpl(41),gx.O.A2964ProdutoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2964ProdutoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("PRODUTOEMPRESAID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PRODUTOID",gxz:"Z2965ProdutoId",gxold:"O2965ProdutoId",gxvar:"A2965ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2965ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2965ProdutoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PRODUTOID",row || gx.fn.currentGridRowImpl(41),gx.O.A2965ProdutoId,0)},c2v:function(){gx.O.A2965ProdutoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PRODUTOID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TABLE4",grid:0};
   this.AV6cCodificacaoEstEmpresaId = "" ;
   this.ZV6cCodificacaoEstEmpresaId = "" ;
   this.OV6cCodificacaoEstEmpresaId = "" ;
   this.AV7cCodificacaoEstId = "" ;
   this.ZV7cCodificacaoEstId = "" ;
   this.OV7cCodificacaoEstId = "" ;
   this.AV8cProdutoCodificacaoValor = "" ;
   this.ZV8cProdutoCodificacaoValor = "" ;
   this.OV8cProdutoCodificacaoValor = "" ;
   this.AV9cProdutoCodificacaoUsuarioAlt = "" ;
   this.ZV9cProdutoCodificacaoUsuarioAlt = "" ;
   this.OV9cProdutoCodificacaoUsuarioAlt = "" ;
   this.AV10cProdutoCodificacaoDtHrAlt = gx.date.nullDate() ;
   this.ZV10cProdutoCodificacaoDtHrAlt = gx.date.nullDate() ;
   this.OV10cProdutoCodificacaoDtHrAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z2936CodificacaoEstEmpresaId = "" ;
   this.O2936CodificacaoEstEmpresaId = "" ;
   this.Z2937CodificacaoEstId = "" ;
   this.O2937CodificacaoEstId = "" ;
   this.Z3402ProdutoCodificacaoValor = "" ;
   this.O3402ProdutoCodificacaoValor = "" ;
   this.Z3961ProdutoCodificacaoUsuarioAlt = "" ;
   this.O3961ProdutoCodificacaoUsuarioAlt = "" ;
   this.Z3962ProdutoCodificacaoDtHrAlt = gx.date.nullDate() ;
   this.O3962ProdutoCodificacaoDtHrAlt = gx.date.nullDate() ;
   this.Z2964ProdutoEmpresaId = "" ;
   this.O2964ProdutoEmpresaId = "" ;
   this.Z2965ProdutoId = 0 ;
   this.O2965ProdutoId = 0 ;
   this.AV6cCodificacaoEstEmpresaId = "" ;
   this.AV7cCodificacaoEstId = "" ;
   this.AV8cProdutoCodificacaoValor = "" ;
   this.AV9cProdutoCodificacaoUsuarioAlt = "" ;
   this.AV10cProdutoCodificacaoDtHrAlt = gx.date.nullDate() ;
   this.AV11pProdutoEmpresaId = "" ;
   this.AV12pProdutoId = 0 ;
   this.AV13pCodificacaoEstEmpresaId = "" ;
   this.AV14pCodificacaoEstId = "" ;
   this.AV5LinkSelection = "" ;
   this.A2936CodificacaoEstEmpresaId = "" ;
   this.A2937CodificacaoEstId = "" ;
   this.A3402ProdutoCodificacaoValor = "" ;
   this.A3961ProdutoCodificacaoUsuarioAlt = "" ;
   this.A3962ProdutoCodificacaoDtHrAlt = gx.date.nullDate() ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2965ProdutoId = 0 ;
   this.Events = {"e131pv2_client": ["ENTER", true] ,"e141pv1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCodificacaoEstEmpresaId',fld:'vCCODIFICACAOESTEMPRESAID'},{av:'AV7cCodificacaoEstId',fld:'vCCODIFICACAOESTID'},{av:'AV8cProdutoCodificacaoValor',fld:'vCPRODUTOCODIFICACAOVALOR'},{av:'AV9cProdutoCodificacaoUsuarioAlt',fld:'vCPRODUTOCODIFICACAOUSUARIOALT'},{av:'AV10cProdutoCodificacaoDtHrAlt',fld:'vCPRODUTOCODIFICACAODTHRALT'},{av:'AV11pProdutoEmpresaId',fld:'vPPRODUTOEMPRESAID',hsh:true},{av:'AV12pProdutoId',fld:'vPPRODUTOID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A2936CodificacaoEstEmpresaId',fld:'CODIFICACAOESTEMPRESAID'},{av:'A2937CodificacaoEstId',fld:'CODIFICACAOESTID'}],[{av:'AV13pCodificacaoEstEmpresaId',fld:'vPCODIFICACAOESTEMPRESAID'},{av:'AV14pCodificacaoEstId',fld:'vPCODIFICACAOESTID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCodificacaoEstEmpresaId',fld:'vCCODIFICACAOESTEMPRESAID'},{av:'AV7cCodificacaoEstId',fld:'vCCODIFICACAOESTID'},{av:'AV8cProdutoCodificacaoValor',fld:'vCPRODUTOCODIFICACAOVALOR'},{av:'AV9cProdutoCodificacaoUsuarioAlt',fld:'vCPRODUTOCODIFICACAOUSUARIOALT'},{av:'AV10cProdutoCodificacaoDtHrAlt',fld:'vCPRODUTOCODIFICACAODTHRALT'},{av:'AV11pProdutoEmpresaId',fld:'vPPRODUTOEMPRESAID',hsh:true},{av:'AV12pProdutoId',fld:'vPPRODUTOID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCodificacaoEstEmpresaId',fld:'vCCODIFICACAOESTEMPRESAID'},{av:'AV7cCodificacaoEstId',fld:'vCCODIFICACAOESTID'},{av:'AV8cProdutoCodificacaoValor',fld:'vCPRODUTOCODIFICACAOVALOR'},{av:'AV9cProdutoCodificacaoUsuarioAlt',fld:'vCPRODUTOCODIFICACAOUSUARIOALT'},{av:'AV10cProdutoCodificacaoDtHrAlt',fld:'vCPRODUTOCODIFICACAODTHRALT'},{av:'AV11pProdutoEmpresaId',fld:'vPPRODUTOEMPRESAID',hsh:true},{av:'AV12pProdutoId',fld:'vPPRODUTOID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCodificacaoEstEmpresaId',fld:'vCCODIFICACAOESTEMPRESAID'},{av:'AV7cCodificacaoEstId',fld:'vCCODIFICACAOESTID'},{av:'AV8cProdutoCodificacaoValor',fld:'vCPRODUTOCODIFICACAOVALOR'},{av:'AV9cProdutoCodificacaoUsuarioAlt',fld:'vCPRODUTOCODIFICACAOUSUARIOALT'},{av:'AV10cProdutoCodificacaoDtHrAlt',fld:'vCPRODUTOCODIFICACAODTHRALT'},{av:'AV11pProdutoEmpresaId',fld:'vPPRODUTOEMPRESAID',hsh:true},{av:'AV12pProdutoId',fld:'vPPRODUTOID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCodificacaoEstEmpresaId',fld:'vCCODIFICACAOESTEMPRESAID'},{av:'AV7cCodificacaoEstId',fld:'vCCODIFICACAOESTID'},{av:'AV8cProdutoCodificacaoValor',fld:'vCPRODUTOCODIFICACAOVALOR'},{av:'AV9cProdutoCodificacaoUsuarioAlt',fld:'vCPRODUTOCODIFICACAOUSUARIOALT'},{av:'AV10cProdutoCodificacaoDtHrAlt',fld:'vCPRODUTOCODIFICACAODTHRALT'},{av:'AV11pProdutoEmpresaId',fld:'vPPRODUTOEMPRESAID',hsh:true},{av:'AV12pProdutoId',fld:'vPPRODUTOID',hsh:true}],[]];
   this.setVCMap("AV11pProdutoEmpresaId", "vPPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV12pProdutoId", "vPPRODUTOID", 0, "int");
   this.setVCMap("AV13pCodificacaoEstEmpresaId", "vPCODIFICACAOESTEMPRESAID", 0, "char");
   this.setVCMap("AV14pCodificacaoEstId", "vPCODIFICACAOESTID", 0, "char");
   this.setVCMap("AV11pProdutoEmpresaId", "vPPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV12pProdutoId", "vPPRODUTOID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar({rfrVar:"AV11pProdutoEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV12pProdutoId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0b92());
