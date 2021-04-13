/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:45:24.10
*/
gx.evt.autoSkip = false;
gx.define('hmodalfasemovimentoosxsaida', false, function () {
   this.ServerClass =  "hmodalfasemovimentoosxsaida" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A8606OrdemServicoFaseEmpresaId=gx.fn.getControlValue("ORDEMSERVICOFASEEMPRESAID") ;
      this.AV166OrdemServicoFaseEmpresaId=gx.fn.getControlValue("vORDEMSERVICOFASEEMPRESAID") ;
      this.A9242OrdemServicoFaseSituacao=gx.fn.getControlValue("ORDEMSERVICOFASESITUACAO") ;
      this.AV175StrCol=gx.fn.getControlValue("vSTRCOL") ;
      this.A8607OrdemServicoFaseId=gx.fn.getIntegerValue("ORDEMSERVICOFASEID",'.') ;
      this.A8600OrdemServicoFaseDescricao=gx.fn.getControlValue("ORDEMSERVICOFASEDESCRICAO") ;
   };
   this.e111fy2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e141fy1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,6,7,9,10,11,12];
   this.GXLastCtrlId =12;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",8,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmodalfasemovimentoosxsaida",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",false,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addCheckBox("Fasedomsn",9,"vFASEDOMSN","Sel","","FaseDomSN","char","S","N",null,true,false,0,"px","");
   GridContainer.addSingleLineEdit("Ordemservicofaseid",10,"vORDEMSERVICOFASEID","Cod","","OrdemServicoFaseId","int",0,"px",2,2,"right",null,[],"Ordemservicofaseid","OrdemServicoFaseId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Ordemservicofasedescricao",11,"vORDEMSERVICOFASEDESCRICAO","Descricao da Fase","","OrdemServicoFaseDescricao","svchar",0,"px",30,30,"left",null,[],"Ordemservicofasedescricao","OrdemServicoFaseDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[6]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[9]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:8,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vFASEDOMSN",gxz:"ZV176FaseDomSN",gxold:"OV176FaseDomSN",gxvar:"AV176FaseDomSN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.AV176FaseDomSN=Value},v2z:function(Value){gx.O.ZV176FaseDomSN=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("vFASEDOMSN",row || gx.fn.currentGridRowImpl(8),gx.O.AV176FaseDomSN,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV176FaseDomSN=this.val()},val:function(row){return gx.fn.getGridControlValue("vFASEDOMSN",row || gx.fn.currentGridRowImpl(8))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[10]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,isacc:0,grid:8,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOFASEID",gxz:"ZV158OrdemServicoFaseId",gxold:"OV158OrdemServicoFaseId",gxvar:"AV158OrdemServicoFaseId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV158OrdemServicoFaseId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV158OrdemServicoFaseId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vORDEMSERVICOFASEID",row || gx.fn.currentGridRowImpl(8),gx.O.AV158OrdemServicoFaseId,0)},c2v:function(){gx.O.AV158OrdemServicoFaseId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vORDEMSERVICOFASEID",row || gx.fn.currentGridRowImpl(8),'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:8,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOFASEDESCRICAO",gxz:"ZV164OrdemServicoFaseDescricao",gxold:"OV164OrdemServicoFaseDescricao",gxvar:"AV164OrdemServicoFaseDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV164OrdemServicoFaseDescricao=Value},v2z:function(Value){gx.O.ZV164OrdemServicoFaseDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vORDEMSERVICOFASEDESCRICAO",row || gx.fn.currentGridRowImpl(8),gx.O.AV164OrdemServicoFaseDescricao,0)},c2v:function(){gx.O.AV164OrdemServicoFaseDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vORDEMSERVICOFASEDESCRICAO",row || gx.fn.currentGridRowImpl(8))},nac:gx.falseFn};
   GXValidFnc[12]={fld:"DIV2", format:2,grid:0};
   this.ZV176FaseDomSN = "" ;
   this.OV176FaseDomSN = "" ;
   this.ZV158OrdemServicoFaseId = 0 ;
   this.OV158OrdemServicoFaseId = 0 ;
   this.ZV164OrdemServicoFaseDescricao = "" ;
   this.OV164OrdemServicoFaseDescricao = "" ;
   this.AV176FaseDomSN = "" ;
   this.AV158OrdemServicoFaseId = 0 ;
   this.AV164OrdemServicoFaseDescricao = "" ;
   this.A9242OrdemServicoFaseSituacao = "" ;
   this.A8606OrdemServicoFaseEmpresaId = "" ;
   this.A8607OrdemServicoFaseId = 0 ;
   this.A8600OrdemServicoFaseDescricao = "" ;
   this.AV166OrdemServicoFaseEmpresaId = "" ;
   this.AV175StrCol = [ ] ;
   this.Events = {"e111fy2_client": ["ENTER", true] ,"e141fy1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'A8606OrdemServicoFaseEmpresaId',fld:'ORDEMSERVICOFASEEMPRESAID'},{av:'AV166OrdemServicoFaseEmpresaId',fld:'vORDEMSERVICOFASEEMPRESAID'},{av:'A9242OrdemServicoFaseSituacao',fld:'ORDEMSERVICOFASESITUACAO'},{av:'AV175StrCol',fld:'vSTRCOL'},{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'},{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A8606OrdemServicoFaseEmpresaId',fld:'ORDEMSERVICOFASEEMPRESAID'},{av:'AV166OrdemServicoFaseEmpresaId',fld:'vORDEMSERVICOFASEEMPRESAID'},{av:'A9242OrdemServicoFaseSituacao',fld:'ORDEMSERVICOFASESITUACAO'},{av:'AV175StrCol',fld:'vSTRCOL'},{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'},{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'}],[{av:'AV176FaseDomSN',fld:'vFASEDOMSN'},{av:'AV180GXV1',fld:'vGXV1'},{av:'AV174Str',fld:'vSTR'},{av:'AV164OrdemServicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'},{av:'AV158OrdemServicoFaseId',fld:'vORDEMSERVICOFASEID'}]];
   this.EvtParms["ENTER"] = [[{av:'AV176FaseDomSN',fld:'vFASEDOMSN',grid:8},{av:'AV173Separador',fld:'vSEPARADOR'},{av:'AV158OrdemServicoFaseId',fld:'vORDEMSERVICOFASEID',grid:8}],[{av:'AV171ListaFase',fld:'vLISTAFASE'},{av:'AV173Separador',fld:'vSEPARADOR'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A8606OrdemServicoFaseEmpresaId", "ORDEMSERVICOFASEEMPRESAID", 0, "char");
   this.setVCMap("AV166OrdemServicoFaseEmpresaId", "vORDEMSERVICOFASEEMPRESAID", 0, "char");
   this.setVCMap("A9242OrdemServicoFaseSituacao", "ORDEMSERVICOFASESITUACAO", 0, "char");
   this.setVCMap("AV175StrCol", "vSTRCOL", 0, "Collchar");
   this.setVCMap("A8607OrdemServicoFaseId", "ORDEMSERVICOFASEID", 0, "int");
   this.setVCMap("A8600OrdemServicoFaseDescricao", "ORDEMSERVICOFASEDESCRICAO", 0, "svchar");
   this.setVCMap("A8606OrdemServicoFaseEmpresaId", "ORDEMSERVICOFASEEMPRESAID", 0, "char");
   this.setVCMap("AV166OrdemServicoFaseEmpresaId", "vORDEMSERVICOFASEEMPRESAID", 0, "char");
   this.setVCMap("A9242OrdemServicoFaseSituacao", "ORDEMSERVICOFASESITUACAO", 0, "char");
   this.setVCMap("AV175StrCol", "vSTRCOL", 0, "Collchar");
   this.setVCMap("A8607OrdemServicoFaseId", "ORDEMSERVICOFASEID", 0, "int");
   this.setVCMap("A8600OrdemServicoFaseDescricao", "ORDEMSERVICOFASEDESCRICAO", 0, "svchar");
   GridContainer.addRefreshingVar({rfrVar:"A8606OrdemServicoFaseEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV166OrdemServicoFaseEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A9242OrdemServicoFaseSituacao"});
   GridContainer.addRefreshingVar({rfrVar:"AV175StrCol"});
   GridContainer.addRefreshingVar({rfrVar:"A8607OrdemServicoFaseId"});
   GridContainer.addRefreshingVar({rfrVar:"A8600OrdemServicoFaseDescricao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalfasemovimentoosxsaida());
