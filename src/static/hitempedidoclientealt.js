/**@preserve  GeneXus Java 10_3_12-110051 on February 24, 2021 12:2:51.6
*
gx.evt.autoSkip=!1;gx.define("hitempedidoclientealt",!1,function(){this.ServerClass="hitempedidoclientealt";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("12","'FECHAR'");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV61PrecoPadraoId=gx.fn.getIntegerValue("vPRECOPADRAOID",".");this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Validv_Pedidoclientenumero=function(){try{var n=gx.util.balloon.getNew("vPEDIDOCLIENTENUMERO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Codigointerno=function(){try{var n=gx.util.balloon.getNew("vCODIGOINTERNO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Pedidoclienteitemseq=function(){try{var n=gx.util.balloon.getNew("vPEDIDOCLIENTEITEMSEQ");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.s142_client=function(){this.Gx_mode=="INS"?(gx.fn.setCtrlProperty("vCODIGOINTERNO","Enabled",1),gx.fn.setCtrlProperty("vREFERENCIAINTERNA","Enabled",1),gx.fn.setCtrlProperty("vPEDIDOCLIENTEITEMQTDEPEDIDA","Enabled",1),gx.fn.setCtrlProperty("vPEDIDOCLIENTEITEMVALOR","Enabled",1)):this.Gx_mode=="DSP"?(gx.fn.setCtrlProperty("vCODIGOINTERNO","Enabled",0),gx.fn.setCtrlProperty("vREFERENCIAINTERNA","Enabled",0),gx.fn.setCtrlProperty("vPEDIDOCLIENTEITEMQTDEPEDIDA","Enabled",0),gx.fn.setCtrlProperty("vPEDIDOCLIENTEITEMVALOR","Enabled",0)):(0==this.AV9CodigoInterno?(gx.fn.setCtrlProperty("vCODIGOINTERNO","Enabled",1),gx.fn.setCtrlProperty("vREFERENCIAINTERNA","Enabled",1)):(gx.fn.setCtrlProperty("vCODIGOINTERNO","Enabled",0),gx.fn.setCtrlProperty("vREFERENCIAINTERNA","Enabled",0)),gx.fn.setCtrlProperty("vPEDIDOCLIENTEITEMQTDEPEDIDA","Enabled",0),gx.fn.setCtrlProperty("vPEDIDOCLIENTEITEMVALOR","Enabled",1))};this.e112hy2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e132hy2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e152hy2_client=function(){this.executeServerEvent("'CONSULTAPRODUTO'",!0,null,!1,!1)};this.e162hy2_client=function(){this.executeServerEvent("VREFERENCIAINTERNA.ISVALID",!0,null,!1,!0)};this.e172hy2_client=function(){this.executeServerEvent("VCODIGOINTERNO.ISVALID",!0,null,!1,!0)};this.e192hy2_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,10,12,14,17,19,20,22,24,29,32,34,35,37,39,40,43,45,50,52,57,59,64,66,71,73,78,80,85,87,92,94,96,98,109,115,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133];this.GXLastCtrlId=133;n[2]={fld:"TABLE7",grid:0};n[5]={fld:"TABLE5",grid:0};n[8]={fld:"TEXTBLOCK1",format:0,grid:0};n[10]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Pedidoclientenumero,isvalid:null,rgrid:[],fld:"vPEDIDOCLIENTENUMERO",gxz:"ZV40PedidoClienteNumero",gxold:"OV40PedidoClienteNumero",gxvar:"AV40PedidoClienteNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV40PedidoClienteNumero=gx.num.intval(n)},v2z:function(n){gx.O.ZV40PedidoClienteNumero=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPEDIDOCLIENTENUMERO",gx.O.AV40PedidoClienteNumero,0)},c2v:function(){gx.O.AV40PedidoClienteNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCLIENTENUMERO",".")},nac:gx.falseFn};n[12]={fld:"TEXTBLOCK4",format:0,grid:0};n[14]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCLIENTEDATAPEDIDO",gxz:"ZV27PedidoClienteDataPedido",gxold:"OV27PedidoClienteDataPedido",gxvar:"AV27PedidoClienteDataPedido",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV27PedidoClienteDataPedido=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV27PedidoClienteDataPedido=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vPEDIDOCLIENTEDATAPEDIDO",gx.O.AV27PedidoClienteDataPedido,0)},c2v:function(){gx.O.AV27PedidoClienteDataPedido=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPEDIDOCLIENTEDATAPEDIDO")},nac:gx.falseFn};n[17]={fld:"TEXTBLOCK2",format:0,grid:0};n[19]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCLIENTECLIID",gxz:"ZV26PedidoClienteCliId",gxold:"OV26PedidoClienteCliId",gxvar:"AV26PedidoClienteCliId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV26PedidoClienteCliId=gx.num.intval(n)},v2z:function(n){gx.O.ZV26PedidoClienteCliId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPEDIDOCLIENTECLIID",gx.O.AV26PedidoClienteCliId,0)},c2v:function(){gx.O.AV26PedidoClienteCliId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCLIENTECLIID",".")},nac:gx.falseFn};n[20]={lvl:0,type:"svchar",len:60,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCLIENTECLIFANTASIA",gxz:"ZV25PedidoClienteCliFantasia",gxold:"OV25PedidoClienteCliFantasia",gxvar:"AV25PedidoClienteCliFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV25PedidoClienteCliFantasia=n},v2z:function(n){gx.O.ZV25PedidoClienteCliFantasia=n},v2c:function(){gx.fn.setControlValue("vPEDIDOCLIENTECLIFANTASIA",gx.O.AV25PedidoClienteCliFantasia,0)},c2v:function(){gx.O.AV25PedidoClienteCliFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCLIENTECLIFANTASIA")},nac:gx.falseFn};n[22]={fld:"TEXTBLOCK3",format:0,grid:0};n[24]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCLIENTESITUACAO",gxz:"ZV41PedidoClienteSituacao",gxold:"OV41PedidoClienteSituacao",gxvar:"AV41PedidoClienteSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV41PedidoClienteSituacao=n},v2z:function(n){gx.O.ZV41PedidoClienteSituacao=n},v2c:function(){gx.fn.setComboBoxValue("vPEDIDOCLIENTESITUACAO",gx.O.AV41PedidoClienteSituacao)},c2v:function(){gx.O.AV41PedidoClienteSituacao=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCLIENTESITUACAO")},nac:gx.falseFn};n[29]={fld:"TABLE6",grid:0};n[32]={fld:"TEXTBLOCK5",format:0,grid:0};n[34]={lvl:0,type:"svchar",len:20,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:"e162hy2_client",rgrid:[],fld:"vREFERENCIAINTERNA",gxz:"ZV52ReferenciaInterna",gxold:"OV52ReferenciaInterna",gxvar:"AV52ReferenciaInterna",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV52ReferenciaInterna=n},v2z:function(n){gx.O.ZV52ReferenciaInterna=n},v2c:function(){gx.fn.setControlValue("vREFERENCIAINTERNA",gx.O.AV52ReferenciaInterna,0)},c2v:function(){gx.O.AV52ReferenciaInterna=this.val()},val:function(){return gx.fn.getControlValue("vREFERENCIAINTERNA")},nac:gx.falseFn};n[35]={fld:"PROMPTPROD2",grid:0};n[37]={fld:"TEXTBLOCK6",format:0,grid:0};n[39]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Codigointerno,isvalid:"e172hy2_client",rgrid:[],fld:"vCODIGOINTERNO",gxz:"ZV9CodigoInterno",gxold:"OV9CodigoInterno",gxvar:"AV9CodigoInterno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV9CodigoInterno=gx.num.intval(n)},v2z:function(n){gx.O.ZV9CodigoInterno=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCODIGOINTERNO",gx.O.AV9CodigoInterno,0)},c2v:function(){gx.O.AV9CodigoInterno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOINTERNO",".")},nac:gx.falseFn};n[40]={fld:"PROMPTPROD",grid:0};n[43]={fld:"TEXTBLOCK8",format:0,grid:0};n[45]={lvl:0,type:"decimal",len:18,dec:4,sign:!0,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCLIENTEITEMQTDEPEDIDA",gxz:"ZV33PedidoClienteItemQtdePedida",gxold:"OV33PedidoClienteItemQtdePedida",gxvar:"AV33PedidoClienteItemQtdePedida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV33PedidoClienteItemQtdePedida=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV33PedidoClienteItemQtdePedida=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vPEDIDOCLIENTEITEMQTDEPEDIDA",gx.O.AV33PedidoClienteItemQtdePedida,4,",")},c2v:function(){gx.O.AV33PedidoClienteItemQtdePedida=this.val()},val:function(){return gx.fn.getDecimalValue("vPEDIDOCLIENTEITEMQTDEPEDIDA",".",",")},nac:gx.falseFn};n[50]={fld:"TEXTBLOCK7",format:0,grid:0};n[52]={lvl:0,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCLIENTEITEMVALOR",gxz:"ZV39PedidoClienteItemValor",gxold:"OV39PedidoClienteItemValor",gxvar:"AV39PedidoClienteItemValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV39PedidoClienteItemValor=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV39PedidoClienteItemValor=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vPEDIDOCLIENTEITEMVALOR",gx.O.AV39PedidoClienteItemValor,2,",")},c2v:function(){gx.O.AV39PedidoClienteItemValor=this.val()},val:function(){return gx.fn.getDecimalValue("vPEDIDOCLIENTEITEMVALOR",".",",")},nac:gx.falseFn};n[57]={fld:"TEXTBLOCK9",format:0,grid:0};n[59]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCLIENTEITEMDESCRICAO",gxz:"ZV29PedidoClienteItemDescricao",gxold:"OV29PedidoClienteItemDescricao",gxvar:"AV29PedidoClienteItemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV29PedidoClienteItemDescricao=n},v2z:function(n){gx.O.ZV29PedidoClienteItemDescricao=n},v2c:function(){gx.fn.setControlValue("vPEDIDOCLIENTEITEMDESCRICAO",gx.O.AV29PedidoClienteItemDescricao,0)},c2v:function(){gx.O.AV29PedidoClienteItemDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCLIENTEITEMDESCRICAO")},nac:gx.falseFn};n[64]={fld:"TEXTBLOCK10",format:0,grid:0};n[66]={lvl:0,type:"svchar",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCLIENTEITEMREFERENCIA",gxz:"ZV34PedidoClienteItemReferencia",gxold:"OV34PedidoClienteItemReferencia",gxvar:"AV34PedidoClienteItemReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV34PedidoClienteItemReferencia=n},v2z:function(n){gx.O.ZV34PedidoClienteItemReferencia=n},v2c:function(){gx.fn.setControlValue("vPEDIDOCLIENTEITEMREFERENCIA",gx.O.AV34PedidoClienteItemReferencia,0)},c2v:function(){gx.O.AV34PedidoClienteItemReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCLIENTEITEMREFERENCIA")},nac:gx.falseFn};n[71]={fld:"TEXTBLOCK11",format:0,grid:0};n[73]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCLIENTEITEMMARCA",gxz:"ZV30PedidoClienteItemMarca",gxold:"OV30PedidoClienteItemMarca",gxvar:"AV30PedidoClienteItemMarca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV30PedidoClienteItemMarca=n},v2z:function(n){gx.O.ZV30PedidoClienteItemMarca=n},v2c:function(){gx.fn.setControlValue("vPEDIDOCLIENTEITEMMARCA",gx.O.AV30PedidoClienteItemMarca,0)},c2v:function(){gx.O.AV30PedidoClienteItemMarca=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCLIENTEITEMMARCA")},nac:gx.falseFn};n[78]={fld:"TEXTBLOCK12",format:0,grid:0};n[80]={lvl:0,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCLIENTEITEMPRECOCSV",gxz:"ZV31PedidoClienteItemPrecoCSV",gxold:"OV31PedidoClienteItemPrecoCSV",gxvar:"AV31PedidoClienteItemPrecoCSV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV31PedidoClienteItemPrecoCSV=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV31PedidoClienteItemPrecoCSV=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vPEDIDOCLIENTEITEMPRECOCSV",gx.O.AV31PedidoClienteItemPrecoCSV,2,",")},c2v:function(){gx.O.AV31PedidoClienteItemPrecoCSV=this.val()},val:function(){return gx.fn.getDecimalValue("vPEDIDOCLIENTEITEMPRECOCSV",".",",")},nac:gx.falseFn};n[85]={fld:"TEXTBLOCK13",format:0,grid:0};n[87]={lvl:0,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECOINTERNO",gxz:"ZV42PrecoInterno",gxold:"OV42PrecoInterno",gxvar:"AV42PrecoInterno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV42PrecoInterno=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV42PrecoInterno=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vPRECOINTERNO",gx.O.AV42PrecoInterno,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV42PrecoInterno=this.val()},val:function(){return gx.fn.getDecimalValue("vPRECOINTERNO",".",",")},nac:gx.falseFn};this.declareDomainHdlr(87,function(){});n[92]={fld:"TEXTBLOCK14",format:0,grid:0};n[94]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCLIENTEITEMSITUACAO",gxz:"ZV37PedidoClienteItemSituacao",gxold:"OV37PedidoClienteItemSituacao",gxvar:"AV37PedidoClienteItemSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV37PedidoClienteItemSituacao=n},v2z:function(n){gx.O.ZV37PedidoClienteItemSituacao=n},v2c:function(){gx.fn.setComboBoxValue("vPEDIDOCLIENTEITEMSITUACAO",gx.O.AV37PedidoClienteItemSituacao)},c2v:function(){gx.O.AV37PedidoClienteItemSituacao=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCLIENTEITEMSITUACAO")},nac:gx.falseFn};n[96]={fld:"TEXTBLOCK15",format:0,grid:0};n[98]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCLIENTEITEMSITIMPORTACAO",gxz:"ZV36PedidoClienteItemSitImportacao",gxold:"OV36PedidoClienteItemSitImportacao",gxvar:"AV36PedidoClienteItemSitImportacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV36PedidoClienteItemSitImportacao=n},v2z:function(n){gx.O.ZV36PedidoClienteItemSitImportacao=n},v2c:function(){gx.fn.setComboBoxValue("vPEDIDOCLIENTEITEMSITIMPORTACAO",gx.O.AV36PedidoClienteItemSitImportacao)},c2v:function(){gx.O.AV36PedidoClienteItemSitImportacao=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCLIENTEITEMSITIMPORTACAO")},nac:gx.falseFn};n[109]={fld:"TABLE3",grid:0};n[115]={fld:"TABINVIBLE",grid:0};n[118]={lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV7AcessoSistemaSequencia",gxold:"OV7AcessoSistemaSequencia",gxvar:"AV7AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(n)},v2z:function(n){gx.O.ZV7AcessoSistemaSequencia=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV7AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",".")},nac:gx.falseFn};n[119]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCLIENTEITEMPRODID",gxz:"ZV32PedidoClienteItemProdId",gxold:"OV32PedidoClienteItemProdId",gxvar:"AV32PedidoClienteItemProdId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV32PedidoClienteItemProdId=gx.num.intval(n)},v2z:function(n){gx.O.ZV32PedidoClienteItemProdId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPEDIDOCLIENTEITEMPRODID",gx.O.AV32PedidoClienteItemProdId,0)},c2v:function(){gx.O.AV32PedidoClienteItemProdId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCLIENTEITEMPRODID",".")},nac:gx.falseFn};n[120]={lvl:0,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Pedidoclienteitemseq,isvalid:null,rgrid:[],fld:"vPEDIDOCLIENTEITEMSEQ",gxz:"ZV35PedidoClienteItemSeq",gxold:"OV35PedidoClienteItemSeq",gxvar:"AV35PedidoClienteItemSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV35PedidoClienteItemSeq=gx.num.intval(n)},v2z:function(n){gx.O.ZV35PedidoClienteItemSeq=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPEDIDOCLIENTEITEMSEQ",gx.O.AV35PedidoClienteItemSeq,0)},c2v:function(){gx.O.AV35PedidoClienteItemSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCLIENTEITEMSEQ",".")},nac:gx.falseFn};n[121]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDFILTRO",gxz:"ZV12FilialIdFiltro",gxold:"OV12FilialIdFiltro",gxvar:"AV12FilialIdFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV12FilialIdFiltro=gx.num.intval(n)},v2z:function(n){gx.O.ZV12FilialIdFiltro=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vFILIALIDFILTRO",gx.O.AV12FilialIdFiltro,0)},c2v:function(){gx.O.AV12FilialIdFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDFILTRO",".")},nac:gx.falseFn};n[122]={lvl:0,type:"date",len:8,dec:0,sign:!0,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.Gx_date=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.Gx_date=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};n[123]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECONULO",gxz:"ZV43PrecoNulo",gxold:"OV43PrecoNulo",gxvar:"AV43PrecoNulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV43PrecoNulo=gx.num.intval(n)},v2z:function(n){gx.O.ZV43PrecoNulo=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPRECONULO",gx.O.AV43PrecoNulo,0)},c2v:function(){gx.O.AV43PrecoNulo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECONULO",".")},nac:gx.falseFn};n[124]={lvl:0,type:"char",len:2,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCATEGORIA",gxz:"ZV44ProdutoCategoria",gxold:"OV44ProdutoCategoria",gxvar:"AV44ProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV44ProdutoCategoria=n},v2z:function(n){gx.O.ZV44ProdutoCategoria=n},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOCATEGORIA",gx.O.AV44ProdutoCategoria)},c2v:function(){gx.O.AV44ProdutoCategoria=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCATEGORIA")},nac:gx.falseFn};n[125]={lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOBARRA",gxz:"ZV8CodigoBarrasProdutoBarra",gxold:"OV8CodigoBarrasProdutoBarra",gxvar:"AV8CodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV8CodigoBarrasProdutoBarra=gx.num.intval(n)},v2z:function(n){gx.O.ZV8CodigoBarrasProdutoBarra=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTOBARRA",gx.O.AV8CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.AV8CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRA",".")},nac:gx.falseFn};n[126]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOSAIDAPRECOMINIMO",gxz:"ZV66TransacaoSaidaPrecoMinimo",gxold:"OV66TransacaoSaidaPrecoMinimo",gxvar:"AV66TransacaoSaidaPrecoMinimo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV66TransacaoSaidaPrecoMinimo=n},v2z:function(n){gx.O.ZV66TransacaoSaidaPrecoMinimo=n},v2c:function(){gx.fn.setControlValue("vTRANSACAOSAIDAPRECOMINIMO",gx.O.AV66TransacaoSaidaPrecoMinimo,0)},c2v:function(){gx.O.AV66TransacaoSaidaPrecoMinimo=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOSAIDAPRECOMINIMO")},nac:gx.falseFn};n[127]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCLIENTEITEMTIPORECUSA",gxz:"ZV38PedidoClienteItemTipoRecusa",gxold:"OV38PedidoClienteItemTipoRecusa",gxvar:"AV38PedidoClienteItemTipoRecusa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV38PedidoClienteItemTipoRecusa=n},v2z:function(n){gx.O.ZV38PedidoClienteItemTipoRecusa=n},v2c:function(){gx.fn.setControlValue("vPEDIDOCLIENTEITEMTIPORECUSA",gx.O.AV38PedidoClienteItemTipoRecusa,0)},c2v:function(){gx.O.AV38PedidoClienteItemTipoRecusa=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCLIENTEITEMTIPORECUSA")},nac:gx.falseFn};n[128]={lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTOID",gxz:"ZV13GrupoProdutoId",gxold:"OV13GrupoProdutoId",gxvar:"AV13GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV13GrupoProdutoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV13GrupoProdutoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOID",gx.O.AV13GrupoProdutoId,0)},c2v:function(){gx.O.AV13GrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRODUTOID",".")},nac:gx.falseFn};n[129]={lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOID",gxz:"ZV57SubGrupoProdutoId",gxold:"OV57SubGrupoProdutoId",gxvar:"AV57SubGrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV57SubGrupoProdutoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV57SubGrupoProdutoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOID",gx.O.AV57SubGrupoProdutoId,0)},c2v:function(){gx.O.AV57SubGrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOPRODUTOID",".")},nac:gx.falseFn};n[130]={lvl:0,type:"char",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAO",gxz:"ZV19LoteProdutoCombinacao",gxold:"OV19LoteProdutoCombinacao",gxvar:"AV19LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV19LoteProdutoCombinacao=n},v2z:function(n){gx.O.ZV19LoteProdutoCombinacao=n},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAO",gx.O.AV19LoteProdutoCombinacao,0)},c2v:function(){gx.O.AV19LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};n[131]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV56SNVenda",gxold:"OV56SNVenda",gxvar:"AV56SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV56SNVenda=n},v2z:function(n){gx.O.ZV56SNVenda=n},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV56SNVenda,0)},c2v:function(){gx.O.AV56SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};n[132]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUXIN",gxz:"ZV15IntAuxIn",gxold:"OV15IntAuxIn",gxvar:"AV15IntAuxIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV15IntAuxIn=gx.num.intval(n)},v2z:function(n){gx.O.ZV15IntAuxIn=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vINTAUXIN",gx.O.AV15IntAuxIn,0)},c2v:function(){gx.O.AV15IntAuxIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUXIN",".")},nac:gx.falseFn};n[133]={lvl:0,type:"int",len:5,dec:0,sign:!1,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOID",gxz:"ZV45ProdutoCodigoId",gxold:"OV45ProdutoCodigoId",gxvar:"AV45ProdutoCodigoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV45ProdutoCodigoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV45ProdutoCodigoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOID",gx.O.AV45ProdutoCodigoId,0)},c2v:function(){gx.O.AV45ProdutoCodigoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOID",".")},nac:gx.falseFn};this.AV40PedidoClienteNumero=0;this.ZV40PedidoClienteNumero=0;this.OV40PedidoClienteNumero=0;this.AV27PedidoClienteDataPedido=gx.date.nullDate();this.ZV27PedidoClienteDataPedido=gx.date.nullDate();this.OV27PedidoClienteDataPedido=gx.date.nullDate();this.AV26PedidoClienteCliId=0;this.ZV26PedidoClienteCliId=0;this.OV26PedidoClienteCliId=0;this.AV25PedidoClienteCliFantasia="";this.ZV25PedidoClienteCliFantasia="";this.OV25PedidoClienteCliFantasia="";this.AV41PedidoClienteSituacao="";this.ZV41PedidoClienteSituacao="";this.OV41PedidoClienteSituacao="";this.AV52ReferenciaInterna="";this.ZV52ReferenciaInterna="";this.OV52ReferenciaInterna="";this.AV9CodigoInterno=0;this.ZV9CodigoInterno=0;this.OV9CodigoInterno=0;this.AV33PedidoClienteItemQtdePedida=0;this.ZV33PedidoClienteItemQtdePedida=0;this.OV33PedidoClienteItemQtdePedida=0;this.AV39PedidoClienteItemValor=0;this.ZV39PedidoClienteItemValor=0;this.OV39PedidoClienteItemValor=0;this.AV29PedidoClienteItemDescricao="";this.ZV29PedidoClienteItemDescricao="";this.OV29PedidoClienteItemDescricao="";this.AV34PedidoClienteItemReferencia="";this.ZV34PedidoClienteItemReferencia="";this.OV34PedidoClienteItemReferencia="";this.AV30PedidoClienteItemMarca="";this.ZV30PedidoClienteItemMarca="";this.OV30PedidoClienteItemMarca="";this.AV31PedidoClienteItemPrecoCSV=0;this.ZV31PedidoClienteItemPrecoCSV=0;this.OV31PedidoClienteItemPrecoCSV=0;this.AV42PrecoInterno=0;this.ZV42PrecoInterno=0;this.OV42PrecoInterno=0;this.AV37PedidoClienteItemSituacao="";this.ZV37PedidoClienteItemSituacao="";this.OV37PedidoClienteItemSituacao="";this.AV36PedidoClienteItemSitImportacao="";this.ZV36PedidoClienteItemSitImportacao="";this.OV36PedidoClienteItemSitImportacao="";this.AV7AcessoSistemaSequencia=0;this.ZV7AcessoSistemaSequencia=0;this.OV7AcessoSistemaSequencia=0;this.AV32PedidoClienteItemProdId=0;this.ZV32PedidoClienteItemProdId=0;this.OV32PedidoClienteItemProdId=0;this.AV35PedidoClienteItemSeq=0;this.ZV35PedidoClienteItemSeq=0;this.OV35PedidoClienteItemSeq=0;this.AV12FilialIdFiltro=0;this.ZV12FilialIdFiltro=0;this.OV12FilialIdFiltro=0;this.Gx_date=gx.date.nullDate();this.Gx_date=gx.date.nullDate();this.AV43PrecoNulo=0;this.ZV43PrecoNulo=0;this.OV43PrecoNulo=0;this.AV44ProdutoCategoria="";this.ZV44ProdutoCategoria="";this.OV44ProdutoCategoria="";this.AV8CodigoBarrasProdutoBarra=0;this.ZV8CodigoBarrasProdutoBarra=0;this.OV8CodigoBarrasProdutoBarra=0;this.AV66TransacaoSaidaPrecoMinimo="";this.ZV66TransacaoSaidaPrecoMinimo="";this.OV66TransacaoSaidaPrecoMinimo="";this.AV38PedidoClienteItemTipoRecusa="";this.ZV38PedidoClienteItemTipoRecusa="";this.OV38PedidoClienteItemTipoRecusa="";this.AV13GrupoProdutoId=0;this.ZV13GrupoProdutoId=0;this.OV13GrupoProdutoId=0;this.AV57SubGrupoProdutoId=0;this.ZV57SubGrupoProdutoId=0;this.OV57SubGrupoProdutoId=0;this.AV19LoteProdutoCombinacao="";this.ZV19LoteProdutoCombinacao="";this.OV19LoteProdutoCombinacao="";this.AV56SNVenda="";this.ZV56SNVenda="";this.OV56SNVenda="";this.AV15IntAuxIn=0;this.ZV15IntAuxIn=0;this.OV15IntAuxIn=0;this.AV45ProdutoCodigoId=0;this.ZV45ProdutoCodigoId=0;this.OV45ProdutoCodigoId=0;this.AV40PedidoClienteNumero=0;this.AV27PedidoClienteDataPedido=gx.date.nullDate();this.AV26PedidoClienteCliId=0;this.AV25PedidoClienteCliFantasia="";this.AV41PedidoClienteSituacao="";this.AV52ReferenciaInterna="";this.AV9CodigoInterno=0;this.AV33PedidoClienteItemQtdePedida=0;this.AV39PedidoClienteItemValor=0;this.AV29PedidoClienteItemDescricao="";this.AV34PedidoClienteItemReferencia="";this.AV30PedidoClienteItemMarca="";this.AV31PedidoClienteItemPrecoCSV=0;this.AV42PrecoInterno=0;this.AV37PedidoClienteItemSituacao="";this.AV36PedidoClienteItemSitImportacao="";this.AV7AcessoSistemaSequencia=0;this.AV32PedidoClienteItemProdId=0;this.AV35PedidoClienteItemSeq=0;this.AV12FilialIdFiltro=0;this.Gx_date=gx.date.nullDate();this.AV43PrecoNulo=0;this.AV44ProdutoCategoria="";this.AV8CodigoBarrasProdutoBarra=0;this.AV66TransacaoSaidaPrecoMinimo="";this.AV38PedidoClienteItemTipoRecusa="";this.AV13GrupoProdutoId=0;this.AV57SubGrupoProdutoId=0;this.AV19LoteProdutoCombinacao="";this.AV56SNVenda="";this.AV15IntAuxIn=0;this.AV45ProdutoCodigoId=0;this.AV61PrecoPadraoId=0;this.A2965ProdutoId=0;this.A2964ProdutoEmpresaId="";this.A2961ProdutoDescricaoResumida="";this.A3837ProdutoReferencia="";this.A11856PedidoClienteItemSeq=0;this.A11851PedidoClienteNumero=0;this.A11850PedidoClienteEmpresaId="";this.A11863PedidoClienteItemReferencia="";this.A11864PedidoClienteItemMarca="";this.A11865PedidoClienteItemQtdePedida=0;this.A11866PedidoClienteItemPrecoCSV=0;this.A11858PedidoClienteItemProdId=0;this.A11870PedidoClienteItemProdRef="";this.A11887PedidoClienteItemProdDesc="";this.A11867PedidoClienteItemValor=0;this.A11868PedidoClienteItemSitImportacao="";this.A11869PedidoClienteItemSituacao="";this.A11876PedidoClienteItemTipoRecusa="";this.A11862PedidoClienteItemDescricao="";this.A11857PedidoClienteItemProdEmpId="";this.A11853PedidoClienteCliId=0;this.A11881PedidoClienteCliFantasia="";this.A11861PedidoClienteDataPedido=gx.date.nullDate();this.A11873PedidoClienteSituacao="";this.A11852PedidoClienteCliEmpId="";this.A5695TransacaoSaidaCodigo="";this.A5694TransacaoSaidaEmpresaId="";this.A6503TransacaoSaidaPrecoMinimo="";this.A5583TransacaoSaidaFilialId=0;this.Gx_mode="";this.Events={e112hy2_client:["'FECHAR'",!0],e132hy2_client:["ENTER",!0],e152hy2_client:["'CONSULTAPRODUTO'",!0],e162hy2_client:["VREFERENCIAINTERNA.ISVALID",!0],e172hy2_client:["VCODIGOINTERNO.ISVALID",!0],e192hy2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"AV39PedidoClienteItemValor",fld:"vPEDIDOCLIENTEITEMVALOR"},{av:"Gx_mode",fld:"vMODE"},{av:"AV9CodigoInterno",fld:"vCODIGOINTERNO"},{av:"AV28PedidoClienteEmpresaId",fld:"vPEDIDOCLIENTEEMPRESAID"},{av:"AV40PedidoClienteNumero",fld:"vPEDIDOCLIENTENUMERO",hsh:!0},{av:"AV35PedidoClienteItemSeq",fld:"vPEDIDOCLIENTEITEMSEQ",hsh:!0},{av:"AV34PedidoClienteItemReferencia",fld:"vPEDIDOCLIENTEITEMREFERENCIA"},{av:"AV30PedidoClienteItemMarca",fld:"vPEDIDOCLIENTEITEMMARCA"},{av:"AV33PedidoClienteItemQtdePedida",fld:"vPEDIDOCLIENTEITEMQTDEPEDIDA"},{av:"AV31PedidoClienteItemPrecoCSV",fld:"vPEDIDOCLIENTEITEMPRECOCSV"},{av:"AV32PedidoClienteItemProdId",fld:"vPEDIDOCLIENTEITEMPRODID"},{av:"AV29PedidoClienteItemDescricao",fld:"vPEDIDOCLIENTEITEMDESCRICAO"},{av:"AV36PedidoClienteItemSitImportacao",fld:"vPEDIDOCLIENTEITEMSITIMPORTACAO"},{av:"AV37PedidoClienteItemSituacao",fld:"vPEDIDOCLIENTEITEMSITUACAO"},{av:"AV38PedidoClienteItemTipoRecusa",fld:"vPEDIDOCLIENTEITEMTIPORECUSA"},{av:"AV6ProdutoEmpresaId",fld:"vPRODUTOEMPRESAID"}],[{av:"AV59tpErro",fld:"vTPERRO"},{av:'gx.fn.getCtrlProperty("vCODIGOINTERNO","Enabled")',ctrl:"vCODIGOINTERNO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vREFERENCIAINTERNA","Enabled")',ctrl:"vREFERENCIAINTERNA",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vPEDIDOCLIENTEITEMQTDEPEDIDA","Enabled")',ctrl:"vPEDIDOCLIENTEITEMQTDEPEDIDA",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vPEDIDOCLIENTEITEMVALOR","Enabled")',ctrl:"vPEDIDOCLIENTEITEMVALOR",prop:"Enabled"},{av:"AV36PedidoClienteItemSitImportacao",fld:"vPEDIDOCLIENTEITEMSITIMPORTACAO"}]];this.EvtParms["'FECHAR'"]=[[{av:"AV7AcessoSistemaSequencia",fld:"vACESSOSISTEMASEQUENCIA"},{av:"Gx_mode",fld:"vMODE"}],[]];this.EvtParms.ENTER=[[{av:"Gx_mode",fld:"vMODE"},{av:"A5694TransacaoSaidaEmpresaId",fld:"TRANSACAOSAIDAEMPRESAID"},{av:"AV64TransacaoSaidaEmpresaId",fld:"vTRANSACAOSAIDAEMPRESAID"},{av:"A5695TransacaoSaidaCodigo",fld:"TRANSACAOSAIDACODIGO"},{av:"A6503TransacaoSaidaPrecoMinimo",fld:"TRANSACAOSAIDAPRECOMINIMO"},{av:"A5583TransacaoSaidaFilialId",fld:"TRANSACAOSAIDAFILIALID"},{av:"AV52ReferenciaInterna",fld:"vREFERENCIAINTERNA"},{av:"AV9CodigoInterno",fld:"vCODIGOINTERNO"},{av:"A2965ProdutoId",fld:"PRODUTOID"},{av:"A2964ProdutoEmpresaId",fld:"PRODUTOEMPRESAID"},{av:"AV6ProdutoEmpresaId",fld:"vPRODUTOEMPRESAID"},{av:"A3837ProdutoReferencia",fld:"PRODUTOREFERENCIA"},{av:"AV39PedidoClienteItemValor",fld:"vPEDIDOCLIENTEITEMVALOR"},{av:"A2961ProdutoDescricaoResumida",fld:"PRODUTODESCRICAORESUMIDA"},{av:"AV33PedidoClienteItemQtdePedida",fld:"vPEDIDOCLIENTEITEMQTDEPEDIDA"},{av:"AV28PedidoClienteEmpresaId",fld:"vPEDIDOCLIENTEEMPRESAID"},{av:"AV40PedidoClienteNumero",fld:"vPEDIDOCLIENTENUMERO",hsh:!0},{av:"AV35PedidoClienteItemSeq",fld:"vPEDIDOCLIENTEITEMSEQ",hsh:!0},{av:"AV34PedidoClienteItemReferencia",fld:"vPEDIDOCLIENTEITEMREFERENCIA"},{av:"AV30PedidoClienteItemMarca",fld:"vPEDIDOCLIENTEITEMMARCA"},{av:"AV31PedidoClienteItemPrecoCSV",fld:"vPEDIDOCLIENTEITEMPRECOCSV"},{av:"AV32PedidoClienteItemProdId",fld:"vPEDIDOCLIENTEITEMPRODID"},{av:"AV29PedidoClienteItemDescricao",fld:"vPEDIDOCLIENTEITEMDESCRICAO"},{av:"AV36PedidoClienteItemSitImportacao",fld:"vPEDIDOCLIENTEITEMSITIMPORTACAO"},{av:"AV37PedidoClienteItemSituacao",fld:"vPEDIDOCLIENTEITEMSITUACAO"},{av:"AV38PedidoClienteItemTipoRecusa",fld:"vPEDIDOCLIENTEITEMTIPORECUSA"},{av:"AV63PrecoMinimo",fld:"vPRECOMINIMO"},{av:"AV66TransacaoSaidaPrecoMinimo",fld:"vTRANSACAOSAIDAPRECOMINIMO"},{av:"AV27PedidoClienteDataPedido",fld:"vPEDIDOCLIENTEDATAPEDIDO"},{av:"AV67TransacaoSaidaFilialId",fld:"vTRANSACAOSAIDAFILIALID"},{av:"AV60UsrCod",fld:"vUSRCOD"},{av:"AV10EmpresaLogadaId",fld:"vEMPRESALOGADAID"},{av:"AV68FilialEmpresaId",fld:"vFILIALEMPRESAID"},{av:"AV80Pgmname",fld:"vPGMNAME"},{av:"AV69SdtPermissao",fld:"vSDTPERMISSAO"}],[{av:"AV59tpErro",fld:"vTPERRO"},{av:"AV63PrecoMinimo",fld:"vPRECOMINIMO"},{av:"AV75TransacaoSaidaCodigo",fld:"vTRANSACAOSAIDACODIGO"},{av:"AV66TransacaoSaidaPrecoMinimo",fld:"vTRANSACAOSAIDAPRECOMINIMO"},{av:"AV67TransacaoSaidaFilialId",fld:"vTRANSACAOSAIDAFILIALID"},{av:"AV83GXLvl101",fld:"vGXLVL101"},{av:"AV84GXLvl114",fld:"vGXLVL114"},{av:"AV32PedidoClienteItemProdId",fld:"vPEDIDOCLIENTEITEMPRODID"},{av:"AV85GXLvl143",fld:"vGXLVL143"},{av:"AV9CodigoInterno",fld:"vCODIGOINTERNO"},{av:"AV86GXLvl157",fld:"vGXLVL157"},{av:"AV52ReferenciaInterna",fld:"vREFERENCIAINTERNA"},{av:"AV29PedidoClienteItemDescricao",fld:"vPEDIDOCLIENTEITEMDESCRICAO"},{av:"AV36PedidoClienteItemSitImportacao",fld:"vPEDIDOCLIENTEITEMSITIMPORTACAO"},{av:"AV65PrecoProdutoValor",fld:"vPRECOPRODUTOVALOR"},{av:"AV72MensagemDetalhada",fld:"vMENSAGEMDETALHADA"},{av:"AV21MsgErro",fld:"vMSGERRO"},{av:"AV69SdtPermissao",fld:"vSDTPERMISSAO"},{av:"AV70SnTelaPermissao",fld:"vSNTELAPERMISSAO"},{av:"AV71NomeSessao",fld:"vNOMESESSAO"}]];this.EvtParms["'CONSULTAPRODUTO'"]=[[{av:"AV12FilialIdFiltro",fld:"vFILIALIDFILTRO"},{av:"Gx_date",fld:"vTODAY"},{av:"AV43PrecoNulo",fld:"vPRECONULO"},{av:"AV44ProdutoCategoria",fld:"vPRODUTOCATEGORIA"},{av:"AV15IntAuxIn",fld:"vINTAUXIN"},{av:"AV56SNVenda",fld:"vSNVENDA"}],[{av:"AV8CodigoBarrasProdutoBarra",fld:"vCODIGOBARRASPRODUTOBARRA"},{av:"AV52ReferenciaInterna",fld:"vREFERENCIAINTERNA"},{av:"AV19LoteProdutoCombinacao",fld:"vLOTEPRODUTOCOMBINACAO"},{av:"AV45ProdutoCodigoId",fld:"vPRODUTOCODIGOID"},{av:"AV57SubGrupoProdutoId",fld:"vSUBGRUPOPRODUTOID"},{av:"AV13GrupoProdutoId",fld:"vGRUPOPRODUTOID"},{av:"AV9CodigoInterno",fld:"vCODIGOINTERNO"}]];this.EvtParms["VREFERENCIAINTERNA.ISVALID"]=[[{av:"AV52ReferenciaInterna",fld:"vREFERENCIAINTERNA"},{av:"A2965ProdutoId",fld:"PRODUTOID"},{av:"A2964ProdutoEmpresaId",fld:"PRODUTOEMPRESAID"},{av:"AV6ProdutoEmpresaId",fld:"vPRODUTOEMPRESAID"},{av:"A3837ProdutoReferencia",fld:"PRODUTOREFERENCIA"},{av:"A2961ProdutoDescricaoResumida",fld:"PRODUTODESCRICAORESUMIDA"},{av:"AV9CodigoInterno",fld:"vCODIGOINTERNO"},{av:"AV61PrecoPadraoId",fld:"vPRECOPADRAOID",hsh:!0},{av:"AV27PedidoClienteDataPedido",fld:"vPEDIDOCLIENTEDATAPEDIDO"},{av:"AV42PrecoInterno",fld:"vPRECOINTERNO"},{av:"AV39PedidoClienteItemValor",fld:"vPEDIDOCLIENTEITEMVALOR"}],[{av:"AV74ProdutoPrecoId",fld:"vPRODUTOPRECOID"},{av:"AV29PedidoClienteItemDescricao",fld:"vPEDIDOCLIENTEITEMDESCRICAO"},{av:"AV62SnPromocao",fld:"vSNPROMOCAO"},{av:"AV39PedidoClienteItemValor",fld:"vPEDIDOCLIENTEITEMVALOR"}]];this.EvtParms["VCODIGOINTERNO.ISVALID"]=[[{av:"AV52ReferenciaInterna",fld:"vREFERENCIAINTERNA"},{av:"A2965ProdutoId",fld:"PRODUTOID"},{av:"A2964ProdutoEmpresaId",fld:"PRODUTOEMPRESAID"},{av:"AV6ProdutoEmpresaId",fld:"vPRODUTOEMPRESAID"},{av:"A3837ProdutoReferencia",fld:"PRODUTOREFERENCIA"},{av:"A2961ProdutoDescricaoResumida",fld:"PRODUTODESCRICAORESUMIDA"},{av:"AV9CodigoInterno",fld:"vCODIGOINTERNO"},{av:"AV61PrecoPadraoId",fld:"vPRECOPADRAOID",hsh:!0},{av:"AV27PedidoClienteDataPedido",fld:"vPEDIDOCLIENTEDATAPEDIDO"},{av:"AV42PrecoInterno",fld:"vPRECOINTERNO"},{av:"AV39PedidoClienteItemValor",fld:"vPEDIDOCLIENTEITEMVALOR"}],[{av:"AV74ProdutoPrecoId",fld:"vPRODUTOPRECOID"},{av:"AV29PedidoClienteItemDescricao",fld:"vPEDIDOCLIENTEITEMDESCRICAO"},{av:"AV62SnPromocao",fld:"vSNPROMOCAO"},{av:"AV39PedidoClienteItemValor",fld:"vPEDIDOCLIENTEITEMVALOR"}]];this.EnterCtrl=["BTNCONFIRMAR"];this.setVCMap("AV61PrecoPadraoId","vPRECOPADRAOID",0,"int");this.setVCMap("Gx_mode","vMODE",0,"char");this.InitStandaloneVars()});gx.setParentObj(new hitempedidoclientealt)