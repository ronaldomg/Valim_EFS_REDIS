/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 16:33:3.83
*/
gx.evt.autoSkip = false;
gx.define('hnbs', false, function () {
   this.ServerClass =  "hnbs" ;
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
      this.AV31SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV34Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.A7629NBSDescricao=gx.fn.getControlValue("NBSDESCRICAO") ;
   };
   this.e1112e2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e1212e2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e1712e2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e1312e2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e1412e2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1512e2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e1612e2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e2012e2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e2112e2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e2212e2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e2412e2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e2512e2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e2612e2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,39,42,44,45,49,50,51,52,53,60];
   this.GXLastCtrlId =60;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",48,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hnbs",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(7634,49,"NBSCODIGO","","","NBSCodigo","int",0,"px",10,10,"right",null,[],7634,"NBSCodigo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Descricaonbs",50,"vDESCRICAONBS","","","DescricaoNBS","svchar",0,"px",50,50,"left",null,[],"Descricaonbs","DescricaoNBS",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",51,0,"px",17,"px","e2012e2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",52,0,"px",17,"px","e2112e2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",53,0,"px",17,"px","e2212e2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vNBSCOD",gxz:"ZV27NBSCod",gxold:"OV27NBSCod",gxvar:"AV27NBSCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27NBSCod=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27NBSCod=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNBSCOD",gx.O.AV27NBSCod,0)},c2v:function(){gx.O.AV27NBSCod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNBSCOD",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vNBSDESC",gxz:"ZV28NBSDesc",gxold:"OV28NBSDesc",gxvar:"AV28NBSDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28NBSDesc=Value},v2z:function(Value){gx.O.ZV28NBSDesc=Value},v2c:function(){gx.fn.setControlValue("vNBSDESC",gx.O.AV28NBSDesc,0)},c2v:function(){gx.O.AV28NBSDesc=this.val()},val:function(){return gx.fn.getControlValue("vNBSDESC")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE6",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"IMAGE1",grid:0};
   GXValidFnc[37]={fld:"BTNHELP",grid:0};
   GXValidFnc[39]={fld:"TABLE5",grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"NBSCODIGO",gxz:"Z7634NBSCodigo",gxold:"O7634NBSCodigo",gxvar:"A7634NBSCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7634NBSCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7634NBSCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NBSCODIGO",row || gx.fn.currentGridRowImpl(48),gx.O.A7634NBSCodigo,0)},c2v:function(){gx.O.A7634NBSCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NBSCODIGO",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:0,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAONBS",gxz:"ZV30DescricaoNBS",gxold:"OV30DescricaoNBS",gxvar:"AV30DescricaoNBS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV30DescricaoNBS=Value},v2z:function(Value){gx.O.ZV30DescricaoNBS=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCRICAONBS",row || gx.fn.currentGridRowImpl(48),gx.O.AV30DescricaoNBS,0)},c2v:function(){gx.O.AV30DescricaoNBS=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCRICAONBS",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(48),gx.O.AV7bmpAlt,gx.O.AV36Bmpalt_GXI)},c2v:function(){gx.O.AV36Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV36Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48),gx.O.AV8bmpExc,gx.O.AV37Bmpexc_GXI)},c2v:function(){gx.O.AV37Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV37Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(48),gx.O.AV16bmpCon,gx.O.AV38Bmpcon_GXI)},c2v:function(){gx.O.AV38Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV38Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27NBSCod = 0 ;
   this.ZV27NBSCod = 0 ;
   this.OV27NBSCod = 0 ;
   this.AV28NBSDesc = "" ;
   this.ZV28NBSDesc = "" ;
   this.OV28NBSDesc = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z7634NBSCodigo = 0 ;
   this.O7634NBSCodigo = 0 ;
   this.ZV30DescricaoNBS = "" ;
   this.OV30DescricaoNBS = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27NBSCod = 0 ;
   this.AV28NBSDesc = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A7629NBSDescricao = "" ;
   this.A7634NBSCodigo = 0 ;
   this.AV30DescricaoNBS = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV31SnRecuperaFiltro = "" ;
   this.AV34Pgmname = "" ;
   this.Events = {"e1112e2_client": ["'ANTERIOR'", true] ,"e1212e2_client": ["'PROXIMO'", true] ,"e1712e2_client": ["VPAGINA.CLICK", true] ,"e1312e2_client": ["'NOVO'", true] ,"e1412e2_client": ["'FECHAR'", true] ,"e1512e2_client": ["'IMPRIMIR'", true] ,"e1612e2_client": ["'PROCURAR'", true] ,"e2012e2_client": ["'ALTERAR'", true] ,"e2112e2_client": ["'EXCLUIR'", true] ,"e2212e2_client": ["'CONSULTAR'", true] ,"e2412e2_client": ["'ATUALIZAPAGINA'", true] ,"e2512e2_client": ["ENTER", true] ,"e2612e2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27NBSCod',fld:'vNBSCOD'},{av:'AV28NBSDesc',fld:'vNBSDESC'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'A7629NBSDescricao',fld:'NBSDESCRICAO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27NBSCod',fld:'vNBSCOD'},{av:'AV28NBSDesc',fld:'vNBSDESC'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'A7629NBSDescricao',fld:'NBSDESCRICAO'}],[{ctrl:'NBSCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NBSCODIGO","Title")',ctrl:'NBSCODIGO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'vDESCRICAONBS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vDESCRICAONBS","Title")',ctrl:'vDESCRICAONBS',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27NBSCod',fld:'vNBSCOD'},{av:'AV28NBSDesc',fld:'vNBSDESC'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27NBSCod',fld:'vNBSCOD'},{av:'AV28NBSDesc',fld:'vNBSDESC'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'A7629NBSDescricao',fld:'NBSDESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27NBSCod',fld:'vNBSCOD'},{av:'AV28NBSDesc',fld:'vNBSDESC'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'A7629NBSDescricao',fld:'NBSDESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27NBSCod',fld:'vNBSCOD'},{av:'AV28NBSDesc',fld:'vNBSDESC'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'A7629NBSDescricao',fld:'NBSDESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27NBSCod',fld:'vNBSCOD'},{av:'AV28NBSDesc',fld:'vNBSDESC'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV34Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'AV35Pgmdesc',fld:'vPGMDESC'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV39Qtdpaggeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27NBSCod',fld:'vNBSCOD'},{av:'AV28NBSDesc',fld:'vNBSDESC'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'A7629NBSDescricao',fld:'NBSDESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A7634NBSCodigo',fld:'NBSCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27NBSCod',fld:'vNBSCOD'},{av:'AV28NBSDesc',fld:'vNBSDESC'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[{av:'A7634NBSCodigo',fld:'NBSCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A7634NBSCodigo',fld:'NBSCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27NBSCod',fld:'vNBSCOD'},{av:'AV28NBSDesc',fld:'vNBSDESC'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[{av:'A7634NBSCodigo',fld:'NBSCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A7634NBSCodigo',fld:'NBSCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27NBSCod',fld:'vNBSCOD'},{av:'AV28NBSDesc',fld:'vNBSDESC'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[{av:'A7634NBSCodigo',fld:'NBSCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["LOAD"] = [[{av:'A7629NBSDescricao',fld:'NBSDESCRICAO'}],[{av:'AV30DescricaoNBS',fld:'vDESCRICAONBS'},{av:'gx.fn.getCtrlProperty("vDESCRICAONBS","Tooltiptext")',ctrl:'vDESCRICAONBS',prop:'Tooltiptext'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27NBSCod',fld:'vNBSCOD'},{av:'AV28NBSDesc',fld:'vNBSDESC'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'A7629NBSDescricao',fld:'NBSDESCRICAO'}],[]];
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV34Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A7629NBSDescricao", "NBSDESCRICAO", 0, "svchar");
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV34Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A7629NBSDescricao", "NBSDESCRICAO", 0, "svchar");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[60]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV31SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV34Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A7629NBSDescricao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hnbs());
