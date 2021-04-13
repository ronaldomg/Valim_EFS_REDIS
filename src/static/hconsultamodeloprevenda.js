/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:17:20.83
*/
gx.evt.autoSkip = false;
gx.define('hconsultamodeloprevenda', false, function () {
   this.ServerClass =  "hconsultamodeloprevenda" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV14ModeloPrevendaEmpresaId=gx.fn.getControlValue("vMODELOPREVENDAEMPRESAID") ;
      this.AV19ModeloPreVendaTipo=gx.fn.getControlValue("vMODELOPREVENDATIPO") ;
      this.AV15ModeloPrevendaCodigo=gx.fn.getIntegerValue("vMODELOPREVENDACODIGO",'.') ;
      this.AV20ModeloPreVendaTipoOut=gx.fn.getControlValue("vMODELOPREVENDATIPOOUT") ;
   };
   this.e171d12_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e111d12_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e121d12_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e131d12_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e141d12_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e151d12_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e191d12_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e211d11_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,29,30,31,32,38,41,43,45,47,49,50,51,52];
   this.GXLastCtrlId =52;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultamodeloprevenda",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8946,29,"MODELOPREVENDACODIGO","","","ModeloPreVendaCodigo","int",0,"px",3,3,"right",null,[],8946,"ModeloPreVendaCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(7266,30,"MODELOPREVENDATIPO","","ModeloPreVendaTipo","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(7234,31,"MODELOPREVENDADESCRICAO","","","ModeloPreVendaDescricao","svchar",0,"px",25,25,"left",null,[],7234,"ModeloPreVendaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(8945,32,"MODELOPREVENDAEMPRESAID","Empresa","","ModeloPrevendaEmpresaId","char",0,"px",10,10,"left",null,[],8945,"ModeloPrevendaEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMODELOPREVENDATIPOFILTRO",gxz:"ZV16ModeloPreVendaTipoFiltro",gxold:"OV16ModeloPreVendaTipoFiltro",gxvar:"AV16ModeloPreVendaTipoFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV16ModeloPreVendaTipoFiltro=Value},v2z:function(Value){gx.O.ZV16ModeloPreVendaTipoFiltro=Value},v2c:function(){gx.fn.setComboBoxValue("vMODELOPREVENDATIPOFILTRO",gx.O.AV16ModeloPreVendaTipoFiltro)},c2v:function(){gx.O.AV16ModeloPreVendaTipoFiltro=this.val()},val:function(){return gx.fn.getControlValue("vMODELOPREVENDATIPOFILTRO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMODELOPREVENDACODIGOFILTRO",gxz:"ZV18ModeloPrevendaCodigoFiltro",gxold:"OV18ModeloPrevendaCodigoFiltro",gxvar:"AV18ModeloPrevendaCodigoFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18ModeloPrevendaCodigoFiltro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18ModeloPrevendaCodigoFiltro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMODELOPREVENDACODIGOFILTRO",gx.O.AV18ModeloPrevendaCodigoFiltro,0)},c2v:function(){gx.O.AV18ModeloPrevendaCodigoFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMODELOPREVENDACODIGOFILTRO",'.')},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMODELOPREVENDADESCRICAO",gxz:"ZV17ModeloPreVendaDescricao",gxold:"OV17ModeloPreVendaDescricao",gxvar:"AV17ModeloPreVendaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17ModeloPreVendaDescricao=Value},v2z:function(Value){gx.O.ZV17ModeloPreVendaDescricao=Value},v2c:function(){gx.fn.setControlValue("vMODELOPREVENDADESCRICAO",gx.O.AV17ModeloPreVendaDescricao,0)},c2v:function(){gx.O.AV17ModeloPreVendaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vMODELOPREVENDADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELOPREVENDACODIGO",gxz:"Z8946ModeloPreVendaCodigo",gxold:"O8946ModeloPreVendaCodigo",gxvar:"A8946ModeloPreVendaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8946ModeloPreVendaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8946ModeloPreVendaCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MODELOPREVENDACODIGO",row || gx.fn.currentGridRowImpl(28),gx.O.A8946ModeloPreVendaCodigo,0)},c2v:function(){gx.O.A8946ModeloPreVendaCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MODELOPREVENDACODIGO",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELOPREVENDATIPO",gxz:"Z7266ModeloPreVendaTipo",gxold:"O7266ModeloPreVendaTipo",gxvar:"A7266ModeloPreVendaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A7266ModeloPreVendaTipo=Value},v2z:function(Value){gx.O.Z7266ModeloPreVendaTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("MODELOPREVENDATIPO",row || gx.fn.currentGridRowImpl(28),gx.O.A7266ModeloPreVendaTipo)},c2v:function(){gx.O.A7266ModeloPreVendaTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELOPREVENDATIPO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELOPREVENDADESCRICAO",gxz:"Z7234ModeloPreVendaDescricao",gxold:"O7234ModeloPreVendaDescricao",gxvar:"A7234ModeloPreVendaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7234ModeloPreVendaDescricao=Value},v2z:function(Value){gx.O.Z7234ModeloPreVendaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("MODELOPREVENDADESCRICAO",row || gx.fn.currentGridRowImpl(28),gx.O.A7234ModeloPreVendaDescricao,0)},c2v:function(){gx.O.A7234ModeloPreVendaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELOPREVENDADESCRICAO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELOPREVENDAEMPRESAID",gxz:"Z8945ModeloPrevendaEmpresaId",gxold:"O8945ModeloPrevendaEmpresaId",gxvar:"A8945ModeloPrevendaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8945ModeloPrevendaEmpresaId=Value},v2z:function(Value){gx.O.Z8945ModeloPrevendaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("MODELOPREVENDAEMPRESAID",row || gx.fn.currentGridRowImpl(28),gx.O.A8945ModeloPrevendaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8945ModeloPrevendaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELOPREVENDAEMPRESAID",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TABLENAV",grid:0};
   GXValidFnc[41]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[43]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[45]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[47]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[49]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV11Pagina",gxold:"OV11Pagina",gxvar:"AV11Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV11Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV11Pagina)},c2v:function(){gx.O.AV11Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV12PaginaAux",gxold:"OV12PaginaAux",gxvar:"AV12PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV12PaginaAux,0)},c2v:function(){gx.O.AV12PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16ModeloPreVendaTipoFiltro = "" ;
   this.ZV16ModeloPreVendaTipoFiltro = "" ;
   this.OV16ModeloPreVendaTipoFiltro = "" ;
   this.AV18ModeloPrevendaCodigoFiltro = 0 ;
   this.ZV18ModeloPrevendaCodigoFiltro = 0 ;
   this.OV18ModeloPrevendaCodigoFiltro = 0 ;
   this.AV17ModeloPreVendaDescricao = "" ;
   this.ZV17ModeloPreVendaDescricao = "" ;
   this.OV17ModeloPreVendaDescricao = "" ;
   this.Z8946ModeloPreVendaCodigo = 0 ;
   this.O8946ModeloPreVendaCodigo = 0 ;
   this.Z7266ModeloPreVendaTipo = "" ;
   this.O7266ModeloPreVendaTipo = "" ;
   this.Z7234ModeloPreVendaDescricao = "" ;
   this.O7234ModeloPreVendaDescricao = "" ;
   this.Z8945ModeloPrevendaEmpresaId = "" ;
   this.O8945ModeloPrevendaEmpresaId = "" ;
   this.AV11Pagina = 0 ;
   this.ZV11Pagina = 0 ;
   this.OV11Pagina = 0 ;
   this.AV12PaginaAux = 0 ;
   this.ZV12PaginaAux = 0 ;
   this.OV12PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16ModeloPreVendaTipoFiltro = "" ;
   this.AV18ModeloPrevendaCodigoFiltro = 0 ;
   this.AV17ModeloPreVendaDescricao = "" ;
   this.AV11Pagina = 0 ;
   this.AV12PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV19ModeloPreVendaTipo = "" ;
   this.AV15ModeloPrevendaCodigo = 0 ;
   this.AV20ModeloPreVendaTipoOut = "" ;
   this.A8946ModeloPreVendaCodigo = 0 ;
   this.A7266ModeloPreVendaTipo = "" ;
   this.A7234ModeloPreVendaDescricao = "" ;
   this.A8945ModeloPrevendaEmpresaId = "" ;
   this.AV14ModeloPrevendaEmpresaId = "" ;
   this.Events = {"e171d12_client": ["ENTER", true] ,"e111d12_client": ["'GXM_FIRST'", true] ,"e121d12_client": ["'GXM_PREVIOUS'", true] ,"e131d12_client": ["'GXM_NEXT'", true] ,"e141d12_client": ["'GXM_LAST'", true] ,"e151d12_client": ["'PROCURAR'", true] ,"e191d12_client": ["'ATUALIZAPAGINA'", true] ,"e211d11_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ModeloPreVendaTipoFiltro',fld:'vMODELOPREVENDATIPOFILTRO'},{av:'AV18ModeloPrevendaCodigoFiltro',fld:'vMODELOPREVENDACODIGOFILTRO'},{av:'AV17ModeloPreVendaDescricao',fld:'vMODELOPREVENDADESCRICAO'},{av:'AV14ModeloPrevendaEmpresaId',fld:'vMODELOPREVENDAEMPRESAID'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'MODELOPREVENDATIPO'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'MODELOPREVENDACODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MODELOPREVENDACODIGO","Title")',ctrl:'MODELOPREVENDACODIGO',prop:'Title'},{ctrl:'MODELOPREVENDADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MODELOPREVENDADESCRICAO","Title")',ctrl:'MODELOPREVENDADESCRICAO',prop:'Title'},{av:'AV12PaginaAux',fld:'vPAGINAAUX'},{av:'AV11Pagina',fld:'vPAGINA'},{av:'AV13NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A8946ModeloPreVendaCodigo',fld:'MODELOPREVENDACODIGO'},{av:'A7266ModeloPreVendaTipo',fld:'MODELOPREVENDATIPO'}],[{av:'AV15ModeloPrevendaCodigo',fld:'vMODELOPREVENDACODIGO'},{av:'AV20ModeloPreVendaTipoOut',fld:'vMODELOPREVENDATIPOOUT'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ModeloPreVendaTipoFiltro',fld:'vMODELOPREVENDATIPOFILTRO'},{av:'AV18ModeloPrevendaCodigoFiltro',fld:'vMODELOPREVENDACODIGOFILTRO'},{av:'AV17ModeloPreVendaDescricao',fld:'vMODELOPREVENDADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV14ModeloPrevendaEmpresaId',fld:'vMODELOPREVENDAEMPRESAID'}],[{av:'AV11Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ModeloPreVendaTipoFiltro',fld:'vMODELOPREVENDATIPOFILTRO'},{av:'AV18ModeloPrevendaCodigoFiltro',fld:'vMODELOPREVENDACODIGOFILTRO'},{av:'AV17ModeloPreVendaDescricao',fld:'vMODELOPREVENDADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV14ModeloPrevendaEmpresaId',fld:'vMODELOPREVENDAEMPRESAID'},{av:'AV11Pagina',fld:'vPAGINA'}],[{av:'AV11Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ModeloPreVendaTipoFiltro',fld:'vMODELOPREVENDATIPOFILTRO'},{av:'AV18ModeloPrevendaCodigoFiltro',fld:'vMODELOPREVENDACODIGOFILTRO'},{av:'AV17ModeloPreVendaDescricao',fld:'vMODELOPREVENDADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV14ModeloPrevendaEmpresaId',fld:'vMODELOPREVENDAEMPRESAID'},{av:'AV11Pagina',fld:'vPAGINA'},{av:'AV12PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV11Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ModeloPreVendaTipoFiltro',fld:'vMODELOPREVENDATIPOFILTRO'},{av:'AV18ModeloPrevendaCodigoFiltro',fld:'vMODELOPREVENDACODIGOFILTRO'},{av:'AV17ModeloPreVendaDescricao',fld:'vMODELOPREVENDADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV14ModeloPrevendaEmpresaId',fld:'vMODELOPREVENDAEMPRESAID'},{av:'AV12PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV11Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ModeloPreVendaTipoFiltro',fld:'vMODELOPREVENDATIPOFILTRO'},{av:'AV18ModeloPrevendaCodigoFiltro',fld:'vMODELOPREVENDACODIGOFILTRO'},{av:'AV17ModeloPreVendaDescricao',fld:'vMODELOPREVENDADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV14ModeloPrevendaEmpresaId',fld:'vMODELOPREVENDAEMPRESAID'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ModeloPreVendaTipoFiltro',fld:'vMODELOPREVENDATIPOFILTRO'},{av:'AV18ModeloPrevendaCodigoFiltro',fld:'vMODELOPREVENDACODIGOFILTRO'},{av:'AV17ModeloPreVendaDescricao',fld:'vMODELOPREVENDADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV14ModeloPrevendaEmpresaId',fld:'vMODELOPREVENDAEMPRESAID'}],[]];
   this.setVCMap("AV14ModeloPrevendaEmpresaId", "vMODELOPREVENDAEMPRESAID", 0, "char");
   this.setVCMap("AV19ModeloPreVendaTipo", "vMODELOPREVENDATIPO", 0, "char");
   this.setVCMap("AV15ModeloPrevendaCodigo", "vMODELOPREVENDACODIGO", 0, "int");
   this.setVCMap("AV20ModeloPreVendaTipoOut", "vMODELOPREVENDATIPOOUT", 0, "char");
   this.setVCMap("AV14ModeloPrevendaEmpresaId", "vMODELOPREVENDAEMPRESAID", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[52]);
   GridContainer.addRefreshingVar({rfrVar:"AV14ModeloPrevendaEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultamodeloprevenda());
