/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:0:9.34
*/
gx.evt.autoSkip = false;
gx.define('hconsultaintegracaocbl', false, function () {
   this.ServerClass =  "hconsultaintegracaocbl" ;
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
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV15PIntegracaoCblId=gx.fn.getIntegerValue("vPINTEGRACAOCBLID",'.') ;
   };
   this.e16ag2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11ag2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12ag2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13ag2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14ag2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e18ag2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e20ag1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,7,8,11,12,13,14,17,19,21,23,25];
   this.GXLastCtrlId =25;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",6,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaintegracaocbl",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1487,7,"INTEGRACAOCBLID","","","IntegracaoCblId","int",0,"px",4,4,"right",null,[],1487,"IntegracaoCblId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1887,8,"INTEGRACAOCBLDESCRICAO","","","IntegracaoCblDescricao","svchar",0,"px",40,40,"left",null,[],1887,"IntegracaoCblDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[7]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:6,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOCBLID",gxz:"Z1487IntegracaoCblId",gxold:"O1487IntegracaoCblId",gxvar:"A1487IntegracaoCblId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1487IntegracaoCblId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1487IntegracaoCblId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("INTEGRACAOCBLID",row || gx.fn.currentGridRowImpl(6),gx.O.A1487IntegracaoCblId,0)},c2v:function(){gx.O.A1487IntegracaoCblId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("INTEGRACAOCBLID",row || gx.fn.currentGridRowImpl(6),'.')},nac:gx.falseFn};
   GXValidFnc[8]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:6,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOCBLDESCRICAO",gxz:"Z1887IntegracaoCblDescricao",gxold:"O1887IntegracaoCblDescricao",gxvar:"A1887IntegracaoCblDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1887IntegracaoCblDescricao=Value},v2z:function(Value){gx.O.Z1887IntegracaoCblDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("INTEGRACAOCBLDESCRICAO",row || gx.fn.currentGridRowImpl(6),gx.O.A1887IntegracaoCblDescricao,0)},c2v:function(){gx.O.A1887IntegracaoCblDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("INTEGRACAOCBLDESCRICAO",row || gx.fn.currentGridRowImpl(6))},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[12]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV18PaginaAux",gxold:"OV18PaginaAux",gxvar:"AV18PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV18PaginaAux,0)},c2v:function(){gx.O.AV18PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV17Pagina",gxold:"OV17Pagina",gxvar:"AV17Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV17Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV17Pagina)},c2v:function(){gx.O.AV17Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TABLENAV",grid:0};
   GXValidFnc[17]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[19]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[21]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[23]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[25]={fld:"BTNFECHAR",grid:0};
   this.Z1487IntegracaoCblId = 0 ;
   this.O1487IntegracaoCblId = 0 ;
   this.Z1887IntegracaoCblDescricao = "" ;
   this.O1887IntegracaoCblDescricao = "" ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV18PaginaAux = 0 ;
   this.ZV18PaginaAux = 0 ;
   this.OV18PaginaAux = 0 ;
   this.AV17Pagina = 0 ;
   this.ZV17Pagina = 0 ;
   this.OV17Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV18PaginaAux = 0 ;
   this.AV17Pagina = 0 ;
   this.AV15PIntegracaoCblId = 0 ;
   this.A1486IntegracaoCblEmpresaId = "" ;
   this.A1487IntegracaoCblId = 0 ;
   this.A1887IntegracaoCblDescricao = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e16ag2_client": ["ENTER", true] ,"e11ag2_client": ["'GXM_FIRST'", true] ,"e12ag2_client": ["'GXM_PREVIOUS'", true] ,"e13ag2_client": ["'GXM_NEXT'", true] ,"e14ag2_client": ["'GXM_LAST'", true] ,"e18ag2_client": ["'ATUALIZAPAGINA'", true] ,"e20ag1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'INTEGRACAOCBLID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("INTEGRACAOCBLID","Title")',ctrl:'INTEGRACAOCBLID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'INTEGRACAOCBLDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("INTEGRACAOCBLDESCRICAO","Title")',ctrl:'INTEGRACAOCBLDESCRICAO',prop:'Title'},{av:'AV18PaginaAux',fld:'vPAGINAAUX'},{av:'AV17Pagina',fld:'vPAGINA'},{av:'AV16NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A1487IntegracaoCblId',fld:'INTEGRACAOCBLID'}],[{av:'AV15PIntegracaoCblId',fld:'vPINTEGRACAOCBLID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17Pagina',fld:'vPAGINA'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17Pagina',fld:'vPAGINA'},{av:'AV18PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV18PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV15PIntegracaoCblId", "vPINTEGRACAOCBLID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[11]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaintegracaocbl());
