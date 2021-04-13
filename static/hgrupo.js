/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:51:7.79
*/
gx.evt.autoSkip = false;
gx.define('hgrupo', false, function () {
   this.ServerClass =  "hgrupo" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV28SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e11262_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12262_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e19262_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e20262_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e21262_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e15262_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13262_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14262_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e22262_client=function()
   {
      this.executeServerEvent("'ATUALIZAR'", true, arguments[0], false, false);
   };
   this.e23262_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e24262_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e25262_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,19,22,24,25,29,30,31,32,33,34,35,42];
   this.GXLastCtrlId =42;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hgrupo",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(244,29,"GRUPOID","","","GrupoId","int",0,"px",7,7,"right",null,[],244,"GrupoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(243,30,"GRUPONOME","","","GrupoNome","svchar",0,"px",40,40,"left",null,[],243,"GrupoNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmppro","vBMPPRO",31,0,"px",17,"px",null,"","Programas","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpmen","vBMPMEN",32,0,"px",17,"px",null,"","Menu","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",33,0,"px",17,"px","e19262_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",34,0,"px",17,"px","e20262_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",35,0,"px",17,"px","e21262_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TABLE5",grid:0};
   GXValidFnc[11]={fld:"IMAGE2",grid:0};
   GXValidFnc[13]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[15]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[17]={fld:"BTNHELP",grid:0};
   GXValidFnc[19]={fld:"TABLE3",grid:0};
   GXValidFnc[22]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV7Pagina",gxold:"OV7Pagina",gxvar:"AV7Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV7Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV7Pagina)},c2v:function(){gx.O.AV7Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV8PaginaAux",gxold:"OV8PaginaAux",gxvar:"AV8PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV8PaginaAux,0)},c2v:function(){gx.O.AV8PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOID",gxz:"Z244GrupoId",gxold:"O244GrupoId",gxvar:"A244GrupoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A244GrupoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z244GrupoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("GRUPOID",row || gx.fn.currentGridRowImpl(28),gx.O.A244GrupoId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A244GrupoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("GRUPOID",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRUPONOME",gxz:"Z243GrupoNome",gxold:"O243GrupoNome",gxvar:"A243GrupoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A243GrupoNome=Value},v2z:function(Value){gx.O.Z243GrupoNome=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPONOME",row || gx.fn.currentGridRowImpl(28),gx.O.A243GrupoNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A243GrupoNome=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPONOME",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPRO",gxz:"ZV21bmpPro",gxold:"OV21bmpPro",gxvar:"AV21bmpPro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV21bmpPro=Value},v2z:function(Value){gx.O.ZV21bmpPro=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPRO",row || gx.fn.currentGridRowImpl(28),gx.O.AV21bmpPro,gx.O.AV36Bmppro_GXI)},c2v:function(){gx.O.AV36Bmppro_GXI=this.val_GXI();gx.O.AV21bmpPro=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPRO",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPRO_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV36Bmppro_GXI',nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPMEN",gxz:"ZV22bmpMen",gxold:"OV22bmpMen",gxvar:"AV22bmpMen",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV22bmpMen=Value},v2z:function(Value){gx.O.ZV22bmpMen=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPMEN",row || gx.fn.currentGridRowImpl(28),gx.O.AV22bmpMen,gx.O.AV37Bmpmen_GXI)},c2v:function(){gx.O.AV37Bmpmen_GXI=this.val_GXI();gx.O.AV22bmpMen=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPMEN",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPMEN_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV37Bmpmen_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV9bmpAlt",gxold:"OV9bmpAlt",gxvar:"AV9bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV9bmpAlt=Value},v2z:function(Value){gx.O.ZV9bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(28),gx.O.AV9bmpAlt,gx.O.AV33Bmpalt_GXI)},c2v:function(){gx.O.AV33Bmpalt_GXI=this.val_GXI();gx.O.AV9bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV33Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV10bmpExc",gxold:"OV10bmpExc",gxvar:"AV10bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV10bmpExc=Value},v2z:function(Value){gx.O.ZV10bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(28),gx.O.AV10bmpExc,gx.O.AV34Bmpexc_GXI)},c2v:function(){gx.O.AV34Bmpexc_GXI=this.val_GXI();gx.O.AV10bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV34Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV20bmpCon",gxold:"OV20bmpCon",gxvar:"AV20bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV20bmpCon=Value},v2z:function(Value){gx.O.ZV20bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(28),gx.O.AV20bmpCon,gx.O.AV35Bmpcon_GXI)},c2v:function(){gx.O.AV35Bmpcon_GXI=this.val_GXI();gx.O.AV20bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV35Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV15OrderedBy",gxold:"OV15OrderedBy",gxvar:"AV15OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV15OrderedBy,0)},c2v:function(){gx.O.AV15OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV7Pagina = 0 ;
   this.ZV7Pagina = 0 ;
   this.OV7Pagina = 0 ;
   this.AV8PaginaAux = 0 ;
   this.ZV8PaginaAux = 0 ;
   this.OV8PaginaAux = 0 ;
   this.Z244GrupoId = 0 ;
   this.O244GrupoId = 0 ;
   this.Z243GrupoNome = "" ;
   this.O243GrupoNome = "" ;
   this.ZV21bmpPro = "" ;
   this.OV21bmpPro = "" ;
   this.ZV22bmpMen = "" ;
   this.OV22bmpMen = "" ;
   this.ZV9bmpAlt = "" ;
   this.OV9bmpAlt = "" ;
   this.ZV10bmpExc = "" ;
   this.OV10bmpExc = "" ;
   this.ZV20bmpCon = "" ;
   this.OV20bmpCon = "" ;
   this.AV15OrderedBy = 0 ;
   this.ZV15OrderedBy = 0 ;
   this.OV15OrderedBy = 0 ;
   this.AV7Pagina = 0 ;
   this.AV8PaginaAux = 0 ;
   this.AV15OrderedBy = 0 ;
   this.A244GrupoId = 0 ;
   this.A243GrupoNome = "" ;
   this.AV21bmpPro = "" ;
   this.AV22bmpMen = "" ;
   this.AV9bmpAlt = "" ;
   this.AV10bmpExc = "" ;
   this.AV20bmpCon = "" ;
   this.AV28SnRecuperaFiltro = "" ;
   this.Events = {"e11262_client": ["'ANTERIOR'", true] ,"e12262_client": ["'PROXIMO'", true] ,"e19262_client": ["'ALTERAR'", true] ,"e20262_client": ["'EXCLUIR'", true] ,"e21262_client": ["'CONSULTAR'", true] ,"e15262_client": ["VPAGINA.CLICK", true] ,"e13262_client": ["'NOVO'", true] ,"e14262_client": ["'FECHAR'", true] ,"e22262_client": ["'ATUALIZAR'", true] ,"e23262_client": ["'ATUALIZAPAGINA'", true] ,"e24262_client": ["ENTER", true] ,"e25262_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15OrderedBy',fld:'vORDEREDBY'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A244GrupoId',fld:'GRUPOID'},{av:'A243GrupoNome',fld:'GRUPONOME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15OrderedBy',fld:'vORDEREDBY'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A244GrupoId',fld:'GRUPOID'},{av:'A243GrupoNome',fld:'GRUPONOME'}],[{ctrl:'GRUPOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GRUPOID","Title")',ctrl:'GRUPOID',prop:'Title'},{av:'AV16Imagem',fld:'vIMAGEM'},{ctrl:'GRUPONOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GRUPONOME","Title")',ctrl:'GRUPONOME',prop:'Title'},{av:'AV8PaginaAux',fld:'vPAGINAAUX'},{av:'AV7Pagina',fld:'vPAGINA'},{av:'AV14NumPagina',fld:'vNUMPAGINA'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV27filtros',fld:'vFILTROS'},{av:'AV15OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15OrderedBy',fld:'vORDEREDBY'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A244GrupoId',fld:'GRUPOID'},{av:'A243GrupoNome',fld:'GRUPONOME'},{av:'AV7Pagina',fld:'vPAGINA'}],[{av:'AV7Pagina',fld:'vPAGINA'},{av:'AV27filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15OrderedBy',fld:'vORDEREDBY'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A244GrupoId',fld:'GRUPOID'},{av:'A243GrupoNome',fld:'GRUPONOME'},{av:'AV7Pagina',fld:'vPAGINA'},{av:'AV8PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV7Pagina',fld:'vPAGINA'},{av:'AV27filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A244GrupoId',fld:'GRUPOID'},{av:'A243GrupoNome',fld:'GRUPONOME'}],[{av:'AV9bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPALT","Link")',ctrl:'vBMPALT',prop:'Link'},{av:'AV10bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Link")',ctrl:'vBMPEXC',prop:'Link'},{av:'AV20bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPCON","Link")',ctrl:'vBMPCON',prop:'Link'},{av:'AV21bmpPro',fld:'vBMPPRO'},{av:'gx.fn.getCtrlProperty("vBMPPRO","Tooltiptext")',ctrl:'vBMPPRO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPPRO","Link")',ctrl:'vBMPPRO',prop:'Link'},{av:'AV22bmpMen',fld:'vBMPMEN'},{av:'gx.fn.getCtrlProperty("vBMPMEN","Tooltiptext")',ctrl:'vBMPMEN',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPMEN","Link")',ctrl:'vBMPMEN',prop:'Link'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A244GrupoId',fld:'GRUPOID'},{av:'AV7Pagina',fld:'vPAGINA'},{av:'AV15OrderedBy',fld:'vORDEREDBY'}],[{av:'A244GrupoId',fld:'GRUPOID'},{av:'AV27filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A244GrupoId',fld:'GRUPOID'},{av:'AV7Pagina',fld:'vPAGINA'},{av:'AV15OrderedBy',fld:'vORDEREDBY'}],[{av:'A244GrupoId',fld:'GRUPOID'},{av:'AV27filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A244GrupoId',fld:'GRUPOID'},{av:'AV7Pagina',fld:'vPAGINA'},{av:'AV15OrderedBy',fld:'vORDEREDBY'}],[{av:'A244GrupoId',fld:'GRUPOID'},{av:'AV27filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15OrderedBy',fld:'vORDEREDBY'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A244GrupoId',fld:'GRUPOID'},{av:'A243GrupoNome',fld:'GRUPONOME'},{av:'AV7Pagina',fld:'vPAGINA'}],[{av:'AV27filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'ATUALIZAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15OrderedBy',fld:'vORDEREDBY'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A244GrupoId',fld:'GRUPOID'},{av:'A243GrupoNome',fld:'GRUPONOME'},{av:'AV7Pagina',fld:'vPAGINA'}],[{av:'AV7Pagina',fld:'vPAGINA'},{av:'AV27filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15OrderedBy',fld:'vORDEREDBY'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A244GrupoId',fld:'GRUPOID'},{av:'A243GrupoNome',fld:'GRUPONOME'}],[]];
   this.setVCMap("AV28SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV28SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[42]);
   GridContainer.addRefreshingVar({rfrVar:"AV28SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A244GrupoId", rfrProp:"Value", gxAttId:"244"});
   GridContainer.addRefreshingVar({rfrVar:"A243GrupoNome", rfrProp:"Value", gxAttId:"243"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hgrupo());
