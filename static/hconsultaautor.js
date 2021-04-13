/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:48:52.40
*/
gx.evt.autoSkip = false;
gx.define('hconsultaautor', false, function () {
   this.ServerClass =  "hconsultaautor" ;
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
      this.AV13PAutorID=gx.fn.getIntegerValue("vPAUTORID",'.') ;
   };
   this.e170u2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e110u2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e120u2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e130u2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e140u2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e150u2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e190u2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e210u1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,31,34,36,38,40,42,43,44,45];
   this.GXLastCtrlId =45;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaautor",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(49,24,"AUTORID","","","AutorId","int",0,"px",7,7,"right",null,[],49,"AutorId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(50,25,"AUTORNOME","","","AutorNome","svchar",0,"px",40,40,"left",null,[],50,"AutorNome",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vAUTORID",gxz:"ZV11AutorId",gxold:"OV11AutorId",gxvar:"AV11AutorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11AutorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11AutorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vAUTORID",gx.O.AV11AutorId,0)},c2v:function(){gx.O.AV11AutorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vAUTORID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vAUTORNOME",gxz:"ZV12AutorNome",gxold:"OV12AutorNome",gxvar:"AV12AutorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12AutorNome=Value},v2z:function(Value){gx.O.ZV12AutorNome=Value},v2c:function(){gx.fn.setControlValue("vAUTORNOME",gx.O.AV12AutorNome,0)},c2v:function(){gx.O.AV12AutorNome=this.val()},val:function(){return gx.fn.getControlValue("vAUTORNOME")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"AUTORID",gxz:"Z49AutorId",gxold:"O49AutorId",gxvar:"A49AutorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A49AutorId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z49AutorId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("AUTORID",row || gx.fn.currentGridRowImpl(23),gx.O.A49AutorId,0)},c2v:function(){gx.O.A49AutorId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("AUTORID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"AUTORNOME",gxz:"Z50AutorNome",gxold:"O50AutorNome",gxvar:"A50AutorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A50AutorNome=Value},v2z:function(Value){gx.O.Z50AutorNome=Value},v2c:function(row){gx.fn.setGridControlValue("AUTORNOME",row || gx.fn.currentGridRowImpl(23),gx.O.A50AutorNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A50AutorNome=this.val()},val:function(row){return gx.fn.getGridControlValue("AUTORNOME",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLENAV",grid:0};
   GXValidFnc[34]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[42]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV17PaginaAux",gxold:"OV17PaginaAux",gxvar:"AV17PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV17PaginaAux,0)},c2v:function(){gx.O.AV17PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV16Pagina",gxold:"OV16Pagina",gxvar:"AV16Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV16Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV16Pagina)},c2v:function(){gx.O.AV16Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV11AutorId = 0 ;
   this.ZV11AutorId = 0 ;
   this.OV11AutorId = 0 ;
   this.AV12AutorNome = "" ;
   this.ZV12AutorNome = "" ;
   this.OV12AutorNome = "" ;
   this.Z49AutorId = 0 ;
   this.O49AutorId = 0 ;
   this.Z50AutorNome = "" ;
   this.O50AutorNome = "" ;
   this.AV17PaginaAux = 0 ;
   this.ZV17PaginaAux = 0 ;
   this.OV17PaginaAux = 0 ;
   this.AV16Pagina = 0 ;
   this.ZV16Pagina = 0 ;
   this.OV16Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV11AutorId = 0 ;
   this.AV12AutorNome = "" ;
   this.AV17PaginaAux = 0 ;
   this.AV16Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV13PAutorID = 0 ;
   this.A49AutorId = 0 ;
   this.A50AutorNome = "" ;
   this.Events = {"e170u2_client": ["ENTER", true] ,"e110u2_client": ["'GXM_FIRST'", true] ,"e120u2_client": ["'GXM_PREVIOUS'", true] ,"e130u2_client": ["'GXM_NEXT'", true] ,"e140u2_client": ["'GXM_LAST'", true] ,"e150u2_client": ["'PROCURAR'", true] ,"e190u2_client": ["'ATUALIZAPAGINA'", true] ,"e210u1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11AutorId',fld:'vAUTORID'},{av:'AV12AutorNome',fld:'vAUTORNOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'AUTORID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("AUTORID","Title")',ctrl:'AUTORID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'AUTORNOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("AUTORNOME","Title")',ctrl:'AUTORNOME',prop:'Title'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'AV18NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A49AutorId',fld:'AUTORID'}],[{av:'AV13PAutorID',fld:'vPAUTORID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11AutorId',fld:'vAUTORID'},{av:'AV12AutorNome',fld:'vAUTORNOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11AutorId',fld:'vAUTORID'},{av:'AV12AutorNome',fld:'vAUTORNOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV16Pagina',fld:'vPAGINA'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11AutorId',fld:'vAUTORID'},{av:'AV12AutorNome',fld:'vAUTORNOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11AutorId',fld:'vAUTORID'},{av:'AV12AutorNome',fld:'vAUTORNOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11AutorId',fld:'vAUTORID'},{av:'AV12AutorNome',fld:'vAUTORNOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11AutorId',fld:'vAUTORID'},{av:'AV12AutorNome',fld:'vAUTORNOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[]];
   this.setVCMap("AV13PAutorID", "vPAUTORID", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaautor());
