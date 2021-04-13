/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:58:22.36
*/
gx.evt.autoSkip = false;
gx.define('htiporateio', false, function () {
   this.ServerClass =  "htiporateio" ;
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
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV29SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e11822_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12822_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e20822_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21822_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22822_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e16822_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13822_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14822_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15822_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e23822_client=function()
   {
      this.executeServerEvent("'DUPLICAR'", true, arguments[0], false, false);
   };
   this.e24822_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25822_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26822_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,18,21,24,26,28,30,32,35,37,38,42,43,44,45,46,47,48,55];
   this.GXLastCtrlId =55;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"htiporateio",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(978,42,"TIPORATEIOID","","","TipoRateioId","int",0,"px",3,3,"right",null,[],978,"TipoRateioId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(980,43,"TIPORATEIODESCRICAO","","","TipoRateioDescricao","svchar",0,"px",25,25,"left",null,[],980,"TipoRateioDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmprateio","vBMPRATEIO",44,0,"px",17,"px","e23822_client","","Duplicar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",45,0,"px",17,"px","e20822_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",46,0,"px",17,"px","e21822_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",47,0,"px",17,"px","e22822_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(977,48,"TIPORATEIOEMPRESAID","Empresa","","TipoRateioEmpresaId","char",0,"px",10,10,"left",null,[],977,"TipoRateioEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPORATEIODESCRICAO",gxz:"ZV27TipoRateioDescricao",gxold:"OV27TipoRateioDescricao",gxvar:"AV27TipoRateioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27TipoRateioDescricao=Value},v2z:function(Value){gx.O.ZV27TipoRateioDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPORATEIODESCRICAO",gx.O.AV27TipoRateioDescricao,0)},c2v:function(){gx.O.AV27TipoRateioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPORATEIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TABLE4",grid:0};
   GXValidFnc[21]={fld:"TABLE8",grid:0};
   GXValidFnc[24]={fld:"IMAGE2",grid:0};
   GXValidFnc[26]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[28]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[30]={fld:"BTNHELP",grid:0};
   GXValidFnc[32]={fld:"TABLE5",grid:0};
   GXValidFnc[35]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPORATEIOID",gxz:"Z978TipoRateioId",gxold:"O978TipoRateioId",gxvar:"A978TipoRateioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A978TipoRateioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z978TipoRateioId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPORATEIOID",row || gx.fn.currentGridRowImpl(41),gx.O.A978TipoRateioId,0)},c2v:function(){gx.O.A978TipoRateioId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPORATEIOID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPORATEIODESCRICAO",gxz:"Z980TipoRateioDescricao",gxold:"O980TipoRateioDescricao",gxvar:"A980TipoRateioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A980TipoRateioDescricao=Value},v2z:function(Value){gx.O.Z980TipoRateioDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPORATEIODESCRICAO",row || gx.fn.currentGridRowImpl(41),gx.O.A980TipoRateioDescricao,0)},c2v:function(){gx.O.A980TipoRateioDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPORATEIODESCRICAO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPRATEIO",gxz:"ZV28bmpRateio",gxold:"OV28bmpRateio",gxvar:"AV28bmpRateio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV28bmpRateio=Value},v2z:function(Value){gx.O.ZV28bmpRateio=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPRATEIO",row || gx.fn.currentGridRowImpl(41),gx.O.AV28bmpRateio,gx.O.AV37Bmprateio_GXI)},c2v:function(){gx.O.AV37Bmprateio_GXI=this.val_GXI();gx.O.AV28bmpRateio=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPRATEIO",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPRATEIO_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV37Bmprateio_GXI',nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(41),gx.O.AV7bmpAlt,gx.O.AV34Bmpalt_GXI)},c2v:function(){gx.O.AV34Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV34Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(41),gx.O.AV8bmpExc,gx.O.AV35Bmpexc_GXI)},c2v:function(){gx.O.AV35Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV35Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(41),gx.O.AV16bmpCon,gx.O.AV36Bmpcon_GXI)},c2v:function(){gx.O.AV36Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV36Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPORATEIOEMPRESAID",gxz:"Z977TipoRateioEmpresaId",gxold:"O977TipoRateioEmpresaId",gxvar:"A977TipoRateioEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A977TipoRateioEmpresaId=Value},v2z:function(Value){gx.O.Z977TipoRateioEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TIPORATEIOEMPRESAID",row || gx.fn.currentGridRowImpl(41),gx.O.A977TipoRateioEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A977TipoRateioEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPORATEIOEMPRESAID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27TipoRateioDescricao = "" ;
   this.ZV27TipoRateioDescricao = "" ;
   this.OV27TipoRateioDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z978TipoRateioId = 0 ;
   this.O978TipoRateioId = 0 ;
   this.Z980TipoRateioDescricao = "" ;
   this.O980TipoRateioDescricao = "" ;
   this.ZV28bmpRateio = "" ;
   this.OV28bmpRateio = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z977TipoRateioEmpresaId = "" ;
   this.O977TipoRateioEmpresaId = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27TipoRateioDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A978TipoRateioId = 0 ;
   this.A980TipoRateioDescricao = "" ;
   this.AV28bmpRateio = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A977TipoRateioEmpresaId = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV29SnRecuperaFiltro = "" ;
   this.Events = {"e11822_client": ["'ANTERIOR'", true] ,"e12822_client": ["'PROXIMO'", true] ,"e20822_client": ["'ALTERAR'", true] ,"e21822_client": ["'EXCLUIR'", true] ,"e22822_client": ["'CONSULTAR'", true] ,"e16822_client": ["VPAGINA.CLICK", true] ,"e13822_client": ["'NOVO'", true] ,"e14822_client": ["'FECHAR'", true] ,"e15822_client": ["'PROCURAR'", true] ,"e23822_client": ["'DUPLICAR'", true] ,"e24822_client": ["'ATUALIZAPAGINA'", true] ,"e25822_client": ["ENTER", true] ,"e26822_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoRateioDescricao',fld:'vTIPORATEIODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPRATEIO","Jsonclick")',ctrl:'vBMPRATEIO',prop:'Jsonclick'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoRateioDescricao',fld:'vTIPORATEIODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPRATEIO","Jsonclick")',ctrl:'vBMPRATEIO',prop:'Jsonclick'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'TIPORATEIOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPORATEIOID","Title")',ctrl:'TIPORATEIOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'TIPORATEIODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPORATEIODESCRICAO","Title")',ctrl:'TIPORATEIODESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV27TipoRateioDescricao',fld:'vTIPORATEIODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoRateioDescricao',fld:'vTIPORATEIODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPRATEIO","Jsonclick")',ctrl:'vBMPRATEIO',prop:'Jsonclick'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoRateioDescricao',fld:'vTIPORATEIODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPRATEIO","Jsonclick")',ctrl:'vBMPRATEIO',prop:'Jsonclick'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28bmpRateio',fld:'vBMPRATEIO'},{av:'gx.fn.getCtrlProperty("vBMPRATEIO","Tooltiptext")',ctrl:'vBMPRATEIO',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A978TipoRateioId',fld:'TIPORATEIOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27TipoRateioDescricao',fld:'vTIPORATEIODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A978TipoRateioId',fld:'TIPORATEIOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A978TipoRateioId',fld:'TIPORATEIOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27TipoRateioDescricao',fld:'vTIPORATEIODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A978TipoRateioId',fld:'TIPORATEIOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A978TipoRateioId',fld:'TIPORATEIOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27TipoRateioDescricao',fld:'vTIPORATEIODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A978TipoRateioId',fld:'TIPORATEIOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoRateioDescricao',fld:'vTIPORATEIODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPRATEIO","Jsonclick")',ctrl:'vBMPRATEIO',prop:'Jsonclick'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoRateioDescricao',fld:'vTIPORATEIODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPRATEIO","Jsonclick")',ctrl:'vBMPRATEIO',prop:'Jsonclick'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'DUPLICAR'"] = [[{av:'A977TipoRateioEmpresaId',fld:'TIPORATEIOEMPRESAID'},{av:'A978TipoRateioId',fld:'TIPORATEIOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27TipoRateioDescricao',fld:'vTIPORATEIODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoRateioDescricao',fld:'vTIPORATEIODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPRATEIO","Jsonclick")',ctrl:'vBMPRATEIO',prop:'Jsonclick'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV29SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV29SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[55]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV28bmpRateio", rfrProp:"Jsonclick", gxAttId:"Bmprateio"});
   GridContainer.addRefreshingVar({rfrVar:"AV29SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new htiporateio());
