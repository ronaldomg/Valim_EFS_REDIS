/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:59:3.99
*/
gx.evt.autoSkip = false;
gx.define('hesquema', false, function () {
   this.ServerClass =  "hesquema" ;
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
      this.AV31SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV34Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.e11o32_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12o32_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16o32_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13o32_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14o32_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15o32_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19o32_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e20o32_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e21o32_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e22o32_client=function()
   {
      this.executeServerEvent("'CHAMAATRIBUTOS'", true, arguments[0], false, false);
   };
   this.e23o32_client=function()
   {
      this.executeServerEvent("'CHAMADEFCODBAR'", true, arguments[0], false, false);
   };
   this.e24o32_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e26o32_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e27o32_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,40,42,43,47,48,49,50,51,52,53,60];
   this.GXLastCtrlId =60;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hesquema",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2915,47,"ESQUEMACODIGO","","","EsquemaCodigo","int",0,"px",2,2,"right",null,[],2915,"EsquemaCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2912,48,"ESQUEMADESCRICAO","","","EsquemaDescricao","svchar",0,"px",30,30,"left",null,[],2912,"EsquemaDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpatributos","vBMPATRIBUTOS",49,0,"px",17,"px","e22o32_client","","Atributos","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcodbar","vBMPCODBAR",50,0,"px",17,"px","e23o32_client","","Cód. de Barras","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",51,0,"px",17,"px","e19o32_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",52,0,"px",17,"px","e20o32_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",53,0,"px",17,"px","e21o32_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vESQUEMACODIGO",gxz:"ZV27EsquemaCodigo",gxold:"OV27EsquemaCodigo",gxvar:"AV27EsquemaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27EsquemaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27EsquemaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESQUEMACODIGO",gx.O.AV27EsquemaCodigo,0)},c2v:function(){gx.O.AV27EsquemaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESQUEMACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vESQUEMADESCRICAO",gxz:"ZV28EsquemaDescricao",gxold:"OV28EsquemaDescricao",gxvar:"AV28EsquemaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28EsquemaDescricao=Value},v2z:function(Value){gx.O.ZV28EsquemaDescricao=Value},v2c:function(){gx.fn.setControlValue("vESQUEMADESCRICAO",gx.O.AV28EsquemaDescricao,0)},c2v:function(){gx.O.AV28EsquemaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vESQUEMADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE1",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"BTNHELP",grid:0};
   GXValidFnc[37]={fld:"TABLE5",grid:0};
   GXValidFnc[40]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ESQUEMACODIGO",gxz:"Z2915EsquemaCodigo",gxold:"O2915EsquemaCodigo",gxvar:"A2915EsquemaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2915EsquemaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2915EsquemaCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ESQUEMACODIGO",row || gx.fn.currentGridRowImpl(46),gx.O.A2915EsquemaCodigo,0)},c2v:function(){gx.O.A2915EsquemaCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ESQUEMACODIGO",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ESQUEMADESCRICAO",gxz:"Z2912EsquemaDescricao",gxold:"O2912EsquemaDescricao",gxvar:"A2912EsquemaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2912EsquemaDescricao=Value},v2z:function(Value){gx.O.Z2912EsquemaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("ESQUEMADESCRICAO",row || gx.fn.currentGridRowImpl(46),gx.O.A2912EsquemaDescricao,0)},c2v:function(){gx.O.A2912EsquemaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("ESQUEMADESCRICAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPATRIBUTOS",gxz:"ZV29bmpAtributos",gxold:"OV29bmpAtributos",gxvar:"AV29bmpAtributos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV29bmpAtributos=Value},v2z:function(Value){gx.O.ZV29bmpAtributos=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPATRIBUTOS",row || gx.fn.currentGridRowImpl(46),gx.O.AV29bmpAtributos,gx.O.AV39Bmpatributos_GXI)},c2v:function(){gx.O.AV39Bmpatributos_GXI=this.val_GXI();gx.O.AV29bmpAtributos=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPATRIBUTOS",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPATRIBUTOS_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV39Bmpatributos_GXI',nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCODBAR",gxz:"ZV30bmpCodBar",gxold:"OV30bmpCodBar",gxvar:"AV30bmpCodBar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV30bmpCodBar=Value},v2z:function(Value){gx.O.ZV30bmpCodBar=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCODBAR",row || gx.fn.currentGridRowImpl(46),gx.O.AV30bmpCodBar,gx.O.AV40Bmpcodbar_GXI)},c2v:function(){gx.O.AV40Bmpcodbar_GXI=this.val_GXI();gx.O.AV30bmpCodBar=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCODBAR",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCODBAR_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV40Bmpcodbar_GXI',nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(46),gx.O.AV7bmpAlt,gx.O.AV36Bmpalt_GXI)},c2v:function(){gx.O.AV36Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV36Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46),gx.O.AV8bmpExc,gx.O.AV37Bmpexc_GXI)},c2v:function(){gx.O.AV37Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV37Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(46),gx.O.AV16bmpCon,gx.O.AV38Bmpcon_GXI)},c2v:function(){gx.O.AV38Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV38Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27EsquemaCodigo = 0 ;
   this.ZV27EsquemaCodigo = 0 ;
   this.OV27EsquemaCodigo = 0 ;
   this.AV28EsquemaDescricao = "" ;
   this.ZV28EsquemaDescricao = "" ;
   this.OV28EsquemaDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2915EsquemaCodigo = 0 ;
   this.O2915EsquemaCodigo = 0 ;
   this.Z2912EsquemaDescricao = "" ;
   this.O2912EsquemaDescricao = "" ;
   this.ZV29bmpAtributos = "" ;
   this.OV29bmpAtributos = "" ;
   this.ZV30bmpCodBar = "" ;
   this.OV30bmpCodBar = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27EsquemaCodigo = 0 ;
   this.AV28EsquemaDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A2915EsquemaCodigo = 0 ;
   this.A2912EsquemaDescricao = "" ;
   this.AV29bmpAtributos = "" ;
   this.AV30bmpCodBar = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV31SnRecuperaFiltro = "" ;
   this.AV34Pgmname = "" ;
   this.Events = {"e11o32_client": ["'ANTERIOR'", true] ,"e12o32_client": ["'PROXIMO'", true] ,"e16o32_client": ["VPAGINA.CLICK", true] ,"e13o32_client": ["'NOVO'", true] ,"e14o32_client": ["'FECHAR'", true] ,"e15o32_client": ["'PROCURAR'", true] ,"e19o32_client": ["'ALTERAR'", true] ,"e20o32_client": ["'EXCLUIR'", true] ,"e21o32_client": ["'CONSULTAR'", true] ,"e22o32_client": ["'CHAMAATRIBUTOS'", true] ,"e23o32_client": ["'CHAMADEFCODBAR'", true] ,"e24o32_client": ["'ATUALIZAPAGINA'", true] ,"e26o32_client": ["ENTER", true] ,"e27o32_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV28EsquemaDescricao',fld:'vESQUEMADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29bmpAtributos',fld:'vBMPATRIBUTOS'},{av:'gx.fn.getCtrlProperty("vBMPATRIBUTOS","Tooltiptext")',ctrl:'vBMPATRIBUTOS',prop:'Tooltiptext'},{av:'AV30bmpCodBar',fld:'vBMPCODBAR'},{av:'gx.fn.getCtrlProperty("vBMPCODBAR","Tooltiptext")',ctrl:'vBMPCODBAR',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV28EsquemaDescricao',fld:'vESQUEMADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29bmpAtributos',fld:'vBMPATRIBUTOS'},{av:'gx.fn.getCtrlProperty("vBMPATRIBUTOS","Tooltiptext")',ctrl:'vBMPATRIBUTOS',prop:'Tooltiptext'},{av:'AV30bmpCodBar',fld:'vBMPCODBAR'},{av:'gx.fn.getCtrlProperty("vBMPCODBAR","Tooltiptext")',ctrl:'vBMPCODBAR',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[{ctrl:'ESQUEMACODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ESQUEMACODIGO","Title")',ctrl:'ESQUEMACODIGO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'ESQUEMADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ESQUEMADESCRICAO","Title")',ctrl:'ESQUEMADESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV28EsquemaDescricao',fld:'vESQUEMADESCRICAO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV28EsquemaDescricao',fld:'vESQUEMADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29bmpAtributos',fld:'vBMPATRIBUTOS'},{av:'gx.fn.getCtrlProperty("vBMPATRIBUTOS","Tooltiptext")',ctrl:'vBMPATRIBUTOS',prop:'Tooltiptext'},{av:'AV30bmpCodBar',fld:'vBMPCODBAR'},{av:'gx.fn.getCtrlProperty("vBMPCODBAR","Tooltiptext")',ctrl:'vBMPCODBAR',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV28EsquemaDescricao',fld:'vESQUEMADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29bmpAtributos',fld:'vBMPATRIBUTOS'},{av:'gx.fn.getCtrlProperty("vBMPATRIBUTOS","Tooltiptext")',ctrl:'vBMPATRIBUTOS',prop:'Tooltiptext'},{av:'AV30bmpCodBar',fld:'vBMPCODBAR'},{av:'gx.fn.getCtrlProperty("vBMPCODBAR","Tooltiptext")',ctrl:'vBMPCODBAR',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV28EsquemaDescricao',fld:'vESQUEMADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29bmpAtributos',fld:'vBMPATRIBUTOS'},{av:'gx.fn.getCtrlProperty("vBMPATRIBUTOS","Tooltiptext")',ctrl:'vBMPATRIBUTOS',prop:'Tooltiptext'},{av:'AV30bmpCodBar',fld:'vBMPCODBAR'},{av:'gx.fn.getCtrlProperty("vBMPCODBAR","Tooltiptext")',ctrl:'vBMPCODBAR',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV28EsquemaDescricao',fld:'vESQUEMADESCRICAO'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV34Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV28EsquemaDescricao',fld:'vESQUEMADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29bmpAtributos',fld:'vBMPATRIBUTOS'},{av:'gx.fn.getCtrlProperty("vBMPATRIBUTOS","Tooltiptext")',ctrl:'vBMPATRIBUTOS',prop:'Tooltiptext'},{av:'AV30bmpCodBar',fld:'vBMPCODBAR'},{av:'gx.fn.getCtrlProperty("vBMPCODBAR","Tooltiptext")',ctrl:'vBMPCODBAR',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV28EsquemaDescricao',fld:'vESQUEMADESCRICAO'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV28EsquemaDescricao',fld:'vESQUEMADESCRICAO'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV28EsquemaDescricao',fld:'vESQUEMADESCRICAO'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CHAMAATRIBUTOS'"] = [[{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'}],[{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'}]];
   this.EvtParms["'CHAMADEFCODBAR'"] = [[{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'}],[{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV28EsquemaDescricao',fld:'vESQUEMADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29bmpAtributos',fld:'vBMPATRIBUTOS'},{av:'gx.fn.getCtrlProperty("vBMPATRIBUTOS","Tooltiptext")',ctrl:'vBMPATRIBUTOS',prop:'Tooltiptext'},{av:'AV30bmpCodBar',fld:'vBMPCODBAR'},{av:'gx.fn.getCtrlProperty("vBMPCODBAR","Tooltiptext")',ctrl:'vBMPCODBAR',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[]];
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV34Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV34Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[60]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV29bmpAtributos", rfrProp:"Value", gxAttId:"Bmpatributos"});
   GridContainer.addRefreshingVar({rfrVar:"AV29bmpAtributos", rfrProp:"Tooltiptext", gxAttId:"Bmpatributos"});
   GridContainer.addRefreshingVar({rfrVar:"AV30bmpCodBar", rfrProp:"Value", gxAttId:"Bmpcodbar"});
   GridContainer.addRefreshingVar({rfrVar:"AV30bmpCodBar", rfrProp:"Tooltiptext", gxAttId:"Bmpcodbar"});
   GridContainer.addRefreshingVar({rfrVar:"AV31SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV34Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hesquema());
