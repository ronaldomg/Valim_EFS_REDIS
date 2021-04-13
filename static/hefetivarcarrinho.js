/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 17:42:51.29
*/
gx.evt.autoSkip=!1;gx.define("hefetivarcarrinho",!1,function(){var n,t;this.ServerClass="hefetivarcarrinho";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.refreshAndEnter=!0;this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("7","'GXM_PREVIOUS'");this.addKeyListener("8","'GXM_NEXT'");this.addKeyListener("6","'GXM_FIRST'");this.addKeyListener("9","'GXM_LAST'");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV15SnErro=gx.fn.getControlValue("vSNERRO");this.AV20Carrinho=gx.fn.getControlValue("vCARRINHO");this.AV18Erro=gx.fn.getControlValue("vERRO");this.AV21EmpresaVenda=gx.fn.getControlValue("vEMPRESAVENDA");this.AV22CarrinhoItem=gx.fn.getControlValue("vCARRINHOITEM");this.A1229VendedorEmpresaId=gx.fn.getControlValue("VENDEDOREMPRESAID");this.A1237VendedorId=gx.fn.getIntegerValue("VENDEDORID",".");this.A1148VendedorNome=gx.fn.getControlValue("VENDEDORNOME");this.A2964ProdutoEmpresaId=gx.fn.getControlValue("PRODUTOEMPRESAID");this.A2965ProdutoId=gx.fn.getIntegerValue("PRODUTOID",".");this.AV14CPFCliente=gx.fn.getControlValue("vCPFCLIENTE");this.AV13VendedorId=gx.fn.getIntegerValue("vVENDEDORID",".")};this.Validv_Vendedorentrada=function(){try{var n=gx.util.balloon.getNew("vVENDEDORENTRADA");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Produtoid=function(){try{var n=gx.util.balloon.getNew("vPRODUTOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Vendedorempresaid=function(){try{var n=gx.util.balloon.getNew("vVENDEDOREMPRESAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.s172_client=function(){this.AV65ProdutoEmpresaId="";this.AV66ProdutoId=gx.num.trunc(0,0);this.AV69ProdutoNome="";this.AV70Att1="";this.AV71Att2="";this.AV72Att3="";this.AV73Att4="";this.AV74Att5="";this.AV76LoteUnico="";this.AV75QtdeGrid=0;this.AV77ValorUnit=0;this.AV78TotalGrid=0};this.s162_client=function(){this.AV22CarrinhoItem.RetTrCarrinhoSituacao=="F"&&(this.AV26Situacao="Finalizado")};this.s142_client=function(){this.AV15SnErro="N";""==this.AV37CpfEntrada&&this.AV15SnErro=="N"&&(this.addMessage("Informe o CPF"),gx.fn.usrSetFocus("vCPFENTRADA"),this.AV15SnErro="S");0==this.AV38VendedorEntrada&&this.AV15SnErro=="N"&&(this.addMessage("Informe o Vendedor"),gx.fn.usrSetFocus("vVENDEDORENTRADA"),this.AV15SnErro="S")};this.e1114m2_client=function(){this.executeServerEvent("'GXM_PREVIOUS'",!0,null,!1,!1)};this.e1214m2_client=function(){this.executeServerEvent("'GXM_NEXT'",!0,null,!1,!1)};this.e1314m2_client=function(){this.executeServerEvent("'GXM_FIRST'",!0,null,!1,!1)};this.e1414m2_client=function(){this.executeServerEvent("'GXM_LAST'",!0,null,!1,!1)};this.e1514m2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e1614m2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e1714m2_client=function(){this.executeServerEvent("'NOVO'",!1,null,!1,!1)};this.e2114m2_client=function(){this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,11,13,15,17,18,19,24,27,29,30,31,33,35,38,40,42,44,49,51,52,53,54,55,56,57,58,59,60,61,62,65,68,70,72,74,77,81,85,90,93,95,98,100,112,113,114,115,116,117,118,119];this.GXLastCtrlId=119;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",50,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hefetivarcarrinho",[],!1,1,!0,!0,0,!1,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.GridContainer;t.addSingleLineEdit("Produtoid",51,"vPRODUTOID","Produto","","ProdutoId","int",0,"px",10,10,"right",null,[],"Produtoid","ProdutoId",!0,0,!1,!1,"SemQuebraGrid",1,"");t.addSingleLineEdit("Produtonome",52,"vPRODUTONOME","Descrição","","ProdutoNome","svchar",0,"px",40,40,"left",null,[],"Produtonome","ProdutoNome",!0,0,!1,!1,"SemQuebraGrid",1,"");t.addSingleLineEdit("Att1",53,"vATT1","","","Att1","char",0,"px",15,15,"left",null,[],"Att1","Att1",!0,0,!1,!1,"SemQuebraGrid",1,"");t.addSingleLineEdit("Att2",54,"vATT2","","","Att2","char",0,"px",15,15,"left",null,[],"Att2","Att2",!0,0,!1,!1,"SemQuebraGrid",1,"");t.addSingleLineEdit("Att3",55,"vATT3","","","Att3","char",0,"px",15,15,"left",null,[],"Att3","Att3",!0,0,!1,!1,"SemQuebraGrid",1,"");t.addSingleLineEdit("Att4",56,"vATT4","","","Att4","char",0,"px",15,15,"left",null,[],"Att4","Att4",!0,0,!1,!1,"SemQuebraGrid",1,"");t.addSingleLineEdit("Att5",57,"vATT5","","","Att5","char",0,"px",15,15,"left",null,[],"Att5","Att5",!0,0,!1,!1,"SemQuebraGrid",1,"");t.addSingleLineEdit("Loteunico",58,"vLOTEUNICO","Lote Único","","LoteUnico","char",0,"px",15,15,"left",null,[],"Loteunico","LoteUnico",!0,0,!1,!1,"SemQuebraGrid",1,"");t.addSingleLineEdit("Qtdegrid",59,"vQTDEGRID","Quantidade","","QtdeGrid","decimal",0,"px",18,18,"right",null,[],"Qtdegrid","QtdeGrid",!0,2,!1,!1,"SemQuebraGrid",1,"");t.addSingleLineEdit("Valorunit",60,"vVALORUNIT","Valor Únitario","","ValorUnit","decimal",0,"px",18,18,"right",null,[],"Valorunit","ValorUnit",!0,2,!1,!1,"SemQuebraGrid",1,"");t.addSingleLineEdit("Totalgrid",61,"vTOTALGRID","Total","","TotalGrid","decimal",0,"px",18,18,"right",null,[],"Totalgrid","TotalGrid",!0,2,!1,!1,"SemQuebraGrid",1,"");this.setGrid(t);n[2]={fld:"TABLE5",grid:0};n[5]={fld:"TABLE2",grid:0};n[8]={fld:"TABVALIDACAO",grid:0};n[11]={fld:"TEXTBLOCK18",format:0,grid:0};n[13]={lvl:0,type:"char",len:14,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCPFENTRADA",gxz:"ZV37CpfEntrada",gxold:"OV37CpfEntrada",gxvar:"AV37CpfEntrada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV37CpfEntrada=n},v2z:function(n){gx.O.ZV37CpfEntrada=n},v2c:function(){gx.fn.setControlValue("vCPFENTRADA",gx.O.AV37CpfEntrada,0)},c2v:function(){gx.O.AV37CpfEntrada=this.val()},val:function(){return gx.fn.getControlValue("vCPFENTRADA")},nac:gx.falseFn};n[15]={fld:"TEXTBLOCK24",format:0,grid:0};n[17]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Vendedorentrada,isvalid:null,rgrid:[],fld:"vVENDEDORENTRADA",gxz:"ZV38VendedorEntrada",gxold:"OV38VendedorEntrada",gxvar:"AV38VendedorEntrada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV38VendedorEntrada=gx.num.intval(n)},v2z:function(n){gx.O.ZV38VendedorEntrada=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vVENDEDORENTRADA",gx.O.AV38VendedorEntrada,0)},c2v:function(){gx.O.AV38VendedorEntrada=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORENTRADA",".")},nac:gx.falseFn};n[18]={fld:"TRACO",format:0,grid:0};n[19]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORNOME",gxz:"ZV33VendedorNome",gxold:"OV33VendedorNome",gxvar:"AV33VendedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV33VendedorNome=n},v2z:function(n){gx.O.ZV33VendedorNome=n},v2c:function(){gx.fn.setControlValue("vVENDEDORNOME",gx.O.AV33VendedorNome,0)},c2v:function(){gx.O.AV33VendedorNome=this.val()},val:function(){return gx.fn.getControlValue("vVENDEDORNOME")},nac:gx.falseFn};n[24]={fld:"TABITEM",grid:0};n[27]={fld:"TEXTBLOCK17",format:0,grid:0};n[29]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIAL",gxz:"ZV27Filial",gxold:"OV27Filial",gxvar:"AV27Filial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV27Filial=gx.num.intval(n)},v2z:function(n){gx.O.ZV27Filial=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vFILIAL",gx.O.AV27Filial,0)},c2v:function(){gx.O.AV27Filial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIAL",".")},nac:gx.falseFn};n[30]={fld:"TEXTBLOCK27",format:0,grid:0};n[31]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV40FilialNome",gxold:"OV40FilialNome",gxvar:"AV40FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV40FilialNome=n},v2z:function(n){gx.O.ZV40FilialNome=n},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV40FilialNome,0)},c2v:function(){gx.O.AV40FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};n[33]={fld:"TEXTBLOCK23",format:0,grid:0};n[35]={lvl:0,type:"svchar",len:128,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEVICEID",gxz:"ZV28DeviceId",gxold:"OV28DeviceId",gxvar:"AV28DeviceId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV28DeviceId=n},v2z:function(n){gx.O.ZV28DeviceId=n},v2c:function(){gx.fn.setControlValue("vDEVICEID",gx.O.AV28DeviceId,0)},c2v:function(){gx.O.AV28DeviceId=this.val()},val:function(){return gx.fn.getControlValue("vDEVICEID")},nac:gx.falseFn};n[38]={fld:"TEXTBLOCK21",format:0,grid:0};n[40]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNUMERO",gxz:"ZV23Numero",gxold:"OV23Numero",gxvar:"AV23Numero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV23Numero=gx.num.intval(n)},v2z:function(n){gx.O.ZV23Numero=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vNUMERO",gx.O.AV23Numero,0)},c2v:function(){gx.O.AV23Numero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMERO",".")},nac:gx.falseFn};n[42]={fld:"TEXTBLOCK25",format:0,grid:0};n[44]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATA",gxz:"ZV25Data",gxold:"OV25Data",gxvar:"AV25Data",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV25Data=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV25Data=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vDATA",gx.O.AV25Data,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV25Data=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATA")},nac:gx.falseFn};this.declareDomainHdlr(44,function(){});n[49]={fld:"DIV1",format:2,grid:0};n[51]={lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV66ProdutoId",gxold:"OV66ProdutoId",gxvar:"AV66ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV66ProdutoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV66ProdutoId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("vPRODUTOID",n||gx.fn.currentGridRowImpl(50),gx.O.AV66ProdutoId,0)},c2v:function(){gx.O.AV66ProdutoId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("vPRODUTOID",n||gx.fn.currentGridRowImpl(50),".")},nac:gx.falseFn};n[52]={lvl:2,type:"svchar",len:40,dec:0,sign:!1,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTONOME",gxz:"ZV69ProdutoNome",gxold:"OV69ProdutoNome",gxvar:"AV69ProdutoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.AV69ProdutoNome=n},v2z:function(n){gx.O.ZV69ProdutoNome=n},v2c:function(n){gx.fn.setGridControlValue("vPRODUTONOME",n||gx.fn.currentGridRowImpl(50),gx.O.AV69ProdutoNome,0)},c2v:function(){gx.O.AV69ProdutoNome=this.val()},val:function(n){return gx.fn.getGridControlValue("vPRODUTONOME",n||gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};n[53]={lvl:2,type:"char",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vATT1",gxz:"ZV70Att1",gxold:"OV70Att1",gxvar:"AV70Att1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.AV70Att1=n},v2z:function(n){gx.O.ZV70Att1=n},v2c:function(n){gx.fn.setGridControlValue("vATT1",n||gx.fn.currentGridRowImpl(50),gx.O.AV70Att1,0)},c2v:function(){gx.O.AV70Att1=this.val()},val:function(n){return gx.fn.getGridControlValue("vATT1",n||gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};n[54]={lvl:2,type:"char",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vATT2",gxz:"ZV71Att2",gxold:"OV71Att2",gxvar:"AV71Att2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.AV71Att2=n},v2z:function(n){gx.O.ZV71Att2=n},v2c:function(n){gx.fn.setGridControlValue("vATT2",n||gx.fn.currentGridRowImpl(50),gx.O.AV71Att2,0)},c2v:function(){gx.O.AV71Att2=this.val()},val:function(n){return gx.fn.getGridControlValue("vATT2",n||gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};n[55]={lvl:2,type:"char",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vATT3",gxz:"ZV72Att3",gxold:"OV72Att3",gxvar:"AV72Att3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.AV72Att3=n},v2z:function(n){gx.O.ZV72Att3=n},v2c:function(n){gx.fn.setGridControlValue("vATT3",n||gx.fn.currentGridRowImpl(50),gx.O.AV72Att3,0)},c2v:function(){gx.O.AV72Att3=this.val()},val:function(n){return gx.fn.getGridControlValue("vATT3",n||gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};n[56]={lvl:2,type:"char",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vATT4",gxz:"ZV73Att4",gxold:"OV73Att4",gxvar:"AV73Att4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.AV73Att4=n},v2z:function(n){gx.O.ZV73Att4=n},v2c:function(n){gx.fn.setGridControlValue("vATT4",n||gx.fn.currentGridRowImpl(50),gx.O.AV73Att4,0)},c2v:function(){gx.O.AV73Att4=this.val()},val:function(n){return gx.fn.getGridControlValue("vATT4",n||gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};n[57]={lvl:2,type:"char",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vATT5",gxz:"ZV74Att5",gxold:"OV74Att5",gxvar:"AV74Att5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.AV74Att5=n},v2z:function(n){gx.O.ZV74Att5=n},v2c:function(n){gx.fn.setGridControlValue("vATT5",n||gx.fn.currentGridRowImpl(50),gx.O.AV74Att5,0)},c2v:function(){gx.O.AV74Att5=this.val()},val:function(n){return gx.fn.getGridControlValue("vATT5",n||gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};n[58]={lvl:2,type:"char",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEUNICO",gxz:"ZV76LoteUnico",gxold:"OV76LoteUnico",gxvar:"AV76LoteUnico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.AV76LoteUnico=n},v2z:function(n){gx.O.ZV76LoteUnico=n},v2c:function(n){gx.fn.setGridControlValue("vLOTEUNICO",n||gx.fn.currentGridRowImpl(50),gx.O.AV76LoteUnico,0)},c2v:function(){gx.O.AV76LoteUnico=this.val()},val:function(n){return gx.fn.getGridControlValue("vLOTEUNICO",n||gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};n[59]={lvl:2,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZZZZZZZZZZZZ9.99",ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEGRID",gxz:"ZV75QtdeGrid",gxold:"OV75QtdeGrid",gxvar:"AV75QtdeGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV75QtdeGrid=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV75QtdeGrid=gx.fn.toDecimalValue(n,".",",")},v2c:function(n){gx.fn.setGridDecimalValue("vQTDEGRID",n||gx.fn.currentGridRowImpl(50),gx.O.AV75QtdeGrid,2,",")},c2v:function(){gx.O.AV75QtdeGrid=this.val()},val:function(n){return gx.fn.getGridDecimalValue("vQTDEGRID",n||gx.fn.currentGridRowImpl(50),".",",")},nac:gx.falseFn};n[60]={lvl:2,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZZZZZZZZZZZZ9.99",ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vVALORUNIT",gxz:"ZV77ValorUnit",gxold:"OV77ValorUnit",gxvar:"AV77ValorUnit",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV77ValorUnit=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV77ValorUnit=gx.fn.toDecimalValue(n,".",",")},v2c:function(n){gx.fn.setGridDecimalValue("vVALORUNIT",n||gx.fn.currentGridRowImpl(50),gx.O.AV77ValorUnit,2,",")},c2v:function(){gx.O.AV77ValorUnit=this.val()},val:function(n){return gx.fn.getGridDecimalValue("vVALORUNIT",n||gx.fn.currentGridRowImpl(50),".",",")},nac:gx.falseFn};n[61]={lvl:2,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZZZZZZZZZZZZ9.99",ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTOTALGRID",gxz:"ZV78TotalGrid",gxold:"OV78TotalGrid",gxvar:"AV78TotalGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV78TotalGrid=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV78TotalGrid=gx.fn.toDecimalValue(n,".",",")},v2c:function(n){gx.fn.setGridDecimalValue("vTOTALGRID",n||gx.fn.currentGridRowImpl(50),gx.O.AV78TotalGrid,2,",")},c2v:function(){gx.O.AV78TotalGrid=this.val()},val:function(n){return gx.fn.getGridDecimalValue("vTOTALGRID",n||gx.fn.currentGridRowImpl(50),".",",")},nac:gx.falseFn};n[62]={fld:"DIV2",format:2,grid:0};n[65]={fld:"TABLE1",grid:0};n[68]={fld:"IMAGE1",grid:0};n[70]={fld:"IMAGE2",grid:0};n[72]={fld:"IMAGE3",grid:0};n[74]={fld:"IMAGE4",grid:0};n[77]={fld:"TABLE3",grid:0};n[81]={fld:"TEXTBLOCK3",format:0,grid:0};n[85]={fld:"TEXTBLOCK4",format:0,grid:0};n[90]={fld:"TABLE4",grid:0};n[93]={fld:"TEXTBLOCK1",format:0,grid:0};n[95]={lvl:0,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZZZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQUANTIDADE",gxz:"ZV63Quantidade",gxold:"OV63Quantidade",gxvar:"AV63Quantidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV63Quantidade=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV63Quantidade=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vQUANTIDADE",gx.O.AV63Quantidade,2,",")},c2v:function(){gx.O.AV63Quantidade=this.val()},val:function(){return gx.fn.getDecimalValue("vQUANTIDADE",".",",")},nac:gx.falseFn};n[98]={fld:"TEXTBLOCK5",format:0,grid:0};n[100]={lvl:0,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZZZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORTOTAL",gxz:"ZV62ValorTotal",gxold:"OV62ValorTotal",gxvar:"AV62ValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV62ValorTotal=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV62ValorTotal=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vVALORTOTAL",gx.O.AV62ValorTotal,2,",")},c2v:function(){gx.O.AV62ValorTotal=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORTOTAL",".",",")},nac:gx.falseFn};n[112]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEREDBY",gxz:"ZV49OrderedBy",gxold:"OV49OrderedBy",gxvar:"AV49OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV49OrderedBy=gx.num.intval(n)},v2z:function(n){gx.O.ZV49OrderedBy=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV49OrderedBy,0)},c2v:function(){gx.O.AV49OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",".")},nac:gx.falseFn};n[113]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Vendedorempresaid,isvalid:null,rgrid:[],fld:"vVENDEDOREMPRESAID",gxz:"ZV32VendedorEmpresaId",gxold:"OV32VendedorEmpresaId",gxvar:"AV32VendedorEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV32VendedorEmpresaId=n},v2z:function(n){gx.O.ZV32VendedorEmpresaId=n},v2c:function(){gx.fn.setControlValue("vVENDEDOREMPRESAID",gx.O.AV32VendedorEmpresaId,0)},c2v:function(){gx.O.AV32VendedorEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vVENDEDOREMPRESAID")},nac:gx.falseFn};n[114]={fld:"JS",format:2,grid:0};n[115]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV51PaginaAux",gxold:"OV51PaginaAux",gxvar:"AV51PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV51PaginaAux=gx.num.intval(n)},v2z:function(n){gx.O.ZV51PaginaAux=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV51PaginaAux,0)},c2v:function(){gx.O.AV51PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",".")},nac:gx.falseFn};n[116]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV52Pagina",gxold:"OV52Pagina",gxvar:"AV52Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV52Pagina=gx.num.intval(n)},v2z:function(n){gx.O.ZV52Pagina=gx.num.intval(n)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV52Pagina)},c2v:function(){gx.O.AV52Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",".")},nac:gx.falseFn};n[117]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTPAGINAS",gxz:"ZV55QtPaginas",gxold:"OV55QtPaginas",gxvar:"AV55QtPaginas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV55QtPaginas=gx.num.intval(n)},v2z:function(n){gx.O.ZV55QtPaginas=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vQTPAGINAS",gx.O.AV55QtPaginas,0)},c2v:function(){gx.O.AV55QtPaginas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTPAGINAS",".")},nac:gx.falseFn};n[118]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNEXISTE",gxz:"ZV67SNExiste",gxold:"OV67SNExiste",gxvar:"AV67SNExiste",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV67SNExiste=n},v2z:function(n){gx.O.ZV67SNExiste=n},v2c:function(){gx.fn.setControlValue("vSNEXISTE",gx.O.AV67SNExiste,0)},c2v:function(){gx.O.AV67SNExiste=this.val()},val:function(){return gx.fn.getControlValue("vSNEXISTE")},nac:gx.falseFn};n[119]={fld:"PROMPT_VENDEDORENTRADA",grid:0};this.AV37CpfEntrada="";this.ZV37CpfEntrada="";this.OV37CpfEntrada="";this.AV38VendedorEntrada=0;this.ZV38VendedorEntrada=0;this.OV38VendedorEntrada=0;this.AV33VendedorNome="";this.ZV33VendedorNome="";this.OV33VendedorNome="";this.AV27Filial=0;this.ZV27Filial=0;this.OV27Filial=0;this.AV40FilialNome="";this.ZV40FilialNome="";this.OV40FilialNome="";this.AV28DeviceId="";this.ZV28DeviceId="";this.OV28DeviceId="";this.AV23Numero=0;this.ZV23Numero=0;this.OV23Numero=0;this.AV25Data=gx.date.nullDate();this.ZV25Data=gx.date.nullDate();this.OV25Data=gx.date.nullDate();this.ZV66ProdutoId=0;this.OV66ProdutoId=0;this.ZV69ProdutoNome="";this.OV69ProdutoNome="";this.ZV70Att1="";this.OV70Att1="";this.ZV71Att2="";this.OV71Att2="";this.ZV72Att3="";this.OV72Att3="";this.ZV73Att4="";this.OV73Att4="";this.ZV74Att5="";this.OV74Att5="";this.ZV76LoteUnico="";this.OV76LoteUnico="";this.ZV75QtdeGrid=0;this.OV75QtdeGrid=0;this.ZV77ValorUnit=0;this.OV77ValorUnit=0;this.ZV78TotalGrid=0;this.OV78TotalGrid=0;this.AV63Quantidade=0;this.ZV63Quantidade=0;this.OV63Quantidade=0;this.AV62ValorTotal=0;this.ZV62ValorTotal=0;this.OV62ValorTotal=0;this.AV49OrderedBy=0;this.ZV49OrderedBy=0;this.OV49OrderedBy=0;this.AV32VendedorEmpresaId="";this.ZV32VendedorEmpresaId="";this.OV32VendedorEmpresaId="";this.AV51PaginaAux=0;this.ZV51PaginaAux=0;this.OV51PaginaAux=0;this.AV52Pagina=0;this.ZV52Pagina=0;this.OV52Pagina=0;this.AV55QtPaginas=0;this.ZV55QtPaginas=0;this.OV55QtPaginas=0;this.AV67SNExiste="";this.ZV67SNExiste="";this.OV67SNExiste="";this.AV37CpfEntrada="";this.AV38VendedorEntrada=0;this.AV33VendedorNome="";this.AV27Filial=0;this.AV40FilialNome="";this.AV28DeviceId="";this.AV23Numero=0;this.AV25Data=gx.date.nullDate();this.AV63Quantidade=0;this.AV62ValorTotal=0;this.AV49OrderedBy=0;this.AV32VendedorEmpresaId="";this.AV51PaginaAux=0;this.AV52Pagina=0;this.AV55QtPaginas=0;this.AV67SNExiste="";this.AV21EmpresaVenda="";this.AV14CPFCliente="";this.AV13VendedorId=0;this.AV66ProdutoId=0;this.AV69ProdutoNome="";this.AV70Att1="";this.AV71Att2="";this.AV72Att3="";this.AV73Att4="";this.AV74Att5="";this.AV76LoteUnico="";this.AV75QtdeGrid=0;this.AV77ValorUnit=0;this.AV78TotalGrid=0;this.A1237VendedorId=0;this.A1229VendedorEmpresaId="";this.A1148VendedorNome="";this.A2965ProdutoId=0;this.A2964ProdutoEmpresaId="";this.AV15SnErro="";this.AV20Carrinho=[];this.AV18Erro="";this.AV22CarrinhoItem={};this.AV65ProdutoEmpresaId="";this.AV26Situacao="";this.Events={e1114m2_client:["'GXM_PREVIOUS'",!0],e1214m2_client:["'GXM_NEXT'",!0],e1314m2_client:["'GXM_FIRST'",!0],e1414m2_client:["'GXM_LAST'",!0],e1514m2_client:["ENTER",!0],e1614m2_client:["'FECHAR'",!0],e1714m2_client:["'NOVO'",!0],e2114m2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"A2964ProdutoEmpresaId",fld:"PRODUTOEMPRESAID"},{av:"A2965ProdutoId",fld:"PRODUTOID"},{av:"AV38VendedorEntrada",fld:"vVENDEDORENTRADA"},{av:"AV67SNExiste",fld:"vSNEXISTE"},{av:"AV37CpfEntrada",fld:"vCPFENTRADA"},{av:"AV15SnErro",fld:"vSNERRO"},{av:"AV20Carrinho",fld:"vCARRINHO"},{av:"AV18Erro",fld:"vERRO"},{av:"AV21EmpresaVenda",fld:"vEMPRESAVENDA",hsh:!0},{av:"AV22CarrinhoItem",fld:"vCARRINHOITEM"},{ctrl:"GRID",prop:"Rows"},{av:"A1229VendedorEmpresaId",fld:"VENDEDOREMPRESAID"},{av:"AV32VendedorEmpresaId",fld:"vVENDEDOREMPRESAID"},{av:"A1237VendedorId",fld:"VENDEDORID"},{av:"A1148VendedorNome",fld:"VENDEDORNOME"},{av:'gx.fn.getCtrlProperty("vCPFENTRADA","Enabled")',ctrl:"vCPFENTRADA",prop:"Enabled"}],[{av:'gx.fn.getCtrlProperty("TRACO","Visible")',ctrl:"TRACO",prop:"Visible"},{av:"AV80CpfEntradaAux",fld:"vCPFENTRADAAUX"},{av:'gx.fn.getCtrlProperty("TABITEM","Visible")',ctrl:"TABITEM",prop:"Visible"},{ctrl:"AVANCAR",prop:"Enabled"},{ctrl:"CONFIRMAR",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vCPFENTRADA","Enabled")',ctrl:"vCPFENTRADA",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vVENDEDORENTRADA","Enabled")',ctrl:"vVENDEDORENTRADA",prop:"Enabled"},{av:"AV54Resto",fld:"vRESTO"},{av:"AV55QtPaginas",fld:"vQTPAGINAS"},{av:"AV51PaginaAux",fld:"vPAGINAAUX"},{av:"AV52Pagina",fld:"vPAGINA"},{av:"AV53NumPagina",fld:"vNUMPAGINA"},{av:'gx.fn.getCtrlProperty("IMAGE2","Enabled")',ctrl:"IMAGE2",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("IMAGE3","Enabled")',ctrl:"IMAGE3",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("IMAGE1","Enabled")',ctrl:"IMAGE1",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("IMAGE4","Enabled")',ctrl:"IMAGE4",prop:"Enabled"},{av:"AV87GXLvl272",fld:"vGXLVL272"},{av:"AV33VendedorNome",fld:"vVENDEDORNOME"},{av:"AV50CPFErro",fld:"vCPFERRO"},{av:"AV15SnErro",fld:"vSNERRO"},{av:"AV35Vendas",fld:"vVENDAS"},{av:"AV20Carrinho",fld:"vCARRINHO"},{av:"AV88GXV2",fld:"vGXV2"},{av:"AV22CarrinhoItem",fld:"vCARRINHOITEM"},{av:"AV23Numero",fld:"vNUMERO"},{av:"AV24CPFC",fld:"vCPFC"},{av:"AV25Data",fld:"vDATA"},{av:"AV27Filial",fld:"vFILIAL"},{av:"AV40FilialNome",fld:"vFILIALNOME"},{av:"AV28DeviceId",fld:"vDEVICEID"},{av:"AV62ValorTotal",fld:"vVALORTOTAL"},{av:"AV36VendasItem",fld:"vVENDASITEM"},{av:"AV26Situacao",fld:"vSITUACAO"}]];this.EvtParms["'GXM_PREVIOUS'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV38VendedorEntrada",fld:"vVENDEDORENTRADA"},{av:"AV67SNExiste",fld:"vSNEXISTE"},{av:"AV37CpfEntrada",fld:"vCPFENTRADA"},{av:"AV15SnErro",fld:"vSNERRO"},{av:"AV20Carrinho",fld:"vCARRINHO"},{av:"AV18Erro",fld:"vERRO"},{av:"AV21EmpresaVenda",fld:"vEMPRESAVENDA",hsh:!0},{av:"AV22CarrinhoItem",fld:"vCARRINHOITEM"},{av:"A1229VendedorEmpresaId",fld:"VENDEDOREMPRESAID"},{av:"AV32VendedorEmpresaId",fld:"vVENDEDOREMPRESAID"},{av:"A1237VendedorId",fld:"VENDEDORID"},{av:"A1148VendedorNome",fld:"VENDEDORNOME"},{av:"A2964ProdutoEmpresaId",fld:"PRODUTOEMPRESAID"},{av:"A2965ProdutoId",fld:"PRODUTOID"},{av:"AV52Pagina",fld:"vPAGINA"}],[{av:"AV52Pagina",fld:"vPAGINA"}]];this.EvtParms["'GXM_NEXT'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV38VendedorEntrada",fld:"vVENDEDORENTRADA"},{av:"AV67SNExiste",fld:"vSNEXISTE"},{av:"AV37CpfEntrada",fld:"vCPFENTRADA"},{av:"AV15SnErro",fld:"vSNERRO"},{av:"AV20Carrinho",fld:"vCARRINHO"},{av:"AV18Erro",fld:"vERRO"},{av:"AV21EmpresaVenda",fld:"vEMPRESAVENDA",hsh:!0},{av:"AV22CarrinhoItem",fld:"vCARRINHOITEM"},{av:"A1229VendedorEmpresaId",fld:"VENDEDOREMPRESAID"},{av:"AV32VendedorEmpresaId",fld:"vVENDEDOREMPRESAID"},{av:"A1237VendedorId",fld:"VENDEDORID"},{av:"A1148VendedorNome",fld:"VENDEDORNOME"},{av:"A2964ProdutoEmpresaId",fld:"PRODUTOEMPRESAID"},{av:"A2965ProdutoId",fld:"PRODUTOID"},{av:"AV52Pagina",fld:"vPAGINA"},{av:"AV51PaginaAux",fld:"vPAGINAAUX"}],[{av:"AV52Pagina",fld:"vPAGINA"}]];this.EvtParms["'GXM_FIRST'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV38VendedorEntrada",fld:"vVENDEDORENTRADA"},{av:"AV67SNExiste",fld:"vSNEXISTE"},{av:"AV37CpfEntrada",fld:"vCPFENTRADA"},{av:"AV15SnErro",fld:"vSNERRO"},{av:"AV20Carrinho",fld:"vCARRINHO"},{av:"AV18Erro",fld:"vERRO"},{av:"AV21EmpresaVenda",fld:"vEMPRESAVENDA",hsh:!0},{av:"AV22CarrinhoItem",fld:"vCARRINHOITEM"},{av:"A1229VendedorEmpresaId",fld:"VENDEDOREMPRESAID"},{av:"AV32VendedorEmpresaId",fld:"vVENDEDOREMPRESAID"},{av:"A1237VendedorId",fld:"VENDEDORID"},{av:"A1148VendedorNome",fld:"VENDEDORNOME"},{av:"A2964ProdutoEmpresaId",fld:"PRODUTOEMPRESAID"},{av:"A2965ProdutoId",fld:"PRODUTOID"}],[{av:"AV52Pagina",fld:"vPAGINA"}]];this.EvtParms["'GXM_LAST'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV38VendedorEntrada",fld:"vVENDEDORENTRADA"},{av:"AV67SNExiste",fld:"vSNEXISTE"},{av:"AV37CpfEntrada",fld:"vCPFENTRADA"},{av:"AV15SnErro",fld:"vSNERRO"},{av:"AV20Carrinho",fld:"vCARRINHO"},{av:"AV18Erro",fld:"vERRO"},{av:"AV21EmpresaVenda",fld:"vEMPRESAVENDA",hsh:!0},{av:"AV22CarrinhoItem",fld:"vCARRINHOITEM"},{av:"A1229VendedorEmpresaId",fld:"VENDEDOREMPRESAID"},{av:"AV32VendedorEmpresaId",fld:"vVENDEDOREMPRESAID"},{av:"A1237VendedorId",fld:"VENDEDORID"},{av:"A1148VendedorNome",fld:"VENDEDORNOME"},{av:"A2964ProdutoEmpresaId",fld:"PRODUTOEMPRESAID"},{av:"A2965ProdutoId",fld:"PRODUTOID"},{av:"AV55QtPaginas",fld:"vQTPAGINAS"}],[{av:"AV52Pagina",fld:"vPAGINA"}]];this.EvtParms["GRID.LOAD"]=[[{av:"AV22CarrinhoItem",fld:"vCARRINHOITEM"},{av:"A2964ProdutoEmpresaId",fld:"PRODUTOEMPRESAID"},{av:"A2965ProdutoId",fld:"PRODUTOID"}],[{av:"AV63Quantidade",fld:"vQUANTIDADE"},{av:"AV85GXV1",fld:"vGXV1"},{av:"AV39ItemCarrinho",fld:"vITEMCARRINHO"},{av:"AV65ProdutoEmpresaId",fld:"vPRODUTOEMPRESAID"},{av:"AV66ProdutoId",fld:"vPRODUTOID"},{av:"AV69ProdutoNome",fld:"vPRODUTONOME"},{av:"AV70Att1",fld:"vATT1"},{av:"AV71Att2",fld:"vATT2"},{av:"AV72Att3",fld:"vATT3"},{av:"AV73Att4",fld:"vATT4"},{av:"AV74Att5",fld:"vATT5"},{av:"AV76LoteUnico",fld:"vLOTEUNICO"},{av:"AV75QtdeGrid",fld:"vQTDEGRID"},{av:"AV77ValorUnit",fld:"vVALORUNIT"},{av:"AV78TotalGrid",fld:"vTOTALGRID"},{av:"AV86GXLvl130",fld:"vGXLVL130"},{av:'gx.fn.getCtrlProperty("vPRODUTOID","Backcolor")',ctrl:"vPRODUTOID",prop:"Backcolor"},{av:'gx.fn.getCtrlProperty("vPRODUTONOME","Backcolor")',ctrl:"vPRODUTONOME",prop:"Backcolor"},{av:'gx.fn.getCtrlProperty("vATT1","Backcolor")',ctrl:"vATT1",prop:"Backcolor"},{av:'gx.fn.getCtrlProperty("vATT2","Backcolor")',ctrl:"vATT2",prop:"Backcolor"},{av:'gx.fn.getCtrlProperty("vATT3","Backcolor")',ctrl:"vATT3",prop:"Backcolor"},{av:'gx.fn.getCtrlProperty("vATT4","Backcolor")',ctrl:"vATT4",prop:"Backcolor"},{av:'gx.fn.getCtrlProperty("vATT5","Backcolor")',ctrl:"vATT5",prop:"Backcolor"},{av:'gx.fn.getCtrlProperty("vLOTEUNICO","Backcolor")',ctrl:"vLOTEUNICO",prop:"Backcolor"},{av:'gx.fn.getCtrlProperty("vQTDEGRID","Backcolor")',ctrl:"vQTDEGRID",prop:"Backcolor"},{av:'gx.fn.getCtrlProperty("vVALORUNIT","Backcolor")',ctrl:"vVALORUNIT",prop:"Backcolor"},{av:'gx.fn.getCtrlProperty("vTOTALGRID","Backcolor")',ctrl:"vTOTALGRID",prop:"Backcolor"}]];this.EvtParms.ENTER=[[{av:"AV22CarrinhoItem",fld:"vCARRINHOITEM"},{av:"AV35Vendas",fld:"vVENDAS"}],[]];this.EvtParms["'FECHAR'"]=[[],[]];this.EvtParms["'NOVO'"]=[[],[{av:"AV67SNExiste",fld:"vSNEXISTE"}]];this.setPrompt("PROMPT_VENDEDORENTRADA",[17]);this.EnterCtrl=["CONFIRMAR"];this.setVCMap("AV15SnErro","vSNERRO",0,"char");this.setVCMap("AV20Carrinho","vCARRINHO",0,"CollCarrinho_CarrinhoItem");this.setVCMap("AV18Erro","vERRO",0,"char");this.setVCMap("AV21EmpresaVenda","vEMPRESAVENDA",0,"char");this.setVCMap("AV22CarrinhoItem","vCARRINHOITEM",0,"Carrinho_CarrinhoItem");this.setVCMap("A1229VendedorEmpresaId","VENDEDOREMPRESAID",0,"char");this.setVCMap("A1237VendedorId","VENDEDORID",0,"int");this.setVCMap("A1148VendedorNome","VENDEDORNOME",0,"svchar");this.setVCMap("A2964ProdutoEmpresaId","PRODUTOEMPRESAID",0,"char");this.setVCMap("A2965ProdutoId","PRODUTOID",0,"int");this.setVCMap("AV14CPFCliente","vCPFCLIENTE",0,"char");this.setVCMap("AV13VendedorId","vVENDEDORID",0,"int");this.setVCMap("AV15SnErro","vSNERRO",0,"char");this.setVCMap("AV20Carrinho","vCARRINHO",0,"CollCarrinho_CarrinhoItem");this.setVCMap("AV18Erro","vERRO",0,"char");this.setVCMap("AV21EmpresaVenda","vEMPRESAVENDA",0,"char");this.setVCMap("AV22CarrinhoItem","vCARRINHOITEM",0,"Carrinho_CarrinhoItem");this.setVCMap("A1229VendedorEmpresaId","VENDEDOREMPRESAID",0,"char");this.setVCMap("A1237VendedorId","VENDEDORID",0,"int");this.setVCMap("A1148VendedorNome","VENDEDORNOME",0,"svchar");this.setVCMap("A2964ProdutoEmpresaId","PRODUTOEMPRESAID",0,"char");this.setVCMap("A2965ProdutoId","PRODUTOID",0,"int");t.addRefreshingVar(this.GXValidFnc[17]);t.addRefreshingVar(this.GXValidFnc[118]);t.addRefreshingVar(this.GXValidFnc[13]);t.addRefreshingVar({rfrVar:"AV15SnErro"});t.addRefreshingVar({rfrVar:"AV20Carrinho"});t.addRefreshingVar({rfrVar:"AV18Erro"});t.addRefreshingVar({rfrVar:"AV21EmpresaVenda"});t.addRefreshingVar({rfrVar:"AV22CarrinhoItem"});t.addRefreshingVar({rfrVar:"A1229VendedorEmpresaId"});t.addRefreshingVar(this.GXValidFnc[113]);t.addRefreshingVar({rfrVar:"A1237VendedorId"});t.addRefreshingVar({rfrVar:"A1148VendedorNome"});t.addRefreshingVar({rfrVar:"A2964ProdutoEmpresaId"});t.addRefreshingVar({rfrVar:"A2965ProdutoId"});this.InitStandaloneVars()});gx.setParentObj(new hefetivarcarrinho)