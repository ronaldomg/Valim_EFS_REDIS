/**@preserve  GeneXus Java 10_3_12-110051 on February 8, 2021 20:34:42.36
*/
gx.evt.autoSkip=!1;gx.define("tmateriaprima",!1,function(){this.ServerClass="tmateriaprima";this.PackageName="";this.setObjectType("trn");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("12","'FECHAR'");this.addKeyListener("20","LAST");this.addKeyListener("19","FIRST");this.addKeyListener("16","SELECT");this.addKeyListener("13","DELETE");this.addKeyListener("9","GET");this.addKeyListener("2","PROMPT");this.addKeyListener("8","NEXT");this.addKeyListener("7","PREVIOUS");this.addKeyListener("4","CHECK");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV18MateriaPrimaProdFinalId=gx.fn.getIntegerValue("vMATERIAPRIMAPRODFINALID",".");this.AV19MateriaPrimaSeq=gx.fn.getIntegerValue("vMATERIAPRIMASEQ",".");this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO");this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU");this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD");this.AV45Pgmdesc=gx.fn.getControlValue("vPGMDESC");this.AV44Pgmname=gx.fn.getControlValue("vPGMNAME");this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Materiaprimaprodfinalid=function(){return gx.ajax.validSrvEvt("dyncall","valid_Materiaprimaprodfinalid",["gx.O.A5534MateriaPrimaProdFinalId"],[["PROMPT_5533","Link"]]),!0};this.Valid_Materiaprimaseq=function(){try{var n=gx.util.balloon.getNew("MATERIAPRIMASEQ");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Materiaprimaprodfinalempid=function(){return gx.ajax.validSrvEvt("dyncall","valid_Materiaprimaprodfinalempid",["gx.O.A5533MateriaPrimaProdFinalEmpId","gx.O.A5534MateriaPrimaProdFinalId","gx.O.A5526MateriaPrimaProdFinalDesc","gx.O.AV29MateriaPrimaProdFinalDesc"],["A5526MateriaPrimaProdFinalDesc","AV29MateriaPrimaProdFinalDesc"]),!0};this.Valid_Materiaprimaprodid=function(){try{var n=gx.util.balloon.getNew("MATERIAPRIMAPRODID");if(this.AnyError=0,0==this.A5528MateriaPrimaProdId)try{n.setError("Informe a Matéria-prima");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Materiaprimaqtde=function(){try{var n=gx.util.balloon.getNew("MATERIAPRIMAQTDE");if(this.AnyError=0,0==this.A5530MateriaPrimaQtde)try{n.setError("Informe a Quantidade");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Charaux=function(){try{var n=gx.util.balloon.getNew("vCHARAUX");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Materiaprimaprodempid=function(){return gx.ajax.validSrvEvt("dyncall","valid_Materiaprimaprodempid",["gx.O.A5527MateriaPrimaProdEmpId","gx.O.A5528MateriaPrimaProdId","gx.O.A5529MateriaPrimaProdDesc"],["A5529MateriaPrimaProdDesc"]),!0};this.Valid_Materiaprimaprodfinaldesc=function(){try{var n=gx.util.balloon.getNew("MATERIAPRIMAPRODFINALDESC");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Intaux=function(){try{var n=gx.util.balloon.getNew("vINTAUX");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Gx_date=function(){try{var n=gx.util.balloon.getNew("vTODAY");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Snvenda=function(){try{var n=gx.util.balloon.getNew("vSNVENDA");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e128v2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e138v2_client=function(){this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e148v475_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e158v475_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[3,6,9,12,14,15,18,20,24,26,27,28,31,33,36,38,41,44,46,48,55,56,57,58,61,62,63,64,65,66,67,68,69,70,71,73,75];this.GXLastCtrlId=75;n[3]={fld:"TABLE1",grid:0};n[6]={fld:"TABLE2",grid:0};n[9]={fld:"TABLE3",grid:0};n[12]={fld:"TEXTBLOCK2",format:0,grid:0};n[14]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Materiaprimaprodfinalid,isvalid:null,rgrid:[],fld:"MATERIAPRIMAPRODFINALID",gxz:"Z5534MateriaPrimaProdFinalId",gxold:"O5534MateriaPrimaProdFinalId",gxvar:"A5534MateriaPrimaProdFinalId",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A5534MateriaPrimaProdFinalId=gx.num.intval(n)},v2z:function(n){gx.O.Z5534MateriaPrimaProdFinalId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("MATERIAPRIMAPRODFINALID",gx.O.A5534MateriaPrimaProdFinalId,0)},c2v:function(){gx.O.A5534MateriaPrimaProdFinalId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MATERIAPRIMAPRODFINALID",".")},nac:gx.falseFn};n[15]={lvl:0,type:"svchar",len:120,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMATERIAPRIMAPRODFINALDESC",gxz:"ZV29MateriaPrimaProdFinalDesc",gxold:"OV29MateriaPrimaProdFinalDesc",gxvar:"AV29MateriaPrimaProdFinalDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV29MateriaPrimaProdFinalDesc=n},v2z:function(n){gx.O.ZV29MateriaPrimaProdFinalDesc=n},v2c:function(){gx.fn.setControlValue("vMATERIAPRIMAPRODFINALDESC",gx.O.AV29MateriaPrimaProdFinalDesc,0)},c2v:function(){gx.O.AV29MateriaPrimaProdFinalDesc=this.val()},val:function(){return gx.fn.getControlValue("vMATERIAPRIMAPRODFINALDESC")},nac:gx.falseFn};n[18]={fld:"TEXTBLOCK5",format:0,grid:0};n[20]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Materiaprimaseq,isvalid:null,rgrid:[],fld:"MATERIAPRIMASEQ",gxz:"Z5535MateriaPrimaSeq",gxold:"O5535MateriaPrimaSeq",gxvar:"A5535MateriaPrimaSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A5535MateriaPrimaSeq=gx.num.intval(n)},v2z:function(n){gx.O.Z5535MateriaPrimaSeq=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("MATERIAPRIMASEQ",gx.O.A5535MateriaPrimaSeq,0)},c2v:function(){gx.O.A5535MateriaPrimaSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MATERIAPRIMASEQ",".")},nac:gx.falseFn};n[24]={fld:"TEXTBLOCK6",format:0,grid:0};n[26]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Materiaprimaprodid,isvalid:null,rgrid:[],fld:"MATERIAPRIMAPRODID",gxz:"Z5528MateriaPrimaProdId",gxold:"O5528MateriaPrimaProdId",gxvar:"A5528MateriaPrimaProdId",ucs:[],op:[26],ip:[26],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A5528MateriaPrimaProdId=gx.num.intval(n)},v2z:function(n){gx.O.Z5528MateriaPrimaProdId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("MATERIAPRIMAPRODID",gx.O.A5528MateriaPrimaProdId,0)},c2v:function(){gx.O.A5528MateriaPrimaProdId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MATERIAPRIMAPRODID",".")},nac:gx.falseFn};n[27]={fld:"PROMPTPROD",grid:0};n[28]={lvl:0,type:"svchar",len:120,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MATERIAPRIMAPRODDESC",gxz:"Z5529MateriaPrimaProdDesc",gxold:"O5529MateriaPrimaProdDesc",gxvar:"A5529MateriaPrimaProdDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A5529MateriaPrimaProdDesc=n},v2z:function(n){gx.O.Z5529MateriaPrimaProdDesc=n},v2c:function(){gx.fn.setControlValue("MATERIAPRIMAPRODDESC",gx.O.A5529MateriaPrimaProdDesc,0)},c2v:function(){gx.O.A5529MateriaPrimaProdDesc=this.val()},val:function(){return gx.fn.getControlValue("MATERIAPRIMAPRODDESC")},nac:gx.falseFn};n[31]={fld:"TEXTBLOCK9",format:0,grid:0};n[33]={lvl:0,type:"decimal",len:16,dec:6,sign:!1,pic:"ZZZ,ZZZ,ZZ9.999999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Materiaprimaqtde,isvalid:null,rgrid:[],fld:"MATERIAPRIMAQTDE",gxz:"Z5530MateriaPrimaQtde",gxold:"O5530MateriaPrimaQtde",gxvar:"A5530MateriaPrimaQtde",ucs:[],op:[33],ip:[33],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A5530MateriaPrimaQtde=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.Z5530MateriaPrimaQtde=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("MATERIAPRIMAQTDE",gx.O.A5530MateriaPrimaQtde,6,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A5530MateriaPrimaQtde=this.val()},val:function(){return gx.fn.getDecimalValue("MATERIAPRIMAQTDE",".",",")},nac:gx.falseFn};this.declareDomainHdlr(33,function(){});n[36]={fld:"VALORUNITARIO",format:0,grid:0};n[38]={lvl:0,type:"char",len:21,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECOPRODUTOVALOR",gxz:"ZV36PrecoProdutoValor",gxold:"OV36PrecoProdutoValor",gxvar:"AV36PrecoProdutoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV36PrecoProdutoValor=n},v2z:function(n){gx.O.ZV36PrecoProdutoValor=n},v2c:function(){gx.fn.setControlValue("vPRECOPRODUTOVALOR",gx.O.AV36PrecoProdutoValor,0)},c2v:function(){gx.O.AV36PrecoProdutoValor=this.val()},val:function(){return gx.fn.getControlValue("vPRECOPRODUTOVALOR")},nac:gx.falseFn};n[41]={fld:"TABLE4",grid:0};n[44]={fld:"TEXTBLOCK1",format:0,grid:0};n[46]={lvl:0,type:"char",len:12,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MATERIAPRIMAUSUARIOALT",gxz:"Z5531MateriaPrimaUsuarioAlt",gxold:"O5531MateriaPrimaUsuarioAlt",gxvar:"A5531MateriaPrimaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A5531MateriaPrimaUsuarioAlt=n},v2z:function(n){gx.O.Z5531MateriaPrimaUsuarioAlt=n},v2c:function(){gx.fn.setControlValue("MATERIAPRIMAUSUARIOALT",gx.O.A5531MateriaPrimaUsuarioAlt,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A5531MateriaPrimaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("MATERIAPRIMAUSUARIOALT")},nac:gx.falseFn};this.declareDomainHdlr(46,function(){});n[48]={lvl:0,type:"dtime",len:10,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MATERIAPRIMADATAHORAALT",gxz:"Z5532MateriaPrimaDataHoraAlt",gxold:"O5532MateriaPrimaDataHoraAlt",gxvar:"A5532MateriaPrimaDataHoraAlt",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A5532MateriaPrimaDataHoraAlt=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.Z5532MateriaPrimaDataHoraAlt=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("MATERIAPRIMADATAHORAALT",gx.O.A5532MateriaPrimaDataHoraAlt,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A5532MateriaPrimaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("MATERIAPRIMADATAHORAALT")},nac:gx.falseFn};this.declareDomainHdlr(48,function(){});n[55]={lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECHAR",gxz:"ZV28QtdeChar",gxold:"OV28QtdeChar",gxvar:"AV28QtdeChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV28QtdeChar=gx.num.intval(n)},v2z:function(n){gx.O.ZV28QtdeChar=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vQTDECHAR",gx.O.AV28QtdeChar,0)},c2v:function(){gx.O.AV28QtdeChar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECHAR",".")},nac:gx.falseFn};n[56]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODCOD",gxz:"ZV24ProdCod",gxold:"OV24ProdCod",gxvar:"AV24ProdCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV24ProdCod=gx.num.intval(n)},v2z:function(n){gx.O.ZV24ProdCod=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPRODCOD",gx.O.AV24ProdCod,0)},c2v:function(){gx.O.AV24ProdCod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODCOD",".")},nac:gx.falseFn};n[57]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOSUB",gxz:"ZV23GrupoSub",gxold:"OV23GrupoSub",gxvar:"AV23GrupoSub",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV23GrupoSub=gx.num.intval(n)},v2z:function(n){gx.O.ZV23GrupoSub=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vGRUPOSUB",gx.O.AV23GrupoSub,0)},c2v:function(){gx.O.AV23GrupoSub=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOSUB",".")},nac:gx.falseFn};n[58]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Charaux,isvalid:null,rgrid:[],fld:"vCHARAUX",gxz:"ZV22CharAux",gxold:"OV22CharAux",gxvar:"AV22CharAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV22CharAux=n},v2z:function(n){gx.O.ZV22CharAux=n},v2c:function(){gx.fn.setControlValue("vCHARAUX",gx.O.AV22CharAux,0)},c2v:function(){gx.O.AV22CharAux=this.val()},val:function(){return gx.fn.getControlValue("vCHARAUX")},nac:gx.falseFn};n[61]={lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(n)},v2z:function(n){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",".")},nac:gx.falseFn};n[62]={fld:"JS",format:2,grid:0};n[63]={lvl:0,type:"char",len:20,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAO",gxz:"ZV25LoteProdutoCombinacao",gxold:"OV25LoteProdutoCombinacao",gxvar:"AV25LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV25LoteProdutoCombinacao=n},v2z:function(n){gx.O.ZV25LoteProdutoCombinacao=n},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAO",gx.O.AV25LoteProdutoCombinacao,0)},c2v:function(){gx.O.AV25LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};n[64]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Materiaprimaprodfinalempid,isvalid:null,rgrid:[],fld:"MATERIAPRIMAPRODFINALEMPID",gxz:"Z5533MateriaPrimaProdFinalEmpId",gxold:"O5533MateriaPrimaProdFinalEmpId",gxvar:"A5533MateriaPrimaProdFinalEmpId",ucs:[],op:[15,66],ip:[15,66,14,64],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A5533MateriaPrimaProdFinalEmpId=n},v2z:function(n){gx.O.Z5533MateriaPrimaProdFinalEmpId=n},v2c:function(){gx.fn.setControlValue("MATERIAPRIMAPRODFINALEMPID",gx.O.A5533MateriaPrimaProdFinalEmpId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A5533MateriaPrimaProdFinalEmpId=this.val()},val:function(){return gx.fn.getControlValue("MATERIAPRIMAPRODFINALEMPID")},nac:gx.falseFn};this.declareDomainHdlr(64,function(){});n[65]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Materiaprimaprodempid,isvalid:null,rgrid:[],fld:"MATERIAPRIMAPRODEMPID",gxz:"Z5527MateriaPrimaProdEmpId",gxold:"O5527MateriaPrimaProdEmpId",gxvar:"A5527MateriaPrimaProdEmpId",ucs:[],op:[28],ip:[28,26,65],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A5527MateriaPrimaProdEmpId=n},v2z:function(n){gx.O.Z5527MateriaPrimaProdEmpId=n},v2c:function(){gx.fn.setControlValue("MATERIAPRIMAPRODEMPID",gx.O.A5527MateriaPrimaProdEmpId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A5527MateriaPrimaProdEmpId=this.val()},val:function(){return gx.fn.getControlValue("MATERIAPRIMAPRODEMPID")},nac:gx.falseFn};this.declareDomainHdlr(65,function(){});n[66]={lvl:0,type:"svchar",len:120,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Materiaprimaprodfinaldesc,isvalid:null,rgrid:[],fld:"MATERIAPRIMAPRODFINALDESC",gxz:"Z5526MateriaPrimaProdFinalDesc",gxold:"O5526MateriaPrimaProdFinalDesc",gxvar:"A5526MateriaPrimaProdFinalDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A5526MateriaPrimaProdFinalDesc=n},v2z:function(n){gx.O.Z5526MateriaPrimaProdFinalDesc=n},v2c:function(){gx.fn.setControlValue("MATERIAPRIMAPRODFINALDESC",gx.O.A5526MateriaPrimaProdFinalDesc,0)},c2v:function(){gx.O.A5526MateriaPrimaProdFinalDesc=this.val()},val:function(){return gx.fn.getControlValue("MATERIAPRIMAPRODFINALDESC")},nac:gx.falseFn};n[67]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Intaux,isvalid:null,rgrid:[],fld:"vINTAUX",gxz:"ZV21IntAux",gxold:"OV21IntAux",gxvar:"AV21IntAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV21IntAux=gx.num.intval(n)},v2z:function(n){gx.O.ZV21IntAux=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vINTAUX",gx.O.AV21IntAux,0)},c2v:function(){gx.O.AV21IntAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUX",".")},nac:gx.falseFn};n[68]={lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOBARRA",gxz:"ZV31CodigoBarrasProdutoBarra",gxold:"OV31CodigoBarrasProdutoBarra",gxvar:"AV31CodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV31CodigoBarrasProdutoBarra=gx.num.intval(n)},v2z:function(n){gx.O.ZV31CodigoBarrasProdutoBarra=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTOBARRA",gx.O.AV31CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.AV31CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRA",".")},nac:gx.falseFn};n[69]={lvl:0,type:"svchar",len:20,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV30ProdutoReferencia",gxold:"OV30ProdutoReferencia",gxvar:"AV30ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV30ProdutoReferencia=n},v2z:function(n){gx.O.ZV30ProdutoReferencia=n},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV30ProdutoReferencia,0)},c2v:function(){gx.O.AV30ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};n[70]={lvl:0,type:"date",len:8,dec:0,sign:!0,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Gx_date,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.Gx_date=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.Gx_date=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};n[71]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Snvenda,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV32SNVenda",gxold:"OV32SNVenda",gxvar:"AV32SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV32SNVenda=n},v2z:function(n){gx.O.ZV32SNVenda=n},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV32SNVenda,0)},c2v:function(){gx.O.AV32SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};n[73]={fld:"BTNHELP",grid:0};n[75]={fld:"PROMPT_5533",grid:475};this.A5534MateriaPrimaProdFinalId=0;this.Z5534MateriaPrimaProdFinalId=0;this.O5534MateriaPrimaProdFinalId=0;this.AV29MateriaPrimaProdFinalDesc="";this.ZV29MateriaPrimaProdFinalDesc="";this.OV29MateriaPrimaProdFinalDesc="";this.A5535MateriaPrimaSeq=0;this.Z5535MateriaPrimaSeq=0;this.O5535MateriaPrimaSeq=0;this.A5528MateriaPrimaProdId=0;this.Z5528MateriaPrimaProdId=0;this.O5528MateriaPrimaProdId=0;this.A5529MateriaPrimaProdDesc="";this.Z5529MateriaPrimaProdDesc="";this.O5529MateriaPrimaProdDesc="";this.A5530MateriaPrimaQtde=0;this.Z5530MateriaPrimaQtde=0;this.O5530MateriaPrimaQtde=0;this.AV36PrecoProdutoValor="";this.ZV36PrecoProdutoValor="";this.OV36PrecoProdutoValor="";this.A5531MateriaPrimaUsuarioAlt="";this.Z5531MateriaPrimaUsuarioAlt="";this.O5531MateriaPrimaUsuarioAlt="";this.A5532MateriaPrimaDataHoraAlt=gx.date.nullDate();this.Z5532MateriaPrimaDataHoraAlt=gx.date.nullDate();this.O5532MateriaPrimaDataHoraAlt=gx.date.nullDate();this.AV28QtdeChar=0;this.ZV28QtdeChar=0;this.OV28QtdeChar=0;this.AV24ProdCod=0;this.ZV24ProdCod=0;this.OV24ProdCod=0;this.AV23GrupoSub=0;this.ZV23GrupoSub=0;this.OV23GrupoSub=0;this.AV22CharAux="";this.ZV22CharAux="";this.OV22CharAux="";this.AV17AcessoSistemaSequencia=0;this.ZV17AcessoSistemaSequencia=0;this.OV17AcessoSistemaSequencia=0;this.AV25LoteProdutoCombinacao="";this.ZV25LoteProdutoCombinacao="";this.OV25LoteProdutoCombinacao="";this.A5533MateriaPrimaProdFinalEmpId="";this.Z5533MateriaPrimaProdFinalEmpId="";this.O5533MateriaPrimaProdFinalEmpId="";this.A5527MateriaPrimaProdEmpId="";this.Z5527MateriaPrimaProdEmpId="";this.O5527MateriaPrimaProdEmpId="";this.A5526MateriaPrimaProdFinalDesc="";this.Z5526MateriaPrimaProdFinalDesc="";this.O5526MateriaPrimaProdFinalDesc="";this.AV21IntAux=0;this.ZV21IntAux=0;this.OV21IntAux=0;this.AV31CodigoBarrasProdutoBarra=0;this.ZV31CodigoBarrasProdutoBarra=0;this.OV31CodigoBarrasProdutoBarra=0;this.AV30ProdutoReferencia="";this.ZV30ProdutoReferencia="";this.OV30ProdutoReferencia="";this.Gx_date=gx.date.nullDate();this.Gx_date=gx.date.nullDate();this.AV32SNVenda="";this.ZV32SNVenda="";this.OV32SNVenda="";this.AV7UsrCod="";this.AV10EmpresaLogadaId="";this.AV16Sistema="";this.AV44Pgmname="";this.AV45Pgmdesc="";this.AV11MsgErro="";this.AV33CustoMateria="";this.AV17AcessoSistemaSequencia=0;this.AV14Modulo="";this.AV8Logon={};this.AV13Tabela="";this.AV12EmpresaPadrao="";this.AV21IntAux=0;this.AV22CharAux="";this.AV28QtdeChar=0;this.AV32SNVenda="";this.AV26Entrada=[];this.AV27Saida=[];this.AV20SnAlterou="";this.AV18MateriaPrimaProdFinalId=0;this.AV19MateriaPrimaSeq=0;this.AV36PrecoProdutoValor="";this.A5533MateriaPrimaProdFinalEmpId="";this.A5534MateriaPrimaProdFinalId=0;this.A5535MateriaPrimaSeq=0;this.A5527MateriaPrimaProdEmpId="";this.AV29MateriaPrimaProdFinalDesc="";this.A5531MateriaPrimaUsuarioAlt="";this.A5532MateriaPrimaDataHoraAlt=gx.date.nullDate();this.Gx_date=gx.date.nullDate();this.A5526MateriaPrimaProdFinalDesc="";this.A5528MateriaPrimaProdId=0;this.A5529MateriaPrimaProdDesc="";this.A5530MateriaPrimaQtde=0;this.Gx_mode="";this.Events={e128v2_client:["'FECHAR'",!0],e138v2_client:["AFTER TRN",!0],e148v475_client:["ENTER",!0],e158v475_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"AV18MateriaPrimaProdFinalId",fld:"vMATERIAPRIMAPRODFINALID"},{av:"AV19MateriaPrimaSeq",fld:"vMATERIAPRIMASEQ"},{av:"AV36PrecoProdutoValor",fld:"vPRECOPRODUTOVALOR"},{av:"Gx_mode",fld:"vMODE"}],[]];this.EvtParms.REFRESH=[[],[]];this.EvtParms["'FECHAR'"]=[[{av:"AV17AcessoSistemaSequencia",fld:"vACESSOSISTEMASEQUENCIA"}],[]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE"},{av:"AV17AcessoSistemaSequencia",fld:"vACESSOSISTEMASEQUENCIA"}],[]];this.setPrompt("PROMPTPROD",[26]);this.setPrompt("PROMPT_5533",[64]);this.EnterCtrl=["BUTTON1"];this.setVCMap("AV18MateriaPrimaProdFinalId","vMATERIAPRIMAPRODFINALID",0,"int");this.setVCMap("AV19MateriaPrimaSeq","vMATERIAPRIMASEQ",0,"int");this.setVCMap("AV12EmpresaPadrao","vEMPRESAPADRAO",0,"char");this.setVCMap("AV20SnAlterou","vSNALTEROU",0,"char");this.setVCMap("AV7UsrCod","vUSRCOD",0,"char");this.setVCMap("AV45Pgmdesc","vPGMDESC",0,"char");this.setVCMap("AV44Pgmname","vPGMNAME",0,"char");this.setVCMap("Gx_mode","vMODE",0,"char");this.InitStandaloneVars();this.LvlOlds[475]=["O5530MateriaPrimaQtde","O5528MateriaPrimaProdId"]});gx.setParentObj(new tmateriaprima)