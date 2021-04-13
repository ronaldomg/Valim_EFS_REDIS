/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:14:26.31
*/
gx.evt.autoSkip = false;
gx.define('hconsultaopcaoclassificacaoest', false, function () {
   this.ServerClass =  "hconsultaopcaoclassificacaoest" ;
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
      this.AV16OpcaoClassificacaoOut=gx.fn.getControlValue("vOPCAOCLASSIFICACAOOUT") ;
   };
   this.e17s22_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11s22_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12s22_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13s22_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14s22_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15s22_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19s22_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21s21_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,22,24,30,31,37,40,42,44,46,48,49,50,51];
   this.GXLastCtrlId =51;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",29,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaopcaoclassificacaoest",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2931,30,"OPCAOCLASSIFICACAOESTID","","","OpcaoClassificacaoEstId","char",0,"px",15,15,"left",null,[],2931,"OpcaoClassificacaoEstId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2926,31,"OPCAOCLASSIFICACAOESTDESCRICAO","","","OpcaoClassificacaoEstDescricao","svchar",0,"px",30,30,"left",null,[],2926,"OpcaoClassificacaoEstDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCLASSIFICACAOESTIDFILTRO",gxz:"ZV17ClassificacaoEstIdFiltro",gxold:"OV17ClassificacaoEstIdFiltro",gxvar:"AV17ClassificacaoEstIdFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17ClassificacaoEstIdFiltro=Value},v2z:function(Value){gx.O.ZV17ClassificacaoEstIdFiltro=Value},v2c:function(){gx.fn.setControlValue("vCLASSIFICACAOESTIDFILTRO",gx.O.AV17ClassificacaoEstIdFiltro,0)},c2v:function(){gx.O.AV17ClassificacaoEstIdFiltro=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOESTIDFILTRO")},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOESTDESCRICAO",gxz:"ZV18ClassificacaoEstDescricao",gxold:"OV18ClassificacaoEstDescricao",gxvar:"AV18ClassificacaoEstDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18ClassificacaoEstDescricao=Value},v2z:function(Value){gx.O.ZV18ClassificacaoEstDescricao=Value},v2c:function(){gx.fn.setControlValue("vCLASSIFICACAOESTDESCRICAO",gx.O.AV18ClassificacaoEstDescricao,0)},c2v:function(){gx.O.AV18ClassificacaoEstDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOESTDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vOPCAOCLASSIFICACAOFILTRO",gxz:"ZV19OpcaoClassificacaoFiltro",gxold:"OV19OpcaoClassificacaoFiltro",gxvar:"AV19OpcaoClassificacaoFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19OpcaoClassificacaoFiltro=Value},v2z:function(Value){gx.O.ZV19OpcaoClassificacaoFiltro=Value},v2c:function(){gx.fn.setControlValue("vOPCAOCLASSIFICACAOFILTRO",gx.O.AV19OpcaoClassificacaoFiltro,0)},c2v:function(){gx.O.AV19OpcaoClassificacaoFiltro=this.val()},val:function(){return gx.fn.getControlValue("vOPCAOCLASSIFICACAOFILTRO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vOPCAOCLASSIFICACAODESCFILTRO",gxz:"ZV20OpcaoClassificacaoDescFiltro",gxold:"OV20OpcaoClassificacaoDescFiltro",gxvar:"AV20OpcaoClassificacaoDescFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20OpcaoClassificacaoDescFiltro=Value},v2z:function(Value){gx.O.ZV20OpcaoClassificacaoDescFiltro=Value},v2c:function(){gx.fn.setControlValue("vOPCAOCLASSIFICACAODESCFILTRO",gx.O.AV20OpcaoClassificacaoDescFiltro,0)},c2v:function(){gx.O.AV20OpcaoClassificacaoDescFiltro=this.val()},val:function(){return gx.fn.getControlValue("vOPCAOCLASSIFICACAODESCFILTRO")},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OPCAOCLASSIFICACAOESTID",gxz:"Z2931OpcaoClassificacaoEstId",gxold:"O2931OpcaoClassificacaoEstId",gxvar:"A2931OpcaoClassificacaoEstId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2931OpcaoClassificacaoEstId=Value},v2z:function(Value){gx.O.Z2931OpcaoClassificacaoEstId=Value},v2c:function(row){gx.fn.setGridControlValue("OPCAOCLASSIFICACAOESTID",row || gx.fn.currentGridRowImpl(29),gx.O.A2931OpcaoClassificacaoEstId,0)},c2v:function(){gx.O.A2931OpcaoClassificacaoEstId=this.val()},val:function(row){return gx.fn.getGridControlValue("OPCAOCLASSIFICACAOESTID",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OPCAOCLASSIFICACAOESTDESCRICAO",gxz:"Z2926OpcaoClassificacaoEstDescricao",gxold:"O2926OpcaoClassificacaoEstDescricao",gxvar:"A2926OpcaoClassificacaoEstDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2926OpcaoClassificacaoEstDescricao=Value},v2z:function(Value){gx.O.Z2926OpcaoClassificacaoEstDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("OPCAOCLASSIFICACAOESTDESCRICAO",row || gx.fn.currentGridRowImpl(29),gx.O.A2926OpcaoClassificacaoEstDescricao,0)},c2v:function(){gx.O.A2926OpcaoClassificacaoEstDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("OPCAOCLASSIFICACAOESTDESCRICAO",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TABLENAV",grid:0};
   GXValidFnc[40]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[42]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[44]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[46]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[48]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV23PaginaAux",gxold:"OV23PaginaAux",gxvar:"AV23PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV23PaginaAux,0)},c2v:function(){gx.O.AV23PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV22Pagina",gxold:"OV22Pagina",gxvar:"AV22Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV22Pagina)},c2v:function(){gx.O.AV22Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV17ClassificacaoEstIdFiltro = "" ;
   this.ZV17ClassificacaoEstIdFiltro = "" ;
   this.OV17ClassificacaoEstIdFiltro = "" ;
   this.AV18ClassificacaoEstDescricao = "" ;
   this.ZV18ClassificacaoEstDescricao = "" ;
   this.OV18ClassificacaoEstDescricao = "" ;
   this.AV19OpcaoClassificacaoFiltro = "" ;
   this.ZV19OpcaoClassificacaoFiltro = "" ;
   this.OV19OpcaoClassificacaoFiltro = "" ;
   this.AV20OpcaoClassificacaoDescFiltro = "" ;
   this.ZV20OpcaoClassificacaoDescFiltro = "" ;
   this.OV20OpcaoClassificacaoDescFiltro = "" ;
   this.Z2931OpcaoClassificacaoEstId = "" ;
   this.O2931OpcaoClassificacaoEstId = "" ;
   this.Z2926OpcaoClassificacaoEstDescricao = "" ;
   this.O2926OpcaoClassificacaoEstDescricao = "" ;
   this.AV23PaginaAux = 0 ;
   this.ZV23PaginaAux = 0 ;
   this.OV23PaginaAux = 0 ;
   this.AV22Pagina = 0 ;
   this.ZV22Pagina = 0 ;
   this.OV22Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV17ClassificacaoEstIdFiltro = "" ;
   this.AV18ClassificacaoEstDescricao = "" ;
   this.AV19OpcaoClassificacaoFiltro = "" ;
   this.AV20OpcaoClassificacaoDescFiltro = "" ;
   this.AV23PaginaAux = 0 ;
   this.AV22Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV16OpcaoClassificacaoOut = "" ;
   this.A2930ClassificacaoEstId = "" ;
   this.A2929ClassificacaoEstEmpresaId = "" ;
   this.A2931OpcaoClassificacaoEstId = "" ;
   this.A2926OpcaoClassificacaoEstDescricao = "" ;
   this.A2922ClassificacaoEstDescricao = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17s22_client": ["ENTER", true] ,"e11s22_client": ["'GXM_FIRST'", true] ,"e12s22_client": ["'GXM_PREVIOUS'", true] ,"e13s22_client": ["'GXM_NEXT'", true] ,"e14s22_client": ["'GXM_LAST'", true] ,"e15s22_client": ["'PROCURAR'", true] ,"e19s22_client": ["'ATUALIZAPAGINA'", true] ,"e21s21_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19OpcaoClassificacaoFiltro',fld:'vOPCAOCLASSIFICACAOFILTRO'},{av:'AV20OpcaoClassificacaoDescFiltro',fld:'vOPCAOCLASSIFICACAODESCFILTRO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17ClassificacaoEstIdFiltro',fld:'vCLASSIFICACAOESTIDFILTRO',hsh:true},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'OPCAOCLASSIFICACAOESTID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OPCAOCLASSIFICACAOESTID","Title")',ctrl:'OPCAOCLASSIFICACAOESTID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'OPCAOCLASSIFICACAOESTDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OPCAOCLASSIFICACAOESTDESCRICAO","Title")',ctrl:'OPCAOCLASSIFICACAOESTDESCRICAO',prop:'Title'},{av:'AV23PaginaAux',fld:'vPAGINAAUX'},{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV21NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'}],[{av:'AV16OpcaoClassificacaoOut',fld:'vOPCAOCLASSIFICACAOOUT'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19OpcaoClassificacaoFiltro',fld:'vOPCAOCLASSIFICACAOFILTRO'},{av:'AV20OpcaoClassificacaoDescFiltro',fld:'vOPCAOCLASSIFICACAODESCFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17ClassificacaoEstIdFiltro',fld:'vCLASSIFICACAOESTIDFILTRO',hsh:true}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19OpcaoClassificacaoFiltro',fld:'vOPCAOCLASSIFICACAOFILTRO'},{av:'AV20OpcaoClassificacaoDescFiltro',fld:'vOPCAOCLASSIFICACAODESCFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17ClassificacaoEstIdFiltro',fld:'vCLASSIFICACAOESTIDFILTRO',hsh:true},{av:'AV22Pagina',fld:'vPAGINA'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19OpcaoClassificacaoFiltro',fld:'vOPCAOCLASSIFICACAOFILTRO'},{av:'AV20OpcaoClassificacaoDescFiltro',fld:'vOPCAOCLASSIFICACAODESCFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17ClassificacaoEstIdFiltro',fld:'vCLASSIFICACAOESTIDFILTRO',hsh:true},{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV23PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19OpcaoClassificacaoFiltro',fld:'vOPCAOCLASSIFICACAOFILTRO'},{av:'AV20OpcaoClassificacaoDescFiltro',fld:'vOPCAOCLASSIFICACAODESCFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17ClassificacaoEstIdFiltro',fld:'vCLASSIFICACAOESTIDFILTRO',hsh:true},{av:'AV23PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19OpcaoClassificacaoFiltro',fld:'vOPCAOCLASSIFICACAOFILTRO'},{av:'AV20OpcaoClassificacaoDescFiltro',fld:'vOPCAOCLASSIFICACAODESCFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17ClassificacaoEstIdFiltro',fld:'vCLASSIFICACAOESTIDFILTRO',hsh:true}],[{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19OpcaoClassificacaoFiltro',fld:'vOPCAOCLASSIFICACAOFILTRO'},{av:'AV20OpcaoClassificacaoDescFiltro',fld:'vOPCAOCLASSIFICACAODESCFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17ClassificacaoEstIdFiltro',fld:'vCLASSIFICACAOESTIDFILTRO',hsh:true}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV16OpcaoClassificacaoOut", "vOPCAOCLASSIFICACAOOUT", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridContainer.addRefreshingVar(this.GXValidFnc[24]);
   GridContainer.addRefreshingVar(this.GXValidFnc[51]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaopcaoclassificacaoest());
