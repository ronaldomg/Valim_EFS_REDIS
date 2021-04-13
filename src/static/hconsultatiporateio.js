/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:58:26.3
*/
gx.evt.autoSkip = false;
gx.define('hconsultatiporateio', false, function () {
   this.ServerClass =  "hconsultatiporateio" ;
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
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV16PTipoRateioId=gx.fn.getIntegerValue("vPTIPORATEIOID",'.') ;
   };
   this.e17862_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11862_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12862_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13862_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14862_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15862_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19862_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21861_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,19,20,26,29,31,33,35,37,38,39,40];
   this.GXLastCtrlId =40;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",18,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultatiporateio",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(978,19,"TIPORATEIOID","","","TipoRateioId","int",0,"px",3,3,"right",null,[],978,"TipoRateioId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(980,20,"TIPORATEIODESCRICAO","","","TipoRateioDescricao","svchar",0,"px",25,25,"left",null,[],980,"TipoRateioDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPORATEIODESCRICAO",gxz:"ZV15TipoRateioDescricao",gxold:"OV15TipoRateioDescricao",gxvar:"AV15TipoRateioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15TipoRateioDescricao=Value},v2z:function(Value){gx.O.ZV15TipoRateioDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPORATEIODESCRICAO",gx.O.AV15TipoRateioDescricao,0)},c2v:function(){gx.O.AV15TipoRateioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPORATEIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[19]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPORATEIOID",gxz:"Z978TipoRateioId",gxold:"O978TipoRateioId",gxvar:"A978TipoRateioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A978TipoRateioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z978TipoRateioId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPORATEIOID",row || gx.fn.currentGridRowImpl(18),gx.O.A978TipoRateioId,0)},c2v:function(){gx.O.A978TipoRateioId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPORATEIOID",row || gx.fn.currentGridRowImpl(18),'.')},nac:gx.falseFn};
   GXValidFnc[20]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPORATEIODESCRICAO",gxz:"Z980TipoRateioDescricao",gxold:"O980TipoRateioDescricao",gxvar:"A980TipoRateioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A980TipoRateioDescricao=Value},v2z:function(Value){gx.O.Z980TipoRateioDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPORATEIODESCRICAO",row || gx.fn.currentGridRowImpl(18),gx.O.A980TipoRateioDescricao,0)},c2v:function(){gx.O.A980TipoRateioDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPORATEIODESCRICAO",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TABLENAV",grid:0};
   GXValidFnc[29]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[37]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV18Pagina",gxold:"OV18Pagina",gxvar:"AV18Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV18Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV18Pagina)},c2v:function(){gx.O.AV18Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV19PaginaAux",gxold:"OV19PaginaAux",gxvar:"AV19PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV19PaginaAux,0)},c2v:function(){gx.O.AV19PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV15TipoRateioDescricao = "" ;
   this.ZV15TipoRateioDescricao = "" ;
   this.OV15TipoRateioDescricao = "" ;
   this.Z978TipoRateioId = 0 ;
   this.O978TipoRateioId = 0 ;
   this.Z980TipoRateioDescricao = "" ;
   this.O980TipoRateioDescricao = "" ;
   this.AV18Pagina = 0 ;
   this.ZV18Pagina = 0 ;
   this.OV18Pagina = 0 ;
   this.AV19PaginaAux = 0 ;
   this.ZV19PaginaAux = 0 ;
   this.OV19PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV15TipoRateioDescricao = "" ;
   this.AV18Pagina = 0 ;
   this.AV19PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV16PTipoRateioId = 0 ;
   this.A977TipoRateioEmpresaId = "" ;
   this.A978TipoRateioId = 0 ;
   this.A980TipoRateioDescricao = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17862_client": ["ENTER", true] ,"e11862_client": ["'GXM_FIRST'", true] ,"e12862_client": ["'GXM_PREVIOUS'", true] ,"e13862_client": ["'GXM_NEXT'", true] ,"e14862_client": ["'GXM_LAST'", true] ,"e15862_client": ["'PROCURAR'", true] ,"e19862_client": ["'ATUALIZAPAGINA'", true] ,"e21861_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TipoRateioDescricao',fld:'vTIPORATEIODESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'TIPORATEIOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPORATEIOID","Title")',ctrl:'TIPORATEIOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'TIPORATEIODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPORATEIODESCRICAO","Title")',ctrl:'TIPORATEIODESCRICAO',prop:'Title'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'},{av:'AV18Pagina',fld:'vPAGINA'},{av:'AV17NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A978TipoRateioId',fld:'TIPORATEIOID'}],[{av:'AV16PTipoRateioId',fld:'vPTIPORATEIOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TipoRateioDescricao',fld:'vTIPORATEIODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TipoRateioDescricao',fld:'vTIPORATEIODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV18Pagina',fld:'vPAGINA'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TipoRateioDescricao',fld:'vTIPORATEIODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV18Pagina',fld:'vPAGINA'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TipoRateioDescricao',fld:'vTIPORATEIODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TipoRateioDescricao',fld:'vTIPORATEIODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TipoRateioDescricao',fld:'vTIPORATEIODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV16PTipoRateioId", "vPTIPORATEIOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[10]);
   GridContainer.addRefreshingVar(this.GXValidFnc[40]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultatiporateio());
