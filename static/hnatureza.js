/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:52:13.67
*/
gx.evt.autoSkip = false;
gx.define('hnatureza', false, function () {
   this.ServerClass =  "hnatureza" ;
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
   this.addKeyListener("10", "'IMPRIMIR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV34SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e112z2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e122z2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e212z2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e222z2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e232z2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e172z2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e132z2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e142z2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e242z2_client=function()
   {
      this.executeServerEvent("'ATUALIZAR'", true, arguments[0], false, false);
   };
   this.e162z2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e252z2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e152z2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e262z2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e272z2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,39,42,44,45,49,50,51,52,53,54,55,62,63];
   this.GXLastCtrlId =63;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",48,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hnatureza",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(172,49,"NATUREZAID","","","NaturezaId","svchar",0,"px",30,30,"left",null,[],172,"NaturezaId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(154,50,"NATUREZADESCRICAO","","","NaturezaDescricao","svchar",0,"px",35,35,"left",null,[],154,"NaturezaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(393,51,"NATUREZASUPERIOR","","","NaturezaSuperior","svchar",0,"px",30,30,"left",null,[],393,"NaturezaSuperior",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(395,52,"TIPONATUREZAID","","","TipoNaturezaId","int",0,"px",7,7,"right",null,[],395,"TipoNaturezaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",53,0,"px",17,"px","e212z2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",54,0,"px",17,"px","e222z2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",55,0,"px",17,"px","e232z2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vNATUREZAID",gxz:"ZV26NaturezaId",gxold:"OV26NaturezaId",gxvar:"AV26NaturezaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26NaturezaId=Value},v2z:function(Value){gx.O.ZV26NaturezaId=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAID",gx.O.AV26NaturezaId,0)},c2v:function(){gx.O.AV26NaturezaId=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAID")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vNATUREZADESCRICAO",gxz:"ZV27NaturezaDescricao",gxold:"OV27NaturezaDescricao",gxvar:"AV27NaturezaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27NaturezaDescricao=Value},v2z:function(Value){gx.O.ZV27NaturezaDescricao=Value},v2c:function(){gx.fn.setControlValue("vNATUREZADESCRICAO",gx.O.AV27NaturezaDescricao,0)},c2v:function(){gx.O.AV27NaturezaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE6",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"IMAGE3",grid:0};
   GXValidFnc[37]={fld:"BTNHELP",grid:0};
   GXValidFnc[39]={fld:"TABLE5",grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZAID",gxz:"Z172NaturezaId",gxold:"O172NaturezaId",gxvar:"A172NaturezaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A172NaturezaId=Value},v2z:function(Value){gx.O.Z172NaturezaId=Value},v2c:function(row){gx.fn.setGridControlValue("NATUREZAID",row || gx.fn.currentGridRowImpl(48),gx.O.A172NaturezaId,0)},c2v:function(){gx.O.A172NaturezaId=this.val()},val:function(row){return gx.fn.getGridControlValue("NATUREZAID",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZADESCRICAO",gxz:"Z154NaturezaDescricao",gxold:"O154NaturezaDescricao",gxvar:"A154NaturezaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A154NaturezaDescricao=Value},v2z:function(Value){gx.O.Z154NaturezaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("NATUREZADESCRICAO",row || gx.fn.currentGridRowImpl(48),gx.O.A154NaturezaDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A154NaturezaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("NATUREZADESCRICAO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZASUPERIOR",gxz:"Z393NaturezaSuperior",gxold:"O393NaturezaSuperior",gxvar:"A393NaturezaSuperior",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A393NaturezaSuperior=Value},v2z:function(Value){gx.O.Z393NaturezaSuperior=Value},v2c:function(row){gx.fn.setGridControlValue("NATUREZASUPERIOR",row || gx.fn.currentGridRowImpl(48),gx.O.A393NaturezaSuperior,0)},c2v:function(){gx.O.A393NaturezaSuperior=this.val()},val:function(row){return gx.fn.getGridControlValue("NATUREZASUPERIOR",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPONATUREZAID",gxz:"Z395TipoNaturezaId",gxold:"O395TipoNaturezaId",gxvar:"A395TipoNaturezaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A395TipoNaturezaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z395TipoNaturezaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPONATUREZAID",row || gx.fn.currentGridRowImpl(48),gx.O.A395TipoNaturezaId,0)},c2v:function(){gx.O.A395TipoNaturezaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPONATUREZAID",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(48),gx.O.AV7bmpAlt,gx.O.AV39Bmpalt_GXI)},c2v:function(){gx.O.AV39Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV39Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48),gx.O.AV8bmpExc,gx.O.AV40Bmpexc_GXI)},c2v:function(){gx.O.AV40Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV40Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(48),gx.O.AV16bmpCon,gx.O.AV41Bmpcon_GXI)},c2v:function(){gx.O.AV41Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV41Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[62]={fld:"JS", format:2,grid:0};
   GXValidFnc[63]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV26NaturezaId = "" ;
   this.ZV26NaturezaId = "" ;
   this.OV26NaturezaId = "" ;
   this.AV27NaturezaDescricao = "" ;
   this.ZV27NaturezaDescricao = "" ;
   this.OV27NaturezaDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z172NaturezaId = "" ;
   this.O172NaturezaId = "" ;
   this.Z154NaturezaDescricao = "" ;
   this.O154NaturezaDescricao = "" ;
   this.Z393NaturezaSuperior = "" ;
   this.O393NaturezaSuperior = "" ;
   this.Z395TipoNaturezaId = 0 ;
   this.O395TipoNaturezaId = 0 ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV26NaturezaId = "" ;
   this.AV27NaturezaDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A171EmpresaNaturezaEmpresaId = "" ;
   this.A172NaturezaId = "" ;
   this.A154NaturezaDescricao = "" ;
   this.A393NaturezaSuperior = "" ;
   this.A395TipoNaturezaId = 0 ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A419ParametroSistemaCampo = "" ;
   this.A138EmpresaId = "" ;
   this.A140SistemaId = "" ;
   this.A417ParametroSistemaValor = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV34SnRecuperaFiltro = "" ;
   this.Events = {"e112z2_client": ["'ANTERIOR'", true] ,"e122z2_client": ["'PROXIMO'", true] ,"e212z2_client": ["'ALTERAR'", true] ,"e222z2_client": ["'EXCLUIR'", true] ,"e232z2_client": ["'CONSULTAR'", true] ,"e172z2_client": ["VPAGINA.CLICK", true] ,"e132z2_client": ["'NOVO'", true] ,"e142z2_client": ["'FECHAR'", true] ,"e242z2_client": ["'ATUALIZAR'", true] ,"e162z2_client": ["'IMPRIMIR'", true] ,"e252z2_client": ["'ATUALIZAPAGINA'", true] ,"e152z2_client": ["'PROCURAR'", true] ,"e262z2_client": ["ENTER", true] ,"e272z2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26NaturezaId',fld:'vNATUREZAID'},{av:'AV27NaturezaDescricao',fld:'vNATUREZADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26NaturezaId',fld:'vNATUREZAID'},{av:'AV27NaturezaDescricao',fld:'vNATUREZADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'NATUREZAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NATUREZAID","Title")',ctrl:'NATUREZAID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'NATUREZADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NATUREZADESCRICAO","Title")',ctrl:'NATUREZADESCRICAO',prop:'Title'},{ctrl:'NATUREZASUPERIOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NATUREZASUPERIOR","Title")',ctrl:'NATUREZASUPERIOR',prop:'Title'},{ctrl:'TIPONATUREZAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPONATUREZAID","Title")',ctrl:'TIPONATUREZAID',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV28filtros',fld:'vFILTROS'},{av:'AV26NaturezaId',fld:'vNATUREZAID'},{av:'AV27NaturezaDescricao',fld:'vNATUREZADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26NaturezaId',fld:'vNATUREZAID'},{av:'AV27NaturezaDescricao',fld:'vNATUREZADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26NaturezaId',fld:'vNATUREZAID'},{av:'AV27NaturezaDescricao',fld:'vNATUREZADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A172NaturezaId',fld:'NATUREZAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV26NaturezaId',fld:'vNATUREZAID'},{av:'AV27NaturezaDescricao',fld:'vNATUREZADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A172NaturezaId',fld:'NATUREZAID'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A172NaturezaId',fld:'NATUREZAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV26NaturezaId',fld:'vNATUREZAID'},{av:'AV27NaturezaDescricao',fld:'vNATUREZADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A172NaturezaId',fld:'NATUREZAID'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A172NaturezaId',fld:'NATUREZAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV26NaturezaId',fld:'vNATUREZAID'},{av:'AV27NaturezaDescricao',fld:'vNATUREZADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A172NaturezaId',fld:'NATUREZAID'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26NaturezaId',fld:'vNATUREZAID'},{av:'AV27NaturezaDescricao',fld:'vNATUREZADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV33SnErro',fld:'vSNERRO'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A419ParametroSistemaCampo',fld:'PARAMETROSISTEMACAMPO'},{av:'A417ParametroSistemaValor',fld:'PARAMETROSISTEMAVALOR'}],[{av:'AV33SnErro',fld:'vSNERRO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'ATUALIZAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26NaturezaId',fld:'vNATUREZAID'},{av:'AV27NaturezaDescricao',fld:'vNATUREZADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'AV27NaturezaDescricao',fld:'vNATUREZADESCRICAO'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV38Pgmdesc',fld:'vPGMDESC'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV42Qtdpaggeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26NaturezaId',fld:'vNATUREZAID'},{av:'AV27NaturezaDescricao',fld:'vNATUREZADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV34SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV34SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[63]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV34SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hnatureza());
