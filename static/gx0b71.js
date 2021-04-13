/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:34:17.93
*/
gx.evt.autoSkip = false;
gx.define('gx0b71', false, function () {
   this.ServerClass =  "gx0b71" ;
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
      this.AV12pProdutoEmpresaId=gx.fn.getControlValue("vPPRODUTOEMPRESAID") ;
      this.AV13pProdutoId=gx.fn.getIntegerValue("vPPRODUTOID",'.') ;
   };
   this.e131p52_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141p51_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,51,52,53,54,55,56,59];
   this.GXLastCtrlId =59;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0b71",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(2965,48,"PRODUTOID","Código do Produto","","ProdutoId","int",0,"px",10,10,"right",null,[],2965,"ProdutoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3539,49,"GRUPOPRODUTOEMPRESAID","Empresa","","GrupoProdutoEmpresaId","char",0,"px",10,10,"left",null,[],3539,"GrupoProdutoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3408,50,"GRUPOPRODUTOID","Código do Grupo Produto","","GrupoProdutoId","int",0,"px",3,3,"right",null,[],3408,"GrupoProdutoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3826,51,"SUBGRUPOPRODUTOEMPRESAID","Empresa","","SubgrupoProdutoEmpresaId","char",0,"px",10,10,"left",null,[],3826,"SubgrupoProdutoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3409,52,"SUBGRUPOPRODUTOID","Código SubGrupo Produto","","SubgrupoProdutoId","int",0,"px",3,3,"right",null,[],3409,"SubgrupoProdutoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3623,53,"PRODUTOCODIGOID","Código Alternativo Produto","Selecionar","ProdutoCodigoId","int",0,"px",5,5,"right",null,[],3623,"ProdutoCodigoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3831,54,"PRODUTOUNIDADECOMPRAEMPID","Empresa","","ProdutoUnidadeCompraEmpId","char",0,"px",10,10,"left",null,[],3831,"ProdutoUnidadeCompraEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3851,55,"PRODUTOTIPO","Tipo","","ProdutoTipo","char",0,"px",2,2,"left",null,[],3851,"ProdutoTipo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2964,56,"PRODUTOEMPRESAID","Empresa do Produto","","ProdutoEmpresaId","char",0,"px",10,10,"left",null,[],2964,"ProdutoEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKPRODUTOID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPRODUTOID",gxz:"ZV6cProdutoId",gxold:"OV6cProdutoId",gxvar:"AV6cProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPRODUTOID",gx.O.AV6cProdutoId,0)},c2v:function(){gx.O.AV6cProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKGRUPOPRODUTOEMPRESAID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCGRUPOPRODUTOEMPRESAID",gxz:"ZV7cGrupoProdutoEmpresaId",gxold:"OV7cGrupoProdutoEmpresaId",gxvar:"AV7cGrupoProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cGrupoProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV7cGrupoProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCGRUPOPRODUTOEMPRESAID",gx.O.AV7cGrupoProdutoEmpresaId,0)},c2v:function(){gx.O.AV7cGrupoProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCGRUPOPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKGRUPOPRODUTOID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCGRUPOPRODUTOID",gxz:"ZV8cGrupoProdutoId",gxold:"OV8cGrupoProdutoId",gxvar:"AV8cGrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cGrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cGrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCGRUPOPRODUTOID",gx.O.AV8cGrupoProdutoId,0)},c2v:function(){gx.O.AV8cGrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKSUBGRUPOPRODUTOEMPRESAID", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSUBGRUPOPRODUTOEMPRESAID",gxz:"ZV9cSubgrupoProdutoEmpresaId",gxold:"OV9cSubgrupoProdutoEmpresaId",gxvar:"AV9cSubgrupoProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cSubgrupoProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV9cSubgrupoProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCSUBGRUPOPRODUTOEMPRESAID",gx.O.AV9cSubgrupoProdutoEmpresaId,0)},c2v:function(){gx.O.AV9cSubgrupoProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCSUBGRUPOPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKSUBGRUPOPRODUTOID", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSUBGRUPOPRODUTOID",gxz:"ZV10cSubgrupoProdutoId",gxold:"OV10cSubgrupoProdutoId",gxvar:"AV10cSubgrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cSubgrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cSubgrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCSUBGRUPOPRODUTOID",gx.O.AV10cSubgrupoProdutoId,0)},c2v:function(){gx.O.AV10cSubgrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSUBGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKPRODUTOCODIGOID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPRODUTOCODIGOID",gxz:"ZV11cProdutoCodigoId",gxold:"OV11cProdutoCodigoId",gxvar:"AV11cProdutoCodigoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cProdutoCodigoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cProdutoCodigoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPRODUTOCODIGOID",gx.O.AV11cProdutoCodigoId,0)},c2v:function(){gx.O.AV11cProdutoCodigoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPRODUTOCODIGOID",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GROUP2",grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PRODUTOID",gxz:"Z2965ProdutoId",gxold:"O2965ProdutoId",gxvar:"A2965ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2965ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2965ProdutoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PRODUTOID",row || gx.fn.currentGridRowImpl(46),gx.O.A2965ProdutoId,0)},c2v:function(){gx.O.A2965ProdutoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PRODUTOID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOPRODUTOEMPRESAID",gxz:"Z3539GrupoProdutoEmpresaId",gxold:"O3539GrupoProdutoEmpresaId",gxvar:"A3539GrupoProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3539GrupoProdutoEmpresaId=Value},v2z:function(Value){gx.O.Z3539GrupoProdutoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPOPRODUTOEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A3539GrupoProdutoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3539GrupoProdutoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPOPRODUTOEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOPRODUTOID",gxz:"Z3408GrupoProdutoId",gxold:"O3408GrupoProdutoId",gxvar:"A3408GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3408GrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3408GrupoProdutoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("GRUPOPRODUTOID",row || gx.fn.currentGridRowImpl(46),gx.O.A3408GrupoProdutoId,0)},c2v:function(){gx.O.A3408GrupoProdutoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("GRUPOPRODUTOID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SUBGRUPOPRODUTOEMPRESAID",gxz:"Z3826SubgrupoProdutoEmpresaId",gxold:"O3826SubgrupoProdutoEmpresaId",gxvar:"A3826SubgrupoProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3826SubgrupoProdutoEmpresaId=Value},v2z:function(Value){gx.O.Z3826SubgrupoProdutoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("SUBGRUPOPRODUTOEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A3826SubgrupoProdutoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3826SubgrupoProdutoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SUBGRUPOPRODUTOEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SUBGRUPOPRODUTOID",gxz:"Z3409SubgrupoProdutoId",gxold:"O3409SubgrupoProdutoId",gxvar:"A3409SubgrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3409SubgrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3409SubgrupoProdutoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SUBGRUPOPRODUTOID",row || gx.fn.currentGridRowImpl(46),gx.O.A3409SubgrupoProdutoId,0)},c2v:function(){gx.O.A3409SubgrupoProdutoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SUBGRUPOPRODUTOID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PRODUTOCODIGOID",gxz:"Z3623ProdutoCodigoId",gxold:"O3623ProdutoCodigoId",gxvar:"A3623ProdutoCodigoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3623ProdutoCodigoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3623ProdutoCodigoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PRODUTOCODIGOID",row || gx.fn.currentGridRowImpl(46),gx.O.A3623ProdutoCodigoId,0)},c2v:function(){gx.O.A3623ProdutoCodigoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PRODUTOCODIGOID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PRODUTOUNIDADECOMPRAEMPID",gxz:"Z3831ProdutoUnidadeCompraEmpId",gxold:"O3831ProdutoUnidadeCompraEmpId",gxvar:"A3831ProdutoUnidadeCompraEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3831ProdutoUnidadeCompraEmpId=Value},v2z:function(Value){gx.O.Z3831ProdutoUnidadeCompraEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("PRODUTOUNIDADECOMPRAEMPID",row || gx.fn.currentGridRowImpl(46),gx.O.A3831ProdutoUnidadeCompraEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3831ProdutoUnidadeCompraEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("PRODUTOUNIDADECOMPRAEMPID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PRODUTOTIPO",gxz:"Z3851ProdutoTipo",gxold:"O3851ProdutoTipo",gxvar:"A3851ProdutoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3851ProdutoTipo=Value},v2z:function(Value){gx.O.Z3851ProdutoTipo=Value},v2c:function(row){gx.fn.setGridControlValue("PRODUTOTIPO",row || gx.fn.currentGridRowImpl(46),gx.O.A3851ProdutoTipo,0)},c2v:function(){gx.O.A3851ProdutoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("PRODUTOTIPO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PRODUTOEMPRESAID",gxz:"Z2964ProdutoEmpresaId",gxold:"O2964ProdutoEmpresaId",gxvar:"A2964ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2964ProdutoEmpresaId=Value},v2z:function(Value){gx.O.Z2964ProdutoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("PRODUTOEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A2964ProdutoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2964ProdutoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("PRODUTOEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TABLE4",grid:0};
   this.AV6cProdutoId = 0 ;
   this.ZV6cProdutoId = 0 ;
   this.OV6cProdutoId = 0 ;
   this.AV7cGrupoProdutoEmpresaId = "" ;
   this.ZV7cGrupoProdutoEmpresaId = "" ;
   this.OV7cGrupoProdutoEmpresaId = "" ;
   this.AV8cGrupoProdutoId = 0 ;
   this.ZV8cGrupoProdutoId = 0 ;
   this.OV8cGrupoProdutoId = 0 ;
   this.AV9cSubgrupoProdutoEmpresaId = "" ;
   this.ZV9cSubgrupoProdutoEmpresaId = "" ;
   this.OV9cSubgrupoProdutoEmpresaId = "" ;
   this.AV10cSubgrupoProdutoId = 0 ;
   this.ZV10cSubgrupoProdutoId = 0 ;
   this.OV10cSubgrupoProdutoId = 0 ;
   this.AV11cProdutoCodigoId = 0 ;
   this.ZV11cProdutoCodigoId = 0 ;
   this.OV11cProdutoCodigoId = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z2965ProdutoId = 0 ;
   this.O2965ProdutoId = 0 ;
   this.Z3539GrupoProdutoEmpresaId = "" ;
   this.O3539GrupoProdutoEmpresaId = "" ;
   this.Z3408GrupoProdutoId = 0 ;
   this.O3408GrupoProdutoId = 0 ;
   this.Z3826SubgrupoProdutoEmpresaId = "" ;
   this.O3826SubgrupoProdutoEmpresaId = "" ;
   this.Z3409SubgrupoProdutoId = 0 ;
   this.O3409SubgrupoProdutoId = 0 ;
   this.Z3623ProdutoCodigoId = 0 ;
   this.O3623ProdutoCodigoId = 0 ;
   this.Z3831ProdutoUnidadeCompraEmpId = "" ;
   this.O3831ProdutoUnidadeCompraEmpId = "" ;
   this.Z3851ProdutoTipo = "" ;
   this.O3851ProdutoTipo = "" ;
   this.Z2964ProdutoEmpresaId = "" ;
   this.O2964ProdutoEmpresaId = "" ;
   this.AV6cProdutoId = 0 ;
   this.AV7cGrupoProdutoEmpresaId = "" ;
   this.AV8cGrupoProdutoId = 0 ;
   this.AV9cSubgrupoProdutoEmpresaId = "" ;
   this.AV10cSubgrupoProdutoId = 0 ;
   this.AV11cProdutoCodigoId = 0 ;
   this.AV12pProdutoEmpresaId = "" ;
   this.AV13pProdutoId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A2965ProdutoId = 0 ;
   this.A3539GrupoProdutoEmpresaId = "" ;
   this.A3408GrupoProdutoId = 0 ;
   this.A3826SubgrupoProdutoEmpresaId = "" ;
   this.A3409SubgrupoProdutoId = 0 ;
   this.A3623ProdutoCodigoId = 0 ;
   this.A3831ProdutoUnidadeCompraEmpId = "" ;
   this.A3851ProdutoTipo = "" ;
   this.A2964ProdutoEmpresaId = "" ;
   this.Events = {"e131p52_client": ["ENTER", true] ,"e141p51_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProdutoId',fld:'vCPRODUTOID'},{av:'AV7cGrupoProdutoEmpresaId',fld:'vCGRUPOPRODUTOEMPRESAID'},{av:'AV8cGrupoProdutoId',fld:'vCGRUPOPRODUTOID'},{av:'AV9cSubgrupoProdutoEmpresaId',fld:'vCSUBGRUPOPRODUTOEMPRESAID'},{av:'AV10cSubgrupoProdutoId',fld:'vCSUBGRUPOPRODUTOID'},{av:'AV11cProdutoCodigoId',fld:'vCPRODUTOCODIGOID'},{av:'AV12pProdutoEmpresaId',fld:'vPPRODUTOEMPRESAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A2965ProdutoId',fld:'PRODUTOID'}],[{av:'AV13pProdutoId',fld:'vPPRODUTOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProdutoId',fld:'vCPRODUTOID'},{av:'AV7cGrupoProdutoEmpresaId',fld:'vCGRUPOPRODUTOEMPRESAID'},{av:'AV8cGrupoProdutoId',fld:'vCGRUPOPRODUTOID'},{av:'AV9cSubgrupoProdutoEmpresaId',fld:'vCSUBGRUPOPRODUTOEMPRESAID'},{av:'AV10cSubgrupoProdutoId',fld:'vCSUBGRUPOPRODUTOID'},{av:'AV11cProdutoCodigoId',fld:'vCPRODUTOCODIGOID'},{av:'AV12pProdutoEmpresaId',fld:'vPPRODUTOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProdutoId',fld:'vCPRODUTOID'},{av:'AV7cGrupoProdutoEmpresaId',fld:'vCGRUPOPRODUTOEMPRESAID'},{av:'AV8cGrupoProdutoId',fld:'vCGRUPOPRODUTOID'},{av:'AV9cSubgrupoProdutoEmpresaId',fld:'vCSUBGRUPOPRODUTOEMPRESAID'},{av:'AV10cSubgrupoProdutoId',fld:'vCSUBGRUPOPRODUTOID'},{av:'AV11cProdutoCodigoId',fld:'vCPRODUTOCODIGOID'},{av:'AV12pProdutoEmpresaId',fld:'vPPRODUTOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProdutoId',fld:'vCPRODUTOID'},{av:'AV7cGrupoProdutoEmpresaId',fld:'vCGRUPOPRODUTOEMPRESAID'},{av:'AV8cGrupoProdutoId',fld:'vCGRUPOPRODUTOID'},{av:'AV9cSubgrupoProdutoEmpresaId',fld:'vCSUBGRUPOPRODUTOEMPRESAID'},{av:'AV10cSubgrupoProdutoId',fld:'vCSUBGRUPOPRODUTOID'},{av:'AV11cProdutoCodigoId',fld:'vCPRODUTOCODIGOID'},{av:'AV12pProdutoEmpresaId',fld:'vPPRODUTOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProdutoId',fld:'vCPRODUTOID'},{av:'AV7cGrupoProdutoEmpresaId',fld:'vCGRUPOPRODUTOEMPRESAID'},{av:'AV8cGrupoProdutoId',fld:'vCGRUPOPRODUTOID'},{av:'AV9cSubgrupoProdutoEmpresaId',fld:'vCSUBGRUPOPRODUTOEMPRESAID'},{av:'AV10cSubgrupoProdutoId',fld:'vCSUBGRUPOPRODUTOID'},{av:'AV11cProdutoCodigoId',fld:'vCPRODUTOCODIGOID'},{av:'AV12pProdutoEmpresaId',fld:'vPPRODUTOEMPRESAID',hsh:true}],[]];
   this.setVCMap("AV12pProdutoEmpresaId", "vPPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV13pProdutoId", "vPPRODUTOID", 0, "int");
   this.setVCMap("AV12pProdutoEmpresaId", "vPPRODUTOEMPRESAID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar({rfrVar:"AV12pProdutoEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0b71());