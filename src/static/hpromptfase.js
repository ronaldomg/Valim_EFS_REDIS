/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:43:7.64
*/
gx.evt.autoSkip = false;
gx.define('hpromptfase', false, function () {
   this.ServerClass =  "hpromptfase" ;
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
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV22OrdemServicoFaseidOut=gx.fn.getIntegerValue("vORDEMSERVICOFASEIDOUT",'.') ;
   };
   this.e181fq2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e111fq2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e121fq2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e131fq2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e141fq2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e151fq2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e161fq2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e201fq2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e221fq2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,31,34,36,38,40,42,43,44,45];
   this.GXLastCtrlId =45;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hpromptfase",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8607,24,"ORDEMSERVICOFASEID","","","OrdemServicoFaseId","int",0,"px",2,2,"right",null,[],8607,"OrdemServicoFaseId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8600,25,"ORDEMSERVICOFASEDESCRICAO","","","OrdemServicoFaseDescricao","svchar",0,"px",30,30,"left",null,[],8600,"OrdemServicoFaseDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE4",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEMSERVICOFASEID",gxz:"ZV23OrdemServicoFaseId",gxold:"OV23OrdemServicoFaseId",gxvar:"AV23OrdemServicoFaseId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23OrdemServicoFaseId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23OrdemServicoFaseId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOFASEID",gx.O.AV23OrdemServicoFaseId,0)},c2v:function(){gx.O.AV23OrdemServicoFaseId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOFASEID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEMSERVICOFASEDESCRICAO",gxz:"ZV24OrdemServicoFaseDescricao",gxold:"OV24OrdemServicoFaseDescricao",gxvar:"AV24OrdemServicoFaseDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24OrdemServicoFaseDescricao=Value},v2z:function(Value){gx.O.ZV24OrdemServicoFaseDescricao=Value},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOFASEDESCRICAO",gx.O.AV24OrdemServicoFaseDescricao,0)},c2v:function(){gx.O.AV24OrdemServicoFaseDescricao=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOFASEDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOFASEID",gxz:"Z8607OrdemServicoFaseId",gxold:"O8607OrdemServicoFaseId",gxvar:"A8607OrdemServicoFaseId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8607OrdemServicoFaseId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8607OrdemServicoFaseId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOFASEID",row || gx.fn.currentGridRowImpl(23),gx.O.A8607OrdemServicoFaseId,0)},c2v:function(){gx.O.A8607OrdemServicoFaseId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ORDEMSERVICOFASEID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOFASEDESCRICAO",gxz:"Z8600OrdemServicoFaseDescricao",gxold:"O8600OrdemServicoFaseDescricao",gxvar:"A8600OrdemServicoFaseDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8600OrdemServicoFaseDescricao=Value},v2z:function(Value){gx.O.Z8600OrdemServicoFaseDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOFASEDESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A8600OrdemServicoFaseDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8600OrdemServicoFaseDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("ORDEMSERVICOFASEDESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLE5",grid:0};
   GXValidFnc[34]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[42]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV16Pagina",gxold:"OV16Pagina",gxvar:"AV16Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV16Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV16Pagina)},c2v:function(){gx.O.AV16Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV17PaginaAux",gxold:"OV17PaginaAux",gxvar:"AV17PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV17PaginaAux,0)},c2v:function(){gx.O.AV17PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV23OrdemServicoFaseId = 0 ;
   this.ZV23OrdemServicoFaseId = 0 ;
   this.OV23OrdemServicoFaseId = 0 ;
   this.AV24OrdemServicoFaseDescricao = "" ;
   this.ZV24OrdemServicoFaseDescricao = "" ;
   this.OV24OrdemServicoFaseDescricao = "" ;
   this.Z8607OrdemServicoFaseId = 0 ;
   this.O8607OrdemServicoFaseId = 0 ;
   this.Z8600OrdemServicoFaseDescricao = "" ;
   this.O8600OrdemServicoFaseDescricao = "" ;
   this.AV16Pagina = 0 ;
   this.ZV16Pagina = 0 ;
   this.OV16Pagina = 0 ;
   this.AV17PaginaAux = 0 ;
   this.ZV17PaginaAux = 0 ;
   this.OV17PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV23OrdemServicoFaseId = 0 ;
   this.AV24OrdemServicoFaseDescricao = "" ;
   this.AV16Pagina = 0 ;
   this.AV17PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV22OrdemServicoFaseidOut = 0 ;
   this.A8606OrdemServicoFaseEmpresaId = "" ;
   this.A8607OrdemServicoFaseId = 0 ;
   this.A8600OrdemServicoFaseDescricao = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e181fq2_client": ["ENTER", true] ,"e111fq2_client": ["'GXM_FIRST'", true] ,"e121fq2_client": ["'GXM_PREVIOUS'", true] ,"e131fq2_client": ["'GXM_NEXT'", true] ,"e141fq2_client": ["'GXM_LAST'", true] ,"e151fq2_client": ["'PROCURAR'", true] ,"e161fq2_client": ["'FECHAR'", true] ,"e201fq2_client": ["'ATUALIZAPAGINA'", true] ,"e221fq2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23OrdemServicoFaseId',fld:'vORDEMSERVICOFASEID'},{av:'AV24OrdemServicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'ORDEMSERVICOFASEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ORDEMSERVICOFASEID","Title")',ctrl:'ORDEMSERVICOFASEID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'ORDEMSERVICOFASEDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ORDEMSERVICOFASEDESCRICAO","Title")',ctrl:'ORDEMSERVICOFASEDESCRICAO',prop:'Title'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'AV18NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'}],[{av:'AV22OrdemServicoFaseidOut',fld:'vORDEMSERVICOFASEIDOUT'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23OrdemServicoFaseId',fld:'vORDEMSERVICOFASEID'},{av:'AV24OrdemServicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23OrdemServicoFaseId',fld:'vORDEMSERVICOFASEID'},{av:'AV24OrdemServicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV16Pagina',fld:'vPAGINA'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23OrdemServicoFaseId',fld:'vORDEMSERVICOFASEID'},{av:'AV24OrdemServicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23OrdemServicoFaseId',fld:'vORDEMSERVICOFASEID'},{av:'AV24OrdemServicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23OrdemServicoFaseId',fld:'vORDEMSERVICOFASEID'},{av:'AV24OrdemServicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV22OrdemServicoFaseidOut',fld:'vORDEMSERVICOFASEIDOUT'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23OrdemServicoFaseId',fld:'vORDEMSERVICOFASEID'},{av:'AV24OrdemServicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV22OrdemServicoFaseidOut", "vORDEMSERVICOFASEIDOUT", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hpromptfase());
