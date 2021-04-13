/**@preserve  GeneXus Java 10_3_12-110051 on February 13, 2021 8:1:56.23
*/
gx.evt.autoSkip=!1;gx.define("tprecopromocao",!1,function(){this.ServerClass="tprecopromocao";this.PackageName="";this.setObjectType("trn");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("12","'FECHAR'");this.addKeyListener("20","LAST");this.addKeyListener("19","FIRST");this.addKeyListener("16","SELECT");this.addKeyListener("13","DELETE");this.addKeyListener("9","GET");this.addKeyListener("2","PROMPT");this.addKeyListener("8","NEXT");this.addKeyListener("7","PREVIOUS");this.addKeyListener("4","CHECK");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV18ProdutoId=gx.fn.getIntegerValue("vPRODUTOID",".");this.AV19PrecoPromocaoSequencia=gx.fn.getIntegerValue("vPRECOPROMOCAOSEQUENCIA",".");this.AV30FilialUnica=gx.fn.getControlValue("vFILIALUNICA");this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO");this.A2964ProdutoEmpresaId=gx.fn.getControlValue("PRODUTOEMPRESAID");this.AV25PrecoPromocaoEmpId=gx.fn.getControlValue("vPRECOPROMOCAOEMPID");this.A3808PrecoPromocaoEmpId=gx.fn.getControlValue("PRECOPROMOCAOEMPID");this.AV26FilialEmpresaId=gx.fn.getControlValue("vFILIALEMPRESAID");this.A5877PrecoPromocaoFilialEmp=gx.fn.getControlValue("PRECOPROMOCAOFILIALEMP");this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU");this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD");this.AV9Erro=gx.fn.getIntegerValue("vERRO",".");this.AV38ErroQtde=gx.fn.getIntegerValue("vERROQTDE",".");this.AV36MsgErroQtde=gx.fn.getControlValue("vMSGERROQTDE");this.AV40Pgmdesc=gx.fn.getControlValue("vPGMDESC");this.AV39Pgmname=gx.fn.getControlValue("vPGMNAME");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV29Chamada=gx.fn.getControlValue("vCHAMADA");this.AV28SNPrompt=gx.fn.getControlValue("vSNPROMPT")};this.Valid_Produtoid=function(){return gx.ajax.validSrvEvt("dyncall","valid_Produtoid",["gx.O.A2964ProdutoEmpresaId","gx.O.A2965ProdutoId","gx.O.A2960ProdutoDescricao"],["A2960ProdutoDescricao"]),!0};this.Valid_Precopromocaosequencia=function(){try{var n=gx.util.balloon.getNew("PRECOPROMOCAOSEQUENCIA");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Precopromocaodatainicial=function(){try{var n=gx.util.balloon.getNew("PRECOPROMOCAODATAINICIAL");if(this.AnyError=0,new gx.date.gxdate("").compare(this.A3806PrecoPromocaoDataInicial)==0)try{n.setError("Informe a Data Inicial");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Precopromocaodatafinal=function(){try{var n=gx.util.balloon.getNew("PRECOPROMOCAODATAFINAL");if(this.AnyError=0,new gx.date.gxdate("").compare(this.A3807PrecoPromocaoDataFinal)==0)try{n.setError("Informe a Data Final");this.AnyError=gx.num.trunc(1,0)}catch(t){}if(new gx.date.gxdate(this.A3807PrecoPromocaoDataFinal).compare(this.A3806PrecoPromocaoDataInicial)<=0)try{n.setError("Data Final deve ser maior que a Data Inicial");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Precopromocaoid=function(){try{var n=gx.util.balloon.getNew("PRECOPROMOCAOID");if(this.AnyError=0,0==this.A3809PrecoPromocaoId)try{n.setError("Informe o Código do Preço");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Precopromocaofilialid=function(){try{var n=gx.util.balloon.getNew("PRECOPROMOCAOFILIALID");if(this.AnyError=0,0==this.A5878PrecoPromocaoFilialId)try{n.setError("Informe a Filial");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Precopromocaovalor=function(){try{var n=gx.util.balloon.getNew("PRECOPROMOCAOVALOR");if(this.AnyError=0,0==this.A3811PrecoPromocaoValor)try{n.setError("Informe o Valor do Produto");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Precopromocaoqtdeminima=function(){try{var n=gx.util.balloon.getNew("PRECOPROMOCAOQTDEMINIMA");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Precopromocaoqtdemaxima=function(){try{var n=gx.util.balloon.getNew("PRECOPROMOCAOQTDEMAXIMA");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e12782_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e13782_client=function(){this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e1478401_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e1578401_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[3,6,9,12,14,15,18,20,24,26,29,31,34,36,37,40,42,43,46,48,51,53,56,58,59,62,64,66,75,76,78,80,81];this.GXLastCtrlId=81;n[3]={fld:"TABLE1",grid:0};n[6]={fld:"TABLE2",grid:0};n[9]={fld:"TABLE3",grid:0};n[12]={fld:"TEXTBLOCK3",format:0,grid:0};n[14]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Produtoid,isvalid:null,rgrid:[],fld:"PRODUTOID",gxz:"Z2965ProdutoId",gxold:"O2965ProdutoId",gxvar:"A2965ProdutoId",ucs:[],op:[14,15],ip:[15,14],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A2965ProdutoId=gx.num.intval(n)},v2z:function(n){gx.O.Z2965ProdutoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("PRODUTOID",gx.O.A2965ProdutoId,0)},c2v:function(){gx.O.A2965ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PRODUTOID",".")},nac:function(){return!(0==this.AV18ProdutoId)}};n[15]={lvl:0,type:"svchar",len:120,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PRODUTODESCRICAO",gxz:"Z2960ProdutoDescricao",gxold:"O2960ProdutoDescricao",gxvar:"A2960ProdutoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A2960ProdutoDescricao=n},v2z:function(n){gx.O.Z2960ProdutoDescricao=n},v2c:function(){gx.fn.setControlValue("PRODUTODESCRICAO",gx.O.A2960ProdutoDescricao,0)},c2v:function(){gx.O.A2960ProdutoDescricao=this.val()},val:function(){return gx.fn.getControlValue("PRODUTODESCRICAO")},nac:gx.falseFn};n[18]={fld:"TEXTBLOCK4",format:0,grid:0};n[20]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Precopromocaosequencia,isvalid:null,rgrid:[],fld:"PRECOPROMOCAOSEQUENCIA",gxz:"Z3814PrecoPromocaoSequencia",gxold:"O3814PrecoPromocaoSequencia",gxvar:"A3814PrecoPromocaoSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A3814PrecoPromocaoSequencia=gx.num.intval(n)},v2z:function(n){gx.O.Z3814PrecoPromocaoSequencia=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("PRECOPROMOCAOSEQUENCIA",gx.O.A3814PrecoPromocaoSequencia,0)},c2v:function(){gx.O.A3814PrecoPromocaoSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PRECOPROMOCAOSEQUENCIA",".")},nac:gx.falseFn};n[24]={fld:"TEXTBLOCK5",format:0,grid:0};n[26]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precopromocaodatainicial,isvalid:null,rgrid:[],fld:"PRECOPROMOCAODATAINICIAL",gxz:"Z3806PrecoPromocaoDataInicial",gxold:"O3806PrecoPromocaoDataInicial",gxvar:"A3806PrecoPromocaoDataInicial",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[26],ip:[26],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A3806PrecoPromocaoDataInicial=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.Z3806PrecoPromocaoDataInicial=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("PRECOPROMOCAODATAINICIAL",gx.O.A3806PrecoPromocaoDataInicial,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A3806PrecoPromocaoDataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("PRECOPROMOCAODATAINICIAL")},nac:gx.falseFn};this.declareDomainHdlr(26,function(){});n[29]={fld:"TEXTBLOCK6",format:0,grid:0};n[31]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precopromocaodatafinal,isvalid:null,rgrid:[],fld:"PRECOPROMOCAODATAFINAL",gxz:"Z3807PrecoPromocaoDataFinal",gxold:"O3807PrecoPromocaoDataFinal",gxvar:"A3807PrecoPromocaoDataFinal",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[26,31],ip:[26,31],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A3807PrecoPromocaoDataFinal=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.Z3807PrecoPromocaoDataFinal=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("PRECOPROMOCAODATAFINAL",gx.O.A3807PrecoPromocaoDataFinal,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A3807PrecoPromocaoDataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("PRECOPROMOCAODATAFINAL")},nac:gx.falseFn};this.declareDomainHdlr(31,function(){});n[34]={fld:"TEXTBLOCK2",format:0,grid:0};n[36]={lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precopromocaoid,isvalid:null,rgrid:[],fld:"PRECOPROMOCAOID",gxz:"Z3809PrecoPromocaoId",gxold:"O3809PrecoPromocaoId",gxvar:"A3809PrecoPromocaoId",ucs:[],op:[36],ip:[36],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A3809PrecoPromocaoId=gx.num.intval(n)},v2z:function(n){gx.O.Z3809PrecoPromocaoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("PRECOPROMOCAOID",gx.O.A3809PrecoPromocaoId,0)},c2v:function(){gx.O.A3809PrecoPromocaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PRECOPROMOCAOID",".")},nac:gx.falseFn};n[37]={lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PRECOPROMOCAODESCRICAO",gxz:"Z3810PrecoPromocaoDescricao",gxold:"O3810PrecoPromocaoDescricao",gxvar:"A3810PrecoPromocaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A3810PrecoPromocaoDescricao=n},v2z:function(n){gx.O.Z3810PrecoPromocaoDescricao=n},v2c:function(){gx.fn.setControlValue("PRECOPROMOCAODESCRICAO",gx.O.A3810PrecoPromocaoDescricao,0)},c2v:function(){gx.O.A3810PrecoPromocaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("PRECOPROMOCAODESCRICAO")},nac:gx.falseFn};n[40]={fld:"TEXTBLOCK7",format:0,grid:0};n[42]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precopromocaofilialid,isvalid:null,rgrid:[],fld:"PRECOPROMOCAOFILIALID",gxz:"Z5878PrecoPromocaoFilialId",gxold:"O5878PrecoPromocaoFilialId",gxvar:"A5878PrecoPromocaoFilialId",ucs:[],op:[42],ip:[42],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A5878PrecoPromocaoFilialId=gx.num.intval(n)},v2z:function(n){gx.O.Z5878PrecoPromocaoFilialId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("PRECOPROMOCAOFILIALID",gx.O.A5878PrecoPromocaoFilialId,0)},c2v:function(){gx.O.A5878PrecoPromocaoFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PRECOPROMOCAOFILIALID",".")},nac:function(){return!(""==this.AV30FilialUnica)}};n[43]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PRECOPROMOCAOFILIALNOME",gxz:"Z5879PrecoPromocaoFilialNome",gxold:"O5879PrecoPromocaoFilialNome",gxvar:"A5879PrecoPromocaoFilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A5879PrecoPromocaoFilialNome=n},v2z:function(n){gx.O.Z5879PrecoPromocaoFilialNome=n},v2c:function(){gx.fn.setControlValue("PRECOPROMOCAOFILIALNOME",gx.O.A5879PrecoPromocaoFilialNome,0)},c2v:function(){gx.O.A5879PrecoPromocaoFilialNome=this.val()},val:function(){return gx.fn.getControlValue("PRECOPROMOCAOFILIALNOME")},nac:gx.falseFn};n[46]={fld:"TEXTBLOCK10",format:0,grid:0};n[48]={lvl:0,type:"decimal",len:18,dec:6,sign:!1,pic:"ZZ,ZZZ,ZZZ,ZZ9.999999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precopromocaovalor,isvalid:null,rgrid:[],fld:"PRECOPROMOCAOVALOR",gxz:"Z3811PrecoPromocaoValor",gxold:"O3811PrecoPromocaoValor",gxvar:"A3811PrecoPromocaoValor",ucs:[],op:[48],ip:[48],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A3811PrecoPromocaoValor=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.Z3811PrecoPromocaoValor=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("PRECOPROMOCAOVALOR",gx.O.A3811PrecoPromocaoValor,6,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A3811PrecoPromocaoValor=this.val()},val:function(){return gx.fn.getDecimalValue("PRECOPROMOCAOVALOR",".",",")},nac:gx.falseFn};this.declareDomainHdlr(48,function(){});n[51]={fld:"TEXTBLOCK8",format:0,grid:0};n[53]={lvl:0,type:"decimal",len:18,dec:4,sign:!0,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precopromocaoqtdeminima,isvalid:null,rgrid:[],fld:"PRECOPROMOCAOQTDEMINIMA",gxz:"Z11176PrecoPromocaoQtdeMinima",gxold:"O11176PrecoPromocaoQtdeMinima",gxvar:"A11176PrecoPromocaoQtdeMinima",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A11176PrecoPromocaoQtdeMinima=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.Z11176PrecoPromocaoQtdeMinima=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("PRECOPROMOCAOQTDEMINIMA",gx.O.A11176PrecoPromocaoQtdeMinima,4,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A11176PrecoPromocaoQtdeMinima=this.val()},val:function(){return gx.fn.getDecimalValue("PRECOPROMOCAOQTDEMINIMA",".",",")},nac:gx.falseFn};this.declareDomainHdlr(53,function(){});n[56]={fld:"TEXTBLOCK9",format:0,grid:0};n[58]={lvl:0,type:"decimal",len:18,dec:4,sign:!0,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precopromocaoqtdemaxima,isvalid:null,rgrid:[],fld:"PRECOPROMOCAOQTDEMAXIMA",gxz:"Z11177PrecoPromocaoQtdeMaxima",gxold:"O11177PrecoPromocaoQtdeMaxima",gxvar:"A11177PrecoPromocaoQtdeMaxima",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A11177PrecoPromocaoQtdeMaxima=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.Z11177PrecoPromocaoQtdeMaxima=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("PRECOPROMOCAOQTDEMAXIMA",gx.O.A11177PrecoPromocaoQtdeMaxima,4,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A11177PrecoPromocaoQtdeMaxima=this.val()},val:function(){return gx.fn.getDecimalValue("PRECOPROMOCAOQTDEMAXIMA",".",",")},nac:gx.falseFn};this.declareDomainHdlr(58,function(){});n[59]={fld:"TABLE4",grid:0};n[62]={fld:"TEXTBLOCK1",format:0,grid:0};n[64]={lvl:0,type:"char",len:12,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PRECOPROMOCAOUSUARIOALT",gxz:"Z3812PrecoPromocaoUsuarioAlt",gxold:"O3812PrecoPromocaoUsuarioAlt",gxvar:"A3812PrecoPromocaoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A3812PrecoPromocaoUsuarioAlt=n},v2z:function(n){gx.O.Z3812PrecoPromocaoUsuarioAlt=n},v2c:function(){gx.fn.setControlValue("PRECOPROMOCAOUSUARIOALT",gx.O.A3812PrecoPromocaoUsuarioAlt,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A3812PrecoPromocaoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("PRECOPROMOCAOUSUARIOALT")},nac:gx.falseFn};this.declareDomainHdlr(64,function(){});n[66]={lvl:0,type:"dtime",len:10,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PRECOPROMOCAODATAHORAALT",gxz:"Z3813PrecoPromocaoDataHoraAlt",gxold:"O3813PrecoPromocaoDataHoraAlt",gxvar:"A3813PrecoPromocaoDataHoraAlt",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A3813PrecoPromocaoDataHoraAlt=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.Z3813PrecoPromocaoDataHoraAlt=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("PRECOPROMOCAODATAHORAALT",gx.O.A3813PrecoPromocaoDataHoraAlt,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A3813PrecoPromocaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("PRECOPROMOCAODATAHORAALT")},nac:gx.falseFn};this.declareDomainHdlr(66,function(){});n[75]={lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(n)},v2z:function(n){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",".")},nac:gx.falseFn};n[76]={fld:"JS",format:2,grid:0};n[78]={fld:"BTNHELP",grid:0};n[80]={fld:"PROMPT_3809",grid:401};n[81]={fld:"PROMPT_5878",grid:401};this.A2965ProdutoId=0;this.Z2965ProdutoId=0;this.O2965ProdutoId=0;this.A2960ProdutoDescricao="";this.Z2960ProdutoDescricao="";this.O2960ProdutoDescricao="";this.A3814PrecoPromocaoSequencia=0;this.Z3814PrecoPromocaoSequencia=0;this.O3814PrecoPromocaoSequencia=0;this.A3806PrecoPromocaoDataInicial=gx.date.nullDate();this.Z3806PrecoPromocaoDataInicial=gx.date.nullDate();this.O3806PrecoPromocaoDataInicial=gx.date.nullDate();this.A3807PrecoPromocaoDataFinal=gx.date.nullDate();this.Z3807PrecoPromocaoDataFinal=gx.date.nullDate();this.O3807PrecoPromocaoDataFinal=gx.date.nullDate();this.A3809PrecoPromocaoId=0;this.Z3809PrecoPromocaoId=0;this.O3809PrecoPromocaoId=0;this.A3810PrecoPromocaoDescricao="";this.Z3810PrecoPromocaoDescricao="";this.O3810PrecoPromocaoDescricao="";this.A5878PrecoPromocaoFilialId=0;this.Z5878PrecoPromocaoFilialId=0;this.O5878PrecoPromocaoFilialId=0;this.A5879PrecoPromocaoFilialNome="";this.Z5879PrecoPromocaoFilialNome="";this.O5879PrecoPromocaoFilialNome="";this.A3811PrecoPromocaoValor=0;this.Z3811PrecoPromocaoValor=0;this.O3811PrecoPromocaoValor=0;this.A11176PrecoPromocaoQtdeMinima=0;this.Z11176PrecoPromocaoQtdeMinima=0;this.O11176PrecoPromocaoQtdeMinima=0;this.A11177PrecoPromocaoQtdeMaxima=0;this.Z11177PrecoPromocaoQtdeMaxima=0;this.O11177PrecoPromocaoQtdeMaxima=0;this.A3812PrecoPromocaoUsuarioAlt="";this.Z3812PrecoPromocaoUsuarioAlt="";this.O3812PrecoPromocaoUsuarioAlt="";this.A3813PrecoPromocaoDataHoraAlt=gx.date.nullDate();this.Z3813PrecoPromocaoDataHoraAlt=gx.date.nullDate();this.O3813PrecoPromocaoDataHoraAlt=gx.date.nullDate();this.AV17AcessoSistemaSequencia=0;this.ZV17AcessoSistemaSequencia=0;this.OV17AcessoSistemaSequencia=0;this.AV7UsrCod="";this.AV10EmpresaLogadaId="";this.AV16Sistema="";this.AV39Pgmname="";this.AV40Pgmdesc="";this.AV11MsgErro="";this.AV17AcessoSistemaSequencia=0;this.AV14Modulo="";this.AV8Logon={};this.AV13Tabela="";this.AV12EmpresaPadrao="";this.AV25PrecoPromocaoEmpId="";this.AV26FilialEmpresaId="";this.AV30FilialUnica="";this.AV37SnContrArmazem="";this.AV20SnAlterou="";this.AV18ProdutoId=0;this.AV19PrecoPromocaoSequencia=0;this.AV29Chamada="";this.AV28SNPrompt="";this.A2964ProdutoEmpresaId="";this.A2965ProdutoId=0;this.A3814PrecoPromocaoSequencia=0;this.A5878PrecoPromocaoFilialId=0;this.A3808PrecoPromocaoEmpId="";this.A5877PrecoPromocaoFilialEmp="";this.A3812PrecoPromocaoUsuarioAlt="";this.A3813PrecoPromocaoDataHoraAlt=gx.date.nullDate();this.AV9Erro=0;this.AV38ErroQtde=0;this.AV36MsgErroQtde="";this.A2960ProdutoDescricao="";this.A3806PrecoPromocaoDataInicial=gx.date.nullDate();this.A3807PrecoPromocaoDataFinal=gx.date.nullDate();this.A3809PrecoPromocaoId=0;this.A3810PrecoPromocaoDescricao="";this.A5879PrecoPromocaoFilialNome="";this.A3811PrecoPromocaoValor=0;this.A11176PrecoPromocaoQtdeMinima=0;this.A11177PrecoPromocaoQtdeMaxima=0;this.Gx_mode="";this.Events={e12782_client:["'FECHAR'",!0],e13782_client:["AFTER TRN",!0],e1478401_client:["ENTER",!0],e1578401_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"AV18ProdutoId",fld:"vPRODUTOID"},{av:"AV19PrecoPromocaoSequencia",fld:"vPRECOPROMOCAOSEQUENCIA"},{av:"AV29Chamada",fld:"vCHAMADA"},{av:"AV28SNPrompt",fld:"vSNPROMPT"},{av:"Gx_mode",fld:"vMODE"}],[]];this.EvtParms.REFRESH=[[],[]];this.EvtParms["'FECHAR'"]=[[{av:"AV17AcessoSistemaSequencia",fld:"vACESSOSISTEMASEQUENCIA"},{av:"AV29Chamada",fld:"vCHAMADA"},{av:"AV28SNPrompt",fld:"vSNPROMPT"},{av:"AV18ProdutoId",fld:"vPRODUTOID"},{av:"AV27ProdutoCodigoId",fld:"vPRODUTOCODIGOID"}],[{av:"AV28SNPrompt",fld:"vSNPROMPT"},{av:"AV27ProdutoCodigoId",fld:"vPRODUTOCODIGOID"},{av:"AV18ProdutoId",fld:"vPRODUTOID"}]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE"},{av:"AV17AcessoSistemaSequencia",fld:"vACESSOSISTEMASEQUENCIA"}],[]];this.setPrompt("PROMPT_3809",[36]);this.setPrompt("PROMPT_5878",[42]);this.EnterCtrl=["BUTTON1"];this.setVCMap("AV18ProdutoId","vPRODUTOID",0,"int");this.setVCMap("AV19PrecoPromocaoSequencia","vPRECOPROMOCAOSEQUENCIA",0,"int");this.setVCMap("AV30FilialUnica","vFILIALUNICA",0,"svchar");this.setVCMap("AV12EmpresaPadrao","vEMPRESAPADRAO",0,"char");this.setVCMap("A2964ProdutoEmpresaId","PRODUTOEMPRESAID",0,"char");this.setVCMap("AV25PrecoPromocaoEmpId","vPRECOPROMOCAOEMPID",0,"char");this.setVCMap("A3808PrecoPromocaoEmpId","PRECOPROMOCAOEMPID",0,"char");this.setVCMap("AV26FilialEmpresaId","vFILIALEMPRESAID",0,"char");this.setVCMap("A5877PrecoPromocaoFilialEmp","PRECOPROMOCAOFILIALEMP",0,"char");this.setVCMap("AV20SnAlterou","vSNALTEROU",0,"char");this.setVCMap("AV7UsrCod","vUSRCOD",0,"char");this.setVCMap("AV9Erro","vERRO",0,"int");this.setVCMap("AV38ErroQtde","vERROQTDE",0,"int");this.setVCMap("AV36MsgErroQtde","vMSGERROQTDE",0,"svchar");this.setVCMap("AV40Pgmdesc","vPGMDESC",0,"char");this.setVCMap("AV39Pgmname","vPGMNAME",0,"char");this.setVCMap("Gx_mode","vMODE",0,"char");this.setVCMap("AV29Chamada","vCHAMADA",0,"char");this.setVCMap("AV28SNPrompt","vSNPROMPT",0,"char");this.InitStandaloneVars();this.LvlOlds[401]=["O3811PrecoPromocaoValor","O5878PrecoPromocaoFilialId","O3809PrecoPromocaoId","O3807PrecoPromocaoDataFinal","O3806PrecoPromocaoDataInicial"]});gx.setParentObj(new tprecopromocao)