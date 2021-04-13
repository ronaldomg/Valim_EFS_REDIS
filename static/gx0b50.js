/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:35:17.10
*/
gx.evt.autoSkip = false;
gx.define('gx0b50', false, function () {
   this.ServerClass =  "gx0b50" ;
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
      this.AV13pProdutoEmpresaId=gx.fn.getControlValue("vPPRODUTOEMPRESAID") ;
      this.AV14pProdutoId=gx.fn.getIntegerValue("vPPRODUTOID",'.') ;
      this.AV15pPrecoPromocaoSequencia=gx.fn.getIntegerValue("vPPRECOPROMOCAOSEQUENCIA",'.') ;
   };
   this.e131pt2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141pt1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,60,63];
   this.GXLastCtrlId =63;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0b50",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(2964,53,"PRODUTOEMPRESAID","Empresa do Produto","","ProdutoEmpresaId","char",0,"px",10,10,"left",null,[],2964,"ProdutoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2965,54,"PRODUTOID","Código do Produto","","ProdutoId","int",0,"px",10,10,"right",null,[],2965,"ProdutoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3814,55,"PRECOPROMOCAOSEQUENCIA","Sequência","","PrecoPromocaoSequencia","int",0,"px",4,4,"right",null,[],3814,"PrecoPromocaoSequencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3806,56,"PRECOPROMOCAODATAINICIAL","Data Inicial da Promoção","Selecionar","PrecoPromocaoDataInicial","date",0,"px",10,10,"right",null,[],3806,"PrecoPromocaoDataInicial",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3807,57,"PRECOPROMOCAODATAFINAL","Data Final da Promoção","","PrecoPromocaoDataFinal","date",0,"px",10,10,"right",null,[],3807,"PrecoPromocaoDataFinal",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3808,58,"PRECOPROMOCAOEMPID","Empresa Preço","","PrecoPromocaoEmpId","char",0,"px",10,10,"left",null,[],3808,"PrecoPromocaoEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3809,59,"PRECOPROMOCAOID","Código do Preço","","PrecoPromocaoId","int",0,"px",2,2,"right",null,[],3809,"PrecoPromocaoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5878,60,"PRECOPROMOCAOFILIALID","Filial","","PrecoPromocaoFilialId","int",0,"px",7,7,"right",null,[],5878,"PrecoPromocaoFilialId",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKPRODUTOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPRODUTOEMPRESAID",gxz:"ZV6cProdutoEmpresaId",gxold:"OV6cProdutoEmpresaId",gxvar:"AV6cProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCPRODUTOEMPRESAID",gx.O.AV6cProdutoEmpresaId,0)},c2v:function(){gx.O.AV6cProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKPRODUTOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPRODUTOID",gxz:"ZV7cProdutoId",gxold:"OV7cProdutoId",gxvar:"AV7cProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPRODUTOID",gx.O.AV7cProdutoId,0)},c2v:function(){gx.O.AV7cProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKPRECOPROMOCAOSEQUENCIA", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPRECOPROMOCAOSEQUENCIA",gxz:"ZV8cPrecoPromocaoSequencia",gxold:"OV8cPrecoPromocaoSequencia",gxvar:"AV8cPrecoPromocaoSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cPrecoPromocaoSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cPrecoPromocaoSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPRECOPROMOCAOSEQUENCIA",gx.O.AV8cPrecoPromocaoSequencia,0)},c2v:function(){gx.O.AV8cPrecoPromocaoSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPRECOPROMOCAOSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKPRECOPROMOCAODATAINICIAL", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPRECOPROMOCAODATAINICIAL",gxz:"ZV9cPrecoPromocaoDataInicial",gxold:"OV9cPrecoPromocaoDataInicial",gxvar:"AV9cPrecoPromocaoDataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cPrecoPromocaoDataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9cPrecoPromocaoDataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCPRECOPROMOCAODATAINICIAL",gx.O.AV9cPrecoPromocaoDataInicial,0)},c2v:function(){gx.O.AV9cPrecoPromocaoDataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCPRECOPROMOCAODATAINICIAL")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKPRECOPROMOCAODATAFINAL", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPRECOPROMOCAODATAFINAL",gxz:"ZV10cPrecoPromocaoDataFinal",gxold:"OV10cPrecoPromocaoDataFinal",gxvar:"AV10cPrecoPromocaoDataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cPrecoPromocaoDataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10cPrecoPromocaoDataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCPRECOPROMOCAODATAFINAL",gx.O.AV10cPrecoPromocaoDataFinal,0)},c2v:function(){gx.O.AV10cPrecoPromocaoDataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCPRECOPROMOCAODATAFINAL")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKPRECOPROMOCAOEMPID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPRECOPROMOCAOEMPID",gxz:"ZV11cPrecoPromocaoEmpId",gxold:"OV11cPrecoPromocaoEmpId",gxvar:"AV11cPrecoPromocaoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cPrecoPromocaoEmpId=Value},v2z:function(Value){gx.O.ZV11cPrecoPromocaoEmpId=Value},v2c:function(){gx.fn.setControlValue("vCPRECOPROMOCAOEMPID",gx.O.AV11cPrecoPromocaoEmpId,0)},c2v:function(){gx.O.AV11cPrecoPromocaoEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCPRECOPROMOCAOEMPID")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKPRECOPROMOCAOID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPRECOPROMOCAOID",gxz:"ZV12cPrecoPromocaoId",gxold:"OV12cPrecoPromocaoId",gxvar:"AV12cPrecoPromocaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cPrecoPromocaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12cPrecoPromocaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPRECOPROMOCAOID",gx.O.AV12cPrecoPromocaoId,0)},c2v:function(){gx.O.AV12cPrecoPromocaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPRECOPROMOCAOID",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV18Linkselection_GXI)},c2v:function(){gx.O.AV18Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV18Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PRODUTOEMPRESAID",gxz:"Z2964ProdutoEmpresaId",gxold:"O2964ProdutoEmpresaId",gxvar:"A2964ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2964ProdutoEmpresaId=Value},v2z:function(Value){gx.O.Z2964ProdutoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("PRODUTOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A2964ProdutoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2964ProdutoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("PRODUTOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PRODUTOID",gxz:"Z2965ProdutoId",gxold:"O2965ProdutoId",gxvar:"A2965ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2965ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2965ProdutoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PRODUTOID",row || gx.fn.currentGridRowImpl(51),gx.O.A2965ProdutoId,0)},c2v:function(){gx.O.A2965ProdutoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PRODUTOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PRECOPROMOCAOSEQUENCIA",gxz:"Z3814PrecoPromocaoSequencia",gxold:"O3814PrecoPromocaoSequencia",gxvar:"A3814PrecoPromocaoSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3814PrecoPromocaoSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3814PrecoPromocaoSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PRECOPROMOCAOSEQUENCIA",row || gx.fn.currentGridRowImpl(51),gx.O.A3814PrecoPromocaoSequencia,0)},c2v:function(){gx.O.A3814PrecoPromocaoSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PRECOPROMOCAOSEQUENCIA",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PRECOPROMOCAODATAINICIAL",gxz:"Z3806PrecoPromocaoDataInicial",gxold:"O3806PrecoPromocaoDataInicial",gxvar:"A3806PrecoPromocaoDataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3806PrecoPromocaoDataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3806PrecoPromocaoDataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PRECOPROMOCAODATAINICIAL",row || gx.fn.currentGridRowImpl(51),gx.O.A3806PrecoPromocaoDataInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3806PrecoPromocaoDataInicial=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PRECOPROMOCAODATAINICIAL",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PRECOPROMOCAODATAFINAL",gxz:"Z3807PrecoPromocaoDataFinal",gxold:"O3807PrecoPromocaoDataFinal",gxvar:"A3807PrecoPromocaoDataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3807PrecoPromocaoDataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3807PrecoPromocaoDataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PRECOPROMOCAODATAFINAL",row || gx.fn.currentGridRowImpl(51),gx.O.A3807PrecoPromocaoDataFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3807PrecoPromocaoDataFinal=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PRECOPROMOCAODATAFINAL",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PRECOPROMOCAOEMPID",gxz:"Z3808PrecoPromocaoEmpId",gxold:"O3808PrecoPromocaoEmpId",gxvar:"A3808PrecoPromocaoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3808PrecoPromocaoEmpId=Value},v2z:function(Value){gx.O.Z3808PrecoPromocaoEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("PRECOPROMOCAOEMPID",row || gx.fn.currentGridRowImpl(51),gx.O.A3808PrecoPromocaoEmpId,0)},c2v:function(){gx.O.A3808PrecoPromocaoEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("PRECOPROMOCAOEMPID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PRECOPROMOCAOID",gxz:"Z3809PrecoPromocaoId",gxold:"O3809PrecoPromocaoId",gxvar:"A3809PrecoPromocaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3809PrecoPromocaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3809PrecoPromocaoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PRECOPROMOCAOID",row || gx.fn.currentGridRowImpl(51),gx.O.A3809PrecoPromocaoId,0)},c2v:function(){gx.O.A3809PrecoPromocaoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PRECOPROMOCAOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PRECOPROMOCAOFILIALID",gxz:"Z5878PrecoPromocaoFilialId",gxold:"O5878PrecoPromocaoFilialId",gxvar:"A5878PrecoPromocaoFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5878PrecoPromocaoFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5878PrecoPromocaoFilialId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PRECOPROMOCAOFILIALID",row || gx.fn.currentGridRowImpl(51),gx.O.A5878PrecoPromocaoFilialId,0)},c2v:function(){gx.O.A5878PrecoPromocaoFilialId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PRECOPROMOCAOFILIALID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TABLE4",grid:0};
   this.AV6cProdutoEmpresaId = "" ;
   this.ZV6cProdutoEmpresaId = "" ;
   this.OV6cProdutoEmpresaId = "" ;
   this.AV7cProdutoId = 0 ;
   this.ZV7cProdutoId = 0 ;
   this.OV7cProdutoId = 0 ;
   this.AV8cPrecoPromocaoSequencia = 0 ;
   this.ZV8cPrecoPromocaoSequencia = 0 ;
   this.OV8cPrecoPromocaoSequencia = 0 ;
   this.AV9cPrecoPromocaoDataInicial = gx.date.nullDate() ;
   this.ZV9cPrecoPromocaoDataInicial = gx.date.nullDate() ;
   this.OV9cPrecoPromocaoDataInicial = gx.date.nullDate() ;
   this.AV10cPrecoPromocaoDataFinal = gx.date.nullDate() ;
   this.ZV10cPrecoPromocaoDataFinal = gx.date.nullDate() ;
   this.OV10cPrecoPromocaoDataFinal = gx.date.nullDate() ;
   this.AV11cPrecoPromocaoEmpId = "" ;
   this.ZV11cPrecoPromocaoEmpId = "" ;
   this.OV11cPrecoPromocaoEmpId = "" ;
   this.AV12cPrecoPromocaoId = 0 ;
   this.ZV12cPrecoPromocaoId = 0 ;
   this.OV12cPrecoPromocaoId = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z2964ProdutoEmpresaId = "" ;
   this.O2964ProdutoEmpresaId = "" ;
   this.Z2965ProdutoId = 0 ;
   this.O2965ProdutoId = 0 ;
   this.Z3814PrecoPromocaoSequencia = 0 ;
   this.O3814PrecoPromocaoSequencia = 0 ;
   this.Z3806PrecoPromocaoDataInicial = gx.date.nullDate() ;
   this.O3806PrecoPromocaoDataInicial = gx.date.nullDate() ;
   this.Z3807PrecoPromocaoDataFinal = gx.date.nullDate() ;
   this.O3807PrecoPromocaoDataFinal = gx.date.nullDate() ;
   this.Z3808PrecoPromocaoEmpId = "" ;
   this.O3808PrecoPromocaoEmpId = "" ;
   this.Z3809PrecoPromocaoId = 0 ;
   this.O3809PrecoPromocaoId = 0 ;
   this.Z5878PrecoPromocaoFilialId = 0 ;
   this.O5878PrecoPromocaoFilialId = 0 ;
   this.AV6cProdutoEmpresaId = "" ;
   this.AV7cProdutoId = 0 ;
   this.AV8cPrecoPromocaoSequencia = 0 ;
   this.AV9cPrecoPromocaoDataInicial = gx.date.nullDate() ;
   this.AV10cPrecoPromocaoDataFinal = gx.date.nullDate() ;
   this.AV11cPrecoPromocaoEmpId = "" ;
   this.AV12cPrecoPromocaoId = 0 ;
   this.AV13pProdutoEmpresaId = "" ;
   this.AV14pProdutoId = 0 ;
   this.AV15pPrecoPromocaoSequencia = 0 ;
   this.AV5LinkSelection = "" ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2965ProdutoId = 0 ;
   this.A3814PrecoPromocaoSequencia = 0 ;
   this.A3806PrecoPromocaoDataInicial = gx.date.nullDate() ;
   this.A3807PrecoPromocaoDataFinal = gx.date.nullDate() ;
   this.A3808PrecoPromocaoEmpId = "" ;
   this.A3809PrecoPromocaoId = 0 ;
   this.A5878PrecoPromocaoFilialId = 0 ;
   this.Events = {"e131pt2_client": ["ENTER", true] ,"e141pt1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProdutoEmpresaId',fld:'vCPRODUTOEMPRESAID'},{av:'AV7cProdutoId',fld:'vCPRODUTOID'},{av:'AV8cPrecoPromocaoSequencia',fld:'vCPRECOPROMOCAOSEQUENCIA'},{av:'AV9cPrecoPromocaoDataInicial',fld:'vCPRECOPROMOCAODATAINICIAL'},{av:'AV10cPrecoPromocaoDataFinal',fld:'vCPRECOPROMOCAODATAFINAL'},{av:'AV11cPrecoPromocaoEmpId',fld:'vCPRECOPROMOCAOEMPID'},{av:'AV12cPrecoPromocaoId',fld:'vCPRECOPROMOCAOID'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A3814PrecoPromocaoSequencia',fld:'PRECOPROMOCAOSEQUENCIA'}],[{av:'AV13pProdutoEmpresaId',fld:'vPPRODUTOEMPRESAID'},{av:'AV14pProdutoId',fld:'vPPRODUTOID'},{av:'AV15pPrecoPromocaoSequencia',fld:'vPPRECOPROMOCAOSEQUENCIA'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProdutoEmpresaId',fld:'vCPRODUTOEMPRESAID'},{av:'AV7cProdutoId',fld:'vCPRODUTOID'},{av:'AV8cPrecoPromocaoSequencia',fld:'vCPRECOPROMOCAOSEQUENCIA'},{av:'AV9cPrecoPromocaoDataInicial',fld:'vCPRECOPROMOCAODATAINICIAL'},{av:'AV10cPrecoPromocaoDataFinal',fld:'vCPRECOPROMOCAODATAFINAL'},{av:'AV11cPrecoPromocaoEmpId',fld:'vCPRECOPROMOCAOEMPID'},{av:'AV12cPrecoPromocaoId',fld:'vCPRECOPROMOCAOID'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProdutoEmpresaId',fld:'vCPRODUTOEMPRESAID'},{av:'AV7cProdutoId',fld:'vCPRODUTOID'},{av:'AV8cPrecoPromocaoSequencia',fld:'vCPRECOPROMOCAOSEQUENCIA'},{av:'AV9cPrecoPromocaoDataInicial',fld:'vCPRECOPROMOCAODATAINICIAL'},{av:'AV10cPrecoPromocaoDataFinal',fld:'vCPRECOPROMOCAODATAFINAL'},{av:'AV11cPrecoPromocaoEmpId',fld:'vCPRECOPROMOCAOEMPID'},{av:'AV12cPrecoPromocaoId',fld:'vCPRECOPROMOCAOID'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProdutoEmpresaId',fld:'vCPRODUTOEMPRESAID'},{av:'AV7cProdutoId',fld:'vCPRODUTOID'},{av:'AV8cPrecoPromocaoSequencia',fld:'vCPRECOPROMOCAOSEQUENCIA'},{av:'AV9cPrecoPromocaoDataInicial',fld:'vCPRECOPROMOCAODATAINICIAL'},{av:'AV10cPrecoPromocaoDataFinal',fld:'vCPRECOPROMOCAODATAFINAL'},{av:'AV11cPrecoPromocaoEmpId',fld:'vCPRECOPROMOCAOEMPID'},{av:'AV12cPrecoPromocaoId',fld:'vCPRECOPROMOCAOID'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProdutoEmpresaId',fld:'vCPRODUTOEMPRESAID'},{av:'AV7cProdutoId',fld:'vCPRODUTOID'},{av:'AV8cPrecoPromocaoSequencia',fld:'vCPRECOPROMOCAOSEQUENCIA'},{av:'AV9cPrecoPromocaoDataInicial',fld:'vCPRECOPROMOCAODATAINICIAL'},{av:'AV10cPrecoPromocaoDataFinal',fld:'vCPRECOPROMOCAODATAFINAL'},{av:'AV11cPrecoPromocaoEmpId',fld:'vCPRECOPROMOCAOEMPID'},{av:'AV12cPrecoPromocaoId',fld:'vCPRECOPROMOCAOID'}],[]];
   this.setVCMap("AV13pProdutoEmpresaId", "vPPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV14pProdutoId", "vPPRODUTOID", 0, "int");
   this.setVCMap("AV15pPrecoPromocaoSequencia", "vPPRECOPROMOCAOSEQUENCIA", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0b50());
