/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:50:20.77
*/
gx.evt.autoSkip = false;
gx.define('hconsultarateio', false, function () {
   this.ServerClass =  "hconsultarateio" ;
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
      this.AV13PRateioId=gx.fn.getIntegerValue("vPRATEIOID",'.') ;
   };
   this.e171h2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e111h2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e121h2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e131h2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e141h2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e151h2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e191h2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e211h1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,31,34,36,38,40,42,43,44,45];
   this.GXLastCtrlId =45;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultarateio",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(170,24,"RATEIOID","","","RateioId","int",0,"px",7,7,"right",null,[],170,"RateioId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(177,25,"RATEIODESCRICAO","","","RateioDescricao","svchar",0,"px",35,35,"left",null,[],177,"RateioDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vRATEIOID",gxz:"ZV14RateioId",gxold:"OV14RateioId",gxvar:"AV14RateioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14RateioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14RateioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vRATEIOID",gx.O.AV14RateioId,0)},c2v:function(){gx.O.AV14RateioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vRATEIOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vRATEIODESCRICAO",gxz:"ZV15RateioDescricao",gxold:"OV15RateioDescricao",gxvar:"AV15RateioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15RateioDescricao=Value},v2z:function(Value){gx.O.ZV15RateioDescricao=Value},v2c:function(){gx.fn.setControlValue("vRATEIODESCRICAO",gx.O.AV15RateioDescricao,0)},c2v:function(){gx.O.AV15RateioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vRATEIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"RATEIOID",gxz:"Z170RateioId",gxold:"O170RateioId",gxvar:"A170RateioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A170RateioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z170RateioId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("RATEIOID",row || gx.fn.currentGridRowImpl(23),gx.O.A170RateioId,0)},c2v:function(){gx.O.A170RateioId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("RATEIOID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"RATEIODESCRICAO",gxz:"Z177RateioDescricao",gxold:"O177RateioDescricao",gxvar:"A177RateioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A177RateioDescricao=Value},v2z:function(Value){gx.O.Z177RateioDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("RATEIODESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A177RateioDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A177RateioDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("RATEIODESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLENAV",grid:0};
   GXValidFnc[34]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[42]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV17Pagina",gxold:"OV17Pagina",gxvar:"AV17Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV17Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV17Pagina)},c2v:function(){gx.O.AV17Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV18PaginaAux",gxold:"OV18PaginaAux",gxvar:"AV18PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV18PaginaAux,0)},c2v:function(){gx.O.AV18PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV14RateioId = 0 ;
   this.ZV14RateioId = 0 ;
   this.OV14RateioId = 0 ;
   this.AV15RateioDescricao = "" ;
   this.ZV15RateioDescricao = "" ;
   this.OV15RateioDescricao = "" ;
   this.Z170RateioId = 0 ;
   this.O170RateioId = 0 ;
   this.Z177RateioDescricao = "" ;
   this.O177RateioDescricao = "" ;
   this.AV17Pagina = 0 ;
   this.ZV17Pagina = 0 ;
   this.OV17Pagina = 0 ;
   this.AV18PaginaAux = 0 ;
   this.ZV18PaginaAux = 0 ;
   this.OV18PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV14RateioId = 0 ;
   this.AV15RateioDescricao = "" ;
   this.AV17Pagina = 0 ;
   this.AV18PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV13PRateioId = 0 ;
   this.A169EmpresaRateioEmpresaId = "" ;
   this.A170RateioId = 0 ;
   this.A177RateioDescricao = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e171h2_client": ["ENTER", true] ,"e111h2_client": ["'GXM_FIRST'", true] ,"e121h2_client": ["'GXM_PREVIOUS'", true] ,"e131h2_client": ["'GXM_NEXT'", true] ,"e141h2_client": ["'GXM_LAST'", true] ,"e151h2_client": ["'PROCURAR'", true] ,"e191h2_client": ["'ATUALIZAPAGINA'", true] ,"e211h1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV14RateioId',fld:'vRATEIOID'},{av:'AV15RateioDescricao',fld:'vRATEIODESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'RATEIOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("RATEIOID","Title")',ctrl:'RATEIOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'RATEIODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("RATEIODESCRICAO","Title")',ctrl:'RATEIODESCRICAO',prop:'Title'},{av:'AV18PaginaAux',fld:'vPAGINAAUX'},{av:'AV17Pagina',fld:'vPAGINA'},{av:'AV19NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A170RateioId',fld:'RATEIOID'}],[{av:'AV13PRateioId',fld:'vPRATEIOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV14RateioId',fld:'vRATEIOID'},{av:'AV15RateioDescricao',fld:'vRATEIODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV14RateioId',fld:'vRATEIOID'},{av:'AV15RateioDescricao',fld:'vRATEIODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17Pagina',fld:'vPAGINA'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV14RateioId',fld:'vRATEIOID'},{av:'AV15RateioDescricao',fld:'vRATEIODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17Pagina',fld:'vPAGINA'},{av:'AV18PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV14RateioId',fld:'vRATEIOID'},{av:'AV15RateioDescricao',fld:'vRATEIODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV18PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV14RateioId',fld:'vRATEIOID'},{av:'AV15RateioDescricao',fld:'vRATEIODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV14RateioId',fld:'vRATEIOID'},{av:'AV15RateioDescricao',fld:'vRATEIODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV13PRateioId", "vPRATEIOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultarateio());
