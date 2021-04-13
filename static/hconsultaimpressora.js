/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:49:28.11
*/
gx.evt.autoSkip = false;
gx.define('hconsultaimpressora', false, function () {
   this.ServerClass =  "hconsultaimpressora" ;
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
      this.AV10Pimpressoraid=gx.fn.getIntegerValue("vPIMPRESSORAID",'.') ;
   };
   this.e17152_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11152_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12152_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13152_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14152_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15152_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19152_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21151_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,31,34,36,38,40,42,43,44,45];
   this.GXLastCtrlId =45;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaimpressora",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(198,24,"IMPRESSORAID","","","ImpressoraId","int",0,"px",7,7,"right",null,[],198,"ImpressoraId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(285,25,"IMPRESSORANOME","","","ImpressoraNome","svchar",0,"px",60,60,"left",null,[],285,"ImpressoraNome",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vIMPRESSORAID",gxz:"ZV8ImpressoraId",gxold:"OV8ImpressoraId",gxvar:"AV8ImpressoraId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8ImpressoraId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8ImpressoraId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vIMPRESSORAID",gx.O.AV8ImpressoraId,0)},c2v:function(){gx.O.AV8ImpressoraId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vIMPRESSORAID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vIMPRESSORANOME",gxz:"ZV9ImpressoraNome",gxold:"OV9ImpressoraNome",gxvar:"AV9ImpressoraNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9ImpressoraNome=Value},v2z:function(Value){gx.O.ZV9ImpressoraNome=Value},v2c:function(){gx.fn.setControlValue("vIMPRESSORANOME",gx.O.AV9ImpressoraNome,0)},c2v:function(){gx.O.AV9ImpressoraNome=this.val()},val:function(){return gx.fn.getControlValue("vIMPRESSORANOME")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAID",gxz:"Z198ImpressoraId",gxold:"O198ImpressoraId",gxvar:"A198ImpressoraId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A198ImpressoraId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z198ImpressoraId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("IMPRESSORAID",row || gx.fn.currentGridRowImpl(23),gx.O.A198ImpressoraId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A198ImpressoraId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("IMPRESSORAID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORANOME",gxz:"Z285ImpressoraNome",gxold:"O285ImpressoraNome",gxvar:"A285ImpressoraNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A285ImpressoraNome=Value},v2z:function(Value){gx.O.Z285ImpressoraNome=Value},v2c:function(row){gx.fn.setGridControlValue("IMPRESSORANOME",row || gx.fn.currentGridRowImpl(23),gx.O.A285ImpressoraNome,0)},c2v:function(){gx.O.A285ImpressoraNome=this.val()},val:function(row){return gx.fn.getGridControlValue("IMPRESSORANOME",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLENAV",grid:0};
   GXValidFnc[34]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[42]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV16Pagina",gxold:"OV16Pagina",gxvar:"AV16Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV16Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV16Pagina)},c2v:function(){gx.O.AV16Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV17PaginaAux",gxold:"OV17PaginaAux",gxvar:"AV17PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV17PaginaAux,0)},c2v:function(){gx.O.AV17PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV8ImpressoraId = 0 ;
   this.ZV8ImpressoraId = 0 ;
   this.OV8ImpressoraId = 0 ;
   this.AV9ImpressoraNome = "" ;
   this.ZV9ImpressoraNome = "" ;
   this.OV9ImpressoraNome = "" ;
   this.Z198ImpressoraId = 0 ;
   this.O198ImpressoraId = 0 ;
   this.Z285ImpressoraNome = "" ;
   this.O285ImpressoraNome = "" ;
   this.AV16Pagina = 0 ;
   this.ZV16Pagina = 0 ;
   this.OV16Pagina = 0 ;
   this.AV17PaginaAux = 0 ;
   this.ZV17PaginaAux = 0 ;
   this.OV17PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV8ImpressoraId = 0 ;
   this.AV9ImpressoraNome = "" ;
   this.AV16Pagina = 0 ;
   this.AV17PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV10Pimpressoraid = 0 ;
   this.A198ImpressoraId = 0 ;
   this.A285ImpressoraNome = "" ;
   this.Events = {"e17152_client": ["ENTER", true] ,"e11152_client": ["'GXM_FIRST'", true] ,"e12152_client": ["'GXM_PREVIOUS'", true] ,"e13152_client": ["'GXM_NEXT'", true] ,"e14152_client": ["'GXM_LAST'", true] ,"e15152_client": ["'PROCURAR'", true] ,"e19152_client": ["'ATUALIZAPAGINA'", true] ,"e21151_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV8ImpressoraId',fld:'vIMPRESSORAID'},{av:'AV9ImpressoraNome',fld:'vIMPRESSORANOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'IMPRESSORAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("IMPRESSORAID","Title")',ctrl:'IMPRESSORAID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'IMPRESSORANOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("IMPRESSORANOME","Title")',ctrl:'IMPRESSORANOME',prop:'Title'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'AV15NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A198ImpressoraId',fld:'IMPRESSORAID'}],[{av:'AV10Pimpressoraid',fld:'vPIMPRESSORAID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV8ImpressoraId',fld:'vIMPRESSORAID'},{av:'AV9ImpressoraNome',fld:'vIMPRESSORANOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV8ImpressoraId',fld:'vIMPRESSORAID'},{av:'AV9ImpressoraNome',fld:'vIMPRESSORANOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV16Pagina',fld:'vPAGINA'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV8ImpressoraId',fld:'vIMPRESSORAID'},{av:'AV9ImpressoraNome',fld:'vIMPRESSORANOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV8ImpressoraId',fld:'vIMPRESSORAID'},{av:'AV9ImpressoraNome',fld:'vIMPRESSORANOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV8ImpressoraId',fld:'vIMPRESSORAID'},{av:'AV9ImpressoraNome',fld:'vIMPRESSORANOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV8ImpressoraId',fld:'vIMPRESSORAID'},{av:'AV9ImpressoraNome',fld:'vIMPRESSORANOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[]];
   this.setVCMap("AV10Pimpressoraid", "vPIMPRESSORAID", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaimpressora());
