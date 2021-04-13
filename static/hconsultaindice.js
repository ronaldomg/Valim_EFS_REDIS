/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:30:0.19
*/
gx.evt.autoSkip = false;
gx.define('hconsultaindice', false, function () {
   this.ServerClass =  "hconsultaindice" ;
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
      this.AV17PIndiceSigla=gx.fn.getControlValue("vPINDICESIGLA") ;
   };
   this.e17ej2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11ej2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12ej2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13ej2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14ej2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15ej2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19ej2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21ej1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,31,34,36,38,40,42,43,44,45];
   this.GXLastCtrlId =45;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaindice",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2363,24,"INDICESIGLA","","","IndiceSigla","char",0,"px",6,6,"left",null,[],2363,"IndiceSigla",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2356,25,"INDICEDESCRICAO","","","IndiceDescricao","svchar",0,"px",30,30,"left",null,[],2356,"IndiceDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:6,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vINDICESIGLA",gxz:"ZV15IndiceSigla",gxold:"OV15IndiceSigla",gxvar:"AV15IndiceSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15IndiceSigla=Value},v2z:function(Value){gx.O.ZV15IndiceSigla=Value},v2c:function(){gx.fn.setControlValue("vINDICESIGLA",gx.O.AV15IndiceSigla,0)},c2v:function(){gx.O.AV15IndiceSigla=this.val()},val:function(){return gx.fn.getControlValue("vINDICESIGLA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vINDICEDESCRICAO",gxz:"ZV16IndiceDescricao",gxold:"OV16IndiceDescricao",gxvar:"AV16IndiceDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16IndiceDescricao=Value},v2z:function(Value){gx.O.ZV16IndiceDescricao=Value},v2c:function(){gx.fn.setControlValue("vINDICEDESCRICAO",gx.O.AV16IndiceDescricao,0)},c2v:function(){gx.O.AV16IndiceDescricao=this.val()},val:function(){return gx.fn.getControlValue("vINDICEDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"char",len:6,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"INDICESIGLA",gxz:"Z2363IndiceSigla",gxold:"O2363IndiceSigla",gxvar:"A2363IndiceSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2363IndiceSigla=Value},v2z:function(Value){gx.O.Z2363IndiceSigla=Value},v2c:function(row){gx.fn.setGridControlValue("INDICESIGLA",row || gx.fn.currentGridRowImpl(23),gx.O.A2363IndiceSigla,0)},c2v:function(){gx.O.A2363IndiceSigla=this.val()},val:function(row){return gx.fn.getGridControlValue("INDICESIGLA",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"INDICEDESCRICAO",gxz:"Z2356IndiceDescricao",gxold:"O2356IndiceDescricao",gxvar:"A2356IndiceDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2356IndiceDescricao=Value},v2z:function(Value){gx.O.Z2356IndiceDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("INDICEDESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A2356IndiceDescricao,0)},c2v:function(){gx.O.A2356IndiceDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("INDICEDESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLENAV",grid:0};
   GXValidFnc[34]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[42]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV20Pagina",gxold:"OV20Pagina",gxvar:"AV20Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV20Pagina)},c2v:function(){gx.O.AV20Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV21PaginaAux",gxold:"OV21PaginaAux",gxvar:"AV21PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV21PaginaAux,0)},c2v:function(){gx.O.AV21PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV15IndiceSigla = "" ;
   this.ZV15IndiceSigla = "" ;
   this.OV15IndiceSigla = "" ;
   this.AV16IndiceDescricao = "" ;
   this.ZV16IndiceDescricao = "" ;
   this.OV16IndiceDescricao = "" ;
   this.Z2363IndiceSigla = "" ;
   this.O2363IndiceSigla = "" ;
   this.Z2356IndiceDescricao = "" ;
   this.O2356IndiceDescricao = "" ;
   this.AV20Pagina = 0 ;
   this.ZV20Pagina = 0 ;
   this.OV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.ZV21PaginaAux = 0 ;
   this.OV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV15IndiceSigla = "" ;
   this.AV16IndiceDescricao = "" ;
   this.AV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV17PIndiceSigla = "" ;
   this.A2363IndiceSigla = "" ;
   this.A2356IndiceDescricao = "" ;
   this.Events = {"e17ej2_client": ["ENTER", true] ,"e11ej2_client": ["'GXM_FIRST'", true] ,"e12ej2_client": ["'GXM_PREVIOUS'", true] ,"e13ej2_client": ["'GXM_NEXT'", true] ,"e14ej2_client": ["'GXM_LAST'", true] ,"e15ej2_client": ["'PROCURAR'", true] ,"e19ej2_client": ["'ATUALIZAPAGINA'", true] ,"e21ej1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15IndiceSigla',fld:'vINDICESIGLA'},{av:'AV16IndiceDescricao',fld:'vINDICEDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'INDICESIGLA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("INDICESIGLA","Title")',ctrl:'INDICESIGLA',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'INDICEDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("INDICEDESCRICAO","Title")',ctrl:'INDICEDESCRICAO',prop:'Title'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV19NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A2363IndiceSigla',fld:'INDICESIGLA'}],[{av:'AV17PIndiceSigla',fld:'vPINDICESIGLA'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15IndiceSigla',fld:'vINDICESIGLA'},{av:'AV16IndiceDescricao',fld:'vINDICEDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15IndiceSigla',fld:'vINDICESIGLA'},{av:'AV16IndiceDescricao',fld:'vINDICEDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20Pagina',fld:'vPAGINA'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15IndiceSigla',fld:'vINDICESIGLA'},{av:'AV16IndiceDescricao',fld:'vINDICEDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15IndiceSigla',fld:'vINDICESIGLA'},{av:'AV16IndiceDescricao',fld:'vINDICEDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15IndiceSigla',fld:'vINDICESIGLA'},{av:'AV16IndiceDescricao',fld:'vINDICEDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15IndiceSigla',fld:'vINDICESIGLA'},{av:'AV16IndiceDescricao',fld:'vINDICEDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[]];
   this.setVCMap("AV17PIndiceSigla", "vPINDICESIGLA", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaindice());
