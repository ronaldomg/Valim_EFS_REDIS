/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:37:0.37
*/
gx.evt.autoSkip = false;
gx.define('hconsultagruporamo', false, function () {
   this.ServerClass =  "hconsultagruporamo" ;
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
      this.AV16PGrupoRamoCodigo=gx.fn.getControlValue("vPGRUPORAMOCODIGO") ;
   };
   this.e1724e2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1124e2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e1224e2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e1324e2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e1424e2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e1524e2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e2024e1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,19,20,26,29,31,33,35,37,38,39,40];
   this.GXLastCtrlId =40;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",18,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultagruporamo",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(10016,19,"GRUPORAMOCODIGO","","","GrupoRamoCodigo","svchar",0,"px",2,2,"left",null,[],10016,"GrupoRamoCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(10098,20,"GRUPORAMODESCRICAO","","","GrupoRamoDescricao","svchar",0,"px",50,50,"left",null,[],10098,"GrupoRamoDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGRUPORAMODESCRICAO",gxz:"ZV7GrupoRamoDescricao",gxold:"OV7GrupoRamoDescricao",gxvar:"AV7GrupoRamoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7GrupoRamoDescricao=Value},v2z:function(Value){gx.O.ZV7GrupoRamoDescricao=Value},v2c:function(){gx.fn.setControlValue("vGRUPORAMODESCRICAO",gx.O.AV7GrupoRamoDescricao,0)},c2v:function(){gx.O.AV7GrupoRamoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vGRUPORAMODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[19]={lvl:2,type:"svchar",len:2,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRUPORAMOCODIGO",gxz:"Z10016GrupoRamoCodigo",gxold:"O10016GrupoRamoCodigo",gxvar:"A10016GrupoRamoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10016GrupoRamoCodigo=Value},v2z:function(Value){gx.O.Z10016GrupoRamoCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPORAMOCODIGO",row || gx.fn.currentGridRowImpl(18),gx.O.A10016GrupoRamoCodigo,0)},c2v:function(){gx.O.A10016GrupoRamoCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPORAMOCODIGO",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[20]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRUPORAMODESCRICAO",gxz:"Z10098GrupoRamoDescricao",gxold:"O10098GrupoRamoDescricao",gxvar:"A10098GrupoRamoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10098GrupoRamoDescricao=Value},v2z:function(Value){gx.O.Z10098GrupoRamoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPORAMODESCRICAO",row || gx.fn.currentGridRowImpl(18),gx.O.A10098GrupoRamoDescricao,0)},c2v:function(){gx.O.A10098GrupoRamoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPORAMODESCRICAO",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TABLENAV",grid:0};
   GXValidFnc[29]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[37]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV14Pagina",gxold:"OV14Pagina",gxvar:"AV14Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV14Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV14Pagina)},c2v:function(){gx.O.AV14Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV15PaginaAux",gxold:"OV15PaginaAux",gxvar:"AV15PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV15PaginaAux,0)},c2v:function(){gx.O.AV15PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV13Orderedby",gxold:"OV13Orderedby",gxvar:"AV13Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV13Orderedby,0)},c2v:function(){gx.O.AV13Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV7GrupoRamoDescricao = "" ;
   this.ZV7GrupoRamoDescricao = "" ;
   this.OV7GrupoRamoDescricao = "" ;
   this.Z10016GrupoRamoCodigo = "" ;
   this.O10016GrupoRamoCodigo = "" ;
   this.Z10098GrupoRamoDescricao = "" ;
   this.O10098GrupoRamoDescricao = "" ;
   this.AV14Pagina = 0 ;
   this.ZV14Pagina = 0 ;
   this.OV14Pagina = 0 ;
   this.AV15PaginaAux = 0 ;
   this.ZV15PaginaAux = 0 ;
   this.OV15PaginaAux = 0 ;
   this.AV13Orderedby = 0 ;
   this.ZV13Orderedby = 0 ;
   this.OV13Orderedby = 0 ;
   this.AV7GrupoRamoDescricao = "" ;
   this.AV14Pagina = 0 ;
   this.AV15PaginaAux = 0 ;
   this.AV13Orderedby = 0 ;
   this.AV16PGrupoRamoCodigo = "" ;
   this.A10015GrupoRamoEmpId = "" ;
   this.A10016GrupoRamoCodigo = "" ;
   this.A10098GrupoRamoDescricao = "" ;
   this.AV6EmpresaPadrao = "" ;
   this.Events = {"e1724e2_client": ["ENTER", true] ,"e1124e2_client": ["'GXM_FIRST'", true] ,"e1224e2_client": ["'GXM_PREVIOUS'", true] ,"e1324e2_client": ["'GXM_NEXT'", true] ,"e1424e2_client": ["'GXM_LAST'", true] ,"e1524e2_client": ["'PROCURAR'", true] ,"e2024e1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7GrupoRamoDescricao',fld:'vGRUPORAMODESCRICAO'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV13Orderedby',fld:'vORDEREDBY'}],[{ctrl:'GRUPORAMOCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GRUPORAMOCODIGO","Title")',ctrl:'GRUPORAMOCODIGO',prop:'Title'},{av:'AV8Imagem',fld:'vIMAGEM'},{ctrl:'GRUPORAMODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GRUPORAMODESCRICAO","Title")',ctrl:'GRUPORAMODESCRICAO',prop:'Title'},{av:'AV15PaginaAux',fld:'vPAGINAAUX'},{av:'AV14Pagina',fld:'vPAGINA'},{av:'AV12NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A10016GrupoRamoCodigo',fld:'GRUPORAMOCODIGO'}],[{av:'AV16PGrupoRamoCodigo',fld:'vPGRUPORAMOCODIGO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7GrupoRamoDescricao',fld:'vGRUPORAMODESCRICAO'},{av:'AV13Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV14Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7GrupoRamoDescricao',fld:'vGRUPORAMODESCRICAO'},{av:'AV13Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV14Pagina',fld:'vPAGINA'}],[{av:'AV14Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7GrupoRamoDescricao',fld:'vGRUPORAMODESCRICAO'},{av:'AV13Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV14Pagina',fld:'vPAGINA'},{av:'AV15PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV14Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7GrupoRamoDescricao',fld:'vGRUPORAMODESCRICAO'},{av:'AV13Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV15PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV14Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7GrupoRamoDescricao',fld:'vGRUPORAMODESCRICAO'},{av:'AV13Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV13Orderedby',fld:'vORDEREDBY'},{av:'AV14Pagina',fld:'vPAGINA'}]];
   this.setVCMap("AV6EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV16PGrupoRamoCodigo", "vPGRUPORAMOCODIGO", 0, "svchar");
   this.setVCMap("AV6EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[40]);
   GridContainer.addRefreshingVar({rfrVar:"AV6EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultagruporamo());
