/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:9:20.26
*/
gx.evt.autoSkip = false;
gx.define('hconsultatabelavencimento', false, function () {
   this.ServerClass =  "hconsultatabelavencimento" ;
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
      this.AV15PTabelaVencimentoId=gx.fn.getIntegerValue("vPTABELAVENCIMENTOID",'.') ;
   };
   this.e172bm2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e112bm2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e122bm2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e132bm2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e142bm2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e152bm2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e192bm2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e212bm1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,19,20,26,29,31,33,35,37,38,39,40];
   this.GXLastCtrlId =40;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",18,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultatabelavencimento",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(11072,19,"TABELAVENCIMENTOID","","","TabelaVencimentoId","int",0,"px",3,3,"right",null,[],11072,"TabelaVencimentoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(11097,20,"TABELAVENCIMENTODESCRICAO","","","TabelaVencimentoDescricao","svchar",0,"px",60,60,"left",null,[],11097,"TabelaVencimentoDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTABELAVENCIMENTODESCRICAO",gxz:"ZV18TabelaVencimentoDescricao",gxold:"OV18TabelaVencimentoDescricao",gxvar:"AV18TabelaVencimentoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18TabelaVencimentoDescricao=Value},v2z:function(Value){gx.O.ZV18TabelaVencimentoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTABELAVENCIMENTODESCRICAO",gx.O.AV18TabelaVencimentoDescricao,0)},c2v:function(){gx.O.AV18TabelaVencimentoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTABELAVENCIMENTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[19]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TABELAVENCIMENTOID",gxz:"Z11072TabelaVencimentoId",gxold:"O11072TabelaVencimentoId",gxvar:"A11072TabelaVencimentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11072TabelaVencimentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11072TabelaVencimentoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TABELAVENCIMENTOID",row || gx.fn.currentGridRowImpl(18),gx.O.A11072TabelaVencimentoId,0)},c2v:function(){gx.O.A11072TabelaVencimentoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TABELAVENCIMENTOID",row || gx.fn.currentGridRowImpl(18),'.')},nac:gx.falseFn};
   GXValidFnc[20]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TABELAVENCIMENTODESCRICAO",gxz:"Z11097TabelaVencimentoDescricao",gxold:"O11097TabelaVencimentoDescricao",gxvar:"A11097TabelaVencimentoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11097TabelaVencimentoDescricao=Value},v2z:function(Value){gx.O.Z11097TabelaVencimentoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TABELAVENCIMENTODESCRICAO",row || gx.fn.currentGridRowImpl(18),gx.O.A11097TabelaVencimentoDescricao,0)},c2v:function(){gx.O.A11097TabelaVencimentoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TABELAVENCIMENTODESCRICAO",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TABLENAV",grid:0};
   GXValidFnc[29]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[37]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV13Pagina",gxold:"OV13Pagina",gxvar:"AV13Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV13Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV13Pagina)},c2v:function(){gx.O.AV13Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV14PaginaAux",gxold:"OV14PaginaAux",gxvar:"AV14PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV14PaginaAux,0)},c2v:function(){gx.O.AV14PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV12Orderedby",gxold:"OV12Orderedby",gxvar:"AV12Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV12Orderedby,0)},c2v:function(){gx.O.AV12Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV18TabelaVencimentoDescricao = "" ;
   this.ZV18TabelaVencimentoDescricao = "" ;
   this.OV18TabelaVencimentoDescricao = "" ;
   this.Z11072TabelaVencimentoId = 0 ;
   this.O11072TabelaVencimentoId = 0 ;
   this.Z11097TabelaVencimentoDescricao = "" ;
   this.O11097TabelaVencimentoDescricao = "" ;
   this.AV13Pagina = 0 ;
   this.ZV13Pagina = 0 ;
   this.OV13Pagina = 0 ;
   this.AV14PaginaAux = 0 ;
   this.ZV14PaginaAux = 0 ;
   this.OV14PaginaAux = 0 ;
   this.AV12Orderedby = 0 ;
   this.ZV12Orderedby = 0 ;
   this.OV12Orderedby = 0 ;
   this.AV18TabelaVencimentoDescricao = "" ;
   this.AV13Pagina = 0 ;
   this.AV14PaginaAux = 0 ;
   this.AV12Orderedby = 0 ;
   this.AV15PTabelaVencimentoId = 0 ;
   this.A11071TabelaVencimentoEmpresaId = "" ;
   this.A11072TabelaVencimentoId = 0 ;
   this.A11097TabelaVencimentoDescricao = "" ;
   this.AV6EmpresaPadrao = "" ;
   this.Events = {"e172bm2_client": ["ENTER", true] ,"e112bm2_client": ["'GXM_FIRST'", true] ,"e122bm2_client": ["'GXM_PREVIOUS'", true] ,"e132bm2_client": ["'GXM_NEXT'", true] ,"e142bm2_client": ["'GXM_LAST'", true] ,"e152bm2_client": ["'PROCURAR'", true] ,"e192bm2_client": ["'ATUALIZAPAGINA'", true] ,"e212bm1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18TabelaVencimentoDescricao',fld:'vTABELAVENCIMENTODESCRICAO'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV12Orderedby',fld:'vORDEREDBY'}],[{ctrl:'TABELAVENCIMENTOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TABELAVENCIMENTOID","Title")',ctrl:'TABELAVENCIMENTOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'TABELAVENCIMENTODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TABELAVENCIMENTODESCRICAO","Title")',ctrl:'TABELAVENCIMENTODESCRICAO',prop:'Title'},{av:'AV14PaginaAux',fld:'vPAGINAAUX'},{av:'AV13Pagina',fld:'vPAGINA'},{av:'AV11NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A11072TabelaVencimentoId',fld:'TABELAVENCIMENTOID'}],[{av:'AV15PTabelaVencimentoId',fld:'vPTABELAVENCIMENTOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18TabelaVencimentoDescricao',fld:'vTABELAVENCIMENTODESCRICAO'},{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18TabelaVencimentoDescricao',fld:'vTABELAVENCIMENTODESCRICAO'},{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV13Pagina',fld:'vPAGINA'}],[{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18TabelaVencimentoDescricao',fld:'vTABELAVENCIMENTODESCRICAO'},{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV13Pagina',fld:'vPAGINA'},{av:'AV14PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18TabelaVencimentoDescricao',fld:'vTABELAVENCIMENTODESCRICAO'},{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV14PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18TabelaVencimentoDescricao',fld:'vTABELAVENCIMENTODESCRICAO'},{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18TabelaVencimentoDescricao',fld:'vTABELAVENCIMENTODESCRICAO'},{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV6EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV15PTabelaVencimentoId", "vPTABELAVENCIMENTOID", 0, "int");
   this.setVCMap("AV6EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[40]);
   GridContainer.addRefreshingVar({rfrVar:"AV6EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultatabelavencimento());
