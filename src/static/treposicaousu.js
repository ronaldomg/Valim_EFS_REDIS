/**@preserve  GeneXus Java 10_3_12-110051 on February 8, 2021 20:39:17.
*
gx.evt.autoSkip=!1;gx.define("treposicaousu",!1,function(){this.ServerClass="treposicaousu";this.PackageName="";this.setObjectType("trn");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("20","LAST");this.addKeyListener("19","FIRST");this.addKeyListener("16","SELECT");this.addKeyListener("13","DELETE");this.addKeyListener("9","GET");this.addKeyListener("2","PROMPT");this.addKeyListener("8","NEXT");this.addKeyListener("7","PREVIOUS");this.addKeyListener("4","CHECK");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Reposicaousuempid=function(){try{var n=gx.util.balloon.getNew("REPOSICAOUSUEMPID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Reposicaousuusuarioid=function(){try{var n=gx.util.balloon.getNew("REPOSICAOUSUUSUARIOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Reposicaoususeq=function(){return gx.ajax.validSrvEvt("dyncall","valid_Reposicaoususeq",["gx.O.A11235ReposicaoUsuEmpId","gx.O.A11236ReposicaoUsuUsuarioid","gx.O.A11237ReposicaoUsuSeq","gx.O.A11242ReposicaoUsuAreaBuscar","gx.num.urlDecimal(gx.O.A11253ReposicaoUsuQtdeBuscar,'.',',')","gx.num.urlDecimal(gx.O.A11254ReposicaoUsuQdeBuscou,'.',',')","gx.O.A11243ReposicaoUsuAreaAbastecer","gx.num.urlDecimal(gx.O.A11244ReposicaoUsuQtdeAbastecer,'.',',')","gx.num.urlDecimal(gx.O.A11245ReposicaoUsuQtdeAbasteceu,'.',',')","gx.O.A11238ReposicaoUsuProdutoEmpId","gx.O.A11239ReposicaoUsuProdutoId"],["A11238ReposicaoUsuProdutoEmpId","A11239ReposicaoUsuProdutoId","A11242ReposicaoUsuAreaBuscar","A11253ReposicaoUsuQtdeBuscar","A11254ReposicaoUsuQdeBuscou","A11243ReposicaoUsuAreaAbastecer","A11244ReposicaoUsuQtdeAbastecer","A11245ReposicaoUsuQtdeAbasteceu","A11240ReposicaoUsuProdutoNome","A11241ReposicaoUsuProdutoReferencia","Gx_mode","Z11235ReposicaoUsuEmpId","Z11236ReposicaoUsuUsuarioid","Z11237ReposicaoUsuSeq","Z11238ReposicaoUsuProdutoEmpId","Z11239ReposicaoUsuProdutoId","Z11242ReposicaoUsuAreaBuscar","Z11253ReposicaoUsuQtdeBuscar","Z11254ReposicaoUsuQdeBuscou","Z11243ReposicaoUsuAreaAbastecer","Z11244ReposicaoUsuQtdeAbastecer","Z11245ReposicaoUsuQtdeAbasteceu","Z11240ReposicaoUsuProdutoNome","Z11241ReposicaoUsuProdutoReferencia",["BTN_DELETE2","Enabled"],["BTN_ENTER2","Enabled"]]),!0};this.Valid_Reposicaousuprodutoempid=function(){try{var n=gx.util.balloon.getNew("REPOSICAOUSUPRODUTOEMPID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Reposicaousuprodutoid=function(){return gx.ajax.validSrvEvt("dyncall","valid_Reposicaousuprodutoid",["gx.O.A11238ReposicaoUsuProdutoEmpId","gx.O.A11239ReposicaoUsuProdutoId","gx.O.A11240ReposicaoUsuProdutoNome","gx.O.A11241ReposicaoUsuProdutoReferencia"],["A11240ReposicaoUsuProdutoNome","A11241ReposicaoUsuProdutoReferencia"]),!0};this.e11g7824_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e12g7824_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,79,82,84,87,89,92,94,97,99,105];this.GXLastCtrlId=105;n[2]={fld:"TABLEMAIN",grid:0};n[5]={fld:"TABLETOOLBAR",grid:0};n[8]={fld:"SECTIONTOOLBAR",grid:0};n[9]={fld:"BTN_FIRST",grid:0};n[10]={fld:"BTN_FIRST_SEPARATOR",grid:0};n[11]={fld:"BTN_PREVIOUS",grid:0};n[12]={fld:"BTN_PREVIOUS_SEPARATOR",grid:0};n[13]={fld:"BTN_NEXT",grid:0};n[14]={fld:"BTN_NEXT_SEPARATOR",grid:0};n[15]={fld:"BTN_LAST",grid:0};n[16]={fld:"BTN_LAST_SEPARATOR",grid:0};n[17]={fld:"BTN_SELECT",grid:0};n[18]={fld:"BTN_SELECT_SEPARATOR",grid:0};n[19]={fld:"BTN_ENTER2",grid:0};n[20]={fld:"BTN_ENTER2_SEPARATOR",grid:0};n[21]={fld:"BTN_CANCEL2",grid:0};n[22]={fld:"BTN_CANCEL2_SEPARATOR",grid:0};n[23]={fld:"BTN_DELETE2",grid:0};n[24]={fld:"BTN_DELETE2_SEPARATOR",grid:0};n[27]={fld:"GROUPDATA",grid:0};n[28]={fld:"TABLE1",grid:0};n[34]={fld:"TABLE2",grid:0};n[37]={fld:"TEXTBLOCKREPOSICAOUSUEMPID",format:0,grid:0};n[39]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Reposicaousuempid,isvalid:null,rgrid:[],fld:"REPOSICAOUSUEMPID",gxz:"Z11235ReposicaoUsuEmpId",gxold:"O11235ReposicaoUsuEmpId",gxvar:"A11235ReposicaoUsuEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A11235ReposicaoUsuEmpId=n},v2z:function(n){gx.O.Z11235ReposicaoUsuEmpId=n},v2c:function(){gx.fn.setControlValue("REPOSICAOUSUEMPID",gx.O.A11235ReposicaoUsuEmpId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A11235ReposicaoUsuEmpId=this.val()},val:function(){return gx.fn.getControlValue("REPOSICAOUSUEMPID")},nac:gx.falseFn};this.declareDomainHdlr(39,function(){});n[42]={fld:"TEXTBLOCKREPOSICAOUSUUSUARIOID",format:0,grid:0};n[44]={lvl:0,type:"char",len:12,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Reposicaousuusuarioid,isvalid:null,rgrid:[],fld:"REPOSICAOUSUUSUARIOID",gxz:"Z11236ReposicaoUsuUsuarioid",gxold:"O11236ReposicaoUsuUsuarioid",gxvar:"A11236ReposicaoUsuUsuarioid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A11236ReposicaoUsuUsuarioid=n},v2z:function(n){gx.O.Z11236ReposicaoUsuUsuarioid=n},v2c:function(){gx.fn.setControlValue("REPOSICAOUSUUSUARIOID",gx.O.A11236ReposicaoUsuUsuarioid,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A11236ReposicaoUsuUsuarioid=this.val()},val:function(){return gx.fn.getControlValue("REPOSICAOUSUUSUARIOID")},nac:gx.falseFn};this.declareDomainHdlr(44,function(){});n[47]={fld:"TEXTBLOCKREPOSICAOUSUSEQ",format:0,grid:0};n[49]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Reposicaoususeq,isvalid:null,rgrid:[],fld:"REPOSICAOUSUSEQ",gxz:"Z11237ReposicaoUsuSeq",gxold:"O11237ReposicaoUsuSeq",gxvar:"A11237ReposicaoUsuSeq",ucs:[],op:[59,54,99,94,89,84,79,74],ip:[59,54,99,94,89,84,79,74,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A11237ReposicaoUsuSeq=gx.num.intval(n)},v2z:function(n){gx.O.Z11237ReposicaoUsuSeq=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("REPOSICAOUSUSEQ",gx.O.A11237ReposicaoUsuSeq,0)},c2v:function(){gx.O.A11237ReposicaoUsuSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("REPOSICAOUSUSEQ",".")},nac:gx.falseFn};n[52]={fld:"TEXTBLOCKREPOSICAOUSUPRODUTOEMPID",format:0,grid:0};n[54]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Reposicaousuprodutoempid,isvalid:null,rgrid:[],fld:"REPOSICAOUSUPRODUTOEMPID",gxz:"Z11238ReposicaoUsuProdutoEmpId",gxold:"O11238ReposicaoUsuProdutoEmpId",gxvar:"A11238ReposicaoUsuProdutoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A11238ReposicaoUsuProdutoEmpId=n},v2z:function(n){gx.O.Z11238ReposicaoUsuProdutoEmpId=n},v2c:function(){gx.fn.setControlValue("REPOSICAOUSUPRODUTOEMPID",gx.O.A11238ReposicaoUsuProdutoEmpId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A11238ReposicaoUsuProdutoEmpId=this.val()},val:function(){return gx.fn.getControlValue("REPOSICAOUSUPRODUTOEMPID")},nac:gx.falseFn};this.declareDomainHdlr(54,function(){});n[57]={fld:"TEXTBLOCKREPOSICAOUSUPRODUTOID",format:0,grid:0};n[59]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Reposicaousuprodutoid,isvalid:null,rgrid:[],fld:"REPOSICAOUSUPRODUTOID",gxz:"Z11239ReposicaoUsuProdutoId",gxold:"O11239ReposicaoUsuProdutoId",gxvar:"A11239ReposicaoUsuProdutoId",ucs:[],op:[69,64],ip:[69,64,59,54],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A11239ReposicaoUsuProdutoId=gx.num.intval(n)},v2z:function(n){gx.O.Z11239ReposicaoUsuProdutoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("REPOSICAOUSUPRODUTOID",gx.O.A11239ReposicaoUsuProdutoId,0)},c2v:function(){gx.O.A11239ReposicaoUsuProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("REPOSICAOUSUPRODUTOID",".")},nac:gx.falseFn};n[62]={fld:"TEXTBLOCKREPOSICAOUSUPRODUTONOME",format:0,grid:0};n[64]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REPOSICAOUSUPRODUTONOME",gxz:"Z11240ReposicaoUsuProdutoNome",gxold:"O11240ReposicaoUsuProdutoNome",gxvar:"A11240ReposicaoUsuProdutoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A11240ReposicaoUsuProdutoNome=n},v2z:function(n){gx.O.Z11240ReposicaoUsuProdutoNome=n},v2c:function(){gx.fn.setControlValue("REPOSICAOUSUPRODUTONOME",gx.O.A11240ReposicaoUsuProdutoNome,0)},c2v:function(){gx.O.A11240ReposicaoUsuProdutoNome=this.val()},val:function(){return gx.fn.getControlValue("REPOSICAOUSUPRODUTONOME")},nac:gx.falseFn};n[67]={fld:"TEXTBLOCKREPOSICAOUSUPRODUTOREFERENCIA",format:0,grid:0};n[69]={lvl:0,type:"svchar",len:20,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REPOSICAOUSUPRODUTOREFERENCIA",gxz:"Z11241ReposicaoUsuProdutoReferencia",gxold:"O11241ReposicaoUsuProdutoReferencia",gxvar:"A11241ReposicaoUsuProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A11241ReposicaoUsuProdutoReferencia=n},v2z:function(n){gx.O.Z11241ReposicaoUsuProdutoReferencia=n},v2c:function(){gx.fn.setControlValue("REPOSICAOUSUPRODUTOREFERENCIA",gx.O.A11241ReposicaoUsuProdutoReferencia,0)},c2v:function(){gx.O.A11241ReposicaoUsuProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("REPOSICAOUSUPRODUTOREFERENCIA")},nac:gx.falseFn};n[72]={fld:"TEXTBLOCKREPOSICAOUSUAREABUSCAR",format:0,grid:0};n[74]={lvl:0,type:"char",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REPOSICAOUSUAREABUSCAR",gxz:"Z11242ReposicaoUsuAreaBuscar",gxold:"O11242ReposicaoUsuAreaBuscar",gxvar:"A11242ReposicaoUsuAreaBuscar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A11242ReposicaoUsuAreaBuscar=n},v2z:function(n){gx.O.Z11242ReposicaoUsuAreaBuscar=n},v2c:function(){gx.fn.setControlValue("REPOSICAOUSUAREABUSCAR",gx.O.A11242ReposicaoUsuAreaBuscar,0)},c2v:function(){gx.O.A11242ReposicaoUsuAreaBuscar=this.val()},val:function(){return gx.fn.getControlValue("REPOSICAOUSUAREABUSCAR")},nac:gx.falseFn};n[77]={fld:"TEXTBLOCKREPOSICAOUSUQTDEBUSCAR",format:0,grid:0};n[79]={lvl:0,type:"decimal",len:18,dec:4,sign:!0,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REPOSICAOUSUQTDEBUSCAR",gxz:"Z11253ReposicaoUsuQtdeBuscar",gxold:"O11253ReposicaoUsuQtdeBuscar",gxvar:"A11253ReposicaoUsuQtdeBuscar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A11253ReposicaoUsuQtdeBuscar=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.Z11253ReposicaoUsuQtdeBuscar=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("REPOSICAOUSUQTDEBUSCAR",gx.O.A11253ReposicaoUsuQtdeBuscar,4,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A11253ReposicaoUsuQtdeBuscar=this.val()},val:function(){return gx.fn.getDecimalValue("REPOSICAOUSUQTDEBUSCAR",".",",")},nac:gx.falseFn};this.declareDomainHdlr(79,function(){});n[82]={fld:"TEXTBLOCKREPOSICAOUSUQDEBUSCOU",format:0,grid:0};n[84]={lvl:0,type:"decimal",len:18,dec:4,sign:!0,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REPOSICAOUSUQDEBUSCOU",gxz:"Z11254ReposicaoUsuQdeBuscou",gxold:"O11254ReposicaoUsuQdeBuscou",gxvar:"A11254ReposicaoUsuQdeBuscou",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A11254ReposicaoUsuQdeBuscou=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.Z11254ReposicaoUsuQdeBuscou=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("REPOSICAOUSUQDEBUSCOU",gx.O.A11254ReposicaoUsuQdeBuscou,4,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A11254ReposicaoUsuQdeBuscou=this.val()},val:function(){return gx.fn.getDecimalValue("REPOSICAOUSUQDEBUSCOU",".",",")},nac:gx.falseFn};this.declareDomainHdlr(84,function(){});n[87]={fld:"TEXTBLOCKREPOSICAOUSUAREAABASTECER",format:0,grid:0};n[89]={lvl:0,type:"char",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REPOSICAOUSUAREAABASTECER",gxz:"Z11243ReposicaoUsuAreaAbastecer",gxold:"O11243ReposicaoUsuAreaAbastecer",gxvar:"A11243ReposicaoUsuAreaAbastecer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A11243ReposicaoUsuAreaAbastecer=n},v2z:function(n){gx.O.Z11243ReposicaoUsuAreaAbastecer=n},v2c:function(){gx.fn.setControlValue("REPOSICAOUSUAREAABASTECER",gx.O.A11243ReposicaoUsuAreaAbastecer,0)},c2v:function(){gx.O.A11243ReposicaoUsuAreaAbastecer=this.val()},val:function(){return gx.fn.getControlValue("REPOSICAOUSUAREAABASTECER")},nac:gx.falseFn};n[92]={fld:"TEXTBLOCKREPOSICAOUSUQTDEABASTECER",format:0,grid:0};n[94]={lvl:0,type:"decimal",len:18,dec:4,sign:!0,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REPOSICAOUSUQTDEABASTECER",gxz:"Z11244ReposicaoUsuQtdeAbastecer",gxold:"O11244ReposicaoUsuQtdeAbastecer",gxvar:"A11244ReposicaoUsuQtdeAbastecer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A11244ReposicaoUsuQtdeAbastecer=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.Z11244ReposicaoUsuQtdeAbastecer=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("REPOSICAOUSUQTDEABASTECER",gx.O.A11244ReposicaoUsuQtdeAbastecer,4,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A11244ReposicaoUsuQtdeAbastecer=this.val()},val:function(){return gx.fn.getDecimalValue("REPOSICAOUSUQTDEABASTECER",".",",")},nac:gx.falseFn};this.declareDomainHdlr(94,function(){});n[97]={fld:"TEXTBLOCKREPOSICAOUSUQTDEABASTECEU",format:0,grid:0};n[99]={lvl:0,type:"decimal",len:18,dec:4,sign:!0,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REPOSICAOUSUQTDEABASTECEU",gxz:"Z11245ReposicaoUsuQtdeAbasteceu",gxold:"O11245ReposicaoUsuQtdeAbasteceu",gxvar:"A11245ReposicaoUsuQtdeAbasteceu",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A11245ReposicaoUsuQtdeAbasteceu=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.Z11245ReposicaoUsuQtdeAbasteceu=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("REPOSICAOUSUQTDEABASTECEU",gx.O.A11245ReposicaoUsuQtdeAbasteceu,4,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A11245ReposicaoUsuQtdeAbasteceu=this.val()},val:function(){return gx.fn.getDecimalValue("REPOSICAOUSUQTDEABASTECEU",".",",")},nac:gx.falseFn};this.declareDomainHdlr(99,function(){});n[105]={fld:"PROMPT_11238_11239",grid:824};this.A11235ReposicaoUsuEmpId="";this.Z11235ReposicaoUsuEmpId="";this.O11235ReposicaoUsuEmpId="";this.A11236ReposicaoUsuUsuarioid="";this.Z11236ReposicaoUsuUsuarioid="";this.O11236ReposicaoUsuUsuarioid="";this.A11237ReposicaoUsuSeq=0;this.Z11237ReposicaoUsuSeq=0;this.O11237ReposicaoUsuSeq=0;this.A11238ReposicaoUsuProdutoEmpId="";this.Z11238ReposicaoUsuProdutoEmpId="";this.O11238ReposicaoUsuProdutoEmpId="";this.A11239ReposicaoUsuProdutoId=0;this.Z11239ReposicaoUsuProdutoId=0;this.O11239ReposicaoUsuProdutoId=0;this.A11240ReposicaoUsuProdutoNome="";this.Z11240ReposicaoUsuProdutoNome="";this.O11240ReposicaoUsuProdutoNome="";this.A11241ReposicaoUsuProdutoReferencia="";this.Z11241ReposicaoUsuProdutoReferencia="";this.O11241ReposicaoUsuProdutoReferencia="";this.A11242ReposicaoUsuAreaBuscar="";this.Z11242ReposicaoUsuAreaBuscar="";this.O11242ReposicaoUsuAreaBuscar="";this.A11253ReposicaoUsuQtdeBuscar=0;this.Z11253ReposicaoUsuQtdeBuscar=0;this.O11253ReposicaoUsuQtdeBuscar=0;this.A11254ReposicaoUsuQdeBuscou=0;this.Z11254ReposicaoUsuQdeBuscou=0;this.O11254ReposicaoUsuQdeBuscou=0;this.A11243ReposicaoUsuAreaAbastecer="";this.Z11243ReposicaoUsuAreaAbastecer="";this.O11243ReposicaoUsuAreaAbastecer="";this.A11244ReposicaoUsuQtdeAbastecer=0;this.Z11244ReposicaoUsuQtdeAbastecer=0;this.O11244ReposicaoUsuQtdeAbastecer=0;this.A11245ReposicaoUsuQtdeAbasteceu=0;this.Z11245ReposicaoUsuQtdeAbasteceu=0;this.O11245ReposicaoUsuQtdeAbasteceu=0;this.A11235ReposicaoUsuEmpId="";this.A11236ReposicaoUsuUsuarioid="";this.A11237ReposicaoUsuSeq=0;this.A11238ReposicaoUsuProdutoEmpId="";this.A11239ReposicaoUsuProdutoId=0;this.A11240ReposicaoUsuProdutoNome="";this.A11241ReposicaoUsuProdutoReferencia="";this.A11242ReposicaoUsuAreaBuscar="";this.A11253ReposicaoUsuQtdeBuscar=0;this.A11254ReposicaoUsuQdeBuscou=0;this.A11243ReposicaoUsuAreaAbastecer="";this.A11244ReposicaoUsuQtdeAbastecer=0;this.A11245ReposicaoUsuQtdeAbasteceu=0;this.Events={e11g7824_client:["ENTER",!0],e12g7824_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0}],[]];this.EvtParms.REFRESH=[[],[]];this.setPrompt("PROMPT_11238_11239",[54,59]);this.EnterCtrl=["BTN_ENTER2","BTN_ENTER2_SEPARATOR","BTN_ENTER"];this.setVCMap("Gx_mode","vMODE",0,"char");this.InitStandaloneVars()});gx.setParentObj(new treposicaousu)