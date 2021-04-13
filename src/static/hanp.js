/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 16:34:23.33
*/
gx.evt.autoSkip = false;
gx.define('hanp', false, function () {
   this.ServerClass =  "hanp" ;
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
      this.AV28SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e1112x2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e1212x2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e2112x2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e2212x2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e2312x2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e1712x2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e1312x2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e1412x2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1512x2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e1612x2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e2412x2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e2512x2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e2612x2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,18,21,24,26,28,30,32,34,37,39,40,44,45,46,47,48,55];
   this.GXLastCtrlId =55;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",43,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hanp",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(7725,44,"ANPCODIGO","","","ANPCodigo","int",0,"px",9,9,"right",null,[],7725,"ANPCodigo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(7722,45,"ANPDESCRICAO","","","ANPDescricao","svchar",0,"px",70,70,"left",null,[],7722,"ANPDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",46,0,"px",17,"px","e2112x2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",47,0,"px",17,"px","e2212x2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",48,0,"px",17,"px","e2312x2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE7",grid:0};
   GXValidFnc[8]={fld:"TABLE6",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:70,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vANPDESCRICAO",gxz:"ZV27ANPDescricao",gxold:"OV27ANPDescricao",gxvar:"AV27ANPDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ANPDescricao=Value},v2z:function(Value){gx.O.ZV27ANPDescricao=Value},v2c:function(){gx.fn.setControlValue("vANPDESCRICAO",gx.O.AV27ANPDescricao,0)},c2v:function(){gx.O.AV27ANPDescricao=this.val()},val:function(){return gx.fn.getControlValue("vANPDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TABLE4",grid:0};
   GXValidFnc[21]={fld:"TABLE3",grid:0};
   GXValidFnc[24]={fld:"IMAGE2",grid:0};
   GXValidFnc[26]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[28]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[30]={fld:"IMAGE1",grid:0};
   GXValidFnc[32]={fld:"BTNHELP",grid:0};
   GXValidFnc[34]={fld:"TABLE5",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ANPCODIGO",gxz:"Z7725ANPCodigo",gxold:"O7725ANPCodigo",gxvar:"A7725ANPCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7725ANPCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7725ANPCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ANPCODIGO",row || gx.fn.currentGridRowImpl(43),gx.O.A7725ANPCodigo,0)},c2v:function(){gx.O.A7725ANPCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ANPCODIGO",row || gx.fn.currentGridRowImpl(43),'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"svchar",len:70,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ANPDESCRICAO",gxz:"Z7722ANPDescricao",gxold:"O7722ANPDescricao",gxvar:"A7722ANPDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7722ANPDescricao=Value},v2z:function(Value){gx.O.Z7722ANPDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("ANPDESCRICAO",row || gx.fn.currentGridRowImpl(43),gx.O.A7722ANPDescricao,0)},c2v:function(){gx.O.A7722ANPDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("ANPDESCRICAO",row || gx.fn.currentGridRowImpl(43))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(43),gx.O.AV7bmpAlt,gx.O.AV34Bmpalt_GXI)},c2v:function(){gx.O.AV34Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(43))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(43))}, gxvar_GXI:'AV34Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(43),gx.O.AV8bmpExc,gx.O.AV35Bmpexc_GXI)},c2v:function(){gx.O.AV35Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(43))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(43))}, gxvar_GXI:'AV35Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(43),gx.O.AV16bmpCon,gx.O.AV36Bmpcon_GXI)},c2v:function(){gx.O.AV36Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(43))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(43))}, gxvar_GXI:'AV36Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27ANPDescricao = "" ;
   this.ZV27ANPDescricao = "" ;
   this.OV27ANPDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z7725ANPCodigo = 0 ;
   this.O7725ANPCodigo = 0 ;
   this.Z7722ANPDescricao = "" ;
   this.O7722ANPDescricao = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27ANPDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A7725ANPCodigo = 0 ;
   this.A7722ANPDescricao = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV28SnRecuperaFiltro = "" ;
   this.Events = {"e1112x2_client": ["'ANTERIOR'", true] ,"e1212x2_client": ["'PROXIMO'", true] ,"e2112x2_client": ["'ALTERAR'", true] ,"e2212x2_client": ["'EXCLUIR'", true] ,"e2312x2_client": ["'CONSULTAR'", true] ,"e1712x2_client": ["VPAGINA.CLICK", true] ,"e1312x2_client": ["'NOVO'", true] ,"e1412x2_client": ["'FECHAR'", true] ,"e1512x2_client": ["'IMPRIMIR'", true] ,"e1612x2_client": ["'PROCURAR'", true] ,"e2412x2_client": ["'ATUALIZAPAGINA'", true] ,"e2512x2_client": ["ENTER", true] ,"e2612x2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ANPDescricao',fld:'vANPDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ANPDescricao',fld:'vANPDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'ANPCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ANPCODIGO","Title")',ctrl:'ANPCODIGO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'ANPDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ANPDESCRICAO","Title")',ctrl:'ANPDESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV27ANPDescricao',fld:'vANPDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ANPDescricao',fld:'vANPDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ANPDescricao',fld:'vANPDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A7725ANPCodigo',fld:'ANPCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27ANPDescricao',fld:'vANPDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A7725ANPCodigo',fld:'ANPCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A7725ANPCodigo',fld:'ANPCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27ANPDescricao',fld:'vANPDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A7725ANPCodigo',fld:'ANPCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A7725ANPCodigo',fld:'ANPCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27ANPDescricao',fld:'vANPDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A7725ANPCodigo',fld:'ANPCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ANPDescricao',fld:'vANPDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV32Pgmname',fld:'vPGMNAME'}],[{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV29QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ANPDescricao',fld:'vANPDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ANPDescricao',fld:'vANPDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setVCMap("AV28SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV28SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[55]);
   GridContainer.addRefreshingVar({rfrVar:"AV28SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hanp());
