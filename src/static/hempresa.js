/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:50:50.71
*/
gx.evt.autoSkip = false;
gx.define('hempresa', false, function () {
   this.ServerClass =  "hempresa" ;
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
      this.AV24SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.A4302EmpresaSituacao=gx.fn.getControlValue("EMPRESASITUACAO") ;
   };
   this.e111y2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e121y2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e191y2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e201y2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e211y2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e151y2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e131y2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e141y2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e221y2_client=function()
   {
      this.executeServerEvent("'ATUALIZAR'", true, arguments[0], false, false);
   };
   this.e231y2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e241y2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e251y2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,19,22,24,25,29,30,31,32,33,34,35,42];
   this.GXLastCtrlId =42;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hempresa",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(138,29,"EMPRESAID","","","EmpresaId","char",60,"px",10,10,"left",null,[],138,"EmpresaId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(186,30,"EMPRESANOME","","","EmpresaNome","svchar",0,"px",40,40,"left",null,[],186,"EmpresaNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(192,31,"EMPRESATELEFONE","","","EmpresaTelefone","svchar",0,"px",15,15,"left",null,[],192,"EmpresaTelefone",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpsit","vBMPSIT",32,0,"px",17,"px",null,"","Situação","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",33,0,"px",17,"px","e191y2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",34,0,"px",17,"px","e201y2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",35,0,"px",17,"px","e211y2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TABLE1",grid:0};
   GXValidFnc[11]={fld:"IMAGE2",grid:0};
   GXValidFnc[13]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[15]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[17]={fld:"BTNHELP",grid:0};
   GXValidFnc[19]={fld:"TABLE5",grid:0};
   GXValidFnc[22]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV7Pagina",gxold:"OV7Pagina",gxvar:"AV7Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV7Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV7Pagina)},c2v:function(){gx.O.AV7Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV8PaginaAux",gxold:"OV8PaginaAux",gxvar:"AV8PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV8PaginaAux,0)},c2v:function(){gx.O.AV8PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAID",gxz:"Z138EmpresaId",gxold:"O138EmpresaId",gxvar:"A138EmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A138EmpresaId=Value},v2z:function(Value){gx.O.Z138EmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESAID",row || gx.fn.currentGridRowImpl(28),gx.O.A138EmpresaId,0)},c2v:function(){gx.O.A138EmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAID",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESANOME",gxz:"Z186EmpresaNome",gxold:"O186EmpresaNome",gxvar:"A186EmpresaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A186EmpresaNome=Value},v2z:function(Value){gx.O.Z186EmpresaNome=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESANOME",row || gx.fn.currentGridRowImpl(28),gx.O.A186EmpresaNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A186EmpresaNome=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESANOME",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESATELEFONE",gxz:"Z192EmpresaTelefone",gxold:"O192EmpresaTelefone",gxvar:"A192EmpresaTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A192EmpresaTelefone=Value},v2z:function(Value){gx.O.Z192EmpresaTelefone=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESATELEFONE",row || gx.fn.currentGridRowImpl(28),gx.O.A192EmpresaTelefone,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A192EmpresaTelefone=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESATELEFONE",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSIT",gxz:"ZV23bmpSit",gxold:"OV23bmpSit",gxvar:"AV23bmpSit",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV23bmpSit=Value},v2z:function(Value){gx.O.ZV23bmpSit=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSIT",row || gx.fn.currentGridRowImpl(28),gx.O.AV23bmpSit,gx.O.AV30Bmpsit_GXI)},c2v:function(){gx.O.AV30Bmpsit_GXI=this.val_GXI();gx.O.AV23bmpSit=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSIT",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSIT_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV30Bmpsit_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV9bmpAlt",gxold:"OV9bmpAlt",gxvar:"AV9bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV9bmpAlt=Value},v2z:function(Value){gx.O.ZV9bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(28),gx.O.AV9bmpAlt,gx.O.AV31Bmpalt_GXI)},c2v:function(){gx.O.AV31Bmpalt_GXI=this.val_GXI();gx.O.AV9bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV31Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV10bmpExc",gxold:"OV10bmpExc",gxvar:"AV10bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV10bmpExc=Value},v2z:function(Value){gx.O.ZV10bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(28),gx.O.AV10bmpExc,gx.O.AV32Bmpexc_GXI)},c2v:function(){gx.O.AV32Bmpexc_GXI=this.val_GXI();gx.O.AV10bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV32Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV18bmpCon",gxold:"OV18bmpCon",gxvar:"AV18bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV18bmpCon=Value},v2z:function(Value){gx.O.ZV18bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(28),gx.O.AV18bmpCon,gx.O.AV33Bmpcon_GXI)},c2v:function(){gx.O.AV33Bmpcon_GXI=this.val_GXI();gx.O.AV18bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV33Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV13OrderedBy",gxold:"OV13OrderedBy",gxvar:"AV13OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV13OrderedBy,0)},c2v:function(){gx.O.AV13OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV7Pagina = 0 ;
   this.ZV7Pagina = 0 ;
   this.OV7Pagina = 0 ;
   this.AV8PaginaAux = 0 ;
   this.ZV8PaginaAux = 0 ;
   this.OV8PaginaAux = 0 ;
   this.Z138EmpresaId = "" ;
   this.O138EmpresaId = "" ;
   this.Z186EmpresaNome = "" ;
   this.O186EmpresaNome = "" ;
   this.Z192EmpresaTelefone = "" ;
   this.O192EmpresaTelefone = "" ;
   this.ZV23bmpSit = "" ;
   this.OV23bmpSit = "" ;
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
   this.A4302EmpresaSituacao = "" ;
   this.A138EmpresaId = "" ;
   this.A186EmpresaNome = "" ;
   this.A192EmpresaTelefone = "" ;
   this.AV23bmpSit = "" ;
   this.AV9bmpAlt = "" ;
   this.AV10bmpExc = "" ;
   this.AV18bmpCon = "" ;
   this.AV24SnRecuperaFiltro = "" ;
   this.Events = {"e111y2_client": ["'ANTERIOR'", true] ,"e121y2_client": ["'PROXIMO'", true] ,"e191y2_client": ["'ALTERAR'", true] ,"e201y2_client": ["'EXCLUIR'", true] ,"e211y2_client": ["'CONSULTAR'", true] ,"e151y2_client": ["VPAGINA.CLICK", true] ,"e131y2_client": ["'NOVO'", true] ,"e141y2_client": ["'FECHAR'", true] ,"e221y2_client": ["'ATUALIZAR'", true] ,"e231y2_client": ["'ATUALIZAPAGINA'", true] ,"e241y2_client": ["ENTER", true] ,"e251y2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13OrderedBy',fld:'vORDEREDBY'},{av:'AV24SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A4302EmpresaSituacao',fld:'EMPRESASITUACAO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13OrderedBy',fld:'vORDEREDBY'},{av:'AV24SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A4302EmpresaSituacao',fld:'EMPRESASITUACAO'}],[{ctrl:'EMPRESAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("EMPRESAID","Title")',ctrl:'EMPRESAID',prop:'Title'},{av:'AV14Imagem',fld:'vIMAGEM'},{ctrl:'EMPRESANOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("EMPRESANOME","Title")',ctrl:'EMPRESANOME',prop:'Title'},{ctrl:'EMPRESATELEFONE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("EMPRESATELEFONE","Title")',ctrl:'EMPRESATELEFONE',prop:'Title'},{av:'AV8PaginaAux',fld:'vPAGINAAUX'},{av:'AV7Pagina',fld:'vPAGINA'},{av:'AV12NumPagina',fld:'vNUMPAGINA'},{av:'AV24SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV21filtros',fld:'vFILTROS'},{av:'AV13OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13OrderedBy',fld:'vORDEREDBY'},{av:'AV24SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A4302EmpresaSituacao',fld:'EMPRESASITUACAO'},{av:'AV7Pagina',fld:'vPAGINA'}],[{av:'AV7Pagina',fld:'vPAGINA'},{av:'AV21filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13OrderedBy',fld:'vORDEREDBY'},{av:'AV24SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A4302EmpresaSituacao',fld:'EMPRESASITUACAO'},{av:'AV7Pagina',fld:'vPAGINA'},{av:'AV8PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV7Pagina',fld:'vPAGINA'},{av:'AV21filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A4302EmpresaSituacao',fld:'EMPRESASITUACAO'}],[{av:'AV23bmpSit',fld:'vBMPSIT'},{av:'gx.fn.getCtrlProperty("vBMPSIT","Tooltiptext")',ctrl:'vBMPSIT',prop:'Tooltiptext'},{av:'AV9bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV10bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV18bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'AV7Pagina',fld:'vPAGINA'},{av:'AV13OrderedBy',fld:'vORDEREDBY'}],[{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'AV21filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'AV7Pagina',fld:'vPAGINA'},{av:'AV13OrderedBy',fld:'vORDEREDBY'}],[{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'AV21filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'AV7Pagina',fld:'vPAGINA'},{av:'AV13OrderedBy',fld:'vORDEREDBY'}],[{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'AV21filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13OrderedBy',fld:'vORDEREDBY'},{av:'AV24SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A4302EmpresaSituacao',fld:'EMPRESASITUACAO'},{av:'AV7Pagina',fld:'vPAGINA'}],[{av:'AV21filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'ATUALIZAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13OrderedBy',fld:'vORDEREDBY'},{av:'AV24SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A4302EmpresaSituacao',fld:'EMPRESASITUACAO'},{av:'AV7Pagina',fld:'vPAGINA'}],[{av:'AV7Pagina',fld:'vPAGINA'},{av:'AV21filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13OrderedBy',fld:'vORDEREDBY'},{av:'AV24SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A4302EmpresaSituacao',fld:'EMPRESASITUACAO'}],[]];
   this.setVCMap("AV24SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A4302EmpresaSituacao", "EMPRESASITUACAO", 0, "char");
   this.setVCMap("AV24SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A4302EmpresaSituacao", "EMPRESASITUACAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[42]);
   GridContainer.addRefreshingVar({rfrVar:"AV24SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A4302EmpresaSituacao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hempresa());
