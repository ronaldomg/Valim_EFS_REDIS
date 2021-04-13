/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:12:30.80
*/
gx.evt.autoSkip = false;
gx.define('hconsultabetoneira', false, function () {
   this.ServerClass =  "hconsultabetoneira" ;
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
      this.AV10EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV6BetoneiraCodigoIn=gx.fn.getIntegerValue("vBETONEIRACODIGOIN",'.') ;
      this.AV20SnParametro=gx.fn.getControlValue("vSNPARAMETRO") ;
      this.AV7BetoneiraCodigoOut=gx.fn.getIntegerValue("vBETONEIRACODIGOOUT",'.') ;
   };
   this.e182dm2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e112dm2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e122dm2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e132dm2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e142dm2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e152dm2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e162dm2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e202dm2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e222dm1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,31,34,37,39,41,43,45,46,47,48];
   this.GXLastCtrlId =48;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultabetoneira",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(11288,24,"BETONEIRACODIGO","","","BetoneiraCodigo","int",0,"px",8,8,"right",null,[],11288,"BetoneiraCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(11292,25,"BETONEIRAPLACA","","","BetoneiraPlaca","svchar",0,"px",15,15,"left",null,[],11292,"BetoneiraPlaca",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vBETONEIRACODIGO",gxz:"ZV23BetoneiraCodigo",gxold:"OV23BetoneiraCodigo",gxvar:"AV23BetoneiraCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23BetoneiraCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23BetoneiraCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBETONEIRACODIGO",gx.O.AV23BetoneiraCodigo,0)},c2v:function(){gx.O.AV23BetoneiraCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBETONEIRACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vBETONEIRAPLACA",gxz:"ZV24BetoneiraPlaca",gxold:"OV24BetoneiraPlaca",gxvar:"AV24BetoneiraPlaca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24BetoneiraPlaca=Value},v2z:function(Value){gx.O.ZV24BetoneiraPlaca=Value},v2c:function(){gx.fn.setControlValue("vBETONEIRAPLACA",gx.O.AV24BetoneiraPlaca,0)},c2v:function(){gx.O.AV24BetoneiraPlaca=this.val()},val:function(){return gx.fn.getControlValue("vBETONEIRAPLACA")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BETONEIRACODIGO",gxz:"Z11288BetoneiraCodigo",gxold:"O11288BetoneiraCodigo",gxvar:"A11288BetoneiraCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11288BetoneiraCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11288BetoneiraCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BETONEIRACODIGO",row || gx.fn.currentGridRowImpl(23),gx.O.A11288BetoneiraCodigo,0)},c2v:function(){gx.O.A11288BetoneiraCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BETONEIRACODIGO",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BETONEIRAPLACA",gxz:"Z11292BetoneiraPlaca",gxold:"O11292BetoneiraPlaca",gxvar:"A11292BetoneiraPlaca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11292BetoneiraPlaca=Value},v2z:function(Value){gx.O.Z11292BetoneiraPlaca=Value},v2c:function(row){gx.fn.setGridControlValue("BETONEIRAPLACA",row || gx.fn.currentGridRowImpl(23),gx.O.A11292BetoneiraPlaca,0)},c2v:function(){gx.O.A11292BetoneiraPlaca=this.val()},val:function(row){return gx.fn.getGridControlValue("BETONEIRAPLACA",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLENAV",grid:0};
   GXValidFnc[34]={fld:"INCLUICLIENTE1",grid:0};
   GXValidFnc[37]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[39]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[41]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[43]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[45]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV17Pagina",gxold:"OV17Pagina",gxvar:"AV17Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV17Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV17Pagina)},c2v:function(){gx.O.AV17Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV18PaginaAux",gxold:"OV18PaginaAux",gxvar:"AV18PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV18PaginaAux,0)},c2v:function(){gx.O.AV18PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV16Orderedby",gxold:"OV16Orderedby",gxvar:"AV16Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV16Orderedby,0)},c2v:function(){gx.O.AV16Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV23BetoneiraCodigo = 0 ;
   this.ZV23BetoneiraCodigo = 0 ;
   this.OV23BetoneiraCodigo = 0 ;
   this.AV24BetoneiraPlaca = "" ;
   this.ZV24BetoneiraPlaca = "" ;
   this.OV24BetoneiraPlaca = "" ;
   this.Z11288BetoneiraCodigo = 0 ;
   this.O11288BetoneiraCodigo = 0 ;
   this.Z11292BetoneiraPlaca = "" ;
   this.O11292BetoneiraPlaca = "" ;
   this.AV17Pagina = 0 ;
   this.ZV17Pagina = 0 ;
   this.OV17Pagina = 0 ;
   this.AV18PaginaAux = 0 ;
   this.ZV18PaginaAux = 0 ;
   this.OV18PaginaAux = 0 ;
   this.AV16Orderedby = 0 ;
   this.ZV16Orderedby = 0 ;
   this.OV16Orderedby = 0 ;
   this.AV23BetoneiraCodigo = 0 ;
   this.AV24BetoneiraPlaca = "" ;
   this.AV17Pagina = 0 ;
   this.AV18PaginaAux = 0 ;
   this.AV16Orderedby = 0 ;
   this.AV7BetoneiraCodigoOut = 0 ;
   this.AV6BetoneiraCodigoIn = 0 ;
   this.A11287BetoneiraEmpresaId = "" ;
   this.A11288BetoneiraCodigo = 0 ;
   this.A11292BetoneiraPlaca = "" ;
   this.AV10EmpresaPadrao = "" ;
   this.AV20SnParametro = "" ;
   this.Events = {"e182dm2_client": ["ENTER", true] ,"e112dm2_client": ["'GXM_FIRST'", true] ,"e122dm2_client": ["'GXM_PREVIOUS'", true] ,"e132dm2_client": ["'GXM_NEXT'", true] ,"e142dm2_client": ["'GXM_LAST'", true] ,"e152dm2_client": ["'PROCURAR'", true] ,"e162dm2_client": ["'NOVO'", true] ,"e202dm2_client": ["'ATUALIZAPAGINA'", true] ,"e222dm1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23BetoneiraCodigo',fld:'vBETONEIRACODIGO'},{av:'AV24BetoneiraPlaca',fld:'vBETONEIRAPLACA'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV16Orderedby',fld:'vORDEREDBY'},{av:'AV6BetoneiraCodigoIn',fld:'vBETONEIRACODIGOIN',hsh:true},{av:'AV20SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV23BetoneiraCodigo',fld:'vBETONEIRACODIGO'},{av:'AV16Orderedby',fld:'vORDEREDBY'},{av:'AV24BetoneiraPlaca',fld:'vBETONEIRAPLACA'},{av:'AV20SnParametro',fld:'vSNPARAMETRO'},{ctrl:'BETONEIRACODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BETONEIRACODIGO","Title")',ctrl:'BETONEIRACODIGO',prop:'Title'},{av:'AV11Imagem',fld:'vIMAGEM'},{ctrl:'BETONEIRAPLACA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BETONEIRAPLACA","Title")',ctrl:'BETONEIRAPLACA',prop:'Title'},{av:'AV18PaginaAux',fld:'vPAGINAAUX'},{av:'AV17Pagina',fld:'vPAGINA'},{av:'AV15NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A11288BetoneiraCodigo',fld:'BETONEIRACODIGO'}],[{av:'AV7BetoneiraCodigoOut',fld:'vBETONEIRACODIGOOUT'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23BetoneiraCodigo',fld:'vBETONEIRACODIGO'},{av:'AV24BetoneiraPlaca',fld:'vBETONEIRAPLACA'},{av:'AV16Orderedby',fld:'vORDEREDBY'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV6BetoneiraCodigoIn',fld:'vBETONEIRACODIGOIN',hsh:true},{av:'AV20SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23BetoneiraCodigo',fld:'vBETONEIRACODIGO'},{av:'AV24BetoneiraPlaca',fld:'vBETONEIRAPLACA'},{av:'AV16Orderedby',fld:'vORDEREDBY'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV6BetoneiraCodigoIn',fld:'vBETONEIRACODIGOIN',hsh:true},{av:'AV20SnParametro',fld:'vSNPARAMETRO'},{av:'AV17Pagina',fld:'vPAGINA'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23BetoneiraCodigo',fld:'vBETONEIRACODIGO'},{av:'AV24BetoneiraPlaca',fld:'vBETONEIRAPLACA'},{av:'AV16Orderedby',fld:'vORDEREDBY'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV6BetoneiraCodigoIn',fld:'vBETONEIRACODIGOIN',hsh:true},{av:'AV20SnParametro',fld:'vSNPARAMETRO'},{av:'AV17Pagina',fld:'vPAGINA'},{av:'AV18PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23BetoneiraCodigo',fld:'vBETONEIRACODIGO'},{av:'AV24BetoneiraPlaca',fld:'vBETONEIRAPLACA'},{av:'AV16Orderedby',fld:'vORDEREDBY'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV6BetoneiraCodigoIn',fld:'vBETONEIRACODIGOIN',hsh:true},{av:'AV20SnParametro',fld:'vSNPARAMETRO'},{av:'AV18PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23BetoneiraCodigo',fld:'vBETONEIRACODIGO'},{av:'AV24BetoneiraPlaca',fld:'vBETONEIRAPLACA'},{av:'AV16Orderedby',fld:'vORDEREDBY'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV6BetoneiraCodigoIn',fld:'vBETONEIRACODIGOIN',hsh:true},{av:'AV20SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV20SnParametro',fld:'vSNPARAMETRO'},{av:'AV16Orderedby',fld:'vORDEREDBY'},{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23BetoneiraCodigo',fld:'vBETONEIRACODIGO'},{av:'AV24BetoneiraPlaca',fld:'vBETONEIRAPLACA'},{av:'AV16Orderedby',fld:'vORDEREDBY'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV6BetoneiraCodigoIn',fld:'vBETONEIRACODIGOIN',hsh:true},{av:'AV20SnParametro',fld:'vSNPARAMETRO'}],[]];
   this.setVCMap("AV10EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV6BetoneiraCodigoIn", "vBETONEIRACODIGOIN", 0, "int");
   this.setVCMap("AV20SnParametro", "vSNPARAMETRO", 0, "char");
   this.setVCMap("AV7BetoneiraCodigoOut", "vBETONEIRACODIGOOUT", 0, "int");
   this.setVCMap("AV10EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV6BetoneiraCodigoIn", "vBETONEIRACODIGOIN", 0, "int");
   this.setVCMap("AV20SnParametro", "vSNPARAMETRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[48]);
   GridContainer.addRefreshingVar({rfrVar:"AV10EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV6BetoneiraCodigoIn"});
   GridContainer.addRefreshingVar({rfrVar:"AV20SnParametro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultabetoneira());
