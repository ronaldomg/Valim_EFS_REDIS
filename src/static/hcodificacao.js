/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:48:37.85
*/
gx.evt.autoSkip = false;
gx.define('hcodificacao', false, function () {
   this.ServerClass =  "hcodificacao" ;
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
      this.AV19EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV22SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e110q2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e120q2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e190q2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e200q2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e210q2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e150q2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e130q2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e140q2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e220q2_client=function()
   {
      this.executeServerEvent("'ATUALIZAR'", true, arguments[0], false, false);
   };
   this.e230q2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e240q2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e250q2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,19,22,24,25,29,30,31,32,33,40];
   this.GXLastCtrlId =40;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hcodificacao",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(58,29,"CODIFICACAOID","","","CodificacaoId","char",0,"px",15,15,"left",null,[],58,"CodificacaoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(59,30,"CODIFICACAODESCRICAO","","","CodificacaoDescricao","svchar",0,"px",35,35,"left",null,[],59,"CodificacaoDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",31,0,"px",17,"px","e190q2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",32,0,"px",17,"px","e200q2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",33,0,"px",17,"px","e210q2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"IMAGE2",grid:0};
   GXValidFnc[13]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[15]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[17]={fld:"BTNHELP",grid:0};
   GXValidFnc[19]={fld:"TABLE5",grid:0};
   GXValidFnc[22]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CODIFICACAOID",gxz:"Z58CodificacaoId",gxold:"O58CodificacaoId",gxvar:"A58CodificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A58CodificacaoId=Value},v2z:function(Value){gx.O.Z58CodificacaoId=Value},v2c:function(row){gx.fn.setGridControlValue("CODIFICACAOID",row || gx.fn.currentGridRowImpl(28),gx.O.A58CodificacaoId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A58CodificacaoId=this.val()},val:function(row){return gx.fn.getGridControlValue("CODIFICACAOID",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CODIFICACAODESCRICAO",gxz:"Z59CodificacaoDescricao",gxold:"O59CodificacaoDescricao",gxvar:"A59CodificacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A59CodificacaoDescricao=Value},v2z:function(Value){gx.O.Z59CodificacaoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CODIFICACAODESCRICAO",row || gx.fn.currentGridRowImpl(28),gx.O.A59CodificacaoDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A59CodificacaoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CODIFICACAODESCRICAO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(28),gx.O.AV7bmpAlt,gx.O.AV27Bmpalt_GXI)},c2v:function(){gx.O.AV27Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV27Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(28),gx.O.AV8bmpExc,gx.O.AV28Bmpexc_GXI)},c2v:function(){gx.O.AV28Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV28Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(28),gx.O.AV16bmpCon,gx.O.AV29Bmpcon_GXI)},c2v:function(){gx.O.AV29Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV29Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z58CodificacaoId = "" ;
   this.O58CodificacaoId = "" ;
   this.Z59CodificacaoDescricao = "" ;
   this.O59CodificacaoDescricao = "" ;
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
   this.A164EmpresaCodificacaoEmpresaId = "" ;
   this.A58CodificacaoId = "" ;
   this.A59CodificacaoDescricao = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV19EmpresaPadrao = "" ;
   this.AV22SnRecuperaFiltro = "" ;
   this.Events = {"e110q2_client": ["'ANTERIOR'", true] ,"e120q2_client": ["'PROXIMO'", true] ,"e190q2_client": ["'ALTERAR'", true] ,"e200q2_client": ["'EXCLUIR'", true] ,"e210q2_client": ["'CONSULTAR'", true] ,"e150q2_client": ["VPAGINA.CLICK", true] ,"e130q2_client": ["'NOVO'", true] ,"e140q2_client": ["'FECHAR'", true] ,"e220q2_client": ["'ATUALIZAR'", true] ,"e230q2_client": ["'ATUALIZAPAGINA'", true] ,"e240q2_client": ["ENTER", true] ,"e250q2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV19EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV19EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'CODIFICACAOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CODIFICACAOID","Title")',ctrl:'CODIFICACAOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'CODIFICACAODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CODIFICACAODESCRICAO","Title")',ctrl:'CODIFICACAODESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV22SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV20filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV19EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV20filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV19EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV20filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A58CodificacaoId',fld:'CODIFICACAOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A58CodificacaoId',fld:'CODIFICACAOID'},{av:'AV20filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A58CodificacaoId',fld:'CODIFICACAOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A58CodificacaoId',fld:'CODIFICACAOID'},{av:'AV20filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A58CodificacaoId',fld:'CODIFICACAOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A58CodificacaoId',fld:'CODIFICACAOID'},{av:'AV20filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV19EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV20filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'ATUALIZAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV19EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV20filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV19EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setVCMap("AV19EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV22SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV19EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV22SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[40]);
   GridContainer.addRefreshingVar({rfrVar:"AV19EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV22SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcodificacao());