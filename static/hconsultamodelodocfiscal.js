/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:17:59.63
*/
gx.evt.autoSkip = false;
gx.define('hconsultamodelodocfiscal', false, function () {
   this.ServerClass =  "hconsultamodelodocfiscal" ;
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
      this.AV18ModeloDocFiscalCodigo=gx.fn.getControlValue("vMODELODOCFISCALCODIGO") ;
   };
   this.e17ts2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11ts2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12ts2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13ts2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14ts2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15ts2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20ts2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21ts1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,19,20,21,22,28,31,33,35,37,39,40,41,42];
   this.GXLastCtrlId =42;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",18,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultamodelodocfiscal",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(4665,19,"MODELODOCFISCALCODIGO","","","ModeloDocFiscalCodigo","char",0,"px",2,2,"left",null,[],4665,"ModeloDocFiscalCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5160,20,"MODELODOCFISCALDESCRICAO","","","ModeloDocFiscalDescricao","svchar",0,"px",80,80,"left",null,[],5160,"ModeloDocFiscalDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(5161,21,"MODELODOCFISCALSNOBRCHAVE","Chave Obrigatória","","ModeloDocFiscalSnObrChave","char",0,"px",1,1,"left",null,[],5161,"ModeloDocFiscalSnObrChave",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Simnao",22,"vSIMNAO","","","SimNao","char",0,"px",3,3,"left",null,[],"Simnao","SimNao",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCMODELODOCFISCALCODIGO",gxz:"ZV17cModeloDocFiscalCodigo",gxold:"OV17cModeloDocFiscalCodigo",gxvar:"AV17cModeloDocFiscalCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17cModeloDocFiscalCodigo=Value},v2z:function(Value){gx.O.ZV17cModeloDocFiscalCodigo=Value},v2c:function(){gx.fn.setControlValue("vCMODELODOCFISCALCODIGO",gx.O.AV17cModeloDocFiscalCodigo,0)},c2v:function(){gx.O.AV17cModeloDocFiscalCodigo=this.val()},val:function(){return gx.fn.getControlValue("vCMODELODOCFISCALCODIGO")},nac:gx.falseFn};
   GXValidFnc[19]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELODOCFISCALCODIGO",gxz:"Z4665ModeloDocFiscalCodigo",gxold:"O4665ModeloDocFiscalCodigo",gxvar:"A4665ModeloDocFiscalCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4665ModeloDocFiscalCodigo=Value},v2z:function(Value){gx.O.Z4665ModeloDocFiscalCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("MODELODOCFISCALCODIGO",row || gx.fn.currentGridRowImpl(18),gx.O.A4665ModeloDocFiscalCodigo,0)},c2v:function(){gx.O.A4665ModeloDocFiscalCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELODOCFISCALCODIGO",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[20]={lvl:2,type:"svchar",len:80,dec:0,sign:false,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELODOCFISCALDESCRICAO",gxz:"Z5160ModeloDocFiscalDescricao",gxold:"O5160ModeloDocFiscalDescricao",gxvar:"A5160ModeloDocFiscalDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5160ModeloDocFiscalDescricao=Value},v2z:function(Value){gx.O.Z5160ModeloDocFiscalDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("MODELODOCFISCALDESCRICAO",row || gx.fn.currentGridRowImpl(18),gx.O.A5160ModeloDocFiscalDescricao,0)},c2v:function(){gx.O.A5160ModeloDocFiscalDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELODOCFISCALDESCRICAO",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[21]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELODOCFISCALSNOBRCHAVE",gxz:"Z5161ModeloDocFiscalSnObrChave",gxold:"O5161ModeloDocFiscalSnObrChave",gxvar:"A5161ModeloDocFiscalSnObrChave",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5161ModeloDocFiscalSnObrChave=Value},v2z:function(Value){gx.O.Z5161ModeloDocFiscalSnObrChave=Value},v2c:function(row){gx.fn.setGridControlValue("MODELODOCFISCALSNOBRCHAVE",row || gx.fn.currentGridRowImpl(18),gx.O.A5161ModeloDocFiscalSnObrChave,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5161ModeloDocFiscalSnObrChave=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELODOCFISCALSNOBRCHAVE",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[22]={lvl:2,type:"char",len:3,dec:0,sign:false,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSIMNAO",gxz:"ZV16SimNao",gxold:"OV16SimNao",gxvar:"AV16SimNao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV16SimNao=Value},v2z:function(Value){gx.O.ZV16SimNao=Value},v2c:function(row){gx.fn.setGridControlValue("vSIMNAO",row || gx.fn.currentGridRowImpl(18),gx.O.AV16SimNao,0)},c2v:function(){gx.O.AV16SimNao=this.val()},val:function(row){return gx.fn.getGridControlValue("vSIMNAO",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABLENAV",grid:0};
   GXValidFnc[31]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[33]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[35]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[37]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[39]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV20Pagina",gxold:"OV20Pagina",gxvar:"AV20Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV20Pagina)},c2v:function(){gx.O.AV20Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV21PaginaAux",gxold:"OV21PaginaAux",gxvar:"AV21PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV21PaginaAux,0)},c2v:function(){gx.O.AV21PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV17cModeloDocFiscalCodigo = "" ;
   this.ZV17cModeloDocFiscalCodigo = "" ;
   this.OV17cModeloDocFiscalCodigo = "" ;
   this.Z4665ModeloDocFiscalCodigo = "" ;
   this.O4665ModeloDocFiscalCodigo = "" ;
   this.Z5160ModeloDocFiscalDescricao = "" ;
   this.O5160ModeloDocFiscalDescricao = "" ;
   this.Z5161ModeloDocFiscalSnObrChave = "" ;
   this.O5161ModeloDocFiscalSnObrChave = "" ;
   this.ZV16SimNao = "" ;
   this.OV16SimNao = "" ;
   this.AV20Pagina = 0 ;
   this.ZV20Pagina = 0 ;
   this.OV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.ZV21PaginaAux = 0 ;
   this.OV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV17cModeloDocFiscalCodigo = "" ;
   this.AV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV18ModeloDocFiscalCodigo = "" ;
   this.A4665ModeloDocFiscalCodigo = "" ;
   this.A5160ModeloDocFiscalDescricao = "" ;
   this.A5161ModeloDocFiscalSnObrChave = "" ;
   this.AV16SimNao = "" ;
   this.Events = {"e17ts2_client": ["ENTER", true] ,"e11ts2_client": ["'GXM_FIRST'", true] ,"e12ts2_client": ["'GXM_PREVIOUS'", true] ,"e13ts2_client": ["'GXM_NEXT'", true] ,"e14ts2_client": ["'GXM_LAST'", true] ,"e15ts2_client": ["'PROCURAR'", true] ,"e20ts2_client": ["'ATUALIZAPAGINA'", true] ,"e21ts1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17cModeloDocFiscalCodigo',fld:'vCMODELODOCFISCALCODIGO'},{av:'A5161ModeloDocFiscalSnObrChave',fld:'MODELODOCFISCALSNOBRCHAVE'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'MODELODOCFISCALCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MODELODOCFISCALCODIGO","Title")',ctrl:'MODELODOCFISCALCODIGO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'MODELODOCFISCALDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MODELODOCFISCALDESCRICAO","Title")',ctrl:'MODELODOCFISCALDESCRICAO',prop:'Title'},{ctrl:'vSIMNAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vSIMNAO","Title")',ctrl:'vSIMNAO',prop:'Title'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV19NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A4665ModeloDocFiscalCodigo',fld:'MODELODOCFISCALCODIGO'}],[{av:'AV18ModeloDocFiscalCodigo',fld:'vMODELODOCFISCALCODIGO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17cModeloDocFiscalCodigo',fld:'vCMODELODOCFISCALCODIGO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A5161ModeloDocFiscalSnObrChave',fld:'MODELODOCFISCALSNOBRCHAVE'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17cModeloDocFiscalCodigo',fld:'vCMODELODOCFISCALCODIGO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A5161ModeloDocFiscalSnObrChave',fld:'MODELODOCFISCALSNOBRCHAVE'},{av:'AV20Pagina',fld:'vPAGINA'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17cModeloDocFiscalCodigo',fld:'vCMODELODOCFISCALCODIGO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A5161ModeloDocFiscalSnObrChave',fld:'MODELODOCFISCALSNOBRCHAVE'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17cModeloDocFiscalCodigo',fld:'vCMODELODOCFISCALCODIGO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A5161ModeloDocFiscalSnObrChave',fld:'MODELODOCFISCALSNOBRCHAVE'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17cModeloDocFiscalCodigo',fld:'vCMODELODOCFISCALCODIGO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A5161ModeloDocFiscalSnObrChave',fld:'MODELODOCFISCALSNOBRCHAVE'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A5161ModeloDocFiscalSnObrChave',fld:'MODELODOCFISCALSNOBRCHAVE'}],[{av:'AV16SimNao',fld:'vSIMNAO'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17cModeloDocFiscalCodigo',fld:'vCMODELODOCFISCALCODIGO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A5161ModeloDocFiscalSnObrChave',fld:'MODELODOCFISCALSNOBRCHAVE'}],[]];
   this.setVCMap("AV18ModeloDocFiscalCodigo", "vMODELODOCFISCALCODIGO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[10]);
   GridContainer.addRefreshingVar(this.GXValidFnc[42]);
   GridContainer.addRefreshingVar({rfrVar:"A5161ModeloDocFiscalSnObrChave", rfrProp:"Value", gxAttId:"5161"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultamodelodocfiscal());
