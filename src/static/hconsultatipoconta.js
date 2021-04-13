/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:58:9.17
*/
gx.evt.autoSkip = false;
gx.define('hconsultatipoconta', false, function () {
   this.ServerClass =  "hconsultatipoconta" ;
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
      this.AV17PTipoContaId=gx.fn.getIntegerValue("vPTIPOCONTAID",'.') ;
   };
   this.e177w2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e117w2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e127w2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e137w2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e147w2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e157w2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e197w2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e217w1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,32,35,37,39,41,43,44,45,46];
   this.GXLastCtrlId =46;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultatipoconta",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(942,24,"TIPOCONTAID","","","TipoContaId","int",0,"px",3,3,"right",null,[],942,"TipoContaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(943,25,"TIPOCONTADESCRICAO","","","TipoContaDescricao","svchar",0,"px",25,25,"left",null,[],943,"TipoContaDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(945,26,"TIPOCONTATIPOCONTABIL","Tipo Conta Tipo Contabil","TipoContaTipoContabil","char",null,0,false,false,0,"px","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE5",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOCONTADESCRICAO",gxz:"ZV15TipoContaDescricao",gxold:"OV15TipoContaDescricao",gxvar:"AV15TipoContaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15TipoContaDescricao=Value},v2z:function(Value){gx.O.ZV15TipoContaDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOCONTADESCRICAO",gx.O.AV15TipoContaDescricao,0)},c2v:function(){gx.O.AV15TipoContaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONTADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOCONTATIPOCONTABIL",gxz:"ZV16TipoContaTipoContabil",gxold:"OV16TipoContaTipoContabil",gxvar:"AV16TipoContaTipoContabil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV16TipoContaTipoContabil=Value},v2z:function(Value){gx.O.ZV16TipoContaTipoContabil=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOCONTATIPOCONTABIL",gx.O.AV16TipoContaTipoContabil)},c2v:function(){gx.O.AV16TipoContaTipoContabil=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONTATIPOCONTABIL")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONTAID",gxz:"Z942TipoContaId",gxold:"O942TipoContaId",gxvar:"A942TipoContaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A942TipoContaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z942TipoContaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOCONTAID",row || gx.fn.currentGridRowImpl(23),gx.O.A942TipoContaId,0)},c2v:function(){gx.O.A942TipoContaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOCONTAID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONTADESCRICAO",gxz:"Z943TipoContaDescricao",gxold:"O943TipoContaDescricao",gxvar:"A943TipoContaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A943TipoContaDescricao=Value},v2z:function(Value){gx.O.Z943TipoContaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOCONTADESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A943TipoContaDescricao,0)},c2v:function(){gx.O.A943TipoContaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOCONTADESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONTATIPOCONTABIL",gxz:"Z945TipoContaTipoContabil",gxold:"O945TipoContaTipoContabil",gxvar:"A945TipoContaTipoContabil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A945TipoContaTipoContabil=Value},v2z:function(Value){gx.O.Z945TipoContaTipoContabil=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TIPOCONTATIPOCONTABIL",row || gx.fn.currentGridRowImpl(23),gx.O.A945TipoContaTipoContabil)},c2v:function(){gx.O.A945TipoContaTipoContabil=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOCONTATIPOCONTABIL",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TABLENAV",grid:0};
   GXValidFnc[35]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[37]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[39]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[41]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[43]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV19Pagina",gxold:"OV19Pagina",gxvar:"AV19Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV19Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV19Pagina)},c2v:function(){gx.O.AV19Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV20PaginaAux",gxold:"OV20PaginaAux",gxvar:"AV20PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV20PaginaAux,0)},c2v:function(){gx.O.AV20PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV15TipoContaDescricao = "" ;
   this.ZV15TipoContaDescricao = "" ;
   this.OV15TipoContaDescricao = "" ;
   this.AV16TipoContaTipoContabil = "" ;
   this.ZV16TipoContaTipoContabil = "" ;
   this.OV16TipoContaTipoContabil = "" ;
   this.Z942TipoContaId = 0 ;
   this.O942TipoContaId = 0 ;
   this.Z943TipoContaDescricao = "" ;
   this.O943TipoContaDescricao = "" ;
   this.Z945TipoContaTipoContabil = "" ;
   this.O945TipoContaTipoContabil = "" ;
   this.AV19Pagina = 0 ;
   this.ZV19Pagina = 0 ;
   this.OV19Pagina = 0 ;
   this.AV20PaginaAux = 0 ;
   this.ZV20PaginaAux = 0 ;
   this.OV20PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV15TipoContaDescricao = "" ;
   this.AV16TipoContaTipoContabil = "" ;
   this.AV19Pagina = 0 ;
   this.AV20PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV17PTipoContaId = 0 ;
   this.A941TipoContaEmpresaId = "" ;
   this.A942TipoContaId = 0 ;
   this.A943TipoContaDescricao = "" ;
   this.A945TipoContaTipoContabil = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e177w2_client": ["ENTER", true] ,"e117w2_client": ["'GXM_FIRST'", true] ,"e127w2_client": ["'GXM_PREVIOUS'", true] ,"e137w2_client": ["'GXM_NEXT'", true] ,"e147w2_client": ["'GXM_LAST'", true] ,"e157w2_client": ["'PROCURAR'", true] ,"e197w2_client": ["'ATUALIZAPAGINA'", true] ,"e217w1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TipoContaDescricao',fld:'vTIPOCONTADESCRICAO'},{av:'AV16TipoContaTipoContabil',fld:'vTIPOCONTATIPOCONTABIL'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'TIPOCONTAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOCONTAID","Title")',ctrl:'TIPOCONTAID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'TIPOCONTADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOCONTADESCRICAO","Title")',ctrl:'TIPOCONTADESCRICAO',prop:'Title'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'},{av:'AV19Pagina',fld:'vPAGINA'},{av:'AV18NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A942TipoContaId',fld:'TIPOCONTAID'}],[{av:'AV17PTipoContaId',fld:'vPTIPOCONTAID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TipoContaDescricao',fld:'vTIPOCONTADESCRICAO'},{av:'AV16TipoContaTipoContabil',fld:'vTIPOCONTATIPOCONTABIL'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TipoContaDescricao',fld:'vTIPOCONTADESCRICAO'},{av:'AV16TipoContaTipoContabil',fld:'vTIPOCONTATIPOCONTABIL'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19Pagina',fld:'vPAGINA'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TipoContaDescricao',fld:'vTIPOCONTADESCRICAO'},{av:'AV16TipoContaTipoContabil',fld:'vTIPOCONTATIPOCONTABIL'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19Pagina',fld:'vPAGINA'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TipoContaDescricao',fld:'vTIPOCONTADESCRICAO'},{av:'AV16TipoContaTipoContabil',fld:'vTIPOCONTATIPOCONTABIL'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TipoContaDescricao',fld:'vTIPOCONTADESCRICAO'},{av:'AV16TipoContaTipoContabil',fld:'vTIPOCONTATIPOCONTABIL'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TipoContaDescricao',fld:'vTIPOCONTADESCRICAO'},{av:'AV16TipoContaTipoContabil',fld:'vTIPOCONTATIPOCONTABIL'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV17PTipoContaId", "vPTIPOCONTAID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[46]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultatipoconta());
