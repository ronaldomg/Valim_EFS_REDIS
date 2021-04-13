/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:8:55.50
*/
gx.evt.autoSkip = false;
gx.define('hconsultagrupocliente', false, function () {
   this.ServerClass =  "hconsultagrupocliente" ;
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
      this.AV16PGrupoclienteId=gx.fn.getIntegerValue("vPGRUPOCLIENTEID",'.') ;
   };
   this.e172bk2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e112bk2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e122bk2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e132bk2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e142bk2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e152bk2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e192bk2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e212bk1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,19,20,26,29,31,33,35,37,38,39,40];
   this.GXLastCtrlId =40;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",18,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultagrupocliente",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(11062,19,"GRUPOCLIENTEID","","","GrupoClienteId","int",0,"px",3,3,"right",null,[],11062,"GrupoClienteId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(11078,20,"GRUPOCLIENTEDESCRICAO","","","GrupoClienteDescricao","svchar",0,"px",40,40,"left",null,[],11078,"GrupoClienteDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGRUPOCLIENTEDESCRICAO",gxz:"ZV7GrupoClienteDescricao",gxold:"OV7GrupoClienteDescricao",gxvar:"AV7GrupoClienteDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7GrupoClienteDescricao=Value},v2z:function(Value){gx.O.ZV7GrupoClienteDescricao=Value},v2c:function(){gx.fn.setControlValue("vGRUPOCLIENTEDESCRICAO",gx.O.AV7GrupoClienteDescricao,0)},c2v:function(){gx.O.AV7GrupoClienteDescricao=this.val()},val:function(){return gx.fn.getControlValue("vGRUPOCLIENTEDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[19]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOCLIENTEID",gxz:"Z11062GrupoClienteId",gxold:"O11062GrupoClienteId",gxvar:"A11062GrupoClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11062GrupoClienteId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11062GrupoClienteId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("GRUPOCLIENTEID",row || gx.fn.currentGridRowImpl(18),gx.O.A11062GrupoClienteId,0)},c2v:function(){gx.O.A11062GrupoClienteId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("GRUPOCLIENTEID",row || gx.fn.currentGridRowImpl(18),'.')},nac:gx.falseFn};
   GXValidFnc[20]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOCLIENTEDESCRICAO",gxz:"Z11078GrupoClienteDescricao",gxold:"O11078GrupoClienteDescricao",gxvar:"A11078GrupoClienteDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11078GrupoClienteDescricao=Value},v2z:function(Value){gx.O.Z11078GrupoClienteDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPOCLIENTEDESCRICAO",row || gx.fn.currentGridRowImpl(18),gx.O.A11078GrupoClienteDescricao,0)},c2v:function(){gx.O.A11078GrupoClienteDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPOCLIENTEDESCRICAO",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TABLENAV",grid:0};
   GXValidFnc[29]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[37]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV14Pagina",gxold:"OV14Pagina",gxvar:"AV14Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV14Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV14Pagina)},c2v:function(){gx.O.AV14Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV15PaginaAux",gxold:"OV15PaginaAux",gxvar:"AV15PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV15PaginaAux,0)},c2v:function(){gx.O.AV15PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV13Orderedby",gxold:"OV13Orderedby",gxvar:"AV13Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV13Orderedby,0)},c2v:function(){gx.O.AV13Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV7GrupoClienteDescricao = "" ;
   this.ZV7GrupoClienteDescricao = "" ;
   this.OV7GrupoClienteDescricao = "" ;
   this.Z11062GrupoClienteId = 0 ;
   this.O11062GrupoClienteId = 0 ;
   this.Z11078GrupoClienteDescricao = "" ;
   this.O11078GrupoClienteDescricao = "" ;
   this.AV14Pagina = 0 ;
   this.ZV14Pagina = 0 ;
   this.OV14Pagina = 0 ;
   this.AV15PaginaAux = 0 ;
   this.ZV15PaginaAux = 0 ;
   this.OV15PaginaAux = 0 ;
   this.AV13Orderedby = 0 ;
   this.ZV13Orderedby = 0 ;
   this.OV13Orderedby = 0 ;
   this.AV7GrupoClienteDescricao = "" ;
   this.AV14Pagina = 0 ;
   this.AV15PaginaAux = 0 ;
   this.AV13Orderedby = 0 ;
   this.AV16PGrupoclienteId = 0 ;
   this.A11061GrupoClienteEmpresaId = "" ;
   this.A11062GrupoClienteId = 0 ;
   this.A11078GrupoClienteDescricao = "" ;
   this.AV6EmpresaPadrao = "" ;
   this.Events = {"e172bk2_client": ["ENTER", true] ,"e112bk2_client": ["'GXM_FIRST'", true] ,"e122bk2_client": ["'GXM_PREVIOUS'", true] ,"e132bk2_client": ["'GXM_NEXT'", true] ,"e142bk2_client": ["'GXM_LAST'", true] ,"e152bk2_client": ["'PROCURAR'", true] ,"e192bk2_client": ["'ATUALIZAPAGINA'", true] ,"e212bk1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7GrupoClienteDescricao',fld:'vGRUPOCLIENTEDESCRICAO'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV13Orderedby',fld:'vORDEREDBY'}],[{ctrl:'GRUPOCLIENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GRUPOCLIENTEID","Title")',ctrl:'GRUPOCLIENTEID',prop:'Title'},{av:'AV8Imagem',fld:'vIMAGEM'},{ctrl:'GRUPOCLIENTEDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GRUPOCLIENTEDESCRICAO","Title")',ctrl:'GRUPOCLIENTEDESCRICAO',prop:'Title'},{av:'AV15PaginaAux',fld:'vPAGINAAUX'},{av:'AV14Pagina',fld:'vPAGINA'},{av:'AV12NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A11062GrupoClienteId',fld:'GRUPOCLIENTEID'}],[{av:'AV16PGrupoclienteId',fld:'vPGRUPOCLIENTEID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7GrupoClienteDescricao',fld:'vGRUPOCLIENTEDESCRICAO'},{av:'AV13Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV14Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7GrupoClienteDescricao',fld:'vGRUPOCLIENTEDESCRICAO'},{av:'AV13Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV14Pagina',fld:'vPAGINA'}],[{av:'AV14Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7GrupoClienteDescricao',fld:'vGRUPOCLIENTEDESCRICAO'},{av:'AV13Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV14Pagina',fld:'vPAGINA'},{av:'AV15PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV14Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7GrupoClienteDescricao',fld:'vGRUPOCLIENTEDESCRICAO'},{av:'AV13Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV15PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV14Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7GrupoClienteDescricao',fld:'vGRUPOCLIENTEDESCRICAO'},{av:'AV13Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV13Orderedby',fld:'vORDEREDBY'},{av:'AV14Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7GrupoClienteDescricao',fld:'vGRUPOCLIENTEDESCRICAO'},{av:'AV13Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV6EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV16PGrupoclienteId", "vPGRUPOCLIENTEID", 0, "int");
   this.setVCMap("AV6EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[40]);
   GridContainer.addRefreshingVar({rfrVar:"AV6EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultagrupocliente());
