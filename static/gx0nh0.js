/**@preserve  GeneXus Java 10_3_12-110051 on February 13, 2020 20:21:18.53
*/
gx.evt.autoSkip=!1;gx.define("gx0nh0",!1,function(){var n,t;this.ServerClass="gx0nh0";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV13pPedidoCPCEmpresaId=gx.fn.getControlValue("vPPEDIDOCPCEMPRESAID");this.AV14pPedidoCPCAno=gx.fn.getIntegerValue("vPPEDIDOCPCANO",".");this.AV15pPedidoCPCNumero=gx.fn.getIntegerValue("vPPEDIDOCPCNUMERO",".");this.AV16pPedidoCPCProdutoProdEmpresaId=gx.fn.getControlValue("vPPEDIDOCPCPRODUTOPRODEMPRESAID");this.AV17pPedidoCPCProdutoProdId=gx.fn.getIntegerValue("vPPEDIDOCPCPRODUTOPRODID",".")};this.e132f12_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e142f11_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,60];this.GXLastCtrlId=60;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0nh0",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.Grid1Container;t.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");t.addSingleLineEdit(11450,53,"PEDIDOCPCEMPRESAID","Pedido CPCEmpresa Id","","PedidoCPCEmpresaId","char",0,"px",10,10,"left",null,[],11450,"PedidoCPCEmpresaId",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(11339,54,"PEDIDOCPCANO","Pedido CPCAno","","PedidoCPCAno","int",0,"px",5,5,"right",null,[],11339,"PedidoCPCAno",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(11340,55,"PEDIDOCPCNUMERO","Pedido CPCNumero","","PedidoCPCNumero","int",0,"px",10,10,"right",null,[],11340,"PedidoCPCNumero",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(11452,56,"PEDIDOCPCPRODUTOPRODEMPRESAID","Empresa Id","","PedidoCPCProdutoProdEmpresaId","char",0,"px",10,10,"left",null,[],11452,"PedidoCPCProdutoProdEmpresaId",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(11453,57,"PEDIDOCPCPRODUTOPRODID","Prod Id","","PedidoCPCProdutoProdId","int",0,"px",10,10,"right",null,[],11453,"PedidoCPCProdutoProdId",!0,0,!1,!1,"Attribute",1,"");this.setGrid(t);n[2]={fld:"TABLE1",grid:0};n[8]={fld:"GROUP1",grid:0};n[9]={fld:"TABLE2",grid:0};n[12]={fld:"TEXTBLOCKPEDIDOCPCEMPRESAID",format:0,grid:0};n[14]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCPCEMPRESAID",gxz:"ZV6cPedidoCPCEmpresaId",gxold:"OV6cPedidoCPCEmpresaId",gxvar:"AV6cPedidoCPCEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6cPedidoCPCEmpresaId=n},v2z:function(n){gx.O.ZV6cPedidoCPCEmpresaId=n},v2c:function(){gx.fn.setControlValue("vCPEDIDOCPCEMPRESAID",gx.O.AV6cPedidoCPCEmpresaId,0)},c2v:function(){gx.O.AV6cPedidoCPCEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCPEDIDOCPCEMPRESAID")},nac:gx.falseFn};n[17]={fld:"TEXTBLOCKPEDIDOCPCANO",format:0,grid:0};n[19]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"Z9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCPCANO",gxz:"ZV7cPedidoCPCAno",gxold:"OV7cPedidoCPCAno",gxvar:"AV7cPedidoCPCAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV7cPedidoCPCAno=gx.num.intval(n)},v2z:function(n){gx.O.ZV7cPedidoCPCAno=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCPEDIDOCPCANO",gx.O.AV7cPedidoCPCAno,0)},c2v:function(){gx.O.AV7cPedidoCPCAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPEDIDOCPCANO",".")},nac:gx.falseFn};n[22]={fld:"TEXTBLOCKPEDIDOCPCNUMERO",format:0,grid:0};n[24]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZ999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCPCNUMERO",gxz:"ZV8cPedidoCPCNumero",gxold:"OV8cPedidoCPCNumero",gxvar:"AV8cPedidoCPCNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV8cPedidoCPCNumero=gx.num.intval(n)},v2z:function(n){gx.O.ZV8cPedidoCPCNumero=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCPEDIDOCPCNUMERO",gx.O.AV8cPedidoCPCNumero,0)},c2v:function(){gx.O.AV8cPedidoCPCNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPEDIDOCPCNUMERO",".")},nac:gx.falseFn};n[27]={fld:"TEXTBLOCKPEDIDOCPCPRODUTOPRODEMPRESAID",format:0,grid:0};n[29]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCPCPRODUTOPRODEMPRESAID",gxz:"ZV9cPedidoCPCProdutoProdEmpresaId",gxold:"OV9cPedidoCPCProdutoProdEmpresaId",gxvar:"AV9cPedidoCPCProdutoProdEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV9cPedidoCPCProdutoProdEmpresaId=n},v2z:function(n){gx.O.ZV9cPedidoCPCProdutoProdEmpresaId=n},v2c:function(){gx.fn.setControlValue("vCPEDIDOCPCPRODUTOPRODEMPRESAID",gx.O.AV9cPedidoCPCProdutoProdEmpresaId,0)},c2v:function(){gx.O.AV9cPedidoCPCProdutoProdEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCPEDIDOCPCPRODUTOPRODEMPRESAID")},nac:gx.falseFn};n[32]={fld:"TEXTBLOCKPEDIDOCPCPRODUTOPRODID",format:0,grid:0};n[34]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCPCPRODUTOPRODID",gxz:"ZV10cPedidoCPCProdutoProdId",gxold:"OV10cPedidoCPCProdutoProdId",gxvar:"AV10cPedidoCPCProdutoProdId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV10cPedidoCPCProdutoProdId=gx.num.intval(n)},v2z:function(n){gx.O.ZV10cPedidoCPCProdutoProdId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCPEDIDOCPCPRODUTOPRODID",gx.O.AV10cPedidoCPCProdutoProdId,0)},c2v:function(){gx.O.AV10cPedidoCPCProdutoProdId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPEDIDOCPCPRODUTOPRODID",".")},nac:gx.falseFn};n[37]={fld:"TEXTBLOCKPEDIDOCPCPRODUTOQUANTIDADE",format:0,grid:0};n[39]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCPCPRODUTOQUANTIDADE",gxz:"ZV12cPedidoCPCProdutoQuantidade",gxold:"OV12cPedidoCPCProdutoQuantidade",gxvar:"AV12cPedidoCPCProdutoQuantidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV12cPedidoCPCProdutoQuantidade=gx.num.intval(n)},v2z:function(n){gx.O.ZV12cPedidoCPCProdutoQuantidade=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCPEDIDOCPCPRODUTOQUANTIDADE",gx.O.AV12cPedidoCPCProdutoQuantidade,0)},c2v:function(){gx.O.AV12cPedidoCPCProdutoQuantidade=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPEDIDOCPCPRODUTOQUANTIDADE",".")},nac:gx.falseFn};n[42]={fld:"TEXTBLOCKPEDIDOCPCPRODUTOQTDECONTABIL",format:0,grid:0};n[44]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCPCPRODUTOQTDECONTABIL",gxz:"ZV18cPedidoCPCProdutoQtdeContabil",gxold:"OV18cPedidoCPCProdutoQtdeContabil",gxvar:"AV18cPedidoCPCProdutoQtdeContabil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV18cPedidoCPCProdutoQtdeContabil=gx.num.intval(n)},v2z:function(n){gx.O.ZV18cPedidoCPCProdutoQtdeContabil=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCPEDIDOCPCPRODUTOQTDECONTABIL",gx.O.AV18cPedidoCPCProdutoQtdeContabil,0)},c2v:function(){gx.O.AV18cPedidoCPCProdutoQtdeContabil=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPEDIDOCPCPRODUTOQTDECONTABIL",".")},nac:gx.falseFn};n[47]={fld:"GROUP2",grid:0};n[48]={fld:"TABLE3",grid:0};n[52]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV5LinkSelection=n},v2z:function(n){gx.O.ZV5LinkSelection=n},v2c:function(n){gx.fn.setGridMultimediaValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV21Linkselection_GXI)},c2v:function(){gx.O.AV21Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(n){return gx.fn.getGridControlValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(51))},val_GXI:function(n){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",n||gx.fn.currentGridRowImpl(51))},gxvar_GXI:"AV21Linkselection_GXI",nac:gx.falseFn};n[53]={lvl:2,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCPCEMPRESAID",gxz:"Z11450PedidoCPCEmpresaId",gxold:"O11450PedidoCPCEmpresaId",gxvar:"A11450PedidoCPCEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A11450PedidoCPCEmpresaId=n},v2z:function(n){gx.O.Z11450PedidoCPCEmpresaId=n},v2c:function(n){gx.fn.setGridControlValue("PEDIDOCPCEMPRESAID",n||gx.fn.currentGridRowImpl(51),gx.O.A11450PedidoCPCEmpresaId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A11450PedidoCPCEmpresaId=this.val()},val:function(n){return gx.fn.getGridControlValue("PEDIDOCPCEMPRESAID",n||gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};n[54]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"Z9999",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCPCANO",gxz:"Z11339PedidoCPCAno",gxold:"O11339PedidoCPCAno",gxvar:"A11339PedidoCPCAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A11339PedidoCPCAno=gx.num.intval(n)},v2z:function(n){gx.O.Z11339PedidoCPCAno=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("PEDIDOCPCANO",n||gx.fn.currentGridRowImpl(51),gx.O.A11339PedidoCPCAno,0)},c2v:function(){gx.O.A11339PedidoCPCAno=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("PEDIDOCPCANO",n||gx.fn.currentGridRowImpl(51),".")},nac:gx.falseFn};n[55]={lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZ999999",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCPCNUMERO",gxz:"Z11340PedidoCPCNumero",gxold:"O11340PedidoCPCNumero",gxvar:"A11340PedidoCPCNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A11340PedidoCPCNumero=gx.num.intval(n)},v2z:function(n){gx.O.Z11340PedidoCPCNumero=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("PEDIDOCPCNUMERO",n||gx.fn.currentGridRowImpl(51),gx.O.A11340PedidoCPCNumero,0)},c2v:function(){gx.O.A11340PedidoCPCNumero=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("PEDIDOCPCNUMERO",n||gx.fn.currentGridRowImpl(51),".")},nac:gx.falseFn};n[56]={lvl:2,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCPCPRODUTOPRODEMPRESAID",gxz:"Z11452PedidoCPCProdutoProdEmpresaId",gxold:"O11452PedidoCPCProdutoProdEmpresaId",gxvar:"A11452PedidoCPCProdutoProdEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A11452PedidoCPCProdutoProdEmpresaId=n},v2z:function(n){gx.O.Z11452PedidoCPCProdutoProdEmpresaId=n},v2c:function(n){gx.fn.setGridControlValue("PEDIDOCPCPRODUTOPRODEMPRESAID",n||gx.fn.currentGridRowImpl(51),gx.O.A11452PedidoCPCProdutoProdEmpresaId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A11452PedidoCPCProdutoProdEmpresaId=this.val()},val:function(n){return gx.fn.getGridControlValue("PEDIDOCPCPRODUTOPRODEMPRESAID",n||gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};n[57]={lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCPCPRODUTOPRODID",gxz:"Z11453PedidoCPCProdutoProdId",gxold:"O11453PedidoCPCProdutoProdId",gxvar:"A11453PedidoCPCProdutoProdId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A11453PedidoCPCProdutoProdId=gx.num.intval(n)},v2z:function(n){gx.O.Z11453PedidoCPCProdutoProdId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("PEDIDOCPCPRODUTOPRODID",n||gx.fn.currentGridRowImpl(51),gx.O.A11453PedidoCPCProdutoProdId,0)},c2v:function(){gx.O.A11453PedidoCPCProdutoProdId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("PEDIDOCPCPRODUTOPRODID",n||gx.fn.currentGridRowImpl(51),".")},nac:gx.falseFn};n[60]={fld:"TABLE4",grid:0};this.AV6cPedidoCPCEmpresaId="";this.ZV6cPedidoCPCEmpresaId="";this.OV6cPedidoCPCEmpresaId="";this.AV7cPedidoCPCAno=0;this.ZV7cPedidoCPCAno=0;this.OV7cPedidoCPCAno=0;this.AV8cPedidoCPCNumero=0;this.ZV8cPedidoCPCNumero=0;this.OV8cPedidoCPCNumero=0;this.AV9cPedidoCPCProdutoProdEmpresaId="";this.ZV9cPedidoCPCProdutoProdEmpresaId="";this.OV9cPedidoCPCProdutoProdEmpresaId="";this.AV10cPedidoCPCProdutoProdId=0;this.ZV10cPedidoCPCProdutoProdId=0;this.OV10cPedidoCPCProdutoProdId=0;this.AV12cPedidoCPCProdutoQuantidade=0;this.ZV12cPedidoCPCProdutoQuantidade=0;this.OV12cPedidoCPCProdutoQuantidade=0;this.AV18cPedidoCPCProdutoQtdeContabil=0;this.ZV18cPedidoCPCProdutoQtdeContabil=0;this.OV18cPedidoCPCProdutoQtdeContabil=0;this.ZV5LinkSelection="";this.OV5LinkSelection="";this.Z11450PedidoCPCEmpresaId="";this.O11450PedidoCPCEmpresaId="";this.Z11339PedidoCPCAno=0;this.O11339PedidoCPCAno=0;this.Z11340PedidoCPCNumero=0;this.O11340PedidoCPCNumero=0;this.Z11452PedidoCPCProdutoProdEmpresaId="";this.O11452PedidoCPCProdutoProdEmpresaId="";this.Z11453PedidoCPCProdutoProdId=0;this.O11453PedidoCPCProdutoProdId=0;this.AV6cPedidoCPCEmpresaId="";this.AV7cPedidoCPCAno=0;this.AV8cPedidoCPCNumero=0;this.AV9cPedidoCPCProdutoProdEmpresaId="";this.AV10cPedidoCPCProdutoProdId=0;this.AV12cPedidoCPCProdutoQuantidade=0;this.AV18cPedidoCPCProdutoQtdeContabil=0;this.AV13pPedidoCPCEmpresaId="";this.AV14pPedidoCPCAno=0;this.AV15pPedidoCPCNumero=0;this.AV16pPedidoCPCProdutoProdEmpresaId="";this.AV17pPedidoCPCProdutoProdId=0;this.A11474PedidoCPCProdutoQtdeContabil=0;this.A11475PedidoCPCProdutoQuantidade=0;this.AV5LinkSelection="";this.A11450PedidoCPCEmpresaId="";this.A11339PedidoCPCAno=0;this.A11340PedidoCPCNumero=0;this.A11452PedidoCPCProdutoProdEmpresaId="";this.A11453PedidoCPCProdutoProdId=0;this.Events={e132f12_client:["ENTER",!0],e142f11_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cPedidoCPCEmpresaId",fld:"vCPEDIDOCPCEMPRESAID"},{av:"AV7cPedidoCPCAno",fld:"vCPEDIDOCPCANO"},{av:"AV8cPedidoCPCNumero",fld:"vCPEDIDOCPCNUMERO"},{av:"AV9cPedidoCPCProdutoProdEmpresaId",fld:"vCPEDIDOCPCPRODUTOPRODEMPRESAID"},{av:"AV10cPedidoCPCProdutoProdId",fld:"vCPEDIDOCPCPRODUTOPRODID"},{av:"AV12cPedidoCPCProdutoQuantidade",fld:"vCPEDIDOCPCPRODUTOQUANTIDADE"},{av:"AV18cPedidoCPCProdutoQtdeContabil",fld:"vCPEDIDOCPCPRODUTOQTDECONTABIL"}],[]];this.EvtParms.LOAD=[[],[{av:"AV5LinkSelection",fld:"vLINKSELECTION"}]];this.EvtParms.ENTER=[[{av:"A11450PedidoCPCEmpresaId",fld:"PEDIDOCPCEMPRESAID"},{av:"A11339PedidoCPCAno",fld:"PEDIDOCPCANO"},{av:"A11340PedidoCPCNumero",fld:"PEDIDOCPCNUMERO"},{av:"A11452PedidoCPCProdutoProdEmpresaId",fld:"PEDIDOCPCPRODUTOPRODEMPRESAID"},{av:"A11453PedidoCPCProdutoProdId",fld:"PEDIDOCPCPRODUTOPRODID"}],[{av:"AV13pPedidoCPCEmpresaId",fld:"vPPEDIDOCPCEMPRESAID"},{av:"AV14pPedidoCPCAno",fld:"vPPEDIDOCPCANO"},{av:"AV15pPedidoCPCNumero",fld:"vPPEDIDOCPCNUMERO"},{av:"AV16pPedidoCPCProdutoProdEmpresaId",fld:"vPPEDIDOCPCPRODUTOPRODEMPRESAID"},{av:"AV17pPedidoCPCProdutoProdId",fld:"vPPEDIDOCPCPRODUTOPRODID"}]];this.EvtParms.GRID1_FIRSTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cPedidoCPCEmpresaId",fld:"vCPEDIDOCPCEMPRESAID"},{av:"AV7cPedidoCPCAno",fld:"vCPEDIDOCPCANO"},{av:"AV8cPedidoCPCNumero",fld:"vCPEDIDOCPCNUMERO"},{av:"AV9cPedidoCPCProdutoProdEmpresaId",fld:"vCPEDIDOCPCPRODUTOPRODEMPRESAID"},{av:"AV10cPedidoCPCProdutoProdId",fld:"vCPEDIDOCPCPRODUTOPRODID"},{av:"AV12cPedidoCPCProdutoQuantidade",fld:"vCPEDIDOCPCPRODUTOQUANTIDADE"},{av:"AV18cPedidoCPCProdutoQtdeContabil",fld:"vCPEDIDOCPCPRODUTOQTDECONTABIL"}],[]];this.EvtParms.GRID1_PREVPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cPedidoCPCEmpresaId",fld:"vCPEDIDOCPCEMPRESAID"},{av:"AV7cPedidoCPCAno",fld:"vCPEDIDOCPCANO"},{av:"AV8cPedidoCPCNumero",fld:"vCPEDIDOCPCNUMERO"},{av:"AV9cPedidoCPCProdutoProdEmpresaId",fld:"vCPEDIDOCPCPRODUTOPRODEMPRESAID"},{av:"AV10cPedidoCPCProdutoProdId",fld:"vCPEDIDOCPCPRODUTOPRODID"},{av:"AV12cPedidoCPCProdutoQuantidade",fld:"vCPEDIDOCPCPRODUTOQUANTIDADE"},{av:"AV18cPedidoCPCProdutoQtdeContabil",fld:"vCPEDIDOCPCPRODUTOQTDECONTABIL"}],[]];this.EvtParms.GRID1_NEXTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cPedidoCPCEmpresaId",fld:"vCPEDIDOCPCEMPRESAID"},{av:"AV7cPedidoCPCAno",fld:"vCPEDIDOCPCANO"},{av:"AV8cPedidoCPCNumero",fld:"vCPEDIDOCPCNUMERO"},{av:"AV9cPedidoCPCProdutoProdEmpresaId",fld:"vCPEDIDOCPCPRODUTOPRODEMPRESAID"},{av:"AV10cPedidoCPCProdutoProdId",fld:"vCPEDIDOCPCPRODUTOPRODID"},{av:"AV12cPedidoCPCProdutoQuantidade",fld:"vCPEDIDOCPCPRODUTOQUANTIDADE"},{av:"AV18cPedidoCPCProdutoQtdeContabil",fld:"vCPEDIDOCPCPRODUTOQTDECONTABIL"}],[]];this.EvtParms.GRID1_LASTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cPedidoCPCEmpresaId",fld:"vCPEDIDOCPCEMPRESAID"},{av:"AV7cPedidoCPCAno",fld:"vCPEDIDOCPCANO"},{av:"AV8cPedidoCPCNumero",fld:"vCPEDIDOCPCNUMERO"},{av:"AV9cPedidoCPCProdutoProdEmpresaId",fld:"vCPEDIDOCPCPRODUTOPRODEMPRESAID"},{av:"AV10cPedidoCPCProdutoProdId",fld:"vCPEDIDOCPCPRODUTOPRODID"},{av:"AV12cPedidoCPCProdutoQuantidade",fld:"vCPEDIDOCPCPRODUTOQUANTIDADE"},{av:"AV18cPedidoCPCProdutoQtdeContabil",fld:"vCPEDIDOCPCPRODUTOQTDECONTABIL"}],[]];this.setVCMap("AV13pPedidoCPCEmpresaId","vPPEDIDOCPCEMPRESAID",0,"char");this.setVCMap("AV14pPedidoCPCAno","vPPEDIDOCPCANO",0,"int");this.setVCMap("AV15pPedidoCPCNumero","vPPEDIDOCPCNUMERO",0,"int");this.setVCMap("AV16pPedidoCPCProdutoProdEmpresaId","vPPEDIDOCPCPRODUTOPRODEMPRESAID",0,"char");this.setVCMap("AV17pPedidoCPCProdutoProdId","vPPEDIDOCPCPRODUTOPRODID",0,"int");t.addRefreshingVar(this.GXValidFnc[14]);t.addRefreshingVar(this.GXValidFnc[19]);t.addRefreshingVar(this.GXValidFnc[24]);t.addRefreshingVar(this.GXValidFnc[29]);t.addRefreshingVar(this.GXValidFnc[34]);t.addRefreshingVar(this.GXValidFnc[39]);t.addRefreshingVar(this.GXValidFnc[44]);this.InitStandaloneVars()});gx.setParentObj(new gx0nh0)