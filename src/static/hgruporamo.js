/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:36:57.14
*/
gx.evt.autoSkip = false;
gx.define('hgruporamo', false, function () {
   this.ServerClass =  "hgruporamo" ;
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
      this.AV10EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV25SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e1124c2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e1224c2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e2024c2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e2124c2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e2224c2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e1724c2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e1324c2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e1424c2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1524c2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e1624c2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e2424c2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e2524c2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,19,21,31,34,37,39,41,43,45,47,50,52,53,57,58,59,60,61,68,69];
   this.GXLastCtrlId =69;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",56,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hgruporamo",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(10016,57,"GRUPORAMOCODIGO","","","GrupoRamoCodigo","svchar",0,"px",2,2,"left",null,[],10016,"GrupoRamoCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(10098,58,"GRUPORAMODESCRICAO","","","GrupoRamoDescricao","svchar",0,"px",50,50,"left",null,[],10098,"GrupoRamoDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",59,0,"px",17,"px","e2024c2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",60,0,"px",17,"px","e2124c2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",61,0,"px",17,"px","e2224c2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE6",grid:0};
   GXValidFnc[11]={fld:"TABLE3",grid:0};
   GXValidFnc[14]={fld:"TXTFILTRO", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"svchar",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGRUPORAMOCODIGO",gxz:"ZV28GrupoRamoCodigo",gxold:"OV28GrupoRamoCodigo",gxvar:"AV28GrupoRamoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28GrupoRamoCodigo=Value},v2z:function(Value){gx.O.ZV28GrupoRamoCodigo=Value},v2c:function(){gx.fn.setControlValue("vGRUPORAMOCODIGO",gx.O.AV28GrupoRamoCodigo,0)},c2v:function(){gx.O.AV28GrupoRamoCodigo=this.val()},val:function(){return gx.fn.getControlValue("vGRUPORAMOCODIGO")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TXTFILTRO2", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGRUPORAMODESCRICAO",gxz:"ZV29GrupoRamoDescricao",gxold:"OV29GrupoRamoDescricao",gxvar:"AV29GrupoRamoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29GrupoRamoDescricao=Value},v2z:function(Value){gx.O.ZV29GrupoRamoDescricao=Value},v2c:function(){gx.fn.setControlValue("vGRUPORAMODESCRICAO",gx.O.AV29GrupoRamoDescricao,0)},c2v:function(){gx.O.AV29GrupoRamoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vGRUPORAMODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLE4",grid:0};
   GXValidFnc[34]={fld:"TABLE8",grid:0};
   GXValidFnc[37]={fld:"BTNINSERIR",grid:0};
   GXValidFnc[39]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[41]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[43]={fld:"IMAGE1",grid:0};
   GXValidFnc[45]={fld:"BTNHELP",grid:0};
   GXValidFnc[47]={fld:"TABLE5",grid:0};
   GXValidFnc[50]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV21Pagina",gxold:"OV21Pagina",gxvar:"AV21Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV21Pagina)},c2v:function(){gx.O.AV21Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV22PaginaAux",gxold:"OV22PaginaAux",gxvar:"AV22PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV22PaginaAux,0)},c2v:function(){gx.O.AV22PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"svchar",len:2,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRUPORAMOCODIGO",gxz:"Z10016GrupoRamoCodigo",gxold:"O10016GrupoRamoCodigo",gxvar:"A10016GrupoRamoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10016GrupoRamoCodigo=Value},v2z:function(Value){gx.O.Z10016GrupoRamoCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPORAMOCODIGO",row || gx.fn.currentGridRowImpl(56),gx.O.A10016GrupoRamoCodigo,0)},c2v:function(){gx.O.A10016GrupoRamoCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPORAMOCODIGO",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRUPORAMODESCRICAO",gxz:"Z10098GrupoRamoDescricao",gxold:"O10098GrupoRamoDescricao",gxvar:"A10098GrupoRamoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10098GrupoRamoDescricao=Value},v2z:function(Value){gx.O.Z10098GrupoRamoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPORAMODESCRICAO",row || gx.fn.currentGridRowImpl(56),gx.O.A10098GrupoRamoDescricao,0)},c2v:function(){gx.O.A10098GrupoRamoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPORAMODESCRICAO",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV6bmpAlt",gxold:"OV6bmpAlt",gxvar:"AV6bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV6bmpAlt=Value},v2z:function(Value){gx.O.ZV6bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(56),gx.O.AV6bmpAlt,gx.O.AV34Bmpalt_GXI)},c2v:function(){gx.O.AV34Bmpalt_GXI=this.val_GXI();gx.O.AV6bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(56))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(56))}, gxvar_GXI:'AV34Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(56),gx.O.AV8bmpExc,gx.O.AV35Bmpexc_GXI)},c2v:function(){gx.O.AV35Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(56))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(56))}, gxvar_GXI:'AV35Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV7bmpCon",gxold:"OV7bmpCon",gxvar:"AV7bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpCon=Value},v2z:function(Value){gx.O.ZV7bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(56),gx.O.AV7bmpCon,gx.O.AV36Bmpcon_GXI)},c2v:function(){gx.O.AV36Bmpcon_GXI=this.val_GXI();gx.O.AV7bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(56))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(56))}, gxvar_GXI:'AV36Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV20OrderedBy",gxold:"OV20OrderedBy",gxvar:"AV20OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV20OrderedBy,0)},c2v:function(){gx.O.AV20OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV5AcessoSistemaSequencia",gxold:"OV5AcessoSistemaSequencia",gxvar:"AV5AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV5AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV5AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   this.AV28GrupoRamoCodigo = "" ;
   this.ZV28GrupoRamoCodigo = "" ;
   this.OV28GrupoRamoCodigo = "" ;
   this.AV29GrupoRamoDescricao = "" ;
   this.ZV29GrupoRamoDescricao = "" ;
   this.OV29GrupoRamoDescricao = "" ;
   this.AV21Pagina = 0 ;
   this.ZV21Pagina = 0 ;
   this.OV21Pagina = 0 ;
   this.AV22PaginaAux = 0 ;
   this.ZV22PaginaAux = 0 ;
   this.OV22PaginaAux = 0 ;
   this.Z10016GrupoRamoCodigo = "" ;
   this.O10016GrupoRamoCodigo = "" ;
   this.Z10098GrupoRamoDescricao = "" ;
   this.O10098GrupoRamoDescricao = "" ;
   this.ZV6bmpAlt = "" ;
   this.OV6bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV7bmpCon = "" ;
   this.OV7bmpCon = "" ;
   this.AV20OrderedBy = 0 ;
   this.ZV20OrderedBy = 0 ;
   this.OV20OrderedBy = 0 ;
   this.AV5AcessoSistemaSequencia = 0 ;
   this.ZV5AcessoSistemaSequencia = 0 ;
   this.OV5AcessoSistemaSequencia = 0 ;
   this.AV28GrupoRamoCodigo = "" ;
   this.AV29GrupoRamoDescricao = "" ;
   this.AV21Pagina = 0 ;
   this.AV22PaginaAux = 0 ;
   this.AV20OrderedBy = 0 ;
   this.AV5AcessoSistemaSequencia = 0 ;
   this.A10015GrupoRamoEmpId = "" ;
   this.A10016GrupoRamoCodigo = "" ;
   this.A10098GrupoRamoDescricao = "" ;
   this.AV6bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV7bmpCon = "" ;
   this.AV10EmpresaPadrao = "" ;
   this.AV25SnRecuperaFiltro = "" ;
   this.Events = {"e1124c2_client": ["'ANTERIOR'", true] ,"e1224c2_client": ["'PROXIMO'", true] ,"e2024c2_client": ["'ALTERAR'", true] ,"e2124c2_client": ["'EXCLUIR'", true] ,"e2224c2_client": ["'CONSULTAR'", true] ,"e1724c2_client": ["VPAGINA.CLICK", true] ,"e1324c2_client": ["'NOVO'", true] ,"e1424c2_client": ["'FECHAR'", true] ,"e1524c2_client": ["'IMPRIMIR'", true] ,"e1624c2_client": ["'PROCURAR'", true] ,"e2424c2_client": ["ENTER", true] ,"e2524c2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28GrupoRamoCodigo',fld:'vGRUPORAMOCODIGO'},{av:'AV29GrupoRamoDescricao',fld:'vGRUPORAMODESCRICAO'},{av:'AV20OrderedBy',fld:'vORDEREDBY'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV6bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV7bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV25SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28GrupoRamoCodigo',fld:'vGRUPORAMOCODIGO'},{av:'AV29GrupoRamoDescricao',fld:'vGRUPORAMODESCRICAO'},{av:'AV20OrderedBy',fld:'vORDEREDBY'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV6bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV7bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV25SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'GRUPORAMOCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GRUPORAMOCODIGO","Title")',ctrl:'GRUPORAMOCODIGO',prop:'Title'},{av:'AV13Imagem',fld:'vIMAGEM'},{ctrl:'GRUPORAMODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GRUPORAMODESCRICAO","Title")',ctrl:'GRUPORAMODESCRICAO',prop:'Title'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'},{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV19NumPagina',fld:'vNUMPAGINA'},{av:'AV25SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV11filtros',fld:'vFILTROS'},{av:'AV20OrderedBy',fld:'vORDEREDBY'},{av:'AV29GrupoRamoDescricao',fld:'vGRUPORAMODESCRICAO'},{av:'AV28GrupoRamoCodigo',fld:'vGRUPORAMOCODIGO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28GrupoRamoCodigo',fld:'vGRUPORAMOCODIGO'},{av:'AV29GrupoRamoDescricao',fld:'vGRUPORAMODESCRICAO'},{av:'AV20OrderedBy',fld:'vORDEREDBY'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV6bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV7bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV25SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV21Pagina',fld:'vPAGINA'}],[{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV11filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28GrupoRamoCodigo',fld:'vGRUPORAMOCODIGO'},{av:'AV29GrupoRamoDescricao',fld:'vGRUPORAMODESCRICAO'},{av:'AV20OrderedBy',fld:'vORDEREDBY'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV6bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV7bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV25SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV11filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A10016GrupoRamoCodigo',fld:'GRUPORAMOCODIGO'},{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV20OrderedBy',fld:'vORDEREDBY'},{av:'AV29GrupoRamoDescricao',fld:'vGRUPORAMODESCRICAO'},{av:'AV28GrupoRamoCodigo',fld:'vGRUPORAMOCODIGO'}],[{av:'A10016GrupoRamoCodigo',fld:'GRUPORAMOCODIGO'},{av:'AV11filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A10016GrupoRamoCodigo',fld:'GRUPORAMOCODIGO'},{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV20OrderedBy',fld:'vORDEREDBY'},{av:'AV29GrupoRamoDescricao',fld:'vGRUPORAMODESCRICAO'},{av:'AV28GrupoRamoCodigo',fld:'vGRUPORAMOCODIGO'}],[{av:'A10016GrupoRamoCodigo',fld:'GRUPORAMOCODIGO'},{av:'AV11filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A10016GrupoRamoCodigo',fld:'GRUPORAMOCODIGO'},{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV20OrderedBy',fld:'vORDEREDBY'},{av:'AV29GrupoRamoDescricao',fld:'vGRUPORAMODESCRICAO'},{av:'AV28GrupoRamoCodigo',fld:'vGRUPORAMOCODIGO'}],[{av:'A10016GrupoRamoCodigo',fld:'GRUPORAMOCODIGO'},{av:'AV11filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28GrupoRamoCodigo',fld:'vGRUPORAMOCODIGO'},{av:'AV29GrupoRamoDescricao',fld:'vGRUPORAMODESCRICAO'},{av:'AV20OrderedBy',fld:'vORDEREDBY'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV6bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV7bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV25SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV21Pagina',fld:'vPAGINA'}],[{av:'AV11filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV5AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV32Pgmname',fld:'vPGMNAME'},{av:'AV33Pgmdesc',fld:'vPGMDESC'}],[{av:'AV18NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV17NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV23QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28GrupoRamoCodigo',fld:'vGRUPORAMOCODIGO'},{av:'AV29GrupoRamoDescricao',fld:'vGRUPORAMODESCRICAO'},{av:'AV20OrderedBy',fld:'vORDEREDBY'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV6bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV7bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV25SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV21Pagina',fld:'vPAGINA'}],[{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV11filtros',fld:'vFILTROS'}]];
   this.setVCMap("AV10EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV25SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV10EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV25SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[21]);
   GridContainer.addRefreshingVar(this.GXValidFnc[68]);
   GridContainer.addRefreshingVar({rfrVar:"AV10EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV6bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV6bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV25SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hgruporamo());
