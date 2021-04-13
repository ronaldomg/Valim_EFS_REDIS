/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:0:43.15
*/
gx.evt.autoSkip = false;
gx.define('hconsultatipolote', false, function () {
   this.ServerClass =  "hconsultatipolote" ;
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
      this.AV20TipoLoteEmpresaId=gx.fn.getControlValue("vTIPOLOTEEMPRESAID") ;
      this.AV18OutTipoLoteId=gx.fn.getIntegerValue("vOUTTIPOLOTEID",'.') ;
   };
   this.e161552_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e111552_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e121552_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e131552_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e141552_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e181552_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e201551_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,6,7,13,16,18,20,22,24,25,26,27];
   this.GXLastCtrlId =27;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",5,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultatipolote",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8515,6,"TIPOLOTEID","","","TipoLoteId","int",0,"px",2,2,"right",null,[],8515,"TipoLoteId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(8512,7,"TIPOLOTEDESCRICAO","","","TipoLoteDescricao","svchar",0,"px",80,80,"left",null,[],8512,"TipoLoteDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[6]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLOTEID",gxz:"Z8515TipoLoteId",gxold:"O8515TipoLoteId",gxvar:"A8515TipoLoteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8515TipoLoteId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8515TipoLoteId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOLOTEID",row || gx.fn.currentGridRowImpl(5),gx.O.A8515TipoLoteId,0)},c2v:function(){gx.O.A8515TipoLoteId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOLOTEID",row || gx.fn.currentGridRowImpl(5),'.')},nac:gx.falseFn};
   GXValidFnc[7]={lvl:2,type:"svchar",len:80,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLOTEDESCRICAO",gxz:"Z8512TipoLoteDescricao",gxold:"O8512TipoLoteDescricao",gxvar:"A8512TipoLoteDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8512TipoLoteDescricao=Value},v2z:function(Value){gx.O.Z8512TipoLoteDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOLOTEDESCRICAO",row || gx.fn.currentGridRowImpl(5),gx.O.A8512TipoLoteDescricao,0)},c2v:function(){gx.O.A8512TipoLoteDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOLOTEDESCRICAO",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TABLENAV",grid:0};
   GXValidFnc[16]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[18]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[20]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[22]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[24]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV16Pagina",gxold:"OV16Pagina",gxvar:"AV16Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV16Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV16Pagina)},c2v:function(){gx.O.AV16Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV17PaginaAux",gxold:"OV17PaginaAux",gxvar:"AV17PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV17PaginaAux,0)},c2v:function(){gx.O.AV17PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.Z8515TipoLoteId = 0 ;
   this.O8515TipoLoteId = 0 ;
   this.Z8512TipoLoteDescricao = "" ;
   this.O8512TipoLoteDescricao = "" ;
   this.AV16Pagina = 0 ;
   this.ZV16Pagina = 0 ;
   this.OV16Pagina = 0 ;
   this.AV17PaginaAux = 0 ;
   this.ZV17PaginaAux = 0 ;
   this.OV17PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16Pagina = 0 ;
   this.AV17PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV18OutTipoLoteId = 0 ;
   this.A8510TipoLoteEmpresaId = "" ;
   this.A8515TipoLoteId = 0 ;
   this.A8512TipoLoteDescricao = "" ;
   this.AV20TipoLoteEmpresaId = "" ;
   this.Events = {"e161552_client": ["ENTER", true] ,"e111552_client": ["'GXM_FIRST'", true] ,"e121552_client": ["'GXM_PREVIOUS'", true] ,"e131552_client": ["'GXM_NEXT'", true] ,"e141552_client": ["'GXM_LAST'", true] ,"e181552_client": ["'ATUALIZAPAGINA'", true] ,"e201551_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20TipoLoteEmpresaId',fld:'vTIPOLOTEEMPRESAID'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'TIPOLOTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOLOTEID","Title")',ctrl:'TIPOLOTEID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'TIPOLOTEDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOLOTEDESCRICAO","Title")',ctrl:'TIPOLOTEDESCRICAO',prop:'Title'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'AV15NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A8515TipoLoteId',fld:'TIPOLOTEID'}],[{av:'AV18OutTipoLoteId',fld:'vOUTTIPOLOTEID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20TipoLoteEmpresaId',fld:'vTIPOLOTEEMPRESAID'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20TipoLoteEmpresaId',fld:'vTIPOLOTEEMPRESAID'},{av:'AV16Pagina',fld:'vPAGINA'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20TipoLoteEmpresaId',fld:'vTIPOLOTEEMPRESAID'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20TipoLoteEmpresaId',fld:'vTIPOLOTEEMPRESAID'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20TipoLoteEmpresaId',fld:'vTIPOLOTEEMPRESAID'}],[]];
   this.setVCMap("AV20TipoLoteEmpresaId", "vTIPOLOTEEMPRESAID", 0, "char");
   this.setVCMap("AV18OutTipoLoteId", "vOUTTIPOLOTEID", 0, "int");
   this.setVCMap("AV20TipoLoteEmpresaId", "vTIPOLOTEEMPRESAID", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[27]);
   GridContainer.addRefreshingVar({rfrVar:"AV20TipoLoteEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultatipolote());
