/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:15:35.13
*/
gx.evt.autoSkip = false;
gx.define('hconsultatipobomba', false, function () {
   this.ServerClass =  "hconsultatipobomba" ;
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
      this.AV6EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV16PTipoBombaCodigo=gx.fn.getIntegerValue("vPTIPOBOMBACODIGO",'.') ;
   };
   this.e172f72_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e112f72_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e122f72_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e132f72_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e142f72_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e152f72_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e192f72_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e212f71_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,19,20,26,29,31,33,35,37,38,39,40];
   this.GXLastCtrlId =40;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",18,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultatipobomba",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(11546,19,"TIPOBOMBACODIGO","","","TipoBombaCodigo","int",0,"px",5,5,"right",null,[],11546,"TipoBombaCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(11556,20,"TIPOBOMBADESCRICAO","","","TipoBombaDescricao","svchar",0,"px",30,30,"left",null,[],11556,"TipoBombaDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOBOMBADESCRICAO",gxz:"ZV19TipoBombaDescricao",gxold:"OV19TipoBombaDescricao",gxvar:"AV19TipoBombaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19TipoBombaDescricao=Value},v2z:function(Value){gx.O.ZV19TipoBombaDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOBOMBADESCRICAO",gx.O.AV19TipoBombaDescricao,0)},c2v:function(){gx.O.AV19TipoBombaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOBOMBADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[19]={lvl:2,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBOMBACODIGO",gxz:"Z11546TipoBombaCodigo",gxold:"O11546TipoBombaCodigo",gxvar:"A11546TipoBombaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11546TipoBombaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11546TipoBombaCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOBOMBACODIGO",row || gx.fn.currentGridRowImpl(18),gx.O.A11546TipoBombaCodigo,0)},c2v:function(){gx.O.A11546TipoBombaCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOBOMBACODIGO",row || gx.fn.currentGridRowImpl(18),'.')},nac:gx.falseFn};
   GXValidFnc[20]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBOMBADESCRICAO",gxz:"Z11556TipoBombaDescricao",gxold:"O11556TipoBombaDescricao",gxvar:"A11556TipoBombaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11556TipoBombaDescricao=Value},v2z:function(Value){gx.O.Z11556TipoBombaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOBOMBADESCRICAO",row || gx.fn.currentGridRowImpl(18),gx.O.A11556TipoBombaDescricao,0)},c2v:function(){gx.O.A11556TipoBombaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOBOMBADESCRICAO",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TABLENAV",grid:0};
   GXValidFnc[29]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[37]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV13Pagina",gxold:"OV13Pagina",gxvar:"AV13Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV13Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV13Pagina)},c2v:function(){gx.O.AV13Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV14PaginaAux",gxold:"OV14PaginaAux",gxvar:"AV14PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV14PaginaAux,0)},c2v:function(){gx.O.AV14PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV12Orderedby",gxold:"OV12Orderedby",gxvar:"AV12Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV12Orderedby,0)},c2v:function(){gx.O.AV12Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV19TipoBombaDescricao = "" ;
   this.ZV19TipoBombaDescricao = "" ;
   this.OV19TipoBombaDescricao = "" ;
   this.Z11546TipoBombaCodigo = 0 ;
   this.O11546TipoBombaCodigo = 0 ;
   this.Z11556TipoBombaDescricao = "" ;
   this.O11556TipoBombaDescricao = "" ;
   this.AV13Pagina = 0 ;
   this.ZV13Pagina = 0 ;
   this.OV13Pagina = 0 ;
   this.AV14PaginaAux = 0 ;
   this.ZV14PaginaAux = 0 ;
   this.OV14PaginaAux = 0 ;
   this.AV12Orderedby = 0 ;
   this.ZV12Orderedby = 0 ;
   this.OV12Orderedby = 0 ;
   this.AV19TipoBombaDescricao = "" ;
   this.AV13Pagina = 0 ;
   this.AV14PaginaAux = 0 ;
   this.AV12Orderedby = 0 ;
   this.AV16PTipoBombaCodigo = 0 ;
   this.A11545TipoBombaEmpresaId = "" ;
   this.A11546TipoBombaCodigo = 0 ;
   this.A11556TipoBombaDescricao = "" ;
   this.AV6EmpresaPadrao = "" ;
   this.Events = {"e172f72_client": ["ENTER", true] ,"e112f72_client": ["'GXM_FIRST'", true] ,"e122f72_client": ["'GXM_PREVIOUS'", true] ,"e132f72_client": ["'GXM_NEXT'", true] ,"e142f72_client": ["'GXM_LAST'", true] ,"e152f72_client": ["'PROCURAR'", true] ,"e192f72_client": ["'ATUALIZAPAGINA'", true] ,"e212f71_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19TipoBombaDescricao',fld:'vTIPOBOMBADESCRICAO'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV12Orderedby',fld:'vORDEREDBY'}],[{ctrl:'TIPOBOMBACODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOBOMBACODIGO","Title")',ctrl:'TIPOBOMBACODIGO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'TIPOBOMBADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOBOMBADESCRICAO","Title")',ctrl:'TIPOBOMBADESCRICAO',prop:'Title'},{av:'AV14PaginaAux',fld:'vPAGINAAUX'},{av:'AV13Pagina',fld:'vPAGINA'},{av:'AV11NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A11546TipoBombaCodigo',fld:'TIPOBOMBACODIGO'}],[{av:'AV16PTipoBombaCodigo',fld:'vPTIPOBOMBACODIGO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19TipoBombaDescricao',fld:'vTIPOBOMBADESCRICAO'},{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19TipoBombaDescricao',fld:'vTIPOBOMBADESCRICAO'},{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV13Pagina',fld:'vPAGINA'}],[{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19TipoBombaDescricao',fld:'vTIPOBOMBADESCRICAO'},{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV13Pagina',fld:'vPAGINA'},{av:'AV14PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19TipoBombaDescricao',fld:'vTIPOBOMBADESCRICAO'},{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV14PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19TipoBombaDescricao',fld:'vTIPOBOMBADESCRICAO'},{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19TipoBombaDescricao',fld:'vTIPOBOMBADESCRICAO'},{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV6EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV16PTipoBombaCodigo", "vPTIPOBOMBACODIGO", 0, "int");
   this.setVCMap("AV6EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[40]);
   GridContainer.addRefreshingVar({rfrVar:"AV6EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultatipobomba());
