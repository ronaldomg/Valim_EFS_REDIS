/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:36:48.85
*/
gx.evt.autoSkip = false;
gx.define('hconsultargrupooco', false, function () {
   this.ServerClass =  "hconsultargrupooco" ;
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
      this.AV5pGrupoOcoId=gx.fn.getIntegerValue("vPGRUPOOCOID",'.') ;
   };
   this.e172492_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e112492_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e122492_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e132492_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e142492_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e152492_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e202491_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,31,34,36,38,40,42,43,44,45];
   this.GXLastCtrlId =45;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultargrupooco",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(10008,24,"GRUPOOCOID","","","GrupoOcoId","int",0,"px",2,2,"right",null,[],10008,"GrupoOcoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(10094,25,"GRUPOOCODESCRICAO","","","GrupoOcoDescricao","svchar",0,"px",30,30,"left",null,[],10094,"GrupoOcoDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"ZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGRUPOOCOID",gxz:"ZV8GrupoOcoId",gxold:"OV8GrupoOcoId",gxvar:"AV8GrupoOcoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8GrupoOcoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8GrupoOcoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOOCOID",gx.O.AV8GrupoOcoId,0)},c2v:function(){gx.O.AV8GrupoOcoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOOCOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGRUPOOCODESCRICAO",gxz:"ZV7GrupoOcoDescricao",gxold:"OV7GrupoOcoDescricao",gxvar:"AV7GrupoOcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7GrupoOcoDescricao=Value},v2z:function(Value){gx.O.ZV7GrupoOcoDescricao=Value},v2c:function(){gx.fn.setControlValue("vGRUPOOCODESCRICAO",gx.O.AV7GrupoOcoDescricao,0)},c2v:function(){gx.O.AV7GrupoOcoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vGRUPOOCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"ZZ",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOOCOID",gxz:"Z10008GrupoOcoId",gxold:"O10008GrupoOcoId",gxvar:"A10008GrupoOcoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10008GrupoOcoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10008GrupoOcoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("GRUPOOCOID",row || gx.fn.currentGridRowImpl(23),gx.O.A10008GrupoOcoId,0)},c2v:function(){gx.O.A10008GrupoOcoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("GRUPOOCOID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOOCODESCRICAO",gxz:"Z10094GrupoOcoDescricao",gxold:"O10094GrupoOcoDescricao",gxvar:"A10094GrupoOcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10094GrupoOcoDescricao=Value},v2z:function(Value){gx.O.Z10094GrupoOcoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPOOCODESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A10094GrupoOcoDescricao,0)},c2v:function(){gx.O.A10094GrupoOcoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPOOCODESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLENAV",grid:0};
   GXValidFnc[34]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[42]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV15Pagina",gxold:"OV15Pagina",gxvar:"AV15Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV15Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV15Pagina)},c2v:function(){gx.O.AV15Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV16PaginaAux",gxold:"OV16PaginaAux",gxvar:"AV16PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV16PaginaAux,0)},c2v:function(){gx.O.AV16PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV14Orderedby",gxold:"OV14Orderedby",gxvar:"AV14Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV14Orderedby,0)},c2v:function(){gx.O.AV14Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV8GrupoOcoId = 0 ;
   this.ZV8GrupoOcoId = 0 ;
   this.OV8GrupoOcoId = 0 ;
   this.AV7GrupoOcoDescricao = "" ;
   this.ZV7GrupoOcoDescricao = "" ;
   this.OV7GrupoOcoDescricao = "" ;
   this.Z10008GrupoOcoId = 0 ;
   this.O10008GrupoOcoId = 0 ;
   this.Z10094GrupoOcoDescricao = "" ;
   this.O10094GrupoOcoDescricao = "" ;
   this.AV15Pagina = 0 ;
   this.ZV15Pagina = 0 ;
   this.OV15Pagina = 0 ;
   this.AV16PaginaAux = 0 ;
   this.ZV16PaginaAux = 0 ;
   this.OV16PaginaAux = 0 ;
   this.AV14Orderedby = 0 ;
   this.ZV14Orderedby = 0 ;
   this.OV14Orderedby = 0 ;
   this.AV8GrupoOcoId = 0 ;
   this.AV7GrupoOcoDescricao = "" ;
   this.AV15Pagina = 0 ;
   this.AV16PaginaAux = 0 ;
   this.AV14Orderedby = 0 ;
   this.AV5pGrupoOcoId = 0 ;
   this.A10008GrupoOcoId = 0 ;
   this.A10094GrupoOcoDescricao = "" ;
   this.Events = {"e172492_client": ["ENTER", true] ,"e112492_client": ["'GXM_FIRST'", true] ,"e122492_client": ["'GXM_PREVIOUS'", true] ,"e132492_client": ["'GXM_NEXT'", true] ,"e142492_client": ["'GXM_LAST'", true] ,"e152492_client": ["'PROCURAR'", true] ,"e202491_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV8GrupoOcoId',fld:'vGRUPOOCOID'},{av:'AV7GrupoOcoDescricao',fld:'vGRUPOOCODESCRICAO'},{av:'AV14Orderedby',fld:'vORDEREDBY'}],[{ctrl:'GRUPOOCOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GRUPOOCOID","Title")',ctrl:'GRUPOOCOID',prop:'Title'},{av:'AV9Imagem',fld:'vIMAGEM'},{ctrl:'GRUPOOCODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GRUPOOCODESCRICAO","Title")',ctrl:'GRUPOOCODESCRICAO',prop:'Title'},{av:'AV16PaginaAux',fld:'vPAGINAAUX'},{av:'AV15Pagina',fld:'vPAGINA'},{av:'AV13NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A10008GrupoOcoId',fld:'GRUPOOCOID'}],[{av:'AV5pGrupoOcoId',fld:'vPGRUPOOCOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV8GrupoOcoId',fld:'vGRUPOOCOID'},{av:'AV7GrupoOcoDescricao',fld:'vGRUPOOCODESCRICAO'},{av:'AV14Orderedby',fld:'vORDEREDBY'}],[{av:'AV15Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV8GrupoOcoId',fld:'vGRUPOOCOID'},{av:'AV7GrupoOcoDescricao',fld:'vGRUPOOCODESCRICAO'},{av:'AV14Orderedby',fld:'vORDEREDBY'},{av:'AV15Pagina',fld:'vPAGINA'}],[{av:'AV15Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV8GrupoOcoId',fld:'vGRUPOOCOID'},{av:'AV7GrupoOcoDescricao',fld:'vGRUPOOCODESCRICAO'},{av:'AV14Orderedby',fld:'vORDEREDBY'},{av:'AV15Pagina',fld:'vPAGINA'},{av:'AV16PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV15Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV8GrupoOcoId',fld:'vGRUPOOCOID'},{av:'AV7GrupoOcoDescricao',fld:'vGRUPOOCODESCRICAO'},{av:'AV14Orderedby',fld:'vORDEREDBY'},{av:'AV16PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV15Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV8GrupoOcoId',fld:'vGRUPOOCOID'},{av:'AV7GrupoOcoDescricao',fld:'vGRUPOOCODESCRICAO'},{av:'AV14Orderedby',fld:'vORDEREDBY'}],[{av:'AV14Orderedby',fld:'vORDEREDBY'},{av:'AV15Pagina',fld:'vPAGINA'}]];
   this.setVCMap("AV5pGrupoOcoId", "vPGRUPOOCOID", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultargrupooco());
