/**@preserve  GeneXus Java 10_3_12-110051 on February 8, 2021 23:5:15.70
*/
gx.evt.autoSkip=!1;gx.define("hcadastratipoconcretotraco",!1,function(){this.ServerClass="hcadastratipoconcretotraco";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV45ClassificacaoEstEmpresaId=gx.fn.getControlValue("vCLASSIFICACAOESTEMPRESAID");this.AV47ClaProdutoCPC=gx.fn.getControlValue("vCLAPRODUTOCPC");this.AV41TipoConcretoEmpresaId=gx.fn.getControlValue("vTIPOCONCRETOEMPRESAID");this.AV43TipoConcretoCodigo=gx.fn.getIntegerValue("vTIPOCONCRETOCODIGO",".");this.AV42TipoConcretoDescricao=gx.fn.getControlValue("vTIPOCONCRETODESCRICAO");this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Validv_Tipoconcretotracoprodutoid=function(){try{var n=gx.util.balloon.getNew("vTIPOCONCRETOTRACOPRODUTOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Gx_date=function(){try{var n=gx.util.balloon.getNew("vTODAY");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.s142_client=function(){this.AV36TipoConcretoTracoProdutoId=gx.num.trunc(0,0);this.AV37TipoConcretoTracoProdutoDesc="";this.AV39TipoConcretoTracoQtdeContabil=0;this.AV38TipoConcretoTracoQtdeReal=0;this.AV40TipoConcretoTracoVlrClassific="";this.AV49TipoConcretoTracoUsuarioAlt="";this.AV50TipoConcretoTracoDataHoraAlt=""};this.e122er2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e132er2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e152er2_client=function(){this.executeServerEvent("VTIPOCONCRETOTRACOQTDEREAL.ISVALID",!0,null,!1,!0)};this.e162er2_client=function(){this.executeServerEvent("VTIPOCONCRETOTRACOPRODUTOID.ISVALID",!0,null,!1,!0)};this.e182er2_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[3,6,9,12,14,17,19,20,21,24,26,29,31,32,35,37,40,43,45,47,56,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,75];this.GXLastCtrlId=75;n[3]={fld:"TABLE1",grid:0};n[6]={fld:"TABLE2",grid:0};n[9]={fld:"TABLE3",grid:0};n[12]={fld:"TEXTBLOCK2",format:0,grid:0};n[14]={lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONCRETOTRACOSEQUENCIA",gxz:"ZV35TipoConcretoTracoSequencia",gxold:"OV35TipoConcretoTracoSequencia",gxvar:"AV35TipoConcretoTracoSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV35TipoConcretoTracoSequencia=gx.num.intval(n)},v2z:function(n){gx.O.ZV35TipoConcretoTracoSequencia=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vTIPOCONCRETOTRACOSEQUENCIA",gx.O.AV35TipoConcretoTracoSequencia,0)},c2v:function(){gx.O.AV35TipoConcretoTracoSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONCRETOTRACOSEQUENCIA",".")},nac:gx.falseFn};n[17]={fld:"TEXTBLOCK3",format:0,grid:0};n[19]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipoconcretotracoprodutoid,isvalid:"e162er2_client",rgrid:[],fld:"vTIPOCONCRETOTRACOPRODUTOID",gxz:"ZV36TipoConcretoTracoProdutoId",gxold:"OV36TipoConcretoTracoProdutoId",gxvar:"AV36TipoConcretoTracoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV36TipoConcretoTracoProdutoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV36TipoConcretoTracoProdutoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vTIPOCONCRETOTRACOPRODUTOID",gx.O.AV36TipoConcretoTracoProdutoId,0)},c2v:function(){gx.O.AV36TipoConcretoTracoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONCRETOTRACOPRODUTOID",".")},nac:gx.falseFn};n[20]={fld:"PROMPTPROD",grid:0};n[21]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONCRETOTRACOPRODUTODESC",gxz:"ZV37TipoConcretoTracoProdutoDesc",gxold:"OV37TipoConcretoTracoProdutoDesc",gxvar:"AV37TipoConcretoTracoProdutoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV37TipoConcretoTracoProdutoDesc=n},v2z:function(n){gx.O.ZV37TipoConcretoTracoProdutoDesc=n},v2c:function(){gx.fn.setControlValue("vTIPOCONCRETOTRACOPRODUTODESC",gx.O.AV37TipoConcretoTracoProdutoDesc,0)},c2v:function(){gx.O.AV37TipoConcretoTracoProdutoDesc=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONCRETOTRACOPRODUTODESC")},nac:gx.falseFn};n[24]={fld:"TEXTBLOCK5",format:0,grid:0};n[26]={lvl:0,type:"decimal",len:8,dec:2,sign:!1,pic:"ZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:"e152er2_client",rgrid:[],fld:"vTIPOCONCRETOTRACOQTDEREAL",gxz:"ZV38TipoConcretoTracoQtdeReal",gxold:"OV38TipoConcretoTracoQtdeReal",gxvar:"AV38TipoConcretoTracoQtdeReal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV38TipoConcretoTracoQtdeReal=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV38TipoConcretoTracoQtdeReal=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vTIPOCONCRETOTRACOQTDEREAL",gx.O.AV38TipoConcretoTracoQtdeReal,2,",")},c2v:function(){gx.O.AV38TipoConcretoTracoQtdeReal=this.val()},val:function(){return gx.fn.getDecimalValue("vTIPOCONCRETOTRACOQTDEREAL",".",",")},nac:gx.falseFn};n[29]={fld:"TEXTBLOCK4",format:0,grid:0};n[31]={lvl:0,type:"decimal",len:8,dec:2,sign:!1,pic:"ZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONCRETOTRACOQTDECONTABIL",gxz:"ZV39TipoConcretoTracoQtdeContabil",gxold:"OV39TipoConcretoTracoQtdeContabil",gxvar:"AV39TipoConcretoTracoQtdeContabil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV39TipoConcretoTracoQtdeContabil=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV39TipoConcretoTracoQtdeContabil=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vTIPOCONCRETOTRACOQTDECONTABIL",gx.O.AV39TipoConcretoTracoQtdeContabil,2,",")},c2v:function(){gx.O.AV39TipoConcretoTracoQtdeContabil=this.val()},val:function(){return gx.fn.getDecimalValue("vTIPOCONCRETOTRACOQTDECONTABIL",".",",")},nac:gx.falseFn};n[32]={fld:"TABLE5",grid:0};n[35]={fld:"TXTCLASSIFICACAO",format:0,grid:0};n[37]={lvl:0,type:"char",len:15,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONCRETOTRACOVLRCLASSIFIC",gxz:"ZV40TipoConcretoTracoVlrClassific",gxold:"OV40TipoConcretoTracoVlrClassific",gxvar:"AV40TipoConcretoTracoVlrClassific",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(n){gx.O.AV40TipoConcretoTracoVlrClassific=n},v2z:function(n){gx.O.ZV40TipoConcretoTracoVlrClassific=n},v2c:function(){gx.fn.setComboBoxValue("vTIPOCONCRETOTRACOVLRCLASSIFIC",gx.O.AV40TipoConcretoTracoVlrClassific)},c2v:function(){gx.O.AV40TipoConcretoTracoVlrClassific=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONCRETOTRACOVLRCLASSIFIC")},nac:gx.falseFn};n[40]={fld:"TABLE4",grid:0};n[43]={fld:"TEXTBLOCK1",format:0,grid:0};n[45]={lvl:0,type:"char",len:12,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONCRETOTRACOUSUARIOALT",gxz:"ZV49TipoConcretoTracoUsuarioAlt",gxold:"OV49TipoConcretoTracoUsuarioAlt",gxvar:"AV49TipoConcretoTracoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV49TipoConcretoTracoUsuarioAlt=n},v2z:function(n){gx.O.ZV49TipoConcretoTracoUsuarioAlt=n},v2c:function(){gx.fn.setControlValue("vTIPOCONCRETOTRACOUSUARIOALT",gx.O.AV49TipoConcretoTracoUsuarioAlt,0)},c2v:function(){gx.O.AV49TipoConcretoTracoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONCRETOTRACOUSUARIOALT")},nac:gx.falseFn};n[47]={lvl:0,type:"dtime",len:10,dec:5,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONCRETOTRACODATAHORAALT",gxz:"ZV50TipoConcretoTracoDataHoraAlt",gxold:"OV50TipoConcretoTracoDataHoraAlt",gxvar:"AV50TipoConcretoTracoDataHoraAlt",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV50TipoConcretoTracoDataHoraAlt=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV50TipoConcretoTracoDataHoraAlt=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vTIPOCONCRETOTRACODATAHORAALT",gx.O.AV50TipoConcretoTracoDataHoraAlt,0)},c2v:function(){gx.O.AV50TipoConcretoTracoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vTIPOCONCRETOTRACODATAHORAALT")},nac:gx.falseFn};n[56]={fld:"TABINVISIVEL",grid:0};n[59]={lvl:0,type:"svchar",len:20,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREFENCIAPRODUTO",gxz:"ZV22RefenciaProduto",gxold:"OV22RefenciaProduto",gxvar:"AV22RefenciaProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV22RefenciaProduto=n},v2z:function(n){gx.O.ZV22RefenciaProduto=n},v2c:function(){gx.fn.setControlValue("vREFENCIAPRODUTO",gx.O.AV22RefenciaProduto,0)},c2v:function(){gx.O.AV22RefenciaProduto=this.val()},val:function(){return gx.fn.getControlValue("vREFENCIAPRODUTO")},nac:gx.falseFn};n[60]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV23SNVenda",gxold:"OV23SNVenda",gxvar:"AV23SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV23SNVenda=n},v2z:function(n){gx.O.ZV23SNVenda=n},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV23SNVenda,0)},c2v:function(){gx.O.AV23SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};n[61]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUXIN",gxz:"ZV24IntAuxIn",gxold:"OV24IntAuxIn",gxvar:"AV24IntAuxIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV24IntAuxIn=gx.num.intval(n)},v2z:function(n){gx.O.ZV24IntAuxIn=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vINTAUXIN",gx.O.AV24IntAuxIn,0)},c2v:function(){gx.O.AV24IntAuxIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUXIN",".")},nac:gx.falseFn};n[62]={lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOBARRA",gxz:"ZV25CodigoBarrasProdutoBarra",gxold:"OV25CodigoBarrasProdutoBarra",gxvar:"AV25CodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV25CodigoBarrasProdutoBarra=gx.num.intval(n)},v2z:function(n){gx.O.ZV25CodigoBarrasProdutoBarra=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTOBARRA",gx.O.AV25CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.AV25CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRA",".")},nac:gx.falseFn};n[63]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDFILTRO",gxz:"ZV26FilialIdFiltro",gxold:"OV26FilialIdFiltro",gxvar:"AV26FilialIdFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV26FilialIdFiltro=gx.num.intval(n)},v2z:function(n){gx.O.ZV26FilialIdFiltro=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vFILIALIDFILTRO",gx.O.AV26FilialIdFiltro,0)},c2v:function(){gx.O.AV26FilialIdFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDFILTRO",".")},nac:gx.falseFn};n[64]={lvl:0,type:"date",len:8,dec:0,sign:!0,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Gx_date,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.Gx_date=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.Gx_date=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};n[65]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECONULO",gxz:"ZV27PrecoNulo",gxold:"OV27PrecoNulo",gxvar:"AV27PrecoNulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV27PrecoNulo=gx.num.intval(n)},v2z:function(n){gx.O.ZV27PrecoNulo=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPRECONULO",gx.O.AV27PrecoNulo,0)},c2v:function(){gx.O.AV27PrecoNulo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECONULO",".")},nac:gx.falseFn};n[66]={lvl:0,type:"char",len:2,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCATEGORIA",gxz:"ZV28ProdutoCategoria",gxold:"OV28ProdutoCategoria",gxvar:"AV28ProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV28ProdutoCategoria=n},v2z:function(n){gx.O.ZV28ProdutoCategoria=n},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOCATEGORIA",gx.O.AV28ProdutoCategoria)},c2v:function(){gx.O.AV28ProdutoCategoria=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCATEGORIA")},nac:gx.falseFn};n[67]={lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV29AcessoSistemaSequencia",gxold:"OV29AcessoSistemaSequencia",gxvar:"AV29AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV29AcessoSistemaSequencia=gx.num.intval(n)},v2z:function(n){gx.O.ZV29AcessoSistemaSequencia=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV29AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV29AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",".")},nac:gx.falseFn};n[68]={lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTOID",gxz:"ZV30GrupoProdutoId",gxold:"OV30GrupoProdutoId",gxvar:"AV30GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV30GrupoProdutoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV30GrupoProdutoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOID",gx.O.AV30GrupoProdutoId,0)},c2v:function(){gx.O.AV30GrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRODUTOID",".")},nac:gx.falseFn};n[69]={lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECHAR",gxz:"ZV31QtdeChar",gxold:"OV31QtdeChar",gxvar:"AV31QtdeChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV31QtdeChar=gx.num.intval(n)},v2z:function(n){gx.O.ZV31QtdeChar=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vQTDECHAR",gx.O.AV31QtdeChar,0)},c2v:function(){gx.O.AV31QtdeChar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECHAR",".")},nac:gx.falseFn};n[70]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV6EmpresaPadrao",gxold:"OV6EmpresaPadrao",gxvar:"AV6EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6EmpresaPadrao=n},v2z:function(n){gx.O.ZV6EmpresaPadrao=n},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV6EmpresaPadrao,0)},c2v:function(){gx.O.AV6EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};n[71]={lvl:0,type:"int",len:5,dec:0,sign:!1,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOID",gxz:"ZV32ProdutoCodigoId",gxold:"OV32ProdutoCodigoId",gxvar:"AV32ProdutoCodigoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV32ProdutoCodigoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV32ProdutoCodigoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOID",gx.O.AV32ProdutoCodigoId,0)},c2v:function(){gx.O.AV32ProdutoCodigoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOID",".")},nac:gx.falseFn};n[72]={lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOID",gxz:"ZV33SubGrupoProdutoId",gxold:"OV33SubGrupoProdutoId",gxvar:"AV33SubGrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV33SubGrupoProdutoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV33SubGrupoProdutoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOID",gx.O.AV33SubGrupoProdutoId,0)},c2v:function(){gx.O.AV33SubGrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOPRODUTOID",".")},nac:gx.falseFn};n[73]={lvl:0,type:"char",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAO",gxz:"ZV34LoteProdutoCombinacao",gxold:"OV34LoteProdutoCombinacao",gxvar:"AV34LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV34LoteProdutoCombinacao=n},v2z:function(n){gx.O.ZV34LoteProdutoCombinacao=n},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAO",gx.O.AV34LoteProdutoCombinacao,0)},c2v:function(){gx.O.AV34LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};n[75]={fld:"BTNHELP",grid:0};this.AV35TipoConcretoTracoSequencia=0;this.ZV35TipoConcretoTracoSequencia=0;this.OV35TipoConcretoTracoSequencia=0;this.AV36TipoConcretoTracoProdutoId=0;this.ZV36TipoConcretoTracoProdutoId=0;this.OV36TipoConcretoTracoProdutoId=0;this.AV37TipoConcretoTracoProdutoDesc="";this.ZV37TipoConcretoTracoProdutoDesc="";this.OV37TipoConcretoTracoProdutoDesc="";this.AV38TipoConcretoTracoQtdeReal=0;this.ZV38TipoConcretoTracoQtdeReal=0;this.OV38TipoConcretoTracoQtdeReal=0;this.AV39TipoConcretoTracoQtdeContabil=0;this.ZV39TipoConcretoTracoQtdeContabil=0;this.OV39TipoConcretoTracoQtdeContabil=0;this.AV40TipoConcretoTracoVlrClassific="";this.ZV40TipoConcretoTracoVlrClassific="";this.OV40TipoConcretoTracoVlrClassific="";this.AV49TipoConcretoTracoUsuarioAlt="";this.ZV49TipoConcretoTracoUsuarioAlt="";this.OV49TipoConcretoTracoUsuarioAlt="";this.AV50TipoConcretoTracoDataHoraAlt=gx.date.nullDate();this.ZV50TipoConcretoTracoDataHoraAlt=gx.date.nullDate();this.OV50TipoConcretoTracoDataHoraAlt=gx.date.nullDate();this.AV22RefenciaProduto="";this.ZV22RefenciaProduto="";this.OV22RefenciaProduto="";this.AV23SNVenda="";this.ZV23SNVenda="";this.OV23SNVenda="";this.AV24IntAuxIn=0;this.ZV24IntAuxIn=0;this.OV24IntAuxIn=0;this.AV25CodigoBarrasProdutoBarra=0;this.ZV25CodigoBarrasProdutoBarra=0;this.OV25CodigoBarrasProdutoBarra=0;this.AV26FilialIdFiltro=0;this.ZV26FilialIdFiltro=0;this.OV26FilialIdFiltro=0;this.Gx_date=gx.date.nullDate();this.Gx_date=gx.date.nullDate();this.AV27PrecoNulo=0;this.ZV27PrecoNulo=0;this.OV27PrecoNulo=0;this.AV28ProdutoCategoria="";this.ZV28ProdutoCategoria="";this.OV28ProdutoCategoria="";this.AV29AcessoSistemaSequencia=0;this.ZV29AcessoSistemaSequencia=0;this.OV29AcessoSistemaSequencia=0;this.AV30GrupoProdutoId=0;this.ZV30GrupoProdutoId=0;this.OV30GrupoProdutoId=0;this.AV31QtdeChar=0;this.ZV31QtdeChar=0;this.OV31QtdeChar=0;this.AV6EmpresaPadrao="";this.ZV6EmpresaPadrao="";this.OV6EmpresaPadrao="";this.AV32ProdutoCodigoId=0;this.ZV32ProdutoCodigoId=0;this.OV32ProdutoCodigoId=0;this.AV33SubGrupoProdutoId=0;this.ZV33SubGrupoProdutoId=0;this.OV33SubGrupoProdutoId=0;this.AV34LoteProdutoCombinacao="";this.ZV34LoteProdutoCombinacao="";this.OV34LoteProdutoCombinacao="";this.AV35TipoConcretoTracoSequencia=0;this.AV36TipoConcretoTracoProdutoId=0;this.AV37TipoConcretoTracoProdutoDesc="";this.AV38TipoConcretoTracoQtdeReal=0;this.AV39TipoConcretoTracoQtdeContabil=0;this.AV40TipoConcretoTracoVlrClassific="";this.AV49TipoConcretoTracoUsuarioAlt="";this.AV50TipoConcretoTracoDataHoraAlt=gx.date.nullDate();this.AV22RefenciaProduto="";this.AV23SNVenda="";this.AV24IntAuxIn=0;this.AV25CodigoBarrasProdutoBarra=0;this.AV26FilialIdFiltro=0;this.Gx_date=gx.date.nullDate();this.AV27PrecoNulo=0;this.AV28ProdutoCategoria="";this.AV29AcessoSistemaSequencia=0;this.AV30GrupoProdutoId=0;this.AV31QtdeChar=0;this.AV6EmpresaPadrao="";this.AV32ProdutoCodigoId=0;this.AV33SubGrupoProdutoId=0;this.AV34LoteProdutoCombinacao="";this.AV41TipoConcretoEmpresaId="";this.AV43TipoConcretoCodigo=0;this.AV42TipoConcretoDescricao="";this.A2965ProdutoId=0;this.A2964ProdutoEmpresaId="";this.A11333TipoConcretoTracoSequencia=0;this.A11321TipoConcretoCodigo=0;this.A11449TipoConcretoEmpresaId="";this.A11335TipoConcretoTracoProdutoId=0;this.A11404TipoConcretoTracoProdutoDesc="";this.A11440TipoConcretoTracoQtdeContabil=0;this.A11402TipoConcretoTracoQtdeReal=0;this.A11403TipoConcretoTracoVlrClassific="";this.A11437TipoConcretoTracoUsuarioAlt="";this.A11438TipoConcretoTracoDataHoraAlt=gx.date.nullDate();this.A11334TipoConcretoTracoProdutoEmpId="";this.Gx_mode="";this.Events={e122er2_client:["'FECHAR'",!0],e132er2_client:["ENTER",!0],e152er2_client:["VTIPOCONCRETOTRACOQTDEREAL.ISVALID",!0],e162er2_client:["VTIPOCONCRETOTRACOPRODUTOID.ISVALID",!0],e182er2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",hsh:!0},{av:"AV47ClaProdutoCPC",fld:"vCLAPRODUTOCPC"}],[{av:'gx.fn.getCtrlProperty("vTIPOCONCRETOTRACOPRODUTOID","Enabled")',ctrl:"vTIPOCONCRETOTRACOPRODUTOID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vTIPOCONCRETOTRACOQTDECONTABIL","Enabled")',ctrl:"vTIPOCONCRETOTRACOQTDECONTABIL",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vTIPOCONCRETOTRACOQTDEREAL","Enabled")',ctrl:"vTIPOCONCRETOTRACOQTDEREAL",prop:"Enabled"},{ctrl:"vTIPOCONCRETOTRACOVLRCLASSIFIC"},{ctrl:"BUTTON1",prop:"Visible"},{ctrl:"BUTTON2",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PROMPTPROD","Visible")',ctrl:"PROMPTPROD",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TABLE5","Visible")',ctrl:"TABLE5",prop:"Visible"}]];this.EvtParms["'FECHAR'"]=[[{av:"AV29AcessoSistemaSequencia",fld:"vACESSOSISTEMASEQUENCIA"},{av:"AV41TipoConcretoEmpresaId",fld:"vTIPOCONCRETOEMPRESAID",hsh:!0},{av:"AV43TipoConcretoCodigo",fld:"vTIPOCONCRETOCODIGO",hsh:!0},{av:"AV42TipoConcretoDescricao",fld:"vTIPOCONCRETODESCRICAO",hsh:!0}],[]];this.EvtParms.ENTER=[[{av:"AV41TipoConcretoEmpresaId",fld:"vTIPOCONCRETOEMPRESAID",hsh:!0},{av:"AV43TipoConcretoCodigo",fld:"vTIPOCONCRETOCODIGO",hsh:!0},{av:"AV35TipoConcretoTracoSequencia",fld:"vTIPOCONCRETOTRACOSEQUENCIA",hsh:!0},{av:"AV36TipoConcretoTracoProdutoId",fld:"vTIPOCONCRETOTRACOPRODUTOID"},{av:"AV38TipoConcretoTracoQtdeReal",fld:"vTIPOCONCRETOTRACOQTDEREAL"},{av:"AV39TipoConcretoTracoQtdeContabil",fld:"vTIPOCONCRETOTRACOQTDECONTABIL"},{av:"AV40TipoConcretoTracoVlrClassific",fld:"vTIPOCONCRETOTRACOVLRCLASSIFIC"},{av:"Gx_mode",fld:"vMODE",hsh:!0},{av:"A2964ProdutoEmpresaId",fld:"PRODUTOEMPRESAID"},{av:"AV44ProdutoEmpresaId",fld:"vPRODUTOEMPRESAID"},{av:"A2965ProdutoId",fld:"PRODUTOID"},{av:"AV19SNErro",fld:"vSNERRO"},{av:"AV47ClaProdutoCPC",fld:"vCLAPRODUTOCPC"},{av:"AV29AcessoSistemaSequencia",fld:"vACESSOSISTEMASEQUENCIA"},{av:"AV42TipoConcretoDescricao",fld:"vTIPOCONCRETODESCRICAO",hsh:!0}],[{av:"AV19SNErro",fld:"vSNERRO"},{av:"Gx_mode",fld:"vMODE",hsh:!0},{av:"AV40TipoConcretoTracoVlrClassific",fld:"vTIPOCONCRETOTRACOVLRCLASSIFIC"},{av:"AV39TipoConcretoTracoQtdeContabil",fld:"vTIPOCONCRETOTRACOQTDECONTABIL"},{av:"AV38TipoConcretoTracoQtdeReal",fld:"vTIPOCONCRETOTRACOQTDEREAL"},{av:"AV36TipoConcretoTracoProdutoId",fld:"vTIPOCONCRETOTRACOPRODUTOID"},{av:"AV35TipoConcretoTracoSequencia",fld:"vTIPOCONCRETOTRACOSEQUENCIA",hsh:!0},{av:"AV43TipoConcretoCodigo",fld:"vTIPOCONCRETOCODIGO",hsh:!0},{av:"AV41TipoConcretoEmpresaId",fld:"vTIPOCONCRETOEMPRESAID",hsh:!0},{av:"AV61GXLvl94",fld:"vGXLVL94"},{av:"AV37TipoConcretoTracoProdutoDesc",fld:"vTIPOCONCRETOTRACOPRODUTODESC"},{av:"AV49TipoConcretoTracoUsuarioAlt",fld:"vTIPOCONCRETOTRACOUSUARIOALT"},{av:"AV50TipoConcretoTracoDataHoraAlt",fld:"vTIPOCONCRETOTRACODATAHORAALT"},{av:"AV53ValorParametro",fld:"vVALORPARAMETRO"},{av:"AV48FatorQtdeContabil",fld:"vFATORQTDECONTABIL"}]];this.EvtParms["VTIPOCONCRETOTRACOQTDEREAL.ISVALID"]=[[{av:"AV39TipoConcretoTracoQtdeContabil",fld:"vTIPOCONCRETOTRACOQTDECONTABIL"},{av:"AV38TipoConcretoTracoQtdeReal",fld:"vTIPOCONCRETOTRACOQTDEREAL"}],[{av:"AV53ValorParametro",fld:"vVALORPARAMETRO"},{av:"AV48FatorQtdeContabil",fld:"vFATORQTDECONTABIL"},{av:"AV39TipoConcretoTracoQtdeContabil",fld:"vTIPOCONCRETOTRACOQTDECONTABIL"}]];this.EvtParms["VTIPOCONCRETOTRACOPRODUTOID.ISVALID"]=[[{av:"AV44ProdutoEmpresaId",fld:"vPRODUTOEMPRESAID"},{av:"AV36TipoConcretoTracoProdutoId",fld:"vTIPOCONCRETOTRACOPRODUTOID"}],[{av:"AV37TipoConcretoTracoProdutoDesc",fld:"vTIPOCONCRETOTRACOPRODUTODESC"}]];this.setPrompt("PROMPTPROD",[19,68,72,71,73,59,62]);this.EnterCtrl=["BUTTON1"];this.setVCMap("AV45ClassificacaoEstEmpresaId","vCLASSIFICACAOESTEMPRESAID",0,"char");this.setVCMap("AV47ClaProdutoCPC","vCLAPRODUTOCPC",0,"svchar");this.setVCMap("AV41TipoConcretoEmpresaId","vTIPOCONCRETOEMPRESAID",0,"char");this.setVCMap("AV43TipoConcretoCodigo","vTIPOCONCRETOCODIGO",0,"int");this.setVCMap("AV42TipoConcretoDescricao","vTIPOCONCRETODESCRICAO",0,"svchar");this.setVCMap("Gx_mode","vMODE",0,"char");this.InitStandaloneVars()});gx.setParentObj(new hcadastratipoconcretotraco)