/**@preserve  GeneXus Java 10_3_12-110051 on January 4, 2021 10:47:26.8
*
gx.evt.autoSkip=!1;gx.define("gx0oh2",!1,function(){var n,t;this.ServerClass="gx0oh2";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV11pPedidoClienteEmpresaId=gx.fn.getControlValue("vPPEDIDOCLIENTEEMPRESAID");this.AV12pPedidoClienteNumero=gx.fn.getIntegerValue("vPPEDIDOCLIENTENUMERO",".");this.AV13pPedidoClienteItemSeq=gx.fn.getIntegerValue("vPPEDIDOCLIENTEITEMSEQ",".")};this.e132i32_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e142i31_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,38,42,43,44,45,46,49];this.GXLastCtrlId=49;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0oh2",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.Grid1Container;t.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image","");t.addSingleLineEdit(11856,43,"PEDIDOCLIENTEITEMSEQ","Item Seq","","PedidoClienteItemSeq","int",0,"px",6,6,"right",null,[],11856,"PedidoClienteItemSeq",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(11862,44,"PEDIDOCLIENTEITEMDESCRICAO","Item Descricao","Selecionar","PedidoClienteItemDescricao","svchar",0,"px",100,80,"left",null,[],11862,"PedidoClienteItemDescricao",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(11850,45,"PEDIDOCLIENTEEMPRESAID","Pedido Cliente Empresa Id","","PedidoClienteEmpresaId","char",0,"px",10,10,"left",null,[],11850,"PedidoClienteEmpresaId",!1,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(11851,46,"PEDIDOCLIENTENUMERO","Pedido Cliente Numero","","PedidoClienteNumero","int",0,"px",10,10,"right",null,[],11851,"PedidoClienteNumero",!1,0,!1,!1,"Attribute",1,"");this.setGrid(t);n[2]={fld:"TABLE1",grid:0};n[8]={fld:"GROUP1",grid:0};n[9]={fld:"TABLE2",grid:0};n[12]={fld:"TEXTBLOCKPEDIDOCLIENTEITEMSEQ",format:0,grid:0};n[14]={lvl:0,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCLIENTEITEMSEQ",gxz:"ZV6cPedidoClienteItemSeq",gxold:"OV6cPedidoClienteItemSeq",gxvar:"AV6cPedidoClienteItemSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6cPedidoClienteItemSeq=gx.num.intval(n)},v2z:function(n){gx.O.ZV6cPedidoClienteItemSeq=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCPEDIDOCLIENTEITEMSEQ",gx.O.AV6cPedidoClienteItemSeq,0)},c2v:function(){gx.O.AV6cPedidoClienteItemSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPEDIDOCLIENTEITEMSEQ",".")},nac:gx.falseFn};n[17]={fld:"TEXTBLOCKPEDIDOCLIENTEITEMREFERENCIA",format:0,grid:0};n[19]={lvl:0,type:"svchar",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCLIENTEITEMREFERENCIA",gxz:"ZV7cPedidoClienteItemReferencia",gxold:"OV7cPedidoClienteItemReferencia",gxvar:"AV7cPedidoClienteItemReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV7cPedidoClienteItemReferencia=n},v2z:function(n){gx.O.ZV7cPedidoClienteItemReferencia=n},v2c:function(){gx.fn.setControlValue("vCPEDIDOCLIENTEITEMREFERENCIA",gx.O.AV7cPedidoClienteItemReferencia,0)},c2v:function(){gx.O.AV7cPedidoClienteItemReferencia=this.val()},val:function(){return gx.fn.getControlValue("vCPEDIDOCLIENTEITEMREFERENCIA")},nac:gx.falseFn};n[22]={fld:"TEXTBLOCKPEDIDOCLIENTEITEMMARCA",format:0,grid:0};n[24]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCLIENTEITEMMARCA",gxz:"ZV8cPedidoClienteItemMarca",gxold:"OV8cPedidoClienteItemMarca",gxvar:"AV8cPedidoClienteItemMarca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV8cPedidoClienteItemMarca=n},v2z:function(n){gx.O.ZV8cPedidoClienteItemMarca=n},v2c:function(){gx.fn.setControlValue("vCPEDIDOCLIENTEITEMMARCA",gx.O.AV8cPedidoClienteItemMarca,0)},c2v:function(){gx.O.AV8cPedidoClienteItemMarca=this.val()},val:function(){return gx.fn.getControlValue("vCPEDIDOCLIENTEITEMMARCA")},nac:gx.falseFn};n[27]={fld:"TEXTBLOCKPEDIDOCLIENTEITEMQTDEPEDIDA",format:0,grid:0};n[29]={lvl:0,type:"decimal",len:18,dec:4,sign:!0,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCLIENTEITEMQTDEPEDIDA",gxz:"ZV9cPedidoClienteItemQtdePedida",gxold:"OV9cPedidoClienteItemQtdePedida",gxvar:"AV9cPedidoClienteItemQtdePedida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV9cPedidoClienteItemQtdePedida=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV9cPedidoClienteItemQtdePedida=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vCPEDIDOCLIENTEITEMQTDEPEDIDA",gx.O.AV9cPedidoClienteItemQtdePedida,4,",")},c2v:function(){gx.O.AV9cPedidoClienteItemQtdePedida=this.val()},val:function(){return gx.fn.getDecimalValue("vCPEDIDOCLIENTEITEMQTDEPEDIDA",".",",")},nac:gx.falseFn};n[32]={fld:"TEXTBLOCKPEDIDOCLIENTEITEMPRECOCSV",format:0,grid:0};n[34]={lvl:0,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCLIENTEITEMPRECOCSV",gxz:"ZV10cPedidoClienteItemPrecoCSV",gxold:"OV10cPedidoClienteItemPrecoCSV",gxvar:"AV10cPedidoClienteItemPrecoCSV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV10cPedidoClienteItemPrecoCSV=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV10cPedidoClienteItemPrecoCSV=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vCPEDIDOCLIENTEITEMPRECOCSV",gx.O.AV10cPedidoClienteItemPrecoCSV,2,",")},c2v:function(){gx.O.AV10cPedidoClienteItemPrecoCSV=this.val()},val:function(){return gx.fn.getDecimalValue("vCPEDIDOCLIENTEITEMPRECOCSV",".",",")},nac:gx.falseFn};n[37]={fld:"GROUP2",grid:0};n[38]={fld:"TABLE3",grid:0};n[42]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV5LinkSelection=n},v2z:function(n){gx.O.ZV5LinkSelection=n},v2c:function(n){gx.fn.setGridMultimediaValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(n){return gx.fn.getGridControlValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(41))},val_GXI:function(n){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",n||gx.fn.currentGridRowImpl(41))},gxvar_GXI:"AV16Linkselection_GXI",nac:gx.falseFn};n[43]={lvl:2,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCLIENTEITEMSEQ",gxz:"Z11856PedidoClienteItemSeq",gxold:"O11856PedidoClienteItemSeq",gxvar:"A11856PedidoClienteItemSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A11856PedidoClienteItemSeq=gx.num.intval(n)},v2z:function(n){gx.O.Z11856PedidoClienteItemSeq=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("PEDIDOCLIENTEITEMSEQ",n||gx.fn.currentGridRowImpl(41),gx.O.A11856PedidoClienteItemSeq,0)},c2v:function(){gx.O.A11856PedidoClienteItemSeq=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("PEDIDOCLIENTEITEMSEQ",n||gx.fn.currentGridRowImpl(41),".")},nac:gx.falseFn};n[44]={lvl:2,type:"svchar",len:100,dec:0,sign:!1,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCLIENTEITEMDESCRICAO",gxz:"Z11862PedidoClienteItemDescricao",gxold:"O11862PedidoClienteItemDescricao",gxvar:"A11862PedidoClienteItemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A11862PedidoClienteItemDescricao=n},v2z:function(n){gx.O.Z11862PedidoClienteItemDescricao=n},v2c:function(n){gx.fn.setGridControlValue("PEDIDOCLIENTEITEMDESCRICAO",n||gx.fn.currentGridRowImpl(41),gx.O.A11862PedidoClienteItemDescricao,0)},c2v:function(){gx.O.A11862PedidoClienteItemDescricao=this.val()},val:function(n){return gx.fn.getGridControlValue("PEDIDOCLIENTEITEMDESCRICAO",n||gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};n[45]={lvl:2,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCLIENTEEMPRESAID",gxz:"Z11850PedidoClienteEmpresaId",gxold:"O11850PedidoClienteEmpresaId",gxvar:"A11850PedidoClienteEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A11850PedidoClienteEmpresaId=n},v2z:function(n){gx.O.Z11850PedidoClienteEmpresaId=n},v2c:function(n){gx.fn.setGridControlValue("PEDIDOCLIENTEEMPRESAID",n||gx.fn.currentGridRowImpl(41),gx.O.A11850PedidoClienteEmpresaId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A11850PedidoClienteEmpresaId=this.val()},val:function(n){return gx.fn.getGridControlValue("PEDIDOCLIENTEEMPRESAID",n||gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};n[46]={lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCLIENTENUMERO",gxz:"Z11851PedidoClienteNumero",gxold:"O11851PedidoClienteNumero",gxvar:"A11851PedidoClienteNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A11851PedidoClienteNumero=gx.num.intval(n)},v2z:function(n){gx.O.Z11851PedidoClienteNumero=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("PEDIDOCLIENTENUMERO",n||gx.fn.currentGridRowImpl(41),gx.O.A11851PedidoClienteNumero,0)},c2v:function(){gx.O.A11851PedidoClienteNumero=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("PEDIDOCLIENTENUMERO",n||gx.fn.currentGridRowImpl(41),".")},nac:gx.falseFn};n[49]={fld:"TABLE4",grid:0};this.AV6cPedidoClienteItemSeq=0;this.ZV6cPedidoClienteItemSeq=0;this.OV6cPedidoClienteItemSeq=0;this.AV7cPedidoClienteItemReferencia="";this.ZV7cPedidoClienteItemReferencia="";this.OV7cPedidoClienteItemReferencia="";this.AV8cPedidoClienteItemMarca="";this.ZV8cPedidoClienteItemMarca="";this.OV8cPedidoClienteItemMarca="";this.AV9cPedidoClienteItemQtdePedida=0;this.ZV9cPedidoClienteItemQtdePedida=0;this.OV9cPedidoClienteItemQtdePedida=0;this.AV10cPedidoClienteItemPrecoCSV=0;this.ZV10cPedidoClienteItemPrecoCSV=0;this.OV10cPedidoClienteItemPrecoCSV=0;this.ZV5LinkSelection="";this.OV5LinkSelection="";this.Z11856PedidoClienteItemSeq=0;this.O11856PedidoClienteItemSeq=0;this.Z11862PedidoClienteItemDescricao="";this.O11862PedidoClienteItemDescricao="";this.Z11850PedidoClienteEmpresaId="";this.O11850PedidoClienteEmpresaId="";this.Z11851PedidoClienteNumero=0;this.O11851PedidoClienteNumero=0;this.AV6cPedidoClienteItemSeq=0;this.AV7cPedidoClienteItemReferencia="";this.AV8cPedidoClienteItemMarca="";this.AV9cPedidoClienteItemQtdePedida=0;this.AV10cPedidoClienteItemPrecoCSV=0;this.AV11pPedidoClienteEmpresaId="";this.AV12pPedidoClienteNumero=0;this.AV13pPedidoClienteItemSeq=0;this.A11866PedidoClienteItemPrecoCSV=0;this.A11865PedidoClienteItemQtdePedida=0;this.A11864PedidoClienteItemMarca="";this.A11863PedidoClienteItemReferencia="";this.AV5LinkSelection="";this.A11856PedidoClienteItemSeq=0;this.A11862PedidoClienteItemDescricao="";this.A11850PedidoClienteEmpresaId="";this.A11851PedidoClienteNumero=0;this.Events={e132i32_client:["ENTER",!0],e142i31_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cPedidoClienteItemSeq",fld:"vCPEDIDOCLIENTEITEMSEQ"},{av:"AV7cPedidoClienteItemReferencia",fld:"vCPEDIDOCLIENTEITEMREFERENCIA"},{av:"AV8cPedidoClienteItemMarca",fld:"vCPEDIDOCLIENTEITEMMARCA"},{av:"AV9cPedidoClienteItemQtdePedida",fld:"vCPEDIDOCLIENTEITEMQTDEPEDIDA"},{av:"AV10cPedidoClienteItemPrecoCSV",fld:"vCPEDIDOCLIENTEITEMPRECOCSV"},{av:"AV11pPedidoClienteEmpresaId",fld:"vPPEDIDOCLIENTEEMPRESAID",hsh:!0},{av:"AV12pPedidoClienteNumero",fld:"vPPEDIDOCLIENTENUMERO",hsh:!0}],[]];this.EvtParms.LOAD=[[],[{av:"AV5LinkSelection",fld:"vLINKSELECTION"}]];this.EvtParms.ENTER=[[{av:"A11856PedidoClienteItemSeq",fld:"PEDIDOCLIENTEITEMSEQ"}],[{av:"AV13pPedidoClienteItemSeq",fld:"vPPEDIDOCLIENTEITEMSEQ"}]];this.EvtParms.GRID1_FIRSTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cPedidoClienteItemSeq",fld:"vCPEDIDOCLIENTEITEMSEQ"},{av:"AV7cPedidoClienteItemReferencia",fld:"vCPEDIDOCLIENTEITEMREFERENCIA"},{av:"AV8cPedidoClienteItemMarca",fld:"vCPEDIDOCLIENTEITEMMARCA"},{av:"AV9cPedidoClienteItemQtdePedida",fld:"vCPEDIDOCLIENTEITEMQTDEPEDIDA"},{av:"AV10cPedidoClienteItemPrecoCSV",fld:"vCPEDIDOCLIENTEITEMPRECOCSV"},{av:"AV11pPedidoClienteEmpresaId",fld:"vPPEDIDOCLIENTEEMPRESAID",hsh:!0},{av:"AV12pPedidoClienteNumero",fld:"vPPEDIDOCLIENTENUMERO",hsh:!0}],[]];this.EvtParms.GRID1_PREVPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cPedidoClienteItemSeq",fld:"vCPEDIDOCLIENTEITEMSEQ"},{av:"AV7cPedidoClienteItemReferencia",fld:"vCPEDIDOCLIENTEITEMREFERENCIA"},{av:"AV8cPedidoClienteItemMarca",fld:"vCPEDIDOCLIENTEITEMMARCA"},{av:"AV9cPedidoClienteItemQtdePedida",fld:"vCPEDIDOCLIENTEITEMQTDEPEDIDA"},{av:"AV10cPedidoClienteItemPrecoCSV",fld:"vCPEDIDOCLIENTEITEMPRECOCSV"},{av:"AV11pPedidoClienteEmpresaId",fld:"vPPEDIDOCLIENTEEMPRESAID",hsh:!0},{av:"AV12pPedidoClienteNumero",fld:"vPPEDIDOCLIENTENUMERO",hsh:!0}],[]];this.EvtParms.GRID1_NEXTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cPedidoClienteItemSeq",fld:"vCPEDIDOCLIENTEITEMSEQ"},{av:"AV7cPedidoClienteItemReferencia",fld:"vCPEDIDOCLIENTEITEMREFERENCIA"},{av:"AV8cPedidoClienteItemMarca",fld:"vCPEDIDOCLIENTEITEMMARCA"},{av:"AV9cPedidoClienteItemQtdePedida",fld:"vCPEDIDOCLIENTEITEMQTDEPEDIDA"},{av:"AV10cPedidoClienteItemPrecoCSV",fld:"vCPEDIDOCLIENTEITEMPRECOCSV"},{av:"AV11pPedidoClienteEmpresaId",fld:"vPPEDIDOCLIENTEEMPRESAID",hsh:!0},{av:"AV12pPedidoClienteNumero",fld:"vPPEDIDOCLIENTENUMERO",hsh:!0}],[]];this.EvtParms.GRID1_LASTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cPedidoClienteItemSeq",fld:"vCPEDIDOCLIENTEITEMSEQ"},{av:"AV7cPedidoClienteItemReferencia",fld:"vCPEDIDOCLIENTEITEMREFERENCIA"},{av:"AV8cPedidoClienteItemMarca",fld:"vCPEDIDOCLIENTEITEMMARCA"},{av:"AV9cPedidoClienteItemQtdePedida",fld:"vCPEDIDOCLIENTEITEMQTDEPEDIDA"},{av:"AV10cPedidoClienteItemPrecoCSV",fld:"vCPEDIDOCLIENTEITEMPRECOCSV"},{av:"AV11pPedidoClienteEmpresaId",fld:"vPPEDIDOCLIENTEEMPRESAID",hsh:!0},{av:"AV12pPedidoClienteNumero",fld:"vPPEDIDOCLIENTENUMERO",hsh:!0}],[]];this.setVCMap("AV11pPedidoClienteEmpresaId","vPPEDIDOCLIENTEEMPRESAID",0,"char");this.setVCMap("AV12pPedidoClienteNumero","vPPEDIDOCLIENTENUMERO",0,"int");this.setVCMap("AV13pPedidoClienteItemSeq","vPPEDIDOCLIENTEITEMSEQ",0,"int");this.setVCMap("AV11pPedidoClienteEmpresaId","vPPEDIDOCLIENTEEMPRESAID",0,"char");this.setVCMap("AV12pPedidoClienteNumero","vPPEDIDOCLIENTENUMERO",0,"int");t.addRefreshingVar(this.GXValidFnc[14]);t.addRefreshingVar(this.GXValidFnc[19]);t.addRefreshingVar(this.GXValidFnc[24]);t.addRefreshingVar(this.GXValidFnc[29]);t.addRefreshingVar(this.GXValidFnc[34]);t.addRefreshingVar({rfrVar:"AV11pPedidoClienteEmpresaId"});t.addRefreshingVar({rfrVar:"AV12pPedidoClienteNumero"});this.InitStandaloneVars()});gx.setParentObj(new gx0oh2)