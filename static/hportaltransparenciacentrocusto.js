/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 18:18:54.53
*/
gx.evt.autoSkip=!1;gx.define("hportaltransparenciacentrocusto",!1,function(){var n,t;this.ServerClass="hportaltransparenciacentrocusto";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV5ContaPagRecNumero=gx.fn.getIntegerValue("vCONTAPAGRECNUMERO",".")};this.e1326i2_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e1426i1_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,10,13,15,18,20,23,25,28,30,33,35,41,42];this.GXLastCtrlId=42;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",40,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hportaltransparenciacentrocusto",[],!1,1,!1,!0,0,!1,!1,!1,"CollSdtPagamentos.SdtPagamentosItem",0,"px","Novo registro",!1,!1,!1,null,null,!1,"AV13SdtPagamentos",!1,[1,1,1,1]);t=this.Grid1Container;t.addSingleLineEdit("GXV115",41,"CTLCENTROCUSTODESCRICAO","Descrição do Centro de Custo","","CentroCustoDescricao","svchar",0,"px",35,35,"left",null,[],"GXV115","GXV115",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("GXV116",42,"CTLVALOR","Valor","","Valor","decimal",0,"px",22,22,"right",null,[],"GXV116","GXV116",!0,2,!1,!1,"Attribute",1,"");this.setGrid(t);n[2]={fld:"TABLE1",grid:0};n[5]={fld:"TABLE2",grid:0};n[8]={fld:"TEXTBLOCK1",format:0,grid:0};n[10]={lvl:0,type:"char",len:18,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACNPJ",gxz:"ZV9PessoaCNPJ",gxold:"OV9PessoaCNPJ",gxvar:"AV9PessoaCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV9PessoaCNPJ=n},v2z:function(n){gx.O.ZV9PessoaCNPJ=n},v2c:function(){gx.fn.setControlValue("vPESSOACNPJ",gx.O.AV9PessoaCNPJ,0)},c2v:function(){gx.O.AV9PessoaCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACNPJ")},nac:gx.falseFn};n[13]={fld:"TEXTBLOCK2",format:0,grid:0};n[15]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOARAZAOSOCIAL",gxz:"ZV10PessoaRazaoSocial",gxold:"OV10PessoaRazaoSocial",gxvar:"AV10PessoaRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV10PessoaRazaoSocial=n},v2z:function(n){gx.O.ZV10PessoaRazaoSocial=n},v2c:function(){gx.fn.setControlValue("vPESSOARAZAOSOCIAL",gx.O.AV10PessoaRazaoSocial,0)},c2v:function(){gx.O.AV10PessoaRazaoSocial=this.val()},val:function(){return gx.fn.getControlValue("vPESSOARAZAOSOCIAL")},nac:gx.falseFn};n[18]={fld:"TEXTBLOCK3",format:0,grid:0};n[20]={lvl:0,type:"svchar",len:25,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEDESCRICAO",gxz:"ZV8EspecieDescricao",gxold:"OV8EspecieDescricao",gxvar:"AV8EspecieDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV8EspecieDescricao=n},v2z:function(n){gx.O.ZV8EspecieDescricao=n},v2c:function(){gx.fn.setControlValue("vESPECIEDESCRICAO",gx.O.AV8EspecieDescricao,0)},c2v:function(){gx.O.AV8EspecieDescricao=this.val()},val:function(){return gx.fn.getControlValue("vESPECIEDESCRICAO")},nac:gx.falseFn};n[23]={fld:"TEXTBLOCK4",format:0,grid:0};n[25]={lvl:0,type:"svchar",len:20,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDOCUMENTO",gxz:"ZV6ContaPagRecDocumento",gxold:"OV6ContaPagRecDocumento",gxvar:"AV6ContaPagRecDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6ContaPagRecDocumento=n},v2z:function(n){gx.O.ZV6ContaPagRecDocumento=n},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDOCUMENTO",gx.O.AV6ContaPagRecDocumento,0)},c2v:function(){gx.O.AV6ContaPagRecDocumento=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDOCUMENTO")},nac:gx.falseFn};n[28]={fld:"TEXTBLOCK5",format:0,grid:0};n[30]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTPAGAMENTO",gxz:"ZV7ContapagrecDtpagamento",gxold:"OV7ContapagrecDtpagamento",gxvar:"AV7ContapagrecDtpagamento",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV7ContapagrecDtpagamento=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV7ContapagrecDtpagamento=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTPAGAMENTO",gx.O.AV7ContapagrecDtpagamento,0)},c2v:function(){gx.O.AV7ContapagrecDtpagamento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTPAGAMENTO")},nac:gx.falseFn};n[33]={fld:"TEXTBLOCK6",format:0,grid:0};n[35]={lvl:0,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALOR",gxz:"ZV11Valor",gxold:"OV11Valor",gxvar:"AV11Valor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV11Valor=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV11Valor=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vVALOR",gx.O.AV11Valor,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV11Valor=this.val()},val:function(){return gx.fn.getDecimalValue("vVALOR",".",",")},nac:gx.falseFn};this.declareDomainHdlr(35,function(){});n[41]={lvl:2,type:"svchar",len:35,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCENTROCUSTODESCRICAO",gxz:"ZV17GXV115",gxold:"OV17GXV115",gxvar:"GXV115",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.GXV115=n},v2z:function(n){gx.O.ZV17GXV115=n},v2c:function(n){gx.fn.setGridControlValue("CTLCENTROCUSTODESCRICAO",n||gx.fn.currentGridRowImpl(40),gx.O.GXV115,0)},c2v:function(){gx.O.GXV115=this.val()},val:function(n){return gx.fn.getGridControlValue("CTLCENTROCUSTODESCRICAO",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[42]={lvl:2,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:40,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALOR",gxz:"ZV18GXV116",gxold:"OV18GXV116",gxvar:"GXV116",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.GXV116=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV18GXV116=gx.fn.toDecimalValue(n,".",",")},v2c:function(n){gx.fn.setGridDecimalValue("CTLVALOR",n||gx.fn.currentGridRowImpl(40),gx.O.GXV116,2,",")},c2v:function(){gx.O.GXV116=this.val()},val:function(n){return gx.fn.getGridDecimalValue("CTLVALOR",n||gx.fn.currentGridRowImpl(40),".",",")},nac:gx.falseFn};this.AV9PessoaCNPJ="";this.ZV9PessoaCNPJ="";this.OV9PessoaCNPJ="";this.AV10PessoaRazaoSocial="";this.ZV10PessoaRazaoSocial="";this.OV10PessoaRazaoSocial="";this.AV8EspecieDescricao="";this.ZV8EspecieDescricao="";this.OV8EspecieDescricao="";this.AV6ContaPagRecDocumento="";this.ZV6ContaPagRecDocumento="";this.OV6ContaPagRecDocumento="";this.AV7ContapagrecDtpagamento=gx.date.nullDate();this.ZV7ContapagrecDtpagamento=gx.date.nullDate();this.OV7ContapagrecDtpagamento=gx.date.nullDate();this.AV11Valor=0;this.ZV11Valor=0;this.OV11Valor=0;this.ZV17GXV115="";this.OV17GXV115="";this.ZV18GXV116=0;this.OV18GXV116=0;this.AV9PessoaCNPJ="";this.AV10PessoaRazaoSocial="";this.AV8EspecieDescricao="";this.AV6ContaPagRecDocumento="";this.AV7ContapagrecDtpagamento=gx.date.nullDate();this.AV11Valor=0;this.AV5ContaPagRecNumero=0;this.GXV115="";this.GXV116=0;this.A1686ContaPagRecNumero=0;this.A1685ContaPagRecEmpresaId="";this.A1700ContaPagRecDtPagamento=gx.date.nullDate();this.A1695ContaPagRecDocumento="";this.A1696ContaPagRecSeqDocume="";this.A1641ContaPagRecEspecieDescricao="";this.A2996ContaPagRecCliForTipo="";this.A2003ContaPagRecCliForCNPJ="";this.A2002ContaPagRecCliForCPF="";this.A2182ContaPagRecCliForRazao="";this.A1715ContaPagRecVlrPagamento=0;this.A1636ContaPagRecCliForEmpId="";this.A1637ContaPagRecCliForId=0;this.A1639ContaPagRecEspecieEmpId="";this.A1640ContaPagRecEspecieId=0;this.A1794ContaRateioCCustoDescricao="";this.A1811ContaRateioValor=0;this.A1810ContaRateioSequencia=0;this.A1792ContaRateioCCustoEmpId="";this.A1793ContaRateioCCustoId="";this.Events={e1326i2_client:["ENTER",!0],e1426i1_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"AV13SdtPagamentos",fld:"vSDTPAGAMENTOS",grid:40}],[]];this.setVCMap("AV5ContaPagRecNumero","vCONTAPAGRECNUMERO",0,"int");this.addGridBCProperty("Sdtpagamentos",["CentroCustoDescricao"],this.GXValidFnc[41],"AV13SdtPagamentos");this.addGridBCProperty("Sdtpagamentos",["Valor"],this.GXValidFnc[42],"AV13SdtPagamentos");this.InitStandaloneVars()});gx.setParentObj(new hportaltransparenciacentrocusto)