/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:3:40.80
*/
gx.evt.autoSkip = false;
gx.define('hconsultaaparelho', false, function () {
   this.ServerClass =  "hconsultaaparelho" ;
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
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV23AparelhoId=gx.fn.getIntegerValue("vAPARELHOID",'.') ;
   };
   this.e181bu2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e111bu2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e121bu2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e131bu2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e141bu2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e151bu2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e161bu2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e201bu2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e221bu2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,31,34,36,38,40,42,43,44,45];
   this.GXLastCtrlId =45;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaaparelho",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8825,24,"APARELHOID","","","AparelhoId","int",0,"px",4,4,"right",null,[],8825,"AparelhoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8821,25,"APARELHODESCRICAO","","","AparelhoDescricao","svchar",0,"px",40,40,"left",null,[],8821,"AparelhoDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vAPARELHOIDENTRADA",gxz:"ZV22AparelhoIdEntrada",gxold:"OV22AparelhoIdEntrada",gxvar:"AV22AparelhoIdEntrada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22AparelhoIdEntrada=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22AparelhoIdEntrada=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vAPARELHOIDENTRADA",gx.O.AV22AparelhoIdEntrada,0)},c2v:function(){gx.O.AV22AparelhoIdEntrada=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vAPARELHOIDENTRADA",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vAPARELHODESCRICAO",gxz:"ZV24AparelhoDescricao",gxold:"OV24AparelhoDescricao",gxvar:"AV24AparelhoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24AparelhoDescricao=Value},v2z:function(Value){gx.O.ZV24AparelhoDescricao=Value},v2c:function(){gx.fn.setControlValue("vAPARELHODESCRICAO",gx.O.AV24AparelhoDescricao,0)},c2v:function(){gx.O.AV24AparelhoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOID",gxz:"Z8825AparelhoId",gxold:"O8825AparelhoId",gxvar:"A8825AparelhoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8825AparelhoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8825AparelhoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("APARELHOID",row || gx.fn.currentGridRowImpl(23),gx.O.A8825AparelhoId,0)},c2v:function(){gx.O.A8825AparelhoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("APARELHOID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"APARELHODESCRICAO",gxz:"Z8821AparelhoDescricao",gxold:"O8821AparelhoDescricao",gxvar:"A8821AparelhoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8821AparelhoDescricao=Value},v2z:function(Value){gx.O.Z8821AparelhoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("APARELHODESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A8821AparelhoDescricao,0)},c2v:function(){gx.O.A8821AparelhoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("APARELHODESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLENAV",grid:0};
   GXValidFnc[34]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[42]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV16Pagina",gxold:"OV16Pagina",gxvar:"AV16Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV16Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV16Pagina)},c2v:function(){gx.O.AV16Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV17PaginaAux",gxold:"OV17PaginaAux",gxvar:"AV17PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV17PaginaAux,0)},c2v:function(){gx.O.AV17PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV22AparelhoIdEntrada = 0 ;
   this.ZV22AparelhoIdEntrada = 0 ;
   this.OV22AparelhoIdEntrada = 0 ;
   this.AV24AparelhoDescricao = "" ;
   this.ZV24AparelhoDescricao = "" ;
   this.OV24AparelhoDescricao = "" ;
   this.Z8825AparelhoId = 0 ;
   this.O8825AparelhoId = 0 ;
   this.Z8821AparelhoDescricao = "" ;
   this.O8821AparelhoDescricao = "" ;
   this.AV16Pagina = 0 ;
   this.ZV16Pagina = 0 ;
   this.OV16Pagina = 0 ;
   this.AV17PaginaAux = 0 ;
   this.ZV17PaginaAux = 0 ;
   this.OV17PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV22AparelhoIdEntrada = 0 ;
   this.AV24AparelhoDescricao = "" ;
   this.AV16Pagina = 0 ;
   this.AV17PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV23AparelhoId = 0 ;
   this.A8824AparelhoEmpresaId = "" ;
   this.A8825AparelhoId = 0 ;
   this.A8821AparelhoDescricao = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e181bu2_client": ["ENTER", true] ,"e111bu2_client": ["'GXM_FIRST'", true] ,"e121bu2_client": ["'GXM_PREVIOUS'", true] ,"e131bu2_client": ["'GXM_NEXT'", true] ,"e141bu2_client": ["'GXM_LAST'", true] ,"e151bu2_client": ["'PROCURAR'", true] ,"e161bu2_client": ["'FECHAR'", true] ,"e201bu2_client": ["'ATUALIZAPAGINA'", true] ,"e221bu2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24AparelhoDescricao',fld:'vAPARELHODESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22AparelhoIdEntrada',fld:'vAPARELHOIDENTRADA'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV23AparelhoId',fld:'vAPARELHOID'},{ctrl:'APARELHOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("APARELHOID","Title")',ctrl:'APARELHOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'APARELHODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("APARELHODESCRICAO","Title")',ctrl:'APARELHODESCRICAO',prop:'Title'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'AV18NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A8825AparelhoId',fld:'APARELHOID'}],[{av:'AV23AparelhoId',fld:'vAPARELHOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22AparelhoIdEntrada',fld:'vAPARELHOIDENTRADA'},{av:'AV24AparelhoDescricao',fld:'vAPARELHODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22AparelhoIdEntrada',fld:'vAPARELHOIDENTRADA'},{av:'AV24AparelhoDescricao',fld:'vAPARELHODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV16Pagina',fld:'vPAGINA'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22AparelhoIdEntrada',fld:'vAPARELHOIDENTRADA'},{av:'AV24AparelhoDescricao',fld:'vAPARELHODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22AparelhoIdEntrada',fld:'vAPARELHOIDENTRADA'},{av:'AV24AparelhoDescricao',fld:'vAPARELHODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22AparelhoIdEntrada',fld:'vAPARELHOIDENTRADA'},{av:'AV24AparelhoDescricao',fld:'vAPARELHODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23AparelhoId',fld:'vAPARELHOID'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV23AparelhoId',fld:'vAPARELHOID'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22AparelhoIdEntrada',fld:'vAPARELHOIDENTRADA'},{av:'AV24AparelhoDescricao',fld:'vAPARELHODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV23AparelhoId", "vAPARELHOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaaparelho());
