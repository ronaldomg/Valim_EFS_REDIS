/**@preserve  GeneXus Java 10_3_12-110051 on May 19, 2017 5:7:42.33
*/
gx.evt.autoSkip=!1;gx.define("gx0k70",!1,function(){var n,t;this.ServerClass="gx0k70";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV9pFunctionDBSchema=gx.fn.getControlValue("vPFUNCTIONDBSCHEMA");this.AV10pFunctionDBName=gx.fn.getControlValue("vPFUNCTIONDBNAME")};this.e132142_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e142141_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,28,32,33,34,35,38];this.GXLastCtrlId=38;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",31,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0k70",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.Grid1Container;t.addBitmap("&Linkselection","vLINKSELECTION",32,0,"px",17,"px",null,"","","Image","");t.addSingleLineEdit(9835,33,"FUNCTIONDBSCHEMA","DBSchema","","FunctionDBSchema","svchar",0,"px",20,20,"left",null,[],9835,"FunctionDBSchema",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(9836,34,"FUNCTIONDBNAME","DBName","","FunctionDBName","svchar",0,"px",40,40,"left",null,[],9836,"FunctionDBName",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(9856,35,"FUNCTIONDBLANGUAGE","DBLanguage","Selecionar","FunctionDBLanguage","svchar",0,"px",20,20,"left",null,[],9856,"FunctionDBLanguage",!0,0,!1,!1,"Attribute",1,"");this.setGrid(t);n[2]={fld:"TABLE1",grid:0};n[8]={fld:"GROUP1",grid:0};n[9]={fld:"TABLE2",grid:0};n[12]={fld:"TEXTBLOCKFUNCTIONDBSCHEMA",format:0,grid:0};n[14]={lvl:0,type:"svchar",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFUNCTIONDBSCHEMA",gxz:"ZV6cFunctionDBSchema",gxold:"OV6cFunctionDBSchema",gxvar:"AV6cFunctionDBSchema",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6cFunctionDBSchema=n},v2z:function(n){gx.O.ZV6cFunctionDBSchema=n},v2c:function(){gx.fn.setControlValue("vCFUNCTIONDBSCHEMA",gx.O.AV6cFunctionDBSchema,0)},c2v:function(){gx.O.AV6cFunctionDBSchema=this.val()},val:function(){return gx.fn.getControlValue("vCFUNCTIONDBSCHEMA")},nac:gx.falseFn};n[17]={fld:"TEXTBLOCKFUNCTIONDBNAME",format:0,grid:0};n[19]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFUNCTIONDBNAME",gxz:"ZV7cFunctionDBName",gxold:"OV7cFunctionDBName",gxvar:"AV7cFunctionDBName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV7cFunctionDBName=n},v2z:function(n){gx.O.ZV7cFunctionDBName=n},v2c:function(){gx.fn.setControlValue("vCFUNCTIONDBNAME",gx.O.AV7cFunctionDBName,0)},c2v:function(){gx.O.AV7cFunctionDBName=this.val()},val:function(){return gx.fn.getControlValue("vCFUNCTIONDBNAME")},nac:gx.falseFn};n[22]={fld:"TEXTBLOCKFUNCTIONDBLANGUAGE",format:0,grid:0};n[24]={lvl:0,type:"svchar",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFUNCTIONDBLANGUAGE",gxz:"ZV8cFunctionDBLanguage",gxold:"OV8cFunctionDBLanguage",gxvar:"AV8cFunctionDBLanguage",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV8cFunctionDBLanguage=n},v2z:function(n){gx.O.ZV8cFunctionDBLanguage=n},v2c:function(){gx.fn.setControlValue("vCFUNCTIONDBLANGUAGE",gx.O.AV8cFunctionDBLanguage,0)},c2v:function(){gx.O.AV8cFunctionDBLanguage=this.val()},val:function(){return gx.fn.getControlValue("vCFUNCTIONDBLANGUAGE")},nac:gx.falseFn};n[27]={fld:"GROUP2",grid:0};n[28]={fld:"TABLE3",grid:0};n[32]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV5LinkSelection=n},v2z:function(n){gx.O.ZV5LinkSelection=n},v2c:function(n){gx.fn.setGridMultimediaValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(31),gx.O.AV5LinkSelection,gx.O.AV13Linkselection_GXI)},c2v:function(){gx.O.AV13Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(n){return gx.fn.getGridControlValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(31))},val_GXI:function(n){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",n||gx.fn.currentGridRowImpl(31))},gxvar_GXI:"AV13Linkselection_GXI",nac:gx.falseFn};n[33]={lvl:2,type:"svchar",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FUNCTIONDBSCHEMA",gxz:"Z9835FunctionDBSchema",gxold:"O9835FunctionDBSchema",gxvar:"A9835FunctionDBSchema",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A9835FunctionDBSchema=n},v2z:function(n){gx.O.Z9835FunctionDBSchema=n},v2c:function(n){gx.fn.setGridControlValue("FUNCTIONDBSCHEMA",n||gx.fn.currentGridRowImpl(31),gx.O.A9835FunctionDBSchema,0)},c2v:function(){gx.O.A9835FunctionDBSchema=this.val()},val:function(n){return gx.fn.getGridControlValue("FUNCTIONDBSCHEMA",n||gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};n[34]={lvl:2,type:"svchar",len:40,dec:0,sign:!1,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FUNCTIONDBNAME",gxz:"Z9836FunctionDBName",gxold:"O9836FunctionDBName",gxvar:"A9836FunctionDBName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A9836FunctionDBName=n},v2z:function(n){gx.O.Z9836FunctionDBName=n},v2c:function(n){gx.fn.setGridControlValue("FUNCTIONDBNAME",n||gx.fn.currentGridRowImpl(31),gx.O.A9836FunctionDBName,0)},c2v:function(){gx.O.A9836FunctionDBName=this.val()},val:function(n){return gx.fn.getGridControlValue("FUNCTIONDBNAME",n||gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};n[35]={lvl:2,type:"svchar",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FUNCTIONDBLANGUAGE",gxz:"Z9856FunctionDBLanguage",gxold:"O9856FunctionDBLanguage",gxvar:"A9856FunctionDBLanguage",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A9856FunctionDBLanguage=n},v2z:function(n){gx.O.Z9856FunctionDBLanguage=n},v2c:function(n){gx.fn.setGridControlValue("FUNCTIONDBLANGUAGE",n||gx.fn.currentGridRowImpl(31),gx.O.A9856FunctionDBLanguage,0)},c2v:function(){gx.O.A9856FunctionDBLanguage=this.val()},val:function(n){return gx.fn.getGridControlValue("FUNCTIONDBLANGUAGE",n||gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};n[38]={fld:"TABLE4",grid:0};this.AV6cFunctionDBSchema="";this.ZV6cFunctionDBSchema="";this.OV6cFunctionDBSchema="";this.AV7cFunctionDBName="";this.ZV7cFunctionDBName="";this.OV7cFunctionDBName="";this.AV8cFunctionDBLanguage="";this.ZV8cFunctionDBLanguage="";this.OV8cFunctionDBLanguage="";this.ZV5LinkSelection="";this.OV5LinkSelection="";this.Z9835FunctionDBSchema="";this.O9835FunctionDBSchema="";this.Z9836FunctionDBName="";this.O9836FunctionDBName="";this.Z9856FunctionDBLanguage="";this.O9856FunctionDBLanguage="";this.AV6cFunctionDBSchema="";this.AV7cFunctionDBName="";this.AV8cFunctionDBLanguage="";this.AV9pFunctionDBSchema="";this.AV10pFunctionDBName="";this.AV5LinkSelection="";this.A9835FunctionDBSchema="";this.A9836FunctionDBName="";this.A9856FunctionDBLanguage="";this.Events={e132142_client:["ENTER",!0],e142141_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cFunctionDBSchema",fld:"vCFUNCTIONDBSCHEMA"},{av:"AV7cFunctionDBName",fld:"vCFUNCTIONDBNAME"},{av:"AV8cFunctionDBLanguage",fld:"vCFUNCTIONDBLANGUAGE"}],[]];this.EvtParms.LOAD=[[],[{av:"AV5LinkSelection",fld:"vLINKSELECTION"}]];this.EvtParms.ENTER=[[{av:"A9835FunctionDBSchema",fld:"FUNCTIONDBSCHEMA"},{av:"A9836FunctionDBName",fld:"FUNCTIONDBNAME"}],[{av:"AV9pFunctionDBSchema",fld:"vPFUNCTIONDBSCHEMA"},{av:"AV10pFunctionDBName",fld:"vPFUNCTIONDBNAME"}]];this.EvtParms.GRID1_FIRSTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cFunctionDBSchema",fld:"vCFUNCTIONDBSCHEMA"},{av:"AV7cFunctionDBName",fld:"vCFUNCTIONDBNAME"},{av:"AV8cFunctionDBLanguage",fld:"vCFUNCTIONDBLANGUAGE"}],[]];this.EvtParms.GRID1_PREVPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cFunctionDBSchema",fld:"vCFUNCTIONDBSCHEMA"},{av:"AV7cFunctionDBName",fld:"vCFUNCTIONDBNAME"},{av:"AV8cFunctionDBLanguage",fld:"vCFUNCTIONDBLANGUAGE"}],[]];this.EvtParms.GRID1_NEXTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cFunctionDBSchema",fld:"vCFUNCTIONDBSCHEMA"},{av:"AV7cFunctionDBName",fld:"vCFUNCTIONDBNAME"},{av:"AV8cFunctionDBLanguage",fld:"vCFUNCTIONDBLANGUAGE"}],[]];this.EvtParms.GRID1_LASTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cFunctionDBSchema",fld:"vCFUNCTIONDBSCHEMA"},{av:"AV7cFunctionDBName",fld:"vCFUNCTIONDBNAME"},{av:"AV8cFunctionDBLanguage",fld:"vCFUNCTIONDBLANGUAGE"}],[]];this.setVCMap("AV9pFunctionDBSchema","vPFUNCTIONDBSCHEMA",0,"svchar");this.setVCMap("AV10pFunctionDBName","vPFUNCTIONDBNAME",0,"svchar");t.addRefreshingVar(this.GXValidFnc[14]);t.addRefreshingVar(this.GXValidFnc[19]);t.addRefreshingVar(this.GXValidFnc[24]);this.InitStandaloneVars()});gx.setParentObj(new gx0k70)