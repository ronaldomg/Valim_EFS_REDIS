/**@preserve  GeneXus Java 10_3_12-110051 on February 13, 2021 12:50:58.82
*/
gx.evt.autoSkip=!1;gx.define("hvendascliente",!1,function(){var n,t;this.ServerClass="hvendascliente";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV18SdtPreVenda=gx.fn.getControlValue("vSDTPREVENDA");this.AV5PessoaId=gx.fn.getIntegerValue("vPESSOAID",".")};this.Validv_Saidaid=function(){try{var n=gx.util.balloon.getNew("vSAIDAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e112b52_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e122b52_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e152b52_client=function(){this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,11,13,18,20,21,22,23,24,25];this.GXLastCtrlId=25;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",19,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hvendascliente",[],!1,1,!1,!0,0,!0,!1,!1,"",0,"px","Novo registro",!0,!1,!0,null,null,!1,"",!1,[1,1,1,1]);t=this.GridContainer;t.addSingleLineEdit("Saidaid",20,"vSAIDAID","Id Saída","","SaidaId","int",0,"px",10,10,"right",null,[],"Saidaid","SaidaId",!0,0,!1,!1,"AttributeSemMargem",1,"");t.addSingleLineEdit("Saidanodocumento",21,"vSAIDANODOCUMENTO","No.Documento","","SaidaNoDocumento","int",0,"px",10,10,"right",null,[],"Saidanodocumento","SaidaNoDocumento",!0,0,!1,!1,"AttributeSemMargem",1,"");t.addSingleLineEdit("Saidaqtdetotalitens",22,"vSAIDAQTDETOTALITENS","Qtde Itens","","SaidaQtdeTotalItens","decimal",0,"px",21,21,"right",null,[],"Saidaqtdetotalitens","SaidaQtdeTotalItens",!0,4,!1,!1,"AttributeSemMargem",1,"");t.addSingleLineEdit("Saidavalortotal",23,"vSAIDAVALORTOTAL","Valor Total","","SaidaValorTotal","decimal",0,"px",22,22,"right",null,[],"Saidavalortotal","SaidaValorTotal",!0,2,!1,!1,"AttributeSemMargem",1,"");t.addCheckBox("Snseleciona",24,"vSNSELECIONA","","","SnSeleciona","char","S","N",null,!0,!1,0,"px","GridColumnImage");this.setGrid(t);n[2]={fld:"TABLE1",grid:0};n[5]={fld:"TABLE2",grid:0};n[8]={fld:"TABLE3",grid:0};n[11]={fld:"TEXTBLOCK1",format:0,grid:0};n[13]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOARAZAOSOCIAL",gxz:"ZV10PessoaRazaoSocial",gxold:"OV10PessoaRazaoSocial",gxvar:"AV10PessoaRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV10PessoaRazaoSocial=n},v2z:function(n){gx.O.ZV10PessoaRazaoSocial=n},v2c:function(){gx.fn.setControlValue("vPESSOARAZAOSOCIAL",gx.O.AV10PessoaRazaoSocial,0)},c2v:function(){gx.O.AV10PessoaRazaoSocial=this.val()},val:function(){return gx.fn.getControlValue("vPESSOARAZAOSOCIAL")},nac:gx.falseFn};n[18]={fld:"DIV1",format:2,grid:0};n[20]={lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:this.Validv_Saidaid,isvalid:null,rgrid:[],fld:"vSAIDAID",gxz:"ZV13SaidaId",gxold:"OV13SaidaId",gxvar:"AV13SaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV13SaidaId=gx.num.intval(n)},v2z:function(n){gx.O.ZV13SaidaId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("vSAIDAID",n||gx.fn.currentGridRowImpl(19),gx.O.AV13SaidaId,0)},c2v:function(){gx.O.AV13SaidaId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("vSAIDAID",n||gx.fn.currentGridRowImpl(19),".")},nac:gx.falseFn};n[21]={lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDANODOCUMENTO",gxz:"ZV15SaidaNoDocumento",gxold:"OV15SaidaNoDocumento",gxvar:"AV15SaidaNoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV15SaidaNoDocumento=gx.num.intval(n)},v2z:function(n){gx.O.ZV15SaidaNoDocumento=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("vSAIDANODOCUMENTO",n||gx.fn.currentGridRowImpl(19),gx.O.AV15SaidaNoDocumento,0)},c2v:function(){gx.O.AV15SaidaNoDocumento=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("vSAIDANODOCUMENTO",n||gx.fn.currentGridRowImpl(19),".")},nac:gx.falseFn};n[22]={lvl:2,type:"decimal",len:18,dec:4,sign:!0,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAQTDETOTALITENS",gxz:"ZV16SaidaQtdeTotalItens",gxold:"OV16SaidaQtdeTotalItens",gxvar:"AV16SaidaQtdeTotalItens",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV16SaidaQtdeTotalItens=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV16SaidaQtdeTotalItens=gx.fn.toDecimalValue(n,".",",")},v2c:function(n){gx.fn.setGridDecimalValue("vSAIDAQTDETOTALITENS",n||gx.fn.currentGridRowImpl(19),gx.O.AV16SaidaQtdeTotalItens,4,",")},c2v:function(){gx.O.AV16SaidaQtdeTotalItens=this.val()},val:function(n){return gx.fn.getGridDecimalValue("vSAIDAQTDETOTALITENS",n||gx.fn.currentGridRowImpl(19),".",",")},nac:gx.falseFn};n[23]={lvl:2,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAVALORTOTAL",gxz:"ZV17SaidaValorTotal",gxold:"OV17SaidaValorTotal",gxvar:"AV17SaidaValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV17SaidaValorTotal=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV17SaidaValorTotal=gx.fn.toDecimalValue(n,".",",")},v2c:function(n){gx.fn.setGridDecimalValue("vSAIDAVALORTOTAL",n||gx.fn.currentGridRowImpl(19),gx.O.AV17SaidaValorTotal,2,",")},c2v:function(){gx.O.AV17SaidaValorTotal=this.val()},val:function(n){return gx.fn.getGridDecimalValue("vSAIDAVALORTOTAL",n||gx.fn.currentGridRowImpl(19),".",",")},nac:gx.falseFn};n[24]={lvl:2,type:"char",len:1,dec:0,sign:!1,ro:0,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSNSELECIONA",gxz:"ZV21SnSeleciona",gxold:"OV21SnSeleciona",gxvar:"AV21SnSeleciona",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:"text",v2v:function(n){gx.O.AV21SnSeleciona=n},v2z:function(n){gx.O.ZV21SnSeleciona=n},v2c:function(n){gx.fn.setGridCheckBoxValue("vSNSELECIONA",n||gx.fn.currentGridRowImpl(19),gx.O.AV21SnSeleciona,"S")},c2v:function(){gx.O.AV21SnSeleciona=this.val()},val:function(n){return gx.fn.getGridControlValue("vSNSELECIONA",n||gx.fn.currentGridRowImpl(19))},nac:gx.falseFn,values:["S","N"]};n[25]={fld:"DIV2",format:2,grid:0};this.AV10PessoaRazaoSocial="";this.ZV10PessoaRazaoSocial="";this.OV10PessoaRazaoSocial="";this.ZV13SaidaId=0;this.OV13SaidaId=0;this.ZV15SaidaNoDocumento=0;this.OV15SaidaNoDocumento=0;this.ZV16SaidaQtdeTotalItens=0;this.OV16SaidaQtdeTotalItens=0;this.ZV17SaidaValorTotal=0;this.OV17SaidaValorTotal=0;this.ZV21SnSeleciona="";this.OV21SnSeleciona="";this.AV10PessoaRazaoSocial="";this.AV5PessoaId=0;this.AV13SaidaId=0;this.AV15SaidaNoDocumento=0;this.AV16SaidaQtdeTotalItens=0;this.AV17SaidaValorTotal=0;this.AV21SnSeleciona="";this.A10995AgrupamentoSaidaId=0;this.A10994AgrupamentoSaidaEmpId="";this.A10990AgrupamentoEmpresaId="";this.A5958SaidaSituacaoGravacao="";this.A5959SaidaSituacao="";this.A6627SaidaTransacaoTipoPreVenda="";this.A4308SaidaTipo="";this.A5966SaidaClienteId=0;this.A5964SaidaDataEmissao=gx.date.nullDate();this.A4306SaidaEmpresaId="";this.A4307SaidaId=0;this.A5968SaidaClienteRazao="";this.A5960SaidaNoDocumento=0;this.A6067SaidaValorFrete=0;this.A6065SaidaValorDesconto=0;this.A6069SaidaValorOutrasDespesas=0;this.A6064SaidaValorProduto=0;this.A9397SaidaQtdeTotalItens=0;this.A5965SaidaClienteEmpresaId="";this.A6397SaidaTransacaoEmpresa="";this.A6398SaidaTransacaoCodigo="";this.AV18SdtPreVenda=[];this.Events={e112b52_client:["'FECHAR'",!0],e122b52_client:["ENTER",!0],e152b52_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV13SaidaId",fld:"vSAIDAID"},{av:"AV18SdtPreVenda",fld:"vSDTPREVENDA"}],[]];this.EvtParms["'FECHAR'"]=[[{av:"AV14SaidaIdCupom",fld:"vSAIDAIDCUPOM"}],[{av:"AV14SaidaIdCupom",fld:"vSAIDAIDCUPOM"}]];this.EvtParms["GRID.LOAD"]=[[{av:"AV18SdtPreVenda",fld:"vSDTPREVENDA"}],[{av:"AV29GXV1",fld:"vGXV1"},{av:"AV19SdtPreVendaItem",fld:"vSDTPREVENDAITEM"},{av:"AV13SaidaId",fld:"vSAIDAID"},{av:"AV15SaidaNoDocumento",fld:"vSAIDANODOCUMENTO"},{av:"AV16SaidaQtdeTotalItens",fld:"vSAIDAQTDETOTALITENS"},{av:"AV17SaidaValorTotal",fld:"vSAIDAVALORTOTAL"},{av:"AV21SnSeleciona",fld:"vSNSELECIONA"}]];this.EvtParms.ENTER=[[{av:"AV11Qtde",fld:"vQTDE"},{av:"AV14SaidaIdCupom",fld:"vSAIDAIDCUPOM"},{av:"AV18SdtPreVenda",fld:"vSDTPREVENDA"},{av:"AV13SaidaId",fld:"vSAIDAID",grid:19},{av:"AV21SnSeleciona",fld:"vSNSELECIONA",grid:19}],[{av:"AV11Qtde",fld:"vQTDE"},{av:"AV14SaidaIdCupom",fld:"vSAIDAIDCUPOM"},{av:"AV30GXV2",fld:"vGXV2"},{av:"AV19SdtPreVendaItem",fld:"vSDTPREVENDAITEM"},{av:"AV18SdtPreVenda",fld:"vSDTPREVENDA"},{av:"AV32GXV3",fld:"vGXV3"}]];this.EvtParms.GRID_FIRSTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV13SaidaId",fld:"vSAIDAID"},{av:"AV18SdtPreVenda",fld:"vSDTPREVENDA"}],[]];this.EvtParms.GRID_PREVPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV13SaidaId",fld:"vSAIDAID"},{av:"AV18SdtPreVenda",fld:"vSDTPREVENDA"}],[]];this.EvtParms.GRID_NEXTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV13SaidaId",fld:"vSAIDAID"},{av:"AV18SdtPreVenda",fld:"vSDTPREVENDA"}],[]];this.EvtParms.GRID_LASTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV13SaidaId",fld:"vSAIDAID"},{av:"AV18SdtPreVenda",fld:"vSDTPREVENDA"}],[]];this.EnterCtrl=["BUTTON1"];this.setVCMap("AV18SdtPreVenda","vSDTPREVENDA",0,"CollSdtPreVenda.SdtPreVendaItem");this.setVCMap("AV5PessoaId","vPESSOAID",0,"int");this.setVCMap("AV18SdtPreVenda","vSDTPREVENDA",0,"CollSdtPreVenda.SdtPreVendaItem");t.addRefreshingVar({rfrVar:"AV13SaidaId",rfrProp:"Value",gxAttId:"Saidaid"});t.addRefreshingVar({rfrVar:"AV18SdtPreVenda"});this.InitStandaloneVars()});gx.setParentObj(new hvendascliente)