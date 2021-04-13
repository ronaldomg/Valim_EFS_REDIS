/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:49:52.88
*/
gx.evt.autoSkip = false;
gx.define('hconsultapaises', false, function () {
   this.ServerClass =  "hconsultapaises" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV14PPaisesId=gx.fn.getIntegerValue("vPPAISESID",'.') ;
   };
   this.e171e2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e111e2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e121e2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e131e2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e141e2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e151e2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e191e2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e211e1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,29,30,31,37,40,42,44,46,48,49,50,51];
   this.GXLastCtrlId =51;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultapaises",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(159,29,"PAISESID","","","PaisesId","int",0,"px",7,7,"right",null,[],159,"PaisesId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(160,30,"PAISESNOME","","","PaisesNome","svchar",0,"px",40,40,"left",null,[],160,"PaisesNome",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(415,31,"PAISESCODBANCENTRAL","","","PaisesCodBanCentral","int",0,"px",7,7,"right",null,[],415,"PaisesCodBanCentral",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCPAISESID",gxz:"ZV11cPaisesId",gxold:"OV11cPaisesId",gxvar:"AV11cPaisesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cPaisesId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cPaisesId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPAISESID",gx.O.AV11cPaisesId,0)},c2v:function(){gx.O.AV11cPaisesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPAISESID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCPAISESNOME",gxz:"ZV12cPaisesNome",gxold:"OV12cPaisesNome",gxvar:"AV12cPaisesNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cPaisesNome=Value},v2z:function(Value){gx.O.ZV12cPaisesNome=Value},v2c:function(){gx.fn.setControlValue("vCPAISESNOME",gx.O.AV12cPaisesNome,0)},c2v:function(){gx.O.AV12cPaisesNome=this.val()},val:function(){return gx.fn.getControlValue("vCPAISESNOME")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCPAISESCODBANCENTRAL",gxz:"ZV13cPaisesCodBanCentral",gxold:"OV13cPaisesCodBanCentral",gxvar:"AV13cPaisesCodBanCentral",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13cPaisesCodBanCentral=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13cPaisesCodBanCentral=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPAISESCODBANCENTRAL",gx.O.AV13cPaisesCodBanCentral,0)},c2v:function(){gx.O.AV13cPaisesCodBanCentral=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPAISESCODBANCENTRAL",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PAISESID",gxz:"Z159PaisesId",gxold:"O159PaisesId",gxvar:"A159PaisesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A159PaisesId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z159PaisesId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PAISESID",row || gx.fn.currentGridRowImpl(28),gx.O.A159PaisesId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A159PaisesId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PAISESID",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PAISESNOME",gxz:"Z160PaisesNome",gxold:"O160PaisesNome",gxvar:"A160PaisesNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A160PaisesNome=Value},v2z:function(Value){gx.O.Z160PaisesNome=Value},v2c:function(row){gx.fn.setGridControlValue("PAISESNOME",row || gx.fn.currentGridRowImpl(28),gx.O.A160PaisesNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A160PaisesNome=this.val()},val:function(row){return gx.fn.getGridControlValue("PAISESNOME",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PAISESCODBANCENTRAL",gxz:"Z415PaisesCodBanCentral",gxold:"O415PaisesCodBanCentral",gxvar:"A415PaisesCodBanCentral",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A415PaisesCodBanCentral=gx.num.intval(Value)},v2z:function(Value){gx.O.Z415PaisesCodBanCentral=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PAISESCODBANCENTRAL",row || gx.fn.currentGridRowImpl(28),gx.O.A415PaisesCodBanCentral,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A415PaisesCodBanCentral=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PAISESCODBANCENTRAL",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TABLENAV",grid:0};
   GXValidFnc[40]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[42]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[44]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[46]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[48]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV17Pagina",gxold:"OV17Pagina",gxvar:"AV17Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV17Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV17Pagina)},c2v:function(){gx.O.AV17Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV18PaginaAux",gxold:"OV18PaginaAux",gxvar:"AV18PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV18PaginaAux,0)},c2v:function(){gx.O.AV18PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV11cPaisesId = 0 ;
   this.ZV11cPaisesId = 0 ;
   this.OV11cPaisesId = 0 ;
   this.AV12cPaisesNome = "" ;
   this.ZV12cPaisesNome = "" ;
   this.OV12cPaisesNome = "" ;
   this.AV13cPaisesCodBanCentral = 0 ;
   this.ZV13cPaisesCodBanCentral = 0 ;
   this.OV13cPaisesCodBanCentral = 0 ;
   this.Z159PaisesId = 0 ;
   this.O159PaisesId = 0 ;
   this.Z160PaisesNome = "" ;
   this.O160PaisesNome = "" ;
   this.Z415PaisesCodBanCentral = 0 ;
   this.O415PaisesCodBanCentral = 0 ;
   this.AV17Pagina = 0 ;
   this.ZV17Pagina = 0 ;
   this.OV17Pagina = 0 ;
   this.AV18PaginaAux = 0 ;
   this.ZV18PaginaAux = 0 ;
   this.OV18PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV11cPaisesId = 0 ;
   this.AV12cPaisesNome = "" ;
   this.AV13cPaisesCodBanCentral = 0 ;
   this.AV17Pagina = 0 ;
   this.AV18PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV14PPaisesId = 0 ;
   this.A159PaisesId = 0 ;
   this.A160PaisesNome = "" ;
   this.A415PaisesCodBanCentral = 0 ;
   this.Events = {"e171e2_client": ["ENTER", true] ,"e111e2_client": ["'GXM_FIRST'", true] ,"e121e2_client": ["'GXM_PREVIOUS'", true] ,"e131e2_client": ["'GXM_NEXT'", true] ,"e141e2_client": ["'GXM_LAST'", true] ,"e151e2_client": ["'PROCURAR'", true] ,"e191e2_client": ["'ATUALIZAPAGINA'", true] ,"e211e1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11cPaisesId',fld:'vCPAISESID'},{av:'AV12cPaisesNome',fld:'vCPAISESNOME'},{av:'AV13cPaisesCodBanCentral',fld:'vCPAISESCODBANCENTRAL'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'PAISESID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAISESID","Title")',ctrl:'PAISESID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'PAISESNOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAISESNOME","Title")',ctrl:'PAISESNOME',prop:'Title'},{ctrl:'PAISESCODBANCENTRAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAISESCODBANCENTRAL","Title")',ctrl:'PAISESCODBANCENTRAL',prop:'Title'},{av:'AV18PaginaAux',fld:'vPAGINAAUX'},{av:'AV17Pagina',fld:'vPAGINA'},{av:'AV16NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A159PaisesId',fld:'PAISESID'}],[{av:'AV14PPaisesId',fld:'vPPAISESID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11cPaisesId',fld:'vCPAISESID'},{av:'AV12cPaisesNome',fld:'vCPAISESNOME'},{av:'AV13cPaisesCodBanCentral',fld:'vCPAISESCODBANCENTRAL'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11cPaisesId',fld:'vCPAISESID'},{av:'AV12cPaisesNome',fld:'vCPAISESNOME'},{av:'AV13cPaisesCodBanCentral',fld:'vCPAISESCODBANCENTRAL'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV17Pagina',fld:'vPAGINA'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11cPaisesId',fld:'vCPAISESID'},{av:'AV12cPaisesNome',fld:'vCPAISESNOME'},{av:'AV13cPaisesCodBanCentral',fld:'vCPAISESCODBANCENTRAL'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV17Pagina',fld:'vPAGINA'},{av:'AV18PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11cPaisesId',fld:'vCPAISESID'},{av:'AV12cPaisesNome',fld:'vCPAISESNOME'},{av:'AV13cPaisesCodBanCentral',fld:'vCPAISESCODBANCENTRAL'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV18PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11cPaisesId',fld:'vCPAISESID'},{av:'AV12cPaisesNome',fld:'vCPAISESNOME'},{av:'AV13cPaisesCodBanCentral',fld:'vCPAISESCODBANCENTRAL'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11cPaisesId',fld:'vCPAISESID'},{av:'AV12cPaisesNome',fld:'vCPAISESNOME'},{av:'AV13cPaisesCodBanCentral',fld:'vCPAISESCODBANCENTRAL'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[]];
   this.setVCMap("AV14PPaisesId", "vPPAISESID", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[51]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultapaises());
