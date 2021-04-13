/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 17:49:20.52
*/
gx.evt.autoSkip = false;
gx.define('hconsultamodeloproposta', false, function () {
   this.ServerClass =  "hconsultamodeloproposta" ;
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
      this.AV22ModeloPropostaEmpresaId=gx.fn.getControlValue("vMODELOPROPOSTAEMPRESAID") ;
      this.AV19PModeloPropostaId=gx.fn.getIntegerValue("vPMODELOPROPOSTAID",'.') ;
      this.AV25PModeloPropostaEmpresaId=gx.fn.getControlValue("vPMODELOPROPOSTAEMPRESAID") ;
   };
   this.e1713z2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1113z2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e1213z2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e1313z2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e1413z2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e1513z2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e1913z2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e2113z1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,31,34,36,38,40,42,43,44,45];
   this.GXLastCtrlId =45;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultamodeloproposta",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8297,24,"MODELOPROPOSTAID","","","ModeloPropostaId","int",0,"px",6,6,"right",null,[],8297,"ModeloPropostaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8291,25,"MODELOPROPOSTADESCRICAO","","","ModeloPropostaDescricao","svchar",0,"px",30,30,"left",null,[],8291,"ModeloPropostaDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTRO",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMODELOPROPOSTAID",gxz:"ZV20ModeloPropostaId",gxold:"OV20ModeloPropostaId",gxvar:"AV20ModeloPropostaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ModeloPropostaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20ModeloPropostaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMODELOPROPOSTAID",gx.O.AV20ModeloPropostaId,0)},c2v:function(){gx.O.AV20ModeloPropostaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMODELOPROPOSTAID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMODELOPROPOSTADESCRICAO",gxz:"ZV21ModeloPropostaDescricao",gxold:"OV21ModeloPropostaDescricao",gxvar:"AV21ModeloPropostaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21ModeloPropostaDescricao=Value},v2z:function(Value){gx.O.ZV21ModeloPropostaDescricao=Value},v2c:function(){gx.fn.setControlValue("vMODELOPROPOSTADESCRICAO",gx.O.AV21ModeloPropostaDescricao,0)},c2v:function(){gx.O.AV21ModeloPropostaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vMODELOPROPOSTADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELOPROPOSTAID",gxz:"Z8297ModeloPropostaId",gxold:"O8297ModeloPropostaId",gxvar:"A8297ModeloPropostaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8297ModeloPropostaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8297ModeloPropostaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MODELOPROPOSTAID",row || gx.fn.currentGridRowImpl(23),gx.O.A8297ModeloPropostaId,0)},c2v:function(){gx.O.A8297ModeloPropostaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MODELOPROPOSTAID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELOPROPOSTADESCRICAO",gxz:"Z8291ModeloPropostaDescricao",gxold:"O8291ModeloPropostaDescricao",gxvar:"A8291ModeloPropostaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8291ModeloPropostaDescricao=Value},v2z:function(Value){gx.O.Z8291ModeloPropostaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("MODELOPROPOSTADESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A8291ModeloPropostaDescricao,0)},c2v:function(){gx.O.A8291ModeloPropostaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELOPROPOSTADESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLENAV",grid:0};
   GXValidFnc[34]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[42]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV17PaginaAux",gxold:"OV17PaginaAux",gxvar:"AV17PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV17PaginaAux,0)},c2v:function(){gx.O.AV17PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV16Pagina",gxold:"OV16Pagina",gxvar:"AV16Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV16Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV16Pagina)},c2v:function(){gx.O.AV16Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV20ModeloPropostaId = 0 ;
   this.ZV20ModeloPropostaId = 0 ;
   this.OV20ModeloPropostaId = 0 ;
   this.AV21ModeloPropostaDescricao = "" ;
   this.ZV21ModeloPropostaDescricao = "" ;
   this.OV21ModeloPropostaDescricao = "" ;
   this.Z8297ModeloPropostaId = 0 ;
   this.O8297ModeloPropostaId = 0 ;
   this.Z8291ModeloPropostaDescricao = "" ;
   this.O8291ModeloPropostaDescricao = "" ;
   this.AV17PaginaAux = 0 ;
   this.ZV17PaginaAux = 0 ;
   this.OV17PaginaAux = 0 ;
   this.AV16Pagina = 0 ;
   this.ZV16Pagina = 0 ;
   this.OV16Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV20ModeloPropostaId = 0 ;
   this.AV21ModeloPropostaDescricao = "" ;
   this.AV17PaginaAux = 0 ;
   this.AV16Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV19PModeloPropostaId = 0 ;
   this.AV25PModeloPropostaEmpresaId = "" ;
   this.A8298ModeloPropostaEmpresaId = "" ;
   this.A8297ModeloPropostaId = 0 ;
   this.A8291ModeloPropostaDescricao = "" ;
   this.AV22ModeloPropostaEmpresaId = "" ;
   this.Events = {"e1713z2_client": ["ENTER", true] ,"e1113z2_client": ["'GXM_FIRST'", true] ,"e1213z2_client": ["'GXM_PREVIOUS'", true] ,"e1313z2_client": ["'GXM_NEXT'", true] ,"e1413z2_client": ["'GXM_LAST'", true] ,"e1513z2_client": ["'PROCURAR'", true] ,"e1913z2_client": ["'ATUALIZAPAGINA'", true] ,"e2113z1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20ModeloPropostaId',fld:'vMODELOPROPOSTAID'},{av:'AV21ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'},{av:'AV22ModeloPropostaEmpresaId',fld:'vMODELOPROPOSTAEMPRESAID'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'MODELOPROPOSTAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MODELOPROPOSTAID","Title")',ctrl:'MODELOPROPOSTAID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'MODELOPROPOSTADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MODELOPROPOSTADESCRICAO","Title")',ctrl:'MODELOPROPOSTADESCRICAO',prop:'Title'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'AV18NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A8297ModeloPropostaId',fld:'MODELOPROPOSTAID'},{av:'A8298ModeloPropostaEmpresaId',fld:'MODELOPROPOSTAEMPRESAID'}],[{av:'AV19PModeloPropostaId',fld:'vPMODELOPROPOSTAID'},{av:'AV25PModeloPropostaEmpresaId',fld:'vPMODELOPROPOSTAEMPRESAID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20ModeloPropostaId',fld:'vMODELOPROPOSTAID'},{av:'AV21ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22ModeloPropostaEmpresaId',fld:'vMODELOPROPOSTAEMPRESAID'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20ModeloPropostaId',fld:'vMODELOPROPOSTAID'},{av:'AV21ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22ModeloPropostaEmpresaId',fld:'vMODELOPROPOSTAEMPRESAID'},{av:'AV16Pagina',fld:'vPAGINA'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20ModeloPropostaId',fld:'vMODELOPROPOSTAID'},{av:'AV21ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22ModeloPropostaEmpresaId',fld:'vMODELOPROPOSTAEMPRESAID'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20ModeloPropostaId',fld:'vMODELOPROPOSTAID'},{av:'AV21ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22ModeloPropostaEmpresaId',fld:'vMODELOPROPOSTAEMPRESAID'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20ModeloPropostaId',fld:'vMODELOPROPOSTAID'},{av:'AV21ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22ModeloPropostaEmpresaId',fld:'vMODELOPROPOSTAEMPRESAID'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20ModeloPropostaId',fld:'vMODELOPROPOSTAID'},{av:'AV21ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22ModeloPropostaEmpresaId',fld:'vMODELOPROPOSTAEMPRESAID'}],[]];
   this.setVCMap("AV22ModeloPropostaEmpresaId", "vMODELOPROPOSTAEMPRESAID", 0, "char");
   this.setVCMap("AV19PModeloPropostaId", "vPMODELOPROPOSTAID", 0, "int");
   this.setVCMap("AV25PModeloPropostaEmpresaId", "vPMODELOPROPOSTAEMPRESAID", 0, "char");
   this.setVCMap("AV22ModeloPropostaEmpresaId", "vMODELOPROPOSTAEMPRESAID", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   GridContainer.addRefreshingVar({rfrVar:"AV22ModeloPropostaEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultamodeloproposta());
