/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:17:50.72
*/
gx.evt.autoSkip = false;
gx.define('htiposaldo', false, function () {
   this.ServerClass =  "htiposaldo" ;
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
      this.AV30SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV33Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.e11to2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12to2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17to2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13to2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14to2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15to2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16to2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e21to2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e22to2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e23to2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e24to2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25to2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26to2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,39,42,44,45,49,50,51,52,53,54,55,62];
   this.GXLastCtrlId =62;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",48,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"htiposaldo",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1569,49,"TIPOSALDOID","","","TipoSaldoId","int",0,"px",7,7,"right",null,[],1569,"TipoSaldoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1570,50,"TIPOSALDODESCRICAO","","","TipoSaldoDescricao","svchar",0,"px",20,20,"left",null,[],1570,"TipoSaldoDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Snsangria",51,"vSNSANGRIA","","","SnSangria","char",0,"px",4,4,"left",null,[],"Snsangria","SnSangria",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",52,0,"px",17,"px","e21to2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",53,0,"px",17,"px","e22to2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",54,0,"px",17,"px","e23to2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(4336,55,"TIPOSALDOSNSANGRIA","Sangria","","TipoSaldoSnSangria","char",0,"px",1,1,"left",null,[],4336,"TipoSaldoSnSangria",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOSALDOID",gxz:"ZV27TipoSaldoId",gxold:"OV27TipoSaldoId",gxvar:"AV27TipoSaldoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27TipoSaldoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27TipoSaldoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOSALDOID",gx.O.AV27TipoSaldoId,0)},c2v:function(){gx.O.AV27TipoSaldoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOSALDOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOSALDODESCRICAO",gxz:"ZV28TipoSaldoDescricao",gxold:"OV28TipoSaldoDescricao",gxvar:"AV28TipoSaldoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28TipoSaldoDescricao=Value},v2z:function(Value){gx.O.ZV28TipoSaldoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOSALDODESCRICAO",gx.O.AV28TipoSaldoDescricao,0)},c2v:function(){gx.O.AV28TipoSaldoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOSALDODESCRICAO")},nac:gx.falseFn};
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
   GXValidFnc[49]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOSALDOID",gxz:"Z1569TipoSaldoId",gxold:"O1569TipoSaldoId",gxvar:"A1569TipoSaldoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1569TipoSaldoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1569TipoSaldoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOSALDOID",row || gx.fn.currentGridRowImpl(48),gx.O.A1569TipoSaldoId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1569TipoSaldoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOSALDOID",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOSALDODESCRICAO",gxz:"Z1570TipoSaldoDescricao",gxold:"O1570TipoSaldoDescricao",gxvar:"A1570TipoSaldoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1570TipoSaldoDescricao=Value},v2z:function(Value){gx.O.Z1570TipoSaldoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOSALDODESCRICAO",row || gx.fn.currentGridRowImpl(48),gx.O.A1570TipoSaldoDescricao,0)},c2v:function(){gx.O.A1570TipoSaldoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOSALDODESCRICAO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"char",len:4,dec:0,sign:false,ro:0,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSNSANGRIA",gxz:"ZV29SnSangria",gxold:"OV29SnSangria",gxvar:"AV29SnSangria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV29SnSangria=Value},v2z:function(Value){gx.O.ZV29SnSangria=Value},v2c:function(row){gx.fn.setGridControlValue("vSNSANGRIA",row || gx.fn.currentGridRowImpl(48),gx.O.AV29SnSangria,0)},c2v:function(){gx.O.AV29SnSangria=this.val()},val:function(row){return gx.fn.getGridControlValue("vSNSANGRIA",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(48),gx.O.AV7bmpAlt,gx.O.AV35Bmpalt_GXI)},c2v:function(){gx.O.AV35Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV35Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48),gx.O.AV8bmpExc,gx.O.AV36Bmpexc_GXI)},c2v:function(){gx.O.AV36Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV36Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(48),gx.O.AV16bmpCon,gx.O.AV37Bmpcon_GXI)},c2v:function(){gx.O.AV37Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV37Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOSALDOSNSANGRIA",gxz:"Z4336TipoSaldoSnSangria",gxold:"O4336TipoSaldoSnSangria",gxvar:"A4336TipoSaldoSnSangria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4336TipoSaldoSnSangria=Value},v2z:function(Value){gx.O.Z4336TipoSaldoSnSangria=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOSALDOSNSANGRIA",row || gx.fn.currentGridRowImpl(48),gx.O.A4336TipoSaldoSnSangria,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4336TipoSaldoSnSangria=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOSALDOSNSANGRIA",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27TipoSaldoId = 0 ;
   this.ZV27TipoSaldoId = 0 ;
   this.OV27TipoSaldoId = 0 ;
   this.AV28TipoSaldoDescricao = "" ;
   this.ZV28TipoSaldoDescricao = "" ;
   this.OV28TipoSaldoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z1569TipoSaldoId = 0 ;
   this.O1569TipoSaldoId = 0 ;
   this.Z1570TipoSaldoDescricao = "" ;
   this.O1570TipoSaldoDescricao = "" ;
   this.ZV29SnSangria = "" ;
   this.OV29SnSangria = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z4336TipoSaldoSnSangria = "" ;
   this.O4336TipoSaldoSnSangria = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27TipoSaldoId = 0 ;
   this.AV28TipoSaldoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A1568TipoSaldoEmpresaId = "" ;
   this.A1569TipoSaldoId = 0 ;
   this.A1570TipoSaldoDescricao = "" ;
   this.AV29SnSangria = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A4336TipoSaldoSnSangria = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV30SnRecuperaFiltro = "" ;
   this.AV33Pgmname = "" ;
   this.Events = {"e11to2_client": ["'ANTERIOR'", true] ,"e12to2_client": ["'PROXIMO'", true] ,"e17to2_client": ["VPAGINA.CLICK", true] ,"e13to2_client": ["'NOVO'", true] ,"e14to2_client": ["'FECHAR'", true] ,"e15to2_client": ["'IMPRIMIR'", true] ,"e16to2_client": ["'PROCURAR'", true] ,"e21to2_client": ["'ALTERAR'", true] ,"e22to2_client": ["'EXCLUIR'", true] ,"e23to2_client": ["'CONSULTAR'", true] ,"e24to2_client": ["'ATUALIZAPAGINA'", true] ,"e25to2_client": ["ENTER", true] ,"e26to2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoSaldoId',fld:'vTIPOSALDOID'},{av:'AV28TipoSaldoDescricao',fld:'vTIPOSALDODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV33Pgmname',fld:'vPGMNAME'},{av:'A4336TipoSaldoSnSangria',fld:'TIPOSALDOSNSANGRIA'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoSaldoId',fld:'vTIPOSALDOID'},{av:'AV28TipoSaldoDescricao',fld:'vTIPOSALDODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV33Pgmname',fld:'vPGMNAME'},{av:'A4336TipoSaldoSnSangria',fld:'TIPOSALDOSNSANGRIA'}],[{ctrl:'TIPOSALDOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOSALDOID","Title")',ctrl:'TIPOSALDOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'TIPOSALDODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOSALDODESCRICAO","Title")',ctrl:'TIPOSALDODESCRICAO',prop:'Title'},{ctrl:'vSNSANGRIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vSNSANGRIA","Title")',ctrl:'vSNSANGRIA',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TipoSaldoId',fld:'vTIPOSALDOID'},{av:'AV28TipoSaldoDescricao',fld:'vTIPOSALDODESCRICAO'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A4336TipoSaldoSnSangria',fld:'TIPOSALDOSNSANGRIA'}],[{av:'AV29SnSangria',fld:'vSNSANGRIA'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoSaldoId',fld:'vTIPOSALDOID'},{av:'AV28TipoSaldoDescricao',fld:'vTIPOSALDODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV33Pgmname',fld:'vPGMNAME'},{av:'A4336TipoSaldoSnSangria',fld:'TIPOSALDOSNSANGRIA'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoSaldoId',fld:'vTIPOSALDOID'},{av:'AV28TipoSaldoDescricao',fld:'vTIPOSALDODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV33Pgmname',fld:'vPGMNAME'},{av:'A4336TipoSaldoSnSangria',fld:'TIPOSALDOSNSANGRIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoSaldoId',fld:'vTIPOSALDOID'},{av:'AV28TipoSaldoDescricao',fld:'vTIPOSALDODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV33Pgmname',fld:'vPGMNAME'},{av:'A4336TipoSaldoSnSangria',fld:'TIPOSALDOSNSANGRIA'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TipoSaldoId',fld:'vTIPOSALDOID'},{av:'AV28TipoSaldoDescricao',fld:'vTIPOSALDODESCRICAO'},{av:'AV33Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV33Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV33Pgmname',fld:'vPGMNAME'},{av:'AV34Pgmdesc',fld:'vPGMDESC'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV38Qtdpaggeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoSaldoId',fld:'vTIPOSALDOID'},{av:'AV28TipoSaldoDescricao',fld:'vTIPOSALDODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV33Pgmname',fld:'vPGMNAME'},{av:'A4336TipoSaldoSnSangria',fld:'TIPOSALDOSNSANGRIA'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A1569TipoSaldoId',fld:'TIPOSALDOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TipoSaldoId',fld:'vTIPOSALDOID'},{av:'AV28TipoSaldoDescricao',fld:'vTIPOSALDODESCRICAO'},{av:'AV33Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A1569TipoSaldoId',fld:'TIPOSALDOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TipoSaldoId',fld:'vTIPOSALDOID'},{av:'AV28TipoSaldoDescricao',fld:'vTIPOSALDODESCRICAO'},{av:'AV33Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A1569TipoSaldoId',fld:'TIPOSALDOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TipoSaldoId',fld:'vTIPOSALDOID'},{av:'AV28TipoSaldoDescricao',fld:'vTIPOSALDODESCRICAO'},{av:'AV33Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoSaldoId',fld:'vTIPOSALDOID'},{av:'AV28TipoSaldoDescricao',fld:'vTIPOSALDODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV33Pgmname',fld:'vPGMNAME'},{av:'A4336TipoSaldoSnSangria',fld:'TIPOSALDOSNSANGRIA'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV30SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV33Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV30SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV33Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[62]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV30SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV33Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A4336TipoSaldoSnSangria", rfrProp:"Value", gxAttId:"4336"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new htiposaldo());
