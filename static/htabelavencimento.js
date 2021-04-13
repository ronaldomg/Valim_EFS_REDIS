/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:8:54.12
*/
gx.evt.autoSkip = false;
gx.define('htabelavencimento', false, function () {
   this.ServerClass =  "htabelavencimento" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV26SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e112bj2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e122bj2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e202bj2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e212bj2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e222bj2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e162bj2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e132bj2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e142bj2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e152bj2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e232bj2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e242bj2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e252bj2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,18,21,24,26,28,30,32,35,37,38,42,43,44,45,46,47,54,55];
   this.GXLastCtrlId =55;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"htabelavencimento",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(11072,42,"TABELAVENCIMENTOID","","","TabelaVencimentoId","int",0,"px",3,3,"right",null,[],11072,"TabelaVencimentoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(11097,43,"TABELAVENCIMENTODESCRICAO","","","TabelaVencimentoDescricao","svchar",0,"px",60,60,"left",null,[],11097,"TabelaVencimentoDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",44,0,"px",17,"px","e202bj2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",45,0,"px",17,"px","e212bj2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",46,0,"px",17,"px","e222bj2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(11071,47,"TABELAVENCIMENTOEMPRESAID","Tabela Vencimento Empresa Id","","TabelaVencimentoEmpresaId","char",0,"px",10,10,"left",null,[],11071,"TabelaVencimentoEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTABELAVENCIMENTODESCRICAO",gxz:"ZV28TabelaVencimentoDescricao",gxold:"OV28TabelaVencimentoDescricao",gxvar:"AV28TabelaVencimentoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28TabelaVencimentoDescricao=Value},v2z:function(Value){gx.O.ZV28TabelaVencimentoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTABELAVENCIMENTODESCRICAO",gx.O.AV28TabelaVencimentoDescricao,0)},c2v:function(){gx.O.AV28TabelaVencimentoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTABELAVENCIMENTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TABLE4",grid:0};
   GXValidFnc[21]={fld:"TABLE8",grid:0};
   GXValidFnc[24]={fld:"IMAGE2",grid:0};
   GXValidFnc[26]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[28]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[30]={fld:"BTNHELP",grid:0};
   GXValidFnc[32]={fld:"TABLE5",grid:0};
   GXValidFnc[35]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV22Pagina",gxold:"OV22Pagina",gxvar:"AV22Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV22Pagina)},c2v:function(){gx.O.AV22Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV23PaginaAux",gxold:"OV23PaginaAux",gxvar:"AV23PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV23PaginaAux,0)},c2v:function(){gx.O.AV23PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TABELAVENCIMENTOID",gxz:"Z11072TabelaVencimentoId",gxold:"O11072TabelaVencimentoId",gxvar:"A11072TabelaVencimentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11072TabelaVencimentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11072TabelaVencimentoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TABELAVENCIMENTOID",row || gx.fn.currentGridRowImpl(41),gx.O.A11072TabelaVencimentoId,0)},c2v:function(){gx.O.A11072TabelaVencimentoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TABELAVENCIMENTOID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TABELAVENCIMENTODESCRICAO",gxz:"Z11097TabelaVencimentoDescricao",gxold:"O11097TabelaVencimentoDescricao",gxvar:"A11097TabelaVencimentoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11097TabelaVencimentoDescricao=Value},v2z:function(Value){gx.O.Z11097TabelaVencimentoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TABELAVENCIMENTODESCRICAO",row || gx.fn.currentGridRowImpl(41),gx.O.A11097TabelaVencimentoDescricao,0)},c2v:function(){gx.O.A11097TabelaVencimentoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TABELAVENCIMENTODESCRICAO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV5bmpAlt",gxold:"OV5bmpAlt",gxvar:"AV5bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5bmpAlt=Value},v2z:function(Value){gx.O.ZV5bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(41),gx.O.AV5bmpAlt,gx.O.AV34Bmpalt_GXI)},c2v:function(){gx.O.AV34Bmpalt_GXI=this.val_GXI();gx.O.AV5bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV34Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV7bmpExc",gxold:"OV7bmpExc",gxvar:"AV7bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpExc=Value},v2z:function(Value){gx.O.ZV7bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(41),gx.O.AV7bmpExc,gx.O.AV35Bmpexc_GXI)},c2v:function(){gx.O.AV35Bmpexc_GXI=this.val_GXI();gx.O.AV7bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV35Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV6bmpCon",gxold:"OV6bmpCon",gxvar:"AV6bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV6bmpCon=Value},v2z:function(Value){gx.O.ZV6bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(41),gx.O.AV6bmpCon,gx.O.AV36Bmpcon_GXI)},c2v:function(){gx.O.AV36Bmpcon_GXI=this.val_GXI();gx.O.AV6bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV36Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TABELAVENCIMENTOEMPRESAID",gxz:"Z11071TabelaVencimentoEmpresaId",gxold:"O11071TabelaVencimentoEmpresaId",gxvar:"A11071TabelaVencimentoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11071TabelaVencimentoEmpresaId=Value},v2z:function(Value){gx.O.Z11071TabelaVencimentoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TABELAVENCIMENTOEMPRESAID",row || gx.fn.currentGridRowImpl(41),gx.O.A11071TabelaVencimentoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11071TabelaVencimentoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TABELAVENCIMENTOEMPRESAID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV21OrderedBy",gxold:"OV21OrderedBy",gxvar:"AV21OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV21OrderedBy,0)},c2v:function(){gx.O.AV21OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPADRAO",gxz:"ZV9EmpresaPadrao",gxold:"OV9EmpresaPadrao",gxvar:"AV9EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV9EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV9EmpresaPadrao,0)},c2v:function(){gx.O.AV9EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   this.AV28TabelaVencimentoDescricao = "" ;
   this.ZV28TabelaVencimentoDescricao = "" ;
   this.OV28TabelaVencimentoDescricao = "" ;
   this.AV22Pagina = 0 ;
   this.ZV22Pagina = 0 ;
   this.OV22Pagina = 0 ;
   this.AV23PaginaAux = 0 ;
   this.ZV23PaginaAux = 0 ;
   this.OV23PaginaAux = 0 ;
   this.Z11072TabelaVencimentoId = 0 ;
   this.O11072TabelaVencimentoId = 0 ;
   this.Z11097TabelaVencimentoDescricao = "" ;
   this.O11097TabelaVencimentoDescricao = "" ;
   this.ZV5bmpAlt = "" ;
   this.OV5bmpAlt = "" ;
   this.ZV7bmpExc = "" ;
   this.OV7bmpExc = "" ;
   this.ZV6bmpCon = "" ;
   this.OV6bmpCon = "" ;
   this.Z11071TabelaVencimentoEmpresaId = "" ;
   this.O11071TabelaVencimentoEmpresaId = "" ;
   this.AV21OrderedBy = 0 ;
   this.ZV21OrderedBy = 0 ;
   this.OV21OrderedBy = 0 ;
   this.AV9EmpresaPadrao = "" ;
   this.ZV9EmpresaPadrao = "" ;
   this.OV9EmpresaPadrao = "" ;
   this.AV28TabelaVencimentoDescricao = "" ;
   this.AV22Pagina = 0 ;
   this.AV23PaginaAux = 0 ;
   this.AV21OrderedBy = 0 ;
   this.AV9EmpresaPadrao = "" ;
   this.A11072TabelaVencimentoId = 0 ;
   this.A11097TabelaVencimentoDescricao = "" ;
   this.AV5bmpAlt = "" ;
   this.AV7bmpExc = "" ;
   this.AV6bmpCon = "" ;
   this.A11071TabelaVencimentoEmpresaId = "" ;
   this.AV26SnRecuperaFiltro = "" ;
   this.Events = {"e112bj2_client": ["'ANTERIOR'", true] ,"e122bj2_client": ["'PROXIMO'", true] ,"e202bj2_client": ["'ALTERAR'", true] ,"e212bj2_client": ["'EXCLUIR'", true] ,"e222bj2_client": ["'CONSULTAR'", true] ,"e162bj2_client": ["VPAGINA.CLICK", true] ,"e132bj2_client": ["'NOVO'", true] ,"e142bj2_client": ["'FECHAR'", true] ,"e152bj2_client": ["'PROCURAR'", true] ,"e232bj2_client": ["'ATUALIZAPAGINA'", true] ,"e242bj2_client": ["ENTER", true] ,"e252bj2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28TabelaVencimentoDescricao',fld:'vTABELAVENCIMENTODESCRICAO'},{av:'AV21OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV26SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28TabelaVencimentoDescricao',fld:'vTABELAVENCIMENTODESCRICAO'},{av:'AV21OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV26SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'TABELAVENCIMENTOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TABELAVENCIMENTOID","Title")',ctrl:'TABELAVENCIMENTOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'TABELAVENCIMENTODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TABELAVENCIMENTODESCRICAO","Title")',ctrl:'TABELAVENCIMENTODESCRICAO',prop:'Title'},{av:'AV23PaginaAux',fld:'vPAGINAAUX'},{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV19NumPagina',fld:'vNUMPAGINA'},{av:'AV26SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV10filtros',fld:'vFILTROS'},{av:'AV28TabelaVencimentoDescricao',fld:'vTABELAVENCIMENTODESCRICAO'},{av:'AV21OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28TabelaVencimentoDescricao',fld:'vTABELAVENCIMENTODESCRICAO'},{av:'AV21OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV26SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV22Pagina',fld:'vPAGINA'}],[{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28TabelaVencimentoDescricao',fld:'vTABELAVENCIMENTODESCRICAO'},{av:'AV21OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV26SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV23PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV22Pagina',fld:'vPAGINA'},{av:'gx.fn.getCtrlProperty("vEMPRESAPADRAO","Visible")',ctrl:'vEMPRESAPADRAO',prop:'Visible'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[],[{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A11072TabelaVencimentoId',fld:'TABELAVENCIMENTOID'},{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV28TabelaVencimentoDescricao',fld:'vTABELAVENCIMENTODESCRICAO'},{av:'AV21OrderedBy',fld:'vORDEREDBY'}],[{av:'A11072TabelaVencimentoId',fld:'TABELAVENCIMENTOID'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A11072TabelaVencimentoId',fld:'TABELAVENCIMENTOID'},{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV28TabelaVencimentoDescricao',fld:'vTABELAVENCIMENTODESCRICAO'},{av:'AV21OrderedBy',fld:'vORDEREDBY'}],[{av:'A11072TabelaVencimentoId',fld:'TABELAVENCIMENTOID'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A11072TabelaVencimentoId',fld:'TABELAVENCIMENTOID'},{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV28TabelaVencimentoDescricao',fld:'vTABELAVENCIMENTODESCRICAO'},{av:'AV21OrderedBy',fld:'vORDEREDBY'}],[{av:'A11072TabelaVencimentoId',fld:'TABELAVENCIMENTOID'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28TabelaVencimentoDescricao',fld:'vTABELAVENCIMENTODESCRICAO'},{av:'AV21OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV26SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV22Pagina',fld:'vPAGINA'}],[{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28TabelaVencimentoDescricao',fld:'vTABELAVENCIMENTODESCRICAO'},{av:'AV21OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV26SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV22Pagina',fld:'vPAGINA'}],[{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV21OrderedBy',fld:'vORDEREDBY'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28TabelaVencimentoDescricao',fld:'vTABELAVENCIMENTODESCRICAO'},{av:'AV21OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV26SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setVCMap("AV26SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV26SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[54]);
   GridContainer.addRefreshingVar(this.GXValidFnc[55]);
   GridContainer.addRefreshingVar({rfrVar:"AV26SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new htabelavencimento());
