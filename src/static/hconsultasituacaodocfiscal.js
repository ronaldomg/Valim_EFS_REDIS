/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:18:3.51
*/
gx.evt.autoSkip = false;
gx.define('hconsultasituacaodocfiscal', false, function () {
   this.ServerClass =  "hconsultasituacaodocfiscal" ;
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
      this.AV17SituacaoDocFiscalCodigo=gx.fn.getControlValue("vSITUACAODOCFISCALCODIGO") ;
   };
   this.e17tu2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11tu2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12tu2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13tu2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14tu2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15tu2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19tu2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21tu1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,19,20,26,29,31,33,35,37,38,39,40];
   this.GXLastCtrlId =40;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",18,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultasituacaodocfiscal",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(4666,19,"SITUACAODOCFISCALCODIGO","","","SituacaoDocFiscalCodigo","char",0,"px",2,2,"left",null,[],4666,"SituacaoDocFiscalCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5164,20,"SITUACAODOCFISCALDESCRICAO","","","SituacaoDocFiscalDescricao","svchar",0,"px",80,80,"left",null,[],5164,"SituacaoDocFiscalDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCSITUACAODOCFISCALCODIGO",gxz:"ZV16cSituacaoDocFiscalCodigo",gxold:"OV16cSituacaoDocFiscalCodigo",gxvar:"AV16cSituacaoDocFiscalCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16cSituacaoDocFiscalCodigo=Value},v2z:function(Value){gx.O.ZV16cSituacaoDocFiscalCodigo=Value},v2c:function(){gx.fn.setControlValue("vCSITUACAODOCFISCALCODIGO",gx.O.AV16cSituacaoDocFiscalCodigo,0)},c2v:function(){gx.O.AV16cSituacaoDocFiscalCodigo=this.val()},val:function(){return gx.fn.getControlValue("vCSITUACAODOCFISCALCODIGO")},nac:gx.falseFn};
   GXValidFnc[19]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAODOCFISCALCODIGO",gxz:"Z4666SituacaoDocFiscalCodigo",gxold:"O4666SituacaoDocFiscalCodigo",gxvar:"A4666SituacaoDocFiscalCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4666SituacaoDocFiscalCodigo=Value},v2z:function(Value){gx.O.Z4666SituacaoDocFiscalCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("SITUACAODOCFISCALCODIGO",row || gx.fn.currentGridRowImpl(18),gx.O.A4666SituacaoDocFiscalCodigo,0)},c2v:function(){gx.O.A4666SituacaoDocFiscalCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("SITUACAODOCFISCALCODIGO",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[20]={lvl:2,type:"svchar",len:80,dec:0,sign:false,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAODOCFISCALDESCRICAO",gxz:"Z5164SituacaoDocFiscalDescricao",gxold:"O5164SituacaoDocFiscalDescricao",gxvar:"A5164SituacaoDocFiscalDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5164SituacaoDocFiscalDescricao=Value},v2z:function(Value){gx.O.Z5164SituacaoDocFiscalDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("SITUACAODOCFISCALDESCRICAO",row || gx.fn.currentGridRowImpl(18),gx.O.A5164SituacaoDocFiscalDescricao,0)},c2v:function(){gx.O.A5164SituacaoDocFiscalDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("SITUACAODOCFISCALDESCRICAO",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TABLENAV",grid:0};
   GXValidFnc[29]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[37]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV19Pagina",gxold:"OV19Pagina",gxvar:"AV19Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV19Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV19Pagina)},c2v:function(){gx.O.AV19Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV20PaginaAux",gxold:"OV20PaginaAux",gxvar:"AV20PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV20PaginaAux,0)},c2v:function(){gx.O.AV20PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16cSituacaoDocFiscalCodigo = "" ;
   this.ZV16cSituacaoDocFiscalCodigo = "" ;
   this.OV16cSituacaoDocFiscalCodigo = "" ;
   this.Z4666SituacaoDocFiscalCodigo = "" ;
   this.O4666SituacaoDocFiscalCodigo = "" ;
   this.Z5164SituacaoDocFiscalDescricao = "" ;
   this.O5164SituacaoDocFiscalDescricao = "" ;
   this.AV19Pagina = 0 ;
   this.ZV19Pagina = 0 ;
   this.OV19Pagina = 0 ;
   this.AV20PaginaAux = 0 ;
   this.ZV20PaginaAux = 0 ;
   this.OV20PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16cSituacaoDocFiscalCodigo = "" ;
   this.AV19Pagina = 0 ;
   this.AV20PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV17SituacaoDocFiscalCodigo = "" ;
   this.A4666SituacaoDocFiscalCodigo = "" ;
   this.A5164SituacaoDocFiscalDescricao = "" ;
   this.Events = {"e17tu2_client": ["ENTER", true] ,"e11tu2_client": ["'GXM_FIRST'", true] ,"e12tu2_client": ["'GXM_PREVIOUS'", true] ,"e13tu2_client": ["'GXM_NEXT'", true] ,"e14tu2_client": ["'GXM_LAST'", true] ,"e15tu2_client": ["'PROCURAR'", true] ,"e19tu2_client": ["'ATUALIZAPAGINA'", true] ,"e21tu1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16cSituacaoDocFiscalCodigo',fld:'vCSITUACAODOCFISCALCODIGO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'SITUACAODOCFISCALCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SITUACAODOCFISCALCODIGO","Title")',ctrl:'SITUACAODOCFISCALCODIGO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'SITUACAODOCFISCALDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SITUACAODOCFISCALDESCRICAO","Title")',ctrl:'SITUACAODOCFISCALDESCRICAO',prop:'Title'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'},{av:'AV19Pagina',fld:'vPAGINA'},{av:'AV18NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A4666SituacaoDocFiscalCodigo',fld:'SITUACAODOCFISCALCODIGO'}],[{av:'AV17SituacaoDocFiscalCodigo',fld:'vSITUACAODOCFISCALCODIGO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16cSituacaoDocFiscalCodigo',fld:'vCSITUACAODOCFISCALCODIGO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16cSituacaoDocFiscalCodigo',fld:'vCSITUACAODOCFISCALCODIGO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19Pagina',fld:'vPAGINA'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16cSituacaoDocFiscalCodigo',fld:'vCSITUACAODOCFISCALCODIGO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19Pagina',fld:'vPAGINA'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16cSituacaoDocFiscalCodigo',fld:'vCSITUACAODOCFISCALCODIGO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16cSituacaoDocFiscalCodigo',fld:'vCSITUACAODOCFISCALCODIGO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16cSituacaoDocFiscalCodigo',fld:'vCSITUACAODOCFISCALCODIGO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[]];
   this.setVCMap("AV17SituacaoDocFiscalCodigo", "vSITUACAODOCFISCALCODIGO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[10]);
   GridContainer.addRefreshingVar(this.GXValidFnc[40]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultasituacaodocfiscal());
