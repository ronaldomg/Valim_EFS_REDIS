/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:40:11.74
*/
gx.evt.autoSkip = false;
gx.define('gx0gz0', false, function () {
   this.ServerClass =  "gx0gz0" ;
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
      this.AV13pVolVendasEmpresaId=gx.fn.getControlValue("vPVOLVENDASEMPRESAID") ;
      this.AV14pVolVendasUsuarioId=gx.fn.getControlValue("vPVOLVENDASUSUARIOID") ;
      this.AV15pVolVendasChave=gx.fn.getControlValue("vPVOLVENDASCHAVE") ;
      this.AV16pVolVendasEntradaSaida=gx.fn.getControlValue("vPVOLVENDASENTRADASAIDA") ;
   };
   this.e131tz2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141tz1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,60,63];
   this.GXLastCtrlId =63;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0gz0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(7387,53,"VOLVENDASEMPRESAID","Empresa","","VolVendasEmpresaId","char",0,"px",10,10,"left",null,[],7387,"VolVendasEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7388,54,"VOLVENDASUSUARIOID","Usuário","","VolVendasUsuarioId","char",0,"px",12,12,"left",null,[],7388,"VolVendasUsuarioId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7389,55,"VOLVENDASCHAVE","Chave","","VolVendasChave","svchar",0,"px",15,15,"left",null,[],7389,"VolVendasChave",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7386,56,"VOLVENDASENTRADASAIDA","Entrada/Saída","","VolVendasEntradaSaida","char",0,"px",1,1,"left",null,[],7386,"VolVendasEntradaSaida",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7372,57,"VOLVENDASVENDEDORID","Vendedor","","VolVendasVendedorId","int",0,"px",7,7,"right",null,[],7372,"VolVendasVendedorId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7373,58,"VOLVENDASVENDEDORNOME","Vendedor Nome","","VolVendasVendedorNome","svchar",0,"px",40,40,"left",null,[],7373,"VolVendasVendedorNome",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7374,59,"VOLVENDASPRODUTOID","Produto","","VolVendasProdutoId","int",0,"px",10,10,"right",null,[],7374,"VolVendasProdutoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7376,60,"VOLVENDASFAMILIAID","Família","","VolVendasFamiliaId","char",0,"px",15,15,"left",null,[],7376,"VolVendasFamiliaId",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKVOLVENDASEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCVOLVENDASEMPRESAID",gxz:"ZV6cVolVendasEmpresaId",gxold:"OV6cVolVendasEmpresaId",gxvar:"AV6cVolVendasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cVolVendasEmpresaId=Value},v2z:function(Value){gx.O.ZV6cVolVendasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCVOLVENDASEMPRESAID",gx.O.AV6cVolVendasEmpresaId,0)},c2v:function(){gx.O.AV6cVolVendasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCVOLVENDASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKVOLVENDASUSUARIOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCVOLVENDASUSUARIOID",gxz:"ZV7cVolVendasUsuarioId",gxold:"OV7cVolVendasUsuarioId",gxvar:"AV7cVolVendasUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cVolVendasUsuarioId=Value},v2z:function(Value){gx.O.ZV7cVolVendasUsuarioId=Value},v2c:function(){gx.fn.setControlValue("vCVOLVENDASUSUARIOID",gx.O.AV7cVolVendasUsuarioId,0)},c2v:function(){gx.O.AV7cVolVendasUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vCVOLVENDASUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKVOLVENDASCHAVE", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCVOLVENDASCHAVE",gxz:"ZV8cVolVendasChave",gxold:"OV8cVolVendasChave",gxvar:"AV8cVolVendasChave",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cVolVendasChave=Value},v2z:function(Value){gx.O.ZV8cVolVendasChave=Value},v2c:function(){gx.fn.setControlValue("vCVOLVENDASCHAVE",gx.O.AV8cVolVendasChave,0)},c2v:function(){gx.O.AV8cVolVendasChave=this.val()},val:function(){return gx.fn.getControlValue("vCVOLVENDASCHAVE")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKVOLVENDASENTRADASAIDA", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCVOLVENDASENTRADASAIDA",gxz:"ZV9cVolVendasEntradaSaida",gxold:"OV9cVolVendasEntradaSaida",gxvar:"AV9cVolVendasEntradaSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cVolVendasEntradaSaida=Value},v2z:function(Value){gx.O.ZV9cVolVendasEntradaSaida=Value},v2c:function(){gx.fn.setControlValue("vCVOLVENDASENTRADASAIDA",gx.O.AV9cVolVendasEntradaSaida,0)},c2v:function(){gx.O.AV9cVolVendasEntradaSaida=this.val()},val:function(){return gx.fn.getControlValue("vCVOLVENDASENTRADASAIDA")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKVOLVENDASVENDEDORID", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCVOLVENDASVENDEDORID",gxz:"ZV10cVolVendasVendedorId",gxold:"OV10cVolVendasVendedorId",gxvar:"AV10cVolVendasVendedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cVolVendasVendedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cVolVendasVendedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCVOLVENDASVENDEDORID",gx.O.AV10cVolVendasVendedorId,0)},c2v:function(){gx.O.AV10cVolVendasVendedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCVOLVENDASVENDEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKVOLVENDASVENDEDORNOME", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCVOLVENDASVENDEDORNOME",gxz:"ZV11cVolVendasVendedorNome",gxold:"OV11cVolVendasVendedorNome",gxvar:"AV11cVolVendasVendedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cVolVendasVendedorNome=Value},v2z:function(Value){gx.O.ZV11cVolVendasVendedorNome=Value},v2c:function(){gx.fn.setControlValue("vCVOLVENDASVENDEDORNOME",gx.O.AV11cVolVendasVendedorNome,0)},c2v:function(){gx.O.AV11cVolVendasVendedorNome=this.val()},val:function(){return gx.fn.getControlValue("vCVOLVENDASVENDEDORNOME")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKVOLVENDASPRODUTOID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCVOLVENDASPRODUTOID",gxz:"ZV12cVolVendasProdutoId",gxold:"OV12cVolVendasProdutoId",gxvar:"AV12cVolVendasProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cVolVendasProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12cVolVendasProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCVOLVENDASPRODUTOID",gx.O.AV12cVolVendasProdutoId,0)},c2v:function(){gx.O.AV12cVolVendasProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCVOLVENDASPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV19Linkselection_GXI)},c2v:function(){gx.O.AV19Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV19Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"VOLVENDASEMPRESAID",gxz:"Z7387VolVendasEmpresaId",gxold:"O7387VolVendasEmpresaId",gxvar:"A7387VolVendasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7387VolVendasEmpresaId=Value},v2z:function(Value){gx.O.Z7387VolVendasEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("VOLVENDASEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A7387VolVendasEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7387VolVendasEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("VOLVENDASEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"VOLVENDASUSUARIOID",gxz:"Z7388VolVendasUsuarioId",gxold:"O7388VolVendasUsuarioId",gxvar:"A7388VolVendasUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7388VolVendasUsuarioId=Value},v2z:function(Value){gx.O.Z7388VolVendasUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("VOLVENDASUSUARIOID",row || gx.fn.currentGridRowImpl(51),gx.O.A7388VolVendasUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7388VolVendasUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("VOLVENDASUSUARIOID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"VOLVENDASCHAVE",gxz:"Z7389VolVendasChave",gxold:"O7389VolVendasChave",gxvar:"A7389VolVendasChave",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7389VolVendasChave=Value},v2z:function(Value){gx.O.Z7389VolVendasChave=Value},v2c:function(row){gx.fn.setGridControlValue("VOLVENDASCHAVE",row || gx.fn.currentGridRowImpl(51),gx.O.A7389VolVendasChave,0)},c2v:function(){gx.O.A7389VolVendasChave=this.val()},val:function(row){return gx.fn.getGridControlValue("VOLVENDASCHAVE",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"VOLVENDASENTRADASAIDA",gxz:"Z7386VolVendasEntradaSaida",gxold:"O7386VolVendasEntradaSaida",gxvar:"A7386VolVendasEntradaSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7386VolVendasEntradaSaida=Value},v2z:function(Value){gx.O.Z7386VolVendasEntradaSaida=Value},v2c:function(row){gx.fn.setGridControlValue("VOLVENDASENTRADASAIDA",row || gx.fn.currentGridRowImpl(51),gx.O.A7386VolVendasEntradaSaida,0)},c2v:function(){gx.O.A7386VolVendasEntradaSaida=this.val()},val:function(row){return gx.fn.getGridControlValue("VOLVENDASENTRADASAIDA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"VOLVENDASVENDEDORID",gxz:"Z7372VolVendasVendedorId",gxold:"O7372VolVendasVendedorId",gxvar:"A7372VolVendasVendedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7372VolVendasVendedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7372VolVendasVendedorId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("VOLVENDASVENDEDORID",row || gx.fn.currentGridRowImpl(51),gx.O.A7372VolVendasVendedorId,0)},c2v:function(){gx.O.A7372VolVendasVendedorId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("VOLVENDASVENDEDORID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"VOLVENDASVENDEDORNOME",gxz:"Z7373VolVendasVendedorNome",gxold:"O7373VolVendasVendedorNome",gxvar:"A7373VolVendasVendedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7373VolVendasVendedorNome=Value},v2z:function(Value){gx.O.Z7373VolVendasVendedorNome=Value},v2c:function(row){gx.fn.setGridControlValue("VOLVENDASVENDEDORNOME",row || gx.fn.currentGridRowImpl(51),gx.O.A7373VolVendasVendedorNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7373VolVendasVendedorNome=this.val()},val:function(row){return gx.fn.getGridControlValue("VOLVENDASVENDEDORNOME",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"VOLVENDASPRODUTOID",gxz:"Z7374VolVendasProdutoId",gxold:"O7374VolVendasProdutoId",gxvar:"A7374VolVendasProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7374VolVendasProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7374VolVendasProdutoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("VOLVENDASPRODUTOID",row || gx.fn.currentGridRowImpl(51),gx.O.A7374VolVendasProdutoId,0)},c2v:function(){gx.O.A7374VolVendasProdutoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("VOLVENDASPRODUTOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"VOLVENDASFAMILIAID",gxz:"Z7376VolVendasFamiliaId",gxold:"O7376VolVendasFamiliaId",gxvar:"A7376VolVendasFamiliaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7376VolVendasFamiliaId=Value},v2z:function(Value){gx.O.Z7376VolVendasFamiliaId=Value},v2c:function(row){gx.fn.setGridControlValue("VOLVENDASFAMILIAID",row || gx.fn.currentGridRowImpl(51),gx.O.A7376VolVendasFamiliaId,0)},c2v:function(){gx.O.A7376VolVendasFamiliaId=this.val()},val:function(row){return gx.fn.getGridControlValue("VOLVENDASFAMILIAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TABLE4",grid:0};
   this.AV6cVolVendasEmpresaId = "" ;
   this.ZV6cVolVendasEmpresaId = "" ;
   this.OV6cVolVendasEmpresaId = "" ;
   this.AV7cVolVendasUsuarioId = "" ;
   this.ZV7cVolVendasUsuarioId = "" ;
   this.OV7cVolVendasUsuarioId = "" ;
   this.AV8cVolVendasChave = "" ;
   this.ZV8cVolVendasChave = "" ;
   this.OV8cVolVendasChave = "" ;
   this.AV9cVolVendasEntradaSaida = "" ;
   this.ZV9cVolVendasEntradaSaida = "" ;
   this.OV9cVolVendasEntradaSaida = "" ;
   this.AV10cVolVendasVendedorId = 0 ;
   this.ZV10cVolVendasVendedorId = 0 ;
   this.OV10cVolVendasVendedorId = 0 ;
   this.AV11cVolVendasVendedorNome = "" ;
   this.ZV11cVolVendasVendedorNome = "" ;
   this.OV11cVolVendasVendedorNome = "" ;
   this.AV12cVolVendasProdutoId = 0 ;
   this.ZV12cVolVendasProdutoId = 0 ;
   this.OV12cVolVendasProdutoId = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z7387VolVendasEmpresaId = "" ;
   this.O7387VolVendasEmpresaId = "" ;
   this.Z7388VolVendasUsuarioId = "" ;
   this.O7388VolVendasUsuarioId = "" ;
   this.Z7389VolVendasChave = "" ;
   this.O7389VolVendasChave = "" ;
   this.Z7386VolVendasEntradaSaida = "" ;
   this.O7386VolVendasEntradaSaida = "" ;
   this.Z7372VolVendasVendedorId = 0 ;
   this.O7372VolVendasVendedorId = 0 ;
   this.Z7373VolVendasVendedorNome = "" ;
   this.O7373VolVendasVendedorNome = "" ;
   this.Z7374VolVendasProdutoId = 0 ;
   this.O7374VolVendasProdutoId = 0 ;
   this.Z7376VolVendasFamiliaId = "" ;
   this.O7376VolVendasFamiliaId = "" ;
   this.AV6cVolVendasEmpresaId = "" ;
   this.AV7cVolVendasUsuarioId = "" ;
   this.AV8cVolVendasChave = "" ;
   this.AV9cVolVendasEntradaSaida = "" ;
   this.AV10cVolVendasVendedorId = 0 ;
   this.AV11cVolVendasVendedorNome = "" ;
   this.AV12cVolVendasProdutoId = 0 ;
   this.AV13pVolVendasEmpresaId = "" ;
   this.AV14pVolVendasUsuarioId = "" ;
   this.AV15pVolVendasChave = "" ;
   this.AV16pVolVendasEntradaSaida = "" ;
   this.AV5LinkSelection = "" ;
   this.A7387VolVendasEmpresaId = "" ;
   this.A7388VolVendasUsuarioId = "" ;
   this.A7389VolVendasChave = "" ;
   this.A7386VolVendasEntradaSaida = "" ;
   this.A7372VolVendasVendedorId = 0 ;
   this.A7373VolVendasVendedorNome = "" ;
   this.A7374VolVendasProdutoId = 0 ;
   this.A7376VolVendasFamiliaId = "" ;
   this.Events = {"e131tz2_client": ["ENTER", true] ,"e141tz1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cVolVendasEmpresaId',fld:'vCVOLVENDASEMPRESAID'},{av:'AV7cVolVendasUsuarioId',fld:'vCVOLVENDASUSUARIOID'},{av:'AV8cVolVendasChave',fld:'vCVOLVENDASCHAVE'},{av:'AV9cVolVendasEntradaSaida',fld:'vCVOLVENDASENTRADASAIDA'},{av:'AV10cVolVendasVendedorId',fld:'vCVOLVENDASVENDEDORID'},{av:'AV11cVolVendasVendedorNome',fld:'vCVOLVENDASVENDEDORNOME'},{av:'AV12cVolVendasProdutoId',fld:'vCVOLVENDASPRODUTOID'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A7387VolVendasEmpresaId',fld:'VOLVENDASEMPRESAID'},{av:'A7388VolVendasUsuarioId',fld:'VOLVENDASUSUARIOID'},{av:'A7389VolVendasChave',fld:'VOLVENDASCHAVE'},{av:'A7386VolVendasEntradaSaida',fld:'VOLVENDASENTRADASAIDA'}],[{av:'AV13pVolVendasEmpresaId',fld:'vPVOLVENDASEMPRESAID'},{av:'AV14pVolVendasUsuarioId',fld:'vPVOLVENDASUSUARIOID'},{av:'AV15pVolVendasChave',fld:'vPVOLVENDASCHAVE'},{av:'AV16pVolVendasEntradaSaida',fld:'vPVOLVENDASENTRADASAIDA'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cVolVendasEmpresaId',fld:'vCVOLVENDASEMPRESAID'},{av:'AV7cVolVendasUsuarioId',fld:'vCVOLVENDASUSUARIOID'},{av:'AV8cVolVendasChave',fld:'vCVOLVENDASCHAVE'},{av:'AV9cVolVendasEntradaSaida',fld:'vCVOLVENDASENTRADASAIDA'},{av:'AV10cVolVendasVendedorId',fld:'vCVOLVENDASVENDEDORID'},{av:'AV11cVolVendasVendedorNome',fld:'vCVOLVENDASVENDEDORNOME'},{av:'AV12cVolVendasProdutoId',fld:'vCVOLVENDASPRODUTOID'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cVolVendasEmpresaId',fld:'vCVOLVENDASEMPRESAID'},{av:'AV7cVolVendasUsuarioId',fld:'vCVOLVENDASUSUARIOID'},{av:'AV8cVolVendasChave',fld:'vCVOLVENDASCHAVE'},{av:'AV9cVolVendasEntradaSaida',fld:'vCVOLVENDASENTRADASAIDA'},{av:'AV10cVolVendasVendedorId',fld:'vCVOLVENDASVENDEDORID'},{av:'AV11cVolVendasVendedorNome',fld:'vCVOLVENDASVENDEDORNOME'},{av:'AV12cVolVendasProdutoId',fld:'vCVOLVENDASPRODUTOID'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cVolVendasEmpresaId',fld:'vCVOLVENDASEMPRESAID'},{av:'AV7cVolVendasUsuarioId',fld:'vCVOLVENDASUSUARIOID'},{av:'AV8cVolVendasChave',fld:'vCVOLVENDASCHAVE'},{av:'AV9cVolVendasEntradaSaida',fld:'vCVOLVENDASENTRADASAIDA'},{av:'AV10cVolVendasVendedorId',fld:'vCVOLVENDASVENDEDORID'},{av:'AV11cVolVendasVendedorNome',fld:'vCVOLVENDASVENDEDORNOME'},{av:'AV12cVolVendasProdutoId',fld:'vCVOLVENDASPRODUTOID'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cVolVendasEmpresaId',fld:'vCVOLVENDASEMPRESAID'},{av:'AV7cVolVendasUsuarioId',fld:'vCVOLVENDASUSUARIOID'},{av:'AV8cVolVendasChave',fld:'vCVOLVENDASCHAVE'},{av:'AV9cVolVendasEntradaSaida',fld:'vCVOLVENDASENTRADASAIDA'},{av:'AV10cVolVendasVendedorId',fld:'vCVOLVENDASVENDEDORID'},{av:'AV11cVolVendasVendedorNome',fld:'vCVOLVENDASVENDEDORNOME'},{av:'AV12cVolVendasProdutoId',fld:'vCVOLVENDASPRODUTOID'}],[]];
   this.setVCMap("AV13pVolVendasEmpresaId", "vPVOLVENDASEMPRESAID", 0, "char");
   this.setVCMap("AV14pVolVendasUsuarioId", "vPVOLVENDASUSUARIOID", 0, "char");
   this.setVCMap("AV15pVolVendasChave", "vPVOLVENDASCHAVE", 0, "svchar");
   this.setVCMap("AV16pVolVendasEntradaSaida", "vPVOLVENDASENTRADASAIDA", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0gz0());