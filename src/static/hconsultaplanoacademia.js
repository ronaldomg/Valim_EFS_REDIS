/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 16:46:22.86
*/
gx.evt.autoSkip = false;
gx.define('hconsultaplanoacademia', false, function () {
   this.ServerClass =  "hconsultaplanoacademia" ;
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
      this.AV21PPlanoAcademiaCodigo=gx.fn.getIntegerValue("vPPLANOACADEMIACODIGO",'.') ;
   };
   this.e1713c2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1113c2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e1213c2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e1313c2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e1413c2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e1513c2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e1913c2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e2113c1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,27,33,36,38,40,42,44,45,46,47];
   this.GXLastCtrlId =47;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaplanoacademia",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8001,24,"PLANOACADEMIACODIGO","","","PlanoAcademiaCodigo","int",0,"px",7,7,"right",null,[],8001,"PlanoAcademiaCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8013,25,"PLANOACADEMIADESCRICAO","Descrição do Plano","","PlanoAcademiaDescricao","svchar",0,"px",40,40,"left",null,[],8013,"PlanoAcademiaDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8015,26,"PLANOACADEMIAQTDCREDITO","Créditos","","PlanoAcademiaQtdCredito","int",0,"px",10,10,"right",null,[],8015,"PlanoAcademiaQtdCredito",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8014,27,"PLANOACADEMIAVALOR","Valor do Plano","","PlanoAcademiaValor","decimal",0,"px",22,22,"right",null,[],8014,"PlanoAcademiaValor",true,2,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPLANOACADEMIACODIGO",gxz:"ZV19PlanoAcademiaCodigo",gxold:"OV19PlanoAcademiaCodigo",gxvar:"AV19PlanoAcademiaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19PlanoAcademiaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19PlanoAcademiaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPLANOACADEMIACODIGO",gx.O.AV19PlanoAcademiaCodigo,0)},c2v:function(){gx.O.AV19PlanoAcademiaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPLANOACADEMIACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPLANOACADEMIADESCRICAO",gxz:"ZV20PlanoAcademiaDescricao",gxold:"OV20PlanoAcademiaDescricao",gxvar:"AV20PlanoAcademiaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20PlanoAcademiaDescricao=Value},v2z:function(Value){gx.O.ZV20PlanoAcademiaDescricao=Value},v2c:function(){gx.fn.setControlValue("vPLANOACADEMIADESCRICAO",gx.O.AV20PlanoAcademiaDescricao,0)},c2v:function(){gx.O.AV20PlanoAcademiaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPLANOACADEMIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PLANOACADEMIACODIGO",gxz:"Z8001PlanoAcademiaCodigo",gxold:"O8001PlanoAcademiaCodigo",gxvar:"A8001PlanoAcademiaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8001PlanoAcademiaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8001PlanoAcademiaCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PLANOACADEMIACODIGO",row || gx.fn.currentGridRowImpl(23),gx.O.A8001PlanoAcademiaCodigo,0)},c2v:function(){gx.O.A8001PlanoAcademiaCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PLANOACADEMIACODIGO",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PLANOACADEMIADESCRICAO",gxz:"Z8013PlanoAcademiaDescricao",gxold:"O8013PlanoAcademiaDescricao",gxvar:"A8013PlanoAcademiaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8013PlanoAcademiaDescricao=Value},v2z:function(Value){gx.O.Z8013PlanoAcademiaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("PLANOACADEMIADESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A8013PlanoAcademiaDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8013PlanoAcademiaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("PLANOACADEMIADESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PLANOACADEMIAQTDCREDITO",gxz:"Z8015PlanoAcademiaQtdCredito",gxold:"O8015PlanoAcademiaQtdCredito",gxvar:"A8015PlanoAcademiaQtdCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8015PlanoAcademiaQtdCredito=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8015PlanoAcademiaQtdCredito=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PLANOACADEMIAQTDCREDITO",row || gx.fn.currentGridRowImpl(23),gx.O.A8015PlanoAcademiaQtdCredito,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8015PlanoAcademiaQtdCredito=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PLANOACADEMIAQTDCREDITO",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PLANOACADEMIAVALOR",gxz:"Z8014PlanoAcademiaValor",gxold:"O8014PlanoAcademiaValor",gxvar:"A8014PlanoAcademiaValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8014PlanoAcademiaValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8014PlanoAcademiaValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("PLANOACADEMIAVALOR",row || gx.fn.currentGridRowImpl(23),gx.O.A8014PlanoAcademiaValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8014PlanoAcademiaValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("PLANOACADEMIAVALOR",row || gx.fn.currentGridRowImpl(23),'.',',')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TABLENAV",grid:0};
   GXValidFnc[36]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[38]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[40]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[42]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[44]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV17PaginaAux",gxold:"OV17PaginaAux",gxvar:"AV17PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV17PaginaAux,0)},c2v:function(){gx.O.AV17PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV16Pagina",gxold:"OV16Pagina",gxvar:"AV16Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV16Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV16Pagina)},c2v:function(){gx.O.AV16Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV19PlanoAcademiaCodigo = 0 ;
   this.ZV19PlanoAcademiaCodigo = 0 ;
   this.OV19PlanoAcademiaCodigo = 0 ;
   this.AV20PlanoAcademiaDescricao = "" ;
   this.ZV20PlanoAcademiaDescricao = "" ;
   this.OV20PlanoAcademiaDescricao = "" ;
   this.Z8001PlanoAcademiaCodigo = 0 ;
   this.O8001PlanoAcademiaCodigo = 0 ;
   this.Z8013PlanoAcademiaDescricao = "" ;
   this.O8013PlanoAcademiaDescricao = "" ;
   this.Z8015PlanoAcademiaQtdCredito = 0 ;
   this.O8015PlanoAcademiaQtdCredito = 0 ;
   this.Z8014PlanoAcademiaValor = 0 ;
   this.O8014PlanoAcademiaValor = 0 ;
   this.AV17PaginaAux = 0 ;
   this.ZV17PaginaAux = 0 ;
   this.OV17PaginaAux = 0 ;
   this.AV16Pagina = 0 ;
   this.ZV16Pagina = 0 ;
   this.OV16Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV19PlanoAcademiaCodigo = 0 ;
   this.AV20PlanoAcademiaDescricao = "" ;
   this.AV17PaginaAux = 0 ;
   this.AV16Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV21PPlanoAcademiaCodigo = 0 ;
   this.A8001PlanoAcademiaCodigo = 0 ;
   this.A8013PlanoAcademiaDescricao = "" ;
   this.A8015PlanoAcademiaQtdCredito = 0 ;
   this.A8014PlanoAcademiaValor = 0 ;
   this.Events = {"e1713c2_client": ["ENTER", true] ,"e1113c2_client": ["'GXM_FIRST'", true] ,"e1213c2_client": ["'GXM_PREVIOUS'", true] ,"e1313c2_client": ["'GXM_NEXT'", true] ,"e1413c2_client": ["'GXM_LAST'", true] ,"e1513c2_client": ["'PROCURAR'", true] ,"e1913c2_client": ["'ATUALIZAPAGINA'", true] ,"e2113c1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A8001PlanoAcademiaCodigo',fld:'PLANOACADEMIACODIGO'}],[{av:'AV19PlanoAcademiaCodigo',fld:'vPLANOACADEMIACODIGO'},{ctrl:'PLANOACADEMIACODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PLANOACADEMIACODIGO","Title")',ctrl:'PLANOACADEMIACODIGO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'AV18NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A8001PlanoAcademiaCodigo',fld:'PLANOACADEMIACODIGO'}],[{av:'AV21PPlanoAcademiaCodigo',fld:'vPPLANOACADEMIACODIGO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A8001PlanoAcademiaCodigo',fld:'PLANOACADEMIACODIGO'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A8001PlanoAcademiaCodigo',fld:'PLANOACADEMIACODIGO'},{av:'AV16Pagina',fld:'vPAGINA'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A8001PlanoAcademiaCodigo',fld:'PLANOACADEMIACODIGO'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A8001PlanoAcademiaCodigo',fld:'PLANOACADEMIACODIGO'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A8001PlanoAcademiaCodigo',fld:'PLANOACADEMIACODIGO'},{av:'AV19PlanoAcademiaCodigo',fld:'vPLANOACADEMIACODIGO'},{av:'AV20PlanoAcademiaDescricao',fld:'vPLANOACADEMIADESCRICAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A8001PlanoAcademiaCodigo',fld:'PLANOACADEMIACODIGO'}],[]];
   this.setVCMap("AV21PPlanoAcademiaCodigo", "vPPLANOACADEMIACODIGO", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[47]);
   GridContainer.addRefreshingVar({rfrVar:"A8001PlanoAcademiaCodigo", rfrProp:"Value", gxAttId:"8001"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaplanoacademia());
