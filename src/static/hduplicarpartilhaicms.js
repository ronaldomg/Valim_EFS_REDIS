/**@preserve  GeneXus Java 10_3_12-110051 on February 13, 2021 12:51:56.1
*
gx.evt.autoSkip=!1;gx.define("hduplicarpartilhaicms",!1,function(){this.ServerClass="hduplicarpartilhaicms";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV21PartilhaICMSEmpresaId=gx.fn.getControlValue("vPARTILHAICMSEMPRESAID");this.AV39PartilhaICMSUFParm=gx.fn.getControlValue("vPARTILHAICMSUFPARM");this.AV40PartilhaICMSSequenciaParm=gx.fn.getIntegerValue("vPARTILHAICMSSEQUENCIAPARM",".")};this.Validv_Partilhaicmsuf=function(){try{var n=gx.util.balloon.getNew("vPARTILHAICMSUF");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Partilhaicmsprodutoid=function(){try{var n=gx.util.balloon.getNew("vPARTILHAICMSPRODUTOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Partilhaicmsncmcodigo=function(){try{var n=gx.util.balloon.getNew("vPARTILHAICMSNCMCODIGO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Gx_date=function(){try{var n=gx.util.balloon.getNew("vTODAY");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e122i82_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e132i82_client=function(){this.executeServerEvent("VPARTILHAICMSNCMCODIGO.ISVALID",!0,null,!1,!0)};this.e142i82_client=function(){this.executeServerEvent("VPARTILHAICMSPRODUTOID.ISVALID",!0,null,!1,!0)};this.e162i81_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,10,13,15,16,17,20,22,23,26,28,32,40,43,44,45,46,47,48,49,50,51,52,53,54,55,56];this.GXLastCtrlId=56;n[2]={fld:"TABLE4",grid:0};n[5]={fld:"TABLE5",grid:0};n[8]={fld:"TEXTBLOCK1",format:0,grid:0};n[10]={lvl:0,type:"char",len:2,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Partilhaicmsuf,isvalid:null,rgrid:[],fld:"vPARTILHAICMSUF",gxz:"ZV19PartilhaICMSUF",gxold:"OV19PartilhaICMSUF",gxvar:"AV19PartilhaICMSUF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV19PartilhaICMSUF=n},v2z:function(n){gx.O.ZV19PartilhaICMSUF=n},v2c:function(){gx.fn.setComboBoxValue("vPARTILHAICMSUF",gx.O.AV19PartilhaICMSUF)},c2v:function(){gx.O.AV19PartilhaICMSUF=this.val()},val:function(){return gx.fn.getControlValue("vPARTILHAICMSUF")},nac:gx.falseFn};n[13]={fld:"TEXTBLOCK2",format:0,grid:0};n[15]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Partilhaicmsprodutoid,isvalid:"e142i82_client",rgrid:[],fld:"vPARTILHAICMSPRODUTOID",gxz:"ZV24PartilhaICMSProdutoId",gxold:"OV24PartilhaICMSProdutoId",gxvar:"AV24PartilhaICMSProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV24PartilhaICMSProdutoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV24PartilhaICMSProdutoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPARTILHAICMSPRODUTOID",gx.O.AV24PartilhaICMSProdutoId,0)},c2v:function(){gx.O.AV24PartilhaICMSProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPARTILHAICMSPRODUTOID",".")},nac:gx.falseFn};n[16]={fld:"PROMPTPROD",grid:0};n[17]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPARTILHAICMSPRODUTODESC",gxz:"ZV25PartilhaICMSProdutoDesc",gxold:"OV25PartilhaICMSProdutoDesc",gxvar:"AV25PartilhaICMSProdutoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV25PartilhaICMSProdutoDesc=n},v2z:function(n){gx.O.ZV25PartilhaICMSProdutoDesc=n},v2c:function(){gx.fn.setControlValue("vPARTILHAICMSPRODUTODESC",gx.O.AV25PartilhaICMSProdutoDesc,0)},c2v:function(){gx.O.AV25PartilhaICMSProdutoDesc=this.val()},val:function(){return gx.fn.getControlValue("vPARTILHAICMSPRODUTODESC")},nac:gx.falseFn};n[20]={fld:"TEXTBLOCK3",format:0,grid:0};n[22]={lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Partilhaicmsncmcodigo,isvalid:"e132i82_client",rgrid:[],fld:"vPARTILHAICMSNCMCODIGO",gxz:"ZV22PartilhaICMSNCMCodigo",gxold:"OV22PartilhaICMSNCMCodigo",gxvar:"AV22PartilhaICMSNCMCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV22PartilhaICMSNCMCodigo=gx.num.intval(n)},v2z:function(n){gx.O.ZV22PartilhaICMSNCMCodigo=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPARTILHAICMSNCMCODIGO",gx.O.AV22PartilhaICMSNCMCodigo,0)},c2v:function(){gx.O.AV22PartilhaICMSNCMCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPARTILHAICMSNCMCODIGO",".")},nac:gx.falseFn};n[23]={lvl:0,type:"svchar",len:150,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPARTILHAICMSNCMDESCRICAO",gxz:"ZV23PartilhaICMSNCMDescricao",gxold:"OV23PartilhaICMSNCMDescricao",gxvar:"AV23PartilhaICMSNCMDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV23PartilhaICMSNCMDescricao=n},v2z:function(n){gx.O.ZV23PartilhaICMSNCMDescricao=n},v2c:function(){gx.fn.setControlValue("vPARTILHAICMSNCMDESCRICAO",gx.O.AV23PartilhaICMSNCMDescricao,0)},c2v:function(){gx.O.AV23PartilhaICMSNCMDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPARTILHAICMSNCMDESCRICAO")},nac:gx.falseFn};n[26]={fld:"TEXTBLOCK4",format:0,grid:0};n[28]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPARTILHAICMSORIGEMCST",gxz:"ZV44PartilhaICMSOrigemCST",gxold:"OV44PartilhaICMSOrigemCST",gxvar:"AV44PartilhaICMSOrigemCST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV44PartilhaICMSOrigemCST=n},v2z:function(n){gx.O.ZV44PartilhaICMSOrigemCST=n},v2c:function(){gx.fn.setComboBoxValue("vPARTILHAICMSORIGEMCST",gx.O.AV44PartilhaICMSOrigemCST)},c2v:function(){gx.O.AV44PartilhaICMSOrigemCST=this.val()},val:function(){return gx.fn.getControlValue("vPARTILHAICMSORIGEMCST")},nac:gx.falseFn};n[32]={lvl:0,type:"char",len:1,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPARTILHAICMSSNPRODCOMCONVENIO",gxz:"ZV26PartilhaICMSSnProdComConvenio",gxold:"OV26PartilhaICMSSnProdComConvenio",gxvar:"AV26PartilhaICMSSnProdComConvenio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.AV26PartilhaICMSSnProdComConvenio=n},v2z:function(n){gx.O.ZV26PartilhaICMSSnProdComConvenio=n},v2c:function(){gx.fn.setCheckBoxValue("vPARTILHAICMSSNPRODCOMCONVENIO",gx.O.AV26PartilhaICMSSnProdComConvenio,"S")},c2v:function(){gx.O.AV26PartilhaICMSSnProdComConvenio=this.val()},val:function(){return gx.fn.getControlValue("vPARTILHAICMSSNPRODCOMCONVENIO")},nac:gx.falseFn,values:["S","N"]};n[40]={fld:"TABINVISIVEL",grid:0};n[43]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECONULO",gxz:"ZV28PrecoNulo",gxold:"OV28PrecoNulo",gxvar:"AV28PrecoNulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV28PrecoNulo=gx.num.intval(n)},v2z:function(n){gx.O.ZV28PrecoNulo=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPRECONULO",gx.O.AV28PrecoNulo,0)},c2v:function(){gx.O.AV28PrecoNulo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECONULO",".")},nac:gx.falseFn};n[44]={lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOBARRA",gxz:"ZV36CodigoBarrasProdutoBarra",gxold:"OV36CodigoBarrasProdutoBarra",gxvar:"AV36CodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV36CodigoBarrasProdutoBarra=gx.num.intval(n)},v2z:function(n){gx.O.ZV36CodigoBarrasProdutoBarra=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTOBARRA",gx.O.AV36CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.AV36CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRA",".")},nac:gx.falseFn};n[45]={lvl:0,type:"date",len:8,dec:0,sign:!0,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Gx_date,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.Gx_date=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.Gx_date=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};n[46]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUXIN",gxz:"ZV34IntAuxIn",gxold:"OV34IntAuxIn",gxvar:"AV34IntAuxIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV34IntAuxIn=gx.num.intval(n)},v2z:function(n){gx.O.ZV34IntAuxIn=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vINTAUXIN",gx.O.AV34IntAuxIn,0)},c2v:function(){gx.O.AV34IntAuxIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUXIN",".")},nac:gx.falseFn};n[47]={lvl:0,type:"char",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAO",gxz:"ZV32LoteProdutoCombinacao",gxold:"OV32LoteProdutoCombinacao",gxvar:"AV32LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV32LoteProdutoCombinacao=n},v2z:function(n){gx.O.ZV32LoteProdutoCombinacao=n},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAO",gx.O.AV32LoteProdutoCombinacao,0)},c2v:function(){gx.O.AV32LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};n[48]={lvl:0,type:"char",len:2,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCATEGORIA",gxz:"ZV29ProdutoCategoria",gxold:"OV29ProdutoCategoria",gxvar:"AV29ProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV29ProdutoCategoria=n},v2z:function(n){gx.O.ZV29ProdutoCategoria=n},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOCATEGORIA",gx.O.AV29ProdutoCategoria)},c2v:function(){gx.O.AV29ProdutoCategoria=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCATEGORIA")},nac:gx.falseFn};n[49]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV35SNVenda",gxold:"OV35SNVenda",gxvar:"AV35SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV35SNVenda=n},v2z:function(n){gx.O.ZV35SNVenda=n},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV35SNVenda,0)},c2v:function(){gx.O.AV35SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};n[50]={lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNCMCODIGOIN",gxz:"ZV41NCMCodigoIN",gxold:"OV41NCMCodigoIN",gxvar:"AV41NCMCodigoIN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV41NCMCodigoIN=gx.num.intval(n)},v2z:function(n){gx.O.ZV41NCMCodigoIN=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vNCMCODIGOIN",gx.O.AV41NCMCodigoIN,0)},c2v:function(){gx.O.AV41NCMCodigoIN=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNCMCODIGOIN",".")},nac:gx.falseFn};n[51]={lvl:0,type:"int",len:5,dec:0,sign:!1,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOID",gxz:"ZV33ProdutoCodigoId",gxold:"OV33ProdutoCodigoId",gxvar:"AV33ProdutoCodigoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV33ProdutoCodigoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV33ProdutoCodigoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOID",gx.O.AV33ProdutoCodigoId,0)},c2v:function(){gx.O.AV33ProdutoCodigoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOID",".")},nac:gx.falseFn};n[52]={lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOID",gxz:"ZV30SubGrupoProdutoId",gxold:"OV30SubGrupoProdutoId",gxvar:"AV30SubGrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV30SubGrupoProdutoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV30SubGrupoProdutoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOID",gx.O.AV30SubGrupoProdutoId,0)},c2v:function(){gx.O.AV30SubGrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOPRODUTOID",".")},nac:gx.falseFn};n[53]={lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTOID",gxz:"ZV31GrupoProdutoId",gxold:"OV31GrupoProdutoId",gxvar:"AV31GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV31GrupoProdutoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV31GrupoProdutoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOID",gx.O.AV31GrupoProdutoId,0)},c2v:function(){gx.O.AV31GrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRODUTOID",".")},nac:gx.falseFn};n[54]={lvl:0,type:"svchar",len:20,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV37ProdutoReferencia",gxold:"OV37ProdutoReferencia",gxvar:"AV37ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV37ProdutoReferencia=n},v2z:function(n){gx.O.ZV37ProdutoReferencia=n},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV37ProdutoReferencia,0)},c2v:function(){gx.O.AV37ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};n[55]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDFILTRO",gxz:"ZV27FilialIdFiltro",gxold:"OV27FilialIdFiltro",gxvar:"AV27FilialIdFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV27FilialIdFiltro=gx.num.intval(n)},v2z:function(n){gx.O.ZV27FilialIdFiltro=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vFILIALIDFILTRO",gx.O.AV27FilialIdFiltro,0)},c2v:function(){gx.O.AV27FilialIdFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDFILTRO",".")},nac:gx.falseFn};n[56]={fld:"PROMPT_PARTILHAICMSNCMCODIGO",grid:0};this.AV19PartilhaICMSUF="";this.ZV19PartilhaICMSUF="";this.OV19PartilhaICMSUF="";this.AV24PartilhaICMSProdutoId=0;this.ZV24PartilhaICMSProdutoId=0;this.OV24PartilhaICMSProdutoId=0;this.AV25PartilhaICMSProdutoDesc="";this.ZV25PartilhaICMSProdutoDesc="";this.OV25PartilhaICMSProdutoDesc="";this.AV22PartilhaICMSNCMCodigo=0;this.ZV22PartilhaICMSNCMCodigo=0;this.OV22PartilhaICMSNCMCodigo=0;this.AV23PartilhaICMSNCMDescricao="";this.ZV23PartilhaICMSNCMDescricao="";this.OV23PartilhaICMSNCMDescricao="";this.AV44PartilhaICMSOrigemCST="";this.ZV44PartilhaICMSOrigemCST="";this.OV44PartilhaICMSOrigemCST="";this.AV26PartilhaICMSSnProdComConvenio="";this.ZV26PartilhaICMSSnProdComConvenio="";this.OV26PartilhaICMSSnProdComConvenio="";this.AV28PrecoNulo=0;this.ZV28PrecoNulo=0;this.OV28PrecoNulo=0;this.AV36CodigoBarrasProdutoBarra=0;this.ZV36CodigoBarrasProdutoBarra=0;this.OV36CodigoBarrasProdutoBarra=0;this.Gx_date=gx.date.nullDate();this.Gx_date=gx.date.nullDate();this.AV34IntAuxIn=0;this.ZV34IntAuxIn=0;this.OV34IntAuxIn=0;this.AV32LoteProdutoCombinacao="";this.ZV32LoteProdutoCombinacao="";this.OV32LoteProdutoCombinacao="";this.AV29ProdutoCategoria="";this.ZV29ProdutoCategoria="";this.OV29ProdutoCategoria="";this.AV35SNVenda="";this.ZV35SNVenda="";this.OV35SNVenda="";this.AV41NCMCodigoIN=0;this.ZV41NCMCodigoIN=0;this.OV41NCMCodigoIN=0;this.AV33ProdutoCodigoId=0;this.ZV33ProdutoCodigoId=0;this.OV33ProdutoCodigoId=0;this.AV30SubGrupoProdutoId=0;this.ZV30SubGrupoProdutoId=0;this.OV30SubGrupoProdutoId=0;this.AV31GrupoProdutoId=0;this.ZV31GrupoProdutoId=0;this.OV31GrupoProdutoId=0;this.AV37ProdutoReferencia="";this.ZV37ProdutoReferencia="";this.OV37ProdutoReferencia="";this.AV27FilialIdFiltro=0;this.ZV27FilialIdFiltro=0;this.OV27FilialIdFiltro=0;this.AV19PartilhaICMSUF="";this.AV24PartilhaICMSProdutoId=0;this.AV25PartilhaICMSProdutoDesc="";this.AV22PartilhaICMSNCMCodigo=0;this.AV23PartilhaICMSNCMDescricao="";this.AV44PartilhaICMSOrigemCST="";this.AV26PartilhaICMSSnProdComConvenio="";this.AV28PrecoNulo=0;this.AV36CodigoBarrasProdutoBarra=0;this.Gx_date=gx.date.nullDate();this.AV34IntAuxIn=0;this.AV32LoteProdutoCombinacao="";this.AV29ProdutoCategoria="";this.AV35SNVenda="";this.AV41NCMCodigoIN=0;this.AV33ProdutoCodigoId=0;this.AV30SubGrupoProdutoId=0;this.AV31GrupoProdutoId=0;this.AV37ProdutoReferencia="";this.AV27FilialIdFiltro=0;this.AV21PartilhaICMSEmpresaId="";this.AV39PartilhaICMSUFParm="";this.AV40PartilhaICMSSequenciaParm=0;this.A2965ProdutoId=0;this.A2964ProdutoEmpresaId="";this.A2961ProdutoDescricaoResumida="";this.A2979NCMCodigo=0;this.A2976NCMDescricao="";this.A9562PartilhaICMSSequencia=0;this.A9561PartilhaICMSUF="";this.A9560PartilhaICMSEmpresaId="";this.A10670PartilhaICMSNCMCodigo=0;this.A10694PartilhaICMSNCMDescricao="";this.A9564PartilhaICMSProdutoId=0;this.A9594PartilhaICMSProdutoDesc="";this.A11890PartilhaICMSSnProdComConvenio="";this.A11891PartilhaICMSOrigemCST="";this.A9563PartilhaICMSProdutoEmpresaId="";this.Events={e122i82_client:["ENTER",!0],e132i82_client:["VPARTILHAICMSNCMCODIGO.ISVALID",!0],e142i82_client:["VPARTILHAICMSPRODUTOID.ISVALID",!0],e162i81_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[],[]];this.EvtParms.ENTER=[[{av:"AV43TpErro",fld:"vTPERRO"},{av:"AV21PartilhaICMSEmpresaId",fld:"vPARTILHAICMSEMPRESAID",hsh:!0},{av:"AV38ProdutoEmpresaId",fld:"vPRODUTOEMPRESAID"},{av:"AV39PartilhaICMSUFParm",fld:"vPARTILHAICMSUFPARM",hsh:!0},{av:"AV40PartilhaICMSSequenciaParm",fld:"vPARTILHAICMSSEQUENCIAPARM",hsh:!0},{av:"AV19PartilhaICMSUF",fld:"vPARTILHAICMSUF"},{av:"AV22PartilhaICMSNCMCodigo",fld:"vPARTILHAICMSNCMCODIGO"},{av:"AV24PartilhaICMSProdutoId",fld:"vPARTILHAICMSPRODUTOID"},{av:"AV26PartilhaICMSSnProdComConvenio",fld:"vPARTILHAICMSSNPRODCOMCONVENIO"},{av:"AV44PartilhaICMSOrigemCST",fld:"vPARTILHAICMSORIGEMCST"},{av:"A2964ProdutoEmpresaId",fld:"PRODUTOEMPRESAID"},{av:"A2965ProdutoId",fld:"PRODUTOID"},{av:"A2979NCMCodigo",fld:"NCMCODIGO"}],[{av:"AV43TpErro",fld:"vTPERRO"},{av:"AV51GXLvl64",fld:"vGXLVL64"},{av:"AV52GXLvl77",fld:"vGXLVL77"}]];this.EvtParms["VPARTILHAICMSNCMCODIGO.ISVALID"]=[[{av:"A2979NCMCodigo",fld:"NCMCODIGO"},{av:"AV22PartilhaICMSNCMCodigo",fld:"vPARTILHAICMSNCMCODIGO"},{av:"A2976NCMDescricao",fld:"NCMDESCRICAO"}],[{av:"AV23PartilhaICMSNCMDescricao",fld:"vPARTILHAICMSNCMDESCRICAO"}]];this.EvtParms["VPARTILHAICMSPRODUTOID.ISVALID"]=[[{av:"A2964ProdutoEmpresaId",fld:"PRODUTOEMPRESAID"},{av:"AV38ProdutoEmpresaId",fld:"vPRODUTOEMPRESAID"},{av:"A2965ProdutoId",fld:"PRODUTOID"},{av:"AV24PartilhaICMSProdutoId",fld:"vPARTILHAICMSPRODUTOID"},{av:"A2961ProdutoDescricaoResumida",fld:"PRODUTODESCRICAORESUMIDA"}],[{av:"AV25PartilhaICMSProdutoDesc",fld:"vPARTILHAICMSPRODUTODESC"}]];this.setPrompt("PROMPTPROD",[15,53,52,51,47,54,44]);this.setPrompt("PROMPT_PARTILHAICMSNCMCODIGO",[22]);this.EnterCtrl=["BUTTON1"];this.setVCMap("AV21PartilhaICMSEmpresaId","vPARTILHAICMSEMPRESAID",0,"char");this.setVCMap("AV39PartilhaICMSUFParm","vPARTILHAICMSUFPARM",0,"char");this.setVCMap("AV40PartilhaICMSSequenciaParm","vPARTILHAICMSSEQUENCIAPARM",0,"int");this.InitStandaloneVars()});gx.setParentObj(new hduplicarpartilhaicms)