/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:0:25.68
*/
gx.evt.autoSkip = false;
gx.define('hconsultaajustefiscal', false, function () {
   this.ServerClass =  "hconsultaajustefiscal" ;
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
      this.AV16AjusteFiscalCodigo=gx.fn.getControlValue("vAJUSTEFISCALCODIGO") ;
      this.AV19AjusteFiscalCodigoIn=gx.fn.getControlValue("vAJUSTEFISCALCODIGOIN") ;
   };
   this.e18vw2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11vw2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12vw2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13vw2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14vw2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15vw2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e16vw2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e20vw2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e22vw1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,31,34,37,39,41,43,45,46,47,48,49];
   this.GXLastCtrlId =49;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaajustefiscal",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(5483,24,"AJUSTEFISCALCODIGO","","","AjusteFiscalCodigo","char",0,"px",10,10,"left",null,[],5483,"AjusteFiscalCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5479,25,"AJUSTEFISCALDESCRICAO","","","AjusteFiscalDescricao","svchar",0,"px",70,70,"left",null,[],5479,"AjusteFiscalDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vAJUSTEFISCALCODIGOFILTRO",gxz:"ZV17AjusteFiscalCodigoFiltro",gxold:"OV17AjusteFiscalCodigoFiltro",gxvar:"AV17AjusteFiscalCodigoFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AjusteFiscalCodigoFiltro=Value},v2z:function(Value){gx.O.ZV17AjusteFiscalCodigoFiltro=Value},v2c:function(){gx.fn.setControlValue("vAJUSTEFISCALCODIGOFILTRO",gx.O.AV17AjusteFiscalCodigoFiltro,0)},c2v:function(){gx.O.AV17AjusteFiscalCodigoFiltro=this.val()},val:function(){return gx.fn.getControlValue("vAJUSTEFISCALCODIGOFILTRO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:70,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vAJUSTEFISCALDESCRICAOFILTRO",gxz:"ZV18AjusteFiscalDescricaoFiltro",gxold:"OV18AjusteFiscalDescricaoFiltro",gxvar:"AV18AjusteFiscalDescricaoFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18AjusteFiscalDescricaoFiltro=Value},v2z:function(Value){gx.O.ZV18AjusteFiscalDescricaoFiltro=Value},v2c:function(){gx.fn.setControlValue("vAJUSTEFISCALDESCRICAOFILTRO",gx.O.AV18AjusteFiscalDescricaoFiltro,0)},c2v:function(){gx.O.AV18AjusteFiscalDescricaoFiltro=this.val()},val:function(){return gx.fn.getControlValue("vAJUSTEFISCALDESCRICAOFILTRO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"AJUSTEFISCALCODIGO",gxz:"Z5483AjusteFiscalCodigo",gxold:"O5483AjusteFiscalCodigo",gxvar:"A5483AjusteFiscalCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5483AjusteFiscalCodigo=Value},v2z:function(Value){gx.O.Z5483AjusteFiscalCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("AJUSTEFISCALCODIGO",row || gx.fn.currentGridRowImpl(23),gx.O.A5483AjusteFiscalCodigo,0)},c2v:function(){gx.O.A5483AjusteFiscalCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("AJUSTEFISCALCODIGO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:70,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"AJUSTEFISCALDESCRICAO",gxz:"Z5479AjusteFiscalDescricao",gxold:"O5479AjusteFiscalDescricao",gxvar:"A5479AjusteFiscalDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5479AjusteFiscalDescricao=Value},v2z:function(Value){gx.O.Z5479AjusteFiscalDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("AJUSTEFISCALDESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A5479AjusteFiscalDescricao,0)},c2v:function(){gx.O.A5479AjusteFiscalDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("AJUSTEFISCALDESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLENAV",grid:0};
   GXValidFnc[34]={fld:"BTNADICIONAR",grid:0};
   GXValidFnc[37]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[39]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[41]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[43]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[45]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV22PaginaAux",gxold:"OV22PaginaAux",gxvar:"AV22PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV22PaginaAux,0)},c2v:function(){gx.O.AV22PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV21Pagina",gxold:"OV21Pagina",gxvar:"AV21Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV21Pagina)},c2v:function(){gx.O.AV21Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"JS", format:2,grid:0};
   this.AV17AjusteFiscalCodigoFiltro = "" ;
   this.ZV17AjusteFiscalCodigoFiltro = "" ;
   this.OV17AjusteFiscalCodigoFiltro = "" ;
   this.AV18AjusteFiscalDescricaoFiltro = "" ;
   this.ZV18AjusteFiscalDescricaoFiltro = "" ;
   this.OV18AjusteFiscalDescricaoFiltro = "" ;
   this.Z5483AjusteFiscalCodigo = "" ;
   this.O5483AjusteFiscalCodigo = "" ;
   this.Z5479AjusteFiscalDescricao = "" ;
   this.O5479AjusteFiscalDescricao = "" ;
   this.AV22PaginaAux = 0 ;
   this.ZV22PaginaAux = 0 ;
   this.OV22PaginaAux = 0 ;
   this.AV21Pagina = 0 ;
   this.ZV21Pagina = 0 ;
   this.OV21Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV17AjusteFiscalCodigoFiltro = "" ;
   this.AV18AjusteFiscalDescricaoFiltro = "" ;
   this.AV22PaginaAux = 0 ;
   this.AV21Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV16AjusteFiscalCodigo = "" ;
   this.AV19AjusteFiscalCodigoIn = "" ;
   this.A5483AjusteFiscalCodigo = "" ;
   this.A5479AjusteFiscalDescricao = "" ;
   this.Events = {"e18vw2_client": ["ENTER", true] ,"e11vw2_client": ["'GXM_FIRST'", true] ,"e12vw2_client": ["'GXM_PREVIOUS'", true] ,"e13vw2_client": ["'GXM_NEXT'", true] ,"e14vw2_client": ["'GXM_LAST'", true] ,"e15vw2_client": ["'PROCURAR'", true] ,"e16vw2_client": ["'NOVO'", true] ,"e20vw2_client": ["'ATUALIZAPAGINA'", true] ,"e22vw1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17AjusteFiscalCodigoFiltro',fld:'vAJUSTEFISCALCODIGOFILTRO'},{av:'AV18AjusteFiscalDescricaoFiltro',fld:'vAJUSTEFISCALDESCRICAOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'AJUSTEFISCALCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("AJUSTEFISCALCODIGO","Title")',ctrl:'AJUSTEFISCALCODIGO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'AJUSTEFISCALDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("AJUSTEFISCALDESCRICAO","Title")',ctrl:'AJUSTEFISCALDESCRICAO',prop:'Title'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'},{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV20NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A5483AjusteFiscalCodigo',fld:'AJUSTEFISCALCODIGO'}],[{av:'AV16AjusteFiscalCodigo',fld:'vAJUSTEFISCALCODIGO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17AjusteFiscalCodigoFiltro',fld:'vAJUSTEFISCALCODIGOFILTRO'},{av:'AV18AjusteFiscalDescricaoFiltro',fld:'vAJUSTEFISCALDESCRICAOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17AjusteFiscalCodigoFiltro',fld:'vAJUSTEFISCALCODIGOFILTRO'},{av:'AV18AjusteFiscalDescricaoFiltro',fld:'vAJUSTEFISCALDESCRICAOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21Pagina',fld:'vPAGINA'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17AjusteFiscalCodigoFiltro',fld:'vAJUSTEFISCALCODIGOFILTRO'},{av:'AV18AjusteFiscalDescricaoFiltro',fld:'vAJUSTEFISCALDESCRICAOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17AjusteFiscalCodigoFiltro',fld:'vAJUSTEFISCALCODIGOFILTRO'},{av:'AV18AjusteFiscalDescricaoFiltro',fld:'vAJUSTEFISCALDESCRICAOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17AjusteFiscalCodigoFiltro',fld:'vAJUSTEFISCALCODIGOFILTRO'},{av:'AV18AjusteFiscalDescricaoFiltro',fld:'vAJUSTEFISCALDESCRICAOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17AjusteFiscalCodigoFiltro',fld:'vAJUSTEFISCALCODIGOFILTRO'},{av:'AV18AjusteFiscalDescricaoFiltro',fld:'vAJUSTEFISCALDESCRICAOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[]];
   this.setVCMap("AV16AjusteFiscalCodigo", "vAJUSTEFISCALCODIGO", 0, "char");
   this.setVCMap("AV19AjusteFiscalCodigoIn", "vAJUSTEFISCALCODIGOIN", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[48]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaajustefiscal());
