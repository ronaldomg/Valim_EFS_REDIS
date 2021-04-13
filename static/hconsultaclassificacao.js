/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:58:38.46
*/
gx.evt.autoSkip = false;
gx.define('hconsultaclassificacao', false, function () {
   this.ServerClass =  "hconsultaclassificacao" ;
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
      this.AV19ClassificacaoId=gx.fn.getControlValue("vCLASSIFICACAOID") ;
      this.AV22PClassificacaoId=gx.fn.getControlValue("vPCLASSIFICACAOID") ;
      this.AV17POpcaoClassificacaoId=gx.fn.getControlValue("vPOPCAOCLASSIFICACAOID") ;
   };
   this.e178h2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e118h2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e128h2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e138h2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e148h2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e158h2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e198h2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e218h1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,31,34,36,38,40,42,43,44,45];
   this.GXLastCtrlId =45;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaclassificacao",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(56,24,"OPCAOCLASSIFICACAOID","","","OpcaoClassificacaoId","char",0,"px",20,20,"left",null,[],56,"OpcaoClassificacaoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(57,25,"OPCAOCLASSIFICACAODESCRICAO","","","OpcaoClassificacaoDescricao","char",0,"px",20,20,"left",null,[],57,"OpcaoClassificacaoDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vOPCAOCLASSIFICACAOID",gxz:"ZV16OpcaoClassificacaoId",gxold:"OV16OpcaoClassificacaoId",gxvar:"AV16OpcaoClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16OpcaoClassificacaoId=Value},v2z:function(Value){gx.O.ZV16OpcaoClassificacaoId=Value},v2c:function(){gx.fn.setControlValue("vOPCAOCLASSIFICACAOID",gx.O.AV16OpcaoClassificacaoId,0)},c2v:function(){gx.O.AV16OpcaoClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vOPCAOCLASSIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vOPCAOCLASSIFICACAODESCRICAO",gxz:"ZV18OpcaoClassificacaoDescricao",gxold:"OV18OpcaoClassificacaoDescricao",gxvar:"AV18OpcaoClassificacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18OpcaoClassificacaoDescricao=Value},v2z:function(Value){gx.O.ZV18OpcaoClassificacaoDescricao=Value},v2c:function(){gx.fn.setControlValue("vOPCAOCLASSIFICACAODESCRICAO",gx.O.AV18OpcaoClassificacaoDescricao,0)},c2v:function(){gx.O.AV18OpcaoClassificacaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vOPCAOCLASSIFICACAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OPCAOCLASSIFICACAOID",gxz:"Z56OpcaoClassificacaoId",gxold:"O56OpcaoClassificacaoId",gxvar:"A56OpcaoClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A56OpcaoClassificacaoId=Value},v2z:function(Value){gx.O.Z56OpcaoClassificacaoId=Value},v2c:function(row){gx.fn.setGridControlValue("OPCAOCLASSIFICACAOID",row || gx.fn.currentGridRowImpl(23),gx.O.A56OpcaoClassificacaoId,0)},c2v:function(){gx.O.A56OpcaoClassificacaoId=this.val()},val:function(row){return gx.fn.getGridControlValue("OPCAOCLASSIFICACAOID",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OPCAOCLASSIFICACAODESCRICAO",gxz:"Z57OpcaoClassificacaoDescricao",gxold:"O57OpcaoClassificacaoDescricao",gxvar:"A57OpcaoClassificacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A57OpcaoClassificacaoDescricao=Value},v2z:function(Value){gx.O.Z57OpcaoClassificacaoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("OPCAOCLASSIFICACAODESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A57OpcaoClassificacaoDescricao,0)},c2v:function(){gx.O.A57OpcaoClassificacaoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("OPCAOCLASSIFICACAODESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLENAV",grid:0};
   GXValidFnc[34]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[42]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV24Pagina",gxold:"OV24Pagina",gxvar:"AV24Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV24Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV24Pagina)},c2v:function(){gx.O.AV24Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV25PaginaAux",gxold:"OV25PaginaAux",gxvar:"AV25PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV25PaginaAux,0)},c2v:function(){gx.O.AV25PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16OpcaoClassificacaoId = "" ;
   this.ZV16OpcaoClassificacaoId = "" ;
   this.OV16OpcaoClassificacaoId = "" ;
   this.AV18OpcaoClassificacaoDescricao = "" ;
   this.ZV18OpcaoClassificacaoDescricao = "" ;
   this.OV18OpcaoClassificacaoDescricao = "" ;
   this.Z56OpcaoClassificacaoId = "" ;
   this.O56OpcaoClassificacaoId = "" ;
   this.Z57OpcaoClassificacaoDescricao = "" ;
   this.O57OpcaoClassificacaoDescricao = "" ;
   this.AV24Pagina = 0 ;
   this.ZV24Pagina = 0 ;
   this.OV24Pagina = 0 ;
   this.AV25PaginaAux = 0 ;
   this.ZV25PaginaAux = 0 ;
   this.OV25PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16OpcaoClassificacaoId = "" ;
   this.AV18OpcaoClassificacaoDescricao = "" ;
   this.AV24Pagina = 0 ;
   this.AV25PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV19ClassificacaoId = "" ;
   this.AV22PClassificacaoId = "" ;
   this.AV17POpcaoClassificacaoId = "" ;
   this.A54ClassificacaoId = "" ;
   this.A162EmpresaClassificacaoEmpresaId = "" ;
   this.A56OpcaoClassificacaoId = "" ;
   this.A57OpcaoClassificacaoDescricao = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e178h2_client": ["ENTER", true] ,"e118h2_client": ["'GXM_FIRST'", true] ,"e128h2_client": ["'GXM_PREVIOUS'", true] ,"e138h2_client": ["'GXM_NEXT'", true] ,"e148h2_client": ["'GXM_LAST'", true] ,"e158h2_client": ["'PROCURAR'", true] ,"e198h2_client": ["'ATUALIZAPAGINA'", true] ,"e218h1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV18OpcaoClassificacaoDescricao',fld:'vOPCAOCLASSIFICACAODESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19ClassificacaoId',fld:'vCLASSIFICACAOID',hsh:true},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'OPCAOCLASSIFICACAOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OPCAOCLASSIFICACAOID","Title")',ctrl:'OPCAOCLASSIFICACAOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'OPCAOCLASSIFICACAODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OPCAOCLASSIFICACAODESCRICAO","Title")',ctrl:'OPCAOCLASSIFICACAODESCRICAO',prop:'Title'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV23NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'}],[{av:'AV22PClassificacaoId',fld:'vPCLASSIFICACAOID'},{av:'AV17POpcaoClassificacaoId',fld:'vPOPCAOCLASSIFICACAOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV18OpcaoClassificacaoDescricao',fld:'vOPCAOCLASSIFICACAODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19ClassificacaoId',fld:'vCLASSIFICACAOID',hsh:true}],[{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV18OpcaoClassificacaoDescricao',fld:'vOPCAOCLASSIFICACAODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19ClassificacaoId',fld:'vCLASSIFICACAOID',hsh:true},{av:'AV24Pagina',fld:'vPAGINA'}],[{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV18OpcaoClassificacaoDescricao',fld:'vOPCAOCLASSIFICACAODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19ClassificacaoId',fld:'vCLASSIFICACAOID',hsh:true},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV18OpcaoClassificacaoDescricao',fld:'vOPCAOCLASSIFICACAODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19ClassificacaoId',fld:'vCLASSIFICACAOID',hsh:true},{av:'AV25PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV18OpcaoClassificacaoDescricao',fld:'vOPCAOCLASSIFICACAODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19ClassificacaoId',fld:'vCLASSIFICACAOID',hsh:true}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV18OpcaoClassificacaoDescricao',fld:'vOPCAOCLASSIFICACAODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19ClassificacaoId',fld:'vCLASSIFICACAOID',hsh:true}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV19ClassificacaoId", "vCLASSIFICACAOID", 0, "char");
   this.setVCMap("AV22PClassificacaoId", "vPCLASSIFICACAOID", 0, "char");
   this.setVCMap("AV17POpcaoClassificacaoId", "vPOPCAOCLASSIFICACAOID", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV19ClassificacaoId", "vCLASSIFICACAOID", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV19ClassificacaoId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaclassificacao());
