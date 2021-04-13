/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:28:31.68
*/
gx.evt.autoSkip = false;
gx.define('gx0451', false, function () {
   this.ServerClass =  "gx0451" ;
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
      this.AV12pVendedorEmpresaId=gx.fn.getControlValue("vPVENDEDOREMPRESAID") ;
      this.AV13pVendedorId=gx.fn.getIntegerValue("vPVENDEDORID",'.') ;
   };
   this.e131l12_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141l11_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,51,52,53,54,55,58];
   this.GXLastCtrlId =58;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0451",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(1237,48,"VENDEDORID","Código do Comprador","","VendedorId","int",0,"px",7,7,"right",null,[],1237,"VendedorId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1148,49,"VENDEDORNOME","Nome do Comprador","Selecionar","VendedorNome","svchar",0,"px",40,40,"left",null,[],1148,"VendedorNome",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1223,50,"VENDEDORSNVENDEDOR","Vendedor?","","VendedorSNVendedor","char",0,"px",1,1,"left",null,[],1223,"VendedorSNVendedor",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1127,51,"VENDEDORSNCOMPRADOR","Comprador?","","VendedorSNComprador","char",0,"px",1,1,"left",null,[],1127,"VendedorSNComprador",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1182,52,"VENDEDORSNGERENTE","Gerente?","","VendedorSNGerente","char",0,"px",1,1,"left",null,[],1182,"VendedorSNGerente",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1138,53,"VENDEDORPERCENTUALCOMISSAO","Percentual de Comissão","","VendedorPercentualComissao","decimal",0,"px",6,6,"right",null,[],1138,"VendedorPercentualComissao",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(75,54,"USUARIOID","Usuário","","UsuarioId","char",0,"px",12,12,"left",null,[],75,"UsuarioId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1229,55,"VENDEDOREMPRESAID","Empresa do Vendedor","","VendedorEmpresaId","char",0,"px",10,10,"left",null,[],1229,"VendedorEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKVENDEDORID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCVENDEDORID",gxz:"ZV6cVendedorId",gxold:"OV6cVendedorId",gxvar:"AV6cVendedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cVendedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cVendedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCVENDEDORID",gx.O.AV6cVendedorId,0)},c2v:function(){gx.O.AV6cVendedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCVENDEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKVENDEDORNOME", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCVENDEDORNOME",gxz:"ZV7cVendedorNome",gxold:"OV7cVendedorNome",gxvar:"AV7cVendedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cVendedorNome=Value},v2z:function(Value){gx.O.ZV7cVendedorNome=Value},v2c:function(){gx.fn.setControlValue("vCVENDEDORNOME",gx.O.AV7cVendedorNome,0)},c2v:function(){gx.O.AV7cVendedorNome=this.val()},val:function(){return gx.fn.getControlValue("vCVENDEDORNOME")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKVENDEDORSNVENDEDOR", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCVENDEDORSNVENDEDOR",gxz:"ZV8cVendedorSNVendedor",gxold:"OV8cVendedorSNVendedor",gxvar:"AV8cVendedorSNVendedor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cVendedorSNVendedor=Value},v2z:function(Value){gx.O.ZV8cVendedorSNVendedor=Value},v2c:function(){gx.fn.setControlValue("vCVENDEDORSNVENDEDOR",gx.O.AV8cVendedorSNVendedor,0)},c2v:function(){gx.O.AV8cVendedorSNVendedor=this.val()},val:function(){return gx.fn.getControlValue("vCVENDEDORSNVENDEDOR")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKVENDEDORSNCOMPRADOR", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCVENDEDORSNCOMPRADOR",gxz:"ZV9cVendedorSNComprador",gxold:"OV9cVendedorSNComprador",gxvar:"AV9cVendedorSNComprador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cVendedorSNComprador=Value},v2z:function(Value){gx.O.ZV9cVendedorSNComprador=Value},v2c:function(){gx.fn.setControlValue("vCVENDEDORSNCOMPRADOR",gx.O.AV9cVendedorSNComprador,0)},c2v:function(){gx.O.AV9cVendedorSNComprador=this.val()},val:function(){return gx.fn.getControlValue("vCVENDEDORSNCOMPRADOR")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKVENDEDORSNGERENTE", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCVENDEDORSNGERENTE",gxz:"ZV10cVendedorSNGerente",gxold:"OV10cVendedorSNGerente",gxvar:"AV10cVendedorSNGerente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cVendedorSNGerente=Value},v2z:function(Value){gx.O.ZV10cVendedorSNGerente=Value},v2c:function(){gx.fn.setControlValue("vCVENDEDORSNGERENTE",gx.O.AV10cVendedorSNGerente,0)},c2v:function(){gx.O.AV10cVendedorSNGerente=this.val()},val:function(){return gx.fn.getControlValue("vCVENDEDORSNGERENTE")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKVENDEDORPERCENTUALCOMISSAO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCVENDEDORPERCENTUALCOMISSAO",gxz:"ZV11cVendedorPercentualComissao",gxold:"OV11cVendedorPercentualComissao",gxvar:"AV11cVendedorPercentualComissao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cVendedorPercentualComissao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV11cVendedorPercentualComissao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCVENDEDORPERCENTUALCOMISSAO",gx.O.AV11cVendedorPercentualComissao,2,',')},c2v:function(){gx.O.AV11cVendedorPercentualComissao=this.val()},val:function(){return gx.fn.getDecimalValue("vCVENDEDORPERCENTUALCOMISSAO",'.',',')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GROUP2",grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"VENDEDORID",gxz:"Z1237VendedorId",gxold:"O1237VendedorId",gxvar:"A1237VendedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1237VendedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1237VendedorId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("VENDEDORID",row || gx.fn.currentGridRowImpl(46),gx.O.A1237VendedorId,0)},c2v:function(){gx.O.A1237VendedorId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("VENDEDORID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"VENDEDORNOME",gxz:"Z1148VendedorNome",gxold:"O1148VendedorNome",gxvar:"A1148VendedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1148VendedorNome=Value},v2z:function(Value){gx.O.Z1148VendedorNome=Value},v2c:function(row){gx.fn.setGridControlValue("VENDEDORNOME",row || gx.fn.currentGridRowImpl(46),gx.O.A1148VendedorNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1148VendedorNome=this.val()},val:function(row){return gx.fn.getGridControlValue("VENDEDORNOME",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"VENDEDORSNVENDEDOR",gxz:"Z1223VendedorSNVendedor",gxold:"O1223VendedorSNVendedor",gxvar:"A1223VendedorSNVendedor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1223VendedorSNVendedor=Value},v2z:function(Value){gx.O.Z1223VendedorSNVendedor=Value},v2c:function(row){gx.fn.setGridControlValue("VENDEDORSNVENDEDOR",row || gx.fn.currentGridRowImpl(46),gx.O.A1223VendedorSNVendedor,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1223VendedorSNVendedor=this.val()},val:function(row){return gx.fn.getGridControlValue("VENDEDORSNVENDEDOR",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"VENDEDORSNCOMPRADOR",gxz:"Z1127VendedorSNComprador",gxold:"O1127VendedorSNComprador",gxvar:"A1127VendedorSNComprador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1127VendedorSNComprador=Value},v2z:function(Value){gx.O.Z1127VendedorSNComprador=Value},v2c:function(row){gx.fn.setGridControlValue("VENDEDORSNCOMPRADOR",row || gx.fn.currentGridRowImpl(46),gx.O.A1127VendedorSNComprador,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1127VendedorSNComprador=this.val()},val:function(row){return gx.fn.getGridControlValue("VENDEDORSNCOMPRADOR",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"VENDEDORSNGERENTE",gxz:"Z1182VendedorSNGerente",gxold:"O1182VendedorSNGerente",gxvar:"A1182VendedorSNGerente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1182VendedorSNGerente=Value},v2z:function(Value){gx.O.Z1182VendedorSNGerente=Value},v2c:function(row){gx.fn.setGridControlValue("VENDEDORSNGERENTE",row || gx.fn.currentGridRowImpl(46),gx.O.A1182VendedorSNGerente,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1182VendedorSNGerente=this.val()},val:function(row){return gx.fn.getGridControlValue("VENDEDORSNGERENTE",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"VENDEDORPERCENTUALCOMISSAO",gxz:"Z1138VendedorPercentualComissao",gxold:"O1138VendedorPercentualComissao",gxvar:"A1138VendedorPercentualComissao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1138VendedorPercentualComissao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z1138VendedorPercentualComissao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("VENDEDORPERCENTUALCOMISSAO",row || gx.fn.currentGridRowImpl(46),gx.O.A1138VendedorPercentualComissao,2,',')},c2v:function(){gx.O.A1138VendedorPercentualComissao=this.val()},val:function(row){return gx.fn.getGridDecimalValue("VENDEDORPERCENTUALCOMISSAO",row || gx.fn.currentGridRowImpl(46),'.',',')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOID",gxz:"Z75UsuarioId",gxold:"O75UsuarioId",gxvar:"A75UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A75UsuarioId=Value},v2z:function(Value){gx.O.Z75UsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIOID",row || gx.fn.currentGridRowImpl(46),gx.O.A75UsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A75UsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"VENDEDOREMPRESAID",gxz:"Z1229VendedorEmpresaId",gxold:"O1229VendedorEmpresaId",gxvar:"A1229VendedorEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1229VendedorEmpresaId=Value},v2z:function(Value){gx.O.Z1229VendedorEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("VENDEDOREMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A1229VendedorEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1229VendedorEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("VENDEDOREMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TABLE4",grid:0};
   this.AV6cVendedorId = 0 ;
   this.ZV6cVendedorId = 0 ;
   this.OV6cVendedorId = 0 ;
   this.AV7cVendedorNome = "" ;
   this.ZV7cVendedorNome = "" ;
   this.OV7cVendedorNome = "" ;
   this.AV8cVendedorSNVendedor = "" ;
   this.ZV8cVendedorSNVendedor = "" ;
   this.OV8cVendedorSNVendedor = "" ;
   this.AV9cVendedorSNComprador = "" ;
   this.ZV9cVendedorSNComprador = "" ;
   this.OV9cVendedorSNComprador = "" ;
   this.AV10cVendedorSNGerente = "" ;
   this.ZV10cVendedorSNGerente = "" ;
   this.OV10cVendedorSNGerente = "" ;
   this.AV11cVendedorPercentualComissao = 0 ;
   this.ZV11cVendedorPercentualComissao = 0 ;
   this.OV11cVendedorPercentualComissao = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z1237VendedorId = 0 ;
   this.O1237VendedorId = 0 ;
   this.Z1148VendedorNome = "" ;
   this.O1148VendedorNome = "" ;
   this.Z1223VendedorSNVendedor = "" ;
   this.O1223VendedorSNVendedor = "" ;
   this.Z1127VendedorSNComprador = "" ;
   this.O1127VendedorSNComprador = "" ;
   this.Z1182VendedorSNGerente = "" ;
   this.O1182VendedorSNGerente = "" ;
   this.Z1138VendedorPercentualComissao = 0 ;
   this.O1138VendedorPercentualComissao = 0 ;
   this.Z75UsuarioId = "" ;
   this.O75UsuarioId = "" ;
   this.Z1229VendedorEmpresaId = "" ;
   this.O1229VendedorEmpresaId = "" ;
   this.AV6cVendedorId = 0 ;
   this.AV7cVendedorNome = "" ;
   this.AV8cVendedorSNVendedor = "" ;
   this.AV9cVendedorSNComprador = "" ;
   this.AV10cVendedorSNGerente = "" ;
   this.AV11cVendedorPercentualComissao = 0 ;
   this.AV12pVendedorEmpresaId = "" ;
   this.AV13pVendedorId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A1237VendedorId = 0 ;
   this.A1148VendedorNome = "" ;
   this.A1223VendedorSNVendedor = "" ;
   this.A1127VendedorSNComprador = "" ;
   this.A1182VendedorSNGerente = "" ;
   this.A1138VendedorPercentualComissao = 0 ;
   this.A75UsuarioId = "" ;
   this.A1229VendedorEmpresaId = "" ;
   this.Events = {"e131l12_client": ["ENTER", true] ,"e141l11_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cVendedorId',fld:'vCVENDEDORID'},{av:'AV7cVendedorNome',fld:'vCVENDEDORNOME'},{av:'AV8cVendedorSNVendedor',fld:'vCVENDEDORSNVENDEDOR'},{av:'AV9cVendedorSNComprador',fld:'vCVENDEDORSNCOMPRADOR'},{av:'AV10cVendedorSNGerente',fld:'vCVENDEDORSNGERENTE'},{av:'AV11cVendedorPercentualComissao',fld:'vCVENDEDORPERCENTUALCOMISSAO'},{av:'AV12pVendedorEmpresaId',fld:'vPVENDEDOREMPRESAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A1237VendedorId',fld:'VENDEDORID'}],[{av:'AV13pVendedorId',fld:'vPVENDEDORID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cVendedorId',fld:'vCVENDEDORID'},{av:'AV7cVendedorNome',fld:'vCVENDEDORNOME'},{av:'AV8cVendedorSNVendedor',fld:'vCVENDEDORSNVENDEDOR'},{av:'AV9cVendedorSNComprador',fld:'vCVENDEDORSNCOMPRADOR'},{av:'AV10cVendedorSNGerente',fld:'vCVENDEDORSNGERENTE'},{av:'AV11cVendedorPercentualComissao',fld:'vCVENDEDORPERCENTUALCOMISSAO'},{av:'AV12pVendedorEmpresaId',fld:'vPVENDEDOREMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cVendedorId',fld:'vCVENDEDORID'},{av:'AV7cVendedorNome',fld:'vCVENDEDORNOME'},{av:'AV8cVendedorSNVendedor',fld:'vCVENDEDORSNVENDEDOR'},{av:'AV9cVendedorSNComprador',fld:'vCVENDEDORSNCOMPRADOR'},{av:'AV10cVendedorSNGerente',fld:'vCVENDEDORSNGERENTE'},{av:'AV11cVendedorPercentualComissao',fld:'vCVENDEDORPERCENTUALCOMISSAO'},{av:'AV12pVendedorEmpresaId',fld:'vPVENDEDOREMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cVendedorId',fld:'vCVENDEDORID'},{av:'AV7cVendedorNome',fld:'vCVENDEDORNOME'},{av:'AV8cVendedorSNVendedor',fld:'vCVENDEDORSNVENDEDOR'},{av:'AV9cVendedorSNComprador',fld:'vCVENDEDORSNCOMPRADOR'},{av:'AV10cVendedorSNGerente',fld:'vCVENDEDORSNGERENTE'},{av:'AV11cVendedorPercentualComissao',fld:'vCVENDEDORPERCENTUALCOMISSAO'},{av:'AV12pVendedorEmpresaId',fld:'vPVENDEDOREMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cVendedorId',fld:'vCVENDEDORID'},{av:'AV7cVendedorNome',fld:'vCVENDEDORNOME'},{av:'AV8cVendedorSNVendedor',fld:'vCVENDEDORSNVENDEDOR'},{av:'AV9cVendedorSNComprador',fld:'vCVENDEDORSNCOMPRADOR'},{av:'AV10cVendedorSNGerente',fld:'vCVENDEDORSNGERENTE'},{av:'AV11cVendedorPercentualComissao',fld:'vCVENDEDORPERCENTUALCOMISSAO'},{av:'AV12pVendedorEmpresaId',fld:'vPVENDEDOREMPRESAID',hsh:true}],[]];
   this.setVCMap("AV12pVendedorEmpresaId", "vPVENDEDOREMPRESAID", 0, "char");
   this.setVCMap("AV13pVendedorId", "vPVENDEDORID", 0, "int");
   this.setVCMap("AV12pVendedorEmpresaId", "vPVENDEDOREMPRESAID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar({rfrVar:"AV12pVendedorEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0451());