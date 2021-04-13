/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:12:29.52
*/
gx.evt.autoSkip = false;
gx.define('hmotorista', false, function () {
   this.ServerClass =  "hmotorista" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("10", "'IMPRIMIR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV9EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV27SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV33Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.e112dl2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e122dl2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e172dl2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e132dl2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e142dl2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e152dl2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e162dl2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e202dl2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e212dl2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e222dl2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e232dl2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e252dl2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e262dl2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,39,42,44,45,49,50,51,52,53,54,61];
   this.GXLastCtrlId =61;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",48,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmotorista",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(11286,49,"MOTORISTACODIGO","","","MotoristaCodigo","int",0,"px",8,8,"right",null,[],11286,"MotoristaCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(11289,50,"MOTORISTANOME","","","MotoristaNome","svchar",0,"px",40,40,"left",null,[],11289,"MotoristaNome",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(11285,51,"MOTORISTAEMPRESAID","Motorista Empresa Id","","MotoristaEmpresaId","char",0,"px",10,10,"left",null,[],11285,"MotoristaEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",52,0,"px",17,"px","e202dl2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",53,0,"px",17,"px","e212dl2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",54,0,"px",17,"px","e222dl2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE7",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMOTORISTACODIGO",gxz:"ZV16MotoristaCodigo",gxold:"OV16MotoristaCodigo",gxvar:"AV16MotoristaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16MotoristaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16MotoristaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMOTORISTACODIGO",gx.O.AV16MotoristaCodigo,0)},c2v:function(){gx.O.AV16MotoristaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMOTORISTACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMOTORISTANOME",gxz:"ZV17MotoristaNome",gxold:"OV17MotoristaNome",gxvar:"AV17MotoristaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17MotoristaNome=Value},v2z:function(Value){gx.O.ZV17MotoristaNome=Value},v2c:function(){gx.fn.setControlValue("vMOTORISTANOME",gx.O.AV17MotoristaNome,0)},c2v:function(){gx.O.AV17MotoristaNome=this.val()},val:function(){return gx.fn.getControlValue("vMOTORISTANOME")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE1",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"IMAGE1",grid:0};
   GXValidFnc[37]={fld:"BTNHELP",grid:0};
   GXValidFnc[39]={fld:"TABLE5",grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV24Pagina",gxold:"OV24Pagina",gxvar:"AV24Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV24Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV24Pagina)},c2v:function(){gx.O.AV24Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV25PaginaAux",gxold:"OV25PaginaAux",gxvar:"AV25PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV25PaginaAux,0)},c2v:function(){gx.O.AV25PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MOTORISTACODIGO",gxz:"Z11286MotoristaCodigo",gxold:"O11286MotoristaCodigo",gxvar:"A11286MotoristaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11286MotoristaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11286MotoristaCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MOTORISTACODIGO",row || gx.fn.currentGridRowImpl(48),gx.O.A11286MotoristaCodigo,0)},c2v:function(){gx.O.A11286MotoristaCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MOTORISTACODIGO",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MOTORISTANOME",gxz:"Z11289MotoristaNome",gxold:"O11289MotoristaNome",gxvar:"A11289MotoristaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11289MotoristaNome=Value},v2z:function(Value){gx.O.Z11289MotoristaNome=Value},v2c:function(row){gx.fn.setGridControlValue("MOTORISTANOME",row || gx.fn.currentGridRowImpl(48),gx.O.A11289MotoristaNome,0)},c2v:function(){gx.O.A11289MotoristaNome=this.val()},val:function(row){return gx.fn.getGridControlValue("MOTORISTANOME",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MOTORISTAEMPRESAID",gxz:"Z11285MotoristaEmpresaId",gxold:"O11285MotoristaEmpresaId",gxvar:"A11285MotoristaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11285MotoristaEmpresaId=Value},v2z:function(Value){gx.O.Z11285MotoristaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("MOTORISTAEMPRESAID",row || gx.fn.currentGridRowImpl(48),gx.O.A11285MotoristaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11285MotoristaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("MOTORISTAEMPRESAID",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV5bmpAlt",gxold:"OV5bmpAlt",gxvar:"AV5bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5bmpAlt=Value},v2z:function(Value){gx.O.ZV5bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(48),gx.O.AV5bmpAlt,gx.O.AV35Bmpalt_GXI)},c2v:function(){gx.O.AV35Bmpalt_GXI=this.val_GXI();gx.O.AV5bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV35Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV7bmpExc",gxold:"OV7bmpExc",gxvar:"AV7bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpExc=Value},v2z:function(Value){gx.O.ZV7bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48),gx.O.AV7bmpExc,gx.O.AV36Bmpexc_GXI)},c2v:function(){gx.O.AV36Bmpexc_GXI=this.val_GXI();gx.O.AV7bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV36Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV6bmpCon",gxold:"OV6bmpCon",gxvar:"AV6bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV6bmpCon=Value},v2z:function(Value){gx.O.ZV6bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(48),gx.O.AV6bmpCon,gx.O.AV37Bmpcon_GXI)},c2v:function(){gx.O.AV37Bmpcon_GXI=this.val_GXI();gx.O.AV6bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV37Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV23OrderedBy",gxold:"OV23OrderedBy",gxvar:"AV23OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV23OrderedBy,0)},c2v:function(){gx.O.AV23OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16MotoristaCodigo = 0 ;
   this.ZV16MotoristaCodigo = 0 ;
   this.OV16MotoristaCodigo = 0 ;
   this.AV17MotoristaNome = "" ;
   this.ZV17MotoristaNome = "" ;
   this.OV17MotoristaNome = "" ;
   this.AV24Pagina = 0 ;
   this.ZV24Pagina = 0 ;
   this.OV24Pagina = 0 ;
   this.AV25PaginaAux = 0 ;
   this.ZV25PaginaAux = 0 ;
   this.OV25PaginaAux = 0 ;
   this.Z11286MotoristaCodigo = 0 ;
   this.O11286MotoristaCodigo = 0 ;
   this.Z11289MotoristaNome = "" ;
   this.O11289MotoristaNome = "" ;
   this.Z11285MotoristaEmpresaId = "" ;
   this.O11285MotoristaEmpresaId = "" ;
   this.ZV5bmpAlt = "" ;
   this.OV5bmpAlt = "" ;
   this.ZV7bmpExc = "" ;
   this.OV7bmpExc = "" ;
   this.ZV6bmpCon = "" ;
   this.OV6bmpCon = "" ;
   this.AV23OrderedBy = 0 ;
   this.ZV23OrderedBy = 0 ;
   this.OV23OrderedBy = 0 ;
   this.AV16MotoristaCodigo = 0 ;
   this.AV17MotoristaNome = "" ;
   this.AV24Pagina = 0 ;
   this.AV25PaginaAux = 0 ;
   this.AV23OrderedBy = 0 ;
   this.A11286MotoristaCodigo = 0 ;
   this.A11289MotoristaNome = "" ;
   this.A11285MotoristaEmpresaId = "" ;
   this.AV5bmpAlt = "" ;
   this.AV7bmpExc = "" ;
   this.AV6bmpCon = "" ;
   this.AV9EmpresaPadrao = "" ;
   this.AV27SnRecuperaFiltro = "" ;
   this.AV33Pgmname = "" ;
   this.Events = {"e112dl2_client": ["'ANTERIOR'", true] ,"e122dl2_client": ["'PROXIMO'", true] ,"e172dl2_client": ["VPAGINA.CLICK", true] ,"e132dl2_client": ["'NOVO'", true] ,"e142dl2_client": ["'FECHAR'", true] ,"e152dl2_client": ["'IMPRIMIR'", true] ,"e162dl2_client": ["'PROCURAR'", true] ,"e202dl2_client": ["'ALTERAR'", true] ,"e212dl2_client": ["'EXCLUIR'", true] ,"e222dl2_client": ["'CONSULTAR'", true] ,"e232dl2_client": ["'ATUALIZAPAGINA'", true] ,"e252dl2_client": ["ENTER", true] ,"e262dl2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16MotoristaCodigo',fld:'vMOTORISTACODIGO'},{av:'AV17MotoristaNome',fld:'vMOTORISTANOME'},{av:'AV23OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV33Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16MotoristaCodigo',fld:'vMOTORISTACODIGO'},{av:'AV17MotoristaNome',fld:'vMOTORISTANOME'},{av:'AV23OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV33Pgmname',fld:'vPGMNAME'}],[{ctrl:'MOTORISTACODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MOTORISTACODIGO","Title")',ctrl:'MOTORISTACODIGO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'MOTORISTANOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MOTORISTANOME","Title")',ctrl:'MOTORISTANOME',prop:'Title'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV21NumPagina',fld:'vNUMPAGINA'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV10filtros',fld:'vFILTROS'},{av:'AV16MotoristaCodigo',fld:'vMOTORISTACODIGO'},{av:'AV17MotoristaNome',fld:'vMOTORISTANOME'},{av:'AV23OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16MotoristaCodigo',fld:'vMOTORISTACODIGO'},{av:'AV17MotoristaNome',fld:'vMOTORISTANOME'},{av:'AV23OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV33Pgmname',fld:'vPGMNAME'},{av:'AV24Pagina',fld:'vPAGINA'}],[{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16MotoristaCodigo',fld:'vMOTORISTACODIGO'},{av:'AV17MotoristaNome',fld:'vMOTORISTANOME'},{av:'AV23OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV33Pgmname',fld:'vPGMNAME'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16MotoristaCodigo',fld:'vMOTORISTACODIGO'},{av:'AV17MotoristaNome',fld:'vMOTORISTANOME'},{av:'AV23OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV33Pgmname',fld:'vPGMNAME'},{av:'AV24Pagina',fld:'vPAGINA'}],[{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV16MotoristaCodigo',fld:'vMOTORISTACODIGO'},{av:'AV17MotoristaNome',fld:'vMOTORISTANOME'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV23OrderedBy',fld:'vORDEREDBY'},{av:'AV33Pgmname',fld:'vPGMNAME'}],[{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV33Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV33Pgmname',fld:'vPGMNAME'},{av:'AV34Pgmdesc',fld:'vPGMDESC'}],[{av:'AV22OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV20NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV19NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV30QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16MotoristaCodigo',fld:'vMOTORISTACODIGO'},{av:'AV17MotoristaNome',fld:'vMOTORISTANOME'},{av:'AV23OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV33Pgmname',fld:'vPGMNAME'},{av:'AV24Pagina',fld:'vPAGINA'}],[{av:'AV23OrderedBy',fld:'vORDEREDBY'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A11286MotoristaCodigo',fld:'MOTORISTACODIGO'},{av:'AV16MotoristaCodigo',fld:'vMOTORISTACODIGO'},{av:'AV17MotoristaNome',fld:'vMOTORISTANOME'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV23OrderedBy',fld:'vORDEREDBY'},{av:'AV33Pgmname',fld:'vPGMNAME'}],[{av:'A11286MotoristaCodigo',fld:'MOTORISTACODIGO'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A11286MotoristaCodigo',fld:'MOTORISTACODIGO'},{av:'AV16MotoristaCodigo',fld:'vMOTORISTACODIGO'},{av:'AV17MotoristaNome',fld:'vMOTORISTANOME'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV23OrderedBy',fld:'vORDEREDBY'},{av:'AV33Pgmname',fld:'vPGMNAME'}],[{av:'A11286MotoristaCodigo',fld:'MOTORISTACODIGO'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A11286MotoristaCodigo',fld:'MOTORISTACODIGO'},{av:'AV16MotoristaCodigo',fld:'vMOTORISTACODIGO'},{av:'AV17MotoristaNome',fld:'vMOTORISTANOME'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV23OrderedBy',fld:'vORDEREDBY'},{av:'AV33Pgmname',fld:'vPGMNAME'}],[{av:'A11286MotoristaCodigo',fld:'MOTORISTACODIGO'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16MotoristaCodigo',fld:'vMOTORISTACODIGO'},{av:'AV17MotoristaNome',fld:'vMOTORISTANOME'},{av:'AV23OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV33Pgmname',fld:'vPGMNAME'}],[]];
   this.setVCMap("AV9EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV27SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV33Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV9EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV27SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV33Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[61]);
   GridContainer.addRefreshingVar({rfrVar:"AV9EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV5bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV5bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV6bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV6bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV27SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV33Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmotorista());
