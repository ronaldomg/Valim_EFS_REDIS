/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:55:1.65
*/
gx.evt.autoSkip = false;
gx.define('hconsultaesquema', false, function () {
   this.ServerClass =  "hconsultaesquema" ;
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
      this.AV16cEsquemaCodigo=gx.fn.getIntegerValue("vCESQUEMACODIGO",'.') ;
   };
   this.e17n12_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11n12_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12n12_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13n12_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14n12_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15n12_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19n12_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21n11_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,31,34,36,38,40,42,43,44,45];
   this.GXLastCtrlId =45;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaesquema",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2915,24,"ESQUEMACODIGO","","","EsquemaCodigo","int",0,"px",2,2,"right",null,[],2915,"EsquemaCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2912,25,"ESQUEMADESCRICAO","","","EsquemaDescricao","svchar",0,"px",30,30,"left",null,[],2912,"EsquemaDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vESQUEMACODIGO",gxz:"ZV18EsquemaCodigo",gxold:"OV18EsquemaCodigo",gxvar:"AV18EsquemaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18EsquemaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18EsquemaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESQUEMACODIGO",gx.O.AV18EsquemaCodigo,0)},c2v:function(){gx.O.AV18EsquemaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESQUEMACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vESQUEMADESCRICAO",gxz:"ZV17EsquemaDescricao",gxold:"OV17EsquemaDescricao",gxvar:"AV17EsquemaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EsquemaDescricao=Value},v2z:function(Value){gx.O.ZV17EsquemaDescricao=Value},v2c:function(){gx.fn.setControlValue("vESQUEMADESCRICAO",gx.O.AV17EsquemaDescricao,0)},c2v:function(){gx.O.AV17EsquemaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vESQUEMADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ESQUEMACODIGO",gxz:"Z2915EsquemaCodigo",gxold:"O2915EsquemaCodigo",gxvar:"A2915EsquemaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2915EsquemaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2915EsquemaCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ESQUEMACODIGO",row || gx.fn.currentGridRowImpl(23),gx.O.A2915EsquemaCodigo,0)},c2v:function(){gx.O.A2915EsquemaCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ESQUEMACODIGO",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ESQUEMADESCRICAO",gxz:"Z2912EsquemaDescricao",gxold:"O2912EsquemaDescricao",gxvar:"A2912EsquemaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2912EsquemaDescricao=Value},v2z:function(Value){gx.O.Z2912EsquemaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("ESQUEMADESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A2912EsquemaDescricao,0)},c2v:function(){gx.O.A2912EsquemaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("ESQUEMADESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLENAV",grid:0};
   GXValidFnc[34]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[42]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV21PaginaAux",gxold:"OV21PaginaAux",gxvar:"AV21PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV21PaginaAux,0)},c2v:function(){gx.O.AV21PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV20Pagina",gxold:"OV20Pagina",gxvar:"AV20Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV20Pagina)},c2v:function(){gx.O.AV20Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV18EsquemaCodigo = 0 ;
   this.ZV18EsquemaCodigo = 0 ;
   this.OV18EsquemaCodigo = 0 ;
   this.AV17EsquemaDescricao = "" ;
   this.ZV17EsquemaDescricao = "" ;
   this.OV17EsquemaDescricao = "" ;
   this.Z2915EsquemaCodigo = 0 ;
   this.O2915EsquemaCodigo = 0 ;
   this.Z2912EsquemaDescricao = "" ;
   this.O2912EsquemaDescricao = "" ;
   this.AV21PaginaAux = 0 ;
   this.ZV21PaginaAux = 0 ;
   this.OV21PaginaAux = 0 ;
   this.AV20Pagina = 0 ;
   this.ZV20Pagina = 0 ;
   this.OV20Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV18EsquemaCodigo = 0 ;
   this.AV17EsquemaDescricao = "" ;
   this.AV21PaginaAux = 0 ;
   this.AV20Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV16cEsquemaCodigo = 0 ;
   this.A2915EsquemaCodigo = 0 ;
   this.A2912EsquemaDescricao = "" ;
   this.Events = {"e17n12_client": ["ENTER", true] ,"e11n12_client": ["'GXM_FIRST'", true] ,"e12n12_client": ["'GXM_PREVIOUS'", true] ,"e13n12_client": ["'GXM_NEXT'", true] ,"e14n12_client": ["'GXM_LAST'", true] ,"e15n12_client": ["'PROCURAR'", true] ,"e19n12_client": ["'ATUALIZAPAGINA'", true] ,"e21n11_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV17EsquemaDescricao',fld:'vESQUEMADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'ESQUEMACODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ESQUEMACODIGO","Title")',ctrl:'ESQUEMACODIGO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'ESQUEMADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ESQUEMADESCRICAO","Title")',ctrl:'ESQUEMADESCRICAO',prop:'Title'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV19NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'}],[{av:'AV16cEsquemaCodigo',fld:'vCESQUEMACODIGO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV17EsquemaDescricao',fld:'vESQUEMADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV17EsquemaDescricao',fld:'vESQUEMADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20Pagina',fld:'vPAGINA'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV17EsquemaDescricao',fld:'vESQUEMADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV17EsquemaDescricao',fld:'vESQUEMADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV17EsquemaDescricao',fld:'vESQUEMADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV17EsquemaDescricao',fld:'vESQUEMADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[]];
   this.setVCMap("AV16cEsquemaCodigo", "vCESQUEMACODIGO", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaesquema());
