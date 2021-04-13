/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:55:23.93
*/
gx.evt.autoSkip = false;
gx.define('hconsultaclassificacaoopcaoclas', false, function () {
   this.ServerClass =  "hconsultaclassificacaoopcaoclas" ;
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
      this.AV15OpcaoClassificacaoOut=gx.fn.getControlValue("vOPCAOCLASSIFICACAOOUT") ;
   };
   this.e172082_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e112082_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e122082_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e132082_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e142082_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e152082_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e192082_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e212081_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,29,30,36,39,41,43,45,47,48,49,50];
   this.GXLastCtrlId =50;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaclassificacaoopcaoclas",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(56,29,"OPCAOCLASSIFICACAOID","","","OpcaoClassificacaoId","char",0,"px",20,20,"left",null,[],56,"OpcaoClassificacaoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(57,30,"OPCAOCLASSIFICACAODESCRICAO","","","OpcaoClassificacaoDescricao","char",0,"px",20,20,"left",null,[],57,"OpcaoClassificacaoDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCLASSIFICACAOID",gxz:"ZV7ClassificacaoId",gxold:"OV7ClassificacaoId",gxvar:"AV7ClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7ClassificacaoId=Value},v2z:function(Value){gx.O.ZV7ClassificacaoId=Value},v2c:function(){gx.fn.setControlValue("vCLASSIFICACAOID",gx.O.AV7ClassificacaoId,0)},c2v:function(){gx.O.AV7ClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vOPCAOCLASSIFICACAOID",gxz:"ZV14OpcaoClassificacaoId",gxold:"OV14OpcaoClassificacaoId",gxvar:"AV14OpcaoClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14OpcaoClassificacaoId=Value},v2z:function(Value){gx.O.ZV14OpcaoClassificacaoId=Value},v2c:function(){gx.fn.setControlValue("vOPCAOCLASSIFICACAOID",gx.O.AV14OpcaoClassificacaoId,0)},c2v:function(){gx.O.AV14OpcaoClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vOPCAOCLASSIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vOPCAOCLASSIFICACAODESCRICAO",gxz:"ZV13OpcaoClassificacaoDescricao",gxold:"OV13OpcaoClassificacaoDescricao",gxvar:"AV13OpcaoClassificacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13OpcaoClassificacaoDescricao=Value},v2z:function(Value){gx.O.ZV13OpcaoClassificacaoDescricao=Value},v2c:function(){gx.fn.setControlValue("vOPCAOCLASSIFICACAODESCRICAO",gx.O.AV13OpcaoClassificacaoDescricao,0)},c2v:function(){gx.O.AV13OpcaoClassificacaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vOPCAOCLASSIFICACAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OPCAOCLASSIFICACAOID",gxz:"Z56OpcaoClassificacaoId",gxold:"O56OpcaoClassificacaoId",gxvar:"A56OpcaoClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A56OpcaoClassificacaoId=Value},v2z:function(Value){gx.O.Z56OpcaoClassificacaoId=Value},v2c:function(row){gx.fn.setGridControlValue("OPCAOCLASSIFICACAOID",row || gx.fn.currentGridRowImpl(28),gx.O.A56OpcaoClassificacaoId,0)},c2v:function(){gx.O.A56OpcaoClassificacaoId=this.val()},val:function(row){return gx.fn.getGridControlValue("OPCAOCLASSIFICACAOID",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OPCAOCLASSIFICACAODESCRICAO",gxz:"Z57OpcaoClassificacaoDescricao",gxold:"O57OpcaoClassificacaoDescricao",gxvar:"A57OpcaoClassificacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A57OpcaoClassificacaoDescricao=Value},v2z:function(Value){gx.O.Z57OpcaoClassificacaoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("OPCAOCLASSIFICACAODESCRICAO",row || gx.fn.currentGridRowImpl(28),gx.O.A57OpcaoClassificacaoDescricao,0)},c2v:function(){gx.O.A57OpcaoClassificacaoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("OPCAOCLASSIFICACAODESCRICAO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TABLENAV",grid:0};
   GXValidFnc[39]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[41]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[43]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[45]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[47]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV18PaginaAux",gxold:"OV18PaginaAux",gxvar:"AV18PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV18PaginaAux,0)},c2v:function(){gx.O.AV18PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV17Pagina",gxold:"OV17Pagina",gxvar:"AV17Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV17Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV17Pagina)},c2v:function(){gx.O.AV17Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV16Orderedby",gxold:"OV16Orderedby",gxvar:"AV16Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV16Orderedby,0)},c2v:function(){gx.O.AV16Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV7ClassificacaoId = "" ;
   this.ZV7ClassificacaoId = "" ;
   this.OV7ClassificacaoId = "" ;
   this.AV14OpcaoClassificacaoId = "" ;
   this.ZV14OpcaoClassificacaoId = "" ;
   this.OV14OpcaoClassificacaoId = "" ;
   this.AV13OpcaoClassificacaoDescricao = "" ;
   this.ZV13OpcaoClassificacaoDescricao = "" ;
   this.OV13OpcaoClassificacaoDescricao = "" ;
   this.Z56OpcaoClassificacaoId = "" ;
   this.O56OpcaoClassificacaoId = "" ;
   this.Z57OpcaoClassificacaoDescricao = "" ;
   this.O57OpcaoClassificacaoDescricao = "" ;
   this.AV18PaginaAux = 0 ;
   this.ZV18PaginaAux = 0 ;
   this.OV18PaginaAux = 0 ;
   this.AV17Pagina = 0 ;
   this.ZV17Pagina = 0 ;
   this.OV17Pagina = 0 ;
   this.AV16Orderedby = 0 ;
   this.ZV16Orderedby = 0 ;
   this.OV16Orderedby = 0 ;
   this.AV7ClassificacaoId = "" ;
   this.AV14OpcaoClassificacaoId = "" ;
   this.AV13OpcaoClassificacaoDescricao = "" ;
   this.AV18PaginaAux = 0 ;
   this.AV17Pagina = 0 ;
   this.AV16Orderedby = 0 ;
   this.AV15OpcaoClassificacaoOut = "" ;
   this.A54ClassificacaoId = "" ;
   this.A56OpcaoClassificacaoId = "" ;
   this.A57OpcaoClassificacaoDescricao = "" ;
   this.Events = {"e172082_client": ["ENTER", true] ,"e112082_client": ["'GXM_FIRST'", true] ,"e122082_client": ["'GXM_PREVIOUS'", true] ,"e132082_client": ["'GXM_NEXT'", true] ,"e142082_client": ["'GXM_LAST'", true] ,"e152082_client": ["'PROCURAR'", true] ,"e192082_client": ["'ATUALIZAPAGINA'", true] ,"e212081_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV14OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV13OpcaoClassificacaoDescricao',fld:'vOPCAOCLASSIFICACAODESCRICAO'},{av:'AV7ClassificacaoId',fld:'vCLASSIFICACAOID',hsh:true},{av:'AV16Orderedby',fld:'vORDEREDBY'}],[{ctrl:'OPCAOCLASSIFICACAOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OPCAOCLASSIFICACAOID","Title")',ctrl:'OPCAOCLASSIFICACAOID',prop:'Title'},{av:'AV10Imagem',fld:'vIMAGEM'},{ctrl:'OPCAOCLASSIFICACAODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OPCAOCLASSIFICACAODESCRICAO","Title")',ctrl:'OPCAOCLASSIFICACAODESCRICAO',prop:'Title'},{av:'AV18PaginaAux',fld:'vPAGINAAUX'},{av:'AV17Pagina',fld:'vPAGINA'},{av:'AV12NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'}],[{av:'AV15OpcaoClassificacaoOut',fld:'vOPCAOCLASSIFICACAOOUT'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV14OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV13OpcaoClassificacaoDescricao',fld:'vOPCAOCLASSIFICACAODESCRICAO'},{av:'AV16Orderedby',fld:'vORDEREDBY'},{av:'AV7ClassificacaoId',fld:'vCLASSIFICACAOID',hsh:true}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV14OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV13OpcaoClassificacaoDescricao',fld:'vOPCAOCLASSIFICACAODESCRICAO'},{av:'AV16Orderedby',fld:'vORDEREDBY'},{av:'AV7ClassificacaoId',fld:'vCLASSIFICACAOID',hsh:true},{av:'AV17Pagina',fld:'vPAGINA'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV14OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV13OpcaoClassificacaoDescricao',fld:'vOPCAOCLASSIFICACAODESCRICAO'},{av:'AV16Orderedby',fld:'vORDEREDBY'},{av:'AV7ClassificacaoId',fld:'vCLASSIFICACAOID',hsh:true},{av:'AV17Pagina',fld:'vPAGINA'},{av:'AV18PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV14OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV13OpcaoClassificacaoDescricao',fld:'vOPCAOCLASSIFICACAODESCRICAO'},{av:'AV16Orderedby',fld:'vORDEREDBY'},{av:'AV7ClassificacaoId',fld:'vCLASSIFICACAOID',hsh:true},{av:'AV18PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV14OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV13OpcaoClassificacaoDescricao',fld:'vOPCAOCLASSIFICACAODESCRICAO'},{av:'AV16Orderedby',fld:'vORDEREDBY'},{av:'AV7ClassificacaoId',fld:'vCLASSIFICACAOID',hsh:true}],[{av:'AV16Orderedby',fld:'vORDEREDBY'},{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV14OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV13OpcaoClassificacaoDescricao',fld:'vOPCAOCLASSIFICACAODESCRICAO'},{av:'AV16Orderedby',fld:'vORDEREDBY'},{av:'AV7ClassificacaoId',fld:'vCLASSIFICACAOID',hsh:true}],[]];
   this.setVCMap("AV15OpcaoClassificacaoOut", "vOPCAOCLASSIFICACAOOUT", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[50]);
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaclassificacaoopcaoclas());
