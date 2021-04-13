/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:51:45.71
*/
gx.evt.autoSkip = false;
gx.define('hconsultatipoordemservico', false, function () {
   this.ServerClass =  "hconsultatipoordemservico" ;
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
      this.AV7EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV5OrdemServicoTipoId=gx.fn.getIntegerValue("vORDEMSERVICOTIPOID",'.') ;
   };
   this.e181zc2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e111zc2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e121zc2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e131zc2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e141zc2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e151zc2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e161zc2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e211zc2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,19,20,26,29,31,33,35,37,38,39];
   this.GXLastCtrlId =39;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",18,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultatipoordemservico",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8682,19,"ORDEMSERVICOTIPOID","Código","","OrdemServicoTipoId","int",0,"px",2,2,"right",null,[],8682,"OrdemServicoTipoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8675,20,"ORDEMSERVICOTIPODESCRICAO","Descrição","","OrdemServicoTipoDescricao","svchar",0,"px",30,30,"left",null,[],8675,"OrdemServicoTipoDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEMSERVICOTIPODESCRICAO",gxz:"ZV12OrdemServicoTipoDescricao",gxold:"OV12OrdemServicoTipoDescricao",gxvar:"AV12OrdemServicoTipoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12OrdemServicoTipoDescricao=Value},v2z:function(Value){gx.O.ZV12OrdemServicoTipoDescricao=Value},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOTIPODESCRICAO",gx.O.AV12OrdemServicoTipoDescricao,0)},c2v:function(){gx.O.AV12OrdemServicoTipoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOTIPODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[19]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOID",gxz:"Z8682OrdemServicoTipoId",gxold:"O8682OrdemServicoTipoId",gxvar:"A8682OrdemServicoTipoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8682OrdemServicoTipoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8682OrdemServicoTipoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOTIPOID",row || gx.fn.currentGridRowImpl(18),gx.O.A8682OrdemServicoTipoId,0)},c2v:function(){gx.O.A8682OrdemServicoTipoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ORDEMSERVICOTIPOID",row || gx.fn.currentGridRowImpl(18),'.')},nac:gx.falseFn};
   GXValidFnc[20]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPODESCRICAO",gxz:"Z8675OrdemServicoTipoDescricao",gxold:"O8675OrdemServicoTipoDescricao",gxvar:"A8675OrdemServicoTipoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8675OrdemServicoTipoDescricao=Value},v2z:function(Value){gx.O.Z8675OrdemServicoTipoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOTIPODESCRICAO",row || gx.fn.currentGridRowImpl(18),gx.O.A8675OrdemServicoTipoDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8675OrdemServicoTipoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("ORDEMSERVICOTIPODESCRICAO",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TABLENAV",grid:0};
   GXValidFnc[29]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[37]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV13Pagina",gxold:"OV13Pagina",gxvar:"AV13Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV13Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV13Pagina)},c2v:function(){gx.O.AV13Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV14PaginaAux",gxold:"OV14PaginaAux",gxvar:"AV14PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV14PaginaAux,0)},c2v:function(){gx.O.AV14PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   this.AV12OrdemServicoTipoDescricao = "" ;
   this.ZV12OrdemServicoTipoDescricao = "" ;
   this.OV12OrdemServicoTipoDescricao = "" ;
   this.Z8682OrdemServicoTipoId = 0 ;
   this.O8682OrdemServicoTipoId = 0 ;
   this.Z8675OrdemServicoTipoDescricao = "" ;
   this.O8675OrdemServicoTipoDescricao = "" ;
   this.AV13Pagina = 0 ;
   this.ZV13Pagina = 0 ;
   this.OV13Pagina = 0 ;
   this.AV14PaginaAux = 0 ;
   this.ZV14PaginaAux = 0 ;
   this.OV14PaginaAux = 0 ;
   this.AV12OrdemServicoTipoDescricao = "" ;
   this.AV13Pagina = 0 ;
   this.AV14PaginaAux = 0 ;
   this.AV5OrdemServicoTipoId = 0 ;
   this.A8681OrdemServicoTipoEmpresaid = "" ;
   this.A8682OrdemServicoTipoId = 0 ;
   this.A8675OrdemServicoTipoDescricao = "" ;
   this.AV7EmpresaPadrao = "" ;
   this.Events = {"e181zc2_client": ["ENTER", true] ,"e111zc2_client": ["'GXM_FIRST'", true] ,"e121zc2_client": ["'GXM_PREVIOUS'", true] ,"e131zc2_client": ["'GXM_NEXT'", true] ,"e141zc2_client": ["'GXM_LAST'", true] ,"e151zc2_client": ["'PROCURAR'", true] ,"e161zc2_client": ["'FECHAR'", true] ,"e211zc2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12OrdemServicoTipoDescricao',fld:'vORDEMSERVICOTIPODESCRICAO'},{av:'AV7EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV14PaginaAux',fld:'vPAGINAAUX'},{av:'AV13Pagina',fld:'vPAGINA'},{av:'AV11NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A8682OrdemServicoTipoId',fld:'ORDEMSERVICOTIPOID'}],[{av:'AV5OrdemServicoTipoId',fld:'vORDEMSERVICOTIPOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12OrdemServicoTipoDescricao',fld:'vORDEMSERVICOTIPODESCRICAO'},{av:'AV7EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12OrdemServicoTipoDescricao',fld:'vORDEMSERVICOTIPODESCRICAO'},{av:'AV7EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV13Pagina',fld:'vPAGINA'}],[{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12OrdemServicoTipoDescricao',fld:'vORDEMSERVICOTIPODESCRICAO'},{av:'AV7EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV13Pagina',fld:'vPAGINA'},{av:'AV14PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12OrdemServicoTipoDescricao',fld:'vORDEMSERVICOTIPODESCRICAO'},{av:'AV7EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV14PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12OrdemServicoTipoDescricao',fld:'vORDEMSERVICOTIPODESCRICAO'},{av:'AV7EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV5OrdemServicoTipoId',fld:'vORDEMSERVICOTIPOID'}],[]];
   this.setVCMap("AV7EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV5OrdemServicoTipoId", "vORDEMSERVICOTIPOID", 0, "int");
   this.setVCMap("AV7EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar({rfrVar:"AV7EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultatipoordemservico());
