/**@preserve  GeneXus Java 10_3_12-110051 on February 4, 2021 18:9:57.80
*/
gx.evt.autoSkip=!1;gx.define("hentradaprovncmcest",!1,function(){var t,n;this.ServerClass="hentradaprovncmcest";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV5SdtNCMCEST=gx.fn.getControlValue("vSDTNCMCEST");this.A2964ProdutoEmpresaId=gx.fn.getControlValue("PRODUTOEMPRESAID");this.AV7ProdutoEmpresaId=gx.fn.getControlValue("vPRODUTOEMPRESAID");this.A2965ProdutoId=gx.fn.getIntegerValue("PRODUTOID",".");this.A3837ProdutoReferencia=gx.fn.getControlValue("PRODUTOREFERENCIA")};this.e112gz2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e132gz2_client=function(){this.executeServerEvent("'CADASTRAR'",!0,arguments[0],!1,!1)};this.e152gz2_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e162gz2_client=function(){this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,5,7,8,9,10,11,12,13,14,15,16];this.GXLastCtrlId=16;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",6,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hentradaprovncmcest",[],!1,1,!1,!0,0,!1,!1,!1,"CollSdtImpressao.SdtImpressaoItem",0,"px","Novo registro",!1,!1,!1,null,null,!1,"AV5SdtNCMCEST",!1,[1,1,1,1]);n=this.GridContainer;n.addSingleLineEdit("GXV107",7,"CTLITEM","Sequência","","Item","int",0,"px",6,6,"right",null,[],"GXV107","GXV107",!0,0,!1,!1,"Attribute",1,"");n.addSingleLineEdit("GXV108",8,"CTLPRODUTOID","Produto","","ProdutoId","int",0,"px",10,10,"right",null,[],"GXV108","GXV108",!0,0,!1,!1,"Attribute",1,"");n.addSingleLineEdit("Produtoreferencia",9,"vPRODUTOREFERENCIA","Referência","","ProdutoReferencia","svchar",0,"px",20,20,"left",null,[],"Produtoreferencia","ProdutoReferencia",!0,0,!1,!1,"Attribute",1,"");n.addSingleLineEdit("GXV10A",10,"CTLPRODUTODESCRICAO","Descrição","","ProdutoDescricao","svchar",0,"px",40,40,"left",null,[],"GXV10A","GXV10A",!0,0,!1,!1,"Attribute",1,"");n.addSingleLineEdit("GXV10B",11,"CTLNCMCODIGO","NCM","","NCMCodigo","int",0,"px",8,8,"right",null,[],"GXV10B","GXV10B",!0,0,!1,!1,"",1,"");n.addSingleLineEdit("GXV10C",12,"CTLNCMCODIGOXML","NCM do XML","","NCMCodigoXml","int",0,"px",8,8,"right",null,[],"GXV10C","GXV10C",!0,0,!1,!1,"",1,"");n.addSingleLineEdit("GXV10D",13,"CTLCESTCODIGO","CEST","","CESTCodigo","int",0,"px",7,7,"right",null,[],"GXV10D","GXV10D",!0,0,!1,!1,"",1,"");n.addSingleLineEdit("GXV10E",14,"CTLCESTCODIGOXML","CEST do XML","","CESTCodigoXml","int",0,"px",7,7,"right",null,[],"GXV10E","GXV10E",!0,0,!1,!1,"",1,"");n.addBitmap("&Bmpcad","vBMPCAD",15,0,"px",17,"px","e132gz2_client","","Cadastrar","Image","GridColumnImage");this.setGrid(n);t[2]={fld:"TABLE1",grid:0};t[5]={fld:"DIV1",format:2,grid:0};t[7]={lvl:2,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:0,isacc:0,grid:6,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLITEM",gxz:"ZV13GXV107",gxold:"OV13GXV107",gxvar:"GXV107",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.GXV107=gx.num.intval(n)},v2z:function(n){gx.O.ZV13GXV107=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("CTLITEM",n||gx.fn.currentGridRowImpl(6),gx.O.GXV107,0)},c2v:function(){gx.O.GXV107=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("CTLITEM",n||gx.fn.currentGridRowImpl(6),".")},nac:gx.falseFn};t[8]={lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:6,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOID",gxz:"ZV14GXV108",gxold:"OV14GXV108",gxvar:"GXV108",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.GXV108=gx.num.intval(n)},v2z:function(n){gx.O.ZV14GXV108=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("CTLPRODUTOID",n||gx.fn.currentGridRowImpl(6),gx.O.GXV108,0)},c2v:function(){gx.O.GXV108=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("CTLPRODUTOID",n||gx.fn.currentGridRowImpl(6),".")},nac:gx.falseFn};t[9]={lvl:2,type:"svchar",len:20,dec:0,sign:!1,pic:"@!",ro:0,isacc:0,grid:6,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV8ProdutoReferencia",gxold:"OV8ProdutoReferencia",gxvar:"AV8ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.AV8ProdutoReferencia=n},v2z:function(n){gx.O.ZV8ProdutoReferencia=n},v2c:function(n){gx.fn.setGridControlValue("vPRODUTOREFERENCIA",n||gx.fn.currentGridRowImpl(6),gx.O.AV8ProdutoReferencia,0)},c2v:function(){gx.O.AV8ProdutoReferencia=this.val()},val:function(n){return gx.fn.getGridControlValue("vPRODUTOREFERENCIA",n||gx.fn.currentGridRowImpl(6))},nac:gx.falseFn};t[10]={lvl:2,type:"svchar",len:40,dec:0,sign:!1,ro:0,isacc:0,grid:6,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTODESCRICAO",gxz:"ZV15GXV10A",gxold:"OV15GXV10A",gxvar:"GXV10A",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.GXV10A=n},v2z:function(n){gx.O.ZV15GXV10A=n},v2c:function(n){gx.fn.setGridControlValue("CTLPRODUTODESCRICAO",n||gx.fn.currentGridRowImpl(6),gx.O.GXV10A,0)},c2v:function(){gx.O.GXV10A=this.val()},val:function(n){return gx.fn.getGridControlValue("CTLPRODUTODESCRICAO",n||gx.fn.currentGridRowImpl(6))},nac:gx.falseFn};t[11]={lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:6,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLNCMCODIGO",gxz:"ZV16GXV10B",gxold:"OV16GXV10B",gxvar:"GXV10B",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.GXV10B=gx.num.intval(n)},v2z:function(n){gx.O.ZV16GXV10B=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("CTLNCMCODIGO",n||gx.fn.currentGridRowImpl(6),gx.O.GXV10B,0)},c2v:function(){gx.O.GXV10B=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("CTLNCMCODIGO",n||gx.fn.currentGridRowImpl(6),".")},nac:gx.falseFn};t[12]={lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:6,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLNCMCODIGOXML",gxz:"ZV17GXV10C",gxold:"OV17GXV10C",gxvar:"GXV10C",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.GXV10C=gx.num.intval(n)},v2z:function(n){gx.O.ZV17GXV10C=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("CTLNCMCODIGOXML",n||gx.fn.currentGridRowImpl(6),gx.O.GXV10C,0)},c2v:function(){gx.O.GXV10C=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("CTLNCMCODIGOXML",n||gx.fn.currentGridRowImpl(6),".")},nac:gx.falseFn};t[13]={lvl:2,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,isacc:0,grid:6,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCESTCODIGO",gxz:"ZV18GXV10D",gxold:"OV18GXV10D",gxvar:"GXV10D",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.GXV10D=gx.num.intval(n)},v2z:function(n){gx.O.ZV18GXV10D=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("CTLCESTCODIGO",n||gx.fn.currentGridRowImpl(6),gx.O.GXV10D,0)},c2v:function(){gx.O.GXV10D=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("CTLCESTCODIGO",n||gx.fn.currentGridRowImpl(6),".")},nac:gx.falseFn};t[14]={lvl:2,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,isacc:0,grid:6,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCESTCODIGOXML",gxz:"ZV19GXV10E",gxold:"OV19GXV10E",gxvar:"GXV10E",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.GXV10E=gx.num.intval(n)},v2z:function(n){gx.O.ZV19GXV10E=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("CTLCESTCODIGOXML",n||gx.fn.currentGridRowImpl(6),gx.O.GXV10E,0)},c2v:function(){gx.O.GXV10E=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("CTLCESTCODIGOXML",n||gx.fn.currentGridRowImpl(6),".")},nac:gx.falseFn};t[15]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:6,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCAD",gxz:"ZV9bmpCad",gxold:"OV9bmpCad",gxvar:"AV9bmpCad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV9bmpCad=n},v2z:function(n){gx.O.ZV9bmpCad=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPCAD",n||gx.fn.currentGridRowImpl(6),gx.O.AV9bmpCad,gx.O.AV20Bmpcad_GXI)},c2v:function(){gx.O.AV20Bmpcad_GXI=this.val_GXI();gx.O.AV9bmpCad=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPCAD",n||gx.fn.currentGridRowImpl(6))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPCAD_GXI",n||gx.fn.currentGridRowImpl(6))},gxvar_GXI:"AV20Bmpcad_GXI",nac:gx.falseFn};t[16]={fld:"DIV2",format:2,grid:0};this.ZV13GXV107=0;this.OV13GXV107=0;this.ZV14GXV108=0;this.OV14GXV108=0;this.ZV8ProdutoReferencia="";this.OV8ProdutoReferencia="";this.ZV15GXV10A="";this.OV15GXV10A="";this.ZV16GXV10B=0;this.OV16GXV10B=0;this.ZV17GXV10C=0;this.OV17GXV10C=0;this.ZV18GXV10D=0;this.OV18GXV10D=0;this.ZV19GXV10E=0;this.OV19GXV10E=0;this.ZV9bmpCad="";this.OV9bmpCad="";this.GXV107=0;this.GXV108=0;this.AV8ProdutoReferencia="";this.GXV10A="";this.GXV10B=0;this.GXV10C=0;this.GXV10D=0;this.GXV10E=0;this.AV9bmpCad="";this.A2965ProdutoId=0;this.A2964ProdutoEmpresaId="";this.A3837ProdutoReferencia="";this.AV5SdtNCMCEST=[];this.AV7ProdutoEmpresaId="";this.Events={e112gz2_client:["'FECHAR'",!0],e132gz2_client:["'CADASTRAR'",!0],e152gz2_client:["ENTER",!0],e162gz2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV9bmpCad",fld:"vBMPCAD"},{av:'gx.fn.getCtrlProperty("vBMPCAD","Tooltiptext")',ctrl:"vBMPCAD",prop:"Tooltiptext"},{av:"AV5SdtNCMCEST",fld:"vSDTNCMCEST",grid:6},{av:"A2964ProdutoEmpresaId",fld:"PRODUTOEMPRESAID"},{av:"AV7ProdutoEmpresaId",fld:"vPRODUTOEMPRESAID"},{av:"A2965ProdutoId",fld:"PRODUTOID"},{av:"A3837ProdutoReferencia",fld:"PRODUTOREFERENCIA"}],[]];this.EvtParms["'FECHAR'"]=[[],[]];this.EvtParms["'CADASTRAR'"]=[[{av:"AV7ProdutoEmpresaId",fld:"vPRODUTOEMPRESAID"},{av:"AV5SdtNCMCEST",fld:"vSDTNCMCEST",grid:6}],[]];this.EvtParms["GRID.LOAD"]=[[{av:"AV5SdtNCMCEST",fld:"vSDTNCMCEST",grid:6},{av:"A2964ProdutoEmpresaId",fld:"PRODUTOEMPRESAID"},{av:"AV7ProdutoEmpresaId",fld:"vPRODUTOEMPRESAID"},{av:"A2965ProdutoId",fld:"PRODUTOID"},{av:"A3837ProdutoReferencia",fld:"PRODUTOREFERENCIA"}],[{ctrl:"CTLCESTCODIGO",prop:"Class"},{ctrl:"CTLCESTCODIGOXML",prop:"Class"},{ctrl:"CTLNCMCODIGO",prop:"Class"},{ctrl:"CTLNCMCODIGOXML",prop:"Class"},{av:"AV8ProdutoReferencia",fld:"vPRODUTOREFERENCIA"}]];this.setVCMap("AV5SdtNCMCEST","vSDTNCMCEST",0,"CollSdtImpressao.SdtImpressaoItem");this.setVCMap("A2964ProdutoEmpresaId","PRODUTOEMPRESAID",0,"char");this.setVCMap("AV7ProdutoEmpresaId","vPRODUTOEMPRESAID",0,"char");this.setVCMap("A2965ProdutoId","PRODUTOID",0,"int");this.setVCMap("A3837ProdutoReferencia","PRODUTOREFERENCIA",0,"svchar");this.setVCMap("AV5SdtNCMCEST","vSDTNCMCEST",0,"CollSdtImpressao.SdtImpressaoItem");this.setVCMap("A2964ProdutoEmpresaId","PRODUTOEMPRESAID",0,"char");this.setVCMap("AV7ProdutoEmpresaId","vPRODUTOEMPRESAID",0,"char");this.setVCMap("A2965ProdutoId","PRODUTOID",0,"int");this.setVCMap("A3837ProdutoReferencia","PRODUTOREFERENCIA",0,"svchar");n.addRefreshingVar({rfrVar:"AV9bmpCad",rfrProp:"Value",gxAttId:"Bmpcad"});n.addRefreshingVar({rfrVar:"AV9bmpCad",rfrProp:"Tooltiptext",gxAttId:"Bmpcad"});n.addRefreshingVar({rfrVar:"AV5SdtNCMCEST"});n.addRefreshingVar({rfrVar:"A2964ProdutoEmpresaId"});n.addRefreshingVar({rfrVar:"AV7ProdutoEmpresaId"});n.addRefreshingVar({rfrVar:"A2965ProdutoId"});n.addRefreshingVar({rfrVar:"A3837ProdutoReferencia"});this.addGridBCProperty("Sdtncmcest",["Item"],this.GXValidFnc[7],"AV5SdtNCMCEST");this.addGridBCProperty("Sdtncmcest",["ProdutoId"],this.GXValidFnc[8],"AV5SdtNCMCEST");this.addGridBCProperty("Sdtncmcest",["ProdutoDescricao"],this.GXValidFnc[10],"AV5SdtNCMCEST");this.addGridBCProperty("Sdtncmcest",["NCMCodigo"],this.GXValidFnc[11],"AV5SdtNCMCEST");this.addGridBCProperty("Sdtncmcest",["NCMCodigoXml"],this.GXValidFnc[12],"AV5SdtNCMCEST");this.addGridBCProperty("Sdtncmcest",["CESTCodigo"],this.GXValidFnc[13],"AV5SdtNCMCEST");this.addGridBCProperty("Sdtncmcest",["CESTCodigoXml"],this.GXValidFnc[14],"AV5SdtNCMCEST");this.InitStandaloneVars()});gx.setParentObj(new hentradaprovncmcest)