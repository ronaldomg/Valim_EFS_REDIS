/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:20:44.75
*/
gx.evt.autoSkip = false;
gx.define('hconsultanaturezadespesa2', false, function () {
   this.ServerClass =  "hconsultanaturezadespesa2" ;
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
      this.AV16OutNaturezaDespesaId=gx.fn.getIntegerValue("vOUTNATUREZADESPESAID",'.') ;
   };
   this.e17d62_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11d62_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12d62_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13d62_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14d62_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15d62_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19d62_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21d61_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,19,20,21,22,28,31,33,35,37,39,40,41,42];
   this.GXLastCtrlId =42;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",18,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultanaturezadespesa2",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2073,19,"NATUREZADESPESAID","","","NaturezaDespesaId","int",0,"px",8,8,"right",null,[],2073,"NaturezaDespesaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2077,20,"NATUREZADESPESADESCRICAO","","","NaturezaDespesaDescricao","svchar",0,"px",40,40,"left",null,[],2077,"NaturezaDespesaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(2074,21,"NATUREZADESPESATPIMPRESSAO","","NaturezaDespesaTpImpressao","char",null,0,true,false,0,"px","");
   GridContainer.addComboBox(2075,22,"NATUREZADESPESATIPO","Tipo","NaturezaDespesaTipo","char",null,0,true,false,0,"px","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vNATUREZADESPESADESCRICAO",gxz:"ZV15NaturezaDespesaDescricao",gxold:"OV15NaturezaDespesaDescricao",gxvar:"AV15NaturezaDespesaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15NaturezaDespesaDescricao=Value},v2z:function(Value){gx.O.ZV15NaturezaDespesaDescricao=Value},v2c:function(){gx.fn.setControlValue("vNATUREZADESPESADESCRICAO",gx.O.AV15NaturezaDespesaDescricao,0)},c2v:function(){gx.O.AV15NaturezaDespesaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZADESPESADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[19]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZADESPESAID",gxz:"Z2073NaturezaDespesaId",gxold:"O2073NaturezaDespesaId",gxvar:"A2073NaturezaDespesaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2073NaturezaDespesaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2073NaturezaDespesaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NATUREZADESPESAID",row || gx.fn.currentGridRowImpl(18),gx.O.A2073NaturezaDespesaId,0)},c2v:function(){gx.O.A2073NaturezaDespesaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NATUREZADESPESAID",row || gx.fn.currentGridRowImpl(18),'.')},nac:gx.falseFn};
   GXValidFnc[20]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZADESPESADESCRICAO",gxz:"Z2077NaturezaDespesaDescricao",gxold:"O2077NaturezaDespesaDescricao",gxvar:"A2077NaturezaDespesaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2077NaturezaDespesaDescricao=Value},v2z:function(Value){gx.O.Z2077NaturezaDespesaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("NATUREZADESPESADESCRICAO",row || gx.fn.currentGridRowImpl(18),gx.O.A2077NaturezaDespesaDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2077NaturezaDespesaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("NATUREZADESPESADESCRICAO",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[21]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZADESPESATPIMPRESSAO",gxz:"Z2074NaturezaDespesaTpImpressao",gxold:"O2074NaturezaDespesaTpImpressao",gxvar:"A2074NaturezaDespesaTpImpressao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2074NaturezaDespesaTpImpressao=Value},v2z:function(Value){gx.O.Z2074NaturezaDespesaTpImpressao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("NATUREZADESPESATPIMPRESSAO",row || gx.fn.currentGridRowImpl(18),gx.O.A2074NaturezaDespesaTpImpressao)},c2v:function(){gx.O.A2074NaturezaDespesaTpImpressao=this.val()},val:function(row){return gx.fn.getGridControlValue("NATUREZADESPESATPIMPRESSAO",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[22]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZADESPESATIPO",gxz:"Z2075NaturezaDespesaTipo",gxold:"O2075NaturezaDespesaTipo",gxvar:"A2075NaturezaDespesaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2075NaturezaDespesaTipo=Value},v2z:function(Value){gx.O.Z2075NaturezaDespesaTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("NATUREZADESPESATIPO",row || gx.fn.currentGridRowImpl(18),gx.O.A2075NaturezaDespesaTipo)},c2v:function(){gx.O.A2075NaturezaDespesaTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("NATUREZADESPESATIPO",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABLENAV",grid:0};
   GXValidFnc[31]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[33]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[35]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[37]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[39]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV18Pagina",gxold:"OV18Pagina",gxvar:"AV18Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV18Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV18Pagina)},c2v:function(){gx.O.AV18Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV19PaginaAux",gxold:"OV19PaginaAux",gxvar:"AV19PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV19PaginaAux,0)},c2v:function(){gx.O.AV19PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV15NaturezaDespesaDescricao = "" ;
   this.ZV15NaturezaDespesaDescricao = "" ;
   this.OV15NaturezaDespesaDescricao = "" ;
   this.Z2073NaturezaDespesaId = 0 ;
   this.O2073NaturezaDespesaId = 0 ;
   this.Z2077NaturezaDespesaDescricao = "" ;
   this.O2077NaturezaDespesaDescricao = "" ;
   this.Z2074NaturezaDespesaTpImpressao = "" ;
   this.O2074NaturezaDespesaTpImpressao = "" ;
   this.Z2075NaturezaDespesaTipo = "" ;
   this.O2075NaturezaDespesaTipo = "" ;
   this.AV18Pagina = 0 ;
   this.ZV18Pagina = 0 ;
   this.OV18Pagina = 0 ;
   this.AV19PaginaAux = 0 ;
   this.ZV19PaginaAux = 0 ;
   this.OV19PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV15NaturezaDespesaDescricao = "" ;
   this.AV18Pagina = 0 ;
   this.AV19PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV16OutNaturezaDespesaId = 0 ;
   this.A2076NaturezaDespesaEmpresaId = "" ;
   this.A2073NaturezaDespesaId = 0 ;
   this.A2077NaturezaDespesaDescricao = "" ;
   this.A2074NaturezaDespesaTpImpressao = "" ;
   this.A2075NaturezaDespesaTipo = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17d62_client": ["ENTER", true] ,"e11d62_client": ["'GXM_FIRST'", true] ,"e12d62_client": ["'GXM_PREVIOUS'", true] ,"e13d62_client": ["'GXM_NEXT'", true] ,"e14d62_client": ["'GXM_LAST'", true] ,"e15d62_client": ["'PROCURAR'", true] ,"e19d62_client": ["'ATUALIZAPAGINA'", true] ,"e21d61_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'NATUREZADESPESAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NATUREZADESPESAID","Title")',ctrl:'NATUREZADESPESAID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'NATUREZADESPESADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NATUREZADESPESADESCRICAO","Title")',ctrl:'NATUREZADESPESADESCRICAO',prop:'Title'},{ctrl:'NATUREZADESPESATPIMPRESSAO'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'},{av:'AV18Pagina',fld:'vPAGINA'},{av:'AV17NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A2073NaturezaDespesaId',fld:'NATUREZADESPESAID'}],[{av:'AV16OutNaturezaDespesaId',fld:'vOUTNATUREZADESPESAID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV18Pagina',fld:'vPAGINA'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV18Pagina',fld:'vPAGINA'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV16OutNaturezaDespesaId", "vOUTNATUREZADESPESAID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[10]);
   GridContainer.addRefreshingVar(this.GXValidFnc[42]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultanaturezadespesa2());
