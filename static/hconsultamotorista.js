/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:12:26.98
*/
gx.evt.autoSkip = false;
gx.define('hconsultamotorista', false, function () {
   this.ServerClass =  "hconsultamotorista" ;
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
      this.AV8EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV13MotoristaCodigoIn=gx.fn.getIntegerValue("vMOTORISTACODIGOIN",'.') ;
      this.AV22SnParametro=gx.fn.getControlValue("vSNPARAMETRO") ;
      this.AV14MotoristaCodigoOut=gx.fn.getIntegerValue("vMOTORISTACODIGOOUT",'.') ;
   };
   this.e182dk2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e112dk2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e122dk2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e132dk2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e142dk2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e152dk2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e162dk2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e202dk2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e222dk1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,31,34,37,39,41,43,45,46,47,48];
   this.GXLastCtrlId =48;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultamotorista",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(11286,24,"MOTORISTACODIGO","","","MotoristaCodigo","int",0,"px",8,8,"right",null,[],11286,"MotoristaCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(11289,25,"MOTORISTANOME","","","MotoristaNome","svchar",0,"px",40,40,"left",null,[],11289,"MotoristaNome",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMOTORISTACODIGO",gxz:"ZV12MotoristaCodigo",gxold:"OV12MotoristaCodigo",gxvar:"AV12MotoristaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12MotoristaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12MotoristaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMOTORISTACODIGO",gx.O.AV12MotoristaCodigo,0)},c2v:function(){gx.O.AV12MotoristaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMOTORISTACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMOTORISTANOME",gxz:"ZV15MotoristaNome",gxold:"OV15MotoristaNome",gxvar:"AV15MotoristaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15MotoristaNome=Value},v2z:function(Value){gx.O.ZV15MotoristaNome=Value},v2c:function(){gx.fn.setControlValue("vMOTORISTANOME",gx.O.AV15MotoristaNome,0)},c2v:function(){gx.O.AV15MotoristaNome=this.val()},val:function(){return gx.fn.getControlValue("vMOTORISTANOME")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MOTORISTACODIGO",gxz:"Z11286MotoristaCodigo",gxold:"O11286MotoristaCodigo",gxvar:"A11286MotoristaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11286MotoristaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11286MotoristaCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MOTORISTACODIGO",row || gx.fn.currentGridRowImpl(23),gx.O.A11286MotoristaCodigo,0)},c2v:function(){gx.O.A11286MotoristaCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MOTORISTACODIGO",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MOTORISTANOME",gxz:"Z11289MotoristaNome",gxold:"O11289MotoristaNome",gxvar:"A11289MotoristaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11289MotoristaNome=Value},v2z:function(Value){gx.O.Z11289MotoristaNome=Value},v2c:function(row){gx.fn.setGridControlValue("MOTORISTANOME",row || gx.fn.currentGridRowImpl(23),gx.O.A11289MotoristaNome,0)},c2v:function(){gx.O.A11289MotoristaNome=this.val()},val:function(row){return gx.fn.getGridControlValue("MOTORISTANOME",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLENAV",grid:0};
   GXValidFnc[34]={fld:"INCLUICLIENTE1",grid:0};
   GXValidFnc[37]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[39]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[41]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[43]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[45]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV19Pagina",gxold:"OV19Pagina",gxvar:"AV19Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV19Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV19Pagina)},c2v:function(){gx.O.AV19Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV20PaginaAux",gxold:"OV20PaginaAux",gxvar:"AV20PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV20PaginaAux,0)},c2v:function(){gx.O.AV20PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV18Orderedby",gxold:"OV18Orderedby",gxvar:"AV18Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV18Orderedby,0)},c2v:function(){gx.O.AV18Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV12MotoristaCodigo = 0 ;
   this.ZV12MotoristaCodigo = 0 ;
   this.OV12MotoristaCodigo = 0 ;
   this.AV15MotoristaNome = "" ;
   this.ZV15MotoristaNome = "" ;
   this.OV15MotoristaNome = "" ;
   this.Z11286MotoristaCodigo = 0 ;
   this.O11286MotoristaCodigo = 0 ;
   this.Z11289MotoristaNome = "" ;
   this.O11289MotoristaNome = "" ;
   this.AV19Pagina = 0 ;
   this.ZV19Pagina = 0 ;
   this.OV19Pagina = 0 ;
   this.AV20PaginaAux = 0 ;
   this.ZV20PaginaAux = 0 ;
   this.OV20PaginaAux = 0 ;
   this.AV18Orderedby = 0 ;
   this.ZV18Orderedby = 0 ;
   this.OV18Orderedby = 0 ;
   this.AV12MotoristaCodigo = 0 ;
   this.AV15MotoristaNome = "" ;
   this.AV19Pagina = 0 ;
   this.AV20PaginaAux = 0 ;
   this.AV18Orderedby = 0 ;
   this.AV14MotoristaCodigoOut = 0 ;
   this.AV13MotoristaCodigoIn = 0 ;
   this.A11285MotoristaEmpresaId = "" ;
   this.A11286MotoristaCodigo = 0 ;
   this.A11289MotoristaNome = "" ;
   this.AV8EmpresaPadrao = "" ;
   this.AV22SnParametro = "" ;
   this.Events = {"e182dk2_client": ["ENTER", true] ,"e112dk2_client": ["'GXM_FIRST'", true] ,"e122dk2_client": ["'GXM_PREVIOUS'", true] ,"e132dk2_client": ["'GXM_NEXT'", true] ,"e142dk2_client": ["'GXM_LAST'", true] ,"e152dk2_client": ["'PROCURAR'", true] ,"e162dk2_client": ["'NOVO'", true] ,"e202dk2_client": ["'ATUALIZAPAGINA'", true] ,"e222dk1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12MotoristaCodigo',fld:'vMOTORISTACODIGO'},{av:'AV15MotoristaNome',fld:'vMOTORISTANOME'},{av:'AV8EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV18Orderedby',fld:'vORDEREDBY'},{av:'AV13MotoristaCodigoIn',fld:'vMOTORISTACODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV12MotoristaCodigo',fld:'vMOTORISTACODIGO'},{av:'AV18Orderedby',fld:'vORDEREDBY'},{av:'AV15MotoristaNome',fld:'vMOTORISTANOME'},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{ctrl:'MOTORISTACODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MOTORISTACODIGO","Title")',ctrl:'MOTORISTACODIGO',prop:'Title'},{av:'AV9Imagem',fld:'vIMAGEM'},{ctrl:'MOTORISTANOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MOTORISTANOME","Title")',ctrl:'MOTORISTANOME',prop:'Title'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'},{av:'AV19Pagina',fld:'vPAGINA'},{av:'AV17NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A11286MotoristaCodigo',fld:'MOTORISTACODIGO'}],[{av:'AV14MotoristaCodigoOut',fld:'vMOTORISTACODIGOOUT'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12MotoristaCodigo',fld:'vMOTORISTACODIGO'},{av:'AV15MotoristaNome',fld:'vMOTORISTANOME'},{av:'AV18Orderedby',fld:'vORDEREDBY'},{av:'AV8EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV13MotoristaCodigoIn',fld:'vMOTORISTACODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12MotoristaCodigo',fld:'vMOTORISTACODIGO'},{av:'AV15MotoristaNome',fld:'vMOTORISTANOME'},{av:'AV18Orderedby',fld:'vORDEREDBY'},{av:'AV8EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV13MotoristaCodigoIn',fld:'vMOTORISTACODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'AV19Pagina',fld:'vPAGINA'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12MotoristaCodigo',fld:'vMOTORISTACODIGO'},{av:'AV15MotoristaNome',fld:'vMOTORISTANOME'},{av:'AV18Orderedby',fld:'vORDEREDBY'},{av:'AV8EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV13MotoristaCodigoIn',fld:'vMOTORISTACODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'AV19Pagina',fld:'vPAGINA'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12MotoristaCodigo',fld:'vMOTORISTACODIGO'},{av:'AV15MotoristaNome',fld:'vMOTORISTANOME'},{av:'AV18Orderedby',fld:'vORDEREDBY'},{av:'AV8EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV13MotoristaCodigoIn',fld:'vMOTORISTACODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12MotoristaCodigo',fld:'vMOTORISTACODIGO'},{av:'AV15MotoristaNome',fld:'vMOTORISTANOME'},{av:'AV18Orderedby',fld:'vORDEREDBY'},{av:'AV8EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV13MotoristaCodigoIn',fld:'vMOTORISTACODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'AV18Orderedby',fld:'vORDEREDBY'},{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12MotoristaCodigo',fld:'vMOTORISTACODIGO'},{av:'AV15MotoristaNome',fld:'vMOTORISTANOME'},{av:'AV18Orderedby',fld:'vORDEREDBY'},{av:'AV8EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV13MotoristaCodigoIn',fld:'vMOTORISTACODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'}],[]];
   this.setVCMap("AV8EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV13MotoristaCodigoIn", "vMOTORISTACODIGOIN", 0, "int");
   this.setVCMap("AV22SnParametro", "vSNPARAMETRO", 0, "char");
   this.setVCMap("AV14MotoristaCodigoOut", "vMOTORISTACODIGOOUT", 0, "int");
   this.setVCMap("AV8EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV13MotoristaCodigoIn", "vMOTORISTACODIGOIN", 0, "int");
   this.setVCMap("AV22SnParametro", "vSNPARAMETRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[48]);
   GridContainer.addRefreshingVar({rfrVar:"AV8EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV13MotoristaCodigoIn"});
   GridContainer.addRefreshingVar({rfrVar:"AV22SnParametro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultamotorista());
