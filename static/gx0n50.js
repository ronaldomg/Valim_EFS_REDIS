/**@preserve  GeneXus Java 10_3_12-110051 on January 20, 2020 10:20:28.31
*/
gx.evt.autoSkip=!1;gx.define("gx0n50",!1,function(){var n,t;this.ServerClass="gx0n50";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV13pTipoConcretoTracoTpCon=gx.fn.getIntegerValue("vPTIPOCONCRETOTRACOTPCON",".");this.AV14pTipoConcretoTracoSequencia=gx.fn.getIntegerValue("vPTIPOCONCRETOTRACOSEQUENCIA",".")};this.e132eg2_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e142eg1_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,59];this.GXLastCtrlId=59;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0n50",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.Grid1Container;t.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");t.addSingleLineEdit(11332,53,"TIPOCONCRETOTRACOTPCON","Tp Con","","TipoConcretoTracoTpCon","int",0,"px",3,3,"right",null,[],11332,"TipoConcretoTracoTpCon",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(11333,54,"TIPOCONCRETOTRACOSEQUENCIA","Traco Sequencia","","TipoConcretoTracoSequencia","int",0,"px",3,3,"right",null,[],11333,"TipoConcretoTracoSequencia",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(11334,55,"TIPOCONCRETOTRACOPRODUTOEMPID","Emp Id","","TipoConcretoTracoProdutoEmpId","char",0,"px",10,10,"left",null,[],11334,"TipoConcretoTracoProdutoEmpId",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(11335,56,"TIPOCONCRETOTRACOPRODUTOID","Produto Id","","TipoConcretoTracoProdutoId","int",0,"px",10,10,"right",null,[],11335,"TipoConcretoTracoProdutoId",!0,0,!1,!1,"Attribute",1,"");this.setGrid(t);n[2]={fld:"TABLE1",grid:0};n[8]={fld:"GROUP1",grid:0};n[9]={fld:"TABLE2",grid:0};n[12]={fld:"TEXTBLOCKTIPOCONCRETOTRACOTPCON",format:0,grid:0};n[14]={lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOCONCRETOTRACOTPCON",gxz:"ZV6cTipoConcretoTracoTpCon",gxold:"OV6cTipoConcretoTracoTpCon",gxvar:"AV6cTipoConcretoTracoTpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6cTipoConcretoTracoTpCon=gx.num.intval(n)},v2z:function(n){gx.O.ZV6cTipoConcretoTracoTpCon=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCTIPOCONCRETOTRACOTPCON",gx.O.AV6cTipoConcretoTracoTpCon,0)},c2v:function(){gx.O.AV6cTipoConcretoTracoTpCon=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTIPOCONCRETOTRACOTPCON",".")},nac:gx.falseFn};n[17]={fld:"TEXTBLOCKTIPOCONCRETOTRACOSEQUENCIA",format:0,grid:0};n[19]={lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOCONCRETOTRACOSEQUENCIA",gxz:"ZV7cTipoConcretoTracoSequencia",gxold:"OV7cTipoConcretoTracoSequencia",gxvar:"AV7cTipoConcretoTracoSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV7cTipoConcretoTracoSequencia=gx.num.intval(n)},v2z:function(n){gx.O.ZV7cTipoConcretoTracoSequencia=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCTIPOCONCRETOTRACOSEQUENCIA",gx.O.AV7cTipoConcretoTracoSequencia,0)},c2v:function(){gx.O.AV7cTipoConcretoTracoSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTIPOCONCRETOTRACOSEQUENCIA",".")},nac:gx.falseFn};n[22]={fld:"TEXTBLOCKTIPOCONCRETOTRACOPRODUTOEMPID",format:0,grid:0};n[24]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOCONCRETOTRACOPRODUTOEMPID",gxz:"ZV8cTipoConcretoTracoProdutoEmpId",gxold:"OV8cTipoConcretoTracoProdutoEmpId",gxvar:"AV8cTipoConcretoTracoProdutoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV8cTipoConcretoTracoProdutoEmpId=n},v2z:function(n){gx.O.ZV8cTipoConcretoTracoProdutoEmpId=n},v2c:function(){gx.fn.setControlValue("vCTIPOCONCRETOTRACOPRODUTOEMPID",gx.O.AV8cTipoConcretoTracoProdutoEmpId,0)},c2v:function(){gx.O.AV8cTipoConcretoTracoProdutoEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOCONCRETOTRACOPRODUTOEMPID")},nac:gx.falseFn};n[27]={fld:"TEXTBLOCKTIPOCONCRETOTRACOPRODUTOID",format:0,grid:0};n[29]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOCONCRETOTRACOPRODUTOID",gxz:"ZV9cTipoConcretoTracoProdutoId",gxold:"OV9cTipoConcretoTracoProdutoId",gxvar:"AV9cTipoConcretoTracoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV9cTipoConcretoTracoProdutoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV9cTipoConcretoTracoProdutoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCTIPOCONCRETOTRACOPRODUTOID",gx.O.AV9cTipoConcretoTracoProdutoId,0)},c2v:function(){gx.O.AV9cTipoConcretoTracoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTIPOCONCRETOTRACOPRODUTOID",".")},nac:gx.falseFn};n[32]={fld:"TEXTBLOCKTIPOCONCRETOTRACOVLRCLASSIFIC",format:0,grid:0};n[34]={lvl:0,type:"char",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOCONCRETOTRACOVLRCLASSIFIC",gxz:"ZV10cTipoConcretoTracoVlrClassific",gxold:"OV10cTipoConcretoTracoVlrClassific",gxvar:"AV10cTipoConcretoTracoVlrClassific",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV10cTipoConcretoTracoVlrClassific=n},v2z:function(n){gx.O.ZV10cTipoConcretoTracoVlrClassific=n},v2c:function(){gx.fn.setControlValue("vCTIPOCONCRETOTRACOVLRCLASSIFIC",gx.O.AV10cTipoConcretoTracoVlrClassific,0)},c2v:function(){gx.O.AV10cTipoConcretoTracoVlrClassific=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOCONCRETOTRACOVLRCLASSIFIC")},nac:gx.falseFn};n[37]={fld:"TEXTBLOCKTIPOCONCRETOTRACOQTDEREAL",format:0,grid:0};n[39]={lvl:0,type:"decimal",len:6,dec:2,sign:!1,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOCONCRETOTRACOQTDEREAL",gxz:"ZV11cTipoConcretoTracoQtdeReal",gxold:"OV11cTipoConcretoTracoQtdeReal",gxvar:"AV11cTipoConcretoTracoQtdeReal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV11cTipoConcretoTracoQtdeReal=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV11cTipoConcretoTracoQtdeReal=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vCTIPOCONCRETOTRACOQTDEREAL",gx.O.AV11cTipoConcretoTracoQtdeReal,2,",")},c2v:function(){gx.O.AV11cTipoConcretoTracoQtdeReal=this.val()},val:function(){return gx.fn.getDecimalValue("vCTIPOCONCRETOTRACOQTDEREAL",".",",")},nac:gx.falseFn};n[42]={fld:"TEXTBLOCKTIPOCONCRETOTRACOQTDECONTABIL",format:0,grid:0};n[44]={lvl:0,type:"decimal",len:6,dec:2,sign:!1,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOCONCRETOTRACOQTDECONTABIL",gxz:"ZV12cTipoConcretoTracoQtdeContabil",gxold:"OV12cTipoConcretoTracoQtdeContabil",gxvar:"AV12cTipoConcretoTracoQtdeContabil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV12cTipoConcretoTracoQtdeContabil=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV12cTipoConcretoTracoQtdeContabil=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vCTIPOCONCRETOTRACOQTDECONTABIL",gx.O.AV12cTipoConcretoTracoQtdeContabil,2,",")},c2v:function(){gx.O.AV12cTipoConcretoTracoQtdeContabil=this.val()},val:function(){return gx.fn.getDecimalValue("vCTIPOCONCRETOTRACOQTDECONTABIL",".",",")},nac:gx.falseFn};n[47]={fld:"GROUP2",grid:0};n[48]={fld:"TABLE3",grid:0};n[52]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV5LinkSelection=n},v2z:function(n){gx.O.ZV5LinkSelection=n},v2c:function(n){gx.fn.setGridMultimediaValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(n){return gx.fn.getGridControlValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(51))},val_GXI:function(n){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",n||gx.fn.currentGridRowImpl(51))},gxvar_GXI:"AV17Linkselection_GXI",nac:gx.falseFn};n[53]={lvl:2,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONCRETOTRACOTPCON",gxz:"Z11332TipoConcretoTracoTpCon",gxold:"O11332TipoConcretoTracoTpCon",gxvar:"A11332TipoConcretoTracoTpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A11332TipoConcretoTracoTpCon=gx.num.intval(n)},v2z:function(n){gx.O.Z11332TipoConcretoTracoTpCon=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("TIPOCONCRETOTRACOTPCON",n||gx.fn.currentGridRowImpl(51),gx.O.A11332TipoConcretoTracoTpCon,0)},c2v:function(){gx.O.A11332TipoConcretoTracoTpCon=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("TIPOCONCRETOTRACOTPCON",n||gx.fn.currentGridRowImpl(51),".")},nac:gx.falseFn};n[54]={lvl:2,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONCRETOTRACOSEQUENCIA",gxz:"Z11333TipoConcretoTracoSequencia",gxold:"O11333TipoConcretoTracoSequencia",gxvar:"A11333TipoConcretoTracoSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A11333TipoConcretoTracoSequencia=gx.num.intval(n)},v2z:function(n){gx.O.Z11333TipoConcretoTracoSequencia=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("TIPOCONCRETOTRACOSEQUENCIA",n||gx.fn.currentGridRowImpl(51),gx.O.A11333TipoConcretoTracoSequencia,0)},c2v:function(){gx.O.A11333TipoConcretoTracoSequencia=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("TIPOCONCRETOTRACOSEQUENCIA",n||gx.fn.currentGridRowImpl(51),".")},nac:gx.falseFn};n[55]={lvl:2,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONCRETOTRACOPRODUTOEMPID",gxz:"Z11334TipoConcretoTracoProdutoEmpId",gxold:"O11334TipoConcretoTracoProdutoEmpId",gxvar:"A11334TipoConcretoTracoProdutoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A11334TipoConcretoTracoProdutoEmpId=n},v2z:function(n){gx.O.Z11334TipoConcretoTracoProdutoEmpId=n},v2c:function(n){gx.fn.setGridControlValue("TIPOCONCRETOTRACOPRODUTOEMPID",n||gx.fn.currentGridRowImpl(51),gx.O.A11334TipoConcretoTracoProdutoEmpId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A11334TipoConcretoTracoProdutoEmpId=this.val()},val:function(n){return gx.fn.getGridControlValue("TIPOCONCRETOTRACOPRODUTOEMPID",n||gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};n[56]={lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONCRETOTRACOPRODUTOID",gxz:"Z11335TipoConcretoTracoProdutoId",gxold:"O11335TipoConcretoTracoProdutoId",gxvar:"A11335TipoConcretoTracoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A11335TipoConcretoTracoProdutoId=gx.num.intval(n)},v2z:function(n){gx.O.Z11335TipoConcretoTracoProdutoId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("TIPOCONCRETOTRACOPRODUTOID",n||gx.fn.currentGridRowImpl(51),gx.O.A11335TipoConcretoTracoProdutoId,0)},c2v:function(){gx.O.A11335TipoConcretoTracoProdutoId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("TIPOCONCRETOTRACOPRODUTOID",n||gx.fn.currentGridRowImpl(51),".")},nac:gx.falseFn};n[59]={fld:"TABLE4",grid:0};this.AV6cTipoConcretoTracoTpCon=0;this.ZV6cTipoConcretoTracoTpCon=0;this.OV6cTipoConcretoTracoTpCon=0;this.AV7cTipoConcretoTracoSequencia=0;this.ZV7cTipoConcretoTracoSequencia=0;this.OV7cTipoConcretoTracoSequencia=0;this.AV8cTipoConcretoTracoProdutoEmpId="";this.ZV8cTipoConcretoTracoProdutoEmpId="";this.OV8cTipoConcretoTracoProdutoEmpId="";this.AV9cTipoConcretoTracoProdutoId=0;this.ZV9cTipoConcretoTracoProdutoId=0;this.OV9cTipoConcretoTracoProdutoId=0;this.AV10cTipoConcretoTracoVlrClassific="";this.ZV10cTipoConcretoTracoVlrClassific="";this.OV10cTipoConcretoTracoVlrClassific="";this.AV11cTipoConcretoTracoQtdeReal=0;this.ZV11cTipoConcretoTracoQtdeReal=0;this.OV11cTipoConcretoTracoQtdeReal=0;this.AV12cTipoConcretoTracoQtdeContabil=0;this.ZV12cTipoConcretoTracoQtdeContabil=0;this.OV12cTipoConcretoTracoQtdeContabil=0;this.ZV5LinkSelection="";this.OV5LinkSelection="";this.Z11332TipoConcretoTracoTpCon=0;this.O11332TipoConcretoTracoTpCon=0;this.Z11333TipoConcretoTracoSequencia=0;this.O11333TipoConcretoTracoSequencia=0;this.Z11334TipoConcretoTracoProdutoEmpId="";this.O11334TipoConcretoTracoProdutoEmpId="";this.Z11335TipoConcretoTracoProdutoId=0;this.O11335TipoConcretoTracoProdutoId=0;this.AV6cTipoConcretoTracoTpCon=0;this.AV7cTipoConcretoTracoSequencia=0;this.AV8cTipoConcretoTracoProdutoEmpId="";this.AV9cTipoConcretoTracoProdutoId=0;this.AV10cTipoConcretoTracoVlrClassific="";this.AV11cTipoConcretoTracoQtdeReal=0;this.AV12cTipoConcretoTracoQtdeContabil=0;this.AV13pTipoConcretoTracoTpCon=0;this.AV14pTipoConcretoTracoSequencia=0;this.A11440TipoConcretoTracoQtdeContabil=0;this.A11402TipoConcretoTracoQtdeReal=0;this.A11403TipoConcretoTracoVlrClassific="";this.AV5LinkSelection="";this.A11332TipoConcretoTracoTpCon=0;this.A11333TipoConcretoTracoSequencia=0;this.A11334TipoConcretoTracoProdutoEmpId="";this.A11335TipoConcretoTracoProdutoId=0;this.Events={e132eg2_client:["ENTER",!0],e142eg1_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cTipoConcretoTracoTpCon",fld:"vCTIPOCONCRETOTRACOTPCON"},{av:"AV7cTipoConcretoTracoSequencia",fld:"vCTIPOCONCRETOTRACOSEQUENCIA"},{av:"AV8cTipoConcretoTracoProdutoEmpId",fld:"vCTIPOCONCRETOTRACOPRODUTOEMPID"},{av:"AV9cTipoConcretoTracoProdutoId",fld:"vCTIPOCONCRETOTRACOPRODUTOID"},{av:"AV10cTipoConcretoTracoVlrClassific",fld:"vCTIPOCONCRETOTRACOVLRCLASSIFIC"},{av:"AV11cTipoConcretoTracoQtdeReal",fld:"vCTIPOCONCRETOTRACOQTDEREAL"},{av:"AV12cTipoConcretoTracoQtdeContabil",fld:"vCTIPOCONCRETOTRACOQTDECONTABIL"}],[]];this.EvtParms.LOAD=[[],[{av:"AV5LinkSelection",fld:"vLINKSELECTION"}]];this.EvtParms.ENTER=[[{av:"A11332TipoConcretoTracoTpCon",fld:"TIPOCONCRETOTRACOTPCON"},{av:"A11333TipoConcretoTracoSequencia",fld:"TIPOCONCRETOTRACOSEQUENCIA"}],[{av:"AV13pTipoConcretoTracoTpCon",fld:"vPTIPOCONCRETOTRACOTPCON"},{av:"AV14pTipoConcretoTracoSequencia",fld:"vPTIPOCONCRETOTRACOSEQUENCIA"}]];this.EvtParms.GRID1_FIRSTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cTipoConcretoTracoTpCon",fld:"vCTIPOCONCRETOTRACOTPCON"},{av:"AV7cTipoConcretoTracoSequencia",fld:"vCTIPOCONCRETOTRACOSEQUENCIA"},{av:"AV8cTipoConcretoTracoProdutoEmpId",fld:"vCTIPOCONCRETOTRACOPRODUTOEMPID"},{av:"AV9cTipoConcretoTracoProdutoId",fld:"vCTIPOCONCRETOTRACOPRODUTOID"},{av:"AV10cTipoConcretoTracoVlrClassific",fld:"vCTIPOCONCRETOTRACOVLRCLASSIFIC"},{av:"AV11cTipoConcretoTracoQtdeReal",fld:"vCTIPOCONCRETOTRACOQTDEREAL"},{av:"AV12cTipoConcretoTracoQtdeContabil",fld:"vCTIPOCONCRETOTRACOQTDECONTABIL"}],[]];this.EvtParms.GRID1_PREVPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cTipoConcretoTracoTpCon",fld:"vCTIPOCONCRETOTRACOTPCON"},{av:"AV7cTipoConcretoTracoSequencia",fld:"vCTIPOCONCRETOTRACOSEQUENCIA"},{av:"AV8cTipoConcretoTracoProdutoEmpId",fld:"vCTIPOCONCRETOTRACOPRODUTOEMPID"},{av:"AV9cTipoConcretoTracoProdutoId",fld:"vCTIPOCONCRETOTRACOPRODUTOID"},{av:"AV10cTipoConcretoTracoVlrClassific",fld:"vCTIPOCONCRETOTRACOVLRCLASSIFIC"},{av:"AV11cTipoConcretoTracoQtdeReal",fld:"vCTIPOCONCRETOTRACOQTDEREAL"},{av:"AV12cTipoConcretoTracoQtdeContabil",fld:"vCTIPOCONCRETOTRACOQTDECONTABIL"}],[]];this.EvtParms.GRID1_NEXTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cTipoConcretoTracoTpCon",fld:"vCTIPOCONCRETOTRACOTPCON"},{av:"AV7cTipoConcretoTracoSequencia",fld:"vCTIPOCONCRETOTRACOSEQUENCIA"},{av:"AV8cTipoConcretoTracoProdutoEmpId",fld:"vCTIPOCONCRETOTRACOPRODUTOEMPID"},{av:"AV9cTipoConcretoTracoProdutoId",fld:"vCTIPOCONCRETOTRACOPRODUTOID"},{av:"AV10cTipoConcretoTracoVlrClassific",fld:"vCTIPOCONCRETOTRACOVLRCLASSIFIC"},{av:"AV11cTipoConcretoTracoQtdeReal",fld:"vCTIPOCONCRETOTRACOQTDEREAL"},{av:"AV12cTipoConcretoTracoQtdeContabil",fld:"vCTIPOCONCRETOTRACOQTDECONTABIL"}],[]];this.EvtParms.GRID1_LASTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cTipoConcretoTracoTpCon",fld:"vCTIPOCONCRETOTRACOTPCON"},{av:"AV7cTipoConcretoTracoSequencia",fld:"vCTIPOCONCRETOTRACOSEQUENCIA"},{av:"AV8cTipoConcretoTracoProdutoEmpId",fld:"vCTIPOCONCRETOTRACOPRODUTOEMPID"},{av:"AV9cTipoConcretoTracoProdutoId",fld:"vCTIPOCONCRETOTRACOPRODUTOID"},{av:"AV10cTipoConcretoTracoVlrClassific",fld:"vCTIPOCONCRETOTRACOVLRCLASSIFIC"},{av:"AV11cTipoConcretoTracoQtdeReal",fld:"vCTIPOCONCRETOTRACOQTDEREAL"},{av:"AV12cTipoConcretoTracoQtdeContabil",fld:"vCTIPOCONCRETOTRACOQTDECONTABIL"}],[]];this.setVCMap("AV13pTipoConcretoTracoTpCon","vPTIPOCONCRETOTRACOTPCON",0,"int");this.setVCMap("AV14pTipoConcretoTracoSequencia","vPTIPOCONCRETOTRACOSEQUENCIA",0,"int");t.addRefreshingVar(this.GXValidFnc[14]);t.addRefreshingVar(this.GXValidFnc[19]);t.addRefreshingVar(this.GXValidFnc[24]);t.addRefreshingVar(this.GXValidFnc[29]);t.addRefreshingVar(this.GXValidFnc[34]);t.addRefreshingVar(this.GXValidFnc[39]);t.addRefreshingVar(this.GXValidFnc[44]);this.InitStandaloneVars()});gx.setParentObj(new gx0n50)