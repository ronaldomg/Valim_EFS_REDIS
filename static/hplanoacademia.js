/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 16:46:33.35
*/
gx.evt.autoSkip = false;
gx.define('hplanoacademia', false, function () {
   this.ServerClass =  "hplanoacademia" ;
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
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV31SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e1113e2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e1213e2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e1713e2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e1313e2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e1413e2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1513e2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e1613e2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e2013e2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e2113e2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e2213e2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e2313e2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e2513e2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e2613e2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,24,27,30,32,34,36,38,40,43,45,46,50,51,52,53,54,55,56];
   this.GXLastCtrlId =56;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",49,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hplanoacademia",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8001,50,"PLANOACADEMIACODIGO","","","PlanoAcademiaCodigo","int",0,"px",7,7,"right",null,[],8001,"PlanoAcademiaCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8013,51,"PLANOACADEMIADESCRICAO","","","PlanoAcademiaDescricao","svchar",0,"px",40,40,"left",null,[],8013,"PlanoAcademiaDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8015,52,"PLANOACADEMIAQTDCREDITO","","","PlanoAcademiaQtdCredito","int",0,"px",10,10,"right",null,[],8015,"PlanoAcademiaQtdCredito",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8014,53,"PLANOACADEMIAVALOR","","","PlanoAcademiaValor","decimal",0,"px",22,22,"right",null,[],8014,"PlanoAcademiaValor",true,2,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",54,0,"px",17,"px","e2013e2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",55,0,"px",17,"px","e2113e2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",56,0,"px",17,"px","e2213e2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vFPLANOACADEMIACODIGO",gxz:"ZV27FPlanoAcademiaCodigo",gxold:"OV27FPlanoAcademiaCodigo",gxvar:"AV27FPlanoAcademiaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27FPlanoAcademiaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27FPlanoAcademiaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFPLANOACADEMIACODIGO",gx.O.AV27FPlanoAcademiaCodigo,0)},c2v:function(){gx.O.AV27FPlanoAcademiaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFPLANOACADEMIACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vFPLANOACADEMIADESCRICAO",gxz:"ZV28FPlanoAcademiaDescricao",gxold:"OV28FPlanoAcademiaDescricao",gxvar:"AV28FPlanoAcademiaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28FPlanoAcademiaDescricao=Value},v2z:function(Value){gx.O.ZV28FPlanoAcademiaDescricao=Value},v2c:function(){gx.fn.setControlValue("vFPLANOACADEMIADESCRICAO",gx.O.AV28FPlanoAcademiaDescricao,0)},c2v:function(){gx.O.AV28FPlanoAcademiaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vFPLANOACADEMIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TABLE4",grid:0};
   GXValidFnc[27]={fld:"TABLE8",grid:0};
   GXValidFnc[30]={fld:"IMAGE2",grid:0};
   GXValidFnc[32]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[34]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[36]={fld:"IMAGE1",grid:0};
   GXValidFnc[38]={fld:"BTNHELP",grid:0};
   GXValidFnc[40]={fld:"TABLE5",grid:0};
   GXValidFnc[43]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PLANOACADEMIACODIGO",gxz:"Z8001PlanoAcademiaCodigo",gxold:"O8001PlanoAcademiaCodigo",gxvar:"A8001PlanoAcademiaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8001PlanoAcademiaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8001PlanoAcademiaCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PLANOACADEMIACODIGO",row || gx.fn.currentGridRowImpl(49),gx.O.A8001PlanoAcademiaCodigo,0)},c2v:function(){gx.O.A8001PlanoAcademiaCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PLANOACADEMIACODIGO",row || gx.fn.currentGridRowImpl(49),'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PLANOACADEMIADESCRICAO",gxz:"Z8013PlanoAcademiaDescricao",gxold:"O8013PlanoAcademiaDescricao",gxvar:"A8013PlanoAcademiaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8013PlanoAcademiaDescricao=Value},v2z:function(Value){gx.O.Z8013PlanoAcademiaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("PLANOACADEMIADESCRICAO",row || gx.fn.currentGridRowImpl(49),gx.O.A8013PlanoAcademiaDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8013PlanoAcademiaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("PLANOACADEMIADESCRICAO",row || gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PLANOACADEMIAQTDCREDITO",gxz:"Z8015PlanoAcademiaQtdCredito",gxold:"O8015PlanoAcademiaQtdCredito",gxvar:"A8015PlanoAcademiaQtdCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8015PlanoAcademiaQtdCredito=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8015PlanoAcademiaQtdCredito=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PLANOACADEMIAQTDCREDITO",row || gx.fn.currentGridRowImpl(49),gx.O.A8015PlanoAcademiaQtdCredito,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8015PlanoAcademiaQtdCredito=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PLANOACADEMIAQTDCREDITO",row || gx.fn.currentGridRowImpl(49),'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PLANOACADEMIAVALOR",gxz:"Z8014PlanoAcademiaValor",gxold:"O8014PlanoAcademiaValor",gxvar:"A8014PlanoAcademiaValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8014PlanoAcademiaValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8014PlanoAcademiaValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("PLANOACADEMIAVALOR",row || gx.fn.currentGridRowImpl(49),gx.O.A8014PlanoAcademiaValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8014PlanoAcademiaValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("PLANOACADEMIAVALOR",row || gx.fn.currentGridRowImpl(49),'.',',')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(49),gx.O.AV7bmpAlt,gx.O.AV36Bmpalt_GXI)},c2v:function(){gx.O.AV36Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(49))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(49))}, gxvar_GXI:'AV36Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(49),gx.O.AV8bmpExc,gx.O.AV37Bmpexc_GXI)},c2v:function(){gx.O.AV37Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(49))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(49))}, gxvar_GXI:'AV37Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(49),gx.O.AV16bmpCon,gx.O.AV38Bmpcon_GXI)},c2v:function(){gx.O.AV38Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(49))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(49))}, gxvar_GXI:'AV38Bmpcon_GXI',nac:gx.falseFn};
   this.AV27FPlanoAcademiaCodigo = 0 ;
   this.ZV27FPlanoAcademiaCodigo = 0 ;
   this.OV27FPlanoAcademiaCodigo = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV28FPlanoAcademiaDescricao = "" ;
   this.ZV28FPlanoAcademiaDescricao = "" ;
   this.OV28FPlanoAcademiaDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z8001PlanoAcademiaCodigo = 0 ;
   this.O8001PlanoAcademiaCodigo = 0 ;
   this.Z8013PlanoAcademiaDescricao = "" ;
   this.O8013PlanoAcademiaDescricao = "" ;
   this.Z8015PlanoAcademiaQtdCredito = 0 ;
   this.O8015PlanoAcademiaQtdCredito = 0 ;
   this.Z8014PlanoAcademiaValor = 0 ;
   this.O8014PlanoAcademiaValor = 0 ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV27FPlanoAcademiaCodigo = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV28FPlanoAcademiaDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.A8000PlanoAcademiaEmpresaId = "" ;
   this.A8001PlanoAcademiaCodigo = 0 ;
   this.A8013PlanoAcademiaDescricao = "" ;
   this.A8015PlanoAcademiaQtdCredito = 0 ;
   this.A8014PlanoAcademiaValor = 0 ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV31SnRecuperaFiltro = "" ;
   this.Events = {"e1113e2_client": ["'ANTERIOR'", true] ,"e1213e2_client": ["'PROXIMO'", true] ,"e1713e2_client": ["VPAGINA.CLICK", true] ,"e1313e2_client": ["'NOVO'", true] ,"e1413e2_client": ["'FECHAR'", true] ,"e1513e2_client": ["'IMPRIMIR'", true] ,"e1613e2_client": ["'PROCURAR'", true] ,"e2013e2_client": ["'ALTERAR'", true] ,"e2113e2_client": ["'EXCLUIR'", true] ,"e2213e2_client": ["'CONSULTAR'", true] ,"e2313e2_client": ["'ATUALIZAPAGINA'", true] ,"e2513e2_client": ["ENTER", true] ,"e2613e2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FPlanoAcademiaCodigo',fld:'vFPLANOACADEMIACODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28FPlanoAcademiaDescricao',fld:'vFPLANOACADEMIADESCRICAO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FPlanoAcademiaCodigo',fld:'vFPLANOACADEMIACODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28FPlanoAcademiaDescricao',fld:'vFPLANOACADEMIADESCRICAO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'PLANOACADEMIACODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PLANOACADEMIACODIGO","Title")',ctrl:'PLANOACADEMIACODIGO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'PLANOACADEMIADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PLANOACADEMIADESCRICAO","Title")',ctrl:'PLANOACADEMIADESCRICAO',prop:'Title'},{ctrl:'PLANOACADEMIAQTDCREDITO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PLANOACADEMIAQTDCREDITO","Title")',ctrl:'PLANOACADEMIAQTDCREDITO',prop:'Title'},{ctrl:'PLANOACADEMIAVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PLANOACADEMIAVALOR","Title")',ctrl:'PLANOACADEMIAVALOR',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FPlanoAcademiaCodigo',fld:'vFPLANOACADEMIACODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28FPlanoAcademiaDescricao',fld:'vFPLANOACADEMIADESCRICAO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FPlanoAcademiaCodigo',fld:'vFPLANOACADEMIACODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28FPlanoAcademiaDescricao',fld:'vFPLANOACADEMIADESCRICAO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FPlanoAcademiaCodigo',fld:'vFPLANOACADEMIACODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28FPlanoAcademiaDescricao',fld:'vFPLANOACADEMIADESCRICAO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV29QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV27FPlanoAcademiaCodigo',fld:'vFPLANOACADEMIACODIGO'},{av:'AV28FPlanoAcademiaDescricao',fld:'vFPLANOACADEMIADESCRICAO'},{av:'AV35Pgmdesc',fld:'vPGMDESC'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV28FPlanoAcademiaDescricao',fld:'vFPLANOACADEMIADESCRICAO'},{av:'AV27FPlanoAcademiaCodigo',fld:'vFPLANOACADEMIACODIGO'},{av:'AV29QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FPlanoAcademiaCodigo',fld:'vFPLANOACADEMIACODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28FPlanoAcademiaDescricao',fld:'vFPLANOACADEMIADESCRICAO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A8001PlanoAcademiaCodigo',fld:'PLANOACADEMIACODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A8001PlanoAcademiaCodigo',fld:'PLANOACADEMIACODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A8001PlanoAcademiaCodigo',fld:'PLANOACADEMIACODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A8001PlanoAcademiaCodigo',fld:'PLANOACADEMIACODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A8001PlanoAcademiaCodigo',fld:'PLANOACADEMIACODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A8001PlanoAcademiaCodigo',fld:'PLANOACADEMIACODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FPlanoAcademiaCodigo',fld:'vFPLANOACADEMIACODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28FPlanoAcademiaDescricao',fld:'vFPLANOACADEMIADESCRICAO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[14]);
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV31SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hplanoacademia());
