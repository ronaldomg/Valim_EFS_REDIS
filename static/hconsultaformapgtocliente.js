/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:55:7.97
*/
gx.evt.autoSkip = false;
gx.define('hconsultaformapgtocliente', false, function () {
   this.ServerClass =  "hconsultaformapgtocliente" ;
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
      this.AV19FormaPgtoEmpresaId=gx.fn.getControlValue("vFORMAPGTOEMPRESAID") ;
      this.AV16FormaPgtoId_out=gx.fn.getIntegerValue("vFORMAPGTOID_OUT",'.') ;
   };
   this.e17n42_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11n42_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12n42_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13n42_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14n42_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15n42_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19n42_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21n41_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,31,34,36,38,40,42,43,44,45];
   this.GXLastCtrlId =45;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaformapgtocliente",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3376,24,"FORMAPGTOID","","","FormaPgtoId","int",0,"px",3,3,"right",null,[],3376,"FormaPgtoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3489,25,"FORMAPGTODESCRICAO","","","FormaPgtoDescricao","svchar",0,"px",20,20,"left",null,[],3489,"FormaPgtoDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vFORMAPGTOID",gxz:"ZV18FormaPgtoId",gxold:"OV18FormaPgtoId",gxvar:"AV18FormaPgtoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18FormaPgtoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18FormaPgtoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFORMAPGTOID",gx.O.AV18FormaPgtoId,0)},c2v:function(){gx.O.AV18FormaPgtoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFORMAPGTOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vFORMAPGTODESCRICAO",gxz:"ZV17FormaPgtoDescricao",gxold:"OV17FormaPgtoDescricao",gxvar:"AV17FormaPgtoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17FormaPgtoDescricao=Value},v2z:function(Value){gx.O.ZV17FormaPgtoDescricao=Value},v2c:function(){gx.fn.setControlValue("vFORMAPGTODESCRICAO",gx.O.AV17FormaPgtoDescricao,0)},c2v:function(){gx.O.AV17FormaPgtoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vFORMAPGTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"FORMAPGTOID",gxz:"Z3376FormaPgtoId",gxold:"O3376FormaPgtoId",gxvar:"A3376FormaPgtoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3376FormaPgtoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3376FormaPgtoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FORMAPGTOID",row || gx.fn.currentGridRowImpl(23),gx.O.A3376FormaPgtoId,0)},c2v:function(){gx.O.A3376FormaPgtoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FORMAPGTOID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"FORMAPGTODESCRICAO",gxz:"Z3489FormaPgtoDescricao",gxold:"O3489FormaPgtoDescricao",gxvar:"A3489FormaPgtoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3489FormaPgtoDescricao=Value},v2z:function(Value){gx.O.Z3489FormaPgtoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("FORMAPGTODESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A3489FormaPgtoDescricao,0)},c2v:function(){gx.O.A3489FormaPgtoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("FORMAPGTODESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLENAV",grid:0};
   GXValidFnc[34]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[42]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV22Pagina",gxold:"OV22Pagina",gxvar:"AV22Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV22Pagina)},c2v:function(){gx.O.AV22Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV23PaginaAux",gxold:"OV23PaginaAux",gxvar:"AV23PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV23PaginaAux,0)},c2v:function(){gx.O.AV23PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV18FormaPgtoId = 0 ;
   this.ZV18FormaPgtoId = 0 ;
   this.OV18FormaPgtoId = 0 ;
   this.AV17FormaPgtoDescricao = "" ;
   this.ZV17FormaPgtoDescricao = "" ;
   this.OV17FormaPgtoDescricao = "" ;
   this.Z3376FormaPgtoId = 0 ;
   this.O3376FormaPgtoId = 0 ;
   this.Z3489FormaPgtoDescricao = "" ;
   this.O3489FormaPgtoDescricao = "" ;
   this.AV22Pagina = 0 ;
   this.ZV22Pagina = 0 ;
   this.OV22Pagina = 0 ;
   this.AV23PaginaAux = 0 ;
   this.ZV23PaginaAux = 0 ;
   this.OV23PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV18FormaPgtoId = 0 ;
   this.AV17FormaPgtoDescricao = "" ;
   this.AV22Pagina = 0 ;
   this.AV23PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV16FormaPgtoId_out = 0 ;
   this.A3375FormaPgtoEmpresaId = "" ;
   this.A3376FormaPgtoId = 0 ;
   this.A3489FormaPgtoDescricao = "" ;
   this.AV19FormaPgtoEmpresaId = "" ;
   this.Events = {"e17n42_client": ["ENTER", true] ,"e11n42_client": ["'GXM_FIRST'", true] ,"e12n42_client": ["'GXM_PREVIOUS'", true] ,"e13n42_client": ["'GXM_NEXT'", true] ,"e14n42_client": ["'GXM_LAST'", true] ,"e15n42_client": ["'PROCURAR'", true] ,"e19n42_client": ["'ATUALIZAPAGINA'", true] ,"e21n41_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV17FormaPgtoDescricao',fld:'vFORMAPGTODESCRICAO'},{av:'AV19FormaPgtoEmpresaId',fld:'vFORMAPGTOEMPRESAID'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'FORMAPGTOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("FORMAPGTOID","Title")',ctrl:'FORMAPGTOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'FORMAPGTODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("FORMAPGTODESCRICAO","Title")',ctrl:'FORMAPGTODESCRICAO',prop:'Title'},{av:'AV23PaginaAux',fld:'vPAGINAAUX'},{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV21NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A3376FormaPgtoId',fld:'FORMAPGTOID'}],[{av:'AV16FormaPgtoId_out',fld:'vFORMAPGTOID_OUT'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV17FormaPgtoDescricao',fld:'vFORMAPGTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19FormaPgtoEmpresaId',fld:'vFORMAPGTOEMPRESAID'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV17FormaPgtoDescricao',fld:'vFORMAPGTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19FormaPgtoEmpresaId',fld:'vFORMAPGTOEMPRESAID'},{av:'AV22Pagina',fld:'vPAGINA'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV17FormaPgtoDescricao',fld:'vFORMAPGTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19FormaPgtoEmpresaId',fld:'vFORMAPGTOEMPRESAID'},{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV23PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV17FormaPgtoDescricao',fld:'vFORMAPGTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19FormaPgtoEmpresaId',fld:'vFORMAPGTOEMPRESAID'},{av:'AV23PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV17FormaPgtoDescricao',fld:'vFORMAPGTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19FormaPgtoEmpresaId',fld:'vFORMAPGTOEMPRESAID'},{av:'A3376FormaPgtoId',fld:'FORMAPGTOID'},{av:'A3489FormaPgtoDescricao',fld:'FORMAPGTODESCRICAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV17FormaPgtoDescricao',fld:'vFORMAPGTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19FormaPgtoEmpresaId',fld:'vFORMAPGTOEMPRESAID'}],[]];
   this.setVCMap("AV19FormaPgtoEmpresaId", "vFORMAPGTOEMPRESAID", 0, "char");
   this.setVCMap("AV16FormaPgtoId_out", "vFORMAPGTOID_OUT", 0, "int");
   this.setVCMap("AV19FormaPgtoEmpresaId", "vFORMAPGTOEMPRESAID", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   GridContainer.addRefreshingVar({rfrVar:"AV19FormaPgtoEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaformapgtocliente());
