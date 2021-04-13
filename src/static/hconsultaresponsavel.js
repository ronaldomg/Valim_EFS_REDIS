/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:23:36.1
*/
gx.evt.autoSkip = false;
gx.define('hconsultaresponsavel', false, function () {
   this.ServerClass =  "hconsultaresponsavel" ;
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
      this.AV17OutResponsavelPatId=gx.fn.getIntegerValue("vOUTRESPONSAVELPATID",'.') ;
   };
   this.e17dl2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11dl2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12dl2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13dl2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14dl2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15dl2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19dl2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21dl1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,32,35,37,39,41,43,44,45,46];
   this.GXLastCtrlId =46;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaresponsavel",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2281,24,"RESPONSAVELPATID","","","ResponsavelPatId","int",0,"px",4,4,"right",null,[],2281,"ResponsavelPatId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2282,25,"RESPONSAVELPATNOME","","","ResponsavelPatNome","svchar",0,"px",40,40,"left",null,[],2282,"ResponsavelPatNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2283,26,"RESPONSAVELPATCARGO","","","ResponsavelPatCargo","svchar",0,"px",40,40,"left",null,[],2283,"ResponsavelPatCargo",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vRESPONSAVELPATID",gxz:"ZV15ResponsavelPatId",gxold:"OV15ResponsavelPatId",gxvar:"AV15ResponsavelPatId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15ResponsavelPatId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15ResponsavelPatId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vRESPONSAVELPATID",gx.O.AV15ResponsavelPatId,0)},c2v:function(){gx.O.AV15ResponsavelPatId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vRESPONSAVELPATID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vRESPONSAVELPATNOME",gxz:"ZV16ResponsavelPatNome",gxold:"OV16ResponsavelPatNome",gxvar:"AV16ResponsavelPatNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ResponsavelPatNome=Value},v2z:function(Value){gx.O.ZV16ResponsavelPatNome=Value},v2c:function(){gx.fn.setControlValue("vRESPONSAVELPATNOME",gx.O.AV16ResponsavelPatNome,0)},c2v:function(){gx.O.AV16ResponsavelPatNome=this.val()},val:function(){return gx.fn.getControlValue("vRESPONSAVELPATNOME")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"RESPONSAVELPATID",gxz:"Z2281ResponsavelPatId",gxold:"O2281ResponsavelPatId",gxvar:"A2281ResponsavelPatId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2281ResponsavelPatId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2281ResponsavelPatId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("RESPONSAVELPATID",row || gx.fn.currentGridRowImpl(23),gx.O.A2281ResponsavelPatId,0)},c2v:function(){gx.O.A2281ResponsavelPatId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("RESPONSAVELPATID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"RESPONSAVELPATNOME",gxz:"Z2282ResponsavelPatNome",gxold:"O2282ResponsavelPatNome",gxvar:"A2282ResponsavelPatNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2282ResponsavelPatNome=Value},v2z:function(Value){gx.O.Z2282ResponsavelPatNome=Value},v2c:function(row){gx.fn.setGridControlValue("RESPONSAVELPATNOME",row || gx.fn.currentGridRowImpl(23),gx.O.A2282ResponsavelPatNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2282ResponsavelPatNome=this.val()},val:function(row){return gx.fn.getGridControlValue("RESPONSAVELPATNOME",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"RESPONSAVELPATCARGO",gxz:"Z2283ResponsavelPatCargo",gxold:"O2283ResponsavelPatCargo",gxvar:"A2283ResponsavelPatCargo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2283ResponsavelPatCargo=Value},v2z:function(Value){gx.O.Z2283ResponsavelPatCargo=Value},v2c:function(row){gx.fn.setGridControlValue("RESPONSAVELPATCARGO",row || gx.fn.currentGridRowImpl(23),gx.O.A2283ResponsavelPatCargo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2283ResponsavelPatCargo=this.val()},val:function(row){return gx.fn.getGridControlValue("RESPONSAVELPATCARGO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TABLENAV",grid:0};
   GXValidFnc[35]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[37]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[39]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[41]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[43]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV19Pagina",gxold:"OV19Pagina",gxvar:"AV19Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV19Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV19Pagina)},c2v:function(){gx.O.AV19Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV20PaginaAux",gxold:"OV20PaginaAux",gxvar:"AV20PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV20PaginaAux,0)},c2v:function(){gx.O.AV20PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV15ResponsavelPatId = 0 ;
   this.ZV15ResponsavelPatId = 0 ;
   this.OV15ResponsavelPatId = 0 ;
   this.AV16ResponsavelPatNome = "" ;
   this.ZV16ResponsavelPatNome = "" ;
   this.OV16ResponsavelPatNome = "" ;
   this.Z2281ResponsavelPatId = 0 ;
   this.O2281ResponsavelPatId = 0 ;
   this.Z2282ResponsavelPatNome = "" ;
   this.O2282ResponsavelPatNome = "" ;
   this.Z2283ResponsavelPatCargo = "" ;
   this.O2283ResponsavelPatCargo = "" ;
   this.AV19Pagina = 0 ;
   this.ZV19Pagina = 0 ;
   this.OV19Pagina = 0 ;
   this.AV20PaginaAux = 0 ;
   this.ZV20PaginaAux = 0 ;
   this.OV20PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV15ResponsavelPatId = 0 ;
   this.AV16ResponsavelPatNome = "" ;
   this.AV19Pagina = 0 ;
   this.AV20PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV17OutResponsavelPatId = 0 ;
   this.A2280ResponsavelPatEmpresaId = "" ;
   this.A2281ResponsavelPatId = 0 ;
   this.A2282ResponsavelPatNome = "" ;
   this.A2283ResponsavelPatCargo = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17dl2_client": ["ENTER", true] ,"e11dl2_client": ["'GXM_FIRST'", true] ,"e12dl2_client": ["'GXM_PREVIOUS'", true] ,"e13dl2_client": ["'GXM_NEXT'", true] ,"e14dl2_client": ["'GXM_LAST'", true] ,"e15dl2_client": ["'PROCURAR'", true] ,"e19dl2_client": ["'ATUALIZAPAGINA'", true] ,"e21dl1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15ResponsavelPatId',fld:'vRESPONSAVELPATID'},{av:'AV16ResponsavelPatNome',fld:'vRESPONSAVELPATNOME'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'RESPONSAVELPATID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("RESPONSAVELPATID","Title")',ctrl:'RESPONSAVELPATID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'RESPONSAVELPATNOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("RESPONSAVELPATNOME","Title")',ctrl:'RESPONSAVELPATNOME',prop:'Title'},{ctrl:'RESPONSAVELPATCARGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("RESPONSAVELPATCARGO","Title")',ctrl:'RESPONSAVELPATCARGO',prop:'Title'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'},{av:'AV19Pagina',fld:'vPAGINA'},{av:'AV18NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A2281ResponsavelPatId',fld:'RESPONSAVELPATID'}],[{av:'AV17OutResponsavelPatId',fld:'vOUTRESPONSAVELPATID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15ResponsavelPatId',fld:'vRESPONSAVELPATID'},{av:'AV16ResponsavelPatNome',fld:'vRESPONSAVELPATNOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15ResponsavelPatId',fld:'vRESPONSAVELPATID'},{av:'AV16ResponsavelPatNome',fld:'vRESPONSAVELPATNOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19Pagina',fld:'vPAGINA'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15ResponsavelPatId',fld:'vRESPONSAVELPATID'},{av:'AV16ResponsavelPatNome',fld:'vRESPONSAVELPATNOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19Pagina',fld:'vPAGINA'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15ResponsavelPatId',fld:'vRESPONSAVELPATID'},{av:'AV16ResponsavelPatNome',fld:'vRESPONSAVELPATNOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15ResponsavelPatId',fld:'vRESPONSAVELPATID'},{av:'AV16ResponsavelPatNome',fld:'vRESPONSAVELPATNOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15ResponsavelPatId',fld:'vRESPONSAVELPATID'},{av:'AV16ResponsavelPatNome',fld:'vRESPONSAVELPATNOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV17OutResponsavelPatId", "vOUTRESPONSAVELPATID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[46]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaresponsavel());
