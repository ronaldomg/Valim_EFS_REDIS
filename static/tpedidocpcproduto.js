/**@preserve  GeneXus Java 10_3_12-110051 on February 8, 2021 20:40:34.36
*/
gx.evt.autoSkip=!1;gx.define("tpedidocpcproduto",!1,function(){this.ServerClass="tpedidocpcproduto";this.PackageName="";this.setObjectType("trn");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("20","LAST");this.addKeyListener("19","FIRST");this.addKeyListener("16","SELECT");this.addKeyListener("13","DELETE");this.addKeyListener("9","GET");this.addKeyListener("2","PROMPT");this.addKeyListener("8","NEXT");this.addKeyListener("7","PREVIOUS");this.addKeyListener("4","CHECK");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Pedidocpcempresaid=function(){try{var n=gx.util.balloon.getNew("PEDIDOCPCEMPRESAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Pedidocpcano=function(){try{var n=gx.util.balloon.getNew("PEDIDOCPCANO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Pedidocpcnumero=function(){return gx.ajax.validSrvEvt("dyncall","valid_Pedidocpcnumero",["gx.O.A11450PedidoCPCEmpresaId","gx.O.A11339PedidoCPCAno","gx.O.A11340PedidoCPCNumero"],[]),!0};this.Valid_Pedidocpcsequencia=function(){return gx.ajax.validSrvEvt("dyncall","valid_Pedidocpcsequencia",["gx.O.A11450PedidoCPCEmpresaId","gx.O.A11339PedidoCPCAno","gx.O.A11340PedidoCPCNumero","gx.O.A11540PedidoCPCSequencia","gx.num.urlDecimal(gx.O.A11475PedidoCPCProdutoQuantidade,'.',',')","gx.num.urlDecimal(gx.O.A11474PedidoCPCProdutoQtdeContabil,'.',',')","gx.O.A11478PedidoCPCProdutoUsuarioAlt",'gx.date.urlDateTime(gx.O.A11477PedidoCPCProdutoDataHoraAlt,"DMY4")',"gx.O.A11452PedidoCPCProdutoProdEmpresaId","gx.O.A11453PedidoCPCProdutoProdId"],["A11452PedidoCPCProdutoProdEmpresaId","A11453PedidoCPCProdutoProdId","A11475PedidoCPCProdutoQuantidade","A11474PedidoCPCProdutoQtdeContabil","A11478PedidoCPCProdutoUsuarioAlt","A11477PedidoCPCProdutoDataHoraAlt","A11476PedidoCPCProdutoProdDescResumi","Gx_mode","Z11450PedidoCPCEmpresaId","Z11339PedidoCPCAno","Z11340PedidoCPCNumero","Z11540PedidoCPCSequencia","Z11452PedidoCPCProdutoProdEmpresaId","Z11453PedidoCPCProdutoProdId","Z11475PedidoCPCProdutoQuantidade","Z11474PedidoCPCProdutoQtdeContabil","Z11478PedidoCPCProdutoUsuarioAlt","Z11477PedidoCPCProdutoDataHoraAlt","Z11476PedidoCPCProdutoProdDescResumi",["BTN_DELETE2","Enabled"],["BTN_ENTER2","Enabled"]]),!0};this.Valid_Pedidocpcprodutoprodempresaid=function(){try{var n=gx.util.balloon.getNew("PEDIDOCPCPRODUTOPRODEMPRESAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Pedidocpcprodutoprodid=function(){return gx.ajax.validSrvEvt("dyncall","valid_Pedidocpcprodutoprodid",["gx.O.A11452PedidoCPCProdutoProdEmpresaId","gx.O.A11453PedidoCPCProdutoProdId","gx.O.A11476PedidoCPCProdutoProdDescResumi"],["A11476PedidoCPCProdutoProdDescResumi"]),!0};this.e11gk847_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e12gk847_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,79,82,84,87,89,95,96];this.GXLastCtrlId=96;n[2]={fld:"TABLEMAIN",grid:0};n[5]={fld:"TABLETOOLBAR",grid:0};n[8]={fld:"SECTIONTOOLBAR",grid:0};n[9]={fld:"BTN_FIRST",grid:0};n[10]={fld:"BTN_FIRST_SEPARATOR",grid:0};n[11]={fld:"BTN_PREVIOUS",grid:0};n[12]={fld:"BTN_PREVIOUS_SEPARATOR",grid:0};n[13]={fld:"BTN_NEXT",grid:0};n[14]={fld:"BTN_NEXT_SEPARATOR",grid:0};n[15]={fld:"BTN_LAST",grid:0};n[16]={fld:"BTN_LAST_SEPARATOR",grid:0};n[17]={fld:"BTN_SELECT",grid:0};n[18]={fld:"BTN_SELECT_SEPARATOR",grid:0};n[19]={fld:"BTN_ENTER2",grid:0};n[20]={fld:"BTN_ENTER2_SEPARATOR",grid:0};n[21]={fld:"BTN_CANCEL2",grid:0};n[22]={fld:"BTN_CANCEL2_SEPARATOR",grid:0};n[23]={fld:"BTN_DELETE2",grid:0};n[24]={fld:"BTN_DELETE2_SEPARATOR",grid:0};n[27]={fld:"GROUPDATA",grid:0};n[28]={fld:"TABLE1",grid:0};n[34]={fld:"TABLE2",grid:0};n[37]={fld:"TEXTBLOCKPEDIDOCPCEMPRESAID",format:0,grid:0};n[39]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidocpcempresaid,isvalid:null,rgrid:[],fld:"PEDIDOCPCEMPRESAID",gxz:"Z11450PedidoCPCEmpresaId",gxold:"O11450PedidoCPCEmpresaId",gxvar:"A11450PedidoCPCEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A11450PedidoCPCEmpresaId=n},v2z:function(n){gx.O.Z11450PedidoCPCEmpresaId=n},v2c:function(){gx.fn.setControlValue("PEDIDOCPCEMPRESAID",gx.O.A11450PedidoCPCEmpresaId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A11450PedidoCPCEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("PEDIDOCPCEMPRESAID")},nac:gx.falseFn};this.declareDomainHdlr(39,function(){});n[42]={fld:"TEXTBLOCKPEDIDOCPCANO",format:0,grid:0};n[44]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidocpcano,isvalid:null,rgrid:[],fld:"PEDIDOCPCANO",gxz:"Z11339PedidoCPCAno",gxold:"O11339PedidoCPCAno",gxvar:"A11339PedidoCPCAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A11339PedidoCPCAno=gx.num.intval(n)},v2z:function(n){gx.O.Z11339PedidoCPCAno=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("PEDIDOCPCANO",gx.O.A11339PedidoCPCAno,0)},c2v:function(){gx.O.A11339PedidoCPCAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PEDIDOCPCANO",".")},nac:gx.falseFn};n[47]={fld:"TEXTBLOCKPEDIDOCPCNUMERO",format:0,grid:0};n[49]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidocpcnumero,isvalid:null,rgrid:[],fld:"PEDIDOCPCNUMERO",gxz:"Z11340PedidoCPCNumero",gxold:"O11340PedidoCPCNumero",gxvar:"A11340PedidoCPCNumero",ucs:[],op:[],ip:[49,44,39],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A11340PedidoCPCNumero=gx.num.intval(n)},v2z:function(n){gx.O.Z11340PedidoCPCNumero=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("PEDIDOCPCNUMERO",gx.O.A11340PedidoCPCNumero,0)},c2v:function(){gx.O.A11340PedidoCPCNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PEDIDOCPCNUMERO",".")},nac:gx.falseFn};n[52]={fld:"TEXTBLOCKPEDIDOCPCSEQUENCIA",format:0,grid:0};n[54]={lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidocpcsequencia,isvalid:null,rgrid:[],fld:"PEDIDOCPCSEQUENCIA",gxz:"Z11540PedidoCPCSequencia",gxold:"O11540PedidoCPCSequencia",gxvar:"A11540PedidoCPCSequencia",ucs:[],op:[64,59,89,84,79,74],ip:[64,59,89,84,79,74,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A11540PedidoCPCSequencia=gx.num.intval(n)},v2z:function(n){gx.O.Z11540PedidoCPCSequencia=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("PEDIDOCPCSEQUENCIA",gx.O.A11540PedidoCPCSequencia,0)},c2v:function(){gx.O.A11540PedidoCPCSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PEDIDOCPCSEQUENCIA",".")},nac:gx.falseFn};n[57]={fld:"TEXTBLOCKPEDIDOCPCPRODUTOPRODEMPRESAID",format:0,grid:0};n[59]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidocpcprodutoprodempresaid,isvalid:null,rgrid:[],fld:"PEDIDOCPCPRODUTOPRODEMPRESAID",gxz:"Z11452PedidoCPCProdutoProdEmpresaId",gxold:"O11452PedidoCPCProdutoProdEmpresaId",gxvar:"A11452PedidoCPCProdutoProdEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A11452PedidoCPCProdutoProdEmpresaId=n},v2z:function(n){gx.O.Z11452PedidoCPCProdutoProdEmpresaId=n},v2c:function(){gx.fn.setControlValue("PEDIDOCPCPRODUTOPRODEMPRESAID",gx.O.A11452PedidoCPCProdutoProdEmpresaId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A11452PedidoCPCProdutoProdEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("PEDIDOCPCPRODUTOPRODEMPRESAID")},nac:gx.falseFn};this.declareDomainHdlr(59,function(){});n[62]={fld:"TEXTBLOCKPEDIDOCPCPRODUTOPRODID",format:0,grid:0};n[64]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidocpcprodutoprodid,isvalid:null,rgrid:[],fld:"PEDIDOCPCPRODUTOPRODID",gxz:"Z11453PedidoCPCProdutoProdId",gxold:"O11453PedidoCPCProdutoProdId",gxvar:"A11453PedidoCPCProdutoProdId",ucs:[],op:[69],ip:[69,64,59],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A11453PedidoCPCProdutoProdId=gx.num.intval(n)},v2z:function(n){gx.O.Z11453PedidoCPCProdutoProdId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("PEDIDOCPCPRODUTOPRODID",gx.O.A11453PedidoCPCProdutoProdId,0)},c2v:function(){gx.O.A11453PedidoCPCProdutoProdId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PEDIDOCPCPRODUTOPRODID",".")},nac:gx.falseFn};n[67]={fld:"TEXTBLOCKPEDIDOCPCPRODUTOPRODDESCRESUMIDA",format:0,grid:0};n[69]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCPCPRODUTOPRODDESCRESUMI",gxz:"Z11476PedidoCPCProdutoProdDescResumi",gxold:"O11476PedidoCPCProdutoProdDescResumi",gxvar:"A11476PedidoCPCProdutoProdDescResumi",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A11476PedidoCPCProdutoProdDescResumi=n},v2z:function(n){gx.O.Z11476PedidoCPCProdutoProdDescResumi=n},v2c:function(){gx.fn.setControlValue("PEDIDOCPCPRODUTOPRODDESCRESUMI",gx.O.A11476PedidoCPCProdutoProdDescResumi,0)},c2v:function(){gx.O.A11476PedidoCPCProdutoProdDescResumi=this.val()},val:function(){return gx.fn.getControlValue("PEDIDOCPCPRODUTOPRODDESCRESUMI")},nac:gx.falseFn};n[72]={fld:"TEXTBLOCKPEDIDOCPCPRODUTOQUANTIDADE",format:0,grid:0};n[74]={lvl:0,type:"decimal",len:18,dec:4,sign:!0,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCPCPRODUTOQUANTIDADE",gxz:"Z11475PedidoCPCProdutoQuantidade",gxold:"O11475PedidoCPCProdutoQuantidade",gxvar:"A11475PedidoCPCProdutoQuantidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A11475PedidoCPCProdutoQuantidade=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.Z11475PedidoCPCProdutoQuantidade=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("PEDIDOCPCPRODUTOQUANTIDADE",gx.O.A11475PedidoCPCProdutoQuantidade,4,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A11475PedidoCPCProdutoQuantidade=this.val()},val:function(){return gx.fn.getDecimalValue("PEDIDOCPCPRODUTOQUANTIDADE",".",",")},nac:gx.falseFn};this.declareDomainHdlr(74,function(){});n[77]={fld:"TEXTBLOCKPEDIDOCPCPRODUTOQTDECONTABIL",format:0,grid:0};n[79]={lvl:0,type:"decimal",len:18,dec:4,sign:!0,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCPCPRODUTOQTDECONTABIL",gxz:"Z11474PedidoCPCProdutoQtdeContabil",gxold:"O11474PedidoCPCProdutoQtdeContabil",gxvar:"A11474PedidoCPCProdutoQtdeContabil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A11474PedidoCPCProdutoQtdeContabil=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.Z11474PedidoCPCProdutoQtdeContabil=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("PEDIDOCPCPRODUTOQTDECONTABIL",gx.O.A11474PedidoCPCProdutoQtdeContabil,4,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A11474PedidoCPCProdutoQtdeContabil=this.val()},val:function(){return gx.fn.getDecimalValue("PEDIDOCPCPRODUTOQTDECONTABIL",".",",")},nac:gx.falseFn};this.declareDomainHdlr(79,function(){});n[82]={fld:"TEXTBLOCKPEDIDOCPCPRODUTOUSUARIOALT",format:0,grid:0};n[84]={lvl:0,type:"char",len:12,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCPCPRODUTOUSUARIOALT",gxz:"Z11478PedidoCPCProdutoUsuarioAlt",gxold:"O11478PedidoCPCProdutoUsuarioAlt",gxvar:"A11478PedidoCPCProdutoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A11478PedidoCPCProdutoUsuarioAlt=n},v2z:function(n){gx.O.Z11478PedidoCPCProdutoUsuarioAlt=n},v2c:function(){gx.fn.setControlValue("PEDIDOCPCPRODUTOUSUARIOALT",gx.O.A11478PedidoCPCProdutoUsuarioAlt,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A11478PedidoCPCProdutoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("PEDIDOCPCPRODUTOUSUARIOALT")},nac:gx.falseFn};this.declareDomainHdlr(84,function(){});n[87]={fld:"TEXTBLOCKPEDIDOCPCPRODUTODATAHORAALT",format:0,grid:0};n[89]={lvl:0,type:"dtime",len:10,dec:5,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCPCPRODUTODATAHORAALT",gxz:"Z11477PedidoCPCProdutoDataHoraAlt",gxold:"O11477PedidoCPCProdutoDataHoraAlt",gxvar:"A11477PedidoCPCProdutoDataHoraAlt",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A11477PedidoCPCProdutoDataHoraAlt=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.Z11477PedidoCPCProdutoDataHoraAlt=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("PEDIDOCPCPRODUTODATAHORAALT",gx.O.A11477PedidoCPCProdutoDataHoraAlt,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A11477PedidoCPCProdutoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("PEDIDOCPCPRODUTODATAHORAALT")},nac:gx.falseFn};this.declareDomainHdlr(89,function(){});n[95]={fld:"PROMPT_11450_11339_11340",grid:847};n[96]={fld:"PROMPT_11452_11453",grid:847};this.A11450PedidoCPCEmpresaId="";this.Z11450PedidoCPCEmpresaId="";this.O11450PedidoCPCEmpresaId="";this.A11339PedidoCPCAno=0;this.Z11339PedidoCPCAno=0;this.O11339PedidoCPCAno=0;this.A11340PedidoCPCNumero=0;this.Z11340PedidoCPCNumero=0;this.O11340PedidoCPCNumero=0;this.A11540PedidoCPCSequencia=0;this.Z11540PedidoCPCSequencia=0;this.O11540PedidoCPCSequencia=0;this.A11452PedidoCPCProdutoProdEmpresaId="";this.Z11452PedidoCPCProdutoProdEmpresaId="";this.O11452PedidoCPCProdutoProdEmpresaId="";this.A11453PedidoCPCProdutoProdId=0;this.Z11453PedidoCPCProdutoProdId=0;this.O11453PedidoCPCProdutoProdId=0;this.A11476PedidoCPCProdutoProdDescResumi="";this.Z11476PedidoCPCProdutoProdDescResumi="";this.O11476PedidoCPCProdutoProdDescResumi="";this.A11475PedidoCPCProdutoQuantidade=0;this.Z11475PedidoCPCProdutoQuantidade=0;this.O11475PedidoCPCProdutoQuantidade=0;this.A11474PedidoCPCProdutoQtdeContabil=0;this.Z11474PedidoCPCProdutoQtdeContabil=0;this.O11474PedidoCPCProdutoQtdeContabil=0;this.A11478PedidoCPCProdutoUsuarioAlt="";this.Z11478PedidoCPCProdutoUsuarioAlt="";this.O11478PedidoCPCProdutoUsuarioAlt="";this.A11477PedidoCPCProdutoDataHoraAlt=gx.date.nullDate();this.Z11477PedidoCPCProdutoDataHoraAlt=gx.date.nullDate();this.O11477PedidoCPCProdutoDataHoraAlt=gx.date.nullDate();this.A11450PedidoCPCEmpresaId="";this.A11339PedidoCPCAno=0;this.A11340PedidoCPCNumero=0;this.A11540PedidoCPCSequencia=0;this.A11452PedidoCPCProdutoProdEmpresaId="";this.A11453PedidoCPCProdutoProdId=0;this.A11476PedidoCPCProdutoProdDescResumi="";this.A11475PedidoCPCProdutoQuantidade=0;this.A11474PedidoCPCProdutoQtdeContabil=0;this.A11478PedidoCPCProdutoUsuarioAlt="";this.A11477PedidoCPCProdutoDataHoraAlt=gx.date.nullDate();this.Events={e11gk847_client:["ENTER",!0],e12gk847_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0}],[]];this.EvtParms.REFRESH=[[],[]];this.setPrompt("PROMPT_11450_11339_11340",[39,44,49]);this.setPrompt("PROMPT_11452_11453",[59,64]);this.EnterCtrl=["BTN_ENTER2","BTN_ENTER2_SEPARATOR","BTN_ENTER"];this.setVCMap("Gx_mode","vMODE",0,"char");this.InitStandaloneVars()});gx.setParentObj(new tpedidocpcproduto)