/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:54:16.1
*/
gx.evt.autoSkip = false;
gx.define('hconsultamodelocontrato', false, function () {
   this.ServerClass =  "hconsultamodelocontrato" ;
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
      this.AV15ModeloContratoId=gx.fn.getIntegerValue("vMODELOCONTRATOID",'.') ;
   };
   this.e17ua2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11ua2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12ua2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13ua2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14ua2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15ua2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19ua2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21ua1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,17,19,25,26,32,35,37,39,41,43,44,45,46];
   this.GXLastCtrlId =46;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",24,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultamodelocontrato",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(5337,25,"MODELOCONTRATOID","","","ModeloContratoId","int",0,"px",3,3,"right",null,[],5337,"ModeloContratoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5333,26,"MODELOCONTRATODESCRICAO","","","ModeloContratoDescricao","svchar",0,"px",40,40,"left",null,[],5333,"ModeloContratoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCMODELOCONTRATOID",gxz:"ZV16cModeloContratoId",gxold:"OV16cModeloContratoId",gxvar:"AV16cModeloContratoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16cModeloContratoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16cModeloContratoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCMODELOCONTRATOID",gx.O.AV16cModeloContratoId,0)},c2v:function(){gx.O.AV16cModeloContratoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCMODELOCONTRATOID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCMODELOCONTRATODESCRICAO",gxz:"ZV17cModeloContratoDescricao",gxold:"OV17cModeloContratoDescricao",gxvar:"AV17cModeloContratoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17cModeloContratoDescricao=Value},v2z:function(Value){gx.O.ZV17cModeloContratoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCMODELOCONTRATODESCRICAO",gx.O.AV17cModeloContratoDescricao,0)},c2v:function(){gx.O.AV17cModeloContratoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCMODELOCONTRATODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:24,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELOCONTRATOID",gxz:"Z5337ModeloContratoId",gxold:"O5337ModeloContratoId",gxvar:"A5337ModeloContratoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5337ModeloContratoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5337ModeloContratoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MODELOCONTRATOID",row || gx.fn.currentGridRowImpl(24),gx.O.A5337ModeloContratoId,0)},c2v:function(){gx.O.A5337ModeloContratoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MODELOCONTRATOID",row || gx.fn.currentGridRowImpl(24),'.')},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:24,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELOCONTRATODESCRICAO",gxz:"Z5333ModeloContratoDescricao",gxold:"O5333ModeloContratoDescricao",gxvar:"A5333ModeloContratoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5333ModeloContratoDescricao=Value},v2z:function(Value){gx.O.Z5333ModeloContratoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("MODELOCONTRATODESCRICAO",row || gx.fn.currentGridRowImpl(24),gx.O.A5333ModeloContratoDescricao,0)},c2v:function(){gx.O.A5333ModeloContratoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELOCONTRATODESCRICAO",row || gx.fn.currentGridRowImpl(24))},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TABLENAV",grid:0};
   GXValidFnc[35]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[37]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[39]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[41]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[43]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV20PaginaAux",gxold:"OV20PaginaAux",gxvar:"AV20PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV20PaginaAux,0)},c2v:function(){gx.O.AV20PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV19Pagina",gxold:"OV19Pagina",gxvar:"AV19Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV19Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV19Pagina)},c2v:function(){gx.O.AV19Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16cModeloContratoId = 0 ;
   this.ZV16cModeloContratoId = 0 ;
   this.OV16cModeloContratoId = 0 ;
   this.AV17cModeloContratoDescricao = "" ;
   this.ZV17cModeloContratoDescricao = "" ;
   this.OV17cModeloContratoDescricao = "" ;
   this.Z5337ModeloContratoId = 0 ;
   this.O5337ModeloContratoId = 0 ;
   this.Z5333ModeloContratoDescricao = "" ;
   this.O5333ModeloContratoDescricao = "" ;
   this.AV20PaginaAux = 0 ;
   this.ZV20PaginaAux = 0 ;
   this.OV20PaginaAux = 0 ;
   this.AV19Pagina = 0 ;
   this.ZV19Pagina = 0 ;
   this.OV19Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16cModeloContratoId = 0 ;
   this.AV17cModeloContratoDescricao = "" ;
   this.AV20PaginaAux = 0 ;
   this.AV19Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV15ModeloContratoId = 0 ;
   this.A5336ModeloContratoEmpresaId = "" ;
   this.A5337ModeloContratoId = 0 ;
   this.A5333ModeloContratoDescricao = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17ua2_client": ["ENTER", true] ,"e11ua2_client": ["'GXM_FIRST'", true] ,"e12ua2_client": ["'GXM_PREVIOUS'", true] ,"e13ua2_client": ["'GXM_NEXT'", true] ,"e14ua2_client": ["'GXM_LAST'", true] ,"e15ua2_client": ["'PROCURAR'", true] ,"e19ua2_client": ["'ATUALIZAPAGINA'", true] ,"e21ua1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16cModeloContratoId',fld:'vCMODELOCONTRATOID'},{av:'AV17cModeloContratoDescricao',fld:'vCMODELOCONTRATODESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'MODELOCONTRATOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MODELOCONTRATOID","Title")',ctrl:'MODELOCONTRATOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'MODELOCONTRATODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MODELOCONTRATODESCRICAO","Title")',ctrl:'MODELOCONTRATODESCRICAO',prop:'Title'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'},{av:'AV19Pagina',fld:'vPAGINA'},{av:'AV18NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A5337ModeloContratoId',fld:'MODELOCONTRATOID'}],[{av:'AV15ModeloContratoId',fld:'vMODELOCONTRATOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16cModeloContratoId',fld:'vCMODELOCONTRATOID'},{av:'AV17cModeloContratoDescricao',fld:'vCMODELOCONTRATODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16cModeloContratoId',fld:'vCMODELOCONTRATOID'},{av:'AV17cModeloContratoDescricao',fld:'vCMODELOCONTRATODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19Pagina',fld:'vPAGINA'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16cModeloContratoId',fld:'vCMODELOCONTRATOID'},{av:'AV17cModeloContratoDescricao',fld:'vCMODELOCONTRATODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19Pagina',fld:'vPAGINA'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16cModeloContratoId',fld:'vCMODELOCONTRATOID'},{av:'AV17cModeloContratoDescricao',fld:'vCMODELOCONTRATODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16cModeloContratoId',fld:'vCMODELOCONTRATOID'},{av:'AV17cModeloContratoDescricao',fld:'vCMODELOCONTRATODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16cModeloContratoId',fld:'vCMODELOCONTRATOID'},{av:'AV17cModeloContratoDescricao',fld:'vCMODELOCONTRATODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV15ModeloContratoId", "vMODELOCONTRATOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridContainer.addRefreshingVar(this.GXValidFnc[46]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultamodelocontrato());
