/**@preserve  GeneXus Java 10_3_12-110051 on May 5, 2020 18:23:33.20
*/
gx.evt.autoSkip=!1;gx.define("gx0140",!1,function(){var n,t;this.ServerClass="gx0140";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV9pPaisesId=gx.fn.getIntegerValue("vPPAISESID",".")};this.e144z1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")=="AdvancedContainer"?(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer AdvancedContainerVisible"),gx.fn.setCtrlProperty("BTNTOGGLE","Class",gx.fn.getCtrlProperty("BTNTOGGLE","Class")+" BtnToggleActive")):(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer"),gx.fn.setCtrlProperty("BTNTOGGLE","Class","BtnToggle"));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}])};this.e114z1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("PAISESIDFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("PAISESIDFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCPAISESID","Visible",!0)):(gx.fn.setCtrlProperty("PAISESIDFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCPAISESID","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("PAISESIDFILTERCONTAINER","Class")',ctrl:"PAISESIDFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCPAISESID","Visible")',ctrl:"vCPAISESID",prop:"Visible"}])};this.e124z1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("PAISESNOMEFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("PAISESNOMEFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCPAISESNOME","Visible",!0)):(gx.fn.setCtrlProperty("PAISESNOMEFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCPAISESNOME","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("PAISESNOMEFILTERCONTAINER","Class")',ctrl:"PAISESNOMEFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCPAISESNOME","Visible")',ctrl:"vCPAISESNOME",prop:"Visible"}])};this.e134z1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("PAISESCODBANCENTRALFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("PAISESCODBANCENTRALFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCPAISESCODBANCENTRAL","Visible",!0)):(gx.fn.setCtrlProperty("PAISESCODBANCENTRALFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCPAISESCODBANCENTRAL","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("PAISESCODBANCENTRALFILTERCONTAINER","Class")',ctrl:"PAISESCODBANCENTRALFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCPAISESCODBANCENTRAL","Visible")',ctrl:"vCPAISESCODBANCENTRAL",prop:"Visible"}])};this.e174z2_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e184z1_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,42,43,45,46,47,48,49,50];this.GXLastCtrlId=50;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",44,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0140",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.Grid1Container;t.addBitmap("&Linkselection","vLINKSELECTION",45,0,"px",17,"px",null,"","","SelectionAttribute","WWActionColumn");t.addSingleLineEdit(175,46,"PAISESID","Código País","","PaisesId","int",0,"px",7,7,"right",null,[],175,"PaisesId",!0,0,!1,!1,"Attribute",1,"WWColumn");t.addSingleLineEdit(176,47,"PAISESNOME","Nome do País","","PaisesNome","svchar",0,"px",40,40,"left",null,[],176,"PaisesNome",!0,0,!1,!1,"DescriptionAttribute",1,"WWColumn");t.addSingleLineEdit(183,48,"PAISESCODBANCENTRAL","Código Banco Central","","PaisesCodBanCentral","int",0,"px",7,7,"right",null,[],183,"PaisesCodBanCentral",!0,0,!1,!1,"Attribute",1,"WWColumn OptionalColumn");this.setGrid(t);n[2]={fld:"",grid:0};n[3]={fld:"MAIN",grid:0};n[4]={fld:"",grid:0};n[5]={fld:"",grid:0};n[6]={fld:"ADVANCEDCONTAINER",grid:0};n[7]={fld:"",grid:0};n[8]={fld:"",grid:0};n[9]={fld:"PAISESIDFILTERCONTAINER",grid:0};n[10]={fld:"",grid:0};n[11]={fld:"",grid:0};n[12]={fld:"LBLPAISESIDFILTER",format:1,grid:0};n[13]={fld:"",grid:0};n[14]={fld:"",grid:0};n[15]={fld:"",grid:0};n[16]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPAISESID",gxz:"ZV6cPaisesId",gxold:"OV6cPaisesId",gxvar:"AV6cPaisesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6cPaisesId=gx.num.intval(n)},v2z:function(n){gx.O.ZV6cPaisesId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCPAISESID",gx.O.AV6cPaisesId,0)},c2v:function(){gx.O.AV6cPaisesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPAISESID",".")},nac:gx.falseFn};n[17]={fld:"",grid:0};n[18]={fld:"",grid:0};n[19]={fld:"PAISESNOMEFILTERCONTAINER",grid:0};n[20]={fld:"",grid:0};n[21]={fld:"",grid:0};n[22]={fld:"LBLPAISESNOMEFILTER",format:1,grid:0};n[23]={fld:"",grid:0};n[24]={fld:"",grid:0};n[25]={fld:"",grid:0};n[26]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPAISESNOME",gxz:"ZV7cPaisesNome",gxold:"OV7cPaisesNome",gxvar:"AV7cPaisesNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV7cPaisesNome=n},v2z:function(n){gx.O.ZV7cPaisesNome=n},v2c:function(){gx.fn.setControlValue("vCPAISESNOME",gx.O.AV7cPaisesNome,0)},c2v:function(){gx.O.AV7cPaisesNome=this.val()},val:function(){return gx.fn.getControlValue("vCPAISESNOME")},nac:gx.falseFn};n[27]={fld:"",grid:0};n[28]={fld:"",grid:0};n[29]={fld:"PAISESCODBANCENTRALFILTERCONTAINER",grid:0};n[30]={fld:"",grid:0};n[31]={fld:"",grid:0};n[32]={fld:"LBLPAISESCODBANCENTRALFILTER",format:1,grid:0};n[33]={fld:"",grid:0};n[34]={fld:"",grid:0};n[35]={fld:"",grid:0};n[36]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPAISESCODBANCENTRAL",gxz:"ZV8cPaisesCodBanCentral",gxold:"OV8cPaisesCodBanCentral",gxvar:"AV8cPaisesCodBanCentral",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV8cPaisesCodBanCentral=gx.num.intval(n)},v2z:function(n){gx.O.ZV8cPaisesCodBanCentral=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCPAISESCODBANCENTRAL",gx.O.AV8cPaisesCodBanCentral,0)},c2v:function(){gx.O.AV8cPaisesCodBanCentral=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPAISESCODBANCENTRAL",".")},nac:gx.falseFn};n[37]={fld:"",grid:0};n[38]={fld:"GRIDTABLE",grid:0};n[39]={fld:"",grid:0};n[40]={fld:"",grid:0};n[42]={fld:"",grid:0};n[43]={fld:"",grid:0};n[45]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:44,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV5LinkSelection=n},v2z:function(n){gx.O.ZV5LinkSelection=n},v2c:function(n){gx.fn.setGridMultimediaValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(44),gx.O.AV5LinkSelection,gx.O.AV13Linkselection_GXI)},c2v:function(){gx.O.AV13Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(n){return gx.fn.getGridControlValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(44))},val_GXI:function(n){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",n||gx.fn.currentGridRowImpl(44))},gxvar_GXI:"AV13Linkselection_GXI",nac:gx.falseFn};n[46]={lvl:2,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PAISESID",gxz:"Z175PaisesId",gxold:"O175PaisesId",gxvar:"A175PaisesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A175PaisesId=gx.num.intval(n)},v2z:function(n){gx.O.Z175PaisesId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("PAISESID",n||gx.fn.currentGridRowImpl(44),gx.O.A175PaisesId,0)},c2v:function(){gx.O.A175PaisesId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("PAISESID",n||gx.fn.currentGridRowImpl(44),".")},nac:gx.falseFn};n[47]={lvl:2,type:"svchar",len:40,dec:0,sign:!1,ro:1,isacc:0,grid:44,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PAISESNOME",gxz:"Z176PaisesNome",gxold:"O176PaisesNome",gxvar:"A176PaisesNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A176PaisesNome=n},v2z:function(n){gx.O.Z176PaisesNome=n},v2c:function(n){gx.fn.setGridControlValue("PAISESNOME",n||gx.fn.currentGridRowImpl(44),gx.O.A176PaisesNome,0)},c2v:function(){gx.O.A176PaisesNome=this.val()},val:function(n){return gx.fn.getGridControlValue("PAISESNOME",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[48]={lvl:2,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PAISESCODBANCENTRAL",gxz:"Z183PaisesCodBanCentral",gxold:"O183PaisesCodBanCentral",gxvar:"A183PaisesCodBanCentral",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A183PaisesCodBanCentral=gx.num.intval(n)},v2z:function(n){gx.O.Z183PaisesCodBanCentral=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("PAISESCODBANCENTRAL",n||gx.fn.currentGridRowImpl(44),gx.O.A183PaisesCodBanCentral,0)},c2v:function(){gx.O.A183PaisesCodBanCentral=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("PAISESCODBANCENTRAL",n||gx.fn.currentGridRowImpl(44),".")},nac:gx.falseFn};n[49]={fld:"",grid:0};n[50]={fld:"",grid:0};this.AV6cPaisesId=0;this.ZV6cPaisesId=0;this.OV6cPaisesId=0;this.AV7cPaisesNome="";this.ZV7cPaisesNome="";this.OV7cPaisesNome="";this.AV8cPaisesCodBanCentral=0;this.ZV8cPaisesCodBanCentral=0;this.OV8cPaisesCodBanCentral=0;this.ZV5LinkSelection="";this.OV5LinkSelection="";this.Z175PaisesId=0;this.O175PaisesId=0;this.Z176PaisesNome="";this.O176PaisesNome="";this.Z183PaisesCodBanCentral=0;this.O183PaisesCodBanCentral=0;this.AV6cPaisesId=0;this.AV7cPaisesNome="";this.AV8cPaisesCodBanCentral=0;this.AV9pPaisesId=0;this.AV5LinkSelection="";this.A175PaisesId=0;this.A176PaisesNome="";this.A183PaisesCodBanCentral=0;this.Events={e174z2_client:["ENTER",!0],e184z1_client:["CANCEL",!0],e144z1_client:["'TOGGLE'",!1],e114z1_client:["LBLPAISESIDFILTER.CLICK",!1],e124z1_client:["LBLPAISESNOMEFILTER.CLICK",!1],e134z1_client:["LBLPAISESCODBANCENTRALFILTER.CLICK",!1]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cPaisesId",fld:"vCPAISESID"},{av:"AV7cPaisesNome",fld:"vCPAISESNOME"},{av:"AV8cPaisesCodBanCentral",fld:"vCPAISESCODBANCENTRAL"}],[]];this.EvtParms["'TOGGLE'"]=[[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}]];this.EvtParms["LBLPAISESIDFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("PAISESIDFILTERCONTAINER","Class")',ctrl:"PAISESIDFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("PAISESIDFILTERCONTAINER","Class")',ctrl:"PAISESIDFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCPAISESID","Visible")',ctrl:"vCPAISESID",prop:"Visible"}]];this.EvtParms["LBLPAISESNOMEFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("PAISESNOMEFILTERCONTAINER","Class")',ctrl:"PAISESNOMEFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("PAISESNOMEFILTERCONTAINER","Class")',ctrl:"PAISESNOMEFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCPAISESNOME","Visible")',ctrl:"vCPAISESNOME",prop:"Visible"}]];this.EvtParms["LBLPAISESCODBANCENTRALFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("PAISESCODBANCENTRALFILTERCONTAINER","Class")',ctrl:"PAISESCODBANCENTRALFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("PAISESCODBANCENTRALFILTERCONTAINER","Class")',ctrl:"PAISESCODBANCENTRALFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCPAISESCODBANCENTRAL","Visible")',ctrl:"vCPAISESCODBANCENTRAL",prop:"Visible"}]];this.EvtParms.LOAD=[[],[{av:"AV5LinkSelection",fld:"vLINKSELECTION"}]];this.EvtParms.ENTER=[[{av:"A175PaisesId",fld:"PAISESID"}],[{av:"AV9pPaisesId",fld:"vPPAISESID"}]];this.EvtParms.GRID1_FIRSTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cPaisesId",fld:"vCPAISESID"},{av:"AV7cPaisesNome",fld:"vCPAISESNOME"},{av:"AV8cPaisesCodBanCentral",fld:"vCPAISESCODBANCENTRAL"}],[]];this.EvtParms.GRID1_PREVPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cPaisesId",fld:"vCPAISESID"},{av:"AV7cPaisesNome",fld:"vCPAISESNOME"},{av:"AV8cPaisesCodBanCentral",fld:"vCPAISESCODBANCENTRAL"}],[]];this.EvtParms.GRID1_NEXTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cPaisesId",fld:"vCPAISESID"},{av:"AV7cPaisesNome",fld:"vCPAISESNOME"},{av:"AV8cPaisesCodBanCentral",fld:"vCPAISESCODBANCENTRAL"}],[]];this.EvtParms.GRID1_LASTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cPaisesId",fld:"vCPAISESID"},{av:"AV7cPaisesNome",fld:"vCPAISESNOME"},{av:"AV8cPaisesCodBanCentral",fld:"vCPAISESCODBANCENTRAL"}],[]];this.setVCMap("AV9pPaisesId","vPPAISESID",0,"int");t.addRefreshingVar(this.GXValidFnc[16]);t.addRefreshingVar(this.GXValidFnc[26]);t.addRefreshingVar(this.GXValidFnc[36]);this.InitStandaloneVars()});gx.setParentObj(new gx0140)