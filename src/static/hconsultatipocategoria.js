/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:37:16.6
*/
gx.evt.autoSkip = false;
gx.define('hconsultatipocategoria', false, function () {
   this.ServerClass =  "hconsultatipocategoria" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV15TipoCategoriaEmpresaId=gx.fn.getControlValue("vTIPOCATEGORIAEMPRESAID") ;
      this.AV16OutTipoCategoriaId=gx.fn.getIntegerValue("vOUTTIPOCATEGORIAID",'.') ;
   };
   this.e16gk2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11gk2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12gk2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13gk2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14gk2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e18gk2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e20gk1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,9,10,13,16,18,20,22,24,25,26,27];
   this.GXLastCtrlId =27;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",8,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultatipocategoria",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2603,9,"TIPOCATEGORIAID","","","TipoCategoriaId","int",0,"px",2,2,"right",null,[],2603,"TipoCategoriaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2623,10,"TIPOCATEGORIADESCRICAO","","","TipoCategoriaDescricao","svchar",0,"px",20,20,"left",null,[],2623,"TipoCategoriaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[9]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:8,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCATEGORIAID",gxz:"Z2603TipoCategoriaId",gxold:"O2603TipoCategoriaId",gxvar:"A2603TipoCategoriaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2603TipoCategoriaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2603TipoCategoriaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOCATEGORIAID",row || gx.fn.currentGridRowImpl(8),gx.O.A2603TipoCategoriaId,0)},c2v:function(){gx.O.A2603TipoCategoriaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOCATEGORIAID",row || gx.fn.currentGridRowImpl(8),'.')},nac:gx.falseFn};
   GXValidFnc[10]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:8,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCATEGORIADESCRICAO",gxz:"Z2623TipoCategoriaDescricao",gxold:"O2623TipoCategoriaDescricao",gxvar:"A2623TipoCategoriaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2623TipoCategoriaDescricao=Value},v2z:function(Value){gx.O.Z2623TipoCategoriaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOCATEGORIADESCRICAO",row || gx.fn.currentGridRowImpl(8),gx.O.A2623TipoCategoriaDescricao,0)},c2v:function(){gx.O.A2623TipoCategoriaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOCATEGORIADESCRICAO",row || gx.fn.currentGridRowImpl(8))},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TABLENAV",grid:0};
   GXValidFnc[16]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[18]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[20]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[22]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[24]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV18Pagina",gxold:"OV18Pagina",gxvar:"AV18Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV18Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV18Pagina)},c2v:function(){gx.O.AV18Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV19PaginaAux",gxold:"OV19PaginaAux",gxvar:"AV19PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV19PaginaAux,0)},c2v:function(){gx.O.AV19PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   this.Z2603TipoCategoriaId = 0 ;
   this.O2603TipoCategoriaId = 0 ;
   this.Z2623TipoCategoriaDescricao = "" ;
   this.O2623TipoCategoriaDescricao = "" ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV18Pagina = 0 ;
   this.ZV18Pagina = 0 ;
   this.OV18Pagina = 0 ;
   this.AV19PaginaAux = 0 ;
   this.ZV19PaginaAux = 0 ;
   this.OV19PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV18Pagina = 0 ;
   this.AV19PaginaAux = 0 ;
   this.AV16OutTipoCategoriaId = 0 ;
   this.A2602TipoCategoriaEmpresaId = "" ;
   this.A2603TipoCategoriaId = 0 ;
   this.A2623TipoCategoriaDescricao = "" ;
   this.AV15TipoCategoriaEmpresaId = "" ;
   this.Events = {"e16gk2_client": ["ENTER", true] ,"e11gk2_client": ["'GXM_FIRST'", true] ,"e12gk2_client": ["'GXM_PREVIOUS'", true] ,"e13gk2_client": ["'GXM_NEXT'", true] ,"e14gk2_client": ["'GXM_LAST'", true] ,"e18gk2_client": ["'ATUALIZAPAGINA'", true] ,"e20gk1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TipoCategoriaEmpresaId',fld:'vTIPOCATEGORIAEMPRESAID'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'TIPOCATEGORIAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOCATEGORIAID","Title")',ctrl:'TIPOCATEGORIAID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'TIPOCATEGORIADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOCATEGORIADESCRICAO","Title")',ctrl:'TIPOCATEGORIADESCRICAO',prop:'Title'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'},{av:'AV18Pagina',fld:'vPAGINA'},{av:'AV17NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A2603TipoCategoriaId',fld:'TIPOCATEGORIAID'}],[{av:'AV16OutTipoCategoriaId',fld:'vOUTTIPOCATEGORIAID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV15TipoCategoriaEmpresaId',fld:'vTIPOCATEGORIAEMPRESAID'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV15TipoCategoriaEmpresaId',fld:'vTIPOCATEGORIAEMPRESAID'},{av:'AV18Pagina',fld:'vPAGINA'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV15TipoCategoriaEmpresaId',fld:'vTIPOCATEGORIAEMPRESAID'},{av:'AV18Pagina',fld:'vPAGINA'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV15TipoCategoriaEmpresaId',fld:'vTIPOCATEGORIAEMPRESAID'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV15TipoCategoriaEmpresaId',fld:'vTIPOCATEGORIAEMPRESAID'}],[]];
   this.setVCMap("AV15TipoCategoriaEmpresaId", "vTIPOCATEGORIAEMPRESAID", 0, "char");
   this.setVCMap("AV16OutTipoCategoriaId", "vOUTTIPOCATEGORIAID", 0, "int");
   this.setVCMap("AV15TipoCategoriaEmpresaId", "vTIPOCATEGORIAEMPRESAID", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[25]);
   GridContainer.addRefreshingVar({rfrVar:"AV15TipoCategoriaEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultatipocategoria());
