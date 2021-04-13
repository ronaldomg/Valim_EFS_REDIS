/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:50:31.5
*/
gx.evt.autoSkip = false;
gx.define('hconsultatiponatureza', false, function () {
   this.ServerClass =  "hconsultatiponatureza" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV15PTipoNaturezaId=gx.fn.getIntegerValue("vPTIPONATUREZAID",'.') ;
   };
   this.e171k2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e111k2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e121k2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e131k2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e141k2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e151k2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e191k2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e211k1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,31,34,36,38,40,42,43,44,45];
   this.GXLastCtrlId =45;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultatiponatureza",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(395,24,"TIPONATUREZAID","","","TipoNaturezaId","int",0,"px",7,7,"right",null,[],395,"TipoNaturezaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(556,25,"TIPONATUREZADESCRICAO","","","TipoNaturezaDescricao","svchar",0,"px",35,35,"left",null,[],556,"TipoNaturezaDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"CODIGOTIPONATUREZA", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPONATUREZAID",gxz:"ZV13TipoNaturezaId",gxold:"OV13TipoNaturezaId",gxvar:"AV13TipoNaturezaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13TipoNaturezaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13TipoNaturezaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPONATUREZAID",gx.O.AV13TipoNaturezaId,0)},c2v:function(){gx.O.AV13TipoNaturezaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPONATUREZAID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPONATUREZADESCRICAO",gxz:"ZV14TipoNaturezaDescricao",gxold:"OV14TipoNaturezaDescricao",gxvar:"AV14TipoNaturezaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14TipoNaturezaDescricao=Value},v2z:function(Value){gx.O.ZV14TipoNaturezaDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPONATUREZADESCRICAO",gx.O.AV14TipoNaturezaDescricao,0)},c2v:function(){gx.O.AV14TipoNaturezaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPONATUREZADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPONATUREZAID",gxz:"Z395TipoNaturezaId",gxold:"O395TipoNaturezaId",gxvar:"A395TipoNaturezaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A395TipoNaturezaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z395TipoNaturezaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPONATUREZAID",row || gx.fn.currentGridRowImpl(23),gx.O.A395TipoNaturezaId,0)},c2v:function(){gx.O.A395TipoNaturezaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPONATUREZAID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPONATUREZADESCRICAO",gxz:"Z556TipoNaturezaDescricao",gxold:"O556TipoNaturezaDescricao",gxvar:"A556TipoNaturezaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A556TipoNaturezaDescricao=Value},v2z:function(Value){gx.O.Z556TipoNaturezaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPONATUREZADESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A556TipoNaturezaDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A556TipoNaturezaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPONATUREZADESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLENAV",grid:0};
   GXValidFnc[34]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[42]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV17Pagina",gxold:"OV17Pagina",gxvar:"AV17Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV17Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV17Pagina)},c2v:function(){gx.O.AV17Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV18PaginaAux",gxold:"OV18PaginaAux",gxvar:"AV18PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV18PaginaAux,0)},c2v:function(){gx.O.AV18PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV13TipoNaturezaId = 0 ;
   this.ZV13TipoNaturezaId = 0 ;
   this.OV13TipoNaturezaId = 0 ;
   this.AV14TipoNaturezaDescricao = "" ;
   this.ZV14TipoNaturezaDescricao = "" ;
   this.OV14TipoNaturezaDescricao = "" ;
   this.Z395TipoNaturezaId = 0 ;
   this.O395TipoNaturezaId = 0 ;
   this.Z556TipoNaturezaDescricao = "" ;
   this.O556TipoNaturezaDescricao = "" ;
   this.AV17Pagina = 0 ;
   this.ZV17Pagina = 0 ;
   this.OV17Pagina = 0 ;
   this.AV18PaginaAux = 0 ;
   this.ZV18PaginaAux = 0 ;
   this.OV18PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV13TipoNaturezaId = 0 ;
   this.AV14TipoNaturezaDescricao = "" ;
   this.AV17Pagina = 0 ;
   this.AV18PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV15PTipoNaturezaId = 0 ;
   this.A394EmpresaTipoNaturezaEmpresaId = "" ;
   this.A395TipoNaturezaId = 0 ;
   this.A556TipoNaturezaDescricao = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e171k2_client": ["ENTER", true] ,"e111k2_client": ["'GXM_FIRST'", true] ,"e121k2_client": ["'GXM_PREVIOUS'", true] ,"e131k2_client": ["'GXM_NEXT'", true] ,"e141k2_client": ["'GXM_LAST'", true] ,"e151k2_client": ["'PROCURAR'", true] ,"e191k2_client": ["'ATUALIZAPAGINA'", true] ,"e211k1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13TipoNaturezaId',fld:'vTIPONATUREZAID'},{av:'AV14TipoNaturezaDescricao',fld:'vTIPONATUREZADESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'TIPONATUREZAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPONATUREZAID","Title")',ctrl:'TIPONATUREZAID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'TIPONATUREZADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPONATUREZADESCRICAO","Title")',ctrl:'TIPONATUREZADESCRICAO',prop:'Title'},{av:'AV18PaginaAux',fld:'vPAGINAAUX'},{av:'AV17Pagina',fld:'vPAGINA'},{av:'AV19NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A395TipoNaturezaId',fld:'TIPONATUREZAID'}],[{av:'AV15PTipoNaturezaId',fld:'vPTIPONATUREZAID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13TipoNaturezaId',fld:'vTIPONATUREZAID'},{av:'AV14TipoNaturezaDescricao',fld:'vTIPONATUREZADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13TipoNaturezaId',fld:'vTIPONATUREZAID'},{av:'AV14TipoNaturezaDescricao',fld:'vTIPONATUREZADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17Pagina',fld:'vPAGINA'},{av:'AV18PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13TipoNaturezaId',fld:'vTIPONATUREZAID'},{av:'AV14TipoNaturezaDescricao',fld:'vTIPONATUREZADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17Pagina',fld:'vPAGINA'},{av:'AV18PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13TipoNaturezaId',fld:'vTIPONATUREZAID'},{av:'AV14TipoNaturezaDescricao',fld:'vTIPONATUREZADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV18PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13TipoNaturezaId',fld:'vTIPONATUREZAID'},{av:'AV14TipoNaturezaDescricao',fld:'vTIPONATUREZADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13TipoNaturezaId',fld:'vTIPONATUREZAID'},{av:'AV14TipoNaturezaDescricao',fld:'vTIPONATUREZADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV15PTipoNaturezaId", "vPTIPONATUREZAID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultatiponatureza());
