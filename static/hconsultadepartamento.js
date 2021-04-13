/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:23:34.65
*/
gx.evt.autoSkip = false;
gx.define('hconsultadepartamento', false, function () {
   this.ServerClass =  "hconsultadepartamento" ;
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
      this.AV17OutDepartamentoCodigo=gx.fn.getControlValue("vOUTDEPARTAMENTOCODIGO") ;
   };
   this.Valid_Responsavelpatid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(23) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("RESPONSAVELPATID", gx.fn.currentGridRowImpl(23));
         this.AnyError  = 0;
         this.StandaloneModal( );
         this.StandaloneNotModal( );

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e17dk2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11dk2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12dk2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13dk2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14dk2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15dk2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19dk2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21dk1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,27,33,36,38,40,42,44,45,46,47,48];
   this.GXLastCtrlId =48;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultadepartamento",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2248,24,"DEPARTAMENTOCODIGO","","","DepartamentoCodigo","svchar",0,"px",15,15,"left",null,[],2248,"DepartamentoCodigo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2249,25,"DEPARTAMENTONOME","","","DepartamentoNome","svchar",0,"px",40,40,"left",null,[],2249,"DepartamentoNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2281,26,"RESPONSAVELPATID","Código","","ResponsavelPatId","int",0,"px",4,4,"right",null,[],2281,"ResponsavelPatId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2282,27,"RESPONSAVELPATNOME","Nome Responsável","","ResponsavelPatNome","svchar",0,"px",40,40,"left",null,[],2282,"ResponsavelPatNome",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDEPARTAMENTOCODIGO",gxz:"ZV15DepartamentoCodigo",gxold:"OV15DepartamentoCodigo",gxvar:"AV15DepartamentoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15DepartamentoCodigo=Value},v2z:function(Value){gx.O.ZV15DepartamentoCodigo=Value},v2c:function(){gx.fn.setControlValue("vDEPARTAMENTOCODIGO",gx.O.AV15DepartamentoCodigo,0)},c2v:function(){gx.O.AV15DepartamentoCodigo=this.val()},val:function(){return gx.fn.getControlValue("vDEPARTAMENTOCODIGO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDEPARTAMENTONOME",gxz:"ZV16DepartamentoNome",gxold:"OV16DepartamentoNome",gxvar:"AV16DepartamentoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16DepartamentoNome=Value},v2z:function(Value){gx.O.ZV16DepartamentoNome=Value},v2c:function(){gx.fn.setControlValue("vDEPARTAMENTONOME",gx.O.AV16DepartamentoNome,0)},c2v:function(){gx.O.AV16DepartamentoNome=this.val()},val:function(){return gx.fn.getControlValue("vDEPARTAMENTONOME")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEPARTAMENTOCODIGO",gxz:"Z2248DepartamentoCodigo",gxold:"O2248DepartamentoCodigo",gxvar:"A2248DepartamentoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2248DepartamentoCodigo=Value},v2z:function(Value){gx.O.Z2248DepartamentoCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("DEPARTAMENTOCODIGO",row || gx.fn.currentGridRowImpl(23),gx.O.A2248DepartamentoCodigo,0)},c2v:function(){gx.O.A2248DepartamentoCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("DEPARTAMENTOCODIGO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEPARTAMENTONOME",gxz:"Z2249DepartamentoNome",gxold:"O2249DepartamentoNome",gxvar:"A2249DepartamentoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2249DepartamentoNome=Value},v2z:function(Value){gx.O.Z2249DepartamentoNome=Value},v2c:function(row){gx.fn.setGridControlValue("DEPARTAMENTONOME",row || gx.fn.currentGridRowImpl(23),gx.O.A2249DepartamentoNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2249DepartamentoNome=this.val()},val:function(row){return gx.fn.getGridControlValue("DEPARTAMENTONOME",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:this.Valid_Responsavelpatid,isvalid:null,rgrid:[],fld:"RESPONSAVELPATID",gxz:"Z2281ResponsavelPatId",gxold:"O2281ResponsavelPatId",gxvar:"A2281ResponsavelPatId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2281ResponsavelPatId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2281ResponsavelPatId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("RESPONSAVELPATID",row || gx.fn.currentGridRowImpl(23),gx.O.A2281ResponsavelPatId,0)},c2v:function(){gx.O.A2281ResponsavelPatId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("RESPONSAVELPATID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"RESPONSAVELPATNOME",gxz:"Z2282ResponsavelPatNome",gxold:"O2282ResponsavelPatNome",gxvar:"A2282ResponsavelPatNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2282ResponsavelPatNome=Value},v2z:function(Value){gx.O.Z2282ResponsavelPatNome=Value},v2c:function(row){gx.fn.setGridControlValue("RESPONSAVELPATNOME",row || gx.fn.currentGridRowImpl(23),gx.O.A2282ResponsavelPatNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2282ResponsavelPatNome=this.val()},val:function(row){return gx.fn.getGridControlValue("RESPONSAVELPATNOME",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TABLENAV",grid:0};
   GXValidFnc[36]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[38]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[40]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[42]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[44]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV22PaginaAux",gxold:"OV22PaginaAux",gxvar:"AV22PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV22PaginaAux,0)},c2v:function(){gx.O.AV22PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV21Pagina",gxold:"OV21Pagina",gxvar:"AV21Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV21Pagina)},c2v:function(){gx.O.AV21Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"JS", format:2,grid:0};
   this.AV15DepartamentoCodigo = "" ;
   this.ZV15DepartamentoCodigo = "" ;
   this.OV15DepartamentoCodigo = "" ;
   this.AV16DepartamentoNome = "" ;
   this.ZV16DepartamentoNome = "" ;
   this.OV16DepartamentoNome = "" ;
   this.Z2248DepartamentoCodigo = "" ;
   this.O2248DepartamentoCodigo = "" ;
   this.Z2249DepartamentoNome = "" ;
   this.O2249DepartamentoNome = "" ;
   this.Z2281ResponsavelPatId = 0 ;
   this.O2281ResponsavelPatId = 0 ;
   this.Z2282ResponsavelPatNome = "" ;
   this.O2282ResponsavelPatNome = "" ;
   this.AV22PaginaAux = 0 ;
   this.ZV22PaginaAux = 0 ;
   this.OV22PaginaAux = 0 ;
   this.AV21Pagina = 0 ;
   this.ZV21Pagina = 0 ;
   this.OV21Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV15DepartamentoCodigo = "" ;
   this.AV16DepartamentoNome = "" ;
   this.AV22PaginaAux = 0 ;
   this.AV21Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV17OutDepartamentoCodigo = "" ;
   this.A2247DepartamentoEmpresaId = "" ;
   this.A2280ResponsavelPatEmpresaId = "" ;
   this.A2248DepartamentoCodigo = "" ;
   this.A2249DepartamentoNome = "" ;
   this.A2281ResponsavelPatId = 0 ;
   this.A2282ResponsavelPatNome = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17dk2_client": ["ENTER", true] ,"e11dk2_client": ["'GXM_FIRST'", true] ,"e12dk2_client": ["'GXM_PREVIOUS'", true] ,"e13dk2_client": ["'GXM_NEXT'", true] ,"e14dk2_client": ["'GXM_LAST'", true] ,"e15dk2_client": ["'PROCURAR'", true] ,"e19dk2_client": ["'ATUALIZAPAGINA'", true] ,"e21dk1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV16DepartamentoNome',fld:'vDEPARTAMENTONOME'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'DEPARTAMENTOCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DEPARTAMENTOCODIGO","Title")',ctrl:'DEPARTAMENTOCODIGO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'DEPARTAMENTONOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DEPARTAMENTONOME","Title")',ctrl:'DEPARTAMENTONOME',prop:'Title'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'},{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV20NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A2248DepartamentoCodigo',fld:'DEPARTAMENTOCODIGO'}],[{av:'AV17OutDepartamentoCodigo',fld:'vOUTDEPARTAMENTOCODIGO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV16DepartamentoNome',fld:'vDEPARTAMENTONOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV16DepartamentoNome',fld:'vDEPARTAMENTONOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21Pagina',fld:'vPAGINA'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV16DepartamentoNome',fld:'vDEPARTAMENTONOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV16DepartamentoNome',fld:'vDEPARTAMENTONOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV16DepartamentoNome',fld:'vDEPARTAMENTONOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2249DepartamentoNome',fld:'DEPARTAMENTONOME'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV16DepartamentoNome',fld:'vDEPARTAMENTONOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV17OutDepartamentoCodigo", "vOUTDEPARTAMENTOCODIGO", 0, "svchar");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[47]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultadepartamento());
