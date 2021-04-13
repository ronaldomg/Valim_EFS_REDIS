/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:0:46.71
*/
gx.evt.autoSkip = false;
gx.define('husuarioforcavenda', false, function () {
   this.ServerClass =  "husuarioforcavenda" ;
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
      this.AV9EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV27SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV39Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.e112892_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e122892_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e162892_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e132892_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e142892_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e152892_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e212892_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e222892_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e232892_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e242892_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e172892_client=function()
   {
      this.executeServerEvent("'QRCODE'", true, null, false, false);
   };
   this.e182892_client=function()
   {
      this.executeServerEvent("'DOWNLOADAPP'", true, null, false, false);
   };
   this.e262892_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e272892_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,39,41,44,46,47,51,52,53,54,55,56,63];
   this.GXLastCtrlId =63;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",50,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"husuarioforcavenda",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(10620,51,"USUARIOFVID","","","UsuarioFVId","char",0,"px",12,12,"left",null,[],10620,"UsuarioFVId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(10658,52,"USUARIOFVNOME","","","UsuarioFVNome","svchar",0,"px",35,35,"left",null,[],10658,"UsuarioFVNome",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(10654,53,"USUARIOFVEMPRESAID","Usuario FVEmpresa Id","","UsuarioFVEmpresaId","char",0,"px",10,10,"left",null,[],10654,"UsuarioFVEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",54,0,"px",17,"px","e212892_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",55,0,"px",17,"px","e222892_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",56,0,"px",17,"px","e232892_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE7",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vUSUARIOFVID",gxz:"ZV32UsuarioFvid",gxold:"OV32UsuarioFvid",gxvar:"AV32UsuarioFvid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32UsuarioFvid=Value},v2z:function(Value){gx.O.ZV32UsuarioFvid=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOFVID",gx.O.AV32UsuarioFvid,0)},c2v:function(){gx.O.AV32UsuarioFvid=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOFVID")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vUSUARIOFVNOME",gxz:"ZV33UsuarioFvnome",gxold:"OV33UsuarioFvnome",gxvar:"AV33UsuarioFvnome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33UsuarioFvnome=Value},v2z:function(Value){gx.O.ZV33UsuarioFvnome=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOFVNOME",gx.O.AV33UsuarioFvnome,0)},c2v:function(){gx.O.AV33UsuarioFvnome=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOFVNOME")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE1",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"BTNHELP",grid:0};
   GXValidFnc[37]={fld:"IMAGE1",grid:0};
   GXValidFnc[39]={fld:"BTNQR",grid:0};
   GXValidFnc[41]={fld:"TABLE5",grid:0};
   GXValidFnc[44]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV22Pagina",gxold:"OV22Pagina",gxvar:"AV22Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV22Pagina)},c2v:function(){gx.O.AV22Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV23PaginaAux",gxold:"OV23PaginaAux",gxvar:"AV23PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV23PaginaAux,0)},c2v:function(){gx.O.AV23PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOFVID",gxz:"Z10620UsuarioFVId",gxold:"O10620UsuarioFVId",gxvar:"A10620UsuarioFVId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10620UsuarioFVId=Value},v2z:function(Value){gx.O.Z10620UsuarioFVId=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIOFVID",row || gx.fn.currentGridRowImpl(50),gx.O.A10620UsuarioFVId,0)},c2v:function(){gx.O.A10620UsuarioFVId=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOFVID",row || gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOFVNOME",gxz:"Z10658UsuarioFVNome",gxold:"O10658UsuarioFVNome",gxvar:"A10658UsuarioFVNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10658UsuarioFVNome=Value},v2z:function(Value){gx.O.Z10658UsuarioFVNome=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIOFVNOME",row || gx.fn.currentGridRowImpl(50),gx.O.A10658UsuarioFVNome,0)},c2v:function(){gx.O.A10658UsuarioFVNome=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOFVNOME",row || gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOFVEMPRESAID",gxz:"Z10654UsuarioFVEmpresaId",gxold:"O10654UsuarioFVEmpresaId",gxvar:"A10654UsuarioFVEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10654UsuarioFVEmpresaId=Value},v2z:function(Value){gx.O.Z10654UsuarioFVEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIOFVEMPRESAID",row || gx.fn.currentGridRowImpl(50),gx.O.A10654UsuarioFVEmpresaId,0)},c2v:function(){gx.O.A10654UsuarioFVEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOFVEMPRESAID",row || gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV5bmpAlt",gxold:"OV5bmpAlt",gxvar:"AV5bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5bmpAlt=Value},v2z:function(Value){gx.O.ZV5bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(50),gx.O.AV5bmpAlt,gx.O.AV41Bmpalt_GXI)},c2v:function(){gx.O.AV41Bmpalt_GXI=this.val_GXI();gx.O.AV5bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(50))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(50))}, gxvar_GXI:'AV41Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV7bmpExc",gxold:"OV7bmpExc",gxvar:"AV7bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpExc=Value},v2z:function(Value){gx.O.ZV7bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(50),gx.O.AV7bmpExc,gx.O.AV42Bmpexc_GXI)},c2v:function(){gx.O.AV42Bmpexc_GXI=this.val_GXI();gx.O.AV7bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(50))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(50))}, gxvar_GXI:'AV42Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV6bmpCon",gxold:"OV6bmpCon",gxvar:"AV6bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV6bmpCon=Value},v2z:function(Value){gx.O.ZV6bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(50),gx.O.AV6bmpCon,gx.O.AV43Bmpcon_GXI)},c2v:function(){gx.O.AV43Bmpcon_GXI=this.val_GXI();gx.O.AV6bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(50))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(50))}, gxvar_GXI:'AV43Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV21OrderedBy",gxold:"OV21OrderedBy",gxvar:"AV21OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV21OrderedBy,0)},c2v:function(){gx.O.AV21OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV32UsuarioFvid = "" ;
   this.ZV32UsuarioFvid = "" ;
   this.OV32UsuarioFvid = "" ;
   this.AV33UsuarioFvnome = "" ;
   this.ZV33UsuarioFvnome = "" ;
   this.OV33UsuarioFvnome = "" ;
   this.AV22Pagina = 0 ;
   this.ZV22Pagina = 0 ;
   this.OV22Pagina = 0 ;
   this.AV23PaginaAux = 0 ;
   this.ZV23PaginaAux = 0 ;
   this.OV23PaginaAux = 0 ;
   this.Z10620UsuarioFVId = "" ;
   this.O10620UsuarioFVId = "" ;
   this.Z10658UsuarioFVNome = "" ;
   this.O10658UsuarioFVNome = "" ;
   this.Z10654UsuarioFVEmpresaId = "" ;
   this.O10654UsuarioFVEmpresaId = "" ;
   this.ZV5bmpAlt = "" ;
   this.OV5bmpAlt = "" ;
   this.ZV7bmpExc = "" ;
   this.OV7bmpExc = "" ;
   this.ZV6bmpCon = "" ;
   this.OV6bmpCon = "" ;
   this.AV21OrderedBy = 0 ;
   this.ZV21OrderedBy = 0 ;
   this.OV21OrderedBy = 0 ;
   this.AV32UsuarioFvid = "" ;
   this.AV33UsuarioFvnome = "" ;
   this.AV22Pagina = 0 ;
   this.AV23PaginaAux = 0 ;
   this.AV21OrderedBy = 0 ;
   this.A10620UsuarioFVId = "" ;
   this.A10658UsuarioFVNome = "" ;
   this.A10654UsuarioFVEmpresaId = "" ;
   this.AV5bmpAlt = "" ;
   this.AV7bmpExc = "" ;
   this.AV6bmpCon = "" ;
   this.AV9EmpresaPadrao = "" ;
   this.AV27SnRecuperaFiltro = "" ;
   this.AV39Pgmname = "" ;
   this.Events = {"e112892_client": ["'ANTERIOR'", true] ,"e122892_client": ["'PROXIMO'", true] ,"e162892_client": ["VPAGINA.CLICK", true] ,"e132892_client": ["'NOVO'", true] ,"e142892_client": ["'FECHAR'", true] ,"e152892_client": ["'PROCURAR'", true] ,"e212892_client": ["'ALTERAR'", true] ,"e222892_client": ["'EXCLUIR'", true] ,"e232892_client": ["'CONSULTAR'", true] ,"e242892_client": ["'ATUALIZAPAGINA'", true] ,"e172892_client": ["'QRCODE'", true] ,"e182892_client": ["'DOWNLOADAPP'", true] ,"e262892_client": ["ENTER", true] ,"e272892_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32UsuarioFvid',fld:'vUSUARIOFVID'},{av:'AV33UsuarioFvnome',fld:'vUSUARIOFVNOME'},{av:'AV21OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32UsuarioFvid',fld:'vUSUARIOFVID'},{av:'AV33UsuarioFvnome',fld:'vUSUARIOFVNOME'},{av:'AV21OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[{ctrl:'USUARIOFVID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("USUARIOFVID","Title")',ctrl:'USUARIOFVID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'USUARIOFVNOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("USUARIOFVNOME","Title")',ctrl:'USUARIOFVNOME',prop:'Title'},{av:'AV23PaginaAux',fld:'vPAGINAAUX'},{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV19NumPagina',fld:'vNUMPAGINA'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV10filtros',fld:'vFILTROS'},{av:'AV32UsuarioFvid',fld:'vUSUARIOFVID'},{av:'AV33UsuarioFvnome',fld:'vUSUARIOFVNOME'},{av:'AV21OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32UsuarioFvid',fld:'vUSUARIOFVID'},{av:'AV33UsuarioFvnome',fld:'vUSUARIOFVNOME'},{av:'AV21OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'},{av:'AV22Pagina',fld:'vPAGINA'}],[{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32UsuarioFvid',fld:'vUSUARIOFVID'},{av:'AV33UsuarioFvnome',fld:'vUSUARIOFVNOME'},{av:'AV21OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'},{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV23PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32UsuarioFvid',fld:'vUSUARIOFVID'},{av:'AV33UsuarioFvnome',fld:'vUSUARIOFVNOME'},{av:'AV21OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'},{av:'AV22Pagina',fld:'vPAGINA'}],[{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV32UsuarioFvid',fld:'vUSUARIOFVID'},{av:'AV33UsuarioFvnome',fld:'vUSUARIOFVNOME'},{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV21OrderedBy',fld:'vORDEREDBY'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV39Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32UsuarioFvid',fld:'vUSUARIOFVID'},{av:'AV33UsuarioFvnome',fld:'vUSUARIOFVNOME'},{av:'AV21OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'},{av:'AV22Pagina',fld:'vPAGINA'}],[{av:'AV21OrderedBy',fld:'vORDEREDBY'},{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A10620UsuarioFVId',fld:'USUARIOFVID'},{av:'AV32UsuarioFvid',fld:'vUSUARIOFVID'},{av:'AV33UsuarioFvnome',fld:'vUSUARIOFVNOME'},{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV21OrderedBy',fld:'vORDEREDBY'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[{av:'A10620UsuarioFVId',fld:'USUARIOFVID'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A10620UsuarioFVId',fld:'USUARIOFVID'},{av:'AV32UsuarioFvid',fld:'vUSUARIOFVID'},{av:'AV33UsuarioFvnome',fld:'vUSUARIOFVNOME'},{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV21OrderedBy',fld:'vORDEREDBY'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[{av:'A10620UsuarioFVId',fld:'USUARIOFVID'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A10620UsuarioFVId',fld:'USUARIOFVID'},{av:'AV32UsuarioFvid',fld:'vUSUARIOFVID'},{av:'AV33UsuarioFvnome',fld:'vUSUARIOFVNOME'},{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV21OrderedBy',fld:'vORDEREDBY'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[{av:'A10620UsuarioFVId',fld:'USUARIOFVID'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32UsuarioFvid',fld:'vUSUARIOFVID'},{av:'AV33UsuarioFvnome',fld:'vUSUARIOFVNOME'},{av:'AV21OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'QRCODE'"] = [[{av:'this.AV11http.Baseurl',ctrl:'vHTTP',prop:'Baseurl'}],[{av:'AV35BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV34Dados',fld:'vDADOS'}]];
   this.EvtParms["'DOWNLOADAPP'"] = [[{av:'this.AV11http.Serverhost',ctrl:'vHTTP',prop:'Serverhost'},{av:'this.AV11http.Serverport',ctrl:'vHTTP',prop:'Serverport'}],[{av:'AV34Dados',fld:'vDADOS'}]];
   this.setVCMap("AV9EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV27SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV39Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV9EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV27SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV39Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[63]);
   GridContainer.addRefreshingVar({rfrVar:"AV9EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV5bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV5bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV6bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV6bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV27SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV39Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new husuarioforcavenda());
