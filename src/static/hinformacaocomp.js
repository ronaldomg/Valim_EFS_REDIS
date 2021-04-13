/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:58:57.34
*/
gx.evt.autoSkip = false;
gx.define('hinformacaocomp', false, function () {
   this.ServerClass =  "hinformacaocomp" ;
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
   };
   this.e1127x2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e1227x2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e2027x2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e2127x2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e2227x2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e1627x2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e1327x2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e1427x2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1527x2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e2327x2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e2427x2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e2527x2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,19,22,24,25,29,30,31,32,33,34,41];
   this.GXLastCtrlId =41;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hinformacaocomp",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(10569,29,"INFORMACAOCOMPID","","","InformacaoCompId","int",0,"px",4,4,"right",null,[],10569,"InformacaoCompId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(10571,30,"INFORMACAOCOMPDESCRICAO","","","InformacaoCompDescricao","svchar",0,"px",100,80,"left",null,[],10571,"InformacaoCompDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",31,0,"px",17,"px","e2027x2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",32,0,"px",17,"px","e2127x2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",33,0,"px",17,"px","e2227x2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(10568,34,"INFORMACAOCOMPEMPRESAID","Informacao Comp Empresa Id","","InformacaoCompEmpresaId","char",0,"px",10,10,"left",null,[],10568,"InformacaoCompEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TABLE6",grid:0};
   GXValidFnc[11]={fld:"IMAGE2",grid:0};
   GXValidFnc[13]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[15]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[17]={fld:"BTNHELP",grid:0};
   GXValidFnc[19]={fld:"TABLE5",grid:0};
   GXValidFnc[22]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV23Pagina",gxold:"OV23Pagina",gxvar:"AV23Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV23Pagina)},c2v:function(){gx.O.AV23Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV24PaginaAux",gxold:"OV24PaginaAux",gxvar:"AV24PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV24PaginaAux,0)},c2v:function(){gx.O.AV24PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"INFORMACAOCOMPID",gxz:"Z10569InformacaoCompId",gxold:"O10569InformacaoCompId",gxvar:"A10569InformacaoCompId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10569InformacaoCompId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10569InformacaoCompId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("INFORMACAOCOMPID",row || gx.fn.currentGridRowImpl(28),gx.O.A10569InformacaoCompId,0)},c2v:function(){gx.O.A10569InformacaoCompId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("INFORMACAOCOMPID",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"INFORMACAOCOMPDESCRICAO",gxz:"Z10571InformacaoCompDescricao",gxold:"O10571InformacaoCompDescricao",gxvar:"A10571InformacaoCompDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10571InformacaoCompDescricao=Value},v2z:function(Value){gx.O.Z10571InformacaoCompDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("INFORMACAOCOMPDESCRICAO",row || gx.fn.currentGridRowImpl(28),gx.O.A10571InformacaoCompDescricao,0)},c2v:function(){gx.O.A10571InformacaoCompDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("INFORMACAOCOMPDESCRICAO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV5bmpAlt",gxold:"OV5bmpAlt",gxvar:"AV5bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5bmpAlt=Value},v2z:function(Value){gx.O.ZV5bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(28),gx.O.AV5bmpAlt,gx.O.AV34Bmpalt_GXI)},c2v:function(){gx.O.AV34Bmpalt_GXI=this.val_GXI();gx.O.AV5bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV34Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV7bmpExc",gxold:"OV7bmpExc",gxvar:"AV7bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpExc=Value},v2z:function(Value){gx.O.ZV7bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(28),gx.O.AV7bmpExc,gx.O.AV35Bmpexc_GXI)},c2v:function(){gx.O.AV35Bmpexc_GXI=this.val_GXI();gx.O.AV7bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV35Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV6bmpCon",gxold:"OV6bmpCon",gxvar:"AV6bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV6bmpCon=Value},v2z:function(Value){gx.O.ZV6bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(28),gx.O.AV6bmpCon,gx.O.AV36Bmpcon_GXI)},c2v:function(){gx.O.AV36Bmpcon_GXI=this.val_GXI();gx.O.AV6bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV36Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"INFORMACAOCOMPEMPRESAID",gxz:"Z10568InformacaoCompEmpresaId",gxold:"O10568InformacaoCompEmpresaId",gxvar:"A10568InformacaoCompEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10568InformacaoCompEmpresaId=Value},v2z:function(Value){gx.O.Z10568InformacaoCompEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("INFORMACAOCOMPEMPRESAID",row || gx.fn.currentGridRowImpl(28),gx.O.A10568InformacaoCompEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10568InformacaoCompEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("INFORMACAOCOMPEMPRESAID",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV22OrderedBy",gxold:"OV22OrderedBy",gxvar:"AV22OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV22OrderedBy,0)},c2v:function(){gx.O.AV22OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV23Pagina = 0 ;
   this.ZV23Pagina = 0 ;
   this.OV23Pagina = 0 ;
   this.AV24PaginaAux = 0 ;
   this.ZV24PaginaAux = 0 ;
   this.OV24PaginaAux = 0 ;
   this.Z10569InformacaoCompId = 0 ;
   this.O10569InformacaoCompId = 0 ;
   this.Z10571InformacaoCompDescricao = "" ;
   this.O10571InformacaoCompDescricao = "" ;
   this.ZV5bmpAlt = "" ;
   this.OV5bmpAlt = "" ;
   this.ZV7bmpExc = "" ;
   this.OV7bmpExc = "" ;
   this.ZV6bmpCon = "" ;
   this.OV6bmpCon = "" ;
   this.Z10568InformacaoCompEmpresaId = "" ;
   this.O10568InformacaoCompEmpresaId = "" ;
   this.AV22OrderedBy = 0 ;
   this.ZV22OrderedBy = 0 ;
   this.OV22OrderedBy = 0 ;
   this.AV23Pagina = 0 ;
   this.AV24PaginaAux = 0 ;
   this.AV22OrderedBy = 0 ;
   this.A10569InformacaoCompId = 0 ;
   this.A10571InformacaoCompDescricao = "" ;
   this.AV5bmpAlt = "" ;
   this.AV7bmpExc = "" ;
   this.AV6bmpCon = "" ;
   this.A10568InformacaoCompEmpresaId = "" ;
   this.AV9EmpresaPadrao = "" ;
   this.AV27SnRecuperaFiltro = "" ;
   this.Events = {"e1127x2_client": ["'ANTERIOR'", true] ,"e1227x2_client": ["'PROXIMO'", true] ,"e2027x2_client": ["'ALTERAR'", true] ,"e2127x2_client": ["'EXCLUIR'", true] ,"e2227x2_client": ["'CONSULTAR'", true] ,"e1627x2_client": ["VPAGINA.CLICK", true] ,"e1327x2_client": ["'NOVO'", true] ,"e1427x2_client": ["'FECHAR'", true] ,"e1527x2_client": ["'PROCURAR'", true] ,"e2327x2_client": ["'ATUALIZAPAGINA'", true] ,"e2427x2_client": ["ENTER", true] ,"e2527x2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'INFORMACAOCOMPID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("INFORMACAOCOMPID","Title")',ctrl:'INFORMACAOCOMPID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'INFORMACAOCOMPDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("INFORMACAOCOMPDESCRICAO","Title")',ctrl:'INFORMACAOCOMPDESCRICAO',prop:'Title'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV20NumPagina',fld:'vNUMPAGINA'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV10filtros',fld:'vFILTROS'},{av:'AV13InformacaoCompDescricao',fld:'vINFORMACAOCOMPDESCRICAO'},{av:'AV22OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV13InformacaoCompDescricao',fld:'vINFORMACAOCOMPDESCRICAO'}],[{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'},{av:'AV13InformacaoCompDescricao',fld:'vINFORMACAOCOMPDESCRICAO'}],[{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[],[{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A10569InformacaoCompId',fld:'INFORMACAOCOMPID'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV13InformacaoCompDescricao',fld:'vINFORMACAOCOMPDESCRICAO'},{av:'AV22OrderedBy',fld:'vORDEREDBY'}],[{av:'A10569InformacaoCompId',fld:'INFORMACAOCOMPID'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A10569InformacaoCompId',fld:'INFORMACAOCOMPID'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV13InformacaoCompDescricao',fld:'vINFORMACAOCOMPDESCRICAO'},{av:'AV22OrderedBy',fld:'vORDEREDBY'}],[{av:'A10569InformacaoCompId',fld:'INFORMACAOCOMPID'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A10569InformacaoCompId',fld:'INFORMACAOCOMPID'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV13InformacaoCompDescricao',fld:'vINFORMACAOCOMPDESCRICAO'},{av:'AV22OrderedBy',fld:'vORDEREDBY'}],[{av:'A10569InformacaoCompId',fld:'INFORMACAOCOMPID'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV13InformacaoCompDescricao',fld:'vINFORMACAOCOMPDESCRICAO'}],[{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV13InformacaoCompDescricao',fld:'vINFORMACAOCOMPDESCRICAO'}],[{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setVCMap("AV9EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV27SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV9EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV27SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[41]);
   GridContainer.addRefreshingVar({rfrVar:"AV9EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV27SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hinformacaocomp());
