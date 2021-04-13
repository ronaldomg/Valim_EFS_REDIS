/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:49:35.47
*/
gx.evt.autoSkip = false;
gx.define('hconsultapreco', false, function () {
   this.ServerClass =  "hconsultapreco" ;
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
      this.AV19PrecoCod=gx.fn.getIntegerValue("vPRECOCOD",'.') ;
   };
   this.e17lg2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11lg2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12lg2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13lg2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14lg2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15lg2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19lg2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21lg1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,15,17,20,22,26,27,28,34,37,39,41,43,45,46,47,48];
   this.GXLastCtrlId =48;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",25,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultapreco",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(710,26,"PRECOID","","","PrecoId","int",0,"px",2,2,"right",null,[],710,"PrecoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(711,27,"PRECODESCRICAO","","","PrecoDescricao","svchar",0,"px",30,30,"left",null,[],711,"PrecoDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(722,28,"PRECOTIPO","Tipo","PrecoTipo","char",null,0,true,false,0,"px","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPRECOID",gxz:"ZV16PrecoId",gxold:"OV16PrecoId",gxvar:"AV16PrecoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16PrecoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16PrecoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECOID",gx.O.AV16PrecoId,0)},c2v:function(){gx.O.AV16PrecoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPRECODESCRICAO",gxz:"ZV17PrecoDescricao",gxold:"OV17PrecoDescricao",gxvar:"AV17PrecoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17PrecoDescricao=Value},v2z:function(Value){gx.O.ZV17PrecoDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRECODESCRICAO",gx.O.AV17PrecoDescricao,0)},c2v:function(){gx.O.AV17PrecoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRECODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPRECOTIPO",gxz:"ZV18PrecoTipo",gxold:"OV18PrecoTipo",gxvar:"AV18PrecoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV18PrecoTipo=Value},v2z:function(Value){gx.O.ZV18PrecoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vPRECOTIPO",gx.O.AV18PrecoTipo)},c2v:function(){gx.O.AV18PrecoTipo=this.val()},val:function(){return gx.fn.getControlValue("vPRECOTIPO")},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PRECOID",gxz:"Z710PrecoId",gxold:"O710PrecoId",gxvar:"A710PrecoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A710PrecoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z710PrecoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PRECOID",row || gx.fn.currentGridRowImpl(25),gx.O.A710PrecoId,0)},c2v:function(){gx.O.A710PrecoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PRECOID",row || gx.fn.currentGridRowImpl(25),'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PRECODESCRICAO",gxz:"Z711PrecoDescricao",gxold:"O711PrecoDescricao",gxvar:"A711PrecoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A711PrecoDescricao=Value},v2z:function(Value){gx.O.Z711PrecoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("PRECODESCRICAO",row || gx.fn.currentGridRowImpl(25),gx.O.A711PrecoDescricao,0)},c2v:function(){gx.O.A711PrecoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("PRECODESCRICAO",row || gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PRECOTIPO",gxz:"Z722PrecoTipo",gxold:"O722PrecoTipo",gxvar:"A722PrecoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A722PrecoTipo=Value},v2z:function(Value){gx.O.Z722PrecoTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("PRECOTIPO",row || gx.fn.currentGridRowImpl(25),gx.O.A722PrecoTipo)},c2v:function(){gx.O.A722PrecoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("PRECOTIPO",row || gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TABLENAV",grid:0};
   GXValidFnc[37]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[39]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[41]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[43]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[45]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV22PaginaAux",gxold:"OV22PaginaAux",gxvar:"AV22PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV22PaginaAux,0)},c2v:function(){gx.O.AV22PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV21Pagina",gxold:"OV21Pagina",gxvar:"AV21Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV21Pagina)},c2v:function(){gx.O.AV21Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16PrecoId = 0 ;
   this.ZV16PrecoId = 0 ;
   this.OV16PrecoId = 0 ;
   this.AV17PrecoDescricao = "" ;
   this.ZV17PrecoDescricao = "" ;
   this.OV17PrecoDescricao = "" ;
   this.AV18PrecoTipo = "" ;
   this.ZV18PrecoTipo = "" ;
   this.OV18PrecoTipo = "" ;
   this.Z710PrecoId = 0 ;
   this.O710PrecoId = 0 ;
   this.Z711PrecoDescricao = "" ;
   this.O711PrecoDescricao = "" ;
   this.Z722PrecoTipo = "" ;
   this.O722PrecoTipo = "" ;
   this.AV22PaginaAux = 0 ;
   this.ZV22PaginaAux = 0 ;
   this.OV22PaginaAux = 0 ;
   this.AV21Pagina = 0 ;
   this.ZV21Pagina = 0 ;
   this.OV21Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16PrecoId = 0 ;
   this.AV17PrecoDescricao = "" ;
   this.AV18PrecoTipo = "" ;
   this.AV22PaginaAux = 0 ;
   this.AV21Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV19PrecoCod = 0 ;
   this.A709PrecoEmpresaId = "" ;
   this.A710PrecoId = 0 ;
   this.A711PrecoDescricao = "" ;
   this.A722PrecoTipo = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17lg2_client": ["ENTER", true] ,"e11lg2_client": ["'GXM_FIRST'", true] ,"e12lg2_client": ["'GXM_PREVIOUS'", true] ,"e13lg2_client": ["'GXM_NEXT'", true] ,"e14lg2_client": ["'GXM_LAST'", true] ,"e15lg2_client": ["'PROCURAR'", true] ,"e19lg2_client": ["'ATUALIZAPAGINA'", true] ,"e21lg1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16PrecoId',fld:'vPRECOID'},{av:'AV17PrecoDescricao',fld:'vPRECODESCRICAO'},{av:'AV18PrecoTipo',fld:'vPRECOTIPO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'PRECOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PRECOID","Title")',ctrl:'PRECOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'PRECODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PRECODESCRICAO","Title")',ctrl:'PRECODESCRICAO',prop:'Title'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'},{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV20NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A710PrecoId',fld:'PRECOID'}],[{av:'AV19PrecoCod',fld:'vPRECOCOD'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16PrecoId',fld:'vPRECOID'},{av:'AV17PrecoDescricao',fld:'vPRECODESCRICAO'},{av:'AV18PrecoTipo',fld:'vPRECOTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16PrecoId',fld:'vPRECOID'},{av:'AV17PrecoDescricao',fld:'vPRECODESCRICAO'},{av:'AV18PrecoTipo',fld:'vPRECOTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21Pagina',fld:'vPAGINA'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16PrecoId',fld:'vPRECOID'},{av:'AV17PrecoDescricao',fld:'vPRECODESCRICAO'},{av:'AV18PrecoTipo',fld:'vPRECOTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16PrecoId',fld:'vPRECOID'},{av:'AV17PrecoDescricao',fld:'vPRECODESCRICAO'},{av:'AV18PrecoTipo',fld:'vPRECOTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16PrecoId',fld:'vPRECOID'},{av:'AV17PrecoDescricao',fld:'vPRECODESCRICAO'},{av:'AV18PrecoTipo',fld:'vPRECOTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16PrecoId',fld:'vPRECOID'},{av:'AV17PrecoDescricao',fld:'vPRECODESCRICAO'},{av:'AV18PrecoTipo',fld:'vPRECOTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV19PrecoCod", "vPRECOCOD", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[10]);
   GridContainer.addRefreshingVar(this.GXValidFnc[17]);
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar(this.GXValidFnc[48]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultapreco());
