/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:55:2.20
*/
gx.evt.autoSkip = false;
gx.define('htipoitem', false, function () {
   this.ServerClass =  "htipoitem" ;
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
      this.AV24EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV25SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e11462_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12462_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e20462_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21462_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22462_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e16462_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13462_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14462_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e23462_client=function()
   {
      this.executeServerEvent("'ATUALIZAR'", true, arguments[0], false, false);
   };
   this.e15462_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e24462_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25462_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26462_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,19,22,24,25,29,30,31,32,33,34,35,42];
   this.GXLastCtrlId =42;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"htipoitem",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(120,29,"TIPOITEMID","","","TipoItemId","int",0,"px",7,7,"right",null,[],120,"TipoItemId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(45,30,"TIPOITEMDESCRICAO","","","TipoItemDescricao","svchar",0,"px",35,35,"left",null,[],45,"TipoItemDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(554,31,"TIPOITEMQTDEDIASDEVOLUCAO","","","TipoItemQtdeDiasDevolucao","int",0,"px",3,3,"right",null,[],554,"TipoItemQtdeDiasDevolucao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(555,32,"TIPOITEMVALORMULTADIA","","","TipoItemValorMultaDia","decimal",0,"px",5,5,"right",null,[],555,"TipoItemValorMultaDia",true,2,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",33,0,"px",17,"px","e20462_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",34,0,"px",17,"px","e21462_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",35,0,"px",17,"px","e22462_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"IMAGE2",grid:0};
   GXValidFnc[13]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[15]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[17]={fld:"IMAGE1",grid:0};
   GXValidFnc[19]={fld:"TABLE5",grid:0};
   GXValidFnc[22]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOITEMID",gxz:"Z120TipoItemId",gxold:"O120TipoItemId",gxvar:"A120TipoItemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A120TipoItemId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z120TipoItemId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOITEMID",row || gx.fn.currentGridRowImpl(28),gx.O.A120TipoItemId,0)},c2v:function(){gx.O.A120TipoItemId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOITEMID",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOITEMDESCRICAO",gxz:"Z45TipoItemDescricao",gxold:"O45TipoItemDescricao",gxvar:"A45TipoItemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A45TipoItemDescricao=Value},v2z:function(Value){gx.O.Z45TipoItemDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOITEMDESCRICAO",row || gx.fn.currentGridRowImpl(28),gx.O.A45TipoItemDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A45TipoItemDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOITEMDESCRICAO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOITEMQTDEDIASDEVOLUCAO",gxz:"Z554TipoItemQtdeDiasDevolucao",gxold:"O554TipoItemQtdeDiasDevolucao",gxvar:"A554TipoItemQtdeDiasDevolucao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A554TipoItemQtdeDiasDevolucao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z554TipoItemQtdeDiasDevolucao=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOITEMQTDEDIASDEVOLUCAO",row || gx.fn.currentGridRowImpl(28),gx.O.A554TipoItemQtdeDiasDevolucao,0)},c2v:function(){gx.O.A554TipoItemQtdeDiasDevolucao=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOITEMQTDEDIASDEVOLUCAO",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"decimal",len:5,dec:2,sign:false,pic:"Z9.99",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOITEMVALORMULTADIA",gxz:"Z555TipoItemValorMultaDia",gxold:"O555TipoItemValorMultaDia",gxvar:"A555TipoItemValorMultaDia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A555TipoItemValorMultaDia=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z555TipoItemValorMultaDia=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("TIPOITEMVALORMULTADIA",row || gx.fn.currentGridRowImpl(28),gx.O.A555TipoItemValorMultaDia,2,',')},c2v:function(){gx.O.A555TipoItemValorMultaDia=this.val()},val:function(row){return gx.fn.getGridDecimalValue("TIPOITEMVALORMULTADIA",row || gx.fn.currentGridRowImpl(28),'.',',')},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(28),gx.O.AV7bmpAlt,gx.O.AV30Bmpalt_GXI)},c2v:function(){gx.O.AV30Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV30Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(28),gx.O.AV8bmpExc,gx.O.AV31Bmpexc_GXI)},c2v:function(){gx.O.AV31Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV31Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(28),gx.O.AV16bmpCon,gx.O.AV32Bmpcon_GXI)},c2v:function(){gx.O.AV32Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV32Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z120TipoItemId = 0 ;
   this.O120TipoItemId = 0 ;
   this.Z45TipoItemDescricao = "" ;
   this.O45TipoItemDescricao = "" ;
   this.Z554TipoItemQtdeDiasDevolucao = 0 ;
   this.O554TipoItemQtdeDiasDevolucao = 0 ;
   this.Z555TipoItemValorMultaDia = 0 ;
   this.O555TipoItemValorMultaDia = 0 ;
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
   this.A3080TipoItemEmpresaId = "" ;
   this.A120TipoItemId = 0 ;
   this.A45TipoItemDescricao = "" ;
   this.A554TipoItemQtdeDiasDevolucao = 0 ;
   this.A555TipoItemValorMultaDia = 0 ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV24EmpresaPadrao = "" ;
   this.AV25SnRecuperaFiltro = "" ;
   this.Events = {"e11462_client": ["'ANTERIOR'", true] ,"e12462_client": ["'PROXIMO'", true] ,"e20462_client": ["'ALTERAR'", true] ,"e21462_client": ["'EXCLUIR'", true] ,"e22462_client": ["'CONSULTAR'", true] ,"e16462_client": ["VPAGINA.CLICK", true] ,"e13462_client": ["'NOVO'", true] ,"e14462_client": ["'FECHAR'", true] ,"e23462_client": ["'ATUALIZAR'", true] ,"e15462_client": ["'IMPRIMIR'", true] ,"e24462_client": ["'ATUALIZAPAGINA'", true] ,"e25462_client": ["ENTER", true] ,"e26462_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV24EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV25SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV24EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV25SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'TIPOITEMID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOITEMID","Title")',ctrl:'TIPOITEMID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'TIPOITEMDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOITEMDESCRICAO","Title")',ctrl:'TIPOITEMDESCRICAO',prop:'Title'},{ctrl:'TIPOITEMQTDEDIASDEVOLUCAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOITEMQTDEDIASDEVOLUCAO","Title")',ctrl:'TIPOITEMQTDEDIASDEVOLUCAO',prop:'Title'},{ctrl:'TIPOITEMVALORMULTADIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOITEMVALORMULTADIA","Title")',ctrl:'TIPOITEMVALORMULTADIA',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV25SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV22filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV24EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV25SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV24EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV25SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A120TipoItemId',fld:'TIPOITEMID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A120TipoItemId',fld:'TIPOITEMID'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A120TipoItemId',fld:'TIPOITEMID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A120TipoItemId',fld:'TIPOITEMID'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A120TipoItemId',fld:'TIPOITEMID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A120TipoItemId',fld:'TIPOITEMID'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV24EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV25SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'ATUALIZAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV24EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV25SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV29Pgmdesc',fld:'vPGMDESC'}],[{av:'AV19OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV18NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV17NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV33Qtdpaggeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV24EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV25SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setVCMap("AV24EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV25SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV24EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV25SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[42]);
   GridContainer.addRefreshingVar({rfrVar:"AV24EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV25SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new htipoitem());
