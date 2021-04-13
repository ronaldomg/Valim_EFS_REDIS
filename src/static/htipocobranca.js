/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:57:48.56
*/
gx.evt.autoSkip = false;
gx.define('htipocobranca', false, function () {
   this.ServerClass =  "htipocobranca" ;
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
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV28SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e117n2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e127n2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e217n2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e227n2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e237n2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e177n2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e137n2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e147n2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e157n2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e167n2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e247n2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e257n2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,19,21,23,25,28,30,31,35,36,37,38,39,45];
   this.GXLastCtrlId =45;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",34,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"htipocobranca",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(992,35,"TIPOCOBRANCAID","","","TipoCobrancaId","int",0,"px",3,3,"right",null,[],992,"TipoCobrancaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(993,36,"TIPOCOBRANCADESCRICAO","","","TipoCobrancaDescricao","svchar",0,"px",25,25,"left",null,[],993,"TipoCobrancaDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",37,0,"px",17,"px","e217n2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",38,0,"px",17,"px","e227n2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",39,0,"px",17,"px","e237n2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE4",grid:0};
   GXValidFnc[12]={fld:"TABLE3",grid:0};
   GXValidFnc[15]={fld:"IMAGE2",grid:0};
   GXValidFnc[17]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[19]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[21]={fld:"BTNHELP",grid:0};
   GXValidFnc[23]={fld:"IMAGE1",grid:0};
   GXValidFnc[25]={fld:"TABLE5",grid:0};
   GXValidFnc[28]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCOBRANCAID",gxz:"Z992TipoCobrancaId",gxold:"O992TipoCobrancaId",gxvar:"A992TipoCobrancaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A992TipoCobrancaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z992TipoCobrancaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOCOBRANCAID",row || gx.fn.currentGridRowImpl(34),gx.O.A992TipoCobrancaId,0)},c2v:function(){gx.O.A992TipoCobrancaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOCOBRANCAID",row || gx.fn.currentGridRowImpl(34),'.')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCOBRANCADESCRICAO",gxz:"Z993TipoCobrancaDescricao",gxold:"O993TipoCobrancaDescricao",gxvar:"A993TipoCobrancaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A993TipoCobrancaDescricao=Value},v2z:function(Value){gx.O.Z993TipoCobrancaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOCOBRANCADESCRICAO",row || gx.fn.currentGridRowImpl(34),gx.O.A993TipoCobrancaDescricao,0)},c2v:function(){gx.O.A993TipoCobrancaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOCOBRANCADESCRICAO",row || gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(34),gx.O.AV7bmpAlt,gx.O.AV33Bmpalt_GXI)},c2v:function(){gx.O.AV33Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(34))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(34))}, gxvar_GXI:'AV33Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(34),gx.O.AV8bmpExc,gx.O.AV34Bmpexc_GXI)},c2v:function(){gx.O.AV34Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(34))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(34))}, gxvar_GXI:'AV34Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(34),gx.O.AV16bmpCon,gx.O.AV35Bmpcon_GXI)},c2v:function(){gx.O.AV35Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(34))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(34))}, gxvar_GXI:'AV35Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z992TipoCobrancaId = 0 ;
   this.O992TipoCobrancaId = 0 ;
   this.Z993TipoCobrancaDescricao = "" ;
   this.O993TipoCobrancaDescricao = "" ;
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
   this.A991TipoCobrancaEmpresaId = "" ;
   this.A992TipoCobrancaId = 0 ;
   this.A993TipoCobrancaDescricao = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV28SnRecuperaFiltro = "" ;
   this.Events = {"e117n2_client": ["'ANTERIOR'", true] ,"e127n2_client": ["'PROXIMO'", true] ,"e217n2_client": ["'ALTERAR'", true] ,"e227n2_client": ["'EXCLUIR'", true] ,"e237n2_client": ["'CONSULTAR'", true] ,"e177n2_client": ["VPAGINA.CLICK", true] ,"e137n2_client": ["'NOVO'", true] ,"e147n2_client": ["'FECHAR'", true] ,"e157n2_client": ["'IMPRIMIR'", true] ,"e167n2_client": ["'PROCURAR'", true] ,"e247n2_client": ["ENTER", true] ,"e257n2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'TIPOCOBRANCAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOCOBRANCAID","Title")',ctrl:'TIPOCOBRANCAID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'TIPOCOBRANCADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOCOBRANCADESCRICAO","Title")',ctrl:'TIPOCOBRANCADESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A992TipoCobrancaId',fld:'TIPOCOBRANCAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A992TipoCobrancaId',fld:'TIPOCOBRANCAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A992TipoCobrancaId',fld:'TIPOCOBRANCAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A992TipoCobrancaId',fld:'TIPOCOBRANCAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A992TipoCobrancaId',fld:'TIPOCOBRANCAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A992TipoCobrancaId',fld:'TIPOCOBRANCAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV31Pgmname',fld:'vPGMNAME'},{av:'AV32Pgmdesc',fld:'vPGMDESC'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV36Qtdpaggeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV28SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV28SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV28SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new htipocobranca());
