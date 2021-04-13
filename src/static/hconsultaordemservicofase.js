/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:51:47.40
*/
gx.evt.autoSkip = false;
gx.define('hconsultaordemservicofase', false, function () {
   this.ServerClass =  "hconsultaordemservicofase" ;
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
      this.AV6EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV17OrdemServicoFaseId=gx.fn.getIntegerValue("vORDEMSERVICOFASEID",'.') ;
   };
   this.e181zd2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e111zd2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e121zd2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e131zd2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e141zd2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e151zd2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e161zd2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e211zd2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,19,20,26,29,31,33,35,37,38,39];
   this.GXLastCtrlId =39;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",18,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaordemservicofase",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8607,19,"ORDEMSERVICOFASEID","Código","","OrdemServicoFaseId","int",0,"px",2,2,"right",null,[],8607,"OrdemServicoFaseId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8600,20,"ORDEMSERVICOFASEDESCRICAO","Descrição","","OrdemServicoFaseDescricao","svchar",0,"px",30,30,"left",null,[],8600,"OrdemServicoFaseDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEMSERVICOFASEDESCRICAO",gxz:"ZV11OrdemServicoFaseDescricao",gxold:"OV11OrdemServicoFaseDescricao",gxvar:"AV11OrdemServicoFaseDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrdemServicoFaseDescricao=Value},v2z:function(Value){gx.O.ZV11OrdemServicoFaseDescricao=Value},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOFASEDESCRICAO",gx.O.AV11OrdemServicoFaseDescricao,0)},c2v:function(){gx.O.AV11OrdemServicoFaseDescricao=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOFASEDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[19]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOFASEID",gxz:"Z8607OrdemServicoFaseId",gxold:"O8607OrdemServicoFaseId",gxvar:"A8607OrdemServicoFaseId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8607OrdemServicoFaseId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8607OrdemServicoFaseId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOFASEID",row || gx.fn.currentGridRowImpl(18),gx.O.A8607OrdemServicoFaseId,0)},c2v:function(){gx.O.A8607OrdemServicoFaseId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ORDEMSERVICOFASEID",row || gx.fn.currentGridRowImpl(18),'.')},nac:gx.falseFn};
   GXValidFnc[20]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOFASEDESCRICAO",gxz:"Z8600OrdemServicoFaseDescricao",gxold:"O8600OrdemServicoFaseDescricao",gxvar:"A8600OrdemServicoFaseDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8600OrdemServicoFaseDescricao=Value},v2z:function(Value){gx.O.Z8600OrdemServicoFaseDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOFASEDESCRICAO",row || gx.fn.currentGridRowImpl(18),gx.O.A8600OrdemServicoFaseDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8600OrdemServicoFaseDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("ORDEMSERVICOFASEDESCRICAO",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TABLENAV",grid:0};
   GXValidFnc[29]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[37]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV12Pagina",gxold:"OV12Pagina",gxvar:"AV12Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV12Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV12Pagina)},c2v:function(){gx.O.AV12Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV13PaginaAux",gxold:"OV13PaginaAux",gxvar:"AV13PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV13PaginaAux,0)},c2v:function(){gx.O.AV13PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   this.AV11OrdemServicoFaseDescricao = "" ;
   this.ZV11OrdemServicoFaseDescricao = "" ;
   this.OV11OrdemServicoFaseDescricao = "" ;
   this.Z8607OrdemServicoFaseId = 0 ;
   this.O8607OrdemServicoFaseId = 0 ;
   this.Z8600OrdemServicoFaseDescricao = "" ;
   this.O8600OrdemServicoFaseDescricao = "" ;
   this.AV12Pagina = 0 ;
   this.ZV12Pagina = 0 ;
   this.OV12Pagina = 0 ;
   this.AV13PaginaAux = 0 ;
   this.ZV13PaginaAux = 0 ;
   this.OV13PaginaAux = 0 ;
   this.AV11OrdemServicoFaseDescricao = "" ;
   this.AV12Pagina = 0 ;
   this.AV13PaginaAux = 0 ;
   this.AV17OrdemServicoFaseId = 0 ;
   this.A8606OrdemServicoFaseEmpresaId = "" ;
   this.A8607OrdemServicoFaseId = 0 ;
   this.A8600OrdemServicoFaseDescricao = "" ;
   this.AV6EmpresaPadrao = "" ;
   this.Events = {"e181zd2_client": ["ENTER", true] ,"e111zd2_client": ["'GXM_FIRST'", true] ,"e121zd2_client": ["'GXM_PREVIOUS'", true] ,"e131zd2_client": ["'GXM_NEXT'", true] ,"e141zd2_client": ["'GXM_LAST'", true] ,"e151zd2_client": ["'PROCURAR'", true] ,"e161zd2_client": ["'FECHAR'", true] ,"e211zd2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrdemServicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV13PaginaAux',fld:'vPAGINAAUX'},{av:'AV12Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'}],[{av:'AV17OrdemServicoFaseId',fld:'vORDEMSERVICOFASEID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrdemServicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV12Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrdemServicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV12Pagina',fld:'vPAGINA'}],[{av:'AV12Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrdemServicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV12Pagina',fld:'vPAGINA'},{av:'AV13PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV12Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrdemServicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV13PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV12Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrdemServicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV12Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17OrdemServicoFaseId',fld:'vORDEMSERVICOFASEID'}],[]];
   this.setVCMap("AV6EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV17OrdemServicoFaseId", "vORDEMSERVICOFASEID", 0, "int");
   this.setVCMap("AV6EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar({rfrVar:"AV6EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaordemservicofase());
