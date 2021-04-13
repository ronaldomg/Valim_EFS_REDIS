/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:55:8.24
*/
gx.evt.autoSkip = false;
gx.define('htiposendereco', false, function () {
   this.ServerClass =  "htiposendereco" ;
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
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV23EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV26SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e11492_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12492_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e20492_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21492_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22492_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e16492_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13492_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14492_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e23492_client=function()
   {
      this.executeServerEvent("'ATUALIZAR'", true, arguments[0], false, false);
   };
   this.e15492_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e24492_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25492_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26492_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,19,21,24,26,27,31,32,33,34,35,42];
   this.GXLastCtrlId =42;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",30,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"htiposendereco",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(229,31,"TIPOSENDERECOID","","","TiposEnderecoId","char",0,"px",15,15,"left",null,[],229,"TiposEnderecoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(570,32,"TIPOSENDERECODESCRICAO","","","TiposEnderecoDescricao","svchar",0,"px",35,35,"left",null,[],570,"TiposEnderecoDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",33,0,"px",17,"px","e20492_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",34,0,"px",17,"px","e21492_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",35,0,"px",17,"px","e22492_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"IMAGE2",grid:0};
   GXValidFnc[13]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[15]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[17]={fld:"IMAGE3",grid:0};
   GXValidFnc[19]={fld:"BTNHELP",grid:0};
   GXValidFnc[21]={fld:"TABLE5",grid:0};
   GXValidFnc[24]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOSENDERECOID",gxz:"Z229TiposEnderecoId",gxold:"O229TiposEnderecoId",gxvar:"A229TiposEnderecoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A229TiposEnderecoId=Value},v2z:function(Value){gx.O.Z229TiposEnderecoId=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOSENDERECOID",row || gx.fn.currentGridRowImpl(30),gx.O.A229TiposEnderecoId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A229TiposEnderecoId=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOSENDERECOID",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOSENDERECODESCRICAO",gxz:"Z570TiposEnderecoDescricao",gxold:"O570TiposEnderecoDescricao",gxvar:"A570TiposEnderecoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A570TiposEnderecoDescricao=Value},v2z:function(Value){gx.O.Z570TiposEnderecoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOSENDERECODESCRICAO",row || gx.fn.currentGridRowImpl(30),gx.O.A570TiposEnderecoDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A570TiposEnderecoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOSENDERECODESCRICAO",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(30),gx.O.AV7bmpAlt,gx.O.AV31Bmpalt_GXI)},c2v:function(){gx.O.AV31Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV31Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(30),gx.O.AV8bmpExc,gx.O.AV32Bmpexc_GXI)},c2v:function(){gx.O.AV32Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV32Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(30),gx.O.AV16bmpCon,gx.O.AV33Bmpcon_GXI)},c2v:function(){gx.O.AV33Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV33Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z229TiposEnderecoId = "" ;
   this.O229TiposEnderecoId = "" ;
   this.Z570TiposEnderecoDescricao = "" ;
   this.O570TiposEnderecoDescricao = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A228EmpresaTiposEnderecoEmpresaId = "" ;
   this.A229TiposEnderecoId = "" ;
   this.A570TiposEnderecoDescricao = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV23EmpresaPadrao = "" ;
   this.AV26SnRecuperaFiltro = "" ;
   this.Events = {"e11492_client": ["'ANTERIOR'", true] ,"e12492_client": ["'PROXIMO'", true] ,"e20492_client": ["'ALTERAR'", true] ,"e21492_client": ["'EXCLUIR'", true] ,"e22492_client": ["'CONSULTAR'", true] ,"e16492_client": ["VPAGINA.CLICK", true] ,"e13492_client": ["'NOVO'", true] ,"e14492_client": ["'FECHAR'", true] ,"e23492_client": ["'ATUALIZAR'", true] ,"e15492_client": ["'IMPRIMIR'", true] ,"e24492_client": ["'ATUALIZAPAGINA'", true] ,"e25492_client": ["ENTER", true] ,"e26492_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV23EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV26SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV23EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV26SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'TIPOSENDERECOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOSENDERECOID","Title")',ctrl:'TIPOSENDERECOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'TIPOSENDERECODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOSENDERECODESCRICAO","Title")',ctrl:'TIPOSENDERECODESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV26SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV24filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV23EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV26SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV24filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV23EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV26SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV24filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A229TiposEnderecoId',fld:'TIPOSENDERECOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A229TiposEnderecoId',fld:'TIPOSENDERECOID'},{av:'AV24filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A229TiposEnderecoId',fld:'TIPOSENDERECOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A229TiposEnderecoId',fld:'TIPOSENDERECOID'},{av:'AV24filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A229TiposEnderecoId',fld:'TIPOSENDERECOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A229TiposEnderecoId',fld:'TIPOSENDERECOID'},{av:'AV24filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV23EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV26SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV24filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'ATUALIZAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV23EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV26SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV24filtros',fld:'vFILTROS'}]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV20Ordenacao',fld:'vORDENACAO'},{av:'AV30Pgmdesc',fld:'vPGMDESC'}],[{av:'AV17OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV34Qtdpaggeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV23EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV26SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setVCMap("AV23EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV26SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV23EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV26SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[42]);
   GridContainer.addRefreshingVar({rfrVar:"AV23EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV26SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new htiposendereco());
