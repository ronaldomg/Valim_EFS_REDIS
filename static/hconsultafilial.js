/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:58:18.26
*/
gx.evt.autoSkip = false;
gx.define('hconsultafilial', false, function () {
   this.ServerClass =  "hconsultafilial" ;
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
      this.AV17PFilialId=gx.fn.getIntegerValue("vPFILIALID",'.') ;
   };
   this.e18802_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11802_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12802_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13802_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14802_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15802_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e21802_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e16802_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e22801_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,29,30,31,32,38,41,44,46,48,50,52,53,54,55];
   this.GXLastCtrlId =55;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultafilial",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1156,29,"FILIALID","","","FilialId","int",0,"px",7,7,"right",null,[],1156,"FilialId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Nomefilial",30,"vNOMEFILIAL","Nome da Filial","","NomeFilial","svchar",0,"px",30,30,"left",null,[],"Nomefilial","NomeFilial",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1136,31,"FILIALNOME","","","FilialNome","svchar",0,"px",100,80,"left",null,[],1136,"FilialNome",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1201,32,"FILIALTELEFONE","","","FilialTelefone","svchar",0,"px",15,15,"left",null,[],1201,"FilialTelefone",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vFILIALID",gxz:"ZV15FilialId",gxold:"OV15FilialId",gxvar:"AV15FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV15FilialId,0)},c2v:function(){gx.O.AV15FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vFILIALNOME",gxz:"ZV16FilialNome",gxold:"OV16FilialNome",gxvar:"AV16FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16FilialNome=Value},v2z:function(Value){gx.O.ZV16FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV16FilialNome,0)},c2v:function(){gx.O.AV16FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vFILIALTELEFONE",gxz:"ZV18FilialTelefone",gxold:"OV18FilialTelefone",gxvar:"AV18FilialTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18FilialTelefone=Value},v2z:function(Value){gx.O.ZV18FilialTelefone=Value},v2c:function(){gx.fn.setControlValue("vFILIALTELEFONE",gx.O.AV18FilialTelefone,0)},c2v:function(){gx.O.AV18FilialTelefone=this.val()},val:function(){return gx.fn.getControlValue("vFILIALTELEFONE")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"FILIALID",gxz:"Z1156FilialId",gxold:"O1156FilialId",gxvar:"A1156FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1156FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1156FilialId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FILIALID",row || gx.fn.currentGridRowImpl(28),gx.O.A1156FilialId,0)},c2v:function(){gx.O.A1156FilialId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FILIALID",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNOMEFILIAL",gxz:"ZV25NomeFilial",gxold:"OV25NomeFilial",gxvar:"AV25NomeFilial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV25NomeFilial=Value},v2z:function(Value){gx.O.ZV25NomeFilial=Value},v2c:function(row){gx.fn.setGridControlValue("vNOMEFILIAL",row || gx.fn.currentGridRowImpl(28),gx.O.AV25NomeFilial,0)},c2v:function(){gx.O.AV25NomeFilial=this.val()},val:function(row){return gx.fn.getGridControlValue("vNOMEFILIAL",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"FILIALNOME",gxz:"Z1136FilialNome",gxold:"O1136FilialNome",gxvar:"A1136FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1136FilialNome=Value},v2z:function(Value){gx.O.Z1136FilialNome=Value},v2c:function(row){gx.fn.setGridControlValue("FILIALNOME",row || gx.fn.currentGridRowImpl(28),gx.O.A1136FilialNome,0)},c2v:function(){gx.O.A1136FilialNome=this.val()},val:function(row){return gx.fn.getGridControlValue("FILIALNOME",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"FILIALTELEFONE",gxz:"Z1201FilialTelefone",gxold:"O1201FilialTelefone",gxvar:"A1201FilialTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1201FilialTelefone=Value},v2z:function(Value){gx.O.Z1201FilialTelefone=Value},v2c:function(row){gx.fn.setGridControlValue("FILIALTELEFONE",row || gx.fn.currentGridRowImpl(28),gx.O.A1201FilialTelefone,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1201FilialTelefone=this.val()},val:function(row){return gx.fn.getGridControlValue("FILIALTELEFONE",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TABLENAV",grid:0};
   GXValidFnc[41]={fld:"IMAGE1",grid:0};
   GXValidFnc[44]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[46]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[48]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[50]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[52]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV23Pagina",gxold:"OV23Pagina",gxvar:"AV23Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV23Pagina)},c2v:function(){gx.O.AV23Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV24PaginaAux",gxold:"OV24PaginaAux",gxvar:"AV24PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV24PaginaAux,0)},c2v:function(){gx.O.AV24PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV15FilialId = 0 ;
   this.ZV15FilialId = 0 ;
   this.OV15FilialId = 0 ;
   this.AV16FilialNome = "" ;
   this.ZV16FilialNome = "" ;
   this.OV16FilialNome = "" ;
   this.AV18FilialTelefone = "" ;
   this.ZV18FilialTelefone = "" ;
   this.OV18FilialTelefone = "" ;
   this.Z1156FilialId = 0 ;
   this.O1156FilialId = 0 ;
   this.ZV25NomeFilial = "" ;
   this.OV25NomeFilial = "" ;
   this.Z1136FilialNome = "" ;
   this.O1136FilialNome = "" ;
   this.Z1201FilialTelefone = "" ;
   this.O1201FilialTelefone = "" ;
   this.AV23Pagina = 0 ;
   this.ZV23Pagina = 0 ;
   this.OV23Pagina = 0 ;
   this.AV24PaginaAux = 0 ;
   this.ZV24PaginaAux = 0 ;
   this.OV24PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV15FilialId = 0 ;
   this.AV16FilialNome = "" ;
   this.AV18FilialTelefone = "" ;
   this.AV23Pagina = 0 ;
   this.AV24PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV17PFilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.AV25NomeFilial = "" ;
   this.A1136FilialNome = "" ;
   this.A1201FilialTelefone = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e18802_client": ["ENTER", true] ,"e11802_client": ["'GXM_FIRST'", true] ,"e12802_client": ["'GXM_PREVIOUS'", true] ,"e13802_client": ["'GXM_NEXT'", true] ,"e14802_client": ["'GXM_LAST'", true] ,"e15802_client": ["'PROCURAR'", true] ,"e21802_client": ["'ATUALIZAPAGINA'", true] ,"e16802_client": ["'NOVO'", true] ,"e22801_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15FilialId',fld:'vFILIALID'},{av:'AV16FilialNome',fld:'vFILIALNOME'},{av:'AV18FilialTelefone',fld:'vFILIALTELEFONE'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'FILIALID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("FILIALID","Title")',ctrl:'FILIALID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'FILIALNOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("FILIALNOME","Title")',ctrl:'FILIALNOME',prop:'Title'},{ctrl:'FILIALTELEFONE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("FILIALTELEFONE","Title")',ctrl:'FILIALTELEFONE',prop:'Title'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV22NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A1156FilialId',fld:'FILIALID'}],[{av:'AV17PFilialId',fld:'vPFILIALID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15FilialId',fld:'vFILIALID'},{av:'AV16FilialNome',fld:'vFILIALNOME'},{av:'AV18FilialTelefone',fld:'vFILIALTELEFONE'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1136FilialNome',fld:'FILIALNOME'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15FilialId',fld:'vFILIALID'},{av:'AV16FilialNome',fld:'vFILIALNOME'},{av:'AV18FilialTelefone',fld:'vFILIALTELEFONE'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV23Pagina',fld:'vPAGINA'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15FilialId',fld:'vFILIALID'},{av:'AV16FilialNome',fld:'vFILIALNOME'},{av:'AV18FilialTelefone',fld:'vFILIALTELEFONE'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15FilialId',fld:'vFILIALID'},{av:'AV16FilialNome',fld:'vFILIALNOME'},{av:'AV18FilialTelefone',fld:'vFILIALTELEFONE'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15FilialId',fld:'vFILIALID'},{av:'AV16FilialNome',fld:'vFILIALNOME'},{av:'AV18FilialTelefone',fld:'vFILIALTELEFONE'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1136FilialNome',fld:'FILIALNOME'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A1136FilialNome',fld:'FILIALNOME'}],[{av:'AV25NomeFilial',fld:'vNOMEFILIAL'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15FilialId',fld:'vFILIALID'},{av:'AV16FilialNome',fld:'vFILIALNOME'},{av:'AV18FilialTelefone',fld:'vFILIALTELEFONE'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1136FilialNome',fld:'FILIALNOME'}],[]];
   this.EvtParms["'NOVO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15FilialId',fld:'vFILIALID'},{av:'AV16FilialNome',fld:'vFILIALNOME'},{av:'AV18FilialTelefone',fld:'vFILIALTELEFONE'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1136FilialNome',fld:'FILIALNOME'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV17PFilialId", "vPFILIALID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[55]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"A1136FilialNome", rfrProp:"Value", gxAttId:"1136"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultafilial());
