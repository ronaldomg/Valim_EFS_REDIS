/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:59:50.34
*/
gx.evt.autoSkip = false;
gx.define('hconsultaordemservicotipo', false, function () {
   this.ServerClass =  "hconsultaordemservicotipo" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV27OrdemServicoTipoId=gx.fn.getIntegerValue("vORDEMSERVICOTIPOID",'.') ;
      this.AV28OrdemServicoTipoDescricao=gx.fn.getControlValue("vORDEMSERVICOTIPODESCRICAO") ;
   };
   this.e1120m2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e1220m2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e1320m2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1420m2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e1520m2_client=function()
   {
      this.executeServerEvent("'RETORNA'", true, null, false, false);
   };
   this.e1920m2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e2020m2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,10,11,12,15,17,24];
   this.GXLastCtrlId =24;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",9,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaordemservicotipo",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8682,10,"ORDEMSERVICOTIPOID","Código","","OrdemServicoTipoId","int",0,"px",2,2,"right","e1520m2_client",[],8682,"OrdemServicoTipoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8675,11,"ORDEMSERVICOTIPODESCRICAO","Descrição","","OrdemServicoTipoDescricao","svchar",0,"px",30,30,"left",null,[],8675,"OrdemServicoTipoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE4",grid:0};
   GXValidFnc[10]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:9,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOID",gxz:"Z8682OrdemServicoTipoId",gxold:"O8682OrdemServicoTipoId",gxvar:"A8682OrdemServicoTipoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8682OrdemServicoTipoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8682OrdemServicoTipoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOTIPOID",row || gx.fn.currentGridRowImpl(9),gx.O.A8682OrdemServicoTipoId,0)},c2v:function(){gx.O.A8682OrdemServicoTipoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ORDEMSERVICOTIPOID",row || gx.fn.currentGridRowImpl(9),'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:9,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPODESCRICAO",gxz:"Z8675OrdemServicoTipoDescricao",gxold:"O8675OrdemServicoTipoDescricao",gxvar:"A8675OrdemServicoTipoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8675OrdemServicoTipoDescricao=Value},v2z:function(Value){gx.O.Z8675OrdemServicoTipoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOTIPODESCRICAO",row || gx.fn.currentGridRowImpl(9),gx.O.A8675OrdemServicoTipoDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8675OrdemServicoTipoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("ORDEMSERVICOTIPODESCRICAO",row || gx.fn.currentGridRowImpl(9))},nac:gx.falseFn};
   GXValidFnc[12]={fld:"TABLE6",grid:0};
   GXValidFnc[15]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[17]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV5Pagina,0)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   this.Z8682OrdemServicoTipoId = 0 ;
   this.O8682OrdemServicoTipoId = 0 ;
   this.Z8675OrdemServicoTipoDescricao = "" ;
   this.O8675OrdemServicoTipoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV5Pagina = 0 ;
   this.AV27OrdemServicoTipoId = 0 ;
   this.AV28OrdemServicoTipoDescricao = "" ;
   this.A9243OrdemServicoTipoSituacao = "" ;
   this.A8681OrdemServicoTipoEmpresaid = "" ;
   this.A8682OrdemServicoTipoId = 0 ;
   this.A8675OrdemServicoTipoDescricao = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.Events = {"e1120m2_client": ["'ANTERIOR'", true] ,"e1220m2_client": ["'PROXIMO'", true] ,"e1320m2_client": ["'FECHAR'", true] ,"e1420m2_client": ["'PROCURAR'", true] ,"e1520m2_client": ["'RETORNA'", true] ,"e1920m2_client": ["ENTER", true] ,"e2020m2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[],[{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'AV28OrdemServicoTipoDescricao',fld:'vORDEMSERVICOTIPODESCRICAO'},{av:'AV27OrdemServicoTipoId',fld:'vORDEMSERVICOTIPOID'}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'RETORNA'"] = [[{av:'A8682OrdemServicoTipoId',fld:'ORDEMSERVICOTIPOID'},{av:'A8675OrdemServicoTipoDescricao',fld:'ORDEMSERVICOTIPODESCRICAO'}],[{av:'AV27OrdemServicoTipoId',fld:'vORDEMSERVICOTIPOID'},{av:'AV28OrdemServicoTipoDescricao',fld:'vORDEMSERVICOTIPODESCRICAO'}]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV27OrdemServicoTipoId", "vORDEMSERVICOTIPOID", 0, "int");
   this.setVCMap("AV28OrdemServicoTipoDescricao", "vORDEMSERVICOTIPODESCRICAO", 0, "svchar");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaordemservicotipo());
