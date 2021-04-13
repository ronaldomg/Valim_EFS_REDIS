/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:2:58.47
*/
gx.evt.autoSkip = false;
gx.define('hgrupopreco', false, function () {
   this.ServerClass =  "hgrupopreco" ;
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
      this.AV29SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV33Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.e11x22_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12x22_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17x22_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13x22_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14x22_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15x22_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20x22_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21x22_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22x22_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e16x22_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e23x22_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25x22_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26x22_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,39,42,44,45,49,50,51,52,53,54,61];
   this.GXLastCtrlId =61;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",48,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hgrupopreco",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(5941,49,"GRUPOPRECOID","","","GrupoPrecoId","int",0,"px",4,4,"right",null,[],5941,"GrupoPrecoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5937,50,"GRUPOPRECODESCRICAO","","","GrupoPrecoDescricao","svchar",0,"px",40,40,"left",null,[],5937,"GrupoPrecoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",51,0,"px",17,"px","e20x22_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",52,0,"px",17,"px","e21x22_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",53,0,"px",17,"px","e22x22_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(5940,54,"GRUPOPRECOEMPRESAID","Empresa","","GrupoPrecoEmpresaId","char",0,"px",10,10,"left",null,[],5940,"GrupoPrecoEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGRUPOPRECOID",gxz:"ZV27GrupoPrecoId",gxold:"OV27GrupoPrecoId",gxvar:"AV27GrupoPrecoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27GrupoPrecoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27GrupoPrecoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOPRECOID",gx.O.AV27GrupoPrecoId,0)},c2v:function(){gx.O.AV27GrupoPrecoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRECOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGRUPOPRECODESCRICAO",gxz:"ZV28GrupoPrecoDescricao",gxold:"OV28GrupoPrecoDescricao",gxvar:"AV28GrupoPrecoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28GrupoPrecoDescricao=Value},v2z:function(Value){gx.O.ZV28GrupoPrecoDescricao=Value},v2c:function(){gx.fn.setControlValue("vGRUPOPRECODESCRICAO",gx.O.AV28GrupoPrecoDescricao,0)},c2v:function(){gx.O.AV28GrupoPrecoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vGRUPOPRECODESCRICAO")},nac:gx.falseFn};
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
   GXValidFnc[49]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOPRECOID",gxz:"Z5941GrupoPrecoId",gxold:"O5941GrupoPrecoId",gxvar:"A5941GrupoPrecoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5941GrupoPrecoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5941GrupoPrecoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("GRUPOPRECOID",row || gx.fn.currentGridRowImpl(48),gx.O.A5941GrupoPrecoId,0)},c2v:function(){gx.O.A5941GrupoPrecoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("GRUPOPRECOID",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOPRECODESCRICAO",gxz:"Z5937GrupoPrecoDescricao",gxold:"O5937GrupoPrecoDescricao",gxvar:"A5937GrupoPrecoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5937GrupoPrecoDescricao=Value},v2z:function(Value){gx.O.Z5937GrupoPrecoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPOPRECODESCRICAO",row || gx.fn.currentGridRowImpl(48),gx.O.A5937GrupoPrecoDescricao,0)},c2v:function(){gx.O.A5937GrupoPrecoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPOPRECODESCRICAO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(48),gx.O.AV7bmpAlt,gx.O.AV35Bmpalt_GXI)},c2v:function(){gx.O.AV35Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV35Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48),gx.O.AV8bmpExc,gx.O.AV36Bmpexc_GXI)},c2v:function(){gx.O.AV36Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV36Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(48),gx.O.AV16bmpCon,gx.O.AV37Bmpcon_GXI)},c2v:function(){gx.O.AV37Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV37Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOPRECOEMPRESAID",gxz:"Z5940GrupoPrecoEmpresaId",gxold:"O5940GrupoPrecoEmpresaId",gxvar:"A5940GrupoPrecoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5940GrupoPrecoEmpresaId=Value},v2z:function(Value){gx.O.Z5940GrupoPrecoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPOPRECOEMPRESAID",row || gx.fn.currentGridRowImpl(48),gx.O.A5940GrupoPrecoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5940GrupoPrecoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPOPRECOEMPRESAID",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27GrupoPrecoId = 0 ;
   this.ZV27GrupoPrecoId = 0 ;
   this.OV27GrupoPrecoId = 0 ;
   this.AV28GrupoPrecoDescricao = "" ;
   this.ZV28GrupoPrecoDescricao = "" ;
   this.OV28GrupoPrecoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z5941GrupoPrecoId = 0 ;
   this.O5941GrupoPrecoId = 0 ;
   this.Z5937GrupoPrecoDescricao = "" ;
   this.O5937GrupoPrecoDescricao = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z5940GrupoPrecoEmpresaId = "" ;
   this.O5940GrupoPrecoEmpresaId = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27GrupoPrecoId = 0 ;
   this.AV28GrupoPrecoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A5941GrupoPrecoId = 0 ;
   this.A5937GrupoPrecoDescricao = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A5940GrupoPrecoEmpresaId = "" ;
   this.AV29SnRecuperaFiltro = "" ;
   this.AV33Pgmname = "" ;
   this.Events = {"e11x22_client": ["'ANTERIOR'", true] ,"e12x22_client": ["'PROXIMO'", true] ,"e17x22_client": ["VPAGINA.CLICK", true] ,"e13x22_client": ["'NOVO'", true] ,"e14x22_client": ["'FECHAR'", true] ,"e15x22_client": ["'PROCURAR'", true] ,"e20x22_client": ["'ALTERAR'", true] ,"e21x22_client": ["'EXCLUIR'", true] ,"e22x22_client": ["'CONSULTAR'", true] ,"e16x22_client": ["'IMPRIMIR'", true] ,"e23x22_client": ["'ATUALIZAPAGINA'", true] ,"e25x22_client": ["ENTER", true] ,"e26x22_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GrupoPrecoId',fld:'vGRUPOPRECOID'},{av:'AV28GrupoPrecoDescricao',fld:'vGRUPOPRECODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV33Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GrupoPrecoId',fld:'vGRUPOPRECOID'},{av:'AV28GrupoPrecoDescricao',fld:'vGRUPOPRECODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV33Pgmname',fld:'vPGMNAME'}],[{ctrl:'GRUPOPRECOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GRUPOPRECOID","Title")',ctrl:'GRUPOPRECOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'GRUPOPRECODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GRUPOPRECODESCRICAO","Title")',ctrl:'GRUPOPRECODESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27GrupoPrecoId',fld:'vGRUPOPRECOID'},{av:'AV28GrupoPrecoDescricao',fld:'vGRUPOPRECODESCRICAO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GrupoPrecoId',fld:'vGRUPOPRECOID'},{av:'AV28GrupoPrecoDescricao',fld:'vGRUPOPRECODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV33Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GrupoPrecoId',fld:'vGRUPOPRECOID'},{av:'AV28GrupoPrecoDescricao',fld:'vGRUPOPRECODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV33Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GrupoPrecoId',fld:'vGRUPOPRECOID'},{av:'AV28GrupoPrecoDescricao',fld:'vGRUPOPRECODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV33Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27GrupoPrecoId',fld:'vGRUPOPRECOID'},{av:'AV28GrupoPrecoDescricao',fld:'vGRUPOPRECODESCRICAO'},{av:'AV33Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV33Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GrupoPrecoId',fld:'vGRUPOPRECOID'},{av:'AV28GrupoPrecoDescricao',fld:'vGRUPOPRECODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV33Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A5941GrupoPrecoId',fld:'GRUPOPRECOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27GrupoPrecoId',fld:'vGRUPOPRECOID'},{av:'AV28GrupoPrecoDescricao',fld:'vGRUPOPRECODESCRICAO'},{av:'AV33Pgmname',fld:'vPGMNAME'}],[{av:'A5941GrupoPrecoId',fld:'GRUPOPRECOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A5941GrupoPrecoId',fld:'GRUPOPRECOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27GrupoPrecoId',fld:'vGRUPOPRECOID'},{av:'AV28GrupoPrecoDescricao',fld:'vGRUPOPRECODESCRICAO'},{av:'AV33Pgmname',fld:'vPGMNAME'}],[{av:'A5941GrupoPrecoId',fld:'GRUPOPRECOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A5941GrupoPrecoId',fld:'GRUPOPRECOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27GrupoPrecoId',fld:'vGRUPOPRECOID'},{av:'AV28GrupoPrecoDescricao',fld:'vGRUPOPRECODESCRICAO'},{av:'AV33Pgmname',fld:'vPGMNAME'}],[{av:'A5941GrupoPrecoId',fld:'GRUPOPRECOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV33Pgmname',fld:'vPGMNAME'},{av:'AV34Pgmdesc',fld:'vPGMDESC'}],[{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV30QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GrupoPrecoId',fld:'vGRUPOPRECOID'},{av:'AV28GrupoPrecoDescricao',fld:'vGRUPOPRECODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV33Pgmname',fld:'vPGMNAME'}],[]];
   this.setVCMap("AV29SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV33Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV29SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV33Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[61]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV29SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV33Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hgrupopreco());
