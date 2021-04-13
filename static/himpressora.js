/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:51:28.60
*/
gx.evt.autoSkip = false;
gx.define('himpressora', false, function () {
   this.ServerClass =  "himpressora" ;
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
      this.AV23SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e112f2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e122f2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e192f2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e202f2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e212f2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e152f2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e132f2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e142f2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e222f2_client=function()
   {
      this.executeServerEvent("'ATUALIZAR'", true, arguments[0], false, false);
   };
   this.e232f2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e242f2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e252f2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,19,22,24,25,29,30,31,32,33,40];
   this.GXLastCtrlId =40;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"himpressora",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(198,29,"IMPRESSORAID","","","ImpressoraId","int",0,"px",7,7,"right",null,[],198,"ImpressoraId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(285,30,"IMPRESSORANOME","","","ImpressoraNome","svchar",0,"px",60,60,"left",null,[],285,"ImpressoraNome",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",31,0,"px",17,"px","e192f2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",32,0,"px",17,"px","e202f2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",33,0,"px",17,"px","e212f2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"IMAGE2",grid:0};
   GXValidFnc[13]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[15]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[17]={fld:"BTNHELP",grid:0};
   GXValidFnc[19]={fld:"TABLE5",grid:0};
   GXValidFnc[22]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV7Pagina",gxold:"OV7Pagina",gxvar:"AV7Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV7Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV7Pagina)},c2v:function(){gx.O.AV7Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV8PaginaAux",gxold:"OV8PaginaAux",gxvar:"AV8PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV8PaginaAux,0)},c2v:function(){gx.O.AV8PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAID",gxz:"Z198ImpressoraId",gxold:"O198ImpressoraId",gxvar:"A198ImpressoraId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A198ImpressoraId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z198ImpressoraId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("IMPRESSORAID",row || gx.fn.currentGridRowImpl(28),gx.O.A198ImpressoraId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A198ImpressoraId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("IMPRESSORAID",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORANOME",gxz:"Z285ImpressoraNome",gxold:"O285ImpressoraNome",gxvar:"A285ImpressoraNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A285ImpressoraNome=Value},v2z:function(Value){gx.O.Z285ImpressoraNome=Value},v2c:function(row){gx.fn.setGridControlValue("IMPRESSORANOME",row || gx.fn.currentGridRowImpl(28),gx.O.A285ImpressoraNome,0)},c2v:function(){gx.O.A285ImpressoraNome=this.val()},val:function(row){return gx.fn.getGridControlValue("IMPRESSORANOME",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV9bmpAlt",gxold:"OV9bmpAlt",gxvar:"AV9bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV9bmpAlt=Value},v2z:function(Value){gx.O.ZV9bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(28),gx.O.AV9bmpAlt,gx.O.AV28Bmpalt_GXI)},c2v:function(){gx.O.AV28Bmpalt_GXI=this.val_GXI();gx.O.AV9bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV28Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV10bmpExc",gxold:"OV10bmpExc",gxvar:"AV10bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV10bmpExc=Value},v2z:function(Value){gx.O.ZV10bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(28),gx.O.AV10bmpExc,gx.O.AV29Bmpexc_GXI)},c2v:function(){gx.O.AV29Bmpexc_GXI=this.val_GXI();gx.O.AV10bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV29Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV18bmpCon",gxold:"OV18bmpCon",gxvar:"AV18bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV18bmpCon=Value},v2z:function(Value){gx.O.ZV18bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(28),gx.O.AV18bmpCon,gx.O.AV30Bmpcon_GXI)},c2v:function(){gx.O.AV30Bmpcon_GXI=this.val_GXI();gx.O.AV18bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV30Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV13OrderedBy",gxold:"OV13OrderedBy",gxvar:"AV13OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV13OrderedBy,0)},c2v:function(){gx.O.AV13OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV7Pagina = 0 ;
   this.ZV7Pagina = 0 ;
   this.OV7Pagina = 0 ;
   this.AV8PaginaAux = 0 ;
   this.ZV8PaginaAux = 0 ;
   this.OV8PaginaAux = 0 ;
   this.Z198ImpressoraId = 0 ;
   this.O198ImpressoraId = 0 ;
   this.Z285ImpressoraNome = "" ;
   this.O285ImpressoraNome = "" ;
   this.ZV9bmpAlt = "" ;
   this.OV9bmpAlt = "" ;
   this.ZV10bmpExc = "" ;
   this.OV10bmpExc = "" ;
   this.ZV18bmpCon = "" ;
   this.OV18bmpCon = "" ;
   this.AV13OrderedBy = 0 ;
   this.ZV13OrderedBy = 0 ;
   this.OV13OrderedBy = 0 ;
   this.AV7Pagina = 0 ;
   this.AV8PaginaAux = 0 ;
   this.AV13OrderedBy = 0 ;
   this.A198ImpressoraId = 0 ;
   this.A285ImpressoraNome = "" ;
   this.AV9bmpAlt = "" ;
   this.AV10bmpExc = "" ;
   this.AV18bmpCon = "" ;
   this.AV23SnRecuperaFiltro = "" ;
   this.Events = {"e112f2_client": ["'ANTERIOR'", true] ,"e122f2_client": ["'PROXIMO'", true] ,"e192f2_client": ["'ALTERAR'", true] ,"e202f2_client": ["'EXCLUIR'", true] ,"e212f2_client": ["'CONSULTAR'", true] ,"e152f2_client": ["VPAGINA.CLICK", true] ,"e132f2_client": ["'NOVO'", true] ,"e142f2_client": ["'FECHAR'", true] ,"e222f2_client": ["'ATUALIZAR'", true] ,"e232f2_client": ["'ATUALIZAPAGINA'", true] ,"e242f2_client": ["ENTER", true] ,"e252f2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13OrderedBy',fld:'vORDEREDBY'},{av:'AV23SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13OrderedBy',fld:'vORDEREDBY'},{av:'AV23SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'IMPRESSORAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("IMPRESSORAID","Title")',ctrl:'IMPRESSORAID',prop:'Title'},{av:'AV14Imagem',fld:'vIMAGEM'},{ctrl:'IMPRESSORANOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("IMPRESSORANOME","Title")',ctrl:'IMPRESSORANOME',prop:'Title'},{av:'AV8PaginaAux',fld:'vPAGINAAUX'},{av:'AV7Pagina',fld:'vPAGINA'},{av:'AV12NumPagina',fld:'vNUMPAGINA'},{av:'AV23SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV22filtros',fld:'vFILTROS'},{av:'AV13OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13OrderedBy',fld:'vORDEREDBY'},{av:'AV23SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV7Pagina',fld:'vPAGINA'}],[{av:'AV7Pagina',fld:'vPAGINA'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13OrderedBy',fld:'vORDEREDBY'},{av:'AV23SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV7Pagina',fld:'vPAGINA'},{av:'AV8PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV7Pagina',fld:'vPAGINA'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[],[{av:'AV9bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV10bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV18bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A198ImpressoraId',fld:'IMPRESSORAID'},{av:'AV7Pagina',fld:'vPAGINA'},{av:'AV13OrderedBy',fld:'vORDEREDBY'}],[{av:'A198ImpressoraId',fld:'IMPRESSORAID'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A198ImpressoraId',fld:'IMPRESSORAID'},{av:'AV7Pagina',fld:'vPAGINA'},{av:'AV13OrderedBy',fld:'vORDEREDBY'}],[{av:'A198ImpressoraId',fld:'IMPRESSORAID'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A198ImpressoraId',fld:'IMPRESSORAID'},{av:'AV7Pagina',fld:'vPAGINA'},{av:'AV13OrderedBy',fld:'vORDEREDBY'}],[{av:'A198ImpressoraId',fld:'IMPRESSORAID'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13OrderedBy',fld:'vORDEREDBY'},{av:'AV23SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV7Pagina',fld:'vPAGINA'}],[{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'ATUALIZAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13OrderedBy',fld:'vORDEREDBY'},{av:'AV23SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV7Pagina',fld:'vPAGINA'}],[{av:'AV7Pagina',fld:'vPAGINA'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13OrderedBy',fld:'vORDEREDBY'},{av:'AV23SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setVCMap("AV23SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV23SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[40]);
   GridContainer.addRefreshingVar({rfrVar:"AV23SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new himpressora());
