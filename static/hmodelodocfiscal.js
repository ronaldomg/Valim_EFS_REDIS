/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:18:1.97
*/
gx.evt.autoSkip = false;
gx.define('hmodelodocfiscal', false, function () {
   this.ServerClass =  "hmodelodocfiscal" ;
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
      this.AV29SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV32Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.e11tt2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12tt2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17tt2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13tt2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14tt2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15tt2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16tt2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20tt2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21tt2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22tt2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e24tt2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25tt2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26tt2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,18,21,24,26,28,30,32,34,37,39,40,44,45,46,47,48,49,50,56];
   this.GXLastCtrlId =56;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",43,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmodelodocfiscal",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(4665,44,"MODELODOCFISCALCODIGO","","","ModeloDocFiscalCodigo","char",0,"px",2,2,"left",null,[],4665,"ModeloDocFiscalCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5160,45,"MODELODOCFISCALDESCRICAO","","","ModeloDocFiscalDescricao","svchar",0,"px",80,80,"left",null,[],5160,"ModeloDocFiscalDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(5161,46,"MODELODOCFISCALSNOBRCHAVE","Chave Obrigatória","","ModeloDocFiscalSnObrChave","char",0,"px",1,1,"left",null,[],5161,"ModeloDocFiscalSnObrChave",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Modelodocfiscalsnobrchave","vMODELODOCFISCALSNOBRCHAVE",47,0,"px",17,"px",null,"","","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",48,0,"px",17,"px","e20tt2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",49,0,"px",17,"px","e21tt2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",50,0,"px",17,"px","e22tt2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMODELODOCFISCALCODIGO",gxz:"ZV28ModeloDocFiscalCodigo",gxold:"OV28ModeloDocFiscalCodigo",gxvar:"AV28ModeloDocFiscalCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ModeloDocFiscalCodigo=Value},v2z:function(Value){gx.O.ZV28ModeloDocFiscalCodigo=Value},v2c:function(){gx.fn.setControlValue("vMODELODOCFISCALCODIGO",gx.O.AV28ModeloDocFiscalCodigo,0)},c2v:function(){gx.O.AV28ModeloDocFiscalCodigo=this.val()},val:function(){return gx.fn.getControlValue("vMODELODOCFISCALCODIGO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TABLE4",grid:0};
   GXValidFnc[21]={fld:"TABLE6",grid:0};
   GXValidFnc[24]={fld:"IMAGE2",grid:0};
   GXValidFnc[26]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[28]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[30]={fld:"IMAGE1",grid:0};
   GXValidFnc[32]={fld:"BTNHELP",grid:0};
   GXValidFnc[34]={fld:"TABLE5",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELODOCFISCALCODIGO",gxz:"Z4665ModeloDocFiscalCodigo",gxold:"O4665ModeloDocFiscalCodigo",gxvar:"A4665ModeloDocFiscalCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4665ModeloDocFiscalCodigo=Value},v2z:function(Value){gx.O.Z4665ModeloDocFiscalCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("MODELODOCFISCALCODIGO",row || gx.fn.currentGridRowImpl(43),gx.O.A4665ModeloDocFiscalCodigo,0)},c2v:function(){gx.O.A4665ModeloDocFiscalCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELODOCFISCALCODIGO",row || gx.fn.currentGridRowImpl(43))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"svchar",len:80,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELODOCFISCALDESCRICAO",gxz:"Z5160ModeloDocFiscalDescricao",gxold:"O5160ModeloDocFiscalDescricao",gxvar:"A5160ModeloDocFiscalDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5160ModeloDocFiscalDescricao=Value},v2z:function(Value){gx.O.Z5160ModeloDocFiscalDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("MODELODOCFISCALDESCRICAO",row || gx.fn.currentGridRowImpl(43),gx.O.A5160ModeloDocFiscalDescricao,0)},c2v:function(){gx.O.A5160ModeloDocFiscalDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELODOCFISCALDESCRICAO",row || gx.fn.currentGridRowImpl(43))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELODOCFISCALSNOBRCHAVE",gxz:"Z5161ModeloDocFiscalSnObrChave",gxold:"O5161ModeloDocFiscalSnObrChave",gxvar:"A5161ModeloDocFiscalSnObrChave",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5161ModeloDocFiscalSnObrChave=Value},v2z:function(Value){gx.O.Z5161ModeloDocFiscalSnObrChave=Value},v2c:function(row){gx.fn.setGridControlValue("MODELODOCFISCALSNOBRCHAVE",row || gx.fn.currentGridRowImpl(43),gx.O.A5161ModeloDocFiscalSnObrChave,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5161ModeloDocFiscalSnObrChave=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELODOCFISCALSNOBRCHAVE",row || gx.fn.currentGridRowImpl(43))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vMODELODOCFISCALSNOBRCHAVE",gxz:"ZV27ModeloDocFiscalSnObrChave",gxold:"OV27ModeloDocFiscalSnObrChave",gxvar:"AV27ModeloDocFiscalSnObrChave",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV27ModeloDocFiscalSnObrChave=Value},v2z:function(Value){gx.O.ZV27ModeloDocFiscalSnObrChave=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vMODELODOCFISCALSNOBRCHAVE",row || gx.fn.currentGridRowImpl(43),gx.O.AV27ModeloDocFiscalSnObrChave,gx.O.AV38Modelodocfiscalsnobrchave_GXI)},c2v:function(){gx.O.AV38Modelodocfiscalsnobrchave_GXI=this.val_GXI();gx.O.AV27ModeloDocFiscalSnObrChave=this.val()},val:function(row){return gx.fn.getGridControlValue("vMODELODOCFISCALSNOBRCHAVE",row || gx.fn.currentGridRowImpl(43))},val_GXI:function(row){return gx.fn.getGridControlValue("vMODELODOCFISCALSNOBRCHAVE_GXI",row || gx.fn.currentGridRowImpl(43))}, gxvar_GXI:'AV38Modelodocfiscalsnobrchave_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(43),gx.O.AV7bmpAlt,gx.O.AV34Bmpalt_GXI)},c2v:function(){gx.O.AV34Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(43))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(43))}, gxvar_GXI:'AV34Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(43),gx.O.AV8bmpExc,gx.O.AV35Bmpexc_GXI)},c2v:function(){gx.O.AV35Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(43))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(43))}, gxvar_GXI:'AV35Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(43),gx.O.AV16bmpCon,gx.O.AV36Bmpcon_GXI)},c2v:function(){gx.O.AV36Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(43))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(43))}, gxvar_GXI:'AV36Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV28ModeloDocFiscalCodigo = "" ;
   this.ZV28ModeloDocFiscalCodigo = "" ;
   this.OV28ModeloDocFiscalCodigo = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z4665ModeloDocFiscalCodigo = "" ;
   this.O4665ModeloDocFiscalCodigo = "" ;
   this.Z5160ModeloDocFiscalDescricao = "" ;
   this.O5160ModeloDocFiscalDescricao = "" ;
   this.Z5161ModeloDocFiscalSnObrChave = "" ;
   this.O5161ModeloDocFiscalSnObrChave = "" ;
   this.ZV27ModeloDocFiscalSnObrChave = "" ;
   this.OV27ModeloDocFiscalSnObrChave = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV28ModeloDocFiscalCodigo = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A4665ModeloDocFiscalCodigo = "" ;
   this.A5160ModeloDocFiscalDescricao = "" ;
   this.A5161ModeloDocFiscalSnObrChave = "" ;
   this.AV27ModeloDocFiscalSnObrChave = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV29SnRecuperaFiltro = "" ;
   this.AV32Pgmname = "" ;
   this.Events = {"e11tt2_client": ["'ANTERIOR'", true] ,"e12tt2_client": ["'PROXIMO'", true] ,"e17tt2_client": ["VPAGINA.CLICK", true] ,"e13tt2_client": ["'NOVO'", true] ,"e14tt2_client": ["'FECHAR'", true] ,"e15tt2_client": ["'IMPRIMIR'", true] ,"e16tt2_client": ["'PROCURAR'", true] ,"e20tt2_client": ["'ALTERAR'", true] ,"e21tt2_client": ["'EXCLUIR'", true] ,"e22tt2_client": ["'CONSULTAR'", true] ,"e24tt2_client": ["'ATUALIZAPAGINA'", true] ,"e25tt2_client": ["ENTER", true] ,"e26tt2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ModeloDocFiscalCodigo',fld:'vMODELODOCFISCALCODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV32Pgmname',fld:'vPGMNAME'},{av:'A5161ModeloDocFiscalSnObrChave',fld:'MODELODOCFISCALSNOBRCHAVE'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ModeloDocFiscalCodigo',fld:'vMODELODOCFISCALCODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV32Pgmname',fld:'vPGMNAME'},{av:'A5161ModeloDocFiscalSnObrChave',fld:'MODELODOCFISCALSNOBRCHAVE'}],[{ctrl:'MODELODOCFISCALCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MODELODOCFISCALCODIGO","Title")',ctrl:'MODELODOCFISCALCODIGO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'MODELODOCFISCALDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MODELODOCFISCALDESCRICAO","Title")',ctrl:'MODELODOCFISCALDESCRICAO',prop:'Title'},{ctrl:'vMODELODOCFISCALSNOBRCHAVE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vMODELODOCFISCALSNOBRCHAVE","Title")',ctrl:'vMODELODOCFISCALSNOBRCHAVE',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28ModeloDocFiscalCodigo',fld:'vMODELODOCFISCALCODIGO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ModeloDocFiscalCodigo',fld:'vMODELODOCFISCALCODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV32Pgmname',fld:'vPGMNAME'},{av:'A5161ModeloDocFiscalSnObrChave',fld:'MODELODOCFISCALSNOBRCHAVE'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ModeloDocFiscalCodigo',fld:'vMODELODOCFISCALCODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV32Pgmname',fld:'vPGMNAME'},{av:'A5161ModeloDocFiscalSnObrChave',fld:'MODELODOCFISCALSNOBRCHAVE'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ModeloDocFiscalCodigo',fld:'vMODELODOCFISCALCODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV32Pgmname',fld:'vPGMNAME'},{av:'A5161ModeloDocFiscalSnObrChave',fld:'MODELODOCFISCALSNOBRCHAVE'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28ModeloDocFiscalCodigo',fld:'vMODELODOCFISCALCODIGO'},{av:'AV32Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV32Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV32Pgmname',fld:'vPGMNAME'},{av:'AV33Pgmdesc',fld:'vPGMDESC'}],[{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV37Qtdpaggeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ModeloDocFiscalCodigo',fld:'vMODELODOCFISCALCODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV32Pgmname',fld:'vPGMNAME'},{av:'A5161ModeloDocFiscalSnObrChave',fld:'MODELODOCFISCALSNOBRCHAVE'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A4665ModeloDocFiscalCodigo',fld:'MODELODOCFISCALCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28ModeloDocFiscalCodigo',fld:'vMODELODOCFISCALCODIGO'},{av:'AV32Pgmname',fld:'vPGMNAME'}],[{av:'A4665ModeloDocFiscalCodigo',fld:'MODELODOCFISCALCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A4665ModeloDocFiscalCodigo',fld:'MODELODOCFISCALCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28ModeloDocFiscalCodigo',fld:'vMODELODOCFISCALCODIGO'},{av:'AV32Pgmname',fld:'vPGMNAME'}],[{av:'A4665ModeloDocFiscalCodigo',fld:'MODELODOCFISCALCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A4665ModeloDocFiscalCodigo',fld:'MODELODOCFISCALCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28ModeloDocFiscalCodigo',fld:'vMODELODOCFISCALCODIGO'},{av:'AV32Pgmname',fld:'vPGMNAME'}],[{av:'A4665ModeloDocFiscalCodigo',fld:'MODELODOCFISCALCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A5161ModeloDocFiscalSnObrChave',fld:'MODELODOCFISCALSNOBRCHAVE'}],[{av:'AV27ModeloDocFiscalSnObrChave',fld:'vMODELODOCFISCALSNOBRCHAVE'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ModeloDocFiscalCodigo',fld:'vMODELODOCFISCALCODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV32Pgmname',fld:'vPGMNAME'},{av:'A5161ModeloDocFiscalSnObrChave',fld:'MODELODOCFISCALSNOBRCHAVE'}],[]];
   this.setVCMap("AV29SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV32Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV29SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV32Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[56]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV29SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV32Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A5161ModeloDocFiscalSnObrChave", rfrProp:"Value", gxAttId:"5161"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodelodocfiscal());
