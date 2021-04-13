/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 17:59:50.90
*/
gx.evt.autoSkip = false;
gx.define('hconsultanaturezareceita', false, function () {
   this.ServerClass =  "hconsultanaturezareceita" ;
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
      this.AV18PNaturezaReceitaId=gx.fn.getIntegerValue("vPNATUREZARECEITAID",'.') ;
   };
   this.e1714r2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1114r2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e1214r2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e1314r2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e1414r2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e1514r2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e2014r2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e2114r1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,6,9,12,14,17,19,25,26,27,33,36,38,40,42,44,45,46,47,48];
   this.GXLastCtrlId =48;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",24,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultanaturezareceita",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8441,25,"NATUREZARECEITAID","","","NaturezaReceitaId","int",0,"px",3,3,"right",null,[],8441,"NaturezaReceitaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Naturezareceitadescgrid",26,"vNATUREZARECEITADESCGRID","","","NaturezaReceitaDescGrid","svchar",0,"px",200,80,"left",null,[],"Naturezareceitadescgrid","NaturezaReceitaDescGrid",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8438,27,"NATUREZARECEITADESCRICAO","Descrição","","NaturezaReceitaDescricao","svchar",0,"px",200,80,"left",null,[],8438,"NaturezaReceitaDescricao",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE1",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vNATUREZARECEITAID",gxz:"ZV20NaturezaReceitaId",gxold:"OV20NaturezaReceitaId",gxvar:"AV20NaturezaReceitaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20NaturezaReceitaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20NaturezaReceitaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNATUREZARECEITAID",gx.O.AV20NaturezaReceitaId,0)},c2v:function(){gx.O.AV20NaturezaReceitaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNATUREZARECEITAID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vNATUREZARECEITADESC",gxz:"ZV21NaturezaReceitaDesc",gxold:"OV21NaturezaReceitaDesc",gxvar:"AV21NaturezaReceitaDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21NaturezaReceitaDesc=Value},v2z:function(Value){gx.O.ZV21NaturezaReceitaDesc=Value},v2c:function(){gx.fn.setControlValue("vNATUREZARECEITADESC",gx.O.AV21NaturezaReceitaDesc,0)},c2v:function(){gx.O.AV21NaturezaReceitaDesc=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZARECEITADESC")},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:24,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZARECEITAID",gxz:"Z8441NaturezaReceitaId",gxold:"O8441NaturezaReceitaId",gxvar:"A8441NaturezaReceitaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8441NaturezaReceitaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8441NaturezaReceitaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NATUREZARECEITAID",row || gx.fn.currentGridRowImpl(24),gx.O.A8441NaturezaReceitaId,0)},c2v:function(){gx.O.A8441NaturezaReceitaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NATUREZARECEITAID",row || gx.fn.currentGridRowImpl(24),'.')},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"svchar",len:200,dec:0,sign:false,ro:1,isacc:0,grid:24,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZARECEITADESCGRID",gxz:"ZV19NaturezaReceitaDescGrid",gxold:"OV19NaturezaReceitaDescGrid",gxvar:"AV19NaturezaReceitaDescGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV19NaturezaReceitaDescGrid=Value},v2z:function(Value){gx.O.ZV19NaturezaReceitaDescGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vNATUREZARECEITADESCGRID",row || gx.fn.currentGridRowImpl(24),gx.O.AV19NaturezaReceitaDescGrid,0)},c2v:function(){gx.O.AV19NaturezaReceitaDescGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vNATUREZARECEITADESCGRID",row || gx.fn.currentGridRowImpl(24))},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"svchar",len:200,dec:0,sign:false,ro:1,isacc:0,grid:24,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZARECEITADESCRICAO",gxz:"Z8438NaturezaReceitaDescricao",gxold:"O8438NaturezaReceitaDescricao",gxvar:"A8438NaturezaReceitaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8438NaturezaReceitaDescricao=Value},v2z:function(Value){gx.O.Z8438NaturezaReceitaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("NATUREZARECEITADESCRICAO",row || gx.fn.currentGridRowImpl(24),gx.O.A8438NaturezaReceitaDescricao,0)},c2v:function(){gx.O.A8438NaturezaReceitaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("NATUREZARECEITADESCRICAO",row || gx.fn.currentGridRowImpl(24))},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TABLENAV",grid:0};
   GXValidFnc[36]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[38]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[40]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[42]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[44]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[45]={fld:"JSPROMPT", format:2,grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV16Pagina",gxold:"OV16Pagina",gxvar:"AV16Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV16Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV16Pagina)},c2v:function(){gx.O.AV16Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV15PaginaAux",gxold:"OV15PaginaAux",gxvar:"AV15PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV15PaginaAux,0)},c2v:function(){gx.O.AV15PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV20NaturezaReceitaId = 0 ;
   this.ZV20NaturezaReceitaId = 0 ;
   this.OV20NaturezaReceitaId = 0 ;
   this.AV21NaturezaReceitaDesc = "" ;
   this.ZV21NaturezaReceitaDesc = "" ;
   this.OV21NaturezaReceitaDesc = "" ;
   this.Z8441NaturezaReceitaId = 0 ;
   this.O8441NaturezaReceitaId = 0 ;
   this.ZV19NaturezaReceitaDescGrid = "" ;
   this.OV19NaturezaReceitaDescGrid = "" ;
   this.Z8438NaturezaReceitaDescricao = "" ;
   this.O8438NaturezaReceitaDescricao = "" ;
   this.AV16Pagina = 0 ;
   this.ZV16Pagina = 0 ;
   this.OV16Pagina = 0 ;
   this.AV15PaginaAux = 0 ;
   this.ZV15PaginaAux = 0 ;
   this.OV15PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV20NaturezaReceitaId = 0 ;
   this.AV21NaturezaReceitaDesc = "" ;
   this.AV16Pagina = 0 ;
   this.AV15PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV18PNaturezaReceitaId = 0 ;
   this.A8441NaturezaReceitaId = 0 ;
   this.AV19NaturezaReceitaDescGrid = "" ;
   this.A8438NaturezaReceitaDescricao = "" ;
   this.Events = {"e1714r2_client": ["ENTER", true] ,"e1114r2_client": ["'GXM_FIRST'", true] ,"e1214r2_client": ["'GXM_PREVIOUS'", true] ,"e1314r2_client": ["'GXM_NEXT'", true] ,"e1414r2_client": ["'GXM_LAST'", true] ,"e1514r2_client": ["'PROCURAR'", true] ,"e2014r2_client": ["'ATUALIZAPAGINA'", true] ,"e2114r1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20NaturezaReceitaId',fld:'vNATUREZARECEITAID'},{av:'AV21NaturezaReceitaDesc',fld:'vNATUREZARECEITADESC'},{av:'A8438NaturezaReceitaDescricao',fld:'NATUREZARECEITADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'NATUREZARECEITAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NATUREZARECEITAID","Title")',ctrl:'NATUREZARECEITAID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'vNATUREZARECEITADESCGRID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vNATUREZARECEITADESCGRID","Title")',ctrl:'vNATUREZARECEITADESCGRID',prop:'Title'},{av:'AV15PaginaAux',fld:'vPAGINAAUX'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'AV17NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A8441NaturezaReceitaId',fld:'NATUREZARECEITAID'}],[{av:'AV18PNaturezaReceitaId',fld:'vPNATUREZARECEITAID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20NaturezaReceitaId',fld:'vNATUREZARECEITAID'},{av:'AV21NaturezaReceitaDesc',fld:'vNATUREZARECEITADESC'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A8438NaturezaReceitaDescricao',fld:'NATUREZARECEITADESCRICAO'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20NaturezaReceitaId',fld:'vNATUREZARECEITAID'},{av:'AV21NaturezaReceitaDesc',fld:'vNATUREZARECEITADESC'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A8438NaturezaReceitaDescricao',fld:'NATUREZARECEITADESCRICAO'},{av:'AV16Pagina',fld:'vPAGINA'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20NaturezaReceitaId',fld:'vNATUREZARECEITAID'},{av:'AV21NaturezaReceitaDesc',fld:'vNATUREZARECEITADESC'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A8438NaturezaReceitaDescricao',fld:'NATUREZARECEITADESCRICAO'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'AV15PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20NaturezaReceitaId',fld:'vNATUREZARECEITAID'},{av:'AV21NaturezaReceitaDesc',fld:'vNATUREZARECEITADESC'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A8438NaturezaReceitaDescricao',fld:'NATUREZARECEITADESCRICAO'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20NaturezaReceitaId',fld:'vNATUREZARECEITAID'},{av:'AV21NaturezaReceitaDesc',fld:'vNATUREZARECEITADESC'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A8438NaturezaReceitaDescricao',fld:'NATUREZARECEITADESCRICAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["LOAD"] = [[{av:'A8438NaturezaReceitaDescricao',fld:'NATUREZARECEITADESCRICAO'}],[{av:'AV19NaturezaReceitaDescGrid',fld:'vNATUREZARECEITADESCGRID'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20NaturezaReceitaId',fld:'vNATUREZARECEITAID'},{av:'AV21NaturezaReceitaDesc',fld:'vNATUREZARECEITADESC'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A8438NaturezaReceitaDescricao',fld:'NATUREZARECEITADESCRICAO'}],[]];
   this.setVCMap("AV18PNaturezaReceitaId", "vPNATUREZARECEITAID", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[14]);
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridContainer.addRefreshingVar(this.GXValidFnc[48]);
   GridContainer.addRefreshingVar({rfrVar:"A8438NaturezaReceitaDescricao", rfrProp:"Value", gxAttId:"8438"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultanaturezareceita());
