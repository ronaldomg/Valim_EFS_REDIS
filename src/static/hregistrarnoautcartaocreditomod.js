/**@preserve  GeneXus Java 10_3_12-110051 on January 4, 2021 11:11:2.3
*
gx.evt.autoSkip=!1;gx.define("hregistrarnoautcartaocreditomod",!1,function(){var n,t;this.ServerClass="hregistrarnoautcartaocreditomod";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.refreshAndEnter=!0;this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV8SaidaEmpresaId=gx.fn.getControlValue("vSAIDAEMPRESAID");this.AV9SaidaId=gx.fn.getIntegerValue("vSAIDAID",".");this.AV10SNDocAutorizacao=gx.fn.getControlValue("vSNDOCAUTORIZACAO")};this.s122_client=function(){for(this.AV15SNErro="N",this.AV25NoLinha=gx.num.trunc(0,0),this.AV41GXV2=gx.num.trunc(1,0);this.AV41GXV2<=this.AV19SdtGrid.length;){if(this.AV18SdtGridItem=this.AV19SdtGrid[this.AV41GXV2-1],this.AV25NoLinha=gx.num.trunc(this.AV25NoLinha+1,0),""==this.AV18SdtGridItem.NoAutorizacao){this.addMessage("Informe o Número de Autorização do Cartão da linha "+gx.text.trim(gx.num.str(this.AV25NoLinha,4,0)));this.AV15SNErro="S";break}this.AV41GXV2=gx.num.trunc(this.AV41GXV2+1,0)}};this.e111fv2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e121fv2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e151fv2_client=function(){this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,10,12,14,17,19,21,23,28,30,31,32,33,34,35,36];this.GXLastCtrlId=36;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",29,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hregistrarnoautcartaocreditomod",[],!1,1,!0,!0,0,!1,!1,!1,"CollSdtRegistrarNoAutorizacaoMod.SdtRegistrarNoAutorizacaoModItem",0,"px","Novo registro",!1,!1,!1,null,null,!1,"AV19SdtGrid",!1,[1,1,1,1]);t=this.GridContainer;t.addSingleLineEdit("GXV10U",30,"CTLFORMAPGTOID","Código da Forma de Pagamento","","FormaPgtoId","int",0,"px",3,3,"right",null,[],"GXV10U","GXV10U",!1,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("GXV10V",31,"CTLFORMAPGTODESCRICAO","Forma","","FormaPgtoDescricao","svchar",0,"px",20,20,"left",null,[],"GXV10V","GXV10V",!0,0,!1,!1,"SemQuebraGrid",1,"");t.addSingleLineEdit("GXV10W",32,"CTLTPCOBRFORMAPGTOID","Código do Tipo de Cobrança","","TpCobrFormaPgtoId","int",0,"px",3,3,"right",null,[],"GXV10W","GXV10W",!1,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("GXV10X",33,"CTLTPCOBRFORMAPGTODESCRICAO","Tp. Cobrança","","TpCobrFormaPgtoDescricao","svchar",0,"px",25,25,"left",null,[],"GXV10X","GXV10X",!0,0,!1,!1,"SemQuebraGrid",1,"");t.addSingleLineEdit("GXV10Y",34,"CTLVALOR","Valor","","Valor","decimal",0,"px",22,22,"right",null,[],"GXV10Y","GXV10Y",!0,2,!1,!1,"Attribute",1,"");t.addSingleLineEdit("GXV10Z",35,"CTLNOAUTORIZACAO","No. Autorização","","NoAutorizacao","char",0,"px",20,20,"left",null,[],"GXV10Z","GXV10Z",!0,0,!1,!1,"Attribute",1,"");this.setGrid(t);n[2]={fld:"TABLE1",grid:0};n[5]={fld:"TABLE2",grid:0};n[8]={fld:"TXTCLIENTE",format:0,grid:0};n[10]={lvl:0,type:"svchar",len:50,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTE",gxz:"ZV11Cliente",gxold:"OV11Cliente",gxvar:"AV11Cliente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV11Cliente=n},v2z:function(n){gx.O.ZV11Cliente=n},v2c:function(){gx.fn.setControlValue("vCLIENTE",gx.O.AV11Cliente,0)},c2v:function(){gx.O.AV11Cliente=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTE")},nac:gx.falseFn};n[12]={fld:"TXTDATA",format:0,grid:0};n[14]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATA",gxz:"ZV14Data",gxold:"OV14Data",gxvar:"AV14Data",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV14Data=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV14Data=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vDATA",gx.O.AV14Data,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV14Data=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATA")},nac:gx.falseFn};this.declareDomainHdlr(14,function(){});n[17]={fld:"TXTDOC",format:0,grid:0};n[19]={lvl:0,type:"svchar",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDOCUMENTO",gxz:"ZV12Documento",gxold:"OV12Documento",gxvar:"AV12Documento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV12Documento=n},v2z:function(n){gx.O.ZV12Documento=n},v2c:function(){gx.fn.setControlValue("vDOCUMENTO",gx.O.AV12Documento,0)},c2v:function(){gx.O.AV12Documento=this.val()},val:function(){return gx.fn.getControlValue("vDOCUMENTO")},nac:gx.falseFn};n[21]={fld:"TXTVALOR",format:0,grid:0};n[23]={lvl:0,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALOR",gxz:"ZV13Valor",gxold:"OV13Valor",gxvar:"AV13Valor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV13Valor=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV13Valor=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vVALOR",gx.O.AV13Valor,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV13Valor=this.val()},val:function(){return gx.fn.getDecimalValue("vVALOR",".",",")},nac:gx.falseFn};this.declareDomainHdlr(23,function(){});n[28]={fld:"ROL1",format:2,grid:0};n[30]={lvl:2,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLFORMAPGTOID",gxz:"ZV31GXV10U",gxold:"OV31GXV10U",gxvar:"GXV10U",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.GXV10U=gx.num.intval(n)},v2z:function(n){gx.O.ZV31GXV10U=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("CTLFORMAPGTOID",n||gx.fn.currentGridRowImpl(29),gx.O.GXV10U,0)},c2v:function(){gx.O.GXV10U=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("CTLFORMAPGTOID",n||gx.fn.currentGridRowImpl(29),".")},nac:gx.falseFn};n[31]={lvl:2,type:"svchar",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLFORMAPGTODESCRICAO",gxz:"ZV32GXV10V",gxold:"OV32GXV10V",gxvar:"GXV10V",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.GXV10V=n},v2z:function(n){gx.O.ZV32GXV10V=n},v2c:function(n){gx.fn.setGridControlValue("CTLFORMAPGTODESCRICAO",n||gx.fn.currentGridRowImpl(29),gx.O.GXV10V,0)},c2v:function(){gx.O.GXV10V=this.val()},val:function(n){return gx.fn.getGridControlValue("CTLFORMAPGTODESCRICAO",n||gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};n[32]={lvl:2,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTPCOBRFORMAPGTOID",gxz:"ZV33GXV10W",gxold:"OV33GXV10W",gxvar:"GXV10W",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.GXV10W=gx.num.intval(n)},v2z:function(n){gx.O.ZV33GXV10W=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("CTLTPCOBRFORMAPGTOID",n||gx.fn.currentGridRowImpl(29),gx.O.GXV10W,0)},c2v:function(){gx.O.GXV10W=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("CTLTPCOBRFORMAPGTOID",n||gx.fn.currentGridRowImpl(29),".")},nac:gx.falseFn};n[33]={lvl:2,type:"svchar",len:25,dec:0,sign:!1,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTPCOBRFORMAPGTODESCRICAO",gxz:"ZV34GXV10X",gxold:"OV34GXV10X",gxvar:"GXV10X",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.GXV10X=n},v2z:function(n){gx.O.ZV34GXV10X=n},v2c:function(n){gx.fn.setGridControlValue("CTLTPCOBRFORMAPGTODESCRICAO",n||gx.fn.currentGridRowImpl(29),gx.O.GXV10X,0)},c2v:function(){gx.O.GXV10X=this.val()},val:function(n){return gx.fn.getGridControlValue("CTLTPCOBRFORMAPGTODESCRICAO",n||gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};n[34]={lvl:2,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALOR",gxz:"ZV35GXV10Y",gxold:"OV35GXV10Y",gxvar:"GXV10Y",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.GXV10Y=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV35GXV10Y=gx.fn.toDecimalValue(n,".",",")},v2c:function(n){gx.fn.setGridDecimalValue("CTLVALOR",n||gx.fn.currentGridRowImpl(29),gx.O.GXV10Y,2,",")},c2v:function(){gx.O.GXV10Y=this.val()},val:function(n){return gx.fn.getGridDecimalValue("CTLVALOR",n||gx.fn.currentGridRowImpl(29),".",",")},nac:gx.falseFn};n[35]={lvl:2,type:"char",len:20,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLNOAUTORIZACAO",gxz:"ZV36GXV10Z",gxold:"OV36GXV10Z",gxvar:"GXV10Z",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.GXV10Z=n},v2z:function(n){gx.O.ZV36GXV10Z=n},v2c:function(n){gx.fn.setGridControlValue("CTLNOAUTORIZACAO",n||gx.fn.currentGridRowImpl(29),gx.O.GXV10Z,0)},c2v:function(){gx.O.GXV10Z=this.val()},val:function(n){return gx.fn.getGridControlValue("CTLNOAUTORIZACAO",n||gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};n[36]={fld:"ROL2",format:2,grid:0};this.AV11Cliente="";this.ZV11Cliente="";this.OV11Cliente="";this.AV14Data=gx.date.nullDate();this.ZV14Data=gx.date.nullDate();this.OV14Data=gx.date.nullDate();this.AV12Documento="";this.ZV12Documento="";this.OV12Documento="";this.AV13Valor=0;this.ZV13Valor=0;this.OV13Valor=0;this.ZV31GXV10U=0;this.OV31GXV10U=0;this.ZV32GXV10V="";this.OV32GXV10V="";this.ZV33GXV10W=0;this.OV33GXV10W=0;this.ZV34GXV10X="";this.OV34GXV10X="";this.ZV35GXV10Y=0;this.OV35GXV10Y=0;this.ZV36GXV10Z="";this.OV36GXV10Z="";this.AV11Cliente="";this.AV14Data=gx.date.nullDate();this.AV12Documento="";this.AV13Valor=0;this.AV8SaidaEmpresaId="";this.AV9SaidaId=0;this.AV10SNDocAutorizacao="";this.GXV10U=0;this.GXV10V="";this.GXV10W=0;this.GXV10X="";this.GXV10Y=0;this.GXV10Z="";this.A4306SaidaEmpresaId="";this.A4307SaidaId=0;this.A9764SaidaPagtoParcelaFormaSnSolici="";this.A9119SaidaPagtoParcelaNoAutCartao="";this.A6240SaidaPagtoParcelaFormaDesc="";this.A6242SaidaPagtoParcelaFormaTpCobDes="";this.A6243SaidaPagtoParcelaValor=0;this.A6241SaidaPagtoParcelaFormaTpCobr=0;this.A6239SaidaPagtoParcelaFormaId=0;this.A6238SaidaPagtoParcelaFormaEmpId="";this.A5967SaidaClienteFantasia="";this.A5966SaidaClienteId=0;this.A5960SaidaNoDocumento=0;this.A5964SaidaDataEmissao=gx.date.nullDate();this.A10671SaidaValorICMSDesonerado=0;this.A10677SaidaValorFCPST=0;this.A6092SaidaFreteEntraTotal="";this.A6067SaidaValorFrete=0;this.A6077SaidaValorIPI=0;this.A6069SaidaValorOutrasDespesas=0;this.A6068SaidaValorSeguro=0;this.A6076SaidaValorICMSST=0;this.A6065SaidaValorDesconto=0;this.A6064SaidaValorProduto=0;this.A6063SaidaValorServico=0;this.A6086SaidaValorTotal=0;this.A5965SaidaClienteEmpresaId="";this.AV18SdtGridItem={};this.AV19SdtGrid=[];this.AV41GXV2=0;this.AV25NoLinha=0;this.AV15SNErro="";this.Events={e111fv2_client:["ENTER",!0],e121fv2_client:["'FECHAR'",!0],e151fv2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV19SdtGrid",fld:"vSDTGRID",grid:29}],[]];this.EvtParms.ENTER=[[{av:"AV15SNErro",fld:"vSNERRO"},{av:"AV8SaidaEmpresaId",fld:"vSAIDAEMPRESAID",hsh:!0},{av:"AV9SaidaId",fld:"vSAIDAID",hsh:!0},{av:"AV19SdtGrid",fld:"vSDTGRID",grid:29},{av:"AV26SNGravar",fld:"vSNGRAVAR"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"}],[{av:"AV19SdtGrid",fld:"vSDTGRID",grid:29},{av:"AV26SNGravar",fld:"vSNGRAVAR"},{av:"AV15SNErro",fld:"vSNERRO"},{av:"AV25NoLinha",fld:"vNOLINHA"},{av:"AV41GXV2",fld:"vGXV2"},{av:"AV18SdtGridItem",fld:"vSDTGRIDITEM"}]];this.EvtParms["'FECHAR'"]=[[{av:"AV26SNGravar",fld:"vSNGRAVAR"}],[{av:"AV26SNGravar",fld:"vSNGRAVAR"}]];this.EnterCtrl=["BTNGRAVAR"];this.setVCMap("A6063SaidaValorServico","SAIDAVALORSERVICO",0,"decimal");this.setVCMap("A6064SaidaValorProduto","SAIDAVALORPRODUTO",0,"decimal");this.setVCMap("A6065SaidaValorDesconto","SAIDAVALORDESCONTO",0,"decimal");this.setVCMap("A6076SaidaValorICMSST","SAIDAVALORICMSST",0,"decimal");this.setVCMap("A6068SaidaValorSeguro","SAIDAVALORSEGURO",0,"decimal");this.setVCMap("A6069SaidaValorOutrasDespesas","SAIDAVALOROUTRASDESPESAS",0,"decimal");this.setVCMap("A6077SaidaValorIPI","SAIDAVALORIPI",0,"decimal");this.setVCMap("A6067SaidaValorFrete","SAIDAVALORFRETE",0,"decimal");this.setVCMap("A6092SaidaFreteEntraTotal","SAIDAFRETEENTRATOTAL",0,"char");this.setVCMap("A10677SaidaValorFCPST","SAIDAVALORFCPST",0,"decimal");this.setVCMap("A10671SaidaValorICMSDesonerado","SAIDAVALORICMSDESONERADO",0,"decimal");this.setVCMap("A6086SaidaValorTotal","SAIDAVALORTOTAL",0,"decimal");this.setVCMap("AV8SaidaEmpresaId","vSAIDAEMPRESAID",0,"char");this.setVCMap("AV9SaidaId","vSAIDAID",0,"int");this.setVCMap("AV10SNDocAutorizacao","vSNDOCAUTORIZACAO",0,"char");this.addGridBCProperty("Sdtgrid",["FormaPgtoId"],this.GXValidFnc[30],"AV19SdtGrid");this.addGridBCProperty("Sdtgrid",["FormaPgtoDescricao"],this.GXValidFnc[31],"AV19SdtGrid");this.addGridBCProperty("Sdtgrid",["TpCobrFormaPgtoId"],this.GXValidFnc[32],"AV19SdtGrid");this.addGridBCProperty("Sdtgrid",["TpCobrFormaPgtoDescricao"],this.GXValidFnc[33],"AV19SdtGrid");this.addGridBCProperty("Sdtgrid",["Valor"],this.GXValidFnc[34],"AV19SdtGrid");this.addGridBCProperty("Sdtgrid",["NoAutorizacao"],this.GXValidFnc[35],"AV19SdtGrid");this.InitStandaloneVars()});gx.setParentObj(new hregistrarnoautcartaocreditomod)