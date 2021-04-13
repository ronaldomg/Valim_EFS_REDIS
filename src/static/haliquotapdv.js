/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:50:29.61
*/
gx.evt.autoSkip = false;
gx.define('haliquotapdv', false, function () {
   this.ServerClass =  "haliquotapdv" ;
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
      this.AV32SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV35Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV28PDVAtivoFiltro=gx.fn.getControlValue("vPDVATIVOFILTRO") ;
   };
   this.e11m82_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12m82_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16m82_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13m82_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14m82_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15m82_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e19m82_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e20m82_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e21m82_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e22m82_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e24m82_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e25m82_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,25,28,30,32,35,38,41,43,45,47,49,52,54,55,59,60,61,62,63,70];
   this.GXLastCtrlId =70;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",58,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"haliquotapdv",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3434,59,"PDVCODIGO","","","PDVCodigo","int",0,"px",10,10,"right",null,[],3434,"PDVCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3435,60,"ALIQUOTAPDV","","","AliquotaPDV","svchar",0,"px",10,10,"left",null,[],3435,"AliquotaPDV",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",61,0,"px",17,"px","e19m82_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",62,0,"px",17,"px","e20m82_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",63,0,"px",17,"px","e21m82_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE7",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE6",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPDVCODIGO",gxz:"ZV27PDVCodigo",gxold:"OV27PDVCodigo",gxvar:"AV27PDVCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27PDVCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27PDVCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPDVCODIGO",gx.O.AV27PDVCodigo,0)},c2v:function(){gx.O.AV27PDVCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPDVCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPDVATIVO",gxz:"ZV29PDVAtivo",gxold:"OV29PDVAtivo",gxvar:"AV29PDVAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29PDVAtivo=Value},v2z:function(Value){gx.O.ZV29PDVAtivo=Value},v2c:function(){gx.fn.setControlValue("vPDVATIVO",gx.O.AV29PDVAtivo,0)},c2v:function(){gx.O.AV29PDVAtivo=this.val()},val:function(){return gx.fn.getControlValue("vPDVATIVO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[25]={fld:"TABLE8",grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV30FilialId",gxold:"OV30FilialId",gxvar:"AV30FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV30FilialId,0)},c2v:function(){gx.O.AV30FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV31FilialNome",gxold:"OV31FilialNome",gxvar:"AV31FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31FilialNome=Value},v2z:function(Value){gx.O.ZV31FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV31FilialNome,0)},c2v:function(){gx.O.AV31FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TABLE4",grid:0};
   GXValidFnc[38]={fld:"TABLE9",grid:0};
   GXValidFnc[41]={fld:"IMAGE2",grid:0};
   GXValidFnc[43]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[45]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[47]={fld:"BTNHELP",grid:0};
   GXValidFnc[49]={fld:"TABLE5",grid:0};
   GXValidFnc[52]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PDVCODIGO",gxz:"Z3434PDVCodigo",gxold:"O3434PDVCodigo",gxvar:"A3434PDVCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3434PDVCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3434PDVCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PDVCODIGO",row || gx.fn.currentGridRowImpl(58),gx.O.A3434PDVCodigo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3434PDVCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PDVCODIGO",row || gx.fn.currentGridRowImpl(58),'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"svchar",len:10,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ALIQUOTAPDV",gxz:"Z3435AliquotaPDV",gxold:"O3435AliquotaPDV",gxvar:"A3435AliquotaPDV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3435AliquotaPDV=Value},v2z:function(Value){gx.O.Z3435AliquotaPDV=Value},v2c:function(row){gx.fn.setGridControlValue("ALIQUOTAPDV",row || gx.fn.currentGridRowImpl(58),gx.O.A3435AliquotaPDV,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3435AliquotaPDV=this.val()},val:function(row){return gx.fn.getGridControlValue("ALIQUOTAPDV",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(58),gx.O.AV7bmpAlt,gx.O.AV37Bmpalt_GXI)},c2v:function(){gx.O.AV37Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV37Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(58),gx.O.AV8bmpExc,gx.O.AV38Bmpexc_GXI)},c2v:function(){gx.O.AV38Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV38Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(58),gx.O.AV16bmpCon,gx.O.AV39Bmpcon_GXI)},c2v:function(){gx.O.AV39Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV39Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27PDVCodigo = 0 ;
   this.ZV27PDVCodigo = 0 ;
   this.OV27PDVCodigo = 0 ;
   this.AV29PDVAtivo = "" ;
   this.ZV29PDVAtivo = "" ;
   this.OV29PDVAtivo = "" ;
   this.AV30FilialId = 0 ;
   this.ZV30FilialId = 0 ;
   this.OV30FilialId = 0 ;
   this.AV31FilialNome = "" ;
   this.ZV31FilialNome = "" ;
   this.OV31FilialNome = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z3434PDVCodigo = 0 ;
   this.O3434PDVCodigo = 0 ;
   this.Z3435AliquotaPDV = "" ;
   this.O3435AliquotaPDV = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27PDVCodigo = 0 ;
   this.AV29PDVAtivo = "" ;
   this.AV30FilialId = 0 ;
   this.AV31FilialNome = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV28PDVAtivoFiltro = "" ;
   this.A3434PDVCodigo = 0 ;
   this.A3435AliquotaPDV = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV32SnRecuperaFiltro = "" ;
   this.AV35Pgmname = "" ;
   this.Events = {"e11m82_client": ["'ANTERIOR'", true] ,"e12m82_client": ["'PROXIMO'", true] ,"e16m82_client": ["VPAGINA.CLICK", true] ,"e13m82_client": ["'NOVO'", true] ,"e14m82_client": ["'FECHAR'", true] ,"e15m82_client": ["'PROCURAR'", true] ,"e19m82_client": ["'ALTERAR'", true] ,"e20m82_client": ["'EXCLUIR'", true] ,"e21m82_client": ["'CONSULTAR'", true] ,"e22m82_client": ["'ATUALIZAPAGINA'", true] ,"e24m82_client": ["ENTER", true] ,"e25m82_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27PDVCodigo',fld:'vPDVCODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27PDVCodigo',fld:'vPDVCODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{ctrl:'PDVCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PDVCODIGO","Title")',ctrl:'PDVCODIGO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'ALIQUOTAPDV',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALIQUOTAPDV","Title")',ctrl:'ALIQUOTAPDV',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30FilialId',fld:'vFILIALID'},{av:'AV31FilialNome',fld:'vFILIALNOME'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27PDVCodigo',fld:'vPDVCODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV30FilialId',fld:'vFILIALID'},{av:'AV31FilialNome',fld:'vFILIALNOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27PDVCodigo',fld:'vPDVCODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV30FilialId',fld:'vFILIALID'},{av:'AV31FilialNome',fld:'vFILIALNOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27PDVCodigo',fld:'vPDVCODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV30FilialId',fld:'vFILIALID'},{av:'AV31FilialNome',fld:'vFILIALNOME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV27PDVCodigo',fld:'vPDVCODIGO'},{av:'AV28PDVAtivoFiltro',fld:'vPDVATIVOFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30FilialId',fld:'vFILIALID'},{av:'AV31FilialNome',fld:'vFILIALNOME'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'AV28PDVAtivoFiltro',fld:'vPDVATIVOFILTRO'},{av:'AV27PDVCodigo',fld:'vPDVCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV35Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27PDVCodigo',fld:'vPDVCODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV30FilialId',fld:'vFILIALID'},{av:'AV31FilialNome',fld:'vFILIALNOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A3434PDVCodigo',fld:'PDVCODIGO'},{av:'A3435AliquotaPDV',fld:'ALIQUOTAPDV'},{av:'AV28PDVAtivoFiltro',fld:'vPDVATIVOFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30FilialId',fld:'vFILIALID'},{av:'AV31FilialNome',fld:'vFILIALNOME'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'AV28PDVAtivoFiltro',fld:'vPDVATIVOFILTRO'},{av:'A3435AliquotaPDV',fld:'ALIQUOTAPDV'},{av:'A3434PDVCodigo',fld:'PDVCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A3434PDVCodigo',fld:'PDVCODIGO'},{av:'A3435AliquotaPDV',fld:'ALIQUOTAPDV'},{av:'AV28PDVAtivoFiltro',fld:'vPDVATIVOFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30FilialId',fld:'vFILIALID'},{av:'AV31FilialNome',fld:'vFILIALNOME'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'AV28PDVAtivoFiltro',fld:'vPDVATIVOFILTRO'},{av:'A3435AliquotaPDV',fld:'ALIQUOTAPDV'},{av:'A3434PDVCodigo',fld:'PDVCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A3434PDVCodigo',fld:'PDVCODIGO'},{av:'A3435AliquotaPDV',fld:'ALIQUOTAPDV'},{av:'AV28PDVAtivoFiltro',fld:'vPDVATIVOFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30FilialId',fld:'vFILIALID'},{av:'AV31FilialNome',fld:'vFILIALNOME'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'AV28PDVAtivoFiltro',fld:'vPDVATIVOFILTRO'},{av:'A3435AliquotaPDV',fld:'ALIQUOTAPDV'},{av:'A3434PDVCodigo',fld:'PDVCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27PDVCodigo',fld:'vPDVCODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[]];
   this.setVCMap("AV32SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV35Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV28PDVAtivoFiltro", "vPDVATIVOFILTRO", 0, "char");
   this.setVCMap("AV32SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV35Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[70]);
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV32SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV35Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new haliquotapdv());
