/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:49:11.61
*/
gx.evt.autoSkip = false;
gx.define('hconsultatipopermissao', false, function () {
   this.ServerClass =  "hconsultatipopermissao" ;
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
      this.AV16TipoPermissaoIdSaida=gx.fn.getIntegerValue("vTIPOPERMISSAOIDSAIDA",'.') ;
   };
   this.e17l22_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11l22_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12l22_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13l22_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14l22_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15l22_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19l22_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21l21_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,32,35,37,39,41,43,44,45,46];
   this.GXLastCtrlId =46;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultatipopermissao",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(568,24,"TIPOPERMISSAOID","","","TipoPermissaoId","int",0,"px",4,4,"right",null,[],568,"TipoPermissaoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(557,25,"TIPOPERMISSAODESCRICAO","","","TipoPermissaoDescricao","svchar",0,"px",80,80,"left",null,[],557,"TipoPermissaoDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(559,26,"TIPOPERMISSAOPRIVILEGIO","","TipoPermissaoPrivilegio","char",null,0,true,false,0,"px","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOPERMISSAOIDFILTRO",gxz:"ZV18TipoPermissaoIdFiltro",gxold:"OV18TipoPermissaoIdFiltro",gxvar:"AV18TipoPermissaoIdFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18TipoPermissaoIdFiltro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18TipoPermissaoIdFiltro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOPERMISSAOIDFILTRO",gx.O.AV18TipoPermissaoIdFiltro,0)},c2v:function(){gx.O.AV18TipoPermissaoIdFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOPERMISSAOIDFILTRO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:80,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOPERMISSAODESCRICAOFILTRO",gxz:"ZV17TipoPermissaoDescricaoFiltro",gxold:"OV17TipoPermissaoDescricaoFiltro",gxvar:"AV17TipoPermissaoDescricaoFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17TipoPermissaoDescricaoFiltro=Value},v2z:function(Value){gx.O.ZV17TipoPermissaoDescricaoFiltro=Value},v2c:function(){gx.fn.setControlValue("vTIPOPERMISSAODESCRICAOFILTRO",gx.O.AV17TipoPermissaoDescricaoFiltro,0)},c2v:function(){gx.O.AV17TipoPermissaoDescricaoFiltro=this.val()},val:function(){return gx.fn.getControlValue("vTIPOPERMISSAODESCRICAOFILTRO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOPERMISSAOID",gxz:"Z568TipoPermissaoId",gxold:"O568TipoPermissaoId",gxvar:"A568TipoPermissaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A568TipoPermissaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z568TipoPermissaoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOPERMISSAOID",row || gx.fn.currentGridRowImpl(23),gx.O.A568TipoPermissaoId,0)},c2v:function(){gx.O.A568TipoPermissaoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOPERMISSAOID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:80,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOPERMISSAODESCRICAO",gxz:"Z557TipoPermissaoDescricao",gxold:"O557TipoPermissaoDescricao",gxvar:"A557TipoPermissaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A557TipoPermissaoDescricao=Value},v2z:function(Value){gx.O.Z557TipoPermissaoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOPERMISSAODESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A557TipoPermissaoDescricao,0)},c2v:function(){gx.O.A557TipoPermissaoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOPERMISSAODESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOPERMISSAOPRIVILEGIO",gxz:"Z559TipoPermissaoPrivilegio",gxold:"O559TipoPermissaoPrivilegio",gxvar:"A559TipoPermissaoPrivilegio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A559TipoPermissaoPrivilegio=Value},v2z:function(Value){gx.O.Z559TipoPermissaoPrivilegio=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TIPOPERMISSAOPRIVILEGIO",row || gx.fn.currentGridRowImpl(23),gx.O.A559TipoPermissaoPrivilegio);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A559TipoPermissaoPrivilegio=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOPERMISSAOPRIVILEGIO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TABLENAV",grid:0};
   GXValidFnc[35]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[37]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[39]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[41]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[43]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV20Pagina",gxold:"OV20Pagina",gxvar:"AV20Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV20Pagina)},c2v:function(){gx.O.AV20Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV21PaginaAux",gxold:"OV21PaginaAux",gxvar:"AV21PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV21PaginaAux,0)},c2v:function(){gx.O.AV21PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV18TipoPermissaoIdFiltro = 0 ;
   this.ZV18TipoPermissaoIdFiltro = 0 ;
   this.OV18TipoPermissaoIdFiltro = 0 ;
   this.AV17TipoPermissaoDescricaoFiltro = "" ;
   this.ZV17TipoPermissaoDescricaoFiltro = "" ;
   this.OV17TipoPermissaoDescricaoFiltro = "" ;
   this.Z568TipoPermissaoId = 0 ;
   this.O568TipoPermissaoId = 0 ;
   this.Z557TipoPermissaoDescricao = "" ;
   this.O557TipoPermissaoDescricao = "" ;
   this.Z559TipoPermissaoPrivilegio = "" ;
   this.O559TipoPermissaoPrivilegio = "" ;
   this.AV20Pagina = 0 ;
   this.ZV20Pagina = 0 ;
   this.OV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.ZV21PaginaAux = 0 ;
   this.OV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV18TipoPermissaoIdFiltro = 0 ;
   this.AV17TipoPermissaoDescricaoFiltro = "" ;
   this.AV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV16TipoPermissaoIdSaida = 0 ;
   this.A568TipoPermissaoId = 0 ;
   this.A557TipoPermissaoDescricao = "" ;
   this.A559TipoPermissaoPrivilegio = "" ;
   this.Events = {"e17l22_client": ["ENTER", true] ,"e11l22_client": ["'GXM_FIRST'", true] ,"e12l22_client": ["'GXM_PREVIOUS'", true] ,"e13l22_client": ["'GXM_NEXT'", true] ,"e14l22_client": ["'GXM_LAST'", true] ,"e15l22_client": ["'PROCURAR'", true] ,"e19l22_client": ["'ATUALIZAPAGINA'", true] ,"e21l21_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18TipoPermissaoIdFiltro',fld:'vTIPOPERMISSAOIDFILTRO'},{av:'AV17TipoPermissaoDescricaoFiltro',fld:'vTIPOPERMISSAODESCRICAOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'TIPOPERMISSAOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOPERMISSAOID","Title")',ctrl:'TIPOPERMISSAOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'TIPOPERMISSAODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOPERMISSAODESCRICAO","Title")',ctrl:'TIPOPERMISSAODESCRICAO',prop:'Title'},{ctrl:'TIPOPERMISSAOPRIVILEGIO'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV19NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'}],[{av:'AV16TipoPermissaoIdSaida',fld:'vTIPOPERMISSAOIDSAIDA'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18TipoPermissaoIdFiltro',fld:'vTIPOPERMISSAOIDFILTRO'},{av:'AV17TipoPermissaoDescricaoFiltro',fld:'vTIPOPERMISSAODESCRICAOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18TipoPermissaoIdFiltro',fld:'vTIPOPERMISSAOIDFILTRO'},{av:'AV17TipoPermissaoDescricaoFiltro',fld:'vTIPOPERMISSAODESCRICAOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20Pagina',fld:'vPAGINA'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18TipoPermissaoIdFiltro',fld:'vTIPOPERMISSAOIDFILTRO'},{av:'AV17TipoPermissaoDescricaoFiltro',fld:'vTIPOPERMISSAODESCRICAOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18TipoPermissaoIdFiltro',fld:'vTIPOPERMISSAOIDFILTRO'},{av:'AV17TipoPermissaoDescricaoFiltro',fld:'vTIPOPERMISSAODESCRICAOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18TipoPermissaoIdFiltro',fld:'vTIPOPERMISSAOIDFILTRO'},{av:'AV17TipoPermissaoDescricaoFiltro',fld:'vTIPOPERMISSAODESCRICAOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18TipoPermissaoIdFiltro',fld:'vTIPOPERMISSAOIDFILTRO'},{av:'AV17TipoPermissaoDescricaoFiltro',fld:'vTIPOPERMISSAODESCRICAOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[]];
   this.setVCMap("AV16TipoPermissaoIdSaida", "vTIPOPERMISSAOIDSAIDA", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[46]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultatipopermissao());
