/**@preserve  GeneXus Java 10_3_12-110051 on February 8, 2021 22:58:30.5
*
gx.evt.autoSkip=!1;gx.define("htraco",!1,function(){var n,t;this.ServerClass="htraco";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.addKeyListener("7","'ANTERIOR'");this.addKeyListener("8","'PROXIMO'");this.addKeyListener("3","'NOVO'");this.addKeyListener("12","'FECHAR'");this.addKeyListener("5","'PROCURAR'");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV39TipoConcretoEmpresaId=gx.fn.getControlValue("vTIPOCONCRETOEMPRESAID")};this.Validv_Tipoconcretocodigo=function(){try{var n=gx.util.balloon.getNew("vTIPOCONCRETOCODIGO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Tipoconcretotracoprodutoid=function(){try{if(gx.fn.currentGridRowImpl(40)===0)return!0;var n=gx.util.balloon.getNew("TIPOCONCRETOTRACOPRODUTOID",gx.fn.currentGridRowImpl(40));this.AnyError=0;this.StandaloneModal();this.StandaloneNotModal()}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e112e52_client=function(){this.executeServerEvent("'ANTERIOR'",!0,null,!1,!1)};this.e122e52_client=function(){this.executeServerEvent("'PROXIMO'",!0,null,!1,!1)};this.e162e52_client=function(){this.executeServerEvent("VPAGINA.CLICK",!0,null,!1,!0)};this.e132e52_client=function(){this.executeServerEvent("'NOVO'",!0,null,!1,!1)};this.e142e52_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e152e52_client=function(){this.executeServerEvent("'PROCURAR'",!0,arguments[0],!1,!1)};this.e192e52_client=function(){this.executeServerEvent("'ALTERAR'",!0,arguments[0],!1,!1)};this.e202e52_client=function(){this.executeServerEvent("'EXCLUIR'",!0,arguments[0],!1,!1)};this.e212e52_client=function(){this.executeServerEvent("'CONSULTAR'",!0,arguments[0],!1,!1)};this.e222e52_client=function(){this.executeServerEvent("'ATUALIZAPAGINA'",!0,arguments[0],!1,!1)};this.e242e52_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e252e52_client=function(){this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,11,13,14,17,20,23,25,27,29,31,34,36,37,41,42,43,44,45,46,47,48,55,56];this.GXLastCtrlId=56;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",40,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"htraco",[],!1,1,!0,!0,0,!1,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.GridContainer;t.addSingleLineEdit(11333,41,"TIPOCONCRETOTRACOSEQUENCIA","Sequência","","TipoConcretoTracoSequencia","int",0,"px",3,3,"right",null,[],11333,"TipoConcretoTracoSequencia",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(11335,42,"TIPOCONCRETOTRACOPRODUTOID","Código","","TipoConcretoTracoProdutoId","int",0,"px",10,10,"right",null,[],11335,"TipoConcretoTracoProdutoId",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(11404,43,"TIPOCONCRETOTRACOPRODUTODESC","Descrição Produto","","TipoConcretoTracoProdutoDesc","svchar",0,"px",40,40,"left",null,[],11404,"TipoConcretoTracoProdutoDesc",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(11402,44,"TIPOCONCRETOTRACOQTDEREAL","Qtde Real","","TipoConcretoTracoQtdeReal","decimal",0,"px",8,8,"right",null,[],11402,"TipoConcretoTracoQtdeReal",!0,2,!1,!1,"Attribute",1,"");t.addSingleLineEdit(11440,45,"TIPOCONCRETOTRACOQTDECONTABIL","Qtde Contábil","","TipoConcretoTracoQtdeContabil","decimal",0,"px",8,8,"right",null,[],11440,"TipoConcretoTracoQtdeContabil",!0,2,!1,!1,"Attribute",1,"");t.addBitmap("&Bmpalt","vBMPALT",46,0,"px",17,"px","e192e52_client","","Alterar","Image","GridColumnImage");t.addBitmap("&Bmpexc","vBMPEXC",47,0,"px",17,"px","e202e52_client","","Excluir","Image","GridColumnImage");t.addBitmap("&Bmpcon","vBMPCON",48,0,"px",17,"px","e212e52_client","","Consultar","Image","GridColumnImage");this.setGrid(t);n[2]={fld:"TABLE2",grid:0};n[5]={fld:"TABLE6",grid:0};n[8]={fld:"TABLE7",grid:0};n[11]={fld:"TXTTITAPL8",format:0,grid:0};n[13]={lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Tipoconcretocodigo,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOCONCRETOCODIGO",gxz:"ZV40TipoConcretoCodigo",gxold:"OV40TipoConcretoCodigo",gxvar:"AV40TipoConcretoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV40TipoConcretoCodigo=gx.num.intval(n)},v2z:function(n){gx.O.ZV40TipoConcretoCodigo=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vTIPOCONCRETOCODIGO",gx.O.AV40TipoConcretoCodigo,0)},c2v:function(){gx.O.AV40TipoConcretoCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONCRETOCODIGO",".")},nac:gx.falseFn};n[14]={lvl:0,type:"svchar",len:50,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONCRETODESCRICAO",gxz:"ZV35TipoConcretoDescricao",gxold:"OV35TipoConcretoDescricao",gxvar:"AV35TipoConcretoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV35TipoConcretoDescricao=n},v2z:function(n){gx.O.ZV35TipoConcretoDescricao=n},v2c:function(){gx.fn.setControlValue("vTIPOCONCRETODESCRICAO",gx.O.AV35TipoConcretoDescricao,0)},c2v:function(){gx.O.AV35TipoConcretoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONCRETODESCRICAO")},nac:gx.falseFn};n[17]={fld:"TABLE4",grid:0};n[20]={fld:"TABLE1",grid:0};n[23]={fld:"IMAGE2",grid:0};n[25]={fld:"BTNANTERIOR",grid:0};n[27]={fld:"BTNPROXIMO",grid:0};n[29]={fld:"BTNHELP",grid:0};n[31]={fld:"TABLE5",grid:0};n[34]={fld:"TEXTBLOCK1",format:0,grid:0};n[36]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV28Pagina",gxold:"OV28Pagina",gxvar:"AV28Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV28Pagina=gx.num.intval(n)},v2z:function(n){gx.O.ZV28Pagina=gx.num.intval(n)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV28Pagina)},c2v:function(){gx.O.AV28Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",".")},nac:gx.falseFn};n[37]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV29PaginaAux",gxold:"OV29PaginaAux",gxvar:"AV29PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV29PaginaAux=gx.num.intval(n)},v2z:function(n){gx.O.ZV29PaginaAux=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV29PaginaAux,0)},c2v:function(){gx.O.AV29PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",".")},nac:gx.falseFn};n[41]={lvl:2,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONCRETOTRACOSEQUENCIA",gxz:"Z11333TipoConcretoTracoSequencia",gxold:"O11333TipoConcretoTracoSequencia",gxvar:"A11333TipoConcretoTracoSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A11333TipoConcretoTracoSequencia=gx.num.intval(n)},v2z:function(n){gx.O.Z11333TipoConcretoTracoSequencia=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("TIPOCONCRETOTRACOSEQUENCIA",n||gx.fn.currentGridRowImpl(40),gx.O.A11333TipoConcretoTracoSequencia,0)},c2v:function(){gx.O.A11333TipoConcretoTracoSequencia=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("TIPOCONCRETOTRACOSEQUENCIA",n||gx.fn.currentGridRowImpl(40),".")},nac:gx.falseFn};n[42]={lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:this.Valid_Tipoconcretotracoprodutoid,isvalid:null,rgrid:[],fld:"TIPOCONCRETOTRACOPRODUTOID",gxz:"Z11335TipoConcretoTracoProdutoId",gxold:"O11335TipoConcretoTracoProdutoId",gxvar:"A11335TipoConcretoTracoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A11335TipoConcretoTracoProdutoId=gx.num.intval(n)},v2z:function(n){gx.O.Z11335TipoConcretoTracoProdutoId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("TIPOCONCRETOTRACOPRODUTOID",n||gx.fn.currentGridRowImpl(40),gx.O.A11335TipoConcretoTracoProdutoId,0)},c2v:function(){gx.O.A11335TipoConcretoTracoProdutoId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("TIPOCONCRETOTRACOPRODUTOID",n||gx.fn.currentGridRowImpl(40),".")},nac:gx.falseFn};n[43]={lvl:2,type:"svchar",len:40,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONCRETOTRACOPRODUTODESC",gxz:"Z11404TipoConcretoTracoProdutoDesc",gxold:"O11404TipoConcretoTracoProdutoDesc",gxvar:"A11404TipoConcretoTracoProdutoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A11404TipoConcretoTracoProdutoDesc=n},v2z:function(n){gx.O.Z11404TipoConcretoTracoProdutoDesc=n},v2c:function(n){gx.fn.setGridControlValue("TIPOCONCRETOTRACOPRODUTODESC",n||gx.fn.currentGridRowImpl(40),gx.O.A11404TipoConcretoTracoProdutoDesc,0)},c2v:function(){gx.O.A11404TipoConcretoTracoProdutoDesc=this.val()},val:function(n){return gx.fn.getGridControlValue("TIPOCONCRETOTRACOPRODUTODESC",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[44]={lvl:2,type:"decimal",len:8,dec:2,sign:!1,pic:"ZZZZ9.99",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONCRETOTRACOQTDEREAL",gxz:"Z11402TipoConcretoTracoQtdeReal",gxold:"O11402TipoConcretoTracoQtdeReal",gxvar:"A11402TipoConcretoTracoQtdeReal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A11402TipoConcretoTracoQtdeReal=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.Z11402TipoConcretoTracoQtdeReal=gx.fn.toDecimalValue(n,".",",")},v2c:function(n){gx.fn.setGridDecimalValue("TIPOCONCRETOTRACOQTDEREAL",n||gx.fn.currentGridRowImpl(40),gx.O.A11402TipoConcretoTracoQtdeReal,2,",")},c2v:function(){gx.O.A11402TipoConcretoTracoQtdeReal=this.val()},val:function(n){return gx.fn.getGridDecimalValue("TIPOCONCRETOTRACOQTDEREAL",n||gx.fn.currentGridRowImpl(40),".",",")},nac:gx.falseFn};n[45]={lvl:2,type:"decimal",len:8,dec:2,sign:!1,pic:"ZZZZ9.99",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONCRETOTRACOQTDECONTABIL",gxz:"Z11440TipoConcretoTracoQtdeContabil",gxold:"O11440TipoConcretoTracoQtdeContabil",gxvar:"A11440TipoConcretoTracoQtdeContabil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A11440TipoConcretoTracoQtdeContabil=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.Z11440TipoConcretoTracoQtdeContabil=gx.fn.toDecimalValue(n,".",",")},v2c:function(n){gx.fn.setGridDecimalValue("TIPOCONCRETOTRACOQTDECONTABIL",n||gx.fn.currentGridRowImpl(40),gx.O.A11440TipoConcretoTracoQtdeContabil,2,",")},c2v:function(){gx.O.A11440TipoConcretoTracoQtdeContabil=this.val()},val:function(n){return gx.fn.getGridDecimalValue("TIPOCONCRETOTRACOQTDECONTABIL",n||gx.fn.currentGridRowImpl(40),".",",")},nac:gx.falseFn};n[46]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV5bmpAlt",gxold:"OV5bmpAlt",gxvar:"AV5bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV5bmpAlt=n},v2z:function(n){gx.O.ZV5bmpAlt=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPALT",n||gx.fn.currentGridRowImpl(40),gx.O.AV5bmpAlt,gx.O.AV45Bmpalt_GXI)},c2v:function(){gx.O.AV45Bmpalt_GXI=this.val_GXI();gx.O.AV5bmpAlt=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPALT",n||gx.fn.currentGridRowImpl(40))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPALT_GXI",n||gx.fn.currentGridRowImpl(40))},gxvar_GXI:"AV45Bmpalt_GXI",nac:gx.falseFn};n[47]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV7bmpExc",gxold:"OV7bmpExc",gxvar:"AV7bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV7bmpExc=n},v2z:function(n){gx.O.ZV7bmpExc=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPEXC",n||gx.fn.currentGridRowImpl(40),gx.O.AV7bmpExc,gx.O.AV46Bmpexc_GXI)},c2v:function(){gx.O.AV46Bmpexc_GXI=this.val_GXI();gx.O.AV7bmpExc=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPEXC",n||gx.fn.currentGridRowImpl(40))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPEXC_GXI",n||gx.fn.currentGridRowImpl(40))},gxvar_GXI:"AV46Bmpexc_GXI",nac:gx.falseFn};n[48]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV6bmpCon",gxold:"OV6bmpCon",gxvar:"AV6bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV6bmpCon=n},v2z:function(n){gx.O.ZV6bmpCon=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPCON",n||gx.fn.currentGridRowImpl(40),gx.O.AV6bmpCon,gx.O.AV47Bmpcon_GXI)},c2v:function(){gx.O.AV47Bmpcon_GXI=this.val_GXI();gx.O.AV6bmpCon=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPCON",n||gx.fn.currentGridRowImpl(40))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPCON_GXI",n||gx.fn.currentGridRowImpl(40))},gxvar_GXI:"AV47Bmpcon_GXI",nac:gx.falseFn};n[55]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEREDBY",gxz:"ZV27OrderedBy",gxold:"OV27OrderedBy",gxvar:"AV27OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV27OrderedBy=gx.num.intval(n)},v2z:function(n){gx.O.ZV27OrderedBy=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV27OrderedBy,0)},c2v:function(){gx.O.AV27OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",".")},nac:gx.falseFn};n[56]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNRECUPERAFILTRO",gxz:"ZV33SnRecuperaFiltro",gxold:"OV33SnRecuperaFiltro",gxvar:"AV33SnRecuperaFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV33SnRecuperaFiltro=n},v2z:function(n){gx.O.ZV33SnRecuperaFiltro=n},v2c:function(){gx.fn.setControlValue("vSNRECUPERAFILTRO",gx.O.AV33SnRecuperaFiltro,0)},c2v:function(){gx.O.AV33SnRecuperaFiltro=this.val()},val:function(){return gx.fn.getControlValue("vSNRECUPERAFILTRO")},nac:gx.falseFn};this.AV40TipoConcretoCodigo=0;this.ZV40TipoConcretoCodigo=0;this.OV40TipoConcretoCodigo=0;this.AV35TipoConcretoDescricao="";this.ZV35TipoConcretoDescricao="";this.OV35TipoConcretoDescricao="";this.AV28Pagina=0;this.ZV28Pagina=0;this.OV28Pagina=0;this.AV29PaginaAux=0;this.ZV29PaginaAux=0;this.OV29PaginaAux=0;this.Z11333TipoConcretoTracoSequencia=0;this.O11333TipoConcretoTracoSequencia=0;this.Z11335TipoConcretoTracoProdutoId=0;this.O11335TipoConcretoTracoProdutoId=0;this.Z11404TipoConcretoTracoProdutoDesc="";this.O11404TipoConcretoTracoProdutoDesc="";this.Z11402TipoConcretoTracoQtdeReal=0;this.O11402TipoConcretoTracoQtdeReal=0;this.Z11440TipoConcretoTracoQtdeContabil=0;this.O11440TipoConcretoTracoQtdeContabil=0;this.ZV5bmpAlt="";this.OV5bmpAlt="";this.ZV7bmpExc="";this.OV7bmpExc="";this.ZV6bmpCon="";this.OV6bmpCon="";this.AV27OrderedBy=0;this.ZV27OrderedBy=0;this.OV27OrderedBy=0;this.AV33SnRecuperaFiltro="";this.ZV33SnRecuperaFiltro="";this.OV33SnRecuperaFiltro="";this.AV40TipoConcretoCodigo=0;this.AV35TipoConcretoDescricao="";this.AV28Pagina=0;this.AV29PaginaAux=0;this.AV27OrderedBy=0;this.AV33SnRecuperaFiltro="";this.AV39TipoConcretoEmpresaId="";this.A11321TipoConcretoCodigo=0;this.A11449TipoConcretoEmpresaId="";this.A11334TipoConcretoTracoProdutoEmpId="";this.A11333TipoConcretoTracoSequencia=0;this.A11335TipoConcretoTracoProdutoId=0;this.A11404TipoConcretoTracoProdutoDesc="";this.A11402TipoConcretoTracoQtdeReal=0;this.A11440TipoConcretoTracoQtdeContabil=0;this.AV5bmpAlt="";this.AV7bmpExc="";this.AV6bmpCon="";this.Events={e112e52_client:["'ANTERIOR'",!0],e122e52_client:["'PROXIMO'",!0],e162e52_client:["VPAGINA.CLICK",!0],e132e52_client:["'NOVO'",!0],e142e52_client:["'FECHAR'",!0],e152e52_client:["'PROCURAR'",!0],e192e52_client:["'ALTERAR'",!0],e202e52_client:["'EXCLUIR'",!0],e212e52_client:["'CONSULTAR'",!0],e222e52_client:["'ATUALIZAPAGINA'",!0],e242e52_client:["ENTER",!0],e252e52_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV39TipoConcretoEmpresaId",fld:"vTIPOCONCRETOEMPRESAID",hsh:!0},{av:"AV40TipoConcretoCodigo",fld:"vTIPOCONCRETOCODIGO",hsh:!0},{av:"AV5bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV7bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV6bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV33SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"}],[]];this.EvtParms["GRID.REFRESH"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV39TipoConcretoEmpresaId",fld:"vTIPOCONCRETOEMPRESAID",hsh:!0},{av:"AV40TipoConcretoCodigo",fld:"vTIPOCONCRETOCODIGO",hsh:!0},{av:"AV5bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV7bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV6bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV33SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"}],[{av:"AV29PaginaAux",fld:"vPAGINAAUX"},{av:"AV28Pagina",fld:"vPAGINA"},{av:"AV24NumPagina",fld:"vNUMPAGINA"},{av:"AV33SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:"BTNANTERIOR",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:"BTNPROXIMO",prop:"Enabled"},{av:"AV15filtros",fld:"vFILTROS"},{av:"AV27OrderedBy",fld:"vORDEREDBY"}]];this.EvtParms["'ANTERIOR'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV39TipoConcretoEmpresaId",fld:"vTIPOCONCRETOEMPRESAID",hsh:!0},{av:"AV40TipoConcretoCodigo",fld:"vTIPOCONCRETOCODIGO",hsh:!0},{av:"AV5bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV7bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV6bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV33SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV28Pagina",fld:"vPAGINA"},{av:"AV27OrderedBy",fld:"vORDEREDBY"}],[{av:"AV28Pagina",fld:"vPAGINA"},{av:"AV15filtros",fld:"vFILTROS"}]];this.EvtParms["'PROXIMO'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV39TipoConcretoEmpresaId",fld:"vTIPOCONCRETOEMPRESAID",hsh:!0},{av:"AV40TipoConcretoCodigo",fld:"vTIPOCONCRETOCODIGO",hsh:!0},{av:"AV5bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV7bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV6bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV33SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV28Pagina",fld:"vPAGINA"},{av:"AV29PaginaAux",fld:"vPAGINAAUX"},{av:"AV27OrderedBy",fld:"vORDEREDBY"}],[{av:"AV28Pagina",fld:"vPAGINA"},{av:"AV15filtros",fld:"vFILTROS"}]];this.EvtParms["VPAGINA.CLICK"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV39TipoConcretoEmpresaId",fld:"vTIPOCONCRETOEMPRESAID",hsh:!0},{av:"AV40TipoConcretoCodigo",fld:"vTIPOCONCRETOCODIGO",hsh:!0},{av:"AV5bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV7bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV6bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV33SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV28Pagina",fld:"vPAGINA"},{av:"AV27OrderedBy",fld:"vORDEREDBY"}],[{av:"AV15filtros",fld:"vFILTROS"}]];this.EvtParms["'NOVO'"]=[[{av:"AV39TipoConcretoEmpresaId",fld:"vTIPOCONCRETOEMPRESAID",hsh:!0},{av:"AV40TipoConcretoCodigo",fld:"vTIPOCONCRETOCODIGO",hsh:!0},{av:"AV35TipoConcretoDescricao",fld:"vTIPOCONCRETODESCRICAO",hsh:!0},{av:"AV28Pagina",fld:"vPAGINA"},{av:"AV27OrderedBy",fld:"vORDEREDBY"}],[{av:"AV15filtros",fld:"vFILTROS"}]];this.EvtParms["'FECHAR'"]=[[{av:"AV43Pgmname",fld:"vPGMNAME"}],[]];this.EvtParms["'PROCURAR'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV39TipoConcretoEmpresaId",fld:"vTIPOCONCRETOEMPRESAID",hsh:!0},{av:"AV40TipoConcretoCodigo",fld:"vTIPOCONCRETOCODIGO",hsh:!0},{av:"AV5bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV7bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV6bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV33SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV28Pagina",fld:"vPAGINA"},{av:"AV27OrderedBy",fld:"vORDEREDBY"}],[{av:"AV28Pagina",fld:"vPAGINA"},{av:"AV15filtros",fld:"vFILTROS"}]];this.EvtParms["'ALTERAR'"]=[[{av:"AV39TipoConcretoEmpresaId",fld:"vTIPOCONCRETOEMPRESAID",hsh:!0},{av:"AV40TipoConcretoCodigo",fld:"vTIPOCONCRETOCODIGO",hsh:!0},{av:"AV35TipoConcretoDescricao",fld:"vTIPOCONCRETODESCRICAO",hsh:!0},{av:"A11333TipoConcretoTracoSequencia",fld:"TIPOCONCRETOTRACOSEQUENCIA"},{av:"AV28Pagina",fld:"vPAGINA"},{av:"AV27OrderedBy",fld:"vORDEREDBY"}],[{av:"AV15filtros",fld:"vFILTROS"}]];this.EvtParms["'EXCLUIR'"]=[[{av:"AV39TipoConcretoEmpresaId",fld:"vTIPOCONCRETOEMPRESAID",hsh:!0},{av:"AV40TipoConcretoCodigo",fld:"vTIPOCONCRETOCODIGO",hsh:!0},{av:"AV35TipoConcretoDescricao",fld:"vTIPOCONCRETODESCRICAO",hsh:!0},{av:"A11333TipoConcretoTracoSequencia",fld:"TIPOCONCRETOTRACOSEQUENCIA"},{av:"AV28Pagina",fld:"vPAGINA"},{av:"AV27OrderedBy",fld:"vORDEREDBY"}],[{av:"AV15filtros",fld:"vFILTROS"}]];this.EvtParms["'CONSULTAR'"]=[[{av:"AV39TipoConcretoEmpresaId",fld:"vTIPOCONCRETOEMPRESAID",hsh:!0},{av:"AV40TipoConcretoCodigo",fld:"vTIPOCONCRETOCODIGO",hsh:!0},{av:"AV35TipoConcretoDescricao",fld:"vTIPOCONCRETODESCRICAO",hsh:!0},{av:"A11333TipoConcretoTracoSequencia",fld:"TIPOCONCRETOTRACOSEQUENCIA"},{av:"AV28Pagina",fld:"vPAGINA"},{av:"AV27OrderedBy",fld:"vORDEREDBY"}],[{av:"AV15filtros",fld:"vFILTROS"}]];this.EvtParms["'ATUALIZAPAGINA'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV39TipoConcretoEmpresaId",fld:"vTIPOCONCRETOEMPRESAID",hsh:!0},{av:"AV40TipoConcretoCodigo",fld:"vTIPOCONCRETOCODIGO",hsh:!0},{av:"AV5bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV7bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV6bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV33SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"}],[]];this.setVCMap("AV39TipoConcretoEmpresaId","vTIPOCONCRETOEMPRESAID",0,"char");this.setVCMap("AV39TipoConcretoEmpresaId","vTIPOCONCRETOEMPRESAID",0,"char");t.addRefreshingVar({rfrVar:"AV39TipoConcretoEmpresaId"});t.addRefreshingVar(this.GXValidFnc[13]);t.addRefreshingVar({rfrVar:"AV5bmpAlt",rfrProp:"Value",gxAttId:"Bmpalt"});t.addRefreshingVar({rfrVar:"AV5bmpAlt",rfrProp:"Tooltiptext",gxAttId:"Bmpalt"});t.addRefreshingVar({rfrVar:"AV7bmpExc",rfrProp:"Value",gxAttId:"Bmpexc"});t.addRefreshingVar({rfrVar:"AV7bmpExc",rfrProp:"Tooltiptext",gxAttId:"Bmpexc"});t.addRefreshingVar({rfrVar:"AV6bmpCon",rfrProp:"Value",gxAttId:"Bmpcon"});t.addRefreshingVar({rfrVar:"AV6bmpCon",rfrProp:"Tooltiptext",gxAttId:"Bmpcon"});t.addRefreshingVar(this.GXValidFnc[56]);this.InitStandaloneVars()});gx.setParentObj(new htraco)