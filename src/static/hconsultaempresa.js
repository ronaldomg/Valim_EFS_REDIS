/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:49:12.4
*/
gx.evt.autoSkip = false;
gx.define('hconsultaempresa', false, function () {
   this.ServerClass =  "hconsultaempresa" ;
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
      this.AV13PEmpresId=gx.fn.getControlValue("vPEMPRESID") ;
   };
   this.e17102_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11102_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12102_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13102_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14102_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15102_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19102_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21101_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,27,33,36,38,40,42,44,45,46,47];
   this.GXLastCtrlId =47;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaempresa",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(138,24,"EMPRESAID","","","EmpresaId","char",0,"px",10,10,"left",null,[],138,"EmpresaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(186,25,"EMPRESANOME","","","EmpresaNome","svchar",0,"px",40,40,"left",null,[],186,"EmpresaNome",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(192,26,"EMPRESATELEFONE","","","EmpresaTelefone","svchar",0,"px",15,15,"left",null,[],192,"EmpresaTelefone",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(193,27,"EMPRESAFAX","","","EmpresaFax","svchar",0,"px",15,15,"left",null,[],193,"EmpresaFax",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAID",gxz:"ZV11EmpresaId",gxold:"OV11EmpresaId",gxvar:"AV11EmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11EmpresaId=Value},v2z:function(Value){gx.O.ZV11EmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAID",gx.O.AV11EmpresaId,0)},c2v:function(){gx.O.AV11EmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESANOME",gxz:"ZV12EmpresaNome",gxold:"OV12EmpresaNome",gxvar:"AV12EmpresaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12EmpresaNome=Value},v2z:function(Value){gx.O.ZV12EmpresaNome=Value},v2c:function(){gx.fn.setControlValue("vEMPRESANOME",gx.O.AV12EmpresaNome,0)},c2v:function(){gx.O.AV12EmpresaNome=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESANOME")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAID",gxz:"Z138EmpresaId",gxold:"O138EmpresaId",gxvar:"A138EmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A138EmpresaId=Value},v2z:function(Value){gx.O.Z138EmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESAID",row || gx.fn.currentGridRowImpl(23),gx.O.A138EmpresaId,0)},c2v:function(){gx.O.A138EmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAID",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESANOME",gxz:"Z186EmpresaNome",gxold:"O186EmpresaNome",gxvar:"A186EmpresaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A186EmpresaNome=Value},v2z:function(Value){gx.O.Z186EmpresaNome=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESANOME",row || gx.fn.currentGridRowImpl(23),gx.O.A186EmpresaNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A186EmpresaNome=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESANOME",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESATELEFONE",gxz:"Z192EmpresaTelefone",gxold:"O192EmpresaTelefone",gxvar:"A192EmpresaTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A192EmpresaTelefone=Value},v2z:function(Value){gx.O.Z192EmpresaTelefone=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESATELEFONE",row || gx.fn.currentGridRowImpl(23),gx.O.A192EmpresaTelefone,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A192EmpresaTelefone=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESATELEFONE",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAFAX",gxz:"Z193EmpresaFax",gxold:"O193EmpresaFax",gxvar:"A193EmpresaFax",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A193EmpresaFax=Value},v2z:function(Value){gx.O.Z193EmpresaFax=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESAFAX",row || gx.fn.currentGridRowImpl(23),gx.O.A193EmpresaFax,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A193EmpresaFax=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAFAX",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TABLENAV",grid:0};
   GXValidFnc[36]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[38]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[40]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[42]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[44]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV18PaginaAux",gxold:"OV18PaginaAux",gxvar:"AV18PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV18PaginaAux,0)},c2v:function(){gx.O.AV18PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV17Pagina",gxold:"OV17Pagina",gxvar:"AV17Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV17Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV17Pagina)},c2v:function(){gx.O.AV17Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV11EmpresaId = "" ;
   this.ZV11EmpresaId = "" ;
   this.OV11EmpresaId = "" ;
   this.AV12EmpresaNome = "" ;
   this.ZV12EmpresaNome = "" ;
   this.OV12EmpresaNome = "" ;
   this.Z138EmpresaId = "" ;
   this.O138EmpresaId = "" ;
   this.Z186EmpresaNome = "" ;
   this.O186EmpresaNome = "" ;
   this.Z192EmpresaTelefone = "" ;
   this.O192EmpresaTelefone = "" ;
   this.Z193EmpresaFax = "" ;
   this.O193EmpresaFax = "" ;
   this.AV18PaginaAux = 0 ;
   this.ZV18PaginaAux = 0 ;
   this.OV18PaginaAux = 0 ;
   this.AV17Pagina = 0 ;
   this.ZV17Pagina = 0 ;
   this.OV17Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV11EmpresaId = "" ;
   this.AV12EmpresaNome = "" ;
   this.AV18PaginaAux = 0 ;
   this.AV17Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV13PEmpresId = "" ;
   this.A138EmpresaId = "" ;
   this.A186EmpresaNome = "" ;
   this.A192EmpresaTelefone = "" ;
   this.A193EmpresaFax = "" ;
   this.Events = {"e17102_client": ["ENTER", true] ,"e11102_client": ["'GXM_FIRST'", true] ,"e12102_client": ["'GXM_PREVIOUS'", true] ,"e13102_client": ["'GXM_NEXT'", true] ,"e14102_client": ["'GXM_LAST'", true] ,"e15102_client": ["'PROCURAR'", true] ,"e19102_client": ["'ATUALIZAPAGINA'", true] ,"e21101_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11EmpresaId',fld:'vEMPRESAID'},{av:'AV12EmpresaNome',fld:'vEMPRESANOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'EMPRESAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("EMPRESAID","Title")',ctrl:'EMPRESAID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'EMPRESANOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("EMPRESANOME","Title")',ctrl:'EMPRESANOME',prop:'Title'},{ctrl:'EMPRESATELEFONE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("EMPRESATELEFONE","Title")',ctrl:'EMPRESATELEFONE',prop:'Title'},{ctrl:'EMPRESAFAX',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("EMPRESAFAX","Title")',ctrl:'EMPRESAFAX',prop:'Title'},{av:'AV18PaginaAux',fld:'vPAGINAAUX'},{av:'AV17Pagina',fld:'vPAGINA'},{av:'AV16NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A138EmpresaId',fld:'EMPRESAID'}],[{av:'AV13PEmpresId',fld:'vPEMPRESID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11EmpresaId',fld:'vEMPRESAID'},{av:'AV12EmpresaNome',fld:'vEMPRESANOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11EmpresaId',fld:'vEMPRESAID'},{av:'AV12EmpresaNome',fld:'vEMPRESANOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV17Pagina',fld:'vPAGINA'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11EmpresaId',fld:'vEMPRESAID'},{av:'AV12EmpresaNome',fld:'vEMPRESANOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV17Pagina',fld:'vPAGINA'},{av:'AV18PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11EmpresaId',fld:'vEMPRESAID'},{av:'AV12EmpresaNome',fld:'vEMPRESANOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV18PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11EmpresaId',fld:'vEMPRESAID'},{av:'AV12EmpresaNome',fld:'vEMPRESANOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11EmpresaId',fld:'vEMPRESAID'},{av:'AV12EmpresaNome',fld:'vEMPRESANOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[]];
   this.setVCMap("AV13PEmpresId", "vPEMPRESID", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[47]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaempresa());
