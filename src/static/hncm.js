/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:2:28.43
*/
gx.evt.autoSkip = false;
gx.define('hncm', false, function () {
   this.ServerClass =  "hncm" ;
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
      this.AV30SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV34Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.A2976NCMDescricao=gx.fn.getControlValue("NCMDESCRICAO") ;
   };
   this.e11pd2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12pd2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17pd2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13pd2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14pd2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15pd2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16pd2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20pd2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21pd2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22pd2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e24pd2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25pd2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26pd2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,39,42,44,45,49,50,51,52,53,60];
   this.GXLastCtrlId =60;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",48,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hncm",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2979,49,"NCMCODIGO","","","NCMCodigo","int",0,"px",8,8,"right",null,[],2979,"NCMCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Descricaoncm",50,"vDESCRICAONCM","","","DescricaoNCM","char",0,"px",50,50,"left",null,[],"Descricaoncm","DescricaoNCM",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",51,0,"px",17,"px","e20pd2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",52,0,"px",17,"px","e21pd2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",53,0,"px",17,"px","e22pd2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vNCMCOD",gxz:"ZV27NCMCod",gxold:"OV27NCMCod",gxvar:"AV27NCMCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27NCMCod=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27NCMCod=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNCMCOD",gx.O.AV27NCMCod,0)},c2v:function(){gx.O.AV27NCMCod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNCMCOD",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vNCMDESC",gxz:"ZV28NCMDesc",gxold:"OV28NCMDesc",gxvar:"AV28NCMDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28NCMDesc=Value},v2z:function(Value){gx.O.ZV28NCMDesc=Value},v2c:function(){gx.fn.setControlValue("vNCMDESC",gx.O.AV28NCMDesc,0)},c2v:function(){gx.O.AV28NCMDesc=this.val()},val:function(){return gx.fn.getControlValue("vNCMDESC")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE6",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"IMAGE1",grid:0};
   GXValidFnc[37]={fld:"BTNHELP",grid:0};
   GXValidFnc[39]={fld:"TABLE5",grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEPAG",gxz:"ZV31QtdePag",gxold:"OV31QtdePag",gxvar:"AV31QtdePag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31QtdePag=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31QtdePag=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEPAG",gx.O.AV31QtdePag,0)},c2v:function(){gx.O.AV31QtdePag=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEPAG",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"NCMCODIGO",gxz:"Z2979NCMCodigo",gxold:"O2979NCMCodigo",gxvar:"A2979NCMCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2979NCMCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2979NCMCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NCMCODIGO",row || gx.fn.currentGridRowImpl(48),gx.O.A2979NCMCodigo,0)},c2v:function(){gx.O.A2979NCMCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NCMCODIGO",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"char",len:50,dec:0,sign:false,ro:0,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAONCM",gxz:"ZV29DescricaoNCM",gxold:"OV29DescricaoNCM",gxvar:"AV29DescricaoNCM",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV29DescricaoNCM=Value},v2z:function(Value){gx.O.ZV29DescricaoNCM=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCRICAONCM",row || gx.fn.currentGridRowImpl(48),gx.O.AV29DescricaoNCM,0)},c2v:function(){gx.O.AV29DescricaoNCM=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCRICAONCM",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(48),gx.O.AV7bmpAlt,gx.O.AV36Bmpalt_GXI)},c2v:function(){gx.O.AV36Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV36Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48),gx.O.AV8bmpExc,gx.O.AV37Bmpexc_GXI)},c2v:function(){gx.O.AV37Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV37Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(48),gx.O.AV16bmpCon,gx.O.AV38Bmpcon_GXI)},c2v:function(){gx.O.AV38Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV38Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27NCMCod = 0 ;
   this.ZV27NCMCod = 0 ;
   this.OV27NCMCod = 0 ;
   this.AV28NCMDesc = "" ;
   this.ZV28NCMDesc = "" ;
   this.OV28NCMDesc = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV31QtdePag = 0 ;
   this.ZV31QtdePag = 0 ;
   this.OV31QtdePag = 0 ;
   this.Z2979NCMCodigo = 0 ;
   this.O2979NCMCodigo = 0 ;
   this.ZV29DescricaoNCM = "" ;
   this.OV29DescricaoNCM = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27NCMCod = 0 ;
   this.AV28NCMDesc = "" ;
   this.AV5Pagina = 0 ;
   this.AV31QtdePag = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A2976NCMDescricao = "" ;
   this.A2979NCMCodigo = 0 ;
   this.AV29DescricaoNCM = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV30SnRecuperaFiltro = "" ;
   this.AV34Pgmname = "" ;
   this.Events = {"e11pd2_client": ["'ANTERIOR'", true] ,"e12pd2_client": ["'PROXIMO'", true] ,"e17pd2_client": ["VPAGINA.CLICK", true] ,"e13pd2_client": ["'NOVO'", true] ,"e14pd2_client": ["'FECHAR'", true] ,"e15pd2_client": ["'IMPRIMIR'", true] ,"e16pd2_client": ["'PROCURAR'", true] ,"e20pd2_client": ["'ALTERAR'", true] ,"e21pd2_client": ["'EXCLUIR'", true] ,"e22pd2_client": ["'CONSULTAR'", true] ,"e24pd2_client": ["'ATUALIZAPAGINA'", true] ,"e25pd2_client": ["ENTER", true] ,"e26pd2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27NCMCod',fld:'vNCMCOD'},{av:'AV28NCMDesc',fld:'vNCMDESC'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'A2976NCMDescricao',fld:'NCMDESCRICAO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27NCMCod',fld:'vNCMCOD'},{av:'AV28NCMDesc',fld:'vNCMDESC'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'A2976NCMDescricao',fld:'NCMDESCRICAO'}],[{ctrl:'NCMCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NCMCODIGO","Title")',ctrl:'NCMCODIGO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'vDESCRICAONCM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vDESCRICAONCM","Title")',ctrl:'vDESCRICAONCM',prop:'Title'},{av:'AV31QtdePag',fld:'vQTDEPAG'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27NCMCod',fld:'vNCMCOD'},{av:'AV28NCMDesc',fld:'vNCMDESC'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27NCMCod',fld:'vNCMCOD'},{av:'AV28NCMDesc',fld:'vNCMDESC'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'A2976NCMDescricao',fld:'NCMDESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27NCMCod',fld:'vNCMCOD'},{av:'AV28NCMDesc',fld:'vNCMDESC'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'A2976NCMDescricao',fld:'NCMDESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV31QtdePag',fld:'vQTDEPAG'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27NCMCod',fld:'vNCMCOD'},{av:'AV28NCMDesc',fld:'vNCMDESC'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'A2976NCMDescricao',fld:'NCMDESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27NCMCod',fld:'vNCMCOD'},{av:'AV28NCMDesc',fld:'vNCMDESC'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV34Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'AV35Pgmdesc',fld:'vPGMDESC'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV39Qtdpaggeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27NCMCod',fld:'vNCMCOD'},{av:'AV28NCMDesc',fld:'vNCMDESC'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'A2976NCMDescricao',fld:'NCMDESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A2979NCMCodigo',fld:'NCMCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27NCMCod',fld:'vNCMCOD'},{av:'AV28NCMDesc',fld:'vNCMDESC'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[{av:'A2979NCMCodigo',fld:'NCMCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A2979NCMCodigo',fld:'NCMCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27NCMCod',fld:'vNCMCOD'},{av:'AV28NCMDesc',fld:'vNCMDESC'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[{av:'A2979NCMCodigo',fld:'NCMCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A2979NCMCodigo',fld:'NCMCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27NCMCod',fld:'vNCMCOD'},{av:'AV28NCMDesc',fld:'vNCMDESC'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[{av:'A2979NCMCodigo',fld:'NCMCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["LOAD"] = [[{av:'A2976NCMDescricao',fld:'NCMDESCRICAO'}],[{av:'AV29DescricaoNCM',fld:'vDESCRICAONCM'},{av:'gx.fn.getCtrlProperty("vDESCRICAONCM","Tooltiptext")',ctrl:'vDESCRICAONCM',prop:'Tooltiptext'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27NCMCod',fld:'vNCMCOD'},{av:'AV28NCMDesc',fld:'vNCMDESC'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'A2976NCMDescricao',fld:'NCMDESCRICAO'}],[]];
   this.setVCMap("AV30SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV34Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A2976NCMDescricao", "NCMDESCRICAO", 0, "svchar");
   this.setVCMap("AV30SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV34Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A2976NCMDescricao", "NCMDESCRICAO", 0, "svchar");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[60]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV30SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV34Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A2976NCMDescricao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hncm());
